<template>
  <ul class="button-list">
    <slot />
  </ul>
</template>

<style lang="scss" scoped>
.button-list {
  margin: 20px 0 40px;

  > :deep(li) {
    margin-top: 20px;

    &:first-child {
      margin-top: 0;
    }
  }
}
</style>
