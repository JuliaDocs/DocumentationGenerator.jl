var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#InteractiveCodeSearch.jl-–-Interactively-search-Julia-code-1",
    "page": "Readme",
    "title": "InteractiveCodeSearch.jl –- Interactively search Julia code",
    "category": "section",
    "text": "[![Build Status][travis-img]][travis-url] [![Coverage Status][coveralls-img]][coveralls-url] [![codecov.io][codecov-img]][codecov-url](Image: gif animation)Julia has @edit, @less, etc. which are very handy for reading the implementation of functions.  However, you need to specify a \"good enough\" set of (type) parameters for them to find the location of the code.Instead, InteractiveCodeSearch provides a few macros to interactively choose the code you want to read."
},

{
    "location": "#Features-1",
    "page": "Readme",
    "title": "Features",
    "category": "section",
    "text": "Interactively choose a method signature before opening the code location in your editor.\nVarious ways to search methods, such as: by function name @search show, function call expression @search show(stdout, \"hello\"), function call signature @search show(::IO, ::String), module name @search Base, argument value @searchmethods 1, argument type @searchmethods ::Int, and return type @searchreturn Int.\nInteractively search history.  It works in IJulia as well."
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "using InteractiveCodeSearch\n@search show             # search method definitions\n@searchmethods 1         # search methods defined for integer\n@searchhistory           # search history (Julia ≥ 0.7)\n@searchreturn String Pkg # search methods returning a given type (Julia ≥ 0.7)"
},

{
    "location": "#Requirements-1",
    "page": "Readme",
    "title": "Requirements",
    "category": "section",
    "text": "Interactive matching command.  For example:\npeco (default in terminal)\npercol\nrofi (GUI; default in IJulia)"
},

{
    "location": "#Reference-1",
    "page": "Readme",
    "title": "Reference",
    "category": "section",
    "text": ""
},

{
    "location": "#@search-1",
    "page": "Readme",
    "title": "@search",
    "category": "section",
    "text": "@search x [:shallow | :s | :recursive | :r]List file locations at which x are defined in an interactive matcher and then open the chosen location in the editor.When x is a module, only the top-level definitions are searched.  To search all definitions in the submodule, pass :recursive or :r flag.@searchIf no expression is provided, search for the method returned by the previous execution; i.e., x defaults to ans.Examples@search show                      # all method definitions\n@search @time                     # all macro definitions\n@search Base.Enums                # methods and macros in a module\n@search REPL :r                   # search the module recursively\n@search *(::Integer, ::Integer)   # methods with specified types\n@search dot(π, ℯ)                 # methods with inferred typesNote that @search evaluates complex expression with . and [] such as follows and search the returned value or the type of it:@search Base.Multimedia.displays[2].repl"
},

{
    "location": "#@searchmethods-1",
    "page": "Readme",
    "title": "@searchmethods",
    "category": "section",
    "text": "@searchmethods x\n@searchmethods ::XInteractively search through methodswith(typeof(x)) or methodswith(X).Examples@searchmethods 1         # search methods defined for integer\n@searchmethods ::Int     # search methods defined for a specified type"
},

{
    "location": "#@searchhistory-1",
    "page": "Readme",
    "title": "@searchhistory",
    "category": "section",
    "text": "@searchhistorySearch history interactively.  Interactively narrows down the code you looking for from the REPL history.Limitation/feature in IJulia: In IJulia, @searchhistory searches history of terminal REPL, not the history of the current IJulia session."
},

{
    "location": "#@searchreturn-1",
    "page": "Readme",
    "title": "@searchreturn",
    "category": "section",
    "text": "@searchreturn Type [Module...]Search functions returning type Type in Modules.  As this search typically takes some time to finish, interactive matcher will not be launched by this command.  Instead, a \"handle\" to the search in background is returned which can be queried via @search later. Calling kill (Base.kill) on the handle cancels the search.LimitationsRunning @searchreturn for many modules may be slow for the first run.  Thus, searching from all modules (i.e., not specifying Module arguments) may take tens of seconds to minutes, depending of what are loaded.  Searching within Base takes about 30 seconds. After DifferentialEquations is loaded, searching for all modules takes 1.5 minutes.  Note that searching from the same module for the second time is fast (a few seconds), even if different Type is specified.\nThe functions must be executed (JIT\'ed) once for @searchreturn to find their returned by type.\nAny IO operations (like printing in REPL) would be slow while the search is active in background.\nKeyboard interruption does not work well while background search is active.  You need to hit CTRL-C multiple times to terminate a \"foreground\" code.  Furthermore, it will bring down the background search task as well.Examplesjulia> using LinearAlgebra, SparseArrays\n\njulia> spzeros(3, 3)\n\njulia> @searchreturn AbstractMatrix LinearAlgebra SparseArrays\n┌ Info: Search result is stored in variable `_s1`.\n│ You can interactively narrow down the search result later by\n└ `@search _s1` or `@search 1`.\n\nBackgroundSearch id=1 [active] 0 found\nSearching ::AbstractArray{T,2} where T from Module[LinearAlgebra SparseArrays] recursively\n\njulia> @search _s1\n\njulia> kill(_s1)  # stop the searchIf you prefer giving a custom name to the search result, just assign it to some variable.julia> my_search = @searchreturn AbstractMatrix LinearAlgebra SparseArrays\njulia> @search my_search"
},

