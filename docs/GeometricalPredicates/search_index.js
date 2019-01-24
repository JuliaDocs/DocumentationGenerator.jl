var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#GeometricalPredicates.jl-1",
    "page": "Readme",
    "title": "GeometricalPredicates.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: GeometricalPredicates) (Image: Coverage Status)Fast, robust 2D and 3D geometrical predicates on generic point types. Implementation follows algorithms described in the Arepo paper and used (for e.g.) in the Illustris Simulation. License: MIT. Bug reports welcome!"
},

{
    "location": "#How-does-it-work?-1",
    "page": "Readme",
    "title": "How does it work?",
    "category": "section",
    "text": "Calculations are initially performed on Float64 while bounding max absolute errors. If unable to determine result, fall back to exact calculation using BigInts. This is a form of floating point filtering. Most calculations are cached for fast repeated testing of incircle/intriangle predicates."
},

{
    "location": "#Current-limitations-1",
    "page": "Readme",
    "title": "Current limitations",
    "category": "section",
    "text": "Due to the numerical methods used, all coordinates are internally represented as Float64. In addition all must reside in the range 1.0<=x<2.0. In this range, according to IEEE754, Float64s have a constant exponent, hence their mantissa can be used for a one to one mapping to integers, which in turn are used for exact calculations using BigInts.\nIt is assumed that primitive vertices don\'t overlap. It is currently the responsibility of the user to make sure this is the case.\nIt is assumed tetrahedron vertices don\'t all lie in the same line. It is the user\'s responsibility to make sure it is so.\nTesting points are assumed not to overlap any vertices. As usual, it is the user\'s responsibility to make sure this is the case.Except for the 1st restriction, all others could be easily implemented. Currently these features are not needed by me. If you need missing features, please open an issue I may develop it!"
},

