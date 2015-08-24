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
    // app: ['./app/main.jsx']
    app: [
      'webpack-dev-server/client?http://192.168.0.103:8080',
      'webpack/hot/only-dev-server',
      './app/main.jsx'
    ]
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/scripts/'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.jsx$|\.js$/, 
        loaders: ['react-hot', 'babel-loader'], 
        include: path.join(__dirname, 'app')
      },
      { test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$|\.eot/, loader: "file" },
      { test: /\.json$/, loader: 'json' }
    ]
  },
  plugins: [
    definePlugin,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  externals: {
    "GoogleMaps": "window.google.maps"
  },
  node: {
    net: 'empty',
    dns: 'empty'
  }

}
