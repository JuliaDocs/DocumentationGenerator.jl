var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#CPU,-what-can-you-do?-1",
    "page": "Readme",
    "title": "CPU, what can you do?",
    "category": "section",
    "text": "CpuId is a package for the Julia programming language that enables you to query the availability of specific CPU features with low run-time cost using the assembly instruction cpuid.(Image: Build Status) (Image: Build Status) (Image: codecov)Status: considered a pre-beta version, ready for you to try out.(Image: CpuId)Works on Julia 0.7, on Linux, Mac and Windows with Intel CPUs; support for AMD CPUs is in preparation."
},

{
    "location": "#Motivation-1",
    "page": "Readme",
    "title": "Motivation",
    "category": "section",
    "text": "Besides the obvious reason to gather information for diagnostics, the CPU provides valuable information when aiming at increasing the efficiency of code. Such use-cases could be to tailor the size of working sets of data according to the available cache sizes, to detect when the code is executed in a virtual machine (hypervisor), or to determine the size of the largest SIMD registers available to choose the best algorithm for the current hardware.This information is obtained by directly querying the CPU through the cpuid assembly instruction which operates only using CPU registers, and provides a portable way to adapt code to specific hardware.Same information may of course be collected from various sources, from Julia itself or from the operating system, e.g. on Linux from /proc/cpuinfo.  See below for a few alternatives.  However, the cpuid instruction is portable in the sense that it doesn\'t rely on other external dependencies.The full documentation is found in Intel\'s 4670 page combined Architectures Software Devleoper Manual. A more practical and concise overview of the cpuid instruction is found at sandpile.org."
},

{
    "location": "#Installation-and-Usage-1",
    "page": "Readme",
    "title": "Installation and Usage",
    "category": "section",
    "text": "CpuId is a registered Julia package; use the package manager to install:Julia> Pkg.add(\"CpuId\")Or, if you\'re keen to get some intermediate updates, clone from GitHub master branch:Julia> Pkg.clone(\"https://github.com/m-j-w/CpuId.jl\")See the diagnostic summary on your CPU by typingjulia> using CpuId\njulia> cpuinfo()\n\n   Cpu Property         Value\n  ╾───────────────────╌───────────────────────────────────────────────────────────╼\n   Brand                Intel(R) Xeon(R) CPU E3-1225 v5 @ 3.30GHz\n   Vendor               :Intel\n   Architecture         :Skylake\n   Model                Family: 6, Model: 94, Stepping: 3, Type: 0\n   Cores                4 physical cores, 4 logical cores (on executing CPU)\n                        No Hyperthreading detected\n   Clock Frequencies    3300 / 3700 MHz (base/max), 100 MHz bus\n   Data Cache           Level 1:3 : (32, 256, 8192) kbytes\n                        64 byte cache line size\n   Address Size         48 bits virtual, 39 bits physical\n   SIMD                 256 bit = 32 byte max. SIMD vector size\n   Time Stamp Counter   TSC is accessible via `rdtsc`\n                        TSC runs at constant rate (invariant from clock frequency)\n   Perf. Monitoring     Performance Monitoring Counters (PMC) revision 4\n                        Available hardware counters per logical core:\n                        3 fixed-function counters of 48 bit width\n                        8 general-purpose counters of 48 bit width\n   Hypervisor           NoOr get a list of the feature flags of your CPU withjulia> cpufeaturetable()\n\n   Cpu Feature   Description\n  ╾────────────╌───────────────────────────────────────────────────────────────╼\n   3DNowP        3D Now PREFETCH and PREFETCHW instructions\n   ACPI          Thermal monitor and software controlled clock facilities (MSR)\n   ADX           Intel ADX (Multi-Precision Add-Carry Instruction Extensions)\n   AES           AES encryption instruction set\n   AHF64         LAHF and SAHF in PM64\n   APIC          APIC on-chip (Advanced Programmable Interrupt Controller)\n   AVX           256bit Advanced Vector Extensions, AVX\n   AVX2          SIMD 256bit Advanced Vector Extensions 2\n   BMI1          Bit Manipulation Instruction Set 1\n   BMI2          Bit Manipulation Instruction Set 2\n   CLFLUSH       CLFLUSHOPT Instructions\n   CLFSH         CLFLUSH instruction (SSE2)\n   CMOV          Conditional move CMOV and FCMOV instructions\n   CX16          CMPXCHG16B instruction\n   CX8           CMPXCHG8 instruction (64bit compare and exchange)\n   ..."
},

