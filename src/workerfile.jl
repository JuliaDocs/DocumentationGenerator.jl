using Pkg
using Pkg: TOML
using DocumentationGenerator

Pkg.status()

function build(uuid, name, url, version, buildpath, registry, deployment_url)
    packagespec = PackageSpec(uuid = uuid, name = name, version = version)
    withenv(
        "DOCUMENTATIONGENERATOR" => "true",
        "CI" => "true",
        "DOCUMENTATIONGENERATOR_BASE_URL" => DocumentationGenerator.docs_url(deployment_url, name, uuid, version)
    ) do
        metadata = DocumentationGenerator.package_metadata(packagespec, url)
        build_meta = DocumentationGenerator.build_package_docs(packagespec, buildpath, registry)
        merge!(metadata, build_meta)

        pkgsource = DocumentationGenerator.copy_package_source(packagespec, buildpath)

        if pkgsource !== nothing && ispath(pkgsource)
            metadata["license"], metadata["license_url"] = DocumentationGenerator.license(joinpath(buildpath, "_packagesource"))
        end

        isdir(buildpath) || mkpath(joinpath(buildpath))

        @info "opening meta.toml"
        open(joinpath(buildpath, "meta.toml"), "w") do io
            @info "writing meta.toml"
            TOML.print(io, metadata)
        end
    end
end

build(ARGS...)
