import Footer from '@shared/components/footer/Footer';
import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
