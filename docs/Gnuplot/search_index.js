var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Gnuplot.jl-1",
    "page": "Readme",
    "title": "Gnuplot.jl",
    "category": "section",
    "text": ""
},

{
    "location": "#A-Julia-interface-to-Gnuplot.-1",
    "page": "Readme",
    "title": "A Julia interface to Gnuplot.",
    "category": "section",
    "text": "(Image: Build Status)Gnuplot.jl allows easy and fast use of Gnuplot as data visualization tool in Julia.  Its main features are:transparent interface between Julia and gnuplot to exploit all functionalities of the latter, both present and future ones;\nfast data transmission to gnuplot through system pipes (no temporary files involved);\nhandles multiple gnuplot process simultaneously;\nsupport for multiplots;\nsave sessions into gnuplot scripts;\nextremely concise syntax (see examples below) makes it ideal for interactive data exploration;\nvery easy to use: if you know gnuplot you\'re ready to go.The purpose is similar to the Gaston package, but Gnuplot.jl main focus is on on the syntax conciseness and ease of use."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "In the Julia REPL type:Pkg.add(\"Gnuplot\")You\'ll also need gnuplot (ver. >= 4.7) installed on your system."
},

{
    "location": "#Usage:-1",
    "page": "Readme",
    "title": "Usage:",
    "category": "section",
    "text": "The simplemost plot ever can be generated with just 8 characters:using Gnuplot\n@gp 1:10A slightly more complicated one showing a parabola with a solid line and a title:x = 1:10\n@gp x x.^2 \"w l tit \'Parabola\'\"A real life example showing some random noise generated data:# Create some noisy data...\nx = range(-2pi, stop=2pi, length=100);\ny = 1.5 .* sin.(0.3 .+ 0.7x) ;\nnoise = randn(length(x))./2;\ne = 0.5 * fill(1., length(x));\n\n# ...and show them using gnuplot.\n@gp(\"set key horizontal\", \"set grid\", title=\"My title\",\n    xrange=(-7,7), ylabel=\"Y label\", xlab=\"X label\", \n    x, y, \"w l t \'Real model\' dt 2 lw 2 lc rgb \'red\'\",\n    x, y+noise, e, \"w errorbars t \'Data\'\");That\'s it for the first plots. The syntax should be familiar to most gnuplot users, with this code we:set a few gnuplot properties (key and grid);\nset the X axis range and Y axis label;\nsend the data to gnuplot;\nplot two data sets specifying a few details (style, line width, color, legend, etc...).Note that this simple example already covers the vast majority of use cases, since the remaining details of the plot can be easily tweaked by adding the appropriate gnuplot command.  Also note that you would barely recognize the Julia language by just looking at the @gp call since Gnuplot.jl aims to be mostly transparent: the user is supposed to focus only on the data and on the gnuplot commands, rather than the package details.If you set the verbose option (setverbosity(true), which is false by default) you\'ll be able to see all the communication taking place between the Gnuplot.jl package and the underlyng Gnuplot process.  Repeating the last command:julia> @gp(\"set key horizontal\", \"set grid\", title=\"My title\",\n    xrange=(-7,7), ylabel=\"Y label\", xlab=\"X label\", \n    x, y, \"w l t \'Real model\' dt 2 lw 2 lc rgb \'red\'\",\n    x, y+noise, e, \"w errorbars t \'Data\'\");\nGNUPLOT (default) reset session\nGNUPLOT (default) print GPVAL_TERM\nGNUPLOT (default) -> qt\nGNUPLOT (default) print GPVAL_TERMOPTIONS\nGNUPLOT (default) -> 0 title \"Gnuplot.jl: default\" font \"Sans,9\"\nGNUPLOT (default) set key horizontal\nGNUPLOT (default) set grid\nGNUPLOT (default) set title  \'My title\'\nGNUPLOT (default) set xrange  [-7:7]\nGNUPLOT (default) set ylabel \'Y label\'\nGNUPLOT (default) set xlabel \'X label\'\nGNUPLOT (default) $data0 << EOD\nGNUPLOT (default)  -6.283185307179586 1.2258873407968363\nGNUPLOT (default)  -6.156252270670907 1.1443471266509504\nGNUPLOT (default)  -6.029319234162229 1.05377837392046\nGNUPLOT (default) ...\nGNUPLOT (default) EOD\nGNUPLOT (default) $data1 << EOD\nGNUPLOT (default)  -6.283185307179586 1.516291874781302 0.5\nGNUPLOT (default)  -6.156252270670907 1.5490769687987143 0.5\nGNUPLOT (default)  -6.029319234162229 0.30753349072971314 0.5\nGNUPLOT (default) ...\nGNUPLOT (default) EOD\nGNUPLOT (default) set key horizontal\nGNUPLOT (default) set grid\nGNUPLOT (default) set title  \'My title\'\nGNUPLOT (default) set xrange  [-7:7]\nGNUPLOT (default) set ylabel \'Y label\'\nGNUPLOT (default) set xlabel \'X label\'\nGNUPLOT (default) plot  \\\n  $data0 w l t \'Real model\' dt 2 lw 2 lc rgb \'red\', \\\n  $data1 w errorbars t \'Data\'\nGNUPLOT (default) The Gnuplot.jl package (note the leading GNUPLOT...) tells us which commands are being sent to the gnuplot process and the name of the current gnuplot session (default).  The Gnuplot.jl package will also print the replies from gnuplot, e.g.:julia> Gnuplot.exec(\"print GPVAL_TERM\");\nGNUPLOT (default) print GPVAL_TERM\nGNUPLOT (default) -> qtNote the different color in the reply (if your terminal is able to display colors).So far we have shown how to produce plots with a single command, however such task can also be performed using multiple statements.  The syntax is exactly the same, but we should use the :- symbol at the beginning of each statement (except the first) and at the end of each statement (except the last), e.g.:# Reset the gnuplot session and give the dataset the name `MyDataSet1`\nname = \"\\$MyDataSet1\"\n@gp x y+noise e name :-\n\n# Define a model function to be fitted\n@gp :- \"f(x) = a * sin(b + c*x); a = 1; b = 1; c = 1;\"  :-\n\n# Fit the function to the :aa dataset\n@gp :- \"fit f(x) $name u 1:2:3 via a, b, c;\" :-\n\n# Prepare a multiplot showing the data, the model...\n@gp :- \"set multiplot layout 2,1\" :-\n@gp :- \"plot $name w points tit \'Data\'\" ylab=\"Data and model\" :-\n@gp :- \"plot $name u 1:(f(\\$1)) w lines tit \'Best fit\'\" :-\n\n# ... and the residuals (the `2` here refer to the second plot in the multiplot).\n@gp :- 2 xlab=\"X label\" ylab=\"Residuals\" :-\n@gp :- \"plot $name u 1:((f(\\$1)-\\$2) / \\$3):(1) w errorbars notit\"The Gnuplot.jl package also provide support  As discussed above, Gnuplot.jl allows to trasparently exploit all gnuplot functionalities.  E.g., we can show a random image with:@gp randn(Float64, 30, 50) \"w image\"or show an interactive 3D plots using the @gsp macro in place of @gp, e.g.:@gsp randn(Float64, 30, 50)Further documentation for the @gp and @gsp macros is available in the REPL by means of the @doc macro or by typing ? in the REPL followed by the macro name."
},

