import unittest

import numpy as np

from ballet.util import asarray2d
from ballet.util.log import logger
from ballet.util.testing import ArrayLikeEqualityTestingMixin
from ballet.validation.entropy import (
    NEIGHBORS_ALGORITHM, NEIGHBORS_METRIC, _compute_empirical_probability,
    _compute_epsilon, _compute_volume_unit_ball, _estimate_cont_entropy,
    _estimate_disc_entropy, _is_column_cont, _is_column_disc, _make_neighbors,
    estimate_conditional_information, estimate_entropy,
    estimate_mutual_information, nonnegative)


class EntropyTest(ArrayLikeEqualityTestingMixin, unittest.TestCase):

    def test_nonnegative_positive_output(self):
        @nonnegative()
        def func():
            return 1

        self.assertEqual(1, func())

    def test_nonnegative_negative_output(self):
        @nonnegative(name="Result")
        def func():
            return -1

        self.assertEqual(0, func())

    def test_nonnegative_negative_introspection(self):
        @nonnegative()
        def estimate_something():
            return -1

        with self.assertLogs(logger.name, 'WARNING') as cm:
            estimate_something()
        self.assertEqual(1, len(cm.output))
        self.assertIn("Something", cm.output[0])

    def test_make_neighbors(self):
        nn = _make_neighbors()
        self.assertEqual(NEIGHBORS_ALGORITHM, nn.algorithm)
        self.assertEqual(NEIGHBORS_METRIC, nn.metric)

    def test_compute_empirical_probability(self):
        x = [1, 1, 2, 3, 2, 1, 1, 2]
        expected_pk = np.array([4 / 8, 3 / 8, 1 / 8])
        expected_events = np.array([[1], [2], [3]])
        pk, events = _compute_empirical_probability(x)

        self.assertArrayEqual(expected_pk, pk)
        self.assertArrayEqual(expected_events, events)

    def test_compute_volume_unit_ball_chebyshev(self):
        metric = 'chebyshev'
        expected_volume = 1
        for d in [1, 2, 5, 11]:
            volume = _compute_volume_unit_ball(d, metric=metric)
            self.assertEqual(expected_volume, volume)

    def test_compute_volume_unit_ball_euclidean(self):
        metric = 'euclidean'
        volume_upper_bound = 1
        for d in [1, 2, 5, 11]:
            volume = _compute_volume_unit_ball(d, metric=metric)
            self.assertLessEqual(volume, volume_upper_bound)

    def test_disc_entropy_constant_vals_1d(self):
        """If x (column vector) is constant, then H(x) = 0"""
        same_val_arr_ones = np.ones((50, 1))
        H_hat = _estimate_disc_entropy(same_val_arr_ones)
        self.assertEqual(0, H_hat)

    def test_disc_entropy_constant_vals_2d(self):
        """If each column in x (matrix), then H(x) = 0"""
        same_val_arr_zero = np.zeros((50, 1))
        same_val_arr_ones = np.ones((50, 1))
        same_multi_val_arr = np.concatenate(
            (same_val_arr_ones, same_val_arr_zero), axis=1)
        H_hat = _estimate_disc_entropy(same_multi_val_arr)
        self.assertEqual(0, H_hat)

    def test_disc_entropy_two_values(self):
        """Entropy of fair coin ~= log(2)"""
        same_val_arr_zero = np.zeros((50, 1))
        same_val_arr_ones = np.ones((50, 1))
        diff_val_arr = np.concatenate(
            (same_val_arr_ones, same_val_arr_zero), axis=0)

        expected_h = np.log(2)
        H_hat = _estimate_disc_entropy(diff_val_arr)
        self.assertAlmostEqual(expected_h, H_hat)

    def test_is_column_disc(self):
        x = asarray2d(np.arange(50))
        result = _is_column_disc(x)
        self.assertTrue(result)

    def test_is_column_cont(self):
        x = asarray2d(np.random.rand(50))
        result = _is_column_cont(x)
        self.assertTrue(result)

    def test_cont_disc_entropy_differs_disc(self):
        """Expect cont, disc columns to have different entropy"""
        disc = asarray2d(np.arange(50))
        epsilon = _compute_epsilon(disc)

        self.assertNotEqual(
            _estimate_cont_entropy(disc, epsilon), _estimate_disc_entropy(
                disc))

    def test_cont_disc_entropy_differs_cont(self):
        """Expect cont, disc columns to have different entropy"""
        cont = asarray2d(np.arange(50)) + 0.5
        epsilon = _compute_epsilon(cont)
        self.assertNotEqual(
            _estimate_cont_entropy(cont, epsilon), _estimate_disc_entropy(
                cont))

    def test_entropy_multiple_disc(self):
        same_val_arr_zero = np.zeros((50, 1))
        same_val_arr_ones = np.ones((50, 1))
        # The 0.5 forces float => classified as continuous
        cont_val_arange = asarray2d(np.arange(50) + 0.5)
        all_disc_arr = np.concatenate(
            (same_val_arr_ones, same_val_arr_zero), axis=1)
        mixed_val_arr = np.concatenate(
            (all_disc_arr, cont_val_arange), axis=1)

        all_disc_h = estimate_entropy(all_disc_arr)
        mixed_h = estimate_entropy(mixed_val_arr)
        self.assertGreater(
            mixed_h,
            all_disc_h,
            msg='Expected adding continuous column increases entropy')

    def test_mi_uninformative(self):
        x = np.reshape(np.arange(1, 101), (-1, 1))
        y = np.ones((100, 1))
        mi = estimate_mutual_information(x, y)
        h_z = estimate_entropy(x)
        self.assertGreater(
            h_z / 4,
            mi,
            'uninformative column should have no information')

    def test_mi_informative(self):
        x = np.reshape(np.arange(1, 101), (-1, 1))
        y = np.reshape(np.arange(1, 101), (-1, 1))
        mi = estimate_mutual_information(x, y)
        h_y = estimate_entropy(y)
        self.assertGreater(
            mi,
            h_y / 4,
            'exact copy columns should have high information')

    def test_cmi_high_info_uninformative_z(self):
        # redundant copies have little information
        x = np.reshape(np.arange(1, 101), (-1, 1))
        y = np.reshape(np.arange(1, 101), (-1, 1))

        # exact copies of y should have lots of information
        useless_z = np.ones((100, 1))
        cmi = estimate_conditional_information(x, y, useless_z)
        mi = estimate_mutual_information(x, y)
        self.assertAlmostEqual(
            cmi,
            mi,
            'uninformative z should not affect mutual information score')

    def test_cmi_redundant_info(self):
        x = np.reshape(np.arange(1, 101), (-1, 1))
        y = np.reshape(np.arange(1, 101), (-1, 1))
        exact_z = np.reshape(np.arange(1, 101), (-1, 1))

        h_y = estimate_entropy(y)
        cmi = estimate_conditional_information(x, y, exact_z)
        self.assertGreater(
            h_y / 4,
            cmi,
            'redundant copies should have little information')
