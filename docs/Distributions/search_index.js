var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Distributions Package",
    "title": "Distributions Package",
    "category": "page",
    "text": ""
},

{
    "location": "#Distributions-Package-1",
    "page": "Distributions Package",
    "title": "Distributions Package",
    "category": "section",
    "text": "The Distributions package provides a large collection of probabilistic distributions and related functions. Particularly, Distributions implements:Moments (e.g mean, variance, skewness, and kurtosis), entropy, and other properties\nProbability density/mass functions (pdf) and their logarithm (logpdf)\nMoment generating functions and characteristic functions\nMaximum likelihood estimation\nPosterior w.r.t. conjugate prior, and Maximum-A-Posteriori (MAP) estimation"
},

{
    "location": "starting/#",
    "page": "Getting Started",
    "title": "Getting Started",
    "category": "page",
    "text": ""
},

{
    "location": "starting/#Getting-Started-1",
    "page": "Getting Started",
    "title": "Getting Started",
    "category": "section",
    "text": ""
},

{
    "location": "starting/#Installation-1",
    "page": "Getting Started",
    "title": "Installation",
    "category": "section",
    "text": "The Distributions package is available through the Julia package system by running Pkg.add(\"Distributions\"). Throughout, we assume that you have installed the package."
},

{
    "location": "starting/#Starting-With-a-Normal-Distribution-1",
    "page": "Getting Started",
    "title": "Starting With a Normal Distribution",
    "category": "section",
    "text": "We start by drawing 100 observations from a standard-normal random variable.The first step is to set up the environment:julia> using Compat, Random, Distributions\n\njulia> Random.seed!(123) # Setting the seedThen, we create a standard-normal distribution d and obtain samples using rand:julia> d = Normal()\nNormal(μ=0.0, σ=1.0)\n\njulia> x = rand(d, 100)\n100-element Array{Float64,1}:\n  0.376264\n -0.405272\n ...You can easily obtain the pdf, cdf, percentile, and many other functions for a distribution. For instance, the median (50th percentile) and the 95th percentile for the standard-normal distribution are given by:julia> quantile(Normal(), [0.5, 0.95])\n2-element Array{Float64,1}:\n 0.0\n 1.64485The normal distribution is parameterized by its mean and standard deviation. To draw random samples from a normal distribution with mean 1 and standard deviation 2, you write:julia> rand(Normal(1, 2), 100)"
},

{
    "location": "starting/#Using-Other-Distributions-1",
    "page": "Getting Started",
    "title": "Using Other Distributions",
    "category": "section",
    "text": "The package contains a large number of additional distributions of three main types:Univariate\nMultivariate\nMatrixvariateEach type splits further into Discrete and Continuous.For instance, you can define the following distributions (among many others):julia> Binomial(p) # Discrete univariate\njulia> Cauchy(u, b)  # Continuous univariate\njulia> Multinomial(n, p) # Discrete multivariate\njulia> Wishart(nu, S) # Continuous matrix-variateIn addition, you can create truncated distributions from univariate distributions:julia> Truncated(Normal(mu, sigma), l, u)To find out which parameters are appropriate for a given distribution D, you can use fieldnames(D):julia> fieldnames(Cauchy)\n2-element Array{Symbol,1}:\n :μ\n :βThis tells you that a Cauchy distribution is initialized with location μ and scale β."
},

{
    "location": "starting/#Estimate-the-Parameters-1",
    "page": "Getting Started",
    "title": "Estimate the Parameters",
    "category": "section",
    "text": "It is often useful to approximate an empirical distribution with a theoretical distribution. As an example, we can use the array x we created above and ask which normal distribution best describes it:julia> fit(Normal, x)\nNormal(μ=0.036692077201688635, σ=1.1228280164716382)Since x is a random draw from Normal, it\'s easy to check that the fitted values are sensible. Indeed, the estimates [0.04, 1.12] are close to the true values of [0.0, 1.0] that we used to generate x."
},

{
    "location": "types/#",
    "page": "Type Hierarchy",
    "title": "Type Hierarchy",
    "category": "page",
    "text": ""
},

{
    "location": "types/#Type-Hierarchy-1",
    "page": "Type Hierarchy",
    "title": "Type Hierarchy",
    "category": "section",
    "text": "All samplers and distributions provided in this package are organized into a type hierarchy described as follows."
},

{
    "location": "types/#Sampleable-1",
    "page": "Type Hierarchy",
    "title": "Sampleable",
    "category": "section",
    "text": "The root of this type hierarchy is Sampleable. The abstract type Sampleable subsumes any types of objects from which one can draw samples, which particularly includes samplers and distributions. Formally, Sampleable is defined asabstract type Sampleable{F<:VariateForm,S<:ValueSupport} endIt has two type parameters that define the kind of samples that can be drawn therefrom."
},

{
    "location": "types/#VariateForm-1",
    "page": "Type Hierarchy",
    "title": "VariateForm",
    "category": "section",
    "text": "F <: VariateForm specifies the form of the variate, which can be one of the following:Type A single sample Multiple samples\nUnivariate a scalar number A numeric array of arbitrary shape, each element being a sample\nMultivariate a numeric vector A matrix, each column being a sample\nMatrixvariate a numeric matrix An array of matrices, each element being a sample matrix"
},

{
    "location": "types/#Base.length-Tuple{Sampleable}",
    "page": "Type Hierarchy",
    "title": "Base.length",
    "category": "method",
    "text": "length(s::Sampleable)\n\nThe length of each sample. Always returns 1 when s is univariate.\n\n\n\n\n\n"
},

{
    "location": "types/#Base.size-Tuple{Sampleable}",
    "page": "Type Hierarchy",
    "title": "Base.size",
    "category": "method",
    "text": "size(s::Sampleable)\n\nThe size (i.e. shape) of each sample. Always returns () when s is univariate, and (length(s),) when s is multivariate.\n\n\n\n\n\n"
},

{
    "location": "types/#Distributions.nsamples-Tuple{Type{Sampleable},Any}",
    "page": "Type Hierarchy",
    "title": "Distributions.nsamples",
    "category": "method",
    "text": "nsamples(s::Sampleable)\n\nThe number of values contained in one sample of s. Multiple samples are often organized into an array, depending on the variate form.\n\n\n\n\n\n"
},

{
    "location": "types/#Base.eltype-Tuple{Sampleable}",
    "page": "Type Hierarchy",
    "title": "Base.eltype",
    "category": "method",
    "text": "eltype(s::Sampleable)\n\nThe default element type of a sample. This is the type of elements of the samples generated by the rand method. However, one can provide an array of different element types to store the samples using rand!.\n\n\n\n\n\n"
},

{
    "location": "types/#Base.rand-Tuple{Sampleable}",
    "page": "Type Hierarchy",
    "title": "Base.rand",
    "category": "method",
    "text": "rand(s::Sampleable)\n\nGenerate one sample for s.\n\nrand(s::Sampleable, n::Int)\n\nGenerate n samples from s. The form of the returned object depends on the variate form of s:\n\nWhen s is univariate, it returns a vector of length n.\nWhen s is multivariate, it returns a matrix with n columns.\nWhen s is matrix-variate, it returns an array, where each element is a sample matrix.\n\n\n\n\n\n"
},

{
    "location": "types/#Random.rand!-Tuple{Sampleable,AbstractArray}",
    "page": "Type Hierarchy",
    "title": "Random.rand!",
    "category": "method",
    "text": "rand!(s::Sampleable, A::AbstractArray)\n\nGenerate one or multiple samples from s to a pre-allocated array A. A should be in the form as specified above. The rules are summarized as below:\n\nWhen s is univariate, A can be an array of arbitrary shape. Each element of A will be overriden by one sample.\nWhen s is multivariate, A can be a vector to store one sample, or a matrix with each column for a sample.\nWhen s is matrix-variate, A can be a matrix to store one sample, or an array of matrices with each element for a sample matrix.\n\n\n\n\n\n"
},

{
    "location": "types/#ValueSupport-1",
    "page": "Type Hierarchy",
    "title": "ValueSupport",
    "category": "section",
    "text": "S <: ValueSupport specifies the support of sample elements, which can be either of the following:Type Element type Descriptions\nDiscrete Int Samples take discrete values\nContinuous Float64 Samples take continuous real valuesMultiple samples are often organized into an array, depending on the variate form.The basic functionalities that a sampleable object provides is to retrieve information about the samples it generates and to draw samples. Particularly, the following functions are provided for sampleable objects:length(::Sampleable)\nsize(::Sampleable)\nnsamples(::Type{Sampleable}, x::Any)\neltype(::Sampleable)\nrand(::Sampleable)\nrand!(::Sampleable, ::AbstractArray)"
},

{
    "location": "types/#Distributions-1",
    "page": "Type Hierarchy",
    "title": "Distributions",
    "category": "section",
    "text": "We use Distribution, a subtype of Sampleable as defined below, to capture probabilistic distributions. In addition to being sampleable, a distribution typically comes with an explicit way to combine its domain, probability density functions, among many other quantities.abstract type Distribution{F<:VariateForm,S<:ValueSupport} <: Sampleable{F,S} endTo simplify the use in practice, we introduce a series of type alias as follows:const UnivariateDistribution{S<:ValueSupport}   = Distribution{Univariate,S}\nconst MultivariateDistribution{S<:ValueSupport} = Distribution{Multivariate,S}\nconst MatrixDistribution{S<:ValueSupport}       = Distribution{Matrixvariate,S}\nconst NonMatrixDistribution = Union{UnivariateDistribution, MultivariateDistribution}\n\nconst DiscreteDistribution{F<:VariateForm}   = Distribution{F,Discrete}\nconst ContinuousDistribution{F<:VariateForm} = Distribution{F,Continuous}\n\nconst DiscreteUnivariateDistribution     = Distribution{Univariate,    Discrete}\nconst ContinuousUnivariateDistribution   = Distribution{Univariate,    Continuous}\nconst DiscreteMultivariateDistribution   = Distribution{Multivariate,  Discrete}\nconst ContinuousMultivariateDistribution = Distribution{Multivariate,  Continuous}\nconst DiscreteMatrixDistribution         = Distribution{Matrixvariate, Discrete}\nconst ContinuousMatrixDistribution       = Distribution{Matrixvariate, Continuous}All methods applicable to Sampleable also applies to Distribution. The API for distributions of different variate forms are different (refer to univariates, multivariates, and matrix for details)."
},

{
    "location": "univariate/#",
    "page": "Univariate Distributions",
    "title": "Univariate Distributions",
    "category": "page",
    "text": ""
},

{
    "location": "univariate/#univariates-1",
    "page": "Univariate Distributions",
    "title": "Univariate Distributions",
    "category": "section",
    "text": "Univariate distributions are the distributions whose variate forms are Univariate (i.e each sample is a scalar). Abstract types for univariate distributions:const UnivariateDistribution{S<:ValueSupport} = Distribution{Univariate,S}\n\nconst DiscreteUnivariateDistribution   = Distribution{Univariate, Discrete}\nconst ContinuousUnivariateDistribution = Distribution{Univariate, Continuous}"
},

{
    "location": "univariate/#Common-Interface-1",
    "page": "Univariate Distributions",
    "title": "Common Interface",
    "category": "section",
    "text": "A series of methods are implemented for each univariate distribution, which provide useful functionalities such as moment computation, pdf evaluation, and sampling (i.e. random number generation)."
},

{
    "location": "univariate/#StatsBase.params-Tuple{Distribution{Univariate,S} where S<:ValueSupport}",
    "page": "Univariate Distributions",
    "title": "StatsBase.params",
    "category": "method",
    "text": "params(d::UnivariateDistribution)\n\nReturn a tuple of parameters. Let d be a distribution of type D, then D(params(d)...) will construct exactly the same distribution as d.\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.scale-Tuple{Distribution{Univariate,S} where S<:ValueSupport}",
    "page": "Univariate Distributions",
    "title": "Distributions.scale",
    "category": "method",
    "text": "scale(d::UnivariateDistribution)\n\nGet the scale parameter.\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.location-Tuple{Distribution{Univariate,S} where S<:ValueSupport}",
    "page": "Univariate Distributions",
    "title": "Distributions.location",
    "category": "method",
    "text": "location(d::UnivariateDistribution)\n\nGet the location parameter.\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.shape-Tuple{Distribution{Univariate,S} where S<:ValueSupport}",
    "page": "Univariate Distributions",
    "title": "Distributions.shape",
    "category": "method",
    "text": "shape(d::UnivariateDistribution)\n\nGet the shape parameter.\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.rate-Tuple{Distribution{Univariate,S} where S<:ValueSupport}",
    "page": "Univariate Distributions",
    "title": "Distributions.rate",
    "category": "method",
    "text": "rate(d::UnivariateDistribution)\n\nGet the rate parameter.\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.ncategories-Tuple{Distribution{Univariate,S} where S<:ValueSupport}",
    "page": "Univariate Distributions",
    "title": "Distributions.ncategories",
    "category": "method",
    "text": "ncategories(d::UnivariateDistribution)\n\nGet the number of categories.\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.ntrials-Tuple{Distribution{Univariate,S} where S<:ValueSupport}",
    "page": "Univariate Distributions",
    "title": "Distributions.ntrials",
    "category": "method",
    "text": "ntrials(d::UnivariateDistribution)\n\nGet the number of trials.\n\n\n\n\n\n"
},

{
    "location": "univariate/#StatsBase.dof-Tuple{Distribution{Univariate,S} where S<:ValueSupport}",
    "page": "Univariate Distributions",
    "title": "StatsBase.dof",
    "category": "method",
    "text": "dof(d::UnivariateDistribution)\n\nGet the degrees of freedom.\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.succprob-Tuple{Distribution{Univariate,Discrete}}",
    "page": "Univariate Distributions",
    "title": "Distributions.succprob",
    "category": "method",
    "text": "succprob(d::DiscreteUnivariateDistribution)\n\nGet the probability of success.\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.failprob-Tuple{Distribution{Univariate,Discrete}}",
    "page": "Univariate Distributions",
    "title": "Distributions.failprob",
    "category": "method",
    "text": "failprob(d::DiscreteUnivariateDistribution)\n\nGet the probability of failure.\n\n\n\n\n\n"
},

{
    "location": "univariate/#Parameter-Retrieval-1",
    "page": "Univariate Distributions",
    "title": "Parameter Retrieval",
    "category": "section",
    "text": "Note: params are defined for all univariate distributions, while other parameter retrieval methods are only defined for those distributions for which these parameters make sense. See below for details.params(::UnivariateDistribution)\nscale(::UnivariateDistribution)\nlocation(::UnivariateDistribution)\nshape(::UnivariateDistribution)\nrate(::UnivariateDistribution)\nncategories(::UnivariateDistribution)\nntrials(::UnivariateDistribution)\ndof(::UnivariateDistribution)For distributions for which success and failure have a meaning, the following methods are defined:succprob(::DiscreteUnivariateDistribution)\nfailprob(::DiscreteUnivariateDistribution)"
},

{
    "location": "univariate/#Base.maximum-Tuple{Distribution{Univariate,S} where S<:ValueSupport}",
    "page": "Univariate Distributions",
    "title": "Base.maximum",
    "category": "method",
    "text": "maximum(d::Distribution)\n\nReturn the maximum of the support of d.\n\n\n\n\n\n"
},

{
    "location": "univariate/#Base.minimum-Tuple{Distribution{Univariate,S} where S<:ValueSupport}",
    "page": "Univariate Distributions",
    "title": "Base.minimum",
    "category": "method",
    "text": "minimum(d::Distribution)\n\nReturn the minimum of the support of d.\n\n\n\n\n\n"
},

{
    "location": "univariate/#Statistics.mean-Tuple{Distribution{Univariate,S} where S<:ValueSupport}",
    "page": "Univariate Distributions",
    "title": "Statistics.mean",
    "category": "method",
    "text": "mean(d::UnivariateDistribution)\n\nCompute the expectation.\n\n\n\n\n\n"
},

