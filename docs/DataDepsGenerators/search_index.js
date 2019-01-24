var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#DataDepsGenerators-1",
    "page": "Readme",
    "title": "DataDepsGenerators",
    "category": "section",
    "text": "Travis CI Master: (Image: Build Status) AppVeyor Master: (Image: Build status)Generating registration blocks for DataDeps.jl in one key press.This package should not be used as a dependancy Instead the interactive features of this package should be used from the Julia REPL, to get a good registration block, which is output to a file (or STDOUT), which can be added to your package.While it can be used to directly create and invoke a registration, this use handy for interactive and prototyping use, but not great for packages, as it involves triggering a webscraper everytime the package is loaded. Not to mention DataDepsGenerators has a pretty heavy set of dependencies, that you don\'t really want weighing down your package.Note: DataDepsGenerators does it\'s best to generate the correct registration code block. But it is up to you make sure it is right. The code it generates isn\'t always the cleanest. It may capture too much, or too little information. It might get things wrong (particularly when it is scraping websites that are not very consitantly formatted). After generating make sure to take a few minutes to check the code is code you are happy with. Make a few tweaks, and it should be good to go.An example of use is in this blog-post"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "All usage revolves around the generate command. generate() is an overloaded method with two ways of usage:"
},

{
    "location": "#Default-Usage:-1",
    "page": "Readme",
    "title": "Default Usage:",
    "category": "section",
    "text": "generate(\"https://datadryad.org/resource/doi:10.5061/dryad.74699\")the first argument is the id_or_url\nthis lets us know which dataset (from that repository) is being targetted.\nin general just copy and paste the URL of the webpage discribing the dataset out of your webbrowser\nthe second argument is the datadep_name, this is what to use as the name of the datadep\ni.e. if you put \"Foo\", when you use the datadep in your code, you\'ll write datadep\"Foo\"\nif you skip it, DataDepsGenerators will generate a name from the page\nyou can always edit the resulting code anywayThis the default usage as we provide a hassle-free experience in downloading data without knowing the specifics of data repositories we support. It scrounges for data in all the supported repositories and reaps the best result combining all the information it acquires from these sources. However the user might want to make use of a specific repository and for that: "
},

{
    "location": "#Specific-Repo-Usage-1",
    "page": "Readme",
    "title": "Specific Repo Usage",
    "category": "section",
    "text": "generate(::DataRepo, id_or_url, [datadep_name])::StringAn extra argument needs to be provided to specify the data repositorythe first (or the additional) argument is a data repository.\nWhere the data is from.\nBasically this determines which generator to use.\nthis is an instance of a type, like GitHub(), or UCI()Both of these returns a String. On the REPL if you just return it, it will be full of escape characters. So best to print it, or write it to file."
},

{
    "location": "#Write-to-file-1",
    "page": "Readme",
    "title": "Write to file",
    "category": "section",
    "text": "To write the dependency block to a file, you just need to open the file (\"data.jl\" in this example) and write to it.using DataDepsGenerators\n\nopen(\"data.jl\", \"w\") do fh\n  generate(\"https://archive.ics.uci.edu/ml/datasets/Air+quality\", \"UCI Air\"))\nendThen in your project you can do:using DataDeps\n\nfunction __init__()\n    include(\"data.jl\")\nendto load registration up"
},

