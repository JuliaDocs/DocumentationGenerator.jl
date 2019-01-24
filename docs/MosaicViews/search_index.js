var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#MosaicViews-1",
    "page": "Readme",
    "title": "MosaicViews",
    "category": "section",
    "text": "(Image: Build Status) (Image: codecov.io)MosaicViews.jl provides an array decorator type, MosaicView, that creates a matrix-shaped \"view\" of any three or four dimensional array A. The resulting MosaicView will display the data in A such that it emulates using vcat for all elements in the third dimension of A, and hcat for all elements in the fourth dimension of A. This behaviour can be further fine tuned by using the lower-case convenience function mosaicview.In some use cases (especially in machine learning) it is not uncommon to store multiple equally-sized 2D images in a single higher dimensional array. Let us look at such an example using the first few training images from the MNIST database of handwritten digits. We can access the dataset with the help of the package MLDatasets.jl.julia> using MosaicViews, Images, MLDatasets\n\njulia> A = MNIST.convert2image(MNIST.traintensor(1:9))\n28×28×9 Array{Gray{Float64},3}:\n[...]\n\njulia> mosaicview(A, .5, nrow=2, npad=1, rowmajor=true)\n57×144 MosaicViews.MosaicView{Gray{Float64},4,...}:\n[...](Image: mosaicview)"
},

{
    "location": "#The-MosaicView-Type-1",
    "page": "Readme",
    "title": "The MosaicView Type",
    "category": "section",
    "text": "Another way to think about this is that MosaicView creates a mosaic of all the individual matrices enumerated in the third (and optionally fourth) dimension of the given 3D or 4D array A. This can be especially useful for creating a single composite image from a set of equally sized images.Note that the constructor doesn\'t accept other parameters than the array A itself. Consequently the layout of the mosaic is encoded in the third (and optionally fourth) dimension. Creating a MosaicView this way is type stable, non-copying, and should in general give a decent performance when accessed with getindex.Let us look at a couple examples to see the type in action. If size(A) is (2,3,4), then the resulting MosaicView will have the size (2*4,3) which is (8,3).julia> A = [k for i in 1:2, j in 1:3, k in 1:4]\n2×3×4 Array{Int64,3}:\n[:, :, 1] =\n 1  1  1\n 1  1  1\n\n[:, :, 2] =\n 2  2  2\n 2  2  2\n\n[:, :, 3] =\n 3  3  3\n 3  3  3\n\n[:, :, 4] =\n 4  4  4\n 4  4  4\n\njulia> MosaicView(A)\n8×3 MosaicViews.MosaicView{Int64,3,Array{Int64,3}}:\n 1  1  1\n 1  1  1\n 2  2  2\n 2  2  2\n 3  3  3\n 3  3  3\n 4  4  4\n 4  4  4Alternatively, A is also allowed to have four dimensions. More concretely, if size(A) is (2,3,4,5), then the resulting size will be (2*4,3*5) which is (8,15). For the sake of brevity here is a slightly smaller example:julia> A = [(k+1)*l-1 for i in 1:2, j in 1:3, k in 1:2, l in 1:2]\n2×3×2×2 Array{Int64,4}:\n[:, :, 1, 1] =\n 1  1  1\n 1  1  1\n\n[:, :, 2, 1] =\n 2  2  2\n 2  2  2\n\n[:, :, 1, 2] =\n 3  3  3\n 3  3  3\n\n[:, :, 2, 2] =\n 5  5  5\n 5  5  5\n\njulia> MosaicView(A)\n4×6 MosaicViews.MosaicView{Int64,4,Array{Int64,4}}:\n 1  1  1  3  3  3\n 1  1  1  3  3  3\n 2  2  2  5  5  5\n 2  2  2  5  5  5"
},

