var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Overview",
    "title": "Overview",
    "category": "page",
    "text": ""
},

{
    "location": "#Introduction-1",
    "page": "Overview",
    "title": "Introduction",
    "category": "section",
    "text": "This package implements a variant of the “No-U-Turn Sampler” of Hoffmann and Gelman (2014), as described in Betancourt (2017). In order to make the best use of this package, you should read at least the latter paper thoroughly.This package is mainly useful for Bayesian inference. In order to use it, you need to be familiar with the conceptual building blocks of Bayesian inference, most importantly, you should be able to code a (log) posterior as a function in Julia. For various techniques and a discussion of MCMC methods (eg domain transformations, or integrating out discrete parameters), you may find the Stan Modeling Language manual helpful. If you are unfamiliar with Bayesian methods, Bayesian Data Analysis is a good introduction, among other great books.The package aims to “do one thing and do it well”: given a log density functionell mathbbR^k to mathbbRfor which you have values ell(x) and the gradient nabla ell(x), it samples values from a densityp(x) propto exp(ell(x))using the algorithm above.The package provides a framework to tune the algorithm to find near-optimal parameters for sampling, and also diagnostics that are specific to the algorithm.However, following a modular approach, it does not provideDomain transformations from subsets of mathbbR^k. For that, see TransformVariables.jl.\nAutomatic differentiation. Julia has a thriving AD ecosystem which should allow you to implement this. This package uses LogDensityProblems.jl for defining (log) density functions, which already has some one-liner solutions for AD, and is easily extensible for other methods.\nGeneric MCMC diagnostics not specific to NUTS. See MCMCDiagnostics.jl for an implementation of hatR and effective sample size calculations."
},

{
    "location": "#Examples-1",
    "page": "Overview",
    "title": "Examples",
    "category": "section",
    "text": "Worked examples of using this package for Bayesian inference are available in the repository DynamicHMCExamples.jl. It is highly recommended that you skim through them first."
},

{
    "location": "#Support-1",
    "page": "Overview",
    "title": "Support",
    "category": "section",
    "text": "If you have questions, feature requests, or bug reports, please open an issue. I would like to emphasize that it is perfectly fine to open issues just to ask questions."
},

{
    "location": "api/#",
    "page": "High-level API",
    "title": "High-level API",
    "category": "page",
    "text": ""
},

{
    "location": "api/#DynamicHMC.NUTS_init_tune_mcmc",
    "page": "High-level API",
    "title": "DynamicHMC.NUTS_init_tune_mcmc",
    "category": "function",
    "text": "NUTS_init_tune_mcmc(rng, ℓ, N; args...)\n\n\nInit, tune, and then draw N samples from ℓ using the NUTS algorithm.\n\nReturn the sample (a vector of NUTS_transitions) and the tuned sampler.\n\nrng is the random number generator.\n\nargs are passed on to various methods, see NUTS_init and bracketed_doubling_tuner.\n\nMost users would use this function, unless they are doing something that requires manual tuning.\n\n\n\n\n\nNUTS_init_tune_mcmc(ℓ, N; args...)\n\n\nSame as the other method, but with random number generator Random.GLOBAL_RNG.\n\n\n\n\n\n"
},

{
    "location": "api/#DynamicHMC.NUTS_Transition",
    "page": "High-level API",
    "title": "DynamicHMC.NUTS_Transition",
    "category": "type",
    "text": "Single transition by the No-U-turn sampler. Contains new position and diagnostic information.\n\n\n\n\n\n"
},

{
    "location": "api/#DynamicHMC.get_position",
    "page": "High-level API",
    "title": "DynamicHMC.get_position",
    "category": "function",
    "text": "Position after transition.\n\n\n\n\n\n"
},

{
    "location": "api/#DynamicHMC.get_neg_energy",
    "page": "High-level API",
    "title": "DynamicHMC.get_neg_energy",
    "category": "function",
    "text": "Negative energy of the Hamiltonian at the position.\n\n\n\n\n\n"
},

{
    "location": "api/#DynamicHMC.get_depth",
    "page": "High-level API",
    "title": "DynamicHMC.get_depth",
    "category": "function",
    "text": "Tree depth.\n\n\n\n\n\n"
},

{
    "location": "api/#DynamicHMC.get_termination",
    "page": "High-level API",
    "title": "DynamicHMC.get_termination",
    "category": "function",
    "text": "Reason for termination, see Termination.\n\n\n\n\n\n"
},

{
    "location": "api/#DynamicHMC.get_acceptance_rate",
    "page": "High-level API",
    "title": "DynamicHMC.get_acceptance_rate",
    "category": "function",
    "text": "get_acceptance_rate(x)\n\nReturn average Metropolis acceptance rate.\n\n\n\n\n\nAverage acceptance rate over trajectory.\n\n\n\n\n\n"
},

