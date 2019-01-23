var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#AprilTags-1",
    "page": "Home",
    "title": "AprilTags",
    "category": "section",
    "text": "(Image: Build Status)(Image: codecov.io)This package is a ccall wrapper for the AprilTags library tailored for Julia."
},

{
    "location": "#Installation-1",
    "page": "Home",
    "title": "Installation",
    "category": "section",
    "text": "AprilTags.jl can be installed in Julia 0.7 and Julia 1.0 with:#enter \']\' to get the package manager and then type:\n(v0.7) pkg> add AprilTags\n# or\nusing Pkg\nPkg.add(\"AprilTags\")Note that Julia 0.6 is no longer supprted going forward. Please use v0.0.2 for julia 0.6.  "
},

{
    "location": "#Usage-1",
    "page": "Home",
    "title": "Usage",
    "category": "section",
    "text": ""
},

{
    "location": "#Examples-1",
    "page": "Home",
    "title": "Examples",
    "category": "section",
    "text": "See examples and test folder for basic AprilTag usage examples."
},

{
    "location": "#Initialization-1",
    "page": "Home",
    "title": "Initialization",
    "category": "section",
    "text": "Initialize a detector with the default (tag36h11) tag family.# Create default detector\ndetector = AprilTagDetector()The tag detector parameters can be set as shown bellow. The default parameters are the recommended starting point.detector.nThreads = 4 #number of threads to use\ndetector.quad_decimate =  1.0 #\"Decimate input image by this factor\"\ndetector.quad_sigma = 0.0 #\"Apply low-pass blur to input; negative sharpens\"\ndetector.refine_edges = 1 #\"Set to 1 to spend more time to align edges of tags\"\ndetector.refine_decode = 0 #\"Set to 1 to spend more time to decode tags\"\ndetector.refine_pose = 0 #\"Set to 1 to spend more time to precisely localize tags\""
},

{
    "location": "#quad_decimate-1",
    "page": "Home",
    "title": "quad_decimate",
    "category": "section",
    "text": "Detection of quads can be done on a lower-resolution image, improving speed at a cost of pose accuracy and a slight decrease in detection rate. Decoding the binary payload is still done at full resolution.   Increase the image decimation if faster processing is required. A factor of 1.0 means the full-size input image is used."
},

{
    "location": "#quad_sigma-1",
    "page": "Home",
    "title": "quad_sigma",
    "category": "section",
    "text": "What Gaussian blur should be applied to the segmented image (used for quad detection?).   Parameter is the standard deviation in pixels. Very noisy images benefit from non-zero values (e.g. 0.8)."
},

{
    "location": "#refine_edges-1",
    "page": "Home",
    "title": "refine_edges",
    "category": "section",
    "text": "When non-zero, the edges of the each quad are adjusted to \"snap to\" strong gradients nearby. This is useful when decimation is employed, as it can increase the quality of the initial quad estimate substantially. Generally recommended to be on (1). Very computationally inexpensive. Option is ignored if quad_decimate = 1."
},

{
    "location": "#refine_decode-1",
    "page": "Home",
    "title": "refine_decode",
    "category": "section",
    "text": "When non-zero, detections are refined in a way intended to increase the number of detected tags. Especially effective for very small tags near the resolution threshold (e.g. 10px on a side)."
},

{
    "location": "#refine_pose-1",
    "page": "Home",
    "title": "refine_pose",
    "category": "section",
    "text": "When non-zero, detections are refined in a way intended to increase the accuracy of the extracted pose. This is done by maximizing the contrast around the black and white border of the tag. This generally increases the number of successfully detected tags, though not as effectively (or quickly) as refine_decode.   This option must be enabled in order for \"goodness\" to be computed."
},

{
    "location": "#Detection-1",
    "page": "Home",
    "title": "Detection",
    "category": "section",
    "text": "Process an input image and return a vector of detections. The input image can be loaded with the Images package.image = load(\"example_image.jpg\")\ntags = detector(image)\n#do something with tags hereThe caller is responsible for freeing the memmory by callingfreeDetector!(detector)"
},

