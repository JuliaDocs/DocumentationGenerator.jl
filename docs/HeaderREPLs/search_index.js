var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#HeaderREPLs-1",
    "page": "Readme",
    "title": "HeaderREPLs",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: codecov.io)HeaderREPLs.jl is a Julia package that allows you to extend Julia\'s amazing REPL to support \"mini-applications\" that need to communicate more information to the user. They allow you to define a custom \"header\" type that you can use to print extra information above the prompt.To demonstrate, here we build a CountingHeader type and show how the header is printed:mutable struct CountingHeader <: AbstractHeader    # note must be mutable and contain nlines field\n    n::Int            # internal data needed by the header\n    nlines::Int       # the number of lines needed for display---update this in print_header\nend\n\nfunction HeaderREPLs.print_header(io::IO, header::CountingHeader)\n    if header.nlines == 0\n        if header.n > 0\n            printstyled(io, \"Header:\\n\"; color=:light_magenta)\n            for i = 1:header.n\n                printstyled(io, \"  \", i, \'\\n\'; color=:light_blue)\n            end\n        end\n        header.nlines = nlines(header.n)\n    end\n    return nothing\nendIn test/runtests.jl there is a complete example showing how you initialize this mode and specify the user interaction: briefly, a pipe character (\'|\') switches into \"count\" mode, and once in \"count\" mode \'+\' and \'-\' increment and decrement n.Here, let\'s check out the outcome with a series of images.(Image: entry)This is what you see when you first press \'|\'. n starts at 0, and our print_header method above displays nothing in that case.(Image: plusses)This is what you get after pressing \'+\' three times.(Image: minus)Now after pressing \'-\'. Note the line moved up to stay aligned.(Image: enter)Note we can enter Julia commands as usual. In this demo, \"count\" mode is non-sticky, so it reverts back to the julia> prompt.In theory at least, \"count\" mode works as you\'d expect when you traverse the history: when you get to a \"count\" line it shows the (current) header."
},

{
    "location": "#Utilities-1",
    "page": "Readme",
    "title": "Utilities",
    "category": "section",
    "text": "The package exports a few utilities that may make it easier to define custom REPL modes. Aside from key-binding initialization utilities (see the source for details), perhaps the two most useful are find_prompt and count_display_lines. Use ? for more information."
},

{
    "location": "#Notes-1",
    "page": "Readme",
    "title": "Notes",
    "category": "section",
    "text": "Currently this package overwrites a few methods in Julia\'s \"REPL\" standard library. This generates some warnings. Hopefully we can eliminate them in a future version of this package."
},

