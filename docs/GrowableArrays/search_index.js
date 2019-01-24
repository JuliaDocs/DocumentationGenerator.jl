var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#GrowableArrays.jl-1",
    "page": "Readme",
    "title": "GrowableArrays.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status)GrowableArrays was developed by Chris Rackauckas. This package implements the data structures GrowableArray and StackedArray which are designed to grow efficiently yet be easy to access and transform into more traditional arrays."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "To install the package, simply doPkg.add(\"GrowableArrays\")\nusing GrowableArrays"
},

{
    "location": "#Using-the-Package-1",
    "page": "Readme",
    "title": "Using the Package",
    "category": "section",
    "text": "The use of GrowableArrays is best shown by an example problem. Say at every step of a loop we wished to append a matrix u to a vector uFull. One case where this shows up is in solving Partial Differential Equations. The naive way to solve this problem is to concatenate u to an array uFull. Such a code would look as follows:const PROBLEM_SIZE = 10000\nfunction test1()\n  u =    [1 2 3 4\n          1 3 3 4\n          1 5 6 3\n          5 2 3 1]\n\n  uFull = u\n  for i = 1:PROBLEM_SIZE\n    uFull = hcat(uFull,u)\n  end\n  uFull\nend\n\nfunction test2()\n  u =    [1 2 3 4\n          1 3 3 4\n          1 5 6 3\n          5 2 3 1]\n\n  uFull = u\n\n  for i = 1:PROBLEM_SIZE\n    uFull = vcat(uFull,u)\n  end\n  uFull\nendFor a more efficient implementation, we may want to store everything as a vector:function test3()\n  u =    [1 2 3 4\n          1 3 3 4\n          1 5 6 3\n          5 2 3 1]\n\n  uFull = Vector{Int}(undef, 0)\n  sizehint!(uFull,PROBLEM_SIZE*16)\n  append!(uFull,vec(u))\n\n  for i = 1:PROBLEM_SIZE\n    append!(uFull,vec(u))\n  end\n  reshape(uFull,4,4,PROBLEM_SIZE+1)\n  uFull\nendWhile this works, we have to mangle the code in our loop (adding vecs and reshaping whenever we want to use it) in order to use this properly. However, if we instead do:function test4()\n  u =    [1 2 3 4\n          1 3 3 4\n          1 5 6 3\n          5 2 3 1]\n\n  uFull = Vector{Array{Int,2}}(undef, 0)\n  push!(uFull,copy(u))\n\n  for i = 1:PROBLEM_SIZE\n    push!(uFull,copy(u))\n  end\n  uFull\nend(Notice that we have to use copy in case the array changes since it\'s only a reference!). We can get timing results as follows:#Compile Test Functions\ntest1()\ntest2()\ntest3()\ntest4()\nconst NUM_RUNS = 100\nconst PROBLEM_SIZE = 1000\nt1 = @elapsed for i=1:NUM_RUNS test1() end\nt2 = @elapsed for i=1:NUM_RUNS test2() end\nt3 = @elapsed for i=1:NUM_RUNS test3() end\nt4 = @elapsed for i=1:NUM_RUNS test4() end\nprintln(\"Benchmark results: $t1 $t2 $t3 $t4\")\n#Benchmark results: 1.923640854 2.131108443 0.012493308 0.00866045 0.005246504 0.00532613 0.00773568 0.00819909Notice that this implementation is orders of magnitude more efficient than the naive choice, and still an much faster than the vector approach. What we did here was create a vector of the matrix type and then repeatedly add these matrices to the vector. It\'s easy to understand why this is much more efficient: at each step of the loop this version only adds pointers to the new matrices, whereas the naive version has to copy the matrix each time the uFull is grown.The downside to this implementation is that it\'s hard to use as an actual result. For example, to grab a time course of the first row of u (i.e. what the value of u was at each step of the loop), we cannot do this without and reshaping the data structure. Also, this method silently has an error! Since we only pushed the reference to u, when u changes, all of the entries of uFull change!GrowableArray implements the solution of test 4 with the appropriate copy fix while re-defining the indexing functions to make it more convenient to use. Thus it\'s not as fast as test4, but is still an order of magnitude faster than naive approaches. Since it implements the best solution to the growing array problem, it has a constructor which is defined to be useful in that situation. An example of its use is:function test4()\n  u =    [1 2 3 4\n          1 3 3 4\n          1 5 6 3\n          5 2 3 1]\n\n  uFull = GrowableArray(u)\n  sizehint!(uFull,PROBLEM_SIZE)\n  for i = 1:PROBLEM_SIZE\n    push!(uFull,u)\n  end\n  uFull\nendNotice here we constrcted the GrowableArray by giving it the object u. This creates a Vector which holds typeof(u)s and grows the array. sizehint! is defined to sizehint the underlying array. [Note that GrowableArray(u) initiates the data vector with u. To initialize the GrowableArray with empty data (but typed to typeof(u)), use the constructor GrowableArray(u,initvalue=false)]. With the wrapper, basic array usage matches that of other arrays:A = [1 2; 3 4]\nB = [1 2; 4 3]\nG = GrowableArray(A)\npush!(G,A)\npush!(G,A)\npush!(G,A)\nusing EllipsisNotation\nG[4,..] = B #Acts as a standard array\nG[3] = B #Acts as a vector of matrices\nK = G[3,..] + G[4,..]Notice here we show the .. notation from (EllipsesNotation)[]. .. simply fills in the other columns with colons, meaning G[3,..]==G[3,:,:] (or G[..,3]==G[:,:,3], and the number of colons matches the number of remaining dimensions).  This is  useful since what someone put in the GrowableArray could be an arbitrary sized array, so this access will always work.While because of the way our GrowableArray is stored (Vector{Array}) it is the fastest implementation for growing the array, it is not as performant as contiguous arrays for memory access. Thus after growing the array, one may wish to change this to an array with dimensions ndims(u)+1 (i.e. the new first dimension is the one we concatenated along). To do this, we simply use:Garr = copy(G)The output Garr is a continguous array. GrowableArrays also exports the .. notation on AbstractArrays, and therefore we can still use the notation Garr[..,1] = Garr[:,:,1]."
},

