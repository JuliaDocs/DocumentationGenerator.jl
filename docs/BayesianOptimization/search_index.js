var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#BayesianOptimization-1",
    "page": "Readme",
    "title": "BayesianOptimization",
    "category": "section",
    "text": "(Image: Lifecycle)<!– (Image: Lifecycle) (Image: Lifecycle) (Image: Lifecycle) (Image: Lifecycle) (Image: Lifecycle) –> (Image: Build Status) (Image: codecov.io)"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "using BayesianOptimization, GaussianProcesses\n\nf(x) = sum((x .- 1).^2) + randn()                # noisy function to minimize\n\n# Choose as a model an elastic GP with input dimensions 2.\n# The GP is called elastic, because data can be appended efficiently.\nmodel = ElasticGPE(2,                            # 2 input dimensions\n                   mean = MeanConst(0.),         \n                   kernel = SEArd([0., 0.], 5.),\n                   logNoise = 0.,\n                   capacity = 3000)              # the initial capacity of the GP is 3000 samples.\n\n# Optimize the hyperparameters of the GP using maximum likelihood (ML) estimates every 50 steps\nmodeloptimizer = MLGPOptimizer(every = 50, noisebounds = [-4, 3],       # bounds of the logNoise\n                               kernbounds = [[-1, -1, 0], [4, 4, 10]],  # bounds of the 3 parameters GaussianProcesses.get_param_names(model.kernel)\n                               maxeval = 40)\nopt = BOpt(f,\n           model,\n           UpperConfidenceBound(),                # type of acquisition\n           modeloptimizer,                        \n           [-5., -5.], [5., 5.],                  # lowerbounds, upperbounds         \n           repetitions = 5,                       # evaluate the function for each input 5 times\n           maxiterations = 100,                   # evaluate at 100 input positions\n           sense = Min,                           # minimize the function\n           verbosity = Progress)\n\nresult = boptimize!(opt)This package exportsBOpt, boptimize!\nacquisition types: ExpectedImprovement, ProbabilityOfImprovement, UpperConfidenceBound, ThompsonSamplingSimple, MutualInformation\nscaling of standard deviation in UpperConfidenceBound: BrochuBetaScaling, NoBetaScaling\nGP hyperparameter optimizer: MLGPOptimizer, NoOptimizer\noptimization sense: Min, Max\nverbosity levels: Silent, Timings, ProgressUse the REPL help, e.g. ?Bopt, to get more information."
},

{
    "location": "#Review-papers-on-Bayesian-optimization-1",
    "page": "Readme",
    "title": "Review papers on Bayesian optimization",
    "category": "section",
    "text": "A Tutorial on Bayesian Optimization of Expensive Cost Functions, with Application to Active User Modeling and Hierarchical Reinforcement Learning\nTaking the Human Out of the Loop: A Review of Bayesian Optimization"
},

{
    "location": "#Similar-Projects-1",
    "page": "Readme",
    "title": "Similar Projects",
    "category": "section",
    "text": "BayesOpt is a wrapper of the established BayesOpt toolbox written in C++. It has more features and seems comparable in performance to this package."
},

