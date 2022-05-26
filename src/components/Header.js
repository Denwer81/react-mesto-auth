import { Link } from 'react-router-dom';
import mainLogo from '../images/logo_main.svg';

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <img className="header__logo" src={mainLogo} alt="Логотип" />
        <div className="header__auth auth">
          <span className="auth__text">ya@test.ru</span>
          <Link to="/sing-up" className="auth__link">Регистрация</Link>
          <Link to="/sing-in" className="auth__link">Войти</Link>
          <Link to="/" className="auth__link">Выйти</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;