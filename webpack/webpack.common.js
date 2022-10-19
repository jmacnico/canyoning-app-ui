const path = require('path')
const HtmlWebpackPlugion = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.ts'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  optimization: {
    emitOnErrors: true
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: 'bundle.js',
    clean: true
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugion({
      template: path.resolve(__dirname, '..', './public/index.html')
    })
  ]
}
