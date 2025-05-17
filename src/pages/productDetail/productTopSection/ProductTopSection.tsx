import * as styles from '@pages/productDetail/productTopSection/ProductTopSection.css';
import ProductImageGallery from './components/productImageGallery/ProductImageGallery';
import ProductPurchasePanel from './components/productPurchasePanel/ProductPurchasePanel';
import type { Product } from '../../../shared/types/product';

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
    // productImages,
    productColors,
  } = restData;
  return (
    <div className={styles.productTopContainer}>
      <ProductImageGallery />
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
