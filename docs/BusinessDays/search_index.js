var documenterSearchIndex = {"docs": [

{
    "location": "#BusinessDays.CompositeHolidayCalendar",
    "page": "Home",
    "title": "BusinessDays.CompositeHolidayCalendar",
    "category": "type",
    "text": "Allows for combination of several Holiday Calendars.\n\n\n\n\n\n"
},

{
    "location": "#BusinessDays.GenericHolidayCalendar",
    "page": "Home",
    "title": "BusinessDays.GenericHolidayCalendar",
    "category": "type",
    "text": "GenericHolidayCalendar\n\nholidays: a set of holiday dates\ndtmin: minimum date allowed to check for holidays in holidays set. Defaults to min(holidays...).\ndtmax: maximum date allowed to check for holidays in holidays set. Defaults to max(holidays...).\ncache: instance of HolidayCalendarCache.\n\n\n\n\n\n"
},

{
    "location": "#BusinessDays.GenericHolidayCalendar",
    "page": "Home",
    "title": "BusinessDays.GenericHolidayCalendar",
    "category": "type",
    "text": "GenericHolidayCalendar(holidays, [dtmin], [dtmax], [_initcache_])\n\nholidays: a set of holiday dates\ndtmin: minimum date allowed to check for holidays in holidays set. Defaults to min(holidays...).\ndtmax: maximum date allowed to check for holidays in holidays set. Defaults to max(holidays...).\n_initcache_: initializes the cache for this calendar. Defaults to true.\n\n\n\n\n\n"
},

{
    "location": "#BusinessDays.HolidayCalendar",
    "page": "Home",
    "title": "BusinessDays.HolidayCalendar",
    "category": "type",
    "text": "Abstract type for Holiday Calendars.\n\n\n\n\n\n"
},

{
    "location": "#BusinessDays.advancebdays-Tuple{HolidayCalendar,Dates.Date,Int64}",
    "page": "Home",
    "title": "BusinessDays.advancebdays",
    "category": "method",
    "text": "advancebdays(calendar, dt, bdays_count)\n\nIncrements given date dt by bdays_count. Decrements it if bdays_count is negative. bdays_count can be a Int, Vector{Int} or a UnitRange.\n\nComputation starts by next Business Day if dt is not a Business Day.\n\n\n\n\n\n"
},

{
    "location": "#BusinessDays.bdays-Tuple{HolidayCalendar,Dates.Date,Dates.Date}",
    "page": "Home",
    "title": "BusinessDays.bdays",
    "category": "method",
    "text": "bdays(calendar, dt0, dt1) :: Dates.Day\n\nCounts the number of Business Days between dt0 and dt1. Returns instances of Dates.Day.\n\nComputation is always based on next Business Day if given dates are not Business Days.\n\n\n\n\n\n"
},

{
    "location": "#BusinessDays.bdayscount-Tuple{HolidayCalendar,Dates.Date,Dates.Date}",
    "page": "Home",
    "title": "BusinessDays.bdayscount",
    "category": "method",
    "text": "bdayscount(calendar, dt0, dt1) :: Int\n\nCounts the number of Business Days between dt0 and dt1. Returns Int.\n\nComputation is always based on next Business Day if given dates are not Business Days.\n\n\n\n\n\n"
},

{
    "location": "#BusinessDays.firstbdayofmonth-Tuple{Any,Dates.Date}",
    "page": "Home",
    "title": "BusinessDays.firstbdayofmonth",
    "category": "method",
    "text": "firstbdayofmonth(calendar, dt)\nfirstbdayofmonth(calendar, yy, mm)\n\nReturns the first business day of month.\n\n\n\n\n\n"
},

{
    "location": "#BusinessDays.isbday-Tuple{HolidayCalendar,Dates.Date}",
    "page": "Home",
    "title": "BusinessDays.isbday",
    "category": "method",
    "text": "isbday(calendar, dt)\n\nReturns false for weekends or holidays. Returns true otherwise.\n\n\n\n\n\n"
},

{
    "location": "#BusinessDays.isholiday-Tuple{HolidayCalendar,Dates.Date}",
    "page": "Home",
    "title": "BusinessDays.isholiday",
    "category": "method",
    "text": "isholiday(calendar, dt)\n\nChecks if dt is a holiday based on a given calendar of holidays.\n\ncalendar can be an instance of HolidayCalendar,  a Symbol or an AbstractString.\n\nReturns boolean values.\n\n\n\n\n\n"
},

{
    "location": "#BusinessDays.isweekday-Tuple{Dates.Date}",
    "page": "Home",
    "title": "BusinessDays.isweekday",
    "category": "method",
    "text": "isweekday(dt)\n\nReturns true for Monday to Friday. Returns false otherwise.\n\n\n\n\n\n"
},

{
    "location": "#BusinessDays.isweekend-Tuple{Dates.Date}",
    "page": "Home",
    "title": "BusinessDays.isweekend",
    "category": "method",
    "text": "isweekend(dt)\n\nReturns true for Saturdays or Sundays. Returns false otherwise.\n\n\n\n\n\n"
},

{
    "location": "#BusinessDays.lastbdayofmonth-Tuple{Any,Dates.Date}",
    "page": "Home",
    "title": "BusinessDays.lastbdayofmonth",
    "category": "method",
    "text": "lastbdayofmonth(calendar, dt)\nlastbdayofmonth(calendar, yy, mm)\n\nReturns the last business day of month.\n\n\n\n\n\n"
},

{
    "location": "#BusinessDays.listbdays-Tuple{HolidayCalendar,Dates.Date,Dates.Date}",
    "page": "Home",
    "title": "BusinessDays.listbdays",
    "category": "method",
    "text": "listbdays(calendar, dt0::Dates.Date, dt1::Dates.Date) → Vector{Dates.Date}\n\nReturns the list of business days between dt0 and dt1.\n\n\n\n\n\n"
},

{
    "location": "#BusinessDays.listholidays-Tuple{HolidayCalendar,Dates.Date,Dates.Date}",
    "page": "Home",
    "title": "BusinessDays.listholidays",
    "category": "method",
    "text": "listholidays(calendar, dt0::Dates.Date, dt1::Dates.Date) → Vector{Dates.Date}\n\nReturns the list of holidays between dt0 and dt1.\n\n\n\n\n\n"
},

{
    "location": "#BusinessDays.tobday-Tuple{HolidayCalendar,Dates.Date}",
    "page": "Home",
    "title": "BusinessDays.tobday",
    "category": "method",
    "text": "tobday(calendar, dt; [forward=true])\n\nAdjusts dt to next Business Day if it\'s not a Business Day. If isbday(dt), returns dt.\n\n\n\n\n\n"
},

{
    "location": "#BusinessDays.Australia",
    "page": "Home",
    "title": "BusinessDays.Australia",
    "category": "type",
    "text": "Public holidays for the Australian states and territories. Although some holidays are common to all states and territories, such as Christmas Day, each state and territory also has its own additional holidays. Therefore the set of relevant holidays depends on which state/territory you are concerned with.\n\nThe Australian states and territories are:\n\nAustralian Capital Territory (ACT)\nNew South Wales (NSW)\nNorthern Territory (NT)\nQueensland (QLD)\nSouth Australia (SA)\nTasmania (TAS)\nWestern Australia (WA)\nVictoria (VIC)\n\nFor example: cal = Australia(:QLD)\n\n\n\n\n\n"
},

{
    "location": "#BusinessDays.AustraliaASX",
    "page": "Home",
    "title": "BusinessDays.AustraliaASX",
    "category": "type",
    "text": "Public holidays for the Australian Stock Exchange (ASX).\n\n\n\n\n\n"
},

{
    "location": "#BusinessDays.BRSettlement",
    "page": "Home",
    "title": "BusinessDays.BRSettlement",
    "category": "type",
    "text": "Banking holidays for Brazil (federal holidays plus Carnival).\n\n\n\n\n\n"
},

{
    "location": "#BusinessDays.BrazilExchange",
    "page": "Home",
    "title": "BusinessDays.BrazilExchange",
    "category": "type",
    "text": "BMF&BOVESPA Exchange holidays (http://www.bmfbovespa.com.br).\n\n\n\n\n\n"
},

{
    "location": "#BusinessDays.CanadaSettlement",
    "page": "Home",
    "title": "BusinessDays.CanadaSettlement",
    "category": "type",
    "text": "Holidays for Canada\n\n\n\n\n\n"
},

{
    "location": "#BusinessDays.CanadaTSX",
    "page": "Home",
    "title": "BusinessDays.CanadaTSX",
    "category": "type",
    "text": "Holidays for Toronto Stock Exchange\n\n\n\n\n\n"
},

{
    "location": "#BusinessDays.HolidayCalendarCache",
    "page": "Home",
    "title": "BusinessDays.HolidayCalendarCache",
    "category": "type",
    "text": "Data structure for calendar cache.\n\n\n\n\n\n"
},

{
    "location": "#BusinessDays.HolidayCalendarCache-Tuple{}",
    "page": "Home",
    "title": "BusinessDays.HolidayCalendarCache",
    "category": "method",
    "text": "HolidayCalendarCache()\n\ncreates an empty instance of HolidayCalendarCache\n\n\n\n\n\n"
},

{
    "location": "#BusinessDays.NullHolidayCalendar",
    "page": "Home",
    "title": "BusinessDays.NullHolidayCalendar",
    "category": "type",
    "text": "A calendar with no holidays and no weekends. bdays returns the actual days between dates (dt1 - d10).\n\n\n\n\n\n"
},

{
    "location": "#BusinessDays.TARGET",
    "page": "Home",
    "title": "BusinessDays.TARGET",
    "category": "type",
    "text": "Holidays for TARGET Eurozone (Trans-European Automated Real-time Gross Settlement Express Transfer System)\n\n\n\n\n\n"
},

{
    "location": "#BusinessDays.UKSettlement",
    "page": "Home",
    "title": "BusinessDays.UKSettlement",
    "category": "type",
    "text": "Banking holidays for England and Wales.\n\n\n\n\n\n"
},

{
    "location": "#BusinessDays.USGovernmentBond",
    "page": "Home",
    "title": "BusinessDays.USGovernmentBond",
    "category": "type",
    "text": "United States Government Bond calendar.\n\n\n\n\n\n"
},

{
    "location": "#BusinessDays.USNYSE",
    "page": "Home",
    "title": "BusinessDays.USNYSE",
    "category": "type",
    "text": "United States NYSE holidays.\n\n\n\n\n\n"
},

{
    "location": "#BusinessDays.USSettlement",
    "page": "Home",
    "title": "BusinessDays.USSettlement",
    "category": "type",
    "text": "United States federal holidays.\n\n\n\n\n\n"
},

{
    "location": "#BusinessDays.WeekendsOnly",
    "page": "Home",
    "title": "BusinessDays.WeekendsOnly",
    "category": "type",
    "text": "A calendar with no holidays. But account for weekends.\n\nisholiday always returns false for this calendar. Remember that isbday considers that Saturdays and Sundars are not business days.\n\n\n\n\n\n"
},

{
    "location": "#BusinessDays.adjustweekendholidayPost-Tuple{Dates.Date}",
    "page": "Home",
    "title": "BusinessDays.adjustweekendholidayPost",
    "category": "method",
    "text": "adjustweekendholidayPost(dt, [adjust_saturdays]) → Date\n\nIn the UK and Canada, if a holiday falls on Saturday or Sunday, it\'s observed on the next business day. This function will adjust to the next Monday.\n\nadjust_saturdays kwarg defaults to true.\n\n\n\n\n\n"
},

{
    "location": "#BusinessDays.adjustweekendholidayUS-Tuple{Dates.Date}",
    "page": "Home",
    "title": "BusinessDays.adjustweekendholidayUS",
    "category": "method",
    "text": "adjustweekendholidayUS(dt) → Date\n\nIn the United States, if a holiday falls on Saturday, it\'s observed on the preceding Friday. If it falls on Sunday, it\'s observed on the next Monday.\n\n\n\n\n\n"
},

{
    "location": "#BusinessDays.cleancache-Tuple{HolidayCalendar}",
    "page": "Home",
    "title": "BusinessDays.cleancache",
    "category": "method",
    "text": "cleancache([calendar])\n\nCleans cache for a given instance or list of HolidayCalendar, Symbol or AbstractString.\n\n\n\n\n\n"
},

{
    "location": "#BusinessDays.easter_date-Tuple{Dates.Year}",
    "page": "Home",
    "title": "BusinessDays.easter_date",
    "category": "method",
    "text": "easter_date(y::Dates.Year) → Dates.Date\n\nReturns result of easter_rata as a Dates.Date instance.\n\n\n\n\n\n"
},

{
    "location": "#BusinessDays.easter_rata-Tuple{Dates.Year}",
    "page": "Home",
    "title": "BusinessDays.easter_rata",
    "category": "method",
    "text": "easter_rata(y::Dates.Year) → Int\n\nReturns Easter date as a Rata Die number.\n\nBased on Algo R.\n\n\n\n\n\n"
},

{
    "location": "#BusinessDays.findweekday-Tuple{Integer,Integer,Integer,Integer,Bool}",
    "page": "Home",
    "title": "BusinessDays.findweekday",
    "category": "method",
    "text": "findweekday(weekday_target::Integer, yy::Integer, mm::Integer, occurrence::Integer, ascending::Bool) → Date\n\nGiven a year yy and month mm, finds a date where a choosen weekday occurs.\n\nweekday_target values are declared in module Base.Dates: Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday = 1,2,3,4,5,6,7.\n\nIf ascending is true, searches from the beginning of the month. If false, searches from the end of the month.\n\nIf occurrence is 2 and weekday_target is Monday, searches the 2nd Monday of the given month, and so on.\n\n\n\n\n\n"
},

{
    "location": "#BusinessDays.initcache",
    "page": "Home",
    "title": "BusinessDays.initcache",
    "category": "function",
    "text": "initcache(calendar, [d0], [d1])\n\nCreates cache for a given Holiday Calendar. After calling this function, any call to isbday function, or any function that uses isbday, will be optimized to use this cache.\n\nYou can pass calendar as an instance of HolidayCalendar, Symbol or AbstractString. You can also pass calendar as an AbstractArray of those types.\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [BusinessDays]\nOrder = [:type, :function]"
},

]}
