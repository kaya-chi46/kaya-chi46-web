<template>
  <div class="l-header">
    <header>
      <div class="wrap">
        <div class="inner">
          <h1 class="header-logo">
            <BrandLogo :is-web="props.isWeb" />
          </h1>
        </div>
      </div>
    </header>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  isWeb: Boolean,
})
</script>

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
    margin: 40px auto 20px;
  }
}
</style>
