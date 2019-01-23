var documenterSearchIndex = {"docs": [

{
    "location": "#FMMLIB2D.hfmm2d-Tuple{}",
    "page": "Home",
    "title": "FMMLIB2D.hfmm2d",
    "category": "method",
    "text": "U = hfmm2d(;source, target, charge, dipstr, dipvec, \n            tol, zk,\n            ifpot, ifgrad, ifhess,\n            ifpottarg, ifgradtarg, ifhesstarg)\n\nHelmholtz particle target FMM in R^2. Keyword interface.\n\nReturns: U::FMMLIB2D.FMMOutput\n\n\n\n\n\n"
},

{
    "location": "#FMMLIB2D.hfmm2dparttarg-Tuple{Int64,Complex{Float64},Array{Float64,N} where N,Int64,Array{Complex{Float64},N} where N,Int64,Array{Complex{Float64},N} where N,Array{Float64,N} where N,Int64,Int64,Int64,Array{Float64,N} where N,Int64,Int64,Int64}",
    "page": "Home",
    "title": "FMMLIB2D.hfmm2dparttarg",
    "category": "method",
    "text": "pot, grad, hess, pottarg, gradtarg, hesstarg = \n    hfmm2dparttarg( iprec, zk, source, ifcharge, charge, \n                    ifdipole, dipstr, dipvec, \n                    ifpot, ifgrad, ifhess, \n                    target, ifpottarg, ifgradtarg, ifhesstarg)\n\nHelmholtz particle target FMM in R^2. Direct library interface.\n\n\n\n\n\n"
},

{
    "location": "#FMMLIB2D.lfmm2d-Tuple{}",
    "page": "Home",
    "title": "FMMLIB2D.lfmm2d",
    "category": "method",
    "text": "U = lfmm2d(;source, target, charge, dipstr, dipvec, tol,\n            ifpot, ifgrad, ifhess,\n            ifpottarg, ifgradtarg, ifhesstarg)\n\nLaplace particle target FMM in R^2 (complex). Keyword interface.\n\nReturns: U::FMMLIB2D.FMMOutput\n\n\n\n\n\n"
},

{
    "location": "#FMMLIB2D.lfmm2dpartself-Tuple{Int64,Array{Float64,N} where N,Int64,Array{Complex{Float64},N} where N,Int64,Array{Complex{Float64},N} where N,Array{Float64,N} where N,Int64,Int64,Int64}",
    "page": "Home",
    "title": "FMMLIB2D.lfmm2dpartself",
    "category": "method",
    "text": "pot, grad, hess = \n    lfmm2dpartself( iprec, source, ifcharge, charge, ifdipole, dipstr, dipvec, \n                    ifpot, ifgrad, ifhess)\n\nLaplace particle FMM in R^2 (complex). Direct library interface.\n\n\n\n\n\n"
},

{
    "location": "#FMMLIB2D.lfmm2dparttarg-Tuple{Int64,Array{Float64,N} where N,Int64,Array{Complex{Float64},N} where N,Int64,Array{Complex{Float64},N} where N,Array{Float64,N} where N,Int64,Int64,Int64,Array{Float64,N} where N,Int64,Int64,Int64}",
    "page": "Home",
    "title": "FMMLIB2D.lfmm2dparttarg",
    "category": "method",
    "text": "pot, grad, hess, pottarg, gradtarg, hesstarg = \n    lfmm2dparttarg( iprec, source, ifcharge, charge, ifdipole, dipstr, dipvec, \n                    ifpot, ifgrad, ifhess, \n                    target, ifpottarg, ifgradtarg, ifhesstarg)\n\nLaplace particle target FMM in R^2 (complex). Direct library interface.\n\n\n\n\n\n"
},

{
    "location": "#FMMLIB2D.rfmm2d-Tuple{}",
    "page": "Home",
    "title": "FMMLIB2D.rfmm2d",
    "category": "method",
    "text": "U = rfmm2d(;source, target, charge, dipstr, dipvec, tol,\n            ifpot, ifgrad, ifhess,\n            ifpottarg, ifgradtarg, ifhesstarg)\n\nLaplace particle target FMM in R^2 (real). Keyword interface.\n\nReturns: U::FMMLIB2D.FMMOutput\n\n\n\n\n\n"
},

{
    "location": "#FMMLIB2D.rfmm2dpartself-Tuple{Int64,Array{Float64,N} where N,Int64,Array{Float64,N} where N,Int64,Array{Float64,N} where N,Array{Float64,N} where N,Int64,Int64,Int64}",
    "page": "Home",
    "title": "FMMLIB2D.rfmm2dpartself",
    "category": "method",
    "text": "pot, grad, hess = \n    rfmm2dpartself( iprec, source, ifcharge, charge, ifdipole, dipstr, dipvec, \n                    ifpot, ifgrad, ifhess)\n\nLaplace particle FMM in R^2 (real). Direct library interface.\n\n\n\n\n\n"
},

{
    "location": "#FMMLIB2D.rfmm2dparttarg-Tuple{Int64,Array{Float64,N} where N,Int64,Array{Float64,N} where N,Int64,Array{Float64,N} where N,Array{Float64,N} where N,Int64,Int64,Int64,Array{Float64,N} where N,Int64,Int64,Int64}",
    "page": "Home",
    "title": "FMMLIB2D.rfmm2dparttarg",
    "category": "method",
    "text": "pot, grad, hess, pottarg, gradtarg, hesstarg = \n    rfmm2dparttarg( iprec, source, ifcharge, charge, ifdipole, dipstr, dipvec, \n                    ifpot, ifgrad, ifhess, \n                    target, ifpottarg, ifgradtarg, ifhesstarg)\n\nLaplace particle target FMM in R^2 (real). Direct library interface.\n\n\n\n\n\n"
},

{
    "location": "#FMMLIB2D.zfmm2d-Tuple{}",
    "page": "Home",
    "title": "FMMLIB2D.zfmm2d",
    "category": "method",
    "text": "U = zfmm2d(;source, target, dipstr, tol,\n            ifpot, ifgrad, ifhess,\n            ifpottarg, ifgradtarg, ifhesstarg)\n\nComplex particle target FMM in R^2. Keyword interface.\n\nReturns: U::FMMLIB2D.FMMOutput\n\n\n\n\n\n"
},

{
    "location": "#FMMLIB2D.zfmm2dparttarg-Tuple{Int64,Array{Complex{Float64},N} where N,Array{Complex{Float64},N} where N,Int64,Int64,Int64,Array{Complex{Float64},N} where N,Int64,Int64,Int64}",
    "page": "Home",
    "title": "FMMLIB2D.zfmm2dparttarg",
    "category": "method",
    "text": "pot, grad, hess, pottarg, gradtarg, hesstarg = \n    zfmm2dparttarg(iprec,\n                    source,\n                    dipstr,\n                    ifpot,\n                    ifgrad,\n                    ifhess,\n                    target,\n                    ifpottarg,\n                    ifgradtarg,\n                    ifhesstarg)\n\nComplex particle target FMM in R^2. Direct library interface.\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [FMMLIB2D]\nOrder = [:type, :function]"
},

]}