{
    "location": "univariate/#Statistics.var-Tuple{Distribution{Univariate,S} where S<:ValueSupport}",
    "page": "Univariate Distributions",
    "title": "Statistics.var",
    "category": "method",
    "text": "var(d::UnivariateDistribution)\n\nCompute the variance. (A generic std is provided as std(d) = sqrt(var(d)))\n\n\n\n\n\n"
},

{
    "location": "univariate/#Statistics.std-Tuple{Distribution{Univariate,S} where S<:ValueSupport}",
    "page": "Univariate Distributions",
    "title": "Statistics.std",
    "category": "method",
    "text": "std(d::UnivariateDistribution)\n\nReturn the standard deviation of distribution d, i.e. sqrt(var(d)).\n\n\n\n\n\n"
},

{
    "location": "univariate/#Statistics.median-Tuple{Distribution{Univariate,S} where S<:ValueSupport}",
    "page": "Univariate Distributions",
    "title": "Statistics.median",
    "category": "method",
    "text": "median(d::UnivariateDistribution)\n\nReturn the median value of distribution d.\n\n\n\n\n\n"
},

{
    "location": "univariate/#StatsBase.modes-Tuple{Distribution{Univariate,S} where S<:ValueSupport}",
    "page": "Univariate Distributions",
    "title": "StatsBase.modes",
    "category": "method",
    "text": "modes(d::UnivariateDistribution)\n\nGet all modes (if this makes sense).\n\n\n\n\n\n"
},

{
    "location": "univariate/#StatsBase.mode-Tuple{Distribution{Univariate,S} where S<:ValueSupport}",
    "page": "Univariate Distributions",
    "title": "StatsBase.mode",
    "category": "method",
    "text": "mode(d::UnivariateDistribution)\n\nReturns the first mode.\n\n\n\n\n\n"
},

{
    "location": "univariate/#StatsBase.skewness-Tuple{Distribution{Univariate,S} where S<:ValueSupport}",
    "page": "Univariate Distributions",
    "title": "StatsBase.skewness",
    "category": "method",
    "text": "skewness(d::UnivariateDistribution)\n\nCompute the skewness.\n\n\n\n\n\n"
},

{
    "location": "univariate/#StatsBase.kurtosis-Tuple{Distribution{Univariate,S} where S<:ValueSupport}",
    "page": "Univariate Distributions",
    "title": "StatsBase.kurtosis",
    "category": "method",
    "text": "kurtosis(d::UnivariateDistribution)\n\nCompute the excessive kurtosis.\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.isplatykurtic-Tuple{Distribution{Univariate,S} where S<:ValueSupport}",
    "page": "Univariate Distributions",
    "title": "Distributions.isplatykurtic",
    "category": "method",
    "text": "isplatykurtic(d)\n\nReturn whether d is platykurtic (i.e kurtosis(d) > 0).\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.isleptokurtic-Tuple{Distribution{Univariate,S} where S<:ValueSupport}",
    "page": "Univariate Distributions",
    "title": "Distributions.isleptokurtic",
    "category": "method",
    "text": "isleptokurtic(d)\n\nReturn whether d is leptokurtic (i.e kurtosis(d) < 0).\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.ismesokurtic-Tuple{Distribution{Univariate,S} where S<:ValueSupport}",
    "page": "Univariate Distributions",
    "title": "Distributions.ismesokurtic",
    "category": "method",
    "text": "ismesokurtic(d)\n\nReturn whether d is mesokurtic (i.e kurtosis(d) == 0).\n\n\n\n\n\n"
},

{
    "location": "univariate/#StatsBase.entropy-Tuple{Distribution{Univariate,S} where S<:ValueSupport}",
    "page": "Univariate Distributions",
    "title": "StatsBase.entropy",
    "category": "method",
    "text": "entropy(d::UnivariateDistribution)\n\nCompute the entropy value of distribution d.\n\n\n\n\n\n"
},

{
    "location": "univariate/#StatsBase.entropy-Tuple{Distribution{Univariate,S} where S<:ValueSupport,Bool}",
    "page": "Univariate Distributions",
    "title": "StatsBase.entropy",
    "category": "method",
    "text": "entropy(d::UnivariateDistribution, b::Real)\n\nCompute the entropy value of distribution d, w.r.t. a given base.\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.mgf-Tuple{Distribution{Univariate,S} where S<:ValueSupport,Any}",
    "page": "Univariate Distributions",
    "title": "Distributions.mgf",
    "category": "method",
    "text": "mgf(d::UnivariateDistribution, t)\n\nEvaluate the moment generating function of distribution d.\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.cf-Tuple{Distribution{Univariate,S} where S<:ValueSupport,Any}",
    "page": "Univariate Distributions",
    "title": "Distributions.cf",
    "category": "method",
    "text": "cf(d::UnivariateDistribution, t)\n\nEvaluate the characteristic function of distribution d.\n\n\n\n\n\n"
},

{
    "location": "univariate/#Computation-of-statistics-1",
    "page": "Univariate Distributions",
    "title": "Computation of statistics",
    "category": "section",
    "text": "maximum(::UnivariateDistribution)\nminimum(::UnivariateDistribution)\nmean(::UnivariateDistribution)\nvar(::UnivariateDistribution)\nstd(::UnivariateDistribution)\nmedian(::UnivariateDistribution)\nmodes(::UnivariateDistribution)\nmode(::UnivariateDistribution)\nskewness(::UnivariateDistribution)\nkurtosis(::UnivariateDistribution)\nisplatykurtic(::UnivariateDistribution)\nisleptokurtic(::UnivariateDistribution)\nismesokurtic(::UnivariateDistribution)\nentropy(::UnivariateDistribution)\nentropy(::UnivariateDistribution, ::Bool)\nmgf(::UnivariateDistribution, ::Any)\ncf(::UnivariateDistribution, ::Any)"
},

{
    "location": "univariate/#Distributions.insupport-Tuple{Distribution{Univariate,S} where S<:ValueSupport,Any}",
    "page": "Univariate Distributions",
    "title": "Distributions.insupport",
    "category": "method",
    "text": "insupport(d::UnivariateDistribution, x::Any)\n\nWhen x is a scalar, it returns whether x is within the support of d (e.g., insupport(d, x) = minimum(d) <= x <= maximum(d)). When x is an array, it returns whether every element in x is within the support of d.\n\nGeneric fallback methods are provided, but it is often the case that insupport can be done more efficiently, and a specialized insupport is thus desirable. You should also override this function if the support is composed of multiple disjoint intervals.\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.pdf-Tuple{Distribution{Univariate,S} where S<:ValueSupport,Real}",
    "page": "Univariate Distributions",
    "title": "Distributions.pdf",
    "category": "method",
    "text": "pdf(d::UnivariateDistribution, x::Real)\n\nEvaluate the probability density (mass) at x.\n\nSee also: logpdf.\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.logpdf-Tuple{Distribution{Univariate,S} where S<:ValueSupport,Real}",
    "page": "Univariate Distributions",
    "title": "Distributions.logpdf",
    "category": "method",
    "text": "logpdf(d::UnivariateDistribution, x::Real)\n\nEvaluate the logarithm of probability density (mass) at x. Whereas there is a fallback implemented logpdf(d, x) = log(pdf(d, x)). Relying on this fallback is not recommended in general, as it is prone to overflow or underflow.\n\n\n\n\n\n"
},

{
    "location": "univariate/#StatsBase.loglikelihood-Tuple{Distribution{Univariate,S} where S<:ValueSupport,AbstractArray}",
    "page": "Univariate Distributions",
    "title": "StatsBase.loglikelihood",
    "category": "method",
    "text": "loglikelihood(d::UnivariateDistribution, X::AbstractArray)\n\nThe log-likelihood of distribution d w.r.t. all samples contained in array x.\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.cdf-Tuple{Distribution{Univariate,S} where S<:ValueSupport,Real}",
    "page": "Univariate Distributions",
    "title": "Distributions.cdf",
    "category": "method",
    "text": "cdf(d::UnivariateDistribution, x::Real)\n\nEvaluate the cumulative probability at x.\n\nSee also ccdf, logcdf, and logccdf.\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.logcdf-Tuple{Distribution{Univariate,S} where S<:ValueSupport,Real}",
    "page": "Univariate Distributions",
    "title": "Distributions.logcdf",
    "category": "method",
    "text": "logcdf(d::UnivariateDistribution, x::Real)\n\nThe logarithm of the cumulative function value(s) evaluated at x, i.e. log(cdf(x)).\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.ccdf-Tuple{Distribution{Univariate,S} where S<:ValueSupport,Real}",
    "page": "Univariate Distributions",
    "title": "Distributions.ccdf",
    "category": "method",
    "text": "ccdf(d::UnivariateDistribution, x::Real)\n\nThe complementary cumulative function evaluated at x, i.e. 1 - cdf(d, x).\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.logccdf-Tuple{Distribution{Univariate,S} where S<:ValueSupport,Real}",
    "page": "Univariate Distributions",
    "title": "Distributions.logccdf",
    "category": "method",
    "text": "logccdf(d::UnivariateDistribution, x::Real)\n\nThe logarithm of the complementary cumulative function values evaluated at x, i.e. log(ccdf(x)).\n\n\n\n\n\n"
},

{
    "location": "univariate/#Statistics.quantile-Tuple{Distribution{Univariate,S} where S<:ValueSupport,Real}",
    "page": "Univariate Distributions",
    "title": "Statistics.quantile",
    "category": "method",
    "text": "quantile(d::UnivariateDistribution, q::Real)\n\nEvaluate the inverse cumulative distribution function at q.\n\nSee also: cquantile, invlogcdf, and invlogccdf.\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.cquantile-Tuple{Distribution{Univariate,S} where S<:ValueSupport,Real}",
    "page": "Univariate Distributions",
    "title": "Distributions.cquantile",
    "category": "method",
    "text": "cquantile(d::UnivariateDistribution, q::Real)\n\nThe complementary quantile value, i.e. quantile(d, 1-q).\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.invlogcdf-Tuple{Distribution{Univariate,S} where S<:ValueSupport,Real}",
    "page": "Univariate Distributions",
    "title": "Distributions.invlogcdf",
    "category": "method",
    "text": "invlogcdf(d::UnivariateDistribution, lp::Real)\n\nThe inverse function of logcdf.\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.invlogccdf-Tuple{Distribution{Univariate,S} where S<:ValueSupport,Real}",
    "page": "Univariate Distributions",
    "title": "Distributions.invlogccdf",
    "category": "method",
    "text": "invlogcdf(d::UnivariateDistribution, lp::Real)\n\nThe inverse function of logcdf.\n\n\n\n\n\n"
},

{
    "location": "univariate/#Probability-Evaluation-1",
    "page": "Univariate Distributions",
    "title": "Probability Evaluation",
    "category": "section",
    "text": "insupport(::UnivariateDistribution, x::Any)\npdf(::UnivariateDistribution, ::Real)\nlogpdf(::UnivariateDistribution, ::Real)\nloglikelihood(::UnivariateDistribution, ::AbstractArray)\ncdf(::UnivariateDistribution, ::Real)\nlogcdf(::UnivariateDistribution, ::Real)\nccdf(::UnivariateDistribution, ::Real)\nlogccdf(::UnivariateDistribution, ::Real)\nquantile(::UnivariateDistribution, ::Real)\ncquantile(::UnivariateDistribution, ::Real)\ninvlogcdf(::UnivariateDistribution, ::Real)\ninvlogccdf(::UnivariateDistribution, ::Real)"
},

{
    "location": "univariate/#Base.rand-Tuple{Distribution{Univariate,S} where S<:ValueSupport}",
    "page": "Univariate Distributions",
    "title": "Base.rand",
    "category": "method",
    "text": "rand(d::UnivariateDistribution)\n\nGenerate a scalar sample from d. The general fallback is quantile(d, rand()).\n\nrand(d::UnivariateDistribution, n::Int) -> Vector\n\nGenerates a vector of n random scalar samples from d. The general fallback is to pick random samples from sampler(d).\n\n\n\n\n\n"
},

{
    "location": "univariate/#Random.rand!-Tuple{Distribution{Univariate,S} where S<:ValueSupport,AbstractArray}",
    "page": "Univariate Distributions",
    "title": "Random.rand!",
    "category": "method",
    "text": "rand!(d::UnivariateDistribution, A::AbstractArray)\n\nPopulates the array A with scalar samples from d. The general fallback is to pick random samples from sampler(d).\n\n\n\n\n\n"
},

{
    "location": "univariate/#Sampling-(Random-number-generation)-1",
    "page": "Univariate Distributions",
    "title": "Sampling (Random number generation)",
    "category": "section",
    "text": "rand(::UnivariateDistribution)\nrand!(::UnivariateDistribution, ::AbstractArray)"
},

