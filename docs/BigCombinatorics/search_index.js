var documenterSearchIndex = {"docs": [

{
    "location": "#BigCombinatorics.Bell-Tuple{Integer}",
    "page": "Home",
    "title": "BigCombinatorics.Bell",
    "category": "method",
    "text": "Bell(n) gives the n-th Bell number, that is, the number of partitions of an n-element set.\n\n\n\n\n\n"
},

{
    "location": "#BigCombinatorics.Binomial-Tuple{Integer,Integer}",
    "page": "Home",
    "title": "BigCombinatorics.Binomial",
    "category": "method",
    "text": "Binomial(n,k) returns the binomial coefficient n-choose-k. This is the number of k-element subsets of an n-element set.\n\n\n\n\n\n"
},

{
    "location": "#BigCombinatorics.Catalan-Tuple{Integer}",
    "page": "Home",
    "title": "BigCombinatorics.Catalan",
    "category": "method",
    "text": "Catalan(n) returns the n-th Catalan number.\n\n\n\n\n\n"
},

{
    "location": "#BigCombinatorics.Derangements-Tuple{Integer}",
    "page": "Home",
    "title": "BigCombinatorics.Derangements",
    "category": "method",
    "text": "Derangements(n) returns the number of permutations of an n-set that have no fixed point.\n\n\n\n\n\n"
},

{
    "location": "#BigCombinatorics.DoubleFactorial-Tuple{Integer}",
    "page": "Home",
    "title": "BigCombinatorics.DoubleFactorial",
    "category": "method",
    "text": "DoubleFactorial(n) returns n!!, i.e., n*(n-2)*... with (-1)!! == 0!! == 1!! == 1.\n\n\n\n\n\n"
},

{
    "location": "#BigCombinatorics.Euler-Tuple{Integer}",
    "page": "Home",
    "title": "BigCombinatorics.Euler",
    "category": "method",
    "text": "Euler(n) returns the n-th Euler number. Starting with n=0 this is the sequence 1, 0, -1, 0, 5, 0, -61, 0, 1385 and so on.\n\n\n\n\n\n"
},

{
    "location": "#BigCombinatorics.Eulerian-Tuple{Integer,Integer}",
    "page": "Home",
    "title": "BigCombinatorics.Eulerian",
    "category": "method",
    "text": "Eulerian(n,k) returns the number of permutations of {1,2,...,n} with k ascents.\n\n\n\n\n\n"
},

{
    "location": "#BigCombinatorics.Factorial-Tuple{Integer}",
    "page": "Home",
    "title": "BigCombinatorics.Factorial",
    "category": "method",
    "text": "Factorial(n) returns n! for nonnegative integers n. Factorial(n,k) returns n!/k! (to be consistent with Julia\'s factorial.) Requires 0 <= k <= n.\n\nSee also FallingFactorial and RisingFactorial.\n\n\n\n\n\n"
},

{
    "location": "#BigCombinatorics.FallingFactorial-Tuple{Integer,Integer}",
    "page": "Home",
    "title": "BigCombinatorics.FallingFactorial",
    "category": "method",
    "text": "FallingFactorial(n,k) returns n*(n-1)*(n-2)*...*(n-k+1) (with a total of k factors). Requires n,k >= 0. If k>n then 0 is returned.\n\n\n\n\n\n"
},

{
    "location": "#BigCombinatorics.Fibonacci-Tuple{Integer}",
    "page": "Home",
    "title": "BigCombinatorics.Fibonacci",
    "category": "method",
    "text": "Fibonacci(n) returns the n-th Fibonacci number. We begin with Fibonacci(0)==0 and Fibonacci(1)==1.\n\n\n\n\n\n"
},

{
    "location": "#BigCombinatorics.IntPartitions-Tuple{Integer,Integer}",
    "page": "Home",
    "title": "BigCombinatorics.IntPartitions",
    "category": "method",
    "text": "IntPartitions(n) is the number of partitions of the integer n.\n\nIntPartitions(n,k) is the number of partitions of the integer n with exactly k (nonzero) parts.\n\n\n\n\n\n"
},

{
    "location": "#BigCombinatorics.IntPartitionsDistinct-Tuple{Integer,Integer}",
    "page": "Home",
    "title": "BigCombinatorics.IntPartitionsDistinct",
    "category": "method",
    "text": "IntPartitionsDistinct(n,k) is the number of partitions of the integer n into exactly k distinct parts.\n\nIntPartitionsDistinct(n) is the number of partitions of n into distinct parts.\n\n\n\n\n\n"
},

{
    "location": "#BigCombinatorics.MultiChoose-Tuple{Integer,Integer}",
    "page": "Home",
    "title": "BigCombinatorics.MultiChoose",
    "category": "method",
    "text": "MultiChoose(n,k) returns the number of k-element multisets that can be formed using the elements of an n-element set.\n\nWarning: This is not the same as Multinomial.\n\n\n\n\n\n"
},

{
    "location": "#BigCombinatorics.Multinomial-Tuple",
    "page": "Home",
    "title": "BigCombinatorics.Multinomial",
    "category": "method",
    "text": "Multinomial(vec) returns the multinomial coefficient whose top index is the sum of vec (an array of Ints) and whose bottom indices are given by vec.\n\nThis may also be called with a common-separated list of arguments, that is, either of Multinomial([1,2,3]) or Multinomial(1,2,3). The result is 60 in both cases as these equal 6!/(1! 2! 3!).\n\nWarning: This is not the same as MultiChoose.\n\n\n\n\n\n"
},

{
    "location": "#BigCombinatorics.PowerSum-Tuple{Integer,Integer}",
    "page": "Home",
    "title": "BigCombinatorics.PowerSum",
    "category": "method",
    "text": "PowerSum(n,k) returns the sum of the k-th powers of the integers 1 through n, i.e., 1^k + 2^k + 3^k + ... + n^k.\n\n\n\n\n\n"
},

{
    "location": "#BigCombinatorics.RisingFactorial-Tuple{Integer,Integer}",
    "page": "Home",
    "title": "BigCombinatorics.RisingFactorial",
    "category": "method",
    "text": "RisingFactorial(n,k) returns n*(n+1)*(n+2)*...*(n+k-1) (with a total of k factors). Requires n,k >= 0.\n\n\n\n\n\n"
},

{
    "location": "#BigCombinatorics.Stirling1-Tuple{Integer,Integer}",
    "page": "Home",
    "title": "BigCombinatorics.Stirling1",
    "category": "method",
    "text": "Stirling1(n,k) gives the (signed) Stirling number of the first kind, that is, the coefficient of x^k in the poynomial x(x-1)(x-2)...(x-n+1).\n\n\n\n\n\n"
},

{
    "location": "#BigCombinatorics.Stirling2-Tuple{Integer,Integer}",
    "page": "Home",
    "title": "BigCombinatorics.Stirling2",
    "category": "method",
    "text": "Stirling2(n,k) gives the Stirling number of the second kind, that is, the number of paritions of an n-set into k-parts.\"\n\n\n\n\n\n"
},

{
    "location": "#BigCombinatorics.cache_clear-Tuple{Function}",
    "page": "Home",
    "title": "BigCombinatorics.cache_clear",
    "category": "method",
    "text": "BigCombinatorics.cache_clear(f) clears the cached values for the function f. Returns false if f values are not cached.\n\nBigCombinatorics.cache_clear() clears all cached values.\n\n\n\n\n\n"
},

{
    "location": "#BigCombinatorics.cache_report-Tuple{}",
    "page": "Home",
    "title": "BigCombinatorics.cache_report",
    "category": "method",
    "text": "BigCombinatorics.cache_report() reports how many entries are saved for each function in the BigCombinatorics module.\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [BigCombinatorics]\nOrder = [:type, :function]"
},

]}
