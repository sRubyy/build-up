import '../../../scss/product_description/size_selection.scss';
import React from 'react';

export const SizePool = () => {
  return (
    <>
      <div className={'select-type__second-desc'}>
        <div className={'select-type__size-desc'}>Size (US Unisex)</div>
        <div className={'select-type__size-chart'}>Size Chart</div>
      </div>
      <div className={'select-type__size-pool'}>
        {Array.from(Array(10), (e, i) => {
          return (
            <div key={i} className={'select-type__box'}>
              <div>
                <div className={'select-type__box--size'}>US 4</div>
                <div className={'select-type__box--price'}>4500.-</div>
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