{
    "location": "api/#DynamicHMC.get_steps",
    "page": "High-level API",
    "title": "DynamicHMC.get_steps",
    "category": "function",
    "text": "Number of integrator steps.\n\n\n\n\n\n"
},

{
    "location": "api/#DynamicHMC.get_position_matrix",
    "page": "High-level API",
    "title": "DynamicHMC.get_position_matrix",
    "category": "function",
    "text": "variable_matrix(posterior)\n\nReturn the samples of the parameter vector as rows of a matrix.\n\n\n\n\n\n"
},

{
    "location": "api/#Sampling-and-accessors-1",
    "page": "High-level API",
    "title": "Sampling and accessors",
    "category": "section",
    "text": "Most users would use this function, which initializes and tunes the parameters of the algorithm, then samples. Parameters can be set manually for difficult posteriors.NUTS_init_tune_mcmcimportant: Important\nThe NUTS sampler saves a random number generator and uses it for random draws. When running in parallel, you should initialize NUTS_init_tune_mcmc with a random number generator as its first argument explicitly, making sure that each thread has its own one.These functions can be used use to perform the steps above manually.NUTS_init\ntune\nmcmcThe resulting sample is a vector of NUTS_Transition objects, for which the following accessors exist:NUTS_Transition\nget_position\nget_neg_energy\nget_depth\nget_termination\nget_acceptance_rate\nget_steps\nget_position_matrix"
},

{
    "location": "api/#DynamicHMC.NUTS_statistics",
    "page": "High-level API",
    "title": "DynamicHMC.NUTS_statistics",
    "category": "function",
    "text": "NUTS_statistics(sample)\n\nReturn statistics about the sample (ie not the variables). Mostly useful for NUTS diagnostics.\n\n\n\n\n\n"
},

{
    "location": "api/#DynamicHMC.sample_cov",
    "page": "High-level API",
    "title": "DynamicHMC.sample_cov",
    "category": "function",
    "text": "sample_cov(sample)\n\n\nCovariance matrix of the sample.\n\n\n\n\n\n"
},

{
    "location": "api/#DynamicHMC.EBFMI",
    "page": "High-level API",
    "title": "DynamicHMC.EBFMI",
    "category": "function",
    "text": "EBFMI(sample)\n\nEnergy Bayesian fraction of missing information. Useful for diagnosing poorly chosen kinetic energies.\n\nLow values (≤ 0.3) are considered problematic. See Betancourt (2016).\n\n\n\n\n\n"
},

{
    "location": "api/#Diagnostics-1",
    "page": "High-level API",
    "title": "Diagnostics",
    "category": "section",
    "text": "These are NUTS-specific diagnostics and statistics (except for sample_cov, which is a convenience function). It is also prudent to use generic MCMC convergence diagnostics, as suggested in the introduction.NUTS_statistics\nsample_cov\nEBFMI"
},

{
    "location": "api/#Fine-grained-control-1",
    "page": "High-level API",
    "title": "Fine-grained control",
    "category": "section",
    "text": ""
},

{
    "location": "api/#DynamicHMC.KineticEnergy",
    "page": "High-level API",
    "title": "DynamicHMC.KineticEnergy",
    "category": "type",
    "text": "abstract type KineticEnergy\n\nKinetic energy specifications.\n\nFor all subtypes, it is implicitly assumed that kinetic energy is symmetric in the momentum p, ie.\n\nneg_energy(::KineticEnergy, p, q) == neg_energy(::KineticEnergy, -p, q)\n\nWhen the above is violated, the consequences are undefined.\n\n\n\n\n\n"
},

{
    "location": "api/#DynamicHMC.EuclideanKE",
    "page": "High-level API",
    "title": "DynamicHMC.EuclideanKE",
    "category": "type",
    "text": "abstract type EuclideanKE <: KineticEnergy\n\nEuclidean kinetic energies (position independent).\n\n\n\n\n\n"
},

{
    "location": "api/#DynamicHMC.GaussianKE",
    "page": "High-level API",
    "title": "DynamicHMC.GaussianKE",
    "category": "type",
    "text": "struct GaussianKE{T<:(AbstractArray{T,2} where T), S<:(AbstractArray{T,2} where T)} <: EuclideanKE\n\nGaussian kinetic energy.\n\np  q  N(0 M)\n\nindependently of q.\n\nThe inverse covariance M¹ is stored.\n\n\n\n\n\n"
},

{
    "location": "api/#Kinetic-energy-1",
    "page": "High-level API",
    "title": "Kinetic energy",
    "category": "section",
    "text": "KineticEnergy\nEuclideanKE\nGaussianKE"
},

