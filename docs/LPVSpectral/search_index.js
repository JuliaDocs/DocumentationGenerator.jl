var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#LPVSpectral-1",
    "page": "Readme",
    "title": "LPVSpectral",
    "category": "section",
    "text": "(Image: Build Status)A toolbox for least-squares spectral estimation, sparse spectral estimation and Linear Parameter-Varying (LPV) spectral estimation. Contains an implementation of the spectral estimation method presented in Bagge Carlson et al. \"Linear Parameter-Varying Spectral Decomposition.\" 2017 American Control Conference.@inproceedings{bagge2017spectral,\n  title        = {Linear Parameter-Varying Spectral Decomposition},\n  author       = {Bagge Carlson, Fredrik and Robertsson, Anders and Johansson, Rolf},\n  booktitle    = {2017 American Control Conference (ACC)},\n  year         = {2017},\n}"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Pkg.add(\"LPVSpectral\")For the latest changes, Pkg.checkout(\"LPVSpectral\")"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "We demonstrate the usage of the package with a simple example using simulated data, details can be found in the paper."
},

{
    "location": "#Signal-generation-1",
    "page": "Readme",
    "title": "Signal generation",
    "category": "section",
    "text": "using LPVSpectral, Plots, LaTeXStrings, DSP\n\n\"\"\"\n`y,v,x = generate_signal(f,w,N)`\n\n`f` is a vector of functions `f(v)` that determine the functional dependence of the spectrum upon the velocity, one function for each frequency in `w`  both the amplitude and the phase are determined from these functions\n\n`w` is a vector of frequencies for which to estimate the spectrum\n\n`y,v,x` are output signal, sample points and scheduling variable respectively\n\"\"\"\nfunction generate_signal(f,w,N, modphase=false)\n    x = sort(10rand(N)) # Sample points\n    v = range(0, stop=1, length=N) # Scheduling variable\n\n    # generate output signal\n    dependence_matrix = Float64[f[(i-1)%length(f)+1](v) for v in v, i in eachindex(w)] # N x nw\n    frequency_matrix  = [cos(w*x -0.5modphase*(dependence_matrix[i,j])) for (i,x) in enumerate(x), (j,w) in enumerate(w)] # N x nw\n    y = sum(dependence_matrix.*frequency_matrix,dims=2)[:] # Sum over all frequencies\n    y += 0.1randn(size(y))\n    y,v,x,frequency_matrix, dependence_matrix\nend\n\nN      = 500 # Number of training data points\nf      = [v->2v^2, v->2/(5v+1), v->3exp(-10*(v-0.5)^2),] # Functional dependences on the scheduling variable\nw      = 2π.*[2,10,20] # Frequency vector\nw_test = 2π.*(2:2:25) # Test Frequency vector, set w_test = w for a nice function visualization\n\nY,V,X,frequency_matrix, dependence_matrix = generate_signal(f,w,N, true)"
},

