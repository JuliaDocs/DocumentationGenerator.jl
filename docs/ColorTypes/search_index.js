var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ColorTypes-1",
    "page": "Readme",
    "title": "ColorTypes",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov.io)This \"minimalistic\" package serves as the foundation for working with colors in Julia.  It defines basic color types and their constructors, and sets up traits and show methods to make them easier to work with.Of related interest is the Colors.jl package, which provides \"colorimetry\" and conversion functions for working with colors.  You may also be interested in the ColorVectorSpace.jl package, which defines mathematical operations for certain color types.  Both of these packages are based on ColorTypes, which ensures that any color objects will be broadly usable."
},

{
    "location": "#Types-available-in-ColorTypes-1",
    "page": "Readme",
    "title": "Types available in ColorTypes",
    "category": "section",
    "text": ""
},

{
    "location": "#The-type-hierarchy-and-abstract-types-1",
    "page": "Readme",
    "title": "The type hierarchy and abstract types",
    "category": "section",
    "text": "Here is the type hierarchy used in ColorTypes:(Image: Types)Colorant is the general term used for any object exported by this package.  True colors are called Color; TransparentColor indicates an object that also has alpha-channel information.\nColor{T,3} is a 3-component color (like RGB = red, green, blue); Color{T,1} is a 1-component color, i.e., grayscale).\nMost colors have both AlphaColor and ColorAlpha variants; for example, RGB has both ARGB and RGBA.  These indicate different underlying storage in memory: AlphaColor stores the alpha-channel first, then the color, whereas ColorAlpha stores the color first, then the alpha-channel.  Storage order can be particularly important for interfacing with certain external libraries (e.g., OpenGL and Cairo).\nTo support generic programming, TransparentColor constructors always take the alpha channel last, independent of their internal storage order. That is, one usesRGBA(red, green, blue, alpha)\nRGBA(RGB(red, green, blue), alpha)\nARGB(red, green, blue, alpha)       # note alpha is last\nARGB(RGB(red, green, blue), alpha)This way you can write code with a generic C<:Colorant type and   not worry about the proper order for supplying arguments to the   constructor.  See the traits section for some useful   utilities."
},

{
    "location": "#Colors-1",
    "page": "Readme",
    "title": "Colors",
    "category": "section",
    "text": ""
},

{
    "location": "#RGB-plus-BGR,-RGB1,-RGB4,-and-RGB24:-the-AbstractRGB-group-1",
    "page": "Readme",
    "title": "RGB plus BGR, RGB1, RGB4, and RGB24: the AbstractRGB group",
    "category": "section",
    "text": "The sRGB colorspace.struct RGB{T} <: AbstractRGB{T}\n    r::T # Red in [0,1]\n    g::T # Green in [0,1]\n    b::T # Blue in [0,1]\nendRGBs may be defined with two broad number types: FloatingPoint and FixedPoint.  FixedPoint come from the FixedPointNumbers package, and represent fractional numbers internally using integers.  For example, N0f8(1) creates a Normed{UInt8,8} (N0f8 for short) number with value equal to 1.0 but which internally is represented as 0xff.  This strategy ensures that 1 always means \"saturated color\", regardless of how that value is represented. Ordinary integers should not be used, although the convenience constructor RGB(1,0,0) will create a value RGB{N0f8}(1.0, 0.0, 0.0).The analogous BGR type is defined asstruct BGR{T} <: AbstractRGB{T}\n    b::T\n    g::T\n    r::T\nendi.e., identical to RGB except in the opposite storage order.  One crucial point: for all AbstractRGB types, the constructor accepts values in the order (r,g,b) regardless of how they are arranged internally in memory.RGB1 and RGB4 seem exactly like RGB, but internally they insert one extra (\"invisible\") padding element; when the element type is N0f8, these have favorable memory alignment for interfacing with libraries like OpenGL.Finally, one may represent an RGB color as 8-bit values packed into a 32-bit integer:struct RGB24 <: AbstractRGB{N0f8}\n    color::UInt32\nendThe storage order is 0xAARRGGBB, where RR means the red channel, GG means the green, and BB means the blue.  AA is ignored for RGB24; there is also an ARGB32, for which that byte represents alpha. Note that this type can also be constructed as RGB24(0.8,0.5,0.2). However, since this type has no fields named r, g, b, it is better to extract values from AbstractRGB objects using red(c), green(c), blue(c)."
},

