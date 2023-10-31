import React from 'react';
import '../../scss/global/navbar.scss';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className="global-nav">
      <div className="global-nav__left">
        <Link className={'global-nav__left--branding-text'} to={'/'}>Buildup</Link>
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
        <img
          className="global-nav__cart-icon"
          src="image/icon/cart.png"
          alt=""
        />
        <div>Sign up</div>
        <div>Log in</div>
      </div>
    </div>
  );
}

export default Navbar;
