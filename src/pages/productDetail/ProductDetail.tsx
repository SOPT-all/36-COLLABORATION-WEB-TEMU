import ProductTopSection from '@pages/productDetail/productTopSection/ProductTopSection';
import ProductReviewSection from '@pages/productDetail/productReviewSection/ProductReviewSection';

import { useParams } from 'react-router-dom';
import { useGetProductDetail } from '@api/queries';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const productId = Number(id);

  const { data, isLoading, isError } = useGetProductDetail(productId);

  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>상품 정보를 불러오는 중 에러가 발생했습니다.</div>;

  const {
    // productDetails: productDetails,
    // reviewCount: reviewCount,
    // productId: productId,
    ...restData
  } = data!; //필요한 필드만 빼고 전달 (희선님 코드 merge되면 수정)

  return (
    <>
      <ProductTopSection restData={restData} />
      <ProductReviewSection />
    </>
  );
};

export default ProductDetail;
