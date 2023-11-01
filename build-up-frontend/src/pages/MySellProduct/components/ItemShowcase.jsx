import React from 'react';
import '../../../scss/homepage/homepage.scss';
import '../../../scss/my_sell_product/my_sell_product.scss';
import { useNavigate } from 'react-router';

function ItemShowcase({ item }) {
    const navigate = useNavigate()
    const handleClick = () => {
        const data = {
            item: item
        };

        navigate('/editProduct', { state: { data } });
    }
  return (
    <div className="item-slot"  onClick={handleClick}>
      <div>
            <img
                className="img_shoe"
                src={require('./../../../images/Rectangle 17.png')}
            />
      </div>
      <div>
        <div className="textdes mt-3">
          <p className="fs-5" style={{fontWeight: 500}}>{item.name}</p>
          <div className="fs-5" style={{fontWeight: 900}}>{item.price/1000},000.-</div>
        </div>
      </div>
    </div>
  );
}

export default ItemShowcase;