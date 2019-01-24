var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#BusinessDays.jl-1",
    "page": "Readme",
    "title": "BusinessDays.jl",
    "category": "section",
    "text": "(Image: License) (Image: Build Status) (Image: codecov.io)A highly optimized Business Days calculator written in Julia language. Also known as Working Days calculator."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "julia> Pkg.add(\"BusinessDays\")"
},

{
    "location": "#Motivation-1",
    "page": "Readme",
    "title": "Motivation",
    "category": "section",
    "text": "This code was developed with a mindset of a Financial Institution that has a big Fixed Income portfolio. Many financial contracts, specially Fixed Income instruments, depend on a particular calendar of holidays to determine how many days exist between the valuation date and the maturity of the contract. A Business Days calculator is a small piece of software used to perform this important step of the valuation process. While there are many implementations of Business Days calculators out there, the usual implementation is based on this kind of algorithm:dt0 = initial_date\ndt1 = final_date\nholidays = vector_of_holidays\nbdays = 0\nwhile d0 <= d1\n    if d0 not in holidays\n        bdays = bdays + 1\n    end\n    d0 = d0 + 1\nend whileThis works fine for general use. But the performance becomes an issue if one must repeat this calculation many times. Say you have 50 000 contracts, each contract with 20 cash flows. If you need to apply this algorithm to each cash flow, you will need to perform it 1 000 000 times.For instance, let\'s try out this code using R and QuantLib (RQuantLib):library(RQuantLib)\nlibrary(microbenchmark)\n\nfrom <- as.Date(\"2015-06-29\")\nto <- as.Date(\"2100-12-20\")\nmicrobenchmark(businessDaysBetween(\"Brazil\", from, to))\n\nfrom_vect <- rep(from, 1000000)\nto_vect <- rep(to, 1000000)\nmicrobenchmark(businessDaysBetween(\"Brazil\", from_vect, to_vect), times=1)Running this code, we get the following: (only the fastest execution is shown)Unit: milliseconds\n                                    expr     min\n businessDaysBetween(\"Brazil\", from, to) 1.63803\n\nUnit: seconds\n                                              expr      min\n businessDaysBetween(\"Brazil\", from_vect, to_vect) 1837.476\nWhile one computation takes up to 2 milliseconds, we\'re in trouble if we have to repeat it for the whole portfolio: it takes about half an hour to complete. This is not due to R\'s performance, because RQuantLib is a simple wrapper to QuantLib C++ library.BusinessDays.jl uses a tailor-made cache to store Business Days results, reducing the time spent to the order of a few microseconds for a single computation. Also, the time spent to process the whole portfolio is reduced to under a second.It\'s also important to point out that the initialization of the memory cache, which is done only once for each Julia runtime session, takes less than half a second, including JIT compilation time. Also, the memory footprint required for each cached calendar should take around 0.7 MB.Benchmark Codejulia> using BusinessDays, Dates\n\njulia> d0 = Date(2015, 06, 29) ; d1 = Date(2100, 12, 20) ;\n\njulia> cal = BusinessDays.Brazil()\nBusinessDays.BRSettlement()\n\njulia> @time BusinessDays.initcache(cal)\n  0.161972 seconds (598.85 k allocations: 30.258 MiB, 2.29% gc time)\n\njulia> bdays(cal, d0, d1) # force JIT compilation\n21471 days\n\njulia> @time bdays(cal, d0, d1)\n  0.000012 seconds (9 allocations: 240 bytes)\n21471 days\n\njulia> @time for i in 1:1000000 bdays(cal, d0, d1) end\n  0.221275 seconds (5.00 M allocations: 76.294 MiB, 2.93% gc time)There\'s no magicIf we disable BusinessDays\'s cache, however, the performance is slightly worse than QuantLib\'s implementation. It takes around 38 minutes to process the same benchmark test.julia> BusinessDays.cleancache() # cleans existing cache, if any\n\njulia> @time for i in 1:1000000 bdays(cal, d0, d1) end\n# 2288.906548 seconds (5.00 M allocations: 76.294 MB, 0.00% gc time)It\'s important to point out that cache is disabled by default. So, in order to take advantage of high speed computation provided by this package, one must call BusinessDays.initcache function."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "julia> using BusinessDays, Dates\n\njulia> BusinessDays.initcache(:USSettlement) # creates cache for US Federal holidays, allowing fast computations\n\njulia> isbday(:USSettlement, Date(2015, 1, 1)) # Calendars can be referenced using symbols\nfalse\n\njulia> isbday(\"USSettlement\", Date(2015, 1, 1)) # ... and also strings\nfalse\n\njulia> isbday(BusinessDays.USSettlement(), Date(2015, 1, 1)) # but for the best performance, use a singleton instance\nfalse\n\njulia> tobday(:USSettlement, Date(2015, 1, 1)) # Adjust to next business day\n2015-01-02\n\njulia> tobday(:USSettlement, Date(2015, 1, 1); forward = false) # Adjust to last business day\n2014-12-31\n\njulia> advancebdays(:USSettlement, Date(2015, 1, 2), 1) # advances 1 business day\n2015-01-05\n\njulia> advancebdays(:USSettlement, Date(2015, 1, 2), -1) # goes back 1 business day\n2014-12-31\n\njulia> bdays(:USSettlement, Date(2014, 12, 31), Date(2015, 1, 5)) # counts the number of business days between dates\n2 days\n\njulia> bdayscount(:USSettlement, Date(2014, 12, 31), Date(2015, 1, 5)) # same as above, but returns integer\n2\n\njulia> isbday(:USSettlement, [Date(2014,12,31),Date(2015,1,1),Date(2015,1,2),Date(2015,1,3),Date(2015,1,5)])\n5-element Array{Bool,1}:\n  true\n false\n  true\n false\n  true\n\njulia> bdays(:USSettlement, [Date(2014,12,31),Date(2015,1,2)], [Date(2015,1,5),Date(2015,1,5)])\n2-element Array{Base.Dates.Day,1}:\n 2 days\n 1 day\nSee runtests.jl for more examples."
},

