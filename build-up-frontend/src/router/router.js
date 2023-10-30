import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import HomePage from '../pages/HomePage';
import Register from '../pages/Register';
import SignIn from '../pages/SignIn';
import { ProductDescription } from '../pages/ProductDescription/ProductDescription';
import ShoppingCart from '../pages/cart/ShoppingCart';
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
        path: 'my-cart',
        element: <ShoppingCart />,
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
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/sign-in',
    element: <SignIn />,
  },
]);
