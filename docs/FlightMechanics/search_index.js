var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#Home-1",
    "page": "Home",
    "title": "Home",
    "category": "section",
    "text": ""
},

{
    "location": "#Overview-1",
    "page": "Home",
    "title": "Overview",
    "category": "section",
    "text": "This package is intended to provide utils for Flight Mechanics computations in Julia. Its purpose is to provide reliable, documented, efficient and tested Julia implementations for common calculations in Flight Mechanics such as:International Standard Atmosphere: get pressure, temperature, density, sound velocity for a given altitude.\nConversion between different coordinate systems: body/ABC, horizon/NED, wind, ECEF (Earth Cenetered Earth Fixed), LLH (Latitude, Longitude, Height for various ellipsoids models).\nSupport for various attitude representations: Euler angles, quaternions.\nAnemometry calculations: conversions between TAS, CAS, EAS; velocity calculation from airspeed indicator (ASI) pressure difference; dynamic pressure calculation, TAS, alpha, beta from body velocity.\n6 DOF Dynamic fixed mass models:\nFlat Earth Euler angles\nFlat Earth quaternions\nEllipsoidal Earth ECEF model quaternionFor the sake of reliability and reproducibility, several references are listed in the documentation of the different methods so they can be consulted and studied."
},

{
    "location": "#Installing-FlightMechanics.jl-1",
    "page": "Home",
    "title": "Installing FlightMechanics.jl",
    "category": "section",
    "text": "This package is still in its initial development phase and has not been registered in the Julia official repository.You can install this package cloning it:Pkg> add git@github.com:AlexS12/FlightMechanics.jl.gitYou can read more about adding unregistered pakcages in Julia documentationor if you are planning to make a contribution and want the dev version:Pkg> dev git@github.com:AlexS12/FlightMechanics.jl.gitOnce you have installed the package, it is highly recommended to run the tests:Pkg> test FlightMechanics"
},

{
    "location": "#Contributing-1",
    "page": "Home",
    "title": "Contributing",
    "category": "section",
    "text": "If you used this package and have any suggestion or found a bug, please open an issue.If this package is useful for you and want to join efforts don\'t hesitate to let me know: https://github.com/AlexS12"
},

{
    "location": "api-reference/#",
    "page": "API reference",
    "title": "API reference",
    "category": "page",
    "text": ""
},

{
    "location": "api-reference/#API-reference-1",
    "page": "API reference",
    "title": "API reference",
    "category": "section",
    "text": ""
},

{
    "location": "api-reference/#FlightMechanics.atmosphere_isa-Tuple{Any}",
    "page": "API reference",
    "title": "FlightMechanics.atmosphere_isa",
    "category": "method",
    "text": "atmosphere_isa(height)\n\nCalculate temperature, pressure, density and sound velocity for the given geopotential height according to International Standard Atmosphere 1976.\n\nReferences\n\n[1] U.S. Standard Atmosphere, 1976, U.S. Government Printing Office,       Washington, D.C., 1976\n\nFrom: https://en.wikipedia.org/wiki/U.S.StandardAtmosphere\n\nLayer h (m) p (Pa) T (K) α (K/m)\n0 0 101325 288.15 -0.0065\n1 11000 22632.1 216.65 0\n2 20000 5474.89 216.65 0.001\n3 32000 868.019 228.65 0.0028\n4 47000 110.906 270.65 0\n5 51000 66.9389 270.65 -0.0028\n6 71000 3.95642 214.65 -0.002\n\n\n\n\n\n"
},

{
    "location": "api-reference/#ISA-(atmosphere.jl)-1",
    "page": "API reference",
    "title": "ISA (atmosphere.jl)",
    "category": "section",
    "text": "Modules = [FlightMechanics]\nPages   = [\"atmosphere.jl\"]"
},

{
    "location": "api-reference/#FlightMechanics.body2ecef-NTuple{8,Any}",
    "page": "API reference",
    "title": "FlightMechanics.body2ecef",
    "category": "method",
    "text": "body2ecef(xb, yb, zb, lat, lon, psi, theta, phi)\n\nTransform body coordinates to ECEF coordinates.\n\nArguments\n\nxb, yb, zb: body coordinates.\nlat: geodetic latitude (rad).\nlon: longitude (rad).\npsi, theta, phi: Euler angles. Yaw, pitch, roll (rad).\n\n\n\n\n\n"
},

{
    "location": "api-reference/#FlightMechanics.body2ecef-NTuple{9,Any}",
    "page": "API reference",
    "title": "FlightMechanics.body2ecef",
    "category": "method",
    "text": "body2ecef(xb, yb, zb, lat, lon, q0, q1, q2, q3)\n\nTransform body coordinates to ECEF coordinates.\n\nArguments\n\nxb, yb, zb: body coordinates.\nlat: geodetic latitude (rad).\nlon: longitude (rad).\nq0, q1, q2, q3: quaternions.\n\n\n\n\n\n"
},

{
    "location": "api-reference/#FlightMechanics.body2hor-NTuple{6,Any}",
    "page": "API reference",
    "title": "FlightMechanics.body2hor",
    "category": "method",
    "text": "body2hor(xb, yb, zb, psi, theta, phi)\n\nTransform body coordinates to local horizon.\n\nArguments\n\nxb, yb, zb: body coordinates.\npsi, theta, phi: Euler angles. Yaw, pitch, roll (rad).\n\n\n\n\n\n"
},

{
    "location": "api-reference/#FlightMechanics.body2hor-NTuple{7,Any}",
    "page": "API reference",
    "title": "FlightMechanics.body2hor",
    "category": "method",
    "text": "body2hor(xb, yb, zb, q0, q1, q2, q3)\n\nTransform body coordinates to local horizon.\n\nArguments\n\nxb, yb, zb: body coordinates.\nq0, q1, q2, q3: quaternions.\n\n\n\n\n\n"
},

{
    "location": "api-reference/#FlightMechanics.body2wind-NTuple{5,Any}",
    "page": "API reference",
    "title": "FlightMechanics.body2wind",
    "category": "method",
    "text": "body2wind(xb, yb, zb, alpha, beta)\n\nTransform body coordinates to wind.\n\nArguments\n\nxb, yb, zb: body coordinates.\nalpha, beta: Aerodynamic angles. Angle of attack, angle of side-slip (rad).\n\n\n\n\n\n"
},

{
    "location": "api-reference/#FlightMechanics.ecef2body-NTuple{8,Any}",
    "page": "API reference",
    "title": "FlightMechanics.ecef2body",
    "category": "method",
    "text": "ecef2body(xecef, yecef, zecef, lat, lon, psi, theta, phi)\n\nTransform ECEF coordinates to body coordinates.\n\nArguments\n\nxecef, yecef, zecef: ECEF (Earth Centered Earth Fixed) coordinates.\nlat: geodetic latitude (rad).\nlon: longitude (rad).\npsi, theta, phi: Euler angles. Yaw, pitch, roll (rad).\n\n\n\n\n\n"
},

{
    "location": "api-reference/#FlightMechanics.ecef2body-NTuple{9,Any}",
    "page": "API reference",
    "title": "FlightMechanics.ecef2body",
    "category": "method",
    "text": "ecef2body(xecef, yecef, zecef, lat, lon, q0, q1, q2, q3)\n\nTransform ECEF coordinates to body coordinates.\n\nArguments\n\nxecef, yecef, zecef: ECEF (Earth Centered Earth Fixed) coordinates.\nlat: geodetic latitude (rad).\nlon: longitude (rad).\nq0, q1, q2, q3: quaternions.\n\n\n\n\n\n"
},

