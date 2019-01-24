var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#InterestRates.jl-1",
    "page": "Readme",
    "title": "InterestRates.jl",
    "category": "section",
    "text": "(Image: License) (Image: Build Status) (Image: codecov.io)Tools for Term Structure of Interest Rates calculation, aimed at the valuation of financial contracts, specially Fixed Income instruments.Installation:julia> Pkg.add(\"InterestRates\")"
},

{
    "location": "#Concept-1",
    "page": "Readme",
    "title": "Concept",
    "category": "section",
    "text": "A Term Structure of Interest Rates, also known as zero-coupon curve, is a function f(t) → y that maps a given maturity t onto the yield y of a bond that matures at t and pays no coupons (zero-coupon bond).For instance, say the current price of a bond that pays exactly 10 in 1 year is 9.25. If one buys that bond for the current price and holds it until the maturity of the contract, that investor will gain 0.75, which represents 8.11% of the original price. That means that the bond is currently priced with a yield of 8.11% per year.It\'s not feasible to observe prices for each possible maturity. We can observe only a set of discrete data points of the yield curve. Therefore, in order to determine the entire term structure, one must choose an interpolation method, or a term structure model."
},

{
    "location": "#Data-Structure-for-Interest-Rate-Curve-1",
    "page": "Readme",
    "title": "Data Structure for Interest Rate Curve",
    "category": "section",
    "text": "All yield curve calculation is built around AbstractIRCurve. The module expects that the concrete implementations of AbstractIRCurve provide the following methods:curve_get_name(curve::AbstractIRCurve) → String\ncurve_get_daycount(curve::AbstractIRCurve) → DayCountConvention\ncurve_get_compounding(curve::AbstractIRCurve) → CompoundingType\ncurve_get_method(curve::AbstractIRCurve) → CurveMethod\ncurve_get_date(curve::AbstractIRCurve) → Date, returns the date when the curve is observed.\ncurve_get_dtm(curve::AbstractIRCurve) → Vector{Int}, used for interpolation methods, returns daystomaturity on curve\'s daycount convention.\ncurve_get_zero_rates(curve::AbstractIRCurve) → Vector{Float64}, used for interpolation methods, parameters[i] returns yield for maturity dtm[i].\ncurve_get_model_parameters(curve::AbstractIRCurve) → Vector{Float64}, used for parametric methods, returns model\'s constant parameters.This package provides a default implementation of AbstractIRCurve interface, which is a database-friendly data type: IRCurve.mutable struct IRCurve <: AbstractIRCurve\n	name::String\n	daycount::DayCountConvention\n	compounding::CompoundingType\n	method::CurveMethod\n	date::Date\n	dtm::Vector{Int}\n	zero_rates::Vector{Float64}\n	parameters::Vector{Float64}\n	dict::Dict{Symbol, Any}		# holds pre-calculated values for optimization, or additional parameters.\n#...The type DayCountConvention sets the convention on how to count the number of days between dates, and also how to convert that number of days into a year fraction.Given an initial date D1 and a final date D2, here\'s how the distance between D1 and D2 are mapped into a year fraction for each supported day count convention:Actual360 : (D2 - D1) / 360\nActual365 : (D2 - D1) / 365\nBDays252 : bdays(D1, D2) / 252, where bdays is the business daysbetween D1 and D2 from BusinessDays.jl package.The type CompoundingType sets the convention on how to convert a yield into an Effective Rate Factor.Given a yield r and a maturity year fraction t, here\'s how each supported compounding type maps the yield to Effective Rate Factors:ContinuousCompounding : exp(r*t)\nSimpleCompounding : (1+r*t)\nExponentialCompounding : (1+r)^tThe date field sets the date when the Yield Curve is observed. All zero rate calculation will be performed based on this date.The fields dtm and zero_rates hold the observed market data for the yield curve, as discussed on Curve Methods section.The field parameters holds parameter values for term structure models, as discussed on Curve Methods section.dict is avaliable for additional parameters, and to hold pre-calculated values for optimization."
},

