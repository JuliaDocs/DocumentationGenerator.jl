var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": "<h1 align=\"center\">     <img width=\"400\" src=\"logo.png\" alt=\"crayons\">     <br> </h1>Colored and styled strings for terminals.(Image: Build Status) (Image: codecov)Crayons is a package that makes it simple to write strings in different colors and styles to terminals. It supports the 16 system colors, both the 256 color and 24 bit true color extensions, and the different text styles available to terminals. The package is designed to perform well, have no dependencies (except Compat) and load fast (about 10 ms load time after precompilation)."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Pkg.add(\"Crayons\")"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": ""
},

{
    "location": "#Creating-Crayons-1",
    "page": "Readme",
    "title": "Creating Crayons",
    "category": "section",
    "text": "A Crayon is created with the keyword only constructor:Crayon(foreground,\n       background,\n       reset,\n       bold,\n       faint,\n       italics,\n       underline,\n       blink,\n       negative,\n       conceal,\n       strikethrough)The foreground and background argument can be of three types:A Symbol representing a color. The available colors are black, red, green, yellow, blue, magenta, cyan, light_gray, default, dark_gray, light_red, light_green, light_yellow, light_blue, light_magenta, light_cyan and white. To see the colors in action, try Crayons.test_system_colors(). These colors are supported by almost all terminals.\nAn Integer between 0 and 255. This will use the 256 color ANSI escape codes. To see what number corresponds to what color and if your terminal supports 256 colors, use Crayons.test_256_colors(shownumbers::Bool=true).\nA Tuple of three Integers, all between 0 and 255. This will be interpreted as a (r, g, b) 24 bit color. To test your terminals support for 24 bit colors, use Crayons.test_24bit_colors(shownumbers::Bool=false). The support for this is currently quite limited but is being improved in terminals continuously, see here.\nA UInt32 representing a color given in hexadecimal format. Will be converted to the corresponding RGB format.The other keyword arguments are all of Bool type and determine whether the corresponding style should be explicitly enabled or disabled:reset — reset all styles and colors to default\nbold — bold text, also brighten the colors on some terminals\nfaint — faint text, not widely supported\nitalics — italic text, not widely supported\nunderline — underlined text\nblink — blinking text\nnegative — swap the foreground and background\nconceal— hides the text, not widely supported\nstrikethrough — horizontal line through the middle of the text, not widely supported.To see text with the different styles active, use Crayons.test_styles()By using the symbol :nothing for any of the keyword arguments, that color or style is inactive and is thus neither actively enable or disabled.For convenience, Crayons for the foreground / background version of the 16 system colors as well as the different styles are pre-made and can be found in the Crayons.Box module. They have the name <COLOR_NAME>_<BG/FG> for the foreground/background colors and <STYLE> for the different styles (note the uppercase). Calling using on the Crayons.Box module will bring all these into global scope."
},

{
    "location": "#String-macros-1",
    "page": "Readme",
    "title": "String macros",
    "category": "section",
    "text": "Crayons can also be created in a terser way using the string macro crayon. These are written using crayon\"[[fg:]<col>] [bg:<col>] ([[!]<style>] ...\") where:text inside a square bracket is optional\n<col> is a color given as a hexadecimal number, (r,g,b) tuple (no spaces), a number 0-255, or one of the 16 named colors.\n<style> is one of the styles.\n! means that the style is explicitly disabled.\n(<style> ...) means a repeated number of styles, spearated by spaces.A few examples of using the string macros and the equivalent constructor is shown belowcrayon\"red\" # Crayon(foreground = :red)\ncrayon\"bg:(255,0,255)\" # Crayon(background = (255, 0, 255))\ncrayon\"!bold underline 0xff00ff\" # Crayon(bold = false, underline = true, foreground = 0xff00ff)\ncrayon\"#0000ff\" # Crayon(foreground = 0x0000ff)"
},

