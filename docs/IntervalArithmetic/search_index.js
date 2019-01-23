var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Package",
    "title": "Package",
    "category": "page",
    "text": ""
},

{
    "location": "#IntervalArithmetic.jl-1",
    "page": "Package",
    "title": "IntervalArithmetic.jl",
    "category": "section",
    "text": "IntervalArithmetic.jl is a Julia package for performing Validated Numerics in Julia, i.e. rigorous computations with finite-precision floating-point arithmetic.All calculations are carried out using interval arithmetic: all quantities are treated as intervals, which are propagated throughout a calculation. The final result is an interval that is guaranteed to contain the correct result, starting from the given initial data.The aim of the package is correctness over speed, although performance considerations are also taken into account."
},

{
    "location": "#Authors-1",
    "page": "Package",
    "title": "Authors",
    "category": "section",
    "text": "Luis Benet, Instituto de Ciencias Físicas, Universidad Nacional Autónoma de México (UNAM)\nDavid P. Sanders, Departamento de Física, Facultad de Ciencias, Universidad Nacional Autónoma de México (UNAM)"
},

{
    "location": "#Contributors-1",
    "page": "Package",
    "title": "Contributors",
    "category": "section",
    "text": "Oliver Heimlich\nNikolay Kryukov\nJohn Verzani"
},

{
    "location": "#Installation-1",
    "page": "Package",
    "title": "Installation",
    "category": "section",
    "text": "To install the package, from within Julia dojulia> Pkg.add(\"IntervalArithmetic\")"
},

{
    "location": "#Contents-1",
    "page": "Package",
    "title": "Contents",
    "category": "section",
    "text": "Pages = [\"usage.md\",\n    \"intro.md\",\n    \"decorations.md\",\n    \"multidim.md\",\n    \"rounding.md\",\n    \"api.md\"\n    ]"
},

{
    "location": "#Bibliography-1",
    "page": "Package",
    "title": "Bibliography",
    "category": "section",
    "text": "Validated Numerics: A Short Introduction to Rigorous Computations, W. Tucker, Princeton University Press (2010)\nIntroduction to Interval Analysis, R.E. Moore, R.B. Kearfott & M.J. Cloud, SIAM (2009)"
},

{
    "location": "#Related-packages-1",
    "page": "Package",
    "title": "Related packages",
    "category": "section",
    "text": "MPFI.jl, a Julia wrapper around the MPFI C library, a multiple-precision interval arithmetic library based on MPFR\nIntervals.jl, an alternative implementation of basic interval functions.\nUnums.jl, an implementation of interval arithmetic with variable precision (\"ubounds\")"
},

{
    "location": "#Acknowledgements-1",
    "page": "Package",
    "title": "Acknowledgements",
    "category": "section",
    "text": "This project was developed in a masters\' course in the postgraduate programs in Physics and in Mathematics at UNAM during the second semester of 2013 and the first semester of 2015. We thank the participants of the courses for putting up with the half-baked material and contributing energy and ideas.Financial support is acknowledged from DGAPA-UNAM PAPIME grants PE-105911 and PE-107114, and DGAPA-UNAM PAPIIT grant IN-117214. LB acknowledges support through a Cátedra Marcos Moshinsky (2013). DPS acknowledges a sabbatical fellowship from CONACYT and thanks Alan Edelman and the Julia group at MIT for hosting his sabbatical visit."
},

{
    "location": "intro/#",
    "page": "Interval Arithmetic",
    "title": "Interval Arithmetic",
    "category": "page",
    "text": ""
},

{
    "location": "intro/#Introduction-to-Interval-Arithmetic-1",
    "page": "Interval Arithmetic",
    "title": "Introduction to Interval Arithmetic",
    "category": "section",
    "text": "The basic idea in Interval Arithmetic is to calculate with entire sets of real numbers, of which the simplest type are closed intervals ab = x in mathbbR a le x le b .We define arithmetic operations and functions to act on intervals, in such a way that the result of the calculation is a new interval that is guaranteed to contain the true range of the function.For example, for monotone functions like exp, we defineexp([a, b]) := [exp(a), exp(b)]For non-monotone functions, like the squaring function, it is more complicated:[a, b]^2 := [a^2, b^2]  if 0 < a < b\n          = [0, max(a^2, b^2)]  if a < 0 < b\n          = [b^2, a^2] if a < b < 0We also have to round the lower endpoint down and the upper endpoint up to get guaranteed containment of the true result, since we are using floating-point arithmetic.For more information on how different functions behave in Interval Arithmetic, refer to Interval ArithmeticOnce we have done this for all basic functions, we can define a complicated Julia function likef(x) = sin(3x^2 - 2 cos(1/x))and feed an interval in. Since at each step of the process, the result is an interval that is guaranteed to contain the range, the whole function has the same property.For example,using IntervalArithmetic\n\njulia> using IntervalArithmetic\n\njulia> f(x) = x^2 - 2\nf (generic function with 1 method)\n\njulia> X = 3..4\n[3, 4]\n\njulia> f(X)\n[7, 14]Since f(X) does not contain 0, the true range of the function f over the set X is guaranteed not to contain 0, and hence we haveTheorem: The function f has no root in the interval 34.This theorem has been obtained using just floating-point calculations!Further, we can even extend this to semi-infinite intervals:julia> f(3..∞)\n[7, ∞]Thus we have excluded the entire domain [3, ∞) from possibly containing roots of f.To move beyond just excluding regions and to actually guaranteeing existence and uniqueness for smooth functions, we use an interval version of the Newton method, which is described a bit here."
},

{
    "location": "construction/#",
    "page": "Constructing intervals",
    "title": "Constructing intervals",
    "category": "page",
    "text": ""
},

