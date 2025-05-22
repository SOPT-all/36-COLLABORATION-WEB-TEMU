export interface ProductCardData {
  productId: number;
  productName: string;
  discountRate: number;
  discountPrice: number;
  productImage: string;
  reviewCount: number;
  productTag: string;
}

export interface ProductListResponseTypes {
  searchedProductList: ProductCardData[];
  success: boolean;
  code: number;
  message: string;
}
