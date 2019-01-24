var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "OnlineStats Docs Release Master Build Test Coverage\n(Image: ) (Image: ) (Image: OnlineStatsBase) (Image: Build Status) (Image: Build status) (Image: codecov)"
},

{
    "location": "#OnlineStatsBase-1",
    "page": "Readme",
    "title": "OnlineStatsBase",
    "category": "section",
    "text": "This package defines the basic types and interface for OnlineStats.  "
},

{
    "location": "#Interface-1",
    "page": "Readme",
    "title": "Interface",
    "category": "section",
    "text": ""
},

{
    "location": "#Required-Methods-1",
    "page": "Readme",
    "title": "Required Methods",
    "category": "section",
    "text": "_fit!(stat, y): Update the \"sufficient statistics\" of the estimator from a single observation y.\n_merge!(stat1, stat2) (optional, no default): Merge OnlineStat stat2 into stat1."
},

{
    "location": "#Default-Methods-1",
    "page": "Readme",
    "title": "Default Methods",
    "category": "section",
    "text": "value(stat, args...):  Calculate the value of the estimator from the \"sufficient statistics\".  By default, this returns the first field of the OnlineStat.\nnobs(stat): Return the number of observations.  By default, this returns stat.n."
},

{
    "location": "#Basic-Example-1",
    "page": "Readme",
    "title": "Basic Example",
    "category": "section",
    "text": "Make a subtype of OnlineStat and give it a _fit!(::OnlineStat{T}, y::T) method.\nT is the type of a single observation.  Make sure it\'s adequately wide.using OnlineStatsBase\n\nmutable struct MyMean <: OnlineStat{Number}\n    value::Float64\n    n::Int\n    MyMean() = new(0.0, 0)\nend\nfunction OnlineStatsBase._fit!(o::MyMean, y) \n    o.n += 1\n    o.value += (1 / o.n) * (y - o.value)\nend"
},

{
    "location": "#That\'s-all-there-is-to-it-1",
    "page": "Readme",
    "title": "That\'s all there is to it",
    "category": "section",
    "text": "y = randn(1000)\n\no = fit!(MyMean(), y)"
},

{
    "location": "autodocs/#OnlineStatsBase.EqualWeight",
    "page": "Docstrings",
    "title": "OnlineStatsBase.EqualWeight",
    "category": "type",
    "text": "EqualWeight()\n\nEqually weighted observations.  \n\nγ(t) = 1  t\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OnlineStatsBase.ExponentialWeight",
    "page": "Docstrings",
    "title": "OnlineStatsBase.ExponentialWeight",
    "category": "type",
    "text": "ExponentialWeight(λ::Float64)\nExponentialWeight(lookback::Int)\n\nExponentially weighted observations.  The first weight is 1.0 and all else are  λ = 2 / (lookback + 1).\n\nγ(t) = λ\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OnlineStatsBase.HarmonicWeight",
    "page": "Docstrings",
    "title": "OnlineStatsBase.HarmonicWeight",
    "category": "type",
    "text": "HarmonicWeight(a = 10.0)\n\nWeight determined by harmonic series.  \n\nγ(t) = a  (a + t - 1)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OnlineStatsBase.LearningRate",
    "page": "Docstrings",
    "title": "OnlineStatsBase.LearningRate",
    "category": "type",
    "text": "LearningRate(r = .6)\n\nSlowly decreasing weight.  Satisfies the standard stochastic approximation assumption   γ(t) =   γ(t)^2   if r  (5 1.\n\nγ(t) = inv(t ^ r)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OnlineStatsBase.LearningRate2",
    "page": "Docstrings",
    "title": "OnlineStatsBase.LearningRate2",
    "category": "type",
    "text": "LearningRate2(c = .5)\n\nSlowly decreasing weight.  \n\nγ(t) = inv(1 + c * (t - 1))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OnlineStatsBase.McclainWeight",
    "page": "Docstrings",
    "title": "OnlineStatsBase.McclainWeight",
    "category": "type",
    "text": "McclainWeight(α = .1)\n\nWeight which decreases into a constant.\n\nγ(t) = γ(t-1)  (1 + γ(t-1) - α)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LearnBase.value-Tuple{OnlineStat}",
    "page": "Docstrings",
    "title": "LearnBase.value",
    "category": "method",
    "text": "value(o::OnlineStat)\n\nCalculate the value of the stat from its \"sufficient statistics\".\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OnlineStatsBase.eachcol-Tuple",
    "page": "Docstrings",
    "title": "OnlineStatsBase.eachcol",
    "category": "method",
    "text": "eachcol(x::AbstractMatrix)\neachcol(x::AbstractMatrix, y::AbstractVector)\n\nIterator over the columns of x (paired in a tuple with the values of y).\n\nExample\n\nfor xi in eachcol(rand(3,2))\n    println(xi)\nend\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OnlineStatsBase.eachrow-Tuple",
    "page": "Docstrings",
    "title": "OnlineStatsBase.eachrow",
    "category": "method",
    "text": "eachrow(x::AbstractMatrix)\neachrow(x::AbstractMatrix, y::AbstractVector)\n\nIterator over the rows of x (paired in a tuple with the values of y).  \n\nExample\n\nfor xi in eachrow(rand(3,2))\n    println(xi)\nend\n\n\n\n\n\n"
},

{
    "location": "autodocs/#StatsBase.fit!-Union{Tuple{T}, Tuple{OnlineStat{T},T}} where T",
    "page": "Docstrings",
    "title": "StatsBase.fit!",
    "category": "method",
    "text": "fit!(stat::OnlineStat, data)\n\nUpdate the \"sufficient statistics\" of a stat with more data.   If typeof(data) is not  the type of a single observation for the provided stat, fit! will attempt to iterate  through and fit! each item in data.  Therefore, fit!(Mean(), 1:10) translates  roughly to:\n\no = Mean()\nfor x in 1:10\n    fit!(o, x)\nend\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OnlineStatsBase.Bounded",
    "page": "Docstrings",
    "title": "OnlineStatsBase.Bounded",
    "category": "type",
    "text": "Bounded(w::Weight, λ::Float64)\n\nBound the weight by a constant.\n\nγ(t) = max(γ(t) λ)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OnlineStatsBase.Scaled",
    "page": "Docstrings",
    "title": "OnlineStatsBase.Scaled",
    "category": "type",
    "text": "Scaled(w::Weight, λ::Float64)\n\nScale a weight by a constant.\n\nγ(t) = λ * γ(t)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OnlineStatsBase.smooth!-Tuple{Any,Any,Any}",
    "page": "Docstrings",
    "title": "OnlineStatsBase.smooth!",
    "category": "method",
    "text": "smooth!(a, b, γ)\n\nUpdate a in place by applying the smooth function elementwise with b.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OnlineStatsBase.smooth-Tuple{Any,Any,Any}",
    "page": "Docstrings",
    "title": "OnlineStatsBase.smooth",
    "category": "method",
    "text": "smooth(a, b, γ)\n\nWeighted average of a and b with weight γ.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#OnlineStatsBase.smooth_syr!-Tuple{AbstractArray{T,2} where T,Any,Number}",
    "page": "Docstrings",
    "title": "OnlineStatsBase.smooth_syr!",
    "category": "method",
    "text": "smooth_syr!(A::AbstractMatrix, x, γ::Number)\n\nWeighted average of symmetric rank-1 update.  Updates the upper triangle of:\n\nA = (1 - γ) * A + γ * x * x\'\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [OnlineStatsBase]\nOrder = [:type, :function]"
},

]}
