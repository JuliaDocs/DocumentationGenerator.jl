var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#DiffEqDiffTools-1",
    "page": "Readme",
    "title": "DiffEqDiffTools",
    "category": "section",
    "text": "(Image: Join the chat at https://gitter.im/JuliaDiffEq/Lobby)(Image: Build Status) (Image: Build status) (Image: Coverage Status) (Image: codecov.io) (Image: DiffEqDiffTools)DiffEqDiffTools.jl is a component package in the DifferentialEquations ecosystem. It holds the common tools for taking derivatives, Jacobians, etc. and utilizing the traits from the ParameterizedFunctions when possible for increasing the speed of calculations. Users interested in using this functionality should check out DifferentialEquations.jl."
},

{
    "location": "#General-Structure-1",
    "page": "Readme",
    "title": "General Structure",
    "category": "section",
    "text": "The general structure of the library is as follows. You can call the differencing functions directly and this will allocate a temporary cache to solve the problem with. To make this non-allocating for repeat calls, you can call the cache construction functions. Each cache construction function has two possibilities: one version where you give it prototype arrays and it generates the cache variables, and one fully non-allocating version where you give it the cache variables. This is summarized as:Just want a quick derivative? Calculating once? Call the differencing function.\nGoing to calculate the derivative multiple times but don\'t have cache arrays around? Use the allocating cache and then pass this into the differencing function (this will allocate only in the one cache construction).\nHave cache variables around from your own algorithm and want to re-use them in the differencing functions? Use the non-allocating cache construction and pass the cache to the differencing function."
},

{
    "location": "#Scalar-Derivatives-1",
    "page": "Readme",
    "title": "Scalar Derivatives",
    "category": "section",
    "text": "DiffEqDiffTools.finite_difference_derivative(f, x::T, fdtype::Type{T1}=Val{:central},\n    returntype::Type{T2}=eltype(x), f_x::Union{Nothing,T}=nothing)"
},

{
    "location": "#Multi-Point-Derivatives-1",
    "page": "Readme",
    "title": "Multi-Point Derivatives",
    "category": "section",
    "text": ""
},

{
    "location": "#Differencing-Calls-1",
    "page": "Readme",
    "title": "Differencing Calls",
    "category": "section",
    "text": "# Cache-less but non-allocating if `fx` and `epsilon` are supplied\n# fx must be f(x)\nDiffEqDiffTools.finite_difference_derivative(\n    f,\n    x          :: AbstractArray{<:Number},\n    fdtype     :: Type{T1} = Val{:central},\n    returntype :: Type{T2} = eltype(x),      # return type of f\n    fx         :: Union{Nothing,AbstractArray{<:Number}} = nothing,\n    epsilon    :: Union{Nothing,AbstractArray{<:Real}} = nothing)\n\nDiffEqDiffTools.finite_difference_derivative!(\n    df         :: AbstractArray{<:Number},\n    f,\n    x          :: AbstractArray{<:Number},\n    fdtype     :: Type{T1} = Val{:central},\n    returntype :: Type{T2} = eltype(x),\n    fx         :: Union{Nothing,AbstractArray{<:Number}} = nothing,\n    epsilon    :: Union{Nothing,AbstractArray{<:Real}}   = nothing)\n\n# Cached\nDiffEqDiffTools.finite_difference_derivative!(df::AbstractArray{<:Number}, f,\n                              x::AbstractArray{<:Number},\n                              cache::DerivativeCache{T1,T2,fdtype,returntype})"
},

{
    "location": "#Allocating-and-Non-Allocating-Constructor-1",
    "page": "Readme",
    "title": "Allocating and Non-Allocating Constructor",
    "category": "section",
    "text": "DiffEqDiffTools.DerivativeCache(\n    x          :: AbstractArray{<:Number},\n    fx         :: Union{Nothing,AbstractArray{<:Number}} = nothing,\n    epsilon    :: Union{Nothing,AbstractArray{<:Real}} = nothing,\n    fdtype     :: Type{T1} = Val{:central},\n    returntype :: Type{T2} = eltype(x))This allocates either fx or epsilon if these are nothing and they are needed. fx is the current call of f(x) and is required for forward-differencing (otherwise is not necessary)."
},

