import type { Category } from '@/pages/home/components/constant/categorys';

export interface GetPromotionResponseTypes {
  productId: number;
  productName: string;
  discountRate: number;
  discountPrice: number;
  productImage: string;
}

export interface PromotionProductListResponse {
  promotionProductInfos: GetPromotionResponseTypes[];
}

export interface GetProductsResponseTypes {
  productId: number;
  productName: string;
  discountRate: number;
  discountPrice: number;
  productImage: string;
  reviewCount: number;
  productTag: string;
  categoryList: Category[];
}
