var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "(Image: Build Status)(Image: PEG)"
},

{
    "location": "#PEG-1",
    "page": "Readme",
    "title": "PEG",
    "category": "section",
    "text": "Define a Parsing Expression Grammar via a macro and abuse of Julia syntax.Rules: @rule name = expression\nChoice: infix ,\nSequence: infix &\nPositive lookahead: prefix +\nNegative lookahead: prefix -\nOption (zero or one time): postfix [:?] (≡ [0:1])\n(note that [?] won\'t work in Julia >= 1.0 per JuliaLang/julia#22712)\nZero or more times: postfix [*] (≡ [0:end])\nOne or more times: postfix [+] (≡ [1:end])\nExactly m times: postfix [m] (≡ [m:m]) (where m is an integer)\nBetween m and n times inclusive: postfix [m:n]\nAt most n times: postfix [0:n]\nAt least m times: postfix [m:end]\nTerminals: r\"regex\", \"string\"\nExtra regex flags: p is for punctuation, and eats whitespace (\\s*) after the match; w is for word, and implies p, but also makes sure match boundaries are word boundaries (\\b); h modifies p and w to eat only horizontal whitespace (\\h). Values passed to semantics functions exclude eaten whitespace.\nSemantics: expression |> unary_function (like ParserCombinator)\nor expression > nary_function to interpolate args.\nReturning the special singleton value PEG.Failure() from a semantics function causes the parsing expression it\'s attached to to fail (return nothing instead of a tuple). Returning nothing from a semantics function is not special; it just makes the first part of the tuple nothing. See the parsing function signature below.Put another way:using PEG\n@rule grammar = \"using PEG\\n\" & rule[*]\n@rule rule = r\"@rule\"p & nonterminal & r\"=\"p & choice\n@rule choice = seq & (r\",\"p & seq)[*]\n@rule seq = item & (r\"&\"p & item)[*] & (r\"\\|?>\"p & julia_function)[:?]\n@rule item = lookahead , counted\n@rule lookahead = r\"\\(\"p & (r\"[+-]\"p) & seq & r\"\\)\"p\n@rule counted = single & (count)[:?]\n@rule count = range , r\"\\[\"p & (\":?\" , r\"[\\*\\+]\"p) & r\"]\"p\n@rule range = r\"\\[\"p & integer & (r\":\"p & (integer , r\"end\"w))[:?] & r\"]\"p\n@rule integer = r\"\\d+\"w\n@rule single = parens , terminal , nonterminal\n@rule parens = r\"\\(\"p & choice & r\"\\)\"p\n@rule nonterminal = r\"\\pL\\w+\"w\n@rule terminal = regex , string & r\"\\s*\"\n@rule regex = r\"\\br\" & string & r\"[himpswx]*\\s*\"\n@rule string = r\"\\\"(\\\\.|[^\\\"])*\\\"\"\n@rule julia_function = # left as an exercise ;)Each rule defines a parsing function with the following signature:nonterminal(input::T, cache=PEG.Cache()) where T <: AbstractString\n  ::Union{Nothing,Tuple{Any,SubString}}The Any part of the return value is the abstract syntax tree, while the SubString is the remaining input after the parsed portion. If parsing fails, nothing is returned.While you can use rules defined in this way directly, it might be more convenient to use the functions parse_next(rule, input; whole=false) or parse_whole(rule, input). See their documentation for more information.Call PEG.setdebug!() to have debugging information printed during parsing. Call PEG.setdebug!(false) to turn it off again."
},

{
    "location": "#Versus-[ParserCombinator](https://github.com/andrewcooke/ParserCombinator.jl)-1",
    "page": "Readme",
    "title": "Versus ParserCombinator",
    "category": "section",
    "text": "PEG...is simpler/less featureful. PEG does not:\nbacktrack, except within regexen and to try the next choice (,). That is, repetition [] is always greedy and possessive (to use PCRE terminology).\nhave Empty(x)/@e_str. Use semantics functions to discard values.\nhave Dot(). Use r\".\".\nhave Eos(). Use parse_whole.\nparse streams. Use open(x->parse_whole(rule, read(x, String)), args...).\ninclude parsers for two random languages.\nhas nicer syntax:\nOperator precedence makes sense. Tight to loose, the operators are: postfix [] (whatever is in the brackets), prefix +/-, infix &, |>/>, ,.\nPC\'s Plus(x) and Star(x) become actual plusses and stars: x[+] and x[*]. And PEG has x[:?] too.\nEqual/@e_str and Pattern/@p_str are unneccessary, just use bare strings and regexen (with extra flags).\ndoes not require mutual recursion loops to be broken with Delayed().\ndoes not have special types for matchers/rules, and does not require a trampoline to \"interpret\" them. They\'re just plain functions you can call directly."
},