{
    "location": "#How-to-use?-1",
    "page": "Readme",
    "title": "How to use?",
    "category": "section",
    "text": ""
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Pkg.add(\"GeometricalPredicates\")"
},

{
    "location": "#Points-1",
    "page": "Readme",
    "title": "Points",
    "category": "section",
    "text": "using GeometricalPredicates\n\n# create a 2D point in (x, y) = (1.1, 1.9)\nmypoint = Point(1.1, 1.9)\ntypeof(mypoint) # -> Point2D\n\n# create a 3D point in (x, y, z) = (1.1, 1.9, 1.5)\nmypoint = Point(1.1, 1.9, 1.5)\ntypeof(mypoint) # -> Point3D\n\n# getting coordinates:\ngetx(mypoint) # -> 1.1\ngety(mypoint) # -> 1.9\ngetz(mypoint) # -> 1.5Point2D inherits from AbstractPoint2Dand Point3D inherits from AbstractPoint3D. You can implement custom point types by inheriting from these abstract types. These custom point types can be used with the rest of the package:type MyCustomPointType <: AbstractPoint2D\n    _x::FLoat64\n    _y::Float64\n    _mass::Float64\nend\n\ngetx(p::MyCustomPointType) = p._x\ngety(p::MyCustomPointType) = p._yimplementing getx, gety, and getz for 3D points is necessary as this is the interface the package is expecting. These function should return Float64. Points can be either immutables or types. Default Point2D and Point3D are immutables.The point coordinates must reside in a region 1.0 <= x < 2.0. Read above on why this limitation is necessary. For convenience there are 2 constants defined, min_coord and max coord representing the minimal and maximal feasible values of coordinates."
},

{
    "location": "#Triangles-and-Tetrahedrons-(..aka-Primitives)-1",
    "page": "Readme",
    "title": "Triangles and Tetrahedrons (..aka Primitives)",
    "category": "section",
    "text": "A triangle is the 2D primitive, and a tetrahedron is the 3D primitive.# create a triangle using 3 points\na = Point(1.1, 1.1)\nb = Point(1.9, 1.1)\nc = Point(1.1, 1.9)\nmytriangle = Primitive(a, b, c)\ntypeof(mytriangle) # -> UnOrientedTriangle{Point2D}The triangle is unoriented in the sense that orientation is not-known in advance, it is not immutable and it could change if points in the triangle are updated. The orientation needs to be calculated when the triangle is created and when points within are updated. Read below for the definition of orientation. The triangle could be created using any points inheriting from AbstractPoint2D which implement getx and gety, or using coordinates directly:mytriangle = Primitive(1.1, 1.1, 1.9, 1.1, 1.1, 1.9)\n\n# Getting point `a` in the triangle\ngeta(mytriangle) # -> Point2D(1.1, 1.1)\ngetb(mytriangle) # -> Point2D(1.9, 1.1)\ngetc(mytriangle) # -> Point2D(1.1, 1.9)The same goes for tetrahedrons, except we now use 4 3D points instead of 3 2D ones:# create a tetrahedron using 4 points\na = Point(1.1, 1.1, 1.1)\nb = Point(1.9, 1.1, 1.1)\nc = Point(1.1, 1.9, 1.1)\nd = Point(1.1, 1.1, 1.9)\nmytetraedron = Primitive(a, b, c, d)\ntypeof(mytetrahedron) # -> UnOrientedTetrahedron{Point3D}For certain applications we use primitives with known orientation. In those cases there should be no need to calculate it. This is achieved by passing an orientation flag to the Primitive creation function:mytetrahedron = Primitive(a, b, c, d, positivelyoriented)\ntypeof(mytetrahedron) # -> PositivelyOrientedTetrahedron{Point3D}\norientation(mytetrahedron) # -> constant 1, not calculated\nmytetrahedron = Primitive(a, b, c, d, negativelyoriented)\ntypeof(mytetrahedron) # -> NegativelyOrientedTetrahedron{Point3D}\norientation(mytetrahedron) # -> constant -1, not calculatedNote that when the primitive is oriented the real orientation is never calculated. It is assumed that the user knows what he\'s doing. If in doubt, just use unoriented primitives at the cost of actual calculation.Updating points in primitives can be done with seta, setb, etc. methods:seta(mytriangle, Point(1.7, 1.7))Updating a point in a primitive will fire all relevant pre-calculations. i.e. if the triangle is unoriented then orientation will be calculated. If it is oriented then still a few other pre-calculations will be done, but a few less. If there is need to update a number of points it is thus more efficient to do so in a group update:setab(mytriangle, Point(1.7, 1.7), Point(1.3, 1.1))\nsetbcd(mytetrahedron, Point(1.1, 1.1, 1.2), Point(1.2,1.1,1.3), Point(1.4,1.1,1.2))combinations for all points exist. The name always contains the point names in alphabetical order. As long as inner primitive data is not changed manually, it will keep giving correct results for all functions in this package."
},

{
    "location": "#Predicates-1",
    "page": "Readme",
    "title": "Predicates",
    "category": "section",
    "text": "incircle is the popular name to test whether a point lies inside of the sphere defined by the primitive points:a = Point(1.1, 1.1)\nb = Point(1.5, 1.1)\nc = Point(1.1, 1.5)\nmytriangle = Primitive(a, b, c)\nincircle(mytriangle, Point(1.9, 1.9)) # -> -1, i.e. outside\nincircle(mytriangle, Point(1.2, 1.2)) # -> +1, i.e. inside\nincircle(mytriangle, Point(1.5, 1.5)) # ->  0, i.e. point is exactly on circleThere is one more possibility. If the circle defined by our primitive has infinite radius then it is impossible to tell whether the point is inside or outside:a = Point(1.1, 1.1)\nb = Point(1.2, 1.2)\nc = Point(1.3, 1.3)\nmytriangle = Primitive(a, b, c)\nincircle(mytriangle, Point(1.3, 1.4)) # -> +2, i.e. cannot tellintriangle is a popular name to test whether a point lies inside of the primitive:a = Point(1.1, 1.1)\nb = Point(1.5, 1.1)\nc = Point(1.1, 1.5)\nmytriangle = Primitive(a, b, c)\nintriangle(mytriangle, Point(1.2, 1.2)) # -> +1, i.e. inside\nintriangle(mytriangle, Point(1.6, 1.6)) # -> -1, i.e. outside\nintriangle(mytriangle, Point(1.3, 1.1)) # ->  4, i.e. exactly on ab\nintriangle(mytriangle, Point(1.1, 1.3)) # ->  3, i.e. exactly on ac\nintriangle(mytriangle, Point(1.3, 1.3)) # ->  2, i.e. exactly on bc\nHere any negative number means outside. The exact value gives some information regarding the direction in which the point lies outside:-1 means the test point is in front of a, and outside of the triangle\n-2 means the test point is in front of b, and outside of the triangle\n-4 means the test point is in front of c, and outside of the trianglesame goes for tetrahedrons. Note that the point could be both in front of a and b. In cases as this one is arbitrarily chosen, all in name of performance.1 means test point is inside. But there are other possible positive values:1 + 1 = 2 means the test point is in front of a, exactly on the triangle\n1 + 2 = 3 means the test point is in front of b, exactly on the triangle\n1 + 3 = 4 means the test point is in front of c, exactly on the trianglesame extends for tetrahedrons."
},

{
    "location": "#Lines-and-Polygons-1",
    "page": "Readme",
    "title": "Lines and Polygons",
    "category": "section",
    "text": "orientation tests for the primitive orientation. In 2D this means:1 –> point c is to the left of the line defined by ab (with directionality from a to b)\n-1 –> point c is to the right\n0 –> point c is exactly on the linein 3D it means:1 –> point d is above the plane defined by abc (note \"above\" here means the direction of the plane normal, which depends on its orientation)\n-1 –> point d is below the plane\n0 –> point c is exactly on the planeAnother convenience API to test for orientation in 2D is using a line. It has some performance advantages over creating a triangle:a = Point(1.1, 1.1)\nb = Point(1.5, 1.5)\n\nl = Line(a, b)\nprintln(orientation(l, Point(1.4, 1.6))) # -->  1\nprintln(orientation(l, Point(1.4,1.05))) # --> -1\nprintln(orientation(l, Point(1.4,1.40))) # -->  0One can also create simple 2D polygons:ll = Point(1.0,1.0)\nlr = Point(1.2,1.0)\nur = Point(1.2,1.2)\nul = Point(1.0,1.2)\npoly = Polygon(ll, lr, ur, ul)\ninpolygon(poly, Point(1.1,1.1))  # assumes it is convex"
},

{
    "location": "#Basic-geometrical-properties-1",
    "page": "Readme",
    "title": "Basic geometrical properties",
    "category": "section",
    "text": "orientation gives the primitive orientation. area, volume, centroid, circumcenter, circumradius2 are all exported and I hope self descriptive."
},

{
    "location": "#Spatial-ordering-1",
    "page": "Readme",
    "title": "Spatial ordering",
    "category": "section",
    "text": "Scale and scale-free Peano-Hilbert ordering is available. Look here for a nice explanation on Hilbert sorting and here for a nice explanation of multiscale sort. Both are implemented here:p = Point(1.1, 1.2)\npeanokey(p, 4) # -> 6, the peano key in a regular grid of 2^4 X 2^4 cells\n\np = Point(1.1, 1.2, 1.3)\npeanokey(p, 4) # -> 94, the peano key in a regular grid of 2^4 X 2^4 X 2^4 cellsThe number of cells doesn\'t need to be specified. The default for 2D is 2^31 X 2^31 and for 3D 2^21 X 2^21 X 2^21. You can also do the inverse, and get a point from a key:Point2D(6, 4) # -> Point2D(1.0625,1.1875)in a finer grid we would get back something more accurate.So that was scale-dependent Hilbert stuff, which is good to say balance workload between computing nodes. When you need to order particles spatially it is better to use a scale independent method, like the Hilbert ordering here:a = [Point(1.0+rand(), 1.0+rand() for i in 1:1e6]\nhilbertsort!(a)Here keys are never calculated, and there is no grid, it uses a median policy, adjusting to the actual point distribution. There are a few parameters with good defaults, see links above to understand what they mean. For an algorithm such a Delaunay tesselation it is sometimes better to use a multi-scale sort with a Hilbert sort, like this:mssort!(a)of course this adds a few more default parameters, again with decent defaults, read above links to understand."
},

{
    "location": "autodocs/#GeometricalPredicates.Polygon2D",
    "page": "Docstrings",
    "title": "GeometricalPredicates.Polygon2D",
    "category": "type",
    "text": "a simple polygon\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeometricalPredicates.getlines-Tuple{Polygon2D}",
    "page": "Docstrings",
    "title": "GeometricalPredicates.getlines",
    "category": "method",
    "text": "return the lines of a Polygon\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeometricalPredicates.getpoints-Tuple{Polygon2D}",
    "page": "Docstrings",
    "title": "GeometricalPredicates.getpoints",
    "category": "method",
    "text": "return the points of a Polygon\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GeometricalPredicates.inpolygon-Tuple{Polygon2D,AbstractPoint2D}",
    "page": "Docstrings",
    "title": "GeometricalPredicates.inpolygon",
    "category": "method",
    "text": "return true if the Point is inside the Polygon, which is assumed to be convex\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [GeometricalPredicates]\nOrder = [:type, :function]"
},

]}
