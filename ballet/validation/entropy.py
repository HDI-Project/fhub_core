import numbers

import numpy as np
import scipy.stats
from funcy import decorator, suppress
from scipy.special import digamma, gamma
from sklearn.neighbors import NearestNeighbors

from ballet.util import asarray2d
from ballet.util.log import logger

__all__ = (
    'estimate_conditional_information',
    'estimate_entropy',
    'estimate_mutual_information',
)

N_NEIGHBORS = 3   # hyperparameter k from Kraskov estimator
NEIGHBORS_ALGORITHM = 'kd_tree'
NEIGHBORS_METRIC = 'chebyshev'
DISC_COL_UNIQUE_VAL_THRESH = 0.05


@decorator
def nonnegative(call, name=None):
    """Warn if the function's return value is negative and set it to 0"""
    result = call()
    with suppress(TypeError):
        if result < 0:
            result = 0
            # Format a nice log message
            if name is None:
                try:
                    pieces = call._func.__name__.split('_')[1:]
                    name = map(str.capitalize, pieces).join(' ')
                except Exception:
                    name = 'Result'
            logger.warning('%s should be non-negative.', name)
    return result


# Helpers

def _make_neighbors(**kwargs):
    return NearestNeighbors(algorithm=NEIGHBORS_ALGORITHM,
                            metric=NEIGHBORS_METRIC,
                            **kwargs)


def _compute_empirical_probability(x):
    x = asarray2d(x)
    n, _ = x.shape
    events, counts = np.unique(x, axis=0, return_counts=True)
    pk = counts * 1.0 / n
    return pk, events


def _compute_volume_unit_ball(d, metric=NEIGHBORS_METRIC):
    """Compute volume of a d-dimensional unit ball in R^d with given metric"""
    if metric == 'chebyshev':
        return 1
    elif metric == 'euclidean':
        return np.power(np.pi, d / 2) / gamma(1 + d / 2) / 2**d
    else:
        msg = 'metric {metric} not supported'.format(metric=metric)
        raise ValueError(msg)


def _is_column_disc(col):
    # Heuristics to decide if column is discrete

    # Integer columns are discrete
    if issubclass(col.dtype.type, numbers.Integral):
        return True

    # Real-valued columns that are close to integer values are discrete
    rounding_error = col - col.astype(int)
    if np.allclose(rounding_error, np.zeros(col.size)):
        return True

    # Columns with a small fraction of distinct values are discrete
    uniques = np.unique(col)
    if (uniques.size / col.size) < DISC_COL_UNIQUE_VAL_THRESH:
        return True

    return False


def _is_column_cont(col):
    return not _is_column_disc(col)


def _get_disc_columns(x):
    return np.apply_along_axis(_is_column_disc, 0, x)


# Computing epsilon

def _compute_epsilon(x):
    """Calculate epsilon from Kraskov Estimator

    Represents twice the distance of each element to its k-th nearest neighbor.

    Args:
        X (array-like): An array with shape (n_samples, n_features)

    Returns:
        array-like: An array with shape (n_samples, 1) representing
            epsilon as described above.

    References:

    .. [1] A. Kraskov, H. Stogbauer and P. Grassberger, "Estimating mutual
           information". Phys. Rev. E 69, 2004.

    """
    k = N_NEIGHBORS
    n, _ = x.shape

    disc_mask = _get_disc_columns(x)
    if np.all(disc_mask):
        # if no continuous columns, there's no point getting epsilon
        return np.nan
    c = x[:, ~disc_mask]

    nn = _make_neighbors(n_neighbors=k)
    nn.fit(c)
    distances = np.zeros(n)

    # if the kth neighbor is at distance 0, then we are in trouble
    # but we can try the trick of increasing k if we don't use the old
    # value of k sometime later
    while not np.all(distances) and k < n:
        distances, _ = nn.kneighbors(n_neighbors=k)
        distances = distances[:, -1]  # distances to k-nearest neighbor
        k += 1

    epsilon = 2. * np.nextafter(distances, 0)
    return asarray2d(epsilon)


def _compute_n_points_within_radius(x, radius):
    """Compute the number of points within a distance of epsilon"""
    radius = radius.ravel()
    nn = _make_neighbors(radius=radius)
    nn.fit(x)
    ind = nn.radius_neighbors(return_distance=False)
    nx = np.array([i.size for i in ind])
    return nx


# Entropy estimation

