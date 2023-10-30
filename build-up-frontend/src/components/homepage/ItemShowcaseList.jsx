import ItemShowcase from './ItemShowcase';
import React from 'react';

export const ItemShowcaseList = ({ items }) => {
  return (
    <div className={'item-showcase-list'}>
      {items.map((item) => (
        <ItemShowcase
          name={item.name}
          price={item.price}
          imageUrl={item.imageUrl}
        />
      ))}
    </div>
  );
};
