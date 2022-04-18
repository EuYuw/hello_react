/**
 * 配置多个代理的文件 commonjs规范
 */

const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    proxy('/api', {
      // 遇见/api请求前缀的请求就会触发该代理
      target: 'https://api.github.com', // 请求转发给谁
      changeOrigin: true, // 修改服务器收到的请求头中的host地址
      pathRewrite: { '^/api': '' } // 重写请求路径
    })
  );
};
