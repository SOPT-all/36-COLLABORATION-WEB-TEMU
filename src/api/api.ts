import { END_URL } from '@/constant/url';
import { get } from '@api/instance';
import type { PromotionProductListResponse, HomeProductListResponseTypes } from '@pages/home/types/response';
import type { ProductDetailResponseTypes } from '@pages/productDetail/types/response';
import type { ProductListResponseTypes } from '@pages/productList/types/response';
import type { ProductReviewDetailResponseTypes } from '@pages/productDetail/productReviewSection/types/reviews';

export const getProductDetail = (productId: number) =>
  get<ProductDetailResponseTypes>(END_URL.GET_PRODUCTS_DETAIL(productId));

export const getSearchedProductList = (keyword: string) =>
  get<ProductListResponseTypes>(
    `${END_URL.GET_PRODUCTS_SEARCH}?keyword=${encodeURIComponent(keyword)}`
  );

export const getProductList = () => get<HomeProductListResponseTypes>(END_URL.GET_PRODUCT);

export const getPromotionProductList = () =>
  get<PromotionProductListResponse>(END_URL.GET_PRODUCTS_PROMOTION);

export const getProductDetailReviewSection = (productId: number) =>
  get<ProductReviewDetailResponseTypes>(END_URL.GET_PRODUCTS_DETAIL_REVIEWS(productId));
