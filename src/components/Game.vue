<template>
  <div class="game">
    <h1>Vue Tic Tac Toe</h1>
    <Board></Board>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Board from "./Board.vue";

@Component({
  components: {
    Board
  }
})
export default class Game extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  --title-font: 2em;

  color: goldenrod;
  font-size: var(--title-font);
  font-weight: 600;
  text-align: center;
  height: 3rem;
}

.game {
  display: block;
  width: 100%;
  max-width: 600px;
  height: 100%;
  max-height: 600px;
  border: 1px solid green;

  .board {
    margin: 1rem;
    border: 10px solid rebeccapurple;
    border-radius: 5px;
  }
}

@media screen and (max-width: 400px) {
  h1 {
    --title-font: 1.5em;
  }
}

@media screen and (min-width: 401px) and (max-width: 600px) {
  h1 {
    --title-font: 1.75em;
  }
}
</style>
