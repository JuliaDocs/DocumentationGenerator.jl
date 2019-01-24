var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#BoundingSphere-1",
    "page": "Readme",
    "title": "BoundingSphere",
    "category": "section",
    "text": "[![][travis-img]][travis-url] [![][pkg-0.6-img]][pkg-0.6-url] [![][pkg-0.7-img]][pkg-0.7-url] [![][coveralls-img]][coveralls-url] [![][docs-stable-img]][docs-stable-url] [![][docs-latest-img]][docs-latest-url] [![][issues-img]][issues-url]Package contains algorithms to calculate smallest enclosing sphere for a given set of points in N dimensions.BoundingSphere.jl is a complete rewrite from scratch of Miniball.jl. See Miniball.jl issue #28."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "using BoundingSphere\n\npts = [randn(3) for _ in 1:10]\ncenter, radius = boundingsphere(pts)\n\nusing StaticArrays\npts = [@SVector(randn(3)) for _ in 1:10] # use static arrays for performance\nalgorithm = Ritter() # fast but inaccurate\ncenter, radius = boundingsphere(pts, algorithm) # customize algorithm[contrib-url]: https://juliafem.github.io/BoundingSphere.jl/latest/man/contributing/ [discourse-tag-url]: https://discourse.julialang.org/tags/boundingsphere [gitter-url]: https://gitter.im/JuliaFEM/JuliaFEM.jl[docs-latest-img]: https://img.shields.io/badge/docs-latest-blue.svg [docs-latest-url]: https://juliafem.github.io/BoundingSphere.jl/latest[docs-stable-img]: https://img.shields.io/badge/docs-stable-blue.svg [docs-stable-url]: https://juliafem.github.io/BoundingSphere.jl/stable[travis-img]: https://travis-ci.org/JuliaFEM/BoundingSphere.jl.svg?branch=master [travis-url]: https://travis-ci.org/JuliaFEM/BoundingSphere.jl[coveralls-img]: https://coveralls.io/repos/github/JuliaFEM/BoundingSphere.jl/badge.svg?branch=master [coveralls-url]: https://coveralls.io/github/JuliaFEM/BoundingSphere.jl?branch=master[issues-img]: https://img.shields.io/github/issues/JuliaFEM/BoundingSphere.jl.svg [issues-url]: https://github.com/JuliaFEM/BoundingSphere.jl/issues[pkg-0.6-img]: http://pkg.julialang.org/badges/BoundingSphere0.6.svg [pkg-0.6-url]: http://pkg.julialang.org/?pkg=BoundingSphere&ver=0.6 [pkg-0.7-img]: http://pkg.julialang.org/badges/BoundingSphere0.7.svg [pkg-0.7-url]: http://pkg.julialang.org/?pkg=BoundingSphere&ver=0.7"
},

{
    "location": "autodocs/#BoundingSphere.Ritter",
    "page": "Docstrings",
    "title": "BoundingSphere.Ritter",
    "category": "type",
    "text": "Ritter()\n\nPros\n\nextremly fast\nsimple\n\nCons\n\nVery inaccurate.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoundingSphere.WelzlMTF",
    "page": "Docstrings",
    "title": "BoundingSphere.WelzlMTF",
    "category": "type",
    "text": "WelzlMTF()\n\nWelzl algorithm with move to front heuristic. See Algorithm I in https://people.inf.ethz.ch/gaertner/subdir/texts/ownwork/esa99final.pdf. In almost all situations it is better to use WelzlPivot instead.\n\nPros\n\nFast for small examples\n\nCons\n\nProne to numerical stability issues\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoundingSphere.WelzlPivot",
    "page": "Docstrings",
    "title": "BoundingSphere.WelzlPivot",
    "category": "type",
    "text": "WelzlPivot(;max_iterations=1000)\n\nWelzl algorithm with pivoting. See Algorithm II in https://people.inf.ethz.ch/gaertner/subdir/texts/ownwork/esa99final.pdf.\n\nPros\n\nFast\n\nCons\n\nIn very rare cases can be numerically instable\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoundingSphere.boundingsphere",
    "page": "Docstrings",
    "title": "BoundingSphere.boundingsphere",
    "category": "function",
    "text": "center, radius = boundingsphere(pts [, algorithm=WelzlPivot()])\n\nCompute the smallest sphere that contains each point in pts.\n\nArguments\n\npts: A list of points. Points should be vectors with floating point entries.\nalgorithm: An optional algorithm to do the computation. See names(BoundingSphere) to get\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoundingSphere.BoundaryDevice",
    "page": "Docstrings",
    "title": "BoundingSphere.BoundaryDevice",
    "category": "type",
    "text": "BoundaryDevice\n\nFinds unique spheres determined by prescribed affine independent boundary points. In the welzl algorithm this problem needs to be solved in series, where points are pushed and popped from to the boundary.\n\nSubtypes must implement the following interface:\n\npushifstable!(device, pt)::Bool :\npop!(device): Remove last point from the boundary.\nget_ball(device)::SqBall : Get the last ball from the device.\nlength(device)::Int : Get the current count of boundary points\nismaxlength(device)::Bool: Check if there are dim+1 boundary points in the device\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BoundingSphere.GaertnerBdry",
    "page": "Docstrings",
    "title": "BoundingSphere.GaertnerBdry",
    "category": "type",
    "text": "GaertnerBdry\n\nBoundaryDevice that corresponds to M_B in Section 4 of Gaertners paper.\n\nSee also: BoundaryDevice\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [BoundingSphere]\nOrder = [:type, :function]"
},

]}
