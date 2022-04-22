import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  srcDir: './src',
  typescript: {
    strict: true,
  },
  build: {
    transpile: [
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-solid-svg-icons',
      '@fortawesome/free-brands-svg-icons',
      '@fortawesome/vue-fontawesome',
    ],
  },
  components: [
    {
      path: '@/components/',
      pathPrefix: false,
    },
  ],
  css: ['ress', '@fortawesome/fontawesome-svg-core/styles.css'],
})
