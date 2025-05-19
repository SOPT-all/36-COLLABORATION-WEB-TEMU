export interface GetProductsResponseTypes {
  productId: number;
  imageUrl: string;
  productName: string;
  discountRate: number;
  discountPrice: number;
  reviewCount: number;
  category: string[];
  productTag?: string;
}
