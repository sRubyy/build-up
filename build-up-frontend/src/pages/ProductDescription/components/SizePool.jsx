import '../../../scss/product_description/size_selection.scss';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const SizePool = (props) => {
  const [sizePool, setSizePool] = useState([]);

  const { productName } = useParams();
  const baseUrl = 'http://localhost:8080';

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

  return (
    <>
      <div className={'select-type__second-desc'}>
        <div className={'select-type__size-desc'}>Size (US Unisex)</div>
        <div className={'select-type__size-chart'}>Size Chart</div>
      </div>
      <div className={'select-type__size-pool'}>
        {sizePool.map((each, i) => {
          return (
            <div key={i} className={'select-type__box'}>
              <div>
                <div className={'select-type__box--size'}>US {each.size}</div>
                <div className={'select-type__box--price'}>{each.price}.-</div>
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
