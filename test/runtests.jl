using Test, DocumentationGenerator
using Pkg

const julia = first(Base.julia_cmd())

@test length(keys(DocumentationGenerator.installable_on_version())) > 1500

@test DocumentationGenerator.maybe_redirect("https://docs.julialang.org/") == "https://docs.julialang.org/en/v1"

@testset "Running code with a timeout" begin
    let
        tempfile = tempname()
        str = """
        sleep(4)
        sleep(4)
        write("$tempfile", "hi")
        sleep(3)
        """
        proc, _ = DocumentationGenerator.run_with_timeout(`$julia -e $str`, timeout=7)
        wait(proc)
        @test !success(proc)
        @test !isfile(tempfile)
    end

    let
        tempfile = tempname()
        str = """
        for i = 1:10
        sleep(1)
        println(i)
        end
        write("$tempfile", "hi")
        """
        proc, _ = DocumentationGenerator.run_with_timeout(`$julia -e $str`, timeout=6)
        wait(proc)
        @test success(proc)
        @test String(read(tempfile)) == "hi"
    end

    let
        tempfile = tempname()
        logfile = tempname()
        str = """
        for i in 1:10
        println(i)
        sleep(1)
        end
        write("$tempfile", "hi")
        """
        proc, task = DocumentationGenerator.run_with_timeout(`$julia -e $str`, timeout=3, log=logfile)
        wait(proc)
        @test success(proc)
        @test String(read(tempfile)) == "hi"
        logstr = ""
        for i in 1:10
            logstr *= "$i"
        end
        wait(task)
        @test isfile(logfile)
        @test replace(String(read(logfile)), '\n' => "") == logstr
    end
end

@testset "Readme rendering" begin
    DocumentationGenerator.render_html(joinpath(@__DIR__, "fixtures", "readme.md"), joinpath(@__DIR__, "readme.html"), "/foo/", "/bar/")

    @test read(joinpath(@__DIR__, "fixtures", "readme.html"), String) == read(joinpath(@__DIR__, "readme.html"), String)
end

