var documenterSearchIndex = {"docs": [

{
    "location": "#NumericalIntegration.cumul_integrate-Tuple{AbstractArray{T,1} where T,AbstractArray{T,1} where T,NumericalIntegration.Trapezoidal}",
    "page": "Home",
    "title": "NumericalIntegration.cumul_integrate",
    "category": "method",
    "text": "cumul_integrate(x::AbstractVector, y::AbstractVector, ::Trapezoidal)\n\nUse Trapezoidal rule.\n\n\n\n\n\n"
},

{
    "location": "#NumericalIntegration.cumul_integrate-Tuple{AbstractArray{T,1} where T,AbstractArray{T,1} where T,TrapezoidalEvenFast}",
    "page": "Home",
    "title": "NumericalIntegration.cumul_integrate",
    "category": "method",
    "text": "cumul_integrate(x::AbstractVector, y::AbstractVector, ::TrapezoidalEvenFast)\n\nUse Trapezoidal rule, assuming evenly spaced vector x. Unsafe method: no bound checking.\n\n\n\n\n\n"
},

{
    "location": "#NumericalIntegration.cumul_integrate-Tuple{AbstractArray{T,1} where T,AbstractArray{T,1} where T,TrapezoidalEven}",
    "page": "Home",
    "title": "NumericalIntegration.cumul_integrate",
    "category": "method",
    "text": "cumul_integrate(x::AbstractVector, y::AbstractVector, ::TrapezoidalEven)\n\nUse Trapezoidal rule, assuming evenly spaced vector x.\n\n\n\n\n\n"
},

{
    "location": "#NumericalIntegration.cumul_integrate-Tuple{AbstractArray{T,1} where T,AbstractArray{T,1} where T,TrapezoidalFast}",
    "page": "Home",
    "title": "NumericalIntegration.cumul_integrate",
    "category": "method",
    "text": "cumul_integrate(x::AbstractVector, y::AbstractVector, ::TrapezoidalFast)\n\nUse Trapezoidal rule. Unsafe method: no bound checking. This is the default when no method is supplied.\n\n\n\n\n\n"
},

{
    "location": "#NumericalIntegration.cumul_integrate-Tuple{AbstractArray{T,1} where T,AbstractArray{T,2} where T,IntegrationMethod}",
    "page": "Home",
    "title": "NumericalIntegration.cumul_integrate",
    "category": "method",
    "text": "cumul_integrate(x::AbstractVector, y::AbstractMatrix, method; dims=2)\n\nWhen y is an array, compute integral along each dimension specified by dims (default 2: columns)\n\n\n\n\n\n"
},

{
    "location": "#NumericalIntegration.cumul_integrate-Tuple{Any,Vararg{Any,N} where N}",
    "page": "Home",
    "title": "NumericalIntegration.cumul_integrate",
    "category": "method",
    "text": "cumul_integrate(x,y...)\n\nCompute cumulative numerical integral of y(x) from x=x[1] to x=x[end]. Return a vector with elements of the same type as the input. If not method is supplied, use TrapezdoialFast.\n\n\n\n\n\n"
},

{
    "location": "#NumericalIntegration.integrate-Tuple{AbstractArray{T,1} where T,AbstractArray{T,1} where T,NumericalIntegration.Trapezoidal}",
    "page": "Home",
    "title": "NumericalIntegration.integrate",
    "category": "method",
    "text": "integrate(x::AbstractVector, y::AbstractVector, ::Trapezoidal)\n\nUse Trapezoidal rule.\n\n\n\n\n\n"
},

{
    "location": "#NumericalIntegration.integrate-Tuple{AbstractArray{T,1} where T,AbstractArray{T,1} where T,SimpsonEvenFast}",
    "page": "Home",
    "title": "NumericalIntegration.integrate",
    "category": "method",
    "text": "integrate(x::AbstractVector, y::AbstractVector, ::SimpsonEven)\n\nUse Simpson\'s rule, assuming evenly spaced vector x.  Unsafe method: no bound checking.\n\n\n\n\n\n"
},

{
    "location": "#NumericalIntegration.integrate-Tuple{AbstractArray{T,1} where T,AbstractArray{T,1} where T,SimpsonEven}",
    "page": "Home",
    "title": "NumericalIntegration.integrate",
    "category": "method",
    "text": "integrate(x::AbstractVector, y::AbstractVector, ::SimpsonEven)\n\nUse Simpson\'s rule, assuming evenly spaced vector x. \n\n\n\n\n\n"
},

{
    "location": "#NumericalIntegration.integrate-Tuple{AbstractArray{T,1} where T,AbstractArray{T,1} where T,TrapezoidalEvenFast}",
    "page": "Home",
    "title": "NumericalIntegration.integrate",
    "category": "method",
    "text": "integrate(x::AbstractVector, y::AbstractVector, ::TrapezoidalEvenFast)\n\nUse Trapezoidal rule, assuming evenly spaced vector x. Unsafe method: no bound checking.\n\n\n\n\n\n"
},

{
    "location": "#NumericalIntegration.integrate-Tuple{AbstractArray{T,1} where T,AbstractArray{T,1} where T,TrapezoidalEven}",
    "page": "Home",
    "title": "NumericalIntegration.integrate",
    "category": "method",
    "text": "integrate(x::AbstractVector, y::AbstractVector, ::TrapezoidalEven)\n\nUse Trapezoidal rule, assuming evenly spaced vector x.\n\n\n\n\n\n"
},

{
    "location": "#NumericalIntegration.integrate-Tuple{AbstractArray{T,1} where T,AbstractArray{T,1} where T,TrapezoidalFast}",
    "page": "Home",
    "title": "NumericalIntegration.integrate",
    "category": "method",
    "text": "integrate(x::AbstractVector, y::AbstractVector, ::TrapezoidalFast)\n\nUse Trapezoidal rule. Unsafe method: no bound checking. This is the default when no method is supplied.\n\n\n\n\n\n"
},

{
    "location": "#NumericalIntegration.integrate-Tuple{AbstractArray{T,1} where T,AbstractArray{T,2} where T,IntegrationMethod}",
    "page": "Home",
    "title": "NumericalIntegration.integrate",
    "category": "method",
    "text": "integrate(x::AbstractVector, y::AbstractMatrix, method; dims=2)\n\nWhen y is an array, compute integral along dimension specified by dims (default 2: columns).\n\n\n\n\n\n"
},

{
    "location": "#NumericalIntegration.integrate-Tuple{Any,Vararg{Any,N} where N}",
    "page": "Home",
    "title": "NumericalIntegration.integrate",
    "category": "method",
    "text": "integrate(x,y...)\n\nCompute numerical integral of y(x) from x=x[1] to x=x[end]. Return a scalar of the same type as the input. If not method is supplied, use TrapezdoialFast.\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [NumericalIntegration]\nOrder = [:type, :function]"
},

]}
