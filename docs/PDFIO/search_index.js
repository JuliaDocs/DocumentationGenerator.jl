var documenterSearchIndex = {"docs": [

{
    "location": "intro/#",
    "page": "PDFIO",
    "title": "PDFIO",
    "category": "page",
    "text": ""
},

{
    "location": "intro/#PDFIO-1",
    "page": "PDFIO",
    "title": "PDFIO",
    "category": "section",
    "text": "PDFIO is a simple PDF API focused on processing text from PDF files. The APIs is kept fairly simple and follows the PDF-32000-1:2008 specification as downloaded from Adobe website. The updated ISO versions can be downloaded from ISO websites. The API does not consider those versions yet. The API is developed in Julia keeping in mind the need for the file format parsing in native form. More over the object structure of PDF makes the API extend-able.Technically,the PDFIO does not fully fit into the stream based file access APIs like JuliaIO/FileIO. However, there is a general interest to submit this API in that direction to ensure it\'s considered as a native file format understood by Julia."
},

{
    "location": "intro/#About-PDF-1",
    "page": "PDFIO",
    "title": "About PDF",
    "category": "section",
    "text": "For people new to PDF development, PDF is a highly cross referenced file format without any specific linear location to read content. You can consider this as a form of a tree which needs to be read or understood as reading nodes and branches of a   tree. Hence, if your application demands you need not have to scan the full file format to get your job done. This is very different thinking than most file formats that are parsed from beginning to end.The second part to remember is PDF is a derivative of a Page Description Language (PDL) namely PostScript. The visual sanctity is considered most important than document structure. Although, the document structure was introduced in PDF as an afterthought a lot later, it\'s not core to the format. Unfortunately, the creators never focus too much on this as it\'s a post processing over a print stream."
},

{
    "location": "intro/#Intent-and-Limitations-1",
    "page": "PDFIO",
    "title": "Intent and Limitations",
    "category": "section",
    "text": "The APIs are developed for text extraction as a major focus. The rendering and printing aspects of PDF are not provided enough thoughts. Secondly, a native script based language was chosen as PDF specification is highly misunderstood and interpretations significantly vary from document creator to creator. A script based language provides flexibility to fix issues as we discover more nuances in the new files we discover. Thirdly, every well-developed native library out in the market need connectors and PDF being a standard should have native support in a modern language. Although, one can claim PDF is not the most  ideal language for text processing, it\'s just ubiquitous and cannot be ignored.Nothing stops anyone to extend this APIs into a fully developed PDF Library  that\'s available to both commercial as well as non-commercial licensing under a  flexible license model. I am happy to collaborate with anyone who sees value in   extending this library in that direction. MIT License looks most flexible to  the author for the time-being."
},

{
    "location": "intro/#Common-1",
    "page": "PDFIO",
    "title": "Common",
    "category": "section",
    "text": "Error handling is currently fairly weak with only errors or asserts leading to termination. Ideally, if the PDF is structurally weak, there is no point  extracting content from the same. However, not all objects may be well-formed a lenient approach may be taken in the PD layers."
},

{
    "location": "intro/#Cos-1",
    "page": "PDFIO",
    "title": "Cos",
    "category": "section",
    "text": "Streams have larger number of filter types. Only Flate has been tested to work reasonably.Filterparms are varied and only PNG filter UP has been tested to some extent as part of ObjectStream. RLE, ACII85, ASCIIHex are tested as well. Multiple  filters per stream has been tested as well.Object stream extends attribute has not been considered. May not be neededfor a reader context.Free indirect objects are ignored in the PDF file as it\'s not typically areader requirement.No security is implemented for encrypted PDFs"
},

{
    "location": "intro/#PD-1",
    "page": "PDFIO",
    "title": "PD",
    "category": "section",
    "text": "PD layer is just barely developed for reading pages and extracting contents from it."
},

{
    "location": "intro/#Reference-to-Adobe-1",
    "page": "PDFIO",
    "title": "Reference to Adobe",
    "category": "section",
    "text": "It\'s almost impossible to talk PDF without reference to Adobe. All copyrights or trademarks are that are owned by Adobe or ISO, which have been referred to inadvertently without stating ownership, are owned by them. The author also has been part of Adobe\'s development culture in early part of his career with specific to PDF technology for about 2 years. However, the author has not been part of any activities related to PDF development from 2003. Hence, this API can  be considered a clean room development. Usage of words like  Carousel and Cos are pretty much public knowledge and large number of reference  to the same can be obtained from industry related websites etc."
},

{
    "location": "intro/#Test-Files-1",
    "page": "PDFIO",
    "title": "Test Files",
    "category": "section",
    "text": "Not all PDF files that were used to test the library has been owned by the author. Hence, the author cannot make those files available to general public for distribution under the source code license. However, the author is grateful to the PDF document library maintained by mikal@stillhq.com. Some of the files have to downloaded from the database for unit testing of the documents. Some files are also included from openpreserve . These files can be distributed with CC0."
},

{
    "location": "#",
    "page": "API Structure and Design",
    "title": "API Structure and Design",
    "category": "page",
    "text": ""
},

{
    "location": "#API-Structure-and-Design-1",
    "page": "API Structure and Design",
    "title": "API Structure and Design",
    "category": "section",
    "text": "The API is segregated into 3 modules:Common\nCos\nPDCommon module has general system access and file access and parsing APIs.Cos module is the low level file format for PDF. Carousel Object Structure was original term proposed inside Adobe which later transformed into Acrobat. Cos layer has the object structure, definition and the cross references to access them.PD module is the higher level document access layer. Accessing PDF pages or extracting the content from there or understanding document rendering using fonts or image objects will be typically in this layer. Please note that many objects in the PD layer actually refer to the Cos structure. You can consider PD Layer as the business logic while Cos Layer as the database for it."
},

{
    "location": "#PDFIO.Common.CDTextString",
    "page": "API Structure and Design",
    "title": "PDFIO.Common.CDTextString",
    "category": "type",
    "text": "    CDTextString\n\nPDF file format structure provides two primary string types. Hexadecimal string CosXString and literal string CosLiteralString. However, these are mere binary representation of string types without having any encoding associated for semantic representation. Determination of encoding is carried out mostly by associated fonts and character maps in the content stream. There are also strings used in descriptions and other attributes of a PDF file where no font or mapping information is provided. This represents the string type in such situations. Typically, strings in PDFs are of 3 types.\n\nText string  a. PDDocEncoded string - Similar to ISO_8859-1  b. UTF-16BE strings\nASCII string\nByte string - Pure binary data no interpretation\n\n1 and 2 can be represented by the CDTextString. convert methods are provided to translate the CosString to CDTextString\n\n\n\n\n\n"
},

{
    "location": "#PDFIO.Common.CDDate",
    "page": "API Structure and Design",
    "title": "PDFIO.Common.CDDate",
    "category": "type",
    "text": "    CDDate\n\nInternally represented as string objects, these are timezone enabled date and time objects.\n\nPDF files support the string format: (D:YYYYMMDDHHmmSSOHH\'mm)\n\n\n\n\n\n"
},

{
    "location": "#PDFIO.Common.CDDate-Tuple{String}",
    "page": "API Structure and Design",
    "title": "PDFIO.Common.CDDate",
    "category": "method",
    "text": "    CDDate(s::CDTextString)\n\nPDF files support the string format: (D:YYYYMMDDHHmmSSOHH\'mm)\n\n\n\n\n\n"
},

{
    "location": "#PDFIO.Common.CDRect",
    "page": "API Structure and Design",
    "title": "PDFIO.Common.CDRect",
    "category": "type",
    "text": "    CDRect\n\nAn CosArray representation of a rectangle in the lower left and upper right point format\n\n\n\n\n\n"
},

{
    "location": "#Common-1",
    "page": "API Structure and Design",
    "title": "Common",
    "category": "section",
    "text": "CDTextString\nCDDate\nCDDate(::CDTextString)\nCDRect"
},

{
    "location": "#PDFIO.Cos.CosObject",
    "page": "API Structure and Design",
    "title": "PDFIO.Cos.CosObject",
    "category": "type",
    "text": "    CosObject\n\nPDF is a structured document format with lots of internal data structures like dictionaries, arrays, trees. CosObject is the interface to access these objects and get detailed access to the objects and gather additional information. Although, defined in the COS layer, objects of these type are returned from almost all the APIs. Hence, the objects have a separate significance whether you need to use the Cos layer or not. Below is the object hierarchy.\n\nCosObject                           Abstract\n    CosNull                         Value (CosNullType)\nCosString                           Abstract\nCosName                             Concrete\nCosNumeric                          Abstract\n    CosInt                          Concrete\n    CosFloat                        Concrete\nCosBoolean                          Concrete\n    CosTrue                         Value (CosBoolean)\n    CosFalse                        Value (CosBoolean)\nCosDict                             Concrete\nCosArray                            Concrete\nCosStream                           Concrete (always wrapped as an indirect object)\nCosIndirectObjectRef                Concrete (only useful when CosDoc is available)\n\n\n\n\n\n"
},

{
    "location": "#PDFIO.Cos.CosNull",
    "page": "API Structure and Design",
    "title": "PDFIO.Cos.CosNull",
    "category": "constant",
    "text": "    CosNull\n\nPDF representation of a null object. Can be applied to CosObject of any type.\n\n\n\n\n\n"
},

{
    "location": "#PDFIO.Cos.CosString",
    "page": "API Structure and Design",
    "title": "PDFIO.Cos.CosString",
    "category": "type",
    "text": "    CosString\n\nAbstract type that represents a PDF string. In PDF objects are mere byte representations. They translate to actual text strings by application of fonts and associated encodings.\n\n\n\n\n\n"
},

{
    "location": "#PDFIO.Cos.CosName",
    "page": "API Structure and Design",
    "title": "PDFIO.Cos.CosName",
    "category": "type",
    "text": "    CosName\n\nName objects are symbols used in PDF documents.\n\n\n\n\n\n"
},

{
    "location": "#PDFIO.Cos.@cn_str",
    "page": "API Structure and Design",
    "title": "PDFIO.Cos.@cn_str",
    "category": "macro",
    "text": "    @cn_str(str) -> CosName\n\nA string decorator for easier instantiation of a CosName\n\n\n\n\n\n"
},

{
    "location": "#PDFIO.Cos.CosNumeric",
    "page": "API Structure and Design",
    "title": "PDFIO.Cos.CosNumeric",
    "category": "type",
    "text": "    CosNumeric\n\nAbstract type for numeric objects. The objects can be an integer CosInt or float CosFloat.\n\n\n\n\n\n"
},

{
    "location": "#PDFIO.Cos.CosInt",
    "page": "API Structure and Design",
    "title": "PDFIO.Cos.CosInt",
    "category": "type",
    "text": "    CosInt\n\nAn integer in PDF document.\n\n\n\n\n\n"
},

{
    "location": "#PDFIO.Cos.CosFloat",
    "page": "API Structure and Design",
    "title": "PDFIO.Cos.CosFloat",
    "category": "type",
    "text": "    CosFloat\n\nA numeric float data type.\n\n\n\n\n\n"
},

{
    "location": "#PDFIO.Cos.CosBoolean",
    "page": "API Structure and Design",
    "title": "PDFIO.Cos.CosBoolean",
    "category": "type",
    "text": "    CosBoolean\n\nA boolean object in PDF which is either a CosTrue or CosFalse\n\n\n\n\n\n"
},

{
    "location": "#PDFIO.Cos.CosDict",
    "page": "API Structure and Design",
    "title": "PDFIO.Cos.CosDict",
    "category": "type",
    "text": "    CosDict\n\nName value pair of a PDF objects. The object is very similar to the Dict object. The key has to be of a CosName type.\n\n\n\n\n\n"
},

{
    "location": "#PDFIO.Cos.CosArray",
    "page": "API Structure and Design",
    "title": "PDFIO.Cos.CosArray",
    "category": "type",
    "text": "    CosArray\n\nAn array in a PDF file. The objects can be any combination of CosObject.\n\n\n\n\n\n"
},

{
    "location": "#PDFIO.Cos.CosStream",
    "page": "API Structure and Design",
    "title": "PDFIO.Cos.CosStream",
    "category": "type",
    "text": "    CosStream\n\nA stream object in a PDF. Stream objects have an extends disctionary, followed by binary data.\n\n\n\n\n\n"
},

{
    "location": "#PDFIO.Cos.CosIndirectObjectRef",
    "page": "API Structure and Design",
    "title": "PDFIO.Cos.CosIndirectObjectRef",
    "category": "type",
    "text": "    CosIndirectObjectRef\n\nA parsed data structure to ensure the object information is stored as an object. This has no meaning without a associated CosDoc. When a reference object is hit the object should be searched from the CosDoc and returned.\n\n\n\n\n\n"
},

{
    "location": "#COS-Objects-1",
    "page": "API Structure and Design",
    "title": "COS Objects",
    "category": "section",
    "text": "CosObject\n    CosNull\nCosString\nCosName\n@cn_str\nCosNumeric\n  CosInt\n  CosFloat\nCosBoolean\nCosDict\nCosArray\nCosStream\nCosIndirectObjectRef"
},

{
    "location": "#PDFIO.PD.PDDoc",
    "page": "API Structure and Design",
    "title": "PDFIO.PD.PDDoc",
    "category": "type",
    "text": "    PDDoc\n\nAn in memory representation of a PDF document. Once created this type has to be used to access a PDF document.\n\n\n\n\n\n"
},

{
    "location": "#PDFIO.PD.pdDocOpen",
    "page": "API Structure and Design",
    "title": "PDFIO.PD.pdDocOpen",
    "category": "function",
    "text": "    pdDocOpen(filepath::AbstractString) -> PDDoc\n\nOpens a PDF document and provides the PDDoc document object for subsequent query into the PDF file. filepath is the path to the PDF file in the relative or absolute path format.\n\nRemember to release the document with pdDocClose, once the object is used.\n\n\n\n\n\n"
},

{
    "location": "#PDFIO.PD.pdDocClose",
    "page": "API Structure and Design",
    "title": "PDFIO.PD.pdDocClose",
    "category": "function",
    "text": "    pdDocClose(doc::PDDoc, num::Int) -> PDDoc\n\nReclaim the resources associated with a PDDoc object. Once called the PDDoc object cannot be further used.\n\n\n\n\n\n"
},

{
    "location": "#PDFIO.PD.pdDocGetCatalog",
    "page": "API Structure and Design",
    "title": "PDFIO.PD.pdDocGetCatalog",
    "category": "function",
    "text": "    pdDocGetCatalog(doc::PDDoc) -> CosObject\n\nCatalog is considered the topmost level object in  PDF document that is subsequently used to traverse and extract information from a PDF document. To be used for accessing PDF internal objects from document structure when no direct API is available.\n\n\n\n\n\n"
},

{
    "location": "#PDFIO.PD.pdDocGetNamesDict",
    "page": "API Structure and Design",
    "title": "PDFIO.PD.pdDocGetNamesDict",
    "category": "function",
    "text": "    pdDocGetNamesDict(doc::PDDoc) -> CosObject\n\nSome information in PDF is stored as name and value pairs not essentially a dictionary. They are all aggregated and can be accessed from one names dictionary object in the document catalog. This method provides access to such values in a PDF file. Not all PDF document may have a names dictionary. In such cases, a CosNull object may be returned.\n\nPlease refer to the PDF specification for further details.\n\n\n\n\n\n"
},

{
    "location": "#PDFIO.PD.pdDocGetInfo",
    "page": "API Structure and Design",
    "title": "PDFIO.PD.pdDocGetInfo",
    "category": "function",
    "text": "    pdDocGetInfo(doc::PDDoc) -> Dict\n\nGiven a PDF document provides the document information available in the Document Info dictionary. The information typically includes creation date, modification date, author, creator used etc. However, all information content are not mandatory. Hence, all information needed may not be available in a document. If document does not have Info dictionary at all this method returns nothing.\n\nPlease refer to the PDF specification for further details.\n\n\n\n\n\n"
},

{
    "location": "#PDFIO.PD.pdDocGetCosDoc",
    "page": "API Structure and Design",
    "title": "PDFIO.PD.pdDocGetCosDoc",
    "category": "function",
    "text": "    pdDocGetCosDoc(doc::PDDoc) -> CosDoc\n\nPDF document format is developed in two layers. A logical PDF document information is represented over a physical file structure called COS. CosDoc is an access object to the physical file structure of the PDF document. To be used for accessing PDF internal objects from document structure when no direct API is available.\n\nOne can access any aspect of PDF using the COS level APIs alone. However, they may require you to know the PDF specification in details and it is not the most intuititive.\n\n\n\n\n\n"
},

{
    "location": "#PDFIO.PD.pdDocGetPage",
    "page": "API Structure and Design",
    "title": "PDFIO.PD.pdDocGetPage",
    "category": "function",
    "text": "    pdDocGetPage(doc::PDDoc, num::Int) -> PDPage\n\nGiven a document absolute page number, provides the associated page object.\n\n\n\n\n\n"
},

{
    "location": "#PDFIO.PD.pdDocGetPageCount",
    "page": "API Structure and Design",
    "title": "PDFIO.PD.pdDocGetPageCount",
    "category": "function",
    "text": "    pdDocGetPageCount(doc::PDDoc) -> Int\n\nReturns the number of pages associated with the document.\n\n\n\n\n\n"
},

{
    "location": "#PDFIO.PD.pdDocGetPageRange",
    "page": "API Structure and Design",
    "title": "PDFIO.PD.pdDocGetPageRange",
    "category": "function",
    "text": "    pdDocGetPageRange(doc::PDDoc, nums::AbstractRange{Int}) -> Vector{PDPage}\n    pdDocGetPageRange(doc::PDDoc, label::AbstractString) -> Vector{PDPage}\n\nGiven a range of page numbers or a label returns an array of pages associated with it.\n\n\n\n\n\n"
},

{
    "location": "#PDFIO.PD.pdPageGetContents",
    "page": "API Structure and Design",
    "title": "PDFIO.PD.pdPageGetContents",
    "category": "function",
    "text": "    pdPageGetContents(page::PDPage) -> CosObject\n\nPage rendering objects are normally stored in a CosStream object in a PDF file. This method provides access to the stream object.\n\nPlease refer to the PDF specification for further details.\n\n\n\n\n\n"
},

{
    "location": "#PDFIO.PD.pdPageIsEmpty",
    "page": "API Structure and Design",
    "title": "PDFIO.PD.pdPageIsEmpty",
    "category": "function",
    "text": "    pdPageIsEmpty(page::PDPage) -> Bool\n\nReturns true when the page has no associated content object.\n\n\n\n\n\n"
},

{
    "location": "#PDFIO.PD.pdPageGetCosObject",
    "page": "API Structure and Design",
    "title": "PDFIO.PD.pdPageGetCosObject",
    "category": "function",
    "text": "    pdPageGetCosObject(page::PDPage) -> CosObject\n\nPDF document format is developed in two layers. A logical PDF document information is represented over a physical file structure called COS. This method provides the internal COS object associated with the page object.\n\n\n\n\n\n"
},

{
    "location": "#PDFIO.PD.pdPageGetContentObjects",
    "page": "API Structure and Design",
    "title": "PDFIO.PD.pdPageGetContentObjects",
    "category": "function",
    "text": "    pdPageGetContentObjects(page::PDPage) -> CosObject\n\nPage rendering objects are normally stored in a CosStream object in a PDF file. This method provides access to the stream object.\n\n\n\n\n\n"
},

{
    "location": "#PDFIO.PD.pdPageExtractText",
    "page": "API Structure and Design",
    "title": "PDFIO.PD.pdPageExtractText",
    "category": "function",
    "text": "    pdPageExtractText(io::IO, page::PDPage) -> IO\n\nExtracts the text from the page. This extraction works best for tagged PDF files. For PDFs not tagged, some line and word breaks will not be extracted properly.\n\n\n\n\n\n"
},

{
    "location": "#PD-1",
    "page": "API Structure and Design",
    "title": "PD",
    "category": "section",
    "text": "PDDoc\npdDocOpen\npdDocClose\npdDocGetCatalog\npdDocGetNamesDict\npdDocGetInfo\npdDocGetCosDoc\npdDocGetPage\npdDocGetPageCount\npdDocGetPageRange\npdPageGetContents\npdPageIsEmpty\npdPageGetCosObject\npdPageGetContentObjects\npdPageExtractText"
},

{
    "location": "#PDFIO.PD.PDPageObject",
    "page": "API Structure and Design",
    "title": "PDFIO.PD.PDPageObject",
    "category": "type",
    "text": "    PDPageObject\n\nThe content streams associated with PDF pages contain the objects that can be rendered. These objects are represented by PDPageObject. These objects can contain a postfix notation based operator prefixed by its operands like:\n\n(Draw this text) Tj\n\nAs can be seen above, the string object is a CosString which is a parameter to the operand Tj or draw text. These class of objects are represented by PDPageElement.\n\nHowever, there are certain objects which only provide grouping information or begin and end markers for grouping information. For example, a text object:\n\nBT\n    /F1 11 Tf  %selectfont\n    (Draw this text) Tj\nET\n\nThese kind of objects are represented by PDPageObjectGroup. In this case, the PDPageObjectGroup contains four PDPageElement. Namely, represented as operators BT, Tf, Tj, ET.\n\nPDPageElement and PDPageObjectGroup can be extended by composition. Hence, there are more specialized objects that can be seen as well.\n\n\n\n\n\n"
},

{
    "location": "#PDFIO.PD.PDPageElement",
    "page": "API Structure and Design",
    "title": "PDFIO.PD.PDPageElement",
    "category": "type",
    "text": "    PDPageElement\n\nA representation of a content object with operator and operand. See PDPageObject for more details.\n\n\n\n\n\n"
},

{
    "location": "#PDFIO.PD.PDPageObjectGroup",
    "page": "API Structure and Design",
    "title": "PDFIO.PD.PDPageObjectGroup",
    "category": "type",
    "text": "    PDPageObjectGroup\n\nA representation of a content object that encloses other content objects. See PDPageObject for more details.\n\n\n\n\n\n"
},

{
    "location": "#PDFIO.PD.PDPageTextObject",
    "page": "API Structure and Design",
    "title": "PDFIO.PD.PDPageTextObject",
    "category": "type",
    "text": "    PDPageTextObject\n\nA PDPageObjectGroup object that represents a block of text. See PDPageObject for more details.\n\n\n\n\n\n"
},

{
    "location": "#PDFIO.PD.PDPageTextRun",
    "page": "API Structure and Design",
    "title": "PDFIO.PD.PDPageTextRun",
    "category": "type",
    "text": "    PDPageTextRun\n\nIn PDF text may not be contiguous as there may be chnge of font, style, graphics rendering parameters. PDPageTextRun is a unit of text which can be rendered without any change to the graphical parameters. There is no guarantee that a text run will represent a meaningful word or sentence.\n\nPDPageTextRun is a composition implementation of PDPageElement.\n\n\n\n\n\n"
},

{
    "location": "#PDFIO.PD.PDPageMarkedContent",
    "page": "API Structure and Design",
    "title": "PDFIO.PD.PDPageMarkedContent",
    "category": "type",
    "text": "    PDPageMarkedContent\n\nA PDPageObjectGroup object that represents a group of a object that is logically grouped together in case of a structured PDF document.\n\n\n\n\n\n"
},

{
    "location": "#PDFIO.PD.PDPageInlineImage",
    "page": "API Structure and Design",
    "title": "PDFIO.PD.PDPageInlineImage",
    "category": "type",
    "text": "    PDPageInlineImage\n\nMost images in PDF documents are defined in the PDF document and referenced from the page content stream. PDPageInlineImage objects are directly defined in the page content stream.\n\n\n\n\n\n"
},

{
    "location": "#PDFIO.PD.PDPage_BeginGroup",
    "page": "API Structure and Design",
    "title": "PDFIO.PD.PDPage_BeginGroup",
    "category": "type",
    "text": "    PDPage_BeginGroup\n\nA PDPageElement that represents the beginning of a group object.\n\n\n\n\n\n"
},

{
    "location": "#PDFIO.PD.PDPage_EndGroup",
    "page": "API Structure and Design",
    "title": "PDFIO.PD.PDPage_EndGroup",
    "category": "type",
    "text": "    PDPage_EndGroup\n\nA PDPageElement that represents the end of a group object.\n\n\n\n\n\n"
},

{
    "location": "#PDF-Page-objects-1",
    "page": "API Structure and Design",
    "title": "PDF Page objects",
    "category": "section",
    "text": "PDPageObject\nPDPageElement\nPDPageObjectGroup\nPDPageTextObject\nPDPageTextRun\nPDPageMarkedContent\nPDPageInlineImage\nPDPage_BeginGroup\nPDPage_EndGroup"
},

{
    "location": "#PDFIO.Cos.CosDoc",
    "page": "API Structure and Design",
    "title": "PDFIO.Cos.CosDoc",
    "category": "type",
    "text": "    CosDoc\n\nPDF document format is developed in two layers. A logical PDF document information is represented over a physical file structure called COS. CosDoc is an access object to the physical file structure of the PDF document. To be used for accessing PDF internal objects from document structure when no direct API is available.\n\nOne can access any aspect of PDF using the COS level APIs alone. However, they may require you to know the PDF specification in details and they are not the most intuititive.\n\n\n\n\n\n"
},

{
    "location": "#PDFIO.Cos.cosDocOpen",
    "page": "API Structure and Design",
    "title": "PDFIO.Cos.cosDocOpen",
    "category": "function",
    "text": "    cosDocOpen(filepath::AbstractString) -> CosDoc\n\nProvides the access to the physical file and file structure of the PDF document. Returns a CosDoc which can be subsequently used for all query into the PDF files. Remember to release the document with cosDocClose, once the object is used.\n\n\n\n\n\n"
},

{
    "location": "#PDFIO.Cos.cosDocClose",
    "page": "API Structure and Design",
    "title": "PDFIO.Cos.cosDocClose",
    "category": "function",
    "text": "    cosDocClose(doc::CosDoc)\n\nReclaims all system resources consumed by the CosDoc. The CosDoc should not be used after this method is called. cosDocClose only needs to be explicitly called if you have opened the document by \'cosDocOpen\'. Documents opened with pdDocOpen do not need to use this method.\n\n\n\n\n\n"
},

{
    "location": "#PDFIO.Cos.cosDocGetRoot",
    "page": "API Structure and Design",
    "title": "PDFIO.Cos.cosDocGetRoot",
    "category": "function",
    "text": "    cosDocGetRoot(doc::CosDoc) -> CosDoc\n\nThe structural starting point of a PDF document. Also known as document root dictionary. This provides details of object locations and document access methodology. This should not be confused with the catalog object of the PDF document.\n\n\n\n\n\n"
},

{
    "location": "#PDFIO.Cos.cosDocGetObject",
    "page": "API Structure and Design",
    "title": "PDFIO.Cos.cosDocGetObject",
    "category": "function",
    "text": "    cosDocGetObject(doc::CosDoc, obj::CosObject) -> CosObject\n\nPDF objects are distributed in the file and can be cross referenced from one location to another. This is called as indirect object referencing. However, to extract actual information one needs access to the complete object (direct object). This method provides access to the direct object after searching for the object in the document structure. If an indirect object reference is passed as obj parameter the complete indirect object (reference as well as all content of the object) are returned. A direct object passed to the method is returned as is without any translation. This ensures the user does not have to go through checking the type of the objects before accessing the contents.\n\n\n\n\n\n    cosDocGetObject(doc::CosDoc, dict::CosObject, key::CosName) -> CosObject\n\nReturns the object referenced inside the dict dictionary. dict can be a PDF dictionary object reference or an indirect object or a direct CosDict object.\n\n\n\n\n\n"
},

{
    "location": "#PDFIO.Cos.cosDocGetPageNumbers",
    "page": "API Structure and Design",
    "title": "PDFIO.Cos.cosDocGetPageNumbers",
    "category": "function",
    "text": "cosDocGetPageNumbers(doc::CosDoc, catalog::CosObject, label::AbstractString) -> Range{Int}\n\nPDF utilizes two pagination schemes. An internal global page number that is maintained serially as an integer and PageLabel that is shown by the viewers. Given a label this method returns a range of valid page numbers.\n\n\n\n\n\n"
},

{
    "location": "#Cos-1",
    "page": "API Structure and Design",
    "title": "Cos",
    "category": "section",
    "text": "CosDoc\ncosDocOpen\ncosDocClose\ncosDocGetRoot\ncosDocGetObject\ncosDocGetPageNumbers"
},

]}
