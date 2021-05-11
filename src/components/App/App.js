import React, { useEffect, useState, useCallback } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from '../Main/Main.js'
import Movies from '../Movies/Movies.js'
import SavedMovies from '../SavedMovies/SavedMovies.js'
import Profile from '../Profile/Profile.js'
import Register from '../Register/Register.js'
import Login from '../Login/Login.js'
import NoMatch from '../NoMatch/NoMatch.js'
import Header from '../Header/Header.js'



function App() {

  // стейт для окна мобильного меню
  const  [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  
  // обработчики открытия меню
  const handleOpenMobileMenuClick = () => {
    setMobileMenuOpen(true);
  };
  
  // обработчик закрытия попапов
  const closeAllPopups = () => {
    setMobileMenuOpen(false)
  }

  return (
    <BrowserRouter>
    <div className="page">

    <Switch>
    
      <Route exact path="/">
        <Main
          openMobileMenu={handleOpenMobileMenuClick}
          mobileMenuIsOpen={mobileMenuOpen}
          onMobileMenuClose={closeAllPopups}
        />
      </Route>

      <Route path="/movies">
        <Movies
          openMobileMenu={handleOpenMobileMenuClick}
          mobileMenuIsOpen={mobileMenuOpen}
          onMobileMenuClose={closeAllPopups}
        />
      </Route>

      <Route path="/saved-movies">
        <SavedMovies
          openMobileMenu={handleOpenMobileMenuClick}
          mobileMenuIsOpen={mobileMenuOpen}
          onMobileMenuClose={closeAllPopups}
        />
      </Route>

      <Route path="/profile">
        <Profile
          openMobileMenu={handleOpenMobileMenuClick}
          mobileMenuIsOpen={mobileMenuOpen}
          onMobileMenuClose={closeAllPopups}
        />
      </Route>

      <Route path="/signup">
        <Register/>
      </Route>

      <Route path="/signin">
        <Login/>
      </Route>

      <Route path="*">
        <NoMatch />
      </Route>
      
      </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
