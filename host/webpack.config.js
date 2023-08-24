// const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  output: {
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin(),
    //   new ModuleFederationPlugin({
    //     name: "host",
    //   }),
  ],
};
