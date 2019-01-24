var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ForecastEval-1",
    "page": "Readme",
    "title": "ForecastEval",
    "category": "section",
    "text": "(Image: Build Status)A module for the Julia language that implements several statistical tests from the forecast evaluation literature."
},

{
    "location": "#Main-features-1",
    "page": "Readme",
    "title": "Main features",
    "category": "section",
    "text": "This module allows Julia users to evaluate competing forecasts using several tests from the forecast evaluation literature.The following bivariate forecast evaluation procedures are implemented:Diebold, Mariano (1995) \"Comparing Predictive Accuracy\", Journal of Business and Economic Statistics 13 (3), pp. 253-263The following multivariate forecast evaluation procedures are implemented:White (2000) \"A Reality Check for Data Snooping\", Econometrica 68 (5), pp. 1097-1126\nHansen (2005) \"A Test for Superior Predictive Ability\", Journal of Business and Economic Statistics 23 (4), pp. 365-380\nHansen, Lunde, Nason (2011) \"The Model Confidence Set\", Econometrica 79 (2), pp. 453-497"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "This package should be added using Pkg.add(\"ForecastEval\"), and can then be called with using ForecastEval. The package has three dependencies (currently): StatsBase, Distributions, and DependentBootstrap. Support for DataFrames or TimeArrays is not currently available. If you use these types, convert your data to vectors or matrices before calling functions from this package.This package supports Julia v1.0. If you are running v0.5 or v0.6, you will need to use Pkg.pin(\"ForecastEval\", v\"0.1.0\") at the REPL. Versions prior to v0.5 are not supported."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "In these notes, I will briefly cover the names of the main functions, input types, and output types. All of these functions/types have been documented extensively using Julia\'s docstrings capability, and so users can find out detailed information about the tests of interest using the ?x command at the Julia REPL, where x denotes the function name or type name of interest."
},

{
    "location": "#Diebold-Mariano-Test-(DM)-1",
    "page": "Readme",
    "title": "Diebold-Mariano Test (DM)",
    "category": "section",
    "text": "Function name: dmInput types: DMHAC and DMBootOutput type: DMTestPlease use ?x, where x is any of these names, at the REPL for more information on each type.A keyword signature for dm is also provided and it is anticipated that most users will interact with the test in this way. Please type ?dm at the REPL for more information.Note that there are currently two options for performing a Diebold-Mariano test:The mean loss differential is scaled by a HAC variance estimate, and Normality of this statistic is assumed via a central limit theorem. This is sometimes referred to as the asymptotic method, and uses the DMHAC type as input, or can be called using the keyword signature.\nThe mean loss differential is bootstrapped using a block bootstrap procedure. This method uses the DMBoot type as input, or can be called using the keyword signature."
},

{
    "location": "#Reality-Check-(RC)-1",
    "page": "Readme",
    "title": "Reality Check (RC)",
    "category": "section",
    "text": "Function name: rcInput types: RCBootOutput type: RCTestPlease use ?x, where x is any of these names, at the REPL for more information on each type.A keyword signature for rc is also provided and it is anticipated that most users will interact with the test in this way. Please type ?rc at the REPL for more information."
},

{
    "location": "#Superior-Predictive-Ability-(SPA)-Test-1",
    "page": "Readme",
    "title": "Superior Predictive Ability (SPA) Test",
    "category": "section",
    "text": "Function name: spaInput types: SPABootOutput type: SPATestPlease use ?x, where x is any of these names, at the REPL for more information on each type.A keyword signature for spa is also provided and it is anticipated that most users will interact with the test in this way. Please type ?spa at the REPL for more information."
},