{
    "location": "#Output-it-to-the-screen-1",
    "page": "Readme",
    "title": "Output it to the screen",
    "category": "section",
    "text": "This is pretty easy:println(generate(UCI(), \"https://archive.ics.uci.edu/ml/datasets/Air+quality\", \"UCI Air\"))\n````\n\nthen copy and paste into your project.\n\n\n\n### Interactive Use\nWhile this isn\'t advise for use in packages -- since it throws away many of the benifits of using DataDeps, it can be done.\nIt is probably most useful in the REPL/IJulia.\njulia using DataDeps using DataDepsGeneratorseval(parse(generate(UCI(), \"https://archive.ics.uci.edu/ml/datasets/Air+quality\", \"UCI Air\"))\nThen just use anywhere in your code (later in the REPL session for example)  `datadep\"UCI Air\"` as if it were the name of a directory holding that data.\n(Which indeed what that string macro expands into -- even if it has to download the data first).\n\n## Supported DataRepos \n\nFor the API based DataRepos, we give a short description of all the data repositories we have tested it out and found to be working.\n \n \n### `UCI()` - Web Based\n https://archive.ics.uci.edu/ml/datasets\n \nA fairly classic repository for (mostly) small Machine Learning datasets\n \nIt not very consistantly written or formatted, so the registrations can be a bit chopy and may e.g. contain links that should have been removed etc.\n \n \n### `GitHub()` - Web Based\n https://github.com\n\nNotable Datasets:\n - the folders with-in https://github.com/fivethirtyeight/data\n - The repositories in https://github.com/BuzzFeedNews ([index page](https://github.com/BuzzFeedNews/everything))\n - Everything from https://github.com/collections/open-data\n \n \nNote that storing data in github is bad.\nHowever, a fair few datasets are stored there anyway.\nA lot of these are plain-text and small files so it works out ok enough.\n\nThe generator for Github works on whole repositories, or on folders within repositories.\nWhen downloadining whole repositories, your other option would be to download a `zip` or `tarball` which github provides; rather than generating a datadep with datadep generators which will result in downloading each file separately.\nYou could even manipulate DataDeps into doing a `git clone`.\n\nNote github does not like being used as a CDN.\nFor this reason DataDepsGenerators generates URLs to http://cdn.rawgit.com which is a CDN wrapper over github, so you won\'t thrash github\'s servers.\nAlso note that the DataDepGenerator will produce URLs pointing to the current commit.\nSo the if the repository is updated, the DataDep will still download the old data.\n(This is a feature).\n\nAt present, we do not support generating for any branch\'s other than master.\nThough it is a simple matter to do a find and replace for the commit SHAs in the generated code so as to point at any commit.\n\nAlso, the reference tests present in this package have been stripped off of urls, as they are observed to be changing frequently.\n\n### `DataDryad()` - Web Based\n\nhttps://datadryad.org\n\nDataDryad is one of the bigger research data stores.\nAlmost all the data in it is directly linked to one paper or another.\n\nExample of use:julia     generate(DataDryad(), \"https://datadryad.org/resource/doi:10.5061/dryad.74699\", \"Wild Crop Genomics\")\n### `CKAN()` - API Based\n\nhttp://docs.ckan.org/en/2.8/\n\nCKAN is majorly used by government organizations.\n\nData Repositories and examples of use:\n* CKAN Demo API: `generate(CKAN(), \"https://demo.ckan.org/dataset/gold-prices\")`\n* Data.gov: `generate(CKAN(), \"https://catalog.data.gov/api/3/action/package_show?id=consumer-complaint-database\")`\n* Data.gov.au: `generate(CKAN(), \"https://data.gov.au/api/3/action/package_show?id=2016-soe-atmosphere-hourly-co-and-24h-pm2-5-concentrations-measured-during-the-hazelwood-mine-fire\")`\n\n### `DataCite()` - API Based\n\nhttps://www.datacite.org/\n\nExample of use:julia     generate(DataCite(), \"10.5063/F1HT2M7Q\")     generate(DataCite(), \"https://search.datacite.org/works/10.15148/0e999ffc-e220-41ac-ac85-76e92ecd0320\")Either URL or DOI can be provided as arguments.\n\n### `Figshare()` - API Based\n\nhttps://figshare.com/\n\nExample of use:julia     generate(Figshare(), \"10.5281/zenodo.1194927\")     generate(Figshare(), \"https://figshare.com/articles/YouthActivisminChilefromurbaneducationalinequalitiestoexperiencesoflivingtogetherandsolidarity/6504206\")URL or DOI or Figshare ID can be provided as arguments.\n\n### `DataOneV1()` - API Based\n\nhttps://releases.dataone.org/online/api-documentation-v1.2.0/\n\nData repositories like DataDryad, support version 1 API of the DataOne. \n\nData Repositories:\n* DataDryad: `generate(DataOneV1(), \"https://datadryad.org/resource/doi:10.5061/dryad.74699\", \"Wild Crop Genomics\")`\n\n### `JSONLD_DOI()` - API Based\n\nhttps://json-ld.org/\n\nA lot of DOIs are stored as JSONLD. This generator helps in retrieving such.\n\nExample of use:julia     generate(JSONLD_DOI(), \"10.1371/journal.pbio.2001414\")\n### `JSONLD_Web()` - Web Based\n\nhttps://json-ld.org/\n\nA lot of data hosting websites like Kaggle, Zenodo, ICRISAT store information in the form of JSONLD on their pages. This generator helps in retrieving such JSONLDs.\n\nExample of use:julia     generate(JSONLD_Web(), \"https://www.kaggle.com/stackoverflow/stack-overflow-2018-developer-survey\") ```"
},

{
    "location": "#DataOneV2-1",
    "page": "Readme",
    "title": "DataOneV2",
    "category": "section",
    "text": "https://releases.dataone.org/online/api-documentation-v2.0/apis/index.htmlSupports DataOne API version 2. There are differences in the API structure in each of them, hence are accounted for, separately:Data Repositories:Knowledge Network for Biocomplexity KnowledgeNetworkforBiocomplexity(): generate(KnowledgeNetworkforBiocomplexity(), \"https://knb.ecoinformatics.org/knb/d1/mn/v2/object/doi:10.5063/F1T43R7N\")\nArctic Data Center ArcticDataCenter(): generate(ArcticDataCenter(), \"https://knb.ecoinformatics.org/knb/d1/mn/v2/object/doi:10.5063%2FF1HT2M7Q\")\nTerrestrial Ecosystem Research Network TERN(): generate(TERN(), \"https://dataone.tern.org.au/mn/v2/object/aekos.org.au/collection/nsw.gov.au/nsw_atlas/vis_flora_module/KAHDRAIN.20150515\")"
},

