var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#InformationMeasures-1",
    "page": "Readme",
    "title": "InformationMeasures",
    "category": "section",
    "text": "Release version:(Image: InformationMeasures) (Image: InformationMeasures) (Image: InformationMeasures)Development version:(Image: Build Status) (Image: codecov.io)"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Pkg.add(\"InformationMeasures\")"
},

{
    "location": "#Performance-1",
    "page": "Readme",
    "title": "Performance",
    "category": "section",
    "text": "In cases where optimal performance is needed, the latest version of InformationMeasures is recommended, with Julia 0.6. See also Advanced usage."
},

{
    "location": "#Basic-usage-1",
    "page": "Readme",
    "title": "Basic usage",
    "category": "section",
    "text": "Currently information measures on three or fewer variables are supported. The basic use case is to pass data arrays for each variable into each function. These will be discretized.It is also possible to pass in frequencies (if the data has already been discretized), or probabilities (if the probabilities are already known or have already been estimated) - see below.using InformationMeasures\n\ndata_1 = rand(100)\ndata_2 = rand(100)\ndata_3 = rand(100)\n\n# Entropy\nent_1 = get_entropy(data_1)\nent_12 = get_entropy(data_1, data_2)\nent_123 = get_entropy(data_1, data_2, data_3)\n\n# Conditional entropy\nce_1_on_2 = get_conditional_entropy(data_1, data_2)\n\n# Mutual information\nmi_12 = get_mutual_information(data_1, data_2)\n\n# Conditional mutual information\ncmi_12_on_3 = get_conditional_mutual_information(data_1, data_2, data_3)\n\n# Interaction information\nii_123 = get_interaction_information(data_1, data_2, data_3)\n\n# Total correlation\ntc_123 = get_total_correlation(data_1, data_2, data_3)\n\n# Partial information decomposition\npid_123 = get_partial_information_decomposition(data_1, data_2, data_3)"
},

{
    "location": "#Config-options-1",
    "page": "Readme",
    "title": "Config options",
    "category": "section",
    "text": "The following keyword arguments can be passed in to each function:estimator (String) Estimator for estimating the probability distribution\"maximum_likelihood\" (default)\n\"miller_madow\"\n\"dirichlet\"\n\"shrinkage\"base (Number) Base of the logarithm, i.e. the units for entropy2 (default)mode (String) Method for discretizing\"uniform_width\" (default)\n\"uniform_count\"\n\"bayesian_blocks\"numberofbins (Integer)0 (default)getnumberof_bins (Function) Customized function for calculating the number of bins (will only be used if number_of_bins is 0)get_root_n (default)"
},

{
    "location": "#Estimator-specific-config-options-1",
    "page": "Readme",
    "title": "Estimator-specific config options",
    "category": "section",
    "text": "lambda (Void or Number) Shrinkage intensity (if left as nothing, will be calculated automatically)nothing (default)prior (Number) Dirichlet prior (if left as 0, Dirichlet estimator is equivalent to maximum likelihood)0 (default)"
},

{
    "location": "#Values,-frequencies,-or-probabilities-1",
    "page": "Readme",
    "title": "Values, frequencies, or probabilities",
    "category": "section",
    "text": "The information measures can be calculated from raw data values, frequencies (if the data has already been discretized), or probabilities (if the probabilities are already known or have already been estimated).To calculate entropy from frequencies, call get_entropy with the keyword argument discretized = trueFor all other information measures, simply pass in a single array of frequencies or probabilities (2D for conditional entropy and mutual information or 3D for conditional mutual information, mutual information and total correlation). If they are probabilities, include the keyword argument probabilities = true, otherwise they will be treated as frequencies."
},

{
    "location": "#Discretization-1",
    "page": "Readme",
    "title": "Discretization",
    "category": "section",
    "text": "Although discretization is taken care of when the information measures are calculated, it is possible to discretize raw values directly, for example to investigate how different discretization algorithms and bin numbers affect the discretization.data = rand(100)\ndisc_val = discretize_values(data)NB discretize_values returns the frequencies for each bin in order, rather than the discretized values. An example of how to get the discretized values is discussed below."
},

{
    "location": "#Advanced-usage-1",
    "page": "Readme",
    "title": "Advanced usage",
    "category": "section",
    "text": "Functions such as get_entropy and get_mutual_information are designed to be flexible and easy to use with different types of input and config options. In some cases it may be quicker to bypass these functions."
},

