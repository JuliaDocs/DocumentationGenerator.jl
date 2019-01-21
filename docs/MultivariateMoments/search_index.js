var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Index",
    "title": "Index",
    "category": "page",
    "text": ""
},

{
    "location": "#MultivariateMoments-–-Multivariate-Moments-for-Julia-1",
    "page": "Index",
    "title": "MultivariateMoments –- Multivariate Moments for Julia",
    "category": "section",
    "text": "Extension of MultivariatePolynomials to moments of multivariate measures and their scalar product with polynomials. It also includes the extraction of atomic measures from moment matrices which is related to the moment problem."
},

{
    "location": "#Contents-1",
    "page": "Index",
    "title": "Contents",
    "category": "section",
    "text": "Pages = [\"moments.md\", \"atoms.md\"]\nDepth = 2"
},

{
    "location": "moments/#",
    "page": "Moments and expectation",
    "title": "Moments and expectation",
    "category": "page",
    "text": ""
},

{
    "location": "moments/#Moments-and-expectation-1",
    "page": "Moments and expectation",
    "title": "Moments and expectation",
    "category": "section",
    "text": ""
},

{
    "location": "moments/#MultivariateMoments.moment",
    "page": "Moments and expectation",
    "title": "MultivariateMoments.moment",
    "category": "function",
    "text": "moment(α, m::AbstractMonomial)\n\nCreates the moment of the monomial m of value α.\n\n\n\n\n\n"
},

{
    "location": "moments/#Moment-1",
    "page": "Moments and expectation",
    "title": "Moment",
    "category": "section",
    "text": "Given a measure mu and a monomial m, the moment m of the measure is defined by the expectation mathbbE_mum. Given a monomial and a value for the moment, a moment can be created using the moment functionmomentThe moment function returns an AbstractMoment which is a subtype of AbstractMomentLike. An AbstractMomentLike is a type that can act like an AbstractMoment (it is similar to MultivariatePolynomials\' AbstractMonomialLike, AbstractTermLike and AbstractPolynomialLike), that is, it implements the following two functionsvalue\nmonomial(::MultivariateMoments.Moment)"
},

{
    "location": "moments/#MultivariateMoments.measure",
    "page": "Moments and expectation",
    "title": "MultivariateMoments.measure",
    "category": "function",
    "text": "measure(a, X::AbstractVector{<:AbstractMonomial})\n\nCreates a measure with moments moment(a[i], X[i]) for each i.\n\n\n\n\n\n"
},

{
    "location": "moments/#MultivariatePolynomials.variables-Tuple{MultivariateMoments.Measure}",
    "page": "Moments and expectation",
    "title": "MultivariatePolynomials.variables",
    "category": "method",
    "text": "variables(μ::AbstractMeasureLike)\n\nReturns the variables of μ in decreasing order. Just like in MultivariatePolynomials, it could contain variables of zero degree in every monomial.\n\n\n\n\n\n"
},

{
    "location": "moments/#MultivariatePolynomials.monomials-Tuple{MultivariateMoments.Measure}",
    "page": "Moments and expectation",
    "title": "MultivariatePolynomials.monomials",
    "category": "method",
    "text": "monomials(μ::AbstractMeasureLike)\n\nReturns an iterator over the monomials of μ sorted in the decreasing order.\n\n\n\n\n\n"
},

{
    "location": "moments/#MultivariateMoments.moments",
    "page": "Moments and expectation",
    "title": "MultivariateMoments.moments",
    "category": "function",
    "text": "moments(μ::AbstractMeasureLike)\n\nReturns an iterator over the moments of μ sorted in decreasing order of monomial.\n\n\n\n\n\n"
},

{
    "location": "moments/#MultivariateMoments.dirac",
    "page": "Moments and expectation",
    "title": "MultivariateMoments.dirac",
    "category": "function",
    "text": "dirac(X::AbstractVector{<:AbstractMoment}, s::AbstractSubstitution...)\n\nCreates the dirac measure by evaluating the moments of X using s.\n\nExamples\n\nCalling dirac([x*y, x*y^2], x=>3, y=>2) should the measure with moment x*y of value 6 and moment x*y^2 of value 12.\n\n\n\n\n\n"
},

