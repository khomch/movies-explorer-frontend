import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from '../Main/Main.js'
import Movies from '../Movies/Movies.js'
import SavedMovies from '../SavedMovies/SavedMovies.js'
import Profile from '../Profile/Profile.js'
import Register from '../Register/Register.js'
import Login from '../Login/Login.js'
import NoMatch from '../NoMatch/NoMatch.js'
import moviesApi from '../../utils/MoviesApi.js';
import mainApi from '../../utils/MainApi.js';
import Preloader from '../Preloader/Preloader.js';
import * as auth from '../../utils/auth.js';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.js';
import CurrentUserContext from '../../context/CurrentUserContext';
import { useWindowSize } from "use-window-size-hook";



function App() {
  // хук для измерения ширины окна браузера
  const {
    width,
  } = useWindowSize();

  // стейт с шириной экрана
  const [screenWidth, setScreenWidth] = React.useState('');
  

  React.useEffect(() => {
    setScreenWidth(width)
  }, [width])

    // функция для определения количества карточек в зависимости
  // от ширины экрана
  const increaseCounterBy = () => {
    if (screenWidth > 1027) { 
      return 3 
    }
      else if (611 > screenWidth) {
        return 5
      }
      else if (1027 > screenWidth) {
        return 4
      }
    };



    const initialNumberOfMoviesByWidth = () => {
      if (screenWidth > 1027) { 
        return 3 
      }
        else if (611 > screenWidth) {
          return 5
        }
        else if (1027 > screenWidth) {
          return 8
        }
      };

  // устанавливаем стейты аутентификации


  const [loggedIn, setLoggedIn] = useState(null);
  const [userData, setUserData] = useState({
    email: '',
    name: ''
  });


  // стейт для определения пользоателя
  const [currentUser, currentUserUpdate] = React.useState({});

  const handleUserData = (data) => {

    mainApi.setProfileInfo(data)
    .then((data) => {
      if (data.ok) {
        setInfoTooltipPopupOpen(true)
        data.json().then(result => {
          currentUserUpdate({
            email: result.email,
            name: result.name
          })
        })
      } else {
          data.json().then(result => setErrorMessage(result.message))
        return
      }

    })
  }
  


  // получаем инфу о фильмах
  const  [movies, setMovies] =  React.useState([]);
  const  [savedMovies, setSavedMovies] =  React.useState([]);

  // стейт с запросом из поисковой строки
  const [title, setTitle] = React.useState('');


  const localStoragedFilms = JSON.parse(localStorage.getItem('localStoragedMovies'));

  // стейт с фильмами из локал сторежджа
  const locallyStoragedTitle = JSON.parse(localStorage.getItem('title'));
  
  // стейт с фильмами после запроса
  const [foundMovies, setFoundMovies ] = React.useState([]);

  // стейт с отфильтрованными фильмами
  const [filteredMovies, setFilteredMovies ] = React.useState([]);


  const checkIfLocalMoviesExists = React.useCallback(
    () => {
      if (localStoragedFilms) {
        
        setMovies(localStoragedFilms)
        setFoundMovies(localStoragedFilms.filter((movie) => (movie.nameRU.toLowerCase() || movie.description.toLowerCase()).includes(locallyStoragedTitle.toLowerCase())))
        
        setCountTo(initialNumberOfMoviesByWidth() + increaseCounterBy())
        handleSavedMoviesSearch()
      } else {
        moviesApi.getMovies()
        .then(data => {
          setMovies(data)
          localStorage.setItem('localStoragedMovies', JSON.stringify(data));
          })
        .catch((err) => 'Ошибка: ' + err)
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [localStoragedFilms, filteredMovies, foundMovies, movies]
  )
  
  React.useEffect(()=> {
    setFilteredMovies(foundMovies.slice(0, initialNumberOfMoviesByWidth()))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[foundMovies])

 

  


  // стейт со счетчиком 
  const [countTo, setCountTo] = React.useState(increaseCounterBy());

  // стейт для текста ошибки с сервера
  const [errorMessage, setErrorMessage] = React.useState('')

  const  [infoTooltipPopupOpen, setInfoTooltipPopupOpen] = React.useState(false);

  const handleRegister = (name, email, password, history) => {
    auth.register(name, email, password)
    .then((data) => {
      if (data.ok) {
        handleLogin(email, password, history)
        
      } else {
          data.json().then(result => setErrorMessage(result.message))
          return
      }
    })
    .catch(err => 'Ошибка: ' + err)
  }  

  const handleLogin = (email, password, history) => {
    auth.authorize(email, password)
    .then((data) => {
      if (!data.token) {
        setErrorMessage(data.message)
        return
      }
      if (data.token) {
        localStorage.setItem('token', data.token);
        setLoggedIn(true);
        proceedSignIn();
        tokenCheck();
        history.push('/movies');
      }
      if (data.status === 400){
        throw new Error ('Введены некорректные данные')
      }
    })
    .catch(err => 'Ошибка: ' + err) 
  }
  

  const proceedSignIn = React.useCallback(() => { 
    if (loggedIn === true) {
      mainApi.getProfileInfo()
      .then(data => {
        currentUserUpdate(data);
        setUserData(userData => ({
          ...userData,
          name: data.name,
          email: data.email 
        }));
      })
      .catch((err) => 'Ошибка: ' + err)

      checkIfLocalMoviesExists()
  

      mainApi.getSavedMovies()
        .then((data) => {
          setSavedMovies(data)
        })
    }
  }, 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [loggedIn]);

  const proceedSignOut = React.useCallback(() => {
    setUserData(setLoggedIn(false)); 
    setMovies([]); 
  }, 
  []);

  React.useEffect(() => { 
    loggedIn 
    ? proceedSignIn()
    :  proceedSignOut();
    }, 
  [loggedIn, proceedSignIn, proceedSignOut]);

 

  const tokenCheck = React.useCallback(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      return proceedSignOut()
    } else {
      setLoggedIn(true)
    }
  }, [proceedSignOut])

  useEffect(() => {
    tokenCheck();
  }, [tokenCheck])


  const handleSignOut = () => {
    setLoggedIn(false);
    localStorage.removeItem('token');
    setUserData('');
    currentUserUpdate('')
    setFilteredMovies([])
    localStorage.setItem('storagedFilteredMovies', JSON.stringify([]))
    localStorage.setItem('title', JSON.stringify(''))
    localStorage.removeItem('localStoragedMovies')
  }


  // стейт для окна мобильного меню
  const  [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  
  // обработчики открытия меню
  const handleOpenMobileMenuClick = () => {
    setMobileMenuOpen(true);
  };
  
  // обработчик закрытия попапов
  const closeAllPopups = () => {
    setMobileMenuOpen(false)
    setInfoTooltipPopupOpen(false)
  }

  const handleMovieLike = (movie) => {
    mainApi.addMovie(movie)
      .then((data) => {
        updateSavedMovies()
      })
  }

    const handleMovieDelete = (movie) => {
    const movieId = (movie) => {
      if (movie.movieId === undefined) {
        return movie.id
      } else {
        return movie.movieId
      }
    }
    const savedMovie = savedMovies.filter(i => i.movieId === movieId(movie))
    mainApi.deleteMovies(savedMovie[0]._id)
      .then((data) => {
        updateSavedMovies()
      })
  }

  const updateSavedMovies = () => {
    mainApi.getSavedMovies()
      .then((data) => {
        setSavedMovies(data)
      })
  }

  const [isAllMoviesRendered, setIsAllMoviesRendered] = React.useState(false)


  


  // стейт количества найденых фильмов
  

  const handleSearch = (data) => {
    localStorage.setItem('title', JSON.stringify(data.title))
    setTitle(data.title)
    const moviesArray = (movies.filter((movie) => (movie.nameRU.toLowerCase() || movie.description.toLowerCase()).includes(data.title.toLowerCase())))
    setFoundMovies(moviesArray)
    checkIfAllMoviesRendered()
    setFilteredMovies(moviesArray.slice(0, initialNumberOfMoviesByWidth()))
    setCountTo(initialNumberOfMoviesByWidth() + increaseCounterBy())
    setIsShortFilmsFilterOn(false)
  }  
  
  const [savedMoviesInitialArray, setSavedMoviesInitialArray] = React.useState([])
  const handleSavedMoviesSearch = (data) => {
    setSavedMoviesInitialArray(savedMovies)
    const moviesArray = (savedMovies.filter((movie) => (movie.nameRU.toLowerCase() || movie.description.toLowerCase()).includes(data.title.toLowerCase())))
    setSavedMovies(moviesArray)
    
  } 

  const sliceFilteredMovies = () => {
    setFilteredMovies(foundMovies.slice(0, countTo))
  }

  const checkIfAllMoviesRendered = React.useCallback(() => {
    if (foundMovies.length === filteredMovies.length) {
      return setIsAllMoviesRendered(true)
    }
    else {
      return setIsAllMoviesRendered(false)
    }
  }, [foundMovies.length, filteredMovies.length])
  
  React.useEffect(() => {
    checkIfAllMoviesRendered()
  }, [checkIfAllMoviesRendered])

  // стейт для определения нажат ли чекбокс для короткометражек
  const [isShortFilmsFilterOn, setIsShortFilmsFilterOn] = React.useState(false)

  const handleShortMoviesFilter = () => {
    if (!isShortFilmsFilterOn) {
      const shortMovies = foundMovies.filter((movie) => movie.duration < 40)
      setFoundMovies(shortMovies)
      setFilteredMovies(shortMovies.slice(0, initialNumberOfMoviesByWidth()))
      setCountTo(initialNumberOfMoviesByWidth() + increaseCounterBy())
      setIsShortFilmsFilterOn(true)
    } else {
      const moviesArray = (movies.filter((movie) => (movie.nameRU.toLowerCase() || movie.description.toLowerCase()).includes(title.toLowerCase())))
      setFoundMovies(moviesArray)
      checkIfAllMoviesRendered()
      setFilteredMovies(moviesArray.slice(0, initialNumberOfMoviesByWidth()))
      setCountTo(initialNumberOfMoviesByWidth() + increaseCounterBy())
      setIsShortFilmsFilterOn(false)
    }
  }

  
  const handleShortMoviesFilterOnSavedMovies = () => {
    if (!isShortFilmsFilterOn) {
      setSavedMoviesInitialArray(savedMovies)
      const shortMovies = savedMovies.filter((movie) => movie.duration < 40)
      setSavedMovies(shortMovies)
      setIsShortFilmsFilterOn(true)
    } else {
      setSavedMovies(savedMoviesInitialArray)
      setIsShortFilmsFilterOn(false)
    }
  }


  const handleShowMoreClick = () => {
    checkIfAllMoviesRendered()
    sliceFilteredMovies()
    setCountTo(countTo + increaseCounterBy())
  }





  if (loggedIn === null) {
    return (
    <BrowserRouter>
      <div className="page">
        <Preloader/>
      </div>
    </BrowserRouter>
    )
  }

  return (
    <BrowserRouter>
    <CurrentUserContext.Provider value={currentUser}>
    <div className="page">

    <Switch>
    
      <Route exact path="/">
        <Main
          openMobileMenu={handleOpenMobileMenuClick}
          mobileMenuIsOpen={mobileMenuOpen}
          onMobileMenuClose={closeAllPopups}
        />
      </Route>

      <Route path="/signup">
        <Register 
          handleRegister={handleRegister}
          errorMessage={errorMessage}
          />
      </Route>

      <Route path="/signin">
        <Login 
          handleLogin={handleLogin}
          errorMessage={errorMessage}
        />
      </Route>

      <ProtectedRoute
        userData={userData} 
        loggedIn={loggedIn} 
        component={() =>  
        
        <Switch>
          <Route path="/movies">
            <Movies
              
              openMobileMenu={handleOpenMobileMenuClick}
              mobileMenuIsOpen={mobileMenuOpen}
              onMobileMenuClose={closeAllPopups}
              movies={movies}
              savedMovies={savedMovies}
              onMovieLike={handleMovieLike}
              onMovieDelete={handleMovieDelete}
              handleSearch={handleSearch}
              filteredMovies={filteredMovies}
              title={title}
              locallyStoragedTitle={locallyStoragedTitle}
              handleShowMoreClick={handleShowMoreClick}
              isAllMoviesRendered={isAllMoviesRendered}
              isShortFilmsFilterOn={isShortFilmsFilterOn}
              handleShortMoviesFilter={handleShortMoviesFilter}
              
            />
          </Route>

          <Route path="/saved-movies">
            <SavedMovies
              openMobileMenu={handleOpenMobileMenuClick}
              mobileMenuIsOpen={mobileMenuOpen}
              onMobileMenuClose={closeAllPopups}
              handleSearch={handleSavedMoviesSearch}

              savedMovies={savedMovies}
              onMovieDelete={handleMovieDelete}
              isShortFilmsFilterOn={isShortFilmsFilterOn}
              handleShortMoviesFilter={handleShortMoviesFilterOnSavedMovies}
            />
          </Route>

          <Route path="/profile">
            <Profile
              closeAllPopups={closeAllPopups}
              loggedIn={loggedIn} 
              isOpen={infoTooltipPopupOpen}
              openMobileMenu={handleOpenMobileMenuClick}
              mobileMenuIsOpen={mobileMenuOpen}
              onMobileMenuClose={closeAllPopups}
              handleSignOut={handleSignOut}
              handleUserData={handleUserData}
              errorMessage={errorMessage}
            />
          </Route>

          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>

        }>
        
      </ProtectedRoute>


      
      </Switch>
      </div>
    </CurrentUserContext.Provider>
    </BrowserRouter>
  )
}

export default App;
