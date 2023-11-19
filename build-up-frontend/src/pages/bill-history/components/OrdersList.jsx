import '../../../scss/bill-history/bill_history.scss';
function OrdersList({ orders, onSelect }) {
  const ids = Object.keys(orders).sort((a, b) => b - a);

  const calculatePrice = (id) => {
    const totalPrice = orders[id].items.reduce((price, item) => {
      return price + item.price;
    }, 0);

    return Number((totalPrice + totalPrice * 0.1).toFixed(2));
  };

  const formatDate = (dateString) => {
    const dateObject = new Date(dateString);

    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    };

    return dateObject.toLocaleDateString(undefined, options);
  };

  return (
    <div className={'order-list__each-container'}>
      {ids.map((id) => {
        return (
          <div
            className={'order-list__each'}
            onClick={() => onSelect(orders[id].items)}
          >
            <div className={'order-id-text'}>Order ID: {id}</div>
            <div className={'order-desc-text'}>Status: Ordered</div>
            <div className={'order-desc-text'}>
              Purchase Date: {formatDate(orders[id].items[0].purchaseDate)}
            </div>
            <div className={'order-desc-text'}>
              Total Price: {calculatePrice(id)}.-
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default OrdersList;
