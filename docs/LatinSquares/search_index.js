var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#LatinSquares-1",
    "page": "Readme",
    "title": "LatinSquares",
    "category": "section",
    "text": "(Image: Build Status)(Image: codecov.io)This module creates Latin squares and pairs of orthogonal Latin squares. Where possible, simple number-theoretic constructions are used. Otherwise, integer programming."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "To create a simple n-by-n Latin square, use latin(n):julia> using LatinSquares\n\njulia> latin(5)\n5×5 Array{Int64,2}:\n 1  2  3  4  5\n 2  3  4  5  1\n 3  4  5  1  2\n 4  5  1  2  3\n 5  1  2  3  4To create a pair of n-by-n orthogonal Latin squares, use ortho_latin(n).julia> A,B = ortho_latin(5);\n\njulia> 10A+B\n5×5 Array{Int64,2}:\n 11  22  33  44  55\n 23  34  45  51  12\n 35  41  52  13  24\n 42  53  14  25  31\n 54  15  21  32  43Or to see the two in Latin and Greek letters:julia> print_latin(A,B)\nAα Bβ Cγ Dδ Eε\nBγ Cδ Dε Eα Aβ\nCε Dα Eβ Aγ Bδ\nDβ Eγ Aδ Bε Cα\nEδ Aε Bα Cβ DγBy default, we use a simple number-theoretic construction. When that fails, we switch to integer programming.julia> A,B = ortho_latin(4);\nNo quick solution. Using integer programming.\n\njulia> 10A+B\n4×4 Array{Int64,2}:\n 43  11  34  22\n 14  42  23  31\n 32  24  41  13\n 21  33  12  44There does not exist a pair of 6-by-6 orthogonal Latin squares, and this verifies that fact:julia> A,B = ortho_latin(6);However, the run time with the Cbc solver is very long. Changing the code to use the Gurobi solver makes this calculation feasible."
},

{
    "location": "#Command-Line-1",
    "page": "Readme",
    "title": "Command Line",
    "category": "section",
    "text": "In the src directory, the file run_latin.jl allows the user to find orthogonal Latin squares from the command line. The synatx is julia run_julia.jl n.Long-running jobs can be conveniently sent to a file like this:$ nohup julia run_latin.jl 8 > output.txt &"
},

{
    "location": "#Example-1",
    "page": "Readme",
    "title": "Example",
    "category": "section",
    "text": "Using the Gurobi solver, we can find a pair of 10-by-10 orthogonal Latin square in a mater of hours. Here\'s the result:Aα Bβ Cγ Dδ Eε Fζ Gη Hθ Iι Jκ\nBγ Iδ Hζ Eθ Aη Jα Dι Cκ Fε Gβ\nGι Cε Iα Fκ Hδ Eβ Bθ Jζ Dη Aγ\nHκ Dα Fη Aβ Gγ Cθ Iε Bι Jδ Eζ\nIβ Fγ Aε Jη Dθ Gδ Cζ Eα Bκ Hι\nJε Aζ Gθ Hγ Fι Dκ Eδ Iη Cβ Bα\nDζ Eι Bδ Gα Iκ Hε Jγ Fβ Aθ Cη\nCδ Hη Eκ Bε Jβ Aι Fα Dγ Gζ Iθ\nEη Jθ Dβ Cι Bζ Iγ Aκ Gε Hα Fδ\nFθ Gκ Jι Iζ Cα Bη Hβ Aδ Eγ DεSee the next section for how to use different solvers."
},

