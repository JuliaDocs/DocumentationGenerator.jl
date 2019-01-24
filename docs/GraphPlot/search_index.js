var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#GraphPlot-1",
    "page": "Readme",
    "title": "GraphPlot",
    "category": "section",
    "text": "(Image: Build Status) (Image: Julia Build)Graph layout and visualization algorithms based on Compose.jl and inspired by GraphLayout.jl.The spring_layout and stressmajorize_layout function are copy from IainNZ\'s GraphLayout.jl.Other layout algorithms are wrapped from NetworkX.gadfly.js is copied from Gadfly.jl"
},

{
    "location": "#Getting-Started-1",
    "page": "Readme",
    "title": "Getting Started",
    "category": "section",
    "text": "From the Julia REPL the latest version can be installed withPkg.add(\"GraphPlot\")GraphPlot is then loaded withusing GraphPlot"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": ""
},

{
    "location": "#karate-network-1",
    "page": "Readme",
    "title": "karate network",
    "category": "section",
    "text": "g = graphfamous(\"karate\")\ngplot(g)\n"
},

{
    "location": "#Add-node-label-1",
    "page": "Readme",
    "title": "Add node label",
    "category": "section",
    "text": "using Graphs\nnodelabel = [1:num_vertices(g)]\ngplot(g, nodelabel=nodelabel)\n"
},

{
    "location": "#Adjust-node-labels-1",
    "page": "Readme",
    "title": "Adjust node labels",
    "category": "section",
    "text": "gplot(g, nodelabel=nodelabel, nodelabeldist=1.5, nodelabelangleoffset=π/4)"
},

{
    "location": "#Control-the-node-size-1",
    "page": "Readme",
    "title": "Control the node size",
    "category": "section",
    "text": "# nodes size proportional to their degree\nnodesize = [Graphs.out_degree(v, g) for v in Graphs.vertices(g)]\ngplot(g, nodesize=nodesize)"
},

{
    "location": "#Control-the-node-color-1",
    "page": "Readme",
    "title": "Control the node color",
    "category": "section",
    "text": "Feed the keyword argument nodefillc a color array, ensure each node has a color. length(nodefillc) must be equal |V|.using Colors\n\n# Generate n maximally distinguishable colors in LCHab space.\nnodefillc = distinguishable_colors(num_vertices(g), colorant\"blue\")\ngplot(g, nodefillc=nodefillc, nodelabel=nodelabel, nodelabeldist=1.8, nodelabelangleoffset=π/4)"
},

{
    "location": "#Transparent-1",
    "page": "Readme",
    "title": "Transparent",
    "category": "section",
    "text": "# stick out large degree nodes\nalphas = nodesize/maximum(nodesize)\nnodefillc = [RGBA(0.0,0.8,0.8,i) for i in alphas]\ngplot(g, nodefillc=nodefillc)"
},

{
    "location": "#Control-the-node-label-size-1",
    "page": "Readme",
    "title": "Control the node label size",
    "category": "section",
    "text": "nodelabelsize = nodesize\ngplot(g, nodelabelsize=nodelabelsize, nodesize=nodesize, nodelabel=nodelabel)"
},

{
    "location": "#Draw-edge-labels-1",
    "page": "Readme",
    "title": "Draw edge labels",
    "category": "section",
    "text": "edgelabel = [1:Graphs.num_edges(g)]\ngplot(g, edgelabel=edgelabel, nodelabel=nodelabel)"
},

{
    "location": "#Adjust-edge-labels-1",
    "page": "Readme",
    "title": "Adjust edge labels",
    "category": "section",
    "text": "edgelabel = [1:Graphs.num_edges(g)]\ngplot(g, edgelabel=edgelabel, nodelabel=nodelabel, edgelabeldistx=0.5, edgelabeldisty=0.5)"
},

{
    "location": "#Color-the-graph-1",
    "page": "Readme",
    "title": "Color the graph",
    "category": "section",
    "text": "# nodes membership\nmembership = [1,1,1,1,1,1,1,1,2,1,1,1,1,1,2,2,1,1,2,1,2,1,2,2,2,2,2,2,2,2,2,2,2,2]\nnodecolor = [colorant\"lightseagreen\", colorant\"orange\"]\n# membership color\nnodefillc = nodecolor[membership]\ngplot(g, nodefillc=nodefillc)"
},

{
    "location": "#Different-layout-1",
    "page": "Readme",
    "title": "Different layout",
    "category": "section",
    "text": ""
},

