var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#DecisionTree.jl-1",
    "page": "Readme",
    "title": "DecisionTree.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status)(Image: DecisionTree) (Image: DecisionTree) (Image: DecisionTree)Julia implementation of Decision Tree and Random Forest algorithms"
},

{
    "location": "#Classification-1",
    "page": "Readme",
    "title": "Classification",
    "category": "section",
    "text": "pre-pruning (max depth, min leaf size)\npost-pruning (pessimistic pruning)\nparallelized bagging (random forests)\nadaptive boosting (decision stumps)\ncross validation (n-fold)\nsupport for mixed categorical and numerical data"
},

{
    "location": "#Regression-1",
    "page": "Readme",
    "title": "Regression",
    "category": "section",
    "text": "pre-pruning (max depth, min leaf size)\nparallelized bagging (random forests)\ncross validation (n-fold)\nsupport for numerical featuresNote that regression is implied if labels/targets are of type Array{Float}"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "You can install DecisionTree.jl using Julia\'s package managerPkg.add(\"DecisionTree\")"
},

{
    "location": "#ScikitLearn.jl-API-1",
    "page": "Readme",
    "title": "ScikitLearn.jl API",
    "category": "section",
    "text": "DecisionTree.jl supports the ScikitLearn.jl interface and algorithms (cross-validation, hyperparameter tuning, pipelines, etc.)Available models: DecisionTreeClassifier, DecisionTreeRegressor, RandomForestClassifier, RandomForestRegressor, AdaBoostStumpClassifier. See each model\'s help (eg. ?DecisionTreeRegressor at the REPL) for more information"
},

{
    "location": "#Classification-Example-1",
    "page": "Readme",
    "title": "Classification Example",
    "category": "section",
    "text": "Load DecisionTree packageusing DecisionTreeSeparate Fisher\'s Iris dataset features and labelsfeatures, labels = load_data(\"iris\")    # also see \"adult\" and \"digits\" datasets\n\n# the data loaded are of type Array{Any}\n# cast them to concrete types for better performance\nfeatures = Float64.(features)\nlabels   = String.(labels)Pruned Tree Classifier# train depth-truncated classifier\nmodel = DecisionTreeClassifier(max_depth=2)\nfit!(model, features, labels)\n# pretty print of the tree, to a depth of 5 nodes (optional)\nprint_tree(model, 5)\n# apply learned model\npredict(model, [5.9,3.0,5.1,1.9])\n# get the probability of each label\npredict_proba(model, [5.9,3.0,5.1,1.9])\nprintln(get_classes(model)) # returns the ordering of the columns in predict_proba\'s output\n# run n-fold cross validation over 3 CV folds\n# See ScikitLearn.jl for installation instructions\nusing ScikitLearn.CrossValidation: cross_val_score\naccuracy = cross_val_score(model, features, labels, cv=3)Also have a look at these classification, and regression notebooks."
},

{
    "location": "#Native-API-1",
    "page": "Readme",
    "title": "Native API",
    "category": "section",
    "text": ""
},

