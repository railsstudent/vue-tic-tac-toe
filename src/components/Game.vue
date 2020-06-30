<template>
  <div class="game">
    <h1>Vue Tic Tac Toe</h1>
    <div class="main-container">
      <div class="left">
        <div class="play-container">
          <p class="info">Next Player: {{ nextPlayer }}</p>
          <p class="info">Winner: {{ winner }}</p>
        </div>
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
      <div class="action-container">
        <button @click="startGame" v-if="endGame">New Game</button>
        <fieldset class="moves">
          <legend>Moves</legend>
          <button
            v-for="(_, i) of histories"
            :key="`move-${i}`"
            @click="goBackToMove($event, i)"
          >
            Move {{ i }}
          </button>
        </fieldset>
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
    console.log("idx", idx);
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
    margin-bottom: 0.5rem;
  }

  .main-container {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-areas: "board sidebar";

    .left {
      grid-area: board;

      .play-container {
        display: flex;
        justify-content: space-around;
        padding: 0.5rem;
      }

      .board {
        border: 10px solid rebeccapurple;
        border-radius: 5px;
      }
    }

    .action-container {
      padding-left: 1rem;
      padding-right: 1rem;

      grid-area: sidebar;

      button {
        padding: 0.5rem;
        margin-bottom: 10px;
        font-size: 1rem;
        border-radius: 10px;
        background: lightblue;
      }

      .moves {
        padding: 0.75rem;
      }

      fieldset {
        display: flex;
      }
    }
  }
}

@media screen and (max-width: 550px) {
  .game .main-container {
    grid-template-areas:
      "sidebar"
      "board";

    .action-container {
      button {
        font-size: 0.85rem;
        padding: 0.25rem;
        border-radius: 5px;
      }

      fieldset {
        display: block;
        button {
          margin-right: 0.25rem;
        }
      }
    }
  }

  h1 {
    --title-font: 1.5em;
  }
}
</style>
