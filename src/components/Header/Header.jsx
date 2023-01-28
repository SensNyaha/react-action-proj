import logo from "./logo.svg";
import smallLogo from "./small-logo.svg";

import "./Header.scss";

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <img
                    src={logo}
                    alt="Логотип компании"
                    className="header__logo-img"
                />
            </div>
            <button className="header__login">
                <img
                    src={smallLogo}
                    alt="Мал. лого"
                    className="header__login-img"
                />
                <span className="header__login-text">Вход или регистрация</span>
            </button>
        </header>
    );
};

export default Header;