{
    "location": "api-reference/#FlightMechanics.ecef2hor-NTuple{5,Any}",
    "page": "API reference",
    "title": "FlightMechanics.ecef2hor",
    "category": "method",
    "text": "ecef2hor(xecef, yecef, zecef, lat, lon)\n\nTransform ECEF (Earth Fixed Earth Centered) coordinates to local horizon coordinates using geodetic latitude and longitude.\n\nArguments\n\nxecef, yecef, zecef: ECEF coordinates.\nlat: geodetic latitude (rad).\nlon: longitude (rad).\n\nReferences\n\n[1] Stevens, B. L., Lewis, F. L., (1992). Aircraft control and simulation:\n\ndynamics, controls design, and autonomous systems. John Wiley & Sons.  (page 36, formula 1.4-9)\n\nNotes\n\nX, Y, Z ECEF are defined in a different way in [1]. In order to reproduce this  transformation substitute in [1] Y->X, Z->Y, X->Z\n\n[1] Only defines the opposite transformation. However this must be the  transpose of hor2ecef.\n\n\n\n\n\n"
},

{
    "location": "api-reference/#FlightMechanics.ecef2llh-Tuple{Any,Any,Any}",
    "page": "API reference",
    "title": "FlightMechanics.ecef2llh",
    "category": "method",
    "text": "ecef2llh(xecef, yecef, zecef; ellipsoid=WGS84)\n\nTransform ECEF coordinates to geodetic latitude, longitude and ellipsoidal height for the given ellipsoid (default ellipsoid is WGS84)\n\nReferences\n\n[1] Bowring, B. R. (1976). Transformation from spatial to geographical\n\ncoordinates. Survey review, 23(181), 323-327.\n\n[2] Bowring, B. R. (1985). The accuracy of geodetic latitude and height\n\nequations. Survey Review, 28(218), 202-206.\n\nNotes\n\nThe transformation is direct without iterations as [1] introduced the need to\n\niterate for near Earth positions.\n\n[2] is an updated of increased accuracy of [1]. The former is used in this\n\nimplementation although the latter implementation is commented in the code.\n\nModel becomes unstable if latitude is close to 90º. An alternative equation\n\ncan be found in [2] equation (16) but has not been implemented.\n\n\n\n\n\n"
},

{
    "location": "api-reference/#FlightMechanics.euler2quaternion-Tuple{Any,Any,Any}",
    "page": "API reference",
    "title": "FlightMechanics.euler2quaternion",
    "category": "method",
    "text": "euler2quaternion(psi, theta, phi)\n\nTransform Euler angles orientation to quaternion orientation.\n\nArguments\n\npsi, theta, phi: Euler angles. Yaw, pitch, roll (rad).\n\nReferences\n\n[1] Zipfel, P. H. (2007). Modeling and simulation of aerospace vehicle\n\ndynamics. American Institute of Aeronautics and Astronautics.  (page 126, formula 4.78)\n\n\n\n\n\n"
},

{
    "location": "api-reference/#FlightMechanics.hor2body-NTuple{6,Any}",
    "page": "API reference",
    "title": "FlightMechanics.hor2body",
    "category": "method",
    "text": "hor2body(xh, yh, zh, psi, theta, phi)\n\nTransform local horizon coordinates to body.\n\nArguments\n\nxh, yh, zh: local horizon coordinates.\npsi, theta, phi: Euler angles. Yaw, pitch, roll (rad).\n\n\n\n\n\n"
},

{
    "location": "api-reference/#FlightMechanics.hor2body-NTuple{7,Any}",
    "page": "API reference",
    "title": "FlightMechanics.hor2body",
    "category": "method",
    "text": "hor2body(xb, yb, zb, q0, q1, q2, q3)\n\nTransform local horizon corrdinates to body coordinates.\n\nArguments\n\nxh, yh, zh: local horizon coordinates.\nq0, q1, q2, q3: quaternions.\n\n\n\n\n\n"
},

{
    "location": "api-reference/#FlightMechanics.hor2ecef-NTuple{5,Any}",
    "page": "API reference",
    "title": "FlightMechanics.hor2ecef",
    "category": "method",
    "text": "hor2ecef(xh, yh, zh, lat, lon)\n\nTransform local horizon coordinates to ECEF (Earth Centered Earth Fixed) coordinates using geodetic latitude and longitude.\n\nArguments\n\nxh, yh, zh: local horizon coordinates.\nlat: geodetic latitude (rad).\nlon: longitude (rad).\n\nReferences\n\n[1] Stevens, B. L., Lewis, F. L., (1992). Aircraft control and simulation:\n\ndynamics, controls design, and autonomous systems. John Wiley & Sons.  (page 36, formula 1.4-9)\n\nNotes\n\nX, Y, Z ECEF are defined in a different way in [1]. In order to reproduce this  transformation substitute in [1] Y->X, Z->Y, X->Z\n\n\n\n\n\n"
},

{
    "location": "api-reference/#FlightMechanics.hor2wind-NTuple{6,Any}",
    "page": "API reference",
    "title": "FlightMechanics.hor2wind",
    "category": "method",
    "text": "hor2wind(xh, yh, zh, chi, gamma, mu)\n\nTransform local horizon coordinates to wind.\n\nArguments\n\nxh, yh, zh: local horizon coordinates.\nchi, gamma, mu: Velocity angles. Yaw (azimuth), pitch(elevation), roll (rad).\n\n\n\n\n\n"
},

{
    "location": "api-reference/#FlightMechanics.llh2ecef-Tuple{Any,Any,Any}",
    "page": "API reference",
    "title": "FlightMechanics.llh2ecef",
    "category": "method",
    "text": "llh2ecef(lat, lon, height; ellipsoid=WGS84)\n\nTransform geodetic latitude, longitude and ellipsoidal height to ECEF for the given ellipsoid (default ellipsoid is WGS84)\n\nReferences\n\n[1] Rogers, R. M. (2007). Applied mathematics in integrated navigation\n\nsystems. American Institute of Aeronautics and Astronautics.  (Page 75, equations 4.20, 4.21, 4.22)\n\n\n\n\n\n"
},

{
    "location": "api-reference/#FlightMechanics.quaternion2euler-NTuple{4,Any}",
    "page": "API reference",
    "title": "FlightMechanics.quaternion2euler",
    "category": "method",
    "text": "quaternion2euler(q0, q1, q2, q3)\n\nTransform quaternion orientation to Euler angles orientation.\n\nArguments\n\nq0, q1, q2, q3: quaternions.\n\nReferences\n\n[1] Zipfel, P. H. (2007). Modeling and simulation of aerospace vehicle\n\ndynamics. American Institute of Aeronautics and Astronautics.  (page 127, formula 4.82)\n\n\n\n\n\n"
},

{
    "location": "api-reference/#FlightMechanics.rot_matrix_body2ecef-NTuple{5,Any}",
    "page": "API reference",
    "title": "FlightMechanics.rot_matrix_body2ecef",
    "category": "method",
    "text": "rot_matrix_body2ecef(lat, lon, psi, theta, phi)\n\nRotation matrix to transform from body to ECEF\n\nArguments\n\nlat: geodetic latitude (rad).\nlon: longitude (rad).\npsi, theta, phi: Euler angles. Yaw, pitch, roll (rad).\n\nReferences\n\n[1] Stevens, B. L., Lewis, F. L., (1992). Aircraft control and simulation:\n\ndynamics, controls design, and autonomous systems. John Wiley & Sons.  (page 37, formula 1.4-11)\n\n\n\n\n\n"
},

{
    "location": "api-reference/#FlightMechanics.rot_matrix_body2ecef-NTuple{6,Any}",
    "page": "API reference",
    "title": "FlightMechanics.rot_matrix_body2ecef",
    "category": "method",
    "text": "rot_matrix_body2ecef(lat, lon, q0, q1, q2, q3)\n\nRotation matrix to transform from body to ECEF\n\nArguments\n\nlat: geodetic latitude (rad).\nlon: longitude (rad).\nq0, q1, q2, q3: quaternions.\n\nReferences\n\n[1] Stevens, B. L., Lewis, F. L., (1992). Aircraft control and simulation:\n\ndynamics, controls design, and autonomous systems. John Wiley & Sons.  (page 37, formula 1.4-11)\n\n\n\n\n\n"
},

