import React from 'react';
import buttons from '../../utils/buttonsData';
import HeaderButton from './HeaderButton/HeaderButton';

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
            <HeaderButton {...buttons[0]} />
            <HeaderButton {...buttons[1]} />
            <HeaderButton {...buttons[2]} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;