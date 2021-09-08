export default {
  server: {
    port: 8000,
    host: '0.0.0.0'
  },
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  // mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  ssr: true,
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap'
      }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '~assets/css/tailwind.css'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/tailwindcss'
  ],
  /*
  ** Nuxt.js modules
  */
  pwa: {
    // icon: {
    //   source: '@/static/icon.png'
    // }
  },
  router: {
    // base: process.env.NODE_DEV ? '/' : '/vuejs/JaxApp',
    base: process.env.NODE_DEV ? '/' : '/',
  },
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/proxy',
  ],
  axios: {
    // baseURL: 'http://174.138.54.240',
    credentials: false,
    proxy: true
  },
  proxy: {
    '/api/': {target: 'http://jax.ozahomes.com:8088', pathRewrite: {'^/api': ''}}
    // '/api/': {target: 'http://127.0.0.1:8088', pathRewrite: {'^/api': ''}}
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {}
}