{
    "location": "construction/#Constructing-intervals-1",
    "page": "Constructing intervals",
    "title": "Constructing intervals",
    "category": "section",
    "text": "Constructing an interval is the most basic operation in the library. There are several methods to construct intervals listed below.Note that a valid interval [a, b] must have a ≤ b.interval(x)\ninterval(x, y)\nThis is the most fundamental way to build an interval for a user. It accepts one or two floating-point values and constructs the resulting interval with lower and upper endpoints exactly equal to those floating-point values, checking that the resulting interval is valid:  \n\njulia> using IntervalArithmetic\n\njulia> @format full  # print out literal interval values in full\nDisplay parameters:\n- format: full\n- decorations: false\n- significant figures: 6\n\njulia> interval(0.1)\nInterval(0.1, 0.1)\n\njulia> interval(0.1, 0.2)\nInterval(0.1, 0.2)\n\njulia> interval(3.1f0)\nInterval(3.1, 3.1)\n\njulia> typeof(ans)\nIntervalArithmetic.Interval{Float32}\n\njulia> interval(Inf)\nERROR: ArgumentError: `[Inf, Inf]` is not a valid interval. Need `a ≤ b` to construct `interval(a, b)`.\n\njulia> interval(3, 2)\nERROR: ArgumentError: `[3, 2]` is not a valid interval. Need `a ≤ b` to construct `interval(a, b)`.\nNote that interval does not perform any rounding of the end-points. E.g.\njulia> x = interval(0.1)\nInterval(0.1, 0.1)\n\njulia> big(x)\nInterval(1.000000000000000055511151231257827021181583404541015625000000000000000000000000e-01, 1.000000000000000055511151231257827021181583404541015625000000000000000000000000e-01)\n\njulia> big\"0.1\" ∈ x\nfalse\nSee here for more on the need for rounding.x..y\nThis is a convenient syntax, and tries to be \"clever\" by interpreting the values as user-friendly numbers, rather than strict floating-point, and performing directed rounding automatically to give an interval that is guaranteed to contain the corresponding true real numbers. For example:\njulia> 0.1..0.2\nInterval(0.09999999999999999, 0.2)\n\njulia> big(ans)\nInterval(9.999999999999999167332731531132594682276248931884765625000000000000000000000000e-02, 2.000000000000000111022302462515654042363166809082031250000000000000000000000000e-01)\nSo 0.1..0.2 contains both the true real number 1/10 and 2/10.\nTo do so, floating-point values like 0.1 are treated as the smallest interval containing the true real number 1/10, given by the unexported atomic function:\njulia> IntervalArithmetic.atomic(Interval{Float64}, 0.1)\nInterval(0.09999999999999999, 0.1)\n\njulia> 0.1..0.1\nInterval(0.09999999999999999, 0.1)\nm ± r\nThe ± operator (typed as \\pm<TAB>) creates the interval with midpoint m and radius r, and is equivalent to (m - r) .. (m + r):\njulia> 1 ± 0.1\nInterval(0.8999999999999999, 1.1)\n@interval expr\nThe @interval macro takes a Julia expression and calculates an interval that is guaranteed to contain the true result of the calculation, treating literals in the same way as the .. operator, e.g.\njulia> x = @interval sin(0.1) + cos(0.2)\nInterval(1.0798999944880696, 1.07989999448807)\n\njulia> sin(big\"0.1\") + cos(big\"0.2\") ∈ x\ntrueInterval(x)\nInterval(x1, x2)\nInterval is the underlying interval constructor. Since v0.12 of the package, however, for efficiency reasons this performs no tests on the validity of the interval, and allows invalid intervals to be created. As a result, we recommend that this should not be used in user code; it should only be used in library functions which guarantee that the interval is already of the correct form.\nFor example, the following creates an invalid interval which will cause problems later:\njulia> Interval(3, 2)  # do *not* do this\n[3, 2]"
},

{
    "location": "usage/#",
    "page": "Basic usage",
    "title": "Basic usage",
    "category": "page",
    "text": ""
},

{
    "location": "usage/#Basic-usage-1",
    "page": "Basic usage",
    "title": "Basic usage",
    "category": "section",
    "text": "The basic elements of the package are intervals, i.e. sets of real numbers (possibly including pm infty) of the forma b =  a le x le b  subseteq mathbbR"
},

{
    "location": "usage/#Creating-intervals-1",
    "page": "Basic usage",
    "title": "Creating intervals",
    "category": "section",
    "text": "Intervals are created using the @interval macro, which takes one or two expressions:julia> using IntervalArithmetic\n\njulia> a = @interval(1)\n[1, 1]\n\njulia> typeof(ans)\nIntervalArithmetic.Interval{Float64}\n\njulia> b = @interval(1, 2)\n[1, 2]The objects returned are of the parameterized type Interval, the basic object in the package. By default, Interval objects contain Float64s, but the library also allows using other types such as Rationals and BigFloats; for example:julia> @biginterval(1, 2)\n[1, 2]₂₅₆\n\njulia> showfull(ans)\nInterval(1.000000000000000000000000000000000000000000000000000000000000000000000000000000, 2.000000000000000000000000000000000000000000000000000000000000000000000000000000)The constructor of the Interval type may be used directly, but this is generally not recommended, for the following reason:julia> a = Interval(0.1, 0.3)\n[0.1, 0.3]\n\njulia> b = @interval(0.1, 0.3)\n[0.0999999, 0.300001]What is going on here?Due to the way floating-point arithmetic works, the interval a created directly by the constructor turns out to contain neither the true real number 0.1, nor 0.3, since the floating point number associated to 0.1 is actually rounded up, whereas the one associated to 0.3 is rounded down. The @interval macro, however, uses directed rounding to guarantee that the true 0.1 and 0.3 are included in the result.Behind the scenes, the [@interval(@ref)] macro rewrites the expression(s) passed to it, replacing the literals (0.1, 1, etc.) by calls to create correctly-rounded intervals, handled by the convert function.This allows us to write, for examplejulia> @interval sin(0.1) + cos(0.2)\n[1.07989, 1.0799]which is equivalent tojulia> sin(@interval(0.1)) + cos(@interval(0.2))\n[1.07989, 1.0799]This can be used together with user-defined functions:julia> f(x) = 2x\nf (generic function with 1 method)\n\njulia> f(@interval(0.1))\n[0.199999, 0.200001]\n\njulia> @interval f(0.1)\n[0.199999, 0.200001]"
},

{
    "location": "usage/#\\pi-1",
    "page": "Basic usage",
    "title": "\\pi",
    "category": "section",
    "text": "You can create correctly-rounded intervals containing \\pi:julia> @interval(pi)\n[3.14159, 3.1416]and embed it in expressions:julia> @interval(3*pi/2 + 1)\n[5.71238, 5.71239]\n\njulia> @interval 3π/2 + 1\n[5.71238, 5.71239]"
},

