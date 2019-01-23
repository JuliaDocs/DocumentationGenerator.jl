var documenterSearchIndex = {"docs": [

{
    "location": "#FinancialToolbox.blkimpv-Union{Tuple{num5}, Tuple{num4}, Tuple{num3}, Tuple{num2}, Tuple{num1}, Tuple{num1,num2,num3,num4,num5}, Tuple{num1,num2,num3,num4,num5,Bool}, Tuple{num1,num2,num3,num4,num5,Bool,Real}, Tuple{num1,num2,num3,num4,num5,Bool,Real,Real}} where num5<:Real where num4 where num3 where num2 where num1",
    "page": "Home",
    "title": "FinancialToolbox.blkimpv",
    "category": "method",
    "text": "Black Implied Volatility for European Options\n\n	σ=blkimpv(F0,K,r,T,Price,d=0.0,FlagIsCall=true,xtol=1e-14,ytol=1e-15)\n\nWhere:\n\n	F0         = Value of the Forward.\n	K          = Strike Price of the Option.\n	r          = Zero Rate.\n	T          = Time to Maturity of the Option.\n	Price      = Price of the Option.\n	FlagIsCall = true for Call Options, false for Put Options.\n\n	σ          = implied volatility of the European Option.\n\nExample\n\njulia> blkimpv(10.0,10.0,0.01,2.0,2.0)\n0.36568658096623635\n\n\n\n\n\n"
},

{
    "location": "#FinancialToolbox.blkprice-Union{Tuple{num5}, Tuple{num4}, Tuple{num3}, Tuple{num2}, Tuple{num1}, Tuple{num1,num2,num3,num4,num5}, Tuple{num1,num2,num3,num4,num5,Bool}} where num5<:Number where num4 where num3 where num2 where num1",
    "page": "Home",
    "title": "FinancialToolbox.blkprice",
    "category": "method",
    "text": "Black Price for European Options\n\n	Price=blkprice(F0,K,r,T,σ,FlagIsCall=true)\n\nWhere:\n\n	F0         = Value of the Forward.\n	K          = Strike Price of the Option.\n	r          = Zero Rate.\n	T          = Time to Maturity of the Option.\n	σ          = Implied Volatility.\n	FlagIsCall = true for Call Options, false for Put Options.\n\n	Price      = price of the European Option.\n\nExample\n\njulia> blkprice(10.0,10.0,0.01,2.0,0.2)\n1.1023600107733191\n\n\n\n\n\n"
},

{
    "location": "#FinancialToolbox.blsdelta-Union{Tuple{num6}, Tuple{num5}, Tuple{num4}, Tuple{num3}, Tuple{num2}, Tuple{num1}, Tuple{num1,num2,num3,num4,num5}, Tuple{num1,num2,num3,num4,num5,num6}, Tuple{num1,num2,num3,num4,num5,num6,Bool}} where num6<:Number where num5 where num4 where num3 where num2 where num1",
    "page": "Home",
    "title": "FinancialToolbox.blsdelta",
    "category": "method",
    "text": "Black & Scholes Delta for European Options\n\n	Δ=blsdelta(S0,K,r,T,σ,d=0.0,FlagIsCall=true)\n\nWhere:\n\n	S0         = Value of the Underlying.\n	K          = Strike Price of the Option.\n	r          = Zero Rate.\n	T          = Time to Maturity of the Option.\n	σ          = Implied Volatility\n	d          = Implied Dividend of the Underlying.\n	FlagIsCall = true for Call Options, false for Put Options.\n\n	Δ          = delta of the European Option.\n\nExample\n\njulia> blsdelta(10.0,10.0,0.01,2.0,0.2,0.01)\n0.5452173371920436\n\n\n\n\n\n"
},

{
    "location": "#FinancialToolbox.blsgamma-Union{Tuple{num6}, Tuple{num5}, Tuple{num4}, Tuple{num3}, Tuple{num2}, Tuple{num1}, Tuple{num1,num2,num3,num4,num5}, Tuple{num1,num2,num3,num4,num5,num6}, Tuple{num1,num2,num3,num4,num5,num6,Bool}} where num6<:Number where num5 where num4 where num3 where num2 where num1",
    "page": "Home",
    "title": "FinancialToolbox.blsgamma",
    "category": "method",
    "text": "Black & Scholes Gamma for European Options\n\n	Γ=blsgamma(S0,K,r,T,σ,d=0.0,FlagIsCall=true)\n\nWhere:\n\n	S0         = Value of the Underlying.\n	K          = Strike Price of the Option.\n	r          = Zero Rate.\n	T          = Time to Maturity of the Option.\n	σ          = Implied Volatility\n	d          = Implied Dividend of the Underlying.\n	FlagIsCall = true for Call Options, false for Put Options.\n\n	Γ          = gamma of the European Option.\n\nExample\n\njulia> blsgamma(10.0,10.0,0.01,2.0,0.2,0.01)\n0.13687881535712826\n\n\n\n\n\n"
},

{
    "location": "#FinancialToolbox.blsimpv-Union{Tuple{num6}, Tuple{num5}, Tuple{num4}, Tuple{num3}, Tuple{num2}, Tuple{num1}, Tuple{num1,num2,num3,num4,num5}, Tuple{num1,num2,num3,num4,num5,num6}, Tuple{num1,num2,num3,num4,num5,num6,Bool}, Tuple{num1,num2,num3,num4,num5,num6,Bool,Real}, Tuple{num1,num2,num3,num4,num5,num6,Bool,Real,Real}} where num6<:Real where num5 where num4 where num3 where num2 where num1",
    "page": "Home",
    "title": "FinancialToolbox.blsimpv",
    "category": "method",
    "text": "Black & Scholes Implied Volatility for European Options\n\n	σ=blsimpv(S0,K,r,T,Price,d=0.0,FlagIsCall=true,xtol=1e-14,ytol=1e-15)\n\nWhere:\n\n	S0         = Value of the Underlying.\n	K          = Strike Price of the Option.\n	r          = Zero Rate.\n	T          = Time to Maturity of the Option.\n	Price      = Price of the Option.\n	d          = Implied Dividend of the Underlying.\n	FlagIsCall = true for Call Options, false for Put Options.\n\n	σ          = implied volatility of the European Option.\n\nExample\n\njulia> blsimpv(10.0,10.0,0.01,2.0,2.0)\n0.3433730534290586\n\n\n\n\n\n"
},

{
    "location": "#FinancialToolbox.blslambda-Union{Tuple{num6}, Tuple{num5}, Tuple{num4}, Tuple{num3}, Tuple{num2}, Tuple{num1}, Tuple{num1,num2,num3,num4,num5}, Tuple{num1,num2,num3,num4,num5,num6}, Tuple{num1,num2,num3,num4,num5,num6,Bool}} where num6<:Number where num5 where num4 where num3 where num2 where num1",
    "page": "Home",
    "title": "FinancialToolbox.blslambda",
    "category": "method",
    "text": "Black & Scholes Lambda for European Options\n\n	Λ=blslambda(S0,K,r,T,σ,d=0.0,FlagIsCall=true)\n\nWhere:\n\n	S0         = Value of the Underlying.\n	K          = Strike Price of the Option.\n	r          = Zero Rate.\n	T          = Time to Maturity of the Option.\n	σ          = Implied Volatility\n	d          = Implied Dividend of the Underlying.\n	FlagIsCall = true for Call Options, false for Put Options.\n\n	Λ          = lambda of the European Option.\n\nExample\n\njulia> blslambda(10.0,10.0,0.01,2.0,0.2,0.01)\n4.945909973725978\n\n\n\n\n\n"
},

{
    "location": "#FinancialToolbox.blsprice-Union{Tuple{num6}, Tuple{num5}, Tuple{num4}, Tuple{num3}, Tuple{num2}, Tuple{num1}, Tuple{num1,num2,num3,num4,num5}, Tuple{num1,num2,num3,num4,num5,num6}, Tuple{num1,num2,num3,num4,num5,num6,Bool}} where num6<:Number where num5 where num4 where num3 where num2 where num1",
    "page": "Home",
    "title": "FinancialToolbox.blsprice",
    "category": "method",
    "text": "Black & Scholes Price for European Options\n\n	Price=blsprice(S0,K,r,T,σ,d=0.0,FlagIsCall=true)\n\nWhere:\n\n	S0         = Value of the Underlying.\n	K          = Strike Price of the Option.\n	r          = Zero Rate.\n	T          = Time to Maturity of the Option.\n	σ          = Implied Volatility\n	d          = Implied Dividend of the Underlying.\n	FlagIsCall = true for Call Options, false for Put Options.\n\n	Price      = price of the European Option.\n\nExample\n\njulia> blsprice(10.0,10.0,0.01,2.0,0.2,0.01)\n1.1023600107733191\n\n\n\n\n\n"
},

{
    "location": "#FinancialToolbox.blspsi-Union{Tuple{num6}, Tuple{num5}, Tuple{num4}, Tuple{num3}, Tuple{num2}, Tuple{num1}, Tuple{num1,num2,num3,num4,num5}, Tuple{num1,num2,num3,num4,num5,num6}, Tuple{num1,num2,num3,num4,num5,num6,Bool}} where num6<:Number where num5 where num4 where num3 where num2 where num1",
    "page": "Home",
    "title": "FinancialToolbox.blspsi",
    "category": "method",
    "text": "Black & Scholes Psi for European Options\n\n	Ψ=blspsi(S0,K,r,T,σ,d=0.0,FlagIsCall=true)\n\nWhere:\n\n	S0         = Value of the Underlying.\n	K          = Strike Price of the Option.\n	r          = Zero Rate.\n	T          = Time to Maturity of the Option.\n	σ          = Implied Volatility\n	d          = Implied Dividend of the Underlying.\n	FlagIsCall = true for Call Options, false for Put Options.\n\n	Ψ          = psi of the European Option.\n\nExample\n\njulia> blspsi(10.0,10.0,0.01,2.0,0.2,0.01)\n-10.904346743840872\n\n\n\n\n\n"
},

{
    "location": "#FinancialToolbox.blsrho-Union{Tuple{num6}, Tuple{num5}, Tuple{num4}, Tuple{num3}, Tuple{num2}, Tuple{num1}, Tuple{num1,num2,num3,num4,num5}, Tuple{num1,num2,num3,num4,num5,num6}, Tuple{num1,num2,num3,num4,num5,num6,Bool}} where num6<:Number where num5 where num4 where num3 where num2 where num1",
    "page": "Home",
    "title": "FinancialToolbox.blsrho",
    "category": "method",
    "text": "Black & Scholes Rho for European Options\n\n	ρ=blsrho(S0,K,r,T,σ,d=0.0,FlagIsCall=true)\n\nWhere:\n\n	S0         = Value of the Underlying.\n	K          = Strike Price of the Option.\n	r          = Zero Rate.\n	T          = Time to Maturity of the Option.\n	σ          = Implied Volatility\n	d          = Implied Dividend of the Underlying.\n	FlagIsCall = true for Call Options, false for Put Options.\n\n	ρ          = rho of the European Option.\n\nExample\n\njulia> blsrho(10.0,10.0,0.01,2.0,0.2,0.01)\n8.699626722294234\n\n\n\n\n\n"
},

{
    "location": "#FinancialToolbox.blstheta-Union{Tuple{num6}, Tuple{num5}, Tuple{num4}, Tuple{num3}, Tuple{num2}, Tuple{num1}, Tuple{num1,num2,num3,num4,num5}, Tuple{num1,num2,num3,num4,num5,num6}, Tuple{num1,num2,num3,num4,num5,num6,Bool}} where num6<:Number where num5 where num4 where num3 where num2 where num1",
    "page": "Home",
    "title": "FinancialToolbox.blstheta",
    "category": "method",
    "text": "Black & Scholes Theta for European Options\n\n	Θ=blstheta(S0,K,r,T,σ,d=0.0,FlagIsCall=true)\n\nWhere:\n\n	S0         = Value of the Underlying.\n	K          = Strike Price of the Option.\n	r          = Zero Rate.\n	T          = Time to Maturity of the Option.\n	σ          = Implied Volatility\n	d          = Implied Dividend of the Underlying.\n	FlagIsCall = true for Call Options, false for Put Options.\n\n	Θ          = theta of the European Option.\n\nExample\n\njulia> blstheta(10.0,10.0,0.01,2.0,0.2,0.01)\n-0.26273403060652334\n\n\n\n\n\n"
},

{
    "location": "#FinancialToolbox.blsvanna-Union{Tuple{num6}, Tuple{num5}, Tuple{num4}, Tuple{num3}, Tuple{num2}, Tuple{num1}, Tuple{num1,num2,num3,num4,num5}, Tuple{num1,num2,num3,num4,num5,num6}, Tuple{num1,num2,num3,num4,num5,num6,Bool}} where num6<:Number where num5 where num4 where num3 where num2 where num1",
    "page": "Home",
    "title": "FinancialToolbox.blsvanna",
    "category": "method",
    "text": "Black & Scholes Vanna for European Options\n\n	Vanna=blsvanna(S0,K,r,T,σ,d=0.0,FlagIsCall=true)\n\nWhere:\n\n	S0         = Value of the Underlying.\n	K          = Strike Price of the Option.\n	r          = Zero Rate.\n	T          = Time to Maturity of the Option.\n	σ          = Implied Volatility\n	d          = Implied Dividend of the Underlying.\n	FlagIsCall = true for Call Options, false for Put Options.\n\n	Vanna        = vanna of the European Option.\n\nExample\n\njulia> blsvanna(10.0,10.0,0.01,2.0,0.2,0.01)\n0.2737576307142566\n\n\n\n\n\n"
},

{
    "location": "#FinancialToolbox.blsvega-Union{Tuple{num6}, Tuple{num5}, Tuple{num4}, Tuple{num3}, Tuple{num2}, Tuple{num1}, Tuple{num1,num2,num3,num4,num5}, Tuple{num1,num2,num3,num4,num5,num6}, Tuple{num1,num2,num3,num4,num5,num6,Bool}} where num6<:Number where num5 where num4 where num3 where num2 where num1",
    "page": "Home",
    "title": "FinancialToolbox.blsvega",
    "category": "method",
    "text": "Black & Scholes Vega for European Options\n\n	ν=blsvega(S0,K,r,T,σ,d=0.0,FlagIsCall=true)\n\nWhere:\n\n	S0         = Value of the Underlying.\n	K          = Strike Price of the Option.\n	r          = Zero Rate.\n	T          = Time to Maturity of the Option.\n	σ          = Implied Volatility\n	d          = Implied Dividend of the Underlying.\n	FlagIsCall = true for Call Options, false for Put Options.\n\n	ν          = vega of the European Option.\n\nExample\n\njulia> blsvega(10.0,10.0,0.01,2.0,0.2,0.01)\n5.475152614285131\n\n\n\n\n\n"
},

{
    "location": "#FinancialToolbox.daysact-Tuple{Dates.Date,Dates.Date}",
    "page": "Home",
    "title": "FinancialToolbox.daysact",
    "category": "method",
    "text": "Actual Number of days between two dates\n\n	ndays=daysact(Date1,Date2)\n\nWhere:\n\n	Date1 = Start date.\n	Date2 = End date.\n\n	ndays      = Actual Number of days between Start Date and End Date.\n\nExample\n\njulia> daysact(Date(1996,10,12),Date(1998,1,10))\n455\n\n\n\n\n\n"
},

{
    "location": "#FinancialToolbox.fromExcelNumberToDate-Tuple{Integer}",
    "page": "Home",
    "title": "FinancialToolbox.fromExcelNumberToDate",
    "category": "method",
    "text": "From Excel Number Format to Date\n\n	Date=fromExcelNumberToDate(ExcelNumber)\n\nWhere:\n\n	ExcelNumber = Integer representing a date in the excel format.\n\n	Date      = Date representing the input in the Julia object format.\n\nExample\n\njulia> fromExcelNumberToDate(45000)\n2023-03-15\n\n\n\n\n\n"
},

{
    "location": "#FinancialToolbox.yearfrac-Tuple{Dates.Date,Dates.Date,Integer}",
    "page": "Home",
    "title": "FinancialToolbox.yearfrac",
    "category": "method",
    "text": "Fraction of year between two Dates according the following convention\n\n	yfr=yearfrac(Date1,Date2,basis)\n\nWhere:\n\n	Date1 = Start date.\n	Date2 = End date.\n	basis = Integer representing the following conventions:\n			- 0 = (ACT/ACT)\n			- 1 = (30/360 SIA)\n			- 2 = (ACT/360)\n			- 3 = (ACT/365)\n			- 4 = (30/360 PSA)\n			- 5 = (30/360 ISDA)\n			- 6 = (30E/360)\n			- 7 = (ACT/365 JPN)\n\n	yfr      = fraction of year between start and end date according to basis.\n\nExample\n\njulia> yearfrac(Date(1996,10,12),Date(1998,1,10),1)\n1.2444444444444445\n\n\n\n\n\n"
},

{
    "location": "#FinancialToolbox.blscheck-Union{Tuple{num6}, Tuple{num5}, Tuple{num4}, Tuple{num3}, Tuple{num2}, Tuple{num1}, Tuple{num1,num2,num3,num4,num5}, Tuple{num1,num2,num3,num4,num5,num6}} where num6<:Number where num5 where num4 where num3 where num2 where num1",
    "page": "Home",
    "title": "FinancialToolbox.blscheck",
    "category": "method",
    "text": "Check input for Black Scholes Formula\n\n\n\n\n\n"
},

{
    "location": "#FinancialToolbox.brentMethod",
    "page": "Home",
    "title": "FinancialToolbox.brentMethod",
    "category": "function",
    "text": "Brent Method: Scalar Equation Solver\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [FinancialToolbox]\nOrder = [:type, :function]"
},

]}