{
    "location": "autodocs/#BayesianOptimization.BOpt-NTuple{6,Any}",
    "page": "Docstrings",
    "title": "BayesianOptimization.BOpt",
    "category": "method",
    "text": "BOpt(func, model, acquisition, modeloptimizer, lowerbounds, upperbounds;\n          sense = Max, maxiterations = 10^4, maxduration = Inf,\n          acquisitionoptions = NamedTuple(), repetitions = 1,\n          verbosity = Progress, lhs_iterations = 5*length(lowerbounds))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesianOptimization.BrochuBetaScaling",
    "page": "Docstrings",
    "title": "BayesianOptimization.BrochuBetaScaling",
    "category": "type",
    "text": "Scales βt of UpperConfidenceBound as\n\nβt = √(2 * log(t^(D/2 + 2) * π^2/(3δ)))\n\nwhere t is the number of observations, D is the dimensionality of the input data points and δ is a small constant (default δ = 0.1).\n\nSee Brochu E., Cora V. M., de Freitas N. (2010), \"A Tutorial on Bayesian Optimization of Expensive Cost Functions, with Application to Active User Modeling and Hierarchical Reinforcement Learning\", https://arxiv.org/abs/1012.2599v1 page 16.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesianOptimization.ExpectedImprovement",
    "page": "Docstrings",
    "title": "BayesianOptimization.ExpectedImprovement",
    "category": "type",
    "text": "The expected improvement measures the expected improvement x - τ of a point x upon an incumbent target τ. For Gaussian distributions it is given by\n\n(μ(x) - τ) * ϕ[(μ(x) - τ)/σ(x)] + σ(x) * Φ[(μ(x) - τ)/σ(x)]\n\nwhere ϕ is the standard normal distribution function and Φ is the standard normal cumulative function, and μ(x), σ(x) are mean and standard deviation of the distribution at point x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesianOptimization.MLGPOptimizer-Tuple{}",
    "page": "Docstrings",
    "title": "BayesianOptimization.MLGPOptimizer",
    "category": "method",
    "text": "MLGPOptimizer(; every = 10, kwargs...)\n\nSet the GP hyperparameters to the maximum likelihood estimate every number of steps.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesianOptimization.MutualInformation",
    "page": "Docstrings",
    "title": "BayesianOptimization.MutualInformation",
    "category": "type",
    "text": "The mutual information measures the amount of information gained by querying at x. The parameter γ̂ gives a lower bound for the information on f from the queries {x}. For a Gaussian this is     γ̂ = ∑σ²(x) and the mutual information at x is     μ(x) + √(α)*(√(σ²(x)+γ̂) - √(γ̂))\n\nwhere μ(x), σ(x) are mean and standard deviation of the distribution at point x.\n\nSee Contal E., Perchet V., Vayatis N. (2014), \"Gaussian Process Optimization with Mutual Information\" http://proceedings.mlr.press/v32/contal14.pdf\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesianOptimization.NoBetaScaling",
    "page": "Docstrings",
    "title": "BayesianOptimization.NoBetaScaling",
    "category": "type",
    "text": "Applies no scaling to βt of UpperConfidenceBound.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesianOptimization.ProbabilityOfImprovement",
    "page": "Docstrings",
    "title": "BayesianOptimization.ProbabilityOfImprovement",
    "category": "type",
    "text": "The probability of improvement measures the probability that a point x leads to an improvement upon an incumbent target τ. For Gaussian distributions it is given by\n\nΦ[(μ(x) - τ)/σ(x)]\n\nwhere Φ is the standard normal cumulative distribution function and μ(x), σ(x) are mean and standard deviation of the distribution at point x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesianOptimization.ThompsonSamplingSimple",
    "page": "Docstrings",
    "title": "BayesianOptimization.ThompsonSamplingSimple",
    "category": "type",
    "text": "The acquisition function associated with ThompsonSamplingSimple draws independent samples for each input x a function value from the model. Together with a gradient-free optimization method this leads to proposal points that might be similarly distributed as the maxima of true Thompson samples from GPs. True Thompson samples from a GP are simply functions from a GP. Maximizing these samples can be tricky, see e.g. http://hildobijl.com/Downloads/GPRT.pdf chapter 6.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesianOptimization.UpperConfidenceBound",
    "page": "Docstrings",
    "title": "BayesianOptimization.UpperConfidenceBound",
    "category": "type",
    "text": "For Gaussian distributions the upper confidence bound at x is given by     μ(x) + βt * σ(x)\n\nwhere βt is a fixed parameter in the case of NoBetaScaling or an observation size dependent parameter in the case of e.g. BrochuBetaScaling.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesianOptimization.UpperConfidenceBound-Tuple{}",
    "page": "Docstrings",
    "title": "BayesianOptimization.UpperConfidenceBound",
    "category": "method",
    "text": "UpperConfidenceBound(; scaling = BrochuBetaScaling(.1), βt = 1)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesianOptimization.boptimize!-Tuple{BOpt}",
    "page": "Docstrings",
    "title": "BayesianOptimization.boptimize!",
    "category": "method",
    "text": "boptimize!(o::BOpt)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesianOptimization.NoModelOptimizer",
    "page": "Docstrings",
    "title": "BayesianOptimization.NoModelOptimizer",
    "category": "type",
    "text": "Don\'t optimize the model ever.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [BayesianOptimization]\nOrder = [:type, :function]"
},

]}
