<template>
  <img
  class="Avatar"
  :src=imgsrc
  alt="avatar"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Avatar extends Vue{
  @Prop(String) imgsrc!: string
}
</script>

<style lang="scss" scoped>
  .Avatar{
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
</style>
