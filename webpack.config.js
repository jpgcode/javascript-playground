const webpack = require('webpack');
const path = require('path');

module.exports = {
	devtool: 'cheap-eval-source-map',
  	entry: './app/main.js',
  	output: { 
    	path: `${__dirname}/dist`,
    	filename: 'bundle.js' 
  	},
  	module: {
		loaders: [
	  		{ 	
	  			test: /\.js$/, 
	  			exclude: /node_modules/, 
	  			loader: 'babel-loader' 
	  		}
	  	]
	}
}