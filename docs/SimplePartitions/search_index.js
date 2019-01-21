var documenterSearchIndex = {"docs": [

{
    "location": "#SimplePartitions.IntegerPartition",
    "page": "Home",
    "title": "SimplePartitions.IntegerPartition",
    "category": "type",
    "text": "An IntegerPartition is a decreasing list of positive integers. Construct in the following ways:\n\nIntegerParition([a,b,c,...])\nIntegerPartition(a,b,c,...)\n\n\n\n\n\n"
},

{
    "location": "#SimplePartitions.Partition",
    "page": "Home",
    "title": "SimplePartitions.Partition",
    "category": "type",
    "text": "A Partition is a set of nonempty, pairwise disjoint sets. A new Partition is created by specifying the ground set A and calling Partition(A). The set A may be either a Set{T} for some type T or an BitSet.\n\nThe parameter A may also be a list (one-dimensional array).\n\nIn addition, Partition(n) for a nonnegative integer n creates a partition of the set {1,2,...,n}.\n\nThe datatype Partition is, essentially, a wrapper around the DataStructures.DisjointSets type.\n\n\n\n\n\n"
},

{
    "location": "#SimplePartitions.Partition-Tuple{Dict}",
    "page": "Home",
    "title": "SimplePartitions.Partition",
    "category": "method",
    "text": "Partition(d::Dict) constructs a new partition whose elements are the keys of d. Two elements a and b are in the same part of the partition iff d[a]==d[b].\n\n\n\n\n\n"
},

{
    "location": "#SimplePartitions.Partition-Tuple{Permutations.Permutation}",
    "page": "Home",
    "title": "SimplePartitions.Partition",
    "category": "method",
    "text": "Partition(p::Permutation) constructs a new partition in which the parts are the cycles of the permutation p.\n\n\n\n\n\n"
},

{
    "location": "#AbstractLattices.:∧-Tuple{SimplePartitions.Partition,SimplePartitions.Partition}",
    "page": "Home",
    "title": "AbstractLattices.:∧",
    "category": "method",
    "text": "For partitions P and Q, P∧Q is their meet.\n\n\n\n\n\n"
},

{
    "location": "#AbstractLattices.:∨-Tuple{SimplePartitions.Partition,SimplePartitions.Partition}",
    "page": "Home",
    "title": "AbstractLattices.:∨",
    "category": "method",
    "text": "For partitions P and Q, P∨Q is their join.\n\n\n\n\n\n"
},

{
    "location": "#SimplePartitions.Ferrers",
    "page": "Home",
    "title": "SimplePartitions.Ferrers",
    "category": "function",
    "text": "Ferrers(P::IntegerParition) prints a graphical representation of the partition P in the form of a Ferrer\'s diagram.\n\n\n\n\n\n"
},

{
    "location": "#SimplePartitions.PartitionBuilder-Union{Tuple{Set{Set{T}}}, Tuple{T}, Tuple{Set{Set{T}},Bool}} where T",
    "page": "Home",
    "title": "SimplePartitions.PartitionBuilder",
    "category": "method",
    "text": "PartitionBuilder(A,check=true) takes a set of nonempty, pairwise disjoint sets and creates the corresponding partition. It is the inverse operation to parts(P). The optional parameter check causes sanity checks to be return on the input set of sets (throwing errors if it is invalid).\n\n\n\n\n\n"
},

{
    "location": "#SimplePartitions.all_partitions-Union{Tuple{Set{T}}, Tuple{T}} where T",
    "page": "Home",
    "title": "SimplePartitions.all_partitions",
    "category": "method",
    "text": "all_partitions(A::Set) creates a Set containing all possible partitions of the set A.\n\nall_partitions(n::Int) creates the Set of all partitions of the set {1,2,...,n}.\n\nBoth of these take an optional second argument k to specify that only partitions with exactly k parts should be returned.\n\n\n\n\n\n"
},

{
    "location": "#SimplePartitions.find_part-Union{Tuple{T}, Tuple{Partition{T},T}} where T",
    "page": "Home",
    "title": "SimplePartitions.find_part",
    "category": "method",
    "text": "find_part(P,a) returns the part of P that contains a (or throws an error if a is not in the ground set).\n\n\n\n\n\n"
},

{
    "location": "#SimplePartitions.ground_set-Tuple{SimplePartitions.Partition}",
    "page": "Home",
    "title": "SimplePartitions.ground_set",
    "category": "method",
    "text": "elements(P) returns (a copy of) the ground set of the partition P.\n\n\n\n\n\n"
},

{
    "location": "#SimplePartitions.in_same_part-Union{Tuple{T}, Tuple{Partition{T},T,T}} where T",
    "page": "Home",
    "title": "SimplePartitions.in_same_part",
    "category": "method",
    "text": "in_same_part(P,a,b) returns true if a and b are in the same part of the partition P. An error is thrown if either is not in the ground set of P.\n\n\n\n\n\n"
},

{
    "location": "#SimplePartitions.meet-Union{Tuple{T}, Tuple{Partition{T},Partition{T}}} where T",
    "page": "Home",
    "title": "SimplePartitions.meet",
    "category": "method",
    "text": "meet(P,Q) computes the meet of the partitions. This may also be invoked as P*Q.\n\n\n\n\n\n"
},

{
    "location": "#SimplePartitions.merge_parts!-Union{Tuple{T}, Tuple{Partition{T},Array{T,1}}} where T",
    "page": "Home",
    "title": "SimplePartitions.merge_parts!",
    "category": "method",
    "text": "merge_parts!(P,elts) merges all the elements in elts into a part. Thus merge_parts!(P,[a,b]) is equivalent to merge_parts!(P,a,b).\n\n\n\n\n\n"
},

{
    "location": "#SimplePartitions.merge_parts!-Union{Tuple{T}, Tuple{Partition{T},T,T}} where T",
    "page": "Home",
    "title": "SimplePartitions.merge_parts!",
    "category": "method",
    "text": "merge_parts!(P,a,b) updates P by merging the parts that contain elements a and b.\n\n\n\n\n\n"
},

{
    "location": "#SimplePartitions.num_elements-Tuple{SimplePartitions.Partition}",
    "page": "Home",
    "title": "SimplePartitions.num_elements",
    "category": "method",
    "text": "num_elements(P) gives the number of elements in the ground set of the partition P. This equals the sum of the sizes of the parts.\n\n\n\n\n\n"
},

{
    "location": "#SimplePartitions.num_parts-Tuple{SimplePartitions.Partition}",
    "page": "Home",
    "title": "SimplePartitions.num_parts",
    "category": "method",
    "text": "num_parts(P) gives the number of parts in the partition P.\n\n\n\n\n\n"
},

{
    "location": "#SimplePartitions.parts-Union{Tuple{Partition{T}}, Tuple{T}} where T",
    "page": "Home",
    "title": "SimplePartitions.parts",
    "category": "method",
    "text": "parts(P) returns a set containing the parts of the partition P. That is, we return a set of sets.\n\n\n\n\n\n"
},

{
    "location": "#SimplePartitions.refines-Union{Tuple{T}, Tuple{Partition{T},Partition{T}}} where T",
    "page": "Home",
    "title": "SimplePartitions.refines",
    "category": "method",
    "text": "refines(P,Q) determines if P is a refinement of Q. That is, is every part of P a subset of a part of Q? The two partitions must have the same ground set of else an error is thrown.\n\nrefines(P,Q) can be invoked as P<=Q. The variants P<Q, P>=Q, and P>Q operate as expected. Note that partitions are only partially ordered by refinement and one can easily construct partitions P and Q for which both P<=Q and Q<=P are false.\n\n\n\n\n\n"
},

{
    "location": "#SimplePartitions.set_element_type-Union{Tuple{Set{T}}, Tuple{T}} where T",
    "page": "Home",
    "title": "SimplePartitions.set_element_type",
    "category": "method",
    "text": "set_element_type(A) gives the element type of a set A.\n\n\n\n\n\n"
},

{
    "location": "#Base.:*-Tuple{SimplePartitions.Partition,SimplePartitions.Partition}",
    "page": "Home",
    "title": "Base.:*",
    "category": "method",
    "text": "For partitions P and Q, P*Q is their meet.\n\n\n\n\n\n"
},

{
    "location": "#Base.:+-Tuple{IntegerPartition,IntegerPartition}",
    "page": "Home",
    "title": "Base.:+",
    "category": "method",
    "text": "The sum of IntegerPartitions is their concatenation (multiset union).\n\n\n\n\n\n"
},

{
    "location": "#Base.:+-Tuple{SimplePartitions.Partition,SimplePartitions.Partition}",
    "page": "Home",
    "title": "Base.:+",
    "category": "method",
    "text": "For partitions P and Q, P+Q is their join.\n\n\n\n\n\n"
},

{
    "location": "#Base.:+-Union{Tuple{T}, Tuple{Partition{T},Set{T}}} where T",
    "page": "Home",
    "title": "Base.:+",
    "category": "method",
    "text": "For a partition P and a set A, P+A creates a new partition with A as a new part. Note that A and the ground set of P must be disjoint.\n\n\n\n\n\n"
},

{
    "location": "#Base.:+-Union{Tuple{T}, Tuple{Partition{T},T}} where T",
    "page": "Home",
    "title": "Base.:+",
    "category": "method",
    "text": "For a partition P and element x, P+x builds a new partition that adds x as a singleton element.\n\n\n\n\n\n"
},

{
    "location": "#Base.collect-Tuple{SimplePartitions.Partition}",
    "page": "Home",
    "title": "Base.collect",
    "category": "method",
    "text": "collect(P::Partition) returns a list of the parts of the partition P.\n\n\n\n\n\n"
},

{
    "location": "#Base.conj-Tuple{IntegerPartition}",
    "page": "Home",
    "title": "Base.conj",
    "category": "method",
    "text": "conj(P::IntegerPartition) returns the Ferrer\'s conjugate of P. Also available as P\'.\n\n\n\n\n\n"
},

{
    "location": "#Base.in-Union{Tuple{T}, Tuple{T,Partition{T}}} where T",
    "page": "Home",
    "title": "Base.in",
    "category": "method",
    "text": "in(a,P) checks if a is in the ground set of P and in(A,P) checks if A is a part of P.\n\n\n\n\n\n"
},

{
    "location": "#Base.join-Union{Tuple{T}, Tuple{Partition{T},Partition{T}}} where T",
    "page": "Home",
    "title": "Base.join",
    "category": "method",
    "text": "join(P,Q) computes the join of the two partitions. This may also be invoked as P+Q.\n\n\n\n\n\n"
},

{
    "location": "#SimplePartitions.kill_sos!-Union{Tuple{Partition{T}}, Tuple{T}} where T",
    "page": "Home",
    "title": "SimplePartitions.kill_sos!",
    "category": "method",
    "text": "kill_sos!(P) wipes out the set-of-sets cache. Only used internally.\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [SimplePartitions]\nOrder = [:type, :function]"
},

]}
