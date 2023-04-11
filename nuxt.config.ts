import svgLoader from 'vite-svg-loader'
require('dotenv').config()

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  srcDir: './src',
  typescript: {
    strict: true,
  },
  publicRuntimeConfig: {
    gaId: process.env.GTM_ID,
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
          additionalData: '@import "@/assets/styles/scss/functions.scss";',
        },
      },
    },
  },
})
