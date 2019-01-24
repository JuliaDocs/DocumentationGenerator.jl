var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Kpax3-Bayesian-bi-clustering-of-categorical-data-1",
    "page": "Readme",
    "title": "Kpax3 - Bayesian bi-clustering of categorical data",
    "category": "section",
    "text": "(Image: Build Status) (Image: Coverage)"
},

{
    "location": "#About-1",
    "page": "Readme",
    "title": "About",
    "category": "section",
    "text": "Kpax3 is a Julia package for inferring the group structure of genetic sequences. In general, any multivariate categorical dataset (such as presence/absence data) can be analyzed by Kpax3. Output consists of a clustering of both the rows (statistical units) and columns (statistical variables) of the provided data matrix. It is an improved version of K-Pax2, providing an MCMC algorithm for a proper Bayesian approach and a genetic algorithm for MAP estimation."
},

{
    "location": "#Reference-1",
    "page": "Readme",
    "title": "Reference",
    "category": "section",
    "text": "To know more about the underlying statistical model, refer to the following publications (the first is the primary citation if you use the package):Pessia, A. and Corander, J. (2018). Kpax3: Bayesian bi-clustering of large sequence datasets. Bioinformatics, 34(12): 2132–2133. doi: 10.1093/bioinformatics/bty056Pessia, A., Grad, Y., Cobey, S., Puranen, J. S., and Corander, J. (2015) K-Pax2: Bayesian identification of cluster-defining amino acid positions in large sequence datasets. Microbial Genomics, 1(1). doi: 10.1099/mgen.0.000025"
},

{
    "location": "#Installation-1",
    "page": "Readme",
    "title": "Installation",
    "category": "section",
    "text": "Kpax3 can be easily installed from within Julia:Enter the Pkg REPL-mode by pressing  ] in the Julia REPL\nIssue the command add Kpax3\nPress the Backspace key to return to the Julia REPL"
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "The best way to learn how to use Kpax3 is by following the instructions in the fasta tutorial (for genetic sequences) or in the csv tutorial (for general categorical data).It is also possible to run Kpax3 directly from the command line by using the script available on GitHub Gist."
},

{
    "location": "#License-1",
    "page": "Readme",
    "title": "License",
    "category": "section",
    "text": "See LICENSE.md"
},