{
    "location": "#Model-Confidence-Set-(MCS)-1",
    "page": "Readme",
    "title": "Model Confidence Set (MCS)",
    "category": "section",
    "text": "Function name: mcsInput types: MCSBoot and MCSBootLowRAMOutput type: MCSTestPlease use ?x, where x is any of these names, at the REPL for more information on each type.A keyword signature for mcs is also provided and it is anticipated that most users will interact with the test in this way. Please type ?mcs at the REPL for more information.The MCSBootLowRAM uses a different algorithm to MCSBoot that has roughly half the RAM requirements but takes twice as long to run. Note that the MCSBootLowRAM results are not guaranteed to be identical to those of MCSBoot. The vast majority of users will want to use MCSBoot, since MCSBootLowRAM doesn\'t allow many additional forecast models to be included (RAM requirements go up by a power law in the number of models, not linearly). I would be very receptive to any pull requests that are able to speed up the run-time of MCSBootLowRAM. The essential difference between the two algorithms is that MCSBoot wastes additional RAM but with the benefit of being able to perform mean computations on matrices in column-major order using BLAS routines.  "
},

{
    "location": "autodocs/#ForecastEval.DMBoot",
    "page": "Docstrings",
    "title": "ForecastEval.DMBoot",
    "category": "type",
    "text": "DMBoot(data ; alpha, bootinput_kwargs...)\n\nMethod type for doing a Diebold-Mariano test using a dependent bootstrap. A constructor that takes the data and several keyword arguments is provided. Relevant keyword arguments are: \n\nalpha=0.05 <- The confidence level to use in the test \n\nblocklength=0.0 <- Block length to use with the bootstrap. Default of 0.0 implies\n    the block length will be optimally estimated from the data use the method deemed\n    most appropriate by the DependentBootstrap package (typically the selection procedure\n    of Patton, Politis, and White (2009)). \n\nnumresample=1000 <- Number of resamples to use when bootstrapping. \n\nbootmethod=:stationary <- Bootstrap methodology to use, where the default is the\n    stationary bootstrap of Politis and Romano (1993)\n\nSee the DependentBootstrap package docs for more info on bootstrap input keyword arguments.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForecastEval.DMHAC",
    "page": "Docstrings",
    "title": "ForecastEval.DMHAC",
    "category": "type",
    "text": "DMHAC(data ; alpha::Float64=0.05, kernelfunction, bandwidth::Int=-1)\n\nMethod type for doing a Diebold-Mariano test using a HAC variance estimator. A constructor that takes the data and three keyword arguments is provided. Relevant keyword arguments are: \n\nalpha <- The confidence level for the test \n\nkernelfunction <- Kernel function to use in HAC variance estimator. Valid values are\n    KernelEpanechnikov(), KernelGaussian(), KernelUniform(), KernelBartlett(). You can\n    also :epanechnikov, :gaussian, :uniform, :bartlett, or String variants of these symbols. \n\nbandwidth <- Bandwidth to use in HAC variance estimator (set less than or equal to -1 to estimate bandwidth using Politis (2003) \"Adaptive Bandwidth Choice\")\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForecastEval.DMMethod",
    "page": "Docstrings",
    "title": "ForecastEval.DMMethod",
    "category": "type",
    "text": "DMMethod\n\nAbstract type for nesting the various methods that can be used to perform Diebold-Mariano tests. Subtypes are: \n\nDMHAC\nDMBoot\n\nThe subtypes have entries in the help (?) menu.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForecastEval.DMTest",
    "page": "Docstrings",
    "title": "ForecastEval.DMTest",
    "category": "type",
    "text": "DMTest(rejH0::Int, pvalue::Float64, bestinput::Int, teststat::Float64, dmmethod::DMMethod)\n\nOutput type for a Diebold-Mariano test. A description of the fields follows: \n\nrejH0 <- true if the null is rejected, false otherwise\npvalue <- p-value from the test\nbestinput <- 1 if forecast 1 is more accurate, and 2 if forecast 2 is more accurate. See ?dm for definition of forecast 1 versus 2.\nteststat <- If dmmethod == :hac then is the mean of loss difference scaled by HAC variance\n            If dmmethod == :boot then is the mean of loss difference\ndmmethod <- Diebold-Mariano method used in the test. See ?DMMethod for more detail.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForecastEval.MCSBoot",
    "page": "Docstrings",
    "title": "ForecastEval.MCSBoot",
    "category": "type",
    "text": "MCSBoot(data ; alpha, basecaseindex, kwargs...)\n\nMethod type for doing a MCS test using a dependent bootstrap. Relevant keyword arguments are: \n\nalpha=0.05 <- The confidence level to use in the test \n\nbasecaseindex=1 <- The MCS does not have a natural basecase. However, the input data is a\n	matrix of losses, not loss differentials, and the method itself considers every possible\n	loss differential combination. This is far too many to check for determining\n	the optimal block length for bootstrapping, so users who wish to auto-estimate\n	the appropriate block length can specify a notional base case variable index\n	for the purposes of computing a optimal block lengths of all loss differences\n	relative to the base case.\nblocklength=0.0 <- Block length to use with the bootstrap. Default of 0.0 implies\n    the block length will be optimally estimated from the data use the method deemed\n    most appropriate by the DependentBootstrap package (typically the selection procedure\n    of Patton, Politis, and White (2009)). \n\nnumresample=1000 <- Number of resamples to use when bootstrapping. \n\nbootmethod=:stationary <- Bootstrap methodology to use, where the default is the\n    stationary bootstrap of Politis and Romano (1993)\n\nNote, see the DependentBootstrap docs for more information on valid keyword arguments for the BootInput constructor.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForecastEval.MCSBootLowRAM",
    "page": "Docstrings",
    "title": "ForecastEval.MCSBootLowRAM",
    "category": "type",
    "text": "MCSBootLowRAM(data ; alpha::Float64=0.05, kwargs...)\n\nMethod type for doing an MCS test using a dependent bootstrap. This method type has an identical constructor arguments to MCSBoot, so use ?MCSBoot for more detail.\n\nWARNING: This method corresponds to a MCS algorithm that has double the runtime of MCSBoot, but uses about half as much RAM. The vast majority of users will want to use MCSBoot.\n\nWARNING: Results from MCSBootLowRAM are not guaranteed to be identical to those from MCSBoot in finite sample, although they are very likely to both recommend the same set of models in the model confidence set.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForecastEval.MCSMethod",
    "page": "Docstrings",
    "title": "ForecastEval.MCSMethod",
    "category": "type",
    "text": "MCSMethod\n\nAbstract type for nesting the various methods that can be used to perform a model confidence set. Subtypes are: \n\nMCSBoot\nMCSBootLowRAM\n\nThe subtypes have entries in the help (?) menu.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForecastEval.MCSTest",
    "page": "Docstrings",
    "title": "ForecastEval.MCSTest",
    "category": "type",
    "text": "MCSTest(inQF::Vector{Int}, outQF::Vector{Int}, pvalueQF::Vector{Float64}, inMT::Vector{Int}, outMT::Vector{Int}, pvalueMT::Vector{Float64})\n\nOutput type from performing the MCS test proposed in Hansen, Lunde, Nason (2011) \"The Model Confidence Set\", Econometrica, 79 (2), pp. 453-497. \n\nThe field names of this type have trailing \"QF\" or \"MT\", where QF corresponds to the quadratic form test (see section 3.1.1 of original paper), while MT corresponds to the maximum t-stat test (see section 3.1.2 of original paper). \n\nNote, in the fields of this type, the forecast models input to the MCS method are indicated via an integer counting up from 1 for each forecast model. These integers correspond to the columns of the input loss matrix; see ?mcs for more info. \n\nThe fields of this type follow: \n\ninQF <- Models that are in the MCS via the quadratic form method\noutQF <- Models that are not in the MCS via the quadratic form method\npvalueQF <- The cumulative p-values from the quadratic form method\ninMT <- Models that are in the MCS via the max t-stat method\noutMT <- Models that are not in the MCS via the max t-stat method\npvalueMT <- The cumulative p-values from the max t-stat method\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForecastEval.RCBoot",
    "page": "Docstrings",
    "title": "ForecastEval.RCBoot",
    "category": "type",
    "text": "RCBoot(data ; alpha::Float64=0.05, bootinput_kwargs...)\n\nMethod type for doing a Reality Check using a dependent bootstrap. A constructor that takes the data and several keyword arguments is provided. The data refers to the loss differences for each forecast relative to the basecase. Use ?rc for more detail. Relevant keyword arguments are:     alpha=0.05 <- The confidence level to use in the test \n\nkernelfunction=KernelEpanechnikov() <- The kernel function to use with HAC variance estimator. See ?hacvariance for more detail. \n\nbandwidth=-1 <- The bandwidth for HAC variance estimator. If bandwidth <= -1 then bandwidth is estimated using Politis (2003) \"Adaptive Bandwidth Choice\" \n\nblocklength=0.0 <- Block length to use with the bootstrap. Default of 0.0 implies\n    the block length will be optimally estimated from the data use the method deemed\n    most appropriate by the DependentBootstrap package (typically the selection procedure\n    of Patton, Politis, and White (2009)). \n\nnumresample=1000 <- Number of resamples to use when bootstrapping. \n\nbootmethod=:stationary <- Bootstrap methodology to use, where the default is the\n    stationary bootstrap of Politis and Romano (1993)\n\nSee the DependentBootstrap package docs for more info on bootstrap input keyword arguments.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForecastEval.RCMethod",
    "page": "Docstrings",
    "title": "ForecastEval.RCMethod",
    "category": "type",
    "text": "RCMethod\n\nAbstract type for nesting the various methods that can be used to perform a Reality Check. Subtypes are: \n\nRCBoot\n\nThe subtypes have entries in the help (?) menu.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForecastEval.RCTest",
    "page": "Docstrings",
    "title": "ForecastEval.RCTest",
    "category": "type",
    "text": "RCTest(rejH0::Int, pvalue::Float64)\n\nOutput type from a Reality Check test. The fields of this type follow: \n\nrejH0 <- true if the null is rejected, false otherwise\npvalue <- p-value from the test\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForecastEval.SPABoot",
    "page": "Docstrings",
    "title": "ForecastEval.SPABoot",
    "category": "type",
    "text": "SPABoot(data ; alpha, kernelfunction, bandwidth, bootinput_kwargs...)\n\nMethod type for doing an SPA test using a dependent bootstrap. A constructor that takes the data and several keyword arguments is provided. The data refers to the loss differences for each forecast relative to the basecase. Use ?spa for more detail. Relevant keyword arguments are: \n\nalpha=0.05 <- The confidence level to use in the test \n\nkernelfunction=KernelEpanechnikov() <- The kernel function to use with HAC variance estimator. See ?hacvariance for more detail. \n\nbandwidth=-1 <- The bandwidth for HAC variance estimator. If bandwidth <= -1 then bandwidth is estimated using Politis (2003) \"Adaptive Bandwidth Choice\" \n\nblocklength=0.0 <- Block length to use with the bootstrap. Default of 0.0 implies\n    the block length will be optimally estimated from the data use the method deemed\n    most appropriate by the DependentBootstrap package (typically the selection procedure\n    of Patton, Politis, and White (2009)). \n\nnumresample=1000 <- Number of resamples to use when bootstrapping. \n\nbootmethod=:stationary <- Bootstrap methodology to use, where the default is the\n    stationary bootstrap of Politis and Romano (1993)\n\nNote, see the DependentBootstrap docs for more information on valid keyword arguments for the BootInput constructor.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForecastEval.SPAMethod",
    "page": "Docstrings",
    "title": "ForecastEval.SPAMethod",
    "category": "type",
    "text": "SPAMethod\n\nAbstract type for nesting the various methods that can be used to perform an SPA test. Subtypes are: \n\nSPABoot\n\nThe subtypes have entries in the help (?) menu.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForecastEval.SPATest",
    "page": "Docstrings",
    "title": "ForecastEval.SPATest",
    "category": "type",
    "text": "SPATest(rejH0::Int, mu_u::Vector{Float64}, mu_c::Vector{Float64}, mu_l::Vector{Float64}, pvalue_u::Float64, pvalue_c::Float64, pvalue_l::Float64, pvalue::Float64, teststat::Float64)\n\nOutput type for an SPA test proposed in Hansen (2005) \"A Test for Superior Predictive Ability\". The names of the fields for this type follow those in the referenced paper, so see that paper for more detail. The fields of this type follow: \n\nrejH0 <- true if the null is rejected, false otherwise\nmu_u <- mu associated with upper bound on threshold rate\nmu_c <- Recommended mu\nmu_l <- mu associated with lower bound on threshold rate\npvalue_u <- pvalue associated with mu_u\npvalue_c <- pvalue assoicated with mu_c\npvalue_l <- pvalue associated with mu_l\npvalueauto <- Recommended p-value (usually pvalue_c except in rare situations where this method can fail)\nteststat::Float64 <- SPA test statistic (look for tSPA in source paper)\n\nNote the different mu variables, {u, c, l} are described in the referenced article on p370-371. \n\nMost users will just be interested in the field pvalueauto.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForecastEval.dm-Tuple{Array{#s1245,1} where #s1245<:Number,DMHAC}",
    "page": "Docstrings",
    "title": "ForecastEval.dm",
    "category": "method",
    "text": "dm(lossdiff::Vector{<:Number}, dmmethod ; kwargs...)\n\nThis function implements the test proposed in Diebold, Mariano (1995) \"Comparing Predictive Accuracy\". \n\nLet x1 denote forecast 1, x2 denote forecast 2, and let y denote the forecast target. Let L(., .) denote a loss function. Then the first argument lossdiff is assumed to be a vector created by the following operation: \n\nL(x1, y) - L(x2, y) \n\nThe second argument, dmmethod, can be an explicit method type, currently DMHAC or DMBoot, (see ?DMHAC and ?DMBoot for more detail), in which case the keyword arguments are not needed. \n\nAlternatively, dmmethod can be set to the Symbol :hac or :boot, depending on whether the user wants to use the HAC method or the bootstrap method. In this instance, the keyword arguments provided will be passed on to DMHAC or DMBoot constructors (see ?DMHAC and ?DMBoot for more detail). \n\nFinally, the second argument can be omitted entirely, in which case the method will default to the default bootstrap method, which is the stationary bootstrap of Politis and Romano (1993) with block length estimated followed Patton, Politis, and White (2009). \n\nThe output of a Diebold-Mariano test is of type DMTest. Use ?DMTest for more information.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForecastEval.mcs-Union{Tuple{T}, Tuple{Array{T,2},MCSBoot}} where T<:Number",
    "page": "Docstrings",
    "title": "ForecastEval.mcs",
    "category": "method",
    "text": "mcs(l::Matrix{<:Number}, method ; kwargs...)\nmcs(l::Matrix{<:Number} ; kwargs...)\n\nThis function implements the MCS test proposed in Hansen, Lunde, Nason (2011) \"The Model Confidence Set\", Econometrica, 79 (2), pp. 453-497. \n\nLet x_k, k = 1, ..., K, denote K forecasts (from K different forecasting models), and y denote the forecast target. Let L(., .) denote a loss function. The first argument of mcs is a matrix where the kth column of the matrix is created by the operation: \n\nL(x_k, y) \n\nNote that unlike the Reality Check and SPA test, there is no base case for the MCS. \n\nThe second method argument determines which methodology to use. Currently, only MCSBoot is available and if this input type is provided, the keyword arguments are not needed. Alternatively, the user can omit the second argument, and then any keyword arguments will be passed to the MCSBoot constructor. See ?MCSBoot for more detail. The most relevant keyword arguments are:     alpha=0.05 <- The confidence level to use in the test \n\nbasecaseindex=1 <- The MCS does not have a natural basecase. However, the input data is a\n	matrix of losses, not loss differentials, and the method itself considers every possible\n	loss differential combination. This is far too many to check for determining\n	the optimal block length for bootstrapping, so users who wish to auto-estimate\n	the appropriate block length can specify a notional base case variable index\n	for the purposes of computing a optimal block lengths of all loss differences\n	relative to the base case.\nblocklength=0.0 <- Block length to use with the bootstrap. Default of 0.0 implies\n    the block length will be optimally estimated from the data use the method deemed\n    most appropriate by the DependentBootstrap package (typically the selection procedure\n    of Patton, Politis, and White (2009)). \n\nnumresample=1000 <- Number of resamples to use when bootstrapping. \n\nbootmethod=:stationary <- Bootstrap methodology to use, where the default is the\n    stationary bootstrap of Politis and Romano (1993)\n\nFor more detail on the bootstrap options, please see the docs for the DependentBootstrap package. \n\nThe output of a MCS test is of type MCSTest. Use ?MCSTest for more information. \n\nNote, if you are hitting RAM limits, type ?ForecastEval.MCSBootLowRAM at the REPL for more detail on an alternative algorithm that is also available. \n\nNote, for any developers, the main algorithm (associated with MCSBoot) still has the following potential performance issues: \n\nISSUE 1: Some of the temporary arrays in the loops could probably be eliminated \n\nISSUE 2: For MCS method A, I think the loop over K could be terminated as soon as cumulative p-values are greater than method.alpha. Need to double check this. \n\nISSUE 3: Need to add option to do just max(abs) method or just sum(sq) method (or both)\n\nComments or pull requests on these issues would be most welcome on the package github page.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForecastEval.rc-Tuple{Array{#s35,2} where #s35<:Number,RCBoot}",
    "page": "Docstrings",
    "title": "ForecastEval.rc",
    "category": "method",
    "text": "rc(lD::Matrix{T}, method ; kwargs)\nrc(lD::Matrix{T} ; kwargs)\n\nThis function implements the test proposed in White (2000) \"A Reality Check for Data Snooping\" following the methodology in Hansen (2005). \n\nLet x0 denote a base-case forecast, xk, k = 1, ..., K, denote K alternative forecasts, and y denote the forecast target. Let L(., .) denote a loss function. The first argument of rc is a matrix where the kth column of the matrix is created by the operation: \n\nL(xk, y) - L(x0, y) \n\nNote that the forecast loss comes first and the base case loss comes second. This is the opposite to what is described in White\'s paper. \n\nThe second method argument determines which methodology to use. Currently, only RCBoot is available and if this input type is provided, the keyword arguments are not needed. Alternatively, the user can omit the second argument, and then any keyword arguments will be passed to the RCBoot constructor. See ?RCBoot for more detail. The most relevant keyword arguments are:     alpha=0.05 <- The confidence level to use in the test \n\nblocklength=0.0 <- Block length to use with the bootstrap. Default of 0.0 implies\n    the block length will be optimally estimated from the data use the method deemed\n    most appropriate by the DependentBootstrap package (typically the selection procedure\n    of Patton, Politis, and White (2009)). \n\nnumresample=1000 <- Number of resamples to use when bootstrapping. \n\nbootmethod=:stationary <- Bootstrap methodology to use, where the default is the\n    stationary bootstrap of Politis and Romano (1993)\n\nThe output of a Reality Check test is of type RCTest. Use ?RCTest for more information.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForecastEval.spa-Tuple{Array{#s10,2} where #s10<:Number,SPABoot}",
    "page": "Docstrings",
    "title": "ForecastEval.spa",
    "category": "method",
    "text": "spa{T<:Number}(lossDiff::Matrix{T}, method ; kwargs...)::SPATest\nspa{T<:Number}(lossDiff::Matrix{T} ; kwargs...)\n\nThis function implements the SPA test proposed in Hansen (2005) \"A Test for Superior Predictive Ability\". \n\nLet x0 denote a base-case forecast, xk, k = 1, ..., K, denote K alternative forecasts, and y denote the forecast target. Let L(., .) denote a loss function. The first argument of spa is a matrix where the kth column of the matrix is created by the operation: \n\nL(xk, y) - L(x0, y) \n\nNote that the forecast loss comes first and the base case loss comes second. This is the opposite to what is described in Hansen\'s paper. \n\nThe second method argument determines which methodology to use. Currently, only SPABoot is available and if this input type is provided, the keyword arguments are not needed. Alternatively, the user can omit the second argument, and then any keyword arguments will be passed to the SPABoot constructor. See ?SPABoot for more detail. The most relevant keyword arguments are:     alpha=0.05 <- The confidence level to use in the test \n\nkernelfunction=KernelEpanechnikov() <- The kernel function to use with HAC variance estimator. See ?hacvariance for more detail. \n\nbandwidth=-1 <- The bandwidth for HAC variance estimator. If bandwidth <= -1 then bandwidth is estimated using Politis (2003) \"Adaptive Bandwidth Choice\" \n\nblocklength=0.0 <- Block length to use with the bootstrap. Default of 0.0 implies\n    the block length will be optimally estimated from the data use the method deemed\n    most appropriate by the DependentBootstrap package (typically the selection procedure\n    of Patton, Politis, and White (2009)). \n\nnumresample=1000 <- Number of resamples to use when bootstrapping. \n\nbootmethod=:stationary <- Bootstrap methodology to use, where the default is the\n    stationary bootstrap of Politis and Romano (1993)\n\nThe output of an SPA test is of type SPATest. Use ?SPATest for more information. \n\nNote, Hansen suggests using the Stationary Bootstrap implied HAC variance estimator, which is not currently supported in this package. However, note that any consistent HAC estimator is valid and in many cases may be preferred.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForecastEval.hacvariance-Union{Tuple{Tk}, Tuple{AbstractArray{#s1244,1} where #s1244<:Number,Tk,Int64}} where Tk<:ForecastEval.KernelFunction",
    "page": "Docstrings",
    "title": "ForecastEval.hacvariance",
    "category": "method",
    "text": "hacvariance{T<:Number}(x::AbstractVector{T} ; kf::Symbol=:epanechnikov, bw::Int=-1)::Tuple{Float64, Int}\n\nGet the heteroskedasticity and autocorrelation consistent variance estimator of data vector x. The function has the following keyword arguments: 	kf <- Kernel function used in estimator. Valid values are :epanechnikov, :gaussian, :uniform, :bartlett 	bw <- Bandwidth used in estimator. If <= -1, then estimate bandwidth using Politis (2003) \"Adaptive Bandwidth Choice\"\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForecastEval.loss_diff_base_case-Tuple{Array{#s1775,2} where #s1775<:Number,Int64}",
    "page": "Docstrings",
    "title": "ForecastEval.loss_diff_base_case",
    "category": "method",
    "text": "lossdiffbase_case <- Local function for getting loss differences relative to notional base case for purposes of estimating the block length\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ForecastEval.pvaluelocal-Tuple{Distributions.Distribution{Distributions.Univariate,Distributions.Continuous},Number}",
    "page": "Docstrings",
    "title": "ForecastEval.pvaluelocal",
    "category": "method",
    "text": "pvaluelocal(d::ContinuousUnivariateDistribution, x::Number ; tail::Symbol=:both)::Float64\npvaluelocal{T<:Number}(d::Vector{T}, x::Number ; tail::Symbol=:both, as::Bool=false)::Float64\n\nObtain the p-value associated with the inputs. d::ContinuousUnivariateDistribution -> d is the distribution under the null and x is the test statistic. d::Vector{T} -> d is a bootstrapped vector of test statistics and x is the value of the test statistic under the null.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [ForecastEval]\nOrder = [:type, :function]"
},

]}