{
    "location": "usage/#Constructing-intervals-1",
    "page": "Basic usage",
    "title": "Constructing intervals",
    "category": "section",
    "text": "Intervals may be constructed using rationals:julia> @interval(1//10)\n[0.0999999, 0.100001]Real literals are handled by internally converting them to rationals (using the Julia function rationalize). This gives a result that contains the computer\'s \"best guess\" for the real number the user \"had in mind\":julia> @interval(0.1)\n[0.0999999, 0.100001]If you instead know which exactly-representable floating-point number a you need and really want to make a thin interval, i.e., an interval of the form [a, a], containing precisely one float, then you can use the Interval constructor directly:julia> a = Interval(0.1)\n[0.1, 0.100001]\n\njulia> showfull(a)\nInterval(0.1, 0.1)Here, the showfull function shows the internal representation of the interval, in a reproducible form that may be copied and pasted directly. It uses Julia\'s internal function (which, in turn, uses the so-called Grisu algorithm) to show exactly as many digits are required to give an unambiguous floating-point number.Strings may be used inside @interval:julia> @interval \"0.1\"*2\n[0.199999, 0.200001]\n\njulia> @biginterval \"0.1\"*2\n[0.199999, 0.200001]₂₅₆\n\njulia> showfull(ans)\nInterval(1.999999999999999999999999999999999999999999999999999999999999999999999999999983e-01, 2.000000000000000000000000000000000000000000000000000000000000000000000000000004e-01)\nStrings in the form of intervals may also be used:julia> @interval \"[1.2, 3.4]\"\n[1.19999, 3.40001]Intervals can be created from variables:julia> a = 3.6\n3.6\n\njulia> b = @interval(a)\n[3.59999, 3.60001]The upper and lower bounds of the interval may be accessed using the fields lo and hi:julia> b.lo\n3.5999999999999996\n\njulia> b.hi\n3.6The diameter (length) of an interval is obtained using diam(b); for numbers that cannot be represented exactly in base 2 (i.e., whose binary expansion is infinite or exceeds the current precision),  the diameter of intervals created by @interval with a single argument corresponds to the local machine epsilon (eps) in the :narrow interval-rounding mode:julia> diam(b)\n4.440892098500626e-16\n\njulia> eps(b.lo)\n4.440892098500626e-16You can use additional syntax for creating intervals more easily. The for example, the .. operator is equivalent to using the macro:julia> 0.1..0.3\n[0.0999999, 0.300001]and the @I_str string macro:julia> I\"3.1\"\n[3.09999, 3.10001]\n\njulia> I\"[3.1, 3.2]\"\n[3.09999, 3.20001]You can also use the ± operator:julia> 1.5 ± 0.1\n[1.39999, 1.60001]"
},

{
    "location": "usage/#Arithmetic-1",
    "page": "Basic usage",
    "title": "Arithmetic",
    "category": "section",
    "text": "Basic arithmetic operations (+, -, *, /, ^) are defined for pairs of intervals in a standard way (see, e.g., the book by Tucker): the result is the smallest interval containing the result of operating with each element of each interval. That is, for two intervals X and Y and an operation \\bigcirc, we define the operation on the two intervals byX bigcirc Y =  x bigcirc y x in X text and  y in Y Again, directed rounding is used if necessary.For example:julia> a = @interval(0.1, 0.3)\n[0.0999999, 0.300001]\n\njulia> b = @interval(0.3, 0.6)\n[0.299999, 0.600001]\n\njulia> a + b\n[0.399999, 0.900001]However, subtraction of two intervals gives an initially unexpected result, due to the above definition:julia> a = @interval(0, 1)\n[0, 1]\n\njulia> a - a\n[-1, 1]"
},

{
    "location": "usage/#Changing-the-precision-1",
    "page": "Basic usage",
    "title": "Changing the precision",
    "category": "section",
    "text": "By default, the @interval macro creates intervals of Float64s. This may be changed globally using the setprecision function:julia> @interval 3π/2 + 1\n[5.71238, 5.71239]\n\njulia> showfull(ans)\nInterval(5.71238898038469, 5.712388980384691)\n\njulia> setprecision(Interval, 256)\n256\n\njulia> @interval 3π/2 + 1\n[5.71238, 5.71239]₂₅₆\n\njulia> showfull(ans)\nInterval(5.712388980384689857693965074919254326295754099062658731462416888461724609429262, 5.712388980384689857693965074919254326295754099062658731462416888461724609429401)The subscript 256 at the end denotes the precision.To change back to Float64s, usejulia> setprecision(Interval, Float64)\nFloat64\n\njulia> @interval(pi)\n[3.14159, 3.1416]To check which mode is currently set, usejulia> precision(Interval)\n(Float64, 256)The result is a tuple of the type (currently Float64 or BigFloat) and the current BigFloat precision.Note that the BigFloat precision is set internally by setprecision(Interval). You should not use setprecision(BigFloat) directly,   since the package carries out additional steps to ensure internal consistency of operations involving π, in particular trigonometric functions."
},

{
    "location": "usage/#Elementary-functions-1",
    "page": "Basic usage",
    "title": "Elementary functions",
    "category": "section",
    "text": "The main elementary functions are implemented, for both Interval{Float64} and Interval{BigFloat}.The functions for Interval{Float64} internally use routines from the correctly-rounded CRlibm library where possible, i.e. for the following functions defined in that library:exp, expm1\nlog, log1p, log2, log10\nsin, cos, tan\nasin, acos, atan\nsinh, coshOther functions that are implemented for Interval{Float64} internally convert to an Interval{BigFloat}, and then use routines from the MPFR library (BigFloat in Julia):^\nexp2, exp10\natan, atanhNote, in particular, that in order to obtain correct rounding for the power function (^), intervals are converted to and from BigFloat; this implies a significant slow-down in this case.Examples:julia> a = @interval(1)\n[1, 1]\n\njulia> sin(a)\n[0.84147, 0.841471]\n\njulia> cos(cosh(a))\n[0.0277121, 0.0277122]julia> setprecision(Interval, 53)\n53\n\njulia> sin(@interval(1))\n[0.84147, 0.841471]₅₃\n\njulia> @interval sin(0.1) + cos(0.2)\n[1.07989, 1.0799]₅₃julia> setprecision(Interval, 128)\n128\n\njulia> @interval sin(1)\n[0.84147, 0.841471]₁₂₈"
},

{
    "location": "usage/#Interval-rounding-modes-1",
    "page": "Basic usage",
    "title": "Interval rounding modes",
    "category": "section",
    "text": "By default, the directed rounding used corresponds to using the RoundDown and RoundUp rounding modes when performing calculations; this gives the narrowest resulting intervals, and is set byjulia> setrounding(Interval, :slow)\n:slowAn alternative rounding method is to perform calculations using the (standard) RoundNearest rounding mode, and then widen the result by one machine epsilon in each direction using prevfloat and nextfloat. This is achived byjulia> setrounding(Interval, :accurate);\nIt generally results in wider intervals, but seems to be significantly faster."
},

{
    "location": "usage/#Display-modes-1",
    "page": "Basic usage",
    "title": "Display modes",
    "category": "section",
    "text": "There are several useful output representations for intervals, some of which we have already touched on. The display is controlled globally by the setformat function, which has the following options, specified by keyword arguments (type ?setformat to get help at the REPL):format: interval output format\n:standard: output of the form [1.09999, 1.30001], rounded to the current number of significant figures\n:full: output of the form Interval(1.0999999999999999, 1.3), as in the showfull function\n:midpoint: output in the midpoint-radius form, e.g. 1.2 ± 0.100001\nsigfigs: number of significant figures to show in standard mode\ndecorations (boolean): whether to show decorations or not"
},

