<template>
  <v-card>
    <div :class="'package-card ' + cistatus">
      <v-card-title
        class="pb-1"
        primary-title
      >
        <div>
          <span>
            <h3 class="headline mb-0">
              <span class="pkg-owner">
                {{details.owner}}
              </span>
              <span class="pkg-owner">
                /
              </span>
              <span class="pkg-name">
                {{details.name}}
              </span>
            </h3>
          </span>
        </div>
      </v-card-title>

      <v-card-text class="pb-1">
        {{details.description}}
      </v-card-text>
      <v-card-text class="py-1">
        <v-chip
          label
          small
          v-on:click="clickedTag(tag)"
          v-for="tag in styledTags"
          :outline="tag.selected"
          :key="tag.name">
          {{tag.name}}
        </v-chip>
      </v-card-text>

      <v-card-actions>
        <span class="pl-2">{{details.stargazers_count}}</span>
        <v-icon small>star</v-icon>
        <span class="pl-2">⋅</span>
        <span class="pl-2">{{details.version}}</span>
        <span class="pl-2">⋅</span>
        <span class="pl-2">{{details.license}}</span>
        <v-spacer></v-spacer>
        <v-btn flat color="primary" :href="'packages/'+details.name">
          Documentation
        </v-btn>
        <!-- <v-btn flat color="grey">Source</v-btn> -->
        <v-btn flat color="primary" :href="details.url">
          Github
        </v-btn>
      </v-card-actions>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'PackageCard',
  props: {
    details: Object,
    // selectedTags: Array
  },
  methods: {
    clickedTag (tag) {
      this.$emit('tag-click', {text: tag.name})
    }
  },
  computed: {
    styledTags () {
      // return this.$props.details.tags
      let pkgtags = this.$props.details.tags
      let tags = []
      for (const tag of pkgtags.sort()) {
        tags.push({
          name: tag,
          selected: false //this.$props.selectedTags.indexOf(tag) === -1
        })
      }
      return tags
    },
    cistatus () {
      let badges = this.$props.details.batches
      if (badges && badges.travis && badges.travis[0]) {
        return badges["travis"][0].value
      } else {
        return ""
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.package-card {
  border-left: 0.8em solid grey;
  &.passes {
    border-left-color: green;
  }
  &.failing {
    border-left-color: red;
  }

  .pkg-owner {
    color: grey;
  }
}

</style>
