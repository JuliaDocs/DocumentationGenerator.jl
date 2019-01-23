var documenterSearchIndex = {"docs": [

{
    "location": "#Juno.clearconsole-Tuple{}",
    "page": "Home",
    "title": "Juno.clearconsole",
    "category": "method",
    "text": "clearconsole()\n\nClear the console if Juno is used; does nothing otherwise.\n\n\n\n\n\n"
},

{
    "location": "#Juno.input",
    "page": "Home",
    "title": "Juno.input",
    "category": "function",
    "text": "input(prompt = \"\") -> \"...\"\n\nPrompt the user to input some text, and return it. Optionally display a prompt.\n\n\n\n\n\n"
},

{
    "location": "#Juno.selector-Tuple{Any}",
    "page": "Home",
    "title": "Juno.selector",
    "category": "method",
    "text": "selector([xs...]) -> x\n\nAllow the user to select one of the xs.\n\nxs should be an iterator of strings. Currently there is no fallback in other environments.\n\n\n\n\n\n"
},

{
    "location": "#Juno.structure-Tuple",
    "page": "Home",
    "title": "Juno.structure",
    "category": "method",
    "text": "structure(x)\n\nDisplay x\'s underlying representation, rather than using its normal display method.\n\nFor example, structure(:(2x+1)) displays the Expr object with its head and args fields instead of printing the expression.\n\n\n\n\n\n"
},

{
    "location": "#Juno.defaultrepr",
    "page": "Home",
    "title": "Juno.defaultrepr",
    "category": "function",
    "text": "defaultrepr(x, lazy = false)\n\nrender fallback for types without any specialized show methods.\n\nIf lazy is true, then the type\'s fields will be loaded lazily when expanding the tree. This is useful when the fields contain big elements that might need to be inspectable.\n\nCan be used by packages to restore Juno\'s default printing if they have defined a show method that should not be used by Juno:\n\nJuno.render(i::Juno.Inline, x::myType) = Juno.render(i, Juno.defaultrepr(x))\n\n\n\n\n\n"
},

{
    "location": "#Juno.info-Tuple{Any}",
    "page": "Home",
    "title": "Juno.info",
    "category": "method",
    "text": "info(msg)\n\nShow the given message in Juno\'s console using blue styling, or fall back to Base.info.\n\nIn a package, you can use import Juno: info to replace the default version with this one.\n\n\n\n\n\n"
},

{
    "location": "#Juno.isactive-Tuple{}",
    "page": "Home",
    "title": "Juno.isactive",
    "category": "method",
    "text": "isactive()\n\nWill return true when the current Julia process is connected to a running Juno frontend.\n\n\n\n\n\n"
},

{
    "location": "#Juno.notify-Tuple{AbstractString}",
    "page": "Home",
    "title": "Juno.notify",
    "category": "method",
    "text": "notify(msg)\n\nDisplay msg as an OS specific notification.\n\nUseful for signaling the end of a long running computation or similar. This disregards the Notifications setting in julia-client. Falls back to info(msg) in other environments.\n\n\n\n\n\n"
},

{
    "location": "#Juno.plotsize-Tuple{}",
    "page": "Home",
    "title": "Juno.plotsize",
    "category": "method",
    "text": "plotsize()\n\nGet the size of Juno\'s plot pane in px. Returns [100, 100] as a fallback value.\n\n\n\n\n\n"
},

{
    "location": "#Juno.profiler-Tuple{}",
    "page": "Home",
    "title": "Juno.profiler",
    "category": "method",
    "text": "profiler()\n\nShow currently collected profile information as an in-editor flamechart.\n\n\n\n\n\n"
},

{
    "location": "#Juno.profiletree-Tuple{}",
    "page": "Home",
    "title": "Juno.profiletree",
    "category": "method",
    "text": "profiletree()\n\nShow currently collected profile information in tree-form. Falls back to Profile.print().\n\n\n\n\n\n"
},

{
    "location": "#Juno.progress-Tuple{Any}",
    "page": "Home",
    "title": "Juno.progress",
    "category": "method",
    "text": "progress(f::Function; name = \"\", msg = \"\")\n\nEvaluates f with id as its argument and makes sure to destroy the progress bar afterwards. To update the progress bar in f you can call a logging statement like @info or even just @logmsg with _id=id and progress as arguments.\n\nprogress can take either of the following values:\n\n0 <= progress < 1: create or update progress bar\nprogress == nothing || progress = NaN: set progress bar to indeterminate progress\nprogress > 1 || progress == \"done\": destroy progress bar\n\nThe logging message (e.g. \"foo\" in @info \"foo\") will be used as the progress bar\'s name.\n\nJuno.progress() do id\n    for i = 1:10\n        sleep(0.5)\n        @info \"iterating\" progress=i/10 _id=id\n    end\nend\n\n\n\n\n\n"
},

{
    "location": "#Juno.syntaxcolors-Tuple{Any}",
    "page": "Home",
    "title": "Juno.syntaxcolors",
    "category": "method",
    "text": "syntaxcolors(selectors = Atom.SELECTORS)::Dict{String, UInt32}\n\nGet the colors used by the current Atom theme. selectors should be a Dict{String, Vector{String}} which assigns a css selector (e.g. syntax--julia) to a name (e.g. variable).\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Juno]\nOrder = [:type, :function]"
},

]}
