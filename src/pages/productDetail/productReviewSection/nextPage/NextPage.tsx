import * as styles from '@pages/productDetail/productReviewSection/nextPage/NextPage.css';
import Text from '@shared/components/text/Text';
import IcPageLeftGray from '@svg/ic_page_left_gray.svg?react';
import IcPageRightGray from '@svg/ic_page_right_gray.svg?react';

const NextPage = () => {
  return (
    <div className={styles.container}>
      <IcPageLeftGray width={32} height={32} />
      <Text tag="head_sb_20">1</Text>
      <IcPageRightGray width={32} height={32} />
    </div>
  );
};

export default NextPage;
