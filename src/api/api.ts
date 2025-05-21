import { END_URL } from '@/constant/url';
import { get } from '@api/instance';
import type { ProductDetailResponseTypes } from '@pages/productDetail/types/response';
import type { ProductListResponseTypes } from '@pages/productList/types/response';

export const getProductDetail = (productId: number) =>
  get<ProductDetailResponseTypes>(END_URL.GET_PRODUCTS_DETAIL(productId));

export const getSearchedProductList = (keyword: string) =>
  get<ProductListResponseTypes>(
    `${END_URL.GET_PRODUCTS_SEARCH}?keyword=${encodeURIComponent(keyword)}`
  );

export const getProductList = () => get<ProductListResponseTypes>(END_URL.GET_PRODUCT);
