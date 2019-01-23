var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Overview",
    "title": "Overview",
    "category": "page",
    "text": ""
},

{
    "location": "#CompoundPeriods-1",
    "page": "Overview",
    "title": "CompoundPeriods",
    "category": "section",
    "text": "This package enhances the CompoundPeriod type defined within Dates (Dates.CompoundPeriod).  A CompoundPeriod is formed by attaching (adding) two or more distinct Periods:julia> using Dates\n\njulia> typeof( Year(1999) ), typeof( Hour(15) )\nYear, Hour\n\njulia> typeof( Year(1999) + Hour(15) )\nDates.CompoundPeriod\n\njulia> typeof( Year(1999) + Month(12) + Day(5) + Hour(15) + Nanosecond(25) )\nDates.CompoundPeriod\n\njulia> dump(ans)\nDates.CompoundPeriod <: Dates.AbstractTime\n  periods::Array{Period,1}\n\n````\n\n## get the package\njulia julia> ] pkg> add CompoundPeriods pkg> <backspace>\n## use the package\n\nNote that `typeof( <Period>(n) + <Period>(n) )` is shown as `CompoundPeriod` rather than `Dates.CompoundPeriod`.\nThis lets you know that enhanced CompoundPeriods are in use.\njulia julia> using CompoundPeriods, Datesjulia> typeof( Year(1999) ), typeof( Hour(15) ) Year, Hourjulia> typeof( Year(1999) + Hour(15) ) CompoundPeriodjulia> typeof( Year(1999) + Month(12) + Day(5) + Hour(15) + Nanosecond(25) ) CompoundPeriod ```"
},

{
    "location": "canonicalcompoundperiods/#",
    "page": "Canonical Compound Periods",
    "title": "Canonical Compound Periods",
    "category": "page",
    "text": "julia> using Dates, CompoundPeriods\n\njulia> cperiod = Day(2) - Hour(18) + Second(3605)\n2 days, -18 hours, 3605 seconds\n\njulia> Day(cperiod), Hour(cperiod), Second(cperiod)\n(2 days, -18 hours, 3605 seconds)\n\njulia> day(cperiod), hour(cperiod), second(cperiod)\n(2, -18, 3605)\n\njulia> cperiod = canonical(cperiod)\n1 day, 7 hours, 5 seconds\n\njulia> Day(cperiod), Hour(cperiod), Second(cperiod)\n(1 day, 7 hours, 5 seconds)\n\njulia> day(cperiod), hour(cperiod), second(cperiod)\n(1, 7, 5)\n\njulia> cperiod[1], cperiod[end]\n1 day, 5 seconds"
},

{
    "location": "reversecompoundperiods/#",
    "page": "Reverse Compound Periods",
    "title": "Reverse Compound Periods",
    "category": "page",
    "text": "julia> using CompoundPeriods, Dates\n\njulia> cperiod = Day(5) + Hour(17) + Minute(35)\n5 days, 17 hours, 35 minutes\n\njulia> rperiod = reverse(cperiod)\n35 minutes, 17 hours, 5 days\n\njulia> [typeof(aperiod) for aperiod in cperiod]\n3-element Array{DataType,1}:\n Day   \n Hour  \n Minute\n \njulia> result = [];\n\njulia> for aperiod in rperiod\n            push!(result,(aperiod, aperiod.value))\n       end\n\njulia> result\n3-element Array{Any,1}:\n (35 minutes, 35)\n (17 hours, 17)  \n (5 days, 5)     "
},

{
    "location": "wellbehavedtemporalcomposites/#",
    "page": "Well Behaved Temporal Composites",
    "title": "Well Behaved Temporal Composites",
    "category": "page",
    "text": "julia>  time_translation = canonical(Minute(-3600) + Second(22))\n-2 days, -11 hours, -59 minutes, -38 seconds\n\njulia> temporal_algebra = fldmod(time_translation)\n-3 days, 12 hours, 22 seconds\n\njulia> cperiod = canonical(Day(2)-Hour(18)+Second(3605))\n1 day, 7 hours, 5 seconds\n\njulia> Second(cperiod), Minute(cperiod), Hour(cperiod), Day(cperiod)\n(5 seconds, 0 minutes, 7 hours, 1 day)\n\njulia> Seconds(cperiod), Minutes(cperiod), Hours(cperiod), Days(cperiod)\n(111605 seconds, 1860 minutes, 31 hours, 1 day)\n\njulia> TimeUnits(Day(2)+Hour(12))\n60 hours\n\njulia> TimeUnits(Minute(10)+Microsecond(100))\n600000100 microseconds"
},

{
    "location": "nanosecondincrements/#",
    "page": "Nanosecond Increments",
    "title": "Nanosecond Increments",
    "category": "page",
    "text": "julia> using Dates, CompoundPeriods\n\njulia> dyhr = Day(5) + Hour(79)\n5 days, 79 hours\n\njulia> dyhr = canonical(dyhr)\n1 week, 1 day, 7 hours\n\njulia> mnsc = canonical(Minute(-3600) + Second(22))\n-2 days, -11 hours, -59 minutes, -38 seconds\n\njulia> adatetime = DateTime(\"2004-03-02\")\n2004-03-02T00:00:00\n\njulia> Time(adatetime) + Nanosecond(4321)\n00:00:00.000004321\n\njulia> adatetime + mnsc\n2004-02-28T12:00:22"
},

{
    "location": "minmaxminmax/#",
    "page": "min, max, minmax",
    "title": "min, max, minmax",
    "category": "page",
    "text": "julia> using CompoundPeriods, Dates\n\njulia> cperiod = Day(5) + Hour(17) + Minute(35)\n5 days, 17 hours, 35 minutes\n\njulia> rperiod = reverse(cperiod)\n35 minutes, 17 hours, 5 days\n\njulia> cperiod == reverse(rperiod)\ntrue\n\njulia> min(cperiod), max(rperiod)\n(35 minutes, 5 days)\n\njulia> minmax(cperiod) == minmax(rperiod)\ntrue"
},

{
    "location": "datestimes/#",
    "page": "Dates, Times",
    "title": "Dates, Times",
    "category": "page",
    "text": "julia> using Dates, CompoundPeriods\n\njulia> dtm = DateTime(\"2011-02-04T10:11:12.345\")\n2011-02-04T10:11:12.345\n\njulia> dt, tm = Date(dtm), Time(dtm)\n(2011-02-04, 10:11:12.345)\n\njulia> dt, CompoundPeriod(dt), dt == Date(CompoundPeriod(dt))\n(2011-02-04, 2011 years, 2 months, 4 days, true)\n\njulia> tm, CompoundPeriod(tm), tm == Time(CompoundPeriod(tm))\n(10:11:12.345, 10 hours, 11 minutes, 12 seconds, 345 milliseconds, true)\n\njulia> CompoundPeriod(dtm)\n(2011 years, 2 months, 4 days, 10 hours, 11 minutes, 12 seconds, 345 milliseconds)\n\njulia> dtm == DateTime(CompoundPeriod(dtm))\ntrue"
},

]}
