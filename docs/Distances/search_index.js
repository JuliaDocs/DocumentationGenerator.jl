var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Distances.jl-1",
    "page": "Readme",
    "title": "Distances.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status)(Image: Distances)A Julia package for evaluating distances(metrics) between vectors.This package also provides optimized functions to compute column-wise and pairwise distances, which are often substantially faster than a straightforward loop implementation. (See the benchmark section below for details)."
},

{
    "location": "#Supported-distances-1",
    "page": "Readme",
    "title": "Supported distances",
    "category": "section",
    "text": "Euclidean distance\nSquared Euclidean distance\nCityblock distance\nJaccard distance\nRogers-Tanimoto distance\nChebyshev distance\nMinkowski distance\nHamming distance\nCosine distance\nCorrelation distance\nChi-square distance\nKullback-Leibler divergence\nGeneralized Kullback-Leibler divergence\nRényi divergence\nJensen-Shannon divergence\nMahalanobis distance\nSquared Mahalanobis distance\nBhattacharyya distance\nHellinger distance\nHaversine distance\nMean absolute deviation\nMean squared deviation\nRoot mean squared deviation\nNormalized root mean squared deviation\nBray-Curtis dissimilarity\nBregman divergence For Euclidean distance, Squared Euclidean distance, Cityblock distance, Minkowski distance, and Hamming distance, a weighted version is also provided."
},

{
    "location": "#Basic-Use-1",
    "page": "Readme",
    "title": "Basic Use",
    "category": "section",
    "text": "The library supports three ways of computation: computing the distance between two vectors, column-wise computation, and pairwise computation."
},

{
    "location": "#Computing-the-distance-between-two-vectors-1",
    "page": "Readme",
    "title": "Computing the distance between two vectors",
    "category": "section",
    "text": "Each distance corresponds to a distance type. You can always compute a certain distance between two vectors using the following syntaxr = evaluate(dist, x, y)Here, dist is an instance of a distance type. For example, the type for Euclidean distance is Euclidean (more distance types will be introduced in the next section), then you can compute the Euclidean distance between x and y asr = evaluate(Euclidean(), x, y)Common distances also come with convenient functions for distance evaluation. For example, you may also compute Euclidean distance between two vectors as belowr = euclidean(x, y)"
},

{
    "location": "#Computing-distances-between-corresponding-columns-1",
    "page": "Readme",
    "title": "Computing distances between corresponding columns",
    "category": "section",
    "text": "Suppose you have two m-by-n matrix X and Y, then you can compute all distances between corresponding columns of X and Y in one batch, using the colwise function, asr = colwise(dist, X, Y)The output r is a vector of length n. In particular, ri is the distance between Xi and Yi. The batch computation typically runs considerably faster than calling evaluate column-by-column.Note that either of X and Y can be just a single vector – then the colwise function will compute the distance between this vector and each column of the other parameter."
},

{
    "location": "#Computing-pairwise-distances-1",
    "page": "Readme",
    "title": "Computing pairwise distances",
    "category": "section",
    "text": "Let X and Y respectively have m and n columns. Then the pairwise function computes distances between each pair of columns in X and Y:R = pairwise(dist, X, Y)In the output, R is a matrix of size (m n), such that Rij is the distance between Xi and Yj. Computing distances for all pairs using pairwise function is often remarkably faster than evaluting for each pair individually.If you just want to just compute distances between columns of a matrix X, you can writeR = pairwise(dist, X)This statement will result in an m-by-m matrix, where Rij is the distance between Xi and Xj. pairwise(dist X) is typically more efficient than pairwise(dist X X), as the former will take advantage of the symmetry when dist is a semi-metric (including metric)."
},

{
    "location": "#Computing-column-wise-and-pairwise-distances-inplace-1",
    "page": "Readme",
    "title": "Computing column-wise and pairwise distances inplace",
    "category": "section",
    "text": "If the vector/matrix to store the results are pre-allocated, you may use the storage (without creating a new array) using the following syntax:colwise!(r, dist, X, Y)\npairwise!(R, dist, X, Y)\npairwise!(R, dist, X)Please pay attention to the difference, the functions for inplace computation are colwise and pairwise (instead of colwise and pairwise)."
},

