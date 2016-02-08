/** webpack config **/

var path = require('path');

module.exports = {
	//create entry point for load module
	entry: './src/app.js',
	//output file for pack modules bundle
	output: {
		path: __dirname,
		filename: 'bundle.js'
	},
	//loader for load all assets as modules
	module: {
		loaders: [
		{ test: /\.css$/, loaders: ['style','css'] },
		{ test: /\.scss$/, loaders: ['style','css', 'sass'] },
		{ test: /\.html$/, loaders: ['html'] },
		{ test: /\.png$/, loaders: ['file'] }
		]
	}
};