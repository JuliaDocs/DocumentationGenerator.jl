var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "(Image: Build Status) (Image: Coverage Status)"
},

{
    "location": "#Motivation-1",
    "page": "Readme",
    "title": "Motivation",
    "category": "section",
    "text": "This package implements a novel, fast and robust algorithm to estimate interactive fixed effect models. The definition of interactive fixed effects follows Bai (2009).Formally, denote T(i) and I(i)) the two categorical dimensions associated with observation i (typically time and id).  This package estimates the set of coefficients β, of factors (f1, .., fr) and of loadings (λ1, ..., λr) in the model(Image: minimization)"
},

{
    "location": "#Syntax-1",
    "page": "Readme",
    "title": "Syntax",
    "category": "section",
    "text": "To estimate an interactive fixed effect model, one needs to specify a formula, a factor model with ife, and, optionally, a set of fixed effects with fe, a way to compute standard errors with vcov, and a weight variable with weights.using DataFrames, RDatasets, InteractiveFixedEffectModels\ndf = dataset(\"plm\", \"Cigar\")\ndf[:pState] =  categorical(df[:State])\ndf[:pYear] =  categorical(df[:Year])\nregife(df, @model(Sales ~ Price, ife = (pState + pYear, 2), fe = pState, save = true))\n#                      Linear Factor Model                      \n#================================================================\n#Number of obs:             1380  Degree of freedom:          199\n#R2:                       0.976  R2 within:                0.435\n#Iterations:                 436  Converged:                 true\n#================================================================\n#        Estimate Std.Error  t value Pr(>|t|) Lower 95% Upper 95%\n#----------------------------------------------------------------\n#Price  -0.425372 0.0141163 -30.1334    0.000 -0.453068 -0.397677\n#================================================================A typical formula is composed of one dependent variable and a set of  regressors	using RDatasets, DataFrames, InteractiveFixedEffectModels\n	df = dataset(\"plm\", \"Cigar\")\n	```\n\n	When the only regressor is `0`, `fit` fits a factor model\n	```julia\n	Sales ~ 0\n	```\n\n	Otherwise, `fit` fits a linear model with interactive fixed effects (Bai (2009))\n	```julia\n	Sales ~ Price + Year\n	```\n- Interactive fixed effects are indicated with the keyword argument `ife`. Variables must be of type `PooledDataVector`. The rank is the number of components to use. facFor instance, for a factor model with id variable `State`, time variable `Year`, and rank `r` equal to 2:\n\n	```julia\n	df[:pState] =  categorical(df[:State])\n	df[:pYear] =  categorical(df[:Year])\n	ife = (pState + pYear, 2)\n	```\n\n- Fixed effects are indicated with the keyword argument `fe`. Use only the variables specified in the factor model. See [FixedEffectModels.jl](https://github.com/matthieugomez/FixedEffectModels.jl) for more information\n\n	```julia\n	fe = pState\n	fe = pYear\n	fe = pState + pYear\n	```\n\n- Standard errors are indicated with the keyword argument `vcov`\n	```julia\n	vcov = robust()\n	vcov = cluster(StatePooled)\n	vcov = cluster(StatePooled, YearPooled)\n	```\n\n- weights are indicated with the keyword argument `weights`\n	```julia\n	weights = Pop\n	```\n\n- `method` allows to choose between two algorithms:\n	- `levenberg_marquardt`\n	- `dogleg` \n\n- The option `save = true` saves a new dataframe storing residuals, factors, loadings and the eventual fixed effects. Importantly, the returned dataframe is aligned with the initial dataframe (rows not used in the estimation are simply filled with NA).\n\n\n\n\n## Local minimum vs global minimum\nThe algorithm can estimate models with missing observations per id x time, multiple observations per id x time, and weights.\n\nHowever, in these cases, the optimization problem may have local minima. The algorithm tries to catch these cases, and, if need be, restart the optimization until the global minimum is reached. However I am not sure that all the cases are caught. \n\n## FAQ\n#### Does the package estimate PCA / factor models?\n\nYes. Factor models are a particular case of interactive fixed effect models. Simply specify `0` as the lhs of the formula.julia using DataFrames, RDatasets, InteractiveFixedEffectModels df = dataset(\"plm\", \"Cigar\") df[:pState] =  categorical(df[:State]) df[:pYear] =  categorical(df[:Year]) regife(df, @model(Sales ~ 0, ife = (pState + pYear, 2), fe = pState, save = true))Compared to the usual SVD method, the package estimates models with multiple (or missing) observations per id x time.\n\n#### When should one use interactive fixed effects models?\nSome litterature using this estimation procedure::\n\n- Eberhardt, Helmers, Strauss (2013) *Do spillovers matter when estimating private returns to R&D?*\n- Hagedorn, Karahan, Movskii (2015) *Unemployment Benefits and Unemployment in the Great Recession: The Role of Macro Effects*\n- Hagedorn, Karahan, Movskii (2015) *The impact of unemployment benefit extensions on employment: the 2014 employment miracle?* \n- Totty (2015) *The Effect of Minimum Wages on Employment: A Factor Model Approach*\n\n#### How are standard errors computed?\nErrors are obtained by regressing y on x and covariates of the form `i.id#c.year` and `i.year#c.id`. This way of computing standard errors is hinted in section 6 of of Bai (2009).\n\n\n#### Does this command implement the bias correction term in Bai (2009)?\nIn presence of cross or time correlation beyond the factor structure, the estimate for beta is consistent but biased (see Theorem 3 in Bai 2009, which derives the correction term in special cases). However, this package does not implement any correction. You may want to check that your residuals are approximately i.i.d.\n\n\n\n## Related Packages\n- https://github.com/joidegn/FactorModels.jl : fits and predict factor models on matrices\n- https://github.com/madeleineudell/LowRankModels.jl : fits general low rank approximations on matrices\n- https://github.com/aaw/IncrementalSVD.jl: implementation of the backpropagation algorithm\n\n## Install\njulia using Pkg Pkg.add(\"InteractiveFixedEffectModels\") ```"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [InteractiveFixedEffectModels]\nOrder = [:type, :function]"
},

]}
