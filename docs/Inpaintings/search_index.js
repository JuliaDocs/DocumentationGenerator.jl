var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Inpaintings.jl Documentation",
    "title": "Inpaintings.jl Documentation",
    "category": "page",
    "text": ""
},

{
    "location": "#Inpaintings.jl-Documentation-1",
    "page": "Inpaintings.jl Documentation",
    "title": "Inpaintings.jl Documentation",
    "category": "section",
    "text": "Inpaintings.jl provides a Julia version of MATLAB\'s inpaint_nans function (originally written by John d\'Errico, available on the MathWorks File Exchange website and ported here with his authorization by personal communication).Because Julia supports missing values, Inpaintings.jl provides a more functional inpaint function, which takes an array A as input and fills its missing or NaN values by solving a simple PDE. Inpaintings.jl\'s inpaint should work for vectors, matrices, and n-dimensional arrays."
},

{
    "location": "#Usage-1",
    "page": "Inpaintings.jl Documentation",
    "title": "Usage",
    "category": "section",
    "text": "Use the package as you would any Julia package, via using Inpaintings.DocTestSetup = quote\n    using Inpaintings\nendBasic usage is done by applying the function inpaint to an array that you want to inpaint.The tutorial below shows the functionality of Inpaintings.jl and how to use the function inpaint."
},

{
    "location": "#Tutorial-1",
    "page": "Inpaintings.jl Documentation",
    "title": "Tutorial",
    "category": "section",
    "text": "Let A be a matrix of floats to which we are going to \"remove\" some values to inpaintn = 10\nA = float(collect(1:n) * collect(1:n)\')\n\n# output\n\n10×10 Array{Float64,2}:\n  1.0   2.0   3.0   4.0   5.0   6.0   7.0   8.0   9.0   10.0\n  2.0   4.0   6.0   8.0  10.0  12.0  14.0  16.0  18.0   20.0\n  3.0   6.0   9.0  12.0  15.0  18.0  21.0  24.0  27.0   30.0\n  4.0   8.0  12.0  16.0  20.0  24.0  28.0  32.0  36.0   40.0\n  5.0  10.0  15.0  20.0  25.0  30.0  35.0  40.0  45.0   50.0\n  6.0  12.0  18.0  24.0  30.0  36.0  42.0  48.0  54.0   60.0\n  7.0  14.0  21.0  28.0  35.0  42.0  49.0  56.0  63.0   70.0\n  8.0  16.0  24.0  32.0  40.0  48.0  56.0  64.0  72.0   80.0\n  9.0  18.0  27.0  36.0  45.0  54.0  63.0  72.0  81.0   90.0\n 10.0  20.0  30.0  40.0  50.0  60.0  70.0  80.0  90.0  100.0Let us \"remove\" some values of A by replacing them with missing:Amiss = convert(Array{Union{Missing, Float64}}, A)\nAmiss[1:5, [1,2,end]] .= missing # replace some values with `missing`\nAmiss # Let\'s have a look at the new array with missing values\n\n# output\n\n10×10 Array{Union{Missing, Float64},2}:\n   missing    missing   3.0   4.0   5.0   6.0   7.0   8.0   9.0     missing\n   missing    missing   6.0   8.0  10.0  12.0  14.0  16.0  18.0     missing\n   missing    missing   9.0  12.0  15.0  18.0  21.0  24.0  27.0     missing\n   missing    missing  12.0  16.0  20.0  24.0  28.0  32.0  36.0     missing\n   missing    missing  15.0  20.0  25.0  30.0  35.0  40.0  45.0     missing\n  6.0       12.0       18.0  24.0  30.0  36.0  42.0  48.0  54.0   60.0\n  7.0       14.0       21.0  28.0  35.0  42.0  49.0  56.0  63.0   70.0\n  8.0       16.0       24.0  32.0  40.0  48.0  56.0  64.0  72.0   80.0\n  9.0       18.0       27.0  36.0  45.0  54.0  63.0  72.0  81.0   90.0\n 10.0       20.0       30.0  40.0  50.0  60.0  70.0  80.0  90.0  100.0"
},

