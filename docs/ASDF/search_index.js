var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#[ASDF](https://github.com/eschnett/ASDF)-1",
    "page": "Readme",
    "title": "ASDF",
    "category": "section",
    "text": "A Julia library for the Advanced Scientific Data Format (ASDF).(Image: Build Status (Travis)) (Image: Build Status (Appveyor)) (Image: Coverage Status (Coveralls))"
},

{
    "location": "#Overview-1",
    "page": "Readme",
    "title": "Overview",
    "category": "section",
    "text": "The Advanced Scientific Data Format (ASDF) is a file format for scientific data. This package provides a Julia implementation for reading and writing ASDF files, based on the asdf Python package and the PyCall Julia package.The ASDF file format is based on the human-readable YAML standard, extended with efficient binary blocks to store array data. Basic arithmetic types (Bool, Int, Float, Complex) and strings are supported out of the box. Other types (structures) need to be declared to be supported.ASDF supports arbitrary array strides, both C (Python) and Fortran (Julia) memory layouts, as well as compression. The YAML metadata can contain arbitrary information corresponding to scalars, arrays, or dictionaries.The ASDF file format targets a similar audience as the HDF5 format."
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": ""
},

{
    "location": "#Writing-to-a-file-1",
    "page": "Readme",
    "title": "Writing to a file",
    "category": "section",
    "text": "Here we create a few simple data items and write them into an ASDF file:julia> using ASDF\njulia> # Define some data\njulia> s = \"Hello, World!\"\njulia> dict = Dict(\"a\" => 1, \"b\" => 2.0, \"c\" => \"cee\")\njulia> arr = Float32[i+j for i in 1:10, j in 1:10]\njulia> # Create the ASDF tree\njulia> tree = Dict{String, Any}(\n           \"comment\" => s,\n           \"table\" => dict,\n           \"data\" => arr)\njulia> # Write the file\njulia> ASDF.write_to(ASDF.File(tree), \"example.asdf\")This creates a file example.asdf. The beginning of the file is human-readable and is a properly formatted YAML document. Note that the triple dashes --- indicate the beginning and the triple dots ... indicate the end of a YAML document:#ASDF 1.0.0\n#ASDF_STANDARD 1.2.0\n%YAML 1.1\n%TAG ! tag:stsci.edu:asdf/\n--- !core/asdf-1.1.0\nasdf_library: !core/software-1.0.0 {author: Space Telescope Science Institute, homepage: \'http://github.com/spacetelescope/asdf\',\n  name: asdf, version: 2.1.0}\nhistory:\n  extensions:\n  - !core/extension_metadata-1.0.0\n    extension_class: asdf.extension.BuiltinExtension\n    software: {name: asdf, version: 2.1.0}\ncomment: Hello, World!\ndata: !core/ndarray-1.0.0\n  source: 0\n  datatype: float32\n  byteorder: little\n  shape: [10, 10]\n  strides: [4, 40]\ntable: {a: 1, b: 2.0, c: cee}\n...The file contains some metadata, including version numbers of the ASDF standard and the software used to create the file. This is followed by the data items comment, data, and table that we created. The actual array data is stored in binary after the triple dots. (It is also possible to store arrays in a human-readable form, but this becomes inefficient for large arrays.)The examples directoy of this Julia packages contains several example ASDF files taken from the ASDF standard."
},

{
    "location": "#Reading-from-file-1",
    "page": "Readme",
    "title": "Reading from file",
    "category": "section",
    "text": "Reading this file yields the data back:julia> using ASDF\njulia> # Read the file that was written earlier\njulia> tree = ASDF.tree(ASDF.open(\"example.asdf\"))\njulia> # Look at all items in the ASDF tree:\njulia> keys(tree)\nSet([\"history\", \"data\", \"table\", \"asdf_library\", \"comment\"])\njulia> # Extract the comment\njulia> tree[\"comment\"]\n\"Hello, World!\"\njulia> # Extract the lookup table\njulia> tree[\"table\"]\nDict{Any,Any} with 3 entries:\n    \"c\" => \"cee\"\n    \"b\" => 2.0\n    \"a\" => 1\njulia> # Extract the array\njulia> typeof(tree[\"data\"])\nASDF.NDArray{Float32,2,PyCall.PyArray{Float32,2}}\njulia> collect(tree[\"data\"])\n10×10 Array{Float32,2}:\n  2.0   3.0   4.0   5.0   6.0   7.0   8.0   9.0  10.0  11.0\n  3.0   4.0   5.0   6.0   7.0   8.0   9.0  10.0  11.0  12.0\n  4.0   5.0   6.0   7.0   8.0   9.0  10.0  11.0  12.0  13.0\n  5.0   6.0   7.0   8.0   9.0  10.0  11.0  12.0  13.0  14.0\n  6.0   7.0   8.0   9.0  10.0  11.0  12.0  13.0  14.0  15.0\n  7.0   8.0   9.0  10.0  11.0  12.0  13.0  14.0  15.0  16.0\n  8.0   9.0  10.0  11.0  12.0  13.0  14.0  15.0  16.0  17.0\n  9.0  10.0  11.0  12.0  13.0  14.0  15.0  16.0  17.0  18.0\n 10.0  11.0  12.0  13.0  14.0  15.0  16.0  17.0  18.0  19.0\n 11.0  12.0  13.0  14.0  15.0  16.0  17.0  18.0  19.0  20.0The ASDF package ensures that arrays are not copied when they are written to or read from a file. When writing, ASDF creates a numpy array (via the PyCall package) that shares the same data as the Julia array. When reading, ASDF creates an object of type NDArray (which is a subtype of AbstractArray) that efficiently refers to a numpy array (again via the PyCall package). An NDArray can be converted to regular Julia Array by copying it via calling collect."
},

{
    "location": "autodocs/#ASDF.NDArray",
    "page": "Docstrings",
    "title": "ASDF.NDArray",
    "category": "type",
    "text": "An n-dimensional array\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ASDF.Software",
    "page": "Docstrings",
    "title": "ASDF.Software",
    "category": "type",
    "text": "Describes a software package\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ASDF.Tree",
    "page": "Docstrings",
    "title": "ASDF.Tree",
    "category": "type",
    "text": "Top-level schema for every ASDF file\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [ASDF]\nOrder = [:type, :function]"
},

]}