{
    "location": "autodocs/#Kpax3.AminoAcidData",
    "page": "Docstrings",
    "title": "Kpax3.AminoAcidData",
    "category": "type",
    "text": "Genetic data\n\nDescription\n\nAmino acid data and its metadata.\n\nFields\n\ndata Multiple sequence alignment (MSA) encoded as a binary (UInt8) matrix\nid units\' ids\nref reference sequence, i.e. a vector of the same length of the original\n\nsequences storing the values of homogeneous sites. SNPs are instead represented by a value of 29\n\nval vector with unique values per MSA site\nkey vector with indices of each value\n\nDetails\n\nLet n be the total number of units and ml be the total number of unique values observed at SNP l. Define m = m1 + ... + mL, where L is the total number of SNPs.\n\ndata is a m-by-n indicator matrix, i.e. data[j, i] is 1 if unit i possesses value j, 0 otherwise.\n\nThe value associated with column j can be obtained by val[j] while the SNP position by findall(ref == 29)[key[j]].\n\nReferences\n\nPessia A., Grad Y., Cobey S., Puranen J. S. and Corander J. (2015). K-Pax2: Bayesian identification of cluster-defining amino acid positions in large sequence datasets. Microbial Genomics 1(1). http://dx.doi.org/10.1099/mgen.0.000025.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Kpax3.KSettings",
    "page": "Docstrings",
    "title": "Kpax3.KSettings",
    "category": "type",
    "text": "User defined settings for a Kpax3 run\n\nDescription\n\nFields\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Kpax3.CategoricalData-Tuple{KSettings}",
    "page": "Docstrings",
    "title": "Kpax3.CategoricalData",
    "category": "method",
    "text": "CSV data\n\nDescription\n\nGeneric data and its metadata.\n\nFields\n\ndata original data matrix encoded as a binary (UInt8) matrix\nid units\' ids\nref reference observation, i.e. a vector of the same length of the original\n\nobservations storing the values of homogeneous sites. Polymorphisms are instead represented by the string \".\"\n\nval vector with unique values per dataset column\nkey vector with indices of each value\n\nDetails\n\nLet n be the total number of units and ml be the total number of unique values observed at polymorphic column l. Define m = m1 + ... + mL, where L is the total number of polymorphic columns.\n\ndata is a m-by-n indicator matrix, i.e. data[j, i] is 1 if unit i possesses value j, 0 otherwise.\n\nThe value associated with column j can be obtained by val[j] while the polymorphic position by findall(ref == \".\")[key[j]].\n\nReferences\n\nPessia A., Grad Y., Cobey S., Puranen J. S. and Corander J. (2015). K-Pax2: Bayesian identification of cluster-defining amino acid positions in large sequence datasets. Microbial Genomics 1(1). http://dx.doi.org/10.1099/mgen.0.000025.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Kpax3.categorical2binary-Tuple{Array{String,2},String}",
    "page": "Docstrings",
    "title": "Kpax3.categorical2binary",
    "category": "method",
    "text": "Convert categorical (string) data to binary\n\nDescription\n\nConvert a string matrix to a binary (indicator) matrix.\n\nUsage\n\ncategorical2binary(data, missval)\n\nArguments\n\ndata Integer matrix to be converted\nmissval Value to be considered missing\n\nValue\n\nA tuple containing the following variables:\n\nbindata Original data matrix encoded as a binary (indicator) matrix\nval vector with unique values per MSA site\nkey vector with indices of each value\n\nExample\n\nIf data consists of just the following three units\n\n  C A\nA G C\nC T\nC C G\n\nthen bindata will be equal to\n\n0 0 1\n0 1 0\n1 0 0\n0 0 1\n0 1 0\n1 0 0\n0 1 0\n1 1 0\n0 0 1\n\nwhile\n\nval = [\"A\", \"C\", \"A\", \"C\", \"G, \"C\", \"T\", \"C\", \"G\"] (i.e. AC ACG CT CG)\nkey = [ 1,   1,   2,   2,   2,  3,   3,   4,   4 ] (i.e. 11 222 33 44)\n\n values (here missing data) are discarded.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Kpax3.categorical2binary-Union{Tuple{T}, Tuple{Array{T,2},T,T}} where T<:Integer",
    "page": "Docstrings",
    "title": "Kpax3.categorical2binary",
    "category": "method",
    "text": "Convert categorical (integer) data to binary\n\nDescription\n\nConvert an integer matrix to a binary (indicator) matrix.\n\nUsage\n\ncategorical2binary(data, maxval, missval)\n\nArguments\n\ndata Integer matrix to be converted\nmaxval Theoretical maximum value observable in data\nmissval Value to be considered missing\n\nValue\n\nA tuple containing the following variables:\n\nbindata Original data matrix encoded as a binary (indicator) matrix\nval vector with unique values per MSA site\nkey vector with indices of each value\n\nExample\n\nIf data consists of just the following three units\n\n0 2 1\n1 3 2\n2 4 0\n2 2 3\n\nthen bindata will be equal to\n\n0 0 1\n0 1 0\n1 0 0\n0 0 1\n0 1 0\n1 0 0\n0 1 0\n1 1 0\n0 0 1\n\nwhile\n\nval = [1, 2, 1, 2, 3, 2, 4, 2, 3] (i.e. 12 123 24 23)\nkey = [1, 1, 2, 2, 2, 3, 3, 4, 4] (i.e. 11 222 33 44)\n\n0 values (here missing data) are discarded.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Kpax3.normalizepartition-Tuple{Array{Int64,1},Int64}",
    "page": "Docstrings",
    "title": "Kpax3.normalizepartition",
    "category": "method",
    "text": "remove \"gaps\" and non-positive values from the partition Example: [1, 1, 0, 1, -2, 4, 0] -> [3, 3, 2, 3, 1, 4, 2]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Kpax3.readfasta-Tuple{String,Bool,Array{UInt8,1},Int64,Bool,Int64}",
    "page": "Docstrings",
    "title": "Kpax3.readfasta",
    "category": "method",
    "text": "readfasta(ifile::String, protein::Bool, miss::Vector{UInt8}, l::Int, verbose::Bool, verbosestep::Int)\n\nRead data in FASTA format and convert it to an integer matrix. Sequences are required to be aligned. Only polymorphic columns are stored.\n\nArguments\n\nifile Path to the input data file\nprotein true if reading protein data or false if reading DNA data\nmiss Characters (as UInt8) to be considered missing. Use\n\nmiss = zeros(UInt8, 1) if all characters are to be considered valid. Default characters for miss are:\n\n- DNA data: _?, \\*, #, -, b, d, h, k, m, n, r, s, v, w, x, y, j, z_\n- Protein data: _?, \\*, #, -, b, j, x, z_\n\nl Sequence length. If unknown, it is better to choose a value which is\n\nsurely greater than the real sequence length. If l is found to be insufficient, the array size is dynamically increased (not recommended from a performance point of view). Default value should be sufficient for most datasets\n\nverbose If true, print status reports\nverbosestep Print a status report every verbosestep read sequences\n\nDetails\n\nWhen computing evolutionary distances, don\'t put the gap symbol - among the missing values. Indeed, indels are an important piece of information for genetic distances.\n\nFASTA data is encoded as standard 7-bit ASCII codes. The only exception is Uracil which is given the same value 84 of Thymidine, i.e. each \'u\' is silently converted to \'t\' when reading DNA data. Conversion tables are the following:\n\n+––––––––––––––––––––+ |         Conversion table (DNA)         | +––––––––––––––––––––+ |          Nucleotide |  Code |  Integer | +––––––––––-+–––-+–––––+ |           Adenosine |   A   |    97    | |            Cytosine |   C   |    99    | |             Guanine |   G   |   103    | |           Thymidine |   T   |   116    | |              Uracil |   U   |   116    | |     Purine (A or G) |   R   |   114    | | Pyrimidine (C or T) |   Y   |   121    | |                Keto |   K   |   107    | |               Amino |   M   |   109    | |  Strong Interaction |   S   |   115    | |    Weak Interaction |   W   |   119    | |               Not A |   B   |    98    | |               Not C |   D   |   100    | |               Not G |   H   |   104    | |          Not T or U |   V   |   118    | |                 Any |   N   |   110    | |                 Gap |   -   |    45    | |              Masked |   X   |   120    | +––––––––––––––––––––+\n\n+––––––––––––––––––––––––+ |           Conversion table (PROTEIN)           | +––––––––––––––––––––––––+ |                  Amino Acid |  Code |  Integer | +––––––––––––––-+–––-+–––––+ |                     Alanine |   A   |    97    | |                    Arginine |   R   |   114    | |                  Asparagine |   N   |   110    | |               Aspartic acid |   D   |   100    | |                    Cysteine |   C   |    99    | |                   Glutamine |   Q   |   113    | |               Glutamic acid |   E   |   101    | |                     Glycine |   G   |   103    | |                   Histidine |   H   |   104    | |                  Isoleucine |   I   |   105    | |                     Leucine |   L   |   108    | |                      Lysine |   K   |   107    | |                  Methionine |   M   |   109    | |               Phenylalanine |   F   |   102    | |                     Proline |   P   |   112    | |                 Pyrrolysine |   O   |   111    | |              Selenocysteine |   U   |   117    | |                      Serine |   S   |   115    | |                   Threonine |   T   |   116    | |                  Tryptophan |   W   |   119    | |                    Tyrosine |   Y   |   121    | |                      Valine |   V   |   118    | | Asparagine or Aspartic acid |   B   |    98    | |  Glutamine or Glutamic acid |   Z   |   122    | |       Leucine or Isoleucine |   J   |   106    | |                         Gap |   -   |    45    | |            Translation stop |   *   |    42    | |                         Any |   X   |   120    | +––––––––––––––––––––––––+\n\nValue\n\nA tuple containing the following variables:\n\ndata Multiple Sequence Alignment (MSA) encoded as a UInt8 matrix\nid Units\' ids\nref Reference sequence, i.e. a vector of the same length of the original\n\nsequences storing the values of homogeneous sites. SNPs are instead represented by a value of 46 (\'.\')\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Kpax3.EwensPitman",
    "page": "Docstrings",
    "title": "Kpax3.EwensPitman",
    "category": "type",
    "text": "Ewens-Pitman distribution\n\nDescription\n\nThe Ewens-Pitman distribution is a discrete probability distribution on the partitions of the set N = {1, ..., n} (n = 1, 2, ...). It is a two parameters generalization of the Ewens sampling formula. The latter is also known as the Chinese Restaurant Process or as the marginal distribution of a Dirichlet Process.\n\nFields\n\nα Real number (see details)\nθ Real number (see details)\n\nDetails\n\nThe two parameters must satisfy either\n\nα < 0 and θ = -Lα for some L ∈ {1, 2, ...}\n0 ≤ α < 1 and θ > − α\n\nThe special case α = 0 and θ > 0 corresponds to the Ewens sampling formula.\n\nReferences\n\nAldous, D. J. (1985) Exchangeability and related topics. In École d\'Été de Probabilités de Saint-Flour XIII — 1983. Lecture Notes in Mathematics 1117, 1-198. Springer Berlin Heidelberg. http://dx.doi.org/10.1007/BFb0099421.\n\nGnedin, A. and Pitman, J. (2006) Exchangeable Gibbs partitions and Stirling triangles. Journal of Mathematical Sciences 138(3), 5674-5685. http://dx.doi.org/10.1007/s10958-006-0335-z.\n\nKerov, S. (2006) Coherent random allocations, and the Ewens-Pitman formula. Journal of Mathematical Sciences, 138(3). http://dx.doi.org/10.1007/s10958-006-0338-9.\n\nPitman, J. (1995) Exchangeable and Partially Exchangeable Random Partitions. Probability Theory and Related Fields 102(2), 145-158. http://dx.doi.org/10.1007%2FBF01213386.\n\nPitman, J. (2006) Combinatorial Stochastic Processes. In Ecole d’Eté de Probabilités de Saint-Flour XXXII – 2002. Lecture Notes in Mathematics 1875. Springer Berlin Heidelberg. http://dx.doi.org/10.1007/b11601500.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Kpax3.EwensPitmanNAPT",
    "page": "Docstrings",
    "title": "Kpax3.EwensPitmanNAPT",
    "category": "type",
    "text": "Ewens-Pitman distribution\n\nDescription\n\nEwens-Pitman distribution with α < 0 and θ > 0. θ = -Lα for some L ∈ {1, 2, ...}.\n\nFields\n\nα Real number lesser than zero\nL Integer number greater than zero\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Kpax3.EwensPitmanPAUT",
    "page": "Docstrings",
    "title": "Kpax3.EwensPitmanPAUT",
    "category": "type",
    "text": "Ewens-Pitman distribution\n\nDescription\n\nEwens-Pitman distribution with 0 < α < 1,  θ > -α and θ ≠ 0.\n\nFields\n\nα Real number greater than zero and lesser than one\nθ Real number greater than -α but different from zero\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Kpax3.EwensPitmanPAZT",
    "page": "Docstrings",
    "title": "Kpax3.EwensPitmanPAZT",
    "category": "type",
    "text": "Ewens-Pitman distribution\n\nDescription\n\nEwens-Pitman distribution with 0 < α < 1 and θ = 0.\n\nFields\n\nα Real number greater than zero and lesser than one\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Kpax3.EwensPitmanZAPT",
    "page": "Docstrings",
    "title": "Kpax3.EwensPitmanZAPT",
    "category": "type",
    "text": "Ewens-Pitman distribution\n\nDescription\n\nEwens-Pitman distribution with α = 0 and θ > 0. This is equivalent to the Ewens sampling formula.\n\nFields\n\nθ Real number greater than zero\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Kpax3.KCSVError",
    "page": "Docstrings",
    "title": "Kpax3.KCSVError",
    "category": "type",
    "text": "Kpax3 Exception\n\nDescription\n\nException for a wrong formatted CSV file.\n\nFields\n\nmsg Optional argument with a descriptive error string\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Kpax3.KDomainError",
    "page": "Docstrings",
    "title": "Kpax3.KDomainError",
    "category": "type",
    "text": "Kpax3 Exception\n\nDescription\n\nProvides a message explaining the reason of the DomainError exception.\n\nFields\n\nmsg Optional argument with a descriptive error string\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Kpax3.KFASTAError",
    "page": "Docstrings",
    "title": "Kpax3.KFASTAError",
    "category": "type",
    "text": "Kpax3 Exception\n\nDescription\n\nException for a wrong formatted FASTA file.\n\nFields\n\nmsg Optional argument with a descriptive error string\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Kpax3.KInputError",
    "page": "Docstrings",
    "title": "Kpax3.KInputError",
    "category": "type",
    "text": "Kpax3 Exception\n\nDescription\n\nException for wrong data read from a source.\n\nFields\n\nmsg Optional argument with a descriptive error string\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Kpax3.NucleotideData",
    "page": "Docstrings",
    "title": "Kpax3.NucleotideData",
    "category": "type",
    "text": "Genetic data\n\nDescription\n\nDNA data and its metadata.\n\nFields\n\ndata Multiple sequence alignment (MSA) encoded as a binary (UInt8) matrix\nid units\' ids\nref reference sequence, i.e. a vector of the same length of the original\n\nsequences storing the values of homogeneous sites. SNPs are instead represented by a value of 29\n\nval vector with unique values per MSA site\nkey vector with indices of each value\n\nDetails\n\nLet n be the total number of units and ml be the total number of unique values observed at SNP l. Define m = m1 + ... + mL, where L is the total number of SNPs.\n\ndata is a m-by-n indicator matrix, i.e. data[j, i] is 1 if unit i possesses value j, 0 otherwise.\n\nThe value associated with column j can be obtained by val[j] while the SNP position by findall(ref == 29)[key[j]].\n\nReferences\n\nPessia A., Grad Y., Cobey S., Puranen J. S. and Corander J. (2015). K-Pax2: Bayesian identification of cluster-defining amino acid positions in large sequence datasets. Microbial Genomics 1(1). http://dx.doi.org/10.1099/mgen.0.000025.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Kpax3.dPriorRow-Tuple{Array{Int64,1},Kpax3.EwensPitman}",
    "page": "Docstrings",
    "title": "Kpax3.dPriorRow",
    "category": "method",
    "text": "Density of the Ewens-Pitman distribution\n\nDescription\n\nProbability of a partition according to the Ewens-Pitman distribution.\n\nUsage\n\ndPriorRow(ep, p) dPriorRow(ep, n, k, m)\n\nArguments\n\nep Object of (super)type EwensPitman\np Vector of integers representing a partition\nn Set size (Integer)\nk Number of blocks (Integer)\nm Vector of integers representing block sizes\n\nDetails\n\nExamples\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Kpax3.logcondpostC-Tuple{Array{UInt8,2},Array{Int64,1},Int64,Array{Int64,1},Array{Float64,2},Kpax3.AminoAcidPriorCol}",
    "page": "Docstrings",
    "title": "Kpax3.logcondpostC",
    "category": "method",
    "text": "Logp(C | R, X)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Kpax3.logcondpostS-Tuple{Array{UInt8,1},Array{Int64,1},Int64,Array{Int64,1},Array{Float64,2},Kpax3.AminoAcidPriorCol}",
    "page": "Docstrings",
    "title": "Kpax3.logcondpostS",
    "category": "method",
    "text": "logp(S | R, X)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Kpax3.logposterior-Tuple{Array{Int64,1},Array{UInt8,2},Kpax3.PriorRowPartition,Kpax3.PriorColPartition,Int64}",
    "page": "Docstrings",
    "title": "Kpax3.logposterior",
    "category": "method",
    "text": "Logposterior minus the log(normalizing constant)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Kpax3.logpriorC-Tuple{Array{UInt8,2},Array{Int64,1},Int64,Kpax3.AminoAcidPriorCol}",
    "page": "Docstrings",
    "title": "Kpax3.logpriorC",
    "category": "method",
    "text": "logp(C | R)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Kpax3]\nOrder = [:type, :function]"
},

]}
