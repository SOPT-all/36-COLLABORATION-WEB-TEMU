import * as styles from './Card.css';

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
    <div className={styles.cardImg({ size })} style={skeletonStyle} />
    <div className={styles.cardDescription({ size })}>
      <div
        className={styles.cardTitle}
        style={{ ...skeletonStyle, height: 24, width: '70%', marginBottom: 8 }}
      />
      <div className={styles.cardPriceRow}>
        <div
          className={styles.priceWrapper}
          style={{ ...skeletonStyle, height: 20, width: '50%' }}
        />
        <div
          className={styles.cartButton}
          style={{ ...skeletonStyle, height: 24, width: 24, border: 'none' }}
        />
      </div>
      {size === 'xl' && (
        <>
          <div
            className={styles.cardReviewRow}
            style={{ ...skeletonStyle, height: 18, width: '40%', margin: '8px 0' }}
          />
          <div
            className={styles.cardProductTageRow}
            style={{ ...skeletonStyle, height: 18, width: '60%' }}
          />
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
