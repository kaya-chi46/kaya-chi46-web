import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  vite: {
    server: {
      port: 24678,
      hmr: {
        port: 24678,
      }
    },
  },
})
