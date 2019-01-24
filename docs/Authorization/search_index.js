var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Authorization.jl-1",
    "page": "Readme",
    "title": "Authorization.jl",
    "category": "section",
    "text": "A small but flexible API for controlling an authenticated client\'s access to resources.Some use cases are listed at the bottom of this README."
},

{
    "location": "#Resources-1",
    "page": "Readme",
    "title": "Resources",
    "category": "section",
    "text": "All resources (subtypes of AbstractResource) have an id. Resources may also have fields other than id."
},

{
    "location": "#Clients-1",
    "page": "Readme",
    "title": "Clients",
    "category": "section",
    "text": "A client is a type (subtype of AbstractClient) that represents an entity wishing to access some resources. Clients may represent users, web apps, data storage clients, etc."
},

{
    "location": "#Permissions-1",
    "page": "Readme",
    "title": "Permissions",
    "category": "section",
    "text": "A client\'s access to a resource is determined by its Permission for the resource. The Permission type is defined as:struct Permission\n    create::Bool\n    read::Bool\n    update::Bool\n    delete::Bool\n    expiry::DateTime\nendPermissions created without an expiry are given an (almost) infinite expiry.A client can loosely be thought of as a mapping from resources to Permissions.More precisely, the mapping is a hierarchy of 3 maps.As we move up the hierarchy:Each level maps a smaller set of resources to permissions than the previous level.\nThe permissions override those specified at the previous level.The levels are:At the bottom of the hierarchy is the map from resource type to permission. This allows the same permission to be applied to all resources with the same type. For example a client may have read-only access to the entire local system. In this case the resources are directories and files and the associated permission is Permission(false, true, false, false, expiry).\nIn the middle of the hierarchy is the map from resource ID pattern (Regexs) to permission. This mapping overrides the permissions specified in the type-to-permission mapping. Continuing our file system example, the same client could also have write access to a particular directory using this mapping.\nAt the top of the hierarchy is the map from resource ID to permission. This mapping allows access control for specific resources.This framework allows both fine-grained and somewhat coarse access control within the same client, provided the permissions don\'t conflict within a level of the hierarchy (test for conflicts via permissions_conflict(client, resourceid)).Here\'s a quick sample of the API:# Allow cRud (read-only) access without expiry to resources with type resource_type\nsetpermission!(client, resource_type, Permission(false, true, false, false))\n\n# Allow CRUD (read/write) access for 5 minutes to resources with IDs starting with \"mycollection/\"\nsetpermission!(client, r\"mycollection/*\", Permission(true, true, true, true, now() + Minute(5)))\n\np = getpermission(client, resource)  # Get the permission settings for the specific resource\nsetexpiry!(client, now() + Hour(1))  # Set an expiry for all the resources that the client has access to\n\nhaspermission(client, resource, :create)    # True if the client has :create access to the resource\npermissions_conflict(client, \"myresource\")  # True if the rules that define the client\'s access to the resource with ID \"myresource\" conflict"
},

{
    "location": "#Accessing-Resources-1",
    "page": "Readme",
    "title": "Accessing Resources",
    "category": "section",
    "text": "Use haspermission(client, resource, action) to determine whether the client has permission to act on the resource (create/read/update/delete). Here the action is one of :create, :read, :update, :delete.This package also provides create!, read, update! and delete!. Each has the same signature, namely (client, resource, args...). Each works as follows:Check whether the client has permission to act on the resource.\nIf so, act on the resource.\nIf all is well, return nothing when creating/updating/deleting, and return (true, value) when reading\nElse return an error message when creating/updating/deleting, and return (false, error message) when reading\nElse return an error message when creating/updating/deleting, and return (false, error message) when reading"
},

{
    "location": "#Use-Cases-1",
    "page": "Readme",
    "title": "Use Cases",
    "category": "section",
    "text": ""
},

{
    "location": "#Object-Storage-1",
    "page": "Readme",
    "title": "Object Storage",
    "category": "section",
    "text": "In object storage, data is stored as objects and objects are grouped into buckets. The ObjectStores package defines a common API for object storage that allows the storage back-end to be swapped without changing any code.Examples of object stores include:LocalDiskObjectStores.jl, which uses the local file system to store objects (files) in buckets (directories).\nGCSObjectStores.jl, which uses Google Cloud Storage as the storage back-end.This authorization framework is used to control access to buckets and objects."
},

