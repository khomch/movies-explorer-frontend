import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';

function SavedMovies(props) {

  return (

    <div className="saved-movies">
        <Header
          openMobileMenu={props.openMobileMenu}
          mobileMenuIsOpen={props.mobileMenuIsOpen}
          onMobileMenuClose={props.onMobileMenuClose}
        />
        <SearchForm
          handleSearch={props.handleSearch}
          isShortFilmsFilterOn={props.isShortFilmsFilterOn}
          handleShortMoviesFilter={props.handleShortMoviesFilter}
          />
        <MoviesCardList
          movies={props.savedMovies}
          onMovieLike={props.onMovieLike}
          onMovieDelete={props.onMovieDelete}
          savedMovies={props.savedMovies}
          
        />
        <Footer />  
    </div>
  );
}

export default SavedMovies;