Search.setIndex({docnames:["api/ballet","api/ballet.cli","api/ballet.compat","api/ballet.contrib","api/ballet.eng","api/ballet.eng.base","api/ballet.eng.misc","api/ballet.eng.missing","api/ballet.eng.ts","api/ballet.exc","api/ballet.feature","api/ballet.modeler","api/ballet.modeling","api/ballet.modeling.constants","api/ballet.modeling.io_transformers","api/ballet.modeling.problem","api/ballet.modeling.scoring","api/ballet.project","api/ballet.templating","api/ballet.update","api/ballet.util","api/ballet.util.ci","api/ballet.util.fs","api/ballet.util.git","api/ballet.util.io","api/ballet.util.log","api/ballet.util.mod","api/ballet.util.testing","api/ballet.validation","api/ballet.validation.base","api/ballet.validation.diff_checks","api/ballet.validation.entropy","api/ballet.validation.feature_api_checks","api/ballet.validation.feature_evaluation","api/ballet.validation.gfssf_validator","api/ballet.validation.project_structure","api/modules","authors","contributing","history","index","installation","readme","usage"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.viewcode":1,sphinx:55},filenames:["api/ballet.rst","api/ballet.cli.rst","api/ballet.compat.rst","api/ballet.contrib.rst","api/ballet.eng.rst","api/ballet.eng.base.rst","api/ballet.eng.misc.rst","api/ballet.eng.missing.rst","api/ballet.eng.ts.rst","api/ballet.exc.rst","api/ballet.feature.rst","api/ballet.modeler.rst","api/ballet.modeling.rst","api/ballet.modeling.constants.rst","api/ballet.modeling.io_transformers.rst","api/ballet.modeling.problem.rst","api/ballet.modeling.scoring.rst","api/ballet.project.rst","api/ballet.templating.rst","api/ballet.update.rst","api/ballet.util.rst","api/ballet.util.ci.rst","api/ballet.util.fs.rst","api/ballet.util.git.rst","api/ballet.util.io.rst","api/ballet.util.log.rst","api/ballet.util.mod.rst","api/ballet.util.testing.rst","api/ballet.validation.rst","api/ballet.validation.base.rst","api/ballet.validation.diff_checks.rst","api/ballet.validation.entropy.rst","api/ballet.validation.feature_api_checks.rst","api/ballet.validation.feature_evaluation.rst","api/ballet.validation.gfssf_validator.rst","api/ballet.validation.project_structure.rst","api/modules.rst","authors.rst","contributing.rst","history.rst","index.rst","installation.rst","readme.rst","usage.rst"],objects:{"":{ballet:[0,0,0,"-"]},"ballet.contrib":{get_contrib_features:[3,1,1,""]},"ballet.eng":{base:[5,0,0,"-"],misc:[6,0,0,"-"],missing:[7,0,0,"-"],ts:[8,0,0,"-"]},"ballet.eng.base":{BaseTransformer:[5,2,1,""],GroupedFunctionTransformer:[5,2,1,""],GroupwiseTransformer:[5,2,1,""],NoFitMixin:[5,2,1,""],SimpleFunctionTransformer:[5,2,1,""]},"ballet.eng.base.GroupedFunctionTransformer":{transform:[5,3,1,""]},"ballet.eng.base.GroupwiseTransformer":{fit:[5,3,1,""],transform:[5,3,1,""]},"ballet.eng.base.NoFitMixin":{fit:[5,3,1,""]},"ballet.eng.base.SimpleFunctionTransformer":{transform:[5,3,1,""]},"ballet.eng.misc":{BoxCoxTransformer:[6,2,1,""],IdentityTransformer:[6,2,1,""],NamedFramer:[6,2,1,""],ValueReplacer:[6,2,1,""]},"ballet.eng.misc.BoxCoxTransformer":{fit:[6,3,1,""],transform:[6,3,1,""]},"ballet.eng.misc.NamedFramer":{transform:[6,3,1,""]},"ballet.eng.misc.ValueReplacer":{transform:[6,3,1,""]},"ballet.eng.missing":{LagImputer:[7,2,1,""],NullFiller:[7,2,1,""],NullIndicator:[7,2,1,""]},"ballet.eng.missing.NullFiller":{transform:[7,3,1,""]},"ballet.eng.missing.NullIndicator":{transform:[7,3,1,""]},"ballet.eng.ts":{SingleLagger:[8,2,1,""],make_multi_lagger:[8,1,1,""]},"ballet.exc":{BalletError:[9,4,1,""],ConfigurationError:[9,4,1,""],FeatureRejected:[9,4,1,""],FeatureValidationError:[9,4,1,""],InvalidFeatureApi:[9,4,1,""],InvalidProjectStructure:[9,4,1,""],SkippedValidationTest:[9,4,1,""],UnexpectedTravisEnvironmentError:[9,4,1,""],UnsuccessfulInputConversionError:[9,4,1,""]},"ballet.feature":{Feature:[10,2,1,""],make_mapper:[10,1,1,""]},"ballet.feature.Feature":{as_dataframe_mapper:[10,3,1,""],as_input_transformer_tuple:[10,3,1,""]},"ballet.modeler":{DecisionTreeModeler:[11,2,1,""],Modeler:[11,2,1,""],SelfTuningMixin:[11,2,1,""],SelfTuningRandomForestMixin:[11,2,1,""],StratifiedKFoldMultiClassIndicator:[11,2,1,""],TunedModeler:[11,2,1,""],TunedRandomForestClassifier:[11,2,1,""],TunedRandomForestRegressor:[11,2,1,""]},"ballet.modeler.Modeler":{compute_metrics_cv:[11,3,1,""],compute_metrics_train_test:[11,3,1,""],cv_score_mean:[11,3,1,""],dump:[11,3,1,""],fit:[11,3,1,""],load:[11,3,1,""],predict:[11,3,1,""],predict_proba:[11,3,1,""],score:[11,3,1,""],set_estimator:[11,3,1,""]},"ballet.modeler.SelfTuningMixin":{fit:[11,3,1,""],get_tunables:[11,3,1,""],tunables:[11,5,1,""],tuning_cv:[11,5,1,""],tuning_iter:[11,5,1,""]},"ballet.modeler.SelfTuningRandomForestMixin":{get_tunables:[11,3,1,""]},"ballet.modeler.StratifiedKFoldMultiClassIndicator":{split:[11,3,1,""]},"ballet.modeling":{constants:[13,0,0,"-"],io_transformers:[14,0,0,"-"],problem:[15,0,0,"-"],scoring:[16,0,0,"-"]},"ballet.modeling.io_transformers":{FeatureTypeTransformer:[14,2,1,""],TargetTypeTransformer:[14,2,1,""]},"ballet.modeling.io_transformers.FeatureTypeTransformer":{BAD_SHAPE_MSG:[14,5,1,""],BAD_TYPE_MSG:[14,5,1,""],fit:[14,3,1,""],inverse_transform:[14,3,1,""],transform:[14,3,1,""]},"ballet.modeling.io_transformers.TargetTypeTransformer":{fit:[14,3,1,""],inverse_transform:[14,3,1,""],transform:[14,3,1,""]},"ballet.modeling.problem":{BinaryClassificationProblem:[15,2,1,""],ClassificationProblem:[15,2,1,""],MulticlassClassificationProblem:[15,2,1,""],ProblemType:[15,2,1,""],RegressionProblem:[15,2,1,""]},"ballet.modeling.problem.BinaryClassificationProblem":{binary_classification:[15,5,1,""]},"ballet.modeling.problem.ClassificationProblem":{classification:[15,5,1,""]},"ballet.modeling.problem.MulticlassClassificationProblem":{multi_classification:[15,5,1,""]},"ballet.modeling.problem.ProblemType":{binary_classification:[15,5,1,""],classification:[15,5,1,""],multi_classification:[15,5,1,""],regression:[15,5,1,""]},"ballet.modeling.problem.RegressionProblem":{regression:[15,5,1,""]},"ballet.modeling.scoring":{ScorerInfo:[16,2,1,""],get_scorer_names_for_problem_type:[16,1,1,""]},"ballet.modeling.scoring.ScorerInfo":{description:[16,5,1,""],name:[16,5,1,""],scorer:[16,5,1,""]},"ballet.project":{Project:[17,2,1,""],config_get:[17,1,1,""],find_configs:[17,1,1,""],get_config_paths:[17,1,1,""],load_config_at_path:[17,1,1,""],load_config_in_dir:[17,1,1,""],make_config_get:[17,1,1,""],relative_to_contrib:[17,1,1,""]},"ballet.project.Project":{attr_map:[17,5,1,""],branch:[17,5,1,""],contrib_module_path:[17,5,1,""],from_path:[17,6,1,""],on_master:[17,3,1,""],on_pr:[17,3,1,""],path:[17,5,1,""],pr_num:[17,5,1,""],repo:[17,5,1,""]},"ballet.templating":{render_feature_template:[18,1,1,""],render_project_template:[18,1,1,""],start_new_feature:[18,1,1,""]},"ballet.update":{update_project_template:[19,1,1,""]},"ballet.util":{DeepcopyMixin:[20,2,1,""],asarray2d:[20,1,1,""],ci:[21,0,0,"-"],dfilter:[20,1,1,""],fs:[22,0,0,"-"],get_arr_desc:[20,1,1,""],get_enum_keys:[20,1,1,""],get_enum_values:[20,1,1,""],git:[23,0,0,"-"],has_nans:[20,1,1,""],indent:[20,1,1,""],io:[24,0,0,"-"],load_sklearn_df:[20,1,1,""],log:[25,0,0,"-"],make_plural_suffix:[20,1,1,""],mod:[26,0,0,"-"],one_or_raise:[20,1,1,""],quiet:[20,1,1,""],testing:[27,0,0,"-"],whether_failures:[20,1,1,""]},"ballet.util.ci":{TravisPullRequestBuildDiffer:[21,2,1,""],can_use_travis_differ:[21,1,1,""],dump_travis_env_vars:[21,1,1,""],ensure_expected_travis_env_vars:[21,1,1,""],falsy:[21,1,1,""],get_travis_branch:[21,1,1,""],get_travis_env_or_fail:[21,1,1,""],get_travis_pr_num:[21,1,1,""],is_travis_pr:[21,1,1,""]},"ballet.util.ci.TravisPullRequestBuildDiffer":{EXPECTED_TRAVIS_ENV_VARS:[21,5,1,""]},"ballet.util.fs":{isemptyfile:[22,1,1,""],replaceext:[22,1,1,""],spliceext:[22,1,1,""],splitext2:[22,1,1,""],synctree:[22,1,1,""]},"ballet.util.git":{LocalPullRequestBuildDiffer:[23,2,1,""],PullRequestBuildDiffer:[23,2,1,""],did_git_push_succeed:[23,1,1,""],get_branch:[23,1,1,""],get_diff_endpoints_from_commit_range:[23,1,1,""],get_pr_num:[23,1,1,""],get_pull_request_outcomes:[23,1,1,""],get_pull_requests:[23,1,1,""],get_repo:[23,1,1,""],make_commit_range:[23,1,1,""],set_config_variables:[23,1,1,""],switch_to_new_branch:[23,1,1,""]},"ballet.util.git.PullRequestBuildDiffer":{diff:[23,3,1,""]},"ballet.util.io":{load_table_from_config:[24,1,1,""],read_tabular:[24,1,1,""],save_features:[24,1,1,""],save_model:[24,1,1,""],save_predictions:[24,1,1,""],save_targets:[24,1,1,""],write_tabular:[24,1,1,""]},"ballet.util.log":{LevelFilter:[25,2,1,""],LoggingContext:[25,2,1,""],enable:[25,1,1,""],stacklog:[25,2,1,""]},"ballet.util.log.LevelFilter":{filter:[25,3,1,""]},"ballet.util.mod":{import_module_at_path:[26,1,1,""],import_module_from_modname:[26,1,1,""],import_module_from_relpath:[26,1,1,""],modname_to_relpath:[26,1,1,""],relpath_to_modname:[26,1,1,""]},"ballet.util.testing":{ArrayLikeEqualityTestingMixin:[27,2,1,""],log_seed_on_error:[27,1,1,""],seeded:[27,1,1,""]},"ballet.util.testing.ArrayLikeEqualityTestingMixin":{assertArrayAlmostEqual:[27,3,1,""],assertArrayEqual:[27,3,1,""],assertArrayNotAlmostEqual:[27,3,1,""],assertArrayNotEqual:[27,3,1,""],assertFrameEqual:[27,3,1,""],assertFrameNotEqual:[27,3,1,""],assertIndexEqual:[27,3,1,""],assertIndexNotEqual:[27,3,1,""],assertPandasObjectEqual:[27,3,1,""],assertPandasObjectNotEqual:[27,3,1,""],assertSeriesEqual:[27,3,1,""],assertSeriesNotEqual:[27,3,1,""]},"ballet.validation":{BalletTestTypes:[28,2,1,""],base:[29,0,0,"-"],check_project_structure:[28,1,1,""],detect_target_type:[28,1,1,""],diff_checks:[30,0,0,"-"],entropy:[31,0,0,"-"],evaluate_feature_performance:[28,1,1,""],feature_api_checks:[32,0,0,"-"],feature_evaluation:[33,0,0,"-"],get_accepted_features:[28,1,1,""],get_proposed_feature:[28,1,1,""],gfssf_validator:[34,0,0,"-"],main:[28,1,1,""],project_structure:[35,0,0,"-"],prune_existing_features:[28,1,1,""],validate_feature_api:[28,1,1,""],validation_stage:[28,1,1,""]},"ballet.validation.BalletTestTypes":{FEATURE_ACCEPTANCE_EVALUTION:[28,5,1,""],FEATURE_API_VALIDATION:[28,5,1,""],FEATURE_PRUNING_EVALUATION:[28,5,1,""],PROJECT_STRUCTURE_VALIDATION:[28,5,1,""]},"ballet.validation.base":{BaseCheck:[29,2,1,""],BaseValidator:[29,2,1,""],FeatureAcceptanceEvaluator:[29,2,1,""],FeaturePerformanceEvaluator:[29,2,1,""],FeaturePruningEvaluator:[29,2,1,""],check_from_class:[29,1,1,""]},"ballet.validation.base.BaseCheck":{check:[29,3,1,""],do_check:[29,3,1,""]},"ballet.validation.base.BaseValidator":{validate:[29,3,1,""]},"ballet.validation.base.FeatureAcceptanceEvaluator":{judge:[29,3,1,""]},"ballet.validation.base.FeaturePruningEvaluator":{prune:[29,3,1,""]},"ballet.validation.diff_checks":{DiffCheck:[30,2,1,""],IfInitModuleThenIsEmptyCheck:[30,2,1,""],IsAdditionCheck:[30,2,1,""],IsPythonSourceCheck:[30,2,1,""],ModuleNameCheck:[30,2,1,""],RelativeNameDepthCheck:[30,2,1,""],SubpackageNameCheck:[30,2,1,""],WithinContribCheck:[30,2,1,""]},"ballet.validation.diff_checks.IfInitModuleThenIsEmptyCheck":{check:[30,3,1,""]},"ballet.validation.diff_checks.IsAdditionCheck":{check:[30,3,1,""]},"ballet.validation.diff_checks.IsPythonSourceCheck":{check:[30,3,1,""]},"ballet.validation.diff_checks.ModuleNameCheck":{check:[30,3,1,""]},"ballet.validation.diff_checks.RelativeNameDepthCheck":{check:[30,3,1,""]},"ballet.validation.diff_checks.SubpackageNameCheck":{check:[30,3,1,""]},"ballet.validation.diff_checks.WithinContribCheck":{check:[30,3,1,""]},"ballet.validation.entropy":{calculate_disc_entropy:[31,1,1,""],estimate_conditional_information:[31,1,1,""],estimate_cont_entropy:[31,1,1,""],estimate_entropy:[31,1,1,""],estimate_mutual_information:[31,1,1,""]},"ballet.validation.feature_api_checks":{CanDeepcopyCheck:[32,2,1,""],CanFitCheck:[32,2,1,""],CanFitTransformCheck:[32,2,1,""],CanMakeMapperCheck:[32,2,1,""],CanPickleCheck:[32,2,1,""],CanTransformCheck:[32,2,1,""],FeatureApiCheck:[32,2,1,""],HasCorrectInputTypeCheck:[32,2,1,""],HasCorrectOutputDimensionsCheck:[32,2,1,""],HasTransformerInterfaceCheck:[32,2,1,""],IsFeatureCheck:[32,2,1,""],NoInfiniteValuesCheck:[32,2,1,""],NoMissingValuesCheck:[32,2,1,""]},"ballet.validation.feature_api_checks.CanDeepcopyCheck":{check:[32,3,1,""]},"ballet.validation.feature_api_checks.CanFitCheck":{check:[32,3,1,""]},"ballet.validation.feature_api_checks.CanFitTransformCheck":{check:[32,3,1,""]},"ballet.validation.feature_api_checks.CanMakeMapperCheck":{check:[32,3,1,""]},"ballet.validation.feature_api_checks.CanPickleCheck":{check:[32,3,1,""]},"ballet.validation.feature_api_checks.CanTransformCheck":{check:[32,3,1,""]},"ballet.validation.feature_api_checks.HasCorrectInputTypeCheck":{check:[32,3,1,""]},"ballet.validation.feature_api_checks.HasCorrectOutputDimensionsCheck":{check:[32,3,1,""]},"ballet.validation.feature_api_checks.HasTransformerInterfaceCheck":{check:[32,3,1,""]},"ballet.validation.feature_api_checks.IsFeatureCheck":{check:[32,3,1,""]},"ballet.validation.feature_api_checks.NoInfiniteValuesCheck":{check:[32,3,1,""]},"ballet.validation.feature_api_checks.NoMissingValuesCheck":{check:[32,3,1,""]},"ballet.validation.feature_evaluation":{NoOpAcceptanceEvaluator:[33,2,1,""],NoOpPruningEvaluator:[33,2,1,""]},"ballet.validation.feature_evaluation.NoOpAcceptanceEvaluator":{judge:[33,3,1,""]},"ballet.validation.feature_evaluation.NoOpPruningEvaluator":{prune:[33,3,1,""]},"ballet.validation.gfssf_validator":{GFSSFAcceptanceEvaluator:[34,2,1,""]},"ballet.validation.gfssf_validator.GFSSFAcceptanceEvaluator":{judge:[34,3,1,""]},"ballet.validation.project_structure":{ChangeCollector:[35,2,1,""],CollectedChanges:[35,2,1,""],FeatureApiValidator:[35,2,1,""],FileChangeValidator:[35,2,1,""],subsample_data_for_validation:[35,1,1,""]},"ballet.validation.project_structure.ChangeCollector":{collect_changes:[35,3,1,""]},"ballet.validation.project_structure.CollectedChanges":{candidate_feature_diffs:[35,5,1,""],file_diffs:[35,5,1,""],inadmissible_diffs:[35,5,1,""],new_feature_info:[35,5,1,""],valid_init_diffs:[35,5,1,""]},"ballet.validation.project_structure.FeatureApiValidator":{validate:[35,3,1,""]},"ballet.validation.project_structure.FileChangeValidator":{validate:[35,3,1,""]},ballet:{cli:[1,0,0,"-"],compat:[2,0,0,"-"],contrib:[3,0,0,"-"],eng:[4,0,0,"-"],exc:[9,0,0,"-"],feature:[10,0,0,"-"],modeler:[11,0,0,"-"],modeling:[12,0,0,"-"],project:[17,0,0,"-"],templating:[18,0,0,"-"],update:[19,0,0,"-"],util:[20,0,0,"-"],validation:[28,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","exception","Python exception"],"5":["py","attribute","Python attribute"],"6":["py","classmethod","Python class method"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method","4":"py:exception","5":"py:attribute","6":"py:classmethod"},terms:{"15camerareadysubmissionneurips_sysml_2018":[40,42],"95a70e9":43,"case":[5,10,17,26,31],"catch":25,"class":[5,6,7,8,10,11,14,15,16,17,20,21,23,25,27,28,29,30,32,33,34,35],"default":[5,6,7,17,21,26,27],"final":11,"float":[6,27,31],"function":[7,10,16,17,22,25,31,38,43],"import":[3,5,17,26,28,43],"int":[8,21,23,27,35],"long":25,"new":[5,18,22,30,32,35,38,40,42],"null":7,"public":41,"return":[3,8,10,11,16,17,20,21,22,23,24,28,29,31,33,34,35],"true":[11,15,25,26],"try":43,"var":21,For:[3,5,23,31,32],NOT:22,The:[3,5,9,11,23,26,28,30,31,38,41,43],Then:[11,31],There:27,__file__:17,__init__:[17,26,30,43],_not_:31,_split:11,_util:26,about:[5,38,40,42,43],abov:6,absolut:[6,26],accept:[20,23,28,29,33,34,40,42],access:17,accord:[5,18,31],accuraci:[17,43],across:11,activ:[40,42],actual:11,adapt:[11,31],add:[22,26,38,39],add_init:26,added:22,addit:[5,17,30],admiss:35,after:29,against:[23,28],algorithm:[40,42],alia:35,all:[17,20,27,28,35,38,40,42],allow:27,almost:27,alreadi:26,also:21,altern:10,alwai:[11,38,41],ani:[5,17,20,22,38,40,42],anyth:38,api:[9,30,32,39],appli:[5,6,8,20,31],appreci:38,approxim:[27,31],arbitrari:[27,43],arg:[11,25],argument:[5,8,22],arr:[20,31],arrai:[11,20,24,27,31,32],arraylikeequalitytestingmixin:[27,39],articl:38,as_dataframe_mapp:10,as_input_transformer_tupl:10,asarray2d:20,asctim:25,assertarrayalmostequ:27,assertarrayequ:27,assertarraynotalmostequ:27,assertarraynotequ:27,assertframeequ:27,assertframenotequ:27,assertindexequ:27,assertindexnotequ:27,assertpandasobjectequ:27,assertpandasobjectnotequ:27,assertseriesequ:27,assertseriesnotequ:27,asset:[40,42],assum:38,attr_map:17,attribut:[6,17],augment:31,author:[40,42],auto:11,automat:43,averag:11,average_precis:43,avoid:5,axes:20,back:38,bad_shape_msg:14,bad_type_msg:14,balanced_accuraci:43,ballet:[38,39,41],ballet_project:43,balleterror:[5,9,18,28],ballettesttyp:28,bar:[22,26],base:[0,4,6,7,8,9,10,11,14,15,16,17,20,21,23,25,27,28,30,31,32,33,34,35],basecheck:[29,30,32],baseestim:[5,14],basetransform:[5,6,7],basevalid:[29,35],basic:43,baz:26,becaus:[26,31],been:[28,43],befor:[22,38,43],behavior:20,being:31,best:38,better:31,between:[5,27,31],bia:31,binari:43,binary_classif:15,binaryclassificationproblem:15,bit:38,block:[40,42],blog:38,booktitl:[40,42],bool:[22,26,29,33,34,35],bootstrap:11,both:[22,28,31,40,42],box:6,boxcox1p:6,boxcoxtransform:6,branch:[17,21,28,35,38],brand:[40,42],brier_score_loss:43,bug:[40,42],bugfix:38,build:[17,21,40,42],built:24,bump:38,bumpvers:38,calcul:31,calculate_disc_entropi:31,call:[5,11,20,22,28,32,43],callabl:[5,7,10,20,22,25],can:[10,11,16,17,23,30,31,32,38,40,41,42,43],can_use_travis_diff:21,cancel:31,candeepcopycheck:32,candid:[9,17,28],candidate_feature_diff:35,canfitcheck:32,canfittransformcheck:32,canmakemappercheck:32,canpicklecheck:32,cantransformcheck:32,cast:20,categor:[10,35],cc_kwarg:18,chang:[9,17,35,38,39,43],changecollector:35,chebyshev:31,check:[6,20,21,23,29,30,32,38,39],check_class:29,check_from_class:29,check_project_structur:28,checker_arg:29,checker_kwarg:29,checkout:38,choos:43,chosen:43,claim:26,class_weight:11,classif:[11,15,43],classification_scor:43,classification_typ:43,classificationproblem:15,classmethod:17,cli:[0,36],clone:[5,38,41],close:[23,25],cls:20,code:[27,40,42,43],collabor:[40,42,43],collect:[3,8,10,20,28,35],collect_chang:35,collectedchang:35,column:[6,10,31,43],com:[21,23,38,40,41,42,43],command:[23,39,40,41,42,43],commit:[23,38,43],commit_rang:23,compar:[27,35],comparison:[23,27,28,35],compat:[0,11,20,36,40,42],complet:16,comput:[11,17,31],compute_metrics_cv:11,compute_metrics_train_test:11,conceptu:10,condit:[22,25,31],condition:6,conf:[17,43],config:[17,23,24],config_get:17,configur:[9,17,43],configurationerror:[9,17],consid:[5,7],consol:25,constant:[0,12],constructor:10,contain:[17,24,40,42,43],context:25,continu:[31,40,42,43],contrib:[0,17,18,30,35,36,43],contrib_module_path:[17,35],contribut:[3,35,43],contributor:[40,42,43],control:27,conveni:10,convers:[9,26],convert:[6,10,26,32],cookbook:25,cookiecutt:[18,43],copi:[18,38,41],correct:32,correspond:[17,21],could:[28,38],cox:6,creat:[5,17,18,38,43],credit:38,criterion:11,cross:11,curl:41,current:21,cv_score_mean:11,d_x:31,d_xyz:31,d_xz:31,d_y:31,d_yz:31,d_z:31,data:[5,10,11,32,40,42,43],datafram:[5,6,8,10,11,24,27,32],dataframemapp:[10,32],dataset:[31,40,42,43],deal:31,decisiontreemodel:11,decor:20,deepcopi:32,deepcopymixin:20,def:20,defin:[10,16,17,43],delta:27,depend:[31,43],depth:30,describ:43,descript:[10,16,20,38],deselect:28,destin:22,detail:[23,38,43],detect:26,detect_target_typ:28,determin:[6,22,28,31],dev:38,develop:[5,38,40,42],dfilter:20,dict:[5,8,10,11,17,23,24],dictionari:11,did_git_push_succe:23,dif:[23,28],diff:[17,23,30],diff_check:[0,28],diffcheck:30,differ:[5,8,11,20,21],dimens:32,dimension:31,dir:17,directli:[23,38],directori:[17,18,22,24,26,43],discret:31,disk:32,distanc:31,do_check:29,doc:[6,21,22,25,38],docstr:38,document:[40,42],doe:[5,17,20,22],doing:11,don:41,done:[11,25,31,38],dot:22,download:[41,43],driven:38,driver:[39,43],dst:22,dump:11,dump_travis_env_var:21,dure:5,each:[3,5,6,7,8,10,11,20,31],easi:17,easier:38,echo:25,edu:37,either:[10,30,41],element:[27,31],els:[21,27],email:[23,43],embed:10,empir:31,emploi:31,empti:[23,30,40,42,43],enabl:[25,27],encapsul:17,encod:10,encount:5,end:[23,24,40,42],endpoint:23,eng:[0,36,40,42,43],engin:[40,42,43],enhanc:38,ensembl:11,ensure_expected_travis_env_var:21,entir:31,entri:[23,38],entropi:[0,28],env:21,environ:[9,21],epsilon:31,equal:[6,27],equat:31,equival:22,error:[5,9,22,23,25,27],estim:[11,31],estimate_conditional_inform:31,estimate_cont_entropi:31,estimate_entropi:31,estimate_mutual_inform:31,etc:[5,31],evalu:[29,39,43],evaluate_feature_perform:28,even:38,eventu:5,everi:[5,38],exact:31,exactli:28,exampl:[5,17,20,22,23,25,26,43],exc:[0,5,18,28,36],except:[9,25],execut:[9,32],exist:[11,17,18,22,29,33,40,42],expand:[40,42],expected_travis_env_var:21,explain:38,explained_vari:43,ext:22,extens:[22,40,42],extern:43,f1_macro:43,f1_micro:43,f1_sampl:43,f1_weight:43,fail:26,failur:[20,23,25],fals:[11,14,15,19],falsi:21,feat:[40,42],featur:[0,3,9,11,17,18,24,26,28,29,30,31,32,33,34,35,36,39,40,42],feature_:[30,43],feature_acceptance_evalu:28,feature_acceptance_evalut:28,feature_api_check:[0,28],feature_api_valid:28,feature_evalu:[0,28],feature_pruning_evalu:28,featureacceptanceevalu:[29,33,34],featureapicheck:32,featureapivalid:35,featureperformanceevalu:29,featurepruningevalu:[29,33],featurereject:9,featuretypetransform:14,featurevalidationerror:9,field:35,file:[10,17,18,22,23,24,26,30,35,38,43],file_diff:35,filechangevalid:35,filenam:[22,25],filepath:[11,22,24],fill:7,filter:[7,20,25],find:[17,23],find_config:17,finit:32,first:[27,37,39,40,42,43],fit:[5,6,10,11,14,32],fit_arg:6,fit_kwarg:[5,11,14],fit_tranform:32,fit_transform:32,flake8:38,fold:11,follow:[17,31],foo:[3,5,17,22,26,43],forest:11,forgot:38,fork:[38,43],form:[20,23,26],format:[11,24,25],found:17,framework:[40,42,43],free:[40,42],frequenc:31,from:[5,10,17,23,24,26,28,29,31,35,40,42,43],from_path:17,full:[22,31],full_nam:43,fulli:31,func:5,func_arg:5,func_kwarg:5,functiontransform:5,gener:[6,11,18,29,43],get:[3,16,17,20,21,23,28],get_accepted_featur:28,get_arr_desc:20,get_branch:23,get_config_path:17,get_contrib_featur:[3,17,39],get_diff_endpoints_from_commit_rang:23,get_enum_kei:20,get_enum_valu:20,get_pr_num:23,get_proposed_featur:28,get_pull_request:23,get_pull_request_outcom:23,get_repo:23,get_scorer_names_for_problem_typ:16,get_travis_branch:21,get_travis_env_or_fail:21,get_travis_pr_num:21,get_tun:11,gfssf_valid:[0,28],gfssfacceptanceevalu:34,gini:11,git:[0,17,20,21,35,38,39,41,43],github:[38,40,41,42,43],github_usernam:43,gitignor:43,given:[6,7,23,31,38,40,42],grassberg:31,greatli:38,group:[5,7,8,11],groupbi:[5,8],groupby_kwarg:[5,7,8],groupedfunctiontransform:[5,7,8],groupwis:5,groupwisetransform:5,grow:[40,42],guid:41,had:9,handl:11,handle_error:5,handle_unknown:5,handler:25,has:[5,17,18,20,28,30,32,43],has_nan:20,hascorrectinputtypecheck:32,hascorrectoutputdimensionscheck:32,hastransformerinterfacecheck:32,have:[6,28,35,38,41,43],hdf5:24,hdi:[38,40,41,42],help:[23,38],henc:11,here:38,heurist:31,histori:38,hold:31,home:26,homepag:[40,42],hot:10,hous:43,how:[38,40,42,43],howto:25,html:[6,25],http:[6,21,23,25,38,40,41,42],hypothet:43,ident:11,identifi:[5,26],identitytransform:[6,43],ifinitmodulethenisemptycheck:30,ignor:[5,11],ill:23,implement:[5,25,30,32,39,43],import_module_at_path:26,import_module_from_modnam:26,import_module_from_relpath:26,imput:5,inadmiss:35,inadmissible_diff:35,includ:[17,22,38,40,42],inclus:[23,43],indent:20,index:[27,40],indic:[7,11],individu:5,inf:31,info:[23,25,28],inform:[5,16,17,31,43],initi:[5,23,43],inproceed:[40,42],input:[5,6,9,10,11,14,24,32,43],input_dir:24,insert:43,instal:38,instanc:[3,5,6,10,17,32,40,42,43],instead:11,integ:11,integr:[40,42,43],interfac:32,interpret:23,introduc:[9,30,35],invalid:9,invalidfeatureapi:9,invalidprojectstructur:9,invari:[40,42],inverse_transform:14,inverse_transform_kwarg:14,io_transform:[0,12],is_travis_pr:21,isadditioncheck:30,isempti:22,isemptyfil:22,isfeaturecheck:32,isna:7,isnan:20,isnul:7,ispythonsourcecheck:30,issu:38,iter:32,its:[5,6,17,29,31],itself:[10,26],jane:43,jane_develop:43,job:21,judg:[29,33,34],just:16,kalyan:[40,42],keep:38,kei:[11,24],kelvin:[40,42],keyword:[5,8],kozacheko:31,kozachenko:31,kraskov:31,kwarg:[11,25,27],label:11,lag:[7,8],lagimput:7,lambda:20,latter:23,lead:22,leak:5,leakag:5,learn:[5,10,11,40,42],learningsi:[40,42],leonenko:31,less:22,let:[31,43],level:[0,5,25],levelfilt:25,levelnam:25,leverag:[40,42,43],librari:[40,42],licens:[40,42],light:[40,42],lightweight:[40,42],like:[3,5,10,11,17,22,24,27,31,32,40,42,43],line:20,lineno:25,lint:38,list:[3,10,11,16,17,25,28,29,33,38],list_of_failur:20,littl:38,lmbda:6,lmbda_1:34,lmbda_2:34,load:[11,17,24],load_config_at_path:17,load_config_in_dir:17,load_data:[17,43],load_sklearn_df:20,load_table_from_config:24,local:38,localpullrequestbuilddiff:23,locat:[26,43],log:[0,20,31],log_seed_on_error:27,logger:[25,27],loggingcontext:25,logic:[10,31,32,40,42],logrecord:25,look:38,made:[10,31],mai:[11,26],main:28,maintain:[38,40,42,43],major:38,make:[10,11,38,40,41,42],make_commit_rang:23,make_config_get:17,make_mapp:10,make_multi_lagg:8,make_plural_suffix:20,manag:25,mani:[27,38],map:[10,11,24],mapper:10,master:[17,28,41,43],match:30,max_depth:11,max_featur:11,max_leaf_nod:11,mean:[5,11],measur:31,meet:38,merg:[23,40,42,43],messag:[25,28],method:[5,17,25,31,41],metric:[11,16],micah:[37,40,42],might:[5,38],min_impurity_decreas:11,min_impurity_split:11,min_samples_leaf:11,min_samples_split:11,min_weight_fraction_leaf:11,minor:38,misc:[0,4,43],miss:[0,4,5,32],mit:[37,40,42],mix:[5,27,31],mkvirtualenv:38,mod:[0,20],mode:43,model:[0,24,36,39],model_select:11,modnam:26,modname_to_relpath:26,modpath:26,modul:[0,4,12,20,28,36,39,40,43],modulenamecheck:30,moduletyp:17,modutil:39,more:[16,22,28,38,40,42],most:[41,43],mostli:17,mse:11,msg:27,multi:39,multi_classif:15,multiclass:[11,43],multiclassclassificationproblem:15,multilabel:11,must:[24,26,30,43],mutual:31,n_estim:11,n_featur:[11,31],n_features_i:31,n_features_x:31,n_features_z:31,n_job:11,n_sampl:[11,31],name:[5,6,10,11,16,18,20,21,23,24,25,26,30,38,39,43],namedfram:6,nan:20,narrow:38,ndarrai:11,nearest:31,need:[10,16,22,26,32],needs_label_binar:14,neg_log_loss:43,neg_mean_absolute_error:43,neg_mean_squared_error:43,neg_mean_squared_log_error:43,neg_median_absolute_error:43,neighbor:31,neurip:[40,42],new_ext:22,new_feature_info:35,new_fil:30,next:[40,42],nips18:[40,42],nofitmixin:5,noinfinitevaluescheck:32,nomissingvaluescheck:32,non:32,none:[5,6,7,8,10,11,16,17,21,22,23,25,26,27,28,31,37],nonparametr:31,noopacceptanceevalu:33,nooppruningevalu:33,normal:5,note:[11,23,43],notimplementederror:25,now:[38,43],nullfil:7,nullind:7,number:[11,17,20,21,23,31,32,35],obj:[20,24,29],object:[3,5,6,10,11,15,16,17,20,23,24,25,27,28,29,32,35,43],off:31,offici:38,on_mast:17,on_pr:17,onc:[40,41,42],one:[10,17,18,22,28],one_or_rais:20,ones:28,onexist:22,onli:[22,23],oob_scor:11,open:[38,40,42],oper:[5,8,38],option:[5,10,17,18],order:[10,22],org:[6,25,38,40,42,43],origin:[31,38],other:38,otherwis:21,out:[31,43],output:[10,24,25,32],output_dir:24,over:20,overal:32,overwritten:22,own:[40,42],owner:23,packag:[17,26,30,36,43],package_root:17,page:40,panda:[5,7,27,31],paper:[40,42],paramet:[3,5,6,7,8,10,11,17,18,22,23,24,25,26,27,28,30,31,32,35],parent:17,part:[38,40,42],partial:31,pass:[5,6,7,10,22,38,43],patch:38,path:[3,10,17,18,22,24,26,28,35],pattern:23,pca:10,pd_read_kwarg:24,pdf:[40,42],per:21,peredachi:31,perform:[11,29,40,42],phy:31,pickl:[24,32],pip:41,pipelin:[9,32,40,42,43],pkl:24,place:27,placehold:11,pleas:[38,40,42],point:[5,23,29,31,40,42],portion:31,possibl:38,post:38,power:6,pr_num:[17,21,23,35],pre:43,precis:43,precision_macro:43,precision_micro:43,precision_sampl:43,precision_weight:43,pred:20,predic:20,predict:[11,24,43],predict_house_pric:43,predict_proba:11,prefer:41,preprocess:5,present:[3,26,31],previous:6,price:43,prj:17,probabl:31,probl:31,problem:[0,11,12,16,17,43],problem_typ:[11,16,43],problem_type_detail:17,problemtyp:[11,15],process:41,produc:[10,25,32],project:[0,3,9,18,23,26,28,29,30,35,36,38,39,40,41,42],project_nam:43,project_root:[3,26],project_slug:43,project_structur:[0,28],project_structure_valid:28,prone:25,proper:[18,30],properti:17,propos:[28,31,35,38,40,42,43],proposed_featur:28,provid:[10,11,27,31,40,42],prune:[29,33],prune_existing_featur:28,pull:[21,23,35,40,42,43],pull_request:38,pullrequestbuilddiff:[21,23],pullrequestfeaturevalid:39,pure:5,push:[19,23,38,40,42],push_info:23,pushinfo:23,put:38,py34:20,py35:20,pypi:[38,39],pytest:38,python:[17,25,30,35,38,41,43],quickstart:[39,40,42,43],quiet:20,rais:[5,17,18,22,23,25,28],random:[11,31],random_st:11,randomforestclassifi:11,randomforestregressor:11,rang:23,raw:10,read:[24,40,42],read_tabular:24,readi:38,readm:[38,43],recal:43,recall_macro:43,recall_micro:43,recall_sampl:43,recall_weight:43,receiv:[40,42,43],recent:41,recurs:22,ref:23,refer:[6,17,31,32,43],regress:[11,15,43],regression_scor:43,regressionproblem:15,regular:26,reject:[9,23,29],rel:[17,26,35],relative_to_contrib:17,relativenamedepthcheck:30,releas:[38,39],relev:26,reli:31,relpath:26,relpath_to_modnam:26,rememb:38,remind:38,remot:23,remov:[29,33],render:[18,40,42,43],render_feature_templ:18,render_project_templ:18,replac:[5,6,7,22],replaceext:22,repo:[17,21,23,35,38,41],report:[27,40,42],repositori:[40,41,42,43],repres:[17,30,31],reproduc:38,request:[21,23,35,40,42,43],requir:[5,10,21,43],restor:27,result:[3,6,11,23,43],rev:31,revis:23,rework:31,rng:27,roc_auc:43,root:[3,17,22,23,25,26,43],routin:[9,39],row:31,run:[25,27,38,40,41,42,43],run_long_funct:25,safe:[40,42],same:[18,22,31],sampl:[11,31],save:[24,32],save_featur:24,save_model:24,save_predict:24,save_target:24,scalar:10,scienc:[40,42],scipi:6,scope:38,score:[0,11,12],scorer:[11,16,17,43],scorer_nam:16,scorerinfo:16,scoring_nam:11,script:43,search:40,second:27,section:[17,43],see:[17,21,23,31,40,42,43],seed:27,select:[6,25,40,42,43],selftuningmixin:11,selftuningrandomforestmixin:11,send:38,separ:5,sequenc:[10,17],seri:[11,27],servic:[40,42,43],set:[5,11,21,23,27,31,38],set_config_vari:23,set_estim:11,setup:38,shannon:31,shape:[11,14,20,31],should:[11,17,26,29,32,33,34,38],simpl:[6,25],simplefunctiontransform:[5,6,10],simpleimput:5,singl:[3,43],singlelagg:8,skew:6,skip:[9,25,43],skippedvalidationtest:9,sklearn:[5,11,14,16],smith2018ballet:[40,42],smith:[37,40,42],softwar:[40,42],sole:35,solv:43,some:[5,6,26],some_test:38,someth:[5,29,35],sometim:20,sourc:[3,5,6,7,8,9,10,11,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,40,42,43],space:20,special:6,specif:[7,17,43],specifi:[23,26],splice:22,spliceext:22,split:[11,22],splitext2:22,splitter:11,src:22,stack:25,stacklog:25,stackoverflow:23,stage:[5,6,39],standalon:10,start:[18,23],start_new_featur:18,state:[23,27],step:[35,38],still:31,stogbauer:31,store:[21,27],str:[3,5,10,11,17,22,23,26,32,35],strategi:5,stratif:11,stratifiedkfold:11,stratifiedkfoldmulticlassind:11,stream:[40,42],string:22,structur:[9,39,40,42],stub:18,style:10,subdirectori:[26,30,35],submiss:[40,42],submit:[40,42],submodul:[36,43],subpackag:[3,30,36,43],subpackagenamecheck:30,subroutin:31,subsample_data_for_valid:35,subset:38,succeed:[23,29,35],success:[6,20],successfulli:43,suffici:11,suffix:20,suit:[40,42,43],sum:31,sum_:31,supervis:11,suppli:43,support:38,sure:[38,40,42],switch_to_new_branch:23,sync:22,synctre:22,sys:26,system:[26,38,40,42],tabl:24,tabular:24,tag:38,take:[22,31],tarbal:41,target:[11,24],targettypetransform:14,techniqu:10,templat:[0,36,39,40,42,43],temporari:18,term:31,termin:41,test:[0,5,6,7,9,11,20,38],test_target_typ:28,text:20,than:28,thei:[26,38,40,42,43],thi:[5,10,11,16,17,22,23,25,27,31,32,35,38,40,41,42,43],third:31,three:31,threshold:6,through:[5,6,17,38,40,41,42,43],time:[5,31],titl:[40,42],tmp:43,toler:27,top:0,tox:38,train:[5,11,43],tranform_kwarg:7,transform:[5,6,7,8,10,11,14,32,40,42,43],transform_arg:6,transform_kwarg:[5,6,7,14],transformermixin:[5,14],travi:[9,21,38,39,43],travis_branch:21,travis_build_dir:21,travis_commit_rang:21,travis_pull_request:21,travis_pull_request_branch:21,travispullrequestbuilddiff:21,tree:17,trigger:43,troubleshoot:38,truthi:21,tunabl:11,tune:11,tunedmodel:11,tunedrandomforestclassifi:11,tunedrandomforestregressor:11,tuning_cv:11,tuning_it:11,tupl:[5,10,17,22,23,25,35],two:[27,31],txt:[22,43],type:[3,9,10,11,14,16,17,20,23,28,29,31,33,34,35,43],ultim:43,unchang:5,under:[40,42,43],underli:17,unexpect:9,unexpectedtravisenvironmenterror:9,unfortun:23,union:[8,10,11],uniqu:26,unit:27,unknown:5,unmodifi:43,unsuccess:9,unsuccessfulinputconversionerror:9,unsupport:14,unsur:31,updat:[0,36,38],update_project_templ:19,ure:[40,42],url:[40,42],usag:[5,17,25],use:[31,38,40,42,43],used:[11,16,31,40,42,43],useful:[5,17,40,42],user:[21,23,26,43],user_:[30,43],user_exampl:30,usernam:43,uses:[23,31,43],using:[7,25,27,31,40,42,43],usual:[17,26,40,42],util:[0,16,17,36,39],valid:[0,9,11,17,36,39,40,42],valid_init_diff:35,validate_feature_api:28,validation_stag:28,valu:[5,6,7,10,11,17,27,31,32],valueerror:23,valuereplac:6,variabl:[6,10,11,16,21,23],varieti:11,vector:[7,10,31],veeramachaneni:[40,42],verbos:11,versatil:[11,39,40,42],version:38,view:29,virtualenv:38,virtualenvwrapp:38,volunt:38,wai:[27,38],walk:3,want:[38,43],warm_start:11,warn:[11,25],web:38,websit:38,weight:[40,42],welcom:38,well:[17,40,42],were:17,what:43,when:[5,31,38],where:[11,16,17,31,32],whether:[5,7,17,23,26,29,33,34,38],whether_failur:20,which:[5,6,10,20,26,31,43],whoever:38,why:37,wise:[5,27],within:[3,9,17,18,26,30,40,42,43],withincontribcheck:30,work:[38,40,42],workshop:[40,42],would:[5,23,26,38],write:[24,40,42,43],write_tabular:24,x_df:[29,32,33,34],x_te:5,y_df:32,year:[40,42],yet:37,yield:11,yml:[17,43],you:[11,23,31,38,40,41,42,43],your:[38,40,41,42,43],your_name_her:38,ypred:24,zero:11},titles:["ballet package","ballet.cli module","ballet.compat module","ballet.contrib module","ballet.eng package","ballet.eng.base module","ballet.eng.misc module","ballet.eng.missing module","ballet.eng.ts module","ballet.exc module","ballet.feature module","ballet.modeler module","ballet.modeling package","ballet.modeling.constants module","ballet.modeling.io_transformers module","ballet.modeling.problem module","ballet.modeling.scoring module","ballet.project module","ballet.templating module","ballet.update module","ballet.util package","ballet.util.ci module","ballet.util.fs module","ballet.util.git module","ballet.util.io module","ballet.util.log module","ballet.util.mod module","ballet.util.testing module","ballet.validation package","ballet.validation.base module","ballet.validation.diff_checks module","ballet.validation.entropy module","ballet.validation.feature_api_checks module","ballet.validation.feature_evaluation module","ballet.validation.gfssf_validator module","ballet.validation.project_structure module","ballet","Credits","Contributing","History","ballet","Installation","ballet","Usage"],titleterms:{"new":43,ballet:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,40,42,43],base:[5,29],bug:38,cli:1,compat:2,constant:13,contrib:3,contribut:38,contributor:37,credit:37,deploi:38,develop:[37,43],diff_check:30,document:38,eng:[4,5,6,7,8],entropi:31,exc:9,featur:[10,38,43],feature_api_check:32,feature_evalu:33,feedback:38,fix:38,from:41,get:38,gfssf_valid:34,git:23,guidelin:38,histori:39,implement:38,indic:40,instal:41,instanti:43,io_transform:14,lead:37,log:25,misc:6,miss:7,mod:26,model:[11,12,13,14,15,16],modul:[1,2,3,5,6,7,8,9,10,11,13,14,15,16,17,18,19,21,22,23,24,25,26,27,29,30,31,32,33,34,35],overview:[40,42],packag:[0,4,12,20,28],problem:15,project:[17,43],project_structur:35,pull:38,refer:[40,42],releas:41,report:38,request:38,score:16,sourc:41,stabl:41,start:38,submit:38,submodul:[0,4,12,20,28],subpackag:0,tabl:40,templat:18,test:27,tip:38,type:38,updat:19,usag:43,util:[20,21,22,23,24,25,26,27],valid:[28,29,30,31,32,33,34,35,43],write:38}})