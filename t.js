let util = require('./lib/utils');
let pt = [
  {
    path: "/risws/",
    proxy: {
      target: 'http://t.vy01.com/MedTechWebService/',
      changeOrigin: true,
    },
  },
  {
    path: "/zspi/",
    proxy: { target: 'http://a.vy01.com/api/', changeOrigin: true },
  },
  {
    path: "/zsp22i/",
    proxy: { target: 'http://a.vy01.com/api/', changeOrigin: true },
  }]
console.log(pt)
console.log(util.proxySort(pt))
