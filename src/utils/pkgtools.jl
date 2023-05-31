using UUIDs
using Pkg

const JULIA_UUID = UUID("1222c4b2-2114-5bfd-aeef-88e4692bbb3e")

const stdlib_to_uuid = Dict(
    "Dates" => UUID("ade2ca70-3891-5945-98fb-dc099432e06a"),
    "FileWatching" => UUID("7b1f6079-737a-58dc-b8bc-7a2ca5c1b5ee"),
    "SHA" => UUID("ea8e919c-243c-51af-8825-aaa63cd721ce"),
    "Sockets" => UUID("6462fe0b-24de-5631-8697-dd941f90decc"),
    "DelimitedFiles" => UUID("8bb1440f-4735-579b-a4ab-409b98df4dab"),
    "Random" => UUID("9a3f8284-a2c9-5f02-9a11-845980a1fd5c"),
    "Distributed" => UUID("8ba89e20-285c-5b6f-9357-94700520ee1b"),
    "LinearAlgebra" => UUID("37e2e46d-f89d-539d-b4ee-838fcccc9c8e"),
    "Mmap" => UUID("a63ad114-7e13-5084-954f-fe012c677804"),
    "SparseArrays" => UUID("2f01184e-e22b-5df5-ae63-d93ebab69eaf"),
    "UUIDs" => UUID("cf7118a7-6976-5b1a-9a39-7adc72f591a4"),
    "Logging" => UUID("56ddb016-857b-54e1-b83d-db4d58db5568"),
    "Statistics" => UUID("10745b16-79ce-11e8-11f9-7d13ad32a3b2"),
    "CRC32c" => UUID("8bf52ea8-c179-5cab-976a-9e18b702a9bc"),
    "Pkg" => UUID("44cfe95a-1eb2-52ea-b672-e2afdf69b78f"),
    "Serialization" => UUID("9e88b42a-f829-5b0c-bbe9-9e923198166b"),
    "Markdown" => UUID("d6f4376e-aef5-505a-96c1-9c027394607a"),
    "SuiteSparse" => UUID("4607b0f0-06f3-5cda-b6b1-a6196a1729e9"),
    "REPL" => UUID("3fa0cd96-eef1-5676-8a61-b3b8758bbffb"),
    "Libdl" => UUID("8f399da3-3557-5675-b5ff-fb832c97cbdb"),
    "Base64" => UUID("2a0f44e3-6c83-55bd-87e4-b1978d98bd5f"),
    "Profile" => UUID("9abbd945-dff8-562f-b5e8-e1ebf5ef1b79"),
    "InteractiveUtils" => UUID("b77e0a4c-d291-57a0-90e8-8db25a27a240"),
    "SharedArrays" => UUID("1a1011a3-84de-559e-8e89-a11a2f7dc383"),
    "Printf" => UUID("de0858da-6303-5e67-8744-51eddeeeb8d7"),
    "Future" => UUID("9fa8497b-333b-5362-9e8d-4d0656e87820"),
    "LibGit2" => UUID("76f85450-5226-5b5a-8eaa-529ad045b433"),
    "Test" => UUID("8dfed614-e22c-5e08-85e1-65c5234f0b40"),
    "Unicode" => UUID("4ec0a83e-493e-50e2-b9ac-8f72acf5a8f5"),
    "julia" => JULIA_UUID
)

const stdlib_uuids = Set([
    "ade2ca70-3891-5945-98fb-dc099432e06a",
    "7b1f6079-737a-58dc-b8bc-7a2ca5c1b5ee",
    "ea8e919c-243c-51af-8825-aaa63cd721ce",
    "6462fe0b-24de-5631-8697-dd941f90decc",
    "8bb1440f-4735-579b-a4ab-409b98df4dab",
    "9a3f8284-a2c9-5f02-9a11-845980a1fd5c",
    "8ba89e20-285c-5b6f-9357-94700520ee1b",
    "37e2e46d-f89d-539d-b4ee-838fcccc9c8e",
    "a63ad114-7e13-5084-954f-fe012c677804",
    "2f01184e-e22b-5df5-ae63-d93ebab69eaf",
    "cf7118a7-6976-5b1a-9a39-7adc72f591a4",
    "56ddb016-857b-54e1-b83d-db4d58db5568",
    "10745b16-79ce-11e8-11f9-7d13ad32a3b2",
    "8bf52ea8-c179-5cab-976a-9e18b702a9bc",
    "44cfe95a-1eb2-52ea-b672-e2afdf69b78f",
    "9e88b42a-f829-5b0c-bbe9-9e923198166b",
    "d6f4376e-aef5-505a-96c1-9c027394607a",
    "4607b0f0-06f3-5cda-b6b1-a6196a1729e9",
    "3fa0cd96-eef1-5676-8a61-b3b8758bbffb",
    "8f399da3-3557-5675-b5ff-fb832c97cbdb",
    "2a0f44e3-6c83-55bd-87e4-b1978d98bd5f",
    "9abbd945-dff8-562f-b5e8-e1ebf5ef1b79",
    "b77e0a4c-d291-57a0-90e8-8db25a27a240",
    "1a1011a3-84de-559e-8e89-a11a2f7dc383",
    "de0858da-6303-5e67-8744-51eddeeeb8d7",
    "9fa8497b-333b-5362-9e8d-4d0656e87820",
    "76f85450-5226-5b5a-8eaa-529ad045b433",
    "8dfed614-e22c-5e08-85e1-65c5234f0b40",
    "4ec0a83e-493e-50e2-b9ac-8f72acf5a8f5"
])
struct RegistryInfo
    path::AbstractString
    config::Dict
