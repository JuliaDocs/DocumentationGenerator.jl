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
      <h4 class="px-4 pt-4">Filter Packages by...</h4>
      <div class="px-4 pt-1">
        <v-text-field
          v-model="primaryDrawer.pkgnamemodel"
          :loading="primaryDrawer.loading"
          prepend-inner-icon="search"
          clearable
          label="Name"
        />
      </div>
      <div class="px-4 pt-1">
        <v-text-field
          v-model="primaryDrawer.pkgownermodel"
          :loading="primaryDrawer.loading"
          prepend-inner-icon="group"
          clearable
          label="Owner"
        />
      </div>
      <div class="px-4 pt-1">
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
      <router-link
        class="v-responsive home-link"
        to="/"
      >
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
        ref="searchField"
        v-model="search"
        placeholder="Search ..."
        :loading="searchLoading"
        single-line
        flat
        clearable
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
        v-show="$vuetify.breakpoint.xs && !showSearch"
        class="pr-0 pl-0"
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
        >
          <v-tab href="#docsTab">
            Docs
            <span>
              : {{ count.docs }}
            </span>
          </v-tab>
          <v-tab href="#codeTab">
            Code
            <span>
              : {{ count.code }}
            </span>
          </v-tab>
          <v-tab href="#symbolTab">
            Symbol
            <span>
              : {{ count.symbol }}
            </span>
          </v-tab>
          <!-- Docs search results. Begins -->
          <v-tab-item value="docsTab">
            <v-flex
              ref="contentSearch"
              xs12
            >
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
                      <FilterCard
                        :search-key="searchQuery"
                        :data="props.item"
                      />
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-data-iterator>
            </v-flex>
          </v-tab-item>
          <!-- Docs search results. Ends -->
          <!-- Code search results. Begins -->
          <v-tab-item value="codeTab">
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
                    <FilterCard
                      :search-key="searchQuery"
                      :data="props.item"
                    />
                  </v-flex>
                </v-layout>
              </v-container>
            </v-data-iterator>
          </v-tab-item>
          <!-- Code search results. Ends -->
          <!-- Symbol search results. Begins -->
          <v-tab-item value="symbolTab">
            <v-layout
              row
              justify-space-between
              class="px-4 pt-3"
            >
              <v-flex xs1>
                <h4 class="mt-4">
                  Filter by
                </h4>
              </v-flex>
              <!-- Usage filter section. Begins -->
              <v-flex xs5>
                <v-select
                  v-model="symbolSearch.filterByUsage"
                  :items="symbolSearch.usageOptions"
                  label="usage"
                  @change="commitSearch"
                />
              </v-flex>
              <!-- Usage filter section. Ends -->
              <!-- Type filter section. Begins -->
              <v-flex xs5>
                <v-select
                  v-model="symbolSearch.filterByType"
                  :items="symbolSearch.typeOptions"
                  label="type"
                  @change="commitSearch"
                />
              </v-flex>
              <!-- Type filter section. Ends -->
            </v-layout>
            <v-data-iterator
              class="data-iterator pt-3"
              :items="filterSymbolLists"
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
                    <FilterCard
                      :search-key="searchQuery"
                      :data="props.item"
                    />
                  </v-flex>
                </v-layout>
              </v-container>
            </v-data-iterator>
          </v-tab-item>
          <!-- Code search results. Ends -->
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
      <v-spacer />
      <div class="px-3">
        <v-switch
          v-model="dark"
          primary
          label="Dark"
        />
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import PackageCard from './components/PackageCard.vue'
import FilterCard from './components/FilterCard.vue'
import _ from 'underscore'
import { go as fuzzysort } from 'fuzzysort'
import axios from 'axios'

axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? '' : 'https://stagingjuliateam.southindia.cloudapp.azure.com'

let pkgs = []
let pkgs_raw = {}

