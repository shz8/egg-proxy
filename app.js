'use strict';

const assert = require('assert');

module.exports = (app) => {
  const index = app.config.appMiddleware.indexOf('httpproxy');
  //console.log(app.config.httpproxy)
  assert.equal(index, -1, 'Duplication of middleware name found: rest. Rename your middleware other than "httproxy" please.');
  app.config.coreMiddleware.unshift('httpproxy');
  app.beforeStart(async () => {
    
  });
  app.ready(async (err) => {
    if (err) throw err;
    //await app.runSchedule('update_cache');
  });
};
