import { FOOTER_MID_SECTION } from '@shared/components/footer/constants/FOOTER_SECTIONS';
import * as styles from '@shared/components/footer/components/footerMid/FooterMid.css';
import Text from '@shared/components/text/Text';
import clsx from 'clsx';
import { IcArrowRightWhite, IcPayments, IcSecurity } from '@svg/index';

const FooterMid = () => {
  return (
    <div className={styles.container}>
      <section className={styles.sectionLeft}>
        <div className={styles.textWrapper}>
          <Text tag="body_bold_14" color="white">
            {FOOTER_MID_SECTION.left_info.title}
          </Text>
          {FOOTER_MID_SECTION.left_info.content.map(({ id, text, icon: Icon, underline }) => (
            <div key={id} className={styles.row}>
              <Text
                tag="body_regular_14"
                color="white"
                className={clsx(underline && styles.underline)}
              >
                {text}
              </Text>
              {Icon && <Icon width="1.6rem" height="1.6rem" />}
            </div>
          ))}
        </div>
        <div className={styles.bottomWrapper}>
          <Text tag="body_bold_14" color="white">
            보안 인증
          </Text>
          <IcSecurity width="39.4rem" height="2.6rem" />
        </div>
      </section>
      <section className={styles.sectionRight}>
        <div className={styles.textWrapper}>
          <div className={styles.row}>
            <Text tag="body_regular_14" color="white">
              {FOOTER_MID_SECTION.right_info[0].text}
            </Text>
          </div>
          <div className={styles.row}>
            <Text
              tag="body_regular_14"
              color="white"
              className={clsx(FOOTER_MID_SECTION.right_info[1].underline && styles.underline)}
            >
              {FOOTER_MID_SECTION.right_info[1].text}
            </Text>
            {FOOTER_MID_SECTION.right_info[1].icon && (
              <IcArrowRightWhite width="1.6rem" height="1.6rem" />
            )}
          </div>

          <div className={clsx(styles.row, styles.flexRow)}>
            <Text tag="body_regular_14" color="white" style={{ marginRight: '4px' }}>
              {FOOTER_MID_SECTION.right_info[2].text}
            </Text>
            <div className={styles.flexRow}>
              <Text
                tag="body_regular_14"
                color="white"
                className={clsx(FOOTER_MID_SECTION.right_info[3].underline && styles.underline)}
              >
                {FOOTER_MID_SECTION.right_info[3].text}
              </Text>
              {FOOTER_MID_SECTION.right_info[3].icon && (
                <IcArrowRightWhite width="1.6rem" height="1.6rem" />
              )}
            </div>
            <Text tag="body_regular_14" color="white">
              {FOOTER_MID_SECTION.right_info[4].text}
            </Text>
          </div>

          <div className={styles.row}>
            <Text tag="body_regular_14" color="white">
              {FOOTER_MID_SECTION.right_info[5].text}
            </Text>
          </div>

          <div className={styles.row}>
            <Text tag="body_regular_14" color="white">
              {FOOTER_MID_SECTION.right_info[6].text}
            </Text>
          </div>
        </div>

        <div className={styles.bottomWrapper}>
          <Text tag="body_bold_14" color="white">
            가능한 결제 방법
          </Text>
          <IcPayments width="56.8rem" height="6.9rem" />
        </div>
      </section>
    </div>
  );
};

export default FooterMid;