{
    "location": "#Classification-Example-2",
    "page": "Readme",
    "title": "Classification Example",
    "category": "section",
    "text": "Decision Tree Classifier# train full-tree classifier\nmodel = build_tree(labels, features)\n# prune tree: merge leaves having >= 90% combined purity (default: 100%)\nmodel = prune_tree(model, 0.9)\n# pretty print of the tree, to a depth of 5 nodes (optional)\nprint_tree(model, 5)\n# apply learned model\napply_tree(model, [5.9,3.0,5.1,1.9])\n# get the probability of each label\napply_tree_proba(model, [5.9,3.0,5.1,1.9], [\"Iris-setosa\", \"Iris-versicolor\", \"Iris-virginica\"])\n# run 3-fold cross validation of pruned tree,\nn_folds=3\naccuracy = nfoldCV_tree(labels, features, n_folds)\n\n# set of classification parameters and respective default values\n# pruning_purity: purity threshold used for post-pruning (default: 1.0, no pruning)\n# max_depth: maximum depth of the decision tree (default: -1, no maximum)\n# min_samples_leaf: the minimum number of samples each leaf needs to have (default: 1)\n# min_samples_split: the minimum number of samples in needed for a split (default: 2)\n# min_purity_increase: minimum purity needed for a split (default: 0.0)\n# n_subfeatures: number of features to select at random (default: 0, keep all)\nn_subfeatures=0; max_depth=-1; min_samples_leaf=1; min_samples_split=2\nmin_purity_increase=0.0; pruning_purity = 1.0\n\nmodel    =   build_tree(labels, features,\n                        n_subfeatures,\n                        max_depth,\n                        min_samples_leaf,\n                        min_samples_split,\n                        min_purity_increase)\n\naccuracy = nfoldCV_tree(labels, features,\n                        n_folds,\n                        pruning_purity,\n                        max_depth,\n                        min_samples_leaf,\n                        min_samples_split,\n                        min_purity_increase)Random Forest Classifier# train random forest classifier\n# using 2 random features, 10 trees, 0.5 portion of samples per tree, and a maximum tree depth of 6\nmodel = build_forest(labels, features, 2, 10, 0.5, 6)\n# apply learned model\napply_forest(model, [5.9,3.0,5.1,1.9])\n# get the probability of each label\napply_forest_proba(model, [5.9,3.0,5.1,1.9], [\"Iris-setosa\", \"Iris-versicolor\", \"Iris-virginica\"])\n# run 3-fold cross validation for forests, using 2 random features per split\nn_folds=3; n_subfeatures=2\naccuracy = nfoldCV_forest(labels, features, n_folds, n_subfeatures)\n\n# set of classification parameters and respective default values\n# n_subfeatures: number of features to consider at random per split (default: -1, sqrt(# features))\n# n_trees: number of trees to train (default: 10)\n# partial_sampling: fraction of samples to train each tree on (default: 0.7)\n# max_depth: maximum depth of the decision trees (default: no maximum)\n# min_samples_leaf: the minimum number of samples each leaf needs to have (default: 5)\n# min_samples_split: the minimum number of samples in needed for a split (default: 2)\n# min_purity_increase: minimum purity needed for a split (default: 0.0)\nn_subfeatures=-1; n_trees=10; partial_sampling=0.7; max_depth=-1\nmin_samples_leaf=5; min_samples_split=2; min_purity_increase=0.0\n\nmodel    =   build_forest(labels, features,\n                          n_subfeatures,\n                          n_trees,\n                          partial_sampling,\n                          max_depth,\n                          min_samples_leaf,\n                          min_samples_split,\n                          min_purity_increase)\n\naccuracy = nfoldCV_forest(labels, features,\n                          n_folds,\n                          n_subfeatures,\n                          n_trees,\n                          partial_sampling,\n                          max_depth,\n                          min_samples_leaf,\n                          min_samples_split,\n                          min_purity_increase)Adaptive-Boosted Decision Stumps Classifier# train adaptive-boosted stumps, using 7 iterations\nmodel, coeffs = build_adaboost_stumps(labels, features, 7);\n# apply learned model\napply_adaboost_stumps(model, coeffs, [5.9,3.0,5.1,1.9])\n# get the probability of each label\napply_adaboost_stumps_proba(model, coeffs, [5.9,3.0,5.1,1.9], [\"Iris-setosa\", \"Iris-versicolor\", \"Iris-virginica\"])\n# run 3-fold cross validation for boosted stumps, using 7 iterations\nn_iterations=7; n_folds=3\naccuracy = nfoldCV_stumps(labels, features,\n                          n_folds,\n                          n_iterations)"
},