{
    "location": "#Migrating-from-PEG-0.2-to-PEG-1.0-1",
    "page": "Readme",
    "title": "Migrating from PEG 0.2 to PEG 1.0",
    "category": "section",
    "text": "PEG 0.2 works with julia 0.6, while PEG 1.0 works with julia 1.0 (and julia 0.7). Julia 1.0 has a number of differences from julia 0.7 that required some changes to PEG, which will in turn require some minor syntactic changes to any grammars written with PEG 0.2 if you want to use them with PEG 1.0/julia 1.0.change >> to |>\nchange >>> to >\nchange | to ,\nNote that this also makes it so you don\'t have to put parens around your lambda expressions.\nchange [?] to [:?]There are some other changes outside the grammar syntax as well:If you were doing this to parse a stream as previously suggested:\nopen(x->parse_whole(rule, readstring(x)), args...)\nnow you should do this instead:\nopen(x->parse_whole(rule, read(x, String)), args...)\nchange Void to Nothing\nchange ParseError to Meta.ParseErrorAlso note that PEG.Failure is now an immutable type (struct). That shouldn\'t really matter because it has no fields, but it is still technically a visible change; isbits(PEG.Failure()) is now true where before it was false."
},

{
    "location": "autodocs/#PEG.parse_next-Union{Tuple{T}, Tuple{Function,T}} where T<:AbstractString",
    "page": "Docstrings",
    "title": "PEG.parse_next",
    "category": "method",
    "text": "parse_next(rule, input; whole=false)\n\nParse a prefix of the input string as one instance of the given rule. This differs from just calling the rule itself on the input in a few important ways:\n\nWhen parsing succeeds, parse_next returns only the parsed value, while rule returns a Tuple of the parsed value and the remaining unparsed input.\nWhen parsing fails, parse_next throws an exception, with information on what failed to match starting at the latest point in the string that any parsing expression matched up to. rule just returns nothing.\nWhen whole=true, parsing only succeeds if the whole input is consumed, i.e. the second value in the tuple that rule returns is \"\".\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PEG.parse_whole-Tuple{Any,Any}",
    "page": "Docstrings",
    "title": "PEG.parse_whole",
    "category": "method",
    "text": "parse_whole(rule, input) = parse_next(rule, input; whole=true)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PEG.squash_ast-Tuple{Any}",
    "page": "Docstrings",
    "title": "PEG.squash_ast",
    "category": "method",
    "text": "squash_ast(x)\n\nGiven an ast returned by a grammar with no semantics, return a simplified version, such that there are no nothings, and no Any[]s with exactly zero or one element.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PEG.Cache",
    "page": "Docstrings",
    "title": "PEG.Cache",
    "category": "type",
    "text": "A Cache maps from (rule name or gensym, input string length remaining) to either nothing or (parsed value, remaining input substring) (which is what rule functions return).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PEG.Failure",
    "page": "Docstrings",
    "title": "PEG.Failure",
    "category": "type",
    "text": "Singleton value that semantics functions may return to cause the parsing expression they were called from to fail, e.g. return Failure().\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PEG.flatten_op-Tuple{Any,Symbol}",
    "page": "Docstrings",
    "title": "PEG.flatten_op",
    "category": "method",
    "text": "Given e.g. x=:(((a op b) op c) op d), return [a,b,c,d].\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PEG.remove_re_flag-Union{Tuple{T}, Tuple{T,Char}} where T<:AbstractString",
    "page": "Docstrings",
    "title": "PEG.remove_re_flag",
    "category": "method",
    "text": "remove_re_flag(flags, flag)\n\nReturn (a copy of) regex flags with flag removed, and a boolean indicating whether the flag was there in the first place.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#PEG.setdebug!",
    "page": "Docstrings",
    "title": "PEG.setdebug!",
    "category": "function",
    "text": "setdebug!(val=true)\n\nEnable or disable printing of debugging information.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [PEG]\nOrder = [:type, :function]"
},

]}
