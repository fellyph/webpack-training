const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.less$/,
      use: [{
        loader: 'style-loader' // creates style nodes from a JS string
      },
      {
        loader: 'css-loader' // translates CSS into CommonJS
      },
      {
        loader: 'less-loader' // compiles LESS to CSS
      }]
    }]
  }
}
