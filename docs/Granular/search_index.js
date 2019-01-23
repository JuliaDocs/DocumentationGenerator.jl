var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#Granular.jl-1",
    "page": "Home",
    "title": "Granular.jl",
    "category": "section",
    "text": "A Julia package for particle-based simulation of  granular materials.Granular.jl is a flexible and computationally efficient 2d implementation of  the discrete element method.  Grains are represented as particles, which can be  forced by drag in fluid grids.  The grains interact through  elasto-viscous-frictional contact rheologies and can obtain time-dependent  cohesive strength with bond mechanics based on beam theory.The source code for Granular.jl is hosted on Github.See the Public API Index for the complete list of documented functions and types."
},

{
    "location": "#Author-1",
    "page": "Home",
    "title": "Author",
    "category": "section",
    "text": "Anders Damsgaard, Geophysical Fluid Dynamics Laboratory, Princeton University."
},

{
    "location": "#License-1",
    "page": "Home",
    "title": "License",
    "category": "section",
    "text": "Granular.jl is licensed under the GPLv3; see LICENSE for the full license text."
},

{
    "location": "#Manual-Outline-1",
    "page": "Home",
    "title": "Manual Outline",
    "category": "section",
    "text": "Pages = [\n    \"man/installation.md\",\n    \"man/package_contents.md\",\n    \"man/methods.md\",\n    \"man/getting_started.md\",\n]\nDepth = 1"
},

{
    "location": "#Library-Outline-1",
    "page": "Home",
    "title": "Library Outline",
    "category": "section",
    "text": "Pages = [\n    \"lib/public.md\",\n    \"lib/internals.md\",\n]\nDepth = 1"
},

{
    "location": "man/installation/#",
    "page": "Installation",
    "title": "Installation",
    "category": "page",
    "text": ""
},

{
    "location": "man/installation/#Installation-1",
    "page": "Installation",
    "title": "Installation",
    "category": "section",
    "text": ""
},

{
    "location": "man/installation/#Prerequisites-1",
    "page": "Installation",
    "title": "Prerequisites",
    "category": "section",
    "text": "Granular.jl is written as a package for the Julia programming  language, which is a computationally efficient, yet  high-level language. Julia also includes a very useful package manager which  makes it easy to install packages and their requirements, as well as convenient  updating features."
},

{
    "location": "man/installation/#Installing-Julia-1",
    "page": "Installation",
    "title": "Installing Julia",
    "category": "section",
    "text": "If you do not have Julia installed, download the current release from the  official Julia download page, or using your  system package manager (e.g. brew cask install julia on macOS with the  Homebrew package manager).  Afterwards, the program julia  can be launched from the terminal."
},

{
    "location": "man/installation/#Installing-Paraview-1",
    "page": "Installation",
    "title": "Installing Paraview",
    "category": "section",
    "text": "The core visualization functionality of Granular.jl is based on VTK and  ParaView.  The most recent stable release can be downloaded from the ParaView  downloads page.  Alternatively, on macOS  with Homebrew, Paraview can be installed from the terminal with brew cask  install paraview."
},

{
    "location": "man/installation/#Stable-installation-(recommended)-1",
    "page": "Installation",
    "title": "Stable installation (recommended)",
    "category": "section",
    "text": "The latest stable release of Granular.jl can be installed directly from the  Julia shell by:julia> ]\n(v1.0) pkg> add GranularThis will install the contents of this repository in the folder  ~/.julia/packages/Granular and install its requirements."
},

{
    "location": "man/installation/#Development-installation-1",
    "page": "Installation",
    "title": "Development installation",
    "category": "section",
    "text": "If desired, the current developmental version of the Granular.jl Github  repository can be installed with the  command:julia> ]\n(v1.0) pkg> add Granular#masterPlease note: The developmental version is considered unstable and should only  be used over the stable version if there is a compelling reason to do so.If you want to modify the code base, install the source code in the  ~/.julia/dev/ directory with the following command:(v1.0) pkg> dev Granular"
},

{
    "location": "man/installation/#Package-tests-1",
    "page": "Installation",
    "title": "Package tests",
    "category": "section",
    "text": "The Granular.jl package contains many tests that verify that the functionality  works as intended.  The extent of test coverage of the source code is monitored  and published with CodeCov.The package tests are during development continuously run with  Travis-CI for Mac (latest stable  release) and Linux (Ubuntu stable), and  AppVeyor for Windows.The test scripts are contained in the test/ directory, can be run locally  with the following command:julia> ]\n(v1.0) pkg> test GranularIn case any of these tests fail, please open a Github  Issue describing the problems  so further investigation and diagnosis can follow."
},

{
    "location": "man/package_contents/#",
    "page": "Package contents",
    "title": "Package contents",
    "category": "page",
    "text": ""
},

{
    "location": "man/package_contents/#Package-contents-1",
    "page": "Package contents",
    "title": "Package contents",
    "category": "section",
    "text": "This package follows the official  guidelines  for Julia package layout and contents. "
},

{
    "location": "man/package_contents/#File-locations-after-installation-1",
    "page": "Package contents",
    "title": "File locations after installation",
    "category": "section",
    "text": "After installation, the package contents will be installed inside the hidden  ~/.julia/ folder in the home directory.  The path can be printed from inside  the julia shell by the command:julia> Pkg.dir(\"Granular\")\n\"/Users/ad/.julia/v0.7/Granular\"The above output will be different for different platforms and Julia versions.  In order to open this directory on macOS, run the following command:julia> run(`open $(Pkg.dir(\"Granular\"))`)On Linux, use the following command:julia> run(`xdg-open $(Pkg.dir(\"Granular\"))`)The above commands will open the directory containing all of the Granular.jl  components. The main component of Granular.jl is the source code contained in  the src/ directory.  The docs/  directory contains the documentation source via Markdown files.  The online  documentation is generated from these files via  Documenter.jl by the  docs/make.jl  script.  The documentation consists of manual pages, as well as auto-generated  API reference that is parsed from the documentation of the Granular.jl source  code (src/  directory)."
},

{
    "location": "man/package_contents/#Example-scripts-1",
    "page": "Package contents",
    "title": "Example scripts",
    "category": "section",
    "text": "The examples  directory contains several annotated examples, which are useful for getting  started with the Granular.jl package and for demonstrating some of its  features.  The examples are generally heavily annotated with comments to  illustrate the purpose of the included commands.The examples can be run by either navigating to the examples directory from the  command line, and launching them with a command like julia -e logo.jl, or  directly from the julia shell with:julia> include(\"$(Pkg.dir(\"Granular\"))/examples/logo.jl\")It is recommended that the source code of the examples is inspected beforehand."
},

{
    "location": "man/methods/#",
    "page": "Computational methods",
    "title": "Computational methods",
    "category": "page",
    "text": ""
},

{
    "location": "man/methods/#Computational-methods-1",
    "page": "Computational methods",
    "title": "Computational methods",
    "category": "section",
    "text": "To be written"
},

{
    "location": "man/getting_started/#",
    "page": "Getting started",
    "title": "Getting started",
    "category": "page",
    "text": ""
},

{
    "location": "man/getting_started/#Getting-started-1",
    "page": "Getting started",
    "title": "Getting started",
    "category": "section",
    "text": "In this section, it is assumed that Julia and  Granular.jl have been successfully  installed.  If not, please consult the Installation  section of this manual.  If you are new to the Julia  programming language, the official manual has a useful guide to getting  started with  Julia.In the following, two simple examples are presented using some of the core  functionality of Granular.jl.  For more examples, see the scripts in the  examples/  directory.The relevant functions are all contained in the Granular module, which can be  imported with import Granular.  Note: As per Julia conventions, functions  that contain an exclamation mark (!) modify the values of the arguments.All of the functions called below are documented in the source code, and their  documentation can be found in the Public API Index in the  online documentation, or simply from the Julia shell by typing ?<function  name>.  An example:julia> ?Granular.createSimulation\n  createSimulation([id])\n\n  Create a simulation object to contain all relevant variables such as temporal \n  parameters, fluid grids, grains, and contacts. The parameter id is used to \n  uniquely identify the simulation when it is written to disk.\n\n  The function returns a Simulation object, which you can add grains to, e.g. \n  with addGrainCylindrical!.\n\n     Optional argument\n    ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡\n\n    •    id::String=\"unnamed\": simulation identifying string.You can go through the examples below by typing in the lines starting with  julia> into the Julia interactive shell, which comes up when you start the  Julia app or run julia from the command line in a terminal.  Do not include  the julia> part, just the remaining text of that line.Alternatively, you can create a Julia script with the file name extension  .jl.  This file should contains all of the relevant commands in succession,  which is useful for quickly repeating runs.  Julia scripts can be evaluated  form the command line using julia <scriptname>.jl."
},

{
    "location": "man/getting_started/#Collision-between-two-particles-1",
    "page": "Getting started",
    "title": "Collision between two particles",
    "category": "section",
    "text": "For the first example (examples/two-grains.jl), we will create two grains and  make the first grain bump in to the second grain.As the first step, we import all the Granular.jl functionality:julia> import Granular"
},

{
    "location": "man/getting_started/#Simulation-setup-1",
    "page": "Getting started",
    "title": "Simulation setup",
    "category": "section",
    "text": "Next, we create our simulation object which holds all information related to  the simulated grains.  In this documentation, we will use the name sim for  the simulation object:julia> sim = Granular.createSimulation(id=\"two-grains\")\nGranular.Simulation(\"two-grains\", 0, 0.0, -1.0, -1.0, -1.0, 0, 0.0, \nGranular.GrainCylindrical[], Granular.Ocean(false, [0.0], [0.0], [0.0], [0.0], \n[0.0], [0.0], [0.0], [0.0], [0.0], [0.0], [0.0], Array{Int64,1}[#undef], 1, 1, \n1, 1), Granular.Atmosphere(false, [0.0], [0.0], [0.0], [0.0], [0.0], [0.0], \n[0.0], [0.0], Array{Int64,1}[#undef], 1, 1, 1, 1, false), 16)After creating the simulation object sim, we will be presented with some  output about the default contents of the sim simulation object.  This is of  minor importance as of now, and can safely be ignored.In the above createSimulation call, the id argument is optional. It is used  to name simulation output files that are written to the disk."
},

{
    "location": "man/getting_started/#Adding-grains-one-by-one-1",
    "page": "Getting started",
    "title": "Adding grains one by one",
    "category": "section",
    "text": "We have now created a simulation object sim, which will be used during all of  the following commands.  Next, we can add grains to this object.  The first  grain is cylinder shaped, placed at the x-y position (0,0) m.  It has a radius  of 0.1 m, and has a thickness of 0.05 m.  As this call modifies the sim  object, the function contains an exclamation mark (!).  For further information  regarding this call, see the reference to addGrainCylindrical!, found  in the Public API documentation.julia> Granular.addGrainCylindrical!(sim, [0.0, 0.0], 0.1, 0.05)\nINFO: Added Grain 1Let\'s add another grain, placed at some distance from the first grain:julia> Granular.addGrainCylindrical!(sim, [0.5, 0.0], 0.1, 0.05)\nINFO: Added Grain 2We now want to prescribe a linear (not rotational or angular) velocity to the  first grain to make it bump into the second grain.The simulation object sim contains an array of all grains that are added to  it.  We can directly inspect the grains and their values from the simulation  object.  Let\'s take a look at the default value of the linear velocity, called  lin_vel:julia> sim.grains[1].lin_vel\n2-element Array{Float64, 1}:\n 0.0\n 0.0The default value is a (0,0) vector, which means that it is not moving in  space.  With a similar call, we can modify the properties of the first grain  directly and prescribe a velocity to it:julia> sim.grains[1].lin_vel = [1.0, 0.0]\n2-element Array{Float64, 1}:\n 1.0\n 0.0The first grain (index 1 in sim.grains) now has a positive velocity along x  with the value of 1.0 meter per second."
},

