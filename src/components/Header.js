import React from 'react';
import { NavLink } from 'react-router-dom';
import mainLogo from '../images/logo_main.svg';

function Header({ loggedIn }) {
  const [isOpen, setIsOpen] = React.useState(false);

  function handleBtnClick() {
    setIsOpen(!isOpen);
  }
  return (
    <header className="header">
      <div className={`header__container ${loggedIn ? 'header__container_burger-active' : ''}`}>
        <div className="header__wrapper">
          <img className="header__logo" src={mainLogo} alt="Логотип" />
          <button
            className={`burger-btn header__burger-btn ${loggedIn ? 'header__burger-btn_burger-active' : ''}`}
            type='button'
            onClick={handleBtnClick}>
            <span className={`burger-btn__item ${isOpen ? '' : 'burger-btn__item_close'}`}></span>
          </button>
        </div>
        <nav
          className={`header__nav ${loggedIn && isOpen ? 'header__nav_burger-active' : ''} ${loggedIn ? '' : 'header__nav_burger-no-logged'}`}>
          <span className="header__text">ya@test.ru</span>
          <NavLink to="/snig-up" className="header__link" activeClassName='header__link_active'>Регистрация</NavLink>
          <NavLink to="/snig-in" className="header__link" activeClassName='header__link_active'>Войти</NavLink>
          <NavLink exact to="/snig-in" className="header__link" activeClassName='header__link_active'>Выйти</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;