var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Julia-Application-Builder-1",
    "page": "Readme",
    "title": "Julia Application Builder",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status)Turn your julia program into a standalone, distributable, statically-compiled \"App\"!ApplicationBuilder compiles a julia program and bundles it up into a distributable application, on macOS, Windows and Linux! After building, your users can download your application and run it without having Julia installed."
},

{
    "location": "#ApplicationBuilder-1",
    "page": "Readme",
    "title": "ApplicationBuilder",
    "category": "section",
    "text": "To compile and bundle your julia program into a distributable app, use ApplicationBuilder.build_app_bundle:julia> using ApplicationBuilder\nhelp?> build_app_bundle()\n  # 1 method for generic function \"build_app_bundle\":\n  build_app_bundle(juliaprog_main; appname, builddir, resources, libraries, verbose, bundle_identifier, app_version, icns_file, certificate, entitlements_file, snoopfile, autosnoop, commandline_app) in ApplicationBuilder at /Users/daly/.julia/v0.6/ApplicationBuilder/src/ApplicationBuilder.jl:47"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "To build a julia program into an application, you\'ll need to do two steps:Wrap your code in julia_main function. If the main entry-point to your code is a function, my_code(), it would look like this:  ```julia\nmyjuliamain.jl\ninclude(\"mycode.jl\")  Base.@ccallable function juliamain(ARGS::Vector{String})::Cint      return my_code()  end  ```  The easiest thing to do is to maintain this as a separate script, but you can put this anywhere in your project.\nCall build_app_bundle with the file that provides julia_main. The easiest way to do this is to maintain a build script, e.g.:  ```julia\nbuild.jl\nusing ApplicationBuilder  buildappbundle(\"src/myjuliamain.jl\", appname=\"MyCode\");  ```"
},

{
    "location": "#Compatibility-1",
    "page": "Readme",
    "title": "Compatibility",
    "category": "section",
    "text": "ApplicationBuilder supports macOS, Windows, and Linux. Currently, ApplicationBuilder doesn\'t do cross-compilation, so to compile for Windows, you need to run it from a Windows machine, etc."
},

{
    "location": "#Running-an-example:-1",
    "page": "Readme",
    "title": "Running an example:",
    "category": "section",
    "text": "After cloning the repository, you can build an App out of the example program, examples/hello.jl, like this:julia> build_app_bundle(\"$(homedir())/.julia/v0.6/ApplicationBuilder/examples/hello.jl\", appname=\"HelloWorld\", verbose=true);or like this:$ julia build_app.jl -v examples/hello.jl \"HelloWorld\"This will produce builddir/HelloWorld.app, which you can double click, and it will indeed greet you!The simple example HelloWorld.app has no binary dependencies – that is, it doesn\'t need any extra libraries besides Julia. Many Julia packages come bundled with their own binary dependencies, and if you want to use them in your app, you\'ll have to add those dependencies via the libraries (-L) option for libs and resources (-R) for bundle resources."
},

{
    "location": "#More-examples-1",
    "page": "Readme",
    "title": "More examples",
    "category": "section",
    "text": "There are many more examples in the examples directory, each of which have a corresponding build file in the test/build_examples directory. You can build an example simply by running the build file:julia> include(\"$(homedir())/.julia/v0.6/ApplicationBuilder/test/build_examples/commandline_hello.jl\")"
},

{
    "location": "#build_app.jl-(The-command-line-tool)-1",
    "page": "Readme",
    "title": "build_app.jl (The command-line tool)",
    "category": "section",
    "text": "There is also a command-line interface, through build_app.jl, if you prefer it. The main development is on the Julia API, though, so this sometimes lags behind. Feel free to send a PR if it\'s missing anything! :)Run julia build_app.jl -h for help: ``` usage: buildapp.jl [-v] [-R <resource>] [-L <file>] [–icns <file>]                     [-h] juliaprogmain [appname] [builddir]positional arguments:   juliaprogmain        Julia program to compile – must define                         juliamain()   appname               name to call the generated .app bundle   builddir              directory used for building, either absolute                         or relative to the Julia program directory                         (default: \"builddir\")optional arguments:   -v, –verbose         increase verbosity   -R, –resource <resource>                         specify files or directories to be copied to                         MyApp.app/Contents/Resources/. This should be                         done for all resources that your app will need                         to have available at runtime. Can be repeated.   -L, –lib <file>      specify user library files to be copied to                         MyApp.app/Contents/Libraries/. This should be                         done for all libraries that your app will need                         to reference at runtime. Can be repeated.   –icns <file>         .icns file to be used as the app\'s icon   -h, –help            show this help message and exitexamples:      # Build HelloApp.app from hello.jl      buildapp.jl hello.jl HelloApp      # Build MyGame, and copy in imgs/, mus.wav and all files in libs/      buildapp.jl -R imgs -R mus.wav -L lib/* main.jl MyGame  ```"
},

{
    "location": "#License-1",
    "page": "Readme",
    "title": "License",
    "category": "section",
    "text": "This project is licensed under the terms of the MIT license."
},

{
    "location": "#Thanks-1",
    "page": "Readme",
    "title": "Thanks",
    "category": "section",
    "text": "Thanks for the help from these contributors and everyone else!:ranjanan\nlucatrv\nsimondanish\nvtjnash"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [ApplicationBuilder]\nOrder = [:type, :function]"
},

]}
