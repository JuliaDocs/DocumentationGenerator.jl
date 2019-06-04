<template>
  <v-app
    id="app"
    :dark="dark"
  >
    <v-navigation-drawer
      v-model="primaryDrawer.model"
      clipped
      overflow
      mobile-break-point="800"
      app
    >
      <div class="px-4 pt-4">
        <h4>Search Package by Name</h4>
        <v-text-field
          v-model="primaryDrawer.pkgsearchmodel"
          :loading="primaryDrawer.loading"
          prepend-inner-icon="search"
          clearable
          label="Package"
          :disabled="isSearch"
        />
      </div>
      <div class="px-4 pt-3">
        <h4>Filter by Tag</h4>
        <v-autocomplete
          v-model="primaryDrawer.pkgtagmodel"
          :loading="primaryDrawer.loading"
          :items="tags"
          label="Tags"
          clearable
          prepend-inner-icon="label_important"
          multiple
          dense
          return-object
          small-chips
          auto-select-first
          :disabled="isSearch"
        >
          <template
            slot="selection"
            slot-scope="data"
          >
            <v-tooltip right>
              <template slot="activator">
                <v-chip
                  :selected="data.selected"
                  close
                  label
                  small
                  @input="removeTag(data.item)"
                >
                  <span class="filter-chip">
                    {{ data.item }}
                  </span>
                </v-chip>
              </template>
              {{
                data.item
              }}
            </v-tooltip>
          </template>
        </v-autocomplete>
      </div>

      <!-- <div class="px-4 pt-3">
        <h4>Sort by</h4>
        ...
      </div> -->
    </v-navigation-drawer>
    <v-toolbar
      clipped-left
      app
    >
      <v-toolbar-side-icon
        @click.stop="primaryDrawer.model = !primaryDrawer.model"
      />
      <router-link class="v-responsive home-link" to="/">
        <v-img
          v-show="!($vuetify.breakpoint.xs && showSearch)"
          :src="juliaLogo"
          contain
          max-width="70px"
          height="50px"
        />
        <v-toolbar-title
          v-show="!($vuetify.breakpoint.xs || $vuetify.breakpoint.sm)"
        >
          Documentation
        </v-toolbar-title>
      </router-link>
      <v-spacer />
      <v-text-field
        v-show="showSearch || !($vuetify.breakpoint.xs)"
        v-model="search"
        placeholder="Search ..."
        :loading="searchLoading"
        single-line
        flat
        clearable
        ref="searchField"
        @keyup.13="commitSearch"
        @focus="searchFocused = true"
        @blur="onBlurSearch"
      >
      <v-btn
        slot="prepend-inner"
        small
        class="pa-0 ma-0"
        icon
        @click="commitSearch"
      >
        <v-icon>
          search
        </v-icon>
      </v-btn>
      </v-text-field>
      <v-btn
        class="pr-0 pl-0"
        v-show="$vuetify.breakpoint.xs && !showSearch"
        icon
        @click="toggleSearch"
      >
        <v-icon>
          search
        </v-icon>
    </v-btn>
    </v-toolbar>

    <v-content>
      <!-- Search Section Begins -->
      <div v-show="isSearch">
        <v-tabs
          v-model="tabModel"
          class="tabs"
          grow
        >
          <v-tab href="#docsTab">
            Docs
          </v-tab>
          <v-tab href="#codeTab">
            Code
          </v-tab>
          <v-tab-item value="docsTab">
            <v-flex xs12 ref="contentSearch">
              <v-data-iterator
                class="data-iterator pt-3"
                :items="docfilteredLists"
                :rows-per-page-items="[30,40,60]"
              >
                <v-container
                  slot="item"
                  slot-scope="props"
                  class="py-0"
                >
                  <v-layout
                    align-center
                    justify-center
                  >
                    <v-flex xs12>
                      <DocfilterCard
                        :search-key="searchQuery"
                        :data="props.item"
                      />
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-data-iterator>
            </v-flex>
          </v-tab-item>
          <v-tab-item value="codeTab">
            <!-- Code search results displaying section -->
            <v-data-iterator
              class="data-iterator pt-3"
              :items="codefilteredLists"
              :rows-per-page-items="[10,20,50]"
            >
              <v-container
                slot="item"
                slot-scope="props"
                class="py-2"
              >
                <v-layout
                  align-center
                  justify-center
                >
                  <v-flex xs12>
                    <CodefilterCard
                      :search-key="searchQuery"
                      :data="props.item"
                    />
                  </v-flex>
                </v-layout>
              </v-container>
            </v-data-iterator>
            <!-- Code search results displaying section -->
          </v-tab-item>
        </v-tabs>
      </div>
      <!-- Search Section ends -->
      <div
        v-show="!isSearch"
        ref="contentPkg"
      >
        <v-data-iterator
          class="data-iterator pt-3"
          :items="filteredPackages"
          item-key="uuid"
          :rows-per-page-items="[10,20,50]"
        >
          <v-container
            slot="item"
            slot-scope="props"
            class="py-2"
            fluid
          >
            <v-layout
              align-center
              justify-center
            >
              <v-flex xs12>
                <PackageCard
                  :details="props.item"
                  @tag-click="addTagFromPackageCard"
                />
              </v-flex>
            </v-layout>
          </v-container>
        </v-data-iterator>
      </div>
    </v-content>

    <v-footer
      app
      height="50px"
    >
      <span class="px-3">Powered by <a
        href="https://juliacomputing.com/blog/2019/02/13/JuliaTeam-Vision.html"
        target="_blank"
      >JuliaTeam</a>.</span>
      <v-spacer/>
      <div class="px-3">
        <v-switch
          v-model="dark"
          primary
          label="Dark"
        ></v-switch>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import PackageCard from './components/PackageCard.vue'
