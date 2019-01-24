var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#BernoulliFactory.jl-1",
    "page": "Readme",
    "title": "BernoulliFactory.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: Coverage Status) (Image: codecov.io)This package provides some Bernoulli factory algorithms, and a constrained, unbiased estimation algorithm.Given a function g such that g() returns a Bernoulli(p) variate, and a function f mapping [0,1] -> [0,1] a Bernoulli factory algorithm should use calls to g produce a Bernoulli(f(p)) variate. Not all functions f admit an algorithm (Keane & O\'Brien, 1994), and some algorithms require additional information."
},

{
    "location": "#Currently-implemented-1",
    "page": "Readme",
    "title": "Currently implemented",
    "category": "section",
    "text": "Command Description\nf(p) = exp(-λp), λ >= 0 expMinus(g, λ)\nf(p) = p⁠^a, a >= 0 power(g, a)\nf(p) = C*p / (1+C*p), C > 0 logistic(g, C)\nf(p) = C*p, ϵ ∈ (0, 1-C*p) linear(g, C, ϵ)\nf(p) = C/p, ϵ ∈ (0, p-C) inverse(g, C, ϵ)\nf(p1, p2) = C1*p1 / (C1*p1 + C2*p2) twocoin(g1, g2, C1, C2)"
},

{
    "location": "#Constrained,-unbiased-estimation-1",
    "page": "Readme",
    "title": "Constrained, unbiased estimation",
    "category": "section",
    "text": "Also implemented is a variant of signed estimation, signedEstimate(μ, φ, a, b, δ, c, n):Let X ~ μ and real-valued φ satisfya <= infx φ(x) < b < δ <= E[φ(X)] < supx φ(x) <= c,with known (a, b, δ, c). If simulation from μ and evaluation of φ is feasible, one can simulate W satisfyingE[W] = E[φ(X)]\nPr(b <= W <= max{2b-a,c}) = 1The random variable W is the product of two independent random variables, X and Z, and the positive integer parameter n specifies a number of averages to use to define X."
},

{
    "location": "#Algorithms-used-1",
    "page": "Readme",
    "title": "Algorithms used",
    "category": "section",
    "text": "expMinus is an obvious extension of the approach described in Wastlund (1999) for λ=1.power is from Mendo (2016).logistic is from Huber (2017).linear is from Huber (2016), and for a large range of parameter settings appears to use the least expected flips of all algorithms for this problem.inverse is described in Lee, Doucet & Łatuszyński (2014).twocoin is described in Gonçalves, Łatuszyński & Roberts (2017).signedEstimate is described in Appendix C of Lee, Doucet & Łatuszyński (2014)."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "All Bernoulli factory algorithms return a tuple (X, flips) where X is true or false and flips is the number of calls of g() by the algorithms.signedEstimate returns a tuple (X, flips, calls) where X is true or false, flips is the number of Bernoulli factory flips and calls is the number of calls of μ() by the algorithms. calls is typically much larger thatn flips"
},

{
    "location": "#References-1",
    "page": "Readme",
    "title": "References",
    "category": "section",
    "text": "Gonçalves, F.B., Łatuszyński, K.G. and Roberts, G.O., 2017. Exact Monte Carlo likelihood-based inference for jump-diffusion processes. arXiv:1707.00332Huber, M., 2016. Nearly optimal Bernoulli factories for linear functions. Combinatorics, Probability and Computing, 25(4), pp.577-591.Huber, M., 2017. Optimal linear Bernoulli factories for small mean problems. Methodology and Computing in Applied Probability, 19(2), pp.631-645.Keane, M.S. and O\'Brien, G.L., 1994. A Bernoulli factory. ACM Transactions on Modeling and Computer Simulation (TOMACS), 4(2), pp.213-219.Lee, A., Doucet, A. and Łatuszyński, K., 2014. Perfect simulation using atomic regeneration with application to Sequential Monte Carlo. arXiv:1407.5770Mendo, L., 2016. An asymptotically optimal Bernoulli factory for certain functions that can be expressed as power series. arXiv:1612.08923Wästlund, J., 1999. Functions arising by coin flipping. Technical Report, KTH, Stockholm."
},

