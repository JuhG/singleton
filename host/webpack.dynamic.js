const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/dynamic",
  mode: "development",
  output: {
    clean: true,
  },
  plugins: [new HtmlWebpackPlugin()],
};
