<template>
  <div class="l-container is-pre">
    <Header is-web />
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
    .header {
      &-logo {
        margin: 0 auto;

        &::before {
          content: '';
          box-sizing: border-box;
          display: block;
          padding-top: calc(160px / 335px) * 100%;
          max-height: 25vh;

          @media #{$device-l} {
            padding-top: calc(80px / 400px) * 100%;
            max-height: 20vh;
          }
        }
      }
    }
  }
}
</style>