{
    "location": "autodocs/#HeaderREPLs.append_keymaps!-Tuple{Any,HeaderREPL}",
    "page": "Docstrings",
    "title": "HeaderREPLs.append_keymaps!",
    "category": "method",
    "text": "append_keymaps!(keymaps, repl::HeaderREPL{H})\n\nAppend Dict{Any,Any} key maps to keymaps in order of highest priority first. Some typically useful keymaps (in conventional order of priority):\n\ntrigger_search_keymap\nmode_termination_keymap\ntrigger_prefix_keymap\nREPL.LineEdit.history_keymap\nREPL.LineEdit.default_keymap\nREPL.LineEdit.escape_defaults\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HeaderREPLs.clear_io-Tuple{Any,HeaderREPL}",
    "page": "Docstrings",
    "title": "HeaderREPLs.clear_io",
    "category": "method",
    "text": "clear_io(s, repl)\n\nErases both the input line and the header.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HeaderREPLs.count_display_lines-Tuple{IO,Any}",
    "page": "Docstrings",
    "title": "HeaderREPLs.count_display_lines",
    "category": "method",
    "text": "nlines = count_display_lines(io, ds)\n\nCount the number of lines needed to display the contents of io in a terminal of displaysize ds. This handles \"line wrap\" as well as newlines.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HeaderREPLs.find_prompt-Tuple{REPL.LineEdit.ModalInterface,AbstractString}",
    "page": "Docstrings",
    "title": "HeaderREPLs.find_prompt",
    "category": "method",
    "text": "find_prompt(mi, \"julia\")\nfind_prompt(mi, PrefixHistoryPrompt)\n\nReturn the selected prompt from mi, searching either for the prompt-string of a Prompt or, for other TextInterfaces, searching by type.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HeaderREPLs.mode_termination_keymap-Tuple{HeaderREPL,REPL.LineEdit.Prompt}",
    "page": "Docstrings",
    "title": "HeaderREPLs.mode_termination_keymap",
    "category": "method",
    "text": "keymap_dict = mode_termination_keymap(repl::HeaderREPL, default_prompt::Prompt)\n\nDefault back to default_prompt for \"^C\" and hitting backspace as the first character of the line.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HeaderREPLs.print_header-Tuple{IO,AbstractHeader}",
    "page": "Docstrings",
    "title": "HeaderREPLs.print_header",
    "category": "method",
    "text": "print_header(io::IO, header::CustomHeader)\n\nPrint header to io. header must be a mutable struct containing a field nlines, and before exiting print_header should set this field to the number of lines occupied by the display of your header.\n\nWhile you have to define print_header, generally you should not call it directly. If you need to display the header, call refresh_header.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HeaderREPLs.refresh_header-Tuple{HeaderREPL,REPL.LineEdit.MIState,Any,REPL.Terminals.UnixTerminal}",
    "page": "Docstrings",
    "title": "HeaderREPLs.refresh_header",
    "category": "method",
    "text": "refresh_header(s, repl; clearheader=true)\nrefresh_header(repl, s, termbuf, terminal; clearheader=true)\n\nClear (if clearheader is true) and redraw the header and input line.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HeaderREPLs.trigger_prefix_keymap-Tuple{REPL.LineEdit.PrefixHistoryPrompt}",
    "page": "Docstrings",
    "title": "HeaderREPLs.trigger_prefix_keymap",
    "category": "method",
    "text": "keymap_dict = trigger_prefix_keymap(p::PrefixHistoryPrompt)\nkeymap_dict = trigger_prefix_keymap(repl::HeaderREPL)\n\nSets up the arrow keys and \"^P\" and \"^N\" to trigger reverse and forward prefix-search, respectively.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HeaderREPLs.trigger_search_keymap-Tuple{REPL.LineEdit.HistoryPrompt}",
    "page": "Docstrings",
    "title": "HeaderREPLs.trigger_search_keymap",
    "category": "method",
    "text": "keymap_dict = trigger_search_keymap(p::HistoryPrompt)\nkeymap_dict = trigger_search_keymap(repl::HeaderREPL)\n\nSets up \"^R\" and \"^S\" to trigger reverse and forward search, respectively.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HeaderREPLs.activate_header-NTuple{5,Any}",
    "page": "Docstrings",
    "title": "HeaderREPLs.activate_header",
    "category": "method",
    "text": "activate_header(header, prompt, state, termbuf, term)\n\nCustomize this if actions need to be taken to initialize your header when switching from other prompts to your custom prompt. The default is to do nothing.\n\nSee also deactivate_header.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HeaderREPLs.clear_header_area-Tuple{Any,AbstractHeader}",
    "page": "Docstrings",
    "title": "HeaderREPLs.clear_header_area",
    "category": "method",
    "text": "clear_header_area(terminal, header::AbstractHeader)\n\nMove to the top of the area used for display of header, clearing lines as you go.\n\nIn most cases you can probably rely on the fallback implementation, as long as you update header.nlines appropriately.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HeaderREPLs.deactivate_header-NTuple{5,Any}",
    "page": "Docstrings",
    "title": "HeaderREPLs.deactivate_header",
    "category": "method",
    "text": "deactivate_header(header, prompt, state, termbuf, term)\n\nCustomize this if actions need to be taken to clean up your header when switching from your custom prompt to other prompts. The default is to do nothing.\n\nSee also activate_header.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#HeaderREPLs.setup_prompt-Tuple{HeaderREPL,Bool}",
    "page": "Docstrings",
    "title": "HeaderREPLs.setup_prompt",
    "category": "method",
    "text": "prompt, modesym = setup_prompt(repl::HeaderREPL{H}, hascolor::Bool)\n\nReturn prompt::LineEdit.Prompt and a mode symbol modesym::Symbol that will appear in the julia history file.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [HeaderREPLs]\nOrder = [:type, :function]"
},

]}
