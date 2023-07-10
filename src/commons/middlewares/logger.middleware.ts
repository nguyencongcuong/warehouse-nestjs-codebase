import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger(LoggerMiddleware.name);

  use(req: Request, res: Response, next: NextFunction) {
    this.logger.log(
      `req.method=${JSON.stringify(req.method)}`,
      `req.params=${JSON.stringify(req.params)}`,
      `req.query=${JSON.stringify(req.query)}`,
      `req.body=${JSON.stringify(req.body)}`,
      `req.headers=${JSON.stringify(req.headers)}`,
      `req.ip=${JSON.stringify(req.ip)}`
    );
    next();
  }
}
