var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#[Dendriform.jl](https://github.com/chakravala/Dendriform.jl)-1",
    "page": "Home",
    "title": "Dendriform.jl",
    "category": "section",
    "text": "Symbolic parser generator for Julia language expressions using REDUCE algebra term rewrite system"
},

{
    "location": "#Setup-1",
    "page": "Home",
    "title": "Setup",
    "category": "section",
    "text": "Installation of latest release version using Julia:julia> Pkg.add(\"Dendriform\")Provides the types PBTree for planar binary trees, Grove for tree collections of constant degree, and GroveBin to compress grove data. This package defines various essential operations on planar binary trees and groves like ∪ for union; ∨ for graft; left and right for branching; <, >, ≤, ≥ for Tamari\'s partial ordering; / and \\ (i.e. over and under); and the dashv and vdash operations ⊣, ⊢, +, * for dendriform algebra."
},

{
    "location": "#Background-1",
    "page": "Home",
    "title": "Background",
    "category": "section",
    "text": "Check the README for more background information."
},

{
    "location": "#Usage-1",
    "page": "Home",
    "title": "Usage",
    "category": "section",
    "text": "Basic usage examples:julia> using Dendriform\n\njulia> Grove(3,7) ⊣ [1,2]∪[2,1]\n[1,2,5,1,2] ↦ [3]∅∅[2,5][1,4] ↦ 20/42 or 21807\n[1,2,5,2,1] ↦ [3]∅∅[2,4][1,5] ↦ 21/42 or 21906\n[2,1,5,1,2] ↦ [3]∅∅[1,5][2,4] ↦ 22/42 or 22797\n[2,1,5,2,1] ↦ [3]∅∅[1,4][2,5] ↦ 23/42 or 22896\n[1,5,3,1,2] ↦ [2]∅[3][5][1,4] ↦ 27/42 or 30807\n[1,5,2,1,3] ↦ [2]∅[5][3][1,4] ↦ 25/42 or 29007\n[1,5,1,2,3] ↦ [2]∅[5][4][1,3] ↦ 24/42 or 28908\n[1,5,3,2,1] ↦ [2]∅[3][4][1,5] ↦ 28/42 or 30906\n[1,5,1,3,1] ↦ [2]∅[4]∅[1,3,5] ↦ 26/42 or 30186\n267911168 Y5 #9/42 [0.006092%]\n\njulia> Grove(2,3) * [1,2,3]∪[3,2,1] |> GroveBin\n2981131286847743360614880957207748817969 Y6 #30/132 [54.75%]\n\njulia> [2,1,7,4,1,3,1] < [2,1,7,4,3,2,1]\ntrue"
},

{
    "location": "#References-1",
    "page": "Home",
    "title": "References",
    "category": "section",
    "text": "Dan Yasaki with Adriano Bruno, The arithmetic of planar binary trees, Involve 4 (2011), no. 1, 1-11. (PDF)\nJean-Louis Loday, Arithmetree, J. of Algebra (2002), no. 258, 275-309."
},

{
    "location": "library/#",
    "page": "Library",
    "title": "Library",
    "category": "page",
    "text": ""
},

{
    "location": "library/#Dendriform.jl-Library-1",
    "page": "Library",
    "title": "Dendriform.jl Library",
    "category": "section",
    "text": ""
},

{
    "location": "library/#Index-1",
    "page": "Library",
    "title": "Index",
    "category": "section",
    "text": ""
},

{
    "location": "library/#Dendriform.PBTree",
    "page": "Library",
    "title": "Dendriform.PBTree",
    "category": "type",
    "text": "Planar Binary Tree with Loday\'s notation\n\nSummary\n\nmutable struct PBTree <: AbstractGrove\n\nFields\n\ndegr::UInt8 Y::Array{UInt8,1}\n\n\n\n\n\n"
},

{
    "location": "library/#Dendriform.Grove",
    "page": "Library",
    "title": "Dendriform.Grove",
    "category": "type",
    "text": "Grove of planar binary trees, matrix equivalence class\n\nSummary\n\nmutable struct Grove <: AbstractGrove\n\nFields\n\ndegr::UInt8 size::Int Y::Array{UInt8,2}\n\n\n\n\n\n"
},

{
    "location": "library/#Dendriform.GroveBin",
    "page": "Library",
    "title": "Dendriform.GroveBin",
    "category": "type",
    "text": "Compressed binary representation of grove\n\nSummary\n\nmutable struct GroveBin <: AbstractGrove\n\nFields\n\ndegr::UInt8 size::Int gbin::Integer ppos::Float16\n\n\n\n\n\n"
},

