var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Getting Started",
    "title": "Getting Started",
    "category": "page",
    "text": ""
},

{
    "location": "#Getting-Started-1",
    "page": "Getting Started",
    "title": "Getting Started",
    "category": "section",
    "text": "Nemo is a computer algebra package for the Julia programming language, maintained by William Hart,  Tommy Hofmann, Claus Fieker, Fredrik Johansson with additional code by Oleksandr Motsak, Marek Kaluba and other contributors.http://nemocas.org (Website)\nhttps://github.com/Nemocas/Nemo.jl (Source code)\nhttp://nemocas.github.io/Nemo.jl/latest/ (Online documentation)The features of Nemo so far include:Multiprecision integers and rationals\nIntegers modulo n\np-adic numbers\nFinite fields (prime and non-prime order)\nNumber field arithmetic\nArbitrary precision real and complex balls\nUnivariate polynomials and matrices over the aboveNemo depends on AbstractAlgebra.jl which provides Nemo with generic routines for:Univariate and multivariate polynomials\nAbsolute and relative power series\nLaurent series\nFraction fields\nResidue rings\nMatrices and linear algebra\nYoung Tableaux\nPermutation groups\nCharacters"
},

{
    "location": "#Installation-1",
    "page": "Getting Started",
    "title": "Installation",
    "category": "section",
    "text": "To use Nemo we require Julia 0.6 or higher. Please see http://julialang.org/downloads for instructions on how to obtain julia for your system.At the Julia prompt simply typejulia> Pkg.add(\"Nemo\")\njulia> Pkg.build(\"Nemo\")"
},

{
    "location": "#Quick-start-1",
    "page": "Getting Started",
    "title": "Quick start",
    "category": "section",
    "text": "Here are some examples of using Nemo.This example computes recursive univariate polynomials.julia> using Nemo\n\njulia> R, x = PolynomialRing(ZZ, \"x\")\n(Univariate Polynomial Ring in x over Integer Ring,x)\n\njulia> S, y = PolynomialRing(R, \"y\")\n(Univariate Polynomial Ring in y over Univariate Polynomial Ring in x over Integer Ring,y)\n\njulia> T, z = PolynomialRing(S, \"z\")\n(Univariate Polynomial Ring in z over Univariate Polynomial Ring in y over Univariate Polynomial Ring in x over Integer Ring,z)\n\njulia> f = x + y + z + 1\nz+(y+(x+1))\n\njulia> p = f^30; # semicolon supresses output\n\njulia> @time q = p*(p+1);\n  0.325521 seconds (140.64 k allocations: 3.313 MB)Here is an example using generic recursive ring constructions.julia> using Nemo\n\njulia> R, x = FiniteField(7, 11, \"x\")\n(Finite field of degree 11 over F_7,x)\n\njulia> S, y = PolynomialRing(R, \"y\")\n(Univariate Polynomial Ring in y over Finite field of degree 11 over F_7,y)\n\njulia> T = ResidueRing(S, y^3 + 3x*y + 1)\nResidue ring of Univariate Polynomial Ring in y over Finite field of degree 11 over F_7 modulo y^3+(3*x)*y+(1)\n\njulia> U, z = PolynomialRing(T, \"z\")\n(Univariate Polynomial Ring in z over Residue ring of Univariate Polynomial Ring in y over Finite field of degree 11 over F_7 modulo y^3+(3*x)*y+(1),z)\n\njulia> f = (3y^2 + y + x)*z^2 + ((x + 2)*y^2 + x + 1)*z + 4x*y + 3;\n\njulia> g = (7y^2 - y + 2x + 7)*z^2 + (3y^2 + 4x + 1)*z + (2x + 1)*y + 1;\n\njulia> s = f^12;\n\njulia> t = (s + g)^12;\n\njulia> @time resultant(s, t)\n  0.426612 seconds (705.88 k allocations: 52.346 MB, 2.79% gc time)\n(x^10+4*x^8+6*x^7+3*x^6+4*x^5+x^4+6*x^3+5*x^2+x)*y^2+(5*x^10+x^8+4*x^7+3*x^5+5*x^4+3*x^3+x^2+x+6)*y+(2*x^10+6*x^9+5*x^8+5*x^7+x^6+6*x^5+5*x^4+4*x^3+x+3)Here is an example using matrices.julia> using Nemo\n\njulia> R, x = PolynomialRing(ZZ, \"x\")\n(Univariate Polynomial Ring in x over Integer Ring,x)\n\njulia> S = MatrixSpace(R, 40, 40)\nMatrix Space of 40 rows and 40 columns over Univariate Polynomial Ring in x over Integer Ring\n\njulia> M = rand(S, 2:2, -20:20)\n\njulia> @time det(M);\n  0.131212 seconds (1.12 M allocations: 39.331 MiB, 4.77% gc time)And here is an example with power series.julia> using Nemo\n\njulia> R, x = QQ[\"x\"]\n(Univariate Polynomial Ring in x over Rational Field,x)\n\njulia> S, t = PowerSeriesRing(R, 100, \"t\")\n(Univariate power series ring in t over Univariate Polynomial Ring in x over Rational Field,t+O(t^101))\n\njulia> u = t + O(t^100)\nt+O(t^100)\n\njulia> @time divexact((u*exp(x*u)), (exp(u)-1));\n  0.042663 seconds (64.01 k allocations: 1.999 MB, 15.40% gc time)"
},

{
    "location": "about/#",
    "page": "About Nemo",
    "title": "About Nemo",
    "category": "page",
    "text": ""
},

{
    "location": "about/#About-Nemo-1",
    "page": "About Nemo",
    "title": "About Nemo",
    "category": "section",
    "text": "Nemo is a library for fast basic arithmetic in various commonly used rings, for the Julia programming language. Our aim is to provide a highly performant package coveringCommutative Algebra\nNumber Theory\nGroup TheoryNemo consists of wrappers of specialised C/C++ libraries:Flint    http://flintlib.org/\nArb      http://fredrikj.net/arb/\nAntic    https://github.com/wbhart/antic/Nemo also uses AbstractAlgebra.jl to provide generic constructions over the basic rings provided by the above packages."
},

{
    "location": "about/#Why-Julia?-1",
    "page": "About Nemo",
    "title": "Why Julia?",
    "category": "section",
    "text": "Julia is a sophisticated, modern programming language which is designed to be both performant and flexible. It was written by mathematicians, for mathematicians.The benefits of Julia includeFamiliar imperative syntax\nJIT compilation (provides near native performance, even for highly generic code)\nREPL console (cuts down on development time)\nParametric types (allows for fast generic constructions over other data types)\nPowerful metaprogramming facilities\nOperator overloading\nMultiple dispatch (dispatch on every argument of a function)\nEfficient native C interface (little or no wrapper overhead)\nExperimental C++ interface\nDynamic type inference\nBuilt-in bignums\nAble to be embedded in C programs\nHigh performance collection types (dictionaries, iterators, arrays, etc.)\nJupyter support (for web based notebooks)The main benefits for Nemo are the parametric type system and JIT compilation. The former allows us to model many mathematical types, e.g. generic polynomial rings over an arbitrary base ring. The latter speeds up the runtime performance, even of highly generic mathematical procedures."
},

{
    "location": "types/#",
    "page": "Types in Nemo",
    "title": "Types in Nemo",
    "category": "page",
    "text": ""
},

{
    "location": "types/#Types-in-Nemo-1",
    "page": "Types in Nemo",
    "title": "Types in Nemo",
    "category": "section",
    "text": "Nemo is fully compatible with AbstractAlgebra.jl, but specialises implementations of various commonly used rings with a highly optimised C implementation, provided by the C libraries wrapped by Nemo.Below, we give a list of all of the specialised types available in Nemo that implement rings using a specialised C library. The types of elements of the respective rings and other mathematical structures are given, and in parentheses we list the types of the parent objects of the given rings and structures.Flint\nfmpz (FlintIntegerRing)\nfmpq (FlintRationalField)\nnmod (NmodRing)\nfq_nmod (FqNmodFiniteField)\nfq (FqFiniteField)\npadic (FlintPadicField)\nfmpz_poly (FmpzPolyRing)\nfmpq_poly (FmpqPolyRing)\nnmod_poly (NmodPolyRing)\nfmpz_mod_poly (FmpzModPolyRing)\nfq_poly (FqPolyRing)\nfq_nmod_poly (FqNmodPolyRing)\nfmpz_mpoly (FmpzMPolyRing)\nfmpz_rel_series (FmpzRelSeriesRing)\nfmpz_abs_series (FmpzAbsSeriesRing)\nfmpq_rel_series (FmpqRelSeriesRing)\nfmpq_abs_series (FmpqAbsSeriesRing)\nfmpz_mod_rel_series (FmpzModRelSeriesRing)\nfmpz_mod_abs_series (FmpzModAbsSeriesRing)\nnmod_rel_series (NmodRelSeriesRing)\nfq_nmod_rel_series (FqNmodRelSeriesRing)\nfq_nmod_abs_series (FqNmodAbsSeriesRing)\nfq_rel_series (FqRelSeriesRing)\nfq_abs_series (FqAbsSeriesRing)\nfmpz_mat (FmpzMatSpace)\nfmpq_mat (FmpqMatSpace)\nnmod_mat (NmodMatSpace)\nfq_nmod_mat (FqNmodMatSpace)\nfq_mat (FqMatSpace)\nperm (PermGroup)\nAntic\nnf_elem (AnticNumberField)\nArb\narb (ArbField)\nacb (AcbField)\narb_poly (ArbPolyRing)\nacb_poly (AcbPolyRing)\narb_mat (ArbMatSpace)\nacb_mat (AcbMatSpace)"
},

{
    "location": "constructors/#",
    "page": "Constructing mathematical objects in Nemo",
    "title": "Constructing mathematical objects in Nemo",
    "category": "page",
    "text": ""
},

{
    "location": "constructors/#Constructing-mathematical-objects-in-Nemo-1",
    "page": "Constructing mathematical objects in Nemo",
    "title": "Constructing mathematical objects in Nemo",
    "category": "section",
    "text": ""
},

{
    "location": "constructors/#Constructing-objects-in-Julia-1",
    "page": "Constructing mathematical objects in Nemo",
    "title": "Constructing objects in Julia",
    "category": "section",
    "text": "In Julia, one constructs objects of a given type by calling a type constructor. This is simply a function with the same name as the type itself. For example, to construct a BigInt object in Julia, we simply call the BigInt constructor:n = BigInt(\"1234567898765434567898765434567876543456787654567890\")Julia also uses constructors to convert between types. For example, to convert an Int to a BigInt:m = BigInt(123)"
},

{
    "location": "constructors/#How-we-construct-objects-in-Nemo-1",
    "page": "Constructing mathematical objects in Nemo",
    "title": "How we construct objects in Nemo",
    "category": "section",
    "text": "Julia types don\'t contain enough information to properly model groups, rings and fields, especially if they are parameterised by values. For example, the ring of integers modulo n for a multiprecision modulus n cannot be modeled using types alone.Instead of using types to construct objects in Nemo, we use special objects that we refer to as parent objects. They behave a lot like Julia types.Consider the following simple example, to create a Flint multiprecision integer:n = ZZ(\"12345678765456787654567890987654567898765678909876567890\")Here ZZ is not a Julia type, but a callable object. However, for most purposes one can think of such a parent object ZZ as though it were a type."
},

{
    "location": "constructors/#Constructing-parent-objects-1",
    "page": "Constructing mathematical objects in Nemo",
    "title": "Constructing parent objects",
    "category": "section",
    "text": "For more complicated groups, rings, fields, etc., one first needs to construct the parent object before one can use it to construct element objects.Nemo provides a set of functions for constructing such parent objects. For example, to create a parent object for polynomials over the integers, we use the PolynomialRing parent object constructor.R, x = PolynomialRing(ZZ, \"x\")\nf = x^3 + 3x + 1\ng = R(12)In this example, R is the parent object and we use it to convert the Int value 12 to an element of the polynomial ring mathbbZx."
},

{
    "location": "constructors/#List-of-parent-object-constructors-1",
    "page": "Constructing mathematical objects in Nemo",
    "title": "List of parent object constructors",
    "category": "section",
    "text": "For convenience, we provide a list of all the parent object constructors in Nemo and explain what domains they represent.Mathematics Nemo constructor\nR = mathbbZ R = ZZ\nR = mathbbQ R = QQ\nR = mathbbF_p^n R, a = FiniteField(p, n, \"a\")\nR = mathbbZnmathbbZ R = ResidueRing(ZZ, n)\nS = Rx S, x = PolynomialRing(R, \"x\")\nS = Rx y `S, (x, y, z) = PolynomialRing(R, [\"x\", \"y\"])\nS = Rx (to precision n) S, x = PowerSeriesRing(R, n, \"x\")\nS = R((x)) (to precision n) S, x = LaurentSeriesRing(R, n, \"x\")\nS = mboxFrac_R S = FractionField(R)\nS = R(f) S = ResidueRing(R, f)\nS = mboxMat_mtimes n(R) S = MatrixSpace(R, m, n)\nS = mathbbQx(f) S, a = NumberField(f, \"a\")\nS = mathbbQ_p (to precision N) S = PadicField(p, n)\nS = mathbbR (to precision n) S = RealField(n)\nS = mathbbC (to precision n) S = ComplexField(n)"
},

{
    "location": "integer/#",
    "page": "Integers",
    "title": "Integers",
    "category": "page",
    "text": "CurrentModule = Nemo"
},

{
    "location": "integer/#Integers-1",
    "page": "Integers",
    "title": "Integers",
    "category": "section",
    "text": "The default integer type in Nemo is provided by Flint. The associated ring of integers is represented by the constant parent object called FlintZZ.For convenience we defineZZ = FlintZZso that integers can be constructed using ZZ instead of FlintZZ. Note that this is the name of a specific parent object, not the name of its type.The types of the integer ring parent objects and elements of the associated rings of integers are given in the following table according to the library provding them.Library Element type Parent type\nFlint fmpz FlintIntegerRingAll integer element types belong directly to the abstract type RingElem and all the integer ring parent object types belong to the abstract type Ring."
},

{
    "location": "integer/#Integer-functionality-1",
    "page": "Integers",
    "title": "Integer functionality",
    "category": "section",
    "text": "Nemo integers implement the whole of the ring and Euclidean ring interfaces of AbstractAlgebra.jl.https://nemocas.github.io/AbstractAlgebra.jl/rings.htmlhttps://nemocas.github.io/AbstractAlgebra.jl/euclidean.htmlBelow, we describe the functionality that is specific to the Nemo/Flint integer ring."
},

{
    "location": "integer/#Constructors-1",
    "page": "Integers",
    "title": "Constructors",
    "category": "section",
    "text": "ZZ(n::Integer)Coerce a Julia integer value into the integer ring.ZZ(n::String)Parse the given string as an integer.ZZ(n::Float64)\nZZ(n::Float32)\nZZ(n::Float16)\nZZ(n::BigFloat)Coerce the given floating point number into the integer ring, assuming that it can be exactly represented as an integer."
},

{
    "location": "integer/#AbstractAlgebra.Generic.isunit-Tuple{fmpz}",
    "page": "Integers",
    "title": "AbstractAlgebra.Generic.isunit",
    "category": "method",
    "text": "isunit(a::fmpz)\n\nReturn true if the given integer is a unit, i.e. pm 1, otherwise return false.\n\n\n\n"
},

{
    "location": "integer/#Base.sign-Tuple{fmpz}",
    "page": "Integers",
    "title": "Base.sign",
    "category": "method",
    "text": "sign(a::fmpz)\n\nReturns the sign of a, i.e. +1, 0 or -1.\n\n\n\n"
},

{
    "location": "integer/#Base.size-Tuple{fmpz}",
    "page": "Integers",
    "title": "Base.size",
    "category": "method",
    "text": "size(a::fmpz)\n\nReturns the number of limbs required to store the absolute value of a.\n\n\n\n"
},

{
    "location": "integer/#Nemo.fits-Tuple{Type{UInt64},fmpz}",
    "page": "Integers",
    "title": "Nemo.fits",
    "category": "method",
    "text": "fits(::Type{UInt}, a::fmpz)\n\nReturns true if the given integer fits into a UInt, otherwise returns false.\n\n\n\n"
},

{
    "location": "integer/#Nemo.fits-Tuple{Type{Int64},fmpz}",
    "page": "Integers",
    "title": "Nemo.fits",
    "category": "method",
    "text": "fits(::Type{Int}, a::fmpz)\n\nReturns true if the given integer fits into an Int, otherwise returns false.\n\n\n\n"
},

{
    "location": "integer/#Base.denominator-Tuple{fmpz}",
    "page": "Integers",
    "title": "Base.denominator",
    "category": "method",
    "text": "denominator(a::fmpz)\n\nReturns the denominator of a thought of as a rational. Always returns 1.\n\n\n\n"
},

{
    "location": "integer/#Base.numerator-Tuple{fmpz}",
    "page": "Integers",
    "title": "Base.numerator",
    "category": "method",
    "text": "numerator(a::fmpz)\n\nReturns the numerator of a thought of as a rational. Always returns a.\n\n\n\n"
},

{
    "location": "integer/#Basic-manipulation-1",
    "page": "Integers",
    "title": "Basic manipulation",
    "category": "section",
    "text": "isunit(::fmpz)sign(::fmpz)size(::fmpz)fits(::Type{UInt}, ::fmpz)\nfits(::Type{Int}, ::fmpz)denominator(::fmpz)numerator(::fmpz)Examplesa = ZZ(12)\n\nisunit(a)\nsign(a)\ns = size(a)\nfits(Int, a)\nn = numerator(a)\nd = denominator(a)"
},

{
    "location": "integer/#Euclidean-division-1",
    "page": "Integers",
    "title": "Euclidean division",
    "category": "section",
    "text": "Nemo also provides a large number of Euclidean division operations. Recall that for a dividend a and divisor b, we can write a = bq + r with 0 leq r  b. We call q the quotient and r the remainder.We distinguish three cases. If q is rounded towards zero, r will have the same sign as a. If q is rounded towards plus infinity, r will have the opposite sign to b. Finally, if q is rounded towards minus infinity, r will have the same sign as b.In the following table we list the division functions and their rounding behaviour. We also give the return value of the function, with q representing return of the quotient and r representing return of the remainder.Function Return Rounding\ndivrem(a::fmpz, b::fmpz) q, r towards zero\ntdivrem(a::fmpz, b::fmpz) q, r towards zero\nfdivrem(a::fmpz, b::fmpz) q, r towards minus infinityNemo also offers the following ad hoc division operators. The notation and description is as for the other Euclidean division functions.Function Return Rounding\nrem(a::fmpz, b::Int) r towards zero\ndiv(a::fmpz, b::Int) q towards zero\ntdiv(a::fmpz, b::Int) q towards zero\nfdiv(a::fmpz, b::Int) q towards minus infinity\ncdiv(a::fmpz, b::Int) q towards plus infinityThe following functions are also available, for the case where one is dividing by a power of 2. In other words, for Euclidean division of the form a = b2^d + r. These are useful for bit twiddling.Function Return Rounding\ntdivpow2(a::fmpz, d::Int) q towards zero\nfdivpow2(a::fmpz, d::Int) q towards minus infinity\nfmodpow2(a::fmpz, d::Int) r towards minus infinity\ncdivpow2(a::fmpz, d::Int) q towards plus infinityExamplesa = fmpz(12)\nb = fmpz(5)\n\nq, r = divrem(a, b)\nc = cdiv(a, b)\nd = fdiv(a, b)\nf = tdivpow2(a, 2)\ng = fmodpow2(a, 3)"
},

{
    "location": "integer/#Comparison-1",
    "page": "Integers",
    "title": "Comparison",
    "category": "section",
    "text": "Instead of isless we implement a function cmp(a, b) which returns a positive value if a  b, zero if a == b and a negative value if a  b. We then implement all the other operators, including == in terms of cmp.For convenience we also implement a cmpabs(a, b) function which returns a positive value if a  b, zero if a == b and a negative value if a  b. This can be slightly faster than a call to cmp or one of the comparison operators when comparing nonnegative values for example.Here is a list of the comparison functions implemented, with the understanding that cmp provides all of the comparison operators listed above.Function\ncmp(a::fmpz, b::fmpz)\ncmpabs(a::fmpz, b::fmpz)We also provide the following ad hoc comparisons which again provide all of the comparison operators mentioned above.Function\ncmp(a::fmpz, b::Int)\ncmp(a::Int, b::fmpz)\ncmp(a::fmpz, b::UInt)\ncmp(a::UInt, b::fmpz)Examplesa = ZZ(12)\nb = ZZ(3)\n\na < b\na != b\na > 4\n5 <= b\ncmpabs(a, b)"
},

{
    "location": "integer/#Base.:<<-Tuple{fmpz,Int64}",
    "page": "Integers",
    "title": "Base.:<<",
    "category": "method",
    "text": "<<(x::fmpz, c::Int)\n\nReturn 2^cx where c geq 0.\n\n\n\n"
},

{
    "location": "integer/#Base.:>>-Tuple{fmpz,Int64}",
    "page": "Integers",
    "title": "Base.:>>",
    "category": "method",
    "text": ">>(x::fmpz, c::Int)\n\nReturn x2^c, discarding any remainder, where c geq 0.\n\n\n\n"
},

{
    "location": "integer/#Shifting-1",
    "page": "Integers",
    "title": "Shifting",
    "category": "section",
    "text": "<<(::fmpz, ::Int)>>(::fmpz, ::Int)Examplesa = fmpz(12)\n\na << 3\na >> 5"
},

{
    "location": "integer/#Nemo.sqrtmod-Tuple{fmpz,fmpz}",
    "page": "Integers",
    "title": "Nemo.sqrtmod",
    "category": "method",
    "text": "sqrtmod(x::fmpz, m::fmpz)\n\nReturn a square root of x (mod m) if one exists. The remainder will be in the range 0 m). We require that m is prime, otherwise the algorithm may not terminate.\n\n\n\n"
},

{
    "location": "integer/#AbstractAlgebra.crt-Tuple{fmpz,fmpz,fmpz,fmpz,Bool}",
    "page": "Integers",
    "title": "AbstractAlgebra.crt",
    "category": "method",
    "text": "crt(r1::fmpz, m1::fmpz, r2::fmpz, m2::fmpz, signed=false)\n\nFind r such that r equiv r_1 (mod m_1) and r equiv r_2 (mod m_2). If signed = true, r will be in the range -m_1m_22  r leq m_1m_22. If signed = false the value will be in the range 0 leq r  m_1m_2.\n\n\n\n"
},

{
    "location": "integer/#AbstractAlgebra.crt-Tuple{fmpz,fmpz,Int64,Int64,Bool}",
    "page": "Integers",
    "title": "AbstractAlgebra.crt",
    "category": "method",
    "text": "crt(r1::fmpz, m1::fmpz, r2::Int, m2::Int, signed=false)\n\nFind r such that r equiv r_1 (mod m_1) and r equiv r_2 (mod m_2). If signed = true, r will be in the range -m_1m_22  r leq m_1m_22. If signed = false the value will be in the range 0 leq r  m_1m_2.\n\n\n\n"
},

{
    "location": "integer/#Modular-arithmetic-1",
    "page": "Integers",
    "title": "Modular arithmetic",
    "category": "section",
    "text": "sqrtmod(::fmpz, ::fmpz)crt(::fmpz, ::fmpz, ::fmpz, m::fmpz, ::Bool)\ncrt(::fmpz, ::fmpz, ::Int, ::Int, ::Bool)Examplesc = sqrtmod(ZZ(12), ZZ(13))\nd = crt(ZZ(5), ZZ(13), ZZ(7), ZZ(37), true)"
},

{
    "location": "integer/#Nemo.flog-Tuple{fmpz,fmpz}",
    "page": "Integers",
    "title": "Nemo.flog",
    "category": "method",
    "text": "flog(x::fmpz, c::fmpz)\n\nReturn the floor of the logarithm of x to base c.\n\n\n\n"
},

{
    "location": "integer/#Nemo.flog-Tuple{fmpz,Int64}",
    "page": "Integers",
    "title": "Nemo.flog",
    "category": "method",
    "text": "flog(x::fmpz, c::Int)\n\nReturn the floor of the logarithm of x to base c.\n\n\n\n"
},

{
    "location": "integer/#Nemo.clog-Tuple{fmpz,fmpz}",
    "page": "Integers",
    "title": "Nemo.clog",
    "category": "method",
    "text": "clog(x::fmpz, c::fmpz)\n\nReturn the ceiling of the logarithm of x to base c.\n\n\n\n"
},

{
    "location": "integer/#Nemo.clog-Tuple{fmpz,Int64}",
    "page": "Integers",
    "title": "Nemo.clog",
    "category": "method",
    "text": "clog(x::fmpz, c::Int)\n\nReturn the ceiling of the logarithm of x to base c.\n\n\n\n"
},

{
    "location": "integer/#Integer-logarithm-1",
    "page": "Integers",
    "title": "Integer logarithm",
    "category": "section",
    "text": "flog(::fmpz, ::fmpz)\nflog(::fmpz, ::Int)clog(::fmpz, ::fmpz)\nclog(::fmpz, ::Int)Examplesa = fmpz(12)\nb = fmpz(2)\n\nc = flog(a, b)\nd = clog(a, 3)"
},

{
    "location": "integer/#Base.isqrt-Tuple{fmpz}",
    "page": "Integers",
    "title": "Base.isqrt",
    "category": "method",
    "text": "isqrt(x::fmpz)\n\nReturn the floor of the square root of x.\n\n\n\n"
},

{
    "location": "integer/#Nemo.isqrtrem-Tuple{fmpz}",
    "page": "Integers",
    "title": "Nemo.isqrtrem",
    "category": "method",
    "text": "isqrtrem(x::fmpz)\n\nReturn a tuple s r consisting of the floor s of the square root of x and the remainder r, i.e. such that x = s^2 + r. We require x geq 0.\n\n\n\n"
},

{
    "location": "integer/#Nemo.root-Tuple{fmpz,Int64}",
    "page": "Integers",
    "title": "Nemo.root",
    "category": "method",
    "text": "root(x::fmpz, n::Int)\n\nReturn the floor of the n-the root of x. We require n  0 and that x geq 0 if n is even.\n\n\n\n"
},

{
    "location": "integer/#Integer-roots-1",
    "page": "Integers",
    "title": "Integer roots",
    "category": "section",
    "text": "isqrt(::fmpz)isqrtrem(::fmpz)root(::fmpz, ::Int)Examplesa = ZZ(13)\n\nb = sqrt(a)\ns, r = sqrtrem(a)\nc = root(a, 3)"
},

{
    "location": "integer/#Nemo.divisible-Tuple{fmpz,Int64}",
    "page": "Integers",
    "title": "Nemo.divisible",
    "category": "method",
    "text": "divisible(x::fmpz, y::Int)\n\nReturn true if x is divisible by y, otherwise return false. We require x neq 0.\n\n\n\n"
},

{
    "location": "integer/#Nemo.divisible-Tuple{fmpz,fmpz}",
    "page": "Integers",
    "title": "Nemo.divisible",
    "category": "method",
    "text": "divisible(x::fmpz, y::fmpz)\n\nReturn true if x is divisible by y, otherwise return false. We require x neq 0.\n\n\n\n"
},

{
    "location": "integer/#AbstractAlgebra.Generic.issquare-Tuple{fmpz}",
    "page": "Integers",
    "title": "AbstractAlgebra.Generic.issquare",
    "category": "method",
    "text": "issquare(x::fmpz)\n\nReturn true if x is a square, otherwise return false.\n\n\n\n"
},

{
    "location": "integer/#Nemo.isprobabprime-Tuple{fmpz}",
    "page": "Integers",
    "title": "Nemo.isprobabprime",
    "category": "method",
    "text": "isprobabprime(x::fmpz)\n\nReturn true if x is a very probably a prime number, otherwise return false. No counterexamples are known to this test, but it is conjectured that infinitely many exist.\n\n\n\n"
},

{
    "location": "integer/#Nemo.factor-Tuple{fmpz}",
    "page": "Integers",
    "title": "Nemo.factor",
    "category": "method",
    "text": "factor(a::fmpz)\n\nReturn a factorisation of a using a Fac struct (see the documentation on factorisation in Nemo.\n\n\n\n"
},

{
    "location": "integer/#Nemo.divisor_lenstra-Tuple{fmpz,fmpz,fmpz}",
    "page": "Integers",
    "title": "Nemo.divisor_lenstra",
    "category": "method",
    "text": "divisor_lenstra(n::fmpz, r::fmpz, m::fmpz)\n\nIf n has a factor which lies in the residue class r (mod m) for 0  r  m  n, this function returns such a factor. Otherwise it returns 0. This is only efficient if m is at least the cube root of n. We require gcd(r m) = 1 and this condition is not checked.\n\n\n\n"
},

{
    "location": "integer/#Nemo.fac-Tuple{Int64}",
    "page": "Integers",
    "title": "Nemo.fac",
    "category": "method",
    "text": "fac(x::Int)\n\nReturn the factorial of x, i.e. x = 123ldots x. We require x geq 0.\n\n\n\n"
},

{
    "location": "integer/#Nemo.risingfac-Tuple{fmpz,Int64}",
    "page": "Integers",
    "title": "Nemo.risingfac",
    "category": "method",
    "text": "risingfac(x::fmpz, y::Int)\n\nReturn the rising factorial of x, i.e. x(x + 1)(x + 2)ldots (x + n - 1). If n  0 we throw a DomainError().\n\n\n\n"
},

{
    "location": "integer/#Nemo.risingfac-Tuple{Int64,Int64}",
    "page": "Integers",
    "title": "Nemo.risingfac",
    "category": "method",
    "text": "risingfac(x::Int, y::Int)\n\nReturn the rising factorial of x, i.e. x(x + 1)(x + 2)ldots (x + n - 1). If n  0 we throw a DomainError().\n\n\n\n"
},

{
    "location": "integer/#Nemo.primorial-Tuple{Int64}",
    "page": "Integers",
    "title": "Nemo.primorial",
    "category": "method",
    "text": "primorial(x::Int)\n\nReturn the primorial of n, i.e. the product of all primes less than or equal to n. If n  0 we throw a DomainError().\n\n\n\n"
},

{
    "location": "integer/#Nemo.fib-Tuple{Int64}",
    "page": "Integers",
    "title": "Nemo.fib",
    "category": "method",
    "text": "fib(x::Int)\n\nReturn the n-th Fibonacci number F_n. We define F_1 = 1, F_2 = 1 and F_i + 1 = F_i + F_i - 1 for all i  2. We require n geq 0. For convenience, we define F_0 = 0.\n\n\n\n"
},

{
    "location": "integer/#Nemo.bell-Tuple{Int64}",
    "page": "Integers",
    "title": "Nemo.bell",
    "category": "method",
    "text": "bell(x::Int)\n\nReturn the Bell number B_n.\n\n\n\n"
},

{
    "location": "integer/#Nemo.binom-Tuple{Int64,Int64}",
    "page": "Integers",
    "title": "Nemo.binom",
    "category": "method",
    "text": "binom(n::Int, k::Int)\n\nReturn the binomial coefficient fracn(n - k)k. If n k  0 or k  n we return 0.\n\n\n\n"
},

{
    "location": "integer/#Nemo.moebiusmu-Tuple{fmpz}",
    "page": "Integers",
    "title": "Nemo.moebiusmu",
    "category": "method",
    "text": "moebiusmu(x::fmpz)\n\nReturns the Moebius mu function of x as an Int. The value returned is either -1, 0 or 1. If x  0 we throw a DomainError().\n\n\n\n"
},

{
    "location": "integer/#Nemo.jacobi-Tuple{fmpz,fmpz}",
    "page": "Integers",
    "title": "Nemo.jacobi",
    "category": "method",
    "text": "jacobi(x::fmpz, y::fmpz)\n\nReturn the value of the Jacobi symbol left(fracxyright). If y leq x or x  0, we throw a DomainError().\n\n\n\n"
},

{
    "location": "integer/#Nemo.sigma-Tuple{fmpz,Int64}",
    "page": "Integers",
    "title": "Nemo.sigma",
    "category": "method",
    "text": "sigma(x::fmpz, y::Int)\n\nReturn the value of the sigma function, i.e. sum_0  d  x d^y. If y  0 we throw a DomainError().\n\n\n\n"
},

{
    "location": "integer/#Nemo.eulerphi-Tuple{fmpz}",
    "page": "Integers",
    "title": "Nemo.eulerphi",
    "category": "method",
    "text": "eulerphi(x::fmpz)\n\nReturn the value of the Euler phi function at x, i.e. the number of positive integers less than x that are coprime with x.\n\n\n\n"
},

