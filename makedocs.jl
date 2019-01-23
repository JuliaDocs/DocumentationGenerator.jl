using Distributed, DependenciesParser
using Pkg
using Pkg.TOML

# gets all installable packages for julia 1.0
packages = DependenciesParser.alldeps(v"1.0.0")
# path were we move build docs
build_timeout = 5*60 # 5 min

function run_process(name, url, version)
    out_io = IOBuffer()
    err_io = IOBuffer()
    cmd = `julia --compiled-modules=no --startup-file=no -O0 -g2 worker_work.jl $name $url $version`
    @info("starting build for $name")
    process = run(pipeline(cmd, stdout = out_io, stderr = err_io), wait = false)
    timeout_start = time()
    buildpath = joinpath(@__DIR__, "build", name)
    task = @async begin
        try
            tstart = time()
            isdir(buildpath) && rm(buildpath, force = true, recursive = true)
            mkpath(buildpath)
            open(joinpath(buildpath, "build.log"), "w") do log
                while process_running(process)
                    if (time() - timeout_start) > build_timeout
                        @info("killing build for $name")
                        kill(process)
                        break
                    end
                    errstr, outstr = String.(take!.((err_io, out_io)))
                    is_silent = length(errstr) == 0 && length(outstr) == 0
                    isempty(outstr) || println(log, outstr)
                    isempty(errstr) || println(log, errstr)
                    if !is_silent
                        # if something printed reset timeout
                        timeout_start = time()
                    end
                    sleep(0.5)
                end
            end
            @info("build for $name completed in $(time() - tstart) seconds")
        catch e
            @error("Bad stuff!", error = e)
        end
    end
    return process
end

process_queue = []
for (name, url, version, dependency) in packages
    #those somehow get stuck - might be random
    println("running example $name")
    while length(process_queue) >= 12
        filter!(process_running, process_queue)
        sleep(0.5)
    end
    push!(process_queue, run_process(name, url, version))
end

for proc in process_queue
    wait(proc)
end
