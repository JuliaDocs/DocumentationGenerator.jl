var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Homebrew.jl-(OSX-only)-1",
    "page": "Readme",
    "title": "Homebrew.jl (OSX only)",
    "category": "section",
    "text": "(Image: Build Status)Homebrew.jl sets up a homebrew installation inside your Julia package directory.  It uses Homebrew to provide specialized binary packages to satisfy dependencies for other Julia packages, without the need for a compiler or other development tools; it is completely self-sufficient.Package authors with dependencies that want binaries distributed in this manner should open an issue here for inclusion into the package database.NOTE: If you have MacPorts installed, and are seeing issues with git or curl complaining about certificates, try to update the the curl and curl-ca-bundle packages before using Homebrew.jl. From the terminal, run:port selfupdate\nport upgrade curl curl-ca-bundle"
},

{
    "location": "#Usage-(Users)-1",
    "page": "Readme",
    "title": "Usage (Users)",
    "category": "section",
    "text": "As a user, you ideally shouldn\'t ever have to use Homebrew directly, short of installing it via Pkg.add(\"Homebrew\"). However, there is a simple to use interface for interacting with the Homebrew package manager:Homebrew.add(\"pkg\") will install pkg, note that if you want to install a package from a non-default tap, you can do so via Homebrew.add(\"user/tap/formula\").  An example of this is installing the metis4 formula from the Homebrew/science tap via Homebrew.add(\"homebrew/science/metis4\").\nHomebrew.rm(\"pkg\") will uninstall pkg\nHomebrew.update() will update the available formulae for installation and upgrade installed packages if a newer version is available\nHomebrew.list() will list all installed packages and versions\nHomebrew.installed(\"pkg\") will return a Bool denoting whether or not pkg is installed\nHomebrew.prefix() will return the prefix that all packages are installed to"
},

{
    "location": "#Usage-(Package-Authors)-1",
    "page": "Readme",
    "title": "Usage (Package Authors)",
    "category": "section",
    "text": "As a package author, the first thing to do is to write/find a Homebrew formula for whatever package you wish to create.  The easiest way to tell if the binary will work out-of-the-box is Homebrew.add() it.  Formulae from the default homebrew/core tap need no prefix, but if you are installing something from another tap, you need to prefix it with the appropriate tap name. For example, to install metis4 from the homebrew/science tap, you would run Homebrew.add(\"homebrew/science/metis4\"). Programs installed to <prefix>/bin and libraries installed to <prefix>/lib will automatically be availble for run()\'ing and dlopen()\'ing.If that doesn\'t \"just work\", there may be some special considerations necessary for your piece of software. Open an issue here with a link to your formula and we will discuss what the best approach for your software is. To see examples of formulae we have already included for special usage, peruse the homebrew-juliadeps repository.To have your Julia package automatically install these precompiled binaries, Homebrew.jl offers a BinDeps provider which can be accessed as Homebrew.HB.  Simply declare your dependency on Homebrew.jl via a @osx Homebrew in your REQUIRE files, create a BinDeps library_dependency and state that Homebrew provides that dependency:using BinDeps\n@BinDeps.setup\nnettle = library_dependency(\"nettle\", aliases = [\"libnettle\",\"libnettle-4-6\"])\n\n...\n# Wrap in @osx_only to avoid non-OSX users from erroring out\n@osx_only begin\n    using Homebrew\n    provides( Homebrew.HB, \"nettle\", nettle, os = :Darwin )\nend\n\n@BinDeps.install Dict(:nettle => :nettle)Then, the Homebrew package will automatically download the requisite bottles for any dependencies you state it can provide.  This example garnered from the build.jl file from Nettle.jl package."
},

{
    "location": "#Why-Package-Authors-should-use-Homebrew.jl-1",
    "page": "Readme",
    "title": "Why Package Authors should use Homebrew.jl",
    "category": "section",
    "text": "A common question is why bother with Homebrew formulae and such when a package author could simply compile the .dylib\'s needed by their package, upload them somewhere and download them to a user\'s installation somewhere.  There are multiple reasons, and although they are individually surmountable Homebrew offers a simpler (and standardized) method of solving many of these problems automatically:On OSX shared libraries link via full paths.  This means that unless you manually alter the path inside of a .dylib or binary to have an @rpath or @executable_path in it, the path will be attempting to point to the exact location on your harddrive that the shared library was found at compile-time.  This is not an issue if all libraries linked to are standard system libraries, however as soon as you wish to link to a library in a non-standard location you must alter the paths.  Homebrew does this for you automatically, rewriting the paths during installation via install_name_tool.  To see the paths embedded in your libraries and executable files, run otool -L <file>.\nDependencies on other libraries are handled gracefully by Homebrew.  If your package requires some heavy-weight library such as cairo, glib, etc... Homebrew already has those libraries ready to be installed for you.\nReleasing new versions of binaries can be difficult.  Homebrew.jl has builtin mechanisms for upgrading all old packages, and even detecting when a binary of the same version number has a new revision (e.g. if an old binary had an error embedded inside it)."
},

