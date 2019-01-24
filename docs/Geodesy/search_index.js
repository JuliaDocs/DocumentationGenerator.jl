var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Geodesy-1",
    "page": "Readme",
    "title": "Geodesy",
    "category": "section",
    "text": "Package Evaluator Build Status\n(Image: 0.5 package tests) (Image: 0.6 package tests) (Image: Linux/macOS) (Image: Windows) (Image: Coverage)Geodesy is a Julia package for working with points in various world and local coordinate systems. The primary feature of Geodesy is to define and perform coordinate transformations in a convenient and safe framework, leveraging the CoordinateTransformations package. Transformations are accurate and efficient and implemented in native Julia code (with many functions being ported from Charles Karney\'s GeographicLib C++ library), and some common geodetic datums are provided for convenience."
},

{
    "location": "#Quick-start-1",
    "page": "Readme",
    "title": "Quick start",
    "category": "section",
    "text": "Lets define a 3D point by its latitude, longitude and altitude (LLA):x_lla = LLA(-27.468937, 153.023628, 0.0) # City Hall, Brisbane, AustraliaThis can be converted to a Cartesian Earth-Centered-Earth-Fixed (ECEF) coordinate simply by calling the constructorx_ecef = ECEF(x_lla, wgs84)Here we have used the WGS-84 ellipsoid to calculate the transformation, but other datums such as osgb36, nad27 and grs80 are provided. All transformations use the CoordinateTransformations\' interface, and the above is short forx_ecef = ECEFfromLLA(wgs84)(x_lla)where ECEFfromLLA is a type inheriting from CoordinateTransformations\' Transformation. (Similar names XfromY exist for each of the coordinate types.)Often, points are measured or required in a local frame, such as the north-east-up coordinates with respect to a given origin. The ENU type represents points in this coordinate system and we may transform between ENU and globally referenced coordinates using ENUfromLLA, etc.origin_lla = LLA(-27.468937, 153.023628, 0.0) # City Hall, Brisbane, Australia\npoint_lla = LLA(-27.465933, 153.025900, 0.0)  # Central Station, Brisbane, Australia\n\n# Define the transformation and execute it\ntrans = ENUfromLLA(origin_lla, wgs84)\npoint_enu = trans(point_lla)\n\n# Equivalently\npoint_enu = ENU(point_enu, point_origin, wgs84)Similarly, we could convert to UTM/UPS coordinates, and two types are provided for this - UTM stores 3D coordinates x, y, and z in an unspecified zone, while UTMZ includes the zone number and hemisphere bool (where true = northern, false = southern). To get the canonical zone for your coordinates, simply use:x_utmz = UTMZ(x_lla, wgs84)If you are transforming a large number of points to or from a given zone, it may be more effective to define the transformation explicitly and use the lighter UTM storage type.points_lla::Vector{LLA{Float64}}\nutm_from_lla = UTMfromLLA(56, false, wgs84) # Zone 56-South\npoints_utm = map(utm_from_lla, points_lla) # A new vector of UTM coordinatesGeodesy becomes particularly powerful when you chain together transformations. For example, you can define a single transformation from your data on disk in UTM coordinates to a local frame in ENU coordinates. Internally, this will perform UTM (+ zone) → LLA → ECEF → ENU via composing transformations with ∘ into a ComposedTransformation:julia> origin = LLA(-27.468937, 153.023628, 0.0) # City Hall, Brisbane, Australia\nLLA(lat=-27.468937°, lon=153.023628°, alt=0.0)\n\njulia> trans = ENUfromUTMZ(origin, wgs84)\n(ENUfromECEF(ECEF(-5.046925124630393e6, 2.5689157252069353e6, -2.924416653602336e6), lat=-27.468937°, lon=153.023628°) ∘ (ECEFfromLLA(wgs84) ∘ LLAfromUTMZ(wgs84)))This transformation can then be composed with rotations and translations in CoordinateTransformations (or your own custom-defined AbstractTransformation to define further reference frames. For example, in this way, a point measured by a scanner on a moving vehicle at a particular time may be globally georeferenced with a single call to the Transformation!Finally, the Cartesian distance between world points can be calculated via automatic transformation to a Cartesian frame:x_lla = LLA(-27.468937, 153.023628, 0.0) # City Hall, Brisbane, Australia\ny_lla = LLA(-27.465933, 153.025900, 0.0) # Central Station, Brisbane, Australia\ndistance(x_lla, y_lla)                   # 401.54 meters(assuming the wgs84 datum, which can be configured in distance(x, y, datum))."
},

{
    "location": "#Basic-Terminology-1",
    "page": "Readme",
    "title": "Basic Terminology",
    "category": "section",
    "text": "This section describes some terminology and concepts that are relevant to Geodesy.jl, attempting to define Geodesy-specific jargon where possible.  For a longer, less technical discussion with more historical context, ICSM\'s Fundamentals of Mapping page is highly recommended."
},

{
    "location": "#Coordinate-Reference-Systems-and-Spatial-Reference-Identifiers-1",
    "page": "Readme",
    "title": "Coordinate Reference Systems and Spatial Reference Identifiers",
    "category": "section",
    "text": "A position on the Earth can be given by some numerical coordinate values, but those don\'t mean much without more information.  The extra information is called the Coordinate Reference System or CRS (also known as a Spatial Reference System or SRS).  A CRS tells you two main things:The measurement procedure: which real world objects were used to define the frame of reference or datum of the measurement?\nThe coordinate system: how do coordinate numerical values relate to the reference frame defined by the datum?The full specification of a CRS can be complex, so a short label called a Spatial Reference IDentifier or SRID is usually used instead.  For example, EPSG:4326 is one way to refer to the 2D WGS84 latitude and longitude you\'d get from a mobile phone GPS device.  An SRID is of the form AUTHORITY:CODE, where the code is a number and the authority is the name of an organization maintaining a list of codes with associated CRS information.  There are services where you can look up a CRS, for example, http://epsg.io is a convenient interface to the SRIDs maintained by the European Petroleum Survey Group (EPSG) authority.  Likewise, http://spatialreference.org is an open registry to which anyone can contribute.When maintaining a spatial database, it\'s typical to define an internal list of SRIDs (effectively making your organization the authority), and a mapping from these to CRS information.  A link back to a definitive SRID from an external authority should also be included where possible."
},