{
    "location": "#Example-1",
    "page": "Readme",
    "title": "Example",
    "category": "section",
    "text": "When calculating the mutual information between every pair of data vectors from a large dataset, simply calling get_mutual_information on each pair of vectors will result in each vector being discretized multiple times.Currently, discretization for multiple variables works by discretizing the marginals independently, then reconstructing the higher dimensional frequencies from these discretized marginals. Therefore discretizing each variable once in advance will not affect the results, but will be much quicker. Joint frequencies cannot be reconstructed from the bin frequencies; instead the discretized values should be stored. get_bin_ids! should therefore be used, instead of discretize_values:data_1 = rand(100)\ndata_2 = rand(100)\ndata_3 = rand(100)\n\nnumber_of_bins = 10\nmi_base = 2\n\nbin_ids_1 = zeros(Int, length(data_1))\nget_bin_ids!(data_1, \"uniform_width\", number_of_bins, bin_ids_1)\n\nbin_ids_2 = zeros(Int, length(data_2))\nget_bin_ids!(data_2, \"uniform_width\", number_of_bins, bin_ids_2)\n\nbin_ids_3 = zeros(Int, length(data_3))\nget_bin_ids!(data_3, \"uniform_width\", number_of_bins, bin_ids_3)\n\nf_12 = get_frequencies_from_bin_ids(bin_ids_1, bin_ids_2, number_of_bins, number_of_bins)\np_12 = get_probabilities(\"maximum_likelihood\", f_12)\nmi_12 = apply_mutual_information_formula(p_12, sum(p_12, dims = 2), sum(p_12, dims = 1), mi_base)\n\nf_13 = get_frequencies_from_bin_ids(bin_ids_1, bin_ids_3, number_of_bins, number_of_bins)\np_13 = get_probabilities(\"maximum_likelihood\", f_13)\nmi_13 = apply_mutual_information_formula(p_13, sum(p_13, dims = 2), sum(p_13, dims = 1), mi_base)\n\n# And so on...Note that the probability distribution is estimated from the joint frequencies rather than the marginals, meaning that, for most estimators, sum(p_12, dims = 2) may be different from sum(p_13, dims = 2), even though both represent the estimated probability distribution for data_1. (This is not the case for the \"maximum likelihood\" estimator, which just divides the bin frequencies by the total frequency. For this estimator, the marginal probabilities could be stored in advance to avoid calculating them as they are passed into apply_entropy_formula. The best performance in that case may depend on the cost of storage vs calculations.)Here are two full examples of the \"quick\" vs the \"easy\" way to estimate the mutual information between all pairs of a set of variables.data = rand(100, 100)\n\nfunction mi_quick(data; discretizer = \"uniform_width\", estimator = \"maximum_likelihood\", mi_base = 2)\n\n	nvals, nvars = size(data)\n\n	bin_ids = zeros(Int, (nvals, nvars))\n	nbins = Int(round(sqrt(nvals)))\n	mis = zeros(binomial(nvars, 2))\n\n	for i in 1 : nvars\n		get_bin_ids!(data[1:nvals, i:i], discretizer, nbins, view(bin_ids, 1:nvals, i:i))\n	end\n\n	index = 1\n	for i in 1 : nvars, j in i+1 : nvars\n		f = get_frequencies_from_bin_ids(bin_ids[1:end, i:i], bin_ids[1:end, j:j], nbins, nbins)\n		p = get_probabilities(estimator, f)\n		mis[index] = apply_mutual_information_formula(p, sum(p, dims = 1), sum(p, dims = 2), mi_base)\n		index += 1\n	end\n\n	return mis\n\nend\n\nfunction mi_easy(data; discretizer = \"uniform_width\", estimator = \"maximum_likelihood\", mi_base = 2)\n	nvals, nvars = size(data)\n	mis = zeros(binomial(nvars, 2))\n\n	index = 1\n	for i in 1 : nvars, j in i+1 : nvars\n		mis[index] = get_mutual_information(data[1:nvals, i:i], data[1:nvals, j:j]; mode = discretizer, estimator = estimator, base = mi_base)\n		index += 1\n	end\n\n	return mis\nend"
},

