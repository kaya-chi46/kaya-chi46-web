<template>
  <nuxt-link
    v-if="typeof props.path === 'object'"
    :to="props.path"
    class="button"
    :class="props.id ? `is-${props.id}` : ''"
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
    :class="props.id ? `is-${props.id}` : ''"
    target="_blank"
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
  id: String,
  brand: Boolean,
  icon: String,
  label: String,
  path: [Object, String],
})
</script>

<style lang="scss" scoped>
.button {
  box-sizing: border-box;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 0 60px;
  border: 2px solid $main;
  color: #fff;
  text-decoration: none;
  background-color: $main;
  transition-duration: $duration;

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
    transition-property: transform;
    transition-duration: inherit;
  }

  @media #{$device-l} {
    &:hover {
      color: $main;
      background-color: #fff !important;

      .button {
        &-arrow {
          transform: translateX(5px);
        }
      }
    }
  }

  @each $sns, $color in $sns-list {
    &.is-#{$sns} {
      border-color: $color;
      background-color: $color;

      @media #{$device-l} {
        &:hover {
          color: $color;
        }
      }
    }
  }
}
</style>
