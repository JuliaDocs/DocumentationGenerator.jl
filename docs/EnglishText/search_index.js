var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "EnglishText.jl Documentation",
    "title": "EnglishText.jl Documentation",
    "category": "page",
    "text": ""
},

{
    "location": "#EnglishText.jl-Documentation-1",
    "page": "EnglishText.jl Documentation",
    "title": "EnglishText.jl Documentation",
    "category": "section",
    "text": "Many applications display information to readers in prose format instead of tabular format. It is often important to generate human-readable, grammatically correct prose. However, taking care of grammatical special cases is tedious.EnglishText.jl solves this problem by providing a variety of convenient utility functions. It uses established algorithms where available. The precise methods used are documented in the modules themselves.EnglishText.jl uses a modular approach. Applications not requiring all the exports may use a submodule, such as EnglishText.ItemLists, instead of the entire package.EnglishText.jl aims toprovide a convenient, universally useful approach to abstracting away grammatical special cases\nbe self-documenting where possible, but well-documented nevertheless\nnot have unnecessary performance bottlenecksNote that this is not a natural language processing package and does not aim to include an English parser."
},

{
    "location": "#EnglishText.Articulate.indefinite",
    "page": "EnglishText.jl Documentation",
    "title": "EnglishText.Articulate.indefinite",
    "category": "function",
    "text": "indefinite(word)\n\nDetermine the correct indefinite article, from “a” or “an”, for the given noun.\n\njulia> using EnglishText\n\njulia> indefinite(\"hour\")\n\"an\"\n\njulia> indefinite(\"hand\")\n\"a\"\n\n\n\n\n\n"
},

{
    "location": "#Indefinite-Article-Selection-1",
    "page": "EnglishText.jl Documentation",
    "title": "Indefinite Article Selection",
    "category": "section",
    "text": "indefinite"
},

{
    "location": "#EnglishText.Numeric.english",
    "page": "EnglishText.jl Documentation",
    "title": "EnglishText.Numeric.english",
    "category": "function",
    "text": "english(n::Integer)\n\nConvert n to English, given that 0 le n  10^66.\n\njulia> using EnglishText\n\njulia> english(16)\n\"sixteen\"\n\n\n\n\n\n"
},

{
    "location": "#EnglishText.Numeric.unenglish",
    "page": "EnglishText.jl Documentation",
    "title": "EnglishText.Numeric.unenglish",
    "category": "function",
    "text": "unenglish(T <: Integer, data::AbstractString) → T\n\nConvert data to an integral type. This function has the guarantee that unenglish(Int, english(x)) == x, modulo any type differences. It is not guaranteed to work well or throw exceptions on other inputs.\n\njulia> using EnglishText\n\njulia> unenglish(Int, \"sixteen\")\n16\n\n\n\n\n\n"
},

{
    "location": "#Word-Representation-of-Numbers-1",
    "page": "EnglishText.jl Documentation",
    "title": "Word Representation of Numbers",
    "category": "section",
    "text": "english\nunenglish"
},

{
    "location": "#EnglishText.Quantities.ItemQuantity",
    "page": "EnglishText.jl Documentation",
    "title": "EnglishText.Quantities.ItemQuantity",
    "category": "type",
    "text": "ItemQuantity(n::Integer, item::AbstractString)\n\nRepresents a quantity of n occurrences of item. Although this is not a collection, for ease of use, it implements some of the standard collection methods length (for number of items) and isempty (for whether there are no items).\n\njulia> using EnglishText\n\njulia> ItemQuantity(2, \"apple\")\n2 apples\n\njulia> ItemQuantity(1, \"standard canine\")\n1 standard canine\n\n\n\n\n\n"
},

{
    "location": "#Base.isempty-Tuple{ItemQuantity}",
    "page": "EnglishText.jl Documentation",
    "title": "Base.isempty",
    "category": "method",
    "text": "isempty(quantity::ItemQuantity)\n\nReturn true if the given ItemQuantity represents no items.\n\njulia> using EnglishText\n\njulia> isempty(ItemQuantity(0, \"orange\"))\ntrue\n\njulia> isempty(ItemQuantity(4, \"person\"))\nfalse\n\n\n\n\n\n"
},

{
    "location": "#Base.length-Tuple{ItemQuantity}",
    "page": "EnglishText.jl Documentation",
    "title": "Base.length",
    "category": "method",
    "text": "length(quantity::ItemQuantity)\n\nReturn the number of items represented by this quantity.\n\njulia> using EnglishText\n\njulia> length(ItemQuantity(7, \"desk\"))\n7\n\n\n\n\n\n"
},

