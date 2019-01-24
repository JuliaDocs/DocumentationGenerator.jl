var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#LibSndFile.jl-1",
    "page": "Readme",
    "title": "LibSndFile.jl",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: codecov.io)LibSndFile.jl is a wrapper for libsndfile, and supports a wide variety of file and sample formats. The package uses the FileIO load and save interface to automatically figure out the file type of the file to be opened, and the file contents are represented as a SampleBuf. For streaming I/O we support FileIO\'s loadstreaming and savestreaming functions as well. The results are represented as SampleSource (for reading), or SampleSink (for writing) subtypes. These buffer and stream types are defined in the SampledSignals package.Note that the load/save/etc. interface is exported from FileIO, and LibSndFile registers itself when the loaded, so you should bring in both packages. LibSndFile doesn\'t export any of its own names.julia> using FileIO: load, save, loadstreaming, savestreaming\njulia> import LibSndFile\njulia> load(\"audiofile.wav\")\n2938384-frame, 1-channel SampleBuf{FixedPointNumbers.Fixed{Int16,15}, 2}\n66.63002267573697s sampled at 44100.0Hz\n▆▅▆▆▆▆▆▅▆▆▆▇▇▇▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▇▆▆▆▆▆▇▆▇▆▇▆▆▆▅▆▆▆▆▆▆▅▆▆▅▆▅▆▆▇▇▇▇▆▆▆▆▆▆▇▆▆▆▆▆▆▆▇▆▇▂"
},

{
    "location": "#Examples-1",
    "page": "Readme",
    "title": "Examples",
    "category": "section",
    "text": "Read ogg file, write first 1024 samples of the first channel to new wav filex = load(\"myfile.ogg\")\nsave(\"myfile_short.wav\", x[1:1024])Read file, write the first second of all channels to a new filex = load(\"myfile.ogg\")\nsave(\"myfile_short.wav\", x[0s..1s, :])Read stereo file, write mono mixx = load(\"myfile.wav\")\nsave(\"myfile_mono.wav\", x[:, 1] + x[:, 2])Plot the left channelx = load(\"myfile.wav\")\nplot(x[:, 1]) # plots with samples on the x axis\nplot(domain(x), x[:, 1]) # plots with time on the x axisPlot the spectrum of the left channelx = load(\"myfile.wav\")\nf = fft(x) # returns a FrequencySampleBuf\nplot(domain(x), x[:, 1]) # plots with frequency on the x axisLoad a long file as a stream and plot the left channel from 2s to 3ss = loadstream(\"myfile.ogg\")\nx = read(s, 4s)[2s..3s, 1]\nclose(s)\nplot(domain(x), x)To handle closing the file automatically (including in the case of unexpected exceptions), we support the do block syntaxdata = loadstream(\"data/never_gonna_give_you_up.ogg\") do s\n    readall(f)\nend"
},

{
    "location": "#Supported-Formats-1",
    "page": "Readme",
    "title": "Supported Formats",
    "category": "section",
    "text": "See the libsndfile homepage for details, but in summary it supports reading and writing:Microsoft WAV\nOgg/Vorbis\nFLAC\nSGI / Apple AIFF / AIFC\nRAW\nSound Designer II SD2\nSun / DEC / NeXT AU / SND\nParis Audio File (PAF)\nCommodore Amiga IFF / SVX\nSphere Nist WAV\nIRCAM SF\nCreative VOC\nSoundforge W64\nGNU Octave 2.0 MAT4\nGNU Octave 2.1 MAT5\nPortable Voice Format PVF\nFasttracker 2 XI\nHMM Tool Kit HTK\nApple CAFNote not all file formats support all samplerates and bit depths. Currently LibSndFile.jl supports WAV, Ogg Vorbis, and FLAC files. Please file an issue if support for other formats would be useful."
},

{
    "location": "#Related-Packages-1",
    "page": "Readme",
    "title": "Related Packages",
    "category": "section",
    "text": "SampledSignals.jl provides the basic stream and buffer types used by this package.\nMP3.jl supports reading and writing MP3 files\nWAV.jl is a pure-julia package supporting the WAV file format.\nOpus.jl wraps libopus and allows you to read and write Opus audio.\nPortAudio.jl can be used to interface with your sound card to record and play audio."
},

{
    "location": "#A-Note-on-Licensing-1",
    "page": "Readme",
    "title": "A Note on Licensing",
    "category": "section",
    "text": "libsndfile is licensed under the LGPL, which is very permissive providing that libsndfile is dynamically linked. LibSndFile.jl is licensed under the MIT license, allowing you to statically compile the wrapper into your Julia application. Remember that you must still abide by the terms of the libsndfile license when using this wrapper, in terms of whether libsndfile is statically or dynamically linked.Note that this is to the best of my understanding, but I am not an attorney and this should not be considered legal advice."
},

{
    "location": "autodocs/#LibSndFile.fmt_to_type-Tuple{Any}",
    "page": "Docstrings",
    "title": "LibSndFile.fmt_to_type",
    "category": "method",
    "text": "Take a LibSndFile format code and return a suitable sample type\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LibSndFile.inferlen-Tuple{Base.GenericIOBuffer{Array{UInt8,1}}}",
    "page": "Docstrings",
    "title": "LibSndFile.inferlen",
    "category": "method",
    "text": "inferlen(io)\n\nTry to infer the length of io in bytes\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LibSndFile.sf_readf",
    "page": "Docstrings",
    "title": "LibSndFile.sf_readf",
    "category": "function",
    "text": "Wrappers for the family of sfreadf* functions, which read the given number of frames into the given array. Returns the number of frames read.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LibSndFile.sf_writef",
    "page": "Docstrings",
    "title": "LibSndFile.sf_writef",
    "category": "function",
    "text": "Wrappers for the family of sfwritef* functions, which write the given number of frames into the given array. Returns the number of frames written.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [LibSndFile]\nOrder = [:type, :function]"
},

]}
