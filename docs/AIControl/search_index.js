var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#AIControl.jl-1",
    "page": "Readme",
    "title": "AIControl.jl",
    "category": "section",
    "text": "(Image: Build Status)AIControl makes ChIP-seq assays easier, cheaper, and more accurate by imputing background data from mass control data available in public.Here is an overview of AIControl framework from our paper.  (Image: alt text)Figure 1: (a) Comparison of AIControl to other peak calling algorithms. (left) AIControl learns appropriate combinations of publicly available control ChIP-seq datasets to impute background noise distributions at a fine scale. (right) Other peak calling algorithms use only one control dataset, so they must use a broader region (typically within 5,000-10,000 bps) to estimate background distributions. (bottom) The learned fine scale Poisson (background) distributions are then used to identify binding activities across the genome. (b) An overview of the AIControl approach. A single control dataset may not capture all sources of background noise. AIControl more rigorously removes background ChIP-seq noise by using a large number of publicly available control ChIP-seq datasets"
},

{
    "location": "#Update-1",
    "page": "Readme",
    "title": "Update",
    "category": "section",
    "text": "(12/14/2018) Cleared all deprecations. AIControl now works with Julia 1.0. Please delete the precompiled cache from the previous versions of AIControl. You may do so by deleting the .julia folder. \n(12/15/2018) Updated some error messages to better direct users (12/13/2018)."
},

{
    "location": "#System-recommendation-1",
    "page": "Readme",
    "title": "System recommendation",
    "category": "section",
    "text": "We recommend that users run AIControl on Unix based systems such as mac OS or Ubuntu. While we tested and validated on most systems, we believe that it is easier for you to set the AIControl pipeline up on the Unix based systems."
},

{
    "location": "#Installing-utility-softwares-1",
    "page": "Readme",
    "title": "Installing utility softwares",
    "category": "section",
    "text": "AIControl expects a sorted .bam file as an input and outputs a .narrowpeak file. Typically, for a brand new ChIP-seq experiment, you would start with a .fastq file, and you will need some external softwares for converting the .fastq file to a sorted .bam file. Here, we provide a list of such external softwares. The recommended way of installing these softwares is to use package management systems, such as conda. Please download anaconda Python distribution from here. Install anaconda and run the following commands.bowtie2: conda install -c bioconda bowtie2 for aligning a .fastq file to the hg38 genome\nsamtools: conda install -c bioconda samtools for sorting an alinged bam file\nbedtools: conda install -c bioconda bedtools for converting a bam file back to a fastq file (OPTIONAL for Step 3.1)"
},

{
    "location": "#Julia-modules-required-for-AIControl-1",
    "page": "Readme",
    "title": "Julia modules required for AIControl",
    "category": "section",
    "text": "AIControl module is coded in Julia 1.0. You can download Julia from here.  Before you start, make sure your have the following required packages installed. The easiest way to do this is to open julia and start typing in following commands. using Pkg\nPkg.add(\"JLD2\")\nPkg.add(\"FileIO\")\nPkg.clone(\"https://github.com/hiranumn/AIControl.jl.git\")"
},

{
    "location": "#Data-files-required-for-AIControl-1",
    "page": "Readme",
    "title": "Data files required for AIControl",
    "category": "section",
    "text": "AIControl uses a massive amount of public control data for ChIP-seq (roughly 450 chip-seq runs). We have done our best to compress them so that you only need to download about 4.6GB (can be smaller with the --reduced option). These files require approximately 13GB of free disk space to unfold. You can unfold them to anywhere you want as long as you specify the location with the --ctrlfolder option. The default location is ./data. Here is a link to a Google Drive folder that contains all compressed data. Please download the following two data files. Use tar xvjf file.tar.bz2 to untar. forward.data100.nodup.tar.bz2 (2.3GB):   \nreverse.data100.nodup.tar.bz2 (2.3GB):  We also have other versions of compressed control data, where duplicates are not removed (indicated with .dup, and used with the --dup option) or the number of controls are subsampled. Please see the OtherControlData folder. "
},

{
    "location": "#Paper-1",
    "page": "Readme",
    "title": "Paper",
    "category": "section",
    "text": "We have an accompanying paper in BioRxiv evaluating and comparing the performance of AIControl to other peak callers in various metrics and settings. AIControl: Replacing matched control experiments with machine learning improves ChIP-seq peak identification (BioRxiv). You can find the supplementary data files and peaks files generated by the competing peak callers on Google Drive."
},

