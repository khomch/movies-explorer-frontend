import checkboxActive from '../../images/checkbox-active.svg';

function FilterCheckbox(props) {
  
  return (
    <div className="filtercheckbox__checkbox-area">
      <img src={checkboxActive} alt="Логотип сайта" className="filtercheckbox__checkbox"/>
      <p className="filtercheckbox__caption">Короткометражки</p>
    </div>

  );
}

export default FilterCheckbox;