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
    />
    <span>{{ props.label }}</span>
    <FontAwesome icon="arrow-right" />
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