{
    "location": "library/#Dendriform.BaseTree",
    "page": "Library",
    "title": "Dendriform.BaseTree",
    "category": "type",
    "text": "Descending greatest integer search data for grove\n\nSummary\n\nmutable struct BaseTree <: Abstract Grove\n\nFields\n\nμ::Array{Array{UInt8,1},1}\n\n\n\n\n\n"
},

{
    "location": "library/#Dendriform-Types-1",
    "page": "Library",
    "title": "Dendriform Types",
    "category": "section",
    "text": "PBTreeGroveGroveBinDendriform.BaseTree"
},

{
    "location": "library/#Base.:∪",
    "page": "Library",
    "title": "Base.:∪",
    "category": "function",
    "text": "∪(g...)\n\nReturns union of AbstractGrove objects\n\n\n\n\n\n"
},

{
    "location": "library/#Dendriform-Operators-1",
    "page": "Library",
    "title": "Dendriform Operators",
    "category": "section",
    "text": "∪"
},

{
    "location": "library/#Dendriform.graft",
    "page": "Library",
    "title": "Dendriform.graft",
    "category": "function",
    "text": "graft(left::AbstractPBTree, right::AbstractPBTree)\n\nGrafts the left and right PBTree with root vertex\n\n\n\n\n\n"
},

{
    "location": "library/#Dendriform.:∨",
    "page": "Library",
    "title": "Dendriform.:∨",
    "category": "function",
    "text": "∨(left::AbstractPBTree, right::AbstractPBTree)\n\nGrafts the left and right AbstractPBTree objects\n\n\n\n\n\n"
},

{
    "location": "library/#Dendriform.left",
    "page": "Library",
    "title": "Dendriform.left",
    "category": "function",
    "text": "left(::AbstractPBTree)\n\nReturns the left branch of an AbstractPBTree\n\n\n\n\n\n"
},

{
    "location": "library/#Dendriform.right",
    "page": "Library",
    "title": "Dendriform.right",
    "category": "function",
    "text": "right(::AbstractPBTree)\n\nReturns the right branch of an AbstractPBTree\n\n\n\n\n\n"
},

{
    "location": "library/#Branching-1",
    "page": "Library",
    "title": "Branching",
    "category": "section",
    "text": "graft∨leftright"
},

{
    "location": "library/#Dendriform.posetnext",
    "page": "Library",
    "title": "Dendriform.posetnext",
    "category": "function",
    "text": "posetnext(::AbstractPBTree)\n\nReturns a Grove that covers the given tree\n\n\n\n\n\n"
},

{
    "location": "library/#Dendriform.posetprev",
    "page": "Library",
    "title": "Dendriform.posetprev",
    "category": "function",
    "text": "posetprev(::AbstractPBTree)\n\nReturns a Grove that covers the given tree\n\n\n\n\n\n"
},

{
    "location": "library/#Dendriform.:⋖",
    "page": "Library",
    "title": "Dendriform.:⋖",
    "category": "function",
    "text": "⋖(a::AbstractPBTree, b::AbstractPBTree)\n\nReturns Bool that tells if b covers a in Tamari partial order\n\n\n\n\n\n"
},

{
    "location": "library/#Dendriform.:⋗",
    "page": "Library",
    "title": "Dendriform.:⋗",
    "category": "function",
    "text": "⋗(a::AbstractPBTree, b::AbstractPBTree)\n\nReturns Bool that tells if a covers b in Tamari partial order\n\n\n\n\n\n"
},

{
    "location": "library/#Base.:<",
    "page": "Library",
    "title": "Base.:<",
    "category": "function",
    "text": "<(a::AbstractPBTree, b::AbstractPBTree)\n\nReturns Bool that tells if a < b in Tamari partial order\n\n\n\n\n\n"
},

{
    "location": "library/#Base.:>",
    "page": "Library",
    "title": "Base.:>",
    "category": "function",
    "text": ">(a::AbstractPBTree, b::AbstractPBTree)\n\nReturns Bool that tells if a > b in Tamari partial order\n\n\n\n\n\n"
},

{
    "location": "library/#Base.:≤",
    "page": "Library",
    "title": "Base.:≤",
    "category": "function",
    "text": "≤(a::AbstractPBTree, b::AbstractPBTree)\n\nReturns Bool that tells if a ≤ b in Tamari partial order\n\n\n\n\n\n"
},

{
    "location": "library/#Base.:≥",
    "page": "Library",
    "title": "Base.:≥",
    "category": "function",
    "text": "≥(a::AbstractPBTree, b::AbstractPBTree)\n\nReturns Bool that tells if a ≥ b in Tamari partial order\n\n\n\n\n\n"
},

{
    "location": "library/#Dendriform.between",
    "page": "Library",
    "title": "Dendriform.between",
    "category": "function",
    "text": "between(a::AbstractPBTree,b::AbstractPBTree)\n\nReturns Grove of trees ordered between a and b\n\n\n\n\n\n"
},

