var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Fast-multidimensional-Walsh-Hadamard-transforms-1",
    "page": "Readme",
    "title": "Fast multidimensional Walsh-Hadamard transforms",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status)(Image: Hadamard)This package provides functions to compute fast Walsh-Hadamard transforms in Julia, for arbitrary dimensions and arbitrary power-of-two transform sizes, with the three standard orderings: natural (Hadamard), dyadic (Paley), and sequency (Walsh) ordering.It works by calling Julia\'s interface to the FFTW library, and can often be orders of magnitude faster than the corresponding fwht functions in the Matlab signal-processing toolbox."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Within Julia, just use the package manager to run Pkg.add(\"Hadamard\") to install the files."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "After installation, the using Hadamard statement will import the names in the Hadamard module so that you can call the function below.The function fwht(X) computes the fast Walsh-Hadamard transform (WHT) of the multidimensional array X (of real or complex numbers), returning its output in sequency order.  The inverse transform is ifwht(X).By default, fwht and ifwht compute the multidimensional WHT, which consists of the ordinary (one-dimensional) WHT performed along each dimension of the input.  To perform only the 1d WHT along dimension d, you can can instead use fwht(X, d) and ifwht(X, d) functions.  More generally, d can be a tuple or array or dimensions to transform.The sizes of the transformed dimensions must be powers of two, or an exception is thrown.  The non-transformed dimensions are arbitrary.  For example, given a 16x20 array X, fwht(X,1) is allowed but fwht(X,2) is not.These functions compute the WHT normalized similarly to the fwht and ifwht functions in Matlab.  Given the Walsh functions, which have values of +1 or -1, fwht multiplies its input by the Walsh functions and divides by n (the length of the input) to obtain the coefficients of each Walsh function in the input.  ifwht multiplies its inputs by the Walsh functions and sums them to recover the signal, with no n factor.Instead of sequency order, one can also compute the WHT in the natural (Hadamard) ordering with fwht_natural and ifwht_natural, or in the dyadic (Paley) ordering with fwht_dyadic and ifwht_dyadic.  These functions take the same arguments as fwht and ifwht and have the same normalizations, respectively.    The natural-order transforms also have in-place variants fwht_natural! and ifwht_natural!."
},

{
    "location": "#Hadamard-matrices-1",
    "page": "Readme",
    "title": "Hadamard matrices",
    "category": "section",
    "text": "We also provide a a function hadamard(n) which returns a Hadamard matrix of order n, similar to the Matlab function of the same name. The known Hadamard matrices up to size 256 are currently supported (via a lookup table), along with any size that factorizes into products of these known sizes and/or powers of two.The return value of hadamard(n) is a matrix of Int8 values.  If you are planning to do matrix computations with this matrix, you may want to convert to Float64 first via float(hadamard(n)).For many sizes, the Hadamard matrix is not unique; the hadamard function returns an arbitrary choice.  For power-of-two sizes, the choice is equivalent to ifwht_natural(eye(n), 1).You can pretty-print a Hadamard matrix as a table of + and - (characters indicating the signs of the entries) via Hadamard.printsigns, e.g. Hadamard.printsigns(hadamard(28)) for the 28×28 Hadamard matrix."
},

{
    "location": "#Author-1",
    "page": "Readme",
    "title": "Author",
    "category": "section",
    "text": "This package was written by Steven G. Johnson."
},

