var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Format-1",
    "page": "Readme",
    "title": "Format",
    "category": "section",
    "text": "This package offers Python-style general formatting and c-style numerical formatting (for speed).Info Windows Linux & MacOS Package Evaluator CodeCov Coveralls\n[![][license-img]][license-url] [![][app-s-img]][app-s-url] [![][travis-s-img]][travis-url] [![][pkg-s-img]][pkg-s-url] [![][codecov-img]][codecov-url] [![][coverall-s-img]][coverall-s-url]\n[![][gitter-img]][gitter-url] [![][app-m-img]][app-m-url] [![][travis-m-img]][travis-url] [![][pkg-m-img]][pkg-m-url] [![][codecov-img]][codecov-url] [![][coverall-m-img]][coverall-m-url][license-img]:  http://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat [license-url]:  LICENSE.md[gitter-img]:   https://badges.gitter.im/Join%20Chat.svg [gitter-url]:   https://gitter.im/JuliaString/Lobby?utmsource=badge&utmmedium=badge&utm_campaign=pr-badge[travis-url]:   https://travis-ci.org/JuliaString/Format.jl [travis-s-img]: https://travis-ci.org/JuliaString/Format.jl.svg [travis-m-img]: https://travis-ci.org/JuliaString/Format.jl.svg?branch=master[app-s-url]:    https://ci.appveyor.com/project/ScottPJones/format-jl [app-m-url]:    https://ci.appveyor.com/project/ScottPJones/format-jl/branch/master [app-s-img]:    https://ci.appveyor.com/api/projects/status/9wb580eyjv4k3iej?svg=true [app-m-img]:    https://ci.appveyor.com/api/projects/status/9wb580eyjv4k3iej/branch/master?svg=true[pkg-s-url]:    http://pkg.julialang.org/?pkg=Format [pkg-m-url]:    http://pkg.julialang.org/?pkg=Format [pkg-s-img]:    http://pkg.julialang.org/badges/Format0.6.svg [pkg-m-img]:    http://pkg.julialang.org/badges/Format0.7.svg[codecov-url]:  https://codecov.io/gh/JuliaString/Format.jl [codecov-img]:  https://codecov.io/gh/JuliaString/Format.jl/branch/master/graph/badge.svg[coverall-s-url]: https://coveralls.io/github/JuliaString/Format.jl [coverall-m-url]: https://coveralls.io/github/JuliaString/Format.jl?branch=master [coverall-s-img]: https://coveralls.io/repos/github/JuliaString/Format.jl/badge.svg [coverall-m-img]: https://coveralls.io/repos/github/JuliaString/Format.jl/badge.svg?branch=master"
},

{
    "location": "#Getting-Started-1",
    "page": "Readme",
    "title": "Getting Started",
    "category": "section",
    "text": "This package is pure Julia.  It is now registered, so it can be added simply with Pkg.add(\"Format\"). It is forked off of Formatting.jl, and I try to keep the oldmaster branch up to date with the master branch of that, and cherry pick or port all necessary changes to Format).To start using the package, you can simply writeusing FormatThis package depends on Julia of version 0.6 or above, and. The package is MIT-licensed."
},

{
    "location": "#Python-style-Types-and-Functions-1",
    "page": "Readme",
    "title": "Python-style Types and Functions",
    "category": "section",
    "text": ""
},

{
    "location": "#Types-to-Represent-Formats-1",
    "page": "Readme",
    "title": "Types to Represent Formats",
    "category": "section",
    "text": "This package has two types FormatSpec and FormatExpr to represent a format specification.In particular, FormatSpec is used to capture the specification of a single entry. One can compile a format specification string into a FormatSpec instance asfspec = FormatSpec(\"d\")\nfspec = FormatSpec(\"<8.4f\")Please refer to Python\'s format specification language for details.FormatExpr captures a formatting expression that may involve multiple items. One can compile a formatting string into a FormatExpr instance asfe = FormatExpr(\"{1} + {2}\")\nfe = FormatExpr(\"{1:d} + {2:08.4e} + {3|>abs2}\")Please refer to Python\'s format string syntax for details.Note: If the same format is going to be applied for multiple times. It is more efficient to first compile it."
},

