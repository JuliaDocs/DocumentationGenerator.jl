var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#CRlibm.jl-1",
    "page": "Readme",
    "title": "CRlibm.jl",
    "category": "section",
    "text": "(Image: Build Status)A Julia wrapper around the CRlibm library. This library provides Correctly-Rounded mathematical functions, as described on the library\'s home page:CRlibm, an efficient and proven correctly-rounded mathematical libraryCRlibm is a free mathematical library (libm) which provides:implementations of the double-precision C99 standard elementary functions,\ncorrectly rounded in the four IEEE-754 rounding modes,\nwith a comprehensive proof of both the algorithms used and their implementation,\nsufficiently efficient in average time, worst-case time, and memory consumption to replace existing libms transparently,CRlibm is distributed under the GNU Lesser General Public License (LGPL).This Julia wrapper is distributed under the MIT license."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "using CRlibmThe floating-point rounding mode must be set to RoundNearest for the library to work correctly; normally nothing needs to be done, since this is the default value:julia> rounding(Float64)\nRoundingMode{:Nearest}()The library provides correctly-rounded versions of elementary functions such as sin, and  exp (see below for a complete list). They are used as follows:julia> CRlibm.cos(0.5, RoundUp)\n0.8775825618903728\n\njulia> CRlibm.cos(0.5, RoundDown)\n0.8775825618903726\n\njulia> CRlibm.cos(0.5, RoundNearest)\n0.8775825618903728\n\njulia> cos(0.5)  # built-in\n0.8775825618903728\n\njulia> CRlibm.cos(1.6, RoundToZero)\n-0.029199522301288812\n\njulia> CRlibm.cos(1.6, RoundDown)\n-0.029199522301288815\n\njulia> CRlibm.cos(0.5)  # equivalent to `CRlibm.cos(0.5, RoundNearest)`\n0.8775825618903728Note that the functions are not exported, so the CRlibm. is necessary."
},

{
    "location": "#List-of-implemented-functions-1",
    "page": "Readme",
    "title": "List of implemented functions",
    "category": "section",
    "text": "All functions from CRlibm are wrapped, except the power function:exp, expm1\nlog, log1p, log2, log10\nsin, cos, tan\nasin, acos, atan\nsinh, cosh\nsinpi, cospi\ntanpi, atanpiSince v0.5 of CRlibm, no functions are exported.The available rounding modes are RoundNearest, RoundUp, RoundDown and RoundToZero."
},

{
    "location": "#What-is-correct-rounding?-1",
    "page": "Readme",
    "title": "What is correct rounding?",
    "category": "section",
    "text": "Suppose that we ask Julia to calculate the cosine of a number:julia> cos(0.5)\n0.8775825618903728using the built-in mathematics library, OpenLibm. The result is a floating-point number that is a very good approximation to the true value. However, we do not know if the result that Julia gives is below or above the true value, nor how far away it is.Correctly-rounded functions guarantee that when the result is not exactly representable as a floating-point number, the value returned is the next largest floating-point number, when rounding up, or the next smallest when rounding down. This is equivalent to doing the calculation in infinite precision and then performing the rounding."
},

{
    "location": "#Rationale-for-the-Julia-wrapper-1",
    "page": "Readme",
    "title": "Rationale for the Julia wrapper",
    "category": "section",
    "text": "The CRlibm library is state-of-the-art as regards correctly-rounded functions of Float64 arguments. It is required for our interval arithmetic library, ValidatedNumerics. Having gone to the trouble of wrapping it, it made sense to release it separately; for example, it could be used to test the quality of the OpenLibm functions."
},

{
    "location": "#Lacunae-1",
    "page": "Readme",
    "title": "Lacunae",
    "category": "section",
    "text": "CRlibm is missing a (guaranteed) correctly-rounded power function (x^y), since the fact that there are two arguments, instead of a single argument for functions such as sin, means that correct rounding is much harder; see e.g. reference [1]  here.[1] P. Kornerup, C. Lauter, V. Lefèvre, N. Louvet and J.-M. Muller Computing Correctly Rounded Integer Powers in Floating-Point Arithmetic ACM Transactions on Mathematical Software 37(1), 2010"
},

{
    "location": "#MPFR-as-an-alternative-to-CRlibm-1",
    "page": "Readme",
    "title": "MPFR as an alternative to CRlibm",
    "category": "section",
    "text": "As far as we are aware, the only alternative package to CRlibm is MPFR. This provides correctly-rounded functions for floating-point numbers of arbitrary precision, including the power function. However, it can be slow.MPFR is wrapped in base Julia in the BigFloat type. It can emulate double-precision floating point by setting the precision to 53 bits, and using setrounding:julia> setprecision(53)\n53\n\njulia> b = setrounding(BigFloat, RoundDown) do\n           a = parse(BigFloat, \"2.1\")\n           a^3\n       end\n9.2609999999999939\n\njulia> c = setrounding(BigFloat, RoundUp) do\n           a = parse(BigFloat, \"2.1\")\n           a^3\n       end\n9.2610000000000028\n"
},

{
    "location": "#Wrapping-MPFR-(BigFloat)-1",
    "page": "Readme",
    "title": "Wrapping MPFR (BigFloat)",
    "category": "section",
    "text": "MPFR (BigFloat) functions are extended with the same syntax with explicit rounding modes:julia> setprecision(64)\n64\n\njulia> CRlibm.exp(BigFloat(0.51), RoundDown)\n1.66529119494588632316\n\njulia> CRlibm.exp(BigFloat(0.51), RoundUp)\n1.66529119494588632327The function CRlibm.shadow_MPFR() can be called to redefine the functions that take floating-point arguments to also use the MPFR versions; this is automatic if the CRlibm library is not available."
},

{
    "location": "#Author-1",
    "page": "Readme",
    "title": "Author",
    "category": "section",
    "text": "David P. Sanders,Departamento de Física, Facultad de Ciencias, Universidad Nacional Autónoma de México (UNAM)"
},

{
    "location": "#Acknowledgements-1",
    "page": "Readme",
    "title": "Acknowledgements",
    "category": "section",
    "text": "Financial support is acknowledged from DGAPA-UNAM PAPIME grant PE-107114 and DGAPA-UNAM PAPIIT grant IN-117214."
},

{
    "location": "autodocs/#CRlibm.setup",
    "page": "Docstrings",
    "title": "CRlibm.setup",
    "category": "function",
    "text": "setup(use_MPFR=false)\n\nDefine correctly-rounded standard mathematical functions. (See CRlibm.functions for a list.)\n\nThe functions are not exported. Use e.g. CRlibm.sin(0.5, RoundDown).\n\nOptions:\n\nuse_MPFR: if true, the Float64 functions just wrap corresponding MPFR functionality (BigFloat).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CRlibm.wrap_MPFR-Tuple{}",
    "page": "Docstrings",
    "title": "CRlibm.wrap_MPFR",
    "category": "method",
    "text": "Define convenience functions like sin(x, RoundDown) for x::BigFloat\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [CRlibm]\nOrder = [:type, :function]"
},

]}