@testset "Documentation Generation" begin
    packages = [
        # without docs
        (
            name = "FixedPointNumbers",
            uuid = "53c48c17-4a7d-5ca2-90c5-79b7896eea93",
            url = "https://github.com/JuliaMath/FixedPointNumbers.jl.git",
            versions = [v"0.5.3"],
            installs = [true],
            success = [true],
            doctype = ["fallback_autodocs"],
        ),
        (
            name = "ReactionNetworkImporters",
            url = "https://github.com/isaacsas/ReactionNetworkImporters.jl.git",
            uuid = "b4db0fb7-de2a-5028-82bf-5021f5cfa881",
            versions = [v"0.1.5"],
            installs = [true],
            success = [true],
            doctype = ["fallback_autodocs"],
        ),
        # with docs
        (
            name = "Example",
            url = "https://github.com/JuliaLang/Example.jl.git",
            uuid = "7876af07-990d-54b4-ab0e-23690620f79a",
            versions = [v"0.5.1", v"0.5.3"],
            installs = [true, true],
            success = [true, true],
            doctype = ["fallback_autodocs", "documenter"],
        ),
        (
            name = "DynamicHMC",
            url = "https://github.com/tpapp/DynamicHMC.jl.git",
            uuid = "bbc10e6e-7c05-544b-b16e-64fede858acb",
            versions = [v"2.1.1"],
            installs = [true],
            success = [true],
            doctype = ["documenter"],
        ),
        (
            name = "jlpkg",
            url = "https://github.com/fredrikekre/jlpkg",
            uuid = "c4c688b2-6cc8-11e9-1c12-6d20b663313d",
            versions = [v"1.0.2"],
            installs = [true],
            success = [true],
            doctype = ["fallback_autodocs"],
        ),
        # with hosted docs
        (
            name = "Juno",
            url = "https://github.com/JunoLab/Juno.jl.git",
            uuid = "e5e0dc1b-0480-54bc-9374-aad01c23163d",
            versions = [v"0.7.0"],
            installs = ["missing"],
            success = [true],
            hosted_uri = ["https://docs.junolab.org/latest"],
            doctype = ["hosted"]
        ),
        # Julia
        (
            name = "julia",
            url = "https://github.com/JuliaLang/julia",
            uuid = "1222c4b2-2114-5bfd-aeef-88e4692bbb3e",
            versions = [v"1.2.0", v"1.3.0", v"1.4.1"],
            installs = ["missing", "missing", "missing"],
            hosted_uri = ["https://docs.julialang.org/en/v1", "https://docs.julialang.org/en/v1", "https://docs.julialang.org/en/v1"],
            success = [true, true, true],
            doctype = ["hosted", "hosted", "hosted"]
        ),
        # git-dir docs
        (
            name = "DifferentialEquations",
            url = "https://github.com/JuliaDiffEq/DifferentialEquations.jl.git",
            uuid = "0c46a032-eb83-5123-abaf-570d42b7fbaa",
            versions = [v"6.9.0"],
            installs = [true],
            success = [true],
            doctype = ["git-repo"],
        ),
        (
            name = "Phylo",
            url = "https://github.com/richardreeve/Phylo.jl.git",
            uuid = "aea672f4-3940-5932-aa44-993d1c3ff149",
            versions = [v"0.3.3"],
            installs = [true],
            success = [true],
            doctype = ["fallback_autodocs"],
        ),
        (
            name = "PlyIO",
            url = "https://github.com/JuliaGeometry/PlyIO.jl",
            uuid = "42171d58-473b-503a-8d5f-782019eb09ec",
            versions = [v"1.1.0"],
            installs = [true],
            success = [true],
            doctype = ["fallback_autodocs"],
        ),
        (
            name = "OpenSpiel_jll",
            url = "https://github.com/JuliaBinaryWrappers/OpenSpiel_jll.jl.git",
            uuid = "bd10a763-4654-5023-a028-c4918c6cd33e",
            versions = [v"0.1.1+0"],
            installs = [true],
            success = [true],
            doctype = ["fallback_autodocs"],
        ),
        (
            name = "Documenter",
            url = "https://github.com/JuliaDocs/Documenter.jl.git",
            uuid = "e30172f5-a6a5-5a46-863b-614d45cd2de4",
            versions = [v"0.24.10"],
            installs = [true],
            success = [true],
            doctype = ["documenter"],
        ),
        (
            name = "TSVD",
            url = "https://github.com/JuliaLinearAlgebra/TSVD.jl.git",
            uuid = "9449cd9e-2762-5aa3-a617-5413e99d722e",
            versions = [v"0.4.0"],
            installs = [true],
            success = [true],
            doctype = ["documenter"],
        ),
        (
            name = "Crayons",
            url = "https://github.com/KristofferC/Crayons.jl.git",
            uuid = "a8cc5b0e-0ffa-5ad4-8c14-923d3ee1735f",
            versions = [v"4.0.1"],
            installs = [true],
            success = [true],
            doctype = ["fallback_autodocs"],
        ),
        # make sure xvfb-run works:
        (
            name = "Tk",
            url = "https://github.com/JuliaGraphics/Tk.jl.git",
            uuid = "4225ea8a-3324-57e7-9ddc-5798a2cb9eab",
            versions = [v"0.7.0"],
            installs = [true],
            success = [true],
            doctype = ["documenter"],
            using_failed = [false]
        ),
        (
            name = "Zygote",
            url = "https://github.com/FluxML/Zygote.jl.git",
            uuid = "e88e6eb3-aa80-5325-afca-941959d7151f",
            versions = [v"0.4.20"],
            installs = [true],
            success = [true],
            doctype = ["documenter"],
            using_failed = [false]
        ),
        (
            name = "IntelGEMM",
            url = "https://github.com/AStupidBear/IntelGEMM.jl.git",
            uuid = "46a1a280-e6c3-11e9-0321-d12035ae5ac9",
            versions = [v"0.1.1"],
            installs = [true],
            success = [true],
            doctype = ["fallback_autodocs"],
            using_failed = [false]
        ),
        (
            name = "MethodAnalysis",
            url = "https://github.com/timholy/MethodAnalysis.jl.git",
            uuid = "85b6ec6f-f7df-4429-9514-a64bcd9ee824",
            versions = [v"0.2.0"],
            installs = [true],
            success = [true],
            doctype = ["documenter"],
            using_failed = [false]
        )
    ]

    basepath = @__DIR__
    rm(joinpath(basepath, "build"), force = true, recursive = true)

    DocumentationGenerator.build_documentation(
        packages, basepath = basepath, filter_versions = identity, processes = 1
    )

    DocumentationGenerator.build_documentation(
        [packages[end]], basepath = basepath, filter_versions = identity, processes = 1, build_pdf = true
    )

    build = joinpath(basepath, "build")
    @testset "build folder" begin
        for pkg in packages
            pkgbuild = joinpath(build, DocumentationGenerator.get_docs_dir(pkg.name, pkg.uuid))
            @test isdir(pkgbuild)
            @testset "$(pkg.name): $(version)" for (i, version) in enumerate(pkg.versions)
                log = joinpath(pkgbuild, "$(version).log")
                @test isfile(log)

                println("\n---- LOG $(pkg.name)@$(version) START ----\n")
                println(read(log, String))
                println("\n---- LOG $(pkg.name)@$(version) END ----\n")

                versiondir = joinpath(pkgbuild, string(version))
                @test isdir(versiondir)
                toml_path = joinpath(versiondir, "meta.toml")
                @test isfile(toml_path)
                if isfile(toml_path)
                    toml = Pkg.TOML.parsefile(toml_path)
                    pkginstalls = get(toml, "installable", false)
                    pkgsuccess = get(toml, "success", false)
                    pkgdoctype = get(toml, "doctype", "")
                    @test pkginstalls == pkg.installs[i]
                    @test pkgsuccess == pkg.success[i]
                    @test pkgdoctype == pkg.doctype[i]

                    if pkg.doctype[i] == "hosted"
                        @test get(toml, "hosted_uri", "") == pkg.hosted_uri[i]
                    end

                    if pkginstalls == true
                        doctype = get(toml, "doctype", nothing)
                        @test doctype == pkg.doctype[i]
                        @test isfile(joinpath(versiondir, "index.html"))
                        if doctype == "default"
                            @test isdir(joinpath(versiondir, "autodocs"))
                        end

                        if pkg.name !== "IntelGEMM"
                            @test isfile(joinpath(versiondir, "_readme", "readme.html"))
                        end
                        @test !isempty(toml["deps"])
                    end

                    if haskey(pkg, :using_failed)
                        @test pkg.using_failed[i] == toml["using_failed"]
                    end
                end

                if pkg.name == "Crayons"
                    # spot check some of the readme postprocessing
                    readme = read(joinpath(versiondir, "_readme", "readme.html"), String)
                    @test occursin("""src="/docs/Crayons/TXPcU/4.0.1/_packagesource/logo.png" """, readme)
                    @test occursin("""<a href="https://travis-ci.org/KristofferC/Crayons.jl">""", readme)
                    @test occursin("""<h2 id="Installation"><a class="docs-heading-anchor" href="#Installation">Installation</a></h2>""", readme)
                end

                @testset "pdf generation" begin
                    if pkg == packages[end]
                        @test isfile(joinpath(pkgbuild, pkg.name, ".jl", ".pdf"))
                        @test isfile(joinpath(pkgbuild, "..", version, "-pdf", ".log"))
                    end
                end
            end
        end
    end
