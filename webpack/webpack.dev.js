const path = require('path')
module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    historyApiFallback: true,
    open: true,
    // hot: true,
    port: 3000, // ENV.PORT || '3000',
    static: path.join(__dirname, '..', 'build')
    //   {
    //     directory: path.join(__dirname, '..', 'build/')
    //   }
    // ]
    // watchFiles: ['src/**/*']
  }
}
