const webpack = require('webpack');
const dotenv = require('dotenv');
const env = dotenv.config().parsed;
  
// reduce all env keys to an object for DefinePlugin below
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

module.exports = {
  devtool: 'inline-source-map',
  entry: ['babel-polyfill', './src/index.js'],
  mode: 'development',
  output: {
    path: __dirname + '/public',
    filename: 'build/app.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: [
          "style-loader",
          "css-loader"
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin(envKeys)
  ]
}