{
    "location": "#Datums-1",
    "page": "Readme",
    "title": "Datums",
    "category": "section",
    "text": "In spatial measurement and positioning, a datum is a set of reference objects and assigned coordinates relative to which other objects may be positioned.  For example, in traditional surveying a datum might comprise a pair of pegs in the ground, separated by a carefully measured distance.  When surveying the position of an unknown but nearby point, the angle back to the original datum objects can be measured using a theodolite.  After this, the relative position of the new point can be computed using simple triangulation. Repeating this trick with any of the now three known points, an entire triangulation network of surveyed objects can be extended outward.  Any point surveyed relative to the network is said to be measured in the datum of the original objects.  Datums are often named with an acronym, for example OSGB36 is the Ordnance Survey of Great Britain, 1936.In the era of satellite geodesy, coordinates are determined for an object by timing signals from a satellite constellation (eg, the GPS satellites) and computing position relative to those satellites.  Where is the datum here? At first glance the situation seems quite different from the traditional setup described above.  However, the satellite positions as a function of time (ephemerides, in the jargon) must themselves be defined relative to some frame. This is done by continuously observing the satellites from a set of highly stable ground stations equipped with GPS receivers. It is the full set of these ground stations and their assigned coordinates which form the datum.Let\'s inspect the flow of positional information in both cases:For traditional surveying,\ndatum object positions -> triangulation network -> newly surveyed point\nFor satellite geodesy,\ndatum object positions -> satellite ephemerides -> newly surveyed pointWe see that the basic nature of a datum is precisely the same regardless of whether we\'re doing a traditional survey or using a GPS receiver."
},

{
    "location": "#Terrestrial-reference-systems-and-frames-1",
    "page": "Readme",
    "title": "Terrestrial reference systems and frames",
    "category": "section",
    "text": "Coordinates for new points are measured by transferring coordinates from the datum objects, as described above.  However, how do we decide on coordinates for the datum objects themselves?  This is purely a matter of convention, consistency and measurement.For example, the International Terrestrial Reference System (ITRS) is a reference system that rotates with the Earth so that the average velocity of the crust is zero. That is, in this reference system the only crust movement is geophysical.  Roughly speaking, the defining conventions for the ITRS are:Space is modeled as a three-dimensional Euclidean affine space.\nThe origin is at the center of mass of the Earth (it is geocentric).\nThe z-axis is the axis of rotation of the Earth.\nThe scale is set to 1 SI meter.\nThe x-axis is orthogonal to the z-axis and aligns with the international reference meridian through Greenwich.\nThe y-axis is set to the cross product of the z and x axes, forming a right handed coordinate frame.\nVarious rates of change of the above must also be specified, for example, the scale should stay constant in time.The precise conventions are defined in chapter 4 of the IERS conventions published by the International Earth Rotation and Reference Service (IERS). These conventions define an ideal reference system, but they\'re useless without physical measurements that give coordinates for a set of real world datum objects.  The process of measuring and computing coordinates for datum objects is called realizing the reference system and the result is called a reference frame.  For example, the International Terrestrial Reference Frame of 2014 (ITRF2014) realizes the ITRS conventions using raw measurement data gathered in the 25 years prior to 2014.To measure and compute coordinates, several space geodesy techniques are used to gather raw measurement data; currently the IERS includes VLBI (very long baseline interferometry) of distant astronomical radio sources, SLR (satellite laser ranging), GPS (global positioning system) and DORIS (gosh these acronyms are tiring). The raw data is not in the form of positions, but must be condensed down in a large scale fitting problem, ideally by requiring physical and statistical consistency of all measurements, tying measurements at different sites together with physical models."
},

{
    "location": "#Coordinate-systems-1",
    "page": "Readme",
    "title": "Coordinate systems",
    "category": "section",
    "text": "In geometry, a coordinate system is a system which uses one or more numbers, or coordinates to uniquely determine the position of a point in a mathematical space such as Euclidean space.  For example, in geodesy a point is commonly referred to using geodetic latitude, longitude and height relative to a given reference ellipsoid; this is called a geodetic coordinate system.An ellipsoid is chosen because it\'s a reasonable model for the shape of the Earth and its gravitational field without being overly complex; it has only a few parameters, and a simple mathematical form.  The term spheroid is also used because the ellipsoids in use today are rotationally symmetric around the pole. Note that there\'s several ways to define latitude on an ellipsoid. The most natural for geodesy is geodetic latitude, used by default because it\'s physically accessible in any location as a good approximation to the angle between the gravity vector and the equatorial plane.  (This type of latitude is not an angle measured at the centre of the ellipsoid, which may be surprising if you\'re used to spherical coordinates!)There are usually several useful coordinate systems for the same space.  As well as the geodetic coordinates mentioned above, it\'s common to seeThe x,y,z components in an Earth-Centred Cartesian coordinate system rotating with the Earth.  This is conventionally called an Earth-Centred Earth-Fixed (ECEF) coordinate system. This is a natural coordinate system in which to define coordinates for the datum objects defining a terrestrial reference frame.\nThe east,north and up ENU components of a Cartesian coordinate frame at a particular point on the ellipsoid.  This coordinate system is useful as a local frame for navigation.\nEasting,northing and vertical components of a projected coordinate system or map projection. There\'s an entire zoo of these, designed to represent the curved surface of an ellipsoid with a flat map.Different coordinates systems provide different coordinates for the same point, so it\'s obviously important to specify exactly which coordinate system you\'re using.  In particular, you should specify which ellipsoid parameters are in use if you deal with latitude and longitude, as in principle you could have more than one ellipsoid.  This is a point of confusion, because a datum in geodesy also comes with a reference ellipsoid as a very strong matter of convention (thus being called a geodetic datum).With its conventional ellipsoid, a geodetic datum also defines a conventional geodetic coordinate system, thus bringing together concepts which are interconnected but conceptually distinct.  To emphasize:A coordinate system is a mathematical abstraction allowing us to manipulate geometric quantities using numeric and algebraic techniques.  By itself, mathematical geometry is pure abstraction without a connection to the physical world.\nA datum is a set of physical objects with associated coordinates, thereby defining a reference frame in a way which is physically accessible.  A datum is the bridge which connects physical reality to the abstract ideal of mathematical geometry, via the algebraic mechanism of a coordinate system."
},