{
    "location": "#Creating-the-AprilTag-Images-1",
    "page": "Home",
    "title": "Creating the AprilTag Images",
    "category": "section",
    "text": "The AprilTag images can be created using the getAprilTagImage function.   Eg. to create a tag image with id 1 from family \'tag36h11\' run:getAprilTagImage(1, AprilTags.tag36h11)"
},

{
    "location": "#Manual-Outline-1",
    "page": "Home",
    "title": "Manual Outline",
    "category": "section",
    "text": "Pages = [\n    \"index.md\"\n    \"func_ref.md\"\n]"
},

{
    "location": "func_ref/#",
    "page": "Functions",
    "title": "Functions",
    "category": "page",
    "text": ""
},

{
    "location": "func_ref/#Function-Reference-1",
    "page": "Functions",
    "title": "Function Reference",
    "category": "section",
    "text": "Pages = [\n    \"func_ref.md\"\n]\nDepth = 3"
},

{
    "location": "func_ref/#AprilTags.AprilTagDetector",
    "page": "Functions",
    "title": "AprilTags.AprilTagDetector",
    "category": "type",
    "text": "AprilTagDetector(tagfamily=tag36h11)\n\nCreate a default AprilTag detector with the 36h11 tag family Create an AprilTag detector with tag family in tagfamily::TagFamilies @enum TagFamilies tag36h11 tag36h10 tag25h9 tag16h5\n\n\n\n\n\n"
},

{
    "location": "func_ref/#AprilTags.freeDetector!",
    "page": "Functions",
    "title": "AprilTags.freeDetector!",
    "category": "function",
    "text": "freeDetector!(apriltagdetector)\n\nFree the allocated memmory\n\n\n\n\n\n"
},

{
    "location": "func_ref/#AprilTags.homography_to_pose",
    "page": "Functions",
    "title": "AprilTags.homography_to_pose",
    "category": "function",
    "text": "homography_to_pose(H, fx, fy, cx, cy, [taglength = 2.0])\n\nGiven a 3x3 homography matrix and the camera model (focal length and centre), compute the pose of the tag. The focal lengths should be given in pixels. The returned units are those of the tag size, therefore the translational components should be scaled with the tag size. Note: the tag coordinates are from (-1,-1) to (1,1), i.e. the tag size has lenght of 2 units. Optionally, the tag length (in metre) can be passed to return a scaled value.\n\n\n\n\n\n"
},

{
    "location": "func_ref/#AprilTags.homographytopose",
    "page": "Functions",
    "title": "AprilTags.homographytopose",
    "category": "function",
    "text": "homographytopose(H, fx, fy, cx, cy, [taglength = 2.0])\n\nGiven a 3x3 homography matrix and the camera model (focal length and centre), compute the pose of the tag. The focal lengths should be given in pixels. The returned units are those of the tag size, therefore the translational components should be scaled with the tag size. Note: the tag coordinates are from (-1,-1) to (1,1), i.e. the tag size has lenght of 2 units. Optionally, the tag length (in metre) can be passed to return a scaled value. The camara coordinate system: camera looking in positive Z axis with x to the right and y down.\n\n\n\n\n\n"
},

{
    "location": "func_ref/#AprilTags.drawTagBox!",
    "page": "Functions",
    "title": "AprilTags.drawTagBox!",
    "category": "function",
    "text": "drawTagBox!(image, tag)\n\nDraw a box around the tag. imageCol = RGB.(image) foreach(tag->drawTagBox!(imageCol, tag), tags)\n\n\n\n\n\n"
},

{
    "location": "func_ref/#AprilTags.drawTagAxes!",
    "page": "Functions",
    "title": "AprilTags.drawTagAxes!",
    "category": "function",
    "text": "drawTagAxes!(image, tag, CameraMatrix)\n\nDraw the tag x, y, and z axes to show the orientation. imageCol = RGB.(image) foreach(tag->drawTagAxes!(imageCol, tag, K), tags)\n\n\n\n\n\n"
},

