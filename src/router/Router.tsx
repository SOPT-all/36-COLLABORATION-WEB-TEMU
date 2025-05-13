import { createBrowserRouter } from 'react-router-dom';
import Home from '@pages/home/Home';
import ProductList from '@pages/productList/ProductList';
import ProductDetail from '@pages/productDetail/ProductDetail';
import { ROUTES } from '@router/constant/routes';
import Layout from '@router/layout';

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
    ],
  },
]);

export default router;
