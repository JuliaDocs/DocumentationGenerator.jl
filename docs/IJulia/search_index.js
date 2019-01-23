var documenterSearchIndex = {"docs": [

{
    "location": "#IJulia.installkernel-Tuple{AbstractString,Vararg{AbstractString,N} where N}",
    "page": "Home",
    "title": "IJulia.installkernel",
    "category": "method",
    "text": "installkernel(name::AbstractString, options::AbstractString...;\n              specname::AbstractString,\n              env=Dict())\n\nInstall a new Julia kernel, where the given options are passed to the julia executable, the user-visible kernel name is given by name followed by the Julia version, and the env dictionary is added to the environment.\n\nThe new kernel name is returned by installkernel.  For example:\n\nkernelpath = installkernel(\"Julia O3\", \"-O3\", env=Dict(\"FOO\"=>\"yes\"))\n\ncreates a new Julia kernel in which julia is launched with the -O3 optimization flag and FOO=yes is included in the environment variables.\n\nThe returned kernelpath is the path of the installed kernel directory, something like /...somepath.../kernels/julia-O3-1.0 (in Julia 1.0).  The specname argument can be passed to alter the name of this directory (which defaults to name with spaces replaced by hyphens).\n\nYou can uninstall the kernel by calling rm(kernelpath, recursive=true).\n\n\n\n\n\n"
},

{
    "location": "#IJulia.jupyterlab-Tuple{}",
    "page": "Home",
    "title": "IJulia.jupyterlab",
    "category": "method",
    "text": "jupyterlab(; dir=homedir(), detached=false)\n\nSimilar to IJulia.notebook() but launches JupyterLab instead of the Jupyter notebook.\n\n\n\n\n\n"
},

{
    "location": "#IJulia.notebook-Tuple{}",
    "page": "Home",
    "title": "IJulia.notebook",
    "category": "method",
    "text": "notebook(; dir=homedir(), detached=false)\n\nThe notebook() function launches the Jupyter notebook, and is equivalent to running jupyter notebook at the operating-system command-line.    The advantage of launching the notebook from Julia is that, depending on how Jupyter was installed, the user may not know where to find the jupyter executable.\n\nBy default, the notebook server is launched in the user\'s home directory, but this location can be changed by passing the desired path in the dir keyword argument.  e.g. notebook(dir=pwd()) to use the current directory.\n\nBy default, notebook() does not return; you must hit ctrl-c or quit Julia to interrupt it, which halts Jupyter.  So, you must leave the Julia terminal open for as long as you want to run Jupyter.  Alternatively, if you run notebook(detached=true), the jupyter notebook will launch in the background, and will continue running even after you quit Julia.  (The only way to stop Jupyter will then be to kill it in your operating system\'s process manager.)\n\n\n\n\n\n"
},

{
    "location": "#IJulia.clear_history",
    "page": "Home",
    "title": "IJulia.clear_history",
    "category": "function",
    "text": "clear_history([indices])\n\nThe clear_history() function clears all of the input and output history stored in the running IJulia notebook.  This is sometimes useful because all cell outputs are remember in the Out global variable, which prevents them from being freed, so potentially this could waste a lot of memory in a notebook with many large outputs.\n\nThe optional indices argument is a collection of indices indicating a subset of cell inputs/outputs to clear.\n\n\n\n\n\n"
},

{
    "location": "#IJulia.clear_output",
    "page": "Home",
    "title": "IJulia.clear_output",
    "category": "function",
    "text": "clear_output(wait=false)\n\nCall clear_output() to clear visible output from the current notebook cell.  Using wait=true clears the output only when new output is available, which reduces flickering and is useful for simple animations.\n\n\n\n\n\n"
},

{
    "location": "#IJulia.display_dict-Tuple{Any}",
    "page": "Home",
    "title": "IJulia.display_dict",
    "category": "method",
    "text": "Generate a dictionary of mime_type => data pairs for all registered MIME types. This is the format that Jupyter expects in displaydata and executeresult messages.\n\n\n\n\n\n"
},

{
    "location": "#IJulia.display_mimejson-Tuple{Array{MIME,1},Any}",
    "page": "Home",
    "title": "IJulia.display_mimejson",
    "category": "method",
    "text": "Generate the preferred json-MIME representation of x.\n\nReturns a tuple with the selected MIME type and the representation of the data using that MIME type (as a JSONText).\n\n\n\n\n\n"
},

{
    "location": "#IJulia.display_mimestring-Tuple{Array{MIME,1},Any}",
    "page": "Home",
    "title": "IJulia.display_mimestring",
    "category": "method",
    "text": "Generate the preferred MIME representation of x.\n\nReturns a tuple with the selected MIME type and the representation of the data using that MIME type.\n\n\n\n\n\n"
},

{
    "location": "#IJulia.history",
    "page": "Home",
    "title": "IJulia.history",
    "category": "function",
    "text": "history([io], [indices...])\n\nThe history() function prints all of the input history stored in the running IJulia notebook in a format convenient for copying.\n\nThe optional indices argument is one or more indices or collections of indices indicating a subset input cells to print.\n\nThe optional io argument is for specifying an output stream. The default is stdout.\n\n\n\n\n\n"
},

{
    "location": "#IJulia.load",
    "page": "Home",
    "title": "IJulia.load",
    "category": "function",
    "text": "load(filename, replace=false)\n\nLoad the file given by filename into a new input code cell in the running IJulia notebook, analogous to the %load magics in IPython. If the optional argument replace is true, then the file contents replace the current cell rather than creating a new cell.\n\n\n\n\n\n"
},

{
    "location": "#IJulia.load_string",
    "page": "Home",
    "title": "IJulia.load_string",
    "category": "function",
    "text": "load_string(s, replace=false)\n\nLoad the string s into a new input code cell in the running IJulia notebook, somewhat analogous to the %load magics in IPython. If the optional argument replace is true, then s replaces the current cell rather than creating a new cell.\n\n\n\n\n\n"
},

{
    "location": "#IJulia.num_utf8_trailing-Tuple{Array{UInt8,1}}",
    "page": "Home",
    "title": "IJulia.num_utf8_trailing",
    "category": "method",
    "text": "If d ends with an incomplete UTF8-encoded character, return the number of trailing incomplete bytes. Otherwise, return 0.\n\n\n\n\n\n"
},

{
    "location": "#IJulia.pop_posterror_hook-Tuple{Function}",
    "page": "Home",
    "title": "IJulia.pop_posterror_hook",
    "category": "method",
    "text": "pop_posterror_hook(f::Function)\n\nRemove a function f() from the list of functions to execute after an error occurs when a notebook cell is evaluated.\n\n\n\n\n\n"
},

{
    "location": "#IJulia.pop_postexecute_hook-Tuple{Function}",
    "page": "Home",
    "title": "IJulia.pop_postexecute_hook",
    "category": "method",
    "text": "pop_postexecute_hook(f::Function)\n\nRemove a function f() from the list of functions to execute after executing any notebook cell.\n\n\n\n\n\n"
},

{
    "location": "#IJulia.pop_preexecute_hook-Tuple{Function}",
    "page": "Home",
    "title": "IJulia.pop_preexecute_hook",
    "category": "method",
    "text": "pop_preexecute_hook(f::Function)\n\nRemove a function f() from the list of functions to execute before executing any notebook cell.\n\n\n\n\n\n"
},

{
    "location": "#IJulia.push_posterror_hook-Tuple{Function}",
    "page": "Home",
    "title": "IJulia.push_posterror_hook",
    "category": "method",
    "text": "pop_posterror_hook(f::Function)\n\nRemove a function f() from the list of functions to execute after an error occurs when a notebook cell is evaluated.\n\n\n\n\n\n"
},

{
    "location": "#IJulia.push_postexecute_hook-Tuple{Function}",
    "page": "Home",
    "title": "IJulia.push_postexecute_hook",
    "category": "method",
    "text": "push_postexecute_hook(f::Function)\n\nPush a function f() onto the end of a list of functions to execute after executing any notebook cell.\n\n\n\n\n\n"
},

{
    "location": "#IJulia.push_preexecute_hook-Tuple{Function}",
    "page": "Home",
    "title": "IJulia.push_preexecute_hook",
    "category": "method",
    "text": "push_preexecute_hook(f::Function)\n\nPush a function f() onto the end of a list of functions to execute before executing any notebook cell.\n\n\n\n\n\n"
},

{
    "location": "#IJulia.readprompt-Tuple{AbstractString}",
    "page": "Home",
    "title": "IJulia.readprompt",
    "category": "method",
    "text": "readprompt(prompt::AbstractString; password::Bool=false)\n\nDisplay the prompt string, request user input, and return the string entered by the user.  If password is true, the user\'s input is not displayed during typing.\n\n\n\n\n\n"
},

{
    "location": "#IJulia.set_cur_msg-Tuple{Any}",
    "page": "Home",
    "title": "IJulia.set_cur_msg",
    "category": "method",
    "text": "Jupyter associates cells with message headers. Once a cell\'s execution state has been set as to idle, it will silently drop stream messages (i.e. output to stdout and stderr) - see https://github.com/jupyter/notebook/issues/518. When using Interact, and a widget\'s state changes, a new message header is sent to the IJulia kernel, and while Reactive is updating Signal graph state, it\'s execution state is busy, meaning Jupyter will not drop stream messages if Interact can set the header message under which the stream messages will be sent. Hence the need for this function.\n\n\n\n\n\n"
},

{
    "location": "#IJulia.set_max_stdio-Tuple{Integer}",
    "page": "Home",
    "title": "IJulia.set_max_stdio",
    "category": "method",
    "text": "set_max_stdio(max_output::Integer)\n\nSets the maximum number of bytes, max_output, that can be written to stdout and stderr before getting truncated. A large value here allows a lot of output to be displayed in the notebook, potentially bogging down the browser.\n\n\n\n\n\n"
},

{
    "location": "#IJulia.set_verbose",
    "page": "Home",
    "title": "IJulia.set_verbose",
    "category": "function",
    "text": "set_verbose(v=true)\n\nThis function enables (or disables, for set_verbose(false)) verbose output from the IJulia kernel, when called within a running notebook. This consists of log messages printed to the terminal window where jupyter was launched, displaying information about every message sent or received by the kernel.   Used for debugging IJulia.\n\n\n\n\n\n"
},

{
    "location": "#IJulia.watch_stream-Tuple{IO,AbstractString}",
    "page": "Home",
    "title": "IJulia.watch_stream",
    "category": "method",
    "text": "Continually read from (size limited) Libuv/OS buffer into an IObuffer to avoid problems when the Libuv/OS buffer gets full (https://github.com/JuliaLang/julia/issues/8789). Send data immediately when buffer contains more than max_bytes bytes. Otherwise, if data is available it will be sent every stream_interval seconds (see the Timers set up in watchstdio). Truncate the output to `maxoutputperrequest` bytes per execution request since excessive output can bring browsers to a grinding halt.\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [IJulia]\nOrder = [:type, :function]"
},

]}
