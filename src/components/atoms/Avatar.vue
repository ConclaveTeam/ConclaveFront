<template>
  <img
  class="avatar"
  v-bind="$attrs"
  alt="avatar"
  >
</template>

<style lang="scss" scoped>
.avatar{
  width: 36px;
  height: 36px;
  object-fit: cover;
  border-radius: 50%;
  overflow: hidden;
}
</style>