{
    "location": "#Why-doesn\'t-this-package-use-my-system-wide-Homebrew-installation?-1",
    "page": "Readme",
    "title": "Why doesn\'t this package use my system-wide Homebrew installation?",
    "category": "section",
    "text": "Some of the formulae in the staticfloat/juliadeps tap are specifically patched to work with Julia. Some of these patches have not (or will not) be merged back into Homebrew mainline, so we don\'t want to conflict with any packages the user may or may not have installed.Users can modify Homebrew\'s internal workings, so it\'s better to have a known good Homebrew installation than to risk bug reports from users that have unknowingly merged patches into Homebrew that break functionality we require.If you already have something installed, and it is usable, (e.g. BinDeps can load it and it passes any quick internal tests the Package authors have defined) then Homebrew.jl won\'t try to install it. BinDeps always checks to see if there is a library in the current load path that satisfies the requirements setup by package authors, and if there is, it doesn\'t build anything."
},

{
    "location": "#Advanced-usage-1",
    "page": "Readme",
    "title": "Advanced usage",
    "category": "section",
    "text": "Homebrew.jl provides a convenient wrapper around most of the functionality of Homebrew, however there are rare cases where access to the full suite of brew commands is necessary.  To facilitate this, users that are familiar with the brew command set can use Homebrew.brew() to directly feed commands to the brew binary within Homebrew.jl.  Example usage:julia> using Homebrew\n\njulia> Homebrew.brew(`info staticfloat/juliadeps/libgfortran`)\nstaticfloat/juliadeps/libgfortran: stable 6.2 (bottled)\nhttp://gcc.gnu.org/wiki/GFortran\n/Users/sabae/.julia/v0.5/Homebrew/deps/usr/Cellar/libgfortran/6.2 (9 files, 2M) *\n  Poured from bottle on 2016-11-21 at 13:14:33\nFrom: https://github.com/staticfloat/homebrew-juliadeps/blob/master/libgfortran.rb\n==> Dependencies\nBuild: gcc ✘"
},