{
    "location": "man/getting_started/#Setting-temporal-parameters-for-the-simulation-1",
    "page": "Getting started",
    "title": "Setting temporal parameters for the simulation",
    "category": "section",
    "text": "Before we can start the simulation we need to set some more parameters vital to  the simulation, like what time step to use, how often to write output files to  the disk, and for how long to run the simulation.  To set the computational  time step, we call the following:julia> Granular.setTimeStep!(sim)\nINFO: Time step length t=8.478741928617433e-5 sA suitable time step is automatically determined based on the size and elastic  properties of the grain.The two grains are 0.3 meters apart, as the centers are placed 0.5 meter from  each other and each grain has a radius of 0.1 m.  With a linear velocity of 1.0  m/s, the collision should occur after 0.3 seconds.  For that reason it seems  reasonable to run the simulation for a total of 1.0 seconds.  We choose to  produce an output file every 0.05 seconds, but this can be tweaked to taste.   We will later use the produced output files for visualization purposes.julia> Granular.setOutputFileInterval!(sim, 0.05)\n\njulia> Granular.setTotalTime!(sim, 1.0)"
},

{
    "location": "man/getting_started/#Running-the-simulation-1",
    "page": "Getting started",
    "title": "Running the simulation",
    "category": "section",
    "text": "We are now ready to run the simulation.  For illustrative purposes, let us  compare the kinetic energy in the granular system before and after the  collision.  For now, we compute the initial value using the following call:julia> Granular.totalGrainKineticTranslationalEnergy(sim)\n0.7335618846132168The above value is the total translational (not angular) kinetic energy in  Joules before the simulation is started.We have two choices for running the simulation; we can either run the entire  simulation length with a single call, which steps time until the total time is  reached and generates output files along the way.  Alternatively, we can run  the simulation for a single time step a time, and inspect the progress or do  other modifications along the way.Here, we will run the entire simulation in one go, and afterwards visualize the  grains from their output files using ParaView.julia> Granular.run!(sim)\n\nINFO: Output file: ./two-grains/two-grains.grains.1.vtu\nINFO: wrote status to ./two-grains/two-grains.status.txt\n  t = 0.04239370964308682/1.0 s\nINFO: Output file: ./two-grains/two-grains.grains.2.vtu\nINFO: wrote status to ./two-grains/two-grains.status.txt\n\n...\n\nINFO: Output file: ./two-grains/two-grains.grains.20.vtu\nINFO: wrote status to ./two-grains/two-grains.status.txt\n  t = 0.9920128056483803/1.0 s\nINFO: ./two-grains/two-grains.py written, execute with \'pvpython /Users/ad/code/Granular-ext/two-grains/two-grains.py\'\nINFO: wrote status to ./two-grains/two-grains.status.txt\n  t = 1.0000676104805686/1.0 sThe code informs us of the simulation progress along the way.  It also and  notifies us as output files are generated.  This output can be disabled by  passing verbose=false to the run!() command.  Finally, the code tells us  that it has generated a ParaView python file for visualization, called  two-grains.py, located in the two-grains/ directory.We are interested in getting an immediate idea of how the collision went,  before going further.  We can print the new velocities with the following  commands:julia> sim.grains[1].lin_vel\n2-element Array{Float64, 1}:\n 7.58343e-5\n 0.0\n\njulia> sim.grains[2].lin_vel\n2-element Array{Float64, 1}:\n 0.999924\n 0.0The first grain has transferred effectively all of its kinetic energy to the  second grain during the cause of the simulation.  The total kinetic energy now  is the following:julia> Granular.totalGrainKineticTranslationalEnergy(sim)\n0.7334506347624973The before and after values for total kinetic energy are reasonably close (to  less than 0.1 percent), which is what can be expected given the computation  accuracy of the algorithm."
},

{
    "location": "man/getting_started/#Visualizing-the-output-1",
    "page": "Getting started",
    "title": "Visualizing the output",
    "category": "section",
    "text": "To visualize the output we open ParaView.  The  output files of the simulation are written using the VTK (visualization  toolkit) format, which is natively supported by ParaView.While the .vtu files produced during the simulation can be opened with  ParaView and visualized manually using Glyph filters, the simplest and  fastest way to visualize the data is to use the Python script generated for the  simulation by Granular.jl.Open ParaView and open the Python Shell, found under the menu Tools > Python  Shell.  In the pop-up dialog we select Run Script, which opens yet another  dialog prompting us to locate the visualization script  (two-grains/two-grains.py in our example).  We locate this file, which is  placed under the directory from where we launched the julia session with the  commands above.  If you are not sure what the current working directory for the  Julia session is, it can be displayed with the command pwd() in the Julia  shell.After selecting the two-grains/two-grains.py script, we can close the Python  Shell window to inspect our simulation visually.  Press the Play symbol in  the top toolbar, and see what happens.By default, the grains are colored according to their size.  Alternatively, you  can color the grains using different parameters, such as linear velocity,  number of contacts, etc.  These parameters can be selected by changing the  chosen field under the Glyph1 object in the Pipeline Browser on the left,  and by selecting a parameter for Coloring.  Press the Apply button at the  top of  the panel on the left to see the changes in effect.Tip: If you have the command pvpython (ParaView Python) is available from  the command line, you can visualize the simulation directly from the Julia  shell without entering ParaView by the command Granular.render(sim).  The  program pvpython is included in the ParaView download, and is in the macOS  application bundle located in  /Applications/Paraview-5.4.0.app/Contents/bin/pvpython.  Furthermore, if you  have the convert command from ImageMagick installed (brew install  imagemagick on macOS), the output images will be merged into an animated GIF."
},

{
    "location": "man/getting_started/#Exercises-1",
    "page": "Getting started",
    "title": "Exercises",
    "category": "section",
    "text": "To gain more familiarity with the simulation procedure, I suggest experimenting  with the following exercises.  Tip: You can rerun an experiment after  changing one or more parameters by calling Granular.resetTime!(sim);  Granular.run!(sim).  Changes in grain size, grain mass, or elastic properties  require a recomputation of the numerical time step  (Granular.setTimeStep!(sim)) before calling Granular.run!(sim).  The output  files will be overwritten, and changes will be immediately available in  ParaView.What effect does the grain size have on the time step?\nTry to make an oblique collision by placing one of the grains at a different    y position.\nWhat happens if the second grain is set to be fixed in space    (sim.grains[2].fixed = true)?\nHow is the relationship between total kinetic energy before and after    affected by the choice of time step length?  Try setting different time    step values, e.g. with sim.time_step = 0.1234 and rerun the simulation."
},

{
    "location": "man/getting_started/#Sedimentation-of-grains-1",
    "page": "Getting started",
    "title": "Sedimentation of grains",
    "category": "section",
    "text": "Grains are known to settle under gravitation in water according to Stoke\'s  law, where resistive drag acts opposite of gravity and with a magnitude  according to the square root of velocity difference between water and grain. Granular.jl offers simple fluid grids with prescribed velocity fields, and the  grains are met with drag in this grid.In this example (examples/sedimentation.jl) we will initialize grains with a  range of grain sizes in a loose configuration, add gravity and a surrounding  fluid grid, and let the grains settle towards the bottom.As in the previous example, we start by creating a fluid grid:julia> import Granular\njulia> sim = Granular.createSimulation(id=\"sedimentation\")"
},

{
    "location": "man/getting_started/#Creating-a-pseudo-random-grain-packing-1",
    "page": "Getting started",
    "title": "Creating a pseudo-random grain packing",
    "category": "section",
    "text": "Instead of manually adding grains one by one, we can use the  regularPacking!() function to add a regular grid of random-sized grains to  the simulation.  Below, we specify that we want the grid of grains to be 7  grains wide along x, and 25 grains tall along y.  We also specify the grain  radii to fall between 0.02 and 0.2 m.  The sizes will be drawn from a power-law  distribution by default.julia> Granular.regularPacking!(sim, [7, 25], 0.02, 0.2)Since we haven\'t explicitly set the grain sizes for this example, we can  inspect the values by plotting a histogram of sizes (only works if the PyPlot  package is installed with Pkg.add(\"PyPlot\")):julia> Granular.plotGrainSizeDistribution(sim)\nINFO: sedimentation-grain-size-distribution.pngThe output informs us that we have the plot saved as an image with the file  name sedimentation-grain-size-distribution.png."
},

{
    "location": "man/getting_started/#Creating-a-fluid-grid-1",
    "page": "Getting started",
    "title": "Creating a fluid grid",
    "category": "section",
    "text": "We can now create a fluid (ocean) grid spanning the extent of the grains  created above:julia> Granular.fitGridToGrains!(sim, sim.ocean)\nINFO: Created regular Granular.Ocean grid from [0.06382302477946442, \n0.03387419706945263] to [3.0386621000253293, 10.87955941983313] with a cell \nsize of 0.3862075959573571 ([7, 28]).The code informs us of the number of grid cells in each dimension (7 by 28  cells), and the edge positions (x = 0.0638 to 3.04 m, y = 0.0339 to 10.9 m).We want the boundaries of the above grid to be impermeable for the grains, so  they stack up at the bottom.  Granular.jl acknowledges the boundary types with  a confirmation message:julia> Granular.setGridBoundaryConditions!(sim.ocean, \"impermeable\")\nWest  (-x): impermeable (3)\nEast  (+x): impermeable (3)\nSouth (-y): impermeable (3)\nNorth (+y): impermeable (3)"
},

{
    "location": "man/getting_started/#Adding-gravitational-acceleration-1",
    "page": "Getting started",
    "title": "Adding gravitational acceleration",
    "category": "section",
    "text": "If we start the simulation now nothing would happen as gravity is disabled by  default.  We can enable gravitational acceleration as a constant body force for  each grain (Force = mass * acceleration):julia> g = [0.0, -9.8];\njulia> for grain in sim.grains\n       Granular.addBodyForce!(grain, grain.mass*g)\n       end"
},

{
    "location": "man/getting_started/#Setting-temporal-parameters-1",
    "page": "Getting started",
    "title": "Setting temporal parameters",
    "category": "section",
    "text": "As before, we ask the code to select a suitable computational time step based  on grain sizes and properties:julia> Granular.setTimeStep!(sim)\nINFO: Time step length t=1.6995699879716792e-5 sWe also, as before, set the total simulation time as well as the output file  interval:julia> Granular.setTotalTime!(sim, 10.0)\njulia> Granular.setOutputFileInterval!(sim, 0.2)"
},

{
    "location": "man/getting_started/#Running-the-simulation-2",
    "page": "Getting started",
    "title": "Running the simulation",
    "category": "section",
    "text": "We are now ready to run the simulation:julia> Granular.run!(sim)\nINFO: Output file: ./sedimentation/sedimentation.grains.1.vtu\nINFO: Output file: ./sedimentation/sedimentation.ocean.1.vts\nINFO: wrote status to ./sedimentation/sedimentation.status.txt\n  t = 0.19884968859273294/10.0 s\nINFO: Output file: ./sedimentation/sedimentation.grains.2.vtu\nINFO: Output file: ./sedimentation/sedimentation.ocean.2.vts\nINFO: wrote status to ./sedimentation/sedimentation.status.txt\n  t = 0.3993989471735396/10.0 s\n\n...\n\nINFO: Output file: ./sedimentation/sedimentation.grains.50.vtu\nINFO: Output file: ./sedimentation/sedimentation.ocean.50.vts\nINFO: wrote status to ./sedimentation/sedimentation.status.txt\n  t = 9.998435334626701/10.0 s\nINFO: ./sedimentation/sedimentation.py written, execute with \'pvpython /Users/ad/code/Granular-ext/examples/sedimentation/sedimentation.py\'\nINFO: wrote status to ./sedimentation/sedimentation.status.txt\n  t = 10.00001593471549/10.0 sThe output can be plotted in ParaView as described in the two-grain example  above, or, if pvpython is available from the command line, directly from  Julia with the following command:julia> Granular.render(sim, trim=false)"
},

