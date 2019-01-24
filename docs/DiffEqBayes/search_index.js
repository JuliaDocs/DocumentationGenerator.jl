var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#DiffEqBayes.jl-1",
    "page": "Readme",
    "title": "DiffEqBayes.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status) (Image: codecov.io)This repository is a set of extension functionality for estimating the parameters of differential equations using Bayesian methods. It allows the choice of using Stan.jl, Turing.jl, DynamicHMC.jl and ApproxBayes.jl to perform a Bayesian estimation of a differential equation problem specified via the DifferentialEquations.jl interface.To begin you first need to add this repository using the following command.Pkg.add(\"DiffEqBayes\")\nusing DiffEqBayes"
},

{
    "location": "#stan_inference-1",
    "page": "Readme",
    "title": "stan_inference",
    "category": "section",
    "text": "stan_inference(prob::ODEProblem,t,data,priors = nothing;alg=:rk45,\n               num_samples=1000, num_warmup=1000, reltol=1e-3,\n               abstol=1e-6, maxiter=Int(1e5),likelihood=Normal,\n               vars=(StanODEData(),InverseGamma(2,3)))stan_inference uses Stan.jl to perform the Bayesian inference. The Stan installation process is required to use this function. The input requires that the function is defined by a ParameterizedFunction with the @ode_def macro. t is the array of time and data is the array where the first dimension (columns) corresponds to the array of system values. priors is an array of prior distributions for each parameter, specified via a Distributions.jl type. alg is a choice between :rk45 and :bdf, the two internal integrators of Stan. num_samples is the number of samples to take per chain, and num_warmup is the number of MCMC warmup steps. abstol and reltol are the keyword arguments for the internal integrator. liklihood is the likelihood distribution to use with the arguments from vars, and vars is a tuple of priors for the distributions of the likelihood hyperparameters. The special value StanODEData() in this tuple denotes the position that the ODE solution takes in the likelihood\'s parameter list."
},

{
    "location": "#turing_inference-1",
    "page": "Readme",
    "title": "turing_inference",
    "category": "section",
    "text": "turing_inference(prob::DEProblem,alg,t,data,priors = nothing;\n                 num_samples=1000, epsilon = 0.02, tau = 4, kwargs...)turing_inference uses Turing.jl to perform its parameter inference. prob can be any DEProblem with a corresponding alg choice. t is the array of time points and data[:,i] is the set of observations for the differential equation system at time point t[i] (or higher dimensional). priors is an array of prior distributions for each parameter, specified via a Distributions.jl type. num_samples is the number of samples per MCMC chain. epsilon and tau are the HMC parameters. The extra kwargs are given to the internal differential equation solver."
},

{
    "location": "#dynamichmc_inference-1",
    "page": "Readme",
    "title": "dynamichmc_inference",
    "category": "section",
    "text": "dynamichmc_inference(prob::DEProblem,data,priors,t,transformations;\n                      σ = 0.01,ϵ=0.001,initial=Float64[])dynamichmc_inference uses DynamicHMC.jl to  perform the bayesian parameter estimation. prob can be any DEProblem, data is the set  of observations for our model which is to be used in the Bayesian Inference process. priors represent the  choice of prior distributions for the parameters to be determined, passed as an array of Distributions.jl distributions. t is the array of time points. transformations  is an array of Tranformations imposed for constraining the  parameter values to specific domains. initial values for the parameters can be passed, if not passed the means of the  priors are used. ϵ can be used as a kwarg to pass the initial step size for the NUTS algorithm."
},

{
    "location": "#abc_inference-1",
    "page": "Readme",
    "title": "abc_inference",
    "category": "section",
    "text": "abc_inference(prob::DEProblem, alg, t, data, priors; ϵ=0.001,\n     distancefunction = euclidean, ABCalgorithm = ABCSMC, progress = false,\n     num_samples = 500, maxiterations = 10^5, kwargs...)abc_inference uses ApproxBayes.jl which uses Approximate Bayesian Computation (ABC) to perform its parameter inference. prob can be any DEProblem with a corresponding alg choice. t is the array of time points and data[:,i] is the set of observations for the differential equation system at time point t[i] (or higher dimensional). priors is an array of prior distributions for each parameter, specified via a Distributions.jl type. num_samples is the number of posterior samples. ϵ is the target distance between the data and simulated data. distancefunction is a distance metric specified from the Distances.jl package, the default is euclidean. ABCalgorithm is the ABC algorithm to use, options are ABCSMC or ABCRejection from ApproxBayes.jl, the default is the former which is more efficient. maxiterations is the maximum number of iterations before the algorithm terminates. The extra kwargs are given to the internal differential equation solver."
},

{
    "location": "#Example-1",
    "page": "Readme",
    "title": "Example",
    "category": "section",
    "text": "```julia  f1 = @odedefnohes LotkaVolterraTest1 begin   dx = ax - xy   dy = -3y + xy  end ap = [1.5]  u0 = [1.0,1.0]  tspan = (0.0,10.0)  prob1 = ODEProblem(f1,u0,tspan,p)σ = 0.01                         # noise, fixed for now  t = collect(linspace(1,10,10))   # observation times  sol = solve(prob1,Tsit5())randomized = VectorOfArray([(sol(t[i]) + σ * randn(2)) for i in 1:length(t)])  data = convert(Array,randomized)bayesianresultstan = staninference(prob1,t,data,priors;numsamples=300,                                  num_warmup=500,likelihood=Normal,                                  vars =(StanODEData(),InverseGamma(3,2)))bayesianresultturing = turinginference(prob1,Tsit5(),t,data,priors;numsamples=500)bayesianresulthmc = dynamichmc_inference(prob1, data, [Normal(1.5, 1)], t, [bridge(ℝ, ℝ⁺, )])bayesianresultabc = abcinference(prob1, Tsit5(), t, data, [Normal(1.5, 1)];                                  numsamples=500)  ```"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [DiffEqBayes]\nOrder = [:type, :function]"
},

]}
