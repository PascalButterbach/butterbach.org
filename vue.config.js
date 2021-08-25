module.exports =
{
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === 'production'
    ? 'https://www.butterbach.org/'
    : '/',
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Butterbach.org'
        return args
      })
  },
}


// module.exports = {
//   css: {
//     loaderOptions: {
//       sass: {
//         additionalData: `
//         @import "./node_modules/bootstrap/scss/functions";
//         @import "./node_modules/bootstrap/scss/variables";
//         @import "./node_modules/bootstrap/scss/mixins";
//         `
//       }
//     }
//   }
// };