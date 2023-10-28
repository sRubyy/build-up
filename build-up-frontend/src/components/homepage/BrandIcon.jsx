import React from 'react';
import '../../scss/homepage/homepage.scss';

function BrandIcon({ name }) {
  return (
    <div className="brand-slot">
      <div className="brand-slot__icon"></div>
      <div className="brand-slot__font">{name}</div>
    </div>
  );
}

export default BrandIcon;
