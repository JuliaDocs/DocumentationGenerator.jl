# DocumentationGenerator.jl

[![CI](https://github.com/JuliaDocs/DocumentationGenerator.jl/actions/workflows/CI.yml/badge.svg)](https://github.com/JuliaDocs/DocumentationGenerator.jl/actions/workflows/CI.yml)

Generate documentation for *all the packages*.

## Installation
```
pkg> add DocumentationGenerator
```
installs this package.

It also makes sense to have `xvfb-run` installed so packages that require a display
(e.g. Tk.jl) work fine.

## Usage

Running `./run/makedocs.jl` will generate the documentation for all packages installable on the
current Julia version in `./build`. `./dist` will contain the correct directory structure.
Executing `./run/generate_json.jl` creates a `packages_meta.json` in `./build`, which powers the
frontend in `./landingpage`.
