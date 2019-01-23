var documenterSearchIndex = {"docs": [

{
    "location": "#GLPK.get_status-Tuple{GLPK.Optimizer}",
    "page": "Home",
    "title": "GLPK.get_status",
    "category": "method",
    "text": "get_status(model::Optimizer)\n\nGet the status from GLPK depending on which method was used to solve the model.\n\n\n\n\n\n"
},

{
    "location": "#GLPK.AbstractCallbackData",
    "page": "Home",
    "title": "GLPK.AbstractCallbackData",
    "category": "type",
    "text": "AbstractCallbackData\n\nAn abstract type to prevent recursive type definition of Optimizer and CallbackData, each of which need the other type in a field.\n\n\n\n\n\n"
},

{
    "location": "#GLPK.CallbackData",
    "page": "Home",
    "title": "GLPK.CallbackData",
    "category": "type",
    "text": "CallbackData\n\n\n\n\n\n"
},

{
    "location": "#GLPK.CallbackFunction",
    "page": "Home",
    "title": "GLPK.CallbackFunction",
    "category": "type",
    "text": "CallbackFunction\n\nThe attribute to set the callback function in GLPK. The function takes a single argument of type CallbackData.\n\n\n\n\n\n"
},

{
    "location": "#GLPK.__internal_callback__-Tuple{Ptr{Nothing},Ptr{Nothing}}",
    "page": "Home",
    "title": "GLPK.__internal_callback__",
    "category": "method",
    "text": "__internal_callback__(tree::Ptr{Cvoid}, info::Ptr{Cvoid})\n\nDummy callback function for internal use only. Responsible for updating the objective bound.\n\n\n\n\n\n"
},

{
    "location": "#GLPK._certificates_potentially_available-Tuple{GLPK.Optimizer}",
    "page": "Home",
    "title": "GLPK._certificates_potentially_available",
    "category": "method",
    "text": "_certificates_potentially_available(model::Optimizer)\n\nReturn true if an infeasiblity certificate or an unbounded ray is potentially available (i.e., the model has been solved using either the Simplex or Exact methods).\n\n\n\n\n\n"
},

{
    "location": "#GLPK._throw_invalid_method-Tuple{GLPK.Optimizer}",
    "page": "Home",
    "title": "GLPK._throw_invalid_method",
    "category": "method",
    "text": "_throw_invalid_method(instance::Optimizer)\n\nA helper function to throw an error when the method is set incorrectly. Mainly used to enforce type-stability in functions that have a run-time switch on the method.\n\n\n\n\n\n"
},

{
    "location": "#GLPK.add_lazy_constraint!-Union{Tuple{S}, Tuple{CallbackData,ScalarAffineFunction{Float64},S}} where S<:Union{EqualTo{Float64}, GreaterThan{Float64}, LessThan{Float64}}",
    "page": "Home",
    "title": "GLPK.add_lazy_constraint!",
    "category": "method",
    "text": "add_lazy_constraint!(cb_data::GLPK.CallbackData, func::LQOI.Linear, set::S) where S <: Union{LQOI.LE, LQOI.GE, LQOI.EQ}\n\nAdd a lazy constraint to the model cb_data.model. This can only be called in a callback from GLPK.IROWGEN.\n\n\n\n\n\n"
},

{
    "location": "#GLPK.add_row!-Tuple{Prob,Array{Int64,1},Array{Float64,1},Int8,Real}",
    "page": "Home",
    "title": "GLPK.add_row!",
    "category": "method",
    "text": "add_row!(problem::GLPK.Prob, columns::Vector{Int},\n         coefficients::Vector{Float64}, sense::Cchar, rhs::Real)\n\nHelper function to add a row to the problem. Sense must be one of \'E\' (ax == b), \'G\' (ax >= b), \'L\' (ax <= b) , or \'R\' (b <= ax).\n\nIf the sense is \'R\' the rhs should be the lower bound, and the bounds should be set in a new API call to enforce the upper bound.\n\n\n\n\n\n"
},

{
    "location": "#GLPK.change_row_sense!-Tuple{GLPK.Optimizer,Int64,Any}",
    "page": "Home",
    "title": "GLPK.change_row_sense!",
    "category": "method",
    "text": "change_row_sense!(model::Optimizer, row, sense)\n\nConvert a linear constraint into another type of linear constraint by changing the comparison sense.\n\nConstraint types supported are \'E\' (equality), \'L\' (less-than), and \'G\' (greater-than).\n\nFor example, ax <= b can become ax >= b or ax == b.\n\n\n\n\n\n"
},

{
    "location": "#GLPK.copy_function_result!-Tuple{Array{T,1} where T,Any,Prob}",
    "page": "Home",
    "title": "GLPK.copy_function_result!",
    "category": "method",
    "text": "copy_function_result!(dest::Vector, foo, model::GLPK.Prob)\n\nA helper function that loops through the indices in dest and stores the result of foo(model, i) for the ith index.\n\n\n\n\n\n"
},

{
    "location": "#GLPK.get_col_bound_type-Tuple{Float64,Float64}",
    "page": "Home",
    "title": "GLPK.get_col_bound_type",
    "category": "method",
    "text": "get_col_bound_type(lower::Float64, upper::Float64)\n\nReturn the GLPK type of the variable bound given a lower bound of lower and an upper bound of upper.\n\n\n\n\n\n"
},

{
    "location": "#GLPK.get_infeasibility_ray-Tuple{GLPK.Optimizer,Array{Float64,1}}",
    "page": "Home",
    "title": "GLPK.get_infeasibility_ray",
    "category": "method",
    "text": "get_infeasibility_ray(model::Optimizer, ray::Vector{Float64})\n\nGet the Farkas certificate of primal infeasiblity.\n\nCan only be called when GLPK.simplex is used as the solver.\n\n\n\n\n\n"
},

{
    "location": "#GLPK.get_unbounded_ray-Tuple{GLPK.Optimizer,Array{Float64,1}}",
    "page": "Home",
    "title": "GLPK.get_unbounded_ray",
    "category": "method",
    "text": "get_unbounded_ray(model::Optimizer, ray::Vector{Float64})\n\nGet the certificate of primal unboundedness.\n\nCan only be called when GLPK.simplex is used as the solver.\n\n\n\n\n\n"
},

{
    "location": "#GLPK.get_variable_types-Tuple{GLPK.Optimizer}",
    "page": "Home",
    "title": "GLPK.get_variable_types",
    "category": "method",
    "text": "get_variable_types(model::Optimizer)\n\nReturn a vector of symbols (one element for each variable) of the variable type. The symbols are given by the key-value mapping in GLPK.VARIABLE_TYPE_MAP.\n\n\n\n\n\n"
},

{
    "location": "#GLPK.load_variable_primal!-Tuple{GLPK.CallbackData}",
    "page": "Home",
    "title": "GLPK.load_variable_primal!",
    "category": "method",
    "text": "load_variable_primal!(cb_data::CallbackData)\n\nLoad the variable primal solution in a callback.\n\nThis can only be called in a callback from GLPK.IROWGEN. After it is called, you can access the VariablePrimal attribute as usual.\n\n\n\n\n\n"
},

{
    "location": "#GLPK.round_bounds_to_integer-Tuple{GLPK.Optimizer}",
    "page": "Home",
    "title": "GLPK.round_bounds_to_integer",
    "category": "method",
    "text": "round_bounds_to_integer(model)::Tuple{Bool, Vector{Float64}, Vector{Float64}}\n\nGLPK does not allow integer variables with fractional bounds. Therefore, we round the bounds of binary and integer variables to integer values prior to solving.\n\nReturns a tuple of the original bounds, along with a Boolean flag indicating if they need to be reset after solve.\n\n\n\n\n\n"
},

{
    "location": "#GLPK.set_parameter-Tuple{Any,Symbol,Any}",
    "page": "Home",
    "title": "GLPK.set_parameter",
    "category": "method",
    "text": "set_parameter(param_store, key::Symbol, value)\n\nSet the field name key in a param_store type (that is one of InteriorParam, IntoptParam, or SimplexParam) to value.\n\n\n\n\n\n"
},

{
    "location": "#GLPK.set_variable_bound-Tuple{GLPK.Optimizer,Int64,Float64,Float64}",
    "page": "Home",
    "title": "GLPK.set_variable_bound",
    "category": "method",
    "text": "set_variable_bound(model::Optimizer, column::Int, lower::Float64, upper::Float64)\n\nSet the bounds of the variable in column column to [lower, upper].\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [GLPK]\nOrder = [:type, :function]"
},

]}
