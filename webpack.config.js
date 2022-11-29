const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: "development", 
  entry: {
    home: ['webpack-hot-middleware/client', './src/home/index.js'],
    index: ['webpack-hot-middleware/client', './src/index.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'home.html',
      title: 'home',
      template: '/src/index.html',
      chunks: ['home']
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'index',
      template: '/src/index.html',
      chunks: ['index']
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'inline-source-map',
  // devServer: {
  //   static: './dist',
  //   hot: true,
  // },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/',
  },
};