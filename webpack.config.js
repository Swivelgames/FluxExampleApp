var fs = require('fs');
var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './src/main.js',
	output: { path: __dirname, filename: 'app.js' },
	externals: { fetch: "fetch" },
	module: {
		loaders: [
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: JSON.parse(
					fs.readFileSync('./.babelrc', 'utf8')
				)
			},
			{
				test: /.json$/,
				loader: 'json-loader'
			}
		]
	}
};
