var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "AverageShiftedHistograms.jl",
    "title": "AverageShiftedHistograms.jl",
    "category": "page",
    "text": ""
},

{
    "location": "#AverageShiftedHistograms.jl-1",
    "page": "AverageShiftedHistograms.jl",
    "title": "AverageShiftedHistograms.jl",
    "category": "section",
    "text": "An Average Shifted Histogram (ASH) estimator is essentially a kernel density calculated with a fine-partition histogram.<img width = 700 src = \"https://cloud.githubusercontent.com/assets/8075494/17938441/ce8815e4-69da-11e6-8f19-33052e2ef21e.gif\">"
},

{
    "location": "#AverageShiftedHistograms.ash",
    "page": "AverageShiftedHistograms.jl",
    "title": "AverageShiftedHistograms.ash",
    "category": "function",
    "text": "Univariate Ash\n\nash(x; kw...)\n\nFit an average shifted histogram to data x.  Keyword options are:\n\nrng    : values over which the density will be estimated\nm      : Number of adjacent histograms to smooth over\nkernel : kernel used to smooth the estimate\n\nBivariate Ash\n\nash(x, y; kw...)\n\nFit a bivariate averaged shifted histogram to data vectors x and y.  Keyword options are:\n\nrngx    : x values where density will be estimated\nrngy    : y values where density will be estimated\nmx      : smoothing parameter in x direction\nmy      : smoothing parameter in y direction\nkernelx : kernel in x direction\nkernely : kernel in y direction\n\nMutating an Ash object\n\nAsh objectes can be updated with new data, smoothing parameter(s), or kernel(s).  They cannot, however, change the ranges over which the density is estimated.  It is therefore suggested to err on the side of caution when choosing data endpoints.\n\n# univariate\nash!(obj; kw...)\nash!(obj, newx, kw...)\n\n# bivariate\nash!(obj; kw...)\nash!(obj, newx, newy; kw...)\n\n\n\n\n\n"
},

{
    "location": "#Usage-1",
    "page": "AverageShiftedHistograms.jl",
    "title": "Usage",
    "category": "section",
    "text": "The main function exported by AverageShiftedHistograms is ash.ash"
},

{
    "location": "#Univariate-Example-1",
    "page": "AverageShiftedHistograms.jl",
    "title": "Univariate Example",
    "category": "section",
    "text": "using AverageShiftedHistograms\nusing Plots; gr()\n\ny = randn(100_000)\n\no = ash(y; rng = -5:.1:5)\n\nxy(o)  # return (rng, density)\n\nplot(o)(Image: )plot(o; hist = false)(Image: )# BEWARE OVERSMOOTHING!\no = ash(y; rng = -5:.1:5, m = 20)\nplot(o)(Image: )"
},

{
    "location": "#Bivariate-Example-1",
    "page": "AverageShiftedHistograms.jl",
    "title": "Bivariate Example",
    "category": "section",
    "text": "using AverageShiftedHistograms\nusing Plots; pyplot()\n\nx = randn(10_000)\ny = x + randn(10_000)\n\no = ash(x, y)\n\nplot(o)(Image: )"
},

{
    "location": "#AverageShiftedHistograms.Kernels",
    "page": "AverageShiftedHistograms.jl",
    "title": "AverageShiftedHistograms.Kernels",
    "category": "module",
    "text": "The Kernels module defines a collection of kernels to avoid namespace collisions:\n\nbiweight\ncosine\nepanechnikov\ntriangular\ntricube\ntriweight\nuniform\ngaussian\nlogistic\n\n\n\n\n\n"
},

{
    "location": "#Kernel-Functions-1",
    "page": "AverageShiftedHistograms.jl",
    "title": "Kernel Functions",
    "category": "section",
    "text": "Any nonnegative symmetric function can be provided to ash to be used as a kernel.  The function does not need to be normalized (integrate to 1) as the fitting procedure takes care of this.Kernels(Image: )"
},

{
    "location": "api/#",
    "page": "API",
    "title": "API",
    "category": "page",
    "text": ""
},

{
    "location": "api/#AverageShiftedHistograms.ash!-Tuple{AverageShiftedHistograms.Ash}",
    "page": "API",
    "title": "AverageShiftedHistograms.ash!",
    "category": "method",
    "text": "ash!(o::Ash; kw...)\nash!(o::Ash, newdata; kw...)\n\nUpdate an Ash estimate with new data, smoothing parameter (keyword m), or kernel (keyword kernel):\n\n\n\n\n\n"
},

