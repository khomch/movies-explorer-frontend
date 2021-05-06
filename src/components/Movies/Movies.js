import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import SearchForm from '../SearchForm/SearchForm.js';
import Preloader from '../Preloader/Preloader.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';

function Movies(props) {
  return (

    <div className="movies">
        <Header/>
        <SearchForm/>
        <Preloader/>
        <MoviesCardList/>
        <Footer />  
    </div>
  );
}

export default Movies;