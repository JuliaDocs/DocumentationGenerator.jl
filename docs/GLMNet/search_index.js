var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#GLMNet-1",
    "page": "Readme",
    "title": "GLMNet",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage Status)glmnet is an R package by Jerome Friedman, Trevor Hastie, Rob Tibshirani that fits entire Lasso or ElasticNet regularization paths for linear, logistic, multinomial, and Cox models using cyclic coordinate descent. This Julia package wraps the Fortran code from glmnet."
},

{
    "location": "#Quick-start-1",
    "page": "Readme",
    "title": "Quick start",
    "category": "section",
    "text": "To fit a basic model:julia> using GLMNet\n\njulia> y = collect(1:100) + randn(100)*10;\n\njulia> X = [1:100 (1:100)+randn(100)*5 (1:100)+randn(100)*10 (1:100)+randn(100)*20];\n\njulia> path = glmnet(X, y)\nLeast Squares GLMNet Solution Path (55 solutions for 4 predictors in 163 passes):\n55x3 DataFrame:\n         df  pct_dev        λ\n[1,]      0      0.0  27.1988\n[2,]      1 0.154843  24.7825\n[3,]      1 0.283396  22.5809\n  :\n[53,]     2 0.911956 0.215546\n[54,]     2 0.911966 0.196397\n[55,]     2 0.911974  0.17895path represents the Lasso or ElasticNet fits for varying values of λ. The value of the intercept for each λ value are in path.a0. The coefficients for each fit are stored in compressed form in path.betas.julia> path.betas\n4x55 CompressedPredictorMatrix:\n 0.0  0.083706  0.159976  0.22947  …  0.929157    0.929315\n 0.0  0.0       0.0       0.0         0.00655753  0.00700862\n 0.0  0.0       0.0       0.0         0.0         0.0\n 0.0  0.0       0.0       0.0         0.0         0.0This CompressedPredictorMatrix can be indexed as any other AbstractMatrix, or converted to a Matrix using convert(Matrix, path.betas).To predict the output for each model along the path for a given set of predictors, use predict:julia> predict(path, [22 22+randn()*5 22+randn()*10 22+randn()*20])\n1x55 Array{Float64,2}:\n 51.7098  49.3242  47.1505  45.1699  …  25.1036  25.0878  25.0736To find the best value of λ by cross-validation, use glmnetcv:julia> cv = glmnetcv(X, y)\nLeast Squares GLMNet Cross Validation\n55 models for 4 predictors in 10 folds\nBest λ 0.343 (mean loss 76.946, std 12.546)\n\njulia> argmin(cv.meanloss)\n48\n\njulia> cv.path.betas[:, 48]\n4-element Array{Float64,1}:\n 0.926911\n 0.00366805\n 0.0\n 0.0"
},

{
    "location": "#Fitting-models-1",
    "page": "Readme",
    "title": "Fitting models",
    "category": "section",
    "text": "glmnet has two required parameters: the m x n predictor matrix X and the dependent variable y. It additionally accepts an optional third argument, family, which can be used to specify a generalized linear model. Currently, only Normal() (least squares, default), Binomial() (logistic), and Poisson() are supported, although the glmnet Fortran code also implements a Cox model. For logistic models, y is a m x 2 matrix, where the first column is the count of negative responses for each row in X and the second column is the count of positive responses. For all other models, y is a vector.glmnet also accepts many optional parameters, described below:weights: A vector of weights for each sample of the same size as y.\nalpha: The tradeoff between lasso and ridge regression. This defaults to 1.0, which specifies a lasso model.\npenalty_factor: A vector of length n of penalties for each predictor in X. This defaults to all ones, which weights each predictor equally. To specify that a predictor should be unpenalized, set the corresponding entry to zero.\nconstraints: An n x 2 matrix specifying lower bounds (first column) and upper bounds (second column) on each predictor. By default, this is [-Inf Inf] for each predictor in X.\ndfmax: The maximum number of predictors in the largest model.\npmax: The maximum number of predictors in any model.\nnlambda: The number of values of λ along the path to consider.\nlambda_min_ratio: The smallest λ value to consider, as a ratio of the value of λ that gives the null model (i.e., the model with only an intercept). If the number of observations exceeds the number of variables, this defaults to 0.0001, otherwise 0.01.\nlambda: The λ values to consider. By default, this is determined from nlambda and lambda_min_ratio.\ntol: Convergence criterion. Defaults to 1e-7.\nstandardize: Whether to standardize predictors so that they are in the same units. Defaults to true. Beta values are always presented on the original scale.\nintercept: Whether to fit an intercept term. The intercept is always unpenalized. Defaults to true.\nmaxit: The maximum number of iterations of the cyclic coordinate descent algorithm. If convergence is not achieved, a warning is returned."
},

{
    "location": "#See-also-1",
    "page": "Readme",
    "title": "See also",
    "category": "section",
    "text": "Lasso.jl, a pure Julia implementation of the glmnet coordinate descent algorithm that often achieves better performance.\nLARS.jl, an implementation of least angle regression for fitting entire linear (but not generalized linear) Lasso and Elastic Net coordinate paths."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [GLMNet]\nOrder = [:type, :function]"
},

]}
