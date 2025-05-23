import { Suspense } from 'react';
import * as styles from '@/pages/home/Home.css';
import { IcFlashBlack, IcChevronForwardBlack } from '@svg/index';
import ImgMainBanner from '@/../public/img/imgMainBanner.png';
import Banner from '@/../public/img/banner_familymonth.png';
import Text from '@shared/components/text/Text';
import CardSkeleton from '@shared/components/card/CardSkeleton';
import PromotionCardList from '@pages/home/components/promotionCardList/PromotionCardList';
import ProductCardListSection from '@pages/home/components/productCardListSection/ProductCardListSecton';

const Home = () => {
  return (
    <>
      <img src={Banner} alt="banner img" className={styles.imgBanner} />
      <div className={styles.homeWrapper}>
        <section className={styles.sectionStyle}>
          <div className={styles.forwardTitleWrapper}>
            <div className={styles.forwardTitle}>
              <IcFlashBlack width="2.4rem" height="2.4rem" />
              <Text tag="head_bold_24" color="black">
                번개특가
              </Text>
              <IcChevronForwardBlack width="3.2rem" height="3.2rem" />
            </div>
            <Text tag="body_regular_16" color="gray4">
              서둘러 주세요! 혜택가로 인기 상품을 놓치지 말고 구매하세요
            </Text>
          </div>
          <Suspense
            fallback={
              <div className={styles.forwardListWrapper}>
                {[...Array(5)].map((_, i) => (
                  <CardSkeleton key={i} size="l" />
                ))}
              </div>
            }
          >
            <PromotionCardList />
          </Suspense>
        </section>

        <section className={styles.sectionBanner}>
          <img src={ImgMainBanner} className={styles.imgMainBanner} />
        </section>
        <section className={styles.sectionStyle}>
          <Suspense
            fallback={
              <div className={styles.listWrapper}>
                {[...Array(6)].map((_, i) => (
                  <CardSkeleton key={i} size="xl" />
                ))}
              </div>
            }
          >
            <ProductCardListSection />
          </Suspense>
        </section>
      </div>
    </>
  );
};

export default Home;
