import ReviewListItem from '@/pages/productDetail/productReviewSection/components/reviewListItem/ReviewListItem';
import * as styles from '@/pages/productDetail/productReviewSection/components/reviewList/ReviewList.css';
import type {
  ReviewResponseTypes,
  ReviewScoreDistributionResponseTypes,
} from '@pages/productDetail/productReviewSection/types/reviews';
import type { SortType } from '@/pages/productDetail/productReviewSection/types/index';
import { getSortedReviews } from '@pages/productDetail/productReviewSection/utils/getSortedReviews';

interface ReviewListProps {
  productReviewDetails: ReviewResponseTypes[];
  reviewScoreDistributions: ReviewScoreDistributionResponseTypes[];
  sortType: SortType;
}

const ReviewList = ({
  productReviewDetails,
  reviewScoreDistributions,
  sortType,
}: ReviewListProps) => {
  const sorted = getSortedReviews(productReviewDetails, sortType);

  return (
    <div className={styles.container}>
      {sorted.map((review, idx) => (
        <ReviewListItem key={idx} {...review} reviewScoreDistributions={reviewScoreDistributions} />
      ))}
    </div>
  );
};

export default ReviewList;
