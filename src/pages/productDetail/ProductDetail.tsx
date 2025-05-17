import ProductTopSection from '@pages/productDetail/productTopSection/ProductTopSection';
import { mockDetailData } from '@pages/productDetail/productTopSection/constants/mockDetailData';

const ProductDetail = () => {
  // build 에러 때문에 임시로 처리했습니다. 나중에 꼭 없앨게요
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    productDetails: _productDetails,
    reviewCount: _reviewCount,
    productId: _productId,
    ...restData
  } = mockDetailData;

  return (
    <div>
      {/* 아직 값을 다 쓰지 않아 에러가 발생하여 잠시 any타입으로 지정하였습니다. 추후 삭제예정 */}
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <ProductTopSection restData={restData as any} />
    </div>
  );
};

export default ProductDetail;
