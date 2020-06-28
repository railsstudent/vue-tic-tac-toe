<template>
  <div class="board">
    <Square
      class="square"
      v-for="(square, i) of board"
      :key="`square-${i}`"
      :value="square"
      :index="i"
      @setMove="update"
    ></Square>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide, Prop, Watch } from "vue-property-decorator";
import Square from "./Square.vue";
import { STATE } from "../constants";

@Component({
  components: {
    Square
  }
})
export default class Board extends Vue {
  @Provide()
  board: string[] = [];

  @Provide()
  gameState = STATE.ONGOING;

  @Prop()
  nextPlayer: string;

  @Prop()
  endGame: boolean;

  @Watch("endGame", { immediate: true })
  endGameUpdated(value: boolean) {
    if (!value) {
      this.board = Array(9).fill("");
      this.gameState = STATE.ONGOING;
    }
  }

  mounted() {
    this.board = Array(9).fill("");
  }

  update(index: number) {
    if (this.gameState !== STATE.ONGOING) {
      return;
    }
    this.board = this.board.reduce(
      (acc, v, i) =>
        i === index ? acc.concat(this.nextPlayer) : acc.concat(v),
      [] as string[]
    );
    this.gameState = this.checkWinner();
    if (this.gameState === STATE.ONGOING) {
      this.$emit("changePlayer");
    } else {
      this.$emit("announcementWinner", this.gameState);
    }
  }

  checkWinner() {
    const winningMoves = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    // let hasWinner = true;
    for (let i = 0; i < winningMoves.length; i++) {
      const hasWinner =
        winningMoves[i].filter(m => this.board[m] !== this.nextPlayer)
          .length === 0;
      if (hasWinner) {
        return STATE.WINNER;
      }
    }
    if (this.board.filter(v => v !== "").length === 9) {
      return STATE.TIED;
    }
    return STATE.ONGOING;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.board {
  --width: 130px;

  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: repeat(3, var(--width));
  grid-template-rows: repeat(3, var(--width));

  padding: 0.5rem;
}

@media screen and (max-width: 450px) {
  .board {
    --width: 90px;
  }
}

@media screen and (min-width: 451px) and (max-width: 550px) {
  .board {
    --width: 110px;
  }
}
</style>
