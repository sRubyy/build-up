import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import HomePage from '../pages/HomePage';
import Register from '../pages/Register';
import SignIn from '../pages/SignIn';
import { ProductDescription } from '../pages/ProductDescription/ProductDescription';
import ShoppingCart from '../pages/cart/ShoppingCart';
import { ProductCheckout } from '../pages/ProductCheckout/ProductCheckout';
import { MySelllProduct } from '../pages/MySellProduct/MySellProduct';
import { EditProduct } from '../pages/EditProduct/EditProduct';
import BuyerCheckout from '../pages/BuyerCheckout';
import { SizeSelection } from '../pages/ProductDescription/components/SizeSelection';
import CheckoutForm from '../pages/checkout/CheckoutForm';
import CheckoutAddressForm from '../pages/checkout/CheckoutAddressForm';
import PaymentMethodForm from '../pages/checkout/PaymentMethodForm';
import CheckoutSummary from '../pages/checkout/CheckoutSummary';
import { Description } from '../pages/ProductDescription/components/Description';
import { Details } from '../pages/ProductDescription/components/Details';

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
        path: '/product/:productName',
        element: <ProductDescription />,
        children: [
          {
            path: '/product/:productName/description',
            element: <Description />,
          },
          {
            path: '/product/:productName/sell',
            element: <Details />,
          },
          {
            path: '/product/:productName/buy',
            element: <SizeSelection />,
          },
        ],
      },
      {
        path: '/my-cart',
        element: <ShoppingCart />,
      },
      {
        path: '/sell-confirmation',
        element: <ProductCheckout />,
      },
      {
        path: '/my-sell-product',
        element: <MySelllProduct />,
      },
      {
        path: '/edit-product',
        element: <EditProduct />,
      },
      {
        path: '/checkout',
        element: <BuyerCheckout />,
        children: [
          {
            path: '/checkout/summary',
            element: <CheckoutSummary />,
          },
          {
            path: '/checkout/form',
            element: <CheckoutForm />,
            children: [
              {
                path: '/checkout/form/shipping-address',
                element: <CheckoutAddressForm />,
              },
              {
                path: '/checkout/form/payment-method',
                element: <PaymentMethodForm />,
              },
            ],
          },
        ],
      },
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
