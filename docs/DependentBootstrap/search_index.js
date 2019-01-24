var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#DependentBootstrap.jl-1",
    "page": "Readme",
    "title": "DependentBootstrap.jl",
    "category": "section",
    "text": "(Image: Build Status)A module for the Julia language that implements several varieties of the dependent statistical bootstrap as well as the corresponding block-length selection procedures."
},

{
    "location": "#News-1",
    "page": "Readme",
    "title": "News",
    "category": "section",
    "text": "This package is compatible with julia v1.0+. If you are running v0.6, you will need to use Pkg.pin(\"DependentBootstrap\", v\"0.1.1\") at the REPL, and if you are running v0.5, use Pkg.pin(\"DependentBootstrap\", v\"0.0.1\"). Compability with versions before v0.5 is not available.  "
},

{
    "location": "#Main-features-1",
    "page": "Readme",
    "title": "Main features",
    "category": "section",
    "text": "This module allows Julia users to estimate the distribution of a test statistic using any of several varieties of the dependent bootstrap.The following bootstrap methods are implemented:the iid bootstrap proposed in Efron (1979) \"Bootstrap Methods: Another Look at the Jackknife\",\nthe stationary bootstrap proposed in Politis, Romano (1994) \"The Stationary Bootstrap\"\nthe moving block bootstrap proposed in Kunsch (1989) \"The jackknife and the bootstrap for general stationary observations\" and (independently) Liu, Singh (1992) \"Moving blocks jackknife and bootstrap capture weak dependence\",\nthe circular block bootstrap proposed in Politis, Romano (1992) \"A circular block resampling procedure for stationary data\", and\nthe non-overlapping block bootstrap described in Lahiri (1999) Resampling Methods for Dependent Data (this method is not usually used and is included mainly as a curiosity).The module also implements the following block length selection procedures:the block length selection procedure proposed in Politis, White (2004) \"Automatic Block Length Selection For The Dependent Bootstrap\", including the correction provided in Patton, Politis, and White (2009)Bandwidth selection for the block length procedures is implemented using the method proposed in Politis (2003) \"Adaptive Bandwidth Choice\".Some work has been done to implement the tapered block bootstrap of Paparoditis, Politis (2002) \"The tapered block bootstrap for general statistics from stationary sequences\", along with corresponding block-length selection procedures, but it is not yet complete.The module is implemented entirely in Julia."
},

{
    "location": "#What-this-package-does-not-include-1",
    "page": "Readme",
    "title": "What this package does not include",
    "category": "section",
    "text": "I have not included any procedures for bootstrapping confidence intervals in a linear regression framework. I believe that this functionality is better provided by a separate package (possibly GLM), that can use this package for the bootstrapping step.I also have not included support for the jackknife, wild bootstrap, parametric bootstrap, or subsampling procedures. I would be quite open to pull requests that add these methods to the present package, but have not had time to implement them myself. Work is ongoing to include the tapered block bootstrap, and ideally, the package will also eventually include the extended tapered block bootstrap. If you are interested in working on any of these projects, please feel free to contact me."
},

{
    "location": "#How-to-use-this-package-1",
    "page": "Readme",
    "title": "How to use this package",
    "category": "section",
    "text": ""
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "This package should be added using using Pkg ; Pkg.add(\"DependentBootstrap\"), and can then be called with using DependentBootstrap. The package has three core dependencies: StatsBase, Distributions, and Requires. Support for datatypes defined in DataFrames and TimeSeries is also included, but these packages are lazily-loaded by Requires only when needed, and so are not explicit dependencies."
},

