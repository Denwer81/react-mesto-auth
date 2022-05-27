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
      <nav className={`header__burger-menu ${isOpen && loggedIn ? 'header__burger-menu_active' : ''}`}>
        <span className="header__text">ya@test.ru</span>
        <NavLink exact to="/snig-in" className="header__link" activeClassName='header__link_active'>Выйти</NavLink>
      </nav>
      <div className={`header__container ${loggedIn ? 'header__container_burger-active' : ''}`}>
        <img className="header__logo" src={mainLogo} alt="Логотип" />
        <nav className={`header__nav ${loggedIn ? 'header__nav_burger-active' : ''}`}>
          <span className="header__text">ya@test.ru</span>
          <NavLink to="/snig-up" className="header__link" activeClassName='header__link_active'>Регистрация</NavLink>
          <NavLink to="/snig-in" className="header__link" activeClassName='header__link_active'>Войти</NavLink>
          <NavLink exact to="/snig-in" className="header__link" activeClassName='header__link_active'>Выйти</NavLink>
        </nav>
        <button
          className={`burger-btn ${loggedIn ? 'burger-btn_active' : ''}`}
          type='button'
          onClick={handleBtnClick}>
          <span className={`burger-btn__item ${isOpen ? 'burger-btn__item_close' : ''}`}></span>
        </button>
      </div>
    </header>
  );
}

export default Header;