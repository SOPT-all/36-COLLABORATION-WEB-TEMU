import * as styles from '@pages/productDetail/productTopSection/ProductTopSection.css';
import ProductImageGallery from './productImageGallery/ProductImageGallery';
import ProductPurchasePanel from './productPurchasePanel/ProductPurchasePanel';
import type { Product } from '../../../shared/types/product';

type ProductTopSectionProps = {
  restData: Product;
};

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
  );
};

export default ProductTopSection;
