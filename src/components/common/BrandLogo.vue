<template>
  <span class="logo">
    <img src="/assets/images/common/logo.png" alt="千城かや Webサイト" />
  </span>
</template>

<style lang="scss" scoped>
.logo {
  position: relative;
  display: block;
  overflow: hidden;
  width: 100%;

  &::before {
    content: '';
    display: block;
    padding-top: calc(120px / 335px) * 100%;
  }

  img {
    position: absolute;
    inset: 0;
    margin: auto;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>
