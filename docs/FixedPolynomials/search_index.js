var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Introduction",
    "title": "Introduction",
    "category": "page",
    "text": ""
},

{
    "location": "#Introduction-1",
    "page": "Introduction",
    "title": "Introduction",
    "category": "section",
    "text": "FixedPolynomials.jl is a library for really fast evaluation of multivariate polynomials. Here are the latest benchmark results.Since FixedPolynomials polynomials are optimised for fast evaluation they are not suited for construction of polynomials. It is recommended to construct a polynomial with an implementation of MultivariatePolynomials.jl, e.g. DynamicPolynomials.jl, and to convert it then into a FixedPolynomials.Polynomial for further computations."
},

{
    "location": "#Tutorial-1",
    "page": "Introduction",
    "title": "Tutorial",
    "category": "section",
    "text": "Here is an example on how to create a Polynomial with Float64 coefficients:using FixedPolynomials\nimport DynamicPolynomials: @polyvar\n\n@polyvar x y z\n\nf = Polynomial{Float64}(x^2+y^3*z-2x*y)To evaluate f you simply have to pass in a Vector{Float64}x = rand(3)\nf(x) # alternatively evaluate(f, x)But this is note the fastest way possible. In order to achieve the best performance we need to precompute some things and also preallocate intermediate storage. For this we have GradientConfig and JacobianConfig. For single polynomial the API is as followscfg = config(f, x) # this can be reused!\nf(x) == evaluate(f, x, cfg)\n# We can also compute the gradient of f at x\nmap(g -> g(x), ∇f) == gradient(f, x, cfg)We also have support for systems of polynomials:F = System([f, g])\ncfg = config(F, x) # this can be reused!\n[f(x), f(x)] == evaluate([f, f] x, cfg)\n# We can also compute the jacobian of [f, f] at x\njacobian(f, x, cfg)Make sure to also check out GradientDiffResult and JacobianDiffResult.note: Note\nf has then the variable ordering as implied by DynamicPolynomials.variables(x^2+y^3*z-2x*y), i.e. f([1.0, 2.0, 3.0]) will evaluate f with x=1, y=2 and z=3."
},

{
    "location": "#Safety-notes-1",
    "page": "Introduction",
    "title": "Safety notes",
    "category": "section",
    "text": "warning: Warning\nThe current implementation is not numerically stable in the sense that for polynomials with terms of degree over 43 we cannot guarantee an error of less than 1 ULP."
},

{
    "location": "reference/#",
    "page": "Polynomial",
    "title": "Polynomial",
    "category": "page",
    "text": ""
},

{
    "location": "reference/#FixedPolynomials.Polynomial",
    "page": "Polynomial",
    "title": "FixedPolynomials.Polynomial",
    "category": "type",
    "text": "Polynomial(p::MultivariatePolynomials.AbstractPolynomial [, variables [, homogenized=false]])\n\nA structure for fast evaluation of multivariate polynomials. The terms are sorted first by total degree, then lexicographically. Polynomial has first class support for homogenous polynomials. This field indicates whether the first variable should be considered as the homogenization variable.\n\nPolynomial{T}(p::MultivariatePolynomials.AbstractPolynomial [, variables [, homogenized=false]])\n\nYou can force a coefficient type T. For optimal performance T should be same type as the input to with which it will be evaluated.\n\nPolynomial(exponents::Matrix{Int}, coefficients::Vector{T}, variables, [, homogenized=false])\n\nYou can also create a polynomial directly. Note that in exponents each column represents the exponent of a term.\n\nExample\n\nPoly([3 1; 1 1; 0 2 ], [-2.0, 3.0], [:x, :y, :z]) == 3.0x^2yz^2 - 2x^3y\n\n\n\n\n\n"
},

{
    "location": "reference/#Types-1",
    "page": "Polynomial",
    "title": "Types",
    "category": "section",
    "text": "Polynomial"
},

