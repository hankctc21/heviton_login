const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: "../src/main/resources/static",
  devServer:{
    // port: 9000,
    proxy:{
      'api':{
        target:'http://localhost:9000',
        changeOrigin: true // cross origin 허용
      }
    }
  },
  chainWebpack: config => {
    config.module
        .rule('vue')
        .use('vue-loader')
        .loader('vue-loader')
        .tap(options => {
          // modify the options...
          return options
        })
  }
})
