var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Circuitscape-1",
    "page": "Readme",
    "title": "Circuitscape",
    "category": "section",
    "text": "Linux and OSX: (Image: Build Status) (Image: Coverage Status) (Image: codecov.io)Windows: (Image: Build status)Users of Circuitscape on Julia v0.6 should now shift to Julia 1.0. Circuitscape on Julia v0.6 will no longer be supported.Circuitscape is an open-source program that uses circuit theory to model connectivity  in heterogeneous landscapes. Its most common applications include modeling movement and gene flow  of plants and animals, as well as identifying areas important for connectivity conservation. Circuitscape has now been rewritten in Julia for better performance and scalability. Julia is modern open-source language for scientific computing. This work is based on the original Circuitscape project by Brad McRae, Viral B. Shah  and Tanmay Mohapatra. "
},

{
    "location": "#The-New-Circuitscape-Modern,-Fast-and-Flexible-1",
    "page": "Readme",
    "title": "The New Circuitscape - Modern, Fast and Flexible",
    "category": "section",
    "text": "The new Circuitscape is built entirely in the Julia language, a new programming language for technical computing. Julia is built from the ground up to be fast. As such, this offers a number of advantages over the previous version, and these are detailed below."
},

{
    "location": "#Faster-and-More-Scalable-1",
    "page": "Readme",
    "title": "Faster and More Scalable",
    "category": "section",
    "text": "We benchmarked Circuitscape.jl (v0.1.0) with the Python version (v4.0.5) to obtain the following results. We started up Circuitscape with 16 parallel processes, and used benchmark problems from the standard Circuitscape  benchmark suite.<img src=\"/benchmark/benchmark.png\" width=650 height=450>These benchmarks were run on a Linux (Ubuntu) server machine with the following specs: Name: Intel(R) Xeon(R) Silver 4114 CPU \nClock Speed: 2.20GHz\nNumber of cores: 20  \nRAM: 384 GBFrom the benchmark, we see that the new version is upto 4x faster on 16 processes. However, the best performing bar in the chart is  Julia-CHOLMOD, which is a new feature introduced."
},

{
    "location": "#New-Solver-Mode-CHOLMOD-1",
    "page": "Readme",
    "title": "New Solver Mode - CHOLMOD",
    "category": "section",
    "text": "Julia-CHOLMOD is a new solver mode used in the new Circuitscape. It performs a cholesky decomposition on the graph  constructed, and performs a batched back substitution to compute the voltages. It plugs into the  CHOLMOD library,  which is part of the SuiteSparse collection of high performance sparse  matrix algorithms.To use the this new mode, include a line in your Circuitscape  INI file:solver = cholmodThe cholesky decomposition is a direct solver method, unlike the algebraic multigrid method used by default in both the old and the new version. The advantage with this new direct method is that it can be much faster than the iterative solution, within a particular problem size. Word of caution: The cholesky decomposition is not practical to use beyond a certain problem size because of phenomenon called fill-in, which results in loss of sparsity and large memory consumption."
},

{
    "location": "#Parallel,-everywhere-1",
    "page": "Readme",
    "title": "Parallel, everywhere",
    "category": "section",
    "text": "The old Circuitscape had limited support for parallelism, which worked on Mac and Linux, but didn\'t work on Windows. Julia as a programming language is built from the ground up to be parallel, and as a result the new Circuitscape natively supports parallelism on all three platforms."
},

{
    "location": "#Single-Precision-(Experimental)-1",
    "page": "Readme",
    "title": "Single Precision (Experimental)",
    "category": "section",
    "text": "The new Circuitscape introduces the ability to run problems in single precision as opposed to the standard double precision.Single precision usually takes much less memory, but trades off against solution accuracy. Use this new feature by including a line in your config file:precision = single"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "You will need to install Julia on your system first.  \nOnce you start Julia, install Circuitscape by: julia> using Pkg\njulia> Pkg.add(\"Circuitscape\")If you want the latest development version, you can additionally do: julia> Pkg.checkout(\"Circuitscape\")Check if all the tests are passing by doing the following:julia> Pkg.test(\"Circuitscape\")"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "The current interface to Circuitscape is through the Julia terminal. julia> using Circuitscape # loads the package into your environment\njulia> compute(\"path/to/config/file.ini\")"
},

{
    "location": "#Contributing-1",
    "page": "Readme",
    "title": "Contributing",
    "category": "section",
    "text": "If you have encounter any issues or would like to ask a question, please file  a report here. Contributions in the form of  pull requests are also welcome! "
},

{
    "location": "autodocs/#Circuitscape.compute-Tuple{String}",
    "page": "Docstrings",
    "title": "Circuitscape.compute",
    "category": "method",
    "text": "compute(path::String)\n\nCall the compute function on the configuration file.\n\nInputs:\n\npath::String - Path to configuration file\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Circuitscape.model_problem-Tuple{Any,Any}",
    "page": "Docstrings",
    "title": "Circuitscape.model_problem",
    "category": "method",
    "text": "Define model circuitscape problem - helps in tests\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Circuitscape.construct_local_node_map-Tuple{Any,Any,Any}",
    "page": "Docstrings",
    "title": "Circuitscape.construct_local_node_map",
    "category": "method",
    "text": "Construct nodemap specific to a connected component\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Circuitscape.get_num_pairs-Union{Tuple{V}, Tuple{Any,Array{V,1},Any}} where V",
    "page": "Docstrings",
    "title": "Circuitscape.get_num_pairs",
    "category": "method",
    "text": "Returns all possible pairs to solve.\n\nInput:\n\nccs::Vector{Vector{Int}} - vector of connected components\nfp::Vector{Int} - vector of focal points \nexclude_pairs::Vector{Tuple{Int,Int}} - vector of point pairs (tuples) to exclude \n\nOutput: \n\nn - total number of pairs\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Circuitscape.laplacian-Union{Tuple{SparseMatrixCSC{T,V}}, Tuple{V}, Tuple{T}} where V where T",
    "page": "Docstrings",
    "title": "Circuitscape.laplacian",
    "category": "method",
    "text": "Calculate laplacian of the adjacency matrix of a graph\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Circuitscape.network_pairwise-Tuple{Any,Any,Any}",
    "page": "Docstrings",
    "title": "Circuitscape.network_pairwise",
    "category": "method",
    "text": "Primary driver for network pairwise. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#Circuitscape.single_ground_all_pairs-Union{Tuple{V}, Tuple{T}, Tuple{GraphData{T,V},Any,Any}, Tuple{GraphData{T,V},Any,Any,Any}} where V where T",
    "page": "Docstrings",
    "title": "Circuitscape.single_ground_all_pairs",
    "category": "method",
    "text": "Core kernel of Circuitscape - used to solve several pairs\n\nInput:\n\ndata::GraphData\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Circuitscape]\nOrder = [:type, :function]"
},

]}
