var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ImageTransformations-1",
    "page": "Readme",
    "title": "ImageTransformations",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: codecov.io)This package provides support for image resizing, image rotation, and other spatial transformations of arrays."
},

{
    "location": "autodocs/#ImageTransformations.InvWarpedView",
    "page": "Docstrings",
    "title": "ImageTransformations.InvWarpedView",
    "category": "type",
    "text": "InvWarpedView(img, tinv, [indices]) -> wv\n\nCreate a view of img that lazily transforms any given index I passed to wv[I] to correspond to img[inv(tinv)(I)]. While technically this approach is known as backward mode warping, note that InvWarpedView is created by supplying the forward transformation\n\nThe conceptual difference to WarpedView is that InvWarpedView is intended to be used when reasoning about the image is more convenient that reasoning about the indices. Furthermore, InvWarpedView allows simple nesting of transformations, in which case the transformations will be composed into a single one.\n\nThe optional parameter indices can be used to specify the domain of the resulting wv. By default the indices are computed in such a way that wv contains all the original pixels in img.\n\nsee invwarpedview for more information.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageTransformations.WarpedView",
    "page": "Docstrings",
    "title": "ImageTransformations.WarpedView",
    "category": "type",
    "text": "WarpedView(img, tform, [indices]) -> wv\n\nCreate a view of img that lazily transforms any given index I passed to wv[I] to correspond to img[tform(I)]. This approach is known as backward mode warping.\n\nThe optional parameter indices can be used to specify the domain of the resulting wv. By default the indices are computed in such a way that wv contains all the original pixels in img. To do this inv(tform) has to be computed. If the given transformation tform does not support inv, then the parameter indices has to be specified manually.\n\nsee warpedview for more information.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageTransformations.imresize-Union{Tuple{T}, Tuple{AbstractArray{T,0},Tuple{}}} where T",
    "page": "Docstrings",
    "title": "ImageTransformations.imresize",
    "category": "method",
    "text": "imresize(img, sz) -> imgr\nimresize(img, inds) -> imgr\nimresize(img; ratio) -> imgr\n\nChange img to be of size sz (or to have indices inds). If ratio is used, then sz = ceil(Int, size(img).*ratio). This interpolates the values at sub-pixel locations. If you are shrinking the image, you risk aliasing unless you low-pass filter img first.\n\nExamples\n\njulia> img = testimage(\"lena_gray_256\") # 256*256\njulia> imresize(img, 128, 128) # 128*128\njulia> imresize(img, 1:128, 1:128) # 128*128\njulia> imresize(img, (128, 128)) # 128*128\njulia> imresize(img, (1:128, 1:128)) # 128*128\njulia> imresize(img, (1:128, )) # 128*256\njulia> imresize(img, 128) # 128*256\njulia> imresize(img, ratio = 0.5) # 128*128\n\nσ = map((o,n)->0.75*o/n, size(img), sz)\nkern = KernelFactors.gaussian(σ)   # from ImageFiltering\nimgr = imresize(imfilter(img, kern, NA()), sz)\n\nSee also restrict.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageTransformations.imrotate-Union{Tuple{T}, Tuple{AbstractArray{T,N} where N,Real,Vararg{Any,N} where N}} where T",
    "page": "Docstrings",
    "title": "ImageTransformations.imrotate",
    "category": "method",
    "text": "imrotate(img, θ, [indices], [degree = Linear()], [fill = NaN]) -> imgr\n\nRotate image img by θ∈[0,2π) in a clockwise direction around its center point. To rotate the image counterclockwise, specify a negative value for angle.\n\nBy default, rotated image imgr will not be cropped. Bilinear interpolation will be used and values outside the image are filled with NaN if possible, otherwise with 0.\n\nExamples\n\njulia> img = testimage(\"cameraman\")\n\n# rotate with bilinear interpolation but without cropping \njulia> imrotate(img, π/4)\n\n# rotate with bilinear interpolation and with cropping\njulia> imrotate(img, π/4, axes(img))\n\n# rotate with nearest interpolation but without cropping\njulia> imrotate(img, π/4, Constant())\n\nSee also warp.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageTransformations.invwarpedview-Tuple{AbstractArray,CoordinateTransformations.Transformation,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "ImageTransformations.invwarpedview",
    "category": "method",
    "text": "invwarpedview(img, tinv, [indices], [degree = Linear()], [fill = NaN]) -> wv\n\nCreate a view of img that lazily transforms any given index I passed to wv[I] to correspond to img[inv(tinv)(I)]. While technically this approach is known as backward mode warping, note that InvWarpedView is created by supplying the forward transformation. The given transformation tinv must accept a SVector as input and support inv(tinv). A useful package to create a wide variety of such transformations is CoordinateTransformations.jl.\n\nWhen invoking wv[I], values for img must be reconstructed at arbitrary locations inv(tinv)(I). InvWarpedView serves as a wrapper around WarpedView which takes care of interpolation and extrapolation. The parameters degree and fill can be used to specify the b-spline degree and the extrapolation scheme respectively.\n\nThe optional parameter indices can be used to specify the domain of the resulting wv. By default the indices are computed in such a way that wv contains all the original pixels in img.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageTransformations.restrict-Tuple{AbstractArray,Tuple{}}",
    "page": "Docstrings",
    "title": "ImageTransformations.restrict",
    "category": "method",
    "text": "restrict(img[, region]) -> imgr\n\nReduce the size of img by two-fold along the dimensions listed in region, or all spatial coordinates if region is not specified.  It anti-aliases the image as it goes, so is better than a naive summation over 2x2 blocks.\n\nSee also imresize.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageTransformations.warp-Union{Tuple{T}, Tuple{AbstractExtrapolation{T,N,ITPT,IT} where IT where ITPT where N,Any}, Tuple{AbstractExtrapolation{T,N,ITPT,IT} where IT where ITPT where N,Any,Tuple}} where T",
    "page": "Docstrings",
    "title": "ImageTransformations.warp",
    "category": "method",
    "text": "warp(img, tform, [indices], [degree = Linear()], [fill = NaN]) -> imgw\n\nTransform the coordinates of img, returning a new imgw satisfying imgw[I] = img[tform(I)]. This approach is known as backward mode warping. The transformation tform must accept a SVector as input. A useful package to create a wide variety of such transformations is CoordinateTransformations.jl.\n\nReconstruction scheme\n\nDuring warping, values for img must be reconstructed at arbitrary locations tform(I) which do not lie on to the lattice of pixels. How this reconstruction is done depends on the type of img and the optional parameter degree.\n\nWhen img is a plain array, then on-grid b-spline interpolation will be used. It is possible to configure what degree of b-spline to use with the parameter degree. For example one can use degree = Linear() for linear interpolation, degree = Constant() for nearest neighbor interpolation, or degree = Quadratic(Flat()) for quadratic interpolation.\n\nIn the case tform(I) maps to indices outside the original img, those locations are set to a value fill (which defaults to NaN if the element type supports it, and 0 otherwise). The parameter fill also accepts extrapolation schemes, such as Flat(), Periodic() or Reflect().\n\nFor more control over the reconstruction scheme –- and how beyond-the-edge points are handled –- pass img as an AbstractInterpolation or AbstractExtrapolation from Interpolations.jl.\n\nThe meaning of the coordinates\n\nThe output array imgw has indices that would result from applying inv(tform) to the indices of img. This can be very handy for keeping track of how pixels in imgw line up with pixels in img.\n\nIf you just want a plain array, you can \"strip\" the custom indices with parent(imgw).\n\nExamples: a 2d rotation (see JuliaImages documentation for pictures)\n\njulia> using Images, CoordinateTransformations, TestImages, OffsetArrays\n\njulia> img = testimage(\"lighthouse\");\n\njulia> axes(img)\n(Base.OneTo(512),Base.OneTo(768))\n\n# Rotate around the center of `img`\njulia> tfm = recenter(RotMatrix(-pi/4), center(img))\nAffineMap([0.707107 0.707107; -0.707107 0.707107], [-196.755,293.99])\n\njulia> imgw = warp(img, tfm);\n\njulia> axes(imgw)\n(-196:709,-68:837)\n\n# Alternatively, specify the origin in the image itself\njulia> img0 = OffsetArray(img, -30:481, -384:383);  # origin near top of image\n\njulia> rot = LinearMap(RotMatrix(-pi/4))\nLinearMap([0.707107 -0.707107; 0.707107 0.707107])\n\njulia> imgw = warp(img0, rot);\n\njulia> axes(imgw)\n(-293:612,-293:611)\n\njulia> imgr = parent(imgw);\n\njulia> axes(imgr)\n(Base.OneTo(906),Base.OneTo(905))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#ImageTransformations.warpedview-Tuple{AbstractArray,CoordinateTransformations.Transformation,Vararg{Any,N} where N}",
    "page": "Docstrings",
    "title": "ImageTransformations.warpedview",
    "category": "method",
    "text": "warpedview(img, tform, [indices], [degree = Linear()], [fill = NaN]) -> wv\n\nCreate a view of img that lazily transforms any given index I passed to wv[I] to correspond to img[tform(I)]. This approach is known as backward mode warping. The given transformation tform must accept a SVector as input. A useful package to create a wide variety of such transformations is CoordinateTransformations.jl.\n\nWhen invoking wv[I], values for img must be reconstructed at arbitrary locations tform(I) which do not lie on to the lattice of pixels. How this reconstruction is done depends on the type of img and the optional parameter degree. When img is a plain array, then on-grid b-spline interpolation will be used, where the pixel of img will serve as the coeficients. It is possible to configure what degree of b-spline to use with the parameter degree. The two possible values are degree = Linear() for linear interpolation, or degree = Constant() for nearest neighbor interpolation.\n\nIn the case tform(I) maps to indices outside the domain of img, those locations are set to a value fill (which defaults to NaN if the element type supports it, and 0 otherwise). Additionally, the parameter fill also accepts extrapolation schemes, such as Flat(), Periodic() or Reflect().\n\nThe optional parameter indices can be used to specify the domain of the resulting WarpedView. By default the indices are computed in such a way that the resulting WarpedView contains all the original pixels in img. To do this inv(tform) has to be computed. If the given transformation tform does not support inv, then the parameter indices has to be specified manually.\n\nwarpedview is essentially a non-coping, lazy version of warp. As such, the two functions share the same interface, with one important difference. warpedview will insist that the resulting WarpedView will be a view of img (i.e. parent(warpedview(img, ...)) === img). Consequently, warpedview restricts the parameter degree to be either Linear() or Constant().\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [ImageTransformations]\nOrder = [:type, :function]"
},

]}
