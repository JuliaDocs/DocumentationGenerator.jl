var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Mustache-1",
    "page": "Readme",
    "title": "Mustache",
    "category": "section",
    "text": "Linux: (Image: Build Status) &nbsp; Windows: (Image: Build Status)Mustache is... a logic-less template syntax. It can be used for HTML,\nconfig files, source code - anything. It works by expanding tags in a\ntemplate using values provided in a hash or object.This package ports over the mustache.js implementation for use in Julia. All credit should go there. All bugs are my own."
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "Following the main documentation for Mustache.js we have a \"typical Mustache template\" defined by:using Mustache\n\ntpl = mt\"\"\"\nHello {{name}}\nYou have just won {{value}} dollars!\n{{#in_ca}}\nWell, {{taxed_value}} dollars, after taxes.\n{{/in_ca}}\n\"\"\"The values with braces (mustaches on their side) are looked up in a view, such as a dictionary or module. For example,d = Dict(\n\"name\" => \"Chris\",\n\"value\" => 10000,\n\"taxed_value\" => 10000 - (10000 * 0.4),\n\"in_ca\" => true)\n\nrender(tpl, d)YieldingHello Chris\nYou have just won 10000 dollars!\nWell, 6000.0 dollars, after taxes.The render function pieces things together. Like print, the first argument is for an optional IO instance. In the above example, where one is not provided, a string is returned.The second argument is a either a string or a mustache template. As seen, templates can be made through the mt non-standard string literal. The advantage of using mt is that the template will be processed at compile time so its reuse will be faster.The templates use tags comprised of matching mustaches ({}), either two or three, to indicate a value to be substituted for.The third argument is for a view to provide values to substitute into the template. The above example used a dictionary. A Module may also be used, such as Main:name, value, taxed_value, in_ca = \"Christine\", 10000, 10000 - (10000 * 0.4), false\nrender(tpl, Main) |> printWhich yields:Hello Christine\nYou have just won 10000 dollars!Further, keyword arguments can be used when the variables in the templates are symbols:goes_together = mt\"{{{:x}}} and {{{:y}}}.\"\nrender(goes_together, x=\"Salt\", y=\"pepper\")\nrender(goes_together, x=\"Bread\", y=\"butter\")Similarly, a named tuple may be used as a view.  As well, one can use Composite Kinds. This may make writing show methods easier:using Distributions\ntpl = \"Beta distribution with alpha={{α}}, beta={{β}}\"\nrender(tpl, Beta(1, 2))gives\"Beta distribution with alpha=1.0, beta=2.0\""
},

{
    "location": "#Variables-1",
    "page": "Readme",
    "title": "Variables",
    "category": "section",
    "text": "Tags representing variables have the form {{varname}}, {{:symbol}}, or their triple-braced versions {{{varname}}} or {{{:symbol}}}.  The triple brace prevents HTML substitution for entities such as <. The following are escaped when only double braces are used: \"&\", \"<\", \">\", \"\'\", \"\\\", and \"/\".If the variable refers to a function, the value will be the result of calling the function with no arguments passed in."
},

{
    "location": "#Sections-1",
    "page": "Readme",
    "title": "Sections",
    "category": "section",
    "text": "In the main example, the template included:{{#in_ca}}\nWell, {{taxed_value}} dollars, after taxes.\n{{/in_ca}}Tags beginning with #varname and closed with /varname create sections. The part between them is used only if the variable is defined.If the section name refers to a function, that function will be passed the unevaluated string within the section, as expected by the Mustache specification. (If the tag \"|\" is used, the section value will be rendered first, an enhancement to the specification.)"
},

{
    "location": "#Inverted-1",
    "page": "Readme",
    "title": "Inverted",
    "category": "section",
    "text": "Related, if the tag begins with ^varname and ends with /varname the text between these tags is included only if the variable is not defined or is falsy."
},

{
    "location": "#Iteration-1",
    "page": "Readme",
    "title": "Iteration",
    "category": "section",
    "text": "If the section variable, {{#VARNAME}}, binds to an iterable collection, then the text in the section is repeated for each item in the collection with the view used for the context of the template given by the item.This is useful for collections of named objects, such as DataFrames (where the collection is comprised of rows) or arrays of dictionaries. For Tables.jl objects the rows are iterated over.For data frames, the variable names are specified as symbols or strings. Here is a template for making a web page:tpl = mt\"\"\"\n<html>\n<head>\n<title>{{:TITLE}}</title>\n</head>\n<body>\n<table>\n<tr><th>name</th><th>summary</th></tr>\n{{#:D}}\n<tr><td>{{:names}}</td><td>{{:summs}}</td></tr>\n{{/:D}}\n</body>\n</html>\n\"\"\"This can be used to generate a web page for whos-like values:_names = String[]\n_summaries = String[]\nfor s in sort(map(string, names(Main)))\n    v = Symbol(s)\n    if isdefined(Main,v)\n        push!(_names, s)\n        push!(_summaries, summary(eval(v)))\n    end\nend\n\nusing DataFrames\nd = DataFrame(names=_names, summs=_summaries)\n\nout = render(tpl, TITLE=\"A quick table\", D=d)\nprint(out)This can be compared to using an array of Dicts, convenient if you have data by the row:A = [Dict(\"a\" => \"eh\", \"b\" => \"bee\"),\n     Dict(\"a\" => \"ah\", \"b\" => \"buh\")]\ntpl = mt\"{{#:A}}Pronounce a as {{a}} and b as {{b}}. {{/:A}}\"\nrender(tpl, A=A) |> printyieldingPronounce a as eh and b as bee. Pronounce a as ah and b as buh.The same approach can be made to make a LaTeX table from a data frame:\nfunction df_to_table(df, label=\"label\", caption=\"caption\")\n	fmt = repeat(\"c\", length(df))\n    row = join([\"{{$x}}\" for x in map(string, names(df))], \" & \")\n\ntpl=\"\"\"\n\\\\begin{table}\n  \\\\centering\n  \\\\begin{tabular}{$fmt}\n{{#:DF}}    $row\\\\\\\\\n{{/:DF}}  \\\\end{tabular}\n  \\\\caption{$caption}\n  \\\\label{tab:$label}\n\\\\end{table}\n\"\"\"\n\nrender(tpl, DF=df)\nend(A string is used above – and not a mt macro – so that string interpolation can happen.)"
},