{
    "location": "univariate/#Distributions.Arcsine",
    "page": "Univariate Distributions",
    "title": "Distributions.Arcsine",
    "category": "type",
    "text": "Arcsine(a,b)\n\nThe Arcsine distribution has probability density function\n\nf(x) = frac1pi sqrt(x - a) (b - x) quad x in a b\n\nArcsine()        # Arcsine distribution with support [0, 1]\nArcsine(b)       # Arcsine distribution with support [0, b]\nArcsine(a, b)    # Arcsine distribution with support [a, b]\n\nparams(d)        # Get the parameters, i.e. (a, b)\nminimum(d)       # Get the lower bound, i.e. a\nmaximum(d)       # Get the upper bound, i.e. b\nlocation(d)      # Get the left bound, i.e. a\nscale(d)         # Get the span of the support, i.e. b - a\n\nExternal links\n\nArcsine distribution on Wikipedia\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.Beta",
    "page": "Univariate Distributions",
    "title": "Distributions.Beta",
    "category": "type",
    "text": "Beta(α,β)\n\nThe Beta distribution has probability density function\n\nf(x alpha beta) = frac1B(alpha beta)\n x^alpha - 1 (1 - x)^beta - 1 quad x in 0 1\n\nThe Beta distribution is related to the Gamma distribution via the property that if X sim operatornameGamma(alpha) and Y sim operatornameGamma(beta) independently, then X  (X + Y) sim Beta(alpha beta).\n\nBeta()        # equivalent to Beta(1, 1)\nBeta(a)       # equivalent to Beta(a, a)\nBeta(a, b)    # Beta distribution with shape parameters a and b\n\nparams(d)     # Get the parameters, i.e. (a, b)\n\nExternal links\n\nBeta distribution on Wikipedia\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.BetaPrime",
    "page": "Univariate Distributions",
    "title": "Distributions.BetaPrime",
    "category": "type",
    "text": "BetaPrime(α,β)\n\nThe Beta prime distribution has probability density function\n\nf(x alpha beta) = frac1B(alpha beta)\nx^alpha - 1 (1 + x)^- (alpha + beta) quad x  0\n\nThe Beta prime distribution is related to the Beta distribution via the relation ship that if X sim operatornameBeta(alpha beta) then fracX1 - X sim operatornameBetaPrime(alpha beta)\n\nBetaPrime()        # equivalent to BetaPrime(1, 1)\nBetaPrime(a)       # equivalent to BetaPrime(a, a)\nBetaPrime(a, b)    # Beta prime distribution with shape parameters a and b\n\nparams(d)          # Get the parameters, i.e. (a, b)\n\nExternal links\n\nBeta prime distribution on Wikipedia\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.Biweight",
    "page": "Univariate Distributions",
    "title": "Distributions.Biweight",
    "category": "type",
    "text": "Biweight(μ, σ)\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.Cauchy",
    "page": "Univariate Distributions",
    "title": "Distributions.Cauchy",
    "category": "type",
    "text": "Cauchy(μ, σ)\n\nThe Cauchy distribution with location μ and scale σ has probability density function\n\nf(x mu sigma) = frac1pi sigma left(1 + left(fracx - musigma right)^2 right)\n\nCauchy()         # Standard Cauchy distribution, i.e. Cauchy(0, 1)\nCauchy(u)        # Cauchy distribution with location u and unit scale, i.e. Cauchy(u, 1)\nCauchy(u, b)     # Cauchy distribution with location u and scale b\n\nparams(d)        # Get the parameters, i.e. (u, b)\nlocation(d)      # Get the location parameter, i.e. u\nscale(d)         # Get the scale parameter, i.e. b\n\nExternal links\n\nCauchy distribution on Wikipedia\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.Chi",
    "page": "Univariate Distributions",
    "title": "Distributions.Chi",
    "category": "type",
    "text": "Chi(ν)\n\nThe Chi distribution ν degrees of freedom has probability density function\n\nf(x k) = frac1Gamma(k2) 2^1 - k2 x^k-1 e^-x^22 quad x  0\n\nIt is the distribution of the square-root of a Chisq variate.\n\nChi(k)       # Chi distribution with k degrees of freedom\n\nparams(d)    # Get the parameters, i.e. (k,)\ndof(d)       # Get the degrees of freedom, i.e. k\n\nExternal links\n\nChi distribution on Wikipedia\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.Chisq",
    "page": "Univariate Distributions",
    "title": "Distributions.Chisq",
    "category": "type",
    "text": "Chisq(ν)\n\nThe Chi squared distribution (typically written χ²) with ν degrees of freedom has the probability density function\n\nf(x k) = fracx^k2 - 1 e^-x22^k2 Gamma(k2) quad x  0\n\nIf ν is an integer, then it is the distribution of the sum of squares of ν independent standard Normal variates.\n\nChisq(k)     # Chi-squared distribution with k degrees of freedom\n\nparams(d)    # Get the parameters, i.e. (k,)\ndof(d)       # Get the degrees of freedom, i.e. k\n\nExternal links\n\nChi-squared distribution on Wikipedia\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.Cosine",
    "page": "Univariate Distributions",
    "title": "Distributions.Cosine",
    "category": "type",
    "text": "Cosine(μ, σ)\n\nA raised Cosine distribution.\n\nExternal link:\n\nCosine distribution on wikipedia\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.Epanechnikov",
    "page": "Univariate Distributions",
    "title": "Distributions.Epanechnikov",
    "category": "type",
    "text": "Epanechnikov(μ, σ)\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.Erlang",
    "page": "Univariate Distributions",
    "title": "Distributions.Erlang",
    "category": "type",
    "text": "Erlang(α,θ)\n\nThe Erlang distribution is a special case of a Gamma distribution with integer shape parameter.\n\nErlang()       # Erlang distribution with unit shape and unit scale, i.e. Erlang(1, 1)\nErlang(a)      # Erlang distribution with shape parameter a and unit scale, i.e. Erlang(a, 1)\nErlang(a, s)   # Erlang distribution with shape parameter a and scale b\n\nExternal links\n\nErlang distribution on Wikipedia\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.Exponential",
    "page": "Univariate Distributions",
    "title": "Distributions.Exponential",
    "category": "type",
    "text": "Exponential(θ)\n\nThe Exponential distribution with scale parameter θ has probability density function\n\nf(x theta) = frac1theta e^-fracxtheta quad x  0\n\nExponential()      # Exponential distribution with unit scale, i.e. Exponential(1)\nExponential(b)     # Exponential distribution with scale b\n\nparams(d)          # Get the parameters, i.e. (b,)\nscale(d)           # Get the scale parameter, i.e. b\nrate(d)            # Get the rate parameter, i.e. 1 / b\n\nExternal links\n\nExponential distribution on Wikipedia\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.FDist",
    "page": "Univariate Distributions",
    "title": "Distributions.FDist",
    "category": "type",
    "text": "FDist(ν1, ν2)\n\nThe F distribution has probability density function\n\nf(x nu_1 nu_2) = frac1x B(nu_12 nu_22)\nsqrtfrac(nu_1 x)^nu_1 cdot nu_2^nu_2(nu_1 x + nu_2)^nu_1 + nu_2 quad x0\n\nIt is related to the Chisq distribution via the property that if X_1 sim operatornameChisq(nu_1) and X_2 sim operatornameChisq(nu_2), then (X_1nu_1)  (X_2  nu_2) sim operatornameFDist(nu_1 nu_2).\n\nFDist(ν1, ν2)     # F-Distribution with parameters ν1 and ν2\n\nparams(d)         # Get the parameters, i.e. (ν1, ν2)\n\nExternal links\n\nF distribution on Wikipedia\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.Frechet",
    "page": "Univariate Distributions",
    "title": "Distributions.Frechet",
    "category": "type",
    "text": "Frechet(α,θ)\n\nThe Fréchet distribution with shape α and scale θ has probability density function\n\nf(x alpha theta) = fracalphatheta left( fracxtheta right)^-alpha-1\ne^-(xtheta)^-alpha quad x  0\n\nFrechet()        # Fréchet distribution with unit shape and unit scale, i.e. Frechet(1, 1)\nFrechet(a)       # Fréchet distribution with shape a and unit scale, i.e. Frechet(a, 1)\nFrechet(a, b)    # Fréchet distribution with shape a and scale b\n\nparams(d)        # Get the parameters, i.e. (a, b)\nshape(d)         # Get the shape parameter, i.e. a\nscale(d)         # Get the scale parameter, i.e. b\n\nExternal links\n\nFréchet_distribution on Wikipedia\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.Gamma",
    "page": "Univariate Distributions",
    "title": "Distributions.Gamma",
    "category": "type",
    "text": "Gamma(α,θ)\n\nThe Gamma distribution with shape parameter α and scale θ has probability density function\n\nf(x alpha theta) = fracx^alpha-1 e^-xthetaGamma(alpha) theta^alpha\nquad x  0\n\nGamma()          # Gamma distribution with unit shape and unit scale, i.e. Gamma(1, 1)\nGamma(α)         # Gamma distribution with shape α and unit scale, i.e. Gamma(α, 1)\nGamma(α, θ)      # Gamma distribution with shape α and scale θ\n\nparams(d)        # Get the parameters, i.e. (α, θ)\nshape(d)         # Get the shape parameter, i.e. α\nscale(d)         # Get the scale parameter, i.e. θ\n\nExternal links\n\nGamma distribution on Wikipedia\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.GeneralizedExtremeValue",
    "page": "Univariate Distributions",
    "title": "Distributions.GeneralizedExtremeValue",
    "category": "type",
    "text": "GeneralizedExtremeValue(μ, σ, ξ)\n\nThe Generalized extreme value distribution with shape parameter ξ, scale σ and location μ has probability density function\n\nf(x xi sigma mu) = begincases\n        frac1sigma left 1+left(fracx-musigmaright)xiright^-1xi-1 expleft-left 1+ left(fracx-musigmaright)xiright^-1xi right  textfor  xi neq 0  \n        frac1sigma expleft-fracx-musigmaright expleft-expleft-fracx-musigmarightright  textfor  xi = 0 \n    endcases\n\nfor\n\nx in begincases\n        left mu - fracsigmaxi + infty right)  textfor  xi  0 \n        left( - infty + infty right)  textfor  xi = 0 \n        left( - infty mu - fracsigmaxi right  textfor  xi  0\n    endcases\n\nGeneralizedExtremeValue(m, s, k)      # Generalized Pareto distribution with shape k, scale s and location m.\n\nparams(d)       # Get the parameters, i.e. (m, s, k)\nlocation(d)     # Get the location parameter, i.e. m\nscale(d)        # Get the scale parameter, i.e. s\nshape(d)        # Get the shape parameter, i.e. k (sometimes called c)\n\nExternal links\n\nGeneralized extreme value distribution on Wikipedia\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.GeneralizedPareto",
    "page": "Univariate Distributions",
    "title": "Distributions.GeneralizedPareto",
    "category": "type",
    "text": "GeneralizedPareto(μ, σ, ξ)\n\nThe Generalized Pareto distribution with shape parameter ξ, scale σ and location μ has probability density function\n\nf(x mu sigma xi) = begincases\n        frac1sigma(1 + xi fracx - musigma )^-frac1xi - 1  textfor  xi neq 0 \n        frac1sigma e^-fracleft( x - mu right) sigma  textfor  xi = 0\n    endcases\n    quad x in begincases\n        left mu infty right  textfor  xi geq 0 \n        left mu mu - sigma  xi right  textfor  xi  0\n    endcases\n\nGeneralizedPareto()             # Generalized Pareto distribution with unit shape and unit scale, i.e. GeneralizedPareto(0, 1, 1)\nGeneralizedPareto(k, s)         # Generalized Pareto distribution with shape k and scale s, i.e. GeneralizedPareto(0, k, s)\nGeneralizedPareto(m, k, s)      # Generalized Pareto distribution with shape k, scale s and location m.\n\nparams(d)       # Get the parameters, i.e. (m, s, k)\nlocation(d)     # Get the location parameter, i.e. m\nscale(d)        # Get the scale parameter, i.e. s\nshape(d)        # Get the shape parameter, i.e. k\n\nExternal links\n\nGeneralized Pareto distribution on Wikipedia\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.Gumbel",
    "page": "Univariate Distributions",
    "title": "Distributions.Gumbel",
    "category": "type",
    "text": "Gumbel(μ, θ)\n\nThe Gumbel distribution  with location μ and scale θ has probability density function\n\nf(x mu theta) = frac1theta e^-(z + e^z)\nquad text with  z = fracx - mutheta\n\nGumbel()            # Gumbel distribution with zero location and unit scale, i.e. Gumbel(0, 1)\nGumbel(u)           # Gumbel distribution with location u and unit scale, i.e. Gumbel(u, 1)\nGumbel(u, b)        # Gumbel distribution with location u and scale b\n\nparams(d)        # Get the parameters, i.e. (u, b)\nlocation(d)      # Get the location parameter, i.e. u\nscale(d)         # Get the scale parameter, i.e. b\n\nExternal links\n\nGumbel distribution on Wikipedia\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.InverseGamma",
    "page": "Univariate Distributions",
    "title": "Distributions.InverseGamma",
    "category": "type",
    "text": "InverseGamma(α, θ)\n\nThe inverse Gamma distribution with shape parameter α and scale θ has probability density function\n\nf(x alpha theta) = fractheta^alpha x^-(alpha + 1)Gamma(alpha)\ne^-fracthetax quad x  0\n\nIt is related to the Gamma distribution: if X sim operatornameGamma(alpha beta), then 1  X sim operatornameInverseGamma(alpha beta^-1).\n\nInverseGamma()        # Inverse Gamma distribution with unit shape and unit scale, i.e. InverseGamma(1, 1)\nInverseGamma(α)       # Inverse Gamma distribution with shape α and unit scale, i.e. InverseGamma(α, 1)\nInverseGamma(α, θ)    # Inverse Gamma distribution with shape α and scale θ\n\nparams(d)        # Get the parameters, i.e. (α, θ)\nshape(d)         # Get the shape parameter, i.e. α\nscale(d)         # Get the scale parameter, i.e. θ\n\nExternal links\n\nInverse gamma distribution on Wikipedia\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.InverseGaussian",
    "page": "Univariate Distributions",
    "title": "Distributions.InverseGaussian",
    "category": "type",
    "text": "InverseGaussian(μ,λ)\n\nThe inverse Gaussian distribution with mean μ and shape λ has probability density function\n\nf(x mu lambda) = sqrtfraclambda2pi x^3\nexpleft(frac-lambda(x-mu)^22mu^2xright) quad x  0\n\nInverseGaussian()              # Inverse Gaussian distribution with unit mean and unit shape, i.e. InverseGaussian(1, 1)\nInverseGaussian(mu),           # Inverse Gaussian distribution with mean mu and unit shape, i.e. InverseGaussian(u, 1)\nInverseGaussian(mu, lambda)    # Inverse Gaussian distribution with mean mu and shape lambda\n\nparams(d)           # Get the parameters, i.e. (mu, lambda)\nmean(d)             # Get the mean parameter, i.e. mu\nshape(d)            # Get the shape parameter, i.e. lambda\n\nExternal links\n\nInverse Gaussian distribution on Wikipedia\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.Kolmogorov",
    "page": "Univariate Distributions",
    "title": "Distributions.Kolmogorov",
    "category": "type",
    "text": "Kolmogorov()\n\nKolmogorov distribution defined as\n\nsup_t in 01 B(t)\n\nwhere B(t) is a Brownian bridge used in the Kolmogorov–Smirnov test for large n.\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.KSDist",
    "page": "Univariate Distributions",
    "title": "Distributions.KSDist",
    "category": "type",
    "text": "KSDist(n)\n\nDistribution of the (two-sided) Kolmogorov-Smirnoff statistic\n\nD_n = sup_x  hatF_n(x) -F(x) sqrt(n)\n\nD_n converges a.s. to the Kolmogorov distribution.\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.KSOneSided",
    "page": "Univariate Distributions",
    "title": "Distributions.KSOneSided",
    "category": "type",
    "text": "KSOneSided(n)\n\nDistribution of the one-sided Kolmogorov-Smirnov test statistic:\n\nD^+_n = sup_x (hatF_n(x) -F(x))\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.Laplace",
    "page": "Univariate Distributions",
    "title": "Distributions.Laplace",
    "category": "type",
    "text": "Laplace(μ,θ)\n\nThe Laplace distribution with location μ and scale θ has probability density function\n\nf(x mu beta) = frac12 beta exp left(- fracx - mubeta right)\n\nLaplace()       # Laplace distribution with zero location and unit scale, i.e. Laplace(0, 1)\nLaplace(u)      # Laplace distribution with location u and unit scale, i.e. Laplace(u, 1)\nLaplace(u, b)   # Laplace distribution with location u ans scale b\n\nparams(d)       # Get the parameters, i.e. (u, b)\nlocation(d)     # Get the location parameter, i.e. u\nscale(d)        # Get the scale parameter, i.e. b\n\nExternal links\n\nLaplace distribution on Wikipedia\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.Levy",
    "page": "Univariate Distributions",
    "title": "Distributions.Levy",
    "category": "type",
    "text": "Levy(μ, σ)\n\nThe Lévy distribution with location μ and scale σ has probability density function\n\nf(x mu sigma) = sqrtfracsigma2 pi (x - mu)^3\nexp left( - fracsigma2 (x - mu) right) quad x  mu\n\nLevy()         # Levy distribution with zero location and unit scale, i.e. Levy(0, 1)\nLevy(u)        # Levy distribution with location u and unit scale, i.e. Levy(u, 1)\nLevy(u, c)     # Levy distribution with location u ans scale c\n\nparams(d)      # Get the parameters, i.e. (u, c)\nlocation(d)    # Get the location parameter, i.e. u\n\nExternal links\n\nLévy distribution on Wikipedia\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.Logistic",
    "page": "Univariate Distributions",
    "title": "Distributions.Logistic",
    "category": "type",
    "text": "Logistic(μ,θ)\n\nThe Logistic distribution with location μ and scale θ has probability density function\n\nf(x mu theta) = frac14 theta mathrmsech^2\nleft( fracx - mu2 theta right)\n\nLogistic()       # Logistic distribution with zero location and unit scale, i.e. Logistic(0, 1)\nLogistic(u)      # Logistic distribution with location u and unit scale, i.e. Logistic(u, 1)\nLogistic(u, b)   # Logistic distribution with location u ans scale b\n\nparams(d)       # Get the parameters, i.e. (u, b)\nlocation(d)     # Get the location parameter, i.e. u\nscale(d)        # Get the scale parameter, i.e. b\n\nExternal links\n\nLogistic distribution on Wikipedia\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.LogNormal",
    "page": "Univariate Distributions",
    "title": "Distributions.LogNormal",
    "category": "type",
    "text": "LogNormal(μ,σ)\n\nThe log normal distribution is the distribution of the exponential of a Normal variate: if X sim operatornameNormal(mu sigma) then exp(X) sim operatornameLogNormal(musigma). The probability density function is\n\nf(x mu sigma) = frac1x sqrt2 pi sigma^2\nexp left( - frac(log(x) - mu)^22 sigma^2 right)\nquad x  0\n\nLogNormal()          # Log-normal distribution with zero log-mean and unit scale\nLogNormal(mu)        # Log-normal distribution with log-mean mu and unit scale\nLogNormal(mu, sig)   # Log-normal distribution with log-mean mu and scale sig\n\nparams(d)            # Get the parameters, i.e. (mu, sig)\nmeanlogx(d)          # Get the mean of log(X), i.e. mu\nvarlogx(d)           # Get the variance of log(X), i.e. sig^2\nstdlogx(d)           # Get the standard deviation of log(X), i.e. sig\n\nExternal links\n\nLog normal distribution on Wikipedia\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.NoncentralBeta",
    "page": "Univariate Distributions",
    "title": "Distributions.NoncentralBeta",
    "category": "type",
    "text": "NoncentralBeta(α, β, λ)\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.NoncentralChisq",
    "page": "Univariate Distributions",
    "title": "Distributions.NoncentralChisq",
    "category": "type",
    "text": "NoncentralChisq(ν, λ)\n\nThe noncentral chi-squared distribution with ν degrees of freedom and noncentrality parameter λ has the probability density function\n\nf(x nu lambda) = frac12 e^-(x + lambda)2 left( fracxlambda right)^nu4-12 I_nu2-1(sqrtlambda x) quad x  0\n\nIt is the distribution of the sum of squares of ν independent Normal variates with individual means mu_i and\n\nlambda = sum_i=1^nu mu_i^2\n\nNoncentralChisq(ν, λ)     # Noncentral chi-squared distribution with ν degrees of freedom and noncentrality parameter λ\n\nparams(d)    # Get the parameters, i.e. (ν, λ)\n\nExternal links\n\nNoncentral chi-squared distribution on Wikipedia\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.NoncentralF",
    "page": "Univariate Distributions",
    "title": "Distributions.NoncentralF",
    "category": "type",
    "text": "NoncentralF(ν1, ν2, λ)\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.NoncentralT",
    "page": "Univariate Distributions",
    "title": "Distributions.NoncentralT",
    "category": "type",
    "text": "NoncentralT(ν, λ)\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.Normal",
    "page": "Univariate Distributions",
    "title": "Distributions.Normal",
    "category": "type",
    "text": "Normal(μ,σ)\n\nThe Normal distribution with mean μ and standard deviation σ has probability density function\n\nf(x mu sigma) = frac1sqrt2 pi sigma^2\nexp left( - frac(x - mu)^22 sigma^2 right)\n\nNormal()          # standard Normal distribution with zero mean and unit variance\nNormal(mu)        # Normal distribution with mean mu and unit variance\nNormal(mu, sig)   # Normal distribution with mean mu and variance sig^2\n\nparams(d)         # Get the parameters, i.e. (mu, sig)\nmean(d)           # Get the mean, i.e. mu\nstd(d)            # Get the standard deviation, i.e. sig\n\nExternal links\n\nNormal distribution on Wikipedia\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.NormalCanon",
    "page": "Univariate Distributions",
    "title": "Distributions.NormalCanon",
    "category": "type",
    "text": "NormalCanon(η, λ)\n\nCanonical Form of Normal distribution\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.NormalInverseGaussian",
    "page": "Univariate Distributions",
    "title": "Distributions.NormalInverseGaussian",
    "category": "type",
    "text": "NormalInverseGaussian(μ,α,β,δ)\n\nThe Normal-inverse Gaussian distribution with location μ, tail heaviness α, asymmetry parameter β and scale δ has probability density function\n\nf(x mu alpha beta delta) = fracalphadelta K_1 left(alphasqrtdelta^2 + (x - mu)^2right)pi sqrtdelta^2 + (x - mu)^2  e^delta gamma + beta (x - mu)\n\nwhere K_j denotes a modified Bessel function of the third kind.\n\nExternal links\n\nNormal-inverse Gaussian distribution on Wikipedia\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.Pareto",
    "page": "Univariate Distributions",
    "title": "Distributions.Pareto",
    "category": "type",
    "text": "Pareto(α,θ)\n\nThe Pareto distribution with shape α and scale θ has probability density function\n\nf(x alpha theta) = fracalpha theta^alphax^alpha + 1 quad x ge theta\n\nPareto()            # Pareto distribution with unit shape and unit scale, i.e. Pareto(1, 1)\nPareto(a)           # Pareto distribution with shape a and unit scale, i.e. Pareto(a, 1)\nPareto(a, b)        # Pareto distribution with shape a and scale b\n\nparams(d)        # Get the parameters, i.e. (a, b)\nshape(d)         # Get the shape parameter, i.e. a\nscale(d)         # Get the scale parameter, i.e. b\n\nExternal links\n\nPareto distribution on Wikipedia\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.Rayleigh",
    "page": "Univariate Distributions",
    "title": "Distributions.Rayleigh",
    "category": "type",
    "text": "Rayleigh(σ)\n\nThe Rayleigh distribution with scale σ has probability density function\n\nf(x sigma) = fracxsigma^2 e^-fracx^22 sigma^2 quad x  0\n\nIt is related to the Normal distribution via the property that if X Y sim operatornameNormal(0sigma), independently, then sqrtX^2 + Y^2 sim operatornameRayleigh(sigma).\n\nRayleigh()       # Rayleigh distribution with unit scale, i.e. Rayleigh(1)\nRayleigh(s)      # Rayleigh distribution with scale s\n\nparams(d)        # Get the parameters, i.e. (s,)\nscale(d)         # Get the scale parameter, i.e. s\n\nExternal links\n\nRayleigh distribution on Wikipedia\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.Semicircle",
    "page": "Univariate Distributions",
    "title": "Distributions.Semicircle",
    "category": "type",
    "text": "Semicircle(r)\n\nThe Wigner semicircle distribution with radius parameter r has probability density function\n\nf(x r) = frac2pi r^2 sqrtr^2 - x^2 quad x in -r r\n\nSemicircle(r)   # Wigner semicircle distribution with radius r\n\nparams(d)       # Get the radius parameter, i.e. (r,)\n\nExternal links\n\nWigner semicircle distribution on Wikipedia\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.SymTriangularDist",
    "page": "Univariate Distributions",
    "title": "Distributions.SymTriangularDist",
    "category": "type",
    "text": "SymTriangularDist(μ,σ)\n\nThe Symmetric triangular distribution with location μ and scale σ has probability density function\n\nf(x mu sigma) = frac1sigma left( 1 - left fracx - musigma right right) quad mu - sigma le x le mu + sigma\n\nSymTriangularDist()         # Symmetric triangular distribution with zero location and unit scale\nSymTriangularDist(u)        # Symmetric triangular distribution with location u and unit scale\nSymTriangularDist(u, s)     # Symmetric triangular distribution with location u and scale s\n\nparams(d)       # Get the parameters, i.e. (u, s)\nlocation(d)     # Get the location parameter, i.e. u\nscale(d)        # Get the scale parameter, i.e. s\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.TDist",
    "page": "Univariate Distributions",
    "title": "Distributions.TDist",
    "category": "type",
    "text": "TDist(ν)\n\nThe Students T distribution with ν degrees of freedom has probability density function\n\nf(x d) = frac1sqrtd B(12 d2)\nleft( 1 + fracx^2d right)^-fracd + 12\n\nTDist(d)      # t-distribution with d degrees of freedom\n\nparams(d)     # Get the parameters, i.e. (d,)\ndof(d)        # Get the degrees of freedom, i.e. d\n\nExternal links\n\nStudent\'s T distribution on Wikipedia\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.TriangularDist",
    "page": "Univariate Distributions",
    "title": "Distributions.TriangularDist",
    "category": "type",
    "text": "TriangularDist(a,b,c)\n\nThe triangular distribution with lower limit a, upper limit b and mode c has probability density function\n\nf(x a b c)= begincases\n        0  mathrmfor  x  a \n        frac2(x-a)(b-a)(c-a)  mathrmfor  a le x leq c 4pt\n        frac2(b-x)(b-a)(b-c)  mathrmfor  c  x le b 4pt\n        0  mathrmfor  b  x\n        endcases\n\nTriangularDist(a, b)        # Triangular distribution with lower limit a, upper limit b, and mode (a+b)/2\nTriangularDist(a, b, c)     # Triangular distribution with lower limit a, upper limit b, and mode c\n\nparams(d)       # Get the parameters, i.e. (a, b, c)\nminimum(d)      # Get the lower bound, i.e. a\nmaximum(d)      # Get the upper bound, i.e. b\nmode(d)         # Get the mode, i.e. c\n\nExternal links\n\nTriangular distribution on Wikipedia\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.Triweight",
    "page": "Univariate Distributions",
    "title": "Distributions.Triweight",
    "category": "type",
    "text": "Triweight(μ, σ)\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.Uniform",
    "page": "Univariate Distributions",
    "title": "Distributions.Uniform",
    "category": "type",
    "text": "Uniform(a,b)\n\nThe continuous uniform distribution over an interval a b has probability density function\n\nf(x a b) = frac1b - a quad a le x le b\n\nUniform()        # Uniform distribution over [0, 1]\nUniform(a, b)    # Uniform distribution over [a, b]\n\nparams(d)        # Get the parameters, i.e. (a, b)\nminimum(d)       # Get the lower bound, i.e. a\nmaximum(d)       # Get the upper bound, i.e. b\nlocation(d)      # Get the location parameter, i.e. a\nscale(d)         # Get the scale parameter, i.e. b - a\n\nExternal links\n\nUniform distribution (continuous) on Wikipedia\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.VonMises",
    "page": "Univariate Distributions",
    "title": "Distributions.VonMises",
    "category": "type",
    "text": "VonMises(μ, κ)\n\nThe von Mises distribution with mean μ and concentration κ has probability density function\n\nf(x mu kappa) = frac12 pi I_0(kappa) exp left( kappa cos (x - mu) right)\n\nVonMises()       # von Mises distribution with zero mean and unit concentration\nVonMises(κ)      # von Mises distribution with zero mean and concentration κ\nVonMises(μ, κ)   # von Mises distribution with mean μ and concentration κ\n\nExternal links\n\nvon Mises distribution on Wikipedia\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.Weibull",
    "page": "Univariate Distributions",
    "title": "Distributions.Weibull",
    "category": "type",
    "text": "Weibull(α,θ)\n\nThe Weibull distribution with shape α and scale θ has probability density function\n\nf(x alpha theta) = fracalphatheta left( fracxtheta right)^alpha-1 e^-(xtheta)^alpha\n    quad x ge 0\n\nWeibull()        # Weibull distribution with unit shape and unit scale, i.e. Weibull(1, 1)\nWeibull(a)       # Weibull distribution with shape a and unit scale, i.e. Weibull(a, 1)\nWeibull(a, b)    # Weibull distribution with shape a and scale b\n\nparams(d)        # Get the parameters, i.e. (a, b)\nshape(d)         # Get the shape parameter, i.e. a\nscale(d)         # Get the scale parameter, i.e. b\n\nExternal links\n\nWeibull distribution on Wikipedia\n\n\n\n\n\n"
},

