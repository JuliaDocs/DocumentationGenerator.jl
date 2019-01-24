var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#LocalDiskObjectStores-1",
    "page": "Readme",
    "title": "LocalDiskObjectStores",
    "category": "section",
    "text": "This package defines an ObjectStore that uses the local file system as the storage back-end.(Image: Build Status) (Image: codecov.io)"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": ""
},

{
    "location": "#Example-1:-Bucket-store-with-read-only-permission-1",
    "page": "Readme",
    "title": "Example 1: Bucket store with read-only permission",
    "category": "section",
    "text": "using Dates\nusing LocalDiskObjectStores\n\n# Create store\nstore = LocalDiskObjectStore(\"/tmp/rootbucket\")    # Root bucket is /tmp/rootbucket\nlistcontents(store)  # Returns nothing. Store doesn\'t have read permission\nsetpermission!(store, :bucket, Permission(false, true, false, false))  # cRud (read-only) permission for all buckets within the root bucket\nsetpermission!(store, :object, Permission(false, true, false, false))  # cRud (read-only) permission for all objects within the root bucket\n\n# Root bucket\nlistcontents(store)      # Root bucket doesn\'t yet exist\ncreatebucket!(store)     # Failed (returns error msg) because store has no create permission\nisbucket(store, \"\")      # Root bucket still doesn\'t exist\nmkdir(\"/tmp/rootbucket\")\nisbucket(store, \"\")      # Root bucket now exists\nlistcontents(store)      # Root bucket is empty\n\n# Bucket root/xxx\nlistcontents(store, \"xxx\")\ncreatebucket!(store, \"xxx\")\nmkdir(\"/tmp/rootbucket/xxx\")\nisbucket(store, \"xxx\")        # Bucket now exists\nisobject(store, \"xxx\")        # \"xxx\" is a bucket not an object\n\n# Object root/xxx/myobject\nstore[\"xxx/myobject\"] = \"My first object\"  # No-op, store doesn\'t have create permission\nisobject(store, \"xxx/myobject\")            # \"xxx/myobject\" doesn\'t exist\n\n# Add temporary create permission for objects in bucket root/xxx\nsetpermission!(store, r\"^/tmp/rootbucket/xxx/.+\", Permission(true, true, true, true, now() + Second(5)))\nstore[\"xxx/myobject\"] = \"My object\"\nisobject(store, \"xxx/myobject\")        # \"xxx/myobject\" now exists\nString(store[\"xxx/myobject\"])\nstore[\"xxx/myobject\"] = \"Some new value\"\nString(store[\"xxx/myobject\"])\ndelete!(store, \"xxx/myobject\")\nisobject(store, \"xxx/myobject\")        # \"xxx/myobject\" no longer exists\ncreatebucket!(store, \"zzz\")            # Failed (returns error msg) because store has no create permission for other buckets/objects\n\nsleep(5)                                   # Sleep until permission expires\nstore[\"xxx/myobject\"] = \"My first object\"  # No-op, store no longer has create permission\nisobject(store, \"xxx/myobject\")            # \"xxx/myobject\" doesn\'t exist because the store\'s create permission expired\n\n# Clean up\nrm(\"/tmp/rootbucket\", recursive=true)"
},

{
    "location": "#Example-2:-Bucket-store-with-unrestricted-read/create/delete-permission-on-buckets-and-objects-1",
    "page": "Readme",
    "title": "Example 2: Bucket store with unrestricted read/create/delete permission on buckets and objects",
    "category": "section",
    "text": "using LocalDiskObjectStores\n\n# Create store\nstore = LocalDiskObjectStore(\"/tmp/rootbucket\")\nsetpermission!(store, :bucket, Permission(true, true, true, true))\nsetpermission!(store, :object, Permission(true, true, true, true))\n\n# Root bucket\nlistcontents(store)   # Root bucket doesn\'t yet exist\ncreatebucket!(store)  # Success (returns nothing). Root bucket created\nlistcontents(store)   # Root bucket is empty\n\ncreatebucket!(store, \"../xxx\")  # Failed (returns error msg) because the bucket root/../xxx is outside the root bucket\n\n# Bucket root/xxx\ncreatebucket!(store, \"xxx\")  # Success (returns nothing)\nlistcontents(store)          # Lists the contents of the root bucket\ncreatebucket!(store, \"xxx\")  # Failed (returns error msg) because the bucket already exists\n\n# Object root/xxx/myobject\nstore[\"xxx/myobject\"] = \"My first object\" # Success (returns value)\nlistcontents(store, \"xxx\")                # Lists the contents of the xxx bucket\nlistcontents(store, \"xxx/myobject\")       # Failed (returns nothing) because we can only list the contents of buckets, not objects\nString(store[\"xxx/myobject\"])             # Get myobject\'s value\nstore[\"xxx/my_nonexistent_object\"]        # Returns nothing because the object does not exist\n\nstore[\"xxx/yyy/newobject\"] = \"Some new value\"  # Fails (returns error msg) because containing bucket doesn\'t exist\nisobject(store, \"xxx/yyy/newobject\")\n\ncreatebucket!(store, \"xxx/yyy\")  # Success (returns nothing), bucket yyy created inside bucket xxx\nlistcontents(store, \"xxx\")       # Bucket xxx contains the object myobject and the bucket yyy\nlistcontents(store, \"xxx/yyy\")   # Empty vector...bucket exists and is empty\n\ndeletebucket!(store, \"xxx\")      # Failed (returns error msg) because the bucket is not empty\ndelete!(store, \"xxx/myobject\")   # Success (returns nothing)\ndeletebucket!(store, \"xxx/yyy\")  # Success (returns nothing)\ndeletebucket!(store, \"xxx\")      # Success (returns nothing) because the bucket was empty\nlistcontents(store)\n\n# Clean up\nrm(\"/tmp/rootbucket\")"
},

{
    "location": "autodocs/#LocalDiskObjectStores._create!-Tuple{LocalDiskObjectStore,Bucket}",
    "page": "Docstrings",
    "title": "LocalDiskObjectStores._create!",
    "category": "method",
    "text": "Create bucket. If successful return nothing, else return an error message as a String.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LocalDiskObjectStores._create!-Tuple{LocalDiskObjectStore,Object,Any}",
    "page": "Docstrings",
    "title": "LocalDiskObjectStores._create!",
    "category": "method",
    "text": "Create object. If successful return nothing, else return an error message as a String.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LocalDiskObjectStores._delete!-Tuple{LocalDiskObjectStore,Bucket}",
    "page": "Docstrings",
    "title": "LocalDiskObjectStores._delete!",
    "category": "method",
    "text": "Delete bucket. If successful return nothing, else return an error message as a String.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LocalDiskObjectStores._delete!-Tuple{LocalDiskObjectStore,Object}",
    "page": "Docstrings",
    "title": "LocalDiskObjectStores._delete!",
    "category": "method",
    "text": "Delete object. If successful return nothing, else return an error message as a String.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LocalDiskObjectStores._read-Tuple{LocalDiskObjectStore,Bucket}",
    "page": "Docstrings",
    "title": "LocalDiskObjectStores._read",
    "category": "method",
    "text": "Read bucket. If successful return (true, value), else return (false, errormessage::String).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LocalDiskObjectStores._read-Tuple{LocalDiskObjectStore,Object}",
    "page": "Docstrings",
    "title": "LocalDiskObjectStores._read",
    "category": "method",
    "text": "Read object. If successful return (true, value), else return (false, errormessage::String).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [LocalDiskObjectStores]\nOrder = [:type, :function]"
},

]}