{
    "location": "#random-layout-1",
    "page": "Readme",
    "title": "random layout",
    "category": "section",
    "text": "gplot(g, layout=random_layout, nodelabel=nodelabel)"
},

{
    "location": "#circular-layout-1",
    "page": "Readme",
    "title": "circular layout",
    "category": "section",
    "text": "gplot(g, layout=circular_layout, nodelabel=nodelabel)"
},

{
    "location": "#spectral-layout-1",
    "page": "Readme",
    "title": "spectral layout",
    "category": "section",
    "text": "gplot(g, layout=spectral_layout)"
},

{
    "location": "#shell-layout-1",
    "page": "Readme",
    "title": "shell layout",
    "category": "section",
    "text": "nlist = Array(Vector{Int}, 2) # two shells\nnlist[1] = [1:5] # first shell\nnlist[2] = [6:num_vertices(g)] # second shell\nlocs_x, locs_y = shell_layout(g, nlist)\ngplot(g, locs_x, locs_y, nodelabel=nodelabel)"
},

{
    "location": "#Curve-edge-1",
    "page": "Readme",
    "title": "Curve edge",
    "category": "section",
    "text": "gplot(g, linetype=\"curve\")"
},

{
    "location": "#Save-to-figure-1",
    "page": "Readme",
    "title": "Save to figure",
    "category": "section",
    "text": "using Compose\n# save to pdf\ndraw(PDF(\"karate.pdf\", 16cm, 16cm), gplot(g))\n# save to png\ndraw(PNG(\"karate.png\", 16cm, 16cm), gplot(g))\n# save to svg\ndraw(SVG(\"karate.svg\", 16cm, 16cm), gplot(g))"
},

{
    "location": "#LightGraphs-integration-1",
    "page": "Readme",
    "title": "LightGraphs integration",
    "category": "section",
    "text": "using LightGraphs\nh = watts_strogatz(50, 6, 0.3)\ngplot(h)"
},

{
    "location": "#Arguments-1",
    "page": "Readme",
    "title": "Arguments",
    "category": "section",
    "text": "G graph to plot\nlayout Optional. layout algorithm. Currently can choose from[randomlayout, circularlayout, springlayout, stressmajorizelayout,  shelllayout, spectrallayout]. Default: spring_layoutnodelabel Optional. Labels for the vertices. Default: nothing\nnodefillc Optional. Color to fill the nodes with.Default: colorant\"turquoise\"nodestrokec Color for the node stroke.Default: nothingarrowlengthfrac Fraction of line length to use for arrows.Set to 0 for no arrows. Default: 0 for undirected graph and 0.1 for directed grapharrowangleoffset angular width in radians for the arrows. Default: π/9 (20 degrees)"
},

{
    "location": "#Reporting-Bugs-1",
    "page": "Readme",
    "title": "Reporting Bugs",
    "category": "section",
    "text": "Filing an issue to report a bug, counterintuitive behavior, or even to request a feature is extremely valuable in helping me prioritize what to work on, so don\'t hestitate."
},

