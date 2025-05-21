import { useQuery } from '@tanstack/react-query';
import { getProductDetail, getSearchedProductList, getProductList } from '@api/api';
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
  return useQuery<ProductListResponseTypes, Error>({
    queryKey: [QUERY_KEYS.PRODUCTS],
    queryFn: () => getProductList(),
  });
};
