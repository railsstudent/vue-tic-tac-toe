<template>
  <div class="play-container">
    <p class="info">Next Player: {{ nextPlayer }}</p>
    <p class="info winner">Winner: {{ winner }}</p>
    <div class="info">
      <button
        class="button new-game"
        :disabled="disableControls"
        @click="startGame"
      >
        New Game
      </button>
    </div>
    <div class="info">
      <label class="opponent">Opponent: </label>
      <select v-model="opponent" :disabled="disableControls">
        <option value="player">vs Human</option>
        <option value="ai">vs AI</option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Provide } from "vue-property-decorator";
import "./styles.scss";

@Component({})
export default class GameSelector extends Vue {
  @Prop()
  nextPlayer: string;

  @Prop()
  winner: string;

  @Prop()
  disableControls: boolean;

  @Provide()
  opponent = "player";

  startGame() {
    this.$emit("start", this.opponent);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.play-container {
  padding: 0.5rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;

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

@media screen and (max-width: 600px) {
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
}
</style>
