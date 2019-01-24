var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "(Image: Build Status) (Image: Coverage Status)This package estimates linear models with high dimensional categorical variables and/or instrumental variables. Its objective is similar to the Stata command reghdfe and the R function felm. The package is usually much faster than these two options.(Image: benchmark)"
},

{
    "location": "#Estimate-a-model-1",
    "page": "Readme",
    "title": "Estimate a model",
    "category": "section",
    "text": "To estimate a @model, specify  a formula with, eventually, a set of fixed effects with the argument fe, a way to compute standard errors with the argument vcov, and a weight variable with weights.using DataFrames, RDatasets, FixedEffectModels\ndf = dataset(\"plm\", \"Cigar\")\ndf[:StateCategorical] =  categorical(df[:State])\ndf[:YearCategorical] =  categorical(df[:Year])\nreg(df, @model(Sales ~ NDI, fe = StateCategorical + YearCategorical, weights = Pop, vcov = cluster(StateCategorical)))\n# =====================================================================\n# Number of obs:               1380   Degrees of freedom:            31\n# R2:                         0.804   R2 within:                  0.139\n# F-Statistic:              13.3481   p-value:                    0.000\n# Iterations:                     6   Converged:                   true\n# =====================================================================\n#         Estimate  Std.Error  t value Pr(>|t|)   Lower 95%   Upper 95%\n# ---------------------------------------------------------------------\n# NDI  -0.00526264 0.00144043 -3.65351    0.000 -0.00808837 -0.00243691\n# =====================================================================A typical formula is composed of one dependent variable, exogeneous variables, endogeneous variables, and instrumental variables.	dependent variable ~ exogenous variables + (endogenous variables ~ instrumental variables)\n	```\n\n- Fixed effect variables are indicated with the keyword argument `fe`. They must be of type CategoricalArray (use `categorical` to convert a variable to a `CategoricalArray`).\n\n	```julia\n	df[:StateCategorical] =  categorical(df[:State])\n	# one high dimensional fixed effect\n	fe = StateCategorical\n	```\n	You can add an arbitrary number of high dimensional fixed effects, separated with `+`\n	```julia\n	df[:YearCategorical] =  categorical(df[:Year])\n	fe = StateCategorical + YearCategorical\n	```\n	Interact multiple categorical variables using `&` \n	```julia\n	fe = StateCategorical&DecPooled\n	```\n	Interact a categorical variable with a continuous variable using `&`\n	```julia\n	fe = StateCategorical + StateCategorical&Year\n	```\n	Alternative, use `*` to add a categorical variable and its interaction with a continuous variable\n	```julia\n	fe = StateCategorical*Year\n	# equivalent to fe = StateCategorical + StateCategorical&year\n	```\n\n- Standard errors are indicated with the keyword argument `vcov`.\n	```julia\n	vcov = robust\n	vcov = cluster(StateCategorical)\n	vcov = cluster(StateCategorical + YearCategorical)\n	```\n\n- weights are indicated with the keyword argument `weights`\n	```julia\n	weights = Pop\n	```\n\nArguments of `@model` are captured and transformed into expressions. If you want to program with `@model`, use expression interpolations:julia using DataFrames, RDatasets, FixedEffectModels df = dataset(\"plm\", \"Cigar\") w = :Pop reg(df, @model(Sales ~ NDI, weights = w)) ```"
},

{
    "location": "#Output-1",
    "page": "Readme",
    "title": "Output",
    "category": "section",
    "text": "reg returns a light object. It is composed of the vector of coefficients & the covariance matrix\na boolean vector reporting rows used in the estimation\na set of scalars (number of observations, the degree of freedoms, r2, etc)\nwith the option save = true, a dataframe aligned with the initial dataframe with residuals and, if the model contains high dimensional fixed effects, fixed effects estimates.Methods such as predict, residuals are still defined but require to specify a dataframe as a second argument.  The problematic size of lm and glm models in R or Julia is discussed here, here, here here (and for absurd consequences, here and there).You may use RegressionTables.jl to get publication-quality regression tables."
},

{
    "location": "#Solution-Method-1",
    "page": "Readme",
    "title": "Solution Method",
    "category": "section",
    "text": "Denote the model y = X β + D θ + e where X is a matrix with few columns and D is the design matrix from categorical variables. Estimates for β, along with their standard errors, are obtained in two steps:y, X  are regressed on D using the package FixedEffects.jl\nEstimates for β, along with their standard errors, are obtained by regressing the projected y on the projected X (an application of the Frisch Waugh-Lovell Theorem)\nWith the option save = true, estimates for the high dimensional fixed effects are obtained after regressing the residuals of the full model minus the residuals of the partialed out models on D using the package FixedEffects.jl"
},

{
    "location": "#Parallel-/-multi-threading-1",
    "page": "Readme",
    "title": "Parallel / multi-threading",
    "category": "section",
    "text": "The package has support for parallel computing and multi-threading. In this case, each regressor is demeaned in a different processor/thread. It only allows for a modest speedup (between 10% and 60%) since the demeaning operation is typically memory bound.For parallel computing, the syntax is as follow:```julia\nusing Distributed\naddprocs(n)\n@everywhere using DataFrames, FixedEffectModels\nreg(df, @model(Sales ~ NDI, fe = StateCategorical + YearCategorical), method = :lsmr_parallel)\n```For multi-threading,  before starting Julia, set the number of threads to n with```\nexport JULIA_NUM_THREADS=n\n```\nThen, in Julia, use the option `lsmr_threads`\n```julia\nusing DataFrames, FixedEffectModels\nreg(df, @model(Sales ~ NDI, fe = StateCategorical + YearCategorical), method = :lsmr_threads)\n```"
},