{
    "location": "#Using-the-Crayons-1",
    "page": "Readme",
    "title": "Using the Crayons",
    "category": "section",
    "text": "The process of printing colored and styled text using Crayons is simple. By printing a Crayon to the terminal, the correct code sequences are sent to the terminal such that subsequent printed text takes on the color and style of the printed Crayon. For example, try running the code below in the REPL:print(Crayon(foreground = :red), \"In red. \", Crayon(bold = true), \"Red and bold\")\nprint(Crayon(foreground = 208, background = :red, bold = true), \"Orange bold on red\")\nprint(Crayon(negative = true, underline = true, bold = true), \"Underlined inverse bold\")\nprint(Crayon(foreground = (100, 100, 255), background = (255, 255, 0)), \"Bluish on yellow\")\n\nusing Crayons.Box\nprint(GREEN_FG, \"This is in green\")\nprint(BOLD, GREEN_FG, BLUE_BG, \"Bold green on blue\")It is also possible to use call overloading on created Crayons. The Crayon can be called with strings and other Crayons and the colors and styles will correctly nest. Correct end sequences will als be printed so the colors and styles are disabled outside the call scope. This functionality is perhaps more clearly shown with some examples:using Crayons.Box\nprint(UNDERLINE(\"This is underlined.\"), \" But this is not\")\nprint(RED_FG(\"Hello \", BLUE_BG(\"world\"), \"!!!\"), \"!!!\")\nprint(GREEN_BG(\"We \",\n          UNDERLINE(\"are \",\n              MAGENTA_FG(\"nesting \"),\n          \"some \"),\n      \"colors\")\n     )Note: In order for the color sequences to be printed, the Julia REPL needs to have colors activated, either by Julia automatically detecting terminal support or by starting Julia with the --color=yes argument. Alternatively, if the ENV variable FORCE_COLOR exist, or Crayons.force_color(::Bool) has been enabled, color sequences are printed no matter what. Also, since relatively few terminals support full 24-bit colors, it is possible to activate 256 color mode which converts the 24-bit crayon to a 256 color crayon when printed. This is done by either defining the variable FORCE_256_COLORS or by calling Crayons.force_256_colors(::Bool)."
},

{
    "location": "#Merging-Crayons-1",
    "page": "Readme",
    "title": "Merging Crayons",
    "category": "section",
    "text": "Two or more Crayons can be merged resulting in a new Crayon with all the properties of the merged ones. This is done with the function merge(crayons::Crayon...) or by multiplying Crayons using *. If two Crayons specify the same property then the property of the last Crayon in the argument list is used:using Crayons.Box\nr_fg = Crayon(foreground = :red)\ng_bg = Crayon(background = :green)\nmerged = merge(r_fg, g_bg)\nprint(merged, \"Red foreground on green background!\")\nprint(r_fg * g_bg * Crayons.Box.BOLD, \"Bold Red foreground on green background!\")\n# Also with call overloading and nesting\nprint(GREEN_FG(\n          \"I am a green line \",\n          BOLD * BLUE_FG * UNDERLINE(\n              \"with a bold underlined blue substring\"\n          ),\n          \" that becomes green again!\"\n     ))"
},

{
    "location": "#Misc-1",
    "page": "Readme",
    "title": "Misc",
    "category": "section",
    "text": "The function inv on a Crayon returns a Crayon that undos what the Crayon in the argument to inv does. As an example, inv(Crayon(bold = true)) returns a Crayon that disables bold."
},

{
    "location": "#Advanced-nesting-of-colors-and-styles-1",
    "page": "Readme",
    "title": "Advanced nesting of colors and styles",
    "category": "section",
    "text": "If you want to nest colors and styles through function calls there is the ColorStack type. Simply push! Crayons onto the stack, print text to the stack, and then pop! the Crayons off. The stack will keep track of what Crayon is currently active. It is used just like a Crayon:stack = CrayonStack()\nprint(stack, \"normal text\")\nprint(push!(stack, Crayon(foreground = :red)), \"in red\")\nprint(push!(stack, Crayon(foreground = :blue)), \"in blue\")\nprint(pop!(stack), \"in red again\")\nprint(pop!(stack), \"normal text\")A CrayonStack can also be created in incremental mode by calling CrayonStack(incremental = true). In that case, the CrayonStack will only print the changes that are needed to go from the previous text state to the new state, which results in less color codes being printed. However, note that this means that the CrayonStack need to be printed to the output buffer for all changes that are made to it (i.e. both when push! and pop! are used). The example below shows a working example where all the changes to the stack are printed and another example, which gives wrong result, since one change is not printed. Both the examples below work correctly if incremental = false.# Does work\nio = IOBuffer()\nstack = CrayonStack(incremental = true)\nprint(io, push!(stack, Crayon(foreground = :red)))\nprint(io, push!(stack, Crayon(foreground = :red)))\nprint(io, stack, \"This will be red\")\nprint(takebuf_string(io))\n\n# Does not work\nio = IOBuffer()\nstack = CrayonStack(incremental = true)\npush!(stack, Crayon(foreground = :red)) # <- not printing the stack even though we modify it!\nprint(io, push!(stack, Crayon(foreground = :red)))\nprint(io, stack, \"This will not be red\")\nprint(takebuf_string(io))The reason why the last example did not work is because the stack notices that there is no change of text state on the second call to push!, since the foreground was just kept red. Failing to print the stack after the first push! meant that the terminal state and the stack state got out of sync."
},

{
    "location": "#Related-packages:-1",
    "page": "Readme",
    "title": "Related packages:",
    "category": "section",
    "text": "https://github.com/Aerlinger/AnsiColor.jl"
},

{
    "location": "#Author-1",
    "page": "Readme",
    "title": "Author",
    "category": "section",
    "text": "Kristoffer Carlsson — @KristofferC"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Crayons]\nOrder = [:type, :function]"
},

]}
