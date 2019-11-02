<template>
  <div id="app">
<<<<<<< HEAD
    <cbutton> testing button </cbutton>
    <clink> testing link </clink>
=======
    <Button wide>
      Testing button
    </Button>
>>>>>>> 020e401e652ab2f6ae6c3af90e52cf6bb6dcb600
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
<<<<<<< HEAD
import cbutton from './components/atoms/Button.vue';
import clink from './components/atoms/Link.vue';

@Component({
  components: {
    cbutton,
    clink
  },
=======
import { Button } from '@/components/atoms';

@Component({
  components: {
    Button
  }
>>>>>>> 020e401e652ab2f6ae6c3af90e52cf6bb6dcb600
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  margin: 60px;
}
</style>
