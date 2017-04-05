var path = require('path');

module.exports = {
  devtool: "source-map",
  entry: './frontend/untappd.jsx',
  output: {
    devtoolLineToLine: true,
    sourceMapFilename: "./bundle.js.map",
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
};
