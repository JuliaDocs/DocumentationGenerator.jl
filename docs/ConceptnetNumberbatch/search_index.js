var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ConceptnetNumberbatch.jl-1",
    "page": "Readme",
    "title": "ConceptnetNumberbatch.jl",
    "category": "section",
    "text": "An Julia interface to ConceptNetNumberbatch(Image: License) (Image: Build Status) (Image: Coverage Status)"
},

{
    "location": "#Introduction-1",
    "page": "Readme",
    "title": "Introduction",
    "category": "section",
    "text": "This package is a simple API to ConceptNetNumberbatch."
},

{
    "location": "#Documentation-1",
    "page": "Readme",
    "title": "Documentation",
    "category": "section",
    "text": "The following examples illustrate some common usage patterns:julia> using Conceptnet, Languages\n       file_conceptnet = download_embeddings(url=CONCEPTNET_HDF5_LINK,\n                                             localfile=\"./_conceptnet_/conceptnet.h5\");\n# [ Info: Download ConceptNetNumberbatch to ./_conceptnet_/conceptnet.h5...\n#   % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current\n#                                  Dload  Upload   Total   Spent    Left  Speed\n# 100  127M  100  127M    0     0  3646k      0  0:00:35  0:00:35 --:--:-- 4107k\n# \"./_conceptnet_/conceptnet.h5\"\n\n# Load embeddings\njulia> conceptnet = load_embeddings(file_conceptnet, languages=:en)\n# ConceptNet{Languages.English} (compressed): 1 language(s), 150875 embeddings\n\njulia> conceptnet[\"apple\"]  # Get embeddings for a single word\n# 300-element Array{Int8,1}:\n#   0\n#   0\n#   1\n#  -4\n# ...\n\njulia> conceptnet[[\"apple\", \"pear\", \"cherry\"]]  # Get embeddings for multiple words\n# 300×3 Array{Int8,2}:\n#   0   0   0\n#   0   0   0\n#   1   1   1\n#  -4  -6  -7\n# ...# Load multiple languages\njulia> conceptnet = load_embeddings(file_conceptnet, languages=[:en, :fr])\n# ConceptNet{Language} (compressed): 2 language(s), 174184 embeddings\n\njulia> conceptnet[\"apple\"]  # fails, language must be specified\n# ERROR: ...\n\njulia> [conceptnet[:en, \"apple\"] conceptnet[:fr, \"poire\"]]\n# 300×2 Array{Int8,2}:\n#   0   -2\n#   0   -2\n#   1   -2\n#  -4   -7\n# ...\n\n# Wildcard matching\njulia> conceptnet[:en, \"xxyyzish\"]  # returns embedding for \"#####ish\"\n# 300×1 Array{Int8,2}:\n#   5\n#  -1\n#   0\n#   1\n# ...# Useful functions\njulia> length(conceptnet)  # total number of embeddings for all languages\n# 174184\n\njulia> size(conceptnet)  # embedding vector length, number of embeddings\n# (300, 174184)\n\njulia> \"apple\" in conceptnet  # found in the English embeddings\n# true\n\njulia> \"poire\" in conceptnet  # found in the French embeddings\n# true\n\njulia> # `keys` returns an iterator for all words\n       for word in Iterators.take(keys(conceptnet),3)\n           println(word)\n       end\n# définie\n# invités\n# couventsDocument embedding is quite straightforward:julia> doc = \"embed this document containing X_#-s231 which cannot be embedded\"\n       edoc, idxs_missed = embed_document(conceptnet, doc, language=Languages.English(), keep_size=false)\n       missed_words = tokenize_for_conceptnet(doc)[idx_missed]\n       println(\"Missed word: $missed_word\")\n       edoc\n# Missed word: SubString{String}[\"X_#-s231\"]\n# 300×8 Array{Int8,2}:\n#   0   0   0   0   0   1   0   0\n#  -1  -2  -1  -1  -3  -2  -3   0\n#   1   5   0   4   6   6   6   2\n# ..."
},

