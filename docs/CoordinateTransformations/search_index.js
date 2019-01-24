var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#CoordinateTransformations-1",
    "page": "Readme",
    "title": "CoordinateTransformations",
    "category": "section",
    "text": "(Image: Build Status)CoordinateTransformations is a Julia package to manage simple or complex networks of coordinate system transformations. Transformations can be easily applied, inverted, composed, and differentiated (both with respect to the input coordinates and with respect to transformation parameters such as rotation angle). Transformations are designed to be light-weight and efficient enough for, e.g., real-time graphical applications, while support for both explicit and automatic differentiation makes it easy to perform optimization and therefore ideal for computer vision applications such as SLAM (simultaneous localization and mapping).The package provide two main pieces of functionalityPrimarily, an interface for defining Transformations and applying (by calling), inverting (inv()), composing (∘ or compose()) and differentiating (transform_deriv() and transform_deriv_params()) them.\nA small set of built-in, composable, primitive transformations for transforming 2D and 3D points (optionally leveraging the StaticArrays and Rotations packages)."
},

{
    "location": "#Quick-start-1",
    "page": "Readme",
    "title": "Quick start",
    "category": "section",
    "text": "Let\'s translate a 3D point:using CoordinateTransformations, Rotations, StaticArrays\n\nx = SVector(1.0, 2.0, 3.0)  # SVector is provided by StaticArrays.jl\ntrans = Translation(3.5, 1.5, 0.0)\n\ny = trans(x)We can either apply different transformations in turn,rot = LinearMap(RotX(0.3))  # Rotate 0.3 radians about X-axis, from Rotations.jl\n\nz = trans(rot(x))or build a composed transformation using the ∘ operator (accessible at the REPL by typing \\circ then tab):composed = trans ∘ rot  # alternatively, use compose(trans, rot)\n\ncomposed(x) == zA composition of a Translation and a LinearMap results in an AffineMap.We can invert the transformation:composed_inv = inv(composed)\n\ncomposed_inv(z) == xFor any transformation, we can shift the origin to a new point using recenter:rot_around_x = recenter(rot, x)Now rot_around_x is a rotation around the point x = SVector(1.0, 2.0, 3.0).Finally, we can construct a matrix describing how the components of z differentiates with respect to components of x:∂z_∂x = transform_deriv(composed, x) # In general, the transform may be non-linear, and thus we require the value of x to compute the derivativeOr perhaps we want to know how y will change with respect to changes of to the translation parameters:∂y_∂θ = transform_deriv_params(trans, x)"
},

{
    "location": "#The-interface-1",
    "page": "Readme",
    "title": "The interface",
    "category": "section",
    "text": "Transformations are derived from Transformation. As an example, we have Translation{T} <: Transformation. A Translation will accept and translate points in a variety of formats, such as Vector or SVector, but in general your custom-defined Transformations could transform any Julia object.Transformations can be reversed using inv(trans). They can be chained together using the ∘ operator (trans1 ∘ trans2) or compose function (compose(trans1, trans2)). In this case, trans2 is applied first to the data, before trans1. Composition may be intelligent, for instance by precomputing a new Translation by summing the elements of two existing Translations, and yet other transformations may compose to the IdentityTransformation. But by default, composition will result in a ComposedTransformation object which simply dispatches to apply the transformations in the correct order.Finally, the matrix describing how differentials propagate through a transform can be calculated with the transform_deriv(trans, x) method. The derivatives of how the output depends on the transformation parameters is accessed via transform_deriv_params(trans, x). Users currently have to overload these methods, as no fall-back automatic differentiation is currently included. Alternatively, all the built-in types and transformations are compatible with automatic differentiation techniques, and can be parameterized by DualNumbers\' DualNumber or ForwardDiff\'s Dual."
},

{
    "location": "#Built-in-transformations-1",
    "page": "Readme",
    "title": "Built-in transformations",
    "category": "section",
    "text": "A small number of 2D and 3D coordinate systems and transformations are included. We also have IdentityTransform and ComposedTransformation, which allows us to nest together arbitrary transformations to create a complex yet efficient transformation chain."
},

{
    "location": "#Coordinate-types-1",
    "page": "Readme",
    "title": "Coordinate types",
    "category": "section",
    "text": "The package accepts any AbstractVector type for Cartesian coordinates (as well as FixedSizeArrays types in Julia v0.4 only). For speed, we recommend using a statically-sized container such as SVector{N} from StaticArrays.We do provide a few specialist coordinate types. The Polar(r, θ) type is a 2D polar representation of a point, and similarly in 3D we have defined Spherical(r, θ, ϕ) and Cylindrical(r, θ, z)."
},

