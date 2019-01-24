var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#IMFData-1",
    "page": "Readme",
    "title": "IMFData",
    "category": "section",
    "text": "A Julia interface for retrieving data from the International Monetary Fund (IMF).Repo Status Build Status Coverage\n[![Project Status: Active – The project has reached a stable, usable state and is being actively developed.][repo-img]][repo-url] [![Travis][travis-img]][travis-url] [![AppVeyor][appveyor-img]][appveyor-url] [![Coveralls][coveralls-img]][coveralls-url] [![codecov.io][codecov-img]][codecov-url]"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "    (v1.0) pkg> add https://github.com/stephenbnicar/IMFData.jl"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "Get a list of datasets accessible from the API:    get_imf_datasets()Note: While this function returns a list of all available datasets, currently the module only supports data requests from the International Financial Statistics (IFS) dataset.Get the list of parameters (\"dimensions\") for a dataset and their values:    get_imf_datastructure(database_id::String)Example:    julia> ifs_structure = get_imf_datastructure(\"IFS\")\n    Dict{String,Any} with 2 entries:\n      \"Parameter Names\"  => 5×2 DataFrames.DataFrame\n      \"Parameter Values\" => Dict Any → Any with 5 entriesRetrieve data from the IFS dataset    get_ifs_data(area, indicator, frequency, startyear, endyear)area and indicator must be Strings or Arrays of Strings (to request multiple series with one call).\nfrequency is limited to annual (\"A\"), quarterly (\"Q\"), or monthly (\"M\").\nstartyear and endyear must be Ints.The function returns an IfsSeries object; the data (if available) is in the series field.Example:    julia> us_gdp = get_ifs_data(\"US\", \"NGDP_SA_XDC\", \"Q\", 2015, 2016)\n    IMF Data Series\n    Database: IFS\n    Area: US\n    Indicator: NGDP_SA_XDC\n    Description:\n    Frequency: Q\n    Time Period: 2015 to 2016\n    Data: 8 x 2 DataFrame\n\n    julia> us_gdp.series\n    8×2 DataFrames.DataFrame\n    │ Row │ date       │ value     │\n    ├─────┼────────────┼───────────┤\n    │ 1   │ 2015-03-01 │ 1.78747e7 │\n    │ 2   │ 2015-06-01 │ 1.80932e7 │\n    │ 3   │ 2015-09-01 │ 1.82277e7 │\n    │ 4   │ 2015-12-01 │ 1.82872e7 │\n    │ 5   │ 2016-03-01 │ 1.83252e7 │\n    │ 6   │ 2016-06-01 │ 1.8538e7  │\n    │ 7   │ 2016-09-01 │ 1.87291e7 │\n    │ 8   │ 2016-12-01 │ 1.89055e7 │With multiple requests:    julia> us_ca_gdp = get_ifs_data([\"US\",\"CA\"], \"NGDP_SA_XDC\", \"Q\", 2015, 2016)\n    2-element Array{IMFData.IMFSeries,1}:\n     IMF Data Series\n    Database: IFS\n    Area: US\n    Indicator: NGDP_SA_XDC\n    Description:\n    Frequency: Q\n    Time Period: 2015 to 2016\n    Data: 8 x 2 DataFrame\n\n     IMF Data Series\n    Database: IFS\n    Area: CA\n    Indicator: NGDP_SA_XDC\n    Description:\n    Frequency: Q\n    Time Period: 2015 to 2016\n    Data: 8 x 2 DataFrame"
},

{
    "location": "#Disclaimer-1",
    "page": "Readme",
    "title": "Disclaimer",
    "category": "section",
    "text": "IMFData.jl is not affiliated with, officially maintained, or otherwise supported by the International Monetary Fund.[travis-img]: https://travis-ci.org/stephenbnicar/IMFData.jl.svg?branch=master [travis-url]: https://travis-ci.org/stephenbnicar/IMFData.jl[appveyor-img]: https://ci.appveyor.com/api/projects/status/x3qvtuuodo24pam3/branch/master?svg=true [appveyor-url]: https://ci.appveyor.com/project/stephenbnicar/imfdata-jl/branch/master[coveralls-img]: https://coveralls.io/repos/github/stephenbnicar/IMFData.jl/badge.svg?branch=master [coveralls-url]: https://coveralls.io/github/stephenbnicar/IMFData.jl?branch=master[codecov-img]: http://codecov.io/github/stephenbnicar/IMFData.jl/coverage.svg?branch=master [codecov-url]: http://codecov.io/github/stephenbnicar/IMFData.jl?branch=master[repo-img]: http://www.repostatus.org/badges/latest/active.svg [repo-url]: http://www.repostatus.org/#active"
},

{
    "location": "autodocs/#IMFData.get_ifs_data-Tuple{String,String,String,Int64,Int64}",
    "page": "Docstrings",
    "title": "IMFData.get_ifs_data",
    "category": "method",
    "text": "get_ifs_data(area::String, indicator::String, frequency::String, startyear::Int, endyear::Int)\n\nRetrieve data for a single area-indicator pair from IFS dataset\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IMFData.get_imf_datasets-Tuple{}",
    "page": "Docstrings",
    "title": "IMFData.get_imf_datasets",
    "category": "method",
    "text": "get_imf_datasets()\n\nReturn the list of datasets that are accessible from the IMF API, along with their dataset IDs, as a DataFrame.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IMFData.get_imf_datastructure-Tuple{String}",
    "page": "Docstrings",
    "title": "IMFData.get_imf_datastructure",
    "category": "method",
    "text": "get_imf_datastructure(dataset_id::String)\n\nReturn parameter (\"dimension\") list and parameter values for dataset_id.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [IMFData]\nOrder = [:type, :function]"
},

]}
