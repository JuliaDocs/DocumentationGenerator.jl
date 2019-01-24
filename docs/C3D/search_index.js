var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#C3D.jl-1",
    "page": "Readme",
    "title": "C3D.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: codecov)C3D is the standard file format for data gathered using various systems (motion capture, force plate data, EMG, etc). The goal of this package is to offer full coverage of the C3D file spec, as well as compatibility with files from major C3D compatible programs (Vicon Nexus, etc.).The current corpus of test data is a subset of the sample files found on the C3D website.  Pull requests welcome! Please open an issue if you have a file that is not being read correctly."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": ""
},

{
    "location": "#Reading-data-1",
    "page": "Readme",
    "title": "Reading data",
    "category": "section",
    "text": "Marker and analog data are accessed through the point and analog fields. Note that all data is converted to Float32 upon reading, regardless of the original type (eg DEC types).julia> pc_real = readc3d(\"data/sample01/Eb015pr.c3d\")\nC3DFile(\"data/sample01/Eb015pr.c3d\")\n\njulia> pc_real.point[\"LTH1\"]\n450×3 Array{Float32,2}:\n 0.0         0.0     0.0\n 0.0         0.0     0.0\n 0.0         0.0     0.0\n ⋮\n 1.66667  2152.67  702.917\n 3.58333  2159.0   702.833\n 5.0      2168.08  702.25\n \njulia> pc_real.analog[\"FZ1\"]\n1800-element Array{Float32,1}:\n -20.832\n -21.576\n -20.832\n   ⋮\n -20.088001\n -21.576\n -22.32"
},

{
    "location": "#Invalid-data-points-1",
    "page": "Readme",
    "title": "Invalid data points",
    "category": "section",
    "text": "According to the C3D format documentation, invalid data points are signified by setting the residual word to -1.0. This convention is respected by default by changing the 3D coordinates of invalid points to missing. If your C3D files do not respect this convention, or if you wish to ignore this for some other reason, this behavior can be disabled by setting keyword arg withmissings=false in the readc3d function.\njulia> bball = readc3d(\"data/sample16/basketball.c3d\")\nC3DFile(\"data/sample16/basketball.c3d\")\n\njulia> bball.point[\"2003\"]\n34×3 Array{Union{Missing, Float32},2}:\n missing  missing  missing\n missing  missing  missing\n missing  missing  missing\n  ⋮\n\njulia> bball = readc3d(\"data/sample16/basketball.c3d\"; withmissings=false)\nC3DFile(\"data/sample16/basketball.c3d\")\n\njulia> bball.point[\"2003\"]\n34×3 Array{Union{Missing, Float32},2}:\n  0.69115      0.987054    1.53009\n  0.656669     1.00666     1.5854\n  0.615803     1.02481     1.60467\n   ⋮"
},

{
    "location": "#Accessing-C3D-parameters-1",
    "page": "Readme",
    "title": "Accessing C3D parameters",
    "category": "section",
    "text": "The parameters can be accessed through the group field. Specific groups are indexed as Symbols.julia> pc_real.groups\nDict{Symbol,C3D.Group} with 5 entries:\n  :POINT          => Symbol[:DESCRIPTIONS, :RATE, :DATA_START, :FRAMES, :USED, :UNITS, :Y_SCREEN, :LABELS, :X_SCREEN, :SCALE]\n  :ANALOG         => Symbol[:DESCRIPTIONS, :RATE, :GEN_SCALE, :OFFSET, :USED, :UNITS, :LABELS, :SCALE]\n  :FORCE_PLATFORM => Symbol[:TYPE, :ORIGIN, :ZERO, :TRANSLATION, :CORNERS, :USED, :ROTATION, :CHANNEL]\n  :SUBJECT        => Symbol[:WEIGHT, :NUMBER, :HEIGHT, :DATE_OF_BIRTH, :GENDER, :PROJECT, :TARGET_RADIUS, :NAME]\n  :FPLOC          => Symbol[:INT, :OBJ, :MAX]\n\njulia> pc_real.groups[:POINT]\nSymbol[:DESCRIPTIONS, :RATE, :DATA_START, :FRAMES, :USED, :UNITS, :Y_SCREEN, :LABELS, :X_SCREEN, :SCALE]There are two ways to access a specific parameter. The first (and most convenient) directly references the data contained in the parameter.julia> pc_real.groups[:POINT].USED\n26\n\njulia> pc_real.groups[:POINT].LABELS\n48-element Array{String,1}:\n \"RFT1\"\n \"RFT2\"\n \"RFT3\"\n ⋮\n \"\"\n \"\"\n \"\"Alternately, it may be necessary to access the parameter (type) itself:julia> pc_real.groups[:POINT].params[:USED]\nC3D.ScalarParameter{Int16}(4433, -4, true, 1, \"USED\", :USED, 30, 26, 0x17, \"* Number of points used\")\n\njulia> pc_real.groups[:POINT].params[:LABELS]\nC3D.StringParameter(3807, 6, false, 1, \"LABELS\", :LABELS, 211, [\"RFT1\", \"RFT2\", \"RFT3\",  …  \"\", \"\", \"\"], 0x0c, \"Point labels\")"
},

