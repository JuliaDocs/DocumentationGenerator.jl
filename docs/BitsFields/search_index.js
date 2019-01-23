var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Overview",
    "title": "Overview",
    "category": "page",
    "text": ""
},

{
    "location": "#BitsFields.jl-1",
    "page": "Overview",
    "title": "BitsFields.jl",
    "category": "section",
    "text": ""
},

{
    "location": "#Overview-1",
    "page": "Overview",
    "title": "Overview",
    "category": "section",
    "text": "This package facilitates the use of bit fields.  It is written entirely in Julia and released under the MIT License."
},

{
    "location": "#Terminology-1",
    "page": "Overview",
    "title": "Terminology",
    "category": "section",
    "text": "A bit field is a contiguous sequence of one or more bits within a carrier type (the substrate).A single bit field is field that has exactly two states: {0b0, 0b1}. The span of a single bit field is one bit.\nA multibit field is a field that spans two or more adjacent bits.\nAn n⚬bit field is a multibit field that spans n bits.A bit multifield is a collection of one or more bit fields within a shared carrier type (the substrate).The bit fields that compose a bit multifield may or may not be mutually contiguous (there is no requirement that the substrate is completely allocated to the constituent bit fields, nor that any specific bit be allocated).The BitFieldThe BitMultiFieldIEEE Standard Floating Point fieldsWorked Example: Float32 bitfieldsReferences"
},

{
    "location": "thebitfield/#",
    "page": "The BitField",
    "title": "The BitField",
    "category": "page",
    "text": ""
},

{
    "location": "thebitfield/#The-BitField-1",
    "page": "The BitField",
    "title": "The BitField",
    "category": "section",
    "text": "Referencing individual bit positions within a carrier type (using UInt16 as an example).offset from the lsbit 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1 0\nmost & least significant msbit               lsbitThe offset from the least significant bit gives the number of bit positions that must be shifted over to take the content occupying the lsb(it) and place it into the bit position given by that offset.A bitfield may be formed of a single bit\'s position or formed of as many bit positions as exist within the carrier type, and any number of contiguous bit positions in between.  The widest unsigned bits type is UInt128.  So, the bitfield of maximal span is a field comprised of all 128 bit positions available where the carrier type is UInt128.  For each of our available carrier types {UInt8, UInt16, UInt32, UInt64, UInt128}, there is an immediately associated bitfield of maximal span.  carrier type maximal bitfield span comment\nUInt8 8 prefer UInt16 unless app requires UInt8\nUInt16 16 \nUInt32 32 \nUInt64 64 \nUInt128 128 prefer UInt64 unless app requires UInt128To represent a bitfield, any bitfield thatstruct BitField{<:UBits} <: AbstractBitField\n    nbits::BitCount\n    shift::BitCount\n    maskof1s::U       # U is the `carrier` type\n    maskof0s::U       #   an unsigned bits type\n    name::Symbol\nend"
},

{
    "location": "thebitfieldnamed/#",
    "page": "The BitField, Named",
    "title": "The BitField, Named",
    "category": "page",
    "text": ""
},

{
    "location": "thebitfieldnamed/#The-BitField,-Named-1",
    "page": "The BitField, Named",
    "title": "The BitField, Named",
    "category": "section",
    "text": "abcd"
},

{
    "location": "multifields/#",
    "page": "MultiFields",
    "title": "MultiFields",
    "category": "page",
    "text": ""
},

{
    "location": "multifields/#MultiFields-1",
    "page": "MultiFields",
    "title": "MultiFields",
    "category": "section",
    "text": "abcd"
},

{
    "location": "multifieldsnamed/#",
    "page": "MultiFields, Named",
    "title": "MultiFields, Named",
    "category": "page",
    "text": ""
},

{
    "location": "multifieldsnamed/#MultiFields,-Named-1",
    "page": "MultiFields, Named",
    "title": "MultiFields, Named",
    "category": "section",
    "text": "abcd"
},

{
    "location": "ieeestandard754-2008/#",
    "page": "IEEE Standard 754-2008",
    "title": "IEEE Standard 754-2008",
    "category": "page",
    "text": ""
},

{
    "location": "ieeestandard754-2008/#IEEE-Standard-754-2008,-and-the-754-2018-revision-1",
    "page": "IEEE Standard 754-2008",
    "title": "IEEE Standard 754-2008, and the 754-2018 revision",
    "category": "section",
    "text": "(Image: Standard Float64 bitfields)"
},

{
    "location": "ieeestandard754-2008/#the-representation-1",
    "page": "IEEE Standard 754-2008",
    "title": "the representation",
    "category": "section",
    "text": "2.1.26 floating-point representation: An unencoded member of a floating-point format, representing afinite number, a signed infinity, a quiet NaN, or a signaling NaN. A representation of a finite number has three components: a sign, an exponent, and a significand; its numerical value is the signed product of its significand and its radix raised to the power of its exponent.(Image: Standard Floating Point Specifications)This view of the significand as an integer c, with its corresponding exponent q, describes exactly the same set of zero and non-zero floating-point numbers as the view in scientific form. [&sect;3.3]"
},

{
    "location": "ieeestandard754-2008/#the-sign-1",
    "page": "IEEE Standard 754-2008",
    "title": "the sign",
    "category": "section",
    "text": ""
},

{
    "location": "ieeestandard754-2008/#the-significand-1",
    "page": "IEEE Standard 754-2008",
    "title": "the significand",
    "category": "section",
    "text": "2.1.49 significand: A component of a finite floating-point number containing its significant digits. Thesignificand can be thought of as an integer, a fraction, or some other fixed-point form, by choosing an appropriate exponent offset. A decimal or subnormal binary significand can also contain leading zeros."
},

{
    "location": "ieeestandard754-2008/#the-exponent-1",
    "page": "IEEE Standard 754-2008",
    "title": "the exponent",
    "category": "section",
    "text": "2.1.19 exponent: The component of a finite floating-point representation that signifies the integer power towhich the radix is raised in determining the value of that floating-point representation. The exponent e is used when the significand is regarded as an integer digit and fraction field, and the exponent q is used when the significand is regarded as an integer; e = q + p − 1 where p is the precision of the format in digits."
},

{
    "location": "workeduse/#",
    "page": "Worked Use",
    "title": "Worked Use",
    "category": "page",
    "text": "(Image: IEEE754 Floating Point Standard)"
},

{
    "location": "references/#",
    "page": "References",
    "title": "References",
    "category": "page",
    "text": ""
},

{
    "location": "references/#References-1",
    "page": "References",
    "title": "References",
    "category": "section",
    "text": "abcd"
},

{
    "location": "documentindex/#",
    "page": "Index",
    "title": "Index",
    "category": "page",
    "text": ""
},

{
    "location": "documentindex/#Concepts-and-Functions-1",
    "page": "Index",
    "title": "Concepts and Functions",
    "category": "section",
    "text": "defg"
},

]}
