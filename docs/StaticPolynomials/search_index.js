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
    "text": "StaticPolynomials.jl is a library for fast evaluation of multivariate polynomials. It achieves it speed by automatically generating and compiling high performance code for the evaluation of the polynomial and it\'s derivatives. This is made possible by encoding in the type signature which terms exists and Julia\'s metaprogramming capabilities (in particular generated functions).A tradeoff of this is approach is that for each polynomial (unless only coefficients changes) new functions have to be compiled. Therefore this is usually only a good idea if you have to evaluate the same polynomial (system) very often.Since the polynomials in this package are optimised for fast evaluation they are not suited for the usual polynomial arithmetic. It is recommended to construct a polynomial with an implementation of MultivariatePolynomials.jl, e.g. DynamicPolynomials.jl, and to convert them into a Polynomial for the evaluations."
},

{
    "location": "#Performance-1",
    "page": "Introduction",
    "title": "Performance",
    "category": "section",
    "text": "StaticPolynomials is substantially faster than automatic differentiation packages like ForwardDiff, also works for complex polynomials and often outperforms hand tuned gradients.using StaticPolynomials, BenchmarkTools, StaticArrays\nimport ForwardDiff\nimport DynamicPolynomials: @polyvar\n\n# Our real-world test polynomial\nfunction f10(x)\n    f  = 48*x[1]^3 + 72*x[1]^2*x[2] + 72*x[1]^2*x[3] + 72*x[1]^2*x[4] + 72*x[1]^2*x[5] + 72*x[1]^2*x[7]\n    f += 72*x[1]^2*x[8] + 72*x[1]*x[2]^2 + 144*x[1]*x[2]*x[4] + 144*x[1]*x[2]*x[7] + 72*x[1]*x[3]^2\n    f += 144*x[1]*x[3]*x[5] + 144*x[1]*x[3]*x[8] + 72*x[1]*x[4]^2 + 144*x[1]*x[4]*x[7] + 72*x[1]*x[5]^2\n    f += 144*x[1]*x[5]*x[8] + 72*x[1]*x[7]^2 + 72*x[1]*x[8]^2 + 48*x[2]^3 + 72*x[2]^2*x[3]\n    f += 72*x[2]^2*x[4] + 72*x[2]^2*x[6] + 72*x[2]^2*x[7] + 72*x[2]^2*x[9] + 72*x[2]*x[3]^2\n    f += 144*x[2]*x[3]*x[6] + 144*x[2]*x[3]*x[9] + 72*x[2]*x[4]^2 + 144*x[2]*x[4]*x[7] + 72*x[2]*x[6]^2\n    f += 144*x[2]*x[6]*x[9] + 72*x[2]*x[7]^2 + 72*x[2]*x[9]^2 + 48*x[3]^3 + 72*x[3]^2*x[5]\n    f += 72*x[3]^2*x[6] + 72*x[3]^2*x[8] + 72*x[3]^2*x[9] + 72*x[3]*x[5]^2 + 144*x[3]*x[5]*x[8]\n    f += 72*x[3]*x[6]^2 + 144*x[3]*x[6]*x[9] + 72*x[3]*x[8]^2 + 72*x[3]*x[9]^2 + 48*x[4]^3\n    f += 72*x[4]^2*x[5] + 72*x[4]^2*x[6] + 72*x[4]^2*x[7] + 72*x[4]^2*x[10] + 72*x[4]*x[5]^2\n    f += 144*x[4]*x[5]*x[6] + 144*x[4]*x[5]*x[10] + 72*x[4]*x[6]^2 + 144*x[4]*x[6]*x[10] + 72*x[4]*x[7]^2\n    f += 72*x[4]*x[10]^2 + 48*x[5]^3 + 72*x[5]^2*x[6] + 72*x[5]^2*x[8] + 72*x[5]^2*x[10]\n    f += 72*x[5]*x[6]^2 + 144*x[5]*x[6]*x[10] + 72*x[5]*x[8]^2 + 72*x[5]*x[10]^2 + 48*x[6]^3\n    f += 72*x[6]^2*x[9] + 72*x[6]^2*x[10] + 72*x[6]*x[9]^2 + 72*x[6]*x[10]^2 + 48*x[7]^3\n    f += 72*x[7]^2*x[8] + 72*x[7]^2*x[9] + 72*x[7]^2*x[10] + 72*x[7]*x[8]^2 + 144*x[7]*x[8]*x[9]\n    f += 144*x[7]*x[8]*x[10] + 72*x[7]*x[9]^2 + 144*x[7]*x[9]*x[10] + 72*x[7]*x[10]^2 + 48*x[8]^3\n    f += 72*x[8]^2*x[9] + 72*x[8]^2*x[10] + 72*x[8]*x[9]^2 + 144*x[8]*x[9]*x[10] + 72*x[8]*x[10]^2\n    f += 48*x[9]^3 + 72*x[9]^2*x[10] + 72*x[9]*x[10]^2 + 48*x[10]^3\n    return f\nend\n\n# setup polynomial\n@polyvar x[1:10]\np10 = Polynomial(f10(x))\n\nx = @SVector rand(10)\n\n@btime f10($x) # 31.778 ns (0 allocations: 0 bytes)\n@btime $p10($x) # 28.836 ns (0 allocations: 0 bytes)\n\n@btime gradient($p10, $x) # 72.334 ns (0 allocations: 0 bytes)\ncfg = ForwardDiff.GradientConfig(f10, x)\n@btime ForwardDiff.gradient($f10, $x, $cfg) # 550.187 ns (2 allocations: 192 bytes)"
},

