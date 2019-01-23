var documenterSearchIndex = {"docs": [

{
    "location": "#Homebrew.BrewPkg",
    "page": "Home",
    "title": "Homebrew.BrewPkg",
    "category": "type",
    "text": "BrewPkg\n\nA simple type to give us some nice ways of representing our packages to the user\n\nIt contains important information such as the name of the package, the tap it came from, the version of the package and whether it was translated or not\n\n\n\n\n\n"
},

{
    "location": "#Base.show-Tuple{IO,Homebrew.BrewPkg}",
    "page": "Home",
    "title": "Base.show",
    "category": "method",
    "text": "show(io::IO, b::BrewPkg)\n\nWrites a BrewPkg to io, showing tap, name and version number\n\n\n\n\n\n"
},

{
    "location": "#Homebrew.__init__-Tuple{}",
    "page": "Home",
    "title": "Homebrew.__init__",
    "category": "method",
    "text": "__init__()\n\nInitialization function.  Calls install_brew() to ensure that everything we need is downloaded/installed, then calls update_env() to set the environment properly so that packages being installed can find their binaries.\n\n\n\n\n\n"
},

{
    "location": "#Homebrew.add-Tuple{Union{AbstractString, BrewPkg}}",
    "page": "Home",
    "title": "Homebrew.add",
    "category": "method",
    "text": "add(pkg::Union{AbstractString,BrewPkg}; verbose::Bool=false, keep_translations::Bool=false)\n\nInstall package pkg and all dependencies, using bottles only, unlinking any previous versions if necessary, and linking the new ones in place. Will attempt to install non-relocatable bottles from Homebrew/core by translating formulae and forcing cellar :any into the formulae.\n\nAutomatically deletes all translated formulae before adding formulae and after, unless keep_translations is set to true.\n\n\n\n\n\n"
},

{
    "location": "#Homebrew.add_flags-Tuple{Cmd,Dict{Cmd,Bool}}",
    "page": "Home",
    "title": "Homebrew.add_flags",
    "category": "method",
    "text": "add_flags(cmd::AbstractString, flags::Dict{String,Bool})\n\nGiven a mapping of flags to Bools, return [cmd, flag1, flag2...] if the respective Bools are true.  Useful for adding --verbose and --force flags onto the end of commands\n\n\n\n\n\n"
},

{
    "location": "#Homebrew.brew-Tuple{Cmd}",
    "page": "Home",
    "title": "Homebrew.brew",
    "category": "method",
    "text": "brew(cmd::Cmd; no_stderr=false, no_stdout=false, verbose=false, force=false, quiet=false)\n\nRun command cmd using the configured brew binary, optionally suppressing stdout and stderr, and providing flags such as --verbose to the brew binary.\n\n\n\n\n\n"
},

{
    "location": "#Homebrew.brewchomp-Tuple{Cmd}",
    "page": "Home",
    "title": "Homebrew.brewchomp",
    "category": "method",
    "text": "brewchomp(cmd::Cmd; no_stderr=false, no_stdout=false, verbose=false, force=false, quiet=false))\n\nRun command cmd using the configured brew binary, optionally suppressing stdout and stderr, and providing flags such as --verbose to the brew binary.\n\nThis function uses readchomp(), as opposed to brew() which uses run()\n\n\n\n\n\n"
},

{
    "location": "#Homebrew.cleanup-Tuple{}",
    "page": "Home",
    "title": "Homebrew.cleanup",
    "category": "method",
    "text": "cleanup()\n\nCleans up old installed versions of formulae, as well as purging all downloaded bottles\n\n\n\n\n\n"
},

{
    "location": "#Homebrew.clt_installed-Tuple{}",
    "page": "Home",
    "title": "Homebrew.clt_installed",
    "category": "method",
    "text": "clt_installed()\n\nChecks whether the command-line tools are installed, as reported by xcode-select\n\n\n\n\n\n"
},

{
    "location": "#Homebrew.delete_all_translated_formulae-Tuple{}",
    "page": "Home",
    "title": "Homebrew.delete_all_translated_formulae",
    "category": "method",
    "text": "delete_all_translated_formulae(;verbose::Bool=false)\n\nDelete all translated formulae from the staticfloat/juliatranslated tap. This is useful for debugging misbehaving formulae during translation.\n\n\n\n\n\n"
},

{
    "location": "#Homebrew.delete_translated_formula-Tuple{AbstractString}",
    "page": "Home",
    "title": "Homebrew.delete_translated_formula",
    "category": "method",
    "text": "delete_translated_formula(name::AbstractString; verbose::Bool=false)\n\nDelete a translated formula from the staticfloat/juliatranslated tap.\n\n\n\n\n\n"
},

{
    "location": "#Homebrew.deps_sorted-Tuple{Union{AbstractString, BrewPkg}}",
    "page": "Home",
    "title": "Homebrew.deps_sorted",
    "category": "method",
    "text": "deps_sorted(pkg::Union{AbstractString,BrewPkg}; build_deps::Bool)\n\nReturn a sorted Vector{BrewPkg} of all dependencies (direct and indirect) such that each entry in the list appears after all of its own dependencies.\n\nIf build_deps is true include formula depependencies marked as :build.\n\n\n\n\n\n"
},

{
    "location": "#Homebrew.deps_tree-Tuple{Union{AbstractString, BrewPkg}}",
    "page": "Home",
    "title": "Homebrew.deps_tree",
    "category": "method",
    "text": "deps_tree(pkg::Union{AbstractString,BrewPkg}; build_deps::Bool=false)\n\nReturn a dictionary mapping every dependency (both direct and indirect) of pkg to a Vector{BrewPkg} of all of its dependencies.  Used in deps_sorted().\n\nIf build_deps is true include formula depependencies marked as :build.\n\n\n\n\n\n"
},

{
    "location": "#Homebrew.direct_deps-Tuple{Union{AbstractString, BrewPkg}}",
    "page": "Home",
    "title": "Homebrew.direct_deps",
    "category": "method",
    "text": "direct_deps(pkg::Union{AbstractString,BrewPkg}; build_deps::Bool=false)\n\nReturn a list of all direct dependencies of pkg as a Vector{BrewPkg} If build_deps is true include formula depependencies marked as :build.\n\n\n\n\n\n"
},

{
    "location": "#Homebrew.download_and_unpack-Tuple{AbstractString,AbstractString}",
    "page": "Home",
    "title": "Homebrew.download_and_unpack",
    "category": "method",
    "text": "download_and_unpack(url::AbstractString, target_dir::AbstractString)\n\nDownload a tarball from url and unpack it into target_dir.\n\n\n\n\n\n"
},

{
    "location": "#Homebrew.formula_path-Tuple{Union{AbstractString, BrewPkg}}",
    "page": "Home",
    "title": "Homebrew.formula_path",
    "category": "method",
    "text": "formula_path(pkg::Union{AbstractString,BrewPkg})\n\nReturns the absolute path on-disk of the given package pkg.\n\n\n\n\n\n"
},

{
    "location": "#Homebrew.formula_tap-Tuple{AbstractString}",
    "page": "Home",
    "title": "Homebrew.formula_tap",
    "category": "method",
    "text": "formula_tap(name::AbstractString)\n\nGiven a formula name, return the formula name and the tap it is from, replacing \"\" for \"Homebrew/core\", as we don\'t care about that particular prefix.\n\n\n\n\n\n"
},

{
    "location": "#Homebrew.fullname-Tuple{Homebrew.BrewPkg}",
    "page": "Home",
    "title": "Homebrew.fullname",
    "category": "method",
    "text": "fullname(pkg::BrewPkg)\n\nReturn the fully-qualified name for a package, dropping \"Homebrew/core\"\n\n\n\n\n\n"
},

{
    "location": "#Homebrew.git_installed-Tuple{}",
    "page": "Home",
    "title": "Homebrew.git_installed",
    "category": "method",
    "text": "git_installed()\n\nChecks whether git is truly installed or not, dealing with stubs in /usr/bin Also ensure that the version is new enough (e.g. >= 2.0.0.0) that it will work with git fetch --unshallow on Homebrew.\n\n\n\n\n\n"
},

{
    "location": "#Homebrew.has_bottle-Tuple{AbstractString}",
    "page": "Home",
    "title": "Homebrew.has_bottle",
    "category": "method",
    "text": "has_bottle(name::AbstractString)\n\nChecks if a given formula has a bottle at all\n\n\n\n\n\n"
},

{
    "location": "#Homebrew.has_relocatable_bottle-Tuple{AbstractString}",
    "page": "Home",
    "title": "Homebrew.has_relocatable_bottle",
    "category": "method",
    "text": "has_relocatable_bottle(name::AbstractString)\n\nChecks to see if a given formula has a bottle that can be installed anywhere\n\n\n\n\n\n"
},

{
    "location": "#Homebrew.info-Tuple{AbstractString}",
    "page": "Home",
    "title": "Homebrew.info",
    "category": "method",
    "text": "info(name::AbstractString)\n\nReturns information about a particular package name as a BrewPkg.  This is our basic String -> BrewPkg converter.\n\n\n\n\n\n"
},

{
    "location": "#Homebrew.info-Union{Tuple{Array{T,1}}, Tuple{T}} where T<:AbstractString",
    "page": "Home",
    "title": "Homebrew.info",
    "category": "method",
    "text": "info(names::Vector{String})\n\nFor each name in names, returns information about that particular package name as a BrewPkg.  This is our batched String -> BrewPkg converter.\n\n\n\n\n\n"
},

{
    "location": "#Homebrew.insert_after_dependencies-Tuple{Dict,Array{Homebrew.BrewPkg,1},AbstractString}",
    "page": "Home",
    "title": "Homebrew.insert_after_dependencies",
    "category": "method",
    "text": "insert_after_dependencies(tree::Dict, sorted_deps::Vector{BrewPkg}, name::AbstractString)\n\nGiven a mapping from names to dependencies in tree, and a list of sorted dependencies in sorted_deps, insert a new dependency name into sorted_deps after all dependencies of name.  If a dependency of name is not already in sorted_deps, then recursively add that dependency as well.\n\n\n\n\n\n"
},

{
    "location": "#Homebrew.install_and_link-Tuple{Union{AbstractString, BrewPkg}}",
    "page": "Home",
    "title": "Homebrew.install_and_link",
    "category": "method",
    "text": "install_and_link(pkg::Union{AbstractString,BrewPkg}; verbose=false)\n\nInstalls, and links package pkg.  Used by add().  Don\'t call manually unless you really know what you\'re doing, as this doesn\'t deal with dependencies, and so can trigger compilation when you don\'t want it to.\n\n\n\n\n\n"
},

{
    "location": "#Homebrew.install_brew-Tuple{}",
    "page": "Home",
    "title": "Homebrew.install_brew",
    "category": "method",
    "text": "install_brew()\n\nEnsures that Homebrew is installed as desired, that our basic Taps are available and that we have whatever binary tools we need, such as install_name_tool\n\n\n\n\n\n"
},

{
    "location": "#Homebrew.installed-Tuple{Union{AbstractString, BrewPkg}}",
    "page": "Home",
    "title": "Homebrew.installed",
    "category": "method",
    "text": "installed(pkg::Union{AbstractString,BrewPkg})\n\nReturn true if the given package pkg is a directory in the Cellar, showing that it has been installed (but possibly not linked, see linked())\n\n\n\n\n\n"
},

{
    "location": "#Homebrew.json-Tuple{Union{AbstractString, BrewPkg}}",
    "page": "Home",
    "title": "Homebrew.json",
    "category": "method",
    "text": "json(pkg::Union{AbstractString,BrewPkg})\n\nReturn the full JSON object for pkg, the result of brew info --json=v1 $pkg. If brew info fails, throws an error.  If brew info returns an empty object, (e.g. \"[]\"), this returns an empty Dict.\n\nNote that running brew info --json=v1 is somewhat expensive, so we cache the results in a global dictionary, and batching larger requests with the vectorized json() function similarly increases performance.\n\n\n\n\n\n"
},

{
    "location": "#Homebrew.json-Union{Tuple{Array{T,1}}, Tuple{T}} where T<:AbstractString",
    "page": "Home",
    "title": "Homebrew.json",
    "category": "method",
    "text": "json(names::Vector{AbstractString})\n\nFor each package name in names, return the full JSON object for name, the result of brew info --json=v1 $name, stored in a dictionary keyed by the names passed into this function. If brew info fails, throws an error. If brew info returns an empty object \"[]\", that object is represented by an empty dictionary.\n\nNote that running brew info --json=v1 is somewhat expensive, so we cache the results in a global dictionary, and batching larger requests with this function similarly increases performance.\n\n\n\n\n\n"
},

{
    "location": "#Homebrew.link-Tuple{Union{AbstractString, BrewPkg}}",
    "page": "Home",
    "title": "Homebrew.link",
    "category": "method",
    "text": "link(pkg::Union{AbstractString,BrewPkg}; verbose=false, force=true)\n\nLink package name into the global namespace, uses --force if force == true\n\n\n\n\n\n"
},

{
    "location": "#Homebrew.linked-Tuple{Union{AbstractString, BrewPkg}}",
    "page": "Home",
    "title": "Homebrew.linked",
    "category": "method",
    "text": "linked(pkg::Union{AbstractString,BrewPkg})\n\nReturns true if the given package pkg is linked to LinkedKegs, signifying all files installed by this package have been linked into the global prefix.\n\n\n\n\n\n"
},

{
    "location": "#Homebrew.list-Tuple{}",
    "page": "Home",
    "title": "Homebrew.list",
    "category": "method",
    "text": "list()\n\nReturns a list of all installed packages as a Vector{BrewPkg}\n\n\n\n\n\n"
},

{
    "location": "#Homebrew.outdated-Tuple{}",
    "page": "Home",
    "title": "Homebrew.outdated",
    "category": "method",
    "text": "outdated()\n\nReturns a list of all installed packages that are out of date as a Vector{BrewPkg}\n\n\n\n\n\n"
},

{
    "location": "#Homebrew.postinstall-Tuple{Union{AbstractString, BrewPkg}}",
    "page": "Home",
    "title": "Homebrew.postinstall",
    "category": "method",
    "text": "postinstall(pkg::Union{AbstractString,BrewPkg}; verbose=false)\n\nRuns brew postinstall against package pkg, useful for debugging complicated formulae when a bottle doesn\'t install right and you want to re-run postinstall.\n\n\n\n\n\n"
},

{
    "location": "#Homebrew.prefix-Tuple{Union{AbstractString, BrewPkg}}",
    "page": "Home",
    "title": "Homebrew.prefix",
    "category": "method",
    "text": "prefix(pkg::Union{AbstractString,BrewPkg})\n\nReturns the prefix for a particular package\'s latest installed version.\n\n\n\n\n\n"
},

{
    "location": "#Homebrew.prefix-Tuple{}",
    "page": "Home",
    "title": "Homebrew.prefix",
    "category": "method",
    "text": "prefix()\n\nReturns brew_prefix, the location where all Homebrew files are stored.\n\n\n\n\n\n"
},

{
    "location": "#Homebrew.read_formula-Tuple{Union{AbstractString, BrewPkg}}",
    "page": "Home",
    "title": "Homebrew.read_formula",
    "category": "method",
    "text": "read_formula(pkg::Union{AbstractString,BrewPkg})\n\nReturns the string contents of a package\'s formula.\n\n\n\n\n\n"
},

{
    "location": "#Homebrew.refresh!-Tuple{}",
    "page": "Home",
    "title": "Homebrew.refresh!",
    "category": "method",
    "text": "refresh!(;verbose=false)\n\nForcibly remove all packages and add them again.  This should only be used to fix a broken installation, normal operation should never need to use this.\n\n\n\n\n\n"
},

{
    "location": "#Homebrew.rm-Tuple{Union{AbstractString, BrewPkg}}",
    "page": "Home",
    "title": "Homebrew.rm",
    "category": "method",
    "text": "rm(pkg::Union{AbstractString,BrewPkg}; verbose::Bool=false, force::Bool=true)\n\nRemove package pkg, use --force if force == true\n\n\n\n\n\n"
},

{
    "location": "#Homebrew.rm-Union{Tuple{Array{T,1}}, Tuple{T}} where T<:Union{AbstractString, BrewPkg}",
    "page": "Home",
    "title": "Homebrew.rm",
    "category": "method",
    "text": "rm(pkgs::Vector{String or BrewPkg}; verbose::Bool=false, force::Bool=true)\n\nRemove packages pkgs, use --force if force == true\n\n\n\n\n\n"
},

{
    "location": "#Homebrew.tap-Tuple{AbstractString}",
    "page": "Home",
    "title": "Homebrew.tap",
    "category": "method",
    "text": "tap(tap_name::AbstractString; full::Bool=true, verbose::Bool=false)\n\nRuns brew tap $tap_name if the tap does not already exist.  If full is true adds the flag --full to clone a full tap instead of Homebrew\'s default shallow.\n\nIf git is not available, manually tap it with curl and tar.  This tap will be unshallowed at the next brew update when git is available.\n\n\n\n\n\n"
},

{
    "location": "#Homebrew.tap_exists-Tuple{AbstractString}",
    "page": "Home",
    "title": "Homebrew.tap_exists",
    "category": "method",
    "text": "tap_exists(tap_name::AbstractString)\n\nCheck to see if a tap called tap_name (ex: \"staticfloat/juliadeps\") exists\n\n\n\n\n\n"
},

{
    "location": "#Homebrew.translate_formula-Tuple{Union{AbstractString, BrewPkg}}",
    "page": "Home",
    "title": "Homebrew.translate_formula",
    "category": "method",
    "text": "translate_formula(pkg::Union{AbstractString,BrewPkg}; verbose::Bool=false)\n\nGiven a formula name, return the fully-qualified name of a translated formula if it is translatable.  Translation copies a Homebrew/core formula to staticfloat/juliatranslated, adding appropriate cellar :any and root_url lines to any bottle stanzas.  This allows us to transparently install non-cellar-any formulae from Homebrew/core.\n\nThis function is fairly strict, bailing out at every possible opportunity, and returning the original name.  If a formula is non-translatable, it\'s possible it needs manual intervention, check out the staticfloat/juliadeps tap for examples.\n\n\n\n\n\n"
},

{
    "location": "#Homebrew.unlink-Tuple{Union{AbstractString, BrewPkg}}",
    "page": "Home",
    "title": "Homebrew.unlink",
    "category": "method",
    "text": "unlink(pkg::Union{AbstractString,BrewPkg}; verbose::Bool=false, quiet::Bool=true)\n\nUnlink package pkg from the global namespace, uses --quiet if quiet == true\n\n\n\n\n\n"
},

{
    "location": "#Homebrew.update-Tuple{}",
    "page": "Home",
    "title": "Homebrew.update",
    "category": "method",
    "text": "update(;verbose::Bool=false)\n\nRuns brew update to update Homebrew itself and all taps.  Then runs upgrade() to upgrade all formulae that have fallen out of date.\n\n\n\n\n\n"
},

{
    "location": "#Homebrew.update_env-Tuple{}",
    "page": "Home",
    "title": "Homebrew.update_env",
    "category": "method",
    "text": "update_env()\n\nUpdates environment variables PATH and HOMEBREWCACHE, and modifies DLLOAD_PATH to point to our Homebrew installation, allowing us to use things inside of Homebrew transparently. This causes BinDeps to find the binaries during Pkg.build() time, writing the absolute path into deps/deps.jl.  Because the paths are written into deps/deps.jl, packages do not need to load in the entire Homebrew package just to find their dependencies.\n\nHOMEBREW_CACHE stores our bottle download cache in a separate place, separating ourselves from other Homebrew installations so we don\'t conflict with anyone\n\n\n\n\n\n"
},

{
    "location": "#Homebrew.update_tag-Tuple{}",
    "page": "Home",
    "title": "Homebrew.update_tag",
    "category": "method",
    "text": "update_tag(;verbose::Bool = false)\n\nWe maintain our own \"stable\" tag that overrides Homebrew so that we can update at our own pace along with them.  Make sure to call update_env() before calling this, as calling our git doesn\'t work properly otherwise.\n\n\n\n\n\n"
},

{
    "location": "#Homebrew.upgrade-Tuple{}",
    "page": "Home",
    "title": "Homebrew.upgrade",
    "category": "method",
    "text": "upgrade(;verbose::Bool=false)\n\nIterate over all packages returned from outdated(), removing the old version and adding a new one.  Note that we do not simply call brew upgrade here, as we have special logic inside of add() to install from our tap before trying to install from mainline Homebrew.\n\n\n\n\n\n"
},

{
    "location": "#Homebrew.write_formula-Tuple{AbstractString,AbstractString}",
    "page": "Home",
    "title": "Homebrew.write_formula",
    "category": "method",
    "text": "write_formula(name::AbstractString, formula::AbstractString)\n\nWrite out fully-qualified formula name with contents formula to disk. Note that writing out without a tap name is not allowed; we won\'t write new formulae out to Homebrew/core, only to taps.\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Homebrew]\nOrder = [:type, :function]"
},

]}
