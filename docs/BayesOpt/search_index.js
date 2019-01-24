var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#BayesOpt-1",
    "page": "Readme",
    "title": "BayesOpt",
    "category": "section",
    "text": "(Image: Lifecycle)<!– (Image: Lifecycle) (Image: Lifecycle) (Image: Lifecycle) (Image: Lifecycle) (Image: Lifecycle) –> (Image: Build Status) (Image: codecov.io)Julia wrapper of BayesOpt."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "using BayesOpt\nconfig = ConfigParameters()         # calls initialize_parameters_to_default of the C API\nset_kernel!(config, \"kMaternARD5\")  # calls set_kernel of the C API\nconfig.sc_type = SC_MAP\nf(x) = sum(x .^ 2)\nlowerbound = [-2., -2.]; upperbound = [2., 2.]\noptimizer, optimum = bayes_optimization(f, lowerbound, upperbound, config)Consult the BayesOpt documentation for the configuration options."
},

{
    "location": "autodocs/#BayesOpt.ConfigParameters-Tuple{}",
    "page": "Docstrings",
    "title": "BayesOpt.ConfigParameters",
    "category": "method",
    "text": "ConfigParameters()\n\nReturns default parameters of BayesOpt (see initializeparametersto_default in the C API).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesOpt.bayes_optimization-NTuple{4,Any}",
    "page": "Docstrings",
    "title": "BayesOpt.bayes_optimization",
    "category": "method",
    "text": "bayes_optimization(func, lb, ub, config)\n\nRuns continuous Bayesian optimization on func that takes vectors of length d as argument and returns a real number, within the box defined by the lowerbounds lb (a vector of length d with lowerbounds for each dimension) and upperbounds ub, using config (see ConfigParameters).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesOpt.bayes_optimization_categorical-Tuple{Any,Array{Integer,1},Any}",
    "page": "Docstrings",
    "title": "BayesOpt.bayes_optimization_categorical",
    "category": "method",
    "text": "bayes_optimization_categorical(func, categories, config)\n\nRuns Bayesian optimization on func that takes vectors of length d as argument and returns a real number, with categories array of size d with the number of categories per dimension, using config (see ConfigParameters).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesOpt.bayes_optimization_disc-Tuple{Any,Array{#s34,1} where #s34<:(Array{#s33,1} where #s33<:Number),Any}",
    "page": "Docstrings",
    "title": "BayesOpt.bayes_optimization_disc",
    "category": "method",
    "text": "bayes_optimization_disc(func, valid_x, config)\n\nRuns  Bayesian optimization on func that takes vectors of length d as argument and returns a real number, on valid_x an array of valid points  (vectors of length d) using config (see ConfigParameters).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesOpt.set_criteria!",
    "page": "Docstrings",
    "title": "BayesOpt.set_criteria!",
    "category": "function",
    "text": "set_criteria!(config, name) set criteria in config to name.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesOpt.set_kernel!",
    "page": "Docstrings",
    "title": "BayesOpt.set_kernel!",
    "category": "function",
    "text": "set_kernel!(config, name) set kernel in config to name.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesOpt.set_learning!",
    "page": "Docstrings",
    "title": "BayesOpt.set_learning!",
    "category": "function",
    "text": "set_learning!(config, name) set learning in config to name.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesOpt.set_load_file!",
    "page": "Docstrings",
    "title": "BayesOpt.set_load_file!",
    "category": "function",
    "text": "set_load_file!(config, name) set load file in config to name.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesOpt.set_log_file!",
    "page": "Docstrings",
    "title": "BayesOpt.set_log_file!",
    "category": "function",
    "text": "set_log_file!(config, name) set log file in config to name.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesOpt.set_mean!",
    "page": "Docstrings",
    "title": "BayesOpt.set_mean!",
    "category": "function",
    "text": "set_mean!(config, name) set mean in config to name.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesOpt.set_save_file!",
    "page": "Docstrings",
    "title": "BayesOpt.set_save_file!",
    "category": "function",
    "text": "set_save_file!(config, name) set save file in config to name.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesOpt.set_score!",
    "page": "Docstrings",
    "title": "BayesOpt.set_score!",
    "category": "function",
    "text": "set_score!(config, name) set score in config to name.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BayesOpt.set_surrogate!",
    "page": "Docstrings",
    "title": "BayesOpt.set_surrogate!",
    "category": "function",
    "text": "set_surrogate!(config, name) set surrogate in config to name.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [BayesOpt]\nOrder = [:type, :function]"
},

]}
