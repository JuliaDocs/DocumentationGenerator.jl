using DocumentationGenerator

packages = DocumentationGenerator.installable_on_version(VERSION)

max_packages = if isempty(ARGS)
    length(packages)
else
    parse(Int, ARGS[1])
end

processes = parse(Int, get(ENV, "NUM_PKG_PROCESSES", "8"))
docspath = normpath(joinpath(@__DIR__, ".."))


DocumentationGenerator.build_documentation(collect(values(packages))[1:max_packages],
                                            processes = processes,
                                            basepath = docspath,
                                            update_only=true)
