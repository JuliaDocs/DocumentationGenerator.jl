var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "(Image: GeoStatsLogo)(Image: Build Status) (Image: GeoStats) (Image: Coverage Status) (Image: Stable Documentation) (Image: Latest Documentation) (Image: License File) (Image: Gitter) (Image: JOSS) (Image: DOI)"
},

{
    "location": "#Overview-1",
    "page": "Home",
    "title": "Overview",
    "category": "section",
    "text": "Geostatistics (a.k.a. spatial statistics) is the branch of statistics that deals with spatial data. In many fields of science, such as mining engineering, hidrogeology, petroleum engineering, and environmental sciences, traditional regression techniques fail to capture spatiotemporal correlation, and therefore are not satisfactory tools for decision making involving spatial resources.GeoStats.jl is an attempt to bring together bleeding-edge research in the geostatistics community into a comprehensive framework, and to empower researchers and practioners with a toolkit for fast assessment of different modeling approaches.The design of this package is the result of many years developing geostatistical software. I hope that it can serve to promote more collaboration between geostatisticians around the globe and to standardize this incredible science.If you would like to help support the project, please star the repository on GitHub and share it with your colleagues. If you are a developer, please check GeoStatsBase.jl and GeoStatsDevTools.jl."
},

{
    "location": "#Installation-1",
    "page": "Home",
    "title": "Installation",
    "category": "section",
    "text": "Get the latest stable release with Julia\'s package manager:] add GeoStats"
},

{
    "location": "#Project-organization-1",
    "page": "Home",
    "title": "Project organization",
    "category": "section",
    "text": "The project is split into various packages:Package Description\nGeoStats.jl Main package containing Kriging-based solvers, and other geostatistical tools.\nGeoStatsImages.jl Training images for multiple-point geostatistical simulation.\nGslibIO.jl Utilities to read/write extended GSLIB files.\nVariography.jl Variogram estimation and modeling, and related tools.\nKrigingEstimators.jl High-performance implementations of Kriging estimators.\nGeoStatsBase.jl Base package containing problem and solution specifications (for developers).\nGeoStatsDevTools.jl Developer tools for writing new solvers (for developers).The main package (i.e. GeoStats.jl) is self-contained, and provides high-performance Kriging-based estimation/simulation algorithms over arbitrary domains. Other packages can be installed from the list above for additional functionality."
},

{
    "location": "#Quick-example-1",
    "page": "Home",
    "title": "Quick example",
    "category": "section",
    "text": "Below is a quick preview of the high-level API. For the full example, please see the GeoStatsTutorials repository.using GeoStats\nusing Plots\n\n# data.csv:\n#    x,    y,       station, precipitation\n# 25.0, 25.0,     palo alto,           1.0\n# 50.0, 75.0,  redwood city,           0.0\n# 75.0, 50.0, mountain view,           1.0\n\n# read spreadsheet file containing spatial data\ngeodata = readgeotable(\"data.csv\", coordnames=[:x,:y])\n\n# define spatial domain (e.g. regular grid, point collection)\ngrid = RegularGrid{Float64}(100, 100)\n\n# define estimation problem for any data column(s) (e.g. :precipitation)\nproblem = EstimationProblem(geodata, grid, :precipitation)\n\n# choose a solver from the list of solvers\nsolver = Kriging(\n  :precipitation => (variogram=GaussianVariogram(range=35.),)\n)\n\n# solve the problem\nsolution = solve(problem, solver)\n\n# plot the solution\nplot(solution)(Image: EstimationSolution)"
},

{
    "location": "#Low-level-API-1",
    "page": "Home",
    "title": "Low-level API",
    "category": "section",
    "text": "If you are interested in finer control, Kriging estimators can also be used directly:using GeoStats\nusing Random, Statistics # hide\nRandom.seed!(2017) # hide\n\n# create some data\ndim, nobs = 3, 10\nX = rand(dim, nobs)\nz = rand(nobs)\n\n# target location\nxₒ = rand(dim)\n\n# define a variogram model\nγ = GaussianVariogram(sill=1., range=1., nugget=0.)\n\n# define an estimator (i.e. build the Kriging system)\nsk = SimpleKriging(X, z, γ, mean(z))\nok = OrdinaryKriging(X, z, γ)\nuk = UniversalKriging(X, z, γ, 0)\n\n# estimate at target location\nμ, σ² = predict(sk, xₒ)\nprintln(\"Simple Kriging:\") # hide\nprintln(\"  μ = $μ, σ² = $σ²\") # hide\nμ, σ² = predict(ok, xₒ)\nprintln(\"Ordinary Kriging:\") # hide\nprintln(\"  μ = $μ, σ² = $σ²\") # hide\nμ, σ² = predict(uk, xₒ)\nprintln(\"Universal Kriging:\") # hide\nprintln(\"  μ = $μ, σ² = $σ²\") # hide"
},

{
    "location": "problems_and_solvers/#",
    "page": "Problems and solvers",
    "title": "Problems and solvers",
    "category": "page",
    "text": ""
},

{
    "location": "problems_and_solvers/#Problems-and-solvers-1",
    "page": "Problems and solvers",
    "title": "Problems and solvers",
    "category": "section",
    "text": "One of the greatest features of GeoStats.jl is the ability to define geostatistical problems independently of the solution strategy. This design allows researchers and practioners to perform fair comparisons between different solvers. It is perhaps the single most important contribution of this project.If you are an experienced user of geostatistics or if you do research in the field, you know how hard it is to compare algorithms fairly. Often a new algorithm is proposed in the literature, and yet the task of comparing it with the state of the art is quite demanding. Even when a comparison is made by the author after a great amount of effort, it is inevitably biased.Part of this issue is attributed to the fact that a general definition of the problem is missing. What is it that we call an \"estimation problem\" in geostatistics? What about \"stochastic simulation\"? The answer to these questions is given below in the form of code."
},

{
    "location": "problems_and_solvers/#GeoStatsBase.EstimationProblem",
    "page": "Problems and solvers",
    "title": "GeoStatsBase.EstimationProblem",
    "category": "type",
    "text": "EstimationProblem(spatialdata, domain, targetvars)\n\nA spatial estimation problem on a given domain in which the variables to be estimated are listed in targetvars. The data of the problem is stored in spatialdata.\n\nExamples\n\nCreate an estimation problem for rainfall precipitation measurements:\n\njulia> EstimationProblem(spatialdata, domain, :precipitation)\n\nCreate an estimation problem for precipitation and CO₂:\n\njulia> EstimationProblem(spatialdata, domain, [:precipitation, :CO₂])\n\n\n\n\n\n"
},

{
    "location": "problems_and_solvers/#Estimation-problem-1",
    "page": "Problems and solvers",
    "title": "Estimation problem",
    "category": "section",
    "text": "An estimation problem in geostatitsics is a triplet:Spatial data (i.e. data with coordinates)\nSpatial domain (e.g. regular grid, point collection)\nTarget variables (or variables to be estimated)Each of these components is constructed separately, and then grouped (no memory is copied) in an EstimationProblem.EstimationProblemPlease check Spatial data and Domains for currently implemented data and domain types."
},

{
    "location": "problems_and_solvers/#GeoStatsBase.SimulationProblem",
    "page": "Problems and solvers",
    "title": "GeoStatsBase.SimulationProblem",
    "category": "type",
    "text": "SimulationProblem(spatialdata, domain, targetvars, nreals)\nSimulationProblem(domain, targetvars, nreals)\n\nA spatial simulation problem on a given domain in which the variables to be simulated are listed in targetvars.\n\nFor conditional simulation, the data of the problem is stored in spatialdata.\n\nFor unconditional simulation, a dictionary targetvars must be provided mapping variable names to their types.\n\nIn both cases, a number nreals of realizations is requested.\n\nExamples\n\nCreate a conditional simulation problem for porosity and permeability with 100 realizations:\n\njulia> SimulationProblem(spatialdata, domain, [:porosity,:permeability], 100)\n\nCreate an unconditional simulation problem for porosity and facies type with 100 realizations:\n\njulia> SimulationProblem(domain, Dict(:porosity => Float64, :facies => Int), 100)\n\nNotes\n\nTo check if a simulation problem has data (i.e. conditional vs. unconditional) use the hasdata method.\n\n\n\n\n\n"
},

