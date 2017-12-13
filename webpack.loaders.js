module.exports = ExtractTextPlugin => [
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
    test: /\.(eot|svg|ttf|woff|woff2|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    exclude: /(node_modules|bower_components)/,
    use: 'file-loader?name=fonts/[name].[ext]'
  },
  {
    test: /\.gif/,
    exclude: /(node_modules|bower_components)/,
    use: 'url-loader?name=img/[hash].[ext]&limit=10000&mimetype=image/gif'
  },
  {
    test: /\.jpg/,
    exclude: /(node_modules|bower_components)/,
    use: 'url-loader?name=img/[hash].[ext]&limit=10000&mimetype=image/jpg'
  },
  {
    test: /\.png/,
    exclude: /(node_modules|bower_components)/,
    use: 'url-loader?name=img/[hash].[ext]&limit=10000&mimetype=image/png'
  }
];