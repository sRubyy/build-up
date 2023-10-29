import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import HomePage from '../pages/HomePage';
import { ProductDescription } from '../pages/ProductDescription/ProductDescription';

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
      }
    ],
  },
]);
