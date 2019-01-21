var documenterSearchIndex = {"docs": [

{
    "location": "#NaiveBayes.HybridNB",
    "page": "Home",
    "title": "NaiveBayes.HybridNB",
    "category": "type",
    "text": "Initialize a HybridNB model with continuous and/or discrete features\n\nConstructors\n\nHybridNB(labels::AbstractVector, kde_names::AbstractVector, discrete_names::AbstractVector)\nHybridNB(labels::AbstractVector, kde_names::AbstractVector)\nHybridNB(labels::AbstractVector, num_kde::Int, num_discrete::Int)\n\nArguments\n\nlabels : An AbstractVector{Any} of feature labels\nkde_names : An AbstractVector{Any} of the names of continuous features\ndiscrete_names : An AbstractVector{Any} of the names of discrete features\nnum_kde : Number of continuous features\nnum_discrete : Number of discrete features\n\n\n\n\n\n"
},

{
    "location": "#NaiveBayes.HybridNB-Union{Tuple{Array{C,1}}, Tuple{T}, Tuple{C}, Tuple{Array{C,1},Type{T}}} where T where C<:Integer",
    "page": "Home",
    "title": "NaiveBayes.HybridNB",
    "category": "method",
    "text": "HybridNB(labels::Vector{Int64}) -> model_h\n\nHybridNB(labels::Vector{Int64}, AstractString) -> model_h\n\nA constructor for both types of features\n\n\n\n\n\n"
},

{
    "location": "#NaiveBayes.MultinomialNB-Union{Tuple{C}, Tuple{Array{C,1},Int64}} where C",
    "page": "Home",
    "title": "NaiveBayes.MultinomialNB",
    "category": "method",
    "text": "Multinomial Naive Bayes classifier\n\nclasses : array of objects     Class names n_vars : Int64     Number of variables in observations alpha : Number (optional, default 1)     Smoothing parameter. E.g. if alpha equals 1, each variable in each class     is believed to have 1 observation by default\n\n\n\n\n\n"
},

{
    "location": "#NaiveBayes.NBModel",
    "page": "Home",
    "title": "NaiveBayes.NBModel",
    "category": "type",
    "text": "Base type for Naive Bayes models. Inherited classes should have at least following fields:  ccounts::Dict{C, Int64} - count of ocurrences of each class  nobs::Int64             - total number of observations\n\n\n\n\n\n"
},

{
    "location": "#NaiveBayes.predict_logprobs-Union{Tuple{N}, Tuple{U}, Tuple{T}, Tuple{HybridNB,Dict{N,Array{T,1}},Dict{N,Array{U,1}}}} where N where U<:Integer where T<:AbstractFloat",
    "page": "Home",
    "title": "NaiveBayes.predict_logprobs",
    "category": "method",
    "text": "predict_logprobs(m::HybridNB, features_c::Vector{Vector{Float64}, features_d::Vector{Vector{Int})\n\nReturn the log-probabilities for each column of X, where each row is the class\n\n\n\n\n\n"
},

{
    "location": "#NaiveBayes.predict_logprobs-Union{Tuple{V}, Tuple{NBModel,Array{V,1}}} where V<:Number",
    "page": "Home",
    "title": "NaiveBayes.predict_logprobs",
    "category": "method",
    "text": "Predict log probabilities for all classes\n\n\n\n\n\n"
},

{
    "location": "#NaiveBayes.predict_logprobs-Union{Tuple{V}, Tuple{NBModel,Array{V,2}}} where V<:Number",
    "page": "Home",
    "title": "NaiveBayes.predict_logprobs",
    "category": "method",
    "text": "Predict log probabilities for all classes\n\n\n\n\n\n"
},

{
    "location": "#NaiveBayes.predict_proba-Union{Tuple{N}, Tuple{U}, Tuple{T}, Tuple{HybridNB,Dict{N,Array{T,1}},Dict{N,Array{U,1}}}} where N where U<:Integer where T<:AbstractFloat",
    "page": "Home",
    "title": "NaiveBayes.predict_proba",
    "category": "method",
    "text": "predict_proba{V<:Number}(m::HybridNB, f_c::Vector{Vector{Float64}}, f_d::Vector{Vector{Int64}})\n\nPredict log-probabilities for the input features. Returns tuples of predicted class and its log-probability estimate.\n\n\n\n\n\n"
},

{
    "location": "#NaiveBayes.predict_proba-Union{Tuple{V}, Tuple{NBModel,Array{V,2}}} where V<:Number",
    "page": "Home",
    "title": "NaiveBayes.predict_proba",
    "category": "method",
    "text": "Predict logprobs, return tuples of predicted class and its logprob\n\n\n\n\n\n"
},

{
    "location": "#NaiveBayes.restructure_matrix-Union{Tuple{Array{T,2}}, Tuple{T}} where T<:Number",
    "page": "Home",
    "title": "NaiveBayes.restructure_matrix",
    "category": "method",
    "text": "restructure_matrix(M::Matrix) -> V::Dict{Symbol, Vector}\n\nRestructure a matrix as vector of vectors\n\n\n\n\n\n"
},

{
    "location": "#NaiveBayes.to_matrix-Union{Tuple{Dict{N,Array{T,1}}}, Tuple{N}, Tuple{T}} where N where T<:Number",
    "page": "Home",
    "title": "NaiveBayes.to_matrix",
    "category": "method",
    "text": "to_matrix(D::Dict{Symbol, Vector}}) -> M::Matrix\n\nconvert a dictionary of vectors into a matrix\n\n\n\n\n\n"
},

{
    "location": "#NaiveBayes.train-Union{Tuple{N}, Tuple{U}, Tuple{T}, Tuple{C}, Tuple{Type{HybridNB},Dict{N,Array{T,1}},Dict{N,Array{U,1}},Array{C,1}}} where N where U<:Integer where T<:AbstractFloat where C",
    "page": "Home",
    "title": "NaiveBayes.train",
    "category": "method",
    "text": "train(HybridNB, continuous, discrete, labels) -> model2\n\n\n\n\n\n"
},

{
    "location": "#StatsBase.fit-Union{Tuple{N}, Tuple{U}, Tuple{T}, Tuple{C}, Tuple{HybridNB,Dict{N,Array{T,1}},Dict{N,Array{U,1}},Array{C,1}}} where N where U<:Integer where T<:AbstractFloat where C",
    "page": "Home",
    "title": "StatsBase.fit",
    "category": "method",
    "text": "fit(m::HybridNB, f_c::Vector{Vector{Float64}}, f_d::Vector{Vector{Int64}}, labels::Vector{Int64})\n\nTrain NB model with discrete and continuous features by estimating P(x⃗|c)\n\n\n\n\n\n"
},

{
    "location": "#StatsBase.fit-Union{Tuple{T}, Tuple{C}, Tuple{HybridNB,Array{T,2},Array{C,1}}} where T<:AbstractFloat where C",
    "page": "Home",
    "title": "StatsBase.fit",
    "category": "method",
    "text": "fit(m::HybridNB, f_c::Matrix{Float64}, labels::Vector{Int64})\n\nTrain NB model with continuous features only\n\n\n\n\n\n"
},

{
    "location": "#StatsBase.predict-Union{Tuple{N}, Tuple{U}, Tuple{T}, Tuple{HybridNB,Dict{N,Array{T,1}},Dict{N,Array{U,1}}}} where N where U<:Integer where T<:AbstractFloat",
    "page": "Home",
    "title": "StatsBase.predict",
    "category": "method",
    "text": "predict(m::HybridNB, f_c::Vector{Vector{Float64}}, f_d::Vector{Vector{Int64}}) -> labels\n\nPredict hybrid naive bayes for continuos featuers only\n\n\n\n\n\n"
},

{
    "location": "#StatsBase.predict-Union{Tuple{T}, Tuple{HybridNB,Array{T,2}}} where T<:Number",
    "page": "Home",
    "title": "StatsBase.predict",
    "category": "method",
    "text": "Predict kde naive bayes for continuos featuers only\n\n\n\n\n\n"
},

{
    "location": "#NaiveBayes.ePDF",
    "page": "Home",
    "title": "NaiveBayes.ePDF",
    "category": "type",
    "text": "a wrapper around key value pairs for a discrete probability distribution \n\n\n\n\n\n"
},

{
    "location": "#NaiveBayes.ePDF-Union{Tuple{AbstractArray{T,1}}, Tuple{T}} where T<:Integer",
    "page": "Home",
    "title": "NaiveBayes.ePDF",
    "category": "method",
    "text": "Constructor of ePDF \n\n\n\n\n\n"
},

{
    "location": "#NaiveBayes.logprob_x_given_c-Union{Tuple{C}, Tuple{GaussianNB,Array{Float64,1},C}} where C",
    "page": "Home",
    "title": "NaiveBayes.logprob_x_given_c",
    "category": "method",
    "text": "Calculate log P(x|C)\n\n\n\n\n\n"
},

{
    "location": "#NaiveBayes.logprob_x_given_c-Union{Tuple{C}, Tuple{GaussianNB,Array{Float64,2},C}} where C",
    "page": "Home",
    "title": "NaiveBayes.logprob_x_given_c",
    "category": "method",
    "text": "Calculate log P(x|C)\n\n\n\n\n\n"
},

{
    "location": "#NaiveBayes.logprob_x_given_c-Union{Tuple{C}, Tuple{MultinomialNB,Array{Int64,1},C}} where C",
    "page": "Home",
    "title": "NaiveBayes.logprob_x_given_c",
    "category": "method",
    "text": "Calculate log P(x|C)\n\n\n\n\n\n"
},

{
    "location": "#NaiveBayes.logprob_x_given_c-Union{Tuple{C}, Tuple{MultinomialNB,Array{Int64,2},C}} where C",
    "page": "Home",
    "title": "NaiveBayes.logprob_x_given_c",
    "category": "method",
    "text": "Calculate log P(x|C)\n\n\n\n\n\n"
},

{
    "location": "#NaiveBayes.num_samples-Union{Tuple{N}, Tuple{U}, Tuple{T}, Tuple{HybridNB,Dict{N,Array{T,1}},Dict{N,Array{U,1}}}} where N where U<:Integer where T<:AbstractFloat",
    "page": "Home",
    "title": "NaiveBayes.num_samples",
    "category": "method",
    "text": "compute the number of samples \n\n\n\n\n\n"
},

{
    "location": "#NaiveBayes.probability-Tuple{NaiveBayes.ePDF,Integer}",
    "page": "Home",
    "title": "NaiveBayes.probability",
    "category": "method",
    "text": "query the ePDF to get the probability of n\n\n\n\n\n\n"
},

{
    "location": "#NaiveBayes.sum_log_x_given_c!-Union{Tuple{N}, Tuple{U}, Tuple{T}, Tuple{Array{Float64,1},Array{Float64,1},HybridNB,Dict{N,Array{T,1}},Dict{N,Array{U,1}},Any}} where N where U<:Integer where T<:AbstractFloat",
    "page": "Home",
    "title": "NaiveBayes.sum_log_x_given_c!",
    "category": "method",
    "text": "computes log[P(x⃗ⁿ|c)] ≈ ∑ᵢ log[p(xⁿᵢ|c)] \n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [NaiveBayes]\nOrder = [:type, :function]"
},

]}
