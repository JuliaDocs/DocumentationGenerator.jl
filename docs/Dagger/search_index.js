var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Dagger-1",
    "page": "Readme",
    "title": "Dagger",
    "category": "section",
    "text": "A framework for out-of-core and parallel computing.(Image: Build Status) (Image: Coverage Status)At the core of Dagger.jl is a scheduler heavily inspired by Dask. It can run computations represented as directed-acyclic-graphs (DAGs) efficiently on many Julia worker processes."
},

{
    "location": "#DAG-creation-interface-1",
    "page": "Readme",
    "title": "DAG creation interface",
    "category": "section",
    "text": "Here is an example DAG:using Dagger\n\np = delayed(f; options...)(42)\nq = delayed(g)(p)\nr = delayed(h)(53)\ns = delayed(combine)(p, q, r)The connections between nodes p, q, r and s is represented by this dependency graph:(Image: graph)delayed(f; options...)Returns a function which when called creates a Thunk object representing a call to function f with the given arguments. If it is called with other thunks as input, then they form a graph with input nodes directed at the output. The function f get the result of evaluating the input thunks.To compute and fetch the result of a thunk (say s), you can call collect(s). collect will fetch the result of the computation to the master process. Alternatively, if you want to compute but not fetch the result you can call compute on the thunk. This will return a Chunk object which references the result. If you pass in a Chunk objects as an input to a delayed function, then the function will get executed with the value of the Chunk – this evaluation will likely happen where the input chunks are, to reduce communication.Options to delayed are:get_result::Bool – return the actual result to the scheduler instead of Chunk objects. Used when f explicitly constructs a Chunk or when return value is small (e.g. in case of reduce)\nmeta::Bool – pass the input “Chunk” objects themselves to f and not the value contained in them - this is always run on the master process\npersist::Bool – the result of this Thunk should not be released after it becomes unused in the DAG\ncache::Bool – cache the result of this Thunk such that if the thunk is evaluated again, one can just reuse the cached value. If it’s been removed from cache, recompute the value."
},

{
    "location": "#Rough-high-level-description-of-scheduling-1",
    "page": "Readme",
    "title": "Rough high level description of scheduling",
    "category": "section",
    "text": "First picks the leaf Thunks and distributes them to available workers. Each worker is given at most 1 task at a time. If input to the node is a Chunk, then workers which already have the chunk are preferred.\nWhen a worker finishes a thunk it will return a Chunk object to the scheduler.\nOnce the worker has returned a Chunk, scheduler picks the next task for the worker – this is usually the task the worker immediately made available (if possible). In the small example above, if worker 2 finished p it will be given q since it will already have the result of p which is input to q.\nThe scheduler also issues \"release\" Commands to chunks that are no longer required by nodes in the DAG: for example, when s is computed all of p, q, r are released to free up memory. This can be prevented by passing persist or cache options to delayed."
},

{
    "location": "#Acknowledgements-1",
    "page": "Readme",
    "title": "Acknowledgements",
    "category": "section",
    "text": "We thank DARPA, Intel, and the NIH for supporting this work at MIT."
},