{
    "location": "func_ref/#AprilTags.getAprilTagImage",
    "page": "Functions",
    "title": "AprilTags.getAprilTagImage",
    "category": "function",
    "text": "getAprilTagImage(tagIndex, tagfamily=tag36h11)\n\nReturn an image [Gray{N0f8}] for with tagIndex from tag family in tagfamily::TagFamilies @enum TagFamilies tag36h11 tag36h10 tag25h9 tag16h5\n\n\n\n\n\n"
},

{
    "location": "func_ref/#AprilTags.threadcalldetect",
    "page": "Functions",
    "title": "AprilTags.threadcalldetect",
    "category": "function",
    "text": "threadcalldetect(detector, image)\n\nRun the april tag detector on a image\n\n\n\n\n\n"
},

{
    "location": "func_ref/#AprilTags.jl-functions-1",
    "page": "Functions",
    "title": "AprilTags.jl functions",
    "category": "section",
    "text": "AprilTags.AprilTagDetector\nAprilTags.freeDetector!\nhomography_to_pose\nhomographytopose\ndrawTagBox!\ndrawTagAxes!\ngetAprilTagImage\nthreadcalldetect"
},

{
    "location": "func_ref/#AprilTags.apriltag_detector_create",
    "page": "Functions",
    "title": "AprilTags.apriltag_detector_create",
    "category": "function",
    "text": "apriltag_detector_create()\n\nCreate a AprilTag Detector object with all fields set to default value.\n\n\n\n\n\n"
},

{
    "location": "func_ref/#AprilTags.tag36h11_create",
    "page": "Functions",
    "title": "AprilTags.tag36h11_create",
    "category": "function",
    "text": "tag36h11_create()\n\nCreate a AprilTag family object for tag36h11 with all fields set to default value.\n\n\n\n\n\n"
},

{
    "location": "func_ref/#AprilTags.tag36h11_destroy",
    "page": "Functions",
    "title": "AprilTags.tag36h11_destroy",
    "category": "function",
    "text": "tag36h11_destroy(tf)\n\nDestroy the AprilTag family object.\n\n\n\n\n\n"
},

{
    "location": "func_ref/#AprilTags.apriltag_detector_add_family",
    "page": "Functions",
    "title": "AprilTags.apriltag_detector_add_family",
    "category": "function",
    "text": "apriltag_detector_add_family(tag_detector, tag_family)\n\nAdd a tag family to an AprilTag Detector object. The caller still \"owns\" the family and a single instance should only be provided to one apriltag detector instance.\n\n\n\n\n\n"
},

{
    "location": "func_ref/#AprilTags.apriltag_detector_detect",
    "page": "Functions",
    "title": "AprilTags.apriltag_detector_detect",
    "category": "function",
    "text": "apriltag_detector_detect(tag_detector, image)\n\nDetect tags from an image and return an array of apriltagdetectiont*. You can use apriltagdetectionsdestroy to free the array and the detections it contains, or call detectiondestroy and zarraydestroy yourself.\n\n\n\n\n\n"
},

{
    "location": "func_ref/#AprilTags.threadcall_apriltag_detector_detect",
    "page": "Functions",
    "title": "AprilTags.threadcall_apriltag_detector_detect",
    "category": "function",
    "text": "threadcall_apriltag_detector_detect(tag_detector, image)\n\nExperimental call apriltagdetectordetect in a seperate thread using the experimantal @threadcall Detect tags from an image and return an array of apriltagdetectiont*. You can use apriltagdetectionsdestroy to free the array and the detections it contains, or call detectiondestroy and zarraydestroy yourself.\n\n\n\n\n\n"
},

{
    "location": "func_ref/#Wrappers-1",
    "page": "Functions",
    "title": "Wrappers",
    "category": "section",
    "text": "apriltag_detector_create\ntag36h11_create\ntag36h11_destroy\napriltag_detector_add_family\napriltag_detector_detect\nthreadcall_apriltag_detector_detect"
},

{
    "location": "func_ref/#Index-1",
    "page": "Functions",
    "title": "Index",
    "category": "section",
    "text": ""
},

]}
