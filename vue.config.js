module.exports = {
  devServer: {
    host: "localhost",
    port: 8080,
    https: false,
    open: true,
    proxy: {
      "/api": {
        target: 'http://localhost:4000', // 代理目标的基础路径
        changeOrigin: true, // 支持跨域
        pathRewrite: {// 重写路径: 去掉路径中开头的'/api'
          '^/api': ''
        }
      }
    }
  }
}