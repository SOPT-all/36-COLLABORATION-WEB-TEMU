import * as styles from '@pages/productDetail/productReviewSection/components/nextPage/NextPage.css';
import Text from '@shared/components/text/Text';

import { IcPageRightGray, IcPageLeftGray } from '@svg/index';

const NextPage = () => {
  return (
    <nav aria-label="페이지 네비게이션" className={styles.pageNavigation}>
      <ul className={styles.pageWrapper}>
        <li>
          <button>
            <IcPageLeftGray width={32} height={32} />
          </button>
        </li>
        <li>
          <button>
            <Text tag="head_sb_20" color="gray8">
              1
            </Text>
          </button>
        </li>
        <li>
          <button>
            <IcPageRightGray width={32} height={32} />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NextPage;
