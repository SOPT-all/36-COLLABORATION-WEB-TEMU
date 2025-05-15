import Text from '@shared/components/text/Text';
import * as styles from './ReviewPhoto.css';

type ReviewPhotoProps = {
  reviewImages: string[];
};

const ReviewPhoto = ({ reviewImages }: ReviewPhotoProps) => {
  return (
    <div className={styles.container}>
      <Text tag="head_sb_24">포토&동영상 (2)</Text>
      <div className={styles.mediaWrapper}>
        {reviewImages.map((url, idx) => (
          <img key={idx} src={url} width={172} height={168} alt="리뷰 이미지" />
        ))}
      </div>
    </div>
  );
};

export default ReviewPhoto;
