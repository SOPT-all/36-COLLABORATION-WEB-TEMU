import Text from '@shared/components/text/Text';
import * as styles from '@pages/productDetail/productReviewSection/components/reviewSummary/ReviewSummary.css';
import Divider from '@shared/components/divider/Divider';
import StarRating from '@shared/components/star/StarRating';
import Head from '@shared/components/head/Head';
import { toHalfFloor } from '../../utils/toHalfFloor';
import type {
  ReviewResponseTypes,
  ReviewScoreDistributionResponseTypes,
} from '@pages/productDetail/productReviewSection/types/reviews';

interface ReviewSummaryProps {
  avgScore: number;
  productReviewDetails: ReviewResponseTypes[];
  reviewScoreDistributions: ReviewScoreDistributionResponseTypes[];
}

const ReviewSummary = ({
  avgScore,
  productReviewDetails,
  reviewScoreDistributions,
}: ReviewSummaryProps) => {
  return (
    <>
      <div className={styles.reviewTitle}>
        <Head level="h1" tag="head_sb_24" color="black">
          후기 ({productReviewDetails.length})
        </Head>
        <Divider color="gray2" direction="horizontal" />
      </div>

      <div className={styles.rateContainer}>
        <div className={styles.rateContainerLeft}>
          <div className={styles.reviewAverage}>
            <Text tag="head_bold_60">{avgScore.toFixed(1)}</Text>
            <StarRating score={toHalfFloor(avgScore)} width={168} height={32} />
          </div>
          <Divider direction="vertical" />
        </div>

        <div className={styles.rateContainerRight}>
          <div className={styles.scoreNPercent}>
            {reviewScoreDistributions.map(({ score }) => (
              <Text key={score} tag="body_medium_18">
                {score}점
              </Text>
            ))}
          </div>

          <div className={styles.graphWrapper}>
            {reviewScoreDistributions.map(({ score, percentage }) => {
              const isZero = percentage === 0;
              return (
                <div key={score} className={styles.barBackground}>
                  <div
                    className={styles.barFill({ isZero })}
                    style={isZero ? undefined : { width: `${percentage}%` }}
                  />
                </div>
              );
            })}
          </div>

          <div className={styles.scoreNPercent}>
            {reviewScoreDistributions.map(({ score, percentage }) => (
              <Text key={score} tag="body_medium_18">
                {percentage}%
              </Text>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewSummary;
