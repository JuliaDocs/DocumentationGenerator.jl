using GitHub
using Pkg, Printf
using Pkg: TOML

# This was partly taken from PackageEvaluator
buildpath = joinpath(@__DIR__, "build")
registry_path = joinpath(homedir(), ".julia", "registries", "General")
registry = TOML.parsefile(joinpath(registry_path, "Registry.toml"))
packages = registry["packages"]

name2data = Dict(map(collect(keys(packages))) do key
    data = packages[key]
    data["name"] => TOML.parsefile(joinpath(registry_path, data["path"], "Package.toml"))
end)

build_dir = joinpath(@__DIR__, "build")

# Retrieve information from Github
pkg_repo_infos = Dict()

# Authenticate with Github
gh_auth = authenticate("99214d8f20cae1e886e2f38f12325960a325cdb4")

for name in readdir(build_dir)
    mfile = joinpath(build_dir, name, "meta.toml")
    if isfile(mfile)
        meta = TOML.parsefile(mfile)
        if haskey(meta, "installs") && meta["installs"] && haskey(name2data, name)
            pkg = name2data[name]
            repo_name = splitext(split(pkg["repo"],"/")[end])[1]
            repo_owner = split(pkg["repo"],"/")[end-1]
            repo_info = try
                repo(repo_owner * "/" * repo_name, auth = gh_auth)
            catch err
                println("Couldn't get info for ", repo_owner, "/", repo_name)
                println(err)
                nothing
            end
            if repo_info != nothing
                meta["description"] = repr(repo_info.description)
                meta["stargazers_count"]  = repr(repo_info.stargazers_count)
                pkg_repo_infos[name] = meta
            end
        end
    end
end

# TODO use TOML
using Serialization

open(io-> serialize(io, pkg_repo_infos), joinpath(@__DIR__, "pkg_repo_infos.jls"), "w")
