export interface Response<T> {
  data: T;
  status: number;
  success: boolean;
  errors?: string[];
}