{
    "location": "problems_and_solvers/#GeoStatsBase.hasdata",
    "page": "Problems and solvers",
    "title": "GeoStatsBase.hasdata",
    "category": "function",
    "text": "hasdata(problem)\n\nReturn true if simulation problem has data.\n\n\n\n\n\n"
},

{
    "location": "problems_and_solvers/#Simulation-problem-1",
    "page": "Problems and solvers",
    "title": "Simulation problem",
    "category": "section",
    "text": "Likewise, a stochastic simulation problem in geostatistics is represented with the same triplet. However, the spatial data in this case is optional in order to accomodate the concept of conditional versus unconditional simulation.SimulationProblemhasdata"
},

{
    "location": "problems_and_solvers/#List-of-solvers-1",
    "page": "Problems and solvers",
    "title": "List of solvers",
    "category": "section",
    "text": "Below is the list of solvers distributed with GeoStats.jl. For more solvers, please check the project page on GitHub where a table is provided with links to accompanying repositories."
},

{
    "location": "problems_and_solvers/#GeoStats.Kriging",
    "page": "Problems and solvers",
    "title": "GeoStats.Kriging",
    "category": "type",
    "text": "Kriging(var₁=>param₁, var₂=>param₂, ...)\n\nA polyalgorithm Kriging estimation solver.\n\nEach pair var=>param specifies the KrigingParam param for the Kriging variable var. In order to avoid boilerplate code, the constructor expects pairs of Symbol and NamedTuple instead.\n\nParameters\n\nvariogram - Variogram model (default to GaussianVariogram())\nmean      - Simple Kriging mean\ndegree    - Universal Kriging degree\ndrifts    - External Drift Kriging drift functions\n\nLatter options override former options. For example, by specifying drifts, the user is telling the algorithm to ignore degree and mean. If no option is specified, Ordinary Kriging is used by default with the variogram only.\n\nmaxneighbors - Maximum number of neighbors (default to nothing)\nneighborhood - Search neighborhood (default to nothing)\nmetric       - Metric used to find nearest neighbors (default to Euclidean())\n\nThe maxneighbors option can be used to perform approximate Kriging with a subset of data points per estimation location. Two neighborhood search methods are available depending on the value of neighborhood:\n\nIf a neighborhood is provided, local Kriging is performed by sliding the neighborhood in the domain.\nIf neighborhood is not provided, the Kriging system is built using maxneighbors nearest neighbors according to a metric.\n\nExamples\n\nSolve the variable :var₁ with Simple Kriging by specifying the mean, and the variable :var₂ with Universal Kriging by specifying the degree and the variogram model.\n\njulia> Kriging(\n  :var₁ => (mean=1.,),\n  :var₂ => (degree=1, variogram=SphericalVariogram(range=20.))\n)\n\nSolve all variables of the problem with the default parameters (i.e. Ordinary Kriging with unit Gaussian variogram):\n\njulia> Kriging()\n\n\n\n\n\n\n\n"
},

{
    "location": "problems_and_solvers/#Estimation-1",
    "page": "Problems and solvers",
    "title": "Estimation",
    "category": "section",
    "text": "Kriging"
},

{
    "location": "problems_and_solvers/#GeoStats.SeqGaussSim",
    "page": "Problems and solvers",
    "title": "GeoStats.SeqGaussSim",
    "category": "type",
    "text": "SeqGaussSim(var₁=>param₁, var₂=>param₂, ...)\n\nA polyalgorithm sequential Gaussian simulation solver.\n\nEach pair var=>param specifies the SeqGaussSimParam param for the simulation variable var. In order to avoid boilerplate code, the constructor expects pairs of Symbol and NamedTuple instead. See Kriging documentation for examples.\n\nParameters\n\nvariogram - Variogram model (default to GaussianVariogram())\nmean      - Simple Kriging mean\ndegree    - Universal Kriging degree\ndrifts    - External Drift Kriging drift functions\n\nLatter options override former options. For example, by specifying drifts, the user is telling the algorithm to ignore degree and mean. If no option is specified, Ordinary Kriging is used by default with the variogram only.\n\nmaxneighbors - Maximum number of neighbors (default to 10)\nneighborhood - Search neighborhood (default to nothing)\nmetric       - Metric used to find nearest neighbors (default to Euclidean())\npath         - Simulation path (default to RandomPath)\n\nFor each location in the simulation path, a maximum number of neighbors maxneighbors is used to fit a Gaussian distribution. The nearest neighbors are searched according to a metric or according to a neighborhood when the latter is provided.\n\n\n\n\n\n\n\n"
},

{
    "location": "problems_and_solvers/#GeoStats.CookieCutter",
    "page": "Problems and solvers",
    "title": "GeoStats.CookieCutter",
    "category": "type",
    "text": "CookieCutter(master, others)\n\nA cookie-cutter simulation solver.\n\nParameters\n\nmaster - Master simulation solver (a.k.a. facies solver)\nothers - A list of pairs mapping categories to solvers\n\nExamples\n\nSimulate lithology facies with image quilting and fill property with direct Gaussian simulation:\n\njulia> fsolver  = ImgQuilt(:facies => (TI=Strebelle, template=(30,30,1)))\njulia> psolver₀ = DirectGaussSim(:property => (variogram=SphericalVariogram(range=10.),))\njulia> psolver₁ = DirectGaussSim(:property => (variogram=SphericalVariogram(range=20.),))\njulia> solver   = CookieCutter(fsolver, [0 => psolver₀, 1 => psolver₁])\n\n\n\n\n\n"
},

{
    "location": "problems_and_solvers/#Simulation-1",
    "page": "Problems and solvers",
    "title": "Simulation",
    "category": "section",
    "text": "SeqGaussSimCookieCutter"
},

{
    "location": "spatialdata/#",
    "page": "Spatial data",
    "title": "Spatial data",
    "category": "page",
    "text": ""
},

{
    "location": "spatialdata/#Spatial-data-1",
    "page": "Spatial data",
    "title": "Spatial data",
    "category": "section",
    "text": "In GeoStats.jl, data and domain are disconnected one from another. This design enables levels of parallelism that would be difficult or even impossible to implement otherwise.The data is accessed by solvers only if strictly necessary. One of our goals is to be able to handle massive datasets that may not fit in random-access memory (RAM)."
},

{
    "location": "spatialdata/#GeoStatsDevTools.GeoDataFrame",
    "page": "Spatial data",
    "title": "GeoStatsDevTools.GeoDataFrame",
    "category": "type",
    "text": "GeoDataFrame(data, coordnames)\n\nA dataframe object data with additional metadata for tracking the columns coordnames that represent spatial coordinates.\n\nExamples\n\nIf the data was already loaded in a normal DataFrame data, and there exists columns named x, y and z, wrap the data and specify the column names:\n\njulia> GeoDataFrame(data, [:x,:y,:z])\n\nAlternatively, load the data directly into a GeoDataFrame object by using the method readgeotable.\n\nNotes\n\nThis type is a lightweight wrapper over Julia\'s DataFrame types. No additional storage is required other than a vector of symbols with the columns names representing spatial coordinates.\n\n\n\n\n\n"
},

{
    "location": "spatialdata/#GeoStatsDevTools.readgeotable",
    "page": "Spatial data",
    "title": "GeoStatsDevTools.readgeotable",
    "category": "function",
    "text": "readgeotable(args; coordnames=[:x,:y,:z], kwargs)\n\nRead data from disk using CSV.read, optionally specifying the columns coordnames with spatial coordinates.\n\nThe arguments args and keyword arguments kwargs are forwarded to the CSV.read function, please check their documentation for more details.\n\nThis function returns a GeoDataFrame object.\n\n\n\n\n\n"
},

{
    "location": "spatialdata/#GeoDataFrame-1",
    "page": "Spatial data",
    "title": "GeoDataFrame",
    "category": "section",
    "text": "For point (or hard) data in spreadsheet format (e.g. CSV, TSV), the GeoDataFrame object is a lightweight wrapper over Julia\'s DataFrame types.GeoDataFramereadgeotable"
},

{
    "location": "spatialdata/#GeoStatsDevTools.PointSetData",
    "page": "Spatial data",
    "title": "GeoStatsDevTools.PointSetData",
    "category": "type",
    "text": "PointSetData(data, coords)\n\nSpatial data georeferenced with coordinate matrix coords. The data argument is a dictionary mapping variable names to Julia arrays with the actual data.\n\nSee also: PointSet\n\n\n\n\n\n"
},

