import React from 'react';
import '../../scss/homepage/homepage.scss';
import BrandIcon from './BrandIcon';

function BrandSwiper() {
  const brands = ['Nike', 'Adidas', 'New Balance', 'Gucci', 'Chanel', 'Celine'];

  return (
    <div className="brand-swiper">
      {brands.map((brand) => (
        <BrandIcon name={brand} />
      ))}
    </div>
  );
}

export default BrandSwiper;