{
    "location": "#Gradients-1",
    "page": "Readme",
    "title": "Gradients",
    "category": "section",
    "text": ""
},

{
    "location": "#Differencing-Calls-2",
    "page": "Readme",
    "title": "Differencing Calls",
    "category": "section",
    "text": "# Cache-less\nDiffEqDiffTools.finite_difference_gradient(f, x, fdtype::Type{T1}=Val{:central},\n                           returntype::Type{T2}=eltype(x),\n                           inplace::Type{Val{T3}}=Val{true})\nDiffEqDiffTools.finite_difference_gradient!(df, f, x, fdtype::Type{T1}=Val{:central},\n                            returntype::Type{T2}=eltype(df),\n                            inplace::Type{Val{T3}}=Val{true})\n\n# Cached\nDiffEqDiffTools.finite_difference_gradient!(df::AbstractArray{<:Number}, f,\n                            x::AbstractArray{<:Number},\n                            cache::GradientCache)"
},

{
    "location": "#Allocating-Cache-Constructor-1",
    "page": "Readme",
    "title": "Allocating Cache Constructor",
    "category": "section",
    "text": "DiffEqDiffTools.GradientCache(\n    df         :: Union{<:Number,AbstractArray{<:Number}},\n    x          :: Union{<:Number, AbstractArray{<:Number}},\n    fdtype     :: Type{T1} = Val{:central},\n    returntype :: Type{T2} = eltype(df),\n    inplace    :: Type{Val{T3}} = Val{true})"
},

{
    "location": "#Non-Allocating-Cache-Constructor-1",
    "page": "Readme",
    "title": "Non-Allocating Cache Constructor",
    "category": "section",
    "text": "DiffEqDiffTools.GradientCache(\n    c1         :: Union{Nothing,AbstractArray{<:Number}},\n    c2         :: Union{Nothing,AbstractArray{<:Number}},\n    fx         :: Union{Nothing,<:Number,AbstractArray{<:Number}} = nothing,\n    fdtype     :: Type{T1} = Val{:central},\n    returntype :: Type{T2} = eltype(df),\n    inplace    :: Type{Val{T3}} = Val{true})Note that here fx is a cached function call of f. If you provide fx, then fx will be used in the forward differencing method to skip a function call. It is on you to make sure that you update cache.fx every time before calling DiffEqDiffTools.finite_difference_gradient!. A good use of this is if you have a cache array for the output of fx already being used, you can make it alias into the differencing algorithm here."
},

{
    "location": "#Jacobians-1",
    "page": "Readme",
    "title": "Jacobians",
    "category": "section",
    "text": ""
},

{
    "location": "#Differencing-Calls-3",
    "page": "Readme",
    "title": "Differencing Calls",
    "category": "section",
    "text": "# Cache-less\nDiffEqDiffTools.finite_difference_jacobian(f, x::AbstractArray{<:Number},\n                           fdtype     :: Type{T1}=Val{:central},\n                           returntype :: Type{T2}=eltype(x),\n                           inplace    :: Type{Val{T3}}=Val{true})\n\n# Cached\nDiffEqDiffTools.finite_difference_jacobian(f,x,cache::JacobianCache)\nDiffEqDiffTools.finite_difference_jacobian!(J::AbstractMatrix{<:Number},f,\n                            x::AbstractArray{<:Number},cache::JacobianCache)"
},

{
    "location": "#Allocating-Cache-Constructor-2",
    "page": "Readme",
    "title": "Allocating Cache Constructor",
    "category": "section",
    "text": "DiffEqDiffTools.JacobianCache(\n              x,\n              fdtype     :: Type{T1} = Val{:central},\n              returntype :: Type{T2} = eltype(x),\n              inplace    :: Type{Val{T3}} = Val{true})This assumes the Jacobian is square."
},

{
    "location": "#Non-Allocating-Cache-Constructor-2",
    "page": "Readme",
    "title": "Non-Allocating Cache Constructor",
    "category": "section",
    "text": "DiffEqDiffTools.JacobianCache(\n              x1 ,\n              fx ,\n              fx1,\n              fdtype     :: Type{T1} = Val{:central},\n              returntype :: Type{T2} = eltype(fx),\n              inplace    :: Type{Val{T3}} = Val{true})"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [DiffEqDiffTools]\nOrder = [:type, :function]"
},

]}
