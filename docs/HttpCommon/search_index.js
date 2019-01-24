var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#HttpCommon.jl-1",
    "page": "Readme",
    "title": "HttpCommon.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov.io)(Image: HttpCommon) (Image: HttpCommon)Installation: julia> Pkg.add(\"HttpCommon\")This package provides types and helper functions for dealing with the HTTP protocol in Julia:Types to represent Headers, Requests, Cookies, and Responses\nA dictionary of STATUS_CODES that maps HTTP codes to descriptions\nUtility functions  escapeHTMLand  parsequerystring"
},

{
    "location": "#HTTP-Types-1",
    "page": "Readme",
    "title": "HTTP Types",
    "category": "section",
    "text": ""
},

{
    "location": "#Headers-1",
    "page": "Readme",
    "title": "Headers",
    "category": "section",
    "text": "Headers represents the header fields for an HTTP request, and is type alias for Dict{AbstractString,AbstractString}. There is a default constructor, headers, that produces a reasonable default set of headers:Dict( \"Server\"           => \"Julia/$VERSION\",\n      \"Content-Type\"     => \"text/html; charset=utf-8\",\n      \"Content-Language\" => \"en\",\n      \"Date\"             => Dates.format(now(Dates.UTC), Dates.RFC1123Format) )"
},

{
    "location": "#Request-1",
    "page": "Readme",
    "title": "Request",
    "category": "section",
    "text": "A Request represents an HTTP request sent by a client to a server. It has five fields:method: an HTTP methods string (e.g. \"GET\")\nresource: the resource requested (e.g. \"/hello/world\")\nheaders: see Headers above\ndata: the data in the request as a vector of bytes\nuri: additional details, normally not used"
},

{
    "location": "#Cookie-1",
    "page": "Readme",
    "title": "Cookie",
    "category": "section",
    "text": "A Cookie represents an HTTP cookie. It has three fields: name and value are strings, and attrs is dictionary of pairs of strings."
},

{
    "location": "#Response-1",
    "page": "Readme",
    "title": "Response",
    "category": "section",
    "text": "A Response represents an HTTP response sent to a client by a server. It has six fields:status: HTTP status code (see STATUS_CODES) [default: 200]\nheaders: Headers [default: HttpCommmon.headers()]\ncookies: Dictionary of strings => Cookies\ndata: the request data as a vector of bytes [default: UInt8[]]\nfinished: true if the Reponse is valid, meaning that it can be converted to an actual HTTP response [default: false]\nrequests: the history of requests that generated the response. Can be greater than one if a redirect was involved.Response has many constructors - use methods(Response) for full list."
},

{
    "location": "#Constants-1",
    "page": "Readme",
    "title": "Constants",
    "category": "section",
    "text": ""
},

{
    "location": "#STATUS_CODES-1",
    "page": "Readme",
    "title": "STATUS_CODES",
    "category": "section",
    "text": "STATUS_CODES is a dictionary (Int => AbstractString) that maps all the status codes defined in RFC\'s to their descriptions, e.g.STATUS_CODES[200] # => \"OK\"\nSTATUS_CODES[404] # => \"Not Found\"\nSTATUS_CODES[418] # => \"I\'m a teapot\"\nSTATUS_CODES[500] # => \"Internal Server Error\""
},

{
    "location": "#Utility-functions-1",
    "page": "Readme",
    "title": "Utility functions",
    "category": "section",
    "text": ""
},

{
    "location": "#escapeHTML(i::AbstractString)-1",
    "page": "Readme",
    "title": "escapeHTML(i::AbstractString)",
    "category": "section",
    "text": "Returns a string with special HTML characters escaped: &, <, >, \", \'"
},

{
    "location": "#parsequerystring(query::AbstractString)-1",
    "page": "Readme",
    "title": "parsequerystring(query::AbstractString)",
    "category": "section",
    "text": "Convert a valid querystring to a Dict:q = \"foo=bar&baz=%3Ca%20href%3D%27http%3A%2F%2Fwww.hackershool.com%27%3Ehello%20world%21%3C%2Fa%3E\"\nparsequerystring(q)\n# Dict{String,String} with 2 entries:\n#   \"baz\" => \"<a href=\'http://www.hackershool.com\'>hello world!</a>\"\n#   \"foo\" => \"bar\":::::::::::::\n::         ::\n:: Made at ::\n::         ::\n:::::::::::::\n     ::\nHacker School\n:::::::::::::"
},

{
    "location": "autodocs/#HttpCommon.Cookie",
    "page": "Docstrings",
    "title": "HttpCommon.Cookie",
    "category": "type",
    "text": "A Cookie represents an HTTP cookie. It has three fields: name and value are strings, and attrs is dictionary of pairs of strings.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HttpCommon.Headers",
    "page": "Docstrings",
    "title": "HttpCommon.Headers",
    "category": "type",
    "text": "Headers represents the header fields for an HTTP request.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HttpCommon.Request",
    "page": "Docstrings",
    "title": "HttpCommon.Request",
    "category": "type",
    "text": "A Request represents an HTTP request sent by a client to a server. It has five fields:\n\nmethod: an HTTP methods string (e.g. \"GET\")\nresource: the resource requested (e.g. \"/hello/world\")\nheaders: see Headers above\ndata: the request data as a vector of bytes\nuri: additional details, normally not used\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HttpCommon.Response",
    "page": "Docstrings",
    "title": "HttpCommon.Response",
    "category": "type",
    "text": "A Response represents an HTTP response sent to a client by a server. It has six fields:\n\nstatus: HTTP status code (see STATUS_CODES) [default: 200]\nheaders: Headers [default: HttpCommmon.headers()]\ncookies: Dictionary of strings => Cookies\ndata: the request data as a vector of bytes [default: UInt8[]]\nfinished: true if the Reponse is valid, meaning that it can be converted to an actual HTTP response [default: false]\nrequests: the history of requests that generated the response. Can be greater than one if a redirect was involved.\n\nResponse has many constructors - use methods(Response) for full list.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HttpCommon.escapeHTML-Tuple{String}",
    "page": "Docstrings",
    "title": "HttpCommon.escapeHTML",
    "category": "method",
    "text": "escapeHTML(i::String)\n\nReturns a string with special HTML characters escaped: &, <, >, \", \'\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HttpCommon.parsequerystring-Union{Tuple{T}, Tuple{T}} where T<:AbstractString",
    "page": "Docstrings",
    "title": "HttpCommon.parsequerystring",
    "category": "method",
    "text": "parsequerystring(query::String)\n\nConvert a valid querystring to a Dict:\n\nq = \"foo=bar&baz=%3Ca%20href%3D%27http%3A%2F%2Fwww.hackershool.com%27%3Ehello%20world%21%3C%2Fa%3E\"\nparsequerystring(q)\n# Dict{String,String} with 2 entries:\n#   \"baz\" => \"<a href=\'http://www.hackershool.com\'>hello world!</a>\"\n#   \"foo\" => \"bar\"\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [HttpCommon]\nOrder = [:type, :function]"
},

]}
