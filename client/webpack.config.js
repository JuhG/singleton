const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  entry: "./src/module",
  mode: "development",
  output: {
    clean: true,
  },
  devServer: {
    port: 8081,
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "client",
      filename: "remoteEntry.js",
      exposes: {
        "./module": "./src/module.js",
      },
    }),
  ],
};
