var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#MortalityTables-1",
    "page": "Readme",
    "title": "MortalityTables",
    "category": "section",
    "text": ""
},

{
    "location": "#Code-Review:-[![Build-Status](https://travis-ci.org/alecloudenback/MortalityTables.jl.svg?branchmaster)](https://travis-ci.org/alecloudenback/MortalityTables.jl)-[![Coverage-Status](https://coveralls.io/repos/github/alecloudenback/MortalityTables.jl/badge.svg?branchmaster)](https://coveralls.io/github/alecloudenback/MortalityTables.jl?branchmaster)-[![codecov.io](http://codecov.io/github/alecloudenback/MortalityTables.jl/coverage.svg?branchmaster)](http://codecov.io/github/alecloudenback/MortalityTables.jl?branchmaster)-1",
    "page": "Readme",
    "title": "Code Review: (Image: Build Status) (Image: Coverage Status) (Image: codecov.io)",
    "category": "section",
    "text": "A Julia package for working with MortalityTables. Has first-class support for missing values."
},

{
    "location": "#Simple-Usage-Example-1",
    "page": "Readme",
    "title": "Simple Usage Example",
    "category": "section",
    "text": "using MortalityTables\nconst mt = MortalityTables\n\ntables = mt.Tables()\ncso = tables[\"2001 CSO Super Preferred Select and Ultimate - Male Nonsmoker, ANB\"]\n\n\nmt.qx(cso,35,1) # == .00037\nmt.qx(cso,35,61) # == .26719\nmt.qx(cso,95) # == .26719\nmt.qx(cso,35,95) # == missing (table doesn\'t extend that far)"
},

{
    "location": "#Five-lines-of-code-to-visualize-and-compare-two-tables-1",
    "page": "Readme",
    "title": "Five lines of code to visualize and compare two tables",
    "category": "section",
    "text": "Well, eight if you count the import linesusing Plots\nusing MortalityTables\nconst mt = MortalityTables\n\ntbls = mt.Tables()\ncso_2001 = tbls[\"2001 CSO Super Preferred Select and Ultimate - Male Nonsmoker, ANB\"]\ncso_1980 = tbls[\"1980 CSO - Male Nonsmoker, ANB\"]\n\nage = 27\nplot([λ -> mt.qx(cso_2001,age,λ),λ -> mt.qx(cso_1980,age,λ)], 1:1:(100-age),label = [\"2001 CSO M SuperPref NS\" \"1980 CSO M NS\"], plot_title = [\"Comparison of 1980 and 2001 CSO\"])(Image: plot of q\'s)"
},

{
    "location": "#Some-Batteries-Included-1",
    "page": "Readme",
    "title": "Some Batteries Included",
    "category": "section",
    "text": "Comes with some tables built in via mort.SOA.org and by using you agree to their terms. Not all tables have been tested that they work by default, though I have not encountered issues with any of the the VBT/CSO/other usual tables.Included:2001 VBT\n2001 CSO\n1980 CSO\n1980 CETClick here to see the full list of tables included."
},

{
    "location": "#Adding-more-tables-1",
    "page": "Readme",
    "title": "Adding more tables",
    "category": "section",
    "text": "To add more tables for your use, download the .xml (aka the (Xtbml format)[https://mort.soa.org/About.aspx]) version of the table from mort.SOA.org and place it in the directory the package is installed in. This is usually ~user/.julia/packages/MortalityTables/[changing hash value]/src/tables/. Note: updating the package may remove your existing tables. Make a backup before updating your packagesAfter placing packages in the folder above, restart Julia and the should be discoverable when you run mt.Tables()"
},

{
    "location": "#Todos-1",
    "page": "Readme",
    "title": "Todos",
    "category": "section",
    "text": "Docs\nAutomatically parse built-in tables\nAdd more built-in tables\nUsage Examples\nMore tests\nPerformance testing"
},

{
    "location": "autodocs/#MortalityTables.qx-Tuple{MortalityTables.MortalityTable,Any}",
    "page": "Docstrings",
    "title": "MortalityTables.qx",
    "category": "method",
    "text": "qx(table::XTbMLTable, age)\n\nGiven a mortality table and an age returns the qx.\n\nIf the table is a select and ultimate table, it will return the select mortality during the ulitmate period because duration was not given.\n\nIf the table does not have select rates, will just return the rate for the given age.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MortalityTables.qx-Tuple{MortalityTables.XTbMLTable,Any}",
    "page": "Docstrings",
    "title": "MortalityTables.qx",
    "category": "method",
    "text": "qx(table::XTbMLTable, age)\n\nGiven a mortality table and an age returns the appropriate ultimate qx.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MortalityTables.qx-Tuple{MortalityTables.XTbMLTable,Int64,Int64}",
    "page": "Docstrings",
    "title": "MortalityTables.qx",
    "category": "method",
    "text": "qx(table::XTbMLTable, issueAge, duration)\n\nGiven a mortality table, an issue age, and a duration, returns the appropriate select or ultimate qx.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [MortalityTables]\nOrder = [:type, :function]"
},

]}