{
    "location": "#Contributing-1",
    "page": "Readme",
    "title": "Contributing",
    "category": "section",
    "text": "Contributions and bug reports are welcome!"
},

{
    "location": "autodocs/#InformationMeasures.discretize_values-Tuple",
    "page": "Docstrings",
    "title": "InformationMeasures.discretize_values",
    "category": "method",
    "text": "discretize_values(values_x; <keyword arguments>)\n\nAssign continuous measurements to discrete bins.\n\nArguments\n\nvalues_x: the data values.\nmode=\"uniform_width\": the discretization algorithm.\nnumber_of_bins=0: the number of bins (will be overridden if mode is \"bayesian_blocks\").\nget_number_of_bins=get_root_n: the method for calculating the number of bins (only called if number_of_bins is 0).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#InformationMeasures.get_conditional_entropy-Tuple{Any,Any}",
    "page": "Docstrings",
    "title": "InformationMeasures.get_conditional_entropy",
    "category": "method",
    "text": "get_conditional_entropy(values_x, values_y; <keyword arguments>)\n\nEstimate conditional entropy of one set of values conditioned on another set of values.\n\nArguments:\n\nvalues_x: the data values.\nvalues_y: the data values to be conditioned on.\nestimator=\"maximum_likelihood\": the entropy estimator.\nbase=2: the base of the logarithm, equivalent to the units of information.\nmode=\"uniform_width\": the discretization algorithm.\nnumber_of_bins=0: the number of bins (will be overridden if mode is \"bayesian_blocks\").\nget_number_of_bins=get_root_n: the method for calculating the number of bins (only called if number_of_bins is 0).\nlambda=nothing: the shrinkage instensity, only used if estimator is \"shrinkage\".\nprior=1: the Dirichlet prior, only used if estimator is \"dirichlet\".\n\n\n\n\n\n"
},

{
    "location": "autodocs/#InformationMeasures.get_conditional_entropy-Tuple{Any}",
    "page": "Docstrings",
    "title": "InformationMeasures.get_conditional_entropy",
    "category": "method",
    "text": "get_conditional_entropy(xy; <keyword arguments>)\n\nArguments:\n\nxy: the 2D frequencies or probabilities.\nestimator=\"maximum_likelihood\": the entropy estimator.\nbase=2: the base of the logarithm, equivalent to the units of information.\nprobabilities=false: whether xy is probabilities. If false, xy is frequencies.\nlambda=nothing: the shrinkage instensity, only used if estimator is \"shrinkage\".\nprior=1: the Dirichlet prior, only used if estimator is \"dirichlet\".\n\n\n\n\n\n"
},

{
    "location": "autodocs/#InformationMeasures.get_conditional_mutual_information-Tuple{Any,Any,Any}",
    "page": "Docstrings",
    "title": "InformationMeasures.get_conditional_mutual_information",
    "category": "method",
    "text": "get_conditional_mutual_information(values_x, values_y, values_z; <keyword arguments>)\n\nEstimate the conditional mutual information between two sets of values, conditioned on a third.\n\nArguments:\n\nvalues_x: the data values.\nvalues_y: a second set of data values.\nvalues_z: the data values to be conditioned on.\nestimator=\"maximum_likelihood\": the entropy estimator.\nbase=2: the base of the logarithm, equivalent to the units of information.\nmode=\"uniform_width\": the discretization algorithm.\nnumber_of_bins=0: the number of bins (will be overridden if mode is \"bayesian_blocks\").\nget_number_of_bins=get_root_n: the method for calculating the number of bins (only called if number_of_bins is 0).\nlambda=nothing: the shrinkage instensity, only used if estimator is \"shrinkage\".\nprior=1: the Dirichlet prior, only used if estimator is \"dirichlet\".\n\n\n\n\n\n"
},

{
    "location": "autodocs/#InformationMeasures.get_conditional_mutual_information-Tuple{Any}",
    "page": "Docstrings",
    "title": "InformationMeasures.get_conditional_mutual_information",
    "category": "method",
    "text": "get_conditional_mutual_information(xyz; <keyword arguments>)\n\nArguments:\n\nxyz: the 3D frequencies or probabilities.\nestimator=\"maximum_likelihood\": the entropy estimator.\nbase=2: the base of the logarithm, equivalent to the units of information.\nprobabilities=false: whether xyz is probabilities. If false, xyz is frequencies.\nlambda=nothing: the shrinkage instensity, only used if estimator is \"shrinkage\".\nprior=1: the Dirichlet prior, only used if estimator is \"dirichlet\".\n\n\n\n\n\n"
},

