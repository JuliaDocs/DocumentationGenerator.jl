var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#BigArrays.jl-1",
    "page": "Readme",
    "title": "BigArrays.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status)Cutout and saving arbitrary chunks in Julia with backends of  local and cloud storages."
},

{
    "location": "#Introduction-1",
    "page": "Readme",
    "title": "Introduction",
    "category": "section",
    "text": ""
},

{
    "location": "#Booming-of-large-scale-3D-image-datasets-1",
    "page": "Readme",
    "title": "Booming of large scale 3D image datasets",
    "category": "section",
    "text": "With the augmentation of sample embedding and physical sectioning, modern electon and light microscopes have expanded field of view in the order of magnitudes with high resolution. As a result, we have seen a booming of large scale 3D image datasets around the world in recent years. In most cases, large scale image data can not fit in computer memory and traditional standalone software is not able to handle these datasets. Managing the datasets, including injecting, cutout and visualization, is challenging and getting more and more urgent. "
},

{
    "location": "#Current-Solutions-1",
    "page": "Readme",
    "title": "Current Solutions",
    "category": "section",
    "text": "Almost all the large image handling solutions use precomputed image pyramids, called mipmaps. Normally, the images were chopped to small blocks with multiple resolution levels. The blocks were normally compressed with a variaty of algorithms, such as gzip and jpeg. The highest resolution blocks were normally called mip level 0. The higher mip levels were normally built using recursive downsampling. Since the data management software were normally designed and optimized for the storage backend, the solutions could be classified according to the storage architecture. For the traditional block storage backend, the blocks could all be saved in one big file and the blocks could be located by disk seek to avoid the filesystem search overhead. However, the internal filesystem increased the software complexity and the dataset size was limited by the largest file size of the filesystem. The blocks could also be realigned based on space filling curves, such as Hilbert Curve, for faster reading of neighboring blocks. However, the size of dataset was limited by the largest file size of the local storage. Although single file could also take adavantage of modern Redundant Array of Independent Disks (RAID) system for parallel high-bandwidth IO. The block IO could normally not taking advantage of the high bandwidth since the block size is normally small. In this case, the latency will become dominant factor of performance. The RAID system have bigger latency and could perform worse than single disk. For example, the commercialized Amira LDA format is based on this approach.For the traditional file system storage, the blocks were managed by the local filesystem. The files could also be shared across machines using network file system, which is normally slower than block storage since it has file search overhead and is normally not distributed across many servers.For the mordern object storage backend, such as Google Cloud Storage and AWS S3, the meta data was separated and managed by dedicated metadata servers and the IO could be distributed across data servers. Object storage normally have web api and is easy to share files. Thus, it is both fast and easy to share with more complex software and higher maintainance cost.  Storage Backend Advantages Disadvantages Example\nBlock Storage fast not easy to share Amira LDA format\nFile System easy to share normally slower TDat\nObject Storage fast and easy to share more expansive Bossdb"
},

{
    "location": "#The-importance-of-large-scale-visualization-1",
    "page": "Readme",
    "title": "The importance of large scale visualization",
    "category": "section",
    "text": "Traditionally, images were visualized with standalone softwares in a single workstation. Although there exist some sophesticated softwares to visualize large scale image datasets, such as Amira-Avizo and TrackEM2, it requires special setup for the users. "
},

{
    "location": "#The-rise-of-Julia-in-data-science-1",
    "page": "Readme",
    "title": "The rise of Julia in data science",
    "category": "section",
    "text": "Data scientists have long been prototyping with dynamically typed language, such as Matlab and python. After the algorithms become stable, they\'ll start to reimplement the algorithm with faster statically typed language for production run. Julia was designed to solve this two-language problem. Data scientists can use Julia interactively with Real-Eval-Print-Loop (REPL) in terminal or Jupyter Notebooks. In the mean time, Julia code could be compiled to native machine code for fast execution thanks for the design of just-in-time compilation with type inference. Julia is getting more and more popular among data scientists since we can explore the data and develop algorithms interactively and also deploy the same code to process large scale of datasets."
},

{
    "location": "#The-design-of-BigArrays.jl-1",
    "page": "Readme",
    "title": "The design of BigArrays.jl",
    "category": "section",
    "text": "BigArrays.jl was designed with a separation of frontend and backend. The front end provide a Julia Array interface with the same indexing syntax. The backend was abstracted as a Key-Value store and all the storage backend only need to provide a key-value indexing interface.The saved format is consistent with neuroglancer for direct visualization and exploration of large scale image volume. BigArrays also support more compression methods for the fine control of speed and compression ratio. "
},

{
    "location": "#Features-1",
    "page": "Readme",
    "title": "Features",
    "category": "section",
    "text": "serverless, clients communicate with storage backends directly. The cutout was performed in the client side. multiple processes to fully use all the CPU cores\narbitrary subset cutout (saving should be chunk size aligned)\nextensible with multiple backends\narbitrary shape, the dataset boundary can be curve-like\narbitrary dataset size (in theory, tested dataset size: ~ 9 TB)\nmultiple chunk compression algorithms\nhighly scalable due to the serverless design\nmultiple data types \nsupport negative coordinate"
},

