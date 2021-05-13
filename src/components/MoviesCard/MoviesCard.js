import movieImage from '../../images/moviescard_image1.jpg';
import { useLocation } from 'react-router-dom';

function MoviesCard(props) {
  const location = useLocation();
  return (
    <>
    {location.pathname === "/movies"
    ? 
    <li className="moviescard">
        <img src={movieImage} alt="Изображение фильма" className="moviescard__image"/>
        <p className="moviescard__title">33 слова о дизайне</p>
        <button className="moviescard__icon moviescard__icon_active" type="button"></button>
        <p className="moviescard__duration">1ч 47м</p>
    </li>
    : ""
    }
    {location.pathname === "/saved-movies"
    ? 
    <li className="moviescard">
        <img src={movieImage} alt="Изображение фильма" className="moviescard__image"/>
        <p className="moviescard__title">33 слова о дизайне</p>
        <button className="moviescard__icon-remove" type="button"></button>
        <p className="moviescard__duration">1ч 47м</p>
    </li>
    : ""
    }

    {location.pathname === "/movies"
    ? 
    <li className="moviescard">
        <img src={movieImage} alt="Изображение фильма" className="moviescard__image"/>
        <p className="moviescard__title">33 слова о дизайне</p>
        <button className="moviescard__icon" type="button"></button>
        <p className="moviescard__duration">1ч 47м</p>
    </li>
    : ""
    }
    {location.pathname === "/saved-movies"
    ? 
    <li className="moviescard">
        <img src={movieImage} alt="Изображение фильма" className="moviescard__image"/>
        <p className="moviescard__title">33 слова о дизайне</p>
        <button className="moviescard__icon-remove" type="button"></button>
        <p className="moviescard__duration">1ч 47м</p>
    </li>
    : ""
    }
    {location.pathname === "/movies"
    ? 
    <li className="moviescard">
        <img src={movieImage} alt="Изображение фильма" className="moviescard__image"/>
        <p className="moviescard__title">33 слова о дизайне</p>
        <button className="moviescard__icon moviescard__icon_active" type="button"></button>
        <p className="moviescard__duration">1ч 47м</p>
    </li>
    : ""
    }
    {location.pathname === "/saved-movies"
    ? 
    <li className="moviescard">
        <img src={movieImage} alt="Изображение фильма" className="moviescard__image"/>
        <p className="moviescard__title">33 слова о дизайне</p>
        <button className="moviescard__icon-remove" type="button"></button>
        <p className="moviescard__duration">1ч 47м</p>
    </li>
    : ""
    }
    {location.pathname === "/movies"
    ? 
    <li className="moviescard">
        <img src={movieImage} alt="Изображение фильма" className="moviescard__image"/>
        <p className="moviescard__title">33 слова о дизайне</p>
        <button className="moviescard__icon moviescard__icon_active" type="button"></button>
        <p className="moviescard__duration">1ч 47м</p>
    </li>
    : ""
    }
    {location.pathname === "/saved-movies"
    ? 
    <li className="moviescard">
        <img src={movieImage} alt="Изображение фильма" className="moviescard__image"/>
        <p className="moviescard__title">33 слова о дизайне</p>
        <button className="moviescard__icon-remove" type="button"></button>
        <p className="moviescard__duration">1ч 47м</p>
    </li>
    : ""
    }
    {location.pathname === "/movies"
    ? 
    <li className="moviescard">
        <img src={movieImage} alt="Изображение фильма" className="moviescard__image"/>
        <p className="moviescard__title">33 слова о дизайне</p>
        <button className="moviescard__icon moviescard__icon_active" type="button"></button>
        <p className="moviescard__duration">1ч 47м</p>
    </li>
    : ""
    }
    {location.pathname === "/saved-movies"
    ? 
    <li className="moviescard">
        <img src={movieImage} alt="Изображение фильма" className="moviescard__image"/>
        <p className="moviescard__title">33 слова о дизайне</p>
        <button className="moviescard__icon-remove" type="button"></button>
        <p className="moviescard__duration">1ч 47м</p>
    </li>
    : ""
    }
      {location.pathname === "/movies"
    ? 
    <li className="moviescard">
        <img src={movieImage} alt="Изображение фильма" className="moviescard__image"/>
        <p className="moviescard__title">33 слова о дизайне</p>
        <button className="moviescard__icon moviescard__icon_active" type="button"></button>
        <p className="moviescard__duration">1ч 47м</p>
    </li>
    : ""
    }
    {location.pathname === "/saved-movies"
    ? 
    <li className="moviescard">
        <img src={movieImage} alt="Изображение фильма" className="moviescard__image"/>
        <p className="moviescard__title">33 слова о дизайне</p>
        <button className="moviescard__icon-remove" type="button"></button>
        <p className="moviescard__duration">1ч 47м</p>
    </li>
    : ""
    }
    {location.pathname === "/movies"
    ? 
    <li className="moviescard">
        <img src={movieImage} alt="Изображение фильма" className="moviescard__image"/>
        <p className="moviescard__title">33 слова о дизайне</p>
        <button className="moviescard__icon moviescard__icon_active" type="button"></button>
        <p className="moviescard__duration">1ч 47м</p>
    </li>
    : ""
    }
    {location.pathname === "/saved-movies"
    ? 
    <li className="moviescard">
        <img src={movieImage} alt="Изображение фильма" className="moviescard__image"/>
        <p className="moviescard__title">33 слова о дизайне</p>
        <button className="moviescard__icon-remove" type="button"></button>
        <p className="moviescard__duration">1ч 47м</p>
    </li>
    : ""
    }
    {location.pathname === "/movies"
    ? 
    <li className="moviescard">
        <img src={movieImage} alt="Изображение фильма" className="moviescard__image"/>
        <p className="moviescard__title">33 слова о дизайне</p>
        <button className="moviescard__icon moviescard__icon_active" type="button"></button>
        <p className="moviescard__duration">1ч 47м</p>
    </li>
    : ""
    }
    {location.pathname === "/saved-movies"
    ? 
    <li className="moviescard">
        <img src={movieImage} alt="Изображение фильма" className="moviescard__image"/>
        <p className="moviescard__title">33 слова о дизайне</p>
        <button className="moviescard__icon-remove" type="button"></button>
        <p className="moviescard__duration">1ч 47м</p>
    </li>
    : ""
    }
    {location.pathname === "/movies"
    ? 
    <li className="moviescard">
        <img src={movieImage} alt="Изображение фильма" className="moviescard__image"/>
        <p className="moviescard__title">33 слова о дизайне</p>
        <button className="moviescard__icon moviescard__icon_active" type="button"></button>
        <p className="moviescard__duration">1ч 47м</p>
    </li>
    : ""
    }
    {location.pathname === "/saved-movies"
    ? 
    <li className="moviescard">
        <img src={movieImage} alt="Изображение фильма" className="moviescard__image"/>
        <p className="moviescard__title">33 слова о дизайне</p>
        <button className="moviescard__icon-remove" type="button"></button>
        <p className="moviescard__duration">1ч 47м</p>
    </li>
    : ""
    }
    </>
  );
}

export default MoviesCard;