{
    "location": "api/#tuning-1",
    "page": "High-level API",
    "title": "NUTS parameters and tuning",
    "category": "section",
    "text": "NUTS\nStepsizeTuner\nStepsizeCovTuner\nTunerSequence\nmcmc_adapting_ϵ\nbracketed_doubling_tuner"
},

{
    "location": "lowlevel/#",
    "page": "Low-level building blocks",
    "title": "Low-level building blocks",
    "category": "page",
    "text": "CurrentModule = DynamicHMC"
},

{
    "location": "lowlevel/#Notation-1",
    "page": "Low-level building blocks",
    "title": "Notation",
    "category": "section",
    "text": "Notation follows Betancourt (2017), with some differences.Instead of energies, negative energies are used in the code.The following are used consistently for variables:ℓ: log density we sample from, supports the interface of LogDensityProblems.AbstractLogDensityProblem\nκ: distribution/density that corresponds to kinetic energy\nH: Hamiltonian\nq: position\np: momentum\nz: point in phase space (q,p)\nϵ: stepsize\na: acceptance rate\nA: acceptance tuning state\nζ: proposal from trajectory (phase point and weight)\nτ: turn statistic\nd: divergence statistic\nπ: log density (different from papers)\nΔ: logdensity relative to initial point of trajectory"
},

{
    "location": "lowlevel/#Low-level-building-blocks-1",
    "page": "Low-level building blocks",
    "title": "Low-level building blocks",
    "category": "section",
    "text": "This is documented only for developers. These are not part of the public API, if you are using them you should reconsider or file an issue."
},

{
    "location": "lowlevel/#DynamicHMC.Hamiltonian",
    "page": "Low-level building blocks",
    "title": "DynamicHMC.Hamiltonian",
    "category": "type",
    "text": "Hamiltonian(ℓ, κ)\n\nConstruct a Hamiltonian from the log density ℓ, and the kinetic energy specification κ. Calls of ℓ with a vector are expected to return a value that supports DiffResults.value and DiffResults.gradient.\n\n\n\n\n\n"
},

{
    "location": "lowlevel/#DynamicHMC.PhasePoint",
    "page": "Low-level building blocks",
    "title": "DynamicHMC.PhasePoint",
    "category": "type",
    "text": "struct PhasePoint{T, S<:LogDensityProblems.ValueGradient}\n\nA point in phase space, consists of a position and a momentum.\n\nLog densities and gradients are saved for speed gains, so that the gradient of ℓ at q is not calculated twice for every leapfrog step (both as start- and endpoints).\n\nBecause of caching, a PhasePoint should only be used with a specific Hamiltonian.\n\n\n\n\n\n"
},

{
    "location": "lowlevel/#DynamicHMC.phasepoint_in",
    "page": "Low-level building blocks",
    "title": "DynamicHMC.phasepoint_in",
    "category": "function",
    "text": "phasepoint_in(H::Hamiltonian, q, p)\n\nThe recommended interface for creating a phase point in a Hamiltonian. Computes cached values.\n\n\n\n\n\n"
},

{
    "location": "lowlevel/#DynamicHMC.rand_phasepoint",
    "page": "Low-level building blocks",
    "title": "DynamicHMC.rand_phasepoint",
    "category": "function",
    "text": "rand_phasepoint(rng, H, q)\n\n\nExtend a position q to a phasepoint with a random momentum according to the kinetic energy of H.\n\n\n\n\n\n"
},

{
    "location": "lowlevel/#DynamicHMC.neg_energy",
    "page": "Low-level building blocks",
    "title": "DynamicHMC.neg_energy",
    "category": "function",
    "text": "neg_energy(κ, p)\nneg_energy(κ, p, q)\n\n\nReturn the log density of kinetic energy κ, at momentum p. Some kinetic energies (eg Riemannian geometry) will need q, too.\n\n\n\n\n\nneg_energy(H, z)\n\n\nLog density for Hamiltonian H at point z.\n\nIf ℓ(q) == -Inf (rejected), ignores the kinetic energy.\n\n\n\n\n\n"
},

{
    "location": "lowlevel/#DynamicHMC.get_p♯",
    "page": "Low-level building blocks",
    "title": "DynamicHMC.get_p♯",
    "category": "function",
    "text": "get_p♯(κ, p)\nget_p♯(κ, p, q)\n\n\nReturn p, used for turn diagnostics.\n\n\n\n\n\n"
},

{
    "location": "lowlevel/#DynamicHMC.loggradient",
    "page": "Low-level building blocks",
    "title": "DynamicHMC.loggradient",
    "category": "function",
    "text": "loggradient(κ, p)\nloggradient(κ, p, q)\n\n\nCalculate the gradient of the logarithm of kinetic energy at momentum p and position q; the latter is ignored for Gaussian kinetic energies.\n\n\n\n\n\n"
},

