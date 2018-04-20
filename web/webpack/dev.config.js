var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    path.join(__dirname, '../../app/web/index.jsx')
  ],
  output: {
    path: path.join(__dirname, '../public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$|\.jsx$/,
      loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015,presets[]=stage-1', 'eslint'],
      exclude: /node_modules/,
      include: path.join(__dirname, '../../app')
    }]
  }
};