{
    "location": "api-reference/#FlightMechanics.rot_matrix_body2hor-NTuple{4,Any}",
    "page": "API reference",
    "title": "FlightMechanics.rot_matrix_body2hor",
    "category": "method",
    "text": "rot_matrix_body2hor(q0, q1, q2, q3)\n\nRotation matrix to transform from body to local horizon.\n\nArguments\n\nq0, q1, q2, q3: quaternions.\n\nReferences\n\n[1] Stevens, B. L., Lewis, F. L., (1992). Aircraft control and simulation:\n\ndynamics, controls design, and autonomous systems. John Wiley & Sons.  (page 41, formula 1.4-23)\n\n\n\n\n\n"
},

{
    "location": "api-reference/#FlightMechanics.rot_matrix_body2hor-Tuple{Any,Any,Any}",
    "page": "API reference",
    "title": "FlightMechanics.rot_matrix_body2hor",
    "category": "method",
    "text": "rot_matrix_body2hor(psi, theta, phi)\n\nRotation matrix from body to local horizon\n\nArguments\n\npsi, theta, phi: Euler angles. Yaw, pitch, roll (rad).\n\n\n\n\n\n"
},

{
    "location": "api-reference/#FlightMechanics.rot_matrix_ecef2body-NTuple{5,Any}",
    "page": "API reference",
    "title": "FlightMechanics.rot_matrix_ecef2body",
    "category": "method",
    "text": "rot_matrix_ecef2body(lat, lon, psi, theta, phi)\n\nRotation matrix to transform from ECEF to body\n\nArguments\n\nlat: geodetic latitude (rad).\nlon: longitude (rad).\npsi, theta, phi: Euler angles. Yaw, pitch, roll (rad).\n\nReferences\n\n[1] Stevens, B. L., Lewis, F. L., (1992). Aircraft control and simulation:\n\ndynamics, controls design, and autonomous systems. John Wiley & Sons.  (page 37, formula 1.4-11)\n\n\n\n\n\n"
},

{
    "location": "api-reference/#FlightMechanics.rot_matrix_ecef2body-NTuple{6,Any}",
    "page": "API reference",
    "title": "FlightMechanics.rot_matrix_ecef2body",
    "category": "method",
    "text": "rot_matrix_ecef2body(lat, lon, q0, q1, q2, q3)\n\nRotation matrix to transform from ECEF to body\n\nArguments\n\nlat: geodetic latitude (rad).\nlon: longitude (rad).\nq0, q1, q2, q3: quaternions.\n\nReferences\n\n[1] Stevens, B. L., Lewis, F. L., (1992). Aircraft control and simulation:\n\ndynamics, controls design, and autonomous systems. John Wiley & Sons.  (page 37, formula 1.4-11)\n\n\n\n\n\n"
},

{
    "location": "api-reference/#FlightMechanics.rot_matrix_ecef2hor-Tuple{Any,Any}",
    "page": "API reference",
    "title": "FlightMechanics.rot_matrix_ecef2hor",
    "category": "method",
    "text": "rot_matrix_ecef2hor(lat, lon)\n\nRotation matrix to transform from ECEF to local horizon.\n\nArguments\n\nlat, lon: geodetic latitude and longitude (rad)\n\nReferences\n\n[1] Stevens, B. L., Lewis, F. L., (1992). Aircraft control and simulation:\n\ndynamics, controls design, and autonomous systems. John Wiley & Sons.  (page 36, formula 1.4-9)\n\nNotes\n\nX, Y, Z ECEF are defined in a different way in [1]. In order to reproduce this  transformation substitute in [1] Y->X, Z->Y, X->Z\n\n\n\n\n\n"
},

{
    "location": "api-reference/#FlightMechanics.rot_matrix_hor2body-NTuple{4,Any}",
    "page": "API reference",
    "title": "FlightMechanics.rot_matrix_hor2body",
    "category": "method",
    "text": "rot_matrix_hor2body(q0, q1, q2, q3)\n\nRotation matrix to transform from local horizon to body.\n\nArguments\n\nq0, q1, q2, q3: quaternions.\n\nReferences\n\n[1] Stevens, B. L., Lewis, F. L., (1992). Aircraft control and simulation:\n\ndynamics, controls design, and autonomous systems. John Wiley & Sons.  (page 41, formula 1.4-23)\n\n\n\n\n\n"
},

{
    "location": "api-reference/#FlightMechanics.rot_matrix_hor2body-Tuple{Any,Any,Any}",
    "page": "API reference",
    "title": "FlightMechanics.rot_matrix_hor2body",
    "category": "method",
    "text": "rot_matrix_hor2body(psi, theta, phi)\n\nRotation matrix from body to local horizon\n\nArguments\n\npsi, theta, phi: Euler angles. Yaw, pitch, roll (rad).\n\n\n\n\n\n"
},

{
    "location": "api-reference/#FlightMechanics.rot_matrix_hor2ecef-Tuple{Any,Any}",
    "page": "API reference",
    "title": "FlightMechanics.rot_matrix_hor2ecef",
    "category": "method",
    "text": "rot_matrix_hor2ecef(lat, lon)\n\nRotation matrix to transform from local horizon to ECEF.\n\nArguments\n\nlat, lon: geodetic latitude and longitude (rad)\n\nReferences\n\n[1] Stevens, B. L., Lewis, F. L., (1992). Aircraft control and simulation:\n\ndynamics, controls design, and autonomous systems. John Wiley & Sons.  (page 36, formula 1.4-9)\n\nNotes\n\nX, Y, Z ECEF are defined in a different way in [1]. In order to reproduce this  transformation substitute in [1] Y->X, Z->Y, X->Z\n\n\n\n\n\n"
},

{
    "location": "api-reference/#FlightMechanics.wind2body-NTuple{5,Any}",
    "page": "API reference",
    "title": "FlightMechanics.wind2body",
    "category": "method",
    "text": "wind2body(xw, yw, zw, alpha, beta)\n\nTransform body coordinates to wind.\n\nArguments\n\nxw, yw, zw: wind coordinates.\nalpha, beta: Aerodynamic angles. Angle of attack, angle of side-slip (rad).\n\n\n\n\n\n"
},

{
    "location": "api-reference/#FlightMechanics.wind2hor-NTuple{6,Any}",
    "page": "API reference",
    "title": "FlightMechanics.wind2hor",
    "category": "method",
    "text": "wind2hor(xw, yw, zw, chi, gamma, mu)\n\nTransform wind coordinates to local horizon.\n\nArguments\n\nxw, yw, zw: wind coordinates.\nchi, gamma, mu: Velocity angles. Yaw (azimuth), pitch(elevation), roll (rad).\n\n\n\n\n\n"
},

{
    "location": "api-reference/#Coordinates-Systems-(coordinates.jl)-1",
    "page": "API reference",
    "title": "Coordinates Systems (coordinates.jl)",
    "category": "section",
    "text": "Modules = [FlightMechanics]\nPages   = [\"coordinates.jl\"]"
},

{
    "location": "api-reference/#FlightMechanics.cas2eas-Tuple{Any,Any,Any}",
    "page": "API reference",
    "title": "FlightMechanics.cas2eas",
    "category": "method",
    "text": "cas2eas(cas, ρ, p)\n\nCalculate equivalent airspeed from calibrated airspeed, density (ρ) and pressure (p) at the current altitude.\n\n\n\n\n\n"
},

{
    "location": "api-reference/#FlightMechanics.cas2tas-Tuple{Any,Any,Any}",
    "page": "API reference",
    "title": "FlightMechanics.cas2tas",
    "category": "method",
    "text": "cas2tas(cas, ρ, p)\n\nCalculate true airspeed from calibrated airspeed, density (ρ) and pressure (p) at the current altitude.\n\n\n\n\n\n"
},