{
    "location": "autodocs/#BernoulliFactory.expMinus-Union{Tuple{RNG}, Tuple{F}, Tuple{F,Float64}, Tuple{F,Float64,RNG}} where RNG<:Random.AbstractRNG where F<:Function",
    "page": "Docstrings",
    "title": "BernoulliFactory.expMinus",
    "category": "method",
    "text": "expMinus(f::F, λ::Float64, rng::RNG=GLOBAL_RNG) where {F<:Function, RNG<:AbstractRNG}\n\nInput:\n\nf() simulates Bernoulli(p) random variates (of type Bool)\nλ >= 0\n[rng] the RNG to used by the algorithm (does not affect f)\n\nOutput: X, flips\n\nX is a Bernoulli(exp(-λ*p)) variate\nflips is the number of calls of f()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BernoulliFactory.inverse-Union{Tuple{RNG}, Tuple{F}, Tuple{F,Float64,Float64}, Tuple{F,Float64,Float64,RNG}} where RNG<:Random.AbstractRNG where F<:Function",
    "page": "Docstrings",
    "title": "BernoulliFactory.inverse",
    "category": "method",
    "text": "inverse(f::F, C::Float64, ϵ::Float64, rng::RNG=GLOBAL_RNG) where {F<:Function, RNG<:AbstractRNG}\n\nInput:\n\nf() simulates Bernoulli(p) random variates (of type Bool)\nC ∈ [0,p)\nϵ ∈ (0,1) satisfying p > C + ⁠ϵ.\n[rng] the RNG to used by the algorithm (does not affect f)\n\nOutput: X, flips\n\nX is a Bernoulli(C/p) variate\nflips is the number of calls of f()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BernoulliFactory.linear-Union{Tuple{RNG}, Tuple{F}, Tuple{F,Float64,Float64}, Tuple{F,Float64,Float64,RNG}} where RNG<:Random.AbstractRNG where F<:Function",
    "page": "Docstrings",
    "title": "BernoulliFactory.linear",
    "category": "method",
    "text": "linear(f::F, C::Float64, ϵ::Float64, rng::RNG=GLOBAL_RNG) where {F<:Function, RNG<:AbstractRNG}\n\nInput:\n\nf() simulates Bernoulli(p) random variates (of type Bool)\nC >= 0\nϵ ∈ (0,1) satisfying C*p < 1-⁠ϵ.\n[rng] the RNG to used by the algorithm (does not affect f)\n\nOutput: X, flips\n\nX is a Bernoulli(C*p) variate\nflips is the number of calls of f()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BernoulliFactory.logistic-Union{Tuple{RNG}, Tuple{F}, Tuple{F,Float64}, Tuple{F,Float64,RNG}} where RNG<:Random.AbstractRNG where F<:Function",
    "page": "Docstrings",
    "title": "BernoulliFactory.logistic",
    "category": "method",
    "text": "logistic(f::F, C::Float64, rng::RNG=GLOBAL_RNG) where {F<:Function, RNG<:AbstractRNG}\n\nInput:\n\nf() simulates Bernoulli(p) random variates (of type Bool)\nC >= 0\n[rng] the RNG to used by the algorithm (does not affect f)\n\nOutput: X, flips\n\nX is a Bernoulli(Cp/(1.0+Cp)) variate\nflips is the number of calls of f()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BernoulliFactory.power-Union{Tuple{RNG}, Tuple{F}, Tuple{F,Float64}, Tuple{F,Float64,RNG}} where RNG<:Random.AbstractRNG where F<:Function",
    "page": "Docstrings",
    "title": "BernoulliFactory.power",
    "category": "method",
    "text": "power(f::F, a::Float64, rng::RNG=GLOBAL_RNG) where {F<:Function, RNG<:AbstractRNG}\n\nInput:\n\nf() simulates Bernoulli(p) random variates (of type Bool)\na >= 0\n[rng] the RNG to used by the algorithm (does not affect f)\n\nOutput: X, flips\n\nX is a Bernoulli(p^a) variate\nflips is the number of calls of f()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BernoulliFactory.signedEstimate-Union{Tuple{RNG}, Tuple{F2}, Tuple{F1}, Tuple{F1,F2,Float64,Float64,Float64,Float64,Int64}, Tuple{F1,F2,Float64,Float64,Float64,Float64,Int64,RNG}} where RNG<:Random.AbstractRNG where F2<:Function where F1<:Function",
    "page": "Docstrings",
    "title": "BernoulliFactory.signedEstimate",
    "category": "method",
    "text": "signedEstimate(μ::F1, φ::F2, a::Float64, b::Float64, δ::Float64, c::Float64, n::Int64, rng::RNG=GLOBAL_RNG) where {F1<:Function, F2<:Function, RNG<:AbstractRNG}\n\nInput:\n\nμ() simulates a random variate X\nφ(X) is real-valued\na,b,δ,c satisfy a <= infx φ(x) < b < δ <= μ(φ) < supx φ(x) <= c\nn specifies a number of X variables to average\n[rng] the RNG to used by the algorithm (does not affect f)\n\nOutput: Y, flips, calls\n\nY is almost surely valued in [b, max{2b-a,c}] with E[Y] = μ(φ)\nflips is the number of coin tosses by the Bernoulli Factory algorithm\ncalls is the number of calls of μ() in total\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BernoulliFactory.signedEstimate-Union{Tuple{RNG}, Tuple{F2}, Tuple{F1}, Tuple{F1,F2,Float64,Float64,Int64}, Tuple{F1,F2,Float64,Float64,Int64,RNG}} where RNG<:Random.AbstractRNG where F2<:Function where F1<:Function",
    "page": "Docstrings",
    "title": "BernoulliFactory.signedEstimate",
    "category": "method",
    "text": "signedEstimate(μ::F1, φ::F2, c::Float64, δ::Float64, n::Int64, rng::RNG=GLOBAL_RNG) where {F1<:Function, F2<:Function, RNG<:AbstractRNG} where {F1<:Function, F2<:Function, RNG<:AbstractRNG}\n\nInput:\n\nμ() simulates a random variate X\nφ(X) is real-valued\nc satisfies sup_x |φ(x)| <= c\nδ > 0 satisfies μ(φ) >= δ\nn specifies a number of X variables to average\n[rng] the RNG to used by the algorithm (does not affect f)\n\nOutput: Y, flips, calls\n\nY is almost surely valued in [0.0,c] with E[Y] = μ(φ)\nflips is the number of coin tosses by the Bernoulli Factory algorithm\ncalls is the number of calls of μ() in total\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BernoulliFactory.sqrt-Union{Tuple{F}, Tuple{RNG}, Tuple{F}, Tuple{F,RNG}} where RNG<:Random.AbstractRNG where F<:Function",
    "page": "Docstrings",
    "title": "BernoulliFactory.sqrt",
    "category": "method",
    "text": "sqrt(f::F, rng::RNG=GLOBAL_RNG) where {F<:Function, RNG<:AbstractRNG}\n\nInput:\n\nf() simulates Bernoulli(p) random variates (of type Bool)\n[rng] the RNG to used by the algorithm (does not affect f)\n\nOutput: X, flips\n\nX is a Bernoulli(sqrt(p)) variate\nflips is the number of calls of f()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BernoulliFactory.twocoin-Union{Tuple{RNG}, Tuple{F2}, Tuple{F1}, Tuple{F1,F2,Float64,Float64}, Tuple{F1,F2,Float64,Float64,RNG}} where RNG<:Random.AbstractRNG where F2<:Function where F1<:Function",
    "page": "Docstrings",
    "title": "BernoulliFactory.twocoin",
    "category": "method",
    "text": "twocoin(f1::F1, f2::F2, C1::Float64, C2::Float64, rng::RNG=GLOBAL_RNG) where {F1<:Function, F2<:Function, RNG<:AbstractRNG}\n\nInput:\n\nf1() simulates Bernoulli(p1) random variates (of type Bool)\nf2() simulates Bernoulli(p2) random variates (of type Bool)\nC1, C2 >= 0\n[rng] the RNG to used by the algorithm (does not affect f)\n\nOutput: X, flips\n\nX is a Bernoulli(C1p1/(C1p1+C2*p2)) variate\nflips is the number of calls of f()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [BernoulliFactory]\nOrder = [:type, :function]"
},

]}
