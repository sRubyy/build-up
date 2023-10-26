import { createSlice } from '@reduxjs/toolkit';

const DECIMAL_POINT = 2;

const items = [];
const totalPrice = 0;

export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState: {
    items,
    totalPrice,
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload.item;
      const quantity = action.payload.quantity;

      const foundIndex = state.items.findIndex(
        (item) => item.id === newItem.id
      );

      if (foundIndex >= 0) {
        state.items[foundIndex].quantity += quantity;
      } else {
        state.items.push({
          ...newItem,
          quantity,
        });
      }

      state.totalPrice += newItem.price * quantity;
      state.totalPrice = Number(state.totalPrice.toFixed(DECIMAL_POINT));
    },

    removeItem: (state, action) => {
      const targetItem = action.payload.item;
      const quantity = action.payload.quantity;
      const targetItemId = targetItem.id;
      const removeIndex = state.items.findIndex(
        (item) => item.id === targetItemId
      );

      if (state.items[removeIndex].quantity - quantity < 1) {
        state.totalPrice -=
          targetItem.price * state.items[removeIndex].quantity;
        state.items = state.items.filter((item) => item.id !== targetItemId);
      } else {
        state.totalPrice -= targetItem.price * quantity;
        state.items[removeIndex].quantity -= quantity;
      }

      state.totalPrice = Number(state.totalPrice.toFixed(DECIMAL_POINT));
    },
  },
});

export const { addItem, removeItem } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
