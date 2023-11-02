import '../../../scss/product_description/size_selection.scss';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../../../store/state-slices/shopping-cart-slice';

export const SizePool = (props) => {
  const [sizePool, setSizePool] = useState([]);
  const dispatch = useDispatch();

  const { productName } = useParams();
  const baseUrl = 'http://localhost:8080';
  const [selectedItem, setSelectedItem] = useState(null);

  const selectItem = (item) => {
    setSelectedItem(item);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(
        `${baseUrl}/api/product/findBySizeWithMinPriceAndIsBrandNew/${productName}`
      );

      const data = await res.json();
      setSizePool(
        data
          .sort((a, b) => Number(a.size) - Number(b.size))
          .filter((item) => item.isBrandNew === props.isBrandNew)
      );
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
        {sizePool.map((each) => {
          return (
            <div
              key={each.id}
              className={selectedStyle(each.id)}
              onClick={() => setSelectedItem(each)}
            >
              <div>
                <div className={'select-type__box--size'}>US {each.size}</div>
                <div className={'select-type__box--price'}>
                  {each.minPrice}.-
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={'button-container'}>
        <div className={'button-container__button'}>Add to cart</div>
        <div className={'button-container__button--green'}>Checkout</div>
      </div>
    </>
  );
};
