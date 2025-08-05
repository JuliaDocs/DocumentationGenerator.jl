using Pkg
using Pkg: TOML
using DocumentationGenerator

Pkg.status()

function build(uuid, name, url, version, buildpath, registry, deployment_url, src_prefix, href_prefix, server_type, api_url, html_size_threshold_bytes, args...)
    packagespec = PackageSpec(uuid = uuid, name = name, version = VersionNumber(version))
    api_url = api_url == "-" ? "" : api_url
    html_size_threshold_bytes = html_size_threshold_bytes == "-" ? nothing : html_size_threshold_bytes
    withenv(
        "DOCUMENTATIONGENERATOR" => "true",
        "CI" => "true",
        "DOCUMENTATIONGENERATOR_BASE_URL" => DocumentationGenerator.docs_url(deployment_url, name, uuid, version)
    ) do
        metapath = joinpath(buildpath, "meta.toml")
        metadata = if isfile(metapath)
            TOML.parsefile(metapath)
        else
            Dict()
        end
        new_metadata = DocumentationGenerator.package_metadata(packagespec, url, server_type; api_url = api_url)
        merge!(metadata, new_metadata)
        build_meta = DocumentationGenerator.build_package_docs(packagespec, buildpath, registry; src_prefix=src_prefix, href_prefix=href_prefix, html_size_threshold_bytes=html_size_threshold_bytes)
        merge!(metadata, build_meta)

        isdir(buildpath) || mkpath(buildpath)

        pkgsource = DocumentationGenerator.copy_package_source(packagespec, buildpath)
        if pkgsource ≠ nothing && isdir(pkgsource)
            DocumentationGenerator.render_readme_html(pkgsource, buildpath, src_prefix, href_prefix)
        else
            @error("Could not render readme because we don't have the source files.")
        end

        metadata["license"] = ""
        metadata["license_url"] = ""

        @info "opening meta.toml"
        open(joinpath(buildpath, "meta.toml"), "w") do io
            @info "writing meta.toml"
            if VERSION < v"1.6"
                TOML.print(io, metadata)
            else
                TOML.print(x -> string(x), io, metadata)
            end
        end
    end
end

function update_metadata(uuid, name, url, version, buildpath, registry, deployment_url, server_type, api_url; args...)
    metapath = joinpath(buildpath, "meta.toml")
    packagespec = PackageSpec(uuid = uuid, name = name, version = version)
    withenv(
        "DOCUMENTATIONGENERATOR" => "true",
        "CI" => "true",
        "DOCUMENTATIONGENERATOR_BASE_URL" => DocumentationGenerator.docs_url(deployment_url, name, uuid, version)
    ) do
        if isfile(joinpath(buildpath, "meta.toml"))
            metadata = TOML.parsefile(metapath)
            updated_metadata = DocumentationGenerator.package_metadata(packagespec, url, server_type; api_url)
            merge!(metadata, updated_metadata)

            @info "opening meta.toml"
            open(metapath, "w") do io
                @info "writing meta.toml"
                if VERSION < v"1.6"
                    TOML.print(io, metadata)
                else
                    TOML.print(x -> string(x), io, metadata)
                end
            end
        else
            @error("Tried updating metadata, but did not find an existing `meta.toml` at `$(metapath)`.")
        end
    end
end

if ARGS[end] === "update"
    update_metadata(ARGS...)
else
    build(ARGS...)
end