{
    "location": "#Multiple-gnuplot-istances-1",
    "page": "Readme",
    "title": "Multiple gnuplot istances",
    "category": "section",
    "text": "The Gnuplot.jl package can handle multiple gnuplot istances simultaneously, each idenitified by a unique session name (actually a Julia symbol).  To use a specific session simply name it in a @gp or @gsp call.  If the session is not yet created it will be automatically started:# Plot using session GP1 \nx = 1:10\n@gp :GP1 x x.^2\n\n# Plot using session GP2\n@gp x x.^2 :GP2\n\n# Plot using default session\n@gp x x.^2If needed, a specific session can be started by specifying a complete file path for the gnuplot executable, e.g.gp = gnuplot(:CUSTOM1, \"/path/to/gnuplot/executable\")Also, a session can be started as a dry one, i.e. a session with no underlying gnuplot process, by omitting the path to the Gnuplot executable:gp = gnuplot(:DRY_SESSION)The prupose is to create gnuplot scripts without running them, e.g:@gp :DRY_SESSION x x.^2 \"w l\" \nsave(\"test.gp\")The test.gp can then be loaded directly in gnuplot with:gnuplot> load \'test.gp\'"
},

{
    "location": "#Direct-execution-of-gnuplot-commands-1",
    "page": "Readme",
    "title": "Direct execution of gnuplot commands",
    "category": "section",
    "text": "Both the @gp and @gsp macros stores data and commands in the package state to allow using multiple statements for a single plot, or to save all data and commands on a script file.  However the user may directly execute command on the underlying gnuplot process using the gpeval function.  E.g., we can retrieve the values of the fitting parameters of the previous example:# Retrieve values fr a, b and c\na = parse(Float64, exec(\"print a\"))\nb = parse(Float64, exec(\"print b\"))\nc = parse(Float64, exec(\"print c\"))"
},

