var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#BigCombinatorics-1",
    "page": "Readme",
    "title": "BigCombinatorics",
    "category": "section",
    "text": "(Image: Build Status)(Image: codecov.io)This is an implementation of various combinatorial functions. These functions always return BigInt values. This convention is signaled by the fact that these functions\' names begin with a capital letter."
},

{
    "location": "#Rationale-1",
    "page": "Readme",
    "title": "Rationale",
    "category": "section",
    "text": "If we want to calculate 20!, it\'s easy enough to do this:julia> factorial(20)\n2432902008176640000However, for 100!, we see this:julia> factorial(100)\nERROR: OverflowError: 100 is too large to look up in the table\nStacktrace:\n [1] factorial_lookup(::Int64, ::Array{Int64,1}, ::Int64) at ./combinatorics.jl:19\n [2] factorial(::Int64) at ./combinatorics.jl:27\n [3] top-level scope at none:0The problem is that 100! is too big to fit in an Int answer. Of course, we could resolve this problem this way:julia> factorial(big(100))\n93326215443944152681699238856266700490715968264381621468592963895217599993229915608941463976156518286253697920827223758251185210916864000000000000000000000000We take a different approach. We shouldn\'t have to worry about how large our arguments may be before a combinatorial function overflows. Instead, let\'s assume the result is always of type BigInt so the calculation will not be hampered by this problem."
},

{
    "location": "#Functions-1",
    "page": "Readme",
    "title": "Functions",
    "category": "section",
    "text": "Fibonacci(n) returns the n-th Fibonacci number with Fibonacci(0)==0and Fibonacci(1)==1.Factorial(n) returns n! and Factorial(n,k) returns n!/k!.\nFallingFactorial(n,k) returns n*(n-1)*(n-2)*...*(n-k+1).\nRisingFactorial(n,k) returns n*(n+1)*(n+2)*...*(n+k-1).\nDoubleFactorial(n) returns n!!.\nCatalan(n) returns the n-th Catalan number.\nDerangements(n) returns the number of derangements ofan n-element set.Binomial(n,k) returns the number of k-element subsetsof an n-element set.MultiChoose(n,k) returns the number of k-elementmultisets that can be formed using the elements of an n-element set. Warning: This is not the same as Multinomial.Multnomial(vals) returns the multinomial coefficient wherethe top index is the sum of vals. Here, vals may either be a vector of integers or a comma separated list of arguments. In other words, both Multinomial([3,3,3]) and Multinomial(3,3,3) return the multinomial coefficient with top index 9 and bottom indices 3,3,3. The result is 1680. Warning: This is not the same as MultiChoose.Bell(n) returns the n-th Bell number, i.e., the numberof partitions of an n-element set.Stirling1(n,k) returns the signed Stirling number of thefirst kind.Stirling2(n,k) returns the Stirling number of the secondkind, i.e., the number of partitions of an n-element set into k-parts (nonempty).Fibonacci(n) returns the n-th Fibonacci numberwith Fibonacci(0)==0 and Fibonacci(1)==1.IntPartitions(n) returns the number of partitions of the integer nand IntPartitions(n,k) returns the number of partitions of the integer n with exactly k parts.IntPartitionsDistinct(n) returns the number of partitions of n intodistinct parts and IntPartitionsDistinct(n,k) returns the number of partitions of n into k distinct parts.Euler(n) returns the n-th Euler number.\nEulerian(n,k) returns the number of permutations of 1:n with kascents.PowerSum(n,k) returns the sum 1^k + 2^k + ... + n^k."
},

{
    "location": "#Implementation-1",
    "page": "Readme",
    "title": "Implementation",
    "category": "section",
    "text": "These function have nice recursive properties that we exploit to make the code as simple as possible. In many (but not all) of these functions we cache the result of the calculation to avoid combinatorial explosion in the recursion. In those cases, we don\'t compute the same result twice.The following functions can be used to manage the saved values.BigCombinatorics.cache_report() prints out the number of valuesstored in the cache for each function.BigCombinatorics.cache_clear(func) clears all values stored fora specific function.BigCombinatorics.cache_clear() clears all values in the cache."
},