{
    "location": "#The-API-1",
    "page": "Readme",
    "title": "The API",
    "category": "section",
    "text": ""
},

{
    "location": "#Coordinate-types-1",
    "page": "Readme",
    "title": "Coordinate types",
    "category": "section",
    "text": "Geodesy provides several in-built coordinate storage types for convenience and safety. The philosophy is to avoid carrying around raw data in generic containers like Vectors with no concept of what coordinate system it is in."
},

{
    "location": "#LLA{T}-latitude,-longitude-and-altitude-1",
    "page": "Readme",
    "title": "LLA{T} - latitude, longitude and altitude",
    "category": "section",
    "text": "The global LLA type stores data in a lat-lon-alt order, where latitude and longitude are expected in degrees (not radians). A keyword constructor, LLA(lat=x, lon=y, alt=z), is also provided to help with having to remember the storage order."
},

{
    "location": "#LatLon{T}-latitude-and-longitude-1",
    "page": "Readme",
    "title": "LatLon{T} - latitude and longitude",
    "category": "section",
    "text": "The 2D LatLon type stores data in a lat-lon order, where latitude and longitude are expected in degrees (not radians). A keyword constructor, LatLon(lat=x, lon=y), is also provided. LatLon is currently the only supported 2D coordinate."
},

{
    "location": "#ECEF{T}-Earth-centered,-Earth-fixed-1",
    "page": "Readme",
    "title": "ECEF{T} - Earth-centered, Earth-fixed",
    "category": "section",
    "text": "The global ECEF type stores Cartesian coordinates x, y, z, according to the usual convention. Being a Cartesian frame, ECEF is a subtype of StaticArrays\' StaticVector and they can be added and subtracted with themselves and other vectors."
},

{
    "location": "#UTM{T}-universal-transverse-Mercator-1",
    "page": "Readme",
    "title": "UTM{T} - universal transverse-Mercator",
    "category": "section",
    "text": "The UTM type encodes the easting x, northing y and height z of a UTM coordinate in an unspecified zone. This data type is also used to encode universal polar-stereographic (UPS) coordinates (where the zone is 0)."
},

{
    "location": "#UTMZ{T}-universal-transverse-Mercator-zone-1",
    "page": "Readme",
    "title": "UTMZ{T} - universal transverse-Mercator + zone",
    "category": "section",
    "text": "In addition to the easting x, northing y and height z, the global UTMZ type also encodes the UTM zone and hemisphere, where zone is a UInt8 and hemisphere is a Bool for compact storage. The northern hemisphere is denoted as true, and the southern as false. Zone 0 corresponds to the UPS projection about the corresponding pole, otherwise zone is an integer between 1 and 60."
},

{
    "location": "#ENU{T}-east-north-up-1",
    "page": "Readme",
    "title": "ENU{T} - east-north-up",
    "category": "section",
    "text": "The ENU type is a local Cartesian coordinate that encodes a point\'s distance towards east e, towards north n and upwards u with respect to an unspecified origin. Like ECEF, ENU is also a subtype of StaticVector."
},

{
    "location": "#Geodetic-Datums-1",
    "page": "Readme",
    "title": "Geodetic Datums",
    "category": "section",
    "text": "Geodetic datums are modelled as subtypes of the abstract type Datum.  The associated ellipsoid may be obtained by calling the ellipsoid() function, for example, ellipsoid(NAD83()).There are several pre-defined datums.  Worldwide datums includeWGS84 - standard GPS datum for moderate precision work (representing both the latest frame realization, or if time is supplied a discontinuous dynamic datum where time looks up the frame implementation date in the broadcast ephemerides.)\nWGS84{GpsWeek} - specific realizations of the WGS84 frame.\nITRF{Year} - Realizations of the International Terrestrial Reference System for high precision surveying.National datums includeOSGB36 - Ordnance Survey of Great Britain of 1936.\nNAD27, NAD83 - North American Datums of 1927 and 1983, respectively\nGDA94 - Geocentric Datum of Australia, 1994.Datums may also be passed to coordinate transformation constructors such as transverse-Mercator and polar-stereographic projections in which case the associated ellipsoid will be extracted to form the transformation.  For datums without extra parameters (everything except ITRF and WGS84{Week}) there is a standard instance defined to reduce the amount of brackets you have to type. For example, LLAfromECEF(NAD83()) and LLAfromECEF(nad83) are equivalent."
},

{
    "location": "#Transformations-and-conversions-1",
    "page": "Readme",
    "title": "Transformations and conversions",
    "category": "section",
    "text": "Geodesy provides two interfaces changing coordinate systems.\"Transformations\" are based on CoordinateTransformations interface for defining AbstractTransformations and allow the user to apply them by calling them, invert them with inv() and compose them with compose() or ∘. The transformations cache any possible pre-calculations for efficiency when the same transformation is applied to many points.\"Conversions\" are based on type-constructors, obeying simple syntax like LLA(ecef, datum). The datum or other information is always necessary, as no assumptions are made by Geodesy for safety and consistency reasons. Similarly, Base.convert is not defined because, without assumptions, it would require additional information. The main drawback of this approach is that some calculations may not be pre-cached (for instance, the origin of an ENU transformation)."
},

