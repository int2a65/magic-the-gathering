const path = require('path');
const common = require('./webpack.common.js');
const merge = require('webpack-merge');

module.exports = merge(common, {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  }
});