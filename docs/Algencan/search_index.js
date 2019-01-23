var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Algencan.jl-1",
    "page": "Readme",
    "title": "Algencan.jl",
    "category": "section",
    "text": "Algencan.jl is a JuMP / MathProgBase interface to the Algencan nonlinear solver.Algencan is a high performance and large scale Augmented Lagrangian solver written by Ernesto Birgin and Mario Martínez. It has many special features like being able to use HSL library functions to speed up linear algebra with sparse matrices and some smart acceleration strategies."
},

{
    "location": "#Status-1",
    "page": "Readme",
    "title": "Status",
    "category": "section",
    "text": "At this point this is alpha software. From verision v0.2.0 on the code will work with Julia 1.0 or later only. If you need to run Algencan.jl with the old Julia 0.6, please install the version v0.1.x."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "There are three main modes of installation, depending on how you want to compile Algencan."
},

{
    "location": "#The-preferred-mode:-using-HSL-1",
    "page": "Readme",
    "title": "The preferred mode: using HSL",
    "category": "section",
    "text": "Obs: We only give support for MA57 at this point.The preferred way to use Algencan is to link it against a HSL function to solve sparse linear systems. To do this you need to grab your copy of MA57 from HSL. It has a free academic license. You should receive a file named hsl_ma57-5.2.0.tar.gz.All you need to do is to create an environment variable named MA57_SOURCE pointing to this file before installing Algencan.jl. For example, if the file is located at the /tmp folder, in bash you would doexport MA57_SOURCE=/tmp/hsl_ma57-5.2.0.tar.gzAfter that just install Algencan.jl from Julia\'s REPL.(v1.0) pkg> add Algencan"
},

{
    "location": "#The-easy-mode-1",
    "page": "Readme",
    "title": "The easy mode",
    "category": "section",
    "text": "Just type(v1.0) pkg> add Algencanin package mode in Julia\'s REPL.This will download Algencan\'s code, compile it and make it available to the Algencan.jl package. However there is a major caveat here. At this point I am compiling Algencan without any HSL support. This has major influence on Algencan behavior and performance. You should use HSL whenever you have access to it."
},

{
    "location": "#Pre-compiled-libalgencan.so-1",
    "page": "Readme",
    "title": "Pre-compiled libalgencan.so",
    "category": "section",
    "text": "If you have your own copy of libalgencan.so (note that you need a shared library), you can use it. Just create an environment variable like belo before using Algencan.jl for the first time.export ALGENCAN_LIB_DIR=/tmp/libalgencan.soYou can then proceed to install Algencan.jl from the REPL(v1.0) pkg> add Algencan\njulia> using Algencan"
},

{
    "location": "#Hints-to-self-compilation-of-Algencan-with-HSL-libraries-1",
    "page": "Readme",
    "title": "Hints to self compilation of Algencan with HSL libraries",
    "category": "section",
    "text": "This wiki page documents the steps I use to compile myself a version of documents the steps I use to compile myself a version of libalgencan.so."
},

