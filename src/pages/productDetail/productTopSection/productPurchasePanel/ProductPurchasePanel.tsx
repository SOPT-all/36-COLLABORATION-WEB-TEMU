import * as styles from '@pages/productDetail/productTopSection/productPurchasePanel/ProductPurchasePanel.css';
import Text from '@shared/components/text/Text';
import IcShareWhite from '@svg/ic_share_white.svg?react';
import IcArrowRightBlack from '@svg/ic_arrow_right_black.svg?react';
import BestSeller from './bestSeller/BestSeller';
import IcCheckGreen from '@svg/ic_check_green.svg?react';
import Divider from '@shared/components/divider/Divider';
import IcTruckGreen from '@svg/ic_truck_green.svg?react';
import IcReturnGreen from '@svg/ic_return_green.svg?react';
import IcPlantGreen from '@svg/ic_plant_green.svg?react';
import IcShieldGreen from '@svg/ic_shield_green.svg?react';
import IcArrowDownGray from '@svg/ic_arrow_down_gray.svg?react';
import ProductActionButton from '@shared/components/ProductActionButton/ProductActionButton';
interface ProductPurchasePanelProps {
  company: string;
  productName: string;
  discountRate: number;
  originalPrice: number;
  discountPrice: number;
  productColors: string[];
}

const ProductPurchasePanel = ({
  company,
  productName,
  discountRate,
  originalPrice,
  discountPrice,
  productColors,
}: ProductPurchasePanelProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.summarySection}>
        <div className={styles.titleContainer}>
          <Text tag="body_medium_14" color="gray6">
            {company}
          </Text>
          <div className={styles.titleRow}>
            <Text tag="head_sb_24" color="black">
              {productName}
            </Text>
            <button>
              <IcShareWhite width={36} height={36} />
            </button>
          </div>
        </div>

        <div className={styles.category}>
          <BestSeller />
          <div className={styles.smallCategory}>
            <Text tag="body_medium_14" color="black">
              생필품 부문
            </Text>
            <IcArrowRightBlack width={14} height={14} />
          </div>
        </div>

        <div className={styles.discount}>
          <div className={styles.discountNumber}>
            <Text tag="head_bold_28" color="point_orange">
              {discountRate}%
            </Text>
            <Text tag="head_bold_28" color="black">
              {discountPrice.toLocaleString()}
            </Text>
          </div>
          <Text tag="body_medium_16" color="gray4" style={{ textDecoration: 'line-through' }}>
            {originalPrice.toLocaleString()}원
          </Text>
        </div>

        <div className={styles.benefit}>
          <div className={styles.benefitLeft}>
            <IcCheckGreen width={16} height={16} />
            <Text tag="body_medium_14" color="black">
              특별 무료 배송 혜택
            </Text>
          </div>
          <Text tag="body_medium_14" color="black">
            독점 혜택
          </Text>
        </div>
      </div>

      <div className={styles.productActionSection}>
        <Divider direction="horizontal" color="gray1" />
        <div className={styles.productActionSectionUp}>
          <div className={styles.productPost}>
            <div className={styles.productPostUp}>
              <IcTruckGreen width={20} height={20} />
              <Text tag="body_medium_16">해당 상품 무료 배송</Text>
            </div>
            <div className={styles.productPostDown}>
              <Text tag="body_medium_14">배송 예정: 5일이내 가장 빠른 배송</Text>
              <Text tag="body_medium_14">배송지연에 대한 보상으로 5,300원 크레딧을 받으세요</Text>
            </div>
          </div>
          <Divider direction="horizontal" color="gray1" />

          <div className={styles.productFree}>
            <IcReturnGreen width={20} height={20} />
            <Text tag="body_medium_16">무료 반품 / 가격 조정</Text>
          </div>
          <Divider direction="horizontal" color="gray1" />

          <div className={styles.productFree}>
            <IcPlantGreen width={20} height={20} />
            <Text tag="body_medium_16">Temu의 나무 심기 프로그램</Text>
          </div>
          <Divider direction="horizontal" color="gray1" />

          <div className={styles.productShopping}>
            <div className={styles.productShoppingUp}>
              <IcShieldGreen width={20} height={20} />
              <Text tag="body_medium_16">쇼핑 보안</Text>
            </div>
            <div className={styles.productShoppingDown}>
              <div className={styles.productShoppingList}>
                <span className={styles.dot}>·</span>
                <Text tag="body_medium_14">안전한 결제 옵션</Text>
                <span className={styles.dot}>·</span>
                <Text tag="body_medium_14">안전한 물류</Text>
                <span className={styles.dot}>·</span>
                <Text tag="body_medium_14">개인 정보 보호</Text>
                <span className={styles.dot}>·</span>
                <Text tag="body_medium_14">물류 보호</Text>
              </div>
            </div>
          </div>
          <Divider direction="horizontal" color="gray1" />
        </div>

        <div className={styles.productActionSectionDown}>
          <div className={styles.productColor}>
            <Text tag="body_medium_16">색상</Text>
            <div className={styles.wrapper}>
              <select className={styles.select} defaultValue="">
                <option value="" disabled>
                  색상을 선택하세요
                </option>
                {productColors.map(color => (
                  <option key={color} value={color}>
                    {color}
                  </option>
                ))}
              </select>
              <IcArrowDownGray className={styles.icon} width={20} height={20} />
            </div>
          </div>
          <div className={styles.productQuantity}>
            <Text tag="body_medium_16">수량</Text>
            <div className={styles.wrapper}>
              <select className={styles.select} defaultValue="">
                <option value="" disabled>
                  색상을 선택하세요
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
              <IcArrowDownGray className={styles.icon} width={20} height={20} />
            </div>
          </div>
        </div>
        <Divider direction="horizontal" color="gray1" />
      </div>

      <div className={styles.total}>
        <Text tag="body_medium_16" color="gray6">
          총 금액
        </Text>
        <Text tag="head_bold_28">9,900</Text>
      </div>

      <div className={styles.button}>
        <ProductActionButton
          text="장바구니"
          variant="outline"
          size="lg"
          radius="sm"
          fontSize="lg"
        />
        <ProductActionButton text="구매하기" variant="solid" size="lg" radius="sm" fontSize="lg" />
      </div>
    </div>
  );
};

export default ProductPurchasePanel;
