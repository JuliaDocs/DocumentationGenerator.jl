var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#DrawSimpleGraphs-1",
    "page": "Readme",
    "title": "DrawSimpleGraphs",
    "category": "section",
    "text": "Drawing functions for SimpleGraphs.(Image: Build Status)(Image: codecov.io)Given a SimpleGraph, the function draw(G) draws G in its current embedding. If the graph does not have an embedding, then it is given a circular embedding.If further operations on the drawing are desired, then Plots or SimpleDrawing functions may be used.julia> using SimpleGraphs, DrawSimpleGraphs, Plots\n\njulia> G = Cube(4)\nCube graph Q(4) (n=16, m=32)\n\njulia> embed(G,:combined)\n\njulia> draw(G)\n\njulia> savefig(\"four-cube.png\")(Image: )"
},

{
    "location": "#Embedding-Commands-1",
    "page": "Readme",
    "title": "Embedding Commands",
    "category": "section",
    "text": "The following functions reside in SimpleGraphs. They are used to create and manipulate embeddings associated with a graph."
},

{
    "location": "#Create-an-embedding-1",
    "page": "Readme",
    "title": "Create an embedding",
    "category": "section",
    "text": "embed(G,method) creates a new embedding of G. The second argument method is a symbol associated with an embedding algorithm. The method can be one of the following::circular (default) arranges the vertices in a circle.\n:random arranges the vertices at random.\n:spring arranges the vertices by modeling edges as springs holding repelling vertices together.\n:stress arranges the vertices by attempting to put vertices geometric distance equal to their graph-theoretic distance.\n:combined is equivalent to first performing a spring embedding followed by a stress embedding. Often gives nice results.\n:spectral arranges the vertices based on the eigenvectors of the Laplacian matrix of the graph. Specifically, the x-coordinates come from the eigenvectorassociated with the second smallest eigenvalue, and the y-coordinates come from the eigenvector associated with the third smallest.In addition, embed(G,xy) will give the graph an embedding specified in the dictionary xy where maps vertices to two-element vectors."
},

{
    "location": "#Modify-an-embedding-1",
    "page": "Readme",
    "title": "Modify an embedding",
    "category": "section",
    "text": "has_embedding(G) checks to see if the graph has been provided with an embedding.\ngetxy(G) retrieves a copy of the embedding. Modifying the output of getxy does not modify the embedding of the graph.\nset_line_color(G,name) assigns the color in the string name to the edges and boundaries of the vertices. Defaults to \"black\".\nget_line_color(G) returns the line color.\nset_fill_color(G,name) assigns the color in the string name to be the fill color of the vertices. Defaults to \"white\".\nset_vertex_size(G,sz) sets the size of the drawn vertices tothe integer sz.get_vertex_size(G) returns the size of the vertices.\ntransform(G,A,b) applies an affine transformation to all coordinates in the graph\'s drawing. Here A is 2-by-2 matrix and b is a 2-vector. Each point p is mapped to A*p+b. Specialversions of this command are provided by scale, rotate, translate, and recenter. (Note: Some of these function names cause collisions, so I may change them.)edge_length(G,uv) returns the geometric length of the edge uv. Note this fails if G does not have an embedding.edge_length(G) returns an array of the edge lengths."
},

{
    "location": "#Vertex-Labels-1",
    "page": "Readme",
    "title": "Vertex Labels",
    "category": "section",
    "text": "Use draw_labels(G) after draw(G) to insert vertex names into the drawing. Optionally, add a font size, draw_labels(G,sz), to make the labels small enough to fit (or use set_vertex_size to make larger vertices).julia> G = Cube(3)\nCube graph Q(3) (n=8, m=12)\n\njulia> embed(G,:combined)\n\njulia> set_vertex_size(G,20)\n\njulia> draw(G)\n\njulia> draw_labels(G)(Image: )"
},

{
    "location": "#Example:-Knight\'s-Tour-1",
    "page": "Readme",
    "title": "Example: Knight\'s Tour",
    "category": "section",
    "text": "The function KnightTourDrawing(r,c) to solve the problem of finding a knight\'s tour on an r-by-c chess board and drawing the solution.julia> KnightTourDrawing(8,8)\nSearching for a Hamiltonian cycle in an 8-by-8 Knight\'s move graph\n1374.144891 seconds (9.02 G allocations: 1002.489 GiB, 12.68% gc time)\nFinished(Image: )"
},

{
    "location": "autodocs/#DrawSimpleGraphs.KnightTourDrawing",
    "page": "Docstrings",
    "title": "DrawSimpleGraphs.KnightTourDrawing",
    "category": "function",
    "text": "KnightTourDrawing(r,c) illustrates a Knight\'s tour of an r-by-c chessboard returning true if the tour exists and false if not.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SimpleDrawing.draw-Tuple{SimpleGraphs.SimpleGraph}",
    "page": "Docstrings",
    "title": "SimpleDrawing.draw",
    "category": "method",
    "text": "draw(G::SimpleGraph) draws G in its current embedding. (If G does not have an embedding, then it is given a circular embedding.)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [DrawSimpleGraphs]\nOrder = [:type, :function]"
},

]}
