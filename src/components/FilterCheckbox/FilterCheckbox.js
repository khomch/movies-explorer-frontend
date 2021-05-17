
function FilterCheckbox(props) {
  
  return (
    <div className="filtercheckbox__checkbox-area">
      <button  className={props.isShortFilmsFilterOn ? "filtercheckbox__checkbox" : "filtercheckbox__checkbox filtercheckbox__checkbox_inactive"} onClick={props.handleShortMoviesFilter}></button>
      <p className="filtercheckbox__caption">Короткометражки</p>
    </div>

  );
}

export default FilterCheckbox;