{
    "location": "#Signal-analysis-1",
    "page": "Readme",
    "title": "Signal analysis",
    "category": "section",
    "text": "We now make use of the spectral estimation method presented in the paper:# Options for spectral estimation\nλ      = 0.02 # Regularization parameter\nλs     = 1    # Regularization parameter group-lasso\nnormal = true # Use normalized basis functions\nNv     = 50   # Number of basis functions\n\nse  = ls_spectral_lpv(Y,X,V,w_test,Nv; λ = λ, normalize = normal) # Perform LPV spectral estimation\nses = ls_sparse_spectral_lpv(Y,X,V,w_test,Nv; λ = λs, normalize = normal, tol=1e-8, printerval=100, iters=6000) # Same as above but with a group-lasso penalty on frequencies, promoting a solution with a sparse set of frequencies. Can be used to identify a sparse spectrum, i.e. to find w among w_test.All that remains now is to visualize the result, along with the result of standard spectral estimation methods.plot(X,[Y V], linewidth=[1 2], lab=[\"\\$y_t\\$\" \"\\$v_t\\$\"], xlabel=L\"$x$ (sampling points)\", title=L\"Test signal $y_t$ and scheduling signal $v_t$\", legend=true, xlims=(0,10), grid=false, c=[:cyan :blue])\nplot(se; normalization=:none, dims=2, l=:solid, c = [:red :green :blue], fillalpha=0.5, nMC = 5000, fillcolor=[RGBA(1,.5,.5,.5) RGBA(.5,1,.5,.5) RGBA(.5,.5,1,.5)], linewidth=2, bounds=true, lab=reshape([\"Est. \\$\\\\omega = $(round(w/π))\\\\pi \\$\" for w in w_test],1,:), phase = false)\nplot!(V,dependence_matrix, title=L\"Functional dependencies $A(\\omega,v)$\", xlabel=L\"$v$\", ylabel=L\"$A(\\omega,v)$\", c = [:red :green :blue], l=:dot, linewidth=2,lab=reshape([\"True \\$\\\\omega = $(round(w/π))\\\\pi\\$\" for w in w],1,:), grid=false)\n\n# Plot regular spectrum\nspectrum_lpv   = psd(se) # Calculate power spectral density\nspectrum_lpvs  = psd(ses) # Calculate sparse power spectral density\nfs             = N/(X[end]-X[1]) # This is the (approximate) sampling freqency of the generated signal\nspectrum_per   = DSP.periodogram(Y, fs=fs)\nspectrum_welch = DSP.welch_pgram(Y, fs=fs)\nplot(2π*collect(spectrum_per.freq), spectrum_per.power, lab=\"Periodogram\", l=:path, m=:none, yscale=:log10, c=:cyan)\nplot!(2π*collect(spectrum_welch.freq), spectrum_welch.power, lab=\"Welch\", l=:path, m=:none, yscale=:log10, linewidth=2, c=:blue)\nplot!(w_test,spectrum_lpv/fs, xlabel=L\"$\\omega$ [rad/s]\", ylabel=\"Spectral density\", ylims=(-Inf,Inf), grid=false, lab=\"LPV\", l=:scatter, m=:o, yscale=:log10, c=:orange)\nplot!(w_test,spectrum_lpvs/fs, lab=\"Sparse LPV\", l=:scatter, m=:o, c=:green)(Image: window) (Image: window) (Image: window)When the three frequencies in w have been identified, w_test can be replaced by w for a nicer plot. As indicated by the last figure, the sparse estimate using group-lasso is better at identifying the three frequency components present (with a small bias in the estimation of the true frequencies)."
},

{
    "location": "#Sparse-spectral-estimation-1",
    "page": "Readme",
    "title": "Sparse spectral estimation",
    "category": "section",
    "text": ""
},

{
    "location": "#L-regularized-spectral-estimation-1",
    "page": "Readme",
    "title": "L₁ regularized spectral estimation",
    "category": "section",
    "text": "Minimize ||y-Ax||₂² + λ||x||₁ where x are the Fourier coefficients. Promotes a sparse spectrum x = ls_sparse_spectral(y,t,ω; proxg=NormL1(λ), tol=1e-9, printerval=100, iters=30000, μ=0.000001)"
},

{
    "location": "#L-regularized-spectral-estimation-2",
    "page": "Readme",
    "title": "L₀ regularized spectral estimation",
    "category": "section",
    "text": "Minimize ||y-Ax||₂² + λ||x||₀ where x are the Fourier coefficients. Promotes a sparse spectrum x = ls_sparse_spectral(y,t,ω; tol=1e-9, printerval=100, iters=30000, μ=0.000001)"
},

{
    "location": "#L-constrained-spectral-estimation-1",
    "page": "Readme",
    "title": "L₀ constrained spectral estimation",
    "category": "section",
    "text": "Minimize ||y-Ax||₂² s.t. ||x||₀ ≦ r where x are the Fourier coefficients. Promotes a sparse spectrum x = ls_sparse_spectral(y,t,ω; proxg=IndBallL0(r), tol=1e-9, printerval=100, iters=30000, μ=0.000001)"
},

{
    "location": "#Sparse-LPV-spectral-estimation-1",
    "page": "Readme",
    "title": "Sparse LPV spectral estimation",
    "category": "section",
    "text": "See example above se = ls_sparse_spectral_lpv(Y,X,V,ω_test,Nv; λ = 0.1, normalize = normal, tol=1e-8, printerval=10, iters=6000)"
},

