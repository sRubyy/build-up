import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from '../store/state-slices/shopping-cart-slice';

function POCShoppingCart() {
  const items = [
    {
      id: 1,
      name: 'Product 1',
      price: 10.99,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 19.99,
    },
    {
      id: 3,
      name: 'Product 3',
      price: 7.49,
    },
  ];

  const myCart = useSelector((state) => state.shoppingCart.items);
  const totalPrice = useSelector((state) => state.shoppingCart.totalPrice);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <h1>Product List</h1>
        {items.map((item) => (
          <div key={item.id} style={{ border: 'solid 1px', margin: '12px' }}>
            <div style={{ padding: '4px' }}>
              <h3>{item.name}</h3>
              <p>Price: {item.price} $</p>
              <div style={{ display: 'flex', gap: '4px' }}>
                <button
                  onClick={() => dispatch(addItem({ item, quantity: 1 }))}
                >
                  +1
                </button>
                <button
                  onClick={() => dispatch(addItem({ item, quantity: 5 }))}
                >
                  +5
                </button>
                <button
                  onClick={() => dispatch(addItem({ item, quantity: 10 }))}
                >
                  +10
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h1>My Cart: {totalPrice} $</h1>
        {myCart.map((item) => (
          <div key={item.id} style={{ border: 'solid 1px', margin: '12px' }}>
            <div style={{ padding: '4px' }}>
              <h3>{item.name}</h3>
              <p>Price: {item.price} $</p>
              <p>Quantity: {item.quantity}</p>
              <div style={{ display: 'flex', gap: '4px' }}>
                <button
                  onClick={() => dispatch(removeItem({ item, quantity: 1 }))}
                >
                  -1
                </button>
                <button
                  onClick={() => dispatch(removeItem({ item, quantity: 5 }))}
                >
                  -5
                </button>
                <button
                  onClick={() => dispatch(removeItem({ item, quantity: 10 }))}
                >
                  -10
                </button>
                <button
                  onClick={() =>
                    dispatch(removeItem({ item, quantity: item.quantity }))
                  }
                >
                  All
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default POCShoppingCart;
