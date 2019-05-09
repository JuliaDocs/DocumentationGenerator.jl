<template>
  <v-layout>
    <ul>
      <li>
        <a class="a-color" :href="data.docsfullpath + '/' + data.docname" target="_blank" v-html="$options.filters.highlight(data.title, searchKey)">
          {{ data.title }}
        </a>
        ({{ data.category }})&nbsp;-&nbsp;
        <a class="a-color"
           :href="data.docsfullpath"
           target="_blank">
          {{data.pkgname}}
        </a>
      </li>
    </ul>
  </v-layout>
</template>
<script>
export default {
  name: 'DocfilterCard',
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
}
a{
  text-decoration: none;
}
li{
  font-size: 16px;
}
.theme--dark .a-color{
  color: #82b1ff;
}
.theme--dark .highlight{
  background-color: gray;
}
</style>