{
    "location": "moments/#Measure-1",
    "page": "Moments and expectation",
    "title": "Measure",
    "category": "section",
    "text": "Given a monomials and a values for the moments, a \"measure\" can be created using the measure functionmeasureThe measure function returns an AbstractMeasure which is a subtype of AbstractMeasureLike. Note that it does not actually compute the probability density function of a measure having these moments, it simply stores a vector of moments belonging to a hypothetical measure. However, it acts like a measure when taking its scalar product with a polynomial.An AbstractMeasureLike is a type that can act like an AbstractMeasure, that is, it implements the following two functionsvariables(::MultivariateMoments.Measure)\nmonomials(::MultivariateMoments.Measure)\nmomentsThe moments of the dirac measure for a vector of monomials can be obtained by the dirac functiondirac"
},

{
    "location": "moments/#MultivariateMoments.expectation",
    "page": "Moments and expectation",
    "title": "MultivariateMoments.expectation",
    "category": "function",
    "text": "MultivariateMoments.expectation(μ::AbstractMeasureLike, p::AbstractPolynomialLike)\nMultivariateMoments.expectation(p::AbstractPolynomialLike, μ::AbstractMeasureLike)\n\nComputes the expectation mathbbE_mup.\n\n\n\n\n\n"
},

{
    "location": "moments/#LinearAlgebra.dot",
    "page": "Moments and expectation",
    "title": "LinearAlgebra.dot",
    "category": "function",
    "text": "dot(μ::AbstractMeasureLike, p::AbstractPolynomialLike)\ndot(p::AbstractPolynomialLike, μ::AbstractMeasureLike)\n\nSee expectation\n\n\n\n\n\n"
},

{
    "location": "moments/#Expectation-1",
    "page": "Moments and expectation",
    "title": "Expectation",
    "category": "section",
    "text": "The expectation of polynomial with respect to a measure can be computed either using MultivariateMoments.expectation or using the Base.dot scalar product.MultivariateMoments.expectation\ndot"
},

{
    "location": "atoms/#",
    "page": "Atoms extraction",
    "title": "Atoms extraction",
    "category": "page",
    "text": ""
},

{
    "location": "atoms/#Atoms-extration-1",
    "page": "Atoms extraction",
    "title": "Atoms extration",
    "category": "section",
    "text": ""
},

{
    "location": "atoms/#MultivariateMoments.MatMeasure",
    "page": "Atoms extraction",
    "title": "MultivariateMoments.MatMeasure",
    "category": "type",
    "text": "mutable struct MatMeasure{T, MT <: AbstractMonomial, MVT <: AbstractVector{MT}} <: AbstractMeasureLike{T}\n    Q::SymMatrix{T}\n    x::MVT\n    support::Union{Nothing, AlgebraicSet}\nend\n\nMeasure nu represented by the moments of the monomial matrix x x^top in the symmetric matrix Q. The set of points that are zeros of all the polynomials p such that mathbbE_nup = 0 is stored in the field support when it is computed.\n\n\n\n\n\n"
},

{
    "location": "atoms/#MultivariateMoments.matmeasure",
    "page": "Atoms extraction",
    "title": "MultivariateMoments.matmeasure",
    "category": "function",
    "text": "matmeasure(μ::Measure, x)\n\nCreates a matrix the moment matrix for the moment matrix  x x^top using the moments of μ.\n\n\n\n\n\n"
},

{
    "location": "atoms/#Moment-matrix-1",
    "page": "Atoms extraction",
    "title": "Moment matrix",
    "category": "section",
    "text": "MatMeasure\nmatmeasure"
},

{
    "location": "atoms/#MultivariateMoments.WeightedDiracMeasure",
    "page": "Atoms extraction",
    "title": "MultivariateMoments.WeightedDiracMeasure",
    "category": "type",
    "text": "struct WeightedDiracMeasure{T}\n    center::Vector{T}\n    weight::T\nend\n\nRepresents a weighted dirac measure with centered at center and with weight weight.\n\n\n\n\n\n"
},