{
    "location": "#Coordinate-system-transformations-1",
    "page": "Readme",
    "title": "Coordinate system transformations",
    "category": "section",
    "text": "Two-dimensional coordinates may be converted using these parameterless (singleton) transformations:PolarFromCartesian()\nCartesianFromPolar()Three-dimensional coordinates may be converted using these parameterless transformations:SphericalFromCartesian()\nCartesianFromSpherical()\nSphericalFromCylindrical()\nCylindricalFromSpherical()\nCartesianFromCylindrical()\nCylindricalFromCartesian()However, you may find it simpler to use the convenience constructors like Polar(SVector(1.0, 2.0))."
},

{
    "location": "#Translations-1",
    "page": "Readme",
    "title": "Translations",
    "category": "section",
    "text": "Translations can be be applied to Cartesian coordinates in arbitrary dimensions, by e.g. Translation(Δx, Δy) or Translation(Δx, Δy, Δz) in 2D/3D, or by Translation(Δv) in general (with Δv an AbstractVector). Compositions of two Translations will intelligently create a new Translation by adding the translation vectors."
},

{
    "location": "#Linear-transformations-1",
    "page": "Readme",
    "title": "Linear transformations",
    "category": "section",
    "text": "Linear transformations (a.k.a. linear maps), including rotations, can be encapsulated in the LinearMap type, which is a simple wrapper of an AbstractMatrix.You are able to provide any matrix of your choosing, but your choice of type will have a large effect on speed. For instance, if you know the dimensionality of your points (e.g. 2D or 3D) you might consider a statically sized matrix like SMatrix from StaticArrays.jl. We recommend performing 3D rotations using those from Rotations.jl for their speed and flexibility. Scaling will be efficient with Julia\'s built-in UniformScaling. Also note that compositions of two LinearMaps will intelligently create a new LinearMap by multiplying the transformation matrices."
},

{
    "location": "#Affine-maps-1",
    "page": "Readme",
    "title": "Affine maps",
    "category": "section",
    "text": "An Affine map encapsulates a more general set of transformation which are defined by a composition of a translation and a linear transformation. An AffineMap is constructed from an AbstractVector translation v and an AbstractMatrix linear transformation M. It will perform the mapping x -> M*x + v, but the order of addition and multiplication will be more obvious (and controllable) if you construct it from a composition of a linear map and a translation, e.g. Translation(v) ∘ LinearMap(v) (or any combination of LinearMap, Translation and AffineMap)."
},

{
    "location": "#Perspective-transformations-1",
    "page": "Readme",
    "title": "Perspective transformations",
    "category": "section",
    "text": "The perspective transformation maps real-space coordinates to those on a virtual \"screen\" of one lesser dimension. For instance, this process is used to render 3D scenes to 2D images in computer generated graphics and games. It is an ideal model of how a pinhole camera operates and is a good approximation of the modern photography process.The PerspectiveMap() command creates a Transformation to perform the projective mapping. It can be applied individually, but is particularly powerful when composed with an AffineMap containing the position and orientation of the camera in your scene. For example, to transfer points in 3D space to 2D screen_points giving their projected locations on a virtual camera image, you might use the following code:cam_transform = PerspectiveMap() ∘ inv(AffineMap(cam_rotation, cam_position))\nscreen_points = map(cam_transform, points)There is also a cameramap() convenience function that can create a composed transformation that includes the intrinsic scaling (e.g. focal length and pixel size) and offset (defining which pixel is labeled (0,0)) of an imaging system."
},