{
    "location": "man/getting_started/#Exercises-2",
    "page": "Getting started",
    "title": "Exercises",
    "category": "section",
    "text": "How are the granular contact pressures distributed in the final result?  You    can visualize this by selecting \"Contact Pressure [Pa]\" in the Coloring    field inside ParaView.\nTry running the above example, but without fluid drag.  Disable the drag by    including the call Granlar.disableOceanDrag!(grain) in the for loop    where gravitational acceleration is set for each grain.\nHow does the range of grain sizes affect the result?  Try making all grains    bigger or smaller.\nHow is the model performance effected if the grain-size distribution is    wide or narrow?\nCreate a landslide by turning the gravitational acceleration vector (set the    y component to a non-zero value, and setting the side boundaries to be    periodic with Granular.setGridBoundaryConditions!(sim.ocean, \"periodic\",    \"east west\")."
},

{
    "location": "lib/public/#",
    "page": "Public API",
    "title": "Public API",
    "category": "page",
    "text": ""
},

{
    "location": "lib/public/#Public-API-documentation-1",
    "page": "Public API",
    "title": "Public API documentation",
    "category": "section",
    "text": "Documentation for Granular.jl\'s public interface.See Package-internal documentation for internal package docs."
},

{
    "location": "lib/public/#main-index-1",
    "page": "Public API",
    "title": "Index",
    "category": "section",
    "text": "Pages = [\"public.md\"]"
},

