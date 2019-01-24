var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#FMMLIB2D-1",
    "page": "Readme",
    "title": "FMMLIB2D",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status) (Image: FMMLIB2D)This is a Julia interface to the Fast Multipole Method (FMM) library FMMLIB2D by Leslie Greengard and Zydrunas Gimbutas.Documentation for the library can be found in the FMMLIB2D User\'s Guide.This package currently provides interfaces to the FMM\'s for Laplace (real and complex), Helmholtz, and complex sums:  rfmm2dpartself, rfmm2dparttarg, lfmm2dpartself, lfmm2dparttarg, hfmm2dparttarg, zfmm2dparttargThe most convenient way of calling them is through the Julia interfaces with keyword arguments, e.g. x = rand(2, 10)\ny = rand(2, 20)\nq = rand(10) + 1im*rand(10)\nU = lfmm2d(source=x, charge=q, target=y, ifgradtarg=true, tol=1e-9)"
},

{
    "location": "#Real-Laplace-FMM:-1",
    "page": "Readme",
    "title": "Real Laplace FMM:",
    "category": "section",
    "text": "U = rfmm2d(source::Array{Float64} = ...,\n           target::Array{Float64} = ...,\n           charge::Array{Float64} = ...,\n           dipstr::Array{Float64} = ...,\n           dipvec::Array{Float64} = ...,\n           tol::Float64 = ...,\n           ifpot::Bool = ...,\n           ifgrad::Bool = ...,\n           ifhess::Bool = ...,\n           ifpottarg::Bool = ...,\n           ifgradtarg::Bool = ...,\n           ifhesstarg::Bool = ...,\n           )Output format:U.pot      (Nsrc)\nU.grad     (2,Nsrc)\nU.hess     (3,Nsrc)\nU.pottarg  (Ntrg)\nU.gradtarg (2,Ntrg)\nU.hesstarg (3,Ntrg)"
},

{
    "location": "#Complex-Laplace-FMM:-1",
    "page": "Readme",
    "title": "Complex Laplace FMM:",
    "category": "section",
    "text": "U = lfmm2d(source::Array{Float64} = ...,\n           target::Array{Float64} = ...,\n           charge::Array{ComplexF64} = ...,\n           dipstr::Array{ComplexF64} = ...,\n           dipvec::Array{Float64} = ...,\n           tol::Float64 = ...,\n           ifpot::Bool = ...,\n           ifgrad::Bool = ...,\n           ifhess::Bool = ...,\n           ifpottarg::Bool = ...,\n           ifgradtarg::Bool = ...,\n           ifhesstarg::Bool = ...,\n           )Output format:U.pot      (Nsrc)\nU.grad     (2,Nsrc)\nU.hess     (3,Nsrc)\nU.pottarg  (Ntrg)\nU.gradtarg (2,Ntrg)\nU.hesstarg (3,Ntrg)"
},

{
    "location": "#Helmholtz-FMM:-1",
    "page": "Readme",
    "title": "Helmholtz FMM:",
    "category": "section",
    "text": "U = hfmm2d(source::Array{Float64} = ...,\n           target::Array{Float64} = ...,\n           charge::Array{ComplexF64} = ...,\n           dipstr::Array{ComplexF64} = ...,\n           dipvec::Array{Float64} = ...,\n           tol::Float64 = ...,\n           zk::ComplexF64 = ...,\n           ifpot::Bool = ...,\n           ifgrad::Bool = ...,\n           ifhess::Bool = ...,\n           ifpottarg::Bool = ...,\n           ifgradtarg::Bool = ...,\n           ifhesstarg::Bool = ...,\n           )Output format:U.pot      (Nsrc)\nU.grad     (2,Nsrc)\nU.hess     (3,Nsrc)\nU.pottarg  (Ntrg)\nU.gradtarg (2,Ntrg)\nU.hesstarg (3,Ntrg)"
},

{
    "location": "#Complex-FMM:-1",
    "page": "Readme",
    "title": "Complex FMM:",
    "category": "section",
    "text": "U = zfmm2d(source::Array{ComplexF64} = ...,\n           target::Array{ComplexF64} = ...,\n           dipstr::Array{ComplexF64} = ...,\n           tol::Float64 = 1e-15,\n           ifpot::Bool = true,\n           ifgrad::Bool = false,\n           ifhess::Bool = false,\n           ifpottarg::Bool = true,\n           ifgradtarg::Bool = false,\n           ifhesstarg::Bool = false\n           )Output format:U.pot      (Nsrc)\nU.grad     (Nsrc)\nU.hess     (Nsrc)\nU.pottarg  (Ntrg)\nU.gradtarg (Ntrg)\nU.hesstarg (Ntrg)"
},

