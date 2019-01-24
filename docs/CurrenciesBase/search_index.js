var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#CurrenciesBase.jl-1",
    "page": "Readme",
    "title": "CurrenciesBase.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status)"
},

{
    "location": "#Purpose-1",
    "page": "Readme",
    "title": "Purpose",
    "category": "section",
    "text": "This package provides the core functionality for Currencies.jl."
},

{
    "location": "#Data-Source-1",
    "page": "Readme",
    "title": "Data Source",
    "category": "section",
    "text": "The currency-related information for this package comes from this Wikipedia page, the official ISO standard, and other Wikipedia pages. It is compiled manually and may be in error; please do submit a pull request to correct any errors."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "This README.md file provides a basic guide to getting started. It is not a replacement for the documentation. Please file any corrections or missing parts of the documentation as issues, or even better, send in a pull request.The Currencies module exports the Monetary type. To access currencies, use the @usingcurrencies macro. Basic operation is as follows:@usingcurrencies USD\n1USD + 2USD  # 3.00 USD\n3 * 1.5USD   # 4.50 USDMixed arithmetic is not supported:@usingcurrencies USD, CAD\n10USD + 3CAD  # ArgumentErrorMonetary amounts can be compared:@usingcurrencies USD, EUR\n1USD < 2USD        # true\nsort([2EUR, 1EUR]) # [1EUR, 2EUR]"
},

{
    "location": "#Using-Monetary-in-Practice-1",
    "page": "Readme",
    "title": "Using Monetary in Practice",
    "category": "section",
    "text": "Monetary types behave a lot like integer types, and they can be used like them for a lot of practical situations. For example, here is a (quite fast) function to give optimal change using the common European system of having coins and bills worth 0.01€, 0.02€, 0.05€, 0.10€, 0.20€, 0.50€, 1.00€, and so forth until 500.00€ (this algorithm doesn\'t necessarily work for all combinations of coin values).@usingcurrencies EUR\nCOINS = [500EUR, 200EUR, 100EUR, 50EUR, 20EUR, 10EUR, 5EUR, 2EUR, 1EUR, 0.5EUR,\n    0.2EUR, 0.1EUR, 0.05EUR, 0.02EUR, 0.01EUR]\nfunction change(amount::Monetary{:EUR,Int})\n    coins = Dict{Monetary{:EUR,Int}, Int}()\n    for denomination in COINS\n        coins[denomination], amount = divrem(amount, denomination)\n    end\n    coins\nend\n\nsum([k*v for (k, v) in change(167.25EUR)])  # 167.25EUR"
},

