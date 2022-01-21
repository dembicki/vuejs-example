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
    subModule: {
      entry: `${__dirname}/src/modules/sub-module-example/main.js`,
      template: `${__dirname}/public/sub-module.html`,
      filename: "index.html",
      title: "Hello from sub-module",
    },
  },
};
