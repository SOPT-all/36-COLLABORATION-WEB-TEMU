import axios from 'axios';
import { BASE_URL } from '@/constant/url';
import type { ApiResponse } from '@shared/types/api';

export const instance = axios.create({
  baseURL: BASE_URL,
});

export const get = async <T>(...args: Parameters<typeof instance.get>) => {
  try {
    const response = await instance.get<ApiResponse<T>>(...args);
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
