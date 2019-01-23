var documenterSearchIndex = {"docs": [

{
    "location": "#CoordinateTransformations.AffineMap",
    "page": "Home",
    "title": "CoordinateTransformations.AffineMap",
    "category": "type",
    "text": "AffineMap <: AbstractAffineMap\n\nA concrete affine transformation.  To construct the mapping x -> M*x + v, use\n\nAffineMap(M, v)\n\nwhere M is a matrix and v a vector.  An arbitrary Transformation may be converted into an affine approximation by linearizing about a point x using\n\nAffineMap(trans, [x])\n\nFor transformations which are already affine, x may be omitted.\n\n\n\n\n\n"
},

{
    "location": "#CoordinateTransformations.AffineMap-Tuple{Transformation,Any}",
    "page": "Home",
    "title": "CoordinateTransformations.AffineMap",
    "category": "method",
    "text": "AffineMap(trans::Transformation, x0)\n\nCreate an Affine transformation corresponding to the differential transformation of x0 + dx according to trans, i.e. the Affine transformation that is locally most accurate in the vicinity of x0.\n\n\n\n\n\n"
},

{
    "location": "#CoordinateTransformations.CartesianFromCylindrical",
    "page": "Home",
    "title": "CoordinateTransformations.CartesianFromCylindrical",
    "category": "type",
    "text": "CartesianFromCylindrical() - transformation from Cylindrical type to SVector{3} type\n\n\n\n\n\n"
},

{
    "location": "#CoordinateTransformations.CartesianFromPolar",
    "page": "Home",
    "title": "CoordinateTransformations.CartesianFromPolar",
    "category": "type",
    "text": "CartesianFromPolar() - transformation from Polar type to SVector{2} type\n\n\n\n\n\n"
},

{
    "location": "#CoordinateTransformations.CartesianFromSpherical",
    "page": "Home",
    "title": "CoordinateTransformations.CartesianFromSpherical",
    "category": "type",
    "text": "CartesianFromSpherical() - transformation from Spherical type to SVector{3} type\n\n\n\n\n\n"
},

{
    "location": "#CoordinateTransformations.Cylindrical",
    "page": "Home",
    "title": "CoordinateTransformations.Cylindrical",
    "category": "type",
    "text": "Cylindrical(r, θ, z) - 3D cylindrical coordinates\n\n\n\n\n\n"
},

{
    "location": "#CoordinateTransformations.CylindricalFromCartesian",
    "page": "Home",
    "title": "CoordinateTransformations.CylindricalFromCartesian",
    "category": "type",
    "text": "CylindricalFromCartesian() - transformation from 3D point to Cylindrical type\n\n\n\n\n\n"
},

{
    "location": "#CoordinateTransformations.CylindricalFromSpherical",
    "page": "Home",
    "title": "CoordinateTransformations.CylindricalFromSpherical",
    "category": "type",
    "text": "CylindricalFromSpherical() - transformation from Spherical type to Cylindrical type\n\n\n\n\n\n"
},

{
    "location": "#CoordinateTransformations.IdentityTransformation",
    "page": "Home",
    "title": "CoordinateTransformations.IdentityTransformation",
    "category": "type",
    "text": "The IdentityTransformation is a singleton Transformation that returns the input unchanged, similar to identity.\n\n\n\n\n\n"
},

{
    "location": "#CoordinateTransformations.LinearMap",
    "page": "Home",
    "title": "CoordinateTransformations.LinearMap",
    "category": "type",
    "text": "LinearMap <: AbstractAffineMap\nLinearMap(M)\n\nA general linear transformation, constructed using LinearMap(M) for any matrix-like object M.\n\n\n\n\n\n"
},

{
    "location": "#CoordinateTransformations.PerspectiveMap",
    "page": "Home",
    "title": "CoordinateTransformations.PerspectiveMap",
    "category": "type",
    "text": "PerspectiveMap()\n\nConstruct a perspective transformation. The persepective transformation takes, e.g., a point in 3D space and \"projects\" it onto a 2D virtual screen of an ideal pinhole camera (at distance 1 away from the camera). The camera is oriented towards the positive-Z axis (or in general, along the final dimension) and the sign of the x and y components is preserved for objects in front of the camera (objects behind the camera are also projected and therefore inverted - it is up to the user to cull these as necessary).\n\nThis transformation is designed to be used in composition with other coordinate transformations, defining e.g. the position and orientation of the camera. For example:\n\ncam_transform = PerspectiveMap() ∘ inv(AffineMap(cam_rotation, cam_position))\nscreen_points = map(cam_transform, points)\n\n(see also cameramap)\n\n\n\n\n\n"
},

{
    "location": "#CoordinateTransformations.Polar",
    "page": "Home",
    "title": "CoordinateTransformations.Polar",
    "category": "type",
    "text": "Polar{T}(r::T, θ::T) - 2D polar coordinates\n\n\n\n\n\n"
},

{
    "location": "#CoordinateTransformations.PolarFromCartesian",
    "page": "Home",
    "title": "CoordinateTransformations.PolarFromCartesian",
    "category": "type",
    "text": "PolarFromCartesian() - transformation from AbstractVector of length 2 to Polar type\n\n\n\n\n\n"
},

{
    "location": "#CoordinateTransformations.Spherical",
    "page": "Home",
    "title": "CoordinateTransformations.Spherical",
    "category": "type",
    "text": "Spherical(r, θ, ϕ) - 3D spherical coordinates\n\n\n\n\n\n"
},

{
    "location": "#CoordinateTransformations.SphericalFromCartesian",
    "page": "Home",
    "title": "CoordinateTransformations.SphericalFromCartesian",
    "category": "type",
    "text": "SphericalFromCartesian() - transformation from 3D point to Spherical type\n\n\n\n\n\n"
},

{
    "location": "#CoordinateTransformations.SphericalFromCylindrical",
    "page": "Home",
    "title": "CoordinateTransformations.SphericalFromCylindrical",
    "category": "type",
    "text": "SphericalFromCylindrical() - transformation from Cylindrical type to Spherical type\n\n\n\n\n\n"
},

{
    "location": "#CoordinateTransformations.Transformation",
    "page": "Home",
    "title": "CoordinateTransformations.Transformation",
    "category": "type",
    "text": "The Transformation supertype defines a simple interface for performing transformations. Subtypes should be able to apply a coordinate system transformation on the correct data types by overloading the call method, and usually would have the corresponding inverse transformation defined by Base.inv(). Efficient compositions can optionally be defined by compose() (equivalently ∘).\n\n\n\n\n\n"
},

{
    "location": "#CoordinateTransformations.Translation",
    "page": "Home",
    "title": "CoordinateTransformations.Translation",
    "category": "type",
    "text": "Translation(v) <: AbstractAffineMap\nTranslation(dx, dy)       (2D)\nTranslation(dx, dy, dz)   (3D)\n\nConstruct the Translation transformation for translating Cartesian points by an offset v = (dx, dy, ...)\n\n\n\n\n\n"
},

{
    "location": "#CoordinateTransformations.cameramap-Tuple{}",
    "page": "Home",
    "title": "CoordinateTransformations.cameramap",
    "category": "method",
    "text": "cameramap()\ncameramap(scale)\ncameramap(scale, offset)\n\nCreate a transformation that takes points in real space (e.g. 3D) and projects them through a perspective transformation onto the focal plane of an ideal (pinhole) camera with the given properties.\n\nThe scale sets the scale of the screen. For a standard digital camera, this would be scale = focal_length / pixel_size. Non-square pixels are supported by providing a pair of scales in a tuple, scale = (scale_x, scale_y). Positive scales represent a camera looking in the +z axis with a virtual screen in front of the camera (the x,y coordinates are not inverted compared to 3D space). Note that points behind the camera (with negative z component) will be projected (and inverted) onto the image coordinates and it is up to the user to cull such points as necessary.\n\nThe offset = (offset_x, offset_y) is used to define the origin in the imaging plane. For instance, you may wish to have the point (0,0) represent the top-left corner of your imaging sensor. This measurement is in the units after applying scale (e.g. pixels).\n\n(see also PerspectiveMap)\n\n\n\n\n\n"
},

{
    "location": "#CoordinateTransformations.compose-Tuple{Transformation,Transformation}",
    "page": "Home",
    "title": "CoordinateTransformations.compose",
    "category": "method",
    "text": "compose(trans1, trans2)\ntrans1 ∘ trans2\n\nTake two transformations and create a new transformation that is equivalent to successively applying trans2 to the coordinate, and then trans1. By default will create a ComposedTransformation, however this method can be overloaded for efficiency (e.g. two affine transformations naturally compose to a single affine transformation).\n\n\n\n\n\n"
},

{
    "location": "#CoordinateTransformations.recenter-Tuple{Transformation,AbstractArray{T,1} where T}",
    "page": "Home",
    "title": "CoordinateTransformations.recenter",
    "category": "method",
    "text": "recenter(trans::Union{AbstractMatrix,Transformation}, origin::AbstractVector) -> ctrans\n\nReturn a new transformation ctrans such that point origin serves as the origin-of-coordinates for trans. Translation by ±origin occurs both before and after applying trans, so that if trans is linear we have\n\nctrans(origin) == origin\n\nAs a consequence, recenter only makes sense if the output space of trans is isomorphic with the input space.\n\nFor example, if trans is a rotation matrix, then ctrans rotates space around origin.\n\n\n\n\n\n"
},

{
    "location": "#CoordinateTransformations.transform_deriv-Tuple{Transformation,Any}",
    "page": "Home",
    "title": "CoordinateTransformations.transform_deriv",
    "category": "method",
    "text": "transform_deriv(trans::Transformation, x)\n\nA matrix describing how differentials on the parameters of x flow through to the output of transformation trans.\n\n\n\n\n\n"
},

{
    "location": "#CoordinateTransformations.transform_deriv_params-Tuple{Transformation,Any}",
    "page": "Home",
    "title": "CoordinateTransformations.transform_deriv_params",
    "category": "method",
    "text": "transform_deriv_params(trans::AbstractTransformation, x)\n\nA matrix describing how differentials on the parameters of trans flow through to the output of transformation trans given input x.\n\n\n\n\n\n"
},

{
    "location": "#CoordinateTransformations.ComposedTransformation",
    "page": "Home",
    "title": "CoordinateTransformations.ComposedTransformation",
    "category": "type",
    "text": "A ComposedTransformation simply executes two transformations successively, and is the fallback output type of compose().\n\n\n\n\n\n"
},

{
    "location": "#Base.inv-Tuple{Transformation}",
    "page": "Home",
    "title": "Base.inv",
    "category": "method",
    "text": "inv(trans::Transformation)\n\nReturns the inverse (or reverse) of the transformation trans\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [CoordinateTransformations]\nOrder = [:type, :function]"
},

]}