{
    "location": "univariate/#Continuous-Distributions-1",
    "page": "Univariate Distributions",
    "title": "Continuous Distributions",
    "category": "section",
    "text": "Arcsine\nBeta\nBetaPrime\nBiweight\nCauchy\nChi\nChisq\nCosine\nEpanechnikov\nErlang\nExponential\nFDist\nFrechet\nGamma\nGeneralizedExtremeValue\nGeneralizedPareto\nGumbel\nInverseGamma\nInverseGaussian\nKolmogorov\nKSDist\nKSOneSided\nLaplace\nLevy\nLogistic\nLogNormal\nNoncentralBeta\nNoncentralChisq\nNoncentralF\nNoncentralT\nNormal\nNormalCanon\nNormalInverseGaussian\nPareto\nRayleigh\nSemicircle\nSymTriangularDist\nTDist\nTriangularDist\nTriweight\nUniform\nVonMises\nWeibull"
},

{
    "location": "univariate/#Distributions.Bernoulli",
    "page": "Univariate Distributions",
    "title": "Distributions.Bernoulli",
    "category": "type",
    "text": "Bernoulli(p)\n\nA Bernoulli distribution is parameterized by a success rate p, which takes value 1 with probability p and 0 with probability 1-p.\n\nP(X = k) = begincases\n1 - p  quad textfor  k = 0 \np  quad textfor  k = 1\nendcases\n\nBernoulli()    # Bernoulli distribution with p = 0.5\nBernoulli(p)   # Bernoulli distribution with success rate p\n\nparams(d)      # Get the parameters, i.e. (p,)\nsuccprob(d)    # Get the success rate, i.e. p\nfailprob(d)    # Get the failure rate, i.e. 1 - p\n\nExternal links:\n\nBernoulli distribution on Wikipedia\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.succprob",
    "page": "Univariate Distributions",
    "title": "Distributions.succprob",
    "category": "function",
    "text": "succprob(d::DiscreteUnivariateDistribution)\n\nGet the probability of success.\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.failprob",
    "page": "Univariate Distributions",
    "title": "Distributions.failprob",
    "category": "function",
    "text": "failprob(d::DiscreteUnivariateDistribution)\n\nGet the probability of failure.\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.BetaBinomial",
    "page": "Univariate Distributions",
    "title": "Distributions.BetaBinomial",
    "category": "type",
    "text": "BetaBinomial(n,α,β)\n\nA Beta-binomial distribution is the compound distribution of the Binomial distribution where the probability of success p is distributed according to the Beta. It has three parameters: n, the number of trials and two shape parameters α, β\n\nP(X = k) = n choose k B(k + alpha n - k + beta)  B(alpha beta)  quad text for  k = 012 ldots n\n\nBetaBinomial(n, a, b)      # BetaBinomial distribution with n trials and shape parameters a, b\n\nparams(d)       # Get the parameters, i.e. (n, a, b)\nntrials(d)      # Get the number of trials, i.e. n\n\nExternal links:\n\nBeta-binomial distribution on Wikipedia\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.Binomial",
    "page": "Univariate Distributions",
    "title": "Distributions.Binomial",
    "category": "type",
    "text": "Binomial(n,p)\n\nA Binomial distribution characterizes the number of successes in a sequence of independent trials. It has two parameters: n, the number of trials, and p, the probability of success in an individual trial, with the distribution:\n\nP(X = k) = n choose kp^k(1-p)^n-k  quad text for  k = 012 ldots n\n\nBinomial()      # Binomial distribution with n = 1 and p = 0.5\nBinomial(n)     # Binomial distribution for n trials with success rate p = 0.5\nBinomial(n, p)  # Binomial distribution for n trials with success rate p\n\nparams(d)       # Get the parameters, i.e. (n, p)\nntrials(d)      # Get the number of trials, i.e. n\nsuccprob(d)     # Get the success rate, i.e. p\nfailprob(d)     # Get the failure rate, i.e. 1 - p\n\nExternal links:\n\nBinomial distribution on Wikipedia\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.Categorical",
    "page": "Univariate Distributions",
    "title": "Distributions.Categorical",
    "category": "type",
    "text": "Categorical(p)\n\nA Categorical distribution is parameterized by a probability vector p (of length K).\n\nP(X = k) = pk  quad textfor  k = 1 2 ldots K\n\nCategorical(p)   # Categorical distribution with probability vector p\nparams(d)        # Get the parameters, i.e. (p,)\nprobs(d)         # Get the probability vector, i.e. p\nncategories(d)   # Get the number of categories, i.e. K\n\nHere, p must be a real vector, of which all components are nonnegative and sum to one. Note: The input vector p is directly used as a field of the constructed distribution, without being copied. External links:\n\nCategorical distribution on Wikipedia\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.DiscreteUniform",
    "page": "Univariate Distributions",
    "title": "Distributions.DiscreteUniform",
    "category": "type",
    "text": "DiscreteUniform(a,b)\n\nA Discrete uniform distribution is a uniform distribution over a consecutive sequence of integers between a and b, inclusive.\n\nP(X = k) = 1  (b - a + 1) quad textfor  k = a a+1 ldots b\n\nDiscreteUniform(a, b)   # a uniform distribution over {a, a+1, ..., b}\n\nparams(d)       # Get the parameters, i.e. (a, b)\nspan(d)         # Get the span of the support, i.e. (b - a + 1)\nprobval(d)      # Get the probability value, i.e. 1 / (b - a + 1)\nminimum(d)      # Return a\nmaximum(d)      # Return b\n\nExternal links\n\nDiscrete uniform distribution on Wikipedia\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.Geometric",
    "page": "Univariate Distributions",
    "title": "Distributions.Geometric",
    "category": "type",
    "text": "Geometric(p)\n\nA Geometric distribution characterizes the number of failures before the first success in a sequence of independent Bernoulli trials with success rate p.\n\nP(X = k) = p (1 - p)^k quad textfor  k = 0 1 2 ldots\n\nGeometric()    # Geometric distribution with success rate 0.5\nGeometric(p)   # Geometric distribution with success rate p\n\nparams(d)      # Get the parameters, i.e. (p,)\nsuccprob(d)    # Get the success rate, i.e. p\nfailprob(d)    # Get the failure rate, i.e. 1 - p\n\nExternal links\n\nGeometric distribution on Wikipedia\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.Hypergeometric",
    "page": "Univariate Distributions",
    "title": "Distributions.Hypergeometric",
    "category": "type",
    "text": "Hypergeometric(s, f, n)\n\nA Hypergeometric distribution describes the number of successes in n draws without replacement from a finite population containing s successes and f failures.\n\nP(X = k) = s choose k f choose n-kover s+f choose n quad textfor  k = max(0 n - f) ldots min(n s)\n\nHypergeometric(s, f, n)  # Hypergeometric distribution for a population with\n                         # s successes and f failures, and a sequence of n trials.\n\nparams(d)       # Get the parameters, i.e. (s, f, n)\n\nExternal links\n\nHypergeometric distribution on Wikipedia\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.NegativeBinomial",
    "page": "Univariate Distributions",
    "title": "Distributions.NegativeBinomial",
    "category": "type",
    "text": "NegativeBinomial(r,p)\n\nA Negative binomial distribution describes the number of failures before the rth success in a sequence of independent Bernoulli trials. It is parameterized by r, the number of successes, and p, the probability of success in an individual trial.\n\nP(X = k) = k + r - 1 choose k p^r (1 - p)^k quad textfor  k = 012ldots\n\nThe distribution remains well-defined for any positive r, in which case\n\nP(X = k) = fracGamma(k+r)k Gamma(r) p^r (1 - p)^k quad textfor  k = 012ldots\n\nNegativeBinomial()        # Negative binomial distribution with r = 1 and p = 0.5\nNegativeBinomial(r, p)    # Negative binomial distribution with r successes and success rate p\n\nparams(d)       # Get the parameters, i.e. (r, p)\nsuccprob(d)     # Get the success rate, i.e. p\nfailprob(d)     # Get the failure rate, i.e. 1 - p\n\nExternal links:\n\nNegative binomial distribution on Wikipedia\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.Poisson",
    "page": "Univariate Distributions",
    "title": "Distributions.Poisson",
    "category": "type",
    "text": "Poisson(λ)\n\nA Poisson distribution descibes the number of independent events occurring within a unit time interval, given the average rate of occurrence λ.\n\nP(X = k) = fraclambda^kk e^-lambda quad text for  k = 012ldots\n\nPoisson()        # Poisson distribution with rate parameter 1\nPoisson(lambda)       # Poisson distribution with rate parameter lambda\n\nparams(d)        # Get the parameters, i.e. (λ,)\nmean(d)          # Get the mean arrival rate, i.e. λ\n\nExternal links:\n\nPoisson distribution on Wikipedia\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.PoissonBinomial",
    "page": "Univariate Distributions",
    "title": "Distributions.PoissonBinomial",
    "category": "type",
    "text": "PoissonBinomial(p)\n\nA Poisson-binomial distribution describes the number of successes in a sequence of independent trials, wherein each trial has a different success rate. It is parameterized by a vector p (of length K), where K is the total number of trials and p[i] corresponds to the probability of success of the ith trial.\n\nP(X = k) = sumlimits_Ain F_k prodlimits_iin A pi prodlimits_jin A^c (1-pj) quad text for  k = 012ldotsK\n\nwhere F_k is the set of all subsets of k integers that can be selected from 123K.\n\nPoissonBinomial(p)   # Poisson Binomial distribution with success rate vector p\n\nparams(d)            # Get the parameters, i.e. (p,)\nsuccprob(d)          # Get the vector of success rates, i.e. p\nfailprob(d)          # Get the vector of failure rates, i.e. 1-p\n\nExternal links:\n\nPoisson-binomial distribution on Wikipedia\n\n\n\n\n\n"
},

