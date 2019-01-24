var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#GoogleCloudObjectStores-1",
    "page": "Readme",
    "title": "GoogleCloudObjectStores",
    "category": "section",
    "text": "This package defines an ObjectStore that uses Google Cloud Storage as the storage back-end.NOTE:Google Cloud Storage does not allow the creation of buckets within buckets; buckets can contain only objects.\nTherefore a GoogleCloudObjectStore does not allow specification of a root bucket.\nBucket names must be unique across your Google Cloud Platform (GCP) project.\nSome bucket names are rejected by GCP anyway, such as \"xxx\"."
},

{
    "location": "#Example-1:-Bucket-store-with-read-only-permission-1",
    "page": "Readme",
    "title": "Example 1: Bucket store with read-only permission",
    "category": "section",
    "text": "using Dates\nusing GoogleCloudObjectStores\n\n# Create store\nstore = GoogleCloudObjectStore(\"my_gcs_credentials.json\")\nlistcontents(store)   # Returns nothing. Store doesn\'t have read permission\nsetpermission!(store, :bucket, Permission(false, true, false, false))  # cRud (read-only) permission for all buckets within the root bucket\nsetpermission!(store, :object, Permission(false, true, false, false))  # cRud (read-only) permission for all objects within the root bucket\nlistcontents(store)   # A list of all buckets in the store\n\n# Bucket abc123foo\ncreatebucket!(store, \"abc123foo\")  # Fails (returns error message) because the store has no create permission\n\n# Add temporary CRUD permission for bucket abc123foo\nexpiry = now() + Second(60)  # Set permission expiry for 60 seconds\nsetpermission!(store, \"abc123foo\", Permission(true, true, true, true, expiry))\ncreatebucket!(store, \"abc123foo\")\ncreatebucket!(store, \"abc123foozzz\")  # Fails (returns error message) because the store has no create permission for this bucket\nlistcontents(store)\nisbucket(store, \"abc123foo\")  # Bucket now exists\nisobject(store, \"abc123foo\")  # \"abc123foo\" is a bucket not an object\n\n# Object abc123foo/myobject\nstore[\"abc123foo/myobject\"] = \"My first object\"  # No-op, store doesn\'t have create permission\nisobject(store, \"abc123foo/myobject\")            # \"abc123foo/myobject\" doesn\'t exist\n\n# Add temporary create permission for objects in bucket abc123foo\nsetpermission!(store, r\"^abc123foo/.+\", Permission(true, true, true, true, expiry))\nstore[\"abc123foo/myobject\"] = \"My object\"\nisobject(store, \"abc123foo/myobject\")  # \"abc123foo/myobject\" now exists\nstore[\"abc123foo/myobject\"]\nstore[\"abc123foo/myobject\"] = (value=\"Some new value\", mimetype=\"application/json\")  # An alternative way to create objects\nstore[\"abc123foo/myobject\"]\ndelete!(store, \"abc123foo/myobject\")\nisobject(store, \"abc123foo/myobject\")  # \"abc123foo/myobject\" no longer exists\ncreatebucket!(store, \"zzz\")            # Failed (returns error msg) because store has no create permission for other buckets/objects\n\n# Let permission expire\nsleep(max(0, convert(Int, Dates.value(expiry - now())) / 1000))  # Sleep until permission expires\nstore[\"abc123foo/myobject\"] = \"My first object\"  # No-op, store no longer has create permission\nisobject(store, \"abc123foo/myobject\")            # \"abc123foo/myobject\" doesn\'t exist because the store\'s create permission expired\n\n# Clean up\nsetpermission!(store, \"abc123foo\", Permission(false, true, false, true))   # Allow delete permission\ndeletebucket!(store, \"abc123foo\")\nsetpermission!(store, \"abc123foo\", Permission(false, true, false, false))  # Revert to read-only permission\nlistcontents(store)"
},

