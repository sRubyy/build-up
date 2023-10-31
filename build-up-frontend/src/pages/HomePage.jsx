import React from 'react';
import '../scss/homepage/homepage.scss';
import BrandSwiper from '../components/homepage/BrandSwiper';
import { ItemShowcaseList } from '../components/homepage/ItemShowcaseList';
import newArrivalItem from '../data/new-arrival-item.json';
import justDropItem from '../data/just-drop-item.json';
import HalloweenBanner from '../images/banner_halloween.png';

function HomePage() {
  return (
    <div>
      <div className={'banner'}>
        <img className="banner-homepage" src={HalloweenBanner} alt={''} />
      </div>
      <div className="body-homepage">
        <BrandSwiper />
        <div className="promote-block">
          <div>
            <h1 className="promote-block__title">New Arrival</h1>
            <p className="promote-block__sub-title">
              All Shoes already ready to ship! Don’t hesitate to buy it
            </p>
          </div>
          <ItemShowcaseList items={newArrivalItem} />
          <div className={'just-drop'}>
            <div className={'just-drop__text'}>JUST DROPPED</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M4 12.5H20M20 12.5L14 18.5M20 12.5L14 6.5"
                stroke="#252525"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <ItemShowcaseList items={justDropItem} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