{
    "location": "reference/#FixedPolynomials.exponents",
    "page": "Polynomial",
    "title": "FixedPolynomials.exponents",
    "category": "function",
    "text": "exponents(p::Polynomial)\n\nReturns the exponents matrix of p. Each column represents the exponents of a term of p.\n\n\n\n\n\n"
},

{
    "location": "reference/#FixedPolynomials.coefficients",
    "page": "Polynomial",
    "title": "FixedPolynomials.coefficients",
    "category": "function",
    "text": "coefficients(p::Polynomial)\n\nReturns the coefficient vector of p.\n\n\n\n\n\n"
},

{
    "location": "reference/#FixedPolynomials.nterms",
    "page": "Polynomial",
    "title": "FixedPolynomials.nterms",
    "category": "function",
    "text": "nterms(p::Polynomial)\n\nReturns the number of terms of p\n\n\n\n\n\n"
},

{
    "location": "reference/#FixedPolynomials.variables",
    "page": "Polynomial",
    "title": "FixedPolynomials.variables",
    "category": "function",
    "text": "variables(p::Polynomial)\n\nReturns the variables of p.\n\n\n\n\n\n"
},

{
    "location": "reference/#FixedPolynomials.nvariables",
    "page": "Polynomial",
    "title": "FixedPolynomials.nvariables",
    "category": "function",
    "text": "nvariables(p::Polynomial)\n\nReturns the number of variables of p\n\n\n\n\n\nnvariables(F::System)\n\nReturns the number of variables of F.\n\n\n\n\n\n"
},

{
    "location": "reference/#FixedPolynomials.degree",
    "page": "Polynomial",
    "title": "FixedPolynomials.degree",
    "category": "function",
    "text": "degree(p::Polynomial)\n\nReturns the (total) degree of p.\n\n\n\n\n\n"
},

{
    "location": "reference/#FixedPolynomials.ishomogenous",
    "page": "Polynomial",
    "title": "FixedPolynomials.ishomogenous",
    "category": "function",
    "text": "ishomogenous(p::Polynomial)\n\nChecks whether p is a homogenous polynomial. Note that this is unaffected from the value of homogenized(p).\n\n\n\n\n\n"
},

{
    "location": "reference/#FixedPolynomials.ishomogenized",
    "page": "Polynomial",
    "title": "FixedPolynomials.ishomogenized",
    "category": "function",
    "text": "ishomogenized(p::Polynomial)\n\nChecks whether p was homogenized.\n\n\n\n\n\n"
},

{
    "location": "reference/#Accessors-1",
    "page": "Polynomial",
    "title": "Accessors",
    "category": "section",
    "text": "exponents\ncoefficients\nnterms\nvariables\nnvariables\ndegree\nishomogenous\nishomogenized"
},

{
    "location": "reference/#FixedPolynomials.differentiate",
    "page": "Polynomial",
    "title": "FixedPolynomials.differentiate",
    "category": "function",
    "text": "differentiate(p::Polynomial, varindex::Int)\n\nDifferentiate p w.r.t the varindexth variable.\n\ndifferentiate(p::Polynomial)\n\nDifferentiate p w.r.t. all variables.\n\n\n\n\n\n"
},

{
    "location": "reference/#FixedPolynomials.∇",
    "page": "Polynomial",
    "title": "FixedPolynomials.∇",
    "category": "function",
    "text": "∇(p::Polynomial)\n\nReturns the gradient vector of p. This is the same as differentiate.\n\n\n\n\n\n"
},

{
    "location": "reference/#FixedPolynomials.homogenize",
    "page": "Polynomial",
    "title": "FixedPolynomials.homogenize",
    "category": "function",
    "text": "homogenize(p::Polynomial [, variable = :x0])\n\nMakes p homogenous, if ishomogenized(p) is true this is just the identity. The homogenization variable will always be considered as the first variable of the polynomial.\n\n\n\n\n\n"
},

