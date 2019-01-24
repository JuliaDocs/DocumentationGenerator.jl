var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#JuliaWebAPI.jl-1",
    "page": "Readme",
    "title": "JuliaWebAPI.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status)Facilitates wrapping Julia functions into a remote callable API via message queues (e.g. ZMQ, RabbitMQ) and HTTP.It can plug in to a different messaging infrastructure through an implementation of transport (AbstractTransport) and message format (AbstractMsgFormat). Multiple instances of the front (HTTP API) and back (Julia methods) end can help scale an application. Bundled with the package are implementations for:ZMQTransport: use ZMQ for transport\nInProcTransport: use Julia Channel for transport within the same process\nJSONMsgFormat: JSON as message format\nSerializedMsgFormat: Julia serialization as message format\nDictMsgFormat: Julia Dict as message format, for use within the same processCombined with a HTTP/Messaging frontend (like JuliaBox), it helps deploy Julia packages and code snippets as hosted, auto-scaling HTTP APIs.Some amount of basic request filtering and pre-processing is possible by registering a pre-processor with the HTTP frontend. The pre-processor is run at the HTTP server side, where it has access to the complete request. It can examine headers and data and take decision whether to allow calling the service or respond directly and immediately. It can also rewrite the request before passing it on to the service.A pre-processor can be used to implement features like authentication, request rewriting and such. See example below."
},

{
    "location": "#Example-Usage-1",
    "page": "Readme",
    "title": "Example Usage",
    "category": "section",
    "text": "Create a file srvr.jl with the following code# Load required packages\nusing JuliaWebAPI\n\n# Define functions testfn1 and testfn2 that we shall expose\nfunction testfn1(arg1, arg2; narg1=\"1\", narg2=\"2\")\n    return (parse(Int, arg1) * parse(Int, narg1)) + (parse(Int, arg2) * parse(Int, narg2))\nend\n\ntestfn2(arg1, arg2; narg1=\"1\", narg2=\"2\") = testfn1(arg1, arg2; narg1=narg1, narg2=narg2)\n\n# Expose testfn1 and testfn2 via a ZMQ listener\nprocess(\n    JuliaWebAPI.create_responder([\n        (testfn1, true),\n        (testfn2, false)\n    ], \"tcp://127.0.0.1:9999\", true, \"\")\n)Start the server process in the background. This process will run the ZMQ listener.julia srvr.jl &Then, on a Julia REPL, run the following codeusing JuliaWebAPI   #Load package\n\n#Create the ZMQ client that talks to the ZMQ listener above\nconst apiclnt = APIInvoker(\"tcp://127.0.0.1:9999\");\n\n#Starts the HTTP server in current process\nrun_http(apiclnt, 8888)Then, on your browser, navigate to http://localhost:8888/testfn1/4/5?narg1=6&narg2=4This will return the following JSON response to your browser, which is the result of running the testfn1 function defined above: {\"data\"=>44,\"code\"=>0}Example of an authentication filter implemented using a pre-processor:function auth_preproc(req::HTTP.Request)\n    if !validate(req)\n        return HTTP.Response(401)\n    end\n    return nothing\nend\nrun_http(apiclnt, 8888, auth_preproc)"
},

{
    "location": "autodocs/#JuliaWebAPI.APIInvoker",
    "page": "Docstrings",
    "title": "JuliaWebAPI.APIInvoker",
    "category": "type",
    "text": "APIInvoker holds the transport and format used for a remote api call. This method creates an APIInvoker over ZMQ transport using JSON message format. (provided for backward compatibility)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JuliaWebAPI.APIInvoker",
    "page": "Docstrings",
    "title": "JuliaWebAPI.APIInvoker",
    "category": "type",
    "text": "APIInvoker holds the transport and format used for a remote api call.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JuliaWebAPI.APIResponder",
    "page": "Docstrings",
    "title": "JuliaWebAPI.APIResponder",
    "category": "type",
    "text": "APIResponder holds the transport and format used for data exchange and the endpoint specifications.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JuliaWebAPI.APIResponder",
    "page": "Docstrings",
    "title": "JuliaWebAPI.APIResponder",
    "category": "type",
    "text": "APIResponder holds the transport and format used for data exchange and the endpoint specifications. This method creates an APIResponder over ZMQ transport using JSON message format. (provided for backward compatibility)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JuliaWebAPI.DictMsgFormat",
    "page": "Docstrings",
    "title": "JuliaWebAPI.DictMsgFormat",
    "category": "type",
    "text": "Intermediate format that is just a Dict. No serialization. A Dict with cmd (string), args (array), vargs (dict).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JuliaWebAPI.InProcTransport",
    "page": "Docstrings",
    "title": "JuliaWebAPI.InProcTransport",
    "category": "type",
    "text": "Transport layer over in-process Channels\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JuliaWebAPI.JSONMsgFormat",
    "page": "Docstrings",
    "title": "JuliaWebAPI.JSONMsgFormat",
    "category": "type",
    "text": "Intermediate format based on JSON. A JSON object with cmd (string), args (array), vargs (dict).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JuliaWebAPI.SerializedMsgFormat",
    "page": "Docstrings",
    "title": "JuliaWebAPI.SerializedMsgFormat",
    "category": "type",
    "text": "Intermediate format based on Julia serialization. A dict with cmd (string), args (array), vargs (dict).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JuliaWebAPI.ZMQTransport",
    "page": "Docstrings",
    "title": "JuliaWebAPI.ZMQTransport",
    "category": "type",
    "text": "Transport layer over ZMQ sockets\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JuliaWebAPI.apicall-Union{Tuple{F}, Tuple{T}, Tuple{APIInvoker{T,F},Any,Vararg{Any,N} where N}} where F<:AbstractMsgFormat where T<:AbstractTransport",
    "page": "Docstrings",
    "title": "JuliaWebAPI.apicall",
    "category": "method",
    "text": "Calls a remote api cmd with args... and data.... The response is formatted as specified by the formatter specified in conn.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JuliaWebAPI.fnresponse-Tuple{AbstractMsgFormat,Any}",
    "page": "Docstrings",
    "title": "JuliaWebAPI.fnresponse",
    "category": "method",
    "text": "extract and return the response data as a direct function call would have returned but throw error if the call was not successful.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JuliaWebAPI.httpresponse-Tuple{AbstractMsgFormat,Any}",
    "page": "Docstrings",
    "title": "JuliaWebAPI.httpresponse",
    "category": "method",
    "text": "construct an HTTP Response object from the API response\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JuliaWebAPI.process-Tuple{APIResponder}",
    "page": "Docstrings",
    "title": "JuliaWebAPI.process",
    "category": "method",
    "text": "start processing as a server\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JuliaWebAPI.register-Tuple{APIResponder,Function}",
    "page": "Docstrings",
    "title": "JuliaWebAPI.register",
    "category": "method",
    "text": "Register a function as API call. TODO: validate method belongs to module?\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JuliaWebAPI.call_api-Tuple{APISpec,APIResponder,Any,Dict{Symbol,Any}}",
    "page": "Docstrings",
    "title": "JuliaWebAPI.call_api",
    "category": "method",
    "text": "call the actual API method, and send the return value back as response\n\n\n\n\n\n"
},

{
    "location": "autodocs/#JuliaWebAPI.respond-Tuple{APIResponder,Int64,Dict,Any}",
    "page": "Docstrings",
    "title": "JuliaWebAPI.respond",
    "category": "method",
    "text": "send a response over the transport in the specified format\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [JuliaWebAPI]\nOrder = [:type, :function]"
},

]}
