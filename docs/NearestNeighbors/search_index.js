var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#NearestNeighbors.jl-1",
    "page": "Readme",
    "title": "NearestNeighbors.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status)  (Image: codecov.io)NearestNeighbors.jl is a package written in Julia to perform high performance nearest neighbor searches in  arbitrarily high dimensions."
},

{
    "location": "#Creating-a-tree-1",
    "page": "Readme",
    "title": "Creating a tree",
    "category": "section",
    "text": "The abstract tree type that the trees in this package are a subtype of is called a NNTree. A NNTree is created by the function:NNTree(data, metric; leafsize, reorder)data: This parameter represents the points to build up the tree from. It can either be a matrix of size nd × np with the points to insert in the tree where nd is the dimensionality of the points, np is the number of points or it can be a Vector{V} where V is itself a subtype of an AbstractVector and such that eltype(V) and length(V) is defined.\nmetric: The metric to use, defaults to Euclidean. This is one of the Metric types defined in the Distances.jl packages. It is possible to define your own metrics by simply creating new types that are subtypes of Metric.\nleafsize (keyword argument): Determines at what number of points to stop splitting the tree further. There is a trade-off between traversing the tree and having to evaluate the metric function for increasing number of points.\nreorder (keyword argument): While building the tree this will put points close in distance close in memory since this helps with cache locality. In this case, a copy of the original data will be made so that the original data is left unmodified. This can have a significant impact on performance and is by default set to true.There are currently three types of trees available:BruteTree: Not actually a tree. It linearly searches all points in a brute force fashion. Works with any Metric.\nKDTree: In a kd tree the points are recursively split into groups using hyper-planes.Therefore a KDTree only works with axis aligned metrics which are: Euclidean, Chebyshev, Minkowski and Cityblock.BallTree: Points are recursively split into groups bounded by hyper-spheres. Works with any Metric.All trees in NearestNeighbors.jl are static which means that points can not be added or removed from an already created tree.Here are a few examples of creating trees:using NearestNeighbors\ndata = rand(3, 10^4)\n\n# Create trees\nkdtree = KDTree(data; leafsize = 10)\nballtree = BallTree(data, Minkowski(3.5); reorder = false)\nbrutetree = BruteTree(data)"
},

{
    "location": "#k-Nearest-Neighbor-(kNN)-searches-1",
    "page": "Readme",
    "title": "k Nearest Neighbor (kNN) searches",
    "category": "section",
    "text": "A kNN search finds the k nearest neighbors to given point(s). This is done with the method:knn(tree, points, k, sortres = false, skip = always_false) -> idxs, diststree: The tree instance\npoints: A vector or matrix of points to find the k nearest neighbors to. If points is a vector of numbers then this represents a single point, if points is a matrix then the k nearest neighbors to each point (column) will be computed. points can also be a vector of other vectors where each element in the outer vector is considered a point.\nsortres (optional): Determines if the results should be sorted before returning.In this case the results will be sorted in order of increasing distance to the point.skip (optional): A predicate to determine if a given point should be skipped, forexample if iterating over points and a point has already been visited.It is generally better for performance to query once with a large number of points than to query multiple times with one point per query.Some examples:using NearestNeighbors\ndata = rand(3, 10^4)\nk = 3\npoint = rand(3)\n\nkdtree = KDTree(data)\nidxs, dists = knn(kdtree, point, k, true)\n\nidxs\n# 3-element Array{Int64,1}:\n#  4683\n#  6119\n#  3278\n\ndists\n# 3-element Array{Float64,1}:\n#  0.039032201026256215\n#  0.04134193711411951 \n#  0.042974090446474184\n\n# Multiple points\npoints = rand(3, 4);\n\nidxs, dists = knn(kdtree, points, k, true);\n\nidxs\n# 4-element Array{Array{Int64,1},1}:\n#  [3330, 4072, 2696]\n#  [1825, 7799, 8358]\n#  [3497, 2169, 3737]\n#  [1845, 9796, 2908]\n\n# dists\n# 4-element Array{Array{Float64,1},1}:\n#  [0.0298932, 0.0327349, 0.0365979]\n#  [0.0348751, 0.0498355, 0.0506802]\n#  [0.0318547, 0.037291, 0.0421208] \n#  [0.03321, 0.0360935, 0.0411951]\n \n# Static vectors\nv = @SVector[0.5, 0.3, 0.2];\n\nidxs, dists = knn(kdtree, v, k, true);\n\nidxs\n# 3-element Array{Int64,1}:\n#   842\n#  3075\n#  3046\n\ndists\n# 3-element Array{Float64,1}:\n#  0.04178677766255837 \n#  0.04556078331418939 \n#  0.049967238112417205"
},

{
    "location": "#Range-searches-1",
    "page": "Readme",
    "title": "Range searches",
    "category": "section",
    "text": "A range search finds all neighbors within the range r of given point(s). This is done with the method:inrange(tree, points, r, sortres = false) -> idxsNote that for performance reasons the distances are not returned. The arguments to inrange are the same as for knn except that sortres just sorts the returned index vector.An example:using NearestNeighbors\ndata = rand(3, 10^4)\nr = 0.05\npoint = rand(3)\n\nballtree = BallTree(data)\nidxs = inrange(balltree, point, r, true)\n\n# 4-element Array{Int64,1}:\n#  317\n#  983\n# 4577\n# 8675"
},

