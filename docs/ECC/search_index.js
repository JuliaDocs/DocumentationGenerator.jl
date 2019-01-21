var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "ECC.jl Documentation",
    "title": "ECC.jl Documentation",
    "category": "page",
    "text": ""
},

{
    "location": "#ECC.jl-Documentation-1",
    "page": "ECC.jl Documentation",
    "title": "ECC.jl Documentation",
    "category": "section",
    "text": "Elliptic Curve Cryptography for Julia."
},

{
    "location": "#ECC.S256Point",
    "page": "ECC.jl Documentation",
    "title": "ECC.S256Point",
    "category": "type",
    "text": "S256Point{T<:Number}\n\nS256Point(𝑥::T, 𝑦::T) where {T<:Union{S256FieldElement, Integer, Infinity}} represents a point in an scep256k1 field.\n\n\n\n\n\n"
},

{
    "location": "#ECC.PrivateKey",
    "page": "ECC.jl Documentation",
    "title": "ECC.PrivateKey",
    "category": "type",
    "text": "PrivateKey(𝑒) represents an S256Point determined by 𝑃 = 𝑒G, where 𝑒 is an integer and G the scep256k1 generator point.\n\n\n\n\n\n"
},

{
    "location": "#ECC.Signature",
    "page": "ECC.jl Documentation",
    "title": "ECC.Signature",
    "category": "type",
    "text": "Signature(𝑟, 𝑠) represents a Signature for 𝑧 in which 𝑠 = (𝑧 + 𝑟𝑒) / 𝑘 𝑘 being a random integer.\n\n\n\n\n\n"
},

{
    "location": "#Types-1",
    "page": "ECC.jl Documentation",
    "title": "Types",
    "category": "section",
    "text": "S256Point\nPrivateKey\nSignature"
},

{
    "location": "#ECC.point2sec",
    "page": "ECC.jl Documentation",
    "title": "ECC.point2sec",
    "category": "function",
    "text": "Serialize an S256Point() to compressed SEC format, uncompressed if false is set as second argument.\n\n\'point2sec(P::T, compressed::Bool=true) where {T<:S256Point} -> Array{UInt8,1}\'\n\n\n\n\n\n"
},

{
    "location": "#ECC.sec2point",
    "page": "ECC.jl Documentation",
    "title": "ECC.sec2point",
    "category": "function",
    "text": "Parse a SEC binary to an S256Point()\n\nsec2point(sec_bin::AbstractArray{UInt8}) -> S256Point\n\n\n\n\n\n"
},

{
    "location": "#ECC.verify",
    "page": "ECC.jl Documentation",
    "title": "ECC.verify",
    "category": "function",
    "text": "Returns true if Signature is valid for 𝑧 given 𝑃, false if not\n\nverify(𝑃::AbstractPoint, 𝑧::Integer, sig::Signature) -> Bool\n\n\n\n\n\n"
},

{
    "location": "#ECC.pksign",
    "page": "ECC.jl Documentation",
    "title": "ECC.pksign",
    "category": "function",
    "text": "Returns a Signature for a given PrivateKey and data 𝑧 pksign(pk::PrivateKey, 𝑧::Integer) -> Signature\n\n\n\n\n\n"
},

{
    "location": "#ECC.sig2der",
    "page": "ECC.jl Documentation",
    "title": "ECC.sig2der",
    "category": "function",
    "text": "Serialize a Signature to DER format\n\nsig2der(x::Signature) -> Array{UInt8,1}\n\n\n\n\n\n"
},

{
    "location": "#ECC.der2sig",
    "page": "ECC.jl Documentation",
    "title": "ECC.der2sig",
    "category": "function",
    "text": "Parse a DER binary to a Signature\n\nder2sig(signature_bin::AbstractArray{UInt8}) -> Signature\n\n\n\n\n\n"
},

{
    "location": "#Functions-1",
    "page": "ECC.jl Documentation",
    "title": "Functions",
    "category": "section",
    "text": "point2sec\nsec2point\nverify\npksign\nsig2der\nder2sig"
},

{
    "location": "#ECC.int2bytes",
    "page": "ECC.jl Documentation",
    "title": "ECC.int2bytes",
    "category": "function",
    "text": "Convert Integer to Array{UInt8}\n\nint2bytes(x::Integer) -> Array{UInt8,1}\n\n\n\n\n\n"
},

{
    "location": "#ECC.bytes2int",
    "page": "ECC.jl Documentation",
    "title": "ECC.bytes2int",
    "category": "function",
    "text": "Convert UInt8 Array to Integers\n\nbytes2big(x::Array{UInt8,1}) -> BigInt\n\n\n\n\n\n"
},

{
    "location": "#Helpers-1",
    "page": "ECC.jl Documentation",
    "title": "Helpers",
    "category": "section",
    "text": "int2bytes\nbytes2int"
},

{
    "location": "#Buy-me-a-cup-of-coffee-1",
    "page": "ECC.jl Documentation",
    "title": "Buy me a cup of coffee",
    "category": "section",
    "text": "Donate Bitcoin   Donate Litecoin"
},

{
    "location": "#Index-1",
    "page": "ECC.jl Documentation",
    "title": "Index",
    "category": "section",
    "text": ""
},

]}
