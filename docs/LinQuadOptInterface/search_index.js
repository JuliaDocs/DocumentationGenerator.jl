var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#LinQuadOptInterface.jl-1",
    "page": "Readme",
    "title": "LinQuadOptInterface.jl",
    "category": "section",
    "text": "Build Status Social\n[![Build Status][build-img]][build-url] [![Codecov branch][codecov-img]][codecov-url] [![Gitter][gitter-img]][gitter-url] [<img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Discourselogo.png/799px-Discourselogo.png\" width=\"64\">][discourse-url][build-img]: https://travis-ci.org/JuliaOpt/LinQuadOptInterface.jl.svg?branch=master [build-url]: https://travis-ci.org/JuliaOpt/LinQuadOptInterface.jl [codecov-img]: http://codecov.io/github/JuliaOpt/LinQuadOptInterface.jl/coverage.svg?branch=master [codecov-url]: http://codecov.io/github/JuliaOpt/LinQuadOptInterface.jl?branch=master[gitter-url]: https://gitter.im/JuliaOpt/JuMP-dev?utmsource=share-link&utmmedium=link&utm_campaign=share-link [gitter-img]: https://badges.gitter.im/JuliaOpt/JuMP-dev.svg [discourse-url]: https://discourse.julialang.org/c/domain/optLinQuadOptInterface.jl (LQOI) is designed to provide an intermediate interface to MathOptInterface.jl for some solvers. The target use-cases are low-level wrappers designed to bridge low-level mixed integer linear and quadratic solvers.Examples of packages currently using LQOI include Clp.jl, GLPK.jl, Gurobi.jl, and Xpress.jl.The interface is documented here."
},

{
    "location": "#Note-to-solver-developers-1",
    "page": "Readme",
    "title": "Note to solver developers",
    "category": "section",
    "text": "The use of LQOI for MOI wrappers of low-level solvers is entirely optional. Using LQOI introduces an extra abstraction layer between a solver and MOI. We recommend that you carefully analyze the solver\'s low-level API to check if it is close to what LQOI expects.If a solver low-level API does not support most of the functions required by LQOI, then following the example of SCS.jl and ECOS.jl might be a better idea."
},