{
    "location": "#Features-1",
    "page": "Readme",
    "title": "Features",
    "category": "section",
    "text": "This release covers a selection of fundamental and higher level functionality:cpuinfo() generates the summary shown above (markdown string).\ncpubrand(), cpumodel(), cpuvendor() allow the identification of the   CPU.\ncpuarchitecture() tries to infer the microarchitecture, currently only of   Intel CPUs.\ncpucores() and cpucores_total() to determine the number of physical and   logical cores on the currently executing CPU, which typically share L3   caches and main memory bandwidth.  If the result of both functions is   equal, then the CPU does not use of hyperthreading.\naddress_size() and physical_address_size() return the number of bits used   in pointers.  Useful when stealing a few bits from a pointer.\ncachelinesize() gives the size in bytes of one cache line, which is   typically 64 bytes.\ncachesize() returns a tuple with the sizes of the data caches in bytes.\ncpu_base_frequency(), cpu_max_frequency(), cpu_bus_frequency() give -   if supported by the CPU, the base, maximum and bus clock frequencies.   Use has_cpu_frequencies() to check whether this property is supported.\nhypervised() returns true when the CPU indicates that a hypervisor is   running the operating system, aka a virtual machine.  In that case,   hvvendor() may be invoked to get the, well, hypervisor vendor, and   hvversion() returns a dictionary of additional version tags.   hvinfo() generates a markdown summary of same dictionary.\nsimdbits() and simdbytes() return the size of the largest SIMD register   available on the executing CPU.\nperf_revision() to query the revision number of hardware performance   monitoring counters, along with perf_fix_counters(), perf_gen_counters(),   perf_fix_bits(), perf_gen_bits() to determine the number and bit width   of available fixed-function and general purpose counters per logical core.\ncpucycle() and cpucycle_id() let you directly get the CPU\'s time stamp   counter, which is increased for every CPU clock cycle. This is a method to   perform low overhead micro-benchmarking; though, technically, this uses the   rdtsc and rdtscp instructions rather than cpuid.\ncpufeature(::Symbol) permits asking for the availability of a specific   feature, and cpufeaturetable() gives a complete overview of all detected   features with a brief explanation, as shown above."
},

{
    "location": "#Background-1",
    "page": "Readme",
    "title": "Background",
    "category": "section",
    "text": "The cpuid instruction is a generic way provided by the CPU vendor to obtain basic hardware information.  It provides data in form of boolean bit fields, integer fields and strings, all packed in the returned CPU registers EAX, EBX, ECX and EDX. Which information is returned is determined by the so called leaf, which is defined by setting the input register EAX to a specific 32 bit integer value before executing the instruction.  The extent and kind of information obtainable via this instruction has changed quite a lot over the past decade and still evolves with every CPU generation.  Thus, not all information is available on every CPU model, and certainly everything is vendor dependent.This Julia package also provides the cpucycle() function which allows getting the current time stamp counter (TSC) by emitting a rdtsc instruction. Similarly to cpuid, it only requires CPU registers and is usable in user-land code and facilitates an alternative approach to micro-benchmarking."
},

{
    "location": "#Limitations-1",
    "page": "Readme",
    "title": "Limitations",
    "category": "section",
    "text": "The behaviour on non-Intel CPUs is currently unknown; though technically a crash of Julia could be expected, theoretically, a rather large list of CPUs support the cpuid instruction. Tip: Just try it and report back.There are plenty of different CPUs, and in particular the cpuid instruction has numerous corner cases, which this package does not address, yet.Moreover, the cpuid instruction can only provide information for the executing physical CPU, called a package.  To obtain information on all packages, and all physical and logical cores, the executing program must be pinned sequentially to each and every core, and gather its properties. This is how libuv, hwloc or the operating system obtain that kind information.  However, this would require additional external or operating system dependent code which is not the scope of this package."
},

