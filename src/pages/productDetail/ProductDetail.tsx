import ProductTopSection from '@pages/productDetail/productTopSection/ProductTopSection';
import { mockDetailData } from '@pages/productDetail/productTopSection/constants/mockDetailData';

const ProductDetail = () => {
  const {
    // productDetails: productDetails,
    // reviewCount: reviewCount,
    // productId: productId,
    ...restData
  } = mockDetailData;

  return (
    <div>
      <ProductTopSection restData={restData} />
    </div>
  );
};

export default ProductDetail;
