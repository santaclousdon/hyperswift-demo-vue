// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css:[
    'bulma/css/bulma.css',
    '/assets/fonts/fonts.css',
    'animate.css/animate.min.css'
  ],
  modules:[
    '@nuxt/image',
  ]
})
