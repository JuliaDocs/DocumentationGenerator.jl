var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Loess-1",
    "page": "Readme",
    "title": "Loess",
    "category": "section",
    "text": "(Image: Build Status) (Image: Loess) (Image: Loess)This is a pure Julia loess implementation, based on the fast kd-tree based approximation described in the original Cleveland, et al papers, implemented in the netlib loess C/Fortran code, and used by many, including in R\'s loess function."
},

{
    "location": "#Synopsis-1",
    "page": "Readme",
    "title": "Synopsis",
    "category": "section",
    "text": "Loess exports two functions: loess and predict, that train and apply the model, respectively.using Loess\n\nxs = 10 .* rand(100)\nys = sin(xs) .+ 0.5 * rand(100)\n\nmodel = loess(xs, ys)\n\nus = collect(minimum(xs):0.1:maximum(xs))\nvs = predict(model, us)\n\nusing Gadfly\np = plot(x=xs, y=ys, Geom.point, Guide.xlabel(\"x\"), Guide.ylabel(\"y\"),\n         layer(Geom.line, x=us, y=vs))\ndraw(SVG(\"loess.svg\", 6inch, 3inch), p)(Image: Example Plot)There\'s also a shortcut in Gadfly to draw these plots:plot(x=xs, y=ys, Geom.point, Geom.smooth, Guide.xlabel(\"x\"), Guide.ylabel(\"y\"))"
},

{
    "location": "#Status-1",
    "page": "Readme",
    "title": "Status",
    "category": "section",
    "text": "Multivariate regression is not yet fully implemented, but most of the parts are already there, and wouldn\'t require too much additional work."
},

{
    "location": "autodocs/#Loess.loess-Union{Tuple{T}, Tuple{AbstractArray{T,2},AbstractArray{T,1}}} where T<:AbstractFloat",
    "page": "Docstrings",
    "title": "Loess.loess",
    "category": "method",
    "text": "loess(xs, ys, normalize=true, span=0.75, degreee=2)\n\nFit a loess model.\n\nArgs:   xs: A n by m matrix with n observations from m independent predictors   ys: A length n response vector.   normalize: Normalize the scale of each predicitor. (default true when m > 1)   span: The degree of smoothing, typically in [0,1]. Smaller values result in smaller       local context in fitting.   degree: Polynomial degree.\n\nReturns:   A fit LoessModel.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Loess.KDTree-Union{Tuple{AbstractArray{T,2}}, Tuple{T}, Tuple{AbstractArray{T,2},Any}, Tuple{AbstractArray{T,2},Any,Any}} where T<:AbstractFloat",
    "page": "Docstrings",
    "title": "Loess.KDTree",
    "category": "method",
    "text": "KDTree(xs, leaf_size_factor, leaf_diameter factor)\n\nConstruct a kd-tree\n\nArgs:\n\nxs: an n x m matrix containing n, m-dimensional observations.\nleaf_size_factor: Stop spliting if a node contains   fewer than leaf_size_factor * n elements.\nleaf_diameter_factor: Stop spliting if a node\'s bounding   hypercube has diameter less that leaf_diameter_factor   times the diameter of the root node\'s bounding hypercube.\n\nReturns:   A KDTree object\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Loess.bounds_verts-Tuple{Array{T,2} where T}",
    "page": "Docstrings",
    "title": "Loess.bounds_verts",
    "category": "method",
    "text": "bounds_verts(bounds)\n\nGiven a bounding hypecube bounds, return its verticies\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Loess.build_kdtree-Union{Tuple{T}, Tuple{AbstractArray{T,2},AbstractArray,Array{T,2},Int64,T,Set{Array{T,1}}}} where T",
    "page": "Docstrings",
    "title": "Loess.build_kdtree",
    "category": "method",
    "text": "build_kdtree(xs, perm, bounds, leaf_size_cutoff, leaf_diameter_cutoff, verts)\n\nRecursively build a kd-tree\n\nArgs:\n\nxs: Data being orginized.\nperm: Permutation of the data, used to avoid   directly sorting or modifying xs.\nbounds: Bounding hypercube of the node.\nleaf_size_cutoff: stop spliting on nodes with more than   this many values.\nleaf_diameter_cutoff: stop splitting on nodes with less    than this diameter.\nverts: current set of vertexes\n\nModifies:   perm, verts\n\nReturns:   Either a KDLeafNode or a KDInternalNode\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Loess.diameter-Tuple{Array{T,2} where T}",
    "page": "Docstrings",
    "title": "Loess.diameter",
    "category": "method",
    "text": "diameter(bounds)\n\nCompute the diamater of a hypercube (i.e. the maximum distance between any 2 points in the hypercube) defined by bounds.\n\nArgs:\n\nbounds: A 2 by n matrix where bounds[1,i] gives the lower bound in   the ith dimension and bounds[2,j] the upper bound.\n\nReturns:   Computed diameter\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Loess.evalpoly-Tuple{Any,Any}",
    "page": "Docstrings",
    "title": "Loess.evalpoly",
    "category": "method",
    "text": "evalpoly(xs,bs)\n\nEvaluate a multivariate polynomial with coefficients bs at xs.  bs should be of length 1+length(xs)*d where d is the degree of the polynomial.\n\nbs[1] + xs[1]*bs[2] + xs[1]^2*bs[3] + ... + xs[end]^d*bs[end]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Loess.tnormalize!-Union{Tuple{AbstractArray{T,2}}, Tuple{T}, Tuple{AbstractArray{T,2},T}} where T<:AbstractFloat",
    "page": "Docstrings",
    "title": "Loess.tnormalize!",
    "category": "method",
    "text": "tnormalize!(x,q)\n\nDefault normalization procedure for predictors.\n\nThis simply normalizes by the mean of everything between the 10th an 90th percentiles.\n\nArgs:   xs: a matrix of predictors   q: cut the ends of at quantiles q and 1-q\n\nModifies:   xs\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Loess.traverse-Union{Tuple{T}, Tuple{KDTree{T},AbstractArray{T,1}}} where T",
    "page": "Docstrings",
    "title": "Loess.traverse",
    "category": "method",
    "text": "traverse(kdtree, x)\n\nTraverse the tree kdtree to the bottom and return the verticies of the bounding hypercube of the leaf node containing the point x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Loess.tricubic-Tuple{Any}",
    "page": "Docstrings",
    "title": "Loess.tricubic",
    "category": "method",
    "text": "tricubic(u)\n\nTricubic weight function.\n\nArgs:   u: Distance between 0 and 1\n\nReturns:   A weighting of the distance u\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Loess]\nOrder = [:type, :function]"
},

]}
