import svgLoader from 'vite-svg-loader'
require('dotenv').config()

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  srcDir: './src',
  compatibilityDate: '2026-06-22',
  typescript: {
    strict: true,
  },
  nitro: {
    preset: 'firebase',
    firebase: {
      gen: 2,
      nodeVersion: '22',
    },
  },
  publicRuntimeConfig: {
    gaId: process.env.GTM_ID,
  },
  nitro: {
    preset: 'firebase',
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
  vite: {
    plugins: [svgLoader()],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/scss/functions.scss" as *;',
        },
      },
    },
  },
})
