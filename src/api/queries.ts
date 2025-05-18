import { useQuery } from '@tanstack/react-query';
import { getProductDetail } from '@api/api';
import { QUERY_KEYS } from '@/constant/queryKey';

export const useGetProductDetail = (productId: number) => {
  return useQuery({
    queryKey: [QUERY_KEYS.PRODUCTS_DETAIL, productId],
    queryFn: () => getProductDetail(productId),
  });
};
