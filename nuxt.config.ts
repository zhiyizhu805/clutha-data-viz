// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";

export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
     '@': resolve(__dirname, '/'),
  },
  modules: [['nuxt-plotly', { inject: true }],"@nuxtjs/tailwindcss"],
  css: [ '~/assets/css/main.css' ],
  postcss: {
    plugins: {
      tailwindcss: {
      },
      autoprefixer: {
      },
    },
  },
  vite: {
    optimizeDeps: {
      include: ["plotly.js-dist-min"],
    },
  },
})
