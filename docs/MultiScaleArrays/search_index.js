var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#MultiScaleArrays-1",
    "page": "Readme",
    "title": "MultiScaleArrays",
    "category": "section",
    "text": "(Image: Join the chat at https://gitter.im/JuliaDiffEq/Lobby) (Image: Build Status) (Image: Build status) (Image: Coverage Status) (Image: codecov)MultiScaleArrays.jl allows you to easily build multiple scale models which are fully compatible with native Julia scientific computing packages like DifferentialEquations.jl or Optim.jl. These models utilize a tree structure to describe phenomena of multiple scales, but the interface allows you to describe equations on different levels, using aggregations from lower levels to describe complex systems. Their structure allows for complex and dynamic models to be developed with only a small performance difference. In the end, they present themselves as an AbstractArray to standard solvers, allowing them to be used in place of a Vector in any appropriately made Julia package."
},

{
    "location": "#Example-1",
    "page": "Readme",
    "title": "Example",
    "category": "section",
    "text": "The usage is best described by an example. Here we build a hierarchy where Embryos contain Tissues which contain Populations which contain Cells, and the cells contain proteins whose concentrations are modeled as simply a vector of numbers (it can be anything linearly indexable).using MultiScaleArrays\nstruct Cell{B} <: AbstractMultiScaleArrayLeaf{B}\n    values::Vector{B}\nend\nstruct Population{T<:AbstractMultiScaleArray,B<:Number} <: AbstractMultiScaleArray{B}\n    nodes::Vector{T}\n    values::Vector{B}\n    end_idxs::Vector{Int}\nend\nstruct Tissue{T<:AbstractMultiScaleArray,B<:Number} <: AbstractMultiScaleArray{B}\n    nodes::Vector{T}\n    values::Vector{B}\n    end_idxs::Vector{Int}\nend\nstruct Embryo{T<:AbstractMultiScaleArray,B<:Number} <: AbstractMultiScaleArrayHead{B}\n    nodes::Vector{T}\n    values::Vector{B}\n    end_idxs::Vector{Int}\nendThis setup defines a type structure which is both a tree and an array. A picture of a possible version is the following:<img src=\"https://user-images.githubusercontent.com/1814174/27211626-79fe1b9a-520f-11e7-87f1-1cb33da91609.PNG\">Let\'s build a version of this. Using the constructors we can directly construct leaf types:cell1 = Cell([1.0; 2.0; 3.0])\ncell2 = Cell([4.0; 5.0])and build types higher up in the hierarchy by using the constuct method. The method is construct(T::AbstractMultiScaleArray, nodes, values), though if values is not given it\'s taken to be empty.population = construct(Population, deepcopy([cell1, cell2])) # Make a Population from cells\ncell3 = Cell([3.0; 2.0; 5.0])\ncell4 = Cell([4.0; 6.0])\npopulation2 = construct(Population, deepcopy([cell3, cell4]))\ntissue1 = construct(Tissue, deepcopy([population, population2])) # Make a Tissue from Populations\ntissue2 = construct(Tissue, deepcopy([population2, population]))\nembryo = construct(Embryo, deepcopy([tissue1, tissue2])) # Make an embryo from TissuesNote that tuples can be used as well. This allows for type-stable indexing with heterogeneous nodes. For example:tissue1 = construct(Tissue, deepcopy((population, cell3)))(of course at the cost of mutability).The head node then acts as the king. It is designed to have functionality which mimics a vector in order for usage in DifferentialEquations or Optim. So for exampleembryo[12]returns the \"12th protein\", counting by Embryo > Tissue > Population > Cell in order of the vectors. The linear indexing exists for every AbstractMultiScaleArray. These types act as full linear vectors, so standard operations do the sensical operations:embryo[10] = 4.0 # changes protein concentration 10\nembryo[2,3,1] # Gives the 1st cell in the 3rd population of the second tissue\nembryo[:] # generates a vector of all of the protein concentrations\neachindex(embryo) # generates an iterator for the indicesContinuous models can thus be written at the protein level and will work seamlessly with DifferentialEquations or Optim which will treat it like a vector of protein concentrations. Using the iterators, note that we can get each cell population by looping through 2 levels below the top, sofor cell in level_iter(embryo,3)\n  # Do something with the cells!\nendTo apply a function cell-by-cell, you can write a dispatch f on the type for the level. Assuming we have d_embryo as similar to embryo, using level_iter_idx we can have its changes update some other head node d_embryo via:for (cell, y, z) in LevelIterIdx(embryo, 3)\n    f(t, cell, @view d_embryo[y:z])\nend(@view is a standard Julia construct for creating a view instead of a copy when slicing an array, making things alittle faster when indexing to create a sub-array). Notice that this updates the top vector cell-by-cell via the function f without allocating. This allows one to apply an ODE \"cell-wise\".However, the interesting behavior comes from event handling. Since embryo will be the \"vector\" for the differential equation or optimization problem, it will be the value passed to the event handling. MultiScaleArrays includes behavior for changing the structure. For example:tissue3 = construct(Tissue, deepcopy([population, population2]))\nadd_node!(embryo, tissue3) # Adds a new tissue to the embryo\nremove_node!(embryo, 2, 1) # Removes population 1 from tissue 2 of the embryoCombined with event handling, this allows for dynamic structures to be derived from low level behaviors."
},

