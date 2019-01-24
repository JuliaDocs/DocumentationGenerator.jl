var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#NaiveBayes.jl-1",
    "page": "Readme",
    "title": "NaiveBayes.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov.io)Naive Bayes classifier. Currently 3 types of NB are supported:MultinomialNB - Assumes variables have a multinomial distribution. Good for text classification. See examples/nums.jl for usage.\nGaussianNB - Assumes variables have a multivariate normal distribution. Good for real-valued data. See examples/iris.jl for usage.\nHybridNB - A hybrid empirical naive Bayes model for a mixture of continuous and discrete features. The continuous features are estimated using Kernel Density Estimation.Note: fit/predict methods take Dict{Symbol/AstractString, Vector} rather than a Matrix. Also, discrete features must be integers while continuous features must be floats. If all features are continuous Matrix input is supported.Since GaussianNB models multivariate distribution, it\'s not really a \"naive\" classifier (i.e. no independence assumption is made), so the name may change in the future.As a subproduct, this package also provides a DataStats type that may be used for incremental calculation of common data statistics such as mean and covariance matrix. See test/datastatstest.jl for a usage example.###Examples:Continuous and discrete features as Dict{Symbol, Vector}}\n```julia  fc1 = randn(10)  fc2 = randn(10)  fd1 = rand(1:5, 10)  fd2 = randn(3:7, 10)  trainingfeaturescontinuous = Dict{Symbol, Vector{Float64}}(:c1=>fc1, :c2=>fc2)  trainingfeaturesdiscrete   = Dict{Symbol, Vector{Int}}(:d1=>fd1, :d2=>fd2) #discrete features as Int64\nhybrid_model = HybridNB(labels)\ntrain the model\nfit(hybridmodel, trainingfeaturescontinuous, trainingfeatures_discrete, labels)\npredict the classification for new events (points): featuresc, featuresd\ny = predict(hybridmodel, featuresc, featuresd)  Alternatively one can skip declaring the model and train it directly:julia  model = train(HybridNB, trainingfeaturescontinuous, trainingfeaturesdiscrete, labels)  y = predict(hybridmodel, featuresc, featuresd)  ```\nContinuous features only as a Matrix  ```julia  Xtrain = randn(3,400);  Xclassify = randn(3,10)\nhybridmodel = HybridNB(labels) # the number of discrete features is 0 so it\'s not needed  fit(hybridmodel, Xtrain, labels)  y = predict(hybridmodel, X_classify)  ```\nContinuous and discrete features as a Matrix{Float}  ```julia  #X is a matrix of features\nthe first 3 rows are continuous\ntrainingfeaturescontinuous = restructure_matrix(X[1:3, :])\nthe last 2 rows are discrete and must be integers\ntrainingfeaturesdiscrete = map(Int, restructure_matrix(X[4:5, :]))\ntrain the model\nhybridmodel = train(HybridNB, trainingfeaturescontinuous, trainingfeatures_discrete, labels)\npredict the classification for new events (points): featuresc, featuresd\ny = predict(hybridmodel, featuresc, features_d)  ```"
},

{
    "location": "#Write/Load-models-to-files-1",
    "page": "Readme",
    "title": "Write/Load models to files",
    "category": "section",
    "text": "It is useful to train a model once and then use it for prediction many times later. For example, train your classifier on a local machine and then use it on a cluster to classify points in parallel.There is support for writing HybridNB models to HDF5 files via the methods write_model and load_model. This is useful for interacting with other programs/languages. If the model file is going to be read only in Julia it is easier to use JLD.jl for saving and loading the file."
},