{
    "location": "atoms/#MultivariateMoments.AtomicMeasure",
    "page": "Atoms extraction",
    "title": "MultivariateMoments.AtomicMeasure",
    "category": "type",
    "text": "struct AtomicMeasure{T, V} <: AbstractMeasureLike{T}\n    variables::V                           # Vector/Tuple of variables\n    atoms::Vector{WeightedDiracMeasure{T}} # Atoms of the measure\nend\n\nAn measure is said to be atomic if it is a sum of weighted dirac measures. For instance, eta = 2 delta_(1 0) + 3 delta_(12 12) is an atomic measure since it is a sum of the diracs centered at (1 0) and (12 12) and weighted respectively by 2 and 3. That is, mathbbE_etap = 2p(1 0) + 3p(12 12).\n\nThe AtomicMeasure struct stores an atomic measure where variables contains the variables and atoms contains atoms of the measure.\n\n\n\n\n\n"
},

{
    "location": "atoms/#Atomic-measure-1",
    "page": "Atoms extraction",
    "title": "Atomic measure",
    "category": "section",
    "text": "WeightedDiracMeasure\nAtomicMeasure"
},

{
    "location": "atoms/#MultivariateMoments.computesupport!",
    "page": "Atoms extraction",
    "title": "MultivariateMoments.computesupport!",
    "category": "function",
    "text": "MultivariateMoments.computesupport!(ν::MatMeasure, ranktol, [dec])\n\nComputes the support field of ν. The ranktol and dec parameters are passed as is to the lowrankchol function.\n\n\n\n\n\n"
},

{
    "location": "atoms/#MultivariateMoments.extractatoms",
    "page": "Atoms extraction",
    "title": "MultivariateMoments.extractatoms",
    "category": "function",
    "text": "extractatoms(ν::MatMeasure, ranktol, [dec])\n\nReturn an AtomicMeasure with the atoms of ν if it is atomic or nothing if ν is not atomic. The ranktol and dec parameters are passed as is to the lowrankchol function.\n\n\n\n\n\n"
},

{
    "location": "atoms/#MultivariateMoments.LowRankChol",
    "page": "Atoms extraction",
    "title": "MultivariateMoments.LowRankChol",
    "category": "type",
    "text": "LowRankChol\n\nMethod for computing a r times n matrix U of a n times n rank r psd matrix Q such that Q = U\'U.\n\n\n\n\n\n"
},

{
    "location": "atoms/#MultivariateMoments.ShiftChol",
    "page": "Atoms extraction",
    "title": "MultivariateMoments.ShiftChol",
    "category": "type",
    "text": "ShiftChol <: LowRankChol\n\nShift the matrix by shift times the identity matrix before cholesky.\n\n\n\n\n\n"
},

{
    "location": "atoms/#MultivariateMoments.SVDChol",
    "page": "Atoms extraction",
    "title": "MultivariateMoments.SVDChol",
    "category": "type",
    "text": "SVDChol <: LowRankChol\n\nUse SVD decomposition.\n\n\n\n\n\n"
},

{
    "location": "atoms/#MultivariateMoments.lowrankchol",
    "page": "Atoms extraction",
    "title": "MultivariateMoments.lowrankchol",
    "category": "function",
    "text": "MultivariateMoments.lowrankchol(Q::AbstractMatrix, dec::LowRankChol, ranktol)\n\nReturns a r times n matrix U of a n times n rank r positive semidefinite matrix Q such that Q = U^top U. The rank of Q is the number of singular values larger than ranktol cdot sigma_1 where sigma_1 is the largest singular value.\n\n\n\n\n\n"
},

{
    "location": "atoms/#Atoms-extraction-1",
    "page": "Atoms extraction",
    "title": "Atoms extraction",
    "category": "section",
    "text": "Given a MatMeasure with a positive semidefinite moment matrix, an algebraic system for which the set of solution is a superset of the support of the measure. If the measure is atomic and the MatMeasure contains enough moments, the algebraic system will only have a finite number of solutions which are the centers of the diracs of the measure.MultivariateMoments.computesupport!\nextractatomsThis system is obtained from a low rank cholesky decomposition of the moment matrix. This decomposition can either be obtained by a cholesky or SVD decomposition from which we remove the rows corresponding to the negligeable eigenvalues/singular values.LowRankChol\nShiftChol\nSVDChol\nMultivariateMoments.lowrankchol"
},

]}
