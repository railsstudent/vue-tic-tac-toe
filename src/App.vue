<template>
  <div id="app">
    <Game />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Game from "./components/Game.vue";

@Component({
  components: {
    Game
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
* {
  box-sizing: content-box;
  padding: 0;
  margin: 0;
}

body {
  width: 100vw;
  min-height: 100%;
  height: 100vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