{
    "location": "#HSV-1",
    "page": "Readme",
    "title": "HSV",
    "category": "section",
    "text": "Hue-Saturation-Value. A common projection of RGB to cylindrical coordinates.  This is also sometimes called \"HSB\" for Hue-Saturation-Brightness.struct HSV{T} <: Color{T,3}\n    h::T # Hue in [0,360)\n    s::T # Saturation in [0,1]\n    v::T # Value in [0,1]\nendFor HSV (and all remaining color types), T must be of FloatingPoint type, since the values range beyond what can be represented with most FixedPoint types."
},

{
    "location": "#HSL-1",
    "page": "Readme",
    "title": "HSL",
    "category": "section",
    "text": "Hue-Saturation-Lightness. Another common projection of RGB to cylindrical coordinates.struct HSL{T} <: Color{T,3}\n    h::T # Hue in [0,360)\n    s::T # Saturation in [0,1]\n    l::T # Lightness in [0,1]\nend"
},

{
    "location": "#HSI-1",
    "page": "Readme",
    "title": "HSI",
    "category": "section",
    "text": "Hue, saturation, intensity, a variation of HSL and HSV commonly used in computer vision.struct HSI{T} <: Color{T,3}\n    h::T\n    s::T\n    i::T\nend"
},

{
    "location": "#XYZ-1",
    "page": "Readme",
    "title": "XYZ",
    "category": "section",
    "text": "The XYZ colorspace standardized by the CIE in 1931, based on experimental measurements of color perception culminating in the CIE standard observer (see Colors.jl\'s cie_color_match function).struct XYZ{T} <: Color{T,3}\n    x::T\n    y::T\n    z::T\nendThis colorspace is noteworthy because it is linear–-values may be added or scaled as if they form a vector space.  See further discussion in the ColorVectorSpace.jl package."
},

{
    "location": "#xyY-1",
    "page": "Readme",
    "title": "xyY",
    "category": "section",
    "text": "The xyY colorspace is another CIE standardized color space, based directly off of a transformation from XYZ. It was developed specifically because the xy chromaticity space is invariant to the lightness of the patch.struct xyY{T} <: Color{T,3}\n    x::T\n    y::T\n    Y::T\nend"
},

{
    "location": "#Lab-1",
    "page": "Readme",
    "title": "Lab",
    "category": "section",
    "text": "A perceptually uniform colorspace standardized by the CIE in 1976. See also LUV, the associated colorspace standardized the same year.struct Lab{T} <: Color{T,3}\n    l::T # Luminance in approximately [0,100]\n    a::T # Red/Green\n    b::T # Blue/Yellow\nend"
},

{
    "location": "#Luv-1",
    "page": "Readme",
    "title": "Luv",
    "category": "section",
    "text": "A perceptually uniform colorspace standardized by the CIE in 1976. See also LAB, a similar colorspace standardized the same year.struct Luv{T} <: Color{T,3}\n    l::T # Luminance\n    u::T # Red/Green\n    v::T # Blue/Yellow\nend"
},

{
    "location": "#LCHab-1",
    "page": "Readme",
    "title": "LCHab",
    "category": "section",
    "text": "The LAB colorspace reparameterized using cylindrical coordinates.struct LCHab{T} <: Color{T,3}\n    l::T # Luminance in [0,100]\n    c::T # Chroma\n    h::T # Hue in [0,360)\nend"
},

{
    "location": "#LCHuv-1",
    "page": "Readme",
    "title": "LCHuv",
    "category": "section",
    "text": "The LUV colorspace reparameterized using cylindrical coordinates.struct LCHuv{T} <: Color{T,3}\n    l::T # Luminance\n    c::T # Chroma\n    h::T # Hue\nend"
},

