var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Multisets-1",
    "page": "Readme",
    "title": "Multisets",
    "category": "section",
    "text": "(Image: Build Status)(Image: Coverage Status)(Image: codecov.io)Finite multisets in Julia.A multiset is an unordered collection of things with repetition permitted."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Pkg.clone(\"https://github.com/scheinerman/Multisets.jl.git\")"
},

{
    "location": "#Creating-a-multiset-1",
    "page": "Readme",
    "title": "Creating a multiset",
    "category": "section",
    "text": "julia> using Multisets\njulia> M = Multiset{Type}()where Type is the type of elements to be held in M (e.g., Int or String). If Type is omitted, this defaults to Any.Given a collection list of elements (such as a Vector or Set) invoking Multiset(list) creates a new Multiset in which the elements of list appear with the appropriate multiplicity. For example, Multiset(eye(Int,3)) creates the multiset {0,0,0,0,0,0,1,1,1}."
},

{
    "location": "#Adding/deleting-elements-1",
    "page": "Readme",
    "title": "Adding/deleting elements",
    "category": "section",
    "text": "push!(M,x) increases the multiplicity of x in M by 1. If x is notalready in M, then it is added to M.push!(M,x,incr) increases the multiplicity of x in M by incr. Weallow incr to be negative to decrease the multiplicity of x (but not below 0).M[x]=m explicitly sets the multiplicty of x to m.\ndelete!(M,x) removes x from M. M[x]=0 has the same effect."
},

{
    "location": "#Access-1",
    "page": "Readme",
    "title": "Access",
    "category": "section",
    "text": "To determine the multiplicity of x in M use M[x]. This returns 0 if x was never added to M.To get a list of all the elements in M, use collect:julia> collect(M)\n6-element Array{Int64,1}:\n 1\n 1\n 2\n 2\n 3\n 4Notice that elements are repeated per their multiplicity. To get a list of the elements in which elements appear only once each use unique(collect(M)).To convert M into a Julia Set (effectively, set all multiplicities to 1) use Set(M):julia> Set(M)\nSet([4,2,3,1])"
},

{
    "location": "#Printing-1",
    "page": "Readme",
    "title": "Printing",
    "category": "section",
    "text": "The result of println(M) can be controlled by the following functions. Suppose a multiset is created as follows:julia> M = Multiset{String}();\njulia> push!(M,\"alpha\");\njulia> push!(M,\"beta\", 2);set_braces_show() causes multisets to be printedas a list enclosed in curly braces: {alpha,beta,beta}. This is the default.set_short_show() causes multisets to be printed in anabbreviated format like this: Multiset{String} with 3 elements.set_julia_show() causes multisets to be printed in a form that wouldbe a proper Julia definition of that multiset: Multiset(String[\"alpha\",\"beta\",\"beta\"])."
},

{
    "location": "#Operations-1",
    "page": "Readme",
    "title": "Operations",
    "category": "section",
    "text": ""
},

{
    "location": "#Union/Intersection-1",
    "page": "Readme",
    "title": "Union/Intersection",
    "category": "section",
    "text": "The functions union and intersect compute the union and intersection of multisets. For example:julia> A = Multiset(1,2,2,3)\n{1,2,2,3}\n\njulia> B = Multiset(1,1,1,2,4)\n{1,1,1,2,4}\n\njulia> union(A,B)\n{1,1,1,2,2,3,4}\n\njulia> intersect(A,B)\n{1,2}The multiplicity of x in union(A,B) is max(A[x],B[x]) and the multiplicity in intersect(A,B) is min(A[x],B[x]).Union and intersection can be abbreviated A|B and A&B, respectively. See + below (disjoint union) which behaves differently. "
},

{
    "location": "#Product/sum/difference-1",
    "page": "Readme",
    "title": "Product/sum/difference",
    "category": "section",
    "text": "The Cartesian product of multisets A and B is computed with A*B.If a is an element of A and b is an element of B then the multiplicity of (a,b) in A*B is A[x]*B[x].For a nonnegative integer n and a multiset A the result of n*A isa new multiset in which the multiplicy of x is n*A[x].The disjoint union of A and B is computed with A+B.If a is an element of A and b is an element of B then the multiplicity of (a,b) in A*B is A[x]+B[x].The difference of multisets is computed as A-B. In the result,the multiplicity of x is max(0, A[x]-B[x])."
},

{
    "location": "#Cardinality-1",
    "page": "Readme",
    "title": "Cardinality",
    "category": "section",
    "text": "The function length computes the cardinality (number of elements) in a multiset (including multiplicities).The function isempty returns true exactly when length(M)==0."
},

{
    "location": "#Comparison-1",
    "page": "Readme",
    "title": "Comparison",
    "category": "section",
    "text": "The operator A==B and the function issubset(A,B) are provided to determine if A and B are equal or Ais a submultiset of B.Note that A==B holds when A[x]==B[x] for all x and issubset(A,B) holds when A[x] <= B[x] for all x.The following can be used for testing subset and superset:A <= B\nA < B\nA >= B\nA > B"
},

{
    "location": "#Multisets-as-counters-1",
    "page": "Readme",
    "title": "Multisets as counters",
    "category": "section",
    "text": "Multisets are useful devices for counting. For example, suppose a program reads in words from a text file and we want to count how often each word appears in that file. We can let M = Multiset{String}() and then step through the words in the file pushing each instance into M. The basic structure looks like this:for word in FILE\n  push!(M,word)\nendIn the end, M[word] will return how often word was seen in the file. See also my Counters module."
},

