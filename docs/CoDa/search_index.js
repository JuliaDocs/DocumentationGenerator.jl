var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#CoDa.jl-1",
    "page": "Readme",
    "title": "CoDa.jl",
    "category": "section",
    "text": "Compositional Data Analysis in Julia[![][travis-img]][travis-url] [![][julia-pkg-img]][julia-pkg-url] [![][codecov-img]][codecov-url]This package is inspired by the R compositions package for compositional data analysis. Currently, only parts of the total features are implemented (got the joke? :D). Contributions are very welcome.CoDa.jl defines a Composition{D} type representing a D-part composition as defined by Aitchison 1986. In Aitchison\'s geometry, the D-simplex together with addition (a.k.a. pertubation) and scalar multiplication (a.k.a. scaling) form a vector space, and important properties hold:Scaling invariance\nPertubation invariance\nPermutation invariance\nSubcompositional coherenceIn practice, this means that one can operate on compositional data (i.e.  vectors whose entries represent parts of a total) without destroying the ratios of the parts."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Get the latest stable release with Julia\'s package manager:Pkg.add(\"CoDa\")"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "# 3-part compositions\ncₒ = Composition(1,2,3)\nc  = Composition(4,5,6)\n\n# composition line passing through cₒ in the direction of c\nf(λ) = cₒ + λ*c"
},

{
    "location": "#References-1",
    "page": "Readme",
    "title": "References",
    "category": "section",
    "text": "The most practical reference by far is the book Analyzing Compositional Data With R by van den Boogaart K. G. et al. 2013. The book contains the examples that I reproduced in this README and is a good start for scientists who are seeing this material for the first time.A more theoretical exposition can be found in the book Modeling and Analysis of Compositional Data by Pawlowsky-Glahn, V. et al. 2015. It contains detailed explanations of the concepts introduced by Aitchison in the 80s, and is co-authored by important names in the field.[travis-img]: https://travis-ci.org/juliohm/CoDa.jl.svg?branch=master [travis-url]: https://travis-ci.org/juliohm/CoDa.jl[julia-pkg-img]: http://pkg.julialang.org/badges/CoDa_0.7.svg [julia-pkg-url]: http://pkg.julialang.org/?pkg=CoDa[codecov-img]: https://codecov.io/gh/juliohm/CoDa.jl/branch/master/graph/badge.svg [codecov-url]: https://codecov.io/gh/juliohm/CoDa.jl"
},

{
    "location": "autodocs/#CoDa.Composition",
    "page": "Docstrings",
    "title": "CoDa.Composition",
    "category": "type",
    "text": "Composition{D}(parts)\n\nA D-part composition as defined by Aitchison 1986.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CoDa.alr-Union{Tuple{Composition{D}}, Tuple{D}} where D",
    "page": "Docstrings",
    "title": "CoDa.alr",
    "category": "method",
    "text": "alr(c)\n\nAdditive log-ratio transformation of composition c.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CoDa.alrinv-Tuple{Any}",
    "page": "Docstrings",
    "title": "CoDa.alrinv",
    "category": "method",
    "text": "alrinv(x)\n\nInverse alr for coordinates x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CoDa.clr-Union{Tuple{Composition{D}}, Tuple{D}} where D",
    "page": "Docstrings",
    "title": "CoDa.clr",
    "category": "method",
    "text": "clr(c)\n\nCentered log-ratio transformation of composition c.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CoDa.clrinv-Tuple{Any}",
    "page": "Docstrings",
    "title": "CoDa.clrinv",
    "category": "method",
    "text": "clrinv(x)\n\nInverse clr for coordinates x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CoDa.distance-Tuple{Composition,Composition}",
    "page": "Docstrings",
    "title": "CoDa.distance",
    "category": "method",
    "text": "distance(c₁, c₂)\n\nAitchison distance between compositions c₁ and c₂.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CoDa.ilr-Union{Tuple{Composition{D}}, Tuple{D}} where D",
    "page": "Docstrings",
    "title": "CoDa.ilr",
    "category": "method",
    "text": "ilr(c)\n\nIsometric log-ratio transformation of composition c.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CoDa.ilrinv-Tuple{Any}",
    "page": "Docstrings",
    "title": "CoDa.ilrinv",
    "category": "method",
    "text": "ilrinv(x)\n\nInverse ilr for coordinates x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CoDa.inner-Union{Tuple{D}, Tuple{Composition{D},Composition{D}}} where D",
    "page": "Docstrings",
    "title": "CoDa.inner",
    "category": "method",
    "text": "inner(c₁, c₂)\n\nInner product between compositions c₁ and c₂.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinearAlgebra.norm-Tuple{Composition}",
    "page": "Docstrings",
    "title": "LinearAlgebra.norm",
    "category": "method",
    "text": "norm(c)\n\nAitchison norm of composition c.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CoDa.𝓒-Tuple{Any}",
    "page": "Docstrings",
    "title": "CoDa.𝓒",
    "category": "method",
    "text": "𝓒(x)\n\nReturn closure of x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [CoDa]\nOrder = [:type, :function]"
},

]}
