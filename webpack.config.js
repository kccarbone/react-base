const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const loaders = require('./webpack.loaders')(ExtractTextPlugin);

module.exports = {
  entry: { 
    app: './src/index.jsx'
  },
  output: {
    publicPath: '/',
    path: path.resolve('dist'),
    filename: 'js/[name].bundle.js'
  },
  module: {
    loaders
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './public',
    historyApiFallback: true,
    inline: true,
    port: 9090,
    stats: 'minimal'
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'js/[name].bundle.js',
      minChunks: x => x.context && x.context.indexOf('node_modules') >= 0
    }),
    new ExtractTextPlugin({
      filename: 'css/[name].bundle.css',
      allChunks: true
    }),
    new CopyWebpackPlugin([{
      context: 'public',
      from: '**/*'
    }]),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: 'body'
    })
  ]
};