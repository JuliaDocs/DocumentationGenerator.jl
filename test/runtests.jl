using Test, DocumentationGenerator
using Pkg

const julia = first(Base.julia_cmd())

@test length(DocumentationGenerator.installable_on_version()) > 1500

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

@testset "Documentation Generation" begin
    packages = [
        # without docs
        (
            name = "FixedPointNumbers",
            uuid = "53c48c17-4a7d-5ca2-90c5-79b7896eea93",
            url = "https://github.com/JuliaMath/FixedPointNumbers.jl.git",
            versions = [v"0.5.3"],
            installs = [true],
            doctype = ["default"],
        ),
        (
            name = "ReactionNetworkImporters",
            url = "https://github.com/isaacsas/ReactionNetworkImporters.jl.git",
            uuid = "b4db0fb7-de2a-5028-82bf-5021f5cfa881",
            versions = [v"0.1.4"],
            installs = [true],
            doctype = ["default"],
        ),
        # with docs
        (
            name = "Example",
            url = "https://github.com/JuliaLang/Example.jl.git",
            uuid = "7876af07-990d-54b4-ab0e-23690620f79a",
            versions = [v"0.5.1", v"0.5.2"],
            installs = [true, false],
            doctype = ["default", "real"],
        ),
        (
            name = "DynamicHMC",
            url = "https://github.com/tpapp/DynamicHMC.jl.git",
            uuid = "bbc10e6e-7c05-544b-b16e-64fede858acb",
            versions = [v"1.0.4"],
            installs = [true],
            doctype = ["real"],
        ),
        (
            name = "jlpkg",
            url = "https://github.com/fredrikekre/jlpkg",
            uuid = "c4c688b2-6cc8-11e9-1c12-6d20b663313d",
            versions = [v"1.0.2"],
            installs = [true],
            doctype = ["default"],
        ),
        # with fancy docs
        # not installable (wrong julia version)
        (
            name = "Flux",
            url = "https://github.com/FluxML/Flux.jl.git",
            uuid = "587475ba-b771-5e3f-ad9e-33799f191a9c",
            versions = [v"0.2.2", v"0.7.3", v"0.8.3"],
            installs = [false, true, true],
            doctype = [nothing, "real", "real"],
        ),
        # with hosted docs
        (
            name = "Juno",
            url = "https://github.com/JunoLab/Juno.jl.git",
            uuid = "e5e0dc1b-0480-54bc-9374-aad01c23163d",
            versions = [v"0.7.0"],
            installs = [true],
            doctype = ["real"]
        ),
    ]

    basepath = @__DIR__
    rm(joinpath(basepath, "logs"), force = true, recursive = true)
    rm(joinpath(basepath, "build"), force = true, recursive = true)

    DocumentationGenerator.build_documentations(
        packages, basepath = basepath, filter_versions = identity
    )

    build = joinpath(basepath, "build")
    @testset "build folder" begin
        for pkg in packages
            pkgbuild = joinpath(build, DocumentationGenerator.get_docs_dir(pkg.name, pkg.uuid))
            @test isdir(pkgbuild)
            @testset "$(pkg.name): $(version)" for (i, version) in enumerate(pkg.versions)
                @test isfile(basepath, "logs", string(pkg.name, "-", pkg.uuid, " ", version, ".log"))

                versiondir = joinpath(pkgbuild, string(version))
                @test isdir(versiondir)
                toml_path = joinpath(versiondir, "meta.toml")
                @test isfile(toml_path)
                toml = Pkg.TOML.parsefile(toml_path)
                pkginstalls = get(toml, "installs", false)
                @test pkginstalls == pkg.installs[i]
                if pkginstalls
                    doctype = get(toml, "doctype", nothing)
                    @test doctype == pkg.doctype[i]
                    @test isfile(joinpath(versiondir, "index.html"))
                    if doctype == "default"
                        @test isdir(joinpath(versiondir, "autodocs"))
                    end
                end
            end
        end
    end
end

@testset "Ruby Gems" begin
    @test isfile(DocumentationGenerator.find_ruby_gem("licensee"))
    @test isfile(DocumentationGenerator.find_ruby_gem("commonmarker"))
end

@testset "Documentation Registry" begin
    mktempdir() do dir
        reg = DocumentationGenerator.download_registry(dir)
        @test isfile(reg)
        toml = Pkg.TOML.parsefile(reg)
        @test length(keys(toml)) > 0
        @test haskey(toml, "e5e0dc1b-0480-54bc-9374-aad01c23163d")
        junosettings = toml["e5e0dc1b-0480-54bc-9374-aad01c23163d"]
        @test junosettings["method"] == "hosted"
    end
end