{
    "location": "usage/#Examples-1",
    "page": "Basic usage",
    "title": "Examples",
    "category": "section",
    "text": "julia> setprecision(Interval, Float64)\nFloat64\n\njulia> a = @interval(1.1, pi)\n[1.09999, 3.1416]\n\njulia> setformat(sigfigs=10)\nDisplay parameters:\n- format: standard\n- decorations: false\n- significant figures: 10\n\njulia> a\n[1.099999999, 3.141592654]\n\njulia> setformat(:full)\nDisplay parameters:\n- format: full\n- decorations: false\n- significant figures: 10\n\njulia> a\nInterval(1.0999999999999999, 3.1415926535897936)\n\njulia> setformat(:midpoint)\nDisplay parameters:\n- format: midpoint\n- decorations: false\n- significant figures: 10\n\njulia> a\n2.120796327 ± 1.020796327\n\njulia> setformat(:midpoint, sigfigs=4)\nDisplay parameters:\n- format: midpoint\n- decorations: false\n- significant figures: 4\n\njulia> a\n2.121 ± 1.021\n\njulia> setformat(:standard)\nDisplay parameters:\n- format: standard\n- decorations: false\n- significant figures: 4\n\njulia> a\n[1.099, 3.142]\n\njulia> setformat(:standard, sigfigs=6)  # default values\nDisplay parameters:\n- format: standard\n- decorations: false\n- significant figures: 6"
},

{
    "location": "decorations/#",
    "page": "Decorations",
    "title": "Decorations",
    "category": "page",
    "text": "DocTestSetup = quote\n    using IntervalArithmetic\nend"
},

{
    "location": "decorations/#Decorations-1",
    "page": "Decorations",
    "title": "Decorations",
    "category": "section",
    "text": "Decorations are flags, or labels, attached to intervals to indicate the status of a given interval as the result of evaluating a function on an initial interval. The combination of an interval X and a decoration d is called a decorated interval.The allowed decorations and their ordering are as follows: com > dac > def > trv > ill.Suppose that a decorated interval (X d) is the result of evaluating a function f, or the composition of a sequence of functions, on an initial decorated interval (X_0 d_0). The meaning of the resulting decoration d is as follows:com (\"common\"): X is a closed, bounded, nonempty subset of the domain of f; f is continuous on the interval X; and the resulting interval f(X) is bounded.\ndac (\"defined & continuous\"): X is a nonempty subset of mathrmDom(f), and f is continuous on X.\ndef (\"defined\"): X is a nonempty subset of mathrmDom(f), i.e. f is defined at each point of X.\ntrv (\"trivial\"): always true; gives no information\nill (\"ill-formed\"): Not an Interval (an error occurred), e.g. mathrmDom(f) = emptyset.An example will be given at the end of this section."
},

{
    "location": "decorations/#Initialisation-1",
    "page": "Decorations",
    "title": "Initialisation",
    "category": "section",
    "text": "The simplest way to create a DecoratedInterval is with the @decorated macro, which does correct rounding:julia> @decorated(0.1, 0.3)\n[0.1, 0.3]The DecoratedInterval constructor may also be used if necessary:julia> X = DecoratedInterval(3, 4)\n[3, 4]By default, decorations are not displayed. The following turns on display of decorations:julia> setformat(decorations=true)\n6\n\njulia> X\n[3, 4]_comIf no decoration is explicitly specified when a DecoratedInterval is created, then it is initialised with a decoration according to its interval X:com: if X is nonempty and bounded;\ndac if X is unbounded;\ntrv if X is empty.An explicit decoration may be provided for advanced use:julia> DecoratedInterval(3, 4, dac)\n[3, 4]_dac\n\njulia> DecoratedInterval(X, def)\n[3, 4]_defHere, a new DecoratedInterval was created by extracting the interval from another one and appending a different decoration."
},

{
    "location": "decorations/#Action-of-functions-1",
    "page": "Decorations",
    "title": "Action of functions",
    "category": "section",
    "text": "A decoration is the combination of an interval together with the sequence of functions that it has passed through. Here are some examples:julia> X1 = @decorated(0.5, 3)\n[0.5, 3]_com\n\njulia> sqrt(X1)\n[0.707106, 1.73206]_comIn this case, both input and output are \"common\" intervals, meaning that they are closed and bounded, and that the resulting function is continuous over the input interval, so that fixed-point theorems may be applied. Since sqrt(X1) ⊆ X1, we know that there must be a fixed point of the function inside the interval X1 (in this case, sqrt(1) == 1).julia> X2 = DecoratedInterval(3, ∞)\n[3, ∞]_dac\n\njulia> sqrt(X2)\n[1.73205, ∞]_dacSince the intervals are unbounded here, the maximum decoration possible is dac.julia> X3 = @decorated(-3, 4)\n[-3, 4]_com\n\njulia> sign(X3)\n[-1, 1]_defThe sign function is discontinuous at 0, but is defined everywhere on the input interval, so the decoration is def.julia> X4 = @decorated(-3.5, 4.1)\n[-3.5, 4.1]_com\n\njulia> sqrt(X4)\n[0, 2.02485]_trvThe negative part of X is discarded by the sqrt function, since its domain is [0,∞]. (This process of discarding parts of the input interval that are not in the domain is called \"loose evaluation\".) The fact that this occurred is, however, recorded by the resulting decoration, trv, indicating a loss of information: \"nothing is known\" about the relationship between the output interval and the input.In this case, we know why the decoration was reduced to trv. But if this were just a single step in a longer calculation, a resulting trv decoration shows only that something like this happened at some step. For example:julia> X5 = @decorated(-3, 3)\n[-3, 3]_com\n\njulia> asin(sqrt(X5))\n[0, 1.5708]_trv\n\njulia> X6 = @decorated(0, 3)\n[0, 3]_com\n\njulia> asin(sqrt(X6))\n[0, 1.5708]_trvIn both cases, asin(sqrt(X)) gives a result with a trv decoration, but we do not know at which step this happened, unless we break down the function into its constituent parts:julia> sqrt(X5)\n[0, 1.73206]_trv\n\njulia> sqrt(X6)\n[0, 1.73206]_comThis shows that loose evaluation occurred in different parts of the expression in the two different cases.In general, the trv decoration is thus used only to signal that \"something unexpected\" happened during the calculation. Often this is later used to split up the original interval into pieces and reevaluate the function on each piece to refine the information that is obtained about the function.DocTestSetup = nothing"
},

{
    "location": "multidim/#",
    "page": "Multi-dimensional boxes",
    "title": "Multi-dimensional boxes",
    "category": "page",
    "text": ""
},

{
    "location": "multidim/#Multi-dimensional-boxes-1",
    "page": "Multi-dimensional boxes",
    "title": "Multi-dimensional boxes",
    "category": "section",
    "text": "Multi-dimensional (hyper-)boxes are implemented in the IntervalBox type. These represent Cartesian products of intervals, i.e. rectangles (in 2D), cuboids (in 3D), etc.IntervalBoxes are constructed from an array of Intervals; it is often convenient to use the .. notation:julia> using IntervalArithmetic # hide\n\njulia> X = IntervalBox(1..3, 2..4)\n[1, 3] × [2, 4]\n\njulia> Y = IntervalBox(2.1..2.9, 3.1..4.9)\n[2.09999, 2.90001] × [3.09999, 4.90001]Several operations are defined on IntervalBoxes, for example:julia> X ∩ Y\n[2.09999, 2.90001] × [3.09999, 4]\n\njulia> X ⊆ Y\nfalseGiven a multi-dimensional function taking several inputs, and interval box can be constructed as follows:julia> f(x, y) = (x + y, x - y)\nf (generic function with 1 method)\n\njulia> X = IntervalBox(1..1, 2..2)\n[1, 1] × [2, 2]\n\njulia> f(X...)  \n([3, 3], [-1, -1])\n\njulia> IntervalBox(f(X...))\n[3, 3] × [-1, -1]DocTestSetup = nothing"
},

