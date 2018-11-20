'use strict';

/**
 * egg-zfaas default config
 * @member Config#zfaas
 * @property {String} SOME_KEY - some description
 */
  exports.httpproxy = {
    proxyTable: [
      {
        path: "/risws/",
        proxy: { target: 'http://t.vy01.com/MedTechWebService/', changeOrigin: true },
      },
      {
        path: "/zsapi/",
        proxy: { target: 'http://a.vy01.com/api/', changeOrigin: true },
      }],
  };

