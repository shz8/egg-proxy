'use strict';

const mock = require('egg-mock');

describe('test/zfaas.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/zfaas-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, zfaas')
      .expect(200);
  });
});
