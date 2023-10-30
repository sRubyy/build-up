import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import HomePage from '../pages/HomePage';
import { ProductDescription } from '../pages/ProductDescription/ProductDescription';
import { ProductCheckout } from '../pages/ProductCheckout/ProductCheckout';
import { MySelllProduct } from '../pages/MySellProduct/MySellProduct';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/productDescription',
        element: <ProductDescription />,
      },
      {
        path: '/productCheckout',
        element: <ProductCheckout />,
      },
      {
        path: '/mySellProduct',
        element: <MySelllProduct />,
      }
    ],
  },
]);
