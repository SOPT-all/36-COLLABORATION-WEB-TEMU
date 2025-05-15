import ProductTopSection from './productTopSection/ProductTopSection';
import { data } from '@pages/productDetail/mockData';

const ProductDetail = () => {
  const { productDetails, reviewCount, productId, ...restData } = data;

  return (
    <div>
      <ProductTopSection restData={restData} />
    </div>
  );
};

export default ProductDetail;