{
    "location": "#How-to-use-AIControl-(step-by-step)-1",
    "page": "Readme",
    "title": "How to use AIControl (step by step)",
    "category": "section",
    "text": "Step 1: Map your FASTQ file from ChIP-seq to the hg38 assembly from the UCSC database.   We have validated our pipeline with bowtie2. You can download the genome assembly data from the UCSC repository. In case you need the exact reference database that we used for bowtie2, they are available through our Google Drive as a zip file named bowtie2ref.zip.  Example command:   bowtie2 -x bowtie2ref/hg38 -q -p 10 -U example.fastq -S example.sam  Unlike other peak callers, the core idea of AIControl is to leverage all available control datasets. This requires all data (your target and public control datasets) to be mapped to the exact same reference genome. Our control datasets are currently mapped to the hg38 assembly from [the UCSC repository]. So please make sure that your data is also mapped to the same assembly. Otherwise, our pipeline will report an error.Step 2: Convert the resulting sam file into a bam format.  Example command:   samtools view -Sb example.sam > example.bam  Step 3: Sort the bam file in lexicographical order.   If you go through step 1 with the UCSC hg38 assembly, sorting with samtools sort will do its job.  Example command:   samtools sort -o example.bam.sorted example.bam  Step 3.1: If AIControl reports an error for a mismatch of genome assembly   You are likely here, because the AIControl script raised an error. The error is most likely caused by a mismatch of genome assembly that your dataset and control datasets are mapped to. Our control datasets are mapped to the hg38 from the UCSC repository. On the other hand, your bam file is probably mapped to a slightly differet version of the hg38 assembly or different ordering of chromosomes (a.k.a. non-lexicographic). For instance, if you download a bam file directly from the ENCODE website, it is mapped to a slightly different chromosome ordering of hg38. A recommended way of resolving this issue is to extract a fastq file from your bam file, go back to step 1, and remap it with bowtie2 using the UCSC hg38 assembly. bedtools provides a way to generate a .fastq file from your .bam file.  Example command:   bedtools bamtofastq  -i example.bam -fq example.fastq  We will regularly update the control data when a new major version of the genome becomes available; however, covering for all versions with small changes to the existing version is not realistic.Step 4: Download data files and locate them in the right places.   As stated, AIControl requires you to download precomputed data files. Please download and extract them to the ./data folder, or otherwise specify the location with --ctrlfolder option. Make sure to untar the files.    Step 5: Run AIControl as julia script.   You are almost there. If you clone this repo, you will find a julia script aicontrolScript.jl that uses AIControl functions to identifiy locations of peaks. Here is a sample command you can use.  julia aicontrolScript.jl example.bam.sorted --ctrlfolder=/scratch/hiranumn/data --name=testDo julia aicontrolScript.jl --help or -h for help.We currently support the following flags. --dup: using duplicate reads [default:false]\n--reduced: using subsampled control datasets [default:false]\n--xtxfolder=[path]: path to a folder with xtx.jld2 (cloned with this repo) [default:./data]\n--ctrlfolder=[path]: path to a control folder [default:./data]\n--name=[string]: prefix for output files [default:bamfile_prefix]\n--p=[float]: pvalue threshold [default:0.15]"
},

{
    "location": "#Simple-trouble-shooting-1",
    "page": "Readme",
    "title": "Simple trouble shooting",
    "category": "section",
    "text": "Make sure that:You are using Julia 1.0.\nYou downloaded necessary files for --reduced or --dup if you are running with those flags.\nYou sorted the input bam files according to the UCSC hg38 assembly as specified in Step 1 (and 3.1)."
},

{
    "location": "#We-have-tested-our-implementation-on:-1",
    "page": "Readme",
    "title": "We have tested our implementation on:",
    "category": "section",
    "text": "macOS Sierra (2.5GHz Intel Core i5 & 8GB RAM)\nUbuntu 18.04 \nWindows 8.0If you have any question, please e-mail to hiranumn at cs dot washington dot edu."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [AIControl]\nOrder = [:type, :function]"
},

]}
