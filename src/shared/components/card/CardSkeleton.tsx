import * as styles from './CardSkeleton.css';
import clsx from 'clsx';

interface CardSkeletonProps {
  size?: 'l' | 'xl';
}

const CardSkeleton = ({ size = 'l' }: CardSkeletonProps) => (
  <div className={styles.cardWrapper({ size })}>
    <div className={clsx(styles.cardImg({ size }), styles.shimmerImgEffect)} />
    <div className={styles.cardDescription({ size })}>
      <div className={clsx(styles.cardTitle, styles.shimmerEffect)} />
      <div className={styles.cardPriceRow}>
        <div className={clsx(styles.priceWrapper, styles.shimmerEffect)} />
        <div className={clsx(styles.cartButton, styles.shimmerEffect)} />
      </div>
      {size === 'xl' && (
        <>
          <div className={clsx(styles.cardReviewRow, styles.shimmerEffect)} />
          <div className={clsx(styles.cardProductTageRow, styles.shimmerEffect)} />
        </>
      )}
    </div>
  </div>
);

export default CardSkeleton;
