import * as styles from '@pages/productDetail/productReviewSection/components/nextPage/NextPage.css';
import Text from '@shared/components/text/Text';
import { IcPageRightGray, IcPageLeftGray } from '@svg/index';
import type { SortType } from '../../types';

export interface ReviewFilterBarProps {
  sortType: SortType;
  // eslint-disable-next-line no-unused-vars
  onChangeSortType: (type: SortType) => void;
}

const NextPage = () => {
  return (
    <nav aria-label="페이지 네비게이션" className={styles.pageNavigation}>
      <ul className={styles.pageWrapper}>
        <li>
          <button type="button">
            <IcPageLeftGray width={32} height={32} />
          </button>
        </li>
        <li>
          <button type="button">
            <Text tag="head_sb_20" color="gray8">
              1
            </Text>
          </button>
        </li>
        <li>
          <button type="button">
            <IcPageRightGray width={32} height={32} />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NextPage;
