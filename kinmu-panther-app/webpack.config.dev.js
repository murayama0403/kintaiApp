var webpack = require("webpack");

module.exports = {
  entry:{
    app: "./src/Index.tsx",
    vendor: [
      "onsenui",
      "react",
      "react-dom",
      "react-onsenui",
      "react-redux",
      "redux"
    ]
  },
  output: {
    filename: "./www/dist/bundle.js"
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"./www/dist/vendor.bundle.js")
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