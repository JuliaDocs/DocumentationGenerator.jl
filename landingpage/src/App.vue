<template>
  <v-app id="app" :dark="dark">
    <v-navigation-drawer
      v-model="primaryDrawer.model"
      clipped
      overflow
      app
    >
    <div class="px-4 pt-4">
      <h4>Search Package by Name</h4>
      <v-autocomplete
        v-model="primaryDrawer.pkgpsearchmodel"
        :items="['Atom', 'DifferentialEquations']"
        label="Package"
      ></v-autocomplete>
    </div>
    <div class="px-4 pt-3">
      <h4>Filter by Tag</h4>
      <v-chip small close>julia</v-chip>
      <v-chip small close>ide</v-chip>
    </div>
    </v-navigation-drawer>
    <v-toolbar clipped-left app>
      <v-img
        src="https://julialang.org/v2/img/logo.svg"
        contain
        max-width="70px"
        height="50px"
      >
      </v-img>
      <v-toolbar-title>Documentation</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field
        placeholder="Search all the docs..."
        prepend-inner-icon="search"
        solo
        single-line
        flat
      ></v-text-field>
      <!-- <v-toolbar-items>
        <v-text-field
          placeholder="Search..."
          full-width
        ></v-text-field>
      </v-toolbar-items> -->
    </v-toolbar>

    <v-content>
      <v-container fluid v-for="pkg in pkgs">
        <v-layout align-center justify-center>
          <v-flex xs10 >
            <PackageCard :details="pkg"></PackageCard>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer app height="50px">
      <span class="px-3">&copy; {{ new Date().getFullYear() }} JuliaComputing, Inc</span>
      <v-spacer></v-spacer>
      <div class="px-3">
        <v-switch v-model="dark" primary label="Dark"></v-switch>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import PackageCard from './components/PackageCard.vue'

export default {
  name: 'app',
  components: {
    PackageCard,
  },
  data: () => ({
    dark: false,
    drawers: ['Default (no property)', 'Permanent', 'Temporary'],
    primaryDrawer: {
      model: null,
      pkgpsearchmodel: null,
    },
    pkgs: [
      {
        name: "DifferentialEquations.jl",
        owner: "JuliaDiffEq",
        cistatus: "passing",
        stars: 707,
        lastversion: "v6.3.0",
        tagline: "Julia suite for high-performance solvers of differential equations.",
        tags: [
          "differential-equations",
          "differentialequations",
          "julia",
          "ode",
          "sde",
          "pde",
          "dae",
          "stochastic",
          "dde",
          "spde",
          "delay",
          "monte-carlo-simulation",
          "stochastic-processes",
          "stochastic-differential-equations",
          "delay-differential-equations",
          "partial-differential-equations",
          "differential-algebraic-equations",
          "simulation",
          "numerical-integration",
          "dynamical-systems ",
        ]
      },
      {
        name: "Atom.jl",
        owner: "JunoLab",
        cistatus: "failing",
        stars: 201,
        lastversion: "v0.7.14",
        tagline: "Julia Client for Atom.",
        tags: ["atom", "ide"]
      },
      {
        name: "DifferentialEquations.jl",
        owner: "JuliaDiffEq",
        cistatus: "passing",
        stars: 707,
        lastversion: "v6.3.0",
        tagline: "Julia suite for high-performance solvers of differential equations.",
        tags: [
          "differential-equations",
          "differentialequations",
          "julia",
          "ode",
          "sde",
          "pde",
          "dae",
          "stochastic",
          "dde",
          "spde",
          "delay",
          "monte-carlo-simulation",
          "stochastic-processes",
          "stochastic-differential-equations",
          "delay-differential-equations",
          "partial-differential-equations",
          "differential-algebraic-equations",
          "simulation",
          "numerical-integration",
          "dynamical-systems ",
        ]
      },
      {
        name: "Atom.jl",
        owner: "JunoLab",
        cistatus: "failing",
        stars: 201,
        lastversion: "v0.7.14",
        tagline: "Julia Client for Atom.",
        tags: ["atom", "ide"]
      },
      {
        name: "DifferentialEquations.jl",
        owner: "JuliaDiffEq",
        cistatus: "passing",
        stars: 707,
        lastversion: "v6.3.0",
        tagline: "Julia suite for high-performance solvers of differential equations.",
        tags: [
          "differential-equations",
          "differentialequations",
          "julia",
          "ode",
          "sde",
          "pde",
          "dae",
          "stochastic",
          "dde",
          "spde",
          "delay",
          "monte-carlo-simulation",
          "stochastic-processes",
          "stochastic-differential-equations",
          "delay-differential-equations",
          "partial-differential-equations",
          "differential-algebraic-equations",
          "simulation",
          "numerical-integration",
          "dynamical-systems ",
        ]
      },
      {
        name: "Atom.jl",
        owner: "JunoLab",
        cistatus: "failing",
        stars: 201,
        lastversion: "v0.7.14",
        tagline: "Julia Client for Atom.",
        tags: ["atom", "ide"]
      },
      {
        name: "DifferentialEquations.jl",
        owner: "JuliaDiffEq",
        cistatus: "passing",
        stars: 707,
        lastversion: "v6.3.0",
        tagline: "Julia suite for high-performance solvers of differential equations.",
        tags: [
          "differential-equations",
          "differentialequations",
          "julia",
          "ode",
          "sde",
          "pde",
          "dae",
          "stochastic",
          "dde",
          "spde",
          "delay",
          "monte-carlo-simulation",
          "stochastic-processes",
          "stochastic-differential-equations",
          "delay-differential-equations",
          "partial-differential-equations",
          "differential-algebraic-equations",
          "simulation",
          "numerical-integration",
          "dynamical-systems ",
        ]
      },
      {
        name: "Atom.jl",
        owner: "JunoLab",
        cistatus: "failing",
        stars: 201,
        lastversion: "v0.7.14",
        tagline: "Julia Client for Atom.",
        tags: ["atom", "ide"]
      },
    ]
  })
}
</script>