{
    "location": "integer/#Nemo.numpart-Tuple{Int64}",
    "page": "Integers",
    "title": "Nemo.numpart",
    "category": "method",
    "text": "numpart(x::Int)\n\nReturn the number of partitions of x. This function is not available on Windows 64.\n\n\n\n"
},

{
    "location": "integer/#Nemo.numpart-Tuple{fmpz}",
    "page": "Integers",
    "title": "Nemo.numpart",
    "category": "method",
    "text": "numpart(x::fmpz)\n\nReturn the number of partitions of x. This function is not available on Windows 64.\n\n\n\n"
},

{
    "location": "integer/#Number-theoretic-functionality-1",
    "page": "Integers",
    "title": "Number theoretic functionality",
    "category": "section",
    "text": "divisible(::fmpz, ::Int)\ndivisible(::fmpz, ::fmpz)issquare(::fmpz)isprime(::fmpz)isprobabprime(::fmpz)factor(::fmpz)divisor_lenstra(::fmpz, ::fmpz, ::fmpz)fac(::Int)risingfac(::fmpz, ::Int)\nrisingfac(::Int, ::Int)primorial(::Int)fib(::Int)bell(::Int)binom(::Int, ::Int)moebiusmu(::fmpz)jacobi(::fmpz, ::fmpz)sigma(::fmpz, ::Int)eulerphi(::fmpz)numpart(::Int)\nnumpart(::fmpz) Examplesisprime(ZZ(13))\nn = fac(100)\ns = sigma(ZZ(128), 10)\na = eulerphi(ZZ(12480))\np = numpart(1000)\nf = factor(ZZ(12))"
},

{
    "location": "integer/#Base.bin-Tuple{fmpz}",
    "page": "Integers",
    "title": "Base.bin",
    "category": "method",
    "text": "bin(n::fmpz)\n\nReturn n as a binary string.\n\n\n\n"
},

{
    "location": "integer/#Base.oct-Tuple{fmpz}",
    "page": "Integers",
    "title": "Base.oct",
    "category": "method",
    "text": "oct(n::fmpz)\n\nReturn n as a octal string.\n\n\n\n"
},

{
    "location": "integer/#Base.dec-Tuple{fmpz}",
    "page": "Integers",
    "title": "Base.dec",
    "category": "method",
    "text": "dec(n::fmpz)\n\nReturn n as a decimal string.\n\n\n\n"
},

{
    "location": "integer/#Base.hex-Tuple{fmpz}",
    "page": "Integers",
    "title": "Base.hex",
    "category": "method",
    "text": "hex(n::fmpz) = base(n, 16)\n\nReturn n as a hexadecimal string.\n\n\n\n"
},

{
    "location": "integer/#Nemo.base-Tuple{fmpz,Integer}",
    "page": "Integers",
    "title": "Nemo.base",
    "category": "method",
    "text": "base(n::fmpz, b::Integer)\n\nReturn n as a string in base b. We require 2 leq b leq 62.\n\n\n\n"
},

{
    "location": "integer/#Base.ndigits-Tuple{fmpz,Integer}",
    "page": "Integers",
    "title": "Base.ndigits",
    "category": "method",
    "text": "ndigits(x::fmpz, b::Integer = 10)\n\nReturn the number of digits of x in the base b (default is b = 10).\n\n\n\n"
},

{
    "location": "integer/#Nemo.nbits-Tuple{fmpz}",
    "page": "Integers",
    "title": "Nemo.nbits",
    "category": "method",
    "text": "nbits(x::fmpz)\n\nReturn the number of binary bits of x. We return zero if x = 0.\n\n\n\n"
},

{
    "location": "integer/#Digits-and-bases-1",
    "page": "Integers",
    "title": "Digits and bases",
    "category": "section",
    "text": "bin(::fmpz)oct(::fmpz)dec(::fmpz)hex(::fmpz)base(::fmpz, ::Integer)ndigits(::fmpz, ::Integer)nbits(::fmpz)Examplesa = fmpz(12)\n\ns1 = bin(a)\ns2 = base(a, 13)\nn1 = nbits(a)\nn2 = ndigits(a, 3)"
},

{
    "location": "integer/#Nemo.popcount-Tuple{fmpz}",
    "page": "Integers",
    "title": "Nemo.popcount",
    "category": "method",
    "text": "popcount(x::fmpz)\n\nReturn the number of ones in the binary representation of x.\n\n\n\n"
},

{
    "location": "integer/#Nemo.prevpow2-Tuple{fmpz}",
    "page": "Integers",
    "title": "Nemo.prevpow2",
    "category": "method",
    "text": "prevpow2(x::fmpz)\n\nReturn the previous power of 2 up to including x.\n\n\n\n"
},

{
    "location": "integer/#Nemo.nextpow2-Tuple{fmpz}",
    "page": "Integers",
    "title": "Nemo.nextpow2",
    "category": "method",
    "text": "nextpow2(x::fmpz)\n\nReturn the next power of 2 that is at least x.\n\n\n\n"
},

{
    "location": "integer/#Base.trailing_zeros-Tuple{fmpz}",
    "page": "Integers",
    "title": "Base.trailing_zeros",
    "category": "method",
    "text": "trailing_zeros(x::fmpz)\n\nCount the trailing zeros in the binary representation of x.\n\n\n\n"
},

{
    "location": "integer/#Nemo.clrbit!-Tuple{fmpz,Int64}",
    "page": "Integers",
    "title": "Nemo.clrbit!",
    "category": "method",
    "text": "clrbit!(x::fmpz, c::Int)\n\nClear bit c of x, where the least significant bit is the 0-th bit. Note that this function modifies its input in-place.\n\n\n\n"
},

{
    "location": "integer/#Nemo.setbit!-Tuple{fmpz,Int64}",
    "page": "Integers",
    "title": "Nemo.setbit!",
    "category": "method",
    "text": "setbit!(x::fmpz, c::Int)\n\nSet bit c of x, where the least significant bit is the 0-th bit. Note that this function modifies its input in-place.\n\n\n\n"
},

{
    "location": "integer/#Nemo.combit!-Tuple{fmpz,Int64}",
    "page": "Integers",
    "title": "Nemo.combit!",
    "category": "method",
    "text": "combit!(x::fmpz, c::Int)\n\nComplement bit c of x, where the least significant bit is the 0-th bit. Note that this function modifies its input in-place.\n\n\n\n"
},

{
    "location": "integer/#Bit-twiddling-1",
    "page": "Integers",
    "title": "Bit twiddling",
    "category": "section",
    "text": "popcount(::fmpz)prevpow2(::fmpz)nextpow2(::fmpz)trailing_zeros(::fmpz)clrbit!(::fmpz, ::Int)setbit!(::fmpz, ::Int)combit!(::fmpz, ::Int)Examplesa = fmpz(12)\n\np = popcount(a)\nb = nextpow2(a)\ncombit!(a, 2)"
},

{
    "location": "polynomial/#",
    "page": "Univariate polynomials",
    "title": "Univariate polynomials",
    "category": "page",
    "text": "CurrentModule = Nemo"
},

{
    "location": "polynomial/#Univariate-polynomials-1",
    "page": "Univariate polynomials",
    "title": "Univariate polynomials",
    "category": "section",
    "text": ""
},

{
    "location": "polynomial/#Introduction-1",
    "page": "Univariate polynomials",
    "title": "Introduction",
    "category": "section",
    "text": "Nemo allow the creation of dense, univariate polynomials over any computable ring R. There are two different kinds of implementation: a generic one for the case where no specific implementation exists (provided by AbstractAlgebra.jl), and efficient implementations of polynomials over numerous specific rings, usually provided by C/C++ libraries.The following table shows each of the polynomial types available in Nemo, the base ring R, and the Julia/Nemo types for that kind of polynomial (the type information is mainly of concern to developers).Base ring Library Element type Parent type\nGeneric ring R AbstractAlgebra.jl Generic.Poly{T} Generic.PolyRing{T}\nmathbbZ Flint fmpz_poly FmpzPolyRing\nmathbbZnmathbbZ (small n) Flint nmod_poly NmodPolyRing\nmathbbZnmathbbZ (large n) Flint fmpz_mod_poly FmpzModPolyRing\nmathbbQ Flint fmpq_poly FmpqPolyRing\nmathbbZpmathbbZ (small prime p) Flint gfp_poly GFPPolyRing\nmathbbZpmathbbZ (large prime p) Flint gfp_fmpz_poly GFPFmpzPolyRing\nmathbbF_p^n (small p) Flint fq_nmod_poly FqNmodPolyRing\nmathbbF_p^n (large p) Flint fq_poly FqPolyRing\nmathbbR Arb arb_poly ArbPolyRing\nmathbbC Arb acb_poly AcbPolyRingThe string representation of the variable and the base ring R of a generic polynomial is stored in its parent object. All polynomial element types belong to the abstract type PolyElem and all of the polynomial ring types belong to the abstract type PolyRing. This enables one to write generic functions that can accept any Nemo univariate polynomial type."
},

{
    "location": "polynomial/#Polynomial-functionality-1",
    "page": "Univariate polynomials",
    "title": "Polynomial functionality",
    "category": "section",
    "text": "All univariate polynomial types in Nemo follow the AbstractAlgebra.jl univariate polynomial interface:https://nemocas.github.io/AbstractAlgebra.jl/polynomial_rings.htmlGeneric polynomials are also available, and Nemo univariate polynomial types also implement all of the same functionality.We describe here only functions that are in addition to that guaranteed by AbstractAlgebra.jl, for specific coefficient rings."
},

{
    "location": "polynomial/#Nemo.evaluate2-Tuple{arb_poly,Integer}",
    "page": "Univariate polynomials",
    "title": "Nemo.evaluate2",
    "category": "method",
    "text": "evaluate2(x::arb_poly, y::Integer)\n\nReturn a tuple p q consisting of the polynomial x evaluated at y and its derivative evaluated at y.\n\n\n\n"
},

{
    "location": "polynomial/#Nemo.evaluate2-Tuple{arb_poly,Float64}",
    "page": "Univariate polynomials",
    "title": "Nemo.evaluate2",
    "category": "method",
    "text": "evaluate2(x::arb_poly, y::Float64)\n\nReturn a tuple p q consisting of the polynomial x evaluated at y and its derivative evaluated at y.\n\n\n\n"
},

{
    "location": "polynomial/#Nemo.evaluate2-Tuple{arb_poly,fmpz}",
    "page": "Univariate polynomials",
    "title": "Nemo.evaluate2",
    "category": "method",
    "text": "evaluate2(x::arb_poly, y::fmpz)\n\nReturn a tuple p q consisting of the polynomial x evaluated at y and its derivative evaluated at y.\n\n\n\n"
},

{
    "location": "polynomial/#Nemo.evaluate2-Tuple{arb_poly,fmpq}",
    "page": "Univariate polynomials",
    "title": "Nemo.evaluate2",
    "category": "method",
    "text": "evaluate2(x::arb_poly, y::fmpq)\n\nReturn a tuple p q consisting of the polynomial x evaluated at y and its derivative evaluated at y.\n\n\n\n"
},

{
    "location": "polynomial/#Nemo.evaluate2-Tuple{arb_poly,arb}",
    "page": "Univariate polynomials",
    "title": "Nemo.evaluate2",
    "category": "method",
    "text": "evaluate2(x::arb_poly, y::arb)\n\nReturn a tuple p q consisting of the polynomial x evaluated at y and its derivative evaluated at y.\n\n\n\n"
},

{
    "location": "polynomial/#Nemo.evaluate2-Tuple{arb_poly,acb}",
    "page": "Univariate polynomials",
    "title": "Nemo.evaluate2",
    "category": "method",
    "text": "evaluate2(x::arb_poly, y::acb)\n\nReturn a tuple p q consisting of the polynomial x evaluated at y and its derivative evaluated at y.\n\n\n\n"
},

{
    "location": "polynomial/#Nemo.evaluate2-Tuple{acb_poly,Integer}",
    "page": "Univariate polynomials",
    "title": "Nemo.evaluate2",
    "category": "method",
    "text": "evaluate2(x::acb_poly, y::Integer)\n\nReturn a tuple p q consisting of the polynomial x evaluated at y and its derivative evaluated at y.\n\n\n\n"
},

{
    "location": "polynomial/#Nemo.evaluate2-Tuple{acb_poly,Float64}",
    "page": "Univariate polynomials",
    "title": "Nemo.evaluate2",
    "category": "method",
    "text": "evaluate2(x::acb_poly, y::Float64)\n\nReturn a tuple p q consisting of the polynomial x evaluated at y and its derivative evaluated at y.\n\n\n\n"
},

{
    "location": "polynomial/#Nemo.evaluate2-Tuple{acb_poly,fmpz}",
    "page": "Univariate polynomials",
    "title": "Nemo.evaluate2",
    "category": "method",
    "text": "evaluate2(x::acb_poly, y::fmpq)\n\nReturn a tuple p q consisting of the polynomial x evaluated at y and its derivative evaluated at y.\n\n\n\n"
},

{
    "location": "polynomial/#Nemo.evaluate2-Tuple{acb_poly,fmpq}",
    "page": "Univariate polynomials",
    "title": "Nemo.evaluate2",
    "category": "method",
    "text": "evaluate2(x::acb_poly, y::fmpq)\n\nReturn a tuple p q consisting of the polynomial x evaluated at y and its derivative evaluated at y.\n\n\n\n"
},

{
    "location": "polynomial/#Nemo.evaluate2-Tuple{acb_poly,arb}",
    "page": "Univariate polynomials",
    "title": "Nemo.evaluate2",
    "category": "method",
    "text": "evaluate2(x::acb_poly, y::arb)\n\nReturn a tuple p q consisting of the polynomial x evaluated at y and its derivative evaluated at y.\n\n\n\n"
},

{
    "location": "polynomial/#Nemo.evaluate2-Tuple{acb_poly,acb}",
    "page": "Univariate polynomials",
    "title": "Nemo.evaluate2",
    "category": "method",
    "text": "evaluate2(x::acb_poly, y::acb)\n\nReturn a tuple p q consisting of the polynomial x evaluated at y and its derivative evaluated at y.\n\n\n\n"
},

{
    "location": "polynomial/#Remove-and-valuation-1",
    "page": "Univariate polynomials",
    "title": "Remove and valuation",
    "category": "section",
    "text": "evaluate2(::arb_poly, ::Integer)\nevaluate2(::arb_poly, ::Float64)\nevaluate2(::arb_poly, ::fmpz)\nevaluate2(::arb_poly, ::fmpq)\nevaluate2(::arb_poly, ::arb)\nevaluate2(::arb_poly, ::acb)evaluate2(::acb_poly, ::Integer)\nevaluate2(::acb_poly, ::Float64)\nevaluate2(::acb_poly, ::fmpz)\nevaluate2(::acb_poly, ::fmpq)\nevaluate2(::acb_poly, ::arb)\nevaluate2(::acb_poly, ::acb)ExamplesRR = RealField(64)\nT, z = PolynomialRing(RR, \"z\")\n   \nh = z^2 + 2z + 1\n\ns, t = evaluate2(h, RR(\"2.0 +/- 0.1\"))"
},

{
    "location": "polynomial/#Nemo.signature-Tuple{fmpz_poly}",
    "page": "Univariate polynomials",
    "title": "Nemo.signature",
    "category": "method",
    "text": "signature(f::fmpz_poly)\n\nReturn the signature of the polynomial f, i.e. a tuple (r s) such that r is the number of real roots of f and s is half the number of complex roots.\n\n\n\n"
},

{
    "location": "polynomial/#Nemo.signature-Tuple{fmpq_poly}",
    "page": "Univariate polynomials",
    "title": "Nemo.signature",
    "category": "method",
    "text": "signature(f::fmpq_poly)\n\nReturn the signature of f, i.e. a tuple (r s) where r is the number of real roots of f and s is half the number of complex roots.\n\n\n\n"
},

{
    "location": "polynomial/#Signature-1",
    "page": "Univariate polynomials",
    "title": "Signature",
    "category": "section",
    "text": "signature(::fmpz_poly)\nsignature(::fmpq_poly)ExamplesR, x = PolynomialRing(ZZ, \"x\")\n\nf = x^3 + 3x + 1\n\n(r, s) = signature(f)"
},

{
    "location": "polynomial/#Nemo.roots-Tuple{acb_poly}",
    "page": "Univariate polynomials",
    "title": "Nemo.roots",
    "category": "method",
    "text": "roots(x::acb_poly; target=0, isolate_real=false, initial_prec=0, max_prec=0, max_iter=0)\n\nAttempts to isolate the complex roots of the complex polynomial x by iteratively refining balls in which they lie.This is done by increasing the working precision, starting at initial_prec. The maximal number of iterations can be set using max_iter and the maximal precision can be set using max_prec.If isolate_real is set and x is strictly real, then the real roots will be isolated from the non-real roots. Every root will have either zero, positive or negative real part.It is assumed that x is squarefree.\n\n\n\n"
},

{
    "location": "polynomial/#Root-finding-1",
    "page": "Univariate polynomials",
    "title": "Root finding",
    "category": "section",
    "text": "roots(::acb_poly)ExamplesCC = ComplexField(64)\nC, y = PolynomialRing(CC, \"y\")\n\nm = y^2 + 2y + 3\nn = m + CC(\"0 +/- 0.0001\", \"0 +/- 0.0001\")\n\nr = roots(n)\n\np = y^7 - 1\n\nr = roots(n, isolate_real = true)"
},

{
    "location": "polynomial/#Nemo.from_roots-Tuple{ArbPolyRing,Array{arb,1}}",
    "page": "Univariate polynomials",
    "title": "Nemo.from_roots",
    "category": "method",
    "text": "from_roots(R::ArbPolyRing, b::Array{arb, 1})\n\nConstruct a polynomial in the given polynomial ring from a list of its roots.\n\n\n\n"
},

{
    "location": "polynomial/#Nemo.from_roots-Tuple{AcbPolyRing,Array{acb,1}}",
    "page": "Univariate polynomials",
    "title": "Nemo.from_roots",
    "category": "method",
    "text": "from_roots(R::AcbPolyRing, b::Array{acb, 1})\n\nConstruct a polynomial in the given polynomial ring from a list of its roots.\n\n\n\n"
},

{
    "location": "polynomial/#Construction-from-roots-1",
    "page": "Univariate polynomials",
    "title": "Construction from roots",
    "category": "section",
    "text": "from_roots(::ArbPolyRing, ::Array{arb, 1})\nfrom_roots(::AcbPolyRing, ::Array{acb, 1})ExamplesRR = RealField(64)\nR, x = PolynomialRing(RR, \"x\")\n\nxs = arb[inv(RR(i)) for i=1:5]\nf = from_roots(R, xs)"
},

{
    "location": "polynomial/#Nemo.roots_upper_bound-Tuple{arb_poly}",
    "page": "Univariate polynomials",
    "title": "Nemo.roots_upper_bound",
    "category": "method",
    "text": "roots_upper_bound(f::arb_poly) -> arb\n\nReturns an upper bound for the absolute value of all complex roots of f.\n\n\n\n"
},

{
    "location": "polynomial/#Nemo.roots_upper_bound-Tuple{acb_poly}",
    "page": "Univariate polynomials",
    "title": "Nemo.roots_upper_bound",
    "category": "method",
    "text": "roots_upper_bound(f::acb_poly) -> arb\n\nReturns an upper bound for the absolute value of all complex roots of f.\n\n\n\n"
},

{
    "location": "polynomial/#Bounding-absolute-values-of-roots-1",
    "page": "Univariate polynomials",
    "title": "Bounding absolute values of roots",
    "category": "section",
    "text": "roots_upper_bound(::arb_poly)\nroots_upper_bound(::acb_poly)"
},

{
    "location": "polynomial/#Nemo.lift-Tuple{FmpzPolyRing,nmod_poly}",
    "page": "Univariate polynomials",
    "title": "Nemo.lift",
    "category": "method",
    "text": "function lift(R::FmpzPolyRing, y::nmod_poly)\n\nLift from a polynomial over mathbbZnmathbbZ to a polynomial over mathbbZ with minimal reduced nonnegative coefficients. The ring R specifies the ring to lift into.\n\n\n\n"
},

{
    "location": "polynomial/#Nemo.lift-Tuple{FmpzPolyRing,gfp_poly}",
    "page": "Univariate polynomials",
    "title": "Nemo.lift",
    "category": "method",
    "text": "function lift(R::FmpzPolyRing, y::gfp_poly)\n\nLift from a polynomial over mathbbZnmathbbZ to a polynomial over mathbbZ with minimal reduced nonnegative coefficients. The ring R specifies the ring to lift into.\n\n\n\n"
},

{
    "location": "polynomial/#Nemo.lift-Tuple{FmpzPolyRing,fmpz_mod_poly}",
    "page": "Univariate polynomials",
    "title": "Nemo.lift",
    "category": "method",
    "text": "function lift(R::FmpzPolyRing, y::fmpz_mod_poly)\n\nLift from a polynomial over mathbbZnmathbbZ to a polynomial over mathbbZ with minimal reduced nonnegative coefficients. The ring R specifies the ring to lift into.\n\n\n\n"
},

{
    "location": "polynomial/#Nemo.lift-Tuple{FmpzPolyRing,gfp_fmpz_poly}",
    "page": "Univariate polynomials",
    "title": "Nemo.lift",
    "category": "method",
    "text": "function lift(R::FmpzPolyRing, y::gfp_fmpz_poly)\n\nLift from a polynomial over mathbbZnmathbbZ to a polynomial over mathbbZ with minimal reduced nonnegative coefficients. The ring R specifies the ring to lift into.\n\n\n\n"
},

{
    "location": "polynomial/#Lifting-1",
    "page": "Univariate polynomials",
    "title": "Lifting",
    "category": "section",
    "text": "When working over a residue ring it is useful to be able to lift to the base ring of the residue ring, e.g. from mathbbZnmathbbZ to mathbbZ.lift(::FmpzPolyRing, ::nmod_poly)\nlift(::FmpzPolyRing, ::gfp_poly)\nlift(::FmpzPolyRing, ::fmpz_mod_poly)\nlift(::FmpzPolyRing, ::gfp_fmpz_poly)ExamplesR = ResidueRing(ZZ, 123456789012345678949)\nS, x = PolynomialRing(R, \"x\")\nT, y = PolynomialRing(ZZ, \"y\")\n\nf = x^2 + 2x + 1\n\na = lift(T, f)"
},

{
    "location": "polynomial/#Nemo.overlaps-Tuple{arb_poly,arb_poly}",
    "page": "Univariate polynomials",
    "title": "Nemo.overlaps",
    "category": "method",
    "text": "overlaps(x::arb_poly, y::arb_poly)\n\nReturn true if the coefficient balls of x overlap the coefficient balls of y, otherwise return false.\n\n\n\n"
},

{
    "location": "polynomial/#Nemo.overlaps-Tuple{acb_poly,acb_poly}",
    "page": "Univariate polynomials",
    "title": "Nemo.overlaps",
    "category": "method",
    "text": "overlaps(x::acb_poly, y::acb_poly)\n\nReturn true if the coefficient boxes of x overlap the coefficient boxes of y, otherwise return false.\n\n\n\n"
},

{
    "location": "polynomial/#Nemo.contains-Tuple{arb_poly,arb_poly}",
    "page": "Univariate polynomials",
    "title": "Nemo.contains",
    "category": "method",
    "text": "contains(x::arb_poly, y::arb_poly)\n\nReturn true if the coefficient balls of x contain the corresponding coefficient balls of y, otherwise return false.\n\n\n\n"
},

{
    "location": "polynomial/#Nemo.contains-Tuple{acb_poly,acb_poly}",
    "page": "Univariate polynomials",
    "title": "Nemo.contains",
    "category": "method",
    "text": "contains(x::acb_poly, y::acb_poly)\n\nReturn true if the coefficient boxes of x contain the corresponding coefficient boxes of y, otherwise return false.\n\n\n\n"
},

{
    "location": "polynomial/#Nemo.contains-Tuple{arb_poly,fmpz_poly}",
    "page": "Univariate polynomials",
    "title": "Nemo.contains",
    "category": "method",
    "text": "contains(x::arb_poly, y::fmpz_poly)\n\nReturn true if the coefficient balls of x contain the corresponding exact coefficients of y, otherwise return false.\n\n\n\n"
},

{
    "location": "polynomial/#Nemo.contains-Tuple{arb_poly,fmpq_poly}",
    "page": "Univariate polynomials",
    "title": "Nemo.contains",
    "category": "method",
    "text": "contains(x::arb_poly, y::fmpq_poly)\n\nReturn true if the coefficient balls of x contain the corresponding exact coefficients of y, otherwise return false.\n\n\n\n"
},

{
    "location": "polynomial/#Nemo.contains-Tuple{acb_poly,fmpz_poly}",
    "page": "Univariate polynomials",
    "title": "Nemo.contains",
    "category": "method",
    "text": "contains(x::acb_poly, y::fmpz_poly)\n\nReturn true if the coefficient boxes of x contain the corresponding exact coefficients of y, otherwise return false.\n\n\n\n"
},

{
    "location": "polynomial/#Nemo.contains-Tuple{acb_poly,fmpq_poly}",
    "page": "Univariate polynomials",
    "title": "Nemo.contains",
    "category": "method",
    "text": "contains(x::acb_poly, y::fmpq_poly)\n\nReturn true if the coefficient boxes of x contain the corresponding exact coefficients of y, otherwise return false.\n\n\n\n"
},

{
    "location": "polynomial/#Nemo.unique_integer-Tuple{arb_poly}",
    "page": "Univariate polynomials",
    "title": "Nemo.unique_integer",
    "category": "method",
    "text": "unique_integer(x::arb_poly)\n\nReturn a tuple (t, z) where t is true if there is a unique integer contained in each of the coefficients of x, otherwise sets t to false. In the former case, z is set to the integer polynomial.\n\n\n\n"
},

{
    "location": "polynomial/#Nemo.unique_integer-Tuple{acb_poly}",
    "page": "Univariate polynomials",
    "title": "Nemo.unique_integer",
    "category": "method",
    "text": "unique_integer(x::acb_poly)\n\nReturn a tuple (t, z) where t is true if there is a unique integer contained in the (constant) polynomial x, along with that integer z in case it is, otherwise sets t to false.\n\n\n\n"
},

{
    "location": "polynomial/#Base.isreal-Tuple{acb_poly}",
    "page": "Univariate polynomials",
    "title": "Base.isreal",
    "category": "method",
    "text": "isreal(x::acb_poly)\n\nReturn true if all the coefficients of x are real, i.e. have exact zero imaginary parts.\n\n\n\n"
},

{
    "location": "polynomial/#Overlapping-and-containment-1",
    "page": "Univariate polynomials",
    "title": "Overlapping and containment",
    "category": "section",
    "text": "Occasionally it is useful to be able to tell when inexact polynomials overlap or contain other exact or inexact polynomials. The following functions are provided for this purpose.overlaps(::arb_poly, ::arb_poly)\noverlaps(::acb_poly, ::acb_poly)contains(::arb_poly, ::arb_poly)\ncontains(::acb_poly, ::acb_poly)contains(::arb_poly, ::fmpz_poly)\ncontains(::arb_poly, ::fmpq_poly)\ncontains(::acb_poly, ::fmpz_poly)\ncontains(::acb_poly, ::fmpq_poly)It is sometimes also useful to be able to determine if there is a unique integer contained in the coefficient of an inexact constant polynomial.unique_integer(::arb_poly)\nunique_integer(::acb_poly)We also have the following functions.isreal(::acb_poly)ExamplesRR = RealField(64)\nCC = ComplexField(64)\nR, x = PolynomialRing(RR, \"x\")\nC, y = PolynomialRing(CC, \"y\")\nZx, zx = PolynomialRing(ZZ, \"x\")\nQx, qx = PolynomialRing(QQ, \"x\")\n\nf = x^2 + 2x + 1\nh = f + RR(\"0 +/- 0.0001\")\nk = f + RR(\"0 +/- 0.0001\") * x^4\nm = y^2 + 2y + 1\nn = m + CC(\"0 +/- 0.0001\", \"0 +/- 0.0001\")\n\ncontains(h, f)\noverlaps(f, k)\ncontains(n, m)\nt, z = unique_integer(k)\nisreal(n)"
},

{
    "location": "polynomial/#Nemo.isirreducible-Tuple{nmod_poly}",
    "page": "Univariate polynomials",
    "title": "Nemo.isirreducible",
    "category": "method",
    "text": "isirreducible(x::nmod_poly)\n\nReturn true if x is irreducible, otherwise return false.\n\n\n\n"
},

{
    "location": "polynomial/#Nemo.isirreducible-Tuple{gfp_poly}",
    "page": "Univariate polynomials",
    "title": "Nemo.isirreducible",
    "category": "method",
    "text": "isirreducible(x::gfp_poly)\n\nReturn true if x is irreducible, otherwise return false.\n\n\n\n"
},

{
    "location": "polynomial/#Nemo.isirreducible-Tuple{fmpz_mod_poly}",
    "page": "Univariate polynomials",
    "title": "Nemo.isirreducible",
    "category": "method",
    "text": "isirreducible(x::fmpz_mod_poly)\n\nReturn true if x is irreducible, otherwise return false.\n\n\n\n"
},

{
    "location": "polynomial/#Nemo.isirreducible-Tuple{gfp_fmpz_poly}",
    "page": "Univariate polynomials",
    "title": "Nemo.isirreducible",
    "category": "method",
    "text": "isirreducible(x::gfp_fmpz_poly)\n\nReturn true if x is irreducible, otherwise return false.\n\n\n\n"
},

{
    "location": "polynomial/#Nemo.isirreducible-Tuple{fq_poly}",
    "page": "Univariate polynomials",
    "title": "Nemo.isirreducible",
    "category": "method",
    "text": "isirreducible(x::fq_poly)\n\nReturn true if x is irreducible, otherwise return false.\n\n\n\n"
},

{
    "location": "polynomial/#Nemo.isirreducible-Tuple{fq_nmod_poly}",
    "page": "Univariate polynomials",
    "title": "Nemo.isirreducible",
    "category": "method",
    "text": "isirreducible(x::fq_nmod_poly)\n\nReturn true if x is irreducible, otherwise return false.\n\n\n\n"
},

{
    "location": "polynomial/#Nemo.issquarefree-Tuple{nmod_poly}",
    "page": "Univariate polynomials",
    "title": "Nemo.issquarefree",
    "category": "method",
    "text": "issquarefree(x::nmod_poly)\n\nReturn true if x is squarefree, otherwise return false.\n\n\n\n"
},

{
    "location": "polynomial/#Nemo.issquarefree-Tuple{gfp_poly}",
    "page": "Univariate polynomials",
    "title": "Nemo.issquarefree",
    "category": "method",
    "text": "issquarefree(x::gfp_poly)\n\nReturn true if x is squarefree, otherwise return false.\n\n\n\n"
},

{
    "location": "polynomial/#Nemo.issquarefree-Tuple{fmpz_mod_poly}",
    "page": "Univariate polynomials",
    "title": "Nemo.issquarefree",
    "category": "method",
    "text": "issquarefree(x::fmpz_mod_poly)\n\nReturn true if x is squarefree, otherwise return false.\n\n\n\n"
},

{
    "location": "polynomial/#Nemo.issquarefree-Tuple{gfp_fmpz_poly}",
    "page": "Univariate polynomials",
    "title": "Nemo.issquarefree",
    "category": "method",
    "text": "issquarefree(x::gfp_fmpz_poly)\n\nReturn true if x is squarefree, otherwise return false.\n\n\n\n"
},

{
    "location": "polynomial/#Nemo.issquarefree-Tuple{fq_poly}",
    "page": "Univariate polynomials",
    "title": "Nemo.issquarefree",
    "category": "method",
    "text": "issquarefree(x::fq_poly)\n\nReturn true if x is squarefree, otherwise return false.\n\n\n\n"
},

{
    "location": "polynomial/#Nemo.issquarefree-Tuple{fq_nmod_poly}",
    "page": "Univariate polynomials",
    "title": "Nemo.issquarefree",
    "category": "method",
    "text": "issquarefree(x::fq_nmod_poly)\n\nReturn true if x is squarefree, otherwise return false.\n\n\n\n"
},

{
    "location": "polynomial/#Nemo.factor-Tuple{fmpz_poly}",
    "page": "Univariate polynomials",
    "title": "Nemo.factor",
    "category": "method",
    "text": "factor(x::fmpz_poly)\n\nReturns the factorization of x.\n\n\n\n"
},

