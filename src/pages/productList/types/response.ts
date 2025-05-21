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

export interface ProductListResponseTypes {
  productMainInfos: ProductCardData[];
  success: boolean;
  code: number;
  message: string;
}
