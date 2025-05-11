const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devServer: {
    port: 3001, // Puerto para la app remota
    historyApiFallback: true,
  },
  output: {
    publicPath: "http://localhost:3001/",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "remoteApp",
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/Button", // Expone el componente Button
      },
      shared: {
        react: { singleton: true, requiredVersion: "^18.2.0", eager: true},
        "react-dom": { singleton: true, requiredVersion: "^18.2.0", eager: true},
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};