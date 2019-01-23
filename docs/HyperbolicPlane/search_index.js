var documenterSearchIndex = {"docs": [

{
    "location": "#HyperbolicPlane.HCircle",
    "page": "Home",
    "title": "HyperbolicPlane.HCircle",
    "category": "type",
    "text": "HCircle(P::HPoint,r::Real) creates a new hyperbolic circle centered at P with radius r.\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.HCircle-Tuple{HPoint,HPoint,HPoint}",
    "page": "Home",
    "title": "HyperbolicPlane.HCircle",
    "category": "method",
    "text": "HCircle(A,B,C) creates a circle that includes the three given points.\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.HContainer",
    "page": "Home",
    "title": "HyperbolicPlane.HContainer",
    "category": "type",
    "text": "HContainer is a device for holding a collection of hyperbolic objects. It is like a set, but we have to do a lot of work before adding a new element because equal hyperbolic objects might differ a tiny amount and that would mess up hashing.\n\nC = HContainer() creates a new container.\nC = HContainer(items...) creates a new container with the items.\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.HLine-Tuple{HPoint,HPoint}",
    "page": "Home",
    "title": "HyperbolicPlane.HLine",
    "category": "method",
    "text": "HLine(P,Q) creates a new line from the given two points.\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.HLine-Tuple{HSegment}",
    "page": "Home",
    "title": "HyperbolicPlane.HLine",
    "category": "method",
    "text": "HLine(S::HSegment) extends the segment S to give a (new) line.\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.HPoint",
    "page": "Home",
    "title": "HyperbolicPlane.HPoint",
    "category": "type",
    "text": "HPoint(z::Complex) creates a new point in the hyperbolic plane. The argument z must have absolute value less than 1.\n\nHPoint(r,theta) creates a new point with polar coordinates (r,theta). See also: polar.\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.HPolygon",
    "page": "Home",
    "title": "HyperbolicPlane.HPolygon",
    "category": "type",
    "text": "HPolygon() creates a new polygon (with no points).\n\nHPolygon(list) creates a polygon whose points are specified in list.\n\nSee: add_point!\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.HRay",
    "page": "Home",
    "title": "HyperbolicPlane.HRay",
    "category": "type",
    "text": "HRay(P::HPoint, t::Real) returns a ray with vertex P pointing to exp(im*t).\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.HRay-Tuple{HPoint,HPoint}",
    "page": "Home",
    "title": "HyperbolicPlane.HRay",
    "category": "method",
    "text": "HRay(A,B) where A and B are points creates the ray with vertex A passing through B.\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.HSegment",
    "page": "Home",
    "title": "HyperbolicPlane.HSegment",
    "category": "type",
    "text": "HSegment(A,B) creates a new line segment with endpoints A and B.\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.HTriangle",
    "page": "Home",
    "title": "HyperbolicPlane.HTriangle",
    "category": "type",
    "text": "HTriangle(A,B,C) creates a new hyperbolic triangle.\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.Horocycle",
    "page": "Home",
    "title": "HyperbolicPlane.Horocycle",
    "category": "type",
    "text": "Horocycle(P::HPoint, theta::Real) create the horocycle containing the point P and the ideal point at exp(im*theta).\n\n\n\n\n\n"
},

{
    "location": "#AbstractLattices.dist-Tuple{HPoint,HLine}",
    "page": "Home",
    "title": "AbstractLattices.dist",
    "category": "method",
    "text": "dist(P::HPoint,L::HLine) is the distance from P to the nearest point on L.\n\n\n\n\n\n"
},

{
    "location": "#AbstractLattices.dist-Tuple{HPoint,HPoint}",
    "page": "Home",
    "title": "AbstractLattices.dist",
    "category": "method",
    "text": "dist(P,Q) gives the distance betwen two points in the hyperbolic plane. If Q is omitted, give the distance from P to HPoint(0).\n\n\n\n\n\n"
},

{
    "location": "#Base.angle-Tuple{HPoint,HPoint,HPoint}",
    "page": "Home",
    "title": "Base.angle",
    "category": "method",
    "text": "angle(A,B,C) finds the angle betwen BA and BC.\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.RandomHCircle-Tuple{}",
    "page": "Home",
    "title": "HyperbolicPlane.RandomHCircle",
    "category": "method",
    "text": "RandomHCircle() creates a random circle.\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.RandomHLine-Tuple{}",
    "page": "Home",
    "title": "HyperbolicPlane.RandomHLine",
    "category": "method",
    "text": "RandomHLine() returns a random line in the hyperbolic plane.\n\nAlgorithm: choose two values s,t in [0,2pi) uniformly at random and then make the line from exp(s*im) to exp(t*im).\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.RandomHPoint-Tuple{}",
    "page": "Home",
    "title": "HyperbolicPlane.RandomHPoint",
    "category": "method",
    "text": "RandomHPoint() generates a point at random in the hyperbolic plane.\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.RandomHPolygon",
    "page": "Home",
    "title": "HyperbolicPlane.RandomHPolygon",
    "category": "function",
    "text": "RandomHPolygon(n::Int,simple::Bool=false) create a new HPolygon with n points chosen at random. With simple set to true, return a polygon that does not self-intersect.\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.RandomHRay-Tuple{HPoint}",
    "page": "Home",
    "title": "HyperbolicPlane.RandomHRay",
    "category": "method",
    "text": "RandomHRay() creates a random ray. RandomRay(P::HPoint) creates a random ray with vertex P.\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.RandomHTriangle-Tuple{}",
    "page": "Home",
    "title": "HyperbolicPlane.RandomHTriangle",
    "category": "method",
    "text": "RandomHTriangle() creates a random triangle via three calls to RandomHPoint().\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.RandomHorocycle-Tuple{}",
    "page": "Home",
    "title": "HyperbolicPlane.RandomHorocycle",
    "category": "method",
    "text": "RandomHorocycle() creates a random horocycle by choosing a point at random by RandomHPoint and a random ideal point (uniformly between 0 and 2π).\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.add_object!-Tuple{HContainer,HObject}",
    "page": "Home",
    "title": "HyperbolicPlane.add_object!",
    "category": "method",
    "text": "add_object!(C::HContainer, X::HObject) adds X to the container C.\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.add_point!-Tuple{HPolygon,HPoint}",
    "page": "Home",
    "title": "HyperbolicPlane.add_point!",
    "category": "method",
    "text": "add_point!(X::HPolygon, P::HPoint) adds the point P as the last point of the polygon X\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.angles-Tuple{HPolygon}",
    "page": "Home",
    "title": "HyperbolicPlane.angles",
    "category": "method",
    "text": "angles(P::HPolygon) returns a list of the angles at the vertices of P.\n\nThe results are always in the interval [0,pi].\nThe order of the angles is the order of the vertices in P.plist.\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.angles-Tuple{HTriangle}",
    "page": "Home",
    "title": "HyperbolicPlane.angles",
    "category": "method",
    "text": "angles(T::HTriangle) returns a sorted triple containing the angles at the three corners of the triangle.\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.area-Tuple{HCircle}",
    "page": "Home",
    "title": "HyperbolicPlane.area",
    "category": "method",
    "text": "area(C::HCircle) returns the area of the circle.\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.area-Tuple{HPolygon}",
    "page": "Home",
    "title": "HyperbolicPlane.area",
    "category": "method",
    "text": "area(X::HPolygon) returns the area of the polygon, but is only reliable if X does not self-intersect. See is_simple.\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.area-Tuple{HTriangle}",
    "page": "Home",
    "title": "HyperbolicPlane.area",
    "category": "method",
    "text": "area(T::HTriangle) returns the area of the triangle.\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.between-Tuple{HPoint,HPoint,HPoint}",
    "page": "Home",
    "title": "HyperbolicPlane.between",
    "category": "method",
    "text": "between(a,b,c) determines if the hyperbolic point b lies on the segment from a to c.\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.bisector-Tuple{HSegment}",
    "page": "Home",
    "title": "HyperbolicPlane.bisector",
    "category": "method",
    "text": "bisector(S::HSegment) yields an HLine that\'s the perpendicular bisector of the segment S. May also be invoked bisector(A,B) where A and B are points.\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.circumference-Tuple{HCircle}",
    "page": "Home",
    "title": "HyperbolicPlane.circumference",
    "category": "method",
    "text": "circumference(C::HCircle) returns the circumference of the circle.\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.collinear-Tuple{HPoint,HPoint,HPoint}",
    "page": "Home",
    "title": "HyperbolicPlane.collinear",
    "category": "method",
    "text": "collinear checks if the arguments are collinear. Arguments are:\n\na,b,c: three points\na,L: point and segment (in either order)\nL,LL: two segments\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.copy_attr-Tuple{HObject,HObject}",
    "page": "Home",
    "title": "HyperbolicPlane.copy_attr",
    "category": "method",
    "text": "copy_attr(A,B) copies the attributes assigned to B into A.\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.endpoints-Tuple{HPolygon}",
    "page": "Home",
    "title": "HyperbolicPlane.endpoints",
    "category": "method",
    "text": "endpoints(X::HPolygon) returns the list of vertices (in order) of the polygon.\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.endpoints-Tuple{HTriangle}",
    "page": "Home",
    "title": "HyperbolicPlane.endpoints",
    "category": "method",
    "text": "endpoints(T::HTriangle) returns the corner points of the triangle.\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.equality_threshold-Tuple{}",
    "page": "Home",
    "title": "HyperbolicPlane.equality_threshold",
    "category": "method",
    "text": "equality_threshold(val) sets the \"sloppiness\" for equality checking. The default value is 100. In general, two objects are equal if their stored values are within val * eps(1.0).\n\nCalling equality_threshold() with no arguments returns the current value.\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.equiangular-Tuple{Int64,Real}",
    "page": "Home",
    "title": "HyperbolicPlane.equiangular",
    "category": "method",
    "text": "equiangular(n,theta) creates a regular n-gon where the vertex angles equal theta\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.equilateral-Tuple{Int64,Real}",
    "page": "Home",
    "title": "HyperbolicPlane.equilateral",
    "category": "method",
    "text": "equilateral(n,s) creates a regular n-gon with side lengths s centered at the origin. First point is on the positive x-axis.\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.get_center-Tuple{HCircle}",
    "page": "Home",
    "title": "HyperbolicPlane.get_center",
    "category": "method",
    "text": "get_center(C::HCircle) returns the center of the circle.\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.get_radius-Tuple{HCircle}",
    "page": "Home",
    "title": "HyperbolicPlane.get_radius",
    "category": "method",
    "text": "get_radius(C::HCircle) returns the radius of the circle.\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.get_vertex-Tuple{HRay}",
    "page": "Home",
    "title": "HyperbolicPlane.get_vertex",
    "category": "method",
    "text": "get_vertex(R::HRay) returns the vertex (end point) of the ray.\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.getz-Tuple{HPoint}",
    "page": "Home",
    "title": "HyperbolicPlane.getz",
    "category": "method",
    "text": "getz(P::HPoint) returns the point (complex number) in the interior of the unit disc that represents P.\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.interior_point-Tuple{HTriangle}",
    "page": "Home",
    "title": "HyperbolicPlane.interior_point",
    "category": "method",
    "text": "interior_point(T::HTriangle) returns a point in the interior of the triangle. The interior point is the intersection of the triangle\'s medians (the centroid).\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.is_simple-Tuple{HPolygon}",
    "page": "Home",
    "title": "HyperbolicPlane.is_simple",
    "category": "method",
    "text": "is_simple(X::HPolygon) determines if the polygon edges do not self-intersect. Be sure the polygon is legit using polygon_check first.\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.meet-Tuple{HLine,HLine}",
    "page": "Home",
    "title": "HyperbolicPlane.meet",
    "category": "method",
    "text": "meet(L,LL) finds a point on lines L and LL or throws an error if they don\'t intersect.  Also for a line and a segment, or two segments.\n\nSee meet_check.\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.meet_check-Tuple{HLine,HLine}",
    "page": "Home",
    "title": "HyperbolicPlane.meet_check",
    "category": "method",
    "text": "meet_check(L::HLine,LL::HLine) determines if two lines intersect. Also for any combination of lines, segments, or rays.\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.midpoint-Tuple{HPoint,HPoint}",
    "page": "Home",
    "title": "HyperbolicPlane.midpoint",
    "category": "method",
    "text": "midpoint(p,q) finds the mid point of the line segment from p to q. Also midpoint(L::HSegment).\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.move2xplus-Tuple{Complex}",
    "page": "Home",
    "title": "HyperbolicPlane.move2xplus",
    "category": "method",
    "text": "move2xplus(P::HPoint) returns an isometry of H^2 that maps P onto the positive real axis.\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.move2xplus-Tuple{HLine}",
    "page": "Home",
    "title": "HyperbolicPlane.move2xplus",
    "category": "method",
    "text": "move2xplus(L::HLine) returns a linear fractional transformation that maps points on L to the positive x-axis but is not an isometry of the hyperbolic plane.\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.move2xplus-Tuple{HPoint,HPoint}",
    "page": "Home",
    "title": "HyperbolicPlane.move2xplus",
    "category": "method",
    "text": "move2xplus(A,B) or move2xplus(L::HSegment) gives an isometry f so that f(A) is 0 and f(B) is on the positive real axis.\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.move2zero-Tuple{Complex}",
    "page": "Home",
    "title": "HyperbolicPlane.move2zero",
    "category": "method",
    "text": "move2zero(P::Hpoint) returns a LFT that\'s an isometry of H^2 that maps P to the origin.\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.npoints-Tuple{HPolygon}",
    "page": "Home",
    "title": "HyperbolicPlane.npoints",
    "category": "method",
    "text": "npoints(X::HPolygon) returns the number of points on the polygon.\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.perimeter-Tuple{HTriangle}",
    "page": "Home",
    "title": "HyperbolicPlane.perimeter",
    "category": "method",
    "text": "perimeter(T::HTriangle) or perimeter(P::HPolygon) returns the perimeter of the figure.\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.perpendicular-Tuple{HLine,HPoint}",
    "page": "Home",
    "title": "HyperbolicPlane.perpendicular",
    "category": "method",
    "text": "perpendicular(L::HLine, P::HPoint) returns a line that is perpendicular to L and contains P.\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.perpendicular-Tuple{HLine}",
    "page": "Home",
    "title": "HyperbolicPlane.perpendicular",
    "category": "method",
    "text": "perpendicular(L) returns an arbitrary line that is perpendicular to L.\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.point_on_line-Tuple{HLine}",
    "page": "Home",
    "title": "HyperbolicPlane.point_on_line",
    "category": "method",
    "text": "point_on_line(L) returns a point on the hyperbolic line L.\n\nSee also: points_on_line.\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.point_on_ray-Tuple{HRay}",
    "page": "Home",
    "title": "HyperbolicPlane.point_on_ray",
    "category": "method",
    "text": "point_on_ray(R::HRay) returns a point in the interior of the ray.\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.points_on_circle-Tuple{HCircle}",
    "page": "Home",
    "title": "HyperbolicPlane.points_on_circle",
    "category": "method",
    "text": "points_on_circle(C::HCircle) returns a 3-tuple of points that lie on the circle C.\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.points_on_line",
    "page": "Home",
    "title": "HyperbolicPlane.points_on_line",
    "category": "function",
    "text": "points_on_line(L,n) returns a list of n distinct points on the line L.\n\nSee also: point_on_line.\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.polar-Tuple{HPoint}",
    "page": "Home",
    "title": "HyperbolicPlane.polar",
    "category": "method",
    "text": "polar(P::HPoint) gives the polar coordinates of P\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.polygon_check",
    "page": "Home",
    "title": "HyperbolicPlane.polygon_check",
    "category": "function",
    "text": "polygon_check(X::HPolygon,quiet=true) checks that the polygon is nondegenerate. Possible degeneracies are:\n\nRepeated vertices\nFewer than three distinct vertices\nAngles that are either 0 degrees or 180 degrees\n\nIf quiet is false, then a reason for the failed check is printed.\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.reflect_across-Tuple{HPoint,Union{HLine, HSegment}}",
    "page": "Home",
    "title": "HyperbolicPlane.reflect_across",
    "category": "method",
    "text": "reflect_across(X::HObject,L::HSegment/HLine) returns the object formed by refecting X across the line segment/lineL`.\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.rotation-Tuple{Real}",
    "page": "Home",
    "title": "HyperbolicPlane.rotation",
    "category": "method",
    "text": "rotation(theta) is an isometry of H^2 corresponding to a rotation about the origin of the amount theta\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.same_side-Tuple{HPoint,HPoint,HLine}",
    "page": "Home",
    "title": "HyperbolicPlane.same_side",
    "category": "method",
    "text": "same_side(P,Q,L) determines if the points P and Q lie in the same (closed) halfplane as determined by L. If either point is on L then the result is true.\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.set_color",
    "page": "Home",
    "title": "HyperbolicPlane.set_color",
    "category": "function",
    "text": "set_color(X,col) sets the color of the hyperbolic object X.\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.set_fill_alpha",
    "page": "Home",
    "title": "HyperbolicPlane.set_fill_alpha",
    "category": "function",
    "text": "set_fill_alpha(X,alpha) sets the alpha value for the object\'s fill. Only works for HPlane and HCircle. Default value is 1 (not transparent)\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.set_fill_color",
    "page": "Home",
    "title": "HyperbolicPlane.set_fill_color",
    "category": "function",
    "text": "set_fill_color(X,col) sets the color used to fill X. Works for HPlane and HCircle. Default is :yellow\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.set_line_style",
    "page": "Home",
    "title": "HyperbolicPlane.set_line_style",
    "category": "function",
    "text": "set_line_style(X,style) sets the line style for drawing X. Default is :solid.\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.set_no_fill-Tuple{Union{HCircle, HPlane, Horocycle}}",
    "page": "Home",
    "title": "HyperbolicPlane.set_no_fill",
    "category": "method",
    "text": "set_no_fill(X) removes fill from the HObject. It now draws as unfilled.\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.set_radius",
    "page": "Home",
    "title": "HyperbolicPlane.set_radius",
    "category": "function",
    "text": "set_radius(P,rad) sets the radius for an HPoint. The default is 1.\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.set_thickness",
    "page": "Home",
    "title": "HyperbolicPlane.set_thickness",
    "category": "function",
    "text": "set_thickness(X,thk) sets the thickness of the line used to draw the hyperbolic object X. Default is 1.\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.sides-Tuple{HPolygon}",
    "page": "Home",
    "title": "HyperbolicPlane.sides",
    "category": "method",
    "text": "sides(P:::HPolygon/HTriangle) returns a list of the line segments that are the sides of the polygon.\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.stab_count-Union{Tuple{T}, Tuple{S}, Tuple{S,Array{T,1}}} where T<:Union{HLine, HRay, HSegment} where S<:Union{HLine, HRay, HSegment}",
    "page": "Home",
    "title": "HyperbolicPlane.stab_count",
    "category": "method",
    "text": "stab_count(R,targets) is used to count how many items in targets are intersected by R where targets is a list of HLinear objects and R is an HLinear.\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.tesselation",
    "page": "Home",
    "title": "HyperbolicPlane.tesselation",
    "category": "function",
    "text": "tesselation(n,k,deep): Tesselate the hyperbolic plane by regular n-gons in which each vertex is a corner of k polygons. deep controls how many layers. The center of the first k-gon is placed at the origin.\n\nMay also be called tesselation(n,k,deep,true) in which case a vertex of the first k-gon is placed at the origin and the tesselation is seeded by copies of this first polygon around the origin.\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.triangulate-Tuple{HPolygon}",
    "page": "Home",
    "title": "HyperbolicPlane.triangulate",
    "category": "method",
    "text": "triangulate(X::HPolygon) returns a list of triangles that triangulate X. The polygon should have at least three sides, and have no bad angles, and not self-intersect.\n\n\n\n\n\n"
},

{
    "location": "#SimpleDrawing.draw-Tuple{HPoint}",
    "page": "Home",
    "title": "SimpleDrawing.draw",
    "category": "method",
    "text": "draw(X) draws the hyperbolic object X in a graphics window.\n\ndraw may be applied to a list of hyperbolic objects.\n\nThe typical sequence of drawing starts by clearing the screen with the plot() function (from the Plots module), then various to calls to draw and then concludes with a call to finish() (see the help message for that function).\n\n\n\n\n\n"
},

{
    "location": "#Base.:--Tuple{HPlane}",
    "page": "Home",
    "title": "Base.:-",
    "category": "method",
    "text": "-X where X is a hyperbolic object is a new object reflected through the origin.\n\n\n\n\n\n"
},

{
    "location": "#Base.adjoint-Tuple{HPlane}",
    "page": "Home",
    "title": "Base.adjoint",
    "category": "method",
    "text": "adjoint(X::HObject) (that is, X\') returns a new X that is reflected across the x-axis.\n\n\n\n\n\n"
},

{
    "location": "#Base.delete!-Tuple{HContainer,HObject}",
    "page": "Home",
    "title": "Base.delete!",
    "category": "method",
    "text": "delete!(C::HContainer, X::HObject) deletes X from the container C returning true if successful (or false if X was not in the container).\n\n\n\n\n\n"
},

{
    "location": "#Base.in-Tuple{HPoint,HPolygon}",
    "page": "Home",
    "title": "Base.in",
    "category": "method",
    "text": "in(p::HPoint, X::HPolygon) determines if the point lies on the boundary or, or is interior to, the polygon. Be sure that polygon_check(X) and is_simple(X) both return true.\n\n\n\n\n\n"
},

{
    "location": "#Base.in-Tuple{HPoint,HRay}",
    "page": "Home",
    "title": "Base.in",
    "category": "method",
    "text": "in(P::HPoint, R::HRay) determine if P lies on the ray R.\n\n\n\n\n\n"
},

{
    "location": "#Base.in-Tuple{HPoint,HTriangle}",
    "page": "Home",
    "title": "Base.in",
    "category": "method",
    "text": "in(P::HPoint, T::HTriangle) determines if P is in the triangle T, either in one of its sides or in its interior.\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane._cycle-Union{Tuple{T}, Tuple{Array{T,1},Int64}} where T",
    "page": "Home",
    "title": "HyperbolicPlane._cycle",
    "category": "method",
    "text": "_cycle(A,k) returns a k-step shift of A. We require k to be in the interval [0,n-1] where n=length(A). No checking is done.\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane._cyclic_equal-Union{Tuple{T}, Tuple{S}, Tuple{Array{S,1},Array{T,1}}} where T where S",
    "page": "Home",
    "title": "HyperbolicPlane._cyclic_equal",
    "category": "method",
    "text": "_cyclic_equal(A,B) checks if some cyclic shift of one list equals the other.\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane._solver-Tuple{Function,Real,Real,Real}",
    "page": "Home",
    "title": "HyperbolicPlane._solver",
    "category": "method",
    "text": "_solver(f,goal,lo,hi) assumes f is increasing on the interval [lo,hi]\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane._solver-Tuple{Function,Real}",
    "page": "Home",
    "title": "HyperbolicPlane._solver",
    "category": "method",
    "text": "_solver(f,goal) assumes that f is increasing and there is a nonnegative x so that f(x)==goal.\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.alt_mod-Tuple{Int64,Int64}",
    "page": "Home",
    "title": "HyperbolicPlane.alt_mod",
    "category": "method",
    "text": "alt_mod(k,n) is mod(k,n) unless the result is zero, in which case we return n.\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.check_diagonal-Tuple{HPolygon,Int64}",
    "page": "Home",
    "title": "HyperbolicPlane.check_diagonal",
    "category": "method",
    "text": "check_diagonal(X::HPolygon, k::Int) checks to see if the diagonal between vertices k-1 and k+1 (a) does not intersect the boundary of X and (b) goes through the interior of X.\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.expander-Tuple{HPolygon}",
    "page": "Home",
    "title": "HyperbolicPlane.expander",
    "category": "method",
    "text": "expander(P::HPolygon) returns a list of polygons formed by reflecting P across each of its sides.\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.find_ear_diagonal-Tuple{HPolygon}",
    "page": "Home",
    "title": "HyperbolicPlane.find_ear_diagonal",
    "category": "method",
    "text": "find_ear_diagonal(X::HPolygon) returns an index k such that the diagonal from k-1 to k+1 passes check_diagonal. Returns 0 if no ear diagonal is found.\n\n\n\n\n\n"
},

{
    "location": "#HyperbolicPlane.solve_dist-Tuple{Real}",
    "page": "Home",
    "title": "HyperbolicPlane.solve_dist",
    "category": "method",
    "text": "solve_dist(d) is the inverse of _dist()\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [HyperbolicPlane]\nOrder = [:type, :function]"
},

]}
