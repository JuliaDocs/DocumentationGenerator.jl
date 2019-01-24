var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "(Image: License: MIT) (Image: Build Status) (Image: codecov.io) (Image: GitHub contributors) (Image: GitHub issues) (Image: GitHub version)(Image: ForTheBadge built-by-developers)"
},

{
    "location": "#HackerNews.jl-1",
    "page": "Readme",
    "title": "HackerNews.jl",
    "category": "section",
    "text": "The unofficial Julia API for Hackernews :fire:See Hacker News API"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Since HackerNews is registered in official Julia Registry, you can directly install it.julia> ]\n(v1.0) pkg> add HackerNews"
},

{
    "location": "#How-it-works?-1",
    "page": "Readme",
    "title": "How it works?",
    "category": "section",
    "text": "The API is fairly simple to use and there isn\'t much required to get up and running."
},

{
    "location": "#Getting-all-the-routes-available-to-be-used-1",
    "page": "Readme",
    "title": "Getting all the routes available to be used",
    "category": "section",
    "text": "The package provides a HackerNews.HNApiRoute which represents all the routes that the Hackernews API can handle. You can get a list of all available routes by typing,julia> subtypes(HackerNews.HNApiRoute)\n8-element Array{Union{DataType, UnionAll},1}:\n HackerNews.AskStories \n HackerNews.BestStories\n HackerNews.JobStories \n HackerNews.MaxItem    \n HackerNews.NewStories \n HackerNews.ShowStories\n HackerNews.TopStories \n HackerNews.Updates "
},

{
    "location": "#Getting-maxitem-1",
    "page": "Readme",
    "title": "Getting maxitem",
    "category": "section",
    "text": "julia> using HackerNews\n\njulia> maxitem = HackerNews.HN(HackerNews.MaxItem)\n\njulia> HackerNews.getinfo(maxitem)\nINFO: fetching maxitem..\nINFO: generating post data...\n1-element Array{HackerNews.HNPost,1}:\n HackerNews.HNPost(Dict{String,Any}(Pair{String,Any}(\"by\", ...)\n"
},

{
    "location": "#Getting-topstories,-newstories,-beststories,-askstories,-showstories-and-jobstories-1",
    "page": "Readme",
    "title": "Getting topstories, newstories, beststories, askstories, showstories and jobstories",
    "category": "section",
    "text": "\njulia> topstories = HackerNews.HN(HackerNews.TopStories, 2)\nHackerNews.HN(HackerNews.TopStories, 2, false)\n\njulia> result = HackerNews.getinfo(topstories)\nINFO: fetching HackerNews.TopStories...\nINFO: generating post data...\n2-element Array{HackerNews.HNPost,1}:\n HackerNews.HNPost(Dict{String,Any}(Pair{String,Any}(\"by\", ....)\n HackerNews.HNPost(Dict{String,Any}(Pair{String,Any}(\"by\", ...)\n\n# getting the type of result \njulia> typeof(result)\nArray{HackerNews.HNPost,1}\n\n# get all the fieldnames available\njulia> fieldnames(result[1])\n16-element Array{Symbol,1}:\n :data       \n :id         \n :deleted    \n :itemtype   \n :by         \n :time       \n :text       \n :dead       \n :parent     \n :poll       \n :kids       \n :url        \n :score      \n :title      \n :parts      \n :descendants\n\n# data field respresnt the raw Hackernews API response\njulia> result[1].data\nDict{String,Any} with 8 entries:\n  \"by\"          => \"KKKKkkkk1\"\n  \"descendants\" => 0\n  \"score\"       => 7\n  \"time\"        => 1520836426\n  \"id\"          => 16566536\n  \"title\"       => \"Intel Fights for Its Future\"\n  \"type\"        => \"story\"\n  \"url\"         => \"https://mondaynote.com/intel-fights-for-its-future-6498f886992b\"\n\n# accessing data using fields, AWESOME!\njulia> result[1].id\n16566536\n\njulia> result[1].by\n\"KKKKkkkk1\"\n\njulia> result[1].title\n\"Intel Fights for Its Future\""
},

