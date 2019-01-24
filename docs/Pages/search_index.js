var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Pages.jl-1",
    "page": "Readme",
    "title": "Pages.jl",
    "category": "section",
    "text": "[![][travis-img]][travis-url] [![][appveyor-img]][appveyor-url]This is a package designed to help get started with web APIs and some basic interaction between Julia and a browser."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "To get the latest tagged version, try:pkg> add PagesHowever, this package is still in early development and is likely to change often. To get the latest, try:pkg> add Pages#master"
},

{
    "location": "#Introduction-1",
    "page": "Readme",
    "title": "Introduction",
    "category": "section",
    "text": "To get started, try the following:julia> using Pages\n\njulia> @async Pages.start();\nListening on 0.0.0.0:8000...This starts a server that is listening at http://localhost:8000 and exposes the Endpoint type with a few methods.To create an Endpoint, try:julia> Endpoint(\"/hello\") do request::HTTP.Request\n          \"Hello world\"\n       endThis creates a web page at http://localhost:8000/hello that says Hello world. One nice thing about using Pages is that we can create pages whenever and wherever we want in our Julia code even while the server is running."
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "There are a few examples included.julia> Pages.examples()This will start a server and launch a browser open to a page with links to some simple examples.Current examples include:Plotly - Dynamically insert plotly.js plots into a browser\nRequests - Send GET and POST requests from the browser to Julia and print the contents to the REPL.\nBlank - You can use this for experimemntation, e.g. use Pages.add_library to insert your favorite JavaScript library.You can reconstruct the Plotly example from the Blank Page via:> Pages.add_library(\"/libs/plotly/1.16.1/plotly.min.js\")\n> Pages.add_library(\"/libs/d3/4.2.1/d3.min.js\")\n> Pages.example_plotly()"
},

{
    "location": "#Callbacks-1",
    "page": "Readme",
    "title": "Callbacks",
    "category": "section",
    "text": "Pages comes with a small JavaScript library pages.js that allows communication between Julia and the browser as well as communication between browsers, e.g. chat, using WebSockets.For example, consider the functionfunction add_library(url)\n    name = basename(url)\n    block(name) do\n        Pages.broadcast(\"script\",\"\"\"\n            var script = document.createElement(\"script\");\n            script.charset = \"utf-8\";\n            script.type = \"text/javascript\";\n            script.src = \"$(url)\";\n            script.onload = function() {\n                Pages.notify(\"$(name)\");\n            };\n            document.head.appendChild(script);\n        \"\"\")\n    end\nendThis adds a library to the head of any connected web pages. However, Julia execution is blocked until the JavaScript library is successfully loaded and sends a notification back to Julia via a callback."
},

{
    "location": "#Acknowledgements-1",
    "page": "Readme",
    "title": "Acknowledgements",
    "category": "section",
    "text": "This package benefitted greatly from studying and working with Blink.jl. A lot of the functionality is shared with Blink although Pages does not require Electron and should work with any modern browser.[travis-img]: https://travis-ci.org/EricForgy/Pages.jl.svg?branch=master [travis-url]: https://travis-ci.org/EricForgy/Pages.jl[appveyor-img]: https://ci.appveyor.com/api/projects/status/github/EricForgy/Pages.jl?branch=master&svg=true [appveyor-url]: https://ci.appveyor.com/project/EricForgy/pages-jl"
},

{
    "location": "autodocs/#Pages.add_library-Tuple{Any}",
    "page": "Docstrings",
    "title": "Pages.add_library",
    "category": "method",
    "text": "Add a JS library to the current page from a url.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Pages.block-Tuple{Function,Any}",
    "page": "Docstrings",
    "title": "Pages.block",
    "category": "method",
    "text": "Block Julia control flow until until callback\"notify\" is called.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Pages.broadcast-Tuple{Any,Dict}",
    "page": "Docstrings",
    "title": "Pages.broadcast",
    "category": "method",
    "text": "Broadcast a message to all connected web pages to be interpetted by WebSocket listener. For example, in JavaScript:\n\nvar sock = new WebSocket(\'ws://\'+window.location.host); sock.onmessage = function( message ){     var msg = JSON.parse(message.data);     console.log(msg); }\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Pages.message-Tuple{Any,Dict}",
    "page": "Docstrings",
    "title": "Pages.message",
    "category": "method",
    "text": "Send a message to the specified connection to be interpetted by WebSocket listener. For example, in JavaScript:\n\nvar sock = new WebSocket(\'ws://\'+window.location.host); sock.onmessage = function( message ){     var msg = JSON.parse(message.data);     console.log(msg); }\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Pages]\nOrder = [:type, :function]"
},

]}
