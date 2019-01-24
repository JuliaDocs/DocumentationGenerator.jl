var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#GeoStatsDevTools.jl-1",
    "page": "Readme",
    "title": "GeoStatsDevTools.jl",
    "category": "section",
    "text": "[![][travis-img]][travis-url] [![][julia-pkg-img]][julia-pkg-url] [![][codecov-img]][codecov-url]This package contains developer tools for the GeoStats.jl framework. It is intended to be used in conjunction with GeoStatsBase.jl to speed up the development of new solvers. A quick overview of the tools defined in the package is provided in the GeoStats.jl documentation."
},

{
    "location": "#Asking-for-help-1",
    "page": "Readme",
    "title": "Asking for help",
    "category": "section",
    "text": "If you have any questions, please contact our community on the gitter channel.[travis-img]: https://travis-ci.org/juliohm/GeoStatsDevTools.jl.svg?branch=master [travis-url]: https://travis-ci.org/juliohm/GeoStatsDevTools.jl[julia-pkg-img]: http://pkg.julialang.org/badges/GeoStatsDevTools_0.7.svg [julia-pkg-url]: http://pkg.julialang.org/?pkg=GeoStatsDevTools[codecov-img]: https://codecov.io/gh/juliohm/GeoStatsDevTools.jl/branch/master/graph/badge.svg [codecov-url]: https://codecov.io/gh/juliohm/GeoStatsDevTools.jl"
},

