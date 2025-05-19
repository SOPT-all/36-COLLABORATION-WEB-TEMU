import * as styles from '@shared/components/card/Card.css';
import { IcCartBlack, IcReviewBlack } from '@svg/index';
import { PRODUCT_TAGS } from './constant/productTag';

interface CardProps {
  size?: 'l' | 'xl';
  productId: number;
  imageUrl: string;
  productName: string;
  discountRate: number;
  discountPrice: number;
  reviewCount?: number;
  productTag?: string;
  categoryList: string[];
}

const Card = ({
  size = 'l',
  productId,
  imageUrl,
  productName,
  discountRate,
  discountPrice,
  reviewCount,
  productTag,
  categoryList,
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
            <div className={styles.cardProductTageRow}>
              {PRODUCT_TAGS.find(tag => tag.text === productTag)?.icon}
              <span>{productTag}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
