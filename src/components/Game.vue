<template>
  <div class="hello">
    <h1>Vue Tic Tac Toe</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Game extends Vue {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  color: goldenrod;
  font-size: 2rem;
  font-weight: 600;
}
</style>
