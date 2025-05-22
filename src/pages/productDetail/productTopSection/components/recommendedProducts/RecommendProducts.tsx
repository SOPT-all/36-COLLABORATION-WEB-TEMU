import * as styles from '@pages/productDetail/productTopSection/components/recommendedProducts/RecommendProducts.css';
import Head from '@shared/components/head/Head';
import Card from '@shared/components/card/Card';
import { useGetPromotionProductList } from '@api/queries';
import type { GetPromotionResponseTypes } from '@pages/home/types/response';

const RecommendedProducts = () => {
  const { data } = useGetPromotionProductList();
  const promotionData = data?.promotionProductInfos.slice(0, 5) ?? [];

  return (
    <div className={styles.container}>
      <Head level="h2" tag="head_bold_24" color="black">
        함께 구매하면 좋은 상품
      </Head>
      <div className={styles.productListContainer}>
        {promotionData.map((cardData: GetPromotionResponseTypes) => (
          <Card
            key={cardData.productId}
            size="l"
            productId={cardData.productId}
            imageUrl={cardData.productImage}
            productName={cardData.productName}
            discountRate={cardData.discountRate}
            discountPrice={cardData.discountPrice}
          />
        ))}
      </div>
    </div>
  );
};

export default RecommendedProducts;
