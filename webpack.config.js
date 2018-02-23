var path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: './build/d3framework.js',
		library: 'd3framework',
		libraryTarget: 'var'
	},
	module: {
	rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
    	    presets: ['@babel/preset-env']
      	}
    	}
    }]
}};
