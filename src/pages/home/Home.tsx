import * as styles from '@/pages/home/Home.css';
import { IcFlashBlack, IcChevronForwardBlack, IcArrowDownWhite } from '@svg/index';
import ImgMainBanner from '@/../public/img/imgMainBanner.png';
import FamilyMonthTitle from '@/../public/img/familyMonthTitle.png';
import Banner from '@/../public/img/banner_familymonth.png';
import Tag from '@/pages/home/components/Tag';
import Text from '@shared/components/text/Text';
import Card from '@shared/components/card/Card';
import { dummyCardsL } from '@/pages/home/mockHomeData';
import useFilterCard from '@pages/home/hooks/useFilterCard';
import ProductActionButton from '@shared/components/ProductActionButton/ProductActionButton';

const Home = () => {
  const { selectedTag, filteredCards, handleTagClick } = useFilterCard();

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
          <div className={styles.forwardListWrapper}>
            {dummyCardsL.map(cardData => (
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
        </section>

        <section className={styles.sectionBanner}>
          <img src={ImgMainBanner} className={styles.imgMainBanner} />
        </section>

        <section className={styles.sectionStyle}>
          <div className={styles.listTitleWrapper}>
            <img src={FamilyMonthTitle} className={styles.familyMonthTitle} />
            <Text tag="head_bold_24" color="black">
              관심 상품 둘러보기
            </Text>
          </div>
          <Tag selectedTag={selectedTag} handleTagClick={handleTagClick} />
          <div className={styles.listWrapper}>
            {filteredCards.map(cardData => (
              <Card
                key={cardData.productId}
                size="xl"
                productId={cardData.productId}
                imageUrl={cardData.productImage}
                productName={cardData.productName}
                discountRate={cardData.discountRate}
                discountPrice={cardData.discountPrice}
                reviewCount={cardData.reviewCount}
                productTag={cardData.productTag}
              />
            ))}
          </div>
        </section>

        <section className={styles.sectionBtn}>
          <ProductActionButton
            text="더보기"
            size="sm"
            radius="md"
            fontSize="sm"
            icon={<IcArrowDownWhite />}
          />
        </section>
      </div>
    </>
  );
};

export default Home;
