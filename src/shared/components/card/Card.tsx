import * as styles from '@shared/components/card/Card.css';
import Ic_review_black from '@svg/ic_review_black.svg?react';
import Ic_regular_customer from '@svg/ic_regular_customer.svg?react';
import Ic_cart from '@svg/ic_cart_black.svg?react';

interface CardInterface {
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
}: CardInterface) => {
  return (
    <div className={styles.cardWrapper({ size })}>
      <img className={styles.cardImg({ size })} src={imageUrl} alt="card img" />
      <div className={styles.cardDescription({ size })}>
        <h3 className={styles.cardTitle}>{productName}</h3>
        <div className={styles.cardPriceRow}>
          <div className={styles.priceWrapper}>
            <span className={styles.cardDiscount}>{discountRate}%</span>
            <span className={styles.cardPrice}>{discountPrice}원</span>
          </div>
          <button type="button" className={styles.cartButton}>
            <Ic_cart width={'2.4rem'} height={'2.4rem'} />
          </button>
        </div>
        {size === 'xl' && (
          <>
            <div className={styles.cardReviewRow}>
              <Ic_review_black width={'1.6rem'} height={'1.6rem'} />
              <div className={styles.review}>{reviewCount}</div>
            </div>
            {repurchase && (
              <div className={styles.cardRepurchaseRow}>
                <Ic_regular_customer height={'1.6rem'} width={'1.6rem'} />
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
