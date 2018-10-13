const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = [buildConfig(true), buildConfig()];

function buildConfig(minified) {
  return {
    mode: 'production',
    entry: path.join(__dirname, 'hack.js'),
    output: {
      path: path.join(__dirname, './dist/'),
      filename: 'ignore.js' // output js file name is identical to css file name
    },
    module: {
      rules: [{
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
          "sass-loader"
        ]
      }]
    },
    optimization: {
      minimizer: minified ? [
        new OptimizeCSSAssetsPlugin({})
      ] : []
    },
    plugins: [
      new CleanWebpackPlugin(['dist']),
      new MiniCssExtractPlugin({
        filename: minified ? "callout.min.css" : "callout.css"
      })
    ]
  }
}