{
    "location": "#Terminology-1",
    "page": "Readme",
    "title": "Terminology",
    "category": "section",
    "text": "In what follows, I use the terminology from Lahiri (1999) Resampling Methods for Dependent Data and refer to the underlying test statistic of interest as a level 1 statistic, and the distribution parameter of the test statistic that is of interest as a level 2 parameter. For example, the user might have some dataset x of type T_data, and be interested in the variance of the sample mean of x. In this case, the level 1 statistic is the sample mean function mean, and the level 2 parameter is the sample variance function var.I use T_data to refer to the type of the users dataset, T_level1 to refer to the output type obtained by applying the level 1 statistic function to the dataset, and T_level2 to refer to the output type obtained by applying the level 2 statistic to a Vector{T_level1} (i.e. a vector of resampled level 1 statistics)."
},

{
    "location": "#Exported-functions-1",
    "page": "Readme",
    "title": "Exported functions",
    "category": "section",
    "text": "The package exports the following functions, all of which have docstrings that can be called interactively at the REPL:dbootinds(...)::Vector{Vector{Int}} -> Returns indices that can be used to index into the underlying data to obtain bootstrapped data. Note, each inner vector of the output corresponds to a single re-sample for the underlying data.\ndbootdata(...)::Vector{T_data} -> Returns the bootstrapped data. Each element of the output vector corresponds to one re-sampled dataset, and the output vector will have length equal to numresample (a parameter discussed later).\ndbootlevel1(...)::Vector{T_level1} -> Returns a vector of bootstrapped level 1 statistics, where the output vector will have length equal to numresample.\ndbootlevel2(...)::T_level2 -> Returns the bootstrapped distribution parameter of the level 1 statistic.\ndboot(...)::T_level2 -> Identical to dbootlevel2. Most users will want to use this function.\ndbootvar(...)::Float64 -> Identical to dboot but automatically sets flevel2 to var (the sample variance function)\ndbootconf(...)::Vector{Float64} -> Identical to dboot but automatically sets flevel2 to the anonymous function x -> quantile(x, [0.025, 0.975]), so the level 2 distribution parameter is a 95% confidence interval. In addition to the usual keywords, the keyword version of this function also accepts the keyword alpha::Float64=0.05, which controls the width of the confidence interval. Note, 0.05 corresponds to a 95% confidence interval, 0.1 to a 90% interval, and 0.01 to a 99% interval (and so on).\noptblocklength(...)::Float64 -> Returns the optimal block length.The function bandwidth_politis_2003{T<:Number}(x::AbstractVector{T})::Tuple{Int, Float64, Vector{Float64}} is not exported, but the docstrings can be accessed using ?DependentBootstrap.bandwidth_politis_2003 at the REPL. This function implements the bandwidth selection procedure from Politis (2003) discussed above, and may be of independent interest to some users.All of the above functions exhibit the following two core methods:f(data ; kwargs...)\nf(data, bi::BootInput)where data is the users underlying dataset, kwargs is a collection of keyword arguments, and bi::BootInput is a core type exported by the module that will be discussed later (but can be safely ignored by most users). The following types for data are currently accepted:Vector{<:Number},\nMatrix{<:Number} where rows are observations and columns are variables,\nVector{Vector{<:Number}} where each inner vector is a variable,\nDataFrame\nTimeArrayOf the two core methods, most users will want the kwargs method. A list of valid keyword arguments and their default values follows:blocklength         <- Block length for bootstrapping procedure. The default value is 0. Set to <= 0 to auto-estimate the optimal block length from the dataset. Float64 inputs are allowed.\nnumresample         <- Number of times to resample the input dataset. The default value is the module constant NUM_RESAMPLE, currently set to 1000.\nbootmethod          <- Bootstrapping methodology to use. The default value is :stationary (for the stationary bootstrap).\nblocklengthmethod   <- Block length selection procedure to use if user wishes to auto-estimate the block length. Default value is :ppw2009 (use the method described in Patton, Politis, and White (2009)).\nflevel1             <- A function that converts the input dataset to the estimator that the user wishes to bootstrap. The default value is mean.\nflevel2             <- A function that converts a vector of estimators constructed by flevel1 into a distributional parameter. The default value is var.\nnumobsperresample   <- Number of observations to be drawn (with replacement) per resample. The default value is the number of observations in the dataset (the vast majority of users will want this default value).\nfblocklengthcombine <- A function for converting a Vector{Float64} of estimated blocklengths to a single Float64 blocklength estimate, which is necessary when the input dataset is a multivariate type. The default value is median.A list of acceptable keyword arguments for bootmethod and blocklengthmethod follows. Note you can use either String or Symbol when specifying these arguments. For bootmethod we have::iid or :efron                     <- IID bootstrap\n:stationary                          <- Stationary bootstrap\n:movingblock or :moving            <- Moving block bootstrap\n:nonoverlappingblock or :nooverlap <- Nonoverlapping block bootstrap\n:circularblock or circular         <- Circular block bootstrapFor blocklengthmethod we have::ppw2009 <- Block length selection method of Patton, Politis, and White (2009)Acceptable arguments can also be examined interactively by examining the keys of the module dictionaries BOOT_METHOD_DICT and BLOCKLENGTH_METHOD_DICT.In practice, the keyword argument method f(data ; kwargs...) actually just wraps a call to f(data, BootInput(kwargs...)) under the hood. However, most users will not need to concern themselves with this level of detail.For those who wish more fine-grained control, please use ?BootInput at the REPL to get more information on this core module type."
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "Let data::Vector{Float64}.The variance of the sample mean of data can be bootstrapped using a stationary bootstrap with optimally estimated block length using dboot(data) or dbootvar(data).A 90% confidence interval for the sample median using a circular block bootsrap with block length of 5 can be estimated using dboot(data, blocklength=5, bootmethod=:circular, flevel1=median, flevel2=(x -> quantile(x, [0.05, 0.95]))) or dbootconf(data, blocklength=5, bootmethod=:circular, flevel1=median, alpha=0.1).Moving block bootstrap indices for generating bootstrapped data with optimally estimated block length can be obtained using dbootinds(data, bootmethod=:moving), or if the user wants the bootstrapped data not the indices, dbootdata(data, bootmethod=:moving). If the user wants bootstrapped sample medians of data, then use dbootlevel1(data, bootmethod=:moving, flevel1=median).If the user wants the optimal block length using the method proposed in Patton, Politis, and White (2009), use optblocklength(data, blmethod=:ppw2009).Now let data::Matrix{Float64}.If the user wants the median optimal block length from each column of data, use optblocklength(data, blmethod=:ppw2009). If the user wants the average optimal block length use optblocklength(data, blmethod=:ppw2009, fblocklengthcombine=mean).If the user wants the median of the test statistic that is the maximum of the sample mean of each column, using a stationary bootstrap with optimal block length, then use dboot(data, flevel1=(x -> maximum(mean(x, 1))), flevel2=median). If data::Vector{Vector{Float64}} instead, and the user wanted the 95% confidence interval, use dbootconf(data, flevel1=(x -> maximum([ mean(x[k]) for k = 1:length(x) ])))."
},

