export default {
  head: {
    meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }]
  },
  buildModules: ['@nuxtjs/tailwindcss'],
  build: {
    extractCSS: true,
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
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