{
    "location": "lowlevel/#DynamicHMC.leapfrog",
    "page": "Low-level building blocks",
    "title": "DynamicHMC.leapfrog",
    "category": "function",
    "text": "leapfrog(H, z, ϵ)\n\nTake a leapfrog step of length ϵ from z along the Hamiltonian H.\n\nReturn the new position.\n\nThe leapfrog algorithm uses the gradient of the next position to evolve the momentum. If this is not finite, the momentum won\'t be either. Since the constructor PhasePoint validates its arguments, this can only happen for divergent points anyway, and should not cause a problem.\n\n\n\n\n\n"
},

{
    "location": "lowlevel/#Hamiltonian-and-leapfrog-1",
    "page": "Low-level building blocks",
    "title": "Hamiltonian and leapfrog",
    "category": "section",
    "text": "Hamiltonian\nPhasePoint\nphasepoint_in\nrand_phasepoint\nneg_energy\nget_p♯\nloggradient\nleapfrog"
},

{
    "location": "lowlevel/#DynamicHMC.find_initial_stepsize",
    "page": "Low-level building blocks",
    "title": "DynamicHMC.find_initial_stepsize",
    "category": "function",
    "text": "find_initial_stepsize(parameters, A)\n\n\nFind an initial stepsize that matches the conditions of parameters (see InitialStepsizeSearch).\n\nA is the local acceptance ratio (uncapped). When given a Hamiltonian H and a phasepoint z, it will be calculated using local_acceptance_ratio.\n\n\n\n\n\n"
},

{
    "location": "lowlevel/#DynamicHMC.InitialStepsizeSearch",
    "page": "Low-level building blocks",
    "title": "DynamicHMC.InitialStepsizeSearch",
    "category": "type",
    "text": "struct InitialStepsizeSearch\n\nParameters for the search algorithm for the initial stepsize.\n\nThe algorithm finds an initial stepsize ϵ so that the local acceptance ratio A(ϵ) satisfies\n\na_textmin  A(ϵ)  a_textmax\n\nThis is achieved by an initial bracketing, then bisection.\n\na_min\nLowest local acceptance rate.\na_max\nHighest local acceptance rate.\nϵ₀\nInitial stepsize.\nC\nScale factor for initial bracketing, > 1. Default: 2.0.\nmaxiter_crossing\nMaximum number of iterations for initial bracketing.\nmaxiter_bisect\nMaximum number of iterations for bisection.\n\nnote: Note\nCf. Hoffman and Gelman (2014), which does not ensure bounds for the acceptance ratio, just that it has crossed a threshold. This version seems to work better for some tricky posteriors with high curvature.\n\n\n\n\n\n"
},

{
    "location": "lowlevel/#DynamicHMC.find_crossing_stepsize",
    "page": "Low-level building blocks",
    "title": "DynamicHMC.find_crossing_stepsize",
    "category": "function",
    "text": "find_crossing_stepsize(parameters, A, ϵ₀)\nfind_crossing_stepsize(parameters, A, ϵ₀, Aϵ₀)\n\n\nFind the stepsize for which the local acceptance rate A(ϵ) crosses a.\n\nReturn ϵ₀, A(ϵ₀), ϵ₁, A(ϵ₁), whereϵ₀andϵ₁are stepsizes before and after crossingawithA(ϵ)`, respectively.\n\nAssumes that A(ϵ₀)  (a_textmin a_textmax), where the latter are defined in parameters.\n\nparameters: parameters for the iteration.\nA: local acceptance ratio (uncapped), a function of stepsize ϵ\nϵ₀, Aϵ₀: initial value of ϵ, and A(ϵ₀)\n\n\n\n\n\n"
},

{
    "location": "lowlevel/#DynamicHMC.bisect_stepsize",
    "page": "Low-level building blocks",
    "title": "DynamicHMC.bisect_stepsize",
    "category": "function",
    "text": "bisect_stepsize(parameters, A, ϵ₀, ϵ₁)\nbisect_stepsize(parameters, A, ϵ₀, ϵ₁, Aϵ₀)\nbisect_stepsize(parameters, A, ϵ₀, ϵ₁, Aϵ₀, Aϵ₁)\n\n\nReturn the desired stepsize ϵ by bisection.\n\nparameters: algorithm parameters, see InitialStepsizeSearch\nA: local acceptance ratio (uncapped), a function of stepsize ϵ\nϵ₀, ϵ₁, Aϵ₀, Aϵ₁: stepsizes and acceptance rates (latter optional).\n\nThis function assumes that ϵ₀  ϵ₁, the stepsize is not yet acceptable, and the cached A values have the correct ordering.\n\n\n\n\n\n"
},

