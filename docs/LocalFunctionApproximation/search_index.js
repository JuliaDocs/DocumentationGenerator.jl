var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "(Image: Build Status) (Image: Coverage Status)"
},

{
    "location": "#LocalFunctionApproximation-1",
    "page": "Readme",
    "title": "LocalFunctionApproximation",
    "category": "section",
    "text": "This package provides local function approximators that interpolates a scalar-valued function across a vector space. It does so based on the values of the function at \"nearby\" points, based on an appropriate locality metric, and not via any global regression or fitting function. Currently it supports multi-linear and simplex interpolations for multi-dimensional grids, and k-nearest-neighbor interpolation. Two important dependencies are GridInterpolations and NearestNeighbors."
},

{
    "location": "#Installation-and-Usage-1",
    "page": "Readme",
    "title": "Installation and Usage",
    "category": "section",
    "text": "Start Julia and run the following:Pkg.add(\"LocalFunctionApproximation\")\nusing LocalFunctionApproximation"
},

{
    "location": "#Create-Function-Approximators-1",
    "page": "Readme",
    "title": "Create Function Approximators",
    "category": "section",
    "text": "Create a rectangular grid for interpolation using GridInterpolations and create the function approximator that uses it:using GridInterpolations # Make the grid interpolations module available\ngrid = RectangleGrid([0., 0.5, 1.],[0., 0.5, 1.])      # rectangular grid\ngrid_values = [8., 1., 6., 3., 5., 7., 4., 9., 2.]     # corresponding values at each grid point\ngifa = LocalGIFunctionApproximator(grid, grid_values)  # create the function approximator using the grid and valuesCreate a nearest neighbor tree using NearestNeighbors and create the corresponding approximator:using NearestNeighbors, StaticArrays\npoints = [SVector(0.,0.), SVector(0.,1.), SVector(1.,1.), SVector(1.,0.)]   # the 4 corners of the unit square\nnntree = KDTree(points)                                                     # create a KDTree using the points\nvals = [1., 1., -1., -1]                                                    # values corresponding to points\nk = 2                                                                       # the k parameter for knn approximator\nknnfa = LocalNNFunctionApproximator(nntree, points, k)"
},

{
    "location": "#Compute-values-at-arbitrary-points-1",
    "page": "Readme",
    "title": "Compute values at arbitrary points",
    "category": "section",
    "text": "point = rand(2)             # random 2D point\ncompute_value(gifa, point)  # obtain the value by interpolating the function at that point       \ncompute_value(knnfa, point) # do the same for the kNN approximatorA typical use case for this package is for Local Approximation Value Iteration, as shown here."
},

{
    "location": "autodocs/#LocalFunctionApproximation.compute_value",
    "page": "Docstrings",
    "title": "LocalFunctionApproximation.compute_value",
    "category": "function",
    "text": "compute_value(lfa::LocalFunctionApproximator, v::AbstractVector)\n\nReturn the value of the function at some query point v, based on the local function approximator\n\ncompute_value(lfa::LocalFunctionApproximator, v_list::AbstractVector{V}) where V <: AbstractVector{Float64}\n\nReturn the value of the function for a list of query points, based on the local function approximator\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LocalFunctionApproximation.get_all_interpolating_points",
    "page": "Docstrings",
    "title": "LocalFunctionApproximation.get_all_interpolating_points",
    "category": "function",
    "text": "get_all_interpolating_points(lfa::LocalFunctionApproximator)\n\nReturn the vector of points (in a specific order) that are used to interpolate\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LocalFunctionApproximation.get_all_interpolating_values",
    "page": "Docstrings",
    "title": "LocalFunctionApproximation.get_all_interpolating_values",
    "category": "function",
    "text": "get_all_interpolating_values(lfa::LocalFunctionApproximator)\n\nReturn the vector of all interpolating values (in the same order as the interpolating points)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LocalFunctionApproximation.get_interpolating_nbrs_idxs_wts",
    "page": "Docstrings",
    "title": "LocalFunctionApproximation.get_interpolating_nbrs_idxs_wts",
    "category": "function",
    "text": "get_interpolating_nbrs_idxs_wts(lfa::LocalFunctionApproximator, v::AbstractVector)\n\nReturn a tuple of (indices, weights) for the interpolants for a specific query v\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LocalFunctionApproximation.n_interpolating_points",
    "page": "Docstrings",
    "title": "LocalFunctionApproximation.n_interpolating_points",
    "category": "function",
    "text": "n_interpolating_points(lfa::LocalFunctionApproximator)\n\nReturn the number of interpolanting points that the approximator is using\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LocalFunctionApproximation.set_all_interpolating_values",
    "page": "Docstrings",
    "title": "LocalFunctionApproximation.set_all_interpolating_values",
    "category": "function",
    "text": "set_all_interpolating_values(lfa::LocalFunctionApproximator, vals::AbstractVector)\n\nSet the values of all interpolating points to the input vector\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [LocalFunctionApproximation]\nOrder = [:type, :function]"
},

]}
