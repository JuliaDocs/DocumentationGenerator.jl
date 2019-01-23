var documenterSearchIndex = {"docs": [

{
    "location": "#GaussQuadrature.chebyshev",
    "page": "Home",
    "title": "GaussQuadrature.chebyshev",
    "category": "function",
    "text": "Convenience function with type T = Float64:\n\nx, w = chebyshev(n, kind=1, endpt=neither)\n\n\n\n\n\n"
},

{
    "location": "#GaussQuadrature.chebyshev-Union{Tuple{T}, Tuple{Type{T},Integer}, Tuple{Type{T},Integer,Integer}, Tuple{Type{T},Integer,Integer,EndPt}} where T<:AbstractFloat",
    "page": "Home",
    "title": "GaussQuadrature.chebyshev",
    "category": "method",
    "text": "x, w = chebyshev(T, n, kind=1, endpt=neither)\n\nReturns points x and weights w for the n-point Gauss-Chebyshev rule for the interval -1 < x < 1 with weight function\n\nw(x) = 1 / sqrt(1-x²)   if kind=1\nw(x) = sqrt(1-x²)       if kind=2.\n\nUse endpt=left, right or both for the left Radau, right Radau or Lobatto rules, respectively.\n\n\n\n\n\n"
},

{
    "location": "#GaussQuadrature.custom_gauss_rule-Union{Tuple{T}, Tuple{T,T,Array{T,1},Array{T,1},EndPt}, Tuple{T,T,Array{T,1},Array{T,1},EndPt,Integer}} where T<:AbstractFloat",
    "page": "Home",
    "title": "GaussQuadrature.custom_gauss_rule",
    "category": "method",
    "text": "x, w = custom_gauss_rule(lo, hi, a, b, endpt, maxits=maxiterations[T])\n\nGenerates the points x and weights w for a Gauss rule with weight function w(x) on the interval lo < x < hi.\n\nThe arrays a and b hold the coefficients (as given, for instance, by legendre_coeff) in the three-term recurrence relation for the monic orthogonal polynomials p(0,x), p(1,x), p(2,x), ... , that is,\n\np(k, x) = (x-a[k]) p(k-1, x) - b[k]² p(k-2, x),    k ≥ 1,\n\nwhere p(0, x) = 1 and, by convention, p(-1, x) = 0 with\n\n          hi\nb[1]^2 = ∫  w(x) dx.\n         lo\n\nThus, p(k, x) = xᵏ + lower degree terms and\n\n hi\n∫  p(j, x) p(k, x) w(x) dx = 0 if j ≠ k.\nlo\n\n\n\n\n\n"
},

{
    "location": "#GaussQuadrature.hermite-Tuple{Any}",
    "page": "Home",
    "title": "GaussQuadrature.hermite",
    "category": "method",
    "text": "Convenience function with type T = Float64:\n\nx, w = hermite(n)\n\n\n\n\n\n"
},

{
    "location": "#GaussQuadrature.hermite-Union{Tuple{T}, Tuple{Type{T},Integer}} where T<:AbstractFloat",
    "page": "Home",
    "title": "GaussQuadrature.hermite",
    "category": "method",
    "text": "x, w = hermite(T, n)\n\nReturns points x and weights w for the n-point Gauss-Laguerre rule for the interval -∞ < x < ∞ with weight function\n\nw(x) = exp(-x²).\n\n\n\n\n\n"
},

{
    "location": "#GaussQuadrature.jacobi-Union{Tuple{T}, Tuple{Integer,T,T}, Tuple{Integer,T,T,EndPt}} where T<:AbstractFloat",
    "page": "Home",
    "title": "GaussQuadrature.jacobi",
    "category": "method",
    "text": "x, w = jacobi(n, α, β, endpt=neither)\n\nReturns points x and weights w for the n-point Gauss-Jacobi rule for the interval -1 < x < 1 with weight function\n\nw(x) = (1-x)ᵅ (1+x)ᵝ.\n\nUse endpt=left, right or both for the left Radau, right Radau or Lobatto rules, respectively.\n\n\n\n\n\n"
},

{
    "location": "#GaussQuadrature.laguerre-Union{Tuple{T}, Tuple{Integer,T}, Tuple{Integer,T,EndPt}} where T<:AbstractFloat",
    "page": "Home",
    "title": "GaussQuadrature.laguerre",
    "category": "method",
    "text": "x, w = laguerre(n, α, endpt=neither)\n\nReturns points x and weights w for the n-point Gauss-Laguerre rule for the interval 0 < x < ∞ with weight function\n\nw(x) = xᵅ exp(-x),   α > -1.\n\nUse endpt=left for the left Radau rule.\n\n\n\n\n\n"
},

{
    "location": "#GaussQuadrature.legendre",
    "page": "Home",
    "title": "GaussQuadrature.legendre",
    "category": "function",
    "text": "Convenience function with type T = Float64:\n\nx, w = legendre(n, endpt=neither)\n\n\n\n\n\n"
},

{
    "location": "#GaussQuadrature.legendre-Union{Tuple{T}, Tuple{Type{T},Integer}, Tuple{Type{T},Integer,EndPt}} where T<:AbstractFloat",
    "page": "Home",
    "title": "GaussQuadrature.legendre",
    "category": "method",
    "text": "x, w = legendre(T, n, endpt=neither)\n\nReturns points x and weights w for the n-point Gauss-Legendre rule for the interval -1 < x < 1 with weight function w(x) = 1.\n\nUse endpt=left, right or both for the left Radau, right Radau or Lobatto rules, respectively.\n\n\n\n\n\n"
},

{
    "location": "#GaussQuadrature.logweight",
    "page": "Home",
    "title": "GaussQuadrature.logweight",
    "category": "function",
    "text": "Convenience function with type T = Float64:\n\nx, w = logweight(n, r=0, endpt=neither)\n\n\n\n\n\n"
},

{
    "location": "#GaussQuadrature.logweight-Union{Tuple{T}, Tuple{Integer,T}, Tuple{Integer,T,EndPt}} where T<:AbstractFloat",
    "page": "Home",
    "title": "GaussQuadrature.logweight",
    "category": "method",
    "text": "More general method works when w(x) = x^ρ log(1/x) for real ρ > -1:\n\nx, w = logweight(n, ρ, endpt=neither)\n\n\n\n\n\n"
},

{
    "location": "#GaussQuadrature.logweight-Union{Tuple{T}, Tuple{Type{T},Integer,Integer}, Tuple{Type{T},Integer,Integer,EndPt}} where T<:AbstractFloat",
    "page": "Home",
    "title": "GaussQuadrature.logweight",
    "category": "method",
    "text": "x, w = logweight(T, n, r=0, endpt=neither)\n\nReturns points x and weights w for the n-point Gauss rule on the interval 0 < x < 1 with weight function\n\nw(x) = xʳ log(1/x),    r ≥ 0.\n\n\n\n\n\n"
},

{
    "location": "#GaussQuadrature.modified_chebyshev-Union{Tuple{T}, Tuple{Array{T,1},Array{T,1},Array{T,1}}} where T<:AbstractFloat",
    "page": "Home",
    "title": "GaussQuadrature.modified_chebyshev",
    "category": "method",
    "text": "α, β, σ = modified_chebyshev(a, b, ν)\n\nImplements the modified Chebyshev algorithm described in doc/notes.tex and used in logweight_coefs.\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [GaussQuadrature]\nOrder = [:type, :function]"
},

]}