{
    "location": "polynomial/#Nemo.factor-Tuple{nmod_poly}",
    "page": "Univariate polynomials",
    "title": "Nemo.factor",
    "category": "method",
    "text": "factor(x::nmod_poly)\n\nReturn the factorisation of x.\n\n\n\n"
},

{
    "location": "polynomial/#Nemo.factor-Tuple{gfp_poly}",
    "page": "Univariate polynomials",
    "title": "Nemo.factor",
    "category": "method",
    "text": "factor(x::gfp_poly)\n\nReturn the factorisation of x.\n\n\n\n"
},

{
    "location": "polynomial/#Nemo.factor-Tuple{fmpz_mod_poly}",
    "page": "Univariate polynomials",
    "title": "Nemo.factor",
    "category": "method",
    "text": "factor(x::fmpz_mod_poly)\n\nReturn the factorisation of x.\n\n\n\n"
},

{
    "location": "polynomial/#Nemo.factor-Tuple{gfp_fmpz_poly}",
    "page": "Univariate polynomials",
    "title": "Nemo.factor",
    "category": "method",
    "text": "factor(x::gfp_fmpz_poly)\n\nReturn the factorisation of x.\n\n\n\n"
},

{
    "location": "polynomial/#Nemo.factor-Tuple{fq_poly}",
    "page": "Univariate polynomials",
    "title": "Nemo.factor",
    "category": "method",
    "text": "factor(x::fq_poly)\n\nReturn the factorisation of x.\n\n\n\n"
},

{
    "location": "polynomial/#Nemo.factor-Tuple{fq_nmod_poly}",
    "page": "Univariate polynomials",
    "title": "Nemo.factor",
    "category": "method",
    "text": "factor(x::fq_nmod_poly)\n\nReturn the factorisation of x.\n\n\n\n"
},

{
    "location": "polynomial/#Nemo.factor_squarefree-Tuple{nmod_poly}",
    "page": "Univariate polynomials",
    "title": "Nemo.factor_squarefree",
    "category": "method",
    "text": "factor_squarefree(x::nmod_poly)\n\nReturn the squarefree factorisation of x.\n\n\n\n"
},

{
    "location": "polynomial/#Nemo.factor_squarefree-Tuple{gfp_poly}",
    "page": "Univariate polynomials",
    "title": "Nemo.factor_squarefree",
    "category": "method",
    "text": "factor_squarefree(x::gfp_poly)\n\nReturn the squarefree factorisation of x.\n\n\n\n"
},

{
    "location": "polynomial/#Nemo.factor_squarefree-Tuple{fmpz_mod_poly}",
    "page": "Univariate polynomials",
    "title": "Nemo.factor_squarefree",
    "category": "method",
    "text": "factor_squarefree(x::fmpz_mod_poly)\n\nReturn the squarefree factorisation of x.\n\n\n\n"
},

{
    "location": "polynomial/#Nemo.factor_squarefree-Tuple{gfp_fmpz_poly}",
    "page": "Univariate polynomials",
    "title": "Nemo.factor_squarefree",
    "category": "method",
    "text": "factor_squarefree(x::gfp_fmpz_poly)\n\nReturn the squarefree factorisation of x.\n\n\n\n"
},

{
    "location": "polynomial/#Nemo.factor_squarefree-Tuple{fq_poly}",
    "page": "Univariate polynomials",
    "title": "Nemo.factor_squarefree",
    "category": "method",
    "text": "factor_squarefree(x::fq_poly)\n\nReturn the squarefree factorisation of x.\n\n\n\n"
},

{
    "location": "polynomial/#Nemo.factor_squarefree-Tuple{fq_nmod_poly}",
    "page": "Univariate polynomials",
    "title": "Nemo.factor_squarefree",
    "category": "method",
    "text": "factor_squarefree(x::fq_nmod_poly)\n\nReturn the squarefree factorisation of x.\n\n\n\n"
},

{
    "location": "polynomial/#Nemo.factor_distinct_deg-Tuple{nmod_poly}",
    "page": "Univariate polynomials",
    "title": "Nemo.factor_distinct_deg",
    "category": "method",
    "text": "factor_distinct_deg(x::nmod_poly)\n\nReturn the distinct degree factorisation of a squarefree polynomial x.\n\n\n\n"
},

{
    "location": "polynomial/#Nemo.factor_distinct_deg-Tuple{gfp_poly}",
    "page": "Univariate polynomials",
    "title": "Nemo.factor_distinct_deg",
    "category": "method",
    "text": "factor_distinct_deg(x::gfp_poly)\n\nReturn the distinct degree factorisation of a squarefree polynomial x.\n\n\n\n"
},

{
    "location": "polynomial/#Nemo.factor_distinct_deg-Tuple{fmpz_mod_poly}",
    "page": "Univariate polynomials",
    "title": "Nemo.factor_distinct_deg",
    "category": "method",
    "text": "factor_distinct_deg(x::fmpz_mod_poly)\n\nReturn the distinct degree factorisation of a squarefree polynomial x.\n\n\n\n"
},

{
    "location": "polynomial/#Nemo.factor_distinct_deg-Tuple{gfp_fmpz_poly}",
    "page": "Univariate polynomials",
    "title": "Nemo.factor_distinct_deg",
    "category": "method",
    "text": "factor_distinct_deg(x::fmpz_mod_poly)\n\nReturn the distinct degree factorisation of a squarefree polynomial x.\n\n\n\n"
},

{
    "location": "polynomial/#Nemo.factor_distinct_deg-Tuple{fq_poly}",
    "page": "Univariate polynomials",
    "title": "Nemo.factor_distinct_deg",
    "category": "method",
    "text": "factor_distinct_deg(x::fq_poly)\n\nReturn the distinct degree factorisation of a squarefree polynomial x.\n\n\n\n"
},

{
    "location": "polynomial/#Nemo.factor_distinct_deg-Tuple{fq_nmod_poly}",
    "page": "Univariate polynomials",
    "title": "Nemo.factor_distinct_deg",
    "category": "method",
    "text": "factor_distinct_deg(x::fq_nmod_poly)\n\nReturn the distinct degree factorisation of a squarefree polynomial x.\n\n\n\n"
},

{
    "location": "polynomial/#Factorisation-1",
    "page": "Univariate polynomials",
    "title": "Factorisation",
    "category": "section",
    "text": "Polynomials can be factorised over certain rings. In general we use the same format for the output as the Julia factorisation function, namely an associative array with polynomial factors as keys and exponents as values.isirreducible(::nmod_poly)\nisirreducible(::gfp_poly)\nisirreducible(::fmpz_mod_poly)\nisirreducible(::gfp_fmpz_poly)\nisirreducible(::fq_poly)\nisirreducible(::fq_nmod_poly)issquarefree(::nmod_poly)\nissquarefree(::gfp_poly)\nissquarefree(::fmpz_mod_poly)\nissquarefree(::gfp_fmpz_poly)\nissquarefree(::fq_poly)\nissquarefree(::fq_nmod_poly)factor(::fmpz_poly)\nfactor(::nmod_poly)\nfactor(::gfp_poly)\nfactor(::fmpz_mod_poly)\nfactor(::gfp_fmpz_poly)\nfactor(::fq_poly)\nfactor(::fq_nmod_poly)factor_squarefree(::nmod_poly)\nfactor_squarefree(::gfp_poly)\nfactor_squarefree(::fmpz_mod_poly)\nfactor_squarefree(::gfp_fmpz_poly)\nfactor_squarefree(::fq_poly)\nfactor_squarefree(::fq_nmod_poly)factor_distinct_deg(::nmod_poly)\nfactor_distinct_deg(::gfp_poly)\nfactor_distinct_deg(::fmpz_mod_poly)\nfactor_distinct_deg(::gfp_fmpz_poly)\nfactor_distinct_deg(::fq_poly)\nfactor_distinct_deg(::fq_nmod_poly)ExamplesR = ResidueRing(ZZ, 23)\nS, x = PolynomialRing(R, \"x\")\n\nf = x^2 + 2x + 1\ng = x^3 + 3x + 1\n\nR = factor(f*g)\nS = factor_squarefree(f*g)\nT = factor_distinct_deg((x + 1)*g*(x^5+x^3+x+1))"
},

{
    "location": "polynomial/#Nemo.cyclotomic-Tuple{Int64,fmpz_poly}",
    "page": "Univariate polynomials",
    "title": "Nemo.cyclotomic",
    "category": "method",
    "text": "cyclotomic(n::Int, x::fmpz_poly)\n\nReturn the nth cyclotomic polynomial, defined as Phi_n(x) = prod_omega (x-omega) where omega runs over all the  nth primitive roots of unity.\n\n\n\n"
},

{
    "location": "polynomial/#Nemo.swinnerton_dyer-Tuple{Int64,fmpz_poly}",
    "page": "Univariate polynomials",
    "title": "Nemo.swinnerton_dyer",
    "category": "method",
    "text": "swinnerton_dyer(n::Int, x::fmpz_poly)\n\nReturn the Swinnerton-Dyer polynomial S_n, defined as the integer  polynomial S_n = prod (x pm sqrt2 pm sqrt3 pm sqrt5 pm ldots pm sqrtp_n)  where p_n denotes the n-th prime number and all combinations of signs are taken. This polynomial has degree 2^n and is irreducible over the integers (it is the minimal polynomial of sqrt2 + ldots + sqrtp_n).\n\n\n\n"
},

{
    "location": "polynomial/#Nemo.cos_minpoly-Tuple{Int64,fmpz_poly}",
    "page": "Univariate polynomials",
    "title": "Nemo.cos_minpoly",
    "category": "method",
    "text": "cos_minpoly(n::Int, x::fmpz_poly)\n\nReturn the minimal polynomial of 2 cos(2 pi  n). For suitable choice of  n, this gives the minimal polynomial of 2 cos(a pi) or 2 sin(a pi) for any rational a.\n\n\n\n"
},

{
    "location": "polynomial/#Nemo.theta_qexp-Tuple{Int64,Int64,fmpz_poly}",
    "page": "Univariate polynomials",
    "title": "Nemo.theta_qexp",
    "category": "method",
    "text": "theta_qexp(e::Int, n::Int, x::fmpz_poly)\n\nReturn the q-expansion to length n of the Jacobi theta function raised to the power r, i.e. vartheta(q)^r where  vartheta(q) = 1 + sum_k=1^infty q^k^2.\n\n\n\n"
},

{
    "location": "polynomial/#Nemo.eta_qexp-Tuple{Int64,Int64,fmpz_poly}",
    "page": "Univariate polynomials",
    "title": "Nemo.eta_qexp",
    "category": "method",
    "text": "eta_qexp(e::Int, n::Int, x::fmpz_poly)\n\nReturn the q-expansion to length n of the Dedekind eta function (without  the leading factor q^124) raised to the power r, i.e. (q^-124 eta(q))^r = prod_k=1^infty (1 - q^k)^r. In particular, r = -1 gives the generating function of the partition function p(k), and r = 24 gives, after multiplication by q, the modular discriminant Delta(q) which generates the Ramanujan tau function tau(k).\n\n\n\n"
},

{
    "location": "polynomial/#Special-functions-1",
    "page": "Univariate polynomials",
    "title": "Special functions",
    "category": "section",
    "text": "cyclotomic(::Int, ::fmpz_poly)swinnerton_dyer(::Int, ::fmpz_poly)cos_minpoly(::Int, ::fmpz_poly)theta_qexp(::Int, ::Int, ::fmpz_poly)eta_qexp(::Int, ::Int, ::fmpz_poly)ExamplesR, x = PolynomialRing(ZZ, \"x\")\nS, y = PolynomialRing(R, \"y\")\n\nh = cyclotomic(120, x)\nj = swinnerton_dyer(5, x)\nk = cos_minpoly(30, x)\nl = theta_qexp(3, 30, x)\nm = eta_qexp(24, 30, x)\no = cyclotomic(10, 1 + x + x^2)"
},

{
    "location": "series/#",
    "page": "Power series and Laurent series",
    "title": "Power series and Laurent series",
    "category": "page",
    "text": "CurrentModule = Nemo"
},

{
    "location": "series/#Power-series-and-Laurent-series-1",
    "page": "Power series and Laurent series",
    "title": "Power series and Laurent series",
    "category": "section",
    "text": "Nemo allows the creation of capped relative and absolute power series over any computable ring R. Capped relative power series are power series of the form a_jx^j + a_j+1x^j+1 + cdots + a_k-1x^k-1 + O(x^k) where j geq 0, a_j in R and the relative precision k - j is at most equal to some specified precision n. On the other hand capped absolute power series are power series of the form a_jx^j + a_j+1x^j+1 + cdots + a_n-1x^n-1 + O(x^n) where j geq 0, a_j in R and the precision n is fixed.There are two different kinds of implementation: a generic one for the case where no specific implementation exists (provided by AbstractAlgebra.jl), and efficient implementations of power series over numerous specific rings, usually provided by C/C++ libraries.The following table shows each of the relative power series types available in Nemo, the base ring R, and the Julia/Nemo types for that kind of series (the type information is mainly of concern to developers).Base ring Library Element type Parent type\nGeneric ring R AbstractAlgebra.jl `Generic.RelSeries{T} Generic.RelSeriesRing{T}\nmathbbZ Flint fmpz_rel_series FmpzRelSeriesRing\nmathbbZnmathbbZ (small n) Flint nmodrelseries NmodRelSeriesRing\nmathbbZnmathbbZ Flint fmpz_mod_rel_series FmpzModRelSeriesRing\nmathbbQ Flint fmpq_rel_series FmpqRelSeriesRing\nmathbbF_p^n (small p) Flint fq_nmod_rel_series FqNmodRelSeriesRing\nmathbbF_p^n (large p) Flint fq_rel_series FqRelSeriesRingAll relative power series elements belong to the abstract type RelSeriesElem and all of the relative power series ring types belong to the abstract type RelSeriesRing.The maximum relative precision, the string representation of the variable and the base ring R of a generic power series are stored in its parent object. Here is the corresponding table for the absolute power series types.Base ring Library Element type Parent type\nGeneric ring R AbstractAlgebra.jl Generic.AbsSeries{T} Generic.AbsSeriesRing{T}\nmathbbZ Flint fmpz_abs_series FmpzAbsSeriesRing\nmathbbZnmathbbZ Flint fmpz_mod_abs_series FmpzModAbsSeriesRing\nmathbbQ Flint fmpq_abs_series FmpqAbsSeriesRing\nmathbbF_p^n (small n) Flint fq_nmod_abs_series FqNmodAbsSeriesRing\nmathbbF_p^n (large n) Flint fq_abs_series FqAbsSeriesRingAll absolute power series elements belong to the abstract type AbsSeriesElem and all of the absolute power series ring types belong to the abstract type AbsSeriesRing.The absolute precision, the string representation of the variable and the base ring R of a generic power series are stored in its parent object. All power series element types belong to the abstract type SeriesElem and all of the power series ring types belong to the abstract type SeriesRing. This enables one to write generic functions that can accept any Nemo power series type.AbstractAlgebra.jl also provides Nemo with a generic implementation of Laurent series over a given ring R. For completeness, we list it here.Base ring Library Element type Parent type\nGeneric ring R AbstractAlgebra.jl Generic.LaurentSeriesRingElem{T} Generic.LaurenSeriesRing{T}\nGeneric field K AbstractAlgebra.jl Generic.LaurentSeriesFieldElem{T} Generic.LaurenSeriesField{T}"
},

{
    "location": "series/#Capped-relative-power-series-1",
    "page": "Power series and Laurent series",
    "title": "Capped relative power series",
    "category": "section",
    "text": "Capped relative power series have their maximum relative precision capped at some value prec_max. This means that if the leading term of a nonzero power series element is c_ax^a and the precision is b then the power series is of the form  c_ax^a + c_a+1x^a+1 + ldots + O(x^a + b).The zero power series is simply taken to be 0 + O(x^b).The capped relative model has the advantage that power series are stable multiplicatively. In other words, for nonzero power series f and g we have that divexact(f*g), g) == f.However, capped relative power series are not additively stable, i.e. we do not always have (f + g) - g = f.In the capped relative model we say that two power series are equal if they agree up to the minimum absolute precision of the two power series. Thus, for example, x^5 + O(x^10) == 0 + O(x^5), since the minimum absolute precision is 5.During computations, it is possible for power series to lose relative precision due to cancellation. For example if f = x^3 + x^5 + O(x^8) and g = x^3 + x^6 + O(x^8) then f - g = x^5 - x^6 + O(x^8) which now has relative precision 3 instead of relative precision 5.Amongst other things, this means that equality is not transitive. For example x^6 + O(x^11) == 0 + O(x^5) and x^7 + O(x^12) == 0 + O(x^5) but x^6 + O(x^11) neq x^7 + O(x^12).Sometimes it is necessary to compare power series not just for arithmetic equality, as above, but to see if they have precisely the same precision and terms. For this purpose we introduce the isequal function.For example, if f = x^2 + O(x^7) and g = x^2 + O(x^8) and h = 0 + O(x^2) then f == g, f == h and g == h, but isequal(f, g), isequal(f, h) and isequal(g, h) would all return false. However, if k = x^2 + O(x^7) then isequal(f, k) would return true.There are further difficulties if we construct polynomial over power series. For example, consider the polynomial in y over the power series ring in x over the rationals. Normalisation of such polynomials is problematic. For instance, what is the leading coefficient of (0 + O(x^10))y + (1 + O(x^10))?If one takes it to be (0 + O(x^10)) then some functions may not terminate due to the fact that algorithms may require the degree of polynomials to decrease with each iteration. Instead, the degree may remain constant and simply accumulate leading terms which are arithmetically zero but not identically zero.On the other hand, when constructing power series over other power series, if we simply throw away terms which are arithmetically equal to zero, our computations may have different output depending on the order in which the power series are added!One should be aware of these difficulties when working with power series. Power series, as represented on a computer, simply don\'t satisfy the axioms of a ring. They must be used with care in order to approximate operations in a mathematical power series ring.Simply increasing the precision will not necessarily give a \"more correct\" answer and some computations may not even terminate due to the presence of arithmetic zeroes!"
},

{
    "location": "series/#Capped-absolute-power-series-1",
    "page": "Power series and Laurent series",
    "title": "Capped absolute power series",
    "category": "section",
    "text": "An absolute power series ring over a ring R with precision p behaves  very much like the quotient Rx(x^p) of the polynomial ring over R."
},

{
    "location": "series/#Power-series-functionality-1",
    "page": "Power series and Laurent series",
    "title": "Power series functionality",
    "category": "section",
    "text": "Power series rings in Nemo implement the AbstractAlgebra.jl series interface:https://nemocas.github.io/AbstractAlgebra.jl/series_rings.htmlIn addition, generic power series and Laurent series are provided by AbstractAlgebra.jl:https://nemocas.github.io/AbstractAlgebra.jl/series.htmlPower series rings in Nemo also implement this generic functionality. We list below only the functionality that differs from this generic functionality, for specific rings provided by Nemo."
},

{
    "location": "series/#Base.log-Tuple{fmpq_rel_series}",
    "page": "Power series and Laurent series",
    "title": "Base.log",
    "category": "method",
    "text": "log(a::fmpqrelseries)\n\nReturn log(a). Requires the constant term to be one.\n\n\n\n"
},

{
    "location": "series/#Base.sqrt-Tuple{fmpq_rel_series}",
    "page": "Power series and Laurent series",
    "title": "Base.sqrt",
    "category": "method",
    "text": "sqrt(a::fmpqrelseries)\n\nReturn the power series square root of a. Requires a constant term equal to one.\n\n\n\n"
},

{
    "location": "series/#Base.tan-Tuple{fmpq_rel_series}",
    "page": "Power series and Laurent series",
    "title": "Base.tan",
    "category": "method",
    "text": "tan(a::fmpqrelseries)\n\nReturn tan(a). Requires a zero constant term.\n\n\n\n"
},

{
    "location": "series/#Base.tanh-Tuple{fmpq_rel_series}",
    "page": "Power series and Laurent series",
    "title": "Base.tanh",
    "category": "method",
    "text": "tanh(a::fmpqrelseries)\n\nReturn tanh(a). Requires a zero constant term.\n\n\n\n"
},

{
    "location": "series/#Base.sin-Tuple{fmpq_rel_series}",
    "page": "Power series and Laurent series",
    "title": "Base.sin",
    "category": "method",
    "text": "sin(a::fmpqrelseries)\n\nReturn sin(a). Requires a zero constant term.\n\n\n\n"
},

{
    "location": "series/#Base.sinh-Tuple{fmpq_rel_series}",
    "page": "Power series and Laurent series",
    "title": "Base.sinh",
    "category": "method",
    "text": "sinh(a::fmpqrelseries)\n\nReturn sinh(a). Requires a zero constant term.\n\n\n\n"
},

{
    "location": "series/#Base.cos-Tuple{fmpq_rel_series}",
    "page": "Power series and Laurent series",
    "title": "Base.cos",
    "category": "method",
    "text": "cos(a::fmpqrelseries)\n\nReturn cos(a). Requires a zero constant term.\n\n\n\n"
},

{
    "location": "series/#Base.cosh-Tuple{fmpq_rel_series}",
    "page": "Power series and Laurent series",
    "title": "Base.cosh",
    "category": "method",
    "text": "cosh(a::fmpqrelseries)\n\nReturn cosh(a). Requires a zero constant term.\n\n\n\n"
},

{
    "location": "series/#Base.asin-Tuple{fmpq_rel_series}",
    "page": "Power series and Laurent series",
    "title": "Base.asin",
    "category": "method",
    "text": "asin(a::fmpqrelseries)\n\nReturn asin(a). Requires a zero constant term.\n\n\n\n"
},

{
    "location": "series/#Base.asinh-Tuple{fmpq_rel_series}",
    "page": "Power series and Laurent series",
    "title": "Base.asinh",
    "category": "method",
    "text": "asinh(a::fmpqrelseries)\n\nReturn asinh(a). Requires a zero constant term.\n\n\n\n"
},

{
    "location": "series/#Base.atan-Tuple{fmpq_rel_series}",
    "page": "Power series and Laurent series",
    "title": "Base.atan",
    "category": "method",
    "text": "atan(a::fmpqrelseries)\n\nReturn atan(a). Requires a zero constant term.\n\n\n\n"
},

{
    "location": "series/#Base.atanh-Tuple{fmpq_rel_series}",
    "page": "Power series and Laurent series",
    "title": "Base.atanh",
    "category": "method",
    "text": "atanh(a::fmpqrelseries)\n\nReturn atanh(a). Requires a zero constant term.\n\n\n\n"
},

{
    "location": "series/#Special-functions-1",
    "page": "Power series and Laurent series",
    "title": "Special functions",
    "category": "section",
    "text": "log(a::fmpq_rel_series)Base.sqrt(a::fmpq_rel_series)tan(a::fmpq_rel_series)\ntanh(a::fmpq_rel_series)\nsin(a::fmpq_rel_series)\nsinh(a::fmpq_rel_series)\ncos(a::fmpq_rel_series)\ncosh(a::fmpq_rel_series)asin(a::fmpq_rel_series)\nasinh(a::fmpq_rel_series)\natan(a::fmpq_rel_series)\natanh(a::fmpq_rel_series)ExamplesS, x = PowerSeriesRing(R, 30, \"x\")\nT, z = PowerSeriesRing(QQ, 30, \"z\")\n\na = 1 + z + 3z^2 + O(z^5)\nb = z + 2z^2 + 5z^3 + O(z^5)\n\nd = divexact(x, exp(x + O(x^40)) - 1)\nf = exp(b)\ng = log(a)\nh = sqrt(a)\nk = sin(b)\nm = atanh(b)"
},

{
    "location": "puiseux/#",
    "page": "Puiseux series",
    "title": "Puiseux series",
    "category": "page",
    "text": "CurrentModule = Nemo"
},

{
    "location": "puiseux/#Puiseux-series-1",
    "page": "Puiseux series",
    "title": "Puiseux series",
    "category": "section",
    "text": "Nemo allows the creation of Puiseux series over any computable ring R. Puiseux series are series of the form a_jx^jm + a_j+1x^(j+1)m + cdots + a_k-1x^(k-1)m + O(x^km) where m is a positive integer, a_i in R and the relative precision k - j is at most equal to some specified precision n.There are two different kinds of implementation: a generic one for the case where no specific implementation exists (provided by AbstractAlgebra.jl), and efficient implementations of Puiseux series over numerous specific rings, usually provided by C/C++ libraries.The following table shows each of the Puiseux series types available in Nemo, the base ring R, and the Julia/Nemo types for that kind of series (the type information is mainly of concern to developers).Base ring Library Element type Parent type\nGeneric ring R AbstractAlgebra.jl `Generic.PuiseuxSeriesRingElem{T} Generic.PuiseuxSeriesRing{T}\nGeneric field K AbstractAlgebra.jl `Generic.PuiseuxSeriesFieldElem{T} Generic.PuiseuxSeriesField{T}\nmathbbZ Flint FlintPuiseuxSeriesRingElem{fmpz_laurent_series} FlintPuiseuxSeriesRing{fmpz_laurent_series}For convenience, FlintPuiseuxSeriesRingElem and FlintPuiseuxSeriesFieldElem both belong to a union type called FlintPuiseuxSeriesElem.The maximum relative precision, the string representation of the variable and the base ring R of a generic power series are stored in the parent object. Note that unlike most other Nemo types, Puiseux series are parameterised by the type of the underlying Laurent series type (which must exist before Nemo can make use of it), instead of the type of the coefficients."
},

{
    "location": "puiseux/#Puiseux-power-series-1",
    "page": "Puiseux series",
    "title": "Puiseux power series",
    "category": "section",
    "text": "Puiseux series have their maximum relative precision capped at some value prec_max. This refers to the maximum precision of the underlying Laurent series. See the description of the generic Puiseux series in AbstractAlgebra.jl for details.There are numerous important things to be aware of when working with Puiseux series, or series in general. Please refer to the documentation of generic Puiseux series and  series in general in AbstractAlgebra.jl for details."
},

{
    "location": "puiseux/#Puiseux-series-functionality-1",
    "page": "Puiseux series",
    "title": "Puiseux series functionality",
    "category": "section",
    "text": "Puiseux series rings in Nemo implement the AbstractAlgebra.jl series interface, with the exception of the pol_length and polcoeff functions:https://nemocas.github.io/AbstractAlgebra.jl/series_rings.htmlIn addition, generic Puiseux series are provided by AbstractAlgebra.jl:https://nemocas.github.io/AbstractAlgebra.jl/puiseux.htmlPuiseux series rings in Nemo also implement this generic functionality. We list below only the functionality that differs from this generic functionality, for specific rings provided by Nemo."
},

{
    "location": "puiseux/#Base.sqrt-Tuple{Union{FlintPuiseuxSeriesFieldElem{fmpz_laurent_series}, FlintPuiseuxSeriesRingElem{fmpz_laurent_series}}}",
    "page": "Puiseux series",
    "title": "Base.sqrt",
    "category": "method",
    "text": "sqrt{T <: RingElem}(a::FlintPuiseuxSeriesElem{T})\n\nReturn the square root of the given Puiseux series.\n\n\n\n"
},

{
    "location": "puiseux/#Base.exp-Tuple{Union{FlintPuiseuxSeriesFieldElem{fmpz_laurent_series}, FlintPuiseuxSeriesRingElem{fmpz_laurent_series}}}",
    "page": "Puiseux series",
    "title": "Base.exp",
    "category": "method",
    "text": "exp{T <: RingElem}(a::FlintPuiseuxSeriesElem{T})\n\nReturn the exponential of the given Puiseux series.\n\n\n\n"
},

{
    "location": "puiseux/#Nemo.eta_qexp-Tuple{Union{FlintPuiseuxSeriesFieldElem{fmpz_laurent_series}, FlintPuiseuxSeriesRingElem{fmpz_laurent_series}}}",
    "page": "Puiseux series",
    "title": "Nemo.eta_qexp",
    "category": "method",
    "text": "eta_qexp(x::FlintPuiseuxSeriesElem{fmpz_laurent_series})\n\nReturn the q-series for eta evaluated at x, which must currently be a rational power of the generator of the Puiseux series ring.\n\n\n\n"
},

{
    "location": "puiseux/#Special-functions-1",
    "page": "Puiseux series",
    "title": "Special functions",
    "category": "section",
    "text": "Base.sqrt(a::FlintPuiseuxSeriesElem{fmpz_laurent_series})Base.exp(a::FlintPuiseuxSeriesElem{fmpz_laurent_series})eta_qexp(x::FlintPuiseuxSeriesElem{fmpz_laurent_series})ExamplesS, x = PuiseuxSeriesRing(ZZ, 30, \"x\")\n\na = 1 + z + 3z^2 + O(z^5)\n\nh = sqrt(a^2)\nk = eta_qexp(S)"
},

{
    "location": "residue/#",
    "page": "Residue rings",
    "title": "Residue rings",
    "category": "page",
    "text": "CurrentModule = Nemo"
},

{
    "location": "residue/#Residue-rings-1",
    "page": "Residue rings",
    "title": "Residue rings",
    "category": "section",
    "text": "Nemo allows the creation of residue rings of the form R(a) for an element a of a ring R.We don\'t require (a) to be a prime or maximal ideal. Instead, we allow the creation of the residue ring R(a) for any nonzero a and simply raise an exception if an impossible inverse is encountered during computations  involving elements of R(a). Of course, a GCD function must be available for the base ring R.There is a generic implementation of residue rings of this form in AbstractAlgebra.jl, which accepts any ring R as base ring.The associated types of parent object and elements for each kind of residue rings in Nemo are given in the following table.Base ring Library Element type Parent type\nGeneric ring R AbstractAlgebra.jl Generic.Res{T} Generic.ResRing{T}\nmathbbZ Flint nmod NmodRingThe modulus a of a residue ring is stored in its parent object.All residue element types belong to the abstract type ResElem and all the residue ring parent object types belong to the abstract type ResRing. This enables one to write generic functions that accept any Nemo residue type."
},

{
    "location": "residue/#Residue-functionality-1",
    "page": "Residue rings",
    "title": "Residue functionality",
    "category": "section",
    "text": "All the residue rings in Nemo implement the residue ring interface of AbstractAlgebra.jl:https://nemocas.github.io/AbstractAlgebra.jl/residue_rings.htmlIn addition, functionality for generic residue rings is available:https://nemocas.github.io/AbstractAlgebra.jl/residue.htmlThe other residue types in Nemo also implement this functionality."
},

{
    "location": "residue/#Base.gcdx-Tuple{Nemo.nmod,Nemo.nmod}",
    "page": "Residue rings",
    "title": "Base.gcdx",
    "category": "method",
    "text": "gcdx(a::nmod, b::nmod)\n\nCompute the extended gcd with the Euclidean structure inherited from mathbbZ.\n\n\n\n"
},

{
    "location": "residue/#Base.gcdx-Tuple{ResElem{fmpz},ResElem{fmpz}}",
    "page": "Residue rings",
    "title": "Base.gcdx",
    "category": "method",
    "text": "gcdx(a::ResElem{fmpz}, b::ResElem{fmpz})\n\nCompute the extended gcd with the Euclidean structure inherited from mathbbZ.\n\n\n\n"
},

{
    "location": "residue/#GCD-1",
    "page": "Residue rings",
    "title": "GCD",
    "category": "section",
    "text": "gcdx(::nmod, ::nmod)\ngcdx(::ResElem{fmpz}, ::ResElem{fmpz})ExamplesR = ResidueRing(ZZ, 123456789012345678949)\n\ng, s, t = gcdx(R(123), R(456))"
},

{
    "location": "fraction/#",
    "page": "Fraction fields",
    "title": "Fraction fields",
    "category": "page",
    "text": "CurrentModule = Nemo"
},

