var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#MarriageMarkets-1",
    "page": "Readme",
    "title": "MarriageMarkets",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status)The MarriageMarkets package currently provides two marriage market models as Julia types:StaticMatch: computes the equilibrium of the static frictionless marriage market model from \"Who Marries Whom and Why\" (Choo & Siow, 2006).\nSearchMatch: computes the equilibrium of variants on the search and matching model from \"Assortative Matching and Search\" (Shimer & Smith, 2000) and the empirical extension in \"Marriage Gains\" (Goussé, 2014).SearchMatch also allows for inflows of new singles as well as deaths."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "As described in the manual, to [install unregistered packages][unregistered], enter pkg mode in the REPL (by pressing ]) and add the repository url:(v1.0) pkg> add https://github.com/tobanw/MarriageMarkets.jlJulia version 1.0 or higher is required (installation instructions [here][version])."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "As SearchMatch supports a number of model variants, there are specific constructors for the two main types:SearchClosed: closed-system where agents cycle between singlehood and marriage\nSearchInflow: steady-state population is determined by exogenous inflows and type-specific death ratesAll models support both unidimensional and multidimensional agent types. To specify a multidimensional type space, use a Vector of Vectors, e.g., [[1,1.5,1.7], [0,1]]"
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "Here are some simple examples of solving models with unidimensional types. I use [Gadfly][gadfly] to plot the resulting equilibrium objects."
},

{
    "location": "#Static-model-1",
    "page": "Readme",
    "title": "Static model",
    "category": "section",
    "text": "using MarriageMarkets\nusing Gadfly\n\nn = 50 # number of types\nΘ = collect(range(0.1, stop=1.0, length=n)) # type space vector\nm = ones(n) ./ n # uniform population measures\nf(x,y) = x*y # marital surplus function (per capita)\n\nstatic_mgmkt = StaticMatch(Θ, Θ, m, m, f)\n\nplot(z=static_mgmkt.matches, Geom.contour, Guide.title(\"Distribution of matches\"))(Image: matches)The saddle shape indicates positive assortative matching, as expected, due to the supermodular production function f(x,y) = x*y."
},

{
    "location": "#Search-model-1",
    "page": "Readme",
    "title": "Search model",
    "category": "section",
    "text": "The example below solves a search model with inflows and death. Then I plot the probabilities of match formation conditional on meeting.using MarriageMarkets\nusing Gadfly\n\nλ, δ = 500.0, 0.05 # arrival rates of meetings and divorce shocks\nr = 0.05 # discount rate\nσ = 1 # variance of Normally distributed match-specific productivity shocks\nn = 50 # number of types\nΘ = collect(range(0.1, stop=1.0, length=n)) # type space vector\nf(x,y) = x*y # marital production function\n\nγ = ones(n) ./ n # uniform inflows\nψ = ones(n) # uniform death rates\n\nsearch_mgmkt = SearchInflow(λ, δ, r, σ, Θ, Θ, γ, γ, ψ, ψ, f)\n\nplot(z=search_mgmkt.α, Geom.contour, Guide.title(\"Match probability conditional on meeting\"))(Image: alpha)"
},

{
    "location": "#Testing-1",
    "page": "Readme",
    "title": "Testing",
    "category": "section",
    "text": "In a Julia REPL session, enter pkg mode and run test MarriageMarkets.[unregistered]:https://docs.julialang.org/en/latest/stdlib/Pkg/#Adding-unregistered-packages-1 [version]:http://julialang.org/downloads/platform.html [gadfly]:http://gadflyjl.org/stable/"
},

