var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Counters-1",
    "page": "Readme",
    "title": "Counters",
    "category": "section",
    "text": "(Image: Build Status)(Image: Coverage Status)(Image: codecov.io)We often want to count things and a way to do that is to create a dictionary that maps objects to their counts. A Counter object simplifies that process. Say we want to count values of type String. We would create a counter for that type like this:julia> c = Counter{String}()\nCounter{String} with 0 entriesThe two primary operations for a Counter are value increment and value retrieval. To increment the value of a counter we do this:julia> c[\"hello\"] += 1\n1To access the count, we use square brackets:julia> c[\"hello\"]\n1\n\njulia> c[\"bye\"]\n0Notice that we need not worry about whether or not a key is already known to the Counter. If presented with an unknown key, the Counter assumes its value is 0.A Counter may be assigned to like this c[\"alpha\"]=4 but the more likely use case is c[\"bravo\"]+=1 invoked each time a value, such as \"bravo\" is encountered."
},

{
    "location": "#Counting-the-elements-of-a-list-1",
    "page": "Readme",
    "title": "Counting the elements of a list",
    "category": "section",
    "text": "The function counter (lowercase \'c\') counts the element of a list/array or set. The multiplicity of an element is the number of times it appears in the list.julia> A = [ \"alpha\", \"bravo\", \"alpha\", \"gamma\" ];\n\njulia> C = counter(A);\n\njulia> showall(C)\nCounter{String} with these nonzero values:\nalpha ==> 2\nbravo ==> 1\ngamma ==> 1\n\njulia> counter(eye(3))\nSimpleTools.Counter{Float64} with 2 entries:\n  0.0 => 6\n  1.0 => 3"
},

{
    "location": "#Addition-of-counters-1",
    "page": "Readme",
    "title": "Addition of counters",
    "category": "section",
    "text": "If c and d are counters (of the same type of object) their sum c+d creates a new counter by adding the values in c and d. That is, if a=c+d and k is any key, then a[k] equals c[k]+d[k]."
},

{
    "location": "#Incrementing-1",
    "page": "Readme",
    "title": "Incrementing",
    "category": "section",
    "text": "To increment the count of an item x in a counter c we may either use c[x]+=1 or the increment function like this: incr!(c,x).The increment function incr! is more useful for incrementing a collection of items. Use incr!(c,items) to add 1 to the count for each element held in items. If an element is present in items multiple times, its count is incremented for each occurrence.julia> c = Counter{Int}()\nSimpleTools.Counter{Int64} with 0 entries\n\njulia> items = [1,2,3,4,1,2,1]\n7-element Array{Int64,1}:\n 1\n 2\n 3\n 4\n 1\n 2\n 1\n\njulia> incr!(c,items)\n\njulia> showall(c)\nCounter{Int64} with these nonzero values:\nCounter{Int64} with these nonzero values:\n1 ==> 3\n2 ==> 2\n3 ==> 1\n4 ==> 1In addition, incr! may be used to increment one counter by the amount held in another. Note that it\'s the first argument c that gets changed; there is no effect on the second argument d.Note: incr!(c,d) and c += d have the same effect, but the first is more efficient.julia> d = Counter{Int}();\n\njulia> d[1] = 1;;\n\njulia> d[5] = 1;\n\njulia> incr!(c,d)\n\njulia> showall(c)\nCounter{Int64} with these nonzero values:\n1 ==> 4\n2 ==> 2\n3 ==> 1\n4 ==> 1\n5 ==> 1"
},

{
    "location": "#More-functions-1",
    "page": "Readme",
    "title": "More functions",
    "category": "section",
    "text": "sum(c) returns the sum of the values in c; that is, the totalof all the counts.length(c) returns the number of values held in c. Note thatthis might include objects with value 0.nnz(c) returns the number of nonzero values heldin c.keys(c) returns an iterator for the keys held by c.\nvalues(c) returns an iterator for the values held by c.\nshowall(c) gives a print out of all the keys and their nonzerovalues in c.clean!(c) removes all keys from c whose value is 0. Thiswon\'t change its behavior, but will free up some memory.In addition, we can convert a Counter into a one-dimensional array in which each element appears with its appropriate multiplicity using collect:julia> C = Counter{Int}()\nSimpleTools.Counter{Int64} with 0 entries\n\njulia> C[3] = 4\n4\n\njulia> C[5] = 0\n0\n\njulia> C[-2] = 2\n2\n\njulia> collect(C)\n6-element Array{Int64,1}:\n  3\n  3\n  3\n  3\n -2\n -2\n\njulia> collect(keys(C))\n3-element Array{Int64,1}:\n  3\n -2\n  5"
},

{
    "location": "#Average-value-1",
    "page": "Readme",
    "title": "Average value",
    "category": "section",
    "text": "If the objects counted in C are numbers, then we compute the weighted average of those numbers with mean(C).julia> C = Counter{Int}()\nSimpleTools.Counter{Int64} with 0 entries\n\njulia> C[2] = 3\n3\n\njulia> C[3] = 7\n7\n\njulia> mean(C)\n2.7"
},