{
    "location": "#Curve-Methods-1",
    "page": "Readme",
    "title": "Curve Methods",
    "category": "section",
    "text": "This package provides the following curve methods.Interpolation MethodsLinear: provides Linear Interpolation on rates.\nFlatForward: provides Flat Forward interpolation, which is implemented as a Linear Interpolation on the log of discount factors.\nStepFunction: creates a step function around given data points.\nCubicSplineOnRates: provides natural cubic spline interpolation on rates.\nCubicSplineOnDiscountFactors: provides natural cubic spline interpolation on discount factors.\nCompositeInterpolation: provides support for different interpolation methods for: (1) extrapolation before first data point (before_first), (2) interpolation between the first and last point (inner), (3) extrapolation after last data point (after_last).For Interpolation Methods, the field dtm holds the number of days between date and the maturity of the observed yield, following the curve\'s day count convention, which must be given in advance, when creating an instance of the curve. The field zero_rates holds the yield values for each maturity provided in dtm. All yields must be anual based, and must also be given in advance, when creating the instance of the curve.Term Structure ModelsNelsonSiegel: term structure model based on Nelson, C.R., and A.F. Siegel (1987), Parsimonious Modeling of Yield Curve, The Journal of Business, 60, 473-489.\nSvensson: term structure model based on Svensson, L.E. (1994), Estimating and Interpreting Forward Interest Rates: Sweden 1992-1994, IMF Working Paper, WP/94/114.For Term Structure Models, the field parameters holds the constants defined by each model, as described below. They must be given in advance, when creating the instance of the curve.For NelsonSiegel method, the array parameters holds the following parameters from the model:beta1 = parameters[1]\nbeta2 = parameters[2]\nbeta3 = parameters[3]\nlambda = parameters[4]For Svensson method, the array parameters hold the following parameters from the model:beta1 = parameters[1]\nbeta2 = parameters[2]\nbeta3 = parameters[3]\nbeta4 = parameters[4]\nlambda1 = parameters[5]\nlambda2 = parameters[6]"
},

{
    "location": "#Methods-hierarchy-1",
    "page": "Readme",
    "title": "Methods hierarchy",
    "category": "section",
    "text": "As a summary, curve methods are organized by the following hierarchy.<<CurveMethod>>* `<<Interpolation>>`\n	* `<<DiscountFactorInterpolation>>`\n		* `CubicSplineOnDiscountFactors`\n		* `FlatForward`\n	* `<<RateInterpolation>>`\n		* `CubicSplineOnRates`\n		* `Linear`\n		* `StepFunction`\n	* `CompositeInterpolation`\n* `<<Parametric>>`\n	* `NelsonSiegel`\n	* `Svensson`"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "using InterestRates\n\n# First, create a curve instance.\n\nvert_x = [11, 15, 50, 80] # for interpolation methods, represents the days to maturity\nvert_y = [0.10, 0.15, 0.14, 0.17] # yield values\n\ndt_curve = Date(2015,08,03)\n\nmycurve = InterestRates.IRCurve(\"dummy-simple-linear\", InterestRates.Actual365(),\n	InterestRates.SimpleCompounding(), InterestRates.Linear(), dt_curve,\n	vert_x, vert_y)\n\n# yield for a given maturity date\ny = zero_rate(mycurve, Date(2015,08,25))\n# 0.148\n\n# forward rate between two future dates\nfy = forward_rate(mycurve, Date(2015,08,25), Date(2015, 10, 10))\n# 0.16134333771591897\n\n# Discount factor for a given maturity date\ndf = discountfactor(mycurve, Date(2015,10,10))\n# 0.9714060637029466\n\n# Effective Rate Factor for a given maturity\nerf = ERF(mycurve, Date(2015,10,10))\n# 1.0294356164383562\n\n# Effective Rate for a given maturity\ner = ER(mycurve, Date(2015,10,10))\n# 0.029435616438356238See runtests.jl for more examples."
},

