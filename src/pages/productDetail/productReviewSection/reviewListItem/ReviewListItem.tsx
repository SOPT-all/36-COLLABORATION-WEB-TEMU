import Text from '@shared/components/text/Text';
import * as styles from './ReviewListItem.css';
import { StarRating } from '@shared/components/star/StarRating';
import type { ReviewScoreDistribution } from '@shared/types/reviews';

type ReviewListItemProps = {
  nickname: string;
  score: number;
  imageUrl: string;
  content: string;
  productOption: string;
  createdAt: string;
  reviewScoreDistributions: ReviewScoreDistribution[];
};

const ReviewListItem = ({
  nickname,
  score,
  imageUrl,
  content,
  productOption,
  createdAt,
}: ReviewListItemProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.leftWrapper}>
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
          {imageUrl ? <img src={imageUrl} width={172} height={172} alt="리뷰 이미지" /> : ''}
        </div>
      </div>
      <div>
        <Text tag="caption_regular_13" color="gray6">
          {createdAt}
        </Text>
      </div>
    </div>
  );
};

export default ReviewListItem;
