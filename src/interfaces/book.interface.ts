export interface IBook {
  title: string;
  author: string;
  publishedYear?: number;
  genre?: string;
  available?: boolean;
}

export interface IApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  error?: unknown;
}