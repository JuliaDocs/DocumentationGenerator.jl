var documenterSearchIndex = {"docs": [

{
    "location": "#GaussianMixtures.CSstats",
    "page": "Home",
    "title": "GaussianMixtures.CSstats",
    "category": "type",
    "text": "CSstats a type holding centered and scaled zeroth and first order GMM statistics\n\n\n\n\n\n"
},

{
    "location": "#GaussianMixtures.Cstats",
    "page": "Home",
    "title": "GaussianMixtures.Cstats",
    "category": "type",
    "text": "Cstats, a type holding centered zeroth, first and second order GMM statistics\n\n\n\n\n\n"
},

{
    "location": "#GaussianMixtures.Data",
    "page": "Home",
    "title": "GaussianMixtures.Data",
    "category": "type",
    "text": "Data is a type for holding an array of feature vectors (i.e., matrices), or references to files on disk.  The data is automatically loaded when needed, e.g., by indexing.\n\n\n\n\n\n"
},

{
    "location": "#GaussianMixtures.GMM",
    "page": "Home",
    "title": "GaussianMixtures.GMM",
    "category": "type",
    "text": "GMM is the type that stores information of a Guassian Mixture Model.  Currently two main covariance types are supported: full covarariance and diagonal covariance.\n\n\n\n\n\n"
},

{
    "location": "#GaussianMixtures.GMM-Tuple{Int64,Int64}",
    "page": "Home",
    "title": "GaussianMixtures.GMM",
    "category": "method",
    "text": "GMM(n::Int, d::Int, kind::Symbol=:diag) initializes a GMM with means 0 and Indentity covariances\n\n\n\n\n\n"
},

{
    "location": "#GaussianMixtures.GMMprior",
    "page": "Home",
    "title": "GaussianMixtures.GMMprior",
    "category": "type",
    "text": "GMMprior is a type that holds the prior for training GMMs using Variational Bayes.\n\n\n\n\n\n"
},

{
    "location": "#GaussianMixtures.History",
    "page": "Home",
    "title": "GaussianMixtures.History",
    "category": "type",
    "text": "History, a type to record the history of how a GMM is built.\n\n\n\n\n\n"
},

{
    "location": "#GaussianMixtures.VGMM",
    "page": "Home",
    "title": "GaussianMixtures.VGMM",
    "category": "type",
    "text": "VGMM is the type that is used to store a GMM in the Variational Bayes training.\n\n\n\n\n\n"
},

{
    "location": "#GaussianMixtures.covars-Union{Tuple{GMM{T,AbstractArray{T,2}}}, Tuple{T}} where T",
    "page": "Home",
    "title": "GaussianMixtures.covars",
    "category": "method",
    "text": "covars(::GMM) returns the covariance matrices Σ of the Gaussians in the mixture.\n\n\n\n\n\n"
},

{
    "location": "#GaussianMixtures.kind-Union{Tuple{GMM{T,CT}}, Tuple{CT}, Tuple{T}} where CT<:(AbstractArray{T,2} where T) where T",
    "page": "Home",
    "title": "GaussianMixtures.kind",
    "category": "method",
    "text": "kind(::GMM) returns the kind of GMM, either :diag or :full\n\n\n\n\n\n"
},

{
    "location": "#GaussianMixtures.means-Tuple{GMM}",
    "page": "Home",
    "title": "GaussianMixtures.means",
    "category": "method",
    "text": "means(::GMM) returns the means μ of the Gaussians in the mixture\n\n\n\n\n\n"
},

{
    "location": "#GaussianMixtures.nparams-Tuple{GMM}",
    "page": "Home",
    "title": "GaussianMixtures.nparams",
    "category": "method",
    "text": "nparams(::GMM) returns the number of free parameters in the GMM\n\n\n\n\n\n"
},

{
    "location": "#GaussianMixtures.weights-Tuple{GMM}",
    "page": "Home",
    "title": "GaussianMixtures.weights",
    "category": "method",
    "text": "weights(::GMM) returns the weights w, or priors, of the Gaussians in the mixture\n\n\n\n\n\n"
},

{
    "location": "#GaussianMixtures.GaussianMixture",
    "page": "Home",
    "title": "GaussianMixtures.GaussianMixture",
    "category": "type",
    "text": "GaussianMixture, an abstract type for a mixture of full-covariance or diagonal-covariance Gaussian distributions\n\n\n\n\n\n"
},

{
    "location": "#GaussianMixtures.addhist!-Tuple{GaussianMixtures.GaussianMixture,AbstractString}",
    "page": "Home",
    "title": "GaussianMixtures.addhist!",
    "category": "method",
    "text": "addhist!(::GMM, s) adds a comment s to the GMMM\n\n\n\n\n\n"
},

{
    "location": "#GaussianMixtures.covar-Union{Tuple{AbstractTriangular{T,S} where S<:(AbstractArray{T,2} where T)}, Tuple{T}} where T",
    "page": "Home",
    "title": "GaussianMixtures.covar",
    "category": "method",
    "text": "covar(GMM.Σ) extracts the covariances Σ (which may be encoded as chol(inv(Σ))\n\n\n\n\n\n"
},

{
    "location": "#GaussianMixtures.density-Tuple{GMM,Any}",
    "page": "Home",
    "title": "GaussianMixtures.density",
    "category": "method",
    "text": "density(gmm::GMM, X) returns log(P(X|μ, Σ)) \n\n\n\n\n\n"
},

{
    "location": "#GaussianMixtures.full-Union{Tuple{GMM{T,CT} where CT<:Union{AbstractArray{T,2}, Array{UpperTriangular{T,Array{T,2}},1}}}, Tuple{T}} where T",
    "page": "Home",
    "title": "GaussianMixtures.full",
    "category": "method",
    "text": "full(::GMM) turns a diagonal covariance GMM into a full-covariance GMMM\n\n\n\n\n\n"
},

{
    "location": "#LinearAlgebra.diag-Union{Tuple{GMM{T,CT} where CT<:Union{AbstractArray{T,2}, Array{UpperTriangular{T,Array{T,2}},1}}}, Tuple{T}} where T",
    "page": "Home",
    "title": "LinearAlgebra.diag",
    "category": "method",
    "text": "diag(::GMM) turns a full-covariance GMM into a diagonal-covariance GMM, by ignoring off-diagonal elements\n\n\n\n\n\n"
},

{
    "location": "#ScikitLearnBase.score_samples-Tuple{GMM,Any}",
    "page": "Home",
    "title": "ScikitLearnBase.score_samples",
    "category": "method",
    "text": "score_samples(gmm::GMM, X::Matrix)\n\nReturn the per-sample likelihood of the data under the model. \n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [GaussianMixtures]\nOrder = [:type, :function]"
},

]}
