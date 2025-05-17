import { Outlet } from 'react-router-dom';
import Footer from '@shared/components/footer/Footer';
import Header from '@shared/components/header/Header';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
