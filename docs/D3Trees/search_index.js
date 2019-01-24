var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#D3Trees-1",
    "page": "Readme",
    "title": "D3Trees",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status) (Image: codecov.io)Flexible interactive visualization for large trees using D3.js.(Image: Tree)"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Pkg.add(\"D3Trees\")"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "There are two ways to create a D3Tree object described below:"
},

{
    "location": "#With-AbstractTrees-1",
    "page": "Readme",
    "title": "With AbstractTrees",
    "category": "section",
    "text": "Any object that implements the interface from AbstractTrees can be given to the constructor: D3Tree(object).See the docstring (julia> ?D3Tree) for information on how to control the style."
},

{
    "location": "#Without-AbstractTrees-1",
    "page": "Readme",
    "title": "Without AbstractTrees",
    "category": "section",
    "text": "The structure of a D3Tree is specified with lists of children for each node stored in a Vector of Int Vectors. For exampleD3Tree([[2,3], [], [4], []])creates a tree with four nodes. Nodes 2 and 3 are children of node 1, and node 4 is the only child of node 3. Nodes 2 and 4 are childless.In an IJulia notebook, the tree will automatically be displayed using D3.js. To get an interactive display in a chrome browser from the repl or a script, you can use the inchrome function. The blink function can also open it in a standalone window using the Blink.jl package.children = [[2,3], [4,5], [6,7], [8,9], [1], [], [], [], []]\nt = D3Tree(children)\n\ninchrome(t)\ninbrowser(t, \"firefox\")By clicking on the nodes, you can expand it to look like the image at the top of the page.Optional arguments control other aspects of the style (use julia> ?D3Tree for a complete list), for examplechildren = [[2,3], [], [4], []]\ntext = [\"one\\n(second line)\", \"2\", \"III\", \"four\"]\nstyle = [\"\", \"fill:red\", \"r:14\", \"opacity:0.7\"]\nlink_style = [\"\", \"stroke:blue\", \"\", \"stroke-width:10px\"]\ntooltip = [\"pops\", \"up\", \"on\", \"hover\"]\nt = D3Tree(children,\n           text=text,\n           style=style,\n           tooltip=tooltip,\n           link_style=link_style,\n           title=\"My Tree\",\n           init_expand=10)\n\ninchrome(t)will yield(Image: Expanded tree with style)or, see examples/hello.ipynb"
},

{
    "location": "#Text-output-1",
    "page": "Readme",
    "title": "Text output",
    "category": "section",
    "text": "D3Trees also supports basic text output. This can be achieved by writing to an io object with the text/plain mime. This format is the automatic output if a D3Tree is created in the REPL:julia> children = [[2,3], [4,5], [6,7], [8,9], [1], [], [], [], []];\n\njulia> t = D3Tree(children)\n1\n├──2\n│  ├──4\n│  │  ├──8 (0 children)\n│  │  └──9 (0 children)\n│  └──5\n│     └──1 (2 children)\n└──3\n   ├──6\n   └──7"
},

{
    "location": "#Browser-compatibility-1",
    "page": "Readme",
    "title": "Browser compatibility",
    "category": "section",
    "text": "This package works best in the Google chrome or chromium browser."
},

{
    "location": "#Limitations-1",
    "page": "Readme",
    "title": "Limitations",
    "category": "section",
    "text": "The tree is currently transmitted to the browser in one big json string, so it can be slow for large trees and cannot handle infinite trees.\nThis will not work offline because it downloads the D3 library on the fly (https://github.com/sisl/D3Trees.jl/issues/10)"
},

{
    "location": "autodocs/#D3Trees.D3Tree-Tuple{AbstractArray{#s33,1} where #s33<:(AbstractArray{T,1} where T)}",
    "page": "Docstrings",
    "title": "D3Trees.D3Tree",
    "category": "method",
    "text": "D3Tree(children, <keyword arguments>)\n\nConstruct a tree to be displayed using D3 in a browser or ipython notebook, specifying structure with lists of children indices.\n\nArguments\n\nRequired\n\nchildren::Vector{Vector{Int}}: List of children for each node. E.g.\nD3Tree([[2,3], [], [4], []])\ncreates a tree with four nodes. Nodes 2 and 3 are children of node 1, and node 4 is the only child of node 3. Nodes 2 and 4 are childless.\n\nKeyword:\n\ntext::Vector{String} - text to appear under each node.\ntooltip::Vector{String} - text to appear when hovering over each node.\nstyle::Vector{String} - html style for each node.\nlink_style::Vector{String} - html style for each link.\ntitle::String - html title.\ninit_expand::Integer - levels to expand initially.\ninit_duration::Number - duration of the initial animation in ms.\nsvg_height::Number - height of the svg containing the tree in px.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#D3Trees.D3Tree-Tuple{Any}",
    "page": "Docstrings",
    "title": "D3Trees.D3Tree",
    "category": "method",
    "text": "D3Tree(node; detect_repeat=true, kwargs...)\n\nConstruct a tree to be displayed using D3 in a browser or ipython notebook with any object, node, that implements the AbstractTrees interface.\n\nThe style may be controlled by implementing the following functions, which should return Strings for the nodes:\n\nD3Trees.text(node)\nD3Trees.tooltip(node)\nD3Trees.style(node)\nD3Trees.link_style(node)\n\nArguments\n\nRequired\n\nnode: an object that has AbstractTrees.children(node) and AbstractTrees.printnode(io::IO, node)\n\nKeyword\n\ndetect_repeat: if true, uses a dictionary to detect whether a node has appeared previously\nAlso supports, the non-vector arguments of the vector-of-vectors D3Tree constructor, i.e. title, init_expand, init_duration, svg_height.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#D3Trees.inbrowser-Tuple{D3Tree,Cmd}",
    "page": "Docstrings",
    "title": "D3Trees.inbrowser",
    "category": "method",
    "text": "inbrowser(t::D3Tree, command::Cmd)\n\nOpen an html document with the D3Tree in a program launched with the specified command.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#D3Trees.inbrowser-Tuple{D3Tree,String}",
    "page": "Docstrings",
    "title": "D3Trees.inbrowser",
    "category": "method",
    "text": "inbrowser(t::D3Tree, browsername::String)\n\nOpen an html document with the D3Tree in a browser with a platform-specific command.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#D3Trees.link_style-Tuple{Any}",
    "page": "Docstrings",
    "title": "D3Trees.link_style",
    "category": "method",
    "text": "D3Trees.link_style(n)\n\nReturn the html style for the link leading to the D3Trees node corresponding to AbstractTrees node n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#D3Trees.style-Tuple{Any}",
    "page": "Docstrings",
    "title": "D3Trees.style",
    "category": "method",
    "text": "D3Trees.style(n)\n\nReturn the html style for the D3Trees node corresponding to AbstractTrees node n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#D3Trees.text-Tuple{Any}",
    "page": "Docstrings",
    "title": "D3Trees.text",
    "category": "method",
    "text": "D3Trees.text(n)\n\nReturn the text to be displayed at the D3Trees node corresponding to AbstractTrees node n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#D3Trees.tooltip-Tuple{Any}",
    "page": "Docstrings",
    "title": "D3Trees.tooltip",
    "category": "method",
    "text": "D3Trees.tooltip(n)\n\nReturn the text to be displayed in the tooltip for the D3Trees node corresponding to AbstractTrees node n\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [D3Trees]\nOrder = [:type, :function]"
},

]}
