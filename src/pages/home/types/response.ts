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

export interface ProductCardData {
  productId: number;
  productName: string;
  discountRate: number;
  discountPrice: number;
  productImage: string;
  reviewCount: number;
  productTag: string;
  categoryList: string[];
}

export interface HomeProductListResponseTypes {
  productMainInfos: ProductCardData[];
  success: boolean;
  code: number;
  message: string;
}