{
    "location": "#Formatted-Printing-1",
    "page": "Readme",
    "title": "Formatted Printing",
    "category": "section",
    "text": "One can use printfmt and printfmtln for formatted printing:printfmt(io, fe, args...)\nprintfmt(fe, args...)\nPrint given arguments using given format fe. Here fe can be a formatting string, an instance of FormatSpec or FormatExpr.\nExamples\n```julia   printfmt(\"{1:>4s} + {2:.2f}\", \"abc\", 12) # –> print(\" abc + 12.00\")   printfmt(\"{} = {:#04x}\", \"abc\", 12) # –> print(\"abc = 0x0c\") \nfs = FormatSpec(\"#04x\")   printfmt(fs, 12)   # –> print(\"0x0c\")\nfe = FormatExpr(\"{} = {:#04x}\")   printfmt(fe, \"abc\", 12)   # –> print(\"abc = 0x0c\")   ```\nNotes\nIf the first argument is a string, it will be first compiled into a FormatExpr, which implies that you can not use specification-only string in the first argument.\n```julia   printfmt(\"{1:d}\", 10)   # OK, \"{1:d}\" can be compiled into a FormatExpr instance   printfmt(\"d\", 10)       # Error, \"d\" can not be compiled into a FormatExpr instance                           # such a string to specify a format specification for single argument\nprintfmt(FormatSpec(\"d\"), 10)  # OK   printfmt(FormatExpr(\"{1:d}\", 10)) # OK   ```printfmtln(io, fe, args...)\nprintfmtln(fe, args...)\nSimilar to printfmt except that this function print a newline at the end."
},

{
    "location": "#Formatted-String-1",
    "page": "Readme",
    "title": "Formatted String",
    "category": "section",
    "text": "One can use pyfmt to format a single value into a string, or format to format one to multiple arguments into a string using an format expression.pyfmt(fspec, a)\nFormat a single value using a format specification given by fspec, where fspec can be either a string or an instance of FormatSpec.\nformat(fe, args...)\nFormat arguments using a format expression given by fe, where fe can be either a string or an instance of FormatSpec."
},

{
    "location": "#Difference-from-Python\'s-Format-1",
    "page": "Readme",
    "title": "Difference from Python\'s Format",
    "category": "section",
    "text": "At this point, this package implements a subset of Python\'s formatting language (with slight modification). Here is a summary of the differences:g and G for floating point formatting have not been supported yet. Please use f, e, or E instead.\nThe package currently provides default alignment, left alignment  and right alignment . Other form of alignment such as centered alignment ^ has not been supported yet.\nIn terms of argument specification, it supports natural ordering (e.g.  + ), explicit position (e.g. 1 + 2). It hasn\'t supported named arguments or fields extraction yet. Note that mixing these two modes is not allowed (e.g. 1 + ).\nThe package provides support for filtering (for explicitly positioned arguments), such as 1lowercase by allowing one to embed the  operator, which the Python counter part does not support."
},

{
    "location": "#C-style-functions-1",
    "page": "Readme",
    "title": "C-style functions",
    "category": "section",
    "text": "The c-style part of this package aims to get around the limitation that @sprintf has to take a literal string argument. The core part is basically a c-style print formatter using the standard @sprintf macro. It also adds functionalities such as commas separator (thousands), parenthesis for negatives, stripping trailing zeros, and mixed fractions."
},

{
    "location": "#Usage-and-Implementation-1",
    "page": "Readme",
    "title": "Usage and Implementation",
    "category": "section",
    "text": "The idea here is that the package compiles a function only once for each unique format string within the Format.* name space, so repeated use is faster. Unrelated parts of a session using the same format string would reuse the same function, avoiding redundant compilation. To avoid the proliferation of functions, we limit the usage to only 1 argument. Practical consideration would suggest that only dozens of functions would be created in a session, which seems manageable.Usageusing Format\n\nfmt = \"%10.3f\"\ns = cfmt( fmt, 3.14159 ) # usage 1. Quite performant. Easiest to switch to.\n\nfmtrfunc = generate_formatter( fmt ) # usage 2. This bypass repeated lookup of cached function. Most performant.\ns = fmtrfunc( 3.14159 )\n\ns = format( 3.14159, precision=3 ) # usage 3. Most flexible, with some non-printf options. Least performant."
},

