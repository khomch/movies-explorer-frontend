import Header from '../Header/Header.js';
import React from 'react';
import InfoTooltip from '../InfoTooltip/InfoTooltip.js'
import CurrentUserContext from '../../context/CurrentUserContext'

function Profile(props) {

  // подписываемся на контекст о пользователе хуком 
  const currentUser = React.useContext(CurrentUserContext);

      //хук управления формой и валидации формы
  
    const [values, setValues] = React.useState({
      name: '',
      email: '',
    });
    const [errors, setErrors] = React.useState({});
    const [isValid, setIsValid] = React.useState(false);

    // текст ошибки при вводе недопустимых символов в имя
    const nameError  = 'Имя может содержать только латиницу, кириллицу, пробел или дефис'

    const handleChange = (event) => {
      const target = event.target;
      const name = target.name;
      const value = target.value;

      setValues({...values, [name]: value});
      setErrors({...errors, [name]: target.validationMessage});
      setIsValid(target.closest("form").checkValidity());
      if (event.target.validity.patternMismatch) {
        setErrors({...errors, [name]: nameError})
      }
      
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const { name, email } = values;
  
      props.handleUserData({name, email})
    }
  

  return (

    <div className="profile">
        <Header
          openMobileMenu={props.openMobileMenu}
          mobileMenuIsOpen={props.mobileMenuIsOpen}
          onMobileMenuClose={props.onMobileMenuClose}
        />
        <InfoTooltip isOpen={props.isOpen} isAuthOk={props.loggedIn} onClose={props.closeAllPopups}/>
      <h2 className="profile__title">Привет, {currentUser.name}!</h2>
      
        <form className="profile__name" method="GET" action="#" name='edit-profile' onSubmit={handleSubmit}>
        <div className="profile__name">
          <p className="profile__field">Имя</p>
          <input className="profile__field-data"
          type="text" name="name" placeholder={currentUser.name} maxLength="40" minLength="2" 
          value={values.name}  onChange={handleChange}  aria-label="инпут имени"         
          pattern="^[a-zA-ZА-Яа-яЁё\s -]+$"/>
          <span className="profile___error">{errors.name}</span>
        </div>
        <div className="profile__email">
          <p className="profile__field">E-mail</p>
          <input className="profile__field-data" type="email" name="email" placeholder={currentUser.email} 
            value={values.email} onChange={handleChange}  aria-label="инпут email"/>
            <span className="profile___error">{errors.email}</span>
        </div>
        <span className="register___server-error">{props.errorMessage}</span>
        <button className={isValid ? "profile__edit" : "profile__edit profile__edit_inactive"} type="submit" aria-label="Зарегистрироваться">Редактировать</button>
        </form>
        <button className="profile__exit" onClick={props.handleSignOut}>Выйти из аккаунта</button>
      
        
    </div>
  );
}

export default Profile;