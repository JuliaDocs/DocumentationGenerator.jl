var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#KernelEstimator-1",
    "page": "Readme",
    "title": "KernelEstimator",
    "category": "section",
    "text": "Linux: (Image: Build Status)The Julia package for nonparametric kernel density estimate and regression. This package currently includes univariate kernel density estimate, local constant regression (Nadaraya-Watson regression) and local linear regression. It can also compute the Bootstrap confidence band [4].This package provides Gamma and Beta kernel to deal with bounded density estimation and regression. These two kernels are free of boundary bias for one side and two sides bounded data respectively, see [2, 3]. In particular, this package provide least square cross validation (LSCV) bandwidth selection functions for Gamma and Beta kernels.Bandwidth selection is critical in kernel estimation. LSCV is always recommended. Likelihood cross validation is provided but should be avoided because of known drawbacks. For regression problem, the bandwidth of local constant regression is selected using LSCV while that for local linear regression is chosen by AIC [6].To install and use this package in Julia,Pkg.add(\"KernelEstimator\")\nusing KernelEstimatorSee usage under examples/ directory.This package calculate densities via direct approach, i.e. adding kernel functions together. To define new kernel, you need to define a new function takes the same arguments as gaussiankernel and output the kernel weights at given point. If no bandwidth selection function is provided, lscv with numeric integration will be used by default."
},

{
    "location": "#Functions-1",
    "page": "Readme",
    "title": "Functions",
    "category": "section",
    "text": "This package provides two major functions, kerneldensity for kernel density estimation and npr for nonparametric regression. For kernel density, you can simply usexdata = randn(1000)\nkerneldensity(xdata)or specify some optionsxeval = linspace(-3, 3, 100)\nbw = bwlscv(xdata, gaussiankernel)\nkerneldensity(xdata, xeval=xeval, lb=-Inf, ub=Inf, kernel=gaussiankernel,h = bw)xeval specifies the position you want to evaluate the density at. Default to be the same as xdata. lb and ub means lower bound and upper bound of the data. If you specify either of them to be some finite value, user choice of kernel function will be suppressed and gammakernel will be used with a warning. If you specify both, betakernel is used with a warning if user\'s choice is different.For kernel regression, you can usex = rand(Beta(4,2), 500) * 10\ny=2 .* x.^2 + x .* rand(Normal(0, 5), 500)\nnpr(x, y)or change the default bynpr(x, y, xeval=x, reg=locallinear, kernel=betakernel,lb=0.0, ub=10.0)reg specifies the order of local polynomial regression. You can choose localconstant, local constant regression or locallinear, local linear regression. locallinear has better theoretical properties in prediction y and is used by default but is more computing intensive.There is also a function computing the bootstrap confidence interval for regression.bootstrapCB(x, y; xeval=x, B=500, reg=locallinear, lb=-Inf, ub=Inf, kernel=gaussiankernel)B specifies the number of bootstrap sampling.The following functions are also provided:localconstant(xdata::RealVector, ydata::RealVector; xeval::RealVector=xdata, kernel::Function=gaussiankernel, h::Real=bwlocalconstant(xdata,ydata,kernel)), local constant regression (or Nadaraya-Watson)\nlocallinear(xdata::RealVector, ydata::RealVector; xeval::RealVector=xdata, kernel::Function=gaussiankernel, h::Real=bwlocalconstant(xdata,ydata,kernel)),  local linear regressionand bandwidth selection functions:bwnormal(xdata::Vector), bandwidth selection for density estimate by referencing to normal distribution\nbwlscv(xdata::RealVector, kernel::Function), bandwidth selection for density estimate by least square cross validation\nbwlcv(xdata::RealVector, kernel::Function), bandwidth selection for density estimate by likelihood cross validation\nbwlocalconstant(xdata, ydata::Vector, kernel), bandwidth selection for local constant regression using LSCV\nbwlocallinear(xdata, ydata::Vector, kernel), bandwidth selection for local linear regression using corrected AIC. See reference [6]The meaning of arguments:xeval is the point(s) where the density or fitted value is calculated\nxdata is the input X\nydata is the response vector y; should have same length with xdata\nreg is the regression function, localconstant or locallinear\nkernel defaults to be gaussiankernel; should be a function\nh is the bandwidth, should be a real scalar; If negative, the default bandwidth selection method will be used to find the bandwidth and replace it\nlb, ub are the boundary for x. Must provide if use Beta or Gamma kernel"
},

{
    "location": "#Demos-1",
    "page": "Readme",
    "title": "Demos",
    "category": "section",
    "text": "Kernel density estimate    using Distributions\n    x=rand(Normal(), 500)\n    xeval=linspace(minimum(x), maximum(x), 100)\n    den=kerneldensity(x, xeval=xeval)Local regression	y=2 .* x.^2 + rand(Normal(), 500)\n	yfit0=localconstant(x, y, xeval=xeval)\n	yfit1=locallinear(x, y, xeval=xeval)\n	yfit0=npr(x, y, xeval=xeval, reg=localconstant)\n	yfit1=npr(x, y, xeval=xeval, reg=locallinear)Confidence Band\n cb=bootstrapCB(x, y, xeval=xeval)\n using Gadfly\n plot(layer(x=x, y=y, Geom.point), layer(x=xeval, y=yfit1, Geom.line, Theme(default_color=color(\"black\"))),\n   layer(x = xeval, y = cb[1,:], Geom.line, Theme(default_color=color(\"red\"))),\n   layer(x=xeval, y=cb[2,:], Geom.line, Theme(default_color=color(\"red\"))))"
},

{
    "location": "#Reference-1",
    "page": "Readme",
    "title": "Reference",
    "category": "section",
    "text": "[1] Lecture notes from Dr. Song Xi Chen\n[2] Chen, Song Xi. \"Beta kernel estimators for density functions.\" Computational Statistics & Data Analysis 31, no. 2 (1999): 131-145.\n[3] Chen, Song Xi. \"Probability density function estimation using gamma kernels.\" Annals of the Institute of Statistical Mathematics 52, no. 3 (2000): 471-480.\n[4] W. Hardle and J. S. Marron (1991). Bootstrap Simultaneous Error Bars for Nonparametric Regression. The Annals of Statistics. Vol. 19, No. 2 (Jun., 1991), pp. 778-796\n[5] W.Hardle and E. Mammen (1993). Comparing Nonparametric Versus Parametric Regression Fits. The Annals of Statistics. Vol. 21, No. 4 (Dec., 1993), pp. 1926-1947\n[6] Clifford M. Hurvich, Jeffrey S. Simonoff and Chih-Ling Tsai (1998). Smoothing Parameter Selection in Nonparametric Regression Using an Improved Akaike Information Criterion. Journal of the Royal Statistical Society. Series B (Statistical Methodology), Vol. 60, No. 2 (1998), pp. 271-293"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [KernelEstimator]\nOrder = [:type, :function]"
},

]}
