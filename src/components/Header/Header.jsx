import React from 'react';

const Header = () => {
  const logo = require("../../assets/img/icon/logo.svg").default;

  return (
    <header className='store-header'>
      <div className='container'>
        <div className='store-header__wrapper'>
          <a href='#'>
            <img src={logo} alt='logo' />
          </a>

          <label className='store-header__address'>
            <input type="text" className='input store-header__input-address' placeholder='shipping address' />
          </label>
          <div className='store-header__buttons'>
            <span className='store-header__user-name'>Login</span>

            <button className='button button-primary button-auth' onClick={null}>
              <span className='button-auth-svg'></span>
              <span className='button-text'>Log In</span>
            </button>

            <button className='button button-cart button-auth' onClick={null}>
              <span className='button-cart-svg'></span>
              <span className='button-text'>Cart</span>
            </button>

            <button className='button button-cart button-out' onClick={null}>
              <span className='button-out-svg'></span>
              <span className='button-text'>Sign Out</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;