{
    "location": "#Speed-1",
    "page": "Readme",
    "title": "Speed",
    "category": "section",
    "text": "cfmt: Speed penalty is about 20% for floating point and 30% for integers.If the formatter is stored and used instead (see the example using generate_formatter above), the speed penalty reduces to 10% for floating point and 15% for integers."
},

{
    "location": "#Commas-1",
    "page": "Readme",
    "title": "Commas",
    "category": "section",
    "text": "This package also supplements the lack of thousand separator e.g. \"%\'d\", \"%\'f\", \"%\'s\".Note: \"%\'s\" behavior is that for small enough floating point (but not too small), thousand separator would be used. If the number needs to be represented by \"%e\", no separator is used."
},

{
    "location": "#Flexible-format-function-1",
    "page": "Readme",
    "title": "Flexible format function",
    "category": "section",
    "text": "This package contains a run-time number formatter format function, which goes beyond the standard sprintf functionality.An example:s = format( 1234, commas=true ) # 1,234\ns = format( -1234, commas=true, parens=true ) # (1,234)The keyword arguments are (Bold keywards are not printf standard)width. Integer. Try to fit the output into this many characters. May not be successful.  Sacrifice space first, then commas.\nprecision. Integer. How many decimal places.\nleftjustified. Boolean\nzeropadding. Boolean\ncommas. Boolean. Thousands-group separator.\nsigned. Boolean. Always show +/- sign?\npositivespace. Boolean. Prepend an extra space for positive numbers? (so they align nicely with negative numbers)\nparens. Boolean. Use parenthesis instead of \"-\". e.g. (1.01) instead of -1.01. Useful in finance. Note that you cannot use signed and parens option at the same time.\nstripzeros. Boolean. Strip trailing \'0\' to the right of the decimal (and to the left of \'e\', if any ).\nIt may strip the decimal point itself if all trailing places are zeros.\nThis is true by default if precision is not given, and vice versa.\nalternative. Boolean. See # alternative form explanation in standard printf documentation\nconversion. length=1 string. Default is type dependent. It can be one of aAeEfFoxX. See standard printf documentation.\nmixedfraction. Boolean. If the number is rational, format it in mixed fraction e.g. 1_1/2 instead of 3/2\nmixedfractionsep. Default _\nfractionsep. Default /\nfractionwidth. Integer. Try to pad zeros to the numerator until the fractional part has this width\ntryden. Integer. Try to use this denominator instead of a smaller one. No-op if it\'d lose precision.\nsuffix. String. This strings will be appended to the output. Useful for units/%\nautoscale. Symbol, default :none. It could be :metric, :binary, or :finance.\n:metric implements common SI symbols for large and small numbers e.g. M, k, μ, n\n:binary implements common ISQ symbols for large numbers e.g. Ti, Gi, Mi, Ki\n:finance implements common finance/news symbols for large numbers e.g. b (billion), m (millions)See the test script for more examples."
},

{
    "location": "autodocs/#Format.fmt",
    "page": "Docstrings",
    "title": "Format.fmt",
    "category": "function",
    "text": "Creates a new FormatSpec by overriding the defaults and passes it to pyfmt\n\nOptionally width and precision can be passed positionally, after the value to be formatted.\n\nSome keyword arguments can be passed simply as symbols:\n\nSymbol            | Meaning\n------------------|------------------------------------------\n:ljust or :left   | Left justified, same as < for FormatSpec\n:rjust or :right  | Right justified, same as > for FormatSpec\n:zpad or :zeropad | Pad with 0s on left\n:ipre or :prefix  | Whether to prefix 0b, 0o, or 0x\n:commas           | Add commas every 3 digits\n\nAlso, keyword arguments can be given:\n\nKeyword | Type | Meaning                   | Default\n--------|------|---------------------------|-------\nfill    | Char | Fill character            | \' \'\nalign   | Char | Alignment character       | \'\\0\'\nsign    | Char | Sign character            | \'-\'\nwidth   | Int  | Field width               | -1, i.e. ignored\nprec    | Int  | Floating Precision        | -1, i.e. ignored\nipre    | Bool | Use 0b, 0o, or 0x prefix? | false\nzpad    | Bool | Pad with 0s on left       | false\ntsep    | Bool | Use thousands separator?  | false\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Format]\nOrder = [:type, :function]"
},

]}