{
    "location": "#Miscellaneous-1",
    "page": "Readme",
    "title": "Miscellaneous",
    "category": "section",
    "text": "A Multiset consists of a single data field called data that is a dictionary mapping elements to their multiplicities. The various Multiset functions ensure the integrity of data (enforcing nonnegativity).The function clean! purges the data field of any elements with multiplicity equal to 0. This is only used by the hash function which is provided so a Multiset can be used as a key in a dictionary, etc. The hash of a Multiset is simply the hash of its cleaned data field. Note: The clean! function is not exported. There probably should be no reason for the user to invoke it, but if desired used Multisets.clean!(M)."
},

{
    "location": "autodocs/#Multisets.Multiset",
    "page": "Docstrings",
    "title": "Multisets.Multiset",
    "category": "type",
    "text": "A Multiset is an unordered collection of things with repetition permitted. A new Multiset container is created with Multiset{T}() where T is the type of the objects held in the multiset. If T is omitted, it defaults to Any.\n\nA Multiset can be created from a collection list (such as a Vector or Set) with Multiset(list). If an element is repeated in list it has the appropriate multiplicity.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Multisets.set_braces_show-Tuple{}",
    "page": "Docstrings",
    "title": "Multisets.set_braces_show",
    "category": "method",
    "text": "Set braces display mode for multisets, like this:\n\n{1,2,2,3,3,3,3}\n\nSee also set_short_show and set_julia_show.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Multisets.set_julia_show-Tuple{}",
    "page": "Docstrings",
    "title": "Multisets.set_julia_show",
    "category": "method",
    "text": "Set Julia style display mode for multisets, like this:\n\nMultiset(Int64[1,2,2,3,3,3,3])\n\nSee also set_short_show and set_braces_show.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Multisets.set_short_show-Tuple{}",
    "page": "Docstrings",
    "title": "Multisets.set_short_show",
    "category": "method",
    "text": "Set show display mode for multisets, like this:\n\nMultiset{Int64} with 7 elements\n\nSee also set_braces_show and set_julia_show.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.:&-Tuple{Multiset,Multiset}",
    "page": "Docstrings",
    "title": "Base.:&",
    "category": "method",
    "text": "A&B for multisets is intersect(A,B).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.:*-Union{Tuple{T}, Tuple{Int64,Multiset{T}}} where T",
    "page": "Docstrings",
    "title": "Base.:*",
    "category": "method",
    "text": "n*A is the scalar multiple of a multiset in which the multiplicity of x is n*A[x]. Of course, we require n >= 0.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.:*-Union{Tuple{T}, Tuple{S}, Tuple{Multiset{S},Multiset{T}}} where T where S",
    "page": "Docstrings",
    "title": "Base.:*",
    "category": "method",
    "text": "A*B for the Cartesian product of multisets A and B.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.:+-Union{Tuple{T}, Tuple{S}, Tuple{Multiset{S},Multiset{T}}} where T where S",
    "page": "Docstrings",
    "title": "Base.:+",
    "category": "method",
    "text": "A+B for multisets is the disjoint union, i.e., a new multiset in which the multiplicity of x is A[x]+B[x]. This can be abbreviated A|B.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.:--Union{Tuple{T}, Tuple{S}, Tuple{Multiset{S},Multiset{T}}} where T where S",
    "page": "Docstrings",
    "title": "Base.:-",
    "category": "method",
    "text": "A-B for multisets is the multiset difference, i.e., a new multiset in which the multiplicity of x is A[x]-B[x] unless this goes below 0, in which case the multiplicity is 0.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.:|-Tuple{Multiset,Multiset}",
    "page": "Docstrings",
    "title": "Base.:|",
    "category": "method",
    "text": "For multisets, A|B is union(A,B). See also + which behaves differently.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.getindex-Union{Tuple{T}, Tuple{Multiset{T},Any}} where T",
    "page": "Docstrings",
    "title": "Base.getindex",
    "category": "method",
    "text": "For a M[t] where M is a Multiset returns the multiplicity of t in M. A value of 0 means that t is not a member of M.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.intersect-Union{Tuple{T}, Tuple{S}, Tuple{Multiset{S},Multiset{T}}} where T where S",
    "page": "Docstrings",
    "title": "Base.intersect",
    "category": "method",
    "text": "intersect(A,B) for multisets creates a new multiset in which the multiplicity of x is min(A[x],B[x]). This may be abbreviated A&B.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.push!-Union{Tuple{T}, Tuple{Multiset{T},Any}, Tuple{Multiset{T},Any,Int64}} where T",
    "page": "Docstrings",
    "title": "Base.push!",
    "category": "method",
    "text": "push!(M,x,incr) increases the multiplicity of x in M by incr (which defaults to 1). incr can be negative, but it is not possible to decrease the multiplicty below 0.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.union-Union{Tuple{T}, Tuple{S}, Tuple{Multiset{S},Multiset{T}}} where T where S",
    "page": "Docstrings",
    "title": "Base.union",
    "category": "method",
    "text": "union(A,B) for multisets creates a new multiset in which the multiplicity of x is max(A[x],B[x]).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Multisets.clean!-Tuple{Multiset}",
    "page": "Docstrings",
    "title": "Multisets.clean!",
    "category": "method",
    "text": "clean!(M) removes elements of multiplicy 0 from the underlying data structure supporting M.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Multisets]\nOrder = [:type, :function]"
},

]}