{
    "location": "#Buffered-Curve-1",
    "page": "Readme",
    "title": "Buffered Curve",
    "category": "section",
    "text": "A BufferedIRCurve buffers results of interest rate interpolations.You can create it by using InterestRates.BufferedIRCurve(source_curve) constructor, where source_courve is a given AbstractIRCurve.The first time you ask for a rate, discount factor or effetive factor for a given maturity, it will apply the source curve computation method. The second time you ask for any information for the same maturity, it will use the cached value.Example:using InterestRates, BusinessDays\nconst ir = InterestRates\n\ncurve_date = Date(2017,3,2)\ndays_to_maturity = [ 1, 22, 83, 147, 208, 269,\n                     332, 396, 458, 519, 581, 711, 834]\nrates = [ 0.1213, 0.121875, 0.11359 , 0.10714 , 0.10255 , 0.100527,\n0.09935 , 0.09859 , 0.098407, 0.098737, 0.099036, 0.099909, 0.101135]\n\nmethod = ir.CompositeInterpolation(ir.StepFunction(), # before-first\n                                   ir.CubicSplineOnRates(), #inner\n                                   ir.FlatForward()) # after-last\n\ncurve_brl = ir.IRCurve(\"Curve BRL\", # name\n    ir.BDays252(:Brazil), # DayCountConvention\n    ir.ExponentialCompounding(), # CompoundingType\n    method, # interpolation method\n    curve_date, # base date\n    days_to_maturity,\n    rates);\n\nfixed_maturity = Date(2018,5,3)\n@elapsed discountfactor(curve_brl, fixed_maturity)\n# 0.178632414\n\nbuffered_curve_brl = ir.BufferedIRCurve(curve_brl)\ndiscountfactor(buffered_curve_brl, fixed_maturity) # stores in cache\n@elapsed discountfactor(buffered_curve_brl, fixed_maturity) # retrieves stored value in cache\n# 3.683e-5"
},

{
    "location": "#Composite-Curves-1",
    "page": "Readme",
    "title": "Composite Curves",
    "category": "section",
    "text": "Warning: This is an experimental feature. The API may change in the future.InterestRates.CompositeIRCurve(curve_a, curve_b, ...) will return a composite curve.Calling discountfactor or ERF on a composite curve will return the product of the results of these functions for each curve inside a composite curve."
},

{
    "location": "#Alternative-Libraries-1",
    "page": "Readme",
    "title": "Alternative Libraries",
    "category": "section",
    "text": "Ito.jl : https://github.com/aviks/Ito.jl\nFinancialMarkets.jl : https://github.com/imanuelcostigan/FinancialMarkets.jl"
},

{
    "location": "autodocs/#InterestRates.CompoundingType",
    "page": "Docstrings",
    "title": "InterestRates.CompoundingType",
    "category": "type",
    "text": "The type CompoundingType sets the convention on how to convert a yield into an Effective Rate Factor.\n\nGiven a yield r and a maturity year fraction t, here\'s how each supported compounding type maps the yield to Effective Rate Factors:\n\nContinuousCompounding : exp(r*t)\nSimpleCompounding : (1+r*t)\nExponentialCompounding : (1+r)^t\n\n\n\n\n\n"
},

{
    "location": "autodocs/#InterestRates.CurveMethod",
    "page": "Docstrings",
    "title": "InterestRates.CurveMethod",
    "category": "type",
    "text": "This package provides the following curve methods.\n\nInterpolation Methods\n\nLinear: provides Linear Interpolation on rates.\nFlatForward: provides Flat Forward interpolation, which is implemented as a Linear Interpolation on the log of discount factors.\nStepFunction: creates a step function around given data points.\nCubicSplineOnRates: provides natural cubic spline interpolation on rates.\nCubicSplineOnDiscountFactors: provides natural cubic spline interpolation on discount factors.\nCompositeInterpolation: provides support for different interpolation methods for: (1) extrapolation before first data point (before_first), (2) interpolation between the first and last point (inner), (3) extrapolation after last data point (after_last).\n\nFor Interpolation Methods, the field dtm holds the number of days between date and the maturity of the observed yield, following the curve\'s day count convention, which must be given in advance, when creating an instance of the curve. The field zero_rates holds the yield values for each maturity provided in dtm. All yields must be anual based, and must also be given in advance, when creating the instance of the curve.\n\nTerm Structure Models\n\nNelsonSiegel: term structure model based on Nelson, C.R., and A.F. Siegel (1987), Parsimonious Modeling of Yield Curve, The Journal of Business, 60, 473-489.\nSvensson: term structure model based on Svensson, L.E. (1994), Estimating and Interpreting Forward Interest Rates: Sweden 1992-1994, IMF Working Paper, WP/94/114.\n\nFor Term Structure Models, the field parameters holds the constants defined by each model, as described below. They must be given in advance, when creating the instance of the curve.\n\nFor NelsonSiegel method, the array parameters holds the following parameters from the model:\n\nbeta1 = parameters[1]\nbeta2 = parameters[2]\nbeta3 = parameters[3]\nlambda = parameters[4]\n\nFor Svensson method, the array parameters hold the following parameters from the model:\n\nbeta1 = parameters[1]\nbeta2 = parameters[2]\nbeta3 = parameters[3]\nbeta4 = parameters[4]\nlambda1 = parameters[5]\nlambda2 = parameters[6]\n\nMethods hierarchy\n\nAs a summary, curve methods are organized by the following hierarchy.\n\n<<CurveMethod>>\n<<Interpolation>>\n<<DiscountFactorInterpolation>>\nCubicSplineOnDiscountFactors\nFlatForward\n<<RateInterpolation>>\nCubicSplineOnRates\nLinear\nStepFunction\nCompositeInterpolation\n<<Parametric>>\nNelsonSiegel\nSvensson\n\n\n\n\n\n"
},