{
    "location": "autodocs/#NaiveBayes.HybridNB",
    "page": "Docstrings",
    "title": "NaiveBayes.HybridNB",
    "category": "type",
    "text": "Initialize a HybridNB model with continuous and/or discrete features\n\nConstructors\n\nHybridNB(labels::AbstractVector, kde_names::AbstractVector, discrete_names::AbstractVector)\nHybridNB(labels::AbstractVector, kde_names::AbstractVector)\nHybridNB(labels::AbstractVector, num_kde::Int, num_discrete::Int)\n\nArguments\n\nlabels : An AbstractVector{Any} of feature labels\nkde_names : An AbstractVector{Any} of the names of continuous features\ndiscrete_names : An AbstractVector{Any} of the names of discrete features\nnum_kde : Number of continuous features\nnum_discrete : Number of discrete features\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NaiveBayes.HybridNB-Union{Tuple{Array{C,1}}, Tuple{T}, Tuple{C}, Tuple{Array{C,1},Type{T}}} where T where C<:Integer",
    "page": "Docstrings",
    "title": "NaiveBayes.HybridNB",
    "category": "method",
    "text": "HybridNB(labels::Vector{Int64}) -> model_h\n\nHybridNB(labels::Vector{Int64}, AstractString) -> model_h\n\nA constructor for both types of features\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NaiveBayes.MultinomialNB-Union{Tuple{C}, Tuple{Array{C,1},Int64}} where C",
    "page": "Docstrings",
    "title": "NaiveBayes.MultinomialNB",
    "category": "method",
    "text": "Multinomial Naive Bayes classifier\n\nclasses : array of objects     Class names n_vars : Int64     Number of variables in observations alpha : Number (optional, default 1)     Smoothing parameter. E.g. if alpha equals 1, each variable in each class     is believed to have 1 observation by default\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NaiveBayes.NBModel",
    "page": "Docstrings",
    "title": "NaiveBayes.NBModel",
    "category": "type",
    "text": "Base type for Naive Bayes models. Inherited classes should have at least following fields:  ccounts::Dict{C, Int64} - count of ocurrences of each class  nobs::Int64             - total number of observations\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NaiveBayes.predict_logprobs-Union{Tuple{N}, Tuple{U}, Tuple{T}, Tuple{HybridNB,Dict{N,Array{T,1}},Dict{N,Array{U,1}}}} where N where U<:Integer where T<:AbstractFloat",
    "page": "Docstrings",
    "title": "NaiveBayes.predict_logprobs",
    "category": "method",
    "text": "predict_logprobs(m::HybridNB, features_c::Vector{Vector{Float64}, features_d::Vector{Vector{Int})\n\nReturn the log-probabilities for each column of X, where each row is the class\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NaiveBayes.predict_logprobs-Union{Tuple{V}, Tuple{NBModel,Array{V,1}}} where V<:Number",
    "page": "Docstrings",
    "title": "NaiveBayes.predict_logprobs",
    "category": "method",
    "text": "Predict log probabilities for all classes\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NaiveBayes.predict_logprobs-Union{Tuple{V}, Tuple{NBModel,Array{V,2}}} where V<:Number",
    "page": "Docstrings",
    "title": "NaiveBayes.predict_logprobs",
    "category": "method",
    "text": "Predict log probabilities for all classes\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NaiveBayes.predict_proba-Union{Tuple{N}, Tuple{U}, Tuple{T}, Tuple{HybridNB,Dict{N,Array{T,1}},Dict{N,Array{U,1}}}} where N where U<:Integer where T<:AbstractFloat",
    "page": "Docstrings",
    "title": "NaiveBayes.predict_proba",
    "category": "method",
    "text": "predict_proba{V<:Number}(m::HybridNB, f_c::Vector{Vector{Float64}}, f_d::Vector{Vector{Int64}})\n\nPredict log-probabilities for the input features. Returns tuples of predicted class and its log-probability estimate.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NaiveBayes.predict_proba-Union{Tuple{V}, Tuple{NBModel,Array{V,2}}} where V<:Number",
    "page": "Docstrings",
    "title": "NaiveBayes.predict_proba",
    "category": "method",
    "text": "Predict logprobs, return tuples of predicted class and its logprob\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NaiveBayes.restructure_matrix-Union{Tuple{Array{T,2}}, Tuple{T}} where T<:Number",
    "page": "Docstrings",
    "title": "NaiveBayes.restructure_matrix",
    "category": "method",
    "text": "restructure_matrix(M::Matrix) -> V::Dict{Symbol, Vector}\n\nRestructure a matrix as vector of vectors\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NaiveBayes.to_matrix-Union{Tuple{Dict{N,Array{T,1}}}, Tuple{N}, Tuple{T}} where N where T<:Number",
    "page": "Docstrings",
    "title": "NaiveBayes.to_matrix",
    "category": "method",
    "text": "to_matrix(D::Dict{Symbol, Vector}}) -> M::Matrix\n\nconvert a dictionary of vectors into a matrix\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NaiveBayes.train-Union{Tuple{N}, Tuple{U}, Tuple{T}, Tuple{C}, Tuple{Type{HybridNB},Dict{N,Array{T,1}},Dict{N,Array{U,1}},Array{C,1}}} where N where U<:Integer where T<:AbstractFloat where C",
    "page": "Docstrings",
    "title": "NaiveBayes.train",
    "category": "method",
    "text": "train(HybridNB, continuous, discrete, labels) -> model2\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StatsBase.fit-Union{Tuple{N}, Tuple{U}, Tuple{T}, Tuple{C}, Tuple{HybridNB,Dict{N,Array{T,1}},Dict{N,Array{U,1}},Array{C,1}}} where N where U<:Integer where T<:AbstractFloat where C",
    "page": "Docstrings",
    "title": "StatsBase.fit",
    "category": "method",
    "text": "fit(m::HybridNB, f_c::Vector{Vector{Float64}}, f_d::Vector{Vector{Int64}}, labels::Vector{Int64})\n\nTrain NB model with discrete and continuous features by estimating P(x⃗|c)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StatsBase.fit-Union{Tuple{T}, Tuple{C}, Tuple{HybridNB,Array{T,2},Array{C,1}}} where T<:AbstractFloat where C",
    "page": "Docstrings",
    "title": "StatsBase.fit",
    "category": "method",
    "text": "fit(m::HybridNB, f_c::Matrix{Float64}, labels::Vector{Int64})\n\nTrain NB model with continuous features only\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StatsBase.predict-Union{Tuple{N}, Tuple{U}, Tuple{T}, Tuple{HybridNB,Dict{N,Array{T,1}},Dict{N,Array{U,1}}}} where N where U<:Integer where T<:AbstractFloat",
    "page": "Docstrings",
    "title": "StatsBase.predict",
    "category": "method",
    "text": "predict(m::HybridNB, f_c::Vector{Vector{Float64}}, f_d::Vector{Vector{Int64}}) -> labels\n\nPredict hybrid naive bayes for continuos featuers only\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StatsBase.predict-Union{Tuple{T}, Tuple{HybridNB,Array{T,2}}} where T<:Number",
    "page": "Docstrings",
    "title": "StatsBase.predict",
    "category": "method",
    "text": "Predict kde naive bayes for continuos featuers only\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NaiveBayes.ePDF",
    "page": "Docstrings",
    "title": "NaiveBayes.ePDF",
    "category": "type",
    "text": "a wrapper around key value pairs for a discrete probability distribution \n\n\n\n\n\n"
},

