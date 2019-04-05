const CompressionPlugin = require("compression-webpack-plugin")

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/docstest/'
    : '/',
  configureWebpack: {
    plugins: [
      new CompressionPlugin({
        algorithm: 'gzip',
        test: new RegExp(
            '\\.(js|css)$'
        ),
        threshold: 10240,// gt 10 KB
        minRatio: 0.8
      })
    ]
  }
}
