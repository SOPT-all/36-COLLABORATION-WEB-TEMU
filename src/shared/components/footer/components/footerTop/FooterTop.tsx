import * as styles from '@shared/components/footer/components/footerTop/FooterTop.css';
import { FOOTER_SECTIONS } from '@shared/components/footer/constants/FOOTER_SECTIONS';
import Text from '@shared/components/text/Text';
import * as Icons from '@svg/index';

const FooterTop = () => {
  return (
    <div className={styles.footerTopContainer}>
      {Object.entries(FOOTER_SECTIONS).map(([key, section]) => (
        <section key={key} className={styles.footerTopSection}>
          <Text tag="body_bold_14" color="white">
            {section.title}
          </Text>
          <Text tag="caption_regular_12" color="gray3" className={styles.footerToptextGap}>
            {section.items.map(item => (
              <li key={item.id}>{item.text}</li>
            ))}
          </Text>
        </section>
      ))}

      {/* APP_DOWNLOAD 섹션 */}
      <section className={styles.footerTopSection}>
        <Text tag="body_bold_14" color="white">
          {FOOTER_SECTIONS.APP_DOWNLOAD.title}
        </Text>
        <div>
          <div>
            <div>
              <Icons.IcGraph width="2rem" height="2rem" />
              <p>가격 인하 알림</p>
            </div>
            |
            <Icons.IcTruckWhite width="2rem" height="2rem" />
            <p>실시간 주문 추적</p>
          </div>
          <div>
            <Icons.IcShieldWhite width="2rem" height="2rem" />
            <p>더 빠르고 안전한 결제</p>
          </div>
          <div>
            <Icons.IcBoonWhite width="2rem" height="2rem" />
            <p>독점 혜택</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FooterTop;
