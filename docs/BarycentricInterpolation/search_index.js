var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#BarycentricInterpolation-1",
    "page": "Readme",
    "title": "BarycentricInterpolation",
    "category": "section",
    "text": "(Image: Lifecycle) (Image: Build Status)This Julia package implements the Barycentric formula for polynomial interpolation on equispaced points and Chebyshev points of the first and second kind. The formulae used are taken from the paper of Berrut and Trefethen, SIAM Review, 2004.This is not a general purpose interpolation package but is intended to be used as a base for other numerical methods, such as numerical collocation. For a general use interpolation package see Interpolations.jl"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "There are various types of polynomials defined based on the locations of their  nodes (zeros).Equispaced (Equispaced{N}()) — a common choice when data is equispaced but suffers from Runge phenomenon for high degree polynomials. When used as part of a collocation scheme with Gauss-Legendre collocation points, they provide the benefit of super-convergence. By default the nodes are equispaced over [-1, +1].\nChebyshev type 1 (Chebyshev1{N}()) — nodes distributed according to cos(π(2j + 1)/(2N + 2)) where N is the degree of the polynomial, for j in [0, N].\nChebyshev type 2 (Chebyshev2{N}()) — nodes distributed according to cos(πj/N) where N is the degree of the polynomial, for j in [0, N].\nArbitrary nodes (ArbitraryPolynomial(nodes)) — nodes distributed as  specified.By default, each of the polynomials are defined over the range [-1, +1]. This can be modified by specifying a start and stop for the range, e.g., Equispaced{10}(0, 1) will generate a 10th order polynomial with equispaced nodes over the range [0, 1].Polynomials with nodes asymptotically clustered towards the end points (such as Chebyshev) are optimal for avoiding the Runge phenomenon (see Trefethen, Spectral Methods in MATLAB, SIAM 2000).Once a polynomial has been defined it can be used with the nodes(poly) and weights(poly) functions to return the locations of the nodes and the values of the Barycentric weights respectively. To interpolate a set of y values (defined at the nodes) use interpolate(poly, y, x_new); x_new can be either a scalar or a vector. If x_new is omitted, the interpolate function returns a function y(x) which can be used to evaluate the interpolant at any point.To obtain the interpolant as a linear combination of the y values, use interpolation_matrix(poly, x); this returns a matrix which can be multiplied by a vector of y values to calculate the interpolated value.Finally, the derivative of the polynomial at the nodes can be obtained using differentiation_matrix(poly). Similar to interpolation_matrix, this returns a matrix which can be multiplied by a vector of y values to calculate the derivative of y."
},

{
    "location": "#Simple-example-1",
    "page": "Readme",
    "title": "Simple example",
    "category": "section",
    "text": "using BarycentricInterpolation\n\np = Chebyshev2{20}()           # create a Chebyshev type 2 polynomial of order 20\nx = nodes(p)                   # get the nodes\ny = sinpi.(x)                  # generate y values at the nodes\nx_new = rand()*2 -1            # a random number in [-1, +1]\nprintln(interpolate(p, y, x_new) ≈ sinpi(x_new))       # hopefully true!\nD = differentiation_matrix(p)  # get the differentiation matrix\nprintln(interpolate(p, D*y, x_new) ≈ pi*cospi(x_new))  # hopefully true!"
},

{
    "location": "#More-complicated-example-1",
    "page": "Readme",
    "title": "More complicated example",
    "category": "section",
    "text": "For an example with Barycentric.jl applied to the simulation of a PDE (in combination with DifferentialEquations.jl) see [http://www.cityinthesky.co.uk/2018/12/barycentric-jl/]."
},

{
    "location": "#License-1",
    "page": "Readme",
    "title": "License",
    "category": "section",
    "text": "Written by David A.W. Barton (david.barton@bristol.ac.uk) 2016-2018 and released under the MIT license https://opensource.org/licenses/MIT."
},

{
    "location": "autodocs/#BarycentricInterpolation.degree-Union{Tuple{AbstractPolynomial{N,T} where T<:Number}, Tuple{N}} where N",
    "page": "Docstrings",
    "title": "BarycentricInterpolation.degree",
    "category": "method",
    "text": "degree(poly)\n\nReturn the degree of the polynomial specified.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BarycentricInterpolation.differentiation_matrix-Union{Tuple{AbstractPolynomial{N,T}}, Tuple{T}, Tuple{N}} where T where N",
    "page": "Docstrings",
    "title": "BarycentricInterpolation.differentiation_matrix",
    "category": "method",
    "text": "differentiation_matrix(poly::AbstractPolynomial)\n\nReturn the differentiation matrix at the nodes of the polynomial specified.\n\nP = Chebyshev2{5}()\nD = differentiation_matrix(P)\n\nNow dy/dx ≈ D*y at the nodes of the polynomial.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BarycentricInterpolation.interpolate-Union{Tuple{T}, Tuple{N}, Tuple{AbstractPolynomial{N,T},AbstractArray{#s35,1} where #s35<:Number,Number}} where T where N",
    "page": "Docstrings",
    "title": "BarycentricInterpolation.interpolate",
    "category": "method",
    "text": "interpolate(poly::AbstractPolynomial, y₀, [x])\n\nReturn the value of y(x) given that y(nodes(poly)) = y₀. If the value of x is not provided, return a function y(x) that evaluates the interpolant at any x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BarycentricInterpolation.interpolation_matrix-Union{Tuple{T}, Tuple{N}, Tuple{AbstractPolynomial{N,T},Union{Number, AbstractArray{T,1} where T}}} where T where N",
    "page": "Docstrings",
    "title": "BarycentricInterpolation.interpolation_matrix",
    "category": "method",
    "text": "interpolation_matrix(poly::AbstractPolynomial, x)\n\nReturn the interpolation matrix from the nodes of poly to the point(s) x. For example :\n\nP = Chebyshev2{5}()\nx = range(-1, stop=1, length=10)\nM = interpolation_matrix(P, x)\n\nNow y(x) ≈ M*y₀ given that `y(nodes(poly)) = y₀.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BarycentricInterpolation.nodes",
    "page": "Docstrings",
    "title": "BarycentricInterpolation.nodes",
    "category": "function",
    "text": "nodes(poly)\n\nReturn the nodes for the specified orthogonal polynomials.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BarycentricInterpolation.weights",
    "page": "Docstrings",
    "title": "BarycentricInterpolation.weights",
    "category": "function",
    "text": "weights(poly)\n\nReturn the Barycentric weights for the specified orthogonal polynomials.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [BarycentricInterpolation]\nOrder = [:type, :function]"
},

]}
