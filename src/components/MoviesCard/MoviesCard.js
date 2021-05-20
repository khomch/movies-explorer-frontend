import { useLocation } from 'react-router-dom';

function MoviesCard(props) {
  const location = useLocation();

  const ifImageHasALink = (image) => {
    if (image === null || image === undefined ) {
      return "https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg"
    }
    else {
      return `https://api.nomoreparties.co${image.url}`
    }
  }

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = props.savedMovies.some(i => i.movieId === props.id);


    // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = (
    `moviescard__icon ${isLiked ? 'moviescard__icon_active' : ''}`
  ); ; 

  function handleMovieLike() {
    props.onMovieLike(props);
  } 

  function handleMovieDelete() {
    props.onMovieDelete(props);
  }

  function handleSavedMovieDelete() {
    const movie = props.movie;
    props.onMovieDelete(movie);
  }

  function getDurationFromMinutes(duration) {
    const hours = Math.floor(duration / 60)
    const minutes = duration - (hours * 60)

    return hours + "ч " + minutes + "м";
  }
  
  return (

  <>
      {location.pathname === "/saved-movies"
      ?
        <li className="moviescard">
          <a href={props.movie.trailer} className="moviescard__image" target="blank"><img src={props.image} alt={props.nameRU} className="moviescard__image"/></a>
          <p className="moviescard__title">{props.nameRU}</p>
          <button className="moviescard__icon-remove" type="button" onClick={handleSavedMovieDelete}></button>
          <p className="moviescard__duration">{getDurationFromMinutes(props.duration)}</p>
        </li>
      :""
      }
      {location.pathname === "/movies"
      ?
      <li className="moviescard">
        <a href={props.movie.trailerLink} className="moviescard__image" target="blank"><img src={ifImageHasALink(props.image)} alt={props.nameRU} className="moviescard__image"/></a>
        <p className="moviescard__title">{props.nameRU}</p>
        <button className={cardLikeButtonClassName} type="button" onClick={isLiked ? handleMovieDelete : handleMovieLike}></button>
        <p className="moviescard__duration">{getDurationFromMinutes(props.duration)}</p>
      </li>
      :""
      }
</>

  );
}

export default MoviesCard;