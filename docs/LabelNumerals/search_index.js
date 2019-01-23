var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Numbers as Labels",
    "title": "Numbers as Labels",
    "category": "page",
    "text": ""
},

{
    "location": "#Numbers-as-Labels-1",
    "page": "Numbers as Labels",
    "title": "Numbers as Labels",
    "category": "section",
    "text": "Numeric quantities are used sometimes for pure representational purposes without any true a  numeric significance. For example, the page numbering is carried out using simple arabic  numerals, roman numerals, alphabets. These numbers have additive properties but may not  have any multiplicative significance. Such numbers can also have prefix notations as well.  In some cases, the representation can be in upper case or lower case as well. This package  implements such a numerals. Such numeric schemes are used as page numbers in PDF file  specification. However, the need may be felt else where as well, which prompted the author  to implement it as an independent package. The interface has been also influenced  significantly by the RomanNumerals package."
},

{
    "location": "#Usage-1",
    "page": "Numbers as Labels",
    "title": "Usage",
    "category": "section",
    "text": "LabelNumerals introduces the following new types:LetterNumeral - LabelNumeral{AlphaNumeral} - A, B, ..., Z, AA, BB, ..., ZZ, AAA... (group of 26 characters each)\nArabicNumeral - LabelNumeral{Int} - 1, 2, 3, ...\nLookupNumeral - LabelNumeral{LookupNumeral} - mapped strings to integers like English words \"One\", \"Two\" etc.\nAlphaNumNumeral - LabelNumeral{AlphaNumNumeral} - alphabets representing numbers like BA, BB, BC etc.It also supports RomanNumeral from  RomanNumerals package.They support ability to provide a string prefix. The prefix does not get incremented as numbers are incremented.!!Note: Letter, arabic and roman numerals are used in the PDF file pages as page number labels."
},

{
    "location": "#LabelNumerals.LabelNumeral",
    "page": "Numbers as Labels",
    "title": "LabelNumerals.LabelNumeral",
    "category": "type",
    "text": "    LabelNumeral{T<:Integer}\n\nWrapper around an Integer type that provides the following caabilities:\n\nPrefix - like A-1, A-2 etc...\nLower case or upper case conversions\nshow and print options.\nMathematical operators like +, -, <=, ==, >, isless, max and min\n\nThe wrapped struct should implement the following methods:\n\n1. T(::String)\n2. T(::Int)\n3. Base.hash(::T)\n4. Base.convert{S <: Integer}(::Type{S}, num::T)  <-- to covert to standard numeral types\n\n\n\n\n\n"
},

{
    "location": "#LabelNumerals.LabelNumeral-Union{Tuple{T}, Tuple{T}} where T<:Integer",
    "page": "Numbers as Labels",
    "title": "LabelNumerals.LabelNumeral",
    "category": "method",
    "text": "    LabelNumeral{T <: Integer}(::T; prefix=\"\", caselower=false)\n    LabelNumeral{T <: Integer}(::Type{T}, i::Integer; prefix=\"\", caselower=false)\n    LabelNumeral{T <: Integer}(::Type{T}, s::String; prefix=\"\", caselower=false)\n\nExample:\n\njulia> using RomanNumerals\n\njulia> a = LabelNumeral(rn\"XXIV\"; prefix=\"A-\", caselower=true)\nA-xxiv\n\njulia> a = LabelNumeral(rn\"XXIV\"; prefix=\"A-\")\nA-XXIV\n\nConstructors for LabelNumeral\n\n\n\n\n\n"
},

{
    "location": "#LabelNumerals.findLabels",
    "page": "Numbers as Labels",
    "title": "LabelNumerals.findLabels",
    "category": "function",
    "text": "    findLabels(label::String, ::Vector{DataType} = allNumerals; pfxList=Vector{String}=[\"\"])\n        -> Vector{Tuple{LabelNumeral,Type}}}\n\nGiven allNumerals =[AlphaNumeral, RomanNumeral, Int, LookupNumeral, AlphaNumNumeral]\n\nFinds the LabelNumeral that is most suitably matching to the input String. pfxList provides one or more label prefix values.\n\nThe function returns an array of all the matching LabelNumeral and the Type of numeral that best matches its internal composition. \n\n\n\n\n\n"
},

{
    "location": "#LabelNumeral-1",
    "page": "Numbers as Labels",
    "title": "LabelNumeral",
    "category": "section",
    "text": "LabelNumeral{T <: Integer}\nLabelNumeral{T <: Integer}(t::T; prefix=\"\", caselower=false)\nfindLabels"
},