{
    "location": "#Regression-Example-1",
    "page": "Readme",
    "title": "Regression Example",
    "category": "section",
    "text": "n, m = 10^3, 5\nfeatures = randn(n, m)\nweights = rand(-2:2, m)\nlabels = features * weightsRegression Tree# train regression tree\nmodel = build_tree(labels, features)\n# apply learned model\napply_tree(model, [-0.9,3.0,5.1,1.9,0.0])\n# run 3-fold cross validation, returns array of coefficients of determination (R^2)\nn_folds = 3\nr2 = nfoldCV_tree(labels, features, n_folds)\n\n# set of regression parameters and respective default values\n# pruning_purity: purity threshold used for post-pruning (default: 1.0, no pruning)\n# max_depth: maximum depth of the decision tree (default: -1, no maximum)\n# min_samples_leaf: the minimum number of samples each leaf needs to have (default: 5)\n# min_samples_split: the minimum number of samples in needed for a split (default: 2)\n# min_purity_increase: minimum purity needed for a split (default: 0.0)\n# n_subfeatures: number of features to select at random (default: 0, keep all)\nn_subfeatures = 0; max_depth = -1; min_samples_leaf = 5\nmin_samples_split = 2; min_purity_increase = 0.0; pruning_purity = 1.0\n\nmodel = build_tree(labels, features,\n                   n_subfeatures,\n                   max_depth,\n                   min_samples_leaf,\n                   min_samples_split,\n                   min_purity_increase)\n\nr2 =  nfoldCV_tree(labels, features,\n                   n_folds,\n                   pruning_purity,\n                   max_depth,\n                   min_samples_leaf,\n                   min_samples_split,\n                   min_purity_increase)Regression Random Forest# train regression forest, using 2 random features, 10 trees,\n# averaging of 5 samples per leaf, and 0.7 portion of samples per tree\nmodel = build_forest(labels, features, 2, 10, 0.7, 5)\n# apply learned model\napply_forest(model, [-0.9,3.0,5.1,1.9,0.0])\n# run 3-fold cross validation on regression forest, using 2 random features per split\nn_subfeatures=2; n_folds=3\nr2 = nfoldCV_forest(labels, features, n_folds, n_subfeatures)\n\n# set of regression build_forest() parameters and respective default values\n# n_subfeatures: number of features to consider at random per split (default: -1, sqrt(# features))\n# n_trees: number of trees to train (default: 10)\n# partial_sampling: fraction of samples to train each tree on (default: 0.7)\n# max_depth: maximum depth of the decision trees (default: no maximum)\n# min_samples_leaf: the minimum number of samples each leaf needs to have (default: 5)\n# min_samples_split: the minimum number of samples in needed for a split (default: 2)\n# min_purity_increase: minimum purity needed for a split (default: 0.0)\nn_subfeatures=-1; n_trees=10; partial_sampling=0.7; max_depth=-1\nmin_samples_leaf=5; min_samples_split=2; min_purity_increase=0.0\n\nmodel = build_forest(labels, features,\n                     n_subfeatures,\n                     n_trees,\n                     partial_sampling,\n                     max_depth,\n                     min_samples_leaf,\n                     min_samples_split,\n                     min_purity_increase)\n\nr2 =  nfoldCV_forest(labels, features,\n                     n_folds,\n                     n_subfeatures,\n                     n_trees,\n                     partial_sampling,\n                     max_depth,\n                     min_samples_leaf,\n                     min_samples_split,\n                     min_purity_increase)"
},

