var documenterSearchIndex = {"docs": [

{
    "location": "#Base.isempty-Tuple{Ref{GDAL.OGRGeometryH}}",
    "page": "Home",
    "title": "Base.isempty",
    "category": "method",
    "text": "OGR_G_IsEmpty(OGRGeometryH hGeom) -> int\n\nTest if the geometry is empty.\n\nParameters\n\nhGeom: The Geometry to test.\n\nReturns\n\nTRUE if the geometry has no points, otherwise FALSE.\n\n\n\n\n\n"
},

{
    "location": "#Base.length-Tuple{Ref{GDAL.OGRGeometryH}}",
    "page": "Home",
    "title": "Base.length",
    "category": "method",
    "text": "OGR_G_Length(OGRGeometryH hGeom) -> double\n\nCompute length of a geometry.\n\nParameters\n\nhGeom: the geometry to operate on.\n\nReturns\n\nthe length or 0.0 for unsupported geometry types.\n\n\n\n\n\n"
},

{
    "location": "#GDAL._cplassert-Tuple{Any,Any,Integer}",
    "page": "Home",
    "title": "GDAL._cplassert",
    "category": "method",
    "text": "_CPLAssert(const char * pszExpression,\n           const char * pszFile,\n           int iLine) -> void\n\nReport failure of a logical assertion.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.addband-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALDatasetH,GDAL.GDALDataType,Any}",
    "page": "Home",
    "title": "GDAL.addband",
    "category": "method",
    "text": "GDALAddBand(GDALDatasetH hDataset,\n            GDALDataType eType,\n            char ** papszOptions) -> CPLErr\n\nAdd a band to a dataset.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.addderivedbandpixelfunc-Tuple{Any,Ref{GDAL.GDALDerivedPixelFunc}}",
    "page": "Home",
    "title": "GDAL.addderivedbandpixelfunc",
    "category": "method",
    "text": "GDALAddDerivedBandPixelFunc(const char * pszName,\n                            GDALDerivedPixelFunc pfnPixelFunc) -> CPLErr\n\nThis adds a pixel function to the global list of available pixel functions for derived bands.\n\nParameters\n\npszFuncName: Name used to access pixel function\npfnNewFunction: Pixel function associated with name. An existing pixel function registered with the same name will be replaced with the new one.\n\nReturns\n\nCE_None, invalid (NULL) parameters are currently ignored.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.addfielddefn-Tuple{Ref{GDAL.OGRFeatureDefnH},Ref{GDAL.OGRFieldDefnH}}",
    "page": "Home",
    "title": "GDAL.addfielddefn",
    "category": "method",
    "text": "OGR_FD_AddFieldDefn(OGRFeatureDefnH hDefn,\n                    OGRFieldDefnH hNewField) -> void\n\nAdd a new field definition to the passed feature definition.\n\nParameters\n\nhDefn: handle to the feature definition to add the field definition to.\nhNewField: handle to the new field definition.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.addgeometry-Tuple{Ref{GDAL.OGRGeometryH},Ref{GDAL.OGRGeometryH}}",
    "page": "Home",
    "title": "GDAL.addgeometry",
    "category": "method",
    "text": "OGR_G_AddGeometry(OGRGeometryH hGeom,\n                  OGRGeometryH hNewSubGeom) -> OGRErr\n\nAdd a geometry to a geometry container.\n\nParameters\n\nhGeom: existing geometry container.\nhNewSubGeom: geometry to add to the container.\n\nReturns\n\nOGRERRNONE if successful, or OGRERRUNSUPPORTEDGEOMETRYTYPE if the geometry type is illegal for the type of existing geometry.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.addgeometrydirectly-Tuple{Ref{GDAL.OGRGeometryH},Ref{GDAL.OGRGeometryH}}",
    "page": "Home",
    "title": "GDAL.addgeometrydirectly",
    "category": "method",
    "text": "OGR_G_AddGeometryDirectly(OGRGeometryH hGeom,\n                          OGRGeometryH hNewSubGeom) -> OGRErr\n\nAdd a geometry directly to an existing geometry container.\n\nParameters\n\nhGeom: existing geometry.\nhNewSubGeom: geometry to add to the existing geometry.\n\nReturns\n\nOGRERRNONE if successful, or OGRERRUNSUPPORTEDGEOMETRYTYPE if the geometry type is illegal for the type of geometry container.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.addgeomfielddefn-Tuple{Ref{GDAL.OGRFeatureDefnH},Ref{GDAL.OGRGeomFieldDefnH}}",
    "page": "Home",
    "title": "GDAL.addgeomfielddefn",
    "category": "method",
    "text": "OGR_FD_AddGeomFieldDefn(OGRFeatureDefnH hDefn,\n                        OGRGeomFieldDefnH hNewGeomField) -> void\n\nAdd a new field definition to the passed feature definition.\n\nParameters\n\nhDefn: handle to the feature definition to add the geometry field definition to.\nhNewGeomField: handle to the new field definition.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.addpart-Tuple{Ref{GDAL.OGRStyleMgrH},Ref{GDAL.OGRStyleToolH}}",
    "page": "Home",
    "title": "GDAL.addpart",
    "category": "method",
    "text": "OGR_SM_AddPart(OGRStyleMgrH hSM,\n               OGRStyleToolH hST) -> int\n\nAdd a part (style tool) to the current style.\n\nParameters\n\nhSM: handle to the style manager.\nhST: the style tool defining the part to add.\n\nReturns\n\nTRUE on success, FALSE on errors.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.addpoint-Tuple{Ref{GDAL.OGRGeometryH},Real,Real,Real}",
    "page": "Home",
    "title": "GDAL.addpoint",
    "category": "method",
    "text": "OGR_G_AddPoint(OGRGeometryH hGeom,\n               double dfX,\n               double dfY,\n               double dfZ) -> void\n\nAdd a point to a geometry (line string or point).\n\nParameters\n\nhGeom: handle to the geometry to add a point to.\ndfX: x coordinate of point to add.\ndfY: y coordinate of point to add.\ndfZ: z coordinate of point to add.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.addpoint_2d-Tuple{Ref{GDAL.OGRGeometryH},Real,Real}",
    "page": "Home",
    "title": "GDAL.addpoint_2d",
    "category": "method",
    "text": "OGR_G_AddPoint_2D(OGRGeometryH hGeom,\n                  double dfX,\n                  double dfY) -> void\n\nAdd a point to a geometry (line string or point).\n\nParameters\n\nhGeom: handle to the geometry to add a point to.\ndfX: x coordinate of point to add.\ndfY: y coordinate of point to add.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.addpointm-Tuple{Ref{GDAL.OGRGeometryH},Real,Real,Real}",
    "page": "Home",
    "title": "GDAL.addpointm",
    "category": "method",
    "text": "OGR_G_AddPointM(OGRGeometryH hGeom,\n                double dfX,\n                double dfY,\n                double dfM) -> void\n\nAdd a point to a geometry (line string or point).\n\nParameters\n\nhGeom: handle to the geometry to add a point to.\ndfX: x coordinate of point to add.\ndfY: y coordinate of point to add.\ndfM: m coordinate of point to add.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.addpointzm-Tuple{Ref{GDAL.OGRGeometryH},Real,Real,Real,Real}",
    "page": "Home",
    "title": "GDAL.addpointzm",
    "category": "method",
    "text": "OGR_G_AddPointZM(OGRGeometryH hGeom,\n                 double dfX,\n                 double dfY,\n                 double dfZ,\n                 double dfM) -> void\n\nAdd a point to a geometry (line string or point).\n\nParameters\n\nhGeom: handle to the geometry to add a point to.\ndfX: x coordinate of point to add.\ndfY: y coordinate of point to add.\ndfZ: z coordinate of point to add.\ndfM: m coordinate of point to add.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.addstyle-Tuple{Ref{GDAL.OGRStyleMgrH},Any,Any}",
    "page": "Home",
    "title": "GDAL.addstyle",
    "category": "method",
    "text": "OGR_SM_AddStyle(OGRStyleMgrH hSM,\n                const char * pszStyleName,\n                const char * pszStyleString) -> int\n\nAdd a style to the current style table.\n\nParameters\n\nhSM: handle to the style manager.\npszStyleName: the name of the style to add.\npszStyleString: the style string to use, or NULL to use the style stored in the manager.\n\nReturns\n\nTRUE on success, FALSE on errors.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.addstyle-Tuple{Ref{GDAL.OGRStyleTableH},Any,Any}",
    "page": "Home",
    "title": "GDAL.addstyle",
    "category": "method",
    "text": "OGR_STBL_AddStyle(OGRStyleTableH hStyleTable,\n                  const char * pszName,\n                  const char * pszStyleString) -> int\n\nAdd a new style in the table.\n\nParameters\n\nhStyleTable: handle to the style table.\npszName: the name the style to add.\npszStyleString: the style string to add.\n\nReturns\n\nTRUE on success, FALSE on error\n\n\n\n\n\n"
},

{
    "location": "#GDAL.adjustvaluetodatatype-Tuple{GDAL.GDALDataType,Real,Any,Any}",
    "page": "Home",
    "title": "GDAL.adjustvaluetodatatype",
    "category": "method",
    "text": "GDALAdjustValueToDataType(GDALDataType eDT,\n                          double dfValue,\n                          int * pbClamped,\n                          int * pbRounded) -> double\n\nAdjust a value to the output data type.\n\nParameters\n\neDT: target data type.\ndfValue: value to adjust.\npbClamped: pointer to a integer(boolean) to indicate if clamping has been made, or NULL\npbRounded: pointer to a integer(boolean) to indicate if rounding has been made, or NULL\n\nReturns\n\nadjusted value\n\n\n\n\n\n"
},

{
    "location": "#GDAL.allregister-Tuple{}",
    "page": "Home",
    "title": "GDAL.allregister",
    "category": "method",
    "text": "GDALAllRegister() -> void\n\nRegister all known configured GDAL drivers.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.alterfielddefn-Tuple{Ref{GDAL.OGRLayerH},Integer,Ref{GDAL.OGRFieldDefnH},Integer}",
    "page": "Home",
    "title": "GDAL.alterfielddefn",
    "category": "method",
    "text": "OGR_L_AlterFieldDefn(OGRLayerH,\n                     int iField,\n                     OGRFieldDefnH hNewFieldDefn,\n                     int nFlags) -> OGRErr\n\nAlter the definition of an existing field on a layer.\n\nParameters\n\nhLayer: handle to the layer.\niField: index of the field whose definition must be altered.\nhNewFieldDefn: new field definition\nnFlags: combination of ALTERNAMEFLAG, ALTERTYPEFLAG, ALTERWIDTHPRECISIONFLAG, ALTERNULLABLEFLAG and ALTERDEFAULT_FLAG to indicate which of the name and/or type and/or width and precision fields and/or nullability from the new field definition must be taken into account.\n\nReturns\n\nOGRERR_NONE on success.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.applygeotransform-Tuple{Any,Real,Real,Any,Any}",
    "page": "Home",
    "title": "GDAL.applygeotransform",
    "category": "method",
    "text": "GDALApplyGeoTransform(double * padfGeoTransform,\n                      double dfPixel,\n                      double dfLine,\n                      double * pdfGeoX,\n                      double * pdfGeoY) -> void\n\nApply GeoTransform to x/y coordinate.\n\nParameters\n\npadfGeoTransform: Six coefficient GeoTransform to apply.\ndfPixel: Input pixel position.\ndfLine: Input line position.\npdfGeoX: output location where geo_x (easting/longitude) location is placed.\npdfGeoY: output location where geo_y (northing/latitude) location is placed.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.applyverticalshiftgrid-Tuple{Ref{#s1235} where #s1235<:GDAL.GDALDatasetH,Ref{#s1234} where #s1234<:GDAL.GDALDatasetH,Integer,Real,Real,Any}",
    "page": "Home",
    "title": "GDAL.applyverticalshiftgrid",
    "category": "method",
    "text": "GDALApplyVerticalShiftGrid(GDALDatasetH hSrcDataset,\n                           GDALDatasetH hGridDataset,\n                           int bInverse,\n                           double dfSrcUnitToMeter,\n                           double dfDstUnitToMeter,\n                           const char *const * papszOptions) -> GDALDatasetH\n\nApply a vertical shift grid to a source (DEM typically) dataset.\n\nParameters\n\nhSrcDataset: source (DEM) dataset. Must not be NULL.\nhGridDataset: vertical grid shift dataset. Must not be NULL.\nbInverse: if set to FALSE, hGridDataset values will be added to hSrcDataset. If set to TRUE, they will be subtracted.\ndfSrcUnitToMeter: the factor to convert values from hSrcDataset to meters (1.0 if source values are in meter).\ndfDstUnitToMeter: the factor to convert shifted values from meter (1.0 if output values must be in meter).\npapszOptions: list of options, or NULL. Supported options are: \n\nRESAMPLING=NEAREST/BILINEAR/CUBIC. Defaults to BILINEAR. \n\nMAX_ERROR=val. Maximum error measured in input pixels that is allowed in approximating the transformation (0.0 for exact calculations). Defaults to 0.125 \n\nDATATYPE=Byte/UInt16/Int16/Float32/Float64. Output data type. If not specified will be the same as the one of hSrcDataset. \n\nERRORONMISSINGVERTSHIFT=YES/NO. Whether a missing/nodata value in hGridDataset should cause I/O requests to fail. Default is NO (in which case 0 will be used) \n\nSRCSRS=srsdef. Override projection on hSrcDataset;\n\nReturns\n\na new dataset corresponding to hSrcDataset adjusted with hGridDataset, or NULL. If not NULL, it must be closed with GDALClose().\n\n\n\n\n\n"
},

{
    "location": "#GDAL.approximatearcangles-NTuple{9,Real}",
    "page": "Home",
    "title": "GDAL.approximatearcangles",
    "category": "method",
    "text": "OGR_G_ApproximateArcAngles(double dfCenterX,\n                           double dfCenterY,\n                           double dfZ,\n                           double dfPrimaryRadius,\n                           double dfSecondaryRadius,\n                           double dfRotation,\n                           double dfStartAngle,\n                           double dfEndAngle,\n                           double dfMaxAngleStepSizeDegrees) -> OGRGeometryH\n\nStroke arc to linestring.\n\nParameters\n\ndfCenterX: center X\ndfCenterY: center Y\ndfZ: center Z\ndfPrimaryRadius: X radius of ellipse.\ndfSecondaryRadius: Y radius of ellipse.\ndfRotation: rotation of the ellipse clockwise.\ndfStartAngle: angle to first point on arc (clockwise of X-positive)\ndfEndAngle: angle to last point on arc (clockwise of X-positive)\ndfMaxAngleStepSizeDegrees: the largest step in degrees along the arc, zero to use the default setting.\n\nReturns\n\nOGRLineString geometry representing an approximation of the arc.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.approxtransform-Tuple{Any,Integer,Integer,Any,Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.approxtransform",
    "category": "method",
    "text": "GDALApproxTransform(void * pCBData,\n                    int bDstToSrc,\n                    int nPoints,\n                    double * x,\n                    double * y,\n                    double * z,\n                    int * panSuccess) -> int\n\nPerform approximate transformation.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.approxtransformerownssubtransformer-Tuple{Any,Integer}",
    "page": "Home",
    "title": "GDAL.approxtransformerownssubtransformer",
    "category": "method",
    "text": "GDALApproxTransformerOwnsSubtransformer(void * pCBData,\n                                        int bOwnFlag) -> void\n\nSet bOwnSubtransformer flag.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.area-Tuple{Ref{GDAL.OGRGeometryH}}",
    "page": "Home",
    "title": "GDAL.area",
    "category": "method",
    "text": "OGR_G_Area(OGRGeometryH hGeom) -> double\n\nCompute geometry area.\n\nParameters\n\nhGeom: the geometry to operate on.\n\nReturns\n\nthe area or 0.0 for unsupported geometry types.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.aretypesubtypecompatible-Tuple{GDAL.OGRFieldType,GDAL.OGRFieldSubType}",
    "page": "Home",
    "title": "GDAL.aretypesubtypecompatible",
    "category": "method",
    "text": "OGR_AreTypeSubTypeCompatible(OGRFieldType eType,\n                             OGRFieldSubType eSubType) -> int\n\nReturn if type and subtype are compatible.\n\nParameters\n\neType: the field type.\neSubType: the field subtype.\n\nReturns\n\nTRUE if type and subtype are compatible\n\n\n\n\n\n"
},

{
    "location": "#GDAL.argetnextupdatedregion-Tuple{Ref{GDAL.GDALAsyncReaderH},Real,Any,Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.argetnextupdatedregion",
    "category": "method",
    "text": "GDALARGetNextUpdatedRegion(GDALAsyncReaderH hARIO,\n                           double dfTimeout,\n                           int * pnBufXOff,\n                           int * pnBufYOff,\n                           int * pnBufXSize,\n                           int * pnBufYSize) -> GDALAsyncStatusType\n\nGet async IO update.\n\nParameters\n\nhARIO: handle to the async reader.\ndfTimeout: the number of seconds to wait for additional updates. Use -1 to wait indefinitely, or zero to not wait at all if there is no data available.\npnBufXOff: location to return the X offset of the area of the request buffer that has been updated.\npnBufYOff: location to return the Y offset of the area of the request buffer that has been updated.\npnBufXSize: location to return the X size of the area of the request buffer that has been updated.\npnBufYSize: location to return the Y size of the area of the request buffer that has been updated.\n\nReturns\n\nGARIO_ status, details described above.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.arlockbuffer-Tuple{Ref{GDAL.GDALAsyncReaderH},Real}",
    "page": "Home",
    "title": "GDAL.arlockbuffer",
    "category": "method",
    "text": "GDALARLockBuffer(GDALAsyncReaderH hARIO,\n                 double dfTimeout) -> int\n\nLock image buffer.\n\nParameters\n\nhARIO: handle to async reader.\ndfTimeout: the time in seconds to wait attempting to lock the buffer. -1.0 to wait indefinitely and 0 to not wait at all if it can\'t be acquired immediately. Default is -1.0 (infinite wait).\n\nReturns\n\nTRUE if successful, or FALSE on an error.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.arunlockbuffer-Tuple{Ref{GDAL.GDALAsyncReaderH}}",
    "page": "Home",
    "title": "GDAL.arunlockbuffer",
    "category": "method",
    "text": "GDALARUnlockBuffer(GDALAsyncReaderH hARIO) -> void\n\nUnlock image buffer.\n\nParameters\n\nhARIO: handle to async reader.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.assignspatialreference-Tuple{Ref{GDAL.OGRGeometryH},Ref{GDAL.OGRSpatialReferenceH}}",
    "page": "Home",
    "title": "GDAL.assignspatialreference",
    "category": "method",
    "text": "OGR_G_AssignSpatialReference(OGRGeometryH hGeom,\n                             OGRSpatialReferenceH hSRS) -> void\n\nAssign spatial reference to this object.\n\nParameters\n\nhGeom: handle on the geometry to apply the new spatial reference system.\nhSRS: handle on the new spatial reference system to apply.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.autoidentifyepsg-Tuple{Ref{GDAL.OGRSpatialReferenceH}}",
    "page": "Home",
    "title": "GDAL.autoidentifyepsg",
    "category": "method",
    "text": "OSRAutoIdentifyEPSG(OGRSpatialReferenceH hSRS) -> OGRErr\n\nSet EPSG authority info if possible.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.axisenumtoname-Tuple{GDAL.OGRAxisOrientation}",
    "page": "Home",
    "title": "GDAL.axisenumtoname",
    "category": "method",
    "text": "OSRAxisEnumToName(OGRAxisOrientation eOrientation) -> const char *\n\nReturn the string representation for the OGRAxisOrientation enumeration.\n\nReturns\n\nan internal string\n\n\n\n\n\n"
},

{
    "location": "#GDAL.beginasyncreader-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALDatasetH,Integer,Integer,Integer,Integer,Any,Integer,Integer,GDAL.GDALDataType,Integer,Any,Integer,Integer,Integer,Any}",
    "page": "Home",
    "title": "GDAL.beginasyncreader",
    "category": "method",
    "text": "GDALBeginAsyncReader(GDALDatasetH hDS,\n                     int nXOff,\n                     int nYOff,\n                     int nXSize,\n                     int nYSize,\n                     void * pBuf,\n                     int nBufXSize,\n                     int nBufYSize,\n                     GDALDataType eBufType,\n                     int nBandCount,\n                     int * panBandMap,\n                     int nPixelSpace,\n                     int nLineSpace,\n                     int nBandSpace,\n                     char ** papszOptions) -> GDALAsyncReaderH\n\nSets up an asynchronous data request.\n\nParameters\n\nhDS: handle to the dataset object.\nnXOff: The pixel offset to the top left corner of the region of the band to be accessed. This would be zero to start from the left side.\nnYOff: The line offset to the top left corner of the region of the band to be accessed. This would be zero to start from the top.\nnXSize: The width of the region of the band to be accessed in pixels.\nnYSize: The height of the region of the band to be accessed in lines.\npBuf: The buffer into which the data should be read. This buffer must contain at least nBufXSize * nBufYSize * nBandCount words of type eBufType. It is organized in left to right,top to bottom pixel order. Spacing is controlled by the nPixelSpace, and nLineSpace parameters.\nnBufXSize: the width of the buffer image into which the desired region is to be read, or from which it is to be written.\nnBufYSize: the height of the buffer image into which the desired region is to be read, or from which it is to be written.\neBufType: the type of the pixel values in the pData data buffer. The pixel values will automatically be translated to/from the GDALRasterBand data type as needed.\nnBandCount: the number of bands being read or written.\npanBandMap: the list of nBandCount band numbers being read/written. Note band numbers are 1 based. This may be NULL to select the first nBandCount bands.\nnPixelSpace: The byte offset from the start of one pixel value in pData to the start of the next pixel value within a scanline. If defaulted (0) the size of the datatype eBufType is used.\nnLineSpace: The byte offset from the start of one scanline in pData to the start of the next. If defaulted the size of the datatype eBufType * nBufXSize is used.\nnBandSpace: the byte offset from the start of one bands data to the start of the next. If defaulted (zero) the value will be nLineSpace * nBufYSize implying band sequential organization of the data buffer.\npapszOptions: Driver specific control options in a string list or NULL. Consult driver documentation for options supported.\n\nReturns\n\nhandle representing the request.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.boundary-Tuple{Ref{GDAL.OGRGeometryH}}",
    "page": "Home",
    "title": "GDAL.boundary",
    "category": "method",
    "text": "OGR_G_Boundary(OGRGeometryH hTarget) -> OGRGeometryH\n\nCompute boundary.\n\nParameters\n\nhTarget: The Geometry to calculate the boundary of.\n\nReturns\n\na handle to a newly allocated geometry now owned by the caller, or NULL on failure.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.buffer-Tuple{Ref{GDAL.OGRGeometryH},Real,Integer}",
    "page": "Home",
    "title": "GDAL.buffer",
    "category": "method",
    "text": "OGR_G_Buffer(OGRGeometryH hTarget,\n             double dfDist,\n             int nQuadSegs) -> OGRGeometryH\n\nCompute buffer of geometry.\n\nParameters\n\nhTarget: the geometry.\ndfDist: the buffer distance to be applied. Should be expressed into the same unit as the coordinates of the geometry.\nnQuadSegs: the number of segments used to approximate a 90 degree (quadrant) of curvature.\n\nReturns\n\nthe newly created geometry, or NULL if an error occurs.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.buildoverviews-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALDatasetH,Any,Integer,Any,Integer,Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.buildoverviews",
    "category": "method",
    "text": "GDALBuildOverviews(GDALDatasetH hDataset,\n                   const char * pszResampling,\n                   int nOverviews,\n                   int * panOverviewList,\n                   int nListBands,\n                   int * panBandList,\n                   GDALProgressFunc pfnProgress,\n                   void * pProgressData) -> CPLErr\n\nBuild raster overview(s)\n\n\n\n\n\n"
},

{
    "location": "#GDAL.buildpolygonfromedges-Tuple{Ref{GDAL.OGRGeometryH},Integer,Integer,Real,Any}",
    "page": "Home",
    "title": "GDAL.buildpolygonfromedges",
    "category": "method",
    "text": "OGRBuildPolygonFromEdges(OGRGeometryH hLines,\n                         int bBestEffort,\n                         int bAutoClose,\n                         double dfTolerance,\n                         OGRErr * peErr) -> OGRGeometryH\n\nBuild a ring from a bunch of arcs.\n\nParameters\n\nhLines: handle to an OGRGeometryCollection (or OGRMultiLineString) containing the line string geometries to be built into rings.\nbBestEffort: not yet implemented???.\nbAutoClose: indicates if the ring should be close when first and last points of the ring are the same.\ndfTolerance: tolerance into which two arcs are considered close enough to be joined.\npeErr: OGRERRNONE on success, or OGRERRFAILURE on failure.\n\nReturns\n\nan handle to the new geometry, a polygon.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.buildvrt-Tuple{Any,Integer,Any,Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.buildvrt",
    "category": "method",
    "text": "GDALBuildVRT(const char * pszDest,\n             int nSrcCount,\n             GDALDatasetH * pahSrcDS,\n             const char *const * papszSrcDSNames,\n             const GDALBuildVRTOptions * psOptionsIn,\n             int * pbUsageError) -> GDALDatasetH\n\nBuild a VRT from a list of datasets.\n\nParameters\n\npszDest: the destination dataset path.\nnSrcCount: the number of input datasets.\npahSrcDS: the list of input datasets (or NULL, exclusive with papszSrcDSNames)\npapszSrcDSNames: the list of input dataset names (or NULL, exclusive with pahSrcDS)\npsOptionsIn: the options struct returned by GDALBuildVRTOptionsNew() or NULL.\npbUsageError: the pointer to int variable to determine any usage error has occurred.\n\nReturns\n\nthe output dataset (new dataset that must be closed using GDALClose()) or NULL in case of error.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.buildvrtoptionsfree-Tuple{Any}",
    "page": "Home",
    "title": "GDAL.buildvrtoptionsfree",
    "category": "method",
    "text": "GDALBuildVRTOptionsFree(GDALBuildVRTOptions * psOptions) -> void\n\nFrees the GDALBuildVRTOptions struct.\n\nParameters\n\npsOptions: the options struct for GDALBuildVRT().\n\n\n\n\n\n"
},

{
    "location": "#GDAL.buildvrtoptionsnew-Tuple{Any,Any}",
    "page": "Home",
    "title": "GDAL.buildvrtoptionsnew",
    "category": "method",
    "text": "GDALBuildVRTOptionsNew(char ** papszArgv,\n                       GDALBuildVRTOptionsForBinary * psOptionsForBinary) -> GDALBuildVRTOptions *\n\nAllocates a GDALBuildVRTOptions struct.\n\nParameters\n\npapszArgv: NULL terminated list of options (potentially including filename and open options too), or NULL. The accepted options are the ones of the gdalbuildvrt utility.\npsOptionsForBinary: (output) may be NULL (and should generally be NULL), otherwise (gdaltranslatebin.cpp use case) must be allocated with GDALBuildVRTOptionsForBinaryNew() prior to this function. Will be filled with potentially present filename, open options,...\n\nReturns\n\npointer to the allocated GDALBuildVRTOptions struct. Must be freed with GDALBuildVRTOptionsFree().\n\n\n\n\n\n"
},

{
    "location": "#GDAL.buildvrtoptionssetprogress-Tuple{Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.buildvrtoptionssetprogress",
    "category": "method",
    "text": "GDALBuildVRTOptionsSetProgress(GDALBuildVRTOptions * psOptions,\n                               GDALProgressFunc pfnProgress,\n                               void * pProgressData) -> void\n\nSet a progress function.\n\nParameters\n\npsOptions: the options struct for GDALBuildVRT().\npfnProgress: the progress callback.\npProgressData: the user data for the progress callback.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.calcinvflattening-Tuple{Real,Real}",
    "page": "Home",
    "title": "GDAL.calcinvflattening",
    "category": "method",
    "text": "OSRCalcInvFlattening(double dfSemiMajor,\n                     double dfSemiMinor) -> double\n\nCompute inverse flattening from semi-major and semi-minor axis.\n\nParameters\n\ndfSemiMajor: Semi-major axis length.\ndfSemiMinor: Semi-minor axis length.\n\nReturns\n\ninverse flattening, or 0 if both axis are equal.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.calcsemiminorfrominvflattening-Tuple{Real,Real}",
    "page": "Home",
    "title": "GDAL.calcsemiminorfrominvflattening",
    "category": "method",
    "text": "OSRCalcSemiMinorFromInvFlattening(double dfSemiMajor,\n                                  double dfInvFlattening) -> double\n\nCompute semi-minor axis from semi-major axis and inverse flattening.\n\nParameters\n\ndfSemiMajor: Semi-major axis length.\ndfInvFlattening: Inverse flattening or 0 for sphere.\n\nReturns\n\nsemi-minor axis\n\n\n\n\n\n"
},

{
    "location": "#GDAL.centroid-Tuple{Ref{GDAL.OGRGeometryH},Ref{GDAL.OGRGeometryH}}",
    "page": "Home",
    "title": "GDAL.centroid",
    "category": "method",
    "text": "OGR_G_Centroid(OGRGeometryH hGeom,\n               OGRGeometryH hCentroidPoint) -> int\n\nCompute the geometry centroid.\n\nReturns\n\nOGRERRNONE on success or OGRERRFAILURE on error.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.cg_create-Tuple{Integer,Integer,Integer,Real,Real,Real,Ref{GDAL.GDALContourWriter},Any}",
    "page": "Home",
    "title": "GDAL.cg_create",
    "category": "method",
    "text": "GDAL_CG_Create(int nWidth,\n               int nHeight,\n               int bNoDataSet,\n               double dfNoDataValue,\n               double dfContourInterval,\n               double dfContourBase,\n               GDALContourWriter pfnWriter,\n               void * pCBData) -> GDALContourGeneratorH\n\nCreate contour generator.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.checksumimage-Tuple{Ref{GDAL.GDALRasterBandH},Integer,Integer,Integer,Integer}",
    "page": "Home",
    "title": "GDAL.checksumimage",
    "category": "method",
    "text": "GDALChecksumImage(GDALRasterBandH hBand,\n                  int nXOff,\n                  int nYOff,\n                  int nXSize,\n                  int nYSize) -> int\n\nCompute checksum for image region.\n\nParameters\n\nhBand: the raster band to read from.\nnXOff: pixel offset of window to read.\nnYOff: line offset of window to read.\nnXSize: pixel size of window to read.\nnYSize: line size of window to read.\n\nReturns\n\nChecksum value.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.cleanup-Tuple{}",
    "page": "Home",
    "title": "GDAL.cleanup",
    "category": "method",
    "text": "OSRCleanup(void) -> void\n\nCleanup cached SRS related memory.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.cleanupall-Tuple{}",
    "page": "Home",
    "title": "GDAL.cleanupall",
    "category": "method",
    "text": "OGRCleanupAll(void) -> void\n\nClean-up all drivers (including raster ones starting with GDAL 2.0.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.cleanuperrormutex-Tuple{}",
    "page": "Home",
    "title": "GDAL.cleanuperrormutex",
    "category": "method",
    "text": "CPLCleanupErrorMutex() -> void\n\n\n\n\n\n"
},

{
    "location": "#GDAL.clip-Tuple{Ref{GDAL.OGRLayerH},Ref{GDAL.OGRLayerH},Ref{GDAL.OGRLayerH},Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.clip",
    "category": "method",
    "text": "OGR_L_Clip(OGRLayerH pLayerInput,\n           OGRLayerH pLayerMethod,\n           OGRLayerH pLayerResult,\n           char ** papszOptions,\n           GDALProgressFunc pfnProgress,\n           void * pProgressArg) -> OGRErr\n\nClip off areas that are not covered by the method layer.\n\nParameters\n\npLayerInput: the input layer. Should not be NULL.\npLayerMethod: the method layer. Should not be NULL.\npLayerResult: the layer where the features resulting from the operation are inserted. Should not be NULL. See above the note about the schema.\npapszOptions: NULL terminated list of options (may be NULL).\npfnProgress: a GDALProgressFunc() compatible callback function for reporting progress or NULL.\npProgressArg: argument to be passed to pfnProgress. May be NULL.\n\nReturns\n\nan error code if there was an error or the execution was interrupted, OGRERR_NONE otherwise.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.clone-Tuple{Ref{GDAL.OGRFeatureH}}",
    "page": "Home",
    "title": "GDAL.clone",
    "category": "method",
    "text": "OGR_F_Clone(OGRFeatureH hFeat) -> OGRFeatureH\n\nDuplicate feature.\n\nParameters\n\nhFeat: handle to the feature to clone.\n\nReturns\n\nan handle to the new feature, exactly matching this feature.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.clone-Tuple{Ref{GDAL.OGRGeometryH}}",
    "page": "Home",
    "title": "GDAL.clone",
    "category": "method",
    "text": "OGR_G_Clone(OGRGeometryH hGeom) -> OGRGeometryH\n\nMake a copy of this object.\n\nParameters\n\nhGeom: handle on the geometry to clone from.\n\nReturns\n\nan handle on the copy of the geometry with the spatial reference system as the original.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.clone-Tuple{Ref{GDAL.OGRSpatialReferenceH}}",
    "page": "Home",
    "title": "GDAL.clone",
    "category": "method",
    "text": "OSRClone(OGRSpatialReferenceH hSRS) -> OGRSpatialReferenceH\n\nMake a duplicate of this OGRSpatialReference.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.clonecolortable-Tuple{Ref{GDAL.GDALColorTableH}}",
    "page": "Home",
    "title": "GDAL.clonecolortable",
    "category": "method",
    "text": "GDALCloneColorTable(GDALColorTableH hTable) -> GDALColorTableH\n\nMake a copy of a color table.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.clonegeogcs-Tuple{Ref{GDAL.OGRSpatialReferenceH}}",
    "page": "Home",
    "title": "GDAL.clonegeogcs",
    "category": "method",
    "text": "OSRCloneGeogCS(OGRSpatialReferenceH hSource) -> OGRSpatialReferenceH\n\nMake a duplicate of the GEOGCS node of this OGRSpatialReference object.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.close-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALDatasetH}",
    "page": "Home",
    "title": "GDAL.close",
    "category": "method",
    "text": "GDALClose(GDALDatasetH hDS) -> friend void\n\nClose GDAL dataset.\n\nParameters\n\nhDS: The dataset to close. May be cast from a \"GDALDataset *\".\n\n\n\n\n\n"
},

{
    "location": "#GDAL.closerings-Tuple{Ref{GDAL.OGRGeometryH}}",
    "page": "Home",
    "title": "GDAL.closerings",
    "category": "method",
    "text": "OGR_G_CloseRings(OGRGeometryH hGeom) -> void\n\nForce rings to be closed.\n\nParameters\n\nhGeom: handle to the geometry.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.committransaction-Tuple{Ref{GDAL.OGRLayerH}}",
    "page": "Home",
    "title": "GDAL.committransaction",
    "category": "method",
    "text": "OGR_L_CommitTransaction(OGRLayerH) -> OGRErr\n\nFor datasources which support transactions, CommitTransaction commits a transaction.\n\nParameters\n\nhLayer: handle to the layer\n\nReturns\n\nOGRERR_NONE on success.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.composegeotransforms-Tuple{Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.composegeotransforms",
    "category": "method",
    "text": "GDALComposeGeoTransforms(const double * padfGeoTransform1,\n                         const double * padfGeoTransform2,\n                         double * padfGeoTransformOut) -> void\n\nCompose two geotransforms.\n\nParameters\n\npadfGT1: the first geotransform, six values.\npadfGT2: the second geotransform, six values.\npadfGTOut: the output geotransform, six values, may safely be the same array as padfGT1 or padfGT2.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.computebandstats-Tuple{Ref{GDAL.GDALRasterBandH},Integer,Any,Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.computebandstats",
    "category": "method",
    "text": "GDALComputeBandStats(GDALRasterBandH hBand,\n                     int nSampleStep,\n                     double * pdfMean,\n                     double * pdfStdDev,\n                     GDALProgressFunc pfnProgress,\n                     void * pProgressData) -> CPLErr\n\nUndocumented.\n\nParameters\n\nhSrcBand: undocumented.\nnSampleStep: undocumented.\npdfMean: undocumented.\npdfStdDev: undocumented.\npfnProgress: undocumented.\npProgressData: undocumented.\n\nReturns\n\nundocumented\n\n\n\n\n\n"
},

{
    "location": "#GDAL.computematchingpoints-Tuple{Ref{#s1235} where #s1235<:GDAL.GDALDatasetH,Ref{#s1234} where #s1234<:GDAL.GDALDatasetH,Any,Any}",
    "page": "Home",
    "title": "GDAL.computematchingpoints",
    "category": "method",
    "text": "GDALComputeMatchingPoints(GDALDatasetH hFirstImage,\n                          GDALDatasetH hSecondImage,\n                          char ** papszOptions,\n                          int * pnGCPCount) -> GDAL_GCP *\n\nGDALComputeMatchingPoints.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.computemediancutpct-Tuple{Ref{GDAL.GDALRasterBandH},Ref{GDAL.GDALRasterBandH},Ref{GDAL.GDALRasterBandH},Any,Integer,Ref{GDAL.GDALColorTableH},Any,Any}",
    "page": "Home",
    "title": "GDAL.computemediancutpct",
    "category": "method",
    "text": "GDALComputeMedianCutPCT(GDALRasterBandH hRed,\n                        GDALRasterBandH hGreen,\n                        GDALRasterBandH hBlue,\n                        int(*)(int, int, void *) pfnIncludePixel,\n                        int nColors,\n                        GDALColorTableH hColorTable,\n                        GDALProgressFunc pfnProgress,\n                        void * pProgressArg) -> int\n\nCompute optimal PCT for RGB image.\n\nParameters\n\nhRed: Red input band.\nhGreen: Green input band.\nhBlue: Blue input band.\npfnIncludePixel: function used to test which pixels should be included in the analysis. At this time this argument is ignored and all pixels are utilized. This should normally be NULL.\nnColors: the desired number of colors to be returned (2-256).\nhColorTable: the colors will be returned in this color table object.\npfnProgress: callback for reporting algorithm progress matching the GDALProgressFunc() semantics. May be NULL.\npProgressArg: callback argument passed to pfnProgress.\n\nReturns\n\nreturns CENone on success or CEFailure if an error occurs.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.computeproximity-Tuple{Ref{GDAL.GDALRasterBandH},Ref{GDAL.GDALRasterBandH},Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.computeproximity",
    "category": "method",
    "text": "GDALComputeProximity(GDALRasterBandH hSrcBand,\n                     GDALRasterBandH hProximityBand,\n                     char ** papszOptions,\n                     GDALProgressFunc pfnProgress,\n                     void * pProgressArg) -> CPLErr\n\nCompute the proximity of all pixels in the image to a set of pixels in the source image.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.computerasterminmax-Tuple{Ref{GDAL.GDALRasterBandH},Integer,Tuple{Float64,Float64}}",
    "page": "Home",
    "title": "GDAL.computerasterminmax",
    "category": "method",
    "text": "GDALComputeRasterMinMax(GDALRasterBandH hBand,\n                        int bApproxOK,\n                        double adfMinMax) -> void\n\nCompute the min/max values for a band.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.computerasterstatistics-Tuple{Ref{GDAL.GDALRasterBandH},Integer,Any,Any,Any,Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.computerasterstatistics",
    "category": "method",
    "text": "GDALComputeRasterStatistics(GDALRasterBandH hBand,\n                            int bApproxOK,\n                            double * pdfMin,\n                            double * pdfMax,\n                            double * pdfMean,\n                            double * pdfStdDev,\n                            GDALProgressFunc pfnProgress,\n                            void * pProgressData) -> CPLErr\n\nCompute image statistics.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.contains-Tuple{Ref{GDAL.OGRGeometryH},Ref{GDAL.OGRGeometryH}}",
    "page": "Home",
    "title": "GDAL.contains",
    "category": "method",
    "text": "OGR_G_Contains(OGRGeometryH hThis,\n               OGRGeometryH hOther) -> int\n\nTest for containment.\n\nParameters\n\nhThis: the geometry to compare.\nhOther: the other geometry to compare.\n\nReturns\n\nTRUE if hThis contains hOther geometry, otherwise FALSE.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.contourgenerate-Tuple{Ref{GDAL.GDALRasterBandH},Real,Real,Integer,Any,Integer,Real,Any,Integer,Integer,Any,Any}",
    "page": "Home",
    "title": "GDAL.contourgenerate",
    "category": "method",
    "text": "GDALContourGenerate(GDALRasterBandH hBand,\n                    double dfContourInterval,\n                    double dfContourBase,\n                    int nFixedLevelCount,\n                    double * padfFixedLevels,\n                    int bUseNoData,\n                    double dfNoDataValue,\n                    void * hLayer,\n                    int iIDField,\n                    int iElevField,\n                    GDALProgressFunc pfnProgress,\n                    void * pProgressArg) -> CPLErr\n\nCreate vector contours from raster DEM.\n\nParameters\n\nhBand: The band to read raster data from. The whole band will be processed.\ndfContourInterval: The elevation interval between contours generated.\ndfContourBase: The \"base\" relative to which contour intervals are applied. This is normally zero, but could be different. To generate 10m contours at 5, 15, 25, ... the ContourBase would be 5.\nnFixedLevelCount: The number of fixed levels. If this is greater than zero, then fixed levels will be used, and ContourInterval and ContourBase are ignored.\npadfFixedLevels: The list of fixed contour levels at which contours should be generated. It will contain FixedLevelCount entries, and may be NULL if fixed levels are disabled (FixedLevelCount = 0).\nbUseNoData: If TRUE the dfNoDataValue will be used.\ndfNoDataValue: The value to use as a \"nodata\" value. That is, a pixel value which should be ignored in generating contours as if the value of the pixel were not known.\nhLayer: The layer to which new contour vectors will be written. Each contour will have a LINESTRING geometry attached to it. This is really of type OGRLayerH, but void * is used to avoid pulling the ogr_api.h file in here.\niIDField: If not -1 this will be used as a field index to indicate where a unique id should be written for each feature (contour) written.\niElevField: If not -1 this will be used as a field index to indicate where the elevation value of the contour should be written.\npfnProgress: A GDALProgressFunc that may be used to report progress to the user, or to interrupt the algorithm. May be NULL if not required.\npProgressArg: The callback data for the pfnProgress function.\n\nReturns\n\nCENone on success or CEFailure if an error occurs.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.contourwriter-Tuple{Real,Integer,Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.contourwriter",
    "category": "method",
    "text": "OGRContourWriter(double dfLevel,\n                 int nPoints,\n                 double * padfX,\n                 double * padfY,\n                 void * pInfo) -> CPLErr\n\n\n\n\n\n"
},

{
    "location": "#GDAL.convexhull-Tuple{Ref{GDAL.OGRGeometryH}}",
    "page": "Home",
    "title": "GDAL.convexhull",
    "category": "method",
    "text": "OGR_G_ConvexHull(OGRGeometryH hTarget) -> OGRGeometryH\n\nCompute convex hull.\n\nParameters\n\nhTarget: The Geometry to calculate the convex hull of.\n\nReturns\n\na handle to a newly allocated geometry now owned by the caller, or NULL on failure.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.coordinatedimension-Tuple{Ref{GDAL.OGRGeometryH}}",
    "page": "Home",
    "title": "GDAL.coordinatedimension",
    "category": "method",
    "text": "OGR_G_CoordinateDimension(OGRGeometryH hGeom) -> int\n\nGet the dimension of the coordinates in this geometry.\n\nParameters\n\nhGeom: handle on the geometry to get the dimension of the coordinates from.\n\nReturns\n\nthis will return 2 for XY, 3 for XYZ and XYM, and 4 for XYZM data.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.copybits-Tuple{Any,Integer,Integer,Any,Integer,Integer,Integer,Integer}",
    "page": "Home",
    "title": "GDAL.copybits",
    "category": "method",
    "text": "GDALCopyBits(const GByte * pabySrcData,\n             int nSrcOffset,\n             int nSrcStep,\n             GByte * pabyDstData,\n             int nDstOffset,\n             int nDstStep,\n             int nBitCount,\n             int nStepCount) -> void\n\nBitwise word copying.\n\nParameters\n\npabySrcData: the source data buffer.\nnSrcOffset: the offset (in bits) in pabySrcData to the start of the first word to copy.\nnSrcStep: the offset in bits from the start one source word to the start of the next.\npabyDstData: the destination data buffer.\nnDstOffset: the offset (in bits) in pabyDstData to the start of the first word to copy over.\nnDstStep: the offset in bits from the start one word to the start of the next.\nnBitCount: the number of bits in a word to be copied.\nnStepCount: the number of words to copy.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.copydatasetfiles-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALDriverH,Any,Any}",
    "page": "Home",
    "title": "GDAL.copydatasetfiles",
    "category": "method",
    "text": "GDALCopyDatasetFiles(GDALDriverH hDriver,\n                     const char * pszNewName,\n                     const char * pszOldName) -> CPLErr\n\nCopy the files of a dataset.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.copydatasource-Tuple{Ref{GDAL.OGRSFDriverH},Ref{GDAL.OGRDataSourceH},Any,Any}",
    "page": "Home",
    "title": "GDAL.copydatasource",
    "category": "method",
    "text": "OGR_Dr_CopyDataSource(OGRSFDriverH,\n                      OGRDataSourceH,\n                      const char *,\n                      char **) -> OGRDataSourceH\n\nThis function creates a new datasource by copying all the layers from the source datasource.\n\nParameters\n\nhDriver: handle to the driver on which data source creation is based.\nhSrcDS: source datasource\npszNewName: the name for the new data source.\npapszOptions: a StringList of name=value options. Options are driver specific, and driver information can be found at the following url: http://www.gdal.org/ogr_formats.html\n\nReturns\n\nNULL is returned on failure, or a new OGRDataSource handle on success.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.copygeogcsfrom-Tuple{Ref{GDAL.OGRSpatialReferenceH},Ref{GDAL.OGRSpatialReferenceH}}",
    "page": "Home",
    "title": "GDAL.copygeogcsfrom",
    "category": "method",
    "text": "OSRCopyGeogCSFrom(OGRSpatialReferenceH hSRS,\n                  const OGRSpatialReferenceH hSrcSRS) -> OGRErr\n\nCopy GEOGCS from another OGRSpatialReference.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.copylayer-Tuple{Ref{GDAL.OGRDataSourceH},Ref{GDAL.OGRLayerH},Any,Any}",
    "page": "Home",
    "title": "GDAL.copylayer",
    "category": "method",
    "text": "OGR_DS_CopyLayer(OGRDataSourceH,\n                 OGRLayerH,\n                 const char *,\n                 char **) -> OGRLayerH\n\nDuplicate an existing layer.\n\nParameters\n\nhDS: handle to the data source where to create the new layer\nhSrcLayer: handle to the source layer.\npszNewName: the name of the layer to create.\npapszOptions: a StringList of name=value options. Options are driver specific.\n\nReturns\n\nan handle to the layer, or NULL if an error occurs.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.copywords-Tuple{Any,GDAL.GDALDataType,Integer,Any,GDAL.GDALDataType,Integer,Integer}",
    "page": "Home",
    "title": "GDAL.copywords",
    "category": "method",
    "text": "GDALCopyWords(const void *CPL_RESTRICT pSrcData,\n              GDALDataType eSrcType,\n              int nSrcPixelOffset,\n              void *CPL_RESTRICT pDstData,\n              GDALDataType eDstType,\n              int nDstPixelOffset,\n              int nWordCount) -> void\n\nCopy pixel words from buffer to buffer.\n\nParameters\n\npSrcData: Pointer to source data to be converted.\neSrcType: the source data type (see GDALDataType enum)\nnSrcPixelStride: Source pixel stride (i.e. distance between 2 words), in bytes\npDstData: Pointer to buffer where destination data should go\neDstType: the destination data type (see GDALDataType enum)\nnDstPixelStride: Destination pixel stride (i.e. distance between 2 words), in bytes\nnWordCount: number of words to be copied\n\n\n\n\n\n"
},

{
    "location": "#GDAL.create-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALDriverH,Any,Integer,Integer,Integer,GDAL.GDALDataType,Any}",
    "page": "Home",
    "title": "GDAL.create",
    "category": "method",
    "text": "GDALCreate(GDALDriverH hDriver,\n           const char * pszFilename,\n           int nXSize,\n           int nYSize,\n           int nBands,\n           GDALDataType eBandType,\n           char ** papszOptions) -> GDALDatasetH\n\nCreate a new dataset with this driver.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.createapproxtransformer-Tuple{Ref{GDAL.GDALTransformerFunc},Any,Real}",
    "page": "Home",
    "title": "GDAL.createapproxtransformer",
    "category": "method",
    "text": "GDALCreateApproxTransformer(GDALTransformerFunc pfnBaseTransformer,\n                            void * pBaseTransformArg,\n                            double dfMaxError) -> void *\n\nCreate an approximating transformer.\n\nParameters\n\npfnBaseTransformer: the high precision transformer which should be approximated.\npBaseTransformArg: the callback argument for the high precision transformer.\ndfMaxError: the maximum cartesian error in the \"output\" space that is to be accepted in the linear approximation.\n\nReturns\n\ncallback pointer suitable for use with GDALApproxTransform(). It should be deallocated with GDALDestroyApproxTransformer().\n\n\n\n\n\n"
},

{
    "location": "#GDAL.createcolorramp-Tuple{Ref{GDAL.GDALColorTableH},Integer,Any,Integer,Any}",
    "page": "Home",
    "title": "GDAL.createcolorramp",
    "category": "method",
    "text": "GDALCreateColorRamp(GDALColorTableH hTable,\n                    int nStartIndex,\n                    const GDALColorEntry * psStartColor,\n                    int nEndIndex,\n                    const GDALColorEntry * psEndColor) -> void\n\nCreate color ramp.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.createcolortable-Tuple{GDAL.GDALPaletteInterp}",
    "page": "Home",
    "title": "GDAL.createcolortable",
    "category": "method",
    "text": "GDALCreateColorTable(GDALPaletteInterp eInterp) -> GDALColorTableH\n\nConstruct a new color table.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.createcopy-Tuple{Ref{#s1235} where #s1235<:GDAL.GDALDriverH,Any,Ref{#s1234} where #s1234<:GDAL.GDALDatasetH,Integer,Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.createcopy",
    "category": "method",
    "text": "GDALCreateCopy(GDALDriverH hDriver,\n               const char * pszFilename,\n               GDALDatasetH hSrcDS,\n               int bStrict,\n               char ** papszOptions,\n               GDALProgressFunc pfnProgress,\n               void * pProgressData) -> GDALDatasetH\n\nCreate a copy of a dataset.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.createdatasetmaskband-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALDatasetH,Integer}",
    "page": "Home",
    "title": "GDAL.createdatasetmaskband",
    "category": "method",
    "text": "GDALCreateDatasetMaskBand(GDALDatasetH hDS,\n                          int nFlags) -> CPLErr\n\nAdds a mask band to the dataset.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.createdatasource-Tuple{Ref{GDAL.OGRSFDriverH},Any,Any}",
    "page": "Home",
    "title": "GDAL.createdatasource",
    "category": "method",
    "text": "OGR_Dr_CreateDataSource(OGRSFDriverH,\n                        const char *,\n                        char **) -> OGRDataSourceH\n\nThis function attempts to create a new data source based on the passed driver.\n\nParameters\n\nhDriver: handle to the driver on which data source creation is based.\npszName: the name for the new data source. UTF-8 encoded.\npapszOptions: a StringList of name=value options. Options are driver specific, and driver information can be found at the following url: http://www.gdal.org/ogr_formats.html\n\nReturns\n\nNULL is returned on failure, or a new OGRDataSource handle on success.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.createfeature-Tuple{Ref{GDAL.OGRLayerH},Ref{GDAL.OGRFeatureH}}",
    "page": "Home",
    "title": "GDAL.createfeature",
    "category": "method",
    "text": "OGR_L_CreateFeature(OGRLayerH,\n                    OGRFeatureH) -> OGRErr\n\nCreate and write a new feature within a layer.\n\nParameters\n\nhLayer: handle to the layer to write the feature to.\nhFeat: the handle of the feature to write to disk.\n\nReturns\n\nOGRERR_NONE on success.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.createfield-Tuple{Ref{GDAL.OGRLayerH},Ref{GDAL.OGRFieldDefnH},Integer}",
    "page": "Home",
    "title": "GDAL.createfield",
    "category": "method",
    "text": "OGR_L_CreateField(OGRLayerH,\n                  OGRFieldDefnH,\n                  int) -> OGRErr\n\nCreate a new field on a layer.\n\nParameters\n\nhLayer: handle to the layer to write the field definition.\nhField: handle of the field definition to write to disk.\nbApproxOK: If TRUE, the field may be created in a slightly different form depending on the limitations of the format driver.\n\nReturns\n\nOGRERR_NONE on success.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.createfromfgf-Tuple{Any,Ref{GDAL.OGRSpatialReferenceH},Any,Integer,Any}",
    "page": "Home",
    "title": "GDAL.createfromfgf",
    "category": "method",
    "text": "OGR_G_CreateFromFgf(unsigned char * pabyData,\n                    OGRSpatialReferenceH hSRS,\n                    OGRGeometryH * phGeometry,\n                    int nBytes,\n                    int * pnBytesConsumed) -> OGRErr\n\nCreate a geometry object of the appropriate type from it\'s FGF (FDO Geometry Format) binary representation.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.createfromgml-Tuple{Any}",
    "page": "Home",
    "title": "GDAL.createfromgml",
    "category": "method",
    "text": "OGR_G_CreateFromGML(const char * pszGML) -> OGRGeometryH\n\nCreate geometry from GML.\n\nParameters\n\npszGML: The GML fragment for the geometry.\n\nReturns\n\na geometry on success, or NULL on error.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.createfromgmltree-Tuple{Any}",
    "page": "Home",
    "title": "GDAL.createfromgmltree",
    "category": "method",
    "text": "OGR_G_CreateFromGMLTree(const CPLXMLNode * psTree) -> OGRGeometryH\n\nCreate geometry from GML.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.createfromwkb-Tuple{Any,Ref{GDAL.OGRSpatialReferenceH},Any,Integer}",
    "page": "Home",
    "title": "GDAL.createfromwkb",
    "category": "method",
    "text": "OGR_G_CreateFromWkb(unsigned char * pabyData,\n                    OGRSpatialReferenceH hSRS,\n                    OGRGeometryH * phGeometry,\n                    int nBytes) -> OGRErr\n\nCreate a geometry object of the appropriate type from it\'s well known binary representation.\n\nParameters\n\npabyData: pointer to the input BLOB data.\nhSRS: handle to the spatial reference to be assigned to the created geometry object. This may be NULL.\nphGeometry: the newly created geometry object will be assigned to the indicated handle on return. This will be NULL in case of failure. If not NULL, *phGeometry should be freed with OGRGDestroyGeometry() after use.\nnBytes: the number of bytes of data available in pabyData, or -1 if it is not known, but assumed to be sufficient.\n\nReturns\n\nOGRERRNONE if all goes well, otherwise any of OGRERRNOTENOUGHDATA, OGRERRUNSUPPORTEDGEOMETRYTYPE, or OGRERRCORRUPT_DATA may be returned.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.createfromwkt-Tuple{Any,Ref{GDAL.OGRSpatialReferenceH},Any}",
    "page": "Home",
    "title": "GDAL.createfromwkt",
    "category": "method",
    "text": "OGR_G_CreateFromWkt(char ** ppszData,\n                    OGRSpatialReferenceH hSRS,\n                    OGRGeometryH * phGeometry) -> OGRErr\n\nCreate a geometry object of the appropriate type from it\'s well known text representation.\n\nParameters\n\nppszData: input zero terminated string containing well known text representation of the geometry to be created. The pointer is updated to point just beyond that last character consumed.\nhSRS: handle to the spatial reference to be assigned to the created geometry object. This may be NULL.\nphGeometry: the newly created geometry object will be assigned to the indicated handle on return. This will be NULL if the method fails. If not NULL, *phGeometry should be freed with OGRGDestroyGeometry() after use.\n\nReturns\n\nOGRERRNONE if all goes well, otherwise any of OGRERRNOTENOUGHDATA, OGRERRUNSUPPORTEDGEOMETRYTYPE, or OGRERRCORRUPT_DATA may be returned.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.creategcprefinetransformer-Tuple{Integer,Any,Integer,Integer,Real,Integer}",
    "page": "Home",
    "title": "GDAL.creategcprefinetransformer",
    "category": "method",
    "text": "GDALCreateGCPRefineTransformer(int nGCPCount,\n                               const GDAL_GCP * pasGCPList,\n                               int nReqOrder,\n                               int bReversed,\n                               double tolerance,\n                               int minimumGcps) -> void *\n\nCreate GCP based polynomial transformer, with a tolerance threshold to discard GCPs that transform badly.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.creategcptransformer-Tuple{Integer,Any,Integer,Integer}",
    "page": "Home",
    "title": "GDAL.creategcptransformer",
    "category": "method",
    "text": "GDALCreateGCPTransformer(int nGCPCount,\n                         const GDAL_GCP * pasGCPList,\n                         int nReqOrder,\n                         int bReversed) -> void *\n\nCreate GCP based polynomial transformer.\n\nParameters\n\nnGCPCount: the number of GCPs in pasGCPList.\npasGCPList: an array of GCPs to be used as input.\nnReqOrder: the requested polynomial order. It should be 1, 2 or 3.\nnGCPCount: the number of GCPs in pasGCPList.\npasGCPList: an array of GCPs to be used as input.\nnReqOrder: the requested polynomial order. It should be 1, 2 or 3.\nbReversed: set it to TRUE to compute the reversed transformation.\n\nReturns\n\nthe transform argument or NULL if creation fails.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.creategenimgprojtransformer-Tuple{Ref{#s1235} where #s1235<:GDAL.GDALDatasetH,Any,Ref{#s1234} where #s1234<:GDAL.GDALDatasetH,Any,Integer,Real,Integer}",
    "page": "Home",
    "title": "GDAL.creategenimgprojtransformer",
    "category": "method",
    "text": "GDALCreateGenImgProjTransformer(GDALDatasetH hSrcDS,\n                                const char * pszSrcWKT,\n                                GDALDatasetH hDstDS,\n                                const char * pszDstWKT,\n                                int bGCPUseOK,\n                                double dfGCPErrorThreshold,\n                                int nOrder) -> void *\n\nCreate image to image transformer.\n\nParameters\n\nhSrcDS: source dataset, or NULL.\npszSrcWKT: the coordinate system for the source dataset. If NULL, it will be read from the dataset itself.\nhDstDS: destination dataset (or NULL).\npszDstWKT: the coordinate system for the destination dataset. If NULL, and hDstDS not NULL, it will be read from the destination dataset.\nbGCPUseOK: TRUE if GCPs should be used if the geotransform is not available on the source dataset (not destination).\ndfGCPErrorThreshold: ignored/deprecated.\nnOrder: the maximum order to use for GCP derived polynomials if possible. Use 0 to autoselect, or -1 for thin plate splines.\n\nReturns\n\nhandle suitable for use GDALGenImgProjTransform(), and to be deallocated with GDALDestroyGenImgProjTransformer().\n\n\n\n\n\n"
},

{
    "location": "#GDAL.creategenimgprojtransformer2-Tuple{Ref{#s1235} where #s1235<:GDAL.GDALDatasetH,Ref{#s1234} where #s1234<:GDAL.GDALDatasetH,Any}",
    "page": "Home",
    "title": "GDAL.creategenimgprojtransformer2",
    "category": "method",
    "text": "GDALCreateGenImgProjTransformer2(GDALDatasetH hSrcDS,\n                                 GDALDatasetH hDstDS,\n                                 char ** papszOptions) -> void *\n\nCreate image to image transformer.\n\nParameters\n\nhSrcDS: source dataset, or NULL.\nhDstDS: destination dataset (or NULL).\npapszOptions: NULL-terminated list of string options (or NULL).\n\nReturns\n\nhandle suitable for use GDALGenImgProjTransform(), and to be deallocated with GDALDestroyGenImgProjTransformer() or NULL on failure.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.creategenimgprojtransformer3-NTuple{4,Any}",
    "page": "Home",
    "title": "GDAL.creategenimgprojtransformer3",
    "category": "method",
    "text": "GDALCreateGenImgProjTransformer3(const char * pszSrcWKT,\n                                 const double * padfSrcGeoTransform,\n                                 const char * pszDstWKT,\n                                 const double * padfDstGeoTransform) -> void *\n\nCreate image to image transformer.\n\nParameters\n\npszSrcWKT: source WKT (or NULL).\npadfSrcGeoTransform: source geotransform (or NULL).\npszDstWKT: destination WKT (or NULL).\npadfDstGeoTransform: destination geotransform (or NULL).\n\nReturns\n\nhandle suitable for use GDALGenImgProjTransform(), and to be deallocated with GDALDestroyGenImgProjTransformer() or NULL on failure.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.creategeoloctransformer-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALDatasetH,Any,Integer}",
    "page": "Home",
    "title": "GDAL.creategeoloctransformer",
    "category": "method",
    "text": "GDALCreateGeoLocTransformer(GDALDatasetH hBaseDS,\n                            char ** papszGeolocationInfo,\n                            int bReversed) -> void *\n\nCreate GeoLocation transformer.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.creategeometry-Tuple{GDAL.OGRwkbGeometryType}",
    "page": "Home",
    "title": "GDAL.creategeometry",
    "category": "method",
    "text": "OGR_G_CreateGeometry(OGRwkbGeometryType eGeometryType) -> OGRGeometryH\n\nCreate an empty geometry of desired type.\n\nParameters\n\neGeometryType: the type code of the geometry to be created.\n\nReturns\n\nhandle to the newly create geometry or NULL on failure. Should be freed with OGRGDestroyGeometry() after use.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.creategeometryfromjson-Tuple{Any}",
    "page": "Home",
    "title": "GDAL.creategeometryfromjson",
    "category": "method",
    "text": "OGR_G_CreateGeometryFromJson(const char *) -> OGRGeometryH\n\nCreate a OGR geometry from a GeoJSON geometry object.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.creategeomfield-Tuple{Ref{GDAL.OGRLayerH},Ref{GDAL.OGRGeomFieldDefnH},Integer}",
    "page": "Home",
    "title": "GDAL.creategeomfield",
    "category": "method",
    "text": "OGR_L_CreateGeomField(OGRLayerH hLayer,\n                      OGRGeomFieldDefnH hFieldDefn,\n                      int bForce) -> OGRErr\n\nCreate a new geometry field on a layer.\n\nParameters\n\nhLayer: handle to the layer to write the field definition.\nhField: handle of the geometry field definition to write to disk.\nbApproxOK: If TRUE, the field may be created in a slightly different form depending on the limitations of the format driver.\n\nReturns\n\nOGRERR_NONE on success.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.createlayer-Tuple{Ref{GDAL.OGRDataSourceH},Any,Ref{GDAL.OGRSpatialReferenceH},GDAL.OGRwkbGeometryType,Any}",
    "page": "Home",
    "title": "GDAL.createlayer",
    "category": "method",
    "text": "OGR_DS_CreateLayer(OGRDataSourceH,\n                   const char *,\n                   OGRSpatialReferenceH,\n                   OGRwkbGeometryType,\n                   char **) -> OGRLayerH\n\nThis function attempts to create a new layer on the data source with the indicated name, coordinate system, geometry type.\n\nParameters\n\nhDS: The dataset handle.\npszName: the name for the new layer. This should ideally not match any existing layer on the datasource.\nhSpatialRef: handle to the coordinate system to use for the new layer, or NULL if no coordinate system is available.\neType: the geometry type for the layer. Use wkbUnknown if there are no constraints on the types geometry to be written.\npapszOptions: a StringList of name=value options. Options are driver specific, and driver information can be found at the following url: http://www.gdal.org/ogr_formats.html\n\nReturns\n\nNULL is returned on failure, or a new OGRLayer handle on success.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.createmaskband-Tuple{Ref{GDAL.GDALRasterBandH},Integer}",
    "page": "Home",
    "title": "GDAL.createmaskband",
    "category": "method",
    "text": "GDALCreateMaskBand(GDALRasterBandH hBand,\n                   int nFlags) -> CPLErr\n\nAdds a mask band to the current band.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.createpansharpenedvrt-Tuple{Any,Ref{GDAL.GDALRasterBandH},Integer,Any}",
    "page": "Home",
    "title": "GDAL.createpansharpenedvrt",
    "category": "method",
    "text": "GDALCreatePansharpenedVRT(const char * pszXML,\n                          GDALRasterBandH hPanchroBand,\n                          int nInputSpectralBands,\n                          GDALRasterBandH * pahInputSpectralBands) -> GDALDatasetH\n\nCreate a virtual pansharpened dataset.\n\nParameters\n\npszXML: Pansharpened VRT XML where <SpectralBand> elements have no explicit SourceFilename and SourceBand. The spectral bands in the XML will be assigned the successive values of the pahInputSpectralBands array. Must not be NULL.\nhPanchroBand: Panchromatic band. Must not be NULL.\nnInputSpectralBands: Number of input spectral bands. Must be greater than zero.\npahInputSpectralBands: Array of nInputSpectralBands spectral bands.\n\nReturns\n\nNULL on failure, or a new virtual dataset handle on success to be closed with GDALClose().\n\n\n\n\n\n"
},

{
    "location": "#GDAL.createrasterattributetable-Tuple{}",
    "page": "Home",
    "title": "GDAL.createrasterattributetable",
    "category": "method",
    "text": "GDALCreateRasterAttributeTable(void) -> GDALRasterAttributeTableH\n\nConstruct empty table.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.createreprojectiontransformer-Tuple{Any,Any}",
    "page": "Home",
    "title": "GDAL.createreprojectiontransformer",
    "category": "method",
    "text": "GDALCreateReprojectionTransformer(const char * pszSrcWKT,\n                                  const char * pszDstWKT) -> void *\n\nCreate reprojection transformer.\n\nParameters\n\npszSrcWKT: the coordinate system for the source coordinate system.\npszDstWKT: the coordinate system for the destination coordinate system.\n\nReturns\n\nHandle for use with GDALReprojectionTransform(), or NULL if the system fails to initialize the reprojection.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.createrpctransformer-Tuple{Any,Integer,Real,Any}",
    "page": "Home",
    "title": "GDAL.createrpctransformer",
    "category": "method",
    "text": "GDALCreateRPCTransformer(GDALRPCInfo * psRPC,\n                         int bReversed,\n                         double dfPixErrThreshold,\n                         char ** papszOptions) -> void *\n\nCreate an RPC based transformer.\n\nParameters\n\npsRPCInfo: Definition of the RPC parameters.\nbReversed: If true \"forward\" transformation will be lat/long to pixel/line instead of the normal pixel/line to lat/long.\ndfPixErrThreshold: the error (measured in pixels) allowed in the iterative solution of pixel/line to lat/long computations (the other way is always exact given the equations). Starting with GDAL 2.1, this may also be set through the RPCPIXELERROR_THRESHOLD transformer option. If a negative or null value is provided, then this defaults to 0.1 pixel.\npapszOptions: Other transformer options (i.e. RPC_HEIGHT=z).\n\nReturns\n\ntransformer callback data (deallocate with GDALDestroyTransformer()).\n\n\n\n\n\n"
},

{
    "location": "#GDAL.createsimilartransformer-Tuple{Any,Real,Real}",
    "page": "Home",
    "title": "GDAL.createsimilartransformer",
    "category": "method",
    "text": "GDALCreateSimilarTransformer(void * pTransformArg,\n                             double dfRatioX,\n                             double dfRatioY) -> void *\n\n\n\n\n\n"
},

{
    "location": "#GDAL.createtpstransformer-Tuple{Integer,Any,Integer}",
    "page": "Home",
    "title": "GDAL.createtpstransformer",
    "category": "method",
    "text": "GDALCreateTPSTransformer(int nGCPCount,\n                         const GDAL_GCP * pasGCPList,\n                         int bReversed) -> void *\n\nCreate Thin Plate Spline transformer from GCPs.\n\nParameters\n\nnGCPCount: the number of GCPs in pasGCPList.\npasGCPList: an array of GCPs to be used as input.\nbReversed: set it to TRUE to compute the reversed transformation.\n\nReturns\n\nthe transform argument or NULL if creation fails.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.crosses-Tuple{Ref{GDAL.OGRGeometryH},Ref{GDAL.OGRGeometryH}}",
    "page": "Home",
    "title": "GDAL.crosses",
    "category": "method",
    "text": "OGR_G_Crosses(OGRGeometryH hThis,\n              OGRGeometryH hOther) -> int\n\nTest for crossing.\n\nParameters\n\nhThis: the geometry to compare.\nhOther: the other geometry to compare.\n\nReturns\n\nTRUE if they are crossing, otherwise FALSE.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.datasetadviseread-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALDatasetH,Integer,Integer,Integer,Integer,Integer,Integer,GDAL.GDALDataType,Integer,Any,Any}",
    "page": "Home",
    "title": "GDAL.datasetadviseread",
    "category": "method",
    "text": "GDALDatasetAdviseRead(GDALDatasetH hDS,\n                      int nXOff,\n                      int nYOff,\n                      int nXSize,\n                      int nYSize,\n                      int nBufXSize,\n                      int nBufYSize,\n                      GDALDataType eDT,\n                      int nBandCount,\n                      int * panBandMap,\n                      char ** papszOptions) -> CPLErr\n\nAdvise driver of upcoming read requests.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.datasetcommittransaction-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALDatasetH}",
    "page": "Home",
    "title": "GDAL.datasetcommittransaction",
    "category": "method",
    "text": "GDALDatasetCommitTransaction(GDALDatasetH hDS) -> OGRErr\n\nFor datasources which support transactions, CommitTransaction commits a transaction.\n\nReturns\n\nOGRERR_NONE on success.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.datasetcopylayer-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALDatasetH,Ref{GDAL.OGRLayerH},Any,Any}",
    "page": "Home",
    "title": "GDAL.datasetcopylayer",
    "category": "method",
    "text": "GDALDatasetCopyLayer(GDALDatasetH hDS,\n                     OGRLayerH hSrcLayer,\n                     const char * pszNewName,\n                     char ** papszOptions) -> OGRLayerH\n\nDuplicate an existing layer.\n\nParameters\n\nhDS: the dataset handle.\nhSrcLayer: source layer.\npszNewName: the name of the layer to create.\npapszOptions: a StringList of name=value options. Options are driver specific.\n\nReturns\n\nan handle to the layer, or NULL if an error occurs.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.datasetcopywholeraster-Tuple{Ref{#s1235} where #s1235<:GDAL.GDALDatasetH,Ref{#s1234} where #s1234<:GDAL.GDALDatasetH,Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.datasetcopywholeraster",
    "category": "method",
    "text": "GDALDatasetCopyWholeRaster(GDALDatasetH hSrcDS,\n                           GDALDatasetH hDstDS,\n                           char ** papszOptions,\n                           GDALProgressFunc pfnProgress,\n                           void * pProgressData) -> CPLErr\n\nCopy all dataset raster data.\n\nParameters\n\nhSrcDS: the source dataset\nhDstDS: the destination dataset\npapszOptions: transfer hints in \"StringList\" Name=Value format.\npfnProgress: progress reporting function.\npProgressData: callback data for progress function.\n\nReturns\n\nCENone on success, or CEFailure on failure.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.datasetcreatelayer-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALDatasetH,Any,Ref{GDAL.OGRSpatialReferenceH},GDAL.OGRwkbGeometryType,Any}",
    "page": "Home",
    "title": "GDAL.datasetcreatelayer",
    "category": "method",
    "text": "GDALDatasetCreateLayer(GDALDatasetH hDS,\n                       const char * pszName,\n                       OGRSpatialReferenceH hSpatialRef,\n                       OGRwkbGeometryType eGType,\n                       char ** papszOptions) -> OGRLayerH\n\nThis function attempts to create a new layer on the dataset with the indicated name, coordinate system, geometry type.\n\nParameters\n\nhDS: the dataset handle\npszName: the name for the new layer. This should ideally not match any existing layer on the datasource.\nhSpatialRef: the coordinate system to use for the new layer, or NULL if no coordinate system is available.\neGType: the geometry type for the layer. Use wkbUnknown if there are no constraints on the types geometry to be written.\npapszOptions: a StringList of name=value options. Options are driver specific.\n\nReturns\n\nNULL is returned on failure, or a new OGRLayer handle on success.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.datasetdeletelayer-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALDatasetH,Integer}",
    "page": "Home",
    "title": "GDAL.datasetdeletelayer",
    "category": "method",
    "text": "GDALDatasetDeleteLayer(GDALDatasetH hDS,\n                       int iLayer) -> OGRErr\n\nDelete the indicated layer from the datasource.\n\nParameters\n\nhDS: the dataset handle.\niLayer: the index of the layer to delete.\n\nReturns\n\nOGRERRNONE on success, or OGRERRUNSUPPORTED_OPERATION if deleting layers is not supported for this datasource.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.datasetexecutesql-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALDatasetH,Any,Ref{GDAL.OGRGeometryH},Any}",
    "page": "Home",
    "title": "GDAL.datasetexecutesql",
    "category": "method",
    "text": "GDALDatasetExecuteSQL(GDALDatasetH hDS,\n                      const char * pszStatement,\n                      OGRGeometryH hSpatialFilter,\n                      const char * pszDialect) -> OGRLayerH\n\nExecute an SQL statement against the data store.\n\nParameters\n\nhDS: the dataset handle.\npszStatement: the SQL statement to execute.\nhSpatialFilter: geometry which represents a spatial filter. Can be NULL.\npszDialect: allows control of the statement dialect. If set to NULL, the OGR SQL engine will be used, except for RDBMS drivers that will use their dedicated SQL engine, unless OGRSQL is explicitly passed as the dialect. Starting with OGR 1.10, the SQLITE dialect can also be used.\n\nReturns\n\nan OGRLayer containing the results of the query. Deallocate with ReleaseResultSet().\n\n\n\n\n\n"
},

{
    "location": "#GDAL.datasetgetlayer-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALDatasetH,Integer}",
    "page": "Home",
    "title": "GDAL.datasetgetlayer",
    "category": "method",
    "text": "GDALDatasetGetLayer(GDALDatasetH hDS,\n                    int iLayer) -> OGRLayerH\n\nFetch a layer by index.\n\nParameters\n\nhDS: the dataset handle.\niLayer: a layer number between 0 and GetLayerCount()-1.\n\nReturns\n\nthe layer, or NULL if iLayer is out of range or an error occurs.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.datasetgetlayerbyname-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALDatasetH,Any}",
    "page": "Home",
    "title": "GDAL.datasetgetlayerbyname",
    "category": "method",
    "text": "GDALDatasetGetLayerByName(GDALDatasetH hDS,\n                          const char * pszName) -> OGRLayerH\n\nFetch a layer by name.\n\nParameters\n\nhDS: the dataset handle.\npszName: the layer name of the layer to fetch.\n\nReturns\n\nthe layer, or NULL if Layer is not found or an error occurs.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.datasetgetlayercount-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALDatasetH}",
    "page": "Home",
    "title": "GDAL.datasetgetlayercount",
    "category": "method",
    "text": "GDALDatasetGetLayerCount(GDALDatasetH hDS) -> int\n\nGet the number of layers in this dataset.\n\nParameters\n\nhDS: the dataset handle.\n\nReturns\n\nlayer count.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.datasetgetnextfeature-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALDatasetH,Any,Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.datasetgetnextfeature",
    "category": "method",
    "text": "GDALDatasetGetNextFeature(GDALDatasetH hDS,\n                          OGRLayerH * phBelongingLayer,\n                          double * pdfProgressPct,\n                          GDALProgressFunc pfnProgress,\n                          void * pProgressData) -> OGRFeatureH\n\nFetch the next available feature from this dataset.\n\nParameters\n\nhDS: dataset handle.\nphBelongingLayer: a pointer to a OGRLayer* variable to receive the layer to which the object belongs to, or NULL. It is possible that the output of *ppoBelongingLayer to be NULL despite the feature not being NULL.\npdfProgressPct: a pointer to a double variable to receive the percentage progress (in [0,1] range), or NULL. On return, the pointed value might be negative if determining the progress is not possible.\npfnProgress: a progress callback to report progress (for GetNextFeature() calls that might have a long duration) and offer cancellation possibility, or NULL\npProgressData: user data provided to pfnProgress, or NULL\n\nReturns\n\na feature, or NULL if no more features are available.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.datasetgetstyletable-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALDatasetH}",
    "page": "Home",
    "title": "GDAL.datasetgetstyletable",
    "category": "method",
    "text": "GDALDatasetGetStyleTable(GDALDatasetH hDS) -> OGRStyleTableH\n\nReturns dataset style table.\n\nParameters\n\nhDS: the dataset handle\n\nReturns\n\nhandle to a style table which should not be modified or freed by the caller.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.datasetgettiledvirtualmem-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALDatasetH,GDAL.GDALRWFlag,Integer,Integer,Integer,Integer,Integer,Integer,GDAL.GDALDataType,Integer,Any,GDAL.GDALTileOrganization,UInt64,Integer,Any}",
    "page": "Home",
    "title": "GDAL.datasetgettiledvirtualmem",
    "category": "method",
    "text": "GDALDatasetGetTiledVirtualMem(GDALDatasetH hDS,\n                              GDALRWFlag eRWFlag,\n                              int nXOff,\n                              int nYOff,\n                              int nXSize,\n                              int nYSize,\n                              int nTileXSize,\n                              int nTileYSize,\n                              GDALDataType eBufType,\n                              int nBandCount,\n                              int * panBandMap,\n                              GDALTileOrganization eTileOrganization,\n                              size_t nCacheSize,\n                              int bSingleThreadUsage,\n                              char ** papszOptions) -> CPLVirtualMem *\n\nCreate a CPLVirtualMem object from a GDAL dataset object, with tiling organization.\n\nParameters\n\nhDS: Dataset object\neRWFlag: Either GFRead to read a region of data, or GFWrite to write a region of data.\nnXOff: The pixel offset to the top left corner of the region of the band to be accessed. This would be zero to start from the left side.\nnYOff: The line offset to the top left corner of the region of the band to be accessed. This would be zero to start from the top.\nnXSize: The width of the region of the band to be accessed in pixels.\nnYSize: The height of the region of the band to be accessed in lines.\nnTileXSize: the width of the tiles.\nnTileYSize: the height of the tiles.\neBufType: the type of the pixel values in the data buffer. The pixel values will automatically be translated to/from the GDALRasterBand data type as needed.\nnBandCount: the number of bands being read or written.\npanBandMap: the list of nBandCount band numbers being read/written. Note band numbers are 1 based. This may be NULL to select the first nBandCount bands.\neTileOrganization: tile organization.\nnCacheSize: size in bytes of the maximum memory that will be really allocated (must ideally fit into RAM)\nbSingleThreadUsage: set to TRUE if there will be no concurrent threads that will access the virtual memory mapping. This can optimize performance a bit. If set to FALSE, CPLVirtualMemDeclareThread() must be called.\npapszOptions: NULL terminated list of options. Unused for now.\n\nReturns\n\na virtual memory object that must be freed by CPLVirtualMemFree(), or NULL in case of failure.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.datasetgetvirtualmem-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALDatasetH,GDAL.GDALRWFlag,Integer,Integer,Integer,Integer,Integer,Integer,GDAL.GDALDataType,Integer,Any,Integer,Integer,Integer,UInt64,UInt64,Integer,Any}",
    "page": "Home",
    "title": "GDAL.datasetgetvirtualmem",
    "category": "method",
    "text": "GDALDatasetGetVirtualMem(GDALDatasetH hDS,\n                         GDALRWFlag eRWFlag,\n                         int nXOff,\n                         int nYOff,\n                         int nXSize,\n                         int nYSize,\n                         int nBufXSize,\n                         int nBufYSize,\n                         GDALDataType eBufType,\n                         int nBandCount,\n                         int * panBandMap,\n                         int nPixelSpace,\n                         GIntBig nLineSpace,\n                         GIntBig nBandSpace,\n                         size_t nCacheSize,\n                         size_t nPageSizeHint,\n                         int bSingleThreadUsage,\n                         char ** papszOptions) -> CPLVirtualMem *\n\nCreate a CPLVirtualMem object from a GDAL dataset object.\n\nParameters\n\nhDS: Dataset object\neRWFlag: Either GFRead to read a region of data, or GFWrite to write a region of data.\nnXOff: The pixel offset to the top left corner of the region of the band to be accessed. This would be zero to start from the left side.\nnYOff: The line offset to the top left corner of the region of the band to be accessed. This would be zero to start from the top.\nnXSize: The width of the region of the band to be accessed in pixels.\nnYSize: The height of the region of the band to be accessed in lines.\nnBufXSize: the width of the buffer image into which the desired region is to be read, or from which it is to be written.\nnBufYSize: the height of the buffer image into which the desired region is to be read, or from which it is to be written.\neBufType: the type of the pixel values in the data buffer. The pixel values will automatically be translated to/from the GDALRasterBand data type as needed.\nnBandCount: the number of bands being read or written.\npanBandMap: the list of nBandCount band numbers being read/written. Note band numbers are 1 based. This may be NULL to select the first nBandCount bands.\nnPixelSpace: The byte offset from the start of one pixel value in the buffer to the start of the next pixel value within a scanline. If defaulted (0) the size of the datatype eBufType is used.\nnLineSpace: The byte offset from the start of one scanline in the buffer to the start of the next. If defaulted (0) the size of the datatype eBufType * nBufXSize is used.\nnBandSpace: the byte offset from the start of one bands data to the start of the next. If defaulted (0) the value will be nLineSpace * nBufYSize implying band sequential organization of the data buffer.\nnCacheSize: size in bytes of the maximum memory that will be really allocated (must ideally fit into RAM)\nnPageSizeHint: hint for the page size. Must be a multiple of the system page size, returned by CPLGetPageSize(). Minimum value is generally 4096. Might be set to 0 to let the function determine a default page size.\nbSingleThreadUsage: set to TRUE if there will be no concurrent threads that will access the virtual memory mapping. This can optimize performance a bit. If set to FALSE, CPLVirtualMemDeclareThread() must be called.\npapszOptions: NULL terminated list of options. Unused for now.\n\nReturns\n\na virtual memory object that must be freed by CPLVirtualMemFree(), or NULL in case of failure.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.datasetrasterio-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALDatasetH,GDAL.GDALRWFlag,Integer,Integer,Integer,Integer,Any,Integer,Integer,GDAL.GDALDataType,Integer,Any,Integer,Integer,Integer}",
    "page": "Home",
    "title": "GDAL.datasetrasterio",
    "category": "method",
    "text": "GDALDatasetRasterIO(GDALDatasetH hDS,\n                    GDALRWFlag eRWFlag,\n                    int nXOff,\n                    int nYOff,\n                    int nXSize,\n                    int nYSize,\n                    void * pData,\n                    int nBufXSize,\n                    int nBufYSize,\n                    GDALDataType eBufType,\n                    int nBandCount,\n                    int * panBandMap,\n                    int nPixelSpace,\n                    int nLineSpace,\n                    int nBandSpace) -> CPLErr\n\nRead/write a region of image data from multiple bands.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.datasetrasterioex-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALDatasetH,GDAL.GDALRWFlag,Integer,Integer,Integer,Integer,Any,Integer,Integer,GDAL.GDALDataType,Integer,Any,Int64,Int64,Int64,Any}",
    "page": "Home",
    "title": "GDAL.datasetrasterioex",
    "category": "method",
    "text": "GDALDatasetRasterIOEx(GDALDatasetH hDS,\n                      GDALRWFlag eRWFlag,\n                      int nXOff,\n                      int nYOff,\n                      int nXSize,\n                      int nYSize,\n                      void * pData,\n                      int nBufXSize,\n                      int nBufYSize,\n                      GDALDataType eBufType,\n                      int nBandCount,\n                      int * panBandMap,\n                      GSpacing nPixelSpace,\n                      GSpacing nLineSpace,\n                      GSpacing nBandSpace,\n                      GDALRasterIOExtraArg * psExtraArg) -> CPLErr\n\nRead/write a region of image data from multiple bands.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.datasetreleaseresultset-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALDatasetH,Ref{GDAL.OGRLayerH}}",
    "page": "Home",
    "title": "GDAL.datasetreleaseresultset",
    "category": "method",
    "text": "GDALDatasetReleaseResultSet(GDALDatasetH hDS,\n                            OGRLayerH hLayer) -> void\n\nRelease results of ExecuteSQL().\n\nParameters\n\nhDS: the dataset handle.\nhLayer: the result of a previous ExecuteSQL() call.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.datasetresetreading-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALDatasetH}",
    "page": "Home",
    "title": "GDAL.datasetresetreading",
    "category": "method",
    "text": "GDALDatasetResetReading(GDALDatasetH hDS) -> void\n\nReset feature reading to start on the first feature.\n\nParameters\n\nhDS: dataset handle\n\n\n\n\n\n"
},

{
    "location": "#GDAL.datasetrollbacktransaction-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALDatasetH}",
    "page": "Home",
    "title": "GDAL.datasetrollbacktransaction",
    "category": "method",
    "text": "GDALDatasetRollbackTransaction(GDALDatasetH hDS) -> OGRErr\n\nFor datasources which support transactions, RollbackTransaction will roll back a datasource to its state before the start of the current transaction.\n\nReturns\n\nOGRERR_NONE on success.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.datasetsetstyletable-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALDatasetH,Ref{GDAL.OGRStyleTableH}}",
    "page": "Home",
    "title": "GDAL.datasetsetstyletable",
    "category": "method",
    "text": "GDALDatasetSetStyleTable(GDALDatasetH hDS,\n                         OGRStyleTableH hStyleTable) -> void\n\nSet dataset style table.\n\nParameters\n\nhDS: the dataset handle\nhStyleTable: style table handle to set\n\n\n\n\n\n"
},

{
    "location": "#GDAL.datasetsetstyletabledirectly-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALDatasetH,Ref{GDAL.OGRStyleTableH}}",
    "page": "Home",
    "title": "GDAL.datasetsetstyletabledirectly",
    "category": "method",
    "text": "GDALDatasetSetStyleTableDirectly(GDALDatasetH hDS,\n                                 OGRStyleTableH hStyleTable) -> void\n\nSet dataset style table.\n\nParameters\n\nhDS: the dataset handle\nhStyleTable: style table handle to set\n\n\n\n\n\n"
},

{
    "location": "#GDAL.datasetstarttransaction-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALDatasetH,Integer}",
    "page": "Home",
    "title": "GDAL.datasetstarttransaction",
    "category": "method",
    "text": "GDALDatasetStartTransaction(GDALDatasetH hDS,\n                            int bForce) -> OGRErr\n\nFor datasources which support transactions, StartTransaction creates a transaction.\n\nParameters\n\nhDS: the dataset handle.\nbForce: can be set to TRUE if an emulation, possibly slow, of a transaction mechanism is acceptable.\n\nReturns\n\nOGRERR_NONE on success.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.datasettestcapability-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALDatasetH,Any}",
    "page": "Home",
    "title": "GDAL.datasettestcapability",
    "category": "method",
    "text": "GDALDatasetTestCapability(GDALDatasetH hDS,\n                          const char * pszCap) -> int\n\nTest if capability is available.\n\nParameters\n\nhDS: the dataset handle.\npszCap: the capability to test.\n\nReturns\n\nTRUE if capability available otherwise FALSE.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.datatypeiscomplex-Tuple{GDAL.GDALDataType}",
    "page": "Home",
    "title": "GDAL.datatypeiscomplex",
    "category": "method",
    "text": "GDALDataTypeIsComplex(GDALDataType) -> int\n\nIs data type complex?\n\nReturns\n\nTRUE if the passed type is complex (one of GDTCInt16, GDTCInt32, GDTCFloat32 or GDTCFloat64), that is it consists of a real and imaginary component.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.datatypeunion-Tuple{GDAL.GDALDataType,GDAL.GDALDataType}",
    "page": "Home",
    "title": "GDAL.datatypeunion",
    "category": "method",
    "text": "GDALDataTypeUnion(GDALDataType,\n                  GDALDataType) -> GDALDataType\n\nReturn the smallest data type that can fully express both input data types.\n\nParameters\n\neType1: first data type.\neType2: second data type.\n\nReturns\n\na data type able to express eType1 and eType2.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.dectodms-Tuple{Real,Any,Integer}",
    "page": "Home",
    "title": "GDAL.dectodms",
    "category": "method",
    "text": "GDALDecToDMS(double,\n             const char *,\n             int) -> const char *\n\nTranslate a decimal degrees value to a DMS string with hemisphere.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.dectopackeddms-Tuple{Real}",
    "page": "Home",
    "title": "GDAL.dectopackeddms",
    "category": "method",
    "text": "GDALDecToPackedDMS(double) -> double\n\nConvert decimal degrees into packed DMS value (DDDMMMSSS.SS).\n\n\n\n\n\n"
},

{
    "location": "#GDAL.defaulterrorhandler-Tuple{GDAL.CPLErr,Int32,Any}",
    "page": "Home",
    "title": "GDAL.defaulterrorhandler",
    "category": "method",
    "text": "CPLDefaultErrorHandler(CPLErr eErrClass,\n                       CPLErrorNum nError,\n                       const char * pszErrorMsg) -> void\n\nDefault error handler.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.deinitgcps-Tuple{Integer,Any}",
    "page": "Home",
    "title": "GDAL.deinitgcps",
    "category": "method",
    "text": "GDALDeinitGCPs(int,\n               GDAL_GCP *) -> void\n\nDe-initialize an array of GCPs (initialized with GDALInitGCPs())\n\nParameters\n\nnCount: number of GCPs in psGCP\npsGCP: array of GCPs of size nCount.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.delaunaytriangulation-Tuple{Ref{GDAL.OGRGeometryH},Real,Integer}",
    "page": "Home",
    "title": "GDAL.delaunaytriangulation",
    "category": "method",
    "text": "OGR_G_DelaunayTriangulation(OGRGeometryH hThis,\n                            double dfTolerance,\n                            int bOnlyEdges) -> OGRGeometryH\n\nReturn a Delaunay triangulation of the vertices of the geometry.\n\nParameters\n\nhThis: the geometry.\ndfTolerance: optional snapping tolerance to use for improved robustness\nbOnlyEdges: if TRUE, will return a MULTILINESTRING, otherwise it will return a GEOMETRYCOLLECTION containing triangular POLYGONs.\n\nReturns\n\nthe geometry resulting from the Delaunay triangulation or NULL if an error occurs.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.deletedataset-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALDriverH,Any}",
    "page": "Home",
    "title": "GDAL.deletedataset",
    "category": "method",
    "text": "GDALDeleteDataset(GDALDriverH hDriver,\n                  const char * pszFilename) -> CPLErr\n\nDelete named dataset.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.deletedatasource-Tuple{Ref{GDAL.OGRSFDriverH},Any}",
    "page": "Home",
    "title": "GDAL.deletedatasource",
    "category": "method",
    "text": "OGR_Dr_DeleteDataSource(OGRSFDriverH,\n                        const char *) -> OGRErr\n\nDelete a datasource.\n\nParameters\n\nhDriver: handle to the driver on which data source deletion is based.\npszDataSource: the name of the datasource to delete.\n\nReturns\n\nOGRERRNONE on success, and OGRERRUNSUPPORTED_OPERATION if this is not supported by this driver.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.deletefeature-Tuple{Ref{GDAL.OGRLayerH},Integer}",
    "page": "Home",
    "title": "GDAL.deletefeature",
    "category": "method",
    "text": "OGR_L_DeleteFeature(OGRLayerH,\n                    GIntBig) -> OGRErr\n\nDelete feature from layer.\n\nParameters\n\nhLayer: handle to the layer\nnFID: the feature id to be deleted from the layer\n\nReturns\n\nOGRERRNONE if the operation works, otherwise an appropriate error code (e.g OGRERRNONEXISTINGFEATURE if the feature does not exist).\n\n\n\n\n\n"
},

{
    "location": "#GDAL.deletefield-Tuple{Ref{GDAL.OGRLayerH},Integer}",
    "page": "Home",
    "title": "GDAL.deletefield",
    "category": "method",
    "text": "OGR_L_DeleteField(OGRLayerH,\n                  int iField) -> OGRErr\n\nDelete an existing field on a layer.\n\nParameters\n\nhLayer: handle to the layer.\niField: index of the field to delete.\n\nReturns\n\nOGRERR_NONE on success.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.deletefielddefn-Tuple{Ref{GDAL.OGRFeatureDefnH},Integer}",
    "page": "Home",
    "title": "GDAL.deletefielddefn",
    "category": "method",
    "text": "OGR_FD_DeleteFieldDefn(OGRFeatureDefnH hDefn,\n                       int iField) -> OGRErr\n\nDelete an existing field definition.\n\nParameters\n\nhDefn: handle to the feature definition.\niField: the index of the field definition.\n\nReturns\n\nOGRERR_NONE in case of success.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.deletegeomfielddefn-Tuple{Ref{GDAL.OGRFeatureDefnH},Integer}",
    "page": "Home",
    "title": "GDAL.deletegeomfielddefn",
    "category": "method",
    "text": "OGR_FD_DeleteGeomFieldDefn(OGRFeatureDefnH hDefn,\n                           int iGeomField) -> OGRErr\n\nDelete an existing geometry field definition.\n\nParameters\n\nhDefn: handle to the feature definition.\niGeomField: the index of the geometry field definition.\n\nReturns\n\nOGRERR_NONE in case of success.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.deletelayer-Tuple{Ref{GDAL.OGRDataSourceH},Integer}",
    "page": "Home",
    "title": "GDAL.deletelayer",
    "category": "method",
    "text": "OGR_DS_DeleteLayer(OGRDataSourceH,\n                   int) -> OGRErr\n\nDelete the indicated layer from the datasource.\n\nParameters\n\nhDS: handle to the datasource\niLayer: the index of the layer to delete.\n\nReturns\n\nOGRERRNONE on success, or OGRERRUNSUPPORTED_OPERATION if deleting layers is not supported for this datasource.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.deleterasternodatavalue-Tuple{Ref{GDAL.GDALRasterBandH}}",
    "page": "Home",
    "title": "GDAL.deleterasternodatavalue",
    "category": "method",
    "text": "GDALDeleteRasterNoDataValue(GDALRasterBandH hBand) -> CPLErr\n\nRemove the no data value for this band.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.demprocessing-Tuple{Any,Ref{#s1236} where #s1236<:GDAL.GDALDatasetH,Any,Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.demprocessing",
    "category": "method",
    "text": "GDALDEMProcessing(const char * pszDest,\n                  GDALDatasetH hSrcDataset,\n                  const char * pszProcessing,\n                  const char * pszColorFilename,\n                  const GDALDEMProcessingOptions * psOptionsIn,\n                  int * pbUsageError) -> GDALDatasetH\n\nApply a DEM processing.\n\nParameters\n\npszDest: the destination dataset path.\nhSrcDataset: the source dataset handle.\npszProcessing: the processing to apply (one of \"hillshade\", \"slope\", \"aspect\", \"color-relief\", \"TRI\", \"TPI\", \"Roughness\")\npszColorFilename: color file (mandatory for \"color-relief\" processing, should be NULL otherwise)\npsOptionsIn: the options struct returned by GDALDEMProcessingOptionsNew() or NULL.\npbUsageError: the pointer to int variable to determine any usage error has occurred or NULL.\n\nReturns\n\nthe output dataset (new dataset that must be closed using GDALClose()) or NULL in case of error.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.demprocessingoptionsfree-Tuple{Any}",
    "page": "Home",
    "title": "GDAL.demprocessingoptionsfree",
    "category": "method",
    "text": "GDALDEMProcessingOptionsFree(GDALDEMProcessingOptions * psOptions) -> void\n\nFrees the GDALDEMProcessingOptions struct.\n\nParameters\n\npsOptions: the options struct for GDALDEMProcessing().\n\n\n\n\n\n"
},

{
    "location": "#GDAL.demprocessingoptionsnew-Tuple{Any,Any}",
    "page": "Home",
    "title": "GDAL.demprocessingoptionsnew",
    "category": "method",
    "text": "GDALDEMProcessingOptionsNew(char ** papszArgv,\n                            GDALDEMProcessingOptionsForBinary * psOptionsForBinary) -> GDALDEMProcessingOptions *\n\nAllocates a GDALDEMProcessingOptions struct.\n\nParameters\n\npapszArgv: NULL terminated list of options (potentially including filename and open options too), or NULL. The accepted options are the ones of the gdaldem utility.\npsOptionsForBinary: (output) may be NULL (and should generally be NULL), otherwise (gdaltranslatebin.cpp use case) must be allocated with GDALDEMProcessingOptionsForBinaryNew() prior to this function. Will be filled with potentially present filename, open options,...\n\nReturns\n\npointer to the allocated GDALDEMProcessingOptions struct. Must be freed with GDALDEMProcessingOptionsFree().\n\n\n\n\n\n"
},

{
    "location": "#GDAL.demprocessingoptionssetprogress-Tuple{Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.demprocessingoptionssetprogress",
    "category": "method",
    "text": "GDALDEMProcessingOptionsSetProgress(GDALDEMProcessingOptions * psOptions,\n                                    GDALProgressFunc pfnProgress,\n                                    void * pProgressData) -> void\n\nSet a progress function.\n\nParameters\n\npsOptions: the options struct for GDALDEMProcessing().\npfnProgress: the progress callback.\npProgressData: the user data for the progress callback.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.dereference-Tuple{Ref{GDAL.OGRDataSourceH}}",
    "page": "Home",
    "title": "GDAL.dereference",
    "category": "method",
    "text": "OGR_DS_Dereference(OGRDataSourceH hDataSource) -> int\n\n\n\n\n\n"
},

{
    "location": "#GDAL.dereference-Tuple{Ref{GDAL.OGRFeatureDefnH}}",
    "page": "Home",
    "title": "GDAL.dereference",
    "category": "method",
    "text": "OGR_FD_Dereference(OGRFeatureDefnH hDefn) -> int\n\nDecrements the reference count by one.\n\nParameters\n\nhDefn: handle to the feature definition on witch OGRFeature are based on.\n\nReturns\n\nthe updated reference count.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.dereference-Tuple{Ref{GDAL.OGRLayerH}}",
    "page": "Home",
    "title": "GDAL.dereference",
    "category": "method",
    "text": "OGR_L_Dereference(OGRLayerH hLayer) -> int\n\n\n\n\n\n"
},

{
    "location": "#GDAL.dereference-Tuple{Ref{GDAL.OGRSpatialReferenceH}}",
    "page": "Home",
    "title": "GDAL.dereference",
    "category": "method",
    "text": "OSRDereference(OGRSpatialReferenceH hSRS) -> int\n\nDecrements the reference count by one.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.dereferencedataset-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALDatasetH}",
    "page": "Home",
    "title": "GDAL.dereferencedataset",
    "category": "method",
    "text": "GDALDereferenceDataset(GDALDatasetH hDataset) -> int\n\nSubtract one from dataset reference count.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.deregisterdriver-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALDriverH}",
    "page": "Home",
    "title": "GDAL.deregisterdriver",
    "category": "method",
    "text": "GDALDeregisterDriver(GDALDriverH hDriver) -> void\n\nDeregister the passed driver.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.deserializetransformer-Tuple{Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.deserializetransformer",
    "category": "method",
    "text": "GDALDeserializeTransformer(CPLXMLNode * psTree,\n                           GDALTransformerFunc * ppfnFunc,\n                           void ** ppTransformArg) -> CPLErr\n\n\n\n\n\n"
},

{
    "location": "#GDAL.destroy-Tuple{Ref{GDAL.GDALContourGeneratorH}}",
    "page": "Home",
    "title": "GDAL.destroy",
    "category": "method",
    "text": "GDAL_CG_Destroy(GDALContourGeneratorH hCG) -> void\n\nDestroy contour generator.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.destroy-Tuple{Ref{GDAL.OGRDataSourceH}}",
    "page": "Home",
    "title": "GDAL.destroy",
    "category": "method",
    "text": "OGR_DS_Destroy(OGRDataSourceH) -> void\n\nCloses opened datasource and releases allocated resources.\n\nParameters\n\nhDataSource: handle to allocated datasource object.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.destroy-Tuple{Ref{GDAL.OGRFeatureDefnH}}",
    "page": "Home",
    "title": "GDAL.destroy",
    "category": "method",
    "text": "OGR_FD_Destroy(OGRFeatureDefnH hDefn) -> void\n\nDestroy a feature definition object and release all memory associated with it.\n\nParameters\n\nhDefn: handle to the feature definition to be destroyed.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.destroy-Tuple{Ref{GDAL.OGRFeatureH}}",
    "page": "Home",
    "title": "GDAL.destroy",
    "category": "method",
    "text": "OGR_F_Destroy(OGRFeatureH hFeat) -> void\n\nDestroy feature.\n\nParameters\n\nhFeat: handle to the feature to destroy.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.destroy-Tuple{Ref{GDAL.OGRFieldDefnH}}",
    "page": "Home",
    "title": "GDAL.destroy",
    "category": "method",
    "text": "OGR_Fld_Destroy(OGRFieldDefnH hDefn) -> void\n\nDestroy a field definition.\n\nParameters\n\nhDefn: handle to the field definition to destroy.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.destroy-Tuple{Ref{GDAL.OGRGeomFieldDefnH}}",
    "page": "Home",
    "title": "GDAL.destroy",
    "category": "method",
    "text": "OGR_GFld_Destroy(OGRGeomFieldDefnH hDefn) -> void\n\nDestroy a geometry field definition.\n\nParameters\n\nhDefn: handle to the geometry field definition to destroy.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.destroy-Tuple{Ref{GDAL.OGRStyleMgrH}}",
    "page": "Home",
    "title": "GDAL.destroy",
    "category": "method",
    "text": "OGR_SM_Destroy(OGRStyleMgrH hSM) -> void\n\nDestroy Style Manager.\n\nParameters\n\nhSM: handle to the style manager to destroy.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.destroy-Tuple{Ref{GDAL.OGRStyleTableH}}",
    "page": "Home",
    "title": "GDAL.destroy",
    "category": "method",
    "text": "OGR_STBL_Destroy(OGRStyleTableH hSTBL) -> void\n\nDestroy Style Table.\n\nParameters\n\nhSTBL: handle to the style table to destroy.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.destroy-Tuple{Ref{GDAL.OGRStyleToolH}}",
    "page": "Home",
    "title": "GDAL.destroy",
    "category": "method",
    "text": "OGR_ST_Destroy(OGRStyleToolH hST) -> void\n\nDestroy Style Tool.\n\nParameters\n\nhST: handle to the style tool to destroy.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.destroy-Tuple{}",
    "page": "Home",
    "title": "GDAL.destroy",
    "category": "method",
    "text": "GDALDestroy(void) -> void\n\n\n\n\n\n"
},

{
    "location": "#GDAL.destroyapproxtransformer-Tuple{Any}",
    "page": "Home",
    "title": "GDAL.destroyapproxtransformer",
    "category": "method",
    "text": "GDALDestroyApproxTransformer(void * pCBData) -> void\n\nCleanup approximate transformer.\n\nParameters\n\npCBData: callback data originally returned by GDALCreateApproxTransformer().\n\n\n\n\n\n"
},

{
    "location": "#GDAL.destroycolortable-Tuple{Ref{GDAL.GDALColorTableH}}",
    "page": "Home",
    "title": "GDAL.destroycolortable",
    "category": "method",
    "text": "GDALDestroyColorTable(GDALColorTableH hTable) -> void\n\nDestroys a color table.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.destroydriver-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALDriverH}",
    "page": "Home",
    "title": "GDAL.destroydriver",
    "category": "method",
    "text": "GDALDestroyDriver(GDALDriverH hDriver) -> void\n\nDestroy a GDALDriver.\n\nParameters\n\nhDriver: the driver to destroy.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.destroydrivermanager-Tuple{}",
    "page": "Home",
    "title": "GDAL.destroydrivermanager",
    "category": "method",
    "text": "GDALDestroyDriverManager(void) -> void\n\nDestroy the driver manager.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.destroygcptransformer-Tuple{Any}",
    "page": "Home",
    "title": "GDAL.destroygcptransformer",
    "category": "method",
    "text": "GDALDestroyGCPTransformer(void * pTransformArg) -> void\n\nDestroy GCP transformer.\n\nParameters\n\npTransformArg: the transform arg previously returned by GDALCreateGCPTransformer().\n\n\n\n\n\n"
},

{
    "location": "#GDAL.destroygenimgprojtransformer-Tuple{Any}",
    "page": "Home",
    "title": "GDAL.destroygenimgprojtransformer",
    "category": "method",
    "text": "GDALDestroyGenImgProjTransformer(void * hTransformArg) -> void\n\nGenImgProjTransformer deallocator.\n\nParameters\n\nhTransformArg: the handle to deallocate.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.destroygeoloctransformer-Tuple{Any}",
    "page": "Home",
    "title": "GDAL.destroygeoloctransformer",
    "category": "method",
    "text": "GDALDestroyGeoLocTransformer(void * pTransformAlg) -> void\n\nDestroy GeoLocation transformer.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.destroygeometry-Tuple{Ref{GDAL.OGRGeometryH}}",
    "page": "Home",
    "title": "GDAL.destroygeometry",
    "category": "method",
    "text": "OGR_G_DestroyGeometry(OGRGeometryH hGeom) -> void\n\nDestroy geometry object.\n\nParameters\n\nhGeom: handle to the geometry to delete.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.destroyrasterattributetable-Tuple{Ref{GDAL.GDALRasterAttributeTableH}}",
    "page": "Home",
    "title": "GDAL.destroyrasterattributetable",
    "category": "method",
    "text": "GDALDestroyRasterAttributeTable(GDALRasterAttributeTableH) -> void\n\nDestroys a RAT.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.destroyreprojectiontransformer-Tuple{Any}",
    "page": "Home",
    "title": "GDAL.destroyreprojectiontransformer",
    "category": "method",
    "text": "GDALDestroyReprojectionTransformer(void * pTransformArg) -> void\n\nDestroy reprojection transformation.\n\nParameters\n\npTransformArg: the transformation handle returned by GDALCreateReprojectionTransformer().\n\n\n\n\n\n"
},

{
    "location": "#GDAL.destroyrpctransformer-Tuple{Any}",
    "page": "Home",
    "title": "GDAL.destroyrpctransformer",
    "category": "method",
    "text": "GDALDestroyRPCTransformer(void * pTransformArg) -> void\n\nDestroy RPC tranformer.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.destroyspatialreference-Tuple{Ref{GDAL.OGRSpatialReferenceH}}",
    "page": "Home",
    "title": "GDAL.destroyspatialreference",
    "category": "method",
    "text": "OSRDestroySpatialReference(OGRSpatialReferenceH hSRS) -> void\n\nOGRSpatialReference destructor.\n\nParameters\n\nhSRS: the object to delete\n\n\n\n\n\n"
},

{
    "location": "#GDAL.destroytpstransformer-Tuple{Any}",
    "page": "Home",
    "title": "GDAL.destroytpstransformer",
    "category": "method",
    "text": "GDALDestroyTPSTransformer(void * pTransformArg) -> void\n\nDestroy TPS transformer.\n\nParameters\n\npTransformArg: the transform arg previously returned by GDALCreateTPSTransformer().\n\n\n\n\n\n"
},

{
    "location": "#GDAL.destroytransformer-Tuple{Any}",
    "page": "Home",
    "title": "GDAL.destroytransformer",
    "category": "method",
    "text": "GDALDestroyTransformer(void * pTransformArg) -> void\n\n\n\n\n\n"
},

{
    "location": "#GDAL.difference-Tuple{Ref{GDAL.OGRGeometryH},Ref{GDAL.OGRGeometryH}}",
    "page": "Home",
    "title": "GDAL.difference",
    "category": "method",
    "text": "OGR_G_Difference(OGRGeometryH hThis,\n                 OGRGeometryH hOther) -> OGRGeometryH\n\nCompute difference.\n\nParameters\n\nhThis: the geometry.\nhOther: the other geometry.\n\nReturns\n\na new geometry representing the difference or NULL if the difference is empty or an error occurs.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.disjoint-Tuple{Ref{GDAL.OGRGeometryH},Ref{GDAL.OGRGeometryH}}",
    "page": "Home",
    "title": "GDAL.disjoint",
    "category": "method",
    "text": "OGR_G_Disjoint(OGRGeometryH hThis,\n               OGRGeometryH hOther) -> int\n\nTest for disjointness.\n\nParameters\n\nhThis: the geometry to compare.\nhOther: the other geometry to compare.\n\nReturns\n\nTRUE if they are disjoint, otherwise FALSE.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.distance-Tuple{Ref{GDAL.OGRGeometryH},Ref{GDAL.OGRGeometryH}}",
    "page": "Home",
    "title": "GDAL.distance",
    "category": "method",
    "text": "OGR_G_Distance(OGRGeometryH hFirst,\n               OGRGeometryH hOther) -> double\n\nCompute distance between two geometries.\n\nParameters\n\nhFirst: the first geometry to compare against.\nhOther: the other geometry to compare against.\n\nReturns\n\nthe distance between the geometries or -1 if an error occurs.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.distance3d-Tuple{Ref{GDAL.OGRGeometryH},Ref{GDAL.OGRGeometryH}}",
    "page": "Home",
    "title": "GDAL.distance3d",
    "category": "method",
    "text": "OGR_G_Distance3D(OGRGeometryH hFirst,\n                 OGRGeometryH hOther) -> double\n\nReturns the 3D distance between two geometries.\n\nParameters\n\nhFirst: the first geometry to compare against.\nhOther: the other geometry to compare against.\n\nReturns\n\ndistance between the two geometries\n\n\n\n\n\n"
},

{
    "location": "#GDAL.ditherrgb2pct-Tuple{Ref{GDAL.GDALRasterBandH},Ref{GDAL.GDALRasterBandH},Ref{GDAL.GDALRasterBandH},Ref{GDAL.GDALRasterBandH},Ref{GDAL.GDALColorTableH},Any,Any}",
    "page": "Home",
    "title": "GDAL.ditherrgb2pct",
    "category": "method",
    "text": "GDALDitherRGB2PCT(GDALRasterBandH hRed,\n                  GDALRasterBandH hGreen,\n                  GDALRasterBandH hBlue,\n                  GDALRasterBandH hTarget,\n                  GDALColorTableH hColorTable,\n                  GDALProgressFunc pfnProgress,\n                  void * pProgressArg) -> int\n\n24bit to 8bit conversion with dithering.\n\nParameters\n\nhRed: Red input band.\nhGreen: Green input band.\nhBlue: Blue input band.\nhTarget: Output band.\nhColorTable: the color table to use with the output band.\npfnProgress: callback for reporting algorithm progress matching the GDALProgressFunc() semantics. May be NULL.\npProgressArg: callback argument passed to pfnProgress.\n\nReturns\n\nCENone on success or CEFailure if an error occurs.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.dumpopendatasets-Tuple{Any}",
    "page": "Home",
    "title": "GDAL.dumpopendatasets",
    "category": "method",
    "text": "GDALDumpOpenDatasets(FILE * fp) -> int\n\nList open datasets.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.dumpreadable-Tuple{Ref{GDAL.OGRFeatureH},Any}",
    "page": "Home",
    "title": "GDAL.dumpreadable",
    "category": "method",
    "text": "OGR_F_DumpReadable(OGRFeatureH hFeat,\n                   FILE * fpOut) -> void\n\nDump this feature in a human readable form.\n\nParameters\n\nhFeat: handle to the feature to dump.\nfpOut: the stream to write to, such as strout.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.dumpreadable-Tuple{Ref{GDAL.OGRGeometryH},Any,Any}",
    "page": "Home",
    "title": "GDAL.dumpreadable",
    "category": "method",
    "text": "OGR_G_DumpReadable(OGRGeometryH hGeom,\n                   FILE * fp,\n                   const char * pszPrefix) -> void\n\nDump geometry in well known text format to indicated output file.\n\nParameters\n\nhGeom: handle on the geometry to dump.\nfp: the text file to write the geometry to.\npszPrefix: the prefix to put on each line of output.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.duplicategcps-Tuple{Integer,Any}",
    "page": "Home",
    "title": "GDAL.duplicategcps",
    "category": "method",
    "text": "GDALDuplicateGCPs(int,\n                  const GDAL_GCP *) -> GDAL_GCP *\n\nDuplicate an array of GCPs.\n\nParameters\n\nnCount: number of GCPs in psGCP\npasGCPList: array of GCPs of size nCount.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.emergencyerror-Tuple{Any}",
    "page": "Home",
    "title": "GDAL.emergencyerror",
    "category": "method",
    "text": "CPLEmergencyError(const char * pszMessage) -> void\n\nFatal error when things are bad.\n\nParameters\n\npszMessage: the error message to report.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.empty-Tuple{Ref{GDAL.OGRGeometryH}}",
    "page": "Home",
    "title": "GDAL.empty",
    "category": "method",
    "text": "OGR_G_Empty(OGRGeometryH hGeom) -> void\n\nClear geometry information.\n\nParameters\n\nhGeom: handle on the geometry to empty.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.endasyncreader-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALDatasetH,Ref{GDAL.GDALAsyncReaderH}}",
    "page": "Home",
    "title": "GDAL.endasyncreader",
    "category": "method",
    "text": "GDALEndAsyncReader(GDALDatasetH hDS,\n                   GDALAsyncReaderH hAsyncReaderH) -> void\n\nEnd asynchronous request.\n\nParameters\n\nhDS: handle to the dataset object.\nhAsyncReaderH: handle returned by GDALBeginAsyncReader()\n\n\n\n\n\n"
},

{
    "location": "#GDAL.epsgtreatsaslatlong-Tuple{Ref{GDAL.OGRSpatialReferenceH}}",
    "page": "Home",
    "title": "GDAL.epsgtreatsaslatlong",
    "category": "method",
    "text": "OSREPSGTreatsAsLatLong(OGRSpatialReferenceH hSRS) -> int\n\nThis function returns TRUE if EPSG feels this geographic coordinate system should be treated as having lat/long coordinate ordering.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.epsgtreatsasnorthingeasting-Tuple{Ref{GDAL.OGRSpatialReferenceH}}",
    "page": "Home",
    "title": "GDAL.epsgtreatsasnorthingeasting",
    "category": "method",
    "text": "OSREPSGTreatsAsNorthingEasting(OGRSpatialReferenceH hSRS) -> int\n\nThis function returns TRUE if EPSG feels this geographic coordinate system should be treated as having northing/easting coordinate ordering.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.equal-Tuple{Ref{GDAL.OGRFeatureH},Ref{GDAL.OGRFeatureH}}",
    "page": "Home",
    "title": "GDAL.equal",
    "category": "method",
    "text": "OGR_F_Equal(OGRFeatureH hFeat,\n            OGRFeatureH hOtherFeat) -> int\n\nTest if two features are the same.\n\nParameters\n\nhFeat: handle to one of the feature.\nhOtherFeat: handle to the other feature to test this one against.\n\nReturns\n\nTRUE if they are equal, otherwise FALSE.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.equals-Tuple{Ref{GDAL.OGRGeometryH},Ref{GDAL.OGRGeometryH}}",
    "page": "Home",
    "title": "GDAL.equals",
    "category": "method",
    "text": "OGR_G_Equals(OGRGeometryH hGeom,\n             OGRGeometryH hOther) -> int\n\nReturns TRUE if two geometries are equivalent.\n\nParameters\n\nhGeom: handle on the first geometry.\nhOther: handle on the other geometry to test against.\n\nReturns\n\nTRUE if equivalent or FALSE otherwise.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.erase-Tuple{Ref{GDAL.OGRLayerH},Ref{GDAL.OGRLayerH},Ref{GDAL.OGRLayerH},Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.erase",
    "category": "method",
    "text": "OGR_L_Erase(OGRLayerH pLayerInput,\n            OGRLayerH pLayerMethod,\n            OGRLayerH pLayerResult,\n            char ** papszOptions,\n            GDALProgressFunc pfnProgress,\n            void * pProgressArg) -> OGRErr\n\nRemove areas that are covered by the method layer.\n\nParameters\n\npLayerInput: the input layer. Should not be NULL.\npLayerMethod: the method layer. Should not be NULL.\npLayerResult: the layer where the features resulting from the operation are inserted. Should not be NULL. See above the note about the schema.\npapszOptions: NULL terminated list of options (may be NULL).\npfnProgress: a GDALProgressFunc() compatible callback function for reporting progress or NULL.\npProgressArg: argument to be passed to pfnProgress. May be NULL.\n\nReturns\n\nan error code if there was an error or the execution was interrupted, OGRERR_NONE otherwise.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.errorreset-Tuple{}",
    "page": "Home",
    "title": "GDAL.errorreset",
    "category": "method",
    "text": "CPLErrorReset() -> void\n\nErase any traces of previous errors.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.errorsetstate-Tuple{GDAL.CPLErr,Int32,Any}",
    "page": "Home",
    "title": "GDAL.errorsetstate",
    "category": "method",
    "text": "CPLErrorSetState(CPLErr eErrClass,\n                 CPLErrorNum err_no,\n                 const char * pszMsg) -> void\n\nRestore an error state, without emitting an error.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.executesql-Tuple{Ref{GDAL.OGRDataSourceH},Any,Ref{GDAL.OGRGeometryH},Any}",
    "page": "Home",
    "title": "GDAL.executesql",
    "category": "method",
    "text": "OGR_DS_ExecuteSQL(OGRDataSourceH,\n                  const char *,\n                  OGRGeometryH,\n                  const char *) -> OGRLayerH\n\nExecute an SQL statement against the data store.\n\nParameters\n\nhDS: handle to the data source on which the SQL query is executed.\npszSQLCommand: the SQL statement to execute.\nhSpatialFilter: handle to a geometry which represents a spatial filter. Can be NULL.\npszDialect: allows control of the statement dialect. If set to NULL, the OGR SQL engine will be used, except for RDBMS drivers that will use their dedicated SQL engine, unless OGRSQL is explicitly passed as the dialect. Starting with OGR 1.10, the SQLITE dialect can also be used.\n\nReturns\n\nan handle to a OGRLayer containing the results of the query. Deallocate with OGRDSReleaseResultSet().\n\n\n\n\n\n"
},

{
    "location": "#GDAL.exportenvelopetogmltree-Tuple{Ref{GDAL.OGRGeometryH}}",
    "page": "Home",
    "title": "GDAL.exportenvelopetogmltree",
    "category": "method",
    "text": "OGR_G_ExportEnvelopeToGMLTree(OGRGeometryH hGeometry) -> CPLXMLNode *\n\nExport the envelope of a geometry as a gml:Box.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.exporttoerm-Tuple{Ref{GDAL.OGRSpatialReferenceH},Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.exporttoerm",
    "category": "method",
    "text": "OSRExportToERM(OGRSpatialReferenceH,\n               char *,\n               char *,\n               char *) -> OGRErr\n\nConvert coordinate system to ERMapper format.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.exporttogml-Tuple{Ref{GDAL.OGRGeometryH}}",
    "page": "Home",
    "title": "GDAL.exporttogml",
    "category": "method",
    "text": "OGR_G_ExportToGML(OGRGeometryH hGeometry) -> char *\n\nConvert a geometry into GML format.\n\nParameters\n\nhGeometry: handle to the geometry.\n\nReturns\n\nA GML fragment or NULL in case of error.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.exporttogmlex-Tuple{Ref{GDAL.OGRGeometryH},Any}",
    "page": "Home",
    "title": "GDAL.exporttogmlex",
    "category": "method",
    "text": "OGR_G_ExportToGMLEx(OGRGeometryH hGeometry,\n                    char ** papszOptions) -> char *\n\nConvert a geometry into GML format.\n\nParameters\n\nhGeometry: handle to the geometry.\npapszOptions: NULL-terminated list of options.\n\nReturns\n\nA GML fragment or NULL in case of error.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.exporttogmltree-Tuple{Ref{GDAL.OGRGeometryH}}",
    "page": "Home",
    "title": "GDAL.exporttogmltree",
    "category": "method",
    "text": "OGR_G_ExportToGMLTree(OGRGeometryH hGeometry) -> CPLXMLNode *\n\nConvert a geometry into GML format.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.exporttoisowkb-Tuple{Ref{GDAL.OGRGeometryH},GDAL.OGRwkbByteOrder,Any}",
    "page": "Home",
    "title": "GDAL.exporttoisowkb",
    "category": "method",
    "text": "OGR_G_ExportToIsoWkb(OGRGeometryH hGeom,\n                     OGRwkbByteOrder eOrder,\n                     unsigned char * pabyDstBuffer) -> OGRErr\n\nConvert a geometry into SFSQL 1.2 / ISO SQL/MM Part 3 well known binary format.\n\nParameters\n\nhGeom: handle on the geometry to convert to a well know binary data from.\neOrder: One of wkbXDR or wkbNDR indicating MSB or LSB byte order respectively.\npabyDstBuffer: a buffer into which the binary representation is written. This buffer must be at least OGRGWkbSize() byte in size.\n\nReturns\n\nCurrently OGRERR_NONE is always returned.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.exporttoisowkt-Tuple{Ref{GDAL.OGRGeometryH},Any}",
    "page": "Home",
    "title": "GDAL.exporttoisowkt",
    "category": "method",
    "text": "OGR_G_ExportToIsoWkt(OGRGeometryH hGeom,\n                     char ** ppszSrcText) -> OGRErr\n\nConvert a geometry into SFSQL 1.2 / ISO SQL/MM Part 3 well known text format.\n\nParameters\n\nhGeom: handle on the geometry to convert to a text format from.\nppszSrcText: a text buffer is allocated by the program, and assigned to the passed pointer. After use, *ppszDstText should be freed with CPLFree().\n\nReturns\n\nCurrently OGRERR_NONE is always returned.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.exporttojson-Tuple{Ref{GDAL.OGRGeometryH}}",
    "page": "Home",
    "title": "GDAL.exporttojson",
    "category": "method",
    "text": "OGR_G_ExportToJson(OGRGeometryH hGeometry) -> char *\n\nConvert a geometry into GeoJSON format.\n\nParameters\n\nhGeometry: handle to the geometry.\n\nReturns\n\nA GeoJSON fragment or NULL in case of error.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.exporttojsonex-Tuple{Ref{GDAL.OGRGeometryH},Any}",
    "page": "Home",
    "title": "GDAL.exporttojsonex",
    "category": "method",
    "text": "OGR_G_ExportToJsonEx(OGRGeometryH hGeometry,\n                     char ** papszOptions) -> char *\n\nConvert a geometry into GeoJSON format.\n\nParameters\n\nhGeometry: handle to the geometry.\npapszOptions: a null terminated list of options.\n\nReturns\n\nA GeoJSON fragment or NULL in case of error.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.exporttokml-Tuple{Ref{GDAL.OGRGeometryH},Any}",
    "page": "Home",
    "title": "GDAL.exporttokml",
    "category": "method",
    "text": "OGR_G_ExportToKML(OGRGeometryH hGeometry,\n                  const char * pszAltitudeMode) -> char *\n\nConvert a geometry into KML format.\n\nParameters\n\nhGeometry: handle to the geometry.\npszAltitudeMode: value to write in altitudeMode element, or NULL.\n\nReturns\n\nA KML fragment or NULL in case of error.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.exporttomicoordsys-Tuple{Ref{GDAL.OGRSpatialReferenceH},Any}",
    "page": "Home",
    "title": "GDAL.exporttomicoordsys",
    "category": "method",
    "text": "OSRExportToMICoordSys(OGRSpatialReferenceH hSRS,\n                      char ** ppszReturn) -> OGRErr\n\nExport coordinate system in Mapinfo style CoordSys format.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.exporttopanorama-Tuple{Ref{GDAL.OGRSpatialReferenceH},Any,Any,Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.exporttopanorama",
    "category": "method",
    "text": "OSRExportToPanorama(OGRSpatialReferenceH,\n                    long *,\n                    long *,\n                    long *,\n                    long *,\n                    double *) -> OGRErr\n\nExport coordinate system in \"Panorama\" GIS projection definition.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.exporttopci-Tuple{Ref{GDAL.OGRSpatialReferenceH},Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.exporttopci",
    "category": "method",
    "text": "OSRExportToPCI(OGRSpatialReferenceH,\n               char **,\n               char **,\n               double **) -> OGRErr\n\nExport coordinate system in PCI projection definition.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.exporttoprettywkt-Tuple{Ref{GDAL.OGRSpatialReferenceH},Any,Integer}",
    "page": "Home",
    "title": "GDAL.exporttoprettywkt",
    "category": "method",
    "text": "OSRExportToPrettyWkt(OGRSpatialReferenceH hSRS,\n                     char ** ppszReturn,\n                     int bSimplify) -> OGRErr\n\nConvert this SRS into a nicely formatted WKT string for display to a person.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.exporttoproj4-Tuple{Ref{GDAL.OGRSpatialReferenceH},Any}",
    "page": "Home",
    "title": "GDAL.exporttoproj4",
    "category": "method",
    "text": "OSRExportToProj4(OGRSpatialReferenceH,\n                 char **) -> OGRErr\n\nExport coordinate system in PROJ.4 format.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.exporttousgs-Tuple{Ref{GDAL.OGRSpatialReferenceH},Any,Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.exporttousgs",
    "category": "method",
    "text": "OSRExportToUSGS(OGRSpatialReferenceH,\n                long *,\n                long *,\n                double **,\n                long *) -> OGRErr\n\nExport coordinate system in USGS GCTP projection definition.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.exporttowkb-Tuple{Ref{GDAL.OGRGeometryH},GDAL.OGRwkbByteOrder,Any}",
    "page": "Home",
    "title": "GDAL.exporttowkb",
    "category": "method",
    "text": "OGR_G_ExportToWkb(OGRGeometryH hGeom,\n                  OGRwkbByteOrder eOrder,\n                  unsigned char * pabyDstBuffer) -> OGRErr\n\nConvert a geometry well known binary format.\n\nParameters\n\nhGeom: handle on the geometry to convert to a well know binary data from.\neOrder: One of wkbXDR or wkbNDR indicating MSB or LSB byte order respectively.\npabyDstBuffer: a buffer into which the binary representation is written. This buffer must be at least OGRGWkbSize() byte in size.\n\nReturns\n\nCurrently OGRERR_NONE is always returned.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.exporttowkt-Tuple{Ref{GDAL.OGRGeometryH},Any}",
    "page": "Home",
    "title": "GDAL.exporttowkt",
    "category": "method",
    "text": "OGR_G_ExportToWkt(OGRGeometryH hGeom,\n                  char ** ppszSrcText) -> OGRErr\n\nConvert a geometry into well known text format.\n\nParameters\n\nhGeom: handle on the geometry to convert to a text format from.\nppszSrcText: a text buffer is allocated by the program, and assigned to the passed pointer. After use, *ppszDstText should be freed with CPLFree().\n\nReturns\n\nCurrently OGRERR_NONE is always returned.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.exporttowkt-Tuple{Ref{GDAL.OGRSpatialReferenceH},Any}",
    "page": "Home",
    "title": "GDAL.exporttowkt",
    "category": "method",
    "text": "OSRExportToWkt(OGRSpatialReferenceH hSRS,\n               char ** ppszReturn) -> OGRErr\n\nConvert this SRS into WKT format.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.exporttoxml-Tuple{Ref{GDAL.OGRSpatialReferenceH},Any,Any}",
    "page": "Home",
    "title": "GDAL.exporttoxml",
    "category": "method",
    "text": "OSRExportToXML(OGRSpatialReferenceH,\n               char **,\n               const char *) -> OGRErr\n\nExport coordinate system in XML format.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.extractrpcinfo-Tuple{Any,Any}",
    "page": "Home",
    "title": "GDAL.extractrpcinfo",
    "category": "method",
    "text": "GDALExtractRPCInfo(char **,\n                   GDALRPCInfo *) -> int\n\nExtract RPC info from metadata, and apply to an RPCInfo structure.\n\nParameters\n\npapszMD: Dictionary of metadata representing RPC\npsRPC: (output) Pointer to structure to hold the RPC values.\n\nReturns\n\nTRUE in case of success. FALSE in case of failure.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.f_create-Tuple{Ref{GDAL.OGRFeatureDefnH}}",
    "page": "Home",
    "title": "GDAL.f_create",
    "category": "method",
    "text": "OGR_F_Create(OGRFeatureDefnH hDefn) -> OGRFeatureH\n\nFeature factory.\n\nParameters\n\nhDefn: handle to the feature class (layer) definition to which the feature will adhere.\n\nReturns\n\nan handle to the new feature object with null fields and no geometry, or, starting with GDAL 2.1, NULL in case out of memory situation.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.failsafe-Tuple{Any}",
    "page": "Home",
    "title": "GDAL.failsafe",
    "category": "method",
    "text": "Throw an error if a pointer is null and GDAL reports an error\n\n\n\n\n\n"
},

{
    "location": "#GDAL.fd_create-Tuple{Any}",
    "page": "Home",
    "title": "GDAL.fd_create",
    "category": "method",
    "text": "OGR_FD_Create(const char * pszName) -> OGRFeatureDefnH\n\nCreate a new feature definition object to hold the field definitions.\n\nParameters\n\npszName: the name to be assigned to this layer/class. It does not need to be unique.\n\nReturns\n\nhandle to the newly created feature definition.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.feedline-Tuple{Ref{GDAL.GDALContourGeneratorH},Any}",
    "page": "Home",
    "title": "GDAL.feedline",
    "category": "method",
    "text": "GDAL_CG_FeedLine(GDALContourGeneratorH hCG,\n                 double * padfScanline) -> CPLErr\n\nFeed a line to the contour generator.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.fillnodata-Tuple{Ref{GDAL.GDALRasterBandH},Ref{GDAL.GDALRasterBandH},Real,Integer,Integer,Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.fillnodata",
    "category": "method",
    "text": "GDALFillNodata(GDALRasterBandH hTargetBand,\n               GDALRasterBandH hMaskBand,\n               double dfMaxSearchDist,\n               int bDeprecatedOption,\n               int nSmoothingIterations,\n               char ** papszOptions,\n               GDALProgressFunc pfnProgress,\n               void * pProgressArg) -> CPLErr\n\nFill selected raster regions by interpolation from the edges.\n\nParameters\n\nhTargetBand: the raster band to be modified in place.\nhMaskBand: a mask band indicating pixels to be interpolated (zero valued).\ndfMaxSearchDist: the maximum number of pixels to search in all directions to find values to interpolate from.\nbDeprecatedOption: unused argument, should be zero.\nnSmoothingIterations: the number of 3x3 smoothing filter passes to run (0 or more).\npapszOptions: additional name=value options in a string list (the temporary file driver can be specified like TEMPFILEDRIVER=MEM).\npfnProgress: the progress function to report completion.\npProgressArg: callback data for progress function.\n\nReturns\n\nCENone on success or CEFailure if something goes wrong.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.fillraster-Tuple{Ref{GDAL.GDALRasterBandH},Real,Real}",
    "page": "Home",
    "title": "GDAL.fillraster",
    "category": "method",
    "text": "GDALFillRaster(GDALRasterBandH hBand,\n               double dfRealValue,\n               double dfImaginaryValue) -> CPLErr\n\nFill this band with a constant value.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.fillunsetwithdefault-Tuple{Ref{GDAL.OGRFeatureH},Integer,Any}",
    "page": "Home",
    "title": "GDAL.fillunsetwithdefault",
    "category": "method",
    "text": "OGR_F_FillUnsetWithDefault(OGRFeatureH hFeat,\n                           int bNotNullableOnly,\n                           char ** papszOptions) -> void\n\nFill unset fields with default values that might be defined.\n\nParameters\n\nhFeat: handle to the feature.\nbNotNullableOnly: if we should fill only unset fields with a not-null constraint.\npapszOptions: unused currently. Must be set to NULL.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.find-Tuple{Ref{GDAL.OGRStyleTableH},Any}",
    "page": "Home",
    "title": "GDAL.find",
    "category": "method",
    "text": "OGR_STBL_Find(OGRStyleTableH hStyleTable,\n              const char * pszName) -> const char *\n\nGet a style string by name.\n\nParameters\n\nhStyleTable: handle to the style table.\npszName: the name of the style string to find.\n\nReturns\n\nthe style string matching the name or NULL if not found or error.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.findfieldindex-Tuple{Ref{GDAL.OGRLayerH},Any,Integer}",
    "page": "Home",
    "title": "GDAL.findfieldindex",
    "category": "method",
    "text": "OGR_L_FindFieldIndex(OGRLayerH,\n                     const char *,\n                     int bExactMatch) -> int\n\nFind the index of field in a layer.\n\nReturns\n\nfield index, or -1 if the field doesn\'t exist\n\n\n\n\n\n"
},

{
    "location": "#GDAL.fixup-Tuple{Ref{GDAL.OGRSpatialReferenceH}}",
    "page": "Home",
    "title": "GDAL.fixup",
    "category": "method",
    "text": "OSRFixup(OGRSpatialReferenceH hSRS) -> OGRErr\n\nFixup as needed.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.fixupordering-Tuple{Ref{GDAL.OGRSpatialReferenceH}}",
    "page": "Home",
    "title": "GDAL.fixupordering",
    "category": "method",
    "text": "OSRFixupOrdering(OGRSpatialReferenceH hSRS) -> OGRErr\n\nCorrect parameter ordering to match CT Specification.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.flattento2d-Tuple{Ref{GDAL.OGRGeometryH}}",
    "page": "Home",
    "title": "GDAL.flattento2d",
    "category": "method",
    "text": "OGR_G_FlattenTo2D(OGRGeometryH hGeom) -> void\n\nConvert geometry to strictly 2D.\n\nParameters\n\nhGeom: handle on the geometry to convert.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.fld_create-Tuple{Any,GDAL.OGRFieldType}",
    "page": "Home",
    "title": "GDAL.fld_create",
    "category": "method",
    "text": "OGR_Fld_Create(const char * pszName,\n               OGRFieldType eType) -> OGRFieldDefnH\n\nCreate a new field definition.\n\nParameters\n\npszName: the name of the new field definition.\neType: the type of the new field definition.\n\nReturns\n\nhandle to the new field definition.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.flushcache-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALDatasetH}",
    "page": "Home",
    "title": "GDAL.flushcache",
    "category": "method",
    "text": "GDALFlushCache(GDALDatasetH hDS) -> void\n\nFlush all write cached data to disk.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.flushcacheblock-Tuple{}",
    "page": "Home",
    "title": "GDAL.flushcacheblock",
    "category": "method",
    "text": "GDALFlushCacheBlock() -> int\n\nTry to flush one cached raster block.\n\nReturns\n\nTRUE if one block was flushed, FALSE if there are no cached blocks or if they are currently locked.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.flushrastercache-Tuple{Ref{GDAL.GDALRasterBandH}}",
    "page": "Home",
    "title": "GDAL.flushrastercache",
    "category": "method",
    "text": "GDALFlushRasterCache(GDALRasterBandH hBand) -> CPLErr\n\nFlush raster data cache.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.forceto-Tuple{Ref{GDAL.OGRGeometryH},GDAL.OGRwkbGeometryType,Any}",
    "page": "Home",
    "title": "GDAL.forceto",
    "category": "method",
    "text": "OGR_G_ForceTo(OGRGeometryH hGeom,\n              OGRwkbGeometryType eTargetType,\n              char ** papszOptions) -> OGRGeometryH\n\nConvert to another geometry type.\n\nParameters\n\nhGeom: the input geometry - ownership is passed to the method.\neTargetType: target output geometry type.\npapszOptions: options as a null-terminated list of strings or NULL.\n\nReturns\n\nnew geometry.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.forcetolinestring-Tuple{Ref{GDAL.OGRGeometryH}}",
    "page": "Home",
    "title": "GDAL.forcetolinestring",
    "category": "method",
    "text": "OGR_G_ForceToLineString(OGRGeometryH hGeom) -> OGRGeometryH\n\nConvert to line string.\n\nParameters\n\nhGeom: handle to the geometry to convert (ownership surrendered).\n\nReturns\n\nthe converted geometry (ownership to caller).\n\n\n\n\n\n"
},

{
    "location": "#GDAL.forcetomultilinestring-Tuple{Ref{GDAL.OGRGeometryH}}",
    "page": "Home",
    "title": "GDAL.forcetomultilinestring",
    "category": "method",
    "text": "OGR_G_ForceToMultiLineString(OGRGeometryH hGeom) -> OGRGeometryH\n\nConvert to multilinestring.\n\nParameters\n\nhGeom: handle to the geometry to convert (ownership surrendered).\n\nReturns\n\nthe converted geometry (ownership to caller).\n\n\n\n\n\n"
},

{
    "location": "#GDAL.forcetomultipoint-Tuple{Ref{GDAL.OGRGeometryH}}",
    "page": "Home",
    "title": "GDAL.forcetomultipoint",
    "category": "method",
    "text": "OGR_G_ForceToMultiPoint(OGRGeometryH hGeom) -> OGRGeometryH\n\nConvert to multipoint.\n\nParameters\n\nhGeom: handle to the geometry to convert (ownership surrendered).\n\nReturns\n\nthe converted geometry (ownership to caller).\n\n\n\n\n\n"
},

{
    "location": "#GDAL.forcetomultipolygon-Tuple{Ref{GDAL.OGRGeometryH}}",
    "page": "Home",
    "title": "GDAL.forcetomultipolygon",
    "category": "method",
    "text": "OGR_G_ForceToMultiPolygon(OGRGeometryH hGeom) -> OGRGeometryH\n\nConvert to multipolygon.\n\nParameters\n\nhGeom: handle to the geometry to convert (ownership surrendered).\n\nReturns\n\nthe converted geometry (ownership to caller).\n\n\n\n\n\n"
},

{
    "location": "#GDAL.forcetopolygon-Tuple{Ref{GDAL.OGRGeometryH}}",
    "page": "Home",
    "title": "GDAL.forcetopolygon",
    "category": "method",
    "text": "OGR_G_ForceToPolygon(OGRGeometryH hGeom) -> OGRGeometryH\n\nConvert to polygon.\n\nParameters\n\nhGeom: handle to the geometry to convert (ownership surrendered).\n\nReturns\n\nthe converted geometry (ownership to caller).\n\n\n\n\n\n"
},

{
    "location": "#GDAL.fpolygonize-Tuple{Ref{GDAL.GDALRasterBandH},Ref{GDAL.GDALRasterBandH},Ref{GDAL.OGRLayerH},Integer,Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.fpolygonize",
    "category": "method",
    "text": "GDALFPolygonize(GDALRasterBandH hSrcBand,\n                GDALRasterBandH hMaskBand,\n                OGRLayerH hOutLayer,\n                int iPixValField,\n                char ** papszOptions,\n                GDALProgressFunc pfnProgress,\n                void * pProgressArg) -> CPLErr\n\nCreate polygon coverage from raster data.\n\nParameters\n\nhSrcBand: the source raster band to be processed.\nhMaskBand: an optional mask band. All pixels in the mask band with a value other than zero will be considered suitable for collection as polygons.\nhOutLayer: the vector feature layer to which the polygons should be written.\niPixValField: the attribute field index indicating the feature attribute into which the pixel value of the polygon should be written.\npapszOptions: a name/value list of additional options \n\n\"8CONNECTED\": May be set to \"8\" to use 8 connectedness. Otherwise 4 connectedness will be applied to the algorithm\n\npfnProgress: callback for reporting algorithm progress matching the GDALProgressFunc() semantics. May be NULL.\npProgressArg: callback argument passed to pfnProgress.\n\nReturns\n\nCENone on success or CEFailure on a failure.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.gcpstogeotransform-Tuple{Integer,Any,Any,Integer}",
    "page": "Home",
    "title": "GDAL.gcpstogeotransform",
    "category": "method",
    "text": "GDALGCPsToGeoTransform(int nGCPCount,\n                       const GDAL_GCP * pasGCPs,\n                       double * padfGeoTransform,\n                       int bApproxOK) -> int\n\nGenerate Geotransform from GCPs.\n\nParameters\n\nnGCPCount: the number of GCPs being passed in.\npasGCPs: the list of GCP structures.\npadfGeoTransform: the six double array in which the affine geotransformation will be returned.\nbApproxOK: If FALSE the function will fail if the geotransform is not essentially an exact fit (within 0.25 pixel) for all GCPs.\n\nReturns\n\nTRUE on success or FALSE if there aren\'t enough points to prepare a geotransform, the pointers are ill-determined or if bApproxOK is FALSE and the fit is poor.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.gcptransform-Tuple{Any,Integer,Integer,Any,Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.gcptransform",
    "category": "method",
    "text": "GDALGCPTransform(void * pTransformArg,\n                 int bDstToSrc,\n                 int nPointCount,\n                 double * x,\n                 double * y,\n                 double * z,\n                 int * panSuccess) -> int\n\nTransforms point based on GCP derived polynomial model.\n\nParameters\n\npTransformArg: return value from GDALCreateGCPTransformer().\nbDstToSrc: TRUE if transformation is from the destination (georeferenced) coordinates to pixel/line or FALSE when transforming from pixel/line to georeferenced coordinates.\nnPointCount: the number of values in the x, y and z arrays.\nx: array containing the X values to be transformed.\ny: array containing the Y values to be transformed.\nz: array containing the Z values to be transformed.\npanSuccess: array in which a flag indicating success (TRUE) or failure (FALSE) of the transformation are placed.\n\nReturns\n\nTRUE.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.generalcmdlineprocessor-Tuple{Integer,Any,Integer}",
    "page": "Home",
    "title": "GDAL.generalcmdlineprocessor",
    "category": "method",
    "text": "GDALGeneralCmdLineProcessor(int nArgc,\n                            char *** ppapszArgv,\n                            int nOptions) -> int\n\nGeneral utility option processing.\n\nParameters\n\nnArgc: number of values in the argument list.\nppapszArgv: pointer to the argument list array (will be updated in place).\nnOptions: a or-able combination of GDALOFRASTER and GDALOFVECTOR to determine which drivers should be displayed by formats. If set to 0, GDALOFRASTER is assumed.\n\nReturns\n\nupdated nArgc argument count. Return of 0 requests terminate without error, return of -1 requests exit with error code.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.genimgprojtransform-Tuple{Any,Integer,Integer,Any,Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.genimgprojtransform",
    "category": "method",
    "text": "GDALGenImgProjTransform(void * pTransformArgIn,\n                        int bDstToSrc,\n                        int nPointCount,\n                        double * padfX,\n                        double * padfY,\n                        double * padfZ,\n                        int * panSuccess) -> int\n\nPerform general image reprojection transformation.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.geoloctransform-Tuple{Any,Integer,Integer,Any,Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.geoloctransform",
    "category": "method",
    "text": "GDALGeoLocTransform(void * pTransformArg,\n                    int bDstToSrc,\n                    int nPointCount,\n                    double * padfX,\n                    double * padfY,\n                    double * padfZ,\n                    int * panSuccess) -> int\n\nUse GeoLocation transformer.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getaccess-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALDatasetH}",
    "page": "Home",
    "title": "GDAL.getaccess",
    "category": "method",
    "text": "GDALGetAccess(GDALDatasetH hDS) -> int\n\nReturn access flag.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getactualblocksize-Tuple{Ref{GDAL.GDALRasterBandH},Integer,Integer,Any,Any}",
    "page": "Home",
    "title": "GDAL.getactualblocksize",
    "category": "method",
    "text": "GDALGetActualBlockSize(GDALRasterBandH hBand,\n                       int nXBlockOff,\n                       int nYBlockOff,\n                       int * pnXValid,\n                       int * pnYValid) -> CPLErr\n\nRetrieve the actual block size for a given block offset.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getangularunits-Tuple{Ref{GDAL.OGRSpatialReferenceH},Any}",
    "page": "Home",
    "title": "GDAL.getangularunits",
    "category": "method",
    "text": "OSRGetAngularUnits(OGRSpatialReferenceH hSRS,\n                   char ** ppszName) -> double\n\nFetch angular geographic coordinate system units.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getarea-Tuple{Ref{GDAL.OGRGeometryH}}",
    "page": "Home",
    "title": "GDAL.getarea",
    "category": "method",
    "text": "OGR_G_GetArea(OGRGeometryH hGeom) -> double\n\nCompute geometry area (deprecated)\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getasyncstatustypebyname-Tuple{Any}",
    "page": "Home",
    "title": "GDAL.getasyncstatustypebyname",
    "category": "method",
    "text": "GDALGetAsyncStatusTypeByName(const char *) -> GDALAsyncStatusType\n\nGet AsyncStatusType by symbolic name.\n\nParameters\n\npszName: string containing the symbolic name of the type.\n\nReturns\n\nGDAL AsyncStatus type.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getasyncstatustypename-Tuple{GDAL.GDALAsyncStatusType}",
    "page": "Home",
    "title": "GDAL.getasyncstatustypename",
    "category": "method",
    "text": "GDALGetAsyncStatusTypeName(GDALAsyncStatusType) -> const char *\n\nGet name of AsyncStatus data type.\n\nParameters\n\neAsyncStatusType: type to get name of.\n\nReturns\n\nstring corresponding to type.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getattrvalue-Tuple{Ref{GDAL.OGRSpatialReferenceH},Any,Integer}",
    "page": "Home",
    "title": "GDAL.getattrvalue",
    "category": "method",
    "text": "OSRGetAttrValue(OGRSpatialReferenceH hSRS,\n                const char * pszKey,\n                int iChild) -> const char *\n\nFetch indicated attribute of named node.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getauthoritycode-Tuple{Ref{GDAL.OGRSpatialReferenceH},Any}",
    "page": "Home",
    "title": "GDAL.getauthoritycode",
    "category": "method",
    "text": "OSRGetAuthorityCode(OGRSpatialReferenceH hSRS,\n                    const char * pszTargetKey) -> const char *\n\nGet the authority code for a node.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getauthorityname-Tuple{Ref{GDAL.OGRSpatialReferenceH},Any}",
    "page": "Home",
    "title": "GDAL.getauthorityname",
    "category": "method",
    "text": "OSRGetAuthorityName(OGRSpatialReferenceH hSRS,\n                    const char * pszTargetKey) -> const char *\n\nGet the authority name for a node.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getaxis-Tuple{Ref{GDAL.OGRSpatialReferenceH},Any,Integer,Any}",
    "page": "Home",
    "title": "GDAL.getaxis",
    "category": "method",
    "text": "OSRGetAxis(OGRSpatialReferenceH hSRS,\n           const char * pszTargetKey,\n           int iAxis,\n           OGRAxisOrientation * peOrientation) -> const char *\n\nFetch the orientation of one axis.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getbanddataset-Tuple{Ref{GDAL.GDALRasterBandH}}",
    "page": "Home",
    "title": "GDAL.getbanddataset",
    "category": "method",
    "text": "GDALGetBandDataset(GDALRasterBandH hBand) -> GDALDatasetH\n\nFetch the owning dataset handle.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getbandnumber-Tuple{Ref{GDAL.GDALRasterBandH}}",
    "page": "Home",
    "title": "GDAL.getbandnumber",
    "category": "method",
    "text": "GDALGetBandNumber(GDALRasterBandH hBand) -> int\n\nFetch the band number.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getblocksize-Tuple{Ref{GDAL.GDALRasterBandH},Any,Any}",
    "page": "Home",
    "title": "GDAL.getblocksize",
    "category": "method",
    "text": "GDALGetBlockSize(GDALRasterBandH hBand,\n                 int * pnXSize,\n                 int * pnYSize) -> void\n\nFetch the \"natural\" block size of this band.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getboundary-Tuple{Ref{GDAL.OGRGeometryH}}",
    "page": "Home",
    "title": "GDAL.getboundary",
    "category": "method",
    "text": "OGR_G_GetBoundary(OGRGeometryH hTarget) -> OGRGeometryH\n\nCompute boundary (deprecated)\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getcachemax-Tuple{}",
    "page": "Home",
    "title": "GDAL.getcachemax",
    "category": "method",
    "text": "GDALGetCacheMax() -> int\n\nGet maximum cache memory.\n\nReturns\n\nmaximum in bytes.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getcachemax64-Tuple{}",
    "page": "Home",
    "title": "GDAL.getcachemax64",
    "category": "method",
    "text": "GDALGetCacheMax64() -> GIntBig\n\nGet maximum cache memory.\n\nReturns\n\nmaximum in bytes.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getcacheused-Tuple{}",
    "page": "Home",
    "title": "GDAL.getcacheused",
    "category": "method",
    "text": "GDALGetCacheUsed() -> int\n\nGet cache memory used.\n\nReturns\n\nthe number of bytes of memory currently in use by the GDALRasterBlock memory caching.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getcacheused64-Tuple{}",
    "page": "Home",
    "title": "GDAL.getcacheused64",
    "category": "method",
    "text": "GDALGetCacheUsed64() -> GIntBig\n\nGet cache memory used.\n\nReturns\n\nthe number of bytes of memory currently in use by the GDALRasterBlock memory caching.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getcolorentry-Tuple{Ref{GDAL.GDALColorTableH},Integer}",
    "page": "Home",
    "title": "GDAL.getcolorentry",
    "category": "method",
    "text": "GDALGetColorEntry(GDALColorTableH hTable,\n                  int i) -> const GDALColorEntry *\n\nFetch a color entry from table.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getcolorentryasrgb-Tuple{Ref{GDAL.GDALColorTableH},Integer,Any}",
    "page": "Home",
    "title": "GDAL.getcolorentryasrgb",
    "category": "method",
    "text": "GDALGetColorEntryAsRGB(GDALColorTableH hTable,\n                       int i,\n                       GDALColorEntry * poEntry) -> int\n\nFetch a table entry in RGB format.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getcolorentrycount-Tuple{Ref{GDAL.GDALColorTableH}}",
    "page": "Home",
    "title": "GDAL.getcolorentrycount",
    "category": "method",
    "text": "GDALGetColorEntryCount(GDALColorTableH hTable) -> int\n\nGet number of color entries in table.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getcolorinterpretationbyname-Tuple{Any}",
    "page": "Home",
    "title": "GDAL.getcolorinterpretationbyname",
    "category": "method",
    "text": "GDALGetColorInterpretationByName(const char * pszName) -> GDALColorInterp\n\nGet color interpretation by symbolic name.\n\nParameters\n\npszName: string containing the symbolic name of the color interpretation.\n\nReturns\n\nGDAL color interpretation.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getcolorinterpretationname-Tuple{GDAL.GDALColorInterp}",
    "page": "Home",
    "title": "GDAL.getcolorinterpretationname",
    "category": "method",
    "text": "GDALGetColorInterpretationName(GDALColorInterp) -> const char *\n\nGet name of color interpretation.\n\nParameters\n\neInterp: color interpretation to get name of.\n\nReturns\n\nstring corresponding to color interpretation or NULL pointer if invalid enumerator given.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getcoordinatedimension-Tuple{Ref{GDAL.OGRGeometryH}}",
    "page": "Home",
    "title": "GDAL.getcoordinatedimension",
    "category": "method",
    "text": "OGR_G_GetCoordinateDimension(OGRGeometryH hGeom) -> int\n\nGet the dimension of the coordinates in this geometry.\n\nParameters\n\nhGeom: handle on the geometry to get the dimension of the coordinates from.\n\nReturns\n\nthis will return 2 or 3.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getcurvegeometry-Tuple{Ref{GDAL.OGRGeometryH},Any}",
    "page": "Home",
    "title": "GDAL.getcurvegeometry",
    "category": "method",
    "text": "OGR_G_GetCurveGeometry(OGRGeometryH hGeom,\n                       char ** papszOptions) -> OGRGeometryH\n\nReturn curve version of this geometry.\n\nParameters\n\nhGeom: the geometry to operate on.\npapszOptions: options as a null-terminated list of strings. Unused for now. Must be set to NULL.\n\nReturns\n\na new geometry.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getdatacoveragestatus-Tuple{Ref{GDAL.GDALRasterBandH},Integer,Integer,Integer,Integer,Integer,Any}",
    "page": "Home",
    "title": "GDAL.getdatacoveragestatus",
    "category": "method",
    "text": "GDALGetDataCoverageStatus(GDALRasterBandH hBand,\n                          int nXOff,\n                          int nYOff,\n                          int nXSize,\n                          int nYSize,\n                          int nMaskFlagStop,\n                          double * pdfDataPct) -> int\n\nGet the coverage status of a sub-window of the raster.\n\nParameters\n\nhBand: raster band\nnXOff: The pixel offset to the top left corner of the region of the band to be queried. This would be zero to start from the left side.\nnYOff: The line offset to the top left corner of the region of the band to be queried. This would be zero to start from the top.\nnXSize: The width of the region of the band to be queried in pixels.\nnYSize: The height of the region of the band to be queried in lines.\nnMaskFlagStop: 0, or a binary-or\'ed mask of possible values GDALDATACOVERAGESTATUSUNIMPLEMENTED, GDALDATACOVERAGESTATUSDATA and GDALDATACOVERAGESTATUSEMPTY. As soon as the computation of the coverage matches the mask, the computation will be stopped. *pdfDataPct will not be valid in that case.\npdfDataPct: Optional output parameter whose pointed value will be set to the (approximate) percentage in [0,100] of pixels in the queried sub-window that have valid values. The implementation might not always be able to compute it, in which case it will be set to a negative value.\n\nReturns\n\na binary-or\'ed combination of possible values GDALDATACOVERAGESTATUSUNIMPLEMENTED, GDALDATACOVERAGESTATUSDATA and GDALDATACOVERAGESTATUSEMPTY\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getdatasetdriver-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALDatasetH}",
    "page": "Home",
    "title": "GDAL.getdatasetdriver",
    "category": "method",
    "text": "GDALGetDatasetDriver(GDALDatasetH hDataset) -> GDALDriverH\n\nFetch the driver to which this dataset relates.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getdatatypebyname-Tuple{Any}",
    "page": "Home",
    "title": "GDAL.getdatatypebyname",
    "category": "method",
    "text": "GDALGetDataTypeByName(const char *) -> GDALDataType\n\nGet data type by symbolic name.\n\nParameters\n\npszName: string containing the symbolic name of the type.\n\nReturns\n\nGDAL data type.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getdatatypename-Tuple{GDAL.GDALDataType}",
    "page": "Home",
    "title": "GDAL.getdatatypename",
    "category": "method",
    "text": "GDALGetDataTypeName(GDALDataType) -> const char *\n\nGet name of data type.\n\nParameters\n\neDataType: type to get name of.\n\nReturns\n\nstring corresponding to existing data type or NULL pointer if invalid type given.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getdatatypesize-Tuple{GDAL.GDALDataType}",
    "page": "Home",
    "title": "GDAL.getdatatypesize",
    "category": "method",
    "text": "GDALGetDataTypeSize(GDALDataType) -> int\n\nGet data type size in bits.\n\nParameters\n\neDataType: type, such as GDT_Byte.\n\nReturns\n\nthe number of bits or zero if it is not recognised.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getdatatypesizebits-Tuple{GDAL.GDALDataType}",
    "page": "Home",
    "title": "GDAL.getdatatypesizebits",
    "category": "method",
    "text": "GDALGetDataTypeSizeBits(GDALDataType eDataType) -> int\n\nGet data type size in bits.\n\nParameters\n\neDataType: type, such as GDT_Byte.\n\nReturns\n\nthe number of bits or zero if it is not recognised.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getdatatypesizebytes-Tuple{GDAL.GDALDataType}",
    "page": "Home",
    "title": "GDAL.getdatatypesizebytes",
    "category": "method",
    "text": "GDALGetDataTypeSizeBytes(GDALDataType) -> int\n\nGet data type size in bytes.\n\nParameters\n\neDataType: type, such as GDT_Byte.\n\nReturns\n\nthe number of bytes or zero if it is not recognised.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getdefault-Tuple{Ref{GDAL.OGRFieldDefnH}}",
    "page": "Home",
    "title": "GDAL.getdefault",
    "category": "method",
    "text": "OGR_Fld_GetDefault(OGRFieldDefnH hDefn) -> const char *\n\nGet default field value.\n\nParameters\n\nhDefn: handle to the field definition.\n\nReturns\n\ndefault field value or NULL.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getdefaulthistogram-Tuple{Ref{GDAL.GDALRasterBandH},Any,Any,Any,Any,Integer,Any,Any}",
    "page": "Home",
    "title": "GDAL.getdefaulthistogram",
    "category": "method",
    "text": "GDALGetDefaultHistogram(GDALRasterBandH hBand,\n                        double * pdfMin,\n                        double * pdfMax,\n                        int * pnBuckets,\n                        int ** ppanHistogram,\n                        int bForce,\n                        GDALProgressFunc pfnProgress,\n                        void * pProgressData) -> CPLErr\n\nFetch default raster histogram.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getdefaulthistogramex-Tuple{Ref{GDAL.GDALRasterBandH},Any,Any,Any,Any,Integer,Any,Any}",
    "page": "Home",
    "title": "GDAL.getdefaulthistogramex",
    "category": "method",
    "text": "GDALGetDefaultHistogramEx(GDALRasterBandH hBand,\n                          double * pdfMin,\n                          double * pdfMax,\n                          int * pnBuckets,\n                          GUIntBig ** ppanHistogram,\n                          int bForce,\n                          GDALProgressFunc pfnProgress,\n                          void * pProgressData) -> CPLErr\n\nFetch default raster histogram.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getdefaultrat-Tuple{Ref{GDAL.GDALRasterBandH}}",
    "page": "Home",
    "title": "GDAL.getdefaultrat",
    "category": "method",
    "text": "GDALGetDefaultRAT(GDALRasterBandH hBand) -> GDALRasterAttributeTableH\n\nFetch default Raster Attribute Table.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getdefnref-Tuple{Ref{GDAL.OGRFeatureH}}",
    "page": "Home",
    "title": "GDAL.getdefnref",
    "category": "method",
    "text": "OGR_F_GetDefnRef(OGRFeatureH hFeat) -> OGRFeatureDefnH\n\nFetch feature definition.\n\nParameters\n\nhFeat: handle to the feature to get the feature definition from.\n\nReturns\n\nan handle to the feature definition object on which feature depends.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getdescription-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALMajorObjectH}",
    "page": "Home",
    "title": "GDAL.getdescription",
    "category": "method",
    "text": "GDALGetDescription(GDALMajorObjectH hObject) -> const char *\n\nFetch object description.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getdimension-Tuple{Ref{GDAL.OGRGeometryH}}",
    "page": "Home",
    "title": "GDAL.getdimension",
    "category": "method",
    "text": "OGR_G_GetDimension(OGRGeometryH hGeom) -> int\n\nGet the dimension of this geometry.\n\nParameters\n\nhGeom: handle on the geometry to get the dimension from.\n\nReturns\n\n0 for points, 1 for lines and 2 for surfaces.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getdriver-Tuple{Integer}",
    "page": "Home",
    "title": "GDAL.getdriver",
    "category": "method",
    "text": "GDALGetDriver(int iDriver) -> GDALDriverH\n\nFetch driver by index.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getdriver-Tuple{Ref{GDAL.OGRDataSourceH}}",
    "page": "Home",
    "title": "GDAL.getdriver",
    "category": "method",
    "text": "OGR_DS_GetDriver(OGRDataSourceH) -> OGRSFDriverH\n\nReturns the driver that the dataset was opened with.\n\nParameters\n\nhDS: handle to the datasource\n\nReturns\n\nNULL if driver info is not available, or pointer to a driver owned by the OGRSFDriverManager.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getdriverbyname-Tuple{Any}",
    "page": "Home",
    "title": "GDAL.getdriverbyname",
    "category": "method",
    "text": "GDALGetDriverByName(const char * pszName) -> GDALDriverH\n\nFetch a driver based on the short name.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getdrivercount-Tuple{}",
    "page": "Home",
    "title": "GDAL.getdrivercount",
    "category": "method",
    "text": "GDALGetDriverCount() -> int\n\nFetch the number of registered drivers.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getdrivercreationoptionlist-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALDriverH}",
    "page": "Home",
    "title": "GDAL.getdrivercreationoptionlist",
    "category": "method",
    "text": "GDALGetDriverCreationOptionList(GDALDriverH hDriver) -> const char *\n\nReturn the list of creation options of the driver.\n\nParameters\n\nhDriver: the handle of the driver\n\nReturns\n\nan XML string that describes the list of creation options or empty string. The returned string should not be freed and is owned by the driver.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getdriverhelptopic-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALDriverH}",
    "page": "Home",
    "title": "GDAL.getdriverhelptopic",
    "category": "method",
    "text": "GDALGetDriverHelpTopic(GDALDriverH hDriver) -> const char *\n\nReturn the URL to the help that describes the driver.\n\nParameters\n\nhDriver: the handle of the driver\n\nReturns\n\nthe URL to the help that describes the driver or NULL. The returned string should not be freed and is owned by the driver.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getdriverlongname-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALDriverH}",
    "page": "Home",
    "title": "GDAL.getdriverlongname",
    "category": "method",
    "text": "GDALGetDriverLongName(GDALDriverH hDriver) -> const char *\n\nReturn the long name of a driver.\n\nParameters\n\nhDriver: the handle of the driver\n\nReturns\n\nthe long name of the driver or empty string. The returned string should not be freed and is owned by the driver.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getdrivershortname-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALDriverH}",
    "page": "Home",
    "title": "GDAL.getdrivershortname",
    "category": "method",
    "text": "GDALGetDriverShortName(GDALDriverH hDriver) -> const char *\n\nReturn the short name of a driver.\n\nParameters\n\nhDriver: the handle of the driver\n\nReturns\n\nthe short name of the driver. The returned string should not be freed and is owned by the driver.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getenvelope-Tuple{Ref{GDAL.OGRGeometryH},Any}",
    "page": "Home",
    "title": "GDAL.getenvelope",
    "category": "method",
    "text": "OGR_G_GetEnvelope(OGRGeometryH hGeom,\n                  OGREnvelope * psEnvelope) -> void\n\nComputes and returns the bounding envelope for this geometry in the passed psEnvelope structure.\n\nParameters\n\nhGeom: handle of the geometry to get envelope from.\npsEnvelope: the structure in which to place the results.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getenvelope3d-Tuple{Ref{GDAL.OGRGeometryH},Any}",
    "page": "Home",
    "title": "GDAL.getenvelope3d",
    "category": "method",
    "text": "OGR_G_GetEnvelope3D(OGRGeometryH hGeom,\n                    OGREnvelope3D * psEnvelope) -> void\n\nComputes and returns the bounding envelope (3D) for this geometry in the passed psEnvelope structure.\n\nParameters\n\nhGeom: handle of the geometry to get envelope from.\npsEnvelope: the structure in which to place the results.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.geterrorhandleruserdata-Tuple{}",
    "page": "Home",
    "title": "GDAL.geterrorhandleruserdata",
    "category": "method",
    "text": "CPLGetErrorHandlerUserData(void) -> void *\n\nFetch the user data for the error context.\n\nReturns\n\nthe user data pointer for the error context\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getextent-Tuple{Ref{GDAL.OGRLayerH},Any,Integer}",
    "page": "Home",
    "title": "GDAL.getextent",
    "category": "method",
    "text": "OGR_L_GetExtent(OGRLayerH,\n                OGREnvelope *,\n                int) -> OGRErr\n\nFetch the extent of this layer.\n\nParameters\n\nhLayer: handle to the layer from which to get extent.\npsExtent: the structure in which the extent value will be returned.\nbForce: Flag indicating whether the extent should be computed even if it is expensive.\n\nReturns\n\nOGRERRNONE on success, OGRERRFAILURE if extent not known.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getextentex-Tuple{Ref{GDAL.OGRLayerH},Integer,Any,Integer}",
    "page": "Home",
    "title": "GDAL.getextentex",
    "category": "method",
    "text": "OGR_L_GetExtentEx(OGRLayerH,\n                  int iGeomField,\n                  OGREnvelope * psExtent,\n                  int bForce) -> OGRErr\n\nFetch the extent of this layer, on the specified geometry field.\n\nParameters\n\nhLayer: handle to the layer from which to get extent.\niGeomField: the index of the geometry field on which to compute the extent.\npsExtent: the structure in which the extent value will be returned.\nbForce: Flag indicating whether the extent should be computed even if it is expensive.\n\nReturns\n\nOGRERRNONE on success, OGRERRFAILURE if extent not known.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getfeature-Tuple{Ref{GDAL.OGRLayerH},Integer}",
    "page": "Home",
    "title": "GDAL.getfeature",
    "category": "method",
    "text": "OGR_L_GetFeature(OGRLayerH,\n                 GIntBig) -> OGRFeatureH\n\nFetch a feature by its identifier.\n\nParameters\n\nhLayer: handle to the layer that owned the feature.\nnFeatureId: the feature id of the feature to read.\n\nReturns\n\nan handle to a feature now owned by the caller, or NULL on failure.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getfeaturecount-Tuple{Ref{GDAL.OGRLayerH},Integer}",
    "page": "Home",
    "title": "GDAL.getfeaturecount",
    "category": "method",
    "text": "OGR_L_GetFeatureCount(OGRLayerH,\n                      int) -> GIntBig\n\nFetch the feature count in this layer.\n\nParameters\n\nhLayer: handle to the layer that owned the features.\nbForce: Flag indicating whether the count should be computed even if it is expensive.\n\nReturns\n\nfeature count, -1 if count not known.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getfeaturesread-Tuple{Ref{GDAL.OGRLayerH}}",
    "page": "Home",
    "title": "GDAL.getfeaturesread",
    "category": "method",
    "text": "OGR_L_GetFeaturesRead(OGRLayerH hLayer) -> GIntBig\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getfid-Tuple{Ref{GDAL.OGRFeatureH}}",
    "page": "Home",
    "title": "GDAL.getfid",
    "category": "method",
    "text": "OGR_F_GetFID(OGRFeatureH hFeat) -> GIntBig\n\nGet feature identifier.\n\nParameters\n\nhFeat: handle to the feature from which to get the feature identifier.\n\nReturns\n\nfeature id or OGRNullFID if none has been assigned.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getfidcolumn-Tuple{Ref{GDAL.OGRLayerH}}",
    "page": "Home",
    "title": "GDAL.getfidcolumn",
    "category": "method",
    "text": "OGR_L_GetFIDColumn(OGRLayerH) -> const char *\n\nThis method returns the name of the underlying database column being used as the FID column, or \"\" if not supported.\n\nParameters\n\nhLayer: handle to the layer\n\nReturns\n\nfid column name.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getfieldasbinary-Tuple{Ref{GDAL.OGRFeatureH},Integer,Any}",
    "page": "Home",
    "title": "GDAL.getfieldasbinary",
    "category": "method",
    "text": "OGR_F_GetFieldAsBinary(OGRFeatureH hFeat,\n                       int iField,\n                       int * pnBytes) -> GByte *\n\nFetch field value as binary.\n\nParameters\n\nhFeat: handle to the feature that owned the field.\niField: the field to fetch, from 0 to GetFieldCount()-1.\npnBytes: location to place count of bytes returned.\n\nReturns\n\nthe field value. This list is internal, and should not be modified, or freed. Its lifetime may be very brief.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getfieldasdatetime-Tuple{Ref{GDAL.OGRFeatureH},Integer,Any,Any,Any,Any,Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.getfieldasdatetime",
    "category": "method",
    "text": "OGR_F_GetFieldAsDateTime(OGRFeatureH hFeat,\n                         int iField,\n                         int * pnYear,\n                         int * pnMonth,\n                         int * pnDay,\n                         int * pnHour,\n                         int * pnMinute,\n                         int * pnSecond,\n                         int * pnTZFlag) -> int\n\nFetch field value as date and time.\n\nParameters\n\nhFeat: handle to the feature that owned the field.\niField: the field to fetch, from 0 to GetFieldCount()-1.\npnYear: (including century)\npnMonth: (1-12)\npnDay: (1-31)\npnHour: (0-23)\npnMinute: (0-59)\npnSecond: (0-59)\npnTZFlag: (0=unknown, 1=localtime, 100=GMT, see data model for details)\n\nReturns\n\nTRUE on success or FALSE on failure.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getfieldasdatetimeex-Tuple{Ref{GDAL.OGRFeatureH},Integer,Any,Any,Any,Any,Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.getfieldasdatetimeex",
    "category": "method",
    "text": "OGR_F_GetFieldAsDateTimeEx(OGRFeatureH hFeat,\n                           int iField,\n                           int * pnYear,\n                           int * pnMonth,\n                           int * pnDay,\n                           int * pnHour,\n                           int * pnMinute,\n                           float * pfSecond,\n                           int * pnTZFlag) -> int\n\nFetch field value as date and time.\n\nParameters\n\nhFeat: handle to the feature that owned the field.\niField: the field to fetch, from 0 to GetFieldCount()-1.\npnYear: (including century)\npnMonth: (1-12)\npnDay: (1-31)\npnHour: (0-23)\npnMinute: (0-59)\npfSecond: (0-59 with millisecond accuracy)\npnTZFlag: (0=unknown, 1=localtime, 100=GMT, see data model for details)\n\nReturns\n\nTRUE on success or FALSE on failure.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getfieldasdouble-Tuple{Ref{GDAL.OGRFeatureH},Integer}",
    "page": "Home",
    "title": "GDAL.getfieldasdouble",
    "category": "method",
    "text": "OGR_F_GetFieldAsDouble(OGRFeatureH hFeat,\n                       int iField) -> double\n\nFetch field value as a double.\n\nParameters\n\nhFeat: handle to the feature that owned the field.\niField: the field to fetch, from 0 to GetFieldCount()-1.\n\nReturns\n\nthe field value.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getfieldasdoublelist-Tuple{Ref{GDAL.OGRFeatureH},Integer,Any}",
    "page": "Home",
    "title": "GDAL.getfieldasdoublelist",
    "category": "method",
    "text": "OGR_F_GetFieldAsDoubleList(OGRFeatureH hFeat,\n                           int iField,\n                           int * pnCount) -> const double *\n\nFetch field value as a list of doubles.\n\nParameters\n\nhFeat: handle to the feature that owned the field.\niField: the field to fetch, from 0 to GetFieldCount()-1.\npnCount: an integer to put the list count (number of doubles) into.\n\nReturns\n\nthe field value. This list is internal, and should not be modified, or freed. Its lifetime may be very brief. If *pnCount is zero on return the returned pointer may be NULL or non-NULL.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getfieldasinteger-Tuple{Ref{GDAL.OGRFeatureH},Integer}",
    "page": "Home",
    "title": "GDAL.getfieldasinteger",
    "category": "method",
    "text": "OGR_F_GetFieldAsInteger(OGRFeatureH hFeat,\n                        int iField) -> int\n\nFetch field value as integer.\n\nParameters\n\nhFeat: handle to the feature that owned the field.\niField: the field to fetch, from 0 to GetFieldCount()-1.\n\nReturns\n\nthe field value.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getfieldasinteger64-Tuple{Ref{GDAL.OGRFeatureH},Integer}",
    "page": "Home",
    "title": "GDAL.getfieldasinteger64",
    "category": "method",
    "text": "OGR_F_GetFieldAsInteger64(OGRFeatureH hFeat,\n                          int iField) -> GIntBig\n\nFetch field value as integer 64 bit.\n\nParameters\n\nhFeat: handle to the feature that owned the field.\niField: the field to fetch, from 0 to GetFieldCount()-1.\n\nReturns\n\nthe field value.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getfieldasinteger64list-Tuple{Ref{GDAL.OGRFeatureH},Integer,Any}",
    "page": "Home",
    "title": "GDAL.getfieldasinteger64list",
    "category": "method",
    "text": "OGR_F_GetFieldAsInteger64List(OGRFeatureH hFeat,\n                              int iField,\n                              int * pnCount) -> const GIntBig *\n\nFetch field value as a list of 64 bit integers.\n\nParameters\n\nhFeat: handle to the feature that owned the field.\niField: the field to fetch, from 0 to GetFieldCount()-1.\npnCount: an integer to put the list count (number of integers) into.\n\nReturns\n\nthe field value. This list is internal, and should not be modified, or freed. Its lifetime may be very brief. If *pnCount is zero on return the returned pointer may be NULL or non-NULL.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getfieldasintegerlist-Tuple{Ref{GDAL.OGRFeatureH},Integer,Any}",
    "page": "Home",
    "title": "GDAL.getfieldasintegerlist",
    "category": "method",
    "text": "OGR_F_GetFieldAsIntegerList(OGRFeatureH hFeat,\n                            int iField,\n                            int * pnCount) -> const int *\n\nFetch field value as a list of integers.\n\nParameters\n\nhFeat: handle to the feature that owned the field.\niField: the field to fetch, from 0 to GetFieldCount()-1.\npnCount: an integer to put the list count (number of integers) into.\n\nReturns\n\nthe field value. This list is internal, and should not be modified, or freed. Its lifetime may be very brief. If *pnCount is zero on return the returned pointer may be NULL or non-NULL.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getfieldasstring-Tuple{Ref{GDAL.OGRFeatureH},Integer}",
    "page": "Home",
    "title": "GDAL.getfieldasstring",
    "category": "method",
    "text": "OGR_F_GetFieldAsString(OGRFeatureH hFeat,\n                       int iField) -> const char *\n\nFetch field value as a string.\n\nParameters\n\nhFeat: handle to the feature that owned the field.\niField: the field to fetch, from 0 to GetFieldCount()-1.\n\nReturns\n\nthe field value. This string is internal, and should not be modified, or freed. Its lifetime may be very brief.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getfieldasstringlist-Tuple{Ref{GDAL.OGRFeatureH},Integer}",
    "page": "Home",
    "title": "GDAL.getfieldasstringlist",
    "category": "method",
    "text": "OGR_F_GetFieldAsStringList(OGRFeatureH hFeat,\n                           int iField) -> char **\n\nFetch field value as a list of strings.\n\nParameters\n\nhFeat: handle to the feature that owned the field.\niField: the field to fetch, from 0 to GetFieldCount()-1.\n\nReturns\n\nthe field value. This list is internal, and should not be modified, or freed. Its lifetime may be very brief.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getfieldcount-Tuple{Ref{GDAL.OGRFeatureDefnH}}",
    "page": "Home",
    "title": "GDAL.getfieldcount",
    "category": "method",
    "text": "OGR_FD_GetFieldCount(OGRFeatureDefnH hDefn) -> int\n\nFetch number of fields on the passed feature definition.\n\nParameters\n\nhDefn: handle to the feature definition to get the fields count from.\n\nReturns\n\ncount of fields.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getfieldcount-Tuple{Ref{GDAL.OGRFeatureH}}",
    "page": "Home",
    "title": "GDAL.getfieldcount",
    "category": "method",
    "text": "OGR_F_GetFieldCount(OGRFeatureH hFeat) -> int\n\nFetch number of fields on this feature This will always be the same as the field count for the OGRFeatureDefn.\n\nParameters\n\nhFeat: handle to the feature to get the fields count from.\n\nReturns\n\ncount of fields.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getfielddefn-Tuple{Ref{GDAL.OGRFeatureDefnH},Integer}",
    "page": "Home",
    "title": "GDAL.getfielddefn",
    "category": "method",
    "text": "OGR_FD_GetFieldDefn(OGRFeatureDefnH hDefn,\n                    int iField) -> OGRFieldDefnH\n\nFetch field definition of the passed feature definition.\n\nParameters\n\nhDefn: handle to the feature definition to get the field definition from.\niField: the field to fetch, between 0 and GetFieldCount()-1.\n\nReturns\n\nan handle to an internal field definition object or NULL if invalid index. This object should not be modified or freed by the application.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getfielddefnref-Tuple{Ref{GDAL.OGRFeatureH},Integer}",
    "page": "Home",
    "title": "GDAL.getfielddefnref",
    "category": "method",
    "text": "OGR_F_GetFieldDefnRef(OGRFeatureH hFeat,\n                      int i) -> OGRFieldDefnH\n\nFetch definition for this field.\n\nParameters\n\nhFeat: handle to the feature on which the field is found.\ni: the field to fetch, from 0 to GetFieldCount()-1.\n\nReturns\n\nan handle to the field definition (from the OGRFeatureDefn). This is an internal reference, and should not be deleted or modified.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getfieldindex-Tuple{Ref{GDAL.OGRFeatureDefnH},Any}",
    "page": "Home",
    "title": "GDAL.getfieldindex",
    "category": "method",
    "text": "OGR_FD_GetFieldIndex(OGRFeatureDefnH hDefn,\n                     const char * pszFieldName) -> int\n\nFind field by name.\n\nParameters\n\nhDefn: handle to the feature definition to get field index from.\npszFieldName: the field name to search for.\n\nReturns\n\nthe field index, or -1 if no match found.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getfieldindex-Tuple{Ref{GDAL.OGRFeatureH},Any}",
    "page": "Home",
    "title": "GDAL.getfieldindex",
    "category": "method",
    "text": "OGR_F_GetFieldIndex(OGRFeatureH hFeat,\n                    const char * pszName) -> int\n\nFetch the field index given field name.\n\nParameters\n\nhFeat: handle to the feature on which the field is found.\npszName: the name of the field to search for.\n\nReturns\n\nthe field index, or -1 if no matching field is found.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getfieldsubtypename-Tuple{GDAL.OGRFieldSubType}",
    "page": "Home",
    "title": "GDAL.getfieldsubtypename",
    "category": "method",
    "text": "OGR_GetFieldSubTypeName(OGRFieldSubType eSubType) -> const char *\n\nFetch human readable name for a field subtype.\n\nParameters\n\neSubType: the field subtype to get name for.\n\nReturns\n\nthe name.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getfieldtypename-Tuple{GDAL.OGRFieldType}",
    "page": "Home",
    "title": "GDAL.getfieldtypename",
    "category": "method",
    "text": "OGR_GetFieldTypeName(OGRFieldType eType) -> const char *\n\nFetch human readable name for a field type.\n\nParameters\n\neType: the field type to get name for.\n\nReturns\n\nthe name.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getfilelist-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALDatasetH}",
    "page": "Home",
    "title": "GDAL.getfilelist",
    "category": "method",
    "text": "GDALGetFileList(GDALDatasetH hDS) -> char **\n\nFetch files forming dataset.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getgcpcount-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALDatasetH}",
    "page": "Home",
    "title": "GDAL.getgcpcount",
    "category": "method",
    "text": "GDALGetGCPCount(GDALDatasetH hDS) -> int\n\nGet number of GCPs.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getgcpprojection-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALDatasetH}",
    "page": "Home",
    "title": "GDAL.getgcpprojection",
    "category": "method",
    "text": "GDALGetGCPProjection(GDALDatasetH hDS) -> const char *\n\nGet output projection for GCPs.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getgcps-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALDatasetH}",
    "page": "Home",
    "title": "GDAL.getgcps",
    "category": "method",
    "text": "GDALGetGCPs(GDALDatasetH hDS) -> const GDAL_GCP *\n\nFetch GCPs.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getgenerate_db2_v72_byte_order-Tuple{}",
    "page": "Home",
    "title": "GDAL.getgenerate_db2_v72_byte_order",
    "category": "method",
    "text": "OGRGetGenerate_DB2_V72_BYTE_ORDER() -> int\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getgeometrycolumn-Tuple{Ref{GDAL.OGRLayerH}}",
    "page": "Home",
    "title": "GDAL.getgeometrycolumn",
    "category": "method",
    "text": "OGR_L_GetGeometryColumn(OGRLayerH) -> const char *\n\nThis method returns the name of the underlying database column being used as the geometry column, or \"\" if not supported.\n\nParameters\n\nhLayer: handle to the layer\n\nReturns\n\ngeometry column name.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getgeometrycount-Tuple{Ref{GDAL.OGRGeometryH}}",
    "page": "Home",
    "title": "GDAL.getgeometrycount",
    "category": "method",
    "text": "OGR_G_GetGeometryCount(OGRGeometryH hGeom) -> int\n\nFetch the number of elements in a geometry or number of geometries in container.\n\nParameters\n\nhGeom: single geometry or geometry container from which to get the number of elements.\n\nReturns\n\nthe number of elements.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getgeometryname-Tuple{Ref{GDAL.OGRGeometryH}}",
    "page": "Home",
    "title": "GDAL.getgeometryname",
    "category": "method",
    "text": "OGR_G_GetGeometryName(OGRGeometryH hGeom) -> const char *\n\nFetch WKT name for geometry type.\n\nParameters\n\nhGeom: handle on the geometry to get name from.\n\nReturns\n\nname used for this geometry type in well known text format.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getgeometryref-Tuple{Ref{GDAL.OGRFeatureH}}",
    "page": "Home",
    "title": "GDAL.getgeometryref",
    "category": "method",
    "text": "OGR_F_GetGeometryRef(OGRFeatureH hFeat) -> OGRGeometryH\n\nFetch an handle to feature geometry.\n\nParameters\n\nhFeat: handle to the feature to get geometry from.\n\nReturns\n\nan handle to internal feature geometry. This object should not be modified.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getgeometryref-Tuple{Ref{GDAL.OGRGeometryH},Integer}",
    "page": "Home",
    "title": "GDAL.getgeometryref",
    "category": "method",
    "text": "OGR_G_GetGeometryRef(OGRGeometryH hGeom,\n                     int iSubGeom) -> OGRGeometryH\n\nFetch geometry from a geometry container.\n\nParameters\n\nhGeom: handle to the geometry container from which to get a geometry from.\niSubGeom: the index of the geometry to fetch, between 0 and getNumGeometries() - 1.\n\nReturns\n\nhandle to the requested geometry.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getgeometrytype-Tuple{Ref{GDAL.OGRGeometryH}}",
    "page": "Home",
    "title": "GDAL.getgeometrytype",
    "category": "method",
    "text": "OGR_G_GetGeometryType(OGRGeometryH hGeom) -> OGRwkbGeometryType\n\nFetch geometry type.\n\nParameters\n\nhGeom: handle on the geometry to get type from.\n\nReturns\n\nthe geometry type code.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getgeomfieldcount-Tuple{Ref{GDAL.OGRFeatureDefnH}}",
    "page": "Home",
    "title": "GDAL.getgeomfieldcount",
    "category": "method",
    "text": "OGR_FD_GetGeomFieldCount(OGRFeatureDefnH hDefn) -> int\n\nFetch number of geometry fields on the passed feature definition.\n\nParameters\n\nhDefn: handle to the feature definition to get the fields count from.\n\nReturns\n\ncount of geometry fields.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getgeomfieldcount-Tuple{Ref{GDAL.OGRFeatureH}}",
    "page": "Home",
    "title": "GDAL.getgeomfieldcount",
    "category": "method",
    "text": "OGR_F_GetGeomFieldCount(OGRFeatureH hFeat) -> int\n\nFetch number of geometry fields on this feature This will always be the same as the geometry field count for the OGRFeatureDefn.\n\nParameters\n\nhFeat: handle to the feature to get the geometry fields count from.\n\nReturns\n\ncount of geometry fields.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getgeomfielddefn-Tuple{Ref{GDAL.OGRFeatureDefnH},Integer}",
    "page": "Home",
    "title": "GDAL.getgeomfielddefn",
    "category": "method",
    "text": "OGR_FD_GetGeomFieldDefn(OGRFeatureDefnH hDefn,\n                        int iGeomField) -> OGRGeomFieldDefnH\n\nFetch geometry field definition of the passed feature definition.\n\nParameters\n\nhDefn: handle to the feature definition to get the field definition from.\niGeomField: the geometry field to fetch, between 0 and GetGeomFieldCount() - 1.\n\nReturns\n\nan handle to an internal field definition object or NULL if invalid index. This object should not be modified or freed by the application.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getgeomfielddefnref-Tuple{Ref{GDAL.OGRFeatureH},Integer}",
    "page": "Home",
    "title": "GDAL.getgeomfielddefnref",
    "category": "method",
    "text": "OGR_F_GetGeomFieldDefnRef(OGRFeatureH hFeat,\n                          int i) -> OGRGeomFieldDefnH\n\nFetch definition for this geometry field.\n\nParameters\n\nhFeat: handle to the feature on which the field is found.\ni: the field to fetch, from 0 to GetGeomFieldCount()-1.\n\nReturns\n\nan handle to the field definition (from the OGRFeatureDefn). This is an internal reference, and should not be deleted or modified.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getgeomfieldindex-Tuple{Ref{GDAL.OGRFeatureDefnH},Any}",
    "page": "Home",
    "title": "GDAL.getgeomfieldindex",
    "category": "method",
    "text": "OGR_FD_GetGeomFieldIndex(OGRFeatureDefnH hDefn,\n                         const char * pszGeomFieldName) -> int\n\nFind geometry field by name.\n\nParameters\n\nhDefn: handle to the feature definition to get field index from.\npszGeomFieldName: the geometry field name to search for.\n\nReturns\n\nthe geometry field index, or -1 if no match found.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getgeomfieldindex-Tuple{Ref{GDAL.OGRFeatureH},Any}",
    "page": "Home",
    "title": "GDAL.getgeomfieldindex",
    "category": "method",
    "text": "OGR_F_GetGeomFieldIndex(OGRFeatureH hFeat,\n                        const char * pszName) -> int\n\nFetch the geometry field index given geometry field name.\n\nParameters\n\nhFeat: handle to the feature on which the geometry field is found.\npszName: the name of the geometry field to search for.\n\nReturns\n\nthe geometry field index, or -1 if no matching geometry field is found.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getgeomfieldref-Tuple{Ref{GDAL.OGRFeatureH},Integer}",
    "page": "Home",
    "title": "GDAL.getgeomfieldref",
    "category": "method",
    "text": "OGR_F_GetGeomFieldRef(OGRFeatureH hFeat,\n                      int iField) -> OGRGeometryH\n\nFetch an handle to feature geometry.\n\nParameters\n\nhFeat: handle to the feature to get geometry from.\niField: geometry field to get.\n\nReturns\n\nan handle to internal feature geometry. This object should not be modified.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getgeomtype-Tuple{Ref{GDAL.OGRFeatureDefnH}}",
    "page": "Home",
    "title": "GDAL.getgeomtype",
    "category": "method",
    "text": "OGR_FD_GetGeomType(OGRFeatureDefnH hDefn) -> OGRwkbGeometryType\n\nFetch the geometry base type of the passed feature definition.\n\nParameters\n\nhDefn: handle to the feature definition to get the geometry type from.\n\nReturns\n\nthe base type for all geometry related to this definition.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getgeomtype-Tuple{Ref{GDAL.OGRLayerH}}",
    "page": "Home",
    "title": "GDAL.getgeomtype",
    "category": "method",
    "text": "OGR_L_GetGeomType(OGRLayerH) -> OGRwkbGeometryType\n\nReturn the layer geometry type.\n\nParameters\n\nhLayer: handle to the layer.\n\nReturns\n\nthe geometry type\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getgeotransform-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALDatasetH,Any}",
    "page": "Home",
    "title": "GDAL.getgeotransform",
    "category": "method",
    "text": "GDALGetGeoTransform(GDALDatasetH hDS,\n                    double * padfTransform) -> CPLErr\n\nFetch the affine transformation coefficients.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getinternalhandle-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALDatasetH,Any}",
    "page": "Home",
    "title": "GDAL.getinternalhandle",
    "category": "method",
    "text": "GDALGetInternalHandle(GDALDatasetH hDS,\n                      const char * pszRequest) -> void *\n\nFetch a format specific internally meaningful handle.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getinvflattening-Tuple{Ref{GDAL.OGRSpatialReferenceH},Any}",
    "page": "Home",
    "title": "GDAL.getinvflattening",
    "category": "method",
    "text": "OSRGetInvFlattening(OGRSpatialReferenceH hSRS,\n                    OGRErr * pnErr) -> double\n\nGet spheroid inverse flattening.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getjpeg2000structure-Tuple{Any,Any}",
    "page": "Home",
    "title": "GDAL.getjpeg2000structure",
    "category": "method",
    "text": "GDALGetJPEG2000Structure(const char * pszFilename,\n                         char ** papszOptions) -> CPLXMLNode *\n\nDump the structure of a JPEG2000 file as a XML tree.\n\nParameters\n\npszFilename: filename.\npapszOptions: NULL terminated list of options, or NULL. Allowed options are BINARYCONTENT=YES, TEXTCONTENT=YES, CODESTREAM=YES, ALL=YES.\n\nReturns\n\nXML tree (to be freed with CPLDestroyXMLNode()) or NULL in case of error\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getjustify-Tuple{Ref{GDAL.OGRFieldDefnH}}",
    "page": "Home",
    "title": "GDAL.getjustify",
    "category": "method",
    "text": "OGR_Fld_GetJustify(OGRFieldDefnH hDefn) -> OGRJustification\n\nGet the justification for this field.\n\nParameters\n\nhDefn: handle to the field definition to get justification from.\n\nReturns\n\nthe justification.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getlasterrormsg-Tuple{}",
    "page": "Home",
    "title": "GDAL.getlasterrormsg",
    "category": "method",
    "text": "CPLGetLastErrorMsg() -> const char *\n\nGet the last error message.\n\nReturns\n\nthe last error message, or NULL if there is no posted error message.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getlasterrorno-Tuple{}",
    "page": "Home",
    "title": "GDAL.getlasterrorno",
    "category": "method",
    "text": "CPLGetLastErrorNo() -> CPLErrorNum\n\nFetch the last error number.\n\nReturns\n\nthe error number of the last error to occur, or CPLE_None (0) if there are no posted errors.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getlasterrortype-Tuple{}",
    "page": "Home",
    "title": "GDAL.getlasterrortype",
    "category": "method",
    "text": "CPLGetLastErrorType() -> CPLErr\n\nFetch the last error type.\n\nReturns\n\nthe error type of the last error to occur, or CE_None (0) if there are no posted errors.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getlaststylename-Tuple{Ref{GDAL.OGRStyleTableH}}",
    "page": "Home",
    "title": "GDAL.getlaststylename",
    "category": "method",
    "text": "OGR_STBL_GetLastStyleName(OGRStyleTableH hStyleTable) -> const char *\n\nGet the style name of the last style string fetched with OGRSTBLGetNextStyle.\n\nParameters\n\nhStyleTable: handle to the style table.\n\nReturns\n\nthe Name of the last style string or NULL on error.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getlayer-Tuple{Ref{GDAL.OGRDataSourceH},Integer}",
    "page": "Home",
    "title": "GDAL.getlayer",
    "category": "method",
    "text": "OGR_DS_GetLayer(OGRDataSourceH,\n                int) -> OGRLayerH\n\nFetch a layer by index.\n\nParameters\n\nhDS: handle to the data source from which to get the layer.\niLayer: a layer number between 0 and OGRDSGetLayerCount()-1.\n\nReturns\n\nan handle to the layer, or NULL if iLayer is out of range or an error occurs.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getlayerbyname-Tuple{Ref{GDAL.OGRDataSourceH},Any}",
    "page": "Home",
    "title": "GDAL.getlayerbyname",
    "category": "method",
    "text": "OGR_DS_GetLayerByName(OGRDataSourceH,\n                      const char *) -> OGRLayerH\n\nFetch a layer by name.\n\nParameters\n\nhDS: handle to the data source from which to get the layer.\npszLayerName: Layer the layer name of the layer to fetch.\n\nReturns\n\nan handle to the layer, or NULL if the layer is not found or an error occurs.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getlayercount-Tuple{Ref{GDAL.OGRDataSourceH}}",
    "page": "Home",
    "title": "GDAL.getlayercount",
    "category": "method",
    "text": "OGR_DS_GetLayerCount(OGRDataSourceH) -> int\n\nGet the number of layers in this data source.\n\nParameters\n\nhDS: handle to the data source from which to get the number of layers.\n\nReturns\n\nlayer count.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getlayerdefn-Tuple{Ref{GDAL.OGRLayerH}}",
    "page": "Home",
    "title": "GDAL.getlayerdefn",
    "category": "method",
    "text": "OGR_L_GetLayerDefn(OGRLayerH) -> OGRFeatureDefnH\n\nFetch the schema information for this layer.\n\nParameters\n\nhLayer: handle to the layer to get the schema information.\n\nReturns\n\nan handle to the feature definition.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getlineargeometry-Tuple{Ref{GDAL.OGRGeometryH},Real,Any}",
    "page": "Home",
    "title": "GDAL.getlineargeometry",
    "category": "method",
    "text": "OGR_G_GetLinearGeometry(OGRGeometryH hGeom,\n                        double dfMaxAngleStepSizeDegrees,\n                        char ** papszOptions) -> OGRGeometryH\n\nReturn, possibly approximate, linear version of this geometry.\n\nParameters\n\nhGeom: the geometry to operate on.\ndfMaxAngleStepSizeDegrees: the largest step in degrees along the arc, zero to use the default setting.\npapszOptions: options as a null-terminated list of strings or NULL. See OGRGeometryFactory::curveToLineString() for valid options.\n\nReturns\n\na new geometry.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getlinearunits-Tuple{Ref{GDAL.OGRSpatialReferenceH},Any}",
    "page": "Home",
    "title": "GDAL.getlinearunits",
    "category": "method",
    "text": "OSRGetLinearUnits(OGRSpatialReferenceH hSRS,\n                  char ** ppszName) -> double\n\nFetch linear projection units.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getm-Tuple{Ref{GDAL.OGRGeometryH},Integer}",
    "page": "Home",
    "title": "GDAL.getm",
    "category": "method",
    "text": "OGR_G_GetM(OGRGeometryH hGeom,\n           int i) -> double\n\nFetch the m coordinate of a point from a geometry.\n\nParameters\n\nhGeom: handle to the geometry from which to get the M coordinate.\ni: point to get the M coordinate.\n\nReturns\n\nthe M coordinate of this point.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getmaskband-Tuple{Ref{GDAL.GDALRasterBandH}}",
    "page": "Home",
    "title": "GDAL.getmaskband",
    "category": "method",
    "text": "GDALGetMaskBand(GDALRasterBandH hBand) -> GDALRasterBandH\n\nReturn the mask band associated with the band.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getmaskflags-Tuple{Ref{GDAL.GDALRasterBandH}}",
    "page": "Home",
    "title": "GDAL.getmaskflags",
    "category": "method",
    "text": "GDALGetMaskFlags(GDALRasterBandH hBand) -> int\n\nReturn the status flags of the mask band associated with the band.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getmetadata-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALMajorObjectH,Any}",
    "page": "Home",
    "title": "GDAL.getmetadata",
    "category": "method",
    "text": "GDALGetMetadata(GDALMajorObjectH hObject,\n                const char * pszDomain) -> char **\n\nFetch metadata.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getmetadatadomainlist-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALMajorObjectH}",
    "page": "Home",
    "title": "GDAL.getmetadatadomainlist",
    "category": "method",
    "text": "GDALGetMetadataDomainList(GDALMajorObjectH hObject) -> char **\n\nFetch list of metadata domains.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getmetadataitem-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALMajorObjectH,Any,Any}",
    "page": "Home",
    "title": "GDAL.getmetadataitem",
    "category": "method",
    "text": "GDALGetMetadataItem(GDALMajorObjectH hObject,\n                    const char * pszName,\n                    const char * pszDomain) -> const char *\n\nFetch single metadata item.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getname-Tuple{Ref{GDAL.OGRDataSourceH}}",
    "page": "Home",
    "title": "GDAL.getname",
    "category": "method",
    "text": "OGR_DS_GetName(OGRDataSourceH) -> const char *\n\nReturns the name of the data source.\n\nParameters\n\nhDS: handle to the data source to get the name from.\n\nReturns\n\npointer to an internal name string which should not be modified or freed by the caller.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getname-Tuple{Ref{GDAL.OGRFeatureDefnH}}",
    "page": "Home",
    "title": "GDAL.getname",
    "category": "method",
    "text": "OGR_FD_GetName(OGRFeatureDefnH hDefn) -> const char *\n\nGet name of the OGRFeatureDefn passed as an argument.\n\nParameters\n\nhDefn: handle to the feature definition to get the name from.\n\nReturns\n\nthe name. This name is internal and should not be modified, or freed.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getname-Tuple{Ref{GDAL.OGRLayerH}}",
    "page": "Home",
    "title": "GDAL.getname",
    "category": "method",
    "text": "OGR_L_GetName(OGRLayerH) -> const char *\n\nReturn the layer name.\n\nParameters\n\nhLayer: handle to the layer.\n\nReturns\n\nthe layer name (must not been freed)\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getname-Tuple{Ref{GDAL.OGRSFDriverH}}",
    "page": "Home",
    "title": "GDAL.getname",
    "category": "method",
    "text": "OGR_Dr_GetName(OGRSFDriverH) -> const char *\n\nFetch name of driver (file format).\n\nParameters\n\nhDriver: handle to the driver to get the name from.\n\nReturns\n\ndriver name. This is an internal string and should not be modified or freed.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getnameref-Tuple{Ref{GDAL.OGRFieldDefnH}}",
    "page": "Home",
    "title": "GDAL.getnameref",
    "category": "method",
    "text": "OGR_Fld_GetNameRef(OGRFieldDefnH hDefn) -> const char *\n\nFetch name of this field.\n\nParameters\n\nhDefn: handle to the field definition.\n\nReturns\n\nthe name of the field definition.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getnameref-Tuple{Ref{GDAL.OGRGeomFieldDefnH}}",
    "page": "Home",
    "title": "GDAL.getnameref",
    "category": "method",
    "text": "OGR_GFld_GetNameRef(OGRGeomFieldDefnH hDefn) -> const char *\n\nFetch name of this field.\n\nParameters\n\nhDefn: handle to the geometry field definition.\n\nReturns\n\nthe name of the geometry field definition.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getnativedata-Tuple{Ref{GDAL.OGRFeatureH}}",
    "page": "Home",
    "title": "GDAL.getnativedata",
    "category": "method",
    "text": "OGR_F_GetNativeData(OGRFeatureH hFeat) -> const char *\n\nReturns the native data for the feature.\n\nParameters\n\nhFeat: handle to the feature.\n\nReturns\n\na string with the native data, or NULL if there is none.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getnativemediatype-Tuple{Ref{GDAL.OGRFeatureH}}",
    "page": "Home",
    "title": "GDAL.getnativemediatype",
    "category": "method",
    "text": "OGR_F_GetNativeMediaType(OGRFeatureH hFeat) -> const char *\n\nReturns the native media type for the feature.\n\nParameters\n\nhFeat: handle to the feature.\n\nReturns\n\na string with the native media type, or NULL if there is none.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getnextfeature-Tuple{Ref{GDAL.OGRLayerH}}",
    "page": "Home",
    "title": "GDAL.getnextfeature",
    "category": "method",
    "text": "OGR_L_GetNextFeature(OGRLayerH) -> OGRFeatureH\n\nFetch the next available feature from this layer.\n\nParameters\n\nhLayer: handle to the layer from which feature are read.\n\nReturns\n\nan handle to a feature, or NULL if no more features are available.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getnextstyle-Tuple{Ref{GDAL.OGRStyleTableH}}",
    "page": "Home",
    "title": "GDAL.getnextstyle",
    "category": "method",
    "text": "OGR_STBL_GetNextStyle(OGRStyleTableH hStyleTable) -> const char *\n\nGet the next style string from the table.\n\nParameters\n\nhStyleTable: handle to the style table.\n\nReturns\n\nthe next style string or NULL on error.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getnoncomplexdatatype-Tuple{GDAL.GDALDataType}",
    "page": "Home",
    "title": "GDAL.getnoncomplexdatatype",
    "category": "method",
    "text": "GDALGetNonComplexDataType(GDALDataType) -> GDALDataType\n\nReturn the base data type for the specified input.\n\nParameters\n\neDataType: type, such as GDT_CFloat32.\n\nReturns\n\nGDAL data type.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getnonlineargeometriesenabledflag-Tuple{}",
    "page": "Home",
    "title": "GDAL.getnonlineargeometriesenabledflag",
    "category": "method",
    "text": "OGRGetNonLinearGeometriesEnabledFlag(void) -> int\n\nGet flag to enable/disable returning non-linear geometries in the C API.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getnormprojparm-Tuple{Ref{GDAL.OGRSpatialReferenceH},Any,Real,Any}",
    "page": "Home",
    "title": "GDAL.getnormprojparm",
    "category": "method",
    "text": "OSRGetNormProjParm(OGRSpatialReferenceH hSRS,\n                   const char * pszName,\n                   double dfDefaultValue,\n                   OGRErr * pnErr) -> double\n\nThis function is the same as OGRSpatialReference::\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getopendatasets-Tuple{Any,Any}",
    "page": "Home",
    "title": "GDAL.getopendatasets",
    "category": "method",
    "text": "GDALGetOpenDatasets(GDALDatasetH ** ppahDSList,\n                    int * pnCount) -> void\n\nFetch all open GDAL dataset handles.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getoverview-Tuple{Ref{GDAL.GDALRasterBandH},Integer}",
    "page": "Home",
    "title": "GDAL.getoverview",
    "category": "method",
    "text": "GDALGetOverview(GDALRasterBandH hBand,\n                int i) -> GDALRasterBandH\n\nFetch overview raster band object.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getoverviewcount-Tuple{Ref{GDAL.GDALRasterBandH}}",
    "page": "Home",
    "title": "GDAL.getoverviewcount",
    "category": "method",
    "text": "GDALGetOverviewCount(GDALRasterBandH hBand) -> int\n\nReturn the number of overview layers available.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getpaletteinterpretation-Tuple{Ref{GDAL.GDALColorTableH}}",
    "page": "Home",
    "title": "GDAL.getpaletteinterpretation",
    "category": "method",
    "text": "GDALGetPaletteInterpretation(GDALColorTableH hTable) -> GDALPaletteInterp\n\nFetch palette interpretation.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getpaletteinterpretationname-Tuple{GDAL.GDALPaletteInterp}",
    "page": "Home",
    "title": "GDAL.getpaletteinterpretationname",
    "category": "method",
    "text": "GDALGetPaletteInterpretationName(GDALPaletteInterp) -> const char *\n\nGet name of palette interpretation.\n\nParameters\n\neInterp: palette interpretation to get name of.\n\nReturns\n\nstring corresponding to palette interpretation.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getparamdbl-Tuple{Ref{GDAL.OGRStyleToolH},Integer,Any}",
    "page": "Home",
    "title": "GDAL.getparamdbl",
    "category": "method",
    "text": "OGR_ST_GetParamDbl(OGRStyleToolH hST,\n                   int eParam,\n                   int * bValueIsNull) -> double\n\nGet Style Tool parameter value as a double.\n\nParameters\n\nhST: handle to the style tool.\neParam: the parameter id from the enumeration corresponding to the type of this style tool (one of the OGRSTPenParam, OGRSTBrushParam, OGRSTSymbolParam or OGRSTLabelParam enumerations)\nbValueIsNull: pointer to an integer that will be set to TRUE or FALSE to indicate whether the parameter value is NULL.\n\nReturns\n\nthe parameter value as double and sets bValueIsNull.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getparamnum-Tuple{Ref{GDAL.OGRStyleToolH},Integer,Any}",
    "page": "Home",
    "title": "GDAL.getparamnum",
    "category": "method",
    "text": "OGR_ST_GetParamNum(OGRStyleToolH hST,\n                   int eParam,\n                   int * bValueIsNull) -> int\n\nGet Style Tool parameter value as an integer.\n\nParameters\n\nhST: handle to the style tool.\neParam: the parameter id from the enumeration corresponding to the type of this style tool (one of the OGRSTPenParam, OGRSTBrushParam, OGRSTSymbolParam or OGRSTLabelParam enumerations)\nbValueIsNull: pointer to an integer that will be set to TRUE or FALSE to indicate whether the parameter value is NULL.\n\nReturns\n\nthe parameter value as integer and sets bValueIsNull.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getparamstr-Tuple{Ref{GDAL.OGRStyleToolH},Integer,Any}",
    "page": "Home",
    "title": "GDAL.getparamstr",
    "category": "method",
    "text": "OGR_ST_GetParamStr(OGRStyleToolH hST,\n                   int eParam,\n                   int * bValueIsNull) -> const char *\n\nGet Style Tool parameter value as string.\n\nParameters\n\nhST: handle to the style tool.\neParam: the parameter id from the enumeration corresponding to the type of this style tool (one of the OGRSTPenParam, OGRSTBrushParam, OGRSTSymbolParam or OGRSTLabelParam enumerations)\nbValueIsNull: pointer to an integer that will be set to TRUE or FALSE to indicate whether the parameter value is NULL.\n\nReturns\n\nthe parameter value as string and sets bValueIsNull.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getpart-Tuple{Ref{GDAL.OGRStyleMgrH},Integer,Any}",
    "page": "Home",
    "title": "GDAL.getpart",
    "category": "method",
    "text": "OGR_SM_GetPart(OGRStyleMgrH hSM,\n               int nPartId,\n               const char * pszStyleString) -> OGRStyleToolH\n\nFetch a part (style tool) from the current style.\n\nParameters\n\nhSM: handle to the style manager.\nnPartId: the part number (0-based index).\npszStyleString: (optional) the style string on which to operate. If NULL then the current style string stored in the style manager is used.\n\nReturns\n\nOGRStyleToolH of the requested part (style tools) or NULL on error.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getpartcount-Tuple{Ref{GDAL.OGRStyleMgrH},Any}",
    "page": "Home",
    "title": "GDAL.getpartcount",
    "category": "method",
    "text": "OGR_SM_GetPartCount(OGRStyleMgrH hSM,\n                    const char * pszStyleString) -> int\n\nGet the number of parts in a style.\n\nParameters\n\nhSM: handle to the style manager.\npszStyleString: (optional) the style string on which to operate. If NULL then the current style string stored in the style manager is used.\n\nReturns\n\nthe number of parts (style tools) in the style.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getpoint-Tuple{Ref{GDAL.OGRGeometryH},Integer,Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.getpoint",
    "category": "method",
    "text": "OGR_G_GetPoint(OGRGeometryH hGeom,\n               int i,\n               double * pdfX,\n               double * pdfY,\n               double * pdfZ) -> void\n\nFetch a point in line string or a point geometry.\n\nParameters\n\nhGeom: handle to the geometry from which to get the coordinates.\ni: the vertex to fetch, from 0 to getNumPoints()-1, zero for a point.\npdfX: value of x coordinate.\npdfY: value of y coordinate.\npdfZ: value of z coordinate.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getpointcount-Tuple{Ref{GDAL.OGRGeometryH}}",
    "page": "Home",
    "title": "GDAL.getpointcount",
    "category": "method",
    "text": "OGR_G_GetPointCount(OGRGeometryH hGeom) -> int\n\nFetch number of points from a geometry.\n\nParameters\n\nhGeom: handle to the geometry from which to get the number of points.\n\nReturns\n\nthe number of points.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getpoints-Tuple{Ref{GDAL.OGRGeometryH},Any,Integer,Any,Integer,Any,Integer}",
    "page": "Home",
    "title": "GDAL.getpoints",
    "category": "method",
    "text": "OGR_G_GetPoints(OGRGeometryH hGeom,\n                void * pabyX,\n                int nXStride,\n                void * pabyY,\n                int nYStride,\n                void * pabyZ,\n                int nZStride) -> int\n\nReturns all points of line string.\n\nParameters\n\nhGeom: handle to the geometry from which to get the coordinates.\npabyX: a buffer of at least (sizeof(double) * nXStride * nPointCount) bytes, may be NULL.\nnXStride: the number of bytes between 2 elements of pabyX.\npabyY: a buffer of at least (sizeof(double) * nYStride * nPointCount) bytes, may be NULL.\nnYStride: the number of bytes between 2 elements of pabyY.\npabyZ: a buffer of at last size (sizeof(double) * nZStride * nPointCount) bytes, may be NULL.\nnZStride: the number of bytes between 2 elements of pabyZ.\n\nReturns\n\nthe number of points\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getpointszm-Tuple{Ref{GDAL.OGRGeometryH},Any,Integer,Any,Integer,Any,Integer,Any,Integer}",
    "page": "Home",
    "title": "GDAL.getpointszm",
    "category": "method",
    "text": "OGR_G_GetPointsZM(OGRGeometryH hGeom,\n                  void * pabyX,\n                  int nXStride,\n                  void * pabyY,\n                  int nYStride,\n                  void * pabyZ,\n                  int nZStride,\n                  void * pabyM,\n                  int nMStride) -> int\n\nReturns all points of line string.\n\nParameters\n\nhGeom: handle to the geometry from which to get the coordinates.\npabyX: a buffer of at least (sizeof(double) * nXStride * nPointCount) bytes, may be NULL.\nnXStride: the number of bytes between 2 elements of pabyX.\npabyY: a buffer of at least (sizeof(double) * nYStride * nPointCount) bytes, may be NULL.\nnYStride: the number of bytes between 2 elements of pabyY.\npabyZ: a buffer of at last size (sizeof(double) * nZStride * nPointCount) bytes, may be NULL.\nnZStride: the number of bytes between 2 elements of pabyZ.\npabyM: a buffer of at last size (sizeof(double) * nMStride * nPointCount) bytes, may be NULL.\nnMStride: the number of bytes between 2 elements of pabyM.\n\nReturns\n\nthe number of points\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getpointzm-Tuple{Ref{GDAL.OGRGeometryH},Integer,Any,Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.getpointzm",
    "category": "method",
    "text": "OGR_G_GetPointZM(OGRGeometryH hGeom,\n                 int i,\n                 double * pdfX,\n                 double * pdfY,\n                 double * pdfZ,\n                 double * pdfM) -> void\n\nFetch a point in line string or a point geometry.\n\nParameters\n\nhGeom: handle to the geometry from which to get the coordinates.\ni: the vertex to fetch, from 0 to getNumPoints()-1, zero for a point.\npdfX: value of x coordinate.\npdfY: value of y coordinate.\npdfZ: value of z coordinate.\npdfM: value of m coordinate.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getprecision-Tuple{Ref{GDAL.OGRFieldDefnH}}",
    "page": "Home",
    "title": "GDAL.getprecision",
    "category": "method",
    "text": "OGR_Fld_GetPrecision(OGRFieldDefnH hDefn) -> int\n\nGet the formatting precision for this field.\n\nParameters\n\nhDefn: handle to the field definition to get precision from.\n\nReturns\n\nthe precision.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getprimemeridian-Tuple{Ref{GDAL.OGRSpatialReferenceH},Any}",
    "page": "Home",
    "title": "GDAL.getprimemeridian",
    "category": "method",
    "text": "OSRGetPrimeMeridian(OGRSpatialReferenceH hSRS,\n                    char ** ppszName) -> double\n\nFetch prime meridian info.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getprojectionref-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALDatasetH}",
    "page": "Home",
    "title": "GDAL.getprojectionref",
    "category": "method",
    "text": "GDALGetProjectionRef(GDALDatasetH hDS) -> const char *\n\nFetch the projection definition string for this dataset.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getprojparm-Tuple{Ref{GDAL.OGRSpatialReferenceH},Any,Real,Any}",
    "page": "Home",
    "title": "GDAL.getprojparm",
    "category": "method",
    "text": "OSRGetProjParm(OGRSpatialReferenceH hSRS,\n               const char * pszName,\n               double dfDefaultValue,\n               OGRErr * pnErr) -> double\n\nFetch a projection parameter value.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getrandomrastersample-Tuple{Ref{GDAL.GDALRasterBandH},Integer,Any}",
    "page": "Home",
    "title": "GDAL.getrandomrastersample",
    "category": "method",
    "text": "GDALGetRandomRasterSample(GDALRasterBandH,\n                          int,\n                          float *) -> int\n\nUndocumented.\n\nParameters\n\nhBand: undocumented.\nnSamples: undocumented.\npafSampleBuf: undocumented.\n\nReturns\n\nundocumented\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getrasteraccess-Tuple{Ref{GDAL.GDALRasterBandH}}",
    "page": "Home",
    "title": "GDAL.getrasteraccess",
    "category": "method",
    "text": "GDALGetRasterAccess(GDALRasterBandH hBand) -> GDALAccess\n\nFind out if we have update permission for this band.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getrasterband-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALDatasetH,Integer}",
    "page": "Home",
    "title": "GDAL.getrasterband",
    "category": "method",
    "text": "GDALGetRasterBand(GDALDatasetH hDS,\n                  int nBandId) -> GDALRasterBandH\n\nFetch a band object for a dataset.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getrasterbandxsize-Tuple{Ref{GDAL.GDALRasterBandH}}",
    "page": "Home",
    "title": "GDAL.getrasterbandxsize",
    "category": "method",
    "text": "GDALGetRasterBandXSize(GDALRasterBandH hBand) -> int\n\nFetch XSize of raster.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getrasterbandysize-Tuple{Ref{GDAL.GDALRasterBandH}}",
    "page": "Home",
    "title": "GDAL.getrasterbandysize",
    "category": "method",
    "text": "GDALGetRasterBandYSize(GDALRasterBandH hBand) -> int\n\nFetch YSize of raster.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getrastercategorynames-Tuple{Ref{GDAL.GDALRasterBandH}}",
    "page": "Home",
    "title": "GDAL.getrastercategorynames",
    "category": "method",
    "text": "GDALGetRasterCategoryNames(GDALRasterBandH hBand) -> char **\n\nFetch the list of category names for this raster.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getrastercolorinterpretation-Tuple{Ref{GDAL.GDALRasterBandH}}",
    "page": "Home",
    "title": "GDAL.getrastercolorinterpretation",
    "category": "method",
    "text": "GDALGetRasterColorInterpretation(GDALRasterBandH hBand) -> GDALColorInterp\n\nHow should this band be interpreted as color?\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getrastercolortable-Tuple{Ref{GDAL.GDALRasterBandH}}",
    "page": "Home",
    "title": "GDAL.getrastercolortable",
    "category": "method",
    "text": "GDALGetRasterColorTable(GDALRasterBandH hBand) -> GDALColorTableH\n\nFetch the color table associated with band.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getrastercount-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALDatasetH}",
    "page": "Home",
    "title": "GDAL.getrastercount",
    "category": "method",
    "text": "GDALGetRasterCount(GDALDatasetH hDS) -> int\n\nFetch the number of raster bands on this dataset.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getrasterdatatype-Tuple{Ref{GDAL.GDALRasterBandH}}",
    "page": "Home",
    "title": "GDAL.getrasterdatatype",
    "category": "method",
    "text": "GDALGetRasterDataType(GDALRasterBandH hBand) -> GDALDataType\n\nFetch the pixel data type for this band.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getrasterhistogram-Tuple{Ref{GDAL.GDALRasterBandH},Real,Real,Integer,Any,Integer,Integer,Any,Any}",
    "page": "Home",
    "title": "GDAL.getrasterhistogram",
    "category": "method",
    "text": "GDALGetRasterHistogram(GDALRasterBandH hBand,\n                       double dfMin,\n                       double dfMax,\n                       int nBuckets,\n                       int * panHistogram,\n                       int bIncludeOutOfRange,\n                       int bApproxOK,\n                       GDALProgressFunc pfnProgress,\n                       void * pProgressData) -> CPLErr\n\nCompute raster histogram.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getrasterhistogramex-Tuple{Ref{GDAL.GDALRasterBandH},Real,Real,Integer,Any,Integer,Integer,Any,Any}",
    "page": "Home",
    "title": "GDAL.getrasterhistogramex",
    "category": "method",
    "text": "GDALGetRasterHistogramEx(GDALRasterBandH hBand,\n                         double dfMin,\n                         double dfMax,\n                         int nBuckets,\n                         GUIntBig * panHistogram,\n                         int bIncludeOutOfRange,\n                         int bApproxOK,\n                         GDALProgressFunc pfnProgress,\n                         void * pProgressData) -> CPLErr\n\nCompute raster histogram.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getrastermaximum-Tuple{Ref{GDAL.GDALRasterBandH},Any}",
    "page": "Home",
    "title": "GDAL.getrastermaximum",
    "category": "method",
    "text": "GDALGetRasterMaximum(GDALRasterBandH hBand,\n                     int * pbSuccess) -> double\n\nFetch the maximum value for this band.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getrasterminimum-Tuple{Ref{GDAL.GDALRasterBandH},Any}",
    "page": "Home",
    "title": "GDAL.getrasterminimum",
    "category": "method",
    "text": "GDALGetRasterMinimum(GDALRasterBandH hBand,\n                     int * pbSuccess) -> double\n\nFetch the minimum value for this band.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getrasternodatavalue-Tuple{Ref{GDAL.GDALRasterBandH},Any}",
    "page": "Home",
    "title": "GDAL.getrasternodatavalue",
    "category": "method",
    "text": "GDALGetRasterNoDataValue(GDALRasterBandH hBand,\n                         int * pbSuccess) -> double\n\nFetch the no data value for this band.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getrasteroffset-Tuple{Ref{GDAL.GDALRasterBandH},Any}",
    "page": "Home",
    "title": "GDAL.getrasteroffset",
    "category": "method",
    "text": "GDALGetRasterOffset(GDALRasterBandH hBand,\n                    int * pbSuccess) -> double\n\nFetch the raster value offset.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getrastersampleoverview-Tuple{Ref{GDAL.GDALRasterBandH},Integer}",
    "page": "Home",
    "title": "GDAL.getrastersampleoverview",
    "category": "method",
    "text": "GDALGetRasterSampleOverview(GDALRasterBandH hBand,\n                            int nDesiredSamples) -> GDALRasterBandH\n\nFetch best sampling overview.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getrastersampleoverviewex-Tuple{Ref{GDAL.GDALRasterBandH},UInt64}",
    "page": "Home",
    "title": "GDAL.getrastersampleoverviewex",
    "category": "method",
    "text": "GDALGetRasterSampleOverviewEx(GDALRasterBandH hBand,\n                              GUIntBig nDesiredSamples) -> GDALRasterBandH\n\nFetch best sampling overview.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getrasterscale-Tuple{Ref{GDAL.GDALRasterBandH},Any}",
    "page": "Home",
    "title": "GDAL.getrasterscale",
    "category": "method",
    "text": "GDALGetRasterScale(GDALRasterBandH hBand,\n                   int * pbSuccess) -> double\n\nFetch the raster value scale.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getrasterstatistics-Tuple{Ref{GDAL.GDALRasterBandH},Integer,Integer,Any,Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.getrasterstatistics",
    "category": "method",
    "text": "GDALGetRasterStatistics(GDALRasterBandH hBand,\n                        int bApproxOK,\n                        int bForce,\n                        double * pdfMin,\n                        double * pdfMax,\n                        double * pdfMean,\n                        double * pdfStdDev) -> CPLErr\n\nFetch image statistics.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getrasterunittype-Tuple{Ref{GDAL.GDALRasterBandH}}",
    "page": "Home",
    "title": "GDAL.getrasterunittype",
    "category": "method",
    "text": "GDALGetRasterUnitType(GDALRasterBandH hBand) -> const char *\n\nReturn raster unit type.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getrasterxsize-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALDatasetH}",
    "page": "Home",
    "title": "GDAL.getrasterxsize",
    "category": "method",
    "text": "GDALGetRasterXSize(GDALDatasetH hDataset) -> int\n\nFetch raster width in pixels.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getrasterysize-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALDatasetH}",
    "page": "Home",
    "title": "GDAL.getrasterysize",
    "category": "method",
    "text": "GDALGetRasterYSize(GDALDatasetH hDataset) -> int\n\nFetch raster height in pixels.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getrawfieldref-Tuple{Ref{GDAL.OGRFeatureH},Integer}",
    "page": "Home",
    "title": "GDAL.getrawfieldref",
    "category": "method",
    "text": "OGR_F_GetRawFieldRef(OGRFeatureH hFeat,\n                     int iField) -> OGRField *\n\nFetch an handle to the internal field value given the index.\n\nParameters\n\nhFeat: handle to the feature on which field is found.\niField: the field to fetch, from 0 to GetFieldCount()-1.\n\nReturns\n\nthe returned handle is to an internal data structure, and should not be freed, or modified.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getrefcount-Tuple{Ref{GDAL.OGRDataSourceH}}",
    "page": "Home",
    "title": "GDAL.getrefcount",
    "category": "method",
    "text": "OGR_DS_GetRefCount(OGRDataSourceH hDataSource) -> int\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getrefcount-Tuple{Ref{GDAL.OGRLayerH}}",
    "page": "Home",
    "title": "GDAL.getrefcount",
    "category": "method",
    "text": "OGR_L_GetRefCount(OGRLayerH hLayer) -> int\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getreferencecount-Tuple{Ref{GDAL.OGRFeatureDefnH}}",
    "page": "Home",
    "title": "GDAL.getreferencecount",
    "category": "method",
    "text": "OGR_FD_GetReferenceCount(OGRFeatureDefnH hDefn) -> int\n\nFetch current reference count.\n\nParameters\n\nhDefn: handle to the feature definition on witch OGRFeature are based on.\n\nReturns\n\nthe current reference count.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getrgbfromstring-Tuple{Ref{GDAL.OGRStyleToolH},Any,Any,Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.getrgbfromstring",
    "category": "method",
    "text": "OGR_ST_GetRGBFromString(OGRStyleToolH hST,\n                        const char * pszColor,\n                        int * pnRed,\n                        int * pnGreen,\n                        int * pnBlue,\n                        int * pnAlpha) -> int\n\nReturn the r,g,b,a components of a color encoded in #RRGGBB[AA] format.\n\nParameters\n\nhST: handle to the style tool.\npszColor: the color to parse\npnRed: pointer to an int in which the red value will be returned\npnGreen: pointer to an int in which the green value will be returned\npnBlue: pointer to an int in which the blue value will be returned\npnAlpha: pointer to an int in which the (optional) alpha value will be returned\n\nReturns\n\nTRUE if the color could be successfully parsed, or FALSE in case of errors.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getsemimajor-Tuple{Ref{GDAL.OGRSpatialReferenceH},Any}",
    "page": "Home",
    "title": "GDAL.getsemimajor",
    "category": "method",
    "text": "OSRGetSemiMajor(OGRSpatialReferenceH hSRS,\n                OGRErr * pnErr) -> double\n\nGet spheroid semi major axis.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getsemiminor-Tuple{Ref{GDAL.OGRSpatialReferenceH},Any}",
    "page": "Home",
    "title": "GDAL.getsemiminor",
    "category": "method",
    "text": "OSRGetSemiMinor(OGRSpatialReferenceH hSRS,\n                OGRErr * pnErr) -> double\n\nGet spheroid semi minor axis.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getspatialfilter-Tuple{Ref{GDAL.OGRLayerH}}",
    "page": "Home",
    "title": "GDAL.getspatialfilter",
    "category": "method",
    "text": "OGR_L_GetSpatialFilter(OGRLayerH) -> OGRGeometryH\n\nThis function returns the current spatial filter for this layer.\n\nParameters\n\nhLayer: handle to the layer to get the spatial filter from.\n\nReturns\n\nan handle to the spatial filter geometry.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getspatialref-Tuple{Ref{GDAL.OGRGeomFieldDefnH}}",
    "page": "Home",
    "title": "GDAL.getspatialref",
    "category": "method",
    "text": "OGR_GFld_GetSpatialRef(OGRGeomFieldDefnH hDefn) -> OGRSpatialReferenceH\n\nFetch spatial reference system of this field.\n\nParameters\n\nhDefn: handle to the geometry field definition\n\nReturns\n\nfield spatial reference system.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getspatialref-Tuple{Ref{GDAL.OGRLayerH}}",
    "page": "Home",
    "title": "GDAL.getspatialref",
    "category": "method",
    "text": "OGR_L_GetSpatialRef(OGRLayerH) -> OGRSpatialReferenceH\n\nFetch the spatial reference system for this layer.\n\nParameters\n\nhLayer: handle to the layer to get the spatial reference from.\n\nReturns\n\nspatial reference, or NULL if there isn\'t one.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getspatialreference-Tuple{Ref{GDAL.OGRGeometryH}}",
    "page": "Home",
    "title": "GDAL.getspatialreference",
    "category": "method",
    "text": "OGR_G_GetSpatialReference(OGRGeometryH hGeom) -> OGRSpatialReferenceH\n\nReturns spatial reference system for geometry.\n\nParameters\n\nhGeom: handle on the geometry to get spatial reference from.\n\nReturns\n\na reference to the spatial reference geometry.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getstylestring-Tuple{Ref{GDAL.OGRFeatureH}}",
    "page": "Home",
    "title": "GDAL.getstylestring",
    "category": "method",
    "text": "OGR_F_GetStyleString(OGRFeatureH hFeat) -> const char *\n\nFetch style string for this feature.\n\nParameters\n\nhFeat: handle to the feature to get the style from.\n\nReturns\n\na reference to a representation in string format, or NULL if there isn\'t one.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getstylestring-Tuple{Ref{GDAL.OGRStyleToolH}}",
    "page": "Home",
    "title": "GDAL.getstylestring",
    "category": "method",
    "text": "OGR_ST_GetStyleString(OGRStyleToolH hST) -> const char *\n\nGet the style string for this Style Tool.\n\nParameters\n\nhST: handle to the style tool.\n\nReturns\n\nthe style string for this style tool or \"\" if the hST is invalid.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getstyletable-Tuple{Ref{GDAL.OGRDataSourceH}}",
    "page": "Home",
    "title": "GDAL.getstyletable",
    "category": "method",
    "text": "OGR_DS_GetStyleTable(OGRDataSourceH hDS) -> OGRStyleTableH\n\nGet style table.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getstyletable-Tuple{Ref{GDAL.OGRFeatureH}}",
    "page": "Home",
    "title": "GDAL.getstyletable",
    "category": "method",
    "text": "OGR_F_GetStyleTable(OGRFeatureH hFeat) -> OGRStyleTableH\n\nReturn style table.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getstyletable-Tuple{Ref{GDAL.OGRLayerH}}",
    "page": "Home",
    "title": "GDAL.getstyletable",
    "category": "method",
    "text": "OGR_L_GetStyleTable(OGRLayerH hLayer) -> OGRStyleTableH\n\nGet style table.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getsubtype-Tuple{Ref{GDAL.OGRFieldDefnH}}",
    "page": "Home",
    "title": "GDAL.getsubtype",
    "category": "method",
    "text": "OGR_Fld_GetSubType(OGRFieldDefnH hDefn) -> OGRFieldSubType\n\nFetch subtype of this field.\n\nParameters\n\nhDefn: handle to the field definition to get subtype from.\n\nReturns\n\nfield subtype.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getsummaryrefcount-Tuple{Ref{GDAL.OGRDataSourceH}}",
    "page": "Home",
    "title": "GDAL.getsummaryrefcount",
    "category": "method",
    "text": "OGR_DS_GetSummaryRefCount(OGRDataSourceH hDataSource) -> int\n\n\n\n\n\n"
},

{
    "location": "#GDAL.gettargetlinearunits-Tuple{Ref{GDAL.OGRSpatialReferenceH},Any,Any}",
    "page": "Home",
    "title": "GDAL.gettargetlinearunits",
    "category": "method",
    "text": "OSRGetTargetLinearUnits(OGRSpatialReferenceH hSRS,\n                        const char * pszTargetKey,\n                        char ** ppszName) -> double\n\nFetch linear projection units.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.gettowgs84-Tuple{Ref{GDAL.OGRSpatialReferenceH},Any,Integer}",
    "page": "Home",
    "title": "GDAL.gettowgs84",
    "category": "method",
    "text": "OSRGetTOWGS84(OGRSpatialReferenceH hSRS,\n              double * padfCoeff,\n              int nCoeffCount) -> OGRErr\n\nFetch TOWGS84 parameters, if available.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.gettype-Tuple{Ref{GDAL.OGRFieldDefnH}}",
    "page": "Home",
    "title": "GDAL.gettype",
    "category": "method",
    "text": "OGR_Fld_GetType(OGRFieldDefnH hDefn) -> OGRFieldType\n\nFetch type of this field.\n\nParameters\n\nhDefn: handle to the field definition to get type from.\n\nReturns\n\nfield type.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.gettype-Tuple{Ref{GDAL.OGRGeomFieldDefnH}}",
    "page": "Home",
    "title": "GDAL.gettype",
    "category": "method",
    "text": "OGR_GFld_GetType(OGRGeomFieldDefnH hDefn) -> OGRwkbGeometryType\n\nFetch geometry type of this field.\n\nParameters\n\nhDefn: handle to the geometry field definition to get type from.\n\nReturns\n\nfield geometry type.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.gettype-Tuple{Ref{GDAL.OGRStyleToolH}}",
    "page": "Home",
    "title": "GDAL.gettype",
    "category": "method",
    "text": "OGR_ST_GetType(OGRStyleToolH hST) -> OGRSTClassId\n\nDetermine type of Style Tool.\n\nParameters\n\nhST: handle to the style tool.\n\nReturns\n\nthe style tool type, one of OGRSTCPen (1), OGRSTCBrush (2), OGRSTCSymbol (3) or OGRSTCLabel (4). Returns OGRSTCNone (0) if the OGRStyleToolH is invalid.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getunit-Tuple{Ref{GDAL.OGRStyleToolH}}",
    "page": "Home",
    "title": "GDAL.getunit",
    "category": "method",
    "text": "OGR_ST_GetUnit(OGRStyleToolH hST) -> OGRSTUnitId\n\nGet Style Tool units.\n\nParameters\n\nhST: handle to the style tool.\n\nReturns\n\nthe style tool units.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getutmzone-Tuple{Ref{GDAL.OGRSpatialReferenceH},Any}",
    "page": "Home",
    "title": "GDAL.getutmzone",
    "category": "method",
    "text": "OSRGetUTMZone(OGRSpatialReferenceH hSRS,\n              int * pbNorth) -> int\n\nGet utm zone information.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getvirtualmemauto-Tuple{Ref{GDAL.GDALRasterBandH},GDAL.GDALRWFlag,Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.getvirtualmemauto",
    "category": "method",
    "text": "GDALGetVirtualMemAuto(GDALRasterBandH hBand,\n                      GDALRWFlag eRWFlag,\n                      int * pnPixelSpace,\n                      GIntBig * pnLineSpace,\n                      char ** papszOptions) -> CPLVirtualMem *\n\nCreate a CPLVirtualMem object from a GDAL raster band object.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getwidth-Tuple{Ref{GDAL.OGRFieldDefnH}}",
    "page": "Home",
    "title": "GDAL.getwidth",
    "category": "method",
    "text": "OGR_Fld_GetWidth(OGRFieldDefnH hDefn) -> int\n\nGet the formatting width for this field.\n\nParameters\n\nhDefn: handle to the field definition to get width from.\n\nReturns\n\nthe width, zero means no specified width.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getx-Tuple{Ref{GDAL.OGRGeometryH},Integer}",
    "page": "Home",
    "title": "GDAL.getx",
    "category": "method",
    "text": "OGR_G_GetX(OGRGeometryH hGeom,\n           int i) -> double\n\nFetch the x coordinate of a point from a geometry.\n\nParameters\n\nhGeom: handle to the geometry from which to get the x coordinate.\ni: point to get the x coordinate.\n\nReturns\n\nthe X coordinate of this point.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.gety-Tuple{Ref{GDAL.OGRGeometryH},Integer}",
    "page": "Home",
    "title": "GDAL.gety",
    "category": "method",
    "text": "OGR_G_GetY(OGRGeometryH hGeom,\n           int i) -> double\n\nFetch the x coordinate of a point from a geometry.\n\nParameters\n\nhGeom: handle to the geometry from which to get the y coordinate.\ni: point to get the Y coordinate.\n\nReturns\n\nthe Y coordinate of this point.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.getz-Tuple{Ref{GDAL.OGRGeometryH},Integer}",
    "page": "Home",
    "title": "GDAL.getz",
    "category": "method",
    "text": "OGR_G_GetZ(OGRGeometryH hGeom,\n           int i) -> double\n\nFetch the z coordinate of a point from a geometry.\n\nParameters\n\nhGeom: handle to the geometry from which to get the Z coordinate.\ni: point to get the Z coordinate.\n\nReturns\n\nthe Z coordinate of this point.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.gfld_create-Tuple{Any,GDAL.OGRwkbGeometryType}",
    "page": "Home",
    "title": "GDAL.gfld_create",
    "category": "method",
    "text": "OGR_GFld_Create(const char * pszName,\n                OGRwkbGeometryType eType) -> OGRGeomFieldDefnH\n\nCreate a new field geometry definition.\n\nParameters\n\npszName: the name of the new field definition.\neType: the type of the new field definition.\n\nReturns\n\nhandle to the new field definition.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.grid-Tuple{Any,Ref{#s1236} where #s1236<:GDAL.GDALDatasetH,Any,Any}",
    "page": "Home",
    "title": "GDAL.grid",
    "category": "method",
    "text": "GDALGrid(const char * pszDest,\n         GDALDatasetH hSrcDataset,\n         const GDALGridOptions * psOptionsIn,\n         int * pbUsageError) -> GDALDatasetH\n\nCreate raster from the scattered data.\n\nParameters\n\npszDest: the destination dataset path.\nhSrcDataset: the source dataset handle.\npsOptionsIn: the options struct returned by GDALGridOptionsNew() or NULL.\npbUsageError: the pointer to int variable to determine any usage error has occurred or NULL.\n\nReturns\n\nthe output dataset (new dataset that must be closed using GDALClose()) or NULL in case of error.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.gridcontextcreate-Tuple{GDAL.GDALGridAlgorithm,Any,UInt32,Any,Any,Any,Integer}",
    "page": "Home",
    "title": "GDAL.gridcontextcreate",
    "category": "method",
    "text": "GDALGridContextCreate(GDALGridAlgorithm eAlgorithm,\n                      const void * poOptions,\n                      GUInt32 nPoints,\n                      const double * padfX,\n                      const double * padfY,\n                      const double * padfZ,\n                      int bCallerWillKeepPointArraysAlive) -> GDALGridContext *\n\nCreates a context to do regular gridding from the scattered data.\n\nParameters\n\neAlgorithm: Gridding method.\npoOptions: Options to control chosen gridding method.\nnPoints: Number of elements in input arrays.\npadfX: Input array of X coordinates.\npadfY: Input array of Y coordinates.\npadfZ: Input array of Z values.\nbCallerWillKeepPointArraysAlive: Whether the provided padfX, padfY, padfZ arrays will still be \"alive\" during the calls to GDALGridContextProcess(). Setting to TRUE prevent them from being duplicated in the context. If unsure, set to FALSE.\n\nReturns\n\nthe context (to be freed with GDALGridContextFree()) or NULL in case or error.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.gridcontextfree-Tuple{Any}",
    "page": "Home",
    "title": "GDAL.gridcontextfree",
    "category": "method",
    "text": "GDALGridContextFree(GDALGridContext * psContext) -> void\n\nFree a context used created by GDALGridContextCreate()\n\nParameters\n\npsContext: the context.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.gridcontextprocess-Tuple{Any,Real,Real,Real,Real,UInt32,UInt32,GDAL.GDALDataType,Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.gridcontextprocess",
    "category": "method",
    "text": "GDALGridContextProcess(GDALGridContext * psContext,\n                       double dfXMin,\n                       double dfXMax,\n                       double dfYMin,\n                       double dfYMax,\n                       GUInt32 nXSize,\n                       GUInt32 nYSize,\n                       GDALDataType eType,\n                       void * pData,\n                       GDALProgressFunc pfnProgress,\n                       void * pProgressArg) -> CPLErr\n\nDo the gridding of a window of a raster.\n\nParameters\n\npsContext: Gridding context.\ndfXMin: Lowest X border of output grid.\ndfXMax: Highest X border of output grid.\ndfYMin: Lowest Y border of output grid.\ndfYMax: Highest Y border of output grid.\nnXSize: Number of columns in output grid.\nnYSize: Number of rows in output grid.\neType: Data type of output array.\npData: Pointer to array where the computed grid will be stored.\npfnProgress: a GDALProgressFunc() compatible callback function for reporting progress or NULL.\npProgressArg: argument to be passed to pfnProgress. May be NULL.\n\nReturns\n\nCENone on success or CEFailure if something goes wrong.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.gridcreate-Tuple{GDAL.GDALGridAlgorithm,Any,UInt32,Any,Any,Any,Real,Real,Real,Real,UInt32,UInt32,GDAL.GDALDataType,Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.gridcreate",
    "category": "method",
    "text": "GDALGridCreate(GDALGridAlgorithm eAlgorithm,\n               const void * poOptions,\n               GUInt32 nPoints,\n               const double * padfX,\n               const double * padfY,\n               const double * padfZ,\n               double dfXMin,\n               double dfXMax,\n               double dfYMin,\n               double dfYMax,\n               GUInt32 nXSize,\n               GUInt32 nYSize,\n               GDALDataType eType,\n               void * pData,\n               GDALProgressFunc pfnProgress,\n               void * pProgressArg) -> CPLErr\n\nCreate regular grid from the scattered data.\n\nParameters\n\neAlgorithm: Gridding method.\npoOptions: Options to control chosen gridding method.\nnPoints: Number of elements in input arrays.\npadfX: Input array of X coordinates.\npadfY: Input array of Y coordinates.\npadfZ: Input array of Z values.\ndfXMin: Lowest X border of output grid.\ndfXMax: Highest X border of output grid.\ndfYMin: Lowest Y border of output grid.\ndfYMax: Highest Y border of output grid.\nnXSize: Number of columns in output grid.\nnYSize: Number of rows in output grid.\neType: Data type of output array.\npData: Pointer to array where the computed grid will be stored.\npfnProgress: a GDALProgressFunc() compatible callback function for reporting progress or NULL.\npProgressArg: argument to be passed to pfnProgress. May be NULL.\n\nReturns\n\nCENone on success or CEFailure if something goes wrong.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.gridoptionsfree-Tuple{Any}",
    "page": "Home",
    "title": "GDAL.gridoptionsfree",
    "category": "method",
    "text": "GDALGridOptionsFree(GDALGridOptions * psOptions) -> void\n\nFrees the GDALGridOptions struct.\n\nParameters\n\npsOptions: the options struct for GDALGrid().\n\n\n\n\n\n"
},

{
    "location": "#GDAL.gridoptionsnew-Tuple{Any,Any}",
    "page": "Home",
    "title": "GDAL.gridoptionsnew",
    "category": "method",
    "text": "GDALGridOptionsNew(char ** papszArgv,\n                   GDALGridOptionsForBinary * psOptionsForBinary) -> GDALGridOptions *\n\nAllocates a GDALGridOptions struct.\n\nParameters\n\npapszArgv: NULL terminated list of options (potentially including filename and open options too), or NULL. The accepted options are the ones of the gdal_translate utility.\npsOptionsForBinary: (output) may be NULL (and should generally be NULL), otherwise (gdaltranslatebin.cpp use case) must be allocated with GDALGridOptionsForBinaryNew() prior to this function. Will be filled with potentially present filename, open options,...\n\nReturns\n\npointer to the allocated GDALGridOptions struct. Must be freed with GDALGridOptionsFree().\n\n\n\n\n\n"
},

{
    "location": "#GDAL.gridoptionssetprogress-Tuple{Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.gridoptionssetprogress",
    "category": "method",
    "text": "GDALGridOptionsSetProgress(GDALGridOptions * psOptions,\n                           GDALProgressFunc pfnProgress,\n                           void * pProgressData) -> void\n\nSet a progress function.\n\nParameters\n\npsOptions: the options struct for GDALGrid().\npfnProgress: the progress callback.\npProgressData: the user data for the progress callback.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.hasarbitraryoverviews-Tuple{Ref{GDAL.GDALRasterBandH}}",
    "page": "Home",
    "title": "GDAL.hasarbitraryoverviews",
    "category": "method",
    "text": "GDALHasArbitraryOverviews(GDALRasterBandH hBand) -> int\n\nCheck for arbitrary overviews.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.hascurvegeometry-Tuple{Ref{GDAL.OGRGeometryH},Integer}",
    "page": "Home",
    "title": "GDAL.hascurvegeometry",
    "category": "method",
    "text": "OGR_G_HasCurveGeometry(OGRGeometryH hGeom,\n                       int bLookForNonLinear) -> int\n\nReturns if this geometry is or has curve geometry.\n\nParameters\n\nhGeom: the geometry to operate on.\nbLookForNonLinear: set it to TRUE to check if the geometry is or contains a CIRCULARSTRING.\n\nReturns\n\nTRUE if this geometry is or has curve geometry.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.hastriangulation-Tuple{}",
    "page": "Home",
    "title": "GDAL.hastriangulation",
    "category": "method",
    "text": "GDALHasTriangulation() -> int\n\nReturns if GDAL is built with Delaunay triangulation support.\n\nReturns\n\nTRUE if GDAL is built with Delaunay triangulation support.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.identifydriver-Tuple{Any,Any}",
    "page": "Home",
    "title": "GDAL.identifydriver",
    "category": "method",
    "text": "GDALIdentifyDriver(const char * pszFilename,\n                   char ** papszFileList) -> GDALDriverH\n\nIdentify the driver that can open a raster file.\n\nParameters\n\npszFilename: the name of the file to access. In the case of exotic drivers this may not refer to a physical file, but instead contain information for the driver on how to access a dataset.\npapszFileList: an array of strings, whose last element is the NULL pointer. These strings are filenames that are auxiliary to the main filename. The passed value may be NULL.\n\nReturns\n\nA GDALDriverH handle or NULL on failure. For C++ applications this handle can be cast to a GDALDriver *.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.identifydriverex-Tuple{Any,Integer,Any,Any}",
    "page": "Home",
    "title": "GDAL.identifydriverex",
    "category": "method",
    "text": "GDALIdentifyDriverEx(const char * pszFilename,\n                     unsigned int nIdentifyFlags,\n                     const char *const * papszAllowedDrivers,\n                     const char *const * papszFileList) -> GDALDriverH\n\nIdentify the driver that can open a raster file.\n\nParameters\n\npszFilename: the name of the file to access. In the case of exotic drivers this may not refer to a physical file, but instead contain information for the driver on how to access a dataset.\nnIdentifyFlags: a combination of GDALOFRASTER for raster drivers or GDALOFVECTOR for vector drivers. If none of the value is specified, both kinds are implied.\npapszAllowedDrivers: NULL to consider all candidate drivers, or a NULL terminated list of strings with the driver short names that must be considered.\npapszFileList: an array of strings, whose last element is the NULL pointer. These strings are filenames that are auxiliary to the main filename. The passed value may be NULL.\n\nReturns\n\nA GDALDriverH handle or NULL on failure. For C++ applications this handle can be cast to a GDALDriver *.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.identity-Tuple{Ref{GDAL.OGRLayerH},Ref{GDAL.OGRLayerH},Ref{GDAL.OGRLayerH},Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.identity",
    "category": "method",
    "text": "OGR_L_Identity(OGRLayerH pLayerInput,\n               OGRLayerH pLayerMethod,\n               OGRLayerH pLayerResult,\n               char ** papszOptions,\n               GDALProgressFunc pfnProgress,\n               void * pProgressArg) -> OGRErr\n\nIdentify the features of this layer with the ones from the identity layer.\n\nParameters\n\npLayerInput: the input layer. Should not be NULL.\npLayerMethod: the method layer. Should not be NULL.\npLayerResult: the layer where the features resulting from the operation are inserted. Should not be NULL. See above the note about the schema.\npapszOptions: NULL terminated list of options (may be NULL).\npfnProgress: a GDALProgressFunc() compatible callback function for reporting progress or NULL.\npProgressArg: argument to be passed to pfnProgress. May be NULL.\n\nReturns\n\nan error code if there was an error or the execution was interrupted, OGRERR_NONE otherwise.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.importfromdict-Tuple{Ref{GDAL.OGRSpatialReferenceH},Any,Any}",
    "page": "Home",
    "title": "GDAL.importfromdict",
    "category": "method",
    "text": "OSRImportFromDict(OGRSpatialReferenceH,\n                  const char *,\n                  const char *) -> OGRErr\n\nRead SRS from WKT dictionary.\n\nParameters\n\nhSRS: spatial reference system handle.\npszDictFile: the name of the dictionary file to load.\npszCode: the code to lookup in the dictionary.\n\nReturns\n\nOGRERRNONE on success, or OGRERRSRSUNSUPPORTED if the code isn\'t found, and OGRERRSRS_FAILURE if something more dramatic goes wrong.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.importfromepsg-Tuple{Ref{GDAL.OGRSpatialReferenceH},Integer}",
    "page": "Home",
    "title": "GDAL.importfromepsg",
    "category": "method",
    "text": "OSRImportFromEPSG(OGRSpatialReferenceH hSRS,\n                  int nCode) -> OGRErr\n\nInitialize SRS based on EPSG GCS or PCS code.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.importfromepsga-Tuple{Ref{GDAL.OGRSpatialReferenceH},Integer}",
    "page": "Home",
    "title": "GDAL.importfromepsga",
    "category": "method",
    "text": "OSRImportFromEPSGA(OGRSpatialReferenceH hSRS,\n                   int nCode) -> OGRErr\n\nInitialize SRS based on EPSG GCS or PCS code.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.importfromerm-Tuple{Ref{GDAL.OGRSpatialReferenceH},Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.importfromerm",
    "category": "method",
    "text": "OSRImportFromERM(OGRSpatialReferenceH,\n                 const char *,\n                 const char *,\n                 const char *) -> OGRErr\n\nCreate OGR WKT from ERMapper projection definitions.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.importfromesri-Tuple{Ref{GDAL.OGRSpatialReferenceH},Any}",
    "page": "Home",
    "title": "GDAL.importfromesri",
    "category": "method",
    "text": "OSRImportFromESRI(OGRSpatialReferenceH,\n                  char **) -> OGRErr\n\nImport coordinate system from ESRI .prj format(s).\n\n\n\n\n\n"
},

{
    "location": "#GDAL.importfrommicoordsys-Tuple{Ref{GDAL.OGRSpatialReferenceH},Any}",
    "page": "Home",
    "title": "GDAL.importfrommicoordsys",
    "category": "method",
    "text": "OSRImportFromMICoordSys(OGRSpatialReferenceH hSRS,\n                        const char * pszCoordSys) -> OGRErr\n\nImport Mapinfo style CoordSys definition.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.importfromozi-Tuple{Ref{GDAL.OGRSpatialReferenceH},Any}",
    "page": "Home",
    "title": "GDAL.importfromozi",
    "category": "method",
    "text": "OSRImportFromOzi(OGRSpatialReferenceH,\n                 const char *const *) -> OGRErr\n\nImport coordinate system from OziExplorer projection definition.\n\nParameters\n\nhSRS: spatial reference object.\npapszLines: Map file lines. This is an array of strings containing the whole OziExplorer .MAP file. The array is terminated by a NULL pointer.\n\nReturns\n\nOGRERR_NONE on success or an error code in case of failure.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.importfrompanorama-Tuple{Ref{GDAL.OGRSpatialReferenceH},Int64,Int64,Int64,Any}",
    "page": "Home",
    "title": "GDAL.importfrompanorama",
    "category": "method",
    "text": "OSRImportFromPanorama(OGRSpatialReferenceH,\n                      long,\n                      long,\n                      long,\n                      double *) -> OGRErr\n\nImport coordinate system from \"Panorama\" GIS projection definition.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.importfrompci-Tuple{Ref{GDAL.OGRSpatialReferenceH},Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.importfrompci",
    "category": "method",
    "text": "OSRImportFromPCI(OGRSpatialReferenceH hSRS,\n                 const char *,\n                 const char *,\n                 double *) -> OGRErr\n\nImport coordinate system from PCI projection definition.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.importfromproj4-Tuple{Ref{GDAL.OGRSpatialReferenceH},Any}",
    "page": "Home",
    "title": "GDAL.importfromproj4",
    "category": "method",
    "text": "OSRImportFromProj4(OGRSpatialReferenceH,\n                   const char *) -> OGRErr\n\nImport PROJ.4 coordinate string.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.importfromurl-Tuple{Ref{GDAL.OGRSpatialReferenceH},Any}",
    "page": "Home",
    "title": "GDAL.importfromurl",
    "category": "method",
    "text": "OSRImportFromUrl(OGRSpatialReferenceH hSRS,\n                 const char * pszUrl) -> OGRErr\n\nSet spatial reference from a URL.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.importfromusgs-Tuple{Ref{GDAL.OGRSpatialReferenceH},Int64,Int64,Any,Int64}",
    "page": "Home",
    "title": "GDAL.importfromusgs",
    "category": "method",
    "text": "OSRImportFromUSGS(OGRSpatialReferenceH,\n                  long,\n                  long,\n                  double *,\n                  long) -> OGRErr\n\nImport coordinate system from USGS projection definition.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.importfromwkb-Tuple{Ref{GDAL.OGRGeometryH},Any,Integer}",
    "page": "Home",
    "title": "GDAL.importfromwkb",
    "category": "method",
    "text": "OGR_G_ImportFromWkb(OGRGeometryH hGeom,\n                    unsigned char * pabyData,\n                    int nSize) -> OGRErr\n\nAssign geometry from well known binary data.\n\nParameters\n\nhGeom: handle on the geometry to assign the well know binary data to.\npabyData: the binary input data.\nnSize: the size of pabyData in bytes, or zero if not known.\n\nReturns\n\nOGRERRNONE if all goes well, otherwise any of OGRERRNOTENOUGHDATA, OGRERRUNSUPPORTEDGEOMETRYTYPE, or OGRERRCORRUPT_DATA may be returned.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.importfromwkt-Tuple{Ref{GDAL.OGRGeometryH},Any}",
    "page": "Home",
    "title": "GDAL.importfromwkt",
    "category": "method",
    "text": "OGR_G_ImportFromWkt(OGRGeometryH hGeom,\n                    char ** ppszSrcText) -> OGRErr\n\nAssign geometry from well known text data.\n\nParameters\n\nhGeom: handle on the geometry to assign well know text data to.\nppszSrcText: pointer to a pointer to the source text. The pointer is updated to pointer after the consumed text.\n\nReturns\n\nOGRERRNONE if all goes well, otherwise any of OGRERRNOTENOUGHDATA, OGRERRUNSUPPORTEDGEOMETRYTYPE, or OGRERRCORRUPT_DATA may be returned.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.importfromwkt-Tuple{Ref{GDAL.OGRSpatialReferenceH},Any}",
    "page": "Home",
    "title": "GDAL.importfromwkt",
    "category": "method",
    "text": "OSRImportFromWkt(OGRSpatialReferenceH hSRS,\n                 char ** ppszInput) -> OGRErr\n\nImport from WKT string.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.importfromxml-Tuple{Ref{GDAL.OGRSpatialReferenceH},Any}",
    "page": "Home",
    "title": "GDAL.importfromxml",
    "category": "method",
    "text": "OSRImportFromXML(OGRSpatialReferenceH,\n                 const char *) -> OGRErr\n\nImport coordinate system from XML format (GML only currently).\n\n\n\n\n\n"
},

{
    "location": "#GDAL.info-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALDatasetH,Any}",
    "page": "Home",
    "title": "GDAL.info",
    "category": "method",
    "text": "GDALInfo(GDALDatasetH hDataset,\n         const GDALInfoOptions * psOptions) -> char *\n\nLists various information about a GDAL supported raster dataset.\n\nParameters\n\nhDataset: the dataset handle.\npsOptions: the options structure returned by GDALInfoOptionsNew() or NULL.\n\nReturns\n\nstring corresponding to the information about the raster dataset (must be freed with CPLFree()), or NULL in case of error.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.infooptionsfree-Tuple{Any}",
    "page": "Home",
    "title": "GDAL.infooptionsfree",
    "category": "method",
    "text": "GDALInfoOptionsFree(GDALInfoOptions * psOptions) -> void\n\nFrees the GDALInfoOptions struct.\n\nParameters\n\npsOptions: the options struct for GDALInfo().\n\n\n\n\n\n"
},

{
    "location": "#GDAL.infooptionsnew-Tuple{Any,Any}",
    "page": "Home",
    "title": "GDAL.infooptionsnew",
    "category": "method",
    "text": "GDALInfoOptionsNew(char ** papszArgv,\n                   GDALInfoOptionsForBinary * psOptionsForBinary) -> GDALInfoOptions *\n\nAllocates a GDALInfoOptions struct.\n\nParameters\n\npapszArgv: NULL terminated list of options (potentially including filename and open options too), or NULL. The accepted options are the ones of the gdalinfo utility.\npsOptionsForBinary: (output) may be NULL (and should generally be NULL), otherwise (gdalinfo_bin.cpp use case) must be allocated with GDALInfoOptionsForBinaryNew() prior to this function. Will be filled with potentially present filename, open options, subdataset number...\n\nReturns\n\npointer to the allocated GDALInfoOptions struct. Must be freed with GDALInfoOptionsFree().\n\n\n\n\n\n"
},

{
    "location": "#GDAL.initfromfeature-Tuple{Ref{GDAL.OGRStyleMgrH},Ref{GDAL.OGRFeatureH}}",
    "page": "Home",
    "title": "GDAL.initfromfeature",
    "category": "method",
    "text": "OGR_SM_InitFromFeature(OGRStyleMgrH hSM,\n                       OGRFeatureH hFeat) -> const char *\n\nInitialize style manager from the style string of a feature.\n\nParameters\n\nhSM: handle to the style manager.\nhFeat: handle to the new feature from which to read the style.\n\nReturns\n\na reference to the style string read from the feature, or NULL in case of error.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.initgcps-Tuple{Integer,Any}",
    "page": "Home",
    "title": "GDAL.initgcps",
    "category": "method",
    "text": "GDALInitGCPs(int,\n             GDAL_GCP *) -> void\n\nInitialize an array of GCPs.\n\nParameters\n\nnCount: number of GCPs in psGCP\npsGCP: array of GCPs of size nCount.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.initstylestring-Tuple{Ref{GDAL.OGRStyleMgrH},Any}",
    "page": "Home",
    "title": "GDAL.initstylestring",
    "category": "method",
    "text": "OGR_SM_InitStyleString(OGRStyleMgrH hSM,\n                       const char * pszStyleString) -> int\n\nInitialize style manager from the style string.\n\nParameters\n\nhSM: handle to the style manager.\npszStyleString: the style string to use (can be NULL).\n\nReturns\n\nTRUE on success, FALSE on errors.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.intersection-Tuple{Ref{GDAL.OGRGeometryH},Ref{GDAL.OGRGeometryH}}",
    "page": "Home",
    "title": "GDAL.intersection",
    "category": "method",
    "text": "OGR_G_Intersection(OGRGeometryH hThis,\n                   OGRGeometryH hOther) -> OGRGeometryH\n\nCompute intersection.\n\nParameters\n\nhThis: the geometry.\nhOther: the other geometry.\n\nReturns\n\na new geometry representing the intersection or NULL if there is no intersection or an error occurs.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.intersection-Tuple{Ref{GDAL.OGRLayerH},Ref{GDAL.OGRLayerH},Ref{GDAL.OGRLayerH},Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.intersection",
    "category": "method",
    "text": "OGR_L_Intersection(OGRLayerH pLayerInput,\n                   OGRLayerH pLayerMethod,\n                   OGRLayerH pLayerResult,\n                   char ** papszOptions,\n                   GDALProgressFunc pfnProgress,\n                   void * pProgressArg) -> OGRErr\n\nIntersection of two layers.\n\nParameters\n\npLayerInput: the input layer. Should not be NULL.\npLayerMethod: the method layer. Should not be NULL.\npLayerResult: the layer where the features resulting from the operation are inserted. Should not be NULL. See above the note about the schema.\npapszOptions: NULL terminated list of options (may be NULL).\npfnProgress: a GDALProgressFunc() compatible callback function for reporting progress or NULL.\npProgressArg: argument to be passed to pfnProgress. May be NULL.\n\nReturns\n\nan error code if there was an error or the execution was interrupted, OGRERR_NONE otherwise.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.intersects-Tuple{Ref{GDAL.OGRGeometryH},Ref{GDAL.OGRGeometryH}}",
    "page": "Home",
    "title": "GDAL.intersects",
    "category": "method",
    "text": "OGR_G_Intersects(OGRGeometryH hGeom,\n                 OGRGeometryH hOtherGeom) -> int\n\nDo these features intersect?\n\nParameters\n\nhGeom: handle on the first geometry.\nhOtherGeom: handle on the other geometry to test against.\n\nReturns\n\nTRUE if the geometries intersect, otherwise FALSE.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.invgeotransform-Tuple{Any,Any}",
    "page": "Home",
    "title": "GDAL.invgeotransform",
    "category": "method",
    "text": "GDALInvGeoTransform(double * gt_in,\n                    double * gt_out) -> int\n\nInvert Geotransform.\n\nParameters\n\ngt_in: Input geotransform (six doubles - unaltered).\ngt_out: Output geotransform (six doubles - updated).\n\nReturns\n\nTRUE on success or FALSE if the equation is uninvertable.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.is3d-Tuple{Ref{GDAL.OGRGeometryH}}",
    "page": "Home",
    "title": "GDAL.is3d",
    "category": "method",
    "text": "OGR_G_Is3D(OGRGeometryH hGeom) -> int\n\nSee whether this geometry has Z coordinates.\n\nParameters\n\nhGeom: handle on the geometry to check whether it has Z coordinates.\n\nReturns\n\nTRUE if the geometry has Z coordinates.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.iscompound-Tuple{Ref{GDAL.OGRSpatialReferenceH}}",
    "page": "Home",
    "title": "GDAL.iscompound",
    "category": "method",
    "text": "OSRIsCompound(OGRSpatialReferenceH hSRS) -> int\n\nCheck if the coordinate system is compound.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.isdefaultdriverspecific-Tuple{Ref{GDAL.OGRFieldDefnH}}",
    "page": "Home",
    "title": "GDAL.isdefaultdriverspecific",
    "category": "method",
    "text": "OGR_Fld_IsDefaultDriverSpecific(OGRFieldDefnH hDefn) -> int\n\nReturns whether the default value is driver specific.\n\nParameters\n\nhDefn: handle to the field definition\n\nReturns\n\nTRUE if the default value is driver specific.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.isfieldnull-Tuple{Ref{GDAL.OGRFeatureH},Integer}",
    "page": "Home",
    "title": "GDAL.isfieldnull",
    "category": "method",
    "text": "OGR_F_IsFieldNull(OGRFeatureH hFeat,\n                  int iField) -> int\n\nTest if a field is null.\n\nParameters\n\nhFeat: handle to the feature on which the field is.\niField: the field to test.\n\nReturns\n\nTRUE if the field is null, otherwise false.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.isfieldset-Tuple{Ref{GDAL.OGRFeatureH},Integer}",
    "page": "Home",
    "title": "GDAL.isfieldset",
    "category": "method",
    "text": "OGR_F_IsFieldSet(OGRFeatureH hFeat,\n                 int iField) -> int\n\nTest if a field has ever been assigned a value or not.\n\nParameters\n\nhFeat: handle to the feature on which the field is.\niField: the field to test.\n\nReturns\n\nTRUE if the field has been set, otherwise false.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.isfieldsetandnotnull-Tuple{Ref{GDAL.OGRFeatureH},Integer}",
    "page": "Home",
    "title": "GDAL.isfieldsetandnotnull",
    "category": "method",
    "text": "OGR_F_IsFieldSetAndNotNull(OGRFeatureH hFeat,\n                           int iField) -> int\n\nTest if a field is set and not null.\n\nParameters\n\nhFeat: handle to the feature on which the field is.\niField: the field to test.\n\nReturns\n\nTRUE if the field is set and not null, otherwise false.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.isgeocentric-Tuple{Ref{GDAL.OGRSpatialReferenceH}}",
    "page": "Home",
    "title": "GDAL.isgeocentric",
    "category": "method",
    "text": "OSRIsGeocentric(OGRSpatialReferenceH hSRS) -> int\n\nCheck if geocentric coordinate system.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.isgeographic-Tuple{Ref{GDAL.OGRSpatialReferenceH}}",
    "page": "Home",
    "title": "GDAL.isgeographic",
    "category": "method",
    "text": "OSRIsGeographic(OGRSpatialReferenceH hSRS) -> int\n\nCheck if geographic coordinate system.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.isgeometryignored-Tuple{Ref{GDAL.OGRFeatureDefnH}}",
    "page": "Home",
    "title": "GDAL.isgeometryignored",
    "category": "method",
    "text": "OGR_FD_IsGeometryIgnored(OGRFeatureDefnH hDefn) -> int\n\nDetermine whether the geometry can be omitted when fetching features.\n\nParameters\n\nhDefn: handle to the feature definition on witch OGRFeature are based on.\n\nReturns\n\nignore state\n\n\n\n\n\n"
},

{
    "location": "#GDAL.isignored-Tuple{Ref{GDAL.OGRFieldDefnH}}",
    "page": "Home",
    "title": "GDAL.isignored",
    "category": "method",
    "text": "OGR_Fld_IsIgnored(OGRFieldDefnH hDefn) -> int\n\nReturn whether this field should be omitted when fetching features.\n\nParameters\n\nhDefn: handle to the field definition\n\nReturns\n\nignore state\n\n\n\n\n\n"
},

{
    "location": "#GDAL.isignored-Tuple{Ref{GDAL.OGRGeomFieldDefnH}}",
    "page": "Home",
    "title": "GDAL.isignored",
    "category": "method",
    "text": "OGR_GFld_IsIgnored(OGRGeomFieldDefnH hDefn) -> int\n\nReturn whether this field should be omitted when fetching features.\n\nParameters\n\nhDefn: handle to the geometry field definition\n\nReturns\n\nignore state\n\n\n\n\n\n"
},

{
    "location": "#GDAL.islocal-Tuple{Ref{GDAL.OGRSpatialReferenceH}}",
    "page": "Home",
    "title": "GDAL.islocal",
    "category": "method",
    "text": "OSRIsLocal(OGRSpatialReferenceH hSRS) -> int\n\nCheck if local coordinate system.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.ismeasured-Tuple{Ref{GDAL.OGRGeometryH}}",
    "page": "Home",
    "title": "GDAL.ismeasured",
    "category": "method",
    "text": "OGR_G_IsMeasured(OGRGeometryH hGeom) -> int\n\nSee whether this geometry is measured.\n\nParameters\n\nhGeom: handle on the geometry to check whether it is measured.\n\nReturns\n\nTRUE if the geometry has M coordinates.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.isnullable-Tuple{Ref{GDAL.OGRFieldDefnH}}",
    "page": "Home",
    "title": "GDAL.isnullable",
    "category": "method",
    "text": "OGR_Fld_IsNullable(OGRFieldDefnH hDefn) -> int\n\nReturn whether this field can receive null values.\n\nParameters\n\nhDefn: handle to the field definition\n\nReturns\n\nTRUE if the field is authorized to be null.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.isnullable-Tuple{Ref{GDAL.OGRGeomFieldDefnH}}",
    "page": "Home",
    "title": "GDAL.isnullable",
    "category": "method",
    "text": "OGR_GFld_IsNullable(OGRGeomFieldDefnH hDefn) -> int\n\nReturn whether this geometry field can receive null values.\n\nParameters\n\nhDefn: handle to the field definition\n\nReturns\n\nTRUE if the field is authorized to be null.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.isprojected-Tuple{Ref{GDAL.OGRSpatialReferenceH}}",
    "page": "Home",
    "title": "GDAL.isprojected",
    "category": "method",
    "text": "OSRIsProjected(OGRSpatialReferenceH hSRS) -> int\n\nCheck if projected coordinate system.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.isring-Tuple{Ref{GDAL.OGRGeometryH}}",
    "page": "Home",
    "title": "GDAL.isring",
    "category": "method",
    "text": "OGR_G_IsRing(OGRGeometryH hGeom) -> int\n\nTest if the geometry is a ring.\n\nParameters\n\nhGeom: The Geometry to test.\n\nReturns\n\nTRUE if the geometry has no points, otherwise FALSE.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.issame-Tuple{Ref{GDAL.OGRFeatureDefnH},Ref{GDAL.OGRFeatureDefnH}}",
    "page": "Home",
    "title": "GDAL.issame",
    "category": "method",
    "text": "OGR_FD_IsSame(OGRFeatureDefnH hFDefn,\n              OGRFeatureDefnH hOtherFDefn) -> int\n\nTest if the feature definition is identical to the other one.\n\nParameters\n\nhFDefn: handle to the feature definition on witch OGRFeature are based on.\nhOtherFDefn: handle to the other feature definition to compare to.\n\nReturns\n\nTRUE if the feature definition is identical to the other one.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.issame-Tuple{Ref{GDAL.OGRSpatialReferenceH},Ref{GDAL.OGRSpatialReferenceH}}",
    "page": "Home",
    "title": "GDAL.issame",
    "category": "method",
    "text": "OSRIsSame(OGRSpatialReferenceH hSRS1,\n          OGRSpatialReferenceH hSRS2) -> int\n\nDo these two spatial references describe the same system ?\n\n\n\n\n\n"
},

{
    "location": "#GDAL.issamegeogcs-Tuple{Ref{GDAL.OGRSpatialReferenceH},Ref{GDAL.OGRSpatialReferenceH}}",
    "page": "Home",
    "title": "GDAL.issamegeogcs",
    "category": "method",
    "text": "OSRIsSameGeogCS(OGRSpatialReferenceH hSRS1,\n                OGRSpatialReferenceH hSRS2) -> int\n\nDo the GeogCS\'es match?\n\n\n\n\n\n"
},

{
    "location": "#GDAL.issamevertcs-Tuple{Ref{GDAL.OGRSpatialReferenceH},Ref{GDAL.OGRSpatialReferenceH}}",
    "page": "Home",
    "title": "GDAL.issamevertcs",
    "category": "method",
    "text": "OSRIsSameVertCS(OGRSpatialReferenceH hSRS1,\n                OGRSpatialReferenceH hSRS2) -> int\n\nDo the VertCS\'es match?\n\n\n\n\n\n"
},

{
    "location": "#GDAL.issimple-Tuple{Ref{GDAL.OGRGeometryH}}",
    "page": "Home",
    "title": "GDAL.issimple",
    "category": "method",
    "text": "OGR_G_IsSimple(OGRGeometryH hGeom) -> int\n\nReturns TRUE if the geometry is simple.\n\nParameters\n\nhGeom: The Geometry to test.\n\nReturns\n\nTRUE if object is simple, otherwise FALSE.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.isstyleignored-Tuple{Ref{GDAL.OGRFeatureDefnH}}",
    "page": "Home",
    "title": "GDAL.isstyleignored",
    "category": "method",
    "text": "OGR_FD_IsStyleIgnored(OGRFeatureDefnH hDefn) -> int\n\nDetermine whether the style can be omitted when fetching features.\n\nParameters\n\nhDefn: handle to the feature definition on which OGRFeature are based on.\n\nReturns\n\nignore state\n\n\n\n\n\n"
},

{
    "location": "#GDAL.isvalid-Tuple{Ref{GDAL.OGRGeometryH}}",
    "page": "Home",
    "title": "GDAL.isvalid",
    "category": "method",
    "text": "OGR_G_IsValid(OGRGeometryH hGeom) -> int\n\nTest if the geometry is valid.\n\nParameters\n\nhGeom: The Geometry to test.\n\nReturns\n\nTRUE if the geometry has no points, otherwise FALSE.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.isvertical-Tuple{Ref{GDAL.OGRSpatialReferenceH}}",
    "page": "Home",
    "title": "GDAL.isvertical",
    "category": "method",
    "text": "OSRIsVertical(OGRSpatialReferenceH hSRS) -> int\n\nCheck if vertical coordinate system.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.loadozimapfile-NTuple{5,Any}",
    "page": "Home",
    "title": "GDAL.loadozimapfile",
    "category": "method",
    "text": "GDALLoadOziMapFile(const char *,\n                   double *,\n                   char **,\n                   int *,\n                   GDAL_GCP **) -> int\n\nHelper function for translator implementer wanting support for OZI .map.\n\nParameters\n\npszFilename: filename of .tab file\npadfGeoTransform: output geotransform. Must hold 6 doubles.\nppszWKT: output pointer to a string that will be allocated with CPLMalloc().\npnGCPCount: output pointer to GCP count.\nppasGCPs: outputer pointer to an array of GCPs.\n\nReturns\n\nTRUE in case of success, FALSE otherwise.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.loadstyletable-Tuple{Ref{GDAL.OGRStyleTableH},Any}",
    "page": "Home",
    "title": "GDAL.loadstyletable",
    "category": "method",
    "text": "OGR_STBL_LoadStyleTable(OGRStyleTableH hStyleTable,\n                        const char * pszFilename) -> int\n\nLoad a style table from a file.\n\nParameters\n\nhStyleTable: handle to the style table.\npszFilename: the name of the file to load from.\n\nReturns\n\nTRUE on success, FALSE on error\n\n\n\n\n\n"
},

{
    "location": "#GDAL.loadtabfile-NTuple{5,Any}",
    "page": "Home",
    "title": "GDAL.loadtabfile",
    "category": "method",
    "text": "GDALLoadTabFile(const char *,\n                double *,\n                char **,\n                int *,\n                GDAL_GCP **) -> int\n\nHelper function for translator implementer wanting support for MapInfo .tab files.\n\nParameters\n\npszFilename: filename of .tab\npadfGeoTransform: output geotransform. Must hold 6 doubles.\nppszWKT: output pointer to a string that will be allocated with CPLMalloc().\npnGCPCount: output pointer to GCP count.\nppasGCPs: outputer pointer to an array of GCPs.\n\nReturns\n\nTRUE in case of success, FALSE otherwise.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.loadworldfile-Tuple{Any,Any}",
    "page": "Home",
    "title": "GDAL.loadworldfile",
    "category": "method",
    "text": "GDALLoadWorldFile(const char *,\n                  double *) -> int\n\nRead ESRI world file.\n\nParameters\n\npszFilename: the world file name.\npadfGeoTransform: the six double array into which the geotransformation should be placed.\n\nReturns\n\nTRUE on success or FALSE on failure.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.loggingerrorhandler-Tuple{GDAL.CPLErr,Int32,Any}",
    "page": "Home",
    "title": "GDAL.loggingerrorhandler",
    "category": "method",
    "text": "CPLLoggingErrorHandler(CPLErr eErrClass,\n                       CPLErrorNum nError,\n                       const char * pszErrorMsg) -> void\n\nError handler that logs into the file defined by the CPL_LOG configuration option, or stderr otherwise.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.morphfromesri-Tuple{Ref{GDAL.OGRSpatialReferenceH}}",
    "page": "Home",
    "title": "GDAL.morphfromesri",
    "category": "method",
    "text": "OSRMorphFromESRI(OGRSpatialReferenceH) -> OGRErr\n\nConvert in place from ESRI WKT format.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.morphtoesri-Tuple{Ref{GDAL.OGRSpatialReferenceH}}",
    "page": "Home",
    "title": "GDAL.morphtoesri",
    "category": "method",
    "text": "OSRMorphToESRI(OGRSpatialReferenceH) -> OGRErr\n\nConvert in place to ESRI WKT format.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.nearblack-Tuple{Any,Ref{#s1235} where #s1235<:GDAL.GDALDatasetH,Ref{#s1234} where #s1234<:GDAL.GDALDatasetH,Any,Any}",
    "page": "Home",
    "title": "GDAL.nearblack",
    "category": "method",
    "text": "GDALNearblack(const char * pszDest,\n              GDALDatasetH hDstDS,\n              GDALDatasetH hSrcDS,\n              const GDALNearblackOptions * psOptions,\n              int * pbUsageError) -> GDALDatasetH\n\nConvert nearly black/white borders to exact value.\n\nParameters\n\npszDest: the destination dataset path or NULL.\nhDstDS: the destination dataset or NULL. Might be equal to hSrcDataset.\nhSrcDataset: the source dataset handle.\npsOptionsIn: the options struct returned by GDALNearblackOptionsNew() or NULL.\npbUsageError: the pointer to int variable to determine any usage error has occurred or NULL.\n\nReturns\n\nthe output dataset (new dataset that must be closed using GDALClose(), or hDstDS is not NULL) or NULL in case of error.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.nearblackoptionsfree-Tuple{Any}",
    "page": "Home",
    "title": "GDAL.nearblackoptionsfree",
    "category": "method",
    "text": "GDALNearblackOptionsFree(GDALNearblackOptions * psOptions) -> void\n\nFrees the GDALNearblackOptions struct.\n\nParameters\n\npsOptions: the options struct for GDALNearblack().\n\n\n\n\n\n"
},

{
    "location": "#GDAL.nearblackoptionsnew-Tuple{Any,Any}",
    "page": "Home",
    "title": "GDAL.nearblackoptionsnew",
    "category": "method",
    "text": "GDALNearblackOptionsNew(char ** papszArgv,\n                        GDALNearblackOptionsForBinary * psOptionsForBinary) -> GDALNearblackOptions *\n\nAllocates a GDALNearblackOptions struct.\n\nParameters\n\npapszArgv: NULL terminated list of options (potentially including filename and open options too), or NULL. The accepted options are the ones of the nearblack utility.\npsOptionsForBinary: (output) may be NULL (and should generally be NULL), otherwise (gdaltranslatebin.cpp use case) must be allocated with GDALNearblackOptionsForBinaryNew() prior to this function. Will be filled with potentially present filename, open options,...\n\nReturns\n\npointer to the allocated GDALNearblackOptions struct. Must be freed with GDALNearblackOptionsFree().\n\n\n\n\n\n"
},

{
    "location": "#GDAL.nearblackoptionssetprogress-Tuple{Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.nearblackoptionssetprogress",
    "category": "method",
    "text": "GDALNearblackOptionsSetProgress(GDALNearblackOptions * psOptions,\n                                GDALProgressFunc pfnProgress,\n                                void * pProgressData) -> void\n\nSet a progress function.\n\nParameters\n\npsOptions: the options struct for GDALNearblack().\npfnProgress: the progress callback.\npProgressData: the user data for the progress callback.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.newspatialreference-Tuple{Any}",
    "page": "Home",
    "title": "GDAL.newspatialreference",
    "category": "method",
    "text": "OSRNewSpatialReference(const char * pszWKT) -> OGRSpatialReferenceH\n\nConstructor.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.octcleanupprojmutex-Tuple{}",
    "page": "Home",
    "title": "GDAL.octcleanupprojmutex",
    "category": "method",
    "text": "OCTCleanupProjMutex() -> void\n\n\n\n\n\n"
},

{
    "location": "#GDAL.octdestroycoordinatetransformation-Tuple{Ref{GDAL.OGRCoordinateTransformationH}}",
    "page": "Home",
    "title": "GDAL.octdestroycoordinatetransformation",
    "category": "method",
    "text": "OCTDestroyCoordinateTransformation(OGRCoordinateTransformationH hCT) -> void\n\nOGRCoordinateTransformation destructor.\n\nParameters\n\nhCT: the object to delete\n\n\n\n\n\n"
},

{
    "location": "#GDAL.octnewcoordinatetransformation-Tuple{Ref{GDAL.OGRSpatialReferenceH},Ref{GDAL.OGRSpatialReferenceH}}",
    "page": "Home",
    "title": "GDAL.octnewcoordinatetransformation",
    "category": "method",
    "text": "OCTNewCoordinateTransformation(OGRSpatialReferenceH hSourceSRS,\n                               OGRSpatialReferenceH hTargetSRS) -> OGRCoordinateTransformationH\n\nCreate transformation object.\n\nParameters\n\nhSourceSRS: source spatial reference system.\nhTargetSRS: target spatial reference system.\n\nReturns\n\nNULL on failure or a ready to use transformation object.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.octproj4normalize-Tuple{Any}",
    "page": "Home",
    "title": "GDAL.octproj4normalize",
    "category": "method",
    "text": "OCTProj4Normalize(const char * pszProj4Src) -> char *\n\n\n\n\n\n"
},

{
    "location": "#GDAL.octtransform-Tuple{Ref{GDAL.OGRCoordinateTransformationH},Integer,Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.octtransform",
    "category": "method",
    "text": "OCTTransform(OGRCoordinateTransformationH hTransform,\n             int nCount,\n             double * x,\n             double * y,\n             double * z) -> int\n\nTransform an array of points.\n\nParameters\n\nhTransform: Transformation object\nnCount: Number of points\nx: Array of nCount x values.\ny: Array of nCount y values.\nz: Array of nCount z values.\n\nReturns\n\nTRUE or FALSE\n\n\n\n\n\n"
},

{
    "location": "#GDAL.octtransformex-Tuple{Ref{GDAL.OGRCoordinateTransformationH},Integer,Any,Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.octtransformex",
    "category": "method",
    "text": "OCTTransformEx(OGRCoordinateTransformationH hTransform,\n               int nCount,\n               double * x,\n               double * y,\n               double * z,\n               int * pabSuccess) -> int\n\nTransform an array of points.\n\nParameters\n\nhTransform: Transformation object\nnCount: Number of points\nx: Array of nCount x values.\ny: Array of nCount y values.\nz: Array of nCount z values.\npabSuccess: Output array of nCount value that will be set to TRUE/FALSE\n\nReturns\n\nTRUE or FALSE\n\n\n\n\n\n"
},

{
    "location": "#GDAL.ogrgetdriver-Tuple{Integer}",
    "page": "Home",
    "title": "GDAL.ogrgetdriver",
    "category": "method",
    "text": "OGRGetDriver(int) -> OGRSFDriverH\n\nFetch the indicated driver.\n\nParameters\n\niDriver: the driver index, from 0 to GetDriverCount()-1.\n\nReturns\n\nhandle to the driver, or NULL if iDriver is out of range.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.ogrgetdriverbyname-Tuple{Any}",
    "page": "Home",
    "title": "GDAL.ogrgetdriverbyname",
    "category": "method",
    "text": "OGRGetDriverByName(const char *) -> OGRSFDriverH\n\nFetch the indicated driver.\n\nParameters\n\npszName: the driver name\n\nReturns\n\nthe driver, or NULL if no driver with that name is found\n\n\n\n\n\n"
},

{
    "location": "#GDAL.ogrgetdrivercount-Tuple{}",
    "page": "Home",
    "title": "GDAL.ogrgetdrivercount",
    "category": "method",
    "text": "OGRGetDriverCount(void) -> int\n\nFetch the number of registered drivers.\n\nReturns\n\nthe drivers count.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.open-Tuple{Any,GDAL.GDALAccess}",
    "page": "Home",
    "title": "GDAL.open",
    "category": "method",
    "text": "GDALOpen(const char * pszFilename,\n         GDALAccess eAccess) -> GDALDatasetH\n\nOpen a raster file as a GDALDataset.\n\nParameters\n\npszFilename: the name of the file to access. In the case of exotic drivers this may not refer to a physical file, but instead contain information for the driver on how to access a dataset. It should be in UTF-8 encoding.\neAccess: the desired access, either GAUpdate or GAReadOnly. Many drivers support only read only access.\n\nReturns\n\nA GDALDatasetH handle or NULL on failure. For C++ applications this handle can be cast to a GDALDataset *.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.open-Tuple{Any,Integer,Ptr{GDAL.OGRSFDriverH}}",
    "page": "Home",
    "title": "GDAL.open",
    "category": "method",
    "text": "OGROpen(const char *,\n        int,\n        OGRSFDriverH *) -> OGRDataSourceH\n\nOpen a file / data source with one of the registered drivers.\n\nParameters\n\npszName: the name of the file, or data source to open.\nbUpdate: FALSE for read-only access (the default) or TRUE for read-write access.\npahDriverList: if non-NULL, this argument will be updated with a pointer to the driver which was used to open the data source.\n\nReturns\n\nNULL on error or if the pass name is not supported by this driver, otherwise an handle to a GDALDataset. This GDALDataset should be closed by deleting the object when it is no longer needed.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.open-Tuple{Ref{GDAL.OGRSFDriverH},Any,Integer}",
    "page": "Home",
    "title": "GDAL.open",
    "category": "method",
    "text": "OGR_Dr_Open(OGRSFDriverH,\n            const char *,\n            int) -> OGRDataSourceH\n\nAttempt to open file with this driver.\n\nParameters\n\nhDriver: handle to the driver that is used to open file.\npszName: the name of the file, or data source to try and open.\nbUpdate: TRUE if update access is required, otherwise FALSE (the default).\n\nReturns\n\nNULL on error or if the pass name is not supported by this driver, otherwise an handle to a GDALDataset. This GDALDataset should be closed by deleting the object when it is no longer needed.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.openex-Tuple{Any,Integer,Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.openex",
    "category": "method",
    "text": "GDALOpenEx(const char * pszFilename,\n           unsigned int nOpenFlags,\n           const char *const * papszAllowedDrivers,\n           const char *const * papszOpenOptions,\n           const char *const * papszSiblingFiles) -> friend GDALDatasetH\n\nOpen a raster or vector file as a GDALDataset.\n\nParameters\n\npszFilename: the name of the file to access. In the case of exotic drivers this may not refer to a physical file, but instead contain information for the driver on how to access a dataset. It should be in UTF-8 encoding.\nnOpenFlags: a combination of GDALOF flags that may be combined through logical or operator. \n\nDriver kind: GDALOFRASTER for raster drivers, GDALOFVECTOR for vector drivers. If none of the value is specified, both kinds are implied. \n\nAccess mode: GDALOFREADONLY (exclusive)or GDALOFUPDATE. \n\nShared mode: GDALOFSHARED. If set, it allows the sharing of GDALDataset handles for a dataset with other callers that have set GDALOFSHARED. In particular, GDALOpenEx() will first consult its list of currently open and shared GDALDataset\'s, and if the GetDescription() name for one exactly matches the pszFilename passed to GDALOpenEx() it will be referenced and returned, if GDALOpenEx() is called from the same thread. \n\nVerbose error: GDALOFVERBOSE_ERROR. If set, a failed attempt to open the file will lead to an error message to be reported.\n\npapszAllowedDrivers: NULL to consider all candidate drivers, or a NULL terminated list of strings with the driver short names that must be considered.\npapszOpenOptions: NULL, or a NULL terminated list of strings with open options passed to candidate drivers. An option exists for all drivers, OVERVIEWLEVEL=level, to select a particular overview level of a dataset. The level index starts at 0. The level number can be suffixed by \"only\" to specify that only this overview level must be visible, and not sub-levels. Open options are validated by default, and a warning is emitted in case the option is not recognized. In some scenarios, it might be not desirable (e.g. when not knowing which driver will open the file), so the special open option VALIDATEOPEN_OPTIONS can be set to NO to avoid such warnings. Alternatively, since GDAL 2.1, an option name can be preceded by the @ character to indicate that it may not cause a warning if the driver doesn\'t declare this option.\npapszSiblingFiles: NULL, or a NULL terminated list of strings that are filenames that are auxiliary to the main filename. If NULL is passed, a probing of the file system will be done.\n\nReturns\n\nA GDALDatasetH handle or NULL on failure. For C++ applications this handle can be cast to a GDALDataset *.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.openshared-Tuple{Any,GDAL.GDALAccess}",
    "page": "Home",
    "title": "GDAL.openshared",
    "category": "method",
    "text": "GDALOpenShared(const char * pszFilename,\n               GDALAccess eAccess) -> GDALDatasetH\n\nOpen a raster file as a GDALDataset.\n\nParameters\n\npszFilename: the name of the file to access. In the case of exotic drivers this may not refer to a physical file, but instead contain information for the driver on how to access a dataset. It should be in UTF-8 encoding.\neAccess: the desired access, either GAUpdate or GAReadOnly. Many drivers support only read only access.\n\nReturns\n\nA GDALDatasetH handle or NULL on failure. For C++ applications this handle can be cast to a GDALDataset *.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.openshared-Tuple{Any,Integer,Any}",
    "page": "Home",
    "title": "GDAL.openshared",
    "category": "method",
    "text": "OGROpenShared(const char *,\n              int,\n              OGRSFDriverH *) -> OGRDataSourceH\n\nOpen a file / data source with one of the registered drivers if not already opened, or increment reference count of already opened data source previously opened with OGROpenShared()\n\nParameters\n\npszName: the name of the file, or data source to open.\nbUpdate: FALSE for read-only access (the default) or TRUE for read-write access.\npahDriverList: if non-NULL, this argument will be updated with a pointer to the driver which was used to open the data source.\n\nReturns\n\nNULL on error or if the pass name is not supported by this driver, otherwise an handle to a GDALDataset. This GDALDataset should be closed by deleting the object when it is no longer needed.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.openverticalshiftgrid-Tuple{Any,Any}",
    "page": "Home",
    "title": "GDAL.openverticalshiftgrid",
    "category": "method",
    "text": "GDALOpenVerticalShiftGrid(const char * pszProj4Geoidgrids,\n                          int * pbError) -> GDALDatasetH\n\nLoad proj.4 geoidgrids as GDAL dataset.\n\nParameters\n\npszProj4Geoidgrids: Value of proj.4 geoidgrids parameter.\npbError: If not NULL, the pointed value will be set to TRUE if an error occurred.\n\nReturns\n\na dataset. If not NULL, it must be closed with GDALClose().\n\n\n\n\n\n"
},

{
    "location": "#GDAL.optgetparameterinfo-NTuple{5,Any}",
    "page": "Home",
    "title": "GDAL.optgetparameterinfo",
    "category": "method",
    "text": "OPTGetParameterInfo(const char * pszProjectionMethod,\n                    const char * pszParameterName,\n                    char ** ppszUserName,\n                    char ** ppszType,\n                    double * pdfDefaultValue) -> int\n\nFetch information about a single parameter of a projection method.\n\nParameters\n\npszProjectionMethod: name of projection method for which the parameter applies. Not currently used, but in the future this could affect defaults. This is the internal projection method name, such as \"Tranverse_Mercator\".\npszParameterName: name of the parameter to fetch information about. This is the internal name such as \"centralmeridian\" (SRSPPCENTRALMERIDIAN).\nppszUserName: location at which to return the user visible name for the parameter. This pointer may be NULL to skip the user name. The returned name should not be modified or freed.\nppszType: location at which to return the parameter type for the parameter. This pointer may be NULL to skip. The returned type should not be modified or freed. The type values are described above.\npdfDefaultValue: location at which to put the default value for this parameter. The pointer may be NULL.\n\nReturns\n\nTRUE if parameter found, or FALSE otherwise.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.optgetparameterlist-Tuple{Any,Any}",
    "page": "Home",
    "title": "GDAL.optgetparameterlist",
    "category": "method",
    "text": "OPTGetParameterList(const char * pszProjectionMethod,\n                    char ** ppszUserName) -> char **\n\nFetch the parameters for a given projection method.\n\nParameters\n\npszProjectionMethod: internal name of projection methods to fetch the parameters for, such as \"TransverseMercator\" (SRSPTTRANSVERSEMERCATOR).\nppszUserName: pointer in which to return a user visible name for the projection name. The returned string should not be modified or freed by the caller. Legal to pass in NULL if user name not required.\n\nReturns\n\nreturns a NULL terminated list of internal parameter names that should be freed by the caller when no longer needed. Returns NULL if projection method is unknown.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.optgetprojectionmethods-Tuple{}",
    "page": "Home",
    "title": "GDAL.optgetprojectionmethods",
    "category": "method",
    "text": "OPTGetProjectionMethods() -> char **\n\nFetch list of possible projection methods.\n\nReturns\n\nReturns NULL terminated list of projection methods. This should be freed with CSLDestroy() when no longer needed.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.overlaps-Tuple{Ref{GDAL.OGRGeometryH},Ref{GDAL.OGRGeometryH}}",
    "page": "Home",
    "title": "GDAL.overlaps",
    "category": "method",
    "text": "OGR_G_Overlaps(OGRGeometryH hThis,\n               OGRGeometryH hOther) -> int\n\nTest for overlap.\n\nParameters\n\nhThis: the geometry to compare.\nhOther: the other geometry to compare.\n\nReturns\n\nTRUE if they are overlapping, otherwise FALSE.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.overviewmagnitudecorrection-Tuple{Ref{GDAL.GDALRasterBandH},Integer,Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.overviewmagnitudecorrection",
    "category": "method",
    "text": "GDALOverviewMagnitudeCorrection(GDALRasterBandH hBaseBand,\n                                int nOverviewCount,\n                                GDALRasterBandH * pahOverviews,\n                                GDALProgressFunc pfnProgress,\n                                void * pProgressData) -> CPLErr\n\nUndocumented.\n\nParameters\n\nhBaseBand: undocumented.\nnOverviewCount: undocumented.\npahOverviews: undocumented.\npfnProgress: undocumented.\npProgressData: undocumented.\n\nReturns\n\nundocumented\n\n\n\n\n\n"
},

{
    "location": "#GDAL.packeddmstodec-Tuple{Real}",
    "page": "Home",
    "title": "GDAL.packeddmstodec",
    "category": "method",
    "text": "GDALPackedDMSToDec(double) -> double\n\nConvert a packed DMS value (DDDMMMSSS.SS) into decimal degrees.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.pointonsurface-Tuple{Ref{GDAL.OGRGeometryH}}",
    "page": "Home",
    "title": "GDAL.pointonsurface",
    "category": "method",
    "text": "OGR_G_PointOnSurface(OGRGeometryH hGeom) -> OGRGeometryH\n\nReturns a point guaranteed to lie on the surface.\n\nParameters\n\nhGeom: the geometry to operate on.\n\nReturns\n\na point guaranteed to lie on the surface or NULL if an error occurred.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.polygonize-Tuple{Ref{GDAL.GDALRasterBandH},Ref{GDAL.GDALRasterBandH},Ref{GDAL.OGRLayerH},Integer,Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.polygonize",
    "category": "method",
    "text": "GDALPolygonize(GDALRasterBandH hSrcBand,\n               GDALRasterBandH hMaskBand,\n               OGRLayerH hOutLayer,\n               int iPixValField,\n               char ** papszOptions,\n               GDALProgressFunc pfnProgress,\n               void * pProgressArg) -> CPLErr\n\nCreate polygon coverage from raster data.\n\nParameters\n\nhSrcBand: the source raster band to be processed.\nhMaskBand: an optional mask band. All pixels in the mask band with a value other than zero will be considered suitable for collection as polygons.\nhOutLayer: the vector feature layer to which the polygons should be written.\niPixValField: the attribute field index indicating the feature attribute into which the pixel value of the polygon should be written.\npapszOptions: a name/value list of additional options \n\n\"8CONNECTED\": May be set to \"8\" to use 8 connectedness. Otherwise 4 connectedness will be applied to the algorithm\n\npfnProgress: callback for reporting algorithm progress matching the GDALProgressFunc() semantics. May be NULL.\npProgressArg: callback argument passed to pfnProgress.\n\nReturns\n\nCENone on success or CEFailure on a failure.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.polygonize-Tuple{Ref{GDAL.OGRGeometryH}}",
    "page": "Home",
    "title": "GDAL.polygonize",
    "category": "method",
    "text": "OGR_G_Polygonize(OGRGeometryH hTarget) -> OGRGeometryH\n\nPolygonizes a set of sparse edges.\n\nParameters\n\nhTarget: The Geometry to be polygonized.\n\nReturns\n\na handle to a newly allocated geometry now owned by the caller, or NULL on failure.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.poperrorhandler-Tuple{}",
    "page": "Home",
    "title": "GDAL.poperrorhandler",
    "category": "method",
    "text": "CPLPopErrorHandler() -> void\n\nPop error handler off stack.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.pusherrorhandler-Tuple{Ref{GDAL.CPLErrorHandler}}",
    "page": "Home",
    "title": "GDAL.pusherrorhandler",
    "category": "method",
    "text": "CPLPushErrorHandler(CPLErrorHandler pfnErrorHandlerNew) -> void\n\nPush a new CPLError handler.\n\nParameters\n\npfnErrorHandlerNew: new error handler function.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.pusherrorhandlerex-Tuple{Ref{GDAL.CPLErrorHandler},Any}",
    "page": "Home",
    "title": "GDAL.pusherrorhandlerex",
    "category": "method",
    "text": "CPLPushErrorHandlerEx(CPLErrorHandler pfnErrorHandlerNew,\n                      void * pUserData) -> void\n\nPush a new CPLError handler with user data on the error context.\n\nParameters\n\npfnErrorHandlerNew: new error handler function.\npUserData: User data to put on the error context.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.quieterrorhandler-Tuple{GDAL.CPLErr,Int32,Any}",
    "page": "Home",
    "title": "GDAL.quieterrorhandler",
    "category": "method",
    "text": "CPLQuietErrorHandler(CPLErr eErrClass,\n                     CPLErrorNum nError,\n                     const char * pszErrorMsg) -> void\n\nError handler that does not do anything, except for debug messages.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.rasteradviseread-Tuple{Ref{GDAL.GDALRasterBandH},Integer,Integer,Integer,Integer,Integer,Integer,GDAL.GDALDataType,Any}",
    "page": "Home",
    "title": "GDAL.rasteradviseread",
    "category": "method",
    "text": "GDALRasterAdviseRead(GDALRasterBandH hBand,\n                     int nXOff,\n                     int nYOff,\n                     int nXSize,\n                     int nYSize,\n                     int nBufXSize,\n                     int nBufYSize,\n                     GDALDataType eDT,\n                     char ** papszOptions) -> CPLErr\n\nAdvise driver of upcoming read requests.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.rasterbandcopywholeraster-Tuple{Ref{GDAL.GDALRasterBandH},Ref{GDAL.GDALRasterBandH},Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.rasterbandcopywholeraster",
    "category": "method",
    "text": "GDALRasterBandCopyWholeRaster(GDALRasterBandH hSrcBand,\n                              GDALRasterBandH hDstBand,\n                              const char *const * constpapszOptions,\n                              GDALProgressFunc pfnProgress,\n                              void * pProgressData) -> CPLErr\n\nCopy all raster band raster data.\n\nParameters\n\nhSrcBand: the source band\nhDstBand: the destination band\npapszOptions: transfer hints in \"StringList\" Name=Value format.\npfnProgress: progress reporting function.\npProgressData: callback data for progress function.\n\nReturns\n\nCENone on success, or CEFailure on failure.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.rasterbandgettiledvirtualmem-Tuple{Ref{GDAL.GDALRasterBandH},GDAL.GDALRWFlag,Integer,Integer,Integer,Integer,Integer,Integer,GDAL.GDALDataType,UInt64,Integer,Any}",
    "page": "Home",
    "title": "GDAL.rasterbandgettiledvirtualmem",
    "category": "method",
    "text": "GDALRasterBandGetTiledVirtualMem(GDALRasterBandH hBand,\n                                 GDALRWFlag eRWFlag,\n                                 int nXOff,\n                                 int nYOff,\n                                 int nXSize,\n                                 int nYSize,\n                                 int nTileXSize,\n                                 int nTileYSize,\n                                 GDALDataType eBufType,\n                                 size_t nCacheSize,\n                                 int bSingleThreadUsage,\n                                 char ** papszOptions) -> CPLVirtualMem *\n\nCreate a CPLVirtualMem object from a GDAL rasterband object, with tiling organization.\n\nParameters\n\nhBand: Rasterband object\neRWFlag: Either GFRead to read a region of data, or GFWrite to write a region of data.\nnXOff: The pixel offset to the top left corner of the region of the band to be accessed. This would be zero to start from the left side.\nnYOff: The line offset to the top left corner of the region of the band to be accessed. This would be zero to start from the top.\nnXSize: The width of the region of the band to be accessed in pixels.\nnYSize: The height of the region of the band to be accessed in lines.\nnTileXSize: the width of the tiles.\nnTileYSize: the height of the tiles.\neBufType: the type of the pixel values in the data buffer. The pixel values will automatically be translated to/from the GDALRasterBand data type as needed.\nnCacheSize: size in bytes of the maximum memory that will be really allocated (must ideally fit into RAM)\nbSingleThreadUsage: set to TRUE if there will be no concurrent threads that will access the virtual memory mapping. This can optimize performance a bit. If set to FALSE, CPLVirtualMemDeclareThread() must be called.\npapszOptions: NULL terminated list of options. Unused for now.\n\nReturns\n\na virtual memory object that must be freed by CPLVirtualMemFree(), or NULL in case of failure.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.rasterbandgetvirtualmem-Tuple{Ref{GDAL.GDALRasterBandH},GDAL.GDALRWFlag,Integer,Integer,Integer,Integer,Integer,Integer,GDAL.GDALDataType,Integer,Integer,UInt64,UInt64,Integer,Any}",
    "page": "Home",
    "title": "GDAL.rasterbandgetvirtualmem",
    "category": "method",
    "text": "GDALRasterBandGetVirtualMem(GDALRasterBandH hBand,\n                            GDALRWFlag eRWFlag,\n                            int nXOff,\n                            int nYOff,\n                            int nXSize,\n                            int nYSize,\n                            int nBufXSize,\n                            int nBufYSize,\n                            GDALDataType eBufType,\n                            int nPixelSpace,\n                            GIntBig nLineSpace,\n                            size_t nCacheSize,\n                            size_t nPageSizeHint,\n                            int bSingleThreadUsage,\n                            char ** papszOptions) -> CPLVirtualMem *\n\nCreate a CPLVirtualMem object from a GDAL raster band object.\n\nParameters\n\nhBand: Rasterband object\neRWFlag: Either GFRead to read a region of data, or GFWrite to write a region of data.\nnXOff: The pixel offset to the top left corner of the region of the band to be accessed. This would be zero to start from the left side.\nnYOff: The line offset to the top left corner of the region of the band to be accessed. This would be zero to start from the top.\nnXSize: The width of the region of the band to be accessed in pixels.\nnYSize: The height of the region of the band to be accessed in lines.\nnBufXSize: the width of the buffer image into which the desired region is to be read, or from which it is to be written.\nnBufYSize: the height of the buffer image into which the desired region is to be read, or from which it is to be written.\neBufType: the type of the pixel values in the data buffer. The pixel values will automatically be translated to/from the GDALRasterBand data type as needed.\nnPixelSpace: The byte offset from the start of one pixel value in the buffer to the start of the next pixel value within a scanline. If defaulted (0) the size of the datatype eBufType is used.\nnLineSpace: The byte offset from the start of one scanline in the buffer to the start of the next. If defaulted (0) the size of the datatype eBufType * nBufXSize is used.\nnCacheSize: size in bytes of the maximum memory that will be really allocated (must ideally fit into RAM)\nnPageSizeHint: hint for the page size. Must be a multiple of the system page size, returned by CPLGetPageSize(). Minimum value is generally 4096. Might be set to 0 to let the function determine a default page size.\nbSingleThreadUsage: set to TRUE if there will be no concurrent threads that will access the virtual memory mapping. This can optimize performance a bit. If set to FALSE, CPLVirtualMemDeclareThread() must be called.\npapszOptions: NULL terminated list of options. Unused for now.\n\nReturns\n\na virtual memory object that must be freed by CPLVirtualMemFree(), or NULL in case of failure.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.rasterio-Tuple{Ref{GDAL.GDALRasterBandH},GDAL.GDALRWFlag,Integer,Integer,Integer,Integer,Any,Integer,Integer,GDAL.GDALDataType,Integer,Integer}",
    "page": "Home",
    "title": "GDAL.rasterio",
    "category": "method",
    "text": "GDALRasterIO(GDALRasterBandH hBand,\n             GDALRWFlag eRWFlag,\n             int nXOff,\n             int nYOff,\n             int nXSize,\n             int nYSize,\n             void * pData,\n             int nBufXSize,\n             int nBufYSize,\n             GDALDataType eBufType,\n             int nPixelSpace,\n             int nLineSpace) -> CPLErr\n\nRead/write a region of image data for this band.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.rasterioex-Tuple{Ref{GDAL.GDALRasterBandH},GDAL.GDALRWFlag,Integer,Integer,Integer,Integer,Any,Integer,Integer,GDAL.GDALDataType,Int64,Int64,Any}",
    "page": "Home",
    "title": "GDAL.rasterioex",
    "category": "method",
    "text": "GDALRasterIOEx(GDALRasterBandH hBand,\n               GDALRWFlag eRWFlag,\n               int nXOff,\n               int nYOff,\n               int nXSize,\n               int nYSize,\n               void * pData,\n               int nBufXSize,\n               int nBufYSize,\n               GDALDataType eBufType,\n               GSpacing nPixelSpace,\n               GSpacing nLineSpace,\n               GDALRasterIOExtraArg * psExtraArg) -> CPLErr\n\nRead/write a region of image data for this band.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.rasterize-Tuple{Any,Ref{#s1235} where #s1235<:GDAL.GDALDatasetH,Ref{#s1234} where #s1234<:GDAL.GDALDatasetH,Any,Any}",
    "page": "Home",
    "title": "GDAL.rasterize",
    "category": "method",
    "text": "GDALRasterize(const char * pszDest,\n              GDALDatasetH hDstDS,\n              GDALDatasetH hSrcDataset,\n              const GDALRasterizeOptions * psOptionsIn,\n              int * pbUsageError) -> GDALDatasetH\n\nBurns vector geometries into a raster.\n\nParameters\n\npszDest: the destination dataset path or NULL.\nhDstDS: the destination dataset or NULL.\nhSrcDataset: the source dataset handle.\npsOptionsIn: the options struct returned by GDALRasterizeOptionsNew() or NULL.\npbUsageError: the pointer to int variable to determine any usage error has occurred or NULL.\n\nReturns\n\nthe output dataset (new dataset that must be closed using GDALClose(), or hDstDS is not NULL) or NULL in case of error.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.rasterizegeometries-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALDatasetH,Integer,Any,Integer,Any,Ref{GDAL.GDALTransformerFunc},Any,Any,Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.rasterizegeometries",
    "category": "method",
    "text": "GDALRasterizeGeometries(GDALDatasetH hDS,\n                        int nBandCount,\n                        int * panBandList,\n                        int nGeomCount,\n                        OGRGeometryH * pahGeometries,\n                        GDALTransformerFunc pfnTransformer,\n                        void * pTransformArg,\n                        double * padfGeomBurnValue,\n                        char ** papszOptions,\n                        GDALProgressFunc pfnProgress,\n                        void * pProgressArg) -> CPLErr\n\nBurn geometries into raster.\n\nParameters\n\nhDS: output data, must be opened in update mode.\nnBandCount: the number of bands to be updated.\npanBandList: the list of bands to be updated.\nnGeomCount: the number of geometries being passed in pahGeometries.\npahGeometries: the array of geometries to burn in.\npfnTransformer: transformation to apply to geometries to put into pixel/line coordinates on raster. If NULL a geotransform based one will be created internally.\npTransformArg: callback data for transformer.\npadfGeomBurnValue: the array of values to burn into the raster. There should be nBandCount values for each geometry.\npapszOptions: special options controlling rasterization \n\n\"ALL_TOUCHED\": May be set to TRUE to set all pixels touched by the line or polygons, not just those whose center is within the polygon or that are selected by brezenhams line algorithm. Defaults to FALSE. \n\n\"BURNVALUEFROM\": May be set to \"Z\" to use the Z values of the geometries. dfBurnValue is added to this before burning. Defaults to GDALBurnValueSrc.GBV_UserBurnValue in which case just the dfBurnValue is burned. This is implemented only for points and lines for now. The M value may be supported in the future. \n\n\"MERGE_ALG\": May be REPLACE (the default) or ADD. REPLACE results in overwriting of value, while ADD adds the new value to the existing raster, suitable for heatmaps for instance.\n\npfnProgress: the progress function to report completion.\npProgressArg: callback data for progress function.\n\nReturns\n\nCENone on success or CEFailure on error.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.rasterizelayers-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALDatasetH,Integer,Any,Integer,Any,Ref{GDAL.GDALTransformerFunc},Any,Any,Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.rasterizelayers",
    "category": "method",
    "text": "GDALRasterizeLayers(GDALDatasetH hDS,\n                    int nBandCount,\n                    int * panBandList,\n                    int nLayerCount,\n                    OGRLayerH * pahLayers,\n                    GDALTransformerFunc pfnTransformer,\n                    void * pTransformArg,\n                    double * padfLayerBurnValues,\n                    char ** papszOptions,\n                    GDALProgressFunc pfnProgress,\n                    void * pProgressArg) -> CPLErr\n\nBurn geometries from the specified list of layers into raster.\n\nParameters\n\nhDS: output data, must be opened in update mode.\nnBandCount: the number of bands to be updated.\npanBandList: the list of bands to be updated.\nnLayerCount: the number of layers being passed in pahLayers array.\npahLayers: the array of layers to burn in.\npfnTransformer: transformation to apply to geometries to put into pixel/line coordinates on raster. If NULL a geotransform based one will be created internally.\npTransformArg: callback data for transformer.\npadfLayerBurnValues: the array of values to burn into the raster. There should be nBandCount values for each layer.\npapszOptions: special options controlling rasterization: \n\n\"ATTRIBUTE\": Identifies an attribute field on the features to be used for a burn in value. The value will be burned into all output bands. If specified, padfLayerBurnValues will not be used and can be a NULL pointer. \n\n\"CHUNKYSIZE\": The height in lines of the chunk to operate on. The larger the chunk size the less times we need to make a pass through all the shapes. If it is not set or set to zero the default chunk size will be used. Default size will be estimated based on the GDAL cache buffer size using formula: cachesizebytes/scanlinesizebytes, so the chunk will not exceed the cache. \n\n\"ALL_TOUCHED\": May be set to TRUE to set all pixels touched by the line or polygons, not just those whose center is within the polygon or that are selected by brezenhams line algorithm. Defaults to FALSE. \n\n\"BURNVALUEFROM\": May be set to \"Z\" to use the Z values of the geometries. The value from padfLayerBurnValues or the attribute field value is added to this before burning. In default case dfBurnValue is burned as it is. This is implemented properly only for points and lines for now. Polygons will be burned using the Z value from the first point. The M value may be supported in the future. \n\n\"MERGE_ALG\": May be REPLACE (the default) or ADD. REPLACE results in overwriting of value, while ADD adds the new value to the existing raster, suitable for heatmaps for instance.\n\npfnProgress: the progress function to report completion.\npProgressArg: callback data for progress function.\n\nReturns\n\nCENone on success or CEFailure on error.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.rasterizelayersbuf-Tuple{Any,Integer,Integer,GDAL.GDALDataType,Integer,Integer,Integer,Any,Any,Any,Ref{GDAL.GDALTransformerFunc},Any,Real,Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.rasterizelayersbuf",
    "category": "method",
    "text": "GDALRasterizeLayersBuf(void * pData,\n                       int nBufXSize,\n                       int nBufYSize,\n                       GDALDataType eBufType,\n                       int nPixelSpace,\n                       int nLineSpace,\n                       int nLayerCount,\n                       OGRLayerH * pahLayers,\n                       const char * pszDstProjection,\n                       double * padfDstGeoTransform,\n                       GDALTransformerFunc pfnTransformer,\n                       void * pTransformArg,\n                       double dfBurnValue,\n                       char ** papszOptions,\n                       GDALProgressFunc pfnProgress,\n                       void * pProgressArg) -> CPLErr\n\nBurn geometries from the specified list of layer into raster.\n\nParameters\n\npData: pointer to the output data array.\nnBufXSize: width of the output data array in pixels.\nnBufYSize: height of the output data array in pixels.\neBufType: data type of the output data array.\nnPixelSpace: The byte offset from the start of one pixel value in pData to the start of the next pixel value within a scanline. If defaulted (0) the size of the datatype eBufType is used.\nnLineSpace: The byte offset from the start of one scanline in pData to the start of the next. If defaulted the size of the datatype eBufType * nBufXSize is used.\nnLayerCount: the number of layers being passed in pahLayers array.\npahLayers: the array of layers to burn in.\npszDstProjection: WKT defining the coordinate system of the target raster.\npadfDstGeoTransform: geotransformation matrix of the target raster.\npfnTransformer: transformation to apply to geometries to put into pixel/line coordinates on raster. If NULL a geotransform based one will be created internally.\npTransformArg: callback data for transformer.\ndfBurnValue: the value to burn into the raster.\npapszOptions: special options controlling rasterization: \n\n\"ATTRIBUTE\": Identifies an attribute field on the features to be used for a burn in value. The value will be burned into all output bands. If specified, padfLayerBurnValues will not be used and can be a NULL pointer. \n\n\"ALL_TOUCHED\": May be set to TRUE to set all pixels touched by the line or polygons, not just those whose center is within the polygon or that are selected by brezenhams line algorithm. Defaults to FALSE. \n\n\"BURNVALUEFROM\": May be set to \"Z\" to use the Z values of the geometries. dfBurnValue or the attribute field value is added to this before burning. In default case dfBurnValue is burned as it is. This is implemented properly only for points and lines for now. Polygons will be burned using the Z value from the first point. The M value may be supported in the future. \n\n\"MERGE_ALG\": May be REPLACE (the default) or ADD. REPLACE results in overwriting of value, while ADD adds the new value to the existing raster, suitable for heatmaps for instance.\n\npfnProgress: the progress function to report completion.\npProgressArg: callback data for progress function.\n\nReturns\n\nCENone on success or CEFailure on error.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.rasterizeoptionsfree-Tuple{Any}",
    "page": "Home",
    "title": "GDAL.rasterizeoptionsfree",
    "category": "method",
    "text": "GDALRasterizeOptionsFree(GDALRasterizeOptions * psOptions) -> void\n\nFrees the GDALRasterizeOptions struct.\n\nParameters\n\npsOptions: the options struct for GDALRasterize().\n\n\n\n\n\n"
},

{
    "location": "#GDAL.rasterizeoptionsnew-Tuple{Any,Any}",
    "page": "Home",
    "title": "GDAL.rasterizeoptionsnew",
    "category": "method",
    "text": "GDALRasterizeOptionsNew(char ** papszArgv,\n                        GDALRasterizeOptionsForBinary * psOptionsForBinary) -> GDALRasterizeOptions *\n\nAllocates a GDALRasterizeOptions struct.\n\nParameters\n\npapszArgv: NULL terminated list of options (potentially including filename and open options too), or NULL. The accepted options are the ones of the gdal_rasterize utility.\npsOptionsForBinary: (output) may be NULL (and should generally be NULL), otherwise (gdaltranslatebin.cpp use case) must be allocated with GDALRasterizeOptionsForBinaryNew() prior to this function. Will be filled with potentially present filename, open options,...\n\nReturns\n\npointer to the allocated GDALRasterizeOptions struct. Must be freed with GDALRasterizeOptionsFree().\n\n\n\n\n\n"
},

{
    "location": "#GDAL.rasterizeoptionssetprogress-Tuple{Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.rasterizeoptionssetprogress",
    "category": "method",
    "text": "GDALRasterizeOptionsSetProgress(GDALRasterizeOptions * psOptions,\n                                GDALProgressFunc pfnProgress,\n                                void * pProgressData) -> void\n\nSet a progress function.\n\nParameters\n\npsOptions: the options struct for GDALRasterize().\npfnProgress: the progress callback.\npProgressData: the user data for the progress callback.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.ratchangesarewrittentofile-Tuple{Ref{GDAL.GDALRasterAttributeTableH}}",
    "page": "Home",
    "title": "GDAL.ratchangesarewrittentofile",
    "category": "method",
    "text": "GDALRATChangesAreWrittenToFile(GDALRasterAttributeTableH hRAT) -> int\n\nDetermine whether changes made to this RAT are reflected directly in the dataset.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.ratclone-Tuple{Ref{GDAL.GDALRasterAttributeTableH}}",
    "page": "Home",
    "title": "GDAL.ratclone",
    "category": "method",
    "text": "GDALRATClone(GDALRasterAttributeTableH) -> GDALRasterAttributeTableH\n\nCopy Raster Attribute Table.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.ratcreatecolumn-Tuple{Ref{GDAL.GDALRasterAttributeTableH},Any,GDAL.GDALRATFieldType,GDAL.GDALRATFieldUsage}",
    "page": "Home",
    "title": "GDAL.ratcreatecolumn",
    "category": "method",
    "text": "GDALRATCreateColumn(GDALRasterAttributeTableH,\n                    const char *,\n                    GDALRATFieldType,\n                    GDALRATFieldUsage) -> CPLErr\n\nCreate new column.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.ratdumpreadable-Tuple{Ref{GDAL.GDALRasterAttributeTableH},Any}",
    "page": "Home",
    "title": "GDAL.ratdumpreadable",
    "category": "method",
    "text": "GDALRATDumpReadable(GDALRasterAttributeTableH,\n                    FILE *) -> void\n\nDump RAT in readable form.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.ratgetcolofusage-Tuple{Ref{GDAL.GDALRasterAttributeTableH},GDAL.GDALRATFieldUsage}",
    "page": "Home",
    "title": "GDAL.ratgetcolofusage",
    "category": "method",
    "text": "GDALRATGetColOfUsage(GDALRasterAttributeTableH,\n                     GDALRATFieldUsage) -> int\n\nFetch column index for given usage.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.ratgetcolumncount-Tuple{Ref{GDAL.GDALRasterAttributeTableH}}",
    "page": "Home",
    "title": "GDAL.ratgetcolumncount",
    "category": "method",
    "text": "GDALRATGetColumnCount(GDALRasterAttributeTableH) -> int\n\nFetch table column count.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.ratgetlinearbinning-Tuple{Ref{GDAL.GDALRasterAttributeTableH},Any,Any}",
    "page": "Home",
    "title": "GDAL.ratgetlinearbinning",
    "category": "method",
    "text": "GDALRATGetLinearBinning(GDALRasterAttributeTableH,\n                        double *,\n                        double *) -> int\n\nGet linear binning information.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.ratgetnameofcol-Tuple{Ref{GDAL.GDALRasterAttributeTableH},Integer}",
    "page": "Home",
    "title": "GDAL.ratgetnameofcol",
    "category": "method",
    "text": "GDALRATGetNameOfCol(GDALRasterAttributeTableH,\n                    int) -> const char *\n\nFetch name of indicated column.\n\nParameters\n\nhRAT: RAT handle.\niCol: column index.\n\nReturns\n\nname.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.ratgetrowcount-Tuple{Ref{GDAL.GDALRasterAttributeTableH}}",
    "page": "Home",
    "title": "GDAL.ratgetrowcount",
    "category": "method",
    "text": "GDALRATGetRowCount(GDALRasterAttributeTableH) -> int\n\nFetch row count.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.ratgetrowofvalue-Tuple{Ref{GDAL.GDALRasterAttributeTableH},Real}",
    "page": "Home",
    "title": "GDAL.ratgetrowofvalue",
    "category": "method",
    "text": "GDALRATGetRowOfValue(GDALRasterAttributeTableH,\n                     double) -> int\n\nGet row for pixel value.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.ratgettypeofcol-Tuple{Ref{GDAL.GDALRasterAttributeTableH},Integer}",
    "page": "Home",
    "title": "GDAL.ratgettypeofcol",
    "category": "method",
    "text": "GDALRATGetTypeOfCol(GDALRasterAttributeTableH,\n                    int) -> GDALRATFieldType\n\nFetch column type.\n\nParameters\n\nhRAT: RAT handle.\niCol: column index.\n\nReturns\n\ntype.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.ratgetusageofcol-Tuple{Ref{GDAL.GDALRasterAttributeTableH},Integer}",
    "page": "Home",
    "title": "GDAL.ratgetusageofcol",
    "category": "method",
    "text": "GDALRATGetUsageOfCol(GDALRasterAttributeTableH,\n                     int) -> GDALRATFieldUsage\n\nFetch column usage value.\n\nParameters\n\nhRAT: RAT handle.\niCol: column index.\n\nReturns\n\nusage.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.ratgetvalueasdouble-Tuple{Ref{GDAL.GDALRasterAttributeTableH},Integer,Integer}",
    "page": "Home",
    "title": "GDAL.ratgetvalueasdouble",
    "category": "method",
    "text": "GDALRATGetValueAsDouble(GDALRasterAttributeTableH,\n                        int,\n                        int) -> double\n\nFetch field value as a double.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.ratgetvalueasint-Tuple{Ref{GDAL.GDALRasterAttributeTableH},Integer,Integer}",
    "page": "Home",
    "title": "GDAL.ratgetvalueasint",
    "category": "method",
    "text": "GDALRATGetValueAsInt(GDALRasterAttributeTableH,\n                     int,\n                     int) -> int\n\nFetch field value as a integer.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.ratgetvalueasstring-Tuple{Ref{GDAL.GDALRasterAttributeTableH},Integer,Integer}",
    "page": "Home",
    "title": "GDAL.ratgetvalueasstring",
    "category": "method",
    "text": "GDALRATGetValueAsString(GDALRasterAttributeTableH,\n                        int,\n                        int) -> const char *\n\nFetch field value as a string.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.ratinitializefromcolortable-Tuple{Ref{GDAL.GDALRasterAttributeTableH},Ref{GDAL.GDALColorTableH}}",
    "page": "Home",
    "title": "GDAL.ratinitializefromcolortable",
    "category": "method",
    "text": "GDALRATInitializeFromColorTable(GDALRasterAttributeTableH,\n                                GDALColorTableH) -> CPLErr\n\nInitialize from color table.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.ratserializejson-Tuple{Ref{GDAL.GDALRasterAttributeTableH}}",
    "page": "Home",
    "title": "GDAL.ratserializejson",
    "category": "method",
    "text": "GDALRATSerializeJSON(GDALRasterAttributeTableH) -> void *\n\nSerialize Raster Attribute Table in Json format.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.ratsetlinearbinning-Tuple{Ref{GDAL.GDALRasterAttributeTableH},Real,Real}",
    "page": "Home",
    "title": "GDAL.ratsetlinearbinning",
    "category": "method",
    "text": "GDALRATSetLinearBinning(GDALRasterAttributeTableH,\n                        double,\n                        double) -> CPLErr\n\nSet linear binning information.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.ratsetrowcount-Tuple{Ref{GDAL.GDALRasterAttributeTableH},Integer}",
    "page": "Home",
    "title": "GDAL.ratsetrowcount",
    "category": "method",
    "text": "GDALRATSetRowCount(GDALRasterAttributeTableH,\n                   int) -> void\n\nSet row count.\n\nParameters\n\nhRAT: RAT handle.\nnNewCount: the new number of rows.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.ratsetvalueasdouble-Tuple{Ref{GDAL.GDALRasterAttributeTableH},Integer,Integer,Real}",
    "page": "Home",
    "title": "GDAL.ratsetvalueasdouble",
    "category": "method",
    "text": "GDALRATSetValueAsDouble(GDALRasterAttributeTableH,\n                        int,\n                        int,\n                        double) -> void\n\nSet field value from double.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.ratsetvalueasint-Tuple{Ref{GDAL.GDALRasterAttributeTableH},Integer,Integer,Integer}",
    "page": "Home",
    "title": "GDAL.ratsetvalueasint",
    "category": "method",
    "text": "GDALRATSetValueAsInt(GDALRasterAttributeTableH,\n                     int,\n                     int,\n                     int) -> void\n\nSet field value from integer.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.ratsetvalueasstring-Tuple{Ref{GDAL.GDALRasterAttributeTableH},Integer,Integer,Any}",
    "page": "Home",
    "title": "GDAL.ratsetvalueasstring",
    "category": "method",
    "text": "GDALRATSetValueAsString(GDALRasterAttributeTableH,\n                        int,\n                        int,\n                        const char *) -> void\n\nSet field value from string.\n\nParameters\n\nhRAT: RAT handle.\niRow: row index.\niField: field index.\npszValue: value.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.rattranslatetocolortable-Tuple{Ref{GDAL.GDALRasterAttributeTableH},Integer}",
    "page": "Home",
    "title": "GDAL.rattranslatetocolortable",
    "category": "method",
    "text": "GDALRATTranslateToColorTable(GDALRasterAttributeTableH,\n                             int nEntryCount) -> GDALColorTableH\n\nTranslate to a color table.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.ratvaluesioasdouble-Tuple{Ref{GDAL.GDALRasterAttributeTableH},GDAL.GDALRWFlag,Integer,Integer,Integer,Any}",
    "page": "Home",
    "title": "GDAL.ratvaluesioasdouble",
    "category": "method",
    "text": "GDALRATValuesIOAsDouble(GDALRasterAttributeTableH hRAT,\n                        GDALRWFlag eRWFlag,\n                        int iField,\n                        int iStartRow,\n                        int iLength,\n                        double * pdfData) -> CPLErr\n\nRead or Write a block of doubles to/from the Attribute Table.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.ratvaluesioasinteger-Tuple{Ref{GDAL.GDALRasterAttributeTableH},GDAL.GDALRWFlag,Integer,Integer,Integer,Any}",
    "page": "Home",
    "title": "GDAL.ratvaluesioasinteger",
    "category": "method",
    "text": "GDALRATValuesIOAsInteger(GDALRasterAttributeTableH hRAT,\n                         GDALRWFlag eRWFlag,\n                         int iField,\n                         int iStartRow,\n                         int iLength,\n                         int * pnData) -> CPLErr\n\nRead or Write a block of ints to/from the Attribute Table.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.ratvaluesioasstring-Tuple{Ref{GDAL.GDALRasterAttributeTableH},GDAL.GDALRWFlag,Integer,Integer,Integer,Any}",
    "page": "Home",
    "title": "GDAL.ratvaluesioasstring",
    "category": "method",
    "text": "GDALRATValuesIOAsString(GDALRasterAttributeTableH hRAT,\n                        GDALRWFlag eRWFlag,\n                        int iField,\n                        int iStartRow,\n                        int iLength,\n                        char ** papszStrList) -> CPLErr\n\nRead or Write a block of strings to/from the Attribute Table.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.rawfield_isnull-Tuple{Any}",
    "page": "Home",
    "title": "GDAL.rawfield_isnull",
    "category": "method",
    "text": "OGR_RawField_IsNull(const OGRField * puField) -> int\n\nReturns whether a raw field is null.\n\nParameters\n\npuField: pointer to raw field.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.rawfield_isunset-Tuple{Any}",
    "page": "Home",
    "title": "GDAL.rawfield_isunset",
    "category": "method",
    "text": "OGR_RawField_IsUnset(const OGRField * puField) -> int\n\nReturns whether a raw field is unset.\n\nParameters\n\npuField: pointer to raw field.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.rawfield_setnull-Tuple{Any}",
    "page": "Home",
    "title": "GDAL.rawfield_setnull",
    "category": "method",
    "text": "OGR_RawField_SetNull(OGRField * puField) -> void\n\nMark a raw field as null.\n\nParameters\n\npuField: pointer to raw field.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.rawfield_setunset-Tuple{Any}",
    "page": "Home",
    "title": "GDAL.rawfield_setunset",
    "category": "method",
    "text": "OGR_RawField_SetUnset(OGRField * puField) -> void\n\nMark a raw field as unset.\n\nParameters\n\npuField: pointer to raw field.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.readblock-Tuple{Ref{GDAL.GDALRasterBandH},Integer,Integer,Any}",
    "page": "Home",
    "title": "GDAL.readblock",
    "category": "method",
    "text": "GDALReadBlock(GDALRasterBandH hBand,\n              int nXOff,\n              int nYOff,\n              void * pData) -> CPLErr\n\nRead a block of image data efficiently.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.readozimapfile-NTuple{5,Any}",
    "page": "Home",
    "title": "GDAL.readozimapfile",
    "category": "method",
    "text": "GDALReadOziMapFile(const char *,\n                   double *,\n                   char **,\n                   int *,\n                   GDAL_GCP **) -> int\n\nHelper function for translator implementer wanting support for OZI .map.\n\nParameters\n\npszBaseFilename: filename whose basename will help building the .map filename.\npadfGeoTransform: output geotransform. Must hold 6 doubles.\nppszWKT: output pointer to a string that will be allocated with CPLMalloc().\npnGCPCount: output pointer to GCP count.\nppasGCPs: outputer pointer to an array of GCPs.\n\nReturns\n\nTRUE in case of success, FALSE otherwise.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.readtabfile-NTuple{5,Any}",
    "page": "Home",
    "title": "GDAL.readtabfile",
    "category": "method",
    "text": "GDALReadTabFile(const char *,\n                double *,\n                char **,\n                int *,\n                GDAL_GCP **) -> int\n\nHelper function for translator implementer wanting support for MapInfo .tab files.\n\nParameters\n\npszBaseFilename: filename whose basename will help building the .tab filename.\npadfGeoTransform: output geotransform. Must hold 6 doubles.\nppszWKT: output pointer to a string that will be allocated with CPLMalloc().\npnGCPCount: output pointer to GCP count.\nppasGCPs: outputer pointer to an array of GCPs.\n\nReturns\n\nTRUE in case of success, FALSE otherwise.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.readworldfile-Tuple{Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.readworldfile",
    "category": "method",
    "text": "GDALReadWorldFile(const char *,\n                  const char *,\n                  double *) -> int\n\nRead ESRI world file.\n\nParameters\n\npszBaseFilename: the target raster file.\npszExtension: the extension to use (i.e. \".wld\") or NULL to derive it from the pszBaseFilename\npadfGeoTransform: the six double array into which the geotransformation should be placed.\n\nReturns\n\nTRUE on success or FALSE on failure.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.reference-Tuple{Ref{GDAL.OGRDataSourceH}}",
    "page": "Home",
    "title": "GDAL.reference",
    "category": "method",
    "text": "OGR_DS_Reference(OGRDataSourceH hDataSource) -> int\n\n\n\n\n\n"
},

{
    "location": "#GDAL.reference-Tuple{Ref{GDAL.OGRFeatureDefnH}}",
    "page": "Home",
    "title": "GDAL.reference",
    "category": "method",
    "text": "OGR_FD_Reference(OGRFeatureDefnH hDefn) -> int\n\nIncrements the reference count by one.\n\nParameters\n\nhDefn: handle to the feature definition on witch OGRFeature are based on.\n\nReturns\n\nthe updated reference count.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.reference-Tuple{Ref{GDAL.OGRLayerH}}",
    "page": "Home",
    "title": "GDAL.reference",
    "category": "method",
    "text": "OGR_L_Reference(OGRLayerH hLayer) -> int\n\n\n\n\n\n"
},

{
    "location": "#GDAL.reference-Tuple{Ref{GDAL.OGRSpatialReferenceH}}",
    "page": "Home",
    "title": "GDAL.reference",
    "category": "method",
    "text": "OSRReference(OGRSpatialReferenceH hSRS) -> int\n\nIncrements the reference count by one.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.referencedataset-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALDatasetH}",
    "page": "Home",
    "title": "GDAL.referencedataset",
    "category": "method",
    "text": "GDALReferenceDataset(GDALDatasetH hDataset) -> int\n\nAdd one to dataset reference count.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.regenerateoverviews-Tuple{Ref{GDAL.GDALRasterBandH},Integer,Any,Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.regenerateoverviews",
    "category": "method",
    "text": "GDALRegenerateOverviews(GDALRasterBandH hSrcBand,\n                        int nOverviewCount,\n                        GDALRasterBandH * pahOverviewBands,\n                        const char * pszResampling,\n                        GDALProgressFunc pfnProgress,\n                        void * pProgressData) -> CPLErr\n\nGenerate downsampled overviews.\n\nParameters\n\nhSrcBand: the source (base level) band.\nnOverviewCount: the number of downsampled bands being generated.\npahOvrBands: the list of downsampled bands to be generated.\npszResampling: Resampling algorithm (e.g. \"AVERAGE\").\npfnProgress: progress report function.\npProgressData: progress function callback data.\n\nReturns\n\nCENone on success or CEFailure on failure.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.registerall-Tuple{}",
    "page": "Home",
    "title": "GDAL.registerall",
    "category": "method",
    "text": "OGRRegisterAll(void) -> void\n\nRegister all drivers.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.registerdriver-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALDriverH}",
    "page": "Home",
    "title": "GDAL.registerdriver",
    "category": "method",
    "text": "GDALRegisterDriver(GDALDriverH hDriver) -> int\n\nRegister a driver for use.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.release-Tuple{Ref{GDAL.OGRFeatureDefnH}}",
    "page": "Home",
    "title": "GDAL.release",
    "category": "method",
    "text": "OGR_FD_Release(OGRFeatureDefnH hDefn) -> void\n\nDrop a reference, and destroy if unreferenced.\n\nParameters\n\nhDefn: handle to the feature definition to be released.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.release-Tuple{Ref{GDAL.OGRSpatialReferenceH}}",
    "page": "Home",
    "title": "GDAL.release",
    "category": "method",
    "text": "OSRRelease(OGRSpatialReferenceH hSRS) -> void\n\nDecrements the reference count by one, and destroy if zero.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.releasedataset-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALDatasetH}",
    "page": "Home",
    "title": "GDAL.releasedataset",
    "category": "method",
    "text": "GDALReleaseDataset(GDALDatasetH hDataset) -> int\n\nDrop a reference to this object, and destroy if no longer referenced.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.releasedatasource-Tuple{Ref{GDAL.OGRDataSourceH}}",
    "page": "Home",
    "title": "GDAL.releasedatasource",
    "category": "method",
    "text": "OGRReleaseDataSource(OGRDataSourceH) -> OGRErr\n\nDrop a reference to this datasource, and if the reference count drops to zero close (destroy) the datasource.\n\nParameters\n\nhDS: handle to the data source to release\n\nReturns\n\nOGRERR_NONE on success or an error code.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.releaseresultset-Tuple{Ref{GDAL.OGRDataSourceH},Ref{GDAL.OGRLayerH}}",
    "page": "Home",
    "title": "GDAL.releaseresultset",
    "category": "method",
    "text": "OGR_DS_ReleaseResultSet(OGRDataSourceH,\n                        OGRLayerH) -> void\n\nRelease results of OGRDSExecuteSQL().\n\nParameters\n\nhDS: an handle to the data source on which was executed an SQL query.\nhLayer: handle to the result of a previous OGRDSExecuteSQL() call.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.removegeometry-Tuple{Ref{GDAL.OGRGeometryH},Integer,Integer}",
    "page": "Home",
    "title": "GDAL.removegeometry",
    "category": "method",
    "text": "OGR_G_RemoveGeometry(OGRGeometryH hGeom,\n                     int iGeom,\n                     int bDelete) -> OGRErr\n\nRemove a geometry from an exiting geometry container.\n\nParameters\n\nhGeom: the existing geometry to delete from.\niGeom: the index of the geometry to delete. A value of -1 is a special flag meaning that all geometries should be removed.\nbDelete: if TRUE the geometry will be destroyed, otherwise it will not. The default is TRUE as the existing geometry is considered to own the geometries in it.\n\nReturns\n\nOGRERRNONE if successful, or OGRERRFAILURE if the index is out of range.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.renamedataset-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALDriverH,Any,Any}",
    "page": "Home",
    "title": "GDAL.renamedataset",
    "category": "method",
    "text": "GDALRenameDataset(GDALDriverH hDriver,\n                  const char * pszNewName,\n                  const char * pszOldName) -> CPLErr\n\nRename a dataset.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.reorderfield-Tuple{Ref{GDAL.OGRLayerH},Integer,Integer}",
    "page": "Home",
    "title": "GDAL.reorderfield",
    "category": "method",
    "text": "OGR_L_ReorderField(OGRLayerH,\n                   int iOldFieldPos,\n                   int iNewFieldPos) -> OGRErr\n\nReorder an existing field on a layer.\n\nParameters\n\nhLayer: handle to the layer.\niOldFieldPos: previous position of the field to move. Must be in the range [0,GetFieldCount()-1].\niNewFieldPos: new position of the field to move. Must be in the range [0,GetFieldCount()-1].\n\nReturns\n\nOGRERR_NONE on success.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.reorderfielddefns-Tuple{Ref{GDAL.OGRFeatureDefnH},Any}",
    "page": "Home",
    "title": "GDAL.reorderfielddefns",
    "category": "method",
    "text": "OGR_FD_ReorderFieldDefns(OGRFeatureDefnH hDefn,\n                         int * panMap) -> OGRErr\n\nReorder the field definitions in the array of the feature definition.\n\nParameters\n\nhDefn: handle to the feature definition.\npanMap: an array of GetFieldCount() elements which is a permutation of [0, GetFieldCount()-1]. panMap is such that, for each field definition at position i after reordering, its position before reordering was panMap[i].\n\nReturns\n\nOGRERR_NONE in case of success.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.reorderfields-Tuple{Ref{GDAL.OGRLayerH},Any}",
    "page": "Home",
    "title": "GDAL.reorderfields",
    "category": "method",
    "text": "OGR_L_ReorderFields(OGRLayerH,\n                    int * panMap) -> OGRErr\n\nReorder all the fields of a layer.\n\nParameters\n\nhLayer: handle to the layer.\npanMap: an array of GetLayerDefn()->OGRFeatureDefn::GetFieldCount() elements which is a permutation of [0, GetLayerDefn()->OGRFeatureDefn::GetFieldCount()-1].\n\nReturns\n\nOGRERR_NONE on success.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.reprojectiontransform-Tuple{Any,Integer,Integer,Any,Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.reprojectiontransform",
    "category": "method",
    "text": "GDALReprojectionTransform(void * pTransformArg,\n                          int bDstToSrc,\n                          int nPointCount,\n                          double * padfX,\n                          double * padfY,\n                          double * padfZ,\n                          int * panSuccess) -> int\n\nPerform reprojection transformation.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.resetreading-Tuple{Ref{GDAL.OGRLayerH}}",
    "page": "Home",
    "title": "GDAL.resetreading",
    "category": "method",
    "text": "OGR_L_ResetReading(OGRLayerH) -> void\n\nReset feature reading to start on the first feature.\n\nParameters\n\nhLayer: handle to the layer on which features are read.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.resetstylestringreading-Tuple{Ref{GDAL.OGRStyleTableH}}",
    "page": "Home",
    "title": "GDAL.resetstylestringreading",
    "category": "method",
    "text": "OGR_STBL_ResetStyleStringReading(OGRStyleTableH hStyleTable) -> void\n\nReset the next style pointer to 0.\n\nParameters\n\nhStyleTable: handle to the style table.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.rollbacktransaction-Tuple{Ref{GDAL.OGRLayerH}}",
    "page": "Home",
    "title": "GDAL.rollbacktransaction",
    "category": "method",
    "text": "OGR_L_RollbackTransaction(OGRLayerH) -> OGRErr\n\nFor datasources which support transactions, RollbackTransaction will roll back a datasource to its state before the start of the current transaction.\n\nParameters\n\nhLayer: handle to the layer\n\nReturns\n\nOGRERR_NONE on success.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.rpcinfotomd-Tuple{Any}",
    "page": "Home",
    "title": "GDAL.rpcinfotomd",
    "category": "method",
    "text": "RPCInfoToMD(GDALRPCInfo * psRPCInfo) -> char **\n\n\n\n\n\n"
},

{
    "location": "#GDAL.rpctransform-Tuple{Any,Integer,Integer,Any,Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.rpctransform",
    "category": "method",
    "text": "GDALRPCTransform(void * pTransformArg,\n                 int bDstToSrc,\n                 int nPointCount,\n                 double * x,\n                 double * y,\n                 double * z,\n                 int * panSuccess) -> int\n\nRPC transform.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.savestyletable-Tuple{Ref{GDAL.OGRStyleTableH},Any}",
    "page": "Home",
    "title": "GDAL.savestyletable",
    "category": "method",
    "text": "OGR_STBL_SaveStyleTable(OGRStyleTableH hStyleTable,\n                        const char * pszFilename) -> int\n\nSave a style table to a file.\n\nParameters\n\nhStyleTable: handle to the style table.\npszFilename: the name of the file to save to.\n\nReturns\n\nTRUE on success, FALSE on error\n\n\n\n\n\n"
},

{
    "location": "#GDAL.segmentize-Tuple{Ref{GDAL.OGRGeometryH},Real}",
    "page": "Home",
    "title": "GDAL.segmentize",
    "category": "method",
    "text": "OGR_G_Segmentize(OGRGeometryH hGeom,\n                 double dfMaxLength) -> void\n\nModify the geometry such it has no segment longer then the given distance.\n\nParameters\n\nhGeom: handle on the geometry to segmentize\ndfMaxLength: the maximum distance between 2 points after segmentization\n\n\n\n\n\n"
},

{
    "location": "#GDAL.serializetransformer-Tuple{Ref{GDAL.GDALTransformerFunc},Any}",
    "page": "Home",
    "title": "GDAL.serializetransformer",
    "category": "method",
    "text": "GDALSerializeTransformer(GDALTransformerFunc,\n                         void * pTransformArg) -> CPLXMLNode *\n\n\n\n\n\n"
},

{
    "location": "#GDAL.set-Tuple{Ref{GDAL.OGRFieldDefnH},Any,GDAL.OGRFieldType,Integer,Integer,GDAL.OGRJustification}",
    "page": "Home",
    "title": "GDAL.set",
    "category": "method",
    "text": "OGR_Fld_Set(OGRFieldDefnH hDefn,\n            const char * pszNameIn,\n            OGRFieldType eTypeIn,\n            int nWidthIn,\n            int nPrecisionIn,\n            OGRJustification eJustifyIn) -> void\n\nSet defining parameters for a field in one call.\n\nParameters\n\nhDefn: handle to the field definition to set to.\npszNameIn: the new name to assign.\neTypeIn: the new type (one of the OFT values like OFTInteger).\nnWidthIn: the preferred formatting width. Defaults to zero indicating undefined.\nnPrecisionIn: number of decimals places for formatting, defaults to zero indicating undefined.\neJustifyIn: the formatting justification (OJLeft or OJRight), defaults to OJUndefined.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.set3d-Tuple{Ref{GDAL.OGRGeometryH},Integer}",
    "page": "Home",
    "title": "GDAL.set3d",
    "category": "method",
    "text": "OGR_G_Set3D(OGRGeometryH hGeom,\n            int bIs3D) -> void\n\nAdd or remove the Z coordinate dimension.\n\nParameters\n\nhGeom: handle on the geometry to set or unset the Z dimension.\nbIs3D: Should the geometry have a Z dimension, either TRUE or FALSE.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setacea-Tuple{Ref{GDAL.OGRSpatialReferenceH},Real,Real,Real,Real,Real,Real}",
    "page": "Home",
    "title": "GDAL.setacea",
    "category": "method",
    "text": "OSRSetACEA(OGRSpatialReferenceH hSRS,\n           double dfStdP1,\n           double dfStdP2,\n           double dfCenterLat,\n           double dfCenterLong,\n           double dfFalseEasting,\n           double dfFalseNorthing) -> OGRErr\n\nAlbers Conic Equal Area.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setae-Tuple{Ref{GDAL.OGRSpatialReferenceH},Real,Real,Real,Real}",
    "page": "Home",
    "title": "GDAL.setae",
    "category": "method",
    "text": "OSRSetAE(OGRSpatialReferenceH hSRS,\n         double dfCenterLat,\n         double dfCenterLong,\n         double dfFalseEasting,\n         double dfFalseNorthing) -> OGRErr\n\nAzimuthal Equidistant.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setangularunits-Tuple{Ref{GDAL.OGRSpatialReferenceH},Any,Real}",
    "page": "Home",
    "title": "GDAL.setangularunits",
    "category": "method",
    "text": "OSRSetAngularUnits(OGRSpatialReferenceH hSRS,\n                   const char * pszUnits,\n                   double dfInRadians) -> OGRErr\n\nSet the angular units for the geographic coordinate system.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setattributefilter-Tuple{Ref{GDAL.OGRLayerH},Any}",
    "page": "Home",
    "title": "GDAL.setattributefilter",
    "category": "method",
    "text": "OGR_L_SetAttributeFilter(OGRLayerH,\n                         const char *) -> OGRErr\n\nSet a new attribute query.\n\nParameters\n\nhLayer: handle to the layer on which attribute query will be executed.\npszQuery: query in restricted SQL WHERE format, or NULL to clear the current query.\n\nReturns\n\nOGRERR_NONE if successfully installed, or an error code if the query expression is in error, or some other failure occurs.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setattrvalue-Tuple{Ref{GDAL.OGRSpatialReferenceH},Any,Any}",
    "page": "Home",
    "title": "GDAL.setattrvalue",
    "category": "method",
    "text": "OSRSetAttrValue(OGRSpatialReferenceH hSRS,\n                const char * pszPath,\n                const char * pszValue) -> OGRErr\n\nSet attribute value in spatial reference.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setauthority-Tuple{Ref{GDAL.OGRSpatialReferenceH},Any,Any,Integer}",
    "page": "Home",
    "title": "GDAL.setauthority",
    "category": "method",
    "text": "OSRSetAuthority(OGRSpatialReferenceH hSRS,\n                const char * pszTargetKey,\n                const char * pszAuthority,\n                int nCode) -> OGRErr\n\nSet the authority for a node.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setaxes-Tuple{Ref{GDAL.OGRSpatialReferenceH},Any,Any,GDAL.OGRAxisOrientation,Any,GDAL.OGRAxisOrientation}",
    "page": "Home",
    "title": "GDAL.setaxes",
    "category": "method",
    "text": "OSRSetAxes(OGRSpatialReferenceH hSRS,\n           const char * pszTargetKey,\n           const char * pszXAxisName,\n           OGRAxisOrientation eXAxisOrientation,\n           const char * pszYAxisName,\n           OGRAxisOrientation eYAxisOrientation) -> OGRErr\n\nSet the axes for a coordinate system.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setbonne-Tuple{Ref{GDAL.OGRSpatialReferenceH},Real,Real,Real,Real}",
    "page": "Home",
    "title": "GDAL.setbonne",
    "category": "method",
    "text": "OSRSetBonne(OGRSpatialReferenceH hSRS,\n            double dfStdP1,\n            double dfCentralMeridian,\n            double dfFalseEasting,\n            double dfFalseNorthing) -> OGRErr\n\nBonne.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setcachemax-Tuple{Integer}",
    "page": "Home",
    "title": "GDAL.setcachemax",
    "category": "method",
    "text": "GDALSetCacheMax(int nNewSizeInBytes) -> void\n\nSet maximum cache memory.\n\nParameters\n\nnNewSizeInBytes: the maximum number of bytes for caching.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setcachemax64-Tuple{Integer}",
    "page": "Home",
    "title": "GDAL.setcachemax64",
    "category": "method",
    "text": "GDALSetCacheMax64(GIntBig nNewSizeInBytes) -> void\n\nSet maximum cache memory.\n\nParameters\n\nnNewSizeInBytes: the maximum number of bytes for caching.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setcea-Tuple{Ref{GDAL.OGRSpatialReferenceH},Real,Real,Real,Real}",
    "page": "Home",
    "title": "GDAL.setcea",
    "category": "method",
    "text": "OSRSetCEA(OGRSpatialReferenceH hSRS,\n          double dfStdP1,\n          double dfCentralMeridian,\n          double dfFalseEasting,\n          double dfFalseNorthing) -> OGRErr\n\nCylindrical Equal Area.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setcolorentry-Tuple{Ref{GDAL.GDALColorTableH},Integer,Any}",
    "page": "Home",
    "title": "GDAL.setcolorentry",
    "category": "method",
    "text": "GDALSetColorEntry(GDALColorTableH hTable,\n                  int i,\n                  const GDALColorEntry * poEntry) -> void\n\nSet entry in color table.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setcompoundcs-Tuple{Ref{GDAL.OGRSpatialReferenceH},Any,Ref{GDAL.OGRSpatialReferenceH},Ref{GDAL.OGRSpatialReferenceH}}",
    "page": "Home",
    "title": "GDAL.setcompoundcs",
    "category": "method",
    "text": "OSRSetCompoundCS(OGRSpatialReferenceH hSRS,\n                 const char * pszName,\n                 OGRSpatialReferenceH hHorizSRS,\n                 OGRSpatialReferenceH hVertSRS) -> OGRErr\n\nSetup a compound coordinate system.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setcoordinatedimension-Tuple{Ref{GDAL.OGRGeometryH},Integer}",
    "page": "Home",
    "title": "GDAL.setcoordinatedimension",
    "category": "method",
    "text": "OGR_G_SetCoordinateDimension(OGRGeometryH hGeom,\n                             int nNewDimension) -> void\n\nSet the coordinate dimension.\n\nParameters\n\nhGeom: handle on the geometry to set the dimension of the coordinates.\nnNewDimension: New coordinate dimension value, either 2 or 3.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setcs-Tuple{Ref{GDAL.OGRSpatialReferenceH},Real,Real,Real,Real}",
    "page": "Home",
    "title": "GDAL.setcs",
    "category": "method",
    "text": "OSRSetCS(OGRSpatialReferenceH hSRS,\n         double dfCenterLat,\n         double dfCenterLong,\n         double dfFalseEasting,\n         double dfFalseNorthing) -> OGRErr\n\nCassini-Soldner.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setcurrenterrorhandlercatchdebug-Tuple{Integer}",
    "page": "Home",
    "title": "GDAL.setcurrenterrorhandlercatchdebug",
    "category": "method",
    "text": "CPLSetCurrentErrorHandlerCatchDebug(int bCatchDebug) -> void\n\nSet if the current error handler should intercept debug messages, or if they should be processed by the previous handler.\n\nParameters\n\nbCatchDebug: FALSE if the current error handler should not intercept debug messages\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setdefault-Tuple{Ref{GDAL.OGRFieldDefnH},Any}",
    "page": "Home",
    "title": "GDAL.setdefault",
    "category": "method",
    "text": "OGR_Fld_SetDefault(OGRFieldDefnH hDefn,\n                   const char * pszDefault) -> void\n\nSet default field value.\n\nParameters\n\nhDefn: handle to the field definition.\npszDefault: new default field value or NULL pointer.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setdefaulthistogram-Tuple{Ref{GDAL.GDALRasterBandH},Real,Real,Integer,Any}",
    "page": "Home",
    "title": "GDAL.setdefaulthistogram",
    "category": "method",
    "text": "GDALSetDefaultHistogram(GDALRasterBandH hBand,\n                        double dfMin,\n                        double dfMax,\n                        int nBuckets,\n                        int * panHistogram) -> CPLErr\n\nSet default histogram.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setdefaulthistogramex-Tuple{Ref{GDAL.GDALRasterBandH},Real,Real,Integer,Any}",
    "page": "Home",
    "title": "GDAL.setdefaulthistogramex",
    "category": "method",
    "text": "GDALSetDefaultHistogramEx(GDALRasterBandH hBand,\n                          double dfMin,\n                          double dfMax,\n                          int nBuckets,\n                          GUIntBig * panHistogram) -> CPLErr\n\nSet default histogram.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setdefaultrat-Tuple{Ref{GDAL.GDALRasterBandH},Ref{GDAL.GDALRasterAttributeTableH}}",
    "page": "Home",
    "title": "GDAL.setdefaultrat",
    "category": "method",
    "text": "GDALSetDefaultRAT(GDALRasterBandH hBand,\n                  GDALRasterAttributeTableH hRAT) -> CPLErr\n\nSet default Raster Attribute Table.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setdescription-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALMajorObjectH,Any}",
    "page": "Home",
    "title": "GDAL.setdescription",
    "category": "method",
    "text": "GDALSetDescription(GDALMajorObjectH hObject,\n                   const char * pszNewDesc) -> void\n\nSet object description.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setec-Tuple{Ref{GDAL.OGRSpatialReferenceH},Real,Real,Real,Real,Real,Real}",
    "page": "Home",
    "title": "GDAL.setec",
    "category": "method",
    "text": "OSRSetEC(OGRSpatialReferenceH hSRS,\n         double dfStdP1,\n         double dfStdP2,\n         double dfCenterLat,\n         double dfCenterLong,\n         double dfFalseEasting,\n         double dfFalseNorthing) -> OGRErr\n\nEquidistant Conic.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.seteckert-Tuple{Ref{GDAL.OGRSpatialReferenceH},Integer,Real,Real,Real}",
    "page": "Home",
    "title": "GDAL.seteckert",
    "category": "method",
    "text": "OSRSetEckert(OGRSpatialReferenceH hSRS,\n             int nVariation,\n             double dfCentralMeridian,\n             double dfFalseEasting,\n             double dfFalseNorthing) -> OGRErr\n\nEckert I-VI.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.seteckertiv-Tuple{Ref{GDAL.OGRSpatialReferenceH},Real,Real,Real}",
    "page": "Home",
    "title": "GDAL.seteckertiv",
    "category": "method",
    "text": "OSRSetEckertIV(OGRSpatialReferenceH hSRS,\n               double dfCentralMeridian,\n               double dfFalseEasting,\n               double dfFalseNorthing) -> OGRErr\n\nEckert IV.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.seteckertvi-Tuple{Ref{GDAL.OGRSpatialReferenceH},Real,Real,Real}",
    "page": "Home",
    "title": "GDAL.seteckertvi",
    "category": "method",
    "text": "OSRSetEckertVI(OGRSpatialReferenceH hSRS,\n               double dfCentralMeridian,\n               double dfFalseEasting,\n               double dfFalseNorthing) -> OGRErr\n\nEckert VI.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setequirectangular-Tuple{Ref{GDAL.OGRSpatialReferenceH},Real,Real,Real,Real}",
    "page": "Home",
    "title": "GDAL.setequirectangular",
    "category": "method",
    "text": "OSRSetEquirectangular(OGRSpatialReferenceH hSRS,\n                      double dfCenterLat,\n                      double dfCenterLong,\n                      double dfFalseEasting,\n                      double dfFalseNorthing) -> OGRErr\n\nEquirectangular.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setequirectangular2-Tuple{Ref{GDAL.OGRSpatialReferenceH},Real,Real,Real,Real,Real}",
    "page": "Home",
    "title": "GDAL.setequirectangular2",
    "category": "method",
    "text": "OSRSetEquirectangular2(OGRSpatialReferenceH hSRS,\n                       double dfCenterLat,\n                       double dfCenterLong,\n                       double dfStdParallel1,\n                       double dfFalseEasting,\n                       double dfFalseNorthing) -> OGRErr\n\nEquirectangular generalized form.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.seterrorhandler-Tuple{Ref{GDAL.CPLErrorHandler}}",
    "page": "Home",
    "title": "GDAL.seterrorhandler",
    "category": "method",
    "text": "CPLSetErrorHandler(CPLErrorHandler pfnErrorHandlerNew) -> CPLErrorHandler\n\nInstall custom error handler.\n\nParameters\n\npfnErrorHandlerNew: new error handler function.\n\nReturns\n\nreturns the previously installed error handler.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.seterrorhandlerex-Tuple{Ref{GDAL.CPLErrorHandler},Any}",
    "page": "Home",
    "title": "GDAL.seterrorhandlerex",
    "category": "method",
    "text": "CPLSetErrorHandlerEx(CPLErrorHandler pfnErrorHandlerNew,\n                     void * pUserData) -> CPLErrorHandler\n\nInstall custom error handle with user\'s data.\n\nParameters\n\npfnErrorHandlerNew: new error handler function.\npUserData: User data to carry along with the error context.\n\nReturns\n\nreturns the previously installed error handler.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setfeature-Tuple{Ref{GDAL.OGRLayerH},Ref{GDAL.OGRFeatureH}}",
    "page": "Home",
    "title": "GDAL.setfeature",
    "category": "method",
    "text": "OGR_L_SetFeature(OGRLayerH,\n                 OGRFeatureH) -> OGRErr\n\nRewrite an existing feature.\n\nParameters\n\nhLayer: handle to the layer to write the feature.\nhFeat: the feature to write.\n\nReturns\n\nOGRERRNONE if the operation works, otherwise an appropriate error code (e.g OGRERRNONEXISTINGFEATURE if the feature does not exist).\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setfid-Tuple{Ref{GDAL.OGRFeatureH},Integer}",
    "page": "Home",
    "title": "GDAL.setfid",
    "category": "method",
    "text": "OGR_F_SetFID(OGRFeatureH hFeat,\n             GIntBig nFID) -> OGRErr\n\nSet the feature identifier.\n\nParameters\n\nhFeat: handle to the feature to set the feature id to.\nnFID: the new feature identifier value to assign.\n\nReturns\n\nOn success OGRERR_NONE, or on failure some other value.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setfieldbinary-Tuple{Ref{GDAL.OGRFeatureH},Integer,Integer,Any}",
    "page": "Home",
    "title": "GDAL.setfieldbinary",
    "category": "method",
    "text": "OGR_F_SetFieldBinary(OGRFeatureH hFeat,\n                     int iField,\n                     int nBytes,\n                     GByte * pabyData) -> void\n\nSet field to binary data.\n\nParameters\n\nhFeat: handle to the feature that owned the field.\niField: the field to set, from 0 to GetFieldCount()-1.\nnBytes: the number of bytes in pabyData array.\npabyData: the data to apply.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setfielddatetime-Tuple{Ref{GDAL.OGRFeatureH},Integer,Integer,Integer,Integer,Integer,Integer,Integer,Integer}",
    "page": "Home",
    "title": "GDAL.setfielddatetime",
    "category": "method",
    "text": "OGR_F_SetFieldDateTime(OGRFeatureH hFeat,\n                       int iField,\n                       int nYear,\n                       int nMonth,\n                       int nDay,\n                       int nHour,\n                       int nMinute,\n                       int nSecond,\n                       int nTZFlag) -> void\n\nSet field to datetime.\n\nParameters\n\nhFeat: handle to the feature that owned the field.\niField: the field to set, from 0 to GetFieldCount()-1.\nnYear: (including century)\nnMonth: (1-12)\nnDay: (1-31)\nnHour: (0-23)\nnMinute: (0-59)\nnSecond: (0-59)\nnTZFlag: (0=unknown, 1=localtime, 100=GMT, see data model for details)\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setfielddatetimeex-Tuple{Ref{GDAL.OGRFeatureH},Integer,Integer,Integer,Integer,Integer,Integer,Float32,Integer}",
    "page": "Home",
    "title": "GDAL.setfielddatetimeex",
    "category": "method",
    "text": "OGR_F_SetFieldDateTimeEx(OGRFeatureH hFeat,\n                         int iField,\n                         int nYear,\n                         int nMonth,\n                         int nDay,\n                         int nHour,\n                         int nMinute,\n                         float fSecond,\n                         int nTZFlag) -> void\n\nSet field to datetime.\n\nParameters\n\nhFeat: handle to the feature that owned the field.\niField: the field to set, from 0 to GetFieldCount()-1.\nnYear: (including century)\nnMonth: (1-12)\nnDay: (1-31)\nnHour: (0-23)\nnMinute: (0-59)\nfSecond: (0-59, with millisecond accuracy)\nnTZFlag: (0=unknown, 1=localtime, 100=GMT, see data model for details)\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setfielddouble-Tuple{Ref{GDAL.OGRFeatureH},Integer,Real}",
    "page": "Home",
    "title": "GDAL.setfielddouble",
    "category": "method",
    "text": "OGR_F_SetFieldDouble(OGRFeatureH hFeat,\n                     int iField,\n                     double dfValue) -> void\n\nSet field to double value.\n\nParameters\n\nhFeat: handle to the feature that owned the field.\niField: the field to fetch, from 0 to GetFieldCount()-1.\ndfValue: the value to assign.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setfielddoublelist-Tuple{Ref{GDAL.OGRFeatureH},Integer,Integer,Any}",
    "page": "Home",
    "title": "GDAL.setfielddoublelist",
    "category": "method",
    "text": "OGR_F_SetFieldDoubleList(OGRFeatureH hFeat,\n                         int iField,\n                         int nCount,\n                         double * padfValues) -> void\n\nSet field to list of doubles value.\n\nParameters\n\nhFeat: handle to the feature that owned the field.\niField: the field to set, from 0 to GetFieldCount()-1.\nnCount: the number of values in the list being assigned.\npadfValues: the values to assign.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setfieldinteger-Tuple{Ref{GDAL.OGRFeatureH},Integer,Integer}",
    "page": "Home",
    "title": "GDAL.setfieldinteger",
    "category": "method",
    "text": "OGR_F_SetFieldInteger(OGRFeatureH hFeat,\n                      int iField,\n                      int nValue) -> void\n\nSet field to integer value.\n\nParameters\n\nhFeat: handle to the feature that owned the field.\niField: the field to fetch, from 0 to GetFieldCount()-1.\nnValue: the value to assign.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setfieldinteger64-Tuple{Ref{GDAL.OGRFeatureH},Integer,Integer}",
    "page": "Home",
    "title": "GDAL.setfieldinteger64",
    "category": "method",
    "text": "OGR_F_SetFieldInteger64(OGRFeatureH hFeat,\n                        int iField,\n                        GIntBig nValue) -> void\n\nSet field to 64 bit integer value.\n\nParameters\n\nhFeat: handle to the feature that owned the field.\niField: the field to fetch, from 0 to GetFieldCount()-1.\nnValue: the value to assign.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setfieldinteger64list-Tuple{Ref{GDAL.OGRFeatureH},Integer,Integer,Any}",
    "page": "Home",
    "title": "GDAL.setfieldinteger64list",
    "category": "method",
    "text": "OGR_F_SetFieldInteger64List(OGRFeatureH hFeat,\n                            int iField,\n                            int nCount,\n                            const GIntBig * panValues) -> void\n\nSet field to list of 64 bit integers value.\n\nParameters\n\nhFeat: handle to the feature that owned the field.\niField: the field to set, from 0 to GetFieldCount()-1.\nnCount: the number of values in the list being assigned.\npanValues: the values to assign.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setfieldintegerlist-Tuple{Ref{GDAL.OGRFeatureH},Integer,Integer,Any}",
    "page": "Home",
    "title": "GDAL.setfieldintegerlist",
    "category": "method",
    "text": "OGR_F_SetFieldIntegerList(OGRFeatureH hFeat,\n                          int iField,\n                          int nCount,\n                          int * panValues) -> void\n\nSet field to list of integers value.\n\nParameters\n\nhFeat: handle to the feature that owned the field.\niField: the field to set, from 0 to GetFieldCount()-1.\nnCount: the number of values in the list being assigned.\npanValues: the values to assign.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setfieldnull-Tuple{Ref{GDAL.OGRFeatureH},Integer}",
    "page": "Home",
    "title": "GDAL.setfieldnull",
    "category": "method",
    "text": "OGR_F_SetFieldNull(OGRFeatureH hFeat,\n                   int iField) -> void\n\nClear a field, marking it as null.\n\nParameters\n\nhFeat: handle to the feature on which the field is.\niField: the field to set to null.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setfieldraw-Tuple{Ref{GDAL.OGRFeatureH},Integer,Any}",
    "page": "Home",
    "title": "GDAL.setfieldraw",
    "category": "method",
    "text": "OGR_F_SetFieldRaw(OGRFeatureH hFeat,\n                  int iField,\n                  OGRField * psValue) -> void\n\nSet field.\n\nParameters\n\nhFeat: handle to the feature that owned the field.\niField: the field to fetch, from 0 to GetFieldCount()-1.\npsValue: handle on the value to assign.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setfieldstring-Tuple{Ref{GDAL.OGRFeatureH},Integer,Any}",
    "page": "Home",
    "title": "GDAL.setfieldstring",
    "category": "method",
    "text": "OGR_F_SetFieldString(OGRFeatureH hFeat,\n                     int iField,\n                     const char * pszValue) -> void\n\nSet field to string value.\n\nParameters\n\nhFeat: handle to the feature that owned the field.\niField: the field to fetch, from 0 to GetFieldCount()-1.\npszValue: the value to assign.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setfieldstringlist-Tuple{Ref{GDAL.OGRFeatureH},Integer,Any}",
    "page": "Home",
    "title": "GDAL.setfieldstringlist",
    "category": "method",
    "text": "OGR_F_SetFieldStringList(OGRFeatureH hFeat,\n                         int iField,\n                         char ** papszValues) -> void\n\nSet field to list of strings value.\n\nParameters\n\nhFeat: handle to the feature that owned the field.\niField: the field to set, from 0 to GetFieldCount()-1.\npapszValues: the values to assign.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setfrom-Tuple{Ref{GDAL.OGRFeatureH},Ref{GDAL.OGRFeatureH},Integer}",
    "page": "Home",
    "title": "GDAL.setfrom",
    "category": "method",
    "text": "OGR_F_SetFrom(OGRFeatureH hFeat,\n              OGRFeatureH hOtherFeat,\n              int bForgiving) -> OGRErr\n\nSet one feature from another.\n\nParameters\n\nhFeat: handle to the feature to set to.\nhOtherFeat: handle to the feature from which geometry, and field values will be copied.\nbForgiving: TRUE if the operation should continue despite lacking output fields matching some of the source fields.\n\nReturns\n\nOGRERR_NONE if the operation succeeds, even if some values are not transferred, otherwise an error code.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setfromuserinput-Tuple{Ref{GDAL.OGRSpatialReferenceH},Any}",
    "page": "Home",
    "title": "GDAL.setfromuserinput",
    "category": "method",
    "text": "OSRSetFromUserInput(OGRSpatialReferenceH hSRS,\n                    const char * pszDef) -> OGRErr\n\nSet spatial reference from various text formats.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setfromwithmap-Tuple{Ref{GDAL.OGRFeatureH},Ref{GDAL.OGRFeatureH},Integer,Any}",
    "page": "Home",
    "title": "GDAL.setfromwithmap",
    "category": "method",
    "text": "OGR_F_SetFromWithMap(OGRFeatureH hFeat,\n                     OGRFeatureH hOtherFeat,\n                     int bForgiving,\n                     int * panMap) -> OGRErr\n\nSet one feature from another.\n\nParameters\n\nhFeat: handle to the feature to set to.\nhOtherFeat: handle to the feature from which geometry, and field values will be copied.\npanMap: Array of the indices of the destination feature\'s fields stored at the corresponding index of the source feature\'s fields. A value of -1 should be used to ignore the source\'s field. The array should not be NULL and be as long as the number of fields in the source feature.\nbForgiving: TRUE if the operation should continue despite lacking output fields matching some of the source fields.\n\nReturns\n\nOGRERR_NONE if the operation succeeds, even if some values are not transferred, otherwise an error code.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setgaussschreibertmercator-Tuple{Ref{GDAL.OGRSpatialReferenceH},Real,Real,Real,Real,Real}",
    "page": "Home",
    "title": "GDAL.setgaussschreibertmercator",
    "category": "method",
    "text": "OSRSetGaussSchreiberTMercator(OGRSpatialReferenceH hSRS,\n                              double dfCenterLat,\n                              double dfCenterLong,\n                              double dfScale,\n                              double dfFalseEasting,\n                              double dfFalseNorthing) -> OGRErr\n\nGauss Schreiber Transverse Mercator.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setgcps-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALDatasetH,Integer,Any,Any}",
    "page": "Home",
    "title": "GDAL.setgcps",
    "category": "method",
    "text": "GDALSetGCPs(GDALDatasetH hDS,\n            int nGCPCount,\n            const GDAL_GCP * pasGCPList,\n            const char * pszGCPProjection) -> CPLErr\n\nAssign GCPs.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setgenerate_db2_v72_byte_order-Tuple{Integer}",
    "page": "Home",
    "title": "GDAL.setgenerate_db2_v72_byte_order",
    "category": "method",
    "text": "OGRSetGenerate_DB2_V72_BYTE_ORDER(int bGenerate_DB2_V72_BYTE_ORDER) -> OGRErr\n\nSpecial entry point to enable the hack for generating DB2 V7.2 style WKB.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setgenimgprojtransformerdstgeotransform-Tuple{Any,Any}",
    "page": "Home",
    "title": "GDAL.setgenimgprojtransformerdstgeotransform",
    "category": "method",
    "text": "GDALSetGenImgProjTransformerDstGeoTransform(void * hTransformArg,\n                                            const double * padfGeoTransform) -> void\n\nSet GenImgProj output geotransform.\n\nParameters\n\nhTransformArg: the handle to update.\npadfGeoTransform: the destination geotransform to apply (six doubles).\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setgeoccs-Tuple{Ref{GDAL.OGRSpatialReferenceH},Any}",
    "page": "Home",
    "title": "GDAL.setgeoccs",
    "category": "method",
    "text": "OSRSetGeocCS(OGRSpatialReferenceH hSRS,\n             const char * pszName) -> OGRErr\n\nSet the user visible PROJCS name.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setgeogcs-Tuple{Ref{GDAL.OGRSpatialReferenceH},Any,Any,Any,Real,Real,Any,Real,Any,Real}",
    "page": "Home",
    "title": "GDAL.setgeogcs",
    "category": "method",
    "text": "OSRSetGeogCS(OGRSpatialReferenceH hSRS,\n             const char * pszGeogName,\n             const char * pszDatumName,\n             const char * pszSpheroidName,\n             double dfSemiMajor,\n             double dfInvFlattening,\n             const char * pszPMName,\n             double dfPMOffset,\n             const char * pszAngularUnits,\n             double dfConvertToRadians) -> OGRErr\n\nSet geographic coordinate system.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setgeometry-Tuple{Ref{GDAL.OGRFeatureH},Ref{GDAL.OGRGeometryH}}",
    "page": "Home",
    "title": "GDAL.setgeometry",
    "category": "method",
    "text": "OGR_F_SetGeometry(OGRFeatureH hFeat,\n                  OGRGeometryH hGeom) -> OGRErr\n\nSet feature geometry.\n\nParameters\n\nhFeat: handle to the feature on which new geometry is applied to.\nhGeom: handle to the new geometry to apply to feature.\n\nReturns\n\nOGRERRNONE if successful, or OGRUNSUPPORTEDGEOMETRYTYPE if the geometry type is illegal for the OGRFeatureDefn (checking not yet implemented).\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setgeometrydirectly-Tuple{Ref{GDAL.OGRFeatureH},Ref{GDAL.OGRGeometryH}}",
    "page": "Home",
    "title": "GDAL.setgeometrydirectly",
    "category": "method",
    "text": "OGR_F_SetGeometryDirectly(OGRFeatureH hFeat,\n                          OGRGeometryH hGeom) -> OGRErr\n\nSet feature geometry.\n\nParameters\n\nhFeat: handle to the feature on which to apply the geometry.\nhGeom: handle to the new geometry to apply to feature.\n\nReturns\n\nOGRERRNONE if successful, or OGRUNSUPPORTEDGEOMETRYTYPE if the geometry type is illegal for the OGRFeatureDefn (checking not yet implemented).\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setgeometryignored-Tuple{Ref{GDAL.OGRFeatureDefnH},Integer}",
    "page": "Home",
    "title": "GDAL.setgeometryignored",
    "category": "method",
    "text": "OGR_FD_SetGeometryIgnored(OGRFeatureDefnH hDefn,\n                          int bIgnore) -> void\n\nSet whether the geometry can be omitted when fetching features.\n\nParameters\n\nhDefn: handle to the feature definition on witch OGRFeature are based on.\nbIgnore: ignore state\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setgeomfield-Tuple{Ref{GDAL.OGRFeatureH},Integer,Ref{GDAL.OGRGeometryH}}",
    "page": "Home",
    "title": "GDAL.setgeomfield",
    "category": "method",
    "text": "OGR_F_SetGeomField(OGRFeatureH hFeat,\n                   int iField,\n                   OGRGeometryH hGeom) -> OGRErr\n\nSet feature geometry of a specified geometry field.\n\nParameters\n\nhFeat: handle to the feature on which new geometry is applied to.\niField: geometry field to set.\nhGeom: handle to the new geometry to apply to feature.\n\nReturns\n\nOGRERRNONE if successful, or OGRUNSUPPORTEDGEOMETRYTYPE if the geometry type is illegal for the OGRFeatureDefn (checking not yet implemented).\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setgeomfielddirectly-Tuple{Ref{GDAL.OGRFeatureH},Integer,Ref{GDAL.OGRGeometryH}}",
    "page": "Home",
    "title": "GDAL.setgeomfielddirectly",
    "category": "method",
    "text": "OGR_F_SetGeomFieldDirectly(OGRFeatureH hFeat,\n                           int iField,\n                           OGRGeometryH hGeom) -> OGRErr\n\nSet feature geometry of a specified geometry field.\n\nParameters\n\nhFeat: handle to the feature on which to apply the geometry.\niField: geometry field to set.\nhGeom: handle to the new geometry to apply to feature.\n\nReturns\n\nOGRERRNONE if successful, or OGRERRFAILURE if the index is invalid, or OGRUNSUPPORTEDGEOMETRY_TYPE if the geometry type is illegal for the OGRFeatureDefn (checking not yet implemented).\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setgeomtype-Tuple{Ref{GDAL.OGRFeatureDefnH},GDAL.OGRwkbGeometryType}",
    "page": "Home",
    "title": "GDAL.setgeomtype",
    "category": "method",
    "text": "OGR_FD_SetGeomType(OGRFeatureDefnH hDefn,\n                   OGRwkbGeometryType eType) -> void\n\nAssign the base geometry type for the passed layer (the same as the feature definition).\n\nParameters\n\nhDefn: handle to the layer or feature definition to set the geometry type to.\neType: the new type to assign.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setgeos-Tuple{Ref{GDAL.OGRSpatialReferenceH},Real,Real,Real,Real}",
    "page": "Home",
    "title": "GDAL.setgeos",
    "category": "method",
    "text": "OSRSetGEOS(OGRSpatialReferenceH hSRS,\n           double dfCentralMeridian,\n           double dfSatelliteHeight,\n           double dfFalseEasting,\n           double dfFalseNorthing) -> OGRErr\n\nGEOS - Geostationary Satellite View.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setgeotransform-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALDatasetH,Any}",
    "page": "Home",
    "title": "GDAL.setgeotransform",
    "category": "method",
    "text": "GDALSetGeoTransform(GDALDatasetH hDS,\n                    double * padfTransform) -> CPLErr\n\nSet the affine transformation coefficients.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setgh-Tuple{Ref{GDAL.OGRSpatialReferenceH},Real,Real,Real}",
    "page": "Home",
    "title": "GDAL.setgh",
    "category": "method",
    "text": "OSRSetGH(OGRSpatialReferenceH hSRS,\n         double dfCentralMeridian,\n         double dfFalseEasting,\n         double dfFalseNorthing) -> OGRErr\n\nGoode Homolosine.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setgnomonic-Tuple{Ref{GDAL.OGRSpatialReferenceH},Real,Real,Real,Real}",
    "page": "Home",
    "title": "GDAL.setgnomonic",
    "category": "method",
    "text": "OSRSetGnomonic(OGRSpatialReferenceH hSRS,\n               double dfCenterLat,\n               double dfCenterLong,\n               double dfFalseEasting,\n               double dfFalseNorthing) -> OGRErr\n\nGnomonic.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setgs-Tuple{Ref{GDAL.OGRSpatialReferenceH},Real,Real,Real}",
    "page": "Home",
    "title": "GDAL.setgs",
    "category": "method",
    "text": "OSRSetGS(OGRSpatialReferenceH hSRS,\n         double dfCentralMeridian,\n         double dfFalseEasting,\n         double dfFalseNorthing) -> OGRErr\n\nGall Stereograpic.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.sethom-Tuple{Ref{GDAL.OGRSpatialReferenceH},Real,Real,Real,Real,Real,Real,Real}",
    "page": "Home",
    "title": "GDAL.sethom",
    "category": "method",
    "text": "OSRSetHOM(OGRSpatialReferenceH hSRS,\n          double dfCenterLat,\n          double dfCenterLong,\n          double dfAzimuth,\n          double dfRectToSkew,\n          double dfScale,\n          double dfFalseEasting,\n          double dfFalseNorthing) -> OGRErr\n\nSet a Hotine Oblique Mercator projection using azimuth angle.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.sethom2pno-Tuple{Ref{GDAL.OGRSpatialReferenceH},Real,Real,Real,Real,Real,Real,Real,Real}",
    "page": "Home",
    "title": "GDAL.sethom2pno",
    "category": "method",
    "text": "OSRSetHOM2PNO(OGRSpatialReferenceH hSRS,\n              double dfCenterLat,\n              double dfLat1,\n              double dfLong1,\n              double dfLat2,\n              double dfLong2,\n              double dfScale,\n              double dfFalseEasting,\n              double dfFalseNorthing) -> OGRErr\n\nSet a Hotine Oblique Mercator projection using two points on projection centerline.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.sethomac-Tuple{Ref{GDAL.OGRSpatialReferenceH},Real,Real,Real,Real,Real,Real,Real}",
    "page": "Home",
    "title": "GDAL.sethomac",
    "category": "method",
    "text": "OSRSetHOMAC(OGRSpatialReferenceH hSRS,\n            double dfCenterLat,\n            double dfCenterLong,\n            double dfAzimuth,\n            double dfRectToSkew,\n            double dfScale,\n            double dfFalseEasting,\n            double dfFalseNorthing) -> OGRErr\n\nSet an Oblique Mercator projection using azimuth angle.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setigh-Tuple{Ref{GDAL.OGRSpatialReferenceH}}",
    "page": "Home",
    "title": "GDAL.setigh",
    "category": "method",
    "text": "OSRSetIGH(OGRSpatialReferenceH hSRS) -> OGRErr\n\nInterrupted Goode Homolosine.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setignored-Tuple{Ref{GDAL.OGRFieldDefnH},Integer}",
    "page": "Home",
    "title": "GDAL.setignored",
    "category": "method",
    "text": "OGR_Fld_SetIgnored(OGRFieldDefnH hDefn,\n                   int ignore) -> void\n\nSet whether this field should be omitted when fetching features.\n\nParameters\n\nhDefn: handle to the field definition\nignore: ignore state\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setignored-Tuple{Ref{GDAL.OGRGeomFieldDefnH},Integer}",
    "page": "Home",
    "title": "GDAL.setignored",
    "category": "method",
    "text": "OGR_GFld_SetIgnored(OGRGeomFieldDefnH hDefn,\n                    int ignore) -> void\n\nSet whether this field should be omitted when fetching features.\n\nParameters\n\nhDefn: handle to the geometry field definition\nignore: ignore state\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setignoredfields-Tuple{Ref{GDAL.OGRLayerH},Any}",
    "page": "Home",
    "title": "GDAL.setignoredfields",
    "category": "method",
    "text": "OGR_L_SetIgnoredFields(OGRLayerH,\n                       const char **) -> OGRErr\n\nSet which fields can be omitted when retrieving features from the layer.\n\nParameters\n\npapszFields: an array of field names terminated by NULL item. If NULL is passed, the ignored list is cleared.\n\nReturns\n\nOGRERR_NONE if all field names have been resolved (even if the driver does not support this method)\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setiwmpolyconic-Tuple{Ref{GDAL.OGRSpatialReferenceH},Real,Real,Real,Real,Real}",
    "page": "Home",
    "title": "GDAL.setiwmpolyconic",
    "category": "method",
    "text": "OSRSetIWMPolyconic(OGRSpatialReferenceH hSRS,\n                   double dfLat1,\n                   double dfLat2,\n                   double dfCenterLong,\n                   double dfFalseEasting,\n                   double dfFalseNorthing) -> OGRErr\n\nInternational Map of the World Polyconic.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setjustify-Tuple{Ref{GDAL.OGRFieldDefnH},GDAL.OGRJustification}",
    "page": "Home",
    "title": "GDAL.setjustify",
    "category": "method",
    "text": "OGR_Fld_SetJustify(OGRFieldDefnH hDefn,\n                   OGRJustification eJustify) -> void\n\nSet the justification for this field.\n\nParameters\n\nhDefn: handle to the field definition to set justification to.\neJustify: the new justification.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setkrovak-Tuple{Ref{GDAL.OGRSpatialReferenceH},Real,Real,Real,Real,Real,Real,Real}",
    "page": "Home",
    "title": "GDAL.setkrovak",
    "category": "method",
    "text": "OSRSetKrovak(OGRSpatialReferenceH hSRS,\n             double dfCenterLat,\n             double dfCenterLong,\n             double dfAzimuth,\n             double dfPseudoStdParallel1,\n             double dfScale,\n             double dfFalseEasting,\n             double dfFalseNorthing) -> OGRErr\n\nKrovak Oblique Conic Conformal.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setlaea-Tuple{Ref{GDAL.OGRSpatialReferenceH},Real,Real,Real,Real}",
    "page": "Home",
    "title": "GDAL.setlaea",
    "category": "method",
    "text": "OSRSetLAEA(OGRSpatialReferenceH hSRS,\n           double dfCenterLat,\n           double dfCenterLong,\n           double dfFalseEasting,\n           double dfFalseNorthing) -> OGRErr\n\nLambert Azimuthal Equal-Area.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setlcc-Tuple{Ref{GDAL.OGRSpatialReferenceH},Real,Real,Real,Real,Real,Real}",
    "page": "Home",
    "title": "GDAL.setlcc",
    "category": "method",
    "text": "OSRSetLCC(OGRSpatialReferenceH hSRS,\n          double dfStdP1,\n          double dfStdP2,\n          double dfCenterLat,\n          double dfCenterLong,\n          double dfFalseEasting,\n          double dfFalseNorthing) -> OGRErr\n\nLambert Conformal Conic.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setlcc1sp-Tuple{Ref{GDAL.OGRSpatialReferenceH},Real,Real,Real,Real,Real}",
    "page": "Home",
    "title": "GDAL.setlcc1sp",
    "category": "method",
    "text": "OSRSetLCC1SP(OGRSpatialReferenceH hSRS,\n             double dfCenterLat,\n             double dfCenterLong,\n             double dfScale,\n             double dfFalseEasting,\n             double dfFalseNorthing) -> OGRErr\n\nLambert Conformal Conic 1SP.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setlccb-Tuple{Ref{GDAL.OGRSpatialReferenceH},Real,Real,Real,Real,Real,Real}",
    "page": "Home",
    "title": "GDAL.setlccb",
    "category": "method",
    "text": "OSRSetLCCB(OGRSpatialReferenceH hSRS,\n           double dfStdP1,\n           double dfStdP2,\n           double dfCenterLat,\n           double dfCenterLong,\n           double dfFalseEasting,\n           double dfFalseNorthing) -> OGRErr\n\nLambert Conformal Conic (Belgium)\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setlinearunits-Tuple{Ref{GDAL.OGRSpatialReferenceH},Any,Real}",
    "page": "Home",
    "title": "GDAL.setlinearunits",
    "category": "method",
    "text": "OSRSetLinearUnits(OGRSpatialReferenceH hSRS,\n                  const char * pszUnits,\n                  double dfInMeters) -> OGRErr\n\nSet the linear units for the projection.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setlinearunitsandupdateparameters-Tuple{Ref{GDAL.OGRSpatialReferenceH},Any,Real}",
    "page": "Home",
    "title": "GDAL.setlinearunitsandupdateparameters",
    "category": "method",
    "text": "OSRSetLinearUnitsAndUpdateParameters(OGRSpatialReferenceH hSRS,\n                                     const char * pszUnits,\n                                     double dfInMeters) -> OGRErr\n\nSet the linear units for the projection.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setlocalcs-Tuple{Ref{GDAL.OGRSpatialReferenceH},Any}",
    "page": "Home",
    "title": "GDAL.setlocalcs",
    "category": "method",
    "text": "OSRSetLocalCS(OGRSpatialReferenceH hSRS,\n              const char * pszName) -> OGRErr\n\nSet the user visible LOCAL_CS name.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setmc-Tuple{Ref{GDAL.OGRSpatialReferenceH},Real,Real,Real,Real}",
    "page": "Home",
    "title": "GDAL.setmc",
    "category": "method",
    "text": "OSRSetMC(OGRSpatialReferenceH hSRS,\n         double dfCenterLat,\n         double dfCenterLong,\n         double dfFalseEasting,\n         double dfFalseNorthing) -> OGRErr\n\nMiller Cylindrical.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setmeasured-Tuple{Ref{GDAL.OGRGeometryH},Integer}",
    "page": "Home",
    "title": "GDAL.setmeasured",
    "category": "method",
    "text": "OGR_G_SetMeasured(OGRGeometryH hGeom,\n                  int bIsMeasured) -> void\n\nAdd or remove the M coordinate dimension.\n\nParameters\n\nhGeom: handle on the geometry to set or unset the M dimension.\nbIsMeasured: Should the geometry have a M dimension, either TRUE or FALSE.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setmercator-Tuple{Ref{GDAL.OGRSpatialReferenceH},Real,Real,Real,Real,Real}",
    "page": "Home",
    "title": "GDAL.setmercator",
    "category": "method",
    "text": "OSRSetMercator(OGRSpatialReferenceH hSRS,\n               double dfCenterLat,\n               double dfCenterLong,\n               double dfScale,\n               double dfFalseEasting,\n               double dfFalseNorthing) -> OGRErr\n\nMercator.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setmercator2sp-Tuple{Ref{GDAL.OGRSpatialReferenceH},Real,Real,Real,Real,Real}",
    "page": "Home",
    "title": "GDAL.setmercator2sp",
    "category": "method",
    "text": "OSRSetMercator2SP(OGRSpatialReferenceH hSRS,\n                  double dfStdP1,\n                  double dfCenterLat,\n                  double dfCenterLong,\n                  double dfFalseEasting,\n                  double dfFalseNorthing) -> OGRErr\n\nMercator 2SP.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setmetadata-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALMajorObjectH,Any,Any}",
    "page": "Home",
    "title": "GDAL.setmetadata",
    "category": "method",
    "text": "GDALSetMetadata(GDALMajorObjectH hObject,\n                char ** papszMD,\n                const char * pszDomain) -> CPLErr\n\nSet metadata.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setmetadataitem-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALMajorObjectH,Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.setmetadataitem",
    "category": "method",
    "text": "GDALSetMetadataItem(GDALMajorObjectH hObject,\n                    const char * pszName,\n                    const char * pszValue,\n                    const char * pszDomain) -> CPLErr\n\nSet single metadata item.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setmollweide-Tuple{Ref{GDAL.OGRSpatialReferenceH},Real,Real,Real}",
    "page": "Home",
    "title": "GDAL.setmollweide",
    "category": "method",
    "text": "OSRSetMollweide(OGRSpatialReferenceH hSRS,\n                double dfCentralMeridian,\n                double dfFalseEasting,\n                double dfFalseNorthing) -> OGRErr\n\nMollweide.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setname-Tuple{Ref{GDAL.OGRFieldDefnH},Any}",
    "page": "Home",
    "title": "GDAL.setname",
    "category": "method",
    "text": "OGR_Fld_SetName(OGRFieldDefnH hDefn,\n                const char * pszName) -> void\n\nReset the name of this field.\n\nParameters\n\nhDefn: handle to the field definition to apply the new name to.\npszName: the new name to apply.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setname-Tuple{Ref{GDAL.OGRGeomFieldDefnH},Any}",
    "page": "Home",
    "title": "GDAL.setname",
    "category": "method",
    "text": "OGR_GFld_SetName(OGRGeomFieldDefnH hDefn,\n                 const char * pszName) -> void\n\nReset the name of this field.\n\nParameters\n\nhDefn: handle to the geometry field definition to apply the new name to.\npszName: the new name to apply.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setnativedata-Tuple{Ref{GDAL.OGRFeatureH},Any}",
    "page": "Home",
    "title": "GDAL.setnativedata",
    "category": "method",
    "text": "OGR_F_SetNativeData(OGRFeatureH hFeat,\n                    const char * pszNativeData) -> void\n\nSets the native data for the feature.\n\nParameters\n\nhFeat: handle to the feature.\npszNativeData: a string with the native data, or NULL if there is none.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setnativemediatype-Tuple{Ref{GDAL.OGRFeatureH},Any}",
    "page": "Home",
    "title": "GDAL.setnativemediatype",
    "category": "method",
    "text": "OGR_F_SetNativeMediaType(OGRFeatureH hFeat,\n                         const char * pszNativeMediaType) -> void\n\nSets the native media type for the feature.\n\nParameters\n\nhFeat: handle to the feature.\npszNativeMediaType: a string with the native media type, or NULL if there is none.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setnextbyindex-Tuple{Ref{GDAL.OGRLayerH},Integer}",
    "page": "Home",
    "title": "GDAL.setnextbyindex",
    "category": "method",
    "text": "OGR_L_SetNextByIndex(OGRLayerH,\n                     GIntBig) -> OGRErr\n\nMove read cursor to the nIndex\'th feature in the current resultset.\n\nParameters\n\nhLayer: handle to the layer\nnIndex: the index indicating how many steps into the result set to seek.\n\nReturns\n\nOGRERR_NONE on success or an error code.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setnonlineargeometriesenabledflag-Tuple{Integer}",
    "page": "Home",
    "title": "GDAL.setnonlineargeometriesenabledflag",
    "category": "method",
    "text": "OGRSetNonLinearGeometriesEnabledFlag(int bFlag) -> void\n\nSet flag to enable/disable returning non-linear geometries in the C API.\n\nParameters\n\nbFlag: TRUE if non-linear geometries might be returned (default value). FALSE to ask for non-linear geometries to be approximated as linear geometries.\n\nReturns\n\na point or NULL.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setnormprojparm-Tuple{Ref{GDAL.OGRSpatialReferenceH},Any,Real}",
    "page": "Home",
    "title": "GDAL.setnormprojparm",
    "category": "method",
    "text": "OSRSetNormProjParm(OGRSpatialReferenceH hSRS,\n                   const char * pszParmName,\n                   double dfValue) -> OGRErr\n\nSet a projection parameter with a normalized value.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setnullable-Tuple{Ref{GDAL.OGRFieldDefnH},Integer}",
    "page": "Home",
    "title": "GDAL.setnullable",
    "category": "method",
    "text": "OGR_Fld_SetNullable(OGRFieldDefnH hDefn,\n                    int bNullableIn) -> void\n\nSet whether this field can receive null values.\n\nParameters\n\nhDefn: handle to the field definition\nbNullableIn: FALSE if the field must have a not-null constraint.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setnullable-Tuple{Ref{GDAL.OGRGeomFieldDefnH},Integer}",
    "page": "Home",
    "title": "GDAL.setnullable",
    "category": "method",
    "text": "OGR_GFld_SetNullable(OGRGeomFieldDefnH hDefn,\n                     int bNullableIn) -> void\n\nSet whether this geometry field can receive null values.\n\nParameters\n\nhDefn: handle to the field definition\nbNullableIn: FALSE if the field must have a not-null constraint.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setnzmg-Tuple{Ref{GDAL.OGRSpatialReferenceH},Real,Real,Real,Real}",
    "page": "Home",
    "title": "GDAL.setnzmg",
    "category": "method",
    "text": "OSRSetNZMG(OGRSpatialReferenceH hSRS,\n           double dfCenterLat,\n           double dfCenterLong,\n           double dfFalseEasting,\n           double dfFalseNorthing) -> OGRErr\n\nNew Zealand Map Grid.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setom-Tuple{Ref{GDAL.OGRSpatialReferenceH},Real,Real,Real,Real,Real,Real,Real}",
    "page": "Home",
    "title": "GDAL.setom",
    "category": "method",
    "text": "OSRSetOM(OGRSpatialReferenceH hSRS,\n         double dfCenterLat,\n         double dfCenterLong,\n         double dfAzimuth,\n         double dfRectToSkew,\n         double dfScale,\n         double dfFalseEasting,\n         double dfFalseNorthing) -> OGRErr\n\nOblique Mercator (aka HOM (variant B)\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setorthographic-Tuple{Ref{GDAL.OGRSpatialReferenceH},Real,Real,Real,Real}",
    "page": "Home",
    "title": "GDAL.setorthographic",
    "category": "method",
    "text": "OSRSetOrthographic(OGRSpatialReferenceH hSRS,\n                   double dfCenterLat,\n                   double dfCenterLong,\n                   double dfFalseEasting,\n                   double dfFalseNorthing) -> OGRErr\n\nOrthographic.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setos-Tuple{Ref{GDAL.OGRSpatialReferenceH},Real,Real,Real,Real,Real}",
    "page": "Home",
    "title": "GDAL.setos",
    "category": "method",
    "text": "OSRSetOS(OGRSpatialReferenceH hSRS,\n         double dfOriginLat,\n         double dfCMeridian,\n         double dfScale,\n         double dfFalseEasting,\n         double dfFalseNorthing) -> OGRErr\n\nOblique Stereographic.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setparamdbl-Tuple{Ref{GDAL.OGRStyleToolH},Integer,Real}",
    "page": "Home",
    "title": "GDAL.setparamdbl",
    "category": "method",
    "text": "OGR_ST_SetParamDbl(OGRStyleToolH hST,\n                   int eParam,\n                   double dfValue) -> void\n\nSet Style Tool parameter value from a double.\n\nParameters\n\nhST: handle to the style tool.\neParam: the parameter id from the enumeration corresponding to the type of this style tool (one of the OGRSTPenParam, OGRSTBrushParam, OGRSTSymbolParam or OGRSTLabelParam enumerations)\ndfValue: the new parameter value\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setparamnum-Tuple{Ref{GDAL.OGRStyleToolH},Integer,Integer}",
    "page": "Home",
    "title": "GDAL.setparamnum",
    "category": "method",
    "text": "OGR_ST_SetParamNum(OGRStyleToolH hST,\n                   int eParam,\n                   int nValue) -> void\n\nSet Style Tool parameter value from an integer.\n\nParameters\n\nhST: handle to the style tool.\neParam: the parameter id from the enumeration corresponding to the type of this style tool (one of the OGRSTPenParam, OGRSTBrushParam, OGRSTSymbolParam or OGRSTLabelParam enumerations)\nnValue: the new parameter value\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setparamstr-Tuple{Ref{GDAL.OGRStyleToolH},Integer,Any}",
    "page": "Home",
    "title": "GDAL.setparamstr",
    "category": "method",
    "text": "OGR_ST_SetParamStr(OGRStyleToolH hST,\n                   int eParam,\n                   const char * pszValue) -> void\n\nSet Style Tool parameter value from a string.\n\nParameters\n\nhST: handle to the style tool.\neParam: the parameter id from the enumeration corresponding to the type of this style tool (one of the OGRSTPenParam, OGRSTBrushParam, OGRSTSymbolParam or OGRSTLabelParam enumerations)\npszValue: the new parameter value\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setpoint-Tuple{Ref{GDAL.OGRGeometryH},Integer,Real,Real,Real}",
    "page": "Home",
    "title": "GDAL.setpoint",
    "category": "method",
    "text": "OGR_G_SetPoint(OGRGeometryH hGeom,\n               int i,\n               double dfX,\n               double dfY,\n               double dfZ) -> void\n\nSet the location of a vertex in a point or linestring geometry.\n\nParameters\n\nhGeom: handle to the geometry to add a vertex to.\ni: the index of the vertex to assign (zero based) or zero for a point.\ndfX: input X coordinate to assign.\ndfY: input Y coordinate to assign.\ndfZ: input Z coordinate to assign (defaults to zero).\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setpoint_2d-Tuple{Ref{GDAL.OGRGeometryH},Integer,Real,Real}",
    "page": "Home",
    "title": "GDAL.setpoint_2d",
    "category": "method",
    "text": "OGR_G_SetPoint_2D(OGRGeometryH hGeom,\n                  int i,\n                  double dfX,\n                  double dfY) -> void\n\nSet the location of a vertex in a point or linestring geometry.\n\nParameters\n\nhGeom: handle to the geometry to add a vertex to.\ni: the index of the vertex to assign (zero based) or zero for a point.\ndfX: input X coordinate to assign.\ndfY: input Y coordinate to assign.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setpointcount-Tuple{Ref{GDAL.OGRGeometryH},Integer}",
    "page": "Home",
    "title": "GDAL.setpointcount",
    "category": "method",
    "text": "OGR_G_SetPointCount(OGRGeometryH hGeom,\n                    int nNewPointCount) -> void\n\nSet number of points in a geometry.\n\nParameters\n\nhGeom: handle to the geometry.\nnNewPointCount: the new number of points for geometry.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setpointm-Tuple{Ref{GDAL.OGRGeometryH},Integer,Real,Real,Real}",
    "page": "Home",
    "title": "GDAL.setpointm",
    "category": "method",
    "text": "OGR_G_SetPointM(OGRGeometryH hGeom,\n                int i,\n                double dfX,\n                double dfY,\n                double dfM) -> void\n\nSet the location of a vertex in a point or linestring geometry.\n\nParameters\n\nhGeom: handle to the geometry to add a vertex to.\ni: the index of the vertex to assign (zero based) or zero for a point.\ndfX: input X coordinate to assign.\ndfY: input Y coordinate to assign.\ndfM: input M coordinate to assign.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setpoints-Tuple{Ref{GDAL.OGRGeometryH},Integer,Any,Integer,Any,Integer,Any,Integer}",
    "page": "Home",
    "title": "GDAL.setpoints",
    "category": "method",
    "text": "OGR_G_SetPoints(OGRGeometryH hGeom,\n                int nPointsIn,\n                void * pabyX,\n                int nXStride,\n                void * pabyY,\n                int nYStride,\n                void * pabyZ,\n                int nZStride) -> void\n\nAssign all points in a point or a line string geometry.\n\nParameters\n\nhGeom: handle to the geometry to set the coordinates.\nnPointsIn: number of points being passed in padfX and padfY.\npabyX: list of X coordinates (double values) of points being assigned.\nnXStride: the number of bytes between 2 elements of pabyX.\npabyY: list of Y coordinates (double values) of points being assigned.\nnYStride: the number of bytes between 2 elements of pabyY.\npabyZ: list of Z coordinates (double values) of points being assigned (defaults to NULL for 2D objects).\nnZStride: the number of bytes between 2 elements of pabyZ.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setpointszm-Tuple{Ref{GDAL.OGRGeometryH},Integer,Any,Integer,Any,Integer,Any,Integer,Any,Integer}",
    "page": "Home",
    "title": "GDAL.setpointszm",
    "category": "method",
    "text": "OGR_G_SetPointsZM(OGRGeometryH hGeom,\n                  int nPointsIn,\n                  void * pabyX,\n                  int nXStride,\n                  void * pabyY,\n                  int nYStride,\n                  void * pabyZ,\n                  int nZStride,\n                  void * pabyM,\n                  int nMStride) -> void\n\nAssign all points in a point or a line string geometry.\n\nParameters\n\nhGeom: handle to the geometry to set the coordinates.\nnPointsIn: number of points being passed in padfX and padfY.\npabyX: list of X coordinates (double values) of points being assigned.\nnXStride: the number of bytes between 2 elements of pabyX.\npabyY: list of Y coordinates (double values) of points being assigned.\nnYStride: the number of bytes between 2 elements of pabyY.\npabyZ: list of Z coordinates (double values) of points being assigned (if not NULL, upgrades the geometry to have Z coordinate).\nnZStride: the number of bytes between 2 elements of pabyZ.\npabyM: list of M coordinates (double values) of points being assigned (if not NULL, upgrades the geometry to have M coordinate).\nnMStride: the number of bytes between 2 elements of pabyM.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setpointzm-Tuple{Ref{GDAL.OGRGeometryH},Integer,Real,Real,Real,Real}",
    "page": "Home",
    "title": "GDAL.setpointzm",
    "category": "method",
    "text": "OGR_G_SetPointZM(OGRGeometryH hGeom,\n                 int i,\n                 double dfX,\n                 double dfY,\n                 double dfZ,\n                 double dfM) -> void\n\nSet the location of a vertex in a point or linestring geometry.\n\nParameters\n\nhGeom: handle to the geometry to add a vertex to.\ni: the index of the vertex to assign (zero based) or zero for a point.\ndfX: input X coordinate to assign.\ndfY: input Y coordinate to assign.\ndfZ: input Z coordinate to assign.\ndfM: input M coordinate to assign.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setpolyconic-Tuple{Ref{GDAL.OGRSpatialReferenceH},Real,Real,Real,Real}",
    "page": "Home",
    "title": "GDAL.setpolyconic",
    "category": "method",
    "text": "OSRSetPolyconic(OGRSpatialReferenceH hSRS,\n                double dfCenterLat,\n                double dfCenterLong,\n                double dfFalseEasting,\n                double dfFalseNorthing) -> OGRErr\n\nPolyconic.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setprecision-Tuple{Ref{GDAL.OGRFieldDefnH},Integer}",
    "page": "Home",
    "title": "GDAL.setprecision",
    "category": "method",
    "text": "OGR_Fld_SetPrecision(OGRFieldDefnH hDefn,\n                     int nPrecision) -> void\n\nSet the formatting precision for this field in characters.\n\nParameters\n\nhDefn: handle to the field definition to set precision to.\nnPrecision: the new precision.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setprojcs-Tuple{Ref{GDAL.OGRSpatialReferenceH},Any}",
    "page": "Home",
    "title": "GDAL.setprojcs",
    "category": "method",
    "text": "OSRSetProjCS(OGRSpatialReferenceH hSRS,\n             const char * pszName) -> OGRErr\n\nSet the user visible PROJCS name.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setprojection-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALDatasetH,Any}",
    "page": "Home",
    "title": "GDAL.setprojection",
    "category": "method",
    "text": "GDALSetProjection(GDALDatasetH hDS,\n                  const char * pszProjection) -> CPLErr\n\nSet the projection reference string for this dataset.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setprojection-Tuple{Ref{GDAL.OGRSpatialReferenceH},Any}",
    "page": "Home",
    "title": "GDAL.setprojection",
    "category": "method",
    "text": "OSRSetProjection(OGRSpatialReferenceH hSRS,\n                 const char * pszProjection) -> OGRErr\n\nSet a projection name.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setprojparm-Tuple{Ref{GDAL.OGRSpatialReferenceH},Any,Real}",
    "page": "Home",
    "title": "GDAL.setprojparm",
    "category": "method",
    "text": "OSRSetProjParm(OGRSpatialReferenceH hSRS,\n               const char * pszParmName,\n               double dfValue) -> OGRErr\n\nSet a projection parameter value.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setps-Tuple{Ref{GDAL.OGRSpatialReferenceH},Real,Real,Real,Real,Real}",
    "page": "Home",
    "title": "GDAL.setps",
    "category": "method",
    "text": "OSRSetPS(OGRSpatialReferenceH hSRS,\n         double dfCenterLat,\n         double dfCenterLong,\n         double dfScale,\n         double dfFalseEasting,\n         double dfFalseNorthing) -> OGRErr\n\nPolar Stereographic.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setqsc-Tuple{Ref{GDAL.OGRSpatialReferenceH},Real,Real}",
    "page": "Home",
    "title": "GDAL.setqsc",
    "category": "method",
    "text": "OSRSetQSC(OGRSpatialReferenceH hSRS,\n          double dfCenterLat,\n          double dfCenterLong) -> OGRErr\n\nQuadrilateralized Spherical Cube.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setrastercategorynames-Tuple{Ref{GDAL.GDALRasterBandH},Any}",
    "page": "Home",
    "title": "GDAL.setrastercategorynames",
    "category": "method",
    "text": "GDALSetRasterCategoryNames(GDALRasterBandH hBand,\n                           char ** papszNames) -> CPLErr\n\nSet the category names for this band.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setrastercolorinterpretation-Tuple{Ref{GDAL.GDALRasterBandH},GDAL.GDALColorInterp}",
    "page": "Home",
    "title": "GDAL.setrastercolorinterpretation",
    "category": "method",
    "text": "GDALSetRasterColorInterpretation(GDALRasterBandH hBand,\n                                 GDALColorInterp eColorInterp) -> CPLErr\n\nSet color interpretation of a band.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setrastercolortable-Tuple{Ref{GDAL.GDALRasterBandH},Ref{GDAL.GDALColorTableH}}",
    "page": "Home",
    "title": "GDAL.setrastercolortable",
    "category": "method",
    "text": "GDALSetRasterColorTable(GDALRasterBandH hBand,\n                        GDALColorTableH hCT) -> CPLErr\n\nSet the raster color table.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setrasternodatavalue-Tuple{Ref{GDAL.GDALRasterBandH},Real}",
    "page": "Home",
    "title": "GDAL.setrasternodatavalue",
    "category": "method",
    "text": "GDALSetRasterNoDataValue(GDALRasterBandH hBand,\n                         double dfValue) -> CPLErr\n\nSet the no data value for this band.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setrasteroffset-Tuple{Ref{GDAL.GDALRasterBandH},Real}",
    "page": "Home",
    "title": "GDAL.setrasteroffset",
    "category": "method",
    "text": "GDALSetRasterOffset(GDALRasterBandH hBand,\n                    double dfNewOffset) -> CPLErr\n\nSet scaling offset.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setrasterscale-Tuple{Ref{GDAL.GDALRasterBandH},Real}",
    "page": "Home",
    "title": "GDAL.setrasterscale",
    "category": "method",
    "text": "GDALSetRasterScale(GDALRasterBandH hBand,\n                   double dfNewOffset) -> CPLErr\n\nSet scaling ratio.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setrasterstatistics-Tuple{Ref{GDAL.GDALRasterBandH},Real,Real,Real,Real}",
    "page": "Home",
    "title": "GDAL.setrasterstatistics",
    "category": "method",
    "text": "GDALSetRasterStatistics(GDALRasterBandH hBand,\n                        double dfMin,\n                        double dfMax,\n                        double dfMean,\n                        double dfStdDev) -> CPLErr\n\nSet statistics on band.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setrasterunittype-Tuple{Ref{GDAL.GDALRasterBandH},Any}",
    "page": "Home",
    "title": "GDAL.setrasterunittype",
    "category": "method",
    "text": "GDALSetRasterUnitType(GDALRasterBandH hBand,\n                      const char * pszNewValue) -> CPLErr\n\nSet unit type.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setrobinson-Tuple{Ref{GDAL.OGRSpatialReferenceH},Real,Real,Real}",
    "page": "Home",
    "title": "GDAL.setrobinson",
    "category": "method",
    "text": "OSRSetRobinson(OGRSpatialReferenceH hSRS,\n               double dfCenterLong,\n               double dfFalseEasting,\n               double dfFalseNorthing) -> OGRErr\n\nRobinson.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setsch-Tuple{Ref{GDAL.OGRSpatialReferenceH},Real,Real,Real,Real}",
    "page": "Home",
    "title": "GDAL.setsch",
    "category": "method",
    "text": "OSRSetSCH(OGRSpatialReferenceH hSRS,\n          double dfPegLat,\n          double dfPegLong,\n          double dfPegHeading,\n          double dfPegHgt) -> OGRErr\n\nSpherical, Cross-track, Height.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setsinusoidal-Tuple{Ref{GDAL.OGRSpatialReferenceH},Real,Real,Real}",
    "page": "Home",
    "title": "GDAL.setsinusoidal",
    "category": "method",
    "text": "OSRSetSinusoidal(OGRSpatialReferenceH hSRS,\n                 double dfCenterLong,\n                 double dfFalseEasting,\n                 double dfFalseNorthing) -> OGRErr\n\nSinusoidal.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setsoc-Tuple{Ref{GDAL.OGRSpatialReferenceH},Real,Real,Real,Real}",
    "page": "Home",
    "title": "GDAL.setsoc",
    "category": "method",
    "text": "OSRSetSOC(OGRSpatialReferenceH hSRS,\n          double dfLatitudeOfOrigin,\n          double dfCentralMeridian,\n          double dfFalseEasting,\n          double dfFalseNorthing) -> OGRErr\n\nSwiss Oblique Cylindrical.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setspatialfilter-Tuple{Ref{GDAL.OGRLayerH},Ref{GDAL.OGRGeometryH}}",
    "page": "Home",
    "title": "GDAL.setspatialfilter",
    "category": "method",
    "text": "OGR_L_SetSpatialFilter(OGRLayerH,\n                       OGRGeometryH) -> void\n\nSet a new spatial filter.\n\nParameters\n\nhLayer: handle to the layer on which to set the spatial filter.\nhGeom: handle to the geometry to use as a filtering region. NULL may be passed indicating that the current spatial filter should be cleared, but no new one instituted.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setspatialfilterex-Tuple{Ref{GDAL.OGRLayerH},Integer,Ref{GDAL.OGRGeometryH}}",
    "page": "Home",
    "title": "GDAL.setspatialfilterex",
    "category": "method",
    "text": "OGR_L_SetSpatialFilterEx(OGRLayerH,\n                         int iGeomField,\n                         OGRGeometryH hGeom) -> void\n\nSet a new spatial filter.\n\nParameters\n\nhLayer: handle to the layer on which to set the spatial filter.\niGeomField: index of the geometry field on which the spatial filter operates.\nhGeom: handle to the geometry to use as a filtering region. NULL may be passed indicating that the current spatial filter should be cleared, but no new one instituted.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setspatialfilterrect-Tuple{Ref{GDAL.OGRLayerH},Real,Real,Real,Real}",
    "page": "Home",
    "title": "GDAL.setspatialfilterrect",
    "category": "method",
    "text": "OGR_L_SetSpatialFilterRect(OGRLayerH,\n                           double,\n                           double,\n                           double,\n                           double) -> void\n\nSet a new rectangular spatial filter.\n\nParameters\n\nhLayer: handle to the layer on which to set the spatial filter.\ndfMinX: the minimum X coordinate for the rectangular region.\ndfMinY: the minimum Y coordinate for the rectangular region.\ndfMaxX: the maximum X coordinate for the rectangular region.\ndfMaxY: the maximum Y coordinate for the rectangular region.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setspatialfilterrectex-Tuple{Ref{GDAL.OGRLayerH},Integer,Real,Real,Real,Real}",
    "page": "Home",
    "title": "GDAL.setspatialfilterrectex",
    "category": "method",
    "text": "OGR_L_SetSpatialFilterRectEx(OGRLayerH,\n                             int iGeomField,\n                             double dfMinX,\n                             double dfMinY,\n                             double dfMaxX,\n                             double dfMaxY) -> void\n\nSet a new rectangular spatial filter.\n\nParameters\n\nhLayer: handle to the layer on which to set the spatial filter.\niGeomField: index of the geometry field on which the spatial filter operates.\ndfMinX: the minimum X coordinate for the rectangular region.\ndfMinY: the minimum Y coordinate for the rectangular region.\ndfMaxX: the maximum X coordinate for the rectangular region.\ndfMaxY: the maximum Y coordinate for the rectangular region.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setspatialref-Tuple{Ref{GDAL.OGRGeomFieldDefnH},Ref{GDAL.OGRSpatialReferenceH}}",
    "page": "Home",
    "title": "GDAL.setspatialref",
    "category": "method",
    "text": "OGR_GFld_SetSpatialRef(OGRGeomFieldDefnH hDefn,\n                       OGRSpatialReferenceH hSRS) -> void\n\nSet the spatial reference of this field.\n\nParameters\n\nhDefn: handle to the geometry field definition\nhSRS: the new SRS to apply.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setstateplane-Tuple{Ref{GDAL.OGRSpatialReferenceH},Integer,Integer}",
    "page": "Home",
    "title": "GDAL.setstateplane",
    "category": "method",
    "text": "OSRSetStatePlane(OGRSpatialReferenceH hSRS,\n                 int nZone,\n                 int bNAD83) -> OGRErr\n\nSet State Plane projection definition.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setstateplanewithunits-Tuple{Ref{GDAL.OGRSpatialReferenceH},Integer,Integer,Any,Real}",
    "page": "Home",
    "title": "GDAL.setstateplanewithunits",
    "category": "method",
    "text": "OSRSetStatePlaneWithUnits(OGRSpatialReferenceH hSRS,\n                          int nZone,\n                          int bNAD83,\n                          const char * pszOverrideUnitName,\n                          double dfOverrideUnit) -> OGRErr\n\nSet State Plane projection definition.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setstereographic-Tuple{Ref{GDAL.OGRSpatialReferenceH},Real,Real,Real,Real,Real}",
    "page": "Home",
    "title": "GDAL.setstereographic",
    "category": "method",
    "text": "OSRSetStereographic(OGRSpatialReferenceH hSRS,\n                    double dfOriginLat,\n                    double dfCMeridian,\n                    double dfScale,\n                    double dfFalseEasting,\n                    double dfFalseNorthing) -> OGRErr\n\nStereographic.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setstyleignored-Tuple{Ref{GDAL.OGRFeatureDefnH},Integer}",
    "page": "Home",
    "title": "GDAL.setstyleignored",
    "category": "method",
    "text": "OGR_FD_SetStyleIgnored(OGRFeatureDefnH hDefn,\n                       int bIgnore) -> void\n\nSet whether the style can be omitted when fetching features.\n\nParameters\n\nhDefn: handle to the feature definition on witch OGRFeature are based on.\nbIgnore: ignore state\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setstylestring-Tuple{Ref{GDAL.OGRFeatureH},Any}",
    "page": "Home",
    "title": "GDAL.setstylestring",
    "category": "method",
    "text": "OGR_F_SetStyleString(OGRFeatureH hFeat,\n                     const char * pszStyle) -> void\n\nSet feature style string.\n\nParameters\n\nhFeat: handle to the feature to set style to.\npszStyle: the style string to apply to this feature, cannot be NULL.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setstylestringdirectly-Tuple{Ref{GDAL.OGRFeatureH},Any}",
    "page": "Home",
    "title": "GDAL.setstylestringdirectly",
    "category": "method",
    "text": "OGR_F_SetStyleStringDirectly(OGRFeatureH hFeat,\n                             char * pszStyle) -> void\n\nSet feature style string.\n\nParameters\n\nhFeat: handle to the feature to set style to.\npszStyle: the style string to apply to this feature, cannot be NULL.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setstyletable-Tuple{Ref{GDAL.OGRDataSourceH},Ref{GDAL.OGRStyleTableH}}",
    "page": "Home",
    "title": "GDAL.setstyletable",
    "category": "method",
    "text": "OGR_DS_SetStyleTable(OGRDataSourceH hDS,\n                     OGRStyleTableH hStyleTable) -> void\n\nSet style table.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setstyletable-Tuple{Ref{GDAL.OGRFeatureH},Ref{GDAL.OGRStyleTableH}}",
    "page": "Home",
    "title": "GDAL.setstyletable",
    "category": "method",
    "text": "OGR_F_SetStyleTable(OGRFeatureH hFeat,\n                    OGRStyleTableH hStyleTable) -> void\n\nSet style table.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setstyletable-Tuple{Ref{GDAL.OGRLayerH},Ref{GDAL.OGRStyleTableH}}",
    "page": "Home",
    "title": "GDAL.setstyletable",
    "category": "method",
    "text": "OGR_L_SetStyleTable(OGRLayerH hLayer,\n                    OGRStyleTableH hStyleTable) -> void\n\nSet style table.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setstyletabledirectly-Tuple{Ref{GDAL.OGRDataSourceH},Ref{GDAL.OGRStyleTableH}}",
    "page": "Home",
    "title": "GDAL.setstyletabledirectly",
    "category": "method",
    "text": "OGR_DS_SetStyleTableDirectly(OGRDataSourceH hDS,\n                             OGRStyleTableH hStyleTable) -> void\n\nSet style table (and take ownership)\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setstyletabledirectly-Tuple{Ref{GDAL.OGRFeatureH},Ref{GDAL.OGRStyleTableH}}",
    "page": "Home",
    "title": "GDAL.setstyletabledirectly",
    "category": "method",
    "text": "OGR_F_SetStyleTableDirectly(OGRFeatureH hFeat,\n                            OGRStyleTableH hStyleTable) -> void\n\nSet style table and take ownership.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setstyletabledirectly-Tuple{Ref{GDAL.OGRLayerH},Ref{GDAL.OGRStyleTableH}}",
    "page": "Home",
    "title": "GDAL.setstyletabledirectly",
    "category": "method",
    "text": "OGR_L_SetStyleTableDirectly(OGRLayerH hLayer,\n                            OGRStyleTableH hStyleTable) -> void\n\nSet style table (and take ownership)\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setsubtype-Tuple{Ref{GDAL.OGRFieldDefnH},GDAL.OGRFieldSubType}",
    "page": "Home",
    "title": "GDAL.setsubtype",
    "category": "method",
    "text": "OGR_Fld_SetSubType(OGRFieldDefnH hDefn,\n                   OGRFieldSubType eSubType) -> void\n\nSet the subtype of this field.\n\nParameters\n\nhDefn: handle to the field definition to set type to.\neSubType: the new field subtype.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.settargetlinearunits-Tuple{Ref{GDAL.OGRSpatialReferenceH},Any,Any,Real}",
    "page": "Home",
    "title": "GDAL.settargetlinearunits",
    "category": "method",
    "text": "OSRSetTargetLinearUnits(OGRSpatialReferenceH hSRS,\n                        const char * pszTargetKey,\n                        const char * pszUnits,\n                        double dfInMeters) -> OGRErr\n\nSet the linear units for the target node.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.settm-Tuple{Ref{GDAL.OGRSpatialReferenceH},Real,Real,Real,Real,Real}",
    "page": "Home",
    "title": "GDAL.settm",
    "category": "method",
    "text": "OSRSetTM(OGRSpatialReferenceH hSRS,\n         double dfCenterLat,\n         double dfCenterLong,\n         double dfScale,\n         double dfFalseEasting,\n         double dfFalseNorthing) -> OGRErr\n\nTransverse Mercator.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.settmg-Tuple{Ref{GDAL.OGRSpatialReferenceH},Real,Real,Real,Real}",
    "page": "Home",
    "title": "GDAL.settmg",
    "category": "method",
    "text": "OSRSetTMG(OGRSpatialReferenceH hSRS,\n          double dfCenterLat,\n          double dfCenterLong,\n          double dfFalseEasting,\n          double dfFalseNorthing) -> OGRErr\n\nTunesia Mining Grid.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.settmso-Tuple{Ref{GDAL.OGRSpatialReferenceH},Real,Real,Real,Real,Real}",
    "page": "Home",
    "title": "GDAL.settmso",
    "category": "method",
    "text": "OSRSetTMSO(OGRSpatialReferenceH hSRS,\n           double dfCenterLat,\n           double dfCenterLong,\n           double dfScale,\n           double dfFalseEasting,\n           double dfFalseNorthing) -> OGRErr\n\nTransverse Mercator (South Oriented)\n\n\n\n\n\n"
},

{
    "location": "#GDAL.settmvariant-Tuple{Ref{GDAL.OGRSpatialReferenceH},Any,Real,Real,Real,Real,Real}",
    "page": "Home",
    "title": "GDAL.settmvariant",
    "category": "method",
    "text": "OSRSetTMVariant(OGRSpatialReferenceH hSRS,\n                const char * pszVariantName,\n                double dfCenterLat,\n                double dfCenterLong,\n                double dfScale,\n                double dfFalseEasting,\n                double dfFalseNorthing) -> OGRErr\n\nTransverse Mercator variant.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.settowgs84-Tuple{Ref{GDAL.OGRSpatialReferenceH},Real,Real,Real,Real,Real,Real,Real}",
    "page": "Home",
    "title": "GDAL.settowgs84",
    "category": "method",
    "text": "OSRSetTOWGS84(OGRSpatialReferenceH hSRS,\n              double dfDX,\n              double dfDY,\n              double dfDZ,\n              double dfEX,\n              double dfEY,\n              double dfEZ,\n              double dfPPM) -> OGRErr\n\nSet the Bursa-Wolf conversion to WGS84.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.settped-Tuple{Ref{GDAL.OGRSpatialReferenceH},Real,Real,Real,Real,Real,Real}",
    "page": "Home",
    "title": "GDAL.settped",
    "category": "method",
    "text": "OSRSetTPED(OGRSpatialReferenceH hSRS,\n           double dfLat1,\n           double dfLong1,\n           double dfLat2,\n           double dfLong2,\n           double dfFalseEasting,\n           double dfFalseNorthing) -> OGRErr\n\nTPED (Two Point Equi Distant)\n\n\n\n\n\n"
},

{
    "location": "#GDAL.settransformerdstgeotransform-Tuple{Any,Any}",
    "page": "Home",
    "title": "GDAL.settransformerdstgeotransform",
    "category": "method",
    "text": "GDALSetTransformerDstGeoTransform(void * pTransformArg,\n                                  const double * padfGeoTransform) -> void\n\nSet ApproxTransformer or GenImgProj output geotransform.\n\nParameters\n\npTransformArg: the handle to update.\npadfGeoTransform: the destination geotransform to apply (six doubles).\n\n\n\n\n\n"
},

{
    "location": "#GDAL.settype-Tuple{Ref{GDAL.OGRFieldDefnH},GDAL.OGRFieldType}",
    "page": "Home",
    "title": "GDAL.settype",
    "category": "method",
    "text": "OGR_Fld_SetType(OGRFieldDefnH hDefn,\n                OGRFieldType eType) -> void\n\nSet the type of this field.\n\nParameters\n\nhDefn: handle to the field definition to set type to.\neType: the new field type.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.settype-Tuple{Ref{GDAL.OGRGeomFieldDefnH},GDAL.OGRwkbGeometryType}",
    "page": "Home",
    "title": "GDAL.settype",
    "category": "method",
    "text": "OGR_GFld_SetType(OGRGeomFieldDefnH hDefn,\n                 OGRwkbGeometryType eType) -> void\n\nSet the geometry type of this field.\n\nParameters\n\nhDefn: handle to the geometry field definition to set type to.\neType: the new field geometry type.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setunit-Tuple{Ref{GDAL.OGRStyleToolH},GDAL.OGRSTUnitId,Real}",
    "page": "Home",
    "title": "GDAL.setunit",
    "category": "method",
    "text": "OGR_ST_SetUnit(OGRStyleToolH hST,\n               OGRSTUnitId eUnit,\n               double dfGroundPaperScale) -> void\n\nSet Style Tool units.\n\nParameters\n\nhST: handle to the style tool.\neUnit: the new unit.\ndfGroundPaperScale: ground to paper scale factor.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setutm-Tuple{Ref{GDAL.OGRSpatialReferenceH},Integer,Integer}",
    "page": "Home",
    "title": "GDAL.setutm",
    "category": "method",
    "text": "OSRSetUTM(OGRSpatialReferenceH hSRS,\n          int nZone,\n          int bNorth) -> OGRErr\n\nSet UTM projection definition.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setvdg-Tuple{Ref{GDAL.OGRSpatialReferenceH},Real,Real,Real}",
    "page": "Home",
    "title": "GDAL.setvdg",
    "category": "method",
    "text": "OSRSetVDG(OGRSpatialReferenceH hSRS,\n          double dfCentralMeridian,\n          double dfFalseEasting,\n          double dfFalseNorthing) -> OGRErr\n\nVanDerGrinten.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setvertcs-Tuple{Ref{GDAL.OGRSpatialReferenceH},Any,Any,Integer}",
    "page": "Home",
    "title": "GDAL.setvertcs",
    "category": "method",
    "text": "OSRSetVertCS(OGRSpatialReferenceH hSRS,\n             const char * pszVertCSName,\n             const char * pszVertDatumName,\n             int nVertDatumType) -> OGRErr\n\nSetup the vertical coordinate system.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setwagner-Tuple{Ref{GDAL.OGRSpatialReferenceH},Integer,Real,Real,Real}",
    "page": "Home",
    "title": "GDAL.setwagner",
    "category": "method",
    "text": "OSRSetWagner(OGRSpatialReferenceH hSRS,\n             int nVariation,\n             double dfCenterLat,\n             double dfFalseEasting,\n             double dfFalseNorthing) -> OGRErr\n\nWagner I  VII.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setwellknowngeogcs-Tuple{Ref{GDAL.OGRSpatialReferenceH},Any}",
    "page": "Home",
    "title": "GDAL.setwellknowngeogcs",
    "category": "method",
    "text": "OSRSetWellKnownGeogCS(OGRSpatialReferenceH hSRS,\n                      const char * pszName) -> OGRErr\n\nSet a GeogCS based on well known name.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.setwidth-Tuple{Ref{GDAL.OGRFieldDefnH},Integer}",
    "page": "Home",
    "title": "GDAL.setwidth",
    "category": "method",
    "text": "OGR_Fld_SetWidth(OGRFieldDefnH hDefn,\n                 int nNewWidth) -> void\n\nSet the formatting width for this field in characters.\n\nParameters\n\nhDefn: handle to the field definition to set width to.\nnNewWidth: the new width.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.sievefilter-Tuple{Ref{GDAL.GDALRasterBandH},Ref{GDAL.GDALRasterBandH},Ref{GDAL.GDALRasterBandH},Integer,Integer,Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.sievefilter",
    "category": "method",
    "text": "GDALSieveFilter(GDALRasterBandH hSrcBand,\n                GDALRasterBandH hMaskBand,\n                GDALRasterBandH hDstBand,\n                int nSizeThreshold,\n                int nConnectedness,\n                char ** papszOptions,\n                GDALProgressFunc pfnProgress,\n                void * pProgressArg) -> CPLErr\n\nRemoves small raster polygons.\n\nParameters\n\nhSrcBand: the source raster band to be processed.\nhMaskBand: an optional mask band. All pixels in the mask band with a value other than zero will be considered suitable for inclusion in polygons.\nhDstBand: the output raster band. It may be the same as hSrcBand to update the source in place.\nnSizeThreshold: raster polygons with sizes smaller than this will be merged into their largest neighbour.\nnConnectedness: either 4 indicating that diagonal pixels are not considered directly adjacent for polygon membership purposes or 8 indicating they are.\npapszOptions: algorithm options in name=value list form. None currently supported.\npfnProgress: callback for reporting algorithm progress matching the GDALProgressFunc() semantics. May be NULL.\npProgressArg: callback argument passed to pfnProgress.\n\nReturns\n\nCENone on success or CEFailure if an error occurs.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.simpleimagewarp-Tuple{Ref{#s1235} where #s1235<:GDAL.GDALDatasetH,Ref{#s1234} where #s1234<:GDAL.GDALDatasetH,Integer,Any,Ref{GDAL.GDALTransformerFunc},Any,Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.simpleimagewarp",
    "category": "method",
    "text": "GDALSimpleImageWarp(GDALDatasetH hSrcDS,\n                    GDALDatasetH hDstDS,\n                    int nBandCount,\n                    int * panBandList,\n                    GDALTransformerFunc pfnTransform,\n                    void * pTransformArg,\n                    GDALProgressFunc pfnProgress,\n                    void * pProgressArg,\n                    char ** papszWarpOptions) -> int\n\nPerform simple image warp.\n\nParameters\n\nhSrcDS: the source image dataset.\nhDstDS: the destination image dataset.\nnBandCount: the number of bands to be warped. If zero, all bands will be processed.\npanBandList: the list of bands to translate.\npfnTransform: the transformation function to call. See GDALTransformerFunc().\npTransformArg: the callback handle to pass to pfnTransform.\npfnProgress: the function used to report progress. See GDALProgressFunc().\npProgressArg: the callback handle to pass to pfnProgress.\npapszWarpOptions: additional options controlling the warp.\n\nReturns\n\nTRUE if the operation completes, or FALSE if an error occurs.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.simplify-Tuple{Ref{GDAL.OGRGeometryH},Real}",
    "page": "Home",
    "title": "GDAL.simplify",
    "category": "method",
    "text": "OGR_G_Simplify(OGRGeometryH hThis,\n               double dTolerance) -> OGRGeometryH\n\nCompute a simplified geometry.\n\nParameters\n\nhThis: the geometry.\ndTolerance: the distance tolerance for the simplification.\n\nReturns\n\nthe simplified geometry or NULL if an error occurs.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.simplifypreservetopology-Tuple{Ref{GDAL.OGRGeometryH},Real}",
    "page": "Home",
    "title": "GDAL.simplifypreservetopology",
    "category": "method",
    "text": "OGR_G_SimplifyPreserveTopology(OGRGeometryH hThis,\n                               double dTolerance) -> OGRGeometryH\n\nSimplify the geometry while preserving topology.\n\nParameters\n\nhThis: the geometry.\ndTolerance: the distance tolerance for the simplification.\n\nReturns\n\nthe simplified geometry or NULL if an error occurs.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.sm_create-Tuple{Ref{GDAL.OGRStyleTableH}}",
    "page": "Home",
    "title": "GDAL.sm_create",
    "category": "method",
    "text": "OGR_SM_Create(OGRStyleTableH hStyleTable) -> OGRStyleMgrH\n\nOGRStyleMgr factory.\n\nParameters\n\nhStyleTable: pointer to OGRStyleTable or NULL if not working with a style table.\n\nReturns\n\nan handle to the new style manager object.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.st_create-Tuple{GDAL.OGRSTClassId}",
    "page": "Home",
    "title": "GDAL.st_create",
    "category": "method",
    "text": "OGR_ST_Create(OGRSTClassId eClassId) -> OGRStyleToolH\n\nOGRStyleTool factory.\n\nParameters\n\neClassId: subclass of style tool to create. One of OGRSTCPen (1), OGRSTCBrush (2), OGRSTCSymbol (3) or OGRSTCLabel (4).\n\nReturns\n\nan handle to the new style tool object or NULL if the creation failed.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.starttransaction-Tuple{Ref{GDAL.OGRLayerH}}",
    "page": "Home",
    "title": "GDAL.starttransaction",
    "category": "method",
    "text": "OGR_L_StartTransaction(OGRLayerH) -> OGRErr\n\nFor datasources which support transactions, StartTransaction creates a transaction.\n\nParameters\n\nhLayer: handle to the layer\n\nReturns\n\nOGRERR_NONE on success.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.stbl_create-Tuple{}",
    "page": "Home",
    "title": "GDAL.stbl_create",
    "category": "method",
    "text": "OGR_STBL_Create(void) -> OGRStyleTableH\n\nOGRStyleTable factory.\n\nReturns\n\nan handle to the new style table object.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.stealgeometry-Tuple{Ref{GDAL.OGRFeatureH}}",
    "page": "Home",
    "title": "GDAL.stealgeometry",
    "category": "method",
    "text": "OGR_F_StealGeometry(OGRFeatureH hFeat) -> OGRGeometryH\n\nTake away ownership of geometry.\n\nReturns\n\nthe pointer to the geometry.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.stripctparms-Tuple{Ref{GDAL.OGRSpatialReferenceH}}",
    "page": "Home",
    "title": "GDAL.stripctparms",
    "category": "method",
    "text": "OSRStripCTParms(OGRSpatialReferenceH hSRS) -> OGRErr\n\nStrip OGC CT Parameters.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.suggestedwarpoutput-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALDatasetH,Ref{GDAL.GDALTransformerFunc},Any,Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.suggestedwarpoutput",
    "category": "method",
    "text": "GDALSuggestedWarpOutput(GDALDatasetH hSrcDS,\n                        GDALTransformerFunc pfnTransformer,\n                        void * pTransformArg,\n                        double * padfGeoTransformOut,\n                        int * pnPixels,\n                        int * pnLines) -> CPLErr\n\nSuggest output file size.\n\nParameters\n\nhSrcDS: the input image (it is assumed the whole input images is being transformed).\npfnTransformer: the transformer function.\npTransformArg: the callback data for the transformer function.\npadfGeoTransformOut: the array of six doubles in which the suggested geotransform is returned.\npnPixels: int in which the suggest pixel width of output is returned.\npnLines: int in which the suggest pixel height of output is returned.\n\nReturns\n\nCENone if successful or CEFailure otherwise.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.suggestedwarpoutput2-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALDatasetH,Ref{GDAL.GDALTransformerFunc},Any,Any,Any,Any,Any,Integer}",
    "page": "Home",
    "title": "GDAL.suggestedwarpoutput2",
    "category": "method",
    "text": "GDALSuggestedWarpOutput2(GDALDatasetH hSrcDS,\n                         GDALTransformerFunc pfnTransformer,\n                         void * pTransformArg,\n                         double * padfGeoTransformOut,\n                         int * pnPixels,\n                         int * pnLines,\n                         double * padfExtent,\n                         int nOptions) -> CPLErr\n\nSuggest output file size.\n\nParameters\n\nhSrcDS: the input image (it is assumed the whole input images is being transformed).\npfnTransformer: the transformer function.\npTransformArg: the callback data for the transformer function.\npadfGeoTransformOut: the array of six doubles in which the suggested geotransform is returned.\npnPixels: int in which the suggest pixel width of output is returned.\npnLines: int in which the suggest pixel height of output is returned.\npadfExtent: Four entry array to return extents as (xmin, ymin, xmax, ymax).\nnOptions: Options, currently always zero.\n\nReturns\n\nCENone if successful or CEFailure otherwise.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.swapwords-Tuple{Any,Integer,Integer,Integer}",
    "page": "Home",
    "title": "GDAL.swapwords",
    "category": "method",
    "text": "GDALSwapWords(void * pData,\n              int nWordSize,\n              int nWordCount,\n              int nWordSkip) -> void\n\nByte swap words in-place.\n\nParameters\n\npData: pointer to start of data buffer.\nnWordSize: size of words being swapped in bytes. Normally 2, 4 or 8.\nnWordCount: the number of words to be swapped in this call.\nnWordSkip: the byte offset from the start of one word to the start of the next. For packed buffers this is the same as nWordSize.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.swapwordsex-Tuple{Any,Integer,UInt64,Integer}",
    "page": "Home",
    "title": "GDAL.swapwordsex",
    "category": "method",
    "text": "GDALSwapWordsEx(void * pData,\n                int nWordSize,\n                size_t nWordCount,\n                int nWordSkip) -> void\n\nByte swap words in-place.\n\nParameters\n\npData: pointer to start of data buffer.\nnWordSize: size of words being swapped in bytes. Normally 2, 4 or 8.\nnWordCount: the number of words to be swapped in this call.\nnWordSkip: the byte offset from the start of one word to the start of the next. For packed buffers this is the same as nWordSize.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.symdifference-Tuple{Ref{GDAL.OGRGeometryH},Ref{GDAL.OGRGeometryH}}",
    "page": "Home",
    "title": "GDAL.symdifference",
    "category": "method",
    "text": "OGR_G_SymDifference(OGRGeometryH hThis,\n                    OGRGeometryH hOther) -> OGRGeometryH\n\nCompute symmetric difference.\n\nParameters\n\nhThis: the geometry.\nhOther: the other geometry.\n\nReturns\n\na new geometry representing the symmetric difference or NULL if the difference is empty or an error occurs.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.symdifference-Tuple{Ref{GDAL.OGRLayerH},Ref{GDAL.OGRLayerH},Ref{GDAL.OGRLayerH},Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.symdifference",
    "category": "method",
    "text": "OGR_L_SymDifference(OGRLayerH pLayerInput,\n                    OGRLayerH pLayerMethod,\n                    OGRLayerH pLayerResult,\n                    char ** papszOptions,\n                    GDALProgressFunc pfnProgress,\n                    void * pProgressArg) -> OGRErr\n\nSymmetrical difference of two layers.\n\nParameters\n\npLayerInput: the input layer. Should not be NULL.\npLayerMethod: the method layer. Should not be NULL.\npLayerResult: the layer where the features resulting from the operation are inserted. Should not be NULL. See above the note about the schema.\npapszOptions: NULL terminated list of options (may be NULL).\npfnProgress: a GDALProgressFunc() compatible callback function for reporting progress or NULL.\npProgressArg: argument to be passed to pfnProgress. May be NULL.\n\nReturns\n\nan error code if there was an error or the execution was interrupted, OGRERR_NONE otherwise.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.symmetricdifference-Tuple{Ref{GDAL.OGRGeometryH},Ref{GDAL.OGRGeometryH}}",
    "page": "Home",
    "title": "GDAL.symmetricdifference",
    "category": "method",
    "text": "OGR_G_SymmetricDifference(OGRGeometryH hThis,\n                          OGRGeometryH hOther) -> OGRGeometryH\n\nCompute symmetric difference (deprecated)\n\n\n\n\n\n"
},

{
    "location": "#GDAL.synctodisk-Tuple{Ref{GDAL.OGRDataSourceH}}",
    "page": "Home",
    "title": "GDAL.synctodisk",
    "category": "method",
    "text": "OGR_DS_SyncToDisk(OGRDataSourceH) -> OGRErr\n\nFlush pending changes to disk.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.synctodisk-Tuple{Ref{GDAL.OGRLayerH}}",
    "page": "Home",
    "title": "GDAL.synctodisk",
    "category": "method",
    "text": "OGR_L_SyncToDisk(OGRLayerH) -> OGRErr\n\nFlush pending changes to disk.\n\nParameters\n\nhLayer: handle to the layer\n\nReturns\n\nOGRERR_NONE if no error occurs (even if nothing is done) or an error code.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.testcapability-Tuple{Ref{GDAL.OGRDataSourceH},Any}",
    "page": "Home",
    "title": "GDAL.testcapability",
    "category": "method",
    "text": "OGR_DS_TestCapability(OGRDataSourceH,\n                      const char *) -> int\n\nTest if capability is available.\n\nParameters\n\nhDS: handle to the data source against which to test the capability.\npszCapability: the capability to test.\n\nReturns\n\nTRUE if capability available otherwise FALSE.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.testcapability-Tuple{Ref{GDAL.OGRLayerH},Any}",
    "page": "Home",
    "title": "GDAL.testcapability",
    "category": "method",
    "text": "OGR_L_TestCapability(OGRLayerH,\n                     const char *) -> int\n\nTest if this layer supported the named capability.\n\nParameters\n\nhLayer: handle to the layer to get the capability from.\npszCap: the name of the capability to test.\n\nReturns\n\nTRUE if the layer has the requested capability, or FALSE otherwise. OGRLayers will return FALSE for any unrecognized capabilities.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.testcapability-Tuple{Ref{GDAL.OGRSFDriverH},Any}",
    "page": "Home",
    "title": "GDAL.testcapability",
    "category": "method",
    "text": "OGR_Dr_TestCapability(OGRSFDriverH,\n                      const char *) -> int\n\nTest if capability is available.\n\nParameters\n\nhDriver: handle to the driver to test the capability against.\npszCap: the capability to test.\n\nReturns\n\nTRUE if capability available otherwise FALSE.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.touches-Tuple{Ref{GDAL.OGRGeometryH},Ref{GDAL.OGRGeometryH}}",
    "page": "Home",
    "title": "GDAL.touches",
    "category": "method",
    "text": "OGR_G_Touches(OGRGeometryH hThis,\n              OGRGeometryH hOther) -> int\n\nTest for touching.\n\nParameters\n\nhThis: the geometry to compare.\nhOther: the other geometry to compare.\n\nReturns\n\nTRUE if they are touching, otherwise FALSE.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.tpstransform-Tuple{Any,Integer,Integer,Any,Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.tpstransform",
    "category": "method",
    "text": "GDALTPSTransform(void * pTransformArg,\n                 int bDstToSrc,\n                 int nPointCount,\n                 double * x,\n                 double * y,\n                 double * z,\n                 int * panSuccess) -> int\n\nTransforms point based on GCP derived polynomial model.\n\nParameters\n\npTransformArg: return value from GDALCreateTPSTransformer().\nbDstToSrc: TRUE if transformation is from the destination (georeferenced) coordinates to pixel/line or FALSE when transforming from pixel/line to georeferenced coordinates.\nnPointCount: the number of values in the x, y and z arrays.\nx: array containing the X values to be transformed.\ny: array containing the Y values to be transformed.\nz: array containing the Z values to be transformed.\npanSuccess: array in which a flag indicating success (TRUE) or failure (FALSE) of the transformation are placed.\n\nReturns\n\nTRUE.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.transform-Tuple{Ref{GDAL.OGRGeometryH},Ref{GDAL.OGRCoordinateTransformationH}}",
    "page": "Home",
    "title": "GDAL.transform",
    "category": "method",
    "text": "OGR_G_Transform(OGRGeometryH hGeom,\n                OGRCoordinateTransformationH hTransform) -> OGRErr\n\nApply arbitrary coordinate transformation to geometry.\n\nParameters\n\nhGeom: handle on the geometry to apply the transform to.\nhTransform: handle on the transformation to apply.\n\nReturns\n\nOGRERR_NONE on success or an error code.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.transformgeolocations-Tuple{Ref{GDAL.GDALRasterBandH},Ref{GDAL.GDALRasterBandH},Ref{GDAL.GDALRasterBandH},Ref{GDAL.GDALTransformerFunc},Any,Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.transformgeolocations",
    "category": "method",
    "text": "GDALTransformGeolocations(GDALRasterBandH hXBand,\n                          GDALRasterBandH hYBand,\n                          GDALRasterBandH hZBand,\n                          GDALTransformerFunc pfnTransformer,\n                          void * pTransformArg,\n                          GDALProgressFunc pfnProgress,\n                          void * pProgressArg,\n                          char ** papszOptions) -> CPLErr\n\nTransform locations held in bands.\n\nParameters\n\nhXBand: the band containing the X locations (usually long/easting).\nhYBand: the band containing the Y locations (usually lat/northing).\nhZBand: the band containing the Z locations (may be NULL).\npfnTransformer: the transformer function.\npTransformArg: the callback data for the transformer function.\npfnProgress: callback for reporting algorithm progress matching the GDALProgressFunc() semantics. May be NULL.\npProgressArg: callback argument passed to pfnProgress.\npapszOptions: list of name/value options - none currently supported.\n\nReturns\n\nCENone on success or CEFailure if an error occurs.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.transformto-Tuple{Ref{GDAL.OGRGeometryH},Ref{GDAL.OGRSpatialReferenceH}}",
    "page": "Home",
    "title": "GDAL.transformto",
    "category": "method",
    "text": "OGR_G_TransformTo(OGRGeometryH hGeom,\n                  OGRSpatialReferenceH hSRS) -> OGRErr\n\nTransform geometry to new spatial reference system.\n\nParameters\n\nhGeom: handle on the geometry to apply the transform to.\nhSRS: handle on the spatial reference system to apply.\n\nReturns\n\nOGRERR_NONE on success, or an error code.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.translate-Tuple{Any,Ref{#s1236} where #s1236<:GDAL.GDALDatasetH,Any,Any}",
    "page": "Home",
    "title": "GDAL.translate",
    "category": "method",
    "text": "GDALTranslate(const char * pszDest,\n              GDALDatasetH hSrcDataset,\n              const GDALTranslateOptions * psOptionsIn,\n              int * pbUsageError) -> GDALDatasetH\n\nConverts raster data between different formats.\n\nParameters\n\npszDest: the destination dataset path.\nhSrcDataset: the source dataset handle.\npsOptionsIn: the options struct returned by GDALTranslateOptionsNew() or NULL.\npbUsageError: the pointer to int variable to determine any usage error has occurred or NULL.\n\nReturns\n\nthe output dataset (new dataset that must be closed using GDALClose()) or NULL in case of error.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.translateoptionsfree-Tuple{Any}",
    "page": "Home",
    "title": "GDAL.translateoptionsfree",
    "category": "method",
    "text": "GDALTranslateOptionsFree(GDALTranslateOptions * psOptions) -> void\n\nFrees the GDALTranslateOptions struct.\n\nParameters\n\npsOptions: the options struct for GDALTranslate().\n\n\n\n\n\n"
},

{
    "location": "#GDAL.translateoptionsnew-Tuple{Any,Any}",
    "page": "Home",
    "title": "GDAL.translateoptionsnew",
    "category": "method",
    "text": "GDALTranslateOptionsNew(char ** papszArgv,\n                        GDALTranslateOptionsForBinary * psOptionsForBinary) -> GDALTranslateOptions *\n\nAllocates a GDALTranslateOptions struct.\n\nParameters\n\npapszArgv: NULL terminated list of options (potentially including filename and open options too), or NULL. The accepted options are the ones of the gdal_translate utility.\npsOptionsForBinary: (output) may be NULL (and should generally be NULL), otherwise (gdaltranslatebin.cpp use case) must be allocated with GDALTranslateOptionsForBinaryNew() prior to this function. Will be filled with potentially present filename, open options,...\n\nReturns\n\npointer to the allocated GDALTranslateOptions struct. Must be freed with GDALTranslateOptionsFree().\n\n\n\n\n\n"
},

{
    "location": "#GDAL.translateoptionssetprogress-Tuple{Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.translateoptionssetprogress",
    "category": "method",
    "text": "GDALTranslateOptionsSetProgress(GDALTranslateOptions * psOptions,\n                                GDALProgressFunc pfnProgress,\n                                void * pProgressData) -> void\n\nSet a progress function.\n\nParameters\n\npsOptions: the options struct for GDALTranslate().\npfnProgress: the progress callback.\npProgressData: the user data for the progress callback.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.triangulationcomputebarycentriccoefficients-Tuple{Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.triangulationcomputebarycentriccoefficients",
    "category": "method",
    "text": "GDALTriangulationComputeBarycentricCoefficients(GDALTriangulation * psDT,\n                                                const double * padfX,\n                                                const double * padfY) -> int\n\nComputes barycentric coefficients for each triangles of the triangulation.\n\nParameters\n\npsDT: triangulation.\npadfX: x coordinates of the points. Must be identical to the one passed to GDALTriangulationCreateDelaunay().\npadfY: y coordinates of the points. Must be identical to the one passed to GDALTriangulationCreateDelaunay().\n\nReturns\n\nTRUE in case of success.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.triangulationcomputebarycentriccoordinates-Tuple{Any,Integer,Real,Real,Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.triangulationcomputebarycentriccoordinates",
    "category": "method",
    "text": "GDALTriangulationComputeBarycentricCoordinates(const GDALTriangulation * psDT,\n                                               int nFacetIdx,\n                                               double dfX,\n                                               double dfY,\n                                               double * pdfL1,\n                                               double * pdfL2,\n                                               double * pdfL3) -> int\n\nComputes the barycentric coordinates of a point.\n\nParameters\n\npsDT: triangulation.\nnFacetIdx: index of the triangle in the triangulation\ndfX: x coordinate of the point.\ndfY: y coordinate of the point.\npdfL1: (output) pointer to the 1st barycentric coordinate.\npdfL2: (output) pointer to the 2nd barycentric coordinate.\npdfL3: (output) pointer to the 2nd barycentric coordinate.\n\nReturns\n\nTRUE in case of success.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.triangulationcreatedelaunay-Tuple{Integer,Any,Any}",
    "page": "Home",
    "title": "GDAL.triangulationcreatedelaunay",
    "category": "method",
    "text": "GDALTriangulationCreateDelaunay(int nPoints,\n                                const double * padfX,\n                                const double * padfY) -> GDALTriangulation *\n\nComputes a Delaunay triangulation of the passed points.\n\nParameters\n\nnPoints: number of points\npadfX: x coordinates of the points.\npadfY: y coordinates of the points.\n\nReturns\n\ntriangulation that must be freed with GDALTriangulationFree(), or NULL in case of error.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.triangulationfindfacetbruteforce-Tuple{Any,Real,Real,Any}",
    "page": "Home",
    "title": "GDAL.triangulationfindfacetbruteforce",
    "category": "method",
    "text": "GDALTriangulationFindFacetBruteForce(const GDALTriangulation * psDT,\n                                     double dfX,\n                                     double dfY,\n                                     int * panOutputFacetIdx) -> int\n\nReturns the index of the triangle that contains the point by iterating over all triangles.\n\nParameters\n\npsDT: triangulation.\ndfX: x coordinate of the point.\ndfY: y coordinate of the point.\npanOutputFacetIdx: (output) pointer to the index of the triangle.\n\nReturns\n\nindex >= 0 of the triangle in case of success, -1 otherwise.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.triangulationfindfacetdirected-Tuple{Any,Integer,Real,Real,Any}",
    "page": "Home",
    "title": "GDAL.triangulationfindfacetdirected",
    "category": "method",
    "text": "GDALTriangulationFindFacetDirected(const GDALTriangulation * psDT,\n                                   int nFacetIdx,\n                                   double dfX,\n                                   double dfY,\n                                   int * panOutputFacetIdx) -> int\n\nReturns the index of the triangle that contains the point by walking in the triangulation.\n\nParameters\n\npsDT: triangulation.\nnFacetIdx: index of first triangle to start with.\ndfX: x coordinate of the point.\ndfY: y coordinate of the point.\npanOutputFacetIdx: (output) pointer to the index of the triangle.\n\nReturns\n\nTRUE in case of success, -1 otherwise.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.triangulationfree-Tuple{Any}",
    "page": "Home",
    "title": "GDAL.triangulationfree",
    "category": "method",
    "text": "GDALTriangulationFree(GDALTriangulation * psDT) -> void\n\nFree a triangulation.\n\nParameters\n\npsDT: triangulation.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.triangulationterminate-Tuple{}",
    "page": "Home",
    "title": "GDAL.triangulationterminate",
    "category": "method",
    "text": "GDALTriangulationTerminate() -> void\n\n\n\n\n\n"
},

{
    "location": "#GDAL.turnfailureintowarning-Tuple{Integer}",
    "page": "Home",
    "title": "GDAL.turnfailureintowarning",
    "category": "method",
    "text": "CPLTurnFailureIntoWarning(int bOn) -> void\n\nWhether failures should be turned into warnings.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.union-Tuple{Ref{GDAL.OGRGeometryH},Ref{GDAL.OGRGeometryH}}",
    "page": "Home",
    "title": "GDAL.union",
    "category": "method",
    "text": "OGR_G_Union(OGRGeometryH hThis,\n            OGRGeometryH hOther) -> OGRGeometryH\n\nCompute union.\n\nParameters\n\nhThis: the geometry.\nhOther: the other geometry.\n\nReturns\n\na new geometry representing the union or NULL if an error occurs.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.union-Tuple{Ref{GDAL.OGRLayerH},Ref{GDAL.OGRLayerH},Ref{GDAL.OGRLayerH},Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.union",
    "category": "method",
    "text": "OGR_L_Union(OGRLayerH pLayerInput,\n            OGRLayerH pLayerMethod,\n            OGRLayerH pLayerResult,\n            char ** papszOptions,\n            GDALProgressFunc pfnProgress,\n            void * pProgressArg) -> OGRErr\n\nUnion of two layers.\n\nParameters\n\npLayerInput: the input layer. Should not be NULL.\npLayerMethod: the method layer. Should not be NULL.\npLayerResult: the layer where the features resulting from the operation are inserted. Should not be NULL. See above the note about the schema.\npapszOptions: NULL terminated list of options (may be NULL).\npfnProgress: a GDALProgressFunc() compatible callback function for reporting progress or NULL.\npProgressArg: argument to be passed to pfnProgress. May be NULL.\n\nReturns\n\nan error code if there was an error or the execution was interrupted, OGRERR_NONE otherwise.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.unioncascaded-Tuple{Ref{GDAL.OGRGeometryH}}",
    "page": "Home",
    "title": "GDAL.unioncascaded",
    "category": "method",
    "text": "OGR_G_UnionCascaded(OGRGeometryH hThis) -> OGRGeometryH\n\nCompute union using cascading.\n\nParameters\n\nhThis: the geometry.\n\nReturns\n\na new geometry representing the union or NULL if an error occurs.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.unsafe_loadstringlist-Tuple{Ptr{Cstring}}",
    "page": "Home",
    "title": "GDAL.unsafe_loadstringlist",
    "category": "method",
    "text": "Load a null-terminated list of strings\n\nThat is it expects a StringList, in the sense of the CPL functions, as a null-terminated array of strings.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.unsetfield-Tuple{Ref{GDAL.OGRFeatureH},Integer}",
    "page": "Home",
    "title": "GDAL.unsetfield",
    "category": "method",
    "text": "OGR_F_UnsetField(OGRFeatureH hFeat,\n                 int iField) -> void\n\nClear a field, marking it as unset.\n\nParameters\n\nhFeat: handle to the feature on which the field is.\niField: the field to unset.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.update-Tuple{Ref{GDAL.OGRLayerH},Ref{GDAL.OGRLayerH},Ref{GDAL.OGRLayerH},Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.update",
    "category": "method",
    "text": "OGR_L_Update(OGRLayerH pLayerInput,\n             OGRLayerH pLayerMethod,\n             OGRLayerH pLayerResult,\n             char ** papszOptions,\n             GDALProgressFunc pfnProgress,\n             void * pProgressArg) -> OGRErr\n\nUpdate this layer with features from the update layer.\n\nParameters\n\npLayerInput: the input layer. Should not be NULL.\npLayerMethod: the method layer. Should not be NULL.\npLayerResult: the layer where the features resulting from the operation are inserted. Should not be NULL. See above the note about the schema.\npapszOptions: NULL terminated list of options (may be NULL).\npfnProgress: a GDALProgressFunc() compatible callback function for reporting progress or NULL.\npProgressArg: argument to be passed to pfnProgress. May be NULL.\n\nReturns\n\nan error code if there was an error or the execution was interrupted, OGRERR_NONE otherwise.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.usetransformer-Tuple{Any,Integer,Integer,Any,Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.usetransformer",
    "category": "method",
    "text": "GDALUseTransformer(void * pTransformArg,\n                   int bDstToSrc,\n                   int nPointCount,\n                   double * x,\n                   double * y,\n                   double * z,\n                   int * panSuccess) -> int\n\n\n\n\n\n"
},

{
    "location": "#GDAL.validate-Tuple{Ref{GDAL.OGRFeatureH},Integer,Integer}",
    "page": "Home",
    "title": "GDAL.validate",
    "category": "method",
    "text": "OGR_F_Validate(OGRFeatureH hFeat,\n               int nValidateFlags,\n               int bEmitError) -> int\n\nValidate that a feature meets constraints of its schema.\n\nParameters\n\nhFeat: handle to the feature to validate.\nnValidateFlags: OGRFVALALL or combination of OGRFVALNULL, OGRFVALGEOMTYPE, OGRFVALWIDTH and OGRFVALALLOWNULLWHEN_DEFAULT with \'|\' operator\nbEmitError: TRUE if a CPLError() must be emitted when a check fails\n\nReturns\n\nTRUE if all enabled validation tests pass.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.validate-Tuple{Ref{GDAL.OGRSpatialReferenceH}}",
    "page": "Home",
    "title": "GDAL.validate",
    "category": "method",
    "text": "OSRValidate(OGRSpatialReferenceH) -> OGRErr\n\nValidate SRS tokens.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.validatecreationoptions-Tuple{Ref{#s1236} where #s1236<:GDAL.GDALDriverH,Any}",
    "page": "Home",
    "title": "GDAL.validatecreationoptions",
    "category": "method",
    "text": "GDALValidateCreationOptions(GDALDriverH hDriver,\n                            char ** papszCreationOptions) -> int\n\nValidate the list of creation options that are handled by a driver.\n\nParameters\n\nhDriver: the handle of the driver with whom the lists of creation option must be validated\npapszCreationOptions: the list of creation options. An array of strings, whose last element is a NULL pointer\n\nReturns\n\nTRUE if the list of creation options is compatible with the Create() and CreateCopy() method of the driver, FALSE otherwise.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.value-Tuple{Ref{GDAL.OGRGeometryH},Real}",
    "page": "Home",
    "title": "GDAL.value",
    "category": "method",
    "text": "OGR_G_Value(OGRGeometryH hGeom,\n            double dfDistance) -> OGRGeometryH\n\nFetch point at given distance along curve.\n\nParameters\n\nhGeom: curve geometry.\ndfDistance: distance along the curve at which to sample position. This distance should be between zero and get_Length() for this curve.\n\nReturns\n\na point or NULL.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.vectortranslate-Tuple{Any,Ref{#s1236} where #s1236<:GDAL.GDALDatasetH,Integer,Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.vectortranslate",
    "category": "method",
    "text": "GDALVectorTranslate(const char * pszDest,\n                    GDALDatasetH hDstDS,\n                    int nSrcCount,\n                    GDALDatasetH * pahSrcDS,\n                    const GDALVectorTranslateOptions * psOptions,\n                    int * pbUsageError) -> GDALDatasetH\n\nConverts vector data between file formats.\n\nParameters\n\npszDest: the destination dataset path or NULL.\nhDstDS: the destination dataset or NULL.\nnSrcCount: the number of input datasets (only 1 supported currently)\npahSrcDS: the list of input datasets.\npsOptionsIn: the options struct returned by GDALVectorTranslateOptionsNew() or NULL.\npbUsageError: the pointer to int variable to determine any usage error has occurred\n\nReturns\n\nthe output dataset (new dataset that must be closed using GDALClose(), or hDstDS is not NULL) or NULL in case of error.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.vectortranslateoptionsfree-Tuple{Any}",
    "page": "Home",
    "title": "GDAL.vectortranslateoptionsfree",
    "category": "method",
    "text": "GDALVectorTranslateOptionsFree(GDALVectorTranslateOptions * psOptions) -> void\n\nFrees the GDALVectorTranslateOptions struct.\n\nParameters\n\npsOptions: the options struct for GDALVectorTranslate().\n\n\n\n\n\n"
},

{
    "location": "#GDAL.vectortranslateoptionsnew-Tuple{Any,Any}",
    "page": "Home",
    "title": "GDAL.vectortranslateoptionsnew",
    "category": "method",
    "text": "GDALVectorTranslateOptionsNew(char ** papszArgv,\n                              GDALVectorTranslateOptionsForBinary * psOptionsForBinary) -> GDALVectorTranslateOptions *\n\nallocates a GDALVectorTranslateOptions struct.\n\nParameters\n\npapszArgv: NULL terminated list of options (potentially including filename and open options too), or NULL. The accepted options are the ones of the ogr2ogr utility.\npsOptionsForBinary: (output) may be NULL (and should generally be NULL), otherwise (gdaltranslatebin.cpp use case) must be allocated with GDALVectorTranslateOptionsForBinaryNew() prior to this function. Will be filled with potentially present filename, open options,...\n\nReturns\n\npointer to the allocated GDALVectorTranslateOptions struct. Must be freed with GDALVectorTranslateOptionsFree().\n\n\n\n\n\n"
},

{
    "location": "#GDAL.vectortranslateoptionssetprogress-Tuple{Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.vectortranslateoptionssetprogress",
    "category": "method",
    "text": "GDALVectorTranslateOptionsSetProgress(GDALVectorTranslateOptions * psOptions,\n                                      GDALProgressFunc pfnProgress,\n                                      void * pProgressData) -> void\n\nSet a progress function.\n\nParameters\n\npsOptions: the options struct for GDALVectorTranslate().\npfnProgress: the progress callback.\npProgressData: the user data for the progress callback.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.vrtaddband-Tuple{Ref{GDAL.VRTDatasetH},GDAL.GDALDataType,Any}",
    "page": "Home",
    "title": "GDAL.vrtaddband",
    "category": "method",
    "text": "VRTAddBand(VRTDatasetH,\n           GDALDataType,\n           char **) -> int\n\n\n\n\n\n"
},

{
    "location": "#GDAL.vrtaddcomplexsource-Tuple{Ref{GDAL.VRTSourcedRasterBandH},Ref{GDAL.GDALRasterBandH},Integer,Integer,Integer,Integer,Integer,Integer,Integer,Integer,Real,Real,Real}",
    "page": "Home",
    "title": "GDAL.vrtaddcomplexsource",
    "category": "method",
    "text": "VRTAddComplexSource(VRTSourcedRasterBandH,\n                    GDALRasterBandH,\n                    int,\n                    int,\n                    int,\n                    int,\n                    int,\n                    int,\n                    int,\n                    int,\n                    double,\n                    double,\n                    double) -> CPLErr\n\n\n\n\n\n"
},

{
    "location": "#GDAL.vrtaddfuncsource-Tuple{Ref{GDAL.VRTSourcedRasterBandH},Ref{GDAL.VRTImageReadFunc},Any,Real}",
    "page": "Home",
    "title": "GDAL.vrtaddfuncsource",
    "category": "method",
    "text": "VRTAddFuncSource(VRTSourcedRasterBandH,\n                 VRTImageReadFunc,\n                 void *,\n                 double) -> CPLErr\n\n\n\n\n\n"
},

{
    "location": "#GDAL.vrtaddsimplesource-Tuple{Ref{GDAL.VRTSourcedRasterBandH},Ref{GDAL.GDALRasterBandH},Integer,Integer,Integer,Integer,Integer,Integer,Integer,Integer,Any,Real}",
    "page": "Home",
    "title": "GDAL.vrtaddsimplesource",
    "category": "method",
    "text": "VRTAddSimpleSource(VRTSourcedRasterBandH,\n                   GDALRasterBandH,\n                   int,\n                   int,\n                   int,\n                   int,\n                   int,\n                   int,\n                   int,\n                   int,\n                   const char *,\n                   double) -> CPLErr\n\n\n\n\n\n"
},

{
    "location": "#GDAL.vrtaddsource-Tuple{Ref{GDAL.VRTSourcedRasterBandH},Ref{GDAL.VRTSourceH}}",
    "page": "Home",
    "title": "GDAL.vrtaddsource",
    "category": "method",
    "text": "VRTAddSource(VRTSourcedRasterBandH,\n             VRTSourceH) -> CPLErr\n\n\n\n\n\n"
},

{
    "location": "#GDAL.vrtcreate-Tuple{Integer,Integer}",
    "page": "Home",
    "title": "GDAL.vrtcreate",
    "category": "method",
    "text": "VRTCreate(int,\n          int) -> VRTDatasetH\n\n\n\n\n\n"
},

{
    "location": "#GDAL.vrtflushcache-Tuple{Ref{GDAL.VRTDatasetH}}",
    "page": "Home",
    "title": "GDAL.vrtflushcache",
    "category": "method",
    "text": "VRTFlushCache(VRTDatasetH) -> void\n\n\n\n\n\n"
},

{
    "location": "#GDAL.vrtserializetoxml-Tuple{Ref{GDAL.VRTDatasetH},Any}",
    "page": "Home",
    "title": "GDAL.vrtserializetoxml",
    "category": "method",
    "text": "VRTSerializeToXML(VRTDatasetH,\n                  const char *) -> CPLXMLNode *\n\n\n\n\n\n"
},

{
    "location": "#GDAL.warp-Tuple{Any,Ref{#s1236} where #s1236<:GDAL.GDALDatasetH,Integer,Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.warp",
    "category": "method",
    "text": "GDALWarp(const char * pszDest,\n         GDALDatasetH hDstDS,\n         int nSrcCount,\n         GDALDatasetH * pahSrcDS,\n         const GDALWarpAppOptions * psOptionsIn,\n         int * pbUsageError) -> GDALDatasetH\n\nImage reprojection and warping function.\n\nParameters\n\npszDest: the destination dataset path or NULL.\nhDstDS: the destination dataset or NULL.\nnSrcCount: the number of input datasets.\npahSrcDS: the list of input datasets.\npsOptionsIn: the options struct returned by GDALWarpAppOptionsNew() or NULL.\npbUsageError: the pointer to int variable to determine any usage error has occurred.\n\nReturns\n\nthe output dataset (new dataset that must be closed using GDALClose(), or hDstDS if not NULL) or NULL in case of error.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.warpappoptionsfree-Tuple{Any}",
    "page": "Home",
    "title": "GDAL.warpappoptionsfree",
    "category": "method",
    "text": "GDALWarpAppOptionsFree(GDALWarpAppOptions * psOptions) -> void\n\nFrees the GDALWarpAppOptions struct.\n\nParameters\n\npsOptions: the options struct for GDALWarp().\n\n\n\n\n\n"
},

{
    "location": "#GDAL.warpappoptionsnew-Tuple{Any,Any}",
    "page": "Home",
    "title": "GDAL.warpappoptionsnew",
    "category": "method",
    "text": "GDALWarpAppOptionsNew(char ** papszArgv,\n                      GDALWarpAppOptionsForBinary * psOptionsForBinary) -> GDALWarpAppOptions *\n\nAllocates a GDALWarpAppOptions struct.\n\nParameters\n\npapszArgv: NULL terminated list of options (potentially including filename and open options too), or NULL. The accepted options are the ones of the gdalwarp utility.\npsOptionsForBinary: (output) may be NULL (and should generally be NULL), otherwise (gdaltranslatebin.cpp use case) must be allocated with GDALWarpAppOptionsForBinaryNew() prior to this function. Will be filled with potentially present filename, open options,...\n\nReturns\n\npointer to the allocated GDALWarpAppOptions struct. Must be freed with GDALWarpAppOptionsFree().\n\n\n\n\n\n"
},

{
    "location": "#GDAL.warpappoptionssetprogress-Tuple{Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.warpappoptionssetprogress",
    "category": "method",
    "text": "GDALWarpAppOptionsSetProgress(GDALWarpAppOptions * psOptions,\n                              GDALProgressFunc pfnProgress,\n                              void * pProgressData) -> void\n\nSet a progress function.\n\nParameters\n\npsOptions: the options struct for GDALWarpApp().\npfnProgress: the progress callback.\npProgressData: the user data for the progress callback.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.warpappoptionssetwarpoption-Tuple{Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.warpappoptionssetwarpoption",
    "category": "method",
    "text": "GDALWarpAppOptionsSetWarpOption(GDALWarpAppOptions * psOptions,\n                                const char * pszKey,\n                                const char * pszValue) -> void\n\nSet a warp option.\n\nParameters\n\npsOptions: the options struct for GDALWarpApp().\npszKey: key.\npszValue: value.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.within-Tuple{Ref{GDAL.OGRGeometryH},Ref{GDAL.OGRGeometryH}}",
    "page": "Home",
    "title": "GDAL.within",
    "category": "method",
    "text": "OGR_G_Within(OGRGeometryH hThis,\n             OGRGeometryH hOther) -> int\n\nTest for containment.\n\nParameters\n\nhThis: the geometry to compare.\nhOther: the other geometry to compare.\n\nReturns\n\nTRUE if hThis is within hOther, otherwise FALSE.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.wkbsize-Tuple{Ref{GDAL.OGRGeometryH}}",
    "page": "Home",
    "title": "GDAL.wkbsize",
    "category": "method",
    "text": "OGR_G_WkbSize(OGRGeometryH hGeom) -> int\n\nReturns size of related binary representation.\n\nParameters\n\nhGeom: handle on the geometry to get the binary size from.\n\nReturns\n\nsize of binary representation in bytes.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.writeblock-Tuple{Ref{GDAL.GDALRasterBandH},Integer,Integer,Any}",
    "page": "Home",
    "title": "GDAL.writeblock",
    "category": "method",
    "text": "GDALWriteBlock(GDALRasterBandH hBand,\n               int nXOff,\n               int nYOff,\n               void * pData) -> CPLErr\n\nWrite a block of image data efficiently.\n\n\n\n\n\n"
},

{
    "location": "#GDAL.writeworldfile-Tuple{Any,Any,Any}",
    "page": "Home",
    "title": "GDAL.writeworldfile",
    "category": "method",
    "text": "GDALWriteWorldFile(const char *,\n                   const char *,\n                   double *) -> int\n\nWrite ESRI world file.\n\nParameters\n\npszBaseFilename: the target raster file.\npszExtension: the extension to use (i.e. \".wld\"). Must not be NULL\npadfGeoTransform: the six double array from which the geotransformation should be read.\n\nReturns\n\nTRUE on success or FALSE on failure.\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [GDAL]\nOrder = [:type, :function]"
},

]}
