var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#FinancialToolbox-1",
    "page": "Readme",
    "title": "FinancialToolbox",
    "category": "section",
    "text": "(Image: Build Status) (Image: FinancialToolbox) (Image: FinancialToolbox) (Image: Build status) (Image: codecov)"
},

{
    "location": "#This-is-a-Julia-package-containing-some-useful-Financial-functions-for-Pricing-and-Risk-Management-under-the-Black-and-Scholes-Model.-1",
    "page": "Readme",
    "title": "This is a Julia package containing some useful Financial functions for Pricing and Risk Management under the Black and Scholes Model.",
    "category": "section",
    "text": ""
},

{
    "location": "#The-syntax-is-the-same-of-the-Matlab-Financial-Toolbox.-1",
    "page": "Readme",
    "title": "The syntax is the same of the Matlab Financial Toolbox.",
    "category": "section",
    "text": "It currently contains the following functions:blsprice : Black & Scholes Price for European Options.\nblkprice : Black Price for European Options.\nblsdelta : Black & Scholes Delta sensitivity for European Options.\nblsgamma : Black & Scholes Gamma sensitivity for European Options.\nblstheta : Black & Scholes Theta sensitivity for European Options.\nblsvega  : Black & Scholes Vega sensitivity for European Options.\nblsrho   : Black & Scholes Rho sensitivity for European Options.\nblslambda: Black & Scholes Lambda sensitivity for European Options.\nblspsi   : Black & Scholes Psi sensitivity for European Options.\nblsvanna : Black & Scholes Vanna sensitivity for European Options.\nblsimpv  : Black & Scholes Implied Volatility for European Options (using Brent Method).\nblkimpv  : Black Implied Volatility for European Options (using Brent Method).Currently supports classical numerical input and other less common like:Complex Numbers\nDual Numbers\nHyperDual NumbersIt also contains some functions that could be useful for the Dates Management:yearfrac : fraction of years between two Dates (currently only the first seven convention of Matlab are supported).\ndaysact  : number of days between two Dates.The module is standalone."
},

{
    "location": "#How-to-Install-1",
    "page": "Readme",
    "title": "How to Install",
    "category": "section",
    "text": "To install the package simply type on the Julia REPL the following:Pkg.add(\"FinancialToolbox\")"
},

{
    "location": "#How-to-Test-1",
    "page": "Readme",
    "title": "How to Test",
    "category": "section",
    "text": "After the installation, to test the package type on the Julia REPL the following:Pkg.test(\"FinancialToolbox\")"
},

{
    "location": "#Example-of-Usage-1",
    "page": "Readme",
    "title": "Example of Usage",
    "category": "section",
    "text": "The following example is the pricing of a European Call Option with underlying varying according to the Black Scholes Model, given the implied volatility. After that it is possible to check the result computing the inverse of the Black Scholes formula.#Import the Package\nusing FinancialToolbox\n\n#Define input data\nspot=10;K=10;r=0.02;T=2.0;σ=0.2;d=0.01;\n\n#Call the function\nPrice=blsprice(spot,K,r,T,σ,d)\n#Price=1.1912013169995816\n\n#Check the Result\nVolatility=blsimpv(spot,K,r,T,Price,d)\n#Volatility=0.20000000000000002"
},

{
    "location": "#Contributors-1",
    "page": "Readme",
    "title": "Contributors",
    "category": "section",
    "text": "Thanks to Modesto Mas for the implementation of the Brent Method. "
},

