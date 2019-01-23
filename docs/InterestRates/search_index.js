var documenterSearchIndex = {"docs": [

{
    "location": "#InterestRates.CompoundingType",
    "page": "Home",
    "title": "InterestRates.CompoundingType",
    "category": "type",
    "text": "The type CompoundingType sets the convention on how to convert a yield into an Effective Rate Factor.\n\nGiven a yield r and a maturity year fraction t, here\'s how each supported compounding type maps the yield to Effective Rate Factors:\n\nContinuousCompounding : exp(r*t)\nSimpleCompounding : (1+r*t)\nExponentialCompounding : (1+r)^t\n\n\n\n\n\n"
},

{
    "location": "#InterestRates.CurveMethod",
    "page": "Home",
    "title": "InterestRates.CurveMethod",
    "category": "type",
    "text": "This package provides the following curve methods.\n\nInterpolation Methods\n\nLinear: provides Linear Interpolation on rates.\nFlatForward: provides Flat Forward interpolation, which is implemented as a Linear Interpolation on the log of discount factors.\nStepFunction: creates a step function around given data points.\nCubicSplineOnRates: provides natural cubic spline interpolation on rates.\nCubicSplineOnDiscountFactors: provides natural cubic spline interpolation on discount factors.\nCompositeInterpolation: provides support for different interpolation methods for: (1) extrapolation before first data point (before_first), (2) interpolation between the first and last point (inner), (3) extrapolation after last data point (after_last).\n\nFor Interpolation Methods, the field dtm holds the number of days between date and the maturity of the observed yield, following the curve\'s day count convention, which must be given in advance, when creating an instance of the curve. The field zero_rates holds the yield values for each maturity provided in dtm. All yields must be anual based, and must also be given in advance, when creating the instance of the curve.\n\nTerm Structure Models\n\nNelsonSiegel: term structure model based on Nelson, C.R., and A.F. Siegel (1987), Parsimonious Modeling of Yield Curve, The Journal of Business, 60, 473-489.\nSvensson: term structure model based on Svensson, L.E. (1994), Estimating and Interpreting Forward Interest Rates: Sweden 1992-1994, IMF Working Paper, WP/94/114.\n\nFor Term Structure Models, the field parameters holds the constants defined by each model, as described below. They must be given in advance, when creating the instance of the curve.\n\nFor NelsonSiegel method, the array parameters holds the following parameters from the model:\n\nbeta1 = parameters[1]\nbeta2 = parameters[2]\nbeta3 = parameters[3]\nlambda = parameters[4]\n\nFor Svensson method, the array parameters hold the following parameters from the model:\n\nbeta1 = parameters[1]\nbeta2 = parameters[2]\nbeta3 = parameters[3]\nbeta4 = parameters[4]\nlambda1 = parameters[5]\nlambda2 = parameters[6]\n\nMethods hierarchy\n\nAs a summary, curve methods are organized by the following hierarchy.\n\n<<CurveMethod>>\n<<Interpolation>>\n<<DiscountFactorInterpolation>>\nCubicSplineOnDiscountFactors\nFlatForward\n<<RateInterpolation>>\nCubicSplineOnRates\nLinear\nStepFunction\nCompositeInterpolation\n<<Parametric>>\nNelsonSiegel\nSvensson\n\n\n\n\n\n"
},

{
    "location": "#InterestRates.DayCountConvention",
    "page": "Home",
    "title": "InterestRates.DayCountConvention",
    "category": "type",
    "text": "The type DayCountConvention sets the convention on how to count the number of days between dates, and also how to convert that number of days into a year fraction.\n\nGiven an initial date D1 and a final date D2, here\'s how the distance between D1 and D2 are mapped into a year fraction for each supported day count convention:\n\nActual360 : (D2 - D1) / 360\nActual365 : (D2 - D1) / 365\nBDays252 : bdays(D1, D2) / 252, where bdays is the business days between D1 and D2 from BusinessDays.jl package.\n\n\n\n\n\n"
},

{
    "location": "#InterestRates.curve_get_compounding-Tuple{InterestRates.AbstractIRCurve}",
    "page": "Home",
    "title": "InterestRates.curve_get_compounding",
    "category": "method",
    "text": "curve_get_compounding(curve::AbstractIRCurve) → CompoundingType\n\nReturns the CompoundingType used by the curve. See CompoundingType documentation.\n\n\n\n\n\n"
},

{
    "location": "#InterestRates.curve_get_date-Tuple{InterestRates.AbstractIRCurve}",
    "page": "Home",
    "title": "InterestRates.curve_get_date",
    "category": "method",
    "text": "curve_get_date(curve::AbstractIRCurve) → Date\n\nReturns the date when the curve is observed. All zero rate calculation will be performed based on this date.\n\n\n\n\n\n"
},

{
    "location": "#InterestRates.curve_get_daycount-Tuple{InterestRates.AbstractIRCurve}",
    "page": "Home",
    "title": "InterestRates.curve_get_daycount",
    "category": "method",
    "text": "curve_get_daycount(curve::AbstractIRCurve) → DayCountConvention\n\nReturns the DayCountConvention used by the curve. See DayCountConvention documentation.\n\n\n\n\n\n"
},

{
    "location": "#InterestRates.curve_get_dtm-Tuple{InterestRates.AbstractIRCurve}",
    "page": "Home",
    "title": "InterestRates.curve_get_dtm",
    "category": "method",
    "text": "curve_get_dtm(curve::AbstractIRCurve) → Vector{Int}\n\nUsed for interpolation methods, returns days_to_maturity on curve\'s daycount convention.\n\n\n\n\n\n"
},

{
    "location": "#InterestRates.curve_get_method-Tuple{InterestRates.AbstractIRCurve}",
    "page": "Home",
    "title": "InterestRates.curve_get_method",
    "category": "method",
    "text": "curve_get_method(curve::AbstractIRCurve) → CurveMethod\n\nReturns the CurveMethod used by the curve. See CurveMethod documentation.\n\n\n\n\n\n"
},

{
    "location": "#InterestRates.curve_get_model_parameters-Tuple{InterestRates.AbstractIRCurve}",
    "page": "Home",
    "title": "InterestRates.curve_get_model_parameters",
    "category": "method",
    "text": "curve_get_model_parameters(curve::AbstractIRCurve) → Vector{Float64}\n\nUsed for parametric methods, returns model\'s constant parameters.\n\n\n\n\n\n"
},

{
    "location": "#InterestRates.curve_get_name-Tuple{InterestRates.AbstractIRCurve}",
    "page": "Home",
    "title": "InterestRates.curve_get_name",
    "category": "method",
    "text": "curve_get_name(curve::AbstractIRCurve) → String\n\nReturns the name of the curve.\n\n\n\n\n\n"
},

{
    "location": "#InterestRates.curve_get_zero_rates-Tuple{InterestRates.AbstractIRCurve}",
    "page": "Home",
    "title": "InterestRates.curve_get_zero_rates",
    "category": "method",
    "text": "curve_get_zero_rates(curve::AbstractIRCurve) → Vector{Float64}\n\nUsed for interpolation methods, parameters[i] returns yield for maturity dtm[i].\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [InterestRates]\nOrder = [:type, :function]"
},

]}
