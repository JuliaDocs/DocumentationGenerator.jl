var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Hungarian-1",
    "page": "Readme",
    "title": "Hungarian",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: codecov.io) (Image: Coverage Status)The package provides one implementation of the Hungarian algorithm(Kuhn-Munkres algorithm) based on its matrix interpretation. This implementation uses a sparse matrix to keep tracking those marked zeros, so it costs less time and memory than Munkres.jl. Benchmark details can be found here."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "pkg> add Hungarian"
},

{
    "location": "#Quick-start-1",
    "page": "Readme",
    "title": "Quick start",
    "category": "section",
    "text": "Let\'s say we have 5 workers and 3 tasks with the following cost matrix:weights = [ 24     1     8;\n             5     7    14;\n             6    13    20;\n            12    19    21;\n            18    25     2]We can solve the assignment problem by:julia> using Hungarian\n\njulia> assignment, cost = hungarian(weights)\n([2,1,0,0,3],8)\n\n# worker 1 => task 2 with weights[1,2] = 1\n# worker 2 => task 1 with weights[2,1] = 5\n# worker 5 => task 3 with weights[5,3] = 2\n# the minimal cost is 1 + 5 + 2 = 8  Since each worker can perform only one task and each task can be assigned to only one worker, those 0s in the assignment mean that no task is assigned to those workers."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "When solving a canonical assignment problem, namely, the cost matrix is square, one can directly get the matching via Hungarian.munkres(x) instead of hungarian(x):julia> using Hungarian\n\njulia> matching = Hungarian.munkres(rand(5,5))\n5×5 SparseArrays.SparseMatrixCSC{Int8,Int64} with 7 stored entries:\n  [1, 1]  =  1\n  [5, 1]  =  2\n  [1, 2]  =  2\n  [2, 3]  =  2\n  [2, 4]  =  1\n  [3, 4]  =  2\n  [4, 5]  =  2\n\n# 0 => non-zero\n# 1 => zero\n# 2 => STAR\njulia> Matrix(matching)\n5×5 Array{Int8,2}:\n 1  2  0  0  0\n 0  0  2  1  0\n 0  0  0  2  0\n 0  0  0  0  2\n 2  0  0  0  0\n\njulia> [findfirst(matching[i,:].==Hungarian.STAR) for i = 1:5]\n5-element Array{Int64,1}:\n 2\n 3\n 4\n 5\n 1\n\njulia> [findfirst(matching[:,i].==Hungarian.STAR) for i = 1:5]\n5-element Array{Int64,1}:\n 5\n 1\n 2\n 3\n 4"
},

{
    "location": "#References-1",
    "page": "Readme",
    "title": "References",
    "category": "section",
    "text": "J. Munkres, \"Algorithms for the Assignment and Transportation Problems\", Journal of the Society for Industrial and Applied Mathematics, 5(1):32–38, 1957 March.\nhttp://csclab.murraystate.edu/bob.pilgrim/445/munkres.html"
},

{
    "location": "autodocs/#Hungarian.hungarian-Tuple{AbstractArray{T,2} where T}",
    "page": "Docstrings",
    "title": "Hungarian.hungarian",
    "category": "method",
    "text": "hungarian(costMat) -> (assignment, cost)\n\nFind an optimal solution of the rectangular assignment problem represented by the N x M matrix costMat. Return the optimal column indices and corresponding minimal cost.\n\nThe costMat[n,m] denotes the cost to assign the nth worker to the mth job. The zero element in the return value assignment means that these workers have no assigned job.\n\nElements in the matrix can be set to missing. In this case, the corresponding matching cannot be considered by the algorithm.\n\nExamples\n\njulia> A = [ 24     1     8;\n              5     7    14;\n              6    13    20;\n             12    19    21;\n             18    25     2];\n\njulia> assignment, cost = hungarian(A)\n([2,1,0,0,3],8)\n\njulia> assignment, cost = hungarian(A\')\n([2,1,5],8)\n\njulia> using Missings\n\njulia> costMat = [ missing  1   1\n                      1     0   1\n                      1     1   0 ]\n3×3 Array{Union{Float64, Missings.Missing},2}:\nmissing  1.0  1.0\n  1.0    0.0  1.0\n  1.0    1.0  0.0\n\njulia> hungarian(costMat)\n([2, 1, 3], 2)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Hungarian.exit_criteria-Tuple{Any,Any}",
    "page": "Docstrings",
    "title": "Hungarian.exit_criteria",
    "category": "method",
    "text": "exit_criteria(colCovered, ZsDims) -> stepNum\n\nWe adjust Munkres\'s algorithm in order to deal with rectangular matrices, so only K columns are counted here, where K = min(size(Zs))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Hungarian.munkres!-Union{Tuple{AbstractArray{T,2}}, Tuple{T}} where T<:Real",
    "page": "Docstrings",
    "title": "Hungarian.munkres!",
    "category": "method",
    "text": "munkres!(costMat) -> Zs\n\nIdentical to munkres, except that it directly modifies its input matrix costMat instead of allocating a copy. As a result, the value of this matrix in the caller code will be modified and should therefore no more be used! This function should rather be used by advanced users to improve performance of critical code.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Hungarian.munkres-Union{Tuple{AbstractArray{T,2}}, Tuple{T}} where T<:Real",
    "page": "Docstrings",
    "title": "Hungarian.munkres",
    "category": "method",
    "text": "munkres(costMat) -> Zs\n\nFind an optimal solution of the assignment problem represented by the square matrix costMat. Return an sparse matrix illustrating the optimal matching.\n\nExamples\n\njulia> costMat = ones(3, 3) - eye(3, 3)\n3×3 Array{Float64,2}:\n 0.0  1.0  1.0\n 1.0  0.0  1.0\n 1.0  1.0  0.0\n\njulia> matching = Hungarian.munkres(costMat)\n3×3 sparse matrix with 3 Int64 nonzero entries:\n	[1, 1]  =  2\n	[2, 2]  =  2\n	[3, 3]  =  2\n\njulia> full(matching)\n3×3 Array{Int64,2}:\n 2  0  0\n 0  2  0\n 0  0  2\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Hungarian.step1!-NTuple{5,Any}",
    "page": "Docstrings",
    "title": "Hungarian.step1!",
    "category": "method",
    "text": "Step 1 of the original Munkres\' Assignment Algorithm\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Hungarian.step2!-NTuple{6,Any}",
    "page": "Docstrings",
    "title": "Hungarian.step2!",
    "category": "method",
    "text": "Step 2 of the original Munkres\' Assignment Algorithm\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Hungarian.step3!-Union{Tuple{T}, Tuple{AbstractArray{T,2},Any,Any,Any,Any,Any,Any,Any,Any,Any,Any,Any,Any}} where T<:Real",
    "page": "Docstrings",
    "title": "Hungarian.step3!",
    "category": "method",
    "text": "Step 3 of the original Munkres\' Assignment Algorithm\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Hungarian]\nOrder = [:type, :function]"
},

]}
