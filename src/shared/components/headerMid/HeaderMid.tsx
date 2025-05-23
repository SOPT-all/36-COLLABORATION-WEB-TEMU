import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { IcCategory, IcLanguage, IcClose } from '@svg/index';
import Text from '@shared/components/text/Text';
import Divider from '@shared/components/divider/Divider';
import * as styles from '@shared/components/headerMid/HeaderMid.css';
import CategoryMenu from '@shared/components/headerMid/components/categoryMenu/CategoryMenu';
import useOutsideClick from '@shared/hooks/useOutSideClick';

const HeaderMid = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const { pathname } = useLocation();

  const handleCategoryClick = () => {
    setIsCategoryOpen(prev => !prev);
  };

  const ref = useOutsideClick(() => {
    setIsCategoryOpen(false);
  });

  useEffect(() => {
    setIsCategoryOpen(false);
  }, [pathname]);

  const CategoryToggleIcon = isCategoryOpen ? (
    <IcClose width="3.2rem" height="3.2rem" onClick={handleCategoryClick} />
  ) : (
    <IcCategory width="3.2rem" height="3.2rem" onClick={handleCategoryClick} />
  );

  return (
    <div className={styles.dividerContainer}>
      <div className={styles.container}>
        <div className={styles.categoryWrapper} ref={ref}>
          <div className={styles.leftWrapper}>
            <div className={styles.navStyle} aria-label="카테고리">
              {CategoryToggleIcon}
            </div>
            {isCategoryOpen && (
              <div className={styles.categoryMenuWrapper}>
                <CategoryMenu />
              </div>
            )}
            <Text tag="body_bold_18">카테고리</Text>
          </div>
          <div className={styles.rightWrapper}>
            <div className={styles.textWrapper}>
              <button type="button" className={styles.navStyle} aria-label="로그인">
                <Text tag="caption_medium_13" color="gray6" className={styles.navStyle}>
                  로그인
                </Text>
              </button>
              <Divider direction="vertical" color="gray3" thickness="2px" length="12px" />
              <button type="button" className={styles.navStyle} aria-label="회원가입">
                <Text tag="caption_medium_13" color="gray6" className={styles.navStyle}>
                  회원가입
                </Text>
              </button>
              <Divider direction="vertical" color="gray3" thickness="2px" length="12px" />
              <button type="button" className={styles.navStyle} aria-label="고객센터">
                <Text tag="caption_medium_13" color="gray6" className={styles.navStyle}>
                  고객센터
                </Text>
              </button>
            </div>
            <button type="button" className={styles.navStyle} aria-label="언어변경">
              <IcLanguage width="2.4rem" height="2.4rem" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMid;
