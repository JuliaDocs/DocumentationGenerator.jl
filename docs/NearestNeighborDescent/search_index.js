var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#NearestNeighborDescent.jl-1",
    "page": "Readme",
    "title": "NearestNeighborDescent.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status)  (Image: codecov) (Image: Coverage Status)Julia implementation of the nearest neighbor descent algorithm described in:Dong, Wei et al. Efficient K-Nearest Neighbor Graph Construction for Generic Similarity Measures. WWW (2011)."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "The DescentGraph constructor builds the approximate kNN graph:DescentGraph(data, n_neighbors, metric; max_iters, sample_rate, precision)data: The set of points to build the tree from. This must be of typeVector{V}, where V <: AbstractVector or AbstractMatrix.n_neighbors: An integer specifies the number of neighbors to find\nmetric: Any metric M where M <: SemiMetric from the Distances.jl package. Default is Euclidean().The performance of NN Descent can be tuned with several keyword arguments.max_iters: This controls the maximum number of iterations to search forneighbors. Default is 10.sample_rate: The algorithm performs a local join around the candidateneighbors of each point during execution. The sample rate is the likelihood that each candidate be included in the local join for an iteration. Default is 1..precision: This argument roughly corresponds to the fraction of truenearest neighbors that will be missed by the algorithm. Default .001.The k-nearest neighbors can be accessed through the indices and distances attributes. These are both KxN matrices containing ids and distances to each point\'s neighbors, respectively, where K = n_neighbors and N = length(data).Example:using NearestNeighborDescent\ndata = [rand(10) for _ in 1:1000]\n# OR data = rand(10, 1000)\nn_neighbors = 5\n\n# nn descent search\ngraph = DescentGraph(data, n_neighbors)\n\n# access point i\'s jth nearest neighbor:\ngraph.indices[j, i]\ngraph.distances[j, i]Once constructed, the DescentGraph can be used to find the nearest neighbors to new points. This is done via the search method:search(graph, queries, n_neighbors, queue_size) -> indices, distancesgraph: An instance of DescentGraph\nqueries: A vector of new data points of type Vector{V} or AbstractMatrix. Note that the dimensionality of the queries should match that of the data used to  originally construct the graph.n_neighbors: The number of neighbors to find for each query. This doesnot have to be the same as the number used to construct graph.queue_size: Each query maintains a heap of candidate neighbors.queue_size controls the maximum number of candidates as a multiple of n_neighbors. Default is 1..Similar to DescentGraph, this returns two matrices for the indices and distances to the nearest neighbors of each query.Example:queries = [rand(10) for _ in 1:100]\n# OR queries = rand(10, 100)\nidxs, dists = search(knngraph, queries, 4)"
},

