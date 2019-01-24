var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#GeoStatsBase.jl-1",
    "page": "Readme",
    "title": "GeoStatsBase.jl",
    "category": "section",
    "text": "[![][travis-img]][travis-url] [![][julia-pkg-img]][julia-pkg-url]This package contains problem and solution specifications for the GeoStats.jl framework. It is not intended to be used as a standalone package, and only exists to make it possible for researchers to write their own solvers independently of the main project, and its development cycle. A quick overview of the problems defined in the package is provided, as well as short instructions on how to write solvers.For additional developer tools, please check GeoStatsDevTools.jl."
},

{
    "location": "#Contents-1",
    "page": "Readme",
    "title": "Contents",
    "category": "section",
    "text": "Geostatistical problems\nEstimation\nSimulation\nWriting your own solver\nAsking for help"
},

{
    "location": "#Geostatistical-problems-1",
    "page": "Readme",
    "title": "Geostatistical problems",
    "category": "section",
    "text": ""
},

{
    "location": "#EstimationProblem-1",
    "page": "Readme",
    "title": "EstimationProblem",
    "category": "section",
    "text": "Objects of this type store the spatial data, the geometry of the domain, and the target variables to be estimated.struct EstimationProblem{S<:AbstractSpatialData,D<:AbstractDomain} <: AbstractProblem\n  spatialdata::S\n  domain::D\n  targetvars::Dict{Symbol,DataType}\nendA solution to an estimation problem is constructed with the EstimationSolution type. Objects of this type store the geometry of the domain, the mean estimate, and the variance, for each variable of the problem.struct EstimationSolution{D<:AbstractDomain} <: AbstractSolution\n  domain::D\n  mean::Dict{Symbol,Vector}\n  variance::Dict{Symbol,Vector}\nend"
},

{
    "location": "#SimulationProblem-1",
    "page": "Readme",
    "title": "SimulationProblem",
    "category": "section",
    "text": "Objects of this type store the spatial data (optional), the geometry of the domain, the target variables to be estimated, and the number of realizations. The function hasdata can be used to check if the given simulation problem is conditional or unconditional.struct SimulationProblem{S<:Union{AbstractSpatialData,Nothing},D<:AbstractDomain} <: AbstractProblem\n  spatialdata::S\n  domain::D\n  targetvars::Dict{Symbol,DataType}\n  nreals::Int\nendA solution to a simulation problem is constructed with the SimulationSolution type. Objects of this type store the geometry of the domain, and the realizations, for each variable of the problem.struct SimulationSolution{D<:AbstractDomain} <: AbstractSolution\n  domain::D\n  realizations::Dict{Symbol,Vector{Vector}}\nend"
},

{
    "location": "#Writing-your-own-solver-1",
    "page": "Readme",
    "title": "Writing your own solver",
    "category": "section",
    "text": "The task of writing a solver for a problem reduces to writing a simple function in Julia that takes the problem as input and returns the solution. In this tutorial, I will write an estimation solver that is not very useful (it fills the domain with random numbers), but illustrates the development process."
},

{
    "location": "#Create-the-package-1",
    "page": "Readme",
    "title": "Create the package",
    "category": "section",
    "text": "Install the PkgTemplates.jl package and create a new project:using PkgTemplates\n\ngenerate_interactive(\"MySolver\")This command will create a folder named ~/user/.julia/v0.x/MySolver with all the files that are necessary to start coding. You can check that the package is available by loading it in the Julia prompt:using MySolverChoose your favorite open source license for your solver. If you don\'t have a favorite, I suggest using the ISC license. This license is equivalent to the MIT and BSD 2-Clause licenses, plus it eliminates unncessary language. All these licenses are permissive meaning that the software that uses it can be incorported into commercial products."
},

{
    "location": "#Import-GeoStatsBase-1",
    "page": "Readme",
    "title": "Import GeoStatsBase",
    "category": "section",
    "text": "After the package is created, open the main source file MySolver.jl and add the following line:using GeoStatsBase\nimport GeoStatsBase: solveThese lines brings all the symbols defined in GeoStatsBase into scope, and tells Julia that the method solve will be specialized for the new solver. Next, give your solver a name:struct MyCoolSolver <: AbstractEstimationSolver\n  # optional parameters go here\nendand export it so that it becomes available for users:export MyCoolSolverAt this point, the MySolver.jl file should have the following content:module MySolver\n\nusing GeoStatsBase\nimport GeoStatsBase: solve\n\nexport MyCoolSolver\n\nstruct MyCoolSolver <: AbstractEstimationSolver\n  # optional parameters go here\nend\n\nend # module"
},