end

is_stdlib(uuid) = uuid in stdlib_uuids
is_jll(name) = endswith(name, "_jll")

function build_uuid_name_map(registry::RegistryInfo, version = VERSION)
    allpkgs = installable_on_version(registry, version)
    name_to_uuid = Dict()
    for (uuid, pkg) in allpkgs
        name_to_uuid[pkg.name] = UUID(uuid)
    end
    merge!(name_to_uuid, stdlib_to_uuid)
    name_to_uuid
end

"""
    dependencies_per_package(registry=joinpath(homedir(), ".julia/registries/General"))

Find all declared (direct) dependencies for each package in `registry`.
"""
function dependencies_per_package(reg::RegistryInfo, depmap = Dict())
    regconf = reg.config
    registry = reg.path
    name_uuid_map = build_uuid_name_map(reg)
    for (_, conf) in regconf["packages"]
        pkgpath = joinpath(registry, conf["path"])
        isdir(pkgpath) || continue
        startswith(pkgpath, ".") && continue
        pkgtoml = Pkg.TOML.parsefile(joinpath(pkgpath, "Package.toml"))
        versionstoml = Pkg.TOML.parsefile(joinpath(pkgpath, "Versions.toml"))

        depsperversion = Dict{String, Dict}()

        if isfile(joinpath(pkgpath, "Deps.toml"))
            depstoml = Pkg.TOML.parsefile(joinpath(pkgpath, "Deps.toml"))
        else
            depstoml = Dict()
        end

        if isfile(joinpath(pkgpath, "Compat.toml"))
            compattoml = Pkg.TOML.parsefile(joinpath(pkgpath, "Compat.toml"))
        else
            compattoml = Dict()
        end

        for version in keys(versionstoml)
            deps = Dict{String, Dict}()

            for depsver in keys(depstoml)
                if VersionNumber(version) in Pkg.Types.VersionRange(depsver)
                    for (dep, uuid) in depstoml[depsver]
                        deps[dep] = Dict{String, Any}(
                            "name" => dep,
                            "uuid" => uuid,
                            "is_stdlib" => is_stdlib(uuid),
                            "is_jll" => is_jll(dep),
                            "slug" => Base.package_slug(UUID(uuid), 5),
                            "versions" => "*",
                        )

                    end
                end
            end

            for compatver in keys(compattoml)
                if VersionNumber(version) in Pkg.Types.VersionRange(compatver)
                    for (dep, vers) in compattoml[compatver]
                        if !haskey(name_uuid_map, dep)
                            @error "UUID not found for" dep
                            continue
                        end
                        depdict = get!(deps, dep) do
                            uuid = string(name_uuid_map[dep])
                            Dict{String, Any}(
                                "name" => dep,
                                "uuid" => uuid,
                                "is_stdlib" => is_stdlib(uuid),
                                "is_jll" => is_jll(dep),
                                "slug" => Base.package_slug(UUID(uuid), 5),
                            )
                        end

                        depdict["versions"] = vers
                    end
                end
            end

            depsperversion[version] = deps
        end

        name = pkgtoml["name"]
        uuid = pkgtoml["uuid"]

        depmap[uuid] = Dict(
            "uuid" => uuid,
            "name" => name,
            "slug" => Base.package_slug(UUID(uuid), 5),
            "deps" => depsperversion,
        )
    end
    return depmap
end

dependencies_per_package(registry::AbstractString) = dependencies_per_package([registry])
function dependencies_per_package(registrydirs::Vector)
    deps = Dict()
    for reg in registrydirs
        registryfile = joinpath(reg, "Registry.toml")
        if !isfile(registryfile)
            @warn "No registry file found at $(registryfile). Skipping checking for deps"
        end
        regconf = try
            Pkg.TOML.parsefile(registryfile)
        catch ex
            @warn "Failed to parse registry file" ex
            Dict()
        end
        isempty(regconf) && continue
        dependencies_per_package(RegistryInfo(reg, regconf), deps)
    end
    return deps
end

function reverse_dependencies_per_package(deps_per_pkg)
    reversedeps = Dict()

    for (uuid, d) in deps_per_pkg
        for (ver, deps) in d["deps"]
            for (dep, depdict) in deps
                depuuid = depdict["uuid"]

                rdeps = get!(reversedeps, depuuid, Dict())
                push!(get!(rdeps, depdict["versions"], Set([])), Dict(
                    "uuid" => uuid,
                    "name" => d["name"],
                    "slug" => Base.package_slug(UUID(uuid), 5),
                    "version" => ver
                ))
            end
        end
    end

    return reversedeps
