var documenterSearchIndex = {"docs": [

{
    "location": "index.html#",
    "page": "Overview",
    "title": "Overview",
    "category": "page",
    "text": ""
},

{
    "location": "index.html#Overview-1",
    "page": "Overview",
    "title": "Overview",
    "category": "section",
    "text": "CurrentModule = ContinuousTransformationsThis package implements some canonically used continuous bijections (also known as a homeomorphism) between subsets of mathbbR^n. These are useful if you have a functionf mathcalX subset mathbbR^n to mathcalYand would like to use it as a building block to define someg mathcalZ subset mathbbR^n to mathcalYThis package helps you find a function h such that g = f circ h or f = g circ h.To make things concrete, consider the following examples."
},

{
    "location": "index.html#Example:-Chebyshev-polynomials-1",
    "page": "Overview",
    "title": "Example: Chebyshev polynomials",
    "category": "section",
    "text": "Chebyshev polynomials are defined on (-1 1). If you want to approximate a function on some generic (a b) interval, you will need to transform. Usually one uses something likey = left(x - fraca+b2right)cdotfracb-a2but calculating these things manually is tedious and error prone."
},

{
    "location": "index.html#Example:-transformed-multivariate-normal-1",
    "page": "Overview",
    "title": "Example: transformed multivariate normal",
    "category": "section",
    "text": "You want to characterize the joint distribution of some quantitiesx ge 0quad a le y le bfor a statistical problem. A frequently used approach is to generate a multivariate normalz sim N(mu Sigma)and then transform z_1 to x, and z_2 to y such that the constraints above hold."
},

{
    "location": "index.html#Example:-domain-transformation-for-MCMC-1",
    "page": "Overview",
    "title": "Example: domain transformation for MCMC",
    "category": "section",
    "text": "You are using Bayesian statistics to estimate a model with a posterior that has constraints, eg for a variance sigma  0 is required. You have an algorithm that can perform efficient MCMC for a log posteriorell mathbbR^n to mathbbRbut to apply it, you need to transform from mathbbR to (0 infty). The log posterior should be adjusted by the log determinant of the transformation\'s Jacobian.This package can help you with all of these."
},

{
    "location": "general.html#",
    "page": "General API",
    "title": "General API",
    "category": "page",
    "text": ""
},

{
    "location": "general.html#ContinuousTransformations.ContinuousTransformation",
    "page": "General API",
    "title": "ContinuousTransformations.ContinuousTransformation",
    "category": "type",
    "text": "abstract type ContinuousTransformation <: Function\n\nContinuous bijection D  ℝ^n I  ℝ^n or D  ℝ  I  ℝ.\n\n\n\n\n\n"
},

{
    "location": "general.html#ContinuousTransformations.domain",
    "page": "General API",
    "title": "ContinuousTransformations.domain",
    "category": "function",
    "text": "domain(transformation)\n\nReturn the domain of the transformation.\n\n\n\n\n\n"
},

{
    "location": "general.html#ContinuousTransformations.image",
    "page": "General API",
    "title": "ContinuousTransformations.image",
    "category": "function",
    "text": "image(transformation)\n\nReturn the image of the transformation.\n\n\n\n\n\n"
},

{
    "location": "general.html#ContinuousTransformations.logjac",
    "page": "General API",
    "title": "ContinuousTransformations.logjac",
    "category": "function",
    "text": "logjac(t, x)\n\nThe log of the determinant of the Jacobian of t at x. ```\n\n\n\n\n\n"
},

{
    "location": "general.html#ContinuousTransformations.inverse",
    "page": "General API",
    "title": "ContinuousTransformations.inverse",
    "category": "function",
    "text": "inverse(t, x)\n\nReturn t¹(x).\n\ninverse(t)\n\nReturn the transformation t¹.\n\n\n\n\n\n"
},

{
    "location": "general.html#ContinuousTransformations.bridge",
    "page": "General API",
    "title": "ContinuousTransformations.bridge",
    "category": "function",
    "text": "bridge(dom, img, [transformation])\n\nReturn a transformation that maps dom to img.\n\nThe transformation argument may be used to specify a particular transformation family, otherwise default_transformation is used.\n\n\n\n\n\n"
},

{
    "location": "general.html#General-interface-for-transformations-1",
    "page": "General API",
    "title": "General interface for transformations",
    "category": "section",
    "text": "CurrentModule = ContinuousTransformationsTransformations are function-like objects, in the sense that they are callable. They also support the following general interface.ContinuousTransformation\ndomain\nimage\nlogjac\ninverseYou can create a transformation using the appropriate constructors, combine univariate-transformations, and create a transformation between two intervals.bridge"
},

{
    "location": "univariate.html#",
    "page": "Intervals and univariate transformations",
    "title": "Intervals and univariate transformations",
    "category": "page",
    "text": ""
},

{
    "location": "univariate.html#ContinuousTransformations.AbstractInterval",
    "page": "Intervals and univariate transformations",
    "title": "ContinuousTransformations.AbstractInterval",
    "category": "type",
    "text": "abstract type AbstractInterval\n\nAbstract supertype for all univariate intervals. It is not specified whether they are open or closed.\n\n\n\n\n\n"
},

{
    "location": "univariate.html#ContinuousTransformations.RealLine",
    "page": "Intervals and univariate transformations",
    "title": "ContinuousTransformations.RealLine",
    "category": "type",
    "text": "RealLine()\n\nThe real line. Use the constant ℝ.\n\n\n\n\n\n"
},

{
    "location": "univariate.html#ContinuousTransformations.ℝ",
    "page": "Intervals and univariate transformations",
    "title": "ContinuousTransformations.ℝ",
    "category": "constant",
    "text": "A constant for the real line.\n\n\n\n\n\n"
},

{
    "location": "univariate.html#ContinuousTransformations.PositiveRay",
    "page": "Intervals and univariate transformations",
    "title": "ContinuousTransformations.PositiveRay",
    "category": "type",
    "text": "PositiveRay(left)\n\nThe real numbers above left. See ℝ⁺.\n\n\n\n\n\n"
},

{
    "location": "univariate.html#ContinuousTransformations.ℝ⁺",
    "page": "Intervals and univariate transformations",
    "title": "ContinuousTransformations.ℝ⁺",
    "category": "constant",
    "text": "The positive real numbers.\n\n\n\n\n\n"
},

{
    "location": "univariate.html#ContinuousTransformations.NegativeRay",
    "page": "Intervals and univariate transformations",
    "title": "ContinuousTransformations.NegativeRay",
    "category": "type",
    "text": "NegativeRay(right)\n\nThe real numbers below right. See ℝ⁻.\n\n\n\n\n\n"
},

{
    "location": "univariate.html#ContinuousTransformations.ℝ⁻",
    "page": "Intervals and univariate transformations",
    "title": "ContinuousTransformations.ℝ⁻",
    "category": "constant",
    "text": "The negative real numbers.\n\n\n\n\n\n"
},

{
    "location": "univariate.html#ContinuousTransformations.Segment",
    "page": "Intervals and univariate transformations",
    "title": "ContinuousTransformations.Segment",
    "category": "type",
    "text": "Segment(left, right)\n\nThe real numbers between left and right, with -  textleft  textright   enforced.\n\n\n\n\n\n"
},

{
    "location": "univariate.html#ContinuousTransformations.width",
    "page": "Intervals and univariate transformations",
    "title": "ContinuousTransformations.width",
    "category": "function",
    "text": "width(s)\n\n\nWidth of a finite interval.\n\n\n\n\n\n"
},

{
    "location": "univariate.html#intervals-1",
    "page": "Intervals and univariate transformations",
    "title": "Intervals",
    "category": "section",
    "text": "CurrentModule = ContinuousTransformationsThe interval types are different from some other interval implementations in Julia. They do not specify if the interval is open or closed at an endpoint, and also encode infiniteness and semi-infiniteness in the type, for type stable code.AbstractInterval\nRealLine\nℝ\nPositiveRay\nℝ⁺\nNegativeRay\nℝ⁻\nSegmentIntervals also support the following methods in Base: minimum, maximum, in, isfinite, isinf, extrema.Segments also support middle, linspace, andwidth"
},

{
    "location": "univariate.html#univariate-transformations-1",
    "page": "Intervals and univariate transformations",
    "title": "Univariate transformations",
    "category": "section",
    "text": ""
},

{
    "location": "univariate.html#ContinuousTransformations.UnivariateTransformation",
    "page": "Intervals and univariate transformations",
    "title": "ContinuousTransformations.UnivariateTransformation",
    "category": "type",
    "text": "abstract type UnivariateTransformation <: ContinuousTransformation\n\nUnivariate monotone transformation, either increasing or decreasing on the whole domain (thus, a bijection).\n\n\n\n\n\n"
},

{
    "location": "univariate.html#ContinuousTransformations.isincreasing",
    "page": "Intervals and univariate transformations",
    "title": "ContinuousTransformations.isincreasing",
    "category": "function",
    "text": "isincreasing(transformation)\n\nReturn true (false), when the transformation is monotonically increasing (decreasing).\n\n\n\n\n\n"
},

{
    "location": "univariate.html#General-interface-1",
    "page": "Intervals and univariate transformations",
    "title": "General interface",
    "category": "section",
    "text": "UnivariateTransformation\nisincreasing"
},

{
    "location": "univariate.html#ContinuousTransformations.Affine",
    "page": "Intervals and univariate transformations",
    "title": "ContinuousTransformations.Affine",
    "category": "type",
    "text": "Affine(α, β)\n\nMapping ℝ  ℝ using x  αx + β.\n\nα  0 is enforced, see Negation.\n\n\n\n\n\n"
},

{
    "location": "univariate.html#ContinuousTransformations.IDENTITY",
    "page": "Intervals and univariate transformations",
    "title": "ContinuousTransformations.IDENTITY",
    "category": "function",
    "text": "Identity (as an affine transformation).\n\n\n\n\n\n"
},

{
    "location": "univariate.html#ContinuousTransformations.Negation",
    "page": "Intervals and univariate transformations",
    "title": "ContinuousTransformations.Negation",
    "category": "type",
    "text": "Negation()\n\nMapping ℝ  ℝ using x  -x.\n\n\n\n\n\n"
},

{
    "location": "univariate.html#ContinuousTransformations.NEGATION",
    "page": "Intervals and univariate transformations",
    "title": "ContinuousTransformations.NEGATION",
    "category": "function",
    "text": "Negation()\n\nMapping ℝ  ℝ using x  -x.\n\n\n\n\n\n"
},

{
    "location": "univariate.html#ContinuousTransformations.Logistic",
    "page": "Intervals and univariate transformations",
    "title": "ContinuousTransformations.Logistic",
    "category": "type",
    "text": "Logistic()\n\nMapping ℝ  (01) using x  1(1+exp(-x)).\n\n\n\n\n\n"
},

{
    "location": "univariate.html#ContinuousTransformations.LOGISTIC",
    "page": "Intervals and univariate transformations",
    "title": "ContinuousTransformations.LOGISTIC",
    "category": "function",
    "text": "Logistic()\n\nMapping ℝ  (01) using x  1(1+exp(-x)).\n\n\n\n\n\n"
},

{
    "location": "univariate.html#ContinuousTransformations.Exp",
    "page": "Intervals and univariate transformations",
    "title": "ContinuousTransformations.Exp",
    "category": "type",
    "text": "Exp()\n\nMapping ℝ  ℝ using x  exp(x).\n\n\n\n\n\n"
},

{
    "location": "univariate.html#ContinuousTransformations.EXP",
    "page": "Intervals and univariate transformations",
    "title": "ContinuousTransformations.EXP",
    "category": "function",
    "text": "Exp()\n\nMapping ℝ  ℝ using x  exp(x).\n\n\n\n\n\n"
},

{
    "location": "univariate.html#ContinuousTransformations.Logit",
    "page": "Intervals and univariate transformations",
    "title": "ContinuousTransformations.Logit",
    "category": "type",
    "text": "Logit()\n\nMapping (01)  ℝ using x  log(x(1-x)).\n\n\n\n\n\n"
},

{
    "location": "univariate.html#ContinuousTransformations.LOGIT",
    "page": "Intervals and univariate transformations",
    "title": "ContinuousTransformations.LOGIT",
    "category": "function",
    "text": "Logit()\n\nMapping (01)  ℝ using x  log(x(1-x)).\n\n\n\n\n\n"
},

{
    "location": "univariate.html#ContinuousTransformations.Log",
    "page": "Intervals and univariate transformations",
    "title": "ContinuousTransformations.Log",
    "category": "type",
    "text": "Log()\n\nMapping ℝ  ℝ using x  exp(x).\n\n\n\n\n\n"
},

{
    "location": "univariate.html#ContinuousTransformations.LOG",
    "page": "Intervals and univariate transformations",
    "title": "ContinuousTransformations.LOG",
    "category": "function",
    "text": "Log()\n\nMapping ℝ  ℝ using x  exp(x).\n\n\n\n\n\n"
},

{
    "location": "univariate.html#ContinuousTransformations.InvRealCircle",
    "page": "Intervals and univariate transformations",
    "title": "ContinuousTransformations.InvRealCircle",
    "category": "type",
    "text": "InvRealCircle()\n\nMapping (-11)  ℝ using x  x(1-x^2).\n\n\n\n\n\n"
},

{
    "location": "univariate.html#ContinuousTransformations.INVREALCIRCLE",
    "page": "Intervals and univariate transformations",
    "title": "ContinuousTransformations.INVREALCIRCLE",
    "category": "function",
    "text": "InvRealCircle()\n\nMapping (-11)  ℝ using x  x(1-x^2).\n\n\n\n\n\n"
},

{
    "location": "univariate.html#ContinuousTransformations.RealCircle",
    "page": "Intervals and univariate transformations",
    "title": "ContinuousTransformations.RealCircle",
    "category": "type",
    "text": "RealCircle()\n\nMapping ℝ  (-11) using x  x(1+x^2).\n\n\n\n\n\n"
},

{
    "location": "univariate.html#ContinuousTransformations.REALCIRCLE",
    "page": "Intervals and univariate transformations",
    "title": "ContinuousTransformations.REALCIRCLE",
    "category": "function",
    "text": "RealCircle()\n\nMapping ℝ  (-11) using x  x(1+x^2).\n\n\n\n\n\n"
},

{
    "location": "univariate.html#Specific-transformations-1",
    "page": "Intervals and univariate transformations",
    "title": "Specific transformations",
    "category": "section",
    "text": "Affine\nIDENTITY\nNegation\nNEGATION\nLogistic\nLOGISTIC\nExp\nEXP\nLogit\nLOGIT\nLog\nLOG\nInvRealCircle\nINVREALCIRCLE\nRealCircle\nREALCIRCLE"
},

{
    "location": "univariate.html#ContinuousTransformations.ComposedTransformation",
    "page": "Intervals and univariate transformations",
    "title": "ContinuousTransformations.ComposedTransformation",
    "category": "type",
    "text": "ComposedTransformation(f, g)\n\nCompose two univariate transformations, resulting in the mapping fg, or `x ↦ f(g(x)).\n\nUse the ∘ operator for construction.\n\n\n\n\n\n"
},

{
    "location": "univariate.html#Composing-transformations-1",
    "page": "Intervals and univariate transformations",
    "title": "Composing transformations",
    "category": "section",
    "text": "ComposedTransformation"
},

{
    "location": "grouped.html#",
    "page": "Grouped transformations",
    "title": "Grouped transformations",
    "category": "page",
    "text": ""
},

{
    "location": "grouped.html#ContinuousTransformations.GroupedTransformation",
    "page": "Grouped transformations",
    "title": "ContinuousTransformations.GroupedTransformation",
    "category": "type",
    "text": "abstract type GroupedTransformation <: ContinuousTransformation\n\nAbstract type for grouped transformations.\n\nA grouped transformation takes a vector, and transforms contiguous blocks of elements to some output type, determined by the specific transformation type.\n\nAll subtypes support\n\nlength: return the length of the vector that can be used as an argument\ncallable object for the transformation\nlogjac, and inverse,\ndomain and image, which may have specific interpretation for their result types depending on the concrete subtype.\n\n\n\n\n\n"
},

{
    "location": "grouped.html#ContinuousTransformations.TransformationTuple",
    "page": "Grouped transformations",
    "title": "ContinuousTransformations.TransformationTuple",
    "category": "type",
    "text": "TransformationTuple(transformations::Tuple)\nTransformationTuple(transformations...)\n\nA tuple of ContinuousTransformations. Given a vector of matching length, each takes as many reals as needed, and returns the result as a tuple.\n\n\n\n\n\n"
},

{
    "location": "grouped.html#ContinuousTransformations.ArrayTransformation",
    "page": "Grouped transformations",
    "title": "ContinuousTransformations.ArrayTransformation",
    "category": "type",
    "text": "ArrayTransformation(transformation, dims)\nArrayTransformation(transformation, dims...)\n\nApply transformation to a vector, returning an array of the given dimensions.\n\ndomain, image, and isincreasing return the corresponding values for the underlying transformation.\n\n\n\n\n\n"
},

{
    "location": "grouped.html#ContinuousTransformations.get_transformation",
    "page": "Grouped transformations",
    "title": "ContinuousTransformations.get_transformation",
    "category": "function",
    "text": "get_transformation(d)\n\n\nReturn the transformation from a wrapper object.\n\n\n\n\n\n"
},

{
    "location": "grouped.html#Grouped-transformations-1",
    "page": "Grouped transformations",
    "title": "Grouped transformations",
    "category": "section",
    "text": "CurrentModule = ContinuousTransformationsGroupedTransformation\nTransformationTuple\nArrayTransformation\nget_transformation"
},

{
    "location": "wrapped.html#",
    "page": "Wrapped transformations",
    "title": "Wrapped transformations",
    "category": "page",
    "text": ""
},

{
    "location": "wrapped.html#ContinuousTransformations.TransformationWrapper",
    "page": "Wrapped transformations",
    "title": "ContinuousTransformations.TransformationWrapper",
    "category": "type",
    "text": "abstract type TransformationWrapper <: Function\n\nWrap a transformation to achieve some specialized functionality.\n\nSupports length, get_transformation, and other methods depending on the subtype.\n\n\n\n\n\n"
},

{
    "location": "wrapped.html#ContinuousTransformations.TransformLogLikelihood",
    "page": "Wrapped transformations",
    "title": "ContinuousTransformations.TransformLogLikelihood",
    "category": "type",
    "text": "TransformLogLikelihood(ℓ, transformation::Union{Tuple, GroupedTransformation})\n\nTransformLogLikelihood(ℓ, transformations...)\n\nReturn a callable that\n\ntransforms its vector argument using a grouped transformation to a set of values,\ncalls ℓ (which should return a scalar) with this tuple.\nreturns the result above corrected by the log Jacobians.\n\nUseful when ℓ is a log-likelihood function with a restricted domain, and transformations is used to trasform to this domain from ℝ^n.\n\nSee also get_transformation, get_distribution, Distributions.logpdf, and logpdf_in_domain.\n\n\n\n\n\n"
},

{
    "location": "wrapped.html#ContinuousTransformations.get_loglikelihood",
    "page": "Wrapped transformations",
    "title": "ContinuousTransformations.get_loglikelihood",
    "category": "function",
    "text": "get_loglikelihood(t)\n\n\nReturn the log likelihood function.\n\n\n\n\n\n"
},

{
    "location": "wrapped.html#ContinuousTransformations.TransformDistribution",
    "page": "Wrapped transformations",
    "title": "ContinuousTransformations.TransformDistribution",
    "category": "type",
    "text": "TransformDistribution(distribution, transformation)\n\nGiven a transformation and a distribution, create a transformed distribution object that has the distribution of transformation(x) with x ∼ distribution.\n\nThe transformation object is callable with the same syntax as transformation. It also supports methods rand, length.\n\nSee also logpdf_in_domain and logpdf_in_image.\n\n\n\n\n\n"
},

{
    "location": "wrapped.html#ContinuousTransformations.get_distribution",
    "page": "Wrapped transformations",
    "title": "ContinuousTransformations.get_distribution",
    "category": "function",
    "text": "get_distribution(t)\n\n\nReturn the wrapped distribution.\n\n\n\n\n\n"
},

{
    "location": "wrapped.html#ContinuousTransformations.logpdf_in_domain",
    "page": "Wrapped transformations",
    "title": "ContinuousTransformations.logpdf_in_domain",
    "category": "function",
    "text": "logpdf_in_domain(t, x)\n\n\nThe log pdf for a transformed distribution at t(x) in image, calculated in the domain without performing the transformation.\n\nThe log pdf is adjusted with the log determinant of the Jacobian, ie the following holds:\n\njulia logpdf_in_image(t, t(x)) == logpdf_in_domain(t, x)\n\nSee logpdf_in_image.\n\nnote: Note\nTypical usage of this function would be drawing some random xs from the contained distribution (possibly also used for some other purpose), and obtaining the log pdfs at t(y) with the same values.\n\n\n\n\n\n"
},

{
    "location": "wrapped.html#ContinuousTransformations.logpdf_in_image",
    "page": "Wrapped transformations",
    "title": "ContinuousTransformations.logpdf_in_image",
    "category": "function",
    "text": "logpdf_in_image(t, y)\n\n\nThe log pdf for a transformed distribution at y in image.\n\nSee also logpdf_in_domain.\n\n\n\n\n\n"
},

{
    "location": "wrapped.html#Wrapped-transformations-1",
    "page": "Wrapped transformations",
    "title": "Wrapped transformations",
    "category": "section",
    "text": "CurrentModule = ContinuousTransformationsTransformationWrapper\nTransformLogLikelihood\nget_loglikelihood\nTransformDistribution\nget_distribution\nlogpdf_in_domain\nlogpdf_in_image"
},

{
    "location": "internals.html#",
    "page": "Internals",
    "title": "Internals",
    "category": "page",
    "text": ""
},

{
    "location": "internals.html#Various-internals-1",
    "page": "Internals",
    "title": "Various internals",
    "category": "section",
    "text": "CurrentModule = ContinuousTransformations"
},

{
    "location": "internals.html#ContinuousTransformations._maybe_segment",
    "page": "Internals",
    "title": "ContinuousTransformations._maybe_segment",
    "category": "function",
    "text": "_maybe_segment(a, b)\n\n\nHelper function for forming a segment when possible. Internal, not exported.\n\n\n\n\n\n"
},

{
    "location": "internals.html#Intervals-1",
    "page": "Internals",
    "title": "Intervals",
    "category": "section",
    "text": "_maybe_segment"
},

{
    "location": "internals.html#ContinuousTransformations.RRStability",
    "page": "Internals",
    "title": "ContinuousTransformations.RRStability",
    "category": "type",
    "text": "abstract type RRStability\n\nTrait that is useful for domain and image calculations. See RRStable.\n\n\n\n\n\n"
},

{
    "location": "internals.html#ContinuousTransformations.RRStable",
    "page": "Internals",
    "title": "ContinuousTransformations.RRStable",
    "category": "type",
    "text": "struct RRStable <: ContinuousTransformations.RRStability\n\nTrait that indicates that a univariate transformation\n\nmaps ℝ to ℝ,\nsupports mapping intervals, and\nmaps subtypes of AbstractInterval to the same type.\n\n\n\n\n\n"
},

{
    "location": "internals.html#ContinuousTransformations.NotRRStable",
    "page": "Internals",
    "title": "ContinuousTransformations.NotRRStable",
    "category": "type",
    "text": "struct NotRRStable <: ContinuousTransformations.RRStability\n\nTrait that indicates that a univariate transformation is not RRStable.\n\n\n\n\n\n"
},

{
    "location": "internals.html#ContinuousTransformations.RR_stability",
    "page": "Internals",
    "title": "ContinuousTransformations.RR_stability",
    "category": "function",
    "text": "RR_stability(?)\n\n\nReturn either the trait RRStable and NotRRStable.\n\n\n\n\n\n"
},

{
    "location": "internals.html#ContinuousTransformations.composed_domain",
    "page": "Internals",
    "title": "ContinuousTransformations.composed_domain",
    "category": "function",
    "text": "composed_domain(f_RR_stability, g_RR_stability, f, g)\n\n\n\n\n\n"
},

{
    "location": "internals.html#ContinuousTransformations.composed_image",
    "page": "Internals",
    "title": "ContinuousTransformations.composed_image",
    "category": "function",
    "text": "composed_image(f_RR_stability, g_RR_stability, f, g)\n\n\n\n\n\n"
},

{
    "location": "internals.html#ContinuousTransformations.default_transformation",
    "page": "Internals",
    "title": "ContinuousTransformations.default_transformation",
    "category": "function",
    "text": "default_transformation(dom, img)\n\nReturn a transformation from dom that can be mapped to img using affine_bridge.\n\n\n\n\n\n"
},

{
    "location": "internals.html#ContinuousTransformations.affine_bridge",
    "page": "Internals",
    "title": "ContinuousTransformations.affine_bridge",
    "category": "function",
    "text": "affine_bridge(interval1, interval1)\n\nReturn an affine transformation between two intervals of the same type.\n\n\n\n\n\n"
},

{
    "location": "internals.html#Univariate-transformations-1",
    "page": "Internals",
    "title": "Univariate transformations",
    "category": "section",
    "text": "RRStability\nRRStable\nNotRRStable\nRR_stability\ncomposed_domain\ncomposed_imagedefault_transformation\naffine_bridge"
},

{
    "location": "internals.html#ContinuousTransformations.rhs_string",
    "page": "Internals",
    "title": "ContinuousTransformations.rhs_string",
    "category": "function",
    "text": "rhs_string(transformation, term)\n\nReturn the formula representing the hand side of the transformation, with term as the argument.\n\n\n\n\n\n"
},

{
    "location": "internals.html#Printing-1",
    "page": "Internals",
    "title": "Printing",
    "category": "section",
    "text": "rhs_string"
},

{
    "location": "internals.html#ContinuousTransformations.@define_isapprox",
    "page": "Internals",
    "title": "ContinuousTransformations.@define_isapprox",
    "category": "macro",
    "text": "Define an isapprox method, comparing the given fields in type T.\n\n\n\n\n\n"
},

{
    "location": "internals.html#ContinuousTransformations.@define_singleton",
    "page": "Internals",
    "title": "ContinuousTransformations.@define_singleton",
    "category": "macro",
    "text": "Define a singleton type with the given name and supertype (specified as name <: supertype), and a constant which defaults to the name in uppercase.\n\n\n\n\n\n"
},

{
    "location": "internals.html#ContinuousTransformations._fma",
    "page": "Internals",
    "title": "ContinuousTransformations._fma",
    "category": "function",
    "text": "_fma(x, y, z)\n\nPlaceholder for Base.fma until https://github.com/JuliaDiff/ReverseDiff.jl/issues/86 is fixed.\n\n\n\n\n\n"
},

{
    "location": "internals.html#Utilities-1",
    "page": "Internals",
    "title": "Utilities",
    "category": "section",
    "text": "@define_isapprox\n@define_singleton\n_fma"
},

]}
