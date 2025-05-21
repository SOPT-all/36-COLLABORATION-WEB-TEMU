import * as styles from '@shared/components/footer/components/footerBottom/FooterBottom.css';
import { IcCopyRight, IcFooterProtect } from '@svg/index';
import { FOOTER_BOTTOM_SECTIONS } from '@shared/components/footer/constants/FOOTER_SECTIONS';
import Text from '@shared/components/text/Text';
import clsx from 'clsx';

const FooterBottom = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftTitlesWrapper}>
        <IcCopyRight width="2rem" height="2rem" />
        <Text tag="caption_regular_12" color="gray5">
          2022 - 2025 Whaleco Inc.
        </Text>
      </div>
      <div className={styles.titlesWrapper}>
        {FOOTER_BOTTOM_SECTIONS.map(({ id, text, icon, underline }) => (
          <div key={id} className={styles.row}>
            <Text
              tag="caption_regular_12"
              color="gray5"
              className={clsx(underline && styles.underline)}
            >
              {text}
            </Text>
            {icon && <IcFooterProtect width="2.5rem" height="1.2rem" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterBottom;