{
    "location": "#Advanced-Usage-1",
    "page": "Readme",
    "title": "Advanced Usage",
    "category": "section",
    "text": "If performance is important it is recommended to use MosaicView directly. That said, one of the main motivations behind creating this type in the first place is for visualization purposes. To that end this package also exports a more flexible convenience function mosaicview.In contrast to using the constructor of MosaicView directly, the function mosaicview also allows for a couple of convenience keywords.The optional positional parameter fill defines the value that that should be used for empty space. This can be padding caused by npad, or empty mosaic tiles in case the number of matrix slices in A is smaller than nrow*ncol.\nThe parameter npad defines the empty padding space between adjacent mosaic tiles. This can be especially useful if the individual tiles (i.e. matrix slices in A) are images that should be visually separated by some grid lines.\nThe parameters nrow and ncol can be used to choose the number of rows and/or columns the mosaic should be arranged in. Note that it suffices to specify one of the two parameters, as the other one can be inferred accordingly. The default in case none of the two are specified is nrow = size(A,3).\nIf rowmajor is set to true, then the slices will be arranged left-to-right-top-to-bottom, instead of top-to-bottom-left-to-right (default).julia> A = [k for i in 1:2, j in 1:3, k in 1:5]\n2×3×5 Array{Int64,3}:\n[:, :, 1] =\n 1  1  1\n 1  1  1\n\n[:, :, 2] =\n 2  2  2\n 2  2  2\n\n[:, :, 3] =\n 3  3  3\n 3  3  3\n\n[:, :, 4] =\n 4  4  4\n 4  4  4\n\n[:, :, 5] =\n 5  5  5\n 5  5  5\n\njulia> mosaicview(A, ncol=2)\n6×6 MosaicViews.MosaicView{Int64,4,...}:\n 1  1  1  4  4  4\n 1  1  1  4  4  4\n 2  2  2  5  5  5\n 2  2  2  5  5  5\n 3  3  3  0  0  0\n 3  3  3  0  0  0\n\njulia> mosaicview(A, nrow=2)\n4×9 MosaicViews.MosaicView{Int64,4,...}:\n 1  1  1  3  3  3  5  5  5\n 1  1  1  3  3  3  5  5  5\n 2  2  2  4  4  4  0  0  0\n 2  2  2  4  4  4  0  0  0\n\njulia> mosaicview(A, nrow=2, rowmajor=true)\n4×9 MosaicViews.MosaicView{Int64,4,...}:\n 1  1  1  2  2  2  3  3  3\n 1  1  1  2  2  2  3  3  3\n 4  4  4  5  5  5  0  0  0\n 4  4  4  5  5  5  0  0  0\n\njulia> mosaicview(A, nrow=2, npad=1, rowmajor=true)\n5×11 MosaicViews.MosaicView{Int64,4,...}:\n 1  1  1  0  2  2  2  0  3  3  3\n 1  1  1  0  2  2  2  0  3  3  3\n 0  0  0  0  0  0  0  0  0  0  0\n 4  4  4  0  5  5  5  0  0  0  0\n 4  4  4  0  5  5  5  0  0  0  0\n\njulia> mosaicview(A, -1, nrow=2, npad=1, rowmajor=true)\n5×11 MosaicViews.MosaicView{Int64,4,...}:\n  1   1   1  -1   2   2   2  -1   3   3   3\n  1   1   1  -1   2   2   2  -1   3   3   3\n -1  -1  -1  -1  -1  -1  -1  -1  -1  -1  -1\n  4   4   4  -1   5   5   5  -1  -1  -1  -1\n  4   4   4  -1   5   5   5  -1  -1  -1  -1"
},

{
    "location": "autodocs/#MosaicViews.MosaicView",
    "page": "Docstrings",
    "title": "MosaicViews.MosaicView",
    "category": "type",
    "text": "MosaicView(A::AbstractArray)\n\nCreate a two dimensional \"view\" of the three or four dimensional array A. The resulting MosaicView will display the data in A such that it emulates using vcat for all elements in the third dimension of A, and hcat for all elements in the fourth dimension of A.\n\nFor example, if size(A) is (2,3,4), then the resulting MosaicView will have the size (2*4,3) which is (8,3). Alternatively, if size(A) is (2,3,4,5), then the resulting size will be (2*4,3*5) which is (8,15).\n\nAnother way to think about this is that MosaicView creates a mosaic of all the individual matrices enumerated in the third (and optionally fourth) dimension of the given 3D or 4D array A. This can be especially useful for creating a single composite image from a set of equally sized images.\n\njulia> using MosaicViews\n\njulia> A = [(k+1)*l-1 for i in 1:2, j in 1:3, k in 1:2, l in 1:2]\n2×3×2×2 Array{Int64,4}:\n[:, :, 1, 1] =\n 1  1  1\n 1  1  1\n\n[:, :, 2, 1] =\n 2  2  2\n 2  2  2\n\n[:, :, 1, 2] =\n 3  3  3\n 3  3  3\n\n[:, :, 2, 2] =\n 5  5  5\n 5  5  5\n\njulia> MosaicView(A)\n4×6 MosaicViews.MosaicView{Int64,4,Array{Int64,4}}:\n 1  1  1  3  3  3\n 1  1  1  3  3  3\n 2  2  2  5  5  5\n 2  2  2  5  5  5\n\n\n\n\n\n"
},