{
    "location": "reference/#FixedPolynomials.dehomogenize",
    "page": "Polynomial",
    "title": "FixedPolynomials.dehomogenize",
    "category": "function",
    "text": "dehomogenize(p::Polynomial)\n\nSubstitute 1 as for the first variable p, if ishomogenized(p) is false this is just the identity.\n\n\n\n\n\n"
},

{
    "location": "reference/#FixedPolynomials.scale_coefficients!",
    "page": "Polynomial",
    "title": "FixedPolynomials.scale_coefficients!",
    "category": "function",
    "text": "scale_coefficients!(f::Polynomial, λ)\n\nScale the coefficients of f with the factor λ.\n\n\n\n\n\n"
},

{
    "location": "reference/#Modification-1",
    "page": "Polynomial",
    "title": "Modification",
    "category": "section",
    "text": "differentiate\n∇\nhomogenize\ndehomogenize\nscale_coefficients!"
},

{
    "location": "reference/#FixedPolynomials.weyldot",
    "page": "Polynomial",
    "title": "FixedPolynomials.weyldot",
    "category": "function",
    "text": "weyldot(f::Polynomial, g::Polynomial)\n\nCompute the Bombieri-Weyl dot product. Note that this is only properly defined if f and g are homogenous.\n\nweyldot(f::Vector{Polynomial}, g::Vector{Polynomial})\n\nCompute the dot product for vectors of polynomials.\n\n\n\n\n\n"
},

{
    "location": "reference/#FixedPolynomials.weylnorm",
    "page": "Polynomial",
    "title": "FixedPolynomials.weylnorm",
    "category": "function",
    "text": "weylnorm(f::Polynomial)\n\nCompute the Bombieri-Weyl norm. Note that this is only properly defined if f is homogenous.\n\n\n\n\n\n"
},

{
    "location": "reference/#Misc-1",
    "page": "Polynomial",
    "title": "Misc",
    "category": "section",
    "text": "weyldot\nweylnorm"
},

{
    "location": "performance/#FixedPolynomials.config",
    "page": "Fast Evaluation",
    "title": "FixedPolynomials.config",
    "category": "function",
    "text": "config(F::Polynomial, x)\n\nConstruct a GradientConfig for the evaluation of f with values like x.\n\n\n\n\n\nconfig(F::System, x)\n\nConstruct a JacobianConfig for the evaluation of F with values like x.\n\n\n\n\n\n"
},

{
    "location": "performance/#",
    "page": "Fast Evaluation",
    "title": "Fast Evaluation",
    "category": "page",
    "text": "In order to achieve a fast evaluation we need to precompute some things and also preallocate intermediate storage. For this we haveconfig"
},

{
    "location": "performance/#FixedPolynomials.evaluate",
    "page": "Fast Evaluation",
    "title": "FixedPolynomials.evaluate",
    "category": "function",
    "text": "evaluate(p::Polynomial{T}, x::AbstractVector{T})\n\nEvaluates p at x, i.e. p(x). Polynomial is also callable, i.e. you can also evaluate it via p(x).\n\n\n\n\n\nevaluate(g, x, cfg::GradientConfig [, precomputed=false])\n\nEvaluate g at x using the precomputated values in cfg. Note that this is usually signifcant faster than evaluate(g, x).\n\nExample\n\ncfg = GradientConfig(g)\nevaluate(g, x, cfg)\n\nWith precomputed=true we rely on the previous intermediate results in cfg. Therefore the result is only correct if you previouls called evaluate, or gradient with the same x.\n\n\n\n\n\nevaluate(F, x, cfg::JacobianConfig [, precomputed=false])\n\nEvaluate the system F at x using the precomputated values in cfg. Note that this is usually signifcant faster than map(f -> evaluate(f, x), F). The return vector is constructed using similar(x, T).\n\nExample\n\ncfg = JacobianConfig(F)\nevaluate(F, x, cfg)\n\nWith precomputed=true we rely on the previous intermediate results in cfg. Therefore the result is only correct if you previouls called evaluate, or jacobian with the same x.\n\n\n\n\n\n"
},

