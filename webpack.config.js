const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development", 
  entry: {
    index: './src/index.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '开发环境',
    }),
  ],
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    hot: true,
  },
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
  optimization: {
    runtimeChunk: 'single',
  },
};