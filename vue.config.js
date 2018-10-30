const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  baseUrl: "",
  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined,
  css: undefined,
  lintOnSave: true,
  chainWebpack: config => {
    config.resolve.extensions
      .add(".js")
      .add(".vue")
      .add(".less");
    config.resolve.alias.set("@$", resolve("src"));
  },
  devServer: {
    port: 3000,
    proxy: {}
  }
};
