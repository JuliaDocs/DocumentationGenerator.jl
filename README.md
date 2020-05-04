# DocumentationGenerator.jl

[![Build Status](https://travis-ci.org/JuliaDocs/DocumentationGenerator.jl.svg?branch=master)](https://travis-ci.org/JuliaDocs/DocumentationGenerator.jl)

Generate documentation for *all the packages*.

## Installation
```
pkg> add DocumentationGenerator
```
installs this package. Optionally you might want to install the `licensee` ruby
gem for better license detection:
```
$ gem install licensee
```

It also makes sense to have `xvfb-run` installed so packages that require a display
(e.g. Tk.jl) work fine.

## Usage

Running `./run/makedocs.jl` will generate the documentation for all packages installable on the
current Julia version in `./build`. `./dist` will contain the correct directory structure.
Executing `./run/generate_json.jl` creates a `packages_meta.json` in `./build`, which powers the
frontend in `./landingpage`.
