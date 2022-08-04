import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import SearchForm from '../SearchForm/SearchForm.js';
import Preloader from '../Preloader/Preloader.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';

function Movies(props) {
  
  return (

    <div className="movies">
      <Header
        openMobileMenu={props.openMobileMenu}
        mobileMenuIsOpen={props.mobileMenuIsOpen}
        onMobileMenuClose={props.onMobileMenuClose}
      />
      <SearchForm
        locallyStoragedTitle={props.locallyStoragedTitle}
        handleSearch={props.handleSearch}
        isShortFilmsFilterOn={props.isShortFilmsFilterOn}
        handleShortMoviesFilter={props.handleShortMoviesFilter}
      />

      {
        !props.movies
          ?
          <Preloader />
          :
          <MoviesCardList
            filteredMovies={props.filteredMovies}
            movies={props.movies}
            onMovieLike={props.onMovieLike}
            onMovieDelete={props.onMovieDelete}
            savedMovies={props.savedMovies}
            handleShowMoreClick={props.handleShowMoreClick}
            isAllMoviesRendered={props.isAllMoviesRendered}
          />

      }
      <Footer />
    </div>
  );
}

export default Movies;