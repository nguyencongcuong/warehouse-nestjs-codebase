export interface ErrorResponse {
  success: false;
  error?: {
    name: string;
    statusCode: number;
    message: string[];
  };
}

export interface SuccessResponse<T> {
  success: true;
  data?: T;
}

export type ControllerResponse = SuccessResponse<any> | ErrorResponse;