{
    "location": "#Other-Solvers-1",
    "page": "Readme",
    "title": "Other Solvers",
    "category": "section",
    "text": "We use the Cbc solver. If you have Gurobi on your system, that solver will run much faster. In that case, do this to switch solver.julia> using Gurobi, LatinSquares\n\njulia> set_latin_solver(GurobiSolver)\nGurobiSolver\n\njulia> @time A,B = ortho_latin(6)\nNo quick solution. Using integer programming.\nAcademic license - for non-commercial use only\nOptimize a model with 222 rows, 1296 columns and 7782 nonzeros\nVariable types: 0 continuous, 1296 integer (1296 binary)\nCoefficient statistics:\n  Matrix range     [1e+00, 1e+00]\n  Objective range  [0e+00, 0e+00]\n  Bounds range     [1e+00, 1e+00]\n  RHS range        [1e+00, 1e+00]\nPresolve removed 42 rows and 696 columns\nPresolve time: 0.01s\nPresolved: 180 rows, 600 columns, 3600 nonzeros\nVariable types: 0 continuous, 600 integer (600 binary)\n\nRoot relaxation: objective 0.000000e+00, 268 iterations, 0.01 seconds\n\n    Nodes    |    Current Node    |     Objective Bounds      |     Work\n Expl Unexpl |  Obj  Depth IntInf | Incumbent    BestBd   Gap | It/Node Time\n\n     0     0    0.00000    0  116          -    0.00000      -     -    0s\n     0     0    0.00000    0  146          -    0.00000      -     -    0s\n     0     0    0.00000    0  131          -    0.00000      -     -    0s\n     0     0    0.00000    0  131          -    0.00000      -     -    0s\n     0     0    0.00000    0   26          -    0.00000      -     -    0s\n     0     2    0.00000    0   26          -    0.00000      -     -    0s\n\nExplored 925 nodes (34447 simplex iterations) in 1.53 seconds\nThread count was 4 (of 4 available processors)\n\nSolution count 0\n\nModel is infeasible\nBest objective -, best bound -, gap -\n┌ Warning: Not solved to optimality, status: Infeasible\n└ @ JuMP ~/.julia/packages/JuMP/Xvn0n/src/solvers.jl:212\n┌ Warning: Infeasibility ray (Farkas proof) not available\n└ @ JuMP ~/.julia/packages/JuMP/Xvn0n/src/solvers.jl:223\n┌ Warning: Variable value not defined for component of Z. Check that the model was properly solved.\n└ @ JuMP ~/.julia/packages/JuMP/Xvn0n/src/JuMP.jl:475\n  1.554964 seconds (5.74 k allocations: 1.680 MiB)\n([0 0 … 0 0; 0 0 … 0 0; … ; 0 0 … 0 0; 0 0 … 0 0], [0 0 … 0 0; 0 0 … 0 0; … ; 0 0 … 0 0; 0 0 … 0 0])\n"
},

{
    "location": "autodocs/#LatinSquares.check_latin-Tuple{Array{Int64,2}}",
    "page": "Docstrings",
    "title": "LatinSquares.check_latin",
    "category": "method",
    "text": "check_latin(A) checks if A is a Latin square. (The entries must be chosen from 1:n when A is an n-by-n matrix).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LatinSquares.check_ortho-Tuple{Array{Int64,2},Array{Int64,2}}",
    "page": "Docstrings",
    "title": "LatinSquares.check_ortho",
    "category": "method",
    "text": "check_ortho(A,B) checks that matrices A and B are a pair of orthogonal Latin squares.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LatinSquares.latin",
    "page": "Docstrings",
    "title": "LatinSquares.latin",
    "category": "function",
    "text": "latin(n) returns a simple n-by-n Latin square. More generally, latin(n,a,b) generates a Latin square whose i,j-entry is a*(i-1) + b*(j-1) + 1 (wrapping around n, of course).\n\nNote: If parameters n,a,b do not generate a legitimate Latin square an error is thrown.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LatinSquares.ortho_latin",
    "page": "Docstrings",
    "title": "LatinSquares.ortho_latin",
    "category": "function",
    "text": "A,B = ortho_latin(n,quick=true) returns a pair of orthogonal n-by-n Latin squares. If quick is true, we first try to find the pair using basic number theory. If that fails, or if quick is set to false, integer programming is used.\n\nA,B = ortho_latin(n,r,s) builds the Latin squares latin(n,r) and latin(n,s) and, if they are orthogonal, returns them as the answer. (Otherwise, throws an error.) See: find_ortho_parameters.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LatinSquares.find_ortho_parameters-Tuple{Int64}",
    "page": "Docstrings",
    "title": "LatinSquares.find_ortho_parameters",
    "category": "method",
    "text": "find_ortho_parameters(n) tries to find parameters r and s so that ortho_latin(n,r,s) will succeed. Returns (r,s) if successful or throws an error if not.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [LatinSquares]\nOrder = [:type, :function]"
},

]}