end

@testset "Documentation Registry" begin
    mktempdir() do dir
        reg = DocumentationGenerator.get_registry(dir)
        @test isfile(reg)
        toml = Pkg.TOML.parsefile(reg)
        @test length(keys(toml)) > 0
        @test haskey(toml, "e5e0dc1b-0480-54bc-9374-aad01c23163d")
        junosettings = toml["e5e0dc1b-0480-54bc-9374-aad01c23163d"]
        @test junosettings["method"] == "hosted"
    end
end

@testset "GitHub URL rewriting" begin
    @test DocumentationGenerator.github_to_raw("https://github.com/migarstka/COSMO_assets/blob/master/COSMO_logo_only.png") == "https://raw.githubusercontent.com/migarstka/COSMO_assets/master/COSMO_logo_only.png"
    @test DocumentationGenerator.github_to_raw("https://raw.githubusercontent.com/migarstka/COSMO_assets/master/COSMO_logo_only.png") == "https://raw.githubusercontent.com/migarstka/COSMO_assets/master/COSMO_logo_only.png"
    @test DocumentationGenerator.github_to_raw("https://www.github.com/migarstka/COSMO_assets/blob/master/COSMO_logo_only.png") == "https://raw.githubusercontent.com/migarstka/COSMO_assets/master/COSMO_logo_only.png"
    @test DocumentationGenerator.github_to_raw("https://github.com/migarstka/COSMO_assets/master/COSMO_logo_only.png") == "https://github.com/migarstka/COSMO_assets/master/COSMO_logo_only.png"
end