{
    "location": "spatialdata/#PointSetData-1",
    "page": "Spatial data",
    "title": "PointSetData",
    "category": "section",
    "text": "The PointSetData object is equivalent to GeoDataFrame except that it stores the data in a simple Julia Dict instead of in a DataFrame.PointSetData"
},

{
    "location": "spatialdata/#GeoStatsDevTools.RegularGridData",
    "page": "Spatial data",
    "title": "GeoStatsDevTools.RegularGridData",
    "category": "type",
    "text": "RegularGridData(data, origin, spacing)\n\nRegularly spaced data georeferenced with origin and spacing. The data argument is a dictionary mapping variable names to Julia arrays with the actual data.\n\nNaN or missing values in the Julia arrays are interpreted as non-valid. They can be used to mask the variables on the grid.\n\nExamples\n\nGiven poro and perm two 2-dimensional Julia arrays containing values of porosity and permeability, the following code can be used to georeference the data:\n\njulia> data = Dict(:porosity => poro, :permeability => perm)\njulia> RegularGridData(data, [0.,0.,0.], [1.,1.,1.])\n\nAlternatively, one can omit origin and spacing for default values of zeros and ones:\n\njulia> RegularGridData{Float64}(data)\n\nSee also: RegularGrid\n\n\n\n\n\n"
},

{
    "location": "spatialdata/#RegularGridData-1",
    "page": "Spatial data",
    "title": "RegularGridData",
    "category": "section",
    "text": "In the case that the data is regularly spaced in a grid, the GeoGridData object provides fast access across multiple overlaid images.RegularGridData"
},

{
    "location": "spatialdata/#GeoStatsDevTools.StructuredGridData",
    "page": "Spatial data",
    "title": "GeoStatsDevTools.StructuredGridData",
    "category": "type",
    "text": "StructuredGridData(data, X, Y, Z, ...)\n\nData spatially distributed on a structured grid where points are georeferenced by coordinates X, Y, Z, ...\n\nThe data argument is a dictionary mapping variable names to Julia arrays with the actual data.\n\nExamples\n\nA very popular structured grid data format is NetCDF. Given 2D arrays LAT and LON with coordinates and arrays with climate data precipitation, temperature, the following code can be used to construct a structured grid:\n\njulia> data = Dict(:precipitation => precipitation, :temperature => temperature)\njulia> StructuredGridData(data, LAT, LON)\n\n\n\n\n\n"
},

{
    "location": "spatialdata/#StructuredGridData-1",
    "page": "Spatial data",
    "title": "StructuredGridData",
    "category": "section",
    "text": "A StructuredGridData is a direct generalization of RegularGridData in which points can be localized in space with indices i,j,k... even though they are not regularly spaced. This format is often found in satellite data, NetCDF, etc.StructuredGridData"
},

{
    "location": "domains/#",
    "page": "Domains",
    "title": "Domains",
    "category": "page",
    "text": ""
},

{
    "location": "domains/#Domains-1",
    "page": "Domains",
    "title": "Domains",
    "category": "section",
    "text": "Although estimators such as Kriging do not require equally spaced samples, many software packages for geostatistical estimation/simulation restrict their implementations to regular grids. This is a big limitation, however; given that sampling campaigns and resource exploration is rarely regular.In GeoStats.jl, estimation/simulation can be performed on arbitrary domain types such as simple point collections, unstructured meshes, and tesselations. These types are implemented \"analytically\" in order to minimize memory access and maximize performance. In a regular grid, for example, the coordinates of a given location are known, and one can perform search without ever constructing a grid.Below is the list of currently implemented domain types. More options will be available in future releases."
},

{
    "location": "domains/#GeoStatsDevTools.PointSet",
    "page": "Domains",
    "title": "GeoStatsDevTools.PointSet",
    "category": "type",
    "text": "PointSet(coords)\n\nA set of points with coordinate matrix coords. The number of rows of the matrix is the dimensionality of the domain whereas the number of columns is the number of points in the set.\n\n\n\n\n\n"
},

{
    "location": "domains/#PointSet-1",
    "page": "Domains",
    "title": "PointSet",
    "category": "section",
    "text": "PointSet"
},

{
    "location": "domains/#GeoStatsDevTools.RegularGrid",
    "page": "Domains",
    "title": "GeoStatsDevTools.RegularGrid",
    "category": "type",
    "text": "RegularGrid(dims, origin, spacing)\n\nA regular grid with dimensions dims, lower left corner at origin and cell spacing spacing. The three arguments must have the same length.\n\nRegularGrid(start, finish, dims=dims)\n\nAlternatively, construct a regular grid from a start point (lower left) to a finish point (upper right), optionally passing dims.\n\nRegularGrid{T}(dims)\nRegularGrid{T}(dim1, dim2, ...)\n\nFinally, a regular grid can be constructed by only passing the dimensions dims as a tuple, or by passing each dimension dim1, dim2, ... separately. In this case, the origin and spacing default to (0,0,...) and (1,1,...).\n\nExamples\n\nCreate a 3D grid with 100x100x50 locations:\n\njulia> RegularGrid{Float64}(100,100,50)\n\nCreate a 2D grid with 100x100 locations and origin at (10.,20.) units:\n\njulia> RegularGrid((100,100),(10.,20.),(1.,1.))\n\nCreate a 1D grid from -1 to 1 with 100 locations:\n\njulia> RegularGrid((-1.,),(1.,), dims=(100,))\n\n\n\n\n\n"
},

{
    "location": "domains/#RegularGrid-1",
    "page": "Domains",
    "title": "RegularGrid",
    "category": "section",
    "text": "RegularGrid"
},

{
    "location": "empirical_variograms/#",
    "page": "Empirical variograms",
    "title": "Empirical variograms",
    "category": "page",
    "text": ""
},

{
    "location": "empirical_variograms/#Empirical-variograms-1",
    "page": "Empirical variograms",
    "title": "Empirical variograms",
    "category": "section",
    "text": "An empirical variogram has the form:newcommandxboldsymbolx\nhatgamma(h) = frac12N(h) sum_(ij) in N(h) (z_i - z_j)^2where N(h) = left(ij) mid x_i - x_j = hright is the set of pairs of locations at a distance h and N(h) is the cardinality of the set. Empirical variograms can be estimated using general distance functions. These can be used in order to for example:Model anisotropy (e.g. ellipsoid distance)\nPerform geostatistical simulation on spherical coordinate systems (e.g. haversine distance)Please see Distances.jl for a complete list of options."
},

{
    "location": "empirical_variograms/#Variography.EmpiricalVariogram",
    "page": "Empirical variograms",
    "title": "Variography.EmpiricalVariogram",
    "category": "type",
    "text": "EmpiricalVariogram(X, z₁, z₂=z₁; [optional parameters])\n\nComputes the empirical (a.k.a. experimental) omnidirectional (cross-)variogram from data locations X and values z₁ and z₂.\n\nEmpiricalVariogram(spatialdata, var₁, var₂=var₁; [optional parameters])\n\nAlternatively, compute the (cross-)variogram for the variables var₁ and var₂ stored in a spatialdata object.\n\nEmpiricalVariogram(partition, var₁, var₂=var₁; [optional parameters])\n\nAlternatively, compute the (cross-)variogram on a partition of the data.\n\nParameters\n\nnlags - number of lags (default to 20)\nmaxlag - maximum lag (default to half of maximum lag of data)\ndistance - custom distance function (default to Euclidean distance)\n\nSee also: DirectionalVariogram\n\n\n\n\n\n"
},

{
    "location": "empirical_variograms/#Omnidirectional-1",
    "page": "Empirical variograms",
    "title": "Omnidirectional",
    "category": "section",
    "text": "EmpiricalVariogram"
},

{
    "location": "empirical_variograms/#Variography.DirectionalVariogram",
    "page": "Empirical variograms",
    "title": "Variography.DirectionalVariogram",
    "category": "function",
    "text": "DirectionalVariogram(spatialdata, direction, var₁, var₂=var₁; [optional parameters])\n\nComputes the empirical (cross-)variogram for the variables var₁ and var₂ stored in spatialdata along a given direction.\n\nOptional parameters include the parameters for EmpiricalVariogram and the parameters for DirectionPartitioner.\n\nNotes\n\nA DirectionalVariogram is just a function that first partitions the spatialdata using a DirectionPartitioner and then passes the result to the corresponding EmpiricalVariogram constructor.\n\nSee also: EmpiricalVariogram, DirectionPartitioner\n\n\n\n\n\n"
},