{
    "location": "#Write-the-algorithm-1",
    "page": "Readme",
    "title": "Write the algorithm",
    "category": "section",
    "text": "Now that your solver type is defined, write your algorithm. Write a function called solve that takes an estimation problem and your solver, and returns an estimation solution:function solve(problem::EstimationProblem, solver::MyCoolSolver)\n  pdomain = domain(problem)\n\n  mean = Dict{Symbol,Vector}()\n  variance = Dict{Symbol,Vector}()\n\n  for (var,V) in variables(problem)\n    push!(mean, var => rand(npoints(pdomain)))\n    push!(variance, var => rand(npoints(pdomain)))\n  end\n\n  EstimationSolution(pdomain, mean, variance)\nendPaste this function somewhere in your package, and you are all set."
},

{
    "location": "#Test-the-solver-1",
    "page": "Readme",
    "title": "Test the solver",
    "category": "section",
    "text": "To test your new solver, load the GeoStats.jl package and solve a simple problem:using GeoStats\nusing MySolver\n\ngeodata = readgeotable(\"somedata.csv\", coordnames=[:x,:y])\ndomain  = RegularGrid{Float64}(100,100)\nproblem = EstimationProblem(geodata, grid, :value)\n\nsolution = solve(problem, MyCoolSolver())\n\nplot(solution)"
},

{
    "location": "#Simulation-solvers-1",
    "page": "Readme",
    "title": "Simulation solvers",
    "category": "section",
    "text": "The process of writing a simulation solver is very similar, but there is an alternative function to solve called solve_single that is preferred. The function solve_single takes a simulation problem, one of the variables to be simulated, a solver, and a preprocessed input, and returns a vector with the simulation results:function solve_single(problem::SimulationProblem, var::Symbol, solver::MySimSolver, preproc)\n  # retrieve problem info\n  pdata = data(problem)\n  pdomain = domain(problem)\n\n  # output is a single realization\n  realization = Vector(npoints(pdomain))\n\n  # fill realization with hard data\n  for (loc, datloc) in datamap(problem, var)\n    realization[loc] = value(pdata, datloc, var)\n  end\n\n  # algorithm goes here\n  # ...\n\n  realization\nendThis function is preferred over solve if your algorithm is the same for every single realization (the algorithm is only a function of the random seed). In this case, GeoStats.jl will provide an implementation of solve for you that calls solve_single in parallel.The argument preproc is ignored unless the function preprocess is also defined for the solver. The function takes a simulation problem and a solver, and returns an arbitrary object with preprocessed data:preprocess(problem::SimulationProblem, solver::MySimSolver) = nothing"
},

{
    "location": "#Asking-for-help-1",
    "page": "Readme",
    "title": "Asking for help",
    "category": "section",
    "text": "If you have any questions, please contact our community on the gitter channel.[travis-img]: https://travis-ci.org/juliohm/GeoStatsBase.jl.svg?branch=master [travis-url]: https://travis-ci.org/juliohm/GeoStatsBase.jl[julia-pkg-img]: http://pkg.julialang.org/badges/GeoStatsBase_0.7.svg [julia-pkg-url]: http://pkg.julialang.org/?pkg=GeoStatsBase"
},

