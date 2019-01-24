var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#LIBSVM.jl-1",
    "page": "Readme",
    "title": "LIBSVM.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: Coverage Status)This is a Julia interface for LIBSVM.Features:Supports all LIBSVM models: classification C-SVC, nu-SVC, regression: epsilon-SVR, nu-SVR   and distribution estimation: one-class SVM\nModel objects are represented by Julia type SVM which gives you easy access to model features and can be saved e.g. as JLD file\nSupports ScikitLearn.jl API"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": ""
},

{
    "location": "#LIBSVM-API-1",
    "page": "Readme",
    "title": "LIBSVM API",
    "category": "section",
    "text": "This provides a lower level API similar to LIBSVM C-interface. See ?svmtrain for options.using RDatasets, LIBSVM\n\n# Load Fisher\'s classic iris data\niris = dataset(\"datasets\", \"iris\")\n\n# LIBSVM handles multi-class data automatically using a one-against-one strategy\nlabels = convert(Vector, iris[:Species])\n\n# First dimension of input data is features; second is instances\ninstances = convert(Array, iris[:, 1:4])\'\n\n# Train SVM on half of the data using default parameters. See documentation\n# of svmtrain for options\nmodel = svmtrain(instances[:, 1:2:end], labels[1:2:end]);\n\n# Test model on the other half of the data.\n(predicted_labels, decision_values) = svmpredict(model, instances[:, 2:2:end]);\n\n# Compute accuracy\n@printf \"Accuracy: %.2f%%\\n\" mean((predicted_labels .== labels[2:2:end]))*100"
},

{
    "location": "#ScikitLearn-API-1",
    "page": "Readme",
    "title": "ScikitLearn API",
    "category": "section",
    "text": "You can alternatively use ScikitLearn.jl API with same options as svmtrain:using LIBSVM\nusing RDatasets: dataset\n\n#Classification C-SVM\niris = dataset(\"datasets\", \"iris\")\nlabels = convert(Vector, iris[:, :Species])\ninstances = convert(Array, iris[:, 1:4])\nmodel = fit!(SVC(), instances[1:2:end, :], labels[1:2:end])\nyp = predict(model, instances[2:2:end, :])\n\n#epsilon-regression\nwhiteside = RDatasets.dataset(\"MASS\", \"whiteside\")\nX = Array(whiteside[:Gas])\nif typeof(X) <: AbstractVector\n    X = reshape(X, (length(X),1))\nend\ny = Array(whiteside[:Temp])\nsvrmod = fit!(EpsilonSVR(cost = 10., gamma = 1.), X, y)\nyp = predict(svrmod, X)"
},

{
    "location": "#Credits-1",
    "page": "Readme",
    "title": "Credits",
    "category": "section",
    "text": "The library is currently developed and maintained by Matti Pastell. It was originally developed by Simon Kornblith.LIBSVM by Chih-Chung Chang and Chih-Jen Lin"
},

{
    "location": "autodocs/#LIBSVM.LinearSVC",
    "page": "Docstrings",
    "title": "LIBSVM.LinearSVC",
    "category": "type",
    "text": "Linear SVM using LIBLINEAR\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LIBSVM.svmpredict-Union{Tuple{U}, Tuple{T}, Tuple{SVM{T},AbstractArray{U,2}}} where U<:Real where T",
    "page": "Docstrings",
    "title": "LIBSVM.svmpredict",
    "category": "method",
    "text": "svmpredict{T,U<:Real}(model::SVM{T}, X::AbstractMatrix{U})\n\nPredict values using model based on data X. The shape of X needs to be (nfeatures, nsamples). The method returns tuple (predictions, decisionvalues).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LIBSVM.svmtrain-Union{Tuple{AbstractArray{U,2}}, Tuple{U}, Tuple{T}, Tuple{AbstractArray{U,2},AbstractArray{T,1}}} where U<:Real where T",
    "page": "Docstrings",
    "title": "LIBSVM.svmtrain",
    "category": "method",
    "text": "svmtrain{T, U<:Real}(X::AbstractMatrix{U}, y::AbstractVector{T}=[];\n    svmtype::Type=SVC, kernel::Kernel.KERNEL=Kernel.RadialBasis, degree::Integer=3,\n    gamma::Float64=1.0/size(X, 1), coef0::Float64=0.0,\n    cost::Float64=1.0, nu::Float64=0.5, epsilon::Float64=0.1,\n    tolerance::Float64=0.001, shrinking::Bool=true,\n    probability::Bool=false, weights::Union{Dict{T, Float64}, Compat.Nothing}=nothing,\n    cachesize::Float64=200.0, verbose::Bool=false)\n\nTrain Support Vector Machine using LIBSVM using response vector y and training data X. The shape of X needs to be (nfeatures, nsamples). For one-class SVM use only X.\n\nArguments\n\nsvmtype::Type=LIBSVM.SVC: Type of SVM to train SVC (for C-SVM), NuSVC   OneClassSVM, EpsilonSVR or NuSVR. Defaults to OneClassSVM if   y is not used.\nkernel::Kernels.KERNEL=Kernel.RadialBasis: Model kernel Linear, polynomial,   RadialBasis, Sigmoid or Precomputed.\ndegree::Integer=3: Kernel degree. Used for polynomial kernel\ngamma::Float64=1.0/size(X, 1) : γ for kernels\ncoef0::Float64=0.0: parameter for sigmoid and polynomial kernel\ncost::Float64=1.0: cost parameter C of C-SVC, epsilon-SVR, and nu-SVR\nnu::Float64=0.5: parameter nu of nu-SVC, one-class SVM, and nu-SVR\nepsilon::Float64=0.1: epsilon in loss function of epsilon-SVR\ntolerance::Float64=0.001: tolerance of termination criterion\nshrinking::Bool=true: whether to use the shrinking heuristics\nprobability::Bool=false: whether to train a SVC or SVR model for probability estimates\nweights::Union{Dict{T, Float64}, Compat.Nothing}=nothing: dictionary of class weights\ncachesize::Float64=100.0: cache memory size in MB\nverbose::Bool=false: print training output from LIBSVM if true\nnt::Integer=0: number of OpenMP cores to use, if 0 it is set to OMPNUMTHREADS, if negative it is set to the max number of threads\n\nConsult LIBSVM documentation for advice on the choise of correct parameters and model tuning.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LIBSVM.svmmodel-Tuple{LIBSVM.SVM}",
    "page": "Docstrings",
    "title": "LIBSVM.svmmodel",
    "category": "method",
    "text": "Convert SVM model to libsvm struct for prediction\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [LIBSVM]\nOrder = [:type, :function]"
},

]}