{
    "location": "#Remarks-1",
    "page": "Readme",
    "title": "Remarks",
    "category": "section",
    "text": "for the best speed, the HDF5 version should be used\nthe API is very fast for retrieving embeddings of single word exact matches\nit is also quite fast for retrieving embeddings of wildcard matches (xyzabcish is matched to ######ish) and multiple word expressions of arbitrary length (provided these are embedded)\nthe document embedding is slower (scales with document length)"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "The installation can be done through the usual channels (manually by cloning the repository or installing it though the julia REPL)."
},

{
    "location": "#License-1",
    "page": "Readme",
    "title": "License",
    "category": "section",
    "text": "This code has an MIT license and therefore it is free."
},

{
    "location": "#References-1",
    "page": "Readme",
    "title": "References",
    "category": "section",
    "text": "[1] ConceptNetNumberbatch GitHub homepage[2] ConceptNet GitHub homepage[3] Embeddings.jl GitHub homepage"
},

{
    "location": "autodocs/#ConceptnetNumberbatch.download_embeddings-Tuple{}",
    "page": "Docstrings",
    "title": "ConceptnetNumberbatch.download_embeddings",
    "category": "method",
    "text": "Download ConceptNetNumberbatch embeddings given a url and saves them to a file pointed to by localfile.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ConceptnetNumberbatch.embed_document-Union{Tuple{E}, Tuple{K}, Tuple{L}, Tuple{ConceptNet{L,K,E},AbstractString}} where E<:Real where K where L<:Languages.Language",
    "page": "Docstrings",
    "title": "ConceptnetNumberbatch.embed_document",
    "category": "method",
    "text": "Retrieves the embedding matrix for a given document.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ConceptnetNumberbatch.load_embeddings-Union{Tuple{AbstractString}, Tuple{E}} where E<:Real",
    "page": "Docstrings",
    "title": "ConceptnetNumberbatch.load_embeddings",
    "category": "method",
    "text": "Load the embeddings given a valid ConceptNetNumberbatch filepath, lading at most max_vocab_size embeddings if no specific keep_words are specified, filtering on languages.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ConceptnetNumberbatch.tokenize_for_conceptnet-Union{Tuple{Array{S,1}}, Tuple{S}, Tuple{Array{S,1},Regex}} where S<:AbstractString",
    "page": "Docstrings",
    "title": "ConceptnetNumberbatch.tokenize_for_conceptnet",
    "category": "method",
    "text": "Fast tokenization function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ConceptnetNumberbatch._get_vocab_size",
    "page": "Docstrings",
    "title": "ConceptnetNumberbatch._get_vocab_size",
    "category": "function",
    "text": "Calculate how many embeddings to retreive.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ConceptnetNumberbatch._load_gz_embeddings-Union{Tuple{S2}, Tuple{S1}, Tuple{E}, Tuple{S1,Codec,Union{Nothing, Int64},Array{S2,1}}} where S2<:AbstractString where S1<:AbstractString where E<:Real",
    "page": "Docstrings",
    "title": "ConceptnetNumberbatch._load_gz_embeddings",
    "category": "method",
    "text": "Load the ConceptNetNumberbatch embeddings from a .gz or uncompressed file.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ConceptnetNumberbatch._load_hdf5_embeddings-Union{Tuple{E}, Tuple{S2}, Tuple{S1}, Tuple{S1,Union{Nothing, Int64},Array{S2,1}}} where E<:Real where S2<:AbstractString where S1<:AbstractString",
    "page": "Docstrings",
    "title": "ConceptnetNumberbatch._load_hdf5_embeddings",
    "category": "method",
    "text": "Load the ConceptNetNumberbatch embeddings from a HDF5 file.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ConceptnetNumberbatch._parseline-Union{Tuple{E}, Tuple{Any,Type{E}}} where E<:Real",
    "page": "Docstrings",
    "title": "ConceptnetNumberbatch._parseline",
    "category": "method",
    "text": "Parse a line of text from a ConceptNetNumberbatch delimited file.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [ConceptnetNumberbatch]\nOrder = [:type, :function]"
},

]}