{
    "location": "#Specific-limitations-1",
    "page": "Readme",
    "title": "Specific limitations",
    "category": "section",
    "text": "Why aren\'t all infos available that are seen e.g. in /proc/cpuinfo?   Many of those features, flags and properties reside in the so called machine   specific registers (MSR), which are only accessible to privileged programs   running in the so called ring 0, such as the Linux kernel itself. Thus,   short answer: You\'re not allowed to.\nThe results obtained by CpuId functions are inconsistent with my hardware!   Try other programs whether they give the same information or differ. If they   differ, then you found a bug.  See below for some   alternatives, in particular the Linux command line tool   cpuid.\nWhen running a hypervisor (virtual machine) the presented information is wrong!   Hypervisor vendors are free to provide the cpuid information   by intercepting calls to that instruction.  Not all vendors comply, and some   even permit the user to change what is reported.  Thus, expect some   surprises when a hypervisor is detected.\nMy hypervisor is not detected!   Either you\'re not really running a hypervisor, e.g. Bash on Windows is   not a virtual machine, or there is a feature missing. Raise an issue on   GitHub.\ncpucycles() invokes rdtsc; that is not cpuid!   True. However, both are valuable when diagnosing performance issues   and trying to perform micro benchmarks on specific hardware."
},

{
    "location": "#Alternatives-1",
    "page": "Readme",
    "title": "Alternatives",
    "category": "section",
    "text": "On Linux, most of the information may be obtained by reading from the /proc tree, in particular /proc/cpuinfo, which eventually also invokes the cpuid instruction.  Type man 4 cpuid to get a brief description of this kernel driver.On many Linux distributions, there is also the command line tool cpuid, which essentially does exactly the same.  On Ubuntu, you would install it using sudo apt install cpuid, then use it to show a summary by simply typing cpuid.Then, of course, there are a few functions in Julia Base. These are Base.Sys.cpu_info(), and Base.Sys.cpu_summary(), as well as the global variables Base.Sys.CPU_CORES, and Base.Sys.cpu_name.  These are mostly provided by wrapping libuv.  In particular CPU_CORES is the reason for this module: It\'s intrinsically unclear whether that number includes hyperthreading cores, or whether it is referring to real physical cores of the current machine.The Julia package Hwloc.jl provides similar and more information primarily directed towards the topology of your CPUs, viz.  number of CPU packages, physical & logical cores and associated caches, along with a number of features to deal with thread affinity. However, it also pulls in additional external binary dependencies in that it relies on hwloc, which also implies quite some computational overhead. Whether this is an issue in the first place depends much on your use-case."
},

{
    "location": "#Terms-of-usage-1",
    "page": "Readme",
    "title": "Terms of usage",
    "category": "section",
    "text": "This Julia package CpuId is published as open source and licensed under the MIT \"Expat\" License.Contributions welcome!You\'re welcome to report successful usage or any issues via GitHub, and to open pull requests to extend the current functionality."
},

