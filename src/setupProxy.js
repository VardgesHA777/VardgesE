/* eslint-disable */
const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api/v1/**',
    proxy.createProxyMiddleware({
      target: process.env.REACT_APP_HOSTNAME,
      changeOrigin: true,
    })
  );
};
