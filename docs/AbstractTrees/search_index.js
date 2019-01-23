var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#AbstractTrees-1",
    "page": "Readme",
    "title": "AbstractTrees",
    "category": "section",
    "text": "(Image: Build Status)This package provides several utilities for working with tree-like data structures. Most importantly, it defines the children method that any package that contains such a datastructure may import and extend in order to take advantage of any generic tree algorithm in this package (or other packages compatible with this package)."
},

{
    "location": "#API-overview-1",
    "page": "Readme",
    "title": "API overview",
    "category": "section",
    "text": "print_tree pretty prints an arbitrary tree data structure.\nTree is a simple wrapper around an arbitrary object that allows tree-indexing into that object (i.e. indexing with collections of indices specifying the child index at every level)\nShadowTree is a tree object that combines two trees of equal structure into a single tree (indexing always produces another ShadowTree, but setindex! with tuples is allowed). Useful for adding annotation nodes to other trees without modifying that tree structure itself.\nLeaves is an iterator to visit the leaves of a tree in order.\nPostOrderDFS is a DFS (i.e. will vist node\'s children before it\'s lexicographically following siblings) that guarantees to visit children before their parents.\nPreOrderDFS is same as PostOrderDFS but visits parents before their children.\nStatelessBFS iterates over a tree level-by-level, but does not keep state (causing this to be O(n^2), but be able to handle changing trees).\ntreemap maps each node of a tree to obtain a new tree.\ntreemap! maps each node of a tree in place."
},

{
    "location": "autodocs/#AbstractTrees.Leaves",
    "page": "Docstrings",
    "title": "AbstractTrees.Leaves",
    "category": "type",
    "text": "Iterator to visit the leaves of a tree, e.g. for the tree\n\nAny[1,Any[2,3]] ├─ 1 └─ Any[2,3]    ├─ 2    └─ 3\n\nwe will get [1,2,3]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractTrees.PostOrderDFS",
    "page": "Docstrings",
    "title": "AbstractTrees.PostOrderDFS",
    "category": "type",
    "text": "Iterator to visit the nodes of a tree, guaranteeing that children will be visited before their parents.\n\ne.g. for the tree\n\nAny[1,Any[2,3]] ├─ 1 └─ Any[2,3]    ├─ 2    └─ 3\n\nwe will get [1,2,3,Any[2,3],Any[1,Any[2,3]]]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractTrees.PreOrderDFS",
    "page": "Docstrings",
    "title": "AbstractTrees.PreOrderDFS",
    "category": "type",
    "text": "Iterator to visit the nodes of a tree, guaranteeing that parents will be visited before their children.\n\nOptionally takes a filter function that determines whether the iterator should continue iterating over a node\'s children (if it has any) or should consider that node a leaf.\n\ne.g. for the tree\n\nAny[Any[1,2],Any[3,4]] ├─ Any[1,2] |  ├─ 1 |  └─ 2 └─ Any[3,4]    ├─ 3    └─ 4\n\nwe will get [Any[Any[1,2],Any[3,4]],Any[1,2],1,2,Any[3,4],3,4]\n\nInvalidation\n\nModifying the underlying tree while iterating over it, is allowed, however, if parents and sibling links are not explicitly stored, the identify of any parent of the last obtained node does not change (i.e. mutation is allowed, replacing nodes is not).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractTrees.StatelessBFS",
    "page": "Docstrings",
    "title": "AbstractTrees.StatelessBFS",
    "category": "type",
    "text": "Iterator to visit the nodes of a tree, all nodes of a level will be visited before their children\n\ne.g. for the tree\n\nAny[1,Any[2,3]] ├─ 1 └─ Any[2,3]    ├─ 2    └─ 3\n\nwe will get [Any[1,Any[2,3]],1,Any[2,3],2,3]\n\nWARNING: This is O(n^2), only use this if you know you need it, as opposed to a more standard statefull approach.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractTrees.ImplicitNodeStack",
    "page": "Docstrings",
    "title": "AbstractTrees.ImplicitNodeStack",
    "category": "type",
    "text": "Keeps a stack of nodes and their corresponding indices. Note that the last node is not explicitly stored in the nodestack, such that length(nodestack) == length(idx_stack)-1 (unless we\'re at the root in which case both are empty)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractTrees.StoredParents",
    "page": "Docstrings",
    "title": "AbstractTrees.StoredParents",
    "category": "type",
    "text": "Indicates that this tree stores parent links explicitly. The implementation   is responsible for defining the parentind function to expose this   information.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractTrees.StoredSiblings",
    "page": "Docstrings",
    "title": "AbstractTrees.StoredSiblings",
    "category": "type",
    "text": "Indicates that this tree stores sibling links explicitly, or can compute them   quickly (e.g. because the tree has a (small) fixed branching ratio, so the   current index of a node can be determined by quick linear search). The   implementation is responsible for defining the relative_state function   to expose this information.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractTrees._print_tree",
    "page": "Docstrings",
    "title": "AbstractTrees._print_tree",
    "category": "function",
    "text": "Usage\n\nPrints an ASCII formatted representation of the tree to the given io object. By default all children will be printed up to a maximum level of 5, though this valud can be overriden by the maxdepth parameter. The charset to use in printing can be customized using the charset keyword argument.\n\nExamples\n\njulia> print_tree(STDOUT,Dict(\"a\"=>\"b\",\"b\"=>[\'c\',\'d\']))\nDict{String,Any}(\"b\"=>[\'c\',\'d\'],\"a\"=>\"b\")\n├─ b\n│  ├─ c\n│  └─ d\n└─ a\n   └─ b\n\njulia> print_tree(STDOUT,Dict(\"a\"=>\"b\",\"b\"=>[\'c\',\'d\']);\n        charset = TreeCharSet(\'+\',\'\\\\\',\'|\',\"--\"))\nDict{String,Any}(\"b\"=>[\'c\',\'d\'],\"a\"=>\"b\")\n+-- b\n|   +-- c\n|   \\-- d\n\\-- a\n   \\-- b\n\n\n\n"
},

{
    "location": "autodocs/#AbstractTrees.ascend-Tuple{Any,Any}",
    "page": "Docstrings",
    "title": "AbstractTrees.ascend",
    "category": "method",
    "text": "Acends the tree, at each node choosing whether or not to continue.\nNote that the parent is computed before the callback is exectuted, allowing\nmodification of the argument to the callback (as long as the overall tree\nstructure is not altered).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractTrees.descend-Tuple{Any,Any}",
    "page": "Docstrings",
    "title": "AbstractTrees.descend",
    "category": "method",
    "text": "Descends the tree, at each node choosing the child given by select callback\nor the current node if 0 is returned.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AbstractTrees.rootstate-Tuple{Any}",
    "page": "Docstrings",
    "title": "AbstractTrees.rootstate",
    "category": "method",
    "text": "Trees must override with method if the state of the root is not the same as the tree itself (e.g. IndexedTrees should always override this method).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.iterate-Tuple{StatelessBFS,Any}",
    "page": "Docstrings",
    "title": "Base.iterate",
    "category": "method",
    "text": "Stateless level-order bfs iteration. The algorithm is as follows:\n\nGo up. If there is a right neighbor, go right, then left until you reach the same level. If you reach the root, go left until you reach the next level.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [AbstractTrees]\nOrder = [:type, :function]"
},

]}
