var documenterSearchIndex = {"docs": [

{
    "location": "#Base.size-Tuple{WordVectors}",
    "page": "Home",
    "title": "Base.size",
    "category": "method",
    "text": "size(wv)\n\nReturn the word vector length and the number of words as a tuple.\n\n\n\n\n\n"
},

{
    "location": "#Glowe.analogy-Union{Tuple{H}, Tuple{T}, Tuple{S}, Tuple{WordVectors{S,T,H},AbstractArray,AbstractArray}, Tuple{WordVectors{S,T,H},AbstractArray,AbstractArray,Any}} where H<:Integer where T<:Real where S<:AbstractString",
    "page": "Home",
    "title": "Glowe.analogy",
    "category": "method",
    "text": "analogy(wv, pos, neg, n=5)\n\nCompute the analogy similarity between two lists of words. The positions and the similarity values of the top n similar words will be returned. For example, king - man + woman = queen will be pos=[\"king\", \"woman\"], neg=[\"man\"].\n\n\n\n\n\n"
},

{
    "location": "#Glowe.analogy_words",
    "page": "Home",
    "title": "Glowe.analogy_words",
    "category": "function",
    "text": "analogy_words(wv, pos, neg, n=5)\n\nReturn the top n words computed by analogy similarity between positive words pos and negaive words neg. from the WordVectors wv.\n\n\n\n\n\n"
},

{
    "location": "#Glowe.cooccur-Tuple{AbstractString,AbstractString,AbstractString}",
    "page": "Home",
    "title": "Glowe.cooccur",
    "category": "method",
    "text": "cooccur(corpus, vocab, cooccurrences; verbose=2, symmetric=0, window_size=15, memory=4.0, max_product=nothing, overflow_length=nothing, overflow_file=\"overflow\", distance_weighting=1)\n\nCalculates word-word cooccurrence statistics.\n\nArguments\n\ncorpus::AbstractString input corpus file path\nvocab::AbstractString input vocabulary file path (the vocabulary contains truncated unigram counts, produced by vocab_count)\ncooccurrences::AbstractString output cooccurrences file path\n\nKeyword arguments\n\nverbose::Int set verbosity: 0, 1, 2 (default) or 3\nsymmetric::Int if <int> = 0, only use left context; if <int> = 1 (default), use left and right\nwindow_size::Int number of context words to the left (and to the right, if symmetric = 1); default 15\nmemory::Float64 soft limit for memory consumption, in GB – based on simple heuristic, so not extremely accurate; default 4.0\nmax_product::Union{Nothing, Int} limit the size of dense cooccurrence array by specifying the max product <int> of the frequency counts of the two cooccurring words. This value overrides that which is automatically produced by memory. Typically only needs adjustment for use with very large corpora\noverflow_length::Union{Nothing, Int} limit to length <int> the sparse overflow array, which buffers cooccurrence data that does not fit in the dense array, before writing to disk. This value overrides that which is automatically produced by memory. Typically only needs adjustment for use with very large corpora\noverflow_file::String filename, excluding extension, for temporary files; default \"overflow\"\ndistance_weighting::Int if <int> = 0, do not weight cooccurrence count by distance between words; if <int> = 1 (default), weight the cooccurrence count by inverse of distance between words\"\n\nExamples\n\n# It is assumed that vocab.txt exists and has been created by `vocab_count`\njulia> cooccur(\"corpus.txt\", \"vocab.txt\", \"cooccurrences.bin\", verbose=2, symmetric=0, window_size=10, memory=8.0, overflow_file=\"tempoverflow\")\n\n\n\n\n\n"
},

{
    "location": "#Glowe.cosine",
    "page": "Home",
    "title": "Glowe.cosine",
    "category": "function",
    "text": "cosine(wv, word, n=10)\n\nReturn the position of n (by default n = 10) neighbors of word and their cosine similarities.\n\n\n\n\n\n"
},

{
    "location": "#Glowe.cosine_similar_words",
    "page": "Home",
    "title": "Glowe.cosine_similar_words",
    "category": "function",
    "text": "cosine_similar_words(wv, word, n=10)\n\nReturn the top n (by default n = 10) most similar words to word from the WordVectors wv.\n\n\n\n\n\n"
},

{
    "location": "#Glowe.get_vector-Tuple{WordVectors,Any}",
    "page": "Home",
    "title": "Glowe.get_vector",
    "category": "method",
    "text": "get_vector(wv, word [; oov=false, oov_key=\"<unk>\")\n\nReturns the vector representation of word from the WordVectors wv. If oov is true, the vector corresponding to the key oov_key is returned for out-of-vocabulary words.\n\n\n\n\n\n"
},

{
    "location": "#Glowe.in_vocabulary-Tuple{WordVectors,AbstractString}",
    "page": "Home",
    "title": "Glowe.in_vocabulary",
    "category": "method",
    "text": "in_vocabulary(wv, word)\n\nReturn true if word is part of the vocabulary of the WordVector wv and false otherwise.\n\n\n\n\n\n"
},

{
    "location": "#Glowe.index-Tuple{WordVectors,Any}",
    "page": "Home",
    "title": "Glowe.index",
    "category": "method",
    "text": "index(wv, word)\n\nReturn the index of word from the WordVectors wv.\n\n\n\n\n\n"
},

{
    "location": "#Glowe.shuffle-Tuple{AbstractString,AbstractString}",
    "page": "Home",
    "title": "Glowe.shuffle",
    "category": "method",
    "text": "shuffle(cooccurences, shuffled; verbose=2, memory=4.0, array_size=nothing, temp_file=\"temp_shuffle\")\n\nShuffles entries of word-word cooccurrence files.\n\nArguments\n\ncooccurences::AbstractString input cooccurrences file path\nshuffled::AbstractString output shuffled cooccurences file path\n\nKeyword arguments\n\nverbose::Int set verbosity: 0, 1, or 2 (default)\nmemory::Float64 soft limit for memory consumption, in GB; default 4.0\narray_size::Union{Nothing, Int} limit to length <int> the buffer which stores chunks of data to shuffle before writing to disk. This value overrides that which is automatically produced by memory\ntemp_file::String filename, excluding extension, for temporary files; default \"temp_shuffle\"\n\nExamples\n\n# It is assumed that cooccurences.bin exists and has been created by `cooccur`\njulia> shuffle(\"cooccurences.bin\", \"shuffled.bin\", verbose=2, memory=8.0)\n\n\n\n\n\n"
},

{
    "location": "#Glowe.similarity-Tuple{WordVectors,Any,Any}",
    "page": "Home",
    "title": "Glowe.similarity",
    "category": "method",
    "text": "similarity(wv, word1, word2)\n\nReturn the cosine similarity value between two words word1 and word2.\n\n\n\n\n\n"
},

{
    "location": "#Glowe.vocab_count-Tuple{AbstractString,AbstractString}",
    "page": "Home",
    "title": "Glowe.vocab_count",
    "category": "method",
    "text": "vocab_count(corpus, vocab; max_vocab=100_000, min_count=10, verbose=2)\n\nExtracts unigram counts.\n\nArguments\n\ncorpus::AbstractString input corpus file path\nvocab::AbstractString output vocabulary file path\n\nKeyword arguments\n\nverbose::Int set verbosity: 0, 1 or 2 (default)\nmax_vocab::Int upper bound on vocabulary size, i.e. keep the <int> most frequent words. The minimum frequency words are randomly sampled so as to obtain an even distribution over the alphabet.\nmin_count::Int lower limit such that words which occur fewer than <int> times are discarded.\n\nExamples\n\njulia> vocab_count(\"corpus.txt\", \"vocab.txt\", verbose=2, max_vocab=100_000, min_count=10)\n\n\n\n\n\n"
},

{
    "location": "#Glowe.vocabulary-Tuple{WordVectors}",
    "page": "Home",
    "title": "Glowe.vocabulary",
    "category": "method",
    "text": "vocabulary(wv)\n\nReturn the vocabulary as a vector of words of the WordVectors wv.\n\n\n\n\n\n"
},

{
    "location": "#Glowe.wordvectors-Union{Tuple{T}, Tuple{AbstractString,Type{T}}} where T<:Real",
    "page": "Home",
    "title": "Glowe.wordvectors",
    "category": "method",
    "text": "wordvectors(filename [,type=Float64][; kind=:text, header=false, normalize=true, vocabulary=nothing])\n\nGenerate a WordVectors type object from a file.\n\nArguments\n\nfilename::AbstractString the embeddings file name\ntype::Type type of the embedding vector elements; default Float64\n\nKeyword arguments\n\nkind::Symbol specifies whether the embeddings file is textual (:text)\n\nor binary (:binary); default :text\n\nheader::Union{Nothing, Bool} in text embeddings files specifies\n\nwhether the file contains a header i.e. number of lines, columns or not.   If the header is nothing, the loader will attempt to autodetect the   presence of a header; default nothing\n\nnormalize:Bool specifies whether to normalize the embedding vectors\n\ni.e. return unit vectors; default true\n\nvocabulary::Union{Nothing, AbstractString} path to the vocabulary\n\nfile generated with vocab_count (needed for binary embeddings); default nothing\n\nload_bias::Bool specifies whether to load the bias term or not\n\nif using binary embedding files; default false\n\n\n\n\n\n"
},

{
    "location": "#Glowe.autodetect_header-Tuple{AbstractString}",
    "page": "Home",
    "title": "Glowe.autodetect_header",
    "category": "method",
    "text": "autodetect_header(filename)\n\nFunction that attempts at autodetecting the presence of a header in a GloVe embeddings file in a text format. If the function fails to detect a header, a false value is returned.\n\nNote: The function explicitly expects a text format for the embeddings. The behaviour is undetermined for binary formats and no attempt at detecting the file format is done.\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Glowe]\nOrder = [:type, :function]"
},

]}
