var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "ApproximateBayesianComputing.jl:  Approximate Bayesian Computing for Julia",
    "title": "ApproximateBayesianComputing.jl:  Approximate Bayesian Computing for Julia",
    "category": "page",
    "text": ""
},

{
    "location": "#ApproximateBayesianComputing.jl:-Approximate-Bayesian-Computing-for-Julia-1",
    "page": "ApproximateBayesianComputing.jl:  Approximate Bayesian Computing for Julia",
    "title": "ApproximateBayesianComputing.jl:  Approximate Bayesian Computing for Julia",
    "category": "section",
    "text": "This package provides for Approximate Bayesian Computing (ABC) via sequential importance sampling in Julia.   Currently, it implements a single algorithm, ABC-PMC based on Beaumont et al. 2002 via abcpmcplan_type. However, it does include several extra features that will eventually be documented. "
},

{
    "location": "#Getting-Started-1",
    "page": "ApproximateBayesianComputing.jl:  Approximate Bayesian Computing for Julia",
    "title": "Getting Started",
    "category": "section",
    "text": "Add the ApproximateBayesianComputing.jl package (update once become registered)\nusing ApproximateBayesianComputing.jl\ninclude(\"tests/runtests.jl\")\nSee test1.jl for a demo of how to use ABC"
},

{
    "location": "#ApproximateBayesianComputing.ApproximateBayesianComputing",
    "page": "ApproximateBayesianComputing.jl:  Approximate Bayesian Computing for Julia",
    "title": "ApproximateBayesianComputing.ApproximateBayesianComputing",
    "category": "module",
    "text": "ApproximateBayesianComputing Module providing     types (abcpmcplantype, abcpopulationtype) and methods (generatetheta, initabc, updateabcpop, runabc) for using Approximate Bayesian Computing\n\n\n\n\n\n"
},

{
    "location": "#API-1",
    "page": "ApproximateBayesianComputing.jl:  Approximate Bayesian Computing for Julia",
    "title": "API",
    "category": "section",
    "text": "Modules = [ApproximateBayesianComputing]\nPrivate = true\nOrder   = [:module, :function, :type]"
},

{
    "location": "#Index-1",
    "page": "ApproximateBayesianComputing.jl:  Approximate Bayesian Computing for Julia",
    "title": "Index",
    "category": "section",
    "text": ""
},

{
    "location": "page1/#ApproximateBayesianComputing",
    "page": "-",
    "title": "ApproximateBayesianComputing",
    "category": "module",
    "text": "ApproximateBayesianComputing Module providing     types (abcpmcplantype, abcpopulationtype) and methods (generatetheta, initabc, updateabcpop, runabc) for using Approximate Bayesian Computing\n\n\n\n\n\n"
},

{
    "location": "page1/#ApproximateBayesianComputing.abc_population_type-Tuple{Integer,Integer}",
    "page": "-",
    "title": "ApproximateBayesianComputing.abc_population_type",
    "category": "method",
    "text": "abcpopulationtype(numparam::Integer, numparticles::Integer; acceptlog::abclogtype = abclogtype(), rejectlog::abclogtype = abclogtype(), repeats::Array{Int64,1} = zeros(Int64,num_particles) )\n\nnumparam:  Number of model parameters for generating simulated data numparticles: Number of particles for sequential importance sampler\n\nOptional parameters: acceptlog: Log of accepted parameters/summary statistics/distances rejectlog: Log of rejected parameters/summary statistics/distances repeats:    Array indicating which particles have been repeated from previous generation\n\n\n\n\n\n"
},

{
    "location": "page1/#",
    "page": "-",
    "title": "-",
    "category": "page",
    "text": "ApproximateBayesianComputingApproximateBayesianComputing.abc_pmc_plan_typeabc_pmc_plan_type(gd::Function,css::Function,cd::Function,p)ApproximateBayesianComputing.abc_population_type(num_param::Integer, num_particles::Integer)"
},

]}
