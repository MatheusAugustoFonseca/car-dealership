import { NextFunction, Request, Response } from 'express';

class ErrorHandler {
  static handle(
    error: Error,
    _req: Request,
    res: Response,
    next: NextFunction,
  ) {
    res.status(422).json({ message: error.message });
    next();
  }
}

export default ErrorHandler;