var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#CacheServers-1",
    "page": "Home",
    "title": "CacheServers",
    "category": "section",
    "text": ""
},

{
    "location": "man/#",
    "page": "Manual",
    "title": "Manual",
    "category": "page",
    "text": ""
},

{
    "location": "man/#CacheServers.AbstractCacheServer",
    "page": "Manual",
    "title": "CacheServers.AbstractCacheServer",
    "category": "type",
    "text": "AbstractCacheServer{K, ELT}\n\n\n\n\n\n"
},

{
    "location": "man/#CacheServers.alloc!-Tuple{AbstractCacheServer,Any,Any}",
    "page": "Manual",
    "title": "CacheServers.alloc!",
    "category": "method",
    "text": "alloc!(server, object, storage) -> server\n\nalloc new storage on the server.\n\n\n\n\n\n"
},

{
    "location": "man/#CacheServers.iscacheable-Tuple{AbstractCacheServer,Any}",
    "page": "Manual",
    "title": "CacheServers.iscacheable",
    "category": "method",
    "text": "iscacheable(server, object)\n\ncheck if there is available space to storage this object\'s value. (if this object was allocated on the server before.).\n\n\n\n\n\n"
},

{
    "location": "man/#CacheServers.iscached-Tuple{AbstractCacheServer,Any,Vararg{Any,N} where N}",
    "page": "Manual",
    "title": "CacheServers.iscached",
    "category": "method",
    "text": "iscached(server, object, [params...])\n\ncheck if this object (with params) is already cached.\n\n\n\n\n\n"
},

{
    "location": "man/#CacheServers.pull-Tuple{AbstractCacheServer,Any,Vararg{Any,N} where N}",
    "page": "Manual",
    "title": "CacheServers.pull",
    "category": "method",
    "text": "pull(server, object, params...) -> value\n\npull object storage from server.\n\n\n\n\n\n"
},

{
    "location": "man/#CacheServers.update!-Tuple{Any,Any}",
    "page": "Manual",
    "title": "CacheServers.update!",
    "category": "method",
    "text": "update!(storage, val) -> storage\n\n\n\n\n\n"
},

{
    "location": "man/#Base.delete!-Tuple{AbstractCacheServer,Any}",
    "page": "Manual",
    "title": "Base.delete!",
    "category": "method",
    "text": "delete!(server, object) -> server\n\ndelete this object from the server. (the storage will be deleted)\n\n\n\n\n\n"
},

{
    "location": "man/#Base.push!-Tuple{AbstractCacheServer,Any,Any}",
    "page": "Manual",
    "title": "Base.push!",
    "category": "method",
    "text": "push!(server, val, object) -> server\n\npush val to the storage of object in the server.\n\n\n\n\n\n"
},

{
    "location": "man/#Distributed.clear!-Tuple{AbstractCacheServer,Any}",
    "page": "Manual",
    "title": "Distributed.clear!",
    "category": "method",
    "text": "clear!(server, object) -> server\n\nclear the storage in the server of this object.\n\n\n\n\n\n"
},

{
    "location": "man/#Cache-System-1",
    "page": "Manual",
    "title": "Cache System",
    "category": "section",
    "text": "Modules = [CacheServers]\nOrder   = [:module, :constant, :type, :macro, :function]"
},

]}
