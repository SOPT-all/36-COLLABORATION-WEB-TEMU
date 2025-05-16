import Divider from '@shared/components/divider/Divider';
import * as styles from '@pages/productDetail/productReviewSection/components/reviewFilterBar/ReviewFilterBar.css';
import IcArrowDownGray from '@svg/ic_arrow_down_gray.svg?react';
import type { ReviewFilterBarProps } from '@/pages/productDetail/productReviewSection/types/index';

const ReviewFilterBar = ({ sortType, onChangeSortType }: ReviewFilterBarProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <button
          type="button"
          className={styles.filterButton({ selected: sortType === 'recent' })}
          onClick={() => onChangeSortType('recent')}
        >
          최신순
        </button>
        <Divider direction="vertical" />
        <button
          type="button"
          className={styles.filterButton({ selected: sortType === 'popularity' })}
          onClick={() => onChangeSortType('popularity')}
        >
          별점순
        </button>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.selectWrapper}>
          <select>
            <option value="전체">전체</option>
          </select>
          <IcArrowDownGray width={16} height={16} />
        </div>
        <div className={styles.selectWrapper}>
          <select>
            <option value="">별점</option>
          </select>
          <IcArrowDownGray width={16} height={16} />
        </div>
      </div>
    </div>
  );
};

export default ReviewFilterBar;