{
    "location": "lowlevel/#DynamicHMC.local_acceptance_ratio",
    "page": "Low-level building blocks",
    "title": "DynamicHMC.local_acceptance_ratio",
    "category": "function",
    "text": "local_acceptance_ratio(H, z)\n\n\nReturn a function of the stepsize (ϵ) that calculates the local acceptance ratio for a single leapfrog step around z along the Hamiltonian H. Formally, let\n\nA(ϵ) = exp(textneg_energy(H textleapfrog(H z ϵ)) - textneg_energy(H z))\n\nNote that the ratio is not capped by 1, so it is not a valid probability per se.\n\n\n\n\n\n"
},

{
    "location": "lowlevel/#Finding-initial-stepsize-\\epsilon-1",
    "page": "Low-level building blocks",
    "title": "Finding initial stepsize epsilon",
    "category": "section",
    "text": "Local stepsize tuning.The local acceptance ratio is technically a probability, but for finding the initial stepsize, it is not capped at 1.Also, the values are cached as this is assumed to be moderately expensive to calculate.find_initial_stepsize\nInitialStepsizeSearch\nfind_crossing_stepsize\nbisect_stepsize\nlocal_acceptance_ratio"
},

{
    "location": "lowlevel/#DynamicHMC.DualAveragingParameters",
    "page": "Low-level building blocks",
    "title": "DynamicHMC.DualAveragingParameters",
    "category": "type",
    "text": "Parameters for the dual averaging algorithm of Gelman and Hoffman (2014, Algorithm 6).\n\nTo get reasonable defaults, initialize with DualAveragingParameters(logϵ₀). See adapting_ϵ for a joint constructor.\n\n\n\n\n\n"
},

{
    "location": "lowlevel/#DynamicHMC.DualAveragingAdaptation",
    "page": "Low-level building blocks",
    "title": "DynamicHMC.DualAveragingAdaptation",
    "category": "type",
    "text": "Current state of adaptation for ϵ. Use DualAverageingAdaptation(logϵ₀) to get an initial value. See adapting_ϵ for a joint constructor.\n\n\n\n\n\n"
},

{
    "location": "lowlevel/#DynamicHMC.get_ϵ",
    "page": "Low-level building blocks",
    "title": "DynamicHMC.get_ϵ",
    "category": "function",
    "text": "get_ϵ(A)\nget_ϵ(A, tuning)\n\n\nWhen tuning, return the stepsize ϵ for the next HMC step. Otherwise return the tuned ϵ.\n\n\n\n\n\n"
},

{
    "location": "lowlevel/#DynamicHMC.adapting_ϵ",
    "page": "Low-level building blocks",
    "title": "DynamicHMC.adapting_ϵ",
    "category": "function",
    "text": "DA_params, A =\n\nadapting_ϵ(ϵ; args...)\n\n\nConstructor for both the adaptation parameters and the initial state.\n\n\n\n\n\n"
},

{
    "location": "lowlevel/#DynamicHMC.adapt_stepsize",
    "page": "Low-level building blocks",
    "title": "DynamicHMC.adapt_stepsize",
    "category": "function",
    "text": "A′ =\n\nadapt_stepsize(parameters, A, a)\n\n\nUpdate the adaptation A of log stepsize logϵ with average Metropolis acceptance rate a over the whole visited trajectory, using the dual averaging algorithm of Gelman and Hoffman (2014, Algorithm 6). Return the new adaptation.\n\n\n\n\n\n"
},

{
    "location": "lowlevel/#Dual-averaging-1",
    "page": "Low-level building blocks",
    "title": "Dual averaging",
    "category": "section",
    "text": "DualAveragingParameters\nDualAveragingAdaptation\nget_ϵ\nadapting_ϵ\nadapt_stepsize"
},

{
    "location": "lowlevel/#DynamicHMC.adjacent_tree",
    "page": "Low-level building blocks",
    "title": "DynamicHMC.adjacent_tree",
    "category": "function",
    "text": "ζ, τ, d, z = adjacent_tree(rng, trajectory, z, depth, fwd)\n\nTraverse the tree of given depth adjacent to point z in trajectory.\n\nfwd specifies the direction, rng is used for random numbers.\n\nReturn:\n\nζ: the proposal from the tree. Only valid when !isdivergent(d) && !isturning(τ), otherwise the value should not be used.\nτ: turn statistics. Only valid when !isdivergent(d).\nd: divergence statistics, always valid.\nz: the point at the end of the tree.\n\ntrajectory should support the following interface:\n\nStarting from leaves: ζ, τ, d = leaf(trajectory, z, isinitial)\nMoving along the trajectory: z = move(trajectory, z, fwd)\nTesting for turning and divergence: isturning(τ), isdivergent(d)\nCombination of return values: combine_proposals(ζ₁, ζ₂, bias), combine_turnstats(τ₁, τ₂), and combine_divstats(d₁, d₂)\n\n\n\n\n\n"
},

