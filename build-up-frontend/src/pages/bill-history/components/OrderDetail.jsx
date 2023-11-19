import CartItem from '../../cart/components/CartItem';

export const OrderDetail = ({ items }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {items.map((item, i) => (
        <div
          style={{
            borderBottom: '#d9d9d9 1px solid',
            paddingBottom: '32px',
          }}
        >
          <CartItem
            key={i}
            productId={item.productId}
            productName={item.name}
            productDescription={item.description}
            productSize={item.size}
            productPrice={item.price}
            productAmount={item.itemQuantity}
            isBrandNew={item.isBrandNew}
            isDeletable={false}
          />
        </div>
      ))}
    </div>
  );
};