{
    "location": "#Inpainting-missing-values-1",
    "page": "Inpaintings.jl Documentation",
    "title": "Inpainting missing values",
    "category": "section",
    "text": "We can now inpaint the missing values of A with the simple command:inpaint(Amiss)\n\n# output\n\n10×10 Array{Union{Missing, Float64},2}:\n  1.0   2.0   3.0   4.0   5.0   6.0   7.0   8.0   9.0   10.0\n  2.0   4.0   6.0   8.0  10.0  12.0  14.0  16.0  18.0   20.0\n  3.0   6.0   9.0  12.0  15.0  18.0  21.0  24.0  27.0   30.0\n  4.0   8.0  12.0  16.0  20.0  24.0  28.0  32.0  36.0   40.0\n  5.0  10.0  15.0  20.0  25.0  30.0  35.0  40.0  45.0   50.0\n  6.0  12.0  18.0  24.0  30.0  36.0  42.0  48.0  54.0   60.0\n  7.0  14.0  21.0  28.0  35.0  42.0  49.0  56.0  63.0   70.0\n  8.0  16.0  24.0  32.0  40.0  48.0  56.0  64.0  72.0   80.0\n  9.0  18.0  27.0  36.0  45.0  54.0  63.0  72.0  81.0   90.0\n 10.0  20.0  30.0  40.0  50.0  60.0  70.0  80.0  90.0  100.0"
},

{
    "location": "#Cyclic-dimensions-1",
    "page": "Inpaintings.jl Documentation",
    "title": "Cyclic dimensions",
    "category": "section",
    "text": "An option that may be useful is to assume that one dimension is cyclic (e.g., when mapping the globe for longitude):inpaint(Amiss, cycledims=[2])\n\n# output\n\n10×10 Array{Float64,2}:\n  6.12342   3.75212   3.0   4.0   5.0   6.0   7.0   8.0   9.0    8.44909\n 11.1515    7.418     6.0   8.0  10.0  12.0  14.0  16.0  18.0   15.7034\n 15.4254   10.3003    9.0  12.0  15.0  18.0  21.0  24.0  27.0   23.2602\n 17.668    12.0028   12.0  16.0  20.0  24.0  28.0  32.0  36.0   31.3321\n 15.4959   12.1129   15.0  20.0  25.0  30.0  35.0  40.0  45.0   42.0958\n  6.0      12.0      18.0  24.0  30.0  36.0  42.0  48.0  54.0   60.0\n  7.0      14.0      21.0  28.0  35.0  42.0  49.0  56.0  63.0   70.0\n  8.0      16.0      24.0  32.0  40.0  48.0  56.0  64.0  72.0   80.0\n  9.0      18.0      27.0  36.0  45.0  54.0  63.0  72.0  81.0   90.0\n 10.0      20.0      30.0  40.0  50.0  60.0  70.0  80.0  90.0  100.0"
},

