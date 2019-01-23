var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "BayesianIntegral",
    "title": "BayesianIntegral",
    "category": "page",
    "text": ""
},

{
    "location": "#BayesianIntegral-1",
    "page": "BayesianIntegral",
    "title": "BayesianIntegral",
    "category": "section",
    "text": "This does Bayesian integration of functions of the form:int_x in Re^d f(x) g(x)Where d is the dimensionality of the space (so x is d dimensional), f(x) is the function of interest and g(x) is a pdf representing the density of each x value.This package uses the term Bayesian Integration to mean approximating a function with a kriging metamodel (aka a gaussian process model) and then integrating under it. A kriging metamodel has the nice feature that uncertainty about the nature of the function is explicitly modelled (unlike for instance a approximation with Chebyshev polynomials) and the Bayesian Integral uses this feature to give a Gaussian distribution representing the probabilities of various integral values. The output of the bayesian_integral_gaussian_exponential function is the expectation and variance of this distribution."
},

{
    "location": "1_bayesian_integration/#",
    "page": "1.0 Bayesian Integration",
    "title": "1.0 Bayesian Integration",
    "category": "page",
    "text": ""
},

{
    "location": "1_bayesian_integration/#.0-Bayesian-Integration-1",
    "page": "1.0 Bayesian Integration",
    "title": "1.0 Bayesian Integration",
    "category": "section",
    "text": "This package implements Bayesian Integration as described  by Rasmussen & Ghahramani (2003) and before that by O\'Hagan (1991). These both use Kriging techniques to map out a function. The function is then integrated using this kriging map together with a multivariate Gaussian distribution gives a mass at each point in the function.At present on an exponential kernel is supported and only a multivariate Gaussian distribution for assigning mass to various points in the function. Thus the bayesian_integral_gaussian_exponential function is the only integration function in the package. The exponential kernel used is:textCov(f(x^p) f(x^q))=w_0e^-frac12(sum_i=1^dfracx^p_i - x_i^qw_i)^2Where d is the dimensionality of the space the points x^p and x^q are defined in. w_0 and w_i are hyperparameters which need to be input. This is done in the gaussian_kernel_hyperparameters structure. These hyperparameters can be trained with the functions in the next section of the documentation. For simplicity however we have all parameters being 1.0 in the example below:using BayesianIntegral\nusing Sobol\nsamples = 25\ndims = 2\np(x) = 1.0\ns = SobolSeq(dims) # We use Sobol numbers to choose where to sample but we could choose any points.\nX = convert( Array{Float64}, hcat([next!(s, repeat([0.5] , outer = dims)     ) for i = 1:samples]...)\' )\nfunction func(X::Array{Float64,1})\n    return sum(X) - prod(X)\nend\ny = Array{Float64,1}(undef,samples)\nfor i in 1:samples\n    y[i] = func(X[i,:])\nend\n# We need hyperparameters which describe what covariance exists in function values across every dimension.\ncov_func_parameters = gaussian_kernel_hyperparameters(1.0, repeat([10.0] , outer = dims))\n# Now we create a vector of means and a covariance matrix for the multivariate normal distribution describing the\n# probability mass at each point in the function.\nprob_means = repeat([0.0] , outer = dims)\ncovar = Symmetric(diagm(0 => ones(dims)))\n# Some noise can be added to the function values. If a function is deterministic then no noise exists but a small\n# amount can avoid issues with numerical imprecision.\nnoise = 0.001\n# Now finding the integral\ninteg = bayesian_integral_gaussian_exponential(X, y, prob_means, covar, cov_func_parameters, noise)We get a bayesian integral of N(0308 00004) in terms of expectation, variance."
},

{
    "location": "2_training_hyperparameters/#",
    "page": "2.0 Training Hyperparameters",
    "title": "2.0 Training Hyperparameters",
    "category": "page",
    "text": ""
},

