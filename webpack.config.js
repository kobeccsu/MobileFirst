var webpack = require('webpack');
module.exports = {
	entry: [
		'./js/biz/index.js'
	],
	output: {
		path: __dirname,
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.css$/,
			loader: 'style!css'
		}, {
			test: /\.vue$/,
			loader: 'vue-loader'
		}, {
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: '/node_modules/'
		}]
	},
	resolve: {
		alias: {
			vue: 'vue/dist/vue.js'
		},
		extensions: ['.js', '.vue']
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		})
	]
}