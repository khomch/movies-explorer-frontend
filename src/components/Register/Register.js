import Header from '../Header/Header.js';
import React from 'react'; 
import { Link, useHistory } from 'react-router-dom';

function Register(props) {


    //хук управления формой и валидации формы
  
    const [values, setValues] = React.useState({
      name: '',
      email: '',
      password: ''
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

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = values;

    props.handleRegister(name, email, password, history)
  }

  return (

    <div className="register">
        <Header/>

        <h2 className="register__title">Добро пожаловать!</h2>
      
        <form className="register__form" method="GET" action="#" name={`${props.name}`} onSubmit={handleSubmit} >
          <div className="register__icon"></div>

            <p className="register__input-name">Имя</p>
            <input className="register__input" type="text" name="name" placeholder="" maxLength="40" minLength="2" 
              value={values.name} onChange={handleChange} required aria-label="инпут имени"         
              pattern="^[a-zA-ZА-Яа-яЁё\s -]+$"
              />
            <span className="register___error">{errors.name}</span>
           
            <p className="register__input-name">E-mail</p>
            <input className="register__input" type="email" name="email" placeholder="" maxLength="40" minLength="2" 
            value={values.email} onChange={handleChange} required aria-label="инпут email"/>
            <span className="register___error">{errors.email}</span>
           
            <p className="register__input-name">Пароль</p>
            <input className="register__input" maxLength="40" minLength="3" type="password" name="password"
            value={values.password} onChange={handleChange} required aria-label="инпут password"/>
            <span className="register___error">{errors.password}</span>
            
            <span className="register___server-error">{props.errorMessage}</span>
            <button className={isValid ? "register__submit-button" : "register__submit-button register__submit-button_inactive"  } type="submit" aria-label="Зарегистрироваться">Зарегистрироваться</button>
            
            <p className="register__enter">Уже зарегистрированы? <Link to="/signin" className="register__enter-link">Войти</Link></p>
            
        </form>
        
    </div>
  );
}

export default Register;