var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#NumericalIntegration-1",
    "page": "Readme",
    "title": "NumericalIntegration",
    "category": "section",
    "text": "(Image: Build Status)(Image: Coverage Status)(Image: codecov.io)This is a simple package to provide functionality for numerically integrating presampled data (meaning you can\'t choose arbitrary nodes). If you have the ability to evaluate your integrand at arbitrary points, please consider using better tools for the job (such as the excellent FastGaussQuadrature.jl).Do note that while the code is trivial, it has not been extensively tested and does not focus on numerical precision. Issues, suggestions and pull requests are welcome."
},

{
    "location": "#Example-usage-1",
    "page": "Readme",
    "title": "Example usage",
    "category": "section",
    "text": "# setup some data\nx = collect(-π : π/1000 : π)\ny = sin.(x)\n\n# integrate using the default TrapezoidalFast method\nintegrate(x, y)\n\n# integrate using a specific method\nintegrate(x, y, SimpsonEven())\n\n# compute cumulative integral\nY = cumul_integrate(x, y)\n\n# compute cumulative integral for each column of an array\nz = [sin.(x) cos.(x) exp.(x/pi)]\nZ = cumul_integrate(x, z)\n\n# compute cumulative integral for each line of an array\nzp = permutedims(z) \nZP = cumul_integrate(x, zp, dims=1)\nThe currently available methods are:Trapezoidal (default)\nTrapezoidalEven\nTrapezoidalFast\nTrapezoidalEvenFast\nSimpsonEven\nSimpsonEvenFast\nRombergEvenOnly Trapezoidal methods are available for cumulative integrals.All methods containing \"Even\" in the name assume evenly spaced data. All methods containing \"Fast\" omit basic correctness checks and focus on performance. Consequently, the fast methods will segfault or produce incorrect results if you supply incorrect data (vectors of different lengths, etc.). RombergEven needs a power of 2 + 1 points (so 9, 17, 33, 65, 129, 257, 513, 1025...) evenly spaced for it to work. Useful when control over accuracy is needed. "
},

{
    "location": "autodocs/#NumericalIntegration.cumul_integrate-Tuple{AbstractArray{T,1} where T,AbstractArray{T,1} where T,TrapezoidalEvenFast}",
    "page": "Docstrings",
    "title": "NumericalIntegration.cumul_integrate",
    "category": "method",
    "text": "cumul_integrate(x::AbstractVector, y::AbstractVector, ::TrapezoidalEvenFast)\n\nUse Trapezoidal rule, assuming evenly spaced vector x. Unsafe method: no bound checking.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NumericalIntegration.cumul_integrate-Tuple{AbstractArray{T,1} where T,AbstractArray{T,1} where T,TrapezoidalEven}",
    "page": "Docstrings",
    "title": "NumericalIntegration.cumul_integrate",
    "category": "method",
    "text": "cumul_integrate(x::AbstractVector, y::AbstractVector, ::TrapezoidalEven)\n\nUse Trapezoidal rule, assuming evenly spaced vector x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NumericalIntegration.cumul_integrate-Tuple{AbstractArray{T,1} where T,AbstractArray{T,1} where T,TrapezoidalFast}",
    "page": "Docstrings",
    "title": "NumericalIntegration.cumul_integrate",
    "category": "method",
    "text": "cumul_integrate(x::AbstractVector, y::AbstractVector, ::TrapezoidalFast)\n\nUse Trapezoidal rule. Unsafe method: no bound checking. This is the default when no method is supplied.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NumericalIntegration.cumul_integrate-Tuple{AbstractArray{T,1} where T,AbstractArray{T,1} where T,Trapezoidal}",
    "page": "Docstrings",
    "title": "NumericalIntegration.cumul_integrate",
    "category": "method",
    "text": "cumul_integrate(x::AbstractVector, y::AbstractVector, ::Trapezoidal)\n\nUse Trapezoidal rule.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NumericalIntegration.cumul_integrate-Tuple{AbstractArray{T,1} where T,AbstractArray{T,2} where T,IntegrationMethod}",
    "page": "Docstrings",
    "title": "NumericalIntegration.cumul_integrate",
    "category": "method",
    "text": "cumul_integrate(x::AbstractVector, y::AbstractMatrix, method; dims=2)\n\nWhen y is an array, compute integral along each dimension specified by dims (default 2: columns)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NumericalIntegration.cumul_integrate-Tuple{Any,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "NumericalIntegration.cumul_integrate",
    "category": "method",
    "text": "cumul_integrate(x,y...)\n\nCompute cumulative numerical integral of y(x) from x=x[1] to x=x[end]. Return a vector with elements of the same type as the input. If not method is supplied, use TrapezdoialFast.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NumericalIntegration.integrate-Tuple{AbstractArray{T,1} where T,AbstractArray{T,1} where T,SimpsonEvenFast}",
    "page": "Docstrings",
    "title": "NumericalIntegration.integrate",
    "category": "method",
    "text": "integrate(x::AbstractVector, y::AbstractVector, ::SimpsonEven)\n\nUse Simpson\'s rule, assuming evenly spaced vector x.  Unsafe method: no bound checking.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NumericalIntegration.integrate-Tuple{AbstractArray{T,1} where T,AbstractArray{T,1} where T,SimpsonEven}",
    "page": "Docstrings",
    "title": "NumericalIntegration.integrate",
    "category": "method",
    "text": "integrate(x::AbstractVector, y::AbstractVector, ::SimpsonEven)\n\nUse Simpson\'s rule, assuming evenly spaced vector x. \n\n\n\n\n\n"
},

