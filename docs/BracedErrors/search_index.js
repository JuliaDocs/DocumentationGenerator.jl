var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#BracedErrors.jl-1",
    "page": "Readme",
    "title": "BracedErrors.jl",
    "category": "section",
    "text": "This package helps to automate the printing of values with errors in brackets.(Image: Build Status)"
},

{
    "location": "#Getting-Started-1",
    "page": "Readme",
    "title": "Getting Started",
    "category": "section",
    "text": "This is a very simple but yet useful package which helps to generate strings with values and their corresponding error followed in brackets, e. g., 23.56(12)(30) stands for 23.56 ± 0.12 ± 0.30.This is common notation in science and this package provides a function to generate these strings. The reading is the following: the error denoted with N digits describes the error in the last N shown digits of the value. E. g., 0.345(56) = 0.345 ± 0.56 or 1234567890(123) = 1234567890 ± 123."
},

{
    "location": "#Rounding-1",
    "page": "Readme",
    "title": "Rounding",
    "category": "section",
    "text": "The errors are always rounded with ceil while the value is rounded with round. This rule is a usual conservative case for rounding errors.By default the errors will have 2 digits in the brackets. See next section for more explanations."
},

{
    "location": "#Accepted-values-1",
    "page": "Readme",
    "title": "Accepted values",
    "category": "section",
    "text": "This function is mainly written for float-like types as Float64."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "There is only one function exported: bracederror. The usage is explained in its docstring."
},

{
    "location": "#Basic-Usage-1",
    "page": "Readme",
    "title": "Basic Usage",
    "category": "section",
    "text": "julia> bracederror(123.456, 0.123)\n\"123.46(13)\"\n\njulia> bracederror(123.456, 0.00123)\n\"123.4560(13)\"\n\njulia> bracederror(123.456, 123456)\n\"123(130000)\""
},

{
    "location": "#Two-errors-1",
    "page": "Readme",
    "title": "Two errors",
    "category": "section",
    "text": "You can provide two or more errors.julia> bracederror(123.456, 123456, 0.0034)\n\"123.4560(1300000000)(34)\"\n\njulia> bracederror(123.456, 0.123456, 0.0034)\n\"123.4560(1300)(34)\"\n\njulia> bracederror(1.23456, 0.1, 0.23, 0.45, 0.56)\n\"1.23(10)(23)(45)(57)\""
},

{
    "location": "#Customize-Output-1",
    "page": "Readme",
    "title": "Customize Output",
    "category": "section",
    "text": "With some keywords you can customize the output.dec::Int = 2: number of decimals to round the errors to\nsuff::NTuple{String} = (\"\", ...): optional suffix after the brackets (Tuple can be omitted when using with only one error)\nbracket::NTuple{Symbol} = (:r, ...): type of the brackets (Tuple can be omitted when using with only one error)bracket can take the values: [:a, :l, :s, :r, :c, :_, :^] (angular, line, square, round, curly, subscript, superscript) which correspond to [\"<>\", \"||\", \"[]\", \"()\", \"{}\", \"_{}\", \"^{}\"]. The last two are useful for LaTeX output. However, note that this is not a common way of printing the errors. In such cases one usually prints the real error like in this example: 01234 pm 0056 pm 012 = 1234(56)(12) = 1234_pm 0056^pm 0012 and not 1234_56^12. But feel free to use it and annotate how to read it (it is the shortest one ;)). It is also possible that you use it for lower and upper error bound, where it makes much more sense and is common notation.$0.1234 +0.056 -0.012 = 0.1234_{56}^{12}$julia> bracederror(123.456, 0.123456, 0.0034; bracket=:s)\n\"123.4560[1300](34)\"\n\njulia> bracederror(123.456, 0.123456, 0.0034; suff2=\"_\\\\inf\")\n\"123.4560(1300)(34)_\\\\inf\"\n\njulia> bracederror(123.456, 0.123456, 0.0034; dec=1)\"123.456(200)(4)\""
},

{
    "location": "#Unexported-Infix-Operator-1",
    "page": "Readme",
    "title": "Unexported  Infix Operator",
    "category": "section",
    "text": "Due to the fact that pm is often used as an operator BracedErrors by default does not export it. It is however defined and can be used by importing it like this:julia> import BracedErrors: ±\njulia>0.234 ± 0.00056\n	\"0.23400(56)\"\njulia>0.234 ± (0.00056, 0.45)\n	\"0.23400(56)(45000)\"\njulia>±(0.234, 0.00056, 0.45; bracket =(:r,:s))\n	\"0.23400(56)[45000]\"By using this infix operator you gain even more convenience in error printing in strings like \"$(val ± err)\" and so on."
},

{
    "location": "#Remarks-1",
    "page": "Readme",
    "title": "Remarks",
    "category": "section",
    "text": "I have written this package during the hackathon at juliacon 2018 and this is the first official package. I have tried to test it on different cases but it is still very early stage. Please use it with care and any help is welcome."
},

{
    "location": "autodocs/#BracedErrors.bracederror-Union{Tuple{N}, Tuple{Real,Tuple{Vararg{Real,N}}}} where N",
    "page": "Docstrings",
    "title": "BracedErrors.bracederror",
    "category": "method",
    "text": "bracederror(μ::Real, σ::NTuple{N,Real}; dec::Int = 2, suff::NTuple{N,String} = ntuple(i->\"\", N), bracket::NTuple{N,Symbol} = ntuple(i->:r, N)) Providing a value μ and a tuple of errors σ it creates a string with the value followed by the errors in brackets.\n\nThis notation is commonly used in sciencific papers and this function provide an automated way of getting the appropriate string.\n\nKeyword Arguments\n\ndec::Int = 2: number of decimals to round the errors to\nsuff::NTuple{AbstractString} = (\"\",): optional suffix after the brackets\nbracket::NTuple{Symbol} = :r: type of the brackets\ndelim = \".\": the delimeter string\n\nbracket can take the values: Symbol[:a, :l, :^, :, :s, :r, :q] which correspond to [\"<\", \"|\", \"^{\", \"{\", \"[\", \"(\", \"{\"].\n\nFor conviniece following method are also added: bracederror(μ::Real, σ::Real; dec::Int = 2, suff::String = \"\", bracket::Symbol = :r, kwargs...) bracederror(μ::Real, σ::Real...; dec::Int = 2, suff = ntuple(i->\"\",length(σ)), bracket = ntuple(i->:r, length(σ)), kwargs...)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [BracedErrors]\nOrder = [:type, :function]"
},

]}
