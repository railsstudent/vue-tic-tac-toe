<template>
  <div class="board">
    <Square
      class="square"
      v-for="(square, i) of board"
      :key="`square-${i}`"
      :value="square"
      :index="i"
      @setMove="update"
      :class="winningClass(i)"
    ></Square>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide, Prop, Watch } from "vue-property-decorator";
import Square from "./Square.vue";
import { STATE } from "@/constants";
import { Direction } from "@/types";

@Component({
  components: {
    Square
  }
})
export default class Board extends Vue {
  @Provide()
  gameState = STATE.ONGOING;

  @Provide()
  which: number[] = [];

  @Provide()
  direction?: Direction;

  @Prop()
  board: string[];

  @Prop()
  histories: string[][];

  @Prop()
  nextPlayer: string;

  @Prop()
  endGame: boolean;

  @Watch("endGame", { immediate: true })
  endGameUpdated() {
    if (!this.endGame) {
      this.gameState = STATE.ONGOING;
      this.which = [];
      this.direction = undefined;
    }
  }

  winningClass(i: number) {
    if (this.which.indexOf(i) >= 0) {
      return `winning-${this.direction}`;
    }
    return "";
  }

  update(index: number) {
    if (this.gameState !== STATE.ONGOING) {
      return;
    }

    const newBoard = this.board.reduce(
      (acc, v, i) =>
        i === index ? acc.concat(this.nextPlayer) : acc.concat(v),
      [] as string[]
    );

    const { state, which = [], direction = undefined } =
      this.checkWinner(newBoard) || {};
    this.gameState = state;
    this.which = which;
    this.direction = direction;
    if (this.gameState === STATE.ONGOING) {
      this.$emit("changePlayer");
      this.$emit("allMoves", [...this.histories, newBoard]);
    } else {
      this.$emit("allMoves", [...this.histories, newBoard]);
      this.$emit("announcementWinner", this.gameState);
    }
  }

  checkWinner(newBoard: string[]) {
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
    const directions = [
      Direction.HORT,
      Direction.HORT,
      Direction.HORT,
      Direction.VERTICAL,
      Direction.VERTICAL,
      Direction.VERTICAL,
      Direction.LEFT_DIAG,
      Direction.RIGHT_DIAG
    ];

    // let hasWinner = true;
    for (let i = 0; i < winningMoves.length; i++) {
      const hasWinner =
        winningMoves[i].filter(m => newBoard[m] !== this.nextPlayer).length ===
        0;
      if (hasWinner) {
        return {
          state: STATE.WINNER,
          which: winningMoves[i],
          direction: directions[i]
        };
      }
    }
    if (newBoard.filter(v => v !== "").length === 9) {
      return { state: STATE.TIED };
    }
    return { state: STATE.ONGOING };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@mixin baseStrikethrough() {
  content: "";
  position: absolute;
  z-index: 1;
  border: 1px solid black;
}

@mixin strikethrough($left: 0, $top: 50%, $width: 100%, $height: 0) {
  @include baseStrikethrough();
  left: $left;
  top: $top;
  width: $width;
  height: $height;
}

@mixin strikethroughDiagonal($rotation) {
  @include baseStrikethrough();
  height: 140%;
  transform: rotate($rotation);
}

.board {
  --width: 130px;

  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: repeat(3, var(--width));
  grid-template-rows: repeat(3, var(--width));

  padding: 0.5rem;

  .square {
    position: relative;

    &.winning {
      &-hort:after {
        @include strikethrough(0, 50%, 100%, inherit);
      }

      &-vertical:after {
        @include strikethrough(50%, 0, inherit, 100%);
      }

      &-left-diag:after {
        @include strikethroughDiagonal(-45deg);
      }

      &-right-diag:after {
        @include strikethroughDiagonal(45deg);
      }
    }
  }
}

@media screen and (max-width: 450px) {
  .board {
    --width: 90px;
  }
}

@media screen and (min-width: 451px) and (max-width: 600px) {
  .board {
    --width: 110px;
  }
}
</style>
