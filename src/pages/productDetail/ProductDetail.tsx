import { useState } from 'react';
import ProductReviewSection from '@pages/productDetail/productReviewSection/ProductReviewSection';
import * as styles from '@pages/productDetail/ProductDetail.css';
import DetailTable from '@pages/productDetail/components/detailTable/DetailTable';
import DetailTabs from '@pages/productDetail/components/detailTabs/DetailTabs';
import ProductActionButton from '@shared/components/ProductActionButton/ProductActionButton';
import Head from '@shared/components/head/Head';
import { IcArrowDownOrange } from '@svg/index';
import ProductTopSection from '@pages/productDetail/productTopSection/ProductTopSection';
import { useParams } from 'react-router-dom';
import { useGetProductDetail } from '@api/queries';
import Loading from '@shared/components/Loading/Loading';
import ErrorSearch from '@shared/components/Error/ErrorSearch';

const ProductDetail = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const { id } = useParams<{ id: string }>();
  const productId = Number(id);
  const { data, isLoading, isError } = useGetProductDetail(productId);

  if (isLoading) return <Loading />;
  if (isError) return <ErrorSearch text="에러가 발생했습니다" />;

  const { productDetails: productDetails, ...restData } = data!;

  const handleTabClick = (key: string) => {
    const element = document.getElementById(key);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExpandClick = () => setIsExpanded(prev => !prev);

  return (
    <div className={styles.container}>
      <ProductTopSection restData={restData} />

      <section className={styles.detailWrapper()}>
        <div className={styles.detailWrapper({ gap: 'm' })}>
          <DetailTabs onTabClick={handleTabClick} />
          <div className={styles.contentContainer({ expanded: isExpanded })}>
            <div className={styles.detailWrapper({ gap: 'xl' })}>
              <div id="info" className={styles.detailWrapper({ gap: 's' })}>
                <Head level="h3" tag="head_sb_24">
                  제품 세부 정보
                </Head>
                <DetailTable />
              </div>
              <div id="detail" className={styles.detailWrapper()}>
                {productDetails.length === 0 ? (
                  <ErrorSearch text="상세 이미지가 없어요" />
                ) : (
                  productDetails.map((img, index) => (
                    <img key={index} src={img} alt={`제품 상세 이미지 ${index + 1}`} width={800} />
                  ))
                )}
              </div>
            </div>
          </div>
          <div className={styles.moreButtonWrapper}>
            <ProductActionButton
              text={isExpanded ? '상품 정보 접기' : '상품 정보 더보기'}
              variant="outline"
              size="sm"
              radius="md"
              fontSize="sm"
              icon={
                <IcArrowDownOrange
                  style={{
                    transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                  }}
                />
              }
              onClick={handleExpandClick}
            />
          </div>
        </div>
      </section>

      <div id="review" className={styles.reviewWrapper}>
        <ProductReviewSection />
      </div>
    </div>
  );
};

export default ProductDetail;
