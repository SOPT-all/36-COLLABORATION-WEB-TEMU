import * as styles from '@shared/components/card/Card.css';

import { IcCartBlack, IcReviewBlack, IcRegularCustomer } from '@svg/index';

interface CardProps {
  size?: 'l' | 'xl';
  repurchase?: boolean;
  imageUrl: string;
  productName: string;
  discountRate: number;
  discountPrice: number;
  reviewCount?: number;
}

const Card = ({
  size = 'l',
  repurchase = false,
  imageUrl,
  productName,
  discountRate,
  discountPrice,
  reviewCount,
}: CardProps) => {
  return (
    <div className={styles.cardWrapper({ size })}>
      <img className={styles.cardImg({ size })} src={imageUrl} alt={`${productName} img`} />
      <div className={styles.cardDescription({ size })}>
        <h3 className={styles.cardTitle}>{productName}</h3>
        <div className={styles.cardPriceRow}>
          <div className={styles.priceWrapper}>
            <span className={styles.cardDiscount}>{discountRate}%</span>
            <span className={styles.cardPrice}>{discountPrice}원</span>
          </div>
          <button type="button" className={styles.cartButton}>
            <IcCartBlack width={'2.4rem'} height={'2.4rem'} />
          </button>
        </div>
        {size === 'xl' && (
          <>
            <div className={styles.cardReviewRow}>
              <IcReviewBlack width={'1.6rem'} height={'1.6rem'} />
              <div className={styles.review}>{reviewCount}</div>
            </div>
            {repurchase && (
              <div className={styles.cardRepurchaseRow}>
                <IcRegularCustomer height={'1.6rem'} width={'1.6rem'} />
                <span>재구매 고객이 많은 스토어</span>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
