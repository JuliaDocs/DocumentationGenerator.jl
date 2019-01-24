var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#FredData-1",
    "page": "Readme",
    "title": "FredData",
    "category": "section",
    "text": "A third-party Julia library to pull data from Federal Reserve Economic Data (FRED).|                         | Does this thing work?                                           | | –––––––––––- | :––––––––––––––––––––––––––––––– | | Documentation       | \\<this page, for now\\>                                          | | Package Evaluator   | [![][pkg-0.5-img]][pkg-0.5-url] [![][pkg-0.6-img]][pkg-0.6-url] | | Build Status        | [![][travis-img]][travis-url] [![][appveyor-img]][appveyor-url] |"
},

{
    "location": "#Disclaimer-1",
    "page": "Readme",
    "title": "Disclaimer",
    "category": "section",
    "text": "FredData is not affiliated in any way with Federal Reserve Bank of St. Louis and is not officially maintained or otherwise supported by Federal Reserve Bank of St. Louis.FredData is free software and is issued under the MIT license."
},

{
    "location": "#Setup-1",
    "page": "Readme",
    "title": "Setup",
    "category": "section",
    "text": "FredData uses FRED\'s Developer API. As such, you must register an API key here in order to pull from the FRED servers.Download the package withjulia> Pkg.add(\"FredData\")Make the FRED API key that you just registered accessible to FredData in one of several ways. Ideally, we store your key such that it persists across sessions. In subsequent sections, we\'ll assume that you have stored your key in one of these ways such that it can be detected automatically. This will allow the use of the zero-argument constructor.Populate a configuration file ~/.freddatarc.\njulia  julia> open(joinpath(homedir(), \".freddatarc\"), \"w\") do f             write(f, \"0123456789abcdef0123456789abcdef\")         end\nPopulate the environment variable FRED_API_KEY such that it remains across sessions.\n```julia\non macOS/Linux\nshell> echo \"export FREDAPIKEY=0123456789abcdef0123456789abcdef\" >> ~/.bashrc\non Windows 7+\nshell> setx FREDAPIKEY 0123456789abcdef0123456789abcdef  ```Another option is to provide your API key to the constructor every time you wish to use the package.Provide the Fred constructor with your API key directly.\njulia  julia> f = Fred(\"0123456789abcdef0123456789abcdef\")  FRED API Connection          url: https://api.stlouisfed.org/fred/          key: 0123456789abcdef0123456789abcdef"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": ""
},

{
    "location": "#Basic-Usage-1",
    "page": "Readme",
    "title": "Basic Usage",
    "category": "section",
    "text": "Query observations and metadata.julia> using FredData\n\njulia> f = Fred()\nAPI key loaded.\nFRED API Connection\n        url: http://api.stlouisfed.org/fred/\n        key: 0123456789abcdef0123456789abcdef\n\njulia> a = get_data(f, \"GDPC1\")\nFredSeries\n        id: GDPC1\n        title: Real Gross Domestic Product\n        units: Billions of Chained 2009 Dollars\n        seas_adj (native): Seasonally Adjusted Annual Rate\n        freq (native): Quarterly\n        realtime_start: 2015-12-11\n        realtime_end: 2015-12-11\n        last_updated: 2015-11-24T08:01:09\n        notes: BEA Account Code: A191RX1 Real gross domestic product is the inflation adjusted value of the goods and services produced by labor and property located in the United States. For more information see the Guide to the National Income and Product Accounts of the United States (NIPA) - (http://www.bea.gov/national/pdf/nipaguid.pdf)\n        trans_short: lin\n        data: 275x4 DataFrame with columns [:realtime_start,:realtime_end,:date,:value]"
},

{
    "location": "#Advanced-Usage-1",
    "page": "Readme",
    "title": "Advanced Usage",
    "category": "section",
    "text": "Add optional arguments. All optional arguments specified by the FRED API are supported.using FredData\nf = Fred()\ndata = get_data(f, \"GDPC1\"; vintage_dates=\"2008-09-15\")\ndata = get_data(f, \"GDPC1\"; frequency=\"a\", units=\"chg\")For a full list of optional arguments, see ?get_data or here"
},

{
    "location": "#The-Fred-type-1",
    "page": "Readme",
    "title": "The Fred type",
    "category": "section",
    "text": "The Fred type represents a connection to the FRED API.Get and set fields.get_api_key(f::Fred): Get the base URL used to connect to the server\nget_api_url(f::Fred): Get the base URL used to connect to the server\nset_api_url!(f::Fred, url::AbstractString): Set the base URL used to connect to the server"
},

