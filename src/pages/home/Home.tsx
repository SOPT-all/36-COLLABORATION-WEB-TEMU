import * as styles from './Home.css';
import MainBanner from '@img/img_main_banner.svg?react';
import Ic_flash from '@svg/ic_flash_black.svg?react';
import Ic_cheveron from '@svg/ic_chevron_forward_black.svg?react';
import Tag from './components/Tag';

const Home = () => {
  return (
    <div className={styles.homeWrapper}>
      <section className={styles.sectionStyle}>
        <div className={styles.sectionTitleWrapper}>
          <div className={styles.title}>
            <Ic_flash width={'2.4rem'} height={'2.4rem'} />
            <div>번개특가 </div>
            <Ic_cheveron width={'3.2rem'} height={'3.2rem'} />
          </div>
          <div>서둘러 주세요! 혜택가로 인기 상품을 놓치지 말고 구매하세요</div>
        </div>
        <div className={styles.specialListWrapper}>
          <div className={styles.placeholderL}></div>
          <div className={styles.placeholderL}></div>
          <div className={styles.placeholderL}></div>
          <div className={styles.placeholderL}></div>
          <div className={styles.placeholderL}></div>
        </div>
      </section>
      <section className={styles.sectionStyle}>
        <MainBanner width={'108.6rem'} height={'22.4rem'} />
      </section>
      <section className={styles.sectionStyle}>
        <div className={styles.sectionTitleWrapper}>
          <div>가정의 달</div>
          <div>관심 상품 둘러보기</div>
        </div>
        <Tag />
        <div className={styles.listWrapper}>
          <div className={styles.placeholderXL}></div>
          <div className={styles.placeholderXL}></div>
          <div className={styles.placeholderXL}></div>
          <div className={styles.placeholderXL}></div>
          <div className={styles.placeholderXL}></div>
          <div className={styles.placeholderXL}></div>
          <div className={styles.placeholderXL}></div>
          <div className={styles.placeholderXL}></div>
          <div className={styles.placeholderXL}></div>
          <div className={styles.placeholderXL}></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
