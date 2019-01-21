var documenterSearchIndex = {"docs": [

{
    "location": "#CpuId.address_size-Tuple{}",
    "page": "Home",
    "title": "CpuId.address_size",
    "category": "method",
    "text": "address_size()\n\nDetermine the maximum virtual address size supported by this CPU as reported by the cpuid instructions.\n\nThis information may be used to determine the number of high bits that can be used in a pointer for tagging;  viz. sizeof(Int) - address_size() ÷ 8, which gives on most 64 bit Intel machines 2 bytes = 16 bit for other purposes.\n\n\n\n\n\n"
},

{
    "location": "#CpuId.cachelinesize-Tuple{}",
    "page": "Home",
    "title": "CpuId.cachelinesize",
    "category": "method",
    "text": "cachelinesize()\n\nQuery the CPU about the L1 data cache line size in bytes.  This is typically 64 byte.  Returns zero if cache line size information is not available from the CPU.\n\n\n\n\n\n"
},

{
    "location": "#CpuId.cachesize",
    "page": "Home",
    "title": "CpuId.cachesize",
    "category": "function",
    "text": "cachesize()\ncachesize(lvl::Integer)\n\nObtain information on the CPU\'s data cache sizes.\n\nDetermine the data cache size for each cache level as reported by the CPU using a set of calls to the cpuid instruction.  Returns a tuple with the tuple indices matching the cache levels; sizes are given in bytes.\n\nIf given an integer, then the data cache size of the respective cache level will be returned.  This is significantly faster than the tuple version above.\n\nNote that these are total cache sizes, where some cache levels are typically shared by multiple cpu cores, the higher cache levels may include lower levels. To print the cache levels in kbyte, use e.g. CpuId.cachesize() .÷ 1024.\n\n\n\n\n\n"
},

{
    "location": "#CpuId.cpu_base_frequency-Tuple{}",
    "page": "Home",
    "title": "CpuId.cpu_base_frequency",
    "category": "method",
    "text": "cpu_base_frequency()\n\nDetermine the CPU nominal base frequency in MHz as reported directly from the CPU through a cpuid instruction call.  Returns zero if the CPU doesn\'t provide base frequency information.\n\nThe actual cpu frequency might be lower due to throttling, or higher due to frequency boosting (see cpu_max_frequency).\n\n\n\n\n\n"
},

{
    "location": "#CpuId.cpu_bus_frequency-Tuple{}",
    "page": "Home",
    "title": "CpuId.cpu_bus_frequency",
    "category": "method",
    "text": "cpu_bus_frequency()\n\nDetermine the bus CPU frequency in MHz as reported directly from the CPU through a cpuid instrauction call.  Returns zero if the CPU doesn\'t provide bus frequency information.\n\n\n\n\n\n"
},

{
    "location": "#CpuId.cpu_max_frequency-Tuple{}",
    "page": "Home",
    "title": "CpuId.cpu_max_frequency",
    "category": "method",
    "text": "cpu_max_frequency()\n\nDetermine the maximum CPU frequency in MHz as reported directly from the CPU through a cpuid instrauction call.  The maximum frequency typically refers to the CPU\'s boost frequency.  Returns zero if the CPU doesn\'t provide maximum frequency information.\n\n\n\n\n\n"
},

{
    "location": "#CpuId.cpuarchitecture-Tuple{}",
    "page": "Home",
    "title": "CpuId.cpuarchitecture",
    "category": "method",
    "text": "cpuarchitecture()\n\nThis function tries to infer the CPU microarchitecture with a call to the cpuid instruction.  For now, only Intel CPUs are suppored according to the following table.  Others are identified as :Unknown.\n\nTable C-1 of Intel\'s Optimization Reference Manual:\n\nFamily_Model Microarchitecture\n064EH, 065EH Skylake\n063DH, 0647H, 06_56H Broadwell\n063CH, 0645H, 0646H, 063FH Haswell\n063AH, 063EH Ivy Bridge\n062AH, 062DH Sandy Bridge\n0625H, 062CH, 06_2FH Westmere\n061AH, 061EH, 061FH, 062EH Nehalem\n0617H, 061DH Enhanced Intel Core\n06_0FH Intel Core\n\n\n\n\n\n"
},

{
    "location": "#CpuId.cpubrand-Tuple{}",
    "page": "Home",
    "title": "CpuId.cpubrand",
    "category": "method",
    "text": "cpubrand()\n\nDetermine the cpu brand as a string as provided by the CPU through executing the cpuid instruction.  This function throws if no CPU brand information is available form the CPU, which should never be the case on recent hardware.\n\n\n\n\n\n"
},

{
    "location": "#CpuId.cpucores-Tuple{}",
    "page": "Home",
    "title": "CpuId.cpucores",
    "category": "method",
    "text": "cpucores()\n\nDetermine the number of physical cores on the current executing CPU by invoking a cpuid instruction.  On systems with multiple CPUs, this only gives information on the single CPU that is executing the code. Returns zero if querying this feature is not supported, which may also be due to a running hypervisor (as observed on hvvendor() == :Microsoft).\n\nAlso, this function does not take logical cores (aka hyperthreading) into account, but determines the true number of physical cores, which typically also share L3 caches and main memory bandwidth.\n\nSee also the Julia global variable Base.Sys.CPU_CORES, which gives the total count of all cores on the machine.\n\n\n\n\n\n"
},

{
    "location": "#CpuId.cpucores_total-Tuple{}",
    "page": "Home",
    "title": "CpuId.cpucores_total",
    "category": "method",
    "text": "cpucores_total()\n\nDetermine the number of logical cores on the current executing CPU by invoking a cpuid instruction.  On systems with multiple CPUs, this only gives information on the single CPU that is executing the code. Returns zero if querying this feature is not supported, which may also be due to a running hypervisor (as observed on hvvendor() == :Microsoft).\n\nIn contrast to cpucores(), this function also takes logical cores aka hyperthreading into account.  For practical purposes, only I/O intensive code should make use of these total number of cores; memory or computation bound code will not benefit, but rather experience a detrimental effect.\n\nSee also Julia\'s global variable Base.Sys.CPU_CORES, which gives the total count of all cores on the machine.  Thus, Base.Sys.CPU_CORES ÷ CpuId.cpucores_total() gives you the number of CPUs (packages) in your system.\n\n\n\n\n\n"
},

{
    "location": "#CpuId.cpucycle",
    "page": "Home",
    "title": "CpuId.cpucycle",
    "category": "function",
    "text": "cpucycle()\n\nRead the CPU\'s Time Stamp Counter, TSC, directly with a rdtsc instruction.  This counter is increased for every CPU cycle, until reset.  This function has, when inlined, practically no overhead and is, thus, probably the fasted method to count how many cycles the CPU has spent working since last read.\n\nNote, the TSC runs at a constant rate if hasfeature(:TSCINV)==true; otherwise, it is tied to the current CPU clock frequency.\n\nHint: This function is extremely efficient when inlined into your own code.       Convince yourself by typing @code_native CpuId.cpucycle().       To use this for benchmarking, simply subtract the results of two calls.       The result is the actual CPU clock cycles spent, independent of the       current (and possible non-constant) CPU clock frequency.\n\n\n\n\n\n"
},

{
    "location": "#CpuId.cpucycle_id",
    "page": "Home",
    "title": "CpuId.cpucycle_id",
    "category": "function",
    "text": "cpucycle_id()\n\nRead the CPU\'s Time Stamp Counter, TSC, and executing CPU id directly with a rdtscp instruction.  This function is similar to the cpucycle(), but uses an instruction that also allows to detect if the code has been moved to a different executing CPU.  See also the comments for cpucycle() which equally apply.\n\n\n\n\n\n"
},

{
    "location": "#CpuId.cpufeature",
    "page": "Home",
    "title": "CpuId.cpufeature",
    "category": "function",
    "text": "cpufeature( feature::Symbol ) ::Bool\ncpufeature( feature::CpuFeature ) ::Bool\n\nQuery the CPU whether it supports the given feature.  For fast checking provide directly the CpuFeature defined as a global const in CpuId. Explicitly typed CpuFeatures got by the same name as the corresponding symbols.  Valid symbols are available from keys(CpuId.CpuFeatureDescription).\n\n\n\n\n\n"
},

{
    "location": "#CpuId.cpufeaturedesc-Tuple{Symbol}",
    "page": "Home",
    "title": "CpuId.cpufeaturedesc",
    "category": "method",
    "text": "cpufeaturedesc( feature::Symbol ) ::String\n\nGet the textual description of a CPU feature flag given as a symbol.\n\n\n\n\n\n"
},

{
    "location": "#CpuId.cpufeatures-Tuple{}",
    "page": "Home",
    "title": "CpuId.cpufeatures",
    "category": "method",
    "text": "cpufeatures() ::Vector{Symbol}\n\nGet a list of symbols of all cpu supported features.  Might be extensive and not exactly useful other than for testing purposes.  Also, this implementation is not efficient since each feature is queried independently.\n\n\n\n\n\n"
},

{
    "location": "#CpuId.cpufeaturetable-Tuple{}",
    "page": "Home",
    "title": "CpuId.cpufeaturetable",
    "category": "method",
    "text": "cpufeaturetable() ::MarkdownString\n\nGenerate a markdown table of all the detected/available/supported CPU features along with some textural description.\n\n\n\n\n\n"
},

{
    "location": "#CpuId.cpuinfo-Tuple{}",
    "page": "Home",
    "title": "CpuId.cpuinfo",
    "category": "method",
    "text": "cpuinfo()\n\nGenerate a markdown table with the results of all of the CPU querying functions provided by the module CpuId.  Intended to give a quick overview for diagnostic purposes e.g. in log files.\n\n\n\n\n\n"
},

{
    "location": "#CpuId.cpumodel-Tuple{}",
    "page": "Home",
    "title": "CpuId.cpumodel",
    "category": "method",
    "text": "cpumodel()\n\nObtain the CPU model information as a Dict of pairs of :Family, :Model, :Stepping, and :CpuType.\n\n\n\n\n\n"
},

{
    "location": "#CpuId.cpuvendor-Tuple{}",
    "page": "Home",
    "title": "CpuId.cpuvendor",
    "category": "method",
    "text": "cpuvendor()\n\nDetermine the cpu vendor as a Julia symbol.  In case the CPU vendor identification is unknown :Unknown is returned (then also consider raising an issue on Github).\n\n\n\n\n\n"
},

{
    "location": "#CpuId.has_cpu_frequencies-Tuple{}",
    "page": "Home",
    "title": "CpuId.has_cpu_frequencies",
    "category": "method",
    "text": "has_cpu_frequencies()\n\nDetermine whether the CPU provides clock frequency information.  If true, then cpu_base_frequency(), cpu_max_frequency() and cpu_bus_frequency() should be expected to return sensible information.\n\n\n\n\n\n"
},

{
    "location": "#CpuId.hvinfo-Tuple{}",
    "page": "Home",
    "title": "CpuId.hvinfo",
    "category": "method",
    "text": "hvinfo() ::MarkdownString\n\nGenerate a markdown table of all the detected/available/supported tags of a running hypervisor.  If there is no hosting hypervisor, an empty markdown string is returned.\n\n\n\n\n\n"
},

{
    "location": "#CpuId.hvvendor-Tuple{}",
    "page": "Home",
    "title": "CpuId.hvvendor",
    "category": "method",
    "text": "hvvendor()\n\nDetermine the hypervisor vendor as a Julia symbol or :NoHypervisor if not running a hypervisor. In case the hypervisor vendor identification is unknown :Unknown is returned (then also consider raising an issue on Github).\n\n\n\n\n\n"
},

{
    "location": "#CpuId.hvversion-Tuple{}",
    "page": "Home",
    "title": "CpuId.hvversion",
    "category": "method",
    "text": "hvversion()\n\nGet a dictionary with additional information of the running hypervisor. The dictionary is empty if no hypervisor is detected, and only tags that are provided by the hypervisor are included.\n\nNote, the data available is hypervisor vendor dependent.\n\n\n\n\n\n"
},

{
    "location": "#CpuId.hypervised-Tuple{}",
    "page": "Home",
    "title": "CpuId.hypervised",
    "category": "method",
    "text": "hypervised()\n\nCheck whether the CPU reports to run a hypervisor context, that is, whether the current process runs in a virtual machine.\n\nA positive answer may indicate that other information reported by the CPU is fake, such as number of physical and logical cores.  This is because the hypervisor is free to decide which information to pass.\n\n\n\n\n\n"
},

{
    "location": "#CpuId.perf_fix_bits-Tuple{}",
    "page": "Home",
    "title": "CpuId.perf_fix_bits",
    "category": "method",
    "text": "perf_fix_bits()\n\nDetermine the number of bits fixed-function counters performance counters on the executing CPU.\n\nThis information is only available if cpufeature(PDCM) == true.\n\n\n\n\n\n"
},

{
    "location": "#CpuId.perf_fix_counters-Tuple{}",
    "page": "Home",
    "title": "CpuId.perf_fix_counters",
    "category": "method",
    "text": "perf_fix_counters()\n\nDetermine the number of fixed-function performance counters on the executing machine.\n\nThis information is only available if cpufeature(PDCM) == true.\n\n\n\n\n\n"
},

{
    "location": "#CpuId.perf_gen_bits-Tuple{}",
    "page": "Home",
    "title": "CpuId.perf_gen_bits",
    "category": "method",
    "text": "perf_gen_bits()\n\nDetermine the number of bits general purpose counters performance counters on the executing CPU.\n\nThis information is only available if cpufeature(PDCM) == true.\n\n\n\n\n\n"
},

{
    "location": "#CpuId.perf_gen_counters-Tuple{}",
    "page": "Home",
    "title": "CpuId.perf_gen_counters",
    "category": "method",
    "text": "perf_gen_counters()\n\nDetermine the number of general purpose counters performance counters on the executing CPU.  Number of counters is given as per logical processor.\n\nThis information is only available if cpufeature(PDCM) == true.\n\n\n\n\n\n"
},

{
    "location": "#CpuId.perf_revision-Tuple{}",
    "page": "Home",
    "title": "CpuId.perf_revision",
    "category": "method",
    "text": "perf_revision()\n\nDetermine the revision number of the performance monitoring unit.\n\nThis information is only available if cpufeature(PDCM) == true.\n\n\n\n\n\n"
},

{
    "location": "#CpuId.physical_address_size-Tuple{}",
    "page": "Home",
    "title": "CpuId.physical_address_size",
    "category": "method",
    "text": "physical_address_size()\n\nDetermine the maximum phyiscal addresses size supported by this CPU as reported by the cpuid instructions.  Prefer to make use of address_size for practical purposes; use this only for diagnostic issues, such as determining the theoretical maximum memory size.  Also note that this address size is manipulated by a running hypervisor.\n\n\n\n\n\n"
},

{
    "location": "#CpuId.simdbits-Tuple{}",
    "page": "Home",
    "title": "CpuId.simdbits",
    "category": "method",
    "text": "simdbits()\n\nQuery the CPU on the maximum supported SIMD vector size in bits, or sizeof(Int) in bits if no SIMD capability is reported by the invoked cpuid instruction.\n\n\n\n\n\n"
},

{
    "location": "#CpuId.simdbytes-Tuple{}",
    "page": "Home",
    "title": "CpuId.simdbytes",
    "category": "method",
    "text": "simdbytes()\n\nQuery the CPU on the maximum supported SIMD vector size in bytes, or sizeof(Int) if no SIMD capability is reported by the invoked cpuid instruction.\n\n\n\n\n\n"
},

{
    "location": "#CpuId.CpuFeature",
    "page": "Home",
    "title": "CpuId.CpuFeature",
    "category": "type",
    "text": "Tuple of cpuid leaf in eax, result register and bit, and a descriptive string.\n\nThis table is an edited combination of sources from Wikipedia page on cpuid, sandpile.org, and of course Intel\'s 4670 page combined Architectures Software Devleoper Manual.\n\nExpect this table to be incomplete and improvable.\n\n\n\n\n\n"
},

{
    "location": "#CpuId.__datacachesize-Tuple{UInt32,UInt32,UInt32}",
    "page": "Home",
    "title": "CpuId.__datacachesize",
    "category": "method",
    "text": "Helper function that performs the actual computation of the cache size with register values retrieved from cpuid on leaf 0x04.\n\nCache size information on leaf 0x04 is computed with     size in bytes = (ways+1) * (partitions+1) * (linesize+1) * (sets+1) where     ways = ebx[22:31], partitions = ebx[12:21], linesize = ebx[0:11]     sets = ecx[:]\n\n\n\n\n\n"
},

{
    "location": "#CpuId.__init__-Tuple{}",
    "page": "Home",
    "title": "CpuId.__init__",
    "category": "method",
    "text": "Enables and disables a few functions depending on whether the features are actually available.  This should overcome a potential efficiency issue when calling those functions in a hot zone.\n\n\n\n\n\n"
},

{
    "location": "#CpuId._throw_unsupported_leaf-Tuple{Any}",
    "page": "Home",
    "title": "CpuId._throw_unsupported_leaf",
    "category": "method",
    "text": "Helper function, tagged noinline to not have detrimental effect on performance.\n\n\n\n\n\n"
},

{
    "location": "#CpuId.cpuvendorstring-Tuple{}",
    "page": "Home",
    "title": "CpuId.cpuvendorstring",
    "category": "method",
    "text": "cpuvendorstring()\n\nDetermine the cpu vendor string as provided by the cpu by executing a cpuid instruction.  Note, this string has a fixed length of 12 characters. Use cpuvendor() if you prefer getting a parsed Julia symbol.\n\n\n\n\n\n"
},

{
    "location": "#CpuId.hasleaf-Tuple{UInt32}",
    "page": "Home",
    "title": "CpuId.hasleaf",
    "category": "method",
    "text": "hasleaf(leaf::UInt32) ::Bool\n\nHelper function (not exported) to test whether the CPU claims to provide the given leaf in a cpuid instruction call.\n\nNote: It appears LLVM really know its gear: If this function is inlined, and       just-in-time compiled, then this test is eliminated completly if the       executing machine does support this feature. Yeah!\n\n\n\n\n\n"
},

{
    "location": "#CpuId.hvvendorstring-Tuple{}",
    "page": "Home",
    "title": "CpuId.hvvendorstring",
    "category": "method",
    "text": "hvvendorstring()\n\nDetermine the hypervisor vendor string as provided by the cpu by executing a cpuid instruction.  Note, this string has a fixed length of 12 characters. Use hvvendor() if you prefer getting a parsed Julia symbol.  If the CPU is not running a hypervisor, a string of undefined content will be returned.\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [CpuId]\nOrder = [:type, :function]"
},

]}