{
    "location": "autodocs/#GeoStatsDevTools.BallNeighborhood",
    "page": "Docstrings",
    "title": "GeoStatsDevTools.BallNeighborhood",
    "category": "type",
    "text": "BallNeighborhood(domain, radius)\n\nA ball neighborhood of a given radius on a spatial domain.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsDevTools.CylinderNeighborhood",
    "page": "Docstrings",
    "title": "GeoStatsDevTools.CylinderNeighborhood",
    "category": "type",
    "text": "CylinderNeighborhood(domain, radius, height)\n\nA cylinder neighborhood with a given radius and height on a spatial domain.\n\nNotes\n\nThe height parameter is only half of the actual cylinder height.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsDevTools.DirectionPartitioner",
    "page": "Docstrings",
    "title": "GeoStatsDevTools.DirectionPartitioner",
    "category": "type",
    "text": "DirectionPartitioner(direction; atol=20., btol=.95)\n\nA method for partitioning spatial data along a given direction with angle tolerance atol in degrees and bandwidth tolerance btol.\n\n      ________________\n     /        | btol\n    /         |             ILLUSTRATION OF DIRECTION TOLERANCES\n    ----------------->\n    \\ ) atol\n     \\________________\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsDevTools.Ellipsoidal",
    "page": "Docstrings",
    "title": "GeoStatsDevTools.Ellipsoidal",
    "category": "type",
    "text": "Ellipsoidal(semiaxes, angles)\n\nA distance defined by an ellipsoid with given semiaxes and rotation angles.\n\nFor 2D ellipsoids, there are two semiaxes and one rotation angle.\nFor 3D ellipsoids, there are three semiaxes and three rotation angles.\n\nExamples\n\n2D ellipsoid making 45ᵒ with the horizontal axis:\n\njulia> Ellipsoidal([1.0,0.5], [π/2])\n\n3D ellipsoid rotated by 45ᵒ in the xy plane:\n\njulia> Ellipsoidal([1.0,0.5,0.5], [π/2,0.0,0.0])\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsDevTools.EmpiricalDistribution",
    "page": "Docstrings",
    "title": "GeoStatsDevTools.EmpiricalDistribution",
    "category": "type",
    "text": "EmpiricalDistribution(values)\n\nAn empirical distribution holding continuous values.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsDevTools.GeoDataFrame",
    "page": "Docstrings",
    "title": "GeoStatsDevTools.GeoDataFrame",
    "category": "type",
    "text": "GeoDataFrame(data, coordnames)\n\nA dataframe object data with additional metadata for tracking the columns coordnames that represent spatial coordinates.\n\nExamples\n\nIf the data was already loaded in a normal DataFrame data, and there exists columns named x, y and z, wrap the data and specify the column names:\n\njulia> GeoDataFrame(data, [:x,:y,:z])\n\nAlternatively, load the data directly into a GeoDataFrame object by using the method readgeotable.\n\nNotes\n\nThis type is a lightweight wrapper over Julia\'s DataFrame types. No additional storage is required other than a vector of symbols with the columns names representing spatial coordinates.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsDevTools.HierarchicalPartitioner",
    "page": "Docstrings",
    "title": "GeoStatsDevTools.HierarchicalPartitioner",
    "category": "type",
    "text": "HierarchicalPartitioner(first, second)\n\nA partitioning method in which a first partition is applied and then a second partition is applied to each subset of the first.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsDevTools.LocalNeighborSearcher",
    "page": "Docstrings",
    "title": "GeoStatsDevTools.LocalNeighborSearcher",
    "category": "type",
    "text": "LocalNeighborSearcher(domain, K, neighborhood, path)\n\nA search method that finds at most K neighbors in neighborhood of domain with a search path.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsDevTools.NearestNeighborSearcher",
    "page": "Docstrings",
    "title": "GeoStatsDevTools.NearestNeighborSearcher",
    "category": "type",
    "text": "NearestNeighborSearcher(domain, K, [metric])\n\nA search method that finds at most K nearest neighbors in domain according to metric (default to Euclidean()).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsDevTools.PlanePartitioner",
    "page": "Docstrings",
    "title": "GeoStatsDevTools.PlanePartitioner",
    "category": "type",
    "text": "PlanePartitioner(normal; tol=1e-6)\n\nA method for partitioning spatial data into a family of hyperplanes defined by a normal direction. Two points x and y belong to the same hyperplane when (x - y) ⋅ normal < tol.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsDevTools.PointSet",
    "page": "Docstrings",
    "title": "GeoStatsDevTools.PointSet",
    "category": "type",
    "text": "PointSet(coords)\n\nA set of points with coordinate matrix coords. The number of rows of the matrix is the dimensionality of the domain whereas the number of columns is the number of points in the set.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsDevTools.PointSetData",
    "page": "Docstrings",
    "title": "GeoStatsDevTools.PointSetData",
    "category": "type",
    "text": "PointSetData(data, coords)\n\nSpatial data georeferenced with coordinate matrix coords. The data argument is a dictionary mapping variable names to Julia arrays with the actual data.\n\nSee also: PointSet\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsDevTools.RandomPath",
    "page": "Docstrings",
    "title": "GeoStatsDevTools.RandomPath",
    "category": "type",
    "text": "RandomPath(domain)\n\nA random path on a spatial domain.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsDevTools.RegularGrid",
    "page": "Docstrings",
    "title": "GeoStatsDevTools.RegularGrid",
    "category": "type",
    "text": "RegularGrid(dims, origin, spacing)\n\nA regular grid with dimensions dims, lower left corner at origin and cell spacing spacing. The three arguments must have the same length.\n\nRegularGrid(start, finish, dims=dims)\n\nAlternatively, construct a regular grid from a start point (lower left) to a finish point (upper right), optionally passing dims.\n\nRegularGrid{T}(dims)\nRegularGrid{T}(dim1, dim2, ...)\n\nFinally, a regular grid can be constructed by only passing the dimensions dims as a tuple, or by passing each dimension dim1, dim2, ... separately. In this case, the origin and spacing default to (0,0,...) and (1,1,...).\n\nExamples\n\nCreate a 3D grid with 100x100x50 locations:\n\njulia> RegularGrid{Float64}(100,100,50)\n\nCreate a 2D grid with 100x100 locations and origin at (10.,20.) units:\n\njulia> RegularGrid((100,100),(10.,20.),(1.,1.))\n\nCreate a 1D grid from -1 to 1 with 100 locations:\n\njulia> RegularGrid((-1.,),(1.,), dims=(100,))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsDevTools.RegularGridData",
    "page": "Docstrings",
    "title": "GeoStatsDevTools.RegularGridData",
    "category": "type",
    "text": "RegularGridData(data, origin, spacing)\n\nRegularly spaced data georeferenced with origin and spacing. The data argument is a dictionary mapping variable names to Julia arrays with the actual data.\n\nNaN or missing values in the Julia arrays are interpreted as non-valid. They can be used to mask the variables on the grid.\n\nExamples\n\nGiven poro and perm two 2-dimensional Julia arrays containing values of porosity and permeability, the following code can be used to georeference the data:\n\njulia> data = Dict(:porosity => poro, :permeability => perm)\njulia> RegularGridData(data, [0.,0.,0.], [1.,1.,1.])\n\nAlternatively, one can omit origin and spacing for default values of zeros and ones:\n\njulia> RegularGridData{Float64}(data)\n\nSee also: RegularGrid\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsDevTools.ShiftedPath",
    "page": "Docstrings",
    "title": "GeoStatsDevTools.ShiftedPath",
    "category": "type",
    "text": "ShiftedPath(path, offset)\n\nProduces the same results of path but shifted by an offset that can be positive or negative.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsDevTools.SimplePath",
    "page": "Docstrings",
    "title": "GeoStatsDevTools.SimplePath",
    "category": "type",
    "text": "SimplePath(domain)\n\nA simple (or default) path on a spatial domain.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsDevTools.SourcePath",
    "page": "Docstrings",
    "title": "GeoStatsDevTools.SourcePath",
    "category": "type",
    "text": "SourcePath(domain, sources)\n\nA path over a spatial domain that starts at given source locations sources and progresses outwards.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsDevTools.SpatialPartition",
    "page": "Docstrings",
    "title": "GeoStatsDevTools.SpatialPartition",
    "category": "type",
    "text": "SpatialPartition\n\nA partition of spatial data.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsDevTools.SpatialPredicatePartitioner",
    "page": "Docstrings",
    "title": "GeoStatsDevTools.SpatialPredicatePartitioner",
    "category": "type",
    "text": "SpatialPredicatePartitioner(predicate)\n\nA method for partitioning spatial data based on a predicate. Given two coordinates x and y, the value predicate(x,y) informs whether or not the points belong to the same subset.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsDevTools.StructuredGridData",
    "page": "Docstrings",
    "title": "GeoStatsDevTools.StructuredGridData",
    "category": "type",
    "text": "StructuredGridData(data, X, Y, Z, ...)\n\nData spatially distributed on a structured grid where points are georeferenced by coordinates X, Y, Z, ...\n\nThe data argument is a dictionary mapping variable names to Julia arrays with the actual data.\n\nExamples\n\nA very popular structured grid data format is NetCDF. Given 2D arrays LAT and LON with coordinates and arrays with climate data precipitation, temperature, the following code can be used to construct a structured grid:\n\njulia> data = Dict(:precipitation => precipitation, :temperature => temperature)\njulia> StructuredGridData(data, LAT, LON)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsDevTools.UniformPartitioner",
    "page": "Docstrings",
    "title": "GeoStatsDevTools.UniformPartitioner",
    "category": "type",
    "text": "UniformPartitioner(k, [shuffle])\n\nA method for partitioning spatial data uniformly into k subsets of approximately equal size. Optionally shuffle the data (default to true).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsDevTools.boundgrid-Tuple{GeoStatsBase.AbstractSpatialData,Tuple{Vararg{Int64,N}} where N}",
    "page": "Docstrings",
    "title": "GeoStatsDevTools.boundgrid",
    "category": "method",
    "text": "boundgrid(spatialdata, dims)\n\nReturns a RegularGrid of given dims covering all the locations in spatialdata.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsDevTools.isneighbor-Tuple{GeoStatsDevTools.AbstractNeighborhood,AbstractArray{T,1} where T,AbstractArray{T,1} where T}",
    "page": "Docstrings",
    "title": "GeoStatsDevTools.isneighbor",
    "category": "method",
    "text": "isneighbor(neighborhood, xₒ, x)\n\nTells whether or not the coordinates x is in the neighborhood centered at coordinates xₒ.\n\nNotes\n\nThis method is useful in loops, in which case the coordinates can be pre-allocated for better performance.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsDevTools.isneighbor-Tuple{GeoStatsDevTools.AbstractNeighborhood,Int64,Int64}",
    "page": "Docstrings",
    "title": "GeoStatsDevTools.isneighbor",
    "category": "method",
    "text": "isneighbor(neighborhood, center, location)\n\nTells whether or not the location is in the neighborhood centered at center.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsDevTools.partition-Tuple{GeoStatsBase.AbstractSpatialData,GeoStatsDevTools.AbstractPartitioner}",
    "page": "Docstrings",
    "title": "GeoStatsDevTools.partition",
    "category": "method",
    "text": "partition(spatialdata, partitioner)\n\nPartition spatialdata with partition method partitioner.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsDevTools.readgeotable-Tuple",
    "page": "Docstrings",
    "title": "GeoStatsDevTools.readgeotable",
    "category": "method",
    "text": "readgeotable(args; coordnames=[:x,:y,:z], kwargs)\n\nRead data from disk using CSV.read, optionally specifying the columns coordnames with spatial coordinates.\n\nThe arguments args and keyword arguments kwargs are forwarded to the CSV.read function, please check their documentation for more details.\n\nThis function returns a GeoDataFrame object.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsDevTools.search!-Union{Tuple{N}, Tuple{T}, Tuple{AbstractArray{Int64,1},AbstractArray{T,1},AbstractNeighborSearcher,AbstractArray{Bool,1}}} where N where T<:Real",
    "page": "Docstrings",
    "title": "GeoStatsDevTools.search!",
    "category": "method",
    "text": "search!(neighbors, xₒ, searcher, mask)\n\nUpdate neighbors of coordinates xₒ with the searcher and mask, and return number of neighbors found.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsDevTools.subsets-Tuple{SpatialPartition}",
    "page": "Docstrings",
    "title": "GeoStatsDevTools.subsets",
    "category": "method",
    "text": "subsets(partition)\n\nReturn the subsets of indices in spatial data that make up the partition.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Statistics.mean-Tuple{GeoStatsBase.SimulationSolution}",
    "page": "Docstrings",
    "title": "Statistics.mean",
    "category": "method",
    "text": "mean(solution)\n\nMean of simulation solution.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Statistics.quantile-Tuple{GeoStatsBase.SimulationSolution,Real}",
    "page": "Docstrings",
    "title": "Statistics.quantile",
    "category": "method",
    "text": "quantile(solution, p)\n\np-quantile of simulation solution.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Statistics.var-Tuple{GeoStatsBase.SimulationSolution}",
    "page": "Docstrings",
    "title": "Statistics.var",
    "category": "method",
    "text": "var(solution)\n\nVariance of simulation solution.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsDevTools.AbstractNeighborSearcher",
    "page": "Docstrings",
    "title": "GeoStatsDevTools.AbstractNeighborSearcher",
    "category": "type",
    "text": "AbstractNeighborSearcher\n\nA method for searching neighbors in a spatial object given a reference point.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsDevTools.AbstractNeighborhood",
    "page": "Docstrings",
    "title": "GeoStatsDevTools.AbstractNeighborhood",
    "category": "type",
    "text": "AbstractNeighborhood{D}\n\nA neighborhood on a spatial domain of type D.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsDevTools.AbstractPartitioner",
    "page": "Docstrings",
    "title": "GeoStatsDevTools.AbstractPartitioner",
    "category": "type",
    "text": "AbstractPartitioner\n\nA method for partitioning spatial data.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsDevTools.AbstractPath",
    "page": "Docstrings",
    "title": "GeoStatsDevTools.AbstractPath",
    "category": "type",
    "text": "AbstractPath\n\nA path on a spatial domain of type D.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsDevTools.SpatialStatistic",
    "page": "Docstrings",
    "title": "GeoStatsDevTools.SpatialStatistic",
    "category": "type",
    "text": "SpatialStatistic{D}\n\nA spatial statistic on a spatial domain of type D.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.eltype-Union{Tuple{Type{P}}, Tuple{P}} where P<:GeoStatsDevTools.AbstractPath",
    "page": "Docstrings",
    "title": "Base.eltype",
    "category": "method",
    "text": "Base.eltype(::Type{P})\n\nReturn element type of path type P.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.iterate",
    "page": "Docstrings",
    "title": "Base.iterate",
    "category": "function",
    "text": "Base.iterate(partition)\n\nIterate the partition returning views of spatial data.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.iterate",
    "page": "Docstrings",
    "title": "Base.iterate",
    "category": "function",
    "text": "Base.iterate(path, state=1)\n\nIterate path from a given state.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.length-Tuple{GeoStatsDevTools.AbstractPath}",
    "page": "Docstrings",
    "title": "Base.length",
    "category": "method",
    "text": "Base.length(path)\n\nReturn the length of a path.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.length-Tuple{SpatialPartition}",
    "page": "Docstrings",
    "title": "Base.length",
    "category": "method",
    "text": "Base.length(partition)\n\nReturn the number of subsets in partition.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsDevTools.transform!-Tuple{AbstractArray{T,1} where T,Distributions.Distribution{Distributions.Univariate,Distributions.Continuous},Distributions.Distribution{Distributions.Univariate,Distributions.Continuous}}",
    "page": "Docstrings",
    "title": "GeoStatsDevTools.transform!",
    "category": "method",
    "text": "transform!(samples, origin, target)\n\nTransform samples from origin distribution to target distribution in place.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [GeoStatsDevTools]\nOrder = [:type, :function]"
},

]}
