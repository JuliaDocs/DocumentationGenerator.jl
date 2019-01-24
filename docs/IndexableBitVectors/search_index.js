var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#IndexableBitVectors-1",
    "page": "Readme",
    "title": "IndexableBitVectors",
    "category": "section",
    "text": "(Image: Build Status) (Image: IndexableBitVectors.jl)This package exports following operations over bit vectors with extremely fast speed while keeping extra memory usage small:getindex(bv::IndexableBitVectors, i::Integer): i-th element of bv\nrank(b::Bool, bv::AbstractIndexableBitVector, i::Integer): the number of occurrences of bit b in bv[1:i]\nselect(b::Bool, bv::AbstractIndexableBitVector, i::Integer): the index of i-th occurrence of b in bv.And other shortcuts:rank0(bv, i) = rank(false, bv, i)\nrank1(bv, i) = rank(true,  bv, i)\nselect0(bv, i) = select(0, bv, i)\nselect1(bv, i) = select(1, bv, i)The following two types are exported:SucVector: rank values are precomputed in blocks.\nRRR: compressible indexable bit vector.In general, queries on SucVector is faster than those on RRR, but RRR is compressible.Conversions from bit vectors are defined for these types. So you just pass a bit vector to them:julia> using IndexableBitVectors\n\njulia> SucVector(bitrand(10))\n10-element IndexableBitVectors.SucVector:\n false\n false\n false\n false\n  true\n  true\n false\n false\n false\n  true\n\njulia> RRR(bitrand(10))\n10-element IndexableBitVectors.RRR:\n false\n false\n false\n false\n  true\n false\n false\n false\n  true\n false\n"
},

{
    "location": "#Benchmarks:-1",
    "page": "Readme",
    "title": "Benchmarks:",
    "category": "section",
    "text": "The script and result of benchmarks can be found in the benchmarks directory. Plots are in a Jupyter notebook: benchmarks/plot.ipynb."
},

{
    "location": "autodocs/#IndexableBitVectors.RRR",
    "page": "Docstrings",
    "title": "IndexableBitVectors.RRR",
    "category": "type",
    "text": "Compressed indexable bit vector.\n\nRRR compresses a bit vector in an information-theoretically optimal representation. This compression is based on local abundance of bits; if 0s or 1s are clustered in a bit vector, it will be compressed even when the numbers of 0s and 1s are globally equal.\n\nLet n be the length of a RRR, the asymptotic query times are\n\ngetindex: O(1)\nrank: O(1)\nselect: O(log n)\n\nSee (Raman et al, 2007, doi:10.1145/1290672.1290680) for more details.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IndexableBitVectors.SucVector",
    "page": "Docstrings",
    "title": "IndexableBitVectors.SucVector",
    "category": "type",
    "text": "Static indexable bit vector.\n\nSucVector requires 5/4 bits per bit in order to keep bits and the number of bits (i.e. a SucVector object becomes ~25% bigger when converted from a BitVector object). Bits are split into blocks: four chunks of 64 bits are stored in a block and blocks are stored in a vector. Blocks are contiguous in momery so that memory cache works efficiently.\n\nThe number of bits is limited up to 2^40 bits. This is 128GiB so would be enough in most cases.\n\nLet n be the length of a SucVector, the asymptotic query times are\n\ngetindex: O(1)\nrank: O(1)\nselect: O(log n)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IndexableBitVectors.rank",
    "page": "Docstrings",
    "title": "IndexableBitVectors.rank",
    "category": "function",
    "text": "rank(x, bv, i)\n\nCount the number of xs within bv[1:i].\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IndexableBitVectors.rank0",
    "page": "Docstrings",
    "title": "IndexableBitVectors.rank0",
    "category": "function",
    "text": "rank0(rb, i)\n\nCount the number of 0s (falses) within bv[1:i].\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IndexableBitVectors.rank1",
    "page": "Docstrings",
    "title": "IndexableBitVectors.rank1",
    "category": "function",
    "text": "rank1(bv, i)\n\nCount the number of 1s (trues) within bv[1:i].\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IndexableBitVectors.rsearch",
    "page": "Docstrings",
    "title": "IndexableBitVectors.rsearch",
    "category": "function",
    "text": "rsearch(x, bv, i)\n\nSearch the position of the previous x in bv starting from i.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IndexableBitVectors.rsearch0",
    "page": "Docstrings",
    "title": "IndexableBitVectors.rsearch0",
    "category": "function",
    "text": "rsearch0(bv, i)\n\nSearch the position of the previous 0 in bv starting from i.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IndexableBitVectors.rsearch1",
    "page": "Docstrings",
    "title": "IndexableBitVectors.rsearch1",
    "category": "function",
    "text": "rsearch1(bv, i)\n\nSearch the position of the previous 1 in bv starting from i.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IndexableBitVectors.search",
    "page": "Docstrings",
    "title": "IndexableBitVectors.search",
    "category": "function",
    "text": "search(x, bv, i)\n\nSearch the position of the next x in bv starting from i.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IndexableBitVectors.search0",
    "page": "Docstrings",
    "title": "IndexableBitVectors.search0",
    "category": "function",
    "text": "search0(bv, i)\n\nSearch the position of the next 0 in bv starting from i.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IndexableBitVectors.search1",
    "page": "Docstrings",
    "title": "IndexableBitVectors.search1",
    "category": "function",
    "text": "search1(bv, i)\n\nSearch the position of the next 1 in bv starting from i.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IndexableBitVectors.select",
    "page": "Docstrings",
    "title": "IndexableBitVectors.select",
    "category": "function",
    "text": "select(x, bv, j)\n\nReturn the position of the j-th occurrence of x in bv.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IndexableBitVectors.select0",
    "page": "Docstrings",
    "title": "IndexableBitVectors.select0",
    "category": "function",
    "text": "select0(bv, j)\n\nReturn the position of the j-th occurrence of 0 in bv.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IndexableBitVectors.select1",
    "page": "Docstrings",
    "title": "IndexableBitVectors.select1",
    "category": "function",
    "text": "select1(bv, j)\n\nReturn the position of the j-th occurrence of 1 in bv.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [IndexableBitVectors]\nOrder = [:type, :function]"
},

]}
