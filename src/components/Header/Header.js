import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo.svg';
import profileIcon from '../../images/icon-account.svg';


function Header(props) {

  // подписываемся на контекст о пользователе хуком 
  
  const location = useLocation();
  return (
    <>
        {location.pathname === "/movies"
          ? 
          <header className="header">
            <Link className="header__logo" to="/"><img src={logo} alt="Логотип сайта"/></Link>
            <ul className="header__user-menu header__user-menu_hidden">
              <li className="header__list-link"><Link className="header__button-link header__button-link_active" to="/movies">Фильмы</Link></li>
              <li className="header__list-link"><Link className="header__button-link" to="/saved-movies">Сохраненные фильмы</Link></li>
            </ul>
            <Link className="header__button-profile header__button-profile_hidden" to="/profile"><img src={profileIcon} alt="Вход в аккаунт" className="header__button-profile-icon"/> <p className="header__button-profile-text" >Аккаунт</p></Link>
            <button type="button" className="header__open-menu" onClick={props.openMobileMenu}/>
          </header>
          : 
          ""
        }

        {location.pathname === "/saved-movies"
          ? 
          <header className="header">
            <Link className="header__logo" to="/"><img src={logo} alt="Логотип сайта"/></Link>
            <ul className="header__user-menu header__user-menu_hidden">
              <li className="header__list-link"><Link className="header__button-link" to="/movies">Фильмы</Link></li>
              <li className="header__list-link"><Link className="header__button-link header__button-link_active" to="/saved-movies">Сохраненные фильмы</Link></li>
            </ul>
            <Link className="header__button-profile header__button-profile_hidden" to="/profile"><img src={profileIcon} alt="Вход в аккаунт" className="header__button-profile-icon"/> <p className="header__button-profile-text" >Аккаунт</p></Link>
            <button type="button" className="header__open-menu" onClick={props.openMobileMenu}/>
          </header>
          : 
          ""
        }

        {(location.pathname === "/signin" || location.pathname === "/signup") 
          ? 
          <header className="header header_centered">
            <Link className="header__logo" to="/"><img src={logo} alt="Логотип сайта"/></Link>
          </header>
          : 
          ""
        }


          {location.pathname === "/profile" 
          ? 
          <header className="header">
            <Link className="header__logo" to="/"><img src={logo} alt="Логотип сайта"/></Link>
            <ul className="header__user-menu header__user-menu_hidden">
              <li className="header__list-link"><Link className="header__button-link" to="/movies">Фильмы</Link></li>
              <li className="header__list-link"><Link className="header__button-link" to="/saved-movies">Сохраненные фильмы</Link></li>
            </ul>
            <Link className="header__button-profile header__button-profile_hidden" to="/profile"><img src={profileIcon} alt="Вход в аккаунт" className="header__button-profile-icon"/> <p className="header__button-profile-text" >Аккаунт</p></Link>
            <button type="button" className="header__open-menu" onClick={props.openMobileMenu}/>
          </header>
          : 
          ""
        }

        {location.pathname === "/"
          ?
          <header className="header">
            <Link className="header__logo" to="/"><img src={logo} alt="Логотип сайта"/></Link>
            <div className="header__menu">
              <Link className="header__button-register" to="/signup">Регистрация</Link> 
              <Link className="header__button-signin" to="/signin">Войти</Link>
            </div>
            </header>
          : 
          ""
        }
      
      <div className={`header__mobilemenu ${props.mobileMenuIsOpen ? "header__mobilemenu_opened" : ""}`}>
        <div className="header__mobilemenu-container">
        <button className="header__mobilemenu_close-icon" type="button" aria-label="Закрыть" onClick={props.onMobileMenuClose}/>
        <ul className="header__user-menu">
            <li className="header__list-link"><Link className="header__button-link" to="/" onClick={props.onMobileMenuClose}>Главная</Link></li>
            <li className="header__list-link"><Link className="header__button-link" to="/movies" onClick={props.onMobileMenuClose}>Фильмы</Link></li>
            <li className="header__list-link"><Link className="header__button-link" to="/saved-movies" onClick={props.onMobileMenuClose}>Сохраненные фильмы</Link></li>
            </ul>
            <Link className="header__button-profile" to="/profile" onClick={props.onMobileMenuClose}><img src={profileIcon} alt="Вход в аккаунт" className="header__button-profile-icon"/> <p className="header__button-profile-text" >Аккаунт</p></Link>
        </div>
      </div>
          
    </>
  );
}

export default Header;