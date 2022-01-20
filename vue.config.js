module.exports = {
  lintOnSave: false,
  filenameHashing: false,
  pages: {
    main: {
      entry: `${__dirname}/src/modules/main-module/main.js`,
      template: `${__dirname}/public/main.html`,
      filename: "index.html",
      title: "Demo - Greeting",
    },
  },
};