{
    "location": "autodocs/#FinancialToolbox.blkimpv-Union{Tuple{num5}, Tuple{num4}, Tuple{num3}, Tuple{num2}, Tuple{num1}, Tuple{num1,num2,num3,num4,num5}, Tuple{num1,num2,num3,num4,num5,Bool}, Tuple{num1,num2,num3,num4,num5,Bool,Real}, Tuple{num1,num2,num3,num4,num5,Bool,Real,Real}} where num5<:Real where num4 where num3 where num2 where num1",
    "page": "Docstrings",
    "title": "FinancialToolbox.blkimpv",
    "category": "method",
    "text": "Black Implied Volatility for European Options\n\n	σ=blkimpv(F0,K,r,T,Price,d=0.0,FlagIsCall=true,xtol=1e-14,ytol=1e-15)\n\nWhere:\n\n	F0         = Value of the Forward.\n	K          = Strike Price of the Option.\n	r          = Zero Rate.\n	T          = Time to Maturity of the Option.\n	Price      = Price of the Option.\n	FlagIsCall = true for Call Options, false for Put Options.\n\n	σ          = implied volatility of the European Option.\n\nExample\n\njulia> blkimpv(10.0,10.0,0.01,2.0,2.0)\n0.36568658096623635\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinancialToolbox.blkprice-Union{Tuple{num5}, Tuple{num4}, Tuple{num3}, Tuple{num2}, Tuple{num1}, Tuple{num1,num2,num3,num4,num5}, Tuple{num1,num2,num3,num4,num5,Bool}} where num5<:Number where num4 where num3 where num2 where num1",
    "page": "Docstrings",
    "title": "FinancialToolbox.blkprice",
    "category": "method",
    "text": "Black Price for European Options\n\n	Price=blkprice(F0,K,r,T,σ,FlagIsCall=true)\n\nWhere:\n\n	F0         = Value of the Forward.\n	K          = Strike Price of the Option.\n	r          = Zero Rate.\n	T          = Time to Maturity of the Option.\n	σ          = Implied Volatility.\n	FlagIsCall = true for Call Options, false for Put Options.\n\n	Price      = price of the European Option.\n\nExample\n\njulia> blkprice(10.0,10.0,0.01,2.0,0.2)\n1.1023600107733191\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinancialToolbox.blsdelta-Union{Tuple{num6}, Tuple{num5}, Tuple{num4}, Tuple{num3}, Tuple{num2}, Tuple{num1}, Tuple{num1,num2,num3,num4,num5}, Tuple{num1,num2,num3,num4,num5,num6}, Tuple{num1,num2,num3,num4,num5,num6,Bool}} where num6<:Number where num5 where num4 where num3 where num2 where num1",
    "page": "Docstrings",
    "title": "FinancialToolbox.blsdelta",
    "category": "method",
    "text": "Black & Scholes Delta for European Options\n\n	Δ=blsdelta(S0,K,r,T,σ,d=0.0,FlagIsCall=true)\n\nWhere:\n\n	S0         = Value of the Underlying.\n	K          = Strike Price of the Option.\n	r          = Zero Rate.\n	T          = Time to Maturity of the Option.\n	σ          = Implied Volatility\n	d          = Implied Dividend of the Underlying.\n	FlagIsCall = true for Call Options, false for Put Options.\n\n	Δ          = delta of the European Option.\n\nExample\n\njulia> blsdelta(10.0,10.0,0.01,2.0,0.2,0.01)\n0.5452173371920436\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinancialToolbox.blsgamma-Union{Tuple{num6}, Tuple{num5}, Tuple{num4}, Tuple{num3}, Tuple{num2}, Tuple{num1}, Tuple{num1,num2,num3,num4,num5}, Tuple{num1,num2,num3,num4,num5,num6}, Tuple{num1,num2,num3,num4,num5,num6,Bool}} where num6<:Number where num5 where num4 where num3 where num2 where num1",
    "page": "Docstrings",
    "title": "FinancialToolbox.blsgamma",
    "category": "method",
    "text": "Black & Scholes Gamma for European Options\n\n	Γ=blsgamma(S0,K,r,T,σ,d=0.0,FlagIsCall=true)\n\nWhere:\n\n	S0         = Value of the Underlying.\n	K          = Strike Price of the Option.\n	r          = Zero Rate.\n	T          = Time to Maturity of the Option.\n	σ          = Implied Volatility\n	d          = Implied Dividend of the Underlying.\n	FlagIsCall = true for Call Options, false for Put Options.\n\n	Γ          = gamma of the European Option.\n\nExample\n\njulia> blsgamma(10.0,10.0,0.01,2.0,0.2,0.01)\n0.13687881535712826\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinancialToolbox.blsimpv-Union{Tuple{num6}, Tuple{num5}, Tuple{num4}, Tuple{num3}, Tuple{num2}, Tuple{num1}, Tuple{num1,num2,num3,num4,num5}, Tuple{num1,num2,num3,num4,num5,num6}, Tuple{num1,num2,num3,num4,num5,num6,Bool}, Tuple{num1,num2,num3,num4,num5,num6,Bool,Real}, Tuple{num1,num2,num3,num4,num5,num6,Bool,Real,Real}} where num6<:Real where num5 where num4 where num3 where num2 where num1",
    "page": "Docstrings",
    "title": "FinancialToolbox.blsimpv",
    "category": "method",
    "text": "Black & Scholes Implied Volatility for European Options\n\n	σ=blsimpv(S0,K,r,T,Price,d=0.0,FlagIsCall=true,xtol=1e-14,ytol=1e-15)\n\nWhere:\n\n	S0         = Value of the Underlying.\n	K          = Strike Price of the Option.\n	r          = Zero Rate.\n	T          = Time to Maturity of the Option.\n	Price      = Price of the Option.\n	d          = Implied Dividend of the Underlying.\n	FlagIsCall = true for Call Options, false for Put Options.\n\n	σ          = implied volatility of the European Option.\n\nExample\n\njulia> blsimpv(10.0,10.0,0.01,2.0,2.0)\n0.3433730534290586\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinancialToolbox.blslambda-Union{Tuple{num6}, Tuple{num5}, Tuple{num4}, Tuple{num3}, Tuple{num2}, Tuple{num1}, Tuple{num1,num2,num3,num4,num5}, Tuple{num1,num2,num3,num4,num5,num6}, Tuple{num1,num2,num3,num4,num5,num6,Bool}} where num6<:Number where num5 where num4 where num3 where num2 where num1",
    "page": "Docstrings",
    "title": "FinancialToolbox.blslambda",
    "category": "method",
    "text": "Black & Scholes Lambda for European Options\n\n	Λ=blslambda(S0,K,r,T,σ,d=0.0,FlagIsCall=true)\n\nWhere:\n\n	S0         = Value of the Underlying.\n	K          = Strike Price of the Option.\n	r          = Zero Rate.\n	T          = Time to Maturity of the Option.\n	σ          = Implied Volatility\n	d          = Implied Dividend of the Underlying.\n	FlagIsCall = true for Call Options, false for Put Options.\n\n	Λ          = lambda of the European Option.\n\nExample\n\njulia> blslambda(10.0,10.0,0.01,2.0,0.2,0.01)\n4.945909973725978\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinancialToolbox.blsprice-Union{Tuple{num6}, Tuple{num5}, Tuple{num4}, Tuple{num3}, Tuple{num2}, Tuple{num1}, Tuple{num1,num2,num3,num4,num5}, Tuple{num1,num2,num3,num4,num5,num6}, Tuple{num1,num2,num3,num4,num5,num6,Bool}} where num6<:Number where num5 where num4 where num3 where num2 where num1",
    "page": "Docstrings",
    "title": "FinancialToolbox.blsprice",
    "category": "method",
    "text": "Black & Scholes Price for European Options\n\n	Price=blsprice(S0,K,r,T,σ,d=0.0,FlagIsCall=true)\n\nWhere:\n\n	S0         = Value of the Underlying.\n	K          = Strike Price of the Option.\n	r          = Zero Rate.\n	T          = Time to Maturity of the Option.\n	σ          = Implied Volatility\n	d          = Implied Dividend of the Underlying.\n	FlagIsCall = true for Call Options, false for Put Options.\n\n	Price      = price of the European Option.\n\nExample\n\njulia> blsprice(10.0,10.0,0.01,2.0,0.2,0.01)\n1.1023600107733191\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinancialToolbox.blspsi-Union{Tuple{num6}, Tuple{num5}, Tuple{num4}, Tuple{num3}, Tuple{num2}, Tuple{num1}, Tuple{num1,num2,num3,num4,num5}, Tuple{num1,num2,num3,num4,num5,num6}, Tuple{num1,num2,num3,num4,num5,num6,Bool}} where num6<:Number where num5 where num4 where num3 where num2 where num1",
    "page": "Docstrings",
    "title": "FinancialToolbox.blspsi",
    "category": "method",
    "text": "Black & Scholes Psi for European Options\n\n	Ψ=blspsi(S0,K,r,T,σ,d=0.0,FlagIsCall=true)\n\nWhere:\n\n	S0         = Value of the Underlying.\n	K          = Strike Price of the Option.\n	r          = Zero Rate.\n	T          = Time to Maturity of the Option.\n	σ          = Implied Volatility\n	d          = Implied Dividend of the Underlying.\n	FlagIsCall = true for Call Options, false for Put Options.\n\n	Ψ          = psi of the European Option.\n\nExample\n\njulia> blspsi(10.0,10.0,0.01,2.0,0.2,0.01)\n-10.904346743840872\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinancialToolbox.blsrho-Union{Tuple{num6}, Tuple{num5}, Tuple{num4}, Tuple{num3}, Tuple{num2}, Tuple{num1}, Tuple{num1,num2,num3,num4,num5}, Tuple{num1,num2,num3,num4,num5,num6}, Tuple{num1,num2,num3,num4,num5,num6,Bool}} where num6<:Number where num5 where num4 where num3 where num2 where num1",
    "page": "Docstrings",
    "title": "FinancialToolbox.blsrho",
    "category": "method",
    "text": "Black & Scholes Rho for European Options\n\n	ρ=blsrho(S0,K,r,T,σ,d=0.0,FlagIsCall=true)\n\nWhere:\n\n	S0         = Value of the Underlying.\n	K          = Strike Price of the Option.\n	r          = Zero Rate.\n	T          = Time to Maturity of the Option.\n	σ          = Implied Volatility\n	d          = Implied Dividend of the Underlying.\n	FlagIsCall = true for Call Options, false for Put Options.\n\n	ρ          = rho of the European Option.\n\nExample\n\njulia> blsrho(10.0,10.0,0.01,2.0,0.2,0.01)\n8.699626722294234\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinancialToolbox.blstheta-Union{Tuple{num6}, Tuple{num5}, Tuple{num4}, Tuple{num3}, Tuple{num2}, Tuple{num1}, Tuple{num1,num2,num3,num4,num5}, Tuple{num1,num2,num3,num4,num5,num6}, Tuple{num1,num2,num3,num4,num5,num6,Bool}} where num6<:Number where num5 where num4 where num3 where num2 where num1",
    "page": "Docstrings",
    "title": "FinancialToolbox.blstheta",
    "category": "method",
    "text": "Black & Scholes Theta for European Options\n\n	Θ=blstheta(S0,K,r,T,σ,d=0.0,FlagIsCall=true)\n\nWhere:\n\n	S0         = Value of the Underlying.\n	K          = Strike Price of the Option.\n	r          = Zero Rate.\n	T          = Time to Maturity of the Option.\n	σ          = Implied Volatility\n	d          = Implied Dividend of the Underlying.\n	FlagIsCall = true for Call Options, false for Put Options.\n\n	Θ          = theta of the European Option.\n\nExample\n\njulia> blstheta(10.0,10.0,0.01,2.0,0.2,0.01)\n-0.26273403060652334\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinancialToolbox.blsvanna-Union{Tuple{num6}, Tuple{num5}, Tuple{num4}, Tuple{num3}, Tuple{num2}, Tuple{num1}, Tuple{num1,num2,num3,num4,num5}, Tuple{num1,num2,num3,num4,num5,num6}, Tuple{num1,num2,num3,num4,num5,num6,Bool}} where num6<:Number where num5 where num4 where num3 where num2 where num1",
    "page": "Docstrings",
    "title": "FinancialToolbox.blsvanna",
    "category": "method",
    "text": "Black & Scholes Vanna for European Options\n\n	Vanna=blsvanna(S0,K,r,T,σ,d=0.0,FlagIsCall=true)\n\nWhere:\n\n	S0         = Value of the Underlying.\n	K          = Strike Price of the Option.\n	r          = Zero Rate.\n	T          = Time to Maturity of the Option.\n	σ          = Implied Volatility\n	d          = Implied Dividend of the Underlying.\n	FlagIsCall = true for Call Options, false for Put Options.\n\n	Vanna        = vanna of the European Option.\n\nExample\n\njulia> blsvanna(10.0,10.0,0.01,2.0,0.2,0.01)\n0.2737576307142566\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinancialToolbox.blsvega-Union{Tuple{num6}, Tuple{num5}, Tuple{num4}, Tuple{num3}, Tuple{num2}, Tuple{num1}, Tuple{num1,num2,num3,num4,num5}, Tuple{num1,num2,num3,num4,num5,num6}, Tuple{num1,num2,num3,num4,num5,num6,Bool}} where num6<:Number where num5 where num4 where num3 where num2 where num1",
    "page": "Docstrings",
    "title": "FinancialToolbox.blsvega",
    "category": "method",
    "text": "Black & Scholes Vega for European Options\n\n	ν=blsvega(S0,K,r,T,σ,d=0.0,FlagIsCall=true)\n\nWhere:\n\n	S0         = Value of the Underlying.\n	K          = Strike Price of the Option.\n	r          = Zero Rate.\n	T          = Time to Maturity of the Option.\n	σ          = Implied Volatility\n	d          = Implied Dividend of the Underlying.\n	FlagIsCall = true for Call Options, false for Put Options.\n\n	ν          = vega of the European Option.\n\nExample\n\njulia> blsvega(10.0,10.0,0.01,2.0,0.2,0.01)\n5.475152614285131\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinancialToolbox.daysact-Tuple{Dates.Date,Dates.Date}",
    "page": "Docstrings",
    "title": "FinancialToolbox.daysact",
    "category": "method",
    "text": "Actual Number of days between two dates\n\n	ndays=daysact(Date1,Date2)\n\nWhere:\n\n	Date1 = Start date.\n	Date2 = End date.\n\n	ndays      = Actual Number of days between Start Date and End Date.\n\nExample\n\njulia> daysact(Date(1996,10,12),Date(1998,1,10))\n455\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinancialToolbox.fromExcelNumberToDate-Tuple{Integer}",
    "page": "Docstrings",
    "title": "FinancialToolbox.fromExcelNumberToDate",
    "category": "method",
    "text": "From Excel Number Format to Date\n\n	Date=fromExcelNumberToDate(ExcelNumber)\n\nWhere:\n\n	ExcelNumber = Integer representing a date in the excel format.\n\n	Date      = Date representing the input in the Julia object format.\n\nExample\n\njulia> fromExcelNumberToDate(45000)\n2023-03-15\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinancialToolbox.yearfrac-Tuple{Dates.Date,Dates.Date,Integer}",
    "page": "Docstrings",
    "title": "FinancialToolbox.yearfrac",
    "category": "method",
    "text": "Fraction of year between two Dates according the following convention\n\n	yfr=yearfrac(Date1,Date2,basis)\n\nWhere:\n\n	Date1 = Start date.\n	Date2 = End date.\n	basis = Integer representing the following conventions:\n			- 0 = (ACT/ACT)\n			- 1 = (30/360 SIA)\n			- 2 = (ACT/360)\n			- 3 = (ACT/365)\n			- 4 = (30/360 PSA)\n			- 5 = (30/360 ISDA)\n			- 6 = (30E/360)\n			- 7 = (ACT/365 JPN)\n\n	yfr      = fraction of year between start and end date according to basis.\n\nExample\n\njulia> yearfrac(Date(1996,10,12),Date(1998,1,10),1)\n1.2444444444444445\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinancialToolbox.blscheck-Union{Tuple{num6}, Tuple{num5}, Tuple{num4}, Tuple{num3}, Tuple{num2}, Tuple{num1}, Tuple{num1,num2,num3,num4,num5}, Tuple{num1,num2,num3,num4,num5,num6}} where num6<:Number where num5 where num4 where num3 where num2 where num1",
    "page": "Docstrings",
    "title": "FinancialToolbox.blscheck",
    "category": "method",
    "text": "Check input for Black Scholes Formula\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FinancialToolbox.brentMethod",
    "page": "Docstrings",
    "title": "FinancialToolbox.brentMethod",
    "category": "function",
    "text": "Brent Method: Scalar Equation Solver\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [FinancialToolbox]\nOrder = [:type, :function]"
},

]}
