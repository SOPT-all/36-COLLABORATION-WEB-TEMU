import type { SortType } from '@pages/productDetail/productReviewSection/types/index';
import type { ReviewResponseTypes } from '@pages/productDetail/productReviewSection/types/reviews';

export const getSortedReviews = (
  items: ReviewResponseTypes[],
  sortType: SortType
): ReviewResponseTypes[] =>
  [...items].sort((a, b) => {
    if (sortType === 'recent') {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }
    return b.score - a.score;
  });
