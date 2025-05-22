import React, { useState } from 'react';
import * as styles from '@pages/productDetail/productTopSection/components/productPurchasePanel/ProductPurchasePanel.css';
import Text from '@shared/components/text/Text';
import {
  IcShareWhite,
  IcArrowRightBlack,
  IcTruckGreen,
  IcReturnGreen,
  IcPlantGreen,
  IcShieldGreen,
  IcArrowDownGray,
  IcCheckGreen,
} from '@svg/index';
import {
  PURCHASE_PANEL_BENEFIT,
  PURCHASE_PANEL,
  PURCHASE_TOTAL_PRISE,
  PURCHASE_QUANTITIES,
} from '@pages/productDetail/productTopSection/constants/PURCHASE_PANEL';
import BestSeller from '@pages/productDetail/productTopSection/components/bestSeller/BestSeller';
import Divider from '@shared/components/divider/Divider';
import ProductActionButton from '@shared/components/ProductActionButton/ProductActionButton';
import Head from '@shared/components/head/Head';

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
  const [quantity, setQuantity] = useState<number>(1);
  const [selectColor, setSelectColor] = useState<string>('');
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const totalPrice = discountPrice * quantity;

  const handleChangeQuantity = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuantity(Number(e.target.value));
  };

  const handleChangeColor = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectColor(e.target.value);
    setIsSelected(true);
  };

  const handleButtonClick = () => (isSelected ? undefined : alert('색상을 선택해주세요.'));

  return (
    <section className={styles.container}>
      <div className={styles.summarySection}>
        <div className={styles.titleContainer}>
          <Text tag="body_medium_14" color="gray6">
            {company}
          </Text>
          <div className={styles.titleRow}>
            <Head level="h2" tag="head_sb_24" color="black">
              {productName}
            </Head>
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
            <Head level="h2" tag="head_bold_28" color="point_orange">
              {discountRate}%
            </Head>
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
              {PURCHASE_PANEL_BENEFIT.title}
            </Text>
          </div>
          <Text tag="body_medium_14" color="black">
            {PURCHASE_PANEL_BENEFIT.content}
          </Text>
        </div>
      </div>

      <div className={styles.productActionSection}>
        <Divider direction="horizontal" color="gray1" />
        <div className={styles.productActionSectionUp}>
          <div className={styles.productPost}>
            <div className={styles.productPostUp}>
              <IcTruckGreen width={20} height={20} />
              <Text tag="body_medium_16">{PURCHASE_PANEL.delivery.title}</Text>
            </div>
            <div className={styles.productPostDown}>
              {PURCHASE_PANEL.delivery.content.map((content, idx) => (
                <Text key={idx} tag="body_medium_14">
                  {content}
                </Text>
              ))}
            </div>
          </div>
          <Divider direction="horizontal" color="gray1" />

          <div className={styles.productFree}>
            <IcReturnGreen width={20} height={20} />
            <Text tag="body_medium_16">{PURCHASE_PANEL.returnAndPrice.title}</Text>
          </div>
          <Divider direction="horizontal" color="gray1" />

          <div className={styles.productFree}>
            <IcPlantGreen width={20} height={20} />
            <Text tag="body_medium_16">{PURCHASE_PANEL.treePlanting.title}</Text>
          </div>
          <Divider direction="horizontal" color="gray1" />

          <div className={styles.productShopping}>
            <div className={styles.productShoppingUp}>
              <IcShieldGreen width={20} height={20} />
              <Text tag="body_medium_16">{PURCHASE_PANEL.paymentSecurity.title}</Text>
            </div>
            <div>
              <div className={styles.productShoppingList}>
                {PURCHASE_PANEL.paymentSecurity.content.map((content, idx) => (
                  <>
                    <span className={styles.dot}>·</span>
                    <Text key={idx} tag="body_medium_14">
                      {content}
                    </Text>
                  </>
                ))}
              </div>
            </div>
          </div>
          <Divider direction="horizontal" color="gray1" />
        </div>
      </div>
      <div className={styles.productActionSectionDown}>
        <div className={styles.productColor}>
          <Text className={styles.productStyle} tag="body_medium_16">
            색상
          </Text>
          <div className={styles.wrapper}>
            <select className={styles.select} value={selectColor} onChange={handleChangeColor}>
              <option value="" disabled>
                색상을 선택하세요.
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
          <Text className={styles.productStyle} tag="body_medium_16">
            수량
          </Text>
          <div className={styles.wrapper}>
            <select className={styles.select} value={quantity} onChange={handleChangeQuantity}>
              {PURCHASE_QUANTITIES.map(num => (
                <option key={num} value={num}>
                  {num}개
                </option>
              ))}
            </select>
            <IcArrowDownGray className={styles.icon} width={20} height={20} />
          </div>
        </div>
      </div>
      <Divider direction="horizontal" color="gray1" />

      <div className={styles.total}>
        <Text tag="body_medium_16" color="gray6">
          {PURCHASE_TOTAL_PRISE.text}
        </Text>
        <Head level="h2" tag="head_bold_28">
          {totalPrice.toLocaleString()}원
        </Head>
      </div>

      <div className={styles.button}>
        <ProductActionButton
          text="장바구니"
          variant="outline"
          size="lg"
          radius="sm"
          fontSize="lg"
        />
        <ProductActionButton
          text="구매하기"
          variant="solid"
          size="lg"
          radius="sm"
          fontSize="lg"
          onClick={handleButtonClick}
        />
      </div>
    </section>
  );
};

export default ProductPurchasePanel;
