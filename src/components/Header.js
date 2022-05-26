import mainLogo from '../images/logo_main.svg';

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <img className="header__logo" src={mainLogo} alt="Логотип" />
      </div>
    </header>
  );
}

export default Header;