{
    "location": "#Inpainting-NaNs-1",
    "page": "Inpaintings.jl Documentation",
    "title": "Inpainting NaNs",
    "category": "section",
    "text": "If A is an array of floats and contains some NaNs rather than missing values, the command inpaint(A) will fill its NaNs. First, let\'s create the array with NaNs:Anan = copy(A)\nAnan[1:5, [1,2,end]] .= NaN # replace some values with `NaN`\nAnan # Let\'s have a look at the new array with NaN values\n\n# output\n\n10×10 Array{Float64,2}:\n NaN    NaN     3.0   4.0   5.0   6.0   7.0   8.0   9.0  NaN\n NaN    NaN     6.0   8.0  10.0  12.0  14.0  16.0  18.0  NaN\n NaN    NaN     9.0  12.0  15.0  18.0  21.0  24.0  27.0  NaN\n NaN    NaN    12.0  16.0  20.0  24.0  28.0  32.0  36.0  NaN\n NaN    NaN    15.0  20.0  25.0  30.0  35.0  40.0  45.0  NaN\n   6.0   12.0  18.0  24.0  30.0  36.0  42.0  48.0  54.0   60.0\n   7.0   14.0  21.0  28.0  35.0  42.0  49.0  56.0  63.0   70.0\n   8.0   16.0  24.0  32.0  40.0  48.0  56.0  64.0  72.0   80.0\n   9.0   18.0  27.0  36.0  45.0  54.0  63.0  72.0  81.0   90.0\n  10.0   20.0  30.0  40.0  50.0  60.0  70.0  80.0  90.0  100.0Now, we can inpaint Anan\'s NaN values viainpaint(Anan)\n\n# output\n\n10×10 Array{Float64,2}:\n  1.0   2.0   3.0   4.0   5.0   6.0   7.0   8.0   9.0   10.0\n  2.0   4.0   6.0   8.0  10.0  12.0  14.0  16.0  18.0   20.0\n  3.0   6.0   9.0  12.0  15.0  18.0  21.0  24.0  27.0   30.0\n  4.0   8.0  12.0  16.0  20.0  24.0  28.0  32.0  36.0   40.0\n  5.0  10.0  15.0  20.0  25.0  30.0  35.0  40.0  45.0   50.0\n  6.0  12.0  18.0  24.0  30.0  36.0  42.0  48.0  54.0   60.0\n  7.0  14.0  21.0  28.0  35.0  42.0  49.0  56.0  63.0   70.0\n  8.0  16.0  24.0  32.0  40.0  48.0  56.0  64.0  72.0   80.0\n  9.0  18.0  27.0  36.0  45.0  54.0  63.0  72.0  81.0   90.0\n 10.0  20.0  30.0  40.0  50.0  60.0  70.0  80.0  90.0  100.0"
},

{
    "location": "#Inpainting-any-value-1",
    "page": "Inpaintings.jl Documentation",
    "title": "Inpainting any value",
    "category": "section",
    "text": "Instead of inpainting missing or NaN values, we sometimes want to inpaint a specific value. This is done by giving the value after the array as an argument, via the syntax inpaint(A, value_to_inpaint). To check this, let\'s add a bunch of 12345 to our array:A12345 = copy(A)\nA12345[1:5, [1,2,end]] .= 12345 # replace some values with `12345`\nA12345 # Let\'s have a look at the new array with NaN values\n\n# output\n\n10×10 Array{Float64,2}:\n 12345.0  12345.0   3.0   4.0   5.0   6.0   7.0   8.0   9.0  12345.0\n 12345.0  12345.0   6.0   8.0  10.0  12.0  14.0  16.0  18.0  12345.0\n 12345.0  12345.0   9.0  12.0  15.0  18.0  21.0  24.0  27.0  12345.0\n 12345.0  12345.0  12.0  16.0  20.0  24.0  28.0  32.0  36.0  12345.0\n 12345.0  12345.0  15.0  20.0  25.0  30.0  35.0  40.0  45.0  12345.0\n     6.0     12.0  18.0  24.0  30.0  36.0  42.0  48.0  54.0     60.0\n     7.0     14.0  21.0  28.0  35.0  42.0  49.0  56.0  63.0     70.0\n     8.0     16.0  24.0  32.0  40.0  48.0  56.0  64.0  72.0     80.0\n     9.0     18.0  27.0  36.0  45.0  54.0  63.0  72.0  81.0     90.0\n    10.0     20.0  30.0  40.0  50.0  60.0  70.0  80.0  90.0    100.0Now, we can inpaint the 12345 values viainpaint(A12345, 12345)\n\n# output\n\n10×10 Array{Float64,2}:\n  1.0   2.0   3.0   4.0   5.0   6.0   7.0   8.0   9.0   10.0\n  2.0   4.0   6.0   8.0  10.0  12.0  14.0  16.0  18.0   20.0\n  3.0   6.0   9.0  12.0  15.0  18.0  21.0  24.0  27.0   30.0\n  4.0   8.0  12.0  16.0  20.0  24.0  28.0  32.0  36.0   40.0\n  5.0  10.0  15.0  20.0  25.0  30.0  35.0  40.0  45.0   50.0\n  6.0  12.0  18.0  24.0  30.0  36.0  42.0  48.0  54.0   60.0\n  7.0  14.0  21.0  28.0  35.0  42.0  49.0  56.0  63.0   70.0\n  8.0  16.0  24.0  32.0  40.0  48.0  56.0  64.0  72.0   80.0\n  9.0  18.0  27.0  36.0  45.0  54.0  63.0  72.0  81.0   90.0\n 10.0  20.0  30.0  40.0  50.0  60.0  70.0  80.0  90.0  100.0"
},

