import ReviewListItem from '../reviewListItem/ReviewListItem';
import * as styles from './ReviewList.css';
import type { ProductReviewDetail, ReviewScoreDistribution } from '@shared/types/reviews';

type ReviewListProps = {
  productReviewDetails: ProductReviewDetail[];
  reviewScoreDistributions: ReviewScoreDistribution[];
  sortType: 'latest' | 'score';
};

const ReviewList = ({
  productReviewDetails,
  reviewScoreDistributions,
  sortType,
}: ReviewListProps) => {
  const sortedReviews = [...productReviewDetails].sort((a, b) => {
    if (sortType === 'latest') {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }
    return b.score - a.score;
  });

  return (
    <div className={styles.container}>
      {sortedReviews.map((review, idx) => (
        <ReviewListItem key={idx} {...review} reviewScoreDistributions={reviewScoreDistributions} />
      ))}
    </div>
  );
};

export default ReviewList;