{
    "location": "#DIN99-1",
    "page": "Readme",
    "title": "DIN99",
    "category": "section",
    "text": "The DIN99 uniform colorspace as described in the DIN 6176 specification.struct DIN99{T} <: Color{T,3}\n    l::T # L99 (Lightness)\n    a::T # a99 (Red/Green)\n    b::T # b99 (Blue/Yellow)\nend"
},

{
    "location": "#DIN99d-1",
    "page": "Readme",
    "title": "DIN99d",
    "category": "section",
    "text": "The DIN99d uniform colorspace is an improvement on the DIN99 color space that adds a correction to the X tristimulus value in order to emulate the rotation term present in the DeltaE2000 equation.struct DIN99d{T} <: Color{T,3}\n    l::T # L99d (Lightness)\n    a::T # a99d (Reddish/Greenish)\n    b::T # b99d (Bluish/Yellowish)\nend"
},

{
    "location": "#DIN99o-1",
    "page": "Readme",
    "title": "DIN99o",
    "category": "section",
    "text": "Revised version of the DIN99 uniform colorspace with modified coefficients for an improved metric.  Similar to DIN99d X correction and the DeltaE2000 rotation term, DIN99o achieves comparable results by optimized a*/b* rotation and chroma compression terms.struct DIN99o{T} <: Color{T,3}\n    l::T # L99o (Lightness)\n    a::T # a99o (Red/Green)\n    b::T # b99o (Blue/Yellow)\nend"
},

{
    "location": "#LMS-1",
    "page": "Readme",
    "title": "LMS",
    "category": "section",
    "text": "Long-Medium-Short cone response values. Multiple methods of converting to LMS space have been defined. Here the CAT02 chromatic adaptation matrix is used.struct LMS{T} <: Color{T,3}\n    l::T # Long\n    m::T # Medium\n    s::T # Short\nendLike XYZ, LMS is a linear color space."
},

{
    "location": "#YIQ-(NTSC)-1",
    "page": "Readme",
    "title": "YIQ (NTSC)",
    "category": "section",
    "text": "A color-encoding format used by the NTSC broadcast standard.struct YIQ{T} <: Color{T,3}\n    y::T\n    i::T\n    q::T\nend"
},

{
    "location": "#Y\'CbCr-1",
    "page": "Readme",
    "title": "Y\'CbCr",
    "category": "section",
    "text": "A color-encoding format common in video and digital photography.struct YCbCr{T} <: Color{T,3}\n    y::T\n    cb::T\n    cr::T\nend"
},

{
    "location": "#Grayscale-\"colors\"-1",
    "page": "Readme",
    "title": "Grayscale \"colors\"",
    "category": "section",
    "text": ""
},

{
    "location": "#Gray-1",
    "page": "Readme",
    "title": "Gray",
    "category": "section",
    "text": "Gray is a simple wrapper around a number:struct Gray{T} <: AbstractGray{T}\n    val::T\nendIn many situations you don\'t need a Gray wrapper, but there are times when it can be helpful to clarify meaning or assist with dispatching to appropriate methods.  It is also present for consistency with the two corresponding grayscale-plus-transparency types, AGray and GrayA."
},

{
    "location": "#Gray24-and-AGray32-1",
    "page": "Readme",
    "title": "Gray24 and AGray32",
    "category": "section",
    "text": "Gray24 is a grayscale value encoded as a UInt32:struct Gray24 <: AbstractGray{N0f8}\n    color::UInt32\nendThe storage format is 0xAAIIIIII, where each II pair (I=intensity) must be identical.  The AA is ignored, but in the corresponding AGray32 type it encodes alpha."
},

