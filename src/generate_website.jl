using MakieGallery
using Pkg
using Pkg: TOML

build_dir = joinpath(@__DIR__, "build")

docdir = joinpath(@__DIR__, "docs")

open(joinpath(@__DIR__, "index.html"), "w") do io
    items = MakieGallery.DataItem[]
    for name in readdir(build_dir)
        html = joinpath(build_dir, name, "index.html")
        meta_file = joinpath(build_dir, name, "meta.toml")
        if isfile(meta_file) && isfile(html)
            meta = TOML.parsefile(meta_file)
            if meta["installs"]
                stars = meta["stargazers_count"]
                doctarget = joinpath(docdir, name)
                if isdir(doctarget)
                    rm(doctarget, recursive = true)
                end
                cp(joinpath(build_dir, name), doctarget)
                index_url = joinpath("docs", name, "index.html")
                push!(items,
                    MakieGallery.DataItem(
                        name,
                        [meta["doctype"]],
                        ["stars" => stars], "",
                        """
                        <div>
                            <a href=$(repr(index_url))> $name</a> <br>
                            Stars: $stars <br>
                            $(meta["description"])
                        <div>
                        """
                    )
                )
            end
        end
    end
    println(io, MakieGallery.create_page(
        items, ["default", "real"];
        sort_buttons = ["dom" => "Default", "stars" => "By Stars"]
    ))
end
