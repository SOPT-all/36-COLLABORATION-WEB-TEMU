import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductDetailReview } from '@api/queries';
import type { SortType } from '@pages/productDetail/productReviewSection/types/index';
import * as styles from '@pages/productDetail/productReviewSection/ProductReviewSection.css';
import ReviewFilterBar from '@pages/productDetail/productReviewSection/components/reviewFilterBar/ReviewFilterBar';
import ReviewList from '@pages/productDetail/productReviewSection/components/reviewList/ReviewList';
import ReviewPhoto from '@pages/productDetail/productReviewSection/components/reviewPhoto/ReviewPhoto';
import ReviewSummary from '@pages/productDetail/productReviewSection/components/reviewSummary/ReviewSummary';
import Divider from '@shared/components/divider/Divider';
import NextPage from '@pages/productDetail/productReviewSection/components/nextPage/NextPage';

const ProductReviewSection = () => {
  const { id } = useParams<{ id: string }>();
  const productId = Number(id);
  const { data, isLoading, isError } = useGetProductDetailReview(productId);

  const {
    avgScore = 0,
    reviewImages = [],
    productReviewDetails = [],
    reviewScoreDistributions = [],
  } = data ?? {};

  const [sortType, setSortType] = useState<SortType>('recent');
  const [filterScore, setFilterScore] = useState<number | null>(null);

  const handleChangeSortType = (type: SortType) => {
    setSortType(type);
  };

  const handleChangeFilterScore = (score: number | null) => {
    setFilterScore(score);
  };

  const filteredReviews =
    filterScore != null
      ? productReviewDetails.filter(review => review.score === filterScore)
      : productReviewDetails;

  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>등록된 리뷰가 없습니다...</div>;

  return (
    <div className={styles.container}>
      <ReviewSummary
        avgScore={avgScore}
        productReviewDetails={productReviewDetails}
        reviewScoreDistributions={reviewScoreDistributions}
      />
      <Divider color="gray2" direction="horizontal" />

      <ReviewPhoto reviewImages={reviewImages} />
      <Divider color="gray1" direction="horizontal" />

      <ReviewFilterBar
        sortType={sortType}
        onChangeSortType={handleChangeSortType}
        filterScore={filterScore}
        onChangeFilterScore={handleChangeFilterScore}
      />
      <Divider color="gray1" direction="horizontal" />

      <div className={styles.listSection}>
        <ReviewList
          productReviewDetails={filteredReviews}
          reviewScoreDistributions={reviewScoreDistributions}
          sortType={sortType}
        />
        <NextPage />
      </div>
    </div>
  );
};

export default ProductReviewSection;
