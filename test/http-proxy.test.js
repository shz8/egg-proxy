'use strict';

const mock = require('egg-mock');

describe('test/http-proxy.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/http-proxy-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, httpProxy')
      .expect(200);
  });
});
