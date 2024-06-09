// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=device-width, initial-scale=1, maximum-scale=1",
      title: "Keva Damar Galih",
      meta: [{ name: "description", content: "Keva Damar Galih." }],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/icons/k.png' }
      ]
    },
  },

  build: {
    transpile: ["@headlessui/vue"],
  },

  devtools: { enabled: true },
  css: ["@/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["nuxt-icon"],
});