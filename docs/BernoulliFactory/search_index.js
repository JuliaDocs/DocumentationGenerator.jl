var documenterSearchIndex = {"docs": [

{
    "location": "#BernoulliFactory.expMinus-Union{Tuple{RNG}, Tuple{F}, Tuple{F,Float64}, Tuple{F,Float64,RNG}} where RNG<:Random.AbstractRNG where F<:Function",
    "page": "Home",
    "title": "BernoulliFactory.expMinus",
    "category": "method",
    "text": "expMinus(f::F, λ::Float64, rng::RNG=GLOBAL_RNG) where {F<:Function, RNG<:AbstractRNG}\n\nInput:\n\nf() simulates Bernoulli(p) random variates (of type Bool)\nλ >= 0\n[rng] the RNG to used by the algorithm (does not affect f)\n\nOutput: X, flips\n\nX is a Bernoulli(exp(-λ*p)) variate\nflips is the number of calls of f()\n\n\n\n\n\n"
},

{
    "location": "#BernoulliFactory.inverse-Union{Tuple{RNG}, Tuple{F}, Tuple{F,Float64,Float64}, Tuple{F,Float64,Float64,RNG}} where RNG<:Random.AbstractRNG where F<:Function",
    "page": "Home",
    "title": "BernoulliFactory.inverse",
    "category": "method",
    "text": "inverse(f::F, C::Float64, ϵ::Float64, rng::RNG=GLOBAL_RNG) where {F<:Function, RNG<:AbstractRNG}\n\nInput:\n\nf() simulates Bernoulli(p) random variates (of type Bool)\nC ∈ [0,p)\nϵ ∈ (0,1) satisfying p > C + ⁠ϵ.\n[rng] the RNG to used by the algorithm (does not affect f)\n\nOutput: X, flips\n\nX is a Bernoulli(C/p) variate\nflips is the number of calls of f()\n\n\n\n\n\n"
},

{
    "location": "#BernoulliFactory.linear-Union{Tuple{RNG}, Tuple{F}, Tuple{F,Float64,Float64}, Tuple{F,Float64,Float64,RNG}} where RNG<:Random.AbstractRNG where F<:Function",
    "page": "Home",
    "title": "BernoulliFactory.linear",
    "category": "method",
    "text": "linear(f::F, C::Float64, ϵ::Float64, rng::RNG=GLOBAL_RNG) where {F<:Function, RNG<:AbstractRNG}\n\nInput:\n\nf() simulates Bernoulli(p) random variates (of type Bool)\nC >= 0\nϵ ∈ (0,1) satisfying C*p < 1-⁠ϵ.\n[rng] the RNG to used by the algorithm (does not affect f)\n\nOutput: X, flips\n\nX is a Bernoulli(C*p) variate\nflips is the number of calls of f()\n\n\n\n\n\n"
},

{
    "location": "#BernoulliFactory.logistic-Union{Tuple{RNG}, Tuple{F}, Tuple{F,Float64}, Tuple{F,Float64,RNG}} where RNG<:Random.AbstractRNG where F<:Function",
    "page": "Home",
    "title": "BernoulliFactory.logistic",
    "category": "method",
    "text": "logistic(f::F, C::Float64, rng::RNG=GLOBAL_RNG) where {F<:Function, RNG<:AbstractRNG}\n\nInput:\n\nf() simulates Bernoulli(p) random variates (of type Bool)\nC >= 0\n[rng] the RNG to used by the algorithm (does not affect f)\n\nOutput: X, flips\n\nX is a Bernoulli(Cp/(1.0+Cp)) variate\nflips is the number of calls of f()\n\n\n\n\n\n"
},

{
    "location": "#BernoulliFactory.power-Union{Tuple{RNG}, Tuple{F}, Tuple{F,Float64}, Tuple{F,Float64,RNG}} where RNG<:Random.AbstractRNG where F<:Function",
    "page": "Home",
    "title": "BernoulliFactory.power",
    "category": "method",
    "text": "power(f::F, a::Float64, rng::RNG=GLOBAL_RNG) where {F<:Function, RNG<:AbstractRNG}\n\nInput:\n\nf() simulates Bernoulli(p) random variates (of type Bool)\na >= 0\n[rng] the RNG to used by the algorithm (does not affect f)\n\nOutput: X, flips\n\nX is a Bernoulli(p^a) variate\nflips is the number of calls of f()\n\n\n\n\n\n"
},

{
    "location": "#BernoulliFactory.signedEstimate-Union{Tuple{RNG}, Tuple{F2}, Tuple{F1}, Tuple{F1,F2,Float64,Float64,Float64,Float64,Int64}, Tuple{F1,F2,Float64,Float64,Float64,Float64,Int64,RNG}} where RNG<:Random.AbstractRNG where F2<:Function where F1<:Function",
    "page": "Home",
    "title": "BernoulliFactory.signedEstimate",
    "category": "method",
    "text": "signedEstimate(μ::F1, φ::F2, a::Float64, b::Float64, δ::Float64, c::Float64, n::Int64, rng::RNG=GLOBAL_RNG) where {F1<:Function, F2<:Function, RNG<:AbstractRNG}\n\nInput:\n\nμ() simulates a random variate X\nφ(X) is real-valued\na,b,δ,c satisfy a <= infx φ(x) < b < δ <= μ(φ) < supx φ(x) <= c\nn specifies a number of X variables to average\n[rng] the RNG to used by the algorithm (does not affect f)\n\nOutput: Y, flips, calls\n\nY is almost surely valued in [b, max{2b-a,c}] with E[Y] = μ(φ)\nflips is the number of coin tosses by the Bernoulli Factory algorithm\ncalls is the number of calls of μ() in total\n\n\n\n\n\n"
},

{
    "location": "#BernoulliFactory.signedEstimate-Union{Tuple{RNG}, Tuple{F2}, Tuple{F1}, Tuple{F1,F2,Float64,Float64,Int64}, Tuple{F1,F2,Float64,Float64,Int64,RNG}} where RNG<:Random.AbstractRNG where F2<:Function where F1<:Function",
    "page": "Home",
    "title": "BernoulliFactory.signedEstimate",
    "category": "method",
    "text": "signedEstimate(μ::F1, φ::F2, c::Float64, δ::Float64, n::Int64, rng::RNG=GLOBAL_RNG) where {F1<:Function, F2<:Function, RNG<:AbstractRNG} where {F1<:Function, F2<:Function, RNG<:AbstractRNG}\n\nInput:\n\nμ() simulates a random variate X\nφ(X) is real-valued\nc satisfies sup_x |φ(x)| <= c\nδ > 0 satisfies μ(φ) >= δ\nn specifies a number of X variables to average\n[rng] the RNG to used by the algorithm (does not affect f)\n\nOutput: Y, flips, calls\n\nY is almost surely valued in [0.0,c] with E[Y] = μ(φ)\nflips is the number of coin tosses by the Bernoulli Factory algorithm\ncalls is the number of calls of μ() in total\n\n\n\n\n\n"
},

{
    "location": "#BernoulliFactory.sqrt-Union{Tuple{F}, Tuple{RNG}, Tuple{F}, Tuple{F,RNG}} where RNG<:Random.AbstractRNG where F<:Function",
    "page": "Home",
    "title": "BernoulliFactory.sqrt",
    "category": "method",
    "text": "sqrt(f::F, rng::RNG=GLOBAL_RNG) where {F<:Function, RNG<:AbstractRNG}\n\nInput:\n\nf() simulates Bernoulli(p) random variates (of type Bool)\n[rng] the RNG to used by the algorithm (does not affect f)\n\nOutput: X, flips\n\nX is a Bernoulli(sqrt(p)) variate\nflips is the number of calls of f()\n\n\n\n\n\n"
},

{
    "location": "#BernoulliFactory.twocoin-Union{Tuple{RNG}, Tuple{F2}, Tuple{F1}, Tuple{F1,F2,Float64,Float64}, Tuple{F1,F2,Float64,Float64,RNG}} where RNG<:Random.AbstractRNG where F2<:Function where F1<:Function",
    "page": "Home",
    "title": "BernoulliFactory.twocoin",
    "category": "method",
    "text": "twocoin(f1::F1, f2::F2, C1::Float64, C2::Float64, rng::RNG=GLOBAL_RNG) where {F1<:Function, F2<:Function, RNG<:AbstractRNG}\n\nInput:\n\nf1() simulates Bernoulli(p1) random variates (of type Bool)\nf2() simulates Bernoulli(p2) random variates (of type Bool)\nC1, C2 >= 0\n[rng] the RNG to used by the algorithm (does not affect f)\n\nOutput: X, flips\n\nX is a Bernoulli(C1p1/(C1p1+C2*p2)) variate\nflips is the number of calls of f()\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [BernoulliFactory]\nOrder = [:type, :function]"
},

]}
