var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#NormalizeQuantiles-1",
    "page": "Readme",
    "title": "NormalizeQuantiles",
    "category": "section",
    "text": "For julia 0.4, 0.5, 0.6 see: https://github.com/oheil/NormalizeQuantiles.jl/tree/backport-0.6Linux: (Image: Build Status) Windows: (Image: Build status)(Image: Coverage Status)Package NormalizeQuantiles implements quantile normalizationqn = normalizeQuantiles(array);and provides a function to calculate sample ranks(r,m) = sampleRanks(array);of a given vector or matrix.Table of ContentsDependencies\nRemarks\nUsage examples normalizeQuantiles\nGeneral usage\nMissing Values\nSharedArray and multicore usage examples\nBehaviour of function normalizeQuantiles\nData prerequisites\nRemarks on data with missing values\nList of all exported definitions for normalizeQuantiles\nUsage examples sampleRanks\nList of all exported definitions for sampleRanks"
},

{
    "location": "#Dependencies-1",
    "page": "Readme",
    "title": "Dependencies",
    "category": "section",
    "text": "Julia 0.7"
},

{
    "location": "#Remarks-1",
    "page": "Readme",
    "title": "Remarks",
    "category": "section",
    "text": "for julia 0.4, 0.5, 0.6 see: https://github.com/oheil/NormalizeQuantiles.jl/tree/backport-0.6\nCode examples and output on this page have been used on and copied from the julia 0.7 REPL\nLast commit with julia 0.3 support: Jan 20, 2017, eb97d24ff77d470d0d121fabf83d59979ad0db36\ngit checkout eb97d24ff77d470d0d121fabf83d59979ad0db36"
},

{
    "location": "#Usage-examples-normalizeQuantiles-1",
    "page": "Readme",
    "title": "Usage examples normalizeQuantiles",
    "category": "section",
    "text": ""
},

{
    "location": "#General-usage-1",
    "page": "Readme",
    "title": "General usage",
    "category": "section",
    "text": "Pkg.add(\"NormalizeQuantiles\");\nusing NormalizeQuantiles;The following array is interpreted as a matrix with 4 rows and 3 columns:array = [ 3.0 2.0 1.0 ; 4.0 5.0 6.0 ; 9.0 7.0 8.0 ; 5.0 2.0 8.0 ];\nqn = normalizeQuantiles(array)	julia> qn\n	4�3 Array{Float64,2}:\n	 2.0  3.0  2.0\n	 4.0  6.0  4.0\n	 8.0  8.0  7.0\n	 6.0  3.0  7.0The columns in qn are now quantile normalized to each other.The input array must not have dimension larger than 2.Return type of function normalizeQuantiles is always Array{Float64,2}"
},

{
    "location": "#Missing-Values-1",
    "page": "Readme",
    "title": "Missing Values",
    "category": "section",
    "text": "If your data contain some missing values like NaN (Not a Number) or something else, they will be changed to NaN:array = [ NaN 2.0 1.0 ; 4.0 \"empty\" 6.0 ; 9.0 7.0 8.0 ; 5.0 2.0 8.0 ];	julia> array\n	4�3 Array{Any,2}:\n	 NaN    2.0       1.0\n	4.0   \"empty\"  6.0\n	9.0  7.0       8.0\n	5.0  2.0       8.0qn = normalizeQuantiles(array)	julia> qn\n	4�3 Array{Float64,2}:\n	 NaN      3.25  1.5\n	   5.0  NaN     5.0\n	   8.0    8.0   6.5\n	   5.0    3.25  6.5NaN is of type Float64, so there is nothing similar for Int types.	julia> typeof(NaN)\n	Float64You can convert the result to Array{Union{Missing, Float64},2} with:qnMissing = convert(Array{Union{Missing,Float64}},qn)	julia> qnMissing\n	4�3 Array{Union{Missing, Float64},2}:\n	 NaN      3.25  1.5\n	   5.0  NaN     5.0\n	   8.0    8.0   6.5\n	   5.0    3.25  6.5qnMissing[isnan.(qnMissing)] = missing;	julia> qnMissing\n	4�3 Array{Union{Missing, Float64},2}:\n	  missing  3.25      1.5\n	 5.0        missing  5.0\n	 8.0       8.0       6.5\n	 5.0       3.25      6.5"
},

