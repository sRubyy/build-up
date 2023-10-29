import React from 'react';
import '../../scss/homepage/homepage.scss';
import BrandIcon from './BrandIcon';

function BrandSwiper() {
  const brands = ['Nike', 'Adidas', 'New Balance', 'Gucci', 'Chanel', 'Celine'];

  return (
    <div className="swiper-container">
      <div className="swiper-container__brand">
        {brands.map((brand, index) => (
          <BrandIcon key={index} name={brand} />
        ))}
      </div>
    </div>
  );
}

export default BrandSwiper;
