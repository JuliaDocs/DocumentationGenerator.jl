var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Mods-1",
    "page": "Readme",
    "title": "Mods",
    "category": "section",
    "text": "(Image: Build Status)(Image: Coverage Status)(Image: codecov.io)Easy modular arithmetic for Julia.Construct an immutable Mod object with Mod(val,mod).  Both val and mod must Integer values.julia> using Mods\n\njulia> Mod(4,23)\nMod(4,23)\n\njulia> Mod(-1,23)\nMod(22,23)\n\njulia> Mod(99,12)\nMod(3,12)\n\njulia> x = Mod(4,10)\nMod(4,10)\n\njulia> x.val\n4\n\njulia> x.mod\n10With just a single argument, Mod creates a zero element of the given modulus.julia> Mod(17)\nMod(0,17)"
},

{
    "location": "#Operations-1",
    "page": "Readme",
    "title": "Operations",
    "category": "section",
    "text": ""
},

{
    "location": "#The-basic-four-1",
    "page": "Readme",
    "title": "The basic four",
    "category": "section",
    "text": "Mod objects can be added, subtracted, mulitplied, and divided with one another. The two Mod operands must have the same modulus.julia> x = Mod(8,10); y = Mod(6,10);\n\njulia> x+y\nMod(4,10)\n\njulia> x-y\n(2,10)\n\njulia> x*y\nMod(8,10)\n\njulia> Mod(5,10) + Mod(5,11)\nERROR: Cannot operate on two Mod objects with different moduliDivision can result in an error if the divisor is not invertible. A Mod object x can be checked for invertibility using is_invertible(x). To find the inverse of x (assuming it exists) use inv(x) or x\'.julia> x = Mod(8,10); y = Mod(6,10);\n\njulia> x/y\nERROR: Mod(6,10) is not invertible\n\njulia> x = Mod(8,10); y = Mod(3,10);\n\njulia> x/y\nMod(6,10)\n\njulia> inv(y)\nMod(7,10)We also support unary minus.julia> x = Mod(3,10);\n\njulia> -x\nMod(7,10)"
},

{
    "location": "#Mixed-Integer/Mod-arithmetic-1",
    "page": "Readme",
    "title": "Mixed Integer/Mod arithmetic",
    "category": "section",
    "text": "The basic four operations may also be performed between a Mod object and an Integer. The calculation proceeds as if the Integer has the same modulus as the Mod object.julia> x = Mod(3,10);\n\njulia> x+9\nMod(2,10)\n\njulia> 4x\nMod(2,10)\n\njulia> 3-x\nMod(0,10)\n\njulia> x/7\nMod(9,10)"
},

{
    "location": "#Exponentiation-1",
    "page": "Readme",
    "title": "Exponentiation",
    "category": "section",
    "text": "Use x^k to raise a Mod object x to an Integer power k. If k is zero, this always returns Mod(1,m) where m is the modulus of x. Negative exponentiation succeeds if and only if x is invertible.julia> x = Mod(3,100)\nMod(3,100)\n\njulia> x^10\nMod(49,100)\n\njulia> x^-2\nMod(89,100)\n\njulia> x = Mod(5,100)\nMod(5,100)\n\njulia> x^-3\nERROR: Mod(5,100) is not invertible\n\njulia> Mod(0,10)^0\nMod(1,10)"
},

{
    "location": "#Equality-and-hashing-1",
    "page": "Readme",
    "title": "Equality and hashing",
    "category": "section",
    "text": "Two Mod objects can be compared for equality with either == or isequal.julia> Mod(3,10) == Mod(3,11);\nfalse\n\njulia> Mod(3,10) == Mod(-7,10)\ntrueWe can also compare Mod objects with Integer objects:julia> Mod(3,10) == -7\ntrue\n\njulia> Mod(3,10) == 7\nfalseWe also define hash for Mod objects so they can be stored in sets and used as keys in a dictionary.julia> A = Set{Mod}()\nSet{Mod}({})\n\njulia> push!(A, Mod(3,10))\nSet{Mod}({Mod(3,10)})"
},