{
    "location": "#Between-LLA-and-ECEF-1",
    "page": "Readme",
    "title": "Between LLA and ECEF",
    "category": "section",
    "text": "The LLAfromECEF and ECEFfromLLA transformations require an ellipsoidal datum to perform the conversion. The exact transformation is performed in both directions, using a port the ECEF → LLA transformation from GeographicLib."
},

{
    "location": "#Between-LLA-and-UTM/UTMZ-1",
    "page": "Readme",
    "title": "Between LLA and UTM/UTMZ",
    "category": "section",
    "text": "The LLAfromUTM(Z) and UTM(Z)fromLLA transformations also require an ellipsoidal datum to perform the conversion. The transformation retains a cache of the parameters used in the transformation, which in the case of the transverse-Mercator projection leads to a significant saving.In all cases zone 0 corresponds to the UPS coordinate system, and the polar-stereographic projection of GeographicLib has been ported to Julia to perform the transformation.An approximate, 6th-order expansion is used by default for the transverse-Mercator projection and its inverse (though orders 4-8 are defined). The algorithm is a native Julia port of that used in GeographicLib, and is accurate to nanometers for up to several UTM zones away from the reference meridian. However, the series expansion diverges at ±90° from the reference meridian. While the UTMZ-methods will automatically choose the canonical zone and hemisphere for the input, extreme care must be taken to choose an appropriate zone for the UTM methods. (In the future, we implement the exact UTM transformation as a fallback — contributions welcome!)There is also UTMfromUTMZ and UTMZfromUTM transformations that are helpful for converting between these two formats and putting data into the same UTM zone."
},

{
    "location": "#To-and-from-local-ENU-frames-1",
    "page": "Readme",
    "title": "To and from local ENU frames",
    "category": "section",
    "text": "The ECEFfromENU and ENUfromECEF transformations define the transformation around a specific origin. Both the origin coordinates as an ECEF as well as its corresponding latitude and longitude are stored in the transformation for maximal efficiency when performing multiple transforms. The transformation can be inverted with inv to perform the reverse transformation with respect to the same origin."
},

{
    "location": "#Composed-transformations-1",
    "page": "Readme",
    "title": "Composed transformations",
    "category": "section",
    "text": "Many other methods are defined as convenience constructors for composed transformations, to go between any two of the coordinate types defined here. These include:ECEFfromUTMZ(datum) = ECEFfromLLA(datum) ∘ LLAfromUTMZ(datum)\nUTMZfromECEF(datum) = UTMZfromLLA(datum) ∘ LLAfromECEF(datum)\nUTMfromECEF(zone, hemisphere, datum) = UTMfromLLA(zone, hemisphere, datum) ∘ LLAfromECEF(datum)\nECEFfromUTM(zone, hemisphere, datum) = ECEFfromLLA(datum) ∘ LLAfromUTM(zone, hemisphere, datum)\nENUfromLLA(origin, datum) = ENUfromECEF(origin, datum) ∘ ECEFfromLLA(datum)\nLLAfromENU(origin, datum) = LLAfromECEF(datum) ∘ ECEFfromENU(origin, datum)\nECEFfromUTMZ(datum) = ECEFfromLLA(datum) ∘ LLAfromUTMZ(datum)\nENUfromUTMZ(origin, datum)  = ENUfromLLA(origin, datum) ∘ LLAfromUTMZ(datum\nUTMZfromENU(origin, datum)  = UTMZfromLLA(datum) ∘ LLAfromENU(origin, datum)\nUTMfromENU(origin, zone, hemisphere, datum) = UTMfromLLA(zone, hemisphere, datum) ∘ LLAfromENU(origin, datum)\nENUfromUTM(origin, zone, hemisphere, datum) = ENUfromLLA(origin, datum) ∘ LLAfromUTM(zone, hemisphere, datum)Constructor-based transforms for these are also provided, such as UTMZ(ecef, datum) which converts to LLA as an intermediary, as above. When converting multiple points to or from the same ENU reference frame, it is recommended to use the transformation-based approach for efficiency. However, the other constructor-based conversions should be similar in speed to their transformation counterparts."
},

{
    "location": "#Distance-1",
    "page": "Readme",
    "title": "Distance",
    "category": "section",
    "text": "Currently, the only defined distance measure is the Cartesian distance, distance(x, y, [datum = wgs84]), which works for all combinations of types for x and y - except that the UTM zone and hemisphere must also be provided for UTM types, as in distance(utm1, utm2, zone, hemisphere, [datum = wgs84]) (the Cartesian distance for UTM types is not approximated, but achieved via conversion to ECEF).This is the only function currently in Geodesy which takes a default datum, and should be relatively accurate for close points where Cartesian distances may be most important. Future work may focus on geodesics and related calculations (contributions welcome!)."
},