{
    "location": "#Inpainting-any-value-x-such-that-f(x)-true-1",
    "page": "Inpaintings.jl Documentation",
    "title": "Inpainting any value x such that f(x) == true",
    "category": "section",
    "text": "Another approach is to inpaint values for which a function f returns true. f must be a function that has one scalar argument and that returns a boolean. For example, we can reproduces the examples above by using the functions ismissing, isnan, or x -> x == 12345. Let\'s assume for some reason all the values of A that are above 10 were too high:A10 = copy(A)\nA10[findall(A10 .> 10)] .= 1e3\nA10\n\n# output\n\n10×10 Array{Float64,2}:\n  1.0     2.0     3.0     4.0     5.0     6.0     7.0     8.0     9.0    10.0\n  2.0     4.0     6.0     8.0    10.0  1000.0  1000.0  1000.0  1000.0  1000.0\n  3.0     6.0     9.0  1000.0  1000.0  1000.0  1000.0  1000.0  1000.0  1000.0\n  4.0     8.0  1000.0  1000.0  1000.0  1000.0  1000.0  1000.0  1000.0  1000.0\n  5.0    10.0  1000.0  1000.0  1000.0  1000.0  1000.0  1000.0  1000.0  1000.0\n  6.0  1000.0  1000.0  1000.0  1000.0  1000.0  1000.0  1000.0  1000.0  1000.0\n  7.0  1000.0  1000.0  1000.0  1000.0  1000.0  1000.0  1000.0  1000.0  1000.0\n  8.0  1000.0  1000.0  1000.0  1000.0  1000.0  1000.0  1000.0  1000.0  1000.0\n  9.0  1000.0  1000.0  1000.0  1000.0  1000.0  1000.0  1000.0  1000.0  1000.0\n 10.0  1000.0  1000.0  1000.0  1000.0  1000.0  1000.0  1000.0  1000.0  1000.0We can inpaint those values viainpaint(x -> x .> 10, A10)\n\n# output\n\n10×10 Array{Float64,2}:\n  1.0   2.0   3.0   4.0   5.0   6.0   7.0   8.0   9.0   10.0\n  2.0   4.0   6.0   8.0  10.0  12.0  14.0  16.0  18.0   20.0\n  3.0   6.0   9.0  12.0  15.0  18.0  21.0  24.0  27.0   30.0\n  4.0   8.0  12.0  16.0  20.0  24.0  28.0  32.0  36.0   40.0\n  5.0  10.0  15.0  20.0  25.0  30.0  35.0  40.0  45.0   50.0\n  6.0  12.0  18.0  24.0  30.0  36.0  42.0  48.0  54.0   60.0\n  7.0  14.0  21.0  28.0  35.0  42.0  49.0  56.0  63.0   70.0\n  8.0  16.0  24.0  32.0  40.0  48.0  56.0  64.0  72.0   80.0\n  9.0  18.0  27.0  36.0  45.0  54.0  63.0  72.0  81.0   90.0\n 10.0  20.0  30.0  40.0  50.0  60.0  70.0  80.0  90.0  100.0"
},