{
    "location": "autodocs/#DecisionTree.AdaBoostStumpClassifier",
    "page": "Docstrings",
    "title": "DecisionTree.AdaBoostStumpClassifier",
    "category": "type",
    "text": "AdaBoostStumpClassifier(; n_iterations::Int=0)\n\nAdaboosted decision tree stumps. See DecisionTree.jl\'s documentation\n\nHyperparameters:\n\nn_iterations: number of iterations of AdaBoost\nrng: the random number generator to use. Can be an Int, which will be used to seed and create a new random number generator.\n\nImplements fit!, predict, predict_proba, get_classes\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DecisionTree.DecisionTreeClassifier",
    "page": "Docstrings",
    "title": "DecisionTree.DecisionTreeClassifier",
    "category": "type",
    "text": "DecisionTreeClassifier(; pruning_purity_threshold=0.0,\n                       max_depth::Int=-1,\n                       min_samples_leaf::Int=1,\n                       min_samples_split::Int=2,\n                       min_purity_increase::Float=0.0,\n                       n_subfeatures::Int=0,\n                       rng=Random.GLOBAL_RNG)\n\nDecision tree classifier. See DecisionTree.jl\'s documentation\n\nHyperparameters:\n\npruning_purity_threshold: (post-pruning) merge leaves having >=thresh combined purity (default: no pruning)\nmax_depth: maximum depth of the decision tree (default: no maximum)\nmin_samples_leaf: the minimum number of samples each leaf needs to have (default: 1)\nmin_samples_split: the minimum number of samples in needed for a split (default: 2)\nmin_purity_increase: minimum purity needed for a split (default: 0.0)\nn_subfeatures: number of features to select at random (default: keep all)\nrng: the random number generator to use. Can be an Int, which will be used to seed and create a new random number generator.\n\nImplements fit!, predict, predict_proba, get_classes\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DecisionTree.DecisionTreeRegressor",
    "page": "Docstrings",
    "title": "DecisionTree.DecisionTreeRegressor",
    "category": "type",
    "text": "DecisionTreeRegressor(; pruning_purity_threshold=0.0,\n                      max_depth::Int-1,\n                      min_samples_leaf::Int=5,\n                      min_samples_split::Int=2,\n                      min_purity_increase::Float=0.0,\n                      n_subfeatures::Int=0,\n                      rng=Random.GLOBAL_RNG)\n\nDecision tree regression. See DecisionTree.jl\'s documentation\n\nHyperparameters:\n\npruning_purity_threshold: (post-pruning) merge leaves having >=thresh combined purity (default: no pruning)\nmax_depth: maximum depth of the decision tree (default: no maximum)\nmin_samples_leaf: the minimum number of samples each leaf needs to have (default: 5)\nmin_samples_split: the minimum number of samples in needed for a split (default: 2)\nmin_purity_increase: minimum purity needed for a split (default: 0.0)\nn_subfeatures: number of features to select at random (default: keep all)\nrng: the random number generator to use. Can be an Int, which will be used to seed and create a new random number generator.\n\nImplements fit!, predict, get_classes\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DecisionTree.RandomForestClassifier",
    "page": "Docstrings",
    "title": "DecisionTree.RandomForestClassifier",
    "category": "type",
    "text": "RandomForestClassifier(; n_subfeatures::Int=-1,\n                       n_trees::Int=10,\n                       partial_sampling::Float=0.7,\n                       max_depth::Int=-1,\n                       rng=Random.GLOBAL_RNG)\n\nRandom forest classification. See DecisionTree.jl\'s documentation\n\nHyperparameters:\n\nn_subfeatures: number of features to consider at random per split (default: -1, sqrt(# features))\nn_trees: number of trees to train (default: 10)\npartial_sampling: fraction of samples to train each tree on (default: 0.7)\nmax_depth: maximum depth of the decision trees (default: no maximum)\nmin_samples_leaf: the minimum number of samples each leaf needs to have\nmin_samples_split: the minimum number of samples in needed for a split\nmin_purity_increase: minimum purity needed for a split\nrng: the random number generator to use. Can be an Int, which will be used to seed and create a new random number generator.\n\nImplements fit!, predict, predict_proba, get_classes\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DecisionTree.RandomForestRegressor",
    "page": "Docstrings",
    "title": "DecisionTree.RandomForestRegressor",
    "category": "type",
    "text": "RandomForestRegressor(; n_subfeatures::Int=-1,\n                      n_trees::Int=10,\n                      partial_sampling::Float=0.7,\n                      max_depth::Int=-1,\n                      min_samples_leaf::Int=5,\n                      rng=Random.GLOBAL_RNG)\n\nRandom forest regression. See DecisionTree.jl\'s documentation\n\nHyperparameters:\n\nn_subfeatures: number of features to consider at random per split (default: -1, sqrt(# features))\nn_trees: number of trees to train (default: 10)\npartial_sampling: fraction of samples to train each tree on (default: 0.7)\nmax_depth: maximum depth of the decision trees (default: no maximum)\nmin_samples_leaf: the minimum number of samples each leaf needs to have (default: 5)\nmin_samples_split: the minimum number of samples in needed for a split\nmin_purity_increase: minimum purity needed for a split\nrng: the random number generator to use. Can be an Int, which will be used to seed and create a new random number generator.\n\nImplements fit!, predict, get_classes\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DecisionTree.apply_adaboost_stumps_proba-Union{Tuple{T}, Tuple{S}, Tuple{Ensemble{S,T},Array{Float64,1},Array{S,1},Array{T,1}}} where T where S",
    "page": "Docstrings",
    "title": "DecisionTree.apply_adaboost_stumps_proba",
    "category": "method",
    "text": "apply_adaboost_stumps_proba(stumps::Ensemble, coeffs, features, labels::Vector)\n\ncomputes P(L=label|X) for each row in features. It returns a N_row x n_labels matrix of probabilities, each row summing up to 1.\n\ncol_labels is a vector containing the distinct labels (eg. [\"versicolor\", \"virginica\", \"setosa\"]). It specifies the column ordering of the output matrix. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#DecisionTree.apply_forest_proba-Union{Tuple{T}, Tuple{S}, Tuple{Ensemble{S,T},Array{S,1},Any}} where T where S",
    "page": "Docstrings",
    "title": "DecisionTree.apply_forest_proba",
    "category": "method",
    "text": "apply_forest_proba(forest::Ensemble, features, col_labels::Vector)\n\ncomputes P(L=label|X) for each row in features. It returns a N_row x n_labels matrix of probabilities, each row summing up to 1.\n\ncol_labels is a vector containing the distinct labels (eg. [\"versicolor\", \"virginica\", \"setosa\"]). It specifies the column ordering of the output matrix. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#DecisionTree.apply_tree_proba-Union{Tuple{T}, Tuple{S}, Tuple{Leaf{T},Array{S,1},Any}} where T where S",
    "page": "Docstrings",
    "title": "DecisionTree.apply_tree_proba",
    "category": "method",
    "text": "apply_tree_proba(::Node, features, col_labels::Vector)\n\ncomputes P(L=label|X) for each row in features. It returns a N_row x n_labels matrix of probabilities, each row summing up to 1.\n\ncol_labels is a vector containing the distinct labels (eg. [\"versicolor\", \"virginica\", \"setosa\"]). It specifies the column ordering of the output matrix. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [DecisionTree]\nOrder = [:type, :function]"
},

]}