end

function _alldeps(uuid, version, deps_per_pkg, deps, seen = Set([]), isdirect=true; directonly = false)
    uuid in seen && return deps
    haskey(deps_per_pkg, uuid) || return deps

    push!(seen, uuid)

    for (dep, depdict) in get(get(deps_per_pkg[uuid], "deps", Dict()), version, [])
        depuuid = depdict["uuid"]

        depentry = get!(deps, (depuuid, isdirect), Dict(
            "uuid" => depuuid,
            "name" => depdict["name"],
            "slug" => depdict["slug"],
            "direct" => isdirect,
            "versions" => vcat(depdict["versions"]),
        ))

        sort!(unique!(append!(depentry["versions"], vcat(depdict["versions"]))))

        if !directonly && haskey(deps_per_pkg, depuuid)
            versions = (filter(collect(keys(deps_per_pkg[depuuid]["deps"]))) do ver
                VersionNumber(ver) in Pkg.Types.VersionSpec(depdict["versions"])
            end)
            isempty(versions) && continue
            ver = last(versions)
            _alldeps(depuuid, ver, deps_per_pkg, deps, seen, false)
        end
    end
end

function alldeps(uuid, version, deps_per_pkg; directonly = false)
    deps = Dict()
    _alldeps(uuid, version, deps_per_pkg, deps; directonly = directonly)

    sort!(collect(values(deps)), by = x -> x["name"])
end

directdeps(uuid, version, deps_per_pkg) = alldeps(uuid, version, deps_per_pkg; directonly = true)

function _allreversedeps(uuid, version, reversedeps, rdeps, seen = Set([]), isdirect=true; directonly = false)
    uuid in seen && return rdeps
    haskey(reversedeps, uuid) || return rdeps

    push!(seen, uuid)

    for (versionrange, deps) in reversedeps[uuid]
        if VersionNumber(version) in Pkg.Types.VersionSpec(versionrange)
            for dep in deps
                depentry = get!(rdeps, (dep["uuid"], isdirect), merge(dep, Dict("direct" => isdirect)))
                depentry["version"] = unique!(vcat(depentry["version"], dep["version"]))

                if !directonly
                    _allreversedeps(dep["uuid"], dep["version"], reversedeps, rdeps, seen, false)
                end
            end
        end
    end
end

function allreversedeps(uuid, version, reversedeps; directonly = false)
    rdeps = Dict()
    _allreversedeps(uuid, version, reversedeps, rdeps; directonly = directonly)
    rdeps = sort!(collect(values(rdeps)), by = x -> x["name"])

    foreach(rdeps) do dep
        sort!(dep["version"], by=VersionNumber)
    end
    rdeps
end

directreversedeps(uuid, version, reversedeps) = allreversedeps(uuid, version, reversedeps; directonly = true)

"""
    installable_on_version(version = VERSION; registry=joinpath(homedir(), ".julia/registries/General"))

Returns a Dict mapping from `uuid` to named tuples containing `(name, url, uuid, path, versions)`
of packages in `registry` compatible with Julia version `version`.
"""

function installable_on_version(reg::RegistryInfo, version)
    allpkgs = Dict()
    regconf = reg.config
    registry = reg.path
    pkgpaths = map(collect(regconf["packages"])) do (_, conf)
        return joinpath(registry, conf["path"])
    end
    filter!(isdir, pkgpaths)
    if isempty(pkgpaths)
        @error "No package folders found inside the registry"
        return allpkgs
    end
    for pkg in pkgpaths
        "Compat.toml" in readdir(pkg) || continue
        pkgtoml = Pkg.TOML.parsefile(joinpath(pkg, "Package.toml"))
        versions = Pkg.TOML.parsefile(joinpath(pkg, "Versions.toml"))
        compat = Pkg.TOML.parsefile(joinpath(pkg, "Compat.toml"))
        compatible_versions = VersionNumber[]
        for pkgver in keys(compat)
            try
                if haskey(compat[pkgver], "julia")
                    if any(in.(version, Pkg.Types.VersionRange.(compat[pkgver]["julia"])))
                        append!(compatible_versions, [
                                            VersionNumber(v) for v in keys(versions) if
                                                VersionNumber(v) in Pkg.Types.VersionRange(pkgver)
                                           ])
                    end
                else
                    append!(compatible_versions, [
                                        VersionNumber(v) for v in keys(versions) if
                                            VersionNumber(v) in Pkg.Types.VersionRange(pkgver)
                                       ])
                end
            catch err
                @error err
            end
        end
        allpkgs[pkgtoml["uuid"]] = (
            name = pkgtoml["name"],
            url = pkgtoml["repo"],
            uuid = pkgtoml["uuid"],
            path = pkg,
            versions = compatible_versions,
        )
    end
    allpkgs
end
