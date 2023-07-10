import { HttpStatus } from '@nestjs/common';

export const HttpStatusText = {
  [HttpStatus.OK]: 'OK',
  [HttpStatus.CREATED]: 'Created',
  [HttpStatus.BAD_REQUEST]: 'Bad Request',
  [HttpStatus.UNAUTHORIZED]: 'Unauthorized',
  [HttpStatus.FORBIDDEN]: 'Forbidden',
  [HttpStatus.NOT_FOUND]: 'Not Found',
  [HttpStatus.INTERNAL_SERVER_ERROR]: 'Internal Server Error',
  // add more as needed
};
