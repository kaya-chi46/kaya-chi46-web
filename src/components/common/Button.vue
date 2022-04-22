<template>
  <nuxt-link
    v-if="typeof props.path === 'object'"
    :to="props.path"
    class="button"
    :class="props.icon ? `is-${props.icon}` : ''"
  >
    <FontAwesome
      v-if="icon"
      :icon="{ prefix: props.brand ? 'fab' : 'fas', iconName: props.icon }"
      class="button-icon"
    />
    <span>{{ props.label }}</span>
    <FontAwesome icon="arrow-right" />
  </nuxt-link>
  <a
    v-else
    :href="props.path"
    class="button"
    :class="props.icon ? `is-${props.icon}` : ''"
  >
    <FontAwesome
      v-if="icon"
      :icon="{ prefix: props.brand ? 'fab' : 'fas', iconName: props.icon }"
      class="button-icon"
    />
    <span>{{ props.label }}</span>
    <FontAwesome icon="arrow-right" class="button-arrow" />
  </a>
</template>

<script lang="ts" setup>
const props = defineProps({
  brand: Boolean,
  icon: String,
  label: String,
  path: [Object, String],
})
</script>

<style lang="scss" scoped>
.button {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 0 60px;
  color: #fff;
  text-decoration: none;
  background-color: $main;

  &-icon,
  &-arrow {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
  }

  &-icon {
    left: 20px;
    font-size: 2.8rem;
  }

  &-arrow {
    right: 20px;
    font-size: 2rem;
    transition-duration: $duration;
  }

  @media #{$device-l} {
    &:hover {
      .button {
        &-arrow {
          transform: translateX(5px);
        }
      }
    }
  }

  &.is-twitter {
    background-color: #1d9bf0;
  }

  &.is-youtube {
    background-color: #f00;
  }

  &.is-twitch {
    background-color: #9147ff;
  }
}
</style>
