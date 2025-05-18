import ProductReviewSection from '@pages/productDetail/productReviewSection/ProductReviewSection';
import { useGetProductDetail } from '@api/queries';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const productId = Number(id);
  const { data } = useGetProductDetail(productId);

  console.log(data);

  return (
    <>
      <ProductReviewSection />
    </>
  );
};

export default ProductDetail;
