import MoviesCard from '../MoviesCard/MoviesCard.js';


function MoviesCardList(props) {
  return (
   <div className="moviescardlist__container">
      <ul className="moviescardlist__cards">
          <MoviesCard/>
      </ul>
      <button className="moviescardlist__showmore">Ещё</button>
    </div>
  );
}

export default MoviesCardList;