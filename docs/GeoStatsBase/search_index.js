var documenterSearchIndex = {"docs": [

{
    "location": "#GeoStatsBase.AbstractDomain",
    "page": "Home",
    "title": "GeoStatsBase.AbstractDomain",
    "category": "type",
    "text": "AbstractDomain{T,N}\n\nA spatial domain with N dimensions in which points are represented with coordinates of type T.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsBase.AbstractEstimSolverComparison",
    "page": "Home",
    "title": "GeoStatsBase.AbstractEstimSolverComparison",
    "category": "type",
    "text": "AbstractEstimSolverComparison\n\nA method for comparing estimation solvers.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsBase.AbstractEstimationSolver",
    "page": "Home",
    "title": "GeoStatsBase.AbstractEstimationSolver",
    "category": "type",
    "text": "AbstractEstimationSolver\n\nA solver for a geostatistical estimation problem.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsBase.AbstractMapper",
    "page": "Home",
    "title": "GeoStatsBase.AbstractMapper",
    "category": "type",
    "text": "AbstractMapper\n\nA mapping strategy for mapping spatial data onto a domain.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsBase.AbstractProblem",
    "page": "Home",
    "title": "GeoStatsBase.AbstractProblem",
    "category": "type",
    "text": "AbstractProblem\n\nA generic problem in geostatistics.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsBase.AbstractSimSolverComparison",
    "page": "Home",
    "title": "GeoStatsBase.AbstractSimSolverComparison",
    "category": "type",
    "text": "AbstractSimSolverComparison\n\nA method for comparing simulation solvers.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsBase.AbstractSimulationSolver",
    "page": "Home",
    "title": "GeoStatsBase.AbstractSimulationSolver",
    "category": "type",
    "text": "AbstractSimulationSolver\n\nA solver for a geostatistical simulation problem.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsBase.AbstractSolution",
    "page": "Home",
    "title": "GeoStatsBase.AbstractSolution",
    "category": "type",
    "text": "AbstractSolution\n\nA generic solution to a problem in geostatistics.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsBase.AbstractSolver",
    "page": "Home",
    "title": "GeoStatsBase.AbstractSolver",
    "category": "type",
    "text": "AbstractSolver\n\nA solver for geostatistical problems.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsBase.AbstractSolverComparison",
    "page": "Home",
    "title": "GeoStatsBase.AbstractSolverComparison",
    "category": "type",
    "text": "AbstractSolverComparison\n\nA method for comparing geostatistical solvers.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsBase.AbstractSpatialData",
    "page": "Home",
    "title": "GeoStatsBase.AbstractSpatialData",
    "category": "type",
    "text": "AbstractSpatialData{T,N}\n\nSpatial data distributed in a N-dimensional space using coordinates of type T.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsBase.CopyMapper",
    "page": "Home",
    "title": "GeoStatsBase.CopyMapper",
    "category": "type",
    "text": "CopyMapper\n\nA mapping strategy in which data points are copied directly to the domain at specified locations.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsBase.EstimationProblem",
    "page": "Home",
    "title": "GeoStatsBase.EstimationProblem",
    "category": "type",
    "text": "EstimationProblem(spatialdata, domain, targetvars)\n\nA spatial estimation problem on a given domain in which the variables to be estimated are listed in targetvars. The data of the problem is stored in spatialdata.\n\nExamples\n\nCreate an estimation problem for rainfall precipitation measurements:\n\njulia> EstimationProblem(spatialdata, domain, :precipitation)\n\nCreate an estimation problem for precipitation and CO₂:\n\njulia> EstimationProblem(spatialdata, domain, [:precipitation, :CO₂])\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsBase.EstimationSolution",
    "page": "Home",
    "title": "GeoStatsBase.EstimationSolution",
    "category": "type",
    "text": "EstimationSolution\n\nA solution to a spatial estimation problem.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsBase.SimpleMapper",
    "page": "Home",
    "title": "GeoStatsBase.SimpleMapper",
    "category": "type",
    "text": "SimpleMapper\n\nA mapping strategy in which data points are assigned to their nearest point in the domain.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsBase.SimulationProblem",
    "page": "Home",
    "title": "GeoStatsBase.SimulationProblem",
    "category": "type",
    "text": "SimulationProblem(spatialdata, domain, targetvars, nreals)\nSimulationProblem(domain, targetvars, nreals)\n\nA spatial simulation problem on a given domain in which the variables to be simulated are listed in targetvars.\n\nFor conditional simulation, the data of the problem is stored in spatialdata.\n\nFor unconditional simulation, a dictionary targetvars must be provided mapping variable names to their types.\n\nIn both cases, a number nreals of realizations is requested.\n\nExamples\n\nCreate a conditional simulation problem for porosity and permeability with 100 realizations:\n\njulia> SimulationProblem(spatialdata, domain, [:porosity,:permeability], 100)\n\nCreate an unconditional simulation problem for porosity and facies type with 100 realizations:\n\njulia> SimulationProblem(domain, Dict(:porosity => Float64, :facies => Int), 100)\n\nNotes\n\nTo check if a simulation problem has data (i.e. conditional vs. unconditional) use the hasdata method.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsBase.SimulationSolution",
    "page": "Home",
    "title": "GeoStatsBase.SimulationSolution",
    "category": "type",
    "text": "SimulationSolution\n\nA solution to a spatial simulation problem.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsBase.compare-Union{Tuple{S}, Tuple{AbstractArray{S,1},AbstractProblem,AbstractSolverComparison}} where S<:AbstractSolver",
    "page": "Home",
    "title": "GeoStatsBase.compare",
    "category": "method",
    "text": "compare(solvers, problem, method)\n\nCompare solvers on a given problem using a comparison method.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsBase.coordinates!-Tuple{AbstractArray{T,1} where T,AbstractDomain,Int64}",
    "page": "Home",
    "title": "GeoStatsBase.coordinates!",
    "category": "method",
    "text": "coordinates!(buff, domain, location)\n\nNon-allocating version of coordinates.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsBase.coordinates!-Tuple{AbstractArray{T,1} where T,AbstractSpatialData,Int64}",
    "page": "Home",
    "title": "GeoStatsBase.coordinates!",
    "category": "method",
    "text": "coordinates!(buff, spatialdata, ind)\n\nNon-allocating version of coordinates.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsBase.coordinates!-Tuple{AbstractArray{T,2} where T,AbstractDomain,AbstractArray{Int64,1}}",
    "page": "Home",
    "title": "GeoStatsBase.coordinates!",
    "category": "method",
    "text": "coordinates!(buff, domain, locations)\n\nNon-allocating version of coordinates\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsBase.coordinates!-Tuple{AbstractArray{T,2} where T,AbstractSpatialData,AbstractArray{Int64,1}}",
    "page": "Home",
    "title": "GeoStatsBase.coordinates!",
    "category": "method",
    "text": "coordinates!(buff, spatialdata, indices)\n\nNon-allocating version of coordinates\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsBase.coordinates-Tuple{AbstractDomain}",
    "page": "Home",
    "title": "GeoStatsBase.coordinates",
    "category": "method",
    "text": "coordinates(domain)\n\nReturn the coordinates of all locations in domain.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsBase.coordinates-Tuple{AbstractSpatialData}",
    "page": "Home",
    "title": "GeoStatsBase.coordinates",
    "category": "method",
    "text": "coordinates(spatialdata)\n\nReturn the coordinates of all indices in spatialdata.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsBase.coordinates-Union{Tuple{T}, Tuple{N}, Tuple{AbstractDomain{T,N},AbstractArray{Int64,1}}} where T<:Real where N",
    "page": "Home",
    "title": "GeoStatsBase.coordinates",
    "category": "method",
    "text": "coordinates(domain, locations)\n\nReturn the coordinates of locations in the domain.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsBase.coordinates-Union{Tuple{T}, Tuple{N}, Tuple{AbstractDomain{T,N},Int64}} where T<:Real where N",
    "page": "Home",
    "title": "GeoStatsBase.coordinates",
    "category": "method",
    "text": "coordinates(domain, location)\n\nReturn the coordinates of the location in the domain.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsBase.coordinates-Union{Tuple{T}, Tuple{N}, Tuple{AbstractSpatialData{T,N},AbstractArray{Int64,1}}} where T<:Real where N",
    "page": "Home",
    "title": "GeoStatsBase.coordinates",
    "category": "method",
    "text": "coordinates(spatialdata, inds)\n\nReturn the coordinates of inds in the spatialdata.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsBase.coordinates-Union{Tuple{T}, Tuple{N}, Tuple{AbstractSpatialData{T,N},Int64}} where T<:Real where N",
    "page": "Home",
    "title": "GeoStatsBase.coordinates",
    "category": "method",
    "text": "coordinates(spatialdata, ind)\n\nReturn the coordinates of the ind-th point in spatialdata.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsBase.coordnames-Tuple{AbstractSpatialData}",
    "page": "Home",
    "title": "GeoStatsBase.coordnames",
    "category": "method",
    "text": "coordnames(spatialdata)\n\nReturn the name of the coordinates in spatialdata and their types.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsBase.coordtype-Union{Tuple{AbstractDomain{T,N}}, Tuple{T}, Tuple{N}} where T<:Real where N",
    "page": "Home",
    "title": "GeoStatsBase.coordtype",
    "category": "method",
    "text": "coordtype(domain)\n\nReturn the coordinate type of a spatial domain.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsBase.coordtype-Union{Tuple{AbstractSpatialData{T,N}}, Tuple{T}, Tuple{N}} where T<:Real where N",
    "page": "Home",
    "title": "GeoStatsBase.coordtype",
    "category": "method",
    "text": "coordtype(spatialdata)\n\nReturn the coordinate type of a spatial data.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsBase.data-Tuple{EstimationProblem}",
    "page": "Home",
    "title": "GeoStatsBase.data",
    "category": "method",
    "text": "data(problem)\n\nReturn the spatial data of the estimation problem.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsBase.data-Tuple{SimulationProblem}",
    "page": "Home",
    "title": "GeoStatsBase.data",
    "category": "method",
    "text": "data(problem)\n\nReturn the spatial data of the simulation problem.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsBase.datamap-Tuple{EstimationProblem,Any}",
    "page": "Home",
    "title": "GeoStatsBase.datamap",
    "category": "method",
    "text": "datamap(problem, targetvar)\n\nReturn the mapping from domain locations to data locations for the targetvar of the problem.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsBase.datamap-Tuple{SimulationProblem,Any}",
    "page": "Home",
    "title": "GeoStatsBase.datamap",
    "category": "method",
    "text": "datamap(problem, targetvar)\n\nReturn the mapping from domain locations to data locations for the targetvar of the problem.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsBase.digest-Tuple{EstimationSolution}",
    "page": "Home",
    "title": "GeoStatsBase.digest",
    "category": "method",
    "text": "digest(solution)\n\nConvert solution to a dictionary-like format where the keys of the dictionary are the variables of the problem.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsBase.digest-Tuple{SimulationSolution}",
    "page": "Home",
    "title": "GeoStatsBase.digest",
    "category": "method",
    "text": "digest(solution)\n\nConvert solution to a dictionary-like format where the keys of the dictionary are the variables of the problem.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsBase.domain-Tuple{EstimationProblem}",
    "page": "Home",
    "title": "GeoStatsBase.domain",
    "category": "method",
    "text": "domain(problem)\n\nReturn the spatial domain of the estimation problem.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsBase.domain-Tuple{EstimationSolution}",
    "page": "Home",
    "title": "GeoStatsBase.domain",
    "category": "method",
    "text": "domain(solution)\n\nReturn the domain of the estimation solution.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsBase.domain-Tuple{SimulationProblem}",
    "page": "Home",
    "title": "GeoStatsBase.domain",
    "category": "method",
    "text": "domain(problem)\n\nReturn the spatial domain of the simulation problem.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsBase.domain-Tuple{SimulationSolution}",
    "page": "Home",
    "title": "GeoStatsBase.domain",
    "category": "method",
    "text": "domain(solution)\n\nReturn the domain of a simulation solution.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsBase.hasdata-Tuple{SimulationProblem}",
    "page": "Home",
    "title": "GeoStatsBase.hasdata",
    "category": "method",
    "text": "hasdata(problem)\n\nReturn true if simulation problem has data.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsBase.mapper-Tuple{EstimationProblem}",
    "page": "Home",
    "title": "GeoStatsBase.mapper",
    "category": "method",
    "text": "mapper(problem)\n\nReturn the mapper of the estimation problem.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsBase.mapper-Tuple{SimulationProblem}",
    "page": "Home",
    "title": "GeoStatsBase.mapper",
    "category": "method",
    "text": "mapper(problem)\n\nReturn the mapper of the simulation problem.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsBase.nearestlocation-Union{Tuple{T}, Tuple{N}, Tuple{AbstractDomain{T,N},AbstractArray{T,1}}} where T<:Real where N",
    "page": "Home",
    "title": "GeoStatsBase.nearestlocation",
    "category": "method",
    "text": "nearestlocation(domain, coords)\n\nReturn the nearest location of coords in the domain.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsBase.npoints-Tuple{AbstractDomain}",
    "page": "Home",
    "title": "GeoStatsBase.npoints",
    "category": "method",
    "text": "npoints(domain)\n\nReturn the number of points of a spatial domain.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsBase.npoints-Tuple{AbstractSpatialData}",
    "page": "Home",
    "title": "GeoStatsBase.npoints",
    "category": "method",
    "text": "npoints(spatialdata)\n\nReturn the number of points in spatialdata.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsBase.nreals-Tuple{SimulationProblem}",
    "page": "Home",
    "title": "GeoStatsBase.nreals",
    "category": "method",
    "text": "nreals(problem)\n\nReturn the number of realizations of the simulation problem.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsBase.preprocess-Tuple{SimulationProblem,AbstractSimulationSolver}",
    "page": "Home",
    "title": "GeoStatsBase.preprocess",
    "category": "method",
    "text": "preprocess(problem, solver)\n\nPreprocess the simulation problem once before generating each realization with simulation solver.\n\nNotes\n\nThe output of the function is defined by the solver developer. Default implementation returns nothing.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsBase.solve-Tuple{AbstractProblem,AbstractSolver}",
    "page": "Home",
    "title": "GeoStatsBase.solve",
    "category": "method",
    "text": "solve(problem, solver)\n\nSolve the problem with the solver.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsBase.solve-Tuple{SimulationProblem,AbstractSimulationSolver}",
    "page": "Home",
    "title": "GeoStatsBase.solve",
    "category": "method",
    "text": "solve(problem, solver)\n\nSolve the simulation problem with the simulation solver.\n\nNotes\n\nDefault implementation calls solve_single in parallel.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsBase.solve_single-Tuple{SimulationProblem,Symbol,AbstractSimulationSolver,Any}",
    "page": "Home",
    "title": "GeoStatsBase.solve_single",
    "category": "method",
    "text": "solve_single(problem, var, solver, preproc)\n\nSolve a single realization of var in the simulation problem with the simulation solver, optionally using preprocessed data in preproc.\n\nNotes\n\nBy implementing this function instead of solve, the developer is informing the framework that realizations generated with his/her solver are indenpendent one from another. GeoStats.jl will trigger the algorithm in parallel (if enough processes are available).\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsBase.valid-Tuple{AbstractSpatialData,Symbol}",
    "page": "Home",
    "title": "GeoStatsBase.valid",
    "category": "method",
    "text": "valid(spatialdata, var)\n\nReturn all points in spatialdata with a valid value for var. The output is a tuple with the matrix of coordinates as the first item and the vector of values as the second item.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsBase.value-Tuple{AbstractSpatialData,Int64,Symbol}",
    "page": "Home",
    "title": "GeoStatsBase.value",
    "category": "method",
    "text": "value(spatialdata, ind, var)\n\nReturn the value of var for the ind-th point in spatialdata.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsBase.valuetype-Tuple{AbstractSpatialData,Symbol}",
    "page": "Home",
    "title": "GeoStatsBase.valuetype",
    "category": "method",
    "text": "valuetype(spatialdata, var)\n\nReturn the value type of var in spatialdata.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsBase.variables-Tuple{AbstractSpatialData}",
    "page": "Home",
    "title": "GeoStatsBase.variables",
    "category": "method",
    "text": "variables(spatialdata)\n\nReturn the variable names in spatialdata and their types.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsBase.variables-Tuple{EstimationProblem}",
    "page": "Home",
    "title": "GeoStatsBase.variables",
    "category": "method",
    "text": "variables(problem)\n\nReturn the variable names of the estimation problem and their types.\n\n\n\n\n\n"
},

{
    "location": "#GeoStatsBase.variables-Tuple{SimulationProblem}",
    "page": "Home",
    "title": "GeoStatsBase.variables",
    "category": "method",
    "text": "variables(problem)\n\nReturn the target variables of the simulation problem and their types.\n\n\n\n\n\n"
},

{
    "location": "#Base.isvalid-Tuple{AbstractSpatialData,Int64,Symbol}",
    "page": "Home",
    "title": "Base.isvalid",
    "category": "method",
    "text": "isvalid(spatialdata, ind, var)\n\nReturn true if the ind-th point in spatialdata has a valid value for var.\n\n\n\n\n\n"
},

{
    "location": "#Base.map-Tuple{AbstractSpatialData,AbstractDomain,Array{Symbol,1},AbstractMapper}",
    "page": "Home",
    "title": "Base.map",
    "category": "method",
    "text": "map(spatialdata, domain, targetvars, mapper)\n\nMap the targetvars in spatialdata to domain with mapper.\n\n\n\n\n\n"
},

{
    "location": "#Base.ndims-Union{Tuple{AbstractDomain{T,N}}, Tuple{T}, Tuple{N}} where T<:Real where N",
    "page": "Home",
    "title": "Base.ndims",
    "category": "method",
    "text": "ndims(domain)\n\nReturn the number of dimensions of a spatial domain.\n\n\n\n\n\n"
},

{
    "location": "#Base.ndims-Union{Tuple{AbstractSpatialData{T,N}}, Tuple{T}, Tuple{N}} where T<:Real where N",
    "page": "Home",
    "title": "Base.ndims",
    "category": "method",
    "text": "ndims(spatialdata)\n\nReturn the number of dimensions of domain underlying spatialdata.\n\n\n\n\n\n"
},

{
    "location": "#Base.view-Tuple{AbstractSpatialData,AbstractArray{Int64,1}}",
    "page": "Home",
    "title": "Base.view",
    "category": "method",
    "text": "view(spatialdata, inds)\n\nReturn a view of spatialdata with all points in inds.\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [GeoStatsBase]\nOrder = [:type, :function]"
},

]}