{
    "location": "lib/public/#Granular.Granular",
    "page": "Public API",
    "title": "Granular.Granular",
    "category": "module",
    "text": "Granular.jl\n\nOffline granular dynamics simulator module.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.addAtmosphereDrag!-Tuple{Granular.Simulation}",
    "page": "Public API",
    "title": "Granular.addAtmosphereDrag!",
    "category": "method",
    "text": "Add drag from linear and angular velocity difference between atmosphere and all  grains.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.addBodyForce!-Tuple{Granular.GrainCylindrical,Array{Float64,1}}",
    "page": "Public API",
    "title": "Granular.addBodyForce!",
    "category": "method",
    "text": "setBodyForce!(grain, force)\n\nAdd to the value of the external body force on a grain.\n\nArguments\n\ngrain::GrainCylindrical: the grain to set the body force for.\nforce::Vector{Float64}: a vector of force [N]\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.addGrain!",
    "page": "Public API",
    "title": "Granular.addGrain!",
    "category": "function",
    "text": "addGrain!(simulation::Simulation,\n          grain::GrainCylindrical,\n          verbose::Bool = false)\n\nAdd an grain to the simulation object.  If verbose is true, a short  confirmation message will be printed to stdout.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.addGrainCylindrical!-Tuple{Granular.Simulation,Array{Float64,1},Float64,Float64}",
    "page": "Public API",
    "title": "Granular.addGrainCylindrical!",
    "category": "method",
    "text": "function addGrainCylindrical!(simulation, lin_pos, contact_radius,\n                                thickness[, areal_radius, lin_vel, lin_acc,\n                                force, ang_pos, ang_vel, ang_acc, torque,\n                                density, contact_stiffness_normal,\n                                contact_stiffness_tangential,\n                                contact_viscosity_normal,\n                                contact_viscosity_tangential,\n                                contact_static_friction,\n                                contact_dynamic_friction,\n                                youngs_modulus, poissons_ratio,\n                                tensile_strength, shear_strength,\n                                strength_heal_rate,\n                                fracture_toughness,\n                                ocean_drag_coeff_vert,\n                                ocean_drag_coeff_horiz,\n                                atmosphere_drag_coeff_vert,\n                                atmosphere_drag_coeff_horiz,\n                                pressure, fixed,\n                                allow_x_acc, allow_y_acc, allow_z_acc,\n                                rotating, enabled, verbose,\n                                ocean_grid_pos, atmosphere_grid_pos,\n                                n_contact, granular_stress, ocean_stress,\n                                atmosphere_stress,\n                                thermal_energy,\n                                color])\n\nCreates and adds a cylindrical grain to a simulation. Most of the arguments  are optional, and come with default values.  The only required arguments are  simulation, lin_pos, contact_radius, and thickness.\n\nArguments\n\nsimulation::Simulation: the simulation object where the grain should be   added to.\nlin_pos::Vector{Float64}: linear position of grain center [m]. If a   two-component vector is used, the values will be mapped to x and y, and   the z component will be set to zero.\ncontact_radius::Float64: grain radius for granular interaction [m].\nthickness::Float64: grain thickness [m].\nareal_radius = false: grain radius for determining sea-ice concentration   [m].\nlin_vel::Vector{Float64} = [0., 0., 0.]: linear velocity [m/s]. If a   two-component vector is used, the values will be mapped to x and y, and   the z component will be set to zero.\nlin_acc::Vector{Float64} = [0., 0., 0.]: linear acceleration [m/s^2]. If a   two-component vector is used, the values will be mapped to x and y, and   the z component will be set to zero.\nforce::Vector{Float64} = [0., 0., 0.]: linear force balance [N]. If a   two-component vector is used, the values will be mapped to x and y, and   the z component will be set to zero.\nang_pos::Float64 = [0., 0., 0.]: angular position around its center vertical   axis [rad]. If a scalar is used, the value will be mapped to z, and the   x and y components will be set to zero.\nang_vel::Float64 = [0., 0., 0.]: angular velocity around its center vertical   axis [rad/s]. If a scalar is used, the value will be mapped to z, and the   x and y components will be set to zero.\nang_acc::Float64 = [0., 0., 0.]: angular acceleration around its center   vertical axis [rad/s^2]. If a scalar is used, the value will be mapped to   z, and the x and y components will be set to zero.\ntorque::Float64 = [0., 0., 0.]: torque around its center vertical axis   [Nm]. If a scalar is used, the value will be mapped to *z, and the x and   y components will be set to zero.\ndensity::Float64 = 934.: grain mean density [kg/m^3].\ncontact_stiffness_normal::Float64 = 1e7: contact-normal stiffness [N/m];   overridden if youngs_modulus is set to a positive value.\ncontact_stiffness_tangential::Float64 = 0.: contact-tangential stiffness   [N/m]; overridden if youngs_modulus is set to a positive value.\ncontact_viscosity_normal::Float64 = 0.: contact-normal viscosity [N/m/s].\ncontact_viscosity_tangential::Float64 = 0.: contact-tangential viscosity   [N/m/s].\ncontact_static_friction::Float64 = 0.4: contact static Coulomb frictional   coefficient [-].\ncontact_dynamic_friction::Float64 = 0.4: contact dynamic Coulomb frictional   coefficient [-].\nyoungs_modulus::Float64 = 2e7: elastic modulus [Pa]; overrides any value   set for contact_stiffness_normal.\npoissons_ratio::Float64 = 0.185: Poisson\'s ratio, used to determine the   contact-tangential stiffness from youngs_modulus [-].\ntensile_strength::Float64 = 0.: contact-tensile (cohesive) bond strength   [Pa].\nshear_strength::Float64 = 0.: shear strength of bonded contacts [Pa].\nstrength_heal_rate::Float64 = 0.: rate at which contact bond   strength is obtained [Pa/s].\nfracture_toughness::Float64 = 0.: fracture toughness which influences the    maximum compressive strength on granular contact [m^{1/2}Pa]. A value   of 1.285e3 m^{1/2}Pa is used for sea ice by Hopkins 2004.\nocean_drag_coeff_vert::Float64 = 0.85: vertical drag coefficient for ocean   against grain sides [-].\nocean_drag_coeff_horiz::Float64 = 5e-4: horizontal drag coefficient for   ocean against grain bottom [-].\natmosphere_drag_coeff_vert::Float64 = 0.4: vertical drag coefficient for   atmosphere against grain sides [-].\natmosphere_drag_coeff_horiz::Float64 = 2.5e-4: horizontal drag coefficient   for atmosphere against grain bottom [-].\npressure::Float64 = 0.: current compressive stress on grain [Pa].\nfixed::Bool = false: grain is fixed to a constant velocity (e.g. zero).\nallow_x_acc::Bool = false: override fixed along x.\nallow_y_acc::Bool = false: override fixed along y.\nallow_z_acc::Bool = false: override fixed along z.\nrotating::Bool = true: grain is allowed to rotate.\nenabled::Bool = true: grain interacts with other grains.\nverbose::Bool = true: display diagnostic information during the function   call.\nocean_grid_pos::Array{Int, 1} = [0, 0]: position of grain in the ocean   grid.\natmosphere_grid_pos::Array{Int, 1} = [0, 0]: position of grain in the   atmosphere grid.\nn_contacts::Int = 0: number of contacts with other grains.\ngranular_stress::Vector{Float64} = [0., 0., 0.]: resultant stress on grain   from granular interactions [Pa].\nocean_stress::Vector{Float64} = [0., 0., 0.]: resultant stress on grain from   ocean drag [Pa].\natmosphere_stress::Vector{Float64} = [0., 0., 0.]: resultant stress on grain   from atmosphere drag [Pa].\nthermal_energy::Float64 = 0.0: thermal energy of grain [J].\ncolor::Int=0: type number, usually used for associating a color to the grain   during visualization.\n\nExamples\n\nThe most basic example adds a new grain to the simulation sim, with a  center at [1., 2., 0.], a radius of 1. meter, and a thickness of 0.5  meter:\n\nGranular.addGrainCylindrical!(sim, [1., 2.], 1., .5)\n\nNote that the z component is set to zero if a two-component vector is passed.\n\nThe following example will create a grain with tensile and shear strength, and a velocity of 0.5 m/s towards -x:\n\nGranular.addGrainCylindrical!(sim, [4., 2.], 1., .5,\n                              tensile_strength = 200e3,\n                              shear_strength = 100e3,\n                              lin_vel = [-.5, 0.])\n\nFixed grains are useful for creating walls or coasts, and loops are useful for creating regular arrangements:\n\nfor i=1:5\n    Granular.addGrainCylindrical!(sim, [i*2., 0., 3.], 1., .5, fixed=true)\nend\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.addOceanDrag!-Tuple{Granular.Simulation}",
    "page": "Public API",
    "title": "Granular.addOceanDrag!",
    "category": "method",
    "text": "Add drag from linear and angular velocity difference between ocean and all ice  floes.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.addWall!",
    "page": "Public API",
    "title": "Granular.addWall!",
    "category": "function",
    "text": "addWall!(simulation::Simulation,\n         wall::WallLinearFrictionless,\n         verbose::Bool = false)\n\nAdd an wall to the simulation object.  If verbose is true, a short  confirmation message will be printed to stdout.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.addWallLinearFrictionless!-Tuple{Granular.Simulation,Array{Float64,1},Float64}",
    "page": "Public API",
    "title": "Granular.addWallLinearFrictionless!",
    "category": "method",
    "text": "function addWallLinear!(simulation, normal, pos[, bc, mass, thickness, \n                        normal_stress, vel, acc, force,\n                        contact_viscosity_normal, verbose])\n\nCreates and adds a linear (flat) and frictionless dynamic wall to a grain to a simulation. Most of the arguments are optional, and come with default values. The only required arguments are  simulation, normal, pos, and bc.\n\nArguments\n\nsimulation::Simulation: the simulation object where the wall should be   added to.\nnormal::Vector{Float64}: 3d vector denoting the normal to the wall [m].  The   wall will only interact in the opposite direction of this vector, so the   normal vector should point in the direction of the grains. If a 2d vector is   passed, the third (z) component is set to zero.\npos::Float64: position along axis parallel to the normal vector [m].\nbc::String=\"fixed\": boundary condition, possible values are \"fixed\"   (default), \"normal stress\", or \"velocity\".\nmass::Float64=NaN: wall mass, which is used if wall boundary conditions   differs from bc=\"fixed\".  If the parameter is left to its default value,   the wall mass is set to be equal the total mass of grains in the simulation.   Units: [kg]\nthickness::Float64=NaN: wall thickness, which is used for determining wall   surface area.  If the parameter is left to its default value, the wall   thickness is set to be equal to the thickest grain in the simulation.   Units: [m].\nnormal_stress::Float64=0.: the wall normal stress when bc == \"normal   stress\" [Pa].\nvel::Float64=0.: the wall velocity along the normal vector.  If the   wall boundary condition is bc = \"velocity\" the wall will move according to   this constant value.  If bc = \"normal stress\" the velocity will be a free   parameter. Units: [m/s]\nforce::Float64=0.: sum of normal forces on the wall from interaction with   grains [N].\ncontact_viscosity_normal::Float64=0.: viscosity to apply in parallel to   elasticity in interactions between wall and particles [N/(m/s)]. When this   term is larger than zero, the wall-grain interaction acts like a sink of   kinetic energy.\nverbose::Bool=true: show verbose information during function call.\n\nExamples\n\nThe most basic example adds a new fixed wall to the simulation sim, with a  wall-face normal of [1., 0.] (wall along y and normal to x), a position of 1.5 meter:\n\nGranular.addWallLinearFrictionless!(sim, [1., 0., 0.], 1.5)\n\nThe following example creates a wall with a velocity of 0.5 m/s towards -y:\n\nGranular.addWallLinearFrictionless!(sim, [0., 1., 0.], 1.5,\n                                    bc=\"velocity\",\n                                    vel=-0.5)\n\nTo create a wall parallel to the y axis pushing downwards with a constant normal stress of 100 kPa, starting at a position of y = 3.5 m:\n\nGranular.addWallLinearFrictionless!(sim, [0., 1., 0.], 3.5,\n                                    bc=\"normal stress\",\n                                    normal_stress=100e3)\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.applyAtmosphereDragToGrain!-Tuple{Granular.GrainCylindrical,Float64,Float64}",
    "page": "Public API",
    "title": "Granular.applyAtmosphereDragToGrain!",
    "category": "method",
    "text": "Add Stokes-type drag from velocity difference between atmosphere and a single  grain.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.applyAtmosphereVorticityToGrain!-Tuple{Granular.GrainCylindrical,Float64}",
    "page": "Public API",
    "title": "Granular.applyAtmosphereVorticityToGrain!",
    "category": "method",
    "text": "Add Stokes-type torque from angular velocity difference between atmosphere and a  single grain.  See Eq. 9.28 in \"Introduction to Fluid Mechanics\" by Nakayama  and Boucher, 1999.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.applyOceanDragToGrain!-Tuple{Granular.GrainCylindrical,Float64,Float64}",
    "page": "Public API",
    "title": "Granular.applyOceanDragToGrain!",
    "category": "method",
    "text": "Add Stokes-type drag from velocity difference between ocean and a single ice  floe.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.applyOceanVorticityToGrain!-Tuple{Granular.GrainCylindrical,Float64}",
    "page": "Public API",
    "title": "Granular.applyOceanVorticityToGrain!",
    "category": "method",
    "text": "Add Stokes-type torque from angular velocity difference between ocean and a  single grain.  See Eq. 9.28 in \"Introduction to Fluid Mechanics\" by Nakayama  and Boucher, 1999.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.areaOfQuadrilateral-NTuple{4,Array{Float64,1}}",
    "page": "Public API",
    "title": "Granular.areaOfQuadrilateral",
    "category": "method",
    "text": "Returns the area of a quadrilateral with corner coordinates a, b, c, and  d.  Corners a and c should be opposite of each other, the same must be  true for b and d.  This is true if the four corners are passed as arguments  in a \"clockwise\" or \"counter-clockwise\" manner.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.areaOfTriangle-Tuple{Array{Float64,1},Array{Float64,1},Array{Float64,1}}",
    "page": "Public API",
    "title": "Granular.areaOfTriangle",
    "category": "method",
    "text": "Returns the area of an triangle with corner coordinates a, b, and c.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.checkAndAddContact!",
    "page": "Public API",
    "title": "Granular.checkAndAddContact!",
    "category": "function",
    "text": "checkAndAddContact!(simulation, i, j)\n\nCheck for contact between two grains and register the interaction in the  simulation object.  The indexes of the two grains is stored in  simulation.contact_pairs as [i, j].  The overlap vector is parallel to a  straight line connecting the grain centers, points away from grain i and  towards j, and is stored in simulation.overlaps.  A zero-length vector is  written to simulation.contact_parallel_displacement.\n\nArguments\n\nsimulation::Simulation: the simulation object containing the grains.\ni::Int: index of the first grain.\nj::Int: index of the second grain.\ndistance_Modifier::Vector{Float64}: vector modifying percieved   inter-particle distance, which is used for contact search across periodic   boundaries.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.checkForContacts-Tuple{Granular.Simulation,Any,Array{Float64,1},Float64}",
    "page": "Public API",
    "title": "Granular.checkForContacts",
    "category": "method",
    "text": "checkForContacts(grid, position, radius)\n\nPerform an O(n*log(n)) cell-based contact search between a candidate grain with position position and radius, against all grains registered in the grid. Returns the number of contacts that were found as an Integer value, unless return_when_overlap_found is true.\n\nArguments\n\nsimulation::Simulation: Simulation object containing grain positions.\ngrid::Any: Ocean or Atmosphere grid containing sorted particles.\nx_candidate::Vector{Float64}: Candidate center position to probe for   contacts with existing grains [m].\nr_candidate::Float64: Candidate radius [m].\nreturn_when_overlap_found::Bool (default: false): Return true if no   contacts are found, or return false as soon as a contact is found.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.checkTimeParameters-Tuple{Granular.Simulation}",
    "page": "Public API",
    "title": "Granular.checkTimeParameters",
    "category": "method",
    "text": "Checks if simulation temporal parameters are of reasonable values.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.compareAtmospheres-Tuple{Granular.Atmosphere,Granular.Atmosphere}",
    "page": "Public API",
    "title": "Granular.compareAtmospheres",
    "category": "method",
    "text": "compareAtmospheres(atmosphere1::atmosphere, atmosphere2::atmosphere)\n\nCompare values of two atmosphere objects using the Base.Test framework.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.compareGrains-Tuple{Granular.GrainCylindrical,Granular.GrainCylindrical}",
    "page": "Public API",
    "title": "Granular.compareGrains",
    "category": "method",
    "text": "compareGrains(if1::GrainCylindrical, if2::GrainCylindrical)\n\nCompare values of two grain objects using the Base.Test framework.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.compareOceans-Tuple{Granular.Ocean,Granular.Ocean}",
    "page": "Public API",
    "title": "Granular.compareOceans",
    "category": "method",
    "text": "compareOceans(ocean1::Ocean, ocean2::Ocean)\n\nCompare values of two Ocean objects using the Base.Test framework.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.compareSimulations-Tuple{Granular.Simulation,Granular.Simulation}",
    "page": "Public API",
    "title": "Granular.compareSimulations",
    "category": "method",
    "text": "compareSimulations(sim1::Simulation, sim2::Simulation)\n\nCompare values of two Simulation objects using the Base.Test framework.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.conformalQuadrilateralCoordinates-NTuple{5,Array{Float64,1}}",
    "page": "Public API",
    "title": "Granular.conformalQuadrilateralCoordinates",
    "category": "method",
    "text": "Returns the non-dimensional coordinates [x_tilde, y_tilde] of a point p  within a quadrilateral with corner coordinates A, B, C, and D. Points must be ordered in counter-clockwise order, starting from south-west  corner.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.convertGrainDataToArrays-Tuple{Granular.Simulation}",
    "page": "Public API",
    "title": "Granular.convertGrainDataToArrays",
    "category": "method",
    "text": "Gathers all grain parameters from the GrainCylindrical type in continuous  arrays in an GrainArrays structure.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.createEmptyAtmosphere-Tuple{}",
    "page": "Public API",
    "title": "Granular.createEmptyAtmosphere",
    "category": "method",
    "text": "Returns empty ocean type for initialization purposes.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.createEmptyOcean-Tuple{}",
    "page": "Public API",
    "title": "Granular.createEmptyOcean",
    "category": "method",
    "text": "Returns empty ocean type for initialization purposes.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.createRegularAtmosphereGrid-Tuple{Array{Int64,1},Array{Float64,1}}",
    "page": "Public API",
    "title": "Granular.createRegularAtmosphereGrid",
    "category": "method",
    "text": "createRegularAtmosphereGrid(n, L[, origo, time, name,\n                            bc_west, bc_south, bc_east, bc_north])\n\nInitialize and return a regular, Cartesian Atmosphere grid with n[1] by n[2] cells in the horizontal dimension, and n[3] vertical cells.  The cell corner and center coordinates will be set according to the grid spatial dimensions L[1], L[2], and L[3].  The grid u, v, h, and e fields will contain one 4-th dimension matrix per time step.  Sea surface will be at z=0. with the atmosphere spanning z<0..  Vertical indexing starts with k=0 at the sea surface, and increases downwards.\n\nArguments\n\nn::Vector{Int}: number of cells along each dimension [-].\nL::Vector{Float64}: domain length along each dimension [m].\norigo::Vector{Float64}: domain offset in each dimension m.\ntime::Vector{Float64}: vector of time stamps for the grid [s].\nname::String: grid name (default = \"unnamed\").\nbc_west::Integer: grid boundary condition for the grains.\nbc_south::Integer: grid boundary condition for the grains.\nbc_east::Integer: grid boundary condition for the grains.\nbc_north::Integer: grid boundary condition for the grains.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.createRegularOceanGrid-Tuple{Array{Int64,1},Array{Float64,1}}",
    "page": "Public API",
    "title": "Granular.createRegularOceanGrid",
    "category": "method",
    "text": "createRegularOceanGrid(n, L[, origo, time, name,\n                       bc_west, bc_south, bc_east, bc_north])\n\nInitialize and return a regular, Cartesian Ocean grid with n[1] by n[2]  cells in the horizontal dimension, and n[3] vertical cells.  The cell corner  and center coordinates will be set according to the grid spatial dimensions  L[1], L[2], and L[3].  The grid u, v, h, and e fields will contain  one 4-th dimension matrix per time step.  Sea surface will be at z=0. with  the ocean spanning z<0..  Vertical indexing starts with k=0 at the sea  surface, and increases downwards.\n\nArguments\n\nn::Vector{Int}: number of cells along each dimension [-].\nL::Vector{Float64}: domain length along each dimension [m].\norigo::Vector{Float64}: domain offset in each dimension m.\ntime::Vector{Float64}: vector of time stamps for the grid [s].\nname::String: grid name (default = \"unnamed\").\nbc_west::Integer: grid boundary condition for the grains.\nbc_south::Integer: grid boundary condition for the grains.\nbc_east::Integer: grid boundary condition for the grains.\nbc_north::Integer: grid boundary condition for the grains.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.createSimulation-Tuple{}",
    "page": "Public API",
    "title": "Granular.createSimulation",
    "category": "method",
    "text": "createSimulation([id])\n\nCreate a simulation object to contain all relevant variables such as temporal  parameters, fluid grids, grains, and contacts.  The parameter id is used to uniquely identify the simulation when it is written to disk.\n\nThe function returns a Simulation object, which you can add grains to, e.g. with addGrainCylindrical!.\n\nOptional argument\n\nid::String=\"unnamed\": simulation identifying string.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.disableAtmosphereDrag!-Tuple{Granular.GrainCylindrical}",
    "page": "Public API",
    "title": "Granular.disableAtmosphereDrag!",
    "category": "method",
    "text": "disableAtmosphereDrag!(grain)\n\nDisable atmosphere-caused drag on the grain.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.disableGrain!-Tuple{Granular.Simulation,Int64}",
    "page": "Public API",
    "title": "Granular.disableGrain!",
    "category": "method",
    "text": "Disable grain with index i in the simulation object.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.disableOceanDrag!-Tuple{Granular.GrainCylindrical}",
    "page": "Public API",
    "title": "Granular.disableOceanDrag!",
    "category": "method",
    "text": "disableOceanDrag!(grain)\n\nDisable ocean-caused drag on the grain.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.disableOutputFiles!-Tuple{Granular.Simulation}",
    "page": "Public API",
    "title": "Granular.disableOutputFiles!",
    "category": "method",
    "text": "Disables the write of output files to disk during a simulation.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.enableAtmosphereDrag!-Tuple{Granular.GrainCylindrical}",
    "page": "Public API",
    "title": "Granular.enableAtmosphereDrag!",
    "category": "method",
    "text": "enableAtmosphereDrag!(grain)\n\nEnable atmosphere-caused drag on the grain, with values by Hunke and Comeau (2011).\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.enableOceanDrag!-Tuple{Granular.GrainCylindrical}",
    "page": "Public API",
    "title": "Granular.enableOceanDrag!",
    "category": "method",
    "text": "enableOceanDrag!(grain)\n\nEnable ocean-caused drag on the grain, with values by Hunke and Comeau (2011).\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.findCellContainingPoint",
    "page": "Public API",
    "title": "Granular.findCellContainingPoint",
    "category": "function",
    "text": "findCellContainingPoint(grid, point[, method])\n\nReturns the i, j index of the grid cell containing the point. The function uses either an area-based approach (method = \"Area\"), or a  conformal mapping approach (method = \"Conformal\").  The area-based approach is  more robust.  This function returns the coordinates of the cell.  If no match is  found the function returns (0,0).\n\nArguments\n\ngrid::Any: grid object containing ocean or atmosphere data.\npoint::Vector{Float64}: two-dimensional vector of point to check.\nmethod::String: approach to use for determining if point is inside cell or    not, can be \"Conformal\" (default) or \"Area\".\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.findContacts!-Tuple{Granular.Simulation}",
    "page": "Public API",
    "title": "Granular.findContacts!",
    "category": "method",
    "text": "findContacts!(simulation[, method])\n\nTop-level function to perform an inter-grain contact search, based on grain  linear positions and contact radii.\n\nThe simplest contact search algorithm (method=\"all to all\") is the most  computationally expensive (O(n^2)).  The method \"ocean grid\" bins the grains  into their corresponding cells on the ocean grid and searches for contacts only  within the vicinity.  When this method is applied, it is assumed that the  contact_radius values of the grains are smaller than half the cell size.\n\nArguments\n\nsimulation::Simulation: the simulation object containing the grains.\nmethod::String: the contact-search method to apply.  Valid options are \"all    to all\" and \"ocean grid\".\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.findContactsAllToAll!-Tuple{Granular.Simulation}",
    "page": "Public API",
    "title": "Granular.findContactsAllToAll!",
    "category": "method",
    "text": "findContactsAllToAll!(simulation)\n\nPerform an O(n^2) all-to-all contact search between all grains in the  simulation object.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.findContactsInGrid!-Tuple{Granular.Simulation,Any}",
    "page": "Public API",
    "title": "Granular.findContactsInGrid!",
    "category": "method",
    "text": "findContactsInGrid!(simulation)\n\nPerform an O(n*log(n)) cell-based contact search between all grains in the  simulation object.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.findEmptyPositionInGridCell-Tuple{Granular.Simulation,Any,Int64,Int64,Float64}",
    "page": "Public API",
    "title": "Granular.findEmptyPositionInGridCell",
    "category": "method",
    "text": "findEmptyPositionInGridCell(simulation, grid, i, j, r[, n_iter, seed,\n                            verbose])\n\nAttempt locate an empty spot for an grain with radius r with center  coordinates in a specified grid cell (i, j) without overlapping any other  grains in that cell or the neighboring cells.  This function will stop  attempting after n_iter iterations, each with randomly generated positions.\n\nThis function assumes that existing grains have been binned according to the  grid (e.g., using sortGrainsInGrid()).\n\nIf the function sucessfully finds a position it will be returned as a two-component Vector{Float64}.  If a position is not found, the function will return false.\n\nArguments\n\nsimulation::Simulation: the simulation object to add grains to.\ngrid::Any: the grid to use for position search.\ni::Int: the grid-cell index along x.\nj::Int: the grid-cell index along y.\nr::Float64: the desired grain radius to fit into the cell.\nn_iter::Int = 30: the number of attempts for finding an empty spot.\nseed::Int = 1: seed for the pseudo-random number generator.\nverbose::Bool = false: print diagnostic information.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.findLargestGrainStiffness-Tuple{Granular.Simulation}",
    "page": "Public API",
    "title": "Granular.findLargestGrainStiffness",
    "category": "method",
    "text": "Finds the largest elastic stiffness of all grains in a simulation.  Used to  determine the optimal time step length.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.findSmallestGrainMass-Tuple{Granular.Simulation}",
    "page": "Public API",
    "title": "Granular.findSmallestGrainMass",
    "category": "method",
    "text": "Finds the smallest mass of all grains in a simulation.  Used to determine  the optimal time step length.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.fitGridToGrains!-Tuple{Granular.Simulation,Any}",
    "page": "Public API",
    "title": "Granular.fitGridToGrains!",
    "category": "method",
    "text": "fitGridToGrains!(simulation, grid[, padding])\n\nFit the ocean or atmosphere grid for a simulation to the current grains and their positions.\n\nArguments\n\nsimulation::Simulation: simulation object to manipulate.\ngrid::Any: Ocean or Atmosphere grid to manipulate.\npadding::Real: optional padding around edges [m].\nverbose::Bool: show grid information when function completes.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.getCellCenterCoordinates-Tuple{Array{Float64,2},Array{Float64,2},Int64,Int64}",
    "page": "Public API",
    "title": "Granular.getCellCenterCoordinates",
    "category": "method",
    "text": "getCellCenterCoordinates(grid, i, j)\n\nReturns grid center coordinates (h-point).\n\nArguments\n\nxh::Array{Float64, 2}: nominal longitude of h-points [degrees_E]\nyh::Array{Float64, 2}: nominal latitude of h-points [degrees_N]\ni::Int: x-index of cell.\nj::Int: y-index of cell.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.getCellCornerCoordinates-Tuple{Array{Float64,2},Array{Float64,2},Int64,Int64}",
    "page": "Public API",
    "title": "Granular.getCellCornerCoordinates",
    "category": "method",
    "text": "getCellCornerCoordinates(xq, yq, i, j)\n\nReturns grid-cell corner coordinates in the following order (south-west corner,  south-east corner, north-east corner, north-west corner).\n\nArguments\n\nxq::Array{Float64, 2}: nominal longitude of q-points [degrees_E]\nyq::Array{Float64, 2}: nominal latitude of q-points [degrees_N]\ni::Int: x-index of cell.\nj::Int: y-index of cell.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.getGridCornerCoordinates-Tuple{Array{Float64,2},Array{Float64,2}}",
    "page": "Public API",
    "title": "Granular.getGridCornerCoordinates",
    "category": "method",
    "text": "getGridCornerCoordinates(xq, yq)\n\nReturns grid corner coordinates in the following order (south-west corner,  south-east corner, north-east corner, north-west corner).\n\nArguments\n\nxq::Array{Float64, 2}: nominal longitude of q-points [degrees_E]\nyq::Array{Float64, 2}: nominal latitude of q-points [degrees_N]\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.getNonDimensionalCellCoordinates-Tuple{Any,Int64,Int64,Array{Float64,1}}",
    "page": "Public API",
    "title": "Granular.getNonDimensionalCellCoordinates",
    "category": "method",
    "text": "Returns the non-dimensional conformal mapped coordinates for point point in  cell i,j, based off the coordinates in the grid.\n\nThis function is a wrapper for getCellCornerCoordinates() and  conformalQuadrilateralCoordinates().\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.getWallNormalStress-Tuple{Granular.Simulation}",
    "page": "Public API",
    "title": "Granular.getWallNormalStress",
    "category": "method",
    "text": "getWallNormalStress(simulation[, wall_index, stress_type])\n\nReturns the current \"effective\" or \"defined\" normal stress on the wall with index wall_index inside the simulation object.  The returned value is given in Pascal.\n\nArguments\n\nsimulation::Simulation: the simulation object containing the wall.\nwall_index::Integer=1: the wall number in the simulation object.\nstress_type::String=\"effective\": the normal-stress type to return.  The   defined value corresponds to the normal stress that the wall is asked to   uphold. The effective value is the actual current normal stress.  Usually,   the magnitude of the effective normal stress fluctuates around the defined   normal stress.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.getWallSurfaceArea-Tuple{Granular.Simulation,Integer}",
    "page": "Public API",
    "title": "Granular.getWallSurfaceArea",
    "category": "method",
    "text": "getWallSurfaceArea(simulation, wall_index)\n\nReturns the surface area of the wall given the grid size and its index.\n\nArguments\n\nsimulation::Simulation: the simulation object containing the wall.\nwall_index::Integer=1: the wall number in the simulation object.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.grainCircumreference-Tuple{Granular.GrainCylindrical}",
    "page": "Public API",
    "title": "Granular.grainCircumreference",
    "category": "method",
    "text": "Returns the circumreference of the grain\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.grainHorizontalSurfaceArea-Tuple{Granular.GrainCylindrical}",
    "page": "Public API",
    "title": "Granular.grainHorizontalSurfaceArea",
    "category": "method",
    "text": "Returns the top or bottom (horizontal) surface area of the grain\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.grainKineticRotationalEnergy-Tuple{Granular.GrainCylindrical}",
    "page": "Public API",
    "title": "Granular.grainKineticRotationalEnergy",
    "category": "method",
    "text": "Returns the rotational kinetic energy of the grain\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.grainKineticTranslationalEnergy-Tuple{Granular.GrainCylindrical}",
    "page": "Public API",
    "title": "Granular.grainKineticTranslationalEnergy",
    "category": "method",
    "text": "Returns the translational kinetic energy of the grain\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.grainMass-Tuple{Granular.GrainCylindrical}",
    "page": "Public API",
    "title": "Granular.grainMass",
    "category": "method",
    "text": "Returns the mass of the grain\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.grainMomentOfInertia-Tuple{Granular.GrainCylindrical}",
    "page": "Public API",
    "title": "Granular.grainMomentOfInertia",
    "category": "method",
    "text": "Returns the moment of inertia of the grain\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.grainSideSurfaceArea-Tuple{Granular.GrainCylindrical}",
    "page": "Public API",
    "title": "Granular.grainSideSurfaceArea",
    "category": "method",
    "text": "Returns the surface area of the grain sides\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.grainThermalEnergy-Tuple{Granular.GrainCylindrical}",
    "page": "Public API",
    "title": "Granular.grainThermalEnergy",
    "category": "method",
    "text": "Returns the thermal energy of the grain, produced by Coulomb slip\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.grainVolume-Tuple{Granular.GrainCylindrical}",
    "page": "Public API",
    "title": "Granular.grainVolume",
    "category": "method",
    "text": "Returns the volume of the grain\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.harmonicMean-Tuple{Number,Number}",
    "page": "Public API",
    "title": "Granular.harmonicMean",
    "category": "method",
    "text": "harmonicMean(a, b)\n\nReturns the harmonic mean of two numbers a::Number and b::Number.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.incrementCurrentTime!-Tuple{Granular.Simulation,Float64}",
    "page": "Public API",
    "title": "Granular.incrementCurrentTime!",
    "category": "method",
    "text": "incrementCurrentTime!(simulation::Simulation, t::Float64)\n\nSets the current simulation time of the simulation object to t, with  parameter value checks.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.interGrainPositionVector-Tuple{Granular.Simulation,Int64,Int64}",
    "page": "Public API",
    "title": "Granular.interGrainPositionVector",
    "category": "method",
    "text": "interGrainPositionVector(simulation, i, j)\n\nReturns a vector pointing from grain i to grain j in the  simulation.\n\nArguments\n\nsimulation::Simulation: the simulation object containing the grains.\ni::Int: index of the first grain.\nj::Int: index of the second grain.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.interact!-Tuple{Granular.Simulation}",
    "page": "Public API",
    "title": "Granular.interact!",
    "category": "method",
    "text": "interact!(simulation::Simulation)\n\nResolve mechanical interaction between all particle pairs.\n\nArguments\n\nsimulation::Simulation: the simulation object containing the grains.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.interactGrains!-Tuple{Granular.Simulation,Int64,Int64,Int64}",
    "page": "Public API",
    "title": "Granular.interactGrains!",
    "category": "method",
    "text": "interactGrains!(simulation::Simulation, i::Int, j::Int, ic::Int)\n\nResolve an grain-to-grain interaction using a prescibed contact law.  This  function adds the compressive force of the interaction to the grain  pressure field of mean compressive stress on the grain sides.\n\nThe function uses the macroscopic contact-stiffness parameterization based on  Young\'s modulus and Poisson\'s ratio if Young\'s modulus is a positive value.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.interpolateAtmosphereState-Tuple{Granular.Atmosphere,Float64}",
    "page": "Public API",
    "title": "Granular.interpolateAtmosphereState",
    "category": "method",
    "text": "Atmosphere data is containted in Atmosphere type at discrete times  (Atmosphere.time).  This function performs linear interpolation between time  steps to get the approximate atmosphere state at any point in time.  If the  Atmosphere data set only contains a single time step, values from that time  are returned.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.interpolateOceanState-Tuple{Granular.Ocean,Float64}",
    "page": "Public API",
    "title": "Granular.interpolateOceanState",
    "category": "method",
    "text": "Ocean data is containted in Ocean type at discrete times (Ocean.time).  This  function performs linear interpolation between time steps to get the approximate  ocean state at any point in time.  If the Ocean data set only contains a  single time step, values from that time are returned.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.interpolateOceanVelocitiesToCorners-Tuple{Array{Float64,4},Array{Float64,4}}",
    "page": "Public API",
    "title": "Granular.interpolateOceanVelocitiesToCorners",
    "category": "method",
    "text": "Convert gridded data from Arakawa-C type (decomposed velocities at faces) to  Arakawa-B type (velocities at corners) through interpolation.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.irregularPacking!-Tuple{Granular.Simulation}",
    "page": "Public API",
    "title": "Granular.irregularPacking!",
    "category": "method",
    "text": "irregularPacking!(simulation[, radius_max, radius_min, sample_limit,\n                  padding_factor, binary_radius_search,\n                  binary_sampling_quality, thickness, seed,\n                  plot_during_packing, verbose)\n\nGenerate a dense disc packing in 2D using Poisson disc sampling with O(N) complexity, as described by Robert Bridson (2007) \"Fast Poisson disk sampling in arbitrary dimensions\". The simulation can be empty or already contain grains. However, an simulation.ocean or simulation.atmosphere grid is required.\n\nArguments\n\nsimulation::Simulation: simulation object where grains are inserted.\nradius_max::Real: largest grain radius to use.\nradius_min::Real: smallest grain radius to use.\nsample_limit::Integer=30: number of points to sample around each grain   before giving up.\npadding_factor::Real=0.: if positive and binary_radius_search = false, try to   add an occasional grain from the current active grain   (radius_max*padding_factor).\nbinary_radius_search::Bool=false: use a binary radius-sampling procedure to   fit the largest possible grains into the packing. This option will create   the highest packing density.\nbinary_sampling_quality::Real=100.: the quality to enforce during the binary   radius search when binary_radius_search = true. Larger values create   denser packings but take longer to complete.\nseed::Integer: seed value to the pseudo-random number generator.\nplot_during_packing::Bool=false: produce successive plots as the packing is   generated. Requires gnuplot (default).\nverbose::Bool=true: show diagnostic information to stdout.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.isPointInCell",
    "page": "Public API",
    "title": "Granular.isPointInCell",
    "category": "function",
    "text": "Check if a 2d point is contained inside a cell from the supplied grid. The function uses either an area-based approach (method = \"Area\"), or a  conformal mapping approach (method = \"Conformal\").  The area-based approach is  more robust.  This function returns true or false.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.isPointInGrid",
    "page": "Public API",
    "title": "Granular.isPointInGrid",
    "category": "function",
    "text": "Check if a 2d point is contained inside the grid.  The function uses either an area-based approach (method = \"Area\"), or a conformal mapping approach (method = \"Conformal\").  The area-based approach is more robust.  This function returns true or false.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.plotGrainSizeDistribution-Tuple{Granular.Simulation}",
    "page": "Public API",
    "title": "Granular.plotGrainSizeDistribution",
    "category": "method",
    "text": "plotGrainSizeDistribution(simulation, [filename_postfix, nbins,\n                            size_type, filetype, gnuplot_terminal,\n                            skip_fixed, log_y, verbose)\n\nPlot the grain size distribution as a histogram and save it to the disk.  The  plot is saved accoring to the simulation id, the optional filename_postfix  string, and the filetype, and is written to the current folder.\n\nArguments\n\nsimulation::Simulation: the simulation object containing the grains.\nfilename_postfix::String: optional string for the output filename.\nnbins::Int: number of bins in the histogram (default = 12).\nsize_type::String: specify whether to use the contact or areal radius    for the grain size.  The default is contact.\nfiletype::String: the output file type (default = \"png\").\ngnuplot_terminal::String: the gnuplot output terminal to use (default =   \"png\").\nskip_fixed::Bool: ommit grains that are fixed in space from the size    distribution (default = true).\nlog_y::Bool: plot y-axis in log scale.\nverbose::String: show output file as info message in stdout (default =    true).\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.plotGrains-Tuple{Granular.Simulation}",
    "page": "Public API",
    "title": "Granular.plotGrains",
    "category": "method",
    "text": "plotGrains(simulation, [filetype, gnuplot_terminal, verbose])\n\nPlot the grains using Gnuplot and save the figure to disk.\n\nArguments\n\nsimulation::Simulation: the simulation object containing the grains.\nfiletype::String: the output file type (default = \"png\").\ngnuplot_terminal::String: the gnuplot output terminal to use (default =   \"png crop size 1200,1200\").\nplot_interactions::Bool: show grain-grain interactions in the plot.\nverbose::String: show output file as info message in stdout (default =    true).\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.printGrainInfo-Tuple{Granular.GrainCylindrical}",
    "page": "Public API",
    "title": "Granular.printGrainInfo",
    "category": "method",
    "text": "printGrainInfo(grain::GrainCylindrical)\n\nPrints the contents of an grain to stdout in a formatted style.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.printMemoryUsage-Tuple{Granular.Simulation}",
    "page": "Public API",
    "title": "Granular.printMemoryUsage",
    "category": "method",
    "text": "printMemoryUsage(sim::Simulation)\n\nShows the memory footprint of the simulation object.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.randpower",
    "page": "Public API",
    "title": "Granular.randpower",
    "category": "function",
    "text": "randpower([nvals], [distribution_power], [min_val], [max_val])\n\nReturns one or more random numbers from a power-law probability distribution.\n\nArguments\n\ndims::Any: the dimensions of random values (default = 1)\ndistribution_power::Number: the distribution power (default = 1.)\nmin_val::Number: the lower bound of the distribution range (default = 0.)\nmax_val::Number: the upper bound of the distribution range (default = 1.)\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.readOceanGridNetCDF-Tuple{String}",
    "page": "Public API",
    "title": "Granular.readOceanGridNetCDF",
    "category": "method",
    "text": "Read NetCDF file with ocean supergrid information generated by MOM6 (e.g.   ocean_hrid.nc) from disk and return as Ocean data structure.  This file is  located in the simulation INPUT/ subdirectory.\n\nReturns\n\nxh::Array{Float64, 2}: Longitude for cell centers [deg]\nyh::Array{Float64, 2}: Latitude for cell centers [deg]\nxq::Array{Float64, 2}: Longitude for cell corners [deg]\nyq::Array{Float64, 2}: Latitude for cell corners [deg]\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.readOceanNetCDF-Tuple{String,String}",
    "page": "Public API",
    "title": "Granular.readOceanNetCDF",
    "category": "method",
    "text": "Read ocean NetCDF files generated by MOM6 from disk and return as Ocean data  structure.\n\nArguments\n\nvelocity_file::String: path to NetCDF file containing ocean velocities,    etc., (e.g. prog__####_###.nc).\ngrid_file::String: path to NetCDF file containing ocean super-grid    information (typically INPUT/ocean_hgrid.nc).\nregular_grid::Bool=false: true if the grid is regular (all cells   equal and grid is Cartesian) or false (default).\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.readOceanStateNetCDF-Tuple{String}",
    "page": "Public API",
    "title": "Granular.readOceanStateNetCDF",
    "category": "method",
    "text": "Read NetCDF file with ocean state generated by MOM6 (e.g.  prog__####_###.nc  or ########.ocean_month.nc) from disk and return time stamps, velocity fields,  layer thicknesses, interface heights, and vertical coordinates.\n\nReturns\n\ntime::Vector{Float64}: Time [s]\nu::Array{Float64, 2}: Cell corner zonal velocity [m/s],   dimensions correspond to placement in [xq, yq, zl, time]\nv::Array{Float64, 2}: Cell corner meridional velocity [m/s],   dimensions correspond to placement in [xq, yq, zl, time]\nh::Array{Float64, 2}: layer thickness [m], dimensions correspond to    placement in [xh, yh, zl, time]\ne::Array{Float64, 2}: interface height relative to mean sea level [m],     dimensions correspond to placement in [xh, yh, zi, time]\nzl::Vector{Float64}: layer target potential density [kg m^-3]\nzi::Vector{Float64}: interface target potential density [kg m^-3]\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.readSimulation-Tuple{Granular.Simulation}",
    "page": "Public API",
    "title": "Granular.readSimulation",
    "category": "method",
    "text": "readSimulation(simulation::Simulation;\n               step::Integer = -1,\n               verbose::Bool = true)\n\nRead the simulation state from disk and return as new simulation object.\n\nArguments\n\nsimulation::Simulation: use the simulation.id to determine the file name   to read from, and read information from the file into this object.\nstep::Integer=-1: attempt to read this output file step. At its default   value (-1), the function will try to read the latest file, determined by   calling readSimulationStatus.\nverbose::Bool=true: confirm to console that the file has been read.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.readSimulation-Tuple{String}",
    "page": "Public API",
    "title": "Granular.readSimulation",
    "category": "method",
    "text": "readSimulation(filename::String=\"\";\n               verbose::Bool=true)\n\nReturn Simulation content read from disk using the JLD2 format.\n\nArguments\n\nfilename::String: path to file on disk containing the simulation   information.\nverbose::Bool=true: confirm to console that the file has been read.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.readSimulationStatus-Tuple{String}",
    "page": "Public API",
    "title": "Granular.readSimulationStatus",
    "category": "method",
    "text": "readSimulationStatus(simulation_id[, folder, verbose])\n\nRead the current simulation status from disk (<sim.id>/<sim.id>.status.txt) and return the last output file number.\n\nArguments\n\nsimulation_id::String: the simulation identifying string.\nfolder::String=\".\": the folder in which to search for the status file.\nverbose::Bool=true: show simulation status in console.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.reflectGrainsFromImpermeableBoundaries!-Tuple{Granular.Simulation}",
    "page": "Public API",
    "title": "Granular.reflectGrainsFromImpermeableBoundaries!",
    "category": "method",
    "text": "reflectGrainsFromImpermeableBoundaries!(simulation::Simulation)\n\nIf the ocean or atmosphere grids are impermeable, reflect grain trajectories by reversing the velocity vectors normal to the boundary.  This function is to be called after temporal integration of the grain positions.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.regularPacking!-Tuple{Granular.Simulation,Array{Int64,1},Real,Real}",
    "page": "Public API",
    "title": "Granular.regularPacking!",
    "category": "method",
    "text": "regularPacking!(simulation, n, r_min, r_max[, tiling, padding_factor,\n                size_distribution, size_distribution_parameter, seed])\n\nCreate a grid-based regular packing with grain numbers along each axis specified by the n vector.\n\nArguments\n\nsimulation::Simulation: simulation object where the grains are inserted,   preferably not containing prior grains.\nn::Vector{Integer}: 2-element vector determining number of grains along the   x and y axes.\nr_min::Real: minimum desired grain radius.\nr_max::Real: maximum desired grain radius.\ntiling::String: the packing method to use, valid values are \"square\"   (default) and \"triangular\" (see   Wikipedia).\npadding_factor::Real: percentage-wise padding around each grain to allow for   random perturbations to grain position (default = 0.0).\norigo::Vector{Real}: spatial offset for the packing (default [0.0, 0.0]).\nsize_distribution::String: grain-size distribution to sample. Valid values   are \"powerlaw\" and \"uniform\".\nsize_distribution_parameter::Real: parameter to pass to the grain-size   distribution generating function.\nseed::Integer: seed value to the pseudo-random number generator.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.removeSimulationFiles-Tuple{Granular.Simulation}",
    "page": "Public API",
    "title": "Granular.removeSimulationFiles",
    "category": "method",
    "text": "removeSimulationFiles(simulation[, folder])\n\nRemove all simulation output files from the specified folder.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.render-Tuple{Granular.Simulation}",
    "page": "Public API",
    "title": "Granular.render",
    "category": "method",
    "text": "render(simulation[, pvpython, images, animation])\n\nWrapper function which calls writeParaviewPythonScript(...) and executes it from the shell using the supplied pvpython argument.\n\nArguments\n\nsimulation::Simulation: simulation object containing the grain data.\npvpython::String: path to the pvpython executable to use.  By default, the   script uses the pvpython in the system PATH.\nimages::Bool: render images to disk (default: true)\ngif::Bool: merge images as GIF and save to disk (default: false, requires   images=true)\nanimation::Bool: render animation as movie to disk (default: false). If   ffmpeg is available on the system, the .avi file is converted to .mp4.\ntrim::Bool: trim images in animated sequence (default: true)\nreverse::Bool: if images=true additionally render reverse-animated gif   (default: false)\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.reportGridBoundaryConditions-Tuple{Any}",
    "page": "Public API",
    "title": "Granular.reportGridBoundaryConditions",
    "category": "method",
    "text": "reportGridBoundaryConditions(grid)\n\nReport the boundary conditions for the grid to the console.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.reportSimulationTimeToStdout-Tuple{Granular.Simulation}",
    "page": "Public API",
    "title": "Granular.reportSimulationTimeToStdout",
    "category": "method",
    "text": "Prints the current simulation time and total time to standard out\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.resetTime!-Tuple{Granular.Simulation}",
    "page": "Public API",
    "title": "Granular.resetTime!",
    "category": "method",
    "text": "resetTime!(simulation)\n\nReset the current time to zero, and reset output file counters in order to restart a simulation.  This function does not overwrite the time step (Simulation.time_step), the output file interval (Simulation.file_time_step), or the total simulation time (Simulation.time_total).\n\nArguments\n\nsimulation::Simulation: the simulation object for which to reset the   temporal parameters.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.run!-Tuple{Granular.Simulation}",
    "page": "Public API",
    "title": "Granular.run!",
    "category": "method",
    "text": "run!(simulation[,\n     verbose::Bool = true,\n     status_interval = 100.,\n     show_file_output = true,\n     single_step = false,\n     temporal_integration_method = \"Three-term Taylor\"],\n     write_jld2 = false)\n\nRun the simulation through time until simulation.time equals or exceeds  simulatim.time_total.  This function requires that all grains are added to  the simulation and that the length of the computational time step is adjusted  accordingly.\n\nThe function will search for contacts, determine the force balance on each ice  floe, and integrate all kinematic degrees of freedom accordingly.  The temporal  integration is explicit and of length simulation.time_step.  This function  will write VTK files to disk in the intervals simulation.file_time_step by the  function writeVTK.  If this value is negative, no output files will be written  to disk.\n\nArguments\n\nsimulation::Simulation: the simulation to run (object is modified)\nverbose::Bool=true: show verbose information during the time loop\nstatus_interval::Bool=true: show verbose information during the time loop\nshow_file_output::Bool=true: report to stdout when output file is written\nsingle_step::Bool=false: run simulation for a single time step only.  If    this causes simulation.time to exceed simulation.time_total, the latter    is increased accordingly.\ntemporal_integration_method::String=\"Three-term Taylor\": type of integration    method to use.  See updateGrainKinematics for details.\nwrite_jld2::Bool=false: write simulation state to disk as JLD2 files (see    Granular.writeSimulation(...) whenever saving VTK output.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.setBodyForce!-Tuple{Granular.GrainCylindrical,Array{Float64,1}}",
    "page": "Public API",
    "title": "Granular.setBodyForce!",
    "category": "method",
    "text": "setBodyForce!(grain, force)\n\nSet the value of the external body force on a grain.\n\nArguments\n\ngrain::GrainCylindrical: the grain to set the body force for.\nforce::Vector{Float64}: a vector of force [N]\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.setCurrentTime!-Tuple{Granular.Simulation,Float64}",
    "page": "Public API",
    "title": "Granular.setCurrentTime!",
    "category": "method",
    "text": "setCurrentTime!(simulation::Simulation, t::Float64)\n\nSets the current simulation time of the simulation object to t, with  parameter value checks.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.setGridBoundaryConditions!",
    "page": "Public API",
    "title": "Granular.setGridBoundaryConditions!",
    "category": "function",
    "text": "setGridBoundaryConditions!(grid, grid_face, mode)\n\nSet boundary conditions for the granular phase at the edges of Ocean or Atmosphere grids.  The target boundary can be selected through the grid_face argument, or the same boundary condition can be applied to all grid boundaries at once.\n\nWhen the center coordinate of grains crosses an inactive boundary (mode = \"inactive\"), the grain is disabled (GrainCylindrical.enabled = false).  This keeps the grain in memory, but stops it from moving or interacting with other grains.  By default, all boundaries are inactive.\n\nIf the center coordinate of a grain crosses a periodic boundary (mode = periodic), the grain is repositioned to the opposite side of the model domain. Grains can interact mechanically across the periodic boundary.\n\nArguments\n\ngrid::Any: Ocean or Atmosphere grid to apply the boundary condition to.\ngrid_face::String: Grid face to apply the boundary condition to.  Valid   values are any combination and sequence of \"west\" (-x), \"south\" (-y),   \"east\" (+x), \"north\" (+y), or simply any combination of \"-x\", \"+x\",   \"-y\", and \"+y\".  The specifiers may be delimited in any way.   Also, and by default, all boundaries can be selected with \"all\" (-x, -y,   +x, +y), which overrides any other face selection.\nmode::String: Boundary behavior, accepted values are \"inactive\",   \"periodic\", and \"impermeable\".  You cannot specify more than one mode at   a time, so if several modes are desired as boundary conditions for the grid,   several calls to this function should be made.\nverbose::Bool: Confirm boundary conditions by reporting values to console.\n\nExamples\n\nSet all boundaries for the ocean grid to be periodic:\n\nsetGridBoundaryConditions!(ocean, \"periodic\", \"all\")\n\nSet the south-north boundaries to be inactive, but the west-east boundaries to be periodic:\n\nsetGridBoundaryConditions!(ocean, \"inactive\", \"south north\")\nsetGridBoundaryConditions!(ocean, \"periodic\", \"west east\")\n\nor specify the conditions from the coordinate system axes:\n\nsetGridBoundaryConditions!(ocean, \"inactive\", \"-y +y\")\nsetGridBoundaryConditions!(ocean, \"periodic\", \"-x +x\")\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.setMaximumNumberOfContactsPerGrain!-Tuple{Granular.Simulation,Int64}",
    "page": "Public API",
    "title": "Granular.setMaximumNumberOfContactsPerGrain!",
    "category": "method",
    "text": "setMaximumNumberOfContactsPerGrain!(simulation, number_of_contacts)\n\nChange the maximum number of contacts per grain, which changes simulation.Nc_max and reallocates memory for each grain. Larger values require more memory, but allow simulation of wider grain-size distributions. The default value is a maximum of 32 contacts per grain, which is sufficient for most practical purposes.\n\nArguments\n\nsimulation::Simulation: the Simulation object to modify\nnumber_of_contacts::Int: the maximum number of contacts per grain to allow.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.setOutputFileInterval!-Tuple{Granular.Simulation,Float64}",
    "page": "Public API",
    "title": "Granular.setOutputFileInterval!",
    "category": "method",
    "text": "setOutputFileInterval!(simulation::Simulation, t::Float64)\n\nSets the simulation-time interval between output files are written to disk.  If  this value is zero or negative, no output files will be written.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.setTimeStep!-Tuple{Granular.Simulation}",
    "page": "Public API",
    "title": "Granular.setTimeStep!",
    "category": "method",
    "text": "setTimeStep!(simulation[, epsilon, verbose])\n\nFind the computational time step length suitable given the grain radii, contact stiffnesses, and grain density. Uses the scheme by Radjaii et al. 2011.\n\nArguments\n\nsimulation::Simulation: the simulation object to modify.\nepsilon::Float64=0.07: safety factor in the time step scheme. Larger values   are more likely to cause unstable behavior than smaller values.\nverbose::Bool=true: display the resultant time step in the console.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.setTotalTime!-Tuple{Granular.Simulation,Float64}",
    "page": "Public API",
    "title": "Granular.setTotalTime!",
    "category": "method",
    "text": "setTotalTime!(simulation::Simulation, t::Float64)\n\nSets the total simulation time of the simulation object to t, with parameter  value checks.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.sortGrainsInGrid!-Tuple{Granular.Simulation,Any}",
    "page": "Public API",
    "title": "Granular.sortGrainsInGrid!",
    "category": "method",
    "text": "Find grain positions in grid, based on their center positions.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.status",
    "page": "Public API",
    "title": "Granular.status",
    "category": "function",
    "text": "status(folder[, loop, t_int, colored_output, write_header, render)\n\nShows the status of all simulations with output files written under the  specified folder, which is the current working directory by default.\n\nArguments\n\nfolder::String=\".\": directory (including subdirectories) to scan for     simulation output. loop::Bool=false: continue printing the status every t_int seconds. t_int::Int=10: interval between status updates when loop=true. colored_output::Bool=true: display output with colors. write_header::Bool=true: write header line explaining the data. visualize::Bool=false: render the simulation output. Does not work well whenloop=true`, as the script regenerates (and overwrites)  all output graphics     on every call.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.totalGrainKineticRotationalEnergy-Tuple{Granular.Simulation}",
    "page": "Public API",
    "title": "Granular.totalGrainKineticRotationalEnergy",
    "category": "method",
    "text": "totalGrainKineticRotationalEnergy(simulation)\n\nReturns the sum of rotational kinetic energies of all grains in a simulation\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.totalGrainKineticTranslationalEnergy-Tuple{Granular.Simulation}",
    "page": "Public API",
    "title": "Granular.totalGrainKineticTranslationalEnergy",
    "category": "method",
    "text": "totalGrainKineticTranslationalEnergy(simulation)\n\nReturns the sum of translational kinetic energies of all grains in a  simulation\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.totalGrainThermalEnergy-Tuple{Granular.Simulation}",
    "page": "Public API",
    "title": "Granular.totalGrainThermalEnergy",
    "category": "method",
    "text": "totalGrainKineticTranslationalEnergy(simulation)\n\nReturns the sum of thermal energy of all grains in a simulation\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.updateGrainKinematics!-Tuple{Granular.Simulation}",
    "page": "Public API",
    "title": "Granular.updateGrainKinematics!",
    "category": "method",
    "text": "updateGrainKinematics!(simulation::Simulation[,\n                         method::String = \"Three-term Taylor\"])\n\nUpdate the grain kinematic parameters using a temporal integration scheme, the current force and torque balance, and gravitational acceleration.  If the simulation contains a grid with periodic boundaries, affected grain positions are adjusted accordingly.\n\nArguments\n\nsimulation::Simulation: update the grain positions in this object    according to temporal integration of length simulation.time_step.\nmethod::String = \"Three-term Taylor\": the integration method to use.     Available methods are \"Two-term Taylor\" and \"Three-term Taylor\".  The    three-term Taylor expansion is slightly more computationally expensive than    the two-term Taylor expansion, but offers an order-of-magnitude increase in    precision of grain positions.  The two-term expansion can obtain similar    precision if the time step is 1/10 the length.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.updateGrainKinematicsThreeTermTaylor!-Tuple{Granular.GrainCylindrical,Granular.Simulation}",
    "page": "Public API",
    "title": "Granular.updateGrainKinematicsThreeTermTaylor!",
    "category": "method",
    "text": "Use a three-term Taylor expansion for integrating the kinematic degrees of  freedom for a grain.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.updateGrainKinematicsTwoTermTaylor!-Tuple{Granular.GrainCylindrical,Granular.Simulation}",
    "page": "Public API",
    "title": "Granular.updateGrainKinematicsTwoTermTaylor!",
    "category": "method",
    "text": "Use a two-term Taylor expansion for integrating the kinematic degrees of freedom  for a grain.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.updateWallKinematics!-Tuple{Granular.Simulation}",
    "page": "Public API",
    "title": "Granular.updateWallKinematics!",
    "category": "method",
    "text": "updateWallKinematics!(simulation::Simulation[,\n                      method::String = \"Three-term Taylor\"])\n\nUpdate the wall kinematic parameters using a temporal integration scheme, the current force and torque balance, and gravitational acceleration.  If the simulation contains a grid with periodic boundaries, affected wall positions are adjusted accordingly.\n\nArguments\n\nsimulation::Simulation: update the wall positions in this object    according to temporal integration of length simulation.time_step.\nmethod::String = \"Three-term Taylor\": the integration method to use.     Available methods are \"Two-term Taylor\" and \"Three-term Taylor\".  The    three-term Taylor expansion is slightly more computationally expensive than    the two-term Taylor expansion, but offers an order-of-magnitude increase in    precision of wall positions.  The two-term expansion can obtain similar    precision if the time step is 1/10 the length.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.updateWallKinematicsThreeTermTaylor!-Tuple{Granular.WallLinearFrictionless,Granular.Simulation}",
    "page": "Public API",
    "title": "Granular.updateWallKinematicsThreeTermTaylor!",
    "category": "method",
    "text": "updateWallKinematicsThreeTermTaylor!(wall, simulation)\n\nUse a two-term Taylor expansion for integrating the kinematic degrees of freedom  for a wall.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.updateWallKinematicsTwoTermTaylor!-Tuple{Granular.WallLinearFrictionless,Granular.Simulation}",
    "page": "Public API",
    "title": "Granular.updateWallKinematicsTwoTermTaylor!",
    "category": "method",
    "text": "updateWallKinematicsTwoTermTaylor!(wall, simulation)\n\nUse a two-term Taylor expansion for integrating the kinematic degrees of freedom  for a wall.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.vecTo3d-Tuple{Any}",
    "page": "Public API",
    "title": "Granular.vecTo3d",
    "category": "method",
    "text": "function vecTo3d(input, fill)\n\nConvert a scalar or 2d vector to 3d by filling the missing component with the value fill. The returned 3-component vector is a Vector (or 1d Array) of the same type as the input.\n\nArguments\n\ninput: a scalar or two-component vector.\nfill::Real: value to use for third\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.writeGrainInteractionVTK-Tuple{Granular.Simulation,String}",
    "page": "Public API",
    "title": "Granular.writeGrainInteractionVTK",
    "category": "method",
    "text": "writeGrainInteractionVTK(simulation::Simulation,\n                           filename::String;\n                           verbose::Bool=false)\n\nSaves grain interactions to .vtp files for visualization with VTK, for  example in Paraview.  Convert Cell Data to Point Data and use with Tube filter.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.writeGrainVTK-Tuple{Granular.Simulation,String}",
    "page": "Public API",
    "title": "Granular.writeGrainVTK",
    "category": "method",
    "text": "Write a VTK file to disk containing all grains in the simulation in an  unstructured mesh (file type .vtu).  These files can be read by ParaView and  can be visualized by applying a Glyph filter.  This function is called by  writeVTK().\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.writeParaviewPythonScript-Tuple{Granular.Simulation}",
    "page": "Public API",
    "title": "Granular.writeParaviewPythonScript",
    "category": "method",
    "text": "function writeParaviewPythonScript(simulation,                                    [filename, folder, vtk_folder, verbose])\n\nCreate a \".py\" script for visualizing the simulation VTK files in Paraview. The script can be run from the command line with pvpython (bundled with Paraview), or from the interactive Python shell inside Paraview.\n\nArguments\n\nsimulation::Simulation: input simulation file containing the data.\nfilename::String: output file name for the Python script. At its default   (blank) value, the script is named after the simulation id (simulation.id).\nfolder::String: output directory, current directory the default.\nvtk_folder::String: directory containing the VTK output files, by default   points to the full system path equivalent to \"./<simulation.id>/\".\nsave_animation::Bool: make the generated script immediately save a rendered   animation to disk when the \".py\" script is called.\nverbose::Bool: show diagnostic information during\n\nfunction call, on by     default.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.writeSimulation-Tuple{Granular.Simulation}",
    "page": "Public API",
    "title": "Granular.writeSimulation",
    "category": "method",
    "text": "writeSimulation(simulation::Simulation;\n                     filename::String=\"\",\n                     folder::String=\".\",\n                     verbose::Bool=true)\n\nWrite all content from Simulation to disk in JLD2 format.  If the filename  parameter is not specified, it will be saved to a subdirectory under the current  directory named after the simulation identifier simulation.id.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.writeSimulationStatus-Tuple{Granular.Simulation}",
    "page": "Public API",
    "title": "Granular.writeSimulationStatus",
    "category": "method",
    "text": "writeSimulationStatus(simulation::Simulation;\n                      folder::String=\".\",\n                      verbose::Bool=false)\n\nWrite current simulation status to disk in a minimal txt file.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.writeVTK-Tuple{Granular.Simulation}",
    "page": "Public API",
    "title": "Granular.writeVTK",
    "category": "method",
    "text": "Write a VTK file to disk containing all grains in the simulation in an  unstructured mesh (file type .vtu).  These files can be read by ParaView and  can be visualized by applying a Glyph filter.\n\nIf the simulation contains an Ocean data structure, it\'s contents will be  written to separate .vtu files.  This can be disabled by setting the argument  ocean=false.  The same is true for the atmosphere.\n\nThe VTK files will be saved in a subfolder named after the simulation.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.zeroForcesAndTorques!-Tuple{Granular.Simulation}",
    "page": "Public API",
    "title": "Granular.zeroForcesAndTorques!",
    "category": "method",
    "text": "Sets the force and torque values of all grains and dynamic walls to zero.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Granular.zeroKinematics!-Tuple{Granular.Simulation}",
    "page": "Public API",
    "title": "Granular.zeroKinematics!",
    "category": "method",
    "text": "zeroKinematics!(simulation)\n\nSet all grain forces, torques, accelerations, and velocities (linear and rotational) to zero in order to get rid of all kinetic energy.\n\n\n\n\n\n"
},