{
    "location": "#a-name\"traits\"/aTraits-(utility-functions-for-instances-and-types)-1",
    "page": "Readme",
    "title": "<a name=\"traits\"></a>Traits (utility functions for instances and types)",
    "category": "section",
    "text": "One of the nicest things about this package is that it provides a rich set of trait-functions for working with color types:eltype(c) extracts the underlying element type, e.g., Float32\nlength(c) extracts the number of components (including alpha, if present)\nalphacolor(c) and coloralpha(c) convert a Color to an object with transparency (either ARGB or RGBA, respectively).\ncolor_type(c) extracts the opaque (color-only) type of the object (e.g., RGB{N0f8} from an object of type ARGB{N0f8}).\nbase_color_type(c) and base_colorant_type(c) extract type information and discard the element type (e.g., base_colorant_type(ARGB{N0f8}) yields ARGB)\nccolor(Cdest, Csrc) helps pick a concrete element type for methods where the output may be left unstated, e.g., convert(RGB, c) rather than convert(RGB{N0f8}, c).All of these methods are individually documented (typically with greater detail); just type ?ccolor at the REPL."
},

{
    "location": "#Getters-1",
    "page": "Readme",
    "title": "Getters",
    "category": "section",
    "text": "red, green, blue extract channels from AbstractRGB types; gray extracts the intensity from a grayscale object\nalpha extracts the alpha channel from any Color object (returning 1 if there is no alpha channel)\ncomp1, comp2, and comp3 extract color components in the order expected by the constructor"
},

{
    "location": "#Functions-1",
    "page": "Readme",
    "title": "Functions",
    "category": "section",
    "text": "mapc(f, c) executes the function f on each color channel of c, returning a new color in the same colorspace.\nreducec(op, v0, c) returns a single number based on a binary operator op across the color channels of c. v0 is the initial value.\nmapreducec(f, op, v0, c) is similar to reducec except it applies f to each color channel before combining values with op."
},

{
    "location": "#Extending-ColorTypes-and-Colors-1",
    "page": "Readme",
    "title": "Extending ColorTypes and Colors",
    "category": "section",
    "text": "In most cases, adding a new color space is quite straightforward:Add your new type to types.jl, following the model of the other color types;\nAdd the type to the list of exports in ColorTypes.jl;\nIn the Colors package, add conversions to and from your new colorspace.In special cases, there may be other considerations:For RGB-related types, 0 means \"black\" and 1 means \"saturated.\" If your type has unusual numeric interpretation, you may need to add a new number type to FixedPointNumbers and set up appropriate eltype_default and eltype_ub traits.\nIf your type has extra fields, check the \"Generated code\" section of types.jl carefully. You may need to define a colorfields function and/or call @make_constructors or @make_alpha manually."
},

