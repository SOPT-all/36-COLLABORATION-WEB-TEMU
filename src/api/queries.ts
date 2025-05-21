import { useQuery } from '@tanstack/react-query';
import { getProductDetail, getSearchedProductList } from '@api/api';
import { QUERY_KEYS } from '@/constant/queryKey';

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