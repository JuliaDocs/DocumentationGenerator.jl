var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#AWSS3-1",
    "page": "Readme",
    "title": "AWSS3",
    "category": "section",
    "text": "AWS S3 Interface for Julia(Image: Build Status)Documentationusing AWSS3\n\naws = AWSCore.aws_config()\n\ns3_create_bucket(aws, \"my.bucket\")\ns3_enable_versioning(aws, \"my.bucket\")\n\ns3_put(aws, \"my.bucket\", \"key\", \"Hello!\")\nprintln(s3_get(aws, \"my.bucket\", \"key\"))"
},

{
    "location": "autodocs/#AWSS3.s3_arn-Tuple{Any}",
    "page": "Docstrings",
    "title": "AWSS3.s3_arn",
    "category": "method",
    "text": "s3_arn(resource)\ns3_arn(bucket,path)\n\nAmazon Resource Name for S3 resource or bucket and path.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSS3.s3_copy-Tuple{Dict{Symbol,Any},Any,Any}",
    "page": "Docstrings",
    "title": "AWSS3.s3_copy",
    "category": "method",
    "text": "s3_copy([::AWSConfig], bucket, path; to_bucket=bucket, to_path=path)\n\nPUT Object - Copy\n\nOptional Arguments\n\nmetadata::Dict=; optional x-amz-meta- headers.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSS3.s3_create_bucket-Tuple{Dict{Symbol,Any},Any}",
    "page": "Docstrings",
    "title": "AWSS3.s3_create_bucket",
    "category": "method",
    "text": "s3_create_bucket([:AWSConfig], bucket)\n\nPUT Bucket\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSS3.s3_delete-Tuple{Dict{Symbol,Any},Any,Any}",
    "page": "Docstrings",
    "title": "AWSS3.s3_delete",
    "category": "method",
    "text": "s3_delete([::AWSConfig], bucket, path; [version=]\n\nDELETE Object\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSS3.s3_delete_bucket-Tuple{Dict{Symbol,Any},Any}",
    "page": "Docstrings",
    "title": "AWSS3.s3_delete_bucket",
    "category": "method",
    "text": "s3_delete_bucket([::AWSConfig], \"bucket\")\n\nDELETE Bucket.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSS3.s3_delete_tags",
    "page": "Docstrings",
    "title": "AWSS3.s3_delete_tags",
    "category": "function",
    "text": "s3_delete_tags([::AWSConfig], bucket, [path])\n\nDelete tags from bucket or object (path).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSS3.s3_enable_versioning-Tuple{Dict{Symbol,Any},Any}",
    "page": "Docstrings",
    "title": "AWSS3.s3_enable_versioning",
    "category": "method",
    "text": "s3_enable_versioning([::AWSConfig], bucket)\n\nEnable versioning for bucket.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSS3.s3_exists-Tuple{Dict{Symbol,Any},Any,Any}",
    "page": "Docstrings",
    "title": "AWSS3.s3_exists",
    "category": "method",
    "text": "s3_exists([::AWSConfig], bucket, path [version=])\n\nIs there an object in bucket at path?\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSS3.s3_get-Tuple{Dict{Symbol,Any},Any,Any}",
    "page": "Docstrings",
    "title": "AWSS3.s3_get",
    "category": "method",
    "text": "s3_get([::AWSConfig], bucket, path; <keyword arguments>)\n\nGet Object from path in bucket.\n\nOptional Arguments\n\nversion=: version of object to get.\nretry=true: try again on \"NoSuchBucket\", \"NoSuchKey\"               (common if object was recently created).\nraw=false:  return response as Vector{UInt8}               (by default return type depends on Content-Type header).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSS3.s3_get_file-Tuple{Dict{Symbol,Any},Any,Any,Any}",
    "page": "Docstrings",
    "title": "AWSS3.s3_get_file",
    "category": "method",
    "text": "s3_get_file([::AWSConfig], bucket, path, filename; [version=])\n\nLike s3_get but streams result directly to filename.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSS3.s3_get_meta-Tuple{Dict{Symbol,Any},Any,Any}",
    "page": "Docstrings",
    "title": "AWSS3.s3_get_meta",
    "category": "method",
    "text": "s3getmeta([::AWSConfig], bucket, path; [version=])\n\nHEAD Object\n\nRetrieves metadata from an object without returning the object itself.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSS3.s3_get_tags",
    "page": "Docstrings",
    "title": "AWSS3.s3_get_tags",
    "category": "function",
    "text": "s3_get_tags([::AWSConfig], bucket, [path])\n\nGet tags from bucket or object (path).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSS3.s3_list_buckets",
    "page": "Docstrings",
    "title": "AWSS3.s3_list_buckets",
    "category": "function",
    "text": "s3_list_buckets([::AWSConfig])\n\nList of all buckets owned by the sender of the request.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSS3.s3_list_keys",
    "page": "Docstrings",
    "title": "AWSS3.s3_list_keys",
    "category": "function",
    "text": "s3_list_keys([::AWSConfig], bucket, [path_prefix])\n\nLike s3_list_objects but returns object keys as Vector{String}.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSS3.s3_list_objects",
    "page": "Docstrings",
    "title": "AWSS3.s3_list_objects",
    "category": "function",
    "text": "s3_list_objects([::AWSConfig], bucket, [path_prefix])\n\nList Objects in bucket with optional path_prefix.\n\nReturns Vector{Dict} with keys Key, LastModified, ETag, Size, Owner, StorageClass.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSS3.s3_list_versions",
    "page": "Docstrings",
    "title": "AWSS3.s3_list_versions",
    "category": "function",
    "text": "s3_list_versions([::AWSConfig], bucket, [path_prefix])\n\nList object versions in bucket with optional path_prefix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSS3.s3_purge_versions",
    "page": "Docstrings",
    "title": "AWSS3.s3_purge_versions",
    "category": "function",
    "text": "s3_purge_versions([::AWSConfig], bucket, [path [, pattern]])\n\nDELETE all object versions except for the latest version.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSS3.s3_put",
    "page": "Docstrings",
    "title": "AWSS3.s3_put",
    "category": "function",
    "text": "s3_put([::AWSConfig], bucket, path, data; <keyword arguments>\n\nPUT Object data at path in bucket.\n\nOptional Arguments\n\ndata_type=; Content-Type header.\nencoding=; Content-Encoding header.\nmetadata::Dict=; x-amz-meta- headers.\ntags::Dict=; x-amz-tagging- headers                (see also s3_put_tags and s3_get_tags).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSS3.s3_put_cors-Tuple{Dict{Symbol,Any},Any,Any}",
    "page": "Docstrings",
    "title": "AWSS3.s3_put_cors",
    "category": "method",
    "text": "s3_put_cors([::AWSConfig], bucket, cors_config)\n\nPUT Bucket cors\n\ns3_put_cors(\"my_bucket\", \"\"\"\n    <?xml version=\"1.0\" encoding=\"UTF-8\"?>\n    <CORSConfiguration xmlns=\"http://s3.amazonaws.com/doc/2006-03-01/\">\n        <CORSRule>\n            <AllowedOrigin>http://my.domain.com</AllowedOrigin>\n            <AllowedOrigin>http://my.other.domain.com</AllowedOrigin>\n            <AllowedMethod>GET</AllowedMethod>\n            <AllowedMethod>HEAD</AllowedMethod>\n            <AllowedHeader>*</AllowedHeader>\n            <ExposeHeader>Content-Range</ExposeHeader>\n        </CORSRule>\n    </CORSConfiguration>\n\"\"\"\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSS3.s3_put_tags-Tuple{Dict{Symbol,Any},Any,Dict{String,String}}",
    "page": "Docstrings",
    "title": "AWSS3.s3_put_tags",
    "category": "method",
    "text": "s3_put_tags([::AWSConfig], bucket, [path,] tags::Dict)\n\nPUT tags on bucket or object (path).\n\nSee also tags= option on s3_put.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSS3.s3_sign_url",
    "page": "Docstrings",
    "title": "AWSS3.s3_sign_url",
    "category": "function",
    "text": "s3_sign_url([::AWSConfig], bucket, path, [seconds=3600];\n            [verb=\"GET\"], [content_type=\"application/octet-stream\"])\n\nCreate a pre-signed url for bucket and path (expires after for seconds).\n\nTo create an upload URL use verb=\"PUT\" and set content_type to match the type used in the Content-Type header of the PUT request.\n\nurl = s3_sign_url(\"my_bucket\", \"my_file.txt\"; verb=\"PUT\")\nRequests.put(URI(url), \"Hello!\")\n\nurl = s3_sign_url(\"my_bucket\", \"my_file.txt\";\n                  verb=\"PUT\", content_type=\"text/plain\")\n\nRequests.put(URI(url), \"Hello!\";\n             headers=Dict(\"Content-Type\" => \"text/plain\"))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [AWSS3]\nOrder = [:type, :function]"
},

]}