{
    "location": "autodocs/#Algencan.AlgencanSolver",
    "page": "Docstrings",
    "title": "Algencan.AlgencanSolver",
    "category": "type",
    "text": "Algencan solver that stores options\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Algencan.AlgencanSolver-Tuple{}",
    "page": "Docstrings",
    "title": "Algencan.AlgencanSolver",
    "category": "method",
    "text": "Store keyworded argments as options\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Algencan.setmultwarmstart!-Tuple{Algencan.AlgencanMathProgModel,Any}",
    "page": "Docstrings",
    "title": "Algencan.setmultwarmstart!",
    "category": "method",
    "text": "Set an inital value for the constaint mutipliers (warmstart)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Algencan.AlgencanMathProgModel",
    "page": "Docstrings",
    "title": "Algencan.AlgencanMathProgModel",
    "category": "type",
    "text": "Algencan model, that storing solution data\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Algencan.find_status-Tuple{Algencan.AlgencanMathProgModel,Float64,Float64,Float64,Int64}",
    "page": "Docstrings",
    "title": "Algencan.find_status",
    "category": "method",
    "text": "Find final status of Algencan\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Algencan.julia_fc-Tuple{Int32,Ptr{Float64},Ptr{Float64},Int32,Ptr{Float64},Ptr{Int32}}",
    "page": "Docstrings",
    "title": "Algencan.julia_fc",
    "category": "method",
    "text": "Compute objective and constraints as required by Algencan\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Algencan.julia_gjac-Tuple{Int32,Ptr{Float64},Ptr{Float64},Int32,Ptr{Int32},Ptr{Int32},Ptr{Float64},Ptr{Int32},Int32,Ptr{UInt8},Ptr{Int32}}",
    "page": "Docstrings",
    "title": "Algencan.julia_gjac",
    "category": "method",
    "text": "Compute objective gradient and constraints Jacobian as required by Algencan\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Algencan.julia_hl-Tuple{Int32,Ptr{Float64},Int32,Ptr{Float64},Float64,Ptr{Float64},Ptr{Int32},Ptr{Int32},Ptr{Float64},Ptr{Int32},Int32,Ptr{UInt8},Ptr{Int32}}",
    "page": "Docstrings",
    "title": "Algencan.julia_hl",
    "category": "method",
    "text": "Compute the Hessian of the Lagrangian as required by Algencan\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Algencan.julia_hlp-Tuple{Int32,Ptr{Float64},Int32,Ptr{Float64},Float64,Ptr{Float64},Ptr{Float64},Ptr{Float64},Ptr{UInt8},Ptr{Int32}}",
    "page": "Docstrings",
    "title": "Algencan.julia_hlp",
    "category": "method",
    "text": "Compute the Hessian of the Lagrangian times p as required by Algencan\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Algencan.option2vparam-Tuple{Algencan.AlgencanMathProgModel}",
    "page": "Docstrings",
    "title": "Algencan.option2vparam",
    "category": "method",
    "text": "Transform the option dictionary into a vparam string array\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Algencan.treat_lower_bounds-Tuple{Any,Any}",
    "page": "Docstrings",
    "title": "Algencan.treat_lower_bounds",
    "category": "method",
    "text": "Analyse the lower and upper bounds on the constraints and prepare the  data structure to treat lower bounds.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.copy-Tuple{Algencan.AlgencanMathProgModel}",
    "page": "Docstrings",
    "title": "Base.copy",
    "category": "method",
    "text": "Return a copy of the current model\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MathProgBase.SolverInterface.getobjbound-Tuple{Algencan.AlgencanMathProgModel}",
    "page": "Docstrings",
    "title": "MathProgBase.SolverInterface.getobjbound",
    "category": "method",
    "text": "Get best bound on (local) optimal value\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MathProgBase.SolverInterface.getobjgap-Tuple{Algencan.AlgencanMathProgModel}",
    "page": "Docstrings",
    "title": "MathProgBase.SolverInterface.getobjgap",
    "category": "method",
    "text": "Get gap to (local) optimality\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MathProgBase.SolverInterface.getobjval-Tuple{Algencan.AlgencanMathProgModel}",
    "page": "Docstrings",
    "title": "MathProgBase.SolverInterface.getobjval",
    "category": "method",
    "text": "Get objective value at current primal point\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MathProgBase.SolverInterface.getrawsolver-Tuple{Algencan.AlgencanMathProgModel}",
    "page": "Docstrings",
    "title": "MathProgBase.SolverInterface.getrawsolver",
    "category": "method",
    "text": "There is no inner solver, all functionality is exposed by the default interface\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MathProgBase.SolverInterface.getreducedcosts-Tuple{Algencan.AlgencanMathProgModel}",
    "page": "Docstrings",
    "title": "MathProgBase.SolverInterface.getreducedcosts",
    "category": "method",
    "text": "Return mutipliers associated with bound cosntraints\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MathProgBase.SolverInterface.getsense-Tuple{Algencan.AlgencanMathProgModel}",
    "page": "Docstrings",
    "title": "MathProgBase.SolverInterface.getsense",
    "category": "method",
    "text": "Return problem sense\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MathProgBase.SolverInterface.getsolution-Tuple{Algencan.AlgencanMathProgModel}",
    "page": "Docstrings",
    "title": "MathProgBase.SolverInterface.getsolution",
    "category": "method",
    "text": "Return the current primal point, the solution after calling optimize\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MathProgBase.SolverInterface.getsolvetime-Tuple{Algencan.AlgencanMathProgModel}",
    "page": "Docstrings",
    "title": "MathProgBase.SolverInterface.getsolvetime",
    "category": "method",
    "text": "Get the solution time\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MathProgBase.SolverInterface.getvartype-Tuple{Algencan.AlgencanMathProgModel}",
    "page": "Docstrings",
    "title": "MathProgBase.SolverInterface.getvartype",
    "category": "method",
    "text": "Return variable types: they are all continuous\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MathProgBase.SolverInterface.loadproblem!-Tuple{Algencan.AlgencanMathProgModel,Integer,Integer,Any,Any,Any,Any,Symbol,MathProgBase.SolverInterface.AbstractNLPEvaluator}",
    "page": "Docstrings",
    "title": "MathProgBase.SolverInterface.loadproblem!",
    "category": "method",
    "text": "Loads the problem with its basic data and functions in a NLPEvaluator\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MathProgBase.SolverInterface.numconstr-Tuple{Algencan.AlgencanMathProgModel}",
    "page": "Docstrings",
    "title": "MathProgBase.SolverInterface.numconstr",
    "category": "method",
    "text": "Return the number of constraints\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MathProgBase.SolverInterface.numvar-Tuple{Algencan.AlgencanMathProgModel}",
    "page": "Docstrings",
    "title": "MathProgBase.SolverInterface.numvar",
    "category": "method",
    "text": "Return the number of decision variables\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MathProgBase.SolverInterface.setparameters!-Tuple{Union{AlgencanMathProgModel, AlgencanSolver}}",
    "page": "Docstrings",
    "title": "MathProgBase.SolverInterface.setparameters!",
    "category": "method",
    "text": "Set parameter for a solver, that will be default for all next models\n\nYou can use any Algencan parameter that can be set in a specification file plus :epsfeas, :epsopt, :efstain, :eostain, efacc, :eoac, :outputfnm, :specfnm.\n\nSee more details in Algencan documentation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MathProgBase.SolverInterface.setsense!-Tuple{Algencan.AlgencanMathProgModel,Any}",
    "page": "Docstrings",
    "title": "MathProgBase.SolverInterface.setsense!",
    "category": "method",
    "text": "Change optimization sense, either :Min or :Max\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MathProgBase.SolverInterface.setvartype!-Tuple{Algencan.AlgencanMathProgModel,Array{Symbol,1}}",
    "page": "Docstrings",
    "title": "MathProgBase.SolverInterface.setvartype!",
    "category": "method",
    "text": "Algencan only deals with continuous variable, so inform if this is not the case\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MathProgBase.SolverInterface.setwarmstart!-Tuple{Algencan.AlgencanMathProgModel,Any}",
    "page": "Docstrings",
    "title": "MathProgBase.SolverInterface.setwarmstart!",
    "category": "method",
    "text": "Set an initial value for the decision variables (warmstart)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MathProgBase.SolverInterface.status-Tuple{Algencan.AlgencanMathProgModel}",
    "page": "Docstrings",
    "title": "MathProgBase.SolverInterface.status",
    "category": "method",
    "text": "Get current model status\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Algencan]\nOrder = [:type, :function]"
},

]}
