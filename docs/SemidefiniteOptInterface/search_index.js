var documenterSearchIndex = {"docs": [

{
    "location": "#SemidefiniteOptInterface.coefficienttype",
    "page": "Home",
    "title": "SemidefiniteOptInterface.coefficienttype",
    "category": "function",
    "text": "coefficienttype(optimizer::AbstractSDOptimizer)\n\nReturns the coefficienttype that should be used for optimizer.\n\n\n\n\n\n"
},

{
    "location": "#SemidefiniteOptInterface.getX",
    "page": "Home",
    "title": "SemidefiniteOptInterface.getX",
    "category": "function",
    "text": "getX(optimizer::AbstractSDOptimizer)\n\nReturns the solution X as a block matrix.\n\n\n\n\n\n"
},

{
    "location": "#SemidefiniteOptInterface.getZ",
    "page": "Home",
    "title": "SemidefiniteOptInterface.getZ",
    "category": "function",
    "text": "getZ(optimizer::AbstractSDOptimizer)\n\nReturns the solution Z.\n\n\n\n\n\n"
},

{
    "location": "#SemidefiniteOptInterface.getblockdimension",
    "page": "Home",
    "title": "SemidefiniteOptInterface.getblockdimension",
    "category": "function",
    "text": "getblockdimension(optimizer::AbstractSDOptimizer, blk)\n\nReturns the dimension of the block blk.\n\n\n\n\n\n"
},

{
    "location": "#SemidefiniteOptInterface.getconstraintcoefficients",
    "page": "Home",
    "title": "SemidefiniteOptInterface.getconstraintcoefficients",
    "category": "function",
    "text": "getconstraintcoefficients(optimizer::AbstractSDOptimizer, constr::Integer)\n\nReturn the list of entries blk, i, j of the matrix of the constraint constr.\n\n\n\n\n\n"
},

{
    "location": "#SemidefiniteOptInterface.getconstraintconstant",
    "page": "Home",
    "title": "SemidefiniteOptInterface.getconstraintconstant",
    "category": "function",
    "text": "getconstraintconstant(optimizer::AbstractSDOptimizer, constr::Integer)\n\nSets the entry constr of b to val.\n\n\n\n\n\n"
},

{
    "location": "#SemidefiniteOptInterface.getdualobjectivevalue",
    "page": "Home",
    "title": "SemidefiniteOptInterface.getdualobjectivevalue",
    "category": "function",
    "text": "getdualobjectivevalue(optimizer::AbstractSDOptimizer)\n\nReturns the dual objective value.\n\n\n\n\n\n"
},

{
    "location": "#SemidefiniteOptInterface.getnumberofblocks",
    "page": "Home",
    "title": "SemidefiniteOptInterface.getnumberofblocks",
    "category": "function",
    "text": "getnumberofblocks(optimizer::AbstractSDOptimizer)\n\nReturns the number of blocks of the block matrix.\n\n\n\n\n\n"
},

{
    "location": "#SemidefiniteOptInterface.getnumberofconstraints",
    "page": "Home",
    "title": "SemidefiniteOptInterface.getnumberofconstraints",
    "category": "function",
    "text": "getnumberofconstraints(optimizer::AbstractSDOptimizer)\n\nReturns the number of constraints of the model.\n\n\n\n\n\n"
},

{
    "location": "#SemidefiniteOptInterface.getobjectivecoefficients",
    "page": "Home",
    "title": "SemidefiniteOptInterface.getobjectivecoefficients",
    "category": "function",
    "text": "getobjectivecoefficients(optimizer::AbstractSDOptimizer)\n\nReturn the list of entries blk, i, j of the objective matrix.\n\n\n\n\n\n"
},

{
    "location": "#SemidefiniteOptInterface.getprimalobjectivevalue",
    "page": "Home",
    "title": "SemidefiniteOptInterface.getprimalobjectivevalue",
    "category": "function",
    "text": "getprimalobjectivevalue(optimizer::AbstractSDOptimizer)\n\nReturns the primal objective value.\n\n\n\n\n\n"
},

{
    "location": "#SemidefiniteOptInterface.gety",
    "page": "Home",
    "title": "SemidefiniteOptInterface.gety",
    "category": "function",
    "text": "gety(optimizer::AbstractSDOptimizer)\n\nReturns the solution y.\n\n\n\n\n\n"
},

{
    "location": "#SemidefiniteOptInterface.init!",
    "page": "Home",
    "title": "SemidefiniteOptInterface.init!",
    "category": "function",
    "text": "init!(optimizer::AbstractSDOptimizer, blkdims::Vector{Int}, nconstrs::Integer)\n\nInitialize the optimizer with nconstrs constraints and blkdims blocks.\n\n\n\n\n\n"
},

{
    "location": "#SemidefiniteOptInterface.setconstraintcoefficient!",
    "page": "Home",
    "title": "SemidefiniteOptInterface.setconstraintcoefficient!",
    "category": "function",
    "text": "setconstraintcoefficient!(optimizer::AbstractSDOptimizer, val, constr::Integer, blk::Integer, i::Integer, j::Integer)\n\nSet the entry i, j of the block blk of the matrix of the constraint constr to val.\n\n\n\n\n\n"
},

{
    "location": "#SemidefiniteOptInterface.setconstraintconstant!",
    "page": "Home",
    "title": "SemidefiniteOptInterface.setconstraintconstant!",
    "category": "function",
    "text": "setconstraintconstant!(optimizer::AbstractSDOptimizer, val, constr::Integer)\n\nGet the entry constr of b.\n\n\n\n\n\n"
},

{
    "location": "#SemidefiniteOptInterface.setobjectivecoefficient!",
    "page": "Home",
    "title": "SemidefiniteOptInterface.setobjectivecoefficient!",
    "category": "function",
    "text": "setobjectivecoefficient!(optimizer::AbstractSDOptimizer, val, blk::Integer, i::Integer, j::Integer)\n\nSet the entry i, j of the block blk of the objective matrix to val.\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [SemidefiniteOptInterface]\nOrder = [:type, :function]"
},

]}
