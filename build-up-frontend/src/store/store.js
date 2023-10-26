import { configureStore } from '@reduxjs/toolkit';
import shoppingCartReducer from './state-slices/shopping-cart-slice';

export default configureStore({
  reducer: {
    shoppingCart: shoppingCartReducer,
  },
});