{
    "location": "fraction/#Fraction-fields-1",
    "page": "Fraction fields",
    "title": "Fraction fields",
    "category": "section",
    "text": "Nemo allows the creation of fraction fields over any ring R. We don\'t require R to be an integral domain, however no attempt is made to deal with the general case. Two fractions ab and cd are equal in Nemo iff ad = bc. Thus, in practice, a greatest common divisor function is currently required for the ring R.In order to make the representation ab unique for printing, we have a notion of canonical unit for elements of a ring R. When canonicalising ab, each of the elements a and b is first divided by the canonical unit of b.The canonical_unit function is defined for elements of every Nemo ring. It must have the propertiescanonical_unit(u) == u\ncanonical_unit(a*b) == canonical_unit(a)*canonical_unit(b)for any unit u of the ring in question, and a and b arbitrary elements of the ring.For example, the canonical unit of an integer is its sign. Thus a fraction of integers always has positive denominator after canonicalisation.The canonical unit of a polynomial is the canonical unit of its leading coefficient, etc.There are two different kinds of implementation of fraction fields in Nemo: a generic one for the case where no specific implementation exists (provided by AbstractAlgebra.jl), and efficient implementations of fractions over specific rings, usually provided by C/C++ libraries.The following table shows each of the fraction types available in Nemo, the base ring R, and the Julia/Nemo types for that kind of fraction (the type information is mainly of concern to developers).Base ring Library Element type Parent type\nGeneric ring R AbstractAlgebra.jl Generic.Frac{T} Generic.FracField{T}\nmathbbZ Flint fmpq FlintRationalFieldAll fraction element types belong to the abstract type FracElem and all of the fraction field types belong to the abstract type FracField. This enables one to write generic functions that can accept any Nemo fraction type."
},

{
    "location": "fraction/#Fraction-functionality-1",
    "page": "Fraction fields",
    "title": "Fraction functionality",
    "category": "section",
    "text": "All fraction types in Nemo implement the AbstractAlgebra.jl fraction field interface:https://nemocas.github.io/AbstractAlgebra.jl/fraction_fields.htmlIn addition, generic fractions fields are implemented in AbstractAlgebra.jl, with the following functionality:https://nemocas.github.io/AbstractAlgebra.jl/fraction.htmlAll fraction types in Nemo also implement this generic functionality."
},

{
    "location": "fraction/#Base.abs-Tuple{fmpq}",
    "page": "Fraction fields",
    "title": "Base.abs",
    "category": "method",
    "text": "abs(a::fmpq)\n\nReturn the absolute value of a.\n\n\n\n"
},

{
    "location": "fraction/#Nemo.height-Tuple{fmpq}",
    "page": "Fraction fields",
    "title": "Nemo.height",
    "category": "method",
    "text": "height(a::fmpq)\n\nReturn the height of the fraction a, namely the largest of the absolute values of the numerator and denominator.\n\n\n\n"
},

{
    "location": "fraction/#Nemo.height_bits-Tuple{fmpq}",
    "page": "Fraction fields",
    "title": "Nemo.height_bits",
    "category": "method",
    "text": "height_bits(a::fmpq)\n\nReturn the number of bits of the height of the fraction a.\n\n\n\n"
},

{
    "location": "fraction/#Base.:<<-Tuple{fmpq,Int64}",
    "page": "Fraction fields",
    "title": "Base.:<<",
    "category": "method",
    "text": "<<(a::fmpq, b::Int)\n\nReturn 2^btimes a.\n\n\n\n"
},

{
    "location": "fraction/#Base.:>>-Tuple{fmpq,Int64}",
    "page": "Fraction fields",
    "title": "Base.:>>",
    "category": "method",
    "text": "<<(a::fmpq, b::Int)\n\nReturn 2^ba.\n\n\n\n"
},

{
    "location": "fraction/#Base.isless-Tuple{fmpq,fmpq}",
    "page": "Fraction fields",
    "title": "Base.isless",
    "category": "method",
    "text": "isless(a::fmpq, b::fmpq)\n\nReturn true if a  b, otherwise return false.\n\n\n\n"
},

{
    "location": "fraction/#Base.isless-Tuple{Integer,fmpq}",
    "page": "Fraction fields",
    "title": "Base.isless",
    "category": "method",
    "text": "isless(a::Integer, b::fmpq)\n\nReturn true if a  b, otherwise return false.\n\n\n\n"
},

{
    "location": "fraction/#Base.isless-Tuple{fmpq,Integer}",
    "page": "Fraction fields",
    "title": "Base.isless",
    "category": "method",
    "text": "isless(a::fmpq, b::Integer)\n\nReturn true if a  b, otherwise return false.\n\n\n\n"
},

{
    "location": "fraction/#Base.isless-Tuple{fmpq,fmpz}",
    "page": "Fraction fields",
    "title": "Base.isless",
    "category": "method",
    "text": "isless(a::fmpq, b::fmpz)\n\nReturn true if a  b, otherwise return false.\n\n\n\n"
},

{
    "location": "fraction/#Base.isless-Tuple{fmpz,fmpq}",
    "page": "Fraction fields",
    "title": "Base.isless",
    "category": "method",
    "text": "isless(a::fmpz, b::fmpq)\n\nReturn true if a  b, otherwise return false.\n\n\n\n"
},

{
    "location": "fraction/#Basic-manipulation-1",
    "page": "Fraction fields",
    "title": "Basic manipulation",
    "category": "section",
    "text": "abs(::fmpq)height(::fmpq)height_bits(::fmpq)<<(::fmpq, ::Int)>>(::fmpq, ::Int)Rational fractions can be compared with each other and with integers. Julia provides the full range of operators   leq geq which depend on the following functions.isless(::fmpq, ::fmpq)\nisless(::Integer, ::fmpq)\nisless(::fmpq, ::Integer)\nisless(::fmpq, ::fmpz)\nisless(::fmpz, ::fmpq)Examplesd = abs(ZZ(11)//3)\n4 <= ZZ(7)//ZZ(3)"
},

{
    "location": "fraction/#Base.mod-Tuple{fmpq,fmpz}",
    "page": "Fraction fields",
    "title": "Base.mod",
    "category": "method",
    "text": "mod(a::fmpq, b::fmpz)\n\nReturn a pmodb where b is an integer coprime to the denominator of a.\n\n\n\n"
},

{
    "location": "fraction/#Base.mod-Tuple{fmpq,Integer}",
    "page": "Fraction fields",
    "title": "Base.mod",
    "category": "method",
    "text": "mod(a::fmpq, b::Integer)\n\nReturn a pmodb where b is an integer coprime to the denominator of a.\n\n\n\n"
},

{
    "location": "fraction/#Modular-arithmetic-1",
    "page": "Fraction fields",
    "title": "Modular arithmetic",
    "category": "section",
    "text": "The following functions are available for rationals.mod(a::fmpq, b::fmpz)mod(a::fmpq, b::Integer)Examplesa = -fmpz(2)//3\nb = fmpz(1)//2\n\nc = mod(a, 7)\nd = mod(b, fmpz(5))"
},

{
    "location": "fraction/#Nemo.reconstruct-Tuple{fmpz,fmpz}",
    "page": "Fraction fields",
    "title": "Nemo.reconstruct",
    "category": "method",
    "text": "reconstruct(a::fmpz, b::fmpz)\n\nAttempt to find a rational number nd such that 0 leq n leq lfloorsqrtm2rfloor and 0  d leq lfloorsqrtm2rfloor such that gcd(n d) = 1 and a equiv nd^-1 pmodm. If no solution exists, an exception is thrown.\n\n\n\n"
},

{
    "location": "fraction/#Nemo.reconstruct-Tuple{fmpz,Integer}",
    "page": "Fraction fields",
    "title": "Nemo.reconstruct",
    "category": "method",
    "text": "reconstruct(a::fmpz, b::Integer)\n\nAttempt to find a rational number nd such that 0 leq n leq lfloorsqrtm2rfloor and 0  d leq lfloorsqrtm2rfloor such that gcd(n d) = 1 and a equiv nd^-1 pmodm. If no solution exists, an exception is thrown.\n\n\n\n"
},

{
    "location": "fraction/#Nemo.reconstruct-Tuple{Integer,fmpz}",
    "page": "Fraction fields",
    "title": "Nemo.reconstruct",
    "category": "method",
    "text": "reconstruct(a::Integer, b::fmpz)\n\nAttempt to find a rational number nd such that 0 leq n leq lfloorsqrtm2rfloor and 0  d leq lfloorsqrtm2rfloor such that gcd(n d) = 1 and a equiv nd^-1 pmodm. If no solution exists, an exception is thrown.\n\n\n\n"
},

{
    "location": "fraction/#Nemo.reconstruct-Tuple{Integer,Integer}",
    "page": "Fraction fields",
    "title": "Nemo.reconstruct",
    "category": "method",
    "text": "reconstruct(a::Integer, b::Integer)\n\nAttempt to find a rational number nd such that 0 leq n leq lfloorsqrtm2rfloor and 0  d leq lfloorsqrtm2rfloor such that gcd(n d) = 1 and a equiv nd^-1 pmodm. If no solution exists, an exception is thrown.\n\n\n\n"
},

{
    "location": "fraction/#Rational-Reconstruction-1",
    "page": "Fraction fields",
    "title": "Rational Reconstruction",
    "category": "section",
    "text": "Rational reconstruction is available for rational numbers.reconstruct(::fmpz, ::fmpz)\nreconstruct(::fmpz, ::Integer)\nreconstruct(::Integer, ::fmpz)\nreconstruct(::Integer, ::Integer)Examplesa = reconstruct(7, 13)\nb = reconstruct(fmpz(15), 31)\nc = reconstruct(fmpz(123), fmpz(237))"
},

{
    "location": "fraction/#Nemo.next_minimal-Tuple{fmpq}",
    "page": "Fraction fields",
    "title": "Nemo.next_minimal",
    "category": "method",
    "text": "next_minimal(a::fmpq)\n\nGiven x, returns the next rational number in the sequence obtained by enumerating all positive denominators q, and for each q enumerating the numerators 1 le p  q in order and generating both pq and qp, but skipping all gcd(pq) neq 1. Starting with zero, this generates every nonnegative rational number once and only once, with the first few entries being 0 1 12 2 13 3 23 32 14 4 34 43 ldots. This enumeration produces the rational numbers in order of minimal height. It has the disadvantage of being somewhat slower to compute than the Calkin-Wilf enumeration. If x  0 we throw a DomainError().\n\n\n\n"
},

{
    "location": "fraction/#Nemo.next_signed_minimal-Tuple{fmpq}",
    "page": "Fraction fields",
    "title": "Nemo.next_signed_minimal",
    "category": "method",
    "text": "next_signed_minimal(a::fmpq)\n\nGiven a signed rational number x assumed to be in canonical form, returns the next element in the minimal-height sequence generated by next_minimal but with negative numbers interleaved. The sequence begins 0 1 -1 12 -12 2 -2 13 -13 ldots. Starting with zero, this generates every rational number once and only once, in order of minimal height.\n\n\n\n"
},

{
    "location": "fraction/#Nemo.next_calkin_wilf-Tuple{fmpq}",
    "page": "Fraction fields",
    "title": "Nemo.next_calkin_wilf",
    "category": "method",
    "text": "next_calkin_wilf(a::fmpq)\n\nGiven x return the next number in the breadth-first traversal of the Calkin-Wilf tree. Starting with zero, this generates every nonnegative rational number once and only once, with the first few entries being 0 1 12 2 13 32 23 3 14 43 35 52 25 ldots. Despite the appearance of the initial entries, the Calkin-Wilf enumeration does not produce the rational numbers in order of height: some small fractions will appear late in the sequence. This order has the advantage of being faster to produce than the minimal-height order.\n\n\n\n"
},

{
    "location": "fraction/#Nemo.next_signed_calkin_wilf-Tuple{fmpq}",
    "page": "Fraction fields",
    "title": "Nemo.next_signed_calkin_wilf",
    "category": "method",
    "text": "next_signed_calkin_wilf(a::fmpq)\n\nGiven a signed rational number x returns the next element in the Calkin-Wilf sequence with negative numbers interleaved. The sequence begins 0 1 -1 12 -12 2 -2 13 -13 ldots. Starting with zero, this generates every rational number once and only once, but not in order of minimal height.\n\n\n\n"
},

{
    "location": "fraction/#Rational-enumeration-1",
    "page": "Fraction fields",
    "title": "Rational enumeration",
    "category": "section",
    "text": "Various methods exist to enumerate rationals.next_minimal(::fmpq)next_signed_minimal(::fmpq)next_calkin_wilf(::fmpq)next_signed_calkin_wilf(::fmpq)Examplesnext_minimal(fmpz(2)//3)\nnext_signed_minimal(-fmpz(21)//31)\nnext_calkin_wilf(fmpz(321)//113)\nnext_signed_calkin_wilf(-fmpz(51)//(17))"
},

{
    "location": "fraction/#Nemo.harmonic-Tuple{Int64}",
    "page": "Fraction fields",
    "title": "Nemo.harmonic",
    "category": "method",
    "text": "harmonic(n::Int)\n\nComputes the harmonic number H_n = 1 + 12 + 13 + cdots + 1n. Table lookup is used for H_n whose numerator and denominator fit in a single limb. For larger n, a divide and conquer strategy is used.\n\n\n\n"
},

{
    "location": "fraction/#Nemo.bernoulli-Tuple{Int64}",
    "page": "Fraction fields",
    "title": "Nemo.bernoulli",
    "category": "method",
    "text": "bernoulli(n::Int)\n\nComputes the Bernoulli number B_n for nonnegative n.\n\n\n\n"
},

{
    "location": "fraction/#Nemo.bernoulli_cache-Tuple{Int64}",
    "page": "Fraction fields",
    "title": "Nemo.bernoulli_cache",
    "category": "method",
    "text": "bernoulli_cache(n::Int)\n\nPrecomputes and caches all the Bernoulli numbers up to B_n. This is much faster than repeatedly calling bernoulli(k). Once cached, subsequent calls to bernoulli(k) for any k le n will read from the cache, making them virtually free.\n\n\n\n"
},

{
    "location": "fraction/#Nemo.dedekind_sum-Tuple{fmpz,fmpz}",
    "page": "Fraction fields",
    "title": "Nemo.dedekind_sum",
    "category": "method",
    "text": "dedekind_sum(h::fmpz, k::fmpz)\n\n\n\n"
},

{
    "location": "fraction/#Nemo.dedekind_sum-Tuple{fmpz,Integer}",
    "page": "Fraction fields",
    "title": "Nemo.dedekind_sum",
    "category": "method",
    "text": "dedekind_sum(h::fmpz, k::Integer)\n\nComputes the Dedekind sum s(hk) for arbitrary h and k.\n\n\n\n"
},

{
    "location": "fraction/#Nemo.dedekind_sum-Tuple{Integer,fmpz}",
    "page": "Fraction fields",
    "title": "Nemo.dedekind_sum",
    "category": "method",
    "text": "dedekind_sum(h::Integer, k::fmpz)\n\nComputes the Dedekind sum s(hk) for arbitrary h and k.\n\n\n\n"
},

{
    "location": "fraction/#Nemo.dedekind_sum-Tuple{Integer,Integer}",
    "page": "Fraction fields",
    "title": "Nemo.dedekind_sum",
    "category": "method",
    "text": "dedekind_sum(h::Integer, k::Integer)\n\nComputes the Dedekind sum s(hk) for arbitrary h and k.\n\n\n\n"
},

{
    "location": "fraction/#Special-functions-1",
    "page": "Fraction fields",
    "title": "Special functions",
    "category": "section",
    "text": "The following special functions are available for specific rings in Nemo.harmonic(::Int)bernoulli(::Int)bernoulli_cache(::Int)dedekind_sum(::fmpz, ::fmpz)\ndedekind_sum(::fmpz, ::Integer)\ndedekind_sum(::Integer, ::fmpz)\ndedekind_sum(::Integer, ::Integer)Examplesa = harmonic(12)\n\nb = dedekind_sum(12, 13)\nc = dedekind_sum(-120, fmpz(1305))\n\nd = bernoulli(12)\n\nbernoulli_cache(100)\ne = bernoulli(100)"
},

{
    "location": "rational/#",
    "page": "Rationals",
    "title": "Rationals",
    "category": "page",
    "text": "CurrentModule = Nemo"
},

{
    "location": "rational/#Rationals-1",
    "page": "Rationals",
    "title": "Rationals",
    "category": "section",
    "text": "Nemo provides much functionality for the rational numbers. See the section on Fraction Fields where all the basic functionality is documented, along with the extra functionality only available for the rational numbers themselves."
},

{
    "location": "arb/#",
    "page": "Real balls",
    "title": "Real balls",
    "category": "page",
    "text": "CurrentModule = Nemo"
},

{
    "location": "arb/#Real-balls-1",
    "page": "Real balls",
    "title": "Real balls",
    "category": "section",
    "text": "Arbitrary precision real ball arithmetic is supplied by Arb which provides a ball representation which tracks error bounds rigorously. Real numbers are  represented in mid-rad interval form m pm r = m-r m+r.The Arb real field is constructed using the ArbField constructor. This constructs the parent object for the Arb real field.However, we defineRealField = ArbFieldso that one can construct the Arb real field parent object using RealField instead of ArbField.The types of real balls in Nemo are given in the following table, along with the libraries that provide them and the associated types of the parent objects.Library Field Element type Parent type\nArb mathbbR (balls) arb ArbFieldAll the real field types belong to the Field abstract type and the types of elements in this field, i.e. balls in this case, belong to the FieldElem abstract type."
},

{
    "location": "arb/#Real-ball-functionality-1",
    "page": "Real balls",
    "title": "Real ball functionality",
    "category": "section",
    "text": "Real balls in Nemo implement the full AbstractAlgebra.jl field interface.https://nemocas.github.io/AbstractAlgebra.jl/fields.htmlBelow, we document the additional functionality provided for real balls."
},

{
    "location": "arb/#Constructors-1",
    "page": "Real balls",
    "title": "Constructors",
    "category": "section",
    "text": "In order to construct real balls in Nemo, one must first construct the Arb real field itself. This is accomplished with the following constructor.ArbField(prec::Int)Return the Arb field with precision in bits prec used for operations on interval midpoints. The precision used for interval radii is a fixed implementation-defined constant (30 bits).We defineRealField = ArbFieldso that one can use RealField in place of ArbField.Here is an example of creating an Arb real field and using the resulting parent object to coerce values into the resulting field.ExamplesRR = RealField(64)\n\na = RR(\"0.25\")\nb = RR(\"0.1\")\nc = RR(0.5)\nd = RR(12)Note that whilst one can coerce double precision floating point values into an Arb real field, unless those values can be represented exactly in double precision the resulting ball can\'t be any more precise than the double precision supplied.If instead, values can be represented precisely using decimal arithmetic then one can supply them to Arb using a string. In this case, Arb will store them to the precision specified when creating the Arb field.If the values can be stored precisely as a binary floating point number, Arb will store the values exactly. See the function isexact below for more information."
},

{
    "location": "arb/#Nemo.ball-Tuple{arb,arb}",
    "page": "Real balls",
    "title": "Nemo.ball",
    "category": "method",
    "text": "ball(mid::arb, rad::arb)\n\nConstructs an arb enclosing the range m-r m+r, given the pair (m r).\n\n\n\n"
},

{
    "location": "arb/#Real-ball-constructors-1",
    "page": "Real balls",
    "title": "Real ball constructors",
    "category": "section",
    "text": "ball(::arb, ::arb)ExamplesRR = RealField(64)\n\nc = ball(RR(3), RR(\"0.0001\"))"
},

{
    "location": "arb/#Base.convert-Tuple{Type{Float64},arb}",
    "page": "Real balls",
    "title": "Base.convert",
    "category": "method",
    "text": "convert(::Type{Float64}, x::arb)\n\nReturn the midpoint of x rounded down to a machine double.\n\n\n\n"
},

{
    "location": "arb/#Conversions-1",
    "page": "Real balls",
    "title": "Conversions",
    "category": "section",
    "text": "convert(::Type{Float64}, ::arb)"
},

{
    "location": "arb/#Nemo.isnonzero-Tuple{arb}",
    "page": "Real balls",
    "title": "Nemo.isnonzero",
    "category": "method",
    "text": "isnonzero(x::arb)\n\nReturn true if x is certainly not equal to zero, otherwise return false.\n\n\n\n"
},

{
    "location": "arb/#Base.isfinite-Tuple{arb}",
    "page": "Real balls",
    "title": "Base.isfinite",
    "category": "method",
    "text": "isfinite(x::arb)\n\nReturn true if x is finite, i.e. having finite midpoint and radius, otherwise return false.\n\n\n\n"
},

{
    "location": "arb/#Nemo.isexact-Tuple{arb}",
    "page": "Real balls",
    "title": "Nemo.isexact",
    "category": "method",
    "text": "isexact(x::arb)\n\nReturn true if x is exact, i.e. has zero radius, otherwise return false.\n\n\n\n"
},

{
    "location": "arb/#Nemo.isint-Tuple{arb}",
    "page": "Real balls",
    "title": "Nemo.isint",
    "category": "method",
    "text": "isint(x::arb)\n\nReturn true if x is an exact integer, otherwise return false.\n\n\n\n"
},

{
    "location": "arb/#Nemo.ispositive-Tuple{arb}",
    "page": "Real balls",
    "title": "Nemo.ispositive",
    "category": "method",
    "text": "ispositive(x::arb)\n\nReturn true if x is certainly positive, otherwise return false.\n\n\n\n"
},

{
    "location": "arb/#Nemo.isnonnegative-Tuple{arb}",
    "page": "Real balls",
    "title": "Nemo.isnonnegative",
    "category": "method",
    "text": "isnonnegative(x::arb)\n\nReturn true if x is certainly nonnegative, otherwise return false.\n\n\n\n"
},

{
    "location": "arb/#AbstractAlgebra.isnegative-Tuple{arb}",
    "page": "Real balls",
    "title": "AbstractAlgebra.isnegative",
    "category": "method",
    "text": "isnegative(x::arb)\n\nReturn true if x is certainly negative, otherwise return false.\n\n\n\n"
},

{
    "location": "arb/#Nemo.isnonpositive-Tuple{arb}",
    "page": "Real balls",
    "title": "Nemo.isnonpositive",
    "category": "method",
    "text": "isnonpositive(x::arb)\n\nReturn true if x is certainly nonpositive, otherwise return false.\n\n\n\n"
},

{
    "location": "arb/#Nemo.midpoint-Tuple{arb}",
    "page": "Real balls",
    "title": "Nemo.midpoint",
    "category": "method",
    "text": "midpoint(x::arb)\n\nReturn the midpoint of the ball x as an Arb ball.\n\n\n\n"
},

{
    "location": "arb/#Nemo.radius-Tuple{arb}",
    "page": "Real balls",
    "title": "Nemo.radius",
    "category": "method",
    "text": "radius(x::arb)\n\nReturn the radius of the ball x as an Arb ball.\n\n\n\n"
},

{
    "location": "arb/#Nemo.accuracy_bits-Tuple{arb}",
    "page": "Real balls",
    "title": "Nemo.accuracy_bits",
    "category": "method",
    "text": "accuracy_bits(x::arb)\n\nReturn the relative accuracy of x measured in bits, capped between typemax(Int) and -typemax(Int).\n\n\n\n"
},

{
    "location": "arb/#Basic-manipulation-1",
    "page": "Real balls",
    "title": "Basic manipulation",
    "category": "section",
    "text": "isnonzero(::arb)isfinite(::arb)isexact(::arb)isint(::arb)ispositive(::arb)isnonnegative(::arb)isnegative(::arb)isnonpositive(::arb)midpoint(::arb)radius(::arb)accuracy_bits(::arb)ExamplesRR = RealField(64)\n\na = RR(\"1.2 +/- 0.001\")\nb = RR(3)\n\nispositive(a)\nisfinite(b)\nisint(b)\nisnegative(a)\nc = radius(a)\nd = midpoint(b)\nf = accuracy_bits(a)"
},

{
    "location": "arb/#Nemo.overlaps-Tuple{arb,arb}",
    "page": "Real balls",
    "title": "Nemo.overlaps",
    "category": "method",
    "text": "overlaps(x::arb, y::arb)\n\nReturns true if any part of the ball x overlaps any part of the ball y, otherwise return false.\n\n\n\n"
},

{
    "location": "arb/#Nemo.contains-Tuple{arb,arb}",
    "page": "Real balls",
    "title": "Nemo.contains",
    "category": "method",
    "text": "contains(x::arb, y::arb)\n\nReturns true if the ball x contains the ball y, otherwise return false.\n\n\n\n"
},

{
    "location": "arb/#Nemo.contains-Tuple{arb,Integer}",
    "page": "Real balls",
    "title": "Nemo.contains",
    "category": "method",
    "text": "contains(x::arb, y::Integer)\n\nReturns true if the ball x contains the given integer value, otherwise return false.\n\n\n\n"
},

{
    "location": "arb/#Nemo.contains-Tuple{arb,fmpz}",
    "page": "Real balls",
    "title": "Nemo.contains",
    "category": "method",
    "text": "contains(x::arb, y::fmpz)\n\nReturns true if the ball x contains the given integer value, otherwise return false.\n\n\n\n"
},

{
    "location": "arb/#Nemo.contains-Tuple{arb,fmpq}",
    "page": "Real balls",
    "title": "Nemo.contains",
    "category": "method",
    "text": "contains(x::arb, y::fmpq)\n\nReturns true if the ball x contains the given rational value, otherwise return false.\n\n\n\n"
},

{
    "location": "arb/#Nemo.contains-Union{Tuple{T}, Tuple{arb,Rational{T}}} where T<:Integer",
    "page": "Real balls",
    "title": "Nemo.contains",
    "category": "method",
    "text": "contains(x::arb, y::Rational{Integer})\n\nReturns true if the ball x contains the given rational value, otherwise return false.\n\n\n\n"
},

{
    "location": "arb/#Nemo.contains-Tuple{arb,BigFloat}",
    "page": "Real balls",
    "title": "Nemo.contains",
    "category": "method",
    "text": "contains(x::arb, y::BigFloat)\n\nReturns true if the ball x contains the given floating point value, otherwise return false.\n\n\n\n"
},

{
    "location": "arb/#Nemo.contains_zero-Tuple{arb}",
    "page": "Real balls",
    "title": "Nemo.contains_zero",
    "category": "method",
    "text": "contains_zero(x::arb)\n\nReturns true if the ball x contains zero, otherwise return false.\n\n\n\n"
},

{
    "location": "arb/#Nemo.contains_negative-Tuple{arb}",
    "page": "Real balls",
    "title": "Nemo.contains_negative",
    "category": "method",
    "text": "contains_negative(x::arb)\n\nReturns true if the ball x contains any negative value, otherwise return false.\n\n\n\n"
},

{
    "location": "arb/#Nemo.contains_positive-Tuple{arb}",
    "page": "Real balls",
    "title": "Nemo.contains_positive",
    "category": "method",
    "text": "contains_positive(x::arb)\n\nReturns true if the ball x contains any positive value, otherwise return false.\n\n\n\n"
},

{
    "location": "arb/#Nemo.contains_nonnegative-Tuple{arb}",
    "page": "Real balls",
    "title": "Nemo.contains_nonnegative",
    "category": "method",
    "text": "contains_nonnegative(x::arb)\n\nReturns true if the ball x contains any nonnegative value, otherwise return false.\n\n\n\n"
},

{
    "location": "arb/#Nemo.contains_nonpositive-Tuple{arb}",
    "page": "Real balls",
    "title": "Nemo.contains_nonpositive",
    "category": "method",
    "text": "contains_nonpositive(x::arb)\n\nReturns true if the ball x contains any nonpositive value, otherwise return false.\n\n\n\n"
},

{
    "location": "arb/#Containment-1",
    "page": "Real balls",
    "title": "Containment",
    "category": "section",
    "text": "It is often necessary to determine whether a given exact value or ball is contained in a given real ball or whether two balls overlap. The following functions are provided for this purpose.overlaps(::arb, ::arb)contains(::arb, ::arb)contains(::arb, ::Integer)\ncontains(::arb, ::fmpz)\ncontains(::arb, ::fmpq)\ncontains{T <: Integer}(::arb, ::Rational{T})\ncontains(::arb, ::BigFloat)The following functions are also provided for determining if a ball intersects a certain part of the real number line.contains_zero(::arb)contains_negative(::arb)contains_positive(::arb)contains_nonnegative(::arb)contains_nonpositive(::arb)ExamplesRR = RealField(64)\nx = RR(\"1 +/- 0.001\")\ny = RR(\"3\")\n\noverlaps(x, y)\ncontains(x, y)\ncontains(y, 3)\ncontains(x, ZZ(1)//2)\ncontains_zero(x)\ncontains_positive(y)"
},

{
    "location": "arb/#Base.isequal-Tuple{arb,arb}",
    "page": "Real balls",
    "title": "Base.isequal",
    "category": "method",
    "text": "isequal(x::arb, y::arb)\n\nReturn true if the balls x and y are precisely equal, i.e. have the same midpoints and radii.\n\n\n\n"
},

{
    "location": "arb/#Comparison-1",
    "page": "Real balls",
    "title": "Comparison",
    "category": "section",
    "text": "Nemo provides a full range of comparison operations for Arb balls. Note that a ball is considered less than another ball if every value in the first ball is less than every value in the second ball, etc.In addition to the standard comparison operators, we introduce an exact equality. This is distinct from arithmetic equality implemented by ==, which merely compares up to the minimum of the precisions of its operands.isequal(::arb, ::arb)We also provide a full range of ad hoc comparison operators. These are implemented directly in Julia, but we document them as though isless and == were provided.Function\n==(x::arb, y::Integer)\n==(x::Integer, y::arb)\n==(x::arb, y::fmpz)\n==(x::fmpz, y::arb)\n==(x::arb, y::Float64)\n==(x::Float64, y::arb)\nisless(x::arb, y::Integer)\nisless(x::Integer, y::arb)\nisless(x::arb, y::fmpz)\nisless(x::fmpz, y::arb)\nisless(x::arb, y::Float64)\nisless(x::Float64, y::arb)\nisless(x::arb, y::BigFloat)\nisless(x::BigFloat, y::arb)\nisless(x::arb, y::fmpq)\nisless(x::fmpq, y::arb)ExamplesRR = RealField(64)\nx = RR(\"1 +/- 0.001\")\ny = RR(\"3\")\nz = RR(\"4\")\n\nisequal(x, deepcopy(x))\nx == 3\nZZ(3) < z\nx != 1.23"
},

{
    "location": "arb/#Base.abs-Tuple{arb}",
    "page": "Real balls",
    "title": "Base.abs",
    "category": "method",
    "text": "abs(x::arb)\n\nReturn the absolute value of x.\n\n\n\n"
},

{
    "location": "arb/#Absolute-value-1",
    "page": "Real balls",
    "title": "Absolute value",
    "category": "section",
    "text": "abs(::arb)ExamplesRR = RealField(64)\nx = RR(\"-1 +/- 0.001\")\n\na = abs(x)"
},

{
    "location": "arb/#Base.Math.ldexp-Tuple{arb,Int64}",
    "page": "Real balls",
    "title": "Base.Math.ldexp",
    "category": "method",
    "text": "ldexp(x::arb, y::Int)\n\nReturn 2^yx. Note that y can be positive, zero or negative.\n\n\n\n"
},

{
    "location": "arb/#Base.Math.ldexp-Tuple{arb,fmpz}",
    "page": "Real balls",
    "title": "Base.Math.ldexp",
    "category": "method",
    "text": "ldexp(x::arb, y::fmpz)\n\nReturn 2^yx. Note that y can be positive, zero or negative.\n\n\n\n"
},

{
    "location": "arb/#Shifting-1",
    "page": "Real balls",
    "title": "Shifting",
    "category": "section",
    "text": "ldexp(x::arb, y::Int)\nldexp(x::arb, y::fmpz)ExamplesRR = RealField(64)\nx = RR(\"-3 +/- 0.001\")\n\na = ldexp(x, 23)\nb = ldexp(x, -ZZ(15))"
},

{
    "location": "arb/#Nemo.trim-Tuple{arb}",
    "page": "Real balls",
    "title": "Nemo.trim",
    "category": "method",
    "text": "trim(x::arb)\n\nReturn an arb interval containing x but which may be more economical, by rounding off insignificant bits from the midpoint.\n\n\n\n"
},

{
    "location": "arb/#Nemo.unique_integer-Tuple{arb}",
    "page": "Real balls",
    "title": "Nemo.unique_integer",
    "category": "method",
    "text": "unique_integer(x::arb)\n\nReturn a pair where the first value is a boolean and the second is an fmpz integer. The boolean indicates whether the interval x contains a unique integer. If this is the case, the second return value is set to this unique integer.\n\n\n\n"
},

{
    "location": "arb/#Nemo.setunion-Tuple{arb,arb}",
    "page": "Real balls",
    "title": "Nemo.setunion",
    "category": "method",
    "text": "setunion(x::arb, y::arb)\n\nReturn an arb containing the union of the intervals represented by x and y.\n\n\n\n"
},

