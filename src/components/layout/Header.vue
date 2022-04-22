<template>
  <div class="l-header">
    <header>
      <div class="wrap">
        <div class="inner">
          <h1 class="header-logo">
            <BrandLogo />
          </h1>
        </div>
      </div>
    </header>
  </div>
</template>

<style lang="scss" scoped>
.l-header {
  position: relative;
  z-index: 10;
  margin-bottom: 12px;

  @media #{$device-l} {
    margin-bottom: 20px;
  }
}

.header {
  &-logo {
    max-width: 400px;
    margin: 0 auto;

    &::before {
      content: '';
      box-sizing: border-box;
      display: block;
      padding-top: calc(160px / 335px) * 100%;
      max-height: 25vh;

      @media #{$device-l} {
        padding-top: calc(100px / 400px) * 100%;
        max-height: 20vh;
      }
    }
  }
}
</style>
