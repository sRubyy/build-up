import ItemShowcase from './ItemShowcase';
import React from 'react';
import { useNavigate } from 'react-router-dom';
export const ItemShowcaseList = ({ items }) => {
  const navigate = useNavigate();
  function link() {
    navigate('/productDescription');
  }
  return (
    <div className={'item-showcase-list'}>
      {items.map((item) => (
        <div onClick={link}>
          <ItemShowcase
            name={item.name}
            price={item.price}
            imageUrl={item.imageUrl}
          />
        </div>
      ))}
    </div>
  );
};
