export interface GetProductsResponseTypes {
  productId: number;
  productImage: string;
  productName: string;
  discountRate: number;
  discountPrice: number;
  reviewCount: number;
  productTag?: string;
}
