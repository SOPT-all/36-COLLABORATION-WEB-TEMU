import * as styles from '@pages/productDetail/productReviewSection/components/reviewPhoto/ReviewPhoto.css';
import Head from '@shared/components/head/Head';

interface ReviewPhotoProps {
  reviewImages: string[];
}

const ReviewPhoto = ({ reviewImages }: ReviewPhotoProps) => {
  return (
    <div className={styles.container}>
      <Head level="h1" tag="head_sb_24" color="black">
        포토&동영상 ({reviewImages.length})
      </Head>
      <div className={styles.mediaWrapper}>
        {reviewImages.map((url, idx) => (
          <img key={idx} src={url} width={172} height={168} alt="리뷰 이미지" />
        ))}
      </div>
    </div>
  );
};

export default ReviewPhoto;
