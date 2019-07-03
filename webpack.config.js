const path = require('path');
require('dotenv').config({ path: `${__dirname}/.env` });
const DotenvPlugin = require('webpack-dotenv-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  plugins: [
    new DotenvPlugin({
      path: '.env',
      sample: '.env',
      allowEmptyValues: true,
    }),
  ],
  devtool: 'sourcemap',
};