{
    "location": "univariate/#Distributions.Skellam",
    "page": "Univariate Distributions",
    "title": "Distributions.Skellam",
    "category": "type",
    "text": "Skellam(μ1, μ2)\n\nA Skellam distribution describes the difference between two independent Poisson variables, respectively with rate μ1 and μ2.\n\nP(X = k) = e^-(mu_1 + mu_2) left( fracmu_1mu_2 right)^k2 I_k(2 sqrtmu_1 mu_2) quad textfor integer  k\n\nwhere I_k is the modified Bessel function of the first kind.\n\nSkellam(mu1, mu2)   # Skellam distribution for the difference between two Poisson variables,\n                    # respectively with expected values mu1 and mu2.\n\nparams(d)           # Get the parameters, i.e. (mu1, mu2)\n\nExternal links:\n\nSkellam distribution on Wikipedia\n\n\n\n\n\n"
},

{
    "location": "univariate/#Discrete-Distributions-1",
    "page": "Univariate Distributions",
    "title": "Discrete Distributions",
    "category": "section",
    "text": "Bernoulli\nsuccprob\nfailprob\nBetaBinomial\nBinomial\nCategorical\nDiscreteUniform\nGeometric\nHypergeometric\nNegativeBinomial\nPoisson\nPoissonBinomial\nSkellam"
},

{
    "location": "univariate/#Vectorized-evaluation-1",
    "page": "Univariate Distributions",
    "title": "Vectorized evaluation",
    "category": "section",
    "text": "Vectorized computation and inplace vectorized computation have been deprecated."
},

{
    "location": "truncate/#",
    "page": "Truncated Distributions",
    "title": "Truncated Distributions",
    "category": "page",
    "text": ""
},

{
    "location": "truncate/#Distributions.Truncated",
    "page": "Truncated Distributions",
    "title": "Distributions.Truncated",
    "category": "type",
    "text": "Truncated(d, l, u):\n\nConstruct a truncated distribution.\n\nArguments\n\nd::UnivariateDistribution: The original distribution.\nl::Real: The lower bound of the truncation, which can be a finite value or -Inf.\nu::Real: The upper bound of the truncation, which can be a finite value of Inf.\n\n\n\n\n\n"
},

{
    "location": "truncate/#Distributions.TruncatedNormal",
    "page": "Truncated Distributions",
    "title": "Distributions.TruncatedNormal",
    "category": "function",
    "text": "TruncatedNormal(mu, sigma, l, u)\n\nThe truncated normal distribution is a particularly important one in the family of truncated distributions. We provide additional support for this type with TruncatedNormal which calls Truncated(Normal(mu, sigma), l, u). Unlike the general case, truncated normal distributions support mean, mode, modes, var, std, and entropy.\n\n\n\n\n\n"
},

{
    "location": "truncate/#Truncated-Distributions-1",
    "page": "Truncated Distributions",
    "title": "Truncated Distributions",
    "category": "section",
    "text": "The package provides the Truncated type to represented truncated distributions, which is defined as below:struct Truncated{D<:UnivariateDistribution,S<:ValueSupport} <: Distribution{Univariate,S}\n    untruncated::D      # the original distribution (untruncated)\n    lower::Float64      # lower bound\n    upper::Float64      # upper bound\n    lcdf::Float64       # cdf of lower bound\n    ucdf::Float64       # cdf of upper bound\n\n    tp::Float64         # the probability of the truncated part, i.e. ucdf - lcdf\n    logtp::Float64      # log(tp), i.e. log(ucdf - lcdf)\nendA truncated distribution can be constructed using the constructor Truncated as follows:TruncatedMany functions, including those for the evaluation of pdf and sampling, are defined for all truncated univariate distributions:maximum(::UnivariateDistribution)\nminimum(::UnivariateDistribution)\ninsupport(::UnivariateDistribution, x::Any)\npdf(::UnivariateDistribution, ::Real)\nlogpdf(::UnivariateDistribution, ::Real)\ncdf(::UnivariateDistribution, ::Real)\nlogcdf(::UnivariateDistribution, ::Real)\nccdf(::UnivariateDistribution, ::Real)\nlogccdf(::UnivariateDistribution, ::Real)\nquantile(::UnivariateDistribution, ::Real)\ncquantile(::UnivariateDistribution, ::Real)\ninvlogcdf(::UnivariateDistribution, ::Real)\ninvlogccdf(::UnivariateDistribution, ::Real)\nrand(::UnivariateDistribution)\nrand!(::UnivariateDistribution, ::AbstractArray)\nmedian(::UnivariateDistribution)Functions to compute statistics, such as mean, mode, var, std, and entropy, are not available for generic truncated distributions. Generally, there are no easy ways to compute such quantities due to the complications incurred by truncation. However, these methods are supported for truncated normal distributions.TruncatedNormal"
},

{
    "location": "multivariate/#",
    "page": "Multivariate Distributions",
    "title": "Multivariate Distributions",
    "category": "page",
    "text": ""
},

{
    "location": "multivariate/#multivariates-1",
    "page": "Multivariate Distributions",
    "title": "Multivariate Distributions",
    "category": "section",
    "text": "Multivariate distributions are the distributions whose variate forms are Multivariate (i.e each sample is a vector). Abstract types for multivariate distributions:const MultivariateDistribution{S<:ValueSupport} = Distribution{Multivariate,S}\n\nconst DiscreteMultivariateDistribution   = Distribution{Multivariate, Discrete}\nconst ContinuousMultivariateDistribution = Distribution{Multivariate, Continuous}"
},

{
    "location": "multivariate/#Common-Interface-1",
    "page": "Multivariate Distributions",
    "title": "Common Interface",
    "category": "section",
    "text": "The methods listed as below are implemented for each multivariate distribution, which provides a consistent interface to work with multivariate distributions."
},

{
    "location": "multivariate/#Base.length-Tuple{Distribution{Multivariate,S} where S<:ValueSupport}",
    "page": "Multivariate Distributions",
    "title": "Base.length",
    "category": "method",
    "text": "length(d::MultivariateDistribution) -> Int\n\nReturn the sample dimension of distribution d.\n\n\n\n\n\n"
},

{
    "location": "multivariate/#Base.size-Tuple{Distribution{Multivariate,S} where S<:ValueSupport}",
    "page": "Multivariate Distributions",
    "title": "Base.size",
    "category": "method",
    "text": "size(d::MultivariateDistribution)\n\nReturn the sample size of distribution d, i.e (length(d),).\n\n\n\n\n\n"
},

{
    "location": "multivariate/#Statistics.mean-Tuple{Distribution{Multivariate,S} where S<:ValueSupport}",
    "page": "Multivariate Distributions",
    "title": "Statistics.mean",
    "category": "method",
    "text": "mean(d::MultivariateDistribution)\n\nCompute the mean vector of distribution d.\n\n\n\n\n\n"
},

{
    "location": "multivariate/#Statistics.var-Tuple{Distribution{Multivariate,S} where S<:ValueSupport}",
    "page": "Multivariate Distributions",
    "title": "Statistics.var",
    "category": "method",
    "text": "var(d::MultivariateDistribution)\n\nCompute the vector of element-wise variances for distribution d.\n\n\n\n\n\n"
},

{
    "location": "multivariate/#Statistics.cov-Tuple{Distribution{Multivariate,S} where S<:ValueSupport}",
    "page": "Multivariate Distributions",
    "title": "Statistics.cov",
    "category": "method",
    "text": "cov(d::MultivariateDistribution)\n\nCompute the covariance matrix for distribution d. (cor is provided based on cov).\n\n\n\n\n\n"
},

{
    "location": "multivariate/#Statistics.cor-Tuple{Distribution{Multivariate,S} where S<:ValueSupport}",
    "page": "Multivariate Distributions",
    "title": "Statistics.cor",
    "category": "method",
    "text": "cor(d::MultivariateDistribution)\n\nComputes the correlation matrix for distribution d.\n\n\n\n\n\n"
},

{
    "location": "multivariate/#StatsBase.entropy-Tuple{Distribution{Multivariate,S} where S<:ValueSupport}",
    "page": "Multivariate Distributions",
    "title": "StatsBase.entropy",
    "category": "method",
    "text": "entropy(d::MultivariateDistribution)\n\nCompute the entropy value of distribution d.\n\n\n\n\n\n"
},

{
    "location": "multivariate/#Computation-of-statistics-1",
    "page": "Multivariate Distributions",
    "title": "Computation of statistics",
    "category": "section",
    "text": "length(::MultivariateDistribution)\nsize(::MultivariateDistribution)\nmean(::MultivariateDistribution)\nvar(::MultivariateDistribution)\ncov(::MultivariateDistribution)\ncor(::MultivariateDistribution)\nentropy(::MultivariateDistribution)"
},

{
    "location": "multivariate/#Distributions.insupport-Tuple{Distribution{Multivariate,S} where S<:ValueSupport,AbstractArray}",
    "page": "Multivariate Distributions",
    "title": "Distributions.insupport",
    "category": "method",
    "text": "insupport(d::MultivariateDistribution, x::AbstractArray)\n\nIf x is a vector, it returns whether x is within the support of d. If x is a matrix, it returns whether every column in x is within the support of d.\n\n\n\n\n\n"
},

{
    "location": "multivariate/#Distributions.pdf-Tuple{Distribution{Multivariate,S} where S<:ValueSupport,AbstractArray}",
    "page": "Multivariate Distributions",
    "title": "Distributions.pdf",
    "category": "method",
    "text": "pdf(d::MultivariateDistribution, x::AbstractArray)\n\nReturn the probability density of distribution d evaluated at x.\n\nIf x is a vector, it returns the result as a scalar.\nIf x is a matrix with n columns, it returns a vector r of length n, where r[i] corresponds\n\nto x[:,i] (i.e. treating each column as a sample).\n\npdf!(r, d, x) will write the results to a pre-allocated array r.\n\n\n\n\n\n"
},

{
    "location": "multivariate/#Distributions.logpdf-Tuple{Distribution{Multivariate,S} where S<:ValueSupport,AbstractArray}",
    "page": "Multivariate Distributions",
    "title": "Distributions.logpdf",
    "category": "method",
    "text": "logpdf(d::MultivariateDistribution, x::AbstractArray)\n\nReturn the logarithm of probability density evaluated at x.\n\nIf x is a vector, it returns the result as a scalar.\nIf x is a matrix with n columns, it returns a vector r of length n, where r[i] corresponds to x[:,i].\n\nlogpdf!(r, d, x) will write the results to a pre-allocated array r.\n\n\n\n\n\n"
},

{
    "location": "multivariate/#StatsBase.loglikelihood-Tuple{Distribution{Multivariate,S} where S<:ValueSupport,AbstractArray{T,2} where T}",
    "page": "Multivariate Distributions",
    "title": "StatsBase.loglikelihood",
    "category": "method",
    "text": "loglikelihood(d::MultivariateDistribution, x::AbstractMatrix)\n\nThe log-likelihood of distribution d w.r.t. all columns contained in matrix x.\n\n\n\n\n\n"
},

