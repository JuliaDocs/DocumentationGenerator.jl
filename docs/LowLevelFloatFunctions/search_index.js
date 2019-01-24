var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#LowLevelFloatFunctions.jl-1",
    "page": "Readme",
    "title": "LowLevelFloatFunctions.jl",
    "category": "section",
    "text": ""
},

{
    "location": "#Manipulate-sign,-exponent,-significand-of-Float64,-Float32,-Float16-values.-1",
    "page": "Readme",
    "title": "Manipulate sign, exponent, significand of Float64, Float32, Float16 values.",
    "category": "section",
    "text": "These functions allow you to alter each floating point field individually    (get, modify, replace) while the rest of the floating point value’s bits     are unmodified. As the system floats are immutable, replacing a subfield     actually generates a new float with the bit logic as above."
},

{
    "location": "#Copyright-and-copy;-2017-by-Jeffrey-Sarnoff.-Released-under-The-MIT-License.-1",
    "page": "Readme",
    "title": "Copyright &copy; 2017 by Jeffrey Sarnoff.  Released under The MIT License.",
    "category": "section",
    "text": ""
},

{
    "location": "#[![Travis](https://travis-ci.org/JeffreySarnoff/LowLevelFloatFunctions.jl.svg?branchmaster)](https://travis-ci.org/JeffreySarnoff/LowLevelFloatFunctions.jl)-1",
    "page": "Readme",
    "title": "(Image: Travis)",
    "category": "section",
    "text": "This is for you. It would be helpful to know what use is made – Issue 1 is to let me know."
},

{
    "location": "#Exports-1",
    "page": "Readme",
    "title": "Exports",
    "category": "section",
    "text": ""
},

{
    "location": "#value-extraction-1",
    "page": "Readme",
    "title": "value extraction",
    "category": "section",
    "text": "sign, exponent, significand"
},

{
    "location": "#field-getting-and-setting-1",
    "page": "Readme",
    "title": "field getting and setting",
    "category": "section",
    "text": "signfield, exponentfield, signficandfield,      unbiasedexponentfield, biasedexponentfield,     signandexponentfields, exponentandsignificand_fields"
},

{
    "location": "#characterization-1",
    "page": "Readme",
    "title": "characterization",
    "category": "section",
    "text": "signbits, exponentbits, significandbits,            exponentmax, exponentmin, exponentfieldmax,         exponentbias    "
},

{
    "location": "#utilitiarian-1",
    "page": "Readme",
    "title": "utilitiarian",
    "category": "section",
    "text": "bitwidth, hexstring    "
},

{
    "location": "#Use-1",
    "page": "Readme",
    "title": "Use",
    "category": "section",
    "text": "These values are used below.julia> sqrt2₆₄, sqrt17₆₄ = sqrt(Float64(2)), sqrt(Float64(17))\n#> (1.4142_1356_2373_0951, 4.1231_0562_5617_6610#> )\n\njulia> sqrt2₃₂, sqrt17₃₂ = sqrt(Float32(2)), sqrt(Float32(17))\n#> (1.4142_135f0, 4.1231_055f0)\n\njulia> sqrt2₁₆, sqrt17₁₆ = sqrt(Float16(2)), sqrt(Float16(17))\n#> (Float16(1.414), Float16(4.125))"
},

{
    "location": "#value-extraction-2",
    "page": "Readme",
    "title": "value extraction",
    "category": "section",
    "text": "julia> significand(-sqrt17₆₄),\n       significand( sqrt17₃₂),\n       significand(-sqrt17₁₆)\n\n#> (-1.0307764064044151, 1.0307764f0, Float16(-1.031))\n\njulia> exponent(-sqrt17₆₄),\n       exponent( sqrt17₃₂),\n       exponent(-sqrt17₁₆)\n\n#> (2, 2, 2)\n\njulia> biased_exponent(-sqrt17₆₄),    \n       biased_exponent( sqrt17₃₂),    \n       biased_exponent(-sqrt17₁₆)\n \n#> (1025, 129, 17)\n\njulia> sign(-sqrt17₆₄),\n       sign( sqrt17₃₂), \n       sign(-sqrt17₁₆)\n\n#> (-1.0, 1.0f0, Float16(-1.0))"
},

{
    "location": "#field-getting-1",
    "page": "Readme",
    "title": "field getting",
    "category": "section",
    "text": "julia> significand_field(sqrt2₆₄),\n       significand_field(sqrt2₃₂),\n       significand_field(sqrt2₁₆)\n\n#> (0x0006a09e667f3bcd, 0x003504f3, 0x01a8)\n\njulia> biased_exponent_field(-sqrt17₆₄),\n       biased_exponent_field(sqrt17₃₂),    \n       biased_exponent_field(-sqrt17₁₆)\n\n#> (0x0000000000000401, 0x00000081, 0x0011) \n\njulia> unbiased_exponent_field(-sqrt17₆₄),\n       unbiased_exponent_field( sqrt17₃₂),    \n       unbiased_exponent_field(-sqrt17₁₆)\n\n#> (0x0000000000000002, 0x00000002, 0x0002)\n\njulia> sign_field(-sqrt17₆₄),\n       sign_field( sqrt17₃₂),\n       sign_field(-sqrt17₁₆)\n\n#> (0x0000000000000001, 0x00000000, 0x0001)"
},

{
    "location": "#field-setting-1",
    "page": "Readme",
    "title": "field setting",
    "category": "section",
    "text": "julia> sign_field(-sqrt2₆₄, 0%UInt64)\n#> 1.4142135623730951\n\njulia> exponent_field(sqrt2₆₄, exponent_field(sqrt2₆₄)+one(UInt64))\n#> 2.8284271247461903\n\njulia> ans/2\n#> 1.4142135623730951\n\njulia> significand_field(sqrt2₃₂, significand_field(sqrt2₃₂) - one(UInt32)),\n       significand_field(sqrt2₃₂, significand_field(sqrt2₃₂)),\n       significand_field(sqrt2₃₂, significand_field(sqrt2₃₂) + one(UInt32))\n\n#> (1.4142134f0, 1.4142135f0, 1.4142137f0)\n\njulia> prevfloat(sqrt2₃₂), sqrt2₃₂, nextfloat(sqrt2₃₂)\n#> (1.4142134f0, 1.4142135f0, 1.4142137f0)"
},

{
    "location": "#characterization-2",
    "page": "Readme",
    "title": "characterization",
    "category": "section",
    "text": "julia> sign_bits(Float64),\n       exponent_bits(Float32),\n       significand_bits(Float16)\n\n#> (1, 8, 10)\n\njulia> exponent_min(Float64),\n       exponent_max(Float64),\n       exponent_field_max(Float64)\n\n#> #> (-1022, 1023, 0x0000000000000400)\n\njulia> exponent_bias(Float32)\n#> 1023"
},

{
    "location": "#utilitiarian-2",
    "page": "Readme",
    "title": "utilitiarian",
    "category": "section",
    "text": "julia> bitwidth(Float64), bitwidth(Float32)\n#> (64, 32)\n\njulia> hexstring(sqrt2₆₄), hexstring(sqrt2₃₂)\n#> (\"3ff6a09e667f3bcd\", \"3fb504f3\")"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [LowLevelFloatFunctions]\nOrder = [:type, :function]"
},

]}
