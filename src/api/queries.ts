import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import {
  getProductDetail,
  getPromotionProductList,
  getSearchedProductList,
  getProductDetailReviewSection,
  getProductList
} from '@api/api';

import { QUERY_KEYS } from '@/constant/queryKey';
import type { ProductListResponseTypes } from '@/pages/productList/types/response';

export const useGetProductDetail = (productId: number) => {
  return useQuery({
    queryKey: [QUERY_KEYS.PRODUCTS_DETAIL, productId],
    queryFn: () => getProductDetail(productId),
  });
};

export const useGetSearchedProductList = (keyword: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.PRODUCTS_SEARCH, keyword],
    queryFn: () => getSearchedProductList(keyword),
    enabled: !!keyword,
  });
};


export const useGetProductList = () => {
  return useSuspenseQuery<ProductListResponseTypes, Error>({
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
