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
        <v-text-field
          v-model="primaryDrawer.pkgpsearchmodel"
          prepend-inner-icon="search"
          label="Package"
        ></v-text-field>
      </div>
      <div class="px-4 pt-3">
        <h4>Filter by Tag</h4>
        <v-combobox
          v-model="primaryDrawer.pkgtagmodel"
          :items="tags"
          label="Tags"
          clearable
          multiple
          chips>
          <template slot="selection" slot-scope="data">
            <v-tooltip right>
              <template slot="activator">
                <v-chip
                  close
                  label
                  small
                  @input="removeTag(data.item)">
                  <span class="filter-chip">
                    {{ data.item }}
                  </span>
                </v-chip>
              </template>
              {{data.item}}
            </v-tooltip>
          </template>
        </v-combobox>
      </div>
      <div class="px-4 pt-3">
        <h4>Sort by</h4>
        ...
      </div>
    </v-navigation-drawer>
    <v-toolbar clipped-left app>
      <v-img
        :src="juliaLogo"
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
      <!-- FIXME: should maybe use something else here for performance -->
      <v-container
        fluid
        v-for="pkg in filteredPackages"
        :key="pkg.id">
        <v-layout align-center justify-center>
          <v-flex xs10 >
            <PackageCard
              v-on:tag-click="addTagFromPackageCard"
              :details="pkg">
            </PackageCard>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>

    <v-footer app height="50px">
      <span class="px-3">&copy; {{ new Date().getFullYear() }}</span>
      <v-spacer></v-spacer>
      <div class="px-3">
        <v-switch v-model="dark" primary label="Dark"></v-switch>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import PackageCard from './components/PackageCard.vue'
import { go as fuzzysort } from 'fuzzysort'

const pkgobj = require('./pkgs')
// pkgs = pkgs.slice(0,100)
let pkgs = []
let i = 0
for (const pkgname in pkgobj) {
  let pkg = pkgobj[pkgname]
  pkg.name = pkgname
  pkg.id = i
  if (!pkg.tags) {
    pkg.tags = []
  }
  pkgs.push(pkg)
  i += 1
}
console.log(pkgs);

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
      pkgtagmodel: []
    },
    pkgs: pkgs
  }),
  methods: {
    removeTag (item) {
      let tags = this.primaryDrawer.pkgtagmodel
      tags.splice(tags.indexOf(item), 1)
      this.primaryDrawer.pkgtagmodel = [...tags]
    },
    addTagFromPackageCard (tag) {
      let tags = this.primaryDrawer.pkgtagmodel
      if (tags.indexOf(tag) === -1) {
        tags.push(tag)
      }
      this.primaryDrawer.pkgtagmodel = [...tags]
    }
  },
  computed: {
    tags () {
      const tags = new Set()
      for (const pkg of this.$data.pkgs) {
        for (const tag of pkg.tags) {
          tags.add(tag.toLowerCase())
        }
      }
      return [...tags].sort()
    },
    filteredPackages () {
      let pkgs = this.$data.pkgs
      const selectedTags = this.$data.primaryDrawer.pkgtagmodel
      if (selectedTags && selectedTags.length > 0) {
        pkgs = pkgs.filter(pkg => {
          const pkgtags = pkg.tags.map(tag => tag.toLowerCase())
          for (const tag of selectedTags) {
            if (pkgtags.indexOf(tag) === -1) {
              return false
            }
          }
          return true
        })
      }

      const filterText = this.$data.primaryDrawer.pkgpsearchmodel
      if (filterText && filterText.length > 0) {
        pkgs = fuzzysort(filterText, pkgs, {
          key: 'name',
          limit: Infinity,
          threshold: -Infinity

        })
        pkgs = pkgs.map(pkg => pkg.obj)
      }
      return pkgs
    },
    juliaLogo () {
      return this.$data.dark ? require('./assets/julia-dark.png') : require('./assets/julia-light.svg')
    }
  }
}
</script>

<style lang="scss">
.filter-chip {
  max-width: 140px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.scroller {
  height: 100%;
}
</style>
