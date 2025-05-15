import { useState } from 'react';
import { IcCategory, IcLanguage, IcClose } from '@svg/index';
import Text from '@shared/components/text/Text';
import Divider from '@shared/components/divider/Divider';
import * as styles from '@shared/components/headerMid/HeaderMid.css';
import CategoryMenu from '@shared/components/headerMid/components/categoryMenu/CategoryMenu';

const HeaderMid = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const handleCategoryClick = () => {
    setIsCategoryOpen(prev => !prev);
  };

  const CategoryToggleIcon = isCategoryOpen ? (
    <IcClose width="3.2rem" height="3.2rem" onClick={handleCategoryClick} />
  ) : (
    <IcCategory width="3.2rem" height="3.2rem" onClick={handleCategoryClick} />
  );

  return (
    <div className={styles.container}>
      <div className={styles.categoryWrapper}>
        <div className={styles.leftWrapper}>
          <div className={styles.navStyle}>{CategoryToggleIcon}</div>
          {isCategoryOpen && (
            <div className={styles.categoryMenuWrapper}>
              <CategoryMenu />
            </div>
          )}
          <Text tag="body_bold_18">카테고리</Text>
        </div>
        <div className={styles.rightWrapper}>
          <div className={styles.textWrapper}>
            <Text tag="caption_medium_13" color="gray6" className={styles.navStyle}>
              로그인
            </Text>
            <Divider direction="vertical" color="gray3" thickness="2px" length="12px" />
            <Text tag="caption_medium_13" color="gray6" className={styles.navStyle}>
              회원가입
            </Text>
            <Divider direction="vertical" color="gray3" thickness="2px" length="12px" />
            <Text tag="caption_medium_13" color="gray6" className={styles.navStyle}>
              고객센터
            </Text>
          </div>
          <IcLanguage width="2.4rem" height="2.4rem" />
        </div>
      </div>
    </div>
  );
};

export default HeaderMid;