{
    "location": "api-reference/#FlightMechanics.compressible_qinf-Tuple{Any,Any}",
    "page": "API reference",
    "title": "FlightMechanics.compressible_qinf",
    "category": "method",
    "text": "compressible_qinf(tas, p, a)\n\nCalculate compressible dynamic pressure from Mach number and static pressure (p)\n\nTwo different models are used depending on the Mach number:\n\nSubsonic case: Bernouilli\'s equation compressible form.\nSupersonic case: to be implemented.\n\nReferences\n\n[1] Ward, D. T. (1993). Introduction to flight test engineering. Elsevier   Science Ltd. (page 12)\n\n\n\n\n\n"
},

{
    "location": "api-reference/#FlightMechanics.eas2cas-Tuple{Any,Any,Any}",
    "page": "API reference",
    "title": "FlightMechanics.eas2cas",
    "category": "method",
    "text": "eas2cas(eas, ρ, p)\n\nCalculate calibrated airspeed from equivalent airspeed, density (ρ) and pressure (p) at the current altitude.\n\n\n\n\n\n"
},

{
    "location": "api-reference/#FlightMechanics.eas2tas-Tuple{Any,Any}",
    "page": "API reference",
    "title": "FlightMechanics.eas2tas",
    "category": "method",
    "text": "eas2tas(qc, ρ)\n\nCalculate true airspeed from equivalent airspeed and density at current altitude (ρ).\n\nReferences\n\n[1] Ward, D. T. (1993). Introduction to flight test engineering. Elsevier   Science Ltd. (page 13, formula 2.15)\n\n\n\n\n\n"
},

{
    "location": "api-reference/#FlightMechanics.incompressible_qinf-Tuple{Any,Any}",
    "page": "API reference",
    "title": "FlightMechanics.incompressible_qinf",
    "category": "method",
    "text": "incompressible_qinf(tas, ρ)\n\nCalculate incompressible dynamic pressure from true airspeed (tas) and density (ρ) at current altitude.\n\nReferences\n\n[1] Ward, D. T. (1993). Introduction to flight test engineering. Elsevier   Science Ltd. (page 13, formula 2.14)\n\n\n\n\n\n"
},

{
    "location": "api-reference/#FlightMechanics.qc2cas-Tuple{Any}",
    "page": "API reference",
    "title": "FlightMechanics.qc2cas",
    "category": "method",
    "text": "qc2cas(qc)\n\nCalculate calibrated airspeed from ASI (Air Speed indicator), differential pressure between impact pressure and static pressure. qc = pt - ps\n\nReferences\n\n[1] Ward, D. T. (1993). Introduction to flight test engineering. Elsevier   Science Ltd. (page 13, formula 2.13)\n\n\n\n\n\n"
},

{
    "location": "api-reference/#FlightMechanics.qc2eas-Tuple{Any,Any}",
    "page": "API reference",
    "title": "FlightMechanics.qc2eas",
    "category": "method",
    "text": "qc2eas(qc, p)\n\nCalculate equivalent airspeed from ASI (Air Speed indicator), differential pressure between impact pressure and static pressure (qc = pt - ps) and p.\n\nReferences\n\n[1] Ward, D. T. (1993). Introduction to flight test engineering. Elsevier   Science Ltd.\n\n\n\n\n\n"
},

{
    "location": "api-reference/#FlightMechanics.qc2tas-Tuple{Any,Any,Any}",
    "page": "API reference",
    "title": "FlightMechanics.qc2tas",
    "category": "method",
    "text": "qc2tas(qc, ρ, p)\n\nCalculate true airspeed from ASI (Air Speed indicator), differential pressure between impact pressure and static pressure (qc = pt - ps), rho and p.\n\nReferences\n\n[1] Ward, D. T. (1993). Introduction to flight test engineering. Elsevier   Science Ltd. (page 12, based on formula 2.11)\n\n\n\n\n\n"
},

{
    "location": "api-reference/#FlightMechanics.tas2cas-Tuple{Any,Any,Any}",
    "page": "API reference",
    "title": "FlightMechanics.tas2cas",
    "category": "method",
    "text": "cas2tas(cas, ρ, p)\n\nCalculate true airspeed from calibrated airspeed, density (ρ) and pressure (p) at the current altitude.\n\n\n\n\n\n"
},

{
    "location": "api-reference/#FlightMechanics.tas2eas-Tuple{Any,Any}",
    "page": "API reference",
    "title": "FlightMechanics.tas2eas",
    "category": "method",
    "text": "tas2eas(tas, ρ)\n\nCalculate equivalent airspeed from true airspeed and density at current altitude (ρ).\n\nReferences\n\n[1] Ward, D. T. (1993). Introduction to flight test engineering. Elsevier   Science Ltd. (page 13, formula 2.15)\n\n\n\n\n\n"
},

{
    "location": "api-reference/#FlightMechanics.tas_alpha_beta_from_uvw-Tuple{Any,Any,Any}",
    "page": "API reference",
    "title": "FlightMechanics.tas_alpha_beta_from_uvw",
    "category": "method",
    "text": "tas_alpha_beta_from_uvw(u, v, w)\n\nCalculate true air speed (TAS), angle of attack (α) and angle of side-slip (β) from aerodynamic velocity expressed in body axis.\n\nReferences\n\n[1] Etkin, B. (2005). Dynamics of atmospheric flight. Dover Publications   (page 114, formulas 4.3,2 and 4.3,3)\n\n\n\n\n\n"
},

{
    "location": "api-reference/#Anemometry-(anemometry.jl)-1",
    "page": "API reference",
    "title": "Anemometry (anemometry.jl)",
    "category": "section",
    "text": "Modules = [FlightMechanics]\nPages   = [\"anemometry.jl\"]"
},

{
    "location": "api-reference/#FlightMechanics.rigid_body_velocity-Tuple{Any,Any,Any}",
    "page": "API reference",
    "title": "FlightMechanics.rigid_body_velocity",
    "category": "method",
    "text": "rigid_body_velocity(vel_P, ω, r_PQ)\n\nCalculate the velocity of a point Q of a rigid solid given the velocity of a point P (vel_P), the rotational velocity of the solid (ω) and the relative position of Q wrt P.\n\nIf the reference frame 1 is attached to the solid and the velocity is calculated with respect to reference frame 0:\n\nv_10^Q = v_10^P + omega_10 times r^PQ\n\nbeing:\n\nv_10^Q the velocity of point Q, fixed to 1, wrt 0\nomega_10 the angular velocity of the solid 1 wrt 0\nr^PQ the position of Q wrt P (r^Q-r^P)\n\nEvery vector needs to be expressed in the same coordinate system.\n\nReferences\n\n[1] Stevens, B. L., Lewis, F. L., (1992). Aircraft control and simulation:\n\ndynamics, controls design, and autonomous systems. John Wiley & Sons.  (Section 1.3, page 26)\n\n\n\n"
},

{
    "location": "api-reference/#FlightMechanics.rigid_body_acceleration-NTuple{4,Any}",
    "page": "API reference",
    "title": "FlightMechanics.rigid_body_acceleration",
    "category": "method",
    "text": "rigid_body_acceleration(acc_P, ω, ω_dot, r_PQ)\n\nCalculate the acceleration of a point Q of a rigid solid given the acceleration of a point P (accP), the rotational velocity of the solid (ω), the rotational acceleration of the solid (ωdot) and the relative position of Q wrt P.\n\na_10^Q = a_10^P + omega_10 times (omega_10 times r^PQ) + dotomega_10 times r^PQ\n\nbeing:\n\na_10^Q the acceleration of point Q, fixed to 1, wrt 0\nomega_10 the angular velocity of the solid 1 wrt 0\ndotomega_10 the angular acceleration of the solid 1 wrt 0\nr^PQ the position of Q wrt P (r^Q-r^P)\n\nReferences\n\n[1] Stevens, B. L., Lewis, F. L., (1992). Aircraft control and simulation:\n\ndynamics, controls design, and autonomous systems. John Wiley & Sons.  (Section 1.3, Formaula 1.3-14c, page 26)\n\n\n\n"
},

