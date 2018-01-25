var path = require('path');

module.exports = {
	entry: './client/App.js',
	output: {
		path: path.join(__dirname, '/public/js'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							cacheDirectory: true
						}
					}
				]
			}
		]
	}
}
