var documenterSearchIndex = {"docs": [

{
    "location": "#DelayEmbeddings.AbstractEmbedding",
    "page": "Home",
    "title": "DelayEmbeddings.AbstractEmbedding",
    "category": "type",
    "text": "AbstractEmbedding\n\nSuper-type of embedding methods. Use subtypes(AbstractEmbedding) for available methods.\n\n\n\n\n\n"
},

{
    "location": "#DelayEmbeddings.AbstractNeighborhood",
    "page": "Home",
    "title": "DelayEmbeddings.AbstractNeighborhood",
    "category": "type",
    "text": "AbstractNeighborhood\n\nSupertype of methods for deciding the neighborhood of points for a given point.\n\nConcrete subtypes:\n\nFixedMassNeighborhood(K::Int) : The neighborhood of a point consists of the K nearest neighbors of the point.\nFixedSizeNeighborhood(ε::Real) : The neighborhood of a point consists of all neighbors that have distance < ε from the point.\n\nSee neighborhood for more.\n\n\n\n\n\n"
},

{
    "location": "#DelayEmbeddings.Dataset",
    "page": "Home",
    "title": "DelayEmbeddings.Dataset",
    "category": "type",
    "text": "Dataset{D, T} <: AbstractDataset{D,T}\n\nA dedicated interface for datasets. It contains equally-sized datapoints of length D, represented by SVector{D, T}.\n\nWhen indexed with 1 index, a dataset is like a vector of datapoints.\n\nWhen indexed with 2 indices it behaves like a matrix that has each of the columns be the timeseries of each of the dynamic variables.\n\nDescription of indexing\n\nIn the following let i, j be integers,  typeof(data) <: AbstractDataset and v1, v2 be <: AbstractVector{Int} (v1, v2 could also be ranges).\n\ndata[i] gives the ith datapoint (returns an SVector)\ndata[v1] will return a vector of datapoints\ndata[v1, :] using a Colon as a second index will return a Dataset of these points\ndata[:, j] gives the jth variable timeseries, as Vector\ndata[v1, v2] returns a Dataset with the appropriate entries (first indices being \"time\"/point index, while second being dynamic variables)\ndata[i, j] value of the jth variable, at the ith timepoint\n\nUse Matrix(dataset) or Dataset(matrix) to convert. It is assumed that each column of the matrix is one dynamic variable. If you have various timeseries vectors x, y, z, ... pass them like Dataset(x, y, z, ...). You can use columns(dataset) to obtain the reverse, i.e. all columns of the dataset in a tuple.\n\n\n\n\n\n"
},

{
    "location": "#DelayEmbeddings.DelayEmbedding",
    "page": "Home",
    "title": "DelayEmbeddings.DelayEmbedding",
    "category": "type",
    "text": "DelayEmbedding(γ, τ) -> `embedding`\n\nReturn a delay coordinates embedding structure to be used as a functor, given a timeseries and some index. Calling\n\nembedding(s, n)\n\nwill create the n-th reconstructed vector of the embedded space, which has γ temporal neighbors with delay(s) τ. See reconstruct for more.\n\nBe very careful when choosing n, because @inbounds is used internally.\n\n\n\n\n\n"
},

{
    "location": "#DelayEmbeddings.MTDelayEmbedding",
    "page": "Home",
    "title": "DelayEmbeddings.MTDelayEmbedding",
    "category": "type",
    "text": "MTDelayEmbedding(γ, τ, B) -> `embedding`\n\nReturn a delay coordinates embedding structure to be used as a functor, given multiple timeseries (B in total), either as a Dataset or a SizedArray (see reconstruct), and some index. Calling\n\nembedding(s, n)\n\nwill create the n-th reconstructed vector of the embedded space, which has γ temporal neighbors with delay(s) τ. See reconstruct for more.\n\nBe very careful when choosing n, because @inbounds is used internally.\n\n\n\n\n\n"
},

{
    "location": "#DelayEmbeddings.columns",
    "page": "Home",
    "title": "DelayEmbeddings.columns",
    "category": "function",
    "text": "columns(dataset) -> x, y, z, ...\n\nReturn the individual columns of the dataset.\n\n\n\n\n\n"
},

{
    "location": "#DelayEmbeddings.embed-Tuple{Any,Any,Any}",
    "page": "Home",
    "title": "DelayEmbeddings.embed",
    "category": "method",
    "text": "embed(s, D, τ)\n\nPerform a delay coordinates embedding on signal s with embedding dimension D and delay time τ. The result is returned as a Dataset, which is a vector of static vectors.\n\nSee reconstruct for an advanced version that supports multiple delay times and can reconstruct multiple timeseries efficiently.\n\n\n\n\n\n"
},

{
    "location": "#DelayEmbeddings.estimate_delay",
    "page": "Home",
    "title": "DelayEmbeddings.estimate_delay",
    "category": "function",
    "text": "estimate_delay(s, method::String [, τs = 1:2:100]; kwargs...) -> τ\n\nEstimate an optimal delay to be used in reconstruct or embed. The method can be one of the following:\n\n\"ac_zero\" : first delay at which the auto-correlation function becomes <0.\n\"ac_min\" : delay of first minimum of the auto-correlation function.\n\"mi_min\" : delay of first minimum of mutual information of s with itself (shifted for various τs). Keywords nbins, binwidth are propagated into mutualinformation.\n\"exp_decay\" : exponential_decay_fit of the correlation function rounded  to an integer (uses least squares on c(t) = exp(-t/τ) to find τ).\n\"exp_extrema\" : same as above but the exponential fit is done to the absolute value of the local extrema of the correlation function.\n\nBoth the mutual information and correlation function (autocor) are computed only for delays τs. This means that the min methods can never return the first value of τs!\n\n\n\n\n\n"
},

{
    "location": "#DelayEmbeddings.estimate_dimension",
    "page": "Home",
    "title": "DelayEmbeddings.estimate_dimension",
    "category": "function",
    "text": "estimate_dimension(s::AbstractVector, τ::Int, γs = 1:5, method = \"afnn\"; kwargs...)\n\nCompute a quantity that can estimate an optimal amount of temporal neighbors γ to be used in reconstruct or embed.\n\nDescription\n\nGiven the scalar timeseries s and the embedding delay τ compute a quantity for each γ ∈ γs based on the \"nearest neighbors\" in the embedded time series.\n\nThe quantity that is calculated depends on the algorithm defined by the string method:\n\n\"afnn\" (default) is Cao\'s \"Averaged False Nearest Neighbors\" method [1], which   gives a ratio of distances between nearest neighbors. This ratio saturates   around 1.0 near the optimal value of γ (see afnn).\n\"fnn\" is Kennel\'s \"False Nearest Neighbors\" method [2], which gives the   number of points that cease to be \"nearest neighbors\" when the dimension   increases. This number drops down to zero near the optimal value of γ.   This method accepts the keyword arguments rtol and atol, which stand   for the \"tolerances\" required by Kennel\'s algorithm (see fnn).\n\"f1nn\" is Krakovská\'s \"False First Nearest Neighbors\" method [3], which   gives the ratio of pairs of points that cease to be \"nearest neighbors\"   when the dimension increases. This number drops down to zero near the   optimal value of γ (see f1nn).\n\n\"afnn\" and \"f1nn\" also support the metric keyword, which can be any of Cityblock(), Euclidean(), Chebyshev(). This metric is used both for computing the nearest neighbors (KDTrees) as well as the distances necessary for Cao\'s method (eqs. (2, 3) of [1]). Defaults to Euclidean() (note that [1] used Chebyshev).\n\nPlease be aware that in DynamicalSystems.jl γ stands for the amount of temporal neighbors and not the embedding dimension (D = γ + 1, see also embed).\n\nReferences\n\n[1] : Liangyue Cao, Physica D, pp. 43-50 (1997)\n\n[2] : M. Kennel et al., Phys. Review A 45(6), 3403-3411 (1992).\n\n[3] : Anna Krakovská et al., J. Complex Sys. 932750 (2015)\n\n\n\n\n\n"
},

{
    "location": "#DelayEmbeddings.exponential_decay_fit",
    "page": "Home",
    "title": "DelayEmbeddings.exponential_decay_fit",
    "category": "function",
    "text": "exponential_decay_fit(x, y, weight = :equal) -> τ\n\nPerform a least square fit of the form y = exp(-x/τ) and return τ. Taken from:  http://mathworld.wolfram.com/LeastSquaresFittingExponential.html. Assumes equal lengths of x, y and that y ≥ 0.\n\nTo use the method that gives more weight to small values of y, use weight = :small.\n\n\n\n\n\n"
},

{
    "location": "#DelayEmbeddings.maxima-Union{Tuple{AbstractDataset{D,T}}, Tuple{T}, Tuple{D}} where T<:Real where D",
    "page": "Home",
    "title": "DelayEmbeddings.maxima",
    "category": "method",
    "text": "maxima(dataset)\n\nReturn an SVector that contains the maximum elements of each timeseries of the dataset.\n\n\n\n\n\n"
},

{
    "location": "#DelayEmbeddings.min_pairwise_distance-Tuple{AbstractArray{T,2} where T}",
    "page": "Home",
    "title": "DelayEmbeddings.min_pairwise_distance",
    "category": "method",
    "text": "min_pairwise_distance(data) -> (min_pair, min_dist)\n\nCalculate the minimum pairwise distance in the data (Matrix, Vector{Vector} or Dataset). Return the index pair of the datapoints that have the minimum distance, as well as its value.\n\n\n\n\n\n"
},

{
    "location": "#DelayEmbeddings.minima-Union{Tuple{AbstractDataset{D,T}}, Tuple{T}, Tuple{D}} where T<:Real where D",
    "page": "Home",
    "title": "DelayEmbeddings.minima",
    "category": "method",
    "text": "minima(dataset)\n\nReturn an SVector that contains the minimum elements of each timeseries of the dataset.\n\n\n\n\n\n"
},

{
    "location": "#DelayEmbeddings.minmaxima-Union{Tuple{AbstractDataset{D,T}}, Tuple{T}, Tuple{D}} where T<:Real where D",
    "page": "Home",
    "title": "DelayEmbeddings.minmaxima",
    "category": "method",
    "text": "minmaxima(dataset)\n\nReturn minima(dataset), maxima(dataset) without doing the computation twice.\n\n\n\n\n\n"
},

{
    "location": "#DelayEmbeddings.mutualinformation-Union{Tuple{T}, Tuple{AbstractArray{T,1},AbstractArray{Int64,1}}} where T",
    "page": "Home",
    "title": "DelayEmbeddings.mutualinformation",
    "category": "method",
    "text": "mutualinformation(s, τs[; nbins, binwidth])\n\nCalculate the mutual information between the time series s and its images delayed by τ points for τ ∈ τs, using an improvement of the method outlined by Fraser & Swinney in [1].\n\nDescription\n\nThe joint space of s and its τ-delayed image (sτ) is partitioned as a rectangular grid, and the mutual information is computed from the joint and marginal frequencies of s and sτ in the grid as defined in [1]. The mutual information values are returned in a vector of the same length as τs.\n\nIf any of the optional keyword parameters is given, the grid will be a homogeneous partition of the space where s and sτ are defined. The margins of that partition will be divided in a number of bins equal to nbins, such that the width of each bin will be binwidth, and the range of nonzero values of s will be in the centre. If only of those two parameters is given, the other will be automatically calculated to adjust the size of the grid to the area where s and sτ are nonzero.\n\nIf no parameter is given, the space will be partitioned by a recursive bisection algorithm based on the method given in [1].\n\nNotice that the recursive method of [1] evaluates the joint frequencies of s and sτ in each cell resulting from a partition, and stops when the data points are uniformly distributed across the sub-partitions of the following levels. For performance and stability reasons, the automatic partition method implemented in this function is only used to divide the axes of the grid, using the marginal frequencies of s.\n\nReferences\n\n[1]: Fraser A.M. & Swinney H.L. \"Independent coordinates for strange attractors from mutual information\" Phys. Rev. A 33(2), 1986, 1134:1140.\n\n\n\n\n\n"
},

{
    "location": "#DelayEmbeddings.neighborhood",
    "page": "Home",
    "title": "DelayEmbeddings.neighborhood",
    "category": "function",
    "text": "neighborhood(point, tree, ntype)\nneighborhood(point, tree, ntype, n::Int, w::Int = 1)\n\nReturn a vector of indices which are the neighborhood of point in some data, where the tree was created using tree = KDTree(data [, metric]). The ntype is the type of neighborhood and can be any subtype of AbstractNeighborhood.\n\nUse the second method when the point belongs in the data, i.e. point = data[n]. Then w stands for the Theiler window (positive integer). Only points that have index abs(i - n) ≥ w are returned as a neighborhood, to exclude close temporal neighbors. The default w=1 is the case of excluding the point itself.\n\nReferences\n\nneighborhood simply interfaces the functions knn and inrange from NearestNeighbors.jl by using the argument ntype.\n\n\n\n\n\n"
},

{
    "location": "#DelayEmbeddings.orthonormal",
    "page": "Home",
    "title": "DelayEmbeddings.orthonormal",
    "category": "function",
    "text": "orthonormal(D, k) -> ws\n\nReturn a matrix ws with k columns, each being an D-dimensional orthonormal vector.\n\nAlways returns SMatrix for stability reasons.\n\n\n\n\n\n"
},

{
    "location": "#DelayEmbeddings.reconstruct-Union{Tuple{T}, Tuple{AbstractArray{T,1},Any,Any}} where T",
    "page": "Home",
    "title": "DelayEmbeddings.reconstruct",
    "category": "method",
    "text": "reconstruct(s, γ, τ)\n\nReconstruct s using the delay coordinates embedding with γ temporal neighbors and delay τ and return the result as a Dataset.\n\nSee embed for the version that accepts the embedding dimension D = γ+1 directly.\n\nDescription\n\nSingle Timeseries\n\nIf τ is an integer, then the n-th entry of the embedded space is\n\n(s(n) s(n+tau) s(n+2tau) dots s(n+γtau))\n\nIf instead τ is a vector of integers, so that length(τ) == γ, then the n-th entry is\n\n(s(n) s(n+tau1) s(n+tau2) dots s(n+tauγ))\n\nThe reconstructed dataset can have same invariant quantities (like e.g. lyapunov exponents) with the original system that the timeseries were recorded from, for proper γ and τ. This is known as the Takens embedding theorem [1, 2]. The case of different delay times allows reconstructing systems with many time scales, see [3].\n\nNotice - The dimension of the returned dataset (i.e. embedding dimension) is γ+1!\n\nMultiple Timeseries\n\nTo make a reconstruction out of a multiple timeseries (i.e. trajectory) the number of timeseries must be known by type, so s can be either:\n\ns::AbstractDataset{B}\ns::SizedAray{A, B}\n\nIf the trajectory is for example (x y) and τ is integer, then the n-th entry of the embedded space is\n\n(x(n) y(n) x(n+tau) y(n+tau) dots x(n+γtau) y(n+γtau))\n\nIf τ is an AbstractMatrix{Int}, so that size(τ) == (γ, B), then we have\n\n(x(n) y(n) x(n+tau1 1) y(n+tau1 2) dots x(n+tauγ 1) y(n+tauγ 2))\n\nNotice - The dimension of the returned dataset is (γ+1)*B!\n\nReferences\n\n[1] : F. Takens, Detecting Strange Attractors in Turbulence — Dynamical Systems and Turbulence, Lecture Notes in Mathematics 366, Springer (1981)\n\n[2] : T. Sauer et al., J. Stat. Phys. 65, pp 579 (1991)\n\n[3] : K. Judd & A. Mees, Physica D 120, pp 273 (1998)\n\n\n\n\n\n"
},

{
    "location": "#DelayEmbeddings.stochastic_indicator-Union{Tuple{T}, Tuple{AbstractArray{T,1},Any}, Tuple{AbstractArray{T,1},Any,Any}} where T",
    "page": "Home",
    "title": "DelayEmbeddings.stochastic_indicator",
    "category": "method",
    "text": "stochastic_indicator(s::AbstractVector, τ:Int, γs = 1:4) -> E₂s\n\nCompute an estimator for apparent randomness in a reconstruction with γs temporal neighbors.\n\nDescription\n\nGiven the scalar timeseries s and the embedding delay τ compute the values of E₂ for each γ ∈ γs, according to Cao\'s Method (eq. 5 of [1]).\n\nUse this function to confirm that the input signal is not random and validate the results of estimate_dimension. In the case of random signals, it should be E₂ ≈ 1 ∀ γ.\n\nReferences\n\n[1] : Liangyue Cao, Physica D, pp. 43-50 (1997)\n\n\n\n\n\n"
},

{
    "location": "#DelayEmbeddings._bisect-Union{Tuple{AbstractArray{T,1}}, Tuple{T}} where T",
    "page": "Home",
    "title": "DelayEmbeddings._bisect",
    "category": "method",
    "text": "_bisect(s)\n\nCreate a partition histogram of the sorted series s with a partition of its space defined by a recursive bisection method. The first level partition divides s in two segments with equal number of points; each partition is divided into two further sub-pantitions, etc., until the distribution of the points in the highest level subpartition is homogeneous.\n\n\n\n\n\n"
},

{
    "location": "#DelayEmbeddings._equalbins-Union{Tuple{AbstractArray{T,1}}, Tuple{T}} where T",
    "page": "Home",
    "title": "DelayEmbeddings._equalbins",
    "category": "method",
    "text": "_equalbins(s[; nbins, binwidth])\n\nCreate a histogram of the sorted series s with bins of the same width. Either the number of bins (nbins) or their width (binwidth) must be given as keyword argument (but not both).\n\n\n\n\n\n"
},

{
    "location": "#DelayEmbeddings._frequencies!-Union{Tuple{T}, Tuple{AbstractArray{T,1},AbstractArray{T,1} where T,AbstractArray{T,1} where T}} where T",
    "page": "Home",
    "title": "DelayEmbeddings._frequencies!",
    "category": "method",
    "text": "_frequencies!(f, s, edges)\n\nCalculate a histogram of values of s along the bins defined by edges. Both s and edges must be sorted ascendingly. The frequencies (counts) of s in each bin will be stored in the pre-allocated vector f.\n\n\n\n\n\n"
},

{
    "location": "#DelayEmbeddings._mutualinfo!-Tuple{AbstractArray{T,1} where T,AbstractArray{T,1} where T,AbstractArray{#s1802,1} where #s1802<:Integer,AbstractArray{T,1} where T}",
    "page": "Home",
    "title": "DelayEmbeddings._mutualinfo!",
    "category": "method",
    "text": "_mutualinfo!(f, sτ, edges, bins0)\n\nCalculate the mutual information between the distribution of the delayed time series sτ and its original image.\n\nThe two series are partitioned in a joint histogram with axes divided by the points given in edges; the distribution of the original image is given by bins0. The values of sτ must be arranged such that all the points of the bin (1,j) are contained in the first bins0[1] positions, the points of the bin (2,j) are contained in the followingbins[2]` positions, etc.\n\nThe vector f is used as a placeholder to pre-allocate the histogram.\n\n\n\n\n\n"
},

{
    "location": "#DelayEmbeddings._uniformtest-Tuple{Any}",
    "page": "Home",
    "title": "DelayEmbeddings._uniformtest",
    "category": "method",
    "text": "_uniformtest(s)\n\nTest uniformity in the values of the sorted vector s.\n\n\n\n\n\n"
},

{
    "location": "#DelayEmbeddings.afnn-Union{Tuple{T}, Tuple{AbstractArray{T,1},Int64}, Tuple{AbstractArray{T,1},Int64,Any}, Tuple{AbstractArray{T,1},Int64,Any,Any}} where T",
    "page": "Home",
    "title": "DelayEmbeddings.afnn",
    "category": "method",
    "text": "afnn(s::AbstractVector, τ:Int, γs = 1:5, metric=Euclidean())\n\nCompute the parameter E₁ of Cao\'s \"averaged false nearest neighbors\" method for determining the minimum embedding dimension of the time series s, with a sequence of τ-delayed temporal neighbors [1].\n\nDescription\n\nGiven the scalar timeseries s and the embedding delay τ compute the values of E₁ for each γ ∈ γs, according to Cao\'s Method (eq. 3 of [1]).\n\nThis quantity is a ratio of the averaged distances between the nearest neighbors of the reconstructed time series, which quantifies the increment of those distances when the number of temporal neighbors changes from γ to γ+1.\n\nPlease be aware that in DynamicalSystems.jl γ stands for the amount of temporal neighbors and not the embedding dimension (D = γ + 1, see also embed).\n\nReturn the vector of all computed E₁s. To estimate a good value for γ from this, find γ for which the value E₁ saturates at some value around 1.\n\nNote: This method does not work for datasets with perfectly periodic signals.\n\nSee also: estimate_dimension, fnn, f1nn.\n\nReferences\n\n[1] : Liangyue Cao, Physica D, pp. 43-50 (1997)\n\n\n\n\n\n"
},

{
    "location": "#DelayEmbeddings.f1nn",
    "page": "Home",
    "title": "DelayEmbeddings.f1nn",
    "category": "function",
    "text": "f1nn(s::AbstractVector, τ:Int, γs = 1:5, metric = Euclidean())\n\nCalculate the ratio of \"false first nearest neighbors\" (FFNN) of the datasets created from s with a sequence of τ-delayed temporal neighbors.\n\nDescription\n\nGiven a dataset made by embedding s with γ temporal neighbors and delay τ, the \"first nearest neighbors\" (FFNN) are the pairs of points that are nearest to each other at dimension γ that cease to be nearest neighbors at dimension γ+1 [1].\n\nThe returned value is a vector with the ratio between the number of FFNN and the number of points in the dataset for each γ ∈ γs. The optimal value for γ is found at the point where this ratio approaches zero.\n\nPlease be aware that in DynamicalSystems.jl γ stands for the amount of temporal neighbors and not the embedding dimension (D = γ + 1, see also embed).\n\nSee also: estimate_dimension, afnn, fnn.\n\nReferences\n\n[1] : Anna Krakovská et al., \"Use of false nearest neighbours for selecting variables and embedding parameters for state space reconstruction\", J Complex Sys 932750 (2015), DOI: 10.1155/2015/932750\n\n\n\n\n\n"
},

{
    "location": "#DelayEmbeddings.fnn",
    "page": "Home",
    "title": "DelayEmbeddings.fnn",
    "category": "function",
    "text": "fnn(s::AbstractVector, τ:Int, γs = 1:5; rtol=10.0, atol=2.0)\n\nCalculate the number of \"false nearest neighbors\" (FNN) of the datasets created from s with a sequence of τ-delayed temporal neighbors.\n\nDescription\n\nGiven a dataset made by embedding s with γ temporal neighbors and delay τ, the \"false nearest neighbors\" (FNN) are the pairs of points that are nearest to each other at dimension γ, but are separated at dimension γ+1. Kennel\'s criteria for detecting FNN are based on a threshold for the relative increment of the distance between the nearest neighbors (rtol, eq. 4 in [1]), and another threshold for the ratio between the increased distance and the \"size of the attractor\" (atol, eq. 5 in [1]). These thresholds are given as keyword arguments.\n\nThe returned value is a vector with the number of FNN for each γ ∈ γs. The optimal value for γ is found at the point where the number of FNN approaches zero.\n\nPlease be aware that in DynamicalSystems.jl γ stands for the amount of temporal neighbors and not the embedding dimension (D = γ + 1, see also embed).\n\nSee also: estimate_dimension, afnn, f1nn.\n\nReferences\n\n[1] : M. Kennel et al., \"Determining embedding dimension for phase-space reconstruction using a geometrical construction\", Phys. Review A 45(6), 3403-3411 (1992).\n\n\n\n\n\n"
},

{
    "location": "#DelayEmbeddings.localextrema-Tuple{Any}",
    "page": "Home",
    "title": "DelayEmbeddings.localextrema",
    "category": "method",
    "text": "localextrema(y) -> max_ind, min_ind\n\nFind the local extrema of given array y, by scanning point-by-point. Return the indices of the maxima (max_ind) and the indices of the minima (min_ind).\n\n\n\n\n\n"
},

{
    "location": "#DelayEmbeddings.svd-Tuple{AbstractDataset}",
    "page": "Home",
    "title": "DelayEmbeddings.svd",
    "category": "method",
    "text": "svd(d::AbstractDataset) -> U, S, Vtr\n\nPerform singular value decomposition on the dataset.\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [DelayEmbeddings]\nOrder = [:type, :function]"
},

]}