{
    "location": "#EnglishText.Pluralize.pluralize",
    "page": "EnglishText.jl Documentation",
    "title": "EnglishText.Pluralize.pluralize",
    "category": "function",
    "text": "pluralize(word; classical=true)\n\nPluralize a singular noun word (given in canonical capitalization) using heuristics and lists of exceptions. If word is not a singular noun, this function may give strange results.\n\nIf classical is set to true, then the classical (i.e. inherited from Latin or Greek) pluralization is chosen instead of the anglicized pluralization. As an example, the classical plural of \"vertex\" is \"vertices\", but the anglicized plural is \"vertexes\". By default, the classical pluralization is used.\n\njulia> using EnglishText\n\njulia> pluralize(\"fox\")\n\"foxes\"\n\njulia> pluralize(\"radius\")\n\"radii\"\n\njulia> pluralize(\"radius\", classical=false)\n\"radiuses\"\n\n\n\n\n\n"
},

{
    "location": "#EnglishText.Pluralize.singularize",
    "page": "EnglishText.jl Documentation",
    "title": "EnglishText.Pluralize.singularize",
    "category": "function",
    "text": "singularize(word)\n\nUnpluralize a plural noun (given in canonical capitalization) using heuristics and lists of exceptions. If the given word is not a plural noun, the result may be unpredictable.\n\njulia> using EnglishText\n\njulia> singularize(\"foxes\")\n\"fox\"\n\njulia> singularize(\"data\")\n\"datum\"\n\n\n\n\n\n"
},

{
    "location": "#Quantities-and-Pluralization-1",
    "page": "EnglishText.jl Documentation",
    "title": "Quantities and Pluralization",
    "category": "section",
    "text": "ItemQuantity\nisempty(::ItemQuantity)\nlength(::ItemQuantity)\npluralize\nsingularize"
},

{
    "location": "#EnglishText.ItemLists.ItemList",
    "page": "EnglishText.jl Documentation",
    "title": "EnglishText.ItemLists.ItemList",
    "category": "type",
    "text": "ItemList(objects, connective=Sum())\n\nA list of items or adjectives, which supports printing in standard English format. The first argument objects should be an iterator over some number of strings or other objects, including EnglishText.ItemQuantity objects.\n\nThe second argument connective should be one of:\n\nSum(), which represents a list of nouns in a collection of things\nDisjunction(), which represents a list of traits (typically adjectives or adverbs, but possibly also verbs or nouns) for which at least one should be satisfied\nConjunction(), which represents a list of traits that should all be satisfied\n\nIf omitted, connective is set to Sum().\n\njulia> using EnglishText\n\njulia> ItemList([\"apples\", \"oranges\"])\napples and oranges\n\njulia> ItemList([ItemQuantity(2, \"pencil\"), ItemQuantity(1, \"pen\")])\n2 pencils and 1 pen\n\njulia> ItemList([\"animal\", \"plant\"], Disjunction())\nanimal or plant\n\njulia> ItemList([\"red\", \"blue\", \"white\"], Conjunction())\nred, blue, and white\n\njulia> \"Help us use and test this software.\"\n\"Help us use and test this software.\"\n\n\n\n\n\n"
},

{
    "location": "#Lists-of-Nouns-and-Adjectives-1",
    "page": "EnglishText.jl Documentation",
    "title": "Lists of Nouns and Adjectives",
    "category": "section",
    "text": "ItemList"
},

{
    "location": "#EnglishText.Text.sentences",
    "page": "EnglishText.jl Documentation",
    "title": "EnglishText.Text.sentences",
    "category": "function",
    "text": "sentences(text::AbstractString)\n\nReturn an iterable over the Sentences contained within text. Sentences are identified naïvely; that is, every full stop, exclamation mark, or question mark is considered to delimit a sentence. This is of course prone to error, as some full stops are used for abbreviations and not for delimiting sentences.\n\njulia> using EnglishText\n\njulia> for s in sentences(\"Hi! Iterate over sentences. OK?\")\n           println(s)\n       end\nHi!\nIterate over sentences.\nOK?\n\n\n\n\n\n"
},

{
    "location": "#Parsing-Sentences-1",
    "page": "EnglishText.jl Documentation",
    "title": "Parsing Sentences",
    "category": "section",
    "text": "sentences"
},

{
    "location": "#EnglishText.Semantics.SemanticText",
    "page": "EnglishText.jl Documentation",
    "title": "EnglishText.Semantics.SemanticText",
    "category": "type",
    "text": "An object representing a string of text but with additional semantic information. These objects convert to Strings through the string function, but also typically support other operations.\n\n\n\n\n\n"
},

{
    "location": "#Internals-1",
    "page": "EnglishText.jl Documentation",
    "title": "Internals",
    "category": "section",
    "text": "SemanticText"
},

{
    "location": "#Citations-1",
    "page": "EnglishText.jl Documentation",
    "title": "Citations",
    "category": "section",
    "text": "Conway, D. M. (1998, August). An algorithmic approach to english pluralization. In Proceedings of the Second Annual Perl Conference."
},

]}
