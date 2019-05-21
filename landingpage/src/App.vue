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
          :disabled="searchFocused"
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
          :disabled="searchFocused"
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
      <v-spacer />
      <v-text-field
        v-show="showSearch || !($vuetify.breakpoint.xs)"
        v-model="search"
        placeholder="Search ..."
        prepend-inner-icon="search"
        :loading="searchLoading"
        single-line
        flat
        clearable
        ref="searchField"
        @keyup.13="getfilterList"
        @focus="searchFocused = true"
        @blur="onBlurSearch"
      />
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
      <div v-if="search != ''">
        <v-tabs>
          <v-tab>
            Docs
          </v-tab>
          <v-tab>
            Code
          </v-tab>
          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <v-flex xs12>
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
                            :search-key="search"
                            :data="props.item"
                          />
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-data-iterator>
                </v-flex>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <v-card-text>
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
                          :search-key="search"
                          :data="props.item"
                        />
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-data-iterator>
                <!-- Code search results displaying section -->
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </div>
      <!-- Search Section ends -->
      <div
        v-if="search == ''"
        ref="content"
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

axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? '' : 'https://pkg.julialang.org'

let codefilterData = []
let docfilterData = []
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
      codefilterData: codefilterData,
      docfilterData: docfilterData
    }
  },
  mounted () {
    this.fetchPackages()
  },
  methods: {
    getfilterList () {
      this.searchLoading = true
      axios.all([
        this.request_1(),
        this.request_2()
      ])
        .then(axios.spread((doc_res, code_res) => {
          if (doc_res.data.success) { docfilterData.push(doc_res.data) }
          if (code_res.data.success) { codefilterData.push(code_res.data) }
          this.searchLoading = false
        })).catch(function (error) {
          this.searchLoading = false
          console.log(error)
        })
    },
    request_1 () {
      return axios.post('/search/docs',
        { 'pattern': this.search }
      )
    },
    request_2 () {
      return axios.post('/search/code',
        { 'pattern': this.search }
      )
    },
    fetchPackages () {
      let loader = this.$loading.show({
        // Optional parameters
        container: this.$refs.content,
        color: '#009933',
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
              console.log(tag);
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
    juliaLogo () {
      return this.$data.dark ? require('./assets/julia-dark.png') : require('./assets/julia-light.svg')
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
          let x = pkgs_raw[ele.data[i].package]
          let str = ele.data[i].file
          let obj = ele.data[i]
          obj['owner'] = x.metadata.owner
          let arr = str.split('/')
          let arr1 = str.split('/')
          arr.splice(0, 1)
          arr[0] = arr[0] + '.jl'
          arr[1] = 'blob'
          arr[2] = 'v' + arr[2]
          obj['pkgurl'] = arr.join('/')
          arr1.splice(0, 1)
          arr1.splice(1, 1)
          arr1[0] = arr1[0] + '.jl'
          arr1[1] = 'v' + arr1[1]
          obj['temp_pkgname'] = arr1.join('/')
          codeSearchArr.push(obj)
        }
      })
      return codeSearchArr
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