{
    "location": "autodocs/#NumericalIntegration.integrate-Tuple{AbstractArray{T,1} where T,AbstractArray{T,1} where T,TrapezoidalEvenFast}",
    "page": "Docstrings",
    "title": "NumericalIntegration.integrate",
    "category": "method",
    "text": "integrate(x::AbstractVector, y::AbstractVector, ::TrapezoidalEvenFast)\n\nUse Trapezoidal rule, assuming evenly spaced vector x. Unsafe method: no bound checking.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NumericalIntegration.integrate-Tuple{AbstractArray{T,1} where T,AbstractArray{T,1} where T,TrapezoidalEven}",
    "page": "Docstrings",
    "title": "NumericalIntegration.integrate",
    "category": "method",
    "text": "integrate(x::AbstractVector, y::AbstractVector, ::TrapezoidalEven)\n\nUse Trapezoidal rule, assuming evenly spaced vector x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NumericalIntegration.integrate-Tuple{AbstractArray{T,1} where T,AbstractArray{T,1} where T,TrapezoidalFast}",
    "page": "Docstrings",
    "title": "NumericalIntegration.integrate",
    "category": "method",
    "text": "integrate(x::AbstractVector, y::AbstractVector, ::TrapezoidalFast)\n\nUse Trapezoidal rule. Unsafe method: no bound checking. This is the default when no method is supplied.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NumericalIntegration.integrate-Tuple{AbstractArray{T,1} where T,AbstractArray{T,1} where T,Trapezoidal}",
    "page": "Docstrings",
    "title": "NumericalIntegration.integrate",
    "category": "method",
    "text": "integrate(x::AbstractVector, y::AbstractVector, ::Trapezoidal)\n\nUse Trapezoidal rule.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NumericalIntegration.integrate-Tuple{AbstractArray{T,1} where T,AbstractArray{T,2} where T,IntegrationMethod}",
    "page": "Docstrings",
    "title": "NumericalIntegration.integrate",
    "category": "method",
    "text": "integrate(x::AbstractVector, y::AbstractMatrix, method; dims=2)\n\nWhen y is an array, compute integral along dimension specified by dims (default 2: columns).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NumericalIntegration.integrate-Tuple{Any,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "NumericalIntegration.integrate",
    "category": "method",
    "text": "integrate(x,y...)\n\nCompute numerical integral of y(x) from x=x[1] to x=x[end]. Return a scalar of the same type as the input. If not method is supplied, use TrapezdoialFast.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [NumericalIntegration]\nOrder = [:type, :function]"
},

]}