{
    "location": "#Inpainting-in-any-dimension-1",
    "page": "Inpaintings.jl Documentation",
    "title": "Inpainting in any dimension",
    "category": "section",
    "text": "inpaint should work for vectors, matrices, but also n-dimensional arrays. For example, the NaNs in the following vector A:A = float(collect(1:10))\nA[[1, 2, 5, 8]] .= NaN\nA\n\n# output\n\n10-element Array{Float64,1}:\n NaN\n NaN\n   3.0\n   4.0\n NaN\n   6.0\n   7.0\n NaN\n   9.0\n  10.0can be inpainted via the usual syntaxinpaint(A)\n\n# output\n\n10-element Array{Float64,1}:\n  1.0\n  2.0\n  3.0\n  4.0\n  5.000000000000002\n  6.0\n  7.0\n  8.000000000000004\n  9.0\n 10.0Similarly, this works in n dimensions. Let\'s make a 4-dimensional array with some NaNs:dims = (4, 5, 3, 2)\nA = float.(reshape(1:prod(dims), dims))\nA[1:2, 1:2, 1:2, 1:2] .= NaN\nA\n\n# output\n4×5×3×2 Array{Float64,4}:\n[:, :, 1, 1] =\n NaN    NaN     9.0  13.0  17.0\n NaN    NaN    10.0  14.0  18.0\n   3.0    7.0  11.0  15.0  19.0\n   4.0    8.0  12.0  16.0  20.0\n\n[:, :, 2, 1] =\n NaN    NaN    29.0  33.0  37.0\n NaN    NaN    30.0  34.0  38.0\n  23.0   27.0  31.0  35.0  39.0\n  24.0   28.0  32.0  36.0  40.0\n\n[:, :, 3, 1] =\n 41.0  45.0  49.0  53.0  57.0\n 42.0  46.0  50.0  54.0  58.0\n 43.0  47.0  51.0  55.0  59.0\n 44.0  48.0  52.0  56.0  60.0\n\n[:, :, 1, 2] =\n NaN    NaN    69.0  73.0  77.0\n NaN    NaN    70.0  74.0  78.0\n  63.0   67.0  71.0  75.0  79.0\n  64.0   68.0  72.0  76.0  80.0\n\n[:, :, 2, 2] =\n NaN    NaN    89.0  93.0   97.0\n NaN    NaN    90.0  94.0   98.0\n  83.0   87.0  91.0  95.0   99.0\n  84.0   88.0  92.0  96.0  100.0\n\n[:, :, 3, 2] =\n 101.0  105.0  109.0  113.0  117.0\n 102.0  106.0  110.0  114.0  118.0\n 103.0  107.0  111.0  115.0  119.0\n 104.0  108.0  112.0  116.0  120.0Now we can inpaint the 4-dimensional A with the same syntax:inpaint(A)\n\n# output\n4×5×3×2 Array{Float64,4}:\n[:, :, 1, 1] =\n 1.0  5.0   9.0  13.0  17.0\n 2.0  6.0  10.0  14.0  18.0\n 3.0  7.0  11.0  15.0  19.0\n 4.0  8.0  12.0  16.0  20.0\n\n[:, :, 2, 1] =\n 21.0  25.0  29.0  33.0  37.0\n 22.0  26.0  30.0  34.0  38.0\n 23.0  27.0  31.0  35.0  39.0\n 24.0  28.0  32.0  36.0  40.0\n\n[:, :, 3, 1] =\n 41.0  45.0  49.0  53.0  57.0\n 42.0  46.0  50.0  54.0  58.0\n 43.0  47.0  51.0  55.0  59.0\n 44.0  48.0  52.0  56.0  60.0\n\n[:, :, 1, 2] =\n 61.0  65.0  69.0  73.0  77.0\n 62.0  66.0  70.0  74.0  78.0\n 63.0  67.0  71.0  75.0  79.0\n 64.0  68.0  72.0  76.0  80.0\n\n[:, :, 2, 2] =\n 81.0  85.0  89.0  93.0   97.0\n 82.0  86.0  90.0  94.0   98.0\n 83.0  87.0  91.0  95.0   99.0\n 84.0  88.0  92.0  96.0  100.0\n\n[:, :, 3, 2] =\n 101.0  105.0  109.0  113.0  117.0\n 102.0  106.0  110.0  114.0  118.0\n 103.0  107.0  111.0  115.0  119.0\n 104.0  108.0  112.0  116.0  120.0"
},

{
    "location": "#Inpaintings.inpaint-Tuple{AbstractArray,Missing}",
    "page": "Inpaintings.jl Documentation",
    "title": "Inpaintings.inpaint",
    "category": "method",
    "text": "inpaint(A, missing)\n\nInpaints missing values. Should be the same as inpaint(A).\n\n\n\n\n\n"
},