{
    "location": "multivariate/#Probability-evaluation-1",
    "page": "Multivariate Distributions",
    "title": "Probability evaluation",
    "category": "section",
    "text": "insupport(::MultivariateDistribution, ::AbstractArray)\npdf(::MultivariateDistribution, ::AbstractArray)\nlogpdf(::MultivariateDistribution, ::AbstractArray)\nloglikelihood(::MultivariateDistribution, ::AbstractMatrix)Note: For multivariate distributions, the pdf value is usually very small or large, and therefore direct evaluating the pdf may cause numerical problems. It is generally advisable to perform probability computation in log-scale."
},

{
    "location": "multivariate/#Base.rand-Tuple{Distribution{Multivariate,S} where S<:ValueSupport}",
    "page": "Multivariate Distributions",
    "title": "Base.rand",
    "category": "method",
    "text": "rand(d::MultivariateDistribution)\n\nSample a vector from the distribution d.\n\nrand(d::MultivariateDistribution, n::Int) -> Vector\n\nSample n vectors from the distribution d. This returns a matrix of size (dim(d), n), where each column is a sample.\n\n\n\n\n\n"
},

{
    "location": "multivariate/#Random.rand!-Tuple{Distribution{Multivariate,S} where S<:ValueSupport,AbstractArray}",
    "page": "Multivariate Distributions",
    "title": "Random.rand!",
    "category": "method",
    "text": "rand!(d::MultivariateDistribution, x::AbstractArray)\n\nDraw samples and output them to a pre-allocated array x. Here, x can be either a vector of length dim(d) or a matrix with dim(d) rows.\n\n\n\n\n\n"
},

{
    "location": "multivariate/#Sampling-1",
    "page": "Multivariate Distributions",
    "title": "Sampling",
    "category": "section",
    "text": "rand(::MultivariateDistribution)\nrand!(::MultivariateDistribution, ::AbstractArray)Note: In addition to these common methods, each multivariate distribution has its own special methods, as introduced below."
},

{
    "location": "multivariate/#Distributions.Multinomial",
    "page": "Multivariate Distributions",
    "title": "Distributions.Multinomial",
    "category": "type",
    "text": "The Multinomial distribution generalizes the binomial distribution. Consider n independent draws from a Categorical distribution over a finite set of size k, and let X = (X_1  X_k) where X_i represents the number of times the element i occurs, then the distribution of X is a multinomial distribution. Each sample of a multinomial distribution is a k-dimensional integer vector that sums to n.\n\nThe probability mass function is given by\n\nf(x n p) = fracnx_1 cdots x_k prod_i=1^k p_i^x_i\nquad x_1 + cdots + x_k = n\n\nMultinomial(n, p)   # Multinomial distribution for n trials with probability vector p\nMultinomial(n, k)   # Multinomial distribution for n trials with equal probabilities\n                    # over 1:k\n\n\n\n\n\n"
},

{
    "location": "multivariate/#Distributions.AbstractMvNormal",
    "page": "Multivariate Distributions",
    "title": "Distributions.AbstractMvNormal",
    "category": "type",
    "text": "The Multivariate normal distribution is a multidimensional generalization of the normal distribution. The probability density function of a d-dimensional multivariate normal distribution with mean vector boldsymbolmu and covariance matrix boldsymbolSigma is:\n\nf(mathbfx boldsymbolmu boldsymbolSigma) = frac1(2 pi)^d2 boldsymbolSigma^12\nexp left( - frac12 (mathbfx - boldsymbolmu)^T Sigma^-1 (mathbfx - boldsymbolmu) right)\n\nWe realize that the mean vector and the covariance often have special forms in practice, which can be exploited to simplify the computation. For example, the mean vector is sometimes just a zero vector, while the covariance matrix can be a diagonal matrix or even in the form of sigma mathbfI. To take advantage of such special cases, we introduce a parametric type MvNormal, defined as below, which allows users to specify the special structure of the mean and covariance.\n\nstruct MvNormal{Cov<:AbstractPDMat,Mean<:Union{Vector,ZeroVector}} <: AbstractMvNormal\n    μ::Mean\n    Σ::Cov\nend\n\nHere, the mean vector can be an instance of either Vector or ZeroVector, where the latter is simply an empty type indicating a vector filled with zeros. The covariance can be of any subtype of AbstractPDMat. Particularly, one can use PDMat for full covariance, PDiagMat for diagonal covariance, and ScalMat for the isotropic covariance – those in the form of sigma mathbfI. (See the Julia package PDMats for details).\n\nWe also define a set of alias for the types using different combinations of mean vectors and covariance:\n\nconst IsoNormal  = MvNormal{ScalMat,  Vector{Float64}}\nconst DiagNormal = MvNormal{PDiagMat, Vector{Float64}}\nconst FullNormal = MvNormal{PDMat,    Vector{Float64}}\n\nconst ZeroMeanIsoNormal  = MvNormal{ScalMat,  ZeroVector{Float64}}\nconst ZeroMeanDiagNormal = MvNormal{PDiagMat, ZeroVector{Float64}}\nconst ZeroMeanFullNormal = MvNormal{PDMat,    ZeroVector{Float64}}\n\n\n\n\n\n"
},

{
    "location": "multivariate/#Distributions.MvNormal",
    "page": "Multivariate Distributions",
    "title": "Distributions.MvNormal",
    "category": "type",
    "text": "MvNormal\n\nGenerally, users don\'t have to worry about these internal details. We provide a common constructor MvNormal, which will construct a distribution of appropriate type depending on the input arguments.\n\nMvNormal(sig)\n\nConstruct a multivariate normal distribution with zero mean and covariance represented by sig.\n\nMvNormal(mu, sig)\n\nConstruct a multivariate normal distribution with mean mu and covariance represented by sig.\n\nMvNormal(d, sig)\n\nConstruct a multivariate normal distribution of dimension d, with zero mean, and an isotropic covariance as abs2(sig) * eye(d).\n\nArguments\n\nmu::Vector{T<:Real}: The mean vector.\nd::Real: dimension of distribution.\nsig: The covariance, which can in of either of the following forms (with T<:Real):\nsubtype of AbstractPDMat\nsymmetric matrix of type Matrix{T}\nvector of type Vector{T}: indicating a diagonal covariance as diagm(abs2(sig)).\nreal-valued number: indicating an isotropic covariance as abs2(sig) * eye(d).\n\nNote: The constructor will choose an appropriate covariance form internally, so that special structure of the covariance can be exploited.\n\n\n\n\n\n"
},

{
    "location": "multivariate/#Distributions.MvNormalCanon",
    "page": "Multivariate Distributions",
    "title": "Distributions.MvNormalCanon",
    "category": "type",
    "text": "MvNormalCanon\n\nMultivariate normal distribution is an exponential family distribution, with two canonical parameters: the potential vector mathbfh and the precision matrix mathbfJ. The relation between these parameters and the conventional representation (i.e. the one using mean boldsymbolmu and covariance boldsymbolSigma) is:\n\nmathbfh = boldsymbolSigma^-1 boldsymbolmu quad text and  quad mathbfJ = boldsymbolSigma^-1\n\nThe canonical parameterization is widely used in Bayesian analysis. We provide a type MvNormalCanon, which is also a subtype of AbstractMvNormal to represent a multivariate normal distribution using canonical parameters. Particularly, MvNormalCanon is defined as:\n\nstruct MvNormalCanon{P<:AbstractPDMat,V<:Union{Vector,ZeroVector}} <: AbstractMvNormal\n    μ::V    # the mean vector\n    h::V    # potential vector, i.e. inv(Σ) * μ\n    J::P    # precision matrix, i.e. inv(Σ)\nend\n\nWe also define aliases for common specializations of this parametric type:\n\nconst FullNormalCanon = MvNormalCanon{PDMat,    Vector{Float64}}\nconst DiagNormalCanon = MvNormalCanon{PDiagMat, Vector{Float64}}\nconst IsoNormalCanon  = MvNormalCanon{ScalMat,  Vector{Float64}}\n\nconst ZeroMeanFullNormalCanon = MvNormalCanon{PDMat,    ZeroVector{Float64}}\nconst ZeroMeanDiagNormalCanon = MvNormalCanon{PDiagMat, ZeroVector{Float64}}\nconst ZeroMeanIsoNormalCanon  = MvNormalCanon{ScalMat,  ZeroVector{Float64}}\n\nA multivariate distribution with canonical parameterization can be constructed using a common constructor MvNormalCanon as:\n\nMvNormalCanon(h, J)\n\nConstruct a multivariate normal distribution with potential vector h and precision matrix represented by J.\n\nMvNormalCanon(J)\n\nConstruct a multivariate normal distribution with zero mean (thus zero potential vector) and precision matrix represented by J.\n\nMvNormalCanon(d, J)\n\nConstruct a multivariate normal distribution of dimension d, with zero mean and a precision matrix as J * eye(d).\n\nArguments\n\nd::Int: dimension of distribution\nh::Vector{T<:Real}: the potential vector, of type Vector{T} with T<:Real.\nJ: the representation of the precision matrix, which can be in either of the following forms (T<:Real):\nan instance of a subtype of AbstractPDMat\na square matrix of type Matrix{T}\na vector of type Vector{T}: indicating a diagonal precision matrix as diagm(J).\na real number: indicating an isotropic precision matrix as J * eye(d).\n\nNote: MvNormalCanon share the same set of methods as MvNormal.\n\n\n\n\n\n"
},

{
    "location": "multivariate/#Distributions.MvLogNormal",
    "page": "Multivariate Distributions",
    "title": "Distributions.MvLogNormal",
    "category": "type",
    "text": "MvLogNormal(d::MvNormal)\n\nThe Multivariate lognormal distribution is a multidimensional generalization of the lognormal distribution.\n\nIf boldsymbol X sim mathcalN(boldsymbolmuboldsymbolSigma) has a multivariate normal distribution then boldsymbol Y=exp(boldsymbol X) has a multivariate lognormal distribution.\n\nMean vector boldsymbolmu and covariance matrix boldsymbolSigma of the underlying normal distribution are known as the location and scale parameters of the corresponding lognormal distribution.\n\n\n\n\n\n"
},

{
    "location": "multivariate/#Distributions.Dirichlet",
    "page": "Multivariate Distributions",
    "title": "Distributions.Dirichlet",
    "category": "type",
    "text": "Dirichlet\n\nThe Dirichlet distribution is often used the conjugate prior for Categorical or Multinomial distributions. The probability density function of a Dirichlet distribution with parameter alpha = (alpha_1 ldots alpha_k) is:\n\nf(x alpha) = frac1B(alpha) prod_i=1^k x_i^alpha_i - 1 quad text with \nB(alpha) = fracprod_i=1^k Gamma(alpha_i)Gamma left( sum_i=1^k alpha_i right)\nquad x_1 + cdots + x_k = 1\n\n# Let alpha be a vector\nDirichlet(alpha)         # Dirichlet distribution with parameter vector alpha\n\n# Let a be a positive scalar\nDirichlet(k, a)          # Dirichlet distribution with parameter a * ones(k)\n\n\n\n\n\n"
},

{
    "location": "multivariate/#Distributions-1",
    "page": "Multivariate Distributions",
    "title": "Distributions",
    "category": "section",
    "text": "Multinomial\nDistributions.AbstractMvNormal\nMvNormal\nMvNormalCanon\nMvLogNormal\nDirichlet"
},

{
    "location": "multivariate/#Addition-Methods-1",
    "page": "Multivariate Distributions",
    "title": "Addition Methods",
    "category": "section",
    "text": ""
},

{
    "location": "multivariate/#Distributions.invcov-Tuple{AbstractMvNormal}",
    "page": "Multivariate Distributions",
    "title": "Distributions.invcov",
    "category": "method",
    "text": "invcov(d::AbstractMvNormal)\n\nReturn the inversed covariance matrix of d.\n\n\n\n\n\n"
},

{
    "location": "multivariate/#Distributions.logdetcov-Tuple{AbstractMvNormal}",
    "page": "Multivariate Distributions",
    "title": "Distributions.logdetcov",
    "category": "method",
    "text": "logdetcov(d::AbstractMvNormal)\n\nReturn the log-determinant value of the covariance matrix.\n\n\n\n\n\n"
},

{
    "location": "multivariate/#Distributions.sqmahal-Tuple{AbstractMvNormal,AbstractArray}",
    "page": "Multivariate Distributions",
    "title": "Distributions.sqmahal",
    "category": "method",
    "text": "sqmahal(d, x)\n\nReturn the squared Mahalanobis distance from x to the center of d, w.r.t. the covariance. When x is a vector, it returns a scalar value. When x is a matrix, it returns a vector of length size(x,2).\n\nsqmahal!(r, d, x) with write the results to a pre-allocated array r.\n\n\n\n\n\n"
},

{
    "location": "multivariate/#Base.rand-Tuple{AbstractRNG,AbstractMvNormal}",
    "page": "Multivariate Distributions",
    "title": "Base.rand",
    "category": "method",
    "text": "rand(rng::AbstractRNG, d::AbstractMvNormal)\nrand(rng::AbstractRNG, d::AbstractMvNormal, n::Int)\nrand!(rng::AbstractRNG, d::AbstractMvNormal, x::AbstractArray)\n\nSample from distribution d using the random number generator rng.\n\n\n\n\n\n"
},

{
    "location": "multivariate/#AbstractMvNormal-1",
    "page": "Multivariate Distributions",
    "title": "AbstractMvNormal",
    "category": "section",
    "text": "In addition to the methods listed in the common interface above, we also provide the following methods for all multivariate distributions under the base type AbstractMvNormal:invcov(::Distributions.AbstractMvNormal)\nlogdetcov(::Distributions.AbstractMvNormal)\nsqmahal(::Distributions.AbstractMvNormal, ::AbstractArray)\nrand(::AbstractRNG, ::Distributions.AbstractMvNormal)"
},

{
    "location": "multivariate/#Distributions.location-Tuple{MvLogNormal}",
    "page": "Multivariate Distributions",
    "title": "Distributions.location",
    "category": "method",
    "text": "location(d::MvLogNormal)\n\nReturn the location vector of the distribution (the mean of the underlying normal distribution).\n\n\n\n\n\n"
},

{
    "location": "multivariate/#Distributions.scale-Tuple{MvLogNormal}",
    "page": "Multivariate Distributions",
    "title": "Distributions.scale",
    "category": "method",
    "text": "scale(d::MvLogNormal)\n\nReturn the scale matrix of the distribution (the covariance matrix of the underlying normal distribution).\n\n\n\n\n\n"
},

{
    "location": "multivariate/#Statistics.median-Tuple{MvLogNormal}",
    "page": "Multivariate Distributions",
    "title": "Statistics.median",
    "category": "method",
    "text": "median(d::MvLogNormal)\n\nReturn the median vector of the lognormal distribution. which is strictly smaller than the mean.\n\n\n\n\n\n"
},

{
    "location": "multivariate/#StatsBase.mode-Tuple{MvLogNormal}",
    "page": "Multivariate Distributions",
    "title": "StatsBase.mode",
    "category": "method",
    "text": "mode(d::MvLogNormal)\n\nReturn the mode vector of the lognormal distribution, which is strictly smaller than the mean and median.\n\n\n\n\n\n"
},

{
    "location": "multivariate/#Distributions.location-Union{Tuple{D}, Tuple{Type{D},Symbol,AbstractArray{T,1} where T,AbstractArray{T,2} where T}} where D<:Distributions.AbstractMvLogNormal",
    "page": "Multivariate Distributions",
    "title": "Distributions.location",
    "category": "method",
    "text": "location{D<:AbstractMvLogNormal}(::Type{D},s::Symbol,m::AbstractVector,S::AbstractMatrix)\n\nCalculate the location vector (the mean of the underlying normal distribution).\n\nIf s == :meancov, then m is taken as the mean, and S the covariance matrix of a lognormal distribution.\nIf s == :mean | :median | :mode, then m is taken as the mean, median or mode of the lognormal respectively, and S is interpreted as the scale matrix (the covariance of the underlying normal distribution).\n\nIt is not possible to analytically calculate the location vector from e.g., median + covariance, or from mode + covariance.\n\n\n\n\n\n"
},

