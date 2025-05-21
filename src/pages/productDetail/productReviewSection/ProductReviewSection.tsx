import { useState } from 'react';
import { mockReviewData } from '@pages/productDetail/productReviewSection/constants/reviewData';
import type { SortType } from '@pages/productDetail/productReviewSection/types/index';
import * as styles from '@pages/productDetail/productReviewSection/ProductReviewSection.css';
import ReviewFilterBar from '@pages/productDetail/productReviewSection/components/reviewFilterBar/ReviewFilterBar';
import ReviewList from '@pages/productDetail/productReviewSection/components/reviewList/ReviewList';
import ReviewPhoto from '@pages/productDetail/productReviewSection/components/reviewPhoto/ReviewPhoto';
import ReviewSummary from '@pages/productDetail/productReviewSection/components/reviewSummary/ReviewSummary';
import Divider from '@shared/components/divider/Divider';
import NextPage from '@pages/productDetail/productReviewSection/components/nextPage/NextPage';

const ProductReviewSection = () => {
  const { avgScore, reviewImages, productReviewDetails, reviewScoreDistributions } = mockReviewData;

  const [sortType, setSortType] = useState<SortType>('recent');

  const handleChangeSortType = (type: SortType) => {
    setSortType(type);
  };

  return (
    <div className={styles.container}>
      <ReviewSummary avgScore={avgScore} productReviewDetails={productReviewDetails} />
      <Divider color="gray2" direction="horizontal" />

      <ReviewPhoto reviewImages={reviewImages} />
      <Divider color="gray1" direction="horizontal" />

      <ReviewFilterBar sortType={sortType} onChangeSortType={handleChangeSortType} />
      <Divider color="gray1" direction="horizontal" />

      <div className={styles.listSection}>
        <ReviewList
          productReviewDetails={productReviewDetails}
          reviewScoreDistributions={reviewScoreDistributions}
          sortType={sortType}
        />
        <NextPage />
      </div>
    </div>
  );
};

export default ProductReviewSection;
