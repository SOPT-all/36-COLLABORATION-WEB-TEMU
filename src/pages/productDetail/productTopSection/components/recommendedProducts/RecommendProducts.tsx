import * as styles from '@pages/productDetail/productTopSection/components/recommendedProducts/RecommendProducts.css';
import Head from '@shared/components/head/Head';
import Card from '@shared/components/card/Card';
import { mockRecommendData } from '@pages/productDetail/productTopSection/constants/mockRecommendData';

const RecommendedProducts = () => {
  return (
    <div className={styles.container}>
      <Head level="h2" tag="head_bold_24" color="black">
        함께 구매하면 좋은 상품
      </Head>
      <div className={styles.productListContainer}>
        {mockRecommendData.map(({ productName, discountPrice, imageUrl, discountRate }) => (
          <Card
            key={productName}
            size="l"
            productName={productName}
            discountPrice={discountPrice}
            imageUrl={imageUrl}
            discountRate={discountRate}
          />
        ))}
      </div>
    </div>
  );
};

export default RecommendedProducts;