{
    "location": "rounding/#",
    "page": "Rounding",
    "title": "Rounding",
    "category": "page",
    "text": ""
},

{
    "location": "rounding/#Why-is-rounding-necessary?-1",
    "page": "Rounding",
    "title": "Why is rounding necessary?",
    "category": "section",
    "text": "What happens when we write the following Julia code?julia> x = 0.1\n0.1This appears to store the value 0.1 in a variable x of type Float64. In fact, however, it stores a slightly different number, since 0.1 cannot be represented exactly in binary floating point arithmetic, at any precision.The true value that is actually stored in the variable can be conveniently determined in Julia using arbitrary-precision arithmetic with BigFloats:julia> big(0.1)\n1.000000000000000055511151231257827021181583404541015625000000000000000000000000e-01So, in fact, the Julia float 0.1 refers to a real number that is slightly greater than 0.1. By default, such calculations are done in round-to-nearest mode (RoundNearest); i.e., the nearest representable floating-point number to 0.1 is used.[Recall that to get a BigFloat that is as close as possible to the true 0.1, you can use a special string macro:julia> big\"0.1\"\n1.000000000000000000000000000000000000000000000000000000000000000000000000000002e-01]Suppose that we create a thin interval, containing just the floating-point number 0.1:julia> using IntervalArithmetic\n\njulia> II = Interval(0.1)\n[0.1, 0.100001]\n\njulia> showfull(II)\nInterval(0.1, 0.1)It looks like II contains (the true) 0.1, but from the above discussion we see that it does not. In order to contain 0.1, the end-points of the interval must be rounded outwards (\"directed rounding\"): the lower bound is rounded down, and the upper bound is rounded up.This rounding is handled by the @interval  macro, which generates correctly-rounded intervals:julia> a = @interval(0.1)\n[0.0999999, 0.100001]\nThe true 0.1 is now correctly contained in the intervals, so that any calculations on these intervals will contain the true result of calculating with 0.1. For example, if we definejulia> f(x) = 2x + 0.2\nf (generic function with 1 method)\nthen we can apply the function f to the interval a to obtainjulia> f(a)\n[0.399999, 0.400001]\n\njulia> showfull(f(a))\nInterval(0.39999999999999997, 0.4)The result correctly contains the true 0.4."
},

{
    "location": "rounding/#More-detail:-the-internal-representation-1",
    "page": "Rounding",
    "title": "More detail: the internal representation",
    "category": "section",
    "text": "Let\'s look at the internal representation of the Float64 number 0.1:julia> bits(0.1)\n\"0011111110111001100110011001100110011001100110011001100110011010\"The last 53 bits of these 64 bits correspond to the binary expansion of 0.1, which is0.000110011001100110011001100110011001100...We see that the expansion is periodic; in fact, the binary expansion of 0.1 has an infinite repetition of the sequence of digits 1100. It is thus impossible to represent the decimal 0.1 in binary, with any precision.The true value must be approximated by a floating-point number with fixed precision – this procedure is called rounding. For positive numbers, rounding down may be accomplished simply by truncating the expansion; rounding up is accomplished by incrementing the final binary digit and propagating any resulting changes."
},

{
    "location": "api/#",
    "page": "API",
    "title": "API",
    "category": "page",
    "text": "DocTestSetup = quote\n    using IntervalArithmetic\nend"
},

{
    "location": "api/#IntervalArithmetic.DecoratedInterval",
    "page": "API",
    "title": "IntervalArithmetic.DecoratedInterval",
    "category": "type",
    "text": "DecoratedInterval\n\nA DecoratedInterval is an interval, together with a decoration, i.e. a flag that records the status of the interval when thought of as the result of a previously executed sequence of functions acting on an initial interval.\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalArithmetic.IntervalBox",
    "page": "API",
    "title": "IntervalArithmetic.IntervalBox",
    "category": "type",
    "text": "An IntervalBox is an N-dimensional rectangular box, given by a Cartesian product of a vector of N Intervals.\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalArithmetic.@biginterval-Tuple{Any,Vararg{Any,N} where N}",
    "page": "API",
    "title": "IntervalArithmetic.@biginterval",
    "category": "macro",
    "text": "The @biginterval macro constructs an interval with BigFloat entries.\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalArithmetic.@floatinterval-Tuple{Any,Vararg{Any,N} where N}",
    "page": "API",
    "title": "IntervalArithmetic.@floatinterval",
    "category": "macro",
    "text": "The @floatinterval macro constructs an interval with Float64 entries.\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalArithmetic.@format-Tuple",
    "page": "API",
    "title": "IntervalArithmetic.@format",
    "category": "macro",
    "text": "@format [style::Symbol] [decorations::Bool] [sigfigs::Integer]\n\nThe @format macro provides a simple interface to control the output format for intervals. These options are passed to the setformat function. It returns the new DisplayParameters object.\n\nThe arguments may be in any order and of type:\n\nSymbol: the output format (:full, :standard or :midpoint)\nBool: whether to display decorations\nInteger: the number of significant figures\n\nE.g.\n\njulia> x = 0.1..0.3\n@[0.0999999, 0.300001]\n\njulia> @format full\nDisplay parameters:\n- format: full\n- decorations: false\n- significant figures: 6\n\njulia> x\nInterval(0.09999999999999999, 0.30000000000000004)\n\njulia> @format standard 3\nDisplay parameters:\n- format: standard\n- decorations: false\n- significant figures: 3\n\njulia> x\n[0.0999, 0.301]\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalArithmetic.@interval-Tuple{Any,Vararg{Any,N} where N}",
    "page": "API",
    "title": "IntervalArithmetic.@interval",
    "category": "macro",
    "text": "The @interval macro is the main method to create an interval. It converts each expression into a narrow interval that is guaranteed to contain the true value passed by the user in the one or two expressions passed to it. When passed two expressions, it takes the hull of the resulting intervals to give a guaranteed containing interval.\n\nExamples:\n\n    @interval(0.1)\n\n    @interval(0.1, 0.2)\n\n    @interval(1/3, 1/6)\n\n    @interval(1/3^2)\n\n\n\n\n\n"
},

