module.exports = {
  configureWebpack: {
    devtool: 'source-map',
  },
  css: {
    loaderOptions: {
      scss: {
        data: `
            @import "@/assets/scss/__variables.scss";
            @import "@/assets/scss/__mixins.scss";
          `,
      },
    },
  },
}
