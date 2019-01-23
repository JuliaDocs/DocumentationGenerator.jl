var documenterSearchIndex = {"docs": [

{
    "location": "#DeferredFutures.DeferredChannel",
    "page": "Home",
    "title": "DeferredFutures.DeferredChannel",
    "category": "type",
    "text": "DeferredChannel(pid::Integer=myid(), num::Integer=1; content::DataType=Any) -> DeferredChannel\n\nCreate a DeferredChannel with a reference to a remote channel of a specific size and type. f() is a function that when executed on pid must return an implementation of an AbstractChannel.\n\nThe default pid is the current process.\n\n\n\n\n\n"
},

{
    "location": "#DeferredFutures.DeferredChannel",
    "page": "Home",
    "title": "DeferredFutures.DeferredChannel",
    "category": "type",
    "text": "DeferredChannel(pid::Integer=myid(), num::Integer=1; content::DataType=Any) -> DeferredChannel\n\nCreate a DeferredChannel. The default pid is the current process. When initialized, the DeferredChannel will reference a Channel{content}(num) on process pid.\n\nNote that the data in the DeferredChannel will still be located wherever the first piece of data was put! from. The pid argument controls where the outermost reference to that data is located.\n\n\n\n\n\n"
},

{
    "location": "#DeferredFutures.DeferredFuture",
    "page": "Home",
    "title": "DeferredFutures.DeferredFuture",
    "category": "type",
    "text": "DeferredFuture(pid::Integer=myid()) -> DeferredFuture\n\nCreate a DeferredFuture on process pid. The default pid is the current process.\n\nNote that the data in the DeferredFuture will still be located wherever it was put! from. The pid argument controlls where the outermost reference to that data is located.\n\n\n\n\n\n"
},

{
    "location": "#DeferredFutures.DeferredRemoteRef",
    "page": "Home",
    "title": "DeferredFutures.DeferredRemoteRef",
    "category": "type",
    "text": "DeferredRemoteRef is the common supertype of DeferredFuture and DeferredChannel and is the counterpart of Distributed.AbstractRemoteRef.\n\n\n\n\n\n"
},

{
    "location": "#DeferredFutures.reset!-Tuple{DeferredRemoteRef}",
    "page": "Home",
    "title": "DeferredFutures.reset!",
    "category": "method",
    "text": "reset!{T<:DeferredRemoteRef}(ref::T) -> T\n\nRemoves any data from the DeferredRemoteRef and allows it to be reinitialized with data.\n\nReturns the input DeferredRemoteRef.\n\n\n\n\n\n"
},

{
    "location": "#Base.close-Tuple{DeferredChannel}",
    "page": "Home",
    "title": "Base.close",
    "category": "method",
    "text": "close(ref::DeferredChannel)\n\nCloses a DeferredChannel. An exception is thrown by:\n\nput! on a closed DeferredChannel\ntake! and fetch on an empty, closed DeferredChannel\n\n\n\n\n\n"
},

{
    "location": "#Base.fetch-Tuple{DeferredRemoteRef}",
    "page": "Home",
    "title": "Base.fetch",
    "category": "method",
    "text": "fetch(ref::DeferredRemoteRef) -> Any\n\nWait for and get the value of a remote reference.\n\n\n\n\n\n"
},

{
    "location": "#Base.isready-Tuple{DeferredRemoteRef}",
    "page": "Home",
    "title": "Base.isready",
    "category": "method",
    "text": "isready(ref::DeferredRemoteRef) -> Bool\n\nDetermine whether a DeferredRemoteRef has a value stored to it. Note that this function can cause race conditions, since by the time you receive its result it may no longer be true.\n\n\n\n\n\n"
},

{
    "location": "#Base.put!-Tuple{DeferredChannel,Any}",
    "page": "Home",
    "title": "Base.put!",
    "category": "method",
    "text": "put!(rr::DeferredChannel, val) -> DeferredChannel\n\nStore a value to the DeferredChannel. If the channel is full, blocks until space is available. Returns its first argument.\n\n\n\n\n\n"
},

{
    "location": "#Base.put!-Tuple{DeferredFuture,Any}",
    "page": "Home",
    "title": "Base.put!",
    "category": "method",
    "text": "put!(ref::DeferredFuture, v) -> DeferredFuture\n\nStore a value to a DeferredFuture. DeferredFutures, like Futures, are write-once remote references. A put! on an already set DeferredFuture throws an Exception. Returns its first argument.\n\n\n\n\n\n"
},

{
    "location": "#Base.show-Tuple{IO,DeferredChannel}",
    "page": "Home",
    "title": "Base.show",
    "category": "method",
    "text": "show(io::IO, ref::DeferredChannel)\n\nPrint a simplified string representation of the DeferredChannel with its RemoteChannel parameters and its function.\n\n\n\n\n\n"
},

{
    "location": "#Base.show-Tuple{IO,DeferredFuture}",
    "page": "Home",
    "title": "Base.show",
    "category": "method",
    "text": "show(io::IO, ref::DeferredFuture)\n\nPrint a simplified string representation of the DeferredFuture with its RemoteChannel parameters.\n\n\n\n\n\n"
},

{
    "location": "#Base.take!-Tuple{DeferredChannel,Vararg{Any,N} where N}",
    "page": "Home",
    "title": "Base.take!",
    "category": "method",
    "text": "take!(ref::DeferredChannel, args...)\n\nFetch value(s) from a DeferredChannel, removing the value(s) in the processs. Note that take! passes through args... to the innermost AbstractChannel and the default Channel accepts no args....\n\n\n\n\n\n"
},

{
    "location": "#Base.wait-Tuple{DeferredRemoteRef}",
    "page": "Home",
    "title": "Base.wait",
    "category": "method",
    "text": "wait(ref::DeferredRemoteRef) -> DeferredRemoteRef\n\nBlock the current task until a value becomes available on the DeferredRemoteRef. Returns its first argument.\n\n\n\n\n\n"
},

{
    "location": "#DeferredFutures.finalize_ref-Tuple{DeferredRemoteRef}",
    "page": "Home",
    "title": "DeferredFutures.finalize_ref",
    "category": "method",
    "text": "finalize_ref(ref::DeferredRemoteRef)\n\nThis finalizer is attached to both DeferredFuture and DeferredChannel on construction and finalizes the inner and outer RemoteChannels.\n\nFor more information on finalizing remote references, see the Julia manual[1].\n\n[1]: Remote References and Distributed Garbage Collection\n\n\n\n\n\n"
},

{
    "location": "#Serialization.serialize-Tuple{AbstractSerializer,DeferredChannel}",
    "page": "Home",
    "title": "Serialization.serialize",
    "category": "method",
    "text": "serialize(s::AbstractSerializer, ref::DeferredChannel)\n\nSerialize a DeferredChannel such that it can de deserialized by deserialize in a cluster.\n\n\n\n\n\n"
},

{
    "location": "#Serialization.serialize-Tuple{AbstractSerializer,DeferredFuture}",
    "page": "Home",
    "title": "Serialization.serialize",
    "category": "method",
    "text": "serialize(s::AbstractSerializer, ref::DeferredFuture)\n\nSerialize a DeferredFuture such that it can de deserialized by deserialize in a cluster.\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [DeferredFutures]\nOrder = [:type, :function]"
},

]}
