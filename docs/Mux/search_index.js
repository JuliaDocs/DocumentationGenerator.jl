var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Mux.jl-1",
    "page": "Readme",
    "title": "Mux.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: codecov.io)(Image: Mux) (Image: Mux)Pkg.add(\"Mux\")Mux.jl gives your Julia web services some closure. Mux allows you to define servers in terms of highly modular and composable components called middleware, with the aim of making both simple and complex servers as simple as possible to throw together.For example:using Mux\n\n@app test = (\n  Mux.defaults,\n  page(respond(\"<h1>Hello World!</h1>\")),\n  page(\"/about\",\n       probabilty(0.1, respond(\"<h1>Boo!</h1>\")),\n       respond(\"<h1>About Me</h1>\")),\n  page(\"/user/:user\", req -> \"<h1>Hello, $(req[:params][:user])!</h1>\"),\n  Mux.notfound())\n\nserve(test)You can run this demo by entering the successive forms into the Julia REPL. The code displays a \"hello, world\" at localhost:8000, with an about page at /about and another hello at /user/[your name].The @app macro allows the server to be redefined on the fly, and you can test this by editing the hello text and re-evaluating. (don\'t re-evalute serve(test))"
},

{
    "location": "#Technical-Overview-1",
    "page": "Readme",
    "title": "Technical Overview",
    "category": "section",
    "text": "Mux.jl is at heart a control flow library, with a very small core. It\'s not important to understand that code exactly as long as you understand what it achieves.There are three concepts core to Mux.jl: Middleware (which should be familiar from the web libraries of other languages), stacking, and branching."
},

{
    "location": "#Apps-and-Middleware-1",
    "page": "Readme",
    "title": "Apps and Middleware",
    "category": "section",
    "text": "An app or endpoint is simply a function of a request which produces a response:function myapp(req)\n  return \"<h1>Hello, $(req[:params][:user])!</h1>\"\nendIn principle this should say \"hi\" to our lovely user. But we have a problem – where does the user\'s name come from? Ideally, our app function doesn\'t need to know – it\'s simply handled at some point up the chain (just the same as we don\'t parse the raw HTTP data, for example).One way to solve this is via middleware. Say we get :user from a cookie:function username(app, req)\n  req[:params][:user] = req[:cookies][:user]\n  return app(req) # We could also alter the response, but don\'t want to here\nendMiddleware simply takes our request and modifies it appropriately, so that data needed later on is available. This example is pretty trivial, but we could equally have middleware which handles authentication and encryption, processes cookies or file uploads, provides default headers, and more.We can then call our new version of the app like this:username(myapp, req)In fact, we can generate a whole new version of the app which has username support built in:function app2(req)\n  return username(myapp, req)\nendBut if we have a lot of middleware, we\'re going to end up with a lot of appX functions. For that reason we can use the mux function instead, which creates the new app for us:mux(username, myapp)This returns a new function which is equivalent to app2 above. We just didn\'t have to write it by hand."
},

{
    "location": "#Stacking-1",
    "page": "Readme",
    "title": "Stacking",
    "category": "section",
    "text": "Now suppose you have lots of middleware – one to parse the HTTP request into a dict of properties, one to check user authentication, one to catches errors, etc. mux handles this too – just pass it multiple arguments:mux(todict, auth, catch_errors, app)Again, mux returns a whole new app (a request -> response function) for us, this time wrapped with the three middlewares we provided. todict will be the first to make changes to the incoming request, and the last to alter the outgoing response.Another neat thing we can do is to compose middleware into more middleware:mymidware = stack(todict, auth, catch_errors)\nmux(mymidware, app)This is effectively equivalent to the mux call above, but creating a new middleware function from independent parts means we\'re able to factor out our service to make things more readable. For example, Mux provides the Mux.default middleware which is actually just a stack of useful tools.stack is self-flattening, i.e.stack(a, b, c, d) == stack(a, stack(b, c), d) == stack(stack(a, b, c), d)etc."
},

{
    "location": "#Branching-1",
    "page": "Readme",
    "title": "Branching",
    "category": "section",
    "text": "Mux.jl goes further with middleware, and expresses routing and decisions as middleware themselves. The key to this is the branch function, which takesa predicate to apply to the incoming request, and\nan endpoint to run on the request if the predicate returns true.For example:mux(branch(_ -> rand() < 0.1, respond(\"Hello\")),\n    respond(\"Hi\"))In this example, we ignore the request and simply return true 10% of the time. You can test this in the repl by callingmux(branch(_ -> rand() < 0.1, respond(\"Hello\")),\n    respond(\"Hi\"))(nothing)(since the request is ignored anyway, it doesn\'t matter if we set it to nothing).We can also define a function to wrap the branchprobabilty(x, app) = branch(_ -> rand() < x, app)"
},

{
    "location": "#Utilities-1",
    "page": "Readme",
    "title": "Utilities",
    "category": "section",
    "text": "Despite the fact that endpoints and middleware are so important in Mux, it\'s common to not write them by hand. For example, respond(\"hi\") creates a function _ -> \"hi\" which can be used as an endpoint. Equally, functions like status(404) will create middleware which applies the given status to the response. Mux.jl\'s \"not found\" endpoint is therefore defined asnotfound(s = \"Not found\") = mux(status(404), respond(s))which is a much more declarative approach.For example:respond(x) – creates an endpoint that responds with x, regardless of the request.\nroute(\"/path/here\", app) – branches to app if the request location matches \"/path/here\".\npage(\"/path/here\", app) – branches to app if the request location exactly matches \"/path/here\""
},

{
    "location": "#Serving-static-files-from-a-package-1",
    "page": "Readme",
    "title": "Serving static files from a package",
    "category": "section",
    "text": "The Mux.pkgfiles middleware (included in Mux.defaults) serves static files under the assets directory in any Julia package at /pkg/<PACKAGE>/."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Mux]\nOrder = [:type, :function]"
},

]}
