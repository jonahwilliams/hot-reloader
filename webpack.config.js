/* global __dirname */
const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const dir_js = path.resolve(__dirname, 'src');
const dir_html = path.resolve(__dirname, 'html');
const dir_build = path.resolve(__dirname, 'build');

module.exports = {
  entry: ['babel-polyfill', path.resolve(dir_js, 'app.js')],
  include: [
    path.resolve(__dirname, 'src')
  ],
  output: {
    path: dir_build,
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: dir_build
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: dir_js
      }
    ]
  },
  plugins: [
      // Simply copies the files over
    new CopyWebpackPlugin([
      { from: dir_html } // to: output.path
    ]),
      // Avoid publishing files when compilation fails
    new webpack.NoErrorsPlugin()
  ],
  stats: {
    // Nice colored output
    colors: true
  },
  // Create source maps for the bundle
  devtool: 'source-map'
};