{
    "location": "arb/#Miscellaneous-operations-1",
    "page": "Real balls",
    "title": "Miscellaneous operations",
    "category": "section",
    "text": "trim(::arb)unique_integer(::arb)setunion(::arb, ::arb)ExamplesRR = RealField(64)\nx = RR(\"-3 +/- 0.001\")\ny = RR(\"2 +/- 0.5\")\n\na = trim(x)\nb, c = unique_integer(x)\nd = setunion(x, y)"
},

{
    "location": "arb/#Nemo.const_pi-Tuple{ArbField}",
    "page": "Real balls",
    "title": "Nemo.const_pi",
    "category": "method",
    "text": "const_pi(r::ArbField)\n\nReturn pi = 314159ldots as an element of r.\n\n\n\n"
},

{
    "location": "arb/#Nemo.const_e-Tuple{ArbField}",
    "page": "Real balls",
    "title": "Nemo.const_e",
    "category": "method",
    "text": "const_e(r::ArbField)\n\nReturn e = 271828ldots as an element of r.\n\n\n\n"
},

{
    "location": "arb/#Nemo.const_log2-Tuple{ArbField}",
    "page": "Real balls",
    "title": "Nemo.const_log2",
    "category": "method",
    "text": "const_log2(r::ArbField)\n\nReturn log(2) = 069314ldots as an element of r.\n\n\n\n"
},

{
    "location": "arb/#Nemo.const_log10-Tuple{ArbField}",
    "page": "Real balls",
    "title": "Nemo.const_log10",
    "category": "method",
    "text": "const_log10(r::ArbField)\n\nReturn log(10) = 2302585ldots as an element of r.\n\n\n\n"
},

{
    "location": "arb/#Nemo.const_euler-Tuple{ArbField}",
    "page": "Real balls",
    "title": "Nemo.const_euler",
    "category": "method",
    "text": "const_euler(r::ArbField)\n\nReturn Euler\'s constant gamma = 0577215ldots as an element of r.\n\n\n\n"
},

{
    "location": "arb/#Nemo.const_catalan-Tuple{ArbField}",
    "page": "Real balls",
    "title": "Nemo.const_catalan",
    "category": "method",
    "text": "const_catalan(r::ArbField)\n\nReturn Catalan\'s constant C = 0915965ldots as an element of r.\n\n\n\n"
},

{
    "location": "arb/#Nemo.const_khinchin-Tuple{ArbField}",
    "page": "Real balls",
    "title": "Nemo.const_khinchin",
    "category": "method",
    "text": "const_khinchin(r::ArbField)\n\nReturn Khinchin\'s constant K = 2685452ldots as an element of r.\n\n\n\n"
},

{
    "location": "arb/#Nemo.const_glaisher-Tuple{ArbField}",
    "page": "Real balls",
    "title": "Nemo.const_glaisher",
    "category": "method",
    "text": "const_glaisher(r::ArbField)\n\nReturn Glaisher\'s constant A = 1282427ldots as an element of r.\n\n\n\n"
},

{
    "location": "arb/#Constants-1",
    "page": "Real balls",
    "title": "Constants",
    "category": "section",
    "text": "const_pi(::ArbField)const_e(::ArbField)const_log2(::ArbField)const_log10(::ArbField)const_euler(::ArbField)const_catalan(::ArbField)const_khinchin(::ArbField)const_glaisher(::ArbField)ExamplesRR = RealField(200)\n\na = const_pi(RR)\nb = const_e(RR)\nc = const_euler(RR)\nd = const_glaisher(RR)"
},

{
    "location": "arb/#Base.floor-Tuple{arb}",
    "page": "Real balls",
    "title": "Base.floor",
    "category": "method",
    "text": "floor(x::arb)\n\nCompute the floor of x, i.e. the greatest integer not exceeding x, as an Arb.\n\n\n\n"
},

{
    "location": "arb/#Base.ceil-Tuple{arb}",
    "page": "Real balls",
    "title": "Base.ceil",
    "category": "method",
    "text": "ceil(x::arb)\n\nReturn the ceiling of x, i.e. the least integer not less than x, as an Arb.\n\n\n\n"
},

{
    "location": "arb/#Base.sqrt-Tuple{arb}",
    "page": "Real balls",
    "title": "Base.sqrt",
    "category": "method",
    "text": "Base.sqrt(x::arb)\n\nReturn the square root of x.\n\n\n\n"
},

{
    "location": "arb/#Nemo.rsqrt-Tuple{arb}",
    "page": "Real balls",
    "title": "Nemo.rsqrt",
    "category": "method",
    "text": "rsqrt(x::arb)\n\nReturn the reciprocal of the square root of x, i.e. 1sqrtx.\n\n\n\n"
},

{
    "location": "arb/#Nemo.sqrt1pm1-Tuple{arb}",
    "page": "Real balls",
    "title": "Nemo.sqrt1pm1",
    "category": "method",
    "text": "sqrt1pm1(x::arb)\n\nReturn sqrt1+x-1, evaluated accurately for small x.\n\n\n\n"
},

{
    "location": "arb/#Base.log-Tuple{arb}",
    "page": "Real balls",
    "title": "Base.log",
    "category": "method",
    "text": "log(x::arb)\n\nReturn the principal branch of the logarithm of x.\n\n\n\n"
},

{
    "location": "arb/#Base.log1p-Tuple{arb}",
    "page": "Real balls",
    "title": "Base.log1p",
    "category": "method",
    "text": "log1p(x::arb)\n\nReturn log(1+x), evaluated accurately for small x.\n\n\n\n"
},

{
    "location": "arb/#Base.exp-Tuple{arb}",
    "page": "Real balls",
    "title": "Base.exp",
    "category": "method",
    "text": "exp(x::arb)\n\nReturn the exponential of x.\n\n\n\n"
},

{
    "location": "arb/#Base.expm1-Tuple{arb}",
    "page": "Real balls",
    "title": "Base.expm1",
    "category": "method",
    "text": "expm1(x::arb)\n\nReturn exp(x)-1, evaluated accurately for small x.\n\n\n\n"
},

{
    "location": "arb/#Base.sin-Tuple{arb}",
    "page": "Real balls",
    "title": "Base.sin",
    "category": "method",
    "text": "sin(x::arb)\n\nReturn the sine of x.\n\n\n\n"
},

{
    "location": "arb/#Base.cos-Tuple{arb}",
    "page": "Real balls",
    "title": "Base.cos",
    "category": "method",
    "text": "cos(x::arb)\n\nReturn the cosine of x.\n\n\n\n"
},

{
    "location": "arb/#Base.Math.sinpi-Tuple{arb}",
    "page": "Real balls",
    "title": "Base.Math.sinpi",
    "category": "method",
    "text": "sinpi(x::arb)\n\nReturn the sine of pi x.\n\n\n\n"
},

{
    "location": "arb/#Base.Math.cospi-Tuple{arb}",
    "page": "Real balls",
    "title": "Base.Math.cospi",
    "category": "method",
    "text": "cospi(x::arb)\n\nReturn the cosine of pi x.\n\n\n\n"
},

{
    "location": "arb/#Base.tan-Tuple{arb}",
    "page": "Real balls",
    "title": "Base.tan",
    "category": "method",
    "text": "tan(x::arb)\n\nReturn the tangent of x.\n\n\n\n"
},

{
    "location": "arb/#Base.Math.cot-Tuple{arb}",
    "page": "Real balls",
    "title": "Base.Math.cot",
    "category": "method",
    "text": "cot(x::arb)\n\nReturn the cotangent of x.\n\n\n\n"
},

{
    "location": "arb/#Nemo.tanpi-Tuple{arb}",
    "page": "Real balls",
    "title": "Nemo.tanpi",
    "category": "method",
    "text": "tanpi(x::arb)\n\nReturn the tangent of pi x.\n\n\n\n"
},

{
    "location": "arb/#Nemo.cotpi-Tuple{arb}",
    "page": "Real balls",
    "title": "Nemo.cotpi",
    "category": "method",
    "text": "cotpi(x::arb)\n\nReturn the cotangent of pi x.\n\n\n\n"
},

{
    "location": "arb/#Base.sinh-Tuple{arb}",
    "page": "Real balls",
    "title": "Base.sinh",
    "category": "method",
    "text": "sinh(x::arb)\n\nReturn the hyperbolic sine of x.\n\n\n\n"
},

{
    "location": "arb/#Base.cosh-Tuple{arb}",
    "page": "Real balls",
    "title": "Base.cosh",
    "category": "method",
    "text": "cosh(x::arb)\n\nReturn the hyperbolic cosine of x.\n\n\n\n"
},

{
    "location": "arb/#Base.tanh-Tuple{arb}",
    "page": "Real balls",
    "title": "Base.tanh",
    "category": "method",
    "text": "tanh(x::arb)\n\nReturn the hyperbolic tangent of x.\n\n\n\n"
},

{
    "location": "arb/#Base.Math.coth-Tuple{arb}",
    "page": "Real balls",
    "title": "Base.Math.coth",
    "category": "method",
    "text": "coth(x::arb)\n\nReturn the hyperbolic cotangent of x.\n\n\n\n"
},

{
    "location": "arb/#Base.atan-Tuple{arb}",
    "page": "Real balls",
    "title": "Base.atan",
    "category": "method",
    "text": "atan(x::arb)\n\nReturn the arctangent of x.\n\n\n\n"
},

{
    "location": "arb/#Base.asin-Tuple{arb}",
    "page": "Real balls",
    "title": "Base.asin",
    "category": "method",
    "text": "asin(x::arb)\n\nReturn the arcsine of x.\n\n\n\n"
},

{
    "location": "arb/#Base.acos-Tuple{arb}",
    "page": "Real balls",
    "title": "Base.acos",
    "category": "method",
    "text": "acos(x::arb)\n\nReturn the arccosine of x.\n\n\n\n"
},

{
    "location": "arb/#Base.atanh-Tuple{arb}",
    "page": "Real balls",
    "title": "Base.atanh",
    "category": "method",
    "text": "atanh(x::arb)\n\nReturn the hyperbolic arctangent of x.\n\n\n\n"
},

{
    "location": "arb/#Base.asinh-Tuple{arb}",
    "page": "Real balls",
    "title": "Base.asinh",
    "category": "method",
    "text": "asinh(x::arb)\n\nReturn the hyperbolic arcsine of x.\n\n\n\n"
},

{
    "location": "arb/#Base.acosh-Tuple{arb}",
    "page": "Real balls",
    "title": "Base.acosh",
    "category": "method",
    "text": "acosh(x::arb)\n\nReturn the hyperbolic arccosine of x.\n\n\n\n"
},

{
    "location": "arb/#Nemo.gamma-Tuple{arb}",
    "page": "Real balls",
    "title": "Nemo.gamma",
    "category": "method",
    "text": "gamma(x::arb)\n\nReturn the Gamma function evaluated at x.\n\n\n\n"
},

{
    "location": "arb/#Nemo.lgamma-Tuple{arb}",
    "page": "Real balls",
    "title": "Nemo.lgamma",
    "category": "method",
    "text": "lgamma(x::arb)\n\nReturn the logarithm of the Gamma function evaluated at x.\n\n\n\n"
},

{
    "location": "arb/#Nemo.rgamma-Tuple{arb}",
    "page": "Real balls",
    "title": "Nemo.rgamma",
    "category": "method",
    "text": "rgamma(x::arb)\n\nReturn the reciprocal of the Gamma function evaluated at x.\n\n\n\n"
},

{
    "location": "arb/#Nemo.digamma-Tuple{arb}",
    "page": "Real balls",
    "title": "Nemo.digamma",
    "category": "method",
    "text": "digamma(x::arb)\n\nReturn the  logarithmic derivative of the gamma function evaluated at x, i.e. psi(x).\n\n\n\n"
},

{
    "location": "arb/#Nemo.zeta-Tuple{arb}",
    "page": "Real balls",
    "title": "Nemo.zeta",
    "category": "method",
    "text": "zeta(x::arb)\n\nReturn the Riemann zeta function evaluated at x.\n\n\n\n"
},

{
    "location": "arb/#Base.Math.sincos-Tuple{arb}",
    "page": "Real balls",
    "title": "Base.Math.sincos",
    "category": "method",
    "text": "sincos(x::arb)\n\nReturn a tuple s c consisting of the sine s and cosine c of x.\n\n\n\n"
},

{
    "location": "arb/#Nemo.sincospi-Tuple{arb}",
    "page": "Real balls",
    "title": "Nemo.sincospi",
    "category": "method",
    "text": "sincospi(x::arb)\n\nReturn a tuple s c consisting of the sine s and cosine c of pi x.\n\n\n\n"
},

{
    "location": "arb/#Base.Math.sinpi-Tuple{fmpq,ArbField}",
    "page": "Real balls",
    "title": "Base.Math.sinpi",
    "category": "method",
    "text": "sinpi(x::fmpq, r::ArbField)\n\nReturn the sine of pi x in the given Arb field.\n\n\n\n"
},

{
    "location": "arb/#Base.Math.cospi-Tuple{fmpq,ArbField}",
    "page": "Real balls",
    "title": "Base.Math.cospi",
    "category": "method",
    "text": "cospi(x::fmpq, r::ArbField)\n\nReturn the cosine of pi x in the given Arb field.\n\n\n\n"
},

{
    "location": "arb/#Nemo.sincospi-Tuple{fmpq,ArbField}",
    "page": "Real balls",
    "title": "Nemo.sincospi",
    "category": "method",
    "text": "sincospi(x::fmpq, r::ArbField)\n\nReturn a tuple s c consisting of the sine and cosine of pi x in the given Arb field.\n\n\n\n"
},

{
    "location": "arb/#Nemo.sinhcosh-Tuple{arb}",
    "page": "Real balls",
    "title": "Nemo.sinhcosh",
    "category": "method",
    "text": "sinhcosh(x::arb)\n\nReturn a tuple s c consisting of the hyperbolic sine and cosine of x.\n\n\n\n"
},

{
    "location": "arb/#Nemo.atan2-Tuple{arb,arb}",
    "page": "Real balls",
    "title": "Nemo.atan2",
    "category": "method",
    "text": "atan2(x::arb, y::arb)\n\nReturn atan2(ba) = arg(a+bi).\n\n\n\n"
},

{
    "location": "arb/#Nemo.agm-Tuple{arb,arb}",
    "page": "Real balls",
    "title": "Nemo.agm",
    "category": "method",
    "text": "agm(x::arb, y::arb)\n\nReturn the arithmetic-geometric mean of x and y\n\n\n\n"
},

{
    "location": "arb/#Nemo.zeta-Tuple{arb,arb}",
    "page": "Real balls",
    "title": "Nemo.zeta",
    "category": "method",
    "text": "zeta(s::arb, a::arb)\n\nReturn the Hurwitz zeta function zeta(sa).\n\n\n\n"
},

{
    "location": "arb/#Base.Math.hypot-Tuple{arb,arb}",
    "page": "Real balls",
    "title": "Base.Math.hypot",
    "category": "method",
    "text": "hypot(x::arb, y::arb)\n\nReturn sqrtx^2 + y^2.\n\n\n\n"
},

{
    "location": "arb/#Nemo.root-Tuple{arb,Int64}",
    "page": "Real balls",
    "title": "Nemo.root",
    "category": "method",
    "text": "root(x::arb, n::Int)\n\nReturn the n-th root of x. We require x geq 0.\n\n\n\n"
},

{
    "location": "arb/#Nemo.fac-Tuple{arb}",
    "page": "Real balls",
    "title": "Nemo.fac",
    "category": "method",
    "text": "fac(x::arb)\n\nReturn the factorial of x.\n\n\n\n"
},

{
    "location": "arb/#Nemo.fac-Tuple{Int64,ArbField}",
    "page": "Real balls",
    "title": "Nemo.fac",
    "category": "method",
    "text": "fac(n::Int, r::ArbField)\n\nReturn the factorial of n in the given Arb field.\n\n\n\n"
},

{
    "location": "arb/#Nemo.binom-Tuple{arb,UInt64}",
    "page": "Real balls",
    "title": "Nemo.binom",
    "category": "method",
    "text": "binom(x::arb, n::UInt)\n\nReturn the binomial coefficient x choose n.\n\n\n\n"
},

{
    "location": "arb/#Nemo.binom-Tuple{UInt64,UInt64,ArbField}",
    "page": "Real balls",
    "title": "Nemo.binom",
    "category": "method",
    "text": "binom(n::UInt, k::UInt, r::ArbField)\n\nReturn the binomial coefficient n choose k in the given Arb field.\n\n\n\n"
},

{
    "location": "arb/#Nemo.fib-Tuple{fmpz,ArbField}",
    "page": "Real balls",
    "title": "Nemo.fib",
    "category": "method",
    "text": "fib(n::fmpz, r::ArbField)\n\nReturn the n-th Fibonacci number in the given Arb field.\n\n\n\n"
},

{
    "location": "arb/#Nemo.fib-Tuple{Int64,ArbField}",
    "page": "Real balls",
    "title": "Nemo.fib",
    "category": "method",
    "text": "fib(n::Int, r::ArbField)\n\nReturn the n-th Fibonacci number in the given Arb field.\n\n\n\n"
},

{
    "location": "arb/#Nemo.gamma-Tuple{fmpz,ArbField}",
    "page": "Real balls",
    "title": "Nemo.gamma",
    "category": "method",
    "text": "gamma(x::fmpz, r::ArbField)\n\nReturn the Gamma function evaluated at x in the given Arb field.\n\n\n\n"
},

{
    "location": "arb/#Nemo.gamma-Tuple{fmpq,ArbField}",
    "page": "Real balls",
    "title": "Nemo.gamma",
    "category": "method",
    "text": "gamma(x::fmpq, r::ArbField)\n\nReturn the Gamma function evaluated at x in the given Arb field.\n\n\n\n"
},

{
    "location": "arb/#Nemo.zeta-Tuple{Int64,ArbField}",
    "page": "Real balls",
    "title": "Nemo.zeta",
    "category": "method",
    "text": "zeta(n::Int, r::ArbField)\n\nReturn the Riemann zeta function zeta(n) as an element of the given Arb field.\n\n\n\n"
},

{
    "location": "arb/#Nemo.bernoulli-Tuple{Int64,ArbField}",
    "page": "Real balls",
    "title": "Nemo.bernoulli",
    "category": "method",
    "text": "bernoulli(n::Int, r::ArbField)\n\nReturn the n-th Bernoulli number as an element of the given Arb field.\n\n\n\n"
},

{
    "location": "arb/#Nemo.risingfac-Tuple{arb,Int64}",
    "page": "Real balls",
    "title": "Nemo.risingfac",
    "category": "method",
    "text": "risingfac(x::arb, n::Int)\n\nReturn the rising factorial x(x + 1)ldots (x + n - 1) as an Arb.\n\n\n\n"
},

{
    "location": "arb/#Nemo.risingfac-Tuple{fmpq,Int64,ArbField}",
    "page": "Real balls",
    "title": "Nemo.risingfac",
    "category": "method",
    "text": "risingfac(x::fmpq, n::Int, r::ArbField)\n\nReturn the rising factorial x(x + 1)ldots (x + n - 1) as an element of the given Arb field.\n\n\n\n"
},

{
    "location": "arb/#Nemo.risingfac2-Tuple{arb,Int64}",
    "page": "Real balls",
    "title": "Nemo.risingfac2",
    "category": "method",
    "text": "risingfac2(x::arb, n::Int)\n\nReturn a tuple containing the rising factorial x(x + 1)ldots (x + n - 1) and its derivative.\n\n\n\n"
},

{
    "location": "arb/#Nemo.polylog-Tuple{arb,arb}",
    "page": "Real balls",
    "title": "Nemo.polylog",
    "category": "method",
    "text": "polylog(s::arb, a::arb)\n\nReturn the polylogarithm Li_s(a).\n\n\n\n"
},

{
    "location": "arb/#Nemo.polylog-Tuple{Int64,arb}",
    "page": "Real balls",
    "title": "Nemo.polylog",
    "category": "method",
    "text": "polylog(s::Int, a::arb)\n\nReturn the polylogarithm Li_s(a).\n\n\n\n"
},

{
    "location": "arb/#AbstractAlgebra.Generic.chebyshev_t-Tuple{Int64,arb}",
    "page": "Real balls",
    "title": "AbstractAlgebra.Generic.chebyshev_t",
    "category": "method",
    "text": "chebyshev_t(n::Int, x::arb)\n\nReturn the value of the Chebyshev polynomial T_n(x).\n\n\n\n"
},

{
    "location": "arb/#AbstractAlgebra.Generic.chebyshev_u-Tuple{Int64,arb}",
    "page": "Real balls",
    "title": "AbstractAlgebra.Generic.chebyshev_u",
    "category": "method",
    "text": "chebyshev_u(n::Int, x::arb)\n\nReturn the value of the Chebyshev polynomial U_n(x).\n\n\n\n"
},

{
    "location": "arb/#Nemo.chebyshev_t2-Tuple{Int64,arb}",
    "page": "Real balls",
    "title": "Nemo.chebyshev_t2",
    "category": "method",
    "text": "chebyshev_t2(n::Int, x::arb)\n\nReturn the tuple (T_n(x) T_n-1(x)).\n\n\n\n"
},

{
    "location": "arb/#Nemo.chebyshev_u2-Tuple{Int64,arb}",
    "page": "Real balls",
    "title": "Nemo.chebyshev_u2",
    "category": "method",
    "text": "chebyshev_u2(n::Int, x::arb)\n\nReturn the tuple (U_n(x) U_n-1(x))\n\n\n\n"
},

{
    "location": "arb/#Nemo.bell-Tuple{fmpz,ArbField}",
    "page": "Real balls",
    "title": "Nemo.bell",
    "category": "method",
    "text": "bell(n::fmpz, r::ArbField)\n\nReturn the Bell number B_n as an element of r.\n\n\n\n"
},

{
    "location": "arb/#Nemo.bell-Tuple{Int64,ArbField}",
    "page": "Real balls",
    "title": "Nemo.bell",
    "category": "method",
    "text": "bell(n::Int, r::ArbField)\n\nReturn the Bell number B_n as an element of r.\n\n\n\n"
},

{
    "location": "arb/#Nemo.numpart-Tuple{fmpz,ArbField}",
    "page": "Real balls",
    "title": "Nemo.numpart",
    "category": "method",
    "text": "numpart(n::fmpz, r::ArbField)\n\nReturn the number of partitions p(n) as an element of r.\n\n\n\n"
},

{
    "location": "arb/#Nemo.numpart-Tuple{Int64,ArbField}",
    "page": "Real balls",
    "title": "Nemo.numpart",
    "category": "method",
    "text": "numpart(n::Int, r::ArbField)\n\nReturn the number of partitions p(n) as an element of r.\n\n\n\n"
},

{
    "location": "arb/#Mathematical-and-special-functions-1",
    "page": "Real balls",
    "title": "Mathematical and special functions",
    "category": "section",
    "text": "floor(::arb)ceil(::arb)Base.sqrt(::arb)rsqrt(::arb)sqrt1pm1(::arb)log(::arb)log1p(::arb)Base.exp(::arb)expm1(::arb)sin(::arb)cos(::arb)sinpi(::arb)cospi(::arb)tan(::arb)cot(::arb)tanpi(::arb)cotpi(::arb)sinh(::arb)cosh(::arb)tanh(::arb)coth(::arb)atan(::arb)asin(::arb)acos(::arb)atanh(::arb)asinh(::arb)acosh(::arb)gamma(::arb)lgamma(::arb)rgamma(::arb)digamma(::arb)zeta(::arb)sincos(::arb)sincospi(::arb)sinpi(::fmpq, ::ArbField)cospi(::fmpq, ::ArbField)sincospi(::fmpq, ::ArbField)sinhcosh(::arb)atan2(::arb, ::arb)agm(::arb, ::arb)zeta(::arb, ::arb)hypot(::arb, ::arb)root(::arb, ::Int)fac(::arb)fac(::Int, ::ArbField)binom(::arb, ::UInt)binom(::UInt, ::UInt, ::ArbField)fib(::fmpz, ::ArbField)fib(::Int, ::ArbField)gamma(::fmpz, ::ArbField)gamma(::fmpq, ::ArbField)zeta(::Int, ::ArbField)bernoulli(::Int, ::ArbField)risingfac(::arb, ::Int)risingfac(::fmpq, ::Int, ::ArbField)risingfac2(::arb, ::Int)polylog(::arb, ::arb)polylog(::Int, ::arb)chebyshev_t(::Int, ::arb)chebyshev_u(::Int, ::arb)chebyshev_t2(::Int, ::arb)chebyshev_u2(::Int, ::arb)bell(::fmpz, ::ArbField)bell(::Int, ::ArbField)numpart(::fmpz, ::ArbField)numpart(::Int, ::ArbField)ExamplesRR = RealField(64)\n\na = floor(exp(RR(1)))\nb = sinpi(QQ(5,6), RR)\nc = gamma(QQ(1,3), RealField(256))\nd = bernoulli(1000, RealField(53))\nf = polylog(3, RR(-10))"
},

{
    "location": "arb/#Nemo.lindep-Tuple{Array{arb,1},Int64}",
    "page": "Real balls",
    "title": "Nemo.lindep",
    "category": "method",
    "text": "lindep(A::Array{arb, 1}, bits::Int)\n\nFind a small linear combination of the entries of the array A that is small *using LLL). The entries are first scaled by the given number of bits before truncating to integers for use in LLL. This function can be used to find linear dependence between a list of real numbers. The algorithm is heuristic only and returns an array of Nemo integers representing the linear combination.  \n\n\n\n"
},

{
    "location": "arb/#Linear-dependence-1",
    "page": "Real balls",
    "title": "Linear dependence",
    "category": "section",
    "text": "lindep(::Array{arb, 1}, n::Int)ExamplesRR = RealField(128)\n\na = RR(-0.33198902958450931620250069492231652319)\n\nV = [RR(1), a, a^2, a^3, a^4, a^5]\nW = lindep(V, 20)"
},

{
    "location": "acb/#",
    "page": "Complex balls",
    "title": "Complex balls",
    "category": "page",
    "text": "CurrentModule = Nemo"
},

{
    "location": "acb/#Complex-balls-1",
    "page": "Complex balls",
    "title": "Complex balls",
    "category": "section",
    "text": "Arbitrary precision complex ball arithmetic is supplied by Arb which provides a ball representation which tracks error bounds rigorously. Complex numbers are  represented in in rectangular form a+bi where ab are arb balls.The Arb complex field is constructed using the AcbField constructor. This constructs the parent object for the Arb complex field.We defineComplexField = AcbFieldso that one can construct the Arb complex field parent using ComplexField instead of AcbField.The types of complex boxes in Nemo are given in the following table, along with the libraries that provide them and the associated types of the parent objects.Library Field Element type Parent type\nArb mathbbC (boxes) acb AcbFieldAll the complex field types belong to the Field abstract type and the types of elements in this field, i.e. complex boxes in this case, belong to the FieldElem abstract type."
},

{
    "location": "acb/#Complex-ball-functionality-1",
    "page": "Complex balls",
    "title": "Complex ball functionality",
    "category": "section",
    "text": "The complex balls in Nemo implement the AbstractAlgebra.jl field interface.https://nemocas.github.io/AbstractAlgebra.jl/fields.htmlBelow, we document the additional functionality provided for complex balls."
},

{
    "location": "acb/#Complex-field-constructors-1",
    "page": "Complex balls",
    "title": "Complex field constructors",
    "category": "section",
    "text": "In order to construct complex boxes in Nemo, one must first construct the Arb complex field itself. This is accomplished with the following constructor.AcbField(prec::Int)Return the Arb complex field with precision in bits prec used for operations on interval midpoints. The precision used for interval radii is a fixed implementation-defined constant (30 bits).Here is an example of creating an Arb complex field and using the resulting parent object to coerce values into the resulting field.ExamplesCC = ComplexField(64)\n\na = CC(\"0.25\")\nb = CC(\"0.1\")\nc = CC(0.5)\nd = CC(12)Note that whilst one can coerce double precision floating point values into an Arb complex field, unless those values can be represented exactly in double precision the resulting ball can\'t be any more precise than the double precision supplied.If instead, values can be represented precisely using decimal arithmetic then one can supply them to Arb using a string. In this case, Arb will store them to the precision specified when creating the Arb complex field.If the values can be stored precisely as a binary floating point number, Arb will store the values exactly. See the function isexact below for more information."
},

{
    "location": "acb/#Nemo.onei-Tuple{AcbField}",
    "page": "Complex balls",
    "title": "Nemo.onei",
    "category": "method",
    "text": "onei(R::AcbField)\n\nReturn exact one times i in the given Arb complex field.\n\n\n\n"
},

{
    "location": "acb/#Constructors-1",
    "page": "Complex balls",
    "title": "Constructors",
    "category": "section",
    "text": "onei(::AcbField)ExamplesCC = ComplexField(64)\n\nc = onei(CC)"
},

{
    "location": "acb/#Basic-functionality-1",
    "page": "Complex balls",
    "title": "Basic functionality",
    "category": "section",
    "text": "The following basic functionality is provided by the default Arb complex field implementation in Nemo, to support construction of generic rings over complex fields. Any custom complex field implementation in Nemo should provide analogues of these functions along with the usual arithmetic operations.parent_type(::Type{acb})Gives the type of the parent object of an Arb complex field element.elem_type(R::AcbField)Given the parent object for an Arb complex field, return the type of elements of the field.mul!(c::acb, a::acb, b::acb)Multiply a by b and set the existing Arb complex field element c to the result. This function is provided for performance reasons as it saves allocating a new object for the result and eliminates associated garbage collection.addeq!(c::acb, a::acb)In-place addition. Adds a to c and sets c to the result. This function is provided for performance reasons as it saves allocating a new object for the result and eliminates associated garbage collection.deepcopy(a::acb)Return a copy of the Arb complex field element a, recursively copying the internal data. Arb complex field elements are mutable in Nemo so a shallow copy is not sufficient.Given the parent object R for an Arb complex field, the following coercion functions are provided to coerce various elements into the Arb complex field. Developers provide these by overloading the call operator for the complex field parent objects.R()Coerce zero into the Arb complex field.R(n::Integer)\nR(f::fmpz)\nR(q::fmpq)Coerce an integer or rational value into the Arb complex field.R(f::Float64)\nR(f::BigFloat)Coerce the given floating point number into the Arb complex field.R(f::AbstractString)\nR(f::AbstractString, g::AbstractString)Coerce the decimal number, given as a string, into the Arb complex field. In each case f is the real part and g is the imaginary part.R(f::arb)Coerce the given Arb real ball into the Arb complex field.R(f::acb)Take an Arb complex field element that is already in an Arb field and simply return it. A copy of the original is not made.Here are some examples of coercing elements into the Arb complex field.RR = RealField(64)\nCC = ComplexField(64)\n\na = CC(3)\nb = CC(QQ(2,3))\nc = CC(\"3 +/- 0.0001\")\nd = CC(\"-1.24e+12345\")\nf = CC(\"nan +/- inf\")\ng = CC(RR(3))In addition to the above, developers of custom complex field types must ensure that they provide the equivalent of the function base_ring(R::AcbField) which should return Union{}. In addition to this they should ensure that each complex field element contains a field parent specifying the parent object of the complex field element, or at least supply the equivalent of the function parent(a::acb) to return the parent object of a complex field element."
},

{
    "location": "acb/#Base.isfinite-Tuple{acb}",
    "page": "Complex balls",
    "title": "Base.isfinite",
    "category": "method",
    "text": "isfinite(x::acb)\n\nReturn true if x is finite, i.e. its real and imaginary parts have finite midpoint and radius, otherwise return false.\n\n\n\n"
},

{
    "location": "acb/#Nemo.isexact-Tuple{acb}",
    "page": "Complex balls",
    "title": "Nemo.isexact",
    "category": "method",
    "text": "isexact(x::acb)\n\nReturn true if x is exact, i.e. has its real and imaginary parts have zero radius, otherwise return false.\n\n\n\n"
},

{
    "location": "acb/#Nemo.isint-Tuple{acb}",
    "page": "Complex balls",
    "title": "Nemo.isint",
    "category": "method",
    "text": "isint(x::acb)\n\nReturn true if x is an exact integer, otherwise return false.\n\n\n\n"
},

{
    "location": "acb/#Base.isreal-Tuple{acb}",
    "page": "Complex balls",
    "title": "Base.isreal",
    "category": "method",
    "text": "isint(x::acb)\n\nReturn true if x is purely real, i.e. having zero imaginary part, otherwise return false.\n\n\n\n"
},

