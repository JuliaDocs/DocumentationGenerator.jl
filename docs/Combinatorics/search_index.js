var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Combinatorics-1",
    "page": "Readme",
    "title": "Combinatorics",
    "category": "section",
    "text": "(Image: Combinatorics) (Image: Combinatorics) (Image: Build Status) (Image: Coverage Status) (Image: Codecov)A combinatorics library for Julia, focusing mostly (as of now) on enumerative combinatorics and permutations.  As overflows are expected even for low values, most of the functions always return BigInt, and are marked as such below.This library provides the following functions:bellnum(n): returns the n-th Bell number; always returns a BigInt;\ncatalannum(n): returns the n-th Catalan number; always returns a BigInt;\ncombinations(a): returns combinations of all order by chaining calls to Base.combinations(a,n);\nderangement(n)/subfactorial(n): returns the number of permutations of n with no fixed points; always returns a BigInt;\ndoublefactorial(n): returns the double factorial n!!; always returns a BigInt;\nfibonaccinum(n): the n-th Fibonacci number; always returns a BigInt;\nhyperfactorial(n): the n-th hyperfactorial, i.e. prod([i^i for i = 2:n]; always returns a BigInt;\ninteger_partitions(n): returns a Vector{Int} consisting of the partitions of the number n.\njacobisymbol(a,b): returns the Jacobi symbol (a/b);\nlassallenum(n): returns the nth Lassalle number A<sub>n</sub> defined in arXiv:1009.4225 (OEIS A180874); always returns a BigInt;\nlegendresymbol(a,p): returns the Legendre symbol (a/p);\nlucasnum(n): the n-th Lucas number; always returns a BigInt;\nmultifactorial(n): returns the m-multifactorial n(!^m); always returns a BigInt;\nmultinomial(k...): receives a tuple of k_1, ..., k_n and calculates the multinomial coefficient (n k), where n = sum(k); returns a BigInt only if given a BigInt;\nmultiexponents(m,n): returns the exponents in the multinomial expansion (x₁ + x₂ + ... + xₘ)ⁿ;\nprimorial(n): returns the product of all positive prime numbers <= n; always returns a BigInt;\nstirlings1(n, k, signed=false): returns the (n,k)-th Stirling number of the first kind; the number is signed if signed is true; returns a BigInt only if given a BigInt.\nstirlings2(n, k): returns the (n,k)-th Stirling number of the second kind; returns a BigInt only if given a BigInt.\nnthperm(a, k): Compute the kth lexicographic permutation of the vector a.\npermutations(a): Generate all permutations of an indexable object a in lexicographic order."
},

{
    "location": "#Young-diagrams-1",
    "page": "Readme",
    "title": "Young diagrams",
    "category": "section",
    "text": "Limited support for working with Young diagrams is provided.partitionsequence(a): computes partition sequence for an integer partition a\nx = a \\ b creates the skew diagram for partitions (tuples) a, b\nisrimhook(x): checks if skew diagram x is a rim hook\nleglength(x): computes leg length of rim hook x\ncharacter(a, b): computes character the partition b in the ath irrep of Sn"
},

