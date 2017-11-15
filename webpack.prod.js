/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable func-names */
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./webpack.config.js');

// Override properties from the base config as needed
config.output.filename = '[name].[chunkhash].bundle.js';
config.devtool = 'source-map';

config.plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
    }
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: '[name].[chunkhash].bundle.js',
    minChunks: x => x.context && x.context.indexOf('node_modules') >= 0
  }),
  new ExtractTextPlugin({
    filename: '[name].[chunkhash].bundle.css',
    allChunks: true
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
    }
  }),
  new OptimizeCssAssetsPlugin({
    assetNameRegExp: /\.css$/,
    cssProcessorOptions: {
      mergeIdents: false,
      reduceIdents: false,
      zindex: false
    }
  }),
  new CopyWebpackPlugin([{
    context: 'public',
    from: '**/*'
  }]),
  new HtmlWebpackPlugin({
    template: './public/index.html',
    inject: 'body'
  })
];

module.exports = config;