{
    "location": "autodocs/#DependentBootstrap.BootInput",
    "page": "Docstrings",
    "title": "DependentBootstrap.BootInput",
    "category": "type",
    "text": "BootInput\n\nCore type that defines all parameters needed to perform a bootstrap procedure. The vast majority of users should use the keyword argument constructor that has the method signature:\n\nBootInput(data ; kwargs...)\n\nwhere data is the dataset to be bootstrapped, and kwargs denotes a set of keyword arguments (defined below) that are used for every exported function in the DependentBootstrap package. The following keyword arguments and default values follow: \n\n- blocklength         <- Block length for bootstrapping procedure. Default value is 0. Set to <= 0 to auto-estimate the optimal block length from the dataset. Float64 inputs allowed.\n- numresample         <- Number of times to resample the input dataset. Default value is the module constant NUM_RESAMPLE, currently set to 1000.\n- bootmethod          <- Bootstrapping methodology to use. Default value is the Symbol :stationary (for the stationary bootstrap).\n- blocklengthmethod   <- Block length selection procedure to use if user wishes to auto-estimate the block length. Default value is the Symbol :ppw2009 (use the method described in Patton, Politis, and White (2009)).\n- flevel1             <- A function that converts the input dataset to the estimator that the user wishes to bootstrap. Default value is the sample mean.\n- flevel2             <- A function that converts a vector of estimators constructed by flevel1 into a distributional parameter. Default value is sample variance.\n- numobsperresample   <- Number of observations to be drawn (with replacement) per resample. The default value is the number of observations in the dataset (the vast majority of users will want this default value).\n- fblocklengthcombine <- A function for converting a Vector{Float64} of estimated blocklengths to a single Float64 blocklength estimate. Default value is median.\n\nThe constructor will attempt to convert all provided keyword arguments to appropriate types, and will notify the user via an error if a supplied keyword argument is not valid.\n\nNote that the bootmethod and blocklengthmethod keyword arguments will accept both Symbol and String inputs, and will convert them to BootMethod and BlockLengthMethod types internally. To see a list of acceptable Symbol or String values for the bootmethod and blocklengthmethod keyword arguments, use: \n\n- collect(keys(DependentBootstrap.BOOT_METHOD_DICT))\n- collect(keys(DependentBootstrap.BLOCKLENGTH_METHOD_DICT))\n\nrespectively. A small proportion of users may need the fine-grained control that comes from constructing BootMethod and BlockLengthMethod types explicitly and then providing them to the keyword constructor. These users should use ?BootMethod and ?BlockLengthMethod at the REPL for more info.\n\nBootInput is not mutable, but the type is near instantaneous to construct, so if a user wishes to amend a BootInput it is recommended to just construct another one. A special constructor is provided to facilitate this process that has the method definition: \n\n- BootInput(data, bootinput::BootInput ; kwargs...)\n\nwhere the new BootInput draws its fields from the keyword arguments that are provided, and then the input BootInput for any keyword arguments that are not provided.\n\nNote that all exported functions in the DependentBootstrap package exhibit the method signature: \n\n- exported_func(data ; kwargs...)\n\nwhich in practice just wraps the keyword argument constructor for a BootInput, and then calls the method signature: \n\n - exported_func(data, bootinput::BootInput)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DependentBootstrap.dboot-Tuple{Any,BootInput}",
    "page": "Docstrings",
    "title": "DependentBootstrap.dboot",
    "category": "method",
    "text": "dboot(data, bi::BootInput)\ndboot(data ; kwargs...)\n\nGet the level 2 bootstrapped statistics associated with dataset in data, and bootstrap methodology in BootInput.\n\nA keyword method that calls the keyword constructor for BootInput is also provided. Please use ?BootInput at the REPL for more detail on feasible keywords.\n\nNote, the return type of the output will be determined by bi.flevel2, which must be a function that accepts Vector{T}, where T is the output type of bi.flevel1.\n\nFor example, if data is a Vector{<:Number} and bi.flevel1 is mean, then in this case, bi.flevel1 will return Float64, and so bi.flevel2 must be some function that accepts Vector{Float64} as input (and can have any output type.)\n\nAlternatively, bi.flevel2 could be the anonymous function (x -> quantile(x, [0.025, 0.975])), in which case the input should be Vector{Float64}, and so bi.flevel1 should return Float64. Note, the output of bi.flevel2 in this case will be a 2-element Vector{Float64} with elements corresponding bootstrapped 95% confidence interval for the level1 statistic of the input dataset\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DependentBootstrap.dbootconf-Tuple{Any}",
    "page": "Docstrings",
    "title": "DependentBootstrap.dbootconf",
    "category": "method",
    "text": "dbootconf <- Identical to dboot but with the level 2 statistic set to a confidence interval with width determined by keyword alpha. Default alpha=0.05 corresponds to a 95% confidence interval.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DependentBootstrap.dbootdata-Union{Tuple{Td}, Tuple{Td,BootInput}} where Td",
    "page": "Docstrings",
    "title": "DependentBootstrap.dbootdata",
    "category": "method",
    "text": "dbootdata(data::T , bi::BootInput)::Vector{T}\ndbootdata(data::T ; kwargs...)::Vector{T}\n\nGet the resampled datasets of the input data using the dependent bootstrap methodology defined in BootInput.\n\nA keyword method that calls the keyword constructor for BootInput is also provided. Please use ?BootInput at the REPL for more detail on feasible keywords.\n\nNote, this function should always have output type Vector{T}.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DependentBootstrap.dbootinds-Tuple{BootInput}",
    "page": "Docstrings",
    "title": "DependentBootstrap.dbootinds",
    "category": "method",
    "text": "dbootinds(data::T ; bi::BootInput)::Vector{Vector{Int}}\ndbootinds(data::T ; kwargs...)::Vector{Vector{Int}}\n\nEach inner vector of the returned Vector{Vector{Int}} provides indices that, when used to index the original dataset, will provide a single resampled dataset.\n\nA keyword method that calls the keyword constructor for BootInput is also provided. Please use ?BootInput at the REPL for more detail on feasible keywords.\n\nPlease use dbootinds_one if you only want to obtain a single Vector{Int} resampling index.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DependentBootstrap.dbootlevel1-Tuple{Any,BootInput}",
    "page": "Docstrings",
    "title": "DependentBootstrap.dbootlevel1",
    "category": "method",
    "text": "dbootlevel1(data::T1, bi::BootInput)\ndbootlevel1(data::T1; kwargs...)\n\nGet the level 1 bootstrapped statistics associated with dataset in data, and bootstrap methodology in BootInput.\n\nA keyword method that calls the keyword constructor for BootInput is also provided. Please use ?BootInput at the REPL for more detail on feasible keywords.\n\nNote, the return type is determined by bi.flevel1, which must be a function that accepts T1, ie typeof(data), as input. It may return any output type T2, as long as bi.flevel2 will accept Vector{T2} as input.\n\nFor example, if data is a Vector{<:Number} then bi.flevel1 might be the function mean, which in this case will return Float64, so bi.flevel2 must be some function that can accept Vector{Float64} as input.\n\nA more complicated example: if data is Matrix{<:Number} then bi.flevel1 might be the anonymous function x->mean(x,dims=1), which in this case will return a single row Matrix{Float64}, and so bi.flevel2 must be some function that can accept Vector{Matrix{Float64}} as input.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DependentBootstrap.dbootlevel2-Tuple{Any,BootInput}",
    "page": "Docstrings",
    "title": "DependentBootstrap.dbootlevel2",
    "category": "method",
    "text": "dbootlevel2 <- Identical to the dboot function. This function is only included for naming consistency with dbootlevel1\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DependentBootstrap.dbootvar-Tuple{Any}",
    "page": "Docstrings",
    "title": "DependentBootstrap.dbootvar",
    "category": "method",
    "text": "dbootvar <- Identical to dboot but with the level 2 statistic set to variance\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DependentBootstrap.optblocklength-Union{Tuple{Tbm}, Tuple{AbstractArray{#s1256,1} where #s1256<:Number,BLPPW2009{P2003},Tbm}} where Tbm<:DependentBootstrap.BootMethod",
    "page": "Docstrings",
    "title": "DependentBootstrap.optblocklength",
    "category": "method",
    "text": "optblocklength(data, bi::BootInput)::Float64\noptblocklength(data ; kwargs...)::Float64\n\nProvides an estimate of the optimal block-length to use with a dependent bootstrap.\n\nFor multivariate datasets, optimal block length is estimated for each column of data, and then bi.fblocklengthcombine, which is a function that maps Vector{Float64} to Float64, is called to reduce the multiple estimates to a single estimates. The default value for fblocklengthcombine is median.\n\nBlock length methods currently implemented include: \n\n - Patton, Politis, White (2009) \"Correction to Automatic Block Length Selection For the Dependent Bootstrap\"\n\nFor all methods discussed above, bandwidth is estimated following Politis (2003) \"Adaptive Bandwidth Choice\", using the flat-top kernel suggested in that paper.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DependentBootstrap.BLDummy",
    "page": "Docstrings",
    "title": "DependentBootstrap.BLDummy",
    "category": "type",
    "text": "BLDummy <- Dummy type for block length method\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DependentBootstrap.BLPPW2009",
    "page": "Docstrings",
    "title": "DependentBootstrap.BLPPW2009",
    "category": "type",
    "text": "BLPPW2009 <- Type for using multiple dispatch to get the block length selection procedure of Patton, Politis, and White (2009)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DependentBootstrap.BandwidthMethod",
    "page": "Docstrings",
    "title": "DependentBootstrap.BandwidthMethod",
    "category": "type",
    "text": "BandwidthMethod <- Abstract supertype for all bandwidth selection methods\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DependentBootstrap.BlockLengthMethod",
    "page": "Docstrings",
    "title": "DependentBootstrap.BlockLengthMethod",
    "category": "type",
    "text": "BlockLengthMethod <- Abstract supertype for all block length selection methods\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DependentBootstrap.BootCircular",
    "page": "Docstrings",
    "title": "DependentBootstrap.BootCircular",
    "category": "type",
    "text": "BootCircular <- Type for using multiple dispatch to get the circular blocks bootstrap\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DependentBootstrap.BootDummy",
    "page": "Docstrings",
    "title": "DependentBootstrap.BootDummy",
    "category": "type",
    "text": "BootDummy <- Dummy type used within the module. Should never be seen by the end user\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DependentBootstrap.BootIID",
    "page": "Docstrings",
    "title": "DependentBootstrap.BootIID",
    "category": "type",
    "text": "BootIID <- Type for using multiple dispatch to get the IID boostrap\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DependentBootstrap.BootMethod",
    "page": "Docstrings",
    "title": "DependentBootstrap.BootMethod",
    "category": "type",
    "text": "BootMethod <- Abstract supertype for all dependent bootstrap methods\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DependentBootstrap.BootMoving",
    "page": "Docstrings",
    "title": "DependentBootstrap.BootMoving",
    "category": "type",
    "text": "BootMoving <- Type for using multiple dispatch to get the moving blocks bootstrap\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DependentBootstrap.BootNoOverlap",
    "page": "Docstrings",
    "title": "DependentBootstrap.BootNoOverlap",
    "category": "type",
    "text": "BootNoOverlap <- Type for using multiple dispatch to get the non-overlapping blocks bootstrap\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DependentBootstrap.BootStationary",
    "page": "Docstrings",
    "title": "DependentBootstrap.BootStationary",
    "category": "type",
    "text": "BootStationary <- Type for using multiple dispatch to get the stationary bootstrap\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DependentBootstrap.KernelDummy",
    "page": "Docstrings",
    "title": "DependentBootstrap.KernelDummy",
    "category": "type",
    "text": "KernelDummy <- Dummy type for kernel functions\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DependentBootstrap.KernelFunctionMethod",
    "page": "Docstrings",
    "title": "DependentBootstrap.KernelFunctionMethod",
    "category": "type",
    "text": "KernelFunctionMethod <- Abstract supertype for all kernel function methods\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DependentBootstrap.P2003",
    "page": "Docstrings",
    "title": "DependentBootstrap.P2003",
    "category": "type",
    "text": "P2003 <- Type for using multiple dispatch to get the bandwidth selection procedure of Politis (2003)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DependentBootstrap.bandwidth_politis_2003-Union{Tuple{AbstractArray{T,1}}, Tuple{T}} where T<:Number",
    "page": "Docstrings",
    "title": "DependentBootstrap.bandwidth_politis_2003",
    "category": "method",
    "text": "bandwidth_politis_2003(x::AbstractVector{T})::Tuple{Int, Float64, Vector{Float64}} where {T<:Number}\n\nImplements the methodology from Politis (2003) \"Adaptive Bandwidth Choice\" to obtain a data-driven bandwidth estimate.\n\nReturn tuple is, in order, the bandwidth estimate, the variance of x, and the autocorrelations used to get the bandwidth estimate.\n\nNote, most users won\'t be interested in the second and third output, but sometimes this routine will be called by other functions that need these terms, so they are returned to avoid duplicate computation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DependentBootstrap.bootmethod_to_blocklengthmethod-Union{Tuple{T}, Tuple{T}} where T<:Union{BootCircular, BootIID, BootMoving, BootNoOverlap, BootStationary}",
    "page": "Docstrings",
    "title": "DependentBootstrap.bootmethod_to_blocklengthmethod",
    "category": "method",
    "text": "bootmethodtoblocklengthmethod <- Convert a bootstrap method to the most appropriate block length method\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DependentBootstrap.dbootdata_one-Union{Tuple{Td}, Tuple{Td,BootInput}} where Td",
    "page": "Docstrings",
    "title": "DependentBootstrap.dbootdata_one",
    "category": "method",
    "text": "dbootdata_one(data::T, bi::BootInput)::T\ndbootdata_one(data::T; kwargs...)::T\n\nGet a single resampled dataset of the input data using the dependent boostrap methodology defined in BootInput.\n\nA keyword method that calls the keyword constructor for BootInput is also provided. Please use ?BootInput at the REPL for more detail on feasible keywords.\n\nNote, the output type will always be the same as the type of the input data.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DependentBootstrap.dbootinds_one-Tuple{BootInput{DependentBootstrap.BootIID,Tbl,Tf1,Tf2,Tfc} where Tfc<:Function where Tf2<:Function where Tf1<:Function where Tbl<:DependentBootstrap.BlockLengthMethod}",
    "page": "Docstrings",
    "title": "DependentBootstrap.dbootinds_one",
    "category": "method",
    "text": "dbootindsone(bi::BootInput)::Vector{Int} dbootindsone(data::T; kwargs...)::Vector{Int}\n\nReturns a single resampling index that, when used to index the original dataset, will provide a single resampled dataset.\n\nA keyword method that calls the keyword constructor for BootInput is also provided. Please use ?BootInput at the REPL for more detail on feasible keywords.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DependentBootstrap.kernel_politis_2003_flat_top-Tuple{Float64}",
    "page": "Docstrings",
    "title": "DependentBootstrap.kernel_politis_2003_flat_top",
    "category": "method",
    "text": "kernel_politis_2003_flat_top(x::Float64)::Float64\n\nImplements the flat-top kernel function discussed in Politis (2003) \"Adaptive Bandwidth Choice\"\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DependentBootstrap.local_get_index-Union{Tuple{T}, Tuple{AbstractArray{T,1},Array{Int64,1}}} where T",
    "page": "Docstrings",
    "title": "DependentBootstrap.local_get_index",
    "category": "method",
    "text": "localgetindex <- Internal function used to resample the dataset data using the input resampling index inds\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DependentBootstrap.local_get_var-Union{Tuple{T}, Tuple{AbstractArray{T,1},Int64}} where T",
    "page": "Docstrings",
    "title": "DependentBootstrap.local_get_var",
    "category": "method",
    "text": "localgetvar <- Internal function used to get the ith variable in dataset\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DependentBootstrap.num_obs-Union{Tuple{AbstractArray{T,1}}, Tuple{T}} where T",
    "page": "Docstrings",
    "title": "DependentBootstrap.num_obs",
    "category": "method",
    "text": "num_obs <- Internal function used to determine the number of observations in the input dataset\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DependentBootstrap.num_var-Union{Tuple{AbstractArray{T,1}}, Tuple{T}} where T",
    "page": "Docstrings",
    "title": "DependentBootstrap.num_var",
    "category": "method",
    "text": "num_var <- Internal function used to determine the number of variables in the input dataset\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [DependentBootstrap]\nOrder = [:type, :function]"
},

]}