{
    "location": "#SharedArray-and-multicore-usage-examples-1",
    "page": "Readme",
    "title": "SharedArray and multicore usage examples",
    "category": "section",
    "text": "Remark: restart julia now. addprocs() must be called before using NormalizeQuantiles;.To use multiple cores on a single machine you can use the standard packages Distributed and SharedArrays:using Distributed\naddprocs();\n@everywhere using SharedArrays\n@everywhere using NormalizeQuantiles\n\nsa = SharedArray{Float64}([ 3.0 2.0 1.0 ; 4.0 5.0 6.0 ; 9.0 7.0 8.0 ; 5.0 2.0 8.0 ])	julia> sa\n	4�3 SharedArray{Float64,2}:\n	 3.0  2.0  1.0\n	 4.0  5.0  6.0\n	 9.0  7.0  8.0\n	 5.0  2.0  8.0qn = normalizeQuantiles(sa)	julia> qn\n	4�3 Array{Float64,2}:\n	 2.0  3.0  2.0\n	 4.0  6.0  4.0\n	 8.0  8.0  7.0\n	 6.0  3.0  7.0Remark: restart julia again.For small data sets using Distributed and SharedArrays decreases performance:using NormalizeQuantiles\nla = randn((100,100));\nnormalizeQuantiles(la); @time normalizeQuantiles(la);	julia> @time normalizeQuantiles(la);\n	  0.003178 seconds (8.35 k allocations: 2.813 MiB)Remark: restart julia.using Distributed\naddprocs();\n@everywhere using SharedArrays\n@everywhere using NormalizeQuantiles\nsa = SharedArray{Float64}( randn((100,100)) );\nnormalizeQuantiles(sa); @time normalizeQuantiles(sa);	julia> @time normalizeQuantiles(sa);\n	  0.013014 seconds (12.10 k allocations: 432.146 KiB)Remark: restart julia.For larger data sets performance increases with multicore processors:using NormalizeQuantiles\nla = randn((1000,10000));\nnormalizeQuantiles(la); @time normalizeQuantiles(la);	julia> @time normalizeQuantiles(la);\n	  2.959431 seconds (784.18 k allocations: 2.281 GiB, 12.13% gc time)Remark: restart julia.using Distributed\naddprocs();\n@everywhere using SharedArrays\n@everywhere using NormalizeQuantiles\nla = randn((1000,10000));\nsa = SharedArray{Float64}(la);\nnormalizeQuantiles(sa); @time normalizeQuantiles(sa);	julia> @time normalizeQuantiles(sa);\n	  1.030016 seconds (83.85 k allocations: 80.754 MiB, 5.77% gc time)Using non-SharedArrays in a multicore setup is slowest:	julia> normalizeQuantiles(la); @time normalizeQuantiles(la);\n	  5.776685 seconds (294.06 k allocations: 92.532 MiB, 0.28% gc time)"
},

{
    "location": "#Behaviour-of-function-normalizeQuantiles-1",
    "page": "Readme",
    "title": "Behaviour of function normalizeQuantiles",
    "category": "section",
    "text": "After quantile normalization the sets of values of each column have the same statistical properties. This is quantile normalization without a reference column.The function normalizeQuantiles expects an array with dimension <= 2 and always returns a matrix of equal size as the input matrix and of type Array{Float64,2}.NaN values of type Float64 and any other non-numbers, like strings, are treated as random missing values and the result value will be NaN. See \"Remarks on data with missing values\" below."
},

{
    "location": "#Data-prerequisites-1",
    "page": "Readme",
    "title": "Data prerequisites",
    "category": "section",
    "text": "To use quantile normalization your data should have the following properties:the distribution of values in each column should be similar\nnumber of values for each column should be large\nnumber of missing values in the data should be small and of random nature"
},

{
    "location": "#Remarks-on-data-with-missing-values-1",
    "page": "Readme",
    "title": "Remarks on data with missing values",
    "category": "section",
    "text": "Currently there seems to be no general agreement on how to deal with missing values during quantile normalization. Here we put any given missing value back into the sorted column at the original position before calculating the mean of the rows."
},

