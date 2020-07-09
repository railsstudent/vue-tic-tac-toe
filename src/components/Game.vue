<template>
  <div class="game">
    <h1>Vue Tic Tac Toe</h1>
    <div class="main-container">
      <div class="play-container">
        <p class="info">Next Player: {{ nextPlayer }}</p>
        <p class="info winner">Winner: {{ winner }}</p>
        <div class="info">
          <button
            class="button new-game"
            :disabled="!endGame"
            @click="startGame"
          >
            New Game
          </button>
        </div>
        <div class="info">
          <label class="opponent">Opponent: </label>
          <select v-model="opponent" :disabled="!endGame">
            <option value="player">vs Human</option>
            <option value="ai">vs AI</option>
          </select>
        </div>
      </div>

      <div class="moves" v-if="opponent === 'player'">
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
      <div class="left">
        <Board
          :nextPlayer="nextPlayer"
          :board="board"
          :histories="histories"
          :endGame="endGame"
          :opponent="opponent"
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
import { STATE, PLAYER_X, PLAYER_O } from "@/constants";
import { Strategy } from "@/best-strategy";

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

  @Provide()
  strategy: Strategy;

  @Provide()
  opponent = "player";

  mounted() {
    this.board = Array(9).fill("");
    this.histories = [[...this.board]];
    this.strategy = new Strategy(PLAYER_O, PLAYER_X);
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

    if (
      !this.endGame &&
      this.opponent !== "player" &&
      this.nextPlayer === PLAYER_O
    ) {
      const move = this.strategy.findBestMove(this.board);
      console.log("move", move);
      const { idx } = move;
      const prevBoard = [...this.board];
      prevBoard[idx] = this.nextPlayer;
      this.board = prevBoard;
    }
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

  .main-container {
    display: grid;
    grid-template-columns: auto auto;
    grid-auto-rows: auto;
    grid-template-areas:
      "player player"
      "moves   board";
    grid-gap: 0.5rem;

    .play-container {
      padding: 0.5rem;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;

      grid-area: player;

      display: flex;
      flex-wrap: wrap;

      .info {
        flex: 0 0 50%;
        font-size: 1.25rem;

        &.winner {
          font-weight: 600;
        }

        label.opponent {
          margin-right: 0.5rem;
        }
      }

      div.info {
        display: flex;
        align-items: flex-start;

        select {
          height: 2rem;
          padding: 0 0.25rem;
        }
      }
    }

    .left {
      grid-area: board;
      display: flex;
      justify-content: center;

      .board {
        border: 5px solid rebeccapurple;
        border-radius: 5px;
      }
    }

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
        margin-bottom: 0;
      }
    }

    .moves {
      padding: 0.5rem 0.5rem 0 0.5rem;
      display: flex;
      flex-direction: column;
    }

    .game {
      grid-area: game;
    }

    .moves {
      grid-area: moves;
      border: 2px solid rebeccapurple;
    }
  }
}

@media screen and (max-width: 600px) {
  .game .main-container {
    grid-template-columns: auto;
    grid-template-areas:
      "player"
      "board"
      "moves";
    grid-column-gap: 0;

    .button {
      font-size: 0.85rem;
      border-radius: 5px;
    }

    .play-container {
      flex-wrap: wrap;

      .info {
        flex-basis: 48%;
      }

      div.info {
        justify-content: flex-start;
        align-content: flex-start;
      }
    }

    .moves {
      flex-direction: row;
      flex-wrap: wrap;

      .button {
        margin-right: 0.25rem;
        flex: 1 0 20%;
        width: 0;
      }
    }
  }

  h1 {
    --title-font: 1.5em;
  }
}
</style>
