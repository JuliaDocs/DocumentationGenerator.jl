using Test, DocumentationGenerator

const julia = first(Base.julia_cmd())

@test length(DocumentationGenerator.installable_on_version()) > 1500

@testset "run with timeout" begin
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
            logstr *= "$i\n\n"
        end
        wait(task)
        @test isfile(logfile)
        @test String(read(logfile)) == logstr
    end
end
