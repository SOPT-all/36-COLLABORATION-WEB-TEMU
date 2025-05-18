import axios from 'axios';
import { BASE_URL } from '@shared/constant/api';

export const instance = axios.create({
  baseURL: BASE_URL,
});
