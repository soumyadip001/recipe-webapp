// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon'
  ],
  app: {
    head: {
      title: 'Recipe | checkout 300+ recipes',
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600&family=Inter:wght@200;400;600&family=Nunito:wght@200;400;600;800&display=swap'
        }
      ]
    }
  },
  runtimeConfig: {
    SP_API_URL: process.env.SP_API_URL,
    SP_RapidAPI_Host: process.env.SP_RapidAPI_Host,
    SP_RapidAPI_Key: process.env.SP_RapidAPI_Key,
  }
})
