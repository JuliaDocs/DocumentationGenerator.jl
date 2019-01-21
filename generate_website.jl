using MakieGallery
using Pkg
using Pkg: TOML

build_dir = joinpath(@__DIR__, "build")

package_info = open(deserialize, "pkg_repo_infos.jls")
open(joinpath(@__DIR__, "index.html"), "w") do io
    items = MakieGallery.DataItem[]
    for (name, meta) in package_info
        html = joinpath(build_dir, name, "index.html")
        if meta["installs"] && isfile(html)
            stars = meta["stargazers_count"]
            doctarget = joinpath(@__DIR__, "docs", name)
            if isdir(doctarget)
                rm(doctarget, recursive = true)
            end
            cp(joinpath(build_dir, name), doctarget)
            push!(items,
                MakieGallery.DataItem(
                    name,
                    [meta["doctype"]],
                    ["stars" => stars], "",
                    """
                    <div>
                        <a href=$(repr(joinpath(doctarget, "index.html")))> $name</a> <br>
                        Stars: $stars <br>
                        $(meta["description"])
                    <div>
                    """
                )
            )
        end
    end
    println(io, MakieGallery.create_page(
        items, ["default", "real"];
        sort_buttons = ["dom" => "Default", "stars" => "By Stars"]
    ))
end
