import * as styles from '@/pages/home/Home.css';
import { ImgMainBanner, IcFlashBlack, IcChevronForwardBlack, FamilyMonthTitle } from '@svg/index';

import Tag from '@/pages/home/components/Tag';
import Text from '@shared/components/text/Text';
import Card from '@shared/components/card/Card';

const Home = () => {
  const dummyCardsL = [
    {
      size: 'l',
      repurchase: true,
      imageUrl: 'https://via.placeholder.com/350x150.png?text=Product+1',
      productName: '모던 디자인 테이블 램프',
      discountRate: 20,
      discountPrice: 49000,
      reviewCount: 100,
    },
    {
      size: 'l',
      repurchase: false,
      imageUrl: 'https://via.placeholder.com/350x150.png?text=Product+2',
      productName: '심플 미니멀 스탠드',
      discountRate: 15,
      discountPrice: 35000,
      reviewCount: 42,
    },
    {
      size: 'l',
      repurchase: true,
      imageUrl: 'https://via.placeholder.com/350x150.png?text=Product+3',
      productName: '북유럽 스타일 조명',
      discountRate: 10,
      discountPrice: 59000,
      reviewCount: 87,
    },
    {
      size: 'l',
      repurchase: false,
      imageUrl: 'https://via.placeholder.com/350x150.png?text=Product+4',
      productName: 'LED 데스크 라이트',
      discountRate: 25,
      discountPrice: 41000,
      reviewCount: 130,
    },
    {
      size: 'l',
      repurchase: false,
      imageUrl: 'https://via.placeholder.com/350x150.png?text=Product+4',
      productName: 'LED 데스크 라이트',
      discountRate: 25,
      discountPrice: 41000,
      reviewCount: 130,
    },
  ];
  const dummyCardsXL = [
    {
      size: 'xl',
      repurchase: true,
      imageUrl: 'https://via.placeholder.com/350x150.png?text=Product+1',
      productName: '모던 디자인 테이블 램프',
      discountRate: 20,
      discountPrice: 49000,
      reviewCount: 100,
    },
    {
      size: 'xl',
      repurchase: false,
      imageUrl: 'https://via.placeholder.com/350x150.png?text=Product+2',
      productName: '심플 미니멀 스탠드',
      discountRate: 15,
      discountPrice: 35000,
      reviewCount: 42,
    },
    {
      size: 'xl',
      repurchase: true,
      imageUrl: 'https://via.placeholder.com/350x150.png?text=Product+3',
      productName: '북유럽 스타일 조명',
      discountRate: 10,
      discountPrice: 59000,
      reviewCount: 87,
    },
    {
      size: 'xl',
      repurchase: false,
      imageUrl: 'https://via.placeholder.com/350x150.png?text=Product+4',
      productName: 'LED 데스크 라이트',
      discountRate: 25,
      discountPrice: 41000,
      reviewCount: 130,
    },
    {
      size: 'xl',
      repurchase: false,
      imageUrl: 'https://via.placeholder.com/350x150.png?text=Product+4',
      productName: 'LED 데스크 라이트',
      discountRate: 25,
      discountPrice: 41000,
      reviewCount: 130,
    },
    {
      size: 'xl',
      repurchase: true,
      imageUrl: 'https://via.placeholder.com/350x150.png?text=Product+1',
      productName: '모던 디자인 테이블 램프',
      discountRate: 20,
      discountPrice: 49000,
      reviewCount: 100,
    },
    {
      size: 'xl',
      repurchase: false,
      imageUrl: 'https://via.placeholder.com/350x150.png?text=Product+2',
      productName: '심플 미니멀 스탠드',
      discountRate: 15,
      discountPrice: 35000,
      reviewCount: 42,
    },
    {
      size: 'xl',
      repurchase: true,
      imageUrl: 'https://via.placeholder.com/350x150.png?text=Product+3',
      productName: '북유럽 스타일 조명',
      discountRate: 10,
      discountPrice: 59000,
      reviewCount: 87,
    },
    {
      size: 'xl',
      repurchase: false,
      imageUrl: 'https://via.placeholder.com/350x150.png?text=Product+4',
      productName: 'LED 데스크 라이트',
      discountRate: 25,
      discountPrice: 41000,
      reviewCount: 130,
    },
    {
      size: 'xl',
      repurchase: false,
      imageUrl: 'https://via.placeholder.com/350x150.png?text=Product+4',
      productName: 'LED 데스크 라이트',
      discountRate: 25,
      discountPrice: 41000,
      reviewCount: 130,
    },
    {
      size: 'xl',
      repurchase: true,
      imageUrl: 'https://via.placeholder.com/350x150.png?text=Product+1',
      productName: '모던 디자인 테이블 램프',
      discountRate: 20,
      discountPrice: 49000,
      reviewCount: 100,
    },
    {
      size: 'xl',
      repurchase: false,
      imageUrl: 'https://via.placeholder.com/350x150.png?text=Product+2',
      productName: '심플 미니멀 스탠드',
      discountRate: 15,
      discountPrice: 35000,
      reviewCount: 42,
    },
    {
      size: 'xl',
      repurchase: true,
      imageUrl: 'https://via.placeholder.com/350x150.png?text=Product+3',
      productName: '북유럽 스타일 조명',
      discountRate: 10,
      discountPrice: 59000,
      reviewCount: 87,
    },
    {
      size: 'xl',
      repurchase: false,
      imageUrl: 'https://via.placeholder.com/350x150.png?text=Product+4',
      productName: 'LED 데스크 라이트',
      discountRate: 25,
      discountPrice: 41000,
      reviewCount: 130,
    },
    {
      size: 'xl',
      repurchase: false,
      imageUrl: 'https://via.placeholder.com/350x150.png?text=Product+4',
      productName: 'LED 데스크 라이트',
      discountRate: 25,
      discountPrice: 41000,
      reviewCount: 130,
    },
  ];
  return (
    <>
      {
        //Header
      }
      <div className={styles.homeWrapper}>
        <section className={styles.sectionStyle}>
          <div className={styles.forwardTitleWrapper}>
            <div className={styles.forwardTitle}>
              <IcFlashBlack width={'2.4rem'} height={'2.4rem'} />
              <Text tag="head_bold_24" color="black" className="">
                번개특가
              </Text>
              <IcChevronForwardBlack width={'3.2rem'} height={'3.2rem'} />
            </div>
            <Text tag="body_regular_16" color="gray4" className="">
              서둘러 주세요! 혜택가로 인기 상품을 놓치지 말고 구매하세요
            </Text>
          </div>
          <div className={styles.forwardListWrapper}>
            {dummyCardsL.map((cardData, index) => (
              <Card key={index} {...cardData} />
            ))}
          </div>
        </section>
        <section className={styles.sectionStyle}>
          <ImgMainBanner width={'108.6rem'} height={'22.4rem'} />
        </section>
        <section className={styles.sectionStyle}>
          <div className={styles.listTitleWrapper}>
            <FamilyMonthTitle width="11.5rem" height="2rem" />
            <Text tag="head_bold_24" color="black" className="">
              관심 상품 둘러보기
            </Text>
          </div>
          <Tag />
          <div className={styles.listWrapper}>
            {dummyCardsXL.map((cardData, index) => (
              <Card key={index} {...cardData} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
