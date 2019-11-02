<template>
  <button
    class="
      ca-button border-2 
      rounded font-bold 
      uppercase text-lg 
      text-indigo-600 
      border-indigo-600 
      hover:bg-indigo-100
    "
    :class="{
      'ca-button--wide': wide,
      'ca-button--danger': type === 'danger',
      'ca-button--info': type === 'info'
    }"
    v-on="$listeners"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Button extends Vue{
  @Prop({ type: Boolean}) wide!: boolean
  @Prop({ default: 'primary'}) type!: string
}
</script>

<style lang="scss" scoped>
.ca-button {
  transition: all .2s ease-in;
  padding: 10px 20px;
}
.ca-button--wide {
  padding: 10px 40px;
}

.ca-button--danger{
  color: #FC9292;
  border-color: #FC9292;
}
.ca-button--danger:hover{
  background: #FC92921A;
  transition: .2s ease-in;
}

.ca-button--info{
  color: #C7C7C7;
  border-color: #C7C7C7;
}
.ca-button--info:hover{
  background: #C7C7C71A;  
  transition: .2s ease-in;
}

.ca-button--primary{
  color: #9298FC;
  border-color: #9298FC;
}
.ca-button--primary:hover{
  background: #9298FC1A;
  transition: .2s ease-in;
}
</style>
