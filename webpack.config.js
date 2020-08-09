const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// experimentalDecorators
// @import '~bootstrap';

const isDevelopment = process.env.NODE_ENV === "development";
module.exports = {
  // target: "node",
  mode: "development",
  watch: true,
  stats: "errors-only",
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /\.module.(s(a|c)ss)$/,
        // fallback to style-loader in dev
        use: [
          isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
          { loader: "css-loader" },
          {
            loader: "sass-loader",
            options: {
              sourceMap: isDevelopment,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".scss"],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: isDevelopment ? "[name].css" : "[name].[hash].css",
      chunkFilename: isDevelopment ? "[id].css" : "[id].[hash].css",
    }),
  ],
  devServer: {
    open: true,
    watchOptions: {
      poll: true,
      aggregateTimeout: 1000,
      ignored: "/node_modules/",
    },
  },
};