{
    "location": "autodocs/#MosaicViews.mosaicview-Union{Tuple{AbstractArray{T,3}}, Tuple{T}, Tuple{AbstractArray{T,3},Any}} where T",
    "page": "Docstrings",
    "title": "MosaicViews.mosaicview",
    "category": "method",
    "text": "mosaicview(A::AbstractArray, [fill]; [npad=0], [nrow], [ncol], [rowmajor=false]) -> MosaicView\n\nCreate a two dimensional \"view\" of the higher dimensional array A. The resulting MosaicView will display all the matrix slices of the first two dimensions of A arranged as a single large mosaic (in the form of a matrix).\n\nIn contrast to using the constructor of MosaicView directly, the function mosaicview also allows for a couple of convenience keywords. Note that as a consequence the function is not type stable and should only be used if performance is not a priority. A typical use case would be to create an image mosaic from a set of equally sized input images.\n\nThe optional positional parameter fill defines the value that that should be used for empty space. This can be padding caused by npad, or empty mosaic tiles in case the number of matrix slices in A is smaller than nrow*ncol.\nThe parameter npad defines the empty padding space between adjacent mosaic tiles. This can be especially useful if the individual tiles (i.e. matrix slices in A) are images that should be visually separated by some grid lines.\nThe parameters nrow and ncol can be used to choose the number of rows and/or columns the mosaic should be arranged in. Note that it suffices to specify one of the two parameters, as the other one can be inferred accordingly. The default in case none of the two are specified is nrow = size(A,3).\nIf rowmajor is set to true, then the slices will be arranged left-to-right-top-to-bottom, instead of top-to-bottom-left-to-right (default).\n\nExamples\n\njulia> using MosaicViews\n\njulia> A = [k for i in 1:2, j in 1:3, k in 1:5]\n2×3×5 Array{Int64,3}:\n[:, :, 1] =\n 1  1  1\n 1  1  1\n\n[:, :, 2] =\n 2  2  2\n 2  2  2\n\n[:, :, 3] =\n 3  3  3\n 3  3  3\n\n[:, :, 4] =\n 4  4  4\n 4  4  4\n\n[:, :, 5] =\n 5  5  5\n 5  5  5\n\njulia> mosaicview(A, ncol=2)\n6×6 MosaicViews.MosaicView{Int64,4,...}:\n 1  1  1  4  4  4\n 1  1  1  4  4  4\n 2  2  2  5  5  5\n 2  2  2  5  5  5\n 3  3  3  0  0  0\n 3  3  3  0  0  0\n\njulia> mosaicview(A, nrow=2)\n4×9 MosaicViews.MosaicView{Int64,4,...}:\n 1  1  1  3  3  3  5  5  5\n 1  1  1  3  3  3  5  5  5\n 2  2  2  4  4  4  0  0  0\n 2  2  2  4  4  4  0  0  0\n\njulia> mosaicview(A, nrow=2, rowmajor=true)\n4×9 MosaicViews.MosaicView{Int64,4,...}:\n 1  1  1  2  2  2  3  3  3\n 1  1  1  2  2  2  3  3  3\n 4  4  4  5  5  5  0  0  0\n 4  4  4  5  5  5  0  0  0\n\njulia> mosaicview(A, nrow=2, npad=1, rowmajor=true)\n5×11 MosaicViews.MosaicView{Int64,4,...}:\n 1  1  1  0  2  2  2  0  3  3  3\n 1  1  1  0  2  2  2  0  3  3  3\n 0  0  0  0  0  0  0  0  0  0  0\n 4  4  4  0  5  5  5  0  0  0  0\n 4  4  4  0  5  5  5  0  0  0  0\n\njulia> mosaicview(A, -1, nrow=2, npad=1, rowmajor=true)\n5×11 MosaicViews.MosaicView{Int64,4,...}:\n  1   1   1  -1   2   2   2  -1   3   3   3\n  1   1   1  -1   2   2   2  -1   3   3   3\n -1  -1  -1  -1  -1  -1  -1  -1  -1  -1  -1\n  4   4   4  -1   5   5   5  -1  -1  -1  -1\n  4   4   4  -1   5   5   5  -1  -1  -1  -1\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [MosaicViews]\nOrder = [:type, :function]"
},

]}
