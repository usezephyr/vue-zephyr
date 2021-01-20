const addVueRawPreLoader = require("vue-raw-pre");
const path = require("path");

module.exports = {
  // productionTip: false,
  outputDir: path.resolve(__dirname, "build"),
  pluginOptions: {
    webpackBundleAnalyzer: {
      openAnalyzer: false
    },
    autoRouting: {
      chunkNamePrefix: 'page-',
      importPrefix: "@/views/pages/",
      pages: "src/views/pages",
      nested: true,
    }
  },
  chainWebpack: (config) => {
    addVueRawPreLoader(config);
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Vue Zephyr'
        return args
      })
  },
};