{
    "location": "lowlevel/#DynamicHMC.Termination",
    "page": "Low-level building blocks",
    "title": "DynamicHMC.Termination",
    "category": "type",
    "text": "Reason for terminating a trajectory.\n\n\n\n\n\n"
},

{
    "location": "lowlevel/#DynamicHMC.sample_trajectory",
    "page": "Low-level building blocks",
    "title": "DynamicHMC.sample_trajectory",
    "category": "function",
    "text": "ζ, d, termination, depth = sample_trajectory(rng, trajectory, z, max_depth)\n\nSample a trajectory starting at z.\n\nReturn:\n\nζ: proposal from the tree\nd: divergence statistics\ntermination: reason for termination (see Termination)\ndepth: the depth of the tree that as sampled from. Doubling steps that lead to an invalid tree do not contribute to depth.\n\nSee adjacent_tree for the interface that needs to be supported by trajectory.\n\n\n\n\n\n"
},

{
    "location": "lowlevel/#Abstract-trajectory-interface-1",
    "page": "Low-level building blocks",
    "title": "Abstract trajectory interface",
    "category": "section",
    "text": "In contrast to other reference implementations, the algorithm is implemented in a functional style using immutable values. The intention is to provide more transparency and facilitate fine-grained unit testing.adjacent_tree\nTermination\nsample_trajectory"
},

{
    "location": "lowlevel/#DynamicHMC.Proposal",
    "page": "Low-level building blocks",
    "title": "DynamicHMC.Proposal",
    "category": "type",
    "text": "Proposal that is propagated through by sampling recursively when building the trees.\n\n\n\n\n\n"
},

{
    "location": "lowlevel/#DynamicHMC.combined_logprob_logweight",
    "page": "Low-level building blocks",
    "title": "DynamicHMC.combined_logprob_logweight",
    "category": "function",
    "text": "logprob, ω = combined_logprob_logweight(ω₁, ω₂, bias)\n\nGiven (relative) log probabilities ω₁ and ω₂, return the log probabiliy of drawing a sampel from the second (logprob) and the combined (relative) log probability (ω).\n\nWhen bias, biases towards the second argument, introducing anti-correlations.\n\n\n\n\n\n"
},

{
    "location": "lowlevel/#DynamicHMC.combine_proposals",
    "page": "Low-level building blocks",
    "title": "DynamicHMC.combine_proposals",
    "category": "function",
    "text": "combine_proposals(rng, ζ₁, ζ₂, bias)\n\nCombine proposals from two trajectories, using their weights.\n\nWhen bias, biases towards the second proposal, introducing anti-correlations.\n\n\n\n\n\n"
},

{
    "location": "lowlevel/#Proposals-1",
    "page": "Low-level building blocks",
    "title": "Proposals",
    "category": "section",
    "text": "Proposal\ncombined_logprob_logweight\ncombine_proposals"
},

{
    "location": "lowlevel/#DynamicHMC.DivergenceStatistic",
    "page": "Low-level building blocks",
    "title": "DynamicHMC.DivergenceStatistic",
    "category": "type",
    "text": "Divergence and acceptance statistics.\n\nCalculated over all visited phase points (not just the tree that is sampled from).\n\n\n\n\n\n"
},

{
    "location": "lowlevel/#DynamicHMC.divergence_statistic",
    "page": "Low-level building blocks",
    "title": "DynamicHMC.divergence_statistic",
    "category": "function",
    "text": "divergence_statistic()\n\nEmpty divergence statistic (for initial node).\n\n\n\n\n\ndivergence_statistic(isdivergent, Δ)\n\nDivergence statistic for leaves. Δ is the log density relative to the initial point.\n\n\n\n\n\n"
},

{
    "location": "lowlevel/#DynamicHMC.isdivergent",
    "page": "Low-level building blocks",
    "title": "DynamicHMC.isdivergent",
    "category": "function",
    "text": "isdivergent(x)\n\nTest if divergence statistic x indicates divergence.\n\n\n\n\n\n"
},

{
    "location": "lowlevel/#DynamicHMC.combine_divstats",
    "page": "Low-level building blocks",
    "title": "DynamicHMC.combine_divstats",
    "category": "function",
    "text": "combine_divstats(x, y)\n\nCombine divergence statistics from (subtrees) x and y. A divergent subtree make a subtree divergent.\n\n\n\n\n\n"
},

{
    "location": "lowlevel/#Divergence-statistics-1",
    "page": "Low-level building blocks",
    "title": "Divergence statistics",
    "category": "section",
    "text": "DivergenceStatistic\ndivergence_statistic\nisdivergent\ncombine_divstats"
},