{
    "location": "empirical_variograms/#Directional-1",
    "page": "Empirical variograms",
    "title": "Directional",
    "category": "section",
    "text": "DirectionalVariogramVariogram plane plots are also available, please see Plotting."
},

{
    "location": "theoretical_variograms/#",
    "page": "Theoretical variograms",
    "title": "Theoretical variograms",
    "category": "page",
    "text": ""
},

{
    "location": "theoretical_variograms/#Variography.isstationary",
    "page": "Theoretical variograms",
    "title": "Variography.isstationary",
    "category": "function",
    "text": "isstationary(γ)\n\nCheck if variogram γ possesses the 2nd-order stationary property.\n\n\n\n\n\n"
},

{
    "location": "theoretical_variograms/#Theoretical-variograms-1",
    "page": "Theoretical variograms",
    "title": "Theoretical variograms",
    "category": "section",
    "text": "newcommandxboldsymbolx\nnewcommandRmathbbR\nnewcommand1mathbb1In an intrinsic isotropic model, the variogram is only a function of the distance between any two points x_1x_2 in R^m:gamma(x_1x_2) = gamma(x_1 - x_2) = gamma(h)Under the additional assumption of 2nd-order stationarity, the well-known covariance is directly related via gamma(h) = cov(0) - cov(h). Anisotropic models are easily obtained by defining an ellipsoid distance in place of the Euclidean distance. For a list of available distances, please see Distances.jl.This package implements a few commonly used and other more excentric variogram models. They all share the same default parameters:sill=1\nrange=1\nnugget=0\ndistance=Euclidean()Some of them have extra parameters that can be set with keyword arguments:GaussianVariogram(nugget=.1) # set nugget effect\nMaternVariogram(order=1) # set order of Bessel functionAdditionally, a composite (additive) variogram model gamma(h) = gamma_1(h) + gamma_2(h) + cdots gamma_n(h) can be constructed from a list of variogram models:γ = GaussianVariogram() + ExponentialVariogram()Like the other variogram models, a composite variogram gamma can be evaluated as an isotropic model gamma(h) or as a model with a custom distance gamma(x_1x_2).Finally, the 2nd-order stationarity property of a variogram can be checked with the isstationary method:isstationary"
},

{
    "location": "theoretical_variograms/#Variography.GaussianVariogram",
    "page": "Theoretical variograms",
    "title": "Variography.GaussianVariogram",
    "category": "type",
    "text": "GaussianVariogram(sill=s, range=r, nugget=n, distance=d)\n\nA Gaussian variogram with sill s, range r and nugget n. Optionally, use a custom distance d.\n\n\n\n\n\n"
},

{
    "location": "theoretical_variograms/#Gaussian-1",
    "page": "Theoretical variograms",
    "title": "Gaussian",
    "category": "section",
    "text": "gamma(h) = (s - n) left1 - expleft(-3left(frachrright)^2right)right + n cdot 1_(0infty)(h)GaussianVariogram"
},

{
    "location": "theoretical_variograms/#Variography.ExponentialVariogram",
    "page": "Theoretical variograms",
    "title": "Variography.ExponentialVariogram",
    "category": "type",
    "text": "ExponentialVariogram(sill=s, range=r, nugget=n, distance=d)\n\nAn exponential variogram with sill s, range r and nugget n. Optionally, use a custom distance d.\n\n\n\n\n\n"
},

{
    "location": "theoretical_variograms/#Exponential-1",
    "page": "Theoretical variograms",
    "title": "Exponential",
    "category": "section",
    "text": "gamma(h) = (s - n) left1 - expleft(-3left(frachrright)right)right + n cdot 1_(0infty)(h)\nExponentialVariogram"
},

{
    "location": "theoretical_variograms/#Variography.MaternVariogram",
    "page": "Theoretical variograms",
    "title": "Variography.MaternVariogram",
    "category": "type",
    "text": "MaternVariogram(sill=s, range=r, nugget=n, order=ν, distance=d)\n\nA Matérn variogram with sill s, range r and nugget n. The parameter ν is the order of the Bessel function. Optionally, use a custom distance d.\n\n\n\n\n\n"
},

{
    "location": "theoretical_variograms/#Matern-1",
    "page": "Theoretical variograms",
    "title": "Matern",
    "category": "section",
    "text": "gamma(h) = (s - n) left1 - frac2^1-nuGamma(nu) left(sqrt2nufrachrright)^nu K_nuleft(sqrt2nufrachrright)right + n cdot 1_(0infty)(h)MaternVariogram"
},

{
    "location": "theoretical_variograms/#Variography.SphericalVariogram",
    "page": "Theoretical variograms",
    "title": "Variography.SphericalVariogram",
    "category": "type",
    "text": "SphericalVariogram(sill=s, range=r, nugget=n, distance=d)\n\nA spherical variogram with sill s, range r and nugget n. Optionally, use a custom distance d.\n\n\n\n\n\n"
},

{
    "location": "theoretical_variograms/#Spherical-1",
    "page": "Theoretical variograms",
    "title": "Spherical",
    "category": "section",
    "text": "gamma(h) = (s - n) leftleft(frac32left(frachrright) + frac12left(frachrright)^3right) cdot 1_(0r)(h) + 1_rinfty)(h)right + n cdot 1_(0infty)(h)SphericalVariogram"
},

{
    "location": "theoretical_variograms/#Variography.CubicVariogram",
    "page": "Theoretical variograms",
    "title": "Variography.CubicVariogram",
    "category": "type",
    "text": "CubicVariogram(sill=s, range=r, nugget=n, distance=d)\n\nA cubic variogram with sill s, range r and nugget n. Optionally, use a custom distance d.\n\n\n\n\n\n"
},

{
    "location": "theoretical_variograms/#Cubic-1",
    "page": "Theoretical variograms",
    "title": "Cubic",
    "category": "section",
    "text": "gamma(h) = (s - n) leftleft(7left(frachrright)^2 - frac354left(frachrright)^3 + frac72left(frachrright)^5 - frac34left(frachrright)^7right) cdot 1_(0r)(h) + 1_rinfty)(h)right + n cdot 1_(0infty)(h)CubicVariogram"
},

{
    "location": "theoretical_variograms/#Variography.PentasphericalVariogram",
    "page": "Theoretical variograms",
    "title": "Variography.PentasphericalVariogram",
    "category": "type",
    "text": "PentasphericalVariogram\n\nA pentaspherical variogram with sill s, range r and nugget n. Optionally, use a custom distance d.\n\n\n\n\n\n"
},

{
    "location": "theoretical_variograms/#Pentaspherical-1",
    "page": "Theoretical variograms",
    "title": "Pentaspherical",
    "category": "section",
    "text": "gamma(h) = (s - n) leftleft(frac158left(frachrright) - frac54left(frachrright)^3 + frac38left(frachrright)^5right) cdot 1_(0r)(h) + 1_rinfty)(h)right + n cdot 1_(0infty)(h)PentasphericalVariogram"
},

{
    "location": "theoretical_variograms/#Variography.PowerVariogram",
    "page": "Theoretical variograms",
    "title": "Variography.PowerVariogram",
    "category": "type",
    "text": "PowerVariogram(scaling=s, exponent=a, nugget=n, distance=d)\n\nA power variogram with scaling s, exponent a and nugget n. Optionally, use a custom distance d.\n\n\n\n\n\n"
},

{
    "location": "theoretical_variograms/#Power-1",
    "page": "Theoretical variograms",
    "title": "Power",
    "category": "section",
    "text": "gamma(h) = sh^a + n cdot 1_(0infty)(h)PowerVariogram"
},

{
    "location": "theoretical_variograms/#Variography.SineHoleVariogram",
    "page": "Theoretical variograms",
    "title": "Variography.SineHoleVariogram",
    "category": "type",
    "text": "SineHoleVariogram(sill=s, range=r, nugget=n, distance=d)\n\nA sine hole variogram with sill s, range r and nugget n. Optionally, use a custom distance d.\n\n\n\n\n\n"
},

