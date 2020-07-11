<template>
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
  <div class="moves empty" v-else></div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { PLAYER_X, PLAYER_O } from "@/constants";
import "./styles.scss";

@Component({})
export default class MovesList extends Vue {
  @Prop()
  board: string[];

  @Prop()
  histories: string[][];

  @Prop()
  endGame: boolean;

  @Prop()
  opponent: string;

  @Prop()
  nextPlayer: string;

  goBackToMove(event: Event, idx: number) {
    event.preventDefault();
    event.stopImmediatePropagation();
    if (this.endGame) {
      return;
    }
    const board = [...this.histories[idx]];
    const cloneHistories = [...this.histories];
    cloneHistories.splice(idx + 1, cloneHistories.length - 1 - idx);
    this.$emit("update:board", board);
    this.$emit("update:histories", cloneHistories);
    this.$emit("update:nextPlayer", idx % 2 === 0 ? PLAYER_X : PLAYER_O);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.moves {
  padding: 0.5rem 0.5rem 0 0.5rem;
  display: flex;
  flex-direction: column;

  &.empty {
    height: auto;
  }
}

@media screen and (max-width: 600px) {
  .moves {
    flex-direction: row;
    flex-wrap: wrap;

    .button {
      margin-right: 0.25rem;
      flex: 1 0 20%;
      width: 0;
    }

    &.empty {
      height: 1.5rem;
    }
  }
}
</style>
