import { Request, Response, NextFunction } from "express";

const parserErrorMiddleware = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.log(error, "parserErrorMiddleware");
  if (error.status === 400) {
    res.status(400).send({
      error: "Could not decode request: JSON parsing failed",
    });
    return;
  }
  next(error);
};

export default parserErrorMiddleware;
