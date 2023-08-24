const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/dynamic",
  mode: "development",
  output: {
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new ModuleFederationPlugin({
      name: "host",
      remotes: {
        // client: "client@http://localhost:8081/remoteEntry.js",
      },
      // shared: ["useless-lib"],
      shared: {},
    }),
  ],
};
