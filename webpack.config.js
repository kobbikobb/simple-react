const webpack = require('webpack');
const path = require('path');

const APP_DIR = path.resolve(__dirname, 'src/app');

const config = {
	entry: [
  		'webpack-hot-middleware/client',
 		path.join(APP_DIR, "/index.js") // Your appʼs entry point
	],
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'bundle.js',
		publicPath: '/dist/'
	},
	module: {
		loaders: [
			{
				test : /\.css$/,
				loader : 'style!css'
			},
			{
				test : /\.js?$/,
				include : APP_DIR,
				loaders : ['react-hot', 'babel']
			}
		]
	},
	plugins: [
  	new webpack.HotModuleReplacementPlugin()
	]
};

module.exports = config;
