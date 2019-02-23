using Pkg, DocumentationGenerator
docspath = normpath(joinpath(@__DIR__, ".."))
packages = sort!(readdir(joinpath(docspath, "build")), by=x->lowercase(x))

batch_regex = r"(\(|^| )(https://[^\)\n]*?svg[^\)\n]*?)((\))|($)|( ))"ms
known_batches = [
    "appveyor",
    "codecov",
    "coveralls",
    "travis",
    "circle",
    "gitlab"
]

function batch_value(batch)
    try
        svg = read(download(batch), String)
        if occursin("passing", svg)
            return "passes"
        elseif occursin("failing", svg)
            return "failing"
        else occursin("coverage", svg)
            m = match(r">(\d\d)%<", svg)
            return m === nothing ? "unknown" : parse(Int, m[1])
        end
    catch err
        @error "error while retrieving CI badge" error=err
        return "unknown"
    end
end

function extract_batches(root)
    src = joinpath(root, "_packagesource")
    readme = joinpath(src, "README.md")
    if isfile(readme)
        readme_str = read(readme, String)
        urls = getindex.(eachmatch(batch_regex, readme_str), 2)
        return Dict(map(known_batches) do batch
            res = findall(url-> occursin(batch, url), urls)
            batch => if isempty(res)
                []
            else
                map(res) do idx
                    Dict("url" => urls[idx], "value" => batch_value(urls[idx]))
                end
            end
        end)
    else
        println(basename(root), " doesn't contain readme")
        return Dict{String, Any}(Pair.(known_batches, ([],)))
    end
end

function extract_info_dict(pkg)
    results = Dict{String, Any}()
    build = joinpath(@__DIR__, "..", "build", pkg)
    root = joinpath(build, readdir(build)[1])
    results["batches"] = extract_batches(root)
    if isfile(root, "meta.toml")
        toml = Pkg.TOML.parsefile(joinpath(root, "meta.toml"))
        merge!(results, toml)
    end
    results
end


package_info = Dict{String, Any}()
for pkg in packages
    package_info[pkg] = extract_info_dict(pkg)
end

using JSON

open(joinpath(@__DIR__, "..", "build", "packages_meta.json"), "w") do io
    JSON.print(io, package_info)
end
