var documenterSearchIndex = {"docs": [

{
    "location": "#ForecastEval.DMBoot",
    "page": "Home",
    "title": "ForecastEval.DMBoot",
    "category": "type",
    "text": "DMBoot(data ; alpha, bootinput_kwargs...)\n\nMethod type for doing a Diebold-Mariano test using a dependent bootstrap. A constructor that takes the data and several keyword arguments is provided. Relevant keyword arguments are: \n\nalpha=0.05 <- The confidence level to use in the test \n\nblocklength=0.0 <- Block length to use with the bootstrap. Default of 0.0 implies\n    the block length will be optimally estimated from the data use the method deemed\n    most appropriate by the DependentBootstrap package (typically the selection procedure\n    of Patton, Politis, and White (2009)). \n\nnumresample=1000 <- Number of resamples to use when bootstrapping. \n\nbootmethod=:stationary <- Bootstrap methodology to use, where the default is the\n    stationary bootstrap of Politis and Romano (1993)\n\nSee the DependentBootstrap package docs for more info on bootstrap input keyword arguments.\n\n\n\n\n\n"
},

{
    "location": "#ForecastEval.DMHAC",
    "page": "Home",
    "title": "ForecastEval.DMHAC",
    "category": "type",
    "text": "DMHAC(data ; alpha::Float64=0.05, kernelfunction, bandwidth::Int=-1)\n\nMethod type for doing a Diebold-Mariano test using a HAC variance estimator. A constructor that takes the data and three keyword arguments is provided. Relevant keyword arguments are: \n\nalpha <- The confidence level for the test \n\nkernelfunction <- Kernel function to use in HAC variance estimator. Valid values are\n    KernelEpanechnikov(), KernelGaussian(), KernelUniform(), KernelBartlett(). You can\n    also :epanechnikov, :gaussian, :uniform, :bartlett, or String variants of these symbols. \n\nbandwidth <- Bandwidth to use in HAC variance estimator (set less than or equal to -1 to estimate bandwidth using Politis (2003) \"Adaptive Bandwidth Choice\")\n\n\n\n\n\n"
},

{
    "location": "#ForecastEval.DMMethod",
    "page": "Home",
    "title": "ForecastEval.DMMethod",
    "category": "type",
    "text": "DMMethod\n\nAbstract type for nesting the various methods that can be used to perform Diebold-Mariano tests. Subtypes are: \n\nDMHAC\nDMBoot\n\nThe subtypes have entries in the help (?) menu.\n\n\n\n\n\n"
},

{
    "location": "#ForecastEval.DMTest",
    "page": "Home",
    "title": "ForecastEval.DMTest",
    "category": "type",
    "text": "DMTest(rejH0::Int, pvalue::Float64, bestinput::Int, teststat::Float64, dmmethod::DMMethod)\n\nOutput type for a Diebold-Mariano test. A description of the fields follows: \n\nrejH0 <- true if the null is rejected, false otherwise\npvalue <- p-value from the test\nbestinput <- 1 if forecast 1 is more accurate, and 2 if forecast 2 is more accurate. See ?dm for definition of forecast 1 versus 2.\nteststat <- If dmmethod == :hac then is the mean of loss difference scaled by HAC variance\n            If dmmethod == :boot then is the mean of loss difference\ndmmethod <- Diebold-Mariano method used in the test. See ?DMMethod for more detail.\n\n\n\n\n\n"
},

{
    "location": "#ForecastEval.MCSBoot",
    "page": "Home",
    "title": "ForecastEval.MCSBoot",
    "category": "type",
    "text": "MCSBoot(data ; alpha, basecaseindex, kwargs...)\n\nMethod type for doing a MCS test using a dependent bootstrap. Relevant keyword arguments are: \n\nalpha=0.05 <- The confidence level to use in the test \n\nbasecaseindex=1 <- The MCS does not have a natural basecase. However, the input data is a\n	matrix of losses, not loss differentials, and the method itself considers every possible\n	loss differential combination. This is far too many to check for determining\n	the optimal block length for bootstrapping, so users who wish to auto-estimate\n	the appropriate block length can specify a notional base case variable index\n	for the purposes of computing a optimal block lengths of all loss differences\n	relative to the base case.\nblocklength=0.0 <- Block length to use with the bootstrap. Default of 0.0 implies\n    the block length will be optimally estimated from the data use the method deemed\n    most appropriate by the DependentBootstrap package (typically the selection procedure\n    of Patton, Politis, and White (2009)). \n\nnumresample=1000 <- Number of resamples to use when bootstrapping. \n\nbootmethod=:stationary <- Bootstrap methodology to use, where the default is the\n    stationary bootstrap of Politis and Romano (1993)\n\nNote, see the DependentBootstrap docs for more information on valid keyword arguments for the BootInput constructor.\n\n\n\n\n\n"
},

{
    "location": "#ForecastEval.MCSBootLowRAM",
    "page": "Home",
    "title": "ForecastEval.MCSBootLowRAM",
    "category": "type",
    "text": "MCSBootLowRAM(data ; alpha::Float64=0.05, kwargs...)\n\nMethod type for doing an MCS test using a dependent bootstrap. This method type has an identical constructor arguments to MCSBoot, so use ?MCSBoot for more detail.\n\nWARNING: This method corresponds to a MCS algorithm that has double the runtime of MCSBoot, but uses about half as much RAM. The vast majority of users will want to use MCSBoot.\n\nWARNING: Results from MCSBootLowRAM are not guaranteed to be identical to those from MCSBoot in finite sample, although they are very likely to both recommend the same set of models in the model confidence set.\n\n\n\n\n\n"
},

{
    "location": "#ForecastEval.MCSMethod",
    "page": "Home",
    "title": "ForecastEval.MCSMethod",
    "category": "type",
    "text": "MCSMethod\n\nAbstract type for nesting the various methods that can be used to perform a model confidence set. Subtypes are: \n\nMCSBoot\nMCSBootLowRAM\n\nThe subtypes have entries in the help (?) menu.\n\n\n\n\n\n"
},

{
    "location": "#ForecastEval.MCSTest",
    "page": "Home",
    "title": "ForecastEval.MCSTest",
    "category": "type",
    "text": "MCSTest(inQF::Vector{Int}, outQF::Vector{Int}, pvalueQF::Vector{Float64}, inMT::Vector{Int}, outMT::Vector{Int}, pvalueMT::Vector{Float64})\n\nOutput type from performing the MCS test proposed in Hansen, Lunde, Nason (2011) \"The Model Confidence Set\", Econometrica, 79 (2), pp. 453-497. \n\nThe field names of this type have trailing \"QF\" or \"MT\", where QF corresponds to the quadratic form test (see section 3.1.1 of original paper), while MT corresponds to the maximum t-stat test (see section 3.1.2 of original paper). \n\nNote, in the fields of this type, the forecast models input to the MCS method are indicated via an integer counting up from 1 for each forecast model. These integers correspond to the columns of the input loss matrix; see ?mcs for more info. \n\nThe fields of this type follow: \n\ninQF <- Models that are in the MCS via the quadratic form method\noutQF <- Models that are not in the MCS via the quadratic form method\npvalueQF <- The cumulative p-values from the quadratic form method\ninMT <- Models that are in the MCS via the max t-stat method\noutMT <- Models that are not in the MCS via the max t-stat method\npvalueMT <- The cumulative p-values from the max t-stat method\n\n\n\n\n\n"
},

{
    "location": "#ForecastEval.RCBoot",
    "page": "Home",
    "title": "ForecastEval.RCBoot",
    "category": "type",
    "text": "RCBoot(data ; alpha::Float64=0.05, bootinput_kwargs...)\n\nMethod type for doing a Reality Check using a dependent bootstrap. A constructor that takes the data and several keyword arguments is provided. The data refers to the loss differences for each forecast relative to the basecase. Use ?rc for more detail. Relevant keyword arguments are:     alpha=0.05 <- The confidence level to use in the test \n\nkernelfunction=KernelEpanechnikov() <- The kernel function to use with HAC variance estimator. See ?hacvariance for more detail. \n\nbandwidth=-1 <- The bandwidth for HAC variance estimator. If bandwidth <= -1 then bandwidth is estimated using Politis (2003) \"Adaptive Bandwidth Choice\" \n\nblocklength=0.0 <- Block length to use with the bootstrap. Default of 0.0 implies\n    the block length will be optimally estimated from the data use the method deemed\n    most appropriate by the DependentBootstrap package (typically the selection procedure\n    of Patton, Politis, and White (2009)). \n\nnumresample=1000 <- Number of resamples to use when bootstrapping. \n\nbootmethod=:stationary <- Bootstrap methodology to use, where the default is the\n    stationary bootstrap of Politis and Romano (1993)\n\nSee the DependentBootstrap package docs for more info on bootstrap input keyword arguments.\n\n\n\n\n\n"
},

{
    "location": "#ForecastEval.RCMethod",
    "page": "Home",
    "title": "ForecastEval.RCMethod",
    "category": "type",
    "text": "RCMethod\n\nAbstract type for nesting the various methods that can be used to perform a Reality Check. Subtypes are: \n\nRCBoot\n\nThe subtypes have entries in the help (?) menu.\n\n\n\n\n\n"
},

{
    "location": "#ForecastEval.RCTest",
    "page": "Home",
    "title": "ForecastEval.RCTest",
    "category": "type",
    "text": "RCTest(rejH0::Int, pvalue::Float64)\n\nOutput type from a Reality Check test. The fields of this type follow: \n\nrejH0 <- true if the null is rejected, false otherwise\npvalue <- p-value from the test\n\n\n\n\n\n"
},

{
    "location": "#ForecastEval.SPABoot",
    "page": "Home",
    "title": "ForecastEval.SPABoot",
    "category": "type",
    "text": "SPABoot(data ; alpha, kernelfunction, bandwidth, bootinput_kwargs...)\n\nMethod type for doing an SPA test using a dependent bootstrap. A constructor that takes the data and several keyword arguments is provided. The data refers to the loss differences for each forecast relative to the basecase. Use ?spa for more detail. Relevant keyword arguments are: \n\nalpha=0.05 <- The confidence level to use in the test \n\nkernelfunction=KernelEpanechnikov() <- The kernel function to use with HAC variance estimator. See ?hacvariance for more detail. \n\nbandwidth=-1 <- The bandwidth for HAC variance estimator. If bandwidth <= -1 then bandwidth is estimated using Politis (2003) \"Adaptive Bandwidth Choice\" \n\nblocklength=0.0 <- Block length to use with the bootstrap. Default of 0.0 implies\n    the block length will be optimally estimated from the data use the method deemed\n    most appropriate by the DependentBootstrap package (typically the selection procedure\n    of Patton, Politis, and White (2009)). \n\nnumresample=1000 <- Number of resamples to use when bootstrapping. \n\nbootmethod=:stationary <- Bootstrap methodology to use, where the default is the\n    stationary bootstrap of Politis and Romano (1993)\n\nNote, see the DependentBootstrap docs for more information on valid keyword arguments for the BootInput constructor.\n\n\n\n\n\n"
},

{
    "location": "#ForecastEval.SPAMethod",
    "page": "Home",
    "title": "ForecastEval.SPAMethod",
    "category": "type",
    "text": "SPAMethod\n\nAbstract type for nesting the various methods that can be used to perform an SPA test. Subtypes are: \n\nSPABoot\n\nThe subtypes have entries in the help (?) menu.\n\n\n\n\n\n"
},

{
    "location": "#ForecastEval.SPATest",
    "page": "Home",
    "title": "ForecastEval.SPATest",
    "category": "type",
    "text": "SPATest(rejH0::Int, mu_u::Vector{Float64}, mu_c::Vector{Float64}, mu_l::Vector{Float64}, pvalue_u::Float64, pvalue_c::Float64, pvalue_l::Float64, pvalue::Float64, teststat::Float64)\n\nOutput type for an SPA test proposed in Hansen (2005) \"A Test for Superior Predictive Ability\". The names of the fields for this type follow those in the referenced paper, so see that paper for more detail. The fields of this type follow: \n\nrejH0 <- true if the null is rejected, false otherwise\nmu_u <- mu associated with upper bound on threshold rate\nmu_c <- Recommended mu\nmu_l <- mu associated with lower bound on threshold rate\npvalue_u <- pvalue associated with mu_u\npvalue_c <- pvalue assoicated with mu_c\npvalue_l <- pvalue associated with mu_l\npvalueauto <- Recommended p-value (usually pvalue_c except in rare situations where this method can fail)\nteststat::Float64 <- SPA test statistic (look for tSPA in source paper)\n\nNote the different mu variables, {u, c, l} are described in the referenced article on p370-371. \n\nMost users will just be interested in the field pvalueauto.\n\n\n\n\n\n"
},

{
    "location": "#ForecastEval.dm-Tuple{Array{#s1179,1} where #s1179<:Number,DMHAC}",
    "page": "Home",
    "title": "ForecastEval.dm",
    "category": "method",
    "text": "dm(lossdiff::Vector{<:Number}, dmmethod ; kwargs...)\n\nThis function implements the test proposed in Diebold, Mariano (1995) \"Comparing Predictive Accuracy\". \n\nLet x1 denote forecast 1, x2 denote forecast 2, and let y denote the forecast target. Let L(., .) denote a loss function. Then the first argument lossdiff is assumed to be a vector created by the following operation: \n\nL(x1, y) - L(x2, y) \n\nThe second argument, dmmethod, can be an explicit method type, currently DMHAC or DMBoot, (see ?DMHAC and ?DMBoot for more detail), in which case the keyword arguments are not needed. \n\nAlternatively, dmmethod can be set to the Symbol :hac or :boot, depending on whether the user wants to use the HAC method or the bootstrap method. In this instance, the keyword arguments provided will be passed on to DMHAC or DMBoot constructors (see ?DMHAC and ?DMBoot for more detail). \n\nFinally, the second argument can be omitted entirely, in which case the method will default to the default bootstrap method, which is the stationary bootstrap of Politis and Romano (1993) with block length estimated followed Patton, Politis, and White (2009). \n\nThe output of a Diebold-Mariano test is of type DMTest. Use ?DMTest for more information.\n\n\n\n\n\n"
},

{
    "location": "#ForecastEval.mcs-Union{Tuple{T}, Tuple{Array{T,2},MCSBoot}} where T<:Number",
    "page": "Home",
    "title": "ForecastEval.mcs",
    "category": "method",
    "text": "mcs(l::Matrix{<:Number}, method ; kwargs...)\nmcs(l::Matrix{<:Number} ; kwargs...)\n\nThis function implements the MCS test proposed in Hansen, Lunde, Nason (2011) \"The Model Confidence Set\", Econometrica, 79 (2), pp. 453-497. \n\nLet x_k, k = 1, ..., K, denote K forecasts (from K different forecasting models), and y denote the forecast target. Let L(., .) denote a loss function. The first argument of mcs is a matrix where the kth column of the matrix is created by the operation: \n\nL(x_k, y) \n\nNote that unlike the Reality Check and SPA test, there is no base case for the MCS. \n\nThe second method argument determines which methodology to use. Currently, only MCSBoot is available and if this input type is provided, the keyword arguments are not needed. Alternatively, the user can omit the second argument, and then any keyword arguments will be passed to the MCSBoot constructor. See ?MCSBoot for more detail. The most relevant keyword arguments are:     alpha=0.05 <- The confidence level to use in the test \n\nbasecaseindex=1 <- The MCS does not have a natural basecase. However, the input data is a\n	matrix of losses, not loss differentials, and the method itself considers every possible\n	loss differential combination. This is far too many to check for determining\n	the optimal block length for bootstrapping, so users who wish to auto-estimate\n	the appropriate block length can specify a notional base case variable index\n	for the purposes of computing a optimal block lengths of all loss differences\n	relative to the base case.\nblocklength=0.0 <- Block length to use with the bootstrap. Default of 0.0 implies\n    the block length will be optimally estimated from the data use the method deemed\n    most appropriate by the DependentBootstrap package (typically the selection procedure\n    of Patton, Politis, and White (2009)). \n\nnumresample=1000 <- Number of resamples to use when bootstrapping. \n\nbootmethod=:stationary <- Bootstrap methodology to use, where the default is the\n    stationary bootstrap of Politis and Romano (1993)\n\nFor more detail on the bootstrap options, please see the docs for the DependentBootstrap package. \n\nThe output of a MCS test is of type MCSTest. Use ?MCSTest for more information. \n\nNote, if you are hitting RAM limits, type ?ForecastEval.MCSBootLowRAM at the REPL for more detail on an alternative algorithm that is also available. \n\nNote, for any developers, the main algorithm (associated with MCSBoot) still has the following potential performance issues: \n\nISSUE 1: Some of the temporary arrays in the loops could probably be eliminated \n\nISSUE 2: For MCS method A, I think the loop over K could be terminated as soon as cumulative p-values are greater than method.alpha. Need to double check this. \n\nISSUE 3: Need to add option to do just max(abs) method or just sum(sq) method (or both)\n\nComments or pull requests on these issues would be most welcome on the package github page.\n\n\n\n\n\n"
},

{
    "location": "#ForecastEval.rc-Tuple{Array{#s35,2} where #s35<:Number,RCBoot}",
    "page": "Home",
    "title": "ForecastEval.rc",
    "category": "method",
    "text": "rc(lD::Matrix{T}, method ; kwargs)\nrc(lD::Matrix{T} ; kwargs)\n\nThis function implements the test proposed in White (2000) \"A Reality Check for Data Snooping\" following the methodology in Hansen (2005). \n\nLet x0 denote a base-case forecast, xk, k = 1, ..., K, denote K alternative forecasts, and y denote the forecast target. Let L(., .) denote a loss function. The first argument of rc is a matrix where the kth column of the matrix is created by the operation: \n\nL(xk, y) - L(x0, y) \n\nNote that the forecast loss comes first and the base case loss comes second. This is the opposite to what is described in White\'s paper. \n\nThe second method argument determines which methodology to use. Currently, only RCBoot is available and if this input type is provided, the keyword arguments are not needed. Alternatively, the user can omit the second argument, and then any keyword arguments will be passed to the RCBoot constructor. See ?RCBoot for more detail. The most relevant keyword arguments are:     alpha=0.05 <- The confidence level to use in the test \n\nblocklength=0.0 <- Block length to use with the bootstrap. Default of 0.0 implies\n    the block length will be optimally estimated from the data use the method deemed\n    most appropriate by the DependentBootstrap package (typically the selection procedure\n    of Patton, Politis, and White (2009)). \n\nnumresample=1000 <- Number of resamples to use when bootstrapping. \n\nbootmethod=:stationary <- Bootstrap methodology to use, where the default is the\n    stationary bootstrap of Politis and Romano (1993)\n\nThe output of a Reality Check test is of type RCTest. Use ?RCTest for more information.\n\n\n\n\n\n"
},

{
    "location": "#ForecastEval.spa-Tuple{Array{#s10,2} where #s10<:Number,SPABoot}",
    "page": "Home",
    "title": "ForecastEval.spa",
    "category": "method",
    "text": "spa{T<:Number}(lossDiff::Matrix{T}, method ; kwargs...)::SPATest\nspa{T<:Number}(lossDiff::Matrix{T} ; kwargs...)\n\nThis function implements the SPA test proposed in Hansen (2005) \"A Test for Superior Predictive Ability\". \n\nLet x0 denote a base-case forecast, xk, k = 1, ..., K, denote K alternative forecasts, and y denote the forecast target. Let L(., .) denote a loss function. The first argument of spa is a matrix where the kth column of the matrix is created by the operation: \n\nL(xk, y) - L(x0, y) \n\nNote that the forecast loss comes first and the base case loss comes second. This is the opposite to what is described in Hansen\'s paper. \n\nThe second method argument determines which methodology to use. Currently, only SPABoot is available and if this input type is provided, the keyword arguments are not needed. Alternatively, the user can omit the second argument, and then any keyword arguments will be passed to the SPABoot constructor. See ?SPABoot for more detail. The most relevant keyword arguments are:     alpha=0.05 <- The confidence level to use in the test \n\nkernelfunction=KernelEpanechnikov() <- The kernel function to use with HAC variance estimator. See ?hacvariance for more detail. \n\nbandwidth=-1 <- The bandwidth for HAC variance estimator. If bandwidth <= -1 then bandwidth is estimated using Politis (2003) \"Adaptive Bandwidth Choice\" \n\nblocklength=0.0 <- Block length to use with the bootstrap. Default of 0.0 implies\n    the block length will be optimally estimated from the data use the method deemed\n    most appropriate by the DependentBootstrap package (typically the selection procedure\n    of Patton, Politis, and White (2009)). \n\nnumresample=1000 <- Number of resamples to use when bootstrapping. \n\nbootmethod=:stationary <- Bootstrap methodology to use, where the default is the\n    stationary bootstrap of Politis and Romano (1993)\n\nThe output of an SPA test is of type SPATest. Use ?SPATest for more information. \n\nNote, Hansen suggests using the Stationary Bootstrap implied HAC variance estimator, which is not currently supported in this package. However, note that any consistent HAC estimator is valid and in many cases may be preferred.\n\n\n\n\n\n"
},

{
    "location": "#ForecastEval.hacvariance-Union{Tuple{Tk}, Tuple{AbstractArray{#s1178,1} where #s1178<:Number,Tk,Int64}} where Tk<:ForecastEval.KernelFunction",
    "page": "Home",
    "title": "ForecastEval.hacvariance",
    "category": "method",
    "text": "hacvariance{T<:Number}(x::AbstractVector{T} ; kf::Symbol=:epanechnikov, bw::Int=-1)::Tuple{Float64, Int}\n\nGet the heteroskedasticity and autocorrelation consistent variance estimator of data vector x. The function has the following keyword arguments: 	kf <- Kernel function used in estimator. Valid values are :epanechnikov, :gaussian, :uniform, :bartlett 	bw <- Bandwidth used in estimator. If <= -1, then estimate bandwidth using Politis (2003) \"Adaptive Bandwidth Choice\"\n\n\n\n\n\n"
},

{
    "location": "#ForecastEval.loss_diff_base_case-Tuple{Array{#s1707,2} where #s1707<:Number,Int64}",
    "page": "Home",
    "title": "ForecastEval.loss_diff_base_case",
    "category": "method",
    "text": "lossdiffbase_case <- Local function for getting loss differences relative to notional base case for purposes of estimating the block length\n\n\n\n\n\n"
},

{
    "location": "#ForecastEval.pvaluelocal-Tuple{Distributions.Distribution{Distributions.Univariate,Distributions.Continuous},Number}",
    "page": "Home",
    "title": "ForecastEval.pvaluelocal",
    "category": "method",
    "text": "pvaluelocal(d::ContinuousUnivariateDistribution, x::Number ; tail::Symbol=:both)::Float64\npvaluelocal{T<:Number}(d::Vector{T}, x::Number ; tail::Symbol=:both, as::Bool=false)::Float64\n\nObtain the p-value associated with the inputs. d::ContinuousUnivariateDistribution -> d is the distribution under the null and x is the test statistic. d::Vector{T} -> d is a bootstrapped vector of test statistics and x is the value of the test statistic under the null.\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [ForecastEval]\nOrder = [:type, :function]"
},

]}
