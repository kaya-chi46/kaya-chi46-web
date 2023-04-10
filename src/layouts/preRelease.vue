<template>
  <div class="l-container is-pre">
    <Header />
    <Main>
      <slot />
    </Main>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.l-container.is-pre {
  :deep() {
    .inner {
      position: relative;
      z-index: 10;

      @media #{$device-l} {
        width: 400px;
        margin-left: auto;
      }
    }
  }
}
</style>