{
    "location": "autodocs/#InformationMeasures.get_cross_entropy-Tuple{Any,Any}",
    "page": "Docstrings",
    "title": "InformationMeasures.get_cross_entropy",
    "category": "method",
    "text": "get_cross_entropy(values_x, values_y; <keyword arguments>)\n\nEstimate the cross-entropy between two sets of values.\n\nArguments:\n\nvalues_x: the first set of data values.\nvalues_y: the second set of data values.\nestimator=\"maximum_likelihood\": the entropy estimator.\nbase=2: the base of the logarithm, equivalent to the units of information.\nmode=\"uniform_width\": the discretization algorithm.\nnumber_of_bins=0: the number of bins (will be overridden if mode is \"bayesian_blocks\").\nget_number_of_bins=get_root_n: the method for calculating the number of bins (only called if number_of_bins is 0).\ndiscretized=false: whether the data values are already discretized.\nlambda=nothing: the shrinkage intensity, only used if estimator is \"shrinkage\".\nprior=1: the Dirichlet prior, only used if estimator is \"dirichlet\".\n\n\n\n\n\n"
},

{
    "location": "autodocs/#InformationMeasures.get_entropy-Tuple",
    "page": "Docstrings",
    "title": "InformationMeasures.get_entropy",
    "category": "method",
    "text": "get_entropy(values_x; <keyword arguments>)\n\nEstimate entropy (or joint entropy, if more than one set of data values is given).\n\nArguments:\n\nvalues_x: the data values.\nestimator=\"maximum_likelihood\": the entropy estimator.\nbase=2: the base of the logarithm, equivalent to the units of information.\nmode=\"uniform_width\": the discretization algorithm.\nnumber_of_bins=0: the number of bins (will be overridden if mode is \"bayesian_blocks\").\nget_number_of_bins=get_root_n: the method for calculating the number of bins (only called if number_of_bins is 0).\ndiscretized=false: whether the data values are already discretized.\nlambda=nothing: the shrinkage instensity, only used if estimator is \"shrinkage\".\nprior=1: the Dirichlet prior, only used if estimator is \"dirichlet\".\n\n\n\n\n\n"
},

{
    "location": "autodocs/#InformationMeasures.get_interaction_information-Tuple{Any,Any,Any}",
    "page": "Docstrings",
    "title": "InformationMeasures.get_interaction_information",
    "category": "method",
    "text": "get_interaction_information(values_x, values_y, values_z; <keyword arguments>)\n\nEstimate the interaction information between three sets of values.\n\nArguments:\n\nvalues_x: the data values.\nvalues_y: a second set of data values.\nvalues_z: a third set of data values.\nestimator=\"maximum_likelihood\": the entropy estimator.\nbase=2: the base of the logarithm, equivalent to the units of information.\nmode=\"uniform_width\": the discretization algorithm.\nnumber_of_bins=0: the number of bins (will be overridden if mode is \"bayesian_blocks\").\nget_number_of_bins=get_root_n: the method for calculating the number of bins (only called if number_of_bins is 0).\nlambda=nothing: the shrinkage instensity, only used if estimator is \"shrinkage\".\nprior=1: the Dirichlet prior, only used if estimator is \"dirichlet\".\n\n\n\n\n\n"
},

{
    "location": "autodocs/#InformationMeasures.get_interaction_information-Tuple{Any}",
    "page": "Docstrings",
    "title": "InformationMeasures.get_interaction_information",
    "category": "method",
    "text": "get_interaction_information(xyz; <keyword arguments>)\n\nArguments:\n\nxyz: the 3D frequencies or probabilities.\nestimator=\"maximum_likelihood\": the entropy estimator.\nbase=2: the base of the logarithm, equivalent to the units of information.\nprobabilities=false: whether xyz is probabilities. If false, xyz is frequencies.\nlambda=nothing: the shrinkage instensity, only used if estimator is \"shrinkage\".\nprior=1: the Dirichlet prior, only used if estimator is \"dirichlet\".\n\n\n\n\n\n"
},