{
    "location": "theoretical_variograms/#Sine-hole-1",
    "page": "Theoretical variograms",
    "title": "Sine hole",
    "category": "section",
    "text": "gamma(h) = (s - n) left1 - fracsin(pi h  r)pi h  rright + n cdot 1_(0infty)(h)SineHoleVariogram"
},

{
    "location": "theoretical_variograms/#Variography.CompositeVariogram",
    "page": "Theoretical variograms",
    "title": "Variography.CompositeVariogram",
    "category": "type",
    "text": "CompositeVariogram(γ₁, γ₂, ..., γₙ)\n\nA composite (additive) model of variograms γ(h) = γ₁(h) + γ₂(h) + ⋯ + γₙ(h).\n\n\n\n\n\n"
},

{
    "location": "theoretical_variograms/#Composite-1",
    "page": "Theoretical variograms",
    "title": "Composite",
    "category": "section",
    "text": "CompositeVariogram"
},

{
    "location": "fitting_variograms/#",
    "page": "Fitting variograms",
    "title": "Fitting variograms",
    "category": "page",
    "text": ""
},

{
    "location": "fitting_variograms/#Variography.fit",
    "page": "Fitting variograms",
    "title": "Variography.fit",
    "category": "function",
    "text": "fit(V, γ, [algo])\n\nFit theoretical variogram type V to empirical variogram γ using algorithm algo. Default algorithm is WeightedLeastSquares.\n\n\n\n\n\nfit(Variogram, γ, [algo])\n\nFit all stationary variogram types to empirical variogram γ, which are subtypes of Variogram, and return the one with minimum error as defined by the algorithm algo.\n\n\n\n\n\n"
},

{
    "location": "fitting_variograms/#Fitting-variograms-1",
    "page": "Fitting variograms",
    "title": "Fitting variograms",
    "category": "section",
    "text": "Fitting theoretical variograms to empirical observations is an important preprocessing step to ensure valid mathematical models of spatial continuity for posterior estimation/simulation with variogram-based methods such as Kriging and sequential Gaussian simulation.Given an empirical variogram, the fit function can be used to perform the fit:Variography.fitCurrently the following fitting methods are implemented:"
},

{
    "location": "fitting_variograms/#Variography.WeightedLeastSquares",
    "page": "Fitting variograms",
    "title": "Variography.WeightedLeastSquares",
    "category": "type",
    "text": "WeightedLeastSquares(weightfun)\n\nFit theoretical variogram using weighted least squares with weighting function weightfun (e.g. h -> 1/h). If not weighting function is provided, bin counts of empirical variogram are normalized and used as weights.\n\n\n\n\n\n"
},

{
    "location": "fitting_variograms/#Weighted-least-squares-1",
    "page": "Fitting variograms",
    "title": "Weighted least squares",
    "category": "section",
    "text": "WeightedLeastSquares"
},

{
    "location": "estimators/#",
    "page": "Kriging estimators",
    "title": "Kriging estimators",
    "category": "page",
    "text": ""
},

{
    "location": "estimators/#KrigingEstimators.fit",
    "page": "Kriging estimators",
    "title": "KrigingEstimators.fit",
    "category": "function",
    "text": "fit(estimator, X, z)\n\nBuild Kriging system from coordinates X and values z and return a fitted estimator.\n\n\n\n\n\n"
},

{
    "location": "estimators/#KrigingEstimators.predict",
    "page": "Kriging estimators",
    "title": "KrigingEstimators.predict",
    "category": "function",
    "text": "predict(estimator, xₒ)\n\nCompute mean and variance for the estimator at coordinates xₒ.\n\n\n\n\n\n"
},

{
    "location": "estimators/#KrigingEstimators.weights",
    "page": "Kriging estimators",
    "title": "KrigingEstimators.weights",
    "category": "function",
    "text": "weights(estimator, xₒ)\n\nCompute the weights λ (and Lagrange multipliers ν) for the estimator at coordinates xₒ.\n\n\n\n\n\n"
},

{
    "location": "estimators/#Kriging-estimators-1",
    "page": "Kriging estimators",
    "title": "Kriging estimators",
    "category": "section",
    "text": "A Kriging estimator has the form:newcommandxboldsymbolx\nnewcommandRmathbbR\nhatZ(x_0) = lambda_1 Z(x_1) + lambda_2 Z(x_2) + cdots + lambda_n Z(x_n)quad x_i in R^m lambda_i in Rwith Zcolon R^m times Omega to R a random field.This package implements the following Kriging variants:Simple Kriging\nOrdinary Kriging\nUniversal Kriging\nExternal Drift KrigingAll these variants follow the same interface: an estimator object is first created with a given set of parameters (e.g. estimator = OrdinaryKriging(γ)), it is then combined with the data krig = fit(estimator, X, z) to obtain predictions at new locations predict(krig, xₒ).The fit function takes care of building the Kriging system and factorizing the LHS with an appropriate decomposition (e.g. Cholesky, LU):KrigingEstimators.fitThe predict function performs the estimation at a given location:predictAlternative constructors are provided for convenience that will immediately fit the Kriging parameters to the data. In this case, the data is passed as the first argument. For example:OrdinaryKriging(X, z, γ)creates a OrdinaryKriging(γ) estimator and fits it to (X,z).A typical use of the interface is as follows:# build and factorize the system\nsk = SimpleKriging(X, z, γ, mean(z))\n\n# estimate at various locations\nfor xₒ in [x₁, x₂, x₃]\n  μ, σ² = predict(sk, xₒ)\nendFor advanced users, the Kriging weights and Lagrange multipliers at a given location can be accessed with the weights method. This method returns a KrigingWeights object containing a field λ for the weights and a field ν for the Lagrange multipliers:weightsFor example with Ordinary Kriging:ok = OrdinaryKriging(X, z, γ)\nw = weights(ok, xₒ)\nw.λ, w.ν"
},

{
    "location": "estimators/#KrigingEstimators.SimpleKriging",
    "page": "Kriging estimators",
    "title": "KrigingEstimators.SimpleKriging",
    "category": "type",
    "text": "SimpleKriging(γ, μ)\nSimpleKriging(X, z, γ, μ)\n\nSimple Kriging with variogram model γ and constant mean μ.\n\nOptionally, pass the coordinates X and values z to the fit function.\n\nNotes\n\nSimple Kriging requires stationary variograms\n\n\n\n\n\n"
},

{
    "location": "estimators/#Simple-Kriging-1",
    "page": "Kriging estimators",
    "title": "Simple Kriging",
    "category": "section",
    "text": "In Simple Kriging, the mean mu of the random field is assumed to be constant and known. The resulting linear system is:newcommandCboldsymbolC\nnewcommandcboldsymbolc\nnewcommandlboldsymbollambda\nnewcommand1boldsymbol1\nnewcommandzboldsymbolz\nbeginbmatrix\ncov(x_1x_2)  cov(x_1x_2)  cdots  cov(x_1x_n) \ncov(x_2x_1)  cov(x_2x_2)  cdots  cov(x_2x_n) \nvdots  vdots  ddots  vdots \ncov(x_nx_1)  cov(x_nx_2)  cdots  cov(x_nx_n)\nendbmatrix\nbeginbmatrix\nlambda_1 \nlambda_2 \nvdots \nlambda_n\nendbmatrix\n=\nbeginbmatrix\ncov(x_1x_0) \ncov(x_2x_0) \nvdots \ncov(x_nx_0)\nendbmatrixor in matricial form Cl = c. We subtract the given mean from the observations boldsymboly = z - mu 1 and compute the mean and variance at location x_0:mu(x_0) = mu + boldsymboly^top lsigma^2(x_0) = cov(0) - c^top lSimpleKriging"
},

{
    "location": "estimators/#KrigingEstimators.OrdinaryKriging",
    "page": "Kriging estimators",
    "title": "KrigingEstimators.OrdinaryKriging",
    "category": "type",
    "text": "OrdinaryKriging(γ)\nOrdinaryKriging(X, z, γ)\n\nOrdinary Kriging with variogram model γ.\n\nOptionally, pass the coordinates X and values z to the fit function.\n\n\n\n\n\n"
},

