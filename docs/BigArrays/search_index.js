var documenterSearchIndex = {"docs": [

{
    "location": "#BigArrays.BigArray",
    "page": "Home",
    "title": "BigArrays.BigArray",
    "category": "type",
    "text": "BigArray\n\ncurrently, assume that the array dimension (x,y,z,...) is >= 3 all the manipulation effects in the x,y,z dimension\n\n\n\n\n\n"
},

{
    "location": "#BigArrays.BigArray-Tuple{AbstractString}",
    "page": "Home",
    "title": "BigArrays.BigArray",
    "category": "method",
    "text": "BigArray(layerPath::AbstractString; fillMissing=true, mod::Symbol=DEFAULT_MODE)\n\n\n\n\n\n"
},

{
    "location": "#BigArrays.BigArray-Tuple{BigArrays.BackendBase.AbstractBigArrayBackend,BigArrays.Infos.Info}",
    "page": "Home",
    "title": "BigArrays.BigArray",
    "category": "method",
    "text": "BigArray( d::AbstractBigArrayBackend, info::Info;\n              mip::Int = 0,\n              fillMissing::Bool=DEFAULT_FILL_MISSING,\n              mode::Symbol=DEFAULT_MODE)\n\nParameters:     d: the bigarray storage backend      info: the info containing the metadata     mip: mip level. 0 is the highest resolution.              the mip level is like a image pyramid with difference downsampled levels.     fillMissing: whether fill the missing blocks in the storage backend with zeros or not.      mode: the io mode with options in {multithreading, sequential, multiprocesses, sharedarray}\n\n\n\n\n\n"
},

{
    "location": "#BigArrays.BigArray-Tuple{BigArrays.Infos.Info}",
    "page": "Home",
    "title": "BigArrays.BigArray",
    "category": "method",
    "text": "BigArray(info::Info; fillMissing::Bool=DEFAULT_FILL_MISSING, mode=DEFAULT_MODE)\n\ncreate a new directory with random name.  this function was designed for test and benchmark. we need another function the clear the whole array \n\n\n\n\n\n"
},

{
    "location": "#Base.getindex-Union{Tuple{C}, Tuple{N}, Tuple{T}, Tuple{D}, Tuple{BigArray{D,T,N,C},Vararg{Union{Int64, UnitRange},N} where N}} where C where N where T where D",
    "page": "Home",
    "title": "Base.getindex",
    "category": "method",
    "text": "Base.getindex( ba::BigArray{D, T, N, C}, idxes::Union{UnitRange, Int}...) where {D,T,N,C}\n\nget index with different modes: sharedarray, multi_processes, multithreads, sequential \n\n\n\n\n\n"
},

{
    "location": "#Base.setindex!-Union{Tuple{C}, Tuple{N}, Tuple{T}, Tuple{D}, Tuple{BigArray{D,T,N,C},Array{T,N},Vararg{Union{Colon, Int64, UnitRange},N} where N}} where C where N where T where D",
    "page": "Home",
    "title": "Base.setindex!",
    "category": "method",
    "text": "Base.setindex!( ba::BigArray{D,T,N,C}, buf::Array{T,N},\n\nsetindex with different mode: sharedarray, multithreads, multiprocesses, sequential \n\n\n\n\n\n"
},

{
    "location": "#BigArrays.adjust_volume_boundary-Tuple{BigArray,CartesianIndices,CartesianIndices,CartesianIndices,CartesianIndices}",
    "page": "Home",
    "title": "BigArrays.adjust_volume_boundary",
    "category": "method",
    "text": "adjust the global and buffer range according to total volume size. shrink the range stop if the ranges passes the volume boundary.\n\n\n\n\n\n"
},

{
    "location": "#BigArrays.get_num_chunks-Tuple{BigArray,Vararg{Union{Int64, UnitRange},N} where N}",
    "page": "Home",
    "title": "BigArrays.get_num_chunks",
    "category": "method",
    "text": "get_num_chunks(ba::BigArray, idxes::Union{UnitRange,Int}...)\n\nget number of chunks needed to do cutout from this range \n\n\n\n\n\n"
},

{
    "location": "#BigArrays.getindex_sequential-Union{Tuple{C}, Tuple{N}, Tuple{T}, Tuple{D}, Tuple{BigArray{D,T,N,C},Vararg{Union{Int64, UnitRange},N} where N}} where C where N where T where D",
    "page": "Home",
    "title": "BigArrays.getindex_sequential",
    "category": "method",
    "text": "get_index_sequential(ba::BigArray, idxes::Union{UnitRange, Int}...)\n\nsequential implementation for debuging \n\n\n\n\n\n"
},

{
    "location": "#BigArrays.list_missing_chunks-Tuple{BigArray,Vararg{Union{Int64, UnitRange},N} where N}",
    "page": "Home",
    "title": "BigArrays.list_missing_chunks",
    "category": "method",
    "text": "list_missing_chunks(ba::BigArray, idxes::Union{UnitRange, Int}...)\n\nlist the non-existing keys in the index range if the returned list is empty, then all the chunks exist in the storage backend.\n\n\n\n\n\n"
},

{
    "location": "#BigArrays.setindex_multiprocesses!-Union{Tuple{C}, Tuple{N}, Tuple{T}, Tuple{D}, Tuple{BigArray{D,T,N,C},Array{T,N},Vararg{Union{Colon, Int64, UnitRange},N} where N}} where C where N where T where D",
    "page": "Home",
    "title": "BigArrays.setindex_multiprocesses!",
    "category": "method",
    "text": "put array in RAM to a BigArray\n\nthis version uses channel to control the number of asynchronized request\n\n\n\n\n\n"
},

{
    "location": "#BigArrays.setindex_multithreads!-Union{Tuple{C}, Tuple{N}, Tuple{T}, Tuple{D}, Tuple{BigArray{D,T,N,C},Array{T,N},Vararg{Union{Colon, Int64, UnitRange},N} where N}} where C where N where T where D",
    "page": "Home",
    "title": "BigArrays.setindex_multithreads!",
    "category": "method",
    "text": "put array in RAM to a BigArray backend\n\nthis version uses channel to control the number of asynchronized request\n\n\n\n\n\n"
},

{
    "location": "#BigArrays.setindex_sequential!-Union{Tuple{C}, Tuple{N}, Tuple{T}, Tuple{D}, Tuple{BigArray{D,T,N,C},Array{T,N},Vararg{Union{Colon, Int64, UnitRange},N} where N}} where C where N where T where D",
    "page": "Home",
    "title": "BigArrays.setindex_sequential!",
    "category": "method",
    "text": "sequential function, good for debuging\n\n\n\n\n\n"
},

{
    "location": "#BigArrays.setindex_sharedarray!-Union{Tuple{C}, Tuple{N}, Tuple{T}, Tuple{D}, Tuple{BigArray{D,T,N,C},Array{T,N},Vararg{Union{Colon, Int64, UnitRange},N} where N}} where C where N where T where D",
    "page": "Home",
    "title": "BigArrays.setindex_sharedarray!",
    "category": "method",
    "text": "put array in RAM to a BigArray\n\nthis version uses channel to control the number of asynchronized request\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [BigArrays]\nOrder = [:type, :function]"
},

]}
