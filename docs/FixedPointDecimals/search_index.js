var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#FixedPointDecimals-1",
    "page": "Readme",
    "title": "FixedPointDecimals",
    "category": "section",
    "text": "(Image: Travis Build Status) (Image: Appveyor Build Status) (Image: coveralls) (Image: codecov.io)Provides the fixed-point decimal type FixedDecimal allowing for exact representations of decimal numbers. These numbers are useful in financial calculations where interactions between decimal numbers are required to be exact.This library defines the type FixedDecimal{T <: Integer, f} as a subtype of Real. The parameter T is the underlying machine representation and f is the number of decimal places which can be stored.For example, FixedDecimal{Int8, 2} allows you to a decimal number with up to 2 fractional digits. All FixedDecimal{Int8, 2} numbers x must satisfy-1.28 = -128/10² ≤ x ≤ 127/10² = 1.27because the range of Int8 is from -128 to 127.In general FixedDecimal{T <: Integer, f} numbers y must satisfy:typemin(T)/10ᶠ ≤ y ≤ typemax(T)/10ᶠ"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "julia> using FixedPointDecimals\n\njulia> 2.2 / 10\n0.22000000000000003\n\njulia> FixedDecimal{Int,2}(2.2) / 10\nFixedDecimal{Int64,2}(0.22)\n\njulia> 0.1 + 0.2\n0.30000000000000004\n\njulia> FixedDecimal{Int,1}(0.1) + FixedDecimal{Int,1}(0.2)\nFixedDecimal{Int64,1}(0.3)"
},

{
    "location": "autodocs/#FixedPointDecimals.FixedDecimal",
    "page": "Docstrings",
    "title": "FixedPointDecimals.FixedDecimal",
    "category": "type",
    "text": "FixedDecimal{T <: Integer, f::Int}\n\nA fixed-point decimal type backed by integral type T, with f digits after the decimal point stored.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FixedPointDecimals._apply_exact_float-Union{Tuple{T}, Tuple{Any,Type{T},Union{Float16, Float32, Float64, BigFloat},Integer}} where T",
    "page": "Docstrings",
    "title": "FixedPointDecimals._apply_exact_float",
    "category": "method",
    "text": "_apply_exact_float(f, T, x::Real, i::Integer)\n\nCompute f(T, x, i)::T but avoiding possible loss of precision from an intermediate conversion of i to a floating point type by instead using a BigFloat with sufficient precision if necessary.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FixedPointDecimals._round_to_even-Union{Tuple{T}, Tuple{T,T,T}} where T<:Integer",
    "page": "Docstrings",
    "title": "FixedPointDecimals._round_to_even",
    "category": "method",
    "text": "_round_to_even(quotient, remainder, divisor)\n\nRound quotient + remainder / divisor to the nearest even integer, given that 0 ≤ remainder < divisor or 0 ≥ remainder > divisor. (This assumption is satisfied by the return value of fldmod in all cases, and the return value of divrem in cases where divisor is known to be positive.)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FixedPointDecimals.ceilmul",
    "page": "Docstrings",
    "title": "FixedPointDecimals.ceilmul",
    "category": "function",
    "text": "FixedPointDecimals.ceilmul(I, x, y) :: I\n\nCompute ceil(I, x * y), returning the result as type I. For floating point values, this function can be more accurate than ceil(x * y).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FixedPointDecimals.coefficient-Union{Tuple{Type{FixedDecimal{T,f}}}, Tuple{f}, Tuple{T}} where f where T",
    "page": "Docstrings",
    "title": "FixedPointDecimals.coefficient",
    "category": "method",
    "text": "coefficient(::Type{FD{T, f}}) -> T\n\nCompute 10^f as an Integer without overflow. Note that overflow will not occur for any constructable FD{T, f}.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FixedPointDecimals.floormul",
    "page": "Docstrings",
    "title": "FixedPointDecimals.floormul",
    "category": "function",
    "text": "FixedPointDecimals.floormul(I, x, y) :: I\n\nCompute floor(I, x * y), returning the result as type I. For floating point values, this function can be more accurate than floor(x * y).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FixedPointDecimals.max_exp10-Union{Tuple{Type{T}}, Tuple{T}} where T<:Integer",
    "page": "Docstrings",
    "title": "FixedPointDecimals.max_exp10",
    "category": "method",
    "text": "max_exp10(T)\n\nThe highest value of x which does not result in an overflow when evaluating T(10)^x. For types of T that do not overflow -1 will be returned.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FixedPointDecimals.required_precision-Tuple{Integer}",
    "page": "Docstrings",
    "title": "FixedPointDecimals.required_precision",
    "category": "method",
    "text": "required_precision(n::Integer)\n\nCompute the number of bits of precision needed to represent an integer exactly as a floating point number.\n\nThis is equivalent to counting the number of bits needed to represent the integer, excluding any trailing zeros.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FixedPointDecimals.truncmul",
    "page": "Docstrings",
    "title": "FixedPointDecimals.truncmul",
    "category": "function",
    "text": "FixedPointDecimals.truncmul(I, x, y) :: I\n\nCompute trunc(I, x * y), returning the result as type I. For floating point values, this function can be more accurate than trunc(x * y).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [FixedPointDecimals]\nOrder = [:type, :function]"
},

]}
