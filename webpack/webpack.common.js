const path = require('path');
const HtmlWebpackPlugion = require('html-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, '..', './src/index.tsx'),
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},
	optimization: {
		noEmitOnErrors: true
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
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
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
			template: path.resolve(__dirname, '..', './src/index.html')
		})
	]
}