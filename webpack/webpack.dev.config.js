const path = require("path");

const parentDir = path.join(__dirname, "../");

module.exports = {
  entry: [path.join(parentDir, "src", "index.jsx")],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  output: {
    path: `${parentDir}/dist`,
    filename: "bundle.js"
  },
  devServer: {
    contentBase: parentDir,
    historyApiFallback: true,
    port: 8080
  },
  resolve: {
    extensions: [".js", ".jsx"],
    modules: [
      path.resolve(parentDir, "src"),
      path.resolve(parentDir, "node_modules")
    ]
  }
};
