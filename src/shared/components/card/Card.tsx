import * as styles from './Card.css';
import Ic_review_black from '@svg/ic_review_black.svg?react';
import Ic_regular_customer from '@svg/ic_regular_customer.svg?react';
import Ic_cart from '@svg/ic_cart_black.svg?react';

interface CardInterface {
  size?: 'l' | 'xl';
  repurchase?: boolean;
  img: string;
  title: string;
  discount: number;
  price: number;
  reviewCount?: number;
}

const Card = ({
  size = 'l',
  repurchase = false,
  img,
  title,
  discount,
  price,
  reviewCount,
}: CardInterface) => {
  return (
    <div className={styles.cardWrapper({ size })}>
      <img className={styles.cardImg({ size })} src={img} alt="card img" />
      <div className={styles.cardDesc({ size })}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <div className={styles.priceRow}>
          <div className={styles.priceWrapper}>
            <span className={styles.cardDiscount}>{discount}%</span>
            <span className={styles.cardPrice}>{price}원</span>
          </div>
          <button type="button" className={styles.cartButton}>
            <Ic_cart width={'2.4rem'} height={'2.4rem'} />
          </button>
        </div>
        {size === 'xl' && (
          <>
            <div className={styles.reviewRow}>
              <Ic_review_black width={'1.6rem'} height={'1.6rem'} />
              <div className={styles.review}>{reviewCount}</div>
            </div>
            {repurchase && (
              <div className={styles.repurchaseRow}>
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
