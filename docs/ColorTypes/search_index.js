var documenterSearchIndex = {"docs": [

{
    "location": "#ColorTypes.AGray32",
    "page": "Home",
    "title": "ColorTypes.AGray32",
    "category": "type",
    "text": "AGray32 uses a UInt32 representation of color, 0xAAIIIIII, where I=intensity (grayscale value) and A=alpha. Each II pair is assumed to be the same.  This format is often used by external libraries such as Cairo.\n\nYou can extract the single gray value with gray(c) and the alpha as alpha(c).  You can construct them directly from a UInt32, or as AGray32(i,alpha). Note that i and alpha are interpreted on a scale from 0 (black) to 1 (white).\n\n\n\n\n\n"
},

{
    "location": "#ColorTypes.ARGB32",
    "page": "Home",
    "title": "ColorTypes.ARGB32",
    "category": "type",
    "text": "ARGB32 uses a UInt32 representation of color, 0xAARRGGBB, where R=red, G=green, B=blue and A is the alpha channel. This format is often used by external libraries such as Cairo.  On a little-endian machine, this type has the exact same storage format as BGRA{N0f8}.\n\nARGB32 colors do not have fields named alpha, r, g, b, but you can still extract the individual components with alpha(c), red(c), green(c), blue(c).  You can construct them directly from a UInt32, or as ARGB32(r, g, b, alpha).\n\n\n\n\n\n"
},

{
    "location": "#ColorTypes.AbstractRGB",
    "page": "Home",
    "title": "ColorTypes.AbstractRGB",
    "category": "type",
    "text": "AbstractRGB{T} is an abstract supertype for red/green/blue color types that can be constructed as C(r, g, b) and for which the elements can be extracted as red(c), green(c), blue(c). You should not make assumptions about internal storage order, the number of fields, or the representation. One AbstractRGB color-type, RGB24, is not parametric and does not have fields named r, g, b.\n\n\n\n\n\n"
},

{
    "location": "#ColorTypes.AlphaColor",
    "page": "Home",
    "title": "ColorTypes.AlphaColor",
    "category": "type",
    "text": "AlphaColor is an abstract supertype for types like ARGB, where the alpha channel comes first in the internal storage order. Note that the constructor order is still (color, alpha).\n\n\n\n\n\n"
},

{
    "location": "#ColorTypes.BGR",
    "page": "Home",
    "title": "ColorTypes.BGR",
    "category": "type",
    "text": "BGR is a variant of RGB with the opposite storage order.  Note that the constructor is still called in the order BGR(r, g, b). This storage order is noteworthy because on little-endian machines, BGRA (with transparency) can be reinterpreted to the UInt32 color format used by libraries such as Cairo and OpenGL.\n\n\n\n\n\n"
},

{
    "location": "#ColorTypes.Color",
    "page": "Home",
    "title": "ColorTypes.Color",
    "category": "type",
    "text": "Color{T,N} is the abstract supertype for a color (or grayscale) with no transparency.\n\n\n\n\n\n"
},

{
    "location": "#ColorTypes.ColorAlpha",
    "page": "Home",
    "title": "ColorTypes.ColorAlpha",
    "category": "type",
    "text": "ColorAlpha is an abstract supertype for types like RGBA, where the alpha channel comes last in the internal storage order.\n\n\n\n\n\n"
},

{
    "location": "#ColorTypes.Colorant",
    "page": "Home",
    "title": "ColorTypes.Colorant",
    "category": "type",
    "text": "Colorant{T,N} is the abstract super-type of all types in ColorTypes, and refers to both (opaque) colors and colors-with-transparency (alpha channel) information.  T is the element type (extractable with eltype) and N is the number of meaningful entries (extractable with length), i.e., the number of arguments you would supply to the constructor.\n\n\n\n\n\n"
},

{
    "location": "#ColorTypes.DIN99",
    "page": "Home",
    "title": "ColorTypes.DIN99",
    "category": "type",
    "text": "DIN99 is the (L99, a99, b99) adaptation of CIELAB\n\n\n\n\n\n"
},

{
    "location": "#ColorTypes.DIN99d",
    "page": "Home",
    "title": "ColorTypes.DIN99d",
    "category": "type",
    "text": "DIN99d is the (L99d, a99d, b99d) improvement on DIN99\n\n\n\n\n\n"
},

{
    "location": "#ColorTypes.DIN99o",
    "page": "Home",
    "title": "ColorTypes.DIN99o",
    "category": "type",
    "text": "DIN99o is the (L99o, a99o, b99o) adaptation of CIELAB\n\n\n\n\n\n"
},

{
    "location": "#ColorTypes.Gray",
    "page": "Home",
    "title": "ColorTypes.Gray",
    "category": "type",
    "text": "Gray is a grayscale object. You can extract its value with gray(c).\n\n\n\n\n\n"
},

{
    "location": "#ColorTypes.Gray24",
    "page": "Home",
    "title": "ColorTypes.Gray24",
    "category": "type",
    "text": "Gray24 uses a UInt32 representation of color, 0xAAIIIIII, where I=intensity (grayscale value) and A is irrelevant. Each II pair is assumed to be the same.  This format is often used by external libraries such as Cairo.\n\nYou can extract the single gray value with gray(c).  You can construct them directly from a UInt32, or as Gray24(i). Note that i is interpreted on a scale from 0 (black) to 1 (white).\n\n\n\n\n\n"
},

{
    "location": "#ColorTypes.HSB",
    "page": "Home",
    "title": "ColorTypes.HSB",
    "category": "type",
    "text": "HSB (Hue-Saturation-Brightness) is an alias for HSV.\n\n\n\n\n\n"
},

{
    "location": "#ColorTypes.HSI",
    "page": "Home",
    "title": "ColorTypes.HSI",
    "category": "type",
    "text": "HSI is the Hue-Saturation-Intensity colorspace.\n\n\n\n\n\n"
},

{
    "location": "#ColorTypes.HSL",
    "page": "Home",
    "title": "ColorTypes.HSL",
    "category": "type",
    "text": "HSL is the Hue-Saturation-Lightness colorspace.\n\n\n\n\n\n"
},

{
    "location": "#ColorTypes.HSV",
    "page": "Home",
    "title": "ColorTypes.HSV",
    "category": "type",
    "text": "HSV is the Hue-Saturation-Value colorspace.\n\n\n\n\n\n"
},

{
    "location": "#ColorTypes.LCHab",
    "page": "Home",
    "title": "ColorTypes.LCHab",
    "category": "type",
    "text": "LCHab is the Luminance-Chroma-Hue, Polar-Lab colorspace\n\n\n\n\n\n"
},

{
    "location": "#ColorTypes.LCHuv",
    "page": "Home",
    "title": "ColorTypes.LCHuv",
    "category": "type",
    "text": "LCHuv is the Luminance-Chroma-Hue, Polar-Luv colorspace\n\n\n\n\n\n"
},

{
    "location": "#ColorTypes.LMS",
    "page": "Home",
    "title": "ColorTypes.LMS",
    "category": "type",
    "text": "LMS is the Long-Medium-Short colorspace based on activation of the three cone photoreceptors.  Like XYZ, this is a linear color space.\n\n\n\n\n\n"
},

{
    "location": "#ColorTypes.Lab",
    "page": "Home",
    "title": "ColorTypes.Lab",
    "category": "type",
    "text": "Lab is the CIELAB colorspace.\n\n\n\n\n\n"
},

{
    "location": "#ColorTypes.Luv",
    "page": "Home",
    "title": "ColorTypes.Luv",
    "category": "type",
    "text": "Luv is the CIELUV colorspace\n\n\n\n\n\n"
},

{
    "location": "#ColorTypes.RGB",
    "page": "Home",
    "title": "ColorTypes.RGB",
    "category": "type",
    "text": "RGB is the standard Red-Green-Blue (sRGB) colorspace.  Values of the individual color channels range from 0 (black) to 1 (saturated). If you want \"Integer\" storage types (e.g., 255 for full color), use N0f8(1) instead (see FixedPointNumbers).\n\n\n\n\n\n"
},

{
    "location": "#ColorTypes.RGB1",
    "page": "Home",
    "title": "ColorTypes.RGB1",
    "category": "type",
    "text": "RGB1 is a variant of RGB which has a padding element inserted at the beginning. In some applications it may have useful memory-alignment properties.\n\nLike all other AbstractRGB objects, the constructor is still called RGB1(r, g, b).\n\n\n\n\n\n"
},

{
    "location": "#ColorTypes.RGB24",
    "page": "Home",
    "title": "ColorTypes.RGB24",
    "category": "type",
    "text": "RGB24 uses a UInt32 representation of color, 0xAARRGGBB, where R=red, G=green, B=blue and A is irrelevant. This format is often used by external libraries such as Cairo.\n\nRGB24 colors do not have fields named r, g, b, but you can still extract the individual components with red(c), green(c), blue(c).  You can construct them directly from a UInt32, or as RGB(r, g, b).\n\n\n\n\n\n"
},

{
    "location": "#ColorTypes.RGB4",
    "page": "Home",
    "title": "ColorTypes.RGB4",
    "category": "type",
    "text": "RGB4 is a variant of RGB which has a padding element inserted at the end. In some applications it may have useful memory-alignment properties.\n\nLike all other AbstractRGB objects, the constructor is still called RGB4(r, g, b).\n\n\n\n\n\n"
},

{
    "location": "#ColorTypes.TransparentColor",
    "page": "Home",
    "title": "ColorTypes.TransparentColor",
    "category": "type",
    "text": "TransparentColor{C,T,N} is the abstract type for any color-with-transparency.  The C parameter refers to the type of the pure color (without transparency) and can be extracted with color_type. T is the element type of both C and the alpha channel, and N has the same meaning as in Colorant (and is 1 larger than the corresponding color type).\n\nAll transparent types should support two modes of construction:\n\nP(color, alpha)\nP(component1, component2, component3, alpha) (assuming a 3-component color)\n\nFor a Colorant c, the color component can be extracted with color(c), and the alpha channel with alpha(c). Note that types such as ARGB32 do not have a field named alpha.\n\nMost concrete types, like RGB, have both ARGB and RGBA transparent analogs.  These two indicate different internal storage order (see AlphaColor and ColorAlpha, and the alphacolor and coloralpha functions).\n\n\n\n\n\n"
},

{
    "location": "#ColorTypes.XYZ",
    "page": "Home",
    "title": "ColorTypes.XYZ",
    "category": "type",
    "text": "XYZ is the CIE 1931 XYZ colorspace. It is a linear colorspace, meaning that mathematical operations such as addition, subtraction, and scaling make \"colorimetric sense\" in this colorspace.\n\n\n\n\n\n"
},

{
    "location": "#ColorTypes.YCbCr",
    "page": "Home",
    "title": "ColorTypes.YCbCr",
    "category": "type",
    "text": "YCbCr is the Y\'CbCr color encoding often used in digital photography or video\n\n\n\n\n\n"
},

{
    "location": "#ColorTypes.YIQ",
    "page": "Home",
    "title": "ColorTypes.YIQ",
    "category": "type",
    "text": "YIQ is a color encoding, for example used in NTSC transmission.\n\n\n\n\n\n"
},

{
    "location": "#ColorTypes.xyY",
    "page": "Home",
    "title": "ColorTypes.xyY",
    "category": "type",
    "text": "xyY is the CIE 1931 xyY (chromaticity + luminance) space\n\n\n\n\n\n"
},

{
    "location": "#ColorTypes.alpha-Tuple{TransparentColor}",
    "page": "Home",
    "title": "ColorTypes.alpha",
    "category": "method",
    "text": "alpha(p) extracts the alpha component of a color. For a color without an alpha channel, it will always return 1.\n\n\n\n\n\n"
},

{
    "location": "#ColorTypes.alphacolor",
    "page": "Home",
    "title": "ColorTypes.alphacolor",
    "category": "function",
    "text": "alphacolor(RGB) returns ARGB, i.e., the corresponding transparent color type with storage order (alpha, color).\n\n\n\n\n\n"
},

{
    "location": "#ColorTypes.base_color_type-Union{Tuple{Type{C}}, Tuple{C}} where C<:Colorant",
    "page": "Home",
    "title": "ColorTypes.base_color_type",
    "category": "method",
    "text": "base_color_type is similar to color_type, except it \"strips off\" the element type.  For example,\n\ncolor_type(RGB{N0f8})     == RGB{N0f8}\nbase_color_type(RGB{N0f8}) == RGB\n\nThis can be very handy if you want to switch element types. For example:\n\nc64 = base_color_type(c){Float64}(color(c))\n\nconverts c into a Float64 representation (potentially discarding any alpha-channel information).\n\n\n\n\n\n"
},

{
    "location": "#ColorTypes.base_colorant_type-Tuple{Colorant}",
    "page": "Home",
    "title": "ColorTypes.base_colorant_type",
    "category": "method",
    "text": "base_colorant_type is similar to base_color_type, but it preserves the \"alpha\" portion of the type.\n\nFor example,\n\nbase_color_type(ARGB{N0f8})  == RGB\nbase_colorant_type(ARGB{N0f8})  == ARGB\n\nIf you just want to switch element types, this is the safest default and the easiest to use:\n\nc64 = base_colorant_type(c){Float64}(c)\n\n\n\n\n\n"
},

{
    "location": "#ColorTypes.blue-Tuple{AbstractRGB}",
    "page": "Home",
    "title": "ColorTypes.blue",
    "category": "method",
    "text": "blue(c) returns the blue component of an AbstractRGB opaque or transparent color.\n\n\n\n\n\n"
},

{
    "location": "#ColorTypes.ccolor-Union{Tuple{Csrc}, Tuple{Type{Colorant},Type{Csrc}}} where Csrc<:Colorant",
    "page": "Home",
    "title": "ColorTypes.ccolor",
    "category": "method",
    "text": "ccolor (\"concrete color\") helps write flexible methods. The idea is that users may write convert(HSV, c) or even convert(Array{HSV}, A) without specifying the element type explicitly (e.g., convert(Array{HSV{Float32}}, A)). ccolor implements the logic \"choose the user\'s eltype if specified, otherwise retain the eltype of the source object.\" However, when the source object has FixedPoint element type, and the destination only supports AbstractFloat, we choose Float32.\n\nUsage:\n\nccolor(desttype, srctype) -> concrete desttype\n\nExample:\n\nconvert{C<:Colorant}(::Type{C}, p::Colorant) = cnvt(ccolor(C,typeof(p)), p)\n\nwhere cnvt is the function that performs explicit conversion.\n\n\n\n\n\n"
},

{
    "location": "#ColorTypes.color-Tuple{Color}",
    "page": "Home",
    "title": "ColorTypes.color",
    "category": "method",
    "text": "color(c) extracts the opaque color component from a Colorant (e.g., omits the alpha channel, if present).\n\n\n\n\n\n"
},

{
    "location": "#ColorTypes.color_type-Tuple{Type{TransparentColor}}",
    "page": "Home",
    "title": "ColorTypes.color_type",
    "category": "method",
    "text": "color_type(c) or color_type(C) (c being a color instance and C being the type) returns the type of the Color object (without alpha channel).  This, and related functions like base_color_type, base_colorant_type, and ccolor are useful for manipulating types for writing generic code.\n\nFor example,\n\ncolor_type(RGB)          == RGB\ncolor_type(RGB{Float32}) == RGB{Float32}\ncolor_type(ARGB{N0f8})     == RGB{N0f8}\n\n\n\n\n\n"
},

{
    "location": "#ColorTypes.coloralpha",
    "page": "Home",
    "title": "ColorTypes.coloralpha",
    "category": "function",
    "text": "coloralpha(RGB) returns RGBA, i.e., the corresponding transparent color type with storage order (color, alpha).\n\n\n\n\n\n"
},

{
    "location": "#ColorTypes.comp1-Tuple{AbstractRGB}",
    "page": "Home",
    "title": "ColorTypes.comp1",
    "category": "method",
    "text": "comp1(c) extracts the first component you\'d pass to the constructor of the corresponding object.  For most color types without an alpha channel, this is just the first field, but for types like BGR that reverse the internal storage order this provides the value that you\'d use to reconstruct the color.\n\nSpecifically, for any Color{T,3},\n\nc == typeof(c)(comp1(c), comp2(c), comp3(c))\n\nreturns true.\n\n\n\n\n\n"
},

{
    "location": "#ColorTypes.comp2-Tuple{AbstractRGB}",
    "page": "Home",
    "title": "ColorTypes.comp2",
    "category": "method",
    "text": "comp2(c) extracts the second constructor argument (see comp1).\n\n\n\n\n\n"
},

{
    "location": "#ColorTypes.comp3-Tuple{AbstractRGB}",
    "page": "Home",
    "title": "ColorTypes.comp3",
    "category": "method",
    "text": "comp3(c) extracts the third constructor argument (see comp1).\n\n\n\n\n\n"
},

{
    "location": "#ColorTypes.gray-Tuple{Gray}",
    "page": "Home",
    "title": "ColorTypes.gray",
    "category": "method",
    "text": "gray(c) returns the gray component of a grayscale opaque or transparent color.\n\n\n\n\n\n"
},

{
    "location": "#ColorTypes.green-Tuple{AbstractRGB}",
    "page": "Home",
    "title": "ColorTypes.green",
    "category": "method",
    "text": "green(c) returns the green component of an AbstractRGB opaque or transparent color.\n\n\n\n\n\n"
},

{
    "location": "#ColorTypes.mapc-Union{Tuple{C}, Tuple{Any,C}} where C<:(Color{T,1} where T)",
    "page": "Home",
    "title": "ColorTypes.mapc",
    "category": "method",
    "text": "mapc(f, rgb) -> rgbf\nmapc(f, rgb1, rgb2) -> rgbf\n\nmapc applies the function f to each color channel of the input color(s), returning an output color in the same colorspace.\n\nExamples:\n\njulia> mapc(x->clamp(x,0,1), RGB(-0.2,0.3,1.2))\nRGB{Float64}(0.0,0.3,1.0)\n\njulia> mapc(max, RGB(0.1,0.8,0.3), RGB(0.5,0.5,0.5))\nRGB{Float64}(0.5,0.8,0.5)\n\njulia> mapc(+, RGB(0.1,0.8,0.3), RGB(0.5,0.5,0.5))\nRGB{Float64}(0.6,1.3,0.8)\n\n\n\n\n\n"
},

{
    "location": "#ColorTypes.mapreducec-Tuple{Any,Any,Any,Color{T,1} where T}",
    "page": "Home",
    "title": "ColorTypes.mapreducec",
    "category": "method",
    "text": "mapreducec(f, op, v0, c)\n\nReduce across color channels of c with the binary operator op, first applying f to each channel. v0 is the neutral element used to initiate the reduction. For grayscale,\n\nmapreducec(f, op, v0, c::Gray) = op(v0, f(comp1(c)))\n\nwhereas for RGB\n\nmapreducec(f, op, v0, c::RGB) = op(f(comp3(c)), op(f(comp2(c)), op(v0, f(comp1(c)))))\n\nIf c has an alpha channel, it is always the last one to be folded into the reduction.\n\n\n\n\n\n"
},

{
    "location": "#ColorTypes.red-Tuple{AbstractRGB}",
    "page": "Home",
    "title": "ColorTypes.red",
    "category": "method",
    "text": "red(c) returns the red component of an AbstractRGB opaque or transparent color.\n\n\n\n\n\n"
},

{
    "location": "#ColorTypes.reducec-Tuple{Any,Any,Color{T,1} where T}",
    "page": "Home",
    "title": "ColorTypes.reducec",
    "category": "method",
    "text": "reducec(op, v0, c)\n\nReduce across color channels of c with the binary operator op. v0 is the neutral element used to initiate the reduction. For grayscale,\n\nreducec(op, v0, c::Gray) = op(v0, comp1(c))\n\nwhereas for RGB\n\nreducec(op, v0, c::RGB) = op(comp3(c), op(comp2(c), op(v0, comp1(c))))\n\nIf c has an alpha channel, it is always the last one to be folded into the reduction.\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [ColorTypes]\nOrder = [:type, :function]"
},

]}
