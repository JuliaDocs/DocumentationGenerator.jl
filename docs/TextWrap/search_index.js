var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#TextWrap.jl-documentation-1",
    "page": "Home",
    "title": "TextWrap.jl documentation",
    "category": "section",
    "text": "CurrentModule = TextWrapThis Julia package provides the function wrap which parses an input text and reorganizes its white space so that it can be printed with a fixed screen width, optionally indenting it. It also provides the two convenience functions print_wrapped and println_wrapped.Here is a quick example:julia> using TextWrap\n\njulia> text = \"This text is going to be wrapped around in lines no longer than 20 characters.\";\n\njulia> println_wrapped(text, width=20)\nThis text is going\nto be wrapped around\nin lines no longer\nthan 20 characters.It\'s very similar to Python\'s textwrap module, but the interface is slightly different."
},

{
    "location": "#Installation-1",
    "page": "Home",
    "title": "Installation",
    "category": "section",
    "text": "To install the module, use Julia\'s package manager:julia> Pkg.add(\"TextWrap\")Dependencies will be installed automatically."
},

{
    "location": "#Usage-1",
    "page": "Home",
    "title": "Usage",
    "category": "section",
    "text": "The module is loaded like any other Julia module:julia> using TextWrap"
},

{
    "location": "#TextWrap.wrap",
    "page": "Home",
    "title": "TextWrap.wrap",
    "category": "function",
    "text": "wrap(string; keywords...)\n\nParses string and returns a new string in which newlines are inserted as appropriate in order for each line to fit within a specified width.\n\nThe behaviour can be controlled via optional keyword arguments:\n\nwidth (deafult=70): the maximum width of the wrapped text, including indentation.\ninitial_indent (default=\"\"): indentation of the first line. This can  be any string (shorter than width), or it can be an integer number (lower than width).\nsubsequent_indent (default=\"\"): indentation of all lines except the first. Works the same as  initial_indent.\nbreak_on_hyphens (default=true): this flag determines whether words can be broken on hyphens, e.g. whether \"high-precision\" can be split into \"high-\" and \"precision\".\nbreak_long_words (default=true): this flag determines what to do when a word is too long to fit in any line. If true, the word will be broken, otherwise it will go beyond the desired text width.\nreplace_whitespace (default=true): if this flag is true, all whitespace characters in the original text (including newlines) will be replaced by spaces.\nexpand_tabs (default=true): if this flag is true, tabs will be expanded in-place into spaces. The expansion happens before whitespace replacement.\nfix_sentence_endings (default=false): if this flag is true, the wrapper will try to recognize sentence endings in the middle of a paragraph and put two spaces before the next sentence in case only one is present.\n\n\n\n\n\n"
},

{
    "location": "#TextWrap.print_wrapped",
    "page": "Home",
    "title": "TextWrap.print_wrapped",
    "category": "function",
    "text": "print_wrapped([io,] text...; keywords...)\n\nThis is just like the standard print function (it prints multiple arguments and accepts an optional IO first argument), except that it wraps the result, and accepts keyword arguments to pass to wrap.\n\n\n\n\n\n"
},

{
    "location": "#TextWrap.println_wrapped",
    "page": "Home",
    "title": "TextWrap.println_wrapped",
    "category": "function",
    "text": "println_wrapped([io,] text...; keywords...)\n\nLike print_wrapped, but adds a newline at the end.\n\n\n\n\n\n"
},

{
    "location": "#Functions-reference-1",
    "page": "Home",
    "title": "Functions reference",
    "category": "section",
    "text": "wrapprint_wrappedprintln_wrapped"
},

]}
