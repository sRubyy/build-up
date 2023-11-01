import React from 'react';
import '../../scss/global/navbar.scss';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className="global-nav">
      <div className="global-nav__left">
        <Link className={'global-nav__left--branding-text'} to={'/'}>
          Buildup
        </Link>
      </div>
      <div className="global-nav__center">
        <input
          className="global-nav__input"
          type="text"
          placeholder="search your style here"
        />
        <img
          className="global-nav__search-icon"
          src="image/icon/search.png"
          alt=""
        />
      </div>
      <div className="global-nav__right">
        <Link to={'/my-cart'}>
          <img
            className="global-nav__cart-icon"
            src="image/icon/cart.png"
            alt=""
          />
        </Link>
        <Link to={'/register'} className={'global-nav__link'}>
          <div>Sign up</div>
        </Link>
        <Link to={'/sign-in'} className={'global-nav__link'}>
          <div>Log in</div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