import CodefilterCard from './components/CodefilterCard.vue'
import DocfilterCard from './components/DocfilterCard.vue'
import _ from 'underscore'
import { go as fuzzysort } from 'fuzzysort'
import axios from 'axios'

axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? '' : 'https://pkg.julialang.org/'

let pkgs = []
let pkgs_raw = {}

export default {
  name: 'App',
  components: {
    PackageCard,
    CodefilterCard,
    DocfilterCard
  },
  data: function () {
    let isDark = this.$cookies.get('darkTheme') === 'true'
    return {
      dark: isDark,
      showSearch: false,
      searchFocused: false,
      searchLoading: false,
      drawers: ['Default (no property)', 'Permanent', 'Temporary'],
      primaryDrawer: {
        model: null,
        pkgsearchmodel: null,
        pkgtagmodel: [],
        loading: false
      },
      pkgs: pkgs,
      tags: [],
      filteredPackages: pkgs,
      search: '',
      searching: false,
      codefilterData: [],
      docfilterData: [],
      tabModel: 'docsTab'
    }
  },
  mounted () {
    this.fetchPackages()
    this.maybeRunSearch()
  },
  methods: {
    maybeRunSearch () {
      if (this.isSearch && this.searchQuery) {
        this.searchPackages(this.searchQuery)
        this.search = this.searchQuery
      }
    },
    commitSearch () {
      if (this.searching) return
      this.searching = true
      this.$router.push({
        path: 'search',
        query: {
          q: this.search
        }
      })
      this.searchPackages(this.search).then(() => {
        this.searching = false
      })
    },
    searchPackages (query) {
      this.searchLoading = true
      this.docfilterData = []
      this.codefilterData = []

      let p = axios.all([
        axios.post('/search/docs',
          { 'pattern': query }
        ),
        axios.post('/search/code',
          { 'pattern': query }
        )
      ])
        .then(axios.spread((doc_res, code_res) => {
          this.searchLoading = false

          if (doc_res.data.success) {
            this.docfilterData.push(doc_res.data)
          }
          if (code_res.data.success) {
            this.codefilterData.push(code_res.data)
          }
        })).catch(function (error) {
          this.searchLoading = false

          console.log(error)
        })
      return p
    },
    fetchPackages () {
      let loader = this.$loading.show({
        // Optional parameters
        container: this.$refs.contentPkg,
        color: '#2196F3',
        loader: 'bars',
      })
      axios.get('/docs/pkgs.json')
        .then(response => {
        // handle success
          let pkgobj = response.data
          pkgs_raw = response.data
          for (const pkgname in pkgobj) {
            let pkg = pkgobj[pkgname]
            pkg.uuid = pkgname
            pkg.version = pkg.latest_docs_version
            if (!pkg.metadata) {
              continue
            }
            if (pkg.docslink.search('http') == -1 && pkg.docslink.search('https') == -1) {
              pkg.docsfullpath = location.protocol + '//' + location.host + '/' + pkg.docslink
            } else {
            // links to hosted docs
              pkg.docsfullpath = pkg.docslink
            }
            if (!pkg.metadata.tags) {
              pkg.metadata.tags = []
            }
            pkgs.push(pkg)
          }

          pkgs.sort((a, b) => {
            var starsA = parseInt(a.metadata.stargazers_count) || 0
            var starsB = parseInt(b.metadata.stargazers_count) || 0
            return starsB - starsA
          })
          this.tags = this.computeTags(pkgs)
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
        .then(function () {
          // always executed
          loader.hide()
        })
    },
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
            const pkgtags = pkg.metadata.tags.map(tag => tag.toLowerCase())
            for (const tag of selectedTags) {
              if (pkgtags.indexOf(tag) === -1) {
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
    },
    onBlurSearch (val) {
      this.showSearch = false
      this.searchFocused = this.search != ''
    },
    toggleSearch () {
      let willShow = !this.showSearch
      this.showSearch = willShow
      if (willShow) {
        this.$nextTick(this.$refs.searchField.focus)
      }
    },
    computeTags (pkgs) {
      const tags = {}
      for (const pkg of pkgs) {
        let stars = parseInt(pkg.metadata.stargazers_count)
        stars = isNaN(stars) ? 1 : stars
        let tag
        for (tag of pkg.metadata.tags) {
          tag = tag.toLowerCase()
          if (tags[tag]) {
            tags[tag] += stars / pkg.metadata.tags.length
          } else {
            tags[tag] = 1
          }
        }
      }
      let sortableTags = []
      for (let tag in tags) {
        sortableTags.push({
          text: tag,
          value: tag,
          count: tags[tag]
        })
      }

      sortableTags.sort(function (a, b) {
        return b.count - a.count
      })
      return sortableTags.map(tag => tag.text)
    }
  },
  watch: {
    'primaryDrawer.pkgtagmodel': _.debounce(function () {
      this.$data.primaryDrawer.loading = true
      this.filterPackages().then((result) => {
        this.$data.filteredPackages = result
        this.$data.primaryDrawer.loading = false
      })
    }, 200),
    'primaryDrawer.pkgsearchmodel': _.debounce(function () {
      this.$data.primaryDrawer.loading = true
      this.filterPackages().then((result) => {
        this.$data.filteredPackages = result
        this.$data.primaryDrawer.loading = false
      })
    }, 200),
    dark: function (val) {
      this.$cookies.set('darkTheme', val)
    }
  },
  computed: {
    isSearch () {
      return this.$route.path.indexOf('/search') === 0
    },
    searchQuery () {
      if (this.isSearch) {
        return this.$route.query.q
      }
      return ''
    },
    juliaLogo () {
      return this.$data.dark ? require('./assets/julia-dark.svg') : require('./assets/julia-light.svg')
    },
    docfilteredLists () {
      let searchArr = []
      this.docfilterData.forEach(function (ele) {
        searchArr = []
        ele.data.forEach(function (element) {
            let y = pkgs_raw[element.package]
            element.sections.forEach(function (e) {
            let obj = e
            obj['pkgname'] = y.name + '.jl';
            if(y.name  == "julia"){
                obj['pkgname'] = y.name;
            }
            obj['docsfullpath'] = location.protocol + '//' + location.host + '/' + y.docslink
            searchArr.push(obj)
          })
        })
      })
      return searchArr
    },
    codefilteredLists () {
      let codeSearchArr = []
      this.codefilterData.forEach(function (ele) {
        codeSearchArr = []
        for (var i = 0; i < ele.data.length; i++) {
          let pkg_data = pkgs_raw[ele.data[i].package]
          let pkg_search_data_file = ele.data[i].file
          let pkg_search_data = ele.data[i]
          pkg_search_data['owner'] = pkg_data.metadata.owner;
          let search_file_parts = pkg_search_data_file.split('/');
          let name = search_file_parts[1] == "julia" ? "julia": search_file_parts[1]+".jl";
          let version = search_file_parts[3];
          let pkg_actual_url = [name, 'blob', 'v' + version].concat(search_file_parts.splice(4, search_file_parts.length - 1)).join('/')
          pkg_search_data['pkg_actual_path'] = pkg_actual_url
          let pkg_display_path = [name, 'v'+version].concat(search_file_parts.splice(4, search_file_parts.length - 1)).join('/')
          pkg_search_data['pkg_display_path'] = pkg_display_path
          codeSearchArr.push(pkg_search_data)
        }
      })
      return codeSearchArr
    }
  }
}
</script>

<style lang="scss">
.home-link {
  color: inherit;
  text-decoration: none;
  line-height: 50px;
}
.filter-chip {
  max-width: 115px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.no-result-spacer {
  .nothing-icon {
    font-size: 80px!important;
    opacity: 0.3;
  }
}


</style>
