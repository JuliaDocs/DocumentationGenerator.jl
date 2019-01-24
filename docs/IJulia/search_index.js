var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "<div align=\"center\"><img src=\"deps/ijulialogo.png\" alt=\"IJulia logo\" width=\"150\"/></div>(Image: Build Status) (Image: Build status)"
},

{
    "location": "#IJulia-1",
    "page": "Readme",
    "title": "IJulia",
    "category": "section",
    "text": "IJulia is a Julia-language backend combined with the Jupyter interactive environment (also used by IPython).  This combination allows you to interact with the Julia language using Jupyter/IPython\'s powerful graphical notebook, which combines code, formatted text, math, and multimedia in a single document.  It also works with JupyterLab, a Jupyter-based integrated development environment for notebooks and code.(IJulia notebooks can also be re-used in other Julia code via the NBInclude package.)"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "First, download Julia version 0.7 or later and run the installer.  Then run the Julia application (double-click on it); a window with a julia> prompt will appear.  At the prompt, type:using Pkg\nPkg.add(\"IJulia\")to install IJulia.This process installs a kernel specification that tells Jupyter (or JupyterLab) etcetera how to launch Julia.Pkg.add(\"IJulia\") does not actually install Jupyter itself. You can install Jupyter if you want, but it can also be installed automatically when you run IJulia.notebook() below.  (You can force it to use a specific jupyter installation by setting ENV[\"JUPYTER\"] to the path of the jupyter program before Pkg.add, or before running Pkg.build(\"IJulia\"); your preference is remembered on subsequent updates."
},

{
    "location": "#Running-the-IJulia-Notebook-1",
    "page": "Readme",
    "title": "Running the IJulia Notebook",
    "category": "section",
    "text": "If you are comfortable managing your own Python/Jupyter installation, you can just run jupyter notebook yourself in a terminal.   To simplify installation, however, you can alternatively type the following in Julia, at the julia> prompt:using IJulia\nnotebook()to launch the IJulia notebook in your browser.The first time you run notebook(), it will prompt you for whether it should install Jupyter.  Hit enter to have it use the Conda.jl package to install a minimal Python+Jupyter distribution (via Miniconda) that is private to Julia (not in your PATH). On Linux, it defaults to looking for jupyter in your PATH first, and only asks to installs the Conda Jupyter if that fails; you can force it to use Conda on Linux by setting ENV[\"JUPYTER\"]=\"\" during installation (see above).  (In a Debian or Ubuntu  GNU/Linux system, install the package jupyter-client to install the system jupyter.)You can use notebook(detached=true) to launch a notebook server in the background that will persist even when you quit Julia. This is also useful if you want to keep using the current Julia session instead of opening a new one.julia> using IJulia; notebook(detached=true)\nProcess(`\'C:\\Users\\JuliaUser\\.julia\\v0.7\\Conda\\deps\\usr\\Scripts\\jupyter\' notebook`, ProcessRunning)\n\njulia>By default, the notebook \"dashboard\" opens in your home directory (homedir()), but you can open the dashboard in a different directory with notebook(dir=\"/some/path\").Alternatively, you can runjupyter notebookfrom the command line (the Terminal program in MacOS or the Command Prompt in Windows). Note that if you installed jupyter via automated Miniconda installer in Pkg.add, above, then jupyter may not be in your PATH; type import Conda; Conda.SCRIPTDIR in Julia to find out where Conda installed jupyter.A \"dashboard\" window like this should open in your web browser.  Click on the New button and choose the Julia option to start a new \"notebook\".  A notebook will combine code, computed results, formatted text, and images, just as in IPython.  You can enter multiline input cells and execute them with shift-ENTER, and the menu items are mostly self-explanatory.  Refer to the Jupyter notebook documentation for more information, and see also the \"Help\" menu in the notebook itself.Given an IJulia notebook file, you can execute its code within any other Julia file (including another notebook) via the NBInclude package."
},

{
    "location": "#Running-the-JupyterLab-1",
    "page": "Readme",
    "title": "Running the JupyterLab",
    "category": "section",
    "text": "Instead of running the classic notebook interface, you can use the IDE-like JupyterLab. If you are comfortable managing your own JupyterLab installation, you can just run jupyter lab yourself in a terminal.   To simplify installation, however, you can alternatively type the following in Julia, at the julia> prompt:using IJulia\njupyterlab()Like notebook(), above, this will install JupyterLab via Conda if it is not installed already.   jupyterlab() also supports detached and dir keyword options similar to notebook()."
},

