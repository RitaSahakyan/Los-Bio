// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['@/assets/scss/main.scss'],
  modules: ['@nuxtjs/svgo'],
  vite: {
    plugins: [svgLoader()]
  }
})