{
    "location": "library/#Dendriform.:⊴",
    "page": "Library",
    "title": "Dendriform.:⊴",
    "category": "function",
    "text": "⊴(a::AbstractPBTree,b::AbstractPBTree)\n\nReturns Grove of trees ordered between a and b\n\n\n\n\n\n"
},

{
    "location": "library/#Partial-Ordering-1",
    "page": "Library",
    "title": "Partial Ordering",
    "category": "section",
    "text": "posetnextposetprev⋖⋗<>≤≥between⊴"
},

{
    "location": "library/#Dendriform.over",
    "page": "Library",
    "title": "Dendriform.over",
    "category": "function",
    "text": "over(a::AbstractPBTree, b::AbstractPBTree)\n\nReturns PBTree obtained from a over b operation\n\n\n\n\n\n"
},

{
    "location": "library/#Dendriform.under",
    "page": "Library",
    "title": "Dendriform.under",
    "category": "function",
    "text": "under(a::AbstractPBTree, b::AbstractPBTree)\n\nReturns PBTree obtained from a under b operation\n\n\n\n\n\n"
},

{
    "location": "library/#Base.:/",
    "page": "Library",
    "title": "Base.:/",
    "category": "function",
    "text": "/(a::PBTree, b::PBTree)\n\nReturns PBTree obtained from a over b operation\n\n\n\n\n\n"
},

{
    "location": "library/#Base.:\\",
    "page": "Library",
    "title": "Base.:\\",
    "category": "function",
    "text": "\\(a::PBTree, b::PBTree)\n\nReturns PBTree obtained from a under b operation\n\n\n\n\n\n"
},

{
    "location": "library/#Dendriform.dashv",
    "page": "Library",
    "title": "Dendriform.dashv",
    "category": "function",
    "text": "dashv(a::AbstractGrove, b::AbstractGrove)\n\nReturns Grove obtained from a ⊣ b operation\n\n\n\n\n\n"
},

{
    "location": "library/#Dendriform.vdash",
    "page": "Library",
    "title": "Dendriform.vdash",
    "category": "function",
    "text": "vdash(a::AbstractGrove, b::AbstractGrove)\n\nReturns Grove obtained from a ⊢ b operation\n\n\n\n\n\n"
},

{
    "location": "library/#Dendriform.:⊣",
    "page": "Library",
    "title": "Dendriform.:⊣",
    "category": "function",
    "text": "⊣(a::AbstractGrove, b::AbstractGrove)\n\nReturns Grove obtained from a ⊣ b operation\n\n\n\n\n\n"
},

{
    "location": "library/#Dendriform.:⊢",
    "page": "Library",
    "title": "Dendriform.:⊢",
    "category": "function",
    "text": "⊢(a::AbstractGrove, b::AbstractGrove)\n\nReturns Grove obtained from a ⊢ b operation\n\n\n\n\n\n"
},

{
    "location": "library/#Base.:+",
    "page": "Library",
    "title": "Base.:+",
    "category": "function",
    "text": "+(a::AbstractGrove, b::AbstractGrove)\n\nReturns Grove obtained from a + b operation\n\n\n\n\n\n"
},

{
    "location": "library/#Base.:*",
    "page": "Library",
    "title": "Base.:*",
    "category": "function",
    "text": "*(a::AbstractGrove, b::AbstractGrove)\n\nReturns Grove obtained from a × b operation\n\n\n\n\n\n"
},

{
    "location": "library/#Dialgebra-Arithmetic-1",
    "page": "Library",
    "title": "Dialgebra Arithmetic",
    "category": "section",
    "text": "overunder/\\dashvvdash⊣⊢+*"
},

{
    "location": "library/#Dendriform.σ",
    "page": "Library",
    "title": "Dendriform.σ",
    "category": "function",
    "text": "σ(g::AbstractGrove)\n\nApplies the involution to any PBTree or Grove object\n\n\n\n\n\n"
},

{
    "location": "library/#Dendriform-Morphisms-1",
    "page": "Library",
    "title": "Dendriform Morphisms",
    "category": "section",
    "text": "σ"
},

{
    "location": "library/#Dendriform.LeftInherited",
    "page": "Library",
    "title": "Dendriform.LeftInherited",
    "category": "function",
    "text": "Dendriform.LeftInherited(::AbstractPBTree)\n\nReturns Bool that tells if PBTree is left inherited\n\n\n\n\n\n"
},

{
    "location": "library/#Dendriform.RightInherited",
    "page": "Library",
    "title": "Dendriform.RightInherited",
    "category": "function",
    "text": "Dendriform.RightInherited(::AbstractPBTree)\n\nReturns Bool that tells if PBTree is right inherited\n\n\n\n\n\n"
},

