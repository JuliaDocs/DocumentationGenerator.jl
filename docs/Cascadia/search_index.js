var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Cascadia-1",
    "page": "Readme",
    "title": "Cascadia",
    "category": "section",
    "text": "(Image: Build Status)"
},

{
    "location": "#A-CSS-Selector-library-in-Julia.-1",
    "page": "Readme",
    "title": "A CSS Selector library in Julia.",
    "category": "section",
    "text": "Inspired by, and mostly a direct translation of, the Cascadia CSS Selector library, written in Go, by @andybalhom.This package depends on the Gumbo.jl package by @porterjamesj, which is a Julia wrapper around Google\'s Gumbo HTML parser library"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "Usage is simple. Use Gumbo to parse an HTML string into a document, create a Selector from a string, and then use eachmatch to get the nodes in the document that match the selector. Alternatively, use sel\"<selector string>\" to do the same thing as Selector. The eachmatch function returns an array of elements which match the selector. If no match is found, a zero element array is returned. For unique matches, the array contains one element. Thus, check the length of the array to test whether a selector matches.using Cascadia\nusing Gumbo\n\nn=parsehtml(\"<p id=\\\"foo\\\"><p id=\\\"bar\\\">\")\ns=Selector(\"#foo\")\nsm = sel\"#foo\"\neachmatch(s, n.root)\n# 1-element Array{Gumbo.HTMLNode,1}:\n#  Gumbo.HTMLElement{:p}\n\neachmatch(sm, n.root)\n# 1-element Array{Gumbo.HTMLNode,1}:\n#  Gumbo.HTMLElement{:p}Note: The top level matching function name has changed from matchall in v0.6 to eachmatch in v0.7 and higher to reflect the change in Julia base."
},

{
    "location": "#Webscraping-Example-1",
    "page": "Readme",
    "title": "Webscraping Example",
    "category": "section",
    "text": "The primary use case for this library is to enable webscraping – the automatic extraction of information from html pages. As an example, consider the following code, which returns a list of questions that have been tagged with julia-lang on StackOverflow.using Cascadia\nusing Gumbo\nusing Requests\n\nr = get(\"http://stackoverflow.com/questions/tagged/julia-lang\")\nh = parsehtml(convert(String, r.data))\n\nqs = eachmatch(Selector(\".question-summary\"),h.root)\n\nprintln(\"StackOverflow Julia Questions (votes  answered?  url)\")\n\nfor q in qs\n    votes = nodeText(eachmatch(Selector(\".votes .vote-count-post \"), q)[1])\n    answered = length(eachmatch(Selector(\".status.answered\"), q)) > 0\n    href = eachmatch(Selector(\".question-hyperlink\"), q)[1].attributes[\"href\"]\n    println(\"$votes  $answered  http://stackoverflow.com$href\")\nendThis code produces the following output:StackOverflow Julia Questions (votes  answered?  url)\n\n0  false  http://stackoverflow.com/questions/48067945/making-subset-of-julia-dataframe-with-values-greater-than-x\n1  true  http://stackoverflow.com/questions/48060390/initialize-fields-of-user-defined-types-in-arbitrary-order\n1  true  http://stackoverflow.com/questions/48059544/keyword-argument-aliases\n5  false  http://stackoverflow.com/questions/48055583/change-julia-promt-to-include-evalutation-numbers\n1  false  http://stackoverflow.com/questions/48053516/applying-replacement-rules-to-julia-expressions\n1  false  http://stackoverflow.com/questions/48045608/whats-wrong-with-my-euclidean-distance-calculation-julia\n0  false  http://stackoverflow.com/questions/48044567/loading-a-package-in-each-julia-lang-session-avoid-retyping-using-xxx-every-t\n2  false  http://stackoverflow.com/questions/48037732/how-to-save-julia-for-loop-returns-in-an-array-or-dataframe\n3  true  http://stackoverflow.com/questions/48036171/why-does-array-without-produce-so-much-memory-allocation\n1  true  http://stackoverflow.com/questions/48031603/julia-string-interpolation-of-array-element\n\n...\n\n3  false  http://stackoverflow.com/questions/47840667/is-there-a-way-to-tell-which-kernel-a-jupyter-notebook-was-built-with\n0  false  http://stackoverflow.com/questions/47826378/can-julia-capture-the-results-shell-command\n0  false  http://stackoverflow.com/questions/47823695/julia-analog-to-ipython-not-a-notebook-e-g-ijulia\n1  false  http://stackoverflow.com/questions/47822388/julia-comprehension-can-one-index-reference-another\n1  false  http://stackoverflow.com/questions/47822190/display-interaction-with-julia-list-comprehension\n1  false  http://stackoverflow.com/questions/47819748/in-julia-how-do-i-run-an-external-program-and-process-its-output-line-by-line\n2  false  http://stackoverflow.com/questions/47818035/julia-three-dimensional-arrays-performance\n0  false  http://stackoverflow.com/questions/47800014/saving-settings-changes-in-vscode\n0  true  http://stackoverflow.com/questions/47784339/can-broadcast-be-applied-to-subarrays-slices-of-array-in-julia\n2  false  http://stackoverflow.com/questions/47762777/how-to-check-if-a-variable-is-scalar-in-julia\n1  false  http://stackoverflow.com/questions/47762625/tensorflow-jl-output-shape-of-dynamic-rnn\nNote that this returns the elements on the first page of the query results. Getting the values from subsequent pages is left as an exercise for the reader."
},

