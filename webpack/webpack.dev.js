const path = require('path')
module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: path.join('..', 'public'),
    writeToDisk: true,
    historyApiFallback: true,
    open: true
    // hot: true,
    // port: 3000, // ENV.PORT || '3000',
    // static: path.join(__dirname, '..'),
    // watchFiles: ['src/**/*']
  }
}