{
    "location": "autodocs/#Homebrew.BrewPkg",
    "page": "Docstrings",
    "title": "Homebrew.BrewPkg",
    "category": "type",
    "text": "BrewPkg\n\nA simple type to give us some nice ways of representing our packages to the user\n\nIt contains important information such as the name of the package, the tap it came from, the version of the package and whether it was translated or not\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Base.show-Tuple{IO,Homebrew.BrewPkg}",
    "page": "Docstrings",
    "title": "Base.show",
    "category": "method",
    "text": "show(io::IO, b::BrewPkg)\n\nWrites a BrewPkg to io, showing tap, name and version number\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Homebrew.__init__-Tuple{}",
    "page": "Docstrings",
    "title": "Homebrew.__init__",
    "category": "method",
    "text": "__init__()\n\nInitialization function.  Calls install_brew() to ensure that everything we need is downloaded/installed, then calls update_env() to set the environment properly so that packages being installed can find their binaries.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Homebrew.add-Tuple{Union{AbstractString, BrewPkg}}",
    "page": "Docstrings",
    "title": "Homebrew.add",
    "category": "method",
    "text": "add(pkg::Union{AbstractString,BrewPkg}; verbose::Bool=false, keep_translations::Bool=false)\n\nInstall package pkg and all dependencies, using bottles only, unlinking any previous versions if necessary, and linking the new ones in place. Will attempt to install non-relocatable bottles from Homebrew/core by translating formulae and forcing cellar :any into the formulae.\n\nAutomatically deletes all translated formulae before adding formulae and after, unless keep_translations is set to true.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Homebrew.add_flags-Tuple{Cmd,Dict{Cmd,Bool}}",
    "page": "Docstrings",
    "title": "Homebrew.add_flags",
    "category": "method",
    "text": "add_flags(cmd::AbstractString, flags::Dict{String,Bool})\n\nGiven a mapping of flags to Bools, return [cmd, flag1, flag2...] if the respective Bools are true.  Useful for adding --verbose and --force flags onto the end of commands\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Homebrew.brew-Tuple{Cmd}",
    "page": "Docstrings",
    "title": "Homebrew.brew",
    "category": "method",
    "text": "brew(cmd::Cmd; no_stderr=false, no_stdout=false, verbose=false, force=false, quiet=false)\n\nRun command cmd using the configured brew binary, optionally suppressing stdout and stderr, and providing flags such as --verbose to the brew binary.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Homebrew.brewchomp-Tuple{Cmd}",
    "page": "Docstrings",
    "title": "Homebrew.brewchomp",
    "category": "method",
    "text": "brewchomp(cmd::Cmd; no_stderr=false, no_stdout=false, verbose=false, force=false, quiet=false))\n\nRun command cmd using the configured brew binary, optionally suppressing stdout and stderr, and providing flags such as --verbose to the brew binary.\n\nThis function uses readchomp(), as opposed to brew() which uses run()\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Homebrew.cleanup-Tuple{}",
    "page": "Docstrings",
    "title": "Homebrew.cleanup",
    "category": "method",
    "text": "cleanup()\n\nCleans up old installed versions of formulae, as well as purging all downloaded bottles\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Homebrew.clt_installed-Tuple{}",
    "page": "Docstrings",
    "title": "Homebrew.clt_installed",
    "category": "method",
    "text": "clt_installed()\n\nChecks whether the command-line tools are installed, as reported by xcode-select\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Homebrew.delete_all_translated_formulae-Tuple{}",
    "page": "Docstrings",
    "title": "Homebrew.delete_all_translated_formulae",
    "category": "method",
    "text": "delete_all_translated_formulae(;verbose::Bool=false)\n\nDelete all translated formulae from the staticfloat/juliatranslated tap. This is useful for debugging misbehaving formulae during translation.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Homebrew.delete_translated_formula-Tuple{AbstractString}",
    "page": "Docstrings",
    "title": "Homebrew.delete_translated_formula",
    "category": "method",
    "text": "delete_translated_formula(name::AbstractString; verbose::Bool=false)\n\nDelete a translated formula from the staticfloat/juliatranslated tap.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Homebrew.deps_sorted-Tuple{Union{AbstractString, BrewPkg}}",
    "page": "Docstrings",
    "title": "Homebrew.deps_sorted",
    "category": "method",
    "text": "deps_sorted(pkg::Union{AbstractString,BrewPkg}; build_deps::Bool)\n\nReturn a sorted Vector{BrewPkg} of all dependencies (direct and indirect) such that each entry in the list appears after all of its own dependencies.\n\nIf build_deps is true include formula depependencies marked as :build.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Homebrew.deps_tree-Tuple{Union{AbstractString, BrewPkg}}",
    "page": "Docstrings",
    "title": "Homebrew.deps_tree",
    "category": "method",
    "text": "deps_tree(pkg::Union{AbstractString,BrewPkg}; build_deps::Bool=false)\n\nReturn a dictionary mapping every dependency (both direct and indirect) of pkg to a Vector{BrewPkg} of all of its dependencies.  Used in deps_sorted().\n\nIf build_deps is true include formula depependencies marked as :build.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Homebrew.direct_deps-Tuple{Union{AbstractString, BrewPkg}}",
    "page": "Docstrings",
    "title": "Homebrew.direct_deps",
    "category": "method",
    "text": "direct_deps(pkg::Union{AbstractString,BrewPkg}; build_deps::Bool=false)\n\nReturn a list of all direct dependencies of pkg as a Vector{BrewPkg} If build_deps is true include formula depependencies marked as :build.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Homebrew.download_and_unpack-Tuple{AbstractString,AbstractString}",
    "page": "Docstrings",
    "title": "Homebrew.download_and_unpack",
    "category": "method",
    "text": "download_and_unpack(url::AbstractString, target_dir::AbstractString)\n\nDownload a tarball from url and unpack it into target_dir.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Homebrew.formula_path-Tuple{Union{AbstractString, BrewPkg}}",
    "page": "Docstrings",
    "title": "Homebrew.formula_path",
    "category": "method",
    "text": "formula_path(pkg::Union{AbstractString,BrewPkg})\n\nReturns the absolute path on-disk of the given package pkg.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Homebrew.formula_tap-Tuple{AbstractString}",
    "page": "Docstrings",
    "title": "Homebrew.formula_tap",
    "category": "method",
    "text": "formula_tap(name::AbstractString)\n\nGiven a formula name, return the formula name and the tap it is from, replacing \"\" for \"Homebrew/core\", as we don\'t care about that particular prefix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Homebrew.fullname-Tuple{Homebrew.BrewPkg}",
    "page": "Docstrings",
    "title": "Homebrew.fullname",
    "category": "method",
    "text": "fullname(pkg::BrewPkg)\n\nReturn the fully-qualified name for a package, dropping \"Homebrew/core\"\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Homebrew.git_installed-Tuple{}",
    "page": "Docstrings",
    "title": "Homebrew.git_installed",
    "category": "method",
    "text": "git_installed()\n\nChecks whether git is truly installed or not, dealing with stubs in /usr/bin Also ensure that the version is new enough (e.g. >= 2.0.0.0) that it will work with git fetch --unshallow on Homebrew.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Homebrew.has_bottle-Tuple{AbstractString}",
    "page": "Docstrings",
    "title": "Homebrew.has_bottle",
    "category": "method",
    "text": "has_bottle(name::AbstractString)\n\nChecks if a given formula has a bottle at all\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Homebrew.has_relocatable_bottle-Tuple{AbstractString}",
    "page": "Docstrings",
    "title": "Homebrew.has_relocatable_bottle",
    "category": "method",
    "text": "has_relocatable_bottle(name::AbstractString)\n\nChecks to see if a given formula has a bottle that can be installed anywhere\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Homebrew.info-Tuple{AbstractString}",
    "page": "Docstrings",
    "title": "Homebrew.info",
    "category": "method",
    "text": "info(name::AbstractString)\n\nReturns information about a particular package name as a BrewPkg.  This is our basic String -> BrewPkg converter.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Homebrew.info-Union{Tuple{Array{T,1}}, Tuple{T}} where T<:AbstractString",
    "page": "Docstrings",
    "title": "Homebrew.info",
    "category": "method",
    "text": "info(names::Vector{String})\n\nFor each name in names, returns information about that particular package name as a BrewPkg.  This is our batched String -> BrewPkg converter.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Homebrew.insert_after_dependencies-Tuple{Dict,Array{Homebrew.BrewPkg,1},AbstractString}",
    "page": "Docstrings",
    "title": "Homebrew.insert_after_dependencies",
    "category": "method",
    "text": "insert_after_dependencies(tree::Dict, sorted_deps::Vector{BrewPkg}, name::AbstractString)\n\nGiven a mapping from names to dependencies in tree, and a list of sorted dependencies in sorted_deps, insert a new dependency name into sorted_deps after all dependencies of name.  If a dependency of name is not already in sorted_deps, then recursively add that dependency as well.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Homebrew.install_and_link-Tuple{Union{AbstractString, BrewPkg}}",
    "page": "Docstrings",
    "title": "Homebrew.install_and_link",
    "category": "method",
    "text": "install_and_link(pkg::Union{AbstractString,BrewPkg}; verbose=false)\n\nInstalls, and links package pkg.  Used by add().  Don\'t call manually unless you really know what you\'re doing, as this doesn\'t deal with dependencies, and so can trigger compilation when you don\'t want it to.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Homebrew.install_brew-Tuple{}",
    "page": "Docstrings",
    "title": "Homebrew.install_brew",
    "category": "method",
    "text": "install_brew()\n\nEnsures that Homebrew is installed as desired, that our basic Taps are available and that we have whatever binary tools we need, such as install_name_tool\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Homebrew.installed-Tuple{Union{AbstractString, BrewPkg}}",
    "page": "Docstrings",
    "title": "Homebrew.installed",
    "category": "method",
    "text": "installed(pkg::Union{AbstractString,BrewPkg})\n\nReturn true if the given package pkg is a directory in the Cellar, showing that it has been installed (but possibly not linked, see linked())\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Homebrew.json-Tuple{Union{AbstractString, BrewPkg}}",
    "page": "Docstrings",
    "title": "Homebrew.json",
    "category": "method",
    "text": "json(pkg::Union{AbstractString,BrewPkg})\n\nReturn the full JSON object for pkg, the result of brew info --json=v1 $pkg. If brew info fails, throws an error.  If brew info returns an empty object, (e.g. \"[]\"), this returns an empty Dict.\n\nNote that running brew info --json=v1 is somewhat expensive, so we cache the results in a global dictionary, and batching larger requests with the vectorized json() function similarly increases performance.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Homebrew.json-Union{Tuple{Array{T,1}}, Tuple{T}} where T<:AbstractString",
    "page": "Docstrings",
    "title": "Homebrew.json",
    "category": "method",
    "text": "json(names::Vector{AbstractString})\n\nFor each package name in names, return the full JSON object for name, the result of brew info --json=v1 $name, stored in a dictionary keyed by the names passed into this function. If brew info fails, throws an error. If brew info returns an empty object \"[]\", that object is represented by an empty dictionary.\n\nNote that running brew info --json=v1 is somewhat expensive, so we cache the results in a global dictionary, and batching larger requests with this function similarly increases performance.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Homebrew.link-Tuple{Union{AbstractString, BrewPkg}}",
    "page": "Docstrings",
    "title": "Homebrew.link",
    "category": "method",
    "text": "link(pkg::Union{AbstractString,BrewPkg}; verbose=false, force=true)\n\nLink package name into the global namespace, uses --force if force == true\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Homebrew.linked-Tuple{Union{AbstractString, BrewPkg}}",
    "page": "Docstrings",
    "title": "Homebrew.linked",
    "category": "method",
    "text": "linked(pkg::Union{AbstractString,BrewPkg})\n\nReturns true if the given package pkg is linked to LinkedKegs, signifying all files installed by this package have been linked into the global prefix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Homebrew.list-Tuple{}",
    "page": "Docstrings",
    "title": "Homebrew.list",
    "category": "method",
    "text": "list()\n\nReturns a list of all installed packages as a Vector{BrewPkg}\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Homebrew.outdated-Tuple{}",
    "page": "Docstrings",
    "title": "Homebrew.outdated",
    "category": "method",
    "text": "outdated()\n\nReturns a list of all installed packages that are out of date as a Vector{BrewPkg}\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Homebrew.postinstall-Tuple{Union{AbstractString, BrewPkg}}",
    "page": "Docstrings",
    "title": "Homebrew.postinstall",
    "category": "method",
    "text": "postinstall(pkg::Union{AbstractString,BrewPkg}; verbose=false)\n\nRuns brew postinstall against package pkg, useful for debugging complicated formulae when a bottle doesn\'t install right and you want to re-run postinstall.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Homebrew.prefix-Tuple{Union{AbstractString, BrewPkg}}",
    "page": "Docstrings",
    "title": "Homebrew.prefix",
    "category": "method",
    "text": "prefix(pkg::Union{AbstractString,BrewPkg})\n\nReturns the prefix for a particular package\'s latest installed version.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Homebrew.prefix-Tuple{}",
    "page": "Docstrings",
    "title": "Homebrew.prefix",
    "category": "method",
    "text": "prefix()\n\nReturns brew_prefix, the location where all Homebrew files are stored.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Homebrew.read_formula-Tuple{Union{AbstractString, BrewPkg}}",
    "page": "Docstrings",
    "title": "Homebrew.read_formula",
    "category": "method",
    "text": "read_formula(pkg::Union{AbstractString,BrewPkg})\n\nReturns the string contents of a package\'s formula.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Homebrew.refresh!-Tuple{}",
    "page": "Docstrings",
    "title": "Homebrew.refresh!",
    "category": "method",
    "text": "refresh!(;verbose=false)\n\nForcibly remove all packages and add them again.  This should only be used to fix a broken installation, normal operation should never need to use this.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Homebrew.rm-Tuple{Union{AbstractString, BrewPkg}}",
    "page": "Docstrings",
    "title": "Homebrew.rm",
    "category": "method",
    "text": "rm(pkg::Union{AbstractString,BrewPkg}; verbose::Bool=false, force::Bool=true)\n\nRemove package pkg, use --force if force == true\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Homebrew.rm-Union{Tuple{Array{T,1}}, Tuple{T}} where T<:Union{AbstractString, BrewPkg}",
    "page": "Docstrings",
    "title": "Homebrew.rm",
    "category": "method",
    "text": "rm(pkgs::Vector{String or BrewPkg}; verbose::Bool=false, force::Bool=true)\n\nRemove packages pkgs, use --force if force == true\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Homebrew.tap-Tuple{AbstractString}",
    "page": "Docstrings",
    "title": "Homebrew.tap",
    "category": "method",
    "text": "tap(tap_name::AbstractString; full::Bool=true, verbose::Bool=false)\n\nRuns brew tap $tap_name if the tap does not already exist.  If full is true adds the flag --full to clone a full tap instead of Homebrew\'s default shallow.\n\nIf git is not available, manually tap it with curl and tar.  This tap will be unshallowed at the next brew update when git is available.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Homebrew.tap_exists-Tuple{AbstractString}",
    "page": "Docstrings",
    "title": "Homebrew.tap_exists",
    "category": "method",
    "text": "tap_exists(tap_name::AbstractString)\n\nCheck to see if a tap called tap_name (ex: \"staticfloat/juliadeps\") exists\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Homebrew.translate_formula-Tuple{Union{AbstractString, BrewPkg}}",
    "page": "Docstrings",
    "title": "Homebrew.translate_formula",
    "category": "method",
    "text": "translate_formula(pkg::Union{AbstractString,BrewPkg}; verbose::Bool=false)\n\nGiven a formula name, return the fully-qualified name of a translated formula if it is translatable.  Translation copies a Homebrew/core formula to staticfloat/juliatranslated, adding appropriate cellar :any and root_url lines to any bottle stanzas.  This allows us to transparently install non-cellar-any formulae from Homebrew/core.\n\nThis function is fairly strict, bailing out at every possible opportunity, and returning the original name.  If a formula is non-translatable, it\'s possible it needs manual intervention, check out the staticfloat/juliadeps tap for examples.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Homebrew.unlink-Tuple{Union{AbstractString, BrewPkg}}",
    "page": "Docstrings",
    "title": "Homebrew.unlink",
    "category": "method",
    "text": "unlink(pkg::Union{AbstractString,BrewPkg}; verbose::Bool=false, quiet::Bool=true)\n\nUnlink package pkg from the global namespace, uses --quiet if quiet == true\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Homebrew.update-Tuple{}",
    "page": "Docstrings",
    "title": "Homebrew.update",
    "category": "method",
    "text": "update(;verbose::Bool=false)\n\nRuns brew update to update Homebrew itself and all taps.  Then runs upgrade() to upgrade all formulae that have fallen out of date.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Homebrew.update_env-Tuple{}",
    "page": "Docstrings",
    "title": "Homebrew.update_env",
    "category": "method",
    "text": "update_env()\n\nUpdates environment variables PATH and HOMEBREWCACHE, and modifies DLLOAD_PATH to point to our Homebrew installation, allowing us to use things inside of Homebrew transparently. This causes BinDeps to find the binaries during Pkg.build() time, writing the absolute path into deps/deps.jl.  Because the paths are written into deps/deps.jl, packages do not need to load in the entire Homebrew package just to find their dependencies.\n\nHOMEBREW_CACHE stores our bottle download cache in a separate place, separating ourselves from other Homebrew installations so we don\'t conflict with anyone\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Homebrew.update_tag-Tuple{}",
    "page": "Docstrings",
    "title": "Homebrew.update_tag",
    "category": "method",
    "text": "update_tag(;verbose::Bool = false)\n\nWe maintain our own \"stable\" tag that overrides Homebrew so that we can update at our own pace along with them.  Make sure to call update_env() before calling this, as calling our git doesn\'t work properly otherwise.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Homebrew.upgrade-Tuple{}",
    "page": "Docstrings",
    "title": "Homebrew.upgrade",
    "category": "method",
    "text": "upgrade(;verbose::Bool=false)\n\nIterate over all packages returned from outdated(), removing the old version and adding a new one.  Note that we do not simply call brew upgrade here, as we have special logic inside of add() to install from our tap before trying to install from mainline Homebrew.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#Homebrew.write_formula-Tuple{AbstractString,AbstractString}",
    "page": "Docstrings",
    "title": "Homebrew.write_formula",
    "category": "method",
    "text": "write_formula(name::AbstractString, formula::AbstractString)\n\nWrite out fully-qualified formula name with contents formula to disk. Note that writing out without a tap name is not allowed; we won\'t write new formulae out to Homebrew/core, only to taps.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Homebrew]\nOrder = [:type, :function]"
},

]}