{
    "location": "#Inpaintings.inpaint-Tuple{Any,Any}",
    "page": "Inpaintings.jl Documentation",
    "title": "Inpaintings.inpaint",
    "category": "method",
    "text": "inpaint(f, A)\n\nInpaints values of A for which f(A) == true.\n\nExamples\n\njulia> A = float((1:3)*(1:4)\') ; A[1:2, 1:2] .= 999 ; A\n3×4 Array{Float64,2}:\n 999.0  999.0  3.0   4.0\n 999.0  999.0  6.0   8.0\n   3.0    6.0  9.0  12.0\n\njulia> inpaint(x -> x == 999, A)\n3×4 Array{Float64,2}:\n 1.0  2.0  3.0   4.0\n 2.0  4.0  6.0   8.0\n 3.0  6.0  9.0  12.0\n\njulia> A = float((1:3)*(1:4)\') ; A[1:2, [1, end]] .= NaN ; A\n3×4 Array{Float64,2}:\n NaN    2.0  3.0  NaN\n NaN    4.0  6.0  NaN\n   3.0  6.0  9.0   12.0\n\njulia> inpaint(isnan, A)\n3×4 Array{Float64,2}:\n 1.0  2.0  3.0   4.0\n 2.0  4.0  6.0   8.0\n 3.0  6.0  9.0  12.0\n\ninpaint(f, A; method=1, cycledims=[])\n\nWith optional arguments, you can chose the inpainting method and if dimensions are cyclic.\n\njulia> A = float((1:3)*(1:4)\') ; A[1:2, [1, end]] .= NaN ; A\n3×4 Array{Float64,2}:\n NaN    2.0  3.0  NaN\n NaN    4.0  6.0  NaN\n   3.0  6.0  9.0   12.0\n\njulia> inpaint(A, cycledims=[2])\n3×4 Array{Float64,2}:\n 2.16475  2.0  3.0   2.83525\n 3.76245  4.0  6.0   6.23755\n 3.0      6.0  9.0  12.0\n\n\n\n\n\n"
},

{
    "location": "#Inpaintings.inpaint-Union{Tuple{AbstractArray{T,N} where N}, Tuple{T}} where T<:AbstractFloat",
    "page": "Inpaintings.jl Documentation",
    "title": "Inpaintings.inpaint",
    "category": "method",
    "text": "inpaint(A)\n\nInpaints NaN values if the elements of A are all float (i.e., eltype(A) <: AbstractFloat).\n\nExample\n\njulia> A = float((1:3)*(1:4)\') ; A[1:2, 1:2] .= NaN ; A\n3×4 Array{Float64,2}:\n NaN    NaN    3.0   4.0\n NaN    NaN    6.0   8.0\n   3.0    6.0  9.0  12.0\n\njulia> inpaint(A)\n3×4 Array{Float64,2}:\n 1.0  2.0  3.0   4.0\n 2.0  4.0  6.0   8.0\n 3.0  6.0  9.0  12.0\n\n\n\n\n\n"
},

{
    "location": "#Inpaintings.inpaint-Union{Tuple{AbstractArray{Union{Missing, T},N} where N}, Tuple{T}} where T<:AbstractFloat",
    "page": "Inpaintings.jl Documentation",
    "title": "Inpaintings.inpaint",
    "category": "method",
    "text": "inpaint(A)\n\nInpaints missing values if A contains some.\n\nInspired by MATLAB\'s inpaint_nans\'s (by John d\'Errico: link).\n\nExample\n\njulia> A = convert(Array{Union{Float64, Missing},2}, (1:3)*(1:4)\') ; A[1:2, 1:2] .= missing ; A\n3×4 Array{Union{Missing, Float64},2}:\n  missing   missing  3.0   4.0\n  missing   missing  6.0   8.0\n 3.0       6.0       9.0  12.0\n\njulia> inpaint(A)\n3×4 Array{Union{Missing, Float64},2}:\n 1.0  2.0  3.0   4.0\n 2.0  4.0  6.0   8.0\n 3.0  6.0  9.0  12.0\n\n\n\n\n\n"
},