{
    "location": "#InteractiveCodeSearch.CONFIG-1",
    "page": "Readme",
    "title": "InteractiveCodeSearch.CONFIG",
    "category": "section",
    "text": "Configuration interface for InteractiveCodeSearch.Examplesusing InteractiveCodeSearch\nInteractiveCodeSearch.CONFIG.interactive_matcher = `peco`  # default in terminal\nInteractiveCodeSearch.CONFIG.interactive_matcher = `percol`\nInteractiveCodeSearch.CONFIG.interactive_matcher =\n    `rofi -dmenu -i -p \"🔎\"`  # use GUI matcher (default in non-terminal\n                              # environment like IJulia)\nInteractiveCodeSearch.CONFIG.interactive_matcher =\n    `rofi -dmenu -i -p \"🔎\" -fullscreen`  # bigger screen\nInteractiveCodeSearch.CONFIG.open = edit  # default\nInteractiveCodeSearch.CONFIG.open = less  # use Base.less to read code\nInteractiveCodeSearch.CONFIG.auto_open = true   # default\nInteractiveCodeSearch.CONFIG.auto_open = false  # open matcher even when there\n                                                # is only one candidateUsing InteractiveCodeSearch.jl by defaultPut the following code in your ~/.julia/config/startup.jl (≥ Julia 0.7) or ~/.juliarc.jl (Julia 0.6):using InteractiveCodeSearch\n# InteractiveCodeSearch.CONFIG.interactive_matcher = ...[travis-img]: https://travis-ci.org/tkf/InteractiveCodeSearch.jl.svg?branch=master [travis-url]: https://travis-ci.org/tkf/InteractiveCodeSearch.jl [coveralls-img]: https://coveralls.io/repos/tkf/InteractiveCodeSearch.jl/badge.svg?branch=master&service=github [coveralls-url]: https://coveralls.io/github/tkf/InteractiveCodeSearch.jl?branch=master [codecov-img]: http://codecov.io/github/tkf/InteractiveCodeSearch.jl/coverage.svg?branch=master [codecov-url]: http://codecov.io/github/tkf/InteractiveCodeSearch.jl?branch=master<!– Generated by ./scripts/generate_readme.jl README.md. –>"
},

{
    "location": "autodocs/#Base.kill-Tuple{InteractiveCodeSearch.BackgroundSearch}",
    "page": "Docstrings",
    "title": "Base.kill",
    "category": "method",
    "text": "kill(search::InteractiveCodeSearch.BackgroundSearch)\n\nStop search.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#InteractiveCodeSearch.bg",
    "page": "Docstrings",
    "title": "InteractiveCodeSearch.bg",
    "category": "function",
    "text": "InteractiveCodeSearch.bg(id::Int = 0)\n\nLookup background search by id.  For convenience, id = 0 is the last search and id = -1 is the second last search.  More generally, non-positive id is treated as the offset from end.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#InteractiveCodeSearch.find_source_file-Tuple{Any}",
    "page": "Docstrings",
    "title": "InteractiveCodeSearch.find_source_file",
    "category": "method",
    "text": "find_source_file(file)\n\nFind source file and return its full path.  It just calls Base.find_source_file and return its result for normal Julia installation.  For nightly Julia build, it tries to guess the right path when Base.find_source_file failed.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#InteractiveCodeSearch.get_history_provider-Tuple{}",
    "page": "Docstrings",
    "title": "InteractiveCodeSearch.get_history_provider",
    "category": "method",
    "text": "get_history_provider() :: REPLHistoryProvider\n\n\n\n\n\n"
},

{
    "location": "autodocs/#InteractiveCodeSearch.load_history_provider-Tuple{}",
    "page": "Docstrings",
    "title": "InteractiveCodeSearch.load_history_provider",
    "category": "method",
    "text": "load_history_provider() :: REPLHistoryProvider\n\n\n\n\n\n"
},

{
    "location": "autodocs/#InteractiveCodeSearch.read_stdout-Tuple{AbstractString,Any}",
    "page": "Docstrings",
    "title": "InteractiveCodeSearch.read_stdout",
    "category": "method",
    "text": "read_stdout(input::AbstractString, cmd)\nread_stdout(input_provider, cmd)\n\nJulia implementation of \"echo {input} | {cmd}\".\n\n\n\n\n\n"
},

{
    "location": "autodocs/#InteractiveCodeSearch.stop-Tuple{InteractiveCodeSearch.BackgroundSearch}",
    "page": "Docstrings",
    "title": "InteractiveCodeSearch.stop",
    "category": "method",
    "text": "InteractiveCodeSearch.stop(search::BackgroundSearch)\nInteractiveCodeSearch.stop(id::Int = 0)\n\nStop search.  The first form can be invoked via kill(search) as well (where kill is the function exported from Base).  See also bg.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [InteractiveCodeSearch]\nOrder = [:type, :function]"
},

]}