{
    "location": "multivariate/#Distributions.location!-Union{Tuple{D}, Tuple{Type{D},Symbol,AbstractArray{T,1} where T,AbstractArray{T,2} where T,AbstractArray{T,1} where T}} where D<:Distributions.AbstractMvLogNormal",
    "page": "Multivariate Distributions",
    "title": "Distributions.location!",
    "category": "method",
    "text": "location!{D<:AbstractMvLogNormal}(::Type{D},s::Symbol,m::AbstractVector,S::AbstractMatrix,μ::AbstractVector)\n\nCalculate the location vector (as above) and store the result in μ\n\n\n\n\n\n"
},

{
    "location": "multivariate/#Distributions.scale-Union{Tuple{D}, Tuple{Type{D},Symbol,AbstractArray{T,1} where T,AbstractArray{T,2} where T}} where D<:Distributions.AbstractMvLogNormal",
    "page": "Multivariate Distributions",
    "title": "Distributions.scale",
    "category": "method",
    "text": "scale{D<:AbstractMvLogNormal}(::Type{D},s::Symbol,m::AbstractVector,S::AbstractMatrix)\n\nCalculate the scale parameter, as defined for the location parameter above.\n\n\n\n\n\n"
},

{
    "location": "multivariate/#Distributions.scale!-Union{Tuple{D}, Tuple{Type{D},Symbol,AbstractArray{T,1} where T,AbstractArray{T,2} where T,AbstractArray{T,2} where T}} where D<:Distributions.AbstractMvLogNormal",
    "page": "Multivariate Distributions",
    "title": "Distributions.scale!",
    "category": "method",
    "text": "scale!{D<:AbstractMvLogNormal}(::Type{D},s::Symbol,m::AbstractVector,S::AbstractMatrix,Σ::AbstractMatrix)\n\nCalculate the scale parameter, as defined for the location parameter above and store the result in Σ.\n\n\n\n\n\n"
},

{
    "location": "multivariate/#StatsBase.params-Union{Tuple{D}, Tuple{Type{D},AbstractArray{T,1} where T,AbstractArray{T,2} where T}} where D<:Distributions.AbstractMvLogNormal",
    "page": "Multivariate Distributions",
    "title": "StatsBase.params",
    "category": "method",
    "text": "params{D<:AbstractMvLogNormal}(::Type{D},m::AbstractVector,S::AbstractMatrix)\n\nReturn (scale,location) for a given mean and covariance\n\n\n\n\n\n"
},

{
    "location": "multivariate/#MvLogNormal-1",
    "page": "Multivariate Distributions",
    "title": "MvLogNormal",
    "category": "section",
    "text": "In addition to the methods listed in the common interface above, we also provide the following methods:location(::MvLogNormal)\nscale(::MvLogNormal)\nmedian(::MvLogNormal)\nmode(::MvLogNormal)It can be necessary to calculate the parameters of the lognormal (location vector and scale matrix) from a given covariance and mean, median or mode. To that end, the following functions are provided.location{D<:Distributions.AbstractMvLogNormal}(::Type{D},s::Symbol,m::AbstractVector,S::AbstractMatrix)\nlocation!{D<:Distributions.AbstractMvLogNormal}(::Type{D},s::Symbol,m::AbstractVector,S::AbstractMatrix,μ::AbstractVector)\nscale{D<:Distributions.AbstractMvLogNormal}(::Type{D},s::Symbol,m::AbstractVector,S::AbstractMatrix)\nscale!{D<:Distributions.AbstractMvLogNormal}(::Type{D},s::Symbol,m::AbstractVector,S::AbstractMatrix,Σ::AbstractMatrix)\nparams{D<:Distributions.AbstractMvLogNormal}(::Type{D},m::AbstractVector,S::AbstractMatrix)"
},

{
    "location": "multivariate/#Distributions._rand!-Tuple{Distribution{Multivariate,S} where S<:ValueSupport,AbstractArray}",
    "page": "Multivariate Distributions",
    "title": "Distributions._rand!",
    "category": "method",
    "text": "_rand!(d::MultivariateDistribution, x::AbstractArray)\n\nGenerate a vector sample to x. This function does not need to perform dimension checking.\n\n\n\n\n\n"
},

{
    "location": "multivariate/#Distributions._logpdf-Tuple{Distribution{Multivariate,S} where S<:ValueSupport,AbstractArray}",
    "page": "Multivariate Distributions",
    "title": "Distributions._logpdf",
    "category": "method",
    "text": "_logpdf{T<:Real}(d::MultivariateDistribution, x::AbstractArray)\n\nEvaluate logarithm of pdf value for a given vector x. This function need not perform dimension checking. Generally, one does not need to implement pdf (or _pdf) as fallback methods are provided in src/multivariates.jl.\n\n\n\n\n\n"
},

{
    "location": "multivariate/#Internal-Methods-(for-creating-you-own-multivariate-distribution)-1",
    "page": "Multivariate Distributions",
    "title": "Internal Methods (for creating you own multivariate distribution)",
    "category": "section",
    "text": "Distributions._rand!(d::MultivariateDistribution, x::AbstractArray)\nDistributions._logpdf(d::MultivariateDistribution, x::AbstractArray)"
},

{
    "location": "matrix/#",
    "page": "Matrix-variate Distributions",
    "title": "Matrix-variate Distributions",
    "category": "page",
    "text": ""
},

{
    "location": "matrix/#matrix-variates-1",
    "page": "Matrix-variate Distributions",
    "title": "Matrix-variate Distributions",
    "category": "section",
    "text": "Matrix-variate distributions are the distributions whose variate forms are Matrixvariate (i.e each sample is a matrix). Abstract types for matrix-variate distributions:"
},

{
    "location": "matrix/#Base.size-Tuple{Distribution{Matrixvariate,S} where S<:ValueSupport}",
    "page": "Matrix-variate Distributions",
    "title": "Base.size",
    "category": "method",
    "text": "size(d::MatrixDistribution)\n\nReturn the size of each sample from distribution d.\n\n\n\n\n\n"
},

{
    "location": "matrix/#Base.length-Tuple{Distribution{Matrixvariate,S} where S<:ValueSupport}",
    "page": "Matrix-variate Distributions",
    "title": "Base.length",
    "category": "method",
    "text": "length(d::MatrixDistribution)\n\nThe length (i.e number of elements) of each sample from the distribution d.\n\n\n\n\n\n"
},

{
    "location": "matrix/#Statistics.mean-Tuple{Distribution{Matrixvariate,S} where S<:ValueSupport}",
    "page": "Matrix-variate Distributions",
    "title": "Statistics.mean",
    "category": "method",
    "text": "mean(d::MatrixDistribution)\n\nReturn the mean matrix of d.\n\n\n\n\n\n"
},

{
    "location": "matrix/#Distributions.pdf-Union{Tuple{T}, Tuple{Distribution{Matrixvariate,S} where S<:ValueSupport,AbstractArray{T,2}}} where T<:Real",
    "page": "Matrix-variate Distributions",
    "title": "Distributions.pdf",
    "category": "method",
    "text": "pdf(d::MatrixDistribution, x::AbstractArray)\n\nCompute the probability density at the input matrix x.\n\n\n\n\n\n"
},

{
    "location": "matrix/#Distributions.logpdf-Union{Tuple{T}, Tuple{Distribution{Matrixvariate,S} where S<:ValueSupport,AbstractArray{T,2}}} where T<:Real",
    "page": "Matrix-variate Distributions",
    "title": "Distributions.logpdf",
    "category": "method",
    "text": "logpdf(d::MatrixDistribution, AbstractMatrix)\n\nCompute the logarithm of the probability density at the input matrix x.\n\n\n\n\n\n"
},

{
    "location": "matrix/#Base.rand-Tuple{Distribution{Matrixvariate,S} where S<:ValueSupport,Int64}",
    "page": "Matrix-variate Distributions",
    "title": "Base.rand",
    "category": "method",
    "text": "rand(d::MatrixDistribution, n)\n\nDraw a sample matrix from the distribution d.\n\n\n\n\n\n"
},

{
    "location": "matrix/#Common-Interface-1",
    "page": "Matrix-variate Distributions",
    "title": "Common Interface",
    "category": "section",
    "text": "Both distributions implement the same set of methods:size(::MatrixDistribution)\nlength(::MatrixDistribution)\nmean(::MatrixDistribution)\npdf{T<:Real}(d::MatrixDistribution, x::AbstractMatrix{T})\nlogpdf{T<:Real}(d::MatrixDistribution, x::AbstractMatrix{T})\nrand(::MatrixDistribution, ::Int)"
},

{
    "location": "matrix/#Distributions.Wishart",
    "page": "Matrix-variate Distributions",
    "title": "Distributions.Wishart",
    "category": "type",
    "text": "Wishart(nu, S)\n\nThe Wishart distribution is a multidimensional generalization of the Chi-square distribution, which is characterized by a degree of freedom ν, and a base matrix S.\n\n\n\n\n\n"
},

{
    "location": "matrix/#Distributions.InverseWishart",
    "page": "Matrix-variate Distributions",
    "title": "Distributions.InverseWishart",
    "category": "type",
    "text": "InverseWishart(nu, P)\n\nThe Inverse Wishart distribution is usually used as the conjugate prior for the covariance matrix of a multivariate normal distribution, which is characterized by a degree of freedom ν, and a base matrix Φ.\n\n\n\n\n\n"
},

{
    "location": "matrix/#Distributions-1",
    "page": "Matrix-variate Distributions",
    "title": "Distributions",
    "category": "section",
    "text": "Wishart\nInverseWishart"
},

{
    "location": "matrix/#Distributions._logpdf-Tuple{Distribution{Matrixvariate,S} where S<:ValueSupport,AbstractArray}",
    "page": "Matrix-variate Distributions",
    "title": "Distributions._logpdf",
    "category": "method",
    "text": "_logpdf(d::MatrixDistribution, x::AbstractArray)\n\nEvaluate logarithm of pdf value for a given sample x. This function need not perform dimension checking.\n\n\n\n\n\n"
},

{
    "location": "matrix/#Internal-Methods-(for-creating-your-own-matrix-variate-distributions)-1",
    "page": "Matrix-variate Distributions",
    "title": "Internal Methods (for creating your own matrix-variate distributions)",
    "category": "section",
    "text": "Distributions._logpdf(d::MatrixDistribution, x::AbstractArray)"
},

{
    "location": "mixture/#",
    "page": "Mixture Models",
    "title": "Mixture Models",
    "category": "page",
    "text": ""
},

{
    "location": "mixture/#Mixture-Models-1",
    "page": "Mixture Models",
    "title": "Mixture Models",
    "category": "section",
    "text": "A mixture model is a probabilistic distribution that combines a set of component to represent the overall distribution. Generally, the probability density/mass function is given by a convex combination of the pdf/pmf of individual components, asf_mix(x Theta pi) = sum_k=1^K pi_k f(x theta_k)A mixture model is characterized by a set of component parameters Theta=theta_1 ldots theta_K and a prior distribution pi over these components."
},

{
    "location": "mixture/#Type-Hierarchy-1",
    "page": "Mixture Models",
    "title": "Type Hierarchy",
    "category": "section",
    "text": "This package introduces a type MixtureModel, defined as follows, to represent a mixture model:abstract type AbstractMixtureModel{VF<:VariateForm,VS<:ValueSupport} <: Distribution{VF, VS} end\n\nstruct MixtureModel{VF<:VariateForm,VS<:ValueSupport,Component<:Distribution} <: AbstractMixtureModel{VF,VS}\n    components::Vector{Component}\n    prior::Categorical\nend\n\nconst UnivariateMixture    = AbstractMixtureModel{Univariate}\nconst MultivariateMixture  = AbstractMixtureModel{Multivariate}Remarks:We introduce AbstractMixtureModel as a base type, which allows one to define a mixture model with different internal implementation, while still being able to leverage the common methods defined for AbstractMixtureModel.\nThe MixtureModel is a parametric type, with three type parameters:\nVF: the variate form, which can be Univariate, Multivariate, or Matrixvariate.\nVS: the value support, which can be Continuous or Discrete.\nComponent: the type of component distributions, e.g. Normal.\nWe define two aliases: UnivariateMixture and MultivariateMixture.With such a type system, the type for a mixture of univariate normal distributions can be written asMixtureModel{Univariate,Continuous,Normal}"
},

{
    "location": "mixture/#Distributions.MixtureModel-Tuple{Array{Distribution,1}}",
    "page": "Mixture Models",
    "title": "Distributions.MixtureModel",
    "category": "method",
    "text": "MixtureModel(components, [prior])\n\nConstruct a mixture model with a vector of components and a prior probability vector. If no prior is provided then all components will have the same prior probabilities.\n\n\n\n\n\n"
},

{
    "location": "mixture/#Distributions.MixtureModel-Tuple{Type{Distribution},AbstractArray}",
    "page": "Mixture Models",
    "title": "Distributions.MixtureModel",
    "category": "method",
    "text": "MixtureModel(C, params, [prior])\n\nConstruct a mixture model with component type C, a vector of parameters for constructing the components given by params, and a prior probability vector. If no prior is provided then all components will have the same prior probabilities.\n\n\n\n\n\n"
},

{
    "location": "mixture/#Constructors-1",
    "page": "Mixture Models",
    "title": "Constructors",
    "category": "section",
    "text": "MixtureModel(::Vector{Distribution})\nMixtureModel(::Type{Distribution}, ::AbstractArray)Examples# constructs a mixture of three normal distributions,\n# with prior probabilities [0.2, 0.5, 0.3]\nMixtureModel(Normal[\n   Normal(-2.0, 1.2),\n   Normal(0.0, 1.0),\n   Normal(3.0, 2.5)], [0.2, 0.5, 0.3])\n\n# if the components share the same prior, the prior vector can be omitted\nMixtureModel(Normal[\n   Normal(-2.0, 1.2),\n   Normal(0.0, 1.0),\n   Normal(3.0, 2.5)])\n\n# Since all components have the same type, we can use a simplified syntax\nMixtureModel(Normal, [(-2.0, 1.2), (0.0, 1.0), (3.0, 2.5)], [0.2, 0.5, 0.3])\n\n# Again, one can omit the prior vector when all components share the same prior\nMixtureModel(Normal, [(-2.0, 1.2), (0.0, 1.0), (3.0, 2.5)])\n\n# The following example shows how one can make a Gaussian mixture\n# where all components share the same unit variance\nMixtureModel(map(u -> Normal(u, 1.0), [-2.0, 0.0, 3.0]))"
},

{
    "location": "mixture/#Distributions.components-Tuple{AbstractMixtureModel}",
    "page": "Mixture Models",
    "title": "Distributions.components",
    "category": "method",
    "text": "components(d::AbstractMixtureModel)\n\nGet a list of components of the mixture model d.\n\n\n\n\n\n"
},

{
    "location": "mixture/#Distributions.probs-Tuple{AbstractMixtureModel}",
    "page": "Mixture Models",
    "title": "Distributions.probs",
    "category": "method",
    "text": "probs(d::AbstractMixtureModel)\n\nGet the vector of prior probabilities of all components of d.\n\n\n\n\n\n"
},

{
    "location": "mixture/#Distributions.component_type-Tuple{AbstractMixtureModel}",
    "page": "Mixture Models",
    "title": "Distributions.component_type",
    "category": "method",
    "text": "component_type(d::AbstractMixtureModel)\n\nThe type of the components of d.\n\n\n\n\n\n"
},

