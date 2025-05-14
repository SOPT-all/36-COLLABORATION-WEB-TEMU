import * as styles from '@shared/components/footer/components/footerTop/FooterTop.css';
import {
  APP_DOWNLOAD,
  FOOTER_TOP_SECTIONS,
} from '@shared/components/footer/constants/FOOTER_SECTIONS';
import Text from '@shared/components/text/Text';
import Divider from '@shared/components/divider/Divider';

const FooterTop = () => {
  const [ios, android] = APP_DOWNLOAD.appStoreLinks;

  return (
    <div className={styles.footerTopContainer}>
      {Object.entries(FOOTER_TOP_SECTIONS).map(([key, section]) => (
        <section key={key} className={styles.footerTopSection}>
          <Text tag="body_bold_16" color="white">
            {section.title}
          </Text>
          <Text tag="body_regular_14" color="gray3" className={styles.footerToptextGap}>
            {section.items.map(item => (
              <li key={item.id}>{item.text}</li>
            ))}
          </Text>
        </section>
      ))}

      {/* APP_DOWNLOAD 섹션 */}
      <section className={styles.footerTopSection}>
        <Text tag="body_bold_16" color="white">
          {APP_DOWNLOAD.title}
        </Text>
        <div className={styles.appSectionWrapper}>
          <div className={styles.appSectionColWrapper}>
            <div className={styles.appSectionColTextWrapper}>
              {APP_DOWNLOAD.itemsLeft.map(({ id, text, icon: Icon }) => (
                <div key={id} className={styles.appSectionTextRow}>
                  <Icon width="2rem" height="2rem" />
                  <Text tag="body_regular_14" color="white">
                    {text}
                  </Text>
                </div>
              ))}
            </div>
            <button className={styles.buttonWrapper} type="button">
              <ios.icon width="2.4rem" height="3rem" />
              <div>
                <Text tag="body_regular_14" color="gray3">
                  {ios.text}
                </Text>
                <Text tag="body_regular_14" color="white">
                  {ios.subText}
                </Text>
              </div>
            </button>
          </div>

          <div className={styles.dividerWrapper}>
            <Divider direction="vertical" color="gray4" thickness="2px" length="1.1rem" />
            <Divider direction="vertical" color="gray4" thickness="2px" length="1.1rem" />
            <Divider direction="vertical" color="gray4" thickness="2px" length="1.1rem" />
          </div>

          <div className={styles.appSectionColWrapper}>
            <div className={styles.appSectionColTextWrapper}>
              {APP_DOWNLOAD.itemsRight.map(({ id, text, icon: Icon }) => (
                <div key={id} className={styles.appSectionTextRow}>
                  <Icon width="2rem" height="2rem" />
                  <Text tag="body_regular_14" color="white">
                    {text}
                  </Text>
                </div>
              ))}
            </div>
            <button className={styles.buttonWrapper} type="button">
              <android.icon width="2rem" height="2.2rem" />
              <div>
                <Text tag="body_regular_14" color="gray3">
                  {android.text}
                </Text>
                <Text tag="body_regular_14" color="white">
                  {android.subText}
                </Text>
              </div>
            </button>
          </div>
        </div>
        <div className={styles.snsContainer}>
          <Text tag="body_bold_16" color="white">
            {APP_DOWNLOAD.socialLinks.title}
          </Text>
          <div className={styles.snsWrapper}>
            {APP_DOWNLOAD.socialLinks.items.map(({ id, icon: Icon }) => (
              <button type="button" key={id}>
                <Icon width="2rem" height="2rem" />
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FooterTop;
