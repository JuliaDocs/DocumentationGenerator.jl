var documenterSearchIndex = {"docs": [

{
    "location": "#AmplNLReader.write_sol-Tuple{AmplModel,String,AbstractArray{T,1} where T,AbstractArray{T,1} where T}",
    "page": "Home",
    "title": "AmplNLReader.write_sol",
    "category": "method",
    "text": "Write message msg along with primal and dual variables x and y to file.\n\n\n\n\n\n"
},

{
    "location": "#LinearOperators.reset!-Tuple{AmplModel}",
    "page": "Home",
    "title": "LinearOperators.reset!",
    "category": "method",
    "text": "Reset evaluation counters in nlp.\n\n\n\n\n\n"
},

{
    "location": "#NLPModels.cons!-Tuple{AmplModel,AbstractArray{T,1} where T,AbstractArray{T,1} where T}",
    "page": "Home",
    "title": "NLPModels.cons!",
    "category": "method",
    "text": "Evaluate the constraints at x in place.\n\n\n\n\n\n"
},

{
    "location": "#NLPModels.cons-Tuple{AmplModel,AbstractArray{T,1} where T}",
    "page": "Home",
    "title": "NLPModels.cons",
    "category": "method",
    "text": "Evaluate the constraints at x.\n\n\n\n\n\n"
},

{
    "location": "#NLPModels.conscale-Tuple{AmplModel,AbstractArray{T,1} where T}",
    "page": "Home",
    "title": "NLPModels.conscale",
    "category": "method",
    "text": "Scale the vector of constraints by the vector s.\n\n\n\n\n\n"
},

{
    "location": "#NLPModels.ghjvprod!-Tuple{AmplModel,AbstractArray{T,1} where T,AbstractArray{T,1} where T,AbstractArray{T,1} where T,AbstractArray{T,1} where T}",
    "page": "Home",
    "title": "NLPModels.ghjvprod!",
    "category": "method",
    "text": "Compute the vector of dot products (g, Hj*v) in place where Hj is the Hessian of the j-th constraint at x.\n\n\n\n\n\n"
},

{
    "location": "#NLPModels.ghjvprod-Tuple{AmplModel,AbstractArray{T,1} where T,AbstractArray{T,1} where T,AbstractArray{T,1} where T}",
    "page": "Home",
    "title": "NLPModels.ghjvprod",
    "category": "method",
    "text": "Compute the vector of dot products (g, Hj*v) where Hj is the Hessian of the j-th constraint at x.\n\n\n\n\n\n"
},

{
    "location": "#NLPModels.grad!-Tuple{AmplModel,AbstractArray{T,1} where T,AbstractArray{T,1} where T}",
    "page": "Home",
    "title": "NLPModels.grad!",
    "category": "method",
    "text": "Evaluate the gradient of the objective function at x in place.\n\n\n\n\n\n"
},

{
    "location": "#NLPModels.grad-Tuple{AmplModel,AbstractArray{T,1} where T}",
    "page": "Home",
    "title": "NLPModels.grad",
    "category": "method",
    "text": "Evaluate the gradient of the objective function at x.\n\n\n\n\n\n"
},

{
    "location": "#NLPModels.hess-Tuple{AmplModel,AbstractArray{T,1} where T}",
    "page": "Home",
    "title": "NLPModels.hess",
    "category": "method",
    "text": "Evaluate the Lagrangian Hessian at (x,y) as a sparse matrix. Only the lower triangle is returned.\n\n\n\n\n\n"
},

{
    "location": "#NLPModels.hess_coord-Tuple{AmplModel,AbstractArray{T,1} where T}",
    "page": "Home",
    "title": "NLPModels.hess_coord",
    "category": "method",
    "text": "Evaluate the Lagrangian Hessian at (x,y) in sparse coordinate format. Only the lower triangle is returned.\n\n\n\n\n\n"
},

{
    "location": "#NLPModels.hprod!-Tuple{AmplModel,AbstractArray{T,1} where T,AbstractArray{T,1} where T,AbstractArray{T,1} where T}",
    "page": "Home",
    "title": "NLPModels.hprod!",
    "category": "method",
    "text": "Evaluate the product of the Lagrangian Hessian at (x,y) with the vector v in place.\n\n\n\n\n\n"
},

{
    "location": "#NLPModels.hprod-Tuple{AmplModel,AbstractArray{T,1} where T,AbstractArray{T,1} where T}",
    "page": "Home",
    "title": "NLPModels.hprod",
    "category": "method",
    "text": "Evaluate the product of the Lagrangian Hessian at (x,y) with the vector v.\n\n\n\n\n\n"
},

{
    "location": "#NLPModels.jac-Tuple{AmplModel,AbstractArray{T,1} where T}",
    "page": "Home",
    "title": "NLPModels.jac",
    "category": "method",
    "text": "Evaluate the constraints Jacobian at x as a sparse matrix.\n\n\n\n\n\n"
},

{
    "location": "#NLPModels.jac_coord-Tuple{AmplModel,AbstractArray{T,1} where T}",
    "page": "Home",
    "title": "NLPModels.jac_coord",
    "category": "method",
    "text": "Evaluate the constraints Jacobian at x in sparse coordinate format.\n\n\n\n\n\n"
},

{
    "location": "#NLPModels.jprod!-Tuple{AmplModel,AbstractArray{T,1} where T,AbstractArray{T,1} where T,AbstractArray{T,1} where T}",
    "page": "Home",
    "title": "NLPModels.jprod!",
    "category": "method",
    "text": "Evaluate the Jacobian-vector product at x in place. Warning: Currently building the Jacobian for this.\n\n\n\n\n\n"
},

{
    "location": "#NLPModels.jprod-Tuple{AmplModel,AbstractArray{T,1} where T,AbstractArray{T,1} where T}",
    "page": "Home",
    "title": "NLPModels.jprod",
    "category": "method",
    "text": "Evaluate the Jacobian-vector product at x. Warning: Currently building the Jacobian for this.\n\n\n\n\n\n"
},

{
    "location": "#NLPModels.jth_con-Tuple{AmplModel,AbstractArray{T,1} where T,Int64}",
    "page": "Home",
    "title": "NLPModels.jth_con",
    "category": "method",
    "text": "Evaluate the j-th constraint at x.\n\n\n\n\n\n"
},

{
    "location": "#NLPModels.jth_congrad!-Tuple{AmplModel,AbstractArray{T,1} where T,Int64,AbstractArray{T,1} where T}",
    "page": "Home",
    "title": "NLPModels.jth_congrad!",
    "category": "method",
    "text": "Evaluate the j-th constraint gradient at x in place.\n\n\n\n\n\n"
},

{
    "location": "#NLPModels.jth_congrad-Tuple{AmplModel,AbstractArray{T,1} where T,Int64}",
    "page": "Home",
    "title": "NLPModels.jth_congrad",
    "category": "method",
    "text": "Evaluate the j-th constraint gradient at x.\n\n\n\n\n\n"
},

{
    "location": "#NLPModels.jth_hprod!-Tuple{AmplModel,AbstractArray{T,1} where T,AbstractArray{T,1} where T,Int64,AbstractArray{T,1} where T}",
    "page": "Home",
    "title": "NLPModels.jth_hprod!",
    "category": "method",
    "text": "Evaluate the product of the j-th constraint Hessian at x with the vector v in place. The objective Hessian is used if j=0.\n\n\n\n\n\n"
},

{
    "location": "#NLPModels.jth_hprod-Tuple{AmplModel,AbstractArray{T,1} where T,AbstractArray{T,1} where T,Int64}",
    "page": "Home",
    "title": "NLPModels.jth_hprod",
    "category": "method",
    "text": "Evaluate the product of the j-th constraint Hessian at x with the vector v. The objective Hessian is used if j=0.\n\n\n\n\n\n"
},

{
    "location": "#NLPModels.jth_sparse_congrad-Tuple{AmplModel,AbstractArray{T,1} where T,Int64}",
    "page": "Home",
    "title": "NLPModels.jth_sparse_congrad",
    "category": "method",
    "text": "Evaluate the j-th constraint sparse gradient at x.\n\n\n\n\n\n"
},

{
    "location": "#NLPModels.jtprod!-Tuple{AmplModel,AbstractArray{T,1} where T,AbstractArray{T,1} where T,AbstractArray{T,1} where T}",
    "page": "Home",
    "title": "NLPModels.jtprod!",
    "category": "method",
    "text": "Evaluate the transposed-Jacobian-vector product at x in place. Warning: Currently building the Jacobian for this.\n\n\n\n\n\n"
},

{
    "location": "#NLPModels.jtprod-Tuple{AmplModel,AbstractArray{T,1} where T,AbstractArray{T,1} where T}",
    "page": "Home",
    "title": "NLPModels.jtprod",
    "category": "method",
    "text": "Evaluate the transposed-Jacobian-vector product at x. Warning: Currently building the Jacobian for this.\n\n\n\n\n\n"
},

{
    "location": "#NLPModels.lagscale-Tuple{AmplModel,Float64}",
    "page": "Home",
    "title": "NLPModels.lagscale",
    "category": "method",
    "text": "Set the scaling factor σ in the Lagrangian:     L(x,y) = f(x) + σ ∑ yi ci(x).\n\n\n\n\n\n"
},

{
    "location": "#NLPModels.obj-Tuple{AmplModel,AbstractArray{T,1} where T}",
    "page": "Home",
    "title": "NLPModels.obj",
    "category": "method",
    "text": "Evaluate the objective function of nlp at x.\n\n\n\n\n\n"
},

{
    "location": "#NLPModels.varscale-Tuple{AmplModel,AbstractArray{T,1} where T}",
    "page": "Home",
    "title": "NLPModels.varscale",
    "category": "method",
    "text": "Scale the vector of variables by the vector s.\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [AmplNLReader]\nOrder = [:type, :function]"
},

]}
