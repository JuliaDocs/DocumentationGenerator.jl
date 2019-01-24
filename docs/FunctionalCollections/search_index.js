var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#FunctionalCollections-1",
    "page": "Readme",
    "title": "FunctionalCollections",
    "category": "section",
    "text": "(Image: Build Status) (Image: FunctionalCollections)Functional and persistent data structures for Julia. This is a work in progress and is currently not optimized for performance.NOTE: The master branch of FunctionalCollections is for Julia v0.7 and up. For earlier Julia versions please use FunctionalCollections v0.3.x."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "julia> Pkg.add(\"FunctionalCollections\")\n\njulia> using FunctionalCollections"
},

{
    "location": "#Exports-1",
    "page": "Readme",
    "title": "Exports",
    "category": "section",
    "text": "Collection         | Abbrev\n----------------------------\nPersistentVector   | pvec\nPersistentHashMap  | phmap\nPersistentArrayMap |\nPersistentSet      | pset\nPersistentList     | plist\nPersistentQueue    | pqueuesrc/FunctionalCollections.jl contains all of the package\'s exports, though many built-ins are also implemented."
},

{
    "location": "#PersistentVector-1",
    "page": "Readme",
    "title": "PersistentVector",
    "category": "section",
    "text": "Persistent vectors are immutable, sequential, random-access data structures, with performance characteristics similar to arrays.julia> v = @Persistent [1, 2, 3, 4, 5]\nPersistent{Int64}[1, 2, 3, 4, 5]Since persistent vectors are immutable, \"changing\" operations return a new vector instead of modifying the original.julia> append(v, [6, 7])\nPersistent{Int64}[1, 2, 3, 4, 5, 6, 7]\n\n# v hasn\'t changed\njulia> v\nPersistent{Int64}[1, 2, 3, 4, 5]Persistent vectors are random-access structures, and can be indexed into just like arrays.julia> v[3]\n3But since they\'re immutable, it doesn\'t make sense to define index assignment (v[3] = 42) since assignment implies change. Instead, assoc returns a new persistent vector with some value associated with a given index.julia> assoc(v, 3, 42)\nPersistent{Int64}[1, 2, 42, 4, 5]Three functions, push, peek, and pop, make up the persistent vector stack interface. push adds a single element (whereas append adds all elements in the given collection, starting from the left), peek returns the last element of the vector, and pop returns a new vector without the last element.julia> push(v, 6)\nPersistent{Int64}[1, 2, 3, 4, 5, 6]\n\njulia> peek(v)\n5\n\njulia> pop(v)\nPersistent{Int64}[1, 2, 3, 4]Persistent vectors also support iteration and higher-order sequence operations.julia> for el in @Persistent [\"foo\", \"bar\", \"baz\"]\n           println(el)\n       end\nfoo\nbar\nbaz\n\njulia> map(x -> x * 2, v)\nPersistent{Int64}[2, 4, 6, 8, 10]\n\njulia> filter(iseven, v)\nPersistent{Int64}[2, 4]"
},

{
    "location": "#PersistentHashMap-1",
    "page": "Readme",
    "title": "PersistentHashMap",
    "category": "section",
    "text": "Persistent hash maps are immutable, unordered, associative structures, similar to the built-in Dict type.julia> name = @Persistent Dict(:first => \"Zach\", :last => \"Allaun\")\nPersistent{Symbol, String}[last => Allaun, first => Zach]They can be queried in a manner similar to the dictionaries.julia> name[:first]\n\"Zach\"\n\njulia> get(name, :middle, \"\")\n\"\"With persistent vectors, assoc is used to associate a value with an index; with persistent hash maps, you use it to associate a value with an arbitrary key. To dissociate a key/value pair, use dissoc.julia> fullname = assoc(name, :middle, \"Randall\")\nPersistent{Symbol, String}[last => Allaun, first => Zach, middle => Randall]\n\njulia> dissoc(fullname, :middle)\nPersistent{Symbol, String}[last => Allaun, first => Zach]Base.map is defined for persistent hash maps. The function argument should expect a (key, value) tuple and return a (key, value) tuple. This function will be applied to each key-value pair of the hash map to construct a new one.julia> mapkeys(f, m::PersistentHashMap) =\n	       map(kv -> (f(kv[1]), kv[2]), m)\n\njulia> mapkeys(string, fullname)\nPersistent{String, String}[last => Allaun, middle => Randall, first => Zach]"
},

{
    "location": "#PersistentArrayMap-1",
    "page": "Readme",
    "title": "PersistentArrayMap",
    "category": "section",
    "text": "PersistentArrayMaps are immutable dictionaries implemented as Arrays of key-value pairs. This means that the time complexity of most operations on them is O(n). They can be quickly created, though, and useful at small sizes.julia> m = PersistentArrayMap((1, \"one\"))\nPersistent{Int64, String}Pair{Int64,String}[1=>\"one\"]\n\njulia> m2 = assoc(m, 2, \"two\")\nPersistent{Int64, String}Pair{Int64,String}[1=>\"one\", 2=>\"two\"]\n\njulia> m == m2\nfalse\n\njulia> dissoc(m2, 2)\nPersistent{Int64, String}Pair{Int64,String}[1 => one]\n\njulia> m == dissoc(m2, 2)\ntrue"
},

{
    "location": "#PersistentSet-1",
    "page": "Readme",
    "title": "PersistentSet",
    "category": "section",
    "text": "PersistentSets are immutable sets. Along with the usual set interface, conj(s::PersistentSet, val) returns a set with an element added (conjoined), and disj(s::PersistentSet, val returns a set with an element removed (disjoined)."
},

{
    "location": "#TODO:-1",
    "page": "Readme",
    "title": "TODO:",
    "category": "section",
    "text": ""
},

{
    "location": "#General-1",
    "page": "Readme",
    "title": "General",
    "category": "section",
    "text": "Ints vs Uints w.r.t. bitwise operations\nchildren instead of arrayof\nstandardize \"short-fn\" interfaces:\nlastchild instead of arrayof(node)[end]\npeek should become pop, pop should become butlast\nWhat is Base doing for Arrays w.r.t. boundscheck!, can we drop boundcheck for iteration# currently\npvec([1,2,3,4,5])\npset(1,2,3,4,5)\n\n# should be\npvec(1,2,3,4,5)\npset(1,2,3,4,5)@Persistent macro sugar for hi-jacking built-in syntax:@Persistent Dict(\"foo\" => 1, \"bar\" => 2, \"baz\" => 3)\n# creates a phmap\n\n@Persistent [1, 2, 3, 4, 5]\n# creates a pvec"
},

{
    "location": "#PersistentQueue-1",
    "page": "Readme",
    "title": "PersistentQueue",
    "category": "section",
    "text": "queue => pqueue"
},

{
    "location": "#BitmappedTrie-1",
    "page": "Readme",
    "title": "BitmappedTrie",
    "category": "section",
    "text": "comment mask to indicate index-from-1 assumption"
},

{
    "location": "#PersistentVector-2",
    "page": "Readme",
    "title": "PersistentVector",
    "category": "section",
    "text": "constant time rest by adding an initial index offset\nquick slicing with initial offset and structure deletion\npvec mask should take the pvec even though it doesn\'t use it\nmove extra pvec constructor to the type definition"
},

{
    "location": "#PersistentHashMap-2",
    "page": "Readme",
    "title": "PersistentHashMap",
    "category": "section",
    "text": "the repr of values should be printed, not the string\nprinting breaks after dissocing"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [FunctionalCollections]\nOrder = [:type, :function]"
},

]}
