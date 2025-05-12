import CartButton from '../cartButton/CartButton';
import {
  cardWrapper,
  cardDesc,
  cardDiscount,
  cardImg,
  cardPrice,
  cardTitle,
  cardRow,
  priceWrapper,
} from './Card.css';
import ic_review_black from '@svg/ic_review_black.svg';
import ic_regular_customer from '@svg/ic_regular_customer.svg';
import { useState } from 'react';
type CardSize = 'l' | 'xl';
interface CardInterface {
  size?: CardSize;
  repurchase?: boolean;
  img: string;
  title: string;
  discount: number;
  price: number;
}
const Card = ({ size = 'l', repurchase = false, img, title, discount, price }: CardInterface) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className={cardWrapper({ size })}>
      <img className={cardImg({ size })} src={img} alt="card" />
      <div className={cardDesc({ size })}>
        <div className={cardTitle()}>{title}</div>
        <div className={cardRow()}>
          <div className={priceWrapper()}>
            <div className={cardDiscount()}>{discount}%</div>
            <div className={cardPrice()}>{price}원</div>
          </div>
          <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <CartButton hover={isHovered} width="2.25rem" height="1.5rem" />
          </div>
        </div>
        {size === 'xl' && (
          <div className={cardRow()}>
            <img src={ic_review_black} alt="리뷰" />
          </div>
        )}
        {size === 'xl' && repurchase && (
          <div className={cardRow()}>
            <img src={ic_regular_customer} alt="review icon" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
