const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [__dirname + '/src/index.ts'],
  output: {
    path: __dirname + '/public/js',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  devServer: {
    contentBase: 'public',
    publicPath: '/',
    port: 3000,
    watchContentBase: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.ts$/,
        use: {
          loader: 'awesome-typescript-loader',
          options: {
            useBabel: true,
            babelCore: 'babel-core'
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    })
  ]
}
