<template>
  <div>
    <!-- Doc filter results section. Begins -->
    <v-layout v-if="data.isDoc">
      <ul>
        <li>
          <a
            class="a-color cust-a"
            :href="data.docsfullpath + '/' + data.docname"
            target="_blank"
            v-html="$options.filters.highlight(data.title, searchKey)"
          >
            {{ data.title }}
          </a>
          ({{ data.category }})&nbsp;-&nbsp;
          <a
            class="a-color cust-a"
            :href="data.docsfullpath"
            target="_blank"
          >
            {{ data.pkgname }}
          </a>
        </li>
      </ul>
    </v-layout>
    <!-- Doc filter results section. Ends -->
    <!-- Code and Symbol filter results section. Begins -->
    <v-card v-else>
      <v-card-text>
        <div class="pb-1">
          <a
          class="a-color"
          :href="'https://github.com/' + data.owner + '/' + data.pkg_actual_path + '#L' + data.line"
          target="_blank"
          v-html="data.pkg_display_path"
          />
        </div>
        <!-- Only for symbol search. Begins -->
        <div v-if="data.usage"class="pb-1">{{data.packagename}} ( usage : {{data.usage}}, type : {{data.type}} )</div >
        <!-- Only for symbol search. Ends-->
        <code>
          <span>{{ data.line }}</span>
          &nbsp;
          <span v-html="$options.filters.highlight(data.text, searchKey)">
            {{ data.text }}
          </span>
        </code>
      </v-card-text>
    </v-card>
    <!-- Code and Symbol filter results section. Ends -->
  </div>
</template>

<script>
export default {
  name: 'FilterCard',
  filters: {
    highlight (words, query) {
      var str = new RegExp(query, 'ig')
      return words.replace(str, (matchedStr) => {
        return ('<span style="background-color: #EFD469">' + matchedStr + '</span>')
      })
    }
  },
  props: {
    data: Object,
    searchKey: String
  }
}
</script>

<style scoped>
code{
  padding: 10px;
  white-space: normal;

  font-weight: 500;
  font-size: 90%;
  width: 100%;

  box-shadow: 0px 0px;  
}
.theme--dark .a-color{
  color: #82b1ff;
}
.theme--dark code {
  background-color: transparent;
  color: white;
  box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
}
li{
  font-size: 16px;
}
.theme--dark .highlight{
  background-color: gray;
}
.cust-a{
  text-decoration: none;
}
</style>
