var path = require("path");
module.exports = {
  mode: "production",
  entry: path.join(__dirname, "src", "main.js"),
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: path.join(__dirname, "src"),
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
        },
      },
    ],
  },
  stats: {
    colors: true,
  },
  devtool: "source-map",
};
