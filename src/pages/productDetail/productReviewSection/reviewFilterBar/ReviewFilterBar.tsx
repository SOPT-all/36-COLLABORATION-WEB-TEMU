import Divider from '@shared/components/divider/Divider';
import * as styles from './ReviewFilterBar.css';
import IcArrowDownGray from '@svg/ic_arrow_down_gray.svg?react';

type ReviewFilterBarProps = {
  sortType: 'latest' | 'score';
  setSortType: (type: 'latest' | 'score') => void;
};

const ReviewFilterBar = ({ sortType, setSortType }: ReviewFilterBarProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <button
          type="button"
          className={sortType === 'latest' ? styles.active : styles.inactive}
          onClick={() => setSortType('latest')}
        >
          최신순
        </button>
        <Divider direction="vertical" />
        <button
          type="button"
          className={sortType === 'score' ? styles.active : styles.inactive}
          onClick={() => setSortType('score')}
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
