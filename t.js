const url = require('url')
const HttpProxy = require('http-proxy')
const proxy = HttpProxy.createProxyServer()
module.exports = options => {
  return async function gzip(ctx, next) {
      //if(ctx.url == '/')
      {
        return new Promise((resolve, reject) => {
            ctx.req.oldPath = ctx.req.url
            //ctx.logger.info(ctx) 
            proxy.web(ctx.req, ctx.res, { target: 'http://test1.vy01.com/' , changeOrigin: true}, e => {
                const status = {
                  ECONNREFUSED: 503,
                  ETIMEOUT: 504
                }[e.code]
                if (status) ctx.status = status
                resolve()
            })
        })
      }
    await next();
    console.log(ctx.url)
  };
};