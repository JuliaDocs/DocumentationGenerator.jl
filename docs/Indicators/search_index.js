var documenterSearchIndex = {"docs": [

{
    "location": "#Indicators.adx-Tuple{Array{Float64,N} where N}",
    "page": "Home",
    "title": "Indicators.adx",
    "category": "method",
    "text": "Average directional index\n\nadx(hlc::Array{Float64}; n::Int64=14, wilder=true)::Array{Float64}\n\nOutput\n\nColumn 1: DI+\nColumn 2: DI-\nColumn 3: ADX\n\n\n\n\n\n"
},

{
    "location": "#Indicators.alma-Tuple{Array{Float64,N} where N}",
    "page": "Home",
    "title": "Indicators.alma",
    "category": "method",
    "text": "Arnaud-Legoux moving average (ALMA)\n\nalma{Float64}(x::Array{Float64}; n::Int64=9, offset::Float64=0.85, sigma::Float64=6.0)::Array{Float64}\n\n\n\n\n\n"
},

{
    "location": "#Indicators.aroon-Tuple{Array{Float64,2}}",
    "page": "Home",
    "title": "Indicators.aroon",
    "category": "method",
    "text": "Aroon up/down/oscillator\n\naroon(hl::Array{Float64,2}; n::Int64=25)::Array{Float64}\n\nOutput\n\nColumn 1: Aroon Up\nColumn 2: Aroon Down\nColumn 3: Aroon Oscillator\n\n\n\n\n\n"
},

{
    "location": "#Indicators.atr-Tuple{Array{Float64,2}}",
    "page": "Home",
    "title": "Indicators.atr",
    "category": "method",
    "text": "Average true range (uses exponential moving average)\n\natr(hlc::Matrix{Float64}; n::Int64=14)::Array{Float64}\n\n\n\n\n\n"
},

{
    "location": "#Indicators.bbands-Tuple{Array{Float64,N} where N}",
    "page": "Home",
    "title": "Indicators.bbands",
    "category": "method",
    "text": "Bollinger bands (moving average with standard deviation bands)\n\nbbands(x::Array{Float64}; n::Int64=10, sigma::Float64=2.0)::Matrix{Float64}\n\nOutput\n\nColumn 1: lower band\nColumn 2: middle band\nColumn 3: upper band\n\n\n\n\n\n"
},

{
    "location": "#Indicators.cci-Tuple{Array{Float64,2}}",
    "page": "Home",
    "title": "Indicators.cci",
    "category": "method",
    "text": "Commodity channel index\n\ncci(hlc::Array{Float64,2}; n::Int64=20, c::Float64=0.015, ma::Function=sma)::Array{Float64}\n\n\n\n\n\n"
},

{
    "location": "#Indicators.crossover-Tuple{Array{Float64,N} where N,Array{Float64,N} where N}",
    "page": "Home",
    "title": "Indicators.crossover",
    "category": "method",
    "text": "Find where x crosses over y (returns boolean vector where crossover occurs)\n\n\n\n\n\n"
},

{
    "location": "#Indicators.crossunder-Tuple{Array{Float64,N} where N,Array{Float64,N} where N}",
    "page": "Home",
    "title": "Indicators.crossunder",
    "category": "method",
    "text": "Find where x crosses under y (returns boolean vector where crossunder occurs)\n\n\n\n\n\n"
},

{
    "location": "#Indicators.dema-Tuple{Array{Float64,N} where N}",
    "page": "Home",
    "title": "Indicators.dema",
    "category": "method",
    "text": "Double exponential moving average (DEMA)\n\ndema(x::Array{Float64}; n::Int64=10, alpha=2.0/(n+1), wilder::Bool=false)::Array{Float64}\n\n\n\n\n\n"
},

{
    "location": "#Indicators.diffn-Tuple{Array{Float64,2}}",
    "page": "Home",
    "title": "Indicators.diffn",
    "category": "method",
    "text": "Lagged differencing\n\ndiffn(X::Array{Float64,2}; n::Int64=1)::Array{Float64}\n\n\n\n\n\n"
},

{
    "location": "#Indicators.diffn-Tuple{Array{Float64,N} where N}",
    "page": "Home",
    "title": "Indicators.diffn",
    "category": "method",
    "text": "Lagged differencing\n\ndiffn(x::Array{Float64}; n::Int64=1)::Array{Float64}\n\n\n\n\n\n"
},

{
    "location": "#Indicators.donch-Tuple{Array{Float64,2}}",
    "page": "Home",
    "title": "Indicators.donch",
    "category": "method",
    "text": "Donchian channel (if inclusive is set to true, will include current bar in calculations.)\n\ndonch(hl::Array{Float64,2}; n::Int64=10, inclusive::Bool=true)::Array{Float64}\n\nOutput\n\nColumn 1: Lowest low of last n periods\nColumn 2: Average of highest high and lowest low of last n periods\nColumn 3: Highest high of last n periods\n\n\n\n\n\n"
},

{
    "location": "#Indicators.ema-Tuple{Array{Float64,N} where N}",
    "page": "Home",
    "title": "Indicators.ema",
    "category": "method",
    "text": "Exponential moving average (EMA)\n\nema(x::Array{Float64}; n::Int64=10, alpha::Float64=2.0/(n+1.0), wilder::Bool=false)::Array{Float64}\n\n\n\n\n\n"
},

{
    "location": "#Indicators.hma-Tuple{Array{Float64,N} where N}",
    "page": "Home",
    "title": "Indicators.hma",
    "category": "method",
    "text": "Hull moving average (HMA)\n\nhma(x::Array{Float64}; n::Int64=20)::Array{Float64}\n\n\n\n\n\n"
},

{
    "location": "#Indicators.kama-Tuple{Array{Float64,N} where N}",
    "page": "Home",
    "title": "Indicators.kama",
    "category": "method",
    "text": "Kaufman adaptive moving average (KAMA)\n\n\n\n\n\n"
},

{
    "location": "#Indicators.keltner-Tuple{Array{Float64,2}}",
    "page": "Home",
    "title": "Indicators.keltner",
    "category": "method",
    "text": "Keltner bands\n\nkeltner(hlc::Matrix{Float64}; nema::Int64=20, natr::Int64=10, mult::Int64=2)::Matrix{Float64}\n\nOutput Column 1: lower band Column 2: middle band Column 3: upper band\n\n\n\n\n\n"
},

{
    "location": "#Indicators.kst-Tuple{Array{Float64,N} where N}",
    "page": "Home",
    "title": "Indicators.kst",
    "category": "method",
    "text": "KST (Know Sure Thing) – smoothed and summed rates of change\n\nkst(x::Array{Float64};\n    nroc::Array{Int64}=[10,15,20,30], navg::Array{Int64}=[10,10,10,15],\n    wgts::Array{Int64}=collect(1:length(nroc)), ma::Function=sma)::Array{Float64}\n\n\n\n\n\n\n"
},

{
    "location": "#Indicators.macd-Tuple{Array{Float64,N} where N}",
    "page": "Home",
    "title": "Indicators.macd",
    "category": "method",
    "text": "Moving average convergence-divergence\n\nmacd(x::Array{Float64}; nfast::Int64=12, nslow::Int64=26, nsig::Int64=9)::Array{Float64}\n\nOutput\n\nColumn 1: MACD\nColumn 2: MACD Signal Line\nColumn 3: MACD Histogram\n\n\n\n\n\n"
},

{
    "location": "#Indicators.mama-Tuple{Array{Float64,N} where N}",
    "page": "Home",
    "title": "Indicators.mama",
    "category": "method",
    "text": "MESA adaptive moving average (MAMA)\n\nmama(x::Array{Float64}; fastlimit::Float64=0.5, slowlimit::Float64=0.05)::Matrix{Float64}\n\n\n\n\n\n"
},

{
    "location": "#Indicators.mlr-Tuple{Array{Float64,N} where N}",
    "page": "Home",
    "title": "Indicators.mlr",
    "category": "method",
    "text": "Moving linear regression predictions\n\n\n\n\n\n"
},

{
    "location": "#Indicators.mlr_bands-Tuple{Array{Float64,N} where N}",
    "page": "Home",
    "title": "Indicators.mlr_bands",
    "category": "method",
    "text": "Moving linear regression bands\n\nOutput:\n\nColumn 1: Lower bound\n\nColumn 2: Regression estimate\n\nColumn 3: Upper bound\n\n\n\n\n\n"
},

{
    "location": "#Indicators.mlr_beta-Tuple{Array{Float64,N} where N}",
    "page": "Home",
    "title": "Indicators.mlr_beta",
    "category": "method",
    "text": "Moving linear regression intercept (column 1) and slope (column 2)\n\n\n\n\n\n"
},

{
    "location": "#Indicators.mlr_intercept-Tuple{Array{Float64,N} where N}",
    "page": "Home",
    "title": "Indicators.mlr_intercept",
    "category": "method",
    "text": "Moving linear regression y-intercept\n\n\n\n\n\n"
},

{
    "location": "#Indicators.mlr_lb-Tuple{Array{Float64,N} where N}",
    "page": "Home",
    "title": "Indicators.mlr_lb",
    "category": "method",
    "text": "Moving linear regression lower bound\n\n\n\n\n\n"
},

{
    "location": "#Indicators.mlr_rsq-Tuple{Array{Float64,N} where N}",
    "page": "Home",
    "title": "Indicators.mlr_rsq",
    "category": "method",
    "text": "Moving linear regression R-squared or adjusted R-squared\n\n\n\n\n\n"
},

{
    "location": "#Indicators.mlr_se-Tuple{Array{Float64,N} where N}",
    "page": "Home",
    "title": "Indicators.mlr_se",
    "category": "method",
    "text": "Moving linear regression standard errors\n\n\n\n\n\n"
},

{
    "location": "#Indicators.mlr_slope-Tuple{Array{Float64,N} where N}",
    "page": "Home",
    "title": "Indicators.mlr_slope",
    "category": "method",
    "text": "Moving linear regression slope\n\n\n\n\n\n"
},

{
    "location": "#Indicators.mlr_ub-Tuple{Array{Float64,N} where N}",
    "page": "Home",
    "title": "Indicators.mlr_ub",
    "category": "method",
    "text": "Moving linear regression upper bound\n\n\n\n\n\n"
},

{
    "location": "#Indicators.mma-Tuple{Array{Float64,N} where N}",
    "page": "Home",
    "title": "Indicators.mma",
    "category": "method",
    "text": "Modified moving average (MMA)\n\nmma(x::Array{Float64}; n::Int64=10)::Array{Float64}\n\n\n\n\n\n"
},

{
    "location": "#Indicators.mode-Tuple{AbstractArray{Float64,N} where N}",
    "page": "Home",
    "title": "Indicators.mode",
    "category": "method",
    "text": "(Adapted from StatsBase: https://raw.githubusercontent.com/JuliaStats/StatsBase.jl/master/src/scalarstats.jl)\n\nCompute the mode of an arbitrary array::Array{Float64}\n\n\n\n\n\n"
},

{
    "location": "#Indicators.momentum-Tuple{Array{Float64,N} where N}",
    "page": "Home",
    "title": "Indicators.momentum",
    "category": "method",
    "text": "Momentum indicator (price now vs price n periods back)\n\nmomentum(x::Array{Float64}; n::Int64=1)::Array{Float64}\n\n\n\n\n\n"
},

{
    "location": "#Indicators.psar-Tuple{Array{Float64,N} where N}",
    "page": "Home",
    "title": "Indicators.psar",
    "category": "method",
    "text": "Parabolic stop and reverse (SAR)\n\npsar(hl::Array{Float64}; af_min::Float64=0.02, af_max::Float64=0.2, af_inc::Float64=af_min)::Array{Float64}\n\nArguments\n\nhl: 2D array of high and low prices in first and second columns respectively\naf_min: starting/initial value for acceleration factor\naf_max: maximum acceleration factor (accel factor capped at this value)\naf_inc: increment to the acceleration factor (speed of increase in accel factor)\n\n\n\n\n\n"
},

{
    "location": "#Indicators.renko-Tuple{Array{Float64,N} where N}",
    "page": "Home",
    "title": "Indicators.renko",
    "category": "method",
    "text": "Renko chart patterns\n\nMethods\n\nTraditional (Constant Box Size): renko(x::Array{Float64}; box_size::Float64=10.0)::Array{Int}\nATR Dynamic Box Size: renko(hlc::Matrix{Float64}; box_size::Float64=10.0, use_atr::Bool=false, n::Int=14)::Array{Int}\n\nOutput\n\nArray{Int} object of size Nx1 (where N is the number rows in x) where each element gives the Renko bar number of the corresponding row in x.\n\n\n\n\n\n"
},

{
    "location": "#Indicators.roc-Tuple{Array{Float64,N} where N}",
    "page": "Home",
    "title": "Indicators.roc",
    "category": "method",
    "text": "Rate of change indicator (percent change between i\'th observation and (i-n)\'th observation)\n\nroc(x::Array{Float64}; n::Int64=1)::Array{Float64}\n\n\n\n\n\n"
},

{
    "location": "#Indicators.rsi-Tuple{Array{Float64,N} where N}",
    "page": "Home",
    "title": "Indicators.rsi",
    "category": "method",
    "text": "Relative strength index\n\nrsi(x::Array{Float64}; n::Int64=14, ma::Function=ema, args...)::Array{Float64}\n\n\n\n\n\n"
},

{
    "location": "#Indicators.runacf-Tuple{Array{Float64,N} where N}",
    "page": "Home",
    "title": "Indicators.runacf",
    "category": "method",
    "text": "Compute the running/rolling autocorrelation of a vector.\n\nfunction runacf(x::Array{Float64};\n                n::Int = 10,\n                maxlag::Int = n-3,\n                lags::AbstractArray{Int,1} = 0:maxlag,\n                cumulative::Bool = true)::Matrix{Float64}\n\n\n\n\n\n"
},

{
    "location": "#Indicators.runcor-Tuple{Array{Float64,N} where N,Array{Float64,N} where N}",
    "page": "Home",
    "title": "Indicators.runcor",
    "category": "method",
    "text": "Compute the running or rolling correlation of two arrays\n\nruncor(x::Array{Float64}, y::Array{Float64}; n::Int64=10, cumulative::Bool=true)::Array{Float64}\n\n\n\n\n\n"
},

{
    "location": "#Indicators.runcov-Tuple{Array{Float64,N} where N,Array{Float64,N} where N}",
    "page": "Home",
    "title": "Indicators.runcov",
    "category": "method",
    "text": "Compute the running or rolling covariance of two arrays\n\nruncov(x::Array{Float64}, y::Array{Float64}; n::Int64=10, cumulative::Bool=true)::Array{Float64}\n\n\n\n\n\n"
},

{
    "location": "#Indicators.runmad-Tuple{Array{Float64,N} where N}",
    "page": "Home",
    "title": "Indicators.runmad",
    "category": "method",
    "text": "Compute the running or rolling mean absolute deviation of an array\n\nrunmad(x::Array{Float64}; n::Int64=10, cumulative::Bool=true, fun::Function=median)::Array{Float64}\n\n\n\n\n\n"
},

{
    "location": "#Indicators.runmax-Tuple{Array{Float64,N} where N}",
    "page": "Home",
    "title": "Indicators.runmax",
    "category": "method",
    "text": "Compute the running or rolling maximum of an array\n\nrunmax(x::Array{Float64}; n::Int64=10, cumulative::Bool=true, inclusive::Bool=true)::Array{Float64}\n\n\n\n\n\n"
},

{
    "location": "#Indicators.runmean-Tuple{Array{Float64,N} where N}",
    "page": "Home",
    "title": "Indicators.runmean",
    "category": "method",
    "text": "Compute a running or rolling arithmetic mean of an array.\n\nrunmean(x::Array{Float64}; n::Int64=10, cumulative::Bool=true)::Array{Float64}\n\n\n\n\n\n"
},

{
    "location": "#Indicators.runmin-Tuple{Array{Float64,N} where N}",
    "page": "Home",
    "title": "Indicators.runmin",
    "category": "method",
    "text": "Compute the running or rolling minimum of an array\n\nrunmin(x::Array{Float64}; n::Int64=10, cumulative::Bool=true, inclusive::Bool=true)::Array{Float64}\n\n\n\n\n\n"
},

{
    "location": "#Indicators.runquantile-Tuple{Array{Float64,N} where N}",
    "page": "Home",
    "title": "Indicators.runquantile",
    "category": "method",
    "text": "Compute the running/rolling quantile of an array\n\nrunquantile(x::Vector{Float64}; p::Float64=0.05, n::Int=10, cumulative::Bool=true)::Vector{Float64}\n\n\n\n\n\n"
},

{
    "location": "#Indicators.runsd-Tuple{Array{Float64,N} where N}",
    "page": "Home",
    "title": "Indicators.runsd",
    "category": "method",
    "text": "Compute the running or rolling standard deviation of an array\n\nrunsd(x::Array{Float64}; n::Int64=10, cumulative::Bool=true)::Array{Float64}\n\n\n\n\n\n"
},

{
    "location": "#Indicators.runsum-Tuple{Array{Float64,N} where N}",
    "page": "Home",
    "title": "Indicators.runsum",
    "category": "method",
    "text": "Compute a running or rolling summation of an array.\n\nrunsum(x::Array{Float64}; n::Int64=10, cumulative::Bool=true)::Array{Float64}\n\n\n\n\n\n"
},

{
    "location": "#Indicators.runvar-Tuple{Array{Float64,N} where N}",
    "page": "Home",
    "title": "Indicators.runvar",
    "category": "method",
    "text": "Compute the running or rolling variance of an array\n\nrunvar(x::Array{Float64}; n::Int64=10, cumulative=true)::Array{Float64}\n\n\n\n\n\n"
},

{
    "location": "#Indicators.sma-Tuple{Array{Float64,N} where N}",
    "page": "Home",
    "title": "Indicators.sma",
    "category": "method",
    "text": "Simple moving average (SMA)\n\nsma(x::Array{Float64}; n::Int64=10)::Array{Float64}\n\n\n\n\n\n"
},

{
    "location": "#Indicators.smi-Tuple{Array{Float64,2}}",
    "page": "Home",
    "title": "Indicators.smi",
    "category": "method",
    "text": "SMI (stochastic momentum oscillator)\n\nsmi(hlc::Array{Float64,2}; n::Int64=13, nFast::Int64=2, nSlow::Int64=25, nSig::Int64=9,\n    maFast::Function=ema, maSlow::Function=ema, maSig::Function=sma)::Matrix{Float64}\n\n\n\n\n\n"
},

{
    "location": "#Indicators.stoch-Tuple{Array{Float64,2}}",
    "page": "Home",
    "title": "Indicators.stoch",
    "category": "method",
    "text": "Stochastic oscillator (fast or slow)\n\nstoch(hlc::Array{Float64,2}; nK::Int64=14, nD::Int64=3, kind::Symbol=:fast, ma::Function=sma, args...)::Matrix{Float64}\n\n\n\n\n\n"
},

{
    "location": "#Indicators.swma-Tuple{Array{Float64,N} where N}",
    "page": "Home",
    "title": "Indicators.swma",
    "category": "method",
    "text": "Sine-weighted moving average\n\n\n\n\n\n"
},

{
    "location": "#Indicators.tema-Tuple{Array{Float64,N} where N}",
    "page": "Home",
    "title": "Indicators.tema",
    "category": "method",
    "text": "Triple exponential moving average (TEMA)\n\ntema(x::Array{Float64}; n::Int64=10, alpha=2.0/(n+1), wilder::Bool=false)::Array{Float64}\n\n\n\n\n\n"
},

{
    "location": "#Indicators.tr-Tuple{Array{Float64,2}}",
    "page": "Home",
    "title": "Indicators.tr",
    "category": "method",
    "text": "True range\n\ntr(hlc::Matrix{Float64})::Array{Float64}\n\n\n\n\n\n"
},

{
    "location": "#Indicators.trima-Tuple{Array{Float64,N} where N}",
    "page": "Home",
    "title": "Indicators.trima",
    "category": "method",
    "text": "Triangular moving average (TRIMA)\n\ntrima(x::Array{Float64}; n::Int64=10, ma::Function=sma, args...)::Array{Float64}\n\n\n\n\n\n"
},

{
    "location": "#Indicators.wilder_sum-Tuple{Array{Float64,N} where N}",
    "page": "Home",
    "title": "Indicators.wilder_sum",
    "category": "method",
    "text": "Welles Wilder summation of an array\n\nwilder_sum(x::Array{Float64}; n::Int64=10)::Array{Float64}\n\n\n\n\n\n"
},

{
    "location": "#Indicators.wma-Tuple{Array{Float64,N} where N}",
    "page": "Home",
    "title": "Indicators.wma",
    "category": "method",
    "text": "Weighted moving average (WMA)\n\nwma(x::Array{Float64}; n::Int64=10, wts::Array{Float64}=collect(1:n)/sum(1:n))::Array{Float64}\n\n\n\n\n\n"
},

{
    "location": "#Indicators.wpr-Tuple{Array{Float64,2}}",
    "page": "Home",
    "title": "Indicators.wpr",
    "category": "method",
    "text": "Williams %R\n\nwpr(hlc::Array{Float64,2}, n::Int64=14)::Array{Float64}\n\n\n\n\n\n"
},

{
    "location": "#Indicators.zlema-Tuple{Array{Float64,N} where N}",
    "page": "Home",
    "title": "Indicators.zlema",
    "category": "method",
    "text": "Zero-lag exponential moving average (ZLEMA)\n\nzlema(x::Array{Float64}; n::Int=10, ema_args...)::Array{Float64}\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Indicators]\nOrder = [:type, :function]"
},

]}
