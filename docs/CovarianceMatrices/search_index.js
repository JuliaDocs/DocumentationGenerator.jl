var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#CovarianceMatrices.jl-1",
    "page": "Readme",
    "title": "CovarianceMatrices.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: CovarianceMatrices) (Image: Coverage Status) (Image: codecov.io)Heteroskedasticity and Autocorrelation Consistent Covariance Matrix Estimation for Julia."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "The package is registered on METADATA, so to installPkg.add(\"CovarianceMatrices\")"
},

{
    "location": "#Introduction-1",
    "page": "Readme",
    "title": "Introduction",
    "category": "section",
    "text": "This package provides types and methods useful to obtain consistent estimates of the long run covariance matrix of a random process.Three classes of estimators are considered:HAC - heteroskedasticity and autocorrelation consistent (Andrews, 1996; Newey and West, 1994)\nHC  - hetheroskedasticity (White, 1982)\nCRVE - cluster robust (Arellano, 1986)The typical application of these estimators is to conduct robust inference about parameters of a model. This is accomplished by extending methods defined in StatsBase.jl and GLM.jl."
},

{
    "location": "#Quick-tour-1",
    "page": "Readme",
    "title": "Quick tour",
    "category": "section",
    "text": ""
},

{
    "location": "#HAC-(Heteroskedasticity-and-Autocorrelation-Consistent)-1",
    "page": "Readme",
    "title": "HAC (Heteroskedasticity and Autocorrelation Consistent)",
    "category": "section",
    "text": "Available kernel types are:TruncatedKernel\nBartlettKernel\nParzenKernel\nTukeyHanningKernel\nQuadraticSpectralKernelFor example, ParzenKernel(NeweyWest) return an instance of TruncatedKernel parametrized by NeweyWest, the type that corresponds to the optimal bandwidth calculated following Newey and West (1994).  Similarly, ParzenKernel(Andrews) corresponds to the optimal bandwidth obtained in Andrews (1991). If the bandwidth is known, it can be directly passed, i.e. TruncatedKernel(2).The examples below clarify the API, that is however relatively easy to use."
},

{
    "location": "#Long-run-variance-of-the-regression-coefficient-1",
    "page": "Readme",
    "title": "Long run variance of the regression coefficient",
    "category": "section",
    "text": "In the regression context, the function vcov does all the work:vcov(::DataFrameRegressionModel, ::HAC; prewhite = true)Consider the following artificial data (a regression with autoregressive error component):using CovarianceMatrices\nusing DataFrames\nRandom.seed!(1)\nn = 500\nx = randn(n,5)\nu = Array{Float64}(2*n)\nu[1] = rand()\nfor j in 2:2*n\n    u[j] = 0.78*u[j-1] + randn()\nend\nu = u[n+1:2*n]    \ny = 0.1 + x*[0.2, 0.3, 0.0, 0.0, 0.5] + u            \n\ndf = DataFrame()\ndf[:y] = y\nfor j in enumerate([:x1, :x2, :x3, :x4, :x5])\n    df[j[2]] = x[:,j[1]]\nendUsing the data in df, the coefficient of the regression can be estimated using GLMlm1 = glm(y~x1+x2+x3+x4+x5, df, Normal(), IdentityLink())To get a consistent estimate of the long run variance of the estimated coefficients using a Quadratic Spectral kernel with automatic bandwidth selection  à la Andrewsvcov(lm1, QuadraticSpectralKernel(Andrews), prewhite = false)If one wants to estimate the long-time variance using the same kernel, but with a bandwidth selected à la Newey-Westvcov(lm1, QuadraticSpectralKernel(NeweyWest), prewhite = false)The standard errors can be obtained by the stderror methodstderror(::DataFrameRegressionModel, ::HAC; prewhite::Bool)Sometime is useful to access the bandwidth selected by the automatic procedures. This can be done using the optimalbw methodoptimalbw(NeweyWest, QuadraticSpectralKernel, lm1; prewhite = false)\noptimalbw(Andrews, QuadraticSpectralKernel, lm1; prewhite = false)"
},

{
    "location": "#Long-run-variance-of-the-average-of-the-process-1",
    "page": "Readme",
    "title": "Long run variance of the average of the process",
    "category": "section",
    "text": "Sometime interest lies in estimating the long-run variance of the average of the process. At the moment this can be done by carrying out a regression on a constant (the sample mean of the realization of the process) and using vcov or stderror to obtain a consistent variance estimate (or its diagonal elements).lm2 = glm(u~1, df, Normal(), IdentityLink())\nvcov(lm1, ParzenKernel(NeweyWest), prewhite = false)\nstderr(lm1, ParzenKernel(NeweyWest), prewhite = false)"
},

{
    "location": "#HC-(Heteroskedastic-consistent)-1",
    "page": "Readme",
    "title": "HC (Heteroskedastic consistent)",
    "category": "section",
    "text": "As in the HAC case, vcov and stderr are the main functions. They know get as argument the type of robust variance being soughtvcov(::DataFrameRegressionModel, ::HC)Where HC is an abstract type with the following concrete types:HC0\nHC1 (this is HC0 with the degree of freedom adjustment)\nHC2\nHC3\nHC4\nHC4m\nHC5using CovarianceMatrices\nusing DataFrames\nusing GLM\n\n# A Gamma example, from McCullagh & Nelder (1989, pp. 300-2)\n# The weights are added just to test the interface and are not part\n# of the original data\nclotting = DataFrame(\n    u    = log([5,10,15,20,30,40,60,80,100]),\n    lot1 = [118,58,42,35,27,25,21,19,18],\n    lot2 = [69,35,26,21,18,16,13,12,12],\n    w    = 9*[1/8, 1/9, 1/25, 1/6, 1/14, 1/25, 1/15, 1/13, 0.3022039]\n)\nwOLS = fit(GeneralizedLinearModel, lot1~u, clotting, Normal(), wts = array(clotting[:w]))\n\nvcov(wOLS, HC0\nvcov(wOLS, HC1)\nvcov(wOLS, HC2)\nvcov(wOLS, HC3)\nvcov(wOLS, HC4)\nvcov(wOLS, HC4m)\nvcov(wOLS, HC5)"
},

{
    "location": "#CRHC-(Cluster-robust-heteroskedasticty-consistent)-1",
    "page": "Readme",
    "title": "CRHC (Cluster robust heteroskedasticty consistent)",
    "category": "section",
    "text": "The API of this class of variance estimators is subject to change, so please use with care. The difficulty is that CRHC type needs to have access to the variable along which dimension the clustering mast take place. For the moment, the following approach works –- as long as no missing values are present in the original dataframe.using RDatasets\ndf = dataset(\"plm\", \"Grunfeld\")\nlm = glm(Inv~Value+Capital, df, Normal(), IdentityLink())\nvcov(lm, CRHC1(convert(Array, df[:Firm])))\nstderr(lm, CRHC1(convert(Array, df[:Firm])))"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [CovarianceMatrices]\nOrder = [:type, :function]"
},

]}