{
    "location": "api-reference/#Kinematics-(kinematics.jl)-1",
    "page": "API reference",
    "title": "Kinematics (kinematics.jl)",
    "category": "section",
    "text": "FlightMechanics.rigid_body_velocity(vel_P, ω, r_PQ)\nFlightMechanics.rigid_body_acceleration(acc_P, ω, ω_dot, r_PQ)"
},

{
    "location": "api-reference/#FlightMechanics.six_dof_euler_fixed_mass-NTuple{5,Any}",
    "page": "API reference",
    "title": "FlightMechanics.six_dof_euler_fixed_mass",
    "category": "method",
    "text": "six_dof_euler_fixed_mass(state, mass, inertia, forces, moments)\n\nSix degrees of freedom dynamic system using Euler angles for attitude representation and assuming fixed mass.\n\nFlat Earth hypothesis is applied and Earth reference frame is considered inertial.\n\nIt is considered that the aircraft xb-zb plane is a plane of symmetry so that Jxy and Jyz cross-product of inertia are zero and will not be taken into account.\n\nArguments\n\nstate::12-element Array{Number,1}: state vector.   u, v, w: inertial linear velocity expressed in body axis. (m/s)   p, q, r: inertial rotatinal velocity expressed in body axis. (rad/s)   ψ, θ, ϕ: attitude given by Euler angles (zyx). Yaw, pitch, roll. (rad)   xe, ye, ze: position wrt the inertial system origin expressed in Earth Axis. (m)\nmass::Number: total mass of the aircraft (kg)\ninertia::3×3 Array{Number,2}: inertia tensor (kg·m²)\nforces::3-element Array{Number,1}: total forces expressed in body axis. (N)\nmoments::3-element Array{Number,1}: total moments expressed in body axis.(N·m)\n\nReturns\n\nstate_dot: state vector derivative according to the equation of motion,   inertial properties and applied forces and moments.\n\nReferences\n\n[1] Stevens, B. L., Lewis, F. L., (1992). Aircraft control and simulation:\n\ndynamics, controls design, and autonomous systems. John Wiley & Sons.  (Section 1.5, equations 1.5-4, page 46)\n\n[2] Etkin, B. (2005). Dynamics of atmospheric flight. Dover Publications\n\n(Section 5.8, page 148, formulas 5.8,1 to 5.8,7)\n\n[3] Zipfel, P. H. (2007). Modeling and simulation of aerospace vehicle\n\ndynamics. American Institute of Aeronautics and Astronautics.  (page 368, figure 10.2, not taking into account quaternions in angular  kinematic equations)\n\n\n\n\n\n"
},

{
    "location": "api-reference/#FlightMechanics.six_dof_quaternion_fixed_mass-NTuple{5,Any}",
    "page": "API reference",
    "title": "FlightMechanics.six_dof_quaternion_fixed_mass",
    "category": "method",
    "text": "six_dof_quaternion_fixed_mass(state, mass, inertia, forces, moments; k=0.0)\n\nSix degrees of freedom dynamic system using quaternions for attitude representation and assuming fixed mass.\n\nFlat Earth hypothesis is applied and Earth reference frame is considered inertial.\n\nIt is considered that the aircraft xb-zb plane is a plane of symmetry so that Jxy and Jyz cross-product of inertia are zero and will not be taken into account.\n\nArguments\n\nstate::12-element Array{Number,1}: state vector.   u, v, w: inertial linear velocity expressed in body axis. (m/s)   p, q, r: inertial rotatinal velocity expressed in body axis. (rad/s)   q0, q1, q2, q3: attitude given by quaternions.   xe, ye, ze: position wrt the inertial system origin expressed in Earth Axis. (m)\nmass::Number: total mass of the aircraft (kg)\ninertia::3×3 Array{Number,2}: inertia tensor (kg·m²)\nforces::3-element Array{Number,1}: total forces expressed in body axis. (N)\nmoments::3-element Array{Number,1}: total moments expressed in body axis.(N·m)\nk::Number: orthonormality error factor.\n\nReturns\n\nstate_dot: state vector derivative according to the equation of motion,   inertial properties and applied forces and moments.\n\nNotes\n\nSee 1 or 2 for more information on quaternions <-> Euler angles conversions.\nOrthonormality error factor is related to a numerical stability artifact used in angular kinematic equations. Let λ = k * (1 - q0² - q1² - q2² - q3²) be the orthonormality error. The term k·λ·q is added to the angular kinematic equations in order to reduce the numerical integration error. According to reference [2] k·Δt ≤ 1. See 2 for more information on orthonormality error factor.\n\nReferences\n\n[1] Stevens, B. L., Lewis, F. L., (1992). Aircraft control and simulation:\n\ndynamics, controls design, and autonomous systems. John Wiley & Sons.  (Section 1.5, equations 1.5-4, page 46)\n\n[2] Zipfel, P. H. (2007). Modeling and simulation of aerospace vehicle\n\ndynamics. American Institute of Aeronautics and Astronautics.  (page 368, figure 10.2)\n\n\n\n\n\n"
},

{
    "location": "api-reference/#FlightMechanics.six_dof_ecef_quaternion_fixed_mass-NTuple{5,Any}",
    "page": "API reference",
    "title": "FlightMechanics.six_dof_ecef_quaternion_fixed_mass",
    "category": "method",
    "text": "six_dof_ecef_quaternion_fixed_mass(state, mass, inertia, forces, moments;\nk=0.0, ellipsoid=WGS84)\n\nSix degrees of freedom dynamic system using quaternions for attitude representation and assuming fixed mass.\n\nEllipsoidal Earth Model is used and the ECEF reference frame is considered inertial.\n\nIt is considered that the aircraft xb-zb plane is a plane of symmetry so that Jxy and Jyz cross-product of inertia are zero and will not be taken into account.\n\nArguments\n\nstate::12-element Array{Number,1}: state vector.   u, v, w: inertial linear velocity expressed in body axis. (m/s)   p, q, r: inertial rotatinal velocity expressed in body axis. (rad/s)   q0, q1, q2, q3: attitude given by quaternions.   xe, ye, ze: position wrt the inertial system origin expressed in Earth Axis. (m)\nmass::Number: total mass of the aircraft (kg)\ninertia::3×3 Array{Number,2}: inertia tensor (kg·m²)\nforces::3-element Array{Number,1}: total forces expressed in body axis. (N)\nmoments::3-element Array{Number,1}: total moments expressed in body axis.(N·m)\nk::Number: orthonormality error factor.\nellipsoid::Ellipsoid: ellipsoid model to be used.\n\nReturns\n\nstate_dot: state vector derivative according to the equation of motion,   inertial properties and applied forces and moments.\n\nNotes\n\nSee 1 or 2 for more information on quaternions <-> Euler angles conversions.\nOrthonormality error factor is related to a numerical stability artifact used in angular kinematic equations. Let λ = k * (1 - q0² - q1² - q2² - q3²) be the orthonormality error. The term k·λ·q is added to the angular kinematic equations in order to reduce the numerical integration error. According to reference [2] k·Δt ≤ 1. See 2 for more information on orthonormality error factor.\nImplementation based on [1]. However, [2] can also be read.\n\nReferences\n\n[1] Stevens, B. L., Lewis, F. L., (1992). Aircraft control and simulation:\n\ndynamics, controls design, and autonomous systems. John Wiley & Sons.  (page 45, formula 1.5-1)\n\n[2] Zipfel, P. H. (2007). Modeling and simulation of aerospace vehicle\n\ndynamics. American Institute of Aeronautics and Astronautics.  (page 396, figure 10.6)\n\n\n\n\n\n"
},