{
    "location": "#Hashing-1",
    "page": "Readme",
    "title": "Hashing",
    "category": "section",
    "text": "hash(C::Counter) returns a hash value for the C. Note that clean! is applied to C before computing the hash. This is done to ensure that equal counters give the same hash value.May also be invoked as hash(C::Counter, h::Uint)."
},

{
    "location": "#It\'s-Associative-1",
    "page": "Readme",
    "title": "It\'s Associative",
    "category": "section",
    "text": "A Counter is a subtype of Associative and therefore we can use methods such as keys and/or values to get iterators to those items."
},

{
    "location": "#CSV-Printing-1",
    "page": "Readme",
    "title": "CSV Printing",
    "category": "section",
    "text": "The function csv_print writes a Counter to the screen in comma-separated format. This can be readily used for importing into a spreadsheet.julia> C = Counter{Float64}()\nSimpleTools.Counter{Float64} with 0 entries\n\njulia> C[3.4]=10\n10\n\njulia> C[2.2]=3\n3\n\njulia> csv_print(C)\n2.2, 3\n3.4, 10"
},

{
    "location": "#Counting-in-parallel-1",
    "page": "Readme",
    "title": "Counting in parallel",
    "category": "section",
    "text": "See the parallel-example directory for an illustration of how to use Counters in multiple parallel processes."
},

{
    "location": "autodocs/#Counters.Counter",
    "page": "Docstrings",
    "title": "Counters.Counter",
    "category": "type",
    "text": "A Counter is a device for keeping a count of how often we observe various objects. It is created by giving a type such as c=Counter{String}().\n\nCounts are retrieved with square brackets like a dictionary: c[\"hello\"]. It is safe to retrieve the count of an object never encountered, e.g., c[\"goodbye\"]; in this case 0 is returned.\n\nCounts may be assigned with c[key]=amount, but the more likely use case is using c[key]+=1 to count each time key is encountered.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Counters.clean!-Union{Tuple{Counter{T}}, Tuple{T}} where T",
    "page": "Docstrings",
    "title": "Counters.clean!",
    "category": "method",
    "text": "clean!(c) removes all keys from c whose value is 0. Generally, it\'s not necessary to invoke this unless one suspects that c contains a lot of keys associated with a zero value.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Counters.counter-Tuple{AbstractArray}",
    "page": "Docstrings",
    "title": "Counters.counter",
    "category": "method",
    "text": "counter(list) creates a Counter whose elements are the members of list with the appropriate multiplicities. This may also be used if list is a Set or an IntSet (in which case multiplicities will all be 1).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Counters.csv_print-Tuple{Counter}",
    "page": "Docstrings",
    "title": "Counters.csv_print",
    "category": "method",
    "text": "csv_print(C::Counter) prints out C in a manner suitable for import into a spreadsheet.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Counters.incr!-Union{Tuple{T}, Tuple{Counter{T},T}} where T",
    "page": "Docstrings",
    "title": "Counters.incr!",
    "category": "method",
    "text": "incr!(c,x) increments the count for x by 1. This is equivalent to c[x]+=1.\n\nincr!(c,items) is more useful. Here items is an iterable collection of keys and we increment the count for each element in items.\n\nincr!(c,d) where c and d are counters will increment c by the amounts held in d.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Counters.mean-Union{Tuple{Counter{T}}, Tuple{T}} where T<:Number",
    "page": "Docstrings",
    "title": "Counters.mean",
    "category": "method",
    "text": "mean(C::Counter) computes the weighted average of the objects in C. Of course, the counted objects must be a Number; their multiplicity (weight) in the average is determined by their C-value.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.:+-Union{Tuple{T}, Tuple{Counter{T},Counter{T}}} where T",
    "page": "Docstrings",
    "title": "Base.:+",
    "category": "method",
    "text": "If c and d are Counters, then c+d creates a new Counter in which the count associated with an object x is c[x]+d[x].\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.collect-Union{Tuple{Counter{T}}, Tuple{T}} where T",
    "page": "Docstrings",
    "title": "Base.collect",
    "category": "method",
    "text": "collect(C) for a Counter returns an array containing the elements of C each repeated according to its multiplicty.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.hash",
    "page": "Docstrings",
    "title": "Base.hash",
    "category": "function",
    "text": "Performing hash on a Counter will first apply clean! to the Counter in order that equal Counter objects hash the same.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.keys-Tuple{Counter}",
    "page": "Docstrings",
    "title": "Base.keys",
    "category": "method",
    "text": "keys(c::Counter) returns an interator for the things counted by c.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.length-Tuple{Counter}",
    "page": "Docstrings",
    "title": "Base.length",
    "category": "method",
    "text": "length(c::Counter) gives the number of entries monitored by the Counter. Conceivably, some may have value 0.\n\nSee also: nnz.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.sum-Tuple{Counter}",
    "page": "Docstrings",
    "title": "Base.sum",
    "category": "method",
    "text": "sum(c::Counter) gives the total of the counts for all things in c.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#SparseArrays.nnz-Tuple{Counter}",
    "page": "Docstrings",
    "title": "SparseArrays.nnz",
    "category": "method",
    "text": "nnz(c::Counter) gives the number of keys in the Counter with nonzero value.\n\nSee also: length.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Counters]\nOrder = [:type, :function]"
},

]}
