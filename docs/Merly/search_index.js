var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Merly.jl-1",
    "page": "Readme",
    "title": "Merly.jl",
    "category": "section",
    "text": "<p align=\"center\"> <strong>Micro framework for web programming in Julia..</strong> <br><br> <a href=\"https://travis-ci.org/codeneomatrix/Merly.jl\"><img src=\"https://travis-ci.org/codeneomatrix/Merly.jl.svg?branch=master\"></a> <a href=\"https://codecov.io/gh/codeneomatrix/Merly.jl\">   <img src=\"https://codecov.io/gh/codeneomatrix/Merly.jl/branch/master/graph/badge.svg\" /> </a> &nbsp;&nbsp <a href=\"https://pkg.julialang.org/detail/Merly\"><img src=\"https://pkg.julialang.org/badges/Merly_0.4.svg\"></a>  &nbsp;&nbsp; <a href=\"https://raw.githubusercontent.com/codeneomatrix/Merly.jl/master/LICENSE.md\"><img src=\"https://img.shields.io/badge/license-MIT-blue.svg\"></a>"
},

{
    "location": "#About-1",
    "page": "Readme",
    "title": "About",
    "category": "section",
    "text": "Merly is a micro framework for declaring routes and handling requests. Quickly creating web applications in Julia with minimal effort."
},

{
    "location": "#Roadmap-1",
    "page": "Readme",
    "title": "Roadmap",
    "category": "section",
    "text": ""
},

{
    "location": "#Version-0.0.3-1",
    "page": "Readme",
    "title": "Version 0.0.3",
    "category": "section",
    "text": "[x] adding the debug option\n[x] optimizing routes\n[x] refactor notfount, cors, bodyBelow are some of the features that are planned to be added in future versions of Merly.jl once version 0.7 of the language is released."
},

{
    "location": "#All-contributions-and-suggestions-are-welcome-!!!!-1",
    "page": "Readme",
    "title": "All contributions and suggestions are welcome !!!!",
    "category": "section",
    "text": ""
},

{
    "location": "#Version-0.1.0-1",
    "page": "Readme",
    "title": "Version 0.1.0",
    "category": "section",
    "text": "[x] Julia version 0.7 syntax update"
},

{
    "location": "#Version-0.2.0-1",
    "page": "Readme",
    "title": "Version 0.2.0",
    "category": "section",
    "text": "[x] Julia version 1.0 syntax update\n[x] Update and refactor"
},

{
    "location": "#Version-0.2.2-1",
    "page": "Readme",
    "title": "Version 0.2.2",
    "category": "section",
    "text": "[ ] Implementation of a websocket module"
},

{
    "location": "#Version-0.2.3-1",
    "page": "Readme",
    "title": "Version 0.2.3",
    "category": "section",
    "text": "[ ] Performance improvement"
},

{
    "location": "#Installing-1",
    "page": "Readme",
    "title": "Installing",
    "category": "section",
    "text": "Pkg> add Diana                                             #Release\npkg> add Diana#master                                      #Development"
},

{
    "location": "#Example-1",
    "page": "Readme",
    "title": "Example",
    "category": "section",
    "text": "using Merly\n\nu=\"hello\"\n\nserver = Merly.app()\n\n@page \"/\" \"Hello World!\"\n@page \"/hola/:usr>\" \"<b>Hello {{usr}}!</b>\"\n\n@route GET \"/get/:data>\" begin\n  \"get this back: {{data}}\"\nend\n\n@route POST \"/post\" begin\n  res.body = \"I did something!\"\nend\n\n@route POST|PUT|DELETE \"/\" begin\n  println(\"params: \",req.params)\n  println(\"query: \",req.query)\n  println(\"body: \",req.body)\n\n  res.headers[\"Content-Type\"]= \"text/plain\"\n\n  \"I did something!\"\nend\n\nGet(\"/data\", (req,res)->(begin\n  res.headers[\"Content-Type\"]= \"text/plain\"\n  u*\"data\"\nend))\n\n\nPost(\"/data\", (req,res)->(begin\n  println(\"params: \",req.params)\n  println(\"query: \",req.query)\n  println(\"body: \",req.body)\n  res.headers[\"Content-Type\"]= \"text/plain\"\n  global u=\"bye\"\n  \"I did something!\"\nend))\n\n\nserver.start(Dict(\"host\" => \"127.0.0.1\",\"port\" => 8000))\n"
},

{
    "location": "#Features-available-in-the-current-release-1",
    "page": "Readme",
    "title": "Features available in the current release",
    "category": "section",
    "text": ""
},

{
    "location": "#Data-stored-on-request-(req)-1",
    "page": "Readme",
    "title": "Data stored on request (req)",
    "category": "section",
    "text": "  query   # data from the query url\n  params  # data from the regular expresion\n  body    # body of the request in dict or plane text\n  version # the protocol version\n  headers # the headers sent by the client"
},

{
    "location": "#Data-stored-on-response-(req)-1",
    "page": "Readme",
    "title": "Data stored on response (req)",
    "category": "section",
    "text": "  status\n  headers\n  body"
},

