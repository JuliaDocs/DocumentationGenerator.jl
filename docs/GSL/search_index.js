var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#GSL.jl-1",
    "page": "Readme",
    "title": "GSL.jl",
    "category": "section",
    "text": "(Image: Travis Build Status) (Image: Appveyor Build status) (Image: codecov.io)Julia interface to the GNU Scientific Library (GSL)Jiahao ChenLicensed under GPLv3Tested with libgsl 1.16 and Julia 0.6 - 1.0"
},

{
    "location": "#How-to-install-1",
    "page": "Readme",
    "title": "How to install",
    "category": "section",
    "text": "In Julia 0.6:Pkg.add(\"GSL\")In Julia 0.7 and up:]add GSL"
},

{
    "location": "#How-to-use-1",
    "page": "Readme",
    "title": "How to use",
    "category": "section",
    "text": "This package aims to provide wrappers to all documented functions and structs in the GSL manual. For GSL functions, the gsl_ prefix is not necessary in the name.  More information is available below.Example:    using GSL\n    x = randn()\n    sf_hyperg_U(-1.0, -1.0, x) - (1 + x)\n    #Answer: 0.0Translated examples from the GSL documentation are available in examples/."
},

{
    "location": "#Convenience-methods-provided-1",
    "page": "Readme",
    "title": "Convenience methods provided",
    "category": "section",
    "text": ""
},

{
    "location": "#Roots-of-polynomials-1",
    "page": "Readme",
    "title": "Roots of polynomials",
    "category": "section",
    "text": "    roots{T<:Real}(c::Vector{T}, realOnly::Bool) -> Vector{Complex128}Finds the roots of the polynomial with real coefficients c [ 0 = \\sum{i=1}^{length(c)} ci z^{i-1} ] The coefficients are returned in ascending order of the power If the degree of the polynomial is <= 3, then realOnly=true finds only the real roots."
},

{
    "location": "#Special-functions-1",
    "page": "Readme",
    "title": "Special functions",
    "category": "section",
    "text": ""
},

{
    "location": "#Hypergeometric-functions-1",
    "page": "Readme",
    "title": "Hypergeometric functions",
    "category": "section",
    "text": "    hypergeom(a, b, x::Float64) -> Float64Computes the appropriate hypergeometric <sub>p</sub>F<sub>q</sub> function, where p and q are the lengths of the input vectors a and b respectively. Singleton a and/or b may be specified as scalars, and length-0 a and/or b may be input as simply []. Supported values of (p, q) are (0, 0), (0, 1), (1, 1), (2, 0) and (2, 1). This only calls the floating-point versions of the GSL functions gsl_sf_hyperg_?F? (GSL manual, Section 7.24)    hypergeom_e(a, b, x::Float64) -> (Float64, Float64)An error-estimating version of hypergeom."
},

{
    "location": "#Test-functions-1",
    "page": "Readme",
    "title": "Test functions",
    "category": "section",
    "text": "    @sf_test(sf, args...)Macro to help test equality of a function and its error-propagating variant. Requires Test. Example:    x = randn()\n    @eval @sf_test sf_dawson $x"
},

{
    "location": "#Current-status-1",
    "page": "Readme",
    "title": "Current status",
    "category": "section",
    "text": ""
},

{
    "location": "#What-is-available-1",
    "page": "Readme",
    "title": "What is available",
    "category": "section",
    "text": "Functions: all except the ones described below. Functions have the gsl_ prefix stripped.\nMost special functions: All except for the following categories:\nSome array-valued functions sf_*_array\nAvailable:  sf_bessel_*_array, sf_gegenpoly_array.\nNot available: all others. The wrappers do not currently work.\nNot available: sf_*_e10_e that return the sf_result_e10 struct. (Currently returns bus error.)\nAll documented gsl_* structs - These do NOT have the gsl_ prefix stripped.\nGSL_* constants: strip GSL_ and GSL_CONST_ prefixes\nGSL_* macros: Most available but untested."
},

{
    "location": "#What-is-not-available-1",
    "page": "Readme",
    "title": "What is not available",
    "category": "section",
    "text": "GSL\'s BLAS and CBLAS wrappers blas_*, cblas_*. Use Julia\'s interface instead.\nData I/O functions, such as *_fprintf and *_fscanf. Work in progress. Wrappers to these functions exist but most likely won\'t work\nRow and column views of matrices, matrix_row* and matrix_column* (Sec. 8.4.6)\nGSL_* macros:\nCOMPLEX_AT, COMPLEX_FLOAT_AT, COMPLEX_LONG_DOUBLE_AT\nSF_RESULT_SET and others in gsl_sf_result.h\nSET_COMPLEX, SET_REAL, SET_IMAG, SET_COMPLEX_PACKED"
},

{
    "location": "#Current-tests-1",
    "page": "Readme",
    "title": "Current tests",
    "category": "section",
    "text": "Special functions\nBasic tests comparing equality of basic and error-propagating special functions\nSome identity tests for hypergeometric functions\nAvailable but untested:\nsf_bessel_sequence_Jnu_e, sf_bessel_Jnu\nsf_coulomb_CL_e, sf_coulomb_CL_e\nsf_coupling_6j, sf_elljac_e\nMathieu Functions (Section 7.26). (Needs convenience function)\nTrigonometric Functions for Complex Arguments (Section 7.31)\nConversion Functions (Section 7.31.4)\nRestriction Functions (Section 7.31.5)\nTrigonometric Functions With Error Estimates (Section 7.31.6)\nAll other functions are untested\nAll macros are untested"
},

{
    "location": "#How-you-can-help-1",
    "page": "Readme",
    "title": "How you can help",
    "category": "section",
    "text": "The wrappers are automatically generated using util/makewrapper.py.Test function wrappers for correctness.\nWrite convenience methods to further wrap the function calls with a Julia- friendly syntax."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [GSL]\nOrder = [:type, :function]"
},

]}
