import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import SearchForm from '../SearchForm/SearchForm.js';
import Preloader from '../Preloader/Preloader.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';

function SavedMovies(props) {

  return (

    <div className="saved-movies">
        <Header
          openMobileMenu={props.openMobileMenu}
          mobileMenuIsOpen={props.mobileMenuIsOpen}
          onMobileMenuClose={props.onMobileMenuClose}
        />
        <SearchForm/>
        <Preloader/>
        <MoviesCardList/>
        <Footer />  
    </div>
  );
}

export default SavedMovies;