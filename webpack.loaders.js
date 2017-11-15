module.exports = ExtractTextPlugin =>
[
  {
    test: /\.jsx?$/,
    exclude: /(node_modules|bower_components)/,
    use: [{
      loader: 'babel-loader'
    },
    {
      loader: 'eslint-loader',
      options: {
        failOnWarning: false,
        failOnError: true
      }
    }]
  },
  {
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
      use: 'css-loader',
      fallback: 'style-loader'
    })
  },
  {
    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    exclude: /(node_modules|bower_components)/,
    use: 'file-loader'
  },
  {
    test: /\.(woff|woff2)$/,
    exclude: /(node_modules|bower_components)/,
    use: 'url-loader?prefix=font/&limit=5000'
  },
  {
    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    exclude: /(node_modules|bower_components)/,
    use: 'url-loader?limit=10000&mimetype=application/octet-stream'
  },
  {
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    exclude: /(node_modules|bower_components)/,
    use: 'url-loader?limit=10000&mimetype=image/svg+xml'
  },
  {
    test: /\.gif/,
    exclude: /(node_modules|bower_components)/,
    use: 'url-loader?limit=10000&mimetype=image/gif'
  },
  {
    test: /\.jpg/,
    exclude: /(node_modules|bower_components)/,
    use: 'url-loader?limit=10000&mimetype=image/jpg'
  },
  {
    test: /\.png/,
    exclude: /(node_modules|bower_components)/,
    use: 'url-loader?limit=10000&mimetype=image/png'
  }
];