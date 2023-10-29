import React from 'react';
import '../scss/homepage/homepage.scss';
import BrandSwiper from '../components/homepage/BrandSwiper';

function HomePage() {
  return (
    <div>
      <div className="banner-homepage"></div>
      <div className="body-homepage">
        <BrandSwiper />
        <div className="promote-block">
          <div>
            <h1 className="promote-block__title">New Arrival</h1>
            <p className="promote-block__sub-title">
              All Shoes already ready to ship! Don’t hesitate to buy it
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
