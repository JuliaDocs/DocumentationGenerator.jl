var documenterSearchIndex = {"docs": [

{
    "location": "#YaoBase.AbstractRegister",
    "page": "Home",
    "title": "YaoBase.AbstractRegister",
    "category": "type",
    "text": "AbstractRegister{B, T}\n\nAbstract type for quantum registers. B is the batch size, T is the data type.\n\n\n\n\n\n"
},

{
    "location": "#YaoBase.QubitMismatchError",
    "page": "Home",
    "title": "YaoBase.QubitMismatchError",
    "category": "type",
    "text": "QubitMismatchError <: Exception\n\nQubit number mismatch error when applying a Block to a Register or concatenating Blocks.\n\n\n\n\n\n"
},

{
    "location": "#Base.join-Tuple{Vararg{AbstractRegister,N} where N}",
    "page": "Home",
    "title": "Base.join",
    "category": "method",
    "text": "join(::AbstractRegister...) -> register\n\nMerge several registers as one register via tensor product.\n\n\n\n\n\n"
},

{
    "location": "#Base.repeat-Tuple{AbstractRegister,Int64}",
    "page": "Home",
    "title": "Base.repeat",
    "category": "method",
    "text": "repeat(r::AbstractRegister, n::Int) -> register\n\nRepeat register r for n times on batch dimension.\n\nExample\n\n\n\n\n\n"
},

{
    "location": "#LinearAlgebra.ishermitian-Tuple{Any}",
    "page": "Home",
    "title": "LinearAlgebra.ishermitian",
    "category": "method",
    "text": "ishermitian(op) -> Bool\n\ncheck if this operator is hermitian.\n\n\n\n\n\n"
},

{
    "location": "#YaoBase.addbit!-Tuple{AbstractRegister}",
    "page": "Home",
    "title": "YaoBase.addbit!",
    "category": "method",
    "text": "addbit!(register, n::Int) -> register\naddbit!(n::Int) -> Function\n\naddbit the register by n bits in state |0>. i.e. |psi> -> |000> ⊗ |psi>, addbit bits have higher indices. If only an integer is provided, then perform lazy evaluation.\n\n\n\n\n\n"
},

{
    "location": "#YaoBase.basis-Tuple{AbstractRegister}",
    "page": "Home",
    "title": "YaoBase.basis",
    "category": "method",
    "text": "basis(register) -> UnitRange\n\nReturns an UnitRange of the all the bits in the Hilbert space of given register.\n\n\n\n\n\n"
},

{
    "location": "#YaoBase.datatype-Union{Tuple{AbstractRegister{B,T}}, Tuple{T}, Tuple{B}} where T where B",
    "page": "Home",
    "title": "YaoBase.datatype",
    "category": "method",
    "text": "datatype(register) -> Int\n\nReturns the numerical data type used by register.\n\nnote!!!\n\n`datatype` is not the same with `eltype`, since `AbstractRegister` family\nis not exactly the same with `AbstractArray`, it is an iterator of several\nregisters.\n\n\n\n\n\n"
},

{
    "location": "#YaoBase.density_matrix-Tuple{AbstractRegister}",
    "page": "Home",
    "title": "YaoBase.density_matrix",
    "category": "method",
    "text": "density_matrix(register)\n\nReturns the density matrix of current active qubits.\n\n\n\n\n\n"
},

{
    "location": "#YaoBase.focus!-Tuple{AbstractRegister,Vararg{Any,N} where N}",
    "page": "Home",
    "title": "YaoBase.focus!",
    "category": "method",
    "text": "focus!(register, locs::Int...) -> register\nfocus!(locs::Int...) -> f(register) -> register\n\nFocus the wires on specified location.\n\n\n\n\n\n"
},

{
    "location": "#YaoBase.iscommute-Tuple",
    "page": "Home",
    "title": "YaoBase.iscommute",
    "category": "method",
    "text": "iscommute(ops...) -> Bool\n\ncheck if operators are commute.\n\n\n\n\n\n"
},

{
    "location": "#YaoBase.isreflexive-Tuple{Any}",
    "page": "Home",
    "title": "YaoBase.isreflexive",
    "category": "method",
    "text": "isreflexive(op) -> Bool\n\ncheck if this operator is reflexive.\n\n\n\n\n\n"
},

{
    "location": "#YaoBase.isunitary-Tuple{Any}",
    "page": "Home",
    "title": "YaoBase.isunitary",
    "category": "method",
    "text": "isunitary(op) -> Bool\n\ncheck if this operator is a unitary operator.\n\n\n\n\n\n"
},

{
    "location": "#YaoBase.measure",
    "page": "Home",
    "title": "YaoBase.measure",
    "category": "function",
    "text": "measure(register[, ntimes=1]) -> Vector{Int}\n\nReturn measurement results of current active qubits (regarding to active qubits, see focus! and relax!).\n\n\n\n\n\n"
},

{
    "location": "#YaoBase.measure!-Tuple{AbstractRegister}",
    "page": "Home",
    "title": "YaoBase.measure!",
    "category": "method",
    "text": "measure!(register[, locs])\n\nmeasure and collapse to result state.\n\n\n\n\n\n"
},

{
    "location": "#YaoBase.measure_remove!-Tuple{AbstractRegister}",
    "page": "Home",
    "title": "YaoBase.measure_remove!",
    "category": "method",
    "text": "measure_remove!(::AbstractRegister[, locs])\n\nmeasure the active qubits of this register and remove them.\n\n\n\n\n\n"
},

{
    "location": "#YaoBase.measure_reset!-Tuple{AbstractRegister}",
    "page": "Home",
    "title": "YaoBase.measure_reset!",
    "category": "method",
    "text": "measure_reset!(reg::AbstractRegister[, locs]; [val=0]) -> Int\n\nmeasure and set the register to specific value.\n\n\n\n\n\n"
},

{
    "location": "#YaoBase.nactive-Tuple{AbstractRegister}",
    "page": "Home",
    "title": "YaoBase.nactive",
    "category": "method",
    "text": "nactive(register) -> Int\n\nReturns the number of active qubits.\n\nnote!!!\n\nOperators always apply on active qubits.\n\n\n\n\n\n"
},

{
    "location": "#YaoBase.nbatch-Union{Tuple{AbstractRegister{B,T} where T}, Tuple{B}} where B",
    "page": "Home",
    "title": "YaoBase.nbatch",
    "category": "method",
    "text": "nbatch(register) -> Int\n\nReturns the number of batches.\n\n\n\n\n\n"
},

{
    "location": "#YaoBase.nqubits-Tuple{AbstractRegister}",
    "page": "Home",
    "title": "YaoBase.nqubits",
    "category": "method",
    "text": "nqubits(register) -> Int\n\nReturns the (total) number of qubits. See nactive, nremain for more details.\n\n\n\n\n\n"
},

{
    "location": "#YaoBase.nremain-Tuple{AbstractRegister}",
    "page": "Home",
    "title": "YaoBase.nremain",
    "category": "method",
    "text": "nremain(register) -> Int\n\nReturns the number of non-active qubits.\n\n\n\n\n\n"
},

{
    "location": "#YaoBase.relax!-Tuple{AbstractRegister,Any}",
    "page": "Home",
    "title": "YaoBase.relax!",
    "category": "method",
    "text": "relax!(register[, locs]) -> register\nrelax!(nbits, locs) -> f(register) -> register\n\nInverse transformation of focus!, where nbit is the number  of active bits for target register.\n\n\n\n\n\n"
},

{
    "location": "#YaoBase.select!-Tuple{AbstractRegister,Vararg{Any,N} where N}",
    "page": "Home",
    "title": "YaoBase.select!",
    "category": "method",
    "text": "select!(dest::AbstractRegister, src::AbstractRegister, bits::Integer...) -> AbstractRegister\nselect!(register::AbstractRegister, bits::Integer...) -> register\nselect!(b::Integer) -> f(register)\n\nselect a subspace of given quantum state based on input eigen state bits.\n\nExample\n\nselect!(reg, 0b110) will select the subspace with (focused) configuration 110. After selection, the focused qubit space is 0, so you may want call relax! manually.\n\n\n\n\n\n"
},

{
    "location": "#YaoBase.select-Tuple{AbstractRegister,Vararg{Any,N} where N}",
    "page": "Home",
    "title": "YaoBase.select",
    "category": "method",
    "text": "select(register, bits...) -> AbstractRegister\n\nNon-inplace version of select!.\n\n\n\n\n\n"
},

{
    "location": "#YaoBase.state-Tuple{AbstractRegister}",
    "page": "Home",
    "title": "YaoBase.state",
    "category": "method",
    "text": "state(register) -> AbstractMatrix\n\nReturns the raw state of register. This always returns a matrix which is a batch of quantum states.\n\n\n\n\n\n"
},

{
    "location": "#YaoBase.viewbatch-Tuple{AbstractRegister,Int64}",
    "page": "Home",
    "title": "YaoBase.viewbatch",
    "category": "method",
    "text": "viewbatch(register, i::Int) -> AbstractRegister{1}\n\nReturns a view of the i-th slice on batch dimension.\n\n\n\n\n\n"
},

{
    "location": "#YaoBase.ρ-Tuple{Any}",
    "page": "Home",
    "title": "YaoBase.ρ",
    "category": "method",
    "text": "ρ(register)\n\nReturns the density matrix of current active qubits. This is the same as density_matrix.\n\n\n\n\n\n"
},

{
    "location": "#YaoBase.instruct",
    "page": "Home",
    "title": "YaoBase.instruct",
    "category": "function",
    "text": "instruct(state, operator[, locs, control_bits, control_vals])\n\ninstruction implementation for applying an operator to a quantum state.\n\nThis operator will be overloaded for different operator or state with different types.\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [YaoBase]\nOrder = [:type, :function]"
},

]}
