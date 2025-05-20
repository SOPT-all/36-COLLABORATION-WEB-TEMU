export interface ReviewResponseTypes {
  nickname: string;
  score: number;
  imageUrl: string;
  content: string;
  productOption: string;
  createdAt: string;
}

export interface ReviewScoreDistributionResponseTypes {
  score: number;
  reviewCount: number;
  percentage: number;
}

export interface ProductReviewDetailResponseTypes {
  avgScore: number;
  reviewImages: string[];
  productReviewDetails: ReviewResponseTypes[];
  reviewScoreDistributions: ReviewScoreDistributionResponseTypes[];
}
