var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Kriging-1",
    "page": "Readme",
    "title": "Kriging",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status)Gaussian process regressions and simulations. Kriging is a module of MADS."
},

{
    "location": "#MADS-1",
    "page": "Readme",
    "title": "MADS",
    "category": "section",
    "text": "MADS (Model Analysis & Decision Support) is an integrated open-source high-performance computational (HPC) framework in Julia. MADS can execute a wide range of data- and model-based analyses:Sensitivity Analysis\nParameter Estimation\nModel Inversion and Calibration\nUncertainty Quantification\nModel Selection and Model Averaging\nModel Reduction and Surrogate Modeling\nMachine Learning and Blind Source Separation\nDecision Analysis and SupportMADS has been tested to perform HPC simulations on a wide-range multi-processor clusters and parallel environments (Moab, Slurm, etc.). MADS utilizes adaptive rules and techniques which allows the analyses to be performed with a minimum user input. The code provides a series of alternative algorithms to execute each type of data- and model-based analyses."
},

{
    "location": "#Documentation-1",
    "page": "Readme",
    "title": "Documentation",
    "category": "section",
    "text": "All the available MADS modules and functions are described at madsjulia.github.io"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Pkg.add(\"Mads\")"
},

{
    "location": "#Installation-behind-a-firewall-1",
    "page": "Readme",
    "title": "Installation behind a firewall",
    "category": "section",
    "text": "Julia uses git for the package management. To install Julia packages behind a firewall, add the following lines in the .gitconfig file in your home directory:[url \"https://\"]\n        insteadOf = git://or execute:git config --global url.\"https://\".insteadOf git://Set proxies:export ftp_proxy=http://proxyout.<your_site>:8080\nexport rsync_proxy=http://proxyout.<your_site>:8080\nexport http_proxy=http://proxyout.<your_site>:8080\nexport https_proxy=http://proxyout.<your_site>:8080\nexport no_proxy=.<your_site>For example, if you are doing this at LANL, you will need to execute the following lines in your bash command-line environment:export ftp_proxy=http://proxyout.lanl.gov:8080\nexport rsync_proxy=http://proxyout.lanl.gov:8080\nexport http_proxy=http://proxyout.lanl.gov:8080\nexport https_proxy=http://proxyout.lanl.gov:8080\nexport no_proxy=.lanl.gov"
},

{
    "location": "#MADS-examples-1",
    "page": "Readme",
    "title": "MADS examples",
    "category": "section",
    "text": "In Julia REPL, do the following commands:import MadsTo explore getting-started instructions, execute:Mads.help()There are various examples located in the examples directory of the Mads repository.For example, executeinclude(Mads.madsdir * \"/../examples/contamination/contamination.jl\")to perform various example analyses related to groundwater contaminant transport, or executeinclude(Mads.madsdir * \"/../examples/bigdt/bigdt.jl\")to perform Bayesian Information Gap Decision Theory (BIG-DT) analysis."
},

{
    "location": "#Developers-1",
    "page": "Readme",
    "title": "Developers",
    "category": "section",
    "text": "Daniel O\'Malley (publications)\nVelimir (monty) Vesselinov (publications)\nsee also"
},

{
    "location": "#Publications,-Presentations,-Projects-1",
    "page": "Readme",
    "title": "Publications, Presentations, Projects",
    "category": "section",
    "text": "mads.lanl.gov\nees.lanl.gov/monty"
},

{
    "location": "autodocs/#Kriging.condsim",
    "page": "Docstrings",
    "title": "Kriging.condsim",
    "category": "function",
    "text": "Conditional Gaussian simulation\n\nMethods\n\nKriging.krige(x0mat::Array{T,2} where T, X, Z::Array{T,1} where T, cov::Function) in Kriging : /root/.julia/packages/Kriging/P42so/src/Kriging.jl:191\n\nArguments\n\nX : coordinates of the observation (conditioning) data\nZ::Array{T,1} where T : values for the observation (conditioning) data\ncov::Function : spatial covariance function\nx0mat::Array{T,2} where T : point coordinates at which to obtain kriging estimates\n\nReturns:\n\nconditional estimates at x0mat\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Kriging.estimationerror",
    "page": "Docstrings",
    "title": "Kriging.estimationerror",
    "category": "function",
    "text": "Estimate kriging error\n\nMethods\n\nKriging.estimationerror(w::Array{T,1} where T, x0::Array{T,1} where T, X, cov::Function) in Kriging : /root/.julia/packages/Kriging/P42so/src/Kriging.jl:334\nKriging.estimationerror(w::Array{T,1} where T, x0::Array{T,1} where T, X, covmat, covvec::Array{T,1} where T, cov0::Number) in Kriging : /root/.julia/packages/Kriging/P42so/src/Kriging.jl:342\n\nArguments\n\nX : observation matrix\ncov0::Number : zero-separation covariance\ncov::Function : spatial covariance function\ncovmat : covariance matrix\ncovvec::Array{T,1} where T : covariance vector\nw::Array{T,1} where T : kriging weights\nx0::Array{T,1} where T : estimated locations\n\nReturns:\n\nestimation kriging error\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Kriging.expcov",
    "page": "Docstrings",
    "title": "Kriging.expcov",
    "category": "function",
    "text": "Exponential spatial covariance function\n\nMethods\n\nKriging.expcov(h::Number, maxcov::Number, scale::Number) in Kriging : /root/.julia/packages/Kriging/P42so/src/Kriging.jl:37\nKriging.expcov(h::Number, maxcov::Number, scale::Number, nugget::Number) in Kriging : /root/.julia/packages/Kriging/P42so/src/Kriging.jl:37\n\nArguments\n\nh::Number : separation distance\nmaxcov::Number : maximum covariance\nnugget::Number : nugget\nscale::Number : scale\n\nReturns:\n\ncovariance\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Kriging.exponentialvariogram",
    "page": "Docstrings",
    "title": "Kriging.exponentialvariogram",
    "category": "function",
    "text": "Exponential variogram\n\nMethods\n\nKriging.exponentialvariogram(h::Number, sill::Number, range::Number) in Kriging : /root/.julia/packages/Kriging/P42so/src/Kriging.jl:90\nKriging.exponentialvariogram(h::Number, sill::Number, range::Number, nugget::Number) in Kriging : /root/.julia/packages/Kriging/P42so/src/Kriging.jl:90\n\nArguments\n\nh::Number : separation distance\nnugget::Number : nugget\nrange::Number : range\nsill::Number : sill\n\nReturns:\n\nExponential variogram\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Kriging.gaussiancov",
    "page": "Docstrings",
    "title": "Kriging.gaussiancov",
    "category": "function",
    "text": "Gaussian spatial covariance function\n\nMethods\n\nKriging.gaussiancov(h::Number, maxcov::Number, scale::Number) in Kriging : /root/.julia/packages/Kriging/P42so/src/Kriging.jl:22\nKriging.gaussiancov(h::Number, maxcov::Number, scale::Number, nugget) in Kriging : /root/.julia/packages/Kriging/P42so/src/Kriging.jl:22\n\nArguments\n\nh::Number : separation distance\nmaxcov::Number : maximum covariance\nnugget : nugget\nscale::Number : scale\n\nReturns:\n\ncovariance\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Kriging.gaussianvariogram-NTuple{4,Number}",
    "page": "Docstrings",
    "title": "Kriging.gaussianvariogram",
    "category": "method",
    "text": "Gaussian variogram\n\nMethods\n\nKriging.gaussianvariogram(h::Number, sill::Number, range::Number, nugget::Number) in Kriging : /root/.julia/packages/Kriging/P42so/src/Kriging.jl:111\n\nArguments\n\nh::Number : separation distance\nnugget::Number : nugget\nrange::Number : range\nsill::Number : sill\n\nReturns:\n\nGaussian variogram\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Kriging.getcovmat-Tuple{Any,Function}",
    "page": "Docstrings",
    "title": "Kriging.getcovmat",
    "category": "method",
    "text": "Get spatial covariance matrix\n\nMethods\n\nKriging.getcovmat(X, cov::Function) in Kriging : /root/.julia/packages/Kriging/P42so/src/Kriging.jl:296\n\nArguments\n\nX : matrix with coordinates of the data points (x or y)\ncov::Function : spatial covariance function\n\nReturns:\n\nspatial covariance matrix\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Kriging.getcovvec!-Tuple{Any,Array{T,1} where T,Any,Function}",
    "page": "Docstrings",
    "title": "Kriging.getcovvec!",
    "category": "method",
    "text": "Get spatial covariance vector\n\nMethods\n\nKriging.getcovvec!(covvec, x0::Array{T,1} where T, X, cov::Function) in Kriging : /root/.julia/packages/Kriging/P42so/src/Kriging.jl:322\n\nArguments\n\nX : matrix with coordinates of the data points\ncov::Function : spatial covariance function\ncovvec : spatial covariance vector\nx0::Array{T,1} where T : vector with coordinates of the estimation points (x or y)\n\nReturns:\n\nspatial covariance vector\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Kriging.getgridpoints",
    "page": "Docstrings",
    "title": "Kriging.getgridpoints",
    "category": "function",
    "text": "Get grid points\n\nMethods\n\nKriging.getgridpoints(xs, ys) in Kriging : /root/.julia/packages/Kriging/P42so/src/Kriging.jl:363\nKriging.getgridpoints(xs, ys, zs) in Kriging : /root/.julia/packages/Kriging/P42so/src/Kriging.jl:376\n\nArguments\n\nxs : x-axis grid coordinates\nys : y-axis grid coordinates\nzs : z-axis grid coordinates\n\nReturns:\n\ngrid points\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Kriging.krige-Tuple{Array{T,2} where T,Any,Array{T,1} where T,Function}",
    "page": "Docstrings",
    "title": "Kriging.krige",
    "category": "method",
    "text": "Ordinary Kriging\n\nMethods\n\nKriging.krige(x0mat::Array{T,2} where T, X, Z::Array{T,1} where T, cov::Function) in Kriging : /root/.julia/packages/Kriging/P42so/src/Kriging.jl:191\n\nArguments\n\nX : coordinates of the observation (conditioning) data\nZ::Array{T,1} where T : values for the observation (conditioning) data\ncov::Function : spatial covariance function\nx0mat::Array{T,2} where T : point coordinates at which to obtain kriging estimates\n\nReturns:\n\nkriging estimates at x0mat\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Kriging.krigevariance-Tuple{Array{T,2} where T,Any,Array{T,1} where T,Function}",
    "page": "Docstrings",
    "title": "Kriging.krigevariance",
    "category": "method",
    "text": "Ordinary Kriging plus variance\n\nMethods\n\nKriging.krige(x0mat::Array{T,2} where T, X, Z::Array{T,1} where T, cov::Function) in Kriging : /root/.julia/packages/Kriging/P42so/src/Kriging.jl:191\n\nArguments\n\nX : coordinates of the observation (conditioning) data\nZ::Array{T,1} where T : values for the observation (conditioning) data\ncov::Function : spatial covariance function\nx0mat::Array{T,2} where T : point coordinates at which to obtain kriging estimates\n\nReturns:\n\nkriging estimates at x0mat\nvariance estimates at x0mat\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Kriging.simplekrige-Tuple{Any,Array{T,2} where T,Array{T,2} where T,Array{T,1} where T,Function}",
    "page": "Docstrings",
    "title": "Kriging.simplekrige",
    "category": "method",
    "text": "Simple Kriging\n\nMethods\n\nKriging.simplekrige(mu, x0mat::Array{T,2} where T, X::Array{T,2} where T, Z::Array{T,1} where T, cov::Function) in Kriging : /root/.julia/packages/Kriging/P42so/src/Kriging.jl:160\n\nArguments\n\nX::Array{T,2} where T : coordinates of the observation (conditioning) data\nZ::Array{T,1} where T : values for the observation (conditioning) data\ncov::Function : spatial covariance function\nmu\nx0mat::Array{T,2} where T : point coordinates at which to obtain kriging estimates\n\nReturns:\n\nkriging estimates at x0mat\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Kriging.sphericalcov",
    "page": "Docstrings",
    "title": "Kriging.sphericalcov",
    "category": "function",
    "text": "Spherical spatial covariance function\n\nMethods\n\nKriging.sphericalcov(h::Number, maxcov::Number, scale::Number) in Kriging : /root/.julia/packages/Kriging/P42so/src/Kriging.jl:52\nKriging.sphericalcov(h::Number, maxcov::Number, scale::Number, nugget::Number) in Kriging : /root/.julia/packages/Kriging/P42so/src/Kriging.jl:52\n\nArguments\n\nh::Number : separation distance\nmaxcov::Number : max covariance\nnugget::Number : nugget\nscale::Number : scale\n\nReturns:\n\ncovariance\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Kriging.sphericalvariogram",
    "page": "Docstrings",
    "title": "Kriging.sphericalvariogram",
    "category": "function",
    "text": "Spherical variogram\n\nMethods\n\nKriging.sphericalvariogram(h::Number, sill::Number, range::Number) in Kriging : /root/.julia/packages/Kriging/P42so/src/Kriging.jl:67\nKriging.sphericalvariogram(h::Number, sill::Number, range::Number, nugget::Number) in Kriging : /root/.julia/packages/Kriging/P42so/src/Kriging.jl:67\n\nArguments\n\nh::Number : separation distance\nnugget::Number : nugget\nrange::Number : range\nsill::Number : sill\n\nReturns:\n\nSpherical variogram\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Kriging]\nOrder = [:type, :function]"
},

]}