{
    "location": "#Chinese-Remainder-Theorem-calculations-1",
    "page": "Readme",
    "title": "Chinese Remainder Theorem calculations",
    "category": "section",
    "text": "The Chinese Remainder Theorem gives a solution to the following problem. Given integers a, b, m, n with gcd(m,n)==1 find an integer x such that mod(x,m)==mod(a,m) and mod(x,n)==mod(b,n). We provide the CRT function to solve this problem as illustrated here with a=3, m=10, b=5, and n=17:julia> s = Mod(3,10); t = Mod(5,17);\n\njulia> CRT(s,t)\nMod(73,170)We find that mod(73,10) equals 3 and mod(73,17) equals 5 as required. The answer is reported as Mod(73,170) because any value of x congruent to 73 modulo 170 is a solution.The CRT function can be applied to any number of arguments so long as their moduli are pairwise relatively prime. If called with no arguments, CRT returns Mod(0,1) since all integers are congruent to 0 modulo 1."
},

{
    "location": "#Technical-details-1",
    "page": "Readme",
    "title": "Technical details",
    "category": "section",
    "text": "Mod objects contain two fields :val and :mod that are both Integer types. When constructed with standard values, these are Int64 values. Two Mod objects may still compare as equal even if their underlying values of are different sorts of Integer values.julia> x = Mod(3,100)\nMod(3,100)\n\njulia> typeof(x.val)\nInt64\n\njulia> y = Mod(3,BigInt(100))\nMod(3,100)\n\njulia> typeof(y.val)\nBigInt (constructor with 10 methods)\n\njulia> x==y\ntrue\n\njulia> hash(x)\n0x88de37e7d9774f69\n\njulia> hash(y)\n0x88de37e7d9774f69Operating with Mod values whose underlying datatypes are different is permitted and the resulting data will be the more generous type.julia> x = Mod(3,100)\nMod(3,100)\n\njulia> typeof(x.val)\nInt64\n\njulia> x += 758940723598072490875903487598024769807980572439847523498799\nMod(2,100)\n\njulia> typeof(x.val)\nBigInt (constructor with 10 methods)Automatic promotion of Integer type only occurs when the operation involves two different types of Integer. If the modulus is too close to the largest possible positive value for a given sort of Integer then incorrect results may emerge. Here\'s an example:julia> x = Mod(-1, 2^63-1)\nMod(9223372036854775806,9223372036854775807)\n\njulia> typeof(x.val)\nInt64\n\njulia> x*x\nMod(4,9223372036854775807)  # should be Mod(1,922...807)The answer, of course, should be 1 in the given modulus. When dealing with large values, it\'s safest to use BigInt storage, like this:julia> x = Mod(BigInt(-1), 2^63-1)\nMod(9223372036854775806,9223372036854775807)\n\njulia> typeof(x.val)\nBigInt (constructor with 10 methods)\n\njulia> x*x\nMod(1,9223372036854775807)  # this is correct"
},

{
    "location": "autodocs/#Mods.Mod",
    "page": "Docstrings",
    "title": "Mods.Mod",
    "category": "type",
    "text": "Mod(v,m) creates a modular number in mod m with value v%m. Mod(m) is equivalent to Mod(0,m).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.inv-Tuple{Mod}",
    "page": "Docstrings",
    "title": "Base.inv",
    "category": "method",
    "text": "inv(x::Mod) gives the multiplicative inverse of x. This may be abbreviated by x\'.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mods.CRT-Tuple{Vararg{Mod,N} where N}",
    "page": "Docstrings",
    "title": "Mods.CRT",
    "category": "method",
    "text": "CRT(m1,m2,...): Chinese Remainder Theorem\n\njulia> CRT( Mod(4,11), Mod(8,14) )\nMods.Mod(92,154)\n\njulia> 92%11\n4\n\njulia> 92%14\n8\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mods.is_invertible-Tuple{Mod}",
    "page": "Docstrings",
    "title": "Mods.is_invertible",
    "category": "method",
    "text": "is_invertible(x::Mod) determines if x is invertible.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Mods]\nOrder = [:type, :function]"
},

]}