{
    "location": "#Using-on-disk-data-sets-1",
    "page": "Readme",
    "title": "Using on-disk data sets",
    "category": "section",
    "text": "By default, the trees store a copy of the data provided during construction. This is problematic in case you want to work on data sets which are larger than available memory, thus wanting to mmap the data or want to store the data in a different place, outside the tree.DataFreeTree can be used to strip a constructed tree of its data field and re-link it with that data at a later stage. An example of using a large on-disk data set looks like this:using Mmap\nndim = 2; ndata = 10_000_000_000\ndata = Mmap.mmap(datafilename, Matrix{Float32}, (ndim, ndata))\ndata[:] = rand(Float32, ndim, ndata)  # create example data\ndftree = DataFreeTree(KDTree, data)dftree now only stores the indexing data structures. It can be passed around, saved and reloaded independently of data.To perform look-ups, dftree is re-linked to the underlying data:tree = injectdata(dftree, data)  # yields a KDTree\nknn(tree, data[:,1], 3)  # perform operations as usual"
},

{
    "location": "#Author-1",
    "page": "Readme",
    "title": "Author",
    "category": "section",
    "text": "Kristoffer Carlsson -  @KristofferC - kristoffer.carlsson@chalmers.se"
},

{
    "location": "autodocs/#NearestNeighbors.BallTree-Union{Tuple{Array{V,1}}, Tuple{M}, Tuple{V}, Tuple{Array{V,1},M}} where M<:Distances.Metric where V<:AbstractArray",
    "page": "Docstrings",
    "title": "NearestNeighbors.BallTree",
    "category": "method",
    "text": "BallTree(data [, metric = Euclidean(), leafsize = 10]) -> balltree\n\nCreates a BallTree from the data using the given metric and leafsize.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NearestNeighbors.BruteTree-Union{Tuple{Array{V,1}}, Tuple{V}, Tuple{Array{V,1},Metric}} where V<:(AbstractArray{T,1} where T)",
    "page": "Docstrings",
    "title": "NearestNeighbors.BruteTree",
    "category": "method",
    "text": "BruteTree(data [, metric = Euclidean()) -> brutetree\n\nCreates a BruteTree from the data using the given metric.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NearestNeighbors.DataFreeTree-Union{Tuple{T}, Tuple{Type{T},Any,Vararg{Any,N} where N}} where T<:NNTree",
    "page": "Docstrings",
    "title": "NearestNeighbors.DataFreeTree",
    "category": "method",
    "text": "DataFreeTree(treetype, data[, reorderbufffer = similar(data), kwargs...]) -> datafreetree\n\nCreates a DataFreeTree which wraps a KDTree or BallTree. Keywords arguments are passed to their respective constructors.\n\nThe KDTree or BallTree will be stored without a reference to the underlaying data. injectdata has to be used to re-link them to a data array before use.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NearestNeighbors.KDTree-Union{Tuple{Array{V,1}}, Tuple{M}, Tuple{V}, Tuple{Array{V,1},M}} where M<:Union{Chebyshev, Cityblock, Euclidean, Minkowski} where V<:AbstractArray",
    "page": "Docstrings",
    "title": "NearestNeighbors.KDTree",
    "category": "method",
    "text": "KDTree(data [, metric = Euclidean(), leafsize = 10]) -> kdtree\n\nCreates a KDTree from the data using the given metric and leafsize. The metric must be a MinkowskiMetric.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NearestNeighbors.injectdata-Union{Tuple{T}, Tuple{DataFreeTree,Array{T,2}}} where T",
    "page": "Docstrings",
    "title": "NearestNeighbors.injectdata",
    "category": "method",
    "text": "injectdata(datafreetree, data) -> tree\n\nReturns the KDTree/BallTree wrapped by datafreetree, set up to use data for the points data.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NearestNeighbors.inrange-Union{Tuple{T}, Tuple{NNTree,Array{T,1},Number}, Tuple{NNTree,Array{T,1},Number,Any}} where T<:(AbstractArray{T,1} where T)",
    "page": "Docstrings",
    "title": "NearestNeighbors.inrange",
    "category": "method",
    "text": "inrange(tree::NNTree, points, radius [, sortres=false]) -> indices\n\nFind all the points in the tree which is closer than radius to points. If sortres = true the resulting indices are sorted.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NearestNeighbors.knn-Union{Tuple{T}, Tuple{V}, Tuple{NNTree{V,P} where P<:Metric,Array{T,1},Int64}, Tuple{NNTree{V,P} where P<:Metric,Array{T,1},Int64,Any}, Tuple{NNTree{V,P} where P<:Metric,Array{T,1},Int64,Any,Function}} where T<:(AbstractArray{T,1} where T) where V",
    "page": "Docstrings",
    "title": "NearestNeighbors.knn",
    "category": "method",
    "text": "knn(tree::NNTree, points, k [, sortres=false]) -> indices, distances\n\nPerforms a lookup of the k nearest neigbours to the points from the data in the tree. If sortres = true the result is sorted such that the results are in the order of increasing distance to the point. skip is an optional predicate to determine if a point that would be returned should be skipped.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [NearestNeighbors]\nOrder = [:type, :function]"
},

]}