{
    "location": "estimators/#Ordinary-Kriging-1",
    "page": "Kriging estimators",
    "title": "Ordinary Kriging",
    "category": "section",
    "text": "In Ordinary Kriging the mean of the random field is assumed to be constant and unknown. The resulting linear system is:newcommandGboldsymbolGamma\nnewcommandgboldsymbolgamma\nbeginbmatrix\nG  1 \n1^top  0\nendbmatrix\nbeginbmatrix\nl \nnu\nendbmatrix\n=\nbeginbmatrix\ng \n1\nendbmatrixwith nu the Lagrange multiplier associated with the constraint 1^top l = 1. The mean and variance at location x_0 are given by:mu(x_0) = z^top lambdasigma^2(x_0) =  beginbmatrix g  1 endbmatrix^top beginbmatrix l  nu endbmatrixOrdinaryKriging"
},

{
    "location": "estimators/#KrigingEstimators.UniversalKriging",
    "page": "Kriging estimators",
    "title": "KrigingEstimators.UniversalKriging",
    "category": "type",
    "text": "UniversalKriging(γ, degree, dim)\nUniversalKriging(X, z, γ, degree)\n\nUniversal Kriging with variogram model γ and polynomial degree on a spatial domain of dimension dim.\n\nOptionally, pass the coordinates X and values z to the fit function.\n\nNotes\n\nOrdinaryKriging is recovered for 0th degree polynomial\nFor non-polynomial mean, see ExternalDriftKriging\n\n\n\n\n\n"
},

{
    "location": "estimators/#Universal-Kriging-1",
    "page": "Kriging estimators",
    "title": "Universal Kriging",
    "category": "section",
    "text": "In Universal Kriging, the mean of the random field is assumed to be a polynomial of the spatial coordinates:mu(x) = sum_k=1^N_d beta_k f_k(x)with N_d monomials f_k of degree up to d. For example, in 2D there are 6 monomials of degree up to 2:mu(x_1x_2) =  beta_1 1 + beta_2 x_1 + beta_3 x_2 + beta_4 x_1 x_2 + beta_5 x_1^2 + beta_6 x_2^2The choice of the degree d determines the size of the polynomial matrixnewcommandFboldsymbolF\nnewcommandfboldsymbolf\nF =\nbeginbmatrix\nf_1(x_1)  f_2(x_1)  cdots  f_N_d(x_1) \nf_1(x_2)  f_2(x_2)  cdots  f_N_d(x_2) \nvdots  vdots  ddots  vdots \nf_1(x_n)  f_2(x_n)  cdots  f_N_d(x_n)\nendbmatrixand polynomial vector f = beginbmatrix f_1(x_0)  f_2(x_0)  cdots  f_N_d(x_0) endbmatrix^top.The variogram determines the variogram matrix:G =\nbeginbmatrix\ngamma(x_1x_1)  gamma(x_1x_2)  cdots  gamma(x_1x_n) \ngamma(x_2x_1)  gamma(x_2x_2)  cdots  gamma(x_2x_n) \nvdots  vdots  ddots  vdots \ngamma(x_nx_1)  gamma(x_nx_2)  cdots  gamma(x_nx_n)\nendbmatrixand the variogram vector g = beginbmatrix gamma(x_1x_0)  gamma(x_2x_0)  cdots  gamma(x_nx_0) endbmatrix^top.The resulting linear system is:beginbmatrix\nG  F \nF^top  boldsymbol0\nendbmatrix\nbeginbmatrix\nl \nboldsymbolnu\nendbmatrix\n=\nbeginbmatrix\ng \nf\nendbmatrixwith boldsymbolnu the Lagrange multipliers associated with the universal constraints. The mean and variance at location x_0 are given by:mu(x_0) = z^top lsigma^2(x_0) = beginbmatrixg  fendbmatrix^top beginbmatrixl  boldsymbolnuendbmatrixUniversalKriging"
},

{
    "location": "estimators/#KrigingEstimators.ExternalDriftKriging",
    "page": "Kriging estimators",
    "title": "KrigingEstimators.ExternalDriftKriging",
    "category": "type",
    "text": "ExternalDriftKriging(γ, drifts)\nExternalDriftKriging(X, z, γ, drifts)\n\nExternal Drift Kriging with variogram model γ and external drifts functions.\n\nOptionally, pass the coordinates X and values z to the fit function.\n\nNotes\n\nExternal drift functions should be smooth\nKriging system with external drift is often unstable\nInclude a constant drift (e.g. x->1) for unbiased estimation\nOrdinaryKriging is recovered for drifts = [x->1]\nFor polynomial mean, see UniversalKriging\n\n\n\n\n\n"
},

{
    "location": "estimators/#External-Drift-Kriging-1",
    "page": "Kriging estimators",
    "title": "External Drift Kriging",
    "category": "section",
    "text": "In External Drift Kriging, the mean of the random field is assumed to be a combination of known smooth functions:mu(x) = sum_k beta_k m_k(x)Differently than Universal Kriging, the functions m_k are not necessarily polynomials of the spatial coordinates. In practice, they represent a list of variables that is strongly correlated (and co-located) with the variable being estimated.External drifts are known to cause numerical instability. Give preference to other Kriging variants if possible.ExternalDriftKriging"
},

{
    "location": "comparisons/#",
    "page": "Solver comparisons",
    "title": "Solver comparisons",
    "category": "page",
    "text": ""
},

{
    "location": "comparisons/#Solver-comparisons-1",
    "page": "Solver comparisons",
    "title": "Solver comparisons",
    "category": "section",
    "text": "GeoStats.jl was designed to, among other things, facilitate rigorous scientific comparison of different geostatistical solvers in the literature. As a user of geostatistics, you may be interested in applying various solvers on a given data set and pick the ones with best performance. As a researcher in the field, you may be interested in benchmarking your new algorithm against other established methods.Typically, this task would demand a great amount of time from the practitioner, which would become responsible for pre/post processing the data himself/herself before it can be fed into the software. But that is not the only issue, quantitative comparison of geostatistical solvers is an area of active research. Although a few comparison methods exist, their implementation is not necessarily straighforward.In this project, solvers can be compared without effort. Below is a list of currenlty implemented comparison methods. For examples of usage, please consult the GeoStatsTutorials repository."
},

{
    "location": "comparisons/#GeoStats.VisualComparison",
    "page": "Solver comparisons",
    "title": "GeoStats.VisualComparison",
    "category": "type",
    "text": "VisualComparison([plot options])\n\nCompare solvers by plotting the results side by side.\n\nExamples\n\njulia> compare([solver₁, solver₂], problem, VisualComparison())\n\n\n\n\n\n"
},

{
    "location": "comparisons/#Visual-comparison-1",
    "page": "Solver comparisons",
    "title": "Visual comparison",
    "category": "section",
    "text": "Visual comparison can be useful for qualitivative assessment of solver performance and for debugging purposes. In this case, solvers are used to solve a problem and their solutions are plotted side by side.VisualComparison"
},

{
    "location": "comparisons/#GeoStats.CrossValidation",
    "page": "Solver comparisons",
    "title": "GeoStats.CrossValidation",
    "category": "type",
    "text": "CrossValidation(k, [shuffle])\n\nCompare estimation solvers using k-fold cross-validation. Optionally shuffle the data (default to true).\n\nCrossValidation(partitioner)\n\nCompare estimation solvers using cross-validation by splitting the data with a partitioner. This method is a generalization of k-fold cross-validation, which uses a UniformPartitioner to split the data.\n\nThe result of the comparison stores the errors for each variable of the problem.\n\nExamples\n\nCompare solver₁ and solver₂ on a problem with variable :var using 10 folds. Plot error distribution:\n\njulia> result = compare([solver₁, solver₂], problem, CrossValidation(10))\njulia> plot(result, bins=50)\n\n\n\n\n\n"
},

{
    "location": "comparisons/#Cross-validation-1",
    "page": "Solver comparisons",
    "title": "Cross-validation",
    "category": "section",
    "text": "k-fold cross-validation is a popular statistical method for quantitative comparison of estimation solvers. The spatial data is split into k folds as the name implies and the solvers are used to estimate (or predict) one of the folds given the others.CrossValidation"
},

{
    "location": "plotting/#",
    "page": "Plotting",
    "title": "Plotting",
    "category": "page",
    "text": ""
},