{
    "location": "#supported-backends-1",
    "page": "Readme",
    "title": "supported backends",
    "category": "section",
    "text": "[x] Local file system\n[x] Google Cloud Storage \n[x] AWS S3 Any other storage backends could be mounted in local filesystem will work. For example, shared file system could be supported by mounting the files as local directory. Most of cloud storage could also be mounted and used via local file system backend. "
},

{
    "location": "#compression-and-decompression-1",
    "page": "Readme",
    "title": "compression and decompression",
    "category": "section",
    "text": "Algorithm compression decompression\ngzip :whitecheckmark: :whitecheckmark:\nzstd :whitecheckmark: :whitecheckmark:\nblosclz :whitecheckmark: :whitecheckmark:\njpeg :x: :whitecheckmark:"
},

{
    "location": "#supported-data-types-1",
    "page": "Readme",
    "title": "supported data types",
    "category": "section",
    "text": "Bool, UInt8, UInt16, UInt32, UInt64, Float32, Float64. easy to add more, please raise an issue if you need more."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Install Julia 1.0 or 0.7, in the REPL, press ] to enter package management mode, then add BigArrays"
},

{
    "location": "#usage-1",
    "page": "Readme",
    "title": "usage",
    "category": "section",
    "text": "BigArrays do not have limit of dataset size, if your reading index is outside of existing file range, will return an array filled with zeros."
},

{
    "location": "#setup-info-file-1",
    "page": "Readme",
    "title": "setup info file",
    "category": "section",
    "text": "the info file is a JSON file, which defines all the configuration of the dataset. It was defined in neuroglancer "
},

{
    "location": "#use-backend-of-local-binary-file-1",
    "page": "Readme",
    "title": "use backend of local binary file",
    "category": "section",
    "text": "using BigArrays\nusing BigArrays.BinDicts\nba = BigArray( BinDict(\"/path/of/dataset\") )then use ba as normal array, the returned cutout result will be an OffsetArray, if you need normal Julia Array, use parent function to get it.  For more examples, check out the tests."
},

{
    "location": "#Development-1",
    "page": "Readme",
    "title": "Development",
    "category": "section",
    "text": "BigArrays is a high-level architecture to transform Key-Value store (backend) to Julia Array (frontend). it provide an interface of AbstractArray, and implement the getindex and setindex functions. "
},

{
    "location": "#Add-new-backend-1",
    "page": "Readme",
    "title": "Add new backend",
    "category": "section",
    "text": "The backends are different key-value stores. To add a new backend, you can simply do the following:wrap the key-value store as a Julia AbstractDict type. BinDicts is an example is a good example. \nimplement the Base.getindex and Base.setindex! functions. BinDicts example\nimplement the get_info function to return a string of info file, which was defined in Neuroglancer."
},

{
    "location": "autodocs/#BigArrays.BigArray",
    "page": "Docstrings",
    "title": "BigArrays.BigArray",
    "category": "type",
    "text": "BigArray\n\ncurrently, assume that the array dimension (x,y,z,...) is >= 3 all the manipulation effects in the x,y,z dimension\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BigArrays.BigArray-Tuple{AbstractString}",
    "page": "Docstrings",
    "title": "BigArrays.BigArray",
    "category": "method",
    "text": "BigArray(layerPath::AbstractString; fillMissing=true, mod::Symbol=DEFAULT_MODE)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BigArrays.BigArray-Tuple{BigArrays.BackendBase.AbstractBigArrayBackend,BigArrays.Infos.Info}",
    "page": "Docstrings",
    "title": "BigArrays.BigArray",
    "category": "method",
    "text": "BigArray( d::AbstractBigArrayBackend, info::Info;\n              mip::Int = 0,\n              fillMissing::Bool=DEFAULT_FILL_MISSING,\n              mode::Symbol=DEFAULT_MODE)\n\nParameters:     d: the bigarray storage backend      info: the info containing the metadata     mip: mip level. 0 is the highest resolution.              the mip level is like a image pyramid with difference downsampled levels.     fillMissing: whether fill the missing blocks in the storage backend with zeros or not.      mode: the io mode with options in {multithreading, sequential, multiprocesses, sharedarray}\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BigArrays.BigArray-Tuple{BigArrays.Infos.Info}",
    "page": "Docstrings",
    "title": "BigArrays.BigArray",
    "category": "method",
    "text": "BigArray(info::Info; fillMissing::Bool=DEFAULT_FILL_MISSING, mode=DEFAULT_MODE)\n\ncreate a new directory with random name.  this function was designed for test and benchmark. we need another function the clear the whole array \n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.getindex-Union{Tuple{C}, Tuple{N}, Tuple{T}, Tuple{D}, Tuple{BigArray{D,T,N,C},Vararg{Union{Int64, UnitRange},N} where N}} where C where N where T where D",
    "page": "Docstrings",
    "title": "Base.getindex",
    "category": "method",
    "text": "Base.getindex( ba::BigArray{D, T, N, C}, idxes::Union{UnitRange, Int}...) where {D,T,N,C}\n\nget index with different modes: sharedarray, multi_processes, multithreads, sequential \n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.setindex!-Union{Tuple{C}, Tuple{N}, Tuple{T}, Tuple{D}, Tuple{BigArray{D,T,N,C},Array{T,N},Vararg{Union{Colon, Int64, UnitRange},N} where N}} where C where N where T where D",
    "page": "Docstrings",
    "title": "Base.setindex!",
    "category": "method",
    "text": "Base.setindex!( ba::BigArray{D,T,N,C}, buf::Array{T,N},\n\nsetindex with different mode: sharedarray, multithreads, multiprocesses, sequential \n\n\n\n\n\n"
},

