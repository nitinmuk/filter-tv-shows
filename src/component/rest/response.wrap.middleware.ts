import {Response} from 'express';
import {SimpleResponse} from './rest.types';

const responseWriter = (res: Response) => (result: SimpleResponse) => {
  if (Object.prototype.hasOwnProperty.call(result, 'json')) {
    return res.status(result.status).json(result.json);
  }
  return res.sendStatus(result.status);
};

const middlewareWrapper =
  (fn) =>
    (...args) =>
      fn(...args)
          .then(responseWriter(args[1]))
          .catch(args[2]);

export default middlewareWrapper;
