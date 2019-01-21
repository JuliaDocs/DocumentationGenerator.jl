var documenterSearchIndex = {"docs": [

{
    "location": "#PolynomialBases.ClenshawCurtis",
    "page": "Home",
    "title": "PolynomialBases.ClenshawCurtis",
    "category": "type",
    "text": "ClenshawCurtis{T}\n\nThe nodal basis corresponding to the Clenshaw Curtis quadrature in [-1,1] with scalar type T.\n\n\n\n\n\n"
},

{
    "location": "#PolynomialBases.ClenshawCurtis",
    "page": "Home",
    "title": "PolynomialBases.ClenshawCurtis",
    "category": "type",
    "text": "ClenshawCurtis(p::Int, T=Float64)\n\nGenerate the ClenshawCurtis basis of degree p with scalar type T.\n\n\n\n\n\n"
},

{
    "location": "#PolynomialBases.ClosedNewtonCotes",
    "page": "Home",
    "title": "PolynomialBases.ClosedNewtonCotes",
    "category": "type",
    "text": "ClosedNewtonCotes{T}\n\nThe nodal basis corresponding to the closed Newton Cotes quadrature in [-1,1] with scalar type T.\n\n\n\n\n\n"
},

{
    "location": "#PolynomialBases.ClosedNewtonCotes",
    "page": "Home",
    "title": "PolynomialBases.ClosedNewtonCotes",
    "category": "type",
    "text": "ClosedNewtonCotes(p::Int, T=Float64)\n\nGenerate the ClosedNewtonCotes basis of degree p with scalar type T.\n\n\n\n\n\n"
},

{
    "location": "#PolynomialBases.GaussJacobi",
    "page": "Home",
    "title": "PolynomialBases.GaussJacobi",
    "category": "type",
    "text": "GaussJacobi{T<:Real}\n\nThe nodal basis corresponding to Jacobi Gauss quadrature in [-1,1] with parameters α, β and scalar type T.\n\n\n\n\n\n"
},

{
    "location": "#PolynomialBases.GaussJacobi",
    "page": "Home",
    "title": "PolynomialBases.GaussJacobi",
    "category": "type",
    "text": "GaussJacobi(p::Int, α, β, T=Float64)\n\nGenerate the JacobiLegendre basis of degree p with parameters α, β and scalar type T.\n\n\n\n\n\n"
},

{
    "location": "#PolynomialBases.GaussLegendre",
    "page": "Home",
    "title": "PolynomialBases.GaussLegendre",
    "category": "type",
    "text": "GaussLegendre{T}\n\nThe nodal basis corresponding to Legendre Gauss quadrature in [-1,1] with scalar type T.\n\n\n\n\n\n"
},

{
    "location": "#PolynomialBases.GaussLegendre",
    "page": "Home",
    "title": "PolynomialBases.GaussLegendre",
    "category": "type",
    "text": "GaussLegendre(p::Int, T=Float64)\n\nGenerate the GaussLegendre basis of degree p with scalar type T.\n\n\n\n\n\n"
},

{
    "location": "#PolynomialBases.LobattoLegendre",
    "page": "Home",
    "title": "PolynomialBases.LobattoLegendre",
    "category": "type",
    "text": "LobattoLegendre{T}\n\nThe nodal basis corresponding to Legendre Gauss Lobatto quadrature in [-1,1] with scalar type T.\n\n\n\n\n\n"
},

{
    "location": "#PolynomialBases.LobattoLegendre",
    "page": "Home",
    "title": "PolynomialBases.LobattoLegendre",
    "category": "type",
    "text": "LobattoLegendre(p::Int, T=Float64)\n\nGenerate the LobattoLegendre basis of degree p with scalar type T.\n\n\n\n\n\n"
},

{
    "location": "#PolynomialBases.change_basis!-Union{Tuple{Domain}, Tuple{Any,NodalBasis{Domain},Any,NodalBasis{Domain}}} where Domain<:PolynomialBases.AbstractDomain",
    "page": "Home",
    "title": "PolynomialBases.change_basis!",
    "category": "method",
    "text": "change_basis!(ret, dest_basis::NodalBasis{Domain},\n              values, src_basis::NodalBasis{Domain}) where {Domain<:AbstractDomain}\n\nPerform the change of basis for the coefficients values from src_basis to dest_basis and store the resulting coefficients in ret.\n\n\n\n\n\n"
},

{
    "location": "#PolynomialBases.change_basis-Union{Tuple{Domain}, Tuple{NodalBasis{Domain},Any,NodalBasis{Domain}}} where Domain<:PolynomialBases.AbstractDomain",
    "page": "Home",
    "title": "PolynomialBases.change_basis",
    "category": "method",
    "text": "function change_basis(dest_basis::NodalBasis{Domain},\n                      values, src_basis::NodalBasis{Domain}) where {Domain<:AbstractDomain}\n\nPerform the change of basis for the coefficients values from src_basis to dest_basis.\n\n\n\n\n\n"
},

{
    "location": "#PolynomialBases.compute_coefficients!-Tuple{AbstractArray{T,1} where T,Any,NodalBasis{PolynomialBases.Line}}",
    "page": "Home",
    "title": "PolynomialBases.compute_coefficients!",
    "category": "method",
    "text": "compute_coefficients!(uval::AbstractVector, u, basis::NodalBasis{Line})\n\nCompute the nodal values of the function u at the nodes corresponding to the nodal basis basis and store the result in uval.\n\n\n\n\n\n"
},

{
    "location": "#PolynomialBases.compute_coefficients-Tuple{Any,NodalBasis{PolynomialBases.Line}}",
    "page": "Home",
    "title": "PolynomialBases.compute_coefficients",
    "category": "method",
    "text": "compute_coefficients(u, basis::NodalBasis{Line})\n\nCompute the nodal values of the function u at the nodes corresponding to the nodal basis basis.\n\n\n\n\n\n"
},

{
    "location": "#PolynomialBases.derivative_at-Tuple{Real,Any,Any,Any}",
    "page": "Home",
    "title": "PolynomialBases.derivative_at",
    "category": "method",
    "text": "derivative_at(x::Real, values, nodes, baryweights)\n\nCompute the derivative of the function represented by values on the nodes at x using the corresponding barycentric weights baryweights. [Kopriva, Implementing Spectral Methods for PDEs, Algorithm 36].\n\n\n\n\n\n"
},

{
    "location": "#PolynomialBases.derivative_matrix-Tuple{Any,Any}",
    "page": "Home",
    "title": "PolynomialBases.derivative_matrix",
    "category": "method",
    "text": "derivative_matrix(nodes, baryweights)\n\nCompute the derivative matrix corresponding to nodes and baryweights. [Kopriva, Implementing Spectral Methods for PDEs, Algorithm 37].\n\n\n\n\n\n"
},

{
    "location": "#PolynomialBases.evaluate_coefficients",
    "page": "Home",
    "title": "PolynomialBases.evaluate_coefficients",
    "category": "function",
    "text": "evaluate_coefficients(u, basis::NodalBasis{Line}, npoints=2*length(basis.nodes))\n\nEvaluate the coefficients u of the nodal basis basis at npoints equally spaced nodes. Returns xplot, uplot, where xplot contains the equally spaced nodes and uplot the corresponding values of u.\n\n\n\n\n\n"
},

{
    "location": "#PolynomialBases.evaluate_coefficients!-Tuple{Any,Any,Any,NodalBasis{PolynomialBases.Line}}",
    "page": "Home",
    "title": "PolynomialBases.evaluate_coefficients!",
    "category": "method",
    "text": "evaluate_coefficients!(xplot, uplot, u, basis::NodalBasis{Line})\n\nEvaluate the coefficients u of the nodal basis basis at npoints equally spaced nodes and store the result in xplot, uplot. Returns xplot, uplot, where xplot contains the equally spaced nodes and uplot the corresponding values of u.\n\n\n\n\n\n"
},

{
    "location": "#PolynomialBases.gegenbauer-Tuple{Any,Integer,Any}",
    "page": "Home",
    "title": "PolynomialBases.gegenbauer",
    "category": "method",
    "text": "gegenbauer(x, p::Integer)\n\nEvaluate the Gegenbauer polynomial with parameter α of degree p at x using the three term recursion.\n\n\n\n\n\n"
},

{
    "location": "#PolynomialBases.hahn-Tuple{Any,Integer,Any,Any,Any}",
    "page": "Home",
    "title": "PolynomialBases.hahn",
    "category": "method",
    "text": "hahn(x, p::Integer, α, β, N::Integer)\n\nEvaluate the Hahn polynomial with parameters α, β, N of degree p at x using the three term recursion [Öffner, Zweidimensionale klassische und diskrete orthogonale Polynome, Chapter 5].\n\n\n\n\n\n"
},

{
    "location": "#PolynomialBases.hermite-Tuple{Any,Integer}",
    "page": "Home",
    "title": "PolynomialBases.hermite",
    "category": "method",
    "text": "hermite(x, p::Integer)\n\nEvaluate the Hermite polynomial of degree p at x using the three term recursion.\n\n\n\n\n\n"
},

{
    "location": "#PolynomialBases.integrate-Tuple{Any,Any,AbstractArray{T,1} where T}",
    "page": "Home",
    "title": "PolynomialBases.integrate",
    "category": "method",
    "text": "integrate(func, u, weights)\n\nMap the function func to the coefficients u and integrate with respect to the quadrature rule given by weights.\n\n\n\n\n\n"
},

{
    "location": "#PolynomialBases.interpolate-Tuple{Real,Any,Any,Any}",
    "page": "Home",
    "title": "PolynomialBases.interpolate",
    "category": "method",
    "text": "interpolate(x::Real, nodes, values, baryweights)\n\nInterpolate the function represented by values on the nodes using the corresponding barycentric weights baryweights. [Kopriva, Implementing Spectral Methods for PDEs, Algorithm 31].\n\n\n\n\n\n"
},

{
    "location": "#PolynomialBases.interpolation_matrix-Tuple{Any,Any,Any}",
    "page": "Home",
    "title": "PolynomialBases.interpolation_matrix",
    "category": "method",
    "text": "interpolation_matrix(destination, source, baryweights)\n\nCompute the matrix performing interpolation from src to dest, where baryweights are the barycentric weights corresponding to src. [Kopriva, Implementing Spectral Methods for PDEs, Algorithm 32].\n\n\n\n\n\n"
},

{
    "location": "#PolynomialBases.jacobi-Tuple{Any,Integer,Any,Any}",
    "page": "Home",
    "title": "PolynomialBases.jacobi",
    "category": "method",
    "text": "jacobi(x, p::Integer, α, β)\n\nEvaluate the Legendre polynomial with parameters α, β of degree p at x using the three term recursion [Karniadakis and Sherwin, Spectral/hp Element Methods for CFD, Appendix A].\n\n\n\n\n\n"
},

{
    "location": "#PolynomialBases.jacobi_vandermonde-Tuple{AbstractArray{T,1} where T,Any,Any}",
    "page": "Home",
    "title": "PolynomialBases.jacobi_vandermonde",
    "category": "method",
    "text": "jacobi_vandermonde(nodes, α, β)\n\nComputes the Vandermonde matrix with respect to the Jacobi polynomials with parameters α, β and the nodal basis on nodes. The Vandermonde matrix V is the transformation matrix from the modal Jacobi basis to the nodal Lagrange basis associated with nodes.\n\n\n\n\n\n"
},

{
    "location": "#PolynomialBases.laguerre-Tuple{Any,Integer,Any}",
    "page": "Home",
    "title": "PolynomialBases.laguerre",
    "category": "method",
    "text": "laguerre(x, p::Integer, α)\n\nEvaluate the generalised Laguerre polynomial with parameter α of degree p at x using the three term recursion.\n\n\n\n\n\n"
},

{
    "location": "#PolynomialBases.laguerre-Tuple{Any,Integer}",
    "page": "Home",
    "title": "PolynomialBases.laguerre",
    "category": "method",
    "text": "laguerre(x, p::Integer)\n\nEvaluate the Laguerre polynomial of degree p at x using the three term recursion.\n\n\n\n\n\n"
},

{
    "location": "#PolynomialBases.legendre-Tuple{Any,Integer}",
    "page": "Home",
    "title": "PolynomialBases.legendre",
    "category": "method",
    "text": "legendre(x, p::Integer)\n\nEvaluate the Legendre polynomial of degree p at x using the three term recursion [Kopriva, Implementing Spectral Methods for PDEs, Algorithm 20].\n\n\n\n\n\n"
},

{
    "location": "#PolynomialBases.legendre_D",
    "page": "Home",
    "title": "PolynomialBases.legendre_D",
    "category": "function",
    "text": "legendre_D(p, T=Float64)\n\nComputes the derivative matrix in the modal Legendre basis up to degree p using the scalar type T.\n\n\n\n\n\n"
},

{
    "location": "#PolynomialBases.legendre_M",
    "page": "Home",
    "title": "PolynomialBases.legendre_M",
    "category": "function",
    "text": "legendre_M(p, T=Float64)\n\nComputes the diagonal mass matrix in the modal Legendre basis up to degree p using the scalar type T.\n\n\n\n\n\n"
},

{
    "location": "#PolynomialBases.legendre_vandermonde-Tuple{AbstractArray{T,1} where T}",
    "page": "Home",
    "title": "PolynomialBases.legendre_vandermonde",
    "category": "method",
    "text": "legendre_vandermonde(nodes)\n\nComputes the Vandermonde matrix with respect to the Legendre polynomials and the nodal basis on nodes. The Vandermonde matrix V is the transformation matrix from the modal Legendre basis to the nodal Lagrange basis associated with nodes.\n\n\n\n\n\n"
},

{
    "location": "#PolynomialBases.map_from_canonical!-Tuple{Any,Any,Any,Any,NodalBasis{PolynomialBases.Line}}",
    "page": "Home",
    "title": "PolynomialBases.map_from_canonical!",
    "category": "method",
    "text": "map_from_canonical!(x, ξ, xmin, xmax, basis::NodalBasis{Line})\n\nMap the given canonical coordinate ξ in the interval [-1, 1] to the corresponding coordinate x in the interval [xmin, xmax], updating x.\n\n\n\n\n\n"
},

{
    "location": "#PolynomialBases.map_from_canonical-Tuple{Any,Any,Any,NodalBasis{PolynomialBases.Line}}",
    "page": "Home",
    "title": "PolynomialBases.map_from_canonical",
    "category": "method",
    "text": "map_from_canonical(ξ, xmin, xmax, basis::NodalBasis{Line})\n\nMap the given canonical coordinate ξ in the interval [-1, 1] to the corresponding coordinate x in the interval [xmin, xmax].\n\n\n\n\n\n"
},

{
    "location": "#PolynomialBases.map_to_canonical!-Tuple{Any,Any,Any,Any,NodalBasis{PolynomialBases.Line}}",
    "page": "Home",
    "title": "PolynomialBases.map_to_canonical!",
    "category": "method",
    "text": "map_to_canonical!(ξ, x, xmin, xmax, basis::NodalBasis{Line})\n\nMap the given coordinate x in the interval [xmin, xmax] to the corresponding canonical coordinate ξ in the interval [-1, 1], updating ξ.\n\n\n\n\n\n"
},

{
    "location": "#PolynomialBases.map_to_canonical-Tuple{Any,Any,Any,NodalBasis{PolynomialBases.Line}}",
    "page": "Home",
    "title": "PolynomialBases.map_to_canonical",
    "category": "method",
    "text": "map_to_canonical(x, xmin, xmax, basis::NodalBasis{Line})\n\nMap the given coordinate x in the interval [xmin, xmax] to the corresponding canonical coordinate ξ in the interval [-1, 1].\n\n\n\n\n\n"
},

{
    "location": "#PolynomialBases.utility_matrices-Tuple{NodalBasis{PolynomialBases.Line}}",
    "page": "Home",
    "title": "PolynomialBases.utility_matrices",
    "category": "method",
    "text": "utility_matrices(basis::NodalBasis{Line})\n\nReturn the matrices\n\nD, derivative matrix\nM, mass matrix\nR, restriction matrix (interpolation to the boundaries)\nB, boundary normal matrix\nMinvRtB = M \\ R\' * B\n\nused in the formulation of flux reconstruction / correction procedure via reconstruction using summation-by-parts operators, cf. Ranocha, Öffner, Sonar (2016) Summation-by-parts operators for correction procedure via reconstruction, Journal of Computational Physics 311, 299-328.\n\n\n\n\n\n"
},

{
    "location": "#PolynomialBases.barycentric_weights-Tuple{AbstractArray{T,1} where T}",
    "page": "Home",
    "title": "PolynomialBases.barycentric_weights",
    "category": "method",
    "text": "barycentric_weights{T<:Real}(x::AbstractVector{T})\n\nCompute the barycentric weights corresponding to the nodes x. [Kopriva, Implementing Spectral Methods for PDEs, Algorithm 30].\n\n\n\n\n\n"
},

{
    "location": "#PolynomialBases.degree-Tuple{NodalBasis{PolynomialBases.Line}}",
    "page": "Home",
    "title": "PolynomialBases.degree",
    "category": "method",
    "text": "degree(basis::NodalBasis{Line})\n\nReturn the polynomial degree used by basis.\n\n\n\n\n\n"
},

{
    "location": "#PolynomialBases.gauss_jacobi_nodes_and_weights",
    "page": "Home",
    "title": "PolynomialBases.gauss_jacobi_nodes_and_weights",
    "category": "function",
    "text": "gauss_jacobi_nodes_and_weights(p, α, β, T=Float64::Type, tol=4*eps(T), maxit=100)\n\nCompute the Gauss-Jacobi nodes and weights for polynomials of degree p with parameters α, β using the scalar type T, tolerance tol and maximal number of Newton iterations maxit [Karniadakis and Sherwin, Spectral/hp Element Methods for CFD, Appendix B].\n\n\n\n\n\n"
},

{
    "location": "#PolynomialBases.gauss_legendre_nodes_and_weights",
    "page": "Home",
    "title": "PolynomialBases.gauss_legendre_nodes_and_weights",
    "category": "function",
    "text": "gauss_legendre_nodes_and_weights(p, T=Float64::Type, tol=4*eps(T), maxit=100)\n\nCompute the Gauss-Legendre nodes and weights for polynomials of degree p using the scalar type T, tolerance tol and maximal number of Newton iterations maxit [Kopriva, Implementing Spectral Methods for PDEs, Algorithm 23].\n\n\n\n\n\n"
},

{
    "location": "#PolynomialBases.jacobi_and_derivative-Tuple{Any,Integer,Any,Any}",
    "page": "Home",
    "title": "PolynomialBases.jacobi_and_derivative",
    "category": "method",
    "text": "jacobi_and_derivative(x, p::Integer, α, β)\n\nEvaluate the Jacobi polynomial with parameters α, β of degree p and its derivative at x using the three term recursion [Karniadakis and Sherwin, Spectral/hp Element Methods for CFD, Appendix A].\n\n\n\n\n\n"
},

{
    "location": "#PolynomialBases.legendre_and_derivative-Tuple{Any,Integer}",
    "page": "Home",
    "title": "PolynomialBases.legendre_and_derivative",
    "category": "method",
    "text": "legendre_and_derivative(x, p::Integer)\n\nEvaluate the Legendre polynomial of degree p and its derivative at x using the three term recursion [Kopriva, Implementing Spectral Methods for PDEs, Algorithm 22].\n\n\n\n\n\n"
},

{
    "location": "#PolynomialBases.lobatto_legendre_nodes_and_weights",
    "page": "Home",
    "title": "PolynomialBases.lobatto_legendre_nodes_and_weights",
    "category": "function",
    "text": "lobatto_legendre_nodes_and_weights(p, T=Float64::Type, tol=4*eps(T), maxit=100)\n\nCompute the Lobatto-Legendre nodes and weights for polynomials of degree p using the scalar type T, tolerance tol and maximal number of Newton iterations maxit [Kopriva, Implementing Spectral Methods for PDEs, Algorithm 25].\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [PolynomialBases]\nOrder = [:type, :function]"
},

]}
