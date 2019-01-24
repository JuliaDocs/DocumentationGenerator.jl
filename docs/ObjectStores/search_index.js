var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ObjectStores-1",
    "page": "Readme",
    "title": "ObjectStores",
    "category": "section",
    "text": "This package defines an abstract type, ObjectStore, and a common API for accessing object storage. This allows you to swap storage back-ends without changing your code.Storage back-ends include in-memory, local disk and cloud-based object storage."
},

{
    "location": "#What-is-an-object-store?-1",
    "page": "Readme",
    "title": "What is an object store?",
    "category": "section",
    "text": "In an object store, data is stored as objects and objects are grouped into buckets.Concrete examples of object stores include:LocalDiskObjectStores.jl, which uses the local file system to store objects (files) in buckets (directories).\nGCSObjectStores.jl, which uses Google Cloud Storage."
},

{
    "location": "#Permissions-1",
    "page": "Readme",
    "title": "Permissions",
    "category": "section",
    "text": "An object store\'s access to buckets and objects is controlled using the small but flexible Authorization.jl framework. This framework allows both fine-grained access control for specific buckets and objects, as well as more coarse access control such as uniform access for all buckets and/or objects. Please read the README to understand how to access buckets and objects can be controlled.NOTE: An ObjectStore cannot act on (create/read/delete) buckets or objects that are outside the root bucket."
},

{
    "location": "#Example-Usage-1",
    "page": "Readme",
    "title": "Example Usage",
    "category": "section",
    "text": "See the examples and tests in LocalDiskObjectStores.jl and GCSObjectStores.jl, which uses the local file system as the storage back-end."
},

{
    "location": "#API-1",
    "page": "Readme",
    "title": "API",
    "category": "section",
    "text": "store = T(args...)  # Constructor for some T <: ObjectStore\n\n# Set access permissions\nsetpermission!(store, :bucket, Permission(false, true, false, false))  # Bucket access is cRud (read-only) without expiry\nsetpermission!(store, :object, Permission(false, true, false, false))  # Object access is cRud (read-only) without expiry\n\n# Allow CRUD (read/write) access for 5 minutes to objects in the bucket called \"mybucket\"\nsetpermission!(store, r\"^rootbucket/mybucket/.+\", Permission(true, true, true, true, now() + Minute(5)))\n\n# Buckets\ncreatebucket!(store, \"mybucket\")  # Create mybucket in the root bucket\nlistcontents(store,  \"mybucket\")  # List the contents of rootbucket/mybucket. Return nothing if it doesn\'t exist\ndeletebucket!(store, \"mybucket\")  # Delete rootbucket/mybucket if it exists\n\n# Objects\nstore[\"mybucket/myobject\"] = value     # Create/update. Not possible if the bucket doesn\'t exist.\nstore[\"mybucket/myobject\"]             # Read. Returns nothing if the object doesn\'t exist.\ndelete!(store, \"mybucket/myobject\")\n\n# Conveniences\nisbucket(store,  bucketname)  # True if bucketname refers to a bucket\nisobject(store,  objectname)  # True if objectname refers to an object\n\n# Permission queries\np = getpermission(store, bucket_or_object)  # Get the permission settings for the specific bucket/object\nsetexpiry!(store, now() + Hour(1))          # Set an expiry for all the buckets/objects that the store has access to\n\nhaspermission(store, bucket_or_object, :create)  # True if the store has :create access to the bucket/object\npermissions_conflict(store, \"mybucket\")          # True if the rules that define the store\'s access to \"mybucket\" conflict"
},

{
    "location": "autodocs/#ObjectStores.ObjectStore",
    "page": "Docstrings",
    "title": "ObjectStores.ObjectStore",
    "category": "type",
    "text": "Required fields:\n\nid::String;                                     # From Authorization.AbstractClient\nid2permission::Dict{String, Permission};        # Resource ID => Permission (from Authorization.AbstractClient)\nidpattern2permission::Dict{Regex, Permission};  # Resource ID pattern => Permission (from Authorization.AbstractClient)\ntype2permission::Dict{DataType, Permission};    # Resource type => Permission (from Authorization.AbstractClient)\nrootbucketID::String  # ID of root bucket       # Specific to ObjectStores\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.delete!-Tuple{ObjectStore,String}",
    "page": "Docstrings",
    "title": "Base.delete!",
    "category": "method",
    "text": "Delete object. If successful return nothing, else return an error message as a String.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.getindex-Tuple{ObjectStore,String}",
    "page": "Docstrings",
    "title": "Base.getindex",
    "category": "method",
    "text": "Read object. If successful return the value, else @warn the error message and return nothing.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.setindex!-Tuple{ObjectStore,Any,String}",
    "page": "Docstrings",
    "title": "Base.setindex!",
    "category": "method",
    "text": "Create/update object. If successful return nothing, else return an error message as a String.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectStores.createbucket!",
    "page": "Docstrings",
    "title": "ObjectStores.createbucket!",
    "category": "function",
    "text": "Create bucket. If successful return nothing, else return an error message as a String.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectStores.deletebucket!",
    "page": "Docstrings",
    "title": "ObjectStores.deletebucket!",
    "category": "function",
    "text": "Delete bucket. If successful return nothing, else return an error message as a String.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectStores.isbucket-Tuple{ObjectStore,String}",
    "page": "Docstrings",
    "title": "ObjectStores.isbucket",
    "category": "method",
    "text": "Returns true if name refers to a bucket.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectStores.isobject-Tuple{ObjectStore,String}",
    "page": "Docstrings",
    "title": "ObjectStores.isobject",
    "category": "method",
    "text": "Returns true if name refers to an object.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ObjectStores.listcontents",
    "page": "Docstrings",
    "title": "ObjectStores.listcontents",
    "category": "function",
    "text": "List the contents of the bucket. If successful return the value, else @warn the error message and return nothing.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [ObjectStores]\nOrder = [:type, :function]"
},

]}
