var documenterSearchIndex = {"docs": [

{
    "location": "#DataDepsGenerators.citation_text-Tuple{Any}",
    "page": "Home",
    "title": "DataDepsGenerators.citation_text",
    "category": "method",
    "text": "citation_text(doi)\n\nUses the DOI formatted citation service to generate citation text for a given DOI. This works for DOI\'s issued by: CrossRef, DataCite, and mEDRA.\n\nSee https://citation.crosscite.org/docs.html#sec-4-1\n\n\n\n\n\n"
},

{
    "location": "#DataDepsGenerators.generate",
    "page": "Home",
    "title": "DataDepsGenerators.generate",
    "category": "function",
    "text": "generate([repo/s], url/id, [shortname]; show_failures=false)\n\nGenerates a DataDeps code block. The only reuired parameter is the url/id.\n\nurl/id The identifier for the dataset\na URL for a landing page is normally best\nOther IDs like a DOIs also work.\nrepo/s either a single repository/API or a list of such\nthis takes on of the DataRepo types exported by this package.\nE.g CKAN(), or Figshare().\nIf not provided, this defaults to checking all of them.\nIf only one repo is provided, and it fails, the error will be thrown.\nIf multiple repos are provided, them the metadata from all of them is combined.\nshortname, the name to use in the generated DataDep\nif not provided will use the dataset\'s title, but these are often very long.\nshow_failures, weather or not to list all the repos that fail and why.\nYou generally do not want to turn this on, unless you are debugging.\nIt is fine and expected for most repos to fail (after all the data is probably only on one of them)\nIf all repos fail, then the failure list will be shown, regardless of if this is set or not.\n\n\n\n\n\n"
},

{
    "location": "#DataDepsGenerators.aggregate-Tuple{Any}",
    "page": "Home",
    "title": "DataDepsGenerators.aggregate",
    "category": "method",
    "text": "aggregate(metadatas)\n\nGiven a collection of Metadata from differenct sources, combined them to create the most complete and detailed accounting of metadata.\n\n\n\n\n\n"
},

{
    "location": "#DataDepsGenerators.escape_multiline_string-Tuple{AbstractString}",
    "page": "Home",
    "title": "DataDepsGenerators.escape_multiline_string",
    "category": "method",
    "text": "escape_multiline_string\n\nlike Escape string, but does not escape newlines\n\n\n\n\n\n"
},

{
    "location": "#DataDepsGenerators.filter_html-Tuple{Any}",
    "page": "Home",
    "title": "DataDepsGenerators.filter_html",
    "category": "method",
    "text": "filter_html(text)\n\nStrips any HTML tags out of the text. If that is required.\n\n\n\n\n\n"
},

{
    "location": "#DataDepsGenerators.get_dataurls_from_webserver_index-Tuple{Any}",
    "page": "Home",
    "title": "DataDepsGenerators.get_dataurls_from_webserver_index",
    "category": "method",
    "text": "links_from_webserver_index(url)\n\nExtracts all the content links from a webservers directory index page. These follow a pretty standard form. This one is tested so far on Apache/2.2.15\n\n\n\n\n\n"
},

{
    "location": "#DataDepsGenerators.getfirst-Tuple{Any,Any,Vararg{Any,N} where N}",
    "page": "Home",
    "title": "DataDepsGenerators.getfirst",
    "category": "method",
    "text": "getfirst(dict, keys...)\n\nReturns the element coresponding to the first key that is found. Returns missing if no key is found.\n\n\n\n\n\n"
},

{
    "location": "#DataDepsGenerators.getpage",
    "page": "Home",
    "title": "DataDepsGenerators.getpage",
    "category": "function",
    "text": "getpage(url)\n\ndownloads and parses the page from the URL\n\n\n\n\n\n"
},

{
    "location": "#DataDepsGenerators.getpage_raw-Tuple{Any}",
    "page": "Home",
    "title": "DataDepsGenerators.getpage_raw",
    "category": "method",
    "text": "getpage_raw(url)\n\nDownloads the page from the URL, returning the raw (unparsed) text of the body.\n\n\n\n\n\n"
},

{
    "location": "#DataDepsGenerators.indent",
    "page": "Home",
    "title": "DataDepsGenerators.indent",
    "category": "function",
    "text": "indent(str)\n\nIndents each line in a string\n\n\n\n\n\n"
},

{
    "location": "#DataDepsGenerators.leaf_subtypes-Tuple{Any}",
    "page": "Home",
    "title": "DataDepsGenerators.leaf_subtypes",
    "category": "method",
    "text": "leaf_subtypes(T)\n\nReturns all the nonabstract types decedent from T.\n\n\n\n\n\n"
},

{
    "location": "#DataDepsGenerators.lift-Tuple{Any,Missing}",
    "page": "Home",
    "title": "DataDepsGenerators.lift",
    "category": "method",
    "text": "lift(func, arg)\n\nCalls func(arg), propagating missing values\n\n\n\n\n\n"
},

{
    "location": "#DataDepsGenerators.match_doi-Tuple{String}",
    "page": "Home",
    "title": "DataDepsGenerators.match_doi",
    "category": "method",
    "text": "match_doi(uri::String\n\n\n\n\n\n"
},

{
    "location": "#DataDepsGenerators.text_only-Tuple{Gumbo.HTMLDocument}",
    "page": "Home",
    "title": "DataDepsGenerators.text_only",
    "category": "method",
    "text": "text_only(doc)\n\nExtracts just the unformatted text (no attributes etc), from a HTML document or fragment(/s)\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [DataDepsGenerators]\nOrder = [:type, :function]"
},

]}