{
    "location": "#Debugging-1",
    "page": "Readme",
    "title": "Debugging",
    "category": "section",
    "text": "There are two main steps to reading a C3D file: reading the parameters, and reading the point and/or analog data. In the event a file read fails, the stacktrace will show whether the error happened in _readparams or readdata. If the error occurred in readdata, try only reading the parameters, optionally setting the keyword argument valid to false:julia> pc_real = readc3dinfo(\"data/sample01/Eb015pr.c3d\")\nDict{Symbol,C3D.Group} with 5 entries:\n  :POINT          => Symbol[:DESCRIPTIONS, :RATE, :DATA_START, :FRAMES, :USED, :UNITS, :Y_SCREEN, :LABELS, :X_SCREEN, :SCALE]\n  :ANALOG         => Symbol[:DESCRIPTIONS, :RATE, :GEN_SCALE, :OFFSET, :USED, :UNITS, :LABELS, :SCALE]\n  :FORCE_PLATFORM => Symbol[:TYPE, :ORIGIN, :ZERO, :TRANSLATION, :CORNERS, :USED, :ROTATION, :CHANNEL]\n  :SUBJECT        => Symbol[:WEIGHT, :NUMBER, :HEIGHT, :DATE_OF_BIRTH, :GENDER, :PROJECT, :TARGET_RADIUS, :NAME]\n  :FPLOC          => Symbol[:INT, :OBJ, :MAX]\n\njulia> pc_real = readc3dinfo(\"data/sample01/Eb015pr.c3d\", validate=false)\nDict{Symbol,C3D.Group} with 5 entries:\n  :POINT          => Symbol[:DESCRIPTIONS, :RATE, :DATA_START, :FRAMES, :USED, :UNITS, :Y_SCREEN, :LABELS, :X_SCREEN, :SCALE]\n  :ANALOG         => Symbol[:DESCRIPTIONS, :RATE, :GEN_SCALE, :OFFSET, :USED, :UNITS, :LABELS, :SCALE]\n  :FORCE_PLATFORM => Symbol[:TYPE, :ORIGIN, :ZERO, :TRANSLATION, :CORNERS, :USED, :ROTATION, :CHANNEL]\n  :SUBJECT        => Symbol[:WEIGHT, :NUMBER, :HEIGHT, :DATE_OF_BIRTH, :GENDER, :PROJECT, :TARGET_RADIUS, :NAME]\n  :FPLOC          => Symbol[:INT, :OBJ, :MAX]If the error occurred in readdata, it is likely that there is an incorrect setting in one of the parameters. (If this is consistent among several files from the same vendor, open an issue and send an example file so I can fix whatever is causing the problem.)If the error occurred in _readparams, try starting julia with $ JULIA_DEBUG=C3D julia. This will enable debug messages that may help narrow down the parameter causing the problem.Please open an issue if you have a file that is being read incorrectly."
},

{
    "location": "#Roadmap-1",
    "page": "Readme",
    "title": "Roadmap",
    "category": "section",
    "text": "I plan to eventually add support for saving files that have been modified and for creating new files, but this is not a usecase that I require currently or in the foreseeable future. If this is important to you, open an issue or submit a PR!"
},

{
    "location": "autodocs/#C3D.readc3d-Tuple{AbstractString}",
    "page": "Docstrings",
    "title": "C3D.readc3d",
    "category": "method",
    "text": "readc3d(fn; withmissings=true)\n\nRead the C3D file fn. Keyword argument withmissings replaces invalid data points with missing values.\n\nSee also: readc3dinfo\n\n\n\n\n\n"
},

{
    "location": "autodocs/#C3D.readc3dinfo-Tuple{AbstractString}",
    "page": "Docstrings",
    "title": "C3D.readc3dinfo",
    "category": "method",
    "text": "readc3dinfo(fn; validate=true)\n\nOnly read the C3D file header and parameters.\n\nSee also: readc3d\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [C3D]\nOrder = [:type, :function]"
},

]}