{
    "location": "#Distance-type-hierarchy-1",
    "page": "Readme",
    "title": "Distance type hierarchy",
    "category": "section",
    "text": "The distances are organized into a type hierarchy.At the top of this hierarchy is an abstract class PreMetric, which is defined to be a function d that satisfiesd(x, x) == 0  for all x\nd(x, y) >= 0  for all x, ySemiMetric is a abstract type that refines PreMetric. Formally, a semi-metric is a pre-metric that is also symmetric, asd(x, y) == d(y, x)  for all x, yMetric is a abstract type that further refines SemiMetric. Formally, a metric is a semi-metric that also satisfies triangle inequality, asd(x, z) <= d(x, y) + d(y, z)  for all x, y, zThis type system has practical significance. For example, when computing pairwise distances between a set of vectors, you may only perform computation for half of the pairs, and derive the values immediately for the remaining halve by leveraging the symmetry of semi-metrics.Each distance corresponds to a distance type. The type name and the corresponding mathematical definitions of the distances are listed in the following table.type name convenient syntax math definition\nEuclidean euclidean(x, y) sqrt(sum((x - y) .^ 2))\nSqEuclidean sqeuclidean(x, y) sum((x - y).^2)\nCityblock cityblock(x, y) sum(abs(x - y))\nChebyshev chebyshev(x, y) max(abs(x - y))\nMinkowski minkowski(x, y, p) sum(abs(x - y).^p) ^ (1/p)\nHamming hamming(k, l) sum(k .!= l)\nRogersTanimoto rogerstanimoto(a, b) 2(sum(a&!b) + sum(!a&b)) / (2(sum(a&!b) + sum(!a&b)) + sum(a&b) + sum(!a&!b))\nJaccard jaccard(x, y) 1 - sum(min(x, y)) / sum(max(x, y))\nBrayCurtis braycurtis(x, y) sum(abs(x - y)) / sum(abs(x + y))\nCosineDist cosine_dist(x, y) 1 - dot(x, y) / (norm(x) * norm(y))\nCorrDist corr_dist(x, y) cosine_dist(x - mean(x), y - mean(y))\nChiSqDist chisq_dist(x, y) sum((x - y).^2 / (x + y))\nKLDivergence kl_divergence(p, q) sum(p .* log(p ./ q))\nGenKLDivergence gkl_divergence(x, y) sum(p .* log(p ./ q) - p + q)\nRenyiDivergence renyi_divergence(p, q, k) log(sum( p .* (p ./ q) .^ (k - 1))) / (k - 1)\nJSDivergence js_divergence(p, q) KL(p, m) / 2 + KL(p, m) / 2 with m = (p + q) / 2\nSpanNormDist spannorm_dist(x, y) max(x - y) - min(x - y)\nBhattacharyyaDist bhattacharyya(x, y) -log(sum(sqrt(x .* y) / sqrt(sum(x) * sum(y)))\nHellingerDist hellinger(x, y) sqrt(1 - sum(sqrt(x .* y) / sqrt(sum(x) * sum(y))))\nHaversine haversine(x, y, r) Haversine formula\nMahalanobis mahalanobis(x, y, Q) sqrt((x - y)\' * Q * (x - y))\nSqMahalanobis sqmahalanobis(x, y, Q) (x - y)\' * Q * (x - y)\nMeanAbsDeviation meanad(x, y) mean(abs.(x - y))\nMeanSqDeviation msd(x, y) mean(abs2.(x - y))\nRMSDeviation rmsd(x, y) sqrt(msd(x, y))\nNormRMSDeviation nrmsd(x, y) rmsd(x, y) / (maximum(x) - minimum(x))\nWeightedEuclidean weuclidean(x, y, w) sqrt(sum((x - y).^2 .* w))\nWeightedSqEuclidean wsqeuclidean(x, y, w) sum((x - y).^2 .* w)\nWeightedCityblock wcityblock(x, y, w) sum(abs(x - y) .* w)\nWeightedMinkowski wminkowski(x, y, w, p) sum(abs(x - y).^p .* w) ^ (1/p)\nWeightedHamming whamming(x, y, w) sum((x .!= y) .* w)\nBregman bregman(F, ∇, x, y; inner = LinearAlgebra.dot) F(x) - F(y) - inner(∇(y), x - y)Note: The formulas above are using Julia\'s functions. These formulas are mainly for conveying the math concepts in a concise way. The actual implementation may use a faster way. The arguments x and y are arrays of real numbers; k and l are arrays of distinct elements of any kind; a and b are arrays of Bools; and finally, p and q are arrays forming a discrete probability distribution and are therefore both expected to sum to one."
},

