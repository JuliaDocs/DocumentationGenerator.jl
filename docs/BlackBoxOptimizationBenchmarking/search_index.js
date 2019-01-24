var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#BlackBoxOptimizationBenchmarking.jl-1",
    "page": "Readme",
    "title": "BlackBoxOptimizationBenchmarking.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status)A Julia implementation of the Black-Box-Optimization-Benchmarking (BBOB) functions."
},

{
    "location": "#Benchmark-results-1",
    "page": "Readme",
    "title": "Benchmark results",
    "category": "section",
    "text": "The average sucess rate (meaning the optimizer reached the minimum + 1e-6): (Image: benchmark)Python CMA-ES is the best overall (mainly in higher dimension),  while some of BlackBoxOptim.jl optimizers are better for large numbers of function evaluation."
},

{
    "location": "#The-average-sucess-rate-across-the-dimension-of-the-function:-1",
    "page": "Readme",
    "title": "The average sucess rate across the dimension of the function:",
    "category": "section",
    "text": "(Image: benchmark)(Image: benchmark)(Image: benchmark)"
},

{
    "location": "#The-total-relative-run-time-of-each-optimizer-1",
    "page": "Readme",
    "title": "The total relative run time of each optimizer",
    "category": "section",
    "text": "(Image: benchmark)Note that the Python algorithm are called from Julia, which might cause some overhead."
},

{
    "location": "#Functions-1",
    "page": "Readme",
    "title": "Functions",
    "category": "section",
    "text": "Functions can be accessed as BlackBoxOptimizationBenchmarking.F1, which returns a BBOBFunction with fields f containing the function itself, f_opt its minimal value, and x_opt its minimizer, i.e. f(x_opt) = f_opt.Functions can be listed using enumerate:julia> enumerate(BBOBFunction)\n20-element Array{BlackBoxOptimizationBenchmarking.BBOBFunction,1}:\n Sphere                                           \n Ellipsoidal Function                             \n Discus Function                                  \n Bent Cigar Function                              \n Sharp Ridge Function                             \n Different Powers Function                        \n Rastrigin Function                               \n Weierstrass Function                             \n Schaffers F7 Function                            \n Schaffers F7 Function, moderately ill-conditioned\n Composite Griewank-Rosenbrock Function F8F2      \n Ellipsoidal                                      \n Schwefel Function                                \n Rastrigin                                        \n Buche-Rastrigin                                  \n Linear Slope                                     \n Attractive Sector                                \n Step Ellipsoidal Function                        \n Rosenbrock Function, original                    \n Rosenbrock Function, rotated\n ```\n \nA benchmark for a single optimizer and function can be run with:\njulia benchmark(optimizer::Any, f::BBOBFunction, run_lengths, Ntrials, dimensions, Δf)\nOr for a collection of optimizers with:\njulia benchmark(optimizers::Vector{T}, funcs, run_lengths, Ntrials, dimensions, Δf) ```See test/runtests.jl         The optimizer must implement the methods optimize, minimum and minimizer, seescripts/optimizers_interface.jl"
},

{
    "location": "#Reference:-1",
    "page": "Readme",
    "title": "Reference:",
    "category": "section",
    "text": "http://coco.lri.fr/downloads/download15.01/bbobdocfunctions.pdf"
},

