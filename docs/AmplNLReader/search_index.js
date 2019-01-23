var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#AmplNLReader.jl:-A-[Julia](http://julialang.org)-interface-to-[AMPL](http://www.ampl.com)-1",
    "page": "Readme",
    "title": "AmplNLReader.jl: A Julia interface to AMPL",
    "category": "section",
    "text": "(Image: Master Build Status) (Image: Build status) (Image: Master Coverage Status)"
},

{
    "location": "#How-to-Install-1",
    "page": "Readme",
    "title": "How to Install",
    "category": "section",
    "text": "At the Julia prompt, clone this repository and build:julia> Pkg.add(\"AmplNLReader\")\njulia> Pkg.build(\"AmplNLReader\")"
},

{
    "location": "#Testing-1",
    "page": "Readme",
    "title": "Testing",
    "category": "section",
    "text": "julia> Pkg.test(\"AmplNLReader\")"
},

{
    "location": "#Creating-a-Model-1",
    "page": "Readme",
    "title": "Creating a Model",
    "category": "section",
    "text": "For an introduction to the AMPL modeling language, seeR. Fourer, D. M. Gay, and B. W. Kernighan, AMPL: A Mathematical Programming Language, Management Science 36, pp. 519-554, 1990.\nR. Fourer, D. M. Gay, and B. W. Kernighan, AMPL: A Modeling Language for Mathematical Programming, Duxbury Press / Brooks/Cole Publishing Company, 2003.\nD. Orban, The Lightning AMPL Tutorial. A Guide for Nonlinear Optimization Users, GERAD Technical Report G-2009-66, 2009.Suppose you have an AMPL model represented by the model and data files mymodel.mod and mymodel.dat. Decode this model as a so-called nl file usingampl -ogmymodel mymodel.mod mymodel.datFor example:julia> using AmplNLReader\n\njulia> hs33 = AmplModel(\"hs033.nl\")\nMinimization problem hs033.nl\nnvar = 3, ncon = 2 (0 linear)\n\njulia> print(hs33)\nMinimization problem hs033.nl\nnvar = 3, ncon = 2 (0 linear)\nlvar = 1x3 Array{Float64,2}:\n 0.0  0.0  0.0\nuvar = 1x3 Array{Float64,2}:\n Inf  Inf  5.0\nlcon = 1x2 Array{Float64,2}:\n -Inf  4.0\nucon = 1x2 Array{Float64,2}:\n 0.0  Inf\nx0 = 1x3 Array{Float64,2}:\n 0.0  0.0  3.0\ny0 = 1x2 Array{Float64,2}:\n -0.0  -0.0There is support for holding multiple models in memory simultaneously. This should be transparent to the user."
},

{
    "location": "#Optimization-Problems-1",
    "page": "Readme",
    "title": "Optimization Problems",
    "category": "section",
    "text": "AmplNLReader.jl currently focuses on continuous problems conforming to NLPModels.jl.AmplModel objects support all methods associated to NLPModel objects. Please see the NLPModels.jl documentation for more information. The following table lists extra methods associated to an AmplModel. See Hooking your Solver to AMPL for background.Method Notes\nwrite_sol(nlp, msg, x, y) Write primal and dual solutions to file"
},

{
    "location": "#Missing-Methods-1",
    "page": "Readme",
    "title": "Missing Methods",
    "category": "section",
    "text": "methods for LPs (sparse cost, sparse constraint matrix)\nmethods to check optimality conditions.This content is released under the MIT License. <a rel=\"license\" href=\"http://opensource.org/licenses/MIT\"> <img alt=\"MIT license\" height=\"40\" src=\"http://upload.wikimedia.org/wikipedia/commons/c/c3/License_icon-mit.svg\" /></a>"
},

