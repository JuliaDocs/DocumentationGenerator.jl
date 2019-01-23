var documenterSearchIndex = {"docs": [

{
    "location": "api/api/#",
    "page": "Google JSON APIs",
    "title": "Google JSON APIs",
    "category": "page",
    "text": ""
},

{
    "location": "api/api/#GoogleCloud.api",
    "page": "Google JSON APIs",
    "title": "GoogleCloud.api",
    "category": "module",
    "text": "General framework for representing Google JSON APIs.\n\n\n\n\n\n"
},

{
    "location": "api/api/#GoogleCloud.api.APIMethod",
    "page": "Google JSON APIs",
    "title": "GoogleCloud.api.APIMethod",
    "category": "type",
    "text": "APIMethod(verb, path, description)\n\nMaps a method in the API to an HTTP verb and path.\n\n\n\n\n\n"
},

{
    "location": "api/api/#GoogleCloud.api.APIResource",
    "page": "Google JSON APIs",
    "title": "GoogleCloud.api.APIResource",
    "category": "type",
    "text": "APIResource(path, methods)\n\nRepresents a resource in the API, typically rooted at a specific point in the REST hierarchy.\n\n\n\n\n\n"
},

{
    "location": "api/api/#GoogleCloud.api.APIRoot",
    "page": "Google JSON APIs",
    "title": "GoogleCloud.api.APIRoot",
    "category": "type",
    "text": "APIRoot(...)\n\nRepresent a Google JSON API containing resources, accessible via scopes.\n\n\n\n\n\n"
},

{
    "location": "api/api/#GoogleCloud.api.get_session-Tuple{GoogleCloud.api.APIRoot}",
    "page": "Google JSON APIs",
    "title": "GoogleCloud.api.get_session",
    "category": "method",
    "text": "get_session(api)\n\nGet the default session for a specific API.\n\n\n\n\n\n"
},

{
    "location": "api/api/#GoogleCloud.api.iserror-Tuple{AbstractDict{Symbol,V} where V}",
    "page": "Google JSON APIs",
    "title": "GoogleCloud.api.iserror",
    "category": "method",
    "text": "Check if response is/contains an error\n\n\n\n\n\n"
},

{
    "location": "api/api/#GoogleCloud.api.set_session!-Tuple{GoogleCloud.api.APIRoot,Union{Nothing, GoogleSession}}",
    "page": "Google JSON APIs",
    "title": "GoogleCloud.api.set_session!",
    "category": "method",
    "text": "set_session!(api, session)\n\nSet the default session for a specific API. Set session to nothing to forget session.\n\n\n\n\n\n"
},

{
    "location": "api/api/#GoogleCloud.api.execute-Tuple{GoogleSession,GoogleCloud.api.APIResource,GoogleCloud.api.APIMethod,Vararg{AbstractString,N} where N}",
    "page": "Google JSON APIs",
    "title": "GoogleCloud.api.execute",
    "category": "method",
    "text": "execute(session::GoogleSession, resource::APIResource, method::APIMethod, \n        path_args::AbstractString...[; ...])\n\nExecute a method against the provided path arguments.\n\nOptionally provide parameters and data (with optional MIME content-type).\n\n\n\n\n\n"
},

{
    "location": "api/api/#GoogleCloud.api.path_replace-Tuple{AbstractString,Any}",
    "page": "Google JSON APIs",
    "title": "GoogleCloud.api.path_replace",
    "category": "method",
    "text": "path_replace(path, values)\n\nReplace path tokens in path with values.\n\nAssumes values are provided in the same order in which tokens appear in the path.\n\npath_replace(\"/{foo}/{bar}/{baz}\", [\"this\", \"is\", \"it\"])\n# output\n\"/this/is/it\"\n\n\n\n\n\n"
},

{
    "location": "api/api/#GoogleCloud.api.path_tokens-Tuple{AbstractString}",
    "page": "Google JSON APIs",
    "title": "GoogleCloud.api.path_tokens",
    "category": "method",
    "text": "path_tokens(path)\n\nExtract tokens from a path, e.g.\n\npath_tokens(\"/{foo}/{bar}/x/{baz}\")\n# output\n3-element Array{SubString{String},1}:\n \"{foo}\"\n \"{bar}\"\n \"{baz}\"\n\n\n\n\n\n"
},

{
    "location": "api/api/#Google-JSON-APIs-1",
    "page": "Google JSON APIs",
    "title": "Google JSON APIs",
    "category": "section",
    "text": "Modules = [GoogleCloud.api]"
},

{
    "location": "api/api/#GoogleCloud.api._storage",
    "page": "Google JSON APIs",
    "title": "GoogleCloud.api._storage",
    "category": "module",
    "text": "Google Cloud Storage API\n\n\n\n\n\n"
},

{
    "location": "api/api/#GoogleCloud.api._storage.storage",
    "page": "Google JSON APIs",
    "title": "GoogleCloud.api._storage.storage",
    "category": "constant",
    "text": "Google Cloud Storage API root.\n\n\n\n\n\n"
},

{
    "location": "api/api/#GoogleCloud.api._compute",
    "page": "Google JSON APIs",
    "title": "GoogleCloud.api._compute",
    "category": "module",
    "text": "Google Compute Engine API\n\n\n\n\n\n"
},

{
    "location": "api/api/#GoogleCloud.api._compute.compute",
    "page": "Google JSON APIs",
    "title": "GoogleCloud.api._compute.compute",
    "category": "constant",
    "text": "Google Compute Engine API root.\n\n\n\n\n\n"
},

{
    "location": "api/api/#Implemented-APIs-1",
    "page": "Google JSON APIs",
    "title": "Implemented APIs",
    "category": "section",
    "text": "Modules = [GoogleCloud.api._storage]Modules = [GoogleCloud.api._compute]"
},

{
    "location": "api/credentials/#",
    "page": "Google Cloud Platform Credentials",
    "title": "Google Cloud Platform Credentials",
    "category": "page",
    "text": ""
},

{
    "location": "api/credentials/#GoogleCloud.credentials",
    "page": "Google Cloud Platform Credentials",
    "title": "GoogleCloud.credentials",
    "category": "module",
    "text": "Google Cloud Platform service-account API credentials.\n\n\n\n\n\n"
},

{
    "location": "api/credentials/#GoogleCloud.credentials.JSONCredentials",
    "page": "Google Cloud Platform Credentials",
    "title": "GoogleCloud.credentials.JSONCredentials",
    "category": "type",
    "text": "JSONCredentials(...)\n\nParse JSON credentials created for a service-account at Google Cloud Platform Console\n\n\n\n\n\n"
},

{
    "location": "api/credentials/#GoogleCloud.credentials.JSONCredentials-Tuple{AbstractDict{Symbol,#s596} where #s596<:AbstractString}",
    "page": "Google Cloud Platform Credentials",
    "title": "GoogleCloud.credentials.JSONCredentials",
    "category": "method",
    "text": "JSONCredentials(data::Dict{Symbol, String})\n\nInitialise credentials from dictionary containing values.\n\n\n\n\n\n"
},

{
    "location": "api/credentials/#GoogleCloud.credentials.JSONCredentials-Tuple{AbstractString}",
    "page": "Google Cloud Platform Credentials",
    "title": "GoogleCloud.credentials.JSONCredentials",
    "category": "method",
    "text": "JSONCredentials(filename)\n\nLoad credentials from a JSON file.\n\n\n\n\n\n"
},

{
    "location": "api/credentials/#GoogleCloud.credentials.MetadataCredentials",
    "page": "Google Cloud Platform Credentials",
    "title": "GoogleCloud.credentials.MetadataCredentials",
    "category": "type",
    "text": "Get credential/service-account information from GCE metadata server\n\nSee Storing and Retreiving Instance Metadata\n\n\n\n\n\n"
},

{
    "location": "api/credentials/#Google-Cloud-Platform-Credentials-1",
    "page": "Google Cloud Platform Credentials",
    "title": "Google Cloud Platform Credentials",
    "category": "section",
    "text": "Modules = [GoogleCloud.credentials]"
},

{
    "location": "api/error/#",
    "page": "Error Types",
    "title": "Error Types",
    "category": "page",
    "text": ""
},

{
    "location": "api/error/#GoogleCloud.error",
    "page": "Error Types",
    "title": "GoogleCloud.error",
    "category": "module",
    "text": "Basic exceptions.\n\n\n\n\n\n"
},

{
    "location": "api/error/#GoogleCloud.error.APIError",
    "page": "Error Types",
    "title": "GoogleCloud.error.APIError",
    "category": "type",
    "text": "An error from the API.\n\n\n\n\n\n"
},

{
    "location": "api/error/#GoogleCloud.error.CredentialError",
    "page": "Error Types",
    "title": "GoogleCloud.error.CredentialError",
    "category": "type",
    "text": "An error in the provided credentials.\n\n\n\n\n\n"
},

{
    "location": "api/error/#GoogleCloud.error.SessionError",
    "page": "Error Types",
    "title": "GoogleCloud.error.SessionError",
    "category": "type",
    "text": "An error in establising a session.\n\n\n\n\n\n"
},

{
    "location": "api/error/#GoogleCloud.error.Error",
    "page": "Error Types",
    "title": "GoogleCloud.error.Error",
    "category": "type",
    "text": "Base error type.\n\n\n\n\n\n"
},

{
    "location": "api/error/#Error-Types-1",
    "page": "Error Types",
    "title": "Error Types",
    "category": "section",
    "text": "Modules = [GoogleCloud.error]"
},

{
    "location": "api/root/#",
    "page": "Google API URLs",
    "title": "Google API URLs",
    "category": "page",
    "text": ""
},

{
    "location": "api/root/#GoogleCloud.root",
    "page": "Google API URLs",
    "title": "GoogleCloud.root",
    "category": "module",
    "text": "Google API URL roots.\n\n\n\n\n\n"
},

{
    "location": "api/root/#GoogleCloud.root.isurl-Tuple{AbstractString}",
    "page": "Google API URLs",
    "title": "GoogleCloud.root.isurl",
    "category": "method",
    "text": "isurl(path)\n\nReturn true if path is a URL and false a path fragment.\n\n\n\n\n\n"
},

{
    "location": "api/root/#Google-API-URLs-1",
    "page": "Google API URLs",
    "title": "Google API URLs",
    "category": "section",
    "text": "Modules = [GoogleCloud.root]"
},

{
    "location": "api/session/#",
    "page": "Google API Authorisation Manager",
    "title": "Google API Authorisation Manager",
    "category": "page",
    "text": ""
},

{
    "location": "api/session/#GoogleCloud.session",
    "page": "Google API Authorisation Manager",
    "title": "GoogleCloud.session",
    "category": "module",
    "text": "OAuth 2.0 Google Sessions\n\n\n\n\n\n"
},

{
    "location": "api/session/#GoogleCloud.session.GoogleSession",
    "page": "Google API Authorisation Manager",
    "title": "GoogleCloud.session.GoogleSession",
    "category": "type",
    "text": "GoogleSession(...)\n\nOAuth 2.0 session for Google using provided credentials.\n\nCaches authorisation tokens up to expiry.\n\nsess = GoogleSession(JSONCredentials(expanduser(\"~/auth.json\")), [\"devstorage.full_control\"])\n\n\n\n\n\n"
},

{
    "location": "api/session/#GoogleCloud.session.authorize-Tuple{GoogleSession}",
    "page": "Google API Authorisation Manager",
    "title": "GoogleCloud.session.authorize",
    "category": "method",
    "text": "authorize(session; cache=true)\n\nGet OAuth 2.0 authorisation token from Google.\n\nIf cache set to true, get a new token only if the existing token has expired.\n\n\n\n\n\n"
},

{
    "location": "api/session/#GoogleCloud.session.JWTClaimSet",
    "page": "Google API Authorisation Manager",
    "title": "GoogleCloud.session.JWTClaimSet",
    "category": "type",
    "text": "JWTClaimSet\n\nJSON Web Token claim-set.\n\n\n\n\n\n"
},

{
    "location": "api/session/#GoogleCloud.session.JWTHeader",
    "page": "Google API Authorisation Manager",
    "title": "GoogleCloud.session.JWTHeader",
    "category": "type",
    "text": "JWTHeader\n\nJSON Web Token header.\n\n\n\n\n\n"
},

{
    "location": "api/session/#GoogleCloud.session.JWS",
    "page": "Google API Authorisation Manager",
    "title": "GoogleCloud.session.JWS",
    "category": "function",
    "text": "JWS(credentials, claimset)\n\nConstruct the Base64-encoded JSON Web Signature based on the JWT header, claimset and signed using the private key provided in the Google JSON service-account key.\n\n\n\n\n\n"
},

{
    "location": "api/session/#GoogleCloud.session.SHA256withRSA-Tuple{Any,MbedTLS.PKContext}",
    "page": "Google API Authorisation Manager",
    "title": "GoogleCloud.session.SHA256withRSA",
    "category": "method",
    "text": "SHA256withRSA(message, key)\n\nSign message using private key with RSASSA-PKCS1-V1_5-SIGN algorithm.\n\n\n\n\n\n"
},

{
    "location": "api/session/#GoogleCloud.session.unixseconds-Tuple{Dates.DateTime}",
    "page": "Google API Authorisation Manager",
    "title": "GoogleCloud.session.unixseconds",
    "category": "method",
    "text": "unixseconds(x)\n\nConvert date-time into unix seconds.\n\n\n\n\n\n"
},

{
    "location": "api/session/#Google-API-Authorisation-Manager-1",
    "page": "Google API Authorisation Manager",
    "title": "Google API Authorisation Manager",
    "category": "section",
    "text": "Modules = [GoogleCloud.session]"
},

{
    "location": "custom_api/#",
    "page": "Custom APIs",
    "title": "Custom APIs",
    "category": "page",
    "text": ""
},

{
    "location": "custom_api/#Custom-APIs-1",
    "page": "Custom APIs",
    "title": "Custom APIs",
    "category": "section",
    "text": ""
},

{
    "location": "custom_api/#GoogleCloud.collection.KeyStore",
    "page": "Custom APIs",
    "title": "GoogleCloud.collection.KeyStore",
    "category": "type",
    "text": "High-level container wrapping a Google Storage bucket\n\n\n\n\n\n"
},

{
    "location": "custom_api/#GoogleCloud.collection.fast_forward-Union{Tuple{V}, Tuple{K}, Tuple{KeyStore{K,V},Any}} where V where K",
    "page": "Custom APIs",
    "title": "GoogleCloud.collection.fast_forward",
    "category": "method",
    "text": "Skip over missing keys if any deleted since key list was geenrated\n\n\n\n\n\n"
},

{
    "location": "custom_api/#Collections-1",
    "page": "Custom APIs",
    "title": "Collections",
    "category": "section",
    "text": "Pages = [\"keystore.md\"]\nDepth = 2Modules = [GoogleCloud.collection]"
},

{
    "location": "custom_api/keystore/#",
    "page": "Key-Value Store",
    "title": "Key-Value Store",
    "category": "page",
    "text": ""
},

{
    "location": "custom_api/keystore/#Key-Value-Store-1",
    "page": "Key-Value Store",
    "title": "Key-Value Store",
    "category": "section",
    "text": "The KeyStore API is a custom key-value API built on the object storage API. That is, it is not an API offered by the Google Cloud Platform. It is intended to be used to store key-value pairs. Below is a brief tutorial that walks through some typical usage of the KeyStore API.First, load the package.using GoogleCloud\nsession = GoogleSession(expanduser(\"~/credentials.json\"), [\"devstorage.full_control\"])Define a function for serializing data to Vector{UInt8} before writing to the key-value store. Also define a corresponding deserializer, which is called when reading from the store. function serialize_to_uint8_vector(x)\n    io = IOBuffer()\n    serialize(io, x)\n    takebuf_array(io)\nend\n\ndeserialize_from_vector(x) = deserialize(IOBuffer(x))Initialize the key-value store. In this case our store uses the default options, which synchronizes the data in the remote store with the data in the local store.kv_sync = KeyStore{Int, Int}(\n    \"kvtest\",                                  # Key-value store name. Created if it doesn\'t already exist.\n    session;\n    location    = \"US\",\n    empty       = false,                        # Defaults to false. Empty the bucket if it exists.\n    gzip        = true,\n    key_format  = K <: String ? :string : :json # the formating function of key\n    val_format  = V <: String ? :string : :json # the formating function of value\n)Run some basic get/set methods, verifying their effects along the way.# Get the data from the key-value store. Currently there is no data.\nkeys(kv_sync)       # Returns array of keys\nvalues(kv_sync)     # Returns array of values\ncollect(kv_sync)    # Returns array of Pair(key, value)\n\n# Write key-value pairs both locally (determined by use_cache = true) and remotely (determined by use_remote = true)\nkv_sync[1] = 11\nkv_sync[2] = 22\n\n# Verify local store\nkv_sync.cache\n\n# Verify remote store\nclearcache!(kv_sync)    # Clear local store\nkv_sync.cache           # Verify local store is empty again\ncollect(kv_sync)        # Pull data from remote store and populate local store\nkv_sync.cache           # Local store now contains our dataIf you are writing frequently then the latency of persisting each write to the remote store may be unacceptably slow. One solution is to do all your writes locally, then persist them remotely with one commit, as follows:kv_local = KeyStore{Int, Int}(\n    \"kvtest\";                                  # The store name is the same as before.\n    session    = session,                      # As before\n    val_writer = serialize_to_uint8_vector,    # As before\n    val_reader = deserialize_from_vector,      # As before\n    use_remote = false                         # Work locally only, then manually sync with the remote store.\n)\n\nkv_local.cache        # Empty because kv_local is not synchronized with the remote store (because use_remote is false)\ncollect(kv_local)     # Empty because use_remote is false, so collect(kv_local) only looks at kv_local.cache\nfetch!(kv_local)      # Manually fetch the data in the remote store\ncollect(kv_local)     # Local store is now populated\nkv_local[3] = 33      # Writes to local store only\nkv_sync[3]            # Error because key 3 hasn\'t been committed from kv_local to remote store\nkv_local.pending      # List of changes made locally that have not been committed to the remote store\ncommit!(kv_local)     # Commit the local changes to the remote store\nkv_local.pending      # The list of pending changes is now empty\nkv_sync[3]            # Now returns 33 from the remote storeFinally we clean up.delete!(kv_sync)      # Error: Can\'t delete a non-empty remote store\nreset!(kv_sync)       # Remove all data from remote store. Alternatively, delete!(kv_sync, 1), delete!(kv_sync, 2), etc.\ndelete!(kv_sync)      # Detaches local store from remote store and deletes remote storeAdditional methods include:clearpending!(kvstore)    # Empty the list of local changes that haven\'t been committed to the remote store\nsync!(kvstore)            # Commit local changes to remote store, then fetch data from remote store"
},

{
    "location": "#",
    "page": "Google Cloud APIs for Julia",
    "title": "Google Cloud APIs for Julia",
    "category": "page",
    "text": ""
},

{
    "location": "#Google-Cloud-APIs-for-Julia-1",
    "page": "Google Cloud APIs for Julia",
    "title": "Google Cloud APIs for Julia",
    "category": "section",
    "text": "This module wraps Google Cloud Platform (GCP) APIs with Julia.Currently only the Google Storage API has been added."
},

{
    "location": "#Quick-Start-1",
    "page": "Google Cloud APIs for Julia",
    "title": "Quick Start",
    "category": "section",
    "text": "This Quick Start walks through the steps required to store and retrieve data from Google Cloud Storage."
},

{
    "location": "#Google-Cloud-Prerequisites-1",
    "page": "Google Cloud APIs for Julia",
    "title": "Google Cloud Prerequisites",
    "category": "section",
    "text": "If you don\'t already have a Google account, create one here.\nSign in to the GCP console here.\nCreate a new project by clicking on the Project drop-down menu at the top of the page. If you already have a GCP project, click on the drop-down menu at the top of the page and select Create project.\nA GCP project is a set of resources with common settings that is billed and  managed separately from any resource outside the set. Thus a resource  exists in exactly one project. Examples of resources include GCE instances,  storage volumes and data on those volumes. A project\'s settings include  ownership, users and their permissions, and associated GCP services. As a  user anything you do on GCP happens within a project, including data  storage, compute, messaging, logging, etc.Associated with your project are credentials that allow users to add, read and remove resources from the project. Get the credentials for your project as a JSON file from your GCP Credentials page:\nType credentials into the search bar at the top of the console.\nSelect Credentials API Manager from the search results.\nClick on the Create credentials drop-down menu and select Service account key.\nFrom the Service Account menu select New service account.\nFrom Role select Storage > Storage Admin.\nEnsure the key type is JSON.\nClick Create.\nCredentials are then automatically downloaded in a JSON file. Save this file to your machine. In this tutorial we save the service account credentials to ~/credentials.json."
},

{
    "location": "#Interacting-with-the-Storage-API-from-Julia-1",
    "page": "Google Cloud APIs for Julia",
    "title": "Interacting with the Storage API from Julia",
    "category": "section",
    "text": "Start Julia and install the GoogleCloud.jl package:Pkg.add(\"GoogleCloud\")\nusing GoogleCloudLoad the service account credentials obtained from Google:credentials = JSONCredentials(expanduser(\"~/credentials.json\"))Alternatively, if the process is running on a Google Compute Engine instance, the credentials can be derived from the instance metadata directly (i.e. without JSON):credentials = MetadataCredentials()Now, create a session with the credentials, requesting any required scopes:session = GoogleSession(credentials, [\"devstorage.full_control\"])Set the default session of an API using set_session!:set_session!(storage, session)    # storage is the API root, exported from GoogleCloud.jlList all existing buckets in your project. The list contains a default bucket:bkts = storage(:Bucket, :list)    # storage(:Bucket, :list; raw=true) returns addition information\n\n# Pretty print\nfor item in bkts\n    display(item)\n    println()\nendCreate a bucket called a12345foo, for example. Note: The bucket name must be unique... across all buckets in GCP, so choose your own!storage(:Bucket, :insert; data=Dict(:name => \"a12345foo\"))\n\n# Verify the new bucket exists in the project\nbkts = storage(:Bucket, :list)\nfor item in bkts\n    display(item)\n    println()\nendList all objects in the a12345foo bucket. The list is currently empty:storage(:Object, :list, \"a12345foo\")Upload an object to the a12345foo bucket:# String containing the contents of test_image.jpg. The semi-colon avoids an error caused by printing the returned value.\nfile_contents = read(open(\"test_image.jpg\", \"r\"), String);\n\n# Upload\nstorage(:Object, :insert, \"a12345foo\";     # Returns metadata about the object\n    name=\"image.jpg\",           # Object name is \"image.jpg\"\n    data=file_contents,         # The data being stored on your project\n    content_type=\"image/jpeg\"   # The contents are specified to be in JPEG format\n)\n\n# Verify that the object is in the bucket\nobs = storage(:Object, :list, \"a12345foo\")    # Ugly print\nmap(x -> x[:name], obs)                       # Pretty printGet the image.jpg object from the bucket:s = storage(:Object, :get, \"a12345foo\", \"image.jpg\");\ns == file_contents    # Verify that the retrieved data is the same as that originally postedDelete the image.jpg object from the bucket:storage(:Object, :delete, \"a12345foo\", \"image.jpg\")\n\n# Verify that the bucket is now empty\nstorage(:Object, :list, \"a12345foo\")Delete the bucket:storage(:Bucket, :delete, \"a12345foo\")\n\n# Verify that the bucket has been deleted\nbkts = storage(:Bucket, :list)\nfor item in bkts\n    display(item)\n    println()\nend"
},

{
    "location": "#High-Level-API-1",
    "page": "Google Cloud APIs for Julia",
    "title": "High-Level API",
    "category": "section",
    "text": "Pages = [\"custom_api/index.md\"]\nDepth = 2"
},

{
    "location": "#Low-Level-API-1",
    "page": "Google Cloud APIs for Julia",
    "title": "Low-Level API",
    "category": "section",
    "text": "Pages = [\"api/credentials.md\", \"api/session.md\", \"api/api.md\", \"api/root.md\", \"api/error.md\"]\nDepth = 2"
},

{
    "location": "#Index-1",
    "page": "Google Cloud APIs for Julia",
    "title": "Index",
    "category": "section",
    "text": ""
},

]}
