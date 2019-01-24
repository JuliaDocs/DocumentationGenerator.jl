var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Bio3DView.jl-1",
    "page": "Readme",
    "title": "Bio3DView.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status)Bio3DView.jl provides a viewer for molecular structures in Julia. It is a wrapper round the excellent 3Dmol.js package [1]. When used from the REPL or a file, the viewer shows in a popup using Blink.jl. When used from IJulia running in a Jupyter notebook or JupyterLab, the viewer shows in the output cell. You can also use Bio3DView.jl to generate standalone HTML, e.g. for use in a web page.[1] Nicholas Rego and David Koes, 3Dmol.js: molecular visualization with WebGL, Bioinformatics (2015) 31(8): 1322-1324 - linkContributions and bug reports are welcome."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Julia v0.7 or later is required. Install Bio3DView from the package mode of the Julia REPL (press ]):add https://github.com/jgreener64/Bio3DView.jl#masterBio3DView uses Requires.jl to minimise dependencies so you will also need to install either Blink or IJulia (or both) to make this package useful, though you can generate HTML without them. If you are using Blink, you will need to run using Blink before the Bio3DView functions work. To view structural objects from BioStructures.jl you will need to have BioStructures.jl installed."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "See the tutorial notebook."
},

{
    "location": "autodocs/#Bio3DView.Axes",
    "page": "Docstrings",
    "title": "Bio3DView.Axes",
    "category": "type",
    "text": "Axes(length, radius)\nAxes()\n\nStyling for visualisation of the coordinate axes. Arguments are numbers for the length and the radius of the arrows. The optional keyword argument colors is a list of 3 colors as Strings for the 3 axes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Bio3DView.Box",
    "page": "Docstrings",
    "title": "Bio3DView.Box",
    "category": "type",
    "text": "Box(center, dimensions)\n\nData and styling for a box visualisation. Arguments are a Vector{Float64} of the center coordinates and a Vector{Float64} of the box size in each dimension. Optional keyword arguments are color and wireframe.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Bio3DView.CameraAngle",
    "page": "Docstrings",
    "title": "Bio3DView.CameraAngle",
    "category": "type",
    "text": "CameraAngle(posx, posy, posz, zoom, qx, qy, qz, qw)\n\nA custom perspective to view the molecule from. Arguments are x/y/z translation, zoom, and x/y/z/w rotation quaternion. Default is CameraAngle(0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Bio3DView.IsoSurface",
    "page": "Docstrings",
    "title": "Bio3DView.IsoSurface",
    "category": "type",
    "text": "IsoSurface(voldata, isoval)\n\nData and styling for an isosurface visualisation. Arguments are the filepath with the volume data in \"cube\" format and the value to view the isosurface at. Optional keyword arguments are color, opacity, wireframe and smoothness.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Bio3DView.Style",
    "page": "Docstrings",
    "title": "Bio3DView.Style",
    "category": "type",
    "text": "Style(style_type)\nStyle(style_type, options)\n\nA style for a molecular visualisation, with an optional Dict of options. Examples are Style(\"cartoon\") and Style(\"cartoon\", Dict(\"color\"=> \"spectrum\", \"ribbon\"=> true, \"thickness\"=> 1.0)).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Bio3DView.Surface",
    "page": "Docstrings",
    "title": "Bio3DView.Surface",
    "category": "type",
    "text": "Surface()\nSurface(options)\n\nA style for a molecular VDW surface visualisation, with an optional Dict of options. An example is Surface(Dict(\"opacity\"=> 0.8, \"colorscheme\"=> \"whiteCarbon\")).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Bio3DView.viewfile",
    "page": "Docstrings",
    "title": "Bio3DView.viewfile",
    "category": "function",
    "text": "viewfile(file)\nviewfile(file, format)\n\nView a molecular structure from a file. Displays in a popup window, or in the output cell for an IJulia notebook. Arguments are the filepath and the format (\"pdb\", \"sdf\", \"xyz\" or \"mol2\"). If not provided, the format is guessed from the file extension, e.g. \"myfile.xyz\" is treated as being in the xyz format. Optional keyword arguments are style, surface, isosurface, box, vtkcell, axes, cameraangle, height, width, html and debug.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Bio3DView.viewpdb-Tuple{AbstractString}",
    "page": "Docstrings",
    "title": "Bio3DView.viewpdb",
    "category": "method",
    "text": "viewpdb(pdbid)\n\nView a structure from the Protein Data Bank (PDB). Displays in a popup window, or in the output cell for an IJulia notebook. Argument is the four letter PDB ID, e.g. \"1AKE\". Requires an internet connection to work. Optional keyword arguments are style, surface, isosurface, box, vtkcell, axes, cameraangle, height, width, html and debug.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Bio3DView.viewstring-Tuple{AbstractString,AbstractString}",
    "page": "Docstrings",
    "title": "Bio3DView.viewstring",
    "category": "method",
    "text": "viewstring(str, format)\n\nView a molecular structure contained in a string. Displays in a popup window, or in the output cell for an IJulia notebook. Arguments are the molecule string and the format (\"pdb\", \"sdf\", \"xyz\" or \"mol2\"). Optional keyword arguments are style, surface, isosurface, box, vtkcell, axes, cameraangle, height, width, html and debug.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Bio3DView]\nOrder = [:type, :function]"
},

]}
