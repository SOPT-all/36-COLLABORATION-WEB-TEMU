import Text from '@shared/components/text/Text';
import * as styles from './ReviewSummary.css';
import Divider from '@shared/components/divider/Divider';
import IcStar45 from '@svg/ic_star_4_5_sm.svg?react';

type ReviewSummaryProps = {
  avgScore: number;
};

const ReviewSummary = ({ avgScore }: ReviewSummaryProps) => {
  return (
    <div>
      <div className={styles.reviewTitle}>
        <Text tag="head_sb_24">후기 (24)</Text>
        <Divider direction="horizontal" />
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
            <Text tag="body_medium_18">5점</Text>
            <Text tag="body_medium_18">4점</Text>
            <Text tag="body_medium_18">3점</Text>
            <Text tag="body_medium_18">2점</Text>
            <Text tag="body_medium_18">1점</Text>
          </div>
          <div className={styles.graph}>
            <svg
              width="491"
              height="161"
              viewBox="0 0 491 161"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="491" height="13" rx="6.5" fill="#EAEAEA" />
              <rect width="360" height="13" rx="6.5" fill="#434343" />
              <rect y="37" width="491" height="13" rx="6.5" fill="#EAEAEA" />
              <rect y="37" width="154" height="13" rx="6.5" fill="#434343" />
              <rect y="74" width="491" height="13" rx="6.5" fill="#EAEAEA" />
              <rect y="74" width="14" height="13" rx="6.5" fill="#434343" />
              <rect y="111" width="491" height="13" rx="6.5" fill="#EAEAEA" />
              <rect y="111" width="14" height="13" rx="6.5" fill="#434343" />
              <rect y="148" width="491" height="13" rx="6.5" fill="#EAEAEA" />
            </svg>
          </div>
          <div className={styles.scoreNPercent}>
            <Text tag="body_medium_18">67%</Text>
            <Text tag="body_medium_18">23%</Text>
            <Text tag="body_medium_18">2%</Text>
            <Text tag="body_medium_18">2%</Text>
            <Text tag="body_medium_18">0%</Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSummary;