{
    "location": "#List-of-functions-1",
    "page": "Readme",
    "title": "List of functions",
    "category": "section",
    "text": "This package also provides tools for general least-squares spectral analysis, check out the functionsls_spectral             # Least-squares spectral analysis\nls_sparse_spectral      # Least-squares sparse (L0) spectral analysis (uses ADMM)\ntls_spectral            # Total Least-squares spectral analysis\nls_windowpsd            # Windowed Least-squares spectral analysis (sparse estimates available, see kwarg `estimator`)\nls_windowcsd            # Windowed Least-squares cross-spectral density estimation (sparse estimates available, see kwarg `estimator`)\nls_cohere               # Least-squares cross coherence estimation (sparse estimates available, see kwarg `estimator`)\nls_spectral_lpv         # LPV spectral decomposition\nls_sparse_spectral_lpv  # LPV spectral decomposition with group-lasso penalty on frequencies (uses ADMM)\nls_windowpsd_lpv        # Windowed power spectral density estimation with LPV method"
},

{
    "location": "autodocs/#LPVSpectral.SpectralExt",
    "page": "Docstrings",
    "title": "LPVSpectral.SpectralExt",
    "category": "type",
    "text": "LPV Spectral estimation result type.\n\nSee ls_spectral_lpv for additional help.\n\nAn object of this type can be plotted if Plots.jl is installed. Use regular Plots-syntax, with the additional attributes\n\nnormalization= :none / :sum / :max\nnormdim = :freq / :v # Only applies if normalization= :sum or :max\ndims = 2 or 3 (default = 2)\n\nFields:\n\nY::AbstractVector\nX::AbstractVector\nV::AbstractVector\nw\nNv\nλ\ncoulomb::Bool\nnormalize::Bool\nx                   # The estimated parameters\nΣ                   # Covariance of the estimated parameters\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LPVSpectral.basis_activation_func-NTuple{4,Any}",
    "page": "Docstrings",
    "title": "LPVSpectral.basis_activation_func",
    "category": "method",
    "text": "basisactivationfunc(V,Nv,normalize,coulomb)\n\nReturns a func v->ϕ(v) ∈ ℜ(Nv) that calculates the activation of Nv basis functions spread out to cover V nicely. If coulomb is true, then we get twice the number of basis functions, 2Nv\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LPVSpectral.detrend-Tuple{Any,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "LPVSpectral.detrend",
    "category": "method",
    "text": "detrend(x, order=0, t = 1:length(x)) Removes the trend of order order, i.e, mean and, if order=1, the slope of the signal x If order = 1, then the sampling points of x can be supplied as t (default: t = 1:length(x))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LPVSpectral.ls_cohere-NTuple{4,Any}",
    "page": "Docstrings",
    "title": "LPVSpectral.ls_cohere",
    "category": "method",
    "text": "ls_cohere(y,u,t,freqs; nw = 10, noverlap = -1, estimator=ls_spectral, kwargs...)\n\nPerform spectral coherence estimation using the least-squares method.\n\nestimator is the spectral estimatio function to use, default is ls_spectral. For sparse estimation, try estimator = ls_sparse_spectral See ls_sparse_spectral for more help. See also ls_windowcsd and ls_spectral for additional help.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LPVSpectral.ls_sparse_spectral",
    "page": "Docstrings",
    "title": "LPVSpectral.ls_sparse_spectral",
    "category": "function",
    "text": "ls_sparse_spectral(y,t,f=(0:((length(y)-1)/2))/length(y), [window]; λ=1, proxg      = ProximalOperators.NormL1(λ), kwargs...)\n\nperform spectral estimation using the least-squares method with (default) a L1-norm penalty on the Fourier coefficients, change kwarg proxg to e.g. NormL0(λ) for a different behavior or proxg = IndBallL0(4) if the number of frequencies is known in advance. Promotes a sparse spectrum. See ?ADMM for keyword arguments to control the solver.\n\ny is the signal to be analyzed t is the sampling points f is a vector of frequencies\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LPVSpectral.ls_sparse_spectral_lpv-Tuple{AbstractArray{T,1} where T,AbstractArray{T,1} where T,AbstractArray{T,1} where T,Any,Integer}",
    "page": "Docstrings",
    "title": "LPVSpectral.ls_sparse_spectral_lpv",
    "category": "method",
    "text": "`lssparsespectral_lpv(Y,X,V,w,Nv::Int; λ = 1, coulomb = false, normalize=true, coulomb    = false, normalize  = true)\n\nPerform LPV spectral estimation using the method presented in Bagge Carlson et al. \"Linear Parameter-Varying Spectral Decomposition.\" modified to include a sparsity-promoting L1 group-lasso penalty on the coefficients. The groups are based on frequency, meaning a solution in which either all parameters For a particular frequency are zero, or all are non-zero. This is useful in the identification of frequency components among a large set of possible frequencies. See the paper or README For additional details.\n\nY output\n\nX sample locations\n\nV scheduling signal\n\nw frequency vector\n\nNv number of basis functions\n\nλ Regularization parameter\n\ncoulomb Assume discontinuity at v=0 (useful For signals where, e.g., Coulomb friction might cause issues.)\n\nnormalize Use normalized basis functions (See paper For details).\n\nSee ?ADMM for keyword arguments to control the solver.\n\nSee also psd, ls_spectral_lpv and ls_windowpsd_lpv\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LPVSpectral.ls_spectral",
    "page": "Docstrings",
    "title": "LPVSpectral.ls_spectral",
    "category": "function",
    "text": "ls_spectral(y,t,f=(0:((length(y)-1)/2))/length(y); λ=0)\n\nperform spectral estimation using the least-squares method y is the signal to be analyzed t is the sampling points f is a vector of frequencies\n\nSee also ls_sparse_spectral tls_spectral\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LPVSpectral.ls_spectral-Tuple{Any,Any,Any,AbstractArray{T,1} where T}",
    "page": "Docstrings",
    "title": "LPVSpectral.ls_spectral",
    "category": "method",
    "text": "ls_spectral(y,t,f,W::AbstractVector) W is a vector of weights, for weighted least-squares\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LPVSpectral.ls_spectral_lpv-Tuple{AbstractArray{T,1} where T,AbstractArray{T,1} where T,AbstractArray{T,1} where T,Any,Integer}",
    "page": "Docstrings",
    "title": "LPVSpectral.ls_spectral_lpv",
    "category": "method",
    "text": "ls_spectral_lpv(Y,X,V,w,Nv::Int; λ = 1e-8, coulomb = false, normalize=true)\n\nPerform LPV spectral estimation using the method presented in Bagge Carlson et al. \"Linear Parameter-Varying Spectral Decomposition.\" See the paper For additional details.\n\nY output\n\nX sample locations\n\nV scheduling signal\n\nw frequency vector\n\nNv number of basis functions\n\nλ Regularization parameter\n\ncoulomb Assume discontinuity at v=0 (useful for signals where, e.g., Coulomb friction might cause issues.)\n\nnormalize Use normalized basis functions (See paper for details).\n\nThe method will issue a warning if less than 90% of the variance in Y is described by the estimated model. If this is the case, try increasing either the number of frequencies or the number of basis functions per frequency. Alternatively, try lowering the regularization parameter λ.\n\nSee also psd, ls_sparse_spectral_lpv and ls_windowpsd_lpv\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LPVSpectral.ls_windowcsd-NTuple{4,Any}",
    "page": "Docstrings",
    "title": "LPVSpectral.ls_windowcsd",
    "category": "method",
    "text": "ls_windowcsd(y,u,t,freqs; nw = 10, noverlap = -1, window_func=rect, estimator=ls_spectral, kwargs...)\n\nPerform windowed cross spectral density estimation using the least-squares method.\n\ny and u are the two signals to be analyzed and t::AbstractVector are their sampling points window_func defaults to Windows.rect\n\nestimator is the spectral estimatio function to use, default is ls_spectral. For sparse estimation, try estimator = ls_sparse_spectral See ls_sparse_spectral for more help.\n\nSee ls_spectral for additional help.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LPVSpectral.ls_windowpsd-Tuple{Any,Any,Any}",
    "page": "Docstrings",
    "title": "LPVSpectral.ls_windowpsd",
    "category": "method",
    "text": "ls_windowpsd(y,t,freqs; nw = 10, noverlap = -1, window_func=rect, estimator=ls_spectral, kwargs...)\n\nperform widowed spectral estimation using the least-squares method. window_func defaults to Windows.rect\n\nestimator is the spectral estimatio function to use, default is ls_spectral. For sparse estimation, try estimator = ls_sparse_spectral See ls_sparse_spectral for more help. kwargs are passed to estimator.\n\nSee ls_spectral for additional help.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LPVSpectral.ls_windowpsd_lpv",
    "page": "Docstrings",
    "title": "LPVSpectral.ls_windowpsd_lpv",
    "category": "function",
    "text": "lswindowpsdlpv(Y::AbstractVector,X::AbstractVector,V::AbstractVector,w,Nv::Integer, nw::Int=10, noverlap=0;  kwargs...)\n\nPerform windowed psd estimation using the LPV method. A rectangular window is always used.\n\nSee ?ls_spectral_lpv for additional help.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LPVSpectral.pdf-Tuple{ComplexNormal,Any}",
    "page": "Docstrings",
    "title": "LPVSpectral.pdf",
    "category": "method",
    "text": "f(cn::ComplexNormal, z)\n\nProbability density Function f(z) for a complex normal distribution. This can probably be more efficiently implemented\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LPVSpectral.psd-Tuple{SpectralExt}",
    "page": "Docstrings",
    "title": "LPVSpectral.psd",
    "category": "method",
    "text": "psd(se::SpectralExt) Compute the power spectral density For a SpectralExt object\n\nSee also ls_windowpsd_lpv\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LPVSpectral.tls_spectral",
    "page": "Docstrings",
    "title": "LPVSpectral.tls_spectral",
    "category": "function",
    "text": "tls_spectral(y,t,f=(0:((length(y)-1)/2))/length(y)) Perform total least-squares spectral estimation using the SVD-method. See ls_spectral for additional help\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LPVSpectral.Windows2",
    "page": "Docstrings",
    "title": "LPVSpectral.Windows2",
    "category": "type",
    "text": "Windows2(y,t,nw,noverlap,window_func) noverlap = -1 sets the noverlap to dpw/2\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LPVSpectral.Windows3",
    "page": "Docstrings",
    "title": "LPVSpectral.Windows3",
    "category": "type",
    "text": "Windows3(y,t,v,nw::Integer,noverlap::Integer,window_func::Function) noverlap = -1 sets the noverlap to dpw/2\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LPVSpectral.ADMM-Tuple{Any,Any,Any}",
    "page": "Docstrings",
    "title": "LPVSpectral.ADMM",
    "category": "method",
    "text": "ADMM(x,proxf,proxg;\niters      = 10000,   # ADMM maximum number of iterations\ntol        = 1e-5,    # ADMM tolerance\nprinterval = 100,     # Print this often\ncb(x,z)    = nothing, # Callback function\nμ          = 0.05`)   # ADMM tuning parameter. If results oscillate, lower this value.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LPVSpectral.real_complex_bs",
    "page": "Docstrings",
    "title": "LPVSpectral.real_complex_bs",
    "category": "function",
    "text": "real_complex_bs(A,b, λ=0) Replaces the backslash operator For complex arguments. Expands the A-matrix into [real(A) imag(A)] and performs the computation using real arithmetics. Optionally accepts λ to solve the ridge regression problem using the formulation [A;λI]\\[b;0]. λ should be given with the same dimension as the columns of A, i.e. if λ represents a standard deviation, then λ = σ, not λ = σ²\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LPVSpectral.reshape_params-Tuple{Any,Any}",
    "page": "Docstrings",
    "title": "LPVSpectral.reshape_params",
    "category": "method",
    "text": "Returns params as a [nω × N] matrix\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LPVSpectral.ridgereg-Tuple{Any,Any,Any}",
    "page": "Docstrings",
    "title": "LPVSpectral.ridgereg",
    "category": "method",
    "text": "ridgereg(A,b,λ) Accepts λ to solve the ridge regression problem using the formulation [A;λI]\\[b;0]. λ should be given with the same dimension as the columns of A, i.e. if λ represents an inverse standard deviation, then 1/λ = σ, not 1/λ = σ²\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [LPVSpectral]\nOrder = [:type, :function]"
},

]}
