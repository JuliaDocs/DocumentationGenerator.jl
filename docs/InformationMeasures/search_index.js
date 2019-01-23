var documenterSearchIndex = {"docs": [

{
    "location": "#InformationMeasures.discretize_values-Tuple",
    "page": "Home",
    "title": "InformationMeasures.discretize_values",
    "category": "method",
    "text": "discretize_values(values_x; <keyword arguments>)\n\nAssign continuous measurements to discrete bins.\n\nArguments\n\nvalues_x: the data values.\nmode=\"uniform_width\": the discretization algorithm.\nnumber_of_bins=0: the number of bins (will be overridden if mode is \"bayesian_blocks\").\nget_number_of_bins=get_root_n: the method for calculating the number of bins (only called if number_of_bins is 0).\n\n\n\n\n\n"
},

{
    "location": "#InformationMeasures.get_conditional_entropy-Tuple{Any,Any}",
    "page": "Home",
    "title": "InformationMeasures.get_conditional_entropy",
    "category": "method",
    "text": "get_conditional_entropy(values_x, values_y; <keyword arguments>)\n\nEstimate conditional entropy of one set of values conditioned on another set of values.\n\nArguments:\n\nvalues_x: the data values.\nvalues_y: the data values to be conditioned on.\nestimator=\"maximum_likelihood\": the entropy estimator.\nbase=2: the base of the logarithm, equivalent to the units of information.\nmode=\"uniform_width\": the discretization algorithm.\nnumber_of_bins=0: the number of bins (will be overridden if mode is \"bayesian_blocks\").\nget_number_of_bins=get_root_n: the method for calculating the number of bins (only called if number_of_bins is 0).\nlambda=nothing: the shrinkage instensity, only used if estimator is \"shrinkage\".\nprior=1: the Dirichlet prior, only used if estimator is \"dirichlet\".\n\n\n\n\n\n"
},

{
    "location": "#InformationMeasures.get_conditional_entropy-Tuple{Any}",
    "page": "Home",
    "title": "InformationMeasures.get_conditional_entropy",
    "category": "method",
    "text": "get_conditional_entropy(xy; <keyword arguments>)\n\nArguments:\n\nxy: the 2D frequencies or probabilities.\nestimator=\"maximum_likelihood\": the entropy estimator.\nbase=2: the base of the logarithm, equivalent to the units of information.\nprobabilities=false: whether xy is probabilities. If false, xy is frequencies.\nlambda=nothing: the shrinkage instensity, only used if estimator is \"shrinkage\".\nprior=1: the Dirichlet prior, only used if estimator is \"dirichlet\".\n\n\n\n\n\n"
},

{
    "location": "#InformationMeasures.get_conditional_mutual_information-Tuple{Any,Any,Any}",
    "page": "Home",
    "title": "InformationMeasures.get_conditional_mutual_information",
    "category": "method",
    "text": "get_conditional_mutual_information(values_x, values_y, values_z; <keyword arguments>)\n\nEstimate the conditional mutual information between two sets of values, conditioned on a third.\n\nArguments:\n\nvalues_x: the data values.\nvalues_y: a second set of data values.\nvalues_z: the data values to be conditioned on.\nestimator=\"maximum_likelihood\": the entropy estimator.\nbase=2: the base of the logarithm, equivalent to the units of information.\nmode=\"uniform_width\": the discretization algorithm.\nnumber_of_bins=0: the number of bins (will be overridden if mode is \"bayesian_blocks\").\nget_number_of_bins=get_root_n: the method for calculating the number of bins (only called if number_of_bins is 0).\nlambda=nothing: the shrinkage instensity, only used if estimator is \"shrinkage\".\nprior=1: the Dirichlet prior, only used if estimator is \"dirichlet\".\n\n\n\n\n\n"
},

{
    "location": "#InformationMeasures.get_conditional_mutual_information-Tuple{Any}",
    "page": "Home",
    "title": "InformationMeasures.get_conditional_mutual_information",
    "category": "method",
    "text": "get_conditional_mutual_information(xyz; <keyword arguments>)\n\nArguments:\n\nxyz: the 3D frequencies or probabilities.\nestimator=\"maximum_likelihood\": the entropy estimator.\nbase=2: the base of the logarithm, equivalent to the units of information.\nprobabilities=false: whether xyz is probabilities. If false, xyz is frequencies.\nlambda=nothing: the shrinkage instensity, only used if estimator is \"shrinkage\".\nprior=1: the Dirichlet prior, only used if estimator is \"dirichlet\".\n\n\n\n\n\n"
},

{
    "location": "#InformationMeasures.get_cross_entropy-Tuple{Any,Any}",
    "page": "Home",
    "title": "InformationMeasures.get_cross_entropy",
    "category": "method",
    "text": "get_cross_entropy(values_x, values_y; <keyword arguments>)\n\nEstimate the cross-entropy between two sets of values.\n\nArguments:\n\nvalues_x: the first set of data values.\nvalues_y: the second set of data values.\nestimator=\"maximum_likelihood\": the entropy estimator.\nbase=2: the base of the logarithm, equivalent to the units of information.\nmode=\"uniform_width\": the discretization algorithm.\nnumber_of_bins=0: the number of bins (will be overridden if mode is \"bayesian_blocks\").\nget_number_of_bins=get_root_n: the method for calculating the number of bins (only called if number_of_bins is 0).\ndiscretized=false: whether the data values are already discretized.\nlambda=nothing: the shrinkage intensity, only used if estimator is \"shrinkage\".\nprior=1: the Dirichlet prior, only used if estimator is \"dirichlet\".\n\n\n\n\n\n"
},

{
    "location": "#InformationMeasures.get_entropy-Tuple",
    "page": "Home",
    "title": "InformationMeasures.get_entropy",
    "category": "method",
    "text": "get_entropy(values_x; <keyword arguments>)\n\nEstimate entropy (or joint entropy, if more than one set of data values is given).\n\nArguments:\n\nvalues_x: the data values.\nestimator=\"maximum_likelihood\": the entropy estimator.\nbase=2: the base of the logarithm, equivalent to the units of information.\nmode=\"uniform_width\": the discretization algorithm.\nnumber_of_bins=0: the number of bins (will be overridden if mode is \"bayesian_blocks\").\nget_number_of_bins=get_root_n: the method for calculating the number of bins (only called if number_of_bins is 0).\ndiscretized=false: whether the data values are already discretized.\nlambda=nothing: the shrinkage instensity, only used if estimator is \"shrinkage\".\nprior=1: the Dirichlet prior, only used if estimator is \"dirichlet\".\n\n\n\n\n\n"
},

{
    "location": "#InformationMeasures.get_interaction_information-Tuple{Any,Any,Any}",
    "page": "Home",
    "title": "InformationMeasures.get_interaction_information",
    "category": "method",
    "text": "get_interaction_information(values_x, values_y, values_z; <keyword arguments>)\n\nEstimate the interaction information between three sets of values.\n\nArguments:\n\nvalues_x: the data values.\nvalues_y: a second set of data values.\nvalues_z: a third set of data values.\nestimator=\"maximum_likelihood\": the entropy estimator.\nbase=2: the base of the logarithm, equivalent to the units of information.\nmode=\"uniform_width\": the discretization algorithm.\nnumber_of_bins=0: the number of bins (will be overridden if mode is \"bayesian_blocks\").\nget_number_of_bins=get_root_n: the method for calculating the number of bins (only called if number_of_bins is 0).\nlambda=nothing: the shrinkage instensity, only used if estimator is \"shrinkage\".\nprior=1: the Dirichlet prior, only used if estimator is \"dirichlet\".\n\n\n\n\n\n"
},

{
    "location": "#InformationMeasures.get_interaction_information-Tuple{Any}",
    "page": "Home",
    "title": "InformationMeasures.get_interaction_information",
    "category": "method",
    "text": "get_interaction_information(xyz; <keyword arguments>)\n\nArguments:\n\nxyz: the 3D frequencies or probabilities.\nestimator=\"maximum_likelihood\": the entropy estimator.\nbase=2: the base of the logarithm, equivalent to the units of information.\nprobabilities=false: whether xyz is probabilities. If false, xyz is frequencies.\nlambda=nothing: the shrinkage instensity, only used if estimator is \"shrinkage\".\nprior=1: the Dirichlet prior, only used if estimator is \"dirichlet\".\n\n\n\n\n\n"
},

{
    "location": "#InformationMeasures.get_mutual_information-Tuple{Any,Any}",
    "page": "Home",
    "title": "InformationMeasures.get_mutual_information",
    "category": "method",
    "text": "get_mutual_information(values_x, values_y; <keyword arguments>)\n\nEstimate the mutual information between two sets of values.\n\nArguments:\n\nvalues_x: the data values.\nvalues_y: a second set of data values.\nestimator=\"maximum_likelihood\": the entropy estimator.\nbase=2: the base of the logarithm, equivalent to the units of information.\nmode=\"uniform_width\": the discretization algorithm.\nnumber_of_bins=0: the number of bins (will be overridden if mode is \"bayesian_blocks\").\nget_number_of_bins=get_root_n: the method for calculating the number of bins (only called if number_of_bins is 0).\nlambda=nothing: the shrinkage instensity, only used if estimator is \"shrinkage\".\nprior=1: the Dirichlet prior, only used if estimator is \"dirichlet\".\n\n\n\n\n\n"
},

{
    "location": "#InformationMeasures.get_mutual_information-Tuple{Any}",
    "page": "Home",
    "title": "InformationMeasures.get_mutual_information",
    "category": "method",
    "text": "get_mutual_information(xy; <keyword arguments>)\n\nArguments:\n\nxy: the 2D frequencies or probabilities.\nestimator=\"maximum_likelihood\": the entropy estimator.\nbase=2: the base of the logarithm, equivalent to the units of information.\nprobabilities=false: whether xy is probabilities. If false, xy is frequencies.\nlambda=nothing: the shrinkage instensity, only used if estimator is \"shrinkage\".\nprior=1: the Dirichlet prior, only used if estimator is \"dirichlet\".\n\n\n\n\n\n"
},

{
    "location": "#InformationMeasures.get_partial_information_decomposition-Tuple{Any,Any,Any}",
    "page": "Home",
    "title": "InformationMeasures.get_partial_information_decomposition",
    "category": "method",
    "text": "get_partial_information_decomposition(values_x, values_y, values_z; <keyword arguments>)\n\nEstimate the partial information decomposition between three sets of values.\n\nPerformance can be improved by setting all_orientations, include_unique and include_synergy according to the use case.\n\nArguments:\n\nvalues_x: the data values.\nvalues_y: a second set of data values.\nvalues_z: a third set of data values.\nestimator=\"maximum_likelihood\": the entropy estimator.\nbase=2: the base of the logarithm, equqivalent to the units of information.\nmode=\"uniform_width\": the discretization algorithm.\nnumber_of_bins=0: the number of bins (will be overridden if mode is \"bayesian_blocks\").\nget_number_of_bins=get_root_n: the method for calculating the number of bins (only called if number_of_bins is 0).\nlambda=nothing: the shrinkage instensity, only used if estimator is \"shrinkage\".\nprior=1: the Dirichlet prior, only used if estimator is \"dirichlet\".\nall_orientations=false: whether to use each set of values as the target. If false, only values_z is the target.\ninclude_unique=true: whether to get the unique information.\ninclude_synergy=true: whether to get the synergy.\n\n\n\n\n\n"
},

{
    "location": "#InformationMeasures.get_partial_information_decomposition-Tuple{Any}",
    "page": "Home",
    "title": "InformationMeasures.get_partial_information_decomposition",
    "category": "method",
    "text": "get_partial_information_decomposition(xyz; <keyword arguments>)\n\nArguments:\n\nxyz: the 3D frequencies or probabilities.\nestimator=\"maximum_likelihood\": the entropy estimator.\nbase=2: the base of the logarithm, equivalent to the units of information.\nprobabilities=false: whether xyz is probabilities. If false, xyz is frequencies.\nlambda=nothing: the shrinkage instensity, only used if estimator is \"shrinkage\".\nprior=1: the Dirichlet prior, only used if estimator is \"dirichlet\".\nall_orientations=false: whether to use each set of values as the target. If false, only values_z is the target.\ninclude_unique=true: whether to get the unique information.\ninclude_synergy=true: whether to get the synergy.\n\n\n\n\n\n"
},

{
    "location": "#InformationMeasures.get_probabilities-Tuple{Any,Any}",
    "page": "Home",
    "title": "InformationMeasures.get_probabilities",
    "category": "method",
    "text": "get_probabilities(estimator, frequencies; <keyword arguments>)\n\nEstimate probabilities from a set of discrete values.\n\nArguments:\n\nestimator: the entropy estimator.\nfrequencies: the bin frequencies for the discretized data values.\nlambda=nothing: the shrinkage instensity, only used if estimator is \"shrinkage\".\nprior=1: the Dirichlet prior, only used if estimator is \"dirichlet\".\n\n\n\n\n\n"
},

{
    "location": "#InformationMeasures.get_redundancy-Tuple{Any,Any,Any}",
    "page": "Home",
    "title": "InformationMeasures.get_redundancy",
    "category": "method",
    "text": "get_redundancy(values_x, values_y, values_z; <keyword arguments>)\n\nEstimate the redundancy between three sets of values.\n\nArguments:\n\nvalues_x: the data values.\nvalues_y: a second set of data values.\nvalues_z: a third set of data values.\nestimator=\"maximum_likelihood\": the entropy estimator.\nbase=2: the base of the logarithm, equqivalent to the units of information.\nmode=\"uniform_width\": the discretization algorithm.\nnumber_of_bins=0: the number of bins (will be overridden if mode is \"bayesian_blocks\").\nget_number_of_bins=get_root_n: the method for calculating the number of bins (only called if number_of_bins is 0).\nlambda=nothing: the shrinkage instensity, only used if estimator is \"shrinkage\".\nprior=1: the Dirichlet prior, only used if estimator is \"dirichlet\".\nall_orientations=false: whether to use each set of values as the target. If false, only values_z is the target.\n\n\n\n\n\n"
},

{
    "location": "#InformationMeasures.get_redundancy-Tuple{Any}",
    "page": "Home",
    "title": "InformationMeasures.get_redundancy",
    "category": "method",
    "text": "get_redundancy(xyz; <keyword arguments>)\n\nArguments:\n\nxyz: the 3D frequencies or probabilities.\nestimator=\"maximum_likelihood\": the entropy estimator.\nbase=2: the base of the logarithm, equivalent to the units of information.\nprobabilities=false: whether xyz is probabilities. If false, xyz is frequencies.\nlambda=nothing: the shrinkage instensity, only used if estimator is \"shrinkage\".\nprior=1: the Dirichlet prior, only used if estimator is \"dirichlet\".\nall_orientations=false: whether to use each set of values as the target. If false, only values_z is the target.\n\n\n\n\n\n"
},

{
    "location": "#InformationMeasures.get_total_correlation-Tuple{Any,Any,Any}",
    "page": "Home",
    "title": "InformationMeasures.get_total_correlation",
    "category": "method",
    "text": "get_total_correlation(values_x, values_y, values_z; <keyword arguments>)\n\nEstimate the total correlation between three sets of values.\n\nArguments:\n\nvalues_x: the data values.\nvalues_y: a second set of data values.\nvalues_z: a third set of data values.\nestimator=\"maximum_likelihood\": the entropy estimator.\nbase=2: the base of the logarithm, equivalent to the units of information.\nmode=\"uniform_width\": the discretization algorithm.\nnumber_of_bins=0: the number of bins (will be overridden if mode is \"bayesian_blocks\").\nget_number_of_bins=get_root_n: the method for calculating the number of bins (only called if number_of_bins is 0).\nlambda=nothing: the shrinkage instensity, only used if estimator is \"shrinkage\".\nprior=1: the Dirichlet prior, only used if estimator is \"dirichlet\".\n\n\n\n\n\n"
},

{
    "location": "#InformationMeasures.get_total_correlation-Tuple{Any}",
    "page": "Home",
    "title": "InformationMeasures.get_total_correlation",
    "category": "method",
    "text": "get_total_correlation(xyz; <keyword arguments>)\n\nArguments:\n\nxyz: the 3D frequencies or probabilities.\nestimator=\"maximum_likelihood\": the entropy estimator.\nbase=2: the base of the logarithm, equivalent to the units of information.\nprobabilities=false: whether xyz is probabilities. If false, xyz is frequencies.\nlambda=nothing: the shrinkage instensity, only used if estimator is \"shrinkage\".\nprior=1: the Dirichlet prior, only used if estimator is \"dirichlet\".\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [InformationMeasures]\nOrder = [:type, :function]"
},

]}
