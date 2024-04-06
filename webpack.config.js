var path = require('path');
var webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const postcssPresetEnv = require('postcss-preset-env');
const WebpackAssetsManifest = require("webpack-assets-manifest");

module.exports = {
  entry: {
    site: ['./assets/javascripts/index.js', './assets/stylesheets/index.scss']
  },
  output: {
    filename: 'assets/javascripts/[name].js',
    path: path.resolve(__dirname, '.tmp/dist')
  },

  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: 'asset/resource',
        generator: {
          filename: "[path][name]-[contenthash][ext]",
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [postcssPresetEnv({browsers: 'last 2 versions'})],
              },
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new WebpackAssetsManifest({
      writeToDisk: true,
      entrypointsUseAssets: true,
      publicPath: true
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/stylesheets/[name].css'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      jquery: 'jquery'
    })
  ],
  mode: 'production'
}