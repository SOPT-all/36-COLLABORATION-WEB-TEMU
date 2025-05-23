import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loading from '@shared/components/Loading/Loading';
import Header from '@shared/components/header/Header';
import Footer from '@shared/components/footer/Footer';

const Layout = () => {
  return (
    <>
      <Header />
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
