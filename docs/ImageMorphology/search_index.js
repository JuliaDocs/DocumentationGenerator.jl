var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ImageMorphology-1",
    "page": "Readme",
    "title": "ImageMorphology",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov.io)This package provides morphology-related functionality to the Images.jl project."
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Get the latest stable release with Julia\'s package manager:Pkg.add(\"ImageMorphology\")"
},

{
    "location": "#Exported-functions-1",
    "page": "Readme",
    "title": "Exported functions",
    "category": "section",
    "text": "dilate\nerode\nopening\nclosing\ntophat\nbothat\nmorphogradient\nmorpholaplace\nthinning"
},

{
    "location": "#Documentation-1",
    "page": "Readme",
    "title": "Documentation",
    "category": "section",
    "text": "Please check the top-level documentation at Images.jl."
},

{
    "location": "autodocs/#ImageMorphology.GuoAlgo",
    "page": "Docstrings",
    "title": "ImageMorphology.GuoAlgo",
    "category": "type",
    "text": "struct GuoAlgo <: ThinAlgo end\n\nThe Guo algorithm evaluates three conditions in order to determine which pixels of the image should be removed.\n\nThe three conditions are explained in the page 361 of Guo, Z., & Hall, R. W. (1989). Parallel thinning with two-subiteration algorithms. Communications of the ACM, 32(3), 359-373.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageMorphology.bothat",
    "page": "Docstrings",
    "title": "ImageMorphology.bothat",
    "category": "function",
    "text": "imgbh = bothat(img, [region]) performs bottom hat of an image, which is defined as its morphological closing minus the original image. region allows you to control the dimensions over which this operation is performed.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageMorphology.closing",
    "page": "Docstrings",
    "title": "ImageMorphology.closing",
    "category": "function",
    "text": "imgc = closing(img, [region]) performs the closing morphology operation, equivalent to erode(dilate(img)). region allows you to control the dimensions over which this operation is performed.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageMorphology.dilate",
    "page": "Docstrings",
    "title": "ImageMorphology.dilate",
    "category": "function",
    "text": "imgd = dilate(img, [region])\n\nperform a max-filter over nearest-neighbors. The default is 8-connectivity in 2d, 27-connectivity in 3d, etc. You can specify the list of dimensions that you want to include in the connectivity, e.g., region = [1,2] would exclude the third dimension from filtering.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageMorphology.erode",
    "page": "Docstrings",
    "title": "ImageMorphology.erode",
    "category": "function",
    "text": "imge = erode(img, [region])\n\nperform a min-filter over nearest-neighbors. The default is 8-connectivity in 2d, 27-connectivity in 3d, etc. You can specify the list of dimensions that you want to include in the connectivity, e.g., region = [1,2] would exclude the third dimension from filtering.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageMorphology.morphogradient",
    "page": "Docstrings",
    "title": "ImageMorphology.morphogradient",
    "category": "function",
    "text": "imgmg = morphogradient(img, [region]) returns morphological gradient of the image, which is the difference between the dilation and the erosion of a given image. region allows you to control the dimensions over which this operation is performed.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageMorphology.morpholaplace",
    "page": "Docstrings",
    "title": "ImageMorphology.morpholaplace",
    "category": "function",
    "text": "imgml = morpholaplace(img, [region]) performs Morphological Laplacian of an image, which is defined as the arithmetic difference between the internal and the external gradient. region allows you to control the dimensions over which this operation is performed.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageMorphology.opening",
    "page": "Docstrings",
    "title": "ImageMorphology.opening",
    "category": "function",
    "text": "imgo = opening(img, [region]) performs the opening morphology operation, equivalent to dilate(erode(img)). region allows you to control the dimensions over which this operation is performed.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageMorphology.thinning-Tuple{AbstractArray{Bool,N} where N}",
    "page": "Docstrings",
    "title": "ImageMorphology.thinning",
    "category": "method",
    "text": "thinning(img::AbstractArray{Bool}; algo::ThinAlgo=GuoAlgo())\n\nApplies a binary blob thinning operation to achieve a skeletization of the input image.\n\nSee also: GuoAlgo\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageMorphology.tophat",
    "page": "Docstrings",
    "title": "ImageMorphology.tophat",
    "category": "function",
    "text": "imgth = tophat(img, [region]) performs top hat of an image, which is defined as the image minus its morphological opening. region allows you to control the dimensions over which this operation is performed.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageMorphology.ThinAlgo",
    "page": "Docstrings",
    "title": "ImageMorphology.ThinAlgo",
    "category": "type",
    "text": "ThinAlgo\n\nA thinning algorithm.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [ImageMorphology]\nOrder = [:type, :function]"
},

]}