{
    "location": "#Idea-1",
    "page": "Readme",
    "title": "Idea",
    "category": "section",
    "text": "The idea behind MultiScaleArrays is simple. The *DiffEq solvers (OrdinaryDiffEq.jl, StochasticDiffEq.jl, DelayDiffEq.jl, etc.) and native optimization packages like Optim.jl in their efficient in-place form all work with any Julia-defined AbstractArray which has a linear index. Thus, to define our multiscale model, we develop a type which has an efficient linear index. One can think of representing cells with proteins as each being an array with values for each protein. The linear index of the multiscale model would be indexing through each protein of each cell. With proper index overloads, one can define a type such that a[i] does just that, and thus it will work in the differential equation solvers. MultiScaleArrays.jl takes that further by allowing one to recursively define an arbitrary n-level hierarchical model which has efficient indexing structures. The result is a type which models complex behavior, but the standard differential equation solvers will work directly and efficiently on this type, making it easy to develop novel models without having to re-develop advanced adaptive/stiff/stochastic/etc. solving techniques for each new model."
},

{
    "location": "#Defining-A-MultiScaleModel:-The-Interface-1",
    "page": "Readme",
    "title": "Defining A MultiScaleModel: The Interface",
    "category": "section",
    "text": "The required interface is as follows. Leaf types must extend AbstractMultiScaleArrayLeaf, the highest level of the model or the head extends MultiScaleModelHead, and all intermediate types extend AbstractMultiScaleArray. The leaf has an array values::Vector{B}. Each type above then contains three fields:nodes::Vector{T}\nvalues::Vector{B}\nend_idxs::Vector{Int}Note that the ordering of the fields matters. B is the BottomType, which has to be the same as the eltype for the array in the leaf types. T is another AbstractMultiScaleArray. Thus at each level, anAbstractMultiScaleArray contains some information of its own (values), the next level down in the heirarchy (nodes), and caching for indices (end_idxs). You can add and use extra fields as you please, and even make the types immutable."
},

{
    "location": "#The-MultiScaleModel-API-1",
    "page": "Readme",
    "title": "The MultiScaleModel API",
    "category": "section",
    "text": "The resulting type acts as an array. A leaf type l acts exactly as an array with l[i] == l.values[i]. Higher nodes also act as a linear array. If ln is level n in the heirarchy, then ln.nodes is the vector of level n-1 objects, and ln.values are its \"intrinsic values\". There is an indexing scheme on ln, where:ln[i,j,k] gets the kth n-3 object in the jth n-2 object in the ith level n-1 object. Of course, this recurses for the whole hierarchy.\nln[i] provides a linear index through all .nodes and .values values in every lower level and ln.values itself.Thus typeof(ln) <: AbstractVector{B} where B is the eltype of its leaves and all .values\'s.In addition, iterators are provided to make it easy to iterate through levels. For h being the head node, level_iter(h,n) iterates through all level objects n levels down from the top, while level_iter_idx(h,n) is an enumeration (node,y,z) where node are the nth from the head objects, with h[y:z] being the values it holds in the linear indexing."
},

{
    "location": "#Extensions-1",
    "page": "Readme",
    "title": "Extensions",
    "category": "section",
    "text": "Note that this only showed the most basic MultiScaleModel. These types can be extended as one pleases. For example, we can change the definition of the cell to have:struct Cell{B} <: AbstractMultiScaleArrayLeaf{B}\n    values::Vector{B}\n    celltype::Symbol\nendNote that the ordering of the fields matters here: the extra fields must come after the standard fields (so for a leaf it comes after values, for a standard multiscale array it would come after nodes,values,end_idxs). Then we\'d construct cells with cell3 = Cell([3.0; 2.0; 5.0], :BCell), and can give it a cell type. This information is part of the call, sofor (cell, y, z) in level_iter_idx(embryo, 2)\n    f(t, cell, @view embryo[y:z])\nendcan allow one to check the cell.celltype in f an apply a different ODE depending on the cell type. You can add fields however you want, so you can use them to name cells and track lineages.Showing the use of values, you just pass it to the constructor. Let\'s pass it an array of 3 values:tissue = construct(Tissue, deepcopy([population; population2]), [0.0; 0.0; 0.0])We can selectively apply some function on these values via:for (tissue, y, z) in level_iter_idx(embryo, 1)\n    f(t, tissue, @view embryo[y:z])\nendand mutate tis.values in f. For example, we could havefunction f(du, tissue::Tissue, p, t)\n    du .+= randn(3)\nendapplies normal random numbers to the three values. We could use this to add to the model the fact that tissue.values[1:3] are the tissue\'s position, and f would then be adding Brownian motion.Of course, you can keep going and kind of do whatever you want. The power is yours!"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [MultiScaleArrays]\nOrder = [:type, :function]"
},

]}