{
    "location": "autodocs/#FMMLIB2D.hfmm2d-Tuple{}",
    "page": "Docstrings",
    "title": "FMMLIB2D.hfmm2d",
    "category": "method",
    "text": "U = hfmm2d(;source, target, charge, dipstr, dipvec, \n            tol, zk,\n            ifpot, ifgrad, ifhess,\n            ifpottarg, ifgradtarg, ifhesstarg)\n\nHelmholtz particle target FMM in R^2. Keyword interface.\n\nReturns: U::FMMLIB2D.FMMOutput\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FMMLIB2D.hfmm2dparttarg-Tuple{Int64,Complex{Float64},Array{Float64,N} where N,Int64,Array{Complex{Float64},N} where N,Int64,Array{Complex{Float64},N} where N,Array{Float64,N} where N,Int64,Int64,Int64,Array{Float64,N} where N,Int64,Int64,Int64}",
    "page": "Docstrings",
    "title": "FMMLIB2D.hfmm2dparttarg",
    "category": "method",
    "text": "pot, grad, hess, pottarg, gradtarg, hesstarg = \n    hfmm2dparttarg( iprec, zk, source, ifcharge, charge, \n                    ifdipole, dipstr, dipvec, \n                    ifpot, ifgrad, ifhess, \n                    target, ifpottarg, ifgradtarg, ifhesstarg)\n\nHelmholtz particle target FMM in R^2. Direct library interface.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FMMLIB2D.lfmm2d-Tuple{}",
    "page": "Docstrings",
    "title": "FMMLIB2D.lfmm2d",
    "category": "method",
    "text": "U = lfmm2d(;source, target, charge, dipstr, dipvec, tol,\n            ifpot, ifgrad, ifhess,\n            ifpottarg, ifgradtarg, ifhesstarg)\n\nLaplace particle target FMM in R^2 (complex). Keyword interface.\n\nReturns: U::FMMLIB2D.FMMOutput\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FMMLIB2D.lfmm2dpartself-Tuple{Int64,Array{Float64,N} where N,Int64,Array{Complex{Float64},N} where N,Int64,Array{Complex{Float64},N} where N,Array{Float64,N} where N,Int64,Int64,Int64}",
    "page": "Docstrings",
    "title": "FMMLIB2D.lfmm2dpartself",
    "category": "method",
    "text": "pot, grad, hess = \n    lfmm2dpartself( iprec, source, ifcharge, charge, ifdipole, dipstr, dipvec, \n                    ifpot, ifgrad, ifhess)\n\nLaplace particle FMM in R^2 (complex). Direct library interface.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FMMLIB2D.lfmm2dparttarg-Tuple{Int64,Array{Float64,N} where N,Int64,Array{Complex{Float64},N} where N,Int64,Array{Complex{Float64},N} where N,Array{Float64,N} where N,Int64,Int64,Int64,Array{Float64,N} where N,Int64,Int64,Int64}",
    "page": "Docstrings",
    "title": "FMMLIB2D.lfmm2dparttarg",
    "category": "method",
    "text": "pot, grad, hess, pottarg, gradtarg, hesstarg = \n    lfmm2dparttarg( iprec, source, ifcharge, charge, ifdipole, dipstr, dipvec, \n                    ifpot, ifgrad, ifhess, \n                    target, ifpottarg, ifgradtarg, ifhesstarg)\n\nLaplace particle target FMM in R^2 (complex). Direct library interface.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FMMLIB2D.rfmm2d-Tuple{}",
    "page": "Docstrings",
    "title": "FMMLIB2D.rfmm2d",
    "category": "method",
    "text": "U = rfmm2d(;source, target, charge, dipstr, dipvec, tol,\n            ifpot, ifgrad, ifhess,\n            ifpottarg, ifgradtarg, ifhesstarg)\n\nLaplace particle target FMM in R^2 (real). Keyword interface.\n\nReturns: U::FMMLIB2D.FMMOutput\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FMMLIB2D.rfmm2dpartself-Tuple{Int64,Array{Float64,N} where N,Int64,Array{Float64,N} where N,Int64,Array{Float64,N} where N,Array{Float64,N} where N,Int64,Int64,Int64}",
    "page": "Docstrings",
    "title": "FMMLIB2D.rfmm2dpartself",
    "category": "method",
    "text": "pot, grad, hess = \n    rfmm2dpartself( iprec, source, ifcharge, charge, ifdipole, dipstr, dipvec, \n                    ifpot, ifgrad, ifhess)\n\nLaplace particle FMM in R^2 (real). Direct library interface.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FMMLIB2D.rfmm2dparttarg-Tuple{Int64,Array{Float64,N} where N,Int64,Array{Float64,N} where N,Int64,Array{Float64,N} where N,Array{Float64,N} where N,Int64,Int64,Int64,Array{Float64,N} where N,Int64,Int64,Int64}",
    "page": "Docstrings",
    "title": "FMMLIB2D.rfmm2dparttarg",
    "category": "method",
    "text": "pot, grad, hess, pottarg, gradtarg, hesstarg = \n    rfmm2dparttarg( iprec, source, ifcharge, charge, ifdipole, dipstr, dipvec, \n                    ifpot, ifgrad, ifhess, \n                    target, ifpottarg, ifgradtarg, ifhesstarg)\n\nLaplace particle target FMM in R^2 (real). Direct library interface.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FMMLIB2D.zfmm2d-Tuple{}",
    "page": "Docstrings",
    "title": "FMMLIB2D.zfmm2d",
    "category": "method",
    "text": "U = zfmm2d(;source, target, dipstr, tol,\n            ifpot, ifgrad, ifhess,\n            ifpottarg, ifgradtarg, ifhesstarg)\n\nComplex particle target FMM in R^2. Keyword interface.\n\nReturns: U::FMMLIB2D.FMMOutput\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FMMLIB2D.zfmm2dparttarg-Tuple{Int64,Array{Complex{Float64},N} where N,Array{Complex{Float64},N} where N,Int64,Int64,Int64,Array{Complex{Float64},N} where N,Int64,Int64,Int64}",
    "page": "Docstrings",
    "title": "FMMLIB2D.zfmm2dparttarg",
    "category": "method",
    "text": "pot, grad, hess, pottarg, gradtarg, hesstarg = \n    zfmm2dparttarg(iprec,\n                    source,\n                    dipstr,\n                    ifpot,\n                    ifgrad,\n                    ifhess,\n                    target,\n                    ifpottarg,\n                    ifgradtarg,\n                    ifhesstarg)\n\nComplex particle target FMM in R^2. Direct library interface.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [FMMLIB2D]\nOrder = [:type, :function]"
},

]}
