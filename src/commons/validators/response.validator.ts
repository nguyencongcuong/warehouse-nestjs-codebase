import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';

/*
 * Catch the Internal Server Error Exception and wrap the response return to client
 * - Bad Request from built-in class validator
 * - Error from controller catch block
 */

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    const errorResponse = {
      success: false,
      error: {
        name: exception.name,
        statusCode: exception.getStatus() || HttpStatus.INTERNAL_SERVER_ERROR,
        message: exception.message || 'Unknown error',
      },
    };

    response.status(errorResponse.error.statusCode).json(errorResponse);
  }
}
