// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve} from 'path';

export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
     '@': resolve(__dirname, 'src'),
  },
  css: [ '~/assets/main.css' ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