{
    "location": "api-reference/#Degrees-of-Freedom-dynamic-models-(dynamics/)-1",
    "page": "API reference",
    "title": "6 Degrees of Freedom dynamic models (dynamics/)",
    "category": "section",
    "text": "Modules = [FlightMechanics]\nPages   = [\"dynamics/sixdof_euler_fixed_mass.jl\",\n           \"dynamics/sixdof_quaternion_fixed_mass.jl\",\n           \"dynamics/sixdof_ecef_quaternion_fixed_mass.jl\"\n          ]"
},

{
    "location": "isa/#",
    "page": "International Standard Atmosphere",
    "title": "International Standard Atmosphere",
    "category": "page",
    "text": ""
},

{
    "location": "isa/#FlightMechanics.atmosphere_isa-Tuple{Real}",
    "page": "International Standard Atmosphere",
    "title": "FlightMechanics.atmosphere_isa",
    "category": "method",
    "text": "atmosphere_isa(height)\n\nCalculate temperature, pressure, density and sound velocity for the given geopotential height according to International Standard Atmosphere 1976.\n\nReferences\n\n[1] U.S. Standard Atmosphere, 1976, U.S. Government Printing Office,       Washington, D.C., 1976\n\nFrom: https://en.wikipedia.org/wiki/U.S.StandardAtmosphere\n\nLayer h (m) p (Pa) T (K) α (K/m)\n0 0 101325 288.15 -0.0065\n1 11000 22632.1 216.65 0\n2 20000 5474.89 216.65 0.001\n3 32000 868.019 228.65 0.0028\n4 47000 110.906 270.65 0\n5 51000 66.9389 270.65 -0.0028\n6 71000 3.95642 214.65 -0.002\n\n\n\n\n\n"
},

{
    "location": "isa/#International-Standard-Atmosphere-1",
    "page": "International Standard Atmosphere",
    "title": "International Standard Atmosphere",
    "category": "section",
    "text": "FlightMechanics.atmosphere_isa(height::Real)TBD..."
},

{
    "location": "coordinate-systems/#",
    "page": "Coordinate systems",
    "title": "Coordinate systems",
    "category": "page",
    "text": ""
},

{
    "location": "coordinate-systems/#Coordinate-systems-1",
    "page": "Coordinate systems",
    "title": "Coordinate systems",
    "category": "section",
    "text": "TBD..."
},

{
    "location": "coordinate-systems/#ECEF-1",
    "page": "Coordinate systems",
    "title": "ECEF",
    "category": "section",
    "text": ""
},

{
    "location": "coordinate-systems/#Earth-1",
    "page": "Coordinate systems",
    "title": "Earth",
    "category": "section",
    "text": ""
},

{
    "location": "coordinate-systems/#Horizon/NED-1",
    "page": "Coordinate systems",
    "title": "Horizon/NED",
    "category": "section",
    "text": ""
},

{
    "location": "coordinate-systems/#Body/ABC-1",
    "page": "Coordinate systems",
    "title": "Body/ABC",
    "category": "section",
    "text": ""
},

{
    "location": "coordinate-systems/#Wind-1",
    "page": "Coordinate systems",
    "title": "Wind",
    "category": "section",
    "text": ""
},

{
    "location": "dynamic_models/#",
    "page": "Dynamic System Models",
    "title": "Dynamic System Models",
    "category": "page",
    "text": ""
},

{
    "location": "dynamic_models/#Dynamic-System-Models-1",
    "page": "Dynamic System Models",
    "title": "Dynamic System Models",
    "category": "section",
    "text": "TBD..."
},

{
    "location": "dynamic_models/#Six-Degrees-of-Freedom-(6DOF)-1",
    "page": "Dynamic System Models",
    "title": "Six Degrees of Freedom (6DOF)",
    "category": "section",
    "text": "symmetrical aircraft"
},

{
    "location": "dynamic_models/#Euler-Flat-Earth-Fixed-mass-1",
    "page": "Dynamic System Models",
    "title": "Euler Flat Earth Fixed mass",
    "category": "section",
    "text": ""
},

{
    "location": "dynamic_models/#Quaternion-Flat-Earth-Fixed-mass-1",
    "page": "Dynamic System Models",
    "title": "Quaternion Flat Earth Fixed mass",
    "category": "section",
    "text": ""
},

{
    "location": "dynamic_models/#Quaternion-Ellipsoidal-Earth-Fixed-mass-1",
    "page": "Dynamic System Models",
    "title": "Quaternion Ellipsoidal Earth Fixed mass",
    "category": "section",
    "text": ""
},

{
    "location": "anemometry/#",
    "page": "Anemometry",
    "title": "Anemometry",
    "category": "page",
    "text": ""
},

{
    "location": "anemometry/#Anemometry-1",
    "page": "Anemometry",
    "title": "Anemometry",
    "category": "section",
    "text": "TBD..."
},

{
    "location": "anemometry/#TAS-1",
    "page": "Anemometry",
    "title": "TAS",
    "category": "section",
    "text": ""
},

{
    "location": "anemometry/#CAS-1",
    "page": "Anemometry",
    "title": "CAS",
    "category": "section",
    "text": ""
},

{
    "location": "anemometry/#EAS-1",
    "page": "Anemometry",
    "title": "EAS",
    "category": "section",
    "text": ""
},

{
    "location": "anemometry/#IAS-1",
    "page": "Anemometry",
    "title": "IAS",
    "category": "section",
    "text": ""
},

{
    "location": "anemometry/#ASI-1",
    "page": "Anemometry",
    "title": "ASI",
    "category": "section",
    "text": ""
},

{
    "location": "kinematics/#",
    "page": "Kinematics",
    "title": "Kinematics",
    "category": "page",
    "text": ""
},

{
    "location": "kinematics/#Kinematics-1",
    "page": "Kinematics",
    "title": "Kinematics",
    "category": "section",
    "text": "TBD...Talk about accelerometer and GPS measurements transalation"
},

{
    "location": "models/#",
    "page": "Models",
    "title": "Models",
    "category": "page",
    "text": ""
},

{
    "location": "models/#Models-1",
    "page": "Models",
    "title": "Models",
    "category": "section",
    "text": ""
},

{
    "location": "models/#FlightMechanics.Simulator.Models.AeroState",
    "page": "Models",
    "title": "FlightMechanics.Simulator.Models.AeroState",
    "category": "type",
    "text": "AeroState(alpha, beta, alpha_dot, tas, eas, cas, ias, qinf, mach)\n\nAerodynamic state struct storing relevant aerodynamic data.\n\nConstructors\n\nDifferent constructors are provided:\n\nAeroState(alpha, beta, alpha_dot, tas, eas, cas, ias, qinf, mach)\nAeroState(state::State, env::Environment)\nAeroState(tas::Number, alpha::Number, beta::Number, height::Number)\n\n\n\n\n\n"
},

{
    "location": "models/#AeroState-1",
    "page": "Models",
    "title": "AeroState",
    "category": "section",
    "text": "Modules = [FlightMechanics.Simulator.Models]\nPages   = [\"aero_state.jl\"]"
},

{
    "location": "models/#State-1",
    "page": "Models",
    "title": "State",
    "category": "section",
    "text": "Modules = [FlightMechanics.Simulator.Models]\nPages   = [\"state.jl\"]"
},

{
    "location": "models/#FlightMechanics.Simulator.Models.Position",
    "page": "Models",
    "title": "FlightMechanics.Simulator.Models.Position",
    "category": "type",
    "text": "Position(llh, xzy_earth, xyz_ecef)\n\nPosition information:     - llh (latitude, longitude, height) [rad, rad, m]     - Earth (x, y, z) [m]     - ECEF (x, y, z) [m]\n\nConstructors\n\nPositionLLH(lat, lon, h, xe=0., ye=0., ze=0.)\nPositionECEF(x, y, z, xe=0., ye=0., ze=0.)\nPositionEarth(x, y, z, lat=0., lon=0., h=0.)\n\n\n\n\n\n"
},

