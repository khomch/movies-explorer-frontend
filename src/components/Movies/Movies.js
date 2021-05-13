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
        <SearchForm/>
        <Preloader/>
        <MoviesCardList/>
        <Footer />  
    </div>
  );
}

export default Movies;