{
    "location": "#List-of-all-exported-definitions-for-normalizeQuantiles-1",
    "page": "Readme",
    "title": "List of all exported definitions for normalizeQuantiles",
    "category": "section",
    "text": "| | normalizeQuantiles | | –––––––––––-: | –––––––––––- |  | Definition: | Array{Float64,2} function normalizeQuantiles(matrix::AbstractArray) | | Input type: | matrix::AbstractArray | | Return type: | Array{Float64,2} |"
},

{
    "location": "#Usage-examples-sampleRanks-1",
    "page": "Readme",
    "title": "Usage examples sampleRanks",
    "category": "section",
    "text": "sampleRanks of a given vector calculates for each element the rank, which is the position of the element in the sorted vector.using NormalizeQuantiles\na = [ 5.0 2.0 4.0 3.0 1.0 ];\n(r,m) = sampleRanks(a);   # here only return value r is relevant, for m see below\nr	julia> r\n	5-element Array{Union{Missing, Int64},1}:\n	 5\n	 2\n	 4\n	 3\n	 1If you provide a matrix likearray = [ 1.0 2.0 3.0 ; 4.0 5.0 6.0 ; 7.0 8.0 9.0 ; 10.0 11.0 12.0 ]	julia> array\n	4�3 Array{Float64,2}:\n	  1.0   2.0   3.0\n	  4.0   5.0   6.0\n	  7.0   8.0   9.0\n	 10.0  11.0  12.0ranks are calculated column wise, or in other words, array is treated as array[:]:(r,m) = sampleRanks(array);\nr	julia> r\n	12-element Array{Union{Missing, Int64},1}:\n	  1\n	  4\n	  7\n	 10\n	  2\n	  5\n	  8\n	 11\n	  3\n	  6\n	  9\n	 12There are three optional keyword parameters tiesMethod, naIncreasesRank and resultMatrix:(r,m) = sampleRanks(a,tiesMethod=tmMin,naIncreasesRank=false,resultMatrix=true);\n(r,m) = sampleRanks(a,resultMatrix=true);Equal values in the vector are called ties. There are several methods available on how to treat ties:tmMin : the smallest rank for all ties (default)\ntmMax : the largest rank\ntmOrder : increasing ranks\ntmReverse : decreasing ranks\ntmRandom : the ranks are randomly distributed\ntmAverage : the average rounded to the next integerThese methods are defined and exported as	@enum qnTiesMethods tmMin tmMax tmOrder tmReverse tmRandom tmAverageInternally ties have increasing ranks. On these the chosen method is applied.Examples:a = [ 7.0 2.0 4.0 2.0 1.0 ];\n(r,m) = sampleRanks(a); #which is the same as (r,m)=sampleRanks(a,tiesMethod=tmMin)\nr	julia> r\n	5-element Array{Union{Missing, Int64},1}:\n	 4\n	 2\n	 3\n	 2\n	 1(r,m) = sampleRanks(a,tiesMethod=tmMax);\nr	julia> r\n	5-element Array{Union{Missing, Int64},1}:\n	 5\n	 3\n	 4\n	 3\n	 1(r,m) = sampleRanks(a,tiesMethod=tmReverse);\nr	julia> r\n	5-element Array{Union{Missing, Int64},1}:\n	 5\n	 3\n	 4\n	 2\n	 1One or more missing values in the vector are never equal and remain on there position after sorting. The rank of each missing value is always missing::Missing. The default is that a missing value does not increase the rank for successive values. Giving true keyword parameter naIncreasesRank changes that behavior to increasing the rank by 1 for successive values:a = [ 7.0 2.0 4.0 2.0 1.0 ];\na[1] = NaN;\n(r,m) = sampleRanks(a);\nr	julia> r\n	5-element Array{Union{Missing, Int64},1}:\n	  missing\n	 2\n	 3\n	 2\n	 1(r,m) = sampleRanks(a,naIncreasesRank=true);\nr	julia> r\n	5-element Array{Union{Missing, Int64},1}:\n	  missing\n	 3\n	 4\n	 3\n	 2The keyword parameter resultMatrix lets you generate a dictionary of rank indices to allow direct access to all values with a given rank. For large vectors this may have a large memory consumption therefor the default is to return an empty dictionary of type Dict{Int64,Array{Int64,N}}:a = [ 7.0 2.0 4.0 2.0 1.0 ];\n(r,m) = sampleRanks(a,resultMatrix=true);\nm	julia> m\n	Dict{Int64,Array{Int64,N} where N} with 4 entries:\n	  4 => [1]\n	  2 => [2,4]\n	  3 => [3]\n	  1 => [5]haskey(m,2)   #does rank 2 exist?	julia> haskey(m,2)\n	truea[m[2]]   #all values of rank 2	julia> a[m[2]]\n	2-element Array{Float64,1}:\n	 2.0\n	 2.0"
},