{
    "location": "#Package-Documentation-1",
    "page": "Readme",
    "title": "Package Documentation",
    "category": "section",
    "text": "HolidayCalendarAbstract type for Holiday Calendars.BusinessDays.easter_rata(y::Year) → IntReturns Easter date as a Rata Die number.BusinessDays.easter_date(y::Year) → DateReturns result of easter_rata as a Date instance.BusinessDays.findweekday(weekday_target::Int, yy::Int, mm::Int, occurrence::Int, ascending::Bool) → DateGiven a year yy and month mm, finds a date where a choosen weekday occurs.weekday_target values are declared in module Base.Dates:  Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday = 1,2,3,4,5,6,7.If ascending is true, searches from the beggining of the month. If false, searches from the end of the month.If occurrence is 2 and weekday_target is Monday, searches the 2nd Monday of the given month, and so on.isholiday(calendar, dt)Checks if dt is a holiday based on a given calendar of holidays.calendar can be an instance of HolidayCalendar,  a Symbol or an AbstractString.Returns boolean values.isweekend(dt)Returns true for Saturdays or Sundays. Returns false otherwise.isbday(calendar, dt)Returns true for weekends or holidays. Returns false otherwise.tobday(calendar, dt; [forward=true])Adjusts dt to next Business Day if it\'s not a Business Day. If isbday(dt), returns dt.advancebdays(calendar, dt, bdays_count)Increments given date dt by bdays_count. Decrements it if bdays_count is negative. bdays_count can be a Int, Vector{Int} or a UnitRange.Computation starts by next Business Day if dt is not a Business Day.bdays(calendar, dt0, dt1)Counts the number of Business Days between dt0 and dt1. Returns instances of Dates.Day.Computation is always based on next Business Day if given dates are not Business Days.bdayscount(calendar, dt0, dt1)Same as bdays, but returns Int.firstbdayofmonth(calendar, dt) , firstbdayofmonth(calendar, yy, mm)Returns the first business day for a given month.lastbdayofmonth(calendar, dt) , lastbdayofmonth(calendar, yy, mm)Returns the last business day for a given month.listholidays(calendar, dt0::Date, dt1::Date) → Vector{Date}Returns the list of holidays between dt0 and dt1.listbdays(calendar, dt0::Date, dt1::Date) → Vector{Date}Returns the list of business days between dt0 and dt1.BusinessDays.initcache(calendar, [d0], [d1])Creates cache for a given Holiday Calendar. After calling this function, any call to isbday function, or any function that uses isbday, will be optimized to use this cache.You can pass calendar as an instance of HolidayCalendar, Symbol or AbstractString. You can also pass calendar as an AbstractArray of those types.BusinessDays.cleancache([calendar])Cleans cache for a given instance or list of HolidayCalendar, Symbol or AbstractString."
},

