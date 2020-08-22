module.exports = {
  devServer: {
    publicPath: process.env.NODE_ENV === "development" ? "/" : "./",
    // proxy: {
    //   '/img': {
    //     target: 'http://heishenhua.com',
    //     pathRewrite: {
    //       '^/img' : '/img'
    //     }
    //   },
    // }
  },
};
