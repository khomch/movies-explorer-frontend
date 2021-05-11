import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.js';

function SearchForm(props) {
  
  return (
  
    <div className="searchform__content">
        <form className="searchform__form" method="GET" action="#" name={`${props.name}`} noValidate onSubmit={props.onSubmit}>
            <div className="searchform__icon"></div>
            <input className="searchform__input" type="text" name="movie" placeholder="Фильм"
          required aria-label="инпут фильма"/>
            {/* <span className="searchform___error" id="link-error"/> */}
            <button className="searchform__search-button" type="submit" aria-label="Тык"></button>
            <div className="searchform__checkbox">
              <FilterCheckbox/>
            </div>
        </form>
    </div>

  );
}

export default SearchForm;