{
    "location": "autodocs/#DataDepsGenerators.citation_text-Tuple{Any}",
    "page": "Docstrings",
    "title": "DataDepsGenerators.citation_text",
    "category": "method",
    "text": "citation_text(doi)\n\nUses the DOI formatted citation service to generate citation text for a given DOI. This works for DOI\'s issued by: CrossRef, DataCite, and mEDRA.\n\nSee https://citation.crosscite.org/docs.html#sec-4-1\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DataDepsGenerators.generate",
    "page": "Docstrings",
    "title": "DataDepsGenerators.generate",
    "category": "function",
    "text": "generate([repo/s], url/id, [shortname]; show_failures=false)\n\nGenerates a DataDeps code block. The only reuired parameter is the url/id.\n\nurl/id The identifier for the dataset\na URL for a landing page is normally best\nOther IDs like a DOIs also work.\nrepo/s either a single repository/API or a list of such\nthis takes on of the DataRepo types exported by this package.\nE.g CKAN(), or Figshare().\nIf not provided, this defaults to checking all of them.\nIf only one repo is provided, and it fails, the error will be thrown.\nIf multiple repos are provided, them the metadata from all of them is combined.\nshortname, the name to use in the generated DataDep\nif not provided will use the dataset\'s title, but these are often very long.\nshow_failures, weather or not to list all the repos that fail and why.\nYou generally do not want to turn this on, unless you are debugging.\nIt is fine and expected for most repos to fail (after all the data is probably only on one of them)\nIf all repos fail, then the failure list will be shown, regardless of if this is set or not.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DataDepsGenerators.aggregate-Tuple{Any}",
    "page": "Docstrings",
    "title": "DataDepsGenerators.aggregate",
    "category": "method",
    "text": "aggregate(metadatas)\n\nGiven a collection of Metadata from differenct sources, combined them to create the most complete and detailed accounting of metadata.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DataDepsGenerators.escape_multiline_string-Tuple{AbstractString}",
    "page": "Docstrings",
    "title": "DataDepsGenerators.escape_multiline_string",
    "category": "method",
    "text": "escape_multiline_string\n\nlike Escape string, but does not escape newlines\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DataDepsGenerators.filter_html-Tuple{Any}",
    "page": "Docstrings",
    "title": "DataDepsGenerators.filter_html",
    "category": "method",
    "text": "filter_html(text)\n\nStrips any HTML tags out of the text. If that is required.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DataDepsGenerators.get_dataurls_from_webserver_index-Tuple{Any}",
    "page": "Docstrings",
    "title": "DataDepsGenerators.get_dataurls_from_webserver_index",
    "category": "method",
    "text": "links_from_webserver_index(url)\n\nExtracts all the content links from a webservers directory index page. These follow a pretty standard form. This one is tested so far on Apache/2.2.15\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DataDepsGenerators.getfirst-Tuple{Any,Any,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "DataDepsGenerators.getfirst",
    "category": "method",
    "text": "getfirst(dict, keys...)\n\nReturns the element coresponding to the first key that is found. Returns missing if no key is found.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DataDepsGenerators.getpage",
    "page": "Docstrings",
    "title": "DataDepsGenerators.getpage",
    "category": "function",
    "text": "getpage(url)\n\ndownloads and parses the page from the URL\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DataDepsGenerators.getpage_raw-Tuple{Any}",
    "page": "Docstrings",
    "title": "DataDepsGenerators.getpage_raw",
    "category": "method",
    "text": "getpage_raw(url)\n\nDownloads the page from the URL, returning the raw (unparsed) text of the body.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DataDepsGenerators.indent",
    "page": "Docstrings",
    "title": "DataDepsGenerators.indent",
    "category": "function",
    "text": "indent(str)\n\nIndents each line in a string\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DataDepsGenerators.leaf_subtypes-Tuple{Any}",
    "page": "Docstrings",
    "title": "DataDepsGenerators.leaf_subtypes",
    "category": "method",
    "text": "leaf_subtypes(T)\n\nReturns all the nonabstract types decedent from T.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DataDepsGenerators.lift-Tuple{Any,Missing}",
    "page": "Docstrings",
    "title": "DataDepsGenerators.lift",
    "category": "method",
    "text": "lift(func, arg)\n\nCalls func(arg), propagating missing values\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DataDepsGenerators.match_doi-Tuple{String}",
    "page": "Docstrings",
    "title": "DataDepsGenerators.match_doi",
    "category": "method",
    "text": "match_doi(uri::String\n\n\n\n\n\n"
},

{
    "location": "autodocs/#DataDepsGenerators.text_only-Tuple{Gumbo.HTMLDocument}",
    "page": "Docstrings",
    "title": "DataDepsGenerators.text_only",
    "category": "method",
    "text": "text_only(doc)\n\nExtracts just the unformatted text (no attributes etc), from a HTML document or fragment(/s)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [DataDepsGenerators]\nOrder = [:type, :function]"
},

]}
