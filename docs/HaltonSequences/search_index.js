var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#HaltonSequences-1",
    "page": "Home",
    "title": "HaltonSequences",
    "category": "section",
    "text": "This package provides a convenient interface to computing terms from individual or multidimensional Halton sequences. These are low-discrepancy sequences widely applied in quasi-Monte Carlo methods. They are well known to have shortcomings in moderate to high dimensions, however."
},

{
    "location": "#Usage-1",
    "page": "Home",
    "title": "Usage",
    "category": "section",
    "text": "The primary tools offered are the Array-like Halton and HaltonPoint types. These generate on-demand values of individual or multidimensional sequences, respectively.To make a Halton object, you provide a prime base. For example,using HaltonSequences\nh = Halton(2)As you can see, you get a fairly long virtual Vector by default. However, values are computed only when elements are accessed. To store values, collect them into an ordinary array.collect( h[1:6] )You can specify offsets from the sequence start, or a different length, using keywords. You can also specify different Real types for the values.Halton(2,start=64)[1]Halton{Rational}(3,length=7)To make a HaltonPoint object, give the dimension of the sequence values.HaltonPoint(4)[1:6]The sequence elements are vectors of the base element type. By default, the bases of the different dimensions are chosen in order starting with 2. You may instead give a vector of prime bases.HaltonPoint{Rational}([7,11,13],length=6)"
},

{
    "location": "funcs/#",
    "page": "Functions and types",
    "title": "Functions and types",
    "category": "page",
    "text": ""
},

{
    "location": "funcs/#HaltonSequences.haltonvalue",
    "page": "Functions and types",
    "title": "HaltonSequences.haltonvalue",
    "category": "function",
    "text": "haltonvalue(n, base[, T])\n\nReturn the nth element of the Halton sequence with prime base base (defaults to 2). If a <:Real type T is given, compute the value in that type.\n\nExamples\n\njulia> haltonvalue(4,3,Rational)\n4//9\n\n\n\n\n\n"
},

{
    "location": "funcs/#HaltonSequences.Halton",
    "page": "Functions and types",
    "title": "HaltonSequences.Halton",
    "category": "type",
    "text": "Halton(base=2; <keyword arguments>)\nHalton{T<:Real}(base=2; <keyword arguments>)\n\nCreate a Vector-like object for a Halton sequence. Optionally, use a <:Real type T for the elements.\n\nArguments\n\nbase::Integer: prime number base for the sequence\nstart=1 (keyword): starting/offset index\nlength=typemax(UInt32) (keyword): length of the sequence vector\n\nExamples\n\njulia> Halton(3,length=4)\n4-element Halton{Float64}:\n 0.3333333333333333\n 0.6666666666666666\n 0.1111111111111111\n 0.4444444444444444\n\njulia> Halton{Rational}(2,length=7)\n7-element Halton{Rational}:\n 1//2\n 1//4\n 3//4\n 1//8\n 5//8\n 3//8\n 7//8\n\njulia> sum( Halton()[1:10000] )/10000\n0.4998324768066406\n\nSee also: HaltonPoint, haltonvalue\n\n\n\n\n\n"
},

{
    "location": "funcs/#HaltonSequences.HaltonPoint",
    "page": "Functions and types",
    "title": "HaltonSequences.HaltonPoint",
    "category": "type",
    "text": "HaltonPoint(ndim::Integer; <keyword arguments>)\nHaltonPoint(base::Vector{<:Integer}; <keyword arguments>)\nHaltonPoint{T<:Real}(base::Vector{<:Integer}; <keyword arguments>)\n\nCreate a Vector-like object for a sequence of ndim-dimensional vectors constructed from Halton sequences. If given, base should be a vector of primes and then ndim=length(base). If T is given, it is the element type for the vectors.\n\nKeyword arguments\n\nstart=1: starting/offset index\nlength=typemax(UInt32): length of the sequence vector\n\nExamples\n\njulia> HaltonPoint(4,length=5)\n5-element HaltonPoint{Float64}:\n [0.5, 0.333333, 0.2, 0.142857]\n [0.25, 0.666667, 0.4, 0.285714]\n [0.75, 0.111111, 0.6, 0.428571]\n [0.125, 0.444444, 0.8, 0.571429]\n [0.625, 0.777778, 0.04, 0.714286]\n\njulia> h = HaltonPoint([5,11,17]);  sum(h[10001:20000])/10000\n3-element Array{Float64,1}:\n 0.49996162048000015\n 0.5000650725546567\n 0.49992980926952507\n\nSee also: Halton, haltonvalue\n\n\n\n\n\n"
},

{
    "location": "funcs/#Functions-1",
    "page": "Functions and types",
    "title": "Functions",
    "category": "section",
    "text": "CurrentModule = HaltonSequences\nDocTestSetup = quote\n  using HaltonSequences\nendModules = [HaltonSequences]\nOrder   = [:function, :type]"
},

]}