{
    "location": "#Web-app-authorization-1",
    "page": "Readme",
    "title": "Web app authorization",
    "category": "section",
    "text": "Authorization.jl can be used to implement web-app sessions.Suppose a user\'s access is determined by his/her subscription to an app. Then, for example, setpermission!(client, App, permission) sets permissions for all resources related to the app with type App. Also, setexpiry(client, expiry) can be used to set an expiry on all resources to which the client has access. The client can then be used as the session object. When a request comes in, the client and requested resource can be identified from the request (and perhaps server state). Determining whether the client has permission to access the resource is then a matter of calling haspermission."
},

{
    "location": "#Developing-a-new-client-1",
    "page": "Readme",
    "title": "Developing a new client",
    "category": "section",
    "text": "If you are developing a new client for some resources and would like to use this framework:Ensure that the type of your client is a subtype of AbstractClient. Concrete subtypes are required to include some mandatory fields - see the AbstractClient dosctring. You can also include fields that are specific to your client type.\nSimilarly, ensure that the types of your resources are subtypes of AbstractResource. Also ensure that your concrete subtypes of AbstractResource have an id::String field."
},

{
    "location": "autodocs/#Authorization.AbstractClient",
    "page": "Docstrings",
    "title": "Authorization.AbstractClient",
    "category": "type",
    "text": "Required fields:\n\nid::String;\nid2permission::Dict{String, Permission};        # Resource ID => Permission\nidpattern2permission::Dict{Regex, Permission};  # Resource ID pattern => Permission\ntype2permission::Dict{DataType, Permission};    # Resource type => Permission\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Authorization.AbstractResource",
    "page": "Docstrings",
    "title": "Authorization.AbstractResource",
    "category": "type",
    "text": "Required fields:\n\nid::String\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Authorization.create!-Union{Tuple{R}, Tuple{C}, Tuple{C,R,Vararg{Any,N} where N}} where R<:AbstractResource where C<:AbstractClient",
    "page": "Docstrings",
    "title": "Authorization.create!",
    "category": "method",
    "text": "Create resource. If successful return nothing, else return an error message as a String.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Authorization.getpermission-Union{Tuple{R}, Tuple{C}, Tuple{C,R}} where R<:AbstractResource where C<:AbstractClient",
    "page": "Docstrings",
    "title": "Authorization.getpermission",
    "category": "method",
    "text": "Returns the Permission object for client-resource combination if it exists, else returns nothing.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Authorization.haspermission-Union{Tuple{R}, Tuple{C}, Tuple{C,R,Symbol}} where R<:AbstractResource where C<:AbstractClient",
    "page": "Docstrings",
    "title": "Authorization.haspermission",
    "category": "method",
    "text": "Returns true if the client has permission to act on the resource according to the given action.\n\nAction ust be one of :create, :read, :update, :delete.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Authorization.setexpiry!-Union{Tuple{C}, Tuple{C,DateTime}} where C<:AbstractClient",
    "page": "Docstrings",
    "title": "Authorization.setexpiry!",
    "category": "method",
    "text": "Set the expiry of every permission of the client to the given expiry.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Authorization.update!-Union{Tuple{R}, Tuple{C}, Tuple{C,R,Vararg{Any,N} where N}} where R<:AbstractResource where C<:AbstractClient",
    "page": "Docstrings",
    "title": "Authorization.update!",
    "category": "method",
    "text": "Update resource. If successful return nothing, else return an error message as a String.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.delete!-Union{Tuple{R}, Tuple{C}, Tuple{C,R}} where R<:AbstractResource where C<:AbstractClient",
    "page": "Docstrings",
    "title": "Base.delete!",
    "category": "method",
    "text": "Delete resource. If successful return nothing, else return an error message as a String.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.read-Union{Tuple{R}, Tuple{C}, Tuple{C,R}} where R<:AbstractResource where C<:AbstractClient",
    "page": "Docstrings",
    "title": "Base.read",
    "category": "method",
    "text": "Read resource. If successful return (true, value), else return (false, errormessage::String).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Authorization.permisssions_conflict-Union{Tuple{C}, Tuple{C,String}} where C<:AbstractClient",
    "page": "Docstrings",
    "title": "Authorization.permisssions_conflict",
    "category": "method",
    "text": "Returns true if more than one resource ID pattern matches the resource ID.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Authorization]\nOrder = [:type, :function]"
},

]}
