import { useState } from 'react';
import ProductReviewSection from '@pages/productDetail/productReviewSection/ProductReviewSection';
import * as styles from '@pages/productDetail/ProductDetail.css';
import DetailTable from '@pages/productDetail/components/detailTable/DetailTable';
import DetailTabs from '@pages/productDetail/components/detailTabs/DetailTabs';
import ProductActionButton from '@shared/components/ProductActionButton/ProductActionButton';
import Head from '@shared/components/head/Head';
import { IcArrowDownOrange } from '@svg/index';
// 추후 api 연결 후 삭제 예정
import { mockProductDetailData } from './constant/mockProductReviewData';
import { mockDetailData } from '@pages/productDetail/productTopSection/constants/mockDetailData';
import ProductTopSection from '@pages/productDetail/productTopSection/ProductTopSection';

const ProductDetail = () => {
  const detailImgData = mockProductDetailData.productDetails;
  const [isExpanded, setIsExpanded] = useState(false);
  const {
    // productDetails: productDetails,
    // reviewCount: reviewCount,
    // productId: productId,
    ...restData
  } = mockDetailData;

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
                {detailImgData.map((img, index) => (
                  <img src={img} alt={`제품 상세 이미지 ${index + 1}`} key={index} />
                ))}
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
      <div id="review">
        <ProductReviewSection />
      </div>
    </div>
  );
};

export default ProductDetail;