{
    "location": "autodocs/#CurrenciesBase.AbstractMonetary",
    "page": "Docstrings",
    "title": "CurrenciesBase.AbstractMonetary",
    "category": "type",
    "text": "The abstract type of objects representing a single value in one currency, or a collection of values in a set of currencies. These objects should behave like Monetary or Basket objects.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CurrenciesBase.Monetary",
    "page": "Docstrings",
    "title": "CurrenciesBase.Monetary",
    "category": "type",
    "text": "A representation of a monetary value, denominated in some currency. The currency used is part of the type and not the object. The value is internally represented as a quantity of some integer type. The usual way to construct a Monetary directly, if needed, is:\n\nMonetary(:USD)      # 1.00 USD\nMonetary(:USD, 325) # 3.25 USD\n\nBe careful about the decimal point, as the Monetary constructor takes an integer, representing the number of smallest denominations of the currency. Typically, this constructor is not called directly. It is easier to use the @usingcurrencies macro and the 100USD form instead.\n\nAlthough this type is flexible enough to support values internally represented as any integer type, such as BigInt, it is recommended to use the built-in Int type on your architecture unless you need a bigger type. Do not mix different kinds of internal types. To use a different internal representation, change the type of the second argument to Monetary:\n\nMonetary(:USD, BigInt(100))\n\nIn some applications, the minor denomination of a currency is not precise enough. It is sometimes useful to override the number of decimal points stored. For these applications, a third type parameter can be provided, indicating the number of decimal points to keep after the major denomination:\n\nMonetary{:USD, BigInt, 4}(10000)            # 1.0000 USD\nMonetary(:USD, BigInt(10000); precision=4)  # 1.0000 USD\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CurrenciesBase.currency-Union{Tuple{Currency{T,FixedDecimal{I,f}} where f where I}, Tuple{T}} where T",
    "page": "Docstrings",
    "title": "CurrenciesBase.currency",
    "category": "method",
    "text": "currency(m::Monetary) → Symbol\n\nReturn a symbol corresponding to the ISO 4217 currency code of the currency that the given monetary amount is representing. For example, currency(80USD) will return :USD. If the given monetary value is of a non-ISO 4217 currency, then the returned symbol should contain only lowercase letters.\n\nPrefer iso4217alpha to this function if a string is desired.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CurrenciesBase.currencyinfo",
    "page": "Docstrings",
    "title": "CurrenciesBase.currencyinfo",
    "category": "function",
    "text": "Get a brief human-readable English-language description of the currency. The description should begin with the common name of the currency, which should describe it unambiguously (up to variations on the same currency). Optionally, parentheses following the main description may include additional information (such as the unit of a major currency unit).\n\nThis function may be called with either a symbol, a Monetary type, or a Monetary object.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CurrenciesBase.decimals-Tuple{Symbol}",
    "page": "Docstrings",
    "title": "CurrenciesBase.decimals",
    "category": "method",
    "text": "decimals(m::Monetary) → Int\ndecimals(s::Symbol)   → Int\ndecimals(d::DataType) → Int\n\nGet the precision, in terms of the number of decimal places after the major currency unit, of the given Monetary value or type. Alternatively, if given a symbol, gets the default exponent (the number of decimal places to represent the minor currency unit) for that symbol. Return -1 if there is no sane minor unit, such as for several kinds of precious metal.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CurrenciesBase.iso4217alpha",
    "page": "Docstrings",
    "title": "CurrenciesBase.iso4217alpha",
    "category": "function",
    "text": "iso4217alpha(s::Symbol)   → String\niso4217alpha(m::Monetary) → String\niso4217alpha(t::DataType) → String\n\nGet the ISO 4217 alphabetic code for a currency. For custom currencies, a lowercase string will be returned, and this should not be interpreted as an ISO 4217 code. Otherwise, a three-letter uppercase string will be returned. This function may be called with either a symbol, a Monetary type, or a Monetary object.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CurrenciesBase.iso4217num",
    "page": "Docstrings",
    "title": "CurrenciesBase.iso4217num",
    "category": "function",
    "text": "iso4217num(s::Symbol)   → Int\niso4217num(m::Monetary) → Int\niso4217num(t::DataType) → Int\n\nGet the ISO 4217 numeric code for a currency. For custom currencies, a value of 0 will be returned. This function may be called with either a symbol, a Monetary type, or a Monetary object. Note that most applications should zero-pad this code to three digits.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CurrenciesBase.longsymbol",
    "page": "Docstrings",
    "title": "CurrenciesBase.longsymbol",
    "category": "function",
    "text": "longsymbol(s::Symbol)   → String\nlongsymbol(m::Monetary) → String\nlongsymbol(t::DataType) → String\n\nGet a commonly-used currency symbol for a currency, with at least enough disambiguation to be non-ambiguous. This function may be called with either a symbol, a Monetary type, or a Monetary object.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CurrenciesBase.majorunit",
    "page": "Docstrings",
    "title": "CurrenciesBase.majorunit",
    "category": "function",
    "text": "majorunit(s::Symbol)   → Monetary{s}\nmajorunit(m::Monetary) → typeof(m)\nmajorunit(t::DataType) → t\n\nGet the major unit of the currency. This function may be called with either a symbol, a Monetary type, or a Monetary object.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CurrenciesBase.newcurrency!-Tuple{Symbol,AbstractString,Int64}",
    "page": "Docstrings",
    "title": "CurrenciesBase.newcurrency!",
    "category": "method",
    "text": "Add a new currency to the (global) currency list and return a unit for that currency. Prefer the @usingcustomcurrency macro, which leads to more clear code, whenever possible. This function takes three arguments: the symbol for the currency, a string description of the currency (following the conventions outlined in the documentation for currencyinfo), and an exponent representing the number of decimal points to describe the minor currency unit in terms of the major currency unit. Conventionally, the symbol used to describe custom currencies should consist of only lowercase letters.\n\nbtc = newcurrency!(:btc, \"Bitcoin\", 8)  # 1.00000000 BTC\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CurrenciesBase.shortsymbol",
    "page": "Docstrings",
    "title": "CurrenciesBase.shortsymbol",
    "category": "function",
    "text": "shortsymbol(s::Symbol)   → String\nshortsymbol(m::Monetary) → String\nshortsymbol(t::DataType) → String\n\nGet a short, possibly ambiguous, commonly-used symbol for a currency. This function may be called with either a symbol, a Monetary type, or a Monetary object.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CurrenciesBase.Currency",
    "page": "Docstrings",
    "title": "CurrenciesBase.Currency",
    "category": "type",
    "text": "A simpler variant of Monetary that is expected to eventually be the default. The currency represented is part of the type and not the object. The value is internally represented as a quantity of some number type. The usual way to construct a Currency directly, if needed, is:\n\nCurrency{:USD}(FixedDecimal{Int, 2}(1))  # 1.00 USD\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CurrenciesBase.filltype-Union{Tuple{Type{Currency{T,FixedDecimal{I,f}} where f where I}}, Tuple{T}} where T",
    "page": "Docstrings",
    "title": "CurrenciesBase.filltype",
    "category": "method",
    "text": "filltype(typ) → typ\n\nFill in default type parameters to get a fully-specified concrete type from a partially-specified one.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [CurrenciesBase]\nOrder = [:type, :function]"
},

]}
