import {itemImageMapping} from "../../../config/item_image_mapping";
import React, { useEffect, useState } from 'react';
import Cookies from "universal-cookie";

function OrdersList(){
    const [orderedData, setOrderedData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const apiUrl = 'http://localhost:8080/api/order/findOrderByToken';
        const token = {token: new Cookies().get('loginToken')};

        fetch(apiUrl, {
            method: 'POST',
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify(token),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status} Need to login first`);
                }
                return response.json();
            })
            .then((data) => {
                setOrderedData(data.data);
            })
            .catch((error) => {
                setError(error.message);
            });
    }, []);

    return (
        <div>
            {error && <p>Error: {error}</p>}
            {orderedData && (
                <div>
                    <p>Ordered Data:</p>
                    <ul>
                        {orderedData.data.map((order) => (
                            <li key={order.order_id}>
                                Order ID: {order.order_id}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
export default OrdersList;