{
    "location": "#Parameters-dictionary-1",
    "page": "Readme",
    "title": "Parameters dictionary",
    "category": "section",
    "text": "@route GET \"/get/:data>\" begin\n  # matches \"GET /get/foo\" and \"GET /get/bar\"\n  # not accept special symbols (!,#,$,etc)\n  # req.params[\"data\"] is \'foo\' or \'bar\'\n  \"get this back: \"*req.params[\"data\"]\nend\n\n# it is possible to use regular expressions, enclosing them always between \'(\' \')\'\n@route GET \"/regex/(\\\\w+\\\\d+)\" begin\n  # matches \"GET /regex/test1\" and \"GET /regex/test125\"\n  # req.params[1] is \'test1\' or \'test125\'\n   \"datos $(req.params[1])\"\nend"
},

{
    "location": "#url-query-dictionary-1",
    "page": "Readme",
    "title": "url query dictionary",
    "category": "section",
    "text": "@route POST|PUT|DELETE \"/\" begin\n  res.headers[\"Content-Type\"]= \"text/plain\"\n  # matches \"POST /?title=foo&author=bar\"\n  title = req.query[\"title\"]\n  author = req.query[\"author\"]\n  \"I did something!\"\nend"
},

{
    "location": "#Dictionary-of-body-1",
    "page": "Readme",
    "title": "Dictionary of body",
    "category": "section",
    "text": "Payload{\"data1\":\"Hello\"}@route POST|PUT|DELETE \"/\" begin\n  res.headers[\"Content-Type\"]= \"text/plain\"\n  res.body = \"Payload data \"*req.body[\"data1\"]\nendPayload<Data>\n  <Data1>Hello World!</Data1>\n</Data>@route POST|PUT|DELETE \"/\" begin\n  res.headers[\"Content-Type\"]= \"text/plain\"\n  \"Payload data \"*req.body[\"Data\"][\"Data1\"]\nend"
},

{
    "location": "#Reply-JSON-1",
    "page": "Readme",
    "title": "Reply JSON",
    "category": "section",
    "text": "@route POST|PUT|DELETE \"/\" begin\n  res.headers[\"Content-Type\"]=\"application/json\"\n  res.status = 200 #optional\n  \"{\\\"data1\\\":2,\\\"data2\\\":\\\"t\\\"}\"\nend\nor@route POST|PUT|DELETE \"/\" begin\n  res.headers[\"Content-Type\"]=\"application/json\"\n  info=Dict()\n  info[\"data1\"]=2\n  info[\"data2\"]=\"t\"\n  res.status = 200 #optional\n  res.body = JSON.json(info)\nend\n"
},

{
    "location": "#Reply-XML-1",
    "page": "Readme",
    "title": "Reply XML",
    "category": "section",
    "text": "@route POST|PUT|DELETE \"/\" begin\n  res.headers[\"Content-Type\"]=\"application/xml\"\n\n  \"<ListAllMyBucketsResult>\n    <Buckets>\n      <Bucket><Name>quotes</Name><CreationDate>2006-02-03T16:45:09.000Z</CreationDate></Bucket>\n      <Bucket><Name>samples</Name><CreationDate>2006-02-03T16:41:58.000Z</CreationDate></Bucket>\n    </Buckets>\n  </ListAllMyBucketsResult>\"\nend\n"
},

{
    "location": "#Reply-File-1",
    "page": "Readme",
    "title": "Reply File",
    "category": "section",
    "text": "@page \"/\" File(\"Index.html\")"
},

{
    "location": "#Web-server-1",
    "page": "Readme",
    "title": "Web server",
    "category": "section",
    "text": "# By default, the location where to look for the files that will\n# be exposed will be the same where the script is, if the files are\n# not found in that site, the location of the files can be established\n# with the following instruction.\nserver.webserverpath(\"C:\\\\path\")  # example in windows\nPossible values of webserverfiles\n\nserver.webserverfiles(\"*\") #\n \"*\"               Load all the files located in the path, except what started with \".\"\n \"jl\",\"clj|jl|py\"  Extension in files that will not be exposed"
},

{
    "location": "#Not-found-message-1",
    "page": "Readme",
    "title": "Not found message",
    "category": "section",
    "text": "server.notfound(\"<!DOCTYPE html>\n<html>\n<head><title>Not found</title></head>\n<body><h1>404, Not found</h1></body>\n</html>\")server.notfound(\"notfound.html\")"
},

{
    "location": "#CORS-1",
    "page": "Readme",
    "title": "CORS",
    "category": "section",
    "text": "server.useCORS(true)"
},

{
    "location": "#Headers-always-1",
    "page": "Readme",
    "title": "Headers always",
    "category": "section",
    "text": "You can add headers that will always be returned in each requestserver.headersalways(\"Strict-Transport-Security\",\"max-age=10886400; includeSubDomains; preload\")"
},

{
    "location": "#Bonus-1",
    "page": "Readme",
    "title": "Bonus",
    "category": "section",
    "text": "If you forgot the MIME type of a file you can use the next instructionres.headers[\"Content-Type\"]= mimetypes[\"file extension\"]the file mimetypes.jl was taken from https://github.com/JuliaWeb/HttpServer.jl  guys are great"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Merly]\nOrder = [:type, :function]"
},

]}
