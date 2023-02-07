const HtmlWebpackPlugin = require("html-webpack-plugin");
const { join } = require("path");

module.exports = {
  entry: join(__dirname, "src", "main.js"),
  output: {
    path: join(__dirname, "dist"),
    filename: "my-draggable-quiz.bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(s(a|c)ss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: join(__dirname, "public", "index.html"),
    }),
  ],
  devServer: {
    compress: true,
    port: 9000,
  },
  mode: "development",
};