{
    "location": "api/#Base.widen-Union{Tuple{Interval{T}}, Tuple{T}} where T<:AbstractFloat",
    "page": "API",
    "title": "Base.widen",
    "category": "method",
    "text": "widen(x) widens the lowest and highest bounds of x to the previous and next representable floating-point numbers, respectively.\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalArithmetic.bisect",
    "page": "API",
    "title": "IntervalArithmetic.bisect",
    "category": "function",
    "text": "bisect(X::IntervalBox, α=0.49609375)\n\nBisect the IntervalBox X at position α ∈ [0,1] along its longest side.\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalArithmetic.bisect",
    "page": "API",
    "title": "IntervalArithmetic.bisect",
    "category": "function",
    "text": "bisect(X::IntervalBox, i::Integer, α=0.49609375)\n\nBisect the IntervalBox in side number i.\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalArithmetic.bisect",
    "page": "API",
    "title": "IntervalArithmetic.bisect",
    "category": "function",
    "text": "bisect(X::Interval, α=0.49609375)\n\nSplit the interval X at position α; α=0.5 corresponds to the midpoint. Returns a tuple of the new intervals.\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalArithmetic.cancelminus",
    "page": "API",
    "title": "IntervalArithmetic.cancelminus",
    "category": "function",
    "text": "cancelminus(xx, yy)\n\nDecorated interval extension; the result is decorated as trv, following the IEEE-1788 Standard (see Sect. 11.7.1, pp 47).\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalArithmetic.cancelminus-Union{Tuple{T}, Tuple{Interval{T},Interval{T}}} where T<:Real",
    "page": "API",
    "title": "IntervalArithmetic.cancelminus",
    "category": "method",
    "text": "cancelminus(a, b)\n\nReturn the unique interval c such that b+c=a.\n\nSee Section 12.12.5 of the IEEE-1788 Standard for Interval Arithmetic.\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalArithmetic.cancelplus",
    "page": "API",
    "title": "IntervalArithmetic.cancelplus",
    "category": "function",
    "text": "cancelplus(xx, yy)\n\nDecorated interval extension; the result is decorated as trv, following the IEEE-1788 Standard (see Sect. 11.7.1, pp 47).\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalArithmetic.cancelplus-Tuple{Interval,Interval}",
    "page": "API",
    "title": "IntervalArithmetic.cancelplus",
    "category": "method",
    "text": "cancelplus(a, b)\n\nReturns the unique interval c such that b-c=a; it is equivalent to cancelminus(a, −b).\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalArithmetic.diam-Union{Tuple{Interval{T}}, Tuple{T}} where T<:Real",
    "page": "API",
    "title": "IntervalArithmetic.diam",
    "category": "method",
    "text": "diam(a::Interval)\n\nReturn the diameter (length) of the Interval a.\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalArithmetic.emptyinterval-Union{Tuple{Type{T}}, Tuple{T}} where T<:Real",
    "page": "API",
    "title": "IntervalArithmetic.emptyinterval",
    "category": "method",
    "text": "emptyintervals are represented as the interval [∞, -∞]; note that this interval is an exception to the fact that the lower bound is larger than the upper one.\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalArithmetic.entireinterval-Union{Tuple{Type{T}}, Tuple{T}} where T<:Real",
    "page": "API",
    "title": "IntervalArithmetic.entireinterval",
    "category": "method",
    "text": "entireintervals represent the whole Real line: [-∞, ∞].\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalArithmetic.hull",
    "page": "API",
    "title": "IntervalArithmetic.hull",
    "category": "function",
    "text": "hull(xx, yy)\n\nDecorated interval extension; the result is decorated as trv, following the IEEE-1788 Standard (see Sect. 11.7.1, pp 47).\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalArithmetic.hull-Tuple{Interval,Interval}",
    "page": "API",
    "title": "IntervalArithmetic.hull",
    "category": "method",
    "text": "hull(a, b)\n\nReturns the \"interval hull\" of the intervals a and b, considered as (extended) sets of real numbers, i.e. the smallest interval that contains all of a and b.\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalArithmetic.interval-Tuple{Real,Real}",
    "page": "API",
    "title": "IntervalArithmetic.interval",
    "category": "method",
    "text": "interval(a, b)\n\ninterval(a, b) checks whether [a, b] is a valid Interval, which is the case if -∞ <= a <= b <= ∞, using the (non-exported) is_valid_interval function. If so, then an Interval(a, b) object is returned; if not, then an error is thrown.\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalArithmetic.isatomic-Tuple{Interval}",
    "page": "API",
    "title": "IntervalArithmetic.isatomic",
    "category": "method",
    "text": "isatomic(x::Interval)\n\nCheck whether an interval x is atomic, i.e. is unable to be split. This occurs when the interval is empty, or when the upper bound equals the lower bound or the nextfloat of the lower bound.\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalArithmetic.iscommon-Tuple{Interval}",
    "page": "API",
    "title": "IntervalArithmetic.iscommon",
    "category": "method",
    "text": "iscommon(x)\n\nChecks if x is a common interval, i.e. a non-empty, bounded, real interval.\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalArithmetic.isthin-Tuple{Interval}",
    "page": "API",
    "title": "IntervalArithmetic.isthin",
    "category": "method",
    "text": "isthin(x)\n\nChecks if x is the set consisting of a single exactly representable float. Any float which is not exactly representable does not yield a thin interval. Corresponds to isSingleton of the standard.\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalArithmetic.mid-Tuple{IntervalBox}",
    "page": "API",
    "title": "IntervalArithmetic.mid",
    "category": "method",
    "text": "mid(X::IntervalBox, α=0.5)\n\nReturn a vector of the mid of each interval composing the IntervalBox.\n\nSee mid(X::Interval, α=0.5) for more informations.\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalArithmetic.mid-Union{Tuple{Interval{T}}, Tuple{T}} where T",
    "page": "API",
    "title": "IntervalArithmetic.mid",
    "category": "method",
    "text": "mid(a::Interval)\n\nFind the midpoint of interval a.\n\nFor intervals of the form [-∞, x] or [x, +∞] where x is finite, return respectively nextfloat(-∞) and prevfloat(+∞). Note that it differs from the behavior of mid(a, α=0.5).\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalArithmetic.mid-Union{Tuple{T}, Tuple{Interval{T},Any}} where T",
    "page": "API",
    "title": "IntervalArithmetic.mid",
    "category": "method",
    "text": "mid(a::Interval, α=0.5)\n\nFind an intermediate point at a relative position αin the intervala. The default is the true midpoint atα = 0.5`.\n\nAssumes 0 ≤ α ≤ 1.\n\nWarning: if the parameter α = 0.5 is explicitely set, the behavior differs from the default case if the provided Interval is not finite, since when α is provided mid simply replaces +∞ (respectively -∞) by prevfloat(+∞) (respecively nextfloat(-∞)) for the computation of the intermediate point.\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalArithmetic.nai-Union{Tuple{Type{T}}, Tuple{T}} where T<:Real",
    "page": "API",
    "title": "IntervalArithmetic.nai",
    "category": "method",
    "text": "NaI not-an-interval: [NaN, NaN].\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalArithmetic.pow-Tuple{Interval,Integer}",
    "page": "API",
    "title": "IntervalArithmetic.pow",
    "category": "method",
    "text": "pow(x::Interval, n::Integer)\n\nA faster implementation of x^n, currently using power_by_squaring. pow(x, n) will usually return an interval that is slightly larger than that calculated by x^n, but is guaranteed to be a correct enclosure when using multiplication with correct rounding.\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalArithmetic.radius-Tuple{Interval}",
    "page": "API",
    "title": "IntervalArithmetic.radius",
    "category": "method",
    "text": "radius(a::Interval)\n\nReturn the radius of the Interval a, such that a ⊆ m ± radius, where m = mid(a) is the midpoint.\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalArithmetic.setformat",
    "page": "API",
    "title": "IntervalArithmetic.setformat",
    "category": "function",
    "text": "setformat(format=none; decorations=none, sigfigs=none)\n\nsetformat changes how intervals are displayed. It returns the new DisplayParameters object.\n\nNote that The @format macro is more user-friendly.\n\nThe following options are available:\n\nformat: interval output format\n:standard: [1, 2]\n:full: Interval(1, 2)\n:midpoint: 1.5 ± 0.5\nsigfigs: number of significant figures to show in standard mode; the default is 6\ndecorations (boolean):  show decorations or not\n\nExample:\n\njulia> setformat(:full, decorations=true)\nDisplay parameters:\n- format: full\n- decorations: true\n- significant figures: 6\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalArithmetic.Region",
    "page": "API",
    "title": "IntervalArithmetic.Region",
    "category": "constant",
    "text": "Region{T} = Union{Interval{T}, IntervalBox{T}}\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalArithmetic.DECORATION",
    "page": "API",
    "title": "IntervalArithmetic.DECORATION",
    "category": "type",
    "text": "DECORATION\n\nEnumeration constant for the types of interval decorations. The nomenclature of the follows the IEEE-1788 (2015) standard (sect 11.2):\n\ncom -> 4: common: bounded, non-empty\ndac -> 3: defined (nonempty) and continuous\ndef -> 2: defined (nonempty)\ntrv -> 1: always true (no information)\nill -> 0: nai (\"not an interval\")\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalArithmetic.IntervalRounding",
    "page": "API",
    "title": "IntervalArithmetic.IntervalRounding",
    "category": "type",
    "text": "Interval rounding trait type\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalArithmetic.@round-Tuple{Any,Any}",
    "page": "API",
    "title": "IntervalArithmetic.@round",
    "category": "macro",
    "text": "@round(ex1, ex2)\n\nMacro for internal use that creates an interval by rounding down ex1 and rounding up ex2. Each expression may consist of only a single operation that needs rounding, e.g. a.lo + b.lo or sin(a.lo). It also handles min(...) and max(...), where the arguments are each themselves single operations.\n\nThe macro uses the internal round_expr function to transform e.g. a + b into +(a, b, RoundDown).\n\nThe user-facing equivalent is @interval, which can handle much more general cases.\n\n\n\n\n\n"
},

