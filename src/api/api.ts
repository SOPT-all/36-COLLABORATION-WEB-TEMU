import { END_URL } from '@/constant/url';
import { get } from '@api/instance';
import type { ProductDetailResponseTypes } from '@pages/productDetail/types/response';

export const getProductDetail = (productId: number) =>
  get<ProductDetailResponseTypes>(END_URL.GET_PRODUCTS_DETAIL(productId));
