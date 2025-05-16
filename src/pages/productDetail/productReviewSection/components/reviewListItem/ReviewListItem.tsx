import Text from '@shared/components/text/Text';
import * as styles from '@pages/productDetail/productReviewSection/components/reviewListItem/ReviewListItem.css';
import { StarRating } from '@shared/components/star/StarRating';
import type { ReviewScoreDistributionResponseTypes } from '@pages/productDetail/productReviewSection/types/reviews';
import Divider from '@shared/components/divider/Divider';
import { Fragment } from 'react/jsx-runtime';

interface ReviewListItemProps {
  nickname: string;
  score: number;
  imageUrl: string;
  content: string;
  productOption: string;
  createdAt: string;
  reviewScoreDistributions: ReviewScoreDistributionResponseTypes[];
}

const ReviewListItem = ({
  nickname,
  score,
  imageUrl,
  content,
  productOption,
  createdAt,
}: ReviewListItemProps) => {
  return (
    <Fragment>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <section className={styles.leftWrapper}>
            <div className={styles.leftItem}>
              <Text tag="body_bold_16">{nickname}</Text>
              <StarRating score={score} width={105} height={19.4} />
            </div>
            <div className={styles.rightItem}>
              <div className={styles.textSection}>
                <Text tag="body_medium_14" color="gray6">{`옵션: ${productOption}`}</Text>
                <Text tag="body_regular_18" color="gray8">
                  {content}
                </Text>
              </div>
              {imageUrl ? (
                <img
                  src={imageUrl}
                  width={172}
                  height={172}
                  alt="${productReviewDetails.imageUrl}"
                />
              ) : (
                ''
              )}
            </div>
          </section>

          <Text tag="caption_regular_13" color="gray6">
            {createdAt}
          </Text>
        </div>
      </div>
      <Divider color="gray1" direction="horizontal" />
    </Fragment>
  );
};

export default ReviewListItem;
