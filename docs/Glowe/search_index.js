var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Glowe-1",
    "page": "Readme",
    "title": "Glowe",
    "category": "section",
    "text": "Julia interface to GloVe.(Image: License) (Image: Build Status) (Image: Coverage Status)This package provides functionality for generating and working with GloVe word embeddings. The training is done using the original C code from the GloVe github repository.Note that there is also a package called Glove.jl that provides a pure Julia implementation of the algorithm.Release Notes"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Pkg.clone(\"https://github.com/zgornel/Glowe.jl\")for the latest master orPkg.add(\"Glowe\")for the stable versions."
},

{
    "location": "#Documentation-1",
    "page": "Readme",
    "title": "Documentation",
    "category": "section",
    "text": "Most of the documentation is provided in Julia\'s native docsystem."
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "Following Word2Vec.jl\'s example, considering the corpus from http://mattmahoney.net/dc/text8.zip extracted as text file text8 in the current working directory, the GloVe model can be obtained with:julia> # Training (may take a while)\n       vocab_count(\"text8\", \"vocab.txt\", min_count=5, verbose=1);\n       cooccur(\"text8\", \"vocab.txt\", \"cooccurrence.bin\", memory=8.0, verbose=1);\n       shuffle(\"cooccurrence.bin\", \"cooccurrence.shuf.bin\", memory=8.0, verbose=1);\n       glove(\"cooccurrence.shuf.bin\", \"vocab.txt\", \"text8-vec\", threads=8,\n             x_max=10.0, iter=15, vector_size=300, binary=0, write_header=1,\n             verbose=1);\n# BUILDING VOCABULARY\n# Truncating vocabulary at min count 5.\n# Using vocabulary of size 71290.\n#\n# COUNTING COOCCURRENCES\n# window size: 15\n# context: symmetric\n# Merging cooccurrence files: processed 60666468 lines.\n#\n# SHUFFLING COOCCURRENCES\n# array size: 510027366\n# Merging temp files: processed 60666468 lines.\n#\n# TRAINING MODEL\n# Read 60666468 lines.\n# vector size: 300\n# vocab size: 71290\n# x_max: 10.000000\n# alpha: 0.750000\n# 12/11/18 - 12:58.58AM, iter: 001, cost: 0.070201\n# 12/11/18 - 01:00.33AM, iter: 002, cost: 0.052521\n# ...The model can be imported withmodel = wordvectors(\"text8-vec.txt\", Float32, header=true, kind=:text)\n# WordVectors 71291 words, 300-element Float32 vectorsThe vector representation of a word can be obtained using get_vector.julia> get_vector(model, \"book\")\n# 300-element Array{Float32,1}:\n#   0.006189716\n#   0.04822071\n#   0.017121462\n#   ...The cosine similarity of book, for example, can be computed using cosine_similar_words.julia> cosine_similar_words(model, \"book\")\n# 10-element Array{String,1}:\n#  \"book\"\n#  \"books\"\n#  \"published\"\n#  \"domesday\"\n#  \"novel\"\n#  \"comic\"\n#  \"written\"\n#  \"bible\"\n#  \"urantia\"\n#  \"work\"Word vectors have many interesting properties. For example, vector(king) - vector(man) + vector(woman) is close to vector(queen).julia> analogy_words(model, [\"king\", \"woman\"], [\"man\"])\n# 5-element Array{String,1}:\n#  \"queen\"\n#  \"daughter\"\n#  \"children\"\n#  \"wife\"\n#  \"son\""
},

{
    "location": "#License-1",
    "page": "Readme",
    "title": "License",
    "category": "section",
    "text": "This code has an MIT license and therefore it is free. GloVe is released under an Apache License v2.0."
},

{
    "location": "#References-1",
    "page": "Readme",
    "title": "References",
    "category": "section",
    "text": "[1] GloVe: Global Vectors for Word Representation[2] Glove.jl - native Julia implementation"
},

{
    "location": "#Acknowledgements-1",
    "page": "Readme",
    "title": "Acknowledgements",
    "category": "section",
    "text": "The design of the package relies on design concepts from the word2vec Julia interface, Word2Vec.jl."
},

{
    "location": "#Reporting-Bugs-1",
    "page": "Readme",
    "title": "Reporting Bugs",
    "category": "section",
    "text": "Please file an issue to report a bug or request a feature."
},

