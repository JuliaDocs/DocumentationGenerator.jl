var documenterSearchIndex = {"docs": [

{
    "location": "#CurrenciesBase.AbstractMonetary",
    "page": "Home",
    "title": "CurrenciesBase.AbstractMonetary",
    "category": "type",
    "text": "The abstract type of objects representing a single value in one currency, or a collection of values in a set of currencies. These objects should behave like Monetary or Basket objects.\n\n\n\n\n\n"
},

{
    "location": "#CurrenciesBase.Monetary",
    "page": "Home",
    "title": "CurrenciesBase.Monetary",
    "category": "type",
    "text": "A representation of a monetary value, denominated in some currency. The currency used is part of the type and not the object. The value is internally represented as a quantity of some integer type. The usual way to construct a Monetary directly, if needed, is:\n\nMonetary(:USD)      # 1.00 USD\nMonetary(:USD, 325) # 3.25 USD\n\nBe careful about the decimal point, as the Monetary constructor takes an integer, representing the number of smallest denominations of the currency. Typically, this constructor is not called directly. It is easier to use the @usingcurrencies macro and the 100USD form instead.\n\nAlthough this type is flexible enough to support values internally represented as any integer type, such as BigInt, it is recommended to use the built-in Int type on your architecture unless you need a bigger type. Do not mix different kinds of internal types. To use a different internal representation, change the type of the second argument to Monetary:\n\nMonetary(:USD, BigInt(100))\n\nIn some applications, the minor denomination of a currency is not precise enough. It is sometimes useful to override the number of decimal points stored. For these applications, a third type parameter can be provided, indicating the number of decimal points to keep after the major denomination:\n\nMonetary{:USD, BigInt, 4}(10000)            # 1.0000 USD\nMonetary(:USD, BigInt(10000); precision=4)  # 1.0000 USD\n\n\n\n\n\n"
},

{
    "location": "#CurrenciesBase.currency-Union{Tuple{Currency{T,FixedDecimal{I,f}} where f where I}, Tuple{T}} where T",
    "page": "Home",
    "title": "CurrenciesBase.currency",
    "category": "method",
    "text": "currency(m::Monetary) → Symbol\n\nReturn a symbol corresponding to the ISO 4217 currency code of the currency that the given monetary amount is representing. For example, currency(80USD) will return :USD. If the given monetary value is of a non-ISO 4217 currency, then the returned symbol should contain only lowercase letters.\n\nPrefer iso4217alpha to this function if a string is desired.\n\n\n\n\n\n"
},

{
    "location": "#CurrenciesBase.currencyinfo",
    "page": "Home",
    "title": "CurrenciesBase.currencyinfo",
    "category": "function",
    "text": "Get a brief human-readable English-language description of the currency. The description should begin with the common name of the currency, which should describe it unambiguously (up to variations on the same currency). Optionally, parentheses following the main description may include additional information (such as the unit of a major currency unit).\n\nThis function may be called with either a symbol, a Monetary type, or a Monetary object.\n\n\n\n\n\n"
},

{
    "location": "#CurrenciesBase.decimals-Tuple{Symbol}",
    "page": "Home",
    "title": "CurrenciesBase.decimals",
    "category": "method",
    "text": "decimals(m::Monetary) → Int\ndecimals(s::Symbol)   → Int\ndecimals(d::DataType) → Int\n\nGet the precision, in terms of the number of decimal places after the major currency unit, of the given Monetary value or type. Alternatively, if given a symbol, gets the default exponent (the number of decimal places to represent the minor currency unit) for that symbol. Return -1 if there is no sane minor unit, such as for several kinds of precious metal.\n\n\n\n\n\n"
},

{
    "location": "#CurrenciesBase.iso4217alpha",
    "page": "Home",
    "title": "CurrenciesBase.iso4217alpha",
    "category": "function",
    "text": "iso4217alpha(s::Symbol)   → String\niso4217alpha(m::Monetary) → String\niso4217alpha(t::DataType) → String\n\nGet the ISO 4217 alphabetic code for a currency. For custom currencies, a lowercase string will be returned, and this should not be interpreted as an ISO 4217 code. Otherwise, a three-letter uppercase string will be returned. This function may be called with either a symbol, a Monetary type, or a Monetary object.\n\n\n\n\n\n"
},

{
    "location": "#CurrenciesBase.iso4217num",
    "page": "Home",
    "title": "CurrenciesBase.iso4217num",
    "category": "function",
    "text": "iso4217num(s::Symbol)   → Int\niso4217num(m::Monetary) → Int\niso4217num(t::DataType) → Int\n\nGet the ISO 4217 numeric code for a currency. For custom currencies, a value of 0 will be returned. This function may be called with either a symbol, a Monetary type, or a Monetary object. Note that most applications should zero-pad this code to three digits.\n\n\n\n\n\n"
},

{
    "location": "#CurrenciesBase.longsymbol",
    "page": "Home",
    "title": "CurrenciesBase.longsymbol",
    "category": "function",
    "text": "longsymbol(s::Symbol)   → String\nlongsymbol(m::Monetary) → String\nlongsymbol(t::DataType) → String\n\nGet a commonly-used currency symbol for a currency, with at least enough disambiguation to be non-ambiguous. This function may be called with either a symbol, a Monetary type, or a Monetary object.\n\n\n\n\n\n"
},

{
    "location": "#CurrenciesBase.majorunit",
    "page": "Home",
    "title": "CurrenciesBase.majorunit",
    "category": "function",
    "text": "majorunit(s::Symbol)   → Monetary{s}\nmajorunit(m::Monetary) → typeof(m)\nmajorunit(t::DataType) → t\n\nGet the major unit of the currency. This function may be called with either a symbol, a Monetary type, or a Monetary object.\n\n\n\n\n\n"
},

{
    "location": "#CurrenciesBase.newcurrency!-Tuple{Symbol,AbstractString,Int64}",
    "page": "Home",
    "title": "CurrenciesBase.newcurrency!",
    "category": "method",
    "text": "Add a new currency to the (global) currency list and return a unit for that currency. Prefer the @usingcustomcurrency macro, which leads to more clear code, whenever possible. This function takes three arguments: the symbol for the currency, a string description of the currency (following the conventions outlined in the documentation for currencyinfo), and an exponent representing the number of decimal points to describe the minor currency unit in terms of the major currency unit. Conventionally, the symbol used to describe custom currencies should consist of only lowercase letters.\n\nbtc = newcurrency!(:btc, \"Bitcoin\", 8)  # 1.00000000 BTC\n\n\n\n\n\n"
},

{
    "location": "#CurrenciesBase.shortsymbol",
    "page": "Home",
    "title": "CurrenciesBase.shortsymbol",
    "category": "function",
    "text": "shortsymbol(s::Symbol)   → String\nshortsymbol(m::Monetary) → String\nshortsymbol(t::DataType) → String\n\nGet a short, possibly ambiguous, commonly-used symbol for a currency. This function may be called with either a symbol, a Monetary type, or a Monetary object.\n\n\n\n\n\n"
},

{
    "location": "#CurrenciesBase.Currency",
    "page": "Home",
    "title": "CurrenciesBase.Currency",
    "category": "type",
    "text": "A simpler variant of Monetary that is expected to eventually be the default. The currency represented is part of the type and not the object. The value is internally represented as a quantity of some number type. The usual way to construct a Currency directly, if needed, is:\n\nCurrency{:USD}(FixedDecimal{Int, 2}(1))  # 1.00 USD\n\n\n\n\n\n"
},

{
    "location": "#CurrenciesBase.filltype-Union{Tuple{Type{Currency{T,FixedDecimal{I,f}} where f where I}}, Tuple{T}} where T",
    "page": "Home",
    "title": "CurrenciesBase.filltype",
    "category": "method",
    "text": "filltype(typ) → typ\n\nFill in default type parameters to get a fully-specified concrete type from a partially-specified one.\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [CurrenciesBase]\nOrder = [:type, :function]"
},

]}