{
    "location": "autodocs/#InformationMeasures.get_mutual_information-Tuple{Any,Any}",
    "page": "Docstrings",
    "title": "InformationMeasures.get_mutual_information",
    "category": "method",
    "text": "get_mutual_information(values_x, values_y; <keyword arguments>)\n\nEstimate the mutual information between two sets of values.\n\nArguments:\n\nvalues_x: the data values.\nvalues_y: a second set of data values.\nestimator=\"maximum_likelihood\": the entropy estimator.\nbase=2: the base of the logarithm, equivalent to the units of information.\nmode=\"uniform_width\": the discretization algorithm.\nnumber_of_bins=0: the number of bins (will be overridden if mode is \"bayesian_blocks\").\nget_number_of_bins=get_root_n: the method for calculating the number of bins (only called if number_of_bins is 0).\nlambda=nothing: the shrinkage instensity, only used if estimator is \"shrinkage\".\nprior=1: the Dirichlet prior, only used if estimator is \"dirichlet\".\n\n\n\n\n\n"
},

{
    "location": "autodocs/#InformationMeasures.get_mutual_information-Tuple{Any}",
    "page": "Docstrings",
    "title": "InformationMeasures.get_mutual_information",
    "category": "method",
    "text": "get_mutual_information(xy; <keyword arguments>)\n\nArguments:\n\nxy: the 2D frequencies or probabilities.\nestimator=\"maximum_likelihood\": the entropy estimator.\nbase=2: the base of the logarithm, equivalent to the units of information.\nprobabilities=false: whether xy is probabilities. If false, xy is frequencies.\nlambda=nothing: the shrinkage instensity, only used if estimator is \"shrinkage\".\nprior=1: the Dirichlet prior, only used if estimator is \"dirichlet\".\n\n\n\n\n\n"
},

{
    "location": "autodocs/#InformationMeasures.get_partial_information_decomposition-Tuple{Any,Any,Any}",
    "page": "Docstrings",
    "title": "InformationMeasures.get_partial_information_decomposition",
    "category": "method",
    "text": "get_partial_information_decomposition(values_x, values_y, values_z; <keyword arguments>)\n\nEstimate the partial information decomposition between three sets of values.\n\nPerformance can be improved by setting all_orientations, include_unique and include_synergy according to the use case.\n\nArguments:\n\nvalues_x: the data values.\nvalues_y: a second set of data values.\nvalues_z: a third set of data values.\nestimator=\"maximum_likelihood\": the entropy estimator.\nbase=2: the base of the logarithm, equqivalent to the units of information.\nmode=\"uniform_width\": the discretization algorithm.\nnumber_of_bins=0: the number of bins (will be overridden if mode is \"bayesian_blocks\").\nget_number_of_bins=get_root_n: the method for calculating the number of bins (only called if number_of_bins is 0).\nlambda=nothing: the shrinkage instensity, only used if estimator is \"shrinkage\".\nprior=1: the Dirichlet prior, only used if estimator is \"dirichlet\".\nall_orientations=false: whether to use each set of values as the target. If false, only values_z is the target.\ninclude_unique=true: whether to get the unique information.\ninclude_synergy=true: whether to get the synergy.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#InformationMeasures.get_partial_information_decomposition-Tuple{Any}",
    "page": "Docstrings",
    "title": "InformationMeasures.get_partial_information_decomposition",
    "category": "method",
    "text": "get_partial_information_decomposition(xyz; <keyword arguments>)\n\nArguments:\n\nxyz: the 3D frequencies or probabilities.\nestimator=\"maximum_likelihood\": the entropy estimator.\nbase=2: the base of the logarithm, equivalent to the units of information.\nprobabilities=false: whether xyz is probabilities. If false, xyz is frequencies.\nlambda=nothing: the shrinkage instensity, only used if estimator is \"shrinkage\".\nprior=1: the Dirichlet prior, only used if estimator is \"dirichlet\".\nall_orientations=false: whether to use each set of values as the target. If false, only values_z is the target.\ninclude_unique=true: whether to get the unique information.\ninclude_synergy=true: whether to get the synergy.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#InformationMeasures.get_probabilities-Tuple{Any,Any}",
    "page": "Docstrings",
    "title": "InformationMeasures.get_probabilities",
    "category": "method",
    "text": "get_probabilities(estimator, frequencies; <keyword arguments>)\n\nEstimate probabilities from a set of discrete values.\n\nArguments:\n\nestimator: the entropy estimator.\nfrequencies: the bin frequencies for the discretized data values.\nlambda=nothing: the shrinkage instensity, only used if estimator is \"shrinkage\".\nprior=1: the Dirichlet prior, only used if estimator is \"dirichlet\".\n\n\n\n\n\n"
},