{
    "location": "#Updating-Julia-and-IJulia-1",
    "page": "Readme",
    "title": "Updating Julia and IJulia",
    "category": "section",
    "text": "Julia is improving rapidly, so it won\'t be long before you want to update to a more recent version.  To update the packages only, keeping Julia itself the same, just run:Pkg.update()at the Julia prompt (or in IJulia).If you download and install a new version of Julia from the Julia web site, you will also probably want to update the packages with Pkg.update() (in case newer versions of the packages are required for the most recent Julia).  In any case, if you install a new Julia binary (or do anything that changes the location of Julia on your computer), you must update the IJulia installation (to tell Jupyter where to find the new Julia) by runningPkg.build(\"IJulia\")at the Julia command line (important: not in IJulia)."
},

{
    "location": "#Installing-additional-Julia-kernels-1",
    "page": "Readme",
    "title": "Installing additional Julia kernels",
    "category": "section",
    "text": "You can also install additional Julia kernels, for example, to pass alternative command-line arguments to the julia executable, by using the IJulia.installkernel function.  See the help for this function (? IJulia.installkernel in Julia) for complete details.For example, if you want to run Julia with all deprecation warnings disabled, you can do:using IJulia\ninstallkernel(\"Julia nodeps\", \"--depwarn=no\")and a kernel called Julia nodeps 0.7 (if you are using Julia 0.7) will be installed (will show up in your main Jupyter kernel menu) that lets you open notebooks with this flag.You can also install kernels to run Julia with different environment variables, for example to set JULIA_NUM_THREADS for use with Julia multithreading:using IJulia\ninstallkernel(\"Julia (4 threads)\", env=Dict(\"JULIA_NUM_THREADS\"=>\"4\"))The env keyword should be a Dict mapping environment variables to values."
},

{
    "location": "#Troubleshooting:-1",
    "page": "Readme",
    "title": "Troubleshooting:",
    "category": "section",
    "text": "If you ran into a problem with the above steps, after fixing theproblem you can type Pkg.build() to try to rerun the install scripts.If you tried it a while ago, try running Pkg.update() and try again: this will fetch the latest versions of the Julia packages in case the problem you saw was fixed.  Run Pkg.build(\"IJulia\") if your Julia version may have changed.  If this doesn\'t work, you could try just deleting the whole .julia directory in your home directory (on Windows, it is called Users\\USERNAME\\.julia in your home directory) via rm(Pkg.dir(),recursive=true) in Julia and re-adding the packages.\nOn MacOS, you currently need MacOS 10.7 or later; MacOS 10.6 doesn\'t work (unless you compile Julia yourself, from source code).\nInternet Explorer 8 (the default in Windows 7) or 9 don\'t work with the notebook; use Firefox (6 or later) or Chrome (13 or later).  Internet Explorer 10 in Windows 8 works (albeit with a few rendering glitches), but Chrome or Firefox is better.\nIf the notebook opens up, but doesn\'t respond (the input label is In[*] indefinitely), try creating a new Python notebook (not Julia) from the New button in the Jupyter dashboard, to see if 1+1 works in Python.  If it is the same problem, then probably you have a firewall running on your machine (this is common on Windows) and you need to disable the firewall or at least to allow the IP address 127.0.0.1.  (For the Sophos endpoint security software, go to \"Configure Anti-Virus and HIPS\", select \"Authorization\" and then \"Websites\", and add 127.0.0.1 to \"Authorized websites\"; finally, restart your computer.)\nTry running jupyter --version and make sure that it prints 3.0.0 or larger; earlier versions of IPython are no longer supported by IJulia.\nYou can try setting ENV[\"JUPYTER\"]=\"\"; Pkg.build(\"IJulia\") to force IJulia to go back to its own Conda-based Jupyter version (if you previously tried a different jupyter)."
},

{
    "location": "#IJulia-features-1",
    "page": "Readme",
    "title": "IJulia features",
    "category": "section",
    "text": "There are various features of IJulia that allow you to interact with a running IJulia kernel."
},

