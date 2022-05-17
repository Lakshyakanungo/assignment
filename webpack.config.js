module.exports = {
  entry: "./app.js", //entry point of webpack and not browser , browsers entry point is always index.html
  mode: "development",
  watch: true,
  module: {
    rules: [
      {
        test: /\.js/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
      {
        test: /\.css/,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/,
      },
    ],
  },
};
