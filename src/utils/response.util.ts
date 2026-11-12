import { Response } from 'express';
import { IApiResponse } from '../interfaces/book.interface';

export const sendSuccess = <T>(
  res: Response,
  statusCode: number,
  message: string,
  data?: T
): Response<IApiResponse<T>> => {
  return res.status(statusCode).json({
    success: true,
    message,
    data
  });
};

export const sendError = (
  res: Response,
  statusCode: number,
  message: string,
  error?: unknown
): Response<IApiResponse> => {
  return res.status(statusCode).json({
    success: false,
    message,
    error: error instanceof Error ? error.message : error
  });
}