{
    "location": "api/#Base.:==-Tuple{Interval,Interval}",
    "page": "API",
    "title": "Base.:==",
    "category": "method",
    "text": "==(a,b)\n\nChecks if the intervals a and b are equal.\n\n\n\n\n\n"
},

{
    "location": "api/#Base.:⊆-Tuple{Interval,Interval}",
    "page": "API",
    "title": "Base.:⊆",
    "category": "method",
    "text": "issubset(a,b)\n⊆(a,b)\n\nChecks if all the points of the interval a are within the interval b.\n\n\n\n\n\n"
},

{
    "location": "api/#Base.Rounding.setrounding-Tuple{Type{Interval},Symbol}",
    "page": "API",
    "title": "Base.Rounding.setrounding",
    "category": "method",
    "text": "setrounding(Interval, rounding_type::Symbol)\n\nSet the rounding type used for all interval calculations on Julia v0.6 and above. Valid rounding_types are (:tight, :accurate, :slow, :none).\n\n\n\n\n\n"
},

{
    "location": "api/#Base.hash-Tuple{Interval,UInt64}",
    "page": "API",
    "title": "Base.hash",
    "category": "method",
    "text": "Computes the integer hash code for an Interval using the method for composite types used in AutoHashEquals.jl\n\n\n\n\n\n"
},

{
    "location": "api/#Base.in-Union{Tuple{T}, Tuple{T,Interval}} where T<:Real",
    "page": "API",
    "title": "Base.in",
    "category": "method",
    "text": "in(x, a)\n∈(x, a)\n\nChecks if the number x is a member of the interval a, treated as a set. Corresponds to isMember in the ITF-1788 Standard.\n\n\n\n\n\n"
},

{
    "location": "api/#Base.intersect",
    "page": "API",
    "title": "Base.intersect",
    "category": "function",
    "text": "intersect(xx, yy)\n\nDecorated interval extension; the result is decorated as trv, following the IEEE-1788 Standard (see Sect. 11.7.1, pp 47).\n\n\n\n\n\n"
},

{
    "location": "api/#Base.intersect-Union{Tuple{T}, Tuple{Interval{T},Interval{T}}} where T",
    "page": "API",
    "title": "Base.intersect",
    "category": "method",
    "text": "intersect(a, b)\n∩(a,b)\n\nReturns the intersection of the intervals a and b, considered as (extended) sets of real numbers. That is, the set that contains the points common in a and b.\n\n\n\n\n\n"
},

{
    "location": "api/#Base.parse-Union{Tuple{T}, Tuple{Type{DecoratedInterval{T}},AbstractString}} where T",
    "page": "API",
    "title": "Base.parse",
    "category": "method",
    "text": "parse{T}(DecoratedInterval{T}, s::AbstractString)\n\nParse a string of the form \"[a, b]_dec\" as a DecoratedInterval with decoration dec.\n\n\n\n\n\n"
},

{
    "location": "api/#Base.parse-Union{Tuple{T}, Tuple{Type{Interval{T}},AbstractString}} where T",
    "page": "API",
    "title": "Base.parse",
    "category": "method",
    "text": "parse{T}(Interval{T}, s::AbstractString)\n\nParse a string as an interval. Formats allowed include:\n\n\"1\"\n\"[1]\"\n\"[3.5, 7.2]\"\n\"[-0x1.3p-1, 2/3]\"  # use numerical expressions\n\n\n\n\n\n"
},

{
    "location": "api/#Base.round-Tuple{Interval}",
    "page": "API",
    "title": "Base.round",
    "category": "method",
    "text": "round(a::Interval[, RoundingMode])\n\nReturns the interval with rounded to an interger limits.\n\nFor compliance with the IEEE Std 1788-2015, \"roundTiesToEven\" corresponds to round(a) or round(a, RoundNearest), and \"roundTiesToAway\" to round(a, RoundNearestTiesAway).\n\n\n\n\n\n"
},