{
    "location": "lib/public/#Public-Interface-1",
    "page": "Public API",
    "title": "Public Interface",
    "category": "section",
    "text": "Modules = [Granular]\nPublic = true\nPrivate = false"
},

{
    "location": "lib/internals/#",
    "page": "Internals",
    "title": "Internals",
    "category": "page",
    "text": ""
},

{
    "location": "lib/internals/#Package-internal-documentation-1",
    "page": "Internals",
    "title": "Package-internal documentation",
    "category": "section",
    "text": "This page lists all the documented internals of the Granular module."
},

{
    "location": "lib/internals/#Index-1",
    "page": "Internals",
    "title": "Index",
    "category": "section",
    "text": "A list of all internal documentation sorted by module.Pages = [\"internals.md\"]"
},

{
    "location": "lib/internals/#Internal-Interface-1",
    "page": "Internals",
    "title": "Internal Interface",
    "category": "section",
    "text": "`autodocs Modules = Granular Public = false Private = true a"
},

{
    "location": "lib/internals/#",
    "page": "Package-internal documentation",
    "title": "Package-internal documentation",
    "category": "page",
    "text": ""
},

{
    "location": "lib/internals/#Package-internal-documentation-1",
    "page": "Package-internal documentation",
    "title": "Package-internal documentation",
    "category": "section",
    "text": "This page lists all the documented internals of the Granular module."
},

{
    "location": "lib/internals/#Index-1",
    "page": "Package-internal documentation",
    "title": "Index",
    "category": "section",
    "text": "A list of all internal documentation sorted by module.Pages = [\"internals.md\"]"
},

{
    "location": "lib/internals/#Internal-Interface-1",
    "page": "Package-internal documentation",
    "title": "Internal Interface",
    "category": "section",
    "text": "`autodocs Modules = Granular Public = false Private = true a"
},

]}