{
    "location": "autodocs/#Base.size-Tuple{WordVectors}",
    "page": "Docstrings",
    "title": "Base.size",
    "category": "method",
    "text": "size(wv)\n\nReturn the word vector length and the number of words as a tuple.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Glowe.analogy-Union{Tuple{H}, Tuple{T}, Tuple{S}, Tuple{WordVectors{S,T,H},AbstractArray,AbstractArray}, Tuple{WordVectors{S,T,H},AbstractArray,AbstractArray,Any}} where H<:Integer where T<:Real where S<:AbstractString",
    "page": "Docstrings",
    "title": "Glowe.analogy",
    "category": "method",
    "text": "analogy(wv, pos, neg, n=5)\n\nCompute the analogy similarity between two lists of words. The positions and the similarity values of the top n similar words will be returned. For example, king - man + woman = queen will be pos=[\"king\", \"woman\"], neg=[\"man\"].\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Glowe.analogy_words",
    "page": "Docstrings",
    "title": "Glowe.analogy_words",
    "category": "function",
    "text": "analogy_words(wv, pos, neg, n=5)\n\nReturn the top n words computed by analogy similarity between positive words pos and negaive words neg. from the WordVectors wv.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Glowe.cooccur-Tuple{AbstractString,AbstractString,AbstractString}",
    "page": "Docstrings",
    "title": "Glowe.cooccur",
    "category": "method",
    "text": "cooccur(corpus, vocab, cooccurrences; verbose=2, symmetric=0, window_size=15, memory=4.0, max_product=nothing, overflow_length=nothing, overflow_file=\"overflow\", distance_weighting=1)\n\nCalculates word-word cooccurrence statistics.\n\nArguments\n\ncorpus::AbstractString input corpus file path\nvocab::AbstractString input vocabulary file path (the vocabulary contains truncated unigram counts, produced by vocab_count)\ncooccurrences::AbstractString output cooccurrences file path\n\nKeyword arguments\n\nverbose::Int set verbosity: 0, 1, 2 (default) or 3\nsymmetric::Int if <int> = 0, only use left context; if <int> = 1 (default), use left and right\nwindow_size::Int number of context words to the left (and to the right, if symmetric = 1); default 15\nmemory::Float64 soft limit for memory consumption, in GB – based on simple heuristic, so not extremely accurate; default 4.0\nmax_product::Union{Nothing, Int} limit the size of dense cooccurrence array by specifying the max product <int> of the frequency counts of the two cooccurring words. This value overrides that which is automatically produced by memory. Typically only needs adjustment for use with very large corpora\noverflow_length::Union{Nothing, Int} limit to length <int> the sparse overflow array, which buffers cooccurrence data that does not fit in the dense array, before writing to disk. This value overrides that which is automatically produced by memory. Typically only needs adjustment for use with very large corpora\noverflow_file::String filename, excluding extension, for temporary files; default \"overflow\"\ndistance_weighting::Int if <int> = 0, do not weight cooccurrence count by distance between words; if <int> = 1 (default), weight the cooccurrence count by inverse of distance between words\"\n\nExamples\n\n# It is assumed that vocab.txt exists and has been created by `vocab_count`\njulia> cooccur(\"corpus.txt\", \"vocab.txt\", \"cooccurrences.bin\", verbose=2, symmetric=0, window_size=10, memory=8.0, overflow_file=\"tempoverflow\")\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Glowe.cosine",
    "page": "Docstrings",
    "title": "Glowe.cosine",
    "category": "function",
    "text": "cosine(wv, word, n=10)\n\nReturn the position of n (by default n = 10) neighbors of word and their cosine similarities.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Glowe.cosine_similar_words",
    "page": "Docstrings",
    "title": "Glowe.cosine_similar_words",
    "category": "function",
    "text": "cosine_similar_words(wv, word, n=10)\n\nReturn the top n (by default n = 10) most similar words to word from the WordVectors wv.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Glowe.get_vector-Tuple{WordVectors,Any}",
    "page": "Docstrings",
    "title": "Glowe.get_vector",
    "category": "method",
    "text": "get_vector(wv, word [; oov=false, oov_key=\"<unk>\")\n\nReturns the vector representation of word from the WordVectors wv. If oov is true, the vector corresponding to the key oov_key is returned for out-of-vocabulary words.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Glowe.in_vocabulary-Tuple{WordVectors,AbstractString}",
    "page": "Docstrings",
    "title": "Glowe.in_vocabulary",
    "category": "method",
    "text": "in_vocabulary(wv, word)\n\nReturn true if word is part of the vocabulary of the WordVector wv and false otherwise.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Glowe.index-Tuple{WordVectors,Any}",
    "page": "Docstrings",
    "title": "Glowe.index",
    "category": "method",
    "text": "index(wv, word)\n\nReturn the index of word from the WordVectors wv.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Glowe.shuffle-Tuple{AbstractString,AbstractString}",
    "page": "Docstrings",
    "title": "Glowe.shuffle",
    "category": "method",
    "text": "shuffle(cooccurences, shuffled; verbose=2, memory=4.0, array_size=nothing, temp_file=\"temp_shuffle\")\n\nShuffles entries of word-word cooccurrence files.\n\nArguments\n\ncooccurences::AbstractString input cooccurrences file path\nshuffled::AbstractString output shuffled cooccurences file path\n\nKeyword arguments\n\nverbose::Int set verbosity: 0, 1, or 2 (default)\nmemory::Float64 soft limit for memory consumption, in GB; default 4.0\narray_size::Union{Nothing, Int} limit to length <int> the buffer which stores chunks of data to shuffle before writing to disk. This value overrides that which is automatically produced by memory\ntemp_file::String filename, excluding extension, for temporary files; default \"temp_shuffle\"\n\nExamples\n\n# It is assumed that cooccurences.bin exists and has been created by `cooccur`\njulia> shuffle(\"cooccurences.bin\", \"shuffled.bin\", verbose=2, memory=8.0)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Glowe.similarity-Tuple{WordVectors,Any,Any}",
    "page": "Docstrings",
    "title": "Glowe.similarity",
    "category": "method",
    "text": "similarity(wv, word1, word2)\n\nReturn the cosine similarity value between two words word1 and word2.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Glowe.vocab_count-Tuple{AbstractString,AbstractString}",
    "page": "Docstrings",
    "title": "Glowe.vocab_count",
    "category": "method",
    "text": "vocab_count(corpus, vocab; max_vocab=100_000, min_count=10, verbose=2)\n\nExtracts unigram counts.\n\nArguments\n\ncorpus::AbstractString input corpus file path\nvocab::AbstractString output vocabulary file path\n\nKeyword arguments\n\nverbose::Int set verbosity: 0, 1 or 2 (default)\nmax_vocab::Int upper bound on vocabulary size, i.e. keep the <int> most frequent words. The minimum frequency words are randomly sampled so as to obtain an even distribution over the alphabet.\nmin_count::Int lower limit such that words which occur fewer than <int> times are discarded.\n\nExamples\n\njulia> vocab_count(\"corpus.txt\", \"vocab.txt\", verbose=2, max_vocab=100_000, min_count=10)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Glowe.vocabulary-Tuple{WordVectors}",
    "page": "Docstrings",
    "title": "Glowe.vocabulary",
    "category": "method",
    "text": "vocabulary(wv)\n\nReturn the vocabulary as a vector of words of the WordVectors wv.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Glowe.wordvectors-Union{Tuple{T}, Tuple{AbstractString,Type{T}}} where T<:Real",
    "page": "Docstrings",
    "title": "Glowe.wordvectors",
    "category": "method",
    "text": "wordvectors(filename [,type=Float64][; kind=:text, header=false, normalize=true, vocabulary=nothing])\n\nGenerate a WordVectors type object from a file.\n\nArguments\n\nfilename::AbstractString the embeddings file name\ntype::Type type of the embedding vector elements; default Float64\n\nKeyword arguments\n\nkind::Symbol specifies whether the embeddings file is textual (:text)\n\nor binary (:binary); default :text\n\nheader::Union{Nothing, Bool} in text embeddings files specifies\n\nwhether the file contains a header i.e. number of lines, columns or not.   If the header is nothing, the loader will attempt to autodetect the   presence of a header; default nothing\n\nnormalize:Bool specifies whether to normalize the embedding vectors\n\ni.e. return unit vectors; default true\n\nvocabulary::Union{Nothing, AbstractString} path to the vocabulary\n\nfile generated with vocab_count (needed for binary embeddings); default nothing\n\nload_bias::Bool specifies whether to load the bias term or not\n\nif using binary embedding files; default false\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Glowe.autodetect_header-Tuple{AbstractString}",
    "page": "Docstrings",
    "title": "Glowe.autodetect_header",
    "category": "method",
    "text": "autodetect_header(filename)\n\nFunction that attempts at autodetecting the presence of a header in a GloVe embeddings file in a text format. If the function fails to detect a header, a false value is returned.\n\nNote: The function explicitly expects a text format for the embeddings. The behaviour is undetermined for binary formats and no attempt at detecting the file format is done.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Glowe]\nOrder = [:type, :function]"
},

]}
