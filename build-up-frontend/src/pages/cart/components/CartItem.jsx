import '../../../scss/my_cart/my_cart.scss';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeItem } from '../../../store/state_slices/shopping-cart-slice';

function CartItem({
  productId,
  productName,
  productDescription,
  productSize,
  productPrice,
  productAmount,
  isBrandNew,
  isDeletable = true,
}) {
  const [isRemoveMode, setIsRemoveMode] = useState(false);
  const dispatch = useDispatch();

  const self = {
    id: productId,
    name: productName,
    description: productDescription,
    size: productSize,
    price: productPrice,
    quantity: productAmount,
  };

  const toggleRemoveMode = () => {
    setIsRemoveMode(!isRemoveMode);
  };

  useEffect(() => {
    setIsRemoveMode(false);
  }, [productId]);

  const CheckIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="gray"
      className="bi bi-check-square-fill"
      viewBox="0 0 16 16"
    >
      <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z" />
    </svg>
  );

  return (
    <div className={'cart-item'}>
      {!isRemoveMode && isDeletable && (
        <div className={'cart-item__select-button'}>{CheckIcon}</div>
      )}
      <img
        className={'cart-item__img'}
        src={
          'https://s3-alpha-sig.figma.com/img/a1ca/bce3/f9d8a54b80294640b0520b3bad10b3e5?Expires=1699833600&Signature=SlP0qMF53hAF5V4Oq8snEFxKYOfjDwn~wRv8A6pL-BTOEETN7alc9p-CpS2KAFCDpfjEQzXEDODpLGVb4R1tjTU4cgByXo-YN081uFl930aGE3o2cdmPa6xLqukS3J71HEj1H-EFfLl1D3TgOpFyp9PswjXF9LvylhTp0zGEgfkSwQco6FDseVpskuqK1WbvtE7UPb-NKuemSQwTrn-sw87-1qXbHjMWkHQp5H82Jm6leRKUu~J7xWgBBnVAK-WHr6ObxudDKRnPBcskcZGZ5HN5Nm8PpVmtpou2O5rZBrA5zQ-dYYIi4X3R50vc8SGhAuJhxvOdSxS1d9cClRYTFQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
        }
      ></img>
      <div className={'cart-item__info'}>
        <div
          className={'cart-item__name'}
          onClick={toggleRemoveMode}
          style={!isDeletable ? { cursor: 'initial' } : { cursor: 'pointer' }}
        >
          {productName}
        </div>
        <div className={'cart-item__sub-name'}>{productDescription}</div>
        <div className={'cart-item__size'}>
          <div>Size:</div>
          <div className="dropdown">
            <button
              className="cart-item__dropdown dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              disabled={!isDeletable}
            >
              {productSize} US
            </button>
            <ul
              className="size-dropdown-menu dropdown-menu"
              style={{ width: '0px' }}
            >
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
        <div className={'cart-item__tag'}>
          <div
            className={
              isBrandNew ? 'cart-item__tag--new' : 'cart-item__tag--used'
            }
          >
            {isBrandNew ? 'NEW' : 'USED'}
          </div>
        </div>
        <div className={'cart-item__price'}>Price: {productPrice}.-</div>
      </div>
      <div className={'cart-item__amount'}>{productAmount} items</div>
      {isRemoveMode && isDeletable && (
        <div
          className={'cart-item__delete-button'}
          onClick={() => dispatch(removeItem({ item: self, quantity: 1 }))}
        >
          Delete (-1)
        </div>
      )}
    </div>
  );
}

export default CartItem;
