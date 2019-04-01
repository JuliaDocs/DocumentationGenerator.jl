<template>
  <v-app id="app" :dark="dark">
    <v-navigation-drawer
      v-model="primaryDrawer.model"
      clipped
      mobile-break-point="800"
      app
    >
      <div class="px-4 pt-4">
        <h4>Search Package by Name</h4>
        <v-text-field
          v-model="primaryDrawer.pkgsearchmodel"
          :loading="primaryDrawer.loading"
          prepend-inner-icon="search"
          label="Package"
        ></v-text-field>
      </div>
      <div class="px-4 pt-3">
        <h4>Filter by Tag</h4>
        <v-combobox
          v-model="primaryDrawer.pkgtagmodel"
          :loading="primaryDrawer.loading"
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
                    {{ data.item.text }}
                  </span>
                </v-chip>
              </template>
              {{
                data.item.text
              }}
            </v-tooltip>
          </template>
        </v-combobox>
      </div>
      <!-- <div class="px-4 pt-3">
        <h4>Sort by</h4>
        ...
      </div> -->
    </v-navigation-drawer>
    <v-toolbar clipped-left app>
      <v-toolbar-side-icon
        @click.stop="primaryDrawer.model = !primaryDrawer.model"
      ></v-toolbar-side-icon>
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
        class="doc-search"
        placeholder="Documentation Search. Coming soon..."
        prepend-inner-icon="search"
        disabled
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
      <v-data-iterator
        class="data-iterator pt-3"
        :items="filteredPackages"
        :rows-per-page-items="[10,20,50]"
        >
        <v-container
          class="py-2"
          fluid
          slot="item"
          slot-scope="props">
          <v-layout align-center justify-center>
            <v-flex xs12>
              <PackageCard
                v-on:tag-click="addTagFromPackageCard"
                :details="props.item">
              </PackageCard>
            </v-flex>
          </v-layout>
        </v-container>
        <component slot="no-data">
          <div class="no-result-spacer">
            <v-icon class="nothing-icon" x-large>
              not_interested
            </v-icon>
          </div>
        </component>
      </v-data-iterator>
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
import virtualList from 'vue-virtual-scroll-list'
import _ from 'underscore'
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
pkgs.sort((a, b) => {
  var starsA = parseInt(a.stargazers_count)
  var starsB = parseInt(b.stargazers_count)
  if (starsA < starsB) {
    return 1
  } else if (starsA > starsB) {
    return -1
  } else {
    return 0
  }
})
console.log(pkgs);

export default {
  name: 'app',
  components: {
    PackageCard,
    virtualList
  },
  data: () => ({
    dark: false,
    drawers: ['Default (no property)', 'Permanent', 'Temporary'],
    primaryDrawer: {
      model: null,
      pkgsearchmodel: null,
      pkgtagmodel: [],
      loading: false,
    },
    pkgs: pkgs,
    filteredPackages: pkgs
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
    },
    filterPackages () {
      return new Promise((resolve) => {
        let pkgs = this.$data.pkgs
        const selectedTags = this.$data.primaryDrawer.pkgtagmodel
        if (selectedTags && selectedTags.length > 0) {
          pkgs = pkgs.filter(pkg => {
            const pkgtags = pkg.tags.map(tag => tag.toLowerCase())
            for (const tag of selectedTags) {
              if (pkgtags.indexOf(tag.text) === -1) {
                return false
              }
            }
            return true
          })
        }

        const filterText = this.$data.primaryDrawer.pkgsearchmodel
        if (filterText && filterText.length > 0) {
          pkgs = fuzzysort(filterText, pkgs, {
            key: 'name',
            limit: Infinity,
            threshold: -Infinity

          })
          pkgs = pkgs.map(pkg => pkg.obj)
        }
        resolve(pkgs)
      })
    }
  },
  watch: {
    "primaryDrawer.pkgtagmodel": _.debounce(function () {
      this.$data.primaryDrawer.loading = true
      this.filterPackages().then((result) => {
        this.$data.filteredPackages = result
        this.$data.primaryDrawer.loading = false
      })
    }, 200),
    "primaryDrawer.pkgsearchmodel": _.debounce(function () {
      this.$data.primaryDrawer.loading = true
      this.filterPackages().then((result) => {
        this.$data.filteredPackages = result
        this.$data.primaryDrawer.loading = false
      })
    }, 200)
  },
  computed: {
    tags () {
      const tags = {}
      for (const pkg of this.$data.pkgs) {
        let stars = parseInt(pkg.stargazers_count)
        stars = isNaN(stars) ? 1 : stars
        let tag
        for (tag of pkg.tags) {
          tag = tag.toLowerCase()
          if (tags[tag]) {
            tags[tag] += stars/pkg.tags.length
          } else {
            tags[tag] = 1
          }
        }
      }
      let sortableTags = [];
      for (let tag in tags) {
          sortableTags.push({
            text: tag,
            value: tag,
            count: tags[tag]
          })
      }

      sortableTags.sort(function(a, b) {
          return b.count - a.count
      })
      return sortableTags
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
.data-iterator > div:first-of-type {
  min-height: calc(100vh - 200px);
}
.no-result-spacer {
  .nothing-icon {
    font-size: 80px!important;
    opacity: 0.3;
  }
}

</style>
