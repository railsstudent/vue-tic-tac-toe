<template>
  <div>
    <h1>{{ value }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Square extends Vue {
  @Prop()
  value: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  color: goldenrod;
  font-size: 2rem;
  font-weight: 600;
  margin: 1rem auto;
}
</style>
