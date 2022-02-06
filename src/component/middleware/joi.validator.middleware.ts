import Bunyan from 'bunyan';
import {Request, Response, NextFunction} from 'express';
import Joi from '@hapi/joi';

const logger = Bunyan.createLogger({name: 'JoiValidatorMiddleware'});

const joiValidatorMiddleware = (schema: Joi.ObjectSchema) =>
  (req: Request, res: Response, next: NextFunction): void => {
    const schemaWithUnknown = schema.unknown();
    const {error, value: joiReq} = schemaWithUnknown.validate(req);
    if (error) {
      const {name, message, stack} = error;
      logger.warn({name, message, stack}, 'validation error');
      res.status(400).send({
        error: message,
      });
      return;
    }
    req.headers = joiReq.headers;
    req.params = joiReq.params;
    req.query = joiReq.query;
    req.cookies = joiReq.cookies;
    req.signedCookies = joiReq.signedCookies;
    req.body = joiReq.body;

    next();
  };

export default joiValidatorMiddleware;