{
    "location": "performance/#FixedPolynomials.evaluate!",
    "page": "Fast Evaluation",
    "title": "FixedPolynomials.evaluate!",
    "category": "function",
    "text": "evaluate!(u, F, x, cfg::JacobianConfig [, precomputed=false])\n\nEvaluate the system F at x using the precomputated values in cfg and store the result in u. Note that this is usually signifcant faster than map!(u, f -> evaluate(f, x), F).\n\nExample\n\ncfg = JacobianConfig(F)\nevaluate!(u, F, x, cfg)\n\nWith precomputed=true we rely on the previous intermediate results in cfg. Therefore the result is only correct if you previouls called evaluate, or jacobian with the same x.\n\n\n\n\n\n"
},

{
    "location": "performance/#Evaluation-1",
    "page": "Fast Evaluation",
    "title": "Evaluation",
    "category": "section",
    "text": "evaluate\nevaluate!"
},

{
    "location": "performance/#FixedPolynomials.gradient",
    "page": "Fast Evaluation",
    "title": "FixedPolynomials.gradient",
    "category": "function",
    "text": "gradient(g, x, cfg::GradientConfig[, precomputed=false])\n\nCompute the gradient of g at x using the precomputated values in cfg. The return vector is constructed using similar(x, T).\n\nExample\n\ncfg = GradientConfig(g)\ngradient(g, x, cfg)\n\nWith precomputed=true we rely on the previous intermediate results in cfg. Therefore the result is only correct if you previouls called evaluate, or gradient with the same x.\n\n\n\n\n\ngradient(r::GradientDiffResult)\n\nGet the currently stored gradient in r.\n\n\n\n\n\n"
},

{
    "location": "performance/#FixedPolynomials.gradient!",
    "page": "Fast Evaluation",
    "title": "FixedPolynomials.gradient!",
    "category": "function",
    "text": "gradient!(u, g, x, cfg::GradientConfig [, precomputed=false])\n\nCompute the gradient of g at x using the precomputated values in cfg and store thre result in u.\n\nExample\n\ncfg = GradientConfig(g)\ngradient(u, g, x, cfg)\n\nWith precomputed=true we rely on the previous intermediate results in cfg. Therefore the result is only correct if you previouls called evaluate, or gradient with the same x.\n\n\n\n\n\ngradient!(r::GradientDiffResult, g, x, cfg::GradientConfig)\n\nCompute g(x) and the gradient of g at x at once using the precomputated values in cfg and store thre result in r. This is faster than calling both values separetely.\n\nExample\n\ncfg = GradientConfig(g)\nr = GradientDiffResult(r)\ngradient!(r, g, x, cfg)\n\nvalue(r) == g(x)\ngradient(r) == gradient(g, x, cfg)\n\n\n\n\n\n"
},

{
    "location": "performance/#FixedPolynomials.jacobian",
    "page": "Fast Evaluation",
    "title": "FixedPolynomials.jacobian",
    "category": "function",
    "text": "jacobian(u, F, x, cfg::JacobianConfig [, precomputed=false])\n\nEvaluate the jacobian of F at x using the precomputated values in cfg. The return matrix is constructed using similar(x, T, m, n).\n\nExample\n\ncfg = JacobianConfig(F)\njacobian(F, x, cfg)\n\nWith precomputed=true we rely on the previous intermediate results in cfg. Therefore the result is only correct if you previouls called evaluate, or jacobian with the same x.\n\n\n\n\n\n"
},

