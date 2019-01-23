var documenterSearchIndex = {"docs": [

{
    "location": "#ElasticFDA.align_fPCA-Tuple{Any,Any}",
    "page": "Home",
    "title": "ElasticFDA.align_fPCA",
    "category": "method",
    "text": "Aligns a collection of functions while extracting principal components. The functions are aligned to the principal components\n\nalign_fPCA(f, timet; num_comp=3, smooth=false, sparam=10, MaxItr=50)\n:param f: array of shape (M,N) of N functions with M samples\n:param timet: vector of size M describing the sample points\n:param num_comp: Number of components (default = 3)\n:param smooth: Smooth the data using a box filter (default = false)\n:param sparam: Number of times to run smoothing filter (default 10)\n:param MaxItr: Maximum number of iterations\n\nReturns Dict containing\n:return fn: aligned functions - array of shape (M,N) of N functions with M\n            samples\n:return qn: aligned srvfs - similar structure to fn\n:return q0: original srvf - similar structure to fn\n:return mqn: srvf mean or median - vector of length M\n:return gam: warping functions - similar structure to fn\n:return q_pca: srsf principal directions\n:return f_pca: functional principal directions\n:return latent: latent values\n:return coef: coefficients\n:return U: eigenvectors\n:return orig_var: Original Variance of Functions\n:return amp_var: Amplitude Variance\n:return phase_var: Phase Variance\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.bs",
    "page": "Home",
    "title": "ElasticFDA.bs",
    "category": "function",
    "text": "Compute B-Spline basis     bs(x, df, norder, nderiv=0)     :param x: time samples     :param df: degree of freedom     :param norder: order of splines     :param nderiv: derivative number\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.calc_shape_dist-Tuple{Array{Float64,2},Array{Float64,2}}",
    "page": "Home",
    "title": "ElasticFDA.calc_shape_dist",
    "category": "method",
    "text": "Calculate elastic shape distance between two curves beta1 and beta2\n\ncalc_shape_dist(beta1, beta2)\n:param beta1: array (n,T)\n:param beta2: array (n,T)\n:param method: optimization method to find warping, default is\n               Dynamic Programming (\"DP\"). Other options are\n               Coordinate Descent (\"DP2\"), Riemannian BFGS\n               (\"RBFGS\")\n:param wscale: with scale (false)\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.curve_geodesic",
    "page": "Home",
    "title": "ElasticFDA.curve_geodesic",
    "category": "function",
    "text": "Form geodesic between two curves\n\ncurve_geodesic(beta1::Array{Float64,2}, beta2::Array{Float64,2}, k::Integer=5)\n:param beta1: array (n,T)\n:param beta2: array (n,T)\n:param k: number of curves along geodesic\n:param wscale: with scale (false)\n\nReturns\n:return geod: curves along geodesic (n,T,k)\n:return geod_q: srvf\'s along geodesic\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.curve_karcher_cov-Tuple{Array{Float64,2},Array{Float64,3}}",
    "page": "Home",
    "title": "ElasticFDA.curve_karcher_cov",
    "category": "method",
    "text": "Calculate Karcher Covariance of a set of curves\n\ncurve_karcher_cov(betamean, beta; mode=\'O\')\n:param betamean: array (n,T) of mean curve\n:param beta: array (n,T,N) for N number of curves\n:param mode: Open (\'O\') or Closed (\'C\') curves\n\n:return K: covariance matrix\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.curve_karcher_mean-Tuple{Array{Float64,3}}",
    "page": "Home",
    "title": "ElasticFDA.curve_karcher_mean",
    "category": "method",
    "text": "Calculates Karcher mean of a collection of curves using the elastic square-root velocity (srvf) framework.\n\ncurve_karcher_mean(beta; mode=\'O\', maxit=20)\n:param beta: array (n,T,N) for N number of curves\n:param mode: Open (\'O\') or Closed (\'C\') curves\n:param maxit: maximum number of iterations\n:param wscale: with scale (false)\n\n:return mu: mean srvf\n:return betamean: mean curve\n:return v: shooting vectors\n:return q: array of srvfs\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.curve_pair_align-Tuple{Array{Float64,2},Array{Float64,2}}",
    "page": "Home",
    "title": "ElasticFDA.curve_pair_align",
    "category": "method",
    "text": "Pairwise align two curves\n\ncurve_pair_align(beta1::Array{Float64,2}, beta2::Array{Float64,2})\n:param beta1: array (n,T)\n:param beta2: array (n,T)\n\nReturns\n:return beta2n: aligned curve 2 to 1\n:return q2n: aligned srvf 2 to 1\n:return gam: warping function\n:return q1: srvf of curve 1\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.curve_principal_directions-Tuple{Array{Float64,2},Any,Any}",
    "page": "Home",
    "title": "ElasticFDA.curve_principal_directions",
    "category": "method",
    "text": "Calculate principal directions of a set of curves\n\ncurve_principal_directions(betamean, mu, K; mode=\'O\', no=3, N=5)\n:param betamean: array (n,T) of mean curve\n:param mu: array (n,T) of mean srvf\n:param K: array (T,T) covariance matrix\n:param mode: Open (\'O\') or Closed (\'C\') curve\n:param no: number of components\n:param N: number of samples on each side of mean\n\n:return pd: array describing principal directions\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.curve_srvf_align-Tuple{Array{Float64,3}}",
    "page": "Home",
    "title": "ElasticFDA.curve_srvf_align",
    "category": "method",
    "text": "Aligns a collection of curves using the elastic square-root velocity (srvf) framework.\n\ncurve_srvf_align(beta; mode=\'O\', maxit=20)\n\n:param beta: array (n,T,N) for N number of curves\n:param mode: Open (\'O\') or Closed (\'C\') curves\n:param maxit: maximum number of iterations\n\n:return betan: aligned curves\n:return qn: aligned srvfs\n:return betamean: mean curve\n:return q_mu: mean srvf\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.curve_to_q",
    "page": "Home",
    "title": "ElasticFDA.curve_to_q",
    "category": "function",
    "text": "Convert curve to square-root velocity function (srvf)\n\ncurve_to_q(beta)\n:param beta: array describing curve (n,T)\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.elastic_distance",
    "page": "Home",
    "title": "ElasticFDA.elastic_distance",
    "category": "function",
    "text": "Calculate elastic distance between two functions\n\nelastic_distance(f1::Vector, f2::Vector, timet::Vector,\n                 method::AbstractString=\"SIMUL\")\n:param f1: vector of function 1 samples\n:param f2: vector of function 2 samples\n:param timet: vector of time samples\n:param method: optimization method to find warping, default is\n               Dynamic Programming (\"DP\"). Other options are\n               Coordinate Descent (\"DP2\"), Riemannian BFGS\n               (\"RBFGS\"), Simultaneous Alignment (\"SIMUL\")\n\n:return da: amplitude distance\n:return dp: phase distance\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.elastic_logistic-Tuple{Any,Any,Any}",
    "page": "Home",
    "title": "ElasticFDA.elastic_logistic",
    "category": "method",
    "text": "Calculate elastic logistic regression from function data f, for response y\n\nelastic_logistic(f, y, timet; B=None, df=20, max_itr=20, smooth=false)\n:param f: array (M,N) of N functions\n:param y: vector (N) of responses\n:param timet: vector (N) describing time samples\n:param B: matrix describing basis functions (M,N) (default=None generates a\n          B-spline basis\n:param df: degree of freedom of basis\n:param max_itr: maximum number of iterations\n:param smooth: smooth data\n\nReturns Dict describing regression\n:return alpha: intercept\n:return beta: regression function\n:return fn: aligned functions\n:return qn: aligned srsfs\n:return gamma: warping functions\n:return q: original srsfs\n:retrun B: basis functions\n:return type: type of regressions\n:return b: coefficients\n:return LL: logistic loss\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.elastic_prediction-Tuple{Any,Any,Dict}",
    "page": "Home",
    "title": "ElasticFDA.elastic_prediction",
    "category": "method",
    "text": "Prediction from elastic regression model\n\nelastic_prediction(f, timet, model; y=None, smooth=false)\n:param f: functions to predict\n:param timet: vector describing time samples\n:param model: calculated model (regression, musicologist, mlogistic)\n:param y: true response (default = None)\n:param smooth: smooth data (default = false)\n\nReturns\n:return y_pred: predicted value\n:return y_labels: labels of predicted value\n:return Perf: Performance metric if truth is supplied\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.elastic_regression-Tuple{Array,Array{T,1} where T,Array{T,1} where T}",
    "page": "Home",
    "title": "ElasticFDA.elastic_regression",
    "category": "method",
    "text": "Calculate elastic regression from function data f, for response y\n\nelastic_regression(f, y, timet; B=None, lambda=0, df=20, max_itr=20,\n                   smooth=false)\n:param f: array (M,N) of N functions\n:param y: vector (N) of responses\n:param timet: vector (N) describing time samples\n:param B: matrix describing basis functions (M,N) (default=None generates a\n          B-spline basis\n:param lambda: regularization parameter\n:param df: degree of freedom of basis\n:param max_itr: maximum number of iterations\n:param smooth: smooth data\n\nReturns Dict describing regression\n:return alpha: intercept\n:return beta: regression function\n:return fn: aligned functions\n:return qn: aligned srsfs\n:return gamma: warping functions\n:return q: original srsfs\n:retrun B: basis functions\n:return type: type of regressions\n:return b: coefficients\n:return SSE: sum of squared error\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.f_to_srsf",
    "page": "Home",
    "title": "ElasticFDA.f_to_srsf",
    "category": "function",
    "text": "Convert function to square-root slope function (srsf)\n\nf_to_srsf(f::Array, timet=0, smooth=false)\n:param f: array of shape (M,N) describing N functions of M samples\n:param timet: vector describing time samples (default = 0) will generate\n              linearly spaced time vector of length M\n:param smooth: smooth data (default = false)\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.gauss_model-Tuple{ElasticFDA.fdawarp}",
    "page": "Home",
    "title": "ElasticFDA.gauss_model",
    "category": "method",
    "text": "Computes random samples of functions from aligned data using Gaussian model\n\ngauss_model(warp_data; n=1, sort_samples=false)\n:param warp_data: fdawarp type from srsf_align of aligned data\n:param n: number of samples\n:param sort_samples: sort samples\n\nReturns warp_data containing\n:return fs: random aligned functions\n:return gams: random warping functions\n:return ft: random functions\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.gradient",
    "page": "Home",
    "title": "ElasticFDA.gradient",
    "category": "function",
    "text": "1-D Gradient\n\ngradient(a::Array, dx::Float64=1)\n:param f: Vector\n:param dx: stepsize\n\n:return g: gradient\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.group_warping_bayes-Tuple{Any}",
    "page": "Home",
    "title": "ElasticFDA.group_warping_bayes",
    "category": "method",
    "text": "Group alignment of functions using Bayesian method\n\ngroup_warping_bayes(f; iter=20000, times=5, powera=1)\n:param f: array (M,N) of N functions\n:param iter: number of MCMC iterations\n:param times: time slicing\n:param powera: MCMC parameter\n\nReturns Dict containing\n:return f_q: registered srvfs\n:return gam_q: warping function\n:return f_a: registered functions\n:return gam: warping functions\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.horiz_fPCA-Tuple{ElasticFDA.fdawarp}",
    "page": "Home",
    "title": "ElasticFDA.horiz_fPCA",
    "category": "method",
    "text": "Calculates horizontal functional principal component analysis on aligned data\n\nhoriz_fPCA(warp_data; no=1)\n:param warp_data: fdawarp type from srsf_align of aligned data\n:param no: number of components to extract (default = 1)\n\nReturns hfpca containing\n:return gam_pca: warping principal directions\n:return psi_pca: srsf functional principal directions\n:return latent: latent values\n:return U: eigenvectors\n:return coef: scores\n:return vec: shooting vectors\n:return gam_mu: mean warping function\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.inverse_exp-Tuple{Any,Any,Any}",
    "page": "Home",
    "title": "ElasticFDA.inverse_exp",
    "category": "method",
    "text": "Calculate shooting vector between two srvfs q1 and q2\n\ninverse_exp(q1, q2, beta2)\n:param q1: array (n,T)\n:param q2: array (n,T)\n:param beta2: array (n,T)\n\n:return v: shooting vector\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.inverse_exp_coord-Tuple{Any,Any}",
    "page": "Home",
    "title": "ElasticFDA.inverse_exp_coord",
    "category": "method",
    "text": "Calculate shooting vector and distance between two curves beta1 and beta2\n\ninverse_exp_coord(beta1, beta2)\n:param beta1: array (n,T)\n:param beta2: array (n,T)\n:param method: optimization method to find warping, default is\n               Dynamic Programming (\"DP\"). Other options are\n               Coordinate Descent (\"DP2\"), Riemannian BFGS\n               (\"RBFGS\")\n:param wscale: keep scale (false)\n\n:return v: shooting vector\n:return dist: shape distance\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.optimum_reparam",
    "page": "Home",
    "title": "ElasticFDA.optimum_reparam",
    "category": "function",
    "text": "Calculate optimum parameterization (warping of q2 to q1)\n\noptimum_reparam(q1, timet, q2, lam=0.0, method=\"SIMUL\", w=0.01, f1o=0.0,\n                f2o=0.0)\n:param q1: array (M,N) or vector (M) describing srsf set 1\n:param timet: vector describing time samples of length M\n:param q2: array (M,N) or vector (M) describing srsf of set 2\n:param lam: control amount of warping (default=0.0)\n:param method: optimization method to find warping, default is\n               Dynamic Programming (\"DP\"). Other options are\n               Coordinate Descent (\"DP2\"), Riemannian BFGS\n               (\"RBFGS\"), Simultaneous Alignment (\"SIMUL\")\n:param w: Controls RBFGS (default = 0.01)\n:param f1o: initial value of f1, vector or scalar depending on q1, defaults\n            to zero\n:param f2o: initial value of f2, vector or scalar depending on q1, defaults\n            to zero\n\noptimum_reparam(q1, time1, q2, time2, lam=0.0, method=\"DP\", w=0.01, f1o=0.0,\n                f2o=0.0)\nsame as above, but different timing for q1 and q2\n\noptimum_reparam(beta1, beta2, lam, method=\"DP\", w=0.01, rotated=true,\n                isclosed=false)\n:param beta1: array (n,T) describing curve 1\n:param beta2: array (n,T) describing curve 2\n:param lam: control amount of warping (default=0.0)\n:param method: optimization method to find warping, default is\n               Dynamic Programming (\"DP\"). Other options are\n               Coordinate Descent (\"DP2\"), Riemanain BFGS\n               (\"RBFGS\")\n:param w: Controls RBFGS (default = 0.01)\n:param rotated: calculate rotation (default = true)\n:param isclosed: closed curve (default = false)\n\n:return gam: warping function\n:return R: rotation matrix\n:return tau: seed value\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.pair_warping_bayes-Tuple{Any,Any}",
    "page": "Home",
    "title": "ElasticFDA.pair_warping_bayes",
    "category": "method",
    "text": "Compute pair warping between two functions using Bayesian method\n\npair_warping_bayes(f1, f2; iter=15000, times=5, powera=1)\n:param f1, f2: vectors describing functions\n:param iter: number of iterations\n:param times: MCMC parameter\n:param powera: MCMC parameter\n\nReturns Dict containing\n:return f1:\n:return f2_q: srsf registration\n:return gam_q: warping function\n:return f2a: registered f2\n:return gam: warping function\n:return dist_collect: distance\n:return best_match: best match\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.pair_warping_expomap-Tuple{Any,Any,Any}",
    "page": "Home",
    "title": "ElasticFDA.pair_warping_expomap",
    "category": "method",
    "text": "Compute pair warping between two functions using Bayesian method\n\npair_warping_expomap(f1, f2, timet; iter=20000, burnin=min(5000,iter/2),\n                     alpha0=0.1, beta0=0.1, pbetas=[0.5,0.05,0.005,0.0001],\n                     probs=[0.1,0.1,0.7,0.1],propvar=1.0,\n                     init_coef=zeros(20),npoints=200,extrainfo=false)\n\n:param f1, f2: vectors describing functions\n:param timet: vector describing timing\n:param iter: number of MCMC iterations\n:param burnin: number of MCMC burnin iterations\n:param alpha0, beta0: IG parameters for prior of sigma1\n:param pbetas: mixture ratios for pCN\n:param probs: mixcture probabilities for zpCN\n:param propvar: variance of proposal distribution\n:param init_coef: initial g coefficients\n:param npoits: number of sample points to use during alignment\n:param extrainfo: T/F whether additional information is returned (accept, logl, gamma_mat, gamma_stats, xdist, ydist)\n\nReturns mcmc struct containing\n:return f2_warped: warped f2\n:return gamma: warping function\n:return g_coef: g_coeficients\n:return sigma1: variance samples\n:return accept: accept samples\n:return logl: log-likelihood\n:return gamma_mat: posterior warping function samples\n:return gamma_stats: posterior warping function samples 95% credible intervals\n:return xdist: phase distance of posterior warping functions\n:return ydist: amplitude distance of posterior warping functions\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.project_curve-Tuple{Any}",
    "page": "Home",
    "title": "ElasticFDA.project_curve",
    "category": "method",
    "text": "Project curve onto normal tangent space\n\nproject_curve(q)\n:param q: array (n,T)\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.project_tangent-Tuple{Any,Any,Any}",
    "page": "Home",
    "title": "ElasticFDA.project_tangent",
    "category": "method",
    "text": "Project srvf onto tangent space\n\nproject_tangent(w, q, basis)\n:param w: shooting vector\n:param q: array (n,T)\n:param basis: basis out of find_basis_normal\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.q_to_curve-Tuple{Any}",
    "page": "Home",
    "title": "ElasticFDA.q_to_curve",
    "category": "method",
    "text": "Convert srvf to curve\n\nq_to_curve(q)\n:param q: array describing srvf (n,T)\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.resamplecurve",
    "page": "Home",
    "title": "ElasticFDA.resamplecurve",
    "category": "function",
    "text": "Resample curve\n\nresamplecurve(x, N=100)\n:param x: array describing curve (n,T)\n:param N: Number of samples to re-sample curve, N usually is > T\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.rgam-Tuple{Any,Any,Any}",
    "page": "Home",
    "title": "ElasticFDA.rgam",
    "category": "method",
    "text": "Generate random warping functions\n\nrgam(N, sigma, num)\n:param N: number of time points\n:param sigma: standard deviation across samples\n:param num: number of random warpings\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.sample_shapes-Tuple{Array{Float64,2},Any}",
    "page": "Home",
    "title": "ElasticFDA.sample_shapes",
    "category": "method",
    "text": "Sample shapes from model\n\nsample_shapes(mu, K; mode=\'O\', no=3, numSamp=10)\n:param mu: array (n,T) mean srvf\n:param K: array (T,T) covariance matrix\n:param mode: Open (\'O\') or Closed (\'C\') curves\n:param no: number of principal components\n:param numSamp: number of samples\n\n:return samples: array (n,T,numSamp) of sample curves\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.smooth_data",
    "page": "Home",
    "title": "ElasticFDA.smooth_data",
    "category": "function",
    "text": "Smooth functional data using box filter\n\nsmooth_data(f::Array{Float64,1}, sparam=10)\n:param sparam: Number of times to run filter (default = 10)\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.smooth_data!",
    "page": "Home",
    "title": "ElasticFDA.smooth_data!",
    "category": "function",
    "text": "Smooth functional data using box filter in place\n\nsmooth_data!(f::Array{Float64,2}, sparam=10)\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.smooth_data!",
    "page": "Home",
    "title": "ElasticFDA.smooth_data!",
    "category": "function",
    "text": "smooth_data!(f::Array{Float64,1}, sparam=10)\n:param sparam: Number of times to run filter (default = 10)\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.srsf_align-Tuple{Any,Any}",
    "page": "Home",
    "title": "ElasticFDA.srsf_align",
    "category": "method",
    "text": "Aligns a collection of functions using the elastic square-root slope (srsf) framework.\n\nsrsf_align(f, timet; method=\"mean\", smooth=false, sparam=10, lam=0.0,\n           optim=\"DP\", MaxItr=20)\n:param f: array of shape (M,N) of N functions with M samples\n:param timet: vector of size M describing the sample points\n:param method: (string) calculate Karcher Mean or Median\n(options = \"mean\" or \"median\") (default=\"mean\")\n:param smooth: Smooth the data using a box filter (default = false)\n:param sparam: Number of times to run smoothing filter (default 10)\n:param lam: controls the elasticity (default = 0)\n:param optim: optimization method to find warping, default is\n              Simultaneous Alignment (\"SIMUL\"). Other options are\n              Dynamic Programming (\"DP2\"), Riemannian BFGS\n              (\"RBFGS\")\n:param MaxItr: Maximum number of iterations\n\nReturns fdawarp type containing\n:return fn: aligned functions - array of shape (M,N) of N\n            functions with M samples\n:return qn: aligned srsfs - similar structure to fn\n:return q0: original srsfs - similar structure to fn\n:return fmean: function mean or median - vector of length N\n:return mqn: srvf mean or median - vector of length N\n:return gam: warping functions - similar structure to fn\n:return orig_var: Original Variance of Functions\n:return amp_var: Amplitude Variance\n:return phase_var: Phase Variance\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.srsf_to_f",
    "page": "Home",
    "title": "ElasticFDA.srsf_to_f",
    "category": "function",
    "text": "Convert square-root slope function (srsf) to f\n\nsrsf_to_f(q::Array, time, f0=0.0)\n:param q: array of shape (M,N) describing N srsf of M samples\n:param time: vector describing time samples of length M\n:param f0: initial value of f\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.trapz",
    "page": "Home",
    "title": "ElasticFDA.trapz",
    "category": "function",
    "text": "Trapezoidal Integration\n\ntrapz(x, y, dim=1)\n:param x: vector of time samples\n:param y: array of response samples\n:param dim: dimension along which to integrate\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.vert_fPCA-Tuple{ElasticFDA.fdawarp}",
    "page": "Home",
    "title": "ElasticFDA.vert_fPCA",
    "category": "method",
    "text": "Calculates vertical functional principal component analysis on aligned data\n\nvert_fPCA(warp_data, qn; no=1)\n:param warp_data: fdawarp type from srsf_align of aligned data\n:param no: number of components to extract (default = 1)\n\nReturns vfpca type containing\n:return q_pca: srsf principal directions\n:return f_pca: functional principal directions\n:return latent: latent values\n:return coef: scores\n:return U: eigenvectors\n:return id: point used for f(0)\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.warp_f_gamma-Tuple{Array{T,1} where T,Array{T,1} where T,Array{T,1} where T}",
    "page": "Home",
    "title": "ElasticFDA.warp_f_gamma",
    "category": "method",
    "text": "Warp function by gamma\n\nwarp_f_gamma(time::Vector, f::Vector, gam::Vector)\n:param time: describes time samples\n:param f: describes function\n:param gam: describes warping function\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.warp_q_gamma-Tuple{Array{T,1} where T,Array{T,1} where T,Array{T,1} where T}",
    "page": "Home",
    "title": "ElasticFDA.warp_q_gamma",
    "category": "method",
    "text": "Warp srsf by gamma\n\nwarp_q_gamma(time::Vector, q::Vector, gam::Vector)\n:param time: describes time samples\n:param q: describes srsf\n:param gam: describes warping function\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.DP_mean",
    "page": "Home",
    "title": "ElasticFDA.DP_mean",
    "category": "function",
    "text": "Calculate mean function using Bayesian Dynamic Programming     DP_mean(f, times=5)     :param f: array (M,N) of N functions     :param times: MCMC parameter number of times to split\n\nReturns Dict containing\n:return distmfamily: distance matrix\n:return match_matrix: match_matrix\n:return position: position\n:return mu_5: mean function\n:return rtmatrix: rtmatrix\n:return sumdist: sum distance\n:return qt_fitted: qt fitted matrix\n:return esimator: estimator\n:return estimator2: estimator2\n:return regcurve: registered curves\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.Enorm-Tuple{Array{Complex{Float64},1}}",
    "page": "Home",
    "title": "ElasticFDA.Enorm",
    "category": "method",
    "text": "Enorm(x::Array{Complex{Float64},1})\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.Enorm-Tuple{Array{Float64,1}}",
    "page": "Home",
    "title": "ElasticFDA.Enorm",
    "category": "method",
    "text": "Calculate normal Energy on an Array\n\nEnorm(x::Array{Float64,1})\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.approx-Tuple{Any,Any,Any}",
    "page": "Home",
    "title": "ElasticFDA.approx",
    "category": "method",
    "text": "Linear interpolation\n\napprox(xd, yd, xi)\n:param xd: x samples\n:param yd: response samples\n:param xi: new x samples\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.arclength-Tuple{Array{T,1} where T}",
    "page": "Home",
    "title": "ElasticFDA.arclength",
    "category": "method",
    "text": "Calculate arc-length parametrization of function\n\narclength(f::Vector)\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.calc_j-Tuple{Any}",
    "page": "Home",
    "title": "ElasticFDA.calc_j",
    "category": "method",
    "text": "Calculate Jacobian of basis\n\ncalc_j(basis)\n:param basis: array of (2) from find_basis_normal\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.calculate_variance-Tuple{Any}",
    "page": "Home",
    "title": "ElasticFDA.calculate_variance",
    "category": "method",
    "text": "Calculate variance along curve\n\ncalculate_variance(beta)\n:param beta: array (n, T)\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.calculatecentroid-Tuple{Any}",
    "page": "Home",
    "title": "ElasticFDA.calculatecentroid",
    "category": "method",
    "text": "Calculate centroid of curve\n\ncalculatecentroid(beta)\n:param beta: array describing curve (n,T)\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.cumtrapz",
    "page": "Home",
    "title": "ElasticFDA.cumtrapz",
    "category": "function",
    "text": "Cumulative Trapezoidal Integration\n\ncumtrapz(x, y, dim=1)\n:param x: vector describing time samples\n:param y: array describing response\n:param dim: dimension to integrate over\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.cumtrapzmid-NTuple{4,Any}",
    "page": "Home",
    "title": "ElasticFDA.cumtrapzmid",
    "category": "method",
    "text": "Cumulative Trapezoidal Integration using midpoint\n\ncumtrapzmid(x, y, c)\n:param x: time samples\n:param y: resposne samples\n:param c: midpoint\n:param mid: midpoint location\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.curve_zero_crossing-NTuple{7,Any}",
    "page": "Home",
    "title": "ElasticFDA.curve_zero_crossing",
    "category": "method",
    "text": "Calculate zero crossing for optimal regression between curves\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.dp_bayes-NTuple{5,Any}",
    "page": "Home",
    "title": "ElasticFDA.dp_bayes",
    "category": "method",
    "text": "Calculate Dynamic Programming using Bayesian approach     dp_bayes(q1, q1L, q2L, times, cut)     :param q1: vector (N)     :param q1L: vector (q1L)     :param q2L: vector (q2L)     :param times: MCMC parameter number of simulations     :param cut: MCMC parameter number of cuts\n\n:return MatchIn2: warping function\n:return NDist: minimal distance\n:return q2LL: re-parameterized q2L\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.elastic_mlogistic-Tuple{Any,Any,Any}",
    "page": "Home",
    "title": "ElasticFDA.elastic_mlogistic",
    "category": "method",
    "text": "Calculate elastic m-logistic regression from function data f, for response y\n\nelastic_mlogistic(f, y, timet; B=None, df=20, max_itr=20, smooth=false)\n:param f: array (M,N) of N functions\n:param y: vector (N) of responses\n:param timet: vector (N) describing time samples\n:param B: matrix describing basis functions (M,N) (default=None generates a\n          B-spline basis\n:param df: degree of freedom of basis\n:param max_itr: maximum number of iterations\n:param smooth: smooth data\n\nReturns Dict describing regression\n:return alpha: intercept\n:return beta: regression function\n:return fn: aligned functions\n:return qn: aligned srsfs\n:return gamma: warping functions\n:return q: original srsfs\n:retrun B: basis functions\n:return type: type of regressions\n:return b: coefficients\n:return n_classes: number of classes\n:return LL: logistic loss\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.extrema_1s-Tuple{Array{T,1} where T,Array{T,1} where T}",
    "page": "Home",
    "title": "ElasticFDA.extrema_1s",
    "category": "method",
    "text": "Find location of change of sign of srsf that is arclength parameterized\n\nextrema_1s(t::Vector, q::Vector)\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.find_basis_normal-Tuple{Any}",
    "page": "Home",
    "title": "ElasticFDA.find_basis_normal",
    "category": "method",
    "text": "Find basis normal to srvf\n\nfind_basis_normal(q)\n:param q: array (n, T)\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.find_best_rotation-Tuple{Any,Any}",
    "page": "Home",
    "title": "ElasticFDA.find_best_rotation",
    "category": "method",
    "text": "Find best rotation between two srvfs\n\nfind_best_roation(q1,q2)\n:param q1: array (n, T)\n:param q2: array (n, T)\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.find_rotation_and_seed_q-Tuple{Any,Any}",
    "page": "Home",
    "title": "ElasticFDA.find_rotation_and_seed_q",
    "category": "method",
    "text": "Find best rotation and seed value between two srvfs, q1 and q2\n\nfind_rotation_and_seed_q(q1,q2)\n:param q1: array (n,T)\n:param q2: array (n,T)\n\n:return q2new: rotated srvf\n:return O_hat: rotation matrix\n:return tau: seed value\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.find_rotation_seed_coord-Tuple{Any,Any}",
    "page": "Home",
    "title": "ElasticFDA.find_rotation_seed_coord",
    "category": "method",
    "text": "Finds best rotation and seed value between two curves beta1, beta2\n\nfind_rotation_seed_coord(beta1,beta2)\n:param beta1: array (n,T)\n:param beta2: array (n,T)\n\n:return beta2new: rotated curve\n:return O_hat1: rotation matrix\n:return tau: seed value\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.findkarcherinv",
    "page": "Home",
    "title": "ElasticFDA.findkarcherinv",
    "category": "function",
    "text": "Find Karcher inverse of warping functions\n\nfindkarcherinv(warps, times, roundi=false)\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.gradient2",
    "page": "Home",
    "title": "ElasticFDA.gradient2",
    "category": "function",
    "text": "2-D Gradient\n\ngradient2(a::Array, dx::Float64=1, dy::Float=1)\n:param a: matrix\n:param dx: stepsize\n:param dy: stepsize\n\n:return dxdu: derivatives along x\n:return dydv: derivatives along y\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.gradient_spline",
    "page": "Home",
    "title": "ElasticFDA.gradient_spline",
    "category": "function",
    "text": "Calculate gradient of function using B-splines\n\ngradient_spline(timet::Vector, f, smooth=false)\n:param: timet: Vector describing time samples\n:param: f: Vector or Array (M,N) describing functions of M samples\n:param: smooth: smooth data (default = false)\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.gram_schmidt-Tuple{Any}",
    "page": "Home",
    "title": "ElasticFDA.gram_schmidt",
    "category": "method",
    "text": "Gram-Schmidt Orthogonalization of basis\n\ngram_schmidt(basis)\n:param basis: basis out of find_basis_normal\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.group_action_by_gamma-Tuple{Any,Any}",
    "page": "Home",
    "title": "ElasticFDA.group_action_by_gamma",
    "category": "method",
    "text": "Warp srvf by gamma\n\ngroup_action_by_gamma(q, gamma)\n:param q: array (n,T)\n:param gamma: vector (T)\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.group_action_by_gamma_coord-Tuple{Any,Any}",
    "page": "Home",
    "title": "ElasticFDA.group_action_by_gamma_coord",
    "category": "method",
    "text": "Warp curve f by gamma\n\ngroup_action_by_gamma_coord(f, gamma)\n:param f: array (n,T)\n:param gamma: vector (T)\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.innerprod_q2-Tuple{Any,Any}",
    "page": "Home",
    "title": "ElasticFDA.innerprod_q2",
    "category": "method",
    "text": "Find inner product between two srvfs, q1 and q2\n\ninnerprod_q2(q1, q2)\n:param q1: array (n,T)\n:param q2: array (n,T)\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.interp1_flat-Tuple{Any,Any,Any}",
    "page": "Home",
    "title": "ElasticFDA.interp1_flat",
    "category": "method",
    "text": "Linear interpolation when response contains flat regions\n\ninterp1_flat(x, y, xx)\n:param x: time samples\n:param y: response samples\n:param xx: new time samples\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.invert_gamma-Tuple{Array{T,1} where T}",
    "page": "Home",
    "title": "ElasticFDA.invert_gamma",
    "category": "method",
    "text": "Invert warping function\n\ninvert_gamma(gam)\n:param gam: vector describing warping function\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.itermatch-NTuple{26,Any}",
    "page": "Home",
    "title": "ElasticFDA.itermatch",
    "category": "method",
    "text": "MCMC iteration for group alignment\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.karcher_calc-NTuple{4,Any}",
    "page": "Home",
    "title": "ElasticFDA.karcher_calc",
    "category": "method",
    "text": "karcher mean calculation function     karcher_calc(beta, q, betamean, mu; mode=\'O\')     :param beta: array (n,T)     :param q: array (n,T)     :param betamean: array (n,T)     :param mu: array (n,T)     :param mode: Open (\'O\') or Closed (\'C\') curves     :param wscale: with scale (\'false\')\n\n:return v: shooting vector\n:return d: elastic distance\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.logistic_warp-Tuple{Array{T,1} where T,Array{T,1} where T,Array,Any}",
    "page": "Home",
    "title": "ElasticFDA.logistic_warp",
    "category": "method",
    "text": "Calculate warping for logistic regression\n\nlogistic_warp(beta, timet, q, y)\n:param beta: regression function\n:param timet: time samples\n:param q: srsf\n:param y: response\n\nReturns\n:return gamma: new gamma\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.logit_gradient!-NTuple{4,Any}",
    "page": "Home",
    "title": "ElasticFDA.logit_gradient!",
    "category": "method",
    "text": "Calculate gradient of logistic optimization in place\n\nlogit_gradient!(b, grad, X, y)\n:param b: coefficients\n:param grad: gradient\n:param X: matrix\n:param y: response\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.logit_hessian-NTuple{4,Any}",
    "page": "Home",
    "title": "ElasticFDA.logit_hessian",
    "category": "method",
    "text": "Calculate Hessian of logistic optimization\n\nlogit_hessian(s, b, X, y)\n:param s:\n:param b: coefficients\n:param X: matrix\n:param y: response\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.logit_loss-Tuple{Any,Any,Any}",
    "page": "Home",
    "title": "ElasticFDA.logit_loss",
    "category": "method",
    "text": "Calculate logistic loss function\n\nlogit_loss(b, X, y)\n:param b: coefficients\n:param X: matrix\n:param y: response\n\nReturns\n:return out: loss function\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.logit_optm-Tuple{Array{T,1} where T,Array{T,1} where T,Any,Any}",
    "page": "Home",
    "title": "ElasticFDA.logit_optm",
    "category": "method",
    "text": "Calculate logistic optimization function\n\nlogit_optm(x::Vector, grad::Vector, Phi, y)\n:param x: samples\n:param grad: gradient\n:param Phi: coefficient matrix\n:param y: response\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.match_ext-Tuple{Any,Array{Integer,1},Any,Any,Array{Integer,1},Any}",
    "page": "Home",
    "title": "ElasticFDA.match_ext",
    "category": "method",
    "text": "Find matching between two extremas\n\nmatch_ext(t1, ext1, d1, t2, ext2, d2)\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.meshgrid-Tuple{LinRange,LinRange}",
    "page": "Home",
    "title": "ElasticFDA.meshgrid",
    "category": "method",
    "text": "Creates Rectangular Grid in 2-D space\n\nmeshgrid(a::LinRange,b::LinRange)\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.mlogit_gradient!-NTuple{4,Any}",
    "page": "Home",
    "title": "ElasticFDA.mlogit_gradient!",
    "category": "method",
    "text": "Calculate m-logistic elastic regression loss function gradient in place\n\nmlogit_gradient!(b, grad, X, Y)\n:param b: coefficients\n:param grad: gradient\n:param X: matrix\n:param Y: response matrix\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.mlogit_loss-Tuple{Any,Any,Any}",
    "page": "Home",
    "title": "ElasticFDA.mlogit_loss",
    "category": "method",
    "text": "Calculate loss for m-logistic regression\n\nmlogit_loss(b, X, Y)\n:param b: coefficients\n:param X: matrix\n:param Y: response matrix\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.mlogit_optm-Tuple{Array{T,1} where T,Array{T,1} where T,Any,Any}",
    "page": "Home",
    "title": "ElasticFDA.mlogit_optm",
    "category": "method",
    "text": "Calculate warping for m-logistic elastic regression\n\nmlogit_optim(x, grad, Phi, Y)\n:param x: sample\n:param grad: gradient\n:param Phi: matrix\n:param Y: response matrix\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.mlogit_warp_grad-NTuple{5,Any}",
    "page": "Home",
    "title": "ElasticFDA.mlogit_warp_grad",
    "category": "method",
    "text": "Calculate m-logistic warping using gradient method\n\nmlogit_warp_grad(alpha, beta, timet, q, y; max_itr=8000, tol=1e-10,\n                 delt=0.008, display=0)\n:param alpha: intercept\n:param beta: regression function\n:param timet: vector describing time samples\n:param q: srsf\n:param y: response\n:param max_itr: maximum number of iterations\n:param tol: stopping tolerance\n:param delt: gradient step size\n:param display: display optimization iterations\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.mvnrand-Tuple{Any,Any,Any}",
    "page": "Home",
    "title": "ElasticFDA.mvnrand",
    "category": "method",
    "text": "Multivariate Normal random number generation\n\nmvnrand(mu, C, n)\n:param mu: mean vector\n:param C: covariance matrix\n:param n: number of samples\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.parallel_translate",
    "page": "Home",
    "title": "ElasticFDA.parallel_translate",
    "category": "function",
    "text": "Parallel translate srvf  along tangent space\n\nparallel_translate(w, q1, q2, basis, mode=\'O\')\n:param w: shooting vector\n:param q1: array (n,T)\n:param q2: array (n,T)\n:param basis: basis out of find_basis_normal\n:param mode: Open (\'O\') or Closed (\'C\') curves\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.phi-Tuple{Any}",
    "page": "Home",
    "title": "ElasticFDA.phi",
    "category": "method",
    "text": "Logistic function\n\nphi(t)\n\nReturns\n:return out: phi(t)\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.pre_proc_curve",
    "page": "Home",
    "title": "ElasticFDA.pre_proc_curve",
    "category": "function",
    "text": "Pre-processes curve by centering and projecting to tangent space\n\npre_proc_curve(beta, T=100)\n:param beta: array (n,T)\n:param T: number of re-sample points\n\n:return betanew: re-sampled and centered curve\n:return qnew: projected srvf\n:return A: rotation matrix\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.psi-Tuple{Any,Any,Any}",
    "page": "Home",
    "title": "ElasticFDA.psi",
    "category": "method",
    "text": "Calculate psi\n\npsi(x,a,q)\n:param x: array (n, T) of curve\n:param a: vector (n) of centroid\n:param q: array (n, T) of srvf\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.qtocurve",
    "page": "Home",
    "title": "ElasticFDA.qtocurve",
    "category": "function",
    "text": "Bayesian qtocurve function\n\nqtocurve(q, timet=0)\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.random_gamma-Tuple{Any,Any}",
    "page": "Home",
    "title": "ElasticFDA.random_gamma",
    "category": "method",
    "text": "Generates random warping functions based on gam\n\nrandom_gamma(gam, num)\n:param gam: array (M,N) describing warping functions\n:param num: number of functions to generate\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.regression_warp-Tuple{Array{T,1} where T,Array{T,1} where T,Array{T,1} where T,Float64,Float64}",
    "page": "Home",
    "title": "ElasticFDA.regression_warp",
    "category": "method",
    "text": "Optimization function to calculate warping for elastic regression\n\nregression_warp(beta, timet, q, y, alpha)\n:param beta: regression function\n:param timet: vector describing time samples\n:param q: vector describing srsf\n:param y: response value\n:param alpha: intercept\n\nReturns\n:return gamma_new: new gamma\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.rot_mat-Tuple{Any}",
    "page": "Home",
    "title": "ElasticFDA.rot_mat",
    "category": "method",
    "text": "Find rotation matrix for angle theta\n\nrot_mat(theta)\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.scale_curve-Tuple{Any}",
    "page": "Home",
    "title": "ElasticFDA.scale_curve",
    "category": "method",
    "text": "Scale curve to unit length\n\nscale_curve(beta)\n:param beta: array (n,T)\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.shift_f-Tuple{Any,Any}",
    "page": "Home",
    "title": "ElasticFDA.shift_f",
    "category": "method",
    "text": "Shift curve f by tau\n\nshift_f(f, tau)\n:param f: array (n,T)\n:param tau: scalar\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.simuiter-NTuple{17,Any}",
    "page": "Home",
    "title": "ElasticFDA.simuiter",
    "category": "method",
    "text": "MCMC iteration for pairwise alignment\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.simul_align-Tuple{Array{T,1} where T,Array{T,1} where T}",
    "page": "Home",
    "title": "ElasticFDA.simul_align",
    "category": "method",
    "text": "Simultaneous alignment between two functions\n\nsimul_align(f1::Vector, f2::Vector)\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.simul_gam-Tuple{Array{Float64,1},Any,Any,Array{Float64,1},Any,Any,Array{Float64,1}}",
    "page": "Home",
    "title": "ElasticFDA.simul_gam",
    "category": "method",
    "text": "Calculate warping from q2 to q2 from simultaneous warping\n\nsimul_gam(u, g1,g2,t,s1,s2,tt)\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.simul_reparam-Tuple{Any,Any,Any}",
    "page": "Home",
    "title": "ElasticFDA.simul_reparam",
    "category": "method",
    "text": "Find simultaneous re-parametrization\n\nsimul_reparam(te1, te2, mpath)\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.sqrt_mean-Tuple{Array}",
    "page": "Home",
    "title": "ElasticFDA.sqrt_mean",
    "category": "method",
    "text": "Calculate sqrt mean of warping functions\n\nsqrt_mean(gam)\n:param gam: array (M,N) describing warping functions\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.sqrt_mean_inverse-Tuple{Array}",
    "page": "Home",
    "title": "ElasticFDA.sqrt_mean_inverse",
    "category": "method",
    "text": "Calculate sqrt mean inverse of warping function\n\nsqrt_mean_inverse(gam)\n:param gam: array (M,N) describing warping functions\n\n\n\n\n\n"
},

{
    "location": "#ElasticFDA.zero_crossing-NTuple{8,Any}",
    "page": "Home",
    "title": "ElasticFDA.zero_crossing",
    "category": "method",
    "text": "Calculate zero crossing of optimal warping function\n\nzero_crossing(Y,q,bt,timet,y_max,y_min,gmax,gmin)\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [ElasticFDA]\nOrder = [:type, :function]"
},

]}
