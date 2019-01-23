var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#AmplNLWriter.jl-1",
    "page": "Readme",
    "title": "AmplNLWriter.jl",
    "category": "section",
    "text": "Build Status (Linux, OSX) Build Status (Windows) Coverage\n[![][build-img]][build-url] [![Build Status][app-build-img]][app-build-url] [![Codecov branch][codecov-img]][codecov-url][build-img]: https://travis-ci.org/JuliaOpt/AmplNLWriter.jl.svg?branch=master [build-url]: https://travis-ci.org/JuliaOpt/AmplNLWriter.jl[app-build-img]: https://ci.appveyor.com/api/projects/status/github/JuliaOpt/AmplNLWriter.jl?branch=master&svg=true [app-build-url]: https://ci.appveyor.com/project/jackdunnnz/amplnlwriter-jl/branch/master[codecov-img]: https://codecov.io/github/JuliaOpt/AmplNLWriter.jl/coverage.svg?branch=master [codecov-url]: https://codecov.io/github/JuliaOpt/AmplNLWriter.jl?branch=masterThis Julia package is an interface between MathProgBase.jl and AMPL-enabled solvers. It is similar in nature to CoinOptServices.jl, but instead uses AMPL\'s low-level .nl file format.A list of AMPL-enabled solvers is available here.Development of AmplNLWriter.jl is community driven and has no official connection with the AMPL modeling language or AMPL Optimization Inc."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "AmplNLWriter.jl can be installed using the Julia package manager with the following command:Pkg.add(\"AmplNLWriter\")"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "AmplNLWriter.jl provides AmplNLSolver as a usable solver in JuMP. The following Julia code uses the Bonmin solver in JuMP via AmplNLWriter.jl:julia> using JuMP, AmplNLWriter\njulia> m = Model(solver=AmplNLSolver(\"bonmin\"))You can then model and solve your optimization problem as usual. See JuMP.jl for more details.The AmplNLSolver() constructor requires as the first argument the name of the solver command needed to run the desired solver. For example, if the bonmin executable is on the system path, you can use this solver using AmplNLSolver(bonmin). If the solver is not on the path, the full path to the solver will need to be passed in. This solver executable must be an AMPL-compatible solver.The second (optional) argument to AmplNLSolver() is a VectorASCIIString of solver options. These options are appended to the solve command separated by spaces, and the required format depends on the solver that you are using. Generally, they will be of the form key=value, where key is the name of the option to set and value is the desired value. For example, to set the NLP log level to 0 in Bonmin, you would run AmplNLSolver(bonmin bonminnlp_log_level=0). For a list of options supported by your solver, check the solver\'s documentation, or run pathtosolver -= at the command line e.g. run bonmin -= for a list of all Bonmin options.In the examples folder you can see a range of problems solved using this package via JuMP.The AmplNLSolver should also work with any other MathProgBase-compliant linear or nonlinear optimization modeling tools, though this has not been tested."
},

{
    "location": "#Checking-solve-results-1",
    "page": "Readme",
    "title": "Checking solve results",
    "category": "section",
    "text": "In addition to returning the status via MathProgBase.status (or status = solve(m) in JuMP), it is possible to extract the same post-solve variables that are present in AMPL:solve_result: one of solved, solved?, infeasible, unbounded, limit, failure\nsolve_result_num: the numeric code returned by the solver. This is solver-specific and gives more granularity than solve_result\nsolve_message: the message printed by the solver at termination\nsolve_exitcode: the exitcode of the solve processThese can be accessed as follows:ampl_model = getInternalModel(m)  # If using JuMP, get a reference to the MathProgBase model\n@show get_solve_result(ampl_model)\n@show get_solve_result_num(ampl_model)\n@show get_solve_message(ampl_model)\n@show get_solve_exitcode(ampl_model)"
},

{
    "location": "#Guides-for-specific-solvers-1",
    "page": "Readme",
    "title": "Guides for specific solvers",
    "category": "section",
    "text": ""
},

{
    "location": "#Bonmin/Couenne/Ipopt-1",
    "page": "Readme",
    "title": "Bonmin/Couenne/Ipopt",
    "category": "section",
    "text": "NOTE: AmplNLWriter v0.4.0 introduced a breaking change by removing BonminNLSolver, CouenneNLSolver, and IpoptNLSolver. Users are now expected to pass the path of the solver executable to AmplNLSolver.If you have CoinOptServices.jl installed, you can easily use the Bonmin or Couenne solvers installed by this package:Bonmin: AmplNLSolver(CoinOptServicesbonmin options)\nCouenne: AmplNLSolver(CoinOptServicescouenne options)Similarly, if you have Ipopt.jl installed, you can use Ipopt by using the solver AmplNLSolver(Ipopt.amplexe, options).Bonmin, Couenne and Ipopt all take options in the format key=value, and the available options can be seen by running pathtobonmin -= and similarly for the other solvers. For example, the following will turn off the logging in Bonmin for both the NLP and Branch and Bound solvers:AmplNLSolver(CoinOptServices.bonmin, [\"bonmin.nlp_log_level=0\"; \"bonmin.bb_log_level=0\"])Note that some of the options don\'t seem to take effect when specified using the command-line options (especially for Couenne), and instead you need to use an opt file. The opt file takes the name of the solver, e.g. bonminopt, and each line of this file contains an option name and the desired value separated by a space. For instance, to set the absolute and relative tolerances in Couenne to 1 and 0.05 respectively, the couenneopt file should beallowable_gap 1\nallowable_fraction_gap 0.05In order for the options to be loaded, this file must be located in the current working directory whenever the model is solved.A list of available options for the respective opt files can be found here:Ipopt\nBonmin (plus Ipopt options)\nCouenne (plus Ipopt and Bonmin options)"
},

{
    "location": "#SCIP-1",
    "page": "Readme",
    "title": "SCIP",
    "category": "section",
    "text": "To use SCIP with AmplNLWriter.jl, you must first compile the scipampl binary which is a version of SCIP with support for the AMPL .nl interface. To do this, you can follow the instructions here, which we have tested on OS X and Linux.After doing this, you can access SCIP through AmplNLSolver(pathtoscipampl). Options can be specified for SCIP using a scipset file, where each line is of the form key = value. For example, the following scip.set file will set the verbosity level to 0:display/verblevel = 0A list of valid options for the file can be found here.To use the scipset file, you must pass the path to the scipset file as the first (and only) option to the solver:AmplNLSolver(\"/path/to/scipampl\", [\"/path/to/scip.set\"])"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [AmplNLWriter]\nOrder = [:type, :function]"
},

]}
