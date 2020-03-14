
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@4piE_7' },
      { name: 'twitter:creator', content: '@4piE_7' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: '/img/icon.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/img/icon.png' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
    vendor: ['element-ui'],
  },
  plugins: [
    '~plugins/element-ui'
  ],
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ] 
}