{
    "location": "autodocs/#Geodesy.Datum",
    "page": "Docstrings",
    "title": "Geodesy.Datum",
    "category": "type",
    "text": "Abstract type for geodetic datums\n\nA datum is a set of reference objects and assigned coordinates, relative to which other objects may be positioned.  We model these in code with subtypes of Datum.  Each geodetic datum has an associated ellipsoid model of the Earth which is required when transforming between coordinate systems.  The ellipsoid can be accessed with the ellipsoid() function.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Geodesy.ECEF",
    "page": "Docstrings",
    "title": "Geodesy.ECEF",
    "category": "type",
    "text": "ECEF(x, y, z)\n\nEarth-Centered-Earth-Fixed (ECEF) coordinates. A global Cartesian coordinate system rotating with the Earth.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Geodesy.ECEFfromENU",
    "page": "Docstrings",
    "title": "Geodesy.ECEFfromENU",
    "category": "type",
    "text": "ECEFfromENU(origin, datum)\nECEFfromENU(origin::UTM, zone, isnorth, datum)\nECEFfromENU(origin::ECEF, lat, lon)\n\nConstruct a Transformation object to convert from local ENU coordinates centred at origin to global ECEF coodinates. This object pre-caches both the ECEF coordinates and latitude and longitude of the origin for maximal efficiency.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Geodesy.ECEFfromLLA",
    "page": "Docstrings",
    "title": "Geodesy.ECEFfromLLA",
    "category": "type",
    "text": "ECEFfromLLA(ellipsoid_or_datum)\n\nConstruct a Transformation object to convert from LLA coordinates to ECEF coordinates.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Geodesy.ENU",
    "page": "Docstrings",
    "title": "Geodesy.ENU",
    "category": "type",
    "text": "ENU(e, n, u = 0.0)\n\nEast-North-Up (ENU) coordinates. A local Cartesian coordinate system, linearized about a reference point.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Geodesy.ENUfromECEF",
    "page": "Docstrings",
    "title": "Geodesy.ENUfromECEF",
    "category": "type",
    "text": "ENUfromECEF(origin, datum)\nENUfromECEF(origin::UTM, zone, isnorth, datum)\nENUfromECEF(origin::ECEF, lat, lon)\n\nConstruct a Transformation object to convert from global ECEF coordinates to local ENU coordinates centered at the origin. This object pre-caches both the ECEF coordinates and latitude and longitude of the origin for maximal efficiency.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Geodesy.Ellipsoid",
    "page": "Docstrings",
    "title": "Geodesy.Ellipsoid",
    "category": "type",
    "text": "An ellipsoidal representation of the Earth, for converting between LLA and other co-ordinate systems such as ECEF.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Geodesy.GDA94",
    "page": "Docstrings",
    "title": "Geodesy.GDA94",
    "category": "type",
    "text": "GDA94 - Geocentric Datum of Australia, 1994\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Geodesy.ITRF",
    "page": "Docstrings",
    "title": "Geodesy.ITRF",
    "category": "type",
    "text": "ITRF{Year}([epoch])\n\nConstruct an object representing the International Terrestrial Reference Frame for the given Year of realization.  ITRF is the standard high accuracy terrestrial reference frame for worldwide use.  An optional epoch parameter defines the time of interest - typically a date at which coordinates were measured, using, eg a GPS device.  Without the epoch parameter, the resulting ITRF{Year} object represents the full dynamic datum.\n\nA realization is created every few years by computing the position of a large set of ground control stations from satellite and celestial measurements.  The Year parameter represents the last year from which data was used in the frame processing regression problem.  A list of recent realizations is available at http://itrf.ensg.ign.fr/ITRF_solutions; as of 2016-07 valid Years were 2014 2008 2005 2000 1997 1996 1994 1993 1992 1991 1990 1989 1988.\n\nSee http://itrf.ensg.ign.fr/general.php for a technical overview.  Useful technical papers:\n\n\"IERS Conventions (2010)\", Petit and Luzum (eds.), IERS Technical note No.36,  Chapter 4, https://www.iers.org/IERS/EN/Publications/TechnicalNotes/tn36.html\n\"ITRF2008: an improved solution of the international terrestrial reference  frame\", Altamimi et al., J. Geodesy (2011) 85: 457,  http://dx.doi.org/10.1007/s00190-011-0444-4\n\"IGS08: the IGS realization of ITRF2008\", Rebischung et al., GPS Solutions  (2012) 16: 483, http://dx.doi.org/10.1007/s10291-011-0248-2,  ftp://igs.org/pub/resource/pubs/IGS08TheIGSRealizationof_ITRF2008.pdf\n\"The IGS contribution to ITRF2014\", Rebischung et al., J. Geodesy (2016) 90:  611, http://dx.doi.org/10.1007/s00190-016-0897-6\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Geodesy.LLA",
    "page": "Docstrings",
    "title": "Geodesy.LLA",
    "category": "type",
    "text": "LLA(lat, lon, alt = 0.0)\nLLA(lat = ϕ, lon = Θ, alt = h)\n\nLatitude, longitude, and alititude co-ordinates. Note: assumes degrees not radians\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Geodesy.LLAfromECEF-Tuple{Ellipsoid}",
    "page": "Docstrings",
    "title": "Geodesy.LLAfromECEF",
    "category": "method",
    "text": "LLAfromECEF(ellipsoid)\n\nConstruct a Transformation object to convert from ECEF coordinates to LLA coordinates. Pre-caches ellipsoidal parameters for efficiency.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Geodesy.LLAfromUTM",
    "page": "Docstrings",
    "title": "Geodesy.LLAfromUTM",
    "category": "type",
    "text": "LLAfromUTM(zone, isnorth::Bool, datum)\n\nConstruct a Transformation object to convert from UTM coordinates in the specified zone and hemisphere (isnorth = true or false) to global LLA coordinates. Pre-caches ellipsoidal parameters for efficiency and performs Charles Karney\'s accurate 6th-order series expansion algorithm.\n\n(See also LLAfromUTMZ)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Geodesy.LLAfromUTMZ",
    "page": "Docstrings",
    "title": "Geodesy.LLAfromUTMZ",
    "category": "type",
    "text": "LLAfromUTMZ(datum)\n\nConstruct a Transformation object to convert from global UTMZ coordinates to global LLA coordinates. Pre-caches ellipsoidal parameters for efficiency and performs Charles Karney\'s accurate 6th-order series expansion algorithm.\n\n(See also LLAfromUTM)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Geodesy.LatLon",
    "page": "Docstrings",
    "title": "Geodesy.LatLon",
    "category": "type",
    "text": "LatLon(lat, lon)\nLatLon(lat = ϕ, lon = Θ)\n\nLatitude and longitude co-ordinates. Note: assumes degrees not radians\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Geodesy.NAD27",
    "page": "Docstrings",
    "title": "Geodesy.NAD27",
    "category": "type",
    "text": "NAD27 - North American Datum of 1927\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Geodesy.NAD83",
    "page": "Docstrings",
    "title": "Geodesy.NAD83",
    "category": "type",
    "text": "NAD83 - North American Datum of 1983\n\nFor technical details, see \"NAD83 (NSRS2007) National Readjustment Final Report\" http://www.ngs.noaa.gov/PUBS_LIB/NSRS2007/NOAATRNOSNGS60.pdf\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Geodesy.OSGB36",
    "page": "Docstrings",
    "title": "Geodesy.OSGB36",
    "category": "type",
    "text": "OSGB36 - Datum for Ordinance Survey of Great Britain, 1936\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Geodesy.UTM",
    "page": "Docstrings",
    "title": "Geodesy.UTM",
    "category": "type",
    "text": "UTM(x, y, z = 0.0)\n\nUniversal transverse Mercator (UTM) coordinates. Common projection type for world points. Zone not included in coordinates - it is a parameterized in the relavant transformations UTMfromLLA and LLAfromUTM (see also the UTMZ type).\n\nThis type may be used to parameterize UPS coordinates (Universal Polar Stereographic) to accurately represent the polar regions, in zone \"0\".\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Geodesy.UTMZ",
    "page": "Docstrings",
    "title": "Geodesy.UTMZ",
    "category": "type",
    "text": "UTMZ(x, y, z = 0.0, zone::Integer, hemisphere::Bool)\n\nUniversal transverse Mercator (UTM) coordinates with zone number. Common projection type for world points. The UTM zone is included in coordinates (see also the UTM type).\n\nThis type may be used to parameterize UPS coordinates (Universal Polar Stereographic) to accurately represent the polar regions, in zone \"0\".\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Geodesy.UTMZfromLLA",
    "page": "Docstrings",
    "title": "Geodesy.UTMZfromLLA",
    "category": "type",
    "text": "UTMZfromLLA(datum)\n\nConstruct a Transformation object to convert from global LLA coordinates to global UTMZ coordinates. The zone and hemisphere is automatically calculated following the standard definitions (including exceptions in Norway). Pre-caches ellipsoidal parameters for efficiency and performs Charles Karney\'s accurate 6th-order series expansion algorithm.\n\n(See also UTMfromLLA)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Geodesy.UTMZfromUTM",
    "page": "Docstrings",
    "title": "Geodesy.UTMZfromUTM",
    "category": "type",
    "text": "UTMZfromUTM(zone, isnorth, datum)\n\nTransformation to append the UTM/UPS zone and hemisphere to a raw UTM data point.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Geodesy.UTMfromLLA",
    "page": "Docstrings",
    "title": "Geodesy.UTMfromLLA",
    "category": "type",
    "text": "UTMfromLLA(zone, isnorth::Bool, datum)\n\nConstruct a Transformation object to convert from global LLA coordinates to UTM coordinates in the specified zone and hemisphere (isnorth = true or false). Pre-caches ellipsoidal parameters for efficiency and performs Charles Karney\'s accurate 6th-order series expansion algorithm.\n\n(See also UTMZfromLLA)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Geodesy.UTMfromUTMZ",
    "page": "Docstrings",
    "title": "Geodesy.UTMfromUTMZ",
    "category": "type",
    "text": "UTMfromUTMZ(zone, isnorth, datum)\n\nTransformation to remove the zone and hemisphere from UTMZ data point, and automatically convert the data to the specified zone if necessary.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Geodesy.WGS84",
    "page": "Docstrings",
    "title": "Geodesy.WGS84",
    "category": "type",
    "text": "WGS84()\n\nConstruct an object representing the World Geodetic System of 1984, as a dynamic datum - see below for gory details about specific WGS84 frames).\n\nIf you\'re getting positions from a consumer GPS device, you\'re probably going to have WGS84 by default because it\'s the datum in which GPS satellites broadcast their position (\"broadcast ephemerides\").  Note however that many devices can also provide position in a national datum, so you should check your device settings to be sure.\n\nAs a special case for low accuracy work (worse than a meter or so), WGS84 will assume that coordinates supplied without a capture time are in the latest frame realization known to Geodesy.jl, WGS84 (G1762). Note that this may not be correct if you\'re processing historical data, or Geodesy.jl itself is out of date.  For higher accuracy, you should supply a date of capture - either with each coordinate, or explicitly using the GpsWeek parameter to the WGS84 type:\n\nWGS84{GpsWeek}()\n\nConstruct an object representing the static WGS84 datum computed using data gathered prior to the given GpsWeek.  WGS84 is maintained and updated by the US National Geospatial-Intelligence-Agency (NGA) at irregular intervals to align with the ITRF to within 0.1m (see [1]); if you care about accuracy at that level, you probably want to be solving for position in a different datum, for example, ITRF.  As of 2016, GpsWeek should be one out of [0, 730, 873, 1150, 1674, 1762].\n\nNote that the dates of implementation of these frames as broadcast by the satellites are not the same as the associated GPS week - see Ref. [1], table 2.1.  (TODO: Perhaps Geodesy should have a table to figure out which frame to use at a given date?  Does anybody care?)\n\n\"World Geodetic System 1984\", NGA standard NGA.STND.00361.0.0WGS84, 2014-07-08, http://earth-info.nga.mil/GandG/publications/NGASTND0036100WGS84/NGA.STND.00361.0.0WGS84.pdf\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Geodesy.ECEFfromUTM-Tuple{Any,Any,Any}",
    "page": "Docstrings",
    "title": "Geodesy.ECEFfromUTM",
    "category": "method",
    "text": "ECEFfromUTM(zone, isnorth, datum)\n\nCreates composite transformation ECEFfromLLA(datum) ∘ LLAfromUTM(zone, isnorth, datum).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Geodesy.ECEFfromUTMZ-Tuple{Any}",
    "page": "Docstrings",
    "title": "Geodesy.ECEFfromUTMZ",
    "category": "method",
    "text": "ECEFfromUTMZ(datum)\n\nCreates composite transformation ECEFfromLLA(datum) ∘ LLAfromUTMZ(datum).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Geodesy.ENUfromLLA-Tuple{Any,Any}",
    "page": "Docstrings",
    "title": "Geodesy.ENUfromLLA",
    "category": "method",
    "text": "ENUfromLLA(origin, datum)\n\nCreates composite transformation ENUfromECEF(origin, datum) ∘ ECEFfromLLA(datum).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Geodesy.ENUfromUTM-Tuple{Any,Integer,Bool,Any}",
    "page": "Docstrings",
    "title": "Geodesy.ENUfromUTM",
    "category": "method",
    "text": "ENUfromUTM(origin, zone, isnorth, datum)\n\nCreates composite transformation UTMfromLLA(zone, isnorth, datum) ∘ LLAfromENU(origin, datum). If origin is a UTM point, then it is assumed it is in the given specified zone and hemisphere.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Geodesy.ENUfromUTMZ-Tuple{Any,Any}",
    "page": "Docstrings",
    "title": "Geodesy.ENUfromUTMZ",
    "category": "method",
    "text": "ENUfromUTMZ(origin, datum)\n\nCreates composite transformation ENUfromLLA(origin, datum) ∘ LLAfromUTMZ(datum).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Geodesy.LLAfromENU-Tuple{Any,Any}",
    "page": "Docstrings",
    "title": "Geodesy.LLAfromENU",
    "category": "method",
    "text": "LLAfromENU(origin, datum)\n\nCreates composite transformation LLAfromECEF(datum) ∘ ECEFfromENU(origin, datum).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Geodesy.UTMZfromECEF-Tuple{Any}",
    "page": "Docstrings",
    "title": "Geodesy.UTMZfromECEF",
    "category": "method",
    "text": "UTMZfromECEF(datum)\n\nCreates composite transformation UTMZfromLLA(datum) ∘ LLAfromECEF(datum).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Geodesy.UTMZfromENU-Tuple{Any,Any}",
    "page": "Docstrings",
    "title": "Geodesy.UTMZfromENU",
    "category": "method",
    "text": "UTMZfromENU(origin, datum)\n\nCreates composite transformation UTMZfromLLA(datum) ∘ LLAfromENU(origin, datum).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Geodesy.UTMfromECEF-Tuple{Any,Any,Any}",
    "page": "Docstrings",
    "title": "Geodesy.UTMfromECEF",
    "category": "method",
    "text": "UTMfromECEF(zone, isnorth, datum)\n\nCreates composite transformation UTMfromLLA(zone, isnorth, datum) ∘ LLAfromECEF(datum).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Geodesy.UTMfromENU-Tuple{Any,Integer,Bool,Any}",
    "page": "Docstrings",
    "title": "Geodesy.UTMfromENU",
    "category": "method",
    "text": "UTMfromENU(origin, zone, isnorth, datum)\n\nCreates composite transformation UTMfromLLA(zone, isnorth, datum) ∘ LLAfromENU(origin, datum). If origin is a UTM point, then it is assumed it is in the given specified zone and hemisphere.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Geodesy.datum_shift_ECEF-Tuple{Any,Any}",
    "page": "Docstrings",
    "title": "Geodesy.datum_shift_ECEF",
    "category": "method",
    "text": "datum_shift_ECEF(dest_datum, source_datum)\n\nReturn a transformation object which transforms ECEF points from source_datum to dest_datum.  The function should attempt to supply the current publicly accepted best estimate.\n\nNote that the best known version of a datum transformation will inherently improve with time (see below), so we cannot simultaneously guarantee that:\n\nWe return the best publicly accepted version of a datum shift.\nWe return the same thing in future versions of Geodesy.jl.\n\nThis function will attempt to satisfy condition 1. rather than 2.; if you want a stable version of a transformation you should use one of the lower level functions, for example, GDA94_from_ITRF_Dawson2010().\n\nImportant note about accuracy\n\nIf you care about accuracy, you should always store long term archival data in the source datum where possible, along with metadata defining the full datum and coordinate system in use.  The time to do a datum shift is when you want to compare information from two different datums.\n\nWhy all this bother about inaccuracy? The errors are twofold: First, the parameters of a datum shift come from a physical measurement process. Typically this involves measuring the coordinates of some physical locations in both datums, and a physical measurement procedure is always subject to some inaccuracy. Second, these tie points are used to infer a compact representation of the datum shift, with as few numerical parameters as possible. A small number of parameters will result in an overly smooth representation; this modelling error is a second source of inaccuracy.  Both these errors can be reduced if you choose to measure more tie points or improve the complexity of the numerical model at a future date.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Geodesy.distance",
    "page": "Docstrings",
    "title": "Geodesy.distance",
    "category": "function",
    "text": "distance(utm1, utm2, zone, isnorth, [datum = wgs84])\ndistance(a, utm2, zone, isnorth, [datum = wgs84])\ndistance(utm1, b, zone, isnorth, [datum = wgs84])\n\nIf one or both points are UTM, we need the zone (and particularly the hemisphere, isnorth = true/false) to determine the Cartesian distance.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Geodesy.distance-Union{Tuple{T}, Tuple{T,T}} where T<:(AbstractArray{T,1} where T)",
    "page": "Docstrings",
    "title": "Geodesy.distance",
    "category": "method",
    "text": "distance(a, b, [datum = wgs84])\n\nThe Cartesian distance between points a and b. Uses datum to perform transformations as necessary, and unlike other Geodesy functions, this defaults to use the common WGS-84 datum for convenience.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Geodesy.utm_zone-Union{Tuple{T}, Tuple{T,T}} where T",
    "page": "Docstrings",
    "title": "Geodesy.utm_zone",
    "category": "method",
    "text": "(zone, isnorth) = utm_zone(lat, lon)\n(zone, isnorth) = utm_zone(ll::LatLon)\n(zone, isnorth) = utm_zone(lla::LLA)\n(zone, isnorth) = utm_zone(ecef::ECEF, datum)\n\nFind the UTM zone and hemisphere (isnorth = true or false) for the given latitude and longitude (or world point), including the special rules for Norway and Svalbard. Zone 0 corresponds to the poles, using the UPS regions.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Geodesy.TransverseMercator",
    "page": "Docstrings",
    "title": "Geodesy.TransverseMercator",
    "category": "type",
    "text": "immutable TransverseMercator{MaxPow}\nTransverseMercator(datum)\nTransverseMercator(ellipsoid)\nTransverseMercator(a, f, [::Type{Val{MaxPow}} = Val{6}])\n\nCache of ellipsoidal calculations necessary for transverse-Mercator and polar-stereographic transformations. Series expansion coefficients up to order MaxPow (between 4 and 8, default 6) are calculated and stored for fast transverse-Mercator and UTM calculations.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Geodesy.AngNormalize-Tuple{Number}",
    "page": "Docstrings",
    "title": "Geodesy.AngNormalize",
    "category": "method",
    "text": "%AngNormalize:  Reduce angle to range [-180, 180) % %   x = AngNormalize(x) reduces angles to the range [-180, 180).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Geodesy.GDA94_from_ITRF_Dawson2010-Tuple{Any,Any}",
    "page": "Docstrings",
    "title": "Geodesy.GDA94_from_ITRF_Dawson2010",
    "category": "method",
    "text": "GDA94_from_ITRF_Dawson2010(ITRF_year, epoch)\n\nReturn a Transformation converting ECEF points from a given ITRF to GDA94. Datum shift parameters are taken from [1], supporting ITRF_year 2008, 2005, 2000, 1997, 1996.  epoch is the Date (or DateTime) of interest at which the input ECEF coordinates to the transformation were measured in ITRF.\n\n[1] J. Dawson and A. Woods, \"ITRF to GDA94 coordinate transforms\",     Journal of Applied Geodesy, 4, p. 189 (2010).\n\nTODO: We don\'t yet support epoch varying per input point, but there should be a Transformation object for this at some stage.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Geodesy.LatFix-Tuple{Number}",
    "page": "Docstrings",
    "title": "Geodesy.LatFix",
    "category": "method",
    "text": "LatFix(x) returns x is it is in the range [-90, 90]; otherwise it returns NaN.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Geodesy.eatanhe-Tuple{Any,Any}",
    "page": "Docstrings",
    "title": "Geodesy.eatanhe",
    "category": "method",
    "text": "eatanhe(x, e2) returns eatanh(ex) where e = sqrt(e2) e2 is a scalar; x can be any shape.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Geodesy.polarst_fwd-Tuple{Bool,Float64,Geodesy.TransverseMercator,Any,Any}",
    "page": "Docstrings",
    "title": "Geodesy.polarst_fwd",
    "category": "method",
    "text": "(x, y, gamma, k) = polarst_fwd(northpole::Bool, k0::Float64, tm::TransverseMercator, lat, lon)\n\nPerform polar-stereographic projection of lat and lon with respect to north or south pole northpole and horizontal scaling k0 (= 0.994 for UPS). γ and k are the local convergence and scaling factors, respectively.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Geodesy.polarst_inv-Tuple{Bool,Float64,Geodesy.TransverseMercator,Any,Any}",
    "page": "Docstrings",
    "title": "Geodesy.polarst_inv",
    "category": "method",
    "text": "(lat, lon, gamma, k) = polarst_inv(northp::Bool, k0::Float64, tm::TransverseMercator, x, y)\n\nInvert polar-stereographic projection of x and y with respect to north or south pole northpole and horizontal scaling k0 (= 0.994 for UPS). γ and k are the local convergence and scaling factors, respectively.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Geodesy.polyval-Tuple{Any,Any}",
    "page": "Docstrings",
    "title": "Geodesy.polyval",
    "category": "method",
    "text": "Evaluate polynomial with coefficients p[i] at x\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Geodesy.tauf-Tuple{Any,Any}",
    "page": "Docstrings",
    "title": "Geodesy.tauf",
    "category": "method",
    "text": "%TAUF   tan(phi) % %   TAUF(taup, e2) returns tangent of phi in terms of taup the tangent of %   chi.  e2, the square of the eccentricity, is a scalar; taup can be any %   shape.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Geodesy.taupf-Tuple{Any,Any}",
    "page": "Docstrings",
    "title": "Geodesy.taupf",
    "category": "method",
    "text": "taupf(tau, e2) returns tangent of chi in terms of tau the tangent of phi.  e2, the square of the eccentricity, is a scalar; tau can be any shape.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Geodesy.transverse_mercator_forward-Union{Tuple{MaxPow}, Tuple{Any,Any,Any,Any,TransverseMercator{MaxPow}}} where MaxPow",
    "page": "Docstrings",
    "title": "Geodesy.transverse_mercator_forward",
    "category": "method",
    "text": "(x, y, γ, k) = transverse_mercator_forward(lon0, lat, lon, k0, tm::TransverseMercator)\n\nPerform transverse-Mercator projection of lat and lon with respect to reference meridian lat0 and horizontal scaling k0 (= 0.9996 for UTM) using a series expansion approach (see TransverseMercator). γ and k are the local convergence and scaling factors, respectively.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Geodesy.transverse_mercator_reverse-Union{Tuple{MaxPow}, Tuple{Any,Any,Any,Any,TransverseMercator{MaxPow}}} where MaxPow",
    "page": "Docstrings",
    "title": "Geodesy.transverse_mercator_reverse",
    "category": "method",
    "text": "(lat, lon, γ, k) = transverse_mercator_reverse(lon0, x, y, k0, tm::TransverseMercator)\n\nInvert transverse-Mercator projection of x and y with respect to reference meridian lat0 and horizontal scaling k0 (= 0.9996 for UTM) using a series expansion approach (see TransverseMercator). γ and k are the local convergence and scaling factors, respectively.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Geodesy.utm_meridian-Tuple{Integer}",
    "page": "Docstrings",
    "title": "Geodesy.utm_meridian",
    "category": "method",
    "text": "utm_meridian(zone)\n\nCentral meridian of the given UTM zone (note - does not include the conventiional 500km false easting offset).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Geodesy]\nOrder = [:type, :function]"
},

]}
