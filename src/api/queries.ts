import { useQuery } from '@tanstack/react-query';
import { getProductDetail, getProductDetailReviewSection } from '@api/api';
import { QUERY_KEYS } from '@/constant/queryKey';

export const useGetProductDetail = (productId: number) => {
  return useQuery({
    queryKey: [QUERY_KEYS.PRODUCTS_DETAIL, productId],
    queryFn: () => getProductDetail(productId),
  });
};

export const useGetProductDetailReview = (productId: number) => {
  return useQuery({
    queryKey: [QUERY_KEYS.PRODUCTS_DETAIL_REVIEWS, productId],
    queryFn: () => getProductDetailReviewSection(productId),
  });
};
