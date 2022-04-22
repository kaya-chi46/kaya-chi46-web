<template>
  <div class="kaya">
    <div
      class="kaya-image"
      :style="{
        'background-image': `url('/assets/images/kaya/kaya_2.png')`,
      }"
    />
  </div>
</template>

<style lang="scss" scoped>
.kaya {
  display: flex;
  justify-content: center;
  align-items: center;

  &-image {
    display: block;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center top;
    background-size: contain;

    &::before {
      content: '';
      display: block;
      padding-top: calc(1400px / 680px) * 100%;
    }
  }
}
</style>
