var documenterSearchIndex = {"docs": [

{
    "location": "#Geodesy.Datum",
    "page": "Home",
    "title": "Geodesy.Datum",
    "category": "type",
    "text": "Abstract type for geodetic datums\n\nA datum is a set of reference objects and assigned coordinates, relative to which other objects may be positioned.  We model these in code with subtypes of Datum.  Each geodetic datum has an associated ellipsoid model of the Earth which is required when transforming between coordinate systems.  The ellipsoid can be accessed with the ellipsoid() function.\n\n\n\n\n\n"
},

{
    "location": "#Geodesy.ECEF",
    "page": "Home",
    "title": "Geodesy.ECEF",
    "category": "type",
    "text": "ECEF(x, y, z)\n\nEarth-Centered-Earth-Fixed (ECEF) coordinates. A global Cartesian coordinate system rotating with the Earth.\n\n\n\n\n\n"
},

{
    "location": "#Geodesy.ECEFfromENU",
    "page": "Home",
    "title": "Geodesy.ECEFfromENU",
    "category": "type",
    "text": "ECEFfromENU(origin, datum)\nECEFfromENU(origin::UTM, zone, isnorth, datum)\nECEFfromENU(origin::ECEF, lat, lon)\n\nConstruct a Transformation object to convert from local ENU coordinates centred at origin to global ECEF coodinates. This object pre-caches both the ECEF coordinates and latitude and longitude of the origin for maximal efficiency.\n\n\n\n\n\n"
},

{
    "location": "#Geodesy.ECEFfromLLA",
    "page": "Home",
    "title": "Geodesy.ECEFfromLLA",
    "category": "type",
    "text": "ECEFfromLLA(ellipsoid_or_datum)\n\nConstruct a Transformation object to convert from LLA coordinates to ECEF coordinates.\n\n\n\n\n\n"
},

{
    "location": "#Geodesy.ENU",
    "page": "Home",
    "title": "Geodesy.ENU",
    "category": "type",
    "text": "ENU(e, n, u = 0.0)\n\nEast-North-Up (ENU) coordinates. A local Cartesian coordinate system, linearized about a reference point.\n\n\n\n\n\n"
},

{
    "location": "#Geodesy.ENUfromECEF",
    "page": "Home",
    "title": "Geodesy.ENUfromECEF",
    "category": "type",
    "text": "ENUfromECEF(origin, datum)\nENUfromECEF(origin::UTM, zone, isnorth, datum)\nENUfromECEF(origin::ECEF, lat, lon)\n\nConstruct a Transformation object to convert from global ECEF coordinates to local ENU coordinates centered at the origin. This object pre-caches both the ECEF coordinates and latitude and longitude of the origin for maximal efficiency.\n\n\n\n\n\n"
},

{
    "location": "#Geodesy.Ellipsoid",
    "page": "Home",
    "title": "Geodesy.Ellipsoid",
    "category": "type",
    "text": "An ellipsoidal representation of the Earth, for converting between LLA and other co-ordinate systems such as ECEF.\n\n\n\n\n\n"
},

{
    "location": "#Geodesy.GDA94",
    "page": "Home",
    "title": "Geodesy.GDA94",
    "category": "type",
    "text": "GDA94 - Geocentric Datum of Australia, 1994\n\n\n\n\n\n"
},

{
    "location": "#Geodesy.ITRF",
    "page": "Home",
    "title": "Geodesy.ITRF",
    "category": "type",
    "text": "ITRF{Year}([epoch])\n\nConstruct an object representing the International Terrestrial Reference Frame for the given Year of realization.  ITRF is the standard high accuracy terrestrial reference frame for worldwide use.  An optional epoch parameter defines the time of interest - typically a date at which coordinates were measured, using, eg a GPS device.  Without the epoch parameter, the resulting ITRF{Year} object represents the full dynamic datum.\n\nA realization is created every few years by computing the position of a large set of ground control stations from satellite and celestial measurements.  The Year parameter represents the last year from which data was used in the frame processing regression problem.  A list of recent realizations is available at http://itrf.ensg.ign.fr/ITRF_solutions; as of 2016-07 valid Years were 2014 2008 2005 2000 1997 1996 1994 1993 1992 1991 1990 1989 1988.\n\nSee http://itrf.ensg.ign.fr/general.php for a technical overview.  Useful technical papers:\n\n\"IERS Conventions (2010)\", Petit and Luzum (eds.), IERS Technical note No.36,  Chapter 4, https://www.iers.org/IERS/EN/Publications/TechnicalNotes/tn36.html\n\"ITRF2008: an improved solution of the international terrestrial reference  frame\", Altamimi et al., J. Geodesy (2011) 85: 457,  http://dx.doi.org/10.1007/s00190-011-0444-4\n\"IGS08: the IGS realization of ITRF2008\", Rebischung et al., GPS Solutions  (2012) 16: 483, http://dx.doi.org/10.1007/s10291-011-0248-2,  ftp://igs.org/pub/resource/pubs/IGS08TheIGSRealizationof_ITRF2008.pdf\n\"The IGS contribution to ITRF2014\", Rebischung et al., J. Geodesy (2016) 90:  611, http://dx.doi.org/10.1007/s00190-016-0897-6\n\n\n\n\n\n"
},

{
    "location": "#Geodesy.LLA",
    "page": "Home",
    "title": "Geodesy.LLA",
    "category": "type",
    "text": "LLA(lat, lon, alt = 0.0)\nLLA(lat = ϕ, lon = Θ, alt = h)\n\nLatitude, longitude, and alititude co-ordinates. Note: assumes degrees not radians\n\n\n\n\n\n"
},

{
    "location": "#Geodesy.LLAfromECEF-Tuple{Ellipsoid}",
    "page": "Home",
    "title": "Geodesy.LLAfromECEF",
    "category": "method",
    "text": "LLAfromECEF(ellipsoid)\n\nConstruct a Transformation object to convert from ECEF coordinates to LLA coordinates. Pre-caches ellipsoidal parameters for efficiency.\n\n\n\n\n\n"
},

{
    "location": "#Geodesy.LLAfromUTM",
    "page": "Home",
    "title": "Geodesy.LLAfromUTM",
    "category": "type",
    "text": "LLAfromUTM(zone, isnorth::Bool, datum)\n\nConstruct a Transformation object to convert from UTM coordinates in the specified zone and hemisphere (isnorth = true or false) to global LLA coordinates. Pre-caches ellipsoidal parameters for efficiency and performs Charles Karney\'s accurate 6th-order series expansion algorithm.\n\n(See also LLAfromUTMZ)\n\n\n\n\n\n"
},

{
    "location": "#Geodesy.LLAfromUTMZ",
    "page": "Home",
    "title": "Geodesy.LLAfromUTMZ",
    "category": "type",
    "text": "LLAfromUTMZ(datum)\n\nConstruct a Transformation object to convert from global UTMZ coordinates to global LLA coordinates. Pre-caches ellipsoidal parameters for efficiency and performs Charles Karney\'s accurate 6th-order series expansion algorithm.\n\n(See also LLAfromUTM)\n\n\n\n\n\n"
},

{
    "location": "#Geodesy.LatLon",
    "page": "Home",
    "title": "Geodesy.LatLon",
    "category": "type",
    "text": "LatLon(lat, lon)\nLatLon(lat = ϕ, lon = Θ)\n\nLatitude and longitude co-ordinates. Note: assumes degrees not radians\n\n\n\n\n\n"
},

{
    "location": "#Geodesy.NAD27",
    "page": "Home",
    "title": "Geodesy.NAD27",
    "category": "type",
    "text": "NAD27 - North American Datum of 1927\n\n\n\n\n\n"
},

{
    "location": "#Geodesy.NAD83",
    "page": "Home",
    "title": "Geodesy.NAD83",
    "category": "type",
    "text": "NAD83 - North American Datum of 1983\n\nFor technical details, see \"NAD83 (NSRS2007) National Readjustment Final Report\" http://www.ngs.noaa.gov/PUBS_LIB/NSRS2007/NOAATRNOSNGS60.pdf\n\n\n\n\n\n"
},

{
    "location": "#Geodesy.OSGB36",
    "page": "Home",
    "title": "Geodesy.OSGB36",
    "category": "type",
    "text": "OSGB36 - Datum for Ordinance Survey of Great Britain, 1936\n\n\n\n\n\n"
},

{
    "location": "#Geodesy.UTM",
    "page": "Home",
    "title": "Geodesy.UTM",
    "category": "type",
    "text": "UTM(x, y, z = 0.0)\n\nUniversal transverse Mercator (UTM) coordinates. Common projection type for world points. Zone not included in coordinates - it is a parameterized in the relavant transformations UTMfromLLA and LLAfromUTM (see also the UTMZ type).\n\nThis type may be used to parameterize UPS coordinates (Universal Polar Stereographic) to accurately represent the polar regions, in zone \"0\".\n\n\n\n\n\n"
},

{
    "location": "#Geodesy.UTMZ",
    "page": "Home",
    "title": "Geodesy.UTMZ",
    "category": "type",
    "text": "UTMZ(x, y, z = 0.0, zone::Integer, hemisphere::Bool)\n\nUniversal transverse Mercator (UTM) coordinates with zone number. Common projection type for world points. The UTM zone is included in coordinates (see also the UTM type).\n\nThis type may be used to parameterize UPS coordinates (Universal Polar Stereographic) to accurately represent the polar regions, in zone \"0\".\n\n\n\n\n\n"
},

{
    "location": "#Geodesy.UTMZfromLLA",
    "page": "Home",
    "title": "Geodesy.UTMZfromLLA",
    "category": "type",
    "text": "UTMZfromLLA(datum)\n\nConstruct a Transformation object to convert from global LLA coordinates to global UTMZ coordinates. The zone and hemisphere is automatically calculated following the standard definitions (including exceptions in Norway). Pre-caches ellipsoidal parameters for efficiency and performs Charles Karney\'s accurate 6th-order series expansion algorithm.\n\n(See also UTMfromLLA)\n\n\n\n\n\n"
},

{
    "location": "#Geodesy.UTMZfromUTM",
    "page": "Home",
    "title": "Geodesy.UTMZfromUTM",
    "category": "type",
    "text": "UTMZfromUTM(zone, isnorth, datum)\n\nTransformation to append the UTM/UPS zone and hemisphere to a raw UTM data point.\n\n\n\n\n\n"
},

{
    "location": "#Geodesy.UTMfromLLA",
    "page": "Home",
    "title": "Geodesy.UTMfromLLA",
    "category": "type",
    "text": "UTMfromLLA(zone, isnorth::Bool, datum)\n\nConstruct a Transformation object to convert from global LLA coordinates to UTM coordinates in the specified zone and hemisphere (isnorth = true or false). Pre-caches ellipsoidal parameters for efficiency and performs Charles Karney\'s accurate 6th-order series expansion algorithm.\n\n(See also UTMZfromLLA)\n\n\n\n\n\n"
},

{
    "location": "#Geodesy.UTMfromUTMZ",
    "page": "Home",
    "title": "Geodesy.UTMfromUTMZ",
    "category": "type",
    "text": "UTMfromUTMZ(zone, isnorth, datum)\n\nTransformation to remove the zone and hemisphere from UTMZ data point, and automatically convert the data to the specified zone if necessary.\n\n\n\n\n\n"
},

{
    "location": "#Geodesy.WGS84",
    "page": "Home",
    "title": "Geodesy.WGS84",
    "category": "type",
    "text": "WGS84()\n\nConstruct an object representing the World Geodetic System of 1984, as a dynamic datum - see below for gory details about specific WGS84 frames).\n\nIf you\'re getting positions from a consumer GPS device, you\'re probably going to have WGS84 by default because it\'s the datum in which GPS satellites broadcast their position (\"broadcast ephemerides\").  Note however that many devices can also provide position in a national datum, so you should check your device settings to be sure.\n\nAs a special case for low accuracy work (worse than a meter or so), WGS84 will assume that coordinates supplied without a capture time are in the latest frame realization known to Geodesy.jl, WGS84 (G1762). Note that this may not be correct if you\'re processing historical data, or Geodesy.jl itself is out of date.  For higher accuracy, you should supply a date of capture - either with each coordinate, or explicitly using the GpsWeek parameter to the WGS84 type:\n\nWGS84{GpsWeek}()\n\nConstruct an object representing the static WGS84 datum computed using data gathered prior to the given GpsWeek.  WGS84 is maintained and updated by the US National Geospatial-Intelligence-Agency (NGA) at irregular intervals to align with the ITRF to within 0.1m (see [1]); if you care about accuracy at that level, you probably want to be solving for position in a different datum, for example, ITRF.  As of 2016, GpsWeek should be one out of [0, 730, 873, 1150, 1674, 1762].\n\nNote that the dates of implementation of these frames as broadcast by the satellites are not the same as the associated GPS week - see Ref. [1], table 2.1.  (TODO: Perhaps Geodesy should have a table to figure out which frame to use at a given date?  Does anybody care?)\n\n\"World Geodetic System 1984\", NGA standard NGA.STND.00361.0.0WGS84, 2014-07-08, http://earth-info.nga.mil/GandG/publications/NGASTND0036100WGS84/NGA.STND.00361.0.0WGS84.pdf\n\n\n\n\n\n"
},

{
    "location": "#Geodesy.ECEFfromUTM-Tuple{Any,Any,Any}",
    "page": "Home",
    "title": "Geodesy.ECEFfromUTM",
    "category": "method",
    "text": "ECEFfromUTM(zone, isnorth, datum)\n\nCreates composite transformation ECEFfromLLA(datum) ∘ LLAfromUTM(zone, isnorth, datum).\n\n\n\n\n\n"
},

{
    "location": "#Geodesy.ECEFfromUTMZ-Tuple{Any}",
    "page": "Home",
    "title": "Geodesy.ECEFfromUTMZ",
    "category": "method",
    "text": "ECEFfromUTMZ(datum)\n\nCreates composite transformation ECEFfromLLA(datum) ∘ LLAfromUTMZ(datum).\n\n\n\n\n\n"
},

{
    "location": "#Geodesy.ENUfromLLA-Tuple{Any,Any}",
    "page": "Home",
    "title": "Geodesy.ENUfromLLA",
    "category": "method",
    "text": "ENUfromLLA(origin, datum)\n\nCreates composite transformation ENUfromECEF(origin, datum) ∘ ECEFfromLLA(datum).\n\n\n\n\n\n"
},

{
    "location": "#Geodesy.ENUfromUTM-Tuple{Any,Integer,Bool,Any}",
    "page": "Home",
    "title": "Geodesy.ENUfromUTM",
    "category": "method",
    "text": "ENUfromUTM(origin, zone, isnorth, datum)\n\nCreates composite transformation UTMfromLLA(zone, isnorth, datum) ∘ LLAfromENU(origin, datum). If origin is a UTM point, then it is assumed it is in the given specified zone and hemisphere.\n\n\n\n\n\n"
},

{
    "location": "#Geodesy.ENUfromUTMZ-Tuple{Any,Any}",
    "page": "Home",
    "title": "Geodesy.ENUfromUTMZ",
    "category": "method",
    "text": "ENUfromUTMZ(origin, datum)\n\nCreates composite transformation ENUfromLLA(origin, datum) ∘ LLAfromUTMZ(datum).\n\n\n\n\n\n"
},

{
    "location": "#Geodesy.LLAfromENU-Tuple{Any,Any}",
    "page": "Home",
    "title": "Geodesy.LLAfromENU",
    "category": "method",
    "text": "LLAfromENU(origin, datum)\n\nCreates composite transformation LLAfromECEF(datum) ∘ ECEFfromENU(origin, datum).\n\n\n\n\n\n"
},

{
    "location": "#Geodesy.UTMZfromECEF-Tuple{Any}",
    "page": "Home",
    "title": "Geodesy.UTMZfromECEF",
    "category": "method",
    "text": "UTMZfromECEF(datum)\n\nCreates composite transformation UTMZfromLLA(datum) ∘ LLAfromECEF(datum).\n\n\n\n\n\n"
},

{
    "location": "#Geodesy.UTMZfromENU-Tuple{Any,Any}",
    "page": "Home",
    "title": "Geodesy.UTMZfromENU",
    "category": "method",
    "text": "UTMZfromENU(origin, datum)\n\nCreates composite transformation UTMZfromLLA(datum) ∘ LLAfromENU(origin, datum).\n\n\n\n\n\n"
},

{
    "location": "#Geodesy.UTMfromECEF-Tuple{Any,Any,Any}",
    "page": "Home",
    "title": "Geodesy.UTMfromECEF",
    "category": "method",
    "text": "UTMfromECEF(zone, isnorth, datum)\n\nCreates composite transformation UTMfromLLA(zone, isnorth, datum) ∘ LLAfromECEF(datum).\n\n\n\n\n\n"
},

{
    "location": "#Geodesy.UTMfromENU-Tuple{Any,Integer,Bool,Any}",
    "page": "Home",
    "title": "Geodesy.UTMfromENU",
    "category": "method",
    "text": "UTMfromENU(origin, zone, isnorth, datum)\n\nCreates composite transformation UTMfromLLA(zone, isnorth, datum) ∘ LLAfromENU(origin, datum). If origin is a UTM point, then it is assumed it is in the given specified zone and hemisphere.\n\n\n\n\n\n"
},

{
    "location": "#Geodesy.datum_shift_ECEF-Tuple{Any,Any}",
    "page": "Home",
    "title": "Geodesy.datum_shift_ECEF",
    "category": "method",
    "text": "datum_shift_ECEF(dest_datum, source_datum)\n\nReturn a transformation object which transforms ECEF points from source_datum to dest_datum.  The function should attempt to supply the current publicly accepted best estimate.\n\nNote that the best known version of a datum transformation will inherently improve with time (see below), so we cannot simultaneously guarantee that:\n\nWe return the best publicly accepted version of a datum shift.\nWe return the same thing in future versions of Geodesy.jl.\n\nThis function will attempt to satisfy condition 1. rather than 2.; if you want a stable version of a transformation you should use one of the lower level functions, for example, GDA94_from_ITRF_Dawson2010().\n\nImportant note about accuracy\n\nIf you care about accuracy, you should always store long term archival data in the source datum where possible, along with metadata defining the full datum and coordinate system in use.  The time to do a datum shift is when you want to compare information from two different datums.\n\nWhy all this bother about inaccuracy? The errors are twofold: First, the parameters of a datum shift come from a physical measurement process. Typically this involves measuring the coordinates of some physical locations in both datums, and a physical measurement procedure is always subject to some inaccuracy. Second, these tie points are used to infer a compact representation of the datum shift, with as few numerical parameters as possible. A small number of parameters will result in an overly smooth representation; this modelling error is a second source of inaccuracy.  Both these errors can be reduced if you choose to measure more tie points or improve the complexity of the numerical model at a future date.\n\n\n\n\n\n"
},

{
    "location": "#Geodesy.distance",
    "page": "Home",
    "title": "Geodesy.distance",
    "category": "function",
    "text": "distance(utm1, utm2, zone, isnorth, [datum = wgs84])\ndistance(a, utm2, zone, isnorth, [datum = wgs84])\ndistance(utm1, b, zone, isnorth, [datum = wgs84])\n\nIf one or both points are UTM, we need the zone (and particularly the hemisphere, isnorth = true/false) to determine the Cartesian distance.\n\n\n\n\n\n"
},

{
    "location": "#Geodesy.distance-Union{Tuple{T}, Tuple{T,T}} where T<:(AbstractArray{T,1} where T)",
    "page": "Home",
    "title": "Geodesy.distance",
    "category": "method",
    "text": "distance(a, b, [datum = wgs84])\n\nThe Cartesian distance between points a and b. Uses datum to perform transformations as necessary, and unlike other Geodesy functions, this defaults to use the common WGS-84 datum for convenience.\n\n\n\n\n\n"
},

{
    "location": "#Geodesy.utm_zone-Union{Tuple{T}, Tuple{T,T}} where T",
    "page": "Home",
    "title": "Geodesy.utm_zone",
    "category": "method",
    "text": "(zone, isnorth) = utm_zone(lat, lon)\n(zone, isnorth) = utm_zone(ll::LatLon)\n(zone, isnorth) = utm_zone(lla::LLA)\n(zone, isnorth) = utm_zone(ecef::ECEF, datum)\n\nFind the UTM zone and hemisphere (isnorth = true or false) for the given latitude and longitude (or world point), including the special rules for Norway and Svalbard. Zone 0 corresponds to the poles, using the UPS regions.\n\n\n\n\n\n"
},

{
    "location": "#Geodesy.TransverseMercator",
    "page": "Home",
    "title": "Geodesy.TransverseMercator",
    "category": "type",
    "text": "immutable TransverseMercator{MaxPow}\nTransverseMercator(datum)\nTransverseMercator(ellipsoid)\nTransverseMercator(a, f, [::Type{Val{MaxPow}} = Val{6}])\n\nCache of ellipsoidal calculations necessary for transverse-Mercator and polar-stereographic transformations. Series expansion coefficients up to order MaxPow (between 4 and 8, default 6) are calculated and stored for fast transverse-Mercator and UTM calculations.\n\n\n\n\n\n"
},

{
    "location": "#Geodesy.AngNormalize-Tuple{Number}",
    "page": "Home",
    "title": "Geodesy.AngNormalize",
    "category": "method",
    "text": "%AngNormalize:  Reduce angle to range [-180, 180) % %   x = AngNormalize(x) reduces angles to the range [-180, 180).\n\n\n\n\n\n"
},

{
    "location": "#Geodesy.GDA94_from_ITRF_Dawson2010-Tuple{Any,Any}",
    "page": "Home",
    "title": "Geodesy.GDA94_from_ITRF_Dawson2010",
    "category": "method",
    "text": "GDA94_from_ITRF_Dawson2010(ITRF_year, epoch)\n\nReturn a Transformation converting ECEF points from a given ITRF to GDA94. Datum shift parameters are taken from [1], supporting ITRF_year 2008, 2005, 2000, 1997, 1996.  epoch is the Date (or DateTime) of interest at which the input ECEF coordinates to the transformation were measured in ITRF.\n\n[1] J. Dawson and A. Woods, \"ITRF to GDA94 coordinate transforms\",     Journal of Applied Geodesy, 4, p. 189 (2010).\n\nTODO: We don\'t yet support epoch varying per input point, but there should be a Transformation object for this at some stage.\n\n\n\n\n\n"
},

{
    "location": "#Geodesy.LatFix-Tuple{Number}",
    "page": "Home",
    "title": "Geodesy.LatFix",
    "category": "method",
    "text": "LatFix(x) returns x is it is in the range [-90, 90]; otherwise it returns NaN.\n\n\n\n\n\n"
},

{
    "location": "#Geodesy.eatanhe-Tuple{Any,Any}",
    "page": "Home",
    "title": "Geodesy.eatanhe",
    "category": "method",
    "text": "eatanhe(x, e2) returns eatanh(ex) where e = sqrt(e2) e2 is a scalar; x can be any shape.\n\n\n\n\n\n"
},

{
    "location": "#Geodesy.polarst_fwd-Tuple{Bool,Float64,Geodesy.TransverseMercator,Any,Any}",
    "page": "Home",
    "title": "Geodesy.polarst_fwd",
    "category": "method",
    "text": "(x, y, gamma, k) = polarst_fwd(northpole::Bool, k0::Float64, tm::TransverseMercator, lat, lon)\n\nPerform polar-stereographic projection of lat and lon with respect to north or south pole northpole and horizontal scaling k0 (= 0.994 for UPS). γ and k are the local convergence and scaling factors, respectively.\n\n\n\n\n\n"
},

{
    "location": "#Geodesy.polarst_inv-Tuple{Bool,Float64,Geodesy.TransverseMercator,Any,Any}",
    "page": "Home",
    "title": "Geodesy.polarst_inv",
    "category": "method",
    "text": "(lat, lon, gamma, k) = polarst_inv(northp::Bool, k0::Float64, tm::TransverseMercator, x, y)\n\nInvert polar-stereographic projection of x and y with respect to north or south pole northpole and horizontal scaling k0 (= 0.994 for UPS). γ and k are the local convergence and scaling factors, respectively.\n\n\n\n\n\n"
},

{
    "location": "#Geodesy.polyval-Tuple{Any,Any}",
    "page": "Home",
    "title": "Geodesy.polyval",
    "category": "method",
    "text": "Evaluate polynomial with coefficients p[i] at x\n\n\n\n\n\n"
},

{
    "location": "#Geodesy.tauf-Tuple{Any,Any}",
    "page": "Home",
    "title": "Geodesy.tauf",
    "category": "method",
    "text": "%TAUF   tan(phi) % %   TAUF(taup, e2) returns tangent of phi in terms of taup the tangent of %   chi.  e2, the square of the eccentricity, is a scalar; taup can be any %   shape.\n\n\n\n\n\n"
},

{
    "location": "#Geodesy.taupf-Tuple{Any,Any}",
    "page": "Home",
    "title": "Geodesy.taupf",
    "category": "method",
    "text": "taupf(tau, e2) returns tangent of chi in terms of tau the tangent of phi.  e2, the square of the eccentricity, is a scalar; tau can be any shape.\n\n\n\n\n\n"
},

{
    "location": "#Geodesy.transverse_mercator_forward-Union{Tuple{MaxPow}, Tuple{Any,Any,Any,Any,TransverseMercator{MaxPow}}} where MaxPow",
    "page": "Home",
    "title": "Geodesy.transverse_mercator_forward",
    "category": "method",
    "text": "(x, y, γ, k) = transverse_mercator_forward(lon0, lat, lon, k0, tm::TransverseMercator)\n\nPerform transverse-Mercator projection of lat and lon with respect to reference meridian lat0 and horizontal scaling k0 (= 0.9996 for UTM) using a series expansion approach (see TransverseMercator). γ and k are the local convergence and scaling factors, respectively.\n\n\n\n\n\n"
},

{
    "location": "#Geodesy.transverse_mercator_reverse-Union{Tuple{MaxPow}, Tuple{Any,Any,Any,Any,TransverseMercator{MaxPow}}} where MaxPow",
    "page": "Home",
    "title": "Geodesy.transverse_mercator_reverse",
    "category": "method",
    "text": "(lat, lon, γ, k) = transverse_mercator_reverse(lon0, x, y, k0, tm::TransverseMercator)\n\nInvert transverse-Mercator projection of x and y with respect to reference meridian lat0 and horizontal scaling k0 (= 0.9996 for UTM) using a series expansion approach (see TransverseMercator). γ and k are the local convergence and scaling factors, respectively.\n\n\n\n\n\n"
},

{
    "location": "#Geodesy.utm_meridian-Tuple{Integer}",
    "page": "Home",
    "title": "Geodesy.utm_meridian",
    "category": "method",
    "text": "utm_meridian(zone)\n\nCentral meridian of the given UTM zone (note - does not include the conventiional 500km false easting offset).\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Geodesy]\nOrder = [:type, :function]"
},

]}
