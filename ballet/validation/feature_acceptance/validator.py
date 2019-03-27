from ballet.util import asarray2d
from ballet.util.log import logger
from ballet.validation.base import FeatureAcceptanceEvaluator
from ballet.validation.entropy import (
    estimate_conditional_information, estimate_entropy)
from ballet.validation.gfssf import (
    LAMBDA_1_ADJUSTMENT, LAMBDA_2_ADJUSTMENT, _compute_lmbdas,
    _compute_threshold, _concat_datasets)

class NoOpAcceptanceEvaluator(FeatureAcceptanceEvaluator):

    def judge(self, feature):
        return True


class GFSSFAcceptanceEvaluator(FeatureAcceptanceEvaluator):
    def __init__(self, X_df, y, features, lmbda_1=0., lmbda_2=0.):
        super().__init__(X_df, y, features)
        self.y = asarray2d(y)
        if (lmbda_1 <= 0):
            lmbda_1 = estimate_entropy(self.y) / LAMBDA_1_ADJUSTMENT
        if (lmbda_2 <= 0):
            lmbda_2 = estimate_entropy(self.y) / LAMBDA_2_ADJUSTMENT
        self.lmbda_1 = lmbda_1
        self.lmbda_2 = lmbda_2

    def judge(self, feature):
        feature_df = feature.as_dataframe_mapper() \
            .fit_transform(self.X_df, self.y)
        n_samples, n_feature_cols = feature_df.shape
        feature_dfs_by_src = {}
        for accepted_feature in self.features:
            accepted_df = accepted_feature.as_dataframe_mapper().fit_transform(
                self.X_df, self.y)
            feature_dfs_by_src[accepted_feature.source] = accepted_df

        lmbda_1, lmbda_2 = _compute_lmbdas(
            self.lmbda_1, self.lmbda_2, feature_df, feature_dfs_by_src)

        logger.info(
            'Judging Feature using GFSSF: lambda_1={l1}, lambda_2={l2}'.format(
                l1=lmbda_1, l2=lmbda_2))
        omit_in_test = [''] + [f.source for f in self.features]
        for omit in omit_in_test:
            logger.debug(
                'Testing with omitted feature: {}'.format(
                    omit or 'None'))
            z = _concat_datasets(feature_dfs_by_src, n_samples, omit)
            cmi = estimate_conditional_information(feature_df, self.y, z)
            logger.debug(
                'Conditional Mutual Information Score: {}'.format(cmi))
            cmi_omit = 0
            n_omit_cols = 0
            if omit:
                omit_df = feature_dfs_by_src[omit]
                _, n_omit_cols = omit_df.shape
                cmi_omit = estimate_conditional_information(
                    omit_df, self.y, z)
                logger.debug('Omitted CMI Score: {}'.format(cmi_omit))
            statistic = cmi - cmi_omit
            threshold = _compute_threshold(
                lmbda_1, lmbda_2, n_feature_cols, n_omit_cols)
            logger.debug('Calculated Threshold: {}'.format(threshold))
            if statistic >= threshold:
                logger.debug(
                    'Succeeded while ommitting feature: {}'.format(
                        omit or 'None'))
                return True
        return False