{
    "location": "mixture/#Statistics.mean-Tuple{AbstractMixtureModel}",
    "page": "Mixture Models",
    "title": "Statistics.mean",
    "category": "method",
    "text": "mean(d::Union{UnivariateMixture, MultivariateMixture})\n\nCompute the overall mean (expectation).\n\n\n\n\n\n"
},

{
    "location": "mixture/#Statistics.var-Tuple{AbstractMixtureModel{Univariate,S,C} where C<:Distribution where S<:ValueSupport}",
    "page": "Mixture Models",
    "title": "Statistics.var",
    "category": "method",
    "text": "var(d::UnivariateMixture)\n\nCompute the overall variance (only for UnivariateMixture).\n\n\n\n\n\n"
},

{
    "location": "mixture/#Base.length-Tuple{AbstractMixtureModel{Multivariate,S,C} where C<:Distribution where S<:ValueSupport}",
    "page": "Mixture Models",
    "title": "Base.length",
    "category": "method",
    "text": "length(d::MultivariateMixture)\n\nThe length of each sample (only for Multivariate).\n\n\n\n\n\n"
},

{
    "location": "mixture/#Distributions.pdf-Tuple{AbstractMixtureModel,Any}",
    "page": "Mixture Models",
    "title": "Distributions.pdf",
    "category": "method",
    "text": "pdf(d::Union{UnivariateMixture, MultivariateMixture}, x)\n\nEvaluate the (mixed) probability density function over x. Here, x can be a single sample or an array of multiple samples.\n\n\n\n\n\n"
},

{
    "location": "mixture/#Distributions.logpdf-Tuple{AbstractMixtureModel,Any}",
    "page": "Mixture Models",
    "title": "Distributions.logpdf",
    "category": "method",
    "text": "logpdf(d::Union{UnivariateMixture, MultivariateMixture}, x)\n\nEvaluate the logarithm of the (mixed) probability density function over x. Here, x can be a single sample or an array of multiple samples.\n\n\n\n\n\n"
},

{
    "location": "mixture/#Base.rand-Tuple{AbstractMixtureModel}",
    "page": "Mixture Models",
    "title": "Base.rand",
    "category": "method",
    "text": "rand(d::Union{UnivariateMixture, MultivariateDistribution})\n\nDraw a sample from the mixture model d.\n\nrand(d::Union{UnivariateMixture, MultivariateMixture}, n)\n\nDraw n samples from d.\n\n\n\n\n\n"
},

{
    "location": "mixture/#Random.rand!-Tuple{AbstractMixtureModel,AbstractArray}",
    "page": "Mixture Models",
    "title": "Random.rand!",
    "category": "method",
    "text": "rand!(d::Union{UnivariateMixture, MultivariateMixture}, r::AbstactArray)\n\nDraw multiple samples from d and write them to r.\n\n\n\n\n\n"
},

{
    "location": "mixture/#Common-Interface-1",
    "page": "Mixture Models",
    "title": "Common Interface",
    "category": "section",
    "text": "All subtypes of AbstractMixtureModel (obviously including MixtureModel) provide the following two methods:components(::AbstractMixtureModel)\nprobs(::AbstractMixtureModel)\nDistributions.component_type(::AbstractMixtureModel)In addition, for all subtypes of UnivariateMixture and MultivariateMixture, the following generic methods are provided:mean(::AbstractMixtureModel)\nvar(::UnivariateMixture)\nlength(::MultivariateMixture)\npdf(::AbstractMixtureModel, ::Any)\nlogpdf(::AbstractMixtureModel, ::Any)\nrand(::AbstractMixtureModel)\nrand!(::AbstractMixtureModel, ::AbstractArray)"
},

{
    "location": "mixture/#Estimation-1",
    "page": "Mixture Models",
    "title": "Estimation",
    "category": "section",
    "text": "There are a number of methods for estimating of mixture models from data, and this problem remains an open research topic. This package does not provide facilities for estimating mixture models. One can resort to other packages, e.g. GaussianMixtures.jl, for this purpose."
},

{
    "location": "fit/#",
    "page": "Distribution Fitting",
    "title": "Distribution Fitting",
    "category": "page",
    "text": ""
},

{
    "location": "fit/#Distribution-Fitting-1",
    "page": "Distribution Fitting",
    "title": "Distribution Fitting",
    "category": "section",
    "text": "This package provides methods to fit a distribution to a given set of samples. Generally, one may writed = fit(D, x)This statement fits a distribution of type D to a given dataset x, where x should be an array comprised of all samples. The fit function will choose a reasonable way to fit the distribution, which, in most cases, is maximum likelihood estimation."
},

{
    "location": "fit/#Maximum-Likelihood-Estimation-1",
    "page": "Distribution Fitting",
    "title": "Maximum Likelihood Estimation",
    "category": "section",
    "text": "The function fit_mle is for maximum likelihood estimation."
},

{
    "location": "fit/#Distributions.fit_mle-Tuple{Any,Any}",
    "page": "Distribution Fitting",
    "title": "Distributions.fit_mle",
    "category": "method",
    "text": "fit_mle(D, x)\n\nFit a distribution of type D to a given data set x.\n\nFor univariate distribution, x can be an array of arbitrary size.\nFor multivariate distribution, x should be a matrix, where each column is a sample.\n\n\n\n\n\n"
},

{
    "location": "fit/#Distributions.fit_mle-Tuple{Any,Any,Any}",
    "page": "Distribution Fitting",
    "title": "Distributions.fit_mle",
    "category": "method",
    "text": "fit_mle(D, x, w)\n\nFit a distribution of type D to a weighted data set x, with weights given by w.\n\nHere, w should be an array with length n, where n is the number of samples contained in x.\n\n\n\n\n\n"
},

{
    "location": "fit/#Synopsis-1",
    "page": "Distribution Fitting",
    "title": "Synopsis",
    "category": "section",
    "text": "fit_mle(D, x)\nfit_mle(D, x, w)"
},

{
    "location": "fit/#Applicable-distributions-1",
    "page": "Distribution Fitting",
    "title": "Applicable distributions",
    "category": "section",
    "text": "The fit_mle method has been implemented for the following distributions:Univariate:Bernoulli\nBeta\nBinomial\nCategorical\nDiscreteUniform\nExponential\nNormal\nGamma\nGeometric\nLaplace\nPareto\nPoisson\nUniformMultivariate:Multinomial\nMvNormal\nDirichletFor most of these distributions, the usage is as described above. For a few special distributions that require additional information for estimation, we have to use modified interface:fit_mle(Binomial, n, x)        # n is the number of trials in each experiment\nfit_mle(Binomial, n, x, w)\n\nfit_mle(Categorical, k, x)     # k is the space size (i.e. the number of distinct values)\nfit_mle(Categorical, k, x, w)\n\nfit_mle(Categorical, x)        # equivalent to fit_mle(Categorical, max(x), x)\nfit_mle(Categorical, x, w)"
},

{
    "location": "fit/#Sufficient-Statistics-1",
    "page": "Distribution Fitting",
    "title": "Sufficient Statistics",
    "category": "section",
    "text": "For many distributions, estimation can be based on (sum of) sufficient statistics computed from a dataset. To simplify implementation, for such distributions, we implement suffstats method instead of fit_mle directly:ss = suffstats(D, x)        # ss captures the sufficient statistics of x\nss = suffstats(D, x, w)     # ss captures the sufficient statistics of a weighted dataset\n\nd = fit_mle(D, ss)          # maximum likelihood estimation based on sufficient statsWhen fit_mle on D is invoked, a fallback fit_mle method will first call suffstats to compute the sufficient statistics, and then a fit_mle method on sufficient statistics to get the result. For some distributions, this way is not the most efficient, and we specialize the fit_mle method to implement more efficient estimation algorithms."
},

{
    "location": "fit/#Maximum-a-Posteriori-Estimation-1",
    "page": "Distribution Fitting",
    "title": "Maximum-a-Posteriori Estimation",
    "category": "section",
    "text": "Maximum-a-Posteriori (MAP) estimation is also supported by this package, which is implemented as part of the conjugate exponential family framework (see :ref:Conjugate Prior and Posterior <ref-conj>)."
},

{
    "location": "extends/#",
    "page": "Create New Samplers and Distributions",
    "title": "Create New Samplers and Distributions",
    "category": "page",
    "text": ""
},

{
    "location": "extends/#Create-New-Samplers-and-Distributions-1",
    "page": "Create New Samplers and Distributions",
    "title": "Create New Samplers and Distributions",
    "category": "section",
    "text": "Whereas this package already provides a large collection of common distributions out of box, there are still occasions where you want to create new distributions (e.g your application requires a special kind of distributions, or you want to contribute to this package).Generally, you don\'t have to implement every API method listed in the documentation. This package provides a series of generic functions that turn a small number of internal methods into user-end API methods. What you need to do is to implement this small set of internal methods for your distributions.Note: the methods need to be implemented are different for distributions of different variate forms."
},

{
    "location": "extends/#Create-a-Sampler-1",
    "page": "Create New Samplers and Distributions",
    "title": "Create a Sampler",
    "category": "section",
    "text": "Unlike a full fledged distributions, a sampler, in general, only provides limited functionalities, mainly to support sampling."
},

{
    "location": "extends/#Univariate-Sampler-1",
    "page": "Create New Samplers and Distributions",
    "title": "Univariate Sampler",
    "category": "section",
    "text": "To implement a univariate sampler, one can define a sub type (say Spl) of Sampleable{Univariate,S} (where S can be Discrete or Continuous), and provide a rand method, asfunction rand(s::Spl)\n    # ... generate a single sample from s\nendThe package already implements a vectorized version of rand! and rand that repeatedly calls the he scalar version to generate multiple samples."
},

{
    "location": "extends/#Multivariate-Sampler-1",
    "page": "Create New Samplers and Distributions",
    "title": "Multivariate Sampler",
    "category": "section",
    "text": "To implement a multivariate sampler, one can define a sub type of Sampleable{Multivariate,S}, and provide both length and _rand! methods, asBase.length(s::Spl) = ... # return the length of each sample\n\nfunction _rand!(s::Spl, x::AbstractVector{T}) where T<:Real\n    # ... generate a single vector sample to x\nendThis function can assume that the dimension of x is correct, and doesn\'t need to perform dimension checking.The package implements both rand and rand! as follows (which you don\'t need to implement in general):function _rand!(s::Sampleable{Multivariate}, A::DenseMatrix)\n    for i = 1:size(A,2)\n        _rand!(s, view(A,:,i))\n    end\n    return A\nend\n\nfunction rand!(s::Sampleable{Multivariate}, A::AbstractVector)\n    length(A) == length(s) ||\n        throw(DimensionMismatch(\"Output size inconsistent with sample length.\"))\n    _rand!(s, A)\nend\n\nfunction rand!(s::Sampleable{Multivariate}, A::DenseMatrix)\n    size(A,1) == length(s) ||\n        throw(DimensionMismatch(\"Output size inconsistent with sample length.\"))\n    _rand!(s, A)\nend\n\nrand(s::Sampleable{Multivariate,S}) where {S<:ValueSupport} =\n    _rand!(s, Vector{eltype(S)}(length(s)))\n\nrand(s::Sampleable{Multivariate,S}, n::Int) where {S<:ValueSupport} =\n    _rand!(s, Matrix{eltype(S)}(length(s), n))If there is a more efficient method to generate multiple vector samples in batch, one should provide the following methodfunction _rand!(s::Spl, A::DenseMatrix{T}) where T<:Real\n    # ... generate multiple vector samples in batch\nendRemember that each column of A is a sample."
},

{
    "location": "extends/#Matrix-variate-Sampler-1",
    "page": "Create New Samplers and Distributions",
    "title": "Matrix-variate Sampler",
    "category": "section",
    "text": "To implement a multivariate sampler, one can define a sub type of Sampleable{Multivariate,S}, and provide both size and _rand! method, asBase.size(s::Spl) = ... # the size of each matrix sample\n\nfunction _rand!(s::Spl, x::DenseMatrix{T}) where T<:Real\n    # ... generate a single matrix sample to x\nendNote that you can assume x has correct dimensions in _rand! and don\'t have to perform dimension checking, the generic rand and rand! will do dimension checking and array allocation for you."
},

{
    "location": "extends/#Distributions.sampler-Tuple{Distribution}",
    "page": "Create New Samplers and Distributions",
    "title": "Distributions.sampler",
    "category": "method",
    "text": "sampler(d::Distribution) -> Sampleable\n\nSamplers can often rely on pre-computed quantities (that are not parameters themselves) to improve efficiency. If such a sampler exists, it can be provide with this sampler method, which would be used for batch sampling. The general fallback is sampler(d::Distribution) = d.\n\n\n\n\n\n"
},

{
    "location": "extends/#Create-a-Distribution-1",
    "page": "Create New Samplers and Distributions",
    "title": "Create a Distribution",
    "category": "section",
    "text": "Most distributions should implement a sampler method to improve batch sampling efficiency.sampler(d::Distribution)"
},

{
    "location": "extends/#Univariate-Distribution-1",
    "page": "Create New Samplers and Distributions",
    "title": "Univariate Distribution",
    "category": "section",
    "text": "A univariate distribution type should be defined as a subtype of DiscreteUnivarateDistribution or ContinuousUnivariateDistribution.Following methods need to be implemented for each univariate distribution type:rand(d::UnivariateDistribution)\nsampler(d::Distribution)\npdf(d::UnivariateDistribution, x::Real)\nlogpdf(d::UnivariateDistribution, x::Real)\ncdf(d::UnivariateDistribution, x::Real)\nquantile(d::UnivariateDistribution, q::Real)\nminimum(d::UnivariateDistribution)\nmaximum(d::UnivariateDistribution)\ninsupport(d::UnivariateDistribution, x::Real)It is also recommended that one also implements the following statistics functions:mean(d::UnivariateDistribution)\nvar(d::UnivariateDistribution)\nmodes(d::UnivariateDistribution)\nmode(d::UnivariateDistribution)\nskewness(d::UnivariateDistribution)\nkurtosis(d::Distribution, ::Bool)\nentropy(d::UnivariateDistribution, ::Real)\nmgf(d::UnivariateDistribution, ::Any)\ncf(d::UnivariateDistribution, ::Any)You may refer to the source file src/univariates.jl to see details about how generic fallback functions for univariates are implemented."
},

{
    "location": "extends/#Create-a-Multivariate-Distribution-1",
    "page": "Create New Samplers and Distributions",
    "title": "Create a Multivariate Distribution",
    "category": "section",
    "text": "A multivariate distribution type should be defined as a subtype of DiscreteMultivarateDistribution or ContinuousMultivariateDistribution.Following methods need to be implemented for each multivariate distribution type:length(d::MultivariateDistribution)\nsampler(d::Distribution)\nDistributions._rand!(d::MultivariateDistribution, x::AbstractArray)\nDistributions._logpdf(d::MultivariateDistribution, x::AbstractArray)Note that if there exists faster methods for batch evaluation, one should override _logpdf! and _pdf!.Furthermore, the generic loglikelihood function delegates to _loglikelihood, which repeatedly calls _logpdf. If there is a better way to compute log-likelihood, one should override _loglikelihood.It is also recommended that one also implements the following statistics functions:mean(d::MultivariateDistribution)\nvar(d::MultivariateDistribution)\nentropy(d::MultivariateDistribution)\ncov(d::MultivariateDistribution)"
},

{
    "location": "extends/#Create-a-Matrix-variate-Distribution-1",
    "page": "Create New Samplers and Distributions",
    "title": "Create a Matrix-variate Distribution",
    "category": "section",
    "text": "A multivariate distribution type should be defined as a subtype of DiscreteMatrixDistribution or ContinuousMatrixDistribution.Following methods need to be implemented for each matrix-variate distribution type:size(d::MatrixDistribution)\nrand(d::MatrixDistribution)\nsampler(d::MatrixDistribution)\nDistributions._logpdf(d::MatrixDistribution, x::AbstractArray)"
},

]}
