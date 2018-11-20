const url = require('url')
const HttpProxy = require('http-proxy')
const proxy = HttpProxy.createProxyServer()

module.exports = options => {
  return async function httpproxy(ctx, next) {
    let proxyTable = (ctx.app.config.httpproxy&&ctx.app.config.httpproxy.proxyTable)||[]
    let pxy,pathlen=0;
    for(let idx=0;idx<proxyTable.length;idx++){
      if(ctx.url.toLowerCase().indexOf(proxyTable[idx].path.toLowerCase().trim())==0){
        pathlen =proxyTable[idx].path.trim().length;
        pxy = proxyTable[idx];
        break;
      }
    }
    
    if(pxy)
    {
        return new Promise((resolve, reject) => {
            ctx.req.oldPath = ctx.req.url
            let u = ctx.req.url.substr(pathlen);
            if(u) u = u.trim()
            if(!u)u = '/';
            ctx.logger.info(u) ;
            ctx.req.url = u;
            proxy.web(ctx.req, ctx.res, pxy.proxy, e => {
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