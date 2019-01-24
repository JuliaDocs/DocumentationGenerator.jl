var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ONNX-1",
    "page": "Readme",
    "title": "ONNX",
    "category": "section",
    "text": "(Image: Build Status)ONNX.jl : Read ONNX graphs and load these models in Julia. ONNX.jl provides an instance of transfer learning into Julia, by reading pretrained models from ONNX format to Flux.jl. This is done by generating the DataFlow graph from the model, and then reading it as Julia code.Note: If you\'re using julia-0.6, checkout to the v0.6 branch."
},

{
    "location": "#Loading-models-1",
    "page": "Readme",
    "title": "Loading models",
    "category": "section",
    "text": "You need to have the model.onnx ( or in some cases model.pb ) file,  which will be read. Several pretrained ONNX model files can also be downloaded from here.  Now that we have the model.onnx file, we can read it into Flux as :julia> using Flux, ONNX                             # Import the required packages.\njulia> ONNX.load_model(\"model.onnx\")                # If you are in some other directory, specify the entire path.\n                                                    # This creates two files: model.jl and weights.bson.\njulia> weights = ONNX.load_weights(\"weights.bson\")  # Read the weights from the binary serialized file.\njulia> model = include(\"model.jl\")                  # Loads the model from the model.jl file.And model is the corresponding model in Flux!This package is currently under development, don\'t tell us we didn\'t warn you!"
},

{
    "location": "#Running-the-tests-1",
    "page": "Readme",
    "title": "Running the tests",
    "category": "section",
    "text": "It\'s always better to run the tests before moving on to importing a model. The operator tests ensure that all ops are working. Follow the given steps to run these tests:Change your working directory to the test directory (cd ~/.julia/v0.6/ONNX.jl/test from the terminal)\nInside the test repository, run the runtests.jl script. (julia runtests.jl).\nRunning these tests may take some time, as it may initially download the test files if you don\'t already have them.(You need to have git preinstalled in order to download the tests)In order to read more about these tests and run model specific tests, go throught the docs in the test directory. "
},

{
    "location": "#Contributing-and-Help-1",
    "page": "Readme",
    "title": "Contributing and Help",
    "category": "section",
    "text": "If you\'re looking to contribute to the development of this package, and don\'t know where to begin, this blog post can be a good  starting point. It lists the approach taken towards developing this package, the current obstacles, and the work to be done in the future.Since this package is currently under development, feel free to open an issue if you find any error/bug. For more discussion, you can get in touch with us on Julia Slack. We\'re pretty active on the #machine-learning channel."
},

{
    "location": "autodocs/#ONNX.code-Tuple{ONNX.Types.Graph}",
    "page": "Docstrings",
    "title": "ONNX.code",
    "category": "method",
    "text": "Write out the Julia code for the model\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ONNX.convert-Tuple{ONNX.Proto.GraphProto}",
    "page": "Docstrings",
    "title": "ONNX.convert",
    "category": "method",
    "text": "Convert a GraphProto object to Graph type.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ONNX.convert-Tuple{ONNX.Proto.ModelProto}",
    "page": "Docstrings",
    "title": "ONNX.convert",
    "category": "method",
    "text": "Convert a ModelProto object to a Model type.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ONNX.convert-Tuple{ONNX.Proto.NodeProto}",
    "page": "Docstrings",
    "title": "ONNX.convert",
    "category": "method",
    "text": "Convert a Proto.NodeProto to Node type.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ONNX.convert_model-Tuple{ONNX.Proto.AttributeProto}",
    "page": "Docstrings",
    "title": "ONNX.convert_model",
    "category": "method",
    "text": "Retrieve only the useful information from a AttributeProto object into a Dict format.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ONNX.convert_model-Tuple{ONNX.Proto.OperatorSetIdProto}",
    "page": "Docstrings",
    "title": "ONNX.convert_model",
    "category": "method",
    "text": "Convert an OperatorSetIdProto to Dict.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ONNX.convert_model-Tuple{ONNX.Proto.StringStringEntryProto}",
    "page": "Docstrings",
    "title": "ONNX.convert_model",
    "category": "method",
    "text": "Convert a StringStringEntryProto to Dict.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ONNX.convert_model-Tuple{ONNX.Proto.ValueInfoProto}",
    "page": "Docstrings",
    "title": "ONNX.convert_model",
    "category": "method",
    "text": "Convert a ValueInfoProto to  ValueInfo.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ONNX.get_array-Tuple{ONNX.Proto.TensorProto}",
    "page": "Docstrings",
    "title": "ONNX.get_array",
    "category": "method",
    "text": "Get the array from a TensorProto object.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ONNX.load_model-Tuple{Any}",
    "page": "Docstrings",
    "title": "ONNX.load_model",
    "category": "method",
    "text": "Create the two files from the model.pb file.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ONNX.load_weights-Tuple{Any}",
    "page": "Docstrings",
    "title": "ONNX.load_weights",
    "category": "method",
    "text": "Retrieve the dictionary form the binary file (String to Any). format.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ONNX.weights-Tuple{ONNX.Types.Graph}",
    "page": "Docstrings",
    "title": "ONNX.weights",
    "category": "method",
    "text": "Checks location of weights and returns appropriate values.  Note: Constant weight is deprecated now.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ONNX.write_julia_file-Tuple{Any}",
    "page": "Docstrings",
    "title": "ONNX.write_julia_file",
    "category": "method",
    "text": "Create the model.jl file and write the model to it.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ONNX.write_weights-Tuple{Any}",
    "page": "Docstrings",
    "title": "ONNX.write_weights",
    "category": "method",
    "text": "Serialize the weights to a binary format and stores in the weights.bson file.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [ONNX]\nOrder = [:type, :function]"
},

]}
