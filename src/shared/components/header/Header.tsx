import { useState, useEffect } from 'react';
import { IcTemu, IcTemuLogo, IcSearch, IcUser, IcCartBlack } from '@svg/index';
import * as styles from '@shared/components/header/Header.css';
import clsx from 'clsx';
import { PLACEHOLDER, MIN_HEIGHT } from '@shared/components/header/constant';

const Header = () => {
  const [keyword, setKeyword] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > MIN_HEIGHT);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 검색페이지로연결 시
  // const handleSearch = () => {};

  return (
    <header className={clsx(styles.container, isScrolled && 'scrolled')}>
      <div className={styles.leftWrapper}>
        <nav className={styles.logowrapper}>
          <IcTemu width="5.2rem" height="5.2rem" />
          <IcTemuLogo width="12.3rem" height="3.2rem" />
        </nav>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            value={keyword}
            onChange={e => setKeyword(e.target.value)}
            placeholder={PLACEHOLDER}
            className={styles.input}
          ></input>
          <IcSearch width="2.4rem" height="2.4rem" />
        </div>
      </div>
      <div className={styles.rightWrapper}>
        <IcUser width="4rem" height="4rem" />
        <IcCartBlack width="4rem" height="4rem" />
      </div>
    </header>
  );
};

export default Header;
