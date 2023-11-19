import { itemImageMapping } from '../../../config/item_image_mapping';
import React, { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';

function OrdersList() {
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    const apiUrl = 'http://localhost:8080/api/order/findOrderByToken';
    const token = { token: new Cookies().get('loginToken') };

    const fetchOrders = async () => {
      try {
        const res = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(token),
        });

        const data = await res.json();
        setOrders(data.data.sort((a, b) => a.orderId - b.orderId));
      } catch (e) {}
    };

    fetchOrders();
  }, []);

  return (
    <div>
      {orders && (
        <div>
          <p>Ordered Data:</p>
          <ul>
            {orders.map((order) => (
              <li key={order.orderId}>Order ID: {order.orderId}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
export default OrdersList;
