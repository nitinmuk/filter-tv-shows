import Bunyan from 'bunyan';
import { Request, Response, NextFunction } from 'express';

const logger = Bunyan.createLogger({ name: 'JoiErrorMiddleware'});

const parserErrorMiddleware = (error: any, req: Request, res: Response, next: NextFunction): void => {
    if(error) {
        res.status(400).send({
            error: 'Could not decode request: JSON parsing failed'
        });
        return;
    }
};

export default parserErrorMiddleware;