{
    "location": "#Precision-for-Euclidean-and-SqEuclidean-1",
    "page": "Readme",
    "title": "Precision for Euclidean and SqEuclidean",
    "category": "section",
    "text": "For efficiency (see the benchmarks below), Euclidean and SqEuclidean make use of BLAS3 matrix-matrix multiplication to calculate distances.  This corresponds to the following expansion:(x-y)^2 == x^2 - 2xy + y^2However, equality is not precise in the presence of roundoff error, and particularly when x and y are nearby points this may not be accurate.  Consequently, Euclidean and SqEuclidean allow you to supply a relative tolerance to force recalculation:julia> x = reshape([0.1, 0.3, -0.1], 3, 1);\n\njulia> pairwise(Euclidean(), x, x)\n1×1 Array{Float64,2}:\n 7.45058e-9\n\njulia> pairwise(Euclidean(1e-12), x, x)\n1×1 Array{Float64,2}:\n 0.0"
},

{
    "location": "#Benchmarks-1",
    "page": "Readme",
    "title": "Benchmarks",
    "category": "section",
    "text": "The implementation has been carefully optimized based on benchmarks. The script in benchmark/benchmarks.jl defines a benchmark suite for a variety of distances, under column-wise and pairwise settings.Here are benchmarks obtained running Julia 0.6 on a computer with a quad-core Intel Core i5-2500K processor @ 3.3 GHz. The tables below can be replicated using the script in benchmark/print_table.jl."
},

{
    "location": "#Column-wise-benchmark-1",
    "page": "Readme",
    "title": "Column-wise benchmark",
    "category": "section",
    "text": "The table below compares the performance (measured in terms of average elapsed time of each iteration) of a straightforward loop implementation and an optimized implementation provided in Distances.jl. The task in each iteration is to compute a specific distance between corresponding columns in two 200-by-10000 matrices.distance loop colwise gain\nSqEuclidean 0.005460s 0.001676s 3.2582\nEuclidean 0.005513s 0.001681s 3.2792\nCityblock 0.005409s 0.001675s 3.2292\nChebyshev 0.008592s 0.004575s 1.8779\nMinkowski 0.056741s 0.048808s 1.1625\nHamming 0.005320s 0.001670s 3.1847\nCosineDist 0.005663s 0.001697s 3.3378\nCorrDist 0.010000s 0.013904s 0.7192\nChiSqDist 0.009626s 0.004734s 2.0333\nKLDivergence 0.046696s 0.035091s 1.3307\nRenyiDivergence 0.021123s 0.012006s 1.7594\nRenyiDivergence 0.080503s 0.066987s 1.2018\nJSDivergence 0.066404s 0.059564s 1.1148\nBhattacharyyaDist 0.013065s 0.008807s 1.4836\nHellingerDist 0.013013s 0.008679s 1.4993\nWeightedSqEuclidean 0.005534s 0.001676s 3.3028\nWeightedEuclidean 0.005601s 0.001723s 3.2513\nWeightedCityblock 0.005496s 0.001675s 3.2815\nWeightedMinkowski 0.057847s 0.051389s 1.1257\nWeightedHamming 0.005439s 0.001673s 3.2513\nSqMahalanobis 0.134717s 0.019530s 6.8980\nMahalanobis 0.129455s 0.020114s 6.4361\nBrayCurtis 0.005666s 0.001680s 3.3736We can see that using colwise instead of a simple loop yields considerable gain (2x - 4x), especially when the internal computation of each distance is simple. Nonetheless, when the computation of a single distance is heavy enough (e.g. KLDivergence,  RenyiDivergence), the gain is not as significant."
},