{
    "location": "api/#Base.setdiff-Tuple{Interval,Interval}",
    "page": "API",
    "title": "Base.setdiff",
    "category": "method",
    "text": "setdiff(x::Interval, y::Interval)\n\nCalculate the set difference x ∖ y, i.e. the set of values that are inside the interval x but not inside y.\n\nReturns an array of intervals. The array may:\n\nbe empty if x ⊆ y;\ncontain a single interval, if y overlaps x\ncontain two intervals, if y is strictly contained within x.\n\n\n\n\n\n"
},

{
    "location": "api/#Base.setdiff-Union{Tuple{T}, Tuple{N}, Tuple{IntervalBox{N,T},IntervalBox{N,T}}} where T where N",
    "page": "API",
    "title": "Base.setdiff",
    "category": "method",
    "text": "setdiff(A::IntervalBox{N,T}, B::IntervalBox{N,T})\n\nReturns a vector of IntervalBoxes that are in the set difference A ∖ B, i.e. the set of x that are in A but not in B.\n\nAlgorithm: Start from the total overlap (in all directions); expand each direction in turn.\n\n\n\n\n\n"
},

{
    "location": "api/#Base.union",
    "page": "API",
    "title": "Base.union",
    "category": "function",
    "text": "union(xx, yy)\n\nDecorated interval extension; the result is decorated as trv, following the IEEE-1788 Standard (see Sect. 11.7.1, pp 47).\n\n\n\n\n\n"
},

{
    "location": "api/#Base.union-Tuple{Interval,Interval}",
    "page": "API",
    "title": "Base.union",
    "category": "method",
    "text": "union(a, b)\n∪(a,b)\n\nReturns the union (convex hull) of the intervals a and b; it is equivalent to hull(a,b).\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalArithmetic.atomic",
    "page": "API",
    "title": "IntervalArithmetic.atomic",
    "category": "function",
    "text": "atomic(::Type{<:Interval}, x)\n\nConstruct the tightest interval of a given type that contains the value x.\n\nIf x is an AbstractString, the interval will be created by calling parse.\n\nExamples\n\nConstruct an Interval{Float64} containing a given BigFloat:\n\njulia> x = big\"0.1\"\n1.000000000000000000000000000000000000000000000000000000000000000000000000000002e-01\n\njulia> i = IntervalArithmetic.atomic(Interval{Float64}, x)\n[0.0999999, 0.100001]\n\njulia> i isa Interval{Float64}\ntrue\n\njulia> i.lo <= x <= i.hi\ntrue\n\njulia> i.hi === nextfloat(i.lo)\ntrue\n\nConstruct an Interval{Float32} containing a the real number 0.1 in two ways:\n\njulia> i1 = IntervalArithmetic.atomic(Interval{Float32}, \"0.1\")\n[0.0999999, 0.100001]\n\njulia> i2 = IntervalArithmetic.atomic(Interval{Float32}, 1//10)\n[0.0999999, 0.100001]\n\njulia> i1 === i2\ntrue\n\njulia> i.lo <= 1//10 <= i.hi\ntrue\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalArithmetic.big53-Tuple{Interval{Float64}}",
    "page": "API",
    "title": "IntervalArithmetic.big53",
    "category": "method",
    "text": "big53 creates an equivalent BigFloat interval to a given Float64 interval.\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalArithmetic.checked_mult-Union{Tuple{T}, Tuple{T,T,RoundingMode}} where T",
    "page": "API",
    "title": "IntervalArithmetic.checked_mult",
    "category": "method",
    "text": "a * b where 0 * Inf is special-cased\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalArithmetic.find_quadrants-Union{Tuple{T}, Tuple{T}} where T",
    "page": "API",
    "title": "IntervalArithmetic.find_quadrants",
    "category": "method",
    "text": "Finds the quadrant(s) corresponding to a given floating-point number. The quadrants are labelled as 0 for x ∈ [0, π/2], etc. For numbers very near a boundary of the quadrant, a tuple of two quadrants is returned. The minimum or maximum must then be chosen appropriately.\n\nThis is a rather indirect way to determine if π/2 and 3π/2 are contained in the interval; cf. the formula for sine of an interval in Tucker, Validated Numerics.\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalArithmetic.force_interval-Tuple{Any,Any}",
    "page": "API",
    "title": "IntervalArithmetic.force_interval",
    "category": "method",
    "text": "Make an interval even if a > b\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalArithmetic.is_valid_interval-Tuple{Real,Real}",
    "page": "API",
    "title": "IntervalArithmetic.is_valid_interval",
    "category": "method",
    "text": "is_valid_interval(a::Real, b::Real)\n\nCheck if (a, b) constitute a valid interval\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalArithmetic.labelled_setdiff-Union{Tuple{T}, Tuple{Interval{T},Interval{T}}} where T",
    "page": "API",
    "title": "IntervalArithmetic.labelled_setdiff",
    "category": "method",
    "text": "Returns a list of pairs (interval, label) label is 1 if the interval is excluded from the setdiff label is 0 if the interval is included in the setdiff label is -1 if the intersection of the two intervals was empty\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalArithmetic.make_interval-Tuple{Any,Any,Any}",
    "page": "API",
    "title": "IntervalArithmetic.make_interval",
    "category": "method",
    "text": "make_interval does the hard work of taking expressions and making each literal (0.1, 1, etc.) into a corresponding interval construction, by calling transform.\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalArithmetic.multiply_by_positive_constant-Tuple{Any,Interval}",
    "page": "API",
    "title": "IntervalArithmetic.multiply_by_positive_constant",
    "category": "method",
    "text": "Multiply an interval by a positive constant. For efficiency, does not check that the constant is positive.\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalArithmetic.round_expr-Tuple{Expr,RoundingMode}",
    "page": "API",
    "title": "IntervalArithmetic.round_expr",
    "category": "method",
    "text": "round_expr(ex::Expr, rounding_mode::RoundingMode)\n\nTransforms a single expression by applying a rounding mode, e.g.\n\na + b into +(a, b, RoundDown)\nsin(a) into sin(a, RoundDown)\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalArithmetic.transform-Tuple{Symbol,Any,Any}",
    "page": "API",
    "title": "IntervalArithmetic.transform",
    "category": "method",
    "text": "transform transforms a string by applying the function f and type T to each argument, i.e. :(x+y) is transformed to :(f(T, x) + f(T, y))\n\n\n\n\n\n"
},

{
    "location": "api/#IntervalArithmetic.wideinterval-Union{Tuple{T}, Tuple{T}} where T<:AbstractFloat",
    "page": "API",
    "title": "IntervalArithmetic.wideinterval",
    "category": "method",
    "text": "wideinterval(x::AbstractFloat)\n\nReturns the interval Interval( prevfloat(x), nextfloat(x) ).\n\n\n\n\n\n"
},

{
    "location": "api/#API-1",
    "page": "API",
    "title": "API",
    "category": "section",
    "text": "Pages = [\"api.md\"]\nModule = [IntervalArithmetic]\nOrder = [:type, :macro, :function, :constant]Modules = [IntervalArithmetic]\nOrder   = [:type, :macro, :function, :constant]"
},

]}
