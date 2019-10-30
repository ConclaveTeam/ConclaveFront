<template>
    <button
        class="
        ca-button border-2 
        rounded font-bold 
        uppercase text-lg 
        text-indigo-600 
        border-indigo-600 
        hover:bg-indigo-100"
        v-bind:class="{ 'ca-button--wide': wide}"
        v-on="$listeners"
        v-bind="$attrs">
        <slot />
    </button>
</template>

<style lang="scss" scoped>
.ca-button {
  transition: all .2s ease-in;
  padding: 10px 30px;
}
.ca-button--wide {
  width: 400px;
  padding: 100px;
}
</style>

<script>
export default {
  name: "ca-button",
  props: {
    wide: {
      default: false,
      type: Boolean
    }
  }
}
</script>