{
    "location": "acb/#Base.real-Tuple{acb}",
    "page": "Complex balls",
    "title": "Base.real",
    "category": "method",
    "text": "real(x::acb)\n\nReturn the real part of x as an arb.\n\n\n\n"
},

{
    "location": "acb/#Base.imag-Tuple{acb}",
    "page": "Complex balls",
    "title": "Base.imag",
    "category": "method",
    "text": "imag(x::acb)\n\nReturn the imaginary part of x as an arb.\n\n\n\n"
},

{
    "location": "acb/#Nemo.accuracy_bits-Tuple{acb}",
    "page": "Complex balls",
    "title": "Nemo.accuracy_bits",
    "category": "method",
    "text": "accuracy_bits(x::acb)\n\nReturn the relative accuracy of x measured in bits, capped between typemax(Int) and -typemax(Int).\n\n\n\n"
},

{
    "location": "acb/#Basic-manipulation-1",
    "page": "Complex balls",
    "title": "Basic manipulation",
    "category": "section",
    "text": "isfinite(::acb)isexact(::acb)isint(::acb)isreal(::acb)real(::acb)imag(::acb)accuracy_bits(::acb)ExamplesCC = ComplexField(64)\n\na = CC(\"1.2 +/- 0.001\")\nb = CC(3)\n\nisreal(a)\nisfinite(b)\nisint(b)\nc = real(a)\nd = imag(b)\nf = accuracy_bits(a)"
},

{
    "location": "acb/#Nemo.overlaps-Tuple{acb,acb}",
    "page": "Complex balls",
    "title": "Nemo.overlaps",
    "category": "method",
    "text": "overlaps(x::acb, y::acb)\n\nReturns true if any part of the box x overlaps any part of the box y, otherwise return false.\n\n\n\n"
},

{
    "location": "acb/#Nemo.contains-Tuple{acb,acb}",
    "page": "Complex balls",
    "title": "Nemo.contains",
    "category": "method",
    "text": "contains(x::acb, y::acb)\n\nReturns true if the box x contains the box y, otherwise return false.\n\n\n\n"
},

{
    "location": "acb/#Nemo.contains-Tuple{acb,Integer}",
    "page": "Complex balls",
    "title": "Nemo.contains",
    "category": "method",
    "text": "contains(x::acb, y::Integer)\n\nReturns true if the box x contains the given integer value, otherwise return false.\n\n\n\n"
},

{
    "location": "acb/#Nemo.contains-Tuple{acb,fmpz}",
    "page": "Complex balls",
    "title": "Nemo.contains",
    "category": "method",
    "text": "contains(x::acb, y::fmpz)\n\nReturns true if the box x contains the given integer value, otherwise return false.\n\n\n\n"
},

{
    "location": "acb/#Nemo.contains-Tuple{acb,fmpq}",
    "page": "Complex balls",
    "title": "Nemo.contains",
    "category": "method",
    "text": "contains(x::acb, y::fmpq)\n\nReturns true if the box x contains the given rational value, otherwise return false.\n\n\n\n"
},

{
    "location": "acb/#Nemo.contains_zero-Tuple{acb}",
    "page": "Complex balls",
    "title": "Nemo.contains_zero",
    "category": "method",
    "text": "contains_zero(x::acb)\n\nReturns true if the box x contains zero, otherwise return false.\n\n\n\n"
},

{
    "location": "acb/#Containment-1",
    "page": "Complex balls",
    "title": "Containment",
    "category": "section",
    "text": "It is often necessary to determine whether a given exact value or box is contained in a given complex box or whether two boxes overlap. The following functions are provided for this purpose.overlaps(::acb, ::acb)contains(::acb, ::acb)contains(::acb, ::Integer)\ncontains(::acb, ::fmpz)\ncontains(::acb, ::fmpq)The following functions are also provided for determining if a box intersects a certain part of the complex number plane.contains_zero(::acb)ExamplesCC = ComplexField(64)\nx = CC(\"1 +/- 0.001\")\ny = CC(\"3\")\n\noverlaps(x, y)\ncontains(x, y)\ncontains(y, 3)\ncontains(x, ZZ(1)//2)\ncontains_zero(x)"
},

{
    "location": "acb/#Base.isequal-Tuple{acb,acb}",
    "page": "Complex balls",
    "title": "Base.isequal",
    "category": "method",
    "text": "isequal(x::acb, y::acb)\n\nReturn true if the boxes x and y are precisely equal, i.e. their real and imaginary parts have the same midpoints and radii.\n\n\n\n"
},

{
    "location": "acb/#Comparison-1",
    "page": "Complex balls",
    "title": "Comparison",
    "category": "section",
    "text": "Nemo provides a full range of comparison operations for Arb complex boxes. In addition to the standard comparisons, we introduce an exact equality. This is distinct from arithmetic equality implemented by ==, which merely compares up to the minimum of the precisions of its operands.isequal(::acb, ::acb)A full range of ad hoc comparison operators is provided. These are implemented directly in Julia, but we document them as though only == were provided.Function\n==(x::acb, y::Integer)\n==(x::Integer, y::acb)\n==(x::acb, y::fmpz)\n==(x::fmpz, y::acb)\n==(x::arb, y::fmpz)\n==(x::fmpz, y::arb)\n==(x::acb, y::Float64)\n==(x::Float64, y::acb)ExamplesCC = ComplexField(64)\nx = CC(\"1 +/- 0.001\")\ny = CC(\"3\")\nz = CC(\"4\")\n\nisequal(x, deepcopy(x))\nx == 3\nZZ(3) == z\nx != 1.23"
},

{
    "location": "acb/#Base.abs-Tuple{acb}",
    "page": "Complex balls",
    "title": "Base.abs",
    "category": "method",
    "text": "abs(x::acb)\n\nReturn the complex absolute value of x.\n\n\n\n"
},

{
    "location": "acb/#Absolute-value-1",
    "page": "Complex balls",
    "title": "Absolute value",
    "category": "section",
    "text": "abs(::acb)ExamplesCC = ComplexField(64)\nx = CC(\"-1 +/- 0.001\")\n\na = abs(x)"
},

{
    "location": "acb/#Base.Math.ldexp-Tuple{acb,Int64}",
    "page": "Complex balls",
    "title": "Base.Math.ldexp",
    "category": "method",
    "text": "ldexp(x::acb, y::Int)\n\nReturn 2^yx. Note that y can be positive, zero or negative.\n\n\n\n"
},

{
    "location": "acb/#Base.Math.ldexp-Tuple{acb,fmpz}",
    "page": "Complex balls",
    "title": "Base.Math.ldexp",
    "category": "method",
    "text": "ldexp(x::acb, y::fmpz)\n\nReturn 2^yx. Note that y can be positive, zero or negative.\n\n\n\n"
},

{
    "location": "acb/#Shifting-1",
    "page": "Complex balls",
    "title": "Shifting",
    "category": "section",
    "text": "ldexp(x::acb, y::Int)\nldexp(x::acb, y::fmpz)ExamplesCC = ComplexField(64)\nx = CC(\"-3 +/- 0.001\")\n\na = ldexp(x, 23)\nb = ldexp(x, -ZZ(15))"
},

{
    "location": "acb/#Nemo.trim-Tuple{acb}",
    "page": "Complex balls",
    "title": "Nemo.trim",
    "category": "method",
    "text": "trim(x::acb)\n\nReturn an acb box containing x but which may be more economical, by rounding off insignificant bits from midpoints.\n\n\n\n"
},

{
    "location": "acb/#Nemo.unique_integer-Tuple{acb}",
    "page": "Complex balls",
    "title": "Nemo.unique_integer",
    "category": "method",
    "text": "unique_integer(x::acb)\n\nReturn a pair where the first value is a boolean and the second is an fmpz integer. The boolean indicates whether the box x contains a unique integer. If this is the case, the second return value is set to this unique integer.\n\n\n\n"
},

{
    "location": "acb/#Base.conj-Tuple{acb}",
    "page": "Complex balls",
    "title": "Base.conj",
    "category": "method",
    "text": "conj(x::acb)\n\nReturn the complex conjugate of x.\n\n\n\n"
},

{
    "location": "acb/#Base.angle-Tuple{acb}",
    "page": "Complex balls",
    "title": "Base.angle",
    "category": "method",
    "text": "angle(x::acb)\n\nReturn the angle in radians that the complex vector x makes with the positive real axis in a counterclockwise direction.\n\n\n\n"
},

{
    "location": "acb/#Miscellaneous-operations-1",
    "page": "Complex balls",
    "title": "Miscellaneous operations",
    "category": "section",
    "text": "trim(::acb)unique_integer(::acb)conj(::acb)angle(::acb)ExamplesCC = ComplexField(64)\nx = CC(\"-3 +/- 0.001\", \"0.1\")\n\na = trim(x)\nb, c = unique_integer(x)\nd = conj(x)\nf = angle(x)"
},

{
    "location": "acb/#Nemo.const_pi-Tuple{AcbField}",
    "page": "Complex balls",
    "title": "Nemo.const_pi",
    "category": "method",
    "text": "const_pi(r::AcbField)\n\nReturn pi = 314159ldots as an element of r.\n\n\n\n"
},

{
    "location": "acb/#Constants-1",
    "page": "Complex balls",
    "title": "Constants",
    "category": "section",
    "text": "const_pi(::AcbField)ExamplesCC = ComplexField(200)\n\na = const_pi(CC)"
},

{
    "location": "acb/#Base.sqrt-Tuple{acb}",
    "page": "Complex balls",
    "title": "Base.sqrt",
    "category": "method",
    "text": "Base.sqrt(x::acb)\n\nReturn the square root of x.\n\n\n\n"
},

{
    "location": "acb/#Nemo.rsqrt-Tuple{acb}",
    "page": "Complex balls",
    "title": "Nemo.rsqrt",
    "category": "method",
    "text": "rsqrt(x::acb)\n\nReturn the reciprocal of the square root of x, i.e. 1sqrtx.\n\n\n\n"
},

{
    "location": "acb/#Base.log-Tuple{acb}",
    "page": "Complex balls",
    "title": "Base.log",
    "category": "method",
    "text": "log(x::acb)\n\nReturn the principal branch of the logarithm of x.\n\n\n\n"
},

{
    "location": "acb/#Base.log1p-Tuple{acb}",
    "page": "Complex balls",
    "title": "Base.log1p",
    "category": "method",
    "text": "log1p(x::acb)\n\nReturn log(1+x), evaluated accurately for small x.\n\n\n\n"
},

{
    "location": "acb/#Base.exp-Tuple{acb}",
    "page": "Complex balls",
    "title": "Base.exp",
    "category": "method",
    "text": "exp(x::acb)\n\nReturn the exponential of x.\n\n\n\n"
},

{
    "location": "acb/#Nemo.exppii-Tuple{acb}",
    "page": "Complex balls",
    "title": "Nemo.exppii",
    "category": "method",
    "text": "exppii(x::acb)\n\nReturn the exponential of pi i x.\n\n\n\n"
},

{
    "location": "acb/#Base.sin-Tuple{acb}",
    "page": "Complex balls",
    "title": "Base.sin",
    "category": "method",
    "text": "sin(x::acb)\n\nReturn the sine of x.\n\n\n\n"
},

{
    "location": "acb/#Base.cos-Tuple{acb}",
    "page": "Complex balls",
    "title": "Base.cos",
    "category": "method",
    "text": "cos(x::acb)\n\nReturn the cosine of x.\n\n\n\n"
},

{
    "location": "acb/#Base.Math.sinpi-Tuple{acb}",
    "page": "Complex balls",
    "title": "Base.Math.sinpi",
    "category": "method",
    "text": "sinpi(x::acb)\n\nReturn the sine of pi x.\n\n\n\n"
},

{
    "location": "acb/#Base.Math.cospi-Tuple{acb}",
    "page": "Complex balls",
    "title": "Base.Math.cospi",
    "category": "method",
    "text": "cospi(x::acb)\n\nReturn the cosine of pi x.\n\n\n\n"
},

{
    "location": "acb/#Base.tan-Tuple{acb}",
    "page": "Complex balls",
    "title": "Base.tan",
    "category": "method",
    "text": "tan(x::acb)\n\nReturn the tangent of x.\n\n\n\n"
},

{
    "location": "acb/#Base.Math.cot-Tuple{acb}",
    "page": "Complex balls",
    "title": "Base.Math.cot",
    "category": "method",
    "text": "cot(x::acb)\n\nReturn the cotangent of x.\n\n\n\n"
},

{
    "location": "acb/#Nemo.tanpi-Tuple{acb}",
    "page": "Complex balls",
    "title": "Nemo.tanpi",
    "category": "method",
    "text": "tanpi(x::acb)\n\nReturn the tangent of pi x.\n\n\n\n"
},

{
    "location": "acb/#Nemo.cotpi-Tuple{acb}",
    "page": "Complex balls",
    "title": "Nemo.cotpi",
    "category": "method",
    "text": "cotpi(x::acb)\n\nReturn the cotangent of pi x.\n\n\n\n"
},

{
    "location": "acb/#Base.sinh-Tuple{acb}",
    "page": "Complex balls",
    "title": "Base.sinh",
    "category": "method",
    "text": "sinh(x::acb)\n\nReturn the hyperbolic sine of x.\n\n\n\n"
},

{
    "location": "acb/#Base.cosh-Tuple{acb}",
    "page": "Complex balls",
    "title": "Base.cosh",
    "category": "method",
    "text": "cosh(x::acb)\n\nReturn the hyperbolic cosine of x.\n\n\n\n"
},

{
    "location": "acb/#Base.tanh-Tuple{acb}",
    "page": "Complex balls",
    "title": "Base.tanh",
    "category": "method",
    "text": "tanh(x::acb)\n\nReturn the hyperbolic tangent of x.\n\n\n\n"
},

{
    "location": "acb/#Base.Math.coth-Tuple{acb}",
    "page": "Complex balls",
    "title": "Base.Math.coth",
    "category": "method",
    "text": "coth(x::acb)\n\nReturn the hyperbolic cotangent of x.\n\n\n\n"
},

{
    "location": "acb/#Base.atan-Tuple{acb}",
    "page": "Complex balls",
    "title": "Base.atan",
    "category": "method",
    "text": "atan(x::acb)\n\nReturn the arctangent of x.\n\n\n\n"
},

{
    "location": "acb/#Nemo.logsinpi-Tuple{acb}",
    "page": "Complex balls",
    "title": "Nemo.logsinpi",
    "category": "method",
    "text": "logsinpi(x::acb)\n\nReturn logsin(pi x), constructed without branch cuts off the real line.\n\n\n\n"
},

{
    "location": "acb/#Nemo.gamma-Tuple{acb}",
    "page": "Complex balls",
    "title": "Nemo.gamma",
    "category": "method",
    "text": "gamma(x::acb)\n\nReturn the Gamma function evaluated at x.\n\n\n\n"
},

{
    "location": "acb/#Nemo.lgamma-Tuple{acb}",
    "page": "Complex balls",
    "title": "Nemo.lgamma",
    "category": "method",
    "text": "lgamma(x::acb)\n\nReturn the logarithm of the Gamma function evaluated at x.\n\n\n\n"
},

{
    "location": "acb/#Nemo.rgamma-Tuple{acb}",
    "page": "Complex balls",
    "title": "Nemo.rgamma",
    "category": "method",
    "text": "rgamma(x::acb)\n\nReturn the reciprocal of the Gamma function evaluated at x.\n\n\n\n"
},

{
    "location": "acb/#Nemo.digamma-Tuple{acb}",
    "page": "Complex balls",
    "title": "Nemo.digamma",
    "category": "method",
    "text": "digamma(x::acb)\n\nReturn the  logarithmic derivative of the gamma function evaluated at x, i.e. psi(x).\n\n\n\n"
},

{
    "location": "acb/#Nemo.zeta-Tuple{acb}",
    "page": "Complex balls",
    "title": "Nemo.zeta",
    "category": "method",
    "text": "zeta(x::acb)\n\nReturn the Riemann zeta function evaluated at x.\n\n\n\n"
},

{
    "location": "acb/#Nemo.barnesg-Tuple{acb}",
    "page": "Complex balls",
    "title": "Nemo.barnesg",
    "category": "method",
    "text": "barnesg(x::acb)\n\nReturn the Barnes G-function, evaluated at x.\n\n\n\n"
},

{
    "location": "acb/#Nemo.logbarnesg-Tuple{acb}",
    "page": "Complex balls",
    "title": "Nemo.logbarnesg",
    "category": "method",
    "text": "logbarnesg(x::acb)\n\nReturn the logarithm of the Barnes G-function, evaluated at x.\n\n\n\n"
},

{
    "location": "acb/#Nemo.erf-Tuple{acb}",
    "page": "Complex balls",
    "title": "Nemo.erf",
    "category": "method",
    "text": "erf(x::acb)\n\nReturn the error function evaluated at x.\n\n\n\n"
},

{
    "location": "acb/#Nemo.erfi-Tuple{acb}",
    "page": "Complex balls",
    "title": "Nemo.erfi",
    "category": "method",
    "text": "erfi(x::acb)\n\nReturn the imaginary error function evaluated at x.\n\n\n\n"
},

{
    "location": "acb/#Nemo.ei-Tuple{acb}",
    "page": "Complex balls",
    "title": "Nemo.ei",
    "category": "method",
    "text": "ei(x::acb)\n\nReturn the exponential integral evaluated at x.\n\n\n\n"
},

{
    "location": "acb/#Nemo.si-Tuple{acb}",
    "page": "Complex balls",
    "title": "Nemo.si",
    "category": "method",
    "text": "si(x::acb)\n\nReturn the sine integral evaluated at x.\n\n\n\n"
},

{
    "location": "acb/#Nemo.ci-Tuple{acb}",
    "page": "Complex balls",
    "title": "Nemo.ci",
    "category": "method",
    "text": "ci(x::acb)\n\nReturn the exponential cosine integral evaluated at x.\n\n\n\n"
},

{
    "location": "acb/#Nemo.shi-Tuple{acb}",
    "page": "Complex balls",
    "title": "Nemo.shi",
    "category": "method",
    "text": "shi(x::acb)\n\nReturn the hyperbolic sine integral evaluated at x.\n\n\n\n"
},

{
    "location": "acb/#Nemo.chi-Tuple{acb}",
    "page": "Complex balls",
    "title": "Nemo.chi",
    "category": "method",
    "text": "chi(x::acb)\n\nReturn the hyperbolic cosine integral evaluated at x.\n\n\n\n"
},

{
    "location": "acb/#Nemo.modeta-Tuple{acb}",
    "page": "Complex balls",
    "title": "Nemo.modeta",
    "category": "method",
    "text": "modeta(x::acb)\n\nReturn the Dedekind eta function eta(tau) at tau = x.\n\n\n\n"
},

{
    "location": "acb/#Nemo.modweber_f-Tuple{acb}",
    "page": "Complex balls",
    "title": "Nemo.modweber_f",
    "category": "method",
    "text": "modweber_f(x::acb)\n\nReturn the modular Weber function mathfrakf(tau) = fraceta^2(tau)eta(tau2)eta(2tau) at x in the complex upper half plane.\n\n\n\n"
},

{
    "location": "acb/#Nemo.modweber_f1-Tuple{acb}",
    "page": "Complex balls",
    "title": "Nemo.modweber_f1",
    "category": "method",
    "text": "modweber_f1(x::acb)\n\nReturn the modular Weber function mathfrakf_1(tau) = fraceta(tau2)eta(tau) at x in the complex upper half plane.\n\n\n\n"
},

{
    "location": "acb/#Nemo.modweber_f2-Tuple{acb}",
    "page": "Complex balls",
    "title": "Nemo.modweber_f2",
    "category": "method",
    "text": "modweber_f2(x::acb)\n\nReturn the modular Weber function $\\mathfrak{f}_2(\\tau) = \\frac{\\sqrt{2}\\eta(2\\tau)}{\\eta(\\tau)}$ at x in the complex upper half plane.\n\n\n\n"
},

{
    "location": "acb/#Nemo.modj-Tuple{acb}",
    "page": "Complex balls",
    "title": "Nemo.modj",
    "category": "method",
    "text": "modj(x::acb)\n\nReturn the j-invariant j(tau) at tau = x.\n\n\n\n"
},

{
    "location": "acb/#Nemo.modlambda-Tuple{acb}",
    "page": "Complex balls",
    "title": "Nemo.modlambda",
    "category": "method",
    "text": "modlambda(x::acb)\n\nReturn the modular lambda function lambda(tau) at tau = x.\n\n\n\n"
},

{
    "location": "acb/#Nemo.moddelta-Tuple{acb}",
    "page": "Complex balls",
    "title": "Nemo.moddelta",
    "category": "method",
    "text": "moddelta(x::acb)\n\nReturn the modular delta function Delta(tau) at tau = x.\n\n\n\n"
},

{
    "location": "acb/#Nemo.ellipk-Tuple{acb}",
    "page": "Complex balls",
    "title": "Nemo.ellipk",
    "category": "method",
    "text": "ellipk(x::acb)\n\nReturn the complete elliptic integral K(x).\n\n\n\n"
},

{
    "location": "acb/#Nemo.ellipe-Tuple{acb}",
    "page": "Complex balls",
    "title": "Nemo.ellipe",
    "category": "method",
    "text": "ellipe(x::acb)\n\nReturn the complete elliptic integral E(x).\n\n\n\n"
},

{
    "location": "acb/#Base.Math.sincos-Tuple{acb}",
    "page": "Complex balls",
    "title": "Base.Math.sincos",
    "category": "method",
    "text": "sincos(x::acb)\n\nReturn a tuple s c consisting of the sine s and cosine c of x.\n\n\n\n"
},

{
    "location": "acb/#Nemo.sincospi-Tuple{acb}",
    "page": "Complex balls",
    "title": "Nemo.sincospi",
    "category": "method",
    "text": "sincospi(x::acb)\n\nReturn a tuple s c consisting of the sine s and cosine c of pi x.\n\n\n\n"
},

{
    "location": "acb/#Nemo.sinhcosh-Tuple{acb}",
    "page": "Complex balls",
    "title": "Nemo.sinhcosh",
    "category": "method",
    "text": "sinhcosh(x::acb)\n\nReturn a tuple s c consisting of the hyperbolic sine and cosine of x.\n\n\n\n"
},

{
    "location": "acb/#Nemo.agm-Tuple{acb}",
    "page": "Complex balls",
    "title": "Nemo.agm",
    "category": "method",
    "text": "agm(x::acb)\n\nReturn the arithmetic-geometric mean of 1 and x.\n\n\n\n"
},

{
    "location": "acb/#Nemo.agm-Tuple{acb,acb}",
    "page": "Complex balls",
    "title": "Nemo.agm",
    "category": "method",
    "text": "agm(x::acb, y::acb)\n\nReturn the arithmetic-geometric mean of x and y.\n\n\n\n"
},

{
    "location": "acb/#Nemo.polygamma-Tuple{acb,acb}",
    "page": "Complex balls",
    "title": "Nemo.polygamma",
    "category": "method",
    "text": "polygamma(s::acb, a::acb)\n\nReturn the generalised polygamma function psi(sz).\n\n\n\n"
},

{
    "location": "acb/#Nemo.zeta-Tuple{acb,acb}",
    "page": "Complex balls",
    "title": "Nemo.zeta",
    "category": "method",
    "text": "zeta(s::acb, a::acb)\n\nReturn the Hurwitz zeta function zeta(sa).\n\n\n\n"
},

{
    "location": "acb/#Nemo.risingfac-Tuple{acb,Int64}",
    "page": "Complex balls",
    "title": "Nemo.risingfac",
    "category": "method",
    "text": "risingfac(x::acb, n::Int)\n\nReturn the rising factorial x(x + 1)ldots (x + n - 1) as an Acb.\n\n\n\n"
},

{
    "location": "acb/#Nemo.risingfac2-Tuple{acb,Int64}",
    "page": "Complex balls",
    "title": "Nemo.risingfac2",
    "category": "method",
    "text": "risingfac2(x::acb, n::Int)\n\nReturn a tuple containing the rising factorial x(x + 1)ldots (x + n - 1) and its derivative.\n\n\n\n"
},

{
    "location": "acb/#Nemo.polylog-Tuple{acb,acb}",
    "page": "Complex balls",
    "title": "Nemo.polylog",
    "category": "method",
    "text": "polylog(s::acb, a::acb)\n\n\n\n\n\n"
},

{
    "location": "acb/#Nemo.polylog-Tuple{Int64,acb}",
    "page": "Complex balls",
    "title": "Nemo.polylog",
    "category": "method",
    "text": "polylog(s::Int, a::acb)\n\nReturn the polylogarithm Li_s(a).\n\n\n\n"
},

{
    "location": "acb/#Nemo.li-Tuple{acb}",
    "page": "Complex balls",
    "title": "Nemo.li",
    "category": "method",
    "text": "li(x::acb)\n\nReturn the logarithmic integral, evaluated at x.\n\n\n\n"
},

{
    "location": "acb/#Nemo.lioffset-Tuple{acb}",
    "page": "Complex balls",
    "title": "Nemo.lioffset",
    "category": "method",
    "text": "lioffset(x::acb)\n\nReturn the offset logarithmic integral, evaluated at x.\n\n\n\n"
},

{
    "location": "acb/#Nemo.expint-Tuple{acb,acb}",
    "page": "Complex balls",
    "title": "Nemo.expint",
    "category": "method",
    "text": "expint(s::acb, x::acb)\n\nReturn the generalised exponential integral E_s(x).\n\n\n\n"
},

{
    "location": "acb/#Nemo.gamma-Tuple{acb,acb}",
    "page": "Complex balls",
    "title": "Nemo.gamma",
    "category": "method",
    "text": "gamma(s::acb, x::acb)\n\nReturn the upper incomplete gamma function Gamma(sx).\n\n\n\n"
},

{
    "location": "acb/#Nemo.besselj-Tuple{acb,acb}",
    "page": "Complex balls",
    "title": "Nemo.besselj",
    "category": "method",
    "text": "besselj(nu::acb, x::acb)\n\nReturn the Bessel function J_nu(x).\n\n\n\n"
},

{
    "location": "acb/#Nemo.bessely-Tuple{acb,acb}",
    "page": "Complex balls",
    "title": "Nemo.bessely",
    "category": "method",
    "text": "bessely(nu::acb, x::acb)\n\nReturn the Bessel function Y_nu(x).\n\n\n\n"
},

{
    "location": "acb/#Nemo.besseli-Tuple{acb,acb}",
    "page": "Complex balls",
    "title": "Nemo.besseli",
    "category": "method",
    "text": "besseli(nu::acb, x::acb)\n\nReturn the Bessel function I_nu(x).\n\n\n\n"
},

{
    "location": "acb/#Nemo.besselk-Tuple{acb,acb}",
    "page": "Complex balls",
    "title": "Nemo.besselk",
    "category": "method",
    "text": "besselk(nu::acb, x::acb)\n\nReturn the Bessel function K_nu(x).\n\n\n\n"
},

{
    "location": "acb/#Nemo.hyp1f1-Tuple{acb,acb,acb}",
    "page": "Complex balls",
    "title": "Nemo.hyp1f1",
    "category": "method",
    "text": "hyp1f1(a::acb, b::acb, x::acb)\n\nReturn the confluent hypergeometric function _1F1(abx).\n\n\n\n"
},

{
    "location": "acb/#Nemo.hyp1f1r-Tuple{acb,acb,acb}",
    "page": "Complex balls",
    "title": "Nemo.hyp1f1r",
    "category": "method",
    "text": "hyp1f1r(a::acb, b::acb, x::acb)\n\nReturn the regularized confluent hypergeometric function _1F1(abx)  Gamma(b).\n\n\n\n"
},

{
    "location": "acb/#Nemo.hyperu-Tuple{acb,acb,acb}",
    "page": "Complex balls",
    "title": "Nemo.hyperu",
    "category": "method",
    "text": "hyperu(a::acb, b::acb, x::acb)\n\nReturn the confluent hypergeometric function U(abx).\n\n\n\n"
},

{
    "location": "acb/#Nemo.hyp2f1-NTuple{4,acb}",
    "page": "Complex balls",
    "title": "Nemo.hyp2f1",
    "category": "method",
    "text": "hyp2f1(a::acb, b::acb, c::acb, x::acb)\n\nReturn the Gauss hypergeometric function _2F_1(abcx).\n\n\n\n"
},

{
    "location": "acb/#Nemo.jtheta-Tuple{acb,acb}",
    "page": "Complex balls",
    "title": "Nemo.jtheta",
    "category": "method",
    "text": "jtheta(z::acb, tau::acb)\n\nReturn a tuple of four elements containing the Jacobi theta function values theta_1 theta_2 theta_3 theta_4 evaluated at z tau.\n\n\n\n"
},

{
    "location": "acb/#Nemo.ellipwp-Tuple{acb,acb}",
    "page": "Complex balls",
    "title": "Nemo.ellipwp",
    "category": "method",
    "text": "ellipwp(z::acb, tau::acb)\n\nReturn the Weierstrass elliptic function wp(ztau).\n\n\n\n"
},

{
    "location": "acb/#Mathematical-and-special-functions-1",
    "page": "Complex balls",
    "title": "Mathematical and special functions",
    "category": "section",
    "text": "Base.sqrt(::acb)rsqrt(::acb)log(::acb)log1p(::acb)Base.exp(::acb)exppii(::acb)sin(::acb)cos(::acb)sinpi(::acb)cospi(::acb)tan(::acb)cot(::acb)tanpi(::acb)cotpi(::acb)sinh(::acb)cosh(::acb)tanh(::acb)coth(::acb)atan(::acb)logsinpi(::acb)gamma(::acb)lgamma(::acb)rgamma(::acb)digamma(::acb)zeta(::acb)barnesg(::acb)logbarnesg(::acb)erf(::acb)erfi(::acb)ei(::acb)si(::acb)ci(::acb)shi(::acb)chi(::acb)modeta(::acb)modweber_f(::acb)modweber_f1(::acb)modweber_f2(::acb)modj(::acb)modlambda(::acb)moddelta(::acb)ellipk(::acb)ellipe(::acb)sincos(::acb)sincospi(::acb)sinhcosh(::acb)agm(::acb)\nagm(::acb, ::acb)polygamma(::acb, ::acb)zeta(::acb, ::acb)risingfac(::acb, ::Int)risingfac2(::acb, ::Int)polylog(::acb, ::acb)polylog(::Int, ::acb)li(::acb)lioffset(::acb)expint(::acb, ::acb)gamma(::acb, ::acb)besselj(::acb, ::acb)bessely(::acb, ::acb)besseli(::acb, ::acb)besselk(::acb, ::acb)hyp1f1(::acb, ::acb, ::acb)hyp1f1r(::acb, ::acb, ::acb)hyperu(::acb, ::acb, ::acb)hyp2f1(::acb, ::acb, ::acb, ::acb)jtheta(::acb, ::acb)ellipwp(::acb, ::acb)ExamplesCC = ComplexField(64)\n\ns = CC(1, 2)\nz = CC(\"1.23\", \"3.45\")\n\na = sin(z)^2 + cos(z)^2\nb = zeta(z)\nc = besselj(s, z)\nd = hyp1f1(s, s+1, z)"
},

{
    "location": "acb/#Nemo.lindep-Tuple{Array{acb,1},Int64}",
    "page": "Complex balls",
    "title": "Nemo.lindep",
    "category": "method",
    "text": "lindep(A::Array{acb, 1}, bits::Int)\n\nFind a small linear combination of the entries of the array A that is small (using LLL). The entries are first scaled by the given number of bits before truncating the real and imaginary parts to integers for use in LLL. This function can be used to find linear dependence between a list of complex numbers. The algorithm is heuristic only and returns an array of Nemo integers representing the linear combination.\n\n\n\n"
},

{
    "location": "acb/#Nemo.lindep-Tuple{Array{acb,2},Int64}",
    "page": "Complex balls",
    "title": "Nemo.lindep",
    "category": "method",
    "text": "lindep(A::Array{acb, 2}, bits::Int)\n\nFind a (common) small linear combination of the entries in each row of the array A, that is small (using LLL). It is assumed that the complex numbers in each row of the array share the same linear combination. The entries are first scaled by the given number of bits before truncating the real and imaginary parts to integers for use in LLL. This function can be used to find a common linear dependence shared across a number of lists of complex numbers. The algorithm is heuristic only and returns an array of Nemo integers representing the common linear combination.\n\n\n\n"
},

