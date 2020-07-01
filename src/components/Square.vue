<template>
  <div @click="setMove">
    <span :class="`player-${value}`">{{ value }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Square extends Vue {
  @Prop()
  value: string;

  @Prop()
  index: number;

  setMove() {
    if (!this.value) {
      this.$emit("setMove", this.index);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
div {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid lighten(brown, 25%);
  background: lighten(lightpink, 10%);
}

span {
  --cell-size: 4rem;
  font-size: var(--cell-size);
  font-weight: 600;
  margin: 1rem auto;

  &.player-X {
    color: goldenrod;
  }

  &.player-O {
    color: limegreen;
  }
}

@media screen and (max-width: 450px) {
  span {
    --cell-size: 2rem;
  }
}

@media screen and (min-width: 451px) and (max-width: 550px) {
  span {
    --cell-size: 3rem;
  }
}
</style>
