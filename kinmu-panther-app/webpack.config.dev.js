var webpack = require("webpack");
var path = require('path');

module.exports = {
  entry:{
    app: "./src/Index.tsx",
    vendor: [
      "material-ui",
      "moment",
      "react",
      "react-dom",
      "react-redux",
      "react-router",
      "react-router-redux",
      "react-tap-event-plugin",
      "redux",
      "redux-persist"
    ]
  },
  output: {
    path: path.join(__dirname, 'www/dist'),
    filename: '[name].js',
    publicPath: 'dist/',
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.js")
  ],
  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ["", ".ts", ".tsx", ".js"]
  },
  module: {
    loaders: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  },
  cache: true
};