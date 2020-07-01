<template>
  <div class="game">
    <h1>Vue Tic Tac Toe</h1>
    <div class="main-container">
      <div class="play-container">
        <p class="info">Next Player: {{ nextPlayer }}</p>
        <p class="info">Winner: {{ winner }}</p>
      </div>

      <div class="action-container">
        <div class="moves" v-if="endGame">
          <button class="button new-game" @click="startGame">New Game</button>
        </div>
        <div class="moves">
          <button
            class="button"
            v-for="(_, i) of histories"
            :key="`move-${i}`"
            @click="goBackToMove($event, i)"
            :disabled="endGame"
          >
            {{ i !== 0 ? `Move ${i}` : "Start Game" }}
          </button>
        </div>
      </div>
      <div class="left">
        <Board
          :nextPlayer="nextPlayer"
          :board="board"
          :histories="histories"
          :endGame="endGame"
          @changePlayer="changePlayer"
          @announcementWinner="announceWinner"
          @allMoves="generateMoves"
        ></Board>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from "vue-property-decorator";
import Board from "./Board.vue";
import { STATE } from "@/constants";

const PLAYER_X = "X";
const PLAYER_O = "O";

@Component({
  components: {
    Board
  }
})
export default class Game extends Vue {
  @Provide()
  board: string[] = [];

  @Provide()
  histories: string[][] = [];

  @Provide()
  nextPlayer = PLAYER_X;

  @Provide()
  winner = "N/A";

  @Provide()
  endGame = false;

  mounted() {
    this.board = Array(9).fill("");
    this.histories = [[...this.board]];
  }

  changePlayer() {
    this.nextPlayer = this.nextPlayer === PLAYER_X ? PLAYER_O : PLAYER_X;
  }

  announceWinner(state: STATE) {
    if (state == STATE.WINNER) {
      this.winner = this.nextPlayer;
      this.endGame = true;
    } else if (state === STATE.TIED) {
      this.winner = "tied";
      this.endGame = true;
    }
  }

  startGame() {
    this.endGame = false;
    this.nextPlayer = PLAYER_X;
    this.winner = "N/A";
    this.histories = [Array(9).fill("")];
    this.board = [...this.histories[this.histories.length - 1]];
  }

  generateMoves(histories: string[][]) {
    this.histories = [...histories];
    this.board = [...this.histories[this.histories.length - 1]];
  }

  goBackToMove(event: Event, idx: number) {
    event.preventDefault();
    event.stopImmediatePropagation();
    if (this.endGame) {
      return;
    }
    this.board = [...this.histories[idx]];
    this.histories.splice(idx + 1, this.histories.length - 1 - idx);
    this.nextPlayer = idx % 2 === 0 ? PLAYER_X : PLAYER_O;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  --title-font: 2em;

  color: goldenrod;
  font-size: var(--title-font);
  font-weight: 600;
  text-decoration: underline;
  text-align: center;
  height: 3rem;
}

.game {
  display: block;
  padding: 0 1rem;

  p.info {
    font-size: 1.25rem;
    // margin-bottom: 0.5rem;
  }

  .main-container {
    display: grid;
    grid-template-columns: auto auto;
    grid-auto-rows: auto;
    grid-template-areas:
      "player player"
      "sidebar board";
    grid-gap: 0.5rem;

    .play-container {
      grid-area: player;
      display: flex;
      justify-content: space-between;
      padding: 0.5rem;

      margin-top: 1rem;
      margin-bottom: 1rem;
    }

    .left {
      grid-area: board;

      .board {
        border: 5px solid rebeccapurple;
        border-radius: 5px;
      }
    }

    .action-container {
      grid-area: sidebar;
      border: 2px solid rebeccapurple;

      .button {
        padding: 0.35rem 0.25rem;
        margin-bottom: 0.5rem;
        font-size: 1rem;
        border-radius: 10px;
        background: lighten(lightpink, 10%);
        border-color: lightpink;
        width: 6rem;

        &.new-game {
          background: plum;
          border-color: darken(plum, 10%);
        }
      }

      .moves {
        padding: 0.5rem 0.5rem 0 0.5rem;
        display: flex;
        flex-direction: column;
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .game .main-container {
    grid-template-columns: auto;
    grid-template-areas:
      "player"
      "sidebar"
      "board";
    grid-column-gap: 0;

    .play-container {
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
    }

    .action-container {
      .button {
        font-size: 0.85rem;
        border-radius: 5px;
      }

      .moves {
        flex-direction: row;
        flex-wrap: wrap;

        .button {
          margin-right: 0.25rem;
          flex-grow: 1;
          flex-shrink: 0;
          flex-basis: 20%;
          width: 0;
        }
      }
    }
  }

  h1 {
    --title-font: 1.5em;
  }
}
</style>