{
    "location": "#Iterating-over-vectors-1",
    "page": "Readme",
    "title": "Iterating over vectors",
    "category": "section",
    "text": "Though it isn\'t part of the Mustache specification, when iterating over an unnamed vector, Mustache.jl uses {{.}} to refer to the item:tpl = \"{{#:vec}}{{.}} {{/:vec}}\"\nrender(tpl, vec = [\"A1\", \"B2\", \"C3\"])  # \"A1 B2 C3 \"Note the extra space after C3.There is also limited support for indexing with the iteration of a vector that allows one to treat the last element differently. The syntax .[ind] refers to the value vec[ind]. (There is no support for the usual arithmetic on indices.)To print commas one can use this pattern:tpl = \"{{#:vec}}{{.}}{{^.[end]}}, {{/.[end]}}{{/:vec}}\"\nrender(tpl, vec = [\"A1\", \"B2\", \"C3\"])  # \"A1, B2, C3\"To put the first value in bold, but no others, say:tpl = \"\"\"\n{{#:vec}}\n{{#.[1]}}<bold>{{.}}</bold>{{/.[1]}}\n{{^.[1]}}{{.}}{{/.[1]}}\n{{/:vec}}\n\"\"\"\nrender(tpl, vec = [\"A1\", \"B2\", \"C3\"])  # basically \"<bold>A1</bold>B2 C3\"This was inspired by this question, but the syntax chosen was more Julian. This syntax – as implemented for now – does not allow for iteration. That is constructs like {{#.[1]}} don\'t introduce iteration, but only offer a conditional check."
},

{
    "location": "#Partials-1",
    "page": "Readme",
    "title": "Partials",
    "category": "section",
    "text": "Partials are used to include partial templates into a template.Partials begin with a greater than sign, like {{> box.tpl }}. In this example, the file box.tpl is opened and inserted into the template, then populated. A full path may be specified.They also inherit the calling context.In this way you may want to think of partials as includes, imports, template expansion, nested templates, or subtemplates, even though those aren\'t literally the case here.The partial specified by {{< box.tpl }} is not parsed, rather included as is into the file. This can be faster."
},

{
    "location": "#Alternatives-1",
    "page": "Readme",
    "title": "Alternatives",
    "category": "section",
    "text": "Julia provides some alternatives to this package which are better suited for many jobs:For simple substitution inside a string there is string interpolation.\nFor piecing together pieces of text either the string function or string concatenation (the * operator) are useful. (Also an IOBuffer is useful for larger tasks of this type.)\nFor formatting numbers and text, the Formatting.jl package, the Format package, and the StringLiterals package are available.\nFlax may be of interest for certain tasks where performance is important."
},

{
    "location": "#Differences-from-Mustache.js-1",
    "page": "Readme",
    "title": "Differences from Mustache.js",
    "category": "section",
    "text": "This project deviates from that of Mustache.js in a few significant ways:Julian structures are used, not JavaScript objects. As illustrated, one can use Dicts, Modules, DataFrames, functions, ...\nIn the Mustache spec, when lamdas are used as section names, thefunction is passed the unvevaluated section:template = \"<{{#lambda}}{{x}}{{/lambda}}>\"\ndata = Dict(\"x\" => \"Error!\", \"lambda\" => (txt) ->  txt == \"{{x}}\" ? \"yes\" : \"no\")\nMustache.render(template, data) ## \"<yes>\", as txt == \"{{x}}\"The tag \"|\" is similar to the section tag \"#\", but will receive the evaluated section:template = \"<{{|lambda}}{{x}}{{/lambda}}>\"\ndata = Dict(\"x\" => \"Error!\", \"lambda\" => (txt) ->  txt == \"{{x}}\" ? \"yes\" : \"no\")\nMustache.render(template, data) ## \"<no>\", as \"Error!\" != \"{{x}}\""
},

{
    "location": "autodocs/#Mustache.render-Tuple{IO,Mustache.MustacheTokens,Any}",
    "page": "Docstrings",
    "title": "Mustache.render",
    "category": "method",
    "text": "render([io], tokens, view)\n\nRender a set of tokens with a view, using optional io object to print or store.\n\nArguments\n\nio::IO: Optional IO object.\ntokens: Either Mustache tokens, or a string to parse into tokens\nview: A view provides a context to look up unresolved symbols demarcated by mustache braces. A view may be specified by a dictionary, a module, a composite type, a vector, a named tuple, a data frame, a Tables object, or keyword arguments.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Mustache.render_from_file-Tuple{Any,Any}",
    "page": "Docstrings",
    "title": "Mustache.render_from_file",
    "category": "method",
    "text": "Renders a template from filepath and view. If it has seen the file before then it finds the compiled MustacheTokens in TEMPLATES rather than calling parse a second time.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Mustache]\nOrder = [:type, :function]"
},

]}
