<template>
    <a
        class="
        ca-link 
        rounded font-bold"
        href="/path/to/somewhere"
        v-bind="$attrs">
        <slot />
    </a>
</template>

<style lang="scss" scoped>
  .ca-link{
    padding: 40px;
    font-size: 20px;
    color: #3F4AFA;
  }
  .ca-link:hover{
    text-decoration: underline;
    cursor: pointer;
  }
</style>

<script>
export default {
  name: "ca-link",
  props: {
    wide: {
      default: false,
      type: Boolean
    }
  }
}
</script>
