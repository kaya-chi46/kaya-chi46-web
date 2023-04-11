<template>
  <span class="logo">
    <img
      v-if="props.isWeb"
      src="@/assets/images/common/logo_web.png"
      alt="千城かや Webサイト"
    />
    <img v-else src="@/assets/images/common/logo_kaya.png" alt="千城かや" />
  </span>
</template>

<script lang="ts" setup>
const props = defineProps({
  isWeb: Boolean,
})
</script>

<style lang="scss" scoped>
.logo {
  position: relative;
  display: block;
  overflow: hidden;
  width: 100%;

  &::before {
    content: '';
    display: block;
    padding-top: calc(600px / 1600px) * 100%;
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
