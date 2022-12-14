const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundlefile.js'
  },
  module: {
    rules: [
      {
         test: /\.js$/,
         exclude: /node_modules/,
         use: {
           loader: 'babel-loader'
         }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: {
            loader: 'css-loader'
          }
    },
   ]
  },
  plugins: [
    new HtmlWebpackPlugin({
       template: './public/index.html'
    })
  ]
}