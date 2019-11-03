<template>
  <div id="app">
    <Button wide>
      Testing button
    </Button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Button } from '@/components/atoms';

@Component({
  components: {
    Button
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  margin: 60px;
}
</style>