{
    "location": "#Detecting-that-code-is-running-under-IJulia-1",
    "page": "Readme",
    "title": "Detecting that code is running under IJulia",
    "category": "section",
    "text": "If your code needs to detect whether it is running in an IJulia notebook (or other Jupyter client), it can check isdefined(Main, :IJulia) && Main.IJulia.inited."
},

{
    "location": "#Customizing-your-IJulia-environment-1",
    "page": "Readme",
    "title": "Customizing your IJulia environment",
    "category": "section",
    "text": "If you want to run code every time you start IJulia–-but only when in IJulia–-add a startup_ijulia.jl file to your Julia config directory, e.g., ~/.julia/config/startup_ijulia.jl."
},

{
    "location": "#Julia-and-IPython-Magics-1",
    "page": "Readme",
    "title": "Julia and IPython Magics",
    "category": "section",
    "text": "One difference from IPython is that the IJulia kernel does not use \"magics\", which are special commands prefixed with % or %% to execute code in a different language.   Instead, other syntaxes to accomplish the same goals are more natural in Julia, work in environments outside of IJulia code cells, and are often more powerful.However, if you enter an IPython magic command in an IJulia code cell, it will print help explaining how to achieve a similar effect in Julia if possible. For example, the analogue of IPython\'s %load filename in IJulia is IJulia.load(\"filename\")."
},

{
    "location": "#Prompting-for-user-input-1",
    "page": "Readme",
    "title": "Prompting for user input",
    "category": "section",
    "text": "When you are running in a notebook, ordinary I/O functions on stdin do not function.   However, you can prompt for the user to enter a string in one of two ways:readline() and readline(stdin) both open a stdin> prompt widget where the user can enter a string, which is returned by readline.\nIJulia.readprompt(prompt) displays the prompt string prompt and returns a string entered by the user.  IJulia.readprompt(prompt, password=true) does the same thing but hides the text the user types."
},

{
    "location": "#Clearing-output-1",
    "page": "Readme",
    "title": "Clearing output",
    "category": "section",
    "text": "Analogous to the IPython.display.clear_output() function in IPython, IJulia provides a function:IJulia.clear_output(wait=false)to clear the output from the current input cell.  If the optional wait argument is true, then the front-end waits to clear the output until a new output is available to replace it (to minimize flickering).  This is useful to make simple animations, via repeated calls to IJulia.clear_output(true) followed by calls to display(...) to display a new animation frame."
},

{
    "location": "#Default-display-size-1",
    "page": "Readme",
    "title": "Default display size",
    "category": "section",
    "text": "When Julia displays a large data structure such as a matrix, by default it truncates the display to a given number of lines and columns.  In IJulia, this truncation is to 30 lines and 80 columns by default.   You can change this default by the LINES and COLUMNS environment variables, respectively, which can also be changed within IJulia via ENV (e.g. ENV[\"LINES\"] = 60). (Like in the REPL, you can also display non-truncated data structures via print(x).)"
},

{
    "location": "#Preventing-truncation-of-output-1",
    "page": "Readme",
    "title": "Preventing truncation of output",
    "category": "section",
    "text": "The new default behavior of IJulia is to truncate stdout (via show or println) after 512kb. This to prevent browsers from getting bogged down when displaying the results. This limit can be increased to a custom value, like 1MB, as followsIJulia.set_max_stdio(1 << 20)"
},

{
    "location": "#Setting-the-current-module-1",
    "page": "Readme",
    "title": "Setting the current module",
    "category": "section",
    "text": "The module that code in an input cell is evaluated in can be set using Main.IJulia.set_current_module(::Module). It defaults to Main."
},

{
    "location": "#Opting-out-of-soft-scope-1",
    "page": "Readme",
    "title": "Opting out of soft scope",
    "category": "section",
    "text": "By default, IJulia evaluates user code using \"soft\" global scope, via the SoftGlobalScope.jl package: this means that you don\'t need explicit global declarations to modify global variables in for loops and similar, which is convenient for interactive use.To opt out of this behavior, making notebooks behave similarly to global code in Julia .jl files, you can set IJulia.SOFTSCOPE[] = false at runtime, or include the environment variable IJULIA_SOFTSCOPE=no environment of the IJulia kernel when it is launched."
},

{
    "location": "#Low-level-Information-1",
    "page": "Readme",
    "title": "Low-level Information",
    "category": "section",
    "text": ""
},