{
    "location": "lowlevel/#DynamicHMC.TurnStatistic",
    "page": "Low-level building blocks",
    "title": "DynamicHMC.TurnStatistic",
    "category": "type",
    "text": "Statistics for the identification of turning points. See Betancourt (2017, appendix).\n\n\n\n\n\n"
},

{
    "location": "lowlevel/#DynamicHMC.combine_turnstats",
    "page": "Low-level building blocks",
    "title": "DynamicHMC.combine_turnstats",
    "category": "function",
    "text": "combine_turnstats(x, y)\n\nCombine turn statistics of two trajectories x and y, which are assume to be adjacent and in that order.\n\n\n\n\n\n"
},

{
    "location": "lowlevel/#DynamicHMC.isturning",
    "page": "Low-level building blocks",
    "title": "DynamicHMC.isturning",
    "category": "function",
    "text": "isturning(τ)\n\nTest termination based on turn statistics. Uses the generalized NUTS criterion from Betancourt (2017).\n\nNote that this function should not be called with turn statistics returned by leaf, ie depth > 0 is required.\n\n\n\n\n\n"
},

{
    "location": "lowlevel/#Turn-analysis-1",
    "page": "Low-level building blocks",
    "title": "Turn analysis",
    "category": "section",
    "text": "TurnStatistic\ncombine_turnstats\nisturning"
},

{
    "location": "lowlevel/#DynamicHMC.Trajectory",
    "page": "Low-level building blocks",
    "title": "DynamicHMC.Trajectory",
    "category": "type",
    "text": "Representation of a trajectory, ie a Hamiltonian with a discrete integrator that also checks for divergence.\n\n\n\n\n\n"
},

{
    "location": "lowlevel/#DynamicHMC.leaf",
    "page": "Low-level building blocks",
    "title": "DynamicHMC.leaf",
    "category": "function",
    "text": "ζ, τ, d = leaf(trajectory, z, isinitial)\n\nConstruct a proposal, turn statistic, and divergence statistic for a single point z in trajectory. When isinitial, z is the initial point in the trajectory.\n\nReturn\n\nζ: the proposal, which should only be used when !isdivergent(d)\nτ: the turn statistic, which should only be used when !isdivergent(d)\nd: divergence statistic\n\n\n\n\n\n"
},

{
    "location": "lowlevel/#DynamicHMC.move",
    "page": "Low-level building blocks",
    "title": "DynamicHMC.move",
    "category": "function",
    "text": "move(trajectory, z, fwd)\n\nReturn next phase point adjacent to z along trajectory in the direction specified by fwd.\n\n\n\n\n\n"
},

{
    "location": "lowlevel/#DynamicHMC.NUTS_transition",
    "page": "Low-level building blocks",
    "title": "DynamicHMC.NUTS_transition",
    "category": "function",
    "text": "NUTS_transition(rng, H, q, ϵ, max_depth; args...)\n\nNo-U-turn Hamiltonian Monte Carlo transition, using Hamiltonian H, starting at position q, using stepsize ϵ. Builds a doubling dynamic tree of maximum depth max_depth. args are passed to the Trajectory constructor. rng is the random number generator used.\n\n\n\n\n\n"
},

{
    "location": "lowlevel/#Sampling-1",
    "page": "Low-level building blocks",
    "title": "Sampling",
    "category": "section",
    "text": "Trajectory\nleaf\nmove\nNUTS_transition"
},

{
    "location": "lowlevel/#DynamicHMC.AbstractTuner",
    "page": "Low-level building blocks",
    "title": "DynamicHMC.AbstractTuner",
    "category": "type",
    "text": "abstract type AbstractTuner\n\nA tuner that adapts the sampler.\n\nAll subtypes support length which returns the number of steps (note: if not in field N, define length accordingly), other parameters vary.\n\n\n\n\n\n"
},

{
    "location": "lowlevel/#Tuning-1",
    "page": "Low-level building blocks",
    "title": "Tuning",
    "category": "section",
    "text": "DynamicHMC.AbstractTuner"
},

{
    "location": "lowlevel/#DynamicHMC.NUTS_Statistics",
    "page": "Low-level building blocks",
    "title": "DynamicHMC.NUTS_Statistics",
    "category": "type",
    "text": "Storing the output of NUTS_statistics in a structured way, for pretty printing. Currently for internal use.\n\n\n\n\n\n"
},

{
    "location": "lowlevel/#DynamicHMC.ACCEPTANCE_QUANTILES",
    "page": "Low-level building blocks",
    "title": "DynamicHMC.ACCEPTANCE_QUANTILES",
    "category": "constant",
    "text": "Acceptance quantiles for NUTS_Statistics diagnostic summary.\n\n\n\n\n\n"
},