{
    "location": "autodocs/#Hadamard.fwht",
    "page": "Docstrings",
    "title": "Hadamard.fwht",
    "category": "function",
    "text": "fwht(X, dims=1:ndims(X))\n\nReturn the fast Walsh-Hadamard transform (WHT) of the array X along the dimensions dims (an integer, tuple, or array of dimensions, defaulting to all dimensions). Only power-of-two sizes (along the transformed dimensions) are supported.  The result is returned in the sequency ordering.\n\nOur WHT is normalized so that the forward transform has a 1/n coefficient (where n is the product of the transformed dimensions) and the inverse WHT has no scaling factor.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Hadamard.fwht_dyadic",
    "page": "Docstrings",
    "title": "Hadamard.fwht_dyadic",
    "category": "function",
    "text": "fwht_dyadic(X, dims=1:ndims(X))\n\nReturn the fast Walsh-Hadamard transform (WHT) of the array X along the dimensions dims (an integer, tuple, or array of dimensions, defaulting to all dimensions). Only power-of-two sizes (along the transformed dimensions) are supported.  The result is returned in the dyadic (Paley, bit-reversed) ordering.\n\nOur WHT is normalized so that the forward transform has a 1/n coefficient (where n is the product of the transformed dimensions) and the inverse WHT has no scaling factor.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Hadamard.fwht_natural",
    "page": "Docstrings",
    "title": "Hadamard.fwht_natural",
    "category": "function",
    "text": "fwht_natural(X, dims=1:ndims(X))\n\nReturn the fast Walsh-Hadamard transform (WHT) of the array X along the dimensions dims (an integer, tuple, or array of dimensions, defaulting to all dimensions). Only power-of-two sizes (along the transformed dimensions) are supported.  The result is returned in the natural (Hadamard) ordering.\n\nOur WHT is normalized so that the forward transform has a 1/n coefficient (where n is the product of the transformed dimensions) and the inverse WHT has no scaling factor.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Hadamard.fwht_natural!",
    "page": "Docstrings",
    "title": "Hadamard.fwht_natural!",
    "category": "function",
    "text": "fwht_natural!(X, dims=1:ndims(X))\n\nSimilar to fwht_natural, but works in-place on the input array X.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Hadamard.hadamard-Tuple{Integer}",
    "page": "Docstrings",
    "title": "Hadamard.hadamard",
    "category": "method",
    "text": "hadamard(n)\n\nReturn a Hadamard matrix of order n.  The known Hadamard matrices up to size 256 are currently supported (via a lookup table), along with any size that factorizes into products of these known sizes and/or powers of two.\n\nThe return value is a matrix of Int8 values. If you want to do further matrix computations with this matrix, you may want to convert to Float64 first via float(hadamard(n)).\n\nYou can pretty-print a Hadamard matrix as a table of + and - (indicating the signs of the entries) via Hadamard.printsigns, e.g. Hadamard.printsigns(hadamard(28)) for the 28×28 Hadamard matrix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Hadamard.ifwht",
    "page": "Docstrings",
    "title": "Hadamard.ifwht",
    "category": "function",
    "text": "ifwht(X, dims=1:ndims(X))\n\nReturn the inverse fast Walsh-Hadamard transform (WHT) of the array X along the dimensions dims (an integer, tuple, or array of dimensions, defaulting to all dimensions). Only power-of-two sizes (along the transformed dimensions) are supported.  The result is returned in the sequency ordering.\n\nOur WHT is normalized so that the forward transform has a 1/n coefficient (where n is the product of the transformed dimensions) and the inverse WHT has no scaling factor.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Hadamard.ifwht_dyadic",
    "page": "Docstrings",
    "title": "Hadamard.ifwht_dyadic",
    "category": "function",
    "text": "ifwht_dyadic(X, dims=1:ndims(X))\n\nReturn the inverse fast Walsh-Hadamard transform (WHT) of the array X along the dimensions dims (an integer, tuple, or array of dimensions, defaulting to all dimensions). Only power-of-two sizes (along the transformed dimensions) are supported.  The result is returned in the dyadic (Paley, bit-reversed) ordering.\n\nOur WHT is normalized so that the forward transform has a 1/n coefficient (where n is the product of the transformed dimensions) and the inverse WHT has no scaling factor.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Hadamard.ifwht_natural",
    "page": "Docstrings",
    "title": "Hadamard.ifwht_natural",
    "category": "function",
    "text": "ifwht_natural(X, dims=1:ndims(X))\n\nReturn the inverse fast Walsh-Hadamard transform (WHT) of the array X along the dimensions dims (an integer, tuple, or array of dimensions, defaulting to all dimensions). Only power-of-two sizes (along the transformed dimensions) are supported.  The result is returned in the natural (Hadamard) ordering.\n\nOur WHT is normalized so that the forward transform has a 1/n coefficient (where n is the product of the transformed dimensions) and the inverse WHT has no scaling factor.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Hadamard.ifwht_natural!",
    "page": "Docstrings",
    "title": "Hadamard.ifwht_natural!",
    "category": "function",
    "text": "ifwht_natural!(X, dims=1:ndims(X))\n\nSimilar to ifwht_natural, but works in-place on the input array X.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Hadamard.printsigns-Tuple{IO,AbstractArray{#s33,2} where #s33<:Real}",
    "page": "Docstrings",
    "title": "Hadamard.printsigns",
    "category": "method",
    "text": "printsigns([io, ] A)\n\nPrint a table of + and - characters indicating the signs of the entries of A (with 0 for zero entries). The output stream io defaults to stdout.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Hadamard]\nOrder = [:type, :function]"
},

]}
