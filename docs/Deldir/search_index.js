var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Deldir-1",
    "page": "Readme",
    "title": "Deldir",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov.io)deldir is an R package for computing Delaunay triangulations and Voronoi/Dirichlet tesselations. This Julia package wraps the Fortran code from deldir."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "The coordinates of the generators are specified as two vectors that are fed to deldir, the main function of this package:x = rand(8)\ny = rand(8)\ndel, vor, summ = deldir(x, y)The output from deldir are three DataFrames, one for the topology of the Delaunay triangulation, one for topology of the Voronoi tesselation and a summary mainly related to the area of the triangles and Voronoi cells.By default, deldir works with points in the unit rectangle, but other bounding rectangles can be specified as a third argument.The area of the Voronoi cells are also available directly with the function voronoiarea.Two functions are available to extract the edges of the Delaunay triangles and Voronoi cells in a \"plot friendly\" manner:Dx, Dy = edges(del)\nVx, Vy = edges(vor)Using the results from above this can be plotted using e.g. the Plots package:using Plots\nscatter(x, y, xlim=(0,1), ylim=(0,1), markersize=6, label=\"generators\")\nplot!(Dx, Dy, label=\"Delaunay\")\nplot!(Vx, Vy, style=:dash, label=\"Voronoi\")One realization looks like the following.(Image: Delaunay & Voronoi edges)"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Install the package by runningPkg.add(\"Deldir\")As mentioned, this package is a wrapper for a Fortran library. Compilation is performed with gfortran and I have only tested this on OS X Yosemite and Linux Mint.To re-compile the Fortran code, run Pkg.build(\"Deldir\")."
},

{
    "location": "#Motivation-1",
    "page": "Readme",
    "title": "Motivation",
    "category": "section",
    "text": "This is not the only Julia package for Delaunay/Voronoi computations. I am aware of the pure Julia implementation VoronoiDelaunay and the Boost wrapper Voronoi.However, Deldir has two qualities that I value:It interacts well with the bounding box.\nIt returns the area of the Voronoi cells in the same order as the input generators.Update 2016-05-05:  I have made the pure Julia package VoronoiCells with similar functionalities that executes much faster. Consider the time taken to run the voronoiarea functions of both packages with an increasing number of points:(Image: Comparison of Deldir and VoronoiCells)The script generating this output is available in the examples folder. The comparison plot is made withjulia> versioninfo()\nJulia Version 0.5.0\nCommit 3c9d753 (2016-09-19 18:14 UTC)\nPlatform Info:\n  System: Linux (x86_64-linux-gnu)\n  CPU: Intel(R) Core(TM) i7-3720QM CPU @ 2.60GHz\n  WORD_SIZE: 64\n  BLAS: libopenblas (USE64BITINT DYNAMIC_ARCH NO_AFFINITY Sandybridge)\n  LAPACK: libopenblas64_\n  LIBM: libopenlibm\n  LLVM: libLLVM-3.7.1 (ORCJIT, ivybridge)"
},

{
    "location": "#Limitations-1",
    "page": "Readme",
    "title": "Limitations",
    "category": "section",
    "text": "Not all features of the R package are available. I have e.g. chosen to ignore options regarding dummy points. Are you missing anything important?  Check out the manual for the R package to see if the Fortran library supports it."
},

{
    "location": "#Acknowledgement-1",
    "page": "Readme",
    "title": "Acknowledgement",
    "category": "section",
    "text": "Rolf Turner is author of the deldir package for R as well as all Fortran code in this package."
},

{
    "location": "#License-1",
    "page": "Readme",
    "title": "License",
    "category": "section",
    "text": "The Julia code in this package is MIT licensed and the Fortran code is licensed under GPL."
},

{
    "location": "autodocs/#Deldir.deldir-Tuple{Array{Float64,1},Array{Float64,1}}",
    "page": "Docstrings",
    "title": "Deldir.deldir",
    "category": "method",
    "text": "deldir(x::Vector, y::Vector; ...)\n\nCompute the Delaunay triangulation and Voronoi tesselation of the 2D points with x-coordinates x and y-coordinates y.\n\nOptional arguments are\n\nrw: Boundary rectangle specified as a vector with [xmin, xmax, ymin, ymax]. By default, rw is the unit rectangle.\nepsilon: A value of epsilon used in testing whether a quantity is zeros, mainly in the context of whether points are collinear.\n\nIf anomalous errors arise, it is possible that these may averted by adjusting the value of epsilon upward or downward. By default, epsilon = 1e-9.\n\nThe output are three DataFrames:\n\ndelsgs\n\nThe x1, y1, x2 & y2 entires are the coordinates of the points joined by an edge of a Delaunay triangle.\nThe ind1 and ind2 entries are the indices of the two points which are joined.\n\nvorsgs\n\nThe x1, y1, x2 & y2 entires are the coordinates of the endpoints of one the edges of a Voronoi cell.\nThe ind1 and ind2 entries are the indices of the two points, in the set being triangulated, which are separated by that edge\nThe bp1 entry indicates whether the first endpoint of the corresponding edge of a Voronoi cell is a boundary point (a point on the boundary of the rectangular window). \n\nLikewise for the bp2 entry and the second endpoint of the edge.\n\nsummary\n\nThe x and y entries of each row are the coordinates of the points in the set being triangulated.\nThe ntri entry are the number of Delaunay triangles emanating from the point.\nThe del_area entry is 1/3 of the total area of all the Delaunay triangles emanating from the point.\nThe n_tside entry is the number of sides — within the rectangular window — of the Voronoi cell surrounding the point.\nThe nbpt entry is the number of points in which the Voronoi cell intersects the boundary of the rectangular window.\nThe vor_area entry is the area of the Voronoi cell surrounding the point.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Deldir.edges-Tuple{DataFrames.DataFrame}",
    "page": "Docstrings",
    "title": "Deldir.edges",
    "category": "method",
    "text": "edges(D) -> Vector, Vector\n\nCollect the edges of a dataframe in vectors that are ready to be plotted.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Deldir.voronoiarea",
    "page": "Docstrings",
    "title": "Deldir.voronoiarea",
    "category": "function",
    "text": "voronoiarea(x::Vector, y::Vector, rw) -> Vector\n\nCompute the area of each Voronoi cell of the generators (x[i],y[i]) in the vectors x and y.\n\nrw is the boundary window.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Deldir.deldirwrapper",
    "page": "Docstrings",
    "title": "Deldir.deldirwrapper",
    "category": "function",
    "text": "deldirwrapper(x::Vector{Float64}, y::Vector{Float64}; ...)\n\nWrapper for the Fortran code that returns the output rather undigested.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Deldir.remove_duplicates-Tuple{Array{T,1} where T,Array{T,1} where T}",
    "page": "Docstrings",
    "title": "Deldir.remove_duplicates",
    "category": "method",
    "text": "remove_duplicates(x::Vector, y::Vector)\n\nRemove duplicate tuples (x[i],y[i]) from the vectors x and y.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Deldir]\nOrder = [:type, :function]"
},

]}