{
    "location": "plotting/#Plotting-1",
    "page": "Plotting",
    "title": "Plotting",
    "category": "section",
    "text": "GeoStats.jl is integrated with the Julia Plots.jl API. This means that many objects defined in the package can be plotted directly without data format conversions.For example, below we plot various theoretical variograms with the plot command from Plots.jl:using GeoStats\nusing Plots\ngr(size=(600,400)) # hide\n\nplot(GaussianVariogram(), maxlag=3., label=\"Gaussian\")\nplot!(ExponentialVariogram(), maxlag=3., label=\"Exponential\")\nplot!(SphericalVariogram(), maxlag=3., label=\"Spherical\")\nplot!(MaternVariogram(), maxlag=3., label=\"Matern\")\nsavefig(\"images/variograms.svg\") # hide(Image: )and various spatial domains:plot(RegularGrid{Float64}(10,10,10))\nsavefig(\"images/regulargrid.svg\") # hide(Image: )plot(PointSet(rand(3,10)))\nsavefig(\"images/pointset.svg\") # hide(Image: )Besides plotting GeoStats.jl objects directly, a few other plots are provided for exploring spatial data."
},

{
    "location": "plotting/#h-scatter-1",
    "page": "Plotting",
    "title": "h-scatter",
    "category": "section",
    "text": "A h-scatter plot between two variables var1 and var2 (possibly with var2 = var1) is a simple scatter plot in which the dots represent all ordered pairs of values of var1 and var2 at a given lag h.using GeoStats\nusing Plots\n\nhscatter(geodata, :value, lags=[0.,1.,2.,3.])(Image: )"
},

{
    "location": "plotting/#varplane-1",
    "page": "Plotting",
    "title": "varplane",
    "category": "section",
    "text": "A variogram plane (i.e. varplane) plot is a visualization that displays a collection of directional variograms for all angles in a given plane for 2D or 3D spatial data.using GeoStats\nusing Plots\n\n# horizontal plane ==> theta=0, phi=90\nvarplane(geodata, :value, theta=0, phi=90)(Image: )"
},

{
    "location": "tutorials/#",
    "page": "Tutorials",
    "title": "Tutorials",
    "category": "page",
    "text": ""
},

{
    "location": "tutorials/#Tutorials-1",
    "page": "Tutorials",
    "title": "Tutorials",
    "category": "section",
    "text": "A set of Jupyter notebooks demonstrating the current functionality of the project is available in GeoStatsTutorials. Contributions are very welcome, please check the Contributing page."
},

{
    "location": "contributing/#",
    "page": "Contributing",
    "title": "Contributing",
    "category": "page",
    "text": ""
},

{
    "location": "contributing/#Contributing-1",
    "page": "Contributing",
    "title": "Contributing",
    "category": "section",
    "text": "First off, thank you for considering contributing to GeoStats.jl. It’s people like you that make this project so much fun. Below are a few suggestions to speed up the collaboration process."
},

{
    "location": "contributing/#Reporting-issues-1",
    "page": "Contributing",
    "title": "Reporting issues",
    "category": "section",
    "text": "If you are experiencing issues or have discovered a bug, please report it on GitHub. To make the resolution process easier, please include the version of Julia and GeoStats.jl in your writeup. These can be found with two commands:julia> versioninfo()\npkg> status"
},

{
    "location": "contributing/#Feature-requests-1",
    "page": "Contributing",
    "title": "Feature requests",
    "category": "section",
    "text": "If you have suggestions of improvement or algorithms that you would like to see implemented in GeoStats.jl, please open an issue on GitHub. Suggestions as well as feature requests are very welcome."
},

{
    "location": "contributing/#Code-contribution-1",
    "page": "Contributing",
    "title": "Code contribution",
    "category": "section",
    "text": "If you have code that you would like to contribute to GeoStats.jl, that is awesome! Please open an issue before you create the pull request on GitHub so that we make sure your idea is aligned with our goals for the project.You can also develop your own solver independently, under your own license terms. Please check GeoStatsBase.jl and GeoStatsDevTools.jl for information on how to write solvers that are compatible with the framework."
},

{
    "location": "about/community/#",
    "page": "Community",
    "title": "Community",
    "category": "page",
    "text": "Everyone is welcome to join our community in our gitter channel.(Image: gitter)"
},

{
    "location": "about/license/#",
    "page": "License",
    "title": "License",
    "category": "page",
    "text": "The GeoStats.jl package is licensed under the ISC License:Copyright (c) 2015, Júlio Hoffimann Mendes <juliohm@stanford.edu>\n\nPermission to use, copy, modify, and/or distribute this software for any\npurpose with or without fee is hereby granted, provided that the above\ncopyright notice and this permission notice appear in all copies.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\" AND THE AUTHOR DISCLAIMS ALL WARRANTIES\nWITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF\nMERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR\nANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES\nWHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN\nACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF\nOR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE."
},

{
    "location": "about/citing/#",
    "page": "Citing",
    "title": "Citing",
    "category": "page",
    "text": "If you find GeoStats.jl useful in your work, please consider citing it:(Image: JOSS) (Image: DOI)@ARTICLE{Hoffimann2018,\n  title={GeoStats.jl – High-performance geostatistics in Julia},\n  author={Hoffimann, Júlio},\n  journal={Journal of Open Source Software},\n  publisher={The Open Journal},\n  volume={3},\n  pages={692},\n  number={24},\n  ISSN={2475-9066},\n  DOI={10.21105/joss.00692},\n  url={http://dx.doi.org/10.21105/joss.00692},\n  year={2018},\n  month={Apr}\n}"
},

{
    "location": "developers/#",
    "page": "Developer guide",
    "title": "Developer guide",
    "category": "page",
    "text": ""
},

{
    "location": "developers/#Developer-guide-1",
    "page": "Developer guide",
    "title": "Developer guide",
    "category": "section",
    "text": "This guide provides an overview of the tools implemented in the framework that can be used by developers while writing new geostatistical solvers. If you have any question, please don\'t hesitate to ask in our community channel."
},

{
    "location": "developers/#GeoStatsBase.@estimsolver",
    "page": "Developer guide",
    "title": "GeoStatsBase.@estimsolver",
    "category": "macro",
    "text": "@estimsolver solver body\n\nA helper macro to create a estimation solver named solver with parameters specified in body. For examples, please check the documentation for @metasolver.\n\n\n\n\n\n"
},

{
    "location": "developers/#GeoStatsBase.@simsolver",
    "page": "Developer guide",
    "title": "GeoStatsBase.@simsolver",
    "category": "macro",
    "text": "@estimsolver solver body\n\nA helper macro to create a simulation solver named solver with parameters specified in body. For examples, please check the documentation for @metasolver.\n\n\n\n\n\n"
},

{
    "location": "developers/#Solver-macros-1",
    "page": "Developer guide",
    "title": "Solver macros",
    "category": "section",
    "text": "To define a new solver with the same interface of built-in solvers, the developer can use solver macros:@estimsolver MySolver begin\n  @param variogram = GaussianVariogram()\n  @param mean # no default parameter\n  @global verbose = true\nendThe @estimsolver macro defines a new estimation solver MySolver, a parameter type MySolverParam, and an outer constructor that accepts parameters for each variable as well as global parameters.Similarly, simulation solvers can be created with the @simsolver macro.@estimsolver\n@simsolver"
},

{
    "location": "developers/#GeoStatsDevTools.SimplePath",
    "page": "Developer guide",
    "title": "GeoStatsDevTools.SimplePath",
    "category": "type",
    "text": "SimplePath(domain)\n\nA simple (or default) path on a spatial domain.\n\n\n\n\n\n"
},

{
    "location": "developers/#GeoStatsDevTools.RandomPath",
    "page": "Developer guide",
    "title": "GeoStatsDevTools.RandomPath",
    "category": "type",
    "text": "RandomPath(domain)\n\nA random path on a spatial domain.\n\n\n\n\n\n"
},

{
    "location": "developers/#GeoStatsDevTools.SourcePath",
    "page": "Developer guide",
    "title": "GeoStatsDevTools.SourcePath",
    "category": "type",
    "text": "SourcePath(domain, sources)\n\nA path over a spatial domain that starts at given source locations sources and progresses outwards.\n\n\n\n\n\n"
},

{
    "location": "developers/#GeoStatsDevTools.BallNeighborhood",
    "page": "Developer guide",
    "title": "GeoStatsDevTools.BallNeighborhood",
    "category": "type",
    "text": "BallNeighborhood(domain, radius)\n\nA ball neighborhood of a given radius on a spatial domain.\n\n\n\n\n\n"
},