{
    "location": "#Available-Business-Days-Calendars-1",
    "page": "Readme",
    "title": "Available Business Days Calendars",
    "category": "section",
    "text": "AustraliaASX : Public holidays for the Australian Stock Exchange (ASX).\nAustralia(state) : Public holidays for the Australian states and territories. Available for each state: Australia(:ACT), Australia(:NSW), Australia(:NT), Australia(:QLD), Australia(:SA), Australia(:TAS), Australia(:WA), Australia(:VIC).\nBRSettlement or Brazil : banking holidays for Brazil (federal holidays plus Carnival).\nBrazilBMF or BrazilExchange : holidays for BM&FBOVESPA Stock Exchange.\nCanadaSettlement or Canada: holidays for Canada.\nCanadaTSX: holidays for Toronto Stock Exchange\nCompositeHolidayCalendar : supports combination of Holiday Calendars.\nNullHolidayCalendar : isholiday returns false and isbday returns true for any date. bdays returns the actual days between dates.\nTARGET or TARGET2 or EuroZone : TARGET / TARGET2 Euro Zone holiday calendar.\nUSSettlement or UnitedStates: United States federal holidays.\nUSNYSE : United States NYSE holidays.\nUSGovernmentBond : United States Government Bond calendar.\nUKSettlement or UnitedKingdom: banking holidays for England and Wales.\nWeekendsOnly : for this calendar, isholiday returns false, but isbday returns false for Saturdays and Sundays."
},

{
    "location": "#Adding-new-Holiday-Calendars-1",
    "page": "Readme",
    "title": "Adding new Holiday Calendars",
    "category": "section",
    "text": "You can add your custom Holiday Calendar by doing the following:Define a subtype of HolidayCalendar.\nImplement a new method for isholiday for your calendar.Example Codejulia> using BusinessDays, Dates\n\njulia> struct CustomCalendar <: HolidayCalendar end\n\njulia> BusinessDays.isholiday(::CustomCalendar, dt::Date) = dt == Date(2015,8,27)\n\njulia> cc = CustomCalendar()\nCustomCalendar()\n\njulia> isholiday(cc, Date(2015,8,26))\nfalse\n\njulia> isholiday(cc, Date(2015,8,27))\ntrue\n\njulia> isholiday(:CustomCalendar, Date(2015,8,27))\ntrue\n\njulia> isholiday(\"CustomCalendar\", Date(2015,8,27))\ntrue"
},

{
    "location": "#Generic-Holiday-Calendar-1",
    "page": "Readme",
    "title": "Generic Holiday Calendar",
    "category": "section",
    "text": "You can use a fixed set of holidays to define a new Holiday Calendar using GenericHolidayCalendar type.julia> using BusinessDays, Dates\n\njulia> holidays = Set([Date(2018,1,16), Date(2018,1,18)])\n\njulia> dtmin = Date(2018,1,15); dtmax = Date(2018,1,19)\n\njulia> gen_calendar = GenericHolidayCalendar(holidays, dtmin, dtmax)\n\njulia> bdayscount(gen_calendar, Date(2018,1,15), Date(2018,1,17))\n1The constructor is given by: GenericHolidayCalendar(holidays, [dtmin], [dtmax], [_initcache_]), whereholidays: a set of holiday dates\ndtmin: minimum date allowed to check for holidays in holidays set. Defaults to min(holidays...).\ndtmax: maximum date allowed to check for holidays in holidays set. Defaults to max(holidays...).\n_initcache_: initializes the cache for this calendar. Defaults to true."
},

{
    "location": "#Alternative-Libraries-1",
    "page": "Readme",
    "title": "Alternative Libraries",
    "category": "section",
    "text": "Ito.jl: http://aviks.github.io/Ito.jl/time.html\nFinancialMarkets.jl: https://github.com/imanuelcostigan/FinancialMarkets.jl\nQuantLib.jl : https://github.com/pazzo83/QuantLib.jl\nQuantLib C++ Library: https://github.com/lballabio/QuantLib"
},

