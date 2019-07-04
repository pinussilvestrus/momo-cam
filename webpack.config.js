const path = require('path');
require('dotenv').config({ path: `${__dirname}/.env` });
const DotenvPlugin = require('webpack-dotenv-plugin');

const WEBPACK_DEV_PORT = 9000;

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    chunkFilename: '[name].js'
  },
  plugins: [
    new DotenvPlugin({
      path: '.env',
      sample: '.env',
      allowEmptyValues: true
    })
  ],
  devtool: 'sourcemap',
  devServer: {
    inline: true,
    hot: true,
    port: WEBPACK_DEV_PORT
  }
};
