// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";

export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
     '@': resolve(__dirname, '/'),
  },
  modules: ["nuxt-plotly"],
  css: [ '~/assets/main.css' ],
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