{
    "location": "autodocs/#GraphPlot.circular_layout-Tuple{Any}",
    "page": "Docstrings",
    "title": "GraphPlot.circular_layout",
    "category": "method",
    "text": "This function wrap from NetworkX\n\nPosition nodes on a circle.\n\nParameters\n\nG a graph\n\nReturns\n\nlocsx, locsy Locations of the nodes. Can be any units you want, but will be normalized and centered anyway\n\nExamples\n\njulia> g = simple_house_graph()\njulia> locs_x, locs_y = circular_layout(g)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GraphPlot.gplot-Union{Tuple{T}, Tuple{Any,Array{T,1},Array{T,1}}} where T<:Real",
    "page": "Docstrings",
    "title": "GraphPlot.gplot",
    "category": "method",
    "text": "Given a graph and two vectors of X and Y coordinates, returns a Compose tree of the graph layout\n\nArguments\n\nG Graph to draw\n\nlayout Optional. Layout algorithm. Currently can be one of [randomlayout, circularlayout, springlayout, shelllayout, stressmajorizelayout, spectrallayout]. Default: spring_layout\n\nlocs_x, locs_y Locations of the nodes. Can be any units you want, but will be normalized and centered anyway\n\nNODESIZE Optional. Max size for the nodes. Default: 3.0/sqrt(N)\n\nnodesize Optional. Relative size for the nodes, can be a Vector. Default: 1.0\n\nnodelabel Optional. Labels for the vertices, a Vector or nothing. Default: nothing\n\nnodelabelc Optional. Color for the node labels, can be a Vector. Default: colorant\"black\"\n\nnodelabeldist Optional. Distances for the node labels from center of nodes. Default: 0.0\n\nnodelabelangleoffset Optional. Angle offset for the node labels. Default: π/4.0\n\nNODELABELSIZE Optional. Largest fontsize for the vertice labels. Default: 4.0\n\nnodelabelsize Optional. Relative fontsize for the vertice labels, can be a Vector. Default: 1.0\n\nnodefillc Optional. Color to fill the nodes with, can be a Vector. Default: colorant\"turquoise\"\n\nnodestrokec Optional. Color for the nodes stroke, can be a Vector. Default: nothing\n\nnodestrokelw Optional. Line width for the nodes stroke, can be a Vector. Default: 0.0\n\nedgelabel Optional. Labels for the edges, a Vector or nothing. Default: []\n\nedgelabelc Optional. Color for the edge labels, can be a Vector. Default: colorant\"black\"\n\nedgelabeldistx, edgelabeldisty Optional. Distance for the edge label from center of edge. Default: 0.0\n\nEDGELABELSIZE Optional. Largest fontsize for the edge labels. Default: 4.0\n\nedgelabelsize Optional. Relative fontsize for the edge labels, can be a Vector. Default: 1.0\n\nEDGELINEWIDTH Optional. Max line width for the edges. Default: 0.25/sqrt(N)\n\nedgelinewidth Optional. Relative line width for the edges, can be a Vector. Default: 1.0\n\nedgestrokec Optional. Color for the edge strokes, can be a Vector. Default: colorant\"lightgray\"\n\narrowlengthfrac Optional. Fraction of line length to use for arrows. Equal to 0 for undirected graphs. Default: 0.1 for the directed graphs\n\narrowangleoffset Optional. Angular width in radians for the arrows. Default: π/9 (20 degrees)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GraphPlot.graphfamous-Tuple{AbstractString}",
    "page": "Docstrings",
    "title": "GraphPlot.graphfamous",
    "category": "method",
    "text": "read some famous graphs\n\nParamenters\n\ngraphname Currently, graphname can be one of [\"karate\", \"football\", \"dolphins\", \"netscience\", \"polbooks\", \"power\", \"cond-mat\"]\n\nReturn a graph\n\nExample     julia> g = graphfamous(\"karate\")\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GraphPlot.random_layout-Tuple{Any}",
    "page": "Docstrings",
    "title": "GraphPlot.random_layout",
    "category": "method",
    "text": "Position nodes uniformly at random in the unit square. For every node, a position is generated by choosing each of dim coordinates uniformly at random on the interval [0.0, 1.0).\n\nParameters\n\nG graph or list of nodes, A position will be assigned to every node in G\n\nReturn\n\nlocsx, locsy Locations of the nodes. Can be any units you want, but will be normalized and centered anyway\n\nExamples\n\njulia> g = simple_house_graph()\n\njulia> loc_x, loc_y = random_layout(g)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GraphPlot.readedgelist-Tuple{Any}",
    "page": "Docstrings",
    "title": "GraphPlot.readedgelist",
    "category": "method",
    "text": "read graph from in edgelist format\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GraphPlot.shell_layout",
    "page": "Docstrings",
    "title": "GraphPlot.shell_layout",
    "category": "function",
    "text": "This function is copy from IainNZ\'s GraphLayout.jl\n\nPosition nodes in concentric circles.\n\nParameters\n\nG a graph\n\nnlist Vector of Vector, Vector of node Vector for each shell.\n\nExamples\n\njulia> g = graphfamous(\"karate\")\njulia> nlist = Array{Vector{Int}}(2)\njulia> nlist[1] = [1:5]\njulia> nlist[2] = [6:num_vertiecs(g)]\njulia> locs_x, locs_y = shell_layout(g, nlist)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GraphPlot.spectral_layout",
    "page": "Docstrings",
    "title": "GraphPlot.spectral_layout",
    "category": "function",
    "text": "This function wrap from NetworkX\n\nPosition nodes using the eigenvectors of the graph Laplacian.\n\nParameters\n\nG a graph\n\nweight array or nothing, optional (default=nothing) The edge attribute that holds the numerical value used for the edge weight.  If None, then all edge weights are 1.\n\nExamples\n\njulia> g = graphfamous(\"karate\")\njulia> weight = rand(num_edges(g))\njulia> locs_x, locs_y = spectral_layout(g, weight)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GraphPlot.spring_layout",
    "page": "Docstrings",
    "title": "GraphPlot.spring_layout",
    "category": "function",
    "text": "This function is copy from IainNZ\'s GraphLayout.jl\n\nUse the spring/repulsion model of Fruchterman and Reingold (1991):\n\nAttractive force:  f_a(d) =  d^2 / k\nRepulsive force:  f_r(d) = -k^2 / d\n\nwhere d is distance between two vertices and the optimal distance between vertices k is defined as C * sqrt( area / num_vertices ) where C is a parameter we can adjust\n\nParameters\n\nG a graph\n\nC Constant to fiddle with density of resulting layout\n\nMAXITER Number of iterations we apply the forces\n\nINITTEMP Initial \"temperature\", controls movement per iteration\n\nExamples\n\njulia> g = graphfamous(\"karate\")\njulia> locs_x, locs_y = spring_layout(g)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GraphPlot.stressmajorize_layout",
    "page": "Docstrings",
    "title": "GraphPlot.stressmajorize_layout",
    "category": "function",
    "text": "Compute graph layout using stress majorization\n\nInputs:\n\nδ: Matrix of pairwise distances\np: Dimension of embedding (default: 2)\nw: Matrix of weights. If not specified, defaults to\n       w[i,j] = δ[i,j]^-2 if δ[i,j] is nonzero, or 0 otherwise\nX0: Initial guess for the layout. Coordinates are given in rows.\n    If not specified, default to random matrix of Gaussians\n\nAdditional optional keyword arguments control the convergence of the algorithm and the additional output as requested:\n\nmaxiter:   Maximum number of iterations. Default: 400size(X0, 1)^2\nabstols:   Absolute tolerance for convergence of stress.\n           The iterations terminate if the difference between two\n           successive stresses is less than abstol.\n           Default: √(eps(eltype(X0))\nreltols:   Relative tolerance for convergence of stress.\n           The iterations terminate if the difference between two\n           successive stresses relative to the current stress is less than\n           reltol. Default: √(eps(eltype(X0))\nabstolx:   Absolute tolerance for convergence of layout.\n           The iterations terminate if the Frobenius norm of two successive\n           layouts is less than abstolx. Default: √(eps(eltype(X0))\nverbose:   If true, prints convergence information at each iteration.\n           Default: false\nreturnall: If true, returns all iterates and their associated stresses.\n           If false (default), returns the last iterate\n\nOutput:\n\nThe final layout X, with coordinates given in rows, unless returnall=true.\n\nReference:\n\nThe main equation to solve is (8) of:\n\n@incollection{\n    author = {Emden R Gansner and Yehuda Koren and Stephen North},\n    title = {Graph Drawing by Stress Majorization}\n    year={2005},\n    isbn={978-3-540-24528-5},\n    booktitle={Graph Drawing},\n    seriesvolume={3383},\n    series={Lecture Notes in Computer Science},\n    editor={Pach, J\'anos},\n    doi={10.1007/978-3-540-31843-9_25},\n    publisher={Springer Berlin Heidelberg},\n    pages={239--250},\n}\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GraphPlot.LZ-Tuple{Any,Any,Any}",
    "page": "Docstrings",
    "title": "GraphPlot.LZ",
    "category": "method",
    "text": "Computes L^Z defined in (5) of the Reference\n\nInput: Z: current layout (coordinates)        d: Ideal distances (default: all 1)        w: weights (default: d.^-2)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GraphPlot.graphline-Union{Tuple{T}, Tuple{Any,Any,Any,Array{T,1},Any,Any}} where T<:Real",
    "page": "Docstrings",
    "title": "GraphPlot.graphline",
    "category": "method",
    "text": "Return lines and arrow heads\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GraphPlot.stress",
    "page": "Docstrings",
    "title": "GraphPlot.stress",
    "category": "function",
    "text": "Stress function to majorize\n\nInput:     X: A particular layout (coordinates in rows)     d: Matrix of pairwise distances     w: Weights for each pairwise distance\n\nSee (1) of Reference\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GraphPlot.weightedlaplacian-Tuple{Any}",
    "page": "Docstrings",
    "title": "GraphPlot.weightedlaplacian",
    "category": "method",
    "text": "Compute weighted Laplacian given ideal weights w\n\nLʷ defined in (4) of the Reference\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [GraphPlot]\nOrder = [:type, :function]"
},

]}