{
    "location": "#Current-Status-1",
    "page": "Readme",
    "title": "Current Status",
    "category": "section",
    "text": "Most selector types are supported, but a few are still not fully functional. Examples of selectors that currently work, and some that don\'t  yet, are listed below.Selector Status\naddress Works\n* Works\n#foo Works\nli#t1 Works\n*#t4 Works\n.t1 Works\np.t1 Works\ndiv.teST Works\n.t1.fail Works\np.t1.t2 Works\np[title] Works\naddress[title=\"foo\"] Works\n[      title        ~=       foo    ] Works\n[title~=\"hello world\"] Works\n`[lang =\"en\"]`\n[title^=\"foo\"] Works\n[title$=\"bar\"] Works\n[title*=\"bar\"] Works\n.t1:not(.t2) Works\ndiv:not(.t1) Works\nli:nth-child(odd) Doesn\'t Work\nli:nth-child(even) Doesn\'t Work\nli:nth-child(-n+2) Doesn\'t Work\nli:nth-child(3n+1) Doesn\'t Work\nli:nth-last-child(odd) Doesn\'t Work\nli:nth-last-child(even) Doesn\'t Work\nli:nth-last-child(-n+2) Doesn\'t Work\nli:nth-last-child(3n+1) Doesn\'t Work\nspan:first-child Doesn\'t Work\nspan:last-child Doesn\'t Work\np:nth-of-type(2) Doesn\'t Work\np:nth-last-of-type(2) Doesn\'t Work\np:last-of-type Doesn\'t Work\np:first-of-type Doesn\'t Work\np:only-child Doesn\'t Work\np:only-of-type Doesn\'t Work\n:empty Works\ndiv p Works\ndiv table p Works\ndiv > p Works\np ~ p Works\np + p Works\nli, p Works\np +/*This is a comment*/ p Works\np:contains(\"that wraps\") Works\np:containsOwn(\"that wraps\") Works\n:containsOwn(\"inner\") Works\np:containsOwn(\"block\") Works\ndiv:has(#p1) Works\ndiv:has(:containsOwn(\"2\")) Works\nbody :has(:containsOwn(\"2\")) Doesn\'t Work\nbody :haschild(:containsOwn(\"2\")) Works\np:matches([\\d]) Works\np:matches([a-z]) Works\np:matches([a-zA-Z]) Works\np:matches([^\\d]) Works\n`p:matches(^(0 a))`\np:matches(^\\d+$) Works\np:not(:matches(^\\d+$)) Works\ndiv :matchesOwn(^\\d+$) Works\n[href#=(fina)]:not([href#=(\\/\\/[^\\/]+untrusted)]) Doesn\'t Work\n[href#=(^https:\\/\\/[^\\/]*\\/?news)] Doesn\'t Work\n:input Works"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Cascadia]\nOrder = [:type, :function]"
},

]}
