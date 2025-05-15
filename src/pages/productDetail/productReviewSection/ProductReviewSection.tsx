import { useState } from 'react';
import { data } from './reviewData';
import ReviewFilterBar from './reviewFilterBar/ReviewFilterBar';
import ReviewList from './reviewList/ReviewList';
import ReviewPhoto from './reviewPhoto/ReviewPhoto';
import ReviewSummary from './reviewSummary/ReviewSummary';
import Divider from '@shared/components/divider/Divider';
import NextPage from './nextPage/NextPage';

const ProductReviewSection = () => {
  const { avgScore, reviewImages, productReviewDetails, reviewScoreDistributions } = data;

  const [sortType, setSortType] = useState<'latest' | 'score'>('latest');

  return (
    <div>
      <ReviewSummary avgScore={avgScore} />
      <Divider direction="horizontal" />

      <ReviewPhoto reviewImages={reviewImages} />
      <Divider direction="horizontal" />

      <ReviewFilterBar sortType={sortType} setSortType={setSortType} />
      <Divider direction="horizontal" />

      <ReviewList
        productReviewDetails={productReviewDetails}
        reviewScoreDistributions={reviewScoreDistributions}
        sortType={sortType}
      />
      <Divider direction="horizontal" />
      <NextPage />
    </div>
  );
};

export default ProductReviewSection;