{
    "location": "#References-1",
    "page": "Readme",
    "title": "References",
    "category": "section",
    "text": "Baum, C. and Schaffer, M. (2013) AVAR: Stata module to perform asymptotic covariance estimation for iid and non-iid data robust to heteroskedasticity, autocorrelation, 1- and 2-way clustering, and common cross-panel autocorrelated disturbances. Statistical Software Components, Boston College Department of Economics.Correia, S. (2014) REGHDFE: Stata module to perform linear or instrumental-variable regression absorbing any number of high-dimensional fixed effects. Statistical Software Components, Boston College Department of Economics.Fong, DC. and Saunders, M. (2011) LSMR: An Iterative Algorithm for Sparse Least-Squares Problems.  SIAM Journal on Scientific ComputingGaure, S. (2013) OLS with Multiple High Dimensional Category Variables. Computational Statistics and Data AnalysisKleibergen, F, and Paap, R. (2006) Generalized reduced rank tests using the singular value decomposition. Journal of econometrics Kleibergen, F. and Schaffer, M.  (2007) RANKTEST: Stata module to test the rank of a matrix using the Kleibergen-Paap rk statistic. Statistical Software Components, Boston College Department of Economics."
},

{
    "location": "autodocs/#FixedEffectModels.partial_out-Tuple{DataFrames.AbstractDataFrame,Model}",
    "page": "Docstrings",
    "title": "FixedEffectModels.partial_out",
    "category": "method",
    "text": "Partial out variables in a Dataframe\n\nArguments\n\ndf::AbstractDataFrame\nmodel::Model: A Model created using @model. See @model.\nadd_mean::Bool: Should the initial mean added to the returned variable?\nmethod::Symbol: A symbol for the method. Default is :lsmr (akin to conjugate gradient descent). Other choices are :qr and :cholesky (factorization methods)\nmaxiter::Integer: Maximum number of iterations\ntol::Real: Tolerance\n\nReturns\n\n::DataFrame: a dataframe with as many columns as there are dependent variables and as many rows as the original dataframe.\n::Vector{Int}: a vector of iterations for each column\n::Vector{Bool}: a vector of success for each column\n\nDetails\n\npartial_out returns the residuals of a set of variables after regressing them on a set of regressors. The syntax is similar to reg - but it accepts multiple dependent variables. It returns a dataframe with as many columns as there are dependent variables and as many rows as the original dataframe. The regression model is estimated on only the rows where none of the dependent variables is missing. With the option add_mean = true, the mean of the initial variable is added to the residuals.\n\nExamples\n\nusing  RDatasets, DataFrames, FixedEffectModels, Gadfly\ndf = dataset(\"datasets\", \"iris\")\ndf[:SpeciesC] =  categorical(df[:Species])\nresult = partial_out(df, @model(SepalWidth + SepalLength ~ 1, fe = SpeciesC), add_mean = true)\nplot(layer(result[1], x=\"SepalWidth\", y=\"SepalLength\", Stat.binmean(n=10), Geom.point),\n   layer(result[1], x=\"SepalWidth\", y=\"SepalLength\", Geom.smooth(method=:lm)))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FixedEffectModels.reg-Tuple{DataFrames.AbstractDataFrame,Model}",
    "page": "Docstrings",
    "title": "FixedEffectModels.reg",
    "category": "method",
    "text": "Estimate a linear model with high dimensional categorical variables / instrumental variables\n\nArguments\n\ndf::AbstractDataFrame\nmodel::Model: A model created using @model\nsave::Union{Bool, Symbol} = false: Should residuals and eventual estimated fixed effects saved in a dataframe? Use save = :residuals to only save residuals. Use save = :fe to only save fixed effects.\nmethod::Symbol = :lsmr: Method to deman regressors. :lsmr is akin to conjugate gradient descent.  With parallel use :lsmr_parallel. To use multi threaded use lsmr_threads. Other choices are :qr and :cholesky (factorization methods)\ncontrasts::Dict = Dict() An optional Dict of contrast codings for each categorical variable in the formula.  Any unspecified variables will have DummyCoding.\nmaxiter::Integer = 10000: Maximum number of iterations\ntol::Real =1e-8: Tolerance\n\nDetails\n\nModels with instruments variables are estimated using 2SLS. reg tests for weak instruments by computing the Kleibergen-Paap rk Wald F statistic, a generalization of the Cragg-Donald Wald F statistic for non i.i.d. errors. The statistic is similar to the one returned by the Stata command ivreg2.\n\nExamples\n\nusing DataFrames, RDatasets, FixedEffectModels\ndf = dataset(\"plm\", \"Cigar\")\ndf[:StateC] =  categorical(df[:State])\ndf[:YearC] =  categorical(df[:Year])\nreg(df, @model(Sales ~ Price, fe = StateC + YearC))\nreg(df, @model(Sales ~ NDI, fe = StateC + StateC&Year))\nreg(df, @model(Sales ~ NDI, fe = StateC*Year))\nreg(df, @model(Sales ~ (Price ~ Pimin)))\nreg(df, @model(Sales ~ Price, weights = Pop))\nreg(df, @model(Sales ~ NDI, subset = State .< 30))\nreg(df, @model(Sales ~ NDI, vcov = robust))\nreg(df, @model(Sales ~ NDI, vcov = cluster(StateC)))\nreg(df, @model(Sales ~ NDI, vcov = cluster(StateC + YearC)))\nreg(df, @model(Sales ~ YearC), contrasts = Dict(:YearC => DummyCoding(base = 80)))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [FixedEffectModels]\nOrder = [:type, :function]"
},

]}
