var webpack = require('webpack');
var path = require('path');
// https://github.com/petehunt/webpack-howto
// definePlugin takes raw strings and inserts them, so you can put strings of JS if you want.
var definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'false')),
  __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
});

module.exports = {
  entry: {
    app: ['./app/main.jsx']
  },
  output: {
    path: './build/',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.jsx$|\.js$/, loaders: ['babel-loader'], exclude: [/node_modules/] },
      { test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$|\.eot/, loader: "file" },
      { test: /\.json$/, loader: 'json' }
    ]
  },
  plugins: [
    definePlugin
  ],
  node: {
    net: 'empty',
    dns: 'empty'
  }

}
