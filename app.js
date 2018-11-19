'use strict';

const assert = require('assert');

module.exports = (app) => {
  const index = app.config.appMiddleware.indexOf('httpproxy');
  app.beforeStart(async () => {
    console.log('httpproxy')
  });
  app.ready(async (err) => {
    if (err) throw err;
    //await app.runSchedule('update_cache');
  });
};
