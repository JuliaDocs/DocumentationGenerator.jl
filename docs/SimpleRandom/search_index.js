var documenterSearchIndex = {"docs": [

{
    "location": "#SimpleRandom.RV",
    "page": "Home",
    "title": "SimpleRandom.RV",
    "category": "type",
    "text": "RV represents a discrete random variable with finite support.\n\n\n\n\n\n"
},

{
    "location": "#SimpleRandom.Bernoulli_RV-Union{Tuple{T}, Tuple{T}} where T",
    "page": "Home",
    "title": "SimpleRandom.Bernoulli_RV",
    "category": "method",
    "text": "Bernoulli(p) makes a single coin flip RV.\n\n\n\n\n\n"
},

{
    "location": "#SimpleRandom.Binomial_RV-Union{Tuple{T}, Tuple{S}, Tuple{S,T}} where T where S<:Integer",
    "page": "Home",
    "title": "SimpleRandom.Binomial_RV",
    "category": "method",
    "text": "Binomial_RV(n,p) returns a binomial random variable.\n\n\n\n\n\n"
},

{
    "location": "#SimpleRandom.E-Union{Tuple{RV{S,T}}, Tuple{T}, Tuple{S}} where T where S",
    "page": "Home",
    "title": "SimpleRandom.E",
    "category": "method",
    "text": "E(X) is the expected value of X.\n\n\n\n\n\n"
},

{
    "location": "#SimpleRandom.Uniform_RV-Tuple{Int64}",
    "page": "Home",
    "title": "SimpleRandom.Uniform_RV",
    "category": "method",
    "text": "Uniform_RV(n) returns the uniform distribution on {1,2,...,n}.\n\n\n\n\n\n"
},

{
    "location": "#SimpleRandom.Var-Union{Tuple{RV{S,T}}, Tuple{T}, Tuple{S}} where T where S",
    "page": "Home",
    "title": "SimpleRandom.Var",
    "category": "method",
    "text": "Var(Y) is the variance of Y.\n\n\n\n\n\n"
},

{
    "location": "#SimpleRandom.binom_rv",
    "page": "Home",
    "title": "SimpleRandom.binom_rv",
    "category": "function",
    "text": "binom_rv(n,p) generates a random binomial random value. p defaults to 0.5.\n\n\n\n\n\n"
},

{
    "location": "#SimpleRandom.exp_rv",
    "page": "Home",
    "title": "SimpleRandom.exp_rv",
    "category": "function",
    "text": "exp_rv(theta) returns an exponential random value with mean theta (which defaults to 1.0).\n\n\n\n\n\n"
},

{
    "location": "#SimpleRandom.poisson_rv",
    "page": "Home",
    "title": "SimpleRandom.poisson_rv",
    "category": "function",
    "text": "poisson_rv(lambda) generates a Poisson random value with mean lamba (which defaults to 1.0).\n\n\n\n\n\n"
},

{
    "location": "#SimpleRandom.probs-Tuple{RV}",
    "page": "Home",
    "title": "SimpleRandom.probs",
    "category": "method",
    "text": "probs(X::RV) returns an iterator of the probabilities associated with the values in X.\n\n\n\n\n\n"
},

{
    "location": "#SimpleRandom.random_choice-Tuple{RV}",
    "page": "Home",
    "title": "SimpleRandom.random_choice",
    "category": "method",
    "text": "random_choice(X) for a random variable X returns a value of X according to its probability distribution. That is, the probability a value v is returned is X[v].\n\n\n\n\n\n"
},

{
    "location": "#SimpleRandom.random_choice-Union{Tuple{Array{T,1}}, Tuple{T}} where T<:Real",
    "page": "Home",
    "title": "SimpleRandom.random_choice",
    "category": "method",
    "text": "random_choice(weights) randomly chooses a value from 1 to n, where n is the number of elements in weights. The probability that k is chosen is proportional to weights[k]. The weights must be nonnegative and not all zero.\n\nrandom_choice(dict) choose a random key k from dict with weight proportional to dict[k]. Thus, dict must be of type Dict{S, T<:Real}.\n\n\n\n\n\n"
},

{
    "location": "#SimpleRandom.random_subset-Tuple{Union{BitSet, Set}}",
    "page": "Home",
    "title": "SimpleRandom.random_subset",
    "category": "method",
    "text": "random_subset is used to create random subsets as follows:\n\nrandom_subset(A): random subset of A with each element\n\nchosen with probability 1/2.\n\nrandom_subset(A,k): random k-element subset of A.\nrandom_subset(n): random subset of 1:n.\nrandom_subset(n,k): random k-element subset of 1:n.\n\n\n\n\n\n"
},

{
    "location": "#SimpleRandom.random_unit_vector-Tuple{Int64}",
    "page": "Home",
    "title": "SimpleRandom.random_unit_vector",
    "category": "method",
    "text": "random_unit_vector(d) returns a random d-dimensional unit vector.\n\n\n\n\n\n"
},

{
    "location": "#SimpleRandom.report-Tuple{RV}",
    "page": "Home",
    "title": "SimpleRandom.report",
    "category": "method",
    "text": "report(X) prints out a list of the values of X and their associated probabilities\n\n\n\n\n\n"
},

{
    "location": "#SimpleRandom.validate!-Tuple{RV}",
    "page": "Home",
    "title": "SimpleRandom.validate!",
    "category": "method",
    "text": "validate!(X) ensures that the probabilies of the values in X sum to one. If not, they are rescaled.\n\n\n\n\n\n"
},

{
    "location": "#SimpleRandom.vals-Tuple{RV}",
    "page": "Home",
    "title": "SimpleRandom.vals",
    "category": "method",
    "text": "vals(X::RV) returns an iterator of the values this random variable can take. Use X[v] to get the associate probability of the value v.\n\n\n\n\n\n"
},

{
    "location": "#Base.:*-Tuple{Number,RV}",
    "page": "Home",
    "title": "Base.:*",
    "category": "method",
    "text": "a*X: scalar multiple of the random variable X.\n\n\n\n\n\n"
},

{
    "location": "#Base.:+-Tuple{RV,RV}",
    "page": "Home",
    "title": "Base.:+",
    "category": "method",
    "text": "X+Y: sum of independent random variables.\n\n\n\n\n\n"
},

{
    "location": "#Base.:--Tuple{RV,RV}",
    "page": "Home",
    "title": "Base.:-",
    "category": "method",
    "text": "X-Y: difference of independent random variables.\n\n\n\n\n\n"
},

{
    "location": "#Base.:--Union{Tuple{RV{S,T}}, Tuple{T}, Tuple{S}} where T where S",
    "page": "Home",
    "title": "Base.:-",
    "category": "method",
    "text": "-X: negative of a random variable.\n\n\n\n\n\n"
},

{
    "location": "#Base.getindex-Union{Tuple{T}, Tuple{S}, Tuple{RV{S,T},S}} where T where S",
    "page": "Home",
    "title": "Base.getindex",
    "category": "method",
    "text": "X[v] returns the probability of v in the random variable X. Note that we validate X (with validate!) before retrieving the value.\n\n\n\n\n\n"
},

{
    "location": "#Base.length-Tuple{RV}",
    "page": "Home",
    "title": "Base.length",
    "category": "method",
    "text": "length(X::RV) returns the number of values in the random variable X.\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [SimpleRandom]\nOrder = [:type, :function]"
},

]}