{
    "location": "library/#Dendriform.PrimitiveTree",
    "page": "Library",
    "title": "Dendriform.PrimitiveTree",
    "category": "function",
    "text": "Dendriform.PrimitiveTree(::AbstractPBTree)\n\nReturns Bool that tells if PBTree is primitive\n\n\n\n\n\n"
},

{
    "location": "library/#Dendriform.treecheck",
    "page": "Library",
    "title": "Dendriform.treecheck",
    "category": "function",
    "text": "treecheck(::AbstractPBTree)\n\nReturns Bool that tells if PBTree is valid\n\n\n\n\n\n"
},

{
    "location": "library/#Dendriform.grovecheck",
    "page": "Library",
    "title": "Dendriform.grovecheck",
    "category": "function",
    "text": "grovecheck(::AbstractGrove)\n\nReturns Bool that tells if Grove is valid\n\n\n\n\n\n"
},

{
    "location": "library/#Dendriform.GroveError",
    "page": "Library",
    "title": "Dendriform.GroveError",
    "category": "function",
    "text": "Dendriform.GroveError(::AbstractGrove)\n\nReturns Array with Grove sorting index error\n\n\n\n\n\n"
},

{
    "location": "library/#Consistency-Checks-1",
    "page": "Library",
    "title": "Consistency Checks",
    "category": "section",
    "text": "Dendriform.LeftInheritedDendriform.RightInheritedDendriform.PrimitiveTreetreecheckgrovecheckDendriform.GroveError"
},

{
    "location": "library/#Dendriform.treeindex",
    "page": "Library",
    "title": "Dendriform.treeindex",
    "category": "function",
    "text": "treeindex(::AbstractGrove)\n\nReturns tree indices of any PBTree or Grove\n\n\n\n\n\n"
},

{
    "location": "library/#Dendriform.groveindex",
    "page": "Library",
    "title": "Dendriform.groveindex",
    "category": "function",
    "text": "groveindex(::AbstractGrove)\n\nReturns the grove index of any Grove\n\n\n\n\n\n"
},

{
    "location": "library/#Dendriform.grovebit",
    "page": "Library",
    "title": "Dendriform.grovebit",
    "category": "function",
    "text": "grovebit(::AbstractGrove)\n\nReturns a BitArray of tree indices\n\n\n\n\n\n"
},

{
    "location": "library/#Index-Data-1",
    "page": "Library",
    "title": "Index Data",
    "category": "section",
    "text": "treeindexgroveindexgrovebit"
},

{
    "location": "library/#Dendriform.TreeBase",
    "page": "Library",
    "title": "Dendriform.TreeBase",
    "category": "function",
    "text": "Dendriform.TreeBase(::AbstractGrove)\n\nReturns BaseTree objects for any AbstractGrove\n\n\n\n\n\n"
},

{
    "location": "library/#Dendriform.TreeInteger",
    "page": "Library",
    "title": "Dendriform.TreeInteger",
    "category": "function",
    "text": "Dendriform.TreeInteger(::AbstractGrove)\n\nReturns the tree integers of any AbstractGrove\n\n\n\n\n\n"
},

{
    "location": "library/#Dendriform.TreeRational",
    "page": "Library",
    "title": "Dendriform.TreeRational",
    "category": "function",
    "text": "Dendriform.TreeRational(::AbstractGrove)\n\nReturns the tree rationals of any AbstractGrove\n\n\n\n\n\n"
},

{
    "location": "library/#Transformations-1",
    "page": "Library",
    "title": "Transformations",
    "category": "section",
    "text": "Dendriform.TreeBaseDendriform.TreeIntegerDendriform.TreeRational"
},

{
    "location": "library/#Dendriform.grovedisplay",
    "page": "Library",
    "title": "Dendriform.grovedisplay",
    "category": "function",
    "text": "grovedisplay(::Bool)\n\nToggles the display output of grove index data (disabled by default)\n\n\n\n\n\n"
},

{
    "location": "library/#Dendriform.grovesort",
    "page": "Library",
    "title": "Dendriform.grovesort",
    "category": "function",
    "text": "grovesort(::Bool)\n\nToggles the grovesort algorithm (enabled by default - RECOMMENDED)\n\n\n\n\n\n"
},

{
    "location": "library/#Dendriform.treeshift",
    "page": "Library",
    "title": "Dendriform.treeshift",
    "category": "function",
    "text": "treeshift(::Bool)\n\nToggles the shift for the tree integers / rationals\n\n\n\n\n\n"
},

{
    "location": "library/#Tools-and-Options-1",
    "page": "Library",
    "title": "Tools & Options",
    "category": "section",
    "text": "grovedisplaygrovesorttreeshift"
},

]}