{
    "location": "2_training_hyperparameters/#.0-Training-Hyperparameters-1",
    "page": "2.0 Training Hyperparameters",
    "title": "2.0 Training Hyperparameters",
    "category": "section",
    "text": "This package currently supports two ways of training hyperparameters. The first is Maximum likelihood with stochastic gradient descent while the second uses a momentum based algorithm to maximise likelihood (Blum and Riedmiller 2013)."
},

{
    "location": "2_training_hyperparameters/#.1-Maximum-Likelihood-with-Stochastic-Gradient-Descent-1",
    "page": "2.0 Training Hyperparameters",
    "title": "2.1 Maximum Likelihood with Stochastic Gradient Descent",
    "category": "section",
    "text": "This is done by the calibrate_by_ML_with_SGD function. The procedure is:Extract a sample of the requested size from the dataset. Sampling is done without replacement (or else the K matrix is singular and not invertible)\nFind the likelihood of the dataset given the input hyperparameters. Also find the marginal likelihood (with respect to all hyperparameters) and use the Newtonian method to suggest another set of hyperparameters. The step to the new parameter set (as chosen by the Newtonian method) can be adjusted by the step_multiple parameter.This process continues for a user-specifiable number of iterates.Note that using stochastic gradient descent is important here as the major time here is in inverting an NxN matrix which has a complexity of about O(N^23). Thus if only 10\\% of observations are used in each iterate this makes the calibration more than 100 times faster than using all observations.This function can be used in the following way:old_cov_func_parameters = gaussian_kernel_hyperparameters(1.0, repeat([10.0] , outer = dims))\nsteps = 100                           # How many optimisation steps\nbatch_size = 5                        # Number of observations per sample\nstep_multiple = 1.0                   # How far to step\nnoise = 0.001                         # Noise parameter\nseed = 2                              # Random number seed (for gathering random samples)\nnew_cov_func_parameters = calibrate_by_ML_with_SGD(X, y, cov_func_parameters, steps, batch_size, step_multiple, noise, seed)"
},

{
    "location": "2_training_hyperparameters/#.2-RProp-1",
    "page": "2.0 Training Hyperparameters",
    "title": "2.2 RProp",
    "category": "section",
    "text": "This technique also maximises Maximum Likelihood. The main difference is that rather than taking Newtonian steps towards an maximum, the Rprop algorithm ignores the magnitude of the marginal likelihood and looks only at the sign. It moves a small distance uphill towards a higher likelihood. If the slope is still positive at this new point it will speed up and step by a greater amount in this direction. If the sign of the gradient ever changes it will slow down. It is thus a momentum based optimiser.This is implemented with the calibrate_by_ML_with_Rprop function as below:old_cov_func_parameters = gaussian_kernel_hyperparameters(1.0, repeat([10.0] , outer = dims))\nparams  = RProp_params(1.01,0.99,0.2,5.0,0.5)    # parameters for the RProp algorithm.\nnoise = 0.001                                    # Noise parameter\nMaxIter = 2000                                   # Number of steps\nnew_cov_func_parameters = train_with_RProp(X, y, cov_func_parameters, MaxIter, noise, params)"
},

{
    "location": "99_refs/#",
    "page": "References",
    "title": "References",
    "category": "page",
    "text": ""
},

{
    "location": "99_refs/#References-1",
    "page": "References",
    "title": "References",
    "category": "section",
    "text": "Blum, M. and Riedmiller, M. 2013. \"Optimization of Gaussian Process Hyperparameters using Rprop\". European Symposium on Artificial Neural Networks.Jones, D. and Schonlau, M. and Welch, W. 1998. \"Efficient Global Optimization of Expensive Black-Box Functions\". Journal of Global Optimization 13. 455-492.O\'Hagan, A. 1991. \"Bayes-Hermite Quadrature\". Journal of Statistical Planning and Inference 29 : 245-260.Rasmussen, Carl, and Ghahramani, Zoubin. 2003. \"Bayesian Monte Carlo\". Advances in Neural Information Processing Systems."
},

]}
