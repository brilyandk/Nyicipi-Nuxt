module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'cobaform',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'coba nih' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    modules: [
    '@nuxtjs/apollo',
  ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'https://graphql.datocms.com',
        getAuth: () => 'Bearer fa8933da9e6d9015d6cbbec2556588'
      },
    }
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

