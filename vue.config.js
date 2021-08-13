//vue-cli配置文件，90%的配置都是webpack配置
module.exports = {
  devServer: {
    proxy: {
      //配置代理
      "/x": {
        //凡是以/x开头的请求，进行代理
        target: "https://api.bilibili.com",
        onProxyReq(ProxyReq) {
          //add custom header to request
          ProxyReq.setHeader("origin", "https://www.bilibili.com");
          ProxyReq.setHeader("referer", "https://www.bilibili.com");
          //or log the req
        },
      },
    },
  },
};
