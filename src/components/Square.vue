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
div {
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  --cell-size: 4rem;
  color: goldenrod;
  font-size: var(--cell-size);
  font-weight: 600;
  margin: 1rem auto;
}

@media screen and (max-width: 450px) {
  h1 {
    --cell-size: 2rem;
  }
}

@media screen and (min-width: 451px) and (max-width: 550px) {
  h1 {
    --cell-size: 3rem;
  }
}
</style>
