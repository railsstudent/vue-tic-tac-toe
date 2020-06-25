<template>
  <div class="board">
    <Square
      class="square"
      v-for="(square, i) of board"
      :key="`square-${i}`"
      :value="square"
    ></Square>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from "vue-property-decorator";
import Square from "./Square.vue";

const PLAYER_X = 'X';
const PLAYER_Y = 'O';

@Component({
  components: {
    Square
  }
})
export default class Board extends Vue {
  @Provide()
  board: string[] = [];

  mounted() {
    this.board = Array(9).fill("-");
    console.log("board", this.board);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.board {
  --width: 150px;

  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: repeat(3, minmax(var(--width), 1fr));
  grid-template-rows: repeat(3, minmax(var(--width), 1fr));

  padding: 0.5rem;

  // border: 3px solid chocolate;
  .square {
    border: 2px solid brown;
  }
}

@media screen and (max-width: 400px) {
  .board {
    --width: 50px;
  }
}

@media screen and (min-width: 401px) and (max-width: 600px) {
  .board {
    --width: 100px;
  }
}
</style>
