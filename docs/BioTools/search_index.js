var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#BioTools-1",
    "page": "Home",
    "title": "BioTools",
    "category": "section",
    "text": "(Image: Latest Release)  (Image: MIT license)  (Image: Stable documentation)  (Image: Latest documentation) (Image: Lifecycle) (Image: Chat on Discord)"
},

{
    "location": "#Description-1",
    "page": "Home",
    "title": "Description",
    "category": "section",
    "text": "BioTools provides interfaces to common external biological tools from julia scripts and programs."
},

{
    "location": "#Installation-1",
    "page": "Home",
    "title": "Installation",
    "category": "section",
    "text": "Install BioTools from the Julia REPL:using Pkg\nadd(\"BioTools\")\n# Pkg.add(\"BioTools\") for julia v0.6-If you are interested in the cutting edge of the development, please check out the master branch to try new features before release."
},

{
    "location": "#Testing-1",
    "page": "Home",
    "title": "Testing",
    "category": "section",
    "text": "BioTools is tested against Julia 0.7 and current 1.X on Linux, OS X, and Windows.PackageEvaluator Latest Build Status\n(Image: ) (Image: ) (Image: ) (Image: ) (Image: )"
},

{
    "location": "#Contributing-1",
    "page": "Home",
    "title": "Contributing",
    "category": "section",
    "text": "We appreciate contributions from users including reporting bugs, fixing issues, improving performance and adding new features.Take a look at the CONTRIBUTING file provided with every BioJulia package package for detailed contributor and maintainer guidelines."
},

{
    "location": "#Financial-contributions-1",
    "page": "Home",
    "title": "Financial contributions",
    "category": "section",
    "text": "We also welcome financial contributions in full transparency on our open collective. Anyone can file an expense. If the expense makes sense for the development of the community, it will be \"merged\" in the ledger of our open collective by the core contributors and the person who filed the expense will be reimbursed."
},

{
    "location": "#Backers-and-Sponsors-1",
    "page": "Home",
    "title": "Backers & Sponsors",
    "category": "section",
    "text": "Thank you to all our backers and sponsors!Love our work and community? Become a backer.(Image: backers)Does your company use BioJulia? Help keep BioJulia feature rich and healthy by sponsoring the project Your logo will show up here with a link to your website.(Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: )"
},

{
    "location": "#Questions?-1",
    "page": "Home",
    "title": "Questions?",
    "category": "section",
    "text": "If you have a question about contributing or using BioJulia software, come on over and chat to us on Discord, or you can try the Bio category of the Julia discourse site."
},

{
    "location": "blast/#",
    "page": "BLAST",
    "title": "BLAST",
    "category": "page",
    "text": "CurrentModule = BioTools.BLAST"
},

{
    "location": "blast/#The-BioTools-BLAST-wrapper-1",
    "page": "BLAST",
    "title": "The BioTools BLAST wrapper",
    "category": "section",
    "text": "The BioTools.BLAST module is a wrapper for the command line interface of BLAST+ from NCBI. It requires that you have BLAST+  installed and accessible in your PATH (eg. you should be able to execute $ blastn -h from the command line)."
},

{
    "location": "blast/#The-Basics-1",
    "page": "BLAST",
    "title": "The Basics",
    "category": "section",
    "text": "This module allows you to run protein and nucleotide BLAST (blastp and blastn respectively) within julia and to parse BLAST results into Bio.jl types.using BioSequences,\n      BioTools.BLAST\n\nseq1 = dna\"\"\"\nCGGACCAGACGGACACAGGGAGAAGCTAGTTTCTTTCATGTGATTGANAT\nNATGACTCTACTCCTAAAAGGGAAAAANCAATATCCTTGTTTACAGAAGA\nGAAACAAACAAGCCCCACTCAGCTCAGTCACAGGAGAGAN\n\"\"\"\n\nseq2 = dna\"\"\"\nCGGAGCCAGCGAGCATATGCTGCATGAGGACCTTTCTATCTTACATTATG\nGCTGGGAATCTTACTCTTTCATCTGATACCTTGTTCAGATTTCAAAATAG\nTTGTAGCCTTATCCTGGTTTTACAGATGTGAAACTTTCAA\n\"\"\"\n\nblastn(seq1, seq2)These functions return a Vector{BLASTResult}. Each element is a hit which includes the sequence of the hit, an AlignedSequence using the original query as a reference and some additional information (expect vaue, bitscore) for the hit.struct BLASTResult\n    bitscore::Float64\n    expect::Float64\n    queryname::String\n    hitname::String\n    hit::BioSequence\n    alignment::AlignedSequence\nendIf you\'ve already run a blast analysis or have downloaded blast results in XML format from NCBI you can also pass an XML string to readblastXML() in order to obtain an array of BLASTResults.results = readall(open(\"blast_results.xml\"))\n# need to use `readstring` instead of `readall` for v0.5\nreadblastXML(results)When parsing protein blast results, you must include the argument  seqtype=\"prot\", eg. readblastXML(\"results, seqtype=\"prot\")."
},

{
    "location": "blast/#Options-for-blastn-and-blastp-1",
    "page": "BLAST",
    "title": "Options for blastn and blastp",
    "category": "section",
    "text": "Both of the basic BLAST+ commands can accept a single BioSequence, a Vector{BioSequence} or a sting representing a file path to a fasta formatted file as arguments for both query and subject.blastn([seq1, seq2], [seq2, seq3])\n\nblastp(aaseq, \"path/to/sequences.fasta\")If you have a local blast database (eg through the use of $ makeblastdb), you can use this database as the subjectblastn(seq1, \"path/to/blast_db\", db=true)If you want to modify the search using additional options (eg. return only results with greater than 90% identity), you may pass a Vector of flags (see here for valid arguments - do not use flags that will alter file handling such as -outfmt)blastn(seq1, seq2, [\"-perc_identity\", 90, \"-evalue\", \"9.0\"])"
},

]}
