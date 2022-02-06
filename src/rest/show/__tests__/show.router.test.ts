import sinon from 'sinon';
import request from 'supertest';
import Express from 'express';
import * as joiValidatorMiddleware from '../../../component/middleware/joi.validator.middleware';
import showController from '../show.controller';
import {drmEnabledShowSchema} from '../show.schema';

describe('rest', () => {
  let app;
  const fakeJoiMiddleware = (req, res, next) => {
    next();
  };
  const dynamicImport = async () => {
    const showRouterModule = require.resolve('../show.router');
    delete require.cache[showRouterModule];
    const showRouter = await import('../show.router');
    app.use('/show', showRouter.default);
  };
  beforeEach(() => {
    app = Express();
  });

  afterEach(() => {
    sinon.restore();
  });

  describe('show', () => {
    describe('router', () => {
      describe('/show/drm-enabled-shows => post', () => {
        it('must be a router that accepts POST verb', async () => {
          // Given
          const status = 200;
          const response = {
            response: [{
              image: 'mock image',
              slug: 'mock slug',
              title: 'mock title',
            }],
          };
          const stubbedFilterDRMEnabledShows = sinon.stub(showController, 'filterDRMEnabledShows').resolves({status: 200, json: response});
          const stubbedJoiMiddleware = sinon.stub(joiValidatorMiddleware, 'default');
          stubbedJoiMiddleware.callsFake(() => fakeJoiMiddleware);

          // When
          await dynamicImport();
          await request(app).post('/show/drm-enabled-shows').expect(status);

          // Then
          sinon.assert.calledOnceWithExactly(stubbedJoiMiddleware, drmEnabledShowSchema);
          sinon.assert.calledOnce(stubbedFilterDRMEnabledShows);
        });
      });
    });
  });
});