{
    "location": "lowlevel/#DynamicHMC.explore_local_acceptance_ratios",
    "page": "Low-level building blocks",
    "title": "DynamicHMC.explore_local_acceptance_ratios",
    "category": "function",
    "text": "explore_local_acceptance_ratios(H, q, ϵs, ps)\n\n\nReturn a matrix of local_acceptance_ratio values for stepsizes ϵs and the given momentums ps. The latter is calculated from random values when an integer is given.\n\nTo facilitate plotting, - values are replaced by NaN.\n\n\n\n\n\n"
},

{
    "location": "lowlevel/#diagnostics_lowlevel-1",
    "page": "Low-level building blocks",
    "title": "Diagnostics",
    "category": "section",
    "text": "NUTS_Statistics\nACCEPTANCE_QUANTILES\nexplore_local_acceptance_ratios"
},

{
    "location": "lowlevel/#DynamicHMC.AbstractReport",
    "page": "Low-level building blocks",
    "title": "DynamicHMC.AbstractReport",
    "category": "type",
    "text": "abstract type AbstractReport\n\nSubtypes implement\n\nstart_progress!, which is used to start a particular iteration,\nreport!, which triggers the display of progress,\nend_progress! which \"frees\" the progress report, which can then be reused.\n\n\n\n\n\n"
},

{
    "location": "lowlevel/#DynamicHMC.report!",
    "page": "Low-level building blocks",
    "title": "DynamicHMC.report!",
    "category": "function",
    "text": "report!(report, count)\n\n\nDisplay report via the appropriate mechanism. count is the index of the current step.\n\n\n\n\n\n"
},

{
    "location": "lowlevel/#DynamicHMC.start_progress!",
    "page": "Low-level building blocks",
    "title": "DynamicHMC.start_progress!",
    "category": "function",
    "text": "start_progress!(report, msg; total_count)\n\n\nStart a progress meter for an iteration.\n\ntotal_count can be overwritten by a keyword argument.\n\nAfter calling this function, report! should be used at every step with an integer.\n\n\n\n\n\n"
},

{
    "location": "lowlevel/#DynamicHMC.end_progress!",
    "page": "Low-level building blocks",
    "title": "DynamicHMC.end_progress!",
    "category": "function",
    "text": "end_progress!(report)\nend_progress!(report, count)\n\n\nTerminate a progress meter.\n\n\n\n\n\n"
},

{
    "location": "lowlevel/#DynamicHMC.ReportIO",
    "page": "Low-level building blocks",
    "title": "DynamicHMC.ReportIO",
    "category": "type",
    "text": "mutable struct ReportIO{TIO<:IO} <: DynamicHMC.AbstractReport\n\nDisplay progress by printing lines to io if countΔ iterations and time_nsΔ nanoseconds have passed since the last display.\n\nio\nIO stream for reporting.\nprint_color\nColor for report messages.\ntotal_count\nExpected total count. When unknown, set to nothing.\ncountΔ\nFor comparing current count to the count at the last report. Not binding when negative.\ntime_nsΔ\nFor comparing time to the time at the last report (in ns). Not binding when negative.\nstart_time_ns\nTime of starting the process. nothing unless start_progress! was called.\nlast_printed_count\nCount when a report was last printed. < 0 before start_progress!.\nlast_printed_time_ns\nTime (in ns) when a report was last printed.\n\n\n\n\n\n"
},

{
    "location": "lowlevel/#DynamicHMC.ReportSilent",
    "page": "Low-level building blocks",
    "title": "DynamicHMC.ReportSilent",
    "category": "type",
    "text": "A placeholder type for not reporting any information.\n\n\n\n\n\n"
},

{
    "location": "lowlevel/#Reporting-information-during-runs-1",
    "page": "Low-level building blocks",
    "title": "Reporting information during runs",
    "category": "section",
    "text": "Samplers take an AbstractReport argument, which is then used for reporting. The interface is as follows.DynamicHMC.AbstractReport\nDynamicHMC.report!\nDynamicHMC.start_progress!\nDynamicHMC.end_progress!The default isReportIOReporting information can be suppressed withReportSilentOther interfaces should define similar types."
},

{
    "location": "lowlevel/#DynamicHMC.rand_bool",
    "page": "Low-level building blocks",
    "title": "DynamicHMC.rand_bool",
    "category": "function",
    "text": "rand_bool(rng, prob)\n\n\nRandom boolean which is true with the given probability prob.\n\nAll random numbers in this library are obtained from this function.\n\n\n\n\n\n"
},

{
    "location": "lowlevel/#Utilities-and-miscellanea-1",
    "page": "Low-level building blocks",
    "title": "Utilities and miscellanea",
    "category": "section",
    "text": "rand_bool"
},

]}
