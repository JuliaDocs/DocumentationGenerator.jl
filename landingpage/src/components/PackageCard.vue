<template>
  <v-card>
    <div :class="'package-card ' + details.cistatus">
      <v-card-title primary-title>
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

      <v-card-text>
        {{details.tagline}}
      </v-card-text>
      <v-card-text>
        <v-chip small v-for="tag in details.tags.slice(0, 8)">
          {{tag}}
        </v-chip>
      </v-card-text>

      <v-card-actions>
        <span class="pl-2">{{details.stars}}</span>
        <v-icon small>star</v-icon>
        <span class="pl-2">⋅</span>
        <span class="pl-2">{{details.lastversion}}</span>
        <span class="pl-2">⋅</span>
        <span class="pl-2">3 weeks ago</span>
        <v-spacer/>
        <v-btn flat color="grey">Documentation</v-btn>
        <v-btn flat color="grey">Source</v-btn>
        <v-btn flat color="grey">Github</v-btn>
      </v-card-actions>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'PackageCard',
  props: {
    details: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.package-card {
  border-left: 0.8em solid grey;
  &.passing {
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
