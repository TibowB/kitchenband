const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    app: "./public/js/app.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "public/dist/"),
  },
};
