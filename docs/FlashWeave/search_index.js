var documenterSearchIndex = {"docs": [

{
    "location": "#FlashWeave.graph-Union{Tuple{FWResult{T}}, Tuple{T}} where T<:Integer",
    "page": "Home",
    "title": "FlashWeave.graph",
    "category": "method",
    "text": "graph(result::FWResult{T}) -> SimpleWeightedGraph{Int, Float64}\n\nExtract the underlying weighted graph from network results.\n\n\n\n\n\n"
},

{
    "location": "#FlashWeave.learn_network",
    "page": "Home",
    "title": "FlashWeave.learn_network",
    "category": "function",
    "text": "learn_network(data_path::AbstractString, meta_data_path::AbstractString) -> FWResult{Int}\n\nWorks like learn_network(data::AbstractArray{ElType}), but takes file paths an OTU table and optionally a meta data table as an input (instead of a data matrix).\n\ndata_path - path to a file storing an OTU count table (and in the case of JLD2 possibly meta data)\nmeta_data_path - optional path to a file with meta data\n*_key  - HDF5 keys to access data sets with OTU counts, Meta variables and variable names in a JLD2 file, if a data item is absent the corresponding key should be \'nothing\'. More help under \'?load_data\'\nverbose - print progress information\ntransposed - if true, rows of data are variables and columns are samples\nkwargs... - additional keyword arguments passed to learn_network(data::AbstractArray{ElType})\n\n\n\n\n\n"
},

{
    "location": "#FlashWeave.learn_network-Union{Tuple{AbstractArray{ElType,N} where N}, Tuple{ElType}} where ElType<:Real",
    "page": "Home",
    "title": "FlashWeave.learn_network",
    "category": "method",
    "text": "learn_network(data::AbstractArray{<:Real}) -> FWResult{Int}\n\nLearn an interaction network from a data table (including OTUs and optionally meta variables).\n\ndata - data table with information on OTU counts and (optionally) meta variables\nheader - names of variable columns in data\nmeta_mask - true/false mask indicating which variables are meta variables\n\nAlgorithmic parameters:\n\nheterogeneous - enable heterogeneous mode for multi-habitat or -protocol data with at least thousands of samples (FlashWeaveHE)\nsensitive - enable fine-grained associations (FlashWeave-S, FlashWeaveHE-S),  sensitive=false results in the fast modes FlashWeave-F or FlashWeaveHE-F\nmax_k - maximum size of conditioning sets, high values can strongly increase runtime. max_k=0 results in no conditioning (univariate mode)\nalpha - threshold used to determine statistical significance\nconv - convergence threshold, i.e. if conv=0.01 assume convergence if the number of edges increased by only 1% after 100% more runtime (checked in intervals)\nfeed_forward - enable feed-forward heuristic\nmax_tests - maximum number of conditional tests that should be performed on a variable pair before association is assumed\nhps - reliability criterion for statistical tests when sensitive=false\nFDR - perform False Discovery Rate correction (Benjamini-Hochberg method) on pairwise associations\nn_obs_min - don\'t compute associations between variables having less reliable samples (i.e. non-zero if heterogeneous=true) than this number. -1: automatically choose a threshold.\ntime_limit - if feed-forward heuristic is active, determines the interval (seconds) at which neighborhood information is updated\n\nGeneral parameters:\n\nnormalize - automatically choose and perform data normalization (based on sensitive and heterogeneous)\ntrack_rejections - store for each discarded edge, which variable set lead to its exclusion (can be memory intense for large networks)\nverbose - print progress information\ntransposed - if true, rows of data are variables and columns are samples\nprec - precision in bits to use for calculations (16, 32, 64 or 128)\nmake_sparse - use a sparse data representation (should be left at true in almost all cases)\nupdate_interval - if verbose=true, determines the interval (seconds) at which network stat updates are printed\n\n\n\n\n\n"
},

{
    "location": "#FlashWeave.load_data",
    "page": "Home",
    "title": "FlashWeave.load_data",
    "category": "function",
    "text": "load_data(data_path::AbstractString, meta_path::AbstractString) -> (AbstractMatrix{<:Real}, Vector{String}, AbstractMatrix{<:Real}, Vector{String})\n\nLoad tables with OTU count and optionally meta data from disc. Available formats are \'.tsv\', \'.csv\', \'.biom\' and \'.jld2\'.\n\ndata_path - path to a file storing an OTU count table\nmeta_data_path - optional path to a file with meta variable information\n*_key - HDF5 keys to access data sets with OTU counts, Meta variables and variable names in a JLD2 file, if a data item is absent the corresponding key should be \'nothing\'\ntransposed - if true, rows of data are variables and columns are samples\n\n\n\n\n\n"
},

{
    "location": "#FlashWeave.load_network-Tuple{AbstractString}",
    "page": "Home",
    "title": "FlashWeave.load_network",
    "category": "method",
    "text": "load_network(net_path::AbstractString) -> FWResult{Int}\n\nLoad network results from disk. Available formats are \'.tsv\', \'.csv\', \'.gml\' and \'.jld2\'. For GML, only files with structure identical to save_network(\'network.gml\') output can currently be loaded. Run parameters are only available when loading from JLD2.\n\nnet_path - path from which to load the network results\n\n\n\n\n\n"
},

{
    "location": "#FlashWeave.normalize_data-Union{Tuple{AbstractArray{ElType,2}}, Tuple{ElType}} where ElType<:Real",
    "page": "Home",
    "title": "FlashWeave.normalize_data",
    "category": "method",
    "text": "normalize_data(data::AbstractMatrix{<:Real}) -> AbstractMatrix OR (AbstractMatrix{<:Real}, Vector{String})\n\nNormalize data using various forms of clr transform and discretization. This should only be used manually when experimenting with different normalization techniques.\n\ndata - data table with information on OTU counts and (optionally) meta variables\nheader - names of variable-column s in data\nmeta_mask - true/false mask indicating which variables are meta variables\ntest_name - name of a FlashWeave-specific statistical test mode, the appropriate normalization method will be chosen automatically\nnorm_mode - identifier of a valid normalization mode (\'clr-adapt\', \'clr-nonzero\', \'clr-nonzero-binned\', \'pres-abs\', \'tss\', \'tss-nonzero-binned\')\nfilter_data - whether to remove samples and variables without information from data\nverbose - print progress information\nprec - precision in bits to use for calculations (16, 32, 64 or 128)\n\n\n\n\n\n"
},

{
    "location": "#FlashWeave.save_network-Tuple{AbstractString,FlashWeave.FWResult}",
    "page": "Home",
    "title": "FlashWeave.save_network",
    "category": "method",
    "text": "save_network(net_path::AbstractString, net_result::FWResult) -> Void\n\nSave network results to disk. Available formats are \'.tsv\', \'.csv\', \'.gml\' and \'.jld2\'.\n\nnet_path - output path for the network\nnet_result - network results object that should be saved\ndetailed - output additional information, such as discarding sets, if available\n\n\n\n\n\n"
},

{
    "location": "#FlashWeave.StackChannel",
    "page": "Home",
    "title": "FlashWeave.StackChannel",
    "category": "type",
    "text": "StackChannel{T}(sz::Int)\n\nConstructs a Channel with an internal buffer that can hold a maximum of sz objects of type T. put! calls on a full StackChannel block until an object is removed with take!. Other constructors:\n\nChannel(Inf): equivalent to Channel{Any}(typemax(Int))\nChannel(sz): equivalent to Channel{Any}(sz)\n\n\n\n\n\n"
},

{
    "location": "#FlashWeave.StackChannel-Tuple{Function}",
    "page": "Home",
    "title": "FlashWeave.StackChannel",
    "category": "method",
    "text": "StackChannel(func::Function; ctype=Any, csize=0, taskref=nothing)\n\nCreate a new task from func, bind it to a new StackChannel of type ctype and size csize, and schedule the task, all in a single call. func must accept the bound StackChannel as its only argument. If you need a reference to the created task, pass a Ref{Task} object via keyword argument taskref. Return a Channel.\n\nExamples\n\njulia> chnl = StackChannel(c->foreach(i->put!(c,i), 1:4));\njulia> typeof(chnl)\nChannel{Any}\njulia> for i in chnl\n           @show i\n       end;\ni = 1\ni = 2\ni = 3\ni = 4\n\nReferencing the created task:\n\njulia> taskref = Ref{Task}();\njulia> chnl = StackChannel(c->(@show take!(c)); taskref=taskref);\njulia> istaskdone(taskref[])\nfalse\njulia> put!(chnl, \"Hello\");\ntake!(c) = \"Hello\"\njulia> istaskdone(taskref[])\ntrue\n\n\n\n\n\n"
},

{
    "location": "#Base.close-Tuple{FlashWeave.StackChannel}",
    "page": "Home",
    "title": "Base.close",
    "category": "method",
    "text": "close(c::StackChannel)\n\nClose a StackChannel. An exception is thrown by:\n\nput! on a closed StackChannel.\ntake! and fetch on an empty, closed StackChannel.\n\n\n\n\n\n"
},

{
    "location": "#Base.fetch-Tuple{FlashWeave.StackChannel}",
    "page": "Home",
    "title": "Base.fetch",
    "category": "method",
    "text": "fetch(c::StackChannel)\n\nWait for and get the first available item from the StackChannel. Does not remove the item.\n\n\n\n\n\n"
},

{
    "location": "#Base.names-Union{Tuple{FWResult{T}}, Tuple{T}} where T<:Integer",
    "page": "Home",
    "title": "Base.names",
    "category": "method",
    "text": "variable_ids(result::FWResult{T}) -> Vector{T}\n\nExtract the IDs/names of all variables (nodes) in the network.\n\n\n\n\n\n"
},

{
    "location": "#Base.put!-Tuple{FlashWeave.StackChannel,Any}",
    "page": "Home",
    "title": "Base.put!",
    "category": "method",
    "text": "put!(c::StackChannel, v)\n\nAppend an item v to the StackChannel c. Blocks if the StackChannel is full.\n\n\n\n\n\n"
},

{
    "location": "#Base.take!-Tuple{FlashWeave.StackChannel}",
    "page": "Home",
    "title": "Base.take!",
    "category": "method",
    "text": "take!(c::StackChannel)\n\nRemove and return a value from a Channel. Blocks until data is available.\n\n\n\n\n\n"
},

{
    "location": "#FlashWeave.benjamini_hochberg!-Union{Tuple{AbstractArray{T,1}}, Tuple{T}} where T<:AbstractFloat",
    "page": "Home",
    "title": "FlashWeave.benjamini_hochberg!",
    "category": "method",
    "text": "Accelerated version of that found in MultipleTesting.jl\n\n\n\n\n\n"
},

{
    "location": "#FlashWeave.bind-Tuple{FlashWeave.StackChannel,Task}",
    "page": "Home",
    "title": "FlashWeave.bind",
    "category": "method",
    "text": "bind(chnl::StackChannel, task::Task)\n\nAssociate the lifetime of chnl with a task. Channel chnl is automatically closed when the task terminates. Any uncaught exception in the task is propagated to all waiters on chnl. The chnl object can be explicitly closed independent of task termination. Terminating tasks have no effect on already closed Channel objects. When a StackChannel is bound to multiple tasks, the first task to terminate will close the StackChannel. When multiple StackChannels are bound to the same task, termination of the task will close all of the bound StackChannels.\n\nExamples\n\njulia> c = StackChannel(0);\njulia> task = @async foreach(i->put!(c, i), 1:4);\njulia> bind(c,task);\njulia> for i in c\n           @show i\n       end;\ni = 1\ni = 2\ni = 3\ni = 4\njulia> isopen(c)\nfalse\n\njulia> c = StackChannel(0);\njulia> task = @async (put!(c,1);error(\"foo\"));\njulia> bind(c,task);\njulia> take!(c)\n1\njulia> put!(c,1);\nERROR: foo\nStacktrace:\n[...]\n\n\n\n\n\n"
},

{
    "location": "#FlashWeave.channeled_tasks-Tuple{Int64,Vararg{Any,N} where N}",
    "page": "Home",
    "title": "FlashWeave.channeled_tasks",
    "category": "method",
    "text": "channeled_tasks(n::Int, funcs...; ctypes=fill(Any,n), csizes=fill(0,n))\n\nA convenience method to create n StackChannels and bind them to tasks started from the provided functions in a single call. Each func must accept n arguments which are the created StackChannels. StackChannel types and sizes may be specified via keyword arguments ctypes and csizes respectively. If unspecified, all StackChannels are of type Channel{Any}(0). Returns a tuple, (Array{StackChannel}, Array{Task}), of the created StackChannels and tasks.\n\n\n\n\n\n"
},

{
    "location": "#FlashWeave.isready-Tuple{FlashWeave.StackChannel}",
    "page": "Home",
    "title": "FlashWeave.isready",
    "category": "method",
    "text": "isready(c::StackChannel)\n\nDetermine whether a Channel has a value stored to it. Returns immediately, does not block.\n\n\n\n\n\n"
},

{
    "location": "#FlashWeave.mutual_information-Tuple{AbstractArray{#s1119,2} where #s1119<:Integer,Integer,Integer,AbstractArray{#s1118,1} where #s1118<:Integer,AbstractArray{#s1117,1} where #s1117<:Integer}",
    "page": "Home",
    "title": "FlashWeave.mutual_information",
    "category": "method",
    "text": "IMPORTANT NOTE: returns mutual information * number of observations! (avoids repeated calculation later)\n\n\n\n\n\n"
},

{
    "location": "#FlashWeave.parameters-Union{Tuple{FWResult{T}}, Tuple{T}} where T<:Integer",
    "page": "Home",
    "title": "FlashWeave.parameters",
    "category": "method",
    "text": "parameters(result::FWResult{T}) -> Dict{Symbol, Any}\n\nExtract the used parameters from network results.\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [FlashWeave]\nOrder = [:type, :function]"
},

]}