{
    "location": "autodocs/#LinQuadOptInterface.CSRMatrix",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.CSRMatrix",
    "category": "type",
    "text": "CSRMatrix{T}\n\nMatrix given in compressed sparse row (CSR) format.\n\nCSRMatrix is analgous to the structure in Julia\'s SparseMatrixCSC but with the rows and columns flipped. It contains three vectors:\n\nrow_pointers is a vector pointing to the start of each row in  columns and coefficients;\ncolumns is a vector of column numbers; and\ncoefficients is a vector of corresponding nonzero values.\n\nThe length of row_pointers is the number of rows in the matrix.\n\nThis struct is not a subtype of AbstractSparseMatrix as it is intended to be a collection of the three vectors as they are required by solvers such as Gurobi. It is not intended to be used for general computation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.LinearQuadraticModel",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.LinearQuadraticModel",
    "category": "function",
    "text": "LinearQuadraticModel(M::Type{<:LinQuadOptimizer}, env)\n\nInitializes a model given a model type M and an env that might be a nothing for some solvers.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.__assert_supported_constraint__-Union{Tuple{S}, Tuple{F}, Tuple{LinQuadOptimizer,Type{F},Type{S}}} where S<:MathOptInterface.AbstractSet where F<:MathOptInterface.AbstractFunction",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.__assert_supported_constraint__",
    "category": "method",
    "text": "__assert_supported_constraint__(model::LinQuadOptimizer, ::Type{F}, ::Type{S})\n\nThrow an UnsupportedConstraint{F, S} error if the model cannot add constraints of type F-in-S.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.__assert_valid__-Tuple{LinQuadOptInterface.LinQuadOptimizer,Union{VariableIndex, ConstraintIndex}}",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.__assert_valid__",
    "category": "method",
    "text": "__assert_valid__(model::LinQuadOptimizer, index::MOI.Index)\n\nThrow an MOI.InvalidIndex error if MOI.is_valid(model, index) == false.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface._matching_sparsity_pattern-Union{Tuple{T}, Tuple{T,T}} where T<:Union{ScalarAffineFunction{Float64}, VectorAffineFunction{Float64}}",
    "page": "Docstrings",
    "title": "LinQuadOptInterface._matching_sparsity_pattern",
    "category": "method",
    "text": "_matching_sparsity_pattern(f1::T, f2::T) where {T <: Union{Linear, VecLin}}\n\nInternal function, not intended for external use.\n\nDetermines whether functions f1 and f2 have the same sparsity pattern w.r.t. their constraint rows and columns. Assumes both functions are already in canonical form.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface._replace_with_different_sparsity!-Tuple{LinQuadOptInterface.LinQuadOptimizer,MathOptInterface.ScalarAffineFunction{Float64},MathOptInterface.ScalarAffineFunction{Float64},Any}",
    "page": "Docstrings",
    "title": "LinQuadOptInterface._replace_with_different_sparsity!",
    "category": "method",
    "text": "_replace_with_different_sparsity!(model::LinQuadOptimizer,\n    previous::Linear, replacement::Linear, row)\n\nInternal function, not intended for external use.\n\nChange the linear constraint function at index row in model from previous to replacement. This function assumes that previous and replacement may have different sparsity patterns.\n\nThis function (and _replace_with_matching_sparsity! above) are necessary because the LQOI API currently only allows linear constraint modification through the change_matrix_coefficient! and change_matrix_coefficients! functions. In order to fully replace a linear constraint, we have to zero out the current matrix coefficients and then set the new matrix coefficients. When the sparsity patterns match, the zeroing-out step can be skipped.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface._replace_with_different_sparsity!-Tuple{LinQuadOptInterface.LinQuadOptimizer,MathOptInterface.VectorAffineFunction{Float64},MathOptInterface.VectorAffineFunction{Float64},Any}",
    "page": "Docstrings",
    "title": "LinQuadOptInterface._replace_with_different_sparsity!",
    "category": "method",
    "text": "_replace_with_different_sparsity!(model::LinQuadOptimizer,\n    previous::VecLin, replacement::VecLin, row)\n\nInternal function, not intended for external use.\n\nChange the linear constraint function at index row in model from previous to replacement. This function assumes that previous and replacement may have different sparsity patterns.\n\nThis function (and _replace_with_matching_sparsity! above) are necessary because the LQOI API currently only allows linear constraint modification through the change_matrix_coefficient! and change_matrix_coefficients! functions. In order to fully replace a linear constraint, we have to zero out the current matrix coefficients and then set the new matrix coefficients. When the sparsity patterns match, the zeroing-out step can be skipped.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface._replace_with_matching_sparsity!-Tuple{LinQuadOptInterface.LinQuadOptimizer,MathOptInterface.ScalarAffineFunction{Float64},MathOptInterface.ScalarAffineFunction{Float64},Any}",
    "page": "Docstrings",
    "title": "LinQuadOptInterface._replace_with_matching_sparsity!",
    "category": "method",
    "text": "_replace_with_matching_sparsity!(model::LinQuadOptimizer,\n    previous::Linear, replacement::Linear, row)\n\nInternal function, not intended for external use.\n\nChange the linear constraint function at index row in model from previous to replacement. This function assumes that previous and replacement have exactly the same sparsity pattern w.r.t. which variables they include and that both constraint functions are in canonical form (as returned by MOIU.canonical(). Neither assumption is checked within the body of this function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface._replace_with_matching_sparsity!-Tuple{LinQuadOptInterface.LinQuadOptimizer,MathOptInterface.VectorAffineFunction{Float64},MathOptInterface.VectorAffineFunction{Float64},Any}",
    "page": "Docstrings",
    "title": "LinQuadOptInterface._replace_with_matching_sparsity!",
    "category": "method",
    "text": "_replace_with_matching_sparsity!(model::LinQuadOptimizer,\n    previous::VecLin, replacement::VecLin, row)\n\nInternal function, not intended for external use.\n\nChange the linear constraint function at index row in model from previous to replacement. This function assumes that previous and replacement have exactly the same sparsity pattern w.r.t. which variables they include and that both constraint functions are in canonical form (as returned by MOIU.canonical(). Neither assumption is checked within the body of this function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.add_linear_constraint-Union{Tuple{S}, Tuple{LinQuadOptimizer,ScalarAffineFunction{Float64},S}} where S<:Union{EqualTo{Float64}, GreaterThan{Float64}, LessThan{Float64}}",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.add_linear_constraint",
    "category": "method",
    "text": "add_linear_constraint(model::LinQuadOptimizer, func::Linear, set::S)\n\nAdd a constraint of type func-in-set to model.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.add_linear_constraints!",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.add_linear_constraints!",
    "category": "function",
    "text": "add_linear_constraints!(m, A::CSRMatrix{Float64},\n    sense::Vector{Cchar}, rhs::Vector{Float64})::Nothing\n\nAdds linear constraints of the form Ax (sense) rhs to the model m.\n\nsense and rhs contain one element for each row in A. The sense is given by backend_type(m, set).\n\nRanged constraints (set=MOI.Interval) should be added via add_ranged_constraint! instead.\n\nSee also: LinQuadOptInterface.CSRMatrix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.add_mip_starts!",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.add_mip_starts!",
    "category": "function",
    "text": "add_mip_starts!(model::M, cols::Vector{Int}, x::Vector{Float64})::Nothing\n\nAdd a primal start x for the variables in the columns cols of model.\n\nNote that if this method is implemented, solvers of type M must also declare that they support VariablePrimalStarts by overloading the following method:\n\nfunction MOI.supports(model::M,\n                      ::MOI.VariablePrimalStart,\n                      ::Type{MOI.VariableIndex})\n    return true\nend\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.add_quadratic_constraint!",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.add_quadratic_constraint!",
    "category": "function",
    "text": "add_quadratic_constraint!(m, cols::Vector{Int}, coefs::Vector{Float64}, rhs::Float64,\n    sense, I::Vector{Int}, J::Vector{Int}, V::Vector{Float64})::Nothing\n\nAdd a quadratic constraint a\'x + 0.5 x\' Q x. See add_linear_constraints! for information of linear component. Arguments (I,J,V) given in triplet form for the Q matrix in 0.5 x\' Q x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.add_ranged_constraints!",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.add_ranged_constraints!",
    "category": "function",
    "text": "add_ranged_constraints!(m, A::CSRMatrix{Float64},\n    lowerbound::Vector{Float64}, upperbound::Vector{Float64})\n\nAdds linear constraints of the form lowerbound <= Ax <= upperbound to the model m.\n\nThis is a special case compared to standard add_linear_constraints! since it is often implemented via multiple API calls.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.add_sos_constraint!",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.add_sos_constraint!",
    "category": "function",
    "text": "add_sos_constraint!(m, cols::Vector{Int}, vals::Vector{Float64}, typ::Symbol)::Nothing\n\nAdd the SOS constraint to the model m. typ is either :SOS1 or :SOS2.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.add_variables!",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.add_variables!",
    "category": "function",
    "text": "add_variables!(m, n::Int)::Nothing\n\nAdd n new variables to the model m.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.backend_type-Union{Tuple{T}, Tuple{LinQuadOptimizer,GreaterThan{T}}} where T",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.backend_type",
    "category": "method",
    "text": "backend_type(m, ::MOI.AbstractSet)::CChar\n\nAn overloadable type for dispatching the appropriate types to the backends.\n\nFor example, GLPK.jl uses \'E\' for a\'x=b constraints, where as Gurobi.jl uses ==.\n\nThree are special cases:\n\nVal{:Continuous}: for the type of a continuous variable\nVal{:Upperbound}: for the upper bound of a variable\nVal{:Lowerbound}: for the lower bound of a variable\n\nDefaults\n\nMOI.GreaterThan  - \'G\'\nMOI.LessThan     - \'L\'\nMOI.EqualTo      - \'E\'\n\nMOI.Zeros        - \'E\'\nMOI.Nonpositives - \'L\'\nMOI.Nonnegatives - \'G\'\n\nMOI.ZeroOne        - \'B\'\nMOI.Integer        - \'I\'\nMOI.Semicontinuous - \'S\'\nMOI.Semiinteger    - \'N\'\n\nMOI.SOS1 - :SOS1  # \'1\'\nMOI.SOS2 - :SOS2  # \'2\'\n\nVal{:Continuous} - \'C\'\nVal{:Upperbound} - \'U\'\nVal{:Lowerbound} - \'L\'\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.canonical_reduction-Tuple{LinQuadOptInterface.LinQuadOptimizer,MathOptInterface.ScalarQuadraticFunction{Float64}}",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.canonical_reduction",
    "category": "method",
    "text": "canonical_reduction(model::LinQuadOptimizer, func::Quad)\n\nReduce a ScalarQuadraticFunction into five arrays, returned in the following order:\n\na vector of affine column indices\na vector of affine coefficients\na vector of quadratic row indices\na vector of quadratic column indices\na vector of quadratic coefficients\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.change_both_variable_bounds!-Tuple{LinQuadOptInterface.LinQuadOptimizer,Array{Int64,1},Array{Float64,1},Array{Float64,1}}",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.change_both_variable_bounds!",
    "category": "method",
    "text": "change_both_variable_bounds!(model::LinQuadOptimizer, columns::Vector{Int},\n    lower_bounds::Vector{Float64}, upper_bounds::Vector{Float64})\n\nSet the lower bound of column columns[i] to lower_bounds[i] and the upper bound to upper_bounds[i]. Alternatively, the lower or upper bound can be left blank by passing an array of length 0 instead.\n\nExamples:     changebothvariablebounds!(model, [1, 2], [-0.5, 0.0], [1.0, 2.0])     changebothvariablebounds!(model, [1, 2], [-0.5, 0.0], Float64[])     changebothvariable_bounds!(model, [1, 2], Float64[], [1.0, 2.0])\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.change_linear_constraint_sense!",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.change_linear_constraint_sense!",
    "category": "function",
    "text": "change_linear_constraint_sense!(m, rows::Vector{Int}, sense::Vector{Symbol})::Nothing\n\nChange the sense of the linear constraints in rows to sense.\n\nsense is the output of backend_type(m, set), where set is the corresponding set for the row rows[i].\n\nInterval constraints require a call to change_range_value!.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.change_matrix_coefficient!",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.change_matrix_coefficient!",
    "category": "function",
    "text": "change_matrix_coefficient!(m, row, col, coef)\n\nSet the linear coefficient of the variable in column col, constraint row to coef.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.change_matrix_coefficients!-NTuple{4,Any}",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.change_matrix_coefficients!",
    "category": "method",
    "text": "change_matrix_coefficients!(m, rows, cols, coefs)\n\nChange multiple linear coefficients simultaneously. Sets the linear coefficient of the variable at column cols[i] in constraint rows[i] to coefs[i] for i in 1:length(rows). Requires that length(rows) == length(cols) == length(coefs).\n\nBy default, this method just calls change_matrix_coefficient!(m, rows[i], cols[i], coefs[i]) repeatedly, but some solver interfaces may offer more efficient implementations.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.change_objective_coefficient!",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.change_objective_coefficient!",
    "category": "function",
    "text": "changeobjectivecoefficient!(m, col, coef)\n\nSet the linear coefficient of the variable in column col to coef in the objective function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.change_objective_sense!",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.change_objective_sense!",
    "category": "function",
    "text": "change_objective_sense!(m, sense::Symbol)::Nothing\n\nChange the optimization sense of the model m to sense. sense must be :min or :max.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.change_rhs_coefficient!",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.change_rhs_coefficient!",
    "category": "function",
    "text": "changerhscoefficient!(m, row, coef)\n\nSet the rhs of the constraint in row row to coef.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.change_variable_bounds!",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.change_variable_bounds!",
    "category": "function",
    "text": "change_variable_bounds!(m, cols::Vector{Int}, values::Vector{Float64}, senses::Vector)\n\nChange the bounds of the variable. The sense of the upperbound is given by backend_type(m, Val{:Upperbound}()). The sense of the lowerbound is given by backend_type(m, Val{:Lowerbound}())\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.change_variable_types!",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.change_variable_types!",
    "category": "function",
    "text": "change_variable_types(m, cols::Vector{Int}, types):Nothing\n\nChange the variable types. Type is the output of one of:\n\nbackend_type(m, ::ZeroOne), for binary variables;\nbackend_type(m, ::Integer), for integer variables; and\nbackend_type(m, Val{:Continuous}()), for continuous variables.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.delete_from_dictionary_by_value-Union{Tuple{V}, Tuple{K}, Tuple{Dict{K,V},V}} where V where K",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.delete_from_dictionary_by_value",
    "category": "method",
    "text": "delete_from_dictionary_by_value(dict::Dict{K, V}, index::V)\n\nDelete the entries of a dictionary where the value of a key=>value pair is equal to index.\n\nThis is used to remove bounds when deleting a variable.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.delete_linear_constraints!",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.delete_linear_constraints!",
    "category": "function",
    "text": "delete_linear_constraints!(m, start_row::Int, end_row::Int)::Nothing\n\nDelete the linear constraints start_row, start_row+1, ..., end_row from the model m.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.delete_quadratic_constraints!",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.delete_quadratic_constraints!",
    "category": "function",
    "text": "delete_quadratic_constraints!(m, start_row::Int, end_row::Int)::Nothing\n\nDelete the quadratic constraints start_row, start_row+1, ..., end_row from the model m.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.delete_sos!",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.delete_sos!",
    "category": "function",
    "text": "delete_sos!(m, start_idx::Int, end_idx::Int)::Nothing\n\nDelete the SOS constraints start_idx, start_idx+1, ..., end_idx from the model m.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.delete_variables!",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.delete_variables!",
    "category": "function",
    "text": "delete_variables!(m, start_col::Int, end_col::Int)::Nothing\n\nDelete the columns start_col, start_col+1, ..., end_col from the model m.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.fakesolve-Tuple{LinQuadOptInterface.MockLinQuadOptimizer}",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.fakesolve",
    "category": "method",
    "text": "fakesolve(instance::MockLinQuadOptimizer)\n\nSet solutions upon solve calls. Data held in MockLinQuadOptimizer stored data is passed to the low-level emulator MockLinQuadModel.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.functions_to_CSRMatrix-Tuple{LinQuadOptInterface.LinQuadOptimizer,Array{MathOptInterface.ScalarAffineFunction{Float64},1},Int64}",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.functions_to_CSRMatrix",
    "category": "method",
    "text": "functions_to_CSRMatrix(model::LinQuadOptimizer, functions::Vector{Linear}, num_non_zeros::Int)\n\nConvert a vector of ScalarAffineFunctions into a CSRMatrix with num_non_zeros non-zero coefficients.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.get_barrier_iterations",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.get_barrier_iterations",
    "category": "function",
    "text": "get_barrier_iterations(m)\n\nGet the number of barrier iterations performed during the most recent optimization of the model m.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.get_column-Tuple{LinQuadOptInterface.LinQuadOptimizer,MathOptInterface.SingleVariable}",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.get_column",
    "category": "method",
    "text": "get_column(model::LinQuadOptimizer, variable::MOI.SingleVariable)\n\nReturn the column of the variable inside a MOI.SingleVariable function in model.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.get_column-Tuple{LinQuadOptInterface.LinQuadOptimizer,MathOptInterface.VariableIndex}",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.get_column",
    "category": "method",
    "text": "get_column(model::LinQuadOptimizer, index::MOI.VariableIndex)\n\nReturn the column of the variable index in model.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.get_constant_objective-Tuple{LinQuadOptInterface.LinQuadOptimizer}",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.get_constant_objective",
    "category": "method",
    "text": "get_constant_objective(m)::Float64\n\nReturn the constant (i.e. offset) component of the objective.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.get_dual_status",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.get_dual_status",
    "category": "function",
    "text": "get_dual_status(m)\n\nGet the dual status of the model m.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.get_farkas_dual!",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.get_farkas_dual!",
    "category": "function",
    "text": "get_farkas_dual!(m, x::Vector{Float64})\n\nGet the farkas dual (certificate of primal infeasiblility) for the linear constraints in the model m, and store in x. xmust have one element for each linear constraint.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.get_farkas_dual_bounds!-Tuple{LinQuadOptInterface.LinQuadOptimizer,Any}",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.get_farkas_dual_bounds!",
    "category": "method",
    "text": "get_farkas_dual_bounds!(model, dest::Vector{Float64})\n\nGet the farkas dual (certificate of primal infeasibility) for the variable bounds in the model model, and store in dest. dest must have one element for each variable.\n\nSince most solvers do not have this feature, this function has a default fallback that does nothing.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.get_iteration_count",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.get_iteration_count",
    "category": "function",
    "text": "get_iteration_count(m)\n\nGet the number of simplex iterations performed during the most recent optimization of the model m.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.get_linear_constraint",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.get_linear_constraint",
    "category": "function",
    "text": "get_linear_constraint(m, row::Int)::Tuple{Vector{Int}, Vector{Float64}}\n\nGet the linear component of the constraint in the 1-indexed row row in the model m. Returns a tuple of (cols, vals).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.get_linear_dual_solution!",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.get_linear_dual_solution!",
    "category": "function",
    "text": "get_linear_dual_solution!(m, x::Vector{Float64})\n\nGet the dual solution for the linear constraints in the model m, and store in x. xmust have one element for each linear constraint.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.get_linear_objective!",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.get_linear_objective!",
    "category": "function",
    "text": "get_linear_objective!(m, x::Vector{Float64})\n\nGet the linear coefficients of the objective and store in x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.get_linear_primal_solution!",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.get_linear_primal_solution!",
    "category": "function",
    "text": "get_linear_primal_solution!(m, x::Vector{Float64})\n\nGiven a set of linear constraints l <= a\'x <= b in the model m, get the constraint primal a\'x for each constraint, and store in x. x must have one element for each linear constraint.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.get_node_count",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.get_node_count",
    "category": "function",
    "text": "get_node_count(m)\n\nGet the number of branch-and-cut nodes expolored during the most recent optimization of the model m.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.get_number_linear_constraints",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.get_number_linear_constraints",
    "category": "function",
    "text": "get_number_linear_constraints(m)::Int\n\nGet the number of linear constraints in the model m.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.get_number_quadratic_constraints",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.get_number_quadratic_constraints",
    "category": "function",
    "text": "get_number_quadratic_constraints(m)::Int\n\nGet the number of quadratic constraints in the model m.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.get_number_variables",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.get_number_variables",
    "category": "function",
    "text": "get_number_variables(m)::Int\n\nGet the number of variables in the model m.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.get_objective_bound",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.get_objective_bound",
    "category": "function",
    "text": "get_objective_bound(m)\n\nGet the objective bound of the model m.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.get_objective_value",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.get_objective_value",
    "category": "function",
    "text": "get_objective_value(m)\n\nGet the objective value of the solved model m.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.get_objectivesense",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.get_objectivesense",
    "category": "function",
    "text": "get_objectivesense(m)::MOI.OptimizationSense\n\nGet the optimization sense of the model m.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.get_primal_status",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.get_primal_status",
    "category": "function",
    "text": "get_primal_status(m)\n\nGet the primal status of the model m.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.get_quadratic_constraint",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.get_quadratic_constraint",
    "category": "function",
    "text": "get_quadratic_constraint(m, row::Int)::Tuple{Vector{Int}, Vector{Float64}, SparseMatrixCSC{Float64,Int64}}\n\nGet the linear and quadratic components of the constraint in the 1-indexed row row in the model m. Returns a tuple of (lin_cols, lin_vals, Q). Where Q represents the matrix in CSC format.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.get_quadratic_dual_solution!",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.get_quadratic_dual_solution!",
    "category": "function",
    "text": "get_quadratic_dual_solution!(m, x::Vector{Float64})\n\nGet the dual solution for the quadratic constraints in the model m, and store in x. xmust have one element for each quadratic constraint.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.get_quadratic_primal_solution!",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.get_quadratic_primal_solution!",
    "category": "function",
    "text": "get_quadratic_primal_solution!(m, x::Vector{Float64})\n\nGiven a set of quadratic constraints l <= a\'x + x\'Qx <= b in the model m, get the constraint primal a\'x + x\'Qx for each constraint, and store in x. x must have one element for each quadratic constraint.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.get_quadratic_rhs",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.get_quadratic_rhs",
    "category": "function",
    "text": "get_quadratic_rhs(m, row::Int)::Float64\n\nGet the right hand-side term of quadratic constraint in row row in model m.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.get_quadratic_terms_objective",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.get_quadratic_terms_objective",
    "category": "function",
    "text": "get_quadratic_terms_objective(m)::SparseMatrixCSC{Float64,Int64}\n\nGet quadratic terms of the objective function returned in sparse CSC format.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.get_range",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.get_range",
    "category": "function",
    "text": "get_range(m, row::Int)::Tuple{Float64,Float64}\n\nGet the range which the constraint row belongs to. The output of the function is the tuple lowerbound, upperbound of bounds: lowerbound <= a\'x < = upperbound\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.get_relative_mip_gap",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.get_relative_mip_gap",
    "category": "function",
    "text": "get_relative_mip_gap(m)\n\nGet the relative MIP gap of the solved model m.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.get_rhs",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.get_rhs",
    "category": "function",
    "text": "get_rhs(m, row::Int)::Float64\n\nGet the right-hand side of the linear constraint in the 1-indexed row row in the model m.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.get_sos_constraint",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.get_sos_constraint",
    "category": "function",
    "text": "get_sos_constraint(m, idx::Int)::Tuple{Vector{Int}, Vector{Float64}, Symbol}\n\nGet the SOS constraint idx from the model m. Returns the triplet     (cols, vals, typ).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.get_termination_status",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.get_termination_status",
    "category": "function",
    "text": "get_termination_status(m)\n\nGet the termination status of the model m.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.get_unbounded_ray!",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.get_unbounded_ray!",
    "category": "function",
    "text": "get_unbounded_ray!(m, x::Vector{Float64})\n\nGet the unbounded ray (certificate of dual infeasiblility) for the linear constraints in the model m, and store in x. xmust have one element for each variable.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.get_variable_dual_solution!",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.get_variable_dual_solution!",
    "category": "function",
    "text": "get_variable_dual_solution!(m, x::Vector{Float64})\n\nGet the dual solution (reduced-costs) for the variables in the model m, and store in x. xmust have one element for each variable.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.get_variable_lowerbound",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.get_variable_lowerbound",
    "category": "function",
    "text": "get_variable_lowerbound(m, col::Int)::Float64\n\nGet the lower bound of the variable in 1-indexed column col of the model m.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.get_variable_primal_solution!",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.get_variable_primal_solution!",
    "category": "function",
    "text": "get_variable_primal_solution!(m, x::Vector{Float64})\n\nGet the primal solution for the variables in the model m, and store in x. xmust have one element for each variable.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.get_variable_upperbound",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.get_variable_upperbound",
    "category": "function",
    "text": "get_variable_upperbound(m, col::Int)::Float64\n\nGet the upper bound of the variable in 1-indexed column col of the model m.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.has_integer-Tuple{LinQuadOptInterface.LinQuadOptimizer}",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.has_integer",
    "category": "method",
    "text": "has_integer(model::LinQuadOptimizer)::Bool\n\nA helper function to determine if model has any integer components (i.e. binary, integer, special ordered sets, semicontinuous, or semi-integer variables).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.has_value-Union{Tuple{V}, Tuple{K}, Tuple{Dict{K,V},V}} where V where K",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.has_value",
    "category": "method",
    "text": "has_value(dict::Dict{K, V}, value::V) where {K, V}\n\nReturn true if dict has a key=>value pair with value.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.is_binding-Tuple{MathOptInterface.LessThan{Float64},Float64}",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.is_binding",
    "category": "method",
    "text": "is_binding(set, value::Float64)\n\nReturn true if value is an extreme point of the set set.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.make_problem_type_continuous-Tuple{LinQuadOptInterface.LinQuadOptimizer}",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.make_problem_type_continuous",
    "category": "method",
    "text": "make_problem_type_continuous(m)::Nothing\n\nIf an explicit call is needed to change the problem type continuous (e.g., CPLEX).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.make_problem_type_integer-Tuple{LinQuadOptInterface.LinQuadOptimizer}",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.make_problem_type_integer",
    "category": "method",
    "text": "make_problem_type_integer(m)::Nothing\n\nIf an explicit call is needed to change the problem type integer (e.g., CPLEX).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.modify_ranged_constraints!",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.modify_ranged_constraints!",
    "category": "function",
    "text": "modify_ranged_constraints!(m, rows::Vector{Int}, lowerbound::Vector{Float64}, upperbound::Vector{Float64})\n\nModify the lower and upperbounds of a ranged constraint in the model m.\n\nThis is a special case compared to standard the change_rhs_coefficient! since it is often implemented via multiple API calls.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.print_low_level_solution-Tuple{Any}",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.print_low_level_solution",
    "category": "method",
    "text": "Solution builder to create solutions for the mock solver. Should be called inside MOI.optimize!(model::LinQuadOptimizer) right before changing signs. This means that these solutions replicate the low-level solver output. The idea is to run the test with a solver like Xpress, Gurobi, GLPK or CPLEX to obtain the detailed solution.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.reduce_duplicates!-Union{Tuple{T}, Tuple{S}, Tuple{Array{T,1},Array{T,1},Array{S,1}}} where T where S",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.reduce_duplicates!",
    "category": "method",
    "text": "reduce_duplicates!(rows::Vector{T}, cols::Vector{T}, vals::Vector{S})\n\nGiven a matrix specified by row indices in rows, column indices in cols and coefficients in vals, return new rows, cols, and vals vectors with duplicate elements summed and any coefficients in the lower triangle moved to the upper triangle.\n\nThis function swaps element i in rows and cols if rows[i]>cols[i].\n\nExamples\n\njulia> reduce_duplicates!(\n    [1,   2, 2, 2],  # rows\n    [1,   1, 2, 2],  # cols\n    [1, 0.5, 1, 1]   # vals\n    )\n([1, 1, 2], [1, 2, 2], [1.0, 0.5, 2.0])\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.set_constant_objective!-Tuple{LinQuadOptInterface.LinQuadOptimizer,Any}",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.set_constant_objective!",
    "category": "method",
    "text": "set_constant_objective!(m, value)::Nothing\n\nSet the constant (i.e. offset) component of the objective function to the given value.\n\nSolver interfaces that overload this behavior (e.g. to pass that constant objective to the solver itself) must also overload get_constant_objective(m).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.set_linear_objective!",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.set_linear_objective!",
    "category": "function",
    "text": "set_linear_objective!(m, cols::Vector{Int}, coefs::Vector{Float64})::Nothing\n\nSet the linear component of the objective.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.set_quadratic_objective!",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.set_quadratic_objective!",
    "category": "function",
    "text": "set_quadratic_objective!(m, I::Vector{Int}, J::Vector{Int}, V::Vector{Float64})::Nothing\n\nSet the quadratic component of the objective. Arguments given in triplet form for the Q matrix in 0.5 x\' Q x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.shift_references_after_delete_affine!-Tuple{Any,Any}",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.shift_references_after_delete_affine!",
    "category": "method",
    "text": "shift_references_after_delete_affine!(m, row)\n\nThis function updates all of the references in m after we have deleted row row in the affine constraint matrix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.shift_references_after_delete_quadratic!-Tuple{Any,Any}",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.shift_references_after_delete_quadratic!",
    "category": "method",
    "text": "shift_references_after_delete_quadratic!(m, row)\n\nThis function updates all of the references in m after we have deleted row row in the quadratic constraint matrix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.solve_linear_problem!",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.solve_linear_problem!",
    "category": "function",
    "text": "solve_linear_problem!(m)::Nothing\n\nSolve a linear program m.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.solve_mip_problem!",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.solve_mip_problem!",
    "category": "function",
    "text": "solve_mip_problem!(m)::Nothing\n\nSolve a mixed-integer model m.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.solve_quadratic_problem!",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.solve_quadratic_problem!",
    "category": "function",
    "text": "solve_quadratic_problem!(m)::Nothing\n\nSolve a model m with quadratic components.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.supported_constraints",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.supported_constraints",
    "category": "function",
    "text": "supported_constraints(m)::Vector{\n    Tuple{MOI.AbstractFunction, MOI.AbstractSet}\n}\n\nGet a list of supported constraint types in the model m.\n\nFor example, [(LQOI.Linear, LQOI.EQ)]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.supported_objectives",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.supported_objectives",
    "category": "function",
    "text": "supported_objectives(m)::Vector{MOI.AbstractScalarFunction}\n\nGet a list of supported objective types in the model m.\n\nFor example, [LQOI.Linear, LQOI.Quad]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.unload",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.unload",
    "category": "function",
    "text": "unload(from::Vector, to, warn = true)\n\nHelper function to remove the first element of a vector and return it. If the vector is empty data in default is returned instead. Used in fakesolve.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinQuadOptInterface.unsafe_set!-Union{Tuple{F}, Tuple{LinQuadOptimizer,ObjectiveFunction{F},ScalarAffineFunction{Float64}}} where F",
    "page": "Docstrings",
    "title": "LinQuadOptInterface.unsafe_set!",
    "category": "method",
    "text": "unsafe_set!(m, ::MOI.ObjectiveFunction{F}, objective::Linear) where F\n\nSets a linear objective function without cannonicalizing objective.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [LinQuadOptInterface]\nOrder = [:type, :function]"
},

]}
