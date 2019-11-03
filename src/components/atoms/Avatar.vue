<template>
  <img
  class="Avatar"
  v-bind="$attrs"
  alt="avatar"
  >
</template>

<style lang="scss" scoped>
  .Avatar{
    width: 36px;
    height: 36px;
    object-fit: cover;
    border-radius: 50%;
    overflow: hidden;
  }
</style>