{
    "location": "autodocs/#MarriageMarkets.SearchMatch",
    "page": "Docstrings",
    "title": "MarriageMarkets.SearchMatch",
    "category": "type",
    "text": "SearchMatch(λ, δ, r, σ, θ_m, θ_f, γ_m, γ_f, ψ_m, ψ_f, ℓ_m, ℓ_f, h; β=0.5, verbose=false, step=0.2)\n\nConstruct a Shimer & Smith (2000) marriage market model and solve for the equilibrium. When match-specific shocks are included, the divorce process is endogenized as in Goussé (2014).\n\nThe equilibrium is the solution to a nested fixed-point mapping. The inner fixed-point solves for a matching equilibrium: consistent strategies given fixed singles densities. The outer fixed-point solves for a market equilibrium: singles densities that are consistent with strategies.\n\nModel selection depends which arguments are provided:\n\nMatch-specific additive shocks z  N(0 σ) when σ  0\n\n* Note: some randomness is required for the fixed point iteration to converge with sex asymmetry\n\nClosed system or inflow/outflow:\n\n* `ℓ_m, ℓ_f` exogenous: population circulates between singlehood and marriage, no birth/death\n* Death rates `ψ_m, ψ_f`, inflows `γ_m, γ_f`: population distributions `ℓ_m, ℓ_f` endogenous\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MarriageMarkets.SearchMatch-Tuple{Real,Real,Real,Real,Array{Array{T,1},1} where T<:Real,Array{Array{T,1},1} where T<:Real,Array,Array,Array,Array,Array,Array,Function}",
    "page": "Docstrings",
    "title": "MarriageMarkets.SearchMatch",
    "category": "method",
    "text": "Outer constructor that constructs the production array from the types and production function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MarriageMarkets.StaticMatch",
    "page": "Docstrings",
    "title": "MarriageMarkets.StaticMatch",
    "category": "type",
    "text": "StaticMatch(mtypes, ftypes, mdist, fdist, surplus)\n\nConstruct a Choo & Siow (2006) marriage market model and solve for the equilibrium.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MarriageMarkets.StaticMatch-Tuple{Array{Array{T,1},1} where T<:Real,Array{Array{T,1},1} where T<:Real,Array,Array,Function}",
    "page": "Docstrings",
    "title": "MarriageMarkets.StaticMatch",
    "category": "method",
    "text": "Outer constructor that takes the production function to build the surplus array\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MarriageMarkets.StaticMatch-Tuple{Array{Array{T,1},1} where T<:Real,Array{T,1} where T,Array,Array,Function}",
    "page": "Docstrings",
    "title": "MarriageMarkets.StaticMatch",
    "category": "method",
    "text": "Outer constructor for one dimensional females case\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MarriageMarkets.StaticMatch-Tuple{Array{T,1} where T,Array{Array{T,1},1} where T<:Real,Array,Array,Function}",
    "page": "Docstrings",
    "title": "MarriageMarkets.StaticMatch",
    "category": "method",
    "text": "Outer constructor for one dimensional males case\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MarriageMarkets.StaticMatch-Tuple{Array{T,1} where T,Array{T,1} where T,Array,Array,Function}",
    "page": "Docstrings",
    "title": "MarriageMarkets.StaticMatch",
    "category": "method",
    "text": "Outer constructor for one dimensional case\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MarriageMarkets.SearchClosed-Tuple{Real,Real,Real,Real,Array{Array{T,1},1} where T<:Real,Array{Array{T,1},1} where T<:Real,Array,Array,Function}",
    "page": "Docstrings",
    "title": "MarriageMarkets.SearchClosed",
    "category": "method",
    "text": "SearchClosed(λ, δ, r, σ, θ_m, θ_f, ℓ_m, ℓ_f, g; β=0.5, verbose=false, step=0.2)\n\nConstructs marriage market equilibrium of closed-system model with match-specific productivity shocks and production function g(xy).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MarriageMarkets.SearchClosed-Tuple{Real,Real,Real,Real,Array{T,1} where T,Array{T,1} where T,Array,Array,Function}",
    "page": "Docstrings",
    "title": "MarriageMarkets.SearchClosed",
    "category": "method",
    "text": "SearchClosed(λ, δ, r, σ, θ_m, θ_f, ℓ_m, ℓ_f, g; β=0.5, verbose=false, step=0.2)\n\nMethod for one-dimensional types.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MarriageMarkets.SearchInflow-Tuple{Real,Real,Real,Real,Array{Array{T,1},1} where T<:Real,Array{Array{T,1},1} where T<:Real,Array,Array,Array,Array,Function}",
    "page": "Docstrings",
    "title": "MarriageMarkets.SearchInflow",
    "category": "method",
    "text": "SearchInflow(λ, δ, r, σ, θ_m, θ_f, γ_m, γ_f, ψ_m, ψ_f, g; β=0.5, verbose=false, step=0.2)\n\nConstructs marriage market equilibrium of inflow and death model with match-specific productivity shocks and production function g(xy).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MarriageMarkets.SearchInflow-Tuple{Real,Real,Real,Real,Array{T,1} where T,Array{T,1} where T,Array,Array,Array,Array,Function}",
    "page": "Docstrings",
    "title": "MarriageMarkets.SearchInflow",
    "category": "method",
    "text": "SearchInflow(λ, δ, r, σ, θ_m, θ_f, γ_m, γ_f, ψ_m, ψ_f, g; β=0.5, verbose=false, step=0.2)\n\nMethod for one-dimensional types.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MarriageMarkets.estimate_static_surplus-Tuple{Array,Array,Array}",
    "page": "Docstrings",
    "title": "MarriageMarkets.estimate_static_surplus",
    "category": "method",
    "text": "Estimate the marital surplus from observed matches and singles.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MarriageMarkets.demand-NTuple{4,Array}",
    "page": "Docstrings",
    "title": "MarriageMarkets.demand",
    "category": "method",
    "text": "Quasi-demand functions\n\nAssuming that surplus is generated from equal gains on both sides. This is w.l.o.g. as gains and transfers cannot be separately identified.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MarriageMarkets.equilibrium-Tuple{Array,Array,Array}",
    "page": "Docstrings",
    "title": "MarriageMarkets.equilibrium",
    "category": "method",
    "text": "Compute equilibrium shares of singles and marriages.\n\nSolves the matching equilibrium by searching for the transfers (analogous to prices) which clear the market.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MarriageMarkets.generate_surplus-Tuple{Array{Array{T,1},1} where T<:Real,Array{Array{T,1},1} where T<:Real,Array,Array,Function}",
    "page": "Docstrings",
    "title": "MarriageMarkets.generate_surplus",
    "category": "method",
    "text": "Construct production array from function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MarriageMarkets.prod_array-Tuple{Array{Array{T,1},1} where T<:Real,Array{Array{T,1},1} where T<:Real,Function}",
    "page": "Docstrings",
    "title": "MarriageMarkets.prod_array",
    "category": "method",
    "text": "Construct production array from function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MarriageMarkets.sex_solve-Tuple{Function,Array,Array}",
    "page": "Docstrings",
    "title": "MarriageMarkets.sex_solve",
    "category": "method",
    "text": "Wrapper for nlsolve that handles the concatenation and splitting of sex-specific arrays.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MarriageMarkets.sex_split-Tuple{Array{T,1} where T,Tuple,Tuple}",
    "page": "Docstrings",
    "title": "MarriageMarkets.sex_split",
    "category": "method",
    "text": "Split vector v into male/female pieces, where idx is number of male types.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MarriageMarkets.surplusdiv-Tuple{Array,Array,Array}",
    "page": "Docstrings",
    "title": "MarriageMarkets.surplusdiv",
    "category": "method",
    "text": "Wife\'s consumption out of surplus (aggregate share).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [MarriageMarkets]\nOrder = [:type, :function]"
},

]}
