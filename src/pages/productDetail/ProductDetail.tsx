import ProductTopSection from './productTopSection/ProductTopSection';
import { data } from '@pages/productDetail/mockData';

const ProductDetail = () => {
  const { productDetails, reviewCount, productId, ...restData } = data;

  return (
    <div>
      {/* 아직 값을 다 쓰지 않아 에러가 발생하여 잠시 any타입으로 지정하였습니다. 추후 삭제예정 */}
      <ProductTopSection restData={restData as any} />
    </div>
  );
};

export default ProductDetail;
