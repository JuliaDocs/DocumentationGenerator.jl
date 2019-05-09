<template>
  <v-card>
    <v-card-title class="pb-0">
      <a
      class="a-color"
      :href="'https://github.com/' + data.owner + '/' + data.pkgurl + '#L' + data.line"
      v-html="data.temp_pkgname"
      target="_blank">
    </a>
  </v-card-title>
  <v-card-text >
    <code>
      <span>{{ data.line }}</span>
      &nbsp;
      <span v-html="$options.filters.highlight(data.text, searchKey)">
        {{ data.text }}
      </span>
    </code>
  </v-card-text>
</v-card>
</template>

<script>
export default {
  name: 'CodefilterCard',
  props: {
    data: Object,
    searchKey: String
  },
  filters: {
    highlight (words, query) {
      var str = new RegExp(query, 'ig')
      return words.replace(str, (matchedStr) => {
        return ('<span style="background-color: #EFD469">' + matchedStr + '</span>')
      })
    }
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
}
.theme--dark .a-color{
  color: #82b1ff;
}
.theme--dark code {
  background-color: transparent;
  color: white;
}
</style>
