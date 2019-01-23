var documenterSearchIndex = {"docs": [

{
    "location": "#Clustering.Hclust",
    "page": "Home",
    "title": "Clustering.Hclust",
    "category": "type",
    "text": "Hierarchical clustering of the data returned by hclust(). The data hierarchy is defined by the merges matrix:\n\neach row specifies which subtrees (referenced by their IDs) are merged into a higher-level subtree\nnegative subtree id denotes leaf node and corresponds to the datapoint at position -id\npositive id denotes nontrivial subtree: the row merges[id, :] specifies its left and right subtrees, and heights[id] – its height.\n\nThis type mostly follows R\'s hclust class.\n\n\n\n\n\n"
},

{
    "location": "#Clustering.MCLResult",
    "page": "Home",
    "title": "Clustering.MCLResult",
    "category": "type",
    "text": "struct MCLResult <: ClusteringResult\n\nResult returned by mcl().\n\n\n\n\n\n"
},

{
    "location": "#Clustering.dbscan-Tuple{AbstractArray{T,2} where T,Real}",
    "page": "Home",
    "title": "Clustering.dbscan",
    "category": "method",
    "text": "dbscan(points, radius ; leafsize = 20, min_neighbors = 1, min_cluster_size = 1) -> clusters\n\nCluster points using the DBSCAN (density-based spatial clustering of applications with noise) algorithm.\n\nArguments\n\npoints: matrix of points\nradius::Real: query radius\n\nKeyword Arguments\n\nleafsize::Int: number of points binned in each leaf node in the KDTree\nmin_neighbors::Int: minimum number of neighbors to be a core point\nmin_cluster_size::Int: minimum number of points to be a valid cluster\n\nOutput\n\nVector{DbscanCluster}: an array of clusters with the id, size core indices and boundary indices\n\nExample:\n\npoints = randn(3, 10000)\nclusters = dbscan(points, 0.05, min_neighbors = 3, min_cluster_size = 20) # clusters with less than 20 points will be discarded\n\n\n\n\n\n"
},

{
    "location": "#Clustering.mcl-Union{Tuple{AbstractArray{T,2}}, Tuple{T}} where T<:Real",
    "page": "Home",
    "title": "Clustering.mcl",
    "category": "method",
    "text": "mcl(adj::Matrix; [keyword arguments])::MCLResult\n\nIdentify clusters in the weighted graph using Markov Clustering Algorithm (MCL).\n\nArguments\n\nadj::Matrix{Float64}: adjacency matrix that defines the weighted graph to cluster\nadd_loops::Bool: whether edges of weight 1.0 from the node to itself should be appended to the graph (enabled by default)\nexpansion::Number: MCL expansion constant (2)\ninflation::Number: MCL inflation constant (2.0)\nsave_final_matrix::Bool: save final equilibrium state in the result, otherwise leave it empty; disabled by default, could be useful if MCL doesn\'t converge\nmax_iter::Integer: max number of MCL iterations\ntol::Number: MCL adjacency matrix convergence threshold\nprune_tol::Number: pruning threshold\ndisplay::Symbol: :none for no output or :verbose for diagnostic messages\n\nSee original MCL implementation.\n\nRef: Stijn van Dongen, \"Graph clustering by flow simulation\", 2001\n\n\n\n\n\n"
},

{
    "location": "#Clustering.silhouettes-Union{Tuple{T}, Tuple{AbstractArray{#s808,1} where #s808<:Integer,AbstractArray{#s807,1} where #s807<:Integer,AbstractArray{T,2}}} where T<:Real",
    "page": "Home",
    "title": "Clustering.silhouettes",
    "category": "method",
    "text": "silhouettes(assignments::AbstractVector, [counts,] dists)\nsilhouettes(clustering::ClusteringResult, dists)\n\nCompute silhouette values for individual points w.r.t. given clustering.\n\nassignments the vector of point assignments (cluster indices)\ncounts the optional vector of cluster sizes (how many points assigned to each cluster; should match assignments)\nclustering the output of some clustering method\ndists point×point pairwise distance matrix\n\nReturns a vector of silhouette values for each individual point.\n\nmean(silhouettes(...)) could be used as a measure of clustering quality; higher values indicate better separation of clusters w.r.t. distances provided in dists.\n\nReferences\n\nSilhouette Wikipedia page.\nPeter J. Rousseeuw (1987). \"Silhouettes: a Graphical Aid to the Interpretation and Validation of Cluster Analysis\". Computational and Applied Mathematics. 20: 53–65.\n\n\n\n\n\n"
},

{
    "location": "#Clustering.vmeasure-Tuple{Union{ClusteringResult, AbstractArray{#s809,1} where #s809<:Integer},Union{ClusteringResult, AbstractArray{#s808,1} where #s808<:Integer}}",
    "page": "Home",
    "title": "Clustering.vmeasure",
    "category": "method",
    "text": "vmeasure(assign1, assign2; β = 1.0)\n\nV-measure between two clustering assignments.\n\nassign1 and assign2 can be either ClusteringResult objects or assignments vectors (AbstractVector{<:Integer}).\n\nThe β parameter defines trade-off between homogeneity and completeness:\n\nif β is greater than 1, completeness is weighted more strongly,\nif β is less than 1, homogeneity is weighted more strongly.\n\nRef: Andrew Rosenberg and Julia Hirschberg, 2007. \"V-Measure: A conditional entropy-based external cluster evaluation measure\"\n\n\n\n\n\n"
},

{
    "location": "#Clustering.AverageDistance",
    "page": "Home",
    "title": "Clustering.AverageDistance",
    "category": "type",
    "text": "Average distance between a pair of points from each clusters.\n\n\n\n\n\n"
},

{
    "location": "#Clustering.MaximumDistance",
    "page": "Home",
    "title": "Clustering.MaximumDistance",
    "category": "type",
    "text": "Maximum distance between a pair of point from each clusters.\n\n\n\n\n\n"
},

{
    "location": "#Clustering.MinimalDistance",
    "page": "Home",
    "title": "Clustering.MinimalDistance",
    "category": "type",
    "text": "Distance between the clusters is the minimal distance between any pair of their points.\n\n\n\n\n\n"
},

{
    "location": "#Clustering.ReducibleMetric",
    "page": "Home",
    "title": "Clustering.ReducibleMetric",
    "category": "type",
    "text": "Base type for reducible Lance–Williams cluster metrics.\n\nThe metric d is called reducible if for any clusters A, B and C and some ρ > 0 s.t.\n\nd(A, B) < ρ, d(A, C) > ρ, d(B, C) > ρ\n\nit follows that\n\nd(A∪B, C) > ρ\n\nIf the cluster metrics belongs to Lance-Williams family, there is an efficient formula that defines d(A∪B, C) using d(A, C), d(B, C) and d(A, B).\n\n\n\n\n\n"
},

{
    "location": "#Clustering.WardDistance",
    "page": "Home",
    "title": "Clustering.WardDistance",
    "category": "type",
    "text": "Ward distance between the two clusters A and B is the amount by which merging the two clusters into a single larger cluster A∪B would increase the average squared distance of a point to its cluster centroid.\n\n\n\n\n\n"
},

{
    "location": "#Clustering._dbscan-Tuple{NearestNeighbors.KDTree,AbstractArray{T,2} where T,Real}",
    "page": "Home",
    "title": "Clustering._dbscan",
    "category": "method",
    "text": "An implementation of DBSCAN algorithm that keeps track of both the core and boundary points \n\n\n\n\n\n"
},

{
    "location": "#Clustering.accept_cluster!-Tuple{Array{DbscanCluster,1},BitArray{1},BitArray{1},Int64}",
    "page": "Home",
    "title": "Clustering.accept_cluster!",
    "category": "method",
    "text": "accept_cluster!(clusters, core_selection, cluster_selection)\n\nAccept cluster and update the clusters list\n\nInput\n\nclusters :: Vector{DbscanCluster}: a list of the accepted clusters\ncore_selection :: Vector{Bool}: selection of the core points of the cluster\ncluster_selection :: Vector{Bool}: selection of all the cluster points\n\n\n\n\n\n"
},

{
    "location": "#Clustering.update_exploration_list!-Union{Tuple{T}, Tuple{Array{T,N} where N,Array{T,1},BitArray{1}}} where T<:Int64",
    "page": "Home",
    "title": "Clustering.update_exploration_list!",
    "category": "method",
    "text": "update_exploration_list!(adj_list, exploration_list, visited)\n\nUpdate the queue for expanding the cluster\n\nInput\n\nadj_list :: Vector{Int}: indices of the neighboring points\nexploration_list :: Vector{Int}: the indices that  will be explored in the future\nvisited :: Vector{Bool}: a flag to indicate whether a point has been explored already\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Clustering]\nOrder = [:type, :function]"
},

]}
