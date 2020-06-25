<template>
  <div class="game">
    <h1>Vue Tic Tac Toe</h1>
    <div class="info-container">
      <p class="info">Next Player: {{ nextPlayer }}</p>
      <p class="info">Winner: {{ winner }}</p>
    </div>
    <Board
      :nextPlayer="nextPlayer"
      @changePlayer="changePlayer"
      @announcementWinner="announceWinner"
    ></Board>
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
  nextPlayer = PLAYER_X;

  @Provide()
  winner = "";

  changePlayer() {
    this.nextPlayer = this.nextPlayer === PLAYER_X ? PLAYER_O : PLAYER_X;
  }

  announceWinner(state: STATE) {
    if (state == STATE.WINNER) {
      this.winner = this.nextPlayer;
    } else if (state === STATE.TIED) {
      this.winner = "tied";
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
  text-align: center;
  height: 3rem;
}

.game {
  display: block;
  width: 100%;
  max-width: 600px;
  height: auto;
  max-height: 600px;
  border: 1px solid green;
  padding: 0 1rem;

  .board {
    border: 10px solid rebeccapurple;
    border-radius: 5px;
  }

  p.info {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }

  .info-container {
    display: flex;
    justify-content: space-around;
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