{
    "location": "autodocs/#GeoStatsBase.AbstractDomain",
    "page": "Docstrings",
    "title": "GeoStatsBase.AbstractDomain",
    "category": "type",
    "text": "AbstractDomain{T,N}\n\nA spatial domain with N dimensions in which points are represented with coordinates of type T.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsBase.AbstractEstimSolverComparison",
    "page": "Docstrings",
    "title": "GeoStatsBase.AbstractEstimSolverComparison",
    "category": "type",
    "text": "AbstractEstimSolverComparison\n\nA method for comparing estimation solvers.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsBase.AbstractEstimationSolver",
    "page": "Docstrings",
    "title": "GeoStatsBase.AbstractEstimationSolver",
    "category": "type",
    "text": "AbstractEstimationSolver\n\nA solver for a geostatistical estimation problem.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsBase.AbstractMapper",
    "page": "Docstrings",
    "title": "GeoStatsBase.AbstractMapper",
    "category": "type",
    "text": "AbstractMapper\n\nA mapping strategy for mapping spatial data onto a domain.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsBase.AbstractProblem",
    "page": "Docstrings",
    "title": "GeoStatsBase.AbstractProblem",
    "category": "type",
    "text": "AbstractProblem\n\nA generic problem in geostatistics.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsBase.AbstractSimSolverComparison",
    "page": "Docstrings",
    "title": "GeoStatsBase.AbstractSimSolverComparison",
    "category": "type",
    "text": "AbstractSimSolverComparison\n\nA method for comparing simulation solvers.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsBase.AbstractSimulationSolver",
    "page": "Docstrings",
    "title": "GeoStatsBase.AbstractSimulationSolver",
    "category": "type",
    "text": "AbstractSimulationSolver\n\nA solver for a geostatistical simulation problem.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsBase.AbstractSolution",
    "page": "Docstrings",
    "title": "GeoStatsBase.AbstractSolution",
    "category": "type",
    "text": "AbstractSolution\n\nA generic solution to a problem in geostatistics.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsBase.AbstractSolver",
    "page": "Docstrings",
    "title": "GeoStatsBase.AbstractSolver",
    "category": "type",
    "text": "AbstractSolver\n\nA solver for geostatistical problems.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsBase.AbstractSolverComparison",
    "page": "Docstrings",
    "title": "GeoStatsBase.AbstractSolverComparison",
    "category": "type",
    "text": "AbstractSolverComparison\n\nA method for comparing geostatistical solvers.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsBase.AbstractSpatialData",
    "page": "Docstrings",
    "title": "GeoStatsBase.AbstractSpatialData",
    "category": "type",
    "text": "AbstractSpatialData{T,N}\n\nSpatial data distributed in a N-dimensional space using coordinates of type T.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsBase.CopyMapper",
    "page": "Docstrings",
    "title": "GeoStatsBase.CopyMapper",
    "category": "type",
    "text": "CopyMapper\n\nA mapping strategy in which data points are copied directly to the domain at specified locations.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsBase.EstimationProblem",
    "page": "Docstrings",
    "title": "GeoStatsBase.EstimationProblem",
    "category": "type",
    "text": "EstimationProblem(spatialdata, domain, targetvars)\n\nA spatial estimation problem on a given domain in which the variables to be estimated are listed in targetvars. The data of the problem is stored in spatialdata.\n\nExamples\n\nCreate an estimation problem for rainfall precipitation measurements:\n\njulia> EstimationProblem(spatialdata, domain, :precipitation)\n\nCreate an estimation problem for precipitation and CO₂:\n\njulia> EstimationProblem(spatialdata, domain, [:precipitation, :CO₂])\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsBase.EstimationSolution",
    "page": "Docstrings",
    "title": "GeoStatsBase.EstimationSolution",
    "category": "type",
    "text": "EstimationSolution\n\nA solution to a spatial estimation problem.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsBase.SimpleMapper",
    "page": "Docstrings",
    "title": "GeoStatsBase.SimpleMapper",
    "category": "type",
    "text": "SimpleMapper\n\nA mapping strategy in which data points are assigned to their nearest point in the domain.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsBase.SimulationProblem",
    "page": "Docstrings",
    "title": "GeoStatsBase.SimulationProblem",
    "category": "type",
    "text": "SimulationProblem(spatialdata, domain, targetvars, nreals)\nSimulationProblem(domain, targetvars, nreals)\n\nA spatial simulation problem on a given domain in which the variables to be simulated are listed in targetvars.\n\nFor conditional simulation, the data of the problem is stored in spatialdata.\n\nFor unconditional simulation, a dictionary targetvars must be provided mapping variable names to their types.\n\nIn both cases, a number nreals of realizations is requested.\n\nExamples\n\nCreate a conditional simulation problem for porosity and permeability with 100 realizations:\n\njulia> SimulationProblem(spatialdata, domain, [:porosity,:permeability], 100)\n\nCreate an unconditional simulation problem for porosity and facies type with 100 realizations:\n\njulia> SimulationProblem(domain, Dict(:porosity => Float64, :facies => Int), 100)\n\nNotes\n\nTo check if a simulation problem has data (i.e. conditional vs. unconditional) use the hasdata method.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsBase.SimulationSolution",
    "page": "Docstrings",
    "title": "GeoStatsBase.SimulationSolution",
    "category": "type",
    "text": "SimulationSolution\n\nA solution to a spatial simulation problem.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsBase.compare-Union{Tuple{S}, Tuple{AbstractArray{S,1},AbstractProblem,AbstractSolverComparison}} where S<:AbstractSolver",
    "page": "Docstrings",
    "title": "GeoStatsBase.compare",
    "category": "method",
    "text": "compare(solvers, problem, method)\n\nCompare solvers on a given problem using a comparison method.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsBase.coordinates!-Tuple{AbstractArray{T,1} where T,AbstractDomain,Int64}",
    "page": "Docstrings",
    "title": "GeoStatsBase.coordinates!",
    "category": "method",
    "text": "coordinates!(buff, domain, location)\n\nNon-allocating version of coordinates.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsBase.coordinates!-Tuple{AbstractArray{T,1} where T,AbstractSpatialData,Int64}",
    "page": "Docstrings",
    "title": "GeoStatsBase.coordinates!",
    "category": "method",
    "text": "coordinates!(buff, spatialdata, ind)\n\nNon-allocating version of coordinates.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsBase.coordinates!-Tuple{AbstractArray{T,2} where T,AbstractDomain,AbstractArray{Int64,1}}",
    "page": "Docstrings",
    "title": "GeoStatsBase.coordinates!",
    "category": "method",
    "text": "coordinates!(buff, domain, locations)\n\nNon-allocating version of coordinates\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsBase.coordinates!-Tuple{AbstractArray{T,2} where T,AbstractSpatialData,AbstractArray{Int64,1}}",
    "page": "Docstrings",
    "title": "GeoStatsBase.coordinates!",
    "category": "method",
    "text": "coordinates!(buff, spatialdata, indices)\n\nNon-allocating version of coordinates\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsBase.coordinates-Tuple{AbstractDomain}",
    "page": "Docstrings",
    "title": "GeoStatsBase.coordinates",
    "category": "method",
    "text": "coordinates(domain)\n\nReturn the coordinates of all locations in domain.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsBase.coordinates-Tuple{AbstractSpatialData}",
    "page": "Docstrings",
    "title": "GeoStatsBase.coordinates",
    "category": "method",
    "text": "coordinates(spatialdata)\n\nReturn the coordinates of all indices in spatialdata.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsBase.coordinates-Union{Tuple{T}, Tuple{N}, Tuple{AbstractDomain{T,N},AbstractArray{Int64,1}}} where T<:Real where N",
    "page": "Docstrings",
    "title": "GeoStatsBase.coordinates",
    "category": "method",
    "text": "coordinates(domain, locations)\n\nReturn the coordinates of locations in the domain.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsBase.coordinates-Union{Tuple{T}, Tuple{N}, Tuple{AbstractDomain{T,N},Int64}} where T<:Real where N",
    "page": "Docstrings",
    "title": "GeoStatsBase.coordinates",
    "category": "method",
    "text": "coordinates(domain, location)\n\nReturn the coordinates of the location in the domain.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsBase.coordinates-Union{Tuple{T}, Tuple{N}, Tuple{AbstractSpatialData{T,N},AbstractArray{Int64,1}}} where T<:Real where N",
    "page": "Docstrings",
    "title": "GeoStatsBase.coordinates",
    "category": "method",
    "text": "coordinates(spatialdata, inds)\n\nReturn the coordinates of inds in the spatialdata.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsBase.coordinates-Union{Tuple{T}, Tuple{N}, Tuple{AbstractSpatialData{T,N},Int64}} where T<:Real where N",
    "page": "Docstrings",
    "title": "GeoStatsBase.coordinates",
    "category": "method",
    "text": "coordinates(spatialdata, ind)\n\nReturn the coordinates of the ind-th point in spatialdata.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsBase.coordnames-Tuple{AbstractSpatialData}",
    "page": "Docstrings",
    "title": "GeoStatsBase.coordnames",
    "category": "method",
    "text": "coordnames(spatialdata)\n\nReturn the name of the coordinates in spatialdata and their types.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsBase.coordtype-Union{Tuple{AbstractDomain{T,N}}, Tuple{T}, Tuple{N}} where T<:Real where N",
    "page": "Docstrings",
    "title": "GeoStatsBase.coordtype",
    "category": "method",
    "text": "coordtype(domain)\n\nReturn the coordinate type of a spatial domain.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsBase.coordtype-Union{Tuple{AbstractSpatialData{T,N}}, Tuple{T}, Tuple{N}} where T<:Real where N",
    "page": "Docstrings",
    "title": "GeoStatsBase.coordtype",
    "category": "method",
    "text": "coordtype(spatialdata)\n\nReturn the coordinate type of a spatial data.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsBase.data-Tuple{EstimationProblem}",
    "page": "Docstrings",
    "title": "GeoStatsBase.data",
    "category": "method",
    "text": "data(problem)\n\nReturn the spatial data of the estimation problem.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsBase.data-Tuple{SimulationProblem}",
    "page": "Docstrings",
    "title": "GeoStatsBase.data",
    "category": "method",
    "text": "data(problem)\n\nReturn the spatial data of the simulation problem.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsBase.datamap-Tuple{EstimationProblem,Any}",
    "page": "Docstrings",
    "title": "GeoStatsBase.datamap",
    "category": "method",
    "text": "datamap(problem, targetvar)\n\nReturn the mapping from domain locations to data locations for the targetvar of the problem.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsBase.datamap-Tuple{SimulationProblem,Any}",
    "page": "Docstrings",
    "title": "GeoStatsBase.datamap",
    "category": "method",
    "text": "datamap(problem, targetvar)\n\nReturn the mapping from domain locations to data locations for the targetvar of the problem.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsBase.digest-Tuple{EstimationSolution}",
    "page": "Docstrings",
    "title": "GeoStatsBase.digest",
    "category": "method",
    "text": "digest(solution)\n\nConvert solution to a dictionary-like format where the keys of the dictionary are the variables of the problem.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsBase.digest-Tuple{SimulationSolution}",
    "page": "Docstrings",
    "title": "GeoStatsBase.digest",
    "category": "method",
    "text": "digest(solution)\n\nConvert solution to a dictionary-like format where the keys of the dictionary are the variables of the problem.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsBase.domain-Tuple{EstimationProblem}",
    "page": "Docstrings",
    "title": "GeoStatsBase.domain",
    "category": "method",
    "text": "domain(problem)\n\nReturn the spatial domain of the estimation problem.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsBase.domain-Tuple{EstimationSolution}",
    "page": "Docstrings",
    "title": "GeoStatsBase.domain",
    "category": "method",
    "text": "domain(solution)\n\nReturn the domain of the estimation solution.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsBase.domain-Tuple{SimulationProblem}",
    "page": "Docstrings",
    "title": "GeoStatsBase.domain",
    "category": "method",
    "text": "domain(problem)\n\nReturn the spatial domain of the simulation problem.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsBase.domain-Tuple{SimulationSolution}",
    "page": "Docstrings",
    "title": "GeoStatsBase.domain",
    "category": "method",
    "text": "domain(solution)\n\nReturn the domain of a simulation solution.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsBase.hasdata-Tuple{SimulationProblem}",
    "page": "Docstrings",
    "title": "GeoStatsBase.hasdata",
    "category": "method",
    "text": "hasdata(problem)\n\nReturn true if simulation problem has data.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsBase.mapper-Tuple{EstimationProblem}",
    "page": "Docstrings",
    "title": "GeoStatsBase.mapper",
    "category": "method",
    "text": "mapper(problem)\n\nReturn the mapper of the estimation problem.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsBase.mapper-Tuple{SimulationProblem}",
    "page": "Docstrings",
    "title": "GeoStatsBase.mapper",
    "category": "method",
    "text": "mapper(problem)\n\nReturn the mapper of the simulation problem.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsBase.nearestlocation-Union{Tuple{T}, Tuple{N}, Tuple{AbstractDomain{T,N},AbstractArray{T,1}}} where T<:Real where N",
    "page": "Docstrings",
    "title": "GeoStatsBase.nearestlocation",
    "category": "method",
    "text": "nearestlocation(domain, coords)\n\nReturn the nearest location of coords in the domain.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsBase.npoints-Tuple{AbstractDomain}",
    "page": "Docstrings",
    "title": "GeoStatsBase.npoints",
    "category": "method",
    "text": "npoints(domain)\n\nReturn the number of points of a spatial domain.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsBase.npoints-Tuple{AbstractSpatialData}",
    "page": "Docstrings",
    "title": "GeoStatsBase.npoints",
    "category": "method",
    "text": "npoints(spatialdata)\n\nReturn the number of points in spatialdata.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsBase.nreals-Tuple{SimulationProblem}",
    "page": "Docstrings",
    "title": "GeoStatsBase.nreals",
    "category": "method",
    "text": "nreals(problem)\n\nReturn the number of realizations of the simulation problem.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsBase.preprocess-Tuple{SimulationProblem,AbstractSimulationSolver}",
    "page": "Docstrings",
    "title": "GeoStatsBase.preprocess",
    "category": "method",
    "text": "preprocess(problem, solver)\n\nPreprocess the simulation problem once before generating each realization with simulation solver.\n\nNotes\n\nThe output of the function is defined by the solver developer. Default implementation returns nothing.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsBase.solve-Tuple{AbstractProblem,AbstractSolver}",
    "page": "Docstrings",
    "title": "GeoStatsBase.solve",
    "category": "method",
    "text": "solve(problem, solver)\n\nSolve the problem with the solver.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsBase.solve-Tuple{SimulationProblem,AbstractSimulationSolver}",
    "page": "Docstrings",
    "title": "GeoStatsBase.solve",
    "category": "method",
    "text": "solve(problem, solver)\n\nSolve the simulation problem with the simulation solver.\n\nNotes\n\nDefault implementation calls solve_single in parallel.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsBase.solve_single-Tuple{SimulationProblem,Symbol,AbstractSimulationSolver,Any}",
    "page": "Docstrings",
    "title": "GeoStatsBase.solve_single",
    "category": "method",
    "text": "solve_single(problem, var, solver, preproc)\n\nSolve a single realization of var in the simulation problem with the simulation solver, optionally using preprocessed data in preproc.\n\nNotes\n\nBy implementing this function instead of solve, the developer is informing the framework that realizations generated with his/her solver are indenpendent one from another. GeoStats.jl will trigger the algorithm in parallel (if enough processes are available).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsBase.valid-Tuple{AbstractSpatialData,Symbol}",
    "page": "Docstrings",
    "title": "GeoStatsBase.valid",
    "category": "method",
    "text": "valid(spatialdata, var)\n\nReturn all points in spatialdata with a valid value for var. The output is a tuple with the matrix of coordinates as the first item and the vector of values as the second item.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsBase.value-Tuple{AbstractSpatialData,Int64,Symbol}",
    "page": "Docstrings",
    "title": "GeoStatsBase.value",
    "category": "method",
    "text": "value(spatialdata, ind, var)\n\nReturn the value of var for the ind-th point in spatialdata.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsBase.valuetype-Tuple{AbstractSpatialData,Symbol}",
    "page": "Docstrings",
    "title": "GeoStatsBase.valuetype",
    "category": "method",
    "text": "valuetype(spatialdata, var)\n\nReturn the value type of var in spatialdata.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsBase.variables-Tuple{AbstractSpatialData}",
    "page": "Docstrings",
    "title": "GeoStatsBase.variables",
    "category": "method",
    "text": "variables(spatialdata)\n\nReturn the variable names in spatialdata and their types.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsBase.variables-Tuple{EstimationProblem}",
    "page": "Docstrings",
    "title": "GeoStatsBase.variables",
    "category": "method",
    "text": "variables(problem)\n\nReturn the variable names of the estimation problem and their types.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeoStatsBase.variables-Tuple{SimulationProblem}",
    "page": "Docstrings",
    "title": "GeoStatsBase.variables",
    "category": "method",
    "text": "variables(problem)\n\nReturn the target variables of the simulation problem and their types.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.isvalid-Tuple{AbstractSpatialData,Int64,Symbol}",
    "page": "Docstrings",
    "title": "Base.isvalid",
    "category": "method",
    "text": "isvalid(spatialdata, ind, var)\n\nReturn true if the ind-th point in spatialdata has a valid value for var.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.map-Tuple{AbstractSpatialData,AbstractDomain,Array{Symbol,1},AbstractMapper}",
    "page": "Docstrings",
    "title": "Base.map",
    "category": "method",
    "text": "map(spatialdata, domain, targetvars, mapper)\n\nMap the targetvars in spatialdata to domain with mapper.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.ndims-Union{Tuple{AbstractDomain{T,N}}, Tuple{T}, Tuple{N}} where T<:Real where N",
    "page": "Docstrings",
    "title": "Base.ndims",
    "category": "method",
    "text": "ndims(domain)\n\nReturn the number of dimensions of a spatial domain.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.ndims-Union{Tuple{AbstractSpatialData{T,N}}, Tuple{T}, Tuple{N}} where T<:Real where N",
    "page": "Docstrings",
    "title": "Base.ndims",
    "category": "method",
    "text": "ndims(spatialdata)\n\nReturn the number of dimensions of domain underlying spatialdata.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.view-Tuple{AbstractSpatialData,AbstractArray{Int64,1}}",
    "page": "Docstrings",
    "title": "Base.view",
    "category": "method",
    "text": "view(spatialdata, inds)\n\nReturn a view of spatialdata with all points in inds.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [GeoStatsBase]\nOrder = [:type, :function]"
},

]}