{
    "location": "autodocs/#BlackBoxOptimizationBenchmarking.f1-Tuple{Any}",
    "page": "Docstrings",
    "title": "BlackBoxOptimizationBenchmarking.f1",
    "category": "method",
    "text": "Sphere Function \n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptimizationBenchmarking.f10-Tuple{Any}",
    "page": "Docstrings",
    "title": "BlackBoxOptimizationBenchmarking.f10",
    "category": "method",
    "text": "Ellipsoidal Function \n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptimizationBenchmarking.f11-Tuple{Any}",
    "page": "Docstrings",
    "title": "BlackBoxOptimizationBenchmarking.f11",
    "category": "method",
    "text": "Discus Function \n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptimizationBenchmarking.f12-Tuple{Any}",
    "page": "Docstrings",
    "title": "BlackBoxOptimizationBenchmarking.f12",
    "category": "method",
    "text": "Bent Cigar Function \n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptimizationBenchmarking.f13-Tuple{Any}",
    "page": "Docstrings",
    "title": "BlackBoxOptimizationBenchmarking.f13",
    "category": "method",
    "text": "Sharp Ridge Function \n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptimizationBenchmarking.f14-Tuple{Any}",
    "page": "Docstrings",
    "title": "BlackBoxOptimizationBenchmarking.f14",
    "category": "method",
    "text": "Different Powers Function \n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptimizationBenchmarking.f15-Tuple{Any}",
    "page": "Docstrings",
    "title": "BlackBoxOptimizationBenchmarking.f15",
    "category": "method",
    "text": "Rastrigin Function \n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptimizationBenchmarking.f16-Tuple{Any}",
    "page": "Docstrings",
    "title": "BlackBoxOptimizationBenchmarking.f16",
    "category": "method",
    "text": "Weierstrass Function \n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptimizationBenchmarking.f17-Tuple{Any}",
    "page": "Docstrings",
    "title": "BlackBoxOptimizationBenchmarking.f17",
    "category": "method",
    "text": "Schaffers F7 Function\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptimizationBenchmarking.f18-Tuple{Any}",
    "page": "Docstrings",
    "title": "BlackBoxOptimizationBenchmarking.f18",
    "category": "method",
    "text": "Schaffers F7 Function, moderately ill-conditioned \n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptimizationBenchmarking.f19-Tuple{Any}",
    "page": "Docstrings",
    "title": "BlackBoxOptimizationBenchmarking.f19",
    "category": "method",
    "text": "Composite Griewank-Rosenbrock Function F8F2 \n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptimizationBenchmarking.f2-Tuple{Any}",
    "page": "Docstrings",
    "title": "BlackBoxOptimizationBenchmarking.f2",
    "category": "method",
    "text": "Ellipsoidal Function \n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptimizationBenchmarking.f20-Tuple{Any}",
    "page": "Docstrings",
    "title": "BlackBoxOptimizationBenchmarking.f20",
    "category": "method",
    "text": "Schwefel Function \n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptimizationBenchmarking.f3-Tuple{Any}",
    "page": "Docstrings",
    "title": "BlackBoxOptimizationBenchmarking.f3",
    "category": "method",
    "text": "Rastrigin Function \n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptimizationBenchmarking.f4-Tuple{Any}",
    "page": "Docstrings",
    "title": "BlackBoxOptimizationBenchmarking.f4",
    "category": "method",
    "text": "Buche-Rastrigin Function \n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptimizationBenchmarking.f5-Tuple{Any}",
    "page": "Docstrings",
    "title": "BlackBoxOptimizationBenchmarking.f5",
    "category": "method",
    "text": "Linear Slope \n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptimizationBenchmarking.f6-Tuple{Any}",
    "page": "Docstrings",
    "title": "BlackBoxOptimizationBenchmarking.f6",
    "category": "method",
    "text": "Attractive Sector Function \n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptimizationBenchmarking.f7-Tuple{Any}",
    "page": "Docstrings",
    "title": "BlackBoxOptimizationBenchmarking.f7",
    "category": "method",
    "text": "Step Ellipsoidal Function \n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptimizationBenchmarking.f8-Tuple{Any}",
    "page": "Docstrings",
    "title": "BlackBoxOptimizationBenchmarking.f8",
    "category": "method",
    "text": "Rosenbrock Function, original \n\n\n\n\n\n"
},

{
    "location": "autodocs/#BlackBoxOptimizationBenchmarking.f9-Tuple{Any}",
    "page": "Docstrings",
    "title": "BlackBoxOptimizationBenchmarking.f9",
    "category": "method",
    "text": "Rosenbrock Function, rotated \n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [BlackBoxOptimizationBenchmarking]\nOrder = [:type, :function]"
},

]}
