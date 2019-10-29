<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <br><br>
    <br><br>

    <Button>
      testing button
    </Button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Button } from '@/components/atoms'

@Component({
  components: {
    Button
  }
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string
}
</script>
