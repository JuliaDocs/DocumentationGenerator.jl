using DocumentationGenerator

packages = DocumentationGenerator.installable_on_version(VERSION)

max_packages = if isempty(ARGS)
    length(packages)
else
    parse(Int, ARGS[1])
end

processes = parse(Int, get(ENV, "NUM_PKG_PROCESSES", "8"))

tstart = time()
DocumentationGenerator(packages[1:max_packages], processes = processes)
@info("DONE in $(round(time() - tstart, digits=1)) seconds")
