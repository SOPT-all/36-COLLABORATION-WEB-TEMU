import { useQuery, useSuspenseQuery, keepPreviousData } from '@tanstack/react-query';
import {
  getProductDetail,
  getPromotionProductList,
  getSearchedProductList,
  getProductDetailReviewSection,
  getProductList,
} from '@api/api';

import { QUERY_KEYS } from '@/constant/queryKey';
import type { HomeProductListResponseTypes } from '@pages/home/types/response';

export const useGetProductDetail = (productId: number) => {
  return useQuery({
    queryKey: [QUERY_KEYS.PRODUCTS_DETAIL, productId],
    queryFn: () => getProductDetail(productId),
    placeholderData: keepPreviousData,
  });
};

export const useGetSearchedProductList = (keyword: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.PRODUCTS_SEARCH, keyword],
    queryFn: () => getSearchedProductList(keyword),
    enabled: !!keyword,
    placeholderData: keepPreviousData,
  });
};

export const useGetProductList = () => {
  return useSuspenseQuery<HomeProductListResponseTypes, Error>({
    queryKey: [QUERY_KEYS.PRODUCTS],
    queryFn: () => getProductList(),
  });
};

export const useGetPromotionProductList = () => {
  return useSuspenseQuery({
    queryKey: [QUERY_KEYS.PRODUCTS_PROMOTION],
    queryFn: () => getPromotionProductList(),
  });
};

export const useGetProductDetailReview = (productId: number) => {
  return useQuery({
    queryKey: [QUERY_KEYS.PRODUCTS_DETAIL_REVIEWS, productId],
    queryFn: () => getProductDetailReviewSection(productId),
    enabled: !!productId,
  });
};
