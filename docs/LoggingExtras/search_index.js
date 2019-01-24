var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#LoggingExtras-1",
    "page": "Readme",
    "title": "LoggingExtras",
    "category": "section",
    "text": "(Image: Build Status)(Image: codecov.io)(Image: Diagram showing how loggers connect)"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "Load the package with using LoggingExtras. You likely also want to load the Logging standard lib. Loggers can be constructed and used like normal."
},

{
    "location": "#Basics-of-working-with-loggers-1",
    "page": "Readme",
    "title": "Basics of working with loggers",
    "category": "section",
    "text": "For full details, see the Julia documentation on LoggingTo use a logger in a given scope dowith_logger(logger) do\n	#things\nendTo make a logger the global logger, useglobal_logger(logger)to get the current global logger, uselogger = global_logger()"
},

{
    "location": "#Loggers-introduced-by-this-package:-1",
    "page": "Readme",
    "title": "Loggers introduced by this package:",
    "category": "section",
    "text": "This package introduces 3 new loggers. The DemuxLogger, the FilteredLogger and the FileLogger. All of them just wrap existing loggers. The DemuxLogger sends the logs to multiple different loggers. The FilteredLogger lets you add rules to cause a logger to ignore some inputs.By combining DemuxLogger with FilteredLoggers you can arbitrarily route log messages, wherever you want.The FileLogger is just a convience wrapper around the base julia SimpleLogger, to make it easier to pass in a filename, rather than a stream."
},

{
    "location": "#DemuxLogger-and-FileLogger-1",
    "page": "Readme",
    "title": "DemuxLogger and FileLogger",
    "category": "section",
    "text": "The DemuxLogger sends the log messages to multiple places. It takes a list of loggers. It also has the keyword argument include_current_global, to determine if you also want to log to the global logger.It is up to those loggers to determine if they will accept it.\nWhich they do using their methods for shouldlog and min_enabled_level. Or you can do, by wrapping them in a FilteredLogger as discussed below.The FileLogger does logging to file. It is really simple. It takes a filename; and the minimum level it should log."
},

{
    "location": "#Demo-1",
    "page": "Readme",
    "title": "Demo",
    "category": "section",
    "text": "We are going to log info and above to one file, and warnings and above to another.julia> using Logging; using LoggingExtras;\n\njulia> demux_logger = DemuxLogger(\n		FileLogger(\"info.log\", min_level=Logging.Info),\n		FileLogger(\"warn.log\", min_level=Logging.Warn),\n		include_current_global=false\n		);\n\n\njulia> with_logger(demux_logger) do\n		@warn(\"It is bad\")\n		@info(\"normal stuff\")\n		@error(\"THE WORSE THING\")\n		@debug(\"it is chill\")\n	end\n\nshell>  cat warn.log\n┌ Warning: It is bad\n└ @ Main REPL[34]:2\n┌ Error: THE WORSE THING\n└ @ Main REPL[34]:4\n\nshell>  cat info.log\n┌ Warning: It is bad\n└ @ Main REPL[34]:2\n┌ Info: normal stuff\n└ @ Main REPL[34]:3\n┌ Error: THE WORSE THING\n└ @ Main REPL[34]:4"
},

{
    "location": "#FilteredLogger-1",
    "page": "Readme",
    "title": "FilteredLogger",
    "category": "section",
    "text": "The FilteredLogger exists to give more control over which messages should be logged. It warps any logger, and before sending messages to the logger to log, checks them against a filter function. The filter function takes the full set of parameters of the message. (See it\'s docstring with ?FilteredLogger for more details.)"
},

{
    "location": "#Demo-2",
    "page": "Readme",
    "title": "Demo",
    "category": "section",
    "text": "We want to filter to only log strings staring with \"Yo Dawg!\".julia> function yodawg_filter(level, message, _module, group, id, file, line; kwargs...)\n		startswith(msg, \"Yo Dawg!\")\nend\n yodawg_filter (generic function with 1 method)                                                                                     \n\njulia> filtered_logger = FilteredLogger(yodawg_filter, global_logger());\n\njulia> with_logger(filtered_logger) do\n		@info \"Boring message\"\n		@warn \"Yo Dawg! it is bad\"\n		@info \"Another boring message\"\n		@info \"Yo Dawg! it is all good\"\n	end\n┌ Warning: Yo Dawg! it is bad\n└ @ Main REPL[28]:3\n[ Info: Yo Dawg! it is all good"
},

{
    "location": "autodocs/#LoggingExtras.DemuxLogger-Tuple{Vararg{Base.CoreLogging.AbstractLogger,N} where N}",
    "page": "Docstrings",
    "title": "LoggingExtras.DemuxLogger",
    "category": "method",
    "text": "DemuxLogger(loggers...; include_current=true)\n\nSets the globallogger to demux, so that messages are sent to all the loggers. If `includecurrent_global` is true, then messages are also sent to the global logger (or rather to what was the global logger when this was constructed). Normally this would be the ConsoleLogger in the REPL etc.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LoggingExtras.FilteredLogger",
    "page": "Docstrings",
    "title": "LoggingExtras.FilteredLogger",
    "category": "type",
    "text": "FilteredLogger(filter, logger)\n\nWraps logger in a filter. While loggers intrinsictally have in built filtering mechanisms. Wrapping it in a FilterLogger allows for extract control, at the cost of a bit of overhead.\n\nThe filter should be a function that returns a boolean. true if the message should be logged and false if not. It should take as inputs: (level, message, _module, group, id, file, line; kwargs...)\n\nThese argument come from the logging macro (@info,@warn` etc).\n\nlevel::LogLevel Warn, Info, etc,\nmessage::String the message to be logged\n_module::Module can be used to specify a different originating module from the source location of the message.\ngroup::Symbol can be used to override the message group (this is normally derived from the base name of the source file).\nid::Symbol can be used to override the automatically generated unique message identifier.  This is useful if you need to very closely associate messages generated on different source lines.\nfile::String and line::Int can be used to override the apparent source location of a log message.\nkwargs... any keyword or positional arguments to the logging macro.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [LoggingExtras]\nOrder = [:type, :function]"
},

]}
