using DocumentationGenerator

# gets all installable packages for julia 1.0
packages = DocumentationGenerator.installable_on_version()

tstart = time()
process_queue = []
max_packages = if isempty(ARGS)
    length(packages)
else
    parse(Int, ARGS[1])
end
for (name, url, versions) in packages[1:8]
    #those somehow get stuck - might be random
    while length(process_queue) >= parse(Int, get(ENV, "NUM_PKG_PROCESSES", "8"))
        filter!(process_running, process_queue)
        sleep(0.5)
    end
    push!(process_queue, DocumentationGenerator.build_documentation(name, url, last(versions)))
end

for proc in process_queue
    wait(proc)
end

@info("DONE in $(round(time() - tstart, digits=1)) seconds")