{
    "location": "#Short-introduction-1",
    "page": "Introduction",
    "title": "Short introduction",
    "category": "section",
    "text": "julia> import DynamicPolynomials: @polyvar;\njulia> using StaticPolynomials: gradient;\n\njulia> @polyvar x y a;\n\njulia> f = Polynomial(x^2+3y^2*x+1)\n1 + x² + 3xy²\n\njulia> evaluate(f, [2, 3])\n59\n\njulia> gradient(f, [2, 3])\n2-element Array{Int64,1}:\n 31\n 36\n\n# You can also declare certain variables as parameters\njulia> g = Polynomial(x^2+3y^2*x+a^2; parameters=[a])\na² + x² + 3xy²\n\njulia> evaluate(g, [2, 3], [4])\n74\njulia> gradient(g, [2, 3], [4])\n2-element Array{Int64,1}:\n 31\n 36\n\n# You can also differentiate with respect to the parameters\njulia> differentiate_parameters(g, [2, 3], [4])\n1-element Array{Int64,1}:\n 8We also support systems of polynomials.julia> @polyvar x y a b;\n\njulia> F = PolynomialSystem([x^2+y^2+1, x + y - 5])\nPolynomialSystem{2, 2, 0}:\n 1 + x² + y²\n\n -5 + x + y\n\njulia> evaluate(F, [2, 3])\n2-element Array{Int64,1}:\n 14\n  0\n\njulia> jacobian(F, [2, 3])\n2×2 Array{Int64,2}:\n 4  6\n 1  1\n\n# You can also declare parameters\njulia> G = PolynomialSystem([x^2+y^2+a^3, b*x + y - 5]; parameters=[a, b])\nPolynomialSystem{2, 2, 2}:\n a³ + x² + y²\n\n -5 + xb + y\n\njulia> evaluate(G, [2, 3], [-2, 4])\n2-element Array{Int64,1}:\n  5\n  6\n\njulia> jacobian(G, [2, 3], [-2, 4])\n2×2 Array{Int64,2}:\n  4  6\n  4  1\n\n# You can also differentiate with respect to the parameters\njulia> differentiate_parameters(G, [2, 3], [-2, 4])\n2×2 Array{Int64,2}:\n  12  0\n   0  2"
},

{
    "location": "reference/#",
    "page": "Reference",
    "title": "Reference",
    "category": "page",
    "text": ""
},

{
    "location": "reference/#Reference-1",
    "page": "Reference",
    "title": "Reference",
    "category": "section",
    "text": ""
},

{
    "location": "reference/#Polynomial-1",
    "page": "Reference",
    "title": "Polynomial",
    "category": "section",
    "text": "Polynomial\nSExponents\ncoefficients\nexponents\nnvariables(::Polynomial)\nnparameters(::Polynomial)\ncoefficienttype(::Polynomial)\nscale_coefficients!(::Polynomial, λ)\nevaluate(::Polynomial, x)\nevaluate(::Polynomial, x, p)\ngradient\ngradient!\nevaluate_and_gradient\nevaluate_and_gradient!\ndifferentiate_parameters(::Polynomial, x, p)\ndifferentiate_parameters!(u, ::Polynomial, x, p)"
},

{
    "location": "reference/#Systems-of-Polynomials-1",
    "page": "Reference",
    "title": "Systems of Polynomials",
    "category": "section",
    "text": "PolynomialSystem\nnpolynomials(::PolynomialSystem)\nnvariables(::PolynomialSystem)\nnparameters(::PolynomialSystem)\nforeach(f::Function, ::PolynomialSystem)\nscale_coefficients!(::PolynomialSystem, ::AbstractVector)\nevaluate(::PolynomialSystem, x)\nevaluate(::PolynomialSystem, ::AbstractVector, ::Any)\nevaluate!(u, ::PolynomialSystem, x)\nevaluate!(u, ::PolynomialSystem, x, p)\njacobian\njacobian!\nevaluate_and_jacobian\nevaluate_and_jacobian!\ndifferentiate_parameters(::PolynomialSystem, x, p)\ndifferentiate_parameters!(U, ::PolynomialSystem, x, p)"
},

]}