{
    "location": "autodocs/#BusinessDays.CompositeHolidayCalendar",
    "page": "Docstrings",
    "title": "BusinessDays.CompositeHolidayCalendar",
    "category": "type",
    "text": "Allows for combination of several Holiday Calendars.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BusinessDays.GenericHolidayCalendar",
    "page": "Docstrings",
    "title": "BusinessDays.GenericHolidayCalendar",
    "category": "type",
    "text": "GenericHolidayCalendar\n\nholidays: a set of holiday dates\ndtmin: minimum date allowed to check for holidays in holidays set. Defaults to min(holidays...).\ndtmax: maximum date allowed to check for holidays in holidays set. Defaults to max(holidays...).\ncache: instance of HolidayCalendarCache.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BusinessDays.GenericHolidayCalendar",
    "page": "Docstrings",
    "title": "BusinessDays.GenericHolidayCalendar",
    "category": "type",
    "text": "GenericHolidayCalendar(holidays, [dtmin], [dtmax], [_initcache_])\n\nholidays: a set of holiday dates\ndtmin: minimum date allowed to check for holidays in holidays set. Defaults to min(holidays...).\ndtmax: maximum date allowed to check for holidays in holidays set. Defaults to max(holidays...).\n_initcache_: initializes the cache for this calendar. Defaults to true.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BusinessDays.HolidayCalendar",
    "page": "Docstrings",
    "title": "BusinessDays.HolidayCalendar",
    "category": "type",
    "text": "Abstract type for Holiday Calendars.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BusinessDays.advancebdays-Tuple{HolidayCalendar,Dates.Date,Int64}",
    "page": "Docstrings",
    "title": "BusinessDays.advancebdays",
    "category": "method",
    "text": "advancebdays(calendar, dt, bdays_count)\n\nIncrements given date dt by bdays_count. Decrements it if bdays_count is negative. bdays_count can be a Int, Vector{Int} or a UnitRange.\n\nComputation starts by next Business Day if dt is not a Business Day.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BusinessDays.bdays-Tuple{HolidayCalendar,Dates.Date,Dates.Date}",
    "page": "Docstrings",
    "title": "BusinessDays.bdays",
    "category": "method",
    "text": "bdays(calendar, dt0, dt1) :: Dates.Day\n\nCounts the number of Business Days between dt0 and dt1. Returns instances of Dates.Day.\n\nComputation is always based on next Business Day if given dates are not Business Days.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BusinessDays.bdayscount-Tuple{HolidayCalendar,Dates.Date,Dates.Date}",
    "page": "Docstrings",
    "title": "BusinessDays.bdayscount",
    "category": "method",
    "text": "bdayscount(calendar, dt0, dt1) :: Int\n\nCounts the number of Business Days between dt0 and dt1. Returns Int.\n\nComputation is always based on next Business Day if given dates are not Business Days.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BusinessDays.firstbdayofmonth-Tuple{Any,Dates.Date}",
    "page": "Docstrings",
    "title": "BusinessDays.firstbdayofmonth",
    "category": "method",
    "text": "firstbdayofmonth(calendar, dt)\nfirstbdayofmonth(calendar, yy, mm)\n\nReturns the first business day of month.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BusinessDays.isbday-Tuple{HolidayCalendar,Dates.Date}",
    "page": "Docstrings",
    "title": "BusinessDays.isbday",
    "category": "method",
    "text": "isbday(calendar, dt)\n\nReturns false for weekends or holidays. Returns true otherwise.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BusinessDays.isholiday-Tuple{HolidayCalendar,Dates.Date}",
    "page": "Docstrings",
    "title": "BusinessDays.isholiday",
    "category": "method",
    "text": "isholiday(calendar, dt)\n\nChecks if dt is a holiday based on a given calendar of holidays.\n\ncalendar can be an instance of HolidayCalendar,  a Symbol or an AbstractString.\n\nReturns boolean values.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BusinessDays.isweekday-Tuple{Dates.Date}",
    "page": "Docstrings",
    "title": "BusinessDays.isweekday",
    "category": "method",
    "text": "isweekday(dt)\n\nReturns true for Monday to Friday. Returns false otherwise.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BusinessDays.isweekend-Tuple{Dates.Date}",
    "page": "Docstrings",
    "title": "BusinessDays.isweekend",
    "category": "method",
    "text": "isweekend(dt)\n\nReturns true for Saturdays or Sundays. Returns false otherwise.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BusinessDays.lastbdayofmonth-Tuple{Any,Dates.Date}",
    "page": "Docstrings",
    "title": "BusinessDays.lastbdayofmonth",
    "category": "method",
    "text": "lastbdayofmonth(calendar, dt)\nlastbdayofmonth(calendar, yy, mm)\n\nReturns the last business day of month.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BusinessDays.listbdays-Tuple{HolidayCalendar,Dates.Date,Dates.Date}",
    "page": "Docstrings",
    "title": "BusinessDays.listbdays",
    "category": "method",
    "text": "listbdays(calendar, dt0::Dates.Date, dt1::Dates.Date) → Vector{Dates.Date}\n\nReturns the list of business days between dt0 and dt1.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BusinessDays.listholidays-Tuple{HolidayCalendar,Dates.Date,Dates.Date}",
    "page": "Docstrings",
    "title": "BusinessDays.listholidays",
    "category": "method",
    "text": "listholidays(calendar, dt0::Dates.Date, dt1::Dates.Date) → Vector{Dates.Date}\n\nReturns the list of holidays between dt0 and dt1.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BusinessDays.tobday-Tuple{HolidayCalendar,Dates.Date}",
    "page": "Docstrings",
    "title": "BusinessDays.tobday",
    "category": "method",
    "text": "tobday(calendar, dt; [forward=true])\n\nAdjusts dt to next Business Day if it\'s not a Business Day. If isbday(dt), returns dt.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BusinessDays.Australia",
    "page": "Docstrings",
    "title": "BusinessDays.Australia",
    "category": "type",
    "text": "Public holidays for the Australian states and territories. Although some holidays are common to all states and territories, such as Christmas Day, each state and territory also has its own additional holidays. Therefore the set of relevant holidays depends on which state/territory you are concerned with.\n\nThe Australian states and territories are:\n\nAustralian Capital Territory (ACT)\nNew South Wales (NSW)\nNorthern Territory (NT)\nQueensland (QLD)\nSouth Australia (SA)\nTasmania (TAS)\nWestern Australia (WA)\nVictoria (VIC)\n\nFor example: cal = Australia(:QLD)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BusinessDays.AustraliaASX",
    "page": "Docstrings",
    "title": "BusinessDays.AustraliaASX",
    "category": "type",
    "text": "Public holidays for the Australian Stock Exchange (ASX).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BusinessDays.BRSettlement",
    "page": "Docstrings",
    "title": "BusinessDays.BRSettlement",
    "category": "type",
    "text": "Banking holidays for Brazil (federal holidays plus Carnival).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BusinessDays.BrazilExchange",
    "page": "Docstrings",
    "title": "BusinessDays.BrazilExchange",
    "category": "type",
    "text": "BMF&BOVESPA Exchange holidays (http://www.bmfbovespa.com.br).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BusinessDays.CanadaSettlement",
    "page": "Docstrings",
    "title": "BusinessDays.CanadaSettlement",
    "category": "type",
    "text": "Holidays for Canada\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BusinessDays.CanadaTSX",
    "page": "Docstrings",
    "title": "BusinessDays.CanadaTSX",
    "category": "type",
    "text": "Holidays for Toronto Stock Exchange\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BusinessDays.HolidayCalendarCache",
    "page": "Docstrings",
    "title": "BusinessDays.HolidayCalendarCache",
    "category": "type",
    "text": "Data structure for calendar cache.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BusinessDays.HolidayCalendarCache-Tuple{}",
    "page": "Docstrings",
    "title": "BusinessDays.HolidayCalendarCache",
    "category": "method",
    "text": "HolidayCalendarCache()\n\ncreates an empty instance of HolidayCalendarCache\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BusinessDays.NullHolidayCalendar",
    "page": "Docstrings",
    "title": "BusinessDays.NullHolidayCalendar",
    "category": "type",
    "text": "A calendar with no holidays and no weekends. bdays returns the actual days between dates (dt1 - d10).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BusinessDays.TARGET",
    "page": "Docstrings",
    "title": "BusinessDays.TARGET",
    "category": "type",
    "text": "Holidays for TARGET Eurozone (Trans-European Automated Real-time Gross Settlement Express Transfer System)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BusinessDays.UKSettlement",
    "page": "Docstrings",
    "title": "BusinessDays.UKSettlement",
    "category": "type",
    "text": "Banking holidays for England and Wales.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BusinessDays.USGovernmentBond",
    "page": "Docstrings",
    "title": "BusinessDays.USGovernmentBond",
    "category": "type",
    "text": "United States Government Bond calendar.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BusinessDays.USNYSE",
    "page": "Docstrings",
    "title": "BusinessDays.USNYSE",
    "category": "type",
    "text": "United States NYSE holidays.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BusinessDays.USSettlement",
    "page": "Docstrings",
    "title": "BusinessDays.USSettlement",
    "category": "type",
    "text": "United States federal holidays.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BusinessDays.WeekendsOnly",
    "page": "Docstrings",
    "title": "BusinessDays.WeekendsOnly",
    "category": "type",
    "text": "A calendar with no holidays. But account for weekends.\n\nisholiday always returns false for this calendar. Remember that isbday considers that Saturdays and Sundars are not business days.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BusinessDays.adjustweekendholidayPost-Tuple{Dates.Date}",
    "page": "Docstrings",
    "title": "BusinessDays.adjustweekendholidayPost",
    "category": "method",
    "text": "adjustweekendholidayPost(dt, [adjust_saturdays]) → Date\n\nIn the UK and Canada, if a holiday falls on Saturday or Sunday, it\'s observed on the next business day. This function will adjust to the next Monday.\n\nadjust_saturdays kwarg defaults to true.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BusinessDays.adjustweekendholidayUS-Tuple{Dates.Date}",
    "page": "Docstrings",
    "title": "BusinessDays.adjustweekendholidayUS",
    "category": "method",
    "text": "adjustweekendholidayUS(dt) → Date\n\nIn the United States, if a holiday falls on Saturday, it\'s observed on the preceding Friday. If it falls on Sunday, it\'s observed on the next Monday.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BusinessDays.cleancache-Tuple{HolidayCalendar}",
    "page": "Docstrings",
    "title": "BusinessDays.cleancache",
    "category": "method",
    "text": "cleancache([calendar])\n\nCleans cache for a given instance or list of HolidayCalendar, Symbol or AbstractString.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BusinessDays.easter_date-Tuple{Dates.Year}",
    "page": "Docstrings",
    "title": "BusinessDays.easter_date",
    "category": "method",
    "text": "easter_date(y::Dates.Year) → Dates.Date\n\nReturns result of easter_rata as a Dates.Date instance.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BusinessDays.easter_rata-Tuple{Dates.Year}",
    "page": "Docstrings",
    "title": "BusinessDays.easter_rata",
    "category": "method",
    "text": "easter_rata(y::Dates.Year) → Int\n\nReturns Easter date as a Rata Die number.\n\nBased on Algo R.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BusinessDays.findweekday-Tuple{Integer,Integer,Integer,Integer,Bool}",
    "page": "Docstrings",
    "title": "BusinessDays.findweekday",
    "category": "method",
    "text": "findweekday(weekday_target::Integer, yy::Integer, mm::Integer, occurrence::Integer, ascending::Bool) → Date\n\nGiven a year yy and month mm, finds a date where a choosen weekday occurs.\n\nweekday_target values are declared in module Base.Dates: Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday = 1,2,3,4,5,6,7.\n\nIf ascending is true, searches from the beginning of the month. If false, searches from the end of the month.\n\nIf occurrence is 2 and weekday_target is Monday, searches the 2nd Monday of the given month, and so on.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BusinessDays.initcache",
    "page": "Docstrings",
    "title": "BusinessDays.initcache",
    "category": "function",
    "text": "initcache(calendar, [d0], [d1])\n\nCreates cache for a given Holiday Calendar. After calling this function, any call to isbday function, or any function that uses isbday, will be optimized to use this cache.\n\nYou can pass calendar as an instance of HolidayCalendar, Symbol or AbstractString. You can also pass calendar as an AbstractArray of those types.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [BusinessDays]\nOrder = [:type, :function]"
},

]}