{
    "location": "autodocs/#Combinatorics.CoolLexCombinations",
    "page": "Docstrings",
    "title": "Combinatorics.CoolLexCombinations",
    "category": "type",
    "text": "CoolLexCombinations\n\nProduce (nk)-combinations in cool-lex order.\n\nReference\n\nRuskey, F., & Williams, A. (2009). The coolest way to generate combinations. Discrete Mathematics, 309(17), 5305-5320.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.factorial-Union{Tuple{T}, Tuple{T,T}} where T<:Integer",
    "page": "Docstrings",
    "title": "Base.factorial",
    "category": "method",
    "text": "factorial(n, k)\n\nCompute nk.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Combinatorics.bellnum-Tuple{Integer}",
    "page": "Docstrings",
    "title": "Combinatorics.bellnum",
    "category": "method",
    "text": "bellnum(n)\n\nCompute the nth Bell number.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Combinatorics.catalannum-Tuple{Integer}",
    "page": "Docstrings",
    "title": "Combinatorics.catalannum",
    "category": "method",
    "text": "catalannum(n)\n\nCompute the nth Catalan number.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Combinatorics.character-Tuple{Partition,Partition}",
    "page": "Docstrings",
    "title": "Combinatorics.character",
    "category": "method",
    "text": "character(λ::Partition, μ::Partition)\n\nCompute the character chi^lambda(mu) of the partition μ in the λth irreducible representation (\"irrep\") of the symmetric group S_n.\n\nImplements the Murnaghan-Nakayama algorithm as described in:\n\nDan Bernstein,\n\"The computational complexity of rules for the character table of Sn\",\nJournal of Symbolic Computation, vol. 37 iss. 6 (2004), pp 727-748.\ndoi:10.1016/j.jsc.2003.11.001\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Combinatorics.combinations-Tuple{Any,Integer}",
    "page": "Docstrings",
    "title": "Combinatorics.combinations",
    "category": "method",
    "text": "combinations(a, n)\n\nGenerate all combinations of n elements from an indexable object a. Because the number of combinations can be very large, this function returns an iterator object. Use collect(combinations(a, n)) to get an array of all combinations.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Combinatorics.combinations-Tuple{Any}",
    "page": "Docstrings",
    "title": "Combinatorics.combinations",
    "category": "method",
    "text": "combinations(a)\n\nGenerate combinations of the elements of a of all orders. Chaining of order iterators is eager, but the sequence at each order is lazy.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Combinatorics.derangement-Tuple{Integer}",
    "page": "Docstrings",
    "title": "Combinatorics.derangement",
    "category": "method",
    "text": "derangement(n)\n\nCompute the number of permutations of n with no fixed points, also known as the subfactorial. An alias subfactorial for this function is provided for convenience.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Combinatorics.integer_partitions-Tuple{Integer}",
    "page": "Docstrings",
    "title": "Combinatorics.integer_partitions",
    "category": "method",
    "text": "integer_partitions(n)\n\nList the partitions of the integer n.\n\nnote: Note\nThe order of the resulting array is consistent with that produced by the computational discrete algebra software GAP.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Combinatorics.isrimhook-Tuple{Int64,Int64}",
    "page": "Docstrings",
    "title": "Combinatorics.isrimhook",
    "category": "method",
    "text": "isrimhook(a::Int, b::Int)\n\nTake two elements of a partition sequence, with a to the left of b.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Combinatorics.isrimhook-Tuple{Partition,Partition}",
    "page": "Docstrings",
    "title": "Combinatorics.isrimhook",
    "category": "method",
    "text": "isrimhook(ξ::SkewDiagram)\nisrimhook(λ::Partition, μ::Partition)\n\nCheck whether the given skew diagram is a rim hook.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Combinatorics.lassallenum-Tuple{Integer}",
    "page": "Docstrings",
    "title": "Combinatorics.lassallenum",
    "category": "method",
    "text": "lassallenum(n)\n\nCompute the nth entry in Lassalle\'s sequence, OEIS entry A180874.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Combinatorics.leglength-Tuple{Partition,Partition}",
    "page": "Docstrings",
    "title": "Combinatorics.leglength",
    "category": "method",
    "text": "leglength(ξ::SkewDiagram)\nleglength(λ::Partition, μ::Partition)\n\nCompute the leg length for the given skew diagram.\n\nnote: Note\nStrictly speaking, the leg length is defined for rim hooks only, but here we define it for all skew diagrams.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Combinatorics.levicivita-Tuple{AbstractArray{#s612,1} where #s612<:Integer}",
    "page": "Docstrings",
    "title": "Combinatorics.levicivita",
    "category": "method",
    "text": "levicivita(p)\n\nCompute the Levi-Civita symbol of a permutation p. Returns 1 if the permutation is even, -1 if it is odd, and 0 otherwise.\n\nThe parity is computed by using the fact that a permutation is odd if and only if the number of even-length cycles is odd.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Combinatorics.multiexponents-Tuple{Any,Any}",
    "page": "Docstrings",
    "title": "Combinatorics.multiexponents",
    "category": "method",
    "text": "multiexponents(m, n)\n\nReturns the exponents in the multinomial expansion (x₁ + x₂ + ... + xₘ)ⁿ.\n\nFor example, the expansion (x₁ + x₂ + x₃)² = x₁² + x₁x₂ + x₁x₃ + ... has the exponents:\n\njulia> collect(multiexponents(3, 2))\n\n6-element Array{Any,1}:\n [2, 0, 0]\n [1, 1, 0]\n [1, 0, 1]\n [0, 2, 0]\n [0, 1, 1]\n [0, 0, 2]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Combinatorics.multinomial-Tuple",
    "page": "Docstrings",
    "title": "Combinatorics.multinomial",
    "category": "method",
    "text": "multinomial(k...)\n\nMultinomial coefficient where n = sum(k).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Combinatorics.multiset_combinations-Tuple{Any,Integer}",
    "page": "Docstrings",
    "title": "Combinatorics.multiset_combinations",
    "category": "method",
    "text": "multiset_combinations(a, t)\n\nGenerate all combinations of size t from an array a with possibly duplicated elements.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Combinatorics.multiset_permutations-Tuple{Any,Integer}",
    "page": "Docstrings",
    "title": "Combinatorics.multiset_permutations",
    "category": "method",
    "text": "multiset_permutations(m, f, t)\n\nGenerate all permutations of size t from an array a with possibly duplicated elements.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Combinatorics.nthperm!-Tuple{AbstractArray{T,1} where T,Integer}",
    "page": "Docstrings",
    "title": "Combinatorics.nthperm!",
    "category": "method",
    "text": "nthperm!(a, k)\n\nIn-place version of nthperm; the array a is overwritten.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Combinatorics.nthperm-Tuple{AbstractArray{#s34,1} where #s34<:Integer}",
    "page": "Docstrings",
    "title": "Combinatorics.nthperm",
    "category": "method",
    "text": "nthperm(p)\n\nReturn the integer k that generated permutation p. Note that nthperm(nthperm([1:n], k)) == k for 1 <= k <= factorial(n).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Combinatorics.nthperm-Tuple{AbstractArray{T,1} where T,Integer}",
    "page": "Docstrings",
    "title": "Combinatorics.nthperm",
    "category": "method",
    "text": "nthperm(a, k)\n\nCompute the kth lexicographic permutation of the vector a.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Combinatorics.parity-Tuple{AbstractArray{#s612,1} where #s612<:Integer}",
    "page": "Docstrings",
    "title": "Combinatorics.parity",
    "category": "method",
    "text": "parity(p)\n\nCompute the parity of a permutation p using the levicivita function, permitting calls such as iseven(parity(p)). If p is not a permutation then an error is thrown.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Combinatorics.partitions-Tuple{AbstractArray{T,1} where T,Int64}",
    "page": "Docstrings",
    "title": "Combinatorics.partitions",
    "category": "method",
    "text": "partitions(s::AbstractVector, m::Int)\n\nGenerate all set partitions of the elements of an array s into exactly m subsets, represented as arrays of arrays. Because the number of partitions can be very large, this function returns an iterator object. Use collect(partitions(s, m)) to get an array of all partitions. The number of partitions into m subsets is equal to the Stirling number of the second kind, and can be efficiently computed using length(partitions(s, m)).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Combinatorics.partitions-Tuple{AbstractArray{T,1} where T}",
    "page": "Docstrings",
    "title": "Combinatorics.partitions",
    "category": "method",
    "text": "partitions(s::AbstractVector)\n\nGenerate all set partitions of the elements of an array s, represented as arrays of arrays. Because the number of partitions can be very large, this function returns an iterator object. Use collect(partitions(s)) to get an array of all partitions. The number of partitions to generate can be efficiently computed using length(partitions(s)).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Combinatorics.partitions-Tuple{Integer,Integer}",
    "page": "Docstrings",
    "title": "Combinatorics.partitions",
    "category": "method",
    "text": "partitions(n, m)\n\nGenerate all arrays of m integers that sum to n. Because the number of partitions can be very large, this function returns an iterator object. Use collect(partitions(n, m)) to get an array of all partitions. The number of partitions to generate can be efficiently computed using length(partitions(n, m)).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Combinatorics.partitions-Tuple{Integer}",
    "page": "Docstrings",
    "title": "Combinatorics.partitions",
    "category": "method",
    "text": "partitions(n)\n\nGenerate all integer arrays that sum to n. Because the number of partitions can be very large, this function returns an iterator object. Use collect(partitions(n)) to get an array of all partitions. The number of partitions to generate can be efficiently computed using length(partitions(n)).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Combinatorics.partitionsequence-Tuple{Partition}",
    "page": "Docstrings",
    "title": "Combinatorics.partitionsequence",
    "category": "method",
    "text": "partitionsequence(lambda::Partition)\n\nCompute essential part of the partition sequence of lambda.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Combinatorics.permutations-Tuple{Any,Integer}",
    "page": "Docstrings",
    "title": "Combinatorics.permutations",
    "category": "method",
    "text": "permutations(a, t)\n\nGenerate all size t permutations of an indexable object a.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Combinatorics.permutations-Tuple{Any}",
    "page": "Docstrings",
    "title": "Combinatorics.permutations",
    "category": "method",
    "text": "permutations(a)\n\nGenerate all permutations of an indexable object a in lexicographic order. Because the number of permutations can be very large, this function returns an iterator object. Use collect(permutations(a)) to get an array of all permutations.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Combinatorics.powerset",
    "page": "Docstrings",
    "title": "Combinatorics.powerset",
    "category": "function",
    "text": "powerset(a, min=0, max=length(a))\n\nGenerate all subsets of an indexable object a including the empty set, with cardinality bounded by min and max. Because the number of subsets can be very large, this function returns an iterator object. Use collect(powerset(a, min, max)) to get an array of all subsets.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Combinatorics.prevprod-Tuple{Array{Int64,1},Any}",
    "page": "Docstrings",
    "title": "Combinatorics.prevprod",
    "category": "method",
    "text": "prevprod(a::Vector{Int}, x)\n\nPrevious integer not greater than x that can be written as prod k_i^p_i for integers p_1, p_2, etc.\n\nFor integers i_1, i_2, i_3, this is equivalent to finding the largest x such that\n\ni_1^n_1 i_2^n_2 i_3^n_3 leq x\n\nfor integers n_1, n_2, n_3.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Combinatorics.with_replacement_combinations-Tuple{Any,Integer}",
    "page": "Docstrings",
    "title": "Combinatorics.with_replacement_combinations",
    "category": "method",
    "text": "with_replacement_combinations(a, t)\n\nGenerate all combinations with replacement of size t from an array a.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Combinatorics.MN1inner-Tuple{Array{Int64,1},Dict,Partition,Integer}",
    "page": "Docstrings",
    "title": "Combinatorics.MN1inner",
    "category": "method",
    "text": "Recursively compute the character of the partition μ using the Murnaghan-Nakayama rule.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Combinatorics]\nOrder = [:type, :function]"
},

]}