{
    "location": "performance/#FixedPolynomials.jacobian!",
    "page": "Fast Evaluation",
    "title": "FixedPolynomials.jacobian!",
    "category": "function",
    "text": "jacobian!(u, F, x, cfg::JacobianConfig [, precomputed=false])\n\nEvaluate the jacobian of F at x using the precomputated values in cfg and store the result in u.\n\nExample\n\ncfg = JacobianConfig(F)\njacobian!(u, F, x, cfg)\n\nWith precomputed=true we rely on the previous intermediate results in cfg. Therefore the result is only correct if you previouls called evaluate, or jacobian with the same x.\n\n\n\n\n\njacobian!(r::JacobianDiffResult, F, x, cfg::JacobianConfig)\n\nCompute F(x) and the jacobian of F at x at once using the precomputated values in cfg and store thre result in r. This is faster than computing both values separetely.\n\nExample\n\ncfg = GradientConfig(g)\nr = GradientDiffResult(cfg)\ngradient!(r, g, x, cfg)\n\nvalue(r) == g(x)\ngradient(r) == gradient(g, x, cfg)\n\n\n\n\n\n"
},

{
    "location": "performance/#Derivatives-1",
    "page": "Fast Evaluation",
    "title": "Derivatives",
    "category": "section",
    "text": "FixedPolynomials.gradient\ngradient!\njacobian\njacobian!"
},

{
    "location": "performance/#FixedPolynomials.System",
    "page": "Fast Evaluation",
    "title": "FixedPolynomials.System",
    "category": "type",
    "text": "System(polys [, variables])\n\nConstruct a system of polynomials from the given polynomials polys.\n\n\n\n\n\n"
},

{
    "location": "performance/#Systems-1",
    "page": "Fast Evaluation",
    "title": "Systems",
    "category": "section",
    "text": "SystemSystems have the additional functionsevaluate_and_jacobian!\nevaluate_and_jacobian"
},

{
    "location": "performance/#FixedPolynomials.GradientDiffResult",
    "page": "Fast Evaluation",
    "title": "FixedPolynomials.GradientDiffResult",
    "category": "type",
    "text": "GradientDiffResult(cfg::GradientConfig)\n\nDuring the computation of g(x) we compute nearly everything we need for the evaluation of g(x). GradientDiffResult allocates memory to hold both values. This structure also signals gradient! to store g(x) and g(x).\n\nExample\n\ncfg = GradientConfig(g, x)\nr = GradientDiffResult(cfg)\ngradient!(r, g, x, cfg)\n\nvalue(r) == g(x)\ngradient(r) == gradient(g, x, cfg)\n\nGradientDiffResult(grad::AbstractVector)\n\nAllocate the memory to hold the gradient by yourself.\n\n\n\n\n\n"
},

{
    "location": "performance/#FixedPolynomials.JacobianDiffResult",
    "page": "Fast Evaluation",
    "title": "FixedPolynomials.JacobianDiffResult",
    "category": "type",
    "text": "JacobianDiffResult(cfg::GradientConfig)\n\nDuring the computation of the jacobian J_F(x) we compute nearly everything we need for the evaluation of F(x). JacobianDiffResult allocates memory to hold both values. This structure also signals jacobian! to store F(x) and J_F(x).\n\nExample\n\ncfg = JacobianConfig(F, x)\nr = JacobianDiffResult(cfg)\njacobian!(r, F, x, cfg)\n\nvalue(r) == map(f -> f(x), F)\njacobian(r) == jacobian(F, x, cfg)\n\nJacobianDiffResult(value::AbstractVector, jacobian::AbstractMatrix)\n\nAllocate the memory to hold the value and the jacobian by yourself.\n\n\n\n\n\n"
},

{
    "location": "performance/#FixedPolynomials.value",
    "page": "Fast Evaluation",
    "title": "FixedPolynomials.value",
    "category": "function",
    "text": "value(r::GradientDiffResult)\n\nGet the currently stored value in r.\n\n\n\n\n\n"
},

{
    "location": "performance/#DiffResults-1",
    "page": "Fast Evaluation",
    "title": "DiffResults",
    "category": "section",
    "text": "GradientDiffResult\nJacobianDiffResult\nvalue"
},

]}
