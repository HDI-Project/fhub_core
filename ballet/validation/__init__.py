import os

from ballet.exc import (
    InvalidFeatureApi, InvalidProjectStructure, FeatureRejected)
from ballet.project import Project
from ballet.util.ci import get_travis_pr_num
from ballet.validation.feature_evaluation import (
    FeatureRedundancyEvaluator, FeatureRelevanceEvaluator)
from ballet.validation.project_structure import (
    ChangeCollector, FeatureApiValidator, FileChangeValidator)


TEST_TYPE_ENV_VAR = 'TEST_TYPE'


def get_proposed_features(project):
    repo = project.repo
    pr_num = get_travis_pr_num()
    contrib_module_path = project.get('contrib', 'module_path')
    X_df, y_df = project.load_data()
    change_collector = ChangeCollector(
        repo, pr_num, contrib_module_path, X_df, y_df)
    _, _, _, new_feature_info = change_collector.collect_changes()
    # TODO import features
    return new_feature_info


def detect_target_type():
    return os.environ.get(TEST_TYPE_ENV_VAR, default=None)


def check_project_structure(project):
    repo = project.repo
    pr_num = get_travis_pr_num()
    contrib_module_path = project['get']('contrib', 'module_path')
    validator = FileChangeValidator(
        repo, pr_num, contrib_module_path)
    result = validator.validate()
    if not result:
        raise InvalidProjectStructure


def validate_feature_api(project):
    repo = project.repo
    pr_num = get_travis_pr_num()
    contrib_module_path = project.get('contrib', 'module_path')
    X_df, y_df = project.load_data()
    validator = FeatureApiValidator(
        repo, pr_num, contrib_module_path, X_df, y_df)
    result = validator.validate()
    if not result:
        raise InvalidFeatureApi


def evaluate_feature_performance(project):
    X_df, y_df = project.load_data()
    features = project.get_contrib_features()
    evaluator = FeatureRelevanceEvaluator(X_df, y_df, features)
    proposed_features = get_proposed_features(project)
    accepted = evaluator.judge(proposed_features)
    if not accepted:
        raise FeatureRejected


def prune_existing_features(project):
    X_df, y_df = project.load_data()
    features = project.get_contrib_features()
    evaluator = FeatureRedundancyEvaluator(X_df, y_df, features)
    redundant_features = evaluator.prune()

    # propose removal
    for feature in redundant_features:
        pass


def main(package, target_type=None):

    project = Project(package)

    if target_type is None:
        target_type = detect_target_type()

    if target_type == 'project_structure_validation':
        check_project_structure(project)
    elif target_type == 'feature_api_validation':
        validate_feature_api(project)
    elif target_type == 'pre_acceptance_feature_evaluation':
        evaluate_feature_performance(project)
    elif target_type == 'post_acceptance_feature_evaluation':
        prune_existing_features(project)
    else:
        raise NotImplementedError
