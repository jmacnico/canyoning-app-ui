const path = require('path')
const HtmlWebpackPlugion = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, '..', './src/main/index.tsx'),
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': path.join(__dirname, '..', 'src')
    }
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  optimization: {
    emitOnErrors: true
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugion({
      template: path.resolve(__dirname, '..', './public/index.html')
    })
  ]
}