{
    "location": "autodocs/#NaiveBayes.ePDF-Union{Tuple{AbstractArray{T,1}}, Tuple{T}} where T<:Integer",
    "page": "Docstrings",
    "title": "NaiveBayes.ePDF",
    "category": "method",
    "text": "Constructor of ePDF \n\n\n\n\n\n"
},

{
    "location": "autodocs/#NaiveBayes.logprob_x_given_c-Union{Tuple{C}, Tuple{GaussianNB,Array{Float64,1},C}} where C",
    "page": "Docstrings",
    "title": "NaiveBayes.logprob_x_given_c",
    "category": "method",
    "text": "Calculate log P(x|C)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NaiveBayes.logprob_x_given_c-Union{Tuple{C}, Tuple{GaussianNB,Array{Float64,2},C}} where C",
    "page": "Docstrings",
    "title": "NaiveBayes.logprob_x_given_c",
    "category": "method",
    "text": "Calculate log P(x|C)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NaiveBayes.logprob_x_given_c-Union{Tuple{C}, Tuple{MultinomialNB,Array{Int64,1},C}} where C",
    "page": "Docstrings",
    "title": "NaiveBayes.logprob_x_given_c",
    "category": "method",
    "text": "Calculate log P(x|C)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NaiveBayes.logprob_x_given_c-Union{Tuple{C}, Tuple{MultinomialNB,Array{Int64,2},C}} where C",
    "page": "Docstrings",
    "title": "NaiveBayes.logprob_x_given_c",
    "category": "method",
    "text": "Calculate log P(x|C)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NaiveBayes.num_samples-Union{Tuple{N}, Tuple{U}, Tuple{T}, Tuple{HybridNB,Dict{N,Array{T,1}},Dict{N,Array{U,1}}}} where N where U<:Integer where T<:AbstractFloat",
    "page": "Docstrings",
    "title": "NaiveBayes.num_samples",
    "category": "method",
    "text": "compute the number of samples \n\n\n\n\n\n"
},

{
    "location": "autodocs/#NaiveBayes.probability-Tuple{NaiveBayes.ePDF,Integer}",
    "page": "Docstrings",
    "title": "NaiveBayes.probability",
    "category": "method",
    "text": "query the ePDF to get the probability of n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NaiveBayes.sum_log_x_given_c!-Union{Tuple{N}, Tuple{U}, Tuple{T}, Tuple{Array{Float64,1},Array{Float64,1},HybridNB,Dict{N,Array{T,1}},Dict{N,Array{U,1}},Any}} where N where U<:Integer where T<:AbstractFloat",
    "page": "Docstrings",
    "title": "NaiveBayes.sum_log_x_given_c!",
    "category": "method",
    "text": "computes log[P(x⃗ⁿ|c)] ≈ ∑ᵢ log[p(xⁿᵢ|c)] \n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [NaiveBayes]\nOrder = [:type, :function]"
},

]}
