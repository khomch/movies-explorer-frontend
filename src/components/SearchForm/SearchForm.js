import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.js';

function SearchForm(props) {


  // стейт для значения инпута
  const [name, setName] = React.useState('');

  function handleNameChange(e) {
    setName(e.target.value)
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    props.handleSearch({
      title: name,
    });
  }


  
  return (
  
    <div className="searchform__content">
        <form className="searchform__form" method="GET" action="#" name={`${props.name}`} noValidate onSubmit={handleSubmit}>
            <div className="searchform__icon"></div>
            <input onChange={handleNameChange} className="searchform__input" type="text" name="name" placeholder="Фильм"
          required aria-label="инпут фильма" />
            <button className="searchform__search-button" type="submit" aria-label="Тык"></button>
            <div className="searchform__checkbox">
              <FilterCheckbox
                handleShortMoviesFilter={props.handleShortMoviesFilter}
                isShortFilmsFilterOn={props.isShortFilmsFilterOn}
                />
            </div>
        </form>
    </div>

  );
}

export default SearchForm;