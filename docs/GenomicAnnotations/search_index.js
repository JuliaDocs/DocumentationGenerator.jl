var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#GenomicAnnotations.jl-1",
    "page": "Readme",
    "title": "GenomicAnnotations.jl",
    "category": "section",
    "text": ""
},

{
    "location": "#Description-1",
    "page": "Readme",
    "title": "Description",
    "category": "section",
    "text": "GenomicAnnotations is a package for reading, modifying, and writing genomic annotations in the GenBank format."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "GenBank files are read with readgbk(gbkfile), which returns a vector of Chromosomes. If we\'re only interested in the first chromosome in example.gbk we only need to store the first element.chr = readgbk(\"test/example.gbk\")[1]Chromosomes have five fields, name, header, genes, genedata, and sequence. The name is read from the header, which is stored as a string. The annotation data is stored in genedata, but generally you should use genes to access that data. For example, it can be used to iterate over annotations, and to modify them.for gene in chr.genes\n    gene.locus_tag = \"$(chr.name)_$(gene.locus_tag)\"\nend\n\nchr.genes[2].locus_tag = \"test123\"Accessing properties that haven\'t been stored will return missing. For this reason, it often makes more sense to use get() than to access the property directly.if chr.genes[2].pseudo\n    println(\"Gene 2 is a pseudogene\")\nend\n# chr.genes[2].pseudo returns missing, so this will throw an error\n\nif get(chr.genes[2], :pseudo, false)\n    println(\"Gene 2 is a pseudogene\")\nendThe macro @genes can be used to filter through the annotations. The keyword gene is used to refer to the individual Genes. @genes can also be used to modify annotations.@genes(chr, :feature == \"CDS\")\n@genes(chr, length(gene) > 300)\n\n# The following two expressions are equivalent:\n@genes(chr, :feature == \"CDS\", length(gene) > 300)\n@genes(chr, (:feature == \"CDS\") && (length(gene) > 300))\n\n@genes(chr, :locus_tag == \"tag03\")[1].pseudo = true\ndelete!(@genes(chr, :pseudo)) # Delete all psudogenes\ndelete!(@genes(chr, length(gene) <= 60)) # Delete all genes 60 nt or shorterGene sequences can be accessed with sequence(gene). For example, the following code will write the translated sequences of all protein-coding genes to a file:using BioSequences\nwriter = FASTA.Writer(open(\"proteins.fasta\", \"w\"))\nfor gene in @genes(chr, :feature == \"CDS\")\n    protseq = translate(convert(RNASequence, sequence(gene)))\n    write(writer, FASTA.record(gene.locus_tag, gene.product, protseq))\nend\nclose(writer)Genes can be added using addgene!, and sort! can be used to make sure that the resulting annotations are in the correct order.newgene = addgene!(chr, \"regulatory\", 670:677)\nnewgene.locus_tag = \"reg02\"\nsort!(chr.genes)After modifying the annotations, printgbk(io, chr) can be used to write them to a file.open(\"updated.gbk\", \"w\") do f\n    printgbk(f, chr)\nend"
},

