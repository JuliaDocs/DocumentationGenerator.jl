var documenterSearchIndex = {"docs": [

{
    "location": "#Hadamard.fwht",
    "page": "Home",
    "title": "Hadamard.fwht",
    "category": "function",
    "text": "fwht(X, dims=1:ndims(X))\n\nReturn the fast Walsh-Hadamard transform (WHT) of the array X along the dimensions dims (an integer, tuple, or array of dimensions, defaulting to all dimensions). Only power-of-two sizes (along the transformed dimensions) are supported.  The result is returned in the sequency ordering.\n\nOur WHT is normalized so that the forward transform has a 1/n coefficient (where n is the product of the transformed dimensions) and the inverse WHT has no scaling factor.\n\n\n\n\n\n"
},

{
    "location": "#Hadamard.fwht_dyadic",
    "page": "Home",
    "title": "Hadamard.fwht_dyadic",
    "category": "function",
    "text": "fwht_dyadic(X, dims=1:ndims(X))\n\nReturn the fast Walsh-Hadamard transform (WHT) of the array X along the dimensions dims (an integer, tuple, or array of dimensions, defaulting to all dimensions). Only power-of-two sizes (along the transformed dimensions) are supported.  The result is returned in the dyadic (Paley, bit-reversed) ordering.\n\nOur WHT is normalized so that the forward transform has a 1/n coefficient (where n is the product of the transformed dimensions) and the inverse WHT has no scaling factor.\n\n\n\n\n\n"
},

{
    "location": "#Hadamard.fwht_natural",
    "page": "Home",
    "title": "Hadamard.fwht_natural",
    "category": "function",
    "text": "fwht_natural(X, dims=1:ndims(X))\n\nReturn the fast Walsh-Hadamard transform (WHT) of the array X along the dimensions dims (an integer, tuple, or array of dimensions, defaulting to all dimensions). Only power-of-two sizes (along the transformed dimensions) are supported.  The result is returned in the natural (Hadamard) ordering.\n\nOur WHT is normalized so that the forward transform has a 1/n coefficient (where n is the product of the transformed dimensions) and the inverse WHT has no scaling factor.\n\n\n\n\n\n"
},

{
    "location": "#Hadamard.fwht_natural!",
    "page": "Home",
    "title": "Hadamard.fwht_natural!",
    "category": "function",
    "text": "fwht_natural!(X, dims=1:ndims(X))\n\nSimilar to fwht_natural, but works in-place on the input array X.\n\n\n\n\n\n"
},

{
    "location": "#Hadamard.hadamard-Tuple{Integer}",
    "page": "Home",
    "title": "Hadamard.hadamard",
    "category": "method",
    "text": "hadamard(n)\n\nReturn a Hadamard matrix of order n.  The known Hadamard matrices up to size 256 are currently supported (via a lookup table), along with any size that factorizes into products of these known sizes and/or powers of two.\n\nThe return value is a matrix of Int8 values. If you want to do further matrix computations with this matrix, you may want to convert to Float64 first via float(hadamard(n)).\n\nYou can pretty-print a Hadamard matrix as a table of + and - (indicating the signs of the entries) via Hadamard.printsigns, e.g. Hadamard.printsigns(hadamard(28)) for the 28×28 Hadamard matrix.\n\n\n\n\n\n"
},

{
    "location": "#Hadamard.ifwht",
    "page": "Home",
    "title": "Hadamard.ifwht",
    "category": "function",
    "text": "ifwht(X, dims=1:ndims(X))\n\nReturn the inverse fast Walsh-Hadamard transform (WHT) of the array X along the dimensions dims (an integer, tuple, or array of dimensions, defaulting to all dimensions). Only power-of-two sizes (along the transformed dimensions) are supported.  The result is returned in the sequency ordering.\n\nOur WHT is normalized so that the forward transform has a 1/n coefficient (where n is the product of the transformed dimensions) and the inverse WHT has no scaling factor.\n\n\n\n\n\n"
},

{
    "location": "#Hadamard.ifwht_dyadic",
    "page": "Home",
    "title": "Hadamard.ifwht_dyadic",
    "category": "function",
    "text": "ifwht_dyadic(X, dims=1:ndims(X))\n\nReturn the inverse fast Walsh-Hadamard transform (WHT) of the array X along the dimensions dims (an integer, tuple, or array of dimensions, defaulting to all dimensions). Only power-of-two sizes (along the transformed dimensions) are supported.  The result is returned in the dyadic (Paley, bit-reversed) ordering.\n\nOur WHT is normalized so that the forward transform has a 1/n coefficient (where n is the product of the transformed dimensions) and the inverse WHT has no scaling factor.\n\n\n\n\n\n"
},

{
    "location": "#Hadamard.ifwht_natural",
    "page": "Home",
    "title": "Hadamard.ifwht_natural",
    "category": "function",
    "text": "ifwht_natural(X, dims=1:ndims(X))\n\nReturn the inverse fast Walsh-Hadamard transform (WHT) of the array X along the dimensions dims (an integer, tuple, or array of dimensions, defaulting to all dimensions). Only power-of-two sizes (along the transformed dimensions) are supported.  The result is returned in the natural (Hadamard) ordering.\n\nOur WHT is normalized so that the forward transform has a 1/n coefficient (where n is the product of the transformed dimensions) and the inverse WHT has no scaling factor.\n\n\n\n\n\n"
},

{
    "location": "#Hadamard.ifwht_natural!",
    "page": "Home",
    "title": "Hadamard.ifwht_natural!",
    "category": "function",
    "text": "ifwht_natural!(X, dims=1:ndims(X))\n\nSimilar to ifwht_natural, but works in-place on the input array X.\n\n\n\n\n\n"
},

{
    "location": "#Hadamard.printsigns-Tuple{IO,AbstractArray{#s33,2} where #s33<:Real}",
    "page": "Home",
    "title": "Hadamard.printsigns",
    "category": "method",
    "text": "printsigns([io, ] A)\n\nPrint a table of + and - characters indicating the signs of the entries of A (with 0 for zero entries). The output stream io defaults to stdout.\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Hadamard]\nOrder = [:type, :function]"
},

]}
