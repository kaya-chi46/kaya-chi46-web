<template>
  <nuxt-link
    v-if="typeof props.path === 'object'"
    :to="props.path"
    class="button"
    :class="props.id ? `is-${props.id}` : ''"
  >
    <slot />
    <FontAwesome
      v-if="props.fa"
      :icon="{
        prefix: props.fa.brand ? 'fab' : 'fas',
        iconName: props.fa.icon,
      }"
      class="button-icon"
    />
    <span v-if="props.icon" class="button-icon">
      <img v-if="props.img" :src="props.img.src" alt="" />
    </span>
    <span class="button-text">
      <img
        v-if="!props.icon && props.img"
        :src="props.img.src"
        :alt="props.img.alt"
      />
      {{ props.label }}
    </span>
    <FontAwesome icon="arrow-right" />
  </nuxt-link>

  <a
    v-else
    :href="props.path"
    class="button"
    :class="props.id ? `is-${props.id}` : ''"
    target="_blank"
  >
    <slot />
    <FontAwesome
      v-if="props.fa"
      :icon="{
        prefix: props.fa.brand ? 'fab' : 'fas',
        iconName: props.fa.icon,
      }"
      class="button-icon"
    />
    <span v-if="props.icon" class="button-icon">
      <img v-if="props.img" :src="props.img.src" alt="" />
    </span>
    <span class="button-text">
      <img
        v-if="!props.icon && props.img"
        :src="props.img.src"
        :alt="props.img.alt"
      />
      {{ props.label }}
    </span>
    <FontAwesome icon="arrow-right" class="button-arrow" />
  </a>
</template>

<script lang="ts" setup>
const props = defineProps({
  id: String,
  fa: {
    brand: Boolean,
    icon: String,
  },
  icon: Boolean,
  img: {
    src: String,
    alt: String,
  },
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

  :deep() {
    .button {
      &-icon,
      &-arrow {
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto 0;
      }

      &-icon {
        left: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        font-size: 2.8rem;

        img,
        svg {
          width: 100%;
          height: 100%;
          transition-duration: inherit;
        }

        img {
          object-fit: contain;
        }
      }

      &-text {
        display: flex;
        align-items: center;
        height: 20px;

        > span {
          display: block;
          overflow: hidden;
        }

        &-image {
          height: inherit;
          margin-right: 5px;
        }

        img,
        svg {
          height: inherit;
        }
      }
    }
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
      @if $sns == 'skeb' {
        color: $color;
        border-color: #fff;
        background-color: #fff;
      } @else {
        border-color: $color;
        background-color: $color;
      }

      @media #{$device-l} {
        &:hover {
          @if $sns == 'skeb' {
            border-color: $color;
          } @else if $sns == 'booth' {
            color: $color;

            :deep(svg path) {
              fill: $color;
            }
          } @else if $sns == 'amazon' {
            color: $color;

            :deep(svg) {
              fill: $color !important;
            }
          } @else if $sns == 'giftee' {
            color: $color;

            :deep(svg) {
              fill: #000;

              .accent {
                fill: $color;
              }
            }
          } @else {
            color: $color;
          }
        }
      }

      @if $sns == 'giftee' {
        :deep(svg) {
          fill: #fff;
        }
      } @else if $sns == 'booth' {
        :deep() {
          .button {
            &-icon {
              width: 36px;
              height: 36px;
              margin-left: -6px;
            }
          }
        }
      } @else if $sns == 'amazon' {
        :deep() {
          .button {
            &-text {
              @media #{$device-l} {
                height: 24px;
              }
            }
          }
        }
      } @else if $sns == 'skeb' {
        :deep() {
          padding-left: 50px;

          @media #{$device-l} {
            padding-left: unset;
          }

          .button {
            &-text {
              height: 24px;
              @media #{$device-l} {
                height: 28px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
