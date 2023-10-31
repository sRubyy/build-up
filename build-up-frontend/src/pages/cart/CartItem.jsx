import '../../scss/my_cart/my_cart.scss';

function CartItem() {
  return (
    <div className={'cart-item'}>
      <div className={'cart-item__select-button'}></div>
      <img
        className={'cart-item__img'}
        src={
          'https://s3-alpha-sig.figma.com/img/a1ca/bce3/f9d8a54b80294640b0520b3bad10b3e5?Expires=1699833600&Signature=SlP0qMF53hAF5V4Oq8snEFxKYOfjDwn~wRv8A6pL-BTOEETN7alc9p-CpS2KAFCDpfjEQzXEDODpLGVb4R1tjTU4cgByXo-YN081uFl930aGE3o2cdmPa6xLqukS3J71HEj1H-EFfLl1D3TgOpFyp9PswjXF9LvylhTp0zGEgfkSwQco6FDseVpskuqK1WbvtE7UPb-NKuemSQwTrn-sw87-1qXbHjMWkHQp5H82Jm6leRKUu~J7xWgBBnVAK-WHr6ObxudDKRnPBcskcZGZ5HN5Nm8PpVmtpou2O5rZBrA5zQ-dYYIi4X3R50vc8SGhAuJhxvOdSxS1d9cClRYTFQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
        }
      ></img>
      <div className={'cart-item__info'}>
        <div className={'cart-item__name'}>
          New Balance 530 White Silver Navy
        </div>
        <div className={'cart-item__sub-name'}>NEW BALANCE | MR530SG</div>
        <div className={'cart-item__size'}>
          <div>Size:</div>
          <div className="dropdown">
            <button
              className="cart-item__dropdown dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              4 US
            </button>
            <ul className="dropdown-menu" style={{ width: '0px' }}>
              <li>
                <div className="cart-item__dropdown--item">5 US</div>
              </li>
              <li>
                <div className="cart-item__dropdown--item">5.5 US</div>
              </li>
              <li>
                <div className="cart-item__dropdown--item">6 US</div>
              </li>
            </ul>
          </div>
        </div>
        <div className={'cart-item__price'}>Price: 3,900.-</div>
      </div>
      <div className={'cart-item__amount'}>1 items</div>
    </div>
  );
}

export default CartItem;
