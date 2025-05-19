import * as styles from '@pages/productDetail/productTopSection/ProductTopSection.css';
import ProductImageGallery from '@pages/productDetail/productTopSection/components/productImageGallery/ProductImageGallery';
import ProductPurchasePanel from '@pages/productDetail/productTopSection/components/productPurchasePanel/ProductPurchasePanel';
import type { Product } from '@shared/types/productDetailResponseTypes';

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
    <section className={styles.productTopContainer}>
      <ProductImageGallery productImages={productImages} />
      <ProductPurchasePanel
        company={company}
        productName={productName}
        discountRate={discountRate}
        originalPrice={originalPrice}
        discountPrice={discountPrice}
        productColors={productColors}
      />
    </section>
  );
};

export default ProductTopSection;
