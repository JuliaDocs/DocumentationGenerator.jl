<template>
  <v-card>
    <v-card-title class="pb-0">
      <a
        class="a-color"
        :href="'https://github.com/' + data.owner + '/' + data.pkg_actual_path + '#L' + data.line"
        target="_blank"
        v-html="data.pkg_display_path"
      />
    </v-card-title>
    <v-card-text>
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
}
.theme--dark .a-color{
  color: #82b1ff;
}
.theme--dark code {
  background-color: transparent;
  color: white;
}
</style>