{
    "location": "autodocs/#InformationMeasures.get_redundancy-Tuple{Any,Any,Any}",
    "page": "Docstrings",
    "title": "InformationMeasures.get_redundancy",
    "category": "method",
    "text": "get_redundancy(values_x, values_y, values_z; <keyword arguments>)\n\nEstimate the redundancy between three sets of values.\n\nArguments:\n\nvalues_x: the data values.\nvalues_y: a second set of data values.\nvalues_z: a third set of data values.\nestimator=\"maximum_likelihood\": the entropy estimator.\nbase=2: the base of the logarithm, equqivalent to the units of information.\nmode=\"uniform_width\": the discretization algorithm.\nnumber_of_bins=0: the number of bins (will be overridden if mode is \"bayesian_blocks\").\nget_number_of_bins=get_root_n: the method for calculating the number of bins (only called if number_of_bins is 0).\nlambda=nothing: the shrinkage instensity, only used if estimator is \"shrinkage\".\nprior=1: the Dirichlet prior, only used if estimator is \"dirichlet\".\nall_orientations=false: whether to use each set of values as the target. If false, only values_z is the target.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#InformationMeasures.get_redundancy-Tuple{Any}",
    "page": "Docstrings",
    "title": "InformationMeasures.get_redundancy",
    "category": "method",
    "text": "get_redundancy(xyz; <keyword arguments>)\n\nArguments:\n\nxyz: the 3D frequencies or probabilities.\nestimator=\"maximum_likelihood\": the entropy estimator.\nbase=2: the base of the logarithm, equivalent to the units of information.\nprobabilities=false: whether xyz is probabilities. If false, xyz is frequencies.\nlambda=nothing: the shrinkage instensity, only used if estimator is \"shrinkage\".\nprior=1: the Dirichlet prior, only used if estimator is \"dirichlet\".\nall_orientations=false: whether to use each set of values as the target. If false, only values_z is the target.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#InformationMeasures.get_total_correlation-Tuple{Any,Any,Any}",
    "page": "Docstrings",
    "title": "InformationMeasures.get_total_correlation",
    "category": "method",
    "text": "get_total_correlation(values_x, values_y, values_z; <keyword arguments>)\n\nEstimate the total correlation between three sets of values.\n\nArguments:\n\nvalues_x: the data values.\nvalues_y: a second set of data values.\nvalues_z: a third set of data values.\nestimator=\"maximum_likelihood\": the entropy estimator.\nbase=2: the base of the logarithm, equivalent to the units of information.\nmode=\"uniform_width\": the discretization algorithm.\nnumber_of_bins=0: the number of bins (will be overridden if mode is \"bayesian_blocks\").\nget_number_of_bins=get_root_n: the method for calculating the number of bins (only called if number_of_bins is 0).\nlambda=nothing: the shrinkage instensity, only used if estimator is \"shrinkage\".\nprior=1: the Dirichlet prior, only used if estimator is \"dirichlet\".\n\n\n\n\n\n"
},

{
    "location": "autodocs/#InformationMeasures.get_total_correlation-Tuple{Any}",
    "page": "Docstrings",
    "title": "InformationMeasures.get_total_correlation",
    "category": "method",
    "text": "get_total_correlation(xyz; <keyword arguments>)\n\nArguments:\n\nxyz: the 3D frequencies or probabilities.\nestimator=\"maximum_likelihood\": the entropy estimator.\nbase=2: the base of the logarithm, equivalent to the units of information.\nprobabilities=false: whether xyz is probabilities. If false, xyz is frequencies.\nlambda=nothing: the shrinkage instensity, only used if estimator is \"shrinkage\".\nprior=1: the Dirichlet prior, only used if estimator is \"dirichlet\".\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [InformationMeasures]\nOrder = [:type, :function]"
},

]}
