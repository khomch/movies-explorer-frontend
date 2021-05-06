import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from '../Main/Main.js'
import Movies from '../Movies/Movies.js'
import SavedMovies from '../SavedMovies/SavedMovies.js'
import Profile from '../Profile/Profile.js'
import Register from '../Register/Register.js'
import Login from '../Login/Login.js'
import NoMatch from '../NoMatch/NoMatch.js'

function App() {
  return (
    <BrowserRouter>
    <div className="page">

    <Switch>
    
      <Route exact path="/">
        <Main/>
      </Route>

      <Route path="/movies">
        <Movies/>
      </Route>

      <Route path="/saved-movies">
        <SavedMovies/>
      </Route>

      <Route path="/profile">
        <Profile/>
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