{
    "location": "#The-FredSeries-type-1",
    "page": "Readme",
    "title": "The FredSeries type",
    "category": "section",
    "text": "The FredSeries type contains the data in a query response.Get fields of a series s:s.id: Series ID\ns.title: Series title\ns.units_short: Units (abbr.)\ns.units: Units\ns.seas_adj_short: Seasonal adjustment (abbr.)\ns.seas_adj: Seasonal adjustment\ns.freq_short: Native frequency (abbr.)\ns.freq: Native frequency\ns.realtime_start: Date realtime period starts\ns.realtime_end: Date realtime period ends\ns.last_updated: Date series last updated\ns.notes: Series notes\ns.trans_short: Transformation of queried data (abbr.)\ns.data: The actual data; DataFrame with columns :realtime_start, :realtime_end, :date, :value"
},

{
    "location": "#Notes-1",
    "page": "Readme",
    "title": "Notes",
    "category": "section",
    "text": "Todo list:   ☐ improve test coverage   ☐ support creation of pseudo-vintages   ☐ support methods to query other parts of the API, such as releases, tags, and search  [pkg-0.4-img]: http://pkg.julialang.org/badges/FredData0.4.svg [pkg-0.4-url]: http://pkg.julialang.org/?pkg=FredData [pkg-0.5-img]: http://pkg.julialang.org/badges/FredData0.5.svg [pkg-0.5-url]: http://pkg.julialang.org/?pkg=FredData [pkg-0.6-img]: http://pkg.julialang.org/badges/FredData0.6.svg [pkg-0.6-url]: http://pkg.julialang.org/?pkg=FredData [pkg-0.7-img]: http://pkg.julialang.org/badges/FredData0.7.svg [pkg-0.7-url]: http://pkg.julialang.org/?pkg=FredData [travis-img]: https://travis-ci.org/micahjsmith/FredData.jl.svg?branch=master [travis-url]: https://travis-ci.org/micahjsmith/FredData.jl [appveyor-img]: https://ci.appveyor.com/api/projects/status/qmrotjcadtruev03/branch/master?svg=true [appveyor-url]: https://ci.appveyor.com/project/micahjsmith/freddata-jl"
},

{
    "location": "autodocs/#FredData.Fred",
    "page": "Docstrings",
    "title": "FredData.Fred",
    "category": "type",
    "text": "A connection to the Fred API.\n\nConstructors\n\nFred(): Key detected automatically. First, looks for the environment variable   FREDAPIKEY, then looks for the file ~/.freddatarc.\nFred(key::AbstractString): User specifies key directly\n\nArguments\n\nkey: Registration key provided by the Fred.\n\nNotes\n\nSet the API url with set_api_url!(f::Fred, url::AbstractString)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FredData.FredSeries",
    "page": "Docstrings",
    "title": "FredData.FredSeries",
    "category": "type",
    "text": "FredSeries(...)\n\nRepresent a single data series, and all associated metadata, as queried from FRED.\n\nThe following fields are available:\n\nid\ntitle\nunits_short\nunits\nseas_adj_short\nseas_adj\nfreq_short\nfreq\nrealtime_start\nrealtime_end\nlast_updated\nnotes\ntrans_short\ndata\n\n\n\n\n\n"
},

{
    "location": "autodocs/#FredData.get_data-Tuple{Fred,AbstractString}",
    "page": "Docstrings",
    "title": "FredData.get_data",
    "category": "method",
    "text": "get_data(f::Fred, series::AbstractString; kwargs...)\n\nRequest one series using the FRED API.\n\nArguments\n\nf: Fred connection object\nseries: series mnemonic\n\nOptional Arguments\n\nkwargs...: key-value pairs to be appended to the FRED request. Accepted keys include:\n\nrealtime_start: the start of the real-time period as YYYY-MM-DD string\nrealtime_end: the end of the real-time period as YYYY-MM-DD string\nlimit: maximum number of results to return\noffset: non-negative integer\nsort_order: \"asc\", \"desc\"\nobservation_start: the start of the observation period as YYYY-MM-DD string\nobservation_end: the end of the observation period as YYYY-MM-DD string\nunits: one of \"lin\", \"chg\", \"ch1\", \"pch\", \"pc1\", \"pca\", \"cch\", \"cca\", \"log\"\nfrequency: one of \"d\", \"w\", \"bw\", \"m\", \"q\", \"sa\", \"a\", \"wef\", \"weth\", \"wew\", \"wetu\", \"wem\", \"wesu\", \"wesa\", \"bwew\", \"bwem\"\naggregation_method: one of \"avg\", \"sum\", \"eop\"\noutput_type: one of 1 (obsevations by real-time period), 2 (observations by vintage date, all observations), 3 (observations by vintage date, new and revised observations only), 4 (observations, initial release only)\nvintage_dates: vintage dates as comma-separated YYYY-MM-DD strings\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [FredData]\nOrder = [:type, :function]"
},

]}
