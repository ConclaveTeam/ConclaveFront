<template>
  <div id="app">
    <cbutton> testing button </cbutton>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import cbutton from './components/atoms/Button.vue';

@Component({
  components: {
    cbutton
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
