var documenterSearchIndex = {"docs": [

{
    "location": "#BayesNets.BDeuPrior",
    "page": "Home",
    "title": "BayesNets.BDeuPrior",
    "category": "type",
    "text": "Assigns equal scores to Markov equivalent structures\n\nα_ijk = x/{q_i * r_i} for each j, k and some given x\n\nsee DMU section 2.4.3\n\n\n\n\n\n"
},

{
    "location": "#BayesNets.BayesNetSampler",
    "page": "Home",
    "title": "BayesNets.BayesNetSampler",
    "category": "type",
    "text": "Abstract type for sampling with:\n\nRandom.rand(BayesNet, BayesNetSampler)\nRandom.rand(BayesNet, BayesNetSampler, nsamples)\nRandom.rand!(Assignment, BayesNet, BayesNetSampler)\n\n\n\n\n\n"
},

{
    "location": "#BayesNets.DirectSampler",
    "page": "Home",
    "title": "BayesNets.DirectSampler",
    "category": "type",
    "text": "Straightforward sampling from a BayesNet. The default sampler.\n\n\n\n\n\n"
},

{
    "location": "#BayesNets.DirichletPrior",
    "page": "Home",
    "title": "BayesNets.DirichletPrior",
    "category": "type",
    "text": "Baysian Structure learning seeks to maximize P(G|D) In the Bayesian fashion, we can provide a prior over the parameters in our learning network. This is described using a Dirichlet Prior.\n\n\n\n\n\n"
},

{
    "location": "#BayesNets.DiscreteBayesNet",
    "page": "Home",
    "title": "BayesNets.DiscreteBayesNet",
    "category": "type",
    "text": "DiscreteBayesNets are Bayesian Networks where every variable is an integer within 1:Nᵢ and every distribution is Categorical.\n\nThis representation is very common, and allows for the use of factors, for example in Probabilistic Graphical Models by Koller and Friedman\n\n\n\n\n\n"
},

{
    "location": "#BayesNets.ExactInference",
    "page": "Home",
    "title": "BayesNets.ExactInference",
    "category": "type",
    "text": "Exact inference using factors and variable eliminations\n\n\n\n\n\n"
},

{
    "location": "#BayesNets.Factor",
    "page": "Home",
    "title": "BayesNets.Factor",
    "category": "type",
    "text": "Factor(bn, name, evidence=Assignment())\n\nCreate a factor for a node, given some evidence.\n\n\n\n\n\n"
},

{
    "location": "#BayesNets.Factor",
    "page": "Home",
    "title": "BayesNets.Factor",
    "category": "type",
    "text": "Factor(dims, potential)\n\nCreate a Factor corresponding to the potential.\n\n\n\n\n\n"
},

{
    "location": "#BayesNets.Factor-Tuple{AbstractArray{Symbol,1},Array{Int64,1},Nothing}",
    "page": "Home",
    "title": "BayesNets.Factor",
    "category": "method",
    "text": "Factor(dims, lengths, fill_value=0)\n\nCreate a factor with dimensions dims, each with lengths corresponding to lengths. fill_value will fill the potential array with that value. To keep uninitialized, use fill_value=nothing.\n\n\n\n\n\n"
},

{
    "location": "#BayesNets.GibbsSampler",
    "page": "Home",
    "title": "BayesNets.GibbsSampler",
    "category": "type",
    "text": "The GibbsSampler type houses the parameters of the Gibbs sampling algorithm.  The parameters are defined below:\n\nburnin:  The first burnin samples will be discarded.  They will not be returned. The thinning parameter does not affect the burn in period. This is used to ensure that the Gibbs sampler converges to the target stationary distribution before actual samples are drawn.\n\nthinning: For every thinning + 1 number of samples drawn, only the last is kept. Thinning is used to reduce autocorrelation between samples. Thinning is not used during the burn in period. e.g. If thinning is 1, samples will be drawn in groups of two and only the second sample will be in the output.\n\ntimelimit: The number of milliseconds to run the algorithm. The algorithm will return the samples it has collected when either nsamples samples have been collected or timelimit milliseconds have passed.  If time_limit is null then the algorithm will run until nsamples have been collected. This means it is possible that zero samples are returned.\n\nerroriftimeout: If erroriftimeout is true and the timelimit expires, an error will be raised. If erroriftimeout is false and the time limit expires, the samples that have been collected so far will be returned.         This means it is possible that zero samples are returned.  Burn in samples will not be returned. If time_limit is null, this parameter does nothing.\n\nconsistent_with: the assignment that all samples must be consistent with (ie, Assignment(:A=>1) means all samples must have :A=1). Use to sample conditional distributions.\n\nmaxcachesize:  If null, cache as much as possible, otherwise cache at most \"maxcachesize\"  distributions\n\nvariableorder: variableorder determines the order of variables changed when generating a new sample. If null use a random order for every sample (this is different from updating the variables at random). Otherwise should be a list containing all the variables in the order they should be updated.\n\ninitial_sample:  The inital assignment to variables to use.  If null, the initial sample is chosen by briefly using a LikelihoodWeightedSampler.\n\n\n\n\n\n"
},

{
    "location": "#BayesNets.GibbsSamplingFull",
    "page": "Home",
    "title": "BayesNets.GibbsSamplingFull",
    "category": "type",
    "text": "infer(im, inf)\n\nRun Gibbs sampling for N iterations. Each iteration changes all nodes. Discareds first burn_in samples and keeps only the thin-th sample. Ex, if thin=3, will discard the first two samples and keep the third.\n\n\n\n\n\n"
},

{
    "location": "#BayesNets.GibbsSamplingNodewise",
    "page": "Home",
    "title": "BayesNets.GibbsSamplingNodewise",
    "category": "type",
    "text": "infer(GibbsSampling, state::Assignment, InferenceState)\n\nRun Gibbs sampling for N iterations. Each iteration changes one node.\n\nDiscareds first burn_in samples and keeps only the thin-th sample. Ex, if thin=3, will discard the first two samples and keep the third.\n\n\n\n\n\n"
},

{
    "location": "#BayesNets.K2GraphSearch",
    "page": "Home",
    "title": "BayesNets.K2GraphSearch",
    "category": "type",
    "text": "K2GraphSearch\n\nA GraphSearchStrategy following the K2 algorithm. Takes polynomial time to find the optimal structure assuming a topological variable ordering.\n\n\n\n\n\n"
},

{
    "location": "#BayesNets.LikelihoodWeightedSampler",
    "page": "Home",
    "title": "BayesNets.LikelihoodWeightedSampler",
    "category": "type",
    "text": "Likelihood Weighted Sampling\n\n\n\n\n\n"
},

{
    "location": "#BayesNets.LikelihoodWeightingInference",
    "page": "Home",
    "title": "BayesNets.LikelihoodWeightingInference",
    "category": "type",
    "text": "Approximates p(query|evidence) with N weighted samples using likelihood weighted sampling\n\n\n\n\n\n"
},

{
    "location": "#BayesNets.LoopyBelief",
    "page": "Home",
    "title": "BayesNets.LoopyBelief",
    "category": "type",
    "text": "Loopy belief propogation for a network.\n\nEarly stopping if change is messages < tol for `itersforconvergence\' iterations. For no stopping, use tol < 0.\n\n\n\n\n\n"
},

{
    "location": "#BayesNets.NegativeBayesianInformationCriterion",
    "page": "Home",
    "title": "BayesNets.NegativeBayesianInformationCriterion",
    "category": "type",
    "text": "NegativeBayesianInformationCriterion\n\nA ScoringFunction for the negative Bayesian information criterion.\n\nBIC = -2⋅L + k⋅ln(n)\n\n   L - the log likelihood of the data under the cpd\n   k - the number of free parameters to be estimated\n   n - the sample size\n\n\n\n\n\n"
},

{
    "location": "#BayesNets.RejectionSampler",
    "page": "Home",
    "title": "BayesNets.RejectionSampler",
    "category": "type",
    "text": "Rejection Sampling in which the assignments are forced to be consistent with the provided values. Each sampler is attempted at most max_nsamples times before returning an empty assignment.\n\n\n\n\n\n"
},

{
    "location": "#BayesNets.ScoreComponentCache",
    "page": "Home",
    "title": "BayesNets.ScoreComponentCache",
    "category": "type",
    "text": "ScoreComponentCache\n\nUsed to store scores in a priority queue such that graph search algorithms know when a particular construction has already been made.     cacheⱼ for the ith variable with parents parents\n\n\n\n\n\n"
},

{
    "location": "#BayesNets.ScoreComponentCache-Tuple{DataFrame}",
    "page": "Home",
    "title": "BayesNets.ScoreComponentCache",
    "category": "method",
    "text": "ScoreComponentCache(data::DataFrame)\n\nConstruct an empty ScoreComponentCache the size of ncol(data)\n\n\n\n\n\n"
},

{
    "location": "#BayesNets.ScoringFunction",
    "page": "Home",
    "title": "BayesNets.ScoringFunction",
    "category": "type",
    "text": "ScoringFunction\n\nAn abstract type for which subtypes allow extracting CPD score components, which are to be maximized: score_component(::ScoringFunction, cpd::CPD, data::DataFrame)\n\n\n\n\n\n"
},

{
    "location": "#BayesNets.UniformPrior",
    "page": "Home",
    "title": "BayesNets.UniformPrior",
    "category": "type",
    "text": "A uniform Dirichlet prior such that all α are the same\n\nDefaults to the popular K2 prior, α = 1, which is similar to Laplace Smoothing\n\nhttps://en.wikipedia.org/wiki/Additive_smoothing\n\n\n\n\n\n"
},

{
    "location": "#Base.convert-Tuple{Type{DataFrame},Factor}",
    "page": "Home",
    "title": "Base.convert",
    "category": "method",
    "text": "Convert a Factor to a DataFrame\n\n\n\n\n\n"
},

{
    "location": "#Base.convert-Tuple{Type{Factor},CategoricalCPD{Categorical{Float64}}}",
    "page": "Home",
    "title": "Base.convert",
    "category": "method",
    "text": "convert(DiscreteCPD, cpd)\n\nConstruct a Factor from a DiscreteCPD.\n\n\n\n\n\n"
},

{
    "location": "#Base.delete!-Tuple{BayesNet,Symbol}",
    "page": "Home",
    "title": "Base.delete!",
    "category": "method",
    "text": "delete!(bn::BayesNets, target::NodeName)\n\nRemoving cpds will alter the vertex indeces. In particular, removing the ith cpd will swap i and n and then remove n.\n\n\n\n\n\n"
},

{
    "location": "#Base.length-Tuple{Factor}",
    "page": "Home",
    "title": "Base.length",
    "category": "method",
    "text": "Total number of elements in Factor (potential)\n\n\n\n\n\n"
},

{
    "location": "#BayesNets.CPDs.ProbabilisticGraphicalModels.infer-Union{Tuple{BN}, Tuple{LikelihoodWeightingInference,InferenceState{BN}}} where BN<:BayesNet{CategoricalCPD{Categorical{Float64}}}",
    "page": "Home",
    "title": "BayesNets.CPDs.ProbabilisticGraphicalModels.infer",
    "category": "method",
    "text": "Approximates p(query|evidence) with nsamples likelihood weighted samples.\n\nSince this uses a Factor, it is only efficient if the number of samples is (signifcantly) greater than the number of possible instantiations for the query variables\n\n\n\n\n\n"
},

{
    "location": "#BayesNets.CPDs.ProbabilisticGraphicalModels.is_independent-Tuple{BayesNet,AbstractArray{Symbol,1},AbstractArray{Symbol,1},AbstractArray{Symbol,1}}",
    "page": "Home",
    "title": "BayesNets.CPDs.ProbabilisticGraphicalModels.is_independent",
    "category": "method",
    "text": "Returns whether the set of node names x is d-separated from the set y given the set given\n\n\n\n\n\n"
},

{
    "location": "#BayesNets.CPDs.ProbabilisticGraphicalModels.markov_blanket-Tuple{BayesNet,Symbol}",
    "page": "Home",
    "title": "BayesNets.CPDs.ProbabilisticGraphicalModels.markov_blanket",
    "category": "method",
    "text": "Return the children, parents, and parents of children (excluding target) as a Set of NodeNames\n\n\n\n\n\n"
},

{
    "location": "#BayesNets.CPDs.parents-Tuple{BayesNet,Symbol}",
    "page": "Home",
    "title": "BayesNets.CPDs.parents",
    "category": "method",
    "text": "Returns the parents as a list of NodeNames\n\n\n\n\n\n"
},

{
    "location": "#BayesNets.bayesian_score",
    "page": "Home",
    "title": "BayesNets.bayesian_score",
    "category": "function",
    "text": "bayesian_score(G::DAG, names::Vector{Symbol}, data::DataFrame[, ncategories::Vector{Int}[, prior::DirichletPrior]])\n\nCompute the bayesian score for graph structure g, with the data in data. names containes a symbol corresponding to each vertex in g that is the name of a column in data. ncategories is a vector of the number of values that each variable in the Bayesian network can take.\n\nNote that every entry in data must be an integer greater than 0\n\n\n\n\n\n"
},

{
    "location": "#BayesNets.bayesian_score_component-Union{Tuple{I}, Tuple{Int64,AbstractArray{I,1},AbstractArray{Int64,1},AbstractArray{Int64,2},AbstractArray{Float64,2}}} where I<:Integer",
    "page": "Home",
    "title": "BayesNets.bayesian_score_component",
    "category": "method",
    "text": "Computes the Bayesian score component for the given target variable index and     Dirichlet prior counts given in alpha\n\nINPUT:     i       - index of the target variable     parents - list of indeces of parent variables (should not contain self)     r       - list of instantiation counts accessed by variable index               r[1] gives number of discrete states variable 1 can take on     data - matrix of sufficient statistics / counts               d[j,k] gives the number of times the target variable took on its kth instantiation               given the jth parental instantiation\n\nOUTPUT:     the Bayesian score, Float64\n\n\n\n\n\n"
},

{
    "location": "#BayesNets.children-Tuple{BayesNet,Symbol}",
    "page": "Home",
    "title": "BayesNets.children",
    "category": "method",
    "text": "Returns the children as a list of NodeNames\n\n\n\n\n\n"
},

{
    "location": "#BayesNets.get_asia_bn-Tuple{}",
    "page": "Home",
    "title": "BayesNets.get_asia_bn",
    "category": "method",
    "text": "An ergodic version of the asia network, with the E variable removed\n\nOrignal network: Lauritzen, Steffen L. and David J. Spiegelhalter, 1988\n\n\n\n\n\n"
},

{
    "location": "#BayesNets.get_sat_fail_bn-Tuple{}",
    "page": "Home",
    "title": "BayesNets.get_sat_fail_bn",
    "category": "method",
    "text": "Satellite failure network from DMU, pg 17\n\n\n\n\n\n"
},

{
    "location": "#BayesNets.get_sprinkler_bn-Tuple{}",
    "page": "Home",
    "title": "BayesNets.get_sprinkler_bn",
    "category": "method",
    "text": "The usual sprinkler problem\n\n\n\n\n\n"
},

{
    "location": "#BayesNets.get_weighted_sample!-Tuple{Dict{Symbol,Any},BayesNet,Dict{Symbol,Any}}",
    "page": "Home",
    "title": "BayesNets.get_weighted_sample!",
    "category": "method",
    "text": "Draw an assignment from the Bayesian network but set any variables in the evidence accordingly. Returns the assignment and the probability weighting associated with the evidence.\n\n\n\n\n\n"
},

{
    "location": "#BayesNets.gibbs_sample-Tuple{BayesNet,Integer,Integer}",
    "page": "Home",
    "title": "BayesNets.gibbs_sample",
    "category": "method",
    "text": "Implements Gibbs sampling. (https://en.wikipedia.org/wiki/Gibbs_sampling) For finite variables, the posterior distribution is sampled by building the exact distribution. For continuous variables, the posterior distribution is sampled using Metropolis Hastings MCMC. Discrete variables with infinite support are currently not supported. The Gibbs Sampler only supports CPDs that return Univariate Distributions. (CPD{D<:UnivariateDistribution})\n\nbn:: A Bayesian Network to sample from.  bn should only contain CPDs that return UnivariateDistributions.\n\nnsamples: The number of samples to return.\n\nburnin:  The first burnin samples will be discarded.  They will not be returned. The thinning parameter does not affect the burn in period. This is used to ensure that the Gibbs sampler converges to the target stationary distribution before actual samples are drawn.\n\nthinning: For every thinning + 1 number of samples drawn, only the last is kept. Thinning is used to reduce autocorrelation between samples. Thinning is not used during the burn in period. e.g. If thinning is 1, samples will be drawn in groups of two and only the second sample will be in the output.\n\ntimelimit: The number of milliseconds to run the algorithm. The algorithm will return the samples it has collected when either nsamples samples have been collected or timelimit milliseconds have passed.  If time_limit is null then the algorithm will run until nsamples have been collected. This means it is possible that zero samples are returned.\n\nerroriftimeout: If erroriftimeout is true and the timelimit expires, an error will be raised. If erroriftimeout is false and the time limit expires, the samples that have been collected so far will be returned. 	This means it is possible that zero samples are returned.  Burn in samples will not be returned. If time_limit is null, this parameter does nothing.\n\nconsistent_with: the assignment that all samples must be consistent with (ie, Assignment(:A=>1) means all samples must have :A=1). Use to sample conditional distributions.\n\nmaxcachesize:  If null, cache as much as possible, otherwise cache at most \"maxcachesize\"  distributions\n\nvariableorder: variableorder determines the order of variables changed when generating a new sample. If null use a random order for every sample (this is different from updating the variables at random). Otherwise should be a list containing all the variables in the order they should be updated.\n\ninitialsample:  The inital assignment to variables to use.  If null, the initial sample is chosen by briefly running rand(bn, getweighted_dataframe).\n\n\n\n\n\n"
},

{
    "location": "#BayesNets.pattern-Tuple{Factor,Any}",
    "page": "Home",
    "title": "BayesNets.pattern",
    "category": "method",
    "text": "pattern(ϕ, [dims])\n\nReturn an array with the pattern of each dimension\'s state for all possible instances\n\n\n\n\n\n"
},

{
    "location": "#BayesNets.rand_bn_inference",
    "page": "Home",
    "title": "BayesNets.rand_bn_inference",
    "category": "function",
    "text": "rand_bn_inference(bn, num_query=2, num_evidence=3)\n\nGenerate a random inference state for a Bayesian Network with an evidence assignment sample uniformly over the chosen nodes\' domain.\n\n\n\n\n\n"
},

{
    "location": "#BayesNets.rand_cpd",
    "page": "Home",
    "title": "BayesNets.rand_cpd",
    "category": "function",
    "text": "rand_cpd(bn::DiscreteBayesNet, ncategories::Int, target::NodeName, parents::NodeNames=NodeName[])\n\nReturn a CategoricalCPD with the given number of categories with random categorical distributions\n\n\n\n\n\n"
},

{
    "location": "#BayesNets.rand_discrete_bn",
    "page": "Home",
    "title": "BayesNets.rand_discrete_bn",
    "category": "function",
    "text": "rand_discrete_bn(num_nodes16, max_num_parents=3,\n        max_num_states=5, connected=true)\n\nGenerate a random DiscreteBayesNet.\n\nCreates DiscreteBayesNet with num_nodes nodes, with each node having a random number of states and parents, up to max_num_parents and max_num_parents, respectively. If connected, each node (except the first) will be guaranteed at least one parent, making the graph connected.\n\n\n\n\n\n"
},

{
    "location": "#BayesNets.readxdsl-Tuple{AbstractString}",
    "page": "Home",
    "title": "BayesNets.readxdsl",
    "category": "method",
    "text": "readxdsl( filename::AbstractString )\n\nReturn a DiscreteBayesNet read from the xdsl file\n\n\n\n\n\n"
},

{
    "location": "#BayesNets.score_component-Tuple{ScoringFunction,CPD,DataFrame}",
    "page": "Home",
    "title": "BayesNets.score_component",
    "category": "method",
    "text": "score_component(a::ScoringFunction, cpd::CPD, data::DataFrame)\n\nExtract a Float64 score for a cpd given the data. One seeks to maximize the score.\n\n\n\n\n\n"
},

{
    "location": "#BayesNets.score_components-Union{Tuple{C}, Tuple{ScoringFunction,Array{C,1},DataFrame}} where C<:CPD",
    "page": "Home",
    "title": "BayesNets.score_components",
    "category": "method",
    "text": "score_components(a::ScoringFunction, cpd::CPD, data::DataFrame)\nscore_components(a::ScoringFunction, cpds::Vector{CPD}, data::DataFrame, cache::ScoreComponentCache)\n\nGet a list of score components for all cpds\n\n\n\n\n\n"
},

{
    "location": "#BayesNets.statistics-Tuple{Array{Array{Int64,1},1},AbstractArray{Int64,1},AbstractArray{Int64,2}}",
    "page": "Home",
    "title": "BayesNets.statistics",
    "category": "method",
    "text": "statistics(\n    parent_list::Vector{Vector{Int}},\n    ncategories::AbstractVector{Int},\n    data::AbstractMatrix{Int},\n    )\n\nComputes sufficient statistics from a discrete dataset for a Discrete Bayesian Net structure\n\nINPUT:     parents:         list of lists of parent indices         A variable with index i has ncategories[i]         and row in data[i,:]         No acyclicity checking is done     ncategories:         list of variable bin counts, or number of         discrete values the variable can take on, v ∈ {1 : ncategories[i]}     data:         table of discrete values [n×m]         where n is the number of nodes         and m is the number of samples\n\nOUTPUT:     N :: Vector{Matrix{Int}}         a sufficient statistics table for each variable         Variable with index i has statistics table N[i],         which is r × q where         r = ncategories[i] is the number of variable instantiations and         q is the number of parental instantiations of variable i\n\n    The r-values are ordered from 1 → ncategories[i]\n    The q-values are ordered in the same ordering as ind2sub() in Julia Base\n        Thus the instantiation of the first parent (by order given in parents[i])\n        is varied the fastest.\n\n    ex:\n        Variable 1 has parents 2 and 3, with r₁ = 2, r₂ = 2, r₃ = 3\n        q for variable 1 is q = r₂×r₃ = 6\n        N[1] will be a 6×2 matrix where:\n            N[1][1,1] is the number of time v₁ = 1, v₂ = 1, v₃ = 1\n            N[1][2,1] is the number of time v₁ = 1, v₂ = 2, v₃ = 1\n            N[1][3,1] is the number of time v₁ = 1, v₂ = 1, v₃ = 2\n            N[1][4,1] is the number of time v₁ = 1, v₂ = 2, v₃ = 2\n            N[1][5,1] is the number of time v₁ = 1, v₂ = 1, v₃ = 3\n            N[1][6,1] is the number of time v₁ = 1, v₂ = 2, v₃ = 3\n            N[1][6,2] is the number of time v₁ = 2, v₂ = 1, v₃ = 1\n            ...\n\nThis function uses sparse matrix black magic and was mercilessly stolen from Ed Schmerling.\n\n\n\n\n\n"
},

{
    "location": "#BayesNets.statistics-Tuple{Int64,AbstractArray{Int64,1},AbstractArray{Int64,1},AbstractArray{Int64,2}}",
    "page": "Home",
    "title": "BayesNets.statistics",
    "category": "method",
    "text": "statistics(\n    targetind::Int,\n    parents::AbstractVector{Int},\n    ncategories::AbstractVector{Int},\n    data::AbstractMatrix{Int}\n    )\n\noutputs a sufficient statistics table for the target variable that is r × q where r = ncategories[i] is the number of variable instantiations and q is the number of parental instantiations of variable i\n\nThe r-values are ordered from 1 → ncategories[i] The q-values are ordered in the same ordering as ind2sub() in Julia Base     Thus the instantiation of the first parent (by order given in parents[i])     is varied the fastest.\n\nex:     Variable 1 has parents 2 and 3, with r₁ = 2, r₂ = 2, r₃ = 3     q for variable 1 is q = r₂×r₃ = 6     N will be a 6×2 matrix where:         N[1,1] is the number of time v₁ = 1, v₂ = 1, v₃ = 1         N[2,1] is the number of time v₁ = 1, v₂ = 2, v₃ = 1         N[3,1] is the number of time v₁ = 1, v₂ = 1, v₃ = 2         N[4,1] is the number of time v₁ = 1, v₂ = 2, v₃ = 2         N[5,1] is the number of time v₁ = 1, v₂ = 1, v₃ = 3         N[6,1] is the number of time v₁ = 1, v₂ = 2, v₃ = 3         N[6,2] is the number of time v₁ = 2, v₂ = 1, v₃ = 1         ...\n\n\n\n\n\n"
},

{
    "location": "#BayesNets.sumout-Tuple{BayesNets.Table,Union{AbstractArray{Symbol,1}, Symbol}}",
    "page": "Home",
    "title": "BayesNets.sumout",
    "category": "method",
    "text": "sumout(t, v)\n\nTable marginalization\n\n\n\n\n\n"
},

{
    "location": "#BayesNets.table-Tuple{BayesNet{CategoricalCPD{Categorical{Float64}}},Symbol}",
    "page": "Home",
    "title": "BayesNets.table",
    "category": "method",
    "text": "table(bn::DiscreteBayesNet, name::NodeName)\n\nConstructs the CPD factor associated with the given node in the BayesNet\n\n\n\n\n\n"
},

{
    "location": "#Distributions.logpdf-Tuple{BayesNet,Dict{Symbol,Any}}",
    "page": "Home",
    "title": "Distributions.logpdf",
    "category": "method",
    "text": "The logpdf of a given assignment after conditioning on the values\n\n\n\n\n\n"
},

{
    "location": "#Distributions.ncategories-Tuple{BayesNet{CategoricalCPD{Categorical{Float64}}},Symbol}",
    "page": "Home",
    "title": "Distributions.ncategories",
    "category": "method",
    "text": "Distributions.ncategories(bn::DiscreteBayesNet, node::Symbol)\n\nReturn the number of categories for a node in the network.\n\n\n\n\n\n"
},

{
    "location": "#Distributions.pdf-Tuple{BayesNet,Dict{Symbol,Any}}",
    "page": "Home",
    "title": "Distributions.pdf",
    "category": "method",
    "text": "The pdf of a given assignment after conditioning on the values\n\n\n\n\n\n"
},

{
    "location": "#LightGraphs.has_edge-Tuple{BayesNet,Symbol,Symbol}",
    "page": "Home",
    "title": "LightGraphs.has_edge",
    "category": "method",
    "text": "Whether the BayesNet contains the given edge\n\n\n\n\n\n"
},

{
    "location": "#LightGraphs.neighbors-Tuple{BayesNet,Symbol}",
    "page": "Home",
    "title": "LightGraphs.neighbors",
    "category": "method",
    "text": "Returns all neighbors as a list of NodeNames.\n\n\n\n\n\n"
},

{
    "location": "#LinearAlgebra.normalize-Tuple{Factor,Vararg{Any,N} where N}",
    "page": "Home",
    "title": "LinearAlgebra.normalize",
    "category": "method",
    "text": "normalize!(ϕ, dims; p=1)\nnormalize!(ϕ; p=1)\n\nReturn a normalized copy of the factor so all instances of dims have (or the entire factors has) p-norm of 1\n\n\n\n\n\n"
},

{
    "location": "#StatsBase.fit-Tuple{Type{BayesNets.Table},DataFrame}",
    "page": "Home",
    "title": "StatsBase.fit",
    "category": "method",
    "text": "takes a list of observations of assignments represented as a DataFrame or a set of data samples (without :p), takes the unique assignments, and estimates the associated probability of each assignment based on its frequency of occurrence.\n\n\n\n\n\n"
},

{
    "location": "#StatsBase.fit-Union{Tuple{C}, Tuple{Type{BayesNet{C}},DataFrame,GraphSearchStrategy}} where C<:CPD",
    "page": "Home",
    "title": "StatsBase.fit",
    "category": "method",
    "text": "fit{C<:CPD}(::Type{BayesNet{C}}, ::DataFrame, ::GraphSearchStrategy)\n\nRun the graph search algorithm defined by GraphSearchStrategy\n\n\n\n\n\n"
},

{
    "location": "#StatsBase.fit-Union{Tuple{T}, Tuple{Type{BayesNet{T}},DataFrame,Tuple{Vararg{Pair{Symbol,Symbol},N} where N}}} where T<:CPD",
    "page": "Home",
    "title": "StatsBase.fit",
    "category": "method",
    "text": "fit(::Type{BayesNet}, data, edges)\n\nFit a Bayesian Net whose variables are the columns in data and whose edges are given in edges\n\nex: fit(DiscreteBayesNet, data, (:A=>:B, :C=>B))\n\n\n\n\n\n"
},

{
    "location": "#BayesNets.GibbsSamplerState",
    "page": "Home",
    "title": "BayesNets.GibbsSamplerState",
    "category": "type",
    "text": "Used to cache various things the Gibbs sampler needs\n\n\n\n\n\n"
},

{
    "location": "#Base.:*-Tuple{BayesNets.Table,BayesNets.Table}",
    "page": "Home",
    "title": "Base.:*",
    "category": "method",
    "text": "Table multiplication\n\n\n\n\n\n"
},

{
    "location": "#Base.Broadcast.broadcast!-Tuple{Any,Factor,Union{AbstractArray{Symbol,1}, Symbol},Any}",
    "page": "Home",
    "title": "Base.Broadcast.broadcast!",
    "category": "method",
    "text": "broadcast!(f, ϕ, dims, values)\n\nBroadcast a vector (or array of vectors) across the dimension(s) dims Each vector in values will be broadcast acroos its respective dimension in dims\n\nSee Base.broadcast for more info.\n\n\n\n\n\n"
},

{
    "location": "#Base.Broadcast.broadcast-Tuple{Any,Factor,Union{AbstractArray{Symbol,1}, Symbol},Any}",
    "page": "Home",
    "title": "Base.Broadcast.broadcast",
    "category": "method",
    "text": "broadcast(f, ϕ, dims, values)\n\nBroadcast a vector (or array of vectors) across the dimension(s) dims Each vector in values will be broadcast acroos its respective dimension in dims\n\nSee Base.broadcast for more info.\n\n\n\n\n\n"
},

{
    "location": "#Base.Sort.partialsort-Tuple{BayesNets.Table,Dict{Symbol,Any}}",
    "page": "Home",
    "title": "Base.Sort.partialsort",
    "category": "method",
    "text": "Given a Table, extract the rows which match the given assignment\n\n\n\n\n\n"
},

{
    "location": "#Base.count-Tuple{BayesNet{CategoricalCPD{Categorical{Float64}}},Symbol,DataFrame}",
    "page": "Home",
    "title": "Base.count",
    "category": "method",
    "text": "Base.count(bn::BayesNet, name::NodeName, data::DataFrame)\n\nreturns a table containing all observed assignments and their corresponding counts\n\n\n\n\n\n"
},

{
    "location": "#Base.eltype-Tuple{Factor}",
    "page": "Home",
    "title": "Base.eltype",
    "category": "method",
    "text": "Returns Float64\n\n\n\n\n\n"
},

{
    "location": "#Base.getindex-Tuple{Factor,Dict{Symbol,Any}}",
    "page": "Home",
    "title": "Base.getindex",
    "category": "method",
    "text": "getindex(ϕ, a)\n\nGet values with dimensions consistent with an assignment. Colons select entire dimension.\n\n\n\n\n\n"
},

{
    "location": "#Base.in-Tuple{Symbol,Factor}",
    "page": "Home",
    "title": "Base.in",
    "category": "method",
    "text": "in(dim, ϕ) -> Bool\n\nReturn true if dim is in the Factor ϕ\n\n\n\n\n\n"
},

{
    "location": "#Base.indexin-Tuple{Symbol,Factor}",
    "page": "Home",
    "title": "Base.indexin",
    "category": "method",
    "text": "indexin(dims, ϕ)\n\nReturn the index of dimension dim in ϕ, or 0 if not in ϕ.\n\n\n\n\n\n"
},

{
    "location": "#Base.join",
    "page": "Home",
    "title": "Base.join",
    "category": "function",
    "text": "join(op, ϕ1, ϕ2, :outer, [v0])\njoin(op, ϕ1, ϕ2, :inner, [reducehow], [v0])\n\nPerforms either an inner or outer join,\n\nAn outer join returns a Factor with the union of the two dimensions The two factors are combined with Base.broadcast(op, ...)\n\nAn inner join keeps the dimensions in common between the two Factors. The extra dimensions are reduced with     reducedim(reducehow, ...) and then the two factors are combined with:     op(ϕ1[commondims].potential, ϕ2[commondims].potential)\n\n\n\n\n\n"
},

{
    "location": "#Base.names-Tuple{BayesNet}",
    "page": "Home",
    "title": "Base.names",
    "category": "method",
    "text": "Returns the ordered list of NodeNames\n\n\n\n\n\n"
},

{
    "location": "#Base.names-Tuple{Factor}",
    "page": "Home",
    "title": "Base.names",
    "category": "method",
    "text": "Names of each dimension\n\n\n\n\n\n"
},

{
    "location": "#Base.push!-Tuple{Factor,Symbol,Int64}",
    "page": "Home",
    "title": "Base.push!",
    "category": "method",
    "text": "Appends a new dimension to a Factor\n\n\n\n\n\n"
},

{
    "location": "#Base.rand-Tuple{BayesNet,BayesNetSampler,Integer}",
    "page": "Home",
    "title": "Base.rand",
    "category": "method",
    "text": "Generates a DataFrame containing a dataset of variable assignments. Always return a DataFrame with nsamples rows.\n\n\n\n\n\n"
},

{
    "location": "#Base.rand-Tuple{BayesNet,BayesNetSampler}",
    "page": "Home",
    "title": "Base.rand",
    "category": "method",
    "text": "Returns an assignment sampled from the bn using the provided sampler\n\n\n\n\n\n"
},

{
    "location": "#Base.rand-Tuple{BayesNet,GibbsSampler,Integer}",
    "page": "Home",
    "title": "Base.rand",
    "category": "method",
    "text": "Implements Gibbs sampling. (https://en.wikipedia.org/wiki/Gibbs_sampling) For finite variables, the posterior distribution is sampled by building the exact distribution. For continuous variables, the posterior distribution is sampled using Metropolis Hastings MCMC. Discrete variables with infinite support are currently not supported. The Gibbs Sampler only supports CPDs that return Univariate Distributions. (CPD{D<:UnivariateDistribution})\n\nSampling requires a GibbsSampler object which contains the parameters for Gibbs sampling. See the GibbsSampler documentation for parameter details.\n\n\n\n\n\n"
},

{
    "location": "#Base.similar-Tuple{Factor}",
    "page": "Home",
    "title": "Base.similar",
    "category": "method",
    "text": "similar(ϕ)\n\nReturn a factor similar to ϕ with unitialized values\n\n\n\n\n\n"
},

{
    "location": "#Base.size-Tuple{Factor}",
    "page": "Home",
    "title": "Base.size",
    "category": "method",
    "text": "size(ϕ, [dims...])\n\nReturns a tuple of the dimensions of ϕ\n\n\n\n\n\n"
},

{
    "location": "#Base.write-Tuple{IO,MIME{Symbol(\"text/plain\")},BayesNet{CategoricalCPD{Categorical{Float64}}}}",
    "page": "Home",
    "title": "Base.write",
    "category": "method",
    "text": "write(io, text/plain, bn)\n\nWrites a text file containing the sufficient statistics for a discrete Bayesian network. This was inspired by the format listed in Appendix A of \"Correlated Encounter Model for Cooperative Aircraft in the National Airspace System Version 1.0\" by Mykel Kochenderfer.\n\nThe text file contains the following parameters:\n\nvariable labels: A space-delimited list specifies the variable labels, which are symbols.                  The ordering of the variables in this list determines the ordering of the variables                  in the other tables. Note that the ordering of the variable labels is not                  necessarily topological.\ngraphical structure: A binary matrix is used to represent the graphical structure of the Bayesian                  network. A 1 in the ith row and jth column means that there is a directed edge                  from the ith varible to the jth variable in the Bayesian network. The ordering                  of the variables are as defined in the variable labels section of the file.                  The entries are 0 or 1 and are not delimited.\nvariable instantiations: A list of integers specifying the number of instantiations for each variable.                  The list is space-delimited.\nsufficient statistics: A list of space-delimited integers Pₐⱼₖ  which specifies the sufficient statistics.                  The array is ordered first by increasing k, then increasing j, then increasing i.                  The variable ordering is defined in the variable labels section of the file.                  The list is a flattened matrices, where each matrix is rₐ × qₐ where rₐ is the number of                  instantiations of variable a and qₐ is the number of instantiations of the parents of                  variable a. The ordering is the same as the ordering of the distributions vector in                  the CategoricalCPD type.                  The entires in Pₐⱼₖ are floating point probability values.\n\nFor example, the network Success -> Forecast with Success ∈ [1, 2] and P(1) = 0.2, P(2) = 0.8 and Forecast ∈ [1, 2, 3] with     P(1 | 1) = 0.4, P(2 | 1) = 0.4, P(3 | 1) = 0.2     P(1 | 2) = 0.1, P(2 | 2) = 0.3, P(3 | 2) = 0.6\n\nIs output as:\n\nSuccess Forecast 01 00 2 3 2 4 4 1 3\n\n\n\n\n\n"
},

{
    "location": "#BayesNets._evidence_lambda-Tuple{Symbol,Dict{Symbol,Any},Int64}",
    "page": "Home",
    "title": "BayesNets._evidence_lambda",
    "category": "method",
    "text": "Get the lambda-message to itself for an evidence node. If it isn\'t an evidence node, this will break\n\n\n\n\n\n"
},

{
    "location": "#BayesNets._get_parent_indeces-Tuple{AbstractArray{Symbol,1},DataFrame}",
    "page": "Home",
    "title": "BayesNets._get_parent_indeces",
    "category": "method",
    "text": "score_component(a::ScoringFunction, cpd::CPD, data::DataFrame, cache::ScoreComponentCache)\n\nAs score_component(ScoringFunction, cpd, data), but returns pre-computed values from the cache if they exist, and populates the cache if they don\'t\n\n\n\n\n\n"
},

{
    "location": "#BayesNets._init_gibbs_sample",
    "page": "Home",
    "title": "BayesNets._init_gibbs_sample",
    "category": "function",
    "text": "_init_gibbs_sample(bn, evidence)\n\nA random sample of non-evidence nodes uniformly over their domain\n\n\n\n\n\n"
},

{
    "location": "#BayesNets.duplicate-Tuple{Array,Tuple{Vararg{Int64,N}} where N}",
    "page": "Home",
    "title": "BayesNets.duplicate",
    "category": "method",
    "text": "duplicate(A, dims)\n\nRepeates an array only through higer dimensions dims.\n\nCustom version of repeate, but only outer repetition, and only duplicates the array for the number of times specified in dims for dimensions greater than ndims(A). If dims is empty, returns a copy of A.\n\njulia> duplicate(collect(1:3), 2)\n3×2 Array{Int64,2}:\n 1  1\n 2  2\n 3  3\n\njulia> duplicate([1 3; 2 4], 3)\n2×2×3 Array{Int64,3}:\n[:, :, 1] =\n 1  3\n 2  4\n\n[:, :, 2] =\n 1  3\n 2  4\n\n[:, :, 3] =\n 1  3\n 2  4\n\n\n\n\n\n"
},

{
    "location": "#BayesNets.eval_mb_cpd-Tuple{Symbol,Int64,Dict{Symbol,Any},Array{T,1} where T}",
    "page": "Home",
    "title": "BayesNets.eval_mb_cpd",
    "category": "method",
    "text": "eval_mb_cpd(node, ncategories, assignment, mb_cpds)\n\nReturn the potential of all instances of a node given its markove blanket as a WeightVec:     P(node | panode) * Prod (c in children) P(c | pac)\n\nTrys out all possible values of node (assumes categorical) Assignment should have values for all in the Markov blanket, including the variable itself.\n\n\n\n\n\n"
},

{
    "location": "#BayesNets.get_finite_distribution!-Tuple{BayesNets.GibbsSamplerState,Symbol,Dict{Symbol,Any},AbstractArray}",
    "page": "Home",
    "title": "BayesNets.get_finite_distribution!",
    "category": "method",
    "text": "Helper to sampleposteriorfinite\n\nModifies a and gss\n\n\n\n\n\n"
},

{
    "location": "#BayesNets.get_mb_cpds-Tuple{BayesNet,Symbol}",
    "page": "Home",
    "title": "BayesNets.get_mb_cpds",
    "category": "method",
    "text": "Get the cpd\'s of a node and its children\n\n\n\n\n\n"
},

{
    "location": "#BayesNets.get_weighted_dataframe-Tuple{BayesNet,Integer,Dict{Symbol,Any}}",
    "page": "Home",
    "title": "BayesNets.get_weighted_dataframe",
    "category": "method",
    "text": "A dataset of variable assignments is obtained with an additional column of weights in accordance with the likelihood of each assignment.\n\n\n\n\n\n"
},

{
    "location": "#BayesNets.gibbs_sample_main_loop-Tuple{BayesNets.GibbsSamplerState,Integer,Integer,Dict{Symbol,Any},Dict{Symbol,Any},Union{Nothing, Array{Symbol,1}},Union{Nothing, Int64}}",
    "page": "Home",
    "title": "BayesNets.gibbs_sample_main_loop",
    "category": "method",
    "text": "The main loop associated with Gibbs sampling Returns a data frame with nsamples samples\n\nSupports the various parameters supported by gibbssample Refer to gibbssample for parameter meanings\n\n\n\n\n\n"
},

{
    "location": "#BayesNets.ndgrid_fill!-NTuple{4,Any}",
    "page": "Home",
    "title": "BayesNets.ndgrid_fill!",
    "category": "method",
    "text": "???\n\n\n\n\n\n"
},

{
    "location": "#BayesNets.reducedim",
    "page": "Home",
    "title": "BayesNets.reducedim",
    "category": "function",
    "text": "reducedim(op, ϕ, dims, [v0])\n\nReduce dimensions dims in ϕ using function op.\n\n\n\n\n\n"
},

{
    "location": "#BayesNets.sample_posterior!-Tuple{BayesNets.GibbsSamplerState,Symbol,Dict{Symbol,Any}}",
    "page": "Home",
    "title": "BayesNets.sample_posterior!",
    "category": "method",
    "text": "set a[varname] ~ P(varname | not varname)\n\nModifies a and caches in gss\n\n\n\n\n\n"
},

{
    "location": "#BayesNets.sample_posterior_continuous!-Tuple{BayesNets.GibbsSamplerState,Symbol,Dict{Symbol,Any},Distribution{Univariate,Continuous}}",
    "page": "Home",
    "title": "BayesNets.sample_posterior_continuous!",
    "category": "method",
    "text": "Implements Metropolis-Hastings with a normal distribution proposal with mean equal to the previous value of the variable \"varname\" and stddev equal to 10 times the standard deviation of the distribution of the target variable given its parents ( var_distribution should be get(bn, varname)(a) )\n\nMH will go through nsamples iterations.  If no proposal is accepted, the original value will remain\n\nThis function expects that a[varname] is within the support of the distribution, it will not check to make sure this is true\n\nHelper to sample_posterior Should only be used to sampling continuous distributions\n\nset a[varname] ~ P(varname | not varname)\n\nModifies a and caches in gss\n\n\n\n\n\n"
},

{
    "location": "#BayesNets.sample_posterior_finite!-Tuple{BayesNets.GibbsSamplerState,Symbol,Dict{Symbol,Any},AbstractArray}",
    "page": "Home",
    "title": "BayesNets.sample_posterior_finite!",
    "category": "method",
    "text": "Helper to sample_posterior Should only be called if the variable associated with varname is discrete\n\nset a[varname] ~ P(varname | not varname)\n\nModifies both a and gss\n\n\n\n\n\n"
},

{
    "location": "#BayesNets.sample_weighted_dataframe!-Tuple{Dict{Symbol,Any},DataFrame}",
    "page": "Home",
    "title": "BayesNets.sample_weighted_dataframe!",
    "category": "method",
    "text": "Chooses a sample at random from a weighted dataframe\n\n\n\n\n\n"
},

{
    "location": "#LightGraphs.dst-Tuple{Pair{Int64,Int64}}",
    "page": "Home",
    "title": "LightGraphs.dst",
    "category": "method",
    "text": "Returns all descendants as a list of NodeNames.\n\n\n\n\n\n"
},

{
    "location": "#LinearAlgebra.normalize!-Tuple{BayesNets.Table}",
    "page": "Home",
    "title": "LinearAlgebra.normalize!",
    "category": "method",
    "text": "Table normalization Ensures that the :p column sums to one\n\n\n\n\n\n"
},

{
    "location": "#LinearAlgebra.normalize!-Tuple{Factor,Union{AbstractArray{Symbol,1}, Symbol}}",
    "page": "Home",
    "title": "LinearAlgebra.normalize!",
    "category": "method",
    "text": "normalize!(ϕ, dims; p=1)\nnormalize!(ϕ; p=1)\n\nNormalize the factor so all instances of dims have (or the entire factors has) p-norm of 1\n\n\n\n\n\n"
},

{
    "location": "#Random.rand!-Tuple{Dict{Symbol,Any},BayesNet,BayesNetSampler}",
    "page": "Home",
    "title": "Random.rand!",
    "category": "method",
    "text": "Overwrites assignment with a sample from bn using the sampler\n\n\n\n\n\n"
},

{
    "location": "#Random.rand!-Tuple{Dict{Symbol,Any},BayesNet,GibbsSampler}",
    "page": "Home",
    "title": "Random.rand!",
    "category": "method",
    "text": "NOTE: this is inefficient. Use rand(bn, GibbsSampler, nsamples) whenever you can\n\n\n\n\n\n"
},

{
    "location": "#Random.rand!-Tuple{Factor}",
    "page": "Home",
    "title": "Random.rand!",
    "category": "method",
    "text": "rand!(ϕ)\n\nFill with random values\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [BayesNets]\nOrder = [:type, :function]"
},

]}