def _estimate_disc_entropy(x):
    r"""Estimate the Shannon entropy of a discrete dataset.

    The Shannon entropy of a discrete random variable :math:`Z` with support
    :math:`\mathbb{Z}` and density :math:`P_Z` is given as

    .. math::
        H(Z) = -\sum_{z \in \mathbb{Z}} P_Z(z) \log(P_Z(z))

    Here, since we do not know :math:`P_Z`, we estimate :math:`\hat{P}_Z`, the
    empirical probability, calculated as the frequency in the dataset x.

    If x's columns logically represent continuous features, it is better to use
    the `_estimate_cont_entropy` function. If you are unsure of which to use,
    `estimate_entropy` can take datasets of mixed discrete and continuous
    functions.

    Args:
        x (array-like): Dataset with shape (n_samples, n_features) or
            (n_samples, )

    Returns:
        float: the dataset entropy.
    """
    x = asarray2d(x)
    pk, _ = _compute_empirical_probability(x)
    return scipy.stats.entropy(pk)


def _estimate_cont_entropy(x, epsilon):
    """Estimate the differential entropy of a continuous dataset.

    Based off the Kraskov Estimator [1] for a dataset's differential entropy.
    If epsilon is provided, this is a partial estimation of the Kraskov entropy
    estimator. The bias is cancelled out when computing mutual information.

    The function relies on nonparametric methods based on entropy estimation
    from k-nearest neighbors distances as proposed in [1] and augmented in [2]
    for mutual information estimation.

    If X's columns logically represent discrete features, it is better to use
    the _estimate_disc_entropy function. If you are unsure of which to use,
    _estimate_entropy can take datasets of mixed discrete and continuous
    functions.

    Args:
        x (array-like): Dataset with shape (n_samples, n_features) or
            (n_samples, )
        epsilon (array-like): An array with shape (n_samples, 1) that is
            the epsilon used in Kraskov Estimator. Represents the Chebyshev
            distance from an element to its k-th nearest neighbor in the full
            dataset.

    Returns:
        float: differential entropy of the dataset

    References:

    .. [1] A. Kraskov, H. Stogbauer and P. Grassberger, "Estimating mutual
           information". Phys. Rev. E 69, 2004.

    """
    x = asarray2d(x)
    n, d = x.shape
    nx = _compute_n_points_within_radius(x, epsilon / 2.0)
    c_d = _compute_volume_unit_ball(d)
    return -np.mean(digamma(nx + 1)) + digamma(n) + np.log(c_d) \
        + d * np.mean(np.log(epsilon))


def _estimate_entropy(x, epsilon):
    """Estimate dataset entropy."""
    x = asarray2d(x)
    n, d = x.shape

    # not enough data
    if n <= 1 or d == 0:
        return 0

    disc_mask = _get_disc_columns(x)
    cont_mask = ~disc_mask

    # if all columns are disc, use discrete-specific estimator
    if np.all(disc_mask):
        return _estimate_disc_entropy(x)

    # if all columns are cont, use continuous-specific estimator
    if np.all(cont_mask):
        return _estimate_cont_entropy(x, epsilon)

    # Separate the dataset into discrete and continuous datasets d and c
    d = asarray2d(x[:, disc_mask])
    c = asarray2d(x[:, cont_mask])

    # H(c|d)
    H_c_d = _estimate_conditional_entropy(c, d, epsilon)

    # H(d)
    H_d = _estimate_disc_entropy(d)

    return H_d + H_c_d


def _estimate_conditional_entropy(c, d, epsilon):
    """Estimate H(c|d) where c is continuous and d is discrete"""
    # H(c|d) = \sum_{i} p(d_i) H(c|d=d_i)
    # where we i ranges over unique values of d and c_d_i is the
    # rows of c where d == d_i.
    pk, events = _compute_empirical_probability(d)
    H_c_d = 0.0
    for i, (p_i, d_i) in enumerate(zip(pk, events)):
        mask = np.all(d == d_i, axis=1)
        c_di = c[mask, :]
        # TODO add logging here about small sample size
        epsilon_di = epsilon[mask, :]
        H_c_di = _estimate_cont_entropy(c_di, epsilon_di)
        H_c_d += p_i * H_c_di
    return H_c_d


# Public API

