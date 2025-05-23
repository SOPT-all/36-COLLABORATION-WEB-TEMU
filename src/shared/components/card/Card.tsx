import * as styles from '@shared/components/card/Card.css';
import { IcCartBlack, IcReviewBlack } from '@svg/index';
import { PRODUCT_TAGS } from '@shared/components/card/constant/productTag';
import { useNavigate } from 'react-router-dom';

interface CardProps {
  productId?: number;
  size?: 'l' | 'xl';
  imageUrl: string;
  productName: string;
  discountRate: number;
  discountPrice: number;
  reviewCount?: number;
  productTag?: string;
}

const Card = ({
  productId,
  size = 'l',
  imageUrl,
  productName,
  discountRate,
  discountPrice,
  reviewCount,
  productTag,
}: CardProps) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (productId) {
      window.scrollTo(0, 0);
      navigate(`/products/${productId}`);
    }
  };

  return (
    <div className={styles.cardWrapper({ size })} onClick={handleCardClick}>
      <img className={styles.cardImg({ size })} src={imageUrl} alt={`${productName} img`} />
      <div className={styles.cardDescription({ size })}>
        <h3 className={styles.cardTitle}>{productName}</h3>
        <div className={styles.cardPriceRow}>
          <div className={styles.priceWrapper}>
            <span className={styles.cardDiscount}>{discountRate}%</span>
            <span className={styles.cardPrice}>{discountPrice.toLocaleString()}원</span>
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
            {productTag && productTag !== 'NONE' && (
              <div className={styles.cardProductTageRow}>
                {PRODUCT_TAGS[productTag]?.icon}
                <span>{PRODUCT_TAGS[productTag]?.text}</span>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
