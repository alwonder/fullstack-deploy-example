module.exports = {
  "/api/**": {
    "target": "http://back:3000/",
    "secure": false,
    "logLevel": "debug",
    "changeOrigin": true,
    "pathRewrite": {
      "^/api": ""
    }
  },
}
