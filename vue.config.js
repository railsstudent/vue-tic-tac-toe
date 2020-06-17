// vue.config.js
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/vue-tic-tac-toe/" : "/",
  outputDir: "dist",
  lintOnSave: process.env.NODE_ENV !== "production",
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    }
  }
};
