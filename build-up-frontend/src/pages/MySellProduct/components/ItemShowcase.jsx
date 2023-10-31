import React from 'react';
import '../../../scss/homepage/homepage.scss';
import '../../../scss/my_sell_product/my_sell_product.scss';

function ItemShowcase({ name, price}) {
  return (
    <div className="item-slot">
      <div>
            <img
                className="img_shoe"
                src={require('./../../../images/Rectangle 17.png')}
            />
      </div>
      <div>
        <div className="textdes mt-3">
          <p className="fs-5" style={{fontWeight: 500}}>{name}</p>
          <div className="fs-5" style={{fontWeight: 900}}>{price/1000},000.-</div>
        </div>
      </div>
    </div>
  );
}

export default ItemShowcase;