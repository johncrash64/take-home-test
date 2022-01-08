module.exports = {
  devServer: {
    compress: true,
    disableHostCheck: true,
    // port: 8383,
    https: false,
    proxy: {
      '/*': {
        target: 'http://localhost:3000',
        ws: false,
        changeOrigin: true,
        headers: {
          Authorization: 'Basic YWRtaW46YWRtaW4=',
        },
      },
    },
  },
};
