var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ImageInTerminal-1",
    "page": "Readme",
    "title": "ImageInTerminal",
    "category": "section",
    "text": "(Image: Build Status) (Image: Appveyor) (Image: codecov.io)ImageInTerminal.jl is a drop-in package that once imported changes a how a single Colorant and whole Colorant arrays (i.e. Images) are displayed in the interactive REPL. The displayed images will be downscaled to fit into the size of your active terminal session.To activate this package simply import it into your Julia session. By default this packages uses 256 colors. If your terminal supports 24 bit colors you can make use of them by typing the following:using ImageInTerminal\nImageInTerminal.use_24bit()\n````\n\n### Without this package\njulia julia> using Images, TestImagesjulia> testimage(\"cameraman\") 512×512 Array{Gray{N0f8},2}:  Gray{N0f8}(0.612)  Gray{N0f8}(0.616)  …  Gray{N0f8}(0.596)  Gray{N0f8}(0.612)  Gray{N0f8}(0.616)     Gray{N0f8}(0.596)  Gray{N0f8}(0.62)   Gray{N0f8}(0.616)     Gray{N0f8}(0.596)  Gray{N0f8}(0.612)  Gray{N0f8}(0.616)  …  Gray{N0f8}(0.6)  Gray{N0f8}(0.62)   Gray{N0f8}(0.616)     Gray{N0f8}(0.6)  ⋮                                     ⋱  Gray{N0f8}(0.435)  Gray{N0f8}(0.439)     Gray{N0f8}(0.439)  Gray{N0f8}(0.494)  Gray{N0f8}(0.475)  …  Gray{N0f8}(0.467)  Gray{N0f8}(0.475)  Gray{N0f8}(0.482)     Gray{N0f8}(0.435)  Gray{N0f8}(0.475)  Gray{N0f8}(0.482)  …  Gray{N0f8}(0.435)  Gray{N0f8}(0.475)  Gray{N0f8}(0.482)     Gray{N0f8}(0.435)julia> colorview(RGB, rand(3, 10, 10)) 10×10 Array{RGB{Float64},2}:  RGB{Float64}(0.272693,0.183303,0.0411779)  …  RGB{Float64}(0.743438,0.903394,0.0491672)  RGB{Float64}(0.035006,0.220871,0.377436)      RGB{Float64}(0.341061,0.145152,0.675675)  RGB{Float64}(0.164915,0.275161,0.737311)      RGB{Float64}(0.636575,0.460115,0.255893)  RGB{Float64}(0.656064,0.904043,0.796598)      RGB{Float64}(0.764059,0.573298,0.373081)  RGB{Float64}(0.203784,0.682884,0.61882)       RGB{Float64}(0.544405,0.934227,0.995363)  RGB{Float64}(0.906384,0.820926,0.308954)   …  RGB{Float64}(0.00728851,0.996279,0.620743)  RGB{Float64}(0.574717,0.423059,0.306321)      RGB{Float64}(0.506259,0.138856,0.322121)  RGB{Float64}(0.0372145,0.60332,0.121911)      RGB{Float64}(0.591279,0.74032,0.876621)  RGB{Float64}(0.328746,0.69418,0.397904)       RGB{Float64}(0.90115,0.734102,0.893911)  RGB{Float64}(0.422224,0.914328,0.773111)      RGB{Float64}(0.448258,0.955572,0.0445449)\n### With this package\njulia julia> using Images, TestImages, ImageInTerminaljulia> testimage(\"cameraman\")julia> colorview(RGB, rand(3, 10, 10)) ```(Image: ImageInTerminal)"
},

{
    "location": "#Troubleshooting-1",
    "page": "Readme",
    "title": "Troubleshooting",
    "category": "section",
    "text": "If you see out of place horizontal lines in your Image it means that your font displays the utilized unicode block-characters in an unfortunate way. Try changing font or reducing your terminal\'s line-spacing. If your font is Source Code Pro, update to the latest version."
},

{
    "location": "autodocs/#ImageInTerminal.colorant2ansi-Tuple{Any}",
    "page": "Docstrings",
    "title": "ImageInTerminal.colorant2ansi",
    "category": "method",
    "text": "colorant2ansi(color::Colorant) -> Int\n\nConverts the given colorant into an integer index that corresponds to the closest 256-colors ANSI code.\n\njulia> colorant2ansi(RGB(1., 1., 0.))\n226\n\nThis function also tries to make good use of the additional number of available shades of gray (ANSI codes 232 to 255).\n\njulia> colorant2ansi(RGB(.5, .5, .5))\n244\n\njulia> colorant2ansi(Gray(.5))\n244\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageInTerminal.imshow",
    "page": "Docstrings",
    "title": "ImageInTerminal.imshow",
    "category": "function",
    "text": "imshow([stream], img, [depth::TermColorDepth], [maxsize])\n\nDisplays the given image img using unicode characters and terminal colors (defaults to 256 colors). img has to be an array of Colorant.\n\nIf working in the REPL, the function tries to choose the encoding based on the current display size. The image will also be downsampled to fit into the display (using restrict).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageInTerminal.imshow24bit-Tuple{IO,Any,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "ImageInTerminal.imshow24bit",
    "category": "method",
    "text": "imshow24bit([stream], img, [maxsize])\n\nDisplays the given image img using unicode characters and the 24 terminal colors that some modern terminals support. img has to be an array of Colorant.\n\nIf working in the REPL, the function tries to choose the encoding based on the current display size. The image will also be downsampled to fit into the display (using restrict).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageInTerminal.imshow256-Tuple{IO,Any,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "ImageInTerminal.imshow256",
    "category": "method",
    "text": "imshow256([stream], img, [maxsize])\n\nDisplays the given image img using unicode characters and the widely supported 256 terminal colors. img has to be an array of Colorant.\n\nIf working in the REPL, the function tries to choose the encoding based on the current display size. The image will also be downsampled to fit into the display (using restrict).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageInTerminal.encodeimg",
    "page": "Docstrings",
    "title": "ImageInTerminal.encodeimg",
    "category": "function",
    "text": "encodeimg(enc::ImageEncoder, colordepth::TermColorDepth, img, [maxheight], [maxwidth])\n\nTransforms the pixel of the given image img, which has to be an array of Colorant, into a string of unicode characters using ansi terminal colors.\n\nThe encoder enc specifies which kind of unicode represenation should be used.\nThe colordepth can either be TermColor256() or TermColor24bit() and specifies which terminal color codes should be used.\nmaxheight and maxwidth specify the maximum numbers of string characters that should be used for the resulting image. Larger images are downscaled automatically using restrict.\n\nThe function returns a tuple with three elements:\n\nA vector of strings containing the encoded image. Each element represent one line. The lines do not contain newline characters.\nNumber of lines in the vector.\nNumber of visible characters per line (the remaining are colorcodes).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageInTerminal.use_24bit-Tuple{}",
    "page": "Docstrings",
    "title": "ImageInTerminal.use_24bit",
    "category": "method",
    "text": "use_24bit()\n\nTriggers imshow24bit automatically if an array of colorants is to be displayed in the julia REPL. Call ImageInTerminal.use_256() to restore default behaviour.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageInTerminal.use_256-Tuple{}",
    "page": "Docstrings",
    "title": "ImageInTerminal.use_256",
    "category": "method",
    "text": "use_256()\n\nTriggers imshow256 automatically if an array of colorants is to be displayed in the julia REPL. (This is the default)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [ImageInTerminal]\nOrder = [:type, :function]"
},

]}