{
    "location": "#Terminating-a-session-1",
    "page": "Readme",
    "title": "Terminating a session",
    "category": "section",
    "text": "A session and the associated gnuplot process can be terminated by a call to quit, specifying the session name, e.g.:julia> quit(:GP1)A call to quitall() will terminate all active sessions."
},

{
    "location": "autodocs/#Gnuplot.exec-Tuple{Symbol,Array{String,1}}",
    "page": "Docstrings",
    "title": "Gnuplot.exec",
    "category": "method",
    "text": "exec(sid::Symbol, s::Vector{String})\n\nDirectly execute commands on the underlying Gnuplot process, and return the result(s).\n\nExamples:\n\nexec(\"print GPVAL_TERM\")\nexec(\"plot sin(x)\")\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Gnuplot.gnuplot-Tuple{Symbol}",
    "page": "Docstrings",
    "title": "Gnuplot.gnuplot",
    "category": "method",
    "text": "gnuplot(sid::Symbol)\n\ngnuplot(sid::Symbol, cmd::AbstractString)\n\nInitialize a new session and (optionally) the associated Gnuplot process\n\nArguments:\n\nsid: the session name (a Julia symbol);\ncmd: a string specifying the complete file path to a gnuplot executable.  If not given a dry session will be created, i.e. a session without underlying gnuplot process.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Gnuplot.quit-Tuple{Symbol}",
    "page": "Docstrings",
    "title": "Gnuplot.quit",
    "category": "method",
    "text": "quit()\n\nQuit the session and the associated gnuplot process (if any).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Gnuplot.quitall-Tuple{}",
    "page": "Docstrings",
    "title": "Gnuplot.quitall",
    "category": "method",
    "text": "quitall()\n\nQuit all the sessions and the associated gnuplot processes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Gnuplot.save-Tuple{}",
    "page": "Docstrings",
    "title": "Gnuplot.save",
    "category": "method",
    "text": "save(...)\n\nSave the data and commands in the current session to either:\n\nthe gnuplot process (i.e. produce a plot): save(term=\"\", output=\"\");\nan IO stream: save(stream::IO; term=\"\", output=\"\");\na file: save(file::AbstractStrings; term=\"\", output=\"\").\n\nTo save the data and command from a specific session pass the ID as first argument, i.e.:\n\nsave(sid::Symbol, term=\"\", output=\"\");\nsave(sid::Symbol, stream::IO; term=\"\", output=\"\");\nsave(sid::Symbol, file::AbstractStrings; term=\"\", output=\"\").\n\nIn all cases the term keyword allows to specify a gnuplot terminal, and the output keyword allows to specify an output file.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Gnuplot.setverbose-Tuple{Bool}",
    "page": "Docstrings",
    "title": "Gnuplot.setverbose",
    "category": "method",
    "text": "setverbose(b::Bool)\n\nSet verbose flag to true or false (default: false).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.println-Tuple{Gnuplot.DrySession,AbstractString}",
    "page": "Docstrings",
    "title": "Base.println",
    "category": "method",
    "text": "println\n\nSend a string to gnuplot\'s STDIN.\n\nThe commands sent through send are not stored in the current   session (use newcmd to save commands in the current session).\n\nArguments:\n\ngp: a Session object;\nstr::String: command to be sent;\ncapture=false: set to true to capture and return the output.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Gnuplot.CheckGnuplotVersion-Tuple{AbstractString}",
    "page": "Docstrings",
    "title": "Gnuplot.CheckGnuplotVersion",
    "category": "method",
    "text": "CheckGnuplotVersion\n\nCheck whether gnuplot is runnable with the command given in cmd.   Also check that gnuplot version is >= 4.7 (required to use data   blocks).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Gnuplot.newcmd-Tuple{Gnuplot.DrySession,String}",
    "page": "Docstrings",
    "title": "Gnuplot.newcmd",
    "category": "method",
    "text": "newcmd\n\nSend a command to gnuplot process and store it in the current session.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Gnuplot]\nOrder = [:type, :function]"
},

]}
