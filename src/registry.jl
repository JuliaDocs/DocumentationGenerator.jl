const DOCS_REGISTRIES = [
    "https://github.com/JuliaComputing/DocumentationGeneratorRegistry.git",
    "https://github.com/JuliaDocs/DocumentationGeneratorRegistry.git",
]

"""
    get_registry(basepath; sync = true)

Clone the DocumentationGenerator registry into `basepath`. No download will occur if `sync == false`
and the registry already exists.

Returns the path to the `Registry.toml` (or `nothing` if an error occured).
"""
function get_registry(basepath::AbstractString; sync::Bool = true)
    destdir = joinpath(basepath, "DocumentationGeneratorRegistry")
    if sync
        for registry in DOCS_REGISTRIES
            try
                return _clone_registry(registry; destdir)
            catch e
                @warn "Unable to clone DocumentationGeneratorRegistry" registry exception = e
            end
        end
        # If we weren't able to download the registry from any of the URLs, we fall back
        # to checking the local filesystem.
        @warn "Couldn't download docs registry, see the warnings above."
    end
    tomlpath = joinpath(destdir, "Registry.toml")
    if isfile(tomlpath)
        return tomlpath
    elseif !sync
        @warn("No registry found at `$(tomlpath)`. Cloning again.")
        return get_registry(basepath; sync = true)
    end
    return nothing
end

function _clone_registry(registry::AbstractString; destdir::AbstractString)
    mktempdir() do temp
        tempclone = joinpath(temp, "registry")
        git = Sys.which("git")
        isnothing(git) && error("Sys.which was unable to find the 'git' binary")
        git = addenv(`$git`, "GIT_TERMINAL_PROMPT" => "0")
        run(`$git clone --depth=1 $(registry) $(tempclone)`)
        if !isfile(joinpath(tempclone, "Registry.toml"))
            error("Failed to clone registry: Registry.toml missing")
        end
        mv(tempclone, destdir, force = true)
    end
end

"""
    doctype(packagespec, registry)

Gets the doctype for package `packagespec` from the `Registry.toml` at `registry`.
Returns a tuple of `(doctype, uri)`, where `doctype` can be
- `vendored` -- Source code for the docs is located in the package directory. Default.
- `git-repo` -- Source code for the docs is located in the git-repo at `uri`.
- `hosted` -- Built docs are available at `uri`. We won't attempt to build/host them ourselves.
"""
function doctype(packagespec::Pkg.Types.PackageSpec, registry)
    if isfile(registry)
        uuid = string(packagespec.uuid)
        toml = Pkg.TOML.parsefile(registry)
        if haskey(toml, uuid)
            pkg = toml[uuid]
            if haskey(pkg, "method") && haskey(pkg, "location")
                return (pkg["method"], pkg["location"])
            else
                @warn("Invalid registry entry for $(packagespec.name).")
            end
        end
    else
        @warn("No registry found. Falling back to `vendored` docs.")
    end
    return ("vendored", nothing)
end
