var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Lazy.jl-1",
    "page": "Readme",
    "title": "Lazy.jl",
    "category": "section",
    "text": "(Image: Gitter chat)Pkg.add(\"Lazy\")Lazy.jl provides Julia with the cornerstones of functional programming - lazily-evaluated lists and a large library of functions for working with them. It\'s also a repository for some neat macros, which might be useful to you even if you don\'t want lazy lists (see below).Firstly, the canonical examples, in Julia:using Lazy\n\n# Note : prepends. Don\'t forget the semicolon!\n# Fibonacci sequence defined in terms of itself:\nfibs = @lazy 0:1:(fibs + drop(1, fibs));\n\ntake(20, fibs)\n#> (0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597 2584 4181)\n\n# isprime defined in terms of the prime numbers:\nisprime(n) =\n  @>> primes begin\n    takewhile(x -> x<=sqrt(n))\n    map(x -> n % x == 0)\n    any; !\n  end\n\n# the prime numbers defined in terms of isprime:\nprimes = filter(isprime, Lazy.range(2));\n\ntake(20, primes)\n#> (2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59 61 67 71)If you\'ve done any functional programming, you already know how to use Lazy.jl; just head down to the reference below to see what functions are available."
},

{
    "location": "#Intro-to-Laziness-1",
    "page": "Readme",
    "title": "Intro to Laziness",
    "category": "section",
    "text": "For the unfamiliar, laziness just means that the elements of the list aren\'t actally calculated until you use them. This allows you to perform all sorts of magic, like working with infinite lists or lists of items from the future.# Even square numbers:\n> esquares = @>> Lazy.range() map(x->x^2) filter(iseven);\n# first 5\n> take(5, esquares)\nList:\n  4\n  16\n  36\n  64\n  100\n# 99th\n> esquares[99]\n39204But lazy lists aren\'t just for mathematical tricks; you can use them very practically for things like file IO. For example, you might represent the lines of a terabyte-large file with a lazy list; you can process the lines as any other list, letting the IO happen in the background.# TODO: lineseq example\n@>> \"file.txt\" lineseq foreach(println) # Will work no matter many lines file.txt hasThe other thing that seperates lists from arrays is the huge amount of functionality that comes with most functional programming libraries, including Lazy.jl - if you know your way around them, most data manipulation becomes a simple case of chaining a few functions together. Even if you do ultimately need arrays for speed, you could do worse than to prototype with lists."
},

{
    "location": "#Macros-1",
    "page": "Readme",
    "title": "Macros",
    "category": "section",
    "text": "The threading macros will pipe values through functions, a bit like the |> operator but far more flexible. They can make code a lot cleaner by putting function calls in the order they are applied. The best way to understand them is by example:# Just like x |> f etc.\n@> x f == f(x)\n@> x g f == f(g(x))\n@> x a b c d e == e(d(c(b(a(x)))))\n\n# Unlike |>, functions can have arguments - the value\n# preceding a function will be treated as its first argument\n@> x g(y, z) f == f(g(x, y, z))\n\n@> x g f(y, z) == f(g(x), y, z)\n\n# @>> does the exact same thing, but with value treated as the *last* argument.\n\n@>> x g(y, z) f == f(g(y, z, x))\n\n@>> x g f(y, z) == f(y, z, g(x))\n\n# @as lets you name the threaded argmument\n@as _ x f(_, y) g(z, _) == g(z, f(x, y))\n\n# All threading macros work over begin blocks\n\n@as x 2 begin\n x^2\n x+2\nend == 6"
},

{
    "location": "#Function-Reference-1",
    "page": "Readme",
    "title": "Function Reference",
    "category": "section",
    "text": "List # The abstract type that represents lazy lists\n\nlist(1,2,3) == (1 2 3)\n\nprepend(1, list(2,3,4)) == 1:list(2,3,4) == (1 2 3 4)\n\n# Most list handling functions have similar names\n# to those in Clojure.\n\n# Create a seq from any iterator or array\nseq([1,2,3]) == seq(1:3) == (1 2 3)\n\n# Infinite list of an element\nconstantly(x) == (x x x ...)\nconstantly(1) == (1 1 1 ...)\n\n# Infinite list of function calls\nrepeatedly(f) == (f() f() f() ...)\nrepeatedly(rand) == (0.634 0.478 0.776 ...)\n\n# Inifnitely repeat list\ncycle(a) == (a... a... a... ...)\ncycle([1,2,3]) == (1 2 3 1 2 3 1 2 3 1 ...)\n\n# Repeatedly nest function calls\niterated(f, x) == (x f(x) f(f(x)) ...)\niterated(x->x^2, 2) == (2 4 16 256 65536 ...)\n\nrange(2) == (2 3 4 5 ...)\nrange(1, 5) == (1 2 3 4 5)\nrange(1, 5, 2) == (1 3 5)\n\nlist(1,2,3) * list(4,5,6) == (1 2 3 4 5 6)\n\nfirst(list(1,2,3)) == 1\ntail(list(1,2,3)) == (2 3)\n\nflatten(list(1,2,list(3,4))) == (1 2 3 4)\n\ntakeuntil(x -> x > 1, 0:1) == (0 1)\ntakeuntil(x -> x > 1, 0:5) == (0 1 2)\ntakeuntil(x -> x > 1, 2:5) == (2)\ntakeuntil(x -> x > 1, []) == ()\n\nriffle\ninterpose\ntake\ndrop\ntakelast\ndroplast\ntakenth\ntakewhile\ndropwhile\n# These work as for arrays, but are\n# lazy where appropriate.\nmap, reduce, filter, reverse\nlazymap\nreductions\nremove\ndorun\nforeach\ndistinct\ngroupby\npartition\npartitionby\nsplitat\nsplitby\n\n# @lazy is the secret sauce that makes infinite definitions\n# work; usually you can just wrap your list definition in it:\n@lazy [1,2,3] == (1 2 3)\n# Define a lazy recursive function\nconstantly(x) = @lazy x:constantly(x)\n\n# Make a function map itself over lists\n@listable exp\nexp(range()) == (2.71 7.38 20.08 54.59 148.41 ...)\n\n# Threading macros, see above\n@>, @>>"
},

{
    "location": "autodocs/#Lazy.takeuntil-Tuple{Function,List}",
    "page": "Docstrings",
    "title": "Lazy.takeuntil",
    "category": "method",
    "text": "takeuntil(pred, list)\n\nTake the elements in list until the pred function return true. Notice that the one which makes pred true is also taken. All elements will be taken if no one satisfy the pred function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Lazy.tupleassign-Tuple{Any,Any}",
    "page": "Docstrings",
    "title": "Lazy.tupleassign",
    "category": "method",
    "text": "Generate an expression like (a, b) = (c, d).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Lazy]\nOrder = [:type, :function]"
},

]}
