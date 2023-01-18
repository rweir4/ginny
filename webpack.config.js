var path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

var plugins = []; // if using any plugins for both dev and production
var devPlugins = []; // if using any plugins for development
var prodPlugins = [];

plugins = plugins.concat(
  process.env.NODE_ENV === 'production' ? prodPlugins : devPlugins
);

module.exports = {
  context: __dirname,
  entry: "./app/javascript/App.jsx",
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/react']
        }
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    static: './dist',
    port: '3000',
  },
  optimization: {
    runtimeChunk: 'single',
  },
  resolve: {
    extensions: [".js", ".jsx", "*"]
  },
  plugins
};