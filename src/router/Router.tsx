import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import { ROUTES } from '@router/constant/routes';
import Layout from '@router/Layout';
import NotFound from '@shared/components/NotFound/NotFound';

const Home = lazy(() => import('@pages/home/Home'));
const ProductList = lazy(() => import('@pages/productList/ProductList'));
const ProductDetail = lazy(() => import('@pages/productDetail/ProductDetail'));

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: ROUTES.HOME,
        element: <Home />,
      },
      {
        path: ROUTES.PRODUCT_LIST,
        element: <ProductList />,
      },
      {
        path: ROUTES.PRODUCT_DETAIL,
        element: <ProductDetail />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