{
    "location": "autodocs/#Dagger.Context",
    "page": "Docstrings",
    "title": "Dagger.Context",
    "category": "type",
    "text": "A context represents a set of processors to use for a papply operation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Dagger.OSProc",
    "page": "Docstrings",
    "title": "Dagger.OSProc",
    "category": "type",
    "text": "OS process - contains pid returned by addprocs\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Dagger.UnitDomain",
    "page": "Docstrings",
    "title": "Dagger.UnitDomain",
    "category": "type",
    "text": "Default domain – has no information about the value\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Dagger.alignfirst-Tuple{ArrayDomain}",
    "page": "Docstrings",
    "title": "Dagger.alignfirst",
    "category": "method",
    "text": "alignfirst(a)\n\nMake a subdomain a standalone domain. For example,\n\nalignfirst(ArrayDomain(11:25, 21:100))\n# => ArrayDomain((1:15), (1:80))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Dagger.cached_stage-Tuple{Any,Any}",
    "page": "Docstrings",
    "title": "Dagger.cached_stage",
    "category": "method",
    "text": "A memoized version of stage. It is important that the tasks generated for the same DArray have the same identity, for example:\n\nA = rand(Blocks(100,100), Float64, 1000, 1000)\ncompute(A+A\')\n\nmust not result in computation of A twice.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Dagger.compute-Tuple{Any,Dagger.DArray}",
    "page": "Docstrings",
    "title": "Dagger.compute",
    "category": "method",
    "text": "A DArray object may contain a thunk in it, in which case we first turn it into a Thunk object and then compute it.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Dagger.compute-Tuple{Any,Thunk}",
    "page": "Docstrings",
    "title": "Dagger.compute",
    "category": "method",
    "text": "Compute a Thunk - creates the DAG, assigns ranks to nodes for tie breaking and runs the scheduler.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Dagger.domain",
    "page": "Docstrings",
    "title": "Dagger.domain",
    "category": "function",
    "text": "domain(x::T)\n\nReturns metadata about x. This metadata will be in the domain field of a Chunk object when an object of type T is created as the result of evaluating a Thunk.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Dagger.domain-Tuple{AbstractArray}",
    "page": "Docstrings",
    "title": "Dagger.domain",
    "category": "method",
    "text": "The domain of an array is a ArrayDomain\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Dagger.domain-Tuple{Any}",
    "page": "Docstrings",
    "title": "Dagger.domain",
    "category": "method",
    "text": "If no domain method is defined on an object, then we use the UnitDomain on it. A UnitDomain is indivisible.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Dagger.load-Tuple{Any,AbstractString}",
    "page": "Docstrings",
    "title": "Dagger.load",
    "category": "method",
    "text": "load(ctx, file_path)\n\nLoad an Union{Chunk, Thunk} from a file.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Dagger.load-Tuple{Any,Type{Dagger.Chunk},Any,Any,Any}",
    "page": "Docstrings",
    "title": "Dagger.load",
    "category": "method",
    "text": "load(ctx, ::Type{Chunk}, fpath, io)\n\nLoad a Chunk object from a file, the file path is required for creating a FileReader object\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Dagger.save-Tuple{Any,IO,Any}",
    "page": "Docstrings",
    "title": "Dagger.save",
    "category": "method",
    "text": "save(io::IO, val)\n\nSave a value into the IO buffer. In the case of arrays and sparse matrices, this will save it in a memory-mappable way.\n\nload(io::IO, t::Type, domain) will load the object given its domain\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Dagger.save-Tuple{Any,Union{Thunk, Chunk},AbstractString}",
    "page": "Docstrings",
    "title": "Dagger.save",
    "category": "method",
    "text": "save(ctx, chunk::Union{Chunk, Thunk}, file_path::AbsractString)\n\nSave a chunk to a file at file_path.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Dagger.save-Union{Tuple{X}, Tuple{Any,Chunk{X,DRef},AbstractString}} where X",
    "page": "Docstrings",
    "title": "Dagger.save",
    "category": "method",
    "text": "special case distmem writing - write to disk on the process with the chunk.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Dagger.Chunk",
    "page": "Docstrings",
    "title": "Dagger.Chunk",
    "category": "type",
    "text": "A chunk with some data\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Dagger.DArray",
    "page": "Docstrings",
    "title": "Dagger.DArray",
    "category": "type",
    "text": "DArray{T,N,F}(domain, subdomains, chunks, concat)\n\nAn N-dimensional distributed array of element type T.\n\ndomain: the whole ArrayDomain of the array\nsubdomains: a DomainBlocks of the same dimensions as the array\nchunks: an array of chunks of dimension N\nconcat: a function of type F. concat(x, y; dims=d) takes two chunks x and y           and concatenates them along dimension d. cat is used by default.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Dagger.DArray-Union{Tuple{N}, Tuple{Any,ArrayDomain{N},AbstractArray{ArrayDomain{N},N},AbstractArray{#s35,N} where #s35}, Tuple{Any,ArrayDomain{N},AbstractArray{ArrayDomain{N},N},AbstractArray{#s34,N} where #s34,Any}} where N",
    "page": "Docstrings",
    "title": "Dagger.DArray",
    "category": "method",
    "text": "DArray(T, domain, subdomains, chunks, [concat=cat])\n\nCreates a distributed array of element type T.\n\nT: element type\n\nrest of the arguments are the same as the DArray constructor.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Dagger.LocalEventLog",
    "page": "Docstrings",
    "title": "Dagger.LocalEventLog",
    "category": "type",
    "text": "represents a process local events array.\n\nA context with log_sink set to LocalEventLog() will cause events to be recorded into the \n\n\n\n\n\n"
},

