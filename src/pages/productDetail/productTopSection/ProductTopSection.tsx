import * as styles from '@pages/productDetail/productTopSection/ProductTopSection.css';
import ProductImageGallery from '@pages/productDetail/productTopSection/components/productImageGallery/ProductImageGallery';
import ProductPurchasePanel from '@pages/productDetail/productTopSection/components/productPurchasePanel/ProductPurchasePanel';
import type { Product } from '@shared/types/productDetailResponseTypes';
import RecommendProducts from '@pages/productDetail/productTopSection/components/recommendedProducts/RecommendProducts';
import Divider from '@shared/components/divider/Divider';

interface ProductTopSectionProps {
  restData: Product;
}

const ProductTopSection = ({ restData }: ProductTopSectionProps) => {
  const {
    company,
    productName,
    discountRate,
    originalPrice,
    discountPrice,
    productImages,
    productColors,
  } = restData;
  return (
    <>
      <section className={styles.productTopSection}>
        <div className={styles.productTopContainer}>
          <ProductImageGallery productImages={productImages} />
          <ProductPurchasePanel
            company={company}
            productName={productName}
            discountRate={discountRate}
            originalPrice={originalPrice}
            discountPrice={discountPrice}
            productColors={productColors}
          />
        </div>
        <Divider direction="horizontal" />
      </section>
      <RecommendProducts />
    </>
  );
};

export default ProductTopSection;
