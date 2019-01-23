var documenterSearchIndex = {"docs": [

{
    "location": "#DependentBootstrap.BootInput",
    "page": "Home",
    "title": "DependentBootstrap.BootInput",
    "category": "type",
    "text": "BootInput\n\nCore type that defines all parameters needed to perform a bootstrap procedure. The vast majority of users should use the keyword argument constructor that has the method signature:\n\nBootInput(data ; kwargs...)\n\nwhere data is the dataset to be bootstrapped, and kwargs denotes a set of keyword arguments (defined below) that are used for every exported function in the DependentBootstrap package. The following keyword arguments and default values follow: \n\n- blocklength         <- Block length for bootstrapping procedure. Default value is 0. Set to <= 0 to auto-estimate the optimal block length from the dataset. Float64 inputs allowed.\n- numresample         <- Number of times to resample the input dataset. Default value is the module constant NUM_RESAMPLE, currently set to 1000.\n- bootmethod          <- Bootstrapping methodology to use. Default value is the Symbol :stationary (for the stationary bootstrap).\n- blocklengthmethod   <- Block length selection procedure to use if user wishes to auto-estimate the block length. Default value is the Symbol :ppw2009 (use the method described in Patton, Politis, and White (2009)).\n- flevel1             <- A function that converts the input dataset to the estimator that the user wishes to bootstrap. Default value is the sample mean.\n- flevel2             <- A function that converts a vector of estimators constructed by flevel1 into a distributional parameter. Default value is sample variance.\n- numobsperresample   <- Number of observations to be drawn (with replacement) per resample. The default value is the number of observations in the dataset (the vast majority of users will want this default value).\n- fblocklengthcombine <- A function for converting a Vector{Float64} of estimated blocklengths to a single Float64 blocklength estimate. Default value is median.\n\nThe constructor will attempt to convert all provided keyword arguments to appropriate types, and will notify the user via an error if a supplied keyword argument is not valid.\n\nNote that the bootmethod and blocklengthmethod keyword arguments will accept both Symbol and String inputs, and will convert them to BootMethod and BlockLengthMethod types internally. To see a list of acceptable Symbol or String values for the bootmethod and blocklengthmethod keyword arguments, use: \n\n- collect(keys(DependentBootstrap.BOOT_METHOD_DICT))\n- collect(keys(DependentBootstrap.BLOCKLENGTH_METHOD_DICT))\n\nrespectively. A small proportion of users may need the fine-grained control that comes from constructing BootMethod and BlockLengthMethod types explicitly and then providing them to the keyword constructor. These users should use ?BootMethod and ?BlockLengthMethod at the REPL for more info.\n\nBootInput is not mutable, but the type is near instantaneous to construct, so if a user wishes to amend a BootInput it is recommended to just construct another one. A special constructor is provided to facilitate this process that has the method definition: \n\n- BootInput(data, bootinput::BootInput ; kwargs...)\n\nwhere the new BootInput draws its fields from the keyword arguments that are provided, and then the input BootInput for any keyword arguments that are not provided.\n\nNote that all exported functions in the DependentBootstrap package exhibit the method signature: \n\n- exported_func(data ; kwargs...)\n\nwhich in practice just wraps the keyword argument constructor for a BootInput, and then calls the method signature: \n\n - exported_func(data, bootinput::BootInput)\n\n\n\n\n\n"
},

{
    "location": "#DependentBootstrap.dboot-Tuple{Any,BootInput}",
    "page": "Home",
    "title": "DependentBootstrap.dboot",
    "category": "method",
    "text": "dboot(data, bi::BootInput)\ndboot(data ; kwargs...)\n\nGet the level 2 bootstrapped statistics associated with dataset in data, and bootstrap methodology in BootInput.\n\nA keyword method that calls the keyword constructor for BootInput is also provided. Please use ?BootInput at the REPL for more detail on feasible keywords.\n\nNote, the return type of the output will be determined by bi.flevel2, which must be a function that accepts Vector{T}, where T is the output type of bi.flevel1.\n\nFor example, if data is a Vector{<:Number} and bi.flevel1 is mean, then in this case, bi.flevel1 will return Float64, and so bi.flevel2 must be some function that accepts Vector{Float64} as input (and can have any output type.)\n\nAlternatively, bi.flevel2 could be the anonymous function (x -> quantile(x, [0.025, 0.975])), in which case the input should be Vector{Float64}, and so bi.flevel1 should return Float64. Note, the output of bi.flevel2 in this case will be a 2-element Vector{Float64} with elements corresponding bootstrapped 95% confidence interval for the level1 statistic of the input dataset\n\n\n\n\n\n"
},

{
    "location": "#DependentBootstrap.dbootconf-Tuple{Any}",
    "page": "Home",
    "title": "DependentBootstrap.dbootconf",
    "category": "method",
    "text": "dbootconf <- Identical to dboot but with the level 2 statistic set to a confidence interval with width determined by keyword alpha. Default alpha=0.05 corresponds to a 95% confidence interval.\n\n\n\n\n\n"
},

{
    "location": "#DependentBootstrap.dbootdata-Union{Tuple{Td}, Tuple{Td,BootInput}} where Td",
    "page": "Home",
    "title": "DependentBootstrap.dbootdata",
    "category": "method",
    "text": "dbootdata(data::T , bi::BootInput)::Vector{T}\ndbootdata(data::T ; kwargs...)::Vector{T}\n\nGet the resampled datasets of the input data using the dependent bootstrap methodology defined in BootInput.\n\nA keyword method that calls the keyword constructor for BootInput is also provided. Please use ?BootInput at the REPL for more detail on feasible keywords.\n\nNote, this function should always have output type Vector{T}.\n\n\n\n\n\n"
},

{
    "location": "#DependentBootstrap.dbootinds-Tuple{BootInput}",
    "page": "Home",
    "title": "DependentBootstrap.dbootinds",
    "category": "method",
    "text": "dbootinds(data::T ; bi::BootInput)::Vector{Vector{Int}}\ndbootinds(data::T ; kwargs...)::Vector{Vector{Int}}\n\nEach inner vector of the returned Vector{Vector{Int}} provides indices that, when used to index the original dataset, will provide a single resampled dataset.\n\nA keyword method that calls the keyword constructor for BootInput is also provided. Please use ?BootInput at the REPL for more detail on feasible keywords.\n\nPlease use dbootinds_one if you only want to obtain a single Vector{Int} resampling index.\n\n\n\n\n\n"
},

{
    "location": "#DependentBootstrap.dbootlevel1-Tuple{Any,BootInput}",
    "page": "Home",
    "title": "DependentBootstrap.dbootlevel1",
    "category": "method",
    "text": "dbootlevel1(data::T1, bi::BootInput)\ndbootlevel1(data::T1; kwargs...)\n\nGet the level 1 bootstrapped statistics associated with dataset in data, and bootstrap methodology in BootInput.\n\nA keyword method that calls the keyword constructor for BootInput is also provided. Please use ?BootInput at the REPL for more detail on feasible keywords.\n\nNote, the return type is determined by bi.flevel1, which must be a function that accepts T1, ie typeof(data), as input. It may return any output type T2, as long as bi.flevel2 will accept Vector{T2} as input.\n\nFor example, if data is a Vector{<:Number} then bi.flevel1 might be the function mean, which in this case will return Float64, so bi.flevel2 must be some function that can accept Vector{Float64} as input.\n\nA more complicated example: if data is Matrix{<:Number} then bi.flevel1 might be the anonymous function x->mean(x,dims=1), which in this case will return a single row Matrix{Float64}, and so bi.flevel2 must be some function that can accept Vector{Matrix{Float64}} as input.\n\n\n\n\n\n"
},

{
    "location": "#DependentBootstrap.dbootlevel2-Tuple{Any,BootInput}",
    "page": "Home",
    "title": "DependentBootstrap.dbootlevel2",
    "category": "method",
    "text": "dbootlevel2 <- Identical to the dboot function. This function is only included for naming consistency with dbootlevel1\n\n\n\n\n\n"
},

{
    "location": "#DependentBootstrap.dbootvar-Tuple{Any}",
    "page": "Home",
    "title": "DependentBootstrap.dbootvar",
    "category": "method",
    "text": "dbootvar <- Identical to dboot but with the level 2 statistic set to variance\n\n\n\n\n\n"
},

{
    "location": "#DependentBootstrap.optblocklength-Union{Tuple{Tbm}, Tuple{AbstractArray{#s1190,1} where #s1190<:Number,BLPPW2009{P2003},Tbm}} where Tbm<:DependentBootstrap.BootMethod",
    "page": "Home",
    "title": "DependentBootstrap.optblocklength",
    "category": "method",
    "text": "optblocklength(data, bi::BootInput)::Float64\noptblocklength(data ; kwargs...)::Float64\n\nProvides an estimate of the optimal block-length to use with a dependent bootstrap.\n\nFor multivariate datasets, optimal block length is estimated for each column of data, and then bi.fblocklengthcombine, which is a function that maps Vector{Float64} to Float64, is called to reduce the multiple estimates to a single estimates. The default value for fblocklengthcombine is median.\n\nBlock length methods currently implemented include: \n\n - Patton, Politis, White (2009) \"Correction to Automatic Block Length Selection For the Dependent Bootstrap\"\n\nFor all methods discussed above, bandwidth is estimated following Politis (2003) \"Adaptive Bandwidth Choice\", using the flat-top kernel suggested in that paper.\n\n\n\n\n\n"
},

{
    "location": "#DependentBootstrap.BLDummy",
    "page": "Home",
    "title": "DependentBootstrap.BLDummy",
    "category": "type",
    "text": "BLDummy <- Dummy type for block length method\n\n\n\n\n\n"
},

{
    "location": "#DependentBootstrap.BLPPW2009",
    "page": "Home",
    "title": "DependentBootstrap.BLPPW2009",
    "category": "type",
    "text": "BLPPW2009 <- Type for using multiple dispatch to get the block length selection procedure of Patton, Politis, and White (2009)\n\n\n\n\n\n"
},

{
    "location": "#DependentBootstrap.BandwidthMethod",
    "page": "Home",
    "title": "DependentBootstrap.BandwidthMethod",
    "category": "type",
    "text": "BandwidthMethod <- Abstract supertype for all bandwidth selection methods\n\n\n\n\n\n"
},

{
    "location": "#DependentBootstrap.BlockLengthMethod",
    "page": "Home",
    "title": "DependentBootstrap.BlockLengthMethod",
    "category": "type",
    "text": "BlockLengthMethod <- Abstract supertype for all block length selection methods\n\n\n\n\n\n"
},

{
    "location": "#DependentBootstrap.BootCircular",
    "page": "Home",
    "title": "DependentBootstrap.BootCircular",
    "category": "type",
    "text": "BootCircular <- Type for using multiple dispatch to get the circular blocks bootstrap\n\n\n\n\n\n"
},

{
    "location": "#DependentBootstrap.BootDummy",
    "page": "Home",
    "title": "DependentBootstrap.BootDummy",
    "category": "type",
    "text": "BootDummy <- Dummy type used within the module. Should never be seen by the end user\n\n\n\n\n\n"
},

{
    "location": "#DependentBootstrap.BootIID",
    "page": "Home",
    "title": "DependentBootstrap.BootIID",
    "category": "type",
    "text": "BootIID <- Type for using multiple dispatch to get the IID boostrap\n\n\n\n\n\n"
},

{
    "location": "#DependentBootstrap.BootMethod",
    "page": "Home",
    "title": "DependentBootstrap.BootMethod",
    "category": "type",
    "text": "BootMethod <- Abstract supertype for all dependent bootstrap methods\n\n\n\n\n\n"
},

{
    "location": "#DependentBootstrap.BootMoving",
    "page": "Home",
    "title": "DependentBootstrap.BootMoving",
    "category": "type",
    "text": "BootMoving <- Type for using multiple dispatch to get the moving blocks bootstrap\n\n\n\n\n\n"
},

{
    "location": "#DependentBootstrap.BootNoOverlap",
    "page": "Home",
    "title": "DependentBootstrap.BootNoOverlap",
    "category": "type",
    "text": "BootNoOverlap <- Type for using multiple dispatch to get the non-overlapping blocks bootstrap\n\n\n\n\n\n"
},

{
    "location": "#DependentBootstrap.BootStationary",
    "page": "Home",
    "title": "DependentBootstrap.BootStationary",
    "category": "type",
    "text": "BootStationary <- Type for using multiple dispatch to get the stationary bootstrap\n\n\n\n\n\n"
},

{
    "location": "#DependentBootstrap.KernelDummy",
    "page": "Home",
    "title": "DependentBootstrap.KernelDummy",
    "category": "type",
    "text": "KernelDummy <- Dummy type for kernel functions\n\n\n\n\n\n"
},

{
    "location": "#DependentBootstrap.KernelFunctionMethod",
    "page": "Home",
    "title": "DependentBootstrap.KernelFunctionMethod",
    "category": "type",
    "text": "KernelFunctionMethod <- Abstract supertype for all kernel function methods\n\n\n\n\n\n"
},

{
    "location": "#DependentBootstrap.P2003",
    "page": "Home",
    "title": "DependentBootstrap.P2003",
    "category": "type",
    "text": "P2003 <- Type for using multiple dispatch to get the bandwidth selection procedure of Politis (2003)\n\n\n\n\n\n"
},

{
    "location": "#DependentBootstrap.bandwidth_politis_2003-Union{Tuple{AbstractArray{T,1}}, Tuple{T}} where T<:Number",
    "page": "Home",
    "title": "DependentBootstrap.bandwidth_politis_2003",
    "category": "method",
    "text": "bandwidth_politis_2003(x::AbstractVector{T})::Tuple{Int, Float64, Vector{Float64}} where {T<:Number}\n\nImplements the methodology from Politis (2003) \"Adaptive Bandwidth Choice\" to obtain a data-driven bandwidth estimate.\n\nReturn tuple is, in order, the bandwidth estimate, the variance of x, and the autocorrelations used to get the bandwidth estimate.\n\nNote, most users won\'t be interested in the second and third output, but sometimes this routine will be called by other functions that need these terms, so they are returned to avoid duplicate computation.\n\n\n\n\n\n"
},

{
    "location": "#DependentBootstrap.bootmethod_to_blocklengthmethod-Union{Tuple{T}, Tuple{T}} where T<:Union{BootCircular, BootIID, BootMoving, BootNoOverlap, BootStationary}",
    "page": "Home",
    "title": "DependentBootstrap.bootmethod_to_blocklengthmethod",
    "category": "method",
    "text": "bootmethodtoblocklengthmethod <- Convert a bootstrap method to the most appropriate block length method\n\n\n\n\n\n"
},

{
    "location": "#DependentBootstrap.dbootdata_one-Union{Tuple{Td}, Tuple{Td,BootInput}} where Td",
    "page": "Home",
    "title": "DependentBootstrap.dbootdata_one",
    "category": "method",
    "text": "dbootdata_one(data::T, bi::BootInput)::T\ndbootdata_one(data::T; kwargs...)::T\n\nGet a single resampled dataset of the input data using the dependent boostrap methodology defined in BootInput.\n\nA keyword method that calls the keyword constructor for BootInput is also provided. Please use ?BootInput at the REPL for more detail on feasible keywords.\n\nNote, the output type will always be the same as the type of the input data.\n\n\n\n\n\n"
},

{
    "location": "#DependentBootstrap.dbootinds_one-Tuple{BootInput{DependentBootstrap.BootIID,Tbl,Tf1,Tf2,Tfc} where Tfc<:Function where Tf2<:Function where Tf1<:Function where Tbl<:DependentBootstrap.BlockLengthMethod}",
    "page": "Home",
    "title": "DependentBootstrap.dbootinds_one",
    "category": "method",
    "text": "dbootindsone(bi::BootInput)::Vector{Int} dbootindsone(data::T; kwargs...)::Vector{Int}\n\nReturns a single resampling index that, when used to index the original dataset, will provide a single resampled dataset.\n\nA keyword method that calls the keyword constructor for BootInput is also provided. Please use ?BootInput at the REPL for more detail on feasible keywords.\n\n\n\n\n\n"
},

{
    "location": "#DependentBootstrap.kernel_politis_2003_flat_top-Tuple{Float64}",
    "page": "Home",
    "title": "DependentBootstrap.kernel_politis_2003_flat_top",
    "category": "method",
    "text": "kernel_politis_2003_flat_top(x::Float64)::Float64\n\nImplements the flat-top kernel function discussed in Politis (2003) \"Adaptive Bandwidth Choice\"\n\n\n\n\n\n"
},

{
    "location": "#DependentBootstrap.local_get_index-Union{Tuple{T}, Tuple{AbstractArray{T,1},Array{Int64,1}}} where T",
    "page": "Home",
    "title": "DependentBootstrap.local_get_index",
    "category": "method",
    "text": "localgetindex <- Internal function used to resample the dataset data using the input resampling index inds\n\n\n\n\n\n"
},

{
    "location": "#DependentBootstrap.local_get_var-Union{Tuple{T}, Tuple{AbstractArray{T,1},Int64}} where T",
    "page": "Home",
    "title": "DependentBootstrap.local_get_var",
    "category": "method",
    "text": "localgetvar <- Internal function used to get the ith variable in dataset\n\n\n\n\n\n"
},

{
    "location": "#DependentBootstrap.num_obs-Union{Tuple{AbstractArray{T,1}}, Tuple{T}} where T",
    "page": "Home",
    "title": "DependentBootstrap.num_obs",
    "category": "method",
    "text": "num_obs <- Internal function used to determine the number of observations in the input dataset\n\n\n\n\n\n"
},

{
    "location": "#DependentBootstrap.num_var-Union{Tuple{AbstractArray{T,1}}, Tuple{T}} where T",
    "page": "Home",
    "title": "DependentBootstrap.num_var",
    "category": "method",
    "text": "num_var <- Internal function used to determine the number of variables in the input dataset\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [DependentBootstrap]\nOrder = [:type, :function]"
},

]}