{
    "location": "#Note:-Non-array-elements-1",
    "page": "Readme",
    "title": "Note: Non-array elements",
    "category": "section",
    "text": "If someone tries to use a GrowableArray on a non-array element:G2 = GrowableArray(1)\npush!(G2,3)then the GrowableArray will act like a regular vector of the objects which are being added. Thus there is no reason to write special cases when the input is a number rather than an array!"
},

{
    "location": "#Extra:-The-StackedArray-1",
    "page": "Readme",
    "title": "Extra: The StackedArray",
    "category": "section",
    "text": "If we had already developed our code as in test 4 and have this Vector{Array} which we wish to gain easier access to, the StackedArray is designed to take in such a value and convert it to be as easy to use as the GrowableArray. An example of the use is as follows:u =    [1 2 3 4\n        1 3 3 4\n        1 5 6 3\n        5 2 3 1]\n\nuFull = Vector{Array{Int,2}}(undef, 0)\npush!(uFull,u)\n\nlet u=u\n    for i = 1:PROBLEM_SIZE\n        push!(uFull,u)\n    end\nend\nS = StackedArray(uFull)\nSarr = copy(S)As before, Sarr is a now a standard multidimensional array."
},

{
    "location": "#Acknowledgements-1",
    "page": "Readme",
    "title": "Acknowledgements",
    "category": "section",
    "text": "I would like to acknowledge StackExchange user Matt B. for coming up with the StackedArray implementation and the idea for the GrowableArray."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [GrowableArrays]\nOrder = [:type, :function]"
},

]}
