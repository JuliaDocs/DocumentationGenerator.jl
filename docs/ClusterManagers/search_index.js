var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#ClusterManagers-1",
    "page": "Readme",
    "title": "ClusterManagers",
    "category": "section",
    "text": "Support for different job queue systems commonly used on compute clusters."
},

{
    "location": "#Currently-supported-job-queue-systems-1",
    "page": "Readme",
    "title": "Currently supported job queue systems",
    "category": "section",
    "text": "Job queue system Command to add processors\nSun Grid Engine addprocs_sge(np::Integer, queue=\"\") or addprocs(SGEManager(np, queue))\nPBS addprocs_pbs(np::Integer, queue=\"\") or addprocs(PBSManager(np, queue))\nScyld addprocs_scyld(np::Integer) or addprocs(ScyldManager(np))\nHTCondor addprocs_htc(np::Integer) or addprocs(HTCManager(np))\nSlurm addprocs_slurm(np::Integer; kwargs...) or addprocs(SlurmManager(np); kwargs...)\nLocal manager with CPU affinity setting addprocs(LocalAffinityManager(;np=CPU_CORES, mode::AffinityMode=BALANCED, affinities=[]); kwargs...)You can also write your own custom cluster manager; see the instructions in the Julia manual"
},

{
    "location": "#Slurm:-a-simple-example-1",
    "page": "Readme",
    "title": "Slurm: a simple example",
    "category": "section",
    "text": "using ClusterManagers\n\n# Arguments to the Slurm srun(1) command can be given as keyword\n# arguments to addprocs.  The argument name and value is translated to\n# a srun(1) command line argument as follows:\n# 1) If the length of the argument is 1 => \"-arg value\",\n#    e.g. t=\"0:1:0\" => \"-t 0:1:0\"\n# 2) If the length of the argument is > 1 => \"--arg=value\"\n#    e.g. time=\"0:1:0\" => \"--time=0:1:0\"\n# 3) If the value is the empty string, it becomes a flag value,\n#    e.g. exclusive=\"\" => \"--exclusive\"\n# 4) If the argument contains \"_\", they are replaced with \"-\",\n#    e.g. mem_per_cpu=100 => \"--mem-per-cpu=100\"\naddprocs(SlurmManager(2), partition=\"debug\", t=\"00:5:00\")\n\nhosts = []\npids = []\nfor i in workers()\n	host, pid = fetch(@spawnat i (gethostname(), getpid()))\n	push!(hosts, host)\n	push!(pids, pid)\nend\n\n# The Slurm resource allocation is released when all the workers have\n# exited\nfor i in workers()\n	rmprocs(i)\nend"
},

{
    "location": "#SGE-a-simple-interactive-example-1",
    "page": "Readme",
    "title": "SGE - a simple interactive example",
    "category": "section",
    "text": "julia> using ClusterManagers\n\njulia> ClusterManagers.addprocs_sge(5)\njob id is 961, waiting for job to start .\n5-element Array{Any,1}:\n2\n3\n4\n5\n6\n\njulia> @parallel for i=1:5\n       run(`hostname`)\n       end\n\njulia>  From worker 2:  compute-6\n        From worker 4:  compute-6\n        From worker 5:  compute-6\n        From worker 6:  compute-6\n        From worker 3:  compute-6"
},

{
    "location": "#SGE-an-example-with-resource-list-1",
    "page": "Readme",
    "title": "SGE - an example with resource list",
    "category": "section",
    "text": "Some clusters require the user to specify a list of required resources. For example, it may be necessary to specify how much memory will be needed by the job - see this issue.julia> using ClusterManagers\n\njulia> addprocs_sge(5,res_list=\"h_vmem=4G,tmem=4G\")\njob id is 9827051, waiting for job to start ........\n5-element Array{Int64,1}:\n 22\n 23\n 24\n 25\n 26\n\njulia> pmap(x->run(`hostname`),workers());\n\njulia>  From worker 26: lum-7-2.local\n        From worker 23: pace-6-10.local\n        From worker 22: chong-207-10.local\n        From worker 24: pace-6-11.local\n        From worker 25: cheech-207-16.local"
},

{
    "location": "#Using-LocalAffinityManager-(for-pinning-local-workers-to-specific-cores)-1",
    "page": "Readme",
    "title": "Using LocalAffinityManager (for pinning local workers to specific cores)",
    "category": "section",
    "text": "Linux only feature.\nRequires the Linux taskset command to be installed.\nUsage : addprocs(LocalAffinityManager(;np=CPU_CORES, mode::AffinityMode=BALANCED, affinities=[]); kwargs...).wherenp is the number of workers to be started.\naffinities, if specified, is a list of CPU IDs. As many workers as entries in affinities are launched. Each worker is pinnedto the specified CPU ID.mode (used only when affinities is not specified, can be either COMPACT or BALANCED) - COMPACT results in the requested numberof workers pinned to cores in increasing order, For example, worker1 => CPU0, worker2 => CPU1 and so on. BALANCED tries to spread the workers. Useful when we have multiple CPU sockets, with each socket having multiple cores. A BALANCED mode results in workers spread across CPU sockets. Default is BALANCED."
},

{
    "location": "#Using-ElasticManager-(dynamically-adding-workers-to-a-cluster)-1",
    "page": "Readme",
    "title": "Using ElasticManager (dynamically adding workers to a cluster)",
    "category": "section",
    "text": "The ElasticManager is useful in scenarios where we want to dynamically add workers to a cluster. It achieves this by listening on a known port on the master. The launched workers connect to this port and publish their own host/port information for other workers to connect to."
},

{
    "location": "#Usage-1",
    "page": "Readme",
    "title": "Usage",
    "category": "section",
    "text": "On the master, you need to instantiate an instance of ElasticManager. The constructors defined are:ElasticManager(;addr=IPv4(\"127.0.0.1\"), port=9009, cookie=nothing, topology=:all_to_all)\nElasticManager(port) = ElasticManager(;port=port)\nElasticManager(addr, port) = ElasticManager(;addr=addr, port=port)\nElasticManager(addr, port, cookie) = ElasticManager(;addr=addr, port=port, cookie=cookie)On the worker, you need to call ClusterManagers.elastic_worker with the addr/port that the master is listening on and the same cookie. elastic_worker is defined as:ClusterManagers.elastic_worker(cookie, addr=\"127.0.0.1\", port=9009; stdout_to_master=true)For example, on the master:using ClusterManagers\nem=ElasticManager(cookie=\"foobar\")and launch each worker locally as echo \"using ClusterManagers; ClusterManagers.elastic_worker(\\\"foobar\\\")\" | julia  &or if you want a REPL on the worker, you can start a julia process normally and manually enterusing ClusterManagers\n@schedule ClusterManagers.elastic_worker(\"foobar\", \"addr_of_master\", port_of_master; stdout_to_master=false)The above will yield back the REPL prompt and also display any printed output locally."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [ClusterManagers]\nOrder = [:type, :function]"
},

]}
