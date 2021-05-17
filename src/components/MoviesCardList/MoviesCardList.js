import MoviesCard from '../MoviesCard/MoviesCard.js';
import { useLocation } from 'react-router-dom';


function MoviesCardList(props) {

  const location = useLocation();

  return (
   <>
      {location.pathname === "/movies"
      ?
        
        <div className="moviescardlist__container">
          <ul className="moviescardlist__cards">
            {props.filteredMovies.length === 0 ? "Ничего не найдено" : 
            
            
              props.filteredMovies.map((movie) => (
                <MoviesCard
                  movie={movie}
                  key={movie._id || movie.id} 
                  id={movie.id}
                  nameRU={movie.nameRU} 
                  image={movie.image}
                  duration={movie.duration}
                  onMovieLike={props.onMovieLike}
                  savedMovies={props.savedMovies}
                  onMovieDelete={props.onMovieDelete}
                />
              ))
            
            }

          </ul>
          {props.filteredMovies.length < 3 
            ? "" 
            : <button className={props.isAllMoviesRendered ? "moviescardlist__showmore moviescardlist__showmore_hidden" :"moviescardlist__showmore"} onClick={props.handleShowMoreClick}>Ещё</button>}
        </div>
      
      : ""
      }
      {location.pathname === "/saved-movies"
        ? <div className="moviescardlist__container">
          <ul className="moviescardlist__cards">
            {
              props.movies.map((movie) => (
                <MoviesCard
                  movie={movie}
                  key={movie._id || movie.id} 
                  id={movie.id}
                  nameRU={movie.nameRU} 
                  image={movie.image}
                  duration={movie.duration}
                  onMovieLike={props.onMovieLike}
                  savedMovies={props.savedMovies}
                  onMovieDelete={props.onMovieDelete}
                />
              ))
            }
              
          </ul>
          </div>
          : ""
        }
    </>
  );
}

export default MoviesCardList;