{
    "location": "acb/#Linear-dependence-1",
    "page": "Complex balls",
    "title": "Linear dependence",
    "category": "section",
    "text": "lindep(::Array{acb, 1}, n::Int)lindep(A::Array{acb, 2}, bits::Int)ExamplesCC = ComplexField(128)\n\n# These are two of the roots of x^5 + 3x + 1\na = CC(1.0050669478588622428791051888364775253, - 0.93725915669289182697903585868761513585)\nb = CC(-0.33198902958450931620250069492231652319)\n\n# We recover the polynomial from one root....\nV1 = [CC(1), a, a^2, a^3, a^4, a^5];\nW = lindep(V1, 20)\n\n# ...or from two\nV2 = [CC(1), b, b^2, b^3, b^4, b^5];\nVs = [V1 V2]\'\nX = lindep(Vs, 20)"
},

{
    "location": "gfp/#",
    "page": "Galois fields",
    "title": "Galois fields",
    "category": "page",
    "text": "CurrentModule = Nemo"
},

{
    "location": "gfp/#Galois-fields-1",
    "page": "Galois fields",
    "title": "Galois fields",
    "category": "section",
    "text": "Nemo allows the creation of Galois fields of the form mathbbZpmathbbZ for a prime p. Note that these are not the same as finite fields of degree 1, as Conway polynomials are not used.For convenience, the following constructors are provided.GF(n::UInt)\nGF(n::Int)For example, one can create the Galois field of characteristic 7 as follows.R = GF(7)Elements of the field are then created in the usual way.a = R(3)Elements of Galois fields have type gfp_elem, and the type of the parent objects is GaloisField.The modulus p of an element of a Galois field is stored in its parent object.The gfp_elem type belong to the abstract type FinFieldElem and the GaloisField parent object type belongs to the abstract type FinField."
},

{
    "location": "gfp/#Galois-field-functionality-1",
    "page": "Galois fields",
    "title": "Galois field functionality",
    "category": "section",
    "text": "Galois fields in Nemo implement the residue ring interface of AbstractAlgebra.jl:https://nemocas.github.io/AbstractAlgebra.jl/residue_rings.htmlIn addition, all the functionality for generic residue rings is available:https://nemocas.github.io/AbstractAlgebra.jl/residue.htmlBelow we describe the functionality that is provided in addition to this interface."
},

{
    "location": "gfp/#AbstractAlgebra.Generic.characteristic-Tuple{Nemo.GaloisField}",
    "page": "Galois fields",
    "title": "AbstractAlgebra.Generic.characteristic",
    "category": "method",
    "text": "characteristic(a::GaloisField) -> fmpz\n\nReturn the characteristic of the given Galois field.\n\n\n\n"
},

{
    "location": "gfp/#AbstractAlgebra.Generic.order-Tuple{Nemo.GaloisField}",
    "page": "Galois fields",
    "title": "AbstractAlgebra.Generic.order",
    "category": "method",
    "text": "order(a::GaloisField) -> fmpz\n\nReturn the order, i.e. the number of elements in, the given Galois field.\n\n\n\n"
},

{
    "location": "gfp/#Basic-manipulation-1",
    "page": "Galois fields",
    "title": "Basic manipulation",
    "category": "section",
    "text": "characteristic(::GaloisField)order(::GaloisField)ExamplesF = GF(3)\n\na = characteristic(F)\nb = order(F)"
},

{
    "location": "finitefield/#",
    "page": "Finite fields",
    "title": "Finite fields",
    "category": "page",
    "text": "CurrentModule = Nemo"
},

{
    "location": "finitefield/#Finite-fields-1",
    "page": "Finite fields",
    "title": "Finite fields",
    "category": "section",
    "text": "Finite fields are provided in Nemo by Flint. This allows construction of finite fields of any characteristic and degree for which there are Conway polynomials. It is also possible for the user to specify their own irreducible polynomial generating a finite field.Finite fields are constructed using the FlintFiniteField function. However, for convenience we defineFiniteField = FlintFiniteFieldso that finite fields can be constructed using FiniteField rather than FlintFiniteField. Note that this is the name of the constructor, but not of finite field type.The types of finite field elements in Nemo are given in the following table, along with the libraries that provide them and the associated types of the parent objects.Library Field Element type Parent type\nFlint mathbbF_p^n (small p) fq_nmod FqNmodFiniteField\nFlint mathbbF_p^n (large p) fq FqFiniteFieldThe only difference between the fq and fq_nmod types is the representation. The former is for finite fields with multiprecision characteristic and the latter is for characteristics that fit into a single unsigned machine word. The FlintFiniteField constructor automatically picks the correct representation for the user, and so the average user doesn\'t need to know about the actual types.All the finite field types belong to the FinField abstract type and the finite field element types belong to the FinFieldElem abstract type.Since all the functionality for the fq finite field type is identical to that provided for the fq_nmod finite field type, we simply document the former."
},

{
    "location": "finitefield/#Finite-field-functionality-1",
    "page": "Finite fields",
    "title": "Finite field functionality",
    "category": "section",
    "text": "Finite fields in Nemo implement the entire AbstractAlgebra.jl field interface.https://nemocas.github.io/AbstractAlgebra.jl/fields.htmlBelow we describe the functionality that is provided in addition to this interface."
},

{
    "location": "finitefield/#Nemo.FlintFiniteField-Tuple{fmpz,Int64,AbstractString}",
    "page": "Finite fields",
    "title": "Nemo.FlintFiniteField",
    "category": "method",
    "text": "FlintFiniteField(char::fmpz, deg::Int, s::AbstractString)\n\nReturns a tuple S x consisting of a finite field parent object S and generator x for the finite field of the given characteristic and degree. The string s is used to designate how the finite field generator will be printed. The characteristic must be prime. When a Conway polynomial is known, the field is generated using the Conway polynomial. Otherwise a random sparse, irreducible polynomial is used. The generator of the field is guaranteed to be a multiplicative generator only if the field is generated by a Conway polynomial. We require the degree to be positive.\n\n\n\n"
},

{
    "location": "finitefield/#Nemo.FlintFiniteField-Tuple{Integer,Int64,AbstractString}",
    "page": "Finite fields",
    "title": "Nemo.FlintFiniteField",
    "category": "method",
    "text": "FlintFiniteField(char::Integer, deg::Int, s::AbstractString)\n\nReturns a tuple S x consisting of a finite field parent object S and generator x for the finite field of the given characteristic and degree. The string s is used to designate how the finite field generator will be printed. The characteristic must be prime. When a Conway polynomial is known, the field is generated using the Conway polynomial. Otherwise a random sparse, irreducible polynomial is used. The generator of the field is guaranteed to be a multiplicative generator only if the field is generated by a Conway polynomial. We require the degree to be positive.\n\n\n\n"
},

{
    "location": "finitefield/#Constructors-1",
    "page": "Finite fields",
    "title": "Constructors",
    "category": "section",
    "text": "In order to construct finite field elements in Nemo, one must first construct the finite field itself. This is accomplished with one of the following constructors.FlintFiniteField(::fmpz, ::Int, ::AbstractString)\nFlintFiniteField(::Integer, ::Int, ::AbstractString)FlintFiniteField(::fmpz_mod_poly, ::AbstractString)\nFlintFiniteField(::gfp_fmpz_poly, ::AbstractString)Here are some examples of creating finite fields and making use of the resulting parent objects to coerce various elements into those fields.ExamplesR, x = FiniteField(7, 3, \"x\")\nS, y = FiniteField(ZZ(12431351431561), 2, \"y\")\nT, t = PolynomialRing(ResidueRing(ZZ, 12431351431561), \"t\")\nU, z = FiniteField(t^2 + 7, \"z\")\n\na = R(5)\nb = R(x)\nc = S(ZZ(11))\nd = U(7)"
},

{
    "location": "finitefield/#AbstractAlgebra.Generic.gen-Tuple{FqFiniteField}",
    "page": "Finite fields",
    "title": "AbstractAlgebra.Generic.gen",
    "category": "method",
    "text": "gen(a::FqFiniteField)\n\nReturn the generator of the finite field. Note that this is only guaranteed to be a multiplicative generator if the finite field is generated by a Conway polynomial automatically.\n\n\n\n"
},

{
    "location": "finitefield/#AbstractAlgebra.Generic.isgen-Tuple{fq}",
    "page": "Finite fields",
    "title": "AbstractAlgebra.Generic.isgen",
    "category": "method",
    "text": "isgen(a::fq)\n\nReturn true if the given finite field element is the generator of the finite field, otherwise return false.\n\n\n\n"
},

{
    "location": "finitefield/#AbstractAlgebra.Generic.coeff-Tuple{fq,Int64}",
    "page": "Finite fields",
    "title": "AbstractAlgebra.Generic.coeff",
    "category": "method",
    "text": "coeff(x::fq, n::Int)\n\nReturn the degree n coefficient of the polynomial representing the given finite field element.\n\n\n\n"
},

{
    "location": "finitefield/#AbstractAlgebra.Generic.degree-Tuple{FqFiniteField}",
    "page": "Finite fields",
    "title": "AbstractAlgebra.Generic.degree",
    "category": "method",
    "text": "degree(a::FqFiniteField)\n\nReturn the degree of the given finite field.\n\n\n\n"
},

{
    "location": "finitefield/#AbstractAlgebra.Generic.characteristic-Tuple{FqFiniteField}",
    "page": "Finite fields",
    "title": "AbstractAlgebra.Generic.characteristic",
    "category": "method",
    "text": "characteristic(a::FqFiniteField)\n\nReturn the characteristic of the given finite field.\n\n\n\n"
},

{
    "location": "finitefield/#AbstractAlgebra.Generic.order-Tuple{FqFiniteField}",
    "page": "Finite fields",
    "title": "AbstractAlgebra.Generic.order",
    "category": "method",
    "text": "order(a::FqFiniteField)\n\nReturn the order, i.e. the number of elements in, the given finite field.\n\n\n\n"
},

{
    "location": "finitefield/#Basic-manipulation-1",
    "page": "Finite fields",
    "title": "Basic manipulation",
    "category": "section",
    "text": "gen(::FqFiniteField)isgen(::fq)coeff(::fq, ::Int)degree(::FqFiniteField)characteristic(::FqFiniteField)order(::FqFiniteField)ExamplesR, x = FiniteField(ZZ(7), 5, \"x\")\n\nc = gen(R)\nd = characteristic(R)\nf = order(R)\ng = degree(R)\nn = isgen(x)"
},

{
    "location": "finitefield/#LinearAlgebra.tr-Tuple{fq}",
    "page": "Finite fields",
    "title": "LinearAlgebra.tr",
    "category": "method",
    "text": "tr(x::fq)\n\nReturn the trace of a. This is an element of F_p, but the value returned is this value embedded in the original finite field.\n\n\n\n"
},

{
    "location": "finitefield/#LinearAlgebra.norm-Tuple{fq}",
    "page": "Finite fields",
    "title": "LinearAlgebra.norm",
    "category": "method",
    "text": "norm(x::fq)\n\nReturn the norm of a. This is an element of F_p, but the value returned is this value embedded in the original finite field.\n\n\n\n"
},

{
    "location": "finitefield/#Nemo.frobenius-Tuple{fq,Int64}",
    "page": "Finite fields",
    "title": "Nemo.frobenius",
    "category": "method",
    "text": "frobenius(x::fq, n = 1)\n\nReturn the iterated Frobenius sigma_p^n(a) where sigma_p is the Frobenius map sending the element a to a^p in the finite field of characteristic p. By default the Frobenius map is applied n = 1 times if n is not specified.\n\n\n\n"
},

{
    "location": "finitefield/#Nemo.pth_root-Tuple{fq}",
    "page": "Finite fields",
    "title": "Nemo.pth_root",
    "category": "method",
    "text": "pth_root(x::fq)\n\nReturn the p-th root of a in the finite field of characteristic p. This is the inverse operation to the Frobenius map sigma_p.\n\n\n\n"
},

{
    "location": "finitefield/#Special-functions-1",
    "page": "Finite fields",
    "title": "Special functions",
    "category": "section",
    "text": "Various special functions with finite field specific behaviour are defined.tr(::fq)norm(::fq)frobenius(::fq, ::Int)pth_root(::fq)ExamplesR, x = FiniteField(ZZ(7), 5, \"x\")\n\na = x^4 + 3x^2 + 6x + 1\n\nb = tr(a)\nc = norm(a)\nd = frobenius(a)\nf = frobenius(a, 3)\ng = pth_root(a)"
},

{
    "location": "numberfield/#",
    "page": "Number field arithmetic",
    "title": "Number field arithmetic",
    "category": "page",
    "text": "CurrentModule = Nemo"
},

{
    "location": "numberfield/#Number-field-arithmetic-1",
    "page": "Number field arithmetic",
    "title": "Number field arithmetic",
    "category": "section",
    "text": "Number fields are provided in Nemo by Antic. This allows construction of absolute number fields and basic arithmetic computations therein.Number fields are constructed using the AnticNumberField function. However, for convenience we defineNumberField = AnticNumberFieldso that number fields can be constructed using NumberField rather than AnticNumberField. The types of number field elements in Nemo are given in the following table, along with the libraries that provide them and the associated types of the parent objects.Library Field Element type Parent type\nAntic mathbbQx(f) nf_elem AnticNumberFieldAll the number field types belong to the Field abstract type and the number field element types belong to the FieldElem abstract type.The Hecke.jl library radically expands on number field functionality, providing ideals, orders, class groups, relative extensions, class field theory, etc.The basic number field element type used in Hecke is the Nemo/antic number field element type, making the two libraries tightly integrated.http://thofma.github.io/Hecke.jl/latest/"
},

{
    "location": "numberfield/#Number-field-functionality-1",
    "page": "Number field arithmetic",
    "title": "Number field functionality",
    "category": "section",
    "text": "The number fields in Nemo implement the full AbstractAlgebra.jl field interface.https://nemocas.github.io/AbstractAlgebra.jl/fields.htmlBelow, we document the additional functionality provided for number field elements."
},

{
    "location": "numberfield/#Constructors-1",
    "page": "Number field arithmetic",
    "title": "Constructors",
    "category": "section",
    "text": "In order to construct number field elements in Nemo, one must first construct the number field itself. This is accomplished with one of the following constructors.AnticNumberField(::fmpq_poly, ::AbstractString; cached = true)Return a tuple K, a consisting of the number field parent object K and generator a. The generator will be printed as per the supplied string. By default number field parents are cached based on generator string and generating polynomial. If this is not desired, the optional argument cached can be set to false.AnticCyclotomicField(::Int, ::AbstractString, AbstractString; cached = true)Return a tuple K, a consisting of a parent object K for the n-th cyclotomic field, and a generator a. By default number field parents are cached based on generator string and generating polynomial. If this is not desired, the optional argument cached can be set to false.AnticMaximalRealSubfield(::Int, ::AbstractString, ::AbstractString; cached = true)Return a tuple K, a consisting of a parent object K for the real subfield of the n-th cyclotomic field, and a generator a. By default number field parents are cached based on generator string and generating polynomial. If this is not desired, the optional argument cached can be set to false.For convenience we defineNumberField = AnticNumberField\nCyclotomicField = AnticCyclotomicField\nMaximalRealSubfield = AnticMaximalRealSubfieldso that one can use the names on the left instead of those on the right.Here are some examples of creating number fields and making use of the resulting parent objects to coerce various elements into those fields.ExamplesR, x = PolynomialRing(QQ, \"x\")\nK, a = NumberField(x^3 + 3x + 1, \"a\")\nL, b = CyclotomicField(5, \"b\")\nM, c = MaximalRealSubfield(5, \"c\", \"y\")\n\nd = K(3)\nf = L(b)\ng = L(ZZ(11))\nh = L(ZZ(11)//3)\nk = M(x)"
},

{
    "location": "numberfield/#AbstractAlgebra.Generic.gen-Tuple{AnticNumberField}",
    "page": "Number field arithmetic",
    "title": "AbstractAlgebra.Generic.gen",
    "category": "method",
    "text": "gen(a::AnticNumberField)\n\nReturn the generator of the given number field.\n\n\n\n"
},

{
    "location": "numberfield/#Number-field-element-constructors-1",
    "page": "Number field arithmetic",
    "title": "Number field element constructors",
    "category": "section",
    "text": "gen(::AnticNumberField)The easiest way of constructing number field elements is to use element arithmetic with the generator, to construct the desired element by its representation as a polynomial. See the following examples for how to do this.ExamplesR, x = PolynomialRing(QQ, \"x\")\nK, a = NumberField(x^3 + 3x + 1, \"a\")\n\nd = gen(K)\nf = a^2 + 2a - 7"
},

{
    "location": "numberfield/#AbstractAlgebra.mul_red!-Tuple{nf_elem,nf_elem,nf_elem,Bool}",
    "page": "Number field arithmetic",
    "title": "AbstractAlgebra.mul_red!",
    "category": "method",
    "text": "mul_red!(z::nf_elem, x::nf_elem, y::nf_elem, red::Bool)\n\nMultiply a by b and set the existing number field element c to the result. Reduction modulo the defining polynomial is only performed if red is set to true. Note that a and b must be reduced. This function is provided for performance reasons as it saves allocating a new object for the result and eliminates associated garbage collection.\n\n\n\n"
},

{
    "location": "numberfield/#AbstractAlgebra.reduce!-Tuple{nf_elem}",
    "page": "Number field arithmetic",
    "title": "AbstractAlgebra.reduce!",
    "category": "method",
    "text": "reduce!(x::nf_elem)\n\nReduce the given number field element by the defining polynomial, in-place. This only needs to be done after accumulating values computed by mul_red! where reduction has not been performed. All standard Nemo number field functions automatically reduce their outputs.\n\n\n\n"
},

{
    "location": "numberfield/#Basic-functionality-1",
    "page": "Number field arithmetic",
    "title": "Basic functionality",
    "category": "section",
    "text": "mul_red!(::nf_elem, ::nf_elem, ::nf_elem, ::Bool)reduce!(::nf_elem)The following coercion function is provided for a number field R.R(f::fmpq_poly)Coerce the given rational polynomial into the number field R, i.e. consider the polynomial to be the representation of a number field element and return it.Conversely, if R is the polynomial ring to which the generating polynomial of a number field belongs, then we can coerce number field elements into the ring R using the following function.R(b::nf_elem)Coerce the given number field element into the polynomial ring R of which the number field is a quotient.ExamplesR, x = PolynomialRing(QQ, \"x\")\nK, a = NumberField(x^3 + 3x + 1, \"a\")\n\nf = R(a^2 + 2a + 3)\ng = K(x^2 + 2x + 1)"
},

{
    "location": "numberfield/#AbstractAlgebra.Generic.var-Tuple{AnticNumberField}",
    "page": "Number field arithmetic",
    "title": "AbstractAlgebra.Generic.var",
    "category": "method",
    "text": "var(a::AnticNumberField)\n\nReturns the identifier (as a symbol, not a string), that is used for printing the generator of the given number field.\n\n\n\n"
},

{
    "location": "numberfield/#AbstractAlgebra.Generic.isgen-Tuple{nf_elem}",
    "page": "Number field arithmetic",
    "title": "AbstractAlgebra.Generic.isgen",
    "category": "method",
    "text": "isgen(a::nf_elem)\n\nReturn true if the given number field element is the generator of the number field, otherwise return false.\n\n\n\n"
},

{
    "location": "numberfield/#AbstractAlgebra.Generic.coeff-Tuple{nf_elem,Int64}",
    "page": "Number field arithmetic",
    "title": "AbstractAlgebra.Generic.coeff",
    "category": "method",
    "text": "coeff(x::nf_elem, n::Int)\n\nReturn the n-th coefficient of the polynomial representation of the given number field element. Coefficients are numbered from 0, starting with the constant coefficient.\n\n\n\n"
},

{
    "location": "numberfield/#Base.denominator-Tuple{nf_elem}",
    "page": "Number field arithmetic",
    "title": "Base.denominator",
    "category": "method",
    "text": "denominator(a::nf_elem)\n\nReturn the denominator of the polynomial representation of the given number field element.\n\n\n\n"
},

{
    "location": "numberfield/#AbstractAlgebra.Generic.degree-Tuple{AnticNumberField}",
    "page": "Number field arithmetic",
    "title": "AbstractAlgebra.Generic.degree",
    "category": "method",
    "text": "degree(a::AnticNumberField)\n\nReturn the degree of the given number field, i.e. the degree of its defining polynomial.\n\n\n\n"
},

{
    "location": "numberfield/#Nemo.signature-Tuple{AnticNumberField}",
    "page": "Number field arithmetic",
    "title": "Nemo.signature",
    "category": "method",
    "text": "signature(a::AnticNumberField)\n\nReturn the signature of the given number field, i.e. a tuple r s consisting of r, the number of real embeddings and s, half the number of complex embeddings.\n\n\n\n"
},

{
    "location": "numberfield/#Basic-manipulation-1",
    "page": "Number field arithmetic",
    "title": "Basic manipulation",
    "category": "section",
    "text": "var(::AnticNumberField)isgen(::nf_elem)coeff(::nf_elem, ::Int)denominator(::nf_elem)degree(::AnticNumberField)signature(::AnticNumberField)ExamplesR, x = PolynomialRing(QQ, \"x\")\nK, a = NumberField(x^3 + 3x + 1, \"a\")\n\nd = a^2 + 2a - 7\nm = gen(K)\n\nc = coeff(d, 1)\nisgen(m)\nq = degree(K)\nr, s = signature(K)\nv = var(R)"
},

{
    "location": "numberfield/#LinearAlgebra.norm-Tuple{nf_elem}",
    "page": "Number field arithmetic",
    "title": "LinearAlgebra.norm",
    "category": "method",
    "text": "norm(a::nf_elem)\n\nReturn the absolute norm of a. The result will be a rational number.\n\n\n\n"
},

{
    "location": "numberfield/#LinearAlgebra.tr-Tuple{nf_elem}",
    "page": "Number field arithmetic",
    "title": "LinearAlgebra.tr",
    "category": "method",
    "text": "tr(a::nf_elem)\n\nReturn the absolute trace of a. The result will be a rational number.\n\n\n\n"
},

{
    "location": "numberfield/#Norm-and-trace-1",
    "page": "Number field arithmetic",
    "title": "Norm and trace",
    "category": "section",
    "text": "norm(::nf_elem)tr(::nf_elem)ExamplesR, x = PolynomialRing(QQ, \"x\")\nK, a = NumberField(x^3 + 3x + 1, \"a\")\n\nc = 3a^2 - a + 1\n\nd = norm(c)\nf = tr(c)"
},

{
    "location": "padic/#",
    "page": "Padics",
    "title": "Padics",
    "category": "page",
    "text": "CurrentModule = Nemo"
},

{
    "location": "padic/#Padics-1",
    "page": "Padics",
    "title": "Padics",
    "category": "section",
    "text": "P-adic fields are provided in Nemo by Flint. This allows construction of p-adic fields for any prime p.P-adic fields are constructed using the FlintPadicField function. However, for convenience we definePadicField = FlintPadicFieldso that p-adic fields can be constructed using PadicField rather than FlintPadicField. Note that this is the name of the constructor, but not of padic field type.The types of p-adic fields in Nemo are given in the following table, along with the libraries that provide them and the associated types of the parent objects.Library Field Element type Parent type\nFlint mathbbQ_p padic PadicFieldAll the p-adic field types belong to the Field abstract type and the p-adic field element types belong to the FieldElem abstract type."
},

{
    "location": "padic/#P-adic-functionality-1",
    "page": "Padics",
    "title": "P-adic functionality",
    "category": "section",
    "text": "P-adic fields in Nemo implement the AbstractAlgebra.jl field interface.https://nemocas.github.io/AbstractAlgebra.jl/fields.htmlBelow, we document all the additional function that is provide by Nemo for p-adic fields."
},

{
    "location": "padic/#Nemo.FlintPadicField-Tuple{Integer,Int64}",
    "page": "Padics",
    "title": "Nemo.FlintPadicField",
    "category": "method",
    "text": "FlintPadicField(p::Integer, prec::Int)\n\nReturns the parent object for the p-adic field for given prime p, where the default absolute precision of elements of the field is given by prec.\n\n\n\n"
},

{
    "location": "padic/#Constructors-1",
    "page": "Padics",
    "title": "Constructors",
    "category": "section",
    "text": "In order to construct p-adic field elements in Nemo, one must first construct the p-adic field itself. This is accomplished with one of the following constructors.FlintPadicField(::Integer, ::Int)It is also possible to call the inner constructor directly. It has the following form.FlintPadicField(p::fmpz, prec::Int)Returns the parent object for the p-adic field for given prime p, where the default absolute precision of elements of the field is given by prec.Here are some examples of creating p-adic fields and making use of the resulting parent objects to coerce various elements into those fields.ExamplesR = PadicField(7, 30)\nS = PadicField(ZZ(65537), 30)\n\na = R()\nb = S(1)\nc = S(ZZ(123))\nd = R(ZZ(1)//7^2)"
},

{
    "location": "padic/#AbstractAlgebra.Generic.O-Tuple{FlintPadicField,Integer}",
    "page": "Padics",
    "title": "AbstractAlgebra.Generic.O",
    "category": "method",
    "text": "O(R::FlintPadicField, m::Integer)\n\nConstruct the value 0 + O(p^n) given m = p^n. An exception results if m is not found to be a power of p = prime(R).\n\n\n\n"
},

{
    "location": "padic/#AbstractAlgebra.Generic.O-Tuple{FlintPadicField,fmpz}",
    "page": "Padics",
    "title": "AbstractAlgebra.Generic.O",
    "category": "method",
    "text": "O(R::FlintPadicField, m::fmpz)\n\nConstruct the value 0 + O(p^n) given m = p^n. An exception results if m is not found to be a power of p = prime(R).\n\n\n\n"
},

{
    "location": "padic/#AbstractAlgebra.Generic.O-Tuple{FlintPadicField,fmpq}",
    "page": "Padics",
    "title": "AbstractAlgebra.Generic.O",
    "category": "method",
    "text": "O(R::FlintPadicField, m::fmpq)\n\nConstruct the value 0 + O(p^n) given m = p^n. An exception results if m is not found to be a power of p = prime(R).\n\n\n\n"
},

{
    "location": "padic/#Big-oh-notation-1",
    "page": "Padics",
    "title": "Big-oh notation",
    "category": "section",
    "text": "Elements of p-adic fields can  be constructed using the big-oh notation. For this purpose we define the following functions.O(::FlintPadicField, ::Integer)\nO(::FlintPadicField, ::fmpz)\nO(::FlintPadicField, ::fmpq)The O(p^n) construction can be used to construct p-adic values of precision n by adding it to integer values representing the p-adic value modulo p^n as in the examples.ExamplesR = PadicField(7, 30)\nS = PadicField(ZZ(65537), 30)\n\nc = 1 + 2*7 + 4*7^2 + O(R, 7^3)\nd = 13 + 357*ZZ(65537) + O(S, ZZ(65537)^12)\nf = ZZ(1)//7^2 + ZZ(2)//7 + 3 + 4*7 + O(R, 7^2)Beware that the expression 1 + 2*p + 3*p^2 + O(R, p^n) is actually computed as a normal Julia expression. Therefore if \\code{Int} values are used instead of Flint integers or Julia bignums, overflow may result in evaluating the value."
},

{
    "location": "padic/#Nemo.prime-Tuple{FlintPadicField}",
    "page": "Padics",
    "title": "Nemo.prime",
    "category": "method",
    "text": "prime(R::FlintPadicField)\n\nReturn the prime p for the given p-adic field.\n\n\n\n"
},

{
    "location": "padic/#Base.precision-Tuple{padic}",
    "page": "Padics",
    "title": "Base.precision",
    "category": "method",
    "text": "precision(a::padic)\n\nReturn the precision of the given p-adic field element, i.e. if the element is known to O(p^n) this function will return n.\n\n\n\n"
},

{
    "location": "padic/#AbstractAlgebra.Generic.valuation-Tuple{padic}",
    "page": "Padics",
    "title": "AbstractAlgebra.Generic.valuation",
    "category": "method",
    "text": "valuation(a::padic)\n\nReturn the valuation of the given p-adic field element, i.e. if the given element is divisible by p^n but not a higher power of p then the function will return n.\n\n\n\n"
},

{
    "location": "padic/#Nemo.lift-Tuple{FlintIntegerRing,padic}",
    "page": "Padics",
    "title": "Nemo.lift",
    "category": "method",
    "text": "lift(R::FlintIntegerRing, a::padic)\n\nReturn a lift of the given p-adic field element to mathbbZ.\n\n\n\n"
},

{
    "location": "padic/#Nemo.lift-Tuple{FlintRationalField,padic}",
    "page": "Padics",
    "title": "Nemo.lift",
    "category": "method",
    "text": "lift(R::FlintRationalField, a::padic)\n\nReturn a lift of the given p-adic field element to mathbbQ.\n\n\n\n"
},

{
    "location": "padic/#Basic-manipulation-1",
    "page": "Padics",
    "title": "Basic manipulation",
    "category": "section",
    "text": "prime(::FlintPadicField)precision(::padic)valuation(::padic)lift(::FlintIntegerRing, ::padic)\nlift(::FlintRationalField, ::padic)ExamplesR = PadicField(7, 30)\n\na = 1 + 2*7 + 4*7^2 + O(R, 7^3)\nb = 7^2 + 3*7^3 + O(R, 7^5)\nc = R(2)\n\nk = precision(a)\nm = prime(R)\nn = valuation(b)\np = lift(FlintZZ, a)\nq = lift(FlintQQ, divexact(a, b))"
},

{
    "location": "padic/#Base.sqrt-Tuple{padic}",
    "page": "Padics",
    "title": "Base.sqrt",
    "category": "method",
    "text": "sqrt(a::padic)\n\nReturn the p-adic square root of a. We define this only when the valuation of a is even. The precision of the output will be precision(a) - valuation(a)2. If the square root does not exist, an exception is thrown.\n\n\n\n"
},

{
    "location": "padic/#Square-root-1",
    "page": "Padics",
    "title": "Square root",
    "category": "section",
    "text": "Base.sqrt(::padic)ExamplesR = PadicField(7, 30)\n\na = 1 + 7 + 2*7^2 + O(R, 7^3)\nb = 2 + 3*7 + O(R, 7^5)\nc = 7^2 + 2*7^3 + O(R, 7^4)\n\nd = sqrt(a)\nf = sqrt(b)\nf = sqrt(c)\ng = sqrt(R(121))"
},

{
    "location": "padic/#Base.exp-Tuple{padic}",
    "page": "Padics",
    "title": "Base.exp",
    "category": "method",
    "text": "exp(a::padic)\n\nReturn the p-adic exponential of a. We define this only when the valuation of a is positive (unless a = 0). The precision of the output will be the same as the precision of the input. If the input is not valid an exception is thrown.\n\n\n\n"
},

{
    "location": "padic/#Base.log-Tuple{padic}",
    "page": "Padics",
    "title": "Base.log",
    "category": "method",
    "text": "log(a::padic)\n\nReturn the p-adic logarithm of a. We define this only when the valuation of a is zero (but not for a == 0). The precision of the output will be the same as the precision of the input. If the input is not valid an exception is thrown.\n\n\n\n"
},

{
    "location": "padic/#Nemo.teichmuller-Tuple{padic}",
    "page": "Padics",
    "title": "Nemo.teichmuller",
    "category": "method",
    "text": "teichmuller(a::padic)\n\nReturn the Teichmuller lift of the p-adic value a. We require the valuation of a to be nonnegative. The precision of the output will be the same as the precision of the input. For convenience, if a is congruent to zero modulo p we return zero. If the input is not valid an exception is thrown.\n\n\n\n"
},

{
    "location": "padic/#Special-functions-1",
    "page": "Padics",
    "title": "Special functions",
    "category": "section",
    "text": "Base.exp(::padic)log(::padic)teichmuller(::padic)ExamplesR = PadicField(7, 30)\n\na = 1 + 7 + 2*7^2 + O(R, 7^3)\nb = 2 + 5*7 + 3*7^2 + O(R, 7^3)\nc = 3*7 + 2*7^2 + O(R, 7^5)\n\nc = exp(c)\nd = log(a)\nc = exp(R(0))\nd = log(R(1))\nf = teichmuller(b)"
},

{
    "location": "matrix/#",
    "page": "Matrices",
    "title": "Matrices",
    "category": "page",
    "text": "CurrentModule = Nemo"
},

