const addVueRawPreLoader = require("vue-raw-pre");

module.exports = {
  // productionTip: false,
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
  },
};
