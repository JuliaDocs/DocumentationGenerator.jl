var documenterSearchIndex = {"docs": [

{
    "location": "#DecisionTree.AdaBoostStumpClassifier",
    "page": "Home",
    "title": "DecisionTree.AdaBoostStumpClassifier",
    "category": "type",
    "text": "AdaBoostStumpClassifier(; n_iterations::Int=0)\n\nAdaboosted decision tree stumps. See DecisionTree.jl\'s documentation\n\nHyperparameters:\n\nn_iterations: number of iterations of AdaBoost\nrng: the random number generator to use. Can be an Int, which will be used to seed and create a new random number generator.\n\nImplements fit!, predict, predict_proba, get_classes\n\n\n\n\n\n"
},

{
    "location": "#DecisionTree.DecisionTreeClassifier",
    "page": "Home",
    "title": "DecisionTree.DecisionTreeClassifier",
    "category": "type",
    "text": "DecisionTreeClassifier(; pruning_purity_threshold=0.0,\n                       max_depth::Int=-1,\n                       min_samples_leaf::Int=1,\n                       min_samples_split::Int=2,\n                       min_purity_increase::Float=0.0,\n                       n_subfeatures::Int=0,\n                       rng=Random.GLOBAL_RNG)\n\nDecision tree classifier. See DecisionTree.jl\'s documentation\n\nHyperparameters:\n\npruning_purity_threshold: (post-pruning) merge leaves having >=thresh combined purity (default: no pruning)\nmax_depth: maximum depth of the decision tree (default: no maximum)\nmin_samples_leaf: the minimum number of samples each leaf needs to have (default: 1)\nmin_samples_split: the minimum number of samples in needed for a split (default: 2)\nmin_purity_increase: minimum purity needed for a split (default: 0.0)\nn_subfeatures: number of features to select at random (default: keep all)\nrng: the random number generator to use. Can be an Int, which will be used to seed and create a new random number generator.\n\nImplements fit!, predict, predict_proba, get_classes\n\n\n\n\n\n"
},

{
    "location": "#DecisionTree.DecisionTreeRegressor",
    "page": "Home",
    "title": "DecisionTree.DecisionTreeRegressor",
    "category": "type",
    "text": "DecisionTreeRegressor(; pruning_purity_threshold=0.0,\n                      max_depth::Int-1,\n                      min_samples_leaf::Int=5,\n                      min_samples_split::Int=2,\n                      min_purity_increase::Float=0.0,\n                      n_subfeatures::Int=0,\n                      rng=Random.GLOBAL_RNG)\n\nDecision tree regression. See DecisionTree.jl\'s documentation\n\nHyperparameters:\n\npruning_purity_threshold: (post-pruning) merge leaves having >=thresh combined purity (default: no pruning)\nmax_depth: maximum depth of the decision tree (default: no maximum)\nmin_samples_leaf: the minimum number of samples each leaf needs to have (default: 5)\nmin_samples_split: the minimum number of samples in needed for a split (default: 2)\nmin_purity_increase: minimum purity needed for a split (default: 0.0)\nn_subfeatures: number of features to select at random (default: keep all)\nrng: the random number generator to use. Can be an Int, which will be used to seed and create a new random number generator.\n\nImplements fit!, predict, get_classes\n\n\n\n\n\n"
},

{
    "location": "#DecisionTree.RandomForestClassifier",
    "page": "Home",
    "title": "DecisionTree.RandomForestClassifier",
    "category": "type",
    "text": "RandomForestClassifier(; n_subfeatures::Int=-1,\n                       n_trees::Int=10,\n                       partial_sampling::Float=0.7,\n                       max_depth::Int=-1,\n                       rng=Random.GLOBAL_RNG)\n\nRandom forest classification. See DecisionTree.jl\'s documentation\n\nHyperparameters:\n\nn_subfeatures: number of features to consider at random per split (default: -1, sqrt(# features))\nn_trees: number of trees to train (default: 10)\npartial_sampling: fraction of samples to train each tree on (default: 0.7)\nmax_depth: maximum depth of the decision trees (default: no maximum)\nmin_samples_leaf: the minimum number of samples each leaf needs to have\nmin_samples_split: the minimum number of samples in needed for a split\nmin_purity_increase: minimum purity needed for a split\nrng: the random number generator to use. Can be an Int, which will be used to seed and create a new random number generator.\n\nImplements fit!, predict, predict_proba, get_classes\n\n\n\n\n\n"
},

{
    "location": "#DecisionTree.RandomForestRegressor",
    "page": "Home",
    "title": "DecisionTree.RandomForestRegressor",
    "category": "type",
    "text": "RandomForestRegressor(; n_subfeatures::Int=-1,\n                      n_trees::Int=10,\n                      partial_sampling::Float=0.7,\n                      max_depth::Int=-1,\n                      min_samples_leaf::Int=5,\n                      rng=Random.GLOBAL_RNG)\n\nRandom forest regression. See DecisionTree.jl\'s documentation\n\nHyperparameters:\n\nn_subfeatures: number of features to consider at random per split (default: -1, sqrt(# features))\nn_trees: number of trees to train (default: 10)\npartial_sampling: fraction of samples to train each tree on (default: 0.7)\nmax_depth: maximum depth of the decision trees (default: no maximum)\nmin_samples_leaf: the minimum number of samples each leaf needs to have (default: 5)\nmin_samples_split: the minimum number of samples in needed for a split\nmin_purity_increase: minimum purity needed for a split\nrng: the random number generator to use. Can be an Int, which will be used to seed and create a new random number generator.\n\nImplements fit!, predict, get_classes\n\n\n\n\n\n"
},

{
    "location": "#DecisionTree.apply_adaboost_stumps_proba-Union{Tuple{T}, Tuple{S}, Tuple{Ensemble{S,T},Array{Float64,1},Array{S,1},Array{T,1}}} where T where S",
    "page": "Home",
    "title": "DecisionTree.apply_adaboost_stumps_proba",
    "category": "method",
    "text": "apply_adaboost_stumps_proba(stumps::Ensemble, coeffs, features, labels::Vector)\n\ncomputes P(L=label|X) for each row in features. It returns a N_row x n_labels matrix of probabilities, each row summing up to 1.\n\ncol_labels is a vector containing the distinct labels (eg. [\"versicolor\", \"virginica\", \"setosa\"]). It specifies the column ordering of the output matrix. \n\n\n\n\n\n"
},

{
    "location": "#DecisionTree.apply_forest_proba-Union{Tuple{T}, Tuple{S}, Tuple{Ensemble{S,T},Array{S,1},Any}} where T where S",
    "page": "Home",
    "title": "DecisionTree.apply_forest_proba",
    "category": "method",
    "text": "apply_forest_proba(forest::Ensemble, features, col_labels::Vector)\n\ncomputes P(L=label|X) for each row in features. It returns a N_row x n_labels matrix of probabilities, each row summing up to 1.\n\ncol_labels is a vector containing the distinct labels (eg. [\"versicolor\", \"virginica\", \"setosa\"]). It specifies the column ordering of the output matrix. \n\n\n\n\n\n"
},

{
    "location": "#DecisionTree.apply_tree_proba-Union{Tuple{T}, Tuple{S}, Tuple{Leaf{T},Array{S,1},Any}} where T where S",
    "page": "Home",
    "title": "DecisionTree.apply_tree_proba",
    "category": "method",
    "text": "apply_tree_proba(::Node, features, col_labels::Vector)\n\ncomputes P(L=label|X) for each row in features. It returns a N_row x n_labels matrix of probabilities, each row summing up to 1.\n\ncol_labels is a vector containing the distinct labels (eg. [\"versicolor\", \"virginica\", \"setosa\"]). It specifies the column ordering of the output matrix. \n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [DecisionTree]\nOrder = [:type, :function]"
},

]}
