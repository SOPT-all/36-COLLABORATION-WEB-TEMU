export interface ProductReviewDetail {
  nickname: string;
  score: number;
  imageUrl: string;
  content: string;
  productOption: string;
  createdAt: string; // ISO 날짜 문자열
}

export interface ReviewScoreDistribution {
  score: number;
  reviewCount: number;
  percentage: number;
}

export interface ProductReviewData {
  avgScore: number;
  reviewImages: string[];
  productReviewDetails: ProductReviewDetail[];
  reviewScoreDistributions: ReviewScoreDistribution[];
}