@nonnegative()
def estimate_entropy(x):
    r"""Estimate dataset entropy.

    This function can take datasets of mixed discrete and continuous features,
    and uses a set of heuristics to determine which functions to apply to
    each. Discrete (Shannon) entropy is estimated via the empirical
    probability mass function. Continuous (differential) entropy is
    estimated via the Kraskov estimator [1].

    Let x be made of continuous features c and discrete features d.
    To deal with both continuous and discrete features, We use the
    following reworking of entropy:

    .. math::
       :nowrap:

       \begin{align}
       H(x) &= H(c,d) \\
            &= H(d) + H(c | d) \\
            &= \sum_{x \in d} p(x) H(c(x)) + H(d),
       \end{align}

    where :math:`c(x)` is a dataset that represents the rows of the continuous
    dataset in the same row as a discrete column with value x in the original
    dataset.

    Args:
        x (array-like): Dataset with shape (n_samples, n_features) or
            (n_samples, )
        epsilon (array-like): An array with shape (n_samples, 1) that is
            the epsilon used in Kraskov Estimator. Represents the chebyshev
            distance from an element to its k-th nearest neighbor in the full
            dataset.

    Returns:
        float: Dataset entropy of X.

    References:

    .. [1] A. Kraskov, H. Stogbauer and P. Grassberger, "Estimating mutual
           information". Phys. Rev. E 69, 2004.
    """
    x = asarray2d(x)
    epsilon = _compute_epsilon(x)
    return _estimate_entropy(x, epsilon)


@nonnegative()
def estimate_conditional_information(x, y, z):
    r"""Estimate the conditional mutual information of x and y given z

    Conditional mutual information is the mutual information of two datasets,
    given a third:

    .. math::
       I(x;y|z) = H(x,z) + H(y,z) - H(x,y,z) - H(z)

    Where :math:`H(X)` is the Shannon entropy of dataset :math:`X`. For
    continuous datasets, adapts the Kraskov Estimator [1] for mutual
    information.

    Eq 8 from [1] holds because the epsilon terms cancel out.
    Let :math:`d_x`, represent the dimensionality of the continuous portion of
    x. Then, we see that:

    .. math::
       :nowrap:

       \begin{align}
       d_{xz} + d_{yz} - d_{xyz} - d_z
           &= (d_x + d_z) + (d_y + d_z) - (d_x + d_y + d_z) - d_z \\
           &= 0
       \end{align}

    Args:
        x (array-like): An array with shape (n_samples, n_features_x)
        y (array-like): An array with shape (n_samples, n_features_y)
        z (array-like): An array with shape (n_samples, n_features_z).
            This is the dataset being conditioned on.

    Returns:
        float: conditional mutual information of x and y given z.

    References:

    .. [1] A. Kraskov, H. Stogbauer and P. Grassberger, "Estimating mutual
           information". Phys. Rev. E 69, 2004.
    """
    xz = np.concatenate((x, z), axis=1)
    yz = np.concatenate((y, z), axis=1)
    xyz = np.concatenate((x, y, z), axis=1)

    epsilon = _compute_epsilon(xyz)

    H_xz = _estimate_entropy(xz, epsilon)
    H_yz = _estimate_entropy(yz, epsilon)
    H_xyz = _estimate_entropy(xyz, epsilon)
    H_z = _estimate_entropy(z, epsilon)

    logger.debug('H(X,Z): %s', H_xz)
    logger.debug('H(Y,Z): %s', H_yz)
    logger.debug('H(X,Y,Z): %s', H_xyz)
    logger.debug('H(Z): %s', H_z)

    return H_xz + H_yz - H_xyz - H_z


@nonnegative()
def estimate_mutual_information(x, y):
    r"""Estimate the mutual information of two datasets.

    Mutual information is a measure of dependence between
    two datasets and is calculated as:

    .. math::
       I(x;y) = H(x) + H(y) - H(x,y)

    Where H(x) is the Shannon entropy of x. For continuous datasets,
    adapts the Kraskov Estimator [1] for mutual information.

    Args:
        x (array-like): An array with shape (n_samples, n_features_x)
        y (array-like): An array with shape (n_samples, n_features_y)

    Returns:
        float: mutual information of x and y

    References:

    .. [1] A. Kraskov, H. Stogbauer and P. Grassberger, "Estimating mutual
      information". Phys. Rev. E 69, 2004.
    """
    xy = np.concatenate((x, y), axis=1)
    epsilon = _compute_epsilon(xy)
    H_x = _estimate_entropy(x, epsilon)
    H_y = _estimate_entropy(y, epsilon)
    H_xy = _estimate_entropy(xy, epsilon)
    return H_x + H_y - H_xy