{
    "location": "#Example-2:-Bucket-store-with-unrestricted-read/create/delete-permission-on-buckets-and-objects-1",
    "page": "Readme",
    "title": "Example 2: Bucket store with unrestricted read/create/delete permission on buckets and objects",
    "category": "section",
    "text": "using GoogleCloudObjectStores\n\n# Create store\nstore = GoogleCloudObjectStore(\"my_gcs_credentials.json\")\nsetpermission!(store, :bucket, Permission(true, true, true, true))\nsetpermission!(store, :object, Permission(true, true, true, true))\nlistcontents(store)   # A list of all buckets in the store\n\n# Bucket abc123foo\ncreatebucket!(store, \"../abc123foo\")  # Failed (returns error msg) because the bucket name is invalid\ncreatebucket!(store, \"abc123foo\")     # Success (returns nothing)\nlistcontents(store)                   # The list of all buckets in the store now contains \"abc123foo\"\nisbucket(store, \"abc123foo\")\ncreatebucket!(store, \"abc123foo\")     # Failed (returns error msg) because the bucket already exists\n\n# Object abc123foo/myobject\nstore[\"abc123foo/myobject\"] = \"My first object\" # Success (returns value)\nlistcontents(store, \"abc123foo\")                # Lists the contents of the abc123foo bucket\nlistcontents(store, \"abc123foo/myobject\")       # Failed (returns nothing) because we can only list the contents of buckets, not objects\nstore[\"abc123foo/myobject\"]                     # Get myobject\'s value\nstore[\"abc123foo/my_nonexistent_object\"]        # Returns nothing because the object does not exist\nisobject(store, \"abc123foo/myobject\")\nisobject(store, \"abc123foo/my_nonexistent_object\")\n\ndeletebucket!(store, \"abc123foo\")     # Failed (returns error msg) because the bucket is not empty\ndelete!(store, \"abc123foo/myobject\")  # Success (returns nothing)\ndeletebucket!(store, \"abc123foo\")     # Success (returns nothing) because the bucket was empty\nlistcontents(store)"
},

{
    "location": "autodocs/#GoogleCloudObjectStores._create!-Tuple{GoogleCloudObjectStore,Bucket}",
    "page": "Docstrings",
    "title": "GoogleCloudObjectStores._create!",
    "category": "method",
    "text": "Create bucket. If successful return nothing, else return an error message as a String.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GoogleCloudObjectStores._create!-Tuple{GoogleCloudObjectStore,Object,Any}",
    "page": "Docstrings",
    "title": "GoogleCloudObjectStores._create!",
    "category": "method",
    "text": "Create object. If successful return nothing, else return an error message as a String.\n\nv is either:\n\nNamedTuple: (mimetype=\"application/json\", value=\"some value\")\nAn arbitrary value\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GoogleCloudObjectStores._delete!-Tuple{GoogleCloudObjectStore,Bucket}",
    "page": "Docstrings",
    "title": "GoogleCloudObjectStores._delete!",
    "category": "method",
    "text": "Delete bucket. If successful return nothing, else return an error message as a String.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GoogleCloudObjectStores._delete!-Tuple{GoogleCloudObjectStore,Object}",
    "page": "Docstrings",
    "title": "GoogleCloudObjectStores._delete!",
    "category": "method",
    "text": "Delete object. If successful return nothing, else return an error message as a String.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GoogleCloudObjectStores._read-Tuple{GoogleCloudObjectStore,Bucket}",
    "page": "Docstrings",
    "title": "GoogleCloudObjectStores._read",
    "category": "method",
    "text": "List the contents of a specific bucket. If successful return (true, value), else return (false, errormessage::String).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GoogleCloudObjectStores._read-Tuple{GoogleCloudObjectStore,Object}",
    "page": "Docstrings",
    "title": "GoogleCloudObjectStores._read",
    "category": "method",
    "text": "Read object. If successful return (true, value), else return (false, errormessage::String).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [GoogleCloudObjectStores]\nOrder = [:type, :function]"
},

]}
