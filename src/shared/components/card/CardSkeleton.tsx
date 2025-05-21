import * as styles from './CardSkeleton.css';

interface CardSkeletonProps {
  size?: 'l' | 'xl';
}

const skeletonStyle = {
  background: 'linear-gradient(90deg, #eee 25%, #ddd 50%, #eee 75%)',
  backgroundSize: '200% 100%',
  animation: 'skeleton 2.8s infinite ease-in-out',
};

const CardSkeleton = ({ size = 'l' }: CardSkeletonProps) => (
  <div className={styles.cardWrapper({ size })}>
    <div className={styles.cardImg({ size })} />
    <div className={styles.cardDescription({ size })}>
      <div className={styles.cardTitle} />
      <div className={styles.cardPriceRow}>
        <div className={styles.priceWrapper} />
        <div className={styles.cartButton} />
      </div>
      {size === 'xl' && (
        <>
          <div className={styles.cardReviewRow} />
          <div className={styles.cardProductTageRow} />
        </>
      )}
    </div>
    <style>
      {`
        @keyframes skeleton {
          0% { background-position: -200px 0; }
          100% { background-position: calc(200px + 100%) 0; }
        }
      `}
    </style>
  </div>
);

export default CardSkeleton;