{
    "location": "api/#AverageShiftedHistograms.ash-Tuple{AbstractArray}",
    "page": "API",
    "title": "AverageShiftedHistograms.ash",
    "category": "method",
    "text": "Univariate Ash\n\nash(x; kw...)\n\nFit an average shifted histogram to data x.  Keyword options are:\n\nrng    : values over which the density will be estimated\nm      : Number of adjacent histograms to smooth over\nkernel : kernel used to smooth the estimate\n\nBivariate Ash\n\nash(x, y; kw...)\n\nFit a bivariate averaged shifted histogram to data vectors x and y.  Keyword options are:\n\nrngx    : x values where density will be estimated\nrngy    : y values where density will be estimated\nmx      : smoothing parameter in x direction\nmy      : smoothing parameter in y direction\nkernelx : kernel in x direction\nkernely : kernel in y direction\n\nMutating an Ash object\n\nAsh objectes can be updated with new data, smoothing parameter(s), or kernel(s).  They cannot, however, change the ranges over which the density is estimated.  It is therefore suggested to err on the side of caution when choosing data endpoints.\n\n# univariate\nash!(obj; kw...)\nash!(obj, newx, kw...)\n\n# bivariate\nash!(obj; kw...)\nash!(obj, newx, newy; kw...)\n\n\n\n\n\n"
},

{
    "location": "api/#AverageShiftedHistograms.extendrange",
    "page": "API",
    "title": "AverageShiftedHistograms.extendrange",
    "category": "function",
    "text": "extendrange(x, s = .5, n = 200)\n\nCreate a LinSpace of length n starting at s standard deviations below minimum(x) and ending at s standard deviations above maximum(x)\n\n\n\n\n\n"
},

{
    "location": "api/#AverageShiftedHistograms.nout-Tuple{AverageShiftedHistograms.Ash}",
    "page": "API",
    "title": "AverageShiftedHistograms.nout",
    "category": "method",
    "text": "return the number of observations that fell outside of the histogram range\n\n\n\n\n\n"
},

{
    "location": "api/#AverageShiftedHistograms.xy-Tuple{AverageShiftedHistograms.Ash}",
    "page": "API",
    "title": "AverageShiftedHistograms.xy",
    "category": "method",
    "text": "return the range and density of a univariate ASH\n\n\n\n\n\n"
},

{
    "location": "api/#AverageShiftedHistograms.xyz-Tuple{AverageShiftedHistograms.Ash2}",
    "page": "API",
    "title": "AverageShiftedHistograms.xyz",
    "category": "method",
    "text": "return ranges and density of biviariate ASH\n\n\n\n\n\n"
},

{
    "location": "api/#StatsBase.nobs-Tuple{AverageShiftedHistograms.Ash}",
    "page": "API",
    "title": "StatsBase.nobs",
    "category": "method",
    "text": "return the number of observations\n\n\n\n\n\n"
},

{
    "location": "api/#AverageShiftedHistograms.cdf-Tuple{AverageShiftedHistograms.Ash,Real}",
    "page": "API",
    "title": "AverageShiftedHistograms.cdf",
    "category": "method",
    "text": "cdf(o::Ash, x::Real)\n\nReturn the estimated cumulative density at the point x.\n\n\n\n\n\n"
},

{
    "location": "api/#AverageShiftedHistograms.histdensity-Tuple{AverageShiftedHistograms.Ash}",
    "page": "API",
    "title": "AverageShiftedHistograms.histdensity",
    "category": "method",
    "text": "return the histogram values as a density (intergrates to 1)\n\n\n\n\n\n"
},

{
    "location": "api/#AverageShiftedHistograms.pdf-Tuple{AverageShiftedHistograms.Ash,Real}",
    "page": "API",
    "title": "AverageShiftedHistograms.pdf",
    "category": "method",
    "text": "pdf(o::Ash, x::Real)\n\nReturn the estimated density at the point x.\n\n\n\n\n\n"
},

{
    "location": "api/#API-1",
    "page": "API",
    "title": "API",
    "category": "section",
    "text": "Modules = [AverageShiftedHistograms]"
},

]}
