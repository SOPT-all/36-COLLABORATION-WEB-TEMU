import Divider from '@shared/components/divider/Divider';
import * as styles from '@pages/productDetail/productReviewSection/components/reviewFilterBar/ReviewFilterBar.css';
import IcArrowDownGray from '@svg/ic_arrow_down_gray.svg?react';
import type { SortType } from '@/pages/productDetail/productReviewSection/types/index';
import { REVIEW_FILTER } from '@pages/productDetail/productTopSection/constants/REVIEW_FILTER';

interface ReviewFilterBarProps {
  sortType: SortType;
  onChangeSortType: (_type: SortType) => void;
  filterScore: number | null;
  onChangeFilterScore: (_score: number | null) => void;
}

const ReviewFilterBar = ({
  sortType,
  onChangeSortType,
  filterScore,
  onChangeFilterScore,
}: ReviewFilterBarProps) => {
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
        <div className={styles.dropdownWrapper}>
          <select className={styles.dropdownSelect}>
            <option value="전체">전체</option>
          </select>
          <IcArrowDownGray width={16} height={16} className={styles.dropdownIcon} />
        </div>
        <div className={styles.dropdownWrapper}>
          <select
            value={filterScore ?? ''}
            onChange={e => {
              const value = e.target.value;
              onChangeFilterScore(value === '' ? null : Number(value));
            }}
            className={styles.dropdownSelect}
          >
            <option value="">별점</option>
            {REVIEW_FILTER.map(num => (
              <option key={num} value={num}>
                {num}점
              </option>
            ))}
          </select>
          <IcArrowDownGray width={16} height={16} className={styles.dropdownIcon} />
        </div>
      </div>
    </div>
  );
};

export default ReviewFilterBar;
