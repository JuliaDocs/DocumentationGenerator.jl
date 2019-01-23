var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Introduction",
    "title": "Introduction",
    "category": "page",
    "text": ""
},

{
    "location": "#Introduction-1",
    "page": "Introduction",
    "title": "Introduction",
    "category": "section",
    "text": "While images can often be represented as plain Arrays, sometimes additional information about the \"meaning\" of each axis of the array is needed.  For example, in a 3-dimensional MRI scan, the voxels may not have the same spacing along the z-axis that they do along the x- and y-axes, and this fact should be accounted for during the display and/or analysis of such images.  Likewise, a movie has two spatial axes and one temporal axis; this fact may be relevant for how one performs image processing.This package combines features from AxisArrays and SimpleTraits to provide a convenient representation and programming paradigm for dealing with such images."
},

{
    "location": "#Installation-1",
    "page": "Introduction",
    "title": "Installation",
    "category": "section",
    "text": "Pkg.add(\"ImageAxes\")"
},

{
    "location": "#Usage-1",
    "page": "Introduction",
    "title": "Usage",
    "category": "section",
    "text": ""
},

{
    "location": "#Names-and-locations-1",
    "page": "Introduction",
    "title": "Names and locations",
    "category": "section",
    "text": "The simplest thing you can do is to provide names to your image axes:using ImageAxes\nimg = AxisArray(reshape(1:192, (8,8,3)), :x, :y, :z)As described in more detail in the AxisArrays documentation, you can now take slices like this:sl = img[Axis{:z}(2)]You can also give units to the axes:using ImageAxes, Unitful\nconst mm = u\"mm\"\nimg = AxisArray(reshape(1:192, (8,8,3)),\n                Axis{:x}(1mm:1mm:8mm),\n                Axis{:y}(1mm:1mm:8mm),\n                Axis{:z}(2mm:3mm:8mm))which specifies that x and y have spacing of 1mm and z has a spacing of 3mm, as well as the location of the center of each voxel."
},

{
    "location": "#Temporal-axes-1",
    "page": "Introduction",
    "title": "Temporal axes",
    "category": "section",
    "text": "Any array possessing an axis Axis{:time} will be recognized as having a temporal dimension.  Given an array A,using ImageAxes, Unitful\nconst s = u\"s\"\nimg = AxisArray(reshape(1:9*300, (3,3,300)),\n                Axis{:x}(1:3),\n                Axis{:y}(1:3),\n                Axis{:time}(1s/30:1s/30:10s))you can retrieve its temporal axis withax = timeaxis(img)and index it likeimg[ax(4)]  # returns the 4th \"timeslice\"You can also specialize methods like this:using ImageAxes, SimpleTraits\n@traitfn nimages{AA<:AxisArray;  HasTimeAxis{AA}}(img::AA) = length(timeaxis(img))\n@traitfn nimages{AA<:AxisArray; !HasTimeAxis{AA}}(img::AA) = 1where the pre-defined HasTimeAxis trait will restrict that method to arrays that have a timeaxis. A more complex example isusing ImageAxes, SimpleTraits\n@traitfn meanintensity(img::AA) where {AA<:AxisArray; !HasTimeAxis{AA}} = mean(img)\n@traitfn function meanintensity(img::AA) where {AA<:AxisArray; HasTimeAxis{AA}}\n    ax = timeaxis(img)\n    n = length(x)\n    intensity = zeros(eltype(img), n)\n    for ti = 1:n\n        sl = img[ax[ti]]  # the image slice at time ax[ti]\n        intensity[ti] = mean(sl)\n    end\n    intensity\nendand, when appropriate, it will return the mean intensity at each timeslice."
},

{
    "location": "#Custom-temporal-axes-1",
    "page": "Introduction",
    "title": "Custom temporal axes",
    "category": "section",
    "text": "Using SimpleTraits\'s @traitimpl, you can add Axis{:t} or Axis{:scantime} or any other name to the list of axes that have a temporal dimension:using ImageAxes, SimpleTraits\n@traitimpl TimeAxis{Axis{:t}}Note this declaration affects all arrays throughout your entire session.  Moreover, it should be made before calling any functions on array-types that possess such axes; a convenient place to do this is right after you say using ImageAxes in your top-level script."
},

]}