{
    "location": "models/#Position-1",
    "page": "Models",
    "title": "Position",
    "category": "section",
    "text": "Modules = [FlightMechanics.Simulator.Models]\nPages   = [\"position.jl\"]"
},

{
    "location": "models/#FlightMechanics.Simulator.Models.Attitude",
    "page": "Models",
    "title": "FlightMechanics.Simulator.Models.Attitude",
    "category": "type",
    "text": "Attitude objects that contains Euler angles and quaternions.\n\nConstructors\n\nAttitude(psi, theta, phi)\nAttitude(q0, q1, q2, q3)\n\n\n\n\n\n"
},

{
    "location": "models/#Attitude-1",
    "page": "Models",
    "title": "Attitude",
    "category": "section",
    "text": "Modules = [FlightMechanics.Simulator.Models]\nPages   = [\"attitude.jl\"]"
},

{
    "location": "models/#FlightMechanics.Simulator.Models.AtmosphereISA",
    "page": "Models",
    "title": "FlightMechanics.Simulator.Models.AtmosphereISA",
    "category": "type",
    "text": "AtmosphereISA(temperature, pressure, density, sound_velocity)\n\nInternational Standard Atmosphere 1976.\n\nSee also\n\natmosphere_isa(height)\n\nReferences\n\n[1] U.S. Standard Atmosphere, 1976, U.S. Government Printing Office,       Washington, D.C., 1976\n\nFrom: https://en.wikipedia.org/wiki/U.S.StandardAtmosphere\n\nLayer h (m) p (Pa) T (K) α (K/m)\n0 0 101325 288.15 -0.0065\n1 11000 22632.1 216.65 0\n2 20000 5474.89 216.65 0.001\n3 32000 868.019 228.65 0.0028\n4 47000 110.906 270.65 0\n5 51000 66.9389 270.65 -0.0028\n6 71000 3.95642 214.65 -0.002\n\n\n\n\n\n"
},

{
    "location": "models/#FlightMechanics.Simulator.Models.ConstantWind",
    "page": "Models",
    "title": "FlightMechanics.Simulator.Models.ConstantWind",
    "category": "type",
    "text": "ConstantWind(direction, intensity, vertical)\n\nConstant wind structure:\n\ndirection: wind blowing from that direction [rad]\nintensity: wind speed [m/s]\nvertical: vertical wind speed [m/s] positive blowing upwards.\n\nConstructors\n\nConstantWind(): No wind.\n\n\n\n\n\n"
},

{
    "location": "models/#FlightMechanics.Simulator.Models.EarthConstantGravity",
    "page": "Models",
    "title": "FlightMechanics.Simulator.Models.EarthConstantGravity",
    "category": "type",
    "text": "EarthConstantGravity(value, body_vector)\n\nEarth Constant gravity model with value 9.80665 m/s² and oriented towards local horizon Z axis.\n\nConstructors\n\nEarthConstantGravity(value, body_vector)\nEarthConstantGravity()\n\n\n\n\n\n"
},

{
    "location": "models/#FlightMechanics.Simulator.Models.Environment",
    "page": "Models",
    "title": "FlightMechanics.Simulator.Models.Environment",
    "category": "type",
    "text": "Environment(atmos::Atmosphere, wind::Wind, grav::Gravity)\n\nEnvironment information composed of atmosphere, wind and gravity.\n\nConstructors\n\nDefatultEnvironment(): ISA atomosphere, Constant zero wind, and Constant gravity.\n\n\n\n\n\n"
},

{
    "location": "models/#FlightMechanics.Simulator.Models.get_wind_NED-Tuple{FlightMechanics.Simulator.Models.Wind}",
    "page": "Models",
    "title": "FlightMechanics.Simulator.Models.get_wind_NED",
    "category": "method",
    "text": "get_wind_NED(wind::Wind)\n\nExpress wind in local horizon axis [N, E, D].\n\n\n\n\n\n"
},

{
    "location": "models/#FlightMechanics.Simulator.Models.Atmosphere",
    "page": "Models",
    "title": "FlightMechanics.Simulator.Models.Atmosphere",
    "category": "type",
    "text": "Atmosphere\n\nAtmospheric information at a given altitude.\n\n\n\n\n\n"
},

{
    "location": "models/#FlightMechanics.Simulator.Models.Wind",
    "page": "Models",
    "title": "FlightMechanics.Simulator.Models.Wind",
    "category": "type",
    "text": "Wind\n\nWind information at a given placement.\n\n\n\n\n\n"
},

{
    "location": "models/#FlightMechanics.Simulator.Models.get_wind_body-Tuple{FlightMechanics.Simulator.Models.Wind,FlightMechanics.Simulator.Models.State}",
    "page": "Models",
    "title": "FlightMechanics.Simulator.Models.get_wind_body",
    "category": "method",
    "text": "get_wind_body(wind::Wind, state::State)\n\nExpress wind body axis [N, E, D] given the Attitude stored in State.\n\n\n\n\n\n"
},

{
    "location": "models/#Environment-1",
    "page": "Models",
    "title": "Environment",
    "category": "section",
    "text": "Modules = [FlightMechanics.Simulator.Models]\nPages   = [\"environment.jl\"]"
},

{
    "location": "models/#Aircraft-1",
    "page": "Models",
    "title": "Aircraft",
    "category": "section",
    "text": ""
},

{
    "location": "models/#FlightMechanics.Simulator.Models.PointForcesMoments",
    "page": "Models",
    "title": "FlightMechanics.Simulator.Models.PointForcesMoments",
    "category": "type",
    "text": "PointForcesMoments\n\nForces and moments applied on a point. This objects can be added, translated or rotated to be expressed in other coordinate system.\n\nConstructor\n\nPointForcesMoments(point::Array{Number, 1}, forces::Array{Number, 1},\n                   moments::Array{Number, 1})\n\n\n\n\n\n"
},

{
    "location": "models/#Base.:*-Tuple{FlightMechanics.Simulator.Models.PointForcesMoments,Number}",
    "page": "Models",
    "title": "Base.:*",
    "category": "method",
    "text": "Multiply the forces and moments by a number.\n\n\n\n\n\n"
},

{
    "location": "models/#Base.:+-Tuple{FlightMechanics.Simulator.Models.PointForcesMoments,FlightMechanics.Simulator.Models.PointForcesMoments}",
    "page": "Models",
    "title": "Base.:+",
    "category": "method",
    "text": "Add two PointForcesMoments objects. The result will be expressed in the first point.\n\n\n\n\n\n"
},

{
    "location": "models/#Base.:+-Union{Tuple{T}, Tuple{PointForcesMoments,PointForcesMoments,Array{T,1}}} where T<:Number",
    "page": "Models",
    "title": "Base.:+",
    "category": "method",
    "text": "+(pfm1::PointForcesMoments, pfm2::PointForcesMoments, point::Array{T, 1})\n  where T<:Number\n\nAdd two PointForcesMoments objects expressing the result in point P.\n\n\n\n\n\n"
},

{
    "location": "models/#Base.:--Tuple{FlightMechanics.Simulator.Models.PointForcesMoments,FlightMechanics.Simulator.Models.PointForcesMoments}",
    "page": "Models",
    "title": "Base.:-",
    "category": "method",
    "text": "Substract two PointForcesMoments objects. The result will be expressed in the first point.\n\n\n\n\n\n"
},

