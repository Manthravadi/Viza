import httpProxyMiddleware from "http-proxy-middleware";

export default app => {
  app.use(httpProxyMiddleware("/api/*", { target: "http://localhost:5000" }));
  app.use(httpProxyMiddleware("/auth/azure", { target: "http://localhost:5000" }));
};