export default {
  name: 'App',
  components: {
    PackageCard,
    FilterCard
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
        pkgnamemodel: null,
        pkgownermodel: null,
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
      symbolfilterData: [],
      tabModel: 'docsTab',
      symbolSearch: {
        filterByUsage: '',
        filterByType: '',
        usageOptions: ['all', 'usage', 'definition'],
        typeOptions: ['all', 'function', 'type', 'macro', 'module']
      },
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
    fetchPackages () {
      let loader = this.$loading.show({
        // Optional parameters
        container: this.$refs.contentPkg,
        color: '#2196F3',
        loader: 'bars'
      })
      axios.get('/docs/pkgs.json').then(response => {
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
          if (pkg.docslink.search('http') === -1 && pkg.docslink.search('https') === -1) {
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
      .finally(function () {
        // always executed
        loader.hide()
      })
    },
    searchPackages (query) {
      this.searchLoading = true
      this.showCount = false
      this.docfilterData = []
      this.codefilterData = []
      this.symbolfilterData = []

      let usage = ''
      let type = ''
      if (this.symbolSearch.filterByUsage !== '' || this.symbolSearch.filterByType !== '') {
        if (this.symbolSearch.filterByUsage !== '') {
          if (this.symbolSearch.filterByUsage === 'usage') {
            usage = 'use'
          } else if (this.symbolSearch.filterByUsage === 'definition') {
            usage = 'define'
          }
        }
        type = this.symbolSearch.filterByType !== '' ? this.symbolSearch.filterByType : ''
      }

      let q = {
        pattern: query
      }
      if (this.$data.filteredPackages.length !== this.$data.pkgs.length) {
        let pkgs = this.$data.filteredPackages.map(p => p.uuid)
        q.package = pkgs
      }

      let p = axios.all([
        axios.post('/search/docs', q),
        axios.post('/search/code', q),
        axios.post('/search/sym', Object.assign(q, {
            'types': type,
            'usages': usage
          })
        )
      ])
      .then(axios.spread((doc_res, code_res, sym_res) => {
        this.searchLoading = false
        if (doc_res.data.success) {
          this.docfilterData.push(doc_res.data)
        }
        if (code_res.data.success) {
          this.codefilterData.push(code_res.data)
        }
        if (sym_res.data.success) {
          this.symbolfilterData.push(sym_res.data)
        }
        this.showCount = true
      })).catch(function (error) {
        this.searchLoading = false
        console.log(error)
      })
      return p
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
        pkgs.forEach(p => {
          p.owner = p.metadata.owner
        })
        console.log(pkgs);
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

        let filterText = this.$data.primaryDrawer.pkgownermodel
        if (filterText && filterText.length > 0) {
          pkgs = fuzzysort(filterText, pkgs, {
            key: 'owner',
            limit: Infinity,
            threshold: -Infinity
          })
          pkgs = pkgs.map(pkg => pkg.obj)
        }

        filterText = this.$data.primaryDrawer.pkgnamemodel
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
    filterSearchData (data) {
      let arr = []
      for (var i = 0; i < data.length; i++) {
        let pkg_data = pkgs_raw[data[i].package]
        let pkg_search_data_file = data[i].file
        let pkg_search_data = data[i]
        pkg_search_data['owner'] = typeof pkg_data !== 'undefined' && pkg_data.hasOwnProperty('metadata') ? pkg_data.metadata.owner : 'JuliaLang'
        let search_file_parts = pkg_search_data_file.split('/')
        let name = search_file_parts[1] == 'julia' ? 'julia' : search_file_parts[1] + '.jl'
        let version = search_file_parts[3]
        let pkg_actual_url = [name, 'blob', 'v' + version].concat(search_file_parts.splice(4, search_file_parts.length - 1)).join('/')
        pkg_search_data['pkg_actual_path'] = pkg_actual_url
        let pkg_display_path = [name, 'v' + version].concat(search_file_parts.splice(4, search_file_parts.length - 1)).join('/')
        pkg_search_data['pkg_display_path'] = pkg_display_path
        arr.push(pkg_search_data)
      }
      return arr
    },
    onBlurSearch (val) {
      this.showSearch = false
      this.searchFocused = this.search !== ''
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
    'primaryDrawer.pkgnamemodel': _.debounce(function () {
      this.$data.primaryDrawer.loading = true
      this.filterPackages().then((result) => {
        this.$data.filteredPackages = result
        this.$data.primaryDrawer.loading = false
      })
    }, 200),
    'primaryDrawer.pkgownermodel': _.debounce(function () {
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
      let search_path_parts = this.$route.path.split('/')
      return search_path_parts[search_path_parts.length - 1] === 'search'
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
            obj['pkgname'] = y.name + '.jl'
            if (y.name === 'julia') {
              obj['pkgname'] = y.name
            }
            obj['docsfullpath'] = location.protocol + '//' + location.host + '/' + y.docslink
            obj['isDoc'] = true
            searchArr.push(obj)
          })
        })
      })
      return searchArr
    },
    codefilteredLists () {
      let codeSearchArr = []
      this.codefilterData.forEach(ele => {
        codeSearchArr = this.filterSearchData(ele.data)
      })
      return codeSearchArr
    },
    filterSymbolLists () {
      let symArr = []
      this.symbolfilterData.forEach(element => {
        symArr = this.filterSearchData(element.data)
      })
      return symArr
    },
    count () {
      return {
        docs: this.docfilteredLists.length,
        code: this.codefilteredLists.length,
        symbol: this.filterSymbolLists.length
      }
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