{
    "location": "autodocs/#NearestNeighborDescent.DescentGraph",
    "page": "Docstrings",
    "title": "NearestNeighborDescent.DescentGraph",
    "category": "type",
    "text": "DescentGraph(data::AbstractMatrix, n_neighbors::Integer[, metric::SemiMetric = Euclidean()]; <keyword arguments>)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NearestNeighborDescent.DescentGraph-Union{Tuple{R}, Tuple{V}, Tuple{Array{V,1},Integer}, Tuple{Array{V,1},Integer,SemiMetric}} where R<:AbstractFloat where V<:(AbstractArray{T,1} where T)",
    "page": "Docstrings",
    "title": "NearestNeighborDescent.DescentGraph",
    "category": "method",
    "text": "DescentGraph(data::Vector{V}, n_neighbors::Integer[, metric::SemiMetric = Euclidean()]; <keyword arguments>)\n\nBuild an approximate kNN graph of data using nearest neighbor descent.\n\nArguments\n\nmax_iters::Integer = 10: Limits the number of iterations to refine candidate\n\nnearest neighbors. Higher values trade off speed for accuracy. Note that graph construction may terminate early if little progress is being made.\n\nsample_rate::AbstractFloat = 1.: The sample rate for calculating local joins\n\naround each point. Lower values trade off accuracy for speed.\n\nprecision::AbstractFloat = .001: The threshold for early termination,\n\nwhere precision is \"roughly the fraction of true kNN allowed to be missed due to early termination\". Lower values take longer but return more accurate results.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NearestNeighborDescent.search",
    "page": "Docstrings",
    "title": "NearestNeighborDescent.search",
    "category": "function",
    "text": "search(graph::DescentGraph, queries::AbstractMatrix, n_neighbors::Integer, queue_size::Real = 1.)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NearestNeighborDescent.search-Union{Tuple{V}, Tuple{DescentGraph,Array{V,1},Integer}, Tuple{DescentGraph,Array{V,1},Integer,Real}} where V<:AbstractArray",
    "page": "Docstrings",
    "title": "NearestNeighborDescent.search",
    "category": "method",
    "text": "search(graph::DescentGraph, queries::Vector{V}, n_neighbors::Integer, queue_size=1.) -> indices, distances\n\nSearch the kNN graph for the nearest neighbors of the points in queries. queue_size controls how large the candidate queue should be as a multiple of n_neighbors. Larger values increase accuracy at the cost of speed.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NearestNeighborDescent._check_tuple-Tuple{DataStructures.BinaryHeap,Any,Any}",
    "page": "Docstrings",
    "title": "NearestNeighborDescent._check_tuple",
    "category": "method",
    "text": "Check if a tuple exists in a heap at index i, and optionally update its dist. Returns (exists::Bool, updated::Bool)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NearestNeighborDescent._heappush!",
    "page": "Docstrings",
    "title": "NearestNeighborDescent._heappush!",
    "category": "function",
    "text": "_heappush!(heap::BinaryHeap, tup::NNTuple, max_candidates)\n\nTry to push a neighbor tup to heap. This will fail (return 0) if tup is already in heap, if tup.dist > top(heap).dist. Otherwise return 1. If length(heap) > max_candidates after pushing, pop the largest candidate.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NearestNeighborDescent._neighbors",
    "page": "Docstrings",
    "title": "NearestNeighborDescent._neighbors",
    "category": "function",
    "text": "Get the neighbors of each point in a KNN graph, graph, as an array of ids.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NearestNeighborDescent._unchecked_heappush!",
    "page": "Docstrings",
    "title": "NearestNeighborDescent._unchecked_heappush!",
    "category": "function",
    "text": "Push tup onto heap without checkout if it already exists in the heap.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NearestNeighborDescent.brute_knn-Union{Tuple{M}, Tuple{V}, Tuple{Array{V,1},M,Int64}} where M<:Distances.SemiMetric where V<:AbstractArray",
    "page": "Docstrings",
    "title": "NearestNeighborDescent.brute_knn",
    "category": "method",
    "text": "Brute-force (𝒪(n²)) kNN search algorithm. Returns an KxN array of tuples (index, distance) of the k nearest neighbors  for each point in data.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NearestNeighborDescent.brute_search-Union{Tuple{M}, Tuple{V}, Tuple{Array{V,1},Array{V,1},Integer}, Tuple{Array{V,1},Array{V,1},Integer,M}} where M<:Distances.SemiMetric where V<:(AbstractArray{T,1} where T)",
    "page": "Docstrings",
    "title": "NearestNeighborDescent.brute_search",
    "category": "method",
    "text": "brute_search(data, queries, k, metric) -> idxs, dists\n\nSearch for the nearest k neighbors of q in queries in data.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NearestNeighborDescent.build_graph-Union{Tuple{R}, Tuple{M}, Tuple{V}, Tuple{Array{V,1},Integer,M,Integer,R,R}} where R<:AbstractFloat where M<:Distances.SemiMetric where V<:AbstractArray",
    "page": "Docstrings",
    "title": "NearestNeighborDescent.build_graph",
    "category": "method",
    "text": "Return a kNN graph for the input data according to the given metric.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NearestNeighborDescent.deheap_knns-Union{Tuple{H}, Tuple{T}, Tuple{S}, Tuple{Array{H,1},Any}} where H<:DataStructures.AbstractHeap{NearestNeighborDescent.NNTuple{S,T}} where T where S",
    "page": "Docstrings",
    "title": "NearestNeighborDescent.deheap_knns",
    "category": "method",
    "text": "Remove the k nearest neighbors from each heap in knn_heaps. Return two k x length(knn_heaps) arrays for the indices and  distances to each point\'s kNN.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NearestNeighborDescent.sample_neighbors-Union{Tuple{Int64,Int64}, Tuple{R}, Tuple{Int64,Int64,R}} where R<:AbstractFloat",
    "page": "Docstrings",
    "title": "NearestNeighborDescent.sample_neighbors",
    "category": "method",
    "text": "Sample n_neighbors elements from a set of ints 1:npoints. The ints in exclude won\'t be sampled.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [NearestNeighborDescent]\nOrder = [:type, :function]"
},

]}
