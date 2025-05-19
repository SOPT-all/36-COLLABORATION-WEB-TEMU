import ProductTopSection from '@pages/productDetail/productTopSection/ProductTopSection';
import ProductReviewSection from '@pages/productDetail/productReviewSection/ProductReviewSection';
import { mockDetailData } from '@pages/productDetail/productTopSection/constants/mockDetailData';

const ProductDetail = () => {
  const {
    // productDetails: productDetails,
    // reviewCount: reviewCount,
    // productId: productId,
    ...restData
  } = mockDetailData;

  return (
    <>
      <ProductTopSection restData={restData} />
      <ProductReviewSection />
    </>