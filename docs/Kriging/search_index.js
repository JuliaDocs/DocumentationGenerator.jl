var documenterSearchIndex = {"docs": [

{
    "location": "#Kriging.condsim",
    "page": "Home",
    "title": "Kriging.condsim",
    "category": "function",
    "text": "Conditional Gaussian simulation\n\nMethods\n\nKriging.krige(x0mat::Array{T,2} where T, X, Z::Array{T,1} where T, cov::Function) in Kriging : /home/sd/.julia/packages/Kriging/P42so/src/Kriging.jl:191\n\nArguments\n\nX : coordinates of the observation (conditioning) data\nZ::Array{T,1} where T : values for the observation (conditioning) data\ncov::Function : spatial covariance function\nx0mat::Array{T,2} where T : point coordinates at which to obtain kriging estimates\n\nReturns:\n\nconditional estimates at x0mat\n\n\n\n\n\n"
},

{
    "location": "#Kriging.estimationerror",
    "page": "Home",
    "title": "Kriging.estimationerror",
    "category": "function",
    "text": "Estimate kriging error\n\nMethods\n\nKriging.estimationerror(w::Array{T,1} where T, x0::Array{T,1} where T, X, cov::Function) in Kriging : /home/sd/.julia/packages/Kriging/P42so/src/Kriging.jl:334\nKriging.estimationerror(w::Array{T,1} where T, x0::Array{T,1} where T, X, covmat, covvec::Array{T,1} where T, cov0::Number) in Kriging : /home/sd/.julia/packages/Kriging/P42so/src/Kriging.jl:342\n\nArguments\n\nX : observation matrix\ncov0::Number : zero-separation covariance\ncov::Function : spatial covariance function\ncovmat : covariance matrix\ncovvec::Array{T,1} where T : covariance vector\nw::Array{T,1} where T : kriging weights\nx0::Array{T,1} where T : estimated locations\n\nReturns:\n\nestimation kriging error\n\n\n\n\n\n"
},

{
    "location": "#Kriging.expcov",
    "page": "Home",
    "title": "Kriging.expcov",
    "category": "function",
    "text": "Exponential spatial covariance function\n\nMethods\n\nKriging.expcov(h::Number, maxcov::Number, scale::Number) in Kriging : /home/sd/.julia/packages/Kriging/P42so/src/Kriging.jl:37\nKriging.expcov(h::Number, maxcov::Number, scale::Number, nugget::Number) in Kriging : /home/sd/.julia/packages/Kriging/P42so/src/Kriging.jl:37\n\nArguments\n\nh::Number : separation distance\nmaxcov::Number : maximum covariance\nnugget::Number : nugget\nscale::Number : scale\n\nReturns:\n\ncovariance\n\n\n\n\n\n"
},

{
    "location": "#Kriging.exponentialvariogram",
    "page": "Home",
    "title": "Kriging.exponentialvariogram",
    "category": "function",
    "text": "Exponential variogram\n\nMethods\n\nKriging.exponentialvariogram(h::Number, sill::Number, range::Number) in Kriging : /home/sd/.julia/packages/Kriging/P42so/src/Kriging.jl:90\nKriging.exponentialvariogram(h::Number, sill::Number, range::Number, nugget::Number) in Kriging : /home/sd/.julia/packages/Kriging/P42so/src/Kriging.jl:90\n\nArguments\n\nh::Number : separation distance\nnugget::Number : nugget\nrange::Number : range\nsill::Number : sill\n\nReturns:\n\nExponential variogram\n\n\n\n\n\n"
},

{
    "location": "#Kriging.gaussiancov",
    "page": "Home",
    "title": "Kriging.gaussiancov",
    "category": "function",
    "text": "Gaussian spatial covariance function\n\nMethods\n\nKriging.gaussiancov(h::Number, maxcov::Number, scale::Number) in Kriging : /home/sd/.julia/packages/Kriging/P42so/src/Kriging.jl:22\nKriging.gaussiancov(h::Number, maxcov::Number, scale::Number, nugget) in Kriging : /home/sd/.julia/packages/Kriging/P42so/src/Kriging.jl:22\n\nArguments\n\nh::Number : separation distance\nmaxcov::Number : maximum covariance\nnugget : nugget\nscale::Number : scale\n\nReturns:\n\ncovariance\n\n\n\n\n\n"
},

{
    "location": "#Kriging.gaussianvariogram-NTuple{4,Number}",
    "page": "Home",
    "title": "Kriging.gaussianvariogram",
    "category": "method",
    "text": "Gaussian variogram\n\nMethods\n\nKriging.gaussianvariogram(h::Number, sill::Number, range::Number, nugget::Number) in Kriging : /home/sd/.julia/packages/Kriging/P42so/src/Kriging.jl:111\n\nArguments\n\nh::Number : separation distance\nnugget::Number : nugget\nrange::Number : range\nsill::Number : sill\n\nReturns:\n\nGaussian variogram\n\n\n\n\n\n"
},

{
    "location": "#Kriging.getcovmat-Tuple{Any,Function}",
    "page": "Home",
    "title": "Kriging.getcovmat",
    "category": "method",
    "text": "Get spatial covariance matrix\n\nMethods\n\nKriging.getcovmat(X, cov::Function) in Kriging : /home/sd/.julia/packages/Kriging/P42so/src/Kriging.jl:296\n\nArguments\n\nX : matrix with coordinates of the data points (x or y)\ncov::Function : spatial covariance function\n\nReturns:\n\nspatial covariance matrix\n\n\n\n\n\n"
},

{
    "location": "#Kriging.getcovvec!-Tuple{Any,Array{T,1} where T,Any,Function}",
    "page": "Home",
    "title": "Kriging.getcovvec!",
    "category": "method",
    "text": "Get spatial covariance vector\n\nMethods\n\nKriging.getcovvec!(covvec, x0::Array{T,1} where T, X, cov::Function) in Kriging : /home/sd/.julia/packages/Kriging/P42so/src/Kriging.jl:322\n\nArguments\n\nX : matrix with coordinates of the data points\ncov::Function : spatial covariance function\ncovvec : spatial covariance vector\nx0::Array{T,1} where T : vector with coordinates of the estimation points (x or y)\n\nReturns:\n\nspatial covariance vector\n\n\n\n\n\n"
},

{
    "location": "#Kriging.getgridpoints",
    "page": "Home",
    "title": "Kriging.getgridpoints",
    "category": "function",
    "text": "Get grid points\n\nMethods\n\nKriging.getgridpoints(xs, ys) in Kriging : /home/sd/.julia/packages/Kriging/P42so/src/Kriging.jl:363\nKriging.getgridpoints(xs, ys, zs) in Kriging : /home/sd/.julia/packages/Kriging/P42so/src/Kriging.jl:376\n\nArguments\n\nxs : x-axis grid coordinates\nys : y-axis grid coordinates\nzs : z-axis grid coordinates\n\nReturns:\n\ngrid points\n\n\n\n\n\n"
},

{
    "location": "#Kriging.krige-Tuple{Array{T,2} where T,Any,Array{T,1} where T,Function}",
    "page": "Home",
    "title": "Kriging.krige",
    "category": "method",
    "text": "Ordinary Kriging\n\nMethods\n\nKriging.krige(x0mat::Array{T,2} where T, X, Z::Array{T,1} where T, cov::Function) in Kriging : /home/sd/.julia/packages/Kriging/P42so/src/Kriging.jl:191\n\nArguments\n\nX : coordinates of the observation (conditioning) data\nZ::Array{T,1} where T : values for the observation (conditioning) data\ncov::Function : spatial covariance function\nx0mat::Array{T,2} where T : point coordinates at which to obtain kriging estimates\n\nReturns:\n\nkriging estimates at x0mat\n\n\n\n\n\n"
},

{
    "location": "#Kriging.krigevariance-Tuple{Array{T,2} where T,Any,Array{T,1} where T,Function}",
    "page": "Home",
    "title": "Kriging.krigevariance",
    "category": "method",
    "text": "Ordinary Kriging plus variance\n\nMethods\n\nKriging.krige(x0mat::Array{T,2} where T, X, Z::Array{T,1} where T, cov::Function) in Kriging : /home/sd/.julia/packages/Kriging/P42so/src/Kriging.jl:191\n\nArguments\n\nX : coordinates of the observation (conditioning) data\nZ::Array{T,1} where T : values for the observation (conditioning) data\ncov::Function : spatial covariance function\nx0mat::Array{T,2} where T : point coordinates at which to obtain kriging estimates\n\nReturns:\n\nkriging estimates at x0mat\nvariance estimates at x0mat\n\n\n\n\n\n"
},

{
    "location": "#Kriging.simplekrige-Tuple{Any,Array{T,2} where T,Array{T,2} where T,Array{T,1} where T,Function}",
    "page": "Home",
    "title": "Kriging.simplekrige",
    "category": "method",
    "text": "Simple Kriging\n\nMethods\n\nKriging.simplekrige(mu, x0mat::Array{T,2} where T, X::Array{T,2} where T, Z::Array{T,1} where T, cov::Function) in Kriging : /home/sd/.julia/packages/Kriging/P42so/src/Kriging.jl:160\n\nArguments\n\nX::Array{T,2} where T : coordinates of the observation (conditioning) data\nZ::Array{T,1} where T : values for the observation (conditioning) data\ncov::Function : spatial covariance function\nmu\nx0mat::Array{T,2} where T : point coordinates at which to obtain kriging estimates\n\nReturns:\n\nkriging estimates at x0mat\n\n\n\n\n\n"
},

{
    "location": "#Kriging.sphericalcov",
    "page": "Home",
    "title": "Kriging.sphericalcov",
    "category": "function",
    "text": "Spherical spatial covariance function\n\nMethods\n\nKriging.sphericalcov(h::Number, maxcov::Number, scale::Number) in Kriging : /home/sd/.julia/packages/Kriging/P42so/src/Kriging.jl:52\nKriging.sphericalcov(h::Number, maxcov::Number, scale::Number, nugget::Number) in Kriging : /home/sd/.julia/packages/Kriging/P42so/src/Kriging.jl:52\n\nArguments\n\nh::Number : separation distance\nmaxcov::Number : max covariance\nnugget::Number : nugget\nscale::Number : scale\n\nReturns:\n\ncovariance\n\n\n\n\n\n"
},

{
    "location": "#Kriging.sphericalvariogram",
    "page": "Home",
    "title": "Kriging.sphericalvariogram",
    "category": "function",
    "text": "Spherical variogram\n\nMethods\n\nKriging.sphericalvariogram(h::Number, sill::Number, range::Number) in Kriging : /home/sd/.julia/packages/Kriging/P42so/src/Kriging.jl:67\nKriging.sphericalvariogram(h::Number, sill::Number, range::Number, nugget::Number) in Kriging : /home/sd/.julia/packages/Kriging/P42so/src/Kriging.jl:67\n\nArguments\n\nh::Number : separation distance\nnugget::Number : nugget\nrange::Number : range\nsill::Number : sill\n\nReturns:\n\nSpherical variogram\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Kriging]\nOrder = [:type, :function]"
},

]}
