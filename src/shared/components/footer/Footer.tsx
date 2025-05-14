import * as styles from '@shared/components/footer/Footer.css';
import FooterTop from '@shared/components/footer/components/footerTop/FooterTop';
import FooterMid from '@shared/components/footer/components/footerMid/FooterMid';
import FooterBottom from '@shared/components/footer/components/footerBottom/FooterBottom';
import Divider from '@shared/components/divider/Divider';

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <FooterTop />
      <FooterMid />
      <Divider length="100%" color="gray8" thickness="1px" />
      <FooterBottom />
    </footer>
  );
};

export default Footer;