{
    "location": "#Using-older-IPython-versions-1",
    "page": "Readme",
    "title": "Using older IPython versions",
    "category": "section",
    "text": "While we strongly recommend using IPython version 3 or later (note that this has nothing to do with whether you use Python version 2 or 3), we recognize that in the short term some users may need to continue using IPython 2.x.  You can do this by checkout out the ipython2 branch of the IJulia package:Pkg.checkout(\"IJulia\", \"ipython2\")\nPkg.build(\"IJulia\")"
},

{
    "location": "#Manual-installation-of-IPython-1",
    "page": "Readme",
    "title": "Manual installation of IPython",
    "category": "section",
    "text": "First, you will need to install a few prerequisites:You need version 3.0 or later of IPython, or version 4 or laterof Jupyter.  Note that IPython 3.0 was released in February 2015, so if you have an older operating system you may have to install IPython manually. On Mac and Windows systems, it is currently easiest to use the Anaconda Python installer.To use the IPython notebook interface, which runs in your web browser and provides a rich multimedia environment, you will need to install the jsonschema, Jinja2, Tornado, and pyzmq (requires apt-get install libzmq-dev and possibly pip install --upgrade --force-reinstall pyzmq on Ubuntu if you are using pip) Python packages. (Given the pip installer, pip install jsonschema jinja2 tornado pyzmq should normally be sufficient.)  These should have been automatically installed if you installed IPython itself via easy_install or pip.\nTo use the IPython qtconsole interface, you will need to install PyQt4 or PySide.\nYou need Julia version 0.7 or later.Once IPython 3.0+ and Julia 0.7+ are installed, you can install IJulia from a Julia console by typing:Pkg.add(\"IJulia\")This will download IJulia and a few other prerequisites, and will set up a Julia kernel for IPython.If the command above returns an error, you may need to run Pkg.update(), then retry it, or possibly run Pkg.build(\"IJulia\") to force a rebuild."
},

{
    "location": "#Other-IPython-interfaces-1",
    "page": "Readme",
    "title": "Other IPython interfaces",
    "category": "section",
    "text": "Most people will use the notebook (browser-based) interface, but you can also use the IPython qtconsole or IPython terminal interfaces by running ipython qtconsole --kernel julia-0.7 or ipython console --kernel julia-0.7, respectively. (Replace 0.7 with whatever major Julia version you are using.)"
},

{
    "location": "#Debugging-IJulia-problems-1",
    "page": "Readme",
    "title": "Debugging IJulia problems",
    "category": "section",
    "text": "If IJulia is crashing (e.g. it gives you a \"kernel appears to have died\" message), you can modify it to print more descriptive error messages to the terminal by doing:ENV[\"IJULIA_DEBUG\"]=true\nPkg.build(\"IJulia\")Restart the notebook and look for the error message when IJulia dies. (This changes IJulia to default to verbose = true mode, and sets capture_stderr = false, hopefully sending a bunch of debugging to the terminal where you launched jupyter).When you are done, set ENV[\"IJULIA_DEBUG\"]=false and re-run Pkg.build(\"IJulia\") to turn off the debugging output."
},

