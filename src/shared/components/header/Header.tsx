import React, { useState, useEffect } from 'react';
import { IcTemu, IcTemuLogo, IcSearch, IcUser, IcCartBlack } from '@svg/index';
import * as styles from '@shared/components/header/Header.css';
import clsx from 'clsx';
import { PLACEHOLDER } from '@shared/components/header/constant';
import { useNavigate, useLocation } from 'react-router-dom';
import { ROUTES } from '@router/constant/routes';
import { useIntersect } from '@shared/hooks/useIntersect';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [keyword, setKeyword] = useState('');

  const [observeRef, isVisible] = useIntersect(true);

  const handleLogoClick = () => {
    navigate(ROUTES.HOME);
  };

  useEffect(() => {
    if (location.pathname !== '/products') {
      setKeyword('');
    }
  }, [location.pathname]);

  const handleSearch = () => {
    if (!keyword.trim()) return;
    navigate(`/products?keyword=${encodeURIComponent(keyword)}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <>
      <div
        ref={observeRef}
        style={{ position: 'absolute', top: 0, height: '1px', width: '100%' }}
      />
      <header className={clsx(styles.container, !isVisible && styles.scrolled)}>
        <div className={styles.headerWrapper}>
          <div className={styles.leftWrapper}>
            <nav className={styles.logowrapper} onClick={handleLogoClick}>
              <IcTemu width="5.2rem" height="5.2rem" />
              <IcTemuLogo width="12.3rem" height="3.2rem" />
            </nav>
            <div className={styles.inputWrapper}>
              <input
                type="text"
                value={keyword}
                onChange={e => setKeyword(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={PLACEHOLDER}
                className={styles.input}
              ></input>
              <button type="button" onClick={handleSearch}>
                <IcSearch width="2.4rem" height="2.4rem" />
              </button>
            </div>
          </div>
          <div className={styles.rightWrapper}>
            <IcUser width="4rem" height="4rem" />
            <IcCartBlack width="4rem" height="4rem" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
