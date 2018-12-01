// import httpProxyMiddleware from "http-proxy-middleware";

// export default app => {
//   app.use(httpProxyMiddleware("/api/*", { target: "http://localhost:5000" }));
//   app.use(httpProxyMiddleware("/auth/azure", { target: "http://localhost:5000" }));
// };

const proxy = require('http-proxy-middleware')
 
module.exports = function(app) {
  app.use(proxy('/api/', { target: 'http://localhost:5000'}));
  app.use(proxy('/auth/azure/', { target: 'http://localhost:5000' }));
}