{
    "location": "autodocs/#InterestRates.DayCountConvention",
    "page": "Docstrings",
    "title": "InterestRates.DayCountConvention",
    "category": "type",
    "text": "The type DayCountConvention sets the convention on how to count the number of days between dates, and also how to convert that number of days into a year fraction.\n\nGiven an initial date D1 and a final date D2, here\'s how the distance between D1 and D2 are mapped into a year fraction for each supported day count convention:\n\nActual360 : (D2 - D1) / 360\nActual365 : (D2 - D1) / 365\nBDays252 : bdays(D1, D2) / 252, where bdays is the business days between D1 and D2 from BusinessDays.jl package.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#InterestRates.curve_get_compounding-Tuple{InterestRates.AbstractIRCurve}",
    "page": "Docstrings",
    "title": "InterestRates.curve_get_compounding",
    "category": "method",
    "text": "curve_get_compounding(curve::AbstractIRCurve) → CompoundingType\n\nReturns the CompoundingType used by the curve. See CompoundingType documentation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#InterestRates.curve_get_date-Tuple{InterestRates.AbstractIRCurve}",
    "page": "Docstrings",
    "title": "InterestRates.curve_get_date",
    "category": "method",
    "text": "curve_get_date(curve::AbstractIRCurve) → Date\n\nReturns the date when the curve is observed. All zero rate calculation will be performed based on this date.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#InterestRates.curve_get_daycount-Tuple{InterestRates.AbstractIRCurve}",
    "page": "Docstrings",
    "title": "InterestRates.curve_get_daycount",
    "category": "method",
    "text": "curve_get_daycount(curve::AbstractIRCurve) → DayCountConvention\n\nReturns the DayCountConvention used by the curve. See DayCountConvention documentation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#InterestRates.curve_get_dtm-Tuple{InterestRates.AbstractIRCurve}",
    "page": "Docstrings",
    "title": "InterestRates.curve_get_dtm",
    "category": "method",
    "text": "curve_get_dtm(curve::AbstractIRCurve) → Vector{Int}\n\nUsed for interpolation methods, returns days_to_maturity on curve\'s daycount convention.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#InterestRates.curve_get_method-Tuple{InterestRates.AbstractIRCurve}",
    "page": "Docstrings",
    "title": "InterestRates.curve_get_method",
    "category": "method",
    "text": "curve_get_method(curve::AbstractIRCurve) → CurveMethod\n\nReturns the CurveMethod used by the curve. See CurveMethod documentation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#InterestRates.curve_get_model_parameters-Tuple{InterestRates.AbstractIRCurve}",
    "page": "Docstrings",
    "title": "InterestRates.curve_get_model_parameters",
    "category": "method",
    "text": "curve_get_model_parameters(curve::AbstractIRCurve) → Vector{Float64}\n\nUsed for parametric methods, returns model\'s constant parameters.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#InterestRates.curve_get_name-Tuple{InterestRates.AbstractIRCurve}",
    "page": "Docstrings",
    "title": "InterestRates.curve_get_name",
    "category": "method",
    "text": "curve_get_name(curve::AbstractIRCurve) → String\n\nReturns the name of the curve.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#InterestRates.curve_get_zero_rates-Tuple{InterestRates.AbstractIRCurve}",
    "page": "Docstrings",
    "title": "InterestRates.curve_get_zero_rates",
    "category": "method",
    "text": "curve_get_zero_rates(curve::AbstractIRCurve) → Vector{Float64}\n\nUsed for interpolation methods, parameters[i] returns yield for maturity dtm[i].\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [InterestRates]\nOrder = [:type, :function]"
},

]}
