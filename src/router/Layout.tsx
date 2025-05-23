import { Outlet } from 'react-router-dom';
import Footer from '@shared/components/footer/Footer';
import Header from '@shared/components/header/Header';
import HeaderMid from '@shared/components/headerMid/HeaderMid';
import Loading from '@shared/components/Loading/Loading';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <>
      <Header />
      <HeaderMid />
      <main>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