{
    "location": "autodocs/#GenomicAnnotations.Locus",
    "page": "Docstrings",
    "title": "GenomicAnnotations.Locus",
    "category": "type",
    "text": "Struct for storing information on genomic locations. strand can be \'+\', \'-\', or \'.\' when the strand is irrelevant.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GenomicAnnotations.Locus-Tuple{}",
    "page": "Docstrings",
    "title": "GenomicAnnotations.Locus",
    "category": "method",
    "text": "Locus()\nLocus(position::UnitRange{Int})\nLocus(position::UnitRange{Int}, strand::Char)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#BioCore.sequence-Tuple{AbstractGene}",
    "page": "Docstrings",
    "title": "BioCore.sequence",
    "category": "method",
    "text": "sequence(gene::AbstractGene)\n\nReturn genomic sequence for gene.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GenomicAnnotations.addgene!-Tuple{Chromosome,Any,Any}",
    "page": "Docstrings",
    "title": "GenomicAnnotations.addgene!",
    "category": "method",
    "text": "addgene!(chr::Chromosome, feature, locus; kw...)\n\nAdd gene to chr. locus can be a Locus, a UnitRange, or a StepRange.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GenomicAnnotations.iscomplement-Tuple{AbstractGene}",
    "page": "Docstrings",
    "title": "GenomicAnnotations.iscomplement",
    "category": "method",
    "text": "iscomplement(gene::Abstract)\n\nReturn true if gene.locus.compliment == \'-\', otherwise return false.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GenomicAnnotations.pushproperty!-Union{Tuple{T}, Tuple{AbstractGene,Symbol,T}} where T",
    "page": "Docstrings",
    "title": "GenomicAnnotations.pushproperty!",
    "category": "method",
    "text": "pushproperty!(gene::AbstractGene, name::Symbol, x::T)\n\nAdd a property to gene, similarly to Base.setproperty!(::gene), but if the property is not missing in gene, it will be transformed to store a vector instead of overwriting existing data.\n\njulia> eltype(chr.genedata[:EC_number])\nUnion{Missing,String}\n\njulia> chr.genes[1].EC_number = \"EC:1.2.3.4\"\n\"EC:1.2.3.4\"\n\njulia> pushproperty!(chr.genes[1], :EC_number, \"EC:4.3.2.1\"); chr.genes[1].EC_number\n2-element Array{String,1}:\n \"EC:1.2.3.4\"\n \"EC:4.3.2.1\"\n\njulia> eltype(chr.genedata[:EC_number])\nUnion{Missing, Array{String,1}}\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GenomicAnnotations.readgbk-Tuple{Any}",
    "page": "Docstrings",
    "title": "GenomicAnnotations.readgbk",
    "category": "method",
    "text": "readgbk(filename)\n\nParse GenBank-formatted file filename, returning a Chromosome.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.delete!-Tuple{AbstractArray{Gene,1}}",
    "page": "Docstrings",
    "title": "Base.delete!",
    "category": "method",
    "text": "delete!(genes::AbstractArray{Gene, 1})\n\nDelete all genes in genes from genes[1].parent.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.delete!-Tuple{Gene}",
    "page": "Docstrings",
    "title": "Base.delete!",
    "category": "method",
    "text": "delete!(gene::Gene)\n\nDelete gene from gene.parent. Warning: does not work when broadcasted! Use delete!(::AbstractVector{Gene}) instead.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.get-Tuple{Gene,Any,Any}",
    "page": "Docstrings",
    "title": "Base.get",
    "category": "method",
    "text": "get(g::Gene, key, default)\n\nRetrieve key from g. If key is missing, return default.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GenomicAnnotations.filterseq-Tuple{Base.GenericIOBuffer{Array{UInt8,1}}}",
    "page": "Docstrings",
    "title": "GenomicAnnotations.filterseq",
    "category": "method",
    "text": "Parse footer (sequence) portion of a GenBank file, returning a String. When BioSequences is available for 0.7 this will be changed to a DNASequence.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GenomicAnnotations.parsechromosome-Tuple{Any}",
    "page": "Docstrings",
    "title": "GenomicAnnotations.parsechromosome",
    "category": "method",
    "text": "parsechromosome(lines)\n\nParse and return one chromosome entry, and the line number that it ends at.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GenomicAnnotations.parseposition-Tuple{String}",
    "page": "Docstrings",
    "title": "GenomicAnnotations.parseposition",
    "category": "method",
    "text": "Parse lines encoding genomic position, returning the feature as a String, and an instance of Locus.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#GenomicAnnotations.vectorise-Union{Tuple{AbstractArray{Union{Missing, T},1}}, Tuple{T}} where T",
    "page": "Docstrings",
    "title": "GenomicAnnotations.vectorise",
    "category": "method",
    "text": "vectorise(A::AbstractArray{Union{Missing, T}, 1}) where T\n\nConvert an array of type Vector{Union{Missing, T}} to Vector{Union{Missing, Vector{T}}}.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [GenomicAnnotations]\nOrder = [:type, :function]"
},

]}