{
    "location": "#Getting-updates-1",
    "page": "Readme",
    "title": "Getting updates",
    "category": "section",
    "text": "Updates can be related to profiles as well as posts,for User updates, set user_related=true while instantiating the HN type object\nfor Item updates, HN follows default settings which is user_related=false\n# posts related updates\njulia> item_updates = HackerNews.HN(HackerNews.Updates, 1, false)\nHackerNews.HN(HackerNews.Updates, 1, false)\n\njulia> HackerNews.getinfo(item_updates)\nINFO: fetching updates..\nINFO: generating post data...\n1-element Array{HackerNews.HNPost,1}:\n HackerNews.HNPost(Dict{String,Any}(Pair{String,Any}(\"by\", ...) \n\n\n# user related updates\njulia> user_updates = HackerNews.HN(HackerNews.Updates, 1, true)\nHackerNews.HN(HackerNews.Updates, 1, true)\n\njulia> HackerNews.getinfo(user_updates)\nINFO: fetching updates..\nINFO: generating user data...\n1-element Array{HackerNews.HNUser,1}:\n HackerNews.HNUser(Dict{String,Any}(Pair{String,Any}(\"submitted\", Any[...])"
},

{
    "location": "#Getting-user-information-1",
    "page": "Readme",
    "title": "Getting user information",
    "category": "section",
    "text": "julia> HackerNews.getuser(\"pg\")\nHackerNews.HNUser(Dict{String,Any}(Pair{String,Any}(\"submitted\", ...)\n\n# get the raw Hackernews api result inside data field\njulia> HackerNews.getuser(\"pg\").data\nDict{String,Any} with 5 entries:\n  \"submitted\" => Any[10484520, 10071788, 10071052, 10071018, 10070939, 10070787, 10070703, 10070527, 10070299, 10070175  …  36, 34, 31, 22, …\n  \"karma\"     => 155111\n  \"about\"     => \"Bug fixer.\"\n  \"id\"        => \"pg\"\n  \"created\"   => 1160418092\n\n# or alternatively explore using all the fields\njulia> fieldnames(HackerNews.getuser(\"pg\"))\n7-element Array{Symbol,1}:\n :data     \n :id       \n :delay    \n :created  \n :karma    \n :about    \n :submitted\n\n# Again, awesome!\njulia> HackerNews.getuser(\"pg\").id\n\"pg\"\n\njulia> HackerNews.getuser(\"pg\").karma\n155111"
},

{
    "location": "#Facing-issues?-:scream:-1",
    "page": "Readme",
    "title": "Facing issues? :scream:",
    "category": "section",
    "text": "Open a PR with the detailed expaination of the issue.\nReach me out here"
},

{
    "location": "autodocs/#HackerNews.HN",
    "page": "Docstrings",
    "title": "HackerNews.HN",
    "category": "type",
    "text": "HackerNews initializer composite type\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HackerNews.HNPost",
    "page": "Docstrings",
    "title": "HackerNews.HNPost",
    "category": "type",
    "text": "HackerNews post composite type\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HackerNews.HNUser",
    "page": "Docstrings",
    "title": "HackerNews.HNUser",
    "category": "type",
    "text": "Hackernews user composite type\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HackerNews.getids-Tuple{HN}",
    "page": "Docstrings",
    "title": "HackerNews.getids",
    "category": "method",
    "text": "function to get the ids for a story\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HackerNews.getinfo-Tuple{HN}",
    "page": "Docstrings",
    "title": "HackerNews.getinfo",
    "category": "method",
    "text": "function to get the actual posts for given array of IDs\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HackerNews.getuser-Tuple{String}",
    "page": "Docstrings",
    "title": "HackerNews.getuser",
    "category": "method",
    "text": "function to get a single user info\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HackerNews.parse_hn_response-Tuple{Any,Any,Any}",
    "page": "Docstrings",
    "title": "HackerNews.parse_hn_response",
    "category": "method",
    "text": "Parse response\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HackerNews.parse_hn_response-Tuple{Type{MaxItem},Any,Any}",
    "page": "Docstrings",
    "title": "HackerNews.parse_hn_response",
    "category": "method",
    "text": "Parse response for maxitem\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HackerNews.parse_hn_response-Tuple{Type{Updates},Any,Any}",
    "page": "Docstrings",
    "title": "HackerNews.parse_hn_response",
    "category": "method",
    "text": "Parse response for updates\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [HackerNews]\nOrder = [:type, :function]"
},

]}
