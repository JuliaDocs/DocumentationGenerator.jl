using DocumentationGenerator

# gets all installable packages for julia 1.0
packages = DocumentationGenerator.installable_on_version()

tstart = time()

max_packages = if isempty(ARGS)
    length(packages)
else
    parse(Int, ARGS[1])
end

processes = parse(Int, get(ENV, "NUM_PKG_PROCESSES", "8"))

DocumentationGenerator(packages[1:max_packages], processes = processes)

@info("DONE in $(round(time() - tstart, digits=1)) seconds")
