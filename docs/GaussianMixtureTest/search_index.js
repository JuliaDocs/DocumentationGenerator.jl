var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#GaussianMixtureTest-1",
    "page": "Readme",
    "title": "GaussianMixtureTest",
    "category": "section",
    "text": "Linux and macOS: (Image: Build Status)Windows: (Image: Build Status)This package implements the EM test for number of components of univariate Gaussian Mixture. The conventional log likelihood test can not be used to test the number of components because the Fisher regularity conditions are violated in Gaussian Mixture case [1].This package follows the method of [3] but with no regression covariates. Note that the asymptotic distribution of the test statistic is that of the maximum of C0 dependent Chi^2(2) random variables which has no closed form when the null distribution has more than 1 component. However the p value can be obtained via simulation.In addition the typical EM algorithm may fail to give a consistent estimate of Gaussian Mixture parameters. This package still uses EM but add a penalty term on the log likelihood which ensures the consistency [2]."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "To install this package, runPkg.add(\"GaussianMixtureTest\")The major functions are gmm, gmmrepeat,asymptoticdistribution and kstest. gmm estimates the parameters via EM algorithm. gmmrepeat repeat gmm for multiple starting values. asymptoticdistribution simulates the asymptotic distribution of the test statistic when the number of components is greater than 2. kstest conducts the Kasahara-Shimotsu test.See also the usage by running?gmm"
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "See the example code also in runtests.jlusing Distributions\nusing GaussianMixtureTest\n\nmu_true = [-2.0858,-1.4879]\nwi_true = [0.0828,0.9172]\nsigmas_true = [0.6735,0.2931]\n\nm = MixtureModel(map((u, v) -> Normal(u, v), mu_true, sigmas_true), wi_true)\nx = rand(m, 1000);\n\nasymptoticdistribution(x, wi_true, mu_true, sigmas_true, debuginfo=true);\n\n#Estimate the parameters with two components\nwi, mu, sigmas, ml = gmm(x, 2)\n\n#Do the KS test for C=2 v.s. C=3\nkstest(x, 2)"
},

{
    "location": "#Acknowledgement-1",
    "page": "Readme",
    "title": "Acknowledgement",
    "category": "section",
    "text": "Thanks Dr. Shimotsu and Dr. Kasahara for nicely providing their original R code and their detailed explanations. Several implementation details of this package are borrowed from their R code."
},

{
    "location": "#Reference-1",
    "page": "Readme",
    "title": "Reference",
    "category": "section",
    "text": "[1] Chen, J. & Li, P., 2009. Hypothesis Test for Normal Mixture Models: The EM Approach. the Annals of Statistics, 37(5 A), pp.2523–2542.\n[2] Chen, J., Tan, X. & Zhang, R., 2008. Inference for Normal Mixtures in Mean and Variance. Statistica Sinica, 18, pp.443–465.\n[3] Kasahara, H. & Shimotsu, K., 2015. Testing the Number of Components in Normal Mixture Regression Models. Journal of the American Statistical Association (to appear), pp.1–33."
},

{
    "location": "autodocs/#GaussianMixtureTest.asymptoticdistribution-Tuple{AbstractArray{Float64,1},Array{Float64,1},Array{Float64,1},Array{Float64,1}}",
    "page": "Docstrings",
    "title": "GaussianMixtureTest.asymptoticdistribution",
    "category": "method",
    "text": "asymptoticdistribution(x, wi, mu, sigmas);\n\nSimulate the asymptotic distribution of test statistic for kstest. nrep is the number of random values to generate. debuginfo is whether to show the debug information. When number of components of null distribution is greater than 1, the test statistic has no closed form asymptotic distribution. When the null distribution is just normal, the asymptotic distribution is just Chisq(2).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GaussianMixtureTest.gmm",
    "page": "Docstrings",
    "title": "GaussianMixtureTest.gmm",
    "category": "function",
    "text": "gmm(x, ncomponent)\n\nEstimate parameters of ncomponent gaussian mixture on the data x. Optional arguments of gmm:\n\nncomponent: the number of components\nwi_init mu_init and sigmas_init: the initial values\nmaxiteration: the number of iterations\ntol: the tolerance of convergence criteria\nan and sn: the penalty weight and variance term\ntaufixed: for kstest, whether fix the tau value\nwhichtosplit and tau: for kstest, which component to split and the split proportion\nmu_lb and mu_ub for kstest, the lower and upper limits of components means\npl: wheter the penalty on sigmas be included in the log likelihood in the final two EM steps. Note that the starting value with largest penalized log likelihood is picked, but the penalty term should not be included in the likelihood ratio\nptau: whether to add the penalty on tau be included in likelihood. Better to be true since the more tau values we try the larger the test statistic\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GaussianMixtureTest.gmmrepeat-Tuple{AbstractArray{T,1} where T<:Real,Int64,Array{Float64,1},Array{Float64,1},Array{Float64,1}}",
    "page": "Docstrings",
    "title": "GaussianMixtureTest.gmmrepeat",
    "category": "method",
    "text": "gmmrepeat(x, C)\n\nRepeat the gmm for ntrials randomly generated starting values and pick the one with largest penalized likelihood.\n\nwi_init, mu_lb, mu_ub, sigmas_lb, sigmas_ub: specify how to generate the random starting values\ntaufixed, whichtosplit, tau: whether keep the ratio between wi[whichtosplit] and wi[whichtosplit]+wi[whichtosplit+1] fixed at a constant tau.\nsn and an: the penalty\ndebuginfo and tol: whether print the debug information and the convergence critera\npl: wheter the penalty on sigmas be included in the log likelihood in the final two EM steps. Note that the starting value with largest penalized log likelihood is picked, but the penalty term should not be included in the likelihood ratio\nptau: whether to add the penalty on tau be included in likelihood. Better to be true since the more tau values we try the larger the test statistic\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GaussianMixtureTest.kstest-Tuple{AbstractArray{Float64,1},Int64}",
    "page": "Docstrings",
    "title": "GaussianMixtureTest.kstest",
    "category": "method",
    "text": "kstest(x, C0)\n\nDo the EM test under null Hypothesis of C0 components. If rejected, then it suggest the true number of components is greater than C0. Optional arguments for kstest\n\nvtau: the finite set of tau value, default to try 0.5 only\nntrials: the number of initial values to try, default to be 25\ndebuginfo: whether show the debug information\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [GaussianMixtureTest]\nOrder = [:type, :function]"
},

]}