{
    "location": "autodocs/#CpuId.address_size-Tuple{}",
    "page": "Docstrings",
    "title": "CpuId.address_size",
    "category": "method",
    "text": "address_size()\n\nDetermine the maximum virtual address size supported by this CPU as reported by the cpuid instructions.\n\nThis information may be used to determine the number of high bits that can be used in a pointer for tagging;  viz. sizeof(Int) - address_size() ÷ 8, which gives on most 64 bit Intel machines 2 bytes = 16 bit for other purposes.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CpuId.cachelinesize-Tuple{}",
    "page": "Docstrings",
    "title": "CpuId.cachelinesize",
    "category": "method",
    "text": "cachelinesize()\n\nQuery the CPU about the L1 data cache line size in bytes.  This is typically 64 byte.  Returns zero if cache line size information is not available from the CPU.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CpuId.cachesize",
    "page": "Docstrings",
    "title": "CpuId.cachesize",
    "category": "function",
    "text": "cachesize()\ncachesize(lvl::Integer)\n\nObtain information on the CPU\'s data cache sizes.\n\nDetermine the data cache size for each cache level as reported by the CPU using a set of calls to the cpuid instruction.  Returns a tuple with the tuple indices matching the cache levels; sizes are given in bytes.\n\nIf given an integer, then the data cache size of the respective cache level will be returned.  This is significantly faster than the tuple version above.\n\nNote that these are total cache sizes, where some cache levels are typically shared by multiple cpu cores, the higher cache levels may include lower levels. To print the cache levels in kbyte, use e.g. CpuId.cachesize() .÷ 1024.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CpuId.cpu_base_frequency-Tuple{}",
    "page": "Docstrings",
    "title": "CpuId.cpu_base_frequency",
    "category": "method",
    "text": "cpu_base_frequency()\n\nDetermine the CPU nominal base frequency in MHz as reported directly from the CPU through a cpuid instruction call.  Returns zero if the CPU doesn\'t provide base frequency information.\n\nThe actual cpu frequency might be lower due to throttling, or higher due to frequency boosting (see cpu_max_frequency).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CpuId.cpu_bus_frequency-Tuple{}",
    "page": "Docstrings",
    "title": "CpuId.cpu_bus_frequency",
    "category": "method",
    "text": "cpu_bus_frequency()\n\nDetermine the bus CPU frequency in MHz as reported directly from the CPU through a cpuid instrauction call.  Returns zero if the CPU doesn\'t provide bus frequency information.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CpuId.cpu_max_frequency-Tuple{}",
    "page": "Docstrings",
    "title": "CpuId.cpu_max_frequency",
    "category": "method",
    "text": "cpu_max_frequency()\n\nDetermine the maximum CPU frequency in MHz as reported directly from the CPU through a cpuid instrauction call.  The maximum frequency typically refers to the CPU\'s boost frequency.  Returns zero if the CPU doesn\'t provide maximum frequency information.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CpuId.cpuarchitecture-Tuple{}",
    "page": "Docstrings",
    "title": "CpuId.cpuarchitecture",
    "category": "method",
    "text": "cpuarchitecture()\n\nThis function tries to infer the CPU microarchitecture with a call to the cpuid instruction.  For now, only Intel CPUs are suppored according to the following table.  Others are identified as :Unknown.\n\nTable C-1 of Intel\'s Optimization Reference Manual:\n\nFamily_Model Microarchitecture\n064EH, 065EH Skylake\n063DH, 0647H, 06_56H Broadwell\n063CH, 0645H, 0646H, 063FH Haswell\n063AH, 063EH Ivy Bridge\n062AH, 062DH Sandy Bridge\n0625H, 062CH, 06_2FH Westmere\n061AH, 061EH, 061FH, 062EH Nehalem\n0617H, 061DH Enhanced Intel Core\n06_0FH Intel Core\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CpuId.cpubrand-Tuple{}",
    "page": "Docstrings",
    "title": "CpuId.cpubrand",
    "category": "method",
    "text": "cpubrand()\n\nDetermine the cpu brand as a string as provided by the CPU through executing the cpuid instruction.  This function throws if no CPU brand information is available form the CPU, which should never be the case on recent hardware.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CpuId.cpucores-Tuple{}",
    "page": "Docstrings",
    "title": "CpuId.cpucores",
    "category": "method",
    "text": "cpucores()\n\nDetermine the number of physical cores on the current executing CPU by invoking a cpuid instruction.  On systems with multiple CPUs, this only gives information on the single CPU that is executing the code. Returns zero if querying this feature is not supported, which may also be due to a running hypervisor (as observed on hvvendor() == :Microsoft).\n\nAlso, this function does not take logical cores (aka hyperthreading) into account, but determines the true number of physical cores, which typically also share L3 caches and main memory bandwidth.\n\nSee also the Julia global variable Base.Sys.CPU_CORES, which gives the total count of all cores on the machine.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CpuId.cpucores_total-Tuple{}",
    "page": "Docstrings",
    "title": "CpuId.cpucores_total",
    "category": "method",
    "text": "cpucores_total()\n\nDetermine the number of logical cores on the current executing CPU by invoking a cpuid instruction.  On systems with multiple CPUs, this only gives information on the single CPU that is executing the code. Returns zero if querying this feature is not supported, which may also be due to a running hypervisor (as observed on hvvendor() == :Microsoft).\n\nIn contrast to cpucores(), this function also takes logical cores aka hyperthreading into account.  For practical purposes, only I/O intensive code should make use of these total number of cores; memory or computation bound code will not benefit, but rather experience a detrimental effect.\n\nSee also Julia\'s global variable Base.Sys.CPU_CORES, which gives the total count of all cores on the machine.  Thus, Base.Sys.CPU_CORES ÷ CpuId.cpucores_total() gives you the number of CPUs (packages) in your system.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CpuId.cpucycle",
    "page": "Docstrings",
    "title": "CpuId.cpucycle",
    "category": "function",
    "text": "cpucycle()\n\nRead the CPU\'s Time Stamp Counter, TSC, directly with a rdtsc instruction.  This counter is increased for every CPU cycle, until reset.  This function has, when inlined, practically no overhead and is, thus, probably the fasted method to count how many cycles the CPU has spent working since last read.\n\nNote, the TSC runs at a constant rate if hasfeature(:TSCINV)==true; otherwise, it is tied to the current CPU clock frequency.\n\nHint: This function is extremely efficient when inlined into your own code.       Convince yourself by typing @code_native CpuId.cpucycle().       To use this for benchmarking, simply subtract the results of two calls.       The result is the actual CPU clock cycles spent, independent of the       current (and possible non-constant) CPU clock frequency.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CpuId.cpucycle_id",
    "page": "Docstrings",
    "title": "CpuId.cpucycle_id",
    "category": "function",
    "text": "cpucycle_id()\n\nRead the CPU\'s Time Stamp Counter, TSC, and executing CPU id directly with a rdtscp instruction.  This function is similar to the cpucycle(), but uses an instruction that also allows to detect if the code has been moved to a different executing CPU.  See also the comments for cpucycle() which equally apply.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CpuId.cpufeature",
    "page": "Docstrings",
    "title": "CpuId.cpufeature",
    "category": "function",
    "text": "cpufeature( feature::Symbol ) ::Bool\ncpufeature( feature::CpuFeature ) ::Bool\n\nQuery the CPU whether it supports the given feature.  For fast checking provide directly the CpuFeature defined as a global const in CpuId. Explicitly typed CpuFeatures got by the same name as the corresponding symbols.  Valid symbols are available from keys(CpuId.CpuFeatureDescription).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CpuId.cpufeaturedesc-Tuple{Symbol}",
    "page": "Docstrings",
    "title": "CpuId.cpufeaturedesc",
    "category": "method",
    "text": "cpufeaturedesc( feature::Symbol ) ::String\n\nGet the textual description of a CPU feature flag given as a symbol.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CpuId.cpufeatures-Tuple{}",
    "page": "Docstrings",
    "title": "CpuId.cpufeatures",
    "category": "method",
    "text": "cpufeatures() ::Vector{Symbol}\n\nGet a list of symbols of all cpu supported features.  Might be extensive and not exactly useful other than for testing purposes.  Also, this implementation is not efficient since each feature is queried independently.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CpuId.cpufeaturetable-Tuple{}",
    "page": "Docstrings",
    "title": "CpuId.cpufeaturetable",
    "category": "method",
    "text": "cpufeaturetable() ::MarkdownString\n\nGenerate a markdown table of all the detected/available/supported CPU features along with some textural description.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CpuId.cpuinfo-Tuple{}",
    "page": "Docstrings",
    "title": "CpuId.cpuinfo",
    "category": "method",
    "text": "cpuinfo()\n\nGenerate a markdown table with the results of all of the CPU querying functions provided by the module CpuId.  Intended to give a quick overview for diagnostic purposes e.g. in log files.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CpuId.cpumodel-Tuple{}",
    "page": "Docstrings",
    "title": "CpuId.cpumodel",
    "category": "method",
    "text": "cpumodel()\n\nObtain the CPU model information as a Dict of pairs of :Family, :Model, :Stepping, and :CpuType.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CpuId.cpuvendor-Tuple{}",
    "page": "Docstrings",
    "title": "CpuId.cpuvendor",
    "category": "method",
    "text": "cpuvendor()\n\nDetermine the cpu vendor as a Julia symbol.  In case the CPU vendor identification is unknown :Unknown is returned (then also consider raising an issue on Github).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CpuId.has_cpu_frequencies-Tuple{}",
    "page": "Docstrings",
    "title": "CpuId.has_cpu_frequencies",
    "category": "method",
    "text": "has_cpu_frequencies()\n\nDetermine whether the CPU provides clock frequency information.  If true, then cpu_base_frequency(), cpu_max_frequency() and cpu_bus_frequency() should be expected to return sensible information.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CpuId.hvinfo-Tuple{}",
    "page": "Docstrings",
    "title": "CpuId.hvinfo",
    "category": "method",
    "text": "hvinfo() ::MarkdownString\n\nGenerate a markdown table of all the detected/available/supported tags of a running hypervisor.  If there is no hosting hypervisor, an empty markdown string is returned.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CpuId.hvvendor-Tuple{}",
    "page": "Docstrings",
    "title": "CpuId.hvvendor",
    "category": "method",
    "text": "hvvendor()\n\nDetermine the hypervisor vendor as a Julia symbol or :NoHypervisor if not running a hypervisor. In case the hypervisor vendor identification is unknown :Unknown is returned (then also consider raising an issue on Github).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CpuId.hvversion-Tuple{}",
    "page": "Docstrings",
    "title": "CpuId.hvversion",
    "category": "method",
    "text": "hvversion()\n\nGet a dictionary with additional information of the running hypervisor. The dictionary is empty if no hypervisor is detected, and only tags that are provided by the hypervisor are included.\n\nNote, the data available is hypervisor vendor dependent.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CpuId.hypervised-Tuple{}",
    "page": "Docstrings",
    "title": "CpuId.hypervised",
    "category": "method",
    "text": "hypervised()\n\nCheck whether the CPU reports to run a hypervisor context, that is, whether the current process runs in a virtual machine.\n\nA positive answer may indicate that other information reported by the CPU is fake, such as number of physical and logical cores.  This is because the hypervisor is free to decide which information to pass.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CpuId.perf_fix_bits-Tuple{}",
    "page": "Docstrings",
    "title": "CpuId.perf_fix_bits",
    "category": "method",
    "text": "perf_fix_bits()\n\nDetermine the number of bits fixed-function counters performance counters on the executing CPU.\n\nThis information is only available if cpufeature(PDCM) == true.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CpuId.perf_fix_counters-Tuple{}",
    "page": "Docstrings",
    "title": "CpuId.perf_fix_counters",
    "category": "method",
    "text": "perf_fix_counters()\n\nDetermine the number of fixed-function performance counters on the executing machine.\n\nThis information is only available if cpufeature(PDCM) == true.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CpuId.perf_gen_bits-Tuple{}",
    "page": "Docstrings",
    "title": "CpuId.perf_gen_bits",
    "category": "method",
    "text": "perf_gen_bits()\n\nDetermine the number of bits general purpose counters performance counters on the executing CPU.\n\nThis information is only available if cpufeature(PDCM) == true.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CpuId.perf_gen_counters-Tuple{}",
    "page": "Docstrings",
    "title": "CpuId.perf_gen_counters",
    "category": "method",
    "text": "perf_gen_counters()\n\nDetermine the number of general purpose counters performance counters on the executing CPU.  Number of counters is given as per logical processor.\n\nThis information is only available if cpufeature(PDCM) == true.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CpuId.perf_revision-Tuple{}",
    "page": "Docstrings",
    "title": "CpuId.perf_revision",
    "category": "method",
    "text": "perf_revision()\n\nDetermine the revision number of the performance monitoring unit.\n\nThis information is only available if cpufeature(PDCM) == true.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CpuId.physical_address_size-Tuple{}",
    "page": "Docstrings",
    "title": "CpuId.physical_address_size",
    "category": "method",
    "text": "physical_address_size()\n\nDetermine the maximum phyiscal addresses size supported by this CPU as reported by the cpuid instructions.  Prefer to make use of address_size for practical purposes; use this only for diagnostic issues, such as determining the theoretical maximum memory size.  Also note that this address size is manipulated by a running hypervisor.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CpuId.simdbits-Tuple{}",
    "page": "Docstrings",
    "title": "CpuId.simdbits",
    "category": "method",
    "text": "simdbits()\n\nQuery the CPU on the maximum supported SIMD vector size in bits, or sizeof(Int) in bits if no SIMD capability is reported by the invoked cpuid instruction.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CpuId.simdbytes-Tuple{}",
    "page": "Docstrings",
    "title": "CpuId.simdbytes",
    "category": "method",
    "text": "simdbytes()\n\nQuery the CPU on the maximum supported SIMD vector size in bytes, or sizeof(Int) if no SIMD capability is reported by the invoked cpuid instruction.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CpuId.CpuFeature",
    "page": "Docstrings",
    "title": "CpuId.CpuFeature",
    "category": "type",
    "text": "Tuple of cpuid leaf in eax, result register and bit, and a descriptive string.\n\nThis table is an edited combination of sources from Wikipedia page on cpuid, sandpile.org, and of course Intel\'s 4670 page combined Architectures Software Devleoper Manual.\n\nExpect this table to be incomplete and improvable.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CpuId.__datacachesize-Tuple{UInt32,UInt32,UInt32}",
    "page": "Docstrings",
    "title": "CpuId.__datacachesize",
    "category": "method",
    "text": "Helper function that performs the actual computation of the cache size with register values retrieved from cpuid on leaf 0x04.\n\nCache size information on leaf 0x04 is computed with     size in bytes = (ways+1) * (partitions+1) * (linesize+1) * (sets+1) where     ways = ebx[22:31], partitions = ebx[12:21], linesize = ebx[0:11]     sets = ecx[:]\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CpuId.__init__-Tuple{}",
    "page": "Docstrings",
    "title": "CpuId.__init__",
    "category": "method",
    "text": "Enables and disables a few functions depending on whether the features are actually available.  This should overcome a potential efficiency issue when calling those functions in a hot zone.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CpuId._throw_unsupported_leaf-Tuple{Any}",
    "page": "Docstrings",
    "title": "CpuId._throw_unsupported_leaf",
    "category": "method",
    "text": "Helper function, tagged noinline to not have detrimental effect on performance.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CpuId.cpuvendorstring-Tuple{}",
    "page": "Docstrings",
    "title": "CpuId.cpuvendorstring",
    "category": "method",
    "text": "cpuvendorstring()\n\nDetermine the cpu vendor string as provided by the cpu by executing a cpuid instruction.  Note, this string has a fixed length of 12 characters. Use cpuvendor() if you prefer getting a parsed Julia symbol.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CpuId.hasleaf-Tuple{UInt32}",
    "page": "Docstrings",
    "title": "CpuId.hasleaf",
    "category": "method",
    "text": "hasleaf(leaf::UInt32) ::Bool\n\nHelper function (not exported) to test whether the CPU claims to provide the given leaf in a cpuid instruction call.\n\nNote: It appears LLVM really know its gear: If this function is inlined, and       just-in-time compiled, then this test is eliminated completly if the       executing machine does support this feature. Yeah!\n\n\n\n\n\n"
},

{
    "location": "autodocs/#CpuId.hvvendorstring-Tuple{}",
    "page": "Docstrings",
    "title": "CpuId.hvvendorstring",
    "category": "method",
    "text": "hvvendorstring()\n\nDetermine the hypervisor vendor string as provided by the cpu by executing a cpuid instruction.  Note, this string has a fixed length of 12 characters. Use hvvendor() if you prefer getting a parsed Julia symbol.  If the CPU is not running a hypervisor, a string of undefined content will be returned.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [CpuId]\nOrder = [:type, :function]"
},

]}