{
    "location": "developers/#GeoStatsDevTools.CylinderNeighborhood",
    "page": "Developer guide",
    "title": "GeoStatsDevTools.CylinderNeighborhood",
    "category": "type",
    "text": "CylinderNeighborhood(domain, radius, height)\n\nA cylinder neighborhood with a given radius and height on a spatial domain.\n\nNotes\n\nThe height parameter is only half of the actual cylinder height.\n\n\n\n\n\n"
},

{
    "location": "developers/#Domain-navigation-1",
    "page": "Developer guide",
    "title": "Domain navigation",
    "category": "section",
    "text": "To navigate through all locations of a (finite) spatial domain, we introduce the concept of paths. This package defines various path types such as SimplePath and RandomPath that can be used for iteration over any domain:# prints 1, 2, ..., npoints(domain)\nfor location in SimplePath(domain)\n  println(location)\nendSimplePath\nRandomPath\nSourcePathAt a given location of a domain, we can query neighboring locations with the concept of neighborhoods. Various neighborhood types such as BallNeighborhood can be used to find all locations within a specified radius:# define ball neighborhood with radius 10\nneighborhood = Ballneighborhood(domain, 10.)\n\n# find neighbors for all locations of the domain\nfor location in RandomPath(domain)\n  neighbors = neighborhood(location)\nendBallNeighborhood\nCylinderNeighborhood"
},

{
    "location": "developers/#GeoStatsBase.SimpleMapper",
    "page": "Developer guide",
    "title": "GeoStatsBase.SimpleMapper",
    "category": "type",
    "text": "SimpleMapper\n\nA mapping strategy in which data points are assigned to their nearest point in the domain.\n\n\n\n\n\n"
},

{
    "location": "developers/#GeoStatsBase.CopyMapper",
    "page": "Developer guide",
    "title": "GeoStatsBase.CopyMapper",
    "category": "type",
    "text": "CopyMapper\n\nA mapping strategy in which data points are copied directly to the domain at specified locations.\n\n\n\n\n\n"
},

{
    "location": "developers/#Mapping-spatial-data-1",
    "page": "Developer guide",
    "title": "Mapping spatial data",
    "category": "section",
    "text": "In GeoStats.jl, spatial data and domain types are disconnected from each other for many reasons:To enable agressive parallelism and to avoid expensive data copies\nTo give developers the power of deciding when and where data is to be copied\nTo enable higher-level comparison schemes such as cross-validationTo map spatial data onto a domain, we introduce the notion of mappers. For example, a SimpleMapper can be used to find the mapping from domain locations to data locations for a given variable:# construct a problem mapping data onto domain using SimpleMapper (default)\nproblem = EstimationProblem(..., mapper=SimpleMapper())\n\n# get the mapping for the `:precipitation` variable\nmapping = datamap(problem, :precipitation)\n\nfor (loc, datloc) in mapping\n  println(\"Domain location $loc has data at spatial data index $datloc\")\nendSimpleMapper\nCopyMapper"
},

{
    "location": "developers/#GeoStatsDevTools.UniformPartitioner",
    "page": "Developer guide",
    "title": "GeoStatsDevTools.UniformPartitioner",
    "category": "type",
    "text": "UniformPartitioner(k, [shuffle])\n\nA method for partitioning spatial data uniformly into k subsets of approximately equal size. Optionally shuffle the data (default to true).\n\n\n\n\n\n"
},

{
    "location": "developers/#GeoStatsDevTools.PlanePartitioner",
    "page": "Developer guide",
    "title": "GeoStatsDevTools.PlanePartitioner",
    "category": "type",
    "text": "PlanePartitioner(normal; tol=1e-6)\n\nA method for partitioning spatial data into a family of hyperplanes defined by a normal direction. Two points x and y belong to the same hyperplane when (x - y) ⋅ normal < tol.\n\n\n\n\n\n"
},

{
    "location": "developers/#GeoStatsDevTools.DirectionPartitioner",
    "page": "Developer guide",
    "title": "GeoStatsDevTools.DirectionPartitioner",
    "category": "type",
    "text": "DirectionPartitioner(direction; atol=20., btol=.95)\n\nA method for partitioning spatial data along a given direction with angle tolerance atol in degrees and bandwidth tolerance btol.\n\n      ________________\n     /        | btol\n    /         |             ILLUSTRATION OF DIRECTION TOLERANCES\n    ----------------->\n    \\ ) atol\n     \\________________\n\n\n\n\n\n"
},

{
    "location": "developers/#GeoStatsDevTools.SpatialPredicatePartitioner",
    "page": "Developer guide",
    "title": "GeoStatsDevTools.SpatialPredicatePartitioner",
    "category": "type",
    "text": "SpatialPredicatePartitioner(predicate)\n\nA method for partitioning spatial data based on a predicate. Given two coordinates x and y, the value predicate(x,y) informs whether or not the points belong to the same subset.\n\n\n\n\n\n"
},

{
    "location": "developers/#GeoStatsDevTools.HierarchicalPartitioner",
    "page": "Developer guide",
    "title": "GeoStatsDevTools.HierarchicalPartitioner",
    "category": "type",
    "text": "HierarchicalPartitioner(first, second)\n\nA partitioning method in which a first partition is applied and then a second partition is applied to each subset of the first.\n\n\n\n\n\n"
},

{
    "location": "developers/#Partitioning-spatial-data-1",
    "page": "Developer guide",
    "title": "Partitioning spatial data",
    "category": "section",
    "text": "To efficiently partition spatial data, we introduce the notion of partitioners. One can loop over subsets of the data without allocating memory:for dataview in partition(spatialdata, DirectionPartitioner(direction))\n  # do something with view of data\nendComplex partition schemes can be produced hierarchically with a HierarchicalPartitioner.UniformPartitioner\nPlanePartitioner\nDirectionPartitioner\nSpatialPredicatePartitioner\nHierarchicalPartitioner"
},

{
    "location": "developers/#Solver-example-1",
    "page": "Developer guide",
    "title": "Solver example",
    "category": "section",
    "text": "For illustration purposes, we write an estimation solver that, for each location of the domain, assigns the 2-norm of the coordinates as the mean and the ∞-norm as the variance:using GeoStatsBase\nusing GeoStatsDevTools\nusing LinearAlgebra: norm\n\n# implement method for new solver\nimport GeoStatsBase: solve\n\n@estimsolver NormSolver begin\n  @param pmean = 2\n  @param pvar  = Inf\nend\n\nfunction solve(problem::EstimationProblem, solver::NormSolver)\n  pdomain = domain(problem)\n\n  # results for each variable\n  μs = []; σs = []\n\n  for (var,V) in variables(problem)\n    # get user parameters\n    if var in keys(solver.params)\n      varparams = solver.params[var]\n    else\n      varparams = NormSolverParam()\n    end\n\n    # allocate memory for result\n    varμ = Vector{V}(undef, npoints(pdomain))\n    varσ = Vector{V}(undef, npoints(pdomain))\n\n    for location in SimplePath(pdomain)\n      x = coordinates(pdomain, location)\n\n      varμ[location] = norm(x, varparams.pmean)\n      varσ[location] = norm(x, varparams.pvar)\n    end\n\n    push!(μs, var => varμ)\n    push!(σs, var => varσ)\n  end\n\n  EstimationSolution(pdomain, Dict(μs), Dict(σs))\nend;We can test the newly defined solver on an estimation problem:using GeoStats\nusing Plots\ngr(size=(600,400)) # hide\n\n# dummy spatial data with a single point and no value\nspatialdata = PointSetData(Dict(:z => [NaN]), reshape([0.,0.], 2, 1))\n\n# estimate on a regular grid\nspatialgrid = RegularGrid{Float64}(100,100)\n\n# the problem to be solved\nproblem = EstimationProblem(spatialdata, spatialgrid, :z)\n\n# our new solver\nsolver = NormSolver()\n\nsolution = solve(problem, solver)\n\nplot(solution)\npng(\"images/normsolver.png\") # hide(Image: )"
},

{
    "location": "links/#",
    "page": "Index",
    "title": "Index",
    "category": "page",
    "text": ""
},

{
    "location": "links/#Index-1",
    "page": "Index",
    "title": "Index",
    "category": "section",
    "text": "Order   = [:type, :function]"
},

]}