{
    "location": "models/#Base.:--Union{Tuple{T}, Tuple{PointForcesMoments,PointForcesMoments,Array{T,1}}} where T<:Number",
    "page": "Models",
    "title": "Base.:-",
    "category": "method",
    "text": "-(pfm1::PointForcesMoments, pfm2::PointForcesMoments, point::Array{T, 1})\n  where T<:Number\n\nSubstract two PointForcesMoments objects expressing the result in point P.\n\n\n\n\n\n"
},

{
    "location": "models/#Base.isapprox-Tuple{FlightMechanics.Simulator.Models.PointForcesMoments,FlightMechanics.Simulator.Models.PointForcesMoments}",
    "page": "Models",
    "title": "Base.isapprox",
    "category": "method",
    "text": "Check if two PointForcesMoments are equivalent when expressed at the same point.\n\n\n\n\n\n"
},

{
    "location": "models/#FlightMechanics.Simulator.Models.rotate-Tuple{FlightMechanics.Simulator.Models.PointForcesMoments,Any,Any,Any}",
    "page": "Models",
    "title": "FlightMechanics.Simulator.Models.rotate",
    "category": "method",
    "text": "rotate(pfm::PointForcesMoments, psi, theta, phi)\n\nExpress the forces and moments in other coordinate system using the Euler angles that orientate the original pfm with respect to the second.\n\n\n\n\n\n"
},

{
    "location": "models/#FlightMechanics.Simulator.Models.translate_forces_moments-Union{Tuple{T}, Tuple{PointForcesMoments,Array{T,1}}} where T<:Number",
    "page": "Models",
    "title": "FlightMechanics.Simulator.Models.translate_forces_moments",
    "category": "method",
    "text": "translate_forces_moments(pfm::PointForcesMoments, point::Array{T, 1}) where T<:Number\n\nCalculate equivalent PointForcesMoments in point Q given the forces and moments at point P. Forces are preserved and moments are calculated taking into account the arm between the two points.\n\nM_Q = M_P + r 	imes F\n\n\n\n\n\n"
},

{
    "location": "models/#PointForcesMoments-1",
    "page": "Models",
    "title": "PointForcesMoments",
    "category": "section",
    "text": "Modules = [FlightMechanics.Simulator.Models]\nPages   = [\"point_forces_moments.jl\"]"
},

{
    "location": "models/#Propulsion-1",
    "page": "Models",
    "title": "Propulsion",
    "category": "section",
    "text": "Modules = [FlightMechanics.Simulator.Models]\nPages   = [\"propulsion.jl\"]"
},

{
    "location": "models/#FlightMechanics.Simulator.Models.Aerodynamics",
    "page": "Models",
    "title": "FlightMechanics.Simulator.Models.Aerodynamics",
    "category": "type",
    "text": "Aerodynamics\n\nAerodynamic forces and moments information\n\n\n\n\n\n"
},

{
    "location": "models/#Aerodynamics-1",
    "page": "Models",
    "title": "Aerodynamics",
    "category": "section",
    "text": "Modules = [FlightMechanics.Simulator.Models]\nPages   = [\"aerodynamics.jl\"]"
},

{
    "location": "models/#FCS-1",
    "page": "Models",
    "title": "FCS",
    "category": "section",
    "text": "Modules = [FlightMechanics.Simulator.Models]\nPages   = [\"fcs.jl\"]"
},

{
    "location": "models/#FlightMechanics.Simulator.Models.RigidSolid",
    "page": "Models",
    "title": "FlightMechanics.Simulator.Models.RigidSolid",
    "category": "type",
    "text": "RigidSolid(mass::Number, cg::Array{T, 1}, inertia::Array{T, 2})\n\nRigid solid represented by its mass center of gravity position reference system and inertia tensor.\n\n\n\n\n\n"
},

{
    "location": "models/#Base.:+-Tuple{FlightMechanics.Simulator.Models.RigidSolid,FlightMechanics.Simulator.Models.RigidSolid}",
    "page": "Models",
    "title": "Base.:+",
    "category": "method",
    "text": "+(comp1::RigidSolid, comp2::RigidSolid)\n\nCompound two RigidSolid objects. Masses are added, a new cg is calculated and the inertia tensors are added after being expressed with respect to the new center of gravity using Steiner\'s theorem.\n\n\n\n\n\n"
},

{
    "location": "models/#FlightMechanics.Simulator.Models.PointMass-Union{Tuple{T}, Tuple{Number,Array{T,1}}} where T<:Number",
    "page": "Models",
    "title": "FlightMechanics.Simulator.Models.PointMass",
    "category": "method",
    "text": "PointMass(mass::Number, position::Array{T, 1})\n\nPoint mass represented by its mass and position. It is represented by a RigidSolid with null inertia tensor.\n\n\n\n\n\n"
},

{
    "location": "models/#FlightMechanics.Simulator.Models.get_inertia-Union{Tuple{T}, Tuple{RigidSolid,Array{T,1}}} where T<:Number",
    "page": "Models",
    "title": "FlightMechanics.Simulator.Models.get_inertia",
    "category": "method",
    "text": "get_inertia(rs::RigidSolid, point::Array{T, 1}) where T<:Number\n\nCalculate inertia tensor of a RigidSolid object in a point P using Steiner\'s theorem.\n\n\n\n\n\n"
},

{
    "location": "models/#RigidSolid-and-PointMass-1",
    "page": "Models",
    "title": "RigidSolid & PointMass",
    "category": "section",
    "text": "Modules = [FlightMechanics.Simulator.Models]\nPages   = [\"mass.jl\"]"
},

{
    "location": "aircrafts/#",
    "page": "Aircrafts",
    "title": "Aircrafts",
    "category": "page",
    "text": ""
},

{
    "location": "aircrafts/#Aircrafts-1",
    "page": "Aircrafts",
    "title": "Aircrafts",
    "category": "section",
    "text": ""
},

{
    "location": "aircrafts/#C310-1",
    "page": "Aircrafts",
    "title": "C310",
    "category": "section",
    "text": "Aerodynamic data obtained from JSBSim model.\nPropulsion: engine is supposed to provide power proportional to the stick position and propeller has constant efficiency.\nFCS: reversible control system."
},

{
    "location": "trimmer/#",
    "page": "Trimmer",
    "title": "Trimmer",
    "category": "page",
    "text": ""
},

{
    "location": "trimmer/#FlightMechanics.Simulator.Aircrafts.steady_state_trim",
    "page": "Trimmer",
    "title": "FlightMechanics.Simulator.Aircrafts.steady_state_trim",
    "category": "function",
    "text": "steady_state_trim(ac::Aircraft, fcs::FCS, env::Environment, tas::Number,\n    pos::Position, psi::Number, gamma::Number, turn_rate::Number)\n\nFind a steady state flight condition.\n\nInputs\n\nac: aircraft to be trimmed. fcs: flight control system for that aircraft. Controls given by     get_controls_trimmer will be used to trim the aircraft while the rest     will remain constant. env: environment variables (atmospheric values, wind and gravity). tas: true airspeed [m/s]. pos: position of the aircraft. psi: heading of the aircraft [rad]. gamma: aerodynamic rate of climb of the aircraft [rad]. turn_rate: heading rate of change [rad/s].\n\nReturns\n\nac: trimmed aircraft. aerostate: trimmed aerostate. state: trimmed state. env: environment. fcs: trimmed FCS.\n\nReferences\n\nSee section 2.5 in [1] for the definition of steady-state flight condition. See section 3.4 in [1] for the algorithm description.\n\n[1] Stevens, B. L., Lewis, F. L., (1992). Aircraft control and simulation:\n\ndynamics, controls design, and autonomous systems. John Wiley & Sons.  (page 41, formula 1.4-23)\n\n\n\n\n\n"
},

{
    "location": "trimmer/#Trimmer-1",
    "page": "Trimmer",
    "title": "Trimmer",
    "category": "section",
    "text": "Modules = [FlightMechanics.Simulator.Aircrafts]\nPages   = [\"trimmer.jl\"]"
},

]}