{
    "location": "autodocs/#AmplNLReader.write_sol-Tuple{AmplModel,String,AbstractArray{T,1} where T,AbstractArray{T,1} where T}",
    "page": "Docstrings",
    "title": "AmplNLReader.write_sol",
    "category": "method",
    "text": "Write message msg along with primal and dual variables x and y to file.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinearOperators.reset!-Tuple{AmplModel}",
    "page": "Docstrings",
    "title": "LinearOperators.reset!",
    "category": "method",
    "text": "Reset evaluation counters in nlp.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.cons!-Tuple{AmplModel,AbstractArray{T,1} where T,AbstractArray{T,1} where T}",
    "page": "Docstrings",
    "title": "NLPModels.cons!",
    "category": "method",
    "text": "Evaluate the constraints at x in place.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.cons-Tuple{AmplModel,AbstractArray{T,1} where T}",
    "page": "Docstrings",
    "title": "NLPModels.cons",
    "category": "method",
    "text": "Evaluate the constraints at x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.conscale-Tuple{AmplModel,AbstractArray{T,1} where T}",
    "page": "Docstrings",
    "title": "NLPModels.conscale",
    "category": "method",
    "text": "Scale the vector of constraints by the vector s.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.ghjvprod!-Tuple{AmplModel,AbstractArray{T,1} where T,AbstractArray{T,1} where T,AbstractArray{T,1} where T,AbstractArray{T,1} where T}",
    "page": "Docstrings",
    "title": "NLPModels.ghjvprod!",
    "category": "method",
    "text": "Compute the vector of dot products (g, Hj*v) in place where Hj is the Hessian of the j-th constraint at x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.ghjvprod-Tuple{AmplModel,AbstractArray{T,1} where T,AbstractArray{T,1} where T,AbstractArray{T,1} where T}",
    "page": "Docstrings",
    "title": "NLPModels.ghjvprod",
    "category": "method",
    "text": "Compute the vector of dot products (g, Hj*v) where Hj is the Hessian of the j-th constraint at x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.grad!-Tuple{AmplModel,AbstractArray{T,1} where T,AbstractArray{T,1} where T}",
    "page": "Docstrings",
    "title": "NLPModels.grad!",
    "category": "method",
    "text": "Evaluate the gradient of the objective function at x in place.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.grad-Tuple{AmplModel,AbstractArray{T,1} where T}",
    "page": "Docstrings",
    "title": "NLPModels.grad",
    "category": "method",
    "text": "Evaluate the gradient of the objective function at x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.hess-Tuple{AmplModel,AbstractArray{T,1} where T}",
    "page": "Docstrings",
    "title": "NLPModels.hess",
    "category": "method",
    "text": "Evaluate the Lagrangian Hessian at (x,y) as a sparse matrix. Only the lower triangle is returned.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.hess_coord-Tuple{AmplModel,AbstractArray{T,1} where T}",
    "page": "Docstrings",
    "title": "NLPModels.hess_coord",
    "category": "method",
    "text": "Evaluate the Lagrangian Hessian at (x,y) in sparse coordinate format. Only the lower triangle is returned.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.hprod!-Tuple{AmplModel,AbstractArray{T,1} where T,AbstractArray{T,1} where T,AbstractArray{T,1} where T}",
    "page": "Docstrings",
    "title": "NLPModels.hprod!",
    "category": "method",
    "text": "Evaluate the product of the Lagrangian Hessian at (x,y) with the vector v in place.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.hprod-Tuple{AmplModel,AbstractArray{T,1} where T,AbstractArray{T,1} where T}",
    "page": "Docstrings",
    "title": "NLPModels.hprod",
    "category": "method",
    "text": "Evaluate the product of the Lagrangian Hessian at (x,y) with the vector v.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.jac-Tuple{AmplModel,AbstractArray{T,1} where T}",
    "page": "Docstrings",
    "title": "NLPModels.jac",
    "category": "method",
    "text": "Evaluate the constraints Jacobian at x as a sparse matrix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.jac_coord-Tuple{AmplModel,AbstractArray{T,1} where T}",
    "page": "Docstrings",
    "title": "NLPModels.jac_coord",
    "category": "method",
    "text": "Evaluate the constraints Jacobian at x in sparse coordinate format.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.jprod!-Tuple{AmplModel,AbstractArray{T,1} where T,AbstractArray{T,1} where T,AbstractArray{T,1} where T}",
    "page": "Docstrings",
    "title": "NLPModels.jprod!",
    "category": "method",
    "text": "Evaluate the Jacobian-vector product at x in place. Warning: Currently building the Jacobian for this.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.jprod-Tuple{AmplModel,AbstractArray{T,1} where T,AbstractArray{T,1} where T}",
    "page": "Docstrings",
    "title": "NLPModels.jprod",
    "category": "method",
    "text": "Evaluate the Jacobian-vector product at x. Warning: Currently building the Jacobian for this.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.jth_con-Tuple{AmplModel,AbstractArray{T,1} where T,Int64}",
    "page": "Docstrings",
    "title": "NLPModels.jth_con",
    "category": "method",
    "text": "Evaluate the j-th constraint at x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.jth_congrad!-Tuple{AmplModel,AbstractArray{T,1} where T,Int64,AbstractArray{T,1} where T}",
    "page": "Docstrings",
    "title": "NLPModels.jth_congrad!",
    "category": "method",
    "text": "Evaluate the j-th constraint gradient at x in place.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.jth_congrad-Tuple{AmplModel,AbstractArray{T,1} where T,Int64}",
    "page": "Docstrings",
    "title": "NLPModels.jth_congrad",
    "category": "method",
    "text": "Evaluate the j-th constraint gradient at x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.jth_hprod!-Tuple{AmplModel,AbstractArray{T,1} where T,AbstractArray{T,1} where T,Int64,AbstractArray{T,1} where T}",
    "page": "Docstrings",
    "title": "NLPModels.jth_hprod!",
    "category": "method",
    "text": "Evaluate the product of the j-th constraint Hessian at x with the vector v in place. The objective Hessian is used if j=0.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.jth_hprod-Tuple{AmplModel,AbstractArray{T,1} where T,AbstractArray{T,1} where T,Int64}",
    "page": "Docstrings",
    "title": "NLPModels.jth_hprod",
    "category": "method",
    "text": "Evaluate the product of the j-th constraint Hessian at x with the vector v. The objective Hessian is used if j=0.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.jth_sparse_congrad-Tuple{AmplModel,AbstractArray{T,1} where T,Int64}",
    "page": "Docstrings",
    "title": "NLPModels.jth_sparse_congrad",
    "category": "method",
    "text": "Evaluate the j-th constraint sparse gradient at x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.jtprod!-Tuple{AmplModel,AbstractArray{T,1} where T,AbstractArray{T,1} where T,AbstractArray{T,1} where T}",
    "page": "Docstrings",
    "title": "NLPModels.jtprod!",
    "category": "method",
    "text": "Evaluate the transposed-Jacobian-vector product at x in place. Warning: Currently building the Jacobian for this.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.jtprod-Tuple{AmplModel,AbstractArray{T,1} where T,AbstractArray{T,1} where T}",
    "page": "Docstrings",
    "title": "NLPModels.jtprod",
    "category": "method",
    "text": "Evaluate the transposed-Jacobian-vector product at x. Warning: Currently building the Jacobian for this.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.lagscale-Tuple{AmplModel,Float64}",
    "page": "Docstrings",
    "title": "NLPModels.lagscale",
    "category": "method",
    "text": "Set the scaling factor σ in the Lagrangian:     L(x,y) = f(x) + σ ∑ yi ci(x).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.obj-Tuple{AmplModel,AbstractArray{T,1} where T}",
    "page": "Docstrings",
    "title": "NLPModels.obj",
    "category": "method",
    "text": "Evaluate the objective function of nlp at x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModels.varscale-Tuple{AmplModel,AbstractArray{T,1} where T}",
    "page": "Docstrings",
    "title": "NLPModels.varscale",
    "category": "method",
    "text": "Scale the vector of variables by the vector s.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [AmplNLReader]\nOrder = [:type, :function]"
},

]}
