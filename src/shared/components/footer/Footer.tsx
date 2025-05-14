import FooterTop from '@shared/components/footer/components/footerTop/FooterTop';
import * as styles from '@shared/components/footer/Footer.css';
import FooterMid from '@shared/components/footer/components/footerMid/FooterMid';

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <FooterTop />
      <FooterMid />
    </footer>
  );
};

export default Footer;