{
    "location": "#LabelNumerals.AlphaNumeral",
    "page": "Numbers as Labels",
    "title": "LabelNumerals.AlphaNumeral",
    "category": "type",
    "text": "    AlphaNumeral\n\nNumbers represented as alphabets. ex. A, B, C,... from 27 onwards AA, BB, CC etc.\n\n\n\n\n\n"
},

{
    "location": "#LabelNumerals.AlphaNumeral-Tuple{String}",
    "page": "Numbers as Labels",
    "title": "LabelNumerals.AlphaNumeral",
    "category": "method",
    "text": "    AlphaNumeral(str::String)\n    AlphaNumeral(n::Int)\n\nConstructors for AlphaNumeral.\n\n\n\n\n\n"
},

{
    "location": "#LabelNumerals.@an_str",
    "page": "Numbers as Labels",
    "title": "LabelNumerals.@an_str",
    "category": "macro",
    "text": "    @an_str(str)\n\nString decorator for AlphaNumeral definitions.\n\n#Example\n\njulia> an\"AA\"\nLabelNumerals.AlphaNumeral(27, \"AA\")\n\n\n\n\n\n"
},

{
    "location": "#AlphaNumeral-1",
    "page": "Numbers as Labels",
    "title": "AlphaNumeral",
    "category": "section",
    "text": "AlphaNumeral\nAlphaNumeral(::String)\n@an_str"
},

{
    "location": "#LabelNumerals.AlphaNumNumeral",
    "page": "Numbers as Labels",
    "title": "LabelNumerals.AlphaNumNumeral",
    "category": "type",
    "text": "    AlphaNumNumeral\n\nNumbers represented as alphabets as a base26 number where A, B, C represent digits. A = 0, B = 1, ..., Z = 25 etc.\n\n\n\n\n\n"
},

{
    "location": "#LabelNumerals.AlphaNumNumeral-Tuple{String}",
    "page": "Numbers as Labels",
    "title": "LabelNumerals.AlphaNumNumeral",
    "category": "method",
    "text": "    AlphaNumNumeral(str::String)\n    AlphaNumNumeral(n::Int)\n\nConstructors for AlphaNumNumeral.\n\n\n\n\n\n"
},

{
    "location": "#LabelNumerals.@ann_str",
    "page": "Numbers as Labels",
    "title": "LabelNumerals.@ann_str",
    "category": "macro",
    "text": "    @ann_str(str)\n\nString decorator for AlphaNumNumeral definitions.\n\n#Example\n\njulia> ann\"BB\"\nLabelNumerals.AlphaNumNumeral(27, \"BB\")\n\n\n\n\n\n"
},

{
    "location": "#AlphaNumNumeral-1",
    "page": "Numbers as Labels",
    "title": "AlphaNumNumeral",
    "category": "section",
    "text": "AlphaNumNumeral\nAlphaNumNumeral(::String)\n@ann_str"
},

{
    "location": "#LabelNumerals.LookupNumeral",
    "page": "Numbers as Labels",
    "title": "LabelNumerals.LookupNumeral",
    "category": "type",
    "text": "    LookupNumeral\n\nNumbers represented as from a lookup table. No digits or additional system of extension possible. Only numbers available in the lookup table are valid.\n\n\n\n\n\n"
},

{
    "location": "#LabelNumerals.LookupNumeral-Tuple{String}",
    "page": "Numbers as Labels",
    "title": "LabelNumerals.LookupNumeral",
    "category": "method",
    "text": "    LookupNumeral(str::String)\n    LookupNumeral(n::Int)\n\nConstructors for LookupNumeral.\n\n\n\n\n\n"
},

{
    "location": "#LabelNumerals.@ln_str",
    "page": "Numbers as Labels",
    "title": "LabelNumerals.@ln_str",
    "category": "macro",
    "text": "    @ln_str(str)\n\nString decorator for LookupNumeral definitions.\n\n#Example\n\njulia> ln\"Three\"\nLabelNumerals.LookupNumeral(3, \"Three\")\n\n\n\n\n\n"
},

{
    "location": "#LookupNumeral-1",
    "page": "Numbers as Labels",
    "title": "LookupNumeral",
    "category": "section",
    "text": "LookupNumeral\nLookupNumeral(::String)\n@ln_str"
},

{
    "location": "#External-Numeral-Types-1",
    "page": "Numbers as Labels",
    "title": "External Numeral Types",
    "category": "section",
    "text": ""
},

{
    "location": "#ArabicNumeral-1",
    "page": "Numbers as Labels",
    "title": "ArabicNumeral",
    "category": "section",
    "text": "Represented as Int types."
},

{
    "location": "#RomanNumeral-1",
    "page": "Numbers as Labels",
    "title": "RomanNumeral",
    "category": "section",
    "text": "Represented as RomanNumeral from the RomanNumerals package."
},

]}
