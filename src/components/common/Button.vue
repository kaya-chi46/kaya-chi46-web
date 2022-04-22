<template>
  <nuxt-link
    v-if="typeof props.path === 'object'"
    :to="props.path"
    class="button"
    :class="props.icon ? `is-${props.icon}` : ''"
  >
    <span>{{ props.label }}</span>
  </nuxt-link>
  <a
    v-else
    :href="props.path"
    class="button"
    :class="props.icon ? `is-${props.icon}` : ''"
  >
    <span>{{ props.label }}</span>
  </a>
</template>

<script lang="ts" setup>
const props = defineProps({
  icon: String,
  label: String,
  path: [Object, String],
})
</script>