{
    "location": "autodocs/#Dagger.NoOpLog",
    "page": "Docstrings",
    "title": "Dagger.NoOpLog",
    "category": "type",
    "text": "Various means of writing an event to something.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Dagger.PromotePartition",
    "page": "Docstrings",
    "title": "Dagger.PromotePartition",
    "category": "type",
    "text": "This is a way of suggesting that stage should call stage_operand with the operation and other arguments\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Dagger.State",
    "page": "Docstrings",
    "title": "Dagger.State",
    "category": "type",
    "text": "Overall state used during visualization\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Dagger.Timespan",
    "page": "Docstrings",
    "title": "Dagger.Timespan",
    "category": "type",
    "text": "identifies\n\nspace (category, id) time (timeline, start, finish)\n\nalso tracks gc_num during this and profiling samples.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.view-Tuple{Dagger.DArray,Any}",
    "page": "Docstrings",
    "title": "Base.view",
    "category": "method",
    "text": "view of a DArray chunk returns a DArray of thunks\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Dagger.add_span-NTuple{4,Any}",
    "page": "Docstrings",
    "title": "Dagger.add_span",
    "category": "method",
    "text": "Add a Timespan to a given State under tl (timeline) and category.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Dagger.dependents",
    "page": "Docstrings",
    "title": "Dagger.dependents",
    "category": "function",
    "text": "find the set of direct dependents for each task\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Dagger.dsort_chunks",
    "page": "Docstrings",
    "title": "Dagger.dsort_chunks",
    "category": "function",
    "text": "dsort_chunks(cs, [nchunks, nsamples]; options...)\n\nSort contents of chunks (cs) and return a new set of chunks such that the chunks when concatenated return a sorted collection. Each chunk in turn is sorted.\n\nArgs:\n\nnchunks – the number of chunks to produce, regardless of how many chunks were given as input\nnsamples – the number of elements to sample from each chunk to guess the splitters (nchunks-1 splitters) each chunk will be delimited by the splitter.\nmerge – a function to merge two sorted collections.\nsub – a function to get a subset of the collection takes (collection, range) (defaults to getindex)\norder – Base.Sort.Ordering to be used for sorting\nbatchsize – number of chunks to split and merge at a time (e.g. if there are 128 input chunks and 128 output chunks, and batchsize is 8, then we first sort among batches of 8 chunks – giving 16 batches. Then we sort among the first chunk of the first 8 batches (all elements less than the first splitter), then go on to the first 8 chunks of the second 8 batches, and so on...\nchunks_presorted – is each chunk in the input already sorted?\nsortandsample – a function to sort a chunk, then sample N elements to infer the splitters. It takes 3 arguments: (collection, N, presorted). presorted is a boolean which is true if the chunk is already sorted.\n\nReturns a tuple of (chunk, samples) where chunk is the Dagger.Chunk object. chunk can be nothing if no change to the initial array was made (e.g. it was already sorted)\n\naffinities – a list of processes where the output chunks should go. If the length is not equal to nchunks then affinities array is cycled through.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Dagger.get_logs!-Tuple{Dagger.LocalEventLog}",
    "page": "Docstrings",
    "title": "Dagger.get_logs!",
    "category": "method",
    "text": "Get the logs from each process, clear it too\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Dagger.make_timespan-Tuple{Dagger.Event,Dagger.Event}",
    "page": "Docstrings",
    "title": "Dagger.make_timespan",
    "category": "method",
    "text": "create a timespan given the strt and finish events\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Dagger.next_state-Tuple{Dagger.State,Dagger.Event{:start}}",
    "page": "Docstrings",
    "title": "Dagger.next_state",
    "category": "method",
    "text": "When building state for real-time visualization, use next_state to progress gantt state.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Dagger.noffspring-Tuple{Dict}",
    "page": "Docstrings",
    "title": "Dagger.noffspring",
    "category": "method",
    "text": "recursively find the number of taks dependent on each task in the DAG. Input: dependents dict\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Dagger.order-Tuple{Thunk,Any}",
    "page": "Docstrings",
    "title": "Dagger.order",
    "category": "method",
    "text": "Given a root node of the DAG, calculates a total order for tie-braking\n\nRoot node gets score 1,\nrest of the nodes are explored in DFS fashion but chunks of each node are explored in order of noffspring, i.e. total number of tasks depending on the result of the said node.\n\nArgs:     - node: root node     - ndeps: result of noffspring\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Dagger.recursive_splitters-NTuple{4,Any}",
    "page": "Docstrings",
    "title": "Dagger.recursive_splitters",
    "category": "method",
    "text": "split the splitters themselves into batches.\n\nArgs:\n\nord – Sorting.Ordering object\nsplitters – the nchunks-1 splitters\nbatchsize – batch size\n\nReturns: A Tuple{Vector, Vector{Vector}} – the coarse splitters which create batchsize splits, finer splitters within those batches which create a total of nchunks splits.\n\njulia> Dagger.recursive_splitters(Dagger.default_ord,\n            [10,20,30,40,50,60], 5,3)\n([30], Any[[10, 20], [40, 50, 60]])\n\nThe first value [30] represents a coarse split that cuts the dataset from -Inf-30, and 30-Inf. Each part is further recursively split using the next set of splitters\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Dagger.split_range-Union{Tuple{T}, Tuple{AbstractRange{T},Any}} where T",
    "page": "Docstrings",
    "title": "Dagger.split_range",
    "category": "method",
    "text": "Utility function to divide the range range into n chunks\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Dagger.split_range_interval-Tuple{Any,Any}",
    "page": "Docstrings",
    "title": "Dagger.split_range_interval",
    "category": "method",
    "text": "split_range_interval(range, n)\n\nsplit a range into pieces each of length n or lesser\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Dagger.stage_operands-Union{Tuple{T}, Tuple{Any,MatMul,ArrayOp,PromotePartition{T,1}}} where T",
    "page": "Docstrings",
    "title": "Dagger.stage_operands",
    "category": "method",
    "text": "an operand which should be distributed as per convenience\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Dagger.thunkize-Tuple{Any,Dagger.DArray}",
    "page": "Docstrings",
    "title": "Dagger.thunkize",
    "category": "method",
    "text": "If a DArray tree has a Thunk in it, make the whole thing a big thunk\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Dagger.tochunk-Tuple{Any}",
    "page": "Docstrings",
    "title": "Dagger.tochunk",
    "category": "method",
    "text": "Create a chunk from a sequential object.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Dagger.treereduce-Tuple{Any,Any}",
    "page": "Docstrings",
    "title": "Dagger.treereduce",
    "category": "method",
    "text": "Tree reduce\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Dagger.write_event-Tuple{Context,Dagger.Event}",
    "page": "Docstrings",
    "title": "Dagger.write_event",
    "category": "method",
    "text": "Write a log event\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Dagger]\nOrder = [:type, :function]"
},

]}
