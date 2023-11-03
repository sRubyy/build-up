import '../../../scss/product_description/size_selection.scss';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../../../store/state-slices/shopping-cart-slice';

export const SizePool = (props) => {
  const [sizePool, setSizePool] = useState([]);
  const dispatch = useDispatch();

  const { productName } = useParams();
  const baseUrl = 'http://localhost:8080';
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();

  const selectItem = (item) => {
    setSelectedItem(item);
  };

  const addToCartButtonStyle = () => {
    return selectedItem
      ? 'button-container__button'
      : 'button-container__button--disable';
  };

  const checkoutButtonStyle = () => {
    return selectedItem
      ? 'button-container__button--green'
      : 'button-container__button--disable';
  };

  const addToCart = () => {
    if (selectedItem) {
      dispatch(addItem({ item: selectedItem, quantity: 1 }));
      setSelectedItem(null);
    }
  };

  const checkout = () => {
    if (selectedItem) {
      dispatch(addItem({ item: selectedItem, quantity: 1 }));
      setSelectedItem(null);
      navigate('/checkout');
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          `${baseUrl}/api/product/findBySizeWithMinPriceAndIsBrandNew/${productName}`
        );

        const data = await res.json();
        setSizePool(
          data
            .sort((a, b) => Number(a.size) - Number(b.size))
            .filter((item) => item.isBrandNew === props.isBrandNew)
        );
      } catch (e) {
        setSizePool([]);
      }
    };

    fetchProducts();
  }, [productName, props.isBrandNew]);

  const selectedStyle = (id) => {
    if (selectedItem) {
      return selectedItem.id === id
        ? 'select-type__selected-box'
        : 'select-type__box';
    }
    return 'select-type__box';
  };

  return (
    <>
      <div className={'select-type__second-desc'}>
        <div className={'select-type__size-desc'}>Size (US Unisex)</div>
        <div className={'select-type__size-chart'}>Size Chart</div>
      </div>
      <div className={'select-type__size-pool'}>
        {sizePool.length !== 0 ? (
          sizePool.map((each) => {
            return (
              <div
                key={each.id}
                className={selectedStyle(each.id)}
                onClick={() => setSelectedItem(each)}
              >
                <div>
                  <div className={'select-type__box--size'}>US {each.size}</div>
                  <div className={'select-type__box--price'}>
                    {each.price}.-
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className={'select-type__no-item'}>
            Sorry, there is no related item...
          </div>
        )}
      </div>
      <div className={'button-container'}>
        <div className={addToCartButtonStyle()} onClick={addToCart}>
          Add to cart
        </div>
        <div className={checkoutButtonStyle()} onClick={checkout}>
          Checkout
        </div>
      </div>
    </>
  );
};
