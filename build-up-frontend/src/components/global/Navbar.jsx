import React from 'react';
import '../../scss/global/navbar.scss';

function Navbar() {
  return (
    <div className="global-nav">
      <div className="global-nav__left global-nav__left--branding-text">
        Buildup
      </div>
      <div className="global-nav__center">
        <input
          className="global-nav__input"
          type="text"
          placeholder="search your style here"
        />
        <div className="global-nav__search-icon"></div>
      </div>
      <div className="global-nav__right">
        <div className="global-nav__cart-icon"></div>
        <div>Sign up</div>
        <div>Log in</div>
      </div>
    </div>
  );
}

export default Navbar;