{
    "location": "autodocs/#ColorTypes.AGray32",
    "page": "Docstrings",
    "title": "ColorTypes.AGray32",
    "category": "type",
    "text": "AGray32 uses a UInt32 representation of color, 0xAAIIIIII, where I=intensity (grayscale value) and A=alpha. Each II pair is assumed to be the same.  This format is often used by external libraries such as Cairo.\n\nYou can extract the single gray value with gray(c) and the alpha as alpha(c).  You can construct them directly from a UInt32, or as AGray32(i,alpha). Note that i and alpha are interpreted on a scale from 0 (black) to 1 (white).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ColorTypes.ARGB32",
    "page": "Docstrings",
    "title": "ColorTypes.ARGB32",
    "category": "type",
    "text": "ARGB32 uses a UInt32 representation of color, 0xAARRGGBB, where R=red, G=green, B=blue and A is the alpha channel. This format is often used by external libraries such as Cairo.  On a little-endian machine, this type has the exact same storage format as BGRA{N0f8}.\n\nARGB32 colors do not have fields named alpha, r, g, b, but you can still extract the individual components with alpha(c), red(c), green(c), blue(c).  You can construct them directly from a UInt32, or as ARGB32(r, g, b, alpha).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ColorTypes.AbstractRGB",
    "page": "Docstrings",
    "title": "ColorTypes.AbstractRGB",
    "category": "type",
    "text": "AbstractRGB{T} is an abstract supertype for red/green/blue color types that can be constructed as C(r, g, b) and for which the elements can be extracted as red(c), green(c), blue(c). You should not make assumptions about internal storage order, the number of fields, or the representation. One AbstractRGB color-type, RGB24, is not parametric and does not have fields named r, g, b.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ColorTypes.AlphaColor",
    "page": "Docstrings",
    "title": "ColorTypes.AlphaColor",
    "category": "type",
    "text": "AlphaColor is an abstract supertype for types like ARGB, where the alpha channel comes first in the internal storage order. Note that the constructor order is still (color, alpha).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ColorTypes.BGR",
    "page": "Docstrings",
    "title": "ColorTypes.BGR",
    "category": "type",
    "text": "BGR is a variant of RGB with the opposite storage order.  Note that the constructor is still called in the order BGR(r, g, b). This storage order is noteworthy because on little-endian machines, BGRA (with transparency) can be reinterpreted to the UInt32 color format used by libraries such as Cairo and OpenGL.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ColorTypes.Color",
    "page": "Docstrings",
    "title": "ColorTypes.Color",
    "category": "type",
    "text": "Color{T,N} is the abstract supertype for a color (or grayscale) with no transparency.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ColorTypes.ColorAlpha",
    "page": "Docstrings",
    "title": "ColorTypes.ColorAlpha",
    "category": "type",
    "text": "ColorAlpha is an abstract supertype for types like RGBA, where the alpha channel comes last in the internal storage order.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ColorTypes.Colorant",
    "page": "Docstrings",
    "title": "ColorTypes.Colorant",
    "category": "type",
    "text": "Colorant{T,N} is the abstract super-type of all types in ColorTypes, and refers to both (opaque) colors and colors-with-transparency (alpha channel) information.  T is the element type (extractable with eltype) and N is the number of meaningful entries (extractable with length), i.e., the number of arguments you would supply to the constructor.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ColorTypes.DIN99",
    "page": "Docstrings",
    "title": "ColorTypes.DIN99",
    "category": "type",
    "text": "DIN99 is the (L99, a99, b99) adaptation of CIELAB\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ColorTypes.DIN99d",
    "page": "Docstrings",
    "title": "ColorTypes.DIN99d",
    "category": "type",
    "text": "DIN99d is the (L99d, a99d, b99d) improvement on DIN99\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ColorTypes.DIN99o",
    "page": "Docstrings",
    "title": "ColorTypes.DIN99o",
    "category": "type",
    "text": "DIN99o is the (L99o, a99o, b99o) adaptation of CIELAB\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ColorTypes.Gray",
    "page": "Docstrings",
    "title": "ColorTypes.Gray",
    "category": "type",
    "text": "Gray is a grayscale object. You can extract its value with gray(c).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ColorTypes.Gray24",
    "page": "Docstrings",
    "title": "ColorTypes.Gray24",
    "category": "type",
    "text": "Gray24 uses a UInt32 representation of color, 0xAAIIIIII, where I=intensity (grayscale value) and A is irrelevant. Each II pair is assumed to be the same.  This format is often used by external libraries such as Cairo.\n\nYou can extract the single gray value with gray(c).  You can construct them directly from a UInt32, or as Gray24(i). Note that i is interpreted on a scale from 0 (black) to 1 (white).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ColorTypes.HSB",
    "page": "Docstrings",
    "title": "ColorTypes.HSB",
    "category": "type",
    "text": "HSB (Hue-Saturation-Brightness) is an alias for HSV.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ColorTypes.HSI",
    "page": "Docstrings",
    "title": "ColorTypes.HSI",
    "category": "type",
    "text": "HSI is the Hue-Saturation-Intensity colorspace.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ColorTypes.HSL",
    "page": "Docstrings",
    "title": "ColorTypes.HSL",
    "category": "type",
    "text": "HSL is the Hue-Saturation-Lightness colorspace.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ColorTypes.HSV",
    "page": "Docstrings",
    "title": "ColorTypes.HSV",
    "category": "type",
    "text": "HSV is the Hue-Saturation-Value colorspace.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ColorTypes.LCHab",
    "page": "Docstrings",
    "title": "ColorTypes.LCHab",
    "category": "type",
    "text": "LCHab is the Luminance-Chroma-Hue, Polar-Lab colorspace\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ColorTypes.LCHuv",
    "page": "Docstrings",
    "title": "ColorTypes.LCHuv",
    "category": "type",
    "text": "LCHuv is the Luminance-Chroma-Hue, Polar-Luv colorspace\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ColorTypes.LMS",
    "page": "Docstrings",
    "title": "ColorTypes.LMS",
    "category": "type",
    "text": "LMS is the Long-Medium-Short colorspace based on activation of the three cone photoreceptors.  Like XYZ, this is a linear color space.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ColorTypes.Lab",
    "page": "Docstrings",
    "title": "ColorTypes.Lab",
    "category": "type",
    "text": "Lab is the CIELAB colorspace.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ColorTypes.Luv",
    "page": "Docstrings",
    "title": "ColorTypes.Luv",
    "category": "type",
    "text": "Luv is the CIELUV colorspace\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ColorTypes.RGB",
    "page": "Docstrings",
    "title": "ColorTypes.RGB",
    "category": "type",
    "text": "RGB is the standard Red-Green-Blue (sRGB) colorspace.  Values of the individual color channels range from 0 (black) to 1 (saturated). If you want \"Integer\" storage types (e.g., 255 for full color), use N0f8(1) instead (see FixedPointNumbers).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ColorTypes.RGB1",
    "page": "Docstrings",
    "title": "ColorTypes.RGB1",
    "category": "type",
    "text": "RGB1 is a variant of RGB which has a padding element inserted at the beginning. In some applications it may have useful memory-alignment properties.\n\nLike all other AbstractRGB objects, the constructor is still called RGB1(r, g, b).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ColorTypes.RGB24",
    "page": "Docstrings",
    "title": "ColorTypes.RGB24",
    "category": "type",
    "text": "RGB24 uses a UInt32 representation of color, 0xAARRGGBB, where R=red, G=green, B=blue and A is irrelevant. This format is often used by external libraries such as Cairo.\n\nRGB24 colors do not have fields named r, g, b, but you can still extract the individual components with red(c), green(c), blue(c).  You can construct them directly from a UInt32, or as RGB(r, g, b).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ColorTypes.RGB4",
    "page": "Docstrings",
    "title": "ColorTypes.RGB4",
    "category": "type",
    "text": "RGB4 is a variant of RGB which has a padding element inserted at the end. In some applications it may have useful memory-alignment properties.\n\nLike all other AbstractRGB objects, the constructor is still called RGB4(r, g, b).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ColorTypes.TransparentColor",
    "page": "Docstrings",
    "title": "ColorTypes.TransparentColor",
    "category": "type",
    "text": "TransparentColor{C,T,N} is the abstract type for any color-with-transparency.  The C parameter refers to the type of the pure color (without transparency) and can be extracted with color_type. T is the element type of both C and the alpha channel, and N has the same meaning as in Colorant (and is 1 larger than the corresponding color type).\n\nAll transparent types should support two modes of construction:\n\nP(color, alpha)\nP(component1, component2, component3, alpha) (assuming a 3-component color)\n\nFor a Colorant c, the color component can be extracted with color(c), and the alpha channel with alpha(c). Note that types such as ARGB32 do not have a field named alpha.\n\nMost concrete types, like RGB, have both ARGB and RGBA transparent analogs.  These two indicate different internal storage order (see AlphaColor and ColorAlpha, and the alphacolor and coloralpha functions).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ColorTypes.XYZ",
    "page": "Docstrings",
    "title": "ColorTypes.XYZ",
    "category": "type",
    "text": "XYZ is the CIE 1931 XYZ colorspace. It is a linear colorspace, meaning that mathematical operations such as addition, subtraction, and scaling make \"colorimetric sense\" in this colorspace.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ColorTypes.YCbCr",
    "page": "Docstrings",
    "title": "ColorTypes.YCbCr",
    "category": "type",
    "text": "YCbCr is the Y\'CbCr color encoding often used in digital photography or video\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ColorTypes.YIQ",
    "page": "Docstrings",
    "title": "ColorTypes.YIQ",
    "category": "type",
    "text": "YIQ is a color encoding, for example used in NTSC transmission.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ColorTypes.xyY",
    "page": "Docstrings",
    "title": "ColorTypes.xyY",
    "category": "type",
    "text": "xyY is the CIE 1931 xyY (chromaticity + luminance) space\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ColorTypes.alpha-Tuple{TransparentColor}",
    "page": "Docstrings",
    "title": "ColorTypes.alpha",
    "category": "method",
    "text": "alpha(p) extracts the alpha component of a color. For a color without an alpha channel, it will always return 1.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ColorTypes.alphacolor",
    "page": "Docstrings",
    "title": "ColorTypes.alphacolor",
    "category": "function",
    "text": "alphacolor(RGB) returns ARGB, i.e., the corresponding transparent color type with storage order (alpha, color).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ColorTypes.base_color_type-Union{Tuple{Type{C}}, Tuple{C}} where C<:Colorant",
    "page": "Docstrings",
    "title": "ColorTypes.base_color_type",
    "category": "method",
    "text": "base_color_type is similar to color_type, except it \"strips off\" the element type.  For example,\n\ncolor_type(RGB{N0f8})     == RGB{N0f8}\nbase_color_type(RGB{N0f8}) == RGB\n\nThis can be very handy if you want to switch element types. For example:\n\nc64 = base_color_type(c){Float64}(color(c))\n\nconverts c into a Float64 representation (potentially discarding any alpha-channel information).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ColorTypes.base_colorant_type-Tuple{Colorant}",
    "page": "Docstrings",
    "title": "ColorTypes.base_colorant_type",
    "category": "method",
    "text": "base_colorant_type is similar to base_color_type, but it preserves the \"alpha\" portion of the type.\n\nFor example,\n\nbase_color_type(ARGB{N0f8})  == RGB\nbase_colorant_type(ARGB{N0f8})  == ARGB\n\nIf you just want to switch element types, this is the safest default and the easiest to use:\n\nc64 = base_colorant_type(c){Float64}(c)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ColorTypes.blue-Tuple{AbstractRGB}",
    "page": "Docstrings",
    "title": "ColorTypes.blue",
    "category": "method",
    "text": "blue(c) returns the blue component of an AbstractRGB opaque or transparent color.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ColorTypes.ccolor-Union{Tuple{Csrc}, Tuple{Type{Colorant},Type{Csrc}}} where Csrc<:Colorant",
    "page": "Docstrings",
    "title": "ColorTypes.ccolor",
    "category": "method",
    "text": "ccolor (\"concrete color\") helps write flexible methods. The idea is that users may write convert(HSV, c) or even convert(Array{HSV}, A) without specifying the element type explicitly (e.g., convert(Array{HSV{Float32}}, A)). ccolor implements the logic \"choose the user\'s eltype if specified, otherwise retain the eltype of the source object.\" However, when the source object has FixedPoint element type, and the destination only supports AbstractFloat, we choose Float32.\n\nUsage:\n\nccolor(desttype, srctype) -> concrete desttype\n\nExample:\n\nconvert{C<:Colorant}(::Type{C}, p::Colorant) = cnvt(ccolor(C,typeof(p)), p)\n\nwhere cnvt is the function that performs explicit conversion.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ColorTypes.color-Tuple{Color}",
    "page": "Docstrings",
    "title": "ColorTypes.color",
    "category": "method",
    "text": "color(c) extracts the opaque color component from a Colorant (e.g., omits the alpha channel, if present).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ColorTypes.color_type-Tuple{Type{TransparentColor}}",
    "page": "Docstrings",
    "title": "ColorTypes.color_type",
    "category": "method",
    "text": "color_type(c) or color_type(C) (c being a color instance and C being the type) returns the type of the Color object (without alpha channel).  This, and related functions like base_color_type, base_colorant_type, and ccolor are useful for manipulating types for writing generic code.\n\nFor example,\n\ncolor_type(RGB)          == RGB\ncolor_type(RGB{Float32}) == RGB{Float32}\ncolor_type(ARGB{N0f8})     == RGB{N0f8}\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ColorTypes.coloralpha",
    "page": "Docstrings",
    "title": "ColorTypes.coloralpha",
    "category": "function",
    "text": "coloralpha(RGB) returns RGBA, i.e., the corresponding transparent color type with storage order (color, alpha).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ColorTypes.comp1-Tuple{AbstractRGB}",
    "page": "Docstrings",
    "title": "ColorTypes.comp1",
    "category": "method",
    "text": "comp1(c) extracts the first component you\'d pass to the constructor of the corresponding object.  For most color types without an alpha channel, this is just the first field, but for types like BGR that reverse the internal storage order this provides the value that you\'d use to reconstruct the color.\n\nSpecifically, for any Color{T,3},\n\nc == typeof(c)(comp1(c), comp2(c), comp3(c))\n\nreturns true.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ColorTypes.comp2-Tuple{AbstractRGB}",
    "page": "Docstrings",
    "title": "ColorTypes.comp2",
    "category": "method",
    "text": "comp2(c) extracts the second constructor argument (see comp1).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ColorTypes.comp3-Tuple{AbstractRGB}",
    "page": "Docstrings",
    "title": "ColorTypes.comp3",
    "category": "method",
    "text": "comp3(c) extracts the third constructor argument (see comp1).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ColorTypes.gray-Tuple{Gray}",
    "page": "Docstrings",
    "title": "ColorTypes.gray",
    "category": "method",
    "text": "gray(c) returns the gray component of a grayscale opaque or transparent color.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ColorTypes.green-Tuple{AbstractRGB}",
    "page": "Docstrings",
    "title": "ColorTypes.green",
    "category": "method",
    "text": "green(c) returns the green component of an AbstractRGB opaque or transparent color.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ColorTypes.mapc-Union{Tuple{C}, Tuple{Any,C}} where C<:(Color{T,1} where T)",
    "page": "Docstrings",
    "title": "ColorTypes.mapc",
    "category": "method",
    "text": "mapc(f, rgb) -> rgbf\nmapc(f, rgb1, rgb2) -> rgbf\n\nmapc applies the function f to each color channel of the input color(s), returning an output color in the same colorspace.\n\nExamples:\n\njulia> mapc(x->clamp(x,0,1), RGB(-0.2,0.3,1.2))\nRGB{Float64}(0.0,0.3,1.0)\n\njulia> mapc(max, RGB(0.1,0.8,0.3), RGB(0.5,0.5,0.5))\nRGB{Float64}(0.5,0.8,0.5)\n\njulia> mapc(+, RGB(0.1,0.8,0.3), RGB(0.5,0.5,0.5))\nRGB{Float64}(0.6,1.3,0.8)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ColorTypes.mapreducec-Tuple{Any,Any,Any,Color{T,1} where T}",
    "page": "Docstrings",
    "title": "ColorTypes.mapreducec",
    "category": "method",
    "text": "mapreducec(f, op, v0, c)\n\nReduce across color channels of c with the binary operator op, first applying f to each channel. v0 is the neutral element used to initiate the reduction. For grayscale,\n\nmapreducec(f, op, v0, c::Gray) = op(v0, f(comp1(c)))\n\nwhereas for RGB\n\nmapreducec(f, op, v0, c::RGB) = op(f(comp3(c)), op(f(comp2(c)), op(v0, f(comp1(c)))))\n\nIf c has an alpha channel, it is always the last one to be folded into the reduction.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ColorTypes.red-Tuple{AbstractRGB}",
    "page": "Docstrings",
    "title": "ColorTypes.red",
    "category": "method",
    "text": "red(c) returns the red component of an AbstractRGB opaque or transparent color.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ColorTypes.reducec-Tuple{Any,Any,Color{T,1} where T}",
    "page": "Docstrings",
    "title": "ColorTypes.reducec",
    "category": "method",
    "text": "reducec(op, v0, c)\n\nReduce across color channels of c with the binary operator op. v0 is the neutral element used to initiate the reduction. For grayscale,\n\nreducec(op, v0, c::Gray) = op(v0, comp1(c))\n\nwhereas for RGB\n\nreducec(op, v0, c::RGB) = op(comp3(c), op(comp2(c), op(v0, comp1(c))))\n\nIf c has an alpha channel, it is always the last one to be folded into the reduction.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [ColorTypes]\nOrder = [:type, :function]"
},

]}
