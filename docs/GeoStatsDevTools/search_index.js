var documenterSearchIndex = {"docs": [

{
    "location": "#GeoStatsDevTools.BallNeighborhood",
    "page": "Home",
    "title": "GeoStatsDevTools.BallNeighborhood",
    "category": "type",
    "text": "BallNeighborhood(domain, radius)\n\nA ball neighborhood of a given radius on a spatial domain.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsDevTools.CylinderNeighborhood",
    "page": "Home",
    "title": "GeoStatsDevTools.CylinderNeighborhood",
    "category": "type",
    "text": "CylinderNeighborhood(domain, radius, height)\n\nA cylinder neighborhood with a given radius and height on a spatial domain.\n\nNotes\n\nThe height parameter is only half of the actual cylinder height.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsDevTools.DirectionPartitioner",
    "page": "Home",
    "title": "GeoStatsDevTools.DirectionPartitioner",
    "category": "type",
    "text": "DirectionPartitioner(direction; atol=20., btol=.95)\n\nA method for partitioning spatial data along a given direction with angle tolerance atol in degrees and bandwidth tolerance btol.\n\n      ________________\n     /        | btol\n    /         |             ILLUSTRATION OF DIRECTION TOLERANCES\n    ----------------->\n    \\ ) atol\n     \\________________\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsDevTools.Ellipsoidal",
    "page": "Home",
    "title": "GeoStatsDevTools.Ellipsoidal",
    "category": "type",
    "text": "Ellipsoidal(semiaxes, angles)\n\nA distance defined by an ellipsoid with given semiaxes and rotation angles.\n\nFor 2D ellipsoids, there are two semiaxes and one rotation angle.\nFor 3D ellipsoids, there are three semiaxes and three rotation angles.\n\nExamples\n\n2D ellipsoid making 45ᵒ with the horizontal axis:\n\njulia> Ellipsoidal([1.0,0.5], [π/2])\n\n3D ellipsoid rotated by 45ᵒ in the xy plane:\n\njulia> Ellipsoidal([1.0,0.5,0.5], [π/2,0.0,0.0])\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsDevTools.EmpiricalDistribution",
    "page": "Home",
    "title": "GeoStatsDevTools.EmpiricalDistribution",
    "category": "type",
    "text": "EmpiricalDistribution(values)\n\nAn empirical distribution holding continuous values.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsDevTools.GeoDataFrame",
    "page": "Home",
    "title": "GeoStatsDevTools.GeoDataFrame",
    "category": "type",
    "text": "GeoDataFrame(data, coordnames)\n\nA dataframe object data with additional metadata for tracking the columns coordnames that represent spatial coordinates.\n\nExamples\n\nIf the data was already loaded in a normal DataFrame data, and there exists columns named x, y and z, wrap the data and specify the column names:\n\njulia> GeoDataFrame(data, [:x,:y,:z])\n\nAlternatively, load the data directly into a GeoDataFrame object by using the method readgeotable.\n\nNotes\n\nThis type is a lightweight wrapper over Julia\'s DataFrame types. No additional storage is required other than a vector of symbols with the columns names representing spatial coordinates.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsDevTools.HierarchicalPartitioner",
    "page": "Home",
    "title": "GeoStatsDevTools.HierarchicalPartitioner",
    "category": "type",
    "text": "HierarchicalPartitioner(first, second)\n\nA partitioning method in which a first partition is applied and then a second partition is applied to each subset of the first.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsDevTools.LocalNeighborSearcher",
    "page": "Home",
    "title": "GeoStatsDevTools.LocalNeighborSearcher",
    "category": "type",
    "text": "LocalNeighborSearcher(domain, K, neighborhood, path)\n\nA search method that finds at most K neighbors in neighborhood of domain with a search path.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsDevTools.NearestNeighborSearcher",
    "page": "Home",
    "title": "GeoStatsDevTools.NearestNeighborSearcher",
    "category": "type",
    "text": "NearestNeighborSearcher(domain, K, [metric])\n\nA search method that finds at most K nearest neighbors in domain according to metric (default to Euclidean()).\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsDevTools.PlanePartitioner",
    "page": "Home",
    "title": "GeoStatsDevTools.PlanePartitioner",
    "category": "type",
    "text": "PlanePartitioner(normal; tol=1e-6)\n\nA method for partitioning spatial data into a family of hyperplanes defined by a normal direction. Two points x and y belong to the same hyperplane when (x - y) ⋅ normal < tol.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsDevTools.PointSet",
    "page": "Home",
    "title": "GeoStatsDevTools.PointSet",
    "category": "type",
    "text": "PointSet(coords)\n\nA set of points with coordinate matrix coords. The number of rows of the matrix is the dimensionality of the domain whereas the number of columns is the number of points in the set.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsDevTools.PointSetData",
    "page": "Home",
    "title": "GeoStatsDevTools.PointSetData",
    "category": "type",
    "text": "PointSetData(data, coords)\n\nSpatial data georeferenced with coordinate matrix coords. The data argument is a dictionary mapping variable names to Julia arrays with the actual data.\n\nSee also: PointSet\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsDevTools.RandomPath",
    "page": "Home",
    "title": "GeoStatsDevTools.RandomPath",
    "category": "type",
    "text": "RandomPath(domain)\n\nA random path on a spatial domain.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsDevTools.RegularGrid",
    "page": "Home",
    "title": "GeoStatsDevTools.RegularGrid",
    "category": "type",
    "text": "RegularGrid(dims, origin, spacing)\n\nA regular grid with dimensions dims, lower left corner at origin and cell spacing spacing. The three arguments must have the same length.\n\nRegularGrid(start, finish, dims=dims)\n\nAlternatively, construct a regular grid from a start point (lower left) to a finish point (upper right), optionally passing dims.\n\nRegularGrid{T}(dims)\nRegularGrid{T}(dim1, dim2, ...)\n\nFinally, a regular grid can be constructed by only passing the dimensions dims as a tuple, or by passing each dimension dim1, dim2, ... separately. In this case, the origin and spacing default to (0,0,...) and (1,1,...).\n\nExamples\n\nCreate a 3D grid with 100x100x50 locations:\n\njulia> RegularGrid{Float64}(100,100,50)\n\nCreate a 2D grid with 100x100 locations and origin at (10.,20.) units:\n\njulia> RegularGrid((100,100),(10.,20.),(1.,1.))\n\nCreate a 1D grid from -1 to 1 with 100 locations:\n\njulia> RegularGrid((-1.,),(1.,), dims=(100,))\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsDevTools.RegularGridData",
    "page": "Home",
    "title": "GeoStatsDevTools.RegularGridData",
    "category": "type",
    "text": "RegularGridData(data, origin, spacing)\n\nRegularly spaced data georeferenced with origin and spacing. The data argument is a dictionary mapping variable names to Julia arrays with the actual data.\n\nNaN or missing values in the Julia arrays are interpreted as non-valid. They can be used to mask the variables on the grid.\n\nExamples\n\nGiven poro and perm two 2-dimensional Julia arrays containing values of porosity and permeability, the following code can be used to georeference the data:\n\njulia> data = Dict(:porosity => poro, :permeability => perm)\njulia> RegularGridData(data, [0.,0.,0.], [1.,1.,1.])\n\nAlternatively, one can omit origin and spacing for default values of zeros and ones:\n\njulia> RegularGridData{Float64}(data)\n\nSee also: RegularGrid\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsDevTools.ShiftedPath",
    "page": "Home",
    "title": "GeoStatsDevTools.ShiftedPath",
    "category": "type",
    "text": "ShiftedPath(path, offset)\n\nProduces the same results of path but shifted by an offset that can be positive or negative.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsDevTools.SimplePath",
    "page": "Home",
    "title": "GeoStatsDevTools.SimplePath",
    "category": "type",
    "text": "SimplePath(domain)\n\nA simple (or default) path on a spatial domain.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsDevTools.SourcePath",
    "page": "Home",
    "title": "GeoStatsDevTools.SourcePath",
    "category": "type",
    "text": "SourcePath(domain, sources)\n\nA path over a spatial domain that starts at given source locations sources and progresses outwards.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsDevTools.SpatialPartition",
    "page": "Home",
    "title": "GeoStatsDevTools.SpatialPartition",
    "category": "type",
    "text": "SpatialPartition\n\nA partition of spatial data.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsDevTools.SpatialPredicatePartitioner",
    "page": "Home",
    "title": "GeoStatsDevTools.SpatialPredicatePartitioner",
    "category": "type",
    "text": "SpatialPredicatePartitioner(predicate)\n\nA method for partitioning spatial data based on a predicate. Given two coordinates x and y, the value predicate(x,y) informs whether or not the points belong to the same subset.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsDevTools.StructuredGridData",
    "page": "Home",
    "title": "GeoStatsDevTools.StructuredGridData",
    "category": "type",
    "text": "StructuredGridData(data, X, Y, Z, ...)\n\nData spatially distributed on a structured grid where points are georeferenced by coordinates X, Y, Z, ...\n\nThe data argument is a dictionary mapping variable names to Julia arrays with the actual data.\n\nExamples\n\nA very popular structured grid data format is NetCDF. Given 2D arrays LAT and LON with coordinates and arrays with climate data precipitation, temperature, the following code can be used to construct a structured grid:\n\njulia> data = Dict(:precipitation => precipitation, :temperature => temperature)\njulia> StructuredGridData(data, LAT, LON)\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsDevTools.UniformPartitioner",
    "page": "Home",
    "title": "GeoStatsDevTools.UniformPartitioner",
    "category": "type",
    "text": "UniformPartitioner(k, [shuffle])\n\nA method for partitioning spatial data uniformly into k subsets of approximately equal size. Optionally shuffle the data (default to true).\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsDevTools.boundgrid-Tuple{GeoStatsBase.AbstractSpatialData,Tuple{Vararg{Int64,N}} where N}",
    "page": "Home",
    "title": "GeoStatsDevTools.boundgrid",
    "category": "method",
    "text": "boundgrid(spatialdata, dims)\n\nReturns a RegularGrid of given dims covering all the locations in spatialdata.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsDevTools.isneighbor-Tuple{GeoStatsDevTools.AbstractNeighborhood,AbstractArray{T,1} where T,AbstractArray{T,1} where T}",
    "page": "Home",
    "title": "GeoStatsDevTools.isneighbor",
    "category": "method",
    "text": "isneighbor(neighborhood, xₒ, x)\n\nTells whether or not the coordinates x is in the neighborhood centered at coordinates xₒ.\n\nNotes\n\nThis method is useful in loops, in which case the coordinates can be pre-allocated for better performance.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsDevTools.isneighbor-Tuple{GeoStatsDevTools.AbstractNeighborhood,Int64,Int64}",
    "page": "Home",
    "title": "GeoStatsDevTools.isneighbor",
    "category": "method",
    "text": "isneighbor(neighborhood, center, location)\n\nTells whether or not the location is in the neighborhood centered at center.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsDevTools.partition-Tuple{GeoStatsBase.AbstractSpatialData,GeoStatsDevTools.AbstractPartitioner}",
    "page": "Home",
    "title": "GeoStatsDevTools.partition",
    "category": "method",
    "text": "partition(spatialdata, partitioner)\n\nPartition spatialdata with partition method partitioner.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsDevTools.readgeotable-Tuple",
    "page": "Home",
    "title": "GeoStatsDevTools.readgeotable",
    "category": "method",
    "text": "readgeotable(args; coordnames=[:x,:y,:z], kwargs)\n\nRead data from disk using CSV.read, optionally specifying the columns coordnames with spatial coordinates.\n\nThe arguments args and keyword arguments kwargs are forwarded to the CSV.read function, please check their documentation for more details.\n\nThis function returns a GeoDataFrame object.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsDevTools.search!-Union{Tuple{N}, Tuple{T}, Tuple{AbstractArray{Int64,1},AbstractArray{T,1},AbstractNeighborSearcher,AbstractArray{Bool,1}}} where N where T<:Real",
    "page": "Home",
    "title": "GeoStatsDevTools.search!",
    "category": "method",
    "text": "search!(neighbors, xₒ, searcher, mask)\n\nUpdate neighbors of coordinates xₒ with the searcher and mask, and return number of neighbors found.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsDevTools.subsets-Tuple{SpatialPartition}",
    "page": "Home",
    "title": "GeoStatsDevTools.subsets",
    "category": "method",
    "text": "subsets(partition)\n\nReturn the subsets of indices in spatial data that make up the partition.\n\n\n\n\n\n"
},

{
    "location": "#Statistics.mean-Tuple{GeoStatsBase.SimulationSolution}",
    "page": "Home",
    "title": "Statistics.mean",
    "category": "method",
    "text": "mean(solution)\n\nMean of simulation solution.\n\n\n\n\n\n"
},

{
    "location": "#Statistics.quantile-Tuple{GeoStatsBase.SimulationSolution,Real}",
    "page": "Home",
    "title": "Statistics.quantile",
    "category": "method",
    "text": "quantile(solution, p)\n\np-quantile of simulation solution.\n\n\n\n\n\n"
},

{
    "location": "#Statistics.var-Tuple{GeoStatsBase.SimulationSolution}",
    "page": "Home",
    "title": "Statistics.var",
    "category": "method",
    "text": "var(solution)\n\nVariance of simulation solution.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsDevTools.AbstractNeighborSearcher",
    "page": "Home",
    "title": "GeoStatsDevTools.AbstractNeighborSearcher",
    "category": "type",
    "text": "AbstractNeighborSearcher\n\nA method for searching neighbors in a spatial object given a reference point.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsDevTools.AbstractNeighborhood",
    "page": "Home",
    "title": "GeoStatsDevTools.AbstractNeighborhood",
    "category": "type",
    "text": "AbstractNeighborhood{D}\n\nA neighborhood on a spatial domain of type D.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsDevTools.AbstractPartitioner",
    "page": "Home",
    "title": "GeoStatsDevTools.AbstractPartitioner",
    "category": "type",
    "text": "AbstractPartitioner\n\nA method for partitioning spatial data.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsDevTools.AbstractPath",
    "page": "Home",
    "title": "GeoStatsDevTools.AbstractPath",
    "category": "type",
    "text": "AbstractPath\n\nA path on a spatial domain of type D.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsDevTools.SpatialStatistic",
    "page": "Home",
    "title": "GeoStatsDevTools.SpatialStatistic",
    "category": "type",
    "text": "SpatialStatistic{D}\n\nA spatial statistic on a spatial domain of type D.\n\n\n\n\n\n"
},

{
    "location": "#Base.eltype-Union{Tuple{Type{P}}, Tuple{P}} where P<:GeoStatsDevTools.AbstractPath",
    "page": "Home",
    "title": "Base.eltype",
    "category": "method",
    "text": "Base.eltype(::Type{P})\n\nReturn element type of path type P.\n\n\n\n\n\n"
},

{
    "location": "#Base.iterate",
    "page": "Home",
    "title": "Base.iterate",
    "category": "function",
    "text": "Base.iterate(path, state=1)\n\nIterate path from a given state.\n\n\n\n\n\n"
},

{
    "location": "#Base.iterate",
    "page": "Home",
    "title": "Base.iterate",
    "category": "function",
    "text": "Base.iterate(partition)\n\nIterate the partition returning views of spatial data.\n\n\n\n\n\n"
},

{
    "location": "#Base.length-Tuple{GeoStatsDevTools.AbstractPath}",
    "page": "Home",
    "title": "Base.length",
    "category": "method",
    "text": "Base.length(path)\n\nReturn the length of a path.\n\n\n\n\n\n"
},

{
    "location": "#Base.length-Tuple{SpatialPartition}",
    "page": "Home",
    "title": "Base.length",
    "category": "method",
    "text": "Base.length(partition)\n\nReturn the number of subsets in partition.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsDevTools.transform!-Tuple{AbstractArray{T,1} where T,Distributions.Distribution{Distributions.Univariate,Distributions.Continuous},Distributions.Distribution{Distributions.Univariate,Distributions.Continuous}}",
    "page": "Home",
    "title": "GeoStatsDevTools.transform!",
    "category": "method",
    "text": "transform!(samples, origin, target)\n\nTransform samples from origin distribution to target distribution in place.\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [GeoStatsDevTools]\nOrder = [:type, :function]"
},

]}
