const path = require('path')
const HtmlWebpackPlugion = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, '..', './src/main/index.tsx'),
  output: {
    path: path.resolve(__dirname, '..', './public/js'),
    publicPath: '/public/js',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': path.join(__dirname, '..', 'src')
    }
  },
  external: {
    react: 'React',
    'react-dom': 'ReactDOM'
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
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugion({
      template: path.resolve(__dirname, '..', './public/index.html')
    })
  ]
}
