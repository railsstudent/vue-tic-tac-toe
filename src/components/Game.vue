<template>
  <div class="game">
    <h1>Vue Tic Tac Toe</h1>
    <div class="main-container">
      <GameSelector
        :nextPlayer="nextPlayer"
        :winner="winner"
        :disableControls="disableControls"
        @start="startGame"
      />
      <MovesList
        :board.sync="board"
        :histories.sync="histories"
        :nextPlayer.sync="nextPlayer"
        :endGame="endGame"
        :opponent="opponent"
      />
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
import MovesList from "./MovesList.vue";
import GameSelector from "./GameSelector.vue";
import { STATE, PLAYER_X, PLAYER_O } from "@/constants";
import { Strategy } from "@/best-strategy";
import "./styles.scss";

@Component({
  components: {
    Board,
    MovesList,
    GameSelector
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
  endGame = true;

  @Provide()
  strategy: Strategy;

  @Provide()
  newGameClicked = false;

  @Provide()
  opponent = "";

  mounted() {
    this.board = Array(9).fill("");
    this.histories = [[...this.board]];
    this.strategy = new Strategy(PLAYER_O, PLAYER_X);
  }

  get disableControls() {
    return !this.endGame && this.newGameClicked;
  }

  changePlayer() {
    this.nextPlayer = this.nextPlayer === PLAYER_X ? PLAYER_O : PLAYER_X;
  }

  announceWinner(state: STATE) {
    if (state == STATE.WINNER) {
      this.winner = this.nextPlayer;
      this.endGame = true;
      this.newGameClicked = false;
    } else if (state === STATE.TIED) {
      this.winner = "tied";
      this.endGame = true;
      this.newGameClicked = false;
    }
  }

  startGame(opponent: string) {
    this.endGame = false;
    this.newGameClicked = true;
    this.nextPlayer = PLAYER_X;
    this.winner = "N/A";
    this.histories = [Array(9).fill("")];
    this.board = [...this.histories[this.histories.length - 1]];
    this.opponent = opponent;
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
      grid-area: player;
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

    .moves {
      grid-area: moves;
      border: 2px solid rebeccapurple;
    }

    .game {
      grid-area: game;
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
  }

  h1 {
    --title-font: 1.5em;
  }
}
</style>