{
    "location": "#Inpaintings.inpaint-Union{Tuple{T}, Tuple{AbstractArray{T,N} where N,Any}} where T<:AbstractFloat",
    "page": "Inpaintings.jl Documentation",
    "title": "Inpaintings.inpaint",
    "category": "method",
    "text": "inpaint(A, value_to_fill)\n\nInpaints value_to_fill values (can be NaN). Useful in the case data was generated by filling missing values with an arbitrary chosen one.\n\nExamples\n\njulia> A = float((1:3)*(1:4)\') ; A[1:2, 1:2] .= 999 ; A\n3×4 Array{Float64,2}:\n 999.0  999.0  3.0   4.0\n 999.0  999.0  6.0   8.0\n   3.0    6.0  9.0  12.0\n\njulia> inpaint(A, 999)\n3×4 Array{Float64,2}:\n 1.0  2.0  3.0   4.0\n 2.0  4.0  6.0   8.0\n 3.0  6.0  9.0  12.0\n\njulia> A = float((1:3)*(1:4)\') ; A[1:2, 1:2] .= NaN ; A\n3×4 Array{Float64,2}:\n NaN    NaN    3.0   4.0\n NaN    NaN    6.0   8.0\n   3.0    6.0  9.0  12.0\n\njulia> inpaint(A, NaN)\n3×4 Array{Float64,2}:\n 1.0  2.0  3.0   4.0\n 2.0  4.0  6.0   8.0\n 3.0  6.0  9.0  12.0\n\n\n\n\n\n"
},

{
    "location": "#Inpaintings.inpaint_method1-Tuple{Any,Array}",
    "page": "Inpaintings.jl Documentation",
    "title": "Inpaintings.inpaint_method1",
    "category": "method",
    "text": "inpaint_method1(f, A::Array, cycledims=Int64[])\n\nInpaints values in A that f gives true on by solving a simple diffusion PDE. Default method for inpaint. The partial differential equation (PDE) is defined by the standard Laplacian, Δ = ∇^2. Inspired by MATLAB\'s inpaint_nans\'s method 0 for matrices (by John d\'Errico). See https://www.mathworks.com/matlabcentral/fileexchange/4551-inpaint_nans. The discrete stencil used for Δ looks like\n\n      ┌───┐\n      │ 1 │\n      └─┬─┘\n        │\n┌───┐ ┌─┴─┐ ┌───┐\n│ 1 ├─┤-4 ├─┤ 1 │\n└───┘ └─┬─┘ └───┘\n        │\n      ┌─┴─┐\n      │ 1 │\n      └───┘\n\nBy default, the stencil is not applied at the borders. Instead, its 1D component,\n\n┌───┐ ┌───┐ ┌───┐\n│ 1 ├─┤-2 ├─┤ 1 │\n└───┘ └───┘ └───┘\n\nis applied where it fits at the borders. However, the user can supply a list of dimensions that should be considered cyclic. In this case, the sentil will be used also at the borders and \"jump\" to the other side. This is particularly useful for, e.g., world maps with longitudes spanning the entire globe.\n\n\n\n\n\n"
},

{
    "location": "#Inpaintings.list_neighbors-Tuple{Any,Any,Any}",
    "page": "Inpaintings.jl Documentation",
    "title": "Inpaintings.list_neighbors",
    "category": "method",
    "text": "list_neighbors(A, idx, neighbors)\n\nLists all the neighbors of the indices in idx in Array A. Neighbors already in idx are accepted. The argument neighnors contains a list of the neighbors about the origin coordinate (0, 0, ...). In other words, it is a Vector of CartesianIndex such that the direct neighbors of index i are given by i + n for n in neighbors. Inspired by MATLAB\'s inpaint_nans\'s identify_neighbors (by John d\'Errico). See https://www.mathworks.com/matlabcentral/fileexchange/4551-inpaint_nans.\n\n\n\n\n\n"
},

{
    "location": "#Functions-1",
    "page": "Inpaintings.jl Documentation",
    "title": "Functions",
    "category": "section",
    "text": "Modules = [Inpaintings]\nOrder   = [:function, :type]"
},

]}