{
    "location": "autodocs/#BigCombinatorics.Bell-Tuple{Integer}",
    "page": "Docstrings",
    "title": "BigCombinatorics.Bell",
    "category": "method",
    "text": "Bell(n) gives the n-th Bell number, that is, the number of partitions of an n-element set.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BigCombinatorics.Binomial-Tuple{Integer,Integer}",
    "page": "Docstrings",
    "title": "BigCombinatorics.Binomial",
    "category": "method",
    "text": "Binomial(n,k) returns the binomial coefficient n-choose-k. This is the number of k-element subsets of an n-element set.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BigCombinatorics.Catalan-Tuple{Integer}",
    "page": "Docstrings",
    "title": "BigCombinatorics.Catalan",
    "category": "method",
    "text": "Catalan(n) returns the n-th Catalan number.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BigCombinatorics.Derangements-Tuple{Integer}",
    "page": "Docstrings",
    "title": "BigCombinatorics.Derangements",
    "category": "method",
    "text": "Derangements(n) returns the number of permutations of an n-set that have no fixed point.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BigCombinatorics.DoubleFactorial-Tuple{Integer}",
    "page": "Docstrings",
    "title": "BigCombinatorics.DoubleFactorial",
    "category": "method",
    "text": "DoubleFactorial(n) returns n!!, i.e., n*(n-2)*... with (-1)!! == 0!! == 1!! == 1.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BigCombinatorics.Euler-Tuple{Integer}",
    "page": "Docstrings",
    "title": "BigCombinatorics.Euler",
    "category": "method",
    "text": "Euler(n) returns the n-th Euler number. Starting with n=0 this is the sequence 1, 0, -1, 0, 5, 0, -61, 0, 1385 and so on.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BigCombinatorics.Eulerian-Tuple{Integer,Integer}",
    "page": "Docstrings",
    "title": "BigCombinatorics.Eulerian",
    "category": "method",
    "text": "Eulerian(n,k) returns the number of permutations of {1,2,...,n} with k ascents.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BigCombinatorics.Factorial-Tuple{Integer}",
    "page": "Docstrings",
    "title": "BigCombinatorics.Factorial",
    "category": "method",
    "text": "Factorial(n) returns n! for nonnegative integers n. Factorial(n,k) returns n!/k! (to be consistent with Julia\'s factorial.) Requires 0 <= k <= n.\n\nSee also FallingFactorial and RisingFactorial.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BigCombinatorics.FallingFactorial-Tuple{Integer,Integer}",
    "page": "Docstrings",
    "title": "BigCombinatorics.FallingFactorial",
    "category": "method",
    "text": "FallingFactorial(n,k) returns n*(n-1)*(n-2)*...*(n-k+1) (with a total of k factors). Requires n,k >= 0. If k>n then 0 is returned.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BigCombinatorics.Fibonacci-Tuple{Integer}",
    "page": "Docstrings",
    "title": "BigCombinatorics.Fibonacci",
    "category": "method",
    "text": "Fibonacci(n) returns the n-th Fibonacci number. We begin with Fibonacci(0)==0 and Fibonacci(1)==1.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BigCombinatorics.IntPartitions-Tuple{Integer,Integer}",
    "page": "Docstrings",
    "title": "BigCombinatorics.IntPartitions",
    "category": "method",
    "text": "IntPartitions(n) is the number of partitions of the integer n.\n\nIntPartitions(n,k) is the number of partitions of the integer n with exactly k (nonzero) parts.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BigCombinatorics.IntPartitionsDistinct-Tuple{Integer,Integer}",
    "page": "Docstrings",
    "title": "BigCombinatorics.IntPartitionsDistinct",
    "category": "method",
    "text": "IntPartitionsDistinct(n,k) is the number of partitions of the integer n into exactly k distinct parts.\n\nIntPartitionsDistinct(n) is the number of partitions of n into distinct parts.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BigCombinatorics.MultiChoose-Tuple{Integer,Integer}",
    "page": "Docstrings",
    "title": "BigCombinatorics.MultiChoose",
    "category": "method",
    "text": "MultiChoose(n,k) returns the number of k-element multisets that can be formed using the elements of an n-element set.\n\nWarning: This is not the same as Multinomial.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BigCombinatorics.Multinomial-Tuple",
    "page": "Docstrings",
    "title": "BigCombinatorics.Multinomial",
    "category": "method",
    "text": "Multinomial(vec) returns the multinomial coefficient whose top index is the sum of vec (an array of Ints) and whose bottom indices are given by vec.\n\nThis may also be called with a common-separated list of arguments, that is, either of Multinomial([1,2,3]) or Multinomial(1,2,3). The result is 60 in both cases as these equal 6!/(1! 2! 3!).\n\nWarning: This is not the same as MultiChoose.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BigCombinatorics.PowerSum-Tuple{Integer,Integer}",
    "page": "Docstrings",
    "title": "BigCombinatorics.PowerSum",
    "category": "method",
    "text": "PowerSum(n,k) returns the sum of the k-th powers of the integers 1 through n, i.e., 1^k + 2^k + 3^k + ... + n^k.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BigCombinatorics.RisingFactorial-Tuple{Integer,Integer}",
    "page": "Docstrings",
    "title": "BigCombinatorics.RisingFactorial",
    "category": "method",
    "text": "RisingFactorial(n,k) returns n*(n+1)*(n+2)*...*(n+k-1) (with a total of k factors). Requires n,k >= 0.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BigCombinatorics.Stirling1-Tuple{Integer,Integer}",
    "page": "Docstrings",
    "title": "BigCombinatorics.Stirling1",
    "category": "method",
    "text": "Stirling1(n,k) gives the (signed) Stirling number of the first kind, that is, the coefficient of x^k in the poynomial x(x-1)(x-2)...(x-n+1).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BigCombinatorics.Stirling2-Tuple{Integer,Integer}",
    "page": "Docstrings",
    "title": "BigCombinatorics.Stirling2",
    "category": "method",
    "text": "Stirling2(n,k) gives the Stirling number of the second kind, that is, the number of paritions of an n-set into k-parts.\"\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BigCombinatorics.cache_clear-Tuple{Function}",
    "page": "Docstrings",
    "title": "BigCombinatorics.cache_clear",
    "category": "method",
    "text": "BigCombinatorics.cache_clear(f) clears the cached values for the function f. Returns false if f values are not cached.\n\nBigCombinatorics.cache_clear() clears all cached values.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BigCombinatorics.cache_report-Tuple{}",
    "page": "Docstrings",
    "title": "BigCombinatorics.cache_report",
    "category": "method",
    "text": "BigCombinatorics.cache_report() reports how many entries are saved for each function in the BigCombinatorics module.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [BigCombinatorics]\nOrder = [:type, :function]"
},

]}
