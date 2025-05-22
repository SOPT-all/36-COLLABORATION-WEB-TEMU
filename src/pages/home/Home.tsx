import { useState, Suspense } from 'react';
import * as styles from '@/pages/home/Home.css';
import { IcFlashBlack, IcChevronForwardBlack, IcArrowDownWhite } from '@svg/index';
import ImgMainBanner from '@/../public/img/imgMainBanner.png';
import FamilyMonthTitle from '@/../public/img/familyMonthTitle.png';
import Banner from '@/../public/img/banner_familymonth.png';
import Tag from '@/pages/home/components/Tag';
import Text from '@shared/components/text/Text';
import Card from '@shared/components/card/Card';
import { useGetProductList, useGetPromotionProductList } from '@api/queries';
import useFilterCard from '@pages/home/hooks/useFilterCard';
import ProductActionButton from '@shared/components/ProductActionButton/ProductActionButton';
import type { GetPromotionResponseTypes, ProductCardData } from '@pages/home/types/response';
import CardSkeleton from '@shared/components/card/CardSkeleton';

const ProductCardListContent = ({
  filteredCards,
  visibleCount,
  onClickMore,
}: {
  filteredCards: ProductCardData[];
  visibleCount: number;
  onClickMore: () => void;
}) => {
  return (
    <>
      <div className={styles.listWrapper}>
        {filteredCards.slice(0, visibleCount).map(product => (
          <Card
            key={product.productId}
            size="xl"
            productId={product.productId}
            imageUrl={product.productImage}
            productName={product.productName}
            discountRate={product.discountRate}
            discountPrice={product.discountPrice}
            reviewCount={product.reviewCount}
            productTag={product.productTag}
          />
        ))}
      </div>

      {visibleCount < filteredCards.length && (
        <section className={styles.sectionBtn}>
          <ProductActionButton
            text="더보기"
            size="sm"
            radius="md"
            fontSize="sm"
            icon={<IcArrowDownWhite />}
            onClick={onClickMore}
          />
        </section>
      )}
    </>
  );
};

const ProductCardListSection = () => {
  const { data: productListData } = useGetProductList();
  const [visibleCount, setVisibleCount] = useState(9);

  const searchedList = productListData?.productMainInfos ?? [];

  const { selectedTag, filteredCards, handleTagClick } = useFilterCard({
    productList: searchedList,
    isLoading: false,
  });

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 9);
  };

  return (
    <>
      <div className={styles.listTitleWrapper}>
        <img src={FamilyMonthTitle} className={styles.familyMonthTitle} />
        <Text tag="head_bold_24" color="black">
          관심 상품 둘러보기
        </Text>
      </div>
      <Tag selectedTag={selectedTag} handleTagClick={handleTagClick} />
      <ProductCardListContent
        filteredCards={filteredCards}
        visibleCount={visibleCount}
        onClickMore={handleShowMore}
      />
    </>
  );
};

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

const PromotionCardList = () => {
  const { data } = useGetPromotionProductList();
  const promotionData = data?.promotionProductInfos.slice(0, 5) ?? [];

  return (
    <div className={styles.forwardListWrapper}>
      {promotionData.map((cardData: GetPromotionResponseTypes) => (
        <Card
          key={cardData.productId}
          size="l"
          productId={cardData.productId}
          imageUrl={cardData.productImage}
          productName={cardData.productName}
          discountRate={cardData.discountRate}
          discountPrice={cardData.discountPrice}
        />
      ))}
    </div>
  );
};

export default Home;
