const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {WebpackManifestPlugin} = require('webpack-manifest-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
     title: 'caching',
     template: path.join(__dirname, "src/index.html"),
      filename: "index.html",
      chunks: ["index"],
    }),
    new WebpackManifestPlugin({
      generate: (seed, files, entrypoints) => {
        console.log(entrypoints);
        return entrypoints;
      }
    })
  ],
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  devtool: "inline-source-map",
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};