{
    "location": "#List-of-all-exported-definitions-for-sampleRanks-1",
    "page": "Readme",
    "title": "List of all exported definitions for sampleRanks",
    "category": "section",
    "text": "| | sampleRanks | | –––––––––––-: | –––––––––––- |  | Definition: | @enum qnTiesMethods tmMin tmMax tmOrder tmReverse tmRandom tmAverage | | Description: || | tmMin | the smallest rank for all ties | | tmMax | the largest rank | | tmOrder | increasing ranks | | tmReverse | decreasing ranks | | tmRandom | the ranks are randomly distributed | | tmAverage | the average rounded to the next integer || | sampleRanks | | | –––––––––––-: | –––––––––––- | –––––––––––- |  | Definition: | (Array{Union{Missing,Int},1},Dict{Int,Array{Int}}) sampleRanks(array::AbstractArray; tiesMethod::qnTiesMethods=tmMin, naIncreasesRank=false, resultMatrix=false) | keyword arguments | | Input type: | array::AbstractArray | data | | Input type: | tiesMethod::qnTiesMethods | how to treat ties (default: tmMin) | | Input type: | naIncreasesRank::bool | increase rank by one if NA (default: false) | | Input type: | resultMatrix::bool | create rank dictionary (default: false) | | Return type: | (Array{Union{Missing,Int},1},Dict{Int,Array{Int}}) ||"
},

{
    "location": "autodocs/#NormalizeQuantiles.normalizeQuantiles-Tuple{AbstractArray}",
    "page": "Docstrings",
    "title": "NormalizeQuantiles.normalizeQuantiles",
    "category": "method",
    "text": "qnmatrix::Array{Float64} function normalizeQuantiles(matrix::AbstractArray)\n\nCalculate the quantile normalized data for the input matrix\n\nParameter:     matrix::AbstractArray The input data as an array of values interpreted as matrix(rows,columns)\n\nReturn value:      qnmatrix::Array{Float64} The quantile normalized data as Array{Float64}\n\nExample:\n\nusing NormalizeQuantiles\n\narray = [ 3.0 2.0 1.0 ; 4.0 5.0 6.0 ; 9.0 7.0 8.0 ; 5.0 2.0 8.0 ]\nqn = normalizeQuantiles(array)\n\nrow = 2\ncolumn = 2\narray=convert(Array{Any},array)\narray[row,column] = missing\nqn = normalizeQuantiles(array)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NormalizeQuantiles.sampleRanks-Tuple{AbstractArray}",
    "page": "Docstrings",
    "title": "NormalizeQuantiles.sampleRanks",
    "category": "method",
    "text": "(Array{Union{Missing,Int}},Dict{Int,Array{Int}}) sampleRanks(array::AbstractArray;tiesMethod::qnTiesMethods=tmMin,naIncreasesRank=false,resultMatrix=false)\n\nCalculate ranks of the values of a given vector.\n\nParameters:\n\narray: the input array\ntiesMethod: the method how ties (equal values) are treated\n   possible values: tmMin tmMax tmOrder tmReverse tmRandom tmAverage\n   default is tmMin\nnaIncreasesRank: if true than any NA increases the following ranks by 1\nresultMatrix: if true than return a dictionary of rank keys and array of indices values\n\nIf the input array can be altered use sampleRanks!(matrix::AbstractArray) to be more memory efficient.\n\nExample:\n\nusing NormalizeQuantiles\n\na = [ 5.0 2.0 4.0 3.0 1.0 ]\n\n(r,m)=sampleRanks(a)\n\n(r,m)=sampleRanks(a,tiesMethod=tmMin,naIncreasesRank=false,resultMatrix=true)\n\nr is the vector of ranks.\n\nm is a dictionary with rank as keys and as value the indices of all values of this rank.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [NormalizeQuantiles]\nOrder = [:type, :function]"
},

]}