{
    "location": "#Pairwise-benchmark-1",
    "page": "Readme",
    "title": "Pairwise benchmark",
    "category": "section",
    "text": "The table below compares the performance (measured in terms of average elapsed time of each iteration) of a straightforward loop implementation and an optimized implementation provided in Distances.jl. The task in each iteration is to compute a specific distance in a pairwise manner between columns in a 100-by-200 and 100-by-250 matrices, which will result in a 200-by-250 distance matrix.distance loop pairwise gain\nSqEuclidean 0.015116s 0.000192s 78.7747\nEuclidean 0.015565s 0.000390s 39.8829\nCityblock 0.015048s 0.001400s 10.7469\nChebyshev 0.023325s 0.010921s 2.1358\nMinkowski 0.143427s 0.121050s 1.1849\nHamming 0.015191s 0.001334s 11.3856\nCosineDist 0.016688s 0.000393s 42.5158\nCorrDist 0.029024s 0.000435s 66.7043\nChiSqDist 0.026035s 0.012194s 2.1351\nKLDivergence 0.115800s 0.086968s 1.3315\nRenyiDivergence 0.055551s 0.029628s 1.8749\nRenyiDivergence 0.205270s 0.163031s 1.2591\nJSDivergence 0.165078s 0.148902s 1.1086\nBhattacharyyaDist 0.035493s 0.022429s 1.5824\nHellingerDist 0.035028s 0.021867s 1.6019\nWeightedSqEuclidean 0.016330s 0.000276s 59.2117\nWeightedEuclidean 0.016600s 0.000508s 32.6478\nWeightedCityblock 0.015604s 0.001816s 8.5913\nWeightedMinkowski 0.159052s 0.128427s 1.2385\nWeightedHamming 0.015212s 0.001634s 9.3110\nSqMahalanobis 0.607881s 0.000365s 1665.3228\nMahalanobis 0.623032s 0.000604s 1031.9581\nBrayCurtis 0.015843s 0.002273s 6.9695For distances of which a major part of the computation is a quadratic form (e.g. Euclidean, CosineDist, Mahalanobis), the performance can be drastically improved by restructuring the computation and delegating the core part to GEMM in BLAS. The use of this strategy can easily lead to 100x performance gain over simple loops (see the highlighted part of the table above)."
},

