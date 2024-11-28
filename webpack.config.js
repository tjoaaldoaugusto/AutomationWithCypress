const path = require('path');

module.exports = {
  entry: './src/index.js', // Your app entry point
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader', // Use Babel for JS/JSX/TS/TSX transpiling
      },
    ],
  },
};
