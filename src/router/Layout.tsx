import { Outlet } from 'react-router-dom';
import Footer from '@shared/components/footer/Footer';
import Header from '@shared/components/header/Header';
import HeaderMid from '@shared/components/headerMid/HeaderMid';

const Layout = () => {
  return (
    <>
      <Header />
      <HeaderMid />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