{
    "location": "autodocs/#IJulia.installkernel-Tuple{AbstractString,Vararg{AbstractString,N} where N}",
    "page": "Docstrings",
    "title": "IJulia.installkernel",
    "category": "method",
    "text": "installkernel(name::AbstractString, options::AbstractString...;\n              specname::AbstractString,\n              env=Dict())\n\nInstall a new Julia kernel, where the given options are passed to the julia executable, the user-visible kernel name is given by name followed by the Julia version, and the env dictionary is added to the environment.\n\nThe new kernel name is returned by installkernel.  For example:\n\nkernelpath = installkernel(\"Julia O3\", \"-O3\", env=Dict(\"FOO\"=>\"yes\"))\n\ncreates a new Julia kernel in which julia is launched with the -O3 optimization flag and FOO=yes is included in the environment variables.\n\nThe returned kernelpath is the path of the installed kernel directory, something like /...somepath.../kernels/julia-O3-1.0 (in Julia 1.0).  The specname argument can be passed to alter the name of this directory (which defaults to name with spaces replaced by hyphens).\n\nYou can uninstall the kernel by calling rm(kernelpath, recursive=true).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IJulia.jupyterlab-Tuple{}",
    "page": "Docstrings",
    "title": "IJulia.jupyterlab",
    "category": "method",
    "text": "jupyterlab(; dir=homedir(), detached=false)\n\nSimilar to IJulia.notebook() but launches JupyterLab instead of the Jupyter notebook.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IJulia.notebook-Tuple{}",
    "page": "Docstrings",
    "title": "IJulia.notebook",
    "category": "method",
    "text": "notebook(; dir=homedir(), detached=false)\n\nThe notebook() function launches the Jupyter notebook, and is equivalent to running jupyter notebook at the operating-system command-line.    The advantage of launching the notebook from Julia is that, depending on how Jupyter was installed, the user may not know where to find the jupyter executable.\n\nBy default, the notebook server is launched in the user\'s home directory, but this location can be changed by passing the desired path in the dir keyword argument.  e.g. notebook(dir=pwd()) to use the current directory.\n\nBy default, notebook() does not return; you must hit ctrl-c or quit Julia to interrupt it, which halts Jupyter.  So, you must leave the Julia terminal open for as long as you want to run Jupyter.  Alternatively, if you run notebook(detached=true), the jupyter notebook will launch in the background, and will continue running even after you quit Julia.  (The only way to stop Jupyter will then be to kill it in your operating system\'s process manager.)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IJulia.clear_history",
    "page": "Docstrings",
    "title": "IJulia.clear_history",
    "category": "function",
    "text": "clear_history([indices])\n\nThe clear_history() function clears all of the input and output history stored in the running IJulia notebook.  This is sometimes useful because all cell outputs are remember in the Out global variable, which prevents them from being freed, so potentially this could waste a lot of memory in a notebook with many large outputs.\n\nThe optional indices argument is a collection of indices indicating a subset of cell inputs/outputs to clear.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IJulia.clear_output",
    "page": "Docstrings",
    "title": "IJulia.clear_output",
    "category": "function",
    "text": "clear_output(wait=false)\n\nCall clear_output() to clear visible output from the current notebook cell.  Using wait=true clears the output only when new output is available, which reduces flickering and is useful for simple animations.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IJulia.display_dict-Tuple{Any}",
    "page": "Docstrings",
    "title": "IJulia.display_dict",
    "category": "method",
    "text": "Generate a dictionary of mime_type => data pairs for all registered MIME types. This is the format that Jupyter expects in displaydata and executeresult messages.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IJulia.display_mimejson-Tuple{Array{MIME,1},Any}",
    "page": "Docstrings",
    "title": "IJulia.display_mimejson",
    "category": "method",
    "text": "Generate the preferred json-MIME representation of x.\n\nReturns a tuple with the selected MIME type and the representation of the data using that MIME type (as a JSONText).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IJulia.display_mimestring-Tuple{Array{MIME,1},Any}",
    "page": "Docstrings",
    "title": "IJulia.display_mimestring",
    "category": "method",
    "text": "Generate the preferred MIME representation of x.\n\nReturns a tuple with the selected MIME type and the representation of the data using that MIME type.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IJulia.history",
    "page": "Docstrings",
    "title": "IJulia.history",
    "category": "function",
    "text": "history([io], [indices...])\n\nThe history() function prints all of the input history stored in the running IJulia notebook in a format convenient for copying.\n\nThe optional indices argument is one or more indices or collections of indices indicating a subset input cells to print.\n\nThe optional io argument is for specifying an output stream. The default is stdout.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IJulia.load",
    "page": "Docstrings",
    "title": "IJulia.load",
    "category": "function",
    "text": "load(filename, replace=false)\n\nLoad the file given by filename into a new input code cell in the running IJulia notebook, analogous to the %load magics in IPython. If the optional argument replace is true, then the file contents replace the current cell rather than creating a new cell.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IJulia.load_string",
    "page": "Docstrings",
    "title": "IJulia.load_string",
    "category": "function",
    "text": "load_string(s, replace=false)\n\nLoad the string s into a new input code cell in the running IJulia notebook, somewhat analogous to the %load magics in IPython. If the optional argument replace is true, then s replaces the current cell rather than creating a new cell.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IJulia.num_utf8_trailing-Tuple{Array{UInt8,1}}",
    "page": "Docstrings",
    "title": "IJulia.num_utf8_trailing",
    "category": "method",
    "text": "If d ends with an incomplete UTF8-encoded character, return the number of trailing incomplete bytes. Otherwise, return 0.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IJulia.pop_posterror_hook-Tuple{Function}",
    "page": "Docstrings",
    "title": "IJulia.pop_posterror_hook",
    "category": "method",
    "text": "pop_posterror_hook(f::Function)\n\nRemove a function f() from the list of functions to execute after an error occurs when a notebook cell is evaluated.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IJulia.pop_postexecute_hook-Tuple{Function}",
    "page": "Docstrings",
    "title": "IJulia.pop_postexecute_hook",
    "category": "method",
    "text": "pop_postexecute_hook(f::Function)\n\nRemove a function f() from the list of functions to execute after executing any notebook cell.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IJulia.pop_preexecute_hook-Tuple{Function}",
    "page": "Docstrings",
    "title": "IJulia.pop_preexecute_hook",
    "category": "method",
    "text": "pop_preexecute_hook(f::Function)\n\nRemove a function f() from the list of functions to execute before executing any notebook cell.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IJulia.push_posterror_hook-Tuple{Function}",
    "page": "Docstrings",
    "title": "IJulia.push_posterror_hook",
    "category": "method",
    "text": "pop_posterror_hook(f::Function)\n\nRemove a function f() from the list of functions to execute after an error occurs when a notebook cell is evaluated.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IJulia.push_postexecute_hook-Tuple{Function}",
    "page": "Docstrings",
    "title": "IJulia.push_postexecute_hook",
    "category": "method",
    "text": "push_postexecute_hook(f::Function)\n\nPush a function f() onto the end of a list of functions to execute after executing any notebook cell.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IJulia.push_preexecute_hook-Tuple{Function}",
    "page": "Docstrings",
    "title": "IJulia.push_preexecute_hook",
    "category": "method",
    "text": "push_preexecute_hook(f::Function)\n\nPush a function f() onto the end of a list of functions to execute before executing any notebook cell.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IJulia.readprompt-Tuple{AbstractString}",
    "page": "Docstrings",
    "title": "IJulia.readprompt",
    "category": "method",
    "text": "readprompt(prompt::AbstractString; password::Bool=false)\n\nDisplay the prompt string, request user input, and return the string entered by the user.  If password is true, the user\'s input is not displayed during typing.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IJulia.set_cur_msg-Tuple{Any}",
    "page": "Docstrings",
    "title": "IJulia.set_cur_msg",
    "category": "method",
    "text": "Jupyter associates cells with message headers. Once a cell\'s execution state has been set as to idle, it will silently drop stream messages (i.e. output to stdout and stderr) - see https://github.com/jupyter/notebook/issues/518. When using Interact, and a widget\'s state changes, a new message header is sent to the IJulia kernel, and while Reactive is updating Signal graph state, it\'s execution state is busy, meaning Jupyter will not drop stream messages if Interact can set the header message under which the stream messages will be sent. Hence the need for this function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IJulia.set_max_stdio-Tuple{Integer}",
    "page": "Docstrings",
    "title": "IJulia.set_max_stdio",
    "category": "method",
    "text": "set_max_stdio(max_output::Integer)\n\nSets the maximum number of bytes, max_output, that can be written to stdout and stderr before getting truncated. A large value here allows a lot of output to be displayed in the notebook, potentially bogging down the browser.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IJulia.set_verbose",
    "page": "Docstrings",
    "title": "IJulia.set_verbose",
    "category": "function",
    "text": "set_verbose(v=true)\n\nThis function enables (or disables, for set_verbose(false)) verbose output from the IJulia kernel, when called within a running notebook. This consists of log messages printed to the terminal window where jupyter was launched, displaying information about every message sent or received by the kernel.   Used for debugging IJulia.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IJulia.watch_stream-Tuple{IO,AbstractString}",
    "page": "Docstrings",
    "title": "IJulia.watch_stream",
    "category": "method",
    "text": "Continually read from (size limited) Libuv/OS buffer into an IObuffer to avoid problems when the Libuv/OS buffer gets full (https://github.com/JuliaLang/julia/issues/8789). Send data immediately when buffer contains more than max_bytes bytes. Otherwise, if data is available it will be sent every stream_interval seconds (see the Timers set up in watchstdio). Truncate the output to `maxoutputperrequest` bytes per execution request since excessive output can bring browsers to a grinding halt.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [IJulia]\nOrder = [:type, :function]"
},

]}
