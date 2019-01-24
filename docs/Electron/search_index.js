var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Electron-1",
    "page": "Readme",
    "title": "Electron",
    "category": "section",
    "text": "(Image: Project Status: Active - The project has reached a stable, usable state and is being actively developed.) (Image: Build Status) (Image: Build status) (Image: codecov)"
},

{
    "location": "#Overview-1",
    "page": "Readme",
    "title": "Overview",
    "category": "section",
    "text": "Electron.jl wraps the cross-platform desktop application framework Electron. You can use it to build GUI applications in julia."
},

{
    "location": "#Alternatives-1",
    "page": "Readme",
    "title": "Alternatives",
    "category": "section",
    "text": "Blink.jl provides similar functionality (and was a major inspiration for this package!). The main difference between the two packages is that Electron.jl opts for a more minimalistic feature set than Blink.jl. Here are some key differences between the two packages:Electron.jl does not have any web server functionality.\nElectron.jl has no functionality to translate julia code to JavaScript.\nElectron.jl uses named pipes for the communication between julia and the electron process (no more firewall warnings!).\nElectron.jl doesn\'t integrate with the Juno stack of packages, Blink.jl does in some way (that I don\'t understand).\nElectron.jl has a high test coverage.\nElectron.jl always installs a private copy of Electron during the build phase."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "You can install the package with:Pkg.add(\"Electron\")"
},

{
    "location": "#Getting-started-1",
    "page": "Readme",
    "title": "Getting started",
    "category": "section",
    "text": "Electron.jl introduces two fundamental types: Application represents a running electron application, Window is a visible UI window. A julia process can have arbitrarily many applications running at the same time, each represented by its own Application instance. If you don\'t want to deal with Applications you can also just ignore them, in that case Electron.jl will create a default application for you automatically.To create a new application, simply call the corresponding constructor:using Electron\n\napp = Application()This will start a new Electron process that is ready to open windows or run JavaScript code.To create a new window in an existing application, use the Window constructor:using Electron, URIParser\n\napp = Application()\n\nwin = Window(app, URI(\"file://main.html\"))Note that you need to pass a URI that points to an HTML file to the Window constructor. This HTML file will be displayed in the new window.You can also call the Window constructor without passing an Application, in that case Electron.jl creates a default application for you:using Electron, URIParser\n\nwin = Window(URI(\"file://main.html\"))You can run JavaScript code both in the main or the render thread of a specific window. To run some JavaScript in the main thread, call the run function and pass an Application instance as the first argument:using Electron, URIParser\n\napp = Application()\n\nresult = run(app, \"Math.log(10)\")The second argument of the run function is JavaScript code that will simply be executed as is in Electron.You can also run JavaScript in the render thread of any open window by passing the corresponding Window instance as the first argument to run:using Electron, URIParser\n\nwin = Window(URI(\"file://main.html\"))\n\nresult = run(win, \"Math.log(10)\")You can send messages from a render thread back to julia by calling the javascript function sendMessageToJulia. On the julia side, every window has a Channel for these messages. You can access the channel for a given window with the msgchannel function, and then use the standard julia API to take messages out of this channel:using Electron\n\nwin = Window()\n\nresult = run(win, \"sendMessageToJulia(\'foo\')\")\n\nch = msgchannel(win)\n\nmsg = take!(ch)\n\nprintln(msg)"
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "The following packages currently use Electron.jl:https://github.com/davidanthoff/DataVoyager.jl\nhttps://github.com/davidanthoff/ElectronDisplay.jlPlease add any other packages that depend on Electron.jl to this list via a pull request!"
},

{
    "location": "autodocs/#Electron.Application-Tuple{}",
    "page": "Docstrings",
    "title": "Electron.Application",
    "category": "method",
    "text": "function Application()\n\nStart a new Electron application. This will start a new process for that Electron app and return an instance of Application that can be used in the construction of Electron windows.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Electron.Window",
    "page": "Docstrings",
    "title": "Electron.Window",
    "category": "type",
    "text": "function Window([app::Application,] options::Dict)\n\nOpen a new Window in the application app. Pass the content of options to the Electron BrowserWindow constructor.\n\nIf app is not specified, use the default Electron application, starting one if needed.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Electron.Window-Tuple{Electron._Application{Window},AbstractString}",
    "page": "Docstrings",
    "title": "Electron.Window",
    "category": "method",
    "text": "function Window([app::Application,] uri::URI)\n\nOpen a new Window in the application app. Show the content as a text/html file with utf-8 encoding.\n\nIf app is not specified, use the default Electron application, starting one if needed.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Electron.Window-Tuple{Electron._Application{Window},URI}",
    "page": "Docstrings",
    "title": "Electron.Window",
    "category": "method",
    "text": "function Window([app::Application,] uri::URI)\n\nOpen a new Window in the application app. Show the content that uri points to in that new window.\n\nIf app is not specified, use the default Electron application, starting one if needed.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Electron.load-Tuple{Window,AbstractString}",
    "page": "Docstrings",
    "title": "Electron.load",
    "category": "method",
    "text": "load(win::Window, html::AbstractString)\n\nLoad html in the Electron window win.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Electron.load-Tuple{Window,URI}",
    "page": "Docstrings",
    "title": "Electron.load",
    "category": "method",
    "text": "load(win::Window, uri::URI)\n\nLoad uri in the Electron window win.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.Filesystem.pwd-Tuple{Type{URI}}",
    "page": "Docstrings",
    "title": "Base.Filesystem.pwd",
    "category": "method",
    "text": "pwd(URI)\n\nReturn pwd() as a URI resource.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.close-Tuple{Electron._Application{Window}}",
    "page": "Docstrings",
    "title": "Base.close",
    "category": "method",
    "text": "close(app::Application)\n\nTerminates the Electron application referenced by app.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.close-Tuple{Window}",
    "page": "Docstrings",
    "title": "Base.close",
    "category": "method",
    "text": "close(win::Window)\n\nClose the windows referenced by win.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.run-Tuple{Electron._Application{Window},AbstractString}",
    "page": "Docstrings",
    "title": "Base.run",
    "category": "method",
    "text": "run(app::Application, code::AbstractString)\n\nRun the JavaScript code that is passed in code in the main application thread of the app Electron process. Returns the value that the JavaScript expression returns.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.run-Tuple{Window,AbstractString}",
    "page": "Docstrings",
    "title": "Base.run",
    "category": "method",
    "text": "run(win::Window, code::AbstractString)\n\nRun the JavaScript code that is passed in code in the render thread of the win Electron windows. Returns the value that the JavaScript expression returns.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Electron.URI_file-Tuple{Any,Any}",
    "page": "Docstrings",
    "title": "Electron.URI_file",
    "category": "method",
    "text": "URI_file(base, filespec)\n\nConstruct an absolute URI to filespec relative to base.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Electron]\nOrder = [:type, :function]"
},

]}
