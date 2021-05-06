import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo.svg';
import profileIcon from '../../images/icon-account.svg';

function Header(props) {
  const location = useLocation();
  return (

      <header className="header">
        <Link className="header__logo" to="/"><img src={logo} alt="Логотип сайта"/></Link>
          {location.pathname === "/movies"
          ? 
          <>
            <ul className="header__user-menu">
              <li className="header__list-link"><Link className="header__button-link header__button-link_active" to="/movies">Фильмы</Link></li>
              <li className="header__list-link"><Link className="header__button-link" to="/saved-movies">Сохраненные фильмы</Link></li>
            </ul>
            <Link className="header__button-profile" to="/profile"><img src={profileIcon} alt="Вход в аккаунт" className="header__button-profile-icon"/> <p className="header__button-profile-text" >Аккаунт</p></Link>
          </>
          : 
          ""
        }

          {location.pathname === "/saved-movies"
          ? 
          <>
            <ul className="header__user-menu">
              <li className="header__list-link"><Link className="header__button-link" to="/movies">Фильмы</Link></li>
              <li className="header__list-link"><Link className="header__button-link header__button-link_active" to="/saved-movies">Сохраненные фильмы</Link></li>
            </ul>
            <Link className="header__button-profile" to="/profile"><img src={profileIcon} alt="Вход в аккаунт" className="header__button-profile-icon"/> <p className="header__button-profile-text" >Аккаунт</p></Link>
          </>
          : 
          ""
        }


          {location.pathname === "/profile"
          ? 
          <>
            <ul className="header__user-menu">
              <li className="header__list-link"><Link className="header__button-link" to="/movies">Фильмы</Link></li>
              <li className="header__list-link"><Link className="header__button-link" to="/saved-movies">Сохраненные фильмы</Link></li>
            </ul>
            <Link className="header__button-profile" to="/profile"><img src={profileIcon} alt="Вход в аккаунт" className="header__button-profile-icon"/> <p className="header__button-profile-text" >Аккаунт</p></Link>
          </>
          : 
          ""
        }


        {location.pathname === "/"
          ? 
          <div className="header__menu">
            <Link className="header__button-register" to="/signup">Регистрация</Link> 
            <Link className="header__button-signin" to="/signin">Войти</Link>
          </div>
          : 
          ""
        }
        
          
        </header>
  );
}

export default Header;