{
    "location": "autodocs/#BigArrays.adjust_volume_boundary-Tuple{BigArray,CartesianIndices,CartesianIndices,CartesianIndices,CartesianIndices}",
    "page": "Docstrings",
    "title": "BigArrays.adjust_volume_boundary",
    "category": "method",
    "text": "adjust the global and buffer range according to total volume size. shrink the range stop if the ranges passes the volume boundary.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BigArrays.get_num_chunks-Tuple{BigArray,Vararg{Union{Int64, UnitRange},N} where N}",
    "page": "Docstrings",
    "title": "BigArrays.get_num_chunks",
    "category": "method",
    "text": "get_num_chunks(ba::BigArray, idxes::Union{UnitRange,Int}...)\n\nget number of chunks needed to do cutout from this range \n\n\n\n\n\n"
},

{
    "location": "autodocs/#BigArrays.getindex_sequential-Union{Tuple{C}, Tuple{N}, Tuple{T}, Tuple{D}, Tuple{BigArray{D,T,N,C},Vararg{Union{Int64, UnitRange},N} where N}} where C where N where T where D",
    "page": "Docstrings",
    "title": "BigArrays.getindex_sequential",
    "category": "method",
    "text": "get_index_sequential(ba::BigArray, idxes::Union{UnitRange, Int}...)\n\nsequential implementation for debuging \n\n\n\n\n\n"
},

{
    "location": "autodocs/#BigArrays.list_missing_chunks-Tuple{BigArray,Vararg{Union{Int64, UnitRange},N} where N}",
    "page": "Docstrings",
    "title": "BigArrays.list_missing_chunks",
    "category": "method",
    "text": "list_missing_chunks(ba::BigArray, idxes::Union{UnitRange, Int}...)\n\nlist the non-existing keys in the index range if the returned list is empty, then all the chunks exist in the storage backend.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BigArrays.setindex_multiprocesses!-Union{Tuple{C}, Tuple{N}, Tuple{T}, Tuple{D}, Tuple{BigArray{D,T,N,C},Array{T,N},Vararg{Union{Colon, Int64, UnitRange},N} where N}} where C where N where T where D",
    "page": "Docstrings",
    "title": "BigArrays.setindex_multiprocesses!",
    "category": "method",
    "text": "put array in RAM to a BigArray\n\nthis version uses channel to control the number of asynchronized request\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BigArrays.setindex_multithreads!-Union{Tuple{C}, Tuple{N}, Tuple{T}, Tuple{D}, Tuple{BigArray{D,T,N,C},Array{T,N},Vararg{Union{Colon, Int64, UnitRange},N} where N}} where C where N where T where D",
    "page": "Docstrings",
    "title": "BigArrays.setindex_multithreads!",
    "category": "method",
    "text": "put array in RAM to a BigArray backend\n\nthis version uses channel to control the number of asynchronized request\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BigArrays.setindex_sequential!-Union{Tuple{C}, Tuple{N}, Tuple{T}, Tuple{D}, Tuple{BigArray{D,T,N,C},Array{T,N},Vararg{Union{Colon, Int64, UnitRange},N} where N}} where C where N where T where D",
    "page": "Docstrings",
    "title": "BigArrays.setindex_sequential!",
    "category": "method",
    "text": "sequential function, good for debuging\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BigArrays.setindex_sharedarray!-Union{Tuple{C}, Tuple{N}, Tuple{T}, Tuple{D}, Tuple{BigArray{D,T,N,C},Array{T,N},Vararg{Union{Colon, Int64, UnitRange},N} where N}} where C where N where T where D",
    "page": "Docstrings",
    "title": "BigArrays.setindex_sharedarray!",
    "category": "method",
    "text": "put array in RAM to a BigArray\n\nthis version uses channel to control the number of asynchronized request\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [BigArrays]\nOrder = [:type, :function]"
},

]}