{
    "location": "matrix/#Matrices-1",
    "page": "Matrices",
    "title": "Matrices",
    "category": "section",
    "text": "Nemo allow the creation of dense matrices over any computable ring R. There are two different kinds of implementation: a generic one for the case where no specific implementation exists (provided by AbstractAlgebra.jl), and efficient implementations of matrices over numerous specific rings, usually provided by C/C++ libraries.The following table shows each of the matrix types available in Nemo, the base ring R, and the Julia/Nemo types for that kind of matrix (the type information is mainly of concern to developers).Base ring Library Element type Parent type\nGeneric ring R AbstractAlgebra.jl Generic.Mat{T} Generic.MatSpace{T}\nmathbbZ Flint fmpz_mat FmpzMatSpace\nmathbbZnmathbbZ (small n) Flint nmod_mat NmodMatSpace\nmathbbQ Flint fmpq_mat FmpqMatSpace\nmathbbZpmathbbZ (small p) Flint gfp_mat GFPMatSpace\nmathbbF_p^n (small p) Flint fq_nmod_mat FqNmodMatSpace\nmathbbF_p^n (large p) Flint fq_mat `FqMatSpace\nmathbbR Arb arb_mat ArbMatSpace\nmathbbC Arb acb_mat AcbMatSpaceThe dimensions and base ring R of a generic matrix are stored in its parent object. All matrix element types belong to the abstract type MatElem and all of the matrix space types belong to the abstract type MatSpace. This enables one to write generic functions that can accept any Nemo matrix type."
},

{
    "location": "matrix/#Matrix-functionality-1",
    "page": "Matrices",
    "title": "Matrix functionality",
    "category": "section",
    "text": "All matrix spaces in Nemo follow the AbstractAlgebra.jl matrix interface:https://nemocas.github.io/AbstractAlgebra.jl/matrix_spaces.htmlIn addition, AbstractAlgebra.jl provides a great deal of generic functionality for matrices. Some of this functionality is also provided by C libraries, such as Flint, for various specific rings.https://nemocas.github.io/AbstractAlgebra.jl/matrix.htmlIn the following, we list the functionality which is provided in addition to the generic matrix functionality, for specific rings in Nemo."
},

{
    "location": "matrix/#Nemo.overlaps-Tuple{arb_mat,arb_mat}",
    "page": "Matrices",
    "title": "Nemo.overlaps",
    "category": "method",
    "text": "overlaps(x::arb_mat, y::arb_mat)\n\nReturns true if all entries of x overlap with the corresponding entry of y, otherwise return false.\n\n\n\n"
},

{
    "location": "matrix/#Nemo.overlaps-Tuple{acb_mat,acb_mat}",
    "page": "Matrices",
    "title": "Nemo.overlaps",
    "category": "method",
    "text": "overlaps(x::acb_mat, y::acb_mat)\n\nReturns true if all entries of x overlap with the corresponding entry of y, otherwise return false.\n\n\n\n"
},

{
    "location": "matrix/#Nemo.contains-Tuple{arb_mat,arb_mat}",
    "page": "Matrices",
    "title": "Nemo.contains",
    "category": "method",
    "text": "contains(x::arb_mat, y::arb_mat)\n\nReturns true if all entries of x contain the corresponding entry of y, otherwise return false.\n\n\n\n"
},

{
    "location": "matrix/#Nemo.contains-Tuple{acb_mat,acb_mat}",
    "page": "Matrices",
    "title": "Nemo.contains",
    "category": "method",
    "text": "contains(x::acb_mat, y::acb_mat)\n\nReturns true if all entries of x contain the corresponding entry of y, otherwise return false.\n\n\n\n"
},

{
    "location": "matrix/#Comparison-operators-1",
    "page": "Matrices",
    "title": "Comparison operators",
    "category": "section",
    "text": "overlaps(::arb_mat, ::arb_mat)overlaps(::acb_mat, ::acb_mat)contains(::arb_mat, ::arb_mat)contains(::acb_mat, ::acb_mat)In addition we have the following ad hoc comparison operators.ExamplesC = RR[1 2; 3 4]\nD = RR[\"1 +/- 0.1\" \"2 +/- 0.1\"; \"3 +/- 0.1\" \"4 +/- 0.1\"]\noverlaps(C, D)\ncontains(D, C)"
},

{
    "location": "matrix/#Base.:<<-Tuple{fmpz_mat,Int64}",
    "page": "Matrices",
    "title": "Base.:<<",
    "category": "method",
    "text": "<<(x::fmpz_mat, y::Int)\n\nReturn 2^yx.\n\n\n\n"
},

{
    "location": "matrix/#Base.:>>-Tuple{fmpz_mat,Int64}",
    "page": "Matrices",
    "title": "Base.:>>",
    "category": "method",
    "text": ">>(x::fmpz_mat, y::Int)\n\nReturn x2^y where rounding is towards zero.\n\n\n\n"
},

{
    "location": "matrix/#Nemo.det_divisor-Tuple{fmpz_mat}",
    "page": "Matrices",
    "title": "Nemo.det_divisor",
    "category": "method",
    "text": "det_divisor(x::fmpz_mat)\n\nReturn some positive divisor of the determinant of x, if the determinant is nonzero, otherwise return zero.\n\n\n\n"
},

{
    "location": "matrix/#Nemo.det_given_divisor-Tuple{fmpz_mat,Integer,Bool}",
    "page": "Matrices",
    "title": "Nemo.det_given_divisor",
    "category": "method",
    "text": "det_given_divisor(x::fmpz_mat, d::Integer, proved=true)\n\nReturn the determinant of x given a positive divisor of its determinant. If proved == true (the default), the output is guaranteed to be correct, otherwise a heuristic algorithm is used.\n\n\n\n"
},

{
    "location": "matrix/#Nemo.det_given_divisor-Tuple{fmpz_mat,fmpz,Bool}",
    "page": "Matrices",
    "title": "Nemo.det_given_divisor",
    "category": "method",
    "text": "det_given_divisor(x::fmpz_mat, d::fmpz, proved=true)\n\nReturn the determinant of x given a positive divisor of its determinant. If proved == true (the default), the output is guaranteed to be correct, otherwise a heuristic algorithm is used.\n\n\n\n"
},

{
    "location": "matrix/#Scaling-1",
    "page": "Matrices",
    "title": "Scaling",
    "category": "section",
    "text": "<<(::fmpz_mat, ::Int)>>(::fmpz_mat, ::Int)ExamplesS = MatrixSpace(ZZ, 3, 3)\n\nA = S([fmpz(2) 3 5; 1 4 7; 9 6 3])\n \nB = A<<5\nC = B>>2##i# Determinantdet_divisor(::fmpz_mat)det_given_divisor(::fmpz_mat, ::Integer, ::Bool)\ndet_given_divisor(::fmpz_mat, ::fmpz, ::Bool)ExamplesS = MatrixSpace(ZZ, 3, 3)\n\nA = S([fmpz(2) 3 5; 1 4 7; 9 6 3])\n \nc = det_divisor(A)\nd = det_given_divisor(A, c)"
},

{
    "location": "matrix/#Nemo.cansolve-Tuple{fmpz_mat,fmpz_mat}",
    "page": "Matrices",
    "title": "Nemo.cansolve",
    "category": "method",
    "text": "cansolve(a::fmpz_mat, b::fmpz_mat) -> Bool, fmpz_mat\n\nReturn true and a matrix x such that ax = b, or false and some matrix in case x does not exist.\n\n\n\n"
},

{
    "location": "matrix/#Nemo.solve_dixon-Tuple{fmpz_mat,fmpz_mat}",
    "page": "Matrices",
    "title": "Nemo.solve_dixon",
    "category": "method",
    "text": "solve_dixon(a::fmpz_mat, b::fmpz_mat)\n\nReturn a tuple (x m) consisting of a column vector x such that ax = b pmodm. The element  b must be a column vector with the same number > of rows as a and a must be a square matrix. If these conditions are not met or (x d) does not exist, an exception is raised.\n\n\n\n"
},

{
    "location": "matrix/#Nemo.solve_dixon-Tuple{fmpq_mat,fmpq_mat}",
    "page": "Matrices",
    "title": "Nemo.solve_dixon",
    "category": "method",
    "text": "solve_dixon(a::fmpq_mat, b::fmpq_mat)\n\nSolve ax = b by clearing denominators and using Dixon\'s algorithm. This is usually faster for large systems.\n\n\n\n"
},

{
    "location": "matrix/#Linear-solving-1",
    "page": "Matrices",
    "title": "Linear solving",
    "category": "section",
    "text": "cansolve(::fmpz_mat, ::fmpz_mat)solve_dixon(::fmpz_mat, ::fmpz_mat)\nsolve_dixon(::fmpq_mat, ::fmpq_mat)ExamplesS = MatrixSpace(ZZ, 3, 3)\nT = MatrixSpace(ZZ, 3, 1)\n\nA = S([fmpz(2) 3 5; 1 4 7; 9 2 2])   \nB = T([fmpz(4), 5, 7])\n\nX, m = solve_dixon(A, B)"
},

{
    "location": "matrix/#Nemo.pseudo_inv-Tuple{fmpz_mat}",
    "page": "Matrices",
    "title": "Nemo.pseudo_inv",
    "category": "method",
    "text": "pseudo_inv(x::fmpz_mat)\n\nReturn a tuple (z d) consisting of a matrix z and denominator d such that zd is the inverse of x.\n\n\n\n"
},

{
    "location": "matrix/#Pseudo-inverse-1",
    "page": "Matrices",
    "title": "Pseudo inverse",
    "category": "section",
    "text": "pseudo_inv(::fmpz_mat)ExamplesS = MatrixSpace(ZZ, 3, 3)\n\nA = S([1 0 1; 2 3 1; 5 6 7])\n  \nB, d = pseudo_inv(A)"
},

{
    "location": "matrix/#Nemo.nullspace_right_rational-Tuple{fmpz_mat}",
    "page": "Matrices",
    "title": "Nemo.nullspace_right_rational",
    "category": "method",
    "text": "nullspace_right_rational(x::fmpz_mat)\n\nReturn a tuple (r U) consisting of a matrix U such that the first r columns form the right rational nullspace of x, i.e. a set of vectors over mathbbZ giving a mathbbQ-basis  for the nullspace of x considered as a matrix over\n\nmathbbQ\n\n.\n\n\n\n"
},

{
    "location": "matrix/#Nullspace-1",
    "page": "Matrices",
    "title": "Nullspace",
    "category": "section",
    "text": "nullspace_right_rational(x::fmpz_mat)"
},

{
    "location": "matrix/#Nemo.reduce_mod-Tuple{fmpz_mat,Integer}",
    "page": "Matrices",
    "title": "Nemo.reduce_mod",
    "category": "method",
    "text": "reduce_mod(x::fmpz_mat, y::Integer)\n\nReduce the entries of x modulo y and return the result.\n\n\n\n"
},

{
    "location": "matrix/#Nemo.reduce_mod-Tuple{fmpz_mat,fmpz}",
    "page": "Matrices",
    "title": "Nemo.reduce_mod",
    "category": "method",
    "text": "reduce_mod(x::fmpz_mat, y::fmpz)\n\nReduce the entries of x modulo y and return the result.\n\n\n\n"
},

{
    "location": "matrix/#Modular-reduction-1",
    "page": "Matrices",
    "title": "Modular reduction",
    "category": "section",
    "text": "reduce_mod(::fmpz_mat, ::Integer)\nreduce_mod(::fmpz_mat, ::fmpz)ExamplesS = MatrixSpace(ZZ, 3, 3)\n\nA = S([fmpz(2) 3 5; 1 4 7; 9 2 2])\n   \nreduce_mod(A, ZZ(5))\nreduce_mod(A, 2)"
},

{
    "location": "matrix/#Nemo.lift-Tuple{nmod_mat}",
    "page": "Matrices",
    "title": "Nemo.lift",
    "category": "method",
    "text": "lift(a::Zmodn_mat)\n\nReturn a lift of the matrix a to a matrix over mathbbZ, i.e. where the entries of the returned matrix are those of a lifted to mathbbZ.\n\n\n\n"
},

{
    "location": "matrix/#Nemo.lift-Tuple{gfp_mat}",
    "page": "Matrices",
    "title": "Nemo.lift",
    "category": "method",
    "text": "lift(a::gfp_mat)\n\nReturn a lift of the matrix a to a matrix over mathbbZ, i.e. where the entries of the returned matrix are those of a lifted to mathbbZ.\n\n\n\n"
},

{
    "location": "matrix/#Lifting-1",
    "page": "Matrices",
    "title": "Lifting",
    "category": "section",
    "text": "lift(::nmod_mat)\nlift(::gfp_mat)ExamplesR = ResidueRing(ZZ, 7)\nS = MatrixSpace(R, 3, 3)\n\na = S([4 5 6; 7 3 2; 1 4 5])\n  \n b = lift(a)"
},

{
    "location": "matrix/#Nemo.hadamard-Tuple{FmpzMatSpace}",
    "page": "Matrices",
    "title": "Nemo.hadamard",
    "category": "method",
    "text": "hadamard(R::FmpzMatSpace)\n\nReturn the Hadamard matrix for the given matrix space. The number of rows and columns must be equal.\n\n\n\n"
},

{
    "location": "matrix/#Nemo.ishadamard-Tuple{fmpz_mat}",
    "page": "Matrices",
    "title": "Nemo.ishadamard",
    "category": "method",
    "text": "ishadamard(x::fmpz_mat)\n\nReturn true if the given matrix is Hadamard, otherwise return false.\n\n\n\n"
},

{
    "location": "matrix/#Nemo.hilbert-Tuple{FmpqMatSpace}",
    "page": "Matrices",
    "title": "Nemo.hilbert",
    "category": "method",
    "text": "hilbert(R::FmpqMatSpace)\n\nReturn the Hilbert matrix in the given matrix space. This is the matrix with entries H_ij = 1(i + j - 1).\n\n\n\n"
},

{
    "location": "matrix/#Special-matrices-1",
    "page": "Matrices",
    "title": "Special matrices",
    "category": "section",
    "text": "hadamard(::FmpzMatSpace)ishadamard(::fmpz_mat)hilbert(::FmpqMatSpace)ExamplesR = MatrixSpace(ZZ, 3, 3)\nS = MatrixSpace(QQ, 3, 3)\n\nA = hadamard(R)\nishadamard(A)\nB = hilbert(R)"
},

{
    "location": "matrix/#AbstractAlgebra.Generic.hnf-Tuple{fmpz_mat}",
    "page": "Matrices",
    "title": "AbstractAlgebra.Generic.hnf",
    "category": "method",
    "text": "hnf(x::fmpz_mat)\n\nReturn the Hermite Normal Form of x.\n\n\n\n"
},

{
    "location": "matrix/#Nemo.hnf_with_transform-Tuple{fmpz_mat}",
    "page": "Matrices",
    "title": "Nemo.hnf_with_transform",
    "category": "method",
    "text": "hnf_with_transform(x::fmpz_mat)\n\nCompute a tuple (H T) where H is the Hermite normal form of x and T is a transformation matrix so that H = Tx.\n\n\n\n"
},

{
    "location": "matrix/#Nemo.hnf_modular-Tuple{fmpz_mat,fmpz}",
    "page": "Matrices",
    "title": "Nemo.hnf_modular",
    "category": "method",
    "text": "hnf_modular(x::fmpz_mat, d::fmpz)\n\nCompute the Hermite normal form of x given that d is a multiple of the determinant of the nonzero rows of x.\n\n\n\n"
},

{
    "location": "matrix/#Nemo.hnf_modular_eldiv-Tuple{fmpz_mat,fmpz}",
    "page": "Matrices",
    "title": "Nemo.hnf_modular_eldiv",
    "category": "method",
    "text": "hnf_modular_eldiv(x::fmpz_mat, d::fmpz)\n\nCompute the Hermite normal form of x given that d is a multiple of the largest elementary divisor of x. The matrix x must have full rank.\n\n\n\n"
},

{
    "location": "matrix/#Nemo.ishnf-Tuple{fmpz_mat}",
    "page": "Matrices",
    "title": "Nemo.ishnf",
    "category": "method",
    "text": "ishnf(x::fmpz_mat)\n\nReturn true if the given matrix is in Hermite Normal Form, otherwise return false.\n\n\n\n"
},

{
    "location": "matrix/#Hermite-Normal-Form-1",
    "page": "Matrices",
    "title": "Hermite Normal Form",
    "category": "section",
    "text": "hnf(::fmpz_mat)hnf_with_transform(::fmpz_mat)hnf_modular(::fmpz_mat, ::fmpz)hnf_modular_eldiv(::fmpz_mat, ::fmpz)ishnf(::fmpz_mat)ExamplesS = MatrixSpace(ZZ, 3, 3)\n\nA = S([fmpz(2) 3 5; 1 4 7; 19 3 7])\n   \nB = hnf(A)\nH, T = hnf_with_transform(A)\nM = hnf_modular(A, fmpz(27))\nN = hnf_modular_eldiv(A, fmpz(27))\nishnf(M)"
},

{
    "location": "matrix/#Nemo.lll-Tuple{fmpz_mat,lll_ctx}",
    "page": "Matrices",
    "title": "Nemo.lll",
    "category": "method",
    "text": "lll(x::fmpz_mat, ctx=lll_ctx(0.99, 0.51))\n\nReturn the LLL reduction of the matrix x. By default the matrix x is a mathbbZ-basis and the Gram matrix is maintained throughout in approximate form. The LLL is performed with reduction parameters delta = 099 and eta = 051. All of these defaults can be overridden by specifying an optional context object.\n\n\n\n"
},

{
    "location": "matrix/#Nemo.lll_with_transform-Tuple{fmpz_mat,lll_ctx}",
    "page": "Matrices",
    "title": "Nemo.lll_with_transform",
    "category": "method",
    "text": "Compute a tuple (L T) where L is the LLL reduction of a and T is a transformation matrix so that L = Ta. All the default parameters can be overridden by supplying an optional context object.\n\n\n\n"
},

{
    "location": "matrix/#Nemo.lll_gram-Tuple{fmpz_mat,lll_ctx}",
    "page": "Matrices",
    "title": "Nemo.lll_gram",
    "category": "method",
    "text": "lll_gram(x::fmpz_mat, ctx=lll_ctx(0.99, 0.51, :gram))\n\nGiven the Gram matrix x of a matrix, compute the Gram matrix of its LLL reduction.\n\n\n\n"
},

{
    "location": "matrix/#Nemo.lll_gram_with_transform-Tuple{fmpz_mat,lll_ctx}",
    "page": "Matrices",
    "title": "Nemo.lll_gram_with_transform",
    "category": "method",
    "text": "lll_gram_with_transform(x::fmpz_mat, ctx=lll_ctx(0.99, 0.51, :gram))\n\nGiven the Gram matrix x of a matrix M, compute a tuple (L T) where L is the gram matrix of the LLL reduction of the matrix and T is a transformation matrix so that L = TM.\n\n\n\n"
},

{
    "location": "matrix/#Nemo.lll_with_removal-Tuple{fmpz_mat,fmpz,lll_ctx}",
    "page": "Matrices",
    "title": "Nemo.lll_with_removal",
    "category": "method",
    "text": "lll_with_removal(x::fmpz_mat, b::fmpz, ctx=lll_ctx(0.99, 0.51))\n\nCompute the LLL reduction of x and throw away rows whose norm exceeds the given bound b. Return a tuple (r L) where the first r rows of L are the rows remaining after removal.\n\n\n\n"
},

{
    "location": "matrix/#Nemo.lll_with_removal_transform-Tuple{fmpz_mat,fmpz,lll_ctx}",
    "page": "Matrices",
    "title": "Nemo.lll_with_removal_transform",
    "category": "method",
    "text": "lll_with_removal_transform(x::fmpz_mat, b::fmpz, ctx=lll_ctx(0.99, 0.51))\n\nCompute a tuple (r L T) where the first r rows of L are those remaining from the LLL reduction after removal of vectors with norm exceeding the bound b and T is a transformation matrix so that L = Tx.\n\n\n\n"
},

{
    "location": "matrix/#Nemo.lll!-Tuple{fmpz_mat,lll_ctx}",
    "page": "Matrices",
    "title": "Nemo.lll!",
    "category": "method",
    "text": "lll!(x::fmpz_mat, ctx=lll_ctx(0.99, 0.51))\n\nPerform the LLL reduction of the matrix x inplace. By default the matrix x is a > mathbbZ-basis and the Gram matrix is maintained throughout in approximate form. The LLL is performed with reduction parameters delta = 099 and eta = 051. All of these defaults can be overridden by specifying an optional context object.\n\n\n\n"
},

{
    "location": "matrix/#Nemo.lll_gram!-Tuple{fmpz_mat,lll_ctx}",
    "page": "Matrices",
    "title": "Nemo.lll_gram!",
    "category": "method",
    "text": "lll_gram!(x::fmpz_mat, ctx=lll_ctx(0.99, 0.51, :gram))\n\nGiven the Gram matrix x of a matrix, compute the Gram matrix of its LLL reduction inplace.\n\n\n\n"
},

{
    "location": "matrix/#Lattice-basis-reduction-1",
    "page": "Matrices",
    "title": "Lattice basis reduction",
    "category": "section",
    "text": "Nemo provides LLL lattice basis reduction. Optionally one can specify the setup using a context object created by the following function.lll_ctx(delta::Float64, eta::Float64, rep=:zbasis, gram=:approx)Return a LLL context object specifying LLL parameters delta and eta and specifying the representation as either :zbasis or :gram and the Gram type as either :approx or :exact.lll(::fmpz_mat, ::lll_ctx)lll_with_transform(::fmpz_mat, ::lll_ctx)lll_gram(::fmpz_mat, ::lll_ctx)lll_gram_with_transform(::fmpz_mat, ::lll_ctx)lll_with_removal(::fmpz_mat, ::fmpz, ::lll_ctx)lll_with_removal_transform(::fmpz_mat, ::fmpz, ::lll_ctx)lll!(::fmpz_mat, ::lll_ctx)lll_gram!(::fmpz_mat, ::lll_ctx)ExamplesS = MatrixSpace(ZZ, 3, 3)\n\nA = S([fmpz(2) 3 5; 1 4 7; 19 3 7])\n   \nL = lll(A, lll_ctx(0.95, 0.55, :zbasis, :approx)\nL, T = lll_with_transform(A)\n\nG == lll_gram(gram(A))\nG, T = lll_gram_with_transform(gram(A))\n\nr, L = lll_with_removal(A, fmpz(100))\nr, L, T = lll_with_removal_transform(A, fmpz(100))"
},

{
    "location": "matrix/#AbstractAlgebra.Generic.snf-Tuple{fmpz_mat}",
    "page": "Matrices",
    "title": "AbstractAlgebra.Generic.snf",
    "category": "method",
    "text": "snf(x::fmpz_mat)\n\nCompute the Smith normal form of x.\n\n\n\n"
},

{
    "location": "matrix/#Nemo.snf_diagonal-Tuple{fmpz_mat}",
    "page": "Matrices",
    "title": "Nemo.snf_diagonal",
    "category": "method",
    "text": "snf_diagonal(x::fmpz_mat)\n\nGiven a diagonal matrix x compute the Smith normal form of x.\n\n\n\n"
},

{
    "location": "matrix/#Nemo.issnf-Tuple{fmpz_mat}",
    "page": "Matrices",
    "title": "Nemo.issnf",
    "category": "method",
    "text": "issnf(x::fmpz_mat)\n\nReturn true if x is in Smith normal form, otherwise return false.\n\n\n\n"
},

{
    "location": "matrix/#Smith-Normal-Form-1",
    "page": "Matrices",
    "title": "Smith Normal Form",
    "category": "section",
    "text": "snf(::fmpz_mat)snf_diagonal(::fmpz_mat)issnf(::fmpz_mat)ExamplesS = MatrixSpace(ZZ, 3, 3)\n\nA = S([fmpz(2) 3 5; 1 4 7; 19 3 7])\n   \nB = snf(A)\nissnf(B) == true\n\nB = S([fmpz(2) 0 0; 0 4 0; 0 0 7])\n\nC = snf_diagonal(B)"
},

{
    "location": "matrix/#Nemo.strong_echelon_form-Tuple{nmod_mat}",
    "page": "Matrices",
    "title": "Nemo.strong_echelon_form",
    "category": "method",
    "text": "strong_echelon_form(a::nmod_mat)\n\nReturn the strong echeleon form of a. The matrix a must have at least as many rows as columns.\n\n\n\n"
},

{
    "location": "matrix/#Nemo.strong_echelon_form-Tuple{gfp_mat}",
    "page": "Matrices",
    "title": "Nemo.strong_echelon_form",
    "category": "method",
    "text": "strong_echelon_form(a::gfp_mat)\n\nReturn the strong echeleon form of a. The matrix a must have at least as many rows as columns.\n\n\n\n"
},

{
    "location": "matrix/#Strong-Echelon-Form-1",
    "page": "Matrices",
    "title": "Strong Echelon Form",
    "category": "section",
    "text": "strong_echelon_form(::nmod_mat)\nstrong_echelon_form(::gfp_mat)ExamplesR = ResidueRing(ZZ, 12)\nS = MatrixSpace(R, 3, 3)\n\nA = S([4 1 0; 0 0 5; 0 0 0 ])\n\nB = strong_echelon_form(A)"
},

{
    "location": "matrix/#Nemo.howell_form-Tuple{nmod_mat}",
    "page": "Matrices",
    "title": "Nemo.howell_form",
    "category": "method",
    "text": "howell_form(a::nmod_mat)\n\nReturn the Howell normal form of a. The matrix a must have at least as many rows as columns.\n\n\n\n"
},

{
    "location": "matrix/#Nemo.howell_form-Tuple{gfp_mat}",
    "page": "Matrices",
    "title": "Nemo.howell_form",
    "category": "method",
    "text": "howell_form(a::gfp_mat)\n\nReturn the Howell normal form of a. The matrix a must have at least as many rows as columns.\n\n\n\n"
},

{
    "location": "matrix/#Howell-Form-1",
    "page": "Matrices",
    "title": "Howell Form",
    "category": "section",
    "text": "howell_form(::nmod_mat)\nhowell_form(::gfp_mat)ExamplesR = ResidueRing(ZZ, 12)\nS = MatrixSpace(R, 3, 3)\n\nA = S([4 1 0; 0 0 5; 0 0 0 ])\n\nB = howell_form(A)"
},

{
    "location": "matrix/#Nemo.gso-Tuple{fmpq_mat}",
    "page": "Matrices",
    "title": "Nemo.gso",
    "category": "method",
    "text": "gso(x::fmpq_mat)\n\nReturn the Gram-Schmidt Orthogonalisation of the matrix x.\n\n\n\n"
},

{
    "location": "matrix/#Gram-Schmidt-Orthogonalisation-1",
    "page": "Matrices",
    "title": "Gram-Schmidt Orthogonalisation",
    "category": "section",
    "text": "gso(::fmpq_mat)ExamplesS = MatrixSpace(QQ, 3, 3)\n\nA = S([4 7 3; 2 9 1; 0 5 3])\n\nB = gso(A)"
},

{
    "location": "matrix/#Base.exp-Tuple{arb_mat}",
    "page": "Matrices",
    "title": "Base.exp",
    "category": "method",
    "text": "exp(x::arb_mat)\n\nReturns the exponential of the matrix x.\n\n\n\n"
},

{
    "location": "matrix/#Base.exp-Tuple{acb_mat}",
    "page": "Matrices",
    "title": "Base.exp",
    "category": "method",
    "text": "exp(x::acb_mat)\n\nReturns the exponential of the matrix x.\n\n\n\n"
},

{
    "location": "matrix/#Exponential-1",
    "page": "Matrices",
    "title": "Exponential",
    "category": "section",
    "text": "Base.exp(::arb_mat)Base.exp(::acb_mat)ExamplesA = RR[2 0 0; 0 3 0; 0 0 1]\n\nB = exp(A)"
},

{
    "location": "matrix/#Nemo.bound_inf_norm-Tuple{arb_mat}",
    "page": "Matrices",
    "title": "Nemo.bound_inf_norm",
    "category": "method",
    "text": "bound_inf_norm(x::arb_mat)\n\nReturns a nonnegative element z of type arb, such that z is an upper bound for the infinity norm for every matrix in x\n\n\n\n"
},

{
    "location": "matrix/#Nemo.bound_inf_norm-Tuple{acb_mat}",
    "page": "Matrices",
    "title": "Nemo.bound_inf_norm",
    "category": "method",
    "text": "bound_inf_norm(x::acb_mat)\n\nReturns a nonnegative element z of type acb, such that z is an upper bound for the infinity norm for every matrix in x\n\n\n\n"
},

{
    "location": "matrix/#Norm-1",
    "page": "Matrices",
    "title": "Norm",
    "category": "section",
    "text": "bound_inf_norm(::arb_mat)bound_inf_norm(::acb_mat)ExamplesA = RR[1 2 3; 4 5 6; 7 8 9]\n\nd = bound_inf_norm(A)"
},

{
    "location": "matrix/#Base.Math.ldexp-Tuple{arb_mat,Int64}",
    "page": "Matrices",
    "title": "Base.Math.ldexp",
    "category": "method",
    "text": "ldexp(x::acb_mat, y::Int)\n\nReturn 2^yx. Note that y can be positive, zero or negative.\n\n\n\n"
},

{
    "location": "matrix/#Base.Math.ldexp-Tuple{acb_mat,Int64}",
    "page": "Matrices",
    "title": "Base.Math.ldexp",
    "category": "method",
    "text": "ldexp(x::acb_mat, y::Int)\n\nReturn 2^yx. Note that y can be positive, zero or negative.\n\n\n\n"
},

{
    "location": "matrix/#Shifting-1",
    "page": "Matrices",
    "title": "Shifting",
    "category": "section",
    "text": "ldexp(::arb_mat, ::Int)ldexp(::acb_mat, ::Int)ExamplesA = RR[1 2 3; 4 5 6; 7 8 9]\n\nB = ldexp(A, 4)\n\noverlaps(16*A, B)"
},

{
    "location": "matrix/#Base.isreal-Tuple{acb_mat}",
    "page": "Matrices",
    "title": "Base.isreal",
    "category": "method",
    "text": "isreal(M::acb_mat)\n\nReturns whether every entry of M has vanishing imaginary part.\n\n\n\n"
},

{
    "location": "matrix/#Predicates-1",
    "page": "Matrices",
    "title": "Predicates",
    "category": "section",
    "text": "isreal(::acb_mat)ExamplesA = CC[1 2 3; 4 5 6; 7 8 9]\n\nisreal(A)\n\nisreal(onei(CC)*A)"
},

{
    "location": "matrix/#Conversion-to-Julia-matrices-1",
    "page": "Matrices",
    "title": "Conversion to Julia matrices",
    "category": "section",
    "text": "Julia matrices use a different data structure than Nemo matrices. Conversion to Julia matrices is usually only required for interfacing with other packages. It isn\'t necessary to convert Nemo matrices to Julia matrices in order to manipulate them.This conversion can be performed with standard Julia syntax, such as the following, where A is an fmpz_mat: Matrix{Int}(A)\nMatrix{BigInt}(A)In case the matrix cannot be converted without loss, an InexactError is thrown: in this case, cast to a matrix of BigInts rather than Ints. "
},

{
    "location": "factor/#",
    "page": "Factorisation",
    "title": "Factorisation",
    "category": "page",
    "text": "CurrentModule = Nemo\nDocTestSetup = quote\n  using Nemo\nend"
},

{
    "location": "factor/#Factorisation-1",
    "page": "Factorisation",
    "title": "Factorisation",
    "category": "section",
    "text": "Nemo provides a unified interface to handle factorisations using the Fact objects. These can only be constructed using the factor function for the respective ring elements. This is best illustrated by an example.julia> fac = factor(ZZ(-6000361807272228723606))\n-1 * 2 * 229^3 * 43669^3 * 3\n\njulia> unit(fac)\n-1\n\njulia> -6000361807272228723606 == unit(fac) * prod([ p^e for (p, e) in fac])\ntrue\n\njulia> for (p, e) in fac; println(\"$p $e\"); end\n2 1\n229 3\n43669 3\n3 1\n\njulia> 229 in fac\ntrue\n\njulia> fac[229]\n3"
},

{
    "location": "factor/#Basic-functionality-1",
    "page": "Factorisation",
    "title": "Basic functionality",
    "category": "section",
    "text": "Objects of type Fac are iterable, that is, if a is an object of type Fac, then for (p, e) in a will iterate through all pairs (p, e), where p is a factor and e the corresponding exponent.in(a::fmpz, ::Fac{fmpz})\ngetindex(::Fac{fmpz}, fmpz)\nlength(::Fac{fmpz})\nunit(::Fac{fmpz})"
},

]}
