import Text from '@shared/components/text/Text';
import * as styles from '@pages/productDetail/productReviewSection/components/reviewSummary/ReviewSummary.css';
import Divider from '@shared/components/divider/Divider';
import IcStar45 from '@svg/ic_star_4_5_sm.svg?react';
import Head from '@shared/components/head/Head';
import type { ReviewResponseTypes } from '@pages/productDetail/productReviewSection/types/reviews';
import IcDetailReviewGraph from '@svg/ic_detail_review_graph.svg?react';
import { REVIEW_CHART_DATA } from '@pages/productDetail/productReviewSection/constants/SUMMARY_SECTION';

interface ReviewSummaryProps {
  avgScore: number;
  productReviewDetails: ReviewResponseTypes[];
}

const ReviewSummary = ({ avgScore, productReviewDetails }: ReviewSummaryProps) => {
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
            <Text tag="head_bold_60">{avgScore}</Text>
            <IcStar45 width={168} height={32} />
          </div>
          <Divider direction="vertical" />
        </div>
        <div className={styles.rateContainerRight}>
          <div className={styles.scoreNPercent}>
            {REVIEW_CHART_DATA.map(({ score }) => (
              <Text key={score} tag="body_medium_18">
                {score}점
              </Text>
            ))}
          </div>
          <div>
            <IcDetailReviewGraph width={491} height={161} />
          </div>
          <div className={styles.scoreNPercent}>
            {REVIEW_CHART_DATA.map(({ score, percent }) => (
              <Text key={score} tag="body_medium_18">
                {percent}
              </Text>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewSummary;
