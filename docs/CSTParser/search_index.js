var documenterSearchIndex = {"docs": [

{
    "location": "#CSTParser.parse_expression-Tuple{ParseState}",
    "page": "Home",
    "title": "CSTParser.parse_expression",
    "category": "method",
    "text": "parse_expression(ps)\n\nParses an expression until closer(ps) == true. Expects to enter the ParseState the token before the the beginning of the expression and ends on the last token.\n\nAcceptable starting tokens are:\n\nA keyword\nAn opening parentheses or brace.\nAn operator.\nAn instance (e.g. identifier, number, etc.)\nAn @.\n\n\n\n\n\n"
},

{
    "location": "#CSTParser.check_reformat-Tuple{}",
    "page": "Home",
    "title": "CSTParser.check_reformat",
    "category": "method",
    "text": "check_reformat()\n\nReads and parses all files in current directory, applys formatting fixes and checks that the output AST remains the same.\n\n\n\n\n\n"
},

{
    "location": "#CSTParser.check_span",
    "page": "Home",
    "title": "CSTParser.check_span",
    "category": "function",
    "text": "check_span(x, neq = [])\n\nRecursively checks whether the span of an expression equals the sum of the span of its components. Returns a vector of failing expressions.\n\n\n\n\n\n"
},

{
    "location": "#CSTParser.compare-Tuple{Any,Any}",
    "page": "Home",
    "title": "CSTParser.compare",
    "category": "method",
    "text": "compare(x,y)\n\nRecursively checks whether two Base.Expr are the same. Returns unequal sub- expressions.\n\n\n\n\n\n"
},

{
    "location": "#CSTParser.contributes_scope-Tuple{Any}",
    "page": "Home",
    "title": "CSTParser.contributes_scope",
    "category": "method",
    "text": "contributes_scope(x)\n\nChecks whether the body of x is included in the toplevel namespace.\n\n\n\n\n\n"
},

{
    "location": "#CSTParser.get_id-Tuple{CSTParser.BinarySyntaxOpCall}",
    "page": "Home",
    "title": "CSTParser.get_id",
    "category": "method",
    "text": "get_id(x)\n\nGet the IDENTIFIER name of a variable, possibly in the presence of  type declaration operators.\n\n\n\n\n\n"
},

{
    "location": "#CSTParser.get_sig-Tuple{CSTParser.EXPR{CSTParser.Struct}}",
    "page": "Home",
    "title": "CSTParser.get_sig",
    "category": "method",
    "text": "get_sig(x)\n\nReturns the full signature of function, macro and datatype definitions.  Should only be called when has_sig(x) == true.\n\n\n\n\n\n"
},

{
    "location": "#CSTParser.get_t-Tuple{Any}",
    "page": "Home",
    "title": "CSTParser.get_t",
    "category": "method",
    "text": "get_t(x)\n\nBasic inference in the presence of type declarations.\n\n\n\n\n\n"
},

{
    "location": "#CSTParser.lex_ws_comment-Tuple{Tokenize.Lexers.Lexer,Char}",
    "page": "Home",
    "title": "CSTParser.lex_ws_comment",
    "category": "method",
    "text": "lex_ws_comment(l::Lexer, c)\n\nHaving hit an initial whitespace/comment/semicolon continues collecting similar Chars until they end. Returns a WS token with an indication of newlines/ semicolons. Indicating a semicolons takes precedence over line breaks as the former is equivalent to the former in most cases.\n\n\n\n\n\n"
},

{
    "location": "#CSTParser.parse",
    "page": "Home",
    "title": "CSTParser.parse",
    "category": "function",
    "text": "parse(str, cont = false)\n\nParses the passed string. If cont is true then will continue parsing until the end of the string returning the resulting expressions in a TOPLEVEL block.\n\n\n\n\n\n"
},

{
    "location": "#CSTParser.parse_array-Tuple{ParseState}",
    "page": "Home",
    "title": "CSTParser.parse_array",
    "category": "method",
    "text": "parse_array(ps)\n\nHaving hit \'[\' return either:\n\nA vect\nA vcat\nA comprehension\nAn array (vcat of hcats)\n\n\n\n\n\n"
},

{
    "location": "#CSTParser.parse_call",
    "page": "Home",
    "title": "CSTParser.parse_call",
    "category": "function",
    "text": "parse_call(ps, ret)\n\nParses a function call. Expects to start before the opening parentheses and is passed the expression declaring the function name, ret.\n\n\n\n\n\n"
},

{
    "location": "#CSTParser.parse_curly-Tuple{ParseState,Any}",
    "page": "Home",
    "title": "CSTParser.parse_curly",
    "category": "method",
    "text": "parse_curly(ps, ret)\n\nParses the juxtaposition of ret with an opening brace. Parses a comma seperated list.\n\n\n\n\n\n"
},

{
    "location": "#CSTParser.parse_generator-Tuple{ParseState,Any}",
    "page": "Home",
    "title": "CSTParser.parse_generator",
    "category": "method",
    "text": "parse_generator(ps)\n\nHaving hit for not at the beginning of an expression return a generator. Comprehensions are parsed as SQUAREs containing a generator.\n\n\n\n\n\n"
},

{
    "location": "#CSTParser.parse_if",
    "page": "Home",
    "title": "CSTParser.parse_if",
    "category": "function",
    "text": "parse_if(ps, ret, nested=false, puncs=[])\n\nParse an if block.\n\n\n\n\n\n"
},

{
    "location": "#CSTParser.parse_macrocall-Tuple{ParseState}",
    "page": "Home",
    "title": "CSTParser.parse_macrocall",
    "category": "method",
    "text": "parse_macrocall(ps)\n\nParses a macro call. Expects to start on the @.\n\n\n\n\n\n"
},

{
    "location": "#CSTParser.parse_paren-Tuple{ParseState}",
    "page": "Home",
    "title": "CSTParser.parse_paren",
    "category": "method",
    "text": "parse_paren(ps, ret)\n\nParses an expression starting with a (.\n\n\n\n\n\n"
},

{
    "location": "#CSTParser.parse_ref-Tuple{ParseState,Any}",
    "page": "Home",
    "title": "CSTParser.parse_ref",
    "category": "method",
    "text": "parse_ref(ps, ret)\n\nHandles cases where an expression - ret - is followed by [. Parses the following bracketed expression and modifies it\'s .head appropriately.\n\n\n\n\n\n"
},

{
    "location": "#CSTParser.parse_string_or_cmd",
    "page": "Home",
    "title": "CSTParser.parse_string_or_cmd",
    "category": "function",
    "text": "parsestringor_cmd(ps)\n\nWhen trying to make an INSTANCE from a string token we must check for interpolating opoerators.\n\n\n\n\n\n"
},

{
    "location": "#CSTParser.parse_tuple-Tuple{ParseState,Any}",
    "page": "Home",
    "title": "CSTParser.parse_tuple",
    "category": "method",
    "text": "parse_tuple(ps, ret)\n\nret is followed by a comma so tries to parse the rest of the tuple.\n\n\n\n\n\n"
},

{
    "location": "#CSTParser.parse_unary-Tuple{ParseState,CSTParser.OPERATOR}",
    "page": "Home",
    "title": "CSTParser.parse_unary",
    "category": "method",
    "text": "parse_unary(ps)\n\nHaving hit a unary operator at the start of an expression return a call.\n\n\n\n\n\n"
},

{
    "location": "#CSTParser.remlineinfo!-Tuple{Any}",
    "page": "Home",
    "title": "CSTParser.remlineinfo!",
    "category": "method",
    "text": "remlineinfo!(x)\n\nRemoves line info expressions. (i.e. Expr(:line, 1))\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [CSTParser]\nOrder = [:type, :function]"
},

]}