{
    "location": "autodocs/#Distances.Bregman",
    "page": "Docstrings",
    "title": "Distances.Bregman",
    "category": "type",
    "text": "Implements the Bregman divergence, a friendly introduction to which can be found here.  Bregman divergences are a minimal implementation of the \"mean-minimizer\" property. \n\nIt is assumed that the (convex differentiable) function F maps vectors (of any type or size) to real numbers.  The inner product used is Base.dot, but one can be passed in either by defining inner or by  passing in a keyword argument. If an analytic gradient isn\'t available, Julia offers a suite  of good automatic differentiation packages. \n\nfunction evaluate(dist::Bregman, p::AbstractVector, q::AbstractVector)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Distances.Euclidean-Tuple{}",
    "page": "Docstrings",
    "title": "Distances.Euclidean",
    "category": "method",
    "text": "Euclidean([thresh])\n\nCreate a euclidean metric.\n\nWhen computing distances among large numbers of points, it can be much more efficient to exploit the formula\n\n(x-y)^2 = x^2 - 2xy + y^2\n\nHowever, this can introduce roundoff error. thresh (which defaults to 0) specifies the relative square-distance tolerance on 2xy compared to x^2 + y^2 to force recalculation of the distance using the more precise direct (elementwise-subtraction) formula.\n\nExample:\n\njulia> x = reshape([0.1, 0.3, -0.1], 3, 1);\n\njulia> pairwise(Euclidean(), x, x)\n1×1 Array{Float64,2}:\n 7.45058e-9\n\njulia> pairwise(Euclidean(1e-12), x, x)\n1×1 Array{Float64,2}:\n 0.0\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Distances.Haversine",
    "page": "Docstrings",
    "title": "Distances.Haversine",
    "category": "type",
    "text": "Haversine(radius)\n\nThe haversine distance between two locations on a sphere of given radius.\n\nLocations are described with longitude and latitude in degrees. The computed distance has the same units as that of the radius.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Distances.RenyiDivergence",
    "page": "Docstrings",
    "title": "Distances.RenyiDivergence",
    "category": "type",
    "text": "RenyiDivergence(α::Real)\nrenyi_divergence(P, Q, α::Real)\n\nCreate a Rényi premetric of order α.\n\nRényi defined a spectrum of divergence measures generalising the Kullback–Leibler divergence (see KLDivergence). The divergence is not a semimetric as it is not symmetric. It is parameterised by a parameter α, and is equal to Kullback–Leibler divergence at α = 1:\n\nAt α = 0, R_0(P  Q) = -log(sum_i p_i  0(q_i))\n\nAt α = 1, R_1(P  Q) = sum_i p_i  0(p_i log(p_i  q_i))\n\nAt α = ∞, R_(P  Q) = log(sup_i p_i  0(p_i  q_i))\n\nOtherwise R_α(P  Q) = log(sum_i p_i  0((p_i ^ α)  (q_i ^ (α - 1)))  (α - 1)\n\nExample:\n\njulia> x = reshape([0.1, 0.3, 0.4, 0.2], 2, 2);\n\njulia> pairwise(RenyiDivergence(0), x, x)\n2×2 Array{Float64,2}:\n 0.0  0.0\n 0.0  0.0\n\njulia> pairwise(Euclidean(2), x, x)\n2×2 Array{Float64,2}:\n 0.0       0.577315\n 0.655407  0.0\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Distances.SqEuclidean-Tuple{}",
    "page": "Docstrings",
    "title": "Distances.SqEuclidean",
    "category": "method",
    "text": "SqEuclidean([thresh])\n\nCreate a squared-euclidean semi-metric. For the meaning of thresh, see Euclidean.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Distances.renyi_divergence",
    "page": "Docstrings",
    "title": "Distances.renyi_divergence",
    "category": "function",
    "text": "RenyiDivergence(α::Real)\nrenyi_divergence(P, Q, α::Real)\n\nCreate a Rényi premetric of order α.\n\nRényi defined a spectrum of divergence measures generalising the Kullback–Leibler divergence (see KLDivergence). The divergence is not a semimetric as it is not symmetric. It is parameterised by a parameter α, and is equal to Kullback–Leibler divergence at α = 1:\n\nAt α = 0, R_0(P  Q) = -log(sum_i p_i  0(q_i))\n\nAt α = 1, R_1(P  Q) = sum_i p_i  0(p_i log(p_i  q_i))\n\nAt α = ∞, R_(P  Q) = log(sup_i p_i  0(p_i  q_i))\n\nOtherwise R_α(P  Q) = log(sum_i p_i  0((p_i ^ α)  (q_i ^ (α - 1)))  (α - 1)\n\nExample:\n\njulia> x = reshape([0.1, 0.3, 0.4, 0.2], 2, 2);\n\njulia> pairwise(RenyiDivergence(0), x, x)\n2×2 Array{Float64,2}:\n 0.0  0.0\n 0.0  0.0\n\njulia> pairwise(Euclidean(2), x, x)\n2×2 Array{Float64,2}:\n 0.0       0.577315\n 0.655407  0.0\n\n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Distances]\nOrder = [:type, :function]"
},

]}