{
    "location": "autodocs/#CoordinateTransformations.AffineMap",
    "page": "Docstrings",
    "title": "CoordinateTransformations.AffineMap",
    "category": "type",
    "text": "AffineMap <: AbstractAffineMap\n\nA concrete affine transformation.  To construct the mapping x -> M*x + v, use\n\nAffineMap(M, v)\n\nwhere M is a matrix and v a vector.  An arbitrary Transformation may be converted into an affine approximation by linearizing about a point x using\n\nAffineMap(trans, [x])\n\nFor transformations which are already affine, x may be omitted.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CoordinateTransformations.AffineMap-Tuple{Transformation,Any}",
    "page": "Docstrings",
    "title": "CoordinateTransformations.AffineMap",
    "category": "method",
    "text": "AffineMap(trans::Transformation, x0)\n\nCreate an Affine transformation corresponding to the differential transformation of x0 + dx according to trans, i.e. the Affine transformation that is locally most accurate in the vicinity of x0.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CoordinateTransformations.CartesianFromCylindrical",
    "page": "Docstrings",
    "title": "CoordinateTransformations.CartesianFromCylindrical",
    "category": "type",
    "text": "CartesianFromCylindrical() - transformation from Cylindrical type to SVector{3} type\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CoordinateTransformations.CartesianFromPolar",
    "page": "Docstrings",
    "title": "CoordinateTransformations.CartesianFromPolar",
    "category": "type",
    "text": "CartesianFromPolar() - transformation from Polar type to SVector{2} type\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CoordinateTransformations.CartesianFromSpherical",
    "page": "Docstrings",
    "title": "CoordinateTransformations.CartesianFromSpherical",
    "category": "type",
    "text": "CartesianFromSpherical() - transformation from Spherical type to SVector{3} type\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CoordinateTransformations.Cylindrical",
    "page": "Docstrings",
    "title": "CoordinateTransformations.Cylindrical",
    "category": "type",
    "text": "Cylindrical(r, θ, z) - 3D cylindrical coordinates\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CoordinateTransformations.CylindricalFromCartesian",
    "page": "Docstrings",
    "title": "CoordinateTransformations.CylindricalFromCartesian",
    "category": "type",
    "text": "CylindricalFromCartesian() - transformation from 3D point to Cylindrical type\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CoordinateTransformations.CylindricalFromSpherical",
    "page": "Docstrings",
    "title": "CoordinateTransformations.CylindricalFromSpherical",
    "category": "type",
    "text": "CylindricalFromSpherical() - transformation from Spherical type to Cylindrical type\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CoordinateTransformations.IdentityTransformation",
    "page": "Docstrings",
    "title": "CoordinateTransformations.IdentityTransformation",
    "category": "type",
    "text": "The IdentityTransformation is a singleton Transformation that returns the input unchanged, similar to identity.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CoordinateTransformations.LinearMap",
    "page": "Docstrings",
    "title": "CoordinateTransformations.LinearMap",
    "category": "type",
    "text": "LinearMap <: AbstractAffineMap\nLinearMap(M)\n\nA general linear transformation, constructed using LinearMap(M) for any matrix-like object M.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CoordinateTransformations.PerspectiveMap",
    "page": "Docstrings",
    "title": "CoordinateTransformations.PerspectiveMap",
    "category": "type",
    "text": "PerspectiveMap()\n\nConstruct a perspective transformation. The persepective transformation takes, e.g., a point in 3D space and \"projects\" it onto a 2D virtual screen of an ideal pinhole camera (at distance 1 away from the camera). The camera is oriented towards the positive-Z axis (or in general, along the final dimension) and the sign of the x and y components is preserved for objects in front of the camera (objects behind the camera are also projected and therefore inverted - it is up to the user to cull these as necessary).\n\nThis transformation is designed to be used in composition with other coordinate transformations, defining e.g. the position and orientation of the camera. For example:\n\ncam_transform = PerspectiveMap() ∘ inv(AffineMap(cam_rotation, cam_position))\nscreen_points = map(cam_transform, points)\n\n(see also cameramap)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CoordinateTransformations.Polar",
    "page": "Docstrings",
    "title": "CoordinateTransformations.Polar",
    "category": "type",
    "text": "Polar{T}(r::T, θ::T) - 2D polar coordinates\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CoordinateTransformations.PolarFromCartesian",
    "page": "Docstrings",
    "title": "CoordinateTransformations.PolarFromCartesian",
    "category": "type",
    "text": "PolarFromCartesian() - transformation from AbstractVector of length 2 to Polar type\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CoordinateTransformations.Spherical",
    "page": "Docstrings",
    "title": "CoordinateTransformations.Spherical",
    "category": "type",
    "text": "Spherical(r, θ, ϕ) - 3D spherical coordinates\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CoordinateTransformations.SphericalFromCartesian",
    "page": "Docstrings",
    "title": "CoordinateTransformations.SphericalFromCartesian",
    "category": "type",
    "text": "SphericalFromCartesian() - transformation from 3D point to Spherical type\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CoordinateTransformations.SphericalFromCylindrical",
    "page": "Docstrings",
    "title": "CoordinateTransformations.SphericalFromCylindrical",
    "category": "type",
    "text": "SphericalFromCylindrical() - transformation from Cylindrical type to Spherical type\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CoordinateTransformations.Transformation",
    "page": "Docstrings",
    "title": "CoordinateTransformations.Transformation",
    "category": "type",
    "text": "The Transformation supertype defines a simple interface for performing transformations. Subtypes should be able to apply a coordinate system transformation on the correct data types by overloading the call method, and usually would have the corresponding inverse transformation defined by Base.inv(). Efficient compositions can optionally be defined by compose() (equivalently ∘).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CoordinateTransformations.Translation",
    "page": "Docstrings",
    "title": "CoordinateTransformations.Translation",
    "category": "type",
    "text": "Translation(v) <: AbstractAffineMap\nTranslation(dx, dy)       (2D)\nTranslation(dx, dy, dz)   (3D)\n\nConstruct the Translation transformation for translating Cartesian points by an offset v = (dx, dy, ...)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CoordinateTransformations.cameramap-Tuple{}",
    "page": "Docstrings",
    "title": "CoordinateTransformations.cameramap",
    "category": "method",
    "text": "cameramap()\ncameramap(scale)\ncameramap(scale, offset)\n\nCreate a transformation that takes points in real space (e.g. 3D) and projects them through a perspective transformation onto the focal plane of an ideal (pinhole) camera with the given properties.\n\nThe scale sets the scale of the screen. For a standard digital camera, this would be scale = focal_length / pixel_size. Non-square pixels are supported by providing a pair of scales in a tuple, scale = (scale_x, scale_y). Positive scales represent a camera looking in the +z axis with a virtual screen in front of the camera (the x,y coordinates are not inverted compared to 3D space). Note that points behind the camera (with negative z component) will be projected (and inverted) onto the image coordinates and it is up to the user to cull such points as necessary.\n\nThe offset = (offset_x, offset_y) is used to define the origin in the imaging plane. For instance, you may wish to have the point (0,0) represent the top-left corner of your imaging sensor. This measurement is in the units after applying scale (e.g. pixels).\n\n(see also PerspectiveMap)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CoordinateTransformations.compose-Tuple{Transformation,Transformation}",
    "page": "Docstrings",
    "title": "CoordinateTransformations.compose",
    "category": "method",
    "text": "compose(trans1, trans2)\ntrans1 ∘ trans2\n\nTake two transformations and create a new transformation that is equivalent to successively applying trans2 to the coordinate, and then trans1. By default will create a ComposedTransformation, however this method can be overloaded for efficiency (e.g. two affine transformations naturally compose to a single affine transformation).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CoordinateTransformations.recenter-Tuple{Transformation,AbstractArray{T,1} where T}",
    "page": "Docstrings",
    "title": "CoordinateTransformations.recenter",
    "category": "method",
    "text": "recenter(trans::Union{AbstractMatrix,Transformation}, origin::AbstractVector) -> ctrans\n\nReturn a new transformation ctrans such that point origin serves as the origin-of-coordinates for trans. Translation by ±origin occurs both before and after applying trans, so that if trans is linear we have\n\nctrans(origin) == origin\n\nAs a consequence, recenter only makes sense if the output space of trans is isomorphic with the input space.\n\nFor example, if trans is a rotation matrix, then ctrans rotates space around origin.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CoordinateTransformations.transform_deriv-Tuple{Transformation,Any}",
    "page": "Docstrings",
    "title": "CoordinateTransformations.transform_deriv",
    "category": "method",
    "text": "transform_deriv(trans::Transformation, x)\n\nA matrix describing how differentials on the parameters of x flow through to the output of transformation trans.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CoordinateTransformations.transform_deriv_params-Tuple{Transformation,Any}",
    "page": "Docstrings",
    "title": "CoordinateTransformations.transform_deriv_params",
    "category": "method",
    "text": "transform_deriv_params(trans::AbstractTransformation, x)\n\nA matrix describing how differentials on the parameters of trans flow through to the output of transformation trans given input x.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CoordinateTransformations.ComposedTransformation",
    "page": "Docstrings",
    "title": "CoordinateTransformations.ComposedTransformation",
    "category": "type",
    "text": "A ComposedTransformation simply executes two transformations successively, and is the fallback output type of compose().\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.inv-Tuple{Transformation}",
    "page": "Docstrings",
    "title": "Base.inv",
    "category": "method",
    "text": "inv(trans::Transformation)\n\nReturns the inverse (or reverse) of the transformation trans\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [CoordinateTransformations]\nOrder